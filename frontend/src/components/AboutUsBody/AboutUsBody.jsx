import "./aboutUsBody.css";
import React from 'react'

export default function AboutUsBody() {
  return (
    <div>
        <div className="aboutUsBody">
            <div className="aboutUsText">

                <h1>ABOUT US</h1>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum labore fugiat similique. Placeat a voluptatum, cumque sint ipsam officia. Sit rerum, nam non commodi voluptates dolores eaque suscipit optio? Vero?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit, voluptates, nam eius rerum consequuntur deserunt voluptas, natus quia aliquam temporibus? Repellendus aliquid, porro eligendi nostrum quo iure ut est.
                </p>
            </div>
            <div className="aboutUsImg">
                <img src="/images/about.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}
