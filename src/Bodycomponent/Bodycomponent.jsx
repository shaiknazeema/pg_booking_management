import './Bodycomponent.css';
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Link ,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Homecomponent from '../Homecomponent/Homecomponent';
import Footercomponent from '../Footercomponent/Footercomponent';



function Bodycomponent(){
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit=()=>{
        navigate('/dashboard')

    }
  
    
    const components = [
      { name: 'bengaluru', route: '/dashboard'  },
      { name: 'chennai', route: '/dashboard'  },
      { name: 'coimbatore',route: '/dashboard' },
      { name: 'hyderabad', route: '/dashboard'  },
      { name: 'delhi', route: '/dashboard'  },
      { name: 'jaipur', route: '/dashboard' },
      { name: 'kolkata', route: '/dashboard'  },
      { name: 'vizag', route: '/dashboard'  },
      { name: 'agra', route: '/dashboard'  },
      { name: 'bhubaneshwar', route: '/dashboard'  },
      { name: 'andhrapradesh', route: '/dashboard'  },
      { name: 'arunachalpadesh', route: '/dashboard'  },
      { name: 'assam', route: '/dashboard'  },
      { name: 'bihar', route: '/dashboard'  },
      { name: 'chattisghar', route: '/dashboard'  },
      { name: 'goa', route: '/dashboard'  },
      { name: 'gujarat', route: '/dashboard'  },
      { name: 'haryana', route: '/dashboard'  },
      { name: 'himachapradesh', route: '/dashboard'  },
      { name: 'jammuandkashmir', route: '/dashboard'  },
      { name: 'jharkhand', route: '/dashboard'  },
      { name: 'karnataka', route: '/dashboard'  },
      { name: 'kerala', route: '/dashboard' },
      { name: 'madyapradesh', route: '/dashboard' },
      { name: 'manipur', route: '/dashboard' },
      { name: 'meghalaya', route: '/dashboard' },
      { name: 'mizoram', route: '/dashboard' },
      { name: 'nagaland', route: '/dashboard' },
      { name: 'odisha', route: '/dashboard' },
      { name: 'punjab', route: '/dashboard' },
      { name: 'rajasthan', route: '/dashboard' },
      { name: 'sikkim', route: '/dashboard' },
      { name: 'tamilnadu', route: '/dashboard' },
      { name: 'telangana', route: '/dashboard' },
      { name: 'uttarpradesh', route: '/dashboard' },
      { name: 'uttarkhand', route: '/dashboard' },
      { name: 'westbengal', route: '/dashboard' },
      { name: 'home', route: '/home' },{ name: 'about', route: '/about' },{ name: 'pgowners', route: '/pgowners' },{ name: 'blog', route: '/blog' },{ name: 'bookhere', route: '/dashboard' },{ name: 'contact', route: '/contact' },

    ];
  
    const onSearch = () => {
    
      const matchedComponent = components.find(
        (component) => component.name.toLowerCase() === searchTerm.toLowerCase()
      );
  
      if (matchedComponent) {
        navigate(matchedComponent.route); 
      } else {
        alert('No match found!'); 
      }
    };
  
    const onEnterKey = (event) => {
      if (event.key === 'Enter') {
        onSearch();
      }

}

       
    return(
        <>
        <Homecomponent/>
        
        <div className='main'>
    
    
    
    
    </div>
        <div className='div1' >
            <input type='text' className='se2' placeholder='Enter the city name,area etc...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} onKeyDown={onEnterKey}/>
           <button type='submit' className='btn1'><CiLocationOn />Near Me</button>
        </div>
        <div className='div4'>
        <div className='div2'>
            <div className='i1'>
            <img src='https://img.freepik.com/free-vector/bangalore-india-skyline-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-presentation-banner-website_596401-365.jpg?ga=GA1.1.2140725953.1734529645&semt=ais_hybrid' className='img2'/><p className='p1'>Bangaluru</p>
            </div>
            <div className='i2'>
                <img src='https://img.freepik.com/free-vector/chennai-india-skyline-silhouette-with-panorama-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-presentation-placard-website_596401-307.jpg?ga=GA1.1.2140725953.1734529645&semt=ais_hybrid' className='img3'/><p className='p2'>Chennai</p>
            </div>
            <div className='i3'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEn8m8pdL_HT1-KidWWzwmqb1Q8L2FS1LzNA&s' className='img4'/><p className='p3'>Coimbatore</p>
            </div>
            <div className='i4'>
                <img src='https://www.dailypioneer.com/uploads/2022/story/images/big/hyderabad-was-liberated-by-india-2022-10-29.jpg' className='img5'/><p className='p4'>Hyderabad</p>
            </div>
            
            <div className='i5'>
                <img src='https://www.akshartours.com/wp-content/uploads/2020/08/Things-to-Do-in-Delhi.jpg' className='img6'/><p className='p5'>Delhi</p>
            </div>
            <div className='div3'>
            <div className='i6'>
                <img src='https://png.pngtree.com/thumb_back/fh260/background/20241002/pngtree-the-hawa-mahal-a-stunning-pink-palace-in-jaipur-image_16295987.jpg' className='img7'/><p className='p6'>Jaipur</p>
            </div>
            <div className='i7'>
                <img src='https://i.pinimg.com/736x/68/81/c5/6881c5659931df070d3b5745fe03c40c.jpg' className='img8'/><p className='p7'>Kolkata</p>
            </div>
            <div className='i8'>
                <img src='https://i.pinimg.com/736x/c8/44/dc/c844dc8a778947e24db06f7c75d43dd6.jpg' className='img9'/><p className='p8'>Vizag</p>
            </div>
            <div className='i9'>
                <img src='https://img.freepik.com/free-photo/beautiful-shot-taj-mahal-building-agra-india-cloudy-sky_181624-22088.jpg?ga=GA1.1.2140725953.1734529645&semt=ais_hybrid' className='img10'/><p className='p9'>Agra</p>

            </div>
            <div className='i10'>
                <img src='https://media.istockphoto.com/id/178757243/photo/ancient-indian-temple.jpg?s=612x612&w=0&k=20&c=J8JODhj86IndwpeizmfmMQSWQwRHYZ98wrWUIodxbIE=' className='img11'/><p className='p10'>Bhubaneshwar</p>
            </div>
            </div>

        </div>
        </div>
        <div className='div5'>
            <img src='https://bookmypg.co.in/assets/front/images/city-slider.png' className='img12'/>
        </div>
        <div className='div8'>
        <div className='div6'>
            <p className='p11'><u>About My PG</u></p>
            <p className='p12'>We, at Book My PG, are India's fastest-growing network of managed Paying Guest (PG) rentals. We hope to provide you with the best renting solutions with the help of our designs and technology.Our services across the country will help you find and book Paying Guest (PG) rental homes. book our PG make lead the life happy</p>
            <button type='submit' className='b2'>Readmore</button>
            </div>
            <div className='div7'>
            <img src='https://bookmypg.co.in/assets/front/images/about.png' className='img13'/></div>
        </div>
        <div className='div9'>
            <div className='div10'>
                <h1 className='underline'>How It Works</h1>
                <p className='p13'>Our process is simple and very different from those of others in this industry. The search process is streamlined by the locality or landmark of your choice. This allows you to find the right hostel or room. You can choose the subscription plan that best suits your needs.</p>
            </div>
        </div>
        <div class="div11">
    <div class="div12">
      <img src="https://bookmypg.co.in/assets/front/images/hiw-icon-01.png" alt="Search Icon" className='img14'/>
      <h3 className='h11'>Search</h3>
      <p className='p14'>Fill the search fields like your locality, or city, boys PG or girls PG.</p>
    </div>
    <div class="div12">
      <img src="https://bookmypg.co.in/assets/front/images/hiw-icon-02.png" alt="Payment Icon" className='img14'/>
      <h3 className='h11'>Make Payment</h3>
      <p className='p14'>Select your PG Rental Home, Sharing Type and make payment Online.</p>
    </div>
    <div class="div12">
      <img src="https://bookmypg.co.in/assets/front/images/hiw-icon-03.png" alt="Confirmation Icon" className='img14'/>
      <h3 className='h11'>Booking Confirmation</h3>
      <p className='p14'>Your subscription and booking dates are confirmed.</p>
    </div>
  </div>
  <div className='div13'>
            <div className='div14'>
                <h1 className='h12' style={{marginTop:"50px"}}>What We Offer</h1>
                <p className='p15'>The listed services are offered to all our customers. We assure you the best deals in all our properties and the chance to live a more luxurious life with lesser cost</p>
            </div>
        </div>
    <div className='div15'>
        <div className='div16'>
            <img src='https://bookmypg.co.in/assets/front/images/find-pgs-icon.png' className='img15'/>
            <h1 className='h13'>Find PGs Near You</h1>
            <p className='p16'>Find Paying guests near you by selecting your location. We cover more than 50+ localities in every city. </p>
        </div>
        <div className='div17'>
            <img src='https://bookmypg.co.in/assets/front/images/book-online-icon.png' className='img15'/>
            <h1 className='h14'>Book Online</h1>
            <p className='p17'>Book your PG online through our web portal or mobile application. Avail discounts that are available for booking online. </p>
        </div>
        <div className='div18'>
            <img src='https://bookmypg.co.in/assets/front/images/best-deals-icon.png' className='img15'/>
            <h5 className='h15'>Best Deals On PGs</h5>
            <p className='p18'>We have tie ups with PGs in every city. We make sure that our customers get the best deals for PGs. </p>
        </div>
        
    </div>
    <div className='div19'>
        <h1 className='h16' style={{marginTop:"50px"}}> Amenities List</h1>
        <p className='p19'>We provide all the amenities, some amenities are surely available for all our service places. Some of the items only you may get by request, Because that type of amenities are not mandatory.</p>
    </div>
    <div className='div20'>
        <div className='div30'>
        <div className='div21'>
            <img src='https://bookmypg.co.in/assets/front/images/air-conditioner.png' className='img16'/>
            <h1 className='h17'>Air Conditioner</h1>
            <p className='p20'>Surely Available</p>
        </div>
        <div className='div22'>
            <img src='https://bookmypg.co.in/assets/front/images/Balcony.png' className='img17'/>
            <h1 className='h18'>Balcony</h1>
            <p className='p21'>You need to request</p>
        </div>
        <div className='div23'>
            <img src='https://bookmypg.co.in/assets/front/images/extra-bed.png' className='img18'/>
            <h1 className='h19'>Extra Bed</h1>
            <p className='p22'>You need to request</p>
            </div>
        </div>
        <div className='div31'>
        <div className='div24'>
            <img src='https://bookmypg.co.in/assets/front/images/tv.png' className='img19'/>
            <h1 className='h20'>Flat TV</h1>
            <p className='p23'>Surely Available</p>
        </div>
        <div className='div25'>
            <img src='https://bookmypg.co.in/assets/front/images/hot-cold-water.png' className='img20'/>
            <h1 className='h21'>Hot & Cold Water</h1>
            <p className='p24'>Surely Available</p>
        </div>
        <div className='div26'>
            <img src='https://bookmypg.co.in/assets/front/images/Intercom.png' className='img21'/>
            <h1 className='h22'>InterCom</h1>
            <p className='p25'>Surely Available</p>
        </div>
        </div>
        <div className='div32'>
        <div className='div27'>
            <img src='https://bookmypg.co.in/assets/front/images/locker.png' className='img22'/>
            <h1 className='h23'>Locker</h1>
            <p className='p26'>Surely Available</p>
        </div>
        <div className='div28'>
            <img src='https://bookmypg.co.in/assets/front/images/night-lamp.png' className='img23'/>
            <h1 className='h24'>Read Table</h1>
            <p className='p27'>Surely Available</p>
        </div>
        <div className='div29'>
            <img src='https://bookmypg.co.in/assets/front/images/wi-fi.png' className='img24'/>
            <h1 className='h25'>WiFi</h1>
            <p className='p28'>Surely Available</p>
        </div>
        </div>
    </div>
    <Footercomponent/>

    
            
        
        </>
    )
}

export {Bodycomponent};

