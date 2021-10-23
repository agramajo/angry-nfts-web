import React, {  } from "react";
import Landing from "./sections/landing";
import Progress from './sections/progress';
import Experience from './sections/experience';
import Details from './sections/details';
import Roadmap from './sections/roadmap';
import Comingsoon from './sections/comingsoon';
import Members from './sections/members';
import Footer from './sections/footer';
import Navigation from './sections/navigation';

const App = () => {

  return (
    <>
      <Navigation />

      <main>
        <Landing />
        <Experience />
        <Progress />
        <Details />
        <Roadmap />
        <Comingsoon />
        <Members />
      </main>

      <Footer />
    </>
  );
};

export default App;
