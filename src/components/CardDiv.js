import React , { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import defaultImg from '../img/defaultImg.png';
import { Theme } from '../Context';

const  CardDiv = (props) => {

    const { theme,bgColor} = useContext(Theme);
    const title = props.title;
    const img = props.img;
    const url = props.url;
    const description = props.description;
    const grey = "#D3D3D3";

    return (
        <>
            <div className="cardDiv mx-3">
                <Card className="card" style={{background:`linear-gradient(${bgColor},${grey})`}}>
                    <Card.Img  className="cardImg" variant="top" src={img?img:defaultImg} />
                    <Card.Body>
                        <Card.Title className="cardTitle font-weight-bold">
                            <h6>{title?title.slice(0,150):"No Title Found"}</h6>
                        </Card.Title>
                        <Card.Text  className="cardDesc font-weight-normal">
                            <small>{description?description.slice(0,175):"No Description Found"}....</small>
                        </Card.Text>
                        <Button variant={theme} size="sm" href={url?url:"https://optimistic-bhabha-a72880.netlify.app/"} target="_blank">Read More</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
};

export default CardDiv;


// 