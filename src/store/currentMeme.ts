import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {emptyMeme, type MemeInterface} from 'orsys-tjs-meme'
const initialState = {
    current:emptyMeme
}

const currentMeme = createSlice({
  name: 'current',
  initialState,
  reducers: {
    update:(state,action:{type:string, payload:MemeInterface})=>{
        state.current=action.payload
    },
     clear:(state,action:{type:string, payload:MemeInterface})=>{
        state.current={...emptyMeme}
    }
  },
  extraReducers(builder) {
      builder.addCase(saveMeme.fulfilled,(state,action)=>{
        state.current=action.payload
      })
  },
});
export const saveMeme=createAsyncThunk('current/save',async(meme:MemeInterface)=>{
    const pr=await fetch(`http://localhost:5629/memes${undefined!==meme.id?'/'+meme.id:''}`,{
        headers:{
            "Content-Type":"application/json"
        },
        method:undefined!==meme.id?'PUT':'POST',
        body:JSON.stringify(meme)
    })
    return await pr.json()

})
export const {update} = currentMeme.actions

export default currentMeme.reducer