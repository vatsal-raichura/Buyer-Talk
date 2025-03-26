import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'
import { CustomLoader } from '../CustomLoader'

export const ViewAllComplaints = () => {

    const [complaints, setComplaints] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [products, setProducts] = useState({});
    const getAllComplaints = async() => {

        setisLoading(true)
        data.userId = localStorage.getItem("id");
        // data.productId = "67c922661e9f914ef10134f5"
        console.log(data) 

        const res = await axios.get("/complaint/complaints")
        console.log(res.data) //api response...
        setComplaints(res.data.data)

        const complaintData = res.data.data;
        setComplaints(complaintData);

        const productIds = [...new Set(complaintData.map(ct => ct.productId))];
        const productDetails = await axios.get("/product/product");

        
        
        setisLoading(false) 

    }

    useEffect(() => {
        
        getAllComplaints()
        
    }, [])
    

  return (
    <div style={{textAlign:"center"}}>
      {isLoading == true && <CustomLoader  />}
      <br />
        MY Complaints
        
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Product Specification</th>
                    <th>Complaint Name</th>
                    <th>Complaint Description</th>
                    <th>Complaint Status</th>
                    <th>Complaint File_Date</th>
                    <th>Product Image</th>


                    


                    
                </tr>
            </thead>
            <tbody>
                {
                   complaints?.map((ct)=>{
                    return<tr>
                       <td>{products[ct.productId]?.specifications || 'Loading...'}</td>
                       <td>{products[ct.productId]?.name || 'Unknown Product'}</td>
                        <td>{ct.description}</td>

                        <td>{ct.status}</td>

                        <td>{ct.filedate}</td>
                       
                        <td>
                            <img  style ={{height:100,width:100}}src={ct?.productURL}></img>
                        </td>
                        
                    </tr>
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}