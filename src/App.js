import "./App.css";

import { Navbar, CTA, Brand } from "./components";
import {
  Blogs,
  Features,
  Footer,
  Header,
  Posibility,
  WhatGPT3,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
