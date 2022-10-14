import { Header } from './components/Header';
import { Search } from './components/Search';
import { List } from './components/List';

import './App.css';
import { MenuOPtions } from './components/MenuOptions';

const App = () => {
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