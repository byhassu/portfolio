import React from 'react'
import Nav from './Nav'
import Contact from './Contact'

export default function About() {
  return (
    <>
    <Nav/>
    <div className="container mt-5">
    <h3 className="text-warning mb-5 border-bottom">Skills</h3>
    <div className="row text-white text-center mb-5">
        <div className="col-sm-4 ">
            <i className="fa-brands fa-python fa-2x mb-3 " style={{color:"chartreuse"}} ></i>
            <h3>Programmer</h3>
            <p style={{color:"silver", fontSize: "1rem"}}>Python (Libraries: Pandas,Numpy,Matplotlib,SKlearn,OpenCv)</p>
        </div>
        <div className="col-sm-4 ">
            <i className="fas fa-code fa-2x mb-3 " style={{color:"chartreuse" }}></i>
            <h3>Web Development</h3>
            <p style={{color:"silver", fontSize: "1rem"}}> HTML, CSS, Bootstrap, JavaScript,React and Python Framework(Django)</p>
        </div>
        <div className="col-sm-4 ">
            <i className="fa-brands fa-internet-explorer fa-2x mb-3" style={{color:"chartreuse"}}></i>
            <h3>Online Works</h3>
            <p style={{color:"silver", fontSize: "1rem"}}>Filling Online Form for(Addmission,Voter id card,Pan card,Passport etc)</p>
        </div>



    </div>

    <div className="row text-white text-center mb-5">
        <div className="col-sm-4 ">
            <i className="fa-solid fa-server fa-2x mb-3 " style={{color:"chartreuse"}}></i>
            <h3>Hosting</h3>
            <p style={{color:"silver", fontSize:"1rem"}}>Hosting  websites at free domain and paid domain </p>
        </div>
        <div className="col-sm-4 ">
            <i className="fa-solid fa-plane fa-2x mb-3" style={{color:"chartreuse"}}></i>
            <h3>Ticketing</h3>
            <p style={{color:"silver", fontSize:"1rem"}}>Booking online tickets(Railway tickets & Air tickets)</p>
        </div>

        <div className="col-sm-4 ">
            <i className="fas fa-headset fa-2x mb-3 " style={{color:"chartreuse"}}></i>
            <h3>Support</h3>
            <p style={{color:"silver", fontSize: "1rem"}}>You can also contact me for query,I will be happy to help you  <a href='https://www.linkedin.com/in/md-hasnain-738484235/'>(My Linkedin)</a></p>
        </div>




    </div>


</div>
<Contact/>
    </>
  )
}
