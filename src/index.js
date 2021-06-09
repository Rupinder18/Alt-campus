  import React from 'react';
  import ReactDom from 'react-dom';
  import './index.css';
  const img1='https://altcampus.school/assets/media/logo.svg';
  const img2='https://altcampus.school/assets/media/content.svg';
  const img3='https://altcampus.school/assets/media/mentorship.svg';
  const img4='https://altcampus.school/assets/media/learning.svg';
  const img5='https://altcampus.school/assets/media/demo-mac.svg';
  const img6='https://altcampus.school/assets/media/help1.svg';
  const imga1='https://www.pngitem.com/pimgs/m/33-338590_pink-circle-hd-png-download.png';
  
  ReactDom.render(
     
    
      <React.Fragment>
     <div className="top">
        <div className="one"><img src={img1}  width="112.27px" height="40px" alt="alt" /></div>
      <div className="two"><ul>
        <li><a id="home" href="">Home</a></li>
        <li><a href="">How it works</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">FAQ'S</a></li>
        <li><a href="">Stories</a></li>
        
      </ul></div>
      <div className="three"><button id="a">login</button>
      <button id="b">Signup</button></div></div> 
      <div className="dujja">
        <h1> Everything you need to become  a software developer </h1>
    <p>A program designed to help you develop full-stack web development skills and  become job-ready</p> 


    <ul>
      <li>100%online</li>
      <li>.</li>
      <li>Project based</li>
      <li>.</li>
      <li>Mentorship</li>

    </ul>
    <button>START LEARNING</button>
        </div>  


        <div className="tijja">
          <h1>Unparalleled Learning Support</h1>
          <div className="pic1">
            <img src={img2} width="300px" height="100px"/>
            <h2>EXHAUSTIVE COURSE CONTENT</h2>
            <p>Step-by-step learning content. Quality explanatory  videos, assignments, and real life projects.</p>
          </div>
          <div className="pic2">
            <img src={img3}width="300px" height="100px"/>
            <h2>MENTORSHIP & SUPPORT</h2>
            <p>Daily live mentor sessions, personalised code reviews, and one-to-one feedback.</p>
          </div>


          <div className="pic3">
            <img src={img4} width="300px" height="100px"/>
            <h2>IMMERSIVE LEARNING</h2>
            <p>Get matched with peers. Access to the community, hackathons, demo sessions.</p>
          </div>
        </div>
       <div className="chotha">
         <div className="ca">
             <h3>Know what, when and how to learn.</h3>
             <h4>Don't waste time figuring out the best tutorial or exercises.</h4>
             <p>Our course is packed with easy to understand videos, small, incremental assignments to big projects to set you in the right direction and keep you focused on what matters the most -building stuff.</p>
         </div>
         <div className="cb">
           <img src={img5}/>
         </div>
       </div>


       <div className="panjma">
         <div>
           <img src={img6} width="350px" height="350px"/>
         </div>
         <div>
           <h3>Don't be stuck. Get the help you need.</h3>
           <h4>Daily, live mentor sessions to clear doubts and provide feedback</h4>
           <p>Our every working day, live mentor sessions will help you resolve doubts, review code, and get one to one feedback to help you learn better and faster. Get your technical questions answered quickly by mentors via Slack.</p>
         </div>
       </div>



       <div className="shewa">
         <h1>Like we said
Exhaustive Course Content</h1>
<div className="a1"><img src={imga1} width="180px" height="150px"/>
         <h1>14</h1>
         <p>MODULES</p>
</div>
<div className="a2"><img src={imga1} width="180px" height="150px"/>
         <h1>81+</h1>
         <p>TOPICS</p></div>
<div className="a3"><img src={imga1} width="180px" height="150px"/>
         <h1>200+</h1>
         <p>EXERCISES</p></div>
<div className="a4"><img src={imga1} width="180px" height="150px"/>
         <h1>40+</h1>
         <p>PROJECT</p></div>
       </div>





      <div className="stma">
        <h1>UNIX & GIT</h1>
        <h2>TOPICS</h2>
       <div className="as">
       <ul>
          <li>- Introduction to Unix & Shell Commands</li>
          <li>- Introduction to Git</li>
          <li>- Branching and Merging in Git</li>
          <li>- Collaborating with Github</li>
        </ul>
       </div>
      </div>
      <div className="asht">
        <h1>HTML & CSS FUNDAMENTALS</h1>
        <h2>TOPICS</h2>
        <div className="as1">
          <ul>
            <li>- Introduction to Web and HTML & CSS</li>
            <li>- Box Model</li>
            <li>- Positioning</li>
            <li> - Flexbox</li>
            <li> - Typography</li>
            <li> - Adding Media, Lists, Tables, Forms</li>
            <li> - Responsive Web Design</li>
          </ul>
        </div>
        


        <div className="as2">
        <div className="ewi"><h2>PROJECTS</h2></div>
          <ul>
            <li> - Building Resume in HTML & CSS</li>
            <li> - Local Gym Website</li>
            <li> - Web Developer Conference Website</li>
            <li> - Insurance Company Website</li>
            <li> - Blog</li>
            <li>- Gallery</li>
          
          </ul>
        </div>
      </div>
      
      </React.Fragment>,
    


    document.getElementById('root')
);