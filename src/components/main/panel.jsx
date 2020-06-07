import React, { Component } from "react";
import Logo from "../images/Nu-VeL.png"


class Panel extends Component {
  render() {
    return (
    //   <div>
    //     <div className="services" id="services_off">
    //       <div className="card " id="pic">
    //         <p className="service__title">Name</p>
    //         <p>
    //           Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed
    //           mi risus, congue in nunc sed, bibendum porta nibh. Praesent.
    //         </p>
    //       </div>        
    //     </div>
    //   </div>
<>
    <div className="media" id="pic">
  {/* <img src={Logo} className="align-self-start mr-3" alt="Max Prex"/> */}
  <div className="media-body">
    <h5 className="mt-0">Top-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
</>
    );
  }
}
export default Panel;