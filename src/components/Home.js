import React from 'react';
import bgimg from '../bgimgpng.png'

const Home = () => {
    return (
        <div style={{background: `URL(${bgimg})`, backgroundSize: "cover", height:"86.5vh", minHeight:"80vh"}}>
            <h1 align="center" style={{fontSize:"48px", paddingTop:"50px"}}>C:\> International Coding Conference _</h1>
            <h1 align="left" style={{paddingLeft:"210px", paddingTop: "100px", fontSize:"36px", color: "#00b3fe"}}>Where?</h1>
            <p align="left" style={{paddingLeft:"110px", fontSize:"26px"}}>Amsterdam, Netherlands.</p>
            <h1 align="right" style={{paddingRight:"220px", fontSize:"36px", color: "#00b3fe"}}>When?</h1>
            <p align="right" style={{paddingRight:"135px", fontSize:"26px"}}>23-25 April, 2021.</p>
        </div>
    );
}

export default Home;