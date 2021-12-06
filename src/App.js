import "./App.css";
import Todo from "./TodoList/Todolist";
import SignupForm from "./Signup/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/login";
import Movie from "./Movies/movies";
import movieDetails from "./Movies/movieDetails";
import ContactUs from "./pages/Contact-Us/Contact-us";
import Navb from "./components/Navbarr/Navbarr";
import Favourite from "./Movies/favourite";
import { useSelector } from "react-redux";
import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const language = useSelector((state) => state.language.lang);
  const [lang, setLang] = useState("EN");

  return (
    <div
      dir={language === "EN" ? "ltr" : "rtl"}
      className={language === "EN" ? "text-left" : "text-right"}
    >
      <Router>
        <LanguageProvider value={{ lang, setLang }}>
          <Navb />
          <div className="containerr ">
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={SignupForm} />
              <Route path="/Todo" exact component={Todo} />
              <Route path="/movies" exact component={Movie} />
              <Route path="/movieDetails/:id" exact component={movieDetails} />
              <Route path="/favourite" exact component={Favourite} />
              <Route path="/Contact-us" exact component={ContactUs} />
            </Switch>
          </div>
        </LanguageProvider>
      </Router>
    </div>
  );
}

export default App;
