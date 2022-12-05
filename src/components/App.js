import React, { useEffect, useState } from 'react';
// import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from "./Home";
import About from "./About";
import CatContainer from './CatsContainer';
import CatForm from './CatForm';
import './App.css'; 

function App() {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState("/");

  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path="/about"> */}
            <About />
          {/* </Route> */}
          {/* <Route exact path="/home"> */}
            <Home />
          {/* </Route> */}
        <CatForm setCats={setCats} />
          {/* <Route path="/cats"> */}
            <CatContainer cat={cats} />
          {/* </Route>
          <Route path="*">
            <h1>404 not found</h1> */}
          {/* </Route> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
