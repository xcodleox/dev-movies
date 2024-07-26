import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMoviess,
  getPopularSeriess,
  getTopMoviess,
  getTopPeoplee,
  getTopSeriess
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Background,
  Inform,
  Poster,
  Container,
  ContainerButtons
} from './styles'

export function Home() {
  const [showModal, setShowModal] = useState()
  const [movie, setMovie] = useState()
  const [topMovie, setTopMovie] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topPeople, setTopPeople] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMoviess(),
        getTopMoviess(),
        getTopSeriess(),
        getPopularSeriess(),
        getTopPeoplee()
      ])
        .then(([Movie, TopMovie, TopSeries, PopularSeries, TopPeople]) => {
          setMovie(Movie)
          setTopMovie(TopMovie)
          setTopSeries(TopSeries)
          setPopularSeries(PopularSeries)
          setTopPeople(TopPeople)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}

          <Container>
            <Inform>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button
                  red={true}
                  onClick={() => navigate(`detalhe/${movie.id}`)}
                >
                  Assista Agora
                </Button>
                <Button red={false} onClick={() => setShowModal(true)}>
                  Assista O Trailer
                </Button>
              </ContainerButtons>
            </Inform>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovie && <Slider info={topMovie} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Series'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Series Populares'} />
      )}
      {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
    </>
  )
}
