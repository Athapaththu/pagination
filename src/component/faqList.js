import React ,{useState ,useEffect} from 'react'
import axios from 'axios';
import { Typography } from '@mui/material';



const baseURL1 = "http://3.108.65.233/api/forum/getquestions";

export default function FaqList() {

  const [question, setQuestion] = useState();

  useEffect(() =>{
    axios.get(baseURL1).then((response) =>{
      setQuestion(response.data);
      // console.log(response, "response1-->");
    })
  }, []);

  if (!question) return null;

  return (
    <div>
     <Typography textAlign='justify' padding='20' width='80%' margin="20px auto">
        {question?.data?.map((item)  =>(
            <div key={item._id} >
              <h2>{item.question}</h2>
              <p>{item.answer[0].answer}</p>
            </div>
          ))}
      </Typography>
    </div>
  )
}
