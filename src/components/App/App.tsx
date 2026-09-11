import React, { useEffect, useState } from "react";
import FlexV3rdGrow from "../layouts/FlexV3rdGrow/FlexV3rdGrow";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import FlexW1stGrow from "../layouts/FlexW1stGrow/FlexW1stGrow";
import MemeForm from "../MemeForm/MemeForm";
import Footer from "../Footer/Footer";
import { emptyMeme, MemeSVGViewer } from "orsys-tjs-meme";
// import {images as jsonimagedb} from '../../../db.json'
import '../../store/store'

const App = () => {
  const [current, setcurrent] = useState(emptyMeme);
  const [images, setimages] = useState([]);
  useEffect(() => {
    const promise=fetch('http://localhost:5629/images').then(response=>response.json())
    promise.then(arr=>{setimages(arr)})
  }, []);

  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexW1stGrow>
          <MemeSVGViewer
            meme={current}
            image={images.find((e, i) => {
              return e.id === current.imageId;
            })}
            basePath=""
          />
          <MemeForm
            meme={current}
            images={images}
            onMemeChange={(newMeme) => {
              setcurrent(newMeme);
            }}
          />
        </FlexW1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
};

export default App;
