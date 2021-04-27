import React from 'react';

const Registration = () => {
    return (
        <div>
            <h1 style={{paddingTop: "85px"}}>ICC Registration Form</h1>
            <br/><br/>
            <form method="get" style={{color: "#00b3fe", textAlign:"left", paddingLeft:"550px"}}>
                <label for="fname">First Name </label><span style={{color:"black"}}>.............</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="fname" name="fname"/><br/><br/>
                <label for="lname">Last Name </label><span style={{color:"black"}}>..............</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="lname" name="lname"/><br/><br/>
                <label for="atitle">Article Title </label><span style={{color:"black"}}>..........</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="atitle" name="atitle"/><br/><br/>
                <label for="pno">Phone Number </label><span style={{color:"black"}}>...........</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="pno" name="pno"/><br/><br/>
                <label for="add">Address </label><span style={{color:"black"}}>................</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="add" name="add"/><br/><br/>
                <label for="city">City </label><span style={{color:"black"}}>...................</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="city" name="city"/><br/><br/>
                <label for="country">Country </label><span style={{color:"black"}}>................</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="country" name="country"/><br/><br/>
                <label for="eid">E-mail ID </label><span style={{color:"black"}}>..............</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="eid" name="atitle"/><br/><br/>
                <label for="np">Number of Papers </label><span style={{color:"black"}}>.......</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="np" name="pno"/><br/><br/>
                <label for="ccode">Coupon Code(if any) </label><span style={{color:"black"}}>....</span>:<span style={{color:"black"}}>....</span>
                <input type="text" id="ccode" name="ccode"/><br/><br/><br/>
                <span style={{color:"black"}}>.....................</span><input type="submit" value="Submit"/>
            </form>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Registration;