import React from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import { IUser } from '../../helpers/interfaces/IUser';
import Layout from '../../hoc/Layout';

const User = (props: IUser): JSX.Element => {
    console.log(props);
    return (
        <Container className="mt-3">
            <Row>
                <Col lg="8">
                    <Card>
                        <Card.Body>
                            <Card.Title>Vehicles</Card.Title>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">{props.userName}</Col>
            </Row>
        </Container>
    );
};

export default Layout(User);
