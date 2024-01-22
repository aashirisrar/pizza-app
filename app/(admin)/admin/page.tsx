"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ord = await axios.post("api/getorders");
      setOrders(ord.data.data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <div>Admin Page</div>
      <div>Orders:</div>
      <div>
        {orders.map((order: any) => (
          <div key={order.id}>
            <div>Order Id: {order.id}</div>
            <div>
              Order Status: {order.orderStatus ? "Delivered" : "Not Delivered"}
            </div>
            <div>Total Price: {order.totalPrice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
