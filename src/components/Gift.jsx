import React from 'react'

export default function Gift() {
  return (
    <div className="row gift-container">
      <div className="col-2">
        <img src="./images/gifts.png" alt="gift img" />
      </div>
      <div className="col-2">
        <h1>GIFT FOR YOUR LOVED ONES</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur exercitationem modi veritatis consequuntur repudiandae
          autem neque officiis beatae doloribus, quibusdam possimus porro
          laboriosam, rem corporis. Nam veritatis rem dicta unde.
        </p>
        <button id="buy-now-gift">Buy Now</button> <button id="see-more-gift">See More</button>
      </div>

    </div>
  )
}
