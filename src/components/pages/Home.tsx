import ContentItems from '../content/contentItems/ContentItems'
import itemImage from '../../assets/images/default-item.png'
import ContentTitle from '../content/contentTitle/ContentTitle'
import { Container } from '@material-ui/core'

const itemsDummy = [{
    image: itemImage,
    name: 'Shang-Chi and the Legend of the Ten Rings',
    voteAverage: 7.8
  },{
    image: itemImage,
    name: 'Shang-Chi and the Legend of the Ten Rings',
    voteAverage: 7.8
  },{
    image: itemImage,
    name: 'Shang-Chi and the Legend of the Ten Rings',
    voteAverage: 7.8
  },{
    image: itemImage,
    name: 'Shang-Chi and the Legend of the Ten Rings',
    voteAverage: 7.8
  },{
    image: itemImage,
    name: 'Shang-Chi and the Legend of the Ten Rings',
    voteAverage: 7.8
  },{
    image: itemImage,
    name: 'Shang-Chi and the Legend of the Ten Rings',
    voteAverage: 7.8
  }]

const Home = () => {
    return (
        <Container>
          <ContentTitle title="Trending Movies" textLink="See all movies" pathLink="/movies" />
          <ContentItems items={itemsDummy} />
          <ContentTitle title="Trending TV Shows" textLink="Trending TV Shows" pathLink="/tvshows" />
          <ContentItems items={itemsDummy} />
        </Container>
    )
}

export default Home
