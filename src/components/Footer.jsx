import React from 'react';
import '../styles/footer.css'
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBRipple,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
      <MDBFooter className='text-center' color='white' bgColor='dark'>
        <div className='p-4 text-center text-white d-flex justify-content-center '>
          <section>
            <MDBRow className='d-flex justify-content-center img-team '>
              <p className='fw-bold'>REALIZADO POR:</p>
              <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='src/assets/team_mb2.jpg' className='w-200 rounded-circle' />
                  
                  <div className='mask'>
                    <div className='bottom-0 d-flex align-items-end h-100 text-center justify-content-center'>
                      <div>
                        <p className='fw-bold text-white mb-4'><a href='http://linkedin.com/in/miguel-ernesto-bazzarelli-8b5029247' target="_blank">
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>LinkedIn</p>
                      </div>
                    </div>
                  </div>
                </MDBRipple>
              </MDBCol>
            </MDBRow>
          </section>
        </div>
        <div className='text-center p-3 fw-bold' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2022 | Un proyecto para Diplomatura Web Full Stack - UTN
        </div>
      </MDBFooter>

    </div>
  )
}

export default Footer