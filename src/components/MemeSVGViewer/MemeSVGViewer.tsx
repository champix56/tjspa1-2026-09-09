import React from "react";
import { MemeSVGViewer as Msviewer, type MemeInterface } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
type Props = {
  meme: MemeInterface;
};

const MemeSVGViewer = (props: Props) => {
  const images = useSelector((s: RootState) => s.images);
  return (
    <Msviewer
      basePath=""
      image={images.find((i) => i.id === props.meme.imageId)}
      meme={props.meme}
    />
  );
};

export default MemeSVGViewer;
