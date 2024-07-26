import { Container } from './style'

export function SpanGenres({genres}) {
  

  return (
    <Container>
   {genres && genres.map((genre) => (

    <span key={(genre)}>{genre.name}</span>
   ))}
    </Container>
  )
}


