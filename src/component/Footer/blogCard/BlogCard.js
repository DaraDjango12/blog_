import "./BlogCard.css";
import React, { useEffect, useState, useContext } from "react";
import { GLobalContext } from "../../../CreateGlobalContext";
// import { Dara } from "../../../CreateGlobalContext";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import {v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import ReactShare from "../../ReactShare";


const BlogCard = () => {
  const [openshare, setOpenShare] = useState(false);
  const { formodal,setFormModal } = useContext(GLobalContext);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getPost();
  }, [formodal]);

  // without use effect "too many rerender error! will occur" but useEFFECT allows us control how many times the page rerenders
  const getPost = () => {
    const local = JSON.parse(localStorage.getItem("formDetails"))? JSON.parse(localStorage.getItem("formDetails")):[];

    setPostData(local);

    // const {BlogTitle,date,blogText,location,imageLink}=allpost
  };
  const Blogstyle = styled.div`

  margin-top: 4rem;
    padding: 1rem;
    padding: 1rem;
    
    color: black;
    // width: auto;
    // display:flex;
    // gap: 1rem;
  
    
    

    .newStaticBlog {
      font-size: 1.2;

      
      height: 30%;
      padding: 1rem;
      width: 30%;
      border-radius:50px
      color: black;
      
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .static {
      display: flex;
      text-align: center;
      justify-content: space-around;
      

    }

    .static img {
      height: 100%;
      width: 100%;
    }
    .date {
      font-size: 1rem;
    }

    .staticImg {
      flex: 2;
    }

    .staticName {
      flex: 1;
    }

    @media(Min-width:700px){
      display:flex;
      gap:4rem;
      width:100vw;
      padding:1rem;
      flex-wrap: wrap;
      // background-color:#14213d;
      width: auto;
     gap: 1rem;

    };

    .newStaticBlog{
      width:25%;
      background-color:rgb(136, 136, 194);
      border-radius:5px;
      margin:2rem;
    }
  `

  ;
   
// delete card section
  const DeleteHandler = (inputs) => {
    const filterData = postData.filter((items) => items.id !==inputs.id);
    
    if (filterData){
      window.confirm("do you wish to delete")
      localStorage.setItem("formDetails", JSON.stringify(filterData));
    getPost();
    
    }else{  
      window.confirm('your blog is empty')
    }

  };

  // const shareUrl='https://www.youtube.com/watch?v=9WzIACv_mxs'

  return (
    <Blogstyle className="bigDivWrapper ">
      {postData &&
        postData.map((inputs) => {
          return (
            <div key={inputs.id} className="newStaticBlog">
              <div className="static">
                <div className="staticImg">
                  <img src={inputs.imageLink} alt="P" />
                </div>

                <div className="staticName">
                  <p className="title"><b>Title:</b>{inputs.BlogTitle}</p>
                  

                  <p className="date"><b>Dara Django</b>{inputs.blogText}</p>
                </div>
              </div>
              <div>
                <p>{inputs.BlogText}</p>
              </div>

              <div className="staticIcons">
                <BsShare onClick={() => setOpenShare((prevState)=> !prevState)} />

                {openshare && 
                  <ReactShare />}

                <AiOutlineDelete onClick={() => {DeleteHandler(inputs)
            
                }} />
                <AiOutlineEdit />
              </div>
            </div>
          );
        })}
    </Blogstyle>
  );
};

export default BlogCard;
