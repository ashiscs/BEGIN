import React from 'react';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import DocTitleOne from './components/DocTitleOne';
import FocusInput from './components/FocusInput';
import DocTitleTwo from './DocTitleTwo';

function App() {
  return (
    <div className='App' >
      <CounterOne/>
      <CounterTwo/>
      {/* <DocTitleOne/> 
      <DocTitleTwo/> */}
      {/* <FocusInput/> */}
      {/* <DataFetchingTwo/> */}
      {/* <DataFetchingOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterOne/> */}
    </div>
  );
}

export default App;
