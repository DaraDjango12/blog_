import React from 'react'

import'./Modal.css'

const Modal = ({children}) => {
    


  return (
    <div className='modal'>
        {children}
        {/* <Form/> */}

    </div>
  )
}

export default Modal