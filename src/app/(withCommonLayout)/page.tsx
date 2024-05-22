import Container from "@/component/Container/Container";
import HomeCardComponent from "@/component/HomeComponent/HomeCardComponent";
import HomeThumbnail from "@/component/HomeComponent/HomeThumbnail";

export default function Home() {
  return (
    <main>
      <Container>
        <HomeThumbnail />
      </Container>
      <HomeCardComponent />
    </main>
  );
}
