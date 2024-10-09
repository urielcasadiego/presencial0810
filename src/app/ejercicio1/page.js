"use client";
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';

export default function UpdateTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Valor: ${count}`;
	count.toString();
  }, [count]);

  return (
    <Container fluid className='p-5'>
		<Row>
			<Col>
                <h3>Ejercicio 1</h3>
            </Col>
		</Row>
		<Row>
        	<Col>
				<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>Contador</Card.Title>
					<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
					<Card.Text>
						Valor: {count}
					</Card.Text>
					<Button variant="primary" onClick={() => setCount(count + 1)}>Incrementar</Button>
				</Card.Body>
				</Card>
			</Col>
	    </Row>
	</Container>
  );
}