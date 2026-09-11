import React from 'react'
import Mfr from './MemeForm'
import type { MemeInterface } from 'orsys-tjs-meme'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

type Props = {
    meme:MemeInterface
    onMemeChange:(n:MemeInterface)=>void
}

const MemeForm = (props: Props) => {
    const images=useSelector((s:RootState)=>s.images)
  return (
    <Mfr images={images} {...props}/>
  )
}

export default MemeForm