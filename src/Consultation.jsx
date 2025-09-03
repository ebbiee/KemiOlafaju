import "./consultation.css"
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

export default function Consultation() {
  return (
    <>
      {/* Booking Form */}
      <section className="booking py-5">
        <div className="heading mb-4">
          <h2 className="text-center">Our Consultation Services</h2>
        </div>

        <div className="head-body-content mb-5">
          <p className="intro text-center">
            Our Premium Consultation Service is a comprehensive, in-depth planning
            experience for those ready to take their event to the next level.
          </p>

          <div className="plans d-flex flex-column flex-md-row justify-content-center gap-4 text-center">
            <div className="plan shadow-sm p-4 rounded">
              <h2>30 Minutes</h2>
              <p className="price">₦50,000</p>
              <ul className="text-start">
                <li>Detailed planning session covering all aspects of your event</li>
                <li>Discover the scope of services and support we offer</li>
                <li>Personalized event design and theme guidance</li>
                <li>Ongoing support throughout your planning process</li>
              </ul>
            </div>

            <div className="plan shadow-sm p-4 rounded">
              <h2>1 Hour</h2>
              <p className="price">₦100,000</p>
              <ul className="text-start">
                <li>Comprehensive in-depth consultation for major events</li>
                <li>Collaborative planning with expert guidance</li>
                <li>Tailored ideas for décor, styling, and vendor coordination</li>
                <li>Extra time for Q&A and detailed planning strategies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Centered Form */}
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol md="8" lg="6">
              <MDBCard className="shadow-lg border-0">
                <MDBCardBody className="p-4">
                  <form>
                    <p className="form-head">Fill out the form and we will contact you to discuss the details together</p>
                    <MDBInput
                      label="Full Name"
                      type="text"
                      className="mb-4"
                      required
                    />
                    <br />
                    <MDBInput
                      label="Email Address"
                      type="email"
                      className="mb-4"
                      required
                    />
                    <br />
                    <MDBInput
                      label="Phone Number"
                      type="tel"
                      className="mb-4"
                      required
                    />
                    <br />
                    <MDBInput
                      label="Event Type (Wedding, Birthday, Corporate, etc.)"
                      type="text"
                      className="mb-4"
                      required
                    />
                    <br />
                    <MDBInput
                      label="Preferred Date"
                      type="date"
                      className="mb-4"
                    />
                    <br />
                    <MDBInput
                      label="Additional Details"
                      type="textarea"
                      rows={4}
                      className="mb-4"
                    />
                    <br />

                    <div className="text-center">
                      <MDBBtn color="dark" size="lg">
                        <MDBIcon fas icon="paper-plane" className="me-2" />
                        Submit Request
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
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
    </>
  );
}
