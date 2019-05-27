import React from "react";
import { List } from "antd";
import PropTypes from "prop-types";
import "./order.css";

function Order({ name, price, amount }) {
  return (
    <>
      <List.Item
        className="order"
        actions={[<span>{amount}</span>, <span>£{price}</span>]}
      >
        <List.Item.Meta title={name} />
      </List.Item>
    </>
  );
}

Order.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Order;
