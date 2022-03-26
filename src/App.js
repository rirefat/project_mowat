import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {  
  return (
    <div>
      <Header></Header>
      <Products></Products>
    </div>
  );
}

export default App;


// Rough Part
// var objects = [
//   {username: "jon", count: 5},
//   {username: "sally", count: 7},
//   {username: "mark", count: 9},
// ];
// var randomObject = objects[Math.floor(Math.random() * objects.length)];
// console.log(randomObject);