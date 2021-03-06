import React, { Component } from "react";
import { connect } from "react-redux";
import './Modals.css';
import { addCard, toggleVeil, toggleAddCard } from "../../actions/index";

function mapStateToProps(state) {
  return { currentColumn: state.currentColumn };
};

function mapDispatchToProps(dispatch) {
  return {
    toggleVeil: () => dispatch(toggleVeil()),
    toggleAddCard: () => dispatch(toggleAddCard()),
    addCard: card => dispatch(addCard(card)),
  };
}

class AddCardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
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
    this.props.addCard({index: this.props.currentColumn, cardBody: {title: title, image: '', date: new Date()}})
    this.props.toggleVeil();
    this.props.toggleAddCard();
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

const AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardModal);

export default AddCard;