  import axios from 'axios'
  import React, { useEffect, useState } from 'react'
  import { Link } from 'react-router-dom'
  import { CustomLoader } from '../CustomLoader'
  import "../../assets/viewmyproducts.css" 
  
  import { Container, Card, Form, Button } from "react-bootstrap";
  import { Bounce, toast, ToastContainer } from "react-toastify";

  export const ViewMyProducts = () => {

      const [products, setProducts] = useState([])
      const [isLoading, setisLoading] = useState(false)
      const getAllMyProducts = async() => {

          setisLoading(true) 

          const res = await axios.get("/product/productsbybusinessId/"+localStorage.getItem("id"))
          console.log(res.data) //api response...
          setProducts(res.data.data)
          setisLoading(false) 

      }

      useEffect(() => {
          
          getAllMyProducts()
          
      }, [])

      const handleDelete = async (productId) => {
          if (!window.confirm("Are you sure you want to delete this Product?")) return;
      
          try {
            setisLoading(true)
              await axios.delete(`/product/product/${productId}`)
              setisLoading(false)
              toast.success("Product deleted successfully!", { theme: "dark" })
              
              // Remove the deleted appointment from UI
              setProducts(products.filter(pr => pr._id !== productId))
          } catch (error) {
              console.error("Delete failed:", error)
              toast.error("Failed to delete Product!", { theme: "dark" })
          }
      }

      
      

    return (
      <div className="table-container" style={{textAlign:"center"}}>
          <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} theme="dark" transition={Bounce} />
        {isLoading == true && <CustomLoader  />}
        <br />
          <h2>My Products</h2>
          
          <table className='complaint-table'>
              <thead>
                  <tr>
                      
                      <th>Product Description</th>
                      <th>Product Name</th>
                      <th>Product Category</th>
                      
                      <th style={{width:"10%"}}>Product Brand</th>
                      <th  style={{width:"10%"}}>Product Price</th>


                      <th>Product Image</th>

                      <th style={{width:"25%"}}>ACTION</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    products?.map((pr)=>{
                      return<tr>
                          <td className='description-cell'><div className='description-content'>{pr.description}</div></td>
                          <td>{pr.name}</td>
                          
                          <td>{pr.category}</td>
                          
                          <td style={{width:"10%"}}>{pr.brand}</td>
                          <td style={{width:"10%"}}>₹{pr.price}</td>
                          <td>
                                                        {pr?.productURL ? (
                                                          <Link to={`/business/productdetails2/${pr._id}`}>
                                                            <img
                                                              src={pr.productURL}
                                                              alt={pr.name}
                                                              className="product-img"
                                                            />
                                                          </Link>
                                                        ) : (
                                                          "No Image"
                                                        )}
                          </td>
                                          
                        
                          <td style={{width:"25%"}}>
                              <Link to ={`/product/updateproduct/${pr._id}`} className ="btn btn-info " style={{padding:"12px 20px"}}>UPDATE</Link>
                              <span ><Button  className="btn btn-danger  " onClick={()=>{handleDelete(pr._id)}}>DELETE</Button></span>
                              
                          </td>
                          
                      </tr>
                    }) 
                  }
              </tbody>
          </table>

          <div className="mobile-card-container">
                  {products.map((pr) => (
                    <div className="mobile-card" key={pr._id}>
                      <div className="product-img-wrapper" style={{marginBottom:"2rem"}}>
                        {pr?.productURL ? (
                          <Link to={`/user/productdetails/${pr._id}`}>
                            <img
                              src={pr.productURL}
                              alt={pr.name}
                              className="product-img"
                            />
                          </Link>
                        ) : (
                          "No Image"
                        )}
                      </div>
                      <p><strong>Description:</strong> {pr.description}</p>
                      <p>
                        <strong>Name:</strong>{pr.name}
                        
                      </p>
                      <p><strong>Category</strong> {pr.category}</p>
                      <p><strong>Brand:</strong> {pr.brand || "N/A"}</p>
                      <p><strong>Price:</strong> {pr.price || "N/A"}</p>
                      
                      <Link to ={`/product/updateproduct/${pr._id}`} className ="btn btn-info " style={{padding:"12px 20px"}}>UPDATE</Link>
                       <Button variant="danger" className="delete-btn" onClick={() => handleDelete(pr._id)}>DELETE</Button>
                    </div>
                  ))}
                </div>
      </div>
    )
  }