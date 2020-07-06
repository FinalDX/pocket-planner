import React, { Component } from "react";

import Select from "../UI/Select/Select";

import classes from "./Controls.module.css";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemForm: {
        name: {
          value: "",
          validation: {
            required: true
          },
          valid: false
        },
        amount: {
          value: 0,
          validation: {
            required: true
          },
          valid: false
        },
        category: {
          value: "",
          validation: {
            required: true
          },
          valid: false
        },
        type: {
          value: "income",
          validation: {
            required: true
          },
          valid: false
        }
      }
    };
  }

  inputHandler = (e, inputName) => {
    const updatedForm = { ...this.state.itemForm };
    const updatedItem = { ...this.state.itemForm[inputName] };

    updatedItem.value = e.target.value;
    updatedForm[inputName] = updatedItem;

    this.setState({ itemForm: updatedForm });
  };

  render() {
    return (
      <form
        className={classes.Controls}
        onSubmit={event => {
          event.preventDefault();
          return this.props.sendData(this.state.itemForm);
        }}
        required
      >
        <p>Add an income or an expense: </p>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={event => this.inputHandler(event, "name")}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          onChange={event => this.inputHandler(event, "amount")}
          required
        />

        <Select changed={event => this.inputHandler(event, "category")} />

        <label>
          <input
            type="radio"
            name="itemType"
            value="income"
            checked={this.props.type === "income"}
            onChange={event => this.inputHandler(event, "type")}
          />
          Income
        </label>

        <label>
          <input
            type="radio"
            name="itemType"
            value="expense"
            checked={this.props.type === "expense"}
            onChange={event => this.inputHandler(event, "type")}
          />
          Expense
        </label>

        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Controls;
