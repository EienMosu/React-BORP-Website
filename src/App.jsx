import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import PlayerInfo from "./components/PlayerInfo";

import { info1, info2, info3, info4 } from "./data";

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Info
        title={info1.title}
        desc={info1.desc}
        image={info1.image}
        imageSide="left"
        width="450px"
        marginRight="150px"
        marginLeft="50px"
        background="#e9e9e9"
      />
      <Info
        title={info2.title}
        desc={info2.desc}
        image={info2.image}
        imageSide="right"
        width="300px"
        marginRight="50px"
        marginLeft="150px"
      />
      <Info
        title={info3.title}
        desc={info3.desc}
        image={info3.image}
        imageSide="left"
        width="300px"
        marginRight="150px"
        marginLeft="50px"
        background="#e9e9e9"
      />
      <Info
        title={info4.title}
        desc={info4.desc}
        image={info4.image}
        imageSide="right"
        width="350px"
        marginRight="50px"
        marginLeft="150px"
        text="left"
      />
      <PlayerInfo />
      <Footer />
    </div>
  );
};

export default App;
