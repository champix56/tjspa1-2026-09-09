import React, { useEffect } from "react";
import MemeForm from "../components/MemeForm/MemeForm.connected";
import MemeSVGViewer from "../components/MemeSVGViewer/MemeSVGViewer";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/currentMeme";
import type { RootState } from "../store/store";
import { emptyMeme } from "orsys-tjs-meme";

type Props = {};

const Editor = (props: Props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const memes = useSelector((s: RootState) => s.ressources.memes);
  const isLoaded = useSelector((s: RootState) => s.ressources.isLoaded);
  const nav = useNavigate();
  useEffect(() => {
    if(!isLoaded){return}
    let selectedMemeUrl = undefined;
    if (undefined !== params.id) {
      selectedMemeUrl = memes.find((m) => m.id === Number(params.id));
    } else {
      selectedMemeUrl = emptyMeme;
    }
    if (undefined === selectedMemeUrl) {
      nav("/");
      return ; 
    }
    dispatch(update(selectedMemeUrl!));
  }, [params.id, memes, dispatch, nav, isLoaded]);

  console.log(params);
  return (
    <>
      <MemeSVGViewer />
      <MemeForm />
    </>
  );
};

export default Editor;
