import React from "react";
import { useState, createContext } from "react";
import {v4 as uuidv4} from "uuid"

export const GLobalContext = createContext();

const CreateGlobalContext = ({ children }) => {


  // const [cartNum,setCartNum]=useState("")
  // setCartNum(cartNum+1)
    
  
  

  const [formodal, setFormModal] = useState(false);
  const [formData, setFormData] = useState({
    BlogTitle: "",
    date: "",
    blogText: "",
    imageLink: "",
    bookTitle:"",
    bookAuthor:"",
    bookPrice:"",
    bookISBN:"",
    bookImageLink:"",
    bookCategory:"",
    
  });

  




  const onChangeHandler = (e) => {
    // console.log(e);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const store = {
    formodal,
    setFormModal,
    onChangeHandler,
    formData,
    setFormData,
    
  };

  return (
    <GLobalContext.Provider value={store}>{children}</GLobalContext.Provider>
  );
};

export default CreateGlobalContext;
