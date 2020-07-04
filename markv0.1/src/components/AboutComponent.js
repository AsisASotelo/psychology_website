import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {TwitterTimelineEmbed} from 'react-twitter-embed';


function AboutComponent(props){

    return(

        <>

        <Container fluid >
            <Row>
                <Col sm={4}>
                    <TwitterTimelineEmbed
                        source="profile"
                        screenName="ucsbspl"
                        options={{height: 400}}
                        />
                    
                </Col>
                <Col sm ={4}>
                Our lab studies how people see and understand themselves and others. The majority of our current projects investigate face processing in an intergroup context. We are also interested in the consequences of social perception for mental and physical health and social relations.
To study these topics, we use a multi-level approach that draws on theories and methods from social psychology, cognitive neuroscience, vision science, immunology, and pharmacology.
Our long-term goal is to advance basic understanding of the mind, physiology, and behavior and translate this knowledge into interventions and policy recommendations designed to improve individual well-being and society.
                </Col>
                <Col sm = {4}>
                <img className = "jumbo" src = "image1.png">
                 </img>

                </Col>
            </Row>
        </Container>
        </>

    )


}

export default AboutComponent;