import React from "react";
import Heading from "./Heading";
import index from "./index.css";
import first from "../../images/first.jpeg";
import sec from "../../images/sec.jpeg";
import Explore from "../Explore.js";
import { useNavigate } from "react-router-dom";


const Home = () => {

    let navigate = useNavigate();
    const routeChange= () => {
        let path = `explore`;
        navigate(path);
    }
    return (
        <div className="container-flex">
            <div className="container-flex">
                <div className="row">
                    <div className="col">
                       <Heading/> 
                    </div>
                    <div className="col">
                        <img className="head-img" src = {first}  />
                    </div>
                </div>
            </div>
            
            <div className="container-flex">
                <div className="row">
                    <div className="col">
                        <img className="sec-img" src={sec} />
                    </div>
                    <div className="col">
                        <div className="stOne">
                            Discover 
                        </div>
                        <div className="stTwo">
                            Your Style
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id leo id felis viverra sollicitudin gravida eleifend nulla. Fusce at sem turpis. Nullam ac erat est. Vestibulum faucibus ac turpis et scelerisque. Morbi et lectus a velit eleifend placerat. Praesent convallis ultrices condimentum. Maecenas in purus non mauris tincidunt dictum a eget orci. Phasellus luctus dapibus cursus. Pellentesque fermentum non nisl ut iaculis. Praesent ac est vitae elit ultrices tincidunt. Duis imperdiet malesuada augue sit amet ultrices. Sed a egestas est. Morbi suscipit nec est non porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id leo id felis viverra sollicitudin gravida eleifend nulla. Fusce at sem turpis. Nullam ac erat est. Vestibulum faucibus ac turpis et scelerisque. Morbi et lectus a velit eleifend placerat. Praesent convallis ultrices condimentum. Maecenas in purus non mauris tincidunt dictum a eget orci. Phasellus luctus dapibus cursus. Pellentesque fermentum non nisl ut iaculis. Praesent ac est vitae elit ultrices tincidunt. Duis imperdiet malesuada augue sit amet ultrices. Sed a egestas est. Morbi suscipit nec est non porttitor.
                        </p>
                    </div>
                </div>
            </div>
           <div className="exploreButton">
                <button className="explore" onClick={routeChange}> Explore More</button>
            </div> 
        </div>
    );
}

export default Home