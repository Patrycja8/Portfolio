import { BrowserRouter } from "react-router-dom";

import { About,Contact, Experience , Hero ,Navbar, Tech ,Works, StarsCanvas} from './components'

const App = () => {

  return (
   <BrowserRouter>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar /><br></br><br></br><br></br><br></br><br></br>
      <Hero />
    </div>
    <div className="pad-2"><br></br>
      <div id="about" className="pad-10" ></div>
    
      <About />

    <Experience />
    <Tech /><br></br><br></br><br></br>
   <div id="Work"></div>
    <Works />
     
    </div>
    

    <div className="relative z-0">
      <div id="contact"></div>
      <Contact />
      <StarsCanvas />

    </div>

   </div>
   
   
   </BrowserRouter>
      
  )
}

export default App
