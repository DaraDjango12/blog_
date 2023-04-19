import React, { useEffect, useState } from "react";
//  import { GLobalContext } from "../CreateGlobalContext";
import "./StorePage.css";
import { BsSearch } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const StorePage = () => {
  // const[setCartNum]=useContext(GLobalContext)



  //Cart
const [getCart,setGetCart]=useState([])

const cartSetGetCart=()=>{
  const localCart=JSON.parse(localStorage.getItem("bookItems"))
  setGetCart(localCart)

} 
  
  useEffect(()=>{
    cartSetGetCart()
  },[])

 //book page
  const dynamicBook = localStorage.getItem("bookDetails")
    ? JSON.parse(localStorage.getItem("bookDetails"))
    : [];

    

  const books = [...dynamicBook];
  console.log(books)
  

  const handleAdd2Cart = (book) => {
    const {
      bookTitle,
      bookImageLink,
      bookPrice,
      bookAuthor,
      bookCategory,
      bookISBN,
    } = book;

    const data = {
      bookTitle,
      bookImageLink,
      bookPrice,
      bookAuthor,
      bookCategory,
      bookISBN,
      id:uuidv4(),
    };
    // const bookData={bookTitle,bookAuthor,bookPrice,bookISBN}

    const localBook = localStorage.getItem("bookItems")
      ? JSON.parse(localStorage.getItem("bookItems"))
      : [];

    const localBookCopy = [...localBook, data];
    console.log(localBookCopy);

    localStorage.setItem("bookItems", JSON.stringify(localBookCopy));
    // setCartNum()


    cartSetGetCart()

  };

  return (
    <div>
      <div className="storeTop h-[30vh] text-[green]">
        <p className="text-center text-4xl text-white-800">
          Find Anything in Nigeria
        </p>
        <div className="flex items-center h-full justify-center mt-4">
          {/* Search Bar */}
          <div className="flex border-8 bg-white border-green-300 rounded-2xl h-16 w-[40vw]">
            <input
              type="text"
              className="searchInput h-12 border-none rounded-2xl w-[95%]"
              placeholder="i am looking for..."
            />

            <div>
              <BsSearch className="text-2xl text-black mt-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-8">
        <p className="rounded-sm text-center text-lg text-yellow-700">{getCart && getCart.length}</p>

        {/* shopping Cart */}
        <Link to='/cart'>
        <BsCart4 size={50} />
        </Link>

        
        
      </div>

      <div key={books.id} className="mt-8 md:p-4 md:flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 md:w-[75%] md:grid-cols-3 lg:max-h-[600px] overflow-y-auto mb-20 ">
          {books &&
            books.map((book) => {
              return (
                <div key={book.id} className="mt-4 text-center shadow-md">
                  <div className="h-[20em] w-full">
                    <img
                      className="h-full w-full"
                      src={book.bookImageLink}
                      alt="awfar he no show"
                    />
                  </div>
                  <div>
                    <b>{book.bookTitle}</b>
                  </div>
                  <div>
                    <p>{book.bookCategory}</p>
                  </div>
                  <div>
                    <p>By:{book.bookAuthor}</p>
                  </div>
                  <div>
                    <p></p>ISBN:{book.bookISBN}
                  </div>
                  <div>
                    <p>Price:{book.bookPrice}</p>
                  </div>
                  <button
                    className="w-full bg-blue-200 rounded-lg px-8 py-2"
                    onClick={() => handleAdd2Cart(book)}
                  >
                    Buy this Book{" "}
                  </button>
                </div>
              );
            })}
        </div>

        <div className=" bg-slate-200 rounded-md shadow-xl md:w-[20%] ">
          <div className="p-4">
            <div>
              <h3>Services</h3>
              <p>59,965</p>
            </div>
            <div className="mt-4">
              <h3>Jobs</h3>
              <p>1,950</p>
            </div>
            <div className="mt-4">
              <h3>Babies and Kids</h3>
              <p>Animals & Pets</p>
            </div>
            <div className="mt-4">
              <h3>Vehicles</h3>
              <p>199,902 ads</p>
            </div>
            <div className="mt-4 w-[20em] h-[1em]">
              <h3>Vehicles</h3>
              <img
                className="w-[10em]"
                src="https://www.nairaland.com/attachments/3924165_images_jpeg68d5535b971d558f594f10a5affd0a71"
                alt="e show"
              />
            </div>
            <div className="mt-4">
              <h3>Property</h3>
              <p>95,050 ads</p>
            </div>
            <div className="mt-4">
              <h3>Mobile Phones & Tables</h3>
              <p>70,974</p>
            </div>
            <div className="mt-4">
              <h3>Electronics</h3>
              <p>202,530 ads</p>
            </div>
            <div className="mt-4">
              <h3>Home,Furniture & Appliances</h3>
              <p>36,670 ads</p>
            </div>
            <div className="mt-4">
              <h3>Health & Beauty</h3>
              <p>72,643</p>
            </div>
            <div>
              <h3>Fashion</h3>
              <p>72,643</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
