import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
function Footercomponent(){
  return(
    <>
    <div className="container my-5" style={{ width: "2800px" ,maxWidth: "1500px",marginTop:"150px"}}
    >
          <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: "#45526e",padding:"20px" ,marginTop:"90px"}}
          >
            <div className="container p-4 pb-0">
             
              <section>
                <div className="row">
                 
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      Company name
                    </h6>
                    <p>
                      This is Our pg book with your comfort zone come on explore here
                    </p>
                  </div>
    
                 
                  <hr className="w-100 clearfix d-md-none" />
    
                 
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      CITIES
                    </h6>
                    <p>
                      <a href="/dashboard" className="text-white">
                        Hyderabad
                      </a>
                    </p>
                    <p>
                      <a href="/dashboard" className="text-white">
                        Benguluru
                      </a>
                    </p>
                    <p>
                      <a href="/dashboard" className="text-white">
                        Chennai
                      </a>
                    </p>
                    <p>
                      <a href="/dashboard" className="text-white">
                       kolkata
                      </a>
                    </p>
                  </div>
    
               
                  <hr className="w-100 clearfix d-md-none" />
    
                 
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      Useful links
                    </h6>
                    <p>
                      <a href="/home" className="text-white">
                        Home
                      </a>
                    </p>
                    <p>
                      <a href="/about" className="text-white">
                        About us
                      </a>
                    </p>
                    <p>
                      <a href="/contact" className="text-white">
                        Contact
                      </a>
                    </p>
                    <p>
                      <a href="/blog" className="text-white">
                        Blog
                      </a>
                    </p>
                  </div>
    
                 
                  <hr className="w-100 clearfix d-md-none" />
    
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                   
                    <p>
                      <i className="fas fa-envelope mr-3"></i> bookourpg@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 91 9949067432
                    </p>
                    
                  </div>
                </div>
              </section>
    
        
              <hr className="my-3" />
    
            
              <section className="p-3 pt-0">
                <div className="row d-flex align-items-center">
                 
                  {/* <div className="col-md-7 col-lg-8 text-center text-md-start">
                    <div className="p-3">
                      © 2020 Copyright:
                      <a className="text-white" href="https://mdbootstrap.com/">
                        MDBootstrap.com
                      </a>
                    </div>
                  </div> */}
    
                  <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end" style={{float:"right",paddingLeft:"100px"}}>
                    <a
                      className="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      className="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      className="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <FaGoogle />
                    </a>
                    <a
                      className="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </footer>
        </div>
</>
  )
}
export default Footercomponent;