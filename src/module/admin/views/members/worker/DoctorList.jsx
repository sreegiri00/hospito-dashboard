import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import SearchSection from "layout/MainLayout/Header/SearchSection";
import CreateModelBox from "../../modelBox/CreateModelBox";
import ViewBox from "../../modelBox/ViewBox";
import config from "config";


export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [searchData, setSearchData] = useState();
  const [userId, setUserId] = useState();
  const [viewId, setViewId] = useState('');
  const [update, setUpdate] = useState(0);
  const [saveData, setSaveData] = useState(true);
  // const [port, setPort] = useState(import.meta.env.VITE_PORT_NO ? import.meta.env.VITE_PORT_NO : 3001)
  

  useEffect(() => {
    axios.get(`${config.Ip}/user/`)
      .then((res) => {
        setDoctors(res.data);
        setDoctor(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [update]);

  useEffect(() => {
    const filtered = doctors?.filter((product) => product.name.toLowerCase().includes(searchData));
    setDoctor(filtered);

  }, [searchData]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const Delete = (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      axios.delete(`${config.Ip}/user/deleteUser/${id}`)
        .then(() => setUpdate(prev => prev + 1))
        .catch(err => console.log(err))
    }
  }

  // const View = (id) => { 
  //   if (id) {
  //     axios.get(`${config.Ip}/user/getUser/${id}`)
  //       .then(res => {
  //         setViewId(res.data)
  //       })
  //   }
  // };



  return (
    <>
      <div className="box" style={{ marginBottom: '10px', display: "flex", alignContent: "center", justifyContent: "right", marginRight: "20px" }}>
        <SearchSection setSearchData={setSearchData} />
        <div style={{ marginLeft: '10px', display: "flex", justifyContent: "center", alignItems: 'center' }}>
          <CreateModelBox style={{ padding: '0px', margin: '0px', display: 'flex' }} val={{ setUpdate, update, userId, setUserId, saveData, setSaveData }} />
        </div>
      </div>
      <div className="box">
        <TableContainer component={Paper} style={{ maxHeight: '600px', overflow: 'auto' }}>
          <Table stickyHeader  >
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  Doctor Name
                </StyledTableCell>
                <StyledTableCell align="right"  >
                  Department
                </StyledTableCell>
                {/* <StyledTableCell align="right">Time&nbsp;(Start-End)</StyledTableCell> */}
                <StyledTableCell align="right" >
                  Blood
                </StyledTableCell>
                <StyledTableCell align="right" >
                  phNumber&nbsp;(+91)
                </StyledTableCell>
                <StyledTableCell align="right" >
                  Account Number
                </StyledTableCell>
                <StyledTableCell align="center" >
                  Action
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctor.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.department}</StyledTableCell>
                  <StyledTableCell align="right">{row.bloodGroup}</StyledTableCell>
                  <StyledTableCell align="right">{row.phone}</StyledTableCell>
                  <StyledTableCell align="right">{row.accountNumber}</StyledTableCell>
                  <StyledTableCell align="center" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="outlined" color="success" style={{ marginRight: '5px' }} onClick={() => { setUserId(row._id); setSaveData(false) }}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                    <Button variant="outlined" style={{ marginRight: '5px', height: '30px' }}>
                      <FontAwesomeIcon icon={faEye} />
                      <ViewBox  onClick={() => setViewId(row)} val={{ viewId,setViewId }} />
                    </Button>
                    <Button variant="outlined" color="error" style={{ marginRight: '5px' }} onClick={() => Delete(row._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

