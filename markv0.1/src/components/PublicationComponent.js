import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

function PublicationComponent(props){

    return(
        <>
            <Container fluid className ="sections">
                <Row>
                    <Col sm ={4}>
                        <h1>
                            Publications
                        </h1>
                    </Col>
                    <Col sm ={8}>
                        <h1>
                            Publications Bar
                        </h1>
                    </Col>
                </Row>

            </Container>
        </>

    )
}

export default PublicationComponent;

