
import React, { Component } from "react";
import ApiManager from "./ApiManager"

export default class EditAnimal extends Component {
  // Set initial state
  state = {
    comments: this.props.comments,
    
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleUpdate = e => {
    e.preventDefault();

    const updatedComment = {name: this.state.name, comments: this.state.comments}
    ApiManager.updateItem("comments", this.props.comments.id, updatedComments)
    .then(() => {
      this.props.history.push("/comments");
    })
  };

  render() {
    return (
      console.log("This works")
    );
  }
}