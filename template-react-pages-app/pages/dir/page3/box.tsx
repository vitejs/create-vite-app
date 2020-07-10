import React from 'react'
import s from './box.module.css'

interface IProps {}

const Box: React.FC<IProps> = (props) => {
  console.log('children', props.children)
  return <div className={s.box}>React Box</div>
}

export default Box
