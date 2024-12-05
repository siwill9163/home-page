import React from 'react'
import './Getstarted.css'

const Getstarted = () => {
  return (
    <div className='get-container'>

        <div className="bg-blue">
            <h1>Get started today</h1>
            <p>It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.</p>
            
        </div>

        <div className="tag-slowgo">
            <h1>Loved by businesses worldwide.</h1>
            <p>Our websites and social media are so amazing that people can’t help but fall in love with them. Simplicity and influence are the way forward with tons of mission-critical features.</p>
        </div>

        <div className="review-tiles">
            
            <div className="tile">
                <ul>
                    <li>"Working with this web development company was a 
                        game-changer for my business. Peter and his team 
                        delivered a stunning, user-friendly website on 
                        time and exceeded expectations. 
                        Their professionalism, creativity, and attention 
                        to detail are unmatched. Highly recommended!"
                        <hr />
                        <div className="name">simon <br /><span>Founder</span></div>
                        
                        </li>


                    <li>"Simon and his team deliver exceptional web 
                        solutions tailored to your needs. Their creativity,
                         professionalism, and attention to detail ensure 
                         an outstanding online presence. Highly recommended 
                         for any project!"
                         <hr />
                        <div className="name">simon <br /><span>Founder</span></div>
                         </li>
                    <li>"Working with [Your Company Name] was fantastic! 
                        Their team is professional, responsive, 
                        and delivered a stunning website. Highly recommend 
                        them for any web development needs!"
                        <hr />
                        <div className="name">simon <br /><span>Founder</span></div>
                        
                        </li>
                </ul>
            </div>
        </div>
       
    </div>
  )
}

export default Getstarted