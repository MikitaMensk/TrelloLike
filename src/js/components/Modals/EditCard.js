import React, { Component } from "react";
import { connect } from "react-redux";
import './Modals.css';
import { addCard, editCard, toggleVeil, toggleEditCard } from "../../actions/index";

function mapStateToProps(state) {
  return { 
    currentColumn: state.currentColumn,
    currentCard: state.currentCard,
    currentCardTitle: state.currentCardTitle,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    toggleVeil: () => dispatch(toggleVeil()),
    toggleEditCard: () => dispatch(toggleEditCard()),
    addCard: card => dispatch(addCard(card)),
    editCard: card => dispatch(editCard(card)),
  };
}

class EditCardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.currentCardTitle,
      image: '',
      date: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, image, date } = this.state;
    this.props.editCard(
      {index: this.props.currentColumn, cardIndex: this.props.currentCard, cardBody: {title: title, image: image, date: date}}
    );
    this.props.toggleVeil();
    this.props.toggleEditCard();
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
            <button type="submit">Edit</button>
        </footer>
      </form>
    );
  }
}

const EditCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCardModal);

export default EditCard;