"use client";
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import Card from'react-bootstrap/Card';
export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
	<Container fluid className='p-5'>
	<Row>
		<Col>
			<h3>Ejercicio 3</h3>
		</Col>
	</Row>
	<Row>
		<Col>
			<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>Temporizador</Card.Title>
				<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
				<Card.Text>
					Tiempo: {time} segundos
				</Card.Text>
			</Card.Body>
			</Card>
		</Col>
	</Row>
</Container>
  );
}
