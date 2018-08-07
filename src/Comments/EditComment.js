
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
      <form onSubmit={this.handleUpdate}>
        <h1 className="h3 mb-3 font-weight-normal">Edit Animal</h1>
        <label htmlFor="inputName">Animal Name</label>
        <input
          value={this.state.name}
          onChange={this.handleFieldChange}
          type="text"
          id="name"
          placeholder="Name"
          required=""
          autoFocus=""
        />
        <label htmlFor="inputBreed">Animal Breed</label>
        <input
          value={this.state.breed}
          onChange={this.handleFieldChange}
          type="text"
          id="breed"
          placeholder="Breed"
          required=""
        />
        <button type="submit">Update</button>
      </form>
    );
  }
}