import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import ErrorBoundary from './components/ErrorBoundary';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero';
import HoverCounter from './components/HoverCounter';
import LifecycleA from './components/LifecycleA'
import ParentComp from './components/ParentComp';
import PortalDemo from './components/PortalDemo';
import PureComponent from './components/PureComp'
import RefsDemo from './components/RefsDemo';
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userComtext';

function App() {
  return (
    <div className="App">
      <UserProvider value='sunanda'>
      <ComponentC/>
      </UserProvider>
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ErrorBoundary>
      <Hero name="sunanda" />
      <Hero name="debo" />
      <Hero name="subhankar" />
      </ErrorBoundary> */}
      
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
    </div>
  );
}

export default App;
