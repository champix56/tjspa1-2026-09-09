import React, { useState } from "react";
import FlexV3rdGrow from "../layouts/FlexV3rdGrow/FlexV3rdGrow";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import FlexW1stGrow from "../layouts/FlexW1stGrow/FlexW1stGrow";
import MemeForm from "../MemeForm/MemeForm";
import Footer from "../Footer/Footer";
import { emptyMeme, type MemeInterface, MemeSVGViewer } from "orsys-tjs-meme";

const App = () => {

  const [current, setcurrent] = useState(emptyMeme)
  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar/>
        <FlexW1stGrow>
          <MemeSVGViewer meme={current} image={undefined}/>
          <MemeForm meme={current} onMemeChange={(newMeme)=>{
            setcurrent(newMeme)
          }}/>
        </FlexW1stGrow>
        <Footer/>
      </FlexV3rdGrow>
    </div>
  );
};

export default App;
