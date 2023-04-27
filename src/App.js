
// import './App.css';
import './styles/style.css';
import Section1 from './homePageComponents/Section1';
import Section2 from './homePageComponents/Section2';
import DrawerAppBar from './homePageComponents/DrawerAppBar';
import Footer from './homePageComponents/Footer';
import Section3 from './homePageComponents/Section3';

function App() {
  return (
<div className='bodyHomePage'>  
 <DrawerAppBar/> 
<Section1/> 
<Section2/> 
<Section3/>
<Footer/> 

</div>
  );
}

export default App;
