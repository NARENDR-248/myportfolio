import About from "./component/About";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import SocialLinks from "./component/SocialLinks";

export default function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks />
      <About />
    </div>
  )
}