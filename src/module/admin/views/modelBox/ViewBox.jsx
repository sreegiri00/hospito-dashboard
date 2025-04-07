import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ViewBox(props) {
  const {viewId
    // ,setVewId
  } = props.val;
  // const [user, setUser] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () =>{ 
    setOpen(false)
    // setViewId(null)
  };

  // useEffect(() => {
  //   if(viewId)setOpen(true)
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${config.Ip}/doctore/getUser/${viewId}`);
  //       console.log(response.data);
        
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   if (viewId) {
  //     fetchData().then(setOpen(true))
  //   }
  // }, [viewId]);


  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button onClick={handleClose}>x</button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {viewId.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
