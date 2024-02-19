import React from "react";
import "./support.css";

function Support() {
  return (
    <>
      <section id="support">
        <div className="layout-container section">
          <div className="support-container">
            <div
              className="support text-block"
              style={{ paddingBottom: "0px" }}
            >
              <p className="title" style={{ textAlign: "center" }}>
                Dacă vrei să mă susții
              </p>
              <p className="subtitle" style={{ textAlign: "center" }}>
                a little goes a long way
              </p>
              <p className="text half-size">
                Știu că probabil suma necesară îți pare un vis irealizabil. Însă
                dacă și tu crezi în miracole, așa cum cred eu, te rog mult să
                îndrăznești să crezi alături de mine! Mă poți susține în{" "}
                <span className="bolded-term">următoarele moduri</span>:
              </p>
            </div>

            <div className="how-to-support">
              <p className="text border-bt">1. Un gând bun</p>
              <p className="text border-bt">
                2. O postare pe orice platformă de social-media și/sau un share
                al acestei pagini.
              </p>
              <div className="donatie-asociatie border-bt">
                <p className="text">
                  3. O donație în contul{" "}
                  <span style={{ fontWeight: "900" }} className="bolded-term">
                    asociației A.S.R.A
                  </span>
                  , menționând numele meu: Ruxandra Maria Popescu
                </p>
                <p className="text" style={{ fontStyle: "italic" }}>
                  {" "}
                  Vei observa probabil că acestă asociație pare să nu aibă nimic
                  în comun cu cazul meu.{" "}
                  <span className="bolded-term"> Nu te îngrijora! </span>
                  Ea a fost înființată de către nașa mea, însă este folosită și
                  pentru susținerea cazului meu, ca să nu mai fim nevoiți să
                  trecem prin procesul birocratic complicat de înființare a unei
                  noi asociații. Te asigur că toate donațiile care îmi poartă
                  numele vor ajunge la mine.
                </p>
                <div className="bank-details">
                  <p className="text">Cod IBAN: </p>
                  <p className="no-underline">RO45 INGB 0000 9999 0499 7735</p>
                  <p className="text" style={{ color: "#032443" }}>
                    ING Bank
                  </p>
                </div>
              </div>
              <p className="text border-bt">
                4. Un contract de sponsorizare încheiat cu asociația A.S.R.A.
                Pentru asta, eu îți voi trimite un astfel de document, dacă mă
                vei contacta!
              </p>
              <p className="text border-bt">
                5. Redirecționarea impozitului pe venit către asociație
              </p>

              <div className="donatie-revolut border-bt">
                <p className="text">
                  6. O donație în contul de Revolut al mamei mele.
                </p>
                <div className="bank-details">
                  <p className="text">Cod IBAN: </p>
                  <p className="no-underline">RO66BREL0005526861800100</p>
                  <p className="text">Titular: Sixt Alina</p>
                  <p className="text" style={{ color: "#032443" }}>
                    Revolut
                  </p>
                </div>
              </div>
            </div>
            <div className="contact text-block">
              <p className="contact-text">Contact</p>
              <div className="contact-card">
                <p className="text">
                  Pentru orice nelămurire sau idee pe care o ai, ne-am bucura să
                  ne contactezi! Pentru asta, îți las aici{" "}
                  <span className="bolded-term">
                    detaliile de contact ale mamei mele
                  </span>
                  , care se ocupă de toate aspectele administrative și este,
                  totodată, aliatul meu numărul unu.
                </p>
                <p className="text ">
                  <span className="pink-bg">Nume: </span> Sixt Alina
                </p>
                <p className="text ">
                  <span className="pink-bg">Număr de telefon:</span>{" "}
                  <span className="no-underline">0766324442</span>
                </p>
                <p className="text ">
                  <span className="pink-bg">Email:</span> alina.sixt@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;
