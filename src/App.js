import React from "react";
import Comingsoon from './sections/comingsoon';
import Details from './sections/details';
import Experience from './sections/experience';
import Footer from './sections/footer';
import Landing from "./sections/landing";
import Members from './sections/members';
import Navigation from './sections/navigation';
import Progress from './sections/progress';
import Roadmap from './sections/roadmap';

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
