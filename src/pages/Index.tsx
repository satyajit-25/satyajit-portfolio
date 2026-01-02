import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageLoader from "@/components/PageLoader";

const Index = () => {
  return (
    <PageLoader delay={400}>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main id="main-content" role="main" tabIndex={-1}>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </PageLoader>
  );
};

export default Index;
