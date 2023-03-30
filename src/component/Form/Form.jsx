import React, { useState,useContext } from "react";
import { GLobalContext } from "../../CreateGlobalContext";
import "./Form.css";
import { AiOutlineClose } from "react-icons/ai";
import Spinner from '../../Spinner/Spinner'
import {v4 as uuidv4} from "uuid"
// import { toast } from "react-toastify/dist/components";

const Form = () => {

  const [loading,setloading]=useState(false)
  const {
    
    setFormModal,
  
    onChangeHandler,
    formData,
    setFormData,
  } = useContext(GLobalContext);

  const { BlogTitle, date, blogText, imageLink } = formData;

  const submitHandler = () => {
    setloading(true);
    setTimeout(()=>{
      setloading(false);
    },1000)
    // toast.success('Successful')
    const data = { BlogTitle, date, blogText, imageLink,id:uuidv4() };

    // if local storage contains "formdetails" then "json.parse formdetails " else local storage is empty[]
    const local = localStorage.getItem("formDetails")
      ? JSON.parse(localStorage.getItem("formDetails"))
      : [];

    const localCopy = [...local, data];

    localStorage.setItem("formDetails", JSON.stringify(localCopy));
    

    
  };

  return (
    <div className="form">
      <div className="formDiv">
        <div className="closeBtn" onClick={() => setFormModal(false)}>
          <AiOutlineClose />
        </div>

        <label>blogTitle</label>
        <input
          type="text"
          name="BlogTitle" value={formData.BlogTitle}
          placeholder="type Blog title"
          onChange={onChangeHandler}
          // value/
        />
      </div>

      <div className="formDiv">
        <label>Date</label>
        <input name="date" onChange={onChangeHandler} type="date" value={formData.date} />
      </div>
      <div className="formDiv">
        <label>blogText</label>
        <input
          name="blogText"
          type="textArea"
          onChange={onChangeHandler}
          placeholder="What would you like to say"
          value={formData.blogText}
        />
      </div>
      <div className="formDiv">
        <p className="id">{formData.id}</p>
      </div>


      <div className="formDiv">
        <label>Type image link</label>
        <input
          name="imageLink"
          onChange={onChangeHandler}
          placeholder="input image source code"
          type="text"
          value={formData.imageLink}
        />
      </div>


      <button type="button" onClick={submitHandler}>
        Submit
      </button>

      {loading ? (<Spinner/>) :(<button type="button" onClick={() => setFormModal(false)}>
        Close
      </button>)

      }
      
    </div>
  );
};

export default Form;
