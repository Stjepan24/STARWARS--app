import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TSpeciesProp } from '../../helpers/types/TSpeciesProp';
import Specie from './Specie';

const Species = ({ species }: TSpeciesProp): JSX.Element => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                {species &&
                    species.map((specie, index) => (
                        <Col xs={12} sm={6} md={4} key={index} className="mb-3">
                            <Link to={'/species/' + specie.name.toLowerCase()}>
                                <Specie specie={specie} />
                            </Link>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
};

export default Species;
