import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button, Modal, Box,
  TextField,  FormControl, OutlinedInput, InputLabel, Grid
} from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder';
import BloodSelecterPlaceholder from './BloodSelecterPlaceholder';
import DepartmentSelectPlaceholder from './DepartmentSelectPlaceholder';
import QualificationsSelectPlaceholder from './QualificationsSelectPlaceholder';
import Autocomplete from '@mui/material/Autocomplete';
import config from 'config';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  maxHeight: '80%',
  isOverflown: 'scroll',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 4,
  p: 4,
  borderRadius: 3,
};
const options = ['admin',
  'vendor',
  'doctor',
  'nurse',
  'patient',
  'pharmacy',];


export default function CreateModelBox(props) {
  const { userId, setUserId, setUpdate, saveData, setSaveData } = props.val;
  const [open, setOpen] = useState(false);
  const [constDoctorName, setConstDoctorName] = useState('')
  const [doctorData, setDoctorData] = useState({
    name: "",
    dob: "",
    image: "",
    department: "",
    time: [{ startTime: "" }, { endTime: "" }],
    attendance: "",
    bloodGroup: "",
    email: "",
    accountNumber: "",
    salory: "",
    qualification: "",
    phone: "",
    specialization: "",
    experience: "",
    availability: "",
    patient_id: "",
  });
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');


  const handleOpen = () => {
    setOpen(true); setSaveData(true); setDoctorData({
      name: "",
      dob: "",
      image: "",
      department: "",
      time: [{ startTime: "" }, { endTime: "" }],
      attendance: "",
      bloodGroup: "",
      email: "",
      accountNumber: "",
      salory: "",
      qualification: "",
      phone: "",
      specialization: "",
      experience: "",
      availability: "",
      patient_id: "",
    })
  };
  const handleClose = () => {
    setOpen(false);
    setUserId(null)
    setConstDoctorName([null])
  }

  useEffect(() => {
    if (userId) {
      // setOpen(false)
      axios.get(`${config.Ip}/user/getUser/${userId}`)
        .then(res => {
          setDoctorData(res.data)
          setOpen(true)
          setConstDoctorName(res.data)

          // setUserId(null)
        })

    }
  }, [userId]);

  const Submit = (e) => {
    e.preventDefault();
    axios.post(`${config.Ip}/user/createUser`, doctorData)
      .then(() => {
        setOpen(false);
        setUpdate(no => no + 1);

      })
      .catch(err => console.log(err));
  };

  const UpdateIt = (e) => {
    e.preventDefault();
    axios.patch(`${config.Ip}/user/updateUser/${userId}`, doctorData)
      .then(() => {
        setOpen(false)
        setUserId(null)
        setUpdate(no => no + 3);


      })
      .catch(err => console.log("err : ", err))
  }

  return (
    <div>
      <Button onClick={handleOpen} >ADD DOCTOR</Button>
      <Modal open={open} onClose={handleClose} width={1000}>
        <Box sx={style} style={{ overflowY: 'scroll' }}>
          <form onSubmit={saveData ? Submit : UpdateIt} >
            <Grid container spacing={2} >
              <Grid item xs={12} columns={100}>
                <TextField label="Image URL" fullWidth style={{ padding: "1px" }} value={doctorData.image} onChange={e => setDoctorData({ ...doctorData, image: e.target.value })} />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField label="Name" fullWidth value={doctorData.name} onChange={e => setDoctorData({ ...doctorData, name: e.target.value })} required />
              </Grid>
              <Grid item xs={12} sm={4} md={6} lg={2}>
                <FormControl fullWidth focused >
                  <InputLabel htmlFor="component-outlined" >D o B</InputLabel>
                  <OutlinedInput label="DOB" fullWidth type="date" value={doctorData.dob} onChange={e => setDoctorData({ ...doctorData, dob: e.target.value })} required />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8} md={6} lg={6}>
                <TextField label="Email" fullWidth value={doctorData.email} onChange={e => setDoctorData({ ...doctorData, email: e.target.value })} required />
              </Grid>
              <Grid item xs={12} md={6} lg={7}>
                <DepartmentSelectPlaceholder label="Depatment" fullWidth drop={{ setDoctorData, doctorData, constDoctorName, setConstDoctorName }} required />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <TextField label="Phone Number" type='number' fullWidth value={doctorData.phone} onChange={e => setDoctorData({ ...doctorData, phone: e.target.value.slice(0, 10) })} required />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2}>
                <FormControl fullWidth focused>
                  <InputLabel htmlFor="component-outlined" >Experience</InputLabel>
                  <OutlinedInput
                    fullWidth type="date" label="experience" value={doctorData.experience} onChange={e => setDoctorData({ ...doctorData, experience: e.target.value })} required />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={8} lg={5}>
                <TextField label="Specialization" fullWidth value={doctorData.specialization} onChange={e => setDoctorData({ ...doctorData, specialization: e.target.value })} required />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={2}>
                <TextField label="Accout Number" type='number' fullWidth value={doctorData.accountNumber} onChange={e => setDoctorData({ ...doctorData, accountNumber: e.target.value.slice(0, 10) })} required />
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={5}>
                <MultipleSelectPlaceholder label="Availability" fullWidth drop={{ setDoctorData, doctorData, constDoctorName, setConstDoctorName }} required />
              </Grid>
              <Grid item xs={12} sm={9} md={4} lg={4} >
                <TextField label="Salory" type='number' fullWidth value={doctorData.salory} onChange={e => setDoctorData({ ...doctorData, salory: e.target.value.slice(0, 10) })} />
              </Grid>
              <Grid item xs={12} sm={3} md={1.5} lg={1.5}>
                <BloodSelecterPlaceholder label="Blood Group" fullWidth drop={{ setDoctorData, doctorData, constDoctorName, setConstDoctorName }} required />
              </Grid>
              <Grid item xs={12} md={10.5} lg={6.5}>
                <QualificationsSelectPlaceholder label="Qualification" fullWidth drop={{ setDoctorData, doctorData, constDoctorName, setConstDoctorName }} required />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                {/* <BloodSelecterPlaceholder label="Blood Group" fullWidth drop={{ setDoctorData, doctorData, constDoctorName, setConstDoctorName }} required /> */}
                <Autocomplete
                  value={doctorData.role}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    setDoctorData({ ...doctorData, role: value })
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  id="controllable-states-demo"
                  options={options}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Controllable" />}
                />
              </Grid>

              <Grid item xs={12} md={12} lg={12} sx={{ display: "flex", justifyContent: "cender" }}>
                <div style={{ display: "flex", justifyContent: "right", width: '100%' }}>
                  <Button style={{ width: '200px', marginRight: '5%' }} type="submit" variant="contained" fullWidth>Save &nbsp;<SaveIcon /></Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}