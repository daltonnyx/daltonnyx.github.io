import Hero from '../sections/Hero'
import Features from '../sections/Features'
import CoreConcepts from '../sections/CoreConcepts'
import Installation from '../sections/Installation'
import UseCases from '../sections/UseCases'
import Security from '../sections/Security'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <CoreConcepts />
      <UseCases />
      <Installation />
      <Security />
    </>
  );
};

export default HomePage;