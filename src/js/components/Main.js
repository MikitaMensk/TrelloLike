import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle, addCard, deleteCard } from "../actions/index";

const mapStateToProps = state => {
  return { columns: state.columns };
};

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    addCard: (card) => dispatch(addCard(card)),
    deleteCard: (card) => dispatch(deleteCard(card)),
  };
}

class MainField extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <main>
            {
                this.props.columns.map((el, index) => (
                    <div className="column" key={el.title}>
                        <h3>{el.title}</h3>
                        <h4>{index}</h4>
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
                        <button onClick={() => this.props.addCard({index: index, cardBody: {title: 'This is another card.', image: '', date: ''}})}>Add card</button>
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