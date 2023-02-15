import React from "react";
import Heading from "./Heading";
import index from "./index.css";
import first from "../../images/first.jpeg";

const Home = () => {
    return (
        <>
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

        </>
    );
}

export default Home