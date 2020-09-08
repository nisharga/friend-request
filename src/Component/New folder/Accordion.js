import React from 'react';
import {Card} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'

const Accordion = () => {
    return (

            <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click msdse!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
            </Accordion>
    );
};

export default Accordion;