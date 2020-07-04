import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

function PeopleComponent(props){

    return(
        <>

        <Container fluid className ="sections">

           
            <Row>
                    <Col sm={4}>
                        <h1>
                            PRINCIPAL INVESTIGATOR
                        </h1>

                    </Col>
                    <Col sm={4}>     
                        <h1>
                            PH.D. STUDENTS
                        </h1>
                        
                    </Col>

                    <Col sm={4}>
                        <h1>
                            ALUMNI
                        </h1>
                        
                    </Col>
                </Row>

        </Container>
        </>

    )
}

export default PeopleComponent;
