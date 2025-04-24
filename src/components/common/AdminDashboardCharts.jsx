import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend ,LineChart,Line} from "recharts";
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
      const res = await axios.get("/admin/monthly-users"); // Get the API response for monthly user data
      setUserData(res.data.data || []);  // Set the data from the API to the state
    } catch (err) {
      console.error("Error fetching user registration data", err);
    }
  };

  return (
    <div className="chart-container">
      <h5 className="text-center mb-3">User Monthly Registration</h5>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={userData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"  // Month name will be used here from the response
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => value}  // Format the month names
          />
          <YAxis 
            tick={{ fontSize: 12 }} 
            domain={[0, 4]}  // Dynamically adjust Y-axis to fit the highest data value
          />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserRegistrationChart;



  



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
        <LineChart data={businessData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" /> {/* Using "name" here to map the month */}
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" />
        </LineChart>
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
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={ratingData}
            dataKey="count"
            nameKey="rating"
            outerRadius={120}
            fill="#8884d8"
            label
            
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

const ProductCategoryChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/admin/products-by-category")
      .then(res => setData(res.data.data || []))
      .catch(err => console.error("Error fetching product category data", err));
  }, []);

  return (
    <div className="chart-container">
      <h5 className="text-center mb-3">Products by Category</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


const WeeklyComplaintsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("/admin/complaints-trend");
      setData(res.data.data || []);
    } catch (err) {
      console.error("Error fetching weekly complaints", err);
    }
  };

  return (
    <div className="chart-container p-4  dark:bg-gray-800 rounded-2xl shadow-md">
      <h5 className="text-center mb-3 text-gray-800 dark:text-white">
        Weekly Complaints Trend
      </h5>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" label={{ position: "insideBottom", offset: -5 }} />
          <YAxis
            label={{ value: "Complaints", angle: -90, position: "insideLeft" }}
            allowDecimals={false}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#4f46e5"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const ComplaintStatusChart = () => {
  const [complaintData, setComplaintData] = useState([]);

  useEffect(() => {
    fetchComplaintStatusCounts();
  }, []);

  const fetchComplaintStatusCounts = async () => {
    try {
      const res = await axios.get("/admin/complaint-status"); // Update with your API endpoint
      setComplaintData(res.data.data || []);
    } catch (err) {
      console.error("Error fetching complaint status data", err);
    }
  };

  // Define custom colors for each section
  const COLORS = ["#ff8042", "#82ca9d", "#8884d8"]; // Orange for Open, Green for Resolved, Blue for Escalated

  return (
    <div className="chart-container">
      <h5 className="text-center mb-3">Complaint Status Breakdown</h5>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={complaintData}
            dataKey="count"
            nameKey="_id"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8" // Default color, can be overwritten by COLORS array
            label
          
             // Adds a gap between the sections
          >
            {/* Map through the data and assign colors based on status */}
            {complaintData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};



const UserActivityChart = () => {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    fetchUserActivity();
  }, []);

  const fetchUserActivity = async () => {
    try {
      
      const COLORS = ["#4CAF50", "#F44336"]; // green for active, red for inactive
      const res = await axios.get("/admin/user-activity-status");
      const data = res.data.data;
      setActivityData([
        { name: "Active Users", value: data.active },
        { name: "Inactive Users", value: data.inactive },
      ]);
    } catch (err) {
      console.error("Error fetching user activity stats", err);
    }
  };

  return (
    <div className="chart-container">
      <h5 className="text-center mb-3">Active vs Inactive Users</h5>
      <ResponsiveContainer width="100%" height={300}>             
        <PieChart>
          <Pie
            data={activityData}
            cx="50%"      
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {activityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};



  

// Export all the charts
export { ProductCountByBusinessChart, UserRegistrationChart, RatingDistributionChart,BusinessRegistrationChart ,WeeklyComplaintsChart,ComplaintStatusChart,ProductCategoryChart,UserActivityChart};
