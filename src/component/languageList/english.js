/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Typography } from "@mui/material";
import PaginatePosts from "../Pagination";
import Posts from "../Posts"

const baseURL1 = "http://3.108.65.233/api/forum/getquestions";

export default function English() {
  const subTopic = "60d48a6412d96b1d70e01bd1";
  const [question, setQuestion] = useState();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const res = await axios.get("http://3.108.65.233/api/forum/getquestions");
      setPosts([...res.data ,...res.data]);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    axios.get(baseURL1).then((response) => {
      setQuestion(response.data);
    });
  }, []);

  if (!question) return null;

  return (
    
    <div>
      <Typography
        textAlign="justify"
        padding="20"
        width="80%"
        margin="20px auto"
      >
        {question?.data?.map((item) => {
          if (item.subTopic === subTopic) {
            
            return (
              
              <div key={item} style={{ padding: "20px 0" }}>
                  
                <Typography
                  variant="h6"
                  style={{ fontWeight: 600, padding: "3px 0" }}
                  >
                  {item.question}
                </Typography>

                <Typography variant="body">
                  {item?.answer[0].answer}
                </Typography>
              </div>
            );
          }
        })}
      </Typography>
     
    </div>
    
  );
}
