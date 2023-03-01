import './App.css';
import './components/styles/Main.css'
import './components/styles/Footer.css'
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="bt_card">
        <div className="main-container">
          <Header/>
          <Main/>
          <Footer/>
      </div>
    </div>
    );
}

export default App;