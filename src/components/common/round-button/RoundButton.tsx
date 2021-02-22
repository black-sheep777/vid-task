import React, { FunctionComponent }  from 'react'
import 'components/common/round-button/RoundButton.scss'


interface RoundBtnProps  {
  className: string
  onClick ?() : void
}
const RoundButton : FunctionComponent <RoundBtnProps> = ({ children, className, ...buttonProps }) => (
  <div className={['roundBtn', className].join(' ')} {...buttonProps}>
    {children}
  </div>
)

export default RoundButton