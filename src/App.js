
import './App.css';
import Section1 from './homePageComponents/Section1';
import Section2 from './homePageComponents/Section2';
import DrawerAppBar from './homePageComponents/DrawerAppBar';
import Footer from './homePageComponents/Footer';

function App() {
  return (
<div className='bodyHomePage'>  

<DrawerAppBar/> 
<Section1/> 
<Section2/> 
<Footer/> 

</div>
  );
}

export default App;
