import './Contentcomponent.css';
import Homecomponent from "../Homecomponent/Homecomponent";
import Footercomponent from '../Footercomponent/Footercomponent';
function Contentcomponent(){
    return(
        <>
        <Homecomponent/>
        <h1 className='h60'> About Us</h1>
        <div className='z1'>
            
            <img src="https://bookmypg.co.in/assets/front/images/about-02.jpg" className='z3'/>
            {/* <h1 className='z3' style={{fontFamily:"cursive",fontSize:"30px"}}> Who are you?</h1> */}
            {/* <p className='z3' style={{fontSize:"30px",color:"#007bff"}}>Who are you?</p> */}
            <p className='z2'>  
        <strong className='st'> who are you?</strong> We are a set of well-selected and chosen Paying Guest services. This is a platform where those, who are willing to open their homes to guests, meet the people looking for wonderful homes to stay in and not have to look for hotels or favors in any city for their long stays. We ensure the places listed and the people looking for a stay are selected based on careful filtering criteria so that both parties benefit and the safety of all involved persons is ensured. We know how important a safe home is to you at both ends of the deal and that is a promise we make.</p>

        </div>
        <div className='z6'>
            
            
            {/* <h1 className='z3' style={{fontFamily:"cursive",fontSize:"30px"}}> Who are you?</h1> */}
            {/* <p className='z3' style={{fontSize:"30px",color:"#007bff"}}>Who are you?</p> */}
            <p className='z4'>  
        <strong className='st'> What we do?
        </strong> We put together a list of places where our guests can stay as a PG. This is done based on listings on our site by homeowners. We ensure that not only are they a safe home for the guest but the guest too is safe for them. These places can be searched based on locality, budget, need, and multiple other filters. Find the perfect PG stay or guest with us.

To meet our aim, we eliminate the two major problems a guest or host may face. The first of these is a lack of information for anyone new in a city. Our site will list all the information you can seek not just about the house and homeowners but also the locality and other aspects. The other is the loss of capital to a host when a paying guest leaves. We do not wish our homeowners and makers to lose money waiting for the next stroke of luck and therefore listing with us helps them find a guest sooner.
</p>
<img src="https://bookmypg.co.in/assets/front/images/about-01.jpg" className='z5'/>

        </div>
        <strong className='z7'>What are we aiming at?
        </strong>
        <p className='z8'>            Our aim and motto are simple and singular. To provide the guests with a PG that feels like home best fitting their needs and the homeowners a guest who fits right in. To attain this we work with homeowners and guests to give everyone involved the best possible experience.

Our method of arriving at this involves detailed verification of all parties, a good database of homes and guests and being updated in real-time ensuring there is no problem for either party to find the right person/ home sitting where they are from their systems.

So come together home makers/ owners and guests to find what you seek. We hope we will be able to give you what you seek with us. We hope to make the PG community a secure one where all people get the best out of the system.
</p>
<Footercomponent/>
        </>
    )
}
export default Contentcomponent;