import React, { useEffect, useState } from "react";
import FlexV3rdGrow from "../layouts/FlexV3rdGrow/FlexV3rdGrow";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import FlexW1stGrow from "../layouts/FlexW1stGrow/FlexW1stGrow";
import MemeForm from "../MemeForm/MemeForm.connected";
import Footer from "../Footer/Footer";
import { emptyMeme } from "orsys-tjs-meme";
// import {images as jsonimagedb} from '../../../db.json'
import '../../store/store'
import MemeSVGViewer from "../MemeSVGViewer/MemeSVGViewer";
import { Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Editor from "../../pages/Editor";

const App = () => {
  // const [current, setcurrent] = useState(emptyMeme);
  // const [images, setimages] = useState([]);
  // useEffect(() => {
  //   const promise=fetch('http://localhost:5629/images').then(response=>response.json())
  //   promise.then(arr=>{setimages(arr)})
  // }, []);

  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexW1stGrow>
          <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/editor" Component={Editor}/>
              <Route path="/editor/:id" Component={Editor}/>

          </Routes>
        </FlexW1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
};

export default App;
