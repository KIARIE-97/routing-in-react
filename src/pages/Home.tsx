import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Container from "../components/Container"
import Joinus from "../components/Joinus"
const Home = () => {
  return (
    <div>
      <Container className="bg-[#c2b73f] flex flex-col gap-4">
        <Navbar />
        <Hero />
        <Joinus />
        <Footer />
        </Container>
    </div>
  )
}

export default Home