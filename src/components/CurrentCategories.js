import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Theme } from '../Context';

const CurrentCategories = () =>{

  const { currentCat } = useContext(Theme)
  
    return(
      <>
      <Container>
          <h5 className='text-white'>{currentCat}</h5>
      </Container>
      </>
    )
  }


export default CurrentCategories;