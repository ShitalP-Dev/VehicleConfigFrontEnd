import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ContactUs extends React.Component {
   render() {
      return (
         <form id="myform" className="container loginbg ">
            <br></br>
            <br></br>
            <center>

               <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-5 col-lg-6 "><br></br><br></br>
                     {/* <div className ="col-xs-6 col-sm-6 col-md-7 col-lg-3  m-5"> */}
                     <h1 className="login  ">Conatct Details</h1>   <br></br>
                     <h4>Contact Number: 1234567890<br></br><br></br>
Email: phandshital01@gmail.com <br></br><br></br>
Sananse.saurabh18@gmail.com</h4>

                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-7 col-lg-3  m-5">
                     <h1 className="login  ">Get In Touch</h1>
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="35" rows="5" id="contactMessage" name="contactMessage"></textarea>
                        </div>

                        <div>
                           <button className="btn btn-danger btnsubmit">Submit</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset></div>
               </div></center>


         </form>



      );
   }
}
export default ContactUs;