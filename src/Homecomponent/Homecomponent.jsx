import './Homecomponent.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Homecomponent()
{
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [isSideNavOpen,setIsSideNavOpen]=useState(false);
    const toggleSideNav=()=>{
      setIsSideNavOpen(!isSideNavOpen);
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
    {/* <Homecomponent/> */}
    <div className='main'>
    
    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOM1L14Wr_9l8TETPtuinYvhlR3uJHv-_oA&s"  className="img1" width="100" height="100" /> */}
    
    <div className='h11'>
    
    <button className="menu-toggle" onClick={toggleSideNav}>
          ☰
        </button>
      

      <div className={`side-nav ${isSideNavOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSideNav}>
          &times;
        </button>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pgowners">PG Owners</Link>
        <Link to="/dashboard">Book Here</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/login">Logout</Link>

      </div>
    <button type="submit" className='bt'><Link to="/home" style={{color:"white"}}> HOME</Link> </button>
    <button type="submit" className='bt'><Link to ="/about" style={{color:"white"}}>ABOUT</Link></button>
   
    <button type="submit" className='bt'><Link to="/pgowners" style={{color:"white"}}>PGOWNERS</Link></button>
    <button type="submit" className='bt'><Link to="/dashboard" style={{color:"white"}}>BOOKHERE</Link></button>
    <button type='submit ' className='bt'><Link to="/contact" style={{color:"white"}}>CONTACT</Link></button>
    <button type='submit' className='bt'><Link to="/blog" style={{color:"white"}}>BLOG</Link></button>
    <button type='submit' className='bt'><Link to="/login" style={{color:"white"}}>LOGOUT</Link></button>

   
   </div>
   <div>
   <div style={{marginTop:"20px",marginLeft:"60px"}}>
    <input type='search' className='s1' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} onKeyDown={onEnterKey} placeholder='Search for page' style={{width:"200px",fontFamily:"cursive"}}/></div>
       
   </div>
    
    </div>
    
    
    </>
   )
}
export default Homecomponent;
