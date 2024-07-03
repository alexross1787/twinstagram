import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 

const Messages = () => {
  const messages = []; // Replace with your actual messages array

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header>Recent Conversations</Card.Header>
            <Card.Body>
              {messages.length === 0 ? (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">No Messages</li>
                </ul>
              ) : (
                <ul className="list-group list-group-flush">
                  {/* Replace with logic to display actual recent conversations */}
                  <li className="list-group-item">Conversation 1</li>
                  <li className="list-group-item">Conversation 2</li>
                  <li className="list-group-item">Conversation 3</li>
                </ul>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header>Message</Card.Header>
            <Card.Body className="message-body">
              {messages.length === 0 ? (
                <div className="text-center py-5">
                  <p>Start Messaging</p>
                </div>
              ) : (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Message 1</li>
                  <li className="list-group-item">Message 2</li>
                  <li className="list-group-item">Message 3</li>
                </ul>
              )}
            </Card.Body>
            <Card.Footer>
              <input type="text" className="form-control mb-2" placeholder="Type a message..." />
              <Button variant="primary">Send</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Messages;
