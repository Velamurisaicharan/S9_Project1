import React from 'react'

function Master() {
    return (
        <div>
            <form>
                <center><h2>Registration Form</h2></center>
                
                Name:<input type="text" id="name" class="name" placeholder="Enter your name" /><br /><br />
                Email:<input type="email" id="email" class="email" placeholder="Enter your email" /><br /><br />
                Password:<input type="password" id="password" class="password" placeholder="Enter your password" /><br /><br />
                <input type="submit" value="Submit" />
                
            </form>
        </div>
    )
}

export default Master
