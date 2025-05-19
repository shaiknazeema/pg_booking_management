import './Blogcomponent.css'
import { PiArrowCircleRightFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';


import Homecomponent from '../Homecomponent/Homecomponent';
import Footercomponent from '../Footercomponent/Footercomponent';
function Blogcomponent(){
    return(
        <>
        <Homecomponent/>
        <h1 className='h00' style={{marginTop:"50px",fontFamily:"cursive"}}>Welcome to Our Blog </h1>
        <div className='d40'>
            <div className='d41'>
                <img src='https://www.canarahsbclife.com/content/dam/choice/blog-inner/images/how-to-save-money.jpg' style={{height:"250px",width:"500px"}}/>
            </div>
            <div className='d42'>
                <h4 className='h41'> How to save money as a newcomer to a city by taking up a PG</h4>
                <p className='p41' style={{paddingLeft:"100px",paddingRight:"150px",marginTop:"30px"}}>
                So you've just moved to a new city or looking to do so soon. This is likely to be for studying there or you've just gotten your first job and are looking...

                </p>
                <a href ='/Blo1' style={{fontFamily:"cursive",fontSize:"25px"}}>Readmore <PiArrowCircleRightFill/></a>

            </div>
        </div>
        <div className='d40'>
            <div className='d41'>
                <img src='https://find-my-pg.netlify.app/static/media/pg_money.a92e4668cefe5c3bebcf.jpg' style={{height:"250px",width:"400px",marginLeft:"50px"}}/>
            </div>
            <div className='d42'>
                <h4 className='h41'> How Paying Guest can save lot of money for any New Comer to a Major City</h4>
                <p className='p41' style={{paddingLeft:"100px",paddingRight:"150px",marginTop:"30px"}}>
                We've already mentioned another blog how getting a PG in a new city is the best option you have. Now let us tell you how our technology at Book My...

                </p>
                <a href='./blo2' style={{fontFamily:"cursive",fontSize:"25px"}}>Readmore <PiArrowCircleRightFill  /></a>

            </div>
        </div>
        <div className='d40'>
            <div className='d41'>
                <img src='https://bookmypg.co.in/storage/blog/medium/2021/04/359cda551c2b3628cf905bf59f6ad1e90301680.jpeg' style={{height:"250px",width:"400px",marginLeft:"50px"}}/>
            </div>
            <div className='d42'>
                <h4 className='h41'> Find My PG, a startup focused on improving the rental problem</h4>
                <p className='p41' style={{paddingLeft:"100px",paddingRight:"150px",marginTop:"30px"}}>
                Find My PG is a startup founded in India that helps people who are looking for rentals to find what they want when they want to. Book My PG is an...

                </p>
                <a href='./blo3' style={{fontFamily:"cursive",fontSize:"25px"}}>Readmore <PiArrowCircleRightFill  /></a>

            </div>
        </div>
        <div className='d40'>
            <div className='d41'>
                <img src='https://img.freepik.com/free-photo/furniture-background-clean-wall-wood_1253-666.jpg?ga=GA1.1.2140725953.1734529645&semt=ais_hybrid' style={{height:"250px",width:"400px",marginLeft:"50px"}}/>
            </div>
            <div className='d42'>
                <h4 className='h41'> How To Select The Best PG To Stay</h4>
                <p className='p41' style={{paddingLeft:"100px",paddingRight:"150px",marginTop:"30px"}}>
                Paying Guest accommodation is one where you stay on a sharing basis in a property that is taken on rent by others.PGs are commonly used in India...

                </p>
                <a href='./Bb1'  style={{fontFamily:"cursive",fontSize:"25px"}} >Readmore <PiArrowCircleRightFill  /></a>

            </div>
        </div>
        <div className='d40'>
            <div className='d41'>
                <img src='https://www.bu.edu/bhr/files/2021/05/6.png' style={{height:"250px",width:"400px",marginLeft:"50px"}}/>
            </div>
            <div className='d42'>
                <h4 className='h41'> Covid-19 Impact on Hospitality Industry</h4>
                <p className='p41' style={{paddingLeft:"100px",paddingRight:"150px",marginTop:"30px"}}>
                Due to the Covid-19 pandemic, the world’s economy was shut down almost overnight . The pandemic has confronted the hospitality industry...

                </p>
                <a href='./Bb1' style={{fontFamily:"cursive",fontSize:"25px"}}>Readmore <PiArrowCircleRightFill  /></a>

            </div>
        </div>

        <Footercomponent/>

        </>
    )
}
export default Blogcomponent;