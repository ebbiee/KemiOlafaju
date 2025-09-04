// import  { useEffect } from 'react'
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBFooter
} from "mdb-react-ui-kit";



export default function BodySection() {
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false, 
    stopOnMouseEnter: false, // pause on hover
  }

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="welcome">
          <h1>Welcome to <br/>Kemi Olafaju events</h1>
        </div>
        <div className="hero-overlay">
          <h1>Turning Your Moments Into Memories</h1>
          <p>From intimate gatherings to grand celebrations, we make it unforgettable.</p>
        </div>
      </div>

      

       {/* Portfolio Section */}
<section className="portfolio">
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="/assets/firstcouple.jpg" alt="First" />
        </div>
        <div className="embla__slide second">
          <img src="/assets/raandom.jpg" alt="Second" />
        </div>
        <div className="embla__slide">
          <img src="/assets/brothermike.jpg" alt="Third" />
        </div>
      </div>
    </div>

</section>
<section className="About">
  <div className="aboutushead"><h1>About us</h1></div>
  <div className="aboutuscontent">
    <p>
  Kemi Olafaju Events was founded with a passion for creating timeless experiences.  
  Since our inception, we have specialized in curating elegant weddings, corporate gatherings, and social celebrations that reflect the unique style of each client.  
  With a keen eye for detail and a commitment to excellence, we transform visions into unforgettable moments.  
  </p>

  </div>
  <div className="btn-more"><Link to="/about"><button className="btn-readMore">READ MORE</button></Link></div>
</section>

      

      {/* Testimonials */}
      <section className="testimonials">
       <MDBContainer
      fluid
      className="py-5"
      style={{ backgroundColor: "#ffffffff", color: "#000" }}
    >
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="fw-bold mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Hear From the Hearts We’ve Touched
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-4 mb-md-0">
          <MDBCard className="mdCard h-100">
            <MDBCardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="/assets/rounded-img1.png"
                  className="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                />
              </div>
              <h5 className="font-weight-bold">Mr & Mrs Obayomi</h5>
              <MDBTypography
                listUnStyled
                className="d-flex justify-content-center"
              >
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star-half-alt" size="sm" color="info" />
                </li>
              </MDBTypography>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Kemi Olafaju Events made our wedding truly magical! From start to finish, the team paid attention to every detail and brought our vision to life effortlessly. The professionalism, creativity, and warm personal touch made the entire process stress-free. Our guests are still talking about how beautiful everything was. I couldn’t have asked for a better event planner!
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4 mb-md-0">
          <MDBCard className="mdCard h-100">
            <MDBCardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="/assets/Fabunmi.png"
                  className="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                />
              </div>
              <h5 className="font-weight-bold">Mr & Mrs Fabunmi</h5>
              <MDBTypography
                listUnStyled
                className="d-flex justify-content-center"
              >
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
              </MDBTypography>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Kemi Olafaju Events made our wedding day absolutely magical. From the stunning décor to the flawless coordination, everything was beyond what we imagined. Our guests are still talking about how beautiful and seamless the event was. Thank you for turning our dream into reality!
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4 mb-md-0">
          <MDBCard className="mdCard h-100">
            <MDBCardBody className="py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="/assets/teju.png"
                  className="rounded-circle shadow-1-strong"
                  width="100"
                  height="100"
                />
              </div>
              <h5 className="font-weight-bold">Mrs Tejumola</h5>
              <MDBTypography
                listUnStyled
                className="d-flex justify-content-center"
              >
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon fas icon="star" size="sm" color="info" />
                </li>
                <li>
                  <MDBIcon far icon="star" size="sm" color="info" />
                </li>
              </MDBTypography>
              <p className="mb-2">
                <MDBIcon fas icon="quote-left" className="pe-2" />
               I couldn’t have asked for a better birthday celebration! Kemi Olafaju Events brought my vision to life with such creativity and attention to detail. From the decorations to the entertainment, everything was perfectly executed. It truly was a day to remember!
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      </section>

      {/* Footer */}
      <section className="footer">
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.tiktok.com/@k.o.events?is_from_webapp=1&sender_device=pc' className='me-4 text-reset'>
            <MDBIcon color='primary' fab icon='tiktok' />
          </a>
          <a href='https://www.instagram.com/kemiolafaju_events/' className='me-4 text-reset'>
            <MDBIcon color='primary' fab icon='facebook -f' />
          </a>
          <a href='https://www.instagram.com/kemiolafaju_events/' className='me-4 text-reset'>
            <MDBIcon color='primary' fab icon='instagram' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <img src="/assets/Kemilogo.PNG" alt="" className="footer-img" />
             
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Lagos, Nigeria
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                kemiolafaju@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +234 810 612 7694
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2025 Kemi’s Event Planning. All Rights Reserved 
      </div>
    </MDBFooter>
    <p className="text-center designed">Designed by Ebenezer</p>
      </section>
    </>
  );
}