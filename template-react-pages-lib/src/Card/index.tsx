import React from 'react'
import s from './style.module.css'

interface IProps extends React.HTMLProps<HTMLDivElement> {}

const Card: React.FC<IProps> = (props) => {
  return (
    <div
      {...(props as any)}
      className={[s.card, props.className].filter(Boolean).join(' ')}
    />
  )
}

export default Card
