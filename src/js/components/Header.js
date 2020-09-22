import React, {Component} from "react";
import { connect } from "react-redux";
import { addColumn } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addColumn: article => dispatch(addColumn(article))
    };
}

class HeaderBox extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <header>
                <div className="search-wrap">
                    <input type="search" className="search" />
                </div>
                <h1>Trello</h1>
                <button onClick={() => this.props.addColumn({
                    title: 'A new (this is a list)',
                    cards: [],
                })}>+</button>
            </header>
        );
    }
} 
const Header = connect(null, mapDispatchToProps)(HeaderBox);

export default Header;