import React from "react";
import Container from "@/component/Container/Container";

import HomeCardComponent from "@/component/HomeComponent/HomeCardComponent";
import HomeFeaturedDestinations from "@/component/HomeComponent/HomeFeaturedDestinations";
import HomeThumbnail from "@/component/HomeComponent/HomeThumbnail";
import HomeTravelGuides from "@/component/HomeComponent/HomeTravelGuides";

const Home: React.FC = () => {
  return (
    <main>
      <Container>
        <div className=" z-50">
          <HomeThumbnail />
          <HomeCardComponent />
          <HomeFeaturedDestinations />
          <HomeTravelGuides />
        </div>
      </Container>
    </main>
  );
};

export default Home;
