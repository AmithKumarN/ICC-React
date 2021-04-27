import React from 'react';

const Contact = () => {
    return (
        <div style={{marginBottom:"145px", marginTop:"100px"}}>
            <h1 style={{paddingTop: "85px"}}>Have some questions?</h1>
            <br/><br/><br/>

            <form method="get" style={{color: "#00b3fe", textAlign:"left", paddingLeft:"550px"}}>
                <label for="fname">First Name </label><span style={{color:"black"}}>.............</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="fname" name="fname"/><br/><br/>
                <br/><label for="lname">Last Name </label><span style={{color:"black"}}>..............</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="lname" name="lname"/><br/><br/>
                <br/><label for="eid">E-mail ID </label><span style={{color:"black"}}>..............</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="eid" name="atitle"/><br/><br/>
                <br/><label for="np">Your message </label><span style={{color:"black"}}>...........</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="np" name="pno"/><br/><br/><br/><br/>
                <span style={{color:"black"}}>.....................</span><input className="submit" type="submit" value="Shoot!"/>
            </form>
        </div>
    );
}

export default Contact;