import React from "react";
import List from "./List";
import Form from "./Form";
import Main from "./Main";

const App = () => (
  <>
	<header>
        <div className="search-wrap">
		  <input type="search" className="search" />
        </div>
		<h1>Trello</h1>
		<button>+</button>
	</header>
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