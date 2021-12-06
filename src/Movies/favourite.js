// import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch , useSelector} from 'react-redux'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Deletefavourite } from '../store/actions/action';
import Button from "@restart/ui/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Favourite() {

  const fav = useSelector(state => state.favorite.Fav)
  const disptach = useDispatch();

  const Deletefavourites = (movie) => {
    let i = fav.findIndex((mov) => mov.id === movie.id);
    fav.splice(i, 1);
    disptach(Deletefavourite(movie));
  };
 
  return (
    <>
      <div>
        <h1 className="text-center"> Favourite Movies </h1>
        <br />
        <br />
        <Container>
          <Row md={5} sm={3} className="g-4">
            {fav?.map((movie, index) => {
              return (
                <Col key={index}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <Card.Body>
                    <Link to={`/movieDetails/${movie.id}`}>
                      <Card.Title>{movie.title}</Card.Title>
                    </Link>
                    <Button onClick={(e) => Deletefavourites(movie , e)} >
                    <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
