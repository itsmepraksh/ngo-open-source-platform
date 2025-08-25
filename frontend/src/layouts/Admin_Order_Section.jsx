import React from 'react'

const Admin_Order_Section = () => {
  return (
    // <!-- Orders Section -->
            <div id="orders" className="content-section" >
                <div className="section-header">
                    <h3>Product Orders Management</h3>
                    <div className="section-stats">
                        <div className="stat-card">
                            <div className="stat-number" id="total-orders">0</div>
                            <div className="stat-label">Total Orders</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number" id="pending-orders">0</div>
                            <div className="stat-label">Pending Orders</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number" id="completed-orders">0</div>
                            <div className="stat-label">Completed Orders</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number" id="total-revenue">₹0</div>
                            <div className="stat-label">Total Revenue</div>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <div className="orders-filters" >
                        <select id="order-status-filter" onchange="filterOrders()" >
                            <option value="all">All Orders</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                        <input type="text" id="order-search" placeholder="Search by order number or customer name" onkeyup="searchOrders()" />
                    </div>
                    <div id="orders-list">
                        {/* <!-- Orders will be loaded here --> */}
                    </div>
                </div>
            </div>
  )
}

export default Admin_Order_Section