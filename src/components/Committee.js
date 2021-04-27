import React from 'react';
import { Layout } from '../layout';


const Committee = () => {
    return (
        <Layout>
            <h1 style={{paddingTop: "85px"}}>International Coding Conference Committee</h1>

            <img src="committee.png" alt="Programmer" height="520px" width="575px" style={{paddingTop: "20px", paddingLeft:"155px"}} align="left" />

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
        </Layout>
    );
}

export default Committee;