import './scss/App.sass';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__container container">
          <Logo />

          <div className="search">
            <svg
              className="search__icon"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_550)">
                <path
                  d="M6.69295 13.18C8.02131 13.1797 9.3114 12.735 10.3578 11.9167L13.6477 15.2066L14.7059 14.1484L11.416 10.8585C12.2347 9.81202 12.6797 8.52164 12.68 7.19293C12.68 3.89182 9.99407 1.20587 6.69295 1.20587C3.39183 1.20587 0.705887 3.89182 0.705887 7.19293C0.705887 10.4941 3.39183 13.18 6.69295 13.18ZM6.69295 2.70264C9.16935 2.70264 11.1832 4.71654 11.1832 7.19293C11.1832 9.66933 9.16935 11.6832 6.69295 11.6832C4.21655 11.6832 2.20265 9.66933 2.20265 7.19293C2.20265 4.71654 4.21655 2.70264 6.69295 2.70264Z"
                  fill="#9898AE"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_550">
                  <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>

            <input className="search__input" type="text" name="search" />
          </div>

          <div className="header-buttons">
            <button className="button-icon">
              <svg
                className="button-icon__icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.4955 9C4.4955 11.4849 6.5169 13.5063 9.0018 13.5063C11.4867 13.5063 13.5081 11.4849 13.5081 9C13.5081 6.5151 11.4867 4.4937 9.0018 4.4937C6.5169 4.4937 4.4955 6.5151 4.4955 9ZM9.0018 6.2937C10.494 6.2937 11.7081 7.5078 11.7081 9C11.7081 10.4922 10.494 11.7063 9.0018 11.7063C7.5096 11.7063 6.2955 10.4922 6.2955 9C6.2955 7.5078 7.5096 6.2937 9.0018 6.2937ZM8.1 15.3H9.9V18H8.1V15.3ZM8.1 0H9.9V2.7H8.1V0ZM0 8.1H2.7V9.9H0V8.1ZM15.3 8.1H18V9.9H15.3V8.1ZM1.9989 14.7267L3.9069 12.8169L5.1804 14.0895L3.2724 15.9993L1.9989 14.7267ZM12.8178 3.9096L14.7276 1.9998L16.0002 3.2724L14.0904 5.1822L12.8178 3.9096ZM3.9096 5.1831L1.9998 3.2733L3.2733 2.0007L5.1813 3.9105L3.9096 5.1831ZM16.0002 14.7276L14.7276 16.0002L12.8178 14.0904L14.0904 12.8178L16.0002 14.7276Z"
                  fill="#9898AE"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
