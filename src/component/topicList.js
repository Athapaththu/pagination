import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

const baseURL = "http://3.108.65.233/api/forum/gettopics";

export default function TopicList() {
  const [topic, setTopic] = useState();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTopic(response.data);
    //   console.log(response, "response-->");
    });
  }, []);

  if (!topic) return null;
//   console.log(topic, "topic-->");

  return (
    <div>
      <Typography variant="h5" align="center" marginTop={5}>    
        {topic.data[0].topic}
      </Typography>
      <br />
      <Typography variant="h6" align="center">
        {topic.data.name}
      </Typography>
    </div>
  );
}
