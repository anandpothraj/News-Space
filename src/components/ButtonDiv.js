import React, { useContext }  from 'react';
import { Container , Button } from 'react-bootstrap';
import { Theme } from '../Context';

const ButtonDiv = () => {

  const { theme, currentIndex, setCurrentIndex, lastCard}= useContext(Theme);

  const nextCard = () => {
    setCurrentIndex(currentIndex+1)
  }

  const prevCard = () => {
    if(currentIndex === 0){
      setCurrentIndex(currentIndex);
    }
    else{
      setCurrentIndex(currentIndex-1);
    }
  }

  return (
    <>
        <Container>
            <div className="d-flex justify-content-between m-2">
              {
                (currentIndex === 0) ?
                  <Button variant={theme} onClick={prevCard} style={{visibility: "hidden"}}>&lt;-- Prev</Button>
                :
                  <Button variant={theme} onClick={prevCard} >&lt;-- Prev</Button>
              }
              {
                (currentIndex === lastCard-1) ?
                  <Button variant={theme}  onClick={nextCard} style={{visibility: "hidden"}}>next --&gt;</Button>
                :
                  <Button variant={theme}  onClick={nextCard} >next --&gt;</Button>
              }
            </div>
        </Container>
    </>
  )
}

export default ButtonDiv;