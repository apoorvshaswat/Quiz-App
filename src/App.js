import logo from "./logo.svg";
import "./output.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Category from "./components/Category";
import Quiz from "./components/Quiz";

import Result from "./components/Result";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Category />
                {/* <Footer /> */}
              </>
            }
          ></Route>
          <Route path="/quiz/:quizId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
