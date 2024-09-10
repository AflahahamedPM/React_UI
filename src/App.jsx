import AboutSchoolContainer from "./AboutSchoolContainer";
import BenefitsContainer from "./BenefitsContainer";
import ContactContainer from "./ContactContainer";
import CourseContainer from "./CourseContainer";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="lg:overflow-x-hidden max-md:overflow-hidden">
      <Navbar />
      <AboutSchoolContainer />
      <CourseContainer />
      <BenefitsContainer />
      <ContactContainer />
      <Footer />
    </div>
  );
}
