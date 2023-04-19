import React, { useContext } from "react";
import { GLobalContext } from "../CreateGlobalContext";
import "./HomePage.css";
import { BsShare } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import Modal from "./Modal/Modal";
import Form from "./Form/Form";
import BlogCard from "./Footer/blogCard/BlogCard";

const HomePage = () => {
  const { formodal, setFormModal } = useContext(GLobalContext);

  const toggleModal = () => {
    setFormModal(true);
  };

  return (
    <div>
      <div className="imageDiv">
        <div className="overLay">
          <div className="overLayFlex">
            <h1>We Love Our Customers</h1>
            <p>kilode kilode de de de </p>
          </div>
        </div>
      </div>

      <div>
        <div className="staticBlogs">
          <div>
            <img src="./beach.jpeg" alt="P" />
          </div>

          <div>
            <h4>Our Guy</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              officiis distinctio aperiam, modi laboriosam numquam repellendus
              alias assumenda in commodi.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="blogLine">
          <div className="blogCard">
            <img src="./beach.jpeg" alt="" />
            <div className="cardBigDiv">
              <div className="">
                <h1>Blogger</h1>
                <p>Oh God Our Gow how i need you now , how ineed you now</p>
              </div>

              <div className="staticIcons">
                <BsShare />
                <AiOutlineDelete />
                <AiOutlineEdit />
              </div>
            </div>
          </div>

          <div>
            <div className="blogCard">
              <img src="./beach.jpeg" alt="" />
              <div className="cardBigDiv">
                <div>
                  <h1>Blogger</h1>
                  <p>Oh God Our Gow how i need you now , how ineed you now</p>
                </div>
                <div className="staticIcons">
                  <BsShare />
                  <AiOutlineDelete />
                  <AiOutlineEdit />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <button className="addButton" onClick={toggleModal}>
          Add more ...
        </button>
      </div>

      <BlogCard />

      {formodal && (
        <Modal>
          <Form />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
