import Header from '../../header/Header'
import ContentItems from '../contentItems/ContentItems'
import itemImage from '../../../assets/images/default-item.png'

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
        <>
            <Header />
            <ContentItems items={itemsDummy} title="Trending Movies" textLink="See all movies" />
            <ContentItems items={itemsDummy} title="Trending TV Shows" textLink="See all TV Shows" />
        </>
    )
}

export default Home
