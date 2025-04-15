import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid, Legend as RechartsLegend, } from "recharts";

// Product Count by Business Chart
// Product Count by Business Chart




const ProductCountByBusinessChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProductCounts = async () => {
      try {
        const res = await axios.get("/admin/product-count-by-business");
        setData(res.data.data || []);
      } catch (err) {
        console.error("Error fetching product count by business", err);
      }
    };
    fetchProductCounts();
  }, []);

  return (
    <div className="chart-container">
      <h5 className="text-center mb-3">Products by Business</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="businessName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" name="Product Count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};



  

// User Registration Chart
// User Registration Chart


const UserRegistrationChart = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserRegistrationData();
  }, []);

  const fetchUserRegistrationData = async () => {
    try {
      const res = await axios.get("/admin/monthly-users");
      setUserData(res.data.data || []);
    } catch (err) {
      console.error("Error fetching user registration data", err);
    }
  };

  return (
    <div className="chart-container">
        <h5 className="text-center mb-3">User Monthly Registration</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={userData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month"
          tick={{ fontSize: 12 }}
          // Adjust tick font size if needed 
          />
          <YAxis 
            domain={[1, 5]} // Force Y-axis to go from 1 to 5
            ticks={[1, 2, 3, 4, 5]} // Show only 1 to 5 as ticks
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => value}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


  



// Business Registration Chart


const BusinessRegistrationChart = () => {
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    fetchBusinessRegistrationData();
  }, []);

  const fetchBusinessRegistrationData = async () => {
    try {
      const res = await axios.get("/admin/monthly-business");
      setBusinessData(res.data.data || []);
    } catch (err) {
      console.error("Error fetching business registration data", err);
    }
  };

  return (
    <div className="chart-container">
         <h5 className="text-center mb-3">Business Monthly Registration</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={businessData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


  

// Rating Distribution Chart (Pie Chart)
// Rating Distribution Chart (Pie Chart)




const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#0088FE"];

const RatingDistributionChart = () => {
  const [ratingData, setRatingData] = useState([]);

  useEffect(() => {
    fetchRatingData();
  }, []);

  const fetchRatingData = async () => {
    try {
      const res = await axios.get("/admin/rating-distribution");
      setRatingData(res.data.data || []);
    } catch (err) {
      console.error("Error fetching rating distribution data", err);
    }
  };

  return (
    <div className="chart-container">
      <h5 className="text-center mb-3">Rating Distribution</h5>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={ratingData}
            dataKey="count"
            nameKey="rating"
            outerRadius={120}
            fill="#8884d8"
            label
            labelLine={false}
          >
            {ratingData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};



  

// Export all the charts
export { ProductCountByBusinessChart, UserRegistrationChart, RatingDistributionChart,BusinessRegistrationChart };
