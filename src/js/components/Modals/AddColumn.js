import React, { Component } from "react";
import { connect } from "react-redux";
import './Modals.css';
import { addColumn, toggleAddColumn, toggleVeil } from "../../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    toggleVeil: () => dispatch(toggleVeil()),
    toggleAddColumn: () => dispatch(toggleAddColumn()),
    addColumn: column => dispatch(addColumn(column)),
  };
}

class AddColumnModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addColumn({
        title: title,
        cards: [],
    })
    this.props.toggleVeil();
    this.props.toggleAddColumn();
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form className="window" onSubmit={this.handleSubmit}>
        <main>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </main>
        <footer>
            <button type="submit">Add</button>
        </footer>
      </form>
    );
  }
}

const AddColumn = connect(
  null,
  mapDispatchToProps
)(AddColumnModal);

export default AddColumn;