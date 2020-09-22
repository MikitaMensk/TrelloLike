import React from "react";
import List from "./List";
import Form from "./Form";
import Main from "./Main";
import Header from "./Header";

const App = () => (
  <>
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
  </>
);

export default App;