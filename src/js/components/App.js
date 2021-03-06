import React from "react";
import { connect } from "react-redux";
import List from "./List";
import Form from "./Form";
import Main from "./Main";
import Header from "./Header";
import Veil from "./Modals/Veil";
import AddColumn from "./Modals/AddColumn";
import AddCard from "./Modals/AddCard";
import EditCard from "./Modals/EditCard";

const mapStateToProps = state => {
  return { 
    articles: state.articles,
    isAddCardOpen: state.isAddCardOpen,
    isAddColumnOpen: state.isAddColumnOpen,
    isEditColumnOpen: state.isEditColumnOpen,
    isEditCardOpen: state.isEditCardOpen,
    isVeilShow: state.isVeilShow, 
  };  
};

const AppComp = (props) => (
  <div className="wrap">
    <Header />
    <Main />
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    {
      props.isVeilShow ? <Veil /> : null
    }
    {
      props.isAddColumnOpen ? <AddColumn /> : null
    }
    {
      props.isAddCardOpen ? <AddCard /> : null
    }
    {
      props.isEditCardOpen ? <EditCard /> : null
    }
  </div>
);

const App = connect(mapStateToProps)(AppComp);

export default App;
