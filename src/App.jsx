import NavBar from './components/NavBar/NavBar';
import Video from "./components/Video/Video";
import PovesteaMea from "./components/PovesteaMea/PovesteaMea";
import Ataxia from './components/Ataxia/Ataxia';
import Speranta from './components/Speranta/Speranta';
import Support from './components/Support/Support';


import './App.css'

function App() {

  return (<>
	<NavBar/>
	<main>
		<Video/>
		<PovesteaMea/>
		<Ataxia/>
		<Speranta/>
		<Support/>
	</main>
  </>
	
  )
  
       
  
}

export default App
