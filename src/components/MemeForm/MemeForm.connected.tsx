import React from 'react'
import Mfr from './MemeForm'
import type { MemeInterface } from 'orsys-tjs-meme'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { update } from '../../store/currentMeme'

type Props = {
    // meme:MemeInterface
    //onMemeChange:(n:MemeInterface)=>void
}

const MemeForm = (props: Props) => {
    const images=useSelector((s:RootState)=>s.ressources.images)
    const current=useSelector((s:RootState)=>s.current.current)
    const dispatch=useDispatch()
  return (
    <Mfr images={images} meme={current} onMemeChange={(m)=>{dispatch(update(m))}}/>
  )
}

export default MemeForm