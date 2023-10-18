import React from 'react'
import './Setting.css'
import Section1 from './Section-1/Section-1';
import Section2 from './Section-2/Section-2';
const Setting = () => {
    return (
        <div className='containerMain setting-container'>
            <div className='setting-wrap' >
                <Section1 />
                <Section2 />
            </div>
        </div>
    )
}

export default Setting