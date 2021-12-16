import React from 'react';
import './footer.css';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

const Footer = () => {
    return <div className = 'main_footer' >
        <div className ='column_1'>
            <img className ='footer_image' src= 'https://pngimg.com/uploads/amazon/amazon_PNG11.png'/><br></br>
            <h3 className ='brand'> amazon</h3>
            <p className = 'footer_description'>Get unlimited access to free study resources like past papers, lecture notes,question banks, summaries, practice questions, assignments, solutions and much ... </p>
            
            <p className ='email'> <EmailIcon className = 'email_icon'></EmailIcon>email: rachealprecious85@gmail.com</p>
            <p className = 'contact'><CallIcon className='email_icon'></CallIcon>+256753416937</p>
        </div>
        <div className ='column_2'>
            <h3 className = 'tittle'>quick links</h3><hr></hr>
            <p> 
            <a className = 'links'> our blog </a>
             </p>
             <p> 
            <a className = 'links'> about us </a>
             </p>
             <p> 
            <a className = 'links'> contact us </a>
             </p>
             <p> 
            <a className = 'links'>shopping cart</a>
             </p>
            
            
        </div>
        <div className ='column_3'>
        <h3 className = 'tittle'>account</h3><hr></hr>
            <p> 
            <a className = 'links'> profile </a>
             </p>
             <p> 
            <a className = 'links'> log out</a>
             </p>
             <p> 
            <a className = 'links'> sign up </a>
             </p>
            
        </div>
        <div className ='column_4'>
        <h3 className = 'tittle'> news letter</h3><hr></hr>
        <p className='links'>subscribe to our news letter for the latest products </p><br></br>
        <div className = 'mb-3'>
            <input 
            placeholder ='email adress'
             type = 'text'> 
              </input>
              <button className='send'> send</button>
        </div>


        </div>
    </div>;
}



export default Footer;