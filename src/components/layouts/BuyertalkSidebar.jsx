// import React, { useState } from "react";

// import { Link, Outlet } from "react-router-dom";

// import { BuyertalkNavbar } from "./BuyertalkNavbar";

// export const BuyertalkSidebar = () => {
//   //for closing sidebar...
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     console.log("toggleSidebar");
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <BuyertalkNavbar toggleSidebar={toggleSidebar} />
//       <aside
//         className={`app-sidebar bg-body-secondary shadow ${
//           isSidebarOpen ? "open" : "d-none"
//         }`}
//         data-bs-theme="dark"
//       >
//         <div className="sidebar-brand">
//           <a href="./" className="brand-link">
            

//             <span className="brand-text fw-light"> BUYER TALK</span>
//           </a>
//         </div>

//         <div
//           className=""
//           data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
//           tabIndex={-1}
//           style={{
//             marginRight: "-16px",
//             marginBottom: "-16px",
//             marginLeft: 0,
//             top: "-8px",
//             right: "auto",
//             left: "-8px",
//             width: "calc(100% + 16px)",
//             padding: 8,
//           }}
//         >
//           <nav className="mt-2">
//             <ul
//               className="nav sidebar-menu flex-column"
//               data-lte-toggle="treeview"
//               role="menu"
//               data-accordion="false"
//             >
//               <li className="nav-item menu-open">
//                 <Link to="/product/products2" className="nav-link active">
//                   <i className="nav-icon bi bi-speedometer" />
//                   <p>
//                     ADD PRODUCT
//                     <i className="nav-arrow bi bi-chevron-right" />
//                   </p>
//                 </Link>
//                 <ul className="nav nav-treeview">
//                   <li className="nav-item">
//                     <Link to="/product/viewmyproducts" className="nav-link active">
//                       <i className="nav-icon bi bi-speedometer" />
//                       <p>
//                         VIEW MY PRODUCTS
//                         <i className="nav-arrow bi bi-chevron-right" />
//                       </p>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
              
//               <li className="nav-item">
//                 <a href="#" className="nav-link">
//                   <i className="nav-icon bi bi-box-seam-fill" />
//                   <p>
//                     Widgets
//                     <i className="nav-arrow bi bi-chevron-right" />
//                   </p>
//                 </a>
//                 <ul className="nav nav-treeview">
//                   <li className="nav-item">
//                     <a href="./widgets/small-box.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>Small Box</p>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="./widgets/info-box.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>info Box</p>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="./widgets/cards.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>Cards</p>
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>
//       <main class="app-main">
//         <Outlet></Outlet>
//       </main>
//     </>
//   );
// };


import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { BuyertalkNavbar } from "./BuyertalkNavbar";


export const BuyertalkSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // sidebar is initially closed

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Pass isSidebarOpen as prop to hide hamburger when sidebar is open */}
      <BuyertalkNavbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <aside
        className={`app-sidebar bg-body-secondary shadow ${
          isSidebarOpen ? "open" : "d-none"
        }`}
        data-bs-theme="dark"
      >
        <div className="sidebar-brand d-flex justify-content-between align-items-center px-3 py-2">
          <Link to="/" className="brand-link d-flex align-items-center">
            <span className="brand-text fw-light">Buyer Talk</span>
          </Link>
          <button
            className="btn btn-sm btn-light ms-2"
            onClick={toggleSidebar}
            style={{ fontSize: "16px", lineHeight: "1", borderRadius: "50%" }}
          >
            &times;
          </button>
        </div>

        <div
          className=""
          data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
          tabIndex={-1}
          style={{
            marginRight: "-16px",
            marginBottom: "-16px",
            marginLeft: 0,
            top: "-8px",
            right: "auto",
            left: "-8px",
            width: "calc(100% + 16px)",
            padding: 8,
          }}
        >
          <nav className="mt-2">
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                  <Link to="/product/products2" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer" />
                  <p>
                    ADD PRODUCT
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                  </Link>
                  <Link to="/product/viewmyproducts" className="nav-link active">
                      <i className="nav-icon bi bi-speedometer" />
                      <p>
                        VIEW MY PRODUCTS
                         <i className="nav-arrow bi bi-chevron-right" />
                       </p>
                     </Link>
                  </li>
                 
                </ul>
              </li>
              
              
              
              <li className="nav-item">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./widgets/small-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Small Box</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./widgets/info-box.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>info Box</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./widgets/cards.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Cards</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </>
  );
};
