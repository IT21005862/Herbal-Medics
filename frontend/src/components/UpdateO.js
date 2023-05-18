import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
//import { getSuggestedQuery } from '@testing-library/react';

const UpdateO = () => {
  let { id } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(`http://localhost:8070/OrderAdmin/get/${id}`);
      const result = res.data.orderadmin;

      console.log(res.data.orderadmin);

      setID(result.customerID);
      setCartContent(result.cartContents);
      setPlacedDate(result.placedDate);
      setStatus(result.status);
      setEstimateDelivery(result.estimatedDeliveryDate);
      setAddress(result.address);
    };
    getUserData();
  }, [id]);

  const [customerID,setID] = useState("");
  const [cartContents,setCartContent] = useState("");
  const [placedDate,setPlacedDate] = useState("");
  const [status,setStatus] = useState("");
  const [estimatedDeliveryDate,setEstimateDelivery] = useState("");
  const [address,setAddress] = useState("");

  const sendDataToUpdate = async () => {
    try {
      let payload = {
        customerID,
        cartContents,
        placedDate,
        status,
        estimatedDeliveryDate,
        address
      };

      const res = await axios.put(
        `http://localhost:8070/OrderAdmin/update/${id}`,
        payload
      );
      alert("You have successfully updated.");
      window.location.href = "/";
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div id="booking" className="section">
      <div className="section-center">
        <div className="container">
          <div className="row">
            <div className="booking-form">
              <div className="form-header">
                <p>Update Order</p>
                <form onSubmit={sendDataToUpdate}>
                  <div className="form-row">
                    <div className="form-group col-md-10">
                      <label for="inputID" className="form-label">
                        Customer ID
                      </label>
                      <input
                        type="text"
                        value={customerID|| ""}
                        name="supierId"
                        onChange={(e) => setID(e.target.value)}
                        className="form-control"
                        id="inputID"
                        placeholder="Enter Customer ID here"
                        required
                      />
                    </div>
                    <div className="form-group col-md-10">
                      <label for="inputCompanyname" className="form-label">
                        Cart Content
                      </label>
                      <input
                        type="text"
                        value={cartContents || ""}
                        name="compaName"
                        onChange={(e) =>setCartContent (e.target.value)}
                        className="form-control"
                        id="inputCompanyname"
                        placeholder="Enter Cart Content here"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-group col-md-10">
                      <label for="inputAddress" className="form-label">
                        Placed Date
                      </label>
                      <input
                        type="text"
                        value={placedDate || ""}
                        name="adess"
                        onChange={(e) =>setPlacedDate (e.target.value)}
                        className="form-control"
                        id="inputAddress"
                        placeholder="Enter Placed Date here"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-group col-md-10">
                      <label for="inputAddress" className="form-label">
                        Status
                      </label>
                      <input
                        type="text"
                        value={status || ""}
                        name="adess"
                        onChange={(e) =>setStatus(e.target.value)}
                        className="form-control"
                        id="inputAddress"
                        placeholder="Enter Status here"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-10">
                      <label for="inputphone" className="form-label">
                        Estimated Delivery Date
                      </label>
                      <input
                        type="text"
                        value={estimatedDeliveryDate || ""}
                        name="compaPhone"
                        onChange={(e) =>setEstimateDelivery(e.target.value)}
                        className="form-control"
                        id="inputphone"
                        placeholder="Enter Estimated Delivery Date here"
                        required
                      />
                    </div>
                    <div className="form-group col-md-10">
                      <label for="inputemail" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        value={address || ""}
                        name="emil"
                        onChange={(e) =>setAddress(e.target.value)}
                        className="form-control"
                        id="inputemail"
                        placeholder="Enter Address here"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-btn">
                    <button type="submit" className="submit-btn">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateO;

 