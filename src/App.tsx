import { useState } from 'react';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { List } from './components/List';
import { MenuOPtions } from './components/MenuOptions';

import './App.css';

const App = () => {

  const [filters, setFilters] = useState('');

  return (
    <div>
      <Header title='TodoList'/>
      <Search />
      <MenuOPtions />
      <List />
    </div>
  )
}

export default App;