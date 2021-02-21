import React, { useState, useEffect } from 'react'
import 'components/caller-card/CallerCard.scss'
import RoundButton from 'components/common/round-button/RoundButton'
import { FaSignal } from 'react-icons/fa'
import { MdMoreVert } from 'react-icons/md'
import { IoMicOff, IoMic, IoVideocam, IoVideocamOff } from 'react-icons/io5'

interface CallerProps {
  photo : string
  name : string
}

const CallerCard  = ({ photo, name }: CallerProps)=>{
  const [callerMic, setCallerMic] = useState(true)
  const [callerVideo, setCallerVideo] = useState(true)


  return (
    <div className="callerCard" style={{ backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <RoundButton className="callerCard__moreOptions">
        <MdMoreVert />
      </RoundButton>
      <div className="callerCard__actions">
        <RoundButton className="callerCard__btn--red" onClick={()=>{setCallerMic(!callerMic)}}>
          {callerMic ? <IoMic /> : <IoMicOff /> }
        </RoundButton>
        <RoundButton className="callerCard__btn--red" onClick={()=>{setCallerVideo(!callerVideo)}}>
          {callerVideo ? <IoVideocam /> : <IoVideocamOff /> }
        </RoundButton>
        <span className="callerCard__name">{name}</span>
        <FaSignal className="callerCard__signal" />
      </div>
    </div>
  )
}

export default CallerCard