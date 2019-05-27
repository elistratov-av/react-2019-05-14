import React from "react";
import { List } from "antd";
import Order from "../order";
import PropTypes from "prop-types";
import { Layout } from "antd";
const { Content, Footer } = Layout;

function OrderList({ orders }) {
  const total = orders.reduce(
    (total, order) => total + order.amount * order.price,
    0
  );
  return (
    <Layout className="App">
      <Content>
        <List>
          {orders.map(order => (
            <Order key={order.id} {...order} />
          ))}
        </List>
      </Content>
      <Footer>Всего: £{total}</Footer>
    </Layout>
  );
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape(Order.propTypes)).isRequired
};

export default OrderList;
