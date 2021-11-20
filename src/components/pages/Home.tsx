import ContentItems from '../content/contentItems/ContentItems'
import ContentTitle from '../content/contentTitle/ContentTitle'
import { Container } from '@material-ui/core'
import { itemsDummy } from '../../utils/itemsDummy'

const Home = () => {
    return (
        <Container>
          <ContentTitle title="Trending Movies" textLink="See all movies" pathLink="/movies" />
          <ContentItems items={itemsDummy} itemCol={2} />
          <ContentTitle title="Trending TV Shows" textLink="Trending TV Shows" pathLink="/tvshows" />
          <ContentItems items={itemsDummy} itemCol={2}/>
        </Container>
    )
}

export default Home
