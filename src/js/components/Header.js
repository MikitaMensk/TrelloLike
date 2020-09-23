import React, {Component} from "react";
import { connect } from "react-redux";
import { addColumn, toggleVeil } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addColumn: article => dispatch(addColumn(article)),
        toggleVeil: () => dispatch(toggleVeil()),
    };
}

class HeaderBox extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    addNewColumn() {
        this.props.toggleVeil();
        this.props.addColumn({
            title: 'A new (this is a list)',
            cards: [],
        })
    }
    render(){
        return (
            <header>
                <div className="search-wrap">
                    <input type="search" className="search" />
                </div>
                <h1>Trello</h1>
                <button onClick={() => this.addNewColumn()}>+</button>
            </header>
        );
    }
} 
const Header = connect(null, mapDispatchToProps)(HeaderBox);

export default Header;