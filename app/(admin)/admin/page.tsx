"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ord = await axios.post("api/getorders");
      console.log(ord.data.products);
      setProducts(ord.data.products);
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
          <div className="mt-6" key={order.id}>
            <div>Order Id: {order.id}</div>
            <div>
              Order Status: {order.orderStatus ? "Delivered" : "Not Delivered"}
            </div>
            <div className="mt-2">Items:</div>
            <div>
              {products.map((product: any) => {
                if (product.orderId === order.id) {
                  return (
                    <div className="flex" key={product.orderId}>
                      <div>{product.name}</div>
                      <div className="ml-2">x{product.quantity}</div>
                    </div>
                  );
                }
              })}
            </div>
            <div>Total Price: {order.totalPrice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
