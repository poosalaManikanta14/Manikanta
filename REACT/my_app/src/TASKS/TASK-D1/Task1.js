import './Task1.css';

function Task1(){
    return(
        <div>
        <div id="navbar">
            <img src="https://static.vecteezy.com/system/resources/previews/004/921/511/original/mountain-arrow-diagram-trading-business-marketing-logo-design-vector.jpg" alt="logo" width="100px"/>
          <div id="navleft">  <span>Documentation</span>
          <button>SIGN-UP</button></div>
        </div>
        <Body></Body>
        </div>
    )
}

let Body=()=>{
    return(
        <div>
        <div id="main">
        <h2>Landing Templates for <span>Startups</span></h2>
        <p>Our landing page template works on all devices,so you only have
            <br/>
             to set it up once,and get beautiful results forever.</p>
        <div id="main1">  
            <button>Get Started</button>
        <button>View on Github</button>
        </div>
        </div>
        </div>
    )
}
export{Task1}