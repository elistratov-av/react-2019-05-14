import React from "react";
import { List } from "antd";
import Order from "../order";
import PropTypes from "prop-types";

function OrderList({ orders }) {
  return (
    <List>
      {orders.map(order => (
        <Order key={order.id} {...order} />
      ))}
    </List>
  );
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(Order.propTypes.order)
};

export default OrderList;
