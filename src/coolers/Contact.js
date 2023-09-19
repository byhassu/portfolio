import React, { useState } from 'react'
let newtxt=''
export default function Contact() {
    const [txt,setTxt]=useState('')
    const onCH=(event)=>{
        newtxt=event.target.value
        console.log(newtxt)
        setTxt(newtxt)


    }
    const onCl=()=>{
    
        newtxt=newtxt.replace("@","(at)") 
        
        setTxt(newtxt)
    }
   
  return (
    <>
    <div  id='contact'>
        <div className="container mt-5">
    <h4 className=" text-warning mb-5 border-bottom">Hire me</h4>
    <div className="row text-white mb-5">
        <p className="mx-auto mb-5" style={{fontSize: "1rem "}}>
            Do you have any questions? Please not hesitate to contact.
            I will come back to you within a matter of hours to help you
        </p>
        <div className="col-sm-9 mb-3">
            <form action="https://formspree.io/f/maygbeoq" method='POST'>
                <div className="form-row">
                   


                    <div className=" col-md-6">
                        <label >Name *</label>
                        <input type="text" className="form-control" name="inputTextarea" id="inputEmail" required style={{width:"100%" ,height:"50%"}} />
                    </div>
                    <div className=" col-md-6">
                        <label >Compnay Name</label>
                        <input type="text" className="form-control" name="inputTextarea" id="inputEmail2"  style={{width:"100%" ,height:"50%"}}/>
                    </div>
                    <div className=" col-md-6">
                        <label >Email *</label>
                        <input type="text" className="form-control" name="inputTextarea" id="inputEmail3"  required style={{width:"100%" ,height:"50%"}} onChange={onCH} value={txt}/>
                    </div>
                    <div className="col-md-6">
                    <label >Your message</label>
                    <textarea className="form-control" name="inputTextarea" id="inputTextarea" required></textarea>

                </div>
                </div>


                
                <button  className="btn btn-primary" type="submit" onClick={onCl} >Send</button>
            </form>

        </div>
        <div className="col-sm-3 text-center">
            <ul className="list-unstyled">
                <li>
                    <i className="fas fa-map-marker-alt fa-2x " style={{color:"chartreuse "}}></i>
                   <p>New Delhi, Delhi, India</p>
                </li>
                <li>
                    <i className="fas fa-envelope mt-4 fa-2x" style={{color:"chartreuse "}}></i>
                    <p>hasnainkhan <br/>1818@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>
    <div className="text-center">
        <a href="" target="_blank">
            <i className="fab fa-instagram mr-3 fa-2x" style={{color:"chartreuse "}}></i>
        </a>

        <a href="#" target="_blank">
            <i className="fab fa-facebook mr-3 fa-2x" style={{color:"chartreuse "}}></i>
        </a>

        <a href="#" target="_blank">
            <i className="fab fa-twitter mr-3 fa-2x" style={{color:"chartreuse "}}></i>
        </a>

    </div>
</div>
</div>
    </>
  )
}
