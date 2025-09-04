import "./services.css"
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import auntyTeju from "/assets/AuntyTeju.jpg"
import firstCouple from "/assets/firstcouple.jpg";
import random from "/assets/raandom.jpg"
import couple from "/assets/couples.jpg"
import mike from "/assets/Fabbunmi.jpg"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBFooter,} from "mdb-react-ui-kit";


export default function Services() {
  return (
    <>
    {/* Services Section */}
      <section className="services">
        <div className="serviescontainer">
        <h1>Our Services</h1>

        </div>

        <MDBRow className="align-items-center mb-5">
        <MDBCol md="5" className="text-center">
          <img
            src="/assets/Fabbunmi.jpg"
            alt="Founder"
            className="img-fluid shadow-4"
          />
        </MDBCol>
        <MDBCol md="7">
          <p className='p-founder'>
            Here at Kemi Olafaju Events, we specialize in creating unforgettable experiences tailored to your unique needs. From intimate gatherings to grand celebrations, we offer a wide range of services including wedding planning, birthday parties, corporate events, anniversaries, decoration and styling, and vendor coordination. Our team is dedicated to turning your vision into reality with creativity, professionalism, and attention to detail.
          </p>
        </MDBCol>
      </MDBRow>
      <div className="offers">
  <h1 className="text-center mb-5">What We Offer</h1>

  <MDBRow className="gy-4">
    {/* Weddings */}
    <MDBCol md="4">
      <MDBCard className="h-100 shadow-3">
        <MDBCardBody className="text-center">
          <MDBIcon fas icon="ring" size="3x" className="mb-3 text-danger" />
          <h5 className="fw-bold">Weddings</h5>
          <p>
            From engagement to the big day, we handle everything to make your
            wedding unforgettable.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    {/* Birthdays */}
    <MDBCol md="4">
      <MDBCard className="h-100 shadow-3">
        <MDBCardBody className="text-center">
          <MDBIcon fas icon="birthday-cake" size="3x" className="mb-3 text-warning" />
          <h5 className="fw-bold">Birthdays</h5>
          <p>
            Celebrate your milestones in style with creative themes and flawless
            planning.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    {/* Corporate Events */}
    <MDBCol md="4">
      <MDBCard className="h-100 shadow-3">
        <MDBCardBody className="text-center">
          <MDBIcon fas icon="briefcase" size="3x" className="mb-3 text-primary" />
          <h5 className="fw-bold">Corporate Events</h5>
          <p>
            Professional, elegant, and seamless corporate functions tailored to
            your brand.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>

  <MDBRow className="gy-4 mt-3">
    {/* Anniversaries */}
    <MDBCol md="4">
      <MDBCard className="h-100 shadow-3">
        <MDBCardBody className="text-center">
          <MDBIcon fas icon="heart" size="3x" className="mb-3 text-pink" />
          <h5 className="fw-bold">Anniversaries</h5>
          <p>
            Create romantic and memorable celebrations to mark your special
            milestones.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    {/* Decoration & Styling */}
    <MDBCol md="4">
      <MDBCard className="h-100 shadow-3">
        <MDBCardBody className="text-center">
          <MDBIcon fas icon="palette" size="3x" className="mb-3 text-success" />
          <h5 className="fw-bold">Decoration & Styling</h5>
          <p>
            Stunning décor and creative designs to set the perfect atmosphere
            for your event.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    {/* Vendor Coordination */}
    <MDBCol md="4">
      <MDBCard className="h-100 shadow-3">
        <MDBCardBody className="text-center">
          <MDBIcon fas icon="users" size="3x" className="mb-3 text-info" />
          <h5 className="fw-bold">Vendor Coordination</h5>
          <p>
            We manage and coordinate with trusted vendors so you can relax and
            enjoy your event.
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</div>
<div className="feautred-events">
  <h1 className="text-center mb-4">Featured Events</h1>
  <div className="container-fluid text-center p-0">
    <div className="row g-0">
      <div className="col-md-8">
        <img src={auntyTeju} alt="Event" />
      </div>
      <div className="col-6 col-md-4">
        <img src={firstCouple} alt="Couple" />
      </div>
    </div>
    <div className="row g-0">
      <div className="col-6 col-md-4">
        <img src={random} alt="Couple" />
      </div>
      <div className="col-6 col-md-4">
        <img src={couple} alt="Couple" />
      </div>
      <div className="col-6 col-md-4">
        <img src={mike} alt="Couple" />
      </div>
    </div>
  </div>
</div>

 

      </section>
      <section className="footer">
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.tiktok.com/@k.o.events?is_from_webapp=1&sender_device=pc' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='tiktok' />
          </a>
          <a href='https://www.instagram.com/kemiolafaju_events/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook -f' />
          </a>
          <a href='https://www.instagram.com/kemiolafaju_events/' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
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