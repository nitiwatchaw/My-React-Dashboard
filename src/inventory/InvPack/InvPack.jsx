import React from 'react'
import './InvPack.css'
import { DataInvPack } from '../../component/Data/Data'
const InvPack = () => {
  return (


    DataInvPack.map((e, i) => {
      return (
        <div className='item' key={i}>
          <img src={e.img} alt="" />
          <div className="wrap">
            <p>{e.title}</p>
            <p>{e.number}</p>
          </div>
        </div>
      )
    })


  )
}

export default InvPack