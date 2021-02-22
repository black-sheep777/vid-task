import React from 'react'
import 'components/header/Header.scss'
import { AiOutlineClockCircle } from 'react-icons/ai'

export default function Header(){
  return (
    <div className="header">
      <span className="header__chatTopic">Case Of Kenedy Murder</span>
      <AiOutlineClockCircle className="header__clockIcon" />
      <span className="header__timer">(45:32)</span>
    </div>
  )
}