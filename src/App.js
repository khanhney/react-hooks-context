import React from 'react';
import logo from './logo.svg';
import './App.css';

import ExampleHook1 from './components/hooks.1';
import ExampleHookWithManyStates from './components/hook.multiple.useState';
import HookApp from './components/hook.demoapp'

function App() {
  return (
    <div className="App">
        <ExampleHook1></ExampleHook1>
        <ExampleHookWithManyStates></ExampleHookWithManyStates>
        <HookApp></HookApp>
    </div>
  );
}

export default App;
