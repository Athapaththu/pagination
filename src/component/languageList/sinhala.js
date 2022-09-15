import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

const baseURL1 = "http://3.108.65.233/api/forum/getquestions";
// const result = baseURL1.filter(baseURL1 => baseURL1.subTopic = "60d48a6412d96b1d70e01bd1");
// console.log(result);

export default function Sinhala() {
  const subTopic = "61972cd753cbe923b84fb2e6";

  const [question, setQuestion] = useState();

  useEffect(() => {
    axios.get(baseURL1).then((response) => {
      // console.log(response, "response");
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
             

                <Typography variant="body">{item?.answer[0].answer}</Typography>
              </div>
            );
          }
        })}
      </Typography>
    </div>
  );
}
