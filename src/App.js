import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import Products from "./components/Products";
import Recomandation from "./components/Recomandation";
import Newslatter from "./components/Newslatter";
import Footer from "./components/Footer";
import Landing from "./screen/Landing";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screen/About";
import Signin from "./screen/Signin";
import { useEffect } from "react";
import Create from "./screen/Create";
import Layout from "./utils/Layout";
import Market from "./screen/Market";
import GetBetterDeals from "./screen/GetBetterDeals";
import Connect from "./screen/Connect";
import CreateNFT from "./screen/CreateNFT";
import Ranking from "./screen/Ranking";
import Game from "./screen/Game";
import Music from "./screen/Music";
import Art from "./screen/Art";
import Search from "./screen/Search";
import Blog from "./screen/Blog";
import SearchItem from "./screen/SearchItem";
import SearchItemMore from "./screen/SearchItemMore";
import Profile from "./components/Profile";
import Delwat from "./screen/Setting";
import SearchUser from "./screen/SearchUser";
import Setting from "./screen/Setting";

function App() {
  useEffect(() => {
    //add local storage
    localStorage.getItem("logedIn") === "false" &&
      localStorage.setItem("logedIn", false);
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />}>
            {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/getbetterdeals" element={<GetBetterDeals />}></Route>
          <Route path="/connect" element={<Connect />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/setting" element={<Setting />}></Route>

          <Route path="/market" element={<Market />}></Route>
          <Route path="/art" element={<Art />}></Route>
          <Route path="/music" element={<Music />}></Route>
          <Route path="/game" element={<Game />}></Route>

          <Route path="/search" element={<Search />}></Route>
          <Route path="/user" element={<SearchUser />}></Route>
          <Route path="/SearchItem" element={<SearchItem />}></Route>
          <Route path="/moreAboutItem" element={<SearchItemMore />}></Route>

          <Route path="/create" element={<Create />}></Route>
          <Route path="/createnft" element={<CreateNFT />}></Route>

          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
