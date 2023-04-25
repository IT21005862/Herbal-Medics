import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SellerProductUI from "./SellerProductUI";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

//IT21013300
const Productperseller = () => {  //This function shows products per seller
  const userid = useSelector((state) => state.user._id);
  const [product, setProducts] = useState([]);

  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:9001/product/` + userid)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setProducts(data);
    });
  }, []);
 
  const search = async () => {
    const res = await axios
      .get(`http://localhost:9001/product/` + userid)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  
  useEffect(() => {
    search().then((data) => {
      setProducts(data);
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const productsearch = product.filter((products) => products.productname.toLowerCase().includes(searchTerm.toLowerCase()));  //product search

  return (
    <div>
      <div className="filters-container d-flex justify-content-center pt-4 pb-4">
        <TextField id="outlined-basic" label="Search" variant="outlined" type="search"   onChange={(e) => setSearchTerm(e.target.value)} InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}/>
      </div>
          
     
      {product.length === 0 ? (
        <h1>No products yet</h1>
      ) : productsearch.length === 0 ? (
        <h1>No products found</h1>
      ) : (
        <div className="row">
          {productsearch.map((products, index) => (
            <div key={products._id} className="col-md-6">
              <SellerProductUI
                id={products._id}
                isUser={localStorage.getItem("userId") === products.user}
                productname={products.productname}
                description={products.description}
                price={products.price}
                category={products.category}
                Stocks={products.Stocks}
                image={products.image}
                date={products.date}
                userid={products.user}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Productperseller;

