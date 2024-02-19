import React from "react";
import TreatmentSchema from "../../images/omaveloxolone.jpg";
import "./speranta.css";

function Speranta() {
  return (
    <>
      <section id="exista-o-speranta">
        <div className="layout-container section">
          <div className="speranta-container">
            <div className="speranta-text text-block">
              <p className="title">Există o speranță</p>
              <p className="subtitle">greu de pronunțat, greu de procurat</p>
              <p className="text">
                În <span className="bolded-term">februarie 2023</span>, FDA
                (Food and Drug Administration) a aprobat primul și singurul
                tratament pentru bolnavii de Ataxie Friedreich. Acesta poartă
                numele de <span className="bolded-term">Omaveloxolone</span>{" "}
                (sau SKYCLARYS) și se adresează pacienților adulți, cu vârste
                începând de la 16 ani. Cum eu am 17, această categorie mă
                include și pe mine!
              </p>
              <p className="text">
                Medicamentul a fost dezvoltat inițial de către Reata
                Pharmaceuticals (companie aflată acum sub umbrela Biogen) și
                este un tratament oral, ce presupune administrarea zilnică a
                unei pastile cu 50mg de substanță activă. El trebuie luat
                încontinuu, costul anul fiind, momentan, de{" "}
                <span className="bolded-term">370.000$</span>. La momentul
                actual, în S.U.A. există pacienți care beneficiază de decontarea
                tratamentului, fapt care, din păcate, nu se întâmplă deocamdată
                și în Europa. De curând, Comisia Europeană a aprobat tratamentul
                pe teritoriul statelor membre, acest eveniment deschizând calea
                către o serie de negocieri în vederea posibilității decontării
                medicamentului în Franța și Germania. Până atunci, costul rămâne
                în sarcina pacientului, trecerea timpul fiind cel mai de temut
                inamic.
              </p>
              <p className="text">
                Scopul medicamentului este de{" "}
                <span className="bolded-term">a încetini progresia bolii</span>
                și, în combinație cu exercițiile fizice, să readucă într-o
                măsură abilitățile motrii pierdute. De asemenea, un obiectiv
                important este protejarea și susținerea funcțiilor de bază:
                respirație, funcția cardiacă, vorbirea.
              </p>
            </div>
            <div className="speranta-right-container">
              <div className="more-about-ataxia-card">
                <p>Informații importante și oficiale despre tratament: </p>
                <div className="flex-col-10">
                  <a
                    href="https://investors.biogen.com/news-releases/news-release-details/biogen-received-european-commission-approval-skyclarysr"
                    target="_blank"
                  >
                    Biogen
                  </a>

                  <a
                    href="https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-first-treatment-friedreichs-ataxia"
                    target="_blank"
                  >
                    Food and Drug Administration
                  </a>
                  <a
                    href="https://www.ema.europa.eu/en/medicines/human/EPAR/skyclarys"
                    target="_blank"
                  >
                    The European Medicines Agency
                  </a>
                  <a
                    href="https://www.cell.com/trends/pharmacological-sciences/fulltext/S0165-6147(23)00065-2"
                    target="_blank"
                  >
                    Trends in pharmacological sciences
                  </a>
                </div>
              </div>
              <div className="speranta-single-image">
                <img src={TreatmentSchema} alt="Treatment's activity schema" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Speranta;
