import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function PHY102() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="physics with electronics"
      session="2022/2023"
      semester="second semester"
      courseCode="PHY102"
      courseTitle="Waves and Thermal Physics"
      allowedTime="2hrs"
      instruction="answer question ONE and any other TWO questions from each SECTION"
    >
      <li>
        <h4 className="mb-2 font-bold">CONSTANTS:</h4>
        <p>
          Specific heat capacity of water: <i>4.185kj/kg°C</i>
        </p>
        <p>
          Velocity of sound in air: <i>340m/s</i>
        </p>
        <p>
          Volume of light in vacuum:{" "}
          <i>
            3*10<sup>8</sup>m/s
          </i>
        </p>
      </li>

      <li>
        <h4 className="mb-2 font-bold">
          SECTION A: VIBRATIONS AND WAVES - Answer Question 1 and any other TWO
          (2)
        </h4>
        <ol className="mx-4 space-y-5">
          <li>
            <h4 className="mb-2 font-bold">Question 1</h4>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                A string vibrates according to the equation{" "}
                <i className="whitespace-nowrap">
                  y = 0.6m&#123;&#91;(sin π/4 m<sup>-1</sup>)x&#93;&#91;(cos
                  40πs<sup>-1</sup>)t&#93;&#125;
                </i>
                . What is the amplitude of this wave?
                <Answers questionNumber="sectionA-1i" />
              </li>
              <li>
                What is the frequency of the wave in <strong>(i)</strong>
                <Answers questionNumber="sectionA-1ii" />
              </li>
              <li>
                An X-ray has a frequency of{" "}
                <i>
                  1 x 10<sup>18</sup>Hz
                </i>
                . What is its wavelength?
                <Answers questionNumber="sectionA-1iii" />
              </li>
              <li>
                Ultrasound wave travel in same direction with the particle
                vibration. True / False.
                <Answers questionNumber="sectionA-1iv" />
              </li>
              <li>
                Increasing the mass of a string decreases the frequency of the
                pulse passing throught it. True / False
                <Answers questionNumber="sectionA-1v" />
              </li>
              <li>
                Arrange these electrromagnetic waves in order of increasing
                wavelength: Visible spectrum, Gamma ray, Radio waves, X-rays.
                <Answers questionNumber="sectionA-1vi" />
              </li>
              <li>
                A wave has a wavelength of <i>20m</i> and frequency of{" "}
                <i>100Hz</i>. What is it&apos;s wave number?
                <Answers questionNumber="sectionA-1vii" />
              </li>
              <li>
                A 0.5m long thin uniform tube closed at one end is filled with
                air. Calculate the frequency of the first harmonics where
                resonance will occur.
                <Answers questionNumber="sectionA-1viii" />
              </li>
              <li>
                What will be the frequency if both ends of the tube are open in
                question <strong>(vii)</strong> above?
                <Answers questionNumber="sectionA-1ix" />
              </li>
              <li>
                In a setence interpret this equation:{" "}
                <i className="whitespace-nowrap">
                  E a A<sup>2</sup> sin<sup>2</sup> (wt + ø)
                </i>
                <Answers questionNumber="sectionA-1x" />
              </li>
            </ol>
          </li>
          <li>
            <h4 className="mb-2 font-bold">Question 2</h4>
            <ol className="mx-4 list-[lower-alpha]">
              <li>
                Give five differences between travelling wave and standing wave
                <Answers questionNumber="sectionA-2a" />
              </li>
              <li>
                What is the velocity of a wave in a string of legnth <i>1m</i>{" "}
                and mass of <i>20g</i> which has tension of <i>200N</i> in it?
                <Answers questionNumber="sectionA-2b" />
              </li>
            </ol>
          </li>
          <li>
            <h4 className="mb-2 font-bold">Question 3</h4>
            <ol className="mx-4 list-[lower-alpha]">
              <li>
                Briefly explain why microwave oven is more efficient than
                conventional oven.
                <Answers questionNumber="sectionA-3a" />
              </li>
              <li>
                A string fixed at both ends has a fundamental frequency of
                <i>200Hz</i>. The wave speed on the string is <i>1000m/s</i>.
                What is the lenghth of the string?
                <Answers questionNumber="sectionA-3b" />
              </li>
            </ol>
          </li>
          <li>
            <h4 className="mb-2 font-bold">Question 4</h4>
            <ol className="mx-4 list-[lower-alpha]">
              <li>
                What do you understand by Intensity of a sound?
                <Answers questionNumber="sectionA-4a" />
              </li>
              <li>
                Write the equation of a travelling wave in a positive
                x-direction having amplitude of <i>5m</i>, a wavelength of{" "}
                <i>20m</i> and frequency of <i>100Hz</i>.
                <Answers questionNumber="sectionA-4b" />
              </li>
              <li>
                Show that <i>y = asin(kx - wt)</i> can be written in the form{" "}
                <i>
                  y = asin k(x - vt)
                  <Answers questionNumber="sectionA-4c" />
                </i>
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">
          SECTION B: THERMAL PHYSICS - Answer Question 1 and any other TWO (2)
        </h4>
        <ol className="mx-4 space-y-5">
          <li>
            <h4 className="mb-2 font-bold">Question 1</h4>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                _______ is an instrument used to measure gas pressure?
                <Answers questionNumber="sectionB-1i" />
              </li>
              <li>
                The upper fixed point of an unmarked thermometer can be
                determined using _______
                <Answers questionNumber="sectionB-1ii" />
              </li>
              <li>
                The process where solid change to liquid is known as _______
                <Answers questionNumber="sectionB-1iii" />
              </li>
              <li>
                _______ is an instrument used for measuring atmospheric pressure
                <Answers questionNumber="sectionB-1iv" />
              </li>
              <li>
                _______ is an apparatus used in experimnent that involves the
                exchange of heat between two bodies at different temperatures
                <Answers questionNumber="sectionB-1v" />
              </li>
              <li>
                The root-mean square speed for average kinetic energy is given
                by the equation (<i>rms</i>) _______
                <Answers questionNumber="sectionB-1vi" />
              </li>
              <li>
                Thermometric liquid are _______ and _______
                <Answers questionNumber="sectionB-1vii" />
              </li>
              <li>
                Water expands on _______ and ice contracts on _______
                <Answers questionNumber="sectionB-1viii" />
              </li>
              <li>
                Thermodynamics deals with the inter-relationship between _______
                and _______
                <Answers questionNumber="sectionB-1ix" />
              </li>
              <li>
                The three types of temperature scale are _______ and _______
                <Answers questionNumber="sectionB-1x" />
              </li>
            </ol>
          </li>
          <li>
            <h4 className="mb-2 font-bold">Question 2</h4>
            <ol className="mx-4 list-[lower-alpha]">
              <li>
                State two advantages of alcohol over mercury as a thermometric
                liquid
                <Answers questionNumber="sectionB-2a" />
              </li>
              <li>
                Draw a labelled diagram of a clinical thermometer and explain
                how it works
                <Answers questionNumber="sectionB-2b" />
              </li>
              <li>
                A constant volume gas thermometer records a pressure of{" "}
                <i>250mmHg</i>
                at <i>0°C</i> and <i>290mmHg</i> at <i>100°C</i>. Calculate the
                room when the gas pressure is <i>262mmHg</i>.
                <Answers questionNumber="sectionB-2c" />
              </li>
            </ol>
          </li>
          <li>
            <h4 className="mb-2 font-bold">Question 3</h4>
            <ol className="mx-4 list-[lower-alpha]">
              <li>
                Define the following terms clearly:
                <ol className="mx-4 list-[lower-roman]">
                  <li>Specific heat</li>
                  <li>Specific heat capacity</li>
                  <li>Heat capacity</li>
                </ol>
                <Answers questionNumber="sectionB-3a" />
              </li>
              <li>
                Calculate the temperature change when <i>1000J</i> of heat is
                suppled to <i>100g</i> of water
                <Answers questionNumber="sectionB-3b" />
              </li>
            </ol>
          </li>
          <li>
            <h4 className="mb-2 font-bold">Question 4</h4>
            <ol className="mx-4 list-[lower-alpha]">
              <li>
                State five assumptions of the kinetic molecular theory of gas
                <Answers questionNumber="sectionB-4a" />
              </li>
              <li>
                A molecule of gas has rms speed of <i>500m/s</i> at <i>20°</i>.
                What is its
                <i>rms</i> speed at <i>80°C</i>.
                <Answers questionNumber="sectionB-4b" />
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </Questions>
  );
}
