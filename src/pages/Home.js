import React from "react";
import "./Home.css";
import GuyCoding from "../images/prisoners-tech.png";

export default function Home() {
    return (
        <>
            <div className="row">
                <div className="col-sm-4">
                    <div className="boxOne">
                        <h1 className="headerHomePage">
                            EVER CONSIDERED LEARNING TO CODE AS A FORM TO REDUCE
                            THE RECIDIVISM RATE IN UNITED STATES?
                        </h1>
                    </div>
                </div>
                <div className="col-sm-4">
                    <img
                        className="techGuy"
                        src={GuyCoding}
                        alt="Boomer doggo."
                    />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="boxThree">
                            <img
                                src="https://www.comevo.com/wp-content/uploads/2019/10/Blog-post-photo.jpg"
                                alt="Boomer doggo."
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="boxFour">
                            <img
                                src="https://worktogether4peace.org/wp-content/uploads/2018/04/29541523_10155177571686237_7583812550276138378_n.jpg"
                                alt="Boomer doggo."
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="boxFive">
                            <img
                                src="https://images.theconversation.com/files/378668/original/file-20210113-23-1trii4t.png?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=321&fit=crop&dpr=1"
                                alt="Boomer doggo."
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="boxSix">
                            <img
                                src="https://i.pinimg.com/originals/78/f7/71/78f771e3daeb0da4886230e9403a0925.png"
                                alt="Boomer doggo."
                            />
                        </div>{" "}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="boxSeven">
                            <h3 className="headerHomePage">
                                About Second Chance Through Code
                            </h3>
                            <hr className="rounded"></hr>
                            <h4>
                                This site will list free resources where
                                formerly incarcerated people can find
                                organizations that offer free mentorship and/or
                                classes to learn a career skill in coding. The
                                main goal that we are trying to accomplish is
                                listing all these valuable resources in one
                                central location to have them accessible for
                                those who are re-entering society and ready to
                                start their second chance in life.{" "}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
