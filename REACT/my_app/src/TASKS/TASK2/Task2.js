import './Task2.CSS';

 function Task2(){
    return(
        <div>
        <div className='parentdiv'>
        <div>
        <h2>Join Our Newsletter</h2>
        <p>We'll send you a friendly newsletter on updates,
            <br/>
        </p>Once a month,No spam.
        </div>
        <div>
        <input type='email' placeholder='Enter your email'/>
        <button>SUBSCRIBE</button>
        </div>
 
        </div>
        <Body></Body>
        </div>
    )
}

let Body=()=>{
    return(
        <div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/004/921/511/original/mountain-arrow-diagram-trading-business-marketing-logo-design-vector.jpg" alt="logo"/>
                <h2>UIDECK</h2>
                <p>Handcrafted HTML,Tailwind and Bootstrap 
                    <br/>
                    Templates and UI kits.</p>
                <div>
                <i class="fa-solid fa-gamepad"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-facebook"></i>

                </div>
            </div>
            <div>
                <h2>Quick Links</h2>
                <p>About us</p>
                <p>Products</p>
                <p>Pricing</p>
                <p>Docs</p>
            </div>
            <div>
                <h2>Support</h2>
                <p>Open a Ticket</p>
                <p>All Access Pass</p>
                <p>Support Policy</p>
                <p>UIdeck Blog</p>
            </div>
            <div>
                <h2>FAQ'S</h2>
                <p>Terms & Conditions</p>
                <p>License & Copyright</p>
                <p>Refund Policy</p>
                <p>Privacy Policy</p>
            </div>
            <div>
                <h2>Templates</h2>
                <p>ALL Templates</p>
                <p>HTML Templates</p>
                <p>Tailwind Templates</p>
                <p>React Templates</p>
            </div>

        </div>
    )
}

export default Task2;