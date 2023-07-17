import React from 'react';
import Hearder from './Hearder';
import Main from './Main';
import "./App.css"
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <h1>
        <Hearder />
        <Main/>
        <Footer/>
      </h1>
    </div>
  );
};

export default App;
