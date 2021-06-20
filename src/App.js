import SingleMenu from './components/Menu'
import React, {useState} from 'react'
import data from './components/Data'
import Imagelnk from './images/linkedin.svg'
import Imagegit from './images/github.svg'
import Imagetel from './images/telephone-fill.svg'
import Imagemil from './images/envelope-fill.svg'
import Personelle from './images/personal.png'
import GitHubInteg from '../src/components/GitHubIntegration' 


import './App.css';

const App = () => {
  const [menus, setMenus] = useState(data)
  return (
    <main>
     <div id="main-container">

      <div class="image-container">
       
        <img className="card-image img-responsive" src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Responsive image"/>
        <img 
        className="personal-image img-responsive"
        src={Personelle} 
        alt="Responsive image"/>

        <div class="carousel-caption">
        <h1>Payam Shaker</h1>
        <h3>Curriculum Vitae</h3>
  </div>
      </div>
       <div className='container'>
      
        <section className='info'>
          {menus.map((menu) => (
            <SingleMenu key={menu.id} {...menu} />
          ))}
        </section>
        <GitHubInteg/>
    </div>
    </div>
        
       <footer>
    <div className="footer">
            <a href="https://www.linkedin.com/in/payam-shaker" target="_blank">
              <img className="img-responsive icons-margin" src={Imagelnk} alt="Linkedin" width="32" height="32" /> 
            </a>
            <a href="https://github.com/Payam-Shaker" target="_blank">
              <img className="img-responsive icons-margin" src={Imagegit} alt="Github" width="32" height="32"/> 
            </a>
            <a href="mailto:payam.shaker@hotmail.com">
              <img className="img-responsive icons-margin" src={Imagemil} alt="Email" width="32" height="32"/> 
            </a>
            <a href="tel:+46700302496">
              <img className="img-responsive icons-margin" src={Imagetel} alt="Telephone" width="32" height="32"/> 
              +46700302496</a>
            
            </div>

             </footer>
    </main>
  );
}

export default App;
