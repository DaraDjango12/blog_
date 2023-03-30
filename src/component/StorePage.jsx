 import React from "react";
import "./StorePage.css";
import { BsSearch } from "react-icons/bs";

const StorePage = () => {
  const hardBooks = [
    {
      bookTitle: "Did i ever tell you",
      bookImageLink:
        "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241648988.jpg&w=280&q=100",
      category: "Thriller",
      isbn: "9780241648988",
      author: "Neil Sam",
      price: "$30",
    },
    {
      bookTitle: "Find My Voice",
      bookImageLink:
        "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978070%2F9780702307386.jpg&w=280&q=100",
      category: "Romance",
      isbn: "9780702307386",
      author: "Dooley Aoife",
      price: "$11.99",
    },
    {
      bookTitle: "Friendaholic",
      bookImageLink:
        "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008374907.jpg&w=280&q=100",
      category: "Fiction",
      isbn: "9780008374907",
      author: "Day Elizabeth",
      price: "$20",
    },
    {
      bookTitle: "The Land of Lost Things",
      bookImageLink:
        "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781529391817.webp&w=280&q=100",
      category: "Fiction",
      isbn: "9781529391817",
      author: "Conolly John",
      price: "$17",
    },
    {
      bookTitle: "The Fifth Sacred thing",
      bookImageLink:
        "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978055%2F9780553373806.jpg&w=280&q=100",
      category: "fiction",
      isbn: "9780553373806",
      author: "Unknown",
      price: "$20",
    },

    {
      bookTitle: "Dirty Laundry",
      bookImageLink:
        "https://i0.wp.com/blog.dubraybooks.ie/wp-content/uploads/2023/03/9780241556160.jpg?resize=186%2C300&ssl=1",
      category: "romance",
      isbn: "44894847683937",
      author: "Disha Bose",
      price: "$23",
    },
    {
      bookTitle: "The Last Devil to Die",
      bookImageLink:
        "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=280&q=100",
      category: "fiction",
      isbn: "9781529391817",
      author: "Osman Richard",
      price: "$30",
    },
    {
      bookTitle: "The Land of lost things",
      bookImageLink:
        "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781529391817.webp&w=280&q=100",
      category: "romance",
      isbn: "9781529391817",
      author: "John Connolly",
      price: "$50",
    },
    {
      bookTitle: "Strange Sally Diamond",
      bookImageLink:
        "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781844885756.jpg&w=280&q=100",
      category: "Thriller",
      isbn: "9781844885756",
      author: "Nugent Liz",
      price: "$40",
    },
    {
      bookTitle: "Nothing special",
      bookImageLink:
        "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526612137.jpg&w=280&q=100",
      category: "romance",
      isbn: "9781526612137",
      author: "Nicole Flattery",
      price: "$17",
    },
    {
      bookTitle: "The future of Geography",
      bookImageLink:
        "https://blackwells.co.uk/resources/images/spotlights/homeSpotlight/spotlight_book.png",
      category: "Thriller",
      isbn: "5235464745768",
      author: "search Author",
      price: "$40",
    },
    {
      bookTitle: "365 Days of arts",
      bookImageLink:
        "https://blackwells.co.uk/resources/images/curators/curator3_small1.jpg",
      category: "rommance",
      isbn: "3253545",
      author: "check  author",
      price: "$30",
    },
    {
      bookTitle: "Dreams from my father",
      bookImageLink:
        "https://booksellers.ng/image/cache/catalog/DREAMS-FROM-MY-FATHER-870x870.jpg",
      category: "reality",
      isbn: "4354635656",
      author: "Barack Obama",
      price: "$200",
    },
    {
      bookTitle: "You must see forth at Dawn",
      bookImageLink:
        "https://booksellers.ng/image/cache/catalog/you-must-set-forth-at-dawn-870x870.jpg",
      category: "reality",
      isbn: "2435546578",
      author: "wole soyinka",
      price: "$140",
    },
    {
      bookTitle: "A Promise Land",
      bookImageLink:
        "https://booksellers.ng/image/cache/catalog/A-PROMISED-LAND-870x870.jpg",
      category: "reality",
      isbn: "3253546576",
      author: "Barack Obama",
      price: "$40",
    },
    {
      bookTitle: "The Yoruba prople",
      bookImageLink:
        "https://udarabooks.com/201-thickbox_default/the-yoruba-people-profile-of-the-foremost-black-nation.jpg",
      category: "reality",
      isbn: "41324325436",
      author: "adebanji Akintoye",
      price: "",
    },
    {
      bookTitle: "The four agreements :A practical Guide to personal freedom",
      bookImageLink:
        "https://images.bwbcovers.com/187/The-Four-Agreements-9781878424310.jpg",
      category: "Motivation",
      isbn: "2143434",
      author: "Janet Mills,Don Miguel",
      price: "$30",
    },
    {
      bookTitle: "The help",
      bookImageLink:
        "https://images.bwbcovers.com/042/The-Help-9780425232200.jpg",
      category: "romance",
      isbn: "3546436464576",
      author: "Kathryn Stockett",
      price: "$10",
    },
  ];
  const dynamicBook = localStorage.getItem("bookDetails")
    ? JSON.parse(localStorage.getItem("bookDetails"))
    : [];

  const books = [...hardBooks, ...dynamicBook];
    

  const handleAdd2Cart = (book) => {
    // const {bookTitle, bookImageLink} = book

    // const data = {bookTitle, bookImageLink}

    // const bookData={bookTitle,bookAuthor,bookPrice,bookISBN}

    const localBook=localStorage.getItem("bookItems") ? JSON.parse(localStorage.getItem("bookItems")):[];
    console.log(localBook )

    const localBookCopy=[...localBook, book]
    console.log(localBookCopy)

    localStorage.setItem("bookItems", JSON.stringify(localBookCopy))
    
  };

  return (
    <div>
      <div className="storeTop h-[30vh] text-white">
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

      <div className="mt-8 md:p-4 md:flex">
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
                    <p>{book.category ? book.category : book.bookCategory}</p>
                  </div>
                  <div>
                    <p>By:{book.author ? book.author : book.bookAuthor}</p>
                  </div>
                  <div>
                    <p></p>ISBN:{book.isbn ? book.isbn : book.bookISBN}
                  </div>
                  <div>
                    <p>Price:{book.price ? book.price : book.bookPrice}</p>
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
