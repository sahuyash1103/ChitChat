import React from 'react'
import "./sidechatwindow.css"


function SideChatWindow() {
    return (
      <div class="left-container">
       <div class="chat-list">
        <div class="chat-box">
          <div class="img-box">
            <img class="img-cover" src="https://media.istockphoto.com/id/897479344/vector/avatar-profile-icon-male-faceless-user-on-colorful-round-background.jpg?s=170667a&w=0&k=20&c=opO4PECuzGzhoouxHfMfjVUUYbSkwJBgFinqtbOhJfk=" alt=""/>
          </div>
          <div class="chat-details">
            <div class="text-head">
              <h4>Yash</h4>
              <p class="time unread">11:49</p>
            </div>
            <div class="text-message">
              <p>“How are you?”</p>
              <b>1</b>
            </div>
          </div>
        </div>

        <div class="chat-box active">
          <div class="img-box">
            <img class="img-cover" src="data:image/png;base64,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" alt=""/>
          </div>
          <div class="chat-details">
            <div class="text-head">
              <h4>Sayma</h4>
              <p class="time">07:49</p>
            </div>
            <div class="text-message">
              <p>Sure.</p>
            </div>
          </div>
        </div>

        <div class="chat-box">
          <div class="img-box">
            <img class="img-cover" src="https://thumbs.dreamstime.com/b/male-avatar-profile-icon-round-man-face-male-avatar-profile-icon-round-man-face-flat-vector-illustration-102767980.jpg" alt=""/>
          </div>
          <div class="chat-details">
            <div class="text-head">
              <h4>Satyam</h4>
              <p class="time unread">10:49</p>
            </div>
            <div class="text-message">
              <p>“Any updates?”</p>
              <b>4</b>
            </div>
          </div>
        </div>

        <div class="chat-box">
          <div class="img-box">
            <img class="img-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfVYXuyABJpg2S1xgFB14nO6R2xa85GnIhVrfd_UmHt_EYdXwh0q3iEA-QlGXNzdehhA&usqp=CAU" alt=""/>
          </div>
          <div class="chat-details">
            <div class="text-head">
              <h4>Shifa</h4>
              <p class="time unread">09:49</p>
            </div>
            <div class="text-message">
              <p>“And, What about the documentation?”</p>
              <b>2</b>
            </div>
          </div>
        </div>

        <div class="chat-box">
          <div class="img-box">
            <img class="img-cover" src="https://media.licdn.com/dms/image/C4D03AQEPYhOrGAYffQ/profile-displayphoto-shrink_800_800/0/1662200759724?e=2147483647&v=beta&t=yw-PtQnM20byydFw6aC4mdiZ5UsodCtkb5cns759UuU" alt=""/>
          </div>
          <div class="chat-details">
            <div class="text-head">
              <h4>Taliha</h4>
              <p class="time unread">Yesterday</p>
            </div>
            <div class="text-message">
              <p>“I am also here!”</p>
              <b>2</b>
            </div>
          </div>
        </div>
        </div>
    </div>
    
    )
  }
  
  export default SideChatWindow