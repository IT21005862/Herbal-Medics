import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

function Cart(props) {

    const [items, setitems] = useState([])
    // const itemId = (props.match.params.itemId)
    const [itemName, setname] = useState("");
    const [unitPrice, setprice] = useState("");
    const [quantity, setqty] = useState("");
    const [total, settotal] = useState("");

    useEffect(() => {
        function getitems() {
            axios.get("http://localhost:9001/cart/viewCart").then((res) => {
                setitems(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getitems();
    }, [])

    async function deleteitem(id) {
        await fetch(`http://localhost:9001/cart/deleteitem/${id}`, {
            method: "DELETE",
        });
    
        const newdata = items.filter((el) => el._id !== id);
        setitems(newdata)
    }

    async function selectitem(id) {
        axios.get(`http://localhost:9001/cart/getitem/${id}`).then(res => {

            setname(res.data.itemName);
            setprice(res.data.item.unitPrice);
            setqty(res.data.item.quantity);
            settotal(res.data.item.total);
        }).catch((err) => {
            alert(err.message)
        })
    }
    // useEffect(() => {
    //     axios.get("http://localhost:9001/cart/addCart").then(res => {

    //         setname(res.data.item.itemName);
    //         setprice(res.data.item.unitPrice);
    //         setqty(res.data.item.quantity);
    //         settotal(res.data.item.total);
    //     }).catch((err) => {
    //         alert(err.message)
    //     })}, [])

    return (
        <div>
            <table style={{ width: "100%" }} >
                <tr>
                    <td style={{ Width: "50%" }}>
                        <form>
                            <h2> <center style={{ fontWeight: "bold", fontFamily: "Century Gothic", fontSize: "25px" }}>Enter Order Details</center> </h2>
                                <div class="form-group">
                                    <label for="Address" style={{ fontWeight: "bold", fontFamily: "Century Gothic", fontSize: "22px" }}>Address</label>
                                    <input type="text" class="form-control" id="Address" placeholder={"Enter Address"} style={{ width: "70%", marginLeft: "28px"}} required />
                                </div><br/><br/>
                                <div class="form-group">
                                    <label for="telephone" style={{ fontWeight: "bold", fontFamily: "Century Gothic", fontSize: "22px" }}>Telephone</label>
                                    <input type="number" class="form-control" id="telephone" placeholder={"Enter telephone number"} style={{ width: "70%", marginLeft: "5px"}} required />
                                </div><br/>
                               <center> <span><button className='btn btn-warning'><a href="/########/"> Place Order</a></button></span></center>
                        </form>
                    </td>
                    <td style={{ Width: "50%" }}>
                        <center>
                            <table style={{ width: "80%" }} >
                                <tr>
                                    <th>Item Name</th>
                                    <th>unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th colSpan={2}><center>Actions</center></th>
                                </tr>

                                {items && items.map((item, key) => (
                                    <tr key={key}>
                                        <td style={{ paddingLeft: "15px"}}>{item.itemName}</td>
                                        <td style={{ paddingLeft: "15px"}}>{item.unitPrice}</td>
                                        <td style={{ paddingLeft: "15px"}}>{item.quantity}</td>
                                        <td style={{ paddingLeft: "15px"}}>{item.total}</td>
                                        <td style={{ paddingLeft: "15px"}}><button className="btn btn-danger" onClick={() => { deleteitem(item._id); }}>Remove</button></td>
                                        <td style={{ paddingLeft: "15px"}}><button className="btn btn-danger" onClick={() => { deleteitem(item._id); }}>Remove</button></td>
                                    </tr>
                                ))}
                            </table>
                        </center>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Cart
