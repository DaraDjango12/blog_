import React, { useState, useContext } from "react";
import Modal from "../component/Modal/Modal";
import { GLobalContext } from "../CreateGlobalContext";
import { AiOutlineClose } from "react-icons/ai";
import Spinner from "../Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const BookForm = () => {
  // const{onChangeHandler}=useContext(GLobalContext)
  // const [bookFormData,setBookFormData]=useState([])

  // [bookTitle,bookAuthor,bookPrice,bookISBN]= bookData

  const [loading, setloading] = useState(false);
  const { setFormModal, onChangeHandler, formData, setFormData } =
    useContext(GLobalContext);

  const {
    bookTitle,
    bookAuthor,
    bookPrice,
    bookISBN,
    bookImageLink,
    bookCategory,
    
  } = formData

  const submitHandler = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
    toast.success("Successful");

    const data = {
      bookTitle,
      bookAuthor,
      bookPrice,
      bookISBN,
      bookImageLink,
      bookCategory,
      
    };

    // if local storage contains "formdetails" then "json.parse formdetails " else local storage is empty[]
    const local = localStorage.getItem("bookDetails")
      ? JSON.parse(localStorage.getItem("bookDetails"))
      : [];

    const localCopy = [...local, data];

    localStorage.setItem("bookDetails", JSON.stringify(localCopy));
  };

  return (
    <div className="w-50vw h-100vh  flex justify-center ">
      <form className="bg-blue-500 w-[400px] h-[500px] mt-8 rounded-md text-center">
        <h4>BookForm</h4>
        <div className="" onClick={() => setFormModal(false)}>
          <AiOutlineClose />
        </div>

        <div className="mt-4">
          <label>Image</label>
          <input
            type="text"
            name="bookImageLink"
            value={formData.bookImageLink}
            onChange={onChangeHandler}
          />
        </div>

        <div className="mt-4">
          <label>Book Title</label>
          <input
            type="text"
            name="bookTitle"
            onChange={onChangeHandler}
            value={formData.bookTitle}
          />
        </div>
        <div className="mt-4">
          <label>Category</label>
          <input
            type="text"
            name="bookCategory"
            onChange={onChangeHandler}
            value={formData.category}
          />
        </div>
        <div className="mt-4">
          <label>Author :</label>
          <input
            type="text"
            name="bookAuthor"
            value={formData.bookAuthor}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mt-4">
          <label>Book ISBN ;</label>
          <input
            type="text"
            name="bookISBN"
            value={formData.bookISBN}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mt-4">
          <p>Price :</p>
          <input
            type="text"
            name="bookPrice"
            value={formData.bookPrice}
            onChange={onChangeHandler}
          />
        </div>
        {/* <button className="w-full bg-blue-200 mt-8 rounded-lg px-8 py-2">Buy this Book </button> */}

        <button type="button" onClick={submitHandler}>
          Submit
        </button>

        {loading ? (
          <Spinner />
        ) : (
          <button type="button" onClick={() => setFormModal(false)}>
            Close
          </button>
        )}
      </form>
    </div>
  );
};

export default BookForm;
