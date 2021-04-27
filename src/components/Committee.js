import React from 'react';
import committee from '../committee.png'


const Committee = () => {
    return (
        <div>
            <h1 style={{paddingTop: "57px"}}>International Coding Conference Committee</h1>

            <img src={committee} alt="Programmer" height="520px" width="575px" style={{paddingTop: "20px", paddingLeft:"155px"}} align="left" />

            <ol align="left" style={{paddingLeft: "950px", paddingTop:"60px", lineHeight:"2.5", fontSize:"20px", color:"#00b3fe"}}>
                <li>
                    General Chair
                    <ul style={{color:"#defe47"}}>
                        <li>Elon Musk</li>
                        <li>Sundar Pichai</li>
                    </ul>
                </li>
                <li>
                    Finance Chair
                    <ul style={{color:"#defe47"}}>
                        <li>Bill Gates</li>
                        <li>Mukesh Ambani</li>
                    </ul>
                </li>
                <li>
                    Publicity and Public Relations Chair
                    <ul style={{color:"#defe47"}}>
                        <li>Tim Cook</li>
                        <li>Marques Brownlee</li>
                    </ul>
                </li>
            </ol>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Committee;