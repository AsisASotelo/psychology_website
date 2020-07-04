import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';




function FooterComponent(props){
    return(

        <>

        <Container fluid className="cfooter">
            <Row>
                <Col sm={4}>

                    
                   <Container>

                       <Row>
                           <Col sm ={1}>
                           
                           </Col>
                           <Col sm ={11}>

                               <h2>LAB ADDRESS</h2>
                               <h6>551 Building, Room 1523</h6>
                               <h2>PARKING INFORMATION</h2>
                               <h2>TRAVEL INFORMATION</h2>
                               <h6>www.flylax.com</h6>
                               <h6>www.flysb.com</h6>
                               <h6>www.sbairbus.com</h6>
                               <h6>www.amtrack.com</h6>
                           
                           </Col>
                       </Row>
                


            </Container>
                    
                    



                </Col>





                <Col sm ={8}>
                    <Row>
                        <p style={{padding:20}}>The UCSB Social Perception Lab is located in the Department of Psychological & Brain Sciences at the University of California, Santa Barbara. UC Santa Barbara is a couple miles north of downtown Santa Barbara and approximately 90 miles north of Los Angeles. </p>
                    </Row>
                </Col>

                    
                
            </Row>


        </Container>

        
            


        </>
    )
}

export default FooterComponent;