import Profile from "./componoets/Profile";
import "./App.css";
import Header from "./componoets/Header";
import Main from "./componoets/Main";

import Footer from "./componoets/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main state={props.state} />} />
          <Route
            path="/profile"
            element={<Profile profileData={props.state.profilePage} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
