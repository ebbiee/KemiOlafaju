import "./contact.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBFooter
} from "mdb-react-ui-kit";

export default function Contact() {
  return (
    <section className="contact py-5">
      <MDBContainer>
        <div className="heading text-center mb-5">
          <h2>Contact Us</h2>
          <p className="text-muted">
            Have questions or want to start planning your event? Reach out to us below.
          </p>
        </div>

        <MDBRow className="justify-content-center">
          {/* Contact Info Section */}

          <MDBCol md="6" className="mb-4">
            <MDBCard className="shadow-sm h-100">
              <MDBCardBody className="text-center">
                <MDBIcon fas icon="phone-alt" size="2x" className="mb-3 text-dark" />
                <h5>Call Us</h5>
                <p className="text-muted">+234 810 612 7694</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6" className="mb-4">
            <MDBCard className="shadow-sm h-100">
              <MDBCardBody className="text-center">
                <MDBIcon fas icon="envelope" size="2x" className="mb-3 text-dark" />
                <h5>Email</h5>
                <p className="text-muted">kemiolafaju@gmail.com</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        {/* Contact Form Section */}
        <MDBRow className="justify-content-center mt-5">
          <MDBCol md="8" lg="6">
            <MDBCard className="shadow-lg border-0">
              <MDBCardBody className="p-4">
                <form>
                  <MDBInput
                    label="Full Name"
                    type="text"
                    className="mb-4"
                    required
                  />
                  <MDBInput
                    label="Email Address"
                    type="email"
                    className="mb-4"
                    required
                  />
                  <MDBInput
                    label="Phone Number"
                    type="tel"
                    className="mb-4"
                    required
                  />
                  <MDBInput
                    label="Message"
                    type="textarea"
                    rows={4}
                    className="mb-4"
                  />

                  <div className="text-center">
                    <MDBBtn color="dark" size="lg">
                      <MDBIcon fas icon="paper-plane" className="me-2" />
                      Send Message
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
              <img src="../src/assets/Kemilogo.PNG" alt="" className="footer-img" />
             
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
    </section>

  );
}
