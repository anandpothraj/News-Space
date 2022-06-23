import React , { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NewsContainer from './components/NewsContainer';
import './style.css';
import { Theme } from './Context';

function App() {

  const { bgColor }= useContext(Theme);
  const grey = "#D3D3D3";

  return (
    <>
      <div style={{background: `linear-gradient(${bgColor},${grey})`, height: "100vh"}}>
        <Header />
        <NewsContainer/>
      </div>
    </>
  );
}

export default App;
