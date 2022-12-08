import { useState } from 'react';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';

function Contents({ listName }) {
  // const listNameArray = ['one', 'two', 'three', 'four', 'five'];
  return (
    <>
      {listName === 'one' ? <One /> : <Five />}
      {listName === 'two' ? <Two /> : <Five />}
      {listName === 'three' ? <Three /> : <Five />}
      {listName === 'four' ? <Four /> : <Five />}
    </>
  );
}

function Navbar() {
  const [listName, setListName] = useState('one');
  const handleChangeId = (e) => {
    setListName(e.target.id);
  };
  return (
    <>
      <nav>
        <ul>
          <li
            id="one"
            style={listName === 'one' ? { color: 'red' } : { color: 'black' }}
            onClick={handleChangeId}
          >
            One
          </li>
          <li
            id="two"
            style={listName === 'two' ? { color: 'red' } : { color: 'black' }}
            onClick={handleChangeId}
          >
            Two
          </li>
          <li
            id="three"
            style={listName === 'three' ? { color: 'red' } : { color: 'black' }}
            onClick={handleChangeId}
          >
            Three
          </li>
          <li
            id="four"
            style={listName === 'four' ? { color: 'red' } : { color: 'black' }}
            onClick={handleChangeId}
          >
            Four
          </li>
        </ul>
      </nav>
      <Contents listName={listName} />
    </>
  );
}

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
