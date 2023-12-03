import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function PHY104() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="physics with electronics"
      session="2022/2023"
      semester="second semester"
      courseCode="PHY104"
      courseTitle="General Modern Physics"
      allowedTime="2hrs"
      instruction="answer question ONE and any other TWO questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (Compulsory)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            A tungsten filament consists of a cylindrical cathode 5cm long and
            0.01cm in diameter. If the operating temperature is 2500K, find the
            emission current density, given that the Richardson constant = 60.2
            X 10<sup>4</sup> A/m<sup>2</sup>/K<sup>2</sup>, the work function ø
            = 4.517eV <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Sketch and briefly explain the graph for:
            <ol className="mx-4 list-[lower-roman]">
              <li>Kinetic energy versus frequency</li>
              <li>Photocurrent versus intensity</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            List <strong>three</strong> properties of Xray.{" "}
            <strong className="whitespace-nowrap">(4.5 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
          <li>
            Briefly explain why a radium sticker grows in the dark.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="1d" />
          </li>
          <li>
            Sketch the circuit symbols of an NPN and PNP transfer showing the
            directions of the various currents.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="1e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Briefly explain photoelectric effect.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Calculate the wavelength of a photon which has an energy of 2.4eV
            (Plancks constant = 6.62 X 10<sup>-34</sup> Js, speed of light =
            3X10<sup>8</sup>m/s){" "}
            <strong className="whitespace-nowrap">(6.5 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            Given that λ<sub>th</sub> is the threshold wavelength for
            photoelectric effect to take place. If light of wavelength λ is
            shone on a material, explain what happens when:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                λ &lt; λ<sub>th</sub>
              </li>
              <li>
                λ &gt; λ<sub>th</sub>
              </li>
              <li>
                λ = λ<sub>th</sub>
              </li>
            </ol>
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Sketch and briefly explain the Bohrs model of an atom.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Briefly discuss the two ways through which Xrays can be produced.{" "}
            <strong className="whitespace-nowrap">(9 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            An Xray tube works on 60,000V. Calculate the minimum wavelength of
            the Xray emitted in it.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Radioactivity results from instability of the nucleus. Highlight the
            conditions that can lead to this instability.{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Briefly explain Beta decay.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
          <li>
            The half-life period of radium is 1620 years. In how many years will
            one gram of pure radium lose one centigram.{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Write short notes on the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>majority carriers</li>
              <li>minority carriers</li>
              <li>depletion layer</li>
            </ol>
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            With the aid of appropriate sketches with circuit symbols, briefly
            explain forward and reverse bias for a PN junction diode.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            Briefly discuss the structure of a bipolar junction transistor.{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
