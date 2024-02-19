import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import FirstIcon from "../../images/rux-robanescu.png";
import "./ataxia.css";

function Ataxia() {
  const postUrl =
    "https://www.instagram.com/reel/CWFqoYaqRFh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
  return (
    <>
      <section id="ataxia-freidreich-section">
        <div className="layout-container section">
          <div className="ataxia-container">
            <div className="ataxia-left-container">
              <div className="more-about-ataxia-card">
                <p>Dacă vrei să intri în detaliile științifice: </p>
                <div className="flex-col-10">
                  <a
                    href="https://www.ninds.nih.gov/health-information/disorders/friedreich-ataxia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    National Institute of Neurological Disorders and Stroke
                  </a>
                  <a
                    href="https://en.wikipedia.org/wiki/Friedreich%27s_ataxia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Wikipedia
                  </a>
                  <a
                    href="https://www.physio-pedia.com/Friedreich%27s_Ataxia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Physio-pedia
                  </a>
                </div>
              </div>
              <div className="ataxia-media">
                <div className="from-instagram">
                  <InstagramEmbed url={postUrl} />
                </div>
                <div className="single-image">
                  <img
                    src={FirstIcon}
                    alt="Ruxy standing, assisted by advanced medical robot"
                  />
                </div>
              </div>
            </div>

            <div className="ataxia-text text-block">
              <p className="title">Ataxia Friedreich</p>
              <p className="subtitle">ce mai e și asta? </p>
              <p className="text">
                <span className="bolded-term">Ataxia Friedreich</span> este o
                boală ereditară rară, neurodegenerativă. Cu alte cuvinte,
                produce degenerarea progresivă a sistemului nervos, ca urmare a
                producerii deficitare a unei proteine numită frataxină. Această
                proteină este responsabilă de o serie de funcții celulare, care
                au în special legătură cu producția energiei.
                <p className="text">
                  {" "}
                  În timp, fibrele nervoase de la nivelul coloanei vertebrale și
                  nervii periferici se degradează și devin din ce în ce mai
                  subțiri. Nervii periferici sunt responsabili de transmiterea
                  informației de la creier către corp și invers. Acesta este
                  procesul prin care se realizează punerea la treabă a
                  mușchilor. Din acest motiv, eu mă confrunt cu o serie de
                  probleme de coordonare, din ce în ce mai agravate. O problemă
                  destul de importantă o reprezintă faptul că nu doar mișcarea
                  membrelor este afectată, ci și a organelor interne, cum ar fi
                  inima. De asemenea, lucruri aparent simple, precum respirația
                  și vorbitul sunt extrem de îngreunate.
                </p>
                <p className="text">
                  Practic, creierul meu trimite semnalele necesare pentru
                  realizarea acțiunilor cotidiene, însă drumul pe care trebuie
                  să îl străbată acestea este anevoios, iar ridicarea unui deget
                  poate fi, astfel, o adevărată provocare.
                </p>
                <p className="text">
                  Viteza cu care evoluează boala este diferită de la persoană la
                  persoană, însă în general, într-un interval de 10-20 de ani de
                  la apariția primelor simptome, pacientul ajunge imobilizat
                  într-un scaun cu rotile.
                  <span className="bolded-term">
                    Eu am ajuns imobilizată în scaun la vârsta de 12 ani și
                    depun eforturi neîncetate pentru a face kinetoterapie.
                    Altfel, aș pierde total abilitatea de a mă mișca.
                  </span>
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ataxia;
