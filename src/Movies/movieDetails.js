import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container} from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./movies.css";

export default function MovieDetails() {
  const [details, setDetails] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}`, {
        params: {
          api_key: "439cce71a60012fd641f1acd9a7bf423",
        },
      })
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err)); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Container className="p-5">
        <Card> 
            <Card.Img
              style={{ width: 345 , borderRadius:30}}
              src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`}
            />
            <Card.Body>
              {" "}
                <h3 style={{fontWeight:"bolder"}}>{details.title}</h3>
                <p className="pre-card">{details.overview}</p>
            </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
