import logo from './logo.svg';
import './App.css';
import Homecomponent from './Homecomponent/Homecomponent';

import ImageSlider, { Bodycomponent } from './Bodycomponent/Bodycomponent';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Signincomponent from './Signincomponent/Signincomponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Pgownerscomponent from './Pgownerscomponent/Pgownerscomponent';
import Logincomponent from './Logincomponent/Logincomponent';
import Contactcomponent from './Contactcomponent/Contactcomponent';
import Main from './Main/Main';
import Blogcomponent from './Blocomponent/Blogcomponent';

import Dashboard from './Dashboardcomponent/Dashboardcomponent';
import Citycomponent from './Citycomponent/Citycomponent';
import SubmitComponent from './Submitcomponent/Submitcomponent';
import Contentcomponent from './Contentcomponent/Contentcomponent';
import Footercomponent from './Footercomponent/Footercomponent';

import Blo1component from './Blo1component/Blo1component';
import Blo2component from './Blo2component/Blo2component';
import Blo3component from './Blo3component/Blo3component';
import Andrapradesh from './Andra';

// import Aboutcomponent from './Aboutcomponent/Aboutcomponet';

// import Aboutcomponent from './About/About';










function App() {
  return (
    <div className="App">
      <BrowserRouter>
       {/* <Homecomponent/> */}
       <Routes>
        <Route path='/' element={<Signincomponent/>}></Route>
        <Route path='/home' element={<Bodycomponent/>}></Route>
        <Route path='/pgowners' element={<Pgownerscomponent/>}></Route>
        <Route path='/login' element={<Logincomponent/>}></Route>
        <Route path='/signin' element={<Signincomponent/>}></Route>
        <Route path='/contact' element={<Contactcomponent/>}></Route>
        <Route path='/main' element={<Main/>}></Route>
        <Route path='/blog' element={<Blogcomponent/>}></Route>
        {/* <Route path='/bb1' element={<BB1/>}></Route> */}
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/city' element={<Citycomponent/>}></Route>
        <Route path='/submit' element={<SubmitComponent/>}></Route>
        <Route path='/footer' element={<Footercomponent/>}></Route>
        <Route path='/Blo1' element={<Blo1component/>}></Route>
        
        {/* <Route path='/about' element={<Aboutcomponent/>}></Route> */}
        {/* <Route path='/about' element={<Aboutcomponent/>}></Route> */}
        <Route path='/about' element={<Contentcomponent/>}></Route>
        <Route path='/blo2' element={<Blo2component/>}></Route>
        <Route path='/blo3' element={<Blo3component/>}></Route>
        <Route path='/andra' element={<Andrapradesh/>}></Route>
        

        


        

       </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
