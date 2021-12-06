import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "./movies.css";
import { AddtoFavourites } from "../store/actions/action";
import { ChangeLanguage } from "../store/actions/language";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Movie()  { 
  
  const [Movies, setMovie] = useState([]);
  const [pagenumber, setPage] = useState(1);
  const data = useSelector((state) => state.favorite.Fav);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "439cce71a60012fd641f1acd9a7bf423",
          page: pagenumber,
        },
      })
      .then((res) => setMovie(res.data.results))
      .catch((err) => console.log(err));
  }, [pagenumber]);

  const Prev = () => {
    if (pagenumber > 1) {
      let i = pagenumber;
      i--;
      setPage(i);
    }
  };

  const Next = () => {
    if (pagenumber < 100) {
      let i = pagenumber;
      i++;
      setPage(i);
    }
  };

  const dispatch = useDispatch();

  const AddtoFav = (movie) => {
    dispatch(AddtoFavourites(movie));
    console.log(data);
  };

  const language = useSelector((state) => state.language.lang);
  const disptach = useDispatch();
  const handleChangeLanguage = () => {
    disptach(ChangeLanguage(language === "AR" ? "EN" : "AR"));
  };

  return (
    <>
      <div className="Container-pic">
        <button
          className="btn btn-primary"
          onClick={() => handleChangeLanguage()}
        >Change language &nbsp; &nbsp;
            {language}
          {" "}
        </button>
        <br />
        <br />
        <Row md={5} sm={5} className="g-5">
          {Movies.map((movie, index) => {
            return (
              <Col key={index}>
                <Card>
                  <Card.Img
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <Card.Body>
                    <Link to={`/movieDetails/${movie.id}`}>
                      <Card.Title>{movie.title}</Card.Title>
                    </Link>
                    <br />
                    <Button onClick={() => AddtoFav(movie)} style={{fontSize:10}}>
                    <FontAwesomeIcon icon={faStar} />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <br />
        <br />
        <Button
          className="mx-5"
          style={{ position: "relative", left: 150 }}
          onClick={Prev}
        >
          Prev
        </Button>
        <Button
          className="mx-5"
          style={{ position: "relative", left: 650 }}
          onClick={Next}
        >
          Next
        </Button>
      </div>
    </>
  );
}
