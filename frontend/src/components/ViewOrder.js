import React, {useState, useEffect } from 'react';
import {NavLink}from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"



const ViewOrder=()=>{

    const[searchTerm,setsearchTerm]=useState("");//search


    //view data

   const [getuserdata,setUserdata]=useState([]);
   const [ldt,setDLTdata]=useState([]);
   console.log(getuserdata);



  const getdata=async(e)=>{
 

    
    const res =await fetch("http://localhost:8070/OrderAdmin",{

      method:"GET",
      headers:{"Content-Type":"application/json"},

      
    });

 const data= await res.json();
 console.log(data);

   if (res.status===404 ||!data)
{
  console.log("error");

}else{
 setUserdata(data);
  console.log("data fetched");
}
}

  useEffect(()=>{
    getdata();
  },[]) 




  //delete order

const deleteuser = async (id) => {

    const res2 = await fetch(`http://localhost:8070/OrderAdmin/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
  
    const deletedata = await res2.json();
    console.log(deletedata);
  
    if (res2.status === 422 || !deletedata) {
        console.log("error");
    } else {
        console.log("user deleted");
        setDLTdata(deletedata)
        getdata();
    }
  
  
  }

  function generatePDF() {
    const doc = new jspdf();
    const tableColumn = ["Customer ID", "Cart Contents", "Place Date", "Status", "Estimated Delivery Date", "Address"];
    const tableRows = [];

    getuserdata.slice(0).reverse().map(pdf => {
        const pdfData = [
            pdf.customerID,
            pdf.cartContents,
            pdf.placedDate,
            pdf.status,
            pdf.estimatedDeliveryDate,
            pdf.address,
            
        ];
        tableRows.push(pdfData);
    });

    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    doc.text("ORDER-Details-Report", 14, 15).setFontSize(12);
    doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
    doc.save(`ORDER-Details-Report_${dateStr}.pdf`);

}
  
  return(

//<div>{/* className="container" */}

<section className="ftco-section">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-12 text-center mb-5">
{/* //search */}
 <nav class="navbar navbar-dark bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search"   placeholder="Search" onChange={(e)=>{setsearchTerm(e.target.value);}} aria-label="Search"  />

  </form>
</nav> 



 <table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Customer ID</th>
      <th scope="col">Cart Contents</th>
      <th scope="col">Place Date</th>
      <th scope="col">Status</th>
      <th scope="col">estimated Delivery Date</th>
      <th scope="col">Address</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>

  {getuserdata.filter((val)=>{ //search feature
     if(searchTerm===''){
      return val;
     }else if(
      val.placedDate.toLowerCase().includes(searchTerm.toLowerCase())||
      val.customerID.toLowerCase().includes(searchTerm.toLowerCase())||
      val.status.toLowerCase().includes(searchTerm.toLowerCase())||
      val.cartContents.toLowerCase().includes(searchTerm.toLowerCase())
     ){
      return val;
     }
    }).map((element,id)=>{

 //  {getuserdata.map((element,id)=>{

        return(

            <>
            <tr>
            <th scope="row">{id+1}</th>
      <td>{element.customerID}</td>
      <td>{element.cartContents}</td>
      <td>{element.placedDate}</td>
      <td>{element.status}</td>
      <td>{element.estimatedDeliveryDate}</td>
      <td>{element.address}</td>
     
 
      <td></td>
      <td></td>
      <td className="d-flex justify-content-between">
      <NavLink to={`/update/${element._id}`}> <button className="btn btn-dark"><i className="fa-regular fa-pen-to-square"></i></button></NavLink>
      <button className="btn btn-dark" onClick={() => deleteuser(element._id)}><i className="fa-regular fa-trash-can"></i></button>
      </td>


            </tr>
            </>
        )
     })}

</tbody>
</table>
<button className="btn btn-dark"  onClick={generatePDF}>Generate Report</button>
</div>
</div>
</div>

</section>

    )
}



export default ViewOrder;
