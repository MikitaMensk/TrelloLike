import React, {Component} from "react";
import { connect } from "react-redux";
import { toggleVeil, toggleAddColumn } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        toggleVeil: () => dispatch(toggleVeil()),
        toggleAddColumn: () => dispatch(toggleAddColumn()),
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
        this.props.toggleAddColumn();
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