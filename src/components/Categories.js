import React, { useContext } from 'react';
import { Container , Badge} from 'react-bootstrap';
import { Theme } from '../Context';


const Categories = () => {

  const { theme, setCurrentCat } = useContext(Theme)

  const css = {
    cursor:"pointer"
  }
  
  return (
    <>
      <Container className='align-items-center outContainer mb-0'>
        <div className='wrapper justify-content-between'>
            {/* <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="all" onClick={()=>setCurrentCat("All")} >All</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="trending" onClick={()=>setCurrentCat("Trending")} >Trending</Badge></h5></div> */}
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="general"  onClick={()=>setCurrentCat("General")} >General</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="entertainment"  onClick={()=>setCurrentCat("Entertainment")} >Entertainment</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="bussiness" onClick={()=>setCurrentCat("Business")} >Bussiness</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="health"  onClick={()=>setCurrentCat("Health")} >Health</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="science"  onClick={()=>setCurrentCat("Science")} >Science</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="sports"  onClick={()=>setCurrentCat("Sports")} >Sports</Badge></h5></div>
            <div className="item" ><h5><Badge bg={theme} variant={theme} style={css} id="technology"  onClick={()=>setCurrentCat("Technology")} >Technology</Badge></h5></div>
        </div>
      </Container>
    </>
    )
  }

export default Categories;



