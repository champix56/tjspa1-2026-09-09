import { createSlice } from '@reduxjs/toolkit'
import {type ImageInterface, type MemeInterface} from 'orsys-tjs-meme'

interface IRessourcesState{
    images:Array<ImageInterface>;
    memes:Array<MemeInterface>
}
const initialState:IRessourcesState = {
    images:[],
    memes:[]
}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    addImage:(state,action:{type:string,payload:ImageInterface})=>{
        state.images.push(action.payload)
    }
  }
});

export const {addImage} = ressources.actions

// export const ressourcesReducer= ressources.reducer
const ressourcesReducer= ressources.reducer
export default ressourcesReducer