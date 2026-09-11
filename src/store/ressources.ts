import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {type ImageInterface, type MemeInterface} from 'orsys-tjs-meme'
import datas from '../../db.json'
interface IRessourcesState{
    images:Array<ImageInterface>;
    memes:Array<MemeInterface>
}
const initialState:IRessourcesState = {
    images:[],
    memes:datas.memes
}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    addImage:(state,action:{type:string,payload:ImageInterface})=>{
        state.images.push(action.payload)
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(LoadRessources.fulfilled,(state,action)=>{
        state.images=action.payload
    })
  }
});

export const {addImage} = ressources.actions

// export const ressourcesReducer= ressources.reducer
const ressourcesReducer= ressources.reducer
export default ressourcesReducer


export const LoadRessources=createAsyncThunk('ressources/load',async()=>{
    const promise= await fetch('http://localhost:5629/images')
    return await promise.json()
})