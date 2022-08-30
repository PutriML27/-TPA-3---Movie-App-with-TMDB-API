import { useEffect, useState } from "react"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"
import axios from "axios"

const Trending = () => {
  const [movies, setMovies] = useState([]) 
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: "e8cce6bd6a6d2616fc0ea63e932cda18"
      }
    }).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} className="movieWrapper" id="trending" key={index}>
                <Card className="movieImage">
                  <Image src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt="test" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">{result.title}</Card.Title>
                      <Card.Text className="text-left">
                        {result.overview}
                      </Card.Text>
                      <Card.Text className="text-left">
                        {result.release_date}
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Trending
