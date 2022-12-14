import { Typography, Box, Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface api {
  name: string;
}

function App() {
  //pageApi
  const [pageApi, setPageApi] = useState(1);
  //API
  const [api, setApi] = useState([] as any[]);
  const ApiAddress = axios.create({
    baseURL: "https://swapi.dev/api/people",
  });
  useEffect(() => {
    ApiAddress.get("?page=" + pageApi)
      .then((response: any) => setApi(response.data.results))
      .catch((err: any) => console.log(err));
  }, []);

  return (
    <>
      <Typography>App</Typography>

      <br />
      {api.map((apiElement) => (
        <Box key={apiElement.name}>{apiElement.name}</Box>
      ))}
      <br />
      <br />

      <Pagination count={10} />
    </>
  );
}

export default App;