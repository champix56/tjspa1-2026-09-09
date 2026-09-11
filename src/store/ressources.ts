import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type ImageInterface, type MemeInterface } from "orsys-tjs-meme";
import datas from "../../db.json";
import { saveMeme } from "./currentMeme";
interface IRessourcesState {
    isLoaded:boolean;
  images: Array<ImageInterface>;
  memes: Array<MemeInterface>;
}
const initialState: IRessourcesState = {
  images: [],
  memes: [],
  isLoaded:false
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {
    addImage: (state, action: { type: string; payload: ImageInterface }) => {
      state.images.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoadRessources.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.memes = action.payload.memes;
      state.isLoaded=true;
    });
    builder.addCase(saveMeme.fulfilled, (state, action) => {
      const position = state.memes.findIndex((e) => e.id === action.payload.id);
      if (position === -1) state.memes.push(action.payload);
      else {
        state.memes[position] = action.payload;
      }
    });
  },
});

export const { addImage } = ressources.actions;

// export const ressourcesReducer= ressources.reducer
const ressourcesReducer = ressources.reducer;
export default ressourcesReducer;

export const LoadRessources = createAsyncThunk("ressources/load", async () => {
  const promiseMemes = fetch("http://localhost:5629/memes");
  const promiseImages = fetch("http://localhost:5629/images");
  const globalPromise = await Promise.all([promiseImages, promiseMemes]);
  return await {
    images: await globalPromise[0].json(),
    memes: await globalPromise[1].json(),
  };
});
