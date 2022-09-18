import {
    Typography,
    Paper,
    Box,
    ButtonGroup,
    IconButton,
    Pagination,
  } from "@mui/material";
  import { useStyles } from "../userModification-Dashborad/userModification.style";
  import DeleteIcon from "@mui/icons-material/Delete";
  import Edit from "@mui/icons-material/Edit";
  import Visibility from "@mui/icons-material/Visibility";
  
  import { useDispatch } from "react-redux";
  import {
    openItemForm,
    setSelectedItem,
    setStatus,
  } from "../../../Redux/ItemSlice";
  
  function SnackBoxModificationPage(props) {
   
  

  
    // eslint-disable-next-line no-undef
    let [page, setPage] = useState(1);
    const PER_PAGE = 5;
  
    // eslint-disable-next-line no-undef
    const count = Math.ceil(items.length / PER_PAGE);
    // eslint-disable-next-line no-undef
    const _DATA = Pagination(items, PER_PAGE);
  
    const handleChange = (e, p) => {
      setPage(p);
      _DATA.jump(p);
    };
  

  
    return (
      <>
        {/* box list */}
        <div>
          {_DATA.currentData().map((item) => {
            return (
              <Paper
                key={item.boxId}
                style={{
                  backgroundColor: "#EDEDED",
                  boxShadow: "none",
                  margin: "10px 0",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <Box
                      component="img"
                      sx={{
                        height: 100,
                        width: 100,
                        maxHeight: { xs: 100, md: 80 },
                        maxWidth: { xs: 100, md: 80 },
                      }}
                      alt="The house from the offer."
                      src={item.imageList}
                    />
                    <div style={{ paddingLeft: 10 }}>
                      <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                        {item.title}
                      </Typography>
                      <Typography style={{ fontWeight: 400, fontSize: 14 }}>
                        {item.overview}
                      </Typography>
                    </div>
                  </div>
                  <div style={{ padding: "10px 20px 0 0" }}>
                    <ButtonGroup variant="text" aria-label="text button group">
                      <IconButton
                        aria-label="view"
                        onClick={() => {
                          // eslint-disable-next-line no-undef
                          handleViewClick(item.boxId);
                        }}
                      >
                        <Visibility />
                      </IconButton>
                      {/* <ViewBox1Demo /> */}
                      <IconButton
                        aria-label="edit"
                        onClick={() => {
                          // eslint-disable-next-line no-undef
                          handleEditClick(item.boxId);
                        }}
                      >
                        <Edit />
                      </IconButton>
                      {/* <EditSnackBoxDemo /> */}
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          // eslint-disable-next-line no-undef
                          handleDeleteClick(item.boxId);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ButtonGroup>
                  </div>
                </div>
              </Paper>
            );
          })}
  
          <Box my={2} display="flex" justifyContent="center">
            <Pagination
              count={count}
              page={page}
              variant="outlined"
              color="primary"
              onChange={handleChange}
              style={{ justifyContent: "center", right: 0 }}
            />
          </Box>
        </div>
      </>
    );
  }
  
  export default SnackBoxModificationPage