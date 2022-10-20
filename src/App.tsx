import React from 'react';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { List } from './components/List';
import { MenuOPtions } from './components/MenuOptions';

import './App.css';
import { GlobalProvider } from './context/global';

const App = () => {

  return (
    <GlobalProvider>
      <Header title='TodoList'/>
      <Search />
      <MenuOPtions />
      <List />
    </GlobalProvider>
  )
}

export default App;