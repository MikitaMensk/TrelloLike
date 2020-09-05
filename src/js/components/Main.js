import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

const mapStateToProps = state => {
  return { columns: state.columns };
};

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class MainField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    const { title } = this.state;
    return (
        <main>
            {
                this.props.columns.map(el => (
                    <div className="column">
                        <h3>{el.title}</h3>
                        <ul className="card-list">
                            <li className="ordinary">FF</li>
                            <li className="urgent">DD</li>
                            <li className="urgent">EE</li>
                            <li className="urgent">SS</li>
                        </ul>
                        <button>Add card</button>
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