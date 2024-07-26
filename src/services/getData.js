import { api } from './api'

export async function getMoviess() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[0]
}

export async function getTopMoviess() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function getTopSeriess() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}
export async function getPopularSeriess() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}
export async function getTopPeoplee() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

export async function getMovieVideos(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results
}

// ------------------------------------------------------------

export async function getMovieCredits(movieId) {
  const { data: {cast} } = await api.get(`/movie/${movieId}/credits`)

  return cast
}
export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`)

  return results
}
export async function getMovieById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`)

  return data
}
