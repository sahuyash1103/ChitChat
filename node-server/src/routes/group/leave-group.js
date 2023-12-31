const router = require('express').Router();
const Group = require('./../../mongo/schema/groupSchema');
const User = require('./../../mongo/schema/userSchema');
const auth = require('./../../middlewares/auth.middleware');

router.delete('/:id', auth, async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(400).send({ message: 'User not found' });

    const groupId = req.params.id;
    if (!groupId) return res.status(400).send({ message: 'Group id not provided' });

    const isGroupMember = user.groups.find(id => id.toString() === groupId.toString());
    if (!isGroupMember) return res.status(400).send({ message: 'You are not a member of this group' });

    const group = await Group.findById(req.params.id);
    if (!group) return res.status(400).send({ message: 'Group not found' });


    if (group.admin.toString() === user._id.toString())
        res.status(400).send({ message: 'You can\'t leave the group, you are the admin of this group' });

    try {
        const updatedUser = await User.findByIdAndUpdate(user._id,
            {
                $pull: {
                    groups: group._id
                }
            }, { new: true });

        const updatedGroup = await Group.findByIdAndUpdate(group._id,
            {
                $pull: {
                    members: user._id
                }
            }, { new: true });
            
        res.status(200).json({
            message: 'Group left successfully',
            data: {
                updatedUser,
                updatedGroup
            }
        });
    } catch (err) {
        return res.status(500).json({ message: 'Something went wrong', error: err });
    }
});

module.exports = router;