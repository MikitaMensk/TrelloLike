import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  setCurrentColumn, 
  setCurrentCard,
  setCurrentCardTitle,
  toggleAddCard, 
  toggleEditCard, 
  toggleVeil, 
  deleteCard,
  editCard,
} 
from "../actions/index";

const mapStateToProps = state => {
  return { columns: state.columns };
};

function mapDispatchToProps(dispatch) {
  return {
    setCurrentColumn: index => dispatch(setCurrentColumn(index)),
    setCurrentCard: card => dispatch(setCurrentCard(card)),
    setCurrentCardTitle: title => dispatch(setCurrentCardTitle(title)),
    toggleAddCard: () => dispatch(toggleAddCard()),
    toggleEditCard: () => dispatch(toggleEditCard()),
    toggleVeil: () => dispatch(toggleVeil()),
    deleteCard: (card) => dispatch(deleteCard(card)),
    editCard: (card) => dispatch(editCard(card)),
  };
}

class MainField extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  addNewCard(index) {
    this.props.setCurrentColumn(index);
    this.props.toggleVeil();
    this.props.toggleAddCard();
  }
  editCard(index, title, cardIndex) {
    this.props.setCurrentColumn(index);
    this.props.setCurrentCard(cardIndex);
    this.props.setCurrentCardTitle(title);
    this.props.toggleVeil();
    this.props.toggleEditCard();
  }
  render() {
    return (
        <main className="cardSheet">
            {
                this.props.columns.map((el, index) => (
                    <div className="column" key={el.title}>
                        <h3>{el.title}</h3>
                        <ul className="card-list">
                          {
                            el.cards.map((card, cardIndex) => (
                              <li className="ordinary" key={card.title}>
                                <h5>{card.title}</h5>
                                <footer className="card-footer">
                                  <button className="edit" onClick={() => this.editCard(index, card.title, cardIndex)}>&nbsp;</button>
                                  <button className="close" onClick={() => this.props.deleteCard({columnIndex: index, cardIndex: cardIndex})}>
                                    x
                                  </button>
                                </footer>
                              </li>
                            ))
                          }
                        </ul>
                        <button onClick={() => this.addNewCard(index)}>Add card</button>
                    </div>
                ))
            }
        </main>
    );
  }
}

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainField);

export default Main;