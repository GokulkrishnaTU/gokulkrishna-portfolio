import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative w-full">
      
      {/* 
        This tall container dictates the scroll distance of the application. 
        It scales how long the sequence scrubbing takes. 600vh was specified.
      */}
      <div className="h-[600vh] w-full relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      
      {/* 
        Sections are placed below the scrolling container. 
        As the user passes the 600vh height, these elements will scroll up normally. 
      */}
      <div className="relative z-20 bg-[#0A0A0A] w-full">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

    </main>
  );
}
