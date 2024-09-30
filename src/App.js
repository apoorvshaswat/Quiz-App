import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./output.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Category from "./components/Category";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Timer from "./components/Timer";
import Review from "./components/Review";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Category />
              <Footer />
            </>
          }
        />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route
          path="/result/:quizId"
          element={
            <>
              <Header />
              <Result />
            </>
          }
        />
        <Route
          path="/intro/:quizId"
          element={
            <>
              <Header />
              <Intro />
            </>
          }
        />
        <Route path="/timer/:quizId" element={<Timer />} />
        <Route
          path="/review/:quizId"
          element={
            <>
              <Header />
              <Review />
            </>
          }
        />
        <Route
          path="/leaderboard/:quizId"
          element={
            <>
              <Header />
              <Leaderboard />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
