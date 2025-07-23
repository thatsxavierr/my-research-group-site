import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Home Page Content */}
      <main className="home-content">
        <h1 className="intro-heading">Welcome to the Oxide Epitaxy Group!</h1>
        <p className="intro-text">
          <em>
            We are dedicated to exploring [specific research topic/field]. 
            Through collaboration and innovation, our team is committed to solving 
            [specific challenge/goal]. Learn more about our work and connect with us today!

            Draft:
            The planned research will benefit from access to state-of-the-art resources located within
             the Energy Sciences Center (ESC), a new facility that opened in 2022 on the PNNL-Richland
              campus. Spanning 140,000 square feet, the ESC is built to support diverse scientific 
              investigations, offering a combination of advanced laboratories, adaptable 
              collaborative spaces, offices, and meeting rooms. It serves as a hub for around 
              200 researchers, visiting experts, engineers, and staff. Designed to encourage 
              interdisciplinary interaction, the ESC provides an excellent setting for engaging 
              students, interns, and university partners in meaningful research. In addition to 
              the ESC, the project will utilize specialized instrumentation at the Environmental
               Molecular Sciences Laboratory (EMSL), a national user facility supported by the 
               Department of Energy’s Office of Science, Biological and Environmental Research 
               program. PNNL also maintains extensive machine and electronics shops that will 
               support the technical needs of the project. Together, these facilities create an 
               exceptional environment conducive to groundbreaking research and scientific advancement.
          </em>
        </p>
      </main>
    </div>
  );
}

export default Home;
