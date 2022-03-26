import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import QnA from './components/qna/QnA';

function App() {  
  return (
    <div>
      <Header></Header>
      <Products></Products>
      <QnA></QnA>
    </div>
  );
}

export default App;


