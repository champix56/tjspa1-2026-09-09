import React, { useState } from "react";
import FlexV3rdGrow from "../layouts/FlexV3rdGrow/FlexV3rdGrow";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import FlexW1stGrow from "../layouts/FlexW1stGrow/FlexW1stGrow";
import MemeForm from "../MemeForm/MemeForm";
import MemeSvgViewer from "../MemeSVGViewer/MemeSVGViewer";
import Footer from "../Footer/Footer";
import { emptyMeme, type MemeInterface } from "orsys-tjs-meme";

const App = () => {
const [meme, setmeme] = useState<MemeInterface>(emptyMeme)


  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar/>
        <FlexW1stGrow>
          <MemeSvgViewer meme={meme}/>
          <MemeForm meme={meme} onMemeChange={(newMeme)=>{
            setmeme(newMeme)
          }}/>
        </FlexW1stGrow>
        <Footer/>
      </FlexV3rdGrow>
    </div>
  );
};

export default App;
