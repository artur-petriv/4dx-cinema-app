import './scss/App.sass';
import Logo from './components/Logo';
import Search from './components/Search';
import HeaderButtons from './components/Header/HeaderButtons';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__container container">
          <Logo />
          <Search />
          <HeaderButtons />
        </div>
      </header>
    </div>
  );
}

export default App;
