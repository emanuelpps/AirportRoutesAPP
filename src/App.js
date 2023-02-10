import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import TitleText from "./components/Title/TitleText";
import { SelectionMenu } from "./components/SelectionMenu/SelectionMenu";
import Footer from "./components/Footer/Footer";
import AppImage from './components/AppImage/AppImage';




function App(){

    return(
        
<>
    <NavBar />
    <AppImage/>
    <TitleText/>
    <SelectionMenu />
    <Footer/>
</>
    );
}

export default App;