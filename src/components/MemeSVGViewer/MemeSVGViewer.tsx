import React from "react";
import { MemeSVGViewer as Msviewer, type MemeInterface } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
type Props = {
  // meme: MemeInterface;
};

const MemeSVGViewer = (props: Props) => {
  const images = useSelector((s: RootState) => s.ressources.images);
  const current = useSelector((s: RootState) => s.current.current);
  return (
    <Msviewer
      basePath=""
      image={images.find((i) => i.id === current.imageId)}
      meme={current}
    />
  );
};

export default MemeSVGViewer;
