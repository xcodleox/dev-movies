import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'e60820f54c2c3a4fe7a398cacb20f1c8',
    language: 'pt-BR',
    page: 1
  }
})
