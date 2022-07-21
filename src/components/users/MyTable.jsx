import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { setUserSlice, user } from 'modules/slices';
// import { deleteUsersSlice } from 'modules/slices/usersSlice';
import { DELETE_USER_BY_ID, GET_USERS } from 'modules/types';
import styles from 'styles/user.module.css'


export default function Mytable() {
  // const [row,setRow]= useState([])
  const dispatch = useDispatch();
  const rows = useSelector(state => state.users)
  React.useEffect(() => {
    dispatch({ type: GET_USERS })
  }, [dispatch])

  // const onDelete = (e) => {
  //   e.preventDefault;
  //   dispatch({ type: DELETE_USER_BY_ID, id:rows.id })
  // }
  return (
    <TableContainer component={Paper} className={styles.table}>
      <h3>사용자목록</h3>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Mobile</TableCell>
      {/* <TableCell align="right">Edit</TableCell> */}
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
            {/*  <TableCell align="right">
                <Button onClick={()=>dispatch(setUserSlice(row))} fullWidth variant="contained" >수정</Button>
              </TableCell> */}
              <TableCell align="right">
                {/*                <Button  onClick={()=>dispatch({ type: DELETE_USER_BY_ID, id:row.id })} */}
                <Button  onClick={()=>dispatch({ type: DELETE_USER_BY_ID, id:row.id })} fullWidth variant="contained" >삭제</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}