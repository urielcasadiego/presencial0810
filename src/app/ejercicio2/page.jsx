"use client";
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
export default function FetchUsers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const users = await response.json();
        setData(users);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
	<Container fluid className='p-5'>
		<Row>
			<Col>
				<h3>Ejercicio 2</h3>
			</Col>
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
