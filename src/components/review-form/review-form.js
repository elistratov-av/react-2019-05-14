import React, { Component } from "react";
import { Form, Input, Button, Rate } from "antd";
import "./review-form.css";

class ReviewForm extends Component {
  state = {
    user: "",
    text: "",
    rating: 0
  };
  render() {
    const { user, text, rating } = this.state;
    return (
      <Form className="review-form">
        <Form.Item
          label="User"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input value={user} onChange={this.handleUserChange} />
        </Form.Item>
        <Form.Item
          label="Review text"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input value={text} onChange={this.handleTextChange} />
        </Form.Item>
        <Form.Item
          label="Rating"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Rate value={rating} onChange={this.handleRatingChange} />
        </Form.Item>
        <Form.Item className="review-form-submit-section">
          <Button type="primary" htmlType="submit" onClick={this.submit}>
            Add review
          </Button>
        </Form.Item>
      </Form>
    );
  }

  handleUserChange = e => {
    this.setState({
      user: e.target.value
    });
  };

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleRatingChange = v => {
    this.setState({
      rating: v
    });
  };

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  };
}

export default ReviewForm;
