import { useEffect, useState } from "react";
import axios from "axios";

const BusinessReviews = () => {
    const [data, setData] = useState([]);  // Holds API response
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const businessId = localStorage.getItem("id");
                if (!businessId) {
                    throw new Error("Business ID not found in localStorage.");
                }

                const response = await axios.get(`/business/ratings?businessId=${businessId}`);
                setData(response.data);  // Set the response data in state
                console.log("Fetched Ratings Data:", response.data); // Debugging log

            } catch (err) {
                console.error("Error fetching ratings:", err);
                setError("Failed to fetch ratings data.");
            } finally {
                setLoading(false);
            }
        };

        fetchRatings();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>All Rated & Reviewed Products</h2>
            {data.length === 0 ? (
                <p>No products have been rated or reviewed yet.</p>
            ) : (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>User</th>
                            <th>Rating</th>
                            <th>Review</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, productIndex) => (
                            product.ratings.length > 0 ? (
                                product.ratings.map((rating, ratingIndex) => (
                                    console.log(rating),
                                    <tr key={`${productIndex}-${ratingIndex}`}>
                                        <td>{product.name}</td>
                                        <td>{rating.userId?.firstname || "Unknown User"}</td>
                                        <td>{rating.rating}</td>
                                        <td>{rating.comment || "No review"}</td>
                                        <td>{rating.review_date || "No comments"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr key={productIndex}>
                                    <td colSpan="5">No ratings available</td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BusinessReviews;
