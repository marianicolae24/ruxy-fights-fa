import React from "react";
import PointerIcon from "../../images/pointer-icon.png";
import RuxDancer from "../../images/rux-dancer.jpeg";
import RuxBike from "../../images/rux-bike.jpeg";
import RuxTeenagerOnChair from "../../images/rux-teenager-onchair.jpeg";
import RuxHelpedStanding from "../../images/rux-helped-standing.JPG";
import "./povestea-mea.css";

function PovesteaMea() {
  return (
    <>
      <section id="povestea-mea-section">
        <div className="layout-container section">
          <div className="povestea-container">
            <div className="povestea-text text-block">
              <p className="title">Salutare!</p>
              <p className="subtitle">
                și mulțumesc că ți-ai făcut timp să treci pe aici &lt;3{" "}
              </p>
              <p className="text">
                Numele meu este Ruxandra, mai exact Ruxandra Maria Popescu.
                Povestea mea începe în urmă cu vreo 17 ani când ei bine ... m-am
                născut. Deși poate părea incredibil, lucrurile n-au fost chiar
                așa de la început. Alergam, zburdam, exploram și copilăream,
                exact așa cum o făceai și tu, sper. Și poate chiar încă o mai
                faci. Cu timpul însă, modul în care mă mișcam a început să se
                diferențieze de al celorlalți copii, urmând ca la vârsta de 9
                ani să fiu diagnosticată oficial cu ceva ce n-am prea înțeles pe
                atunci: <span className="bolded-term">Ataxie Friedreich</span>.
                <p className="text">
                  Am să îți povestesc puțin mai târziu despre știința din
                  spatele acestor cuvinte, ideea principală fiind că din cauza
                  acestei afecțiuni cu nume greu de pronunțat, sunt nevoită să
                  îmi continui activitatea dintr-un scaun cu rotile. Verde.
                  Această schimbare s-a produs treptat, starea mea de sănătate
                  degradându-se de la o zi la alta. Deși un scaun cu rotile, la
                  prima vedere, indică imposibilitatea deplasării, Ataxia
                  Friedreich implică mult mai multe dezavantaje. Orice implică
                  coordonare are de suferit, gradual: de la mers, la vorbit,
                  scris, mâncat, respirat, înghițit, gesticulat, simțit.
                </p>
                <p className="text">
                  Problema principală obișnuia să fie, până nu demult, lipsa
                  unui tratament. Tot ceea ce puteam face (încă valabil) a fost
                  și este să lupt să-mi păstrez, pe cât de mult posibil, un
                  tonus muscular care să nu mă oblige la imobilitate totală și
                  definitivă, având astfel nevoie de kinetoterapie zilnică,
                  controale permanente, logopedie, înot și tot felul de alte
                  proceduri.. Nu a fost ușor, dar am cunoscut mult oameni
                  grozavi pe drum, care îmi spun adesea că îi inspir, iar asta
                  îmi dă putere!
                </p>
              </p>
            </div>
            <div className="povestea-pics">
              <div id="little-rux" className="img-container">
                <img className="pin" src={PointerIcon} alt="" />
                <img className="image" src={RuxDancer} alt="" />
              </div>

              <div id="rux-ski" className="img-container">
                <img className="pin" src={PointerIcon} alt="" />
                <img className="image" src={RuxBike} alt="" />
              </div>

              <div id="rux-stand" className="img-container">
                <img className="pin" src={PointerIcon} alt="" />
                <img className="image" src={RuxTeenagerOnChair} alt="" />
              </div>

              <div id="teenage-rux" className="img-container">
                <img className="pin" src={PointerIcon} alt="" />
                <img className="image" src={RuxHelpedStanding} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PovesteaMea;
