//IT21013300
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';

function Adminretofallsellers() {
  //Use state for sellers
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const user = useSelector((state) => state.user);
  const sendRequest = async () => {
  const res = await axios
  .get("http://localhost:9001/seller/")  //retrieve all sellers fron database
  .catch((err) => console.log(err));
  const data = await res.data;
  setSellers(data);
  setLoading(false);
  };

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
  
  
  //React hooks and send request function to set sellers
  useEffect(() => {
  sendRequest();
  }, []);
  console.log("sellers",sellers);
  
  const sellersearch = sellers.filter((sellers) => sellers.SellerID.toLowerCase().includes(searchTerm.toLowerCase())); //set search for seller ID
  console.log(sellersearch)
  
 

    
     if (loading) return <Loading />;

     if (sellers?.length == 0){
          return <h2 className="py-2 text-center">No sellers yet</h2>; //If no user
  }

    return (
        <div className="client-page-container">
     
            <div className="filters-container d-flex justify-content-center pt-4 pb-4">
                <TextField id="outlined-basic" label="Search" variant="outlined" type="search"   onChange={(e) => setSearchTerm(e.target.value)} InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}/>
            </div>
            {sellersearch.length===0 ? (
                <h1>No sellers yet</h1>
            ):(
                <div>
                   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
                       <StyledTableCell>SellerID</StyledTableCell>
                        <StyledTableCell>ShopName</StyledTableCell>
                        <StyledTableCell>name</StyledTableCell>
                        <StyledTableCell>Address</StyledTableCell>
                        <StyledTableCell>email</StyledTableCell>
                        <StyledTableCell>Approval Status Status</StyledTableCell>
                    </TableRow>
                    </TableHead>
                   <TableBody>
                   
                    {sellersearch.map((seller) => (
                       <StyledTableRow key={seller.SellerID}>
                         <StyledTableCell component="th" scope="seller">
                         {seller.SellerID}
                         </StyledTableCell>
                            <StyledTableCell >{seller.ShopName}</StyledTableCell>
                            <StyledTableCell >{seller.name}</StyledTableCell>
                            <StyledTableCell >{seller.Address}</StyledTableCell>
                            <StyledTableCell >{seller.email}</StyledTableCell>
                            <StyledTableCell>{seller.isApproved.toString()}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                     </TableBody>
                 </Table>
                     </TableContainer>
            </div>
           )}
                    
             </div>
    );
                    
    
 }

 export default Adminretofallsellers;
