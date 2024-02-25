import React from "react";
import "./StudentEnrolmentInfo.css";
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
// import Table from "react-bootstrap/Table";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StudentEnrolmentInfo = () => {
    function createData({
        name,
        calories,
        fat,
        carbs,
        protein,
      }) {
        return { name, calories, fat, carbs, protein };
      }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="StudentEnrolmentInfo-main">
      <div className="StudentEnrolmentInfo-main-child">
        <div className="StudentEnrolmentInfo-main-child-1">
          <p>School & Enrolment Info</p>
          <button>Edit Information</button>
        </div>
        <div className="StudentEnrolmentInfo-main-child-2">
          <div className="StudentEnrolmentInfo-main-child-3">
            <p>Estimated Graduation Date</p>-
          </div>
          <div className="StudentEnrolmentInfo-main-child-4">
            <p>Rolling Retention Option</p>
            <p className="StudentEnrolmentInfo-main-child-5">
              Next Grade at Current School
            </p>
          </div>
          <div className="StudentEnrolmentInfo-main-child-3">
            <p>Estimated Graduation Date</p>-
          </div>
        </div>
        <hr />
        <div className="StudentEnrolmentInfo-main-child-6">
          <p className="inrolinfo">Enrollment Info</p>
          <div className="StudentEnrolmentInfo-main-child-7">
            <div className="StudentEnrolmentInfo-main-child-7-data">
              <p>2023</p>
              <div className="plusfa-ixon">
                <FaPlus className="ixon" />
              </div>
              <p>D-J MODEL SCHOOL</p>
            </div>
            <div className="StudentEnrolmentInfo-main-child-8">
              <p>New to on December 25, 2023</p>
              <FaAngleDown className="FadownAnglope" />
            </div>
          </div>
        </div>
        <div className="StudentEnrolmentInfo-main-child-9">
          <ins>
            <p>Enrolment History</p>
            <FaAngleDown className="FaAngleDown-3" />
          </ins>
          <hr />
        </div>

        <div className="StudentEnrolmentInfo-main-child-9-table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">School Year</TableCell>
                  <TableCell align="right">Enroll Date & Code</TableCell>
                  <TableCell align="right">Program</TableCell>
                  <TableCell align="right">Grade Level</TableCell>
                  <TableCell align="right">Exit Date & Code</TableCell>
                  <TableCell align="right">School Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">-</TableCell>
                    <TableCell align="right">-</TableCell>
                    <TableCell align="right">-</TableCell>
                    <TableCell align="right">-</TableCell>
                    <TableCell align="right">-</TableCell>
                    <TableCell align="right">-</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default StudentEnrolmentInfo;
