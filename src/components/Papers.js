import React from 'react';
import '../App.css'

const Papers = () => {
    return (
        <div>
        <h1 style={{paddingTop: "57px"}}>ICC Call for Papers</h1>
        <div align="justify" style={{color:"white", border:"2px solid #00b3ff", borderTop:"30px solid #00b3ff", margin:"90px", padding:"69px"}}>
            <span style={{color:"#defe47"}}>C:\> </span>We encourage you to invite colleagues to participate in the conference and submit original research for the conference Call for Papers.
            <br/><br/><span style={{color:"#defe47"}}>C:\> </span>The conference is seeking submissions related to the following conference topics: Management, Economics, Business , Finance. Other related tracks and topics will also be considered.
            Submitted abstracts will be evaluated by the Scientific Committee. If abstract is accepted, author agrees to send full text paper, including results, tables, figures and references. 
            <br/><br/><span style={{color:"#defe47"}}>C:\> </span>All submissions should report original and previously unpublished research results no matter the type of research paper you are presenting. Full text papers (.docx and .doc) will be accepted by Electronic Submission Form.
            Manuscripts should meet the format set by the Conference committee and are subject to review.
            <ul>
            <li>Please submit your papers via the <a href="./registration.html">ONLINE SUBMISSION FORM.</a></li>
            <li>For more information, contact the organizing committee via info[at]icconf.org</li>
            </ul>
        </div>
        </div>
    );
}

export default Papers;