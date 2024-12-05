import React from 'react'
import'./Contact.css'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "15d81bee-3d66-44de-8d97-8289de2785f6");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    
      return (
        <div id='home' className='contact'>
            <h1>Schedule an appointment</h1>
            
            
            
            
            <form onSubmit={onSubmit} className="envelope">
              <input type="email" name="email" id="" placeholder='Email address'/>
              <input type="text" name="subject" id="" placeholder='Subject line' />
              <input type="number" name="number" id="" placeholder='Telephone number'/>
              
              <textarea name="message" rows={8} id="" placeholder='Write your message here'></textarea>
              
              <button className='submit-btn'>Send</button>
             
            </form>
    
           
        </div>
      )
    }

export default Contact