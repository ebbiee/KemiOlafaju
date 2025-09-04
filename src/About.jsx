import { Link } from "react-router-dom";
import './About.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBFooter
} from "mdb-react-ui-kit";

export default function About() {
  return (
    <>
     <MDBContainer fluid className="py-5" style={{ backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <div
        className="text-center p-5 mb-5">
        <h1 className="fw">About Kemi Olafaju Events</h1>
        <p className="lead">
          Turning Moments into Memories, One Event at a Time.
        </p>
        <Link to="/consultation">
        
        <button className='btn-book'>
          Book a Consultation
        </button>
        </Link>
      </div>

      {/* Introduction */}
      <MDBRow className="mb-5">
        <MDBCol md="8" className="mx-auto text-center">
          <h2 className="fw-who mb-4">Who We Are</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
            At Kemi Olafaju Events, we believe every occasion deserves to be
            unforgettable. With a passion for creativity and a keen eye for
            detail, we specialize in weddings, birthdays, and corporate events
            that leave lasting impressions.
          </p>
        </MDBCol>
      </MDBRow>

      {/* Mission, Vision, Values */}
      <MDBRow className="text-center mb-5">
        <MDBCol md="4">
          <MDBCard className="h-100 shadow-3">
            <MDBCardBody>
              <MDBIcon fas icon="bullseye" size="3x" className="mb-3 " />
              <h5 className="fw-mission">Our Mission</h5>
              <p>
                To bring your vision to life with elegance, creativity, and
                precision.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
          <MDBCard className="h-100 shadow-3">
            <MDBCardBody>
              <MDBIcon fas icon="eye" size="3x" className="mb-3 " />
              <h5 className="fw-mission">Our Vision</h5>
              <p>
                To be the most trusted name in event planning across Nigeria and
                beyond.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
          <MDBCard className="h-100 shadow-3">
            <MDBCardBody>
              <MDBIcon fas icon="gem" size="3x" className="mb-3 " />
              <h5 className="fw-mission">Our Values</h5>
              <p>
                Excellence, Creativity, Professionalism, Integrity, and Passion.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      {/* Meet the Founder */}
      <MDBRow className="align-items-center mb-5">
        <MDBCol md="5" className="text-center">
          <img
            src="/assets/Aunty-kemi.jpg"
            alt="Founder"
            className="img-fluid shadow-4"
          />
        </MDBCol>
        <MDBCol md="7">
          <h3 className="fw">Meet Kemi Olafaju</h3>
          <p className='p-founder'>
            Founded by Kemi Olafaju, our journey began with a love for creating
            joyful experiences. Today, our team is dedicated to transforming
            every milestone into a masterpiece. With years of expertise in
            planning and coordinating, we pride ourselves in making every event
            stress-free, elegant, and memorable.
          </p>
        </MDBCol>
      </MDBRow>

      {/* Why Choose Us */}
      <MDBRow className="text-center mb-5">
        <h2 className="fw mb-4">Why Choose Us</h2>
        <MDBCol md="3">
          <MDBIcon fas icon="palette" size="2x" className="mb-2 " />
          <p>Creative Designs</p>
        </MDBCol>
        <MDBCol md="3">
          <MDBIcon fas icon="handshake" size="2x" className="mb-2 " />
          <p>Personalized Service</p>
        </MDBCol>
        <MDBCol md="3">
          <MDBIcon fas icon="clock" size="2x" className="mb-2 " />
          <p>Stress-Free Planning</p>
        </MDBCol>
        <MDBCol md="3">
          <MDBIcon fas icon="star" size="2x" className="mb-2 " />
          <p>Memorable Experiences</p>
        </MDBCol>
      </MDBRow>

      {/* CTA */}
      <div className="text-center p-5 bg-light rounded">
        <h3 className="fw mb-3">Let’s Create Memories Together</h3>
        <p>
          Ready to create an unforgettable event? Get in touch with us today and
          let’s bring your dream to life.
        </p>
        <MDBBtn color="info" size="lg">
          Contact Us
        </MDBBtn>
      </div>
    </MDBContainer>
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
