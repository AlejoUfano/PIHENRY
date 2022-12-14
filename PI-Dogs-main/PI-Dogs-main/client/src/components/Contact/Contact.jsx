import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx'
import { Icon, ContactContainer, FormContainer, Location, Mail, GlobalContainer, EmailContainer, ContactInfoContainer, EmailTitle, Error, Info, ContactTitle, SendButton, EmailField, Separation, Message, ContactInfo, Input, ContactIcons } from '../Styles/Contact.style.js';
import emailjs from 'emailjs-com';
import SuccessPopUp from '../SuccessPopUp/SuccessPopUp.jsx'

export default function Contact() {
  let [emailSent, setEmailSent] = useState(false)
  let [errors, setErrors] = useState({})
  let [email, setEmail] = useState({name: '',email: '',message: ''})
  
  let sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_v1cgva9', 'template_0unahwb', e.target, 'mj8OtvvSNN98qSM54')
      .then((result)=>{
        setEmailSent(true)
      },(error)=>{
      })
      e.target.reset()
  }

  let handleChange = (e) => {
    e.preventDefault()
    setEmail({
      ...email,
      [e.target.name]:e.target.value
    })
    setErrors(formValidation({
      ...email,
      [e.target.name]: e.target.value
  }))
  }

  let formValidation = (email) => {
    let errors = {}
    if(!email.name){
      errors.name = 'Name cannot be empty'
    } else if(!/^[a-zA-Z\s]*$/.test(email.name)) {
      errors.name = 'Name can only contain letters'
    } else if(email.name?.length>30) {
      errors.name = 'Name cannot be more than 30 characters'
    }
    if(!email.email) {
      errors.email = 'Email cannot be empty'
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.email)){
      errors.email = 'Enter a valid email'      
    }
    if(!email.message){
      errors.message = 'Message cannot be empty'
    }
    return errors
  }

  return (
    <GlobalContainer>
        <NavBar/>        
        <ContactContainer>

          <ContactTitle>CONTACT</ContactTitle>

          <FormContainer>

              <EmailContainer onSubmit={(!Object.keys(errors).length&&email.name.length)?sendEmail:null}>
                  <EmailField>
                  <EmailTitle>Send me a Message</EmailTitle>
            
                    <Input placeholder='Your name' name='name' onChange={(e)=>{handleChange(e)}}/>
                    <Error>{errors.name}</Error>
            
                    <Input placeholder='Your email' name='email' onChange={(e)=>{handleChange(e)}}/>
                    <Error>{errors.email}</Error>
            
                    <Message placeholder='Message' name='message' onChange={(e)=>{handleChange(e)}}/>
                    <Error>{errors.message}</Error>
            
                  </EmailField>
            
                  <SendButton type='submit'>SEND</SendButton>
              </EmailContainer>

            
            <ContactInfoContainer>
                <ContactInfo>
                  <Location>
                    <Icon.Location size={30}/><Info> Bahia Blanca, ARG</Info> 
                  </Location>
                  <Mail>
                    <Icon.Mail size={30}/><Info>ufanoalejo@gmail.com</Info>   
                  </Mail>             
                </ContactInfo>
            
                <Separation/>
            
                <ContactIcons>
                  <Link to={{pathname: 'https://github.com/AlejoUfano'}} target='_blank'>                
                    <Icon.Git/>
                  </Link>
            
                  <Link to={{pathname: 'https://www.linkedin.com/in/alejo-ufano-837a68244/'}} target='_blank'>
                    <Icon.Linked/>
                  </Link>
                </ContactIcons>
            
            </ContactInfoContainer>
          </FormContainer>
        </ContactContainer>
        {emailSent===true?<SuccessPopUp message='Success: Email sent successfully!'/>:null}
    </GlobalContainer>
  )
}