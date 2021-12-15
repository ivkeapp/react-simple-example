import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Time from './components/utils/Time';
import Article from './components/Article';
import HackerNews from './components/Weather';

function App() {

  document.body.style.backgroundColor = "#eeeeee";
  return (
    <div>
     <header className="main-header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 ">
                  <div className="menu-left text-start">
                    <Time/>
                  </div>
                </div>
                <div className="col-sm-6">
                    <div className="menu-right">
                        <ul className="list-group list-group-horizontal menu-items float-end">
                            <li className="list-group-item">Početna</li>
                            <li className="list-group-item">Kontakt</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div className="container main-section">
      <div className="row">
        <div className="col-sm-8">
          <h1 className="headline">New York Times</h1>
          <h4 className="headline">Vesti o Srbiji</h4>
        </div>
        <div className="col-sm-4">
          <h1 className="headline">Hacker News API</h1>
          <h4 className="headline">Search: redux</h4>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-8 ">
          <br></br>
          <Article/>
        </div>
        <div className="col-sm-4 sidebar">
          <br></br>
          <div className="weather"><HackerNews/></div>
          
        </div>
      </div>
      
    </div>
    <footer className="main-footer fixed-bottom">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 "><div className="menu-left logo text-start">Logo</div></div>
                <div className="col-sm-6">
                    <div className="menu-right">
                        <ul className="list-group list-group-horizontal menu-items float-end">
                            <li className="list-group-item">Home</li>
                            <li className="list-group-item">Portfolio</li>
                            <li className="list-group-item">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
