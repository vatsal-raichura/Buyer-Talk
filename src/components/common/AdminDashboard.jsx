// import React, { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";
// import Table from "react-bootstrap/Table";
// import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer } from "recharts";
// import { FaBoxOpen, FaStar, FaExclamationCircle, FaUser, FaStore, FaUserPlus } from "react-icons/fa";
// import axios from "axios";

// const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#0088FE"];

// export const AdminDashboard = () => {
//   const [stats, setStats] = useState({});
//   const [ratingsData, setRatingsData] = useState([]);
//   const [ratingDistribution, setRatingDistribution] = useState([]);
//   const [recentComplaints, setRecentComplaints] = useState([]);
//   const [complaintStatusData, setComplaintStatusData] = useState([]);
//   const [userGrowthData, setUserGrowthData] = useState([]);

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       const [productRes, ratingRes, complaintRes, userRes, businessRes] = await Promise.all([
//         axios.get("/product/product"),
//         axios.get("/rating/ratings"),
//         axios.get("/complaint/complaints"),
//         axios.get("/users"),
//         axios.get("/business/businesses")
//       ]);

//       const products = productRes.data.data || [];
//       const ratings = ratingRes.data.data || [];
//       const complaints = complaintRes.data.data || [];
//       const users = userRes.data.data || [];
//       const businesses = businessRes.data.data || [];

//       const reviewMap = {};
//       const distribution = [0, 0, 0, 0, 0];

//       ratings.forEach((r) => {
//         const prod = r.productId?.name || "Unknown";
//         reviewMap[prod] = (reviewMap[prod] || 0) + 1;
//         distribution[r.rating - 1] += 1;
//       });

//       const statusMap = { Open: 0, Resolved: 0, Escalated: 0 };
//       complaints.forEach((c) => {
//         if (statusMap[c.status] !== undefined) statusMap[c.status] += 1;
//       });

//       const recentFiveComplaints = complaints.slice(-5).reverse();

//       const userCountByMonth = {};
//       users.forEach(user => {
//         const month = new Date(user.createdAt).toLocaleString('default', { month: 'short', year: 'numeric' });
//         userCountByMonth[month] = (userCountByMonth[month] || 0) + 1;
//       });

//       const userGrowth = Object.entries(userCountByMonth).map(([name, count]) => ({ name, count }));

//       setStats({
//         totalProducts: products.length,
//         totalRatings: ratings.length,
//         totalComplaints: complaints.length,
//         totalUsers: users.length,
//         totalBusinesses: businesses.length,
//         newUsersThisMonth: userCountByMonth[new Date().toLocaleString('default', { month: 'short', year: 'numeric' })] || 0
//       });

//       setRatingsData(Object.entries(reviewMap).map(([name, count]) => ({ name, count })));
//       setRatingDistribution(distribution.map((value, index) => ({ name: `${index + 1}★`, value })));
//       setComplaintStatusData(Object.entries(statusMap).map(([name, value]) => ({ name, value })));
//       setRecentComplaints(recentFiveComplaints);
//       setUserGrowthData(userGrowth.sort((a, b) => new Date(a.name) - new Date(b.name)));
//     } catch (err) {
//       console.error("Error fetching admin dashboard data:", err);
//     }
//   };

//   const statCards = [
//     { label: 'Products', value: stats.totalProducts, icon: <FaBoxOpen />, color: '#007bff' },
//     { label: 'Reviews', value: stats.totalRatings, icon: <FaStar />, color: '#ffc107' },
//     { label: 'Complaints', value: stats.totalComplaints, icon: <FaExclamationCircle />, color: '#dc3545' },
//     { label: 'Users', value: stats.totalUsers, icon: <FaUser />, color: '#17a2b8' },
//     { label: 'Businesses', value: stats.totalBusinesses, icon: <FaStore />, color: '#6f42c1' },
//     { label: 'New Users (This Month)', value: stats.newUsersThisMonth, icon: <FaUserPlus />, color: '#28a745' }
//   ];

//   return (
//     <div className="container-fluid p-4">
//       <h1 className="text-center mb-5">Admin Dashboard</h1>

//       <div className="row">
//         {statCards.map((item, idx) => (
//           <div key={idx} className="col-md-4 mb-3">
//             <Card className="h-100 shadow-sm">
//               <Card.Body className="d-flex align-items-center justify-content-between">
//                 <div>
//                   <Card.Title className="mb-0 fs-3">{item.label}</Card.Title>
//                   <h3 className="fw-bold mt-2">{item.value}</h3>
//                 </div>
//                 <div className="display-4" style={{ color: item.color }}>{item.icon}</div>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>

//       <div className="row mt-5">
//         <div className="col-md-6 mb-4">
//           <Card className="shadow-sm">
//             <Card.Body>
//               <Card.Title>Reviews per Product</Card.Title>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={ratingsData}>
//                   <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
//                   <YAxis allowDecimals={false} />
//                   <Tooltip />
//                   <Bar dataKey="count" fill="#8884d8" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Card.Body>
//           </Card>
//         </div>

//         <div className="col-md-6 mb-4">
//           <Card className="shadow-sm">
//             <Card.Body>
//               <Card.Title>Rating Distribution</Card.Title>
//               <ResponsiveContainer width="100%" height={300}>
//                 <PieChart>
//                   <Pie data={ratingDistribution} cx="50%" cy="50%" outerRadius={100} label dataKey="value">
//                     {ratingDistribution.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       <div className="row mb-4">
//         <div className="col-md-6 mb-4">
//           <Card className="shadow-sm">
//             <Card.Body>
//               <Card.Title>Complaint Status Breakdown</Card.Title>
//               <ResponsiveContainer width="100%" height={300}>
//                 <PieChart>
//                   <Pie data={complaintStatusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
//                     {complaintStatusData.map((entry, index) => (
//                       <Cell key={`status-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//             </Card.Body>
//           </Card>
//         </div>

//         <div className="col-md-6 mb-4">
//           <Card className="shadow-sm">
//             <Card.Body>
//               <Card.Title>User Growth</Card.Title>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={userGrowthData}>
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="count" stroke="#00C49F" strokeWidth={2} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       <Card className="shadow-sm">
//         <Card.Body>
//           <Card.Title>Recent Complaints</Card.Title>
//           <Table striped bordered hover responsive className="mt-3">
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>User</th>
//                 <th>Issue</th>
//                 <th>Status</th>
//                 <th>Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {recentComplaints.map((c, i) => (
//                 <tr key={i}>
//                   <td>{c.productId?.name || "N/A"}</td>
//                   <td>{c.userId?.name || "N/A"}</td>
//                   <td>{c.description}</td>
//                   <td>{c.status}</td>
//                   <td>{new Date(c.fileddate).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// import React, { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import Dropdown from "react-bootstrap/Dropdown";
// import {
//   BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
//   LineChart, Line, ResponsiveContainer, Legend
// } from "recharts";
// import axios from "axios";
// import {
//   FaBoxOpen, FaStar, FaExclamationCircle, FaUser,
//   FaStore, FaUserPlus, FaMoon, FaSun
// } from "react-icons/fa";

// const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#0088FE"];

// export const AdminDashboard = () => {
//   const [stats, setStats] = useState({});
//   const [ratingsData, setRatingsData] = useState([]);
//   const [ratingDistribution, setRatingDistribution] = useState([]);
//   const [recentComplaints, setRecentComplaints] = useState([]);
//   const [complaintStatusData, setComplaintStatusData] = useState([]);
//   const [userGrowthData, setUserGrowthData] = useState([]);
//   const [userCount, setUserCount] = useState(0);
//   const [businessCount, setBusinessCount] = useState(0);
//   const [darkMode, setDarkMode] = useState(false);
//   const [userGrowthFilter, setUserGrowthFilter] = useState("All Time");

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       const [productRes, ratingRes, complaintRes, userRes, businessRes] = await Promise.all([
//         axios.get("/product/product"),
//         axios.get("/rating/ratings"),
//         axios.get("/complaint/complaints"),
//         axios.get("/users"),
//         axios.get("/business/businesses"),
//       ]);

//       const products = productRes.data.data || [];
//       const ratings = ratingRes.data.data || [];
//       const complaints = complaintRes.data.data || [];
//       const users = userRes.data.data || [];
//       const businesses = businessRes.data.data || [];

//       setUserCount(users.length);
//       setBusinessCount(businesses.length);

//       const reviewMap = {};
//       const distribution = [0, 0, 0, 0, 0];

//       ratings.forEach((r) => {
//         const prod = r.productId?.name || "Unknown";
//         reviewMap[prod] = (reviewMap[prod] || 0) + 1;
//         distribution[r.rating - 1] += 1;
//       });

//       const statusMap = { Open: 0, Resolved: 0, Escalated: 0 };
//       complaints.forEach((c) => {
//         if (statusMap[c.status] !== undefined) statusMap[c.status] += 1;
//       });

//       const recentFiveComplaints = complaints
//         .sort((a, b) => new Date(b.filedDate) - new Date(a.filedDate))
//         .slice(0, 5);

//       const userCountByMonth = {};
//       users.forEach((user) => {
//         const month = new Date(user.createdAt).toLocaleString("default", { month: "short", year: "numeric" });
//         userCountByMonth[month] = (userCountByMonth[month] || 0) + 1;
//       });

//       const userGrowth = Object.entries(userCountByMonth).map(([name, count]) => ({ name, count }));

//       setRatingsData(Object.entries(reviewMap).map(([name, count]) => ({ name, count })));
//       setRatingDistribution(distribution.map((value, index) => ({ name: `${index + 1}★`, value })));
//       setComplaintStatusData(Object.entries(statusMap).map(([name, value]) => ({ name, value })));
//       setRecentComplaints(recentFiveComplaints);
//       setUserGrowthData(userGrowth.sort((a, b) => new Date(a.name) - new Date(b.name)));

//       setStats({
//         totalProducts: products.length,
//         totalRatings: ratings.length,
//         totalComplaints: complaints.length,
//         totalUsers: users.length,
//         totalBusinesses: businesses.length,
//         newUsersThisMonth: userCountByMonth[new Date().toLocaleString("default", { month: "short", year: "numeric" })] || 0,
//       });
//     } catch (err) {
//       console.error("Error fetching admin dashboard data:", err);
//     }
//   };

//   return (
//     <div className={`p-4 min-vh-100 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h1>Admin Dashboard</h1>
//         <Button variant={darkMode ? "light" : "dark"} onClick={() => setDarkMode(!darkMode)}>
//           {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
//         </Button>
//       </div>

//       <div className="row text-center mb-5 g-4">
//         {[{
//           icon: <FaBoxOpen size={30} />, label: "Total Products", value: stats.totalProducts
//         }, {
//           icon: <FaStar size={30} />, label: "Total Ratings", value: stats.totalRatings
//         }, {
//           icon: <FaExclamationCircle size={30} />, label: "Total Complaints", value: stats.totalComplaints
//         }, {
//           icon: <FaUser size={30} />, label: "Total Users", value: stats.totalUsers
//         }, {
//           icon: <FaStore size={30} />, label: "Total Businesses", value: stats.totalBusinesses
//         }, {
//           icon: <FaUserPlus size={30} />, label: "New Users (This Month)", value: stats.newUsersThisMonth
//         }].map(({ icon, label, value }, idx) => (
//           <div key={idx} className="col-md-4 col-lg-2">
//             <Card className="shadow rounded h-100">
//               <Card.Body>
//                 {icon}
//                 <h6 className="mt-2">{label}</h6>
//                 <h4>{value}</h4>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>

//       <div className="row gy-5">
//         <div className="col-md-6">
//           <Card className="shadow rounded">
//             <Card.Body>
//               <h4>Review Count per Product</h4>
//               <p className="text-muted">Total number of reviews grouped by product</p>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={ratingsData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
//                   <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />
//                   <YAxis label={{ value: "Review Count", angle: -90, position: "insideLeft" }} />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="count" fill="#8884d8" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Card.Body>
//           </Card>
//         </div>

//         <div className="col-md-6">
//           <Card className="shadow rounded">
//             <Card.Body>
//               <h4>Rating Distribution</h4>
//               <p className="text-muted">Breakdown of ratings (1★ to 5★)</p>
//               <ResponsiveContainer width="100%" height={300}>
//                 <PieChart>
//                   <Pie data={ratingDistribution} cx="50%" cy="50%" outerRadius={100} label dataKey="value">
//                     {ratingDistribution.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </Card.Body>
//           </Card>
//         </div>

//         <div className="col-md-6">
//           <Card className="shadow rounded">
//             <Card.Body>
//               <h4>Complaint Status Breakdown</h4>
//               <p className="text-muted">Number of complaints by current status</p>
//               <ResponsiveContainer width="100%" height={300}>
//                 <PieChart>
//                   <Pie data={complaintStatusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
//                     {complaintStatusData.map((entry, index) => (
//                       <Cell key={`status-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </Card.Body>
//           </Card>
//         </div>

//         <div className="col-md-6">
//           <Card className="shadow rounded">
//             <Card.Body>
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h4>User Growth (Monthly)</h4>
//                   <p className="text-muted">Number of users added each month</p>
//                 </div>
//                 <Dropdown onSelect={(e) => setUserGrowthFilter(e)}>
//                   <Dropdown.Toggle variant={darkMode ? "light" : "dark"}>
//                     {userGrowthFilter}
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item eventKey="All Time">All Time</Dropdown.Item>
//                     <Dropdown.Item eventKey="Last 6 Months">Last 6 Months</Dropdown.Item>
//                     <Dropdown.Item eventKey="This Year">This Year</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={userGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
//                   <XAxis dataKey="name" />
//                   <YAxis label={{ value: "New Users", angle: -90, position: "insideLeft" }} />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="count" stroke="#00C49F" strokeWidth={2} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </Card.Body>
//           </Card>
//         </div>

//         <div className="col-12">
//           <Card className="shadow rounded">
//             <Card.Body>
//               <h4>Recent Complaints</h4>
//               <p className="text-muted">Latest 5 complaints submitted by users</p>
//               <Table striped bordered hover responsive variant={darkMode ? "dark" : "light"} className="rounded shadow">
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>User</th>
//                     <th>Description</th>
//                     <th>Status</th>
//                     <th>Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentComplaints.map((c, i) => {
//                     console.log("Complaint:", c);
//                     return (
//                     <tr key={i}>
//                       <td>{c.productId?.name || "N/A"}</td>
//                       <td>{c.userId ? `${c.userId.firstname} ${c.userId.lastname}` : "N/A"}</td>

//                       <td>{c.description}</td>
//                       <td>{c.status}</td>
//                       <td>{new Date(c.fileddate).toLocaleDateString()}</td>
//                     </tr>
//                     )
// })}

//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React, { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import {
//   BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
//   LineChart, Line, ResponsiveContainer, Legend
// } from "recharts";
// import axios from "axios";
// import {
//   FaBoxOpen, FaStar, FaExclamationCircle, FaUser,
//   FaStore, FaUserPlus, FaMoon, FaSun
// } from "react-icons/fa";

// const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#0088FE"];

// export const AdminDashboard = () => {
//   const [stats, setStats] = useState({});
//   const [ratingsData, setRatingsData] = useState([]);
//   const [ratingDistribution, setRatingDistribution] = useState([]);
//   const [recentComplaints, setRecentComplaints] = useState([]);
//   const [complaintStatusData, setComplaintStatusData] = useState([]);
//   const [userGrowthData, setUserGrowthData] = useState([]);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       const [productRes, ratingRes, complaintRes, userRes, businessRes] = await Promise.all([
//         axios.get("/product/product"),
//         axios.get("/rating/ratings"),
//         axios.get("/complaint/complaints"),
//         axios.get("/users"),
//         axios.get("/business/businesses"),
//       ]);

//       const products = productRes.data.data || [];
//       const ratings = ratingRes.data.data || [];
//       const complaints = complaintRes.data.data || [];
//       const users = userRes.data.data || [];
//       const businesses = businessRes.data.data || [];

//       const reviewMap = {};
//       const distribution = [0, 0, 0, 0, 0];
//       const statusMap = { Open: 0, Resolved: 0, Escalated: 0 };
//       const userCountByMonth = {};

//       ratings.forEach((r) => {
//         const product = r.productId?.name || "Unknown";
//         reviewMap[product] = (reviewMap[product] || 0) + 1;
//         distribution[r.rating - 1] += 1;
//       });

//       complaints.forEach((c) => {
//         if (statusMap[c.status] !== undefined) statusMap[c.status] += 1;
//       });

//       users.forEach((u) => {
//         const month = new Date(u.createdAt).toLocaleString("default", { month: "short", year: "numeric" });
//         userCountByMonth[month] = (userCountByMonth[month] || 0) + 1;
//       });

//       const recentFiveComplaints = complaints
//         .sort((a, b) => new Date(b.filedDate) - new Date(a.filedDate))
//         .slice(0, 5);

//       setStats({
//         totalProducts: products.length,
//         totalRatings: ratings.length,
//         totalComplaints: complaints.length,
//         totalUsers: users.length,
//         totalBusinesses: businesses.length,
//         newUsersThisMonth: userCountByMonth[new Date().toLocaleString("default", { month: "short", year: "numeric" })] || 0,
//       });

//       setRatingsData(Object.entries(reviewMap).map(([name, count]) => ({ name, count })));
//       setRatingDistribution(distribution.map((value, index) => ({ name: `${index + 1}★`, value })));
//       setComplaintStatusData(Object.entries(statusMap).map(([name, value]) => ({ name, value })));
//       setUserGrowthData(Object.entries(userCountByMonth).map(([name, count]) => ({ name, count })));
//       setRecentComplaints(recentFiveComplaints);
//     } catch (err) {
//       console.error("Dashboard fetch error:", err);
//     }
//   };

//   const cardColors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff"];

//   const statCards = [
//     { icon: <FaBoxOpen size={28} />, label: "Total Products", value: stats.totalProducts },
//     { icon: <FaStar size={28} />, label: "Total Ratings", value: stats.totalRatings },
//     { icon: <FaExclamationCircle size={28} />, label: "Total Complaints", value: stats.totalComplaints },
//     { icon: <FaUser size={28} />, label: "Total Users", value: stats.totalUsers },
//     { icon: <FaStore size={28} />, label: "Total Businesses", value: stats.totalBusinesses },
//     { icon: <FaUserPlus size={28} />, label: "New Users (This Month)", value: stats.newUsersThisMonth }
//   ];

//   const chartData = [
//     {
//       title: "Review Count per Product",
//       subtitle: "Total number of reviews per product",
//       content: (
//         <BarChart data={ratingsData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
//           <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />
//           <YAxis label={{ value: "Review Count", angle: -90, position: "insideLeft" }} />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="count" fill="#8884d8" />
//         </BarChart>
//       )
//     },
//     {
//       title: "Rating Distribution",
//       subtitle: "Number of ratings by star count",
//       content: (
//         <PieChart>
//           <Pie data={ratingDistribution} cx="50%" cy="50%" outerRadius={100} label dataKey="value">
//             {ratingDistribution.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       )
//     },
//     {
//       title: "Complaint Status Overview",
//       subtitle: "Complaints by current status",
//       content: (
//         <PieChart>
//           <Pie data={complaintStatusData} cx="50%" cy="50%" outerRadius={100} label dataKey="value">
//             {complaintStatusData.map((entry, index) => (
//               <Cell key={`status-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       )
//     },
//     {
//       title: "Monthly User Growth",
//       subtitle: "New users added over time",
//       content: (
//         <LineChart data={userGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
//           <XAxis dataKey="name" />
//           <YAxis label={{ value: "Users", angle: -90, position: "insideLeft" }} />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="count" stroke="#00C49F" strokeWidth={2} />
//         </LineChart>
//       )
//     }
//   ];

//   return (
//     <div className={`p-4 min-vh-100 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2>Admin Dashboard</h2>
//         <Button variant={darkMode ? "light" : "dark"} onClick={() => setDarkMode(!darkMode)}>
//           {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
//         </Button>
//       </div>

//       <div className="row g-3 mb-5 text-center">
//         {statCards.map(({ icon, label, value }, idx) => (
//           <div className="col-6 col-md-4 col-lg-2" key={idx}>
//             <Card className="shadow h-100 text-white" style={{ backgroundColor: cardColors[idx] }}>
//               <Card.Body className="d-flex flex-column justify-content-center align-items-center">
//                 {icon}
//                 <h6 className="mt-2">{label}</h6>
//                 <h4>{value}</h4>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>

//       <div className="row g-4 mb-5">
//         {chartData.map((chart, i) => (
//           <div className="col-md-6" key={i}>
//             <Card className="p-3 shadow h-100">
//               <h5>{chart.title}</h5>
//               <p className="text-muted">{chart.subtitle}</p>
//               <ResponsiveContainer width="100%" height={300}>
//                 {chart.content}
//               </ResponsiveContainer>
//             </Card>
//           </div>
//         ))}
//       </div>

//       <div>
//         <h5>Recent Complaints</h5>
//         <p className="text-muted">Latest 5 complaints submitted</p>
//         <Table striped bordered hover responsive variant={darkMode ? "dark" : "light"}>
//           <thead>
//             <tr>
//               <th>Product</th>
//               <th>User</th>
//               <th>Description</th>
//               <th>Status</th>
//               <th>Filed Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {recentComplaints.map((c, i) => (
//               <tr key={i}>
//                 <td>{c.productId?.name || "N/A"}</td>
//                 <td>{c.userId?.firstName ? `${c.userId.firstName} ${c.userId.lastName ?? ""}` : "N/A"}</td>
//                 <td>{c.description}</td>
//                 <td>{c.status}</td>
//                 <td>{new Date(c.filedDate).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };




// import React, { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";
// import Badge from "react-bootstrap/Badge";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import "../../assets/admin.css"
// import {
//   BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
//   LineChart, Line, ResponsiveContainer, Legend,
//   CartesianGrid
// } from "recharts";
// import axios from "axios";
// import {
//   FaBoxOpen, FaStar, FaExclamationCircle, FaUser,
//   FaStore, FaUserPlus, FaMoon, FaSun
// } from "react-icons/fa";

// const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#0088FE"];

// export const AdminDashboard = () => {
//   const [stats, setStats] = useState({});
//   const [ratingsData, setRatingsData] = useState([]);
//   const [ratingDistribution, setRatingDistribution] = useState([]);
//   const [recentComplaints, setRecentComplaints] = useState([]);
//   const [complaintStatusData, setComplaintStatusData] = useState([]);
//   const [userGrowthData, setUserGrowthData] = useState([]);
//   const [darkMode, setDarkMode] = useState(false);
//   const [weeklyComplaintsData, setWeeklyComplaintsData] = useState([]);
//   const [productCountByBusiness, setProductCountByBusiness] = useState([]);
//   const [averageRatingPerProduct, setAverageRatingPerProduct] = useState([]);
//   const [complaintResolutionTimeData, setComplaintResolutionTimeData] = useState([]);
//   const [newUsersData, setNewUsersData] = useState([]);
//   const [userData, setUserData] = useState({ activeUsers: 0, inactiveUsers: 0 });

//   const fetchActiveInactiveData = async () => {
//     try {
//       const response = await axios.get('/admin/active-inactive-users');
//       setUserData(response.data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchDashboardData();
//     fetchActiveInactiveData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       const [productRes, ratingRes, complaintRes, userRes, businessRes,Res, newUsersRes] = await Promise.all([
//         axios.get("/product/product"),
//         axios.get("/rating/ratings"),
//         axios.get("/complaint/complaints"),
//         axios.get("/users"),
//         axios.get("/business/businesses"),
//         axios.get("/admin/stats"),
//         axios.get("/admin/new-users-month"),

//       ]);
//       console.log(Res.data)

//       const products = productRes.data.data || [];
//       const ratings = ratingRes.data.data || [];
//       const complaints = complaintRes.data.data || [];
//       const users = userRes.data.data || [];
//       const businesses = businessRes.data.data || [];
//       const stats1 = Res.data || [];
//       console.log(stats1)

//       const reviewMap = {};
//       const ratingMap = {};
//       const distribution = [0, 0, 0, 0, 0];
//       const statusMap = { Open: 0, Resolved: 0, Escalated: 0 };
//       const userCountByMonth = {};
//       const weeklyMap = {};
//       const businessProductMap = {};
//       const resolutionTimeList = [];

//       const now = new Date();

//       ratings.forEach((r) => {
//         const product = r.productId?.name || "Unknown";
//         reviewMap[product] = (reviewMap[product] || 0) + 1;
//         ratingMap[product] = ratingMap[product] || [];
//         ratingMap[product].push(r.rating);
//         distribution[r.rating - 1] += 1;
//       });

//       complaints.forEach((c) => {
//         if (statusMap[c.status] !== undefined) statusMap[c.status] += 1;

//         const filed = new Date(c.fileddate);
//         const week = `${filed.getFullYear()}-W${Math.ceil(
//           ((filed - new Date(filed.getFullYear(), 0, 1)) / 86400000 + filed.getDay() + 1) / 7
//         )}`;
//         weeklyMap[week] = (weeklyMap[week] || 0) + 1;
//         if (c.status === "Resolved") {
//           const resolved = new Date(c.updatedAt); // use updatedAt as resolution time
//           const diff = Math.round((resolved - filed) / (1000 * 60 * 60 * 24)); // difference in days
//           resolutionTimeList.push({ name: c.productId?.name || "N/A", days: diff });
//         }

//       });

//       const monthNames = {
//         Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
//         Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
//       };

//       const activeInactiveChart = {
//         title: "Active vs Inactive Users",
//         subtitle: "Comparison of active users and inactive users",
//         content: (
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={[{ name: 'Active Users', count: stats.activeUsers }, { name: 'Inactive Users', count: stats.inactiveUsers }]}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="count" fill="#82ca9d" />
//             </BarChart>
//           </ResponsiveContainer>
//         ),
//       }

//       const rawMonthlyUsers = {};
//       users.forEach((u) => {
//         const date = new Date(u.createdAt);
//         const year = date.getFullYear();
//         const month = date.getMonth(); // 0-based
//         const key = `${year}-${month}`; // e.g. 2025-3 for April
//         rawMonthlyUsers[key] = (rawMonthlyUsers[key] || 0) + 1;
//       });

//       products.forEach((p) => {
//         const businessName = p.businessId?.businessname || "Unknown";
//         businessProductMap[businessName] = (businessProductMap[businessName] || 0) + 1;
//       });

//       const fetchActiveInactiveData = async () => {
//         try {
//           const response = await axios.get('/admin/active-inactive-users');
//           setUserData(response.data);
//         } catch (error) {
//           console.error('Error fetching user data:', error);
//         }
//       };

//       const averageRatings = Object.entries(ratingMap).map(([name, ratings]) => {
//         const total = ratings.reduce((sum, r) => sum + r, 0);
//         return { name, avg: +(total / ratings.length).toFixed(2) };
//       });

//       const sortedUserGrowthData = Object.entries(rawMonthlyUsers)
//   .map(([key, count]) => {
//     const [year, month] = key.split("-").map(Number);
//     return {
//       name: `${monthNames[month]} ${year}`, // formatted name
//       count,
//       date: new Date(year, month)
//     };
//   })
//   .sort((a, b) => a.date - b.date)
//   .map(({ name, count }) => ({ name, count }));

//       setUserGrowthData(sortedUserGrowthData);

//       const recentFiveComplaints = complaints
//         .sort((a, b) => new Date(b.fileddate) - new Date(a.fileddate))
//         .slice(0, 5);

//       setStats({
//         totalProducts: products.length,
//         totalRatings: ratings.length,
//         totalComplaints: complaints.length,
//         totalUsers: users.length,
//         totalBusinesses: businesses.length,
//         newUsersThisMonth: newUsersRes.data.newUsersThisMonth || 0,
//       });

//       setRatingsData(Object.entries(reviewMap).map(([name, count]) => ({ name, count })));
//       setRatingDistribution(distribution.map((value, index) => ({ name: `${index + 1}★`, value })));
//       setComplaintStatusData(Object.entries(statusMap).map(([name, value]) => ({ name, value })));

//       setUserGrowthData(Object.entries(userCountByMonth).map(([name, count]) => ({ name, count })));
//       setWeeklyComplaintsData(Object.entries(weeklyMap).map(([name, count]) => ({ name, count })));
//       setProductCountByBusiness(Object.entries(businessProductMap).map(([name, count]) => ({ name, count })));
//       setAverageRatingPerProduct(averageRatings);
//       setComplaintResolutionTimeData(resolutionTimeList);
//       setRecentComplaints(recentFiveComplaints);
//     } catch (err) {
//       console.error("Dashboard fetch error:", err);
//     }
//   };

//   const cardColors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff"];

//   const statCards = [
//     { icon: <FaBoxOpen size={28} color="#6f42c1" />, label: "Total Products", value: stats.totalProducts },
//     { icon: <FaStar size={28} color="#ffc107" />, label: "Total Ratings", value: stats.totalRatings },
//     { icon: <FaExclamationCircle size={28} color="#dc3545" />, label: "Total Complaints", value: stats.totalComplaints },
//     { icon: <FaUser size={28} color="#17a2b8" />, label: "Total Users", value: stats.totalUsers },
//     { icon: <FaStore size={28} color="#28a745" />, label: "Total Businesses", value: stats.totalBusinesses },
//     { icon: <FaUserPlus size={28} color="#007bff" />, label: "New Users (This Month)", value: stats.newUsersThisMonth }
//   ];

//   const additionalCharts = [
//     {
//       title: "Weekly Complaints Trend",
//       subtitle: "Complaints submitted each week",
//       content: (
//         // <LineChart
//         //   width={500}
//         //   height={300}
//         //   data={weeklyComplaintsData}  // use your actual data here
//         //   margin={{ top: 20, right: 30, left: 30, bottom: 30 }}
//         // >
//         //   <XAxis
//         //     dataKey="week"
//         //     interval={0}
//         //     tick={{ fontSize: 12 }}
//         //     angle={-15}
//         //     textAnchor="end"
//         //   />
//         //   <YAxis />
//         //   <Tooltip />
//         //   <Legend />
//         //   <Line
//         //     type="monotone"
//         //     dataKey="count"
//         //     stroke="#FF8042"
//         //     strokeWidth={2}
//         //     dot={true}
//         //   />
//         // </LineChart>
//         <LineChart
//   width={500}
//   height={300}
//   data={weeklyComplaintsData}
//   margin={{ top: 20, right: 30, left: 30, bottom: 30 }}
// >
//   <CartesianGrid stroke={darkMode ? "#444" : "#ccc"} />
//   <XAxis
//     dataKey="week"
//     interval={0}
//     tick={{ fontSize: 12, fill: darkMode ? "#fff" : "#000" }}
//     angle={-15}
//     textAnchor="end"
//     stroke={darkMode ? "#aaa" : "#000"}
//   />
//   <YAxis
//     tick={{ fill: darkMode ? "#fff" : "#000" }}
//     stroke={darkMode ? "#aaa" : "#000"}
//   />
//   <Tooltip
//     contentStyle={{
//       backgroundColor: darkMode ? "#333" : "#fff",
//       color: darkMode ? "#fff" : "#000"
//     }}
//     labelStyle={{ color: darkMode ? "#ccc" : "#000" }}
//     itemStyle={{ color: darkMode ? "#fff" : "#000" }}
//   />
//   <Legend wrapperStyle={{ color: darkMode ? "#fff" : "#000" }} />
//   <Line
//     type="monotone"
//     dataKey="count"
//     stroke="#FF8042"
//     strokeWidth={2}
//     dot={true}
//   />
// </LineChart>

//       )
//     },
//     {
//       title: "Product Count by Business",
//       subtitle: "Number of products listed by each business",
//       content: (
//         <BarChart
//           layout="vertical"
//           width={500}
//           height={300}
//           data={productCountByBusiness}  // use the correct variable here
//           margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
//         >
//           <XAxis type="number" />
//           <YAxis
//             type="category"
//             dataKey="name"
//             interval={0}
//             tick={{ fontSize: 12 }}
//             tickFormatter={(value) =>
//               value.length > 14 ? `${value.slice(0, 14)}...` : value
//             }
//           />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="count" fill="#8884d8" />
//         </BarChart>
//       )
//     }
//     ,
//     {
//       title: "Average Rating per Product",
//       subtitle: "Product performance by user rating",
//       content: (
//         <BarChart data={averageRatingPerProduct} layout="vertical">
//           <XAxis type="number" domain={[0, 5]} />
//           <YAxis dataKey="name" type="category" />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="avg" fill="#00C49F" />
//         </BarChart>
//       )
//     },
//     {title: "Active vs Inactive Users",
//       subtitle: "Comparison of active users and inactive users",
//       content: (
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={[{ name: 'Active Users', count: userData.activeUsers }, { name: 'Inactive Users', count: userData.inactiveUsers }]}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="count" fill="#82ca9d" />
//           </BarChart>
//         </ResponsiveContainer>
//       ),}

//   ];

//   const chartData = [
//     {
//       title: "Review Count per Product",
//       subtitle: "Total number of reviews per product",
//       content: (
//         <BarChart data={ratingsData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
//           <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />
//           <YAxis label={{ value: "Review Count", angle: -90, position: "insideLeft" }} />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="count" fill="#8884d8" />
//         </BarChart>
//       )
//     },
//     {
//       title: "Rating Distribution",
//       subtitle: "Number of ratings by star count",
//       content: (
//         <PieChart>
//           <Pie data={ratingDistribution} cx="50%" cy="50%" outerRadius={100} label dataKey="value">
//             {ratingDistribution.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       )
//     },
//     {
//       title: "Complaint Status Overview",
//       subtitle: "Complaints by current status",
//       content: (
//         <PieChart>
//           <Pie data={complaintStatusData} cx="50%" cy="50%" outerRadius={100} label dataKey="value">
//             {complaintStatusData.map((entry, index) => (
//               <Cell key={`status-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       )
//     },
//     {
//       title: "Complaint Resolution Time",
//       subtitle: "Days taken to resolve complaints",
//       content: (
//         <BarChart data={complaintResolutionTimeData} layout="vertical">
//           <XAxis type="number" />
//           <YAxis dataKey="name" type="category" />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="days" fill="#FFBB28" />
//         </BarChart>
//       )
//     },

//   ];

//   const getStatusBadge = (status) => {
//     switch (status.toLowerCase()) {
//       case 'open':
//         return <Badge bg="warning" text="dark">Open</Badge>;
//       case 'escalated':
//         return <Badge bg="danger">Escalated</Badge>;
//       case 'resolved':
//         return <Badge bg="success">Resolved</Badge>;
//       default:
//         return <Badge bg="secondary">{status}</Badge>;
//     }
//   };

//   return (
//     <div className={`p-4 min-vh-100 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2>Admin Dashboard</h2>
//         <Button variant={darkMode ? "light" : "dark"} onClick={() => setDarkMode(!darkMode)}>
//           {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
//         </Button>
//       </div>

//       <div className="row g-3 mb-5 text-center">
//   {statCards.map(({ icon, label, value }, idx) => (
//     <div className="col-6 col-md-4 col-lg-2" key={idx}>
//       <Card
//         className="shadow h-100 dashboard-card-hover"
//         style={{

//           transition: "transform 0.2s ease-in-out",

//         }}
//       >
//         <Card.Body className="d-flex flex-column justify-content-center align-items-center">
//           {icon}
//           <h6 className="mt-2">{label}</h6>
//           <h4>{value}</h4>
//         </Card.Body>
//       </Card>
//     </div>
//   ))}
// </div>

//       <div className="row g-4 mb-5">
//         {chartData.map((chart, i) => (
//           <div className="col-md-6" key={i}>
//             <Card className="p-3 shadow h-100 dashboard-chart-card" style={{ transition: "transform 0.2s ease-in-out" }}>
//               <h5>{chart.title}</h5>
//               <p className="text-muted">{chart.subtitle}</p>
//               <ResponsiveContainer width="100%" height={300}>
//                 {chart.content}
//               </ResponsiveContainer>
//             </Card>
//           </div>
//         ))}
//       </div>

//       <div>
//         <h5>Recent Complaints</h5>
//         <p className="text-muted">Latest 5 complaints submitted</p>
//         <Table striped bordered hover responsive variant={darkMode ? "dark" : "light"}>
//           <thead className="table-dark">
//             <tr>
//               <th style={{ width: "10%" }}>Product</th>
//               <th>User</th>
//               <th style={{ width: "40%" }}>Description</th>
//               <th>Status</th>
//               <th>Filed Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {recentComplaints.map((c, i) => (
//               <tr key={i}>
//                 <td className="product-col">{c.productId?.name || "N/A"}</td>
//                 <td>{c.userId ? `${c.userId.firstname} ${c.userId.lastname}` : "N/A"}</td>
//                 <td className="description-col">{c.description}</td>
//                 <td>{getStatusBadge(c.status)}</td>
//                 <td>{new Date(c.fileddate).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <div className="row g-4">
//         {additionalCharts.map((chart, i) => (
//           <div className="col-md-6" key={i}>
//             <Card className="p-3 shadow h-100 dashboard-chart-card">
//               <h5>{chart.title}</h5>
//               <p className="text-muted">{chart.subtitle}</p>
//               <ResponsiveContainer width="100%" height={300}>
//                 {chart.content}
//               </ResponsiveContainer>
//             </Card>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../../assets/admin.css";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import axios from "axios";
import {
  FaBoxOpen,
  FaStar,
  FaExclamationCircle,
  FaUser,
  FaStore,
  FaUserPlus,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { BusinessRegistrationChart, ProductCountByBusinessChart, RatingDistributionChart, UserRegistrationChart } from "./AdminDashboardCharts";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#0088FE"];

export const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [monthlyUsers, setMonthlyUsers] = useState([]);

  useEffect(() => {
    fetchDashboardData();
    // fetchActiveInactiveData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [
        productRes,
        ratingRes,
        complaintRes,
        userRes,
        businessRes,
        Res,
        newUsersRes,
        monthlyUserRes,
      ] = await Promise.all([
        axios.get("/product/product"),
        axios.get("/rating/ratings"),
        axios.get("/complaint/complaints"),
        axios.get("/users"),
        axios.get("/business/businesses"),
        axios.get("/admin/stats"),
        axios.get("/admin/new-users-month"),
        axios.get("/admin/monthly-users"),
      ]);
      console.log(Res.data);

      const products = productRes.data.data || [];
      const ratings = ratingRes.data.data || [];
      const complaints = complaintRes.data.data || [];
      const users = userRes.data.data || [];
      const businesses = businessRes.data.data || [];
      const stats1 = Res.data || [];
      const newUsersThisMonth = newUsersRes.data || 0; // Default to 0 if no data

      console.log(stats1);

      // products.forEach((p) => {
      //   const businessName = p.businessId?.businessname || "Unknown";
      //   businessProductMap[businessName] = (businessProductMap[businessName] || 0) + 1;
      // });

      setStats({
        totalProducts: products.length,
        totalRatings: ratings.length,
        totalComplaints: complaints.length,
        totalUsers: users.length,
        totalBusinesses: businesses.length,
        newUsersThisMonth: newUsersRes.data.newUsersThisMonth || 0,
        
      });
      setMonthlyUsers(monthlyUserRes.data.data);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    }
  };

  const cardColors = [
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bf6ff",
    "#a0c4ff",
  ];

  const statCards = [
    {
      icon: <FaBoxOpen size={28} color="#6f42c1" />,
      label: "Total Products",
      value: stats.totalProducts,
    },
    {
      icon: <FaStar size={28} color="#ffc107" />,
      label: "Total Ratings",
      value: stats.totalRatings,
    },
    {
      icon: <FaExclamationCircle size={28} color="#dc3545" />,
      label: "Total Complaints",
      value: stats.totalComplaints,
    },
    {
      icon: <FaUser size={28} color="#17a2b8" />,
      label: "Total Users",
      value: stats.totalUsers,
    },
    {
      icon: <FaStore size={28} color="#28a745" />,
      label: "Total Businesses",
      value: stats.totalBusinesses,
    },
    {
      icon: <FaUserPlus size={28} color="#007bff" />,
      label: "New Users (This Month)",
      value: stats.newUsersThisMonth,
    },
  ];




  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "open":
        return (
          <Badge bg="warning" text="dark">
            Open
          </Badge>
        );
      case "escalated":
        return <Badge bg="danger">Escalated</Badge>;
      case "resolved":
        return <Badge bg="success">Resolved</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <div
      className={`p-4 min-vh-100 ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <Button
          variant={darkMode ? "light" : "dark"}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}{" "}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

      <div className="row g-3 mb-5 text-center">
        {statCards.map(({ icon, label, value }, idx) => (
          <div className="col-6 col-md-4 col-lg-2" key={idx}>
            <Card
              className="shadow h-100 dashboard-card-hover"
              style={{
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                {icon}
                <h6 className="mt-2">{label}</h6>
                <h4>{value}</h4>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      
     
      <div className="row g-3 mb-5">
        <div className="col-md-6">
          <UserRegistrationChart />
        </div>
        <div className="col-md-6">
          <ProductCountByBusinessChart />
        </div>
        <div className="col-md-6">
          <RatingDistributionChart />
        </div>
        <div className="col-md-6">
          <BusinessRegistrationChart />
        </div>
      </div>
    </div>
    
  );
};
