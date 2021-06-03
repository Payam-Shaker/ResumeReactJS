import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {Data} from '../components/Data'
const Menu = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='menu'>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='menu-title'>
          {title}
        </h4>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p className="text-design image-container">{info}</p>}
    </article>
  )
}

export default Menu