import React, { useState, useEffect } from 'react'
import 'components/footer/Footer.scss'
import RoundButton from 'components/common/round-button/RoundButton'
import { MdCallEnd } from 'react-icons/md'
import { IoMicOff, IoMic, IoVideocam, IoVideocamOff } from 'react-icons/io5'

export default function Footer(){
  const [mic, setMic] = useState(true)
  const [video, setVideo] = useState(true)
  //   useEffect(()=>{}, [Mic])
  return (
    <div className="footer">
      
      <RoundButton className="footer__btn--black" onClick={()=>{setMic(!mic)}}>
        {mic ? <IoMic /> : <IoMicOff />  }
      </RoundButton>

      <RoundButton className="footer__btn--red">
        <MdCallEnd className="footer__callIcon" />
      </RoundButton>

      <RoundButton className="footer__btn--black" onClick={()=>{setVideo(!video)}}>
        {video ? <IoVideocam /> : <IoVideocamOff /> }
      </RoundButton>
      
    </div>
  )
}