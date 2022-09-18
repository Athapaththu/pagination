import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Sinhala from "./languageList/sinhala";
import English from "./languageList/english";
import Hindu from "./languageList/hindu";
import Combodia from "./languageList/combodia";
import Cuba from "./languageList/cuba";
import Espanol from "./languageList/espanol";
import Filipino from "./languageList/filipino";
import Francais from "./languageList/francais";
import Myanmar from "./languageList/myanmar";
import Nepal from "./languageList/nepal";
import Tamil from "./languageList/tamil";
import Urdu from "./languageList/urdu";


const baseURl = "http://3.108.65.233/api/masterdata/language/findAll";

export default function LanguageItem() {
  const [language, setLanguage] = useState();

  const [age, setAge] = useState("");

  useEffect(() => {
    axios.post(baseURl).then((response) => {
      setLanguage(response?.data);
    });
  }, []);


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const rennderSwitch = (value) => {

    switch (value) {
      case 1:
        return <Sinhala />;

      case 2:
        return < Hindu/>;

      case 3:
        return <Combodia/>;
      
      case 4:
        return <Cuba />;

      case 5:
        return < English/>;

      case 6:
        return < Espanol/>;

      case 7:
        return < Filipino/>;

      case 8:
        return < Francais/>;

      case 9:
        return < Myanmar/>;

      case 10:
       return <Nepal/>;

      case 11:
        return < Tamil/>;

      case 12:
        return < Urdu/>;
      
        default:
        return <English />;
    }
  };

  // console.log(language?.data,"outlan")
  return (
    <div>
      <Box>  
        <FormControl fullWidth sx={{ minWidth: 120 ,width: 1/4 }}>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            
          >
           {/* {language?.data.map((item) => 
           
           <MenuItem value={item.index} onClick={() => setLanguage(item.index)}>
            {item.name}
            </MenuItem>     
            )} */}

            <MenuItem value={10} onClick={() => setLanguage(1)}>
            සිංහල
            </MenuItem>
            <MenuItem value={20} onClick={() => setLanguage(2)}>
            عربي
            </MenuItem> 
            <MenuItem value={30} onClick={() => setLanguage(3)}>
            Cambodia
            </MenuItem> 
            <MenuItem value={40} onClick={() => setLanguage(4)}>
            CUBA
            </MenuItem> 
            <MenuItem value={50} onClick={() => setLanguage(5)}>
            English
            </MenuItem> 
            <MenuItem value={60} onClick={() => setLanguage(6)}>
            Español
            </MenuItem> 
            <MenuItem value={70} onClick={() => setLanguage(7)}>
            Filipino
            </MenuItem> 
            <MenuItem value={80} onClick={() => setLanguage(8)}>
            Français
            </MenuItem> 
            <MenuItem value={90} onClick={() => setLanguage(9)}>
            Myanmar
            </MenuItem> 
            <MenuItem value={100} onClick={() => setLanguage(10)}>
            Nepal
            </MenuItem>
            <MenuItem value={110} onClick={() => setLanguage(11)}>
            Tamil
            </MenuItem>
            <MenuItem value={120} onClick={() => setLanguage(12)}>
            Urdu
            </MenuItem>
            
          </Select>
        </FormControl>
      </Box>
      <div>{rennderSwitch(language)}</div>

    </div>
  );
}
