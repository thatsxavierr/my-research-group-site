import React from 'react';
import '../App.css'; // or your global CSS

function ResourcesAndFacilities() {
  return (
    <>
      {/* Header Section on light/grey board */}
      <div className="page-content">
        <h1>Resources and Lab Facilities</h1>
        <p>
          This section highlights the cutting-edge resources and lab infrastructure available to the Oxide Epitaxy Group.
        </p>
      </div>

      {/* Main content container */}
      <div className="facility-list">
        {/* --- Facility 1 --- */}
        <div className="facility-section">
          <div className="facility-text-img">
            <div className="facility-text">
              <h2>PLD Systems</h2>
              <p>
                The PVD PLD system (Fig. 24a): This system includes an oxide deposition chamber with a six-target target carousel 
                (2-inch targets), a substrate heater reaching up to 1100°C, and a high-pressure reflection high-energy electron diffraction (RHEED) system capable of operating at 
                pressure of up to 300 mTorr.10,21 The sample manipulator can accommodate either one 2-inch or 1 inch diameter substrate or up to four 10 mm×10 mm substrates, enabling simultaneous 
                deposition of samples with identical composition but varying strain states.8,22
(2)	New TSST PLD system (Fig. 24b): Installed in August 2023, this newly commissioned system features an oxide deposition chamber 
with a five-target carousel (2-inch targets) and a rotating substrate heater capable of 1100°C. A key feature of this system is its tunable laser fluence range (0.5–10 J/cm2), ideal 
for systematically studying the impact of laser fluence on cation segregation, as proposed in Task 1.1

              </p>
              <p className="img-caption">
                Fig. 24. Two PLD systems including a PVD system (a) and a TSST system 
                (b) in the Energy Sciences Center are available for HEO thin film growth. 
              </p>
            </div>
            <img src="/assets/pld1.png" alt="Isotope Labeling Chamber" className="facility-img" />
          </div>
        </div>

        {/* --- Facility 2 --- */}
        <div className="facility-section">
          <div className="facility-text-img">
            <div className="facility-text">
              <h2>Oxygen-assisted MBE (OA-MBE) and XPS</h2>
              <p>
                MBE growth of the selected reference materials will be carried out using the combined 
                MBE/XPS system hosted in ESC.2-6,19,20 This system (Fig. 25, left) comprises an oxide deposition 
                chamber equipped with ten effusion cells, a four-pocket electron beam evaporator, 
                an electron cyclotron resonance plasma source for generating atomic oxygen, 
                a quartz crystal oscillator, a three-channel atomic absorption metal atom beam flux monitor 
                developed at PNNL, and a RHEED system. The MBE chamber is coupled to a high-performance 
                XPS chamber (Fig. 25, right). This XPS chamber features a VG/Scienta R3000 electron energy 
                analyzer, an MX650 monochromatic AlKα x-ray source, a VUV5000 monochromatic He I and II 
                ultraviolet source, a versatile five-axis (x, y, z, θ, ϕ) manipulator, 
                and Low-Energy Electron Diffraction optics
              </p>
              <p className="img-caption">
                Fig. 25. An XPS system appended to the MBE system in the ESC will be used for 
                XPS measurements of HEO thin films.
              </p>
            </div>
            <img src="/assets/mbexps.png" alt="ToF-SIMS at EMSL" className="facility-img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourcesAndFacilities;
