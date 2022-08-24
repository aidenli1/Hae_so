import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Border from './components/views/NavBar/border/Border'
import Exhibition from "./components/views/Exhibition/Exhibition";
import Page1 from "./components/views/Exhibition/ExhibitionPage/Page1"
import Page2 from "./components/views/Exhibition/ExhibitionPage/Page2"
import Page3 from "./components/views/Exhibition/ExhibitionPage/Page3"

import Auth from './hoc/auth'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} /> */}

        <Route exact path="/" element={Auth(LandingPage, null)} />
        <Route exact path="/login" element={Auth(LoginPage, false)} />
        <Route exact path="/register" element={Auth (RegisterPage, false)} />
        <Route exact path="/border" element={Auth (Border, null)} />
        <Route exact path="/exhibition" element={Auth (Exhibition, null)} />
        <Route exact path="/page1" element={Auth (Page1, null)} />
        <Route exact path="/page2" element={Auth (Page2, null)} />
        <Route exact path="/page3" element={Auth (Page3, null)} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;