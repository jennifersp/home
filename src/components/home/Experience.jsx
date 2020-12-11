import React, { useState, useEffect, Profiler } from "react";
import Crown from "../../editable-stuff/crownsterling-logo.png"
import Saline from "../../editable-stuff/saline-logo.jpg";
import Docker from "../../editable-stuff/docker.png";
import Golang from "../../editable-stuff/golang.png";
import C from "../../editable-stuff/c.png";
import OpenSSL from "../../editable-stuff/openssl.jpg";
import CPlusPlus from "../../editable-stuff/c++.png";
import Github from "../../editable-stuff/github.png";
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Crown}
                        alt="dell technologies logo"
                        width="150"
                        height="140"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Software Engineer Intern  
                        <br/>
                        May 2020 - Present
                        <br/>
                    </p>
                    {/* <ul style={{display: "inline-block"}, {textAlign: "left"}, {fontSize: "16px"}}    >
                            <li>Implemented multithreading in the linear calculations of numbers in billions, which enhanced the program speed by 300%.</li>
                            <li>Improved OpenSSL implementation by replacing streams with buffers.</li>
                            <li>Took the role of facilitating software delivery by customizing backend libraries for different operating systems based on design specifications.</li>                       
                            <li>Developed application modules in C, Go, and Node.js under the direction of lead programmers.</li>
                    </ul> */}
                    <img style={{margin:"5px 12px 0 12px"}}
                        // className="border border-secondary rounded-circle"
                        src={Docker}
                        alt="dell technologies logo"
                        width="50"
                        height="50"
                    />
                    <img style={{margin:"5px 12px 0 12px"}}
                        // className="border border-secondary rounded-circle"
                        src={Golang}
                        alt="dell technologies logo"
                        width="50"
                        height="50"
                    />
                    <img style={{margin:"5px 12px 0 12px"}}
                        // className="border border-secondary rounded-circle"
                        src={C}
                        alt="dell technologies logo"
                        width="50"
                        height="50"
                    />
                    <img style={{margin:"5px 12px 0 12px"}}
                        // className="border border-secondary rounded-circle"
                        src={OpenSSL}
                        alt="dell technologies logo"
                        width="50"
                        height="50"
                    />
                    {/* <h3>Dell Technologies</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Saline}
                        alt="boeing logo"
                        width="150"
                        height="135"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Technical Assistant Intern  
                        <br/>
                            Summer 2018 &amp; Summer 2019   
                    </p>
                    {/* <ul style={{display: "inline-block"}, {textAlign: "left"}, {fontSize: "16px"}}    >
                            <li>Studied IP-XACTand received training on Magillem IP-XACT tools.</li>
                            <li>Researched relevant resources to assist members on fixing and reporting bugs.</li>
                            <li>Worked as a technical assistant at seminars on IP-XACT at Samsung Electronics and SK Hynix.</li>                       
                            <li>Assisted setting up lab environment and hands on introduction to Magillem IP-XACT packager  .</li>
                    </ul> */}
                    <img style={{margin:"5px 12px 0 12px"}}
                        // className="border border-secondary rounded-circle"
                        src={Github}
                        alt="dell technologies logo"
                        width="50"
                        height="50"
                    />
                    <img style={{margin:"5px 12px 0 12px"}}
                        // className="border border-secondary rounded-circle"
                        src={CPlusPlus}
                        alt="dell technologies logo"
                        width="50"
                        height="50"
                    />
                    <img style={{margin:"5px 12px 0 12px"}}
                        // className="border border-secondary rounded-circle"
                        src={Golang}
                        alt="dell technologies logo"
                        width="50"
                        height="50"
                    />
                    <img style={{margin:"5px 12px 0 12px"}}
                        // className="border border-secondary rounded-circle"
                        src={Golang}
                        alt="dell technologies logo"
                        width="50"
                        height="50"
                    />
                    {/* <h3>Boeing</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;