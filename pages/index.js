
import Header from '../components/header'
import Footer from "../components/footer";
import Card from "../components/card";

const Home = () => {
  return (
    <>
     <Header/>
      <main>
        <section className="home-cover">
          <img src="/images/home-cover.png" alt="" />
          <div className="overlay">
            <div className="container">
              <h1>Simple Blog.</h1>
              <p>A blog created by FikraCamps</p>
            </div>
          </div>
        </section>
        <section className="container blog-list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
