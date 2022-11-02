import React from 'react'
import '../Kitchen/Kitchen.css';
import Oven from '../Oven/Oven'
import Sink from '../Sink/Sink';

function Kitchen() {
  return (
    <><div>Kitchen
    <Oven /> 
    <Sink />
    </div>
    </>
  )
}

export default Kitchen