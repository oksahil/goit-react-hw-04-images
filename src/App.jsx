import PostFind from 'modules/PostFind/PostFind';
import MainMenu from 'modules/MainMenu/MainMenu';
import mainMenu from "./data/mainMenu.json";

import './index.css';

function App() {
  return (
    <div className="App">
      <MainMenu items={mainMenu} />
        <PostFind/>
    </div>
  );
};

export default App;