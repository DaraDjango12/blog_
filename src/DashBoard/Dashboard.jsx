import React,{useState,useContext} from 'react'
import { GLobalContext} from '../CreateGlobalContext'
import Modal from '../component/Modal/Modal';
import BookForm from './BookForm';



const Dashboard = () => {
    const {formodal, setFormModal} =useContext(GLobalContext)

    const funcAddBook=()=>{
        setFormModal(true)
    }
  return (
    <div>
              
      <button className="" onClick={funcAddBook}>Add more ...</button>
      {
        formodal && (
        <Modal>
            <BookForm/>
        </Modal>)


      }
      
       <p>whats happening here</p>

    </div>
    
  )
}

export default Dashboard