import FixedNav from "../components/FixedNav";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

const Home = () => {
  return (
    <>
      <FixedNav />
      <main className="flex flex-col scroll-smooth">
        <section id="hero"><Hero /></section>
        <section id="projects"><Projects /></section>
      </main>
    </>
  );
};

export default Home;