import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/products.css"; // Importing the CSS file

export const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`/product/getProductById/${productId}`);
        setProduct(res.data.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
      setIsLoading(false);
    };

    fetchProductDetails();
  }, [productId]);

  if (isLoading) return <p className="loading-text">Loading...</p>;
  if (!product) return <p className="error-text">Product not found.</p>;

  return (
    <div className="product-details-container">
      <div className="product-card">
        <h2 className="product-title">{product.name}</h2>
        <img className="product-image" src={product.productURL} alt={product.name} />
        <div className="product-info">
          <p><b>Product Description:</b> {product.description}</p>
          <p><b>Product Brand:</b> {product.brand}</p>
          <p><b>Product Price:</b> <span className="product-price">₹{product.price}</span></p>
          <p><b>Product Category:</b> {product?.category || "No Category"}</p>
        </div>
        <button
    onClick={() => window.history.back()}
    className="back-button"
  >
    ← Back to Dashboard
  </button>
      </div>
    </div>
  );
};
