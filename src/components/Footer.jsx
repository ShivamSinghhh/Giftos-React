import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-1">
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Instagram</div>
          <div>Youtube</div>
        </div>
        <div className="footer-2">
          <div>
            <h3>ABOUT US</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quidem eaque tempora? Dolore eveniet
              sequi
              corrupti recusandae ad unde iusto sint facere, itaque debitis? Blanditiis modi ipsum veritatis expedita
              similique.</p>
          </div>
          <div>
            <h3>News Letter</h3>
            <form action="submit"><input type="email" placeholder="Enter your email"/>
              <button>SUBSCRIBE</button>
            </form>
          </div>
          <div>
            <h3>NEED HELP</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quidem eaque tempora? Dolore eveniet
              sequi
              corrupti recusandae ad unde iusto sint facere, itaque debitis? Blanditiis modi ipsum veritatis expedita
              similique.</p>
          </div>
          <div>
            <h3>CONTACT US</h3>
            <p>Gb road 123 london Uk</p>
            <p>+01 1234567890</p>
            <p>demo@gmail.com</p>
          </div>
        </div>
        <div className="footer-3">
          <div>
            <hr/>
          </div>
          <p>@2022 All Rights Reserved By Group-4</p>
        </div>
      </div>
  )
}

export default Footer