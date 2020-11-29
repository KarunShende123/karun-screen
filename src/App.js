import React from 'react';
import './assets/css/index.scss';
import TestsPage from "./pages/tests/testsPage";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Route exact={true} path="/" component={TestsPage}/>
      </BrowserRouter>
  );
}

export default App;
