
import './App.css';
import Section1 from './homePageComponents/Section1';
import Section2 from './homePageComponents/Section2';
import DrawerAppBar from './homePageComponents/DrawerAppBar';

function App() {
  return (
<div className='bodyHomePage'>  
 <DrawerAppBar/> 
<Section1/> 
<Section2/> 

</div>
  );
}

export default App;
