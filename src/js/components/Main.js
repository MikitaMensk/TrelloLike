import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentColumn, toggleAddCard, toggleVeil, deleteCard } from "../actions/index";

const mapStateToProps = state => {
  return { columns: state.columns };
};

function mapDispatchToProps(dispatch) {
  return {
    setCurrentColumn: index => dispatch(setCurrentColumn(index)),
    toggleAddCard: () => dispatch(toggleAddCard()),
    toggleVeil: () => dispatch(toggleVeil()),
    deleteCard: (card) => dispatch(deleteCard(card)),
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
    //this.props.addCard({index: index, cardBody: {title: 'This is another card.', image: '', date: ''}})
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
                                <button onClick={() => this.props.deleteCard({columnIndex: index, cardIndex: cardIndex})}>x</button>
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