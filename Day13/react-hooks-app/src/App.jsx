import React from 'react';
import CounterApp from "./Components/CounterApp";
import ImageApp from './Components/ImageApp';     
import {BrowserRouter , Routes , Route} from 'react-router-dom';  
import MainLayout from './Components/MainLayout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<MainLayout />}>
        <Route path ="/CounterApp" element = {<CounterApp />} />
        <Route path ="/ImageApp" element = {<ImageApp />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
