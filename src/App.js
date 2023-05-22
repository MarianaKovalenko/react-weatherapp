import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <Header />
      <Form />
      <Main />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
