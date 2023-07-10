import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tasks from "./components/Tasks/Tasks";


const App = () => {
  return (
    <div className="app">
      <Header/>
      <Tasks/>
      <Footer/>
    </div>
    
  );
}

export default App;
