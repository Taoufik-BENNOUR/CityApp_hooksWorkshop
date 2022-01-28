import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AddNewCity from './Components/AddNewCity';
import CitiesContainer from './Components/CitiesContainer';
import Header from './Components/Header';
import { data } from './data';
import Footer from './Components/Footer';


function App() {
const [cities, setcities] = useState(data);
const AddNew=(x)=>{
  setcities([...cities,x])
}
const filter=(hedha)=>{
  if(hedha===''){
    setcities(data)
  }
  else {
    setcities(cities.filter(el=>el.city.toLowerCase().includes(hedha.toLowerCase())))
  }
}
  return (
    <>
     <Header filter={filter}/>
     <AddNewCity AddNew={AddNew} />
     <CitiesContainer cities={cities} />
     <Footer />
    </>
  );
}

export default App;
