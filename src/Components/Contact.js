import React, { Component } from 'react';
import * as emailjs from '@emailjs/browser';

class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
         subject: '',
         message: ''
      }
   }

   handleChangeName = (event) => {
      this.setState({
         name: event.target.value,
      });

   }
   handleChangeEmail = (event) => {
      this.setState({
         email: event.target.value,
      });
   }
   handleChangeSubject = (event) => {
      this.setState({
         subject: event.target.value,
      });
   }
   handleChangeMessage = (event) => {
      this.setState({
         message: event.target.value,
      });
   }

   sendMail = () => {
      var template_params = {
         "name": this.state.name,
         "email": this.state.email,
         "subject": this.state.subject,
         "message": this.state.message,
      }

      var service_id = "service_lou2ksh";
      var template_id = "template_itlzuaf";
      emailjs.send(service_id, template_id, template_params, 'swfaMDkc4OzMwfshM')
         .then(function (response) {
            alert('SUCCESS! Your message has been sent succesfully.');
         }, function (err) {
            console.log('FAILED...', err);
         });

         this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
         });
   };

   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <div id="contactForm" name="contactForm">
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactName" name="name" value={this.state.name} onChange={this.handleChangeName} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactEmail" name="email" value={this.state.email} onChange={this.handleChangeEmail} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="subject" value={this.state.subject} onChange={this.handleChangeSubject} />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="message" value={this.state.message} onChange={this.handleChangeMessage}></textarea>
                        </div>

                        <div>
                           <button type="submit" className="submit" onClick={this.sendMail}>Submit</button>
                        </div>
                     </fieldset>
                  </div>

               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        <b>{name}</b><br />
                        {street} <br />
                        {city}, {state}, {zip}<br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
