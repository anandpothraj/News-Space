import React , { useContext } from 'react';
import { Spinner, Container} from 'react-bootstrap';
import Categories from './Categories';
import CurrentCategories from './CurrentCategories';
import CardDiv from './CardDiv';
import ButtonDiv from './ButtonDiv';
import Img from '../img/defaultImg.png';
import { Theme } from '../Context';

const NewsContainer = () => {

  const { articles, currentIndex} = useContext(Theme)
  
    return (
      <>
        <Categories/>
        <CurrentCategories />
          <div style={{height:"100%"}}>
            {articles?
              <>
                <CardDiv
                  title={articles?articles[currentIndex].title:"No Title Found"} 
                  description={articles?articles[currentIndex].description:"No Description Found"} 
                  img={articles?articles[currentIndex].urlToImage:Img} 
                  url={articles?articles[currentIndex].url:"https://optimistic-bhabha-a72880.netlify.app/"}/>
                <ButtonDiv/>
              </>
              :
              <>
                <Container className='d-flex justify-content-center'>
                    <Spinner animation="border" className='m-auto'/>
                </Container>
              </>
          }
          </div>
      </>
    )
}

export default NewsContainer;