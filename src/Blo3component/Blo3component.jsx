import Homecomponent from "../Homecomponent/Homecomponent";
import Footercomponent from '../Footercomponent/Footercomponent';
function Blo3component(){
    return(
        <>
        <Homecomponent/>
        <img src="https://mdatraining.com/wp-content/uploads/2020/03/MDA-Banking-Infrastructure.jpg"/>
        <h1 style={{ color:"#0056b3"}}>Find My PG, a startup focused on improving the rental problem</h1>
        <p className="k1" style={{marginLeft:"100px",marginRight:"100px",marginTop:"",fontFamily:"cursive",fontSize:"20px"}}> 
        Find My PG is a startup founded in India that helps people who are looking for rentals to find what they want when they want to.

Find My PG is an application that provides immeasurable value by bridging the gap between the Paying Guest Seekers and the Paying Guest Owners. It is a web/mobile application that enables students and professionals seeking for paying guest accommodation to connect and communicate instantly with Paying Guest owners

FasterCapital is a virtual incubator based in United Arab Emirates that provides multiple programs for startups to meet their various needs; the Tech Cofounder program, the Idea to Product program, and the Grow your Startup program. Founders can join any of these programs for free online.



</p>
<Footercomponent/>
        </>
    )
}
export default Blo3component;