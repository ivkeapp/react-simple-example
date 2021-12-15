import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import Time from './components/utils/Time';
import Article from './components/Article';
import Weather from './components/Weather';

function App() {
  
  const [articleData, setArticleData] = useState([]);

  const fetchArticleData = async () =>  {
    return await fetch("https://api.nytimes.com/svc/semantic/v2/concept/name/nytd_geo/Serbia?fields=article_list&api-key=tn9ksrf9EzaNRCVwnIsQnIhItLHHf7a4")
          .then((response) => response.json())
          .then((data) => setArticleData(data.results[0].article_list.results));
  }
  

  useEffect(() => {
    document.body.style.backgroundColor = "#eeeeee";
    fetchArticleData();
  }, []);

  
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
        <h1 className="text-center headline">New York Times</h1>
          <h4 className="text-center headline">Vesti o Srbiji</h4>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-8 ">
          <br></br>
          <Article data={articleData}/>
        </div>
        <div className="col-sm-4 sidebar">
          <br></br>
          <Weather/>
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
