import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <PopularCourses />
      <TrustedBy />
      <Testimonials />
      <Footer />
    </div>
  );
}
