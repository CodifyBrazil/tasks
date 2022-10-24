import React from 'react';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { List } from './components/List';
import { MenuOPtions } from './components/MenuOptions';

import './App.css';
import { ExempleProvider } from './context/global';

const App = () => {

  return (
    <ExempleProvider>
      <Header title='TodoList'/>
      <Search />
      <MenuOPtions />
      <List />
    </ExempleProvider>
  )
}

export default App;