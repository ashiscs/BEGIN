import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ComponentC from './components/ComponentC';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo'
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

export const userContext = React.createContext()
export const anotherContext = React.createContext()

function App() {
  return (
    <div >
      <userContext.Provider value='sunanda'>
          <anotherContext.Provider value='badass'>
          <ComponentC/>
          </anotherContext.Provider>
      </userContext.Provider>
      


      {/* <IntervalHookCounter/>
      <MouseContainer/> 
      <HookMouse/>
      <ClassCounter/>
      <HookCounterFour/>
      <HookCounterThree/>
      <HookCounterTwo/>
        <ClassCounter />
      <HookCounter />  */}
    </div>
  );
}

export default App;
