"use client";
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import Table from'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
export default function ConditionalFetch() {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isFetching) {
      async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setData(users);
        setIsFetching(false);
      }

      fetchData();
    }
  }, [isFetching]); // Solo se ejecuta cuando `isFetching` cambia a true.

  return (
	<Container fluid className='p-5'>
	<Row className='pb-2'>
		<Col>
			<h3>Ejercicio 4</h3>
		</Col>
	</Row>
	<Row className='pb-3'>
		<div>
			<Button onClick={() => setIsFetching(true)}>Cargar Usuarios</Button>
		</div>
	</Row>
	<Row>
		<Table striped bordered hover>
			<thead>
				<tr>
				<th>#</th>
				<th>Name</th>
				<th>Email</th>
				<th>Username</th>
				</tr>
			</thead>
			<tbody>
				{data.map((user, index) => {
					return (
					<tr key={index}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.username}</td>
					</tr>
					);
				})}
			</tbody>
		</Table>
	</Row>
</Container>
  );
}
