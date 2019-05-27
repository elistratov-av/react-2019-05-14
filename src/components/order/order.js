import React from "react";
import { List, Button } from "antd";
import PropTypes from "prop-types";
import "./order.css";
import { connect } from "react-redux";
import { clearCart } from "../../ac";

function Order(props) {
  const { id, name, price, amount, clear } = props;
  return (
    <>
      <List.Item
        className="order"
        actions={[
          `${amount} по £${price}`,
          <Button onClick={() => clear(id)} icon="close-circle" />
        ]}
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

export default connect(
  undefined,
  {
    clear: clearCart
  }
)(Order);
