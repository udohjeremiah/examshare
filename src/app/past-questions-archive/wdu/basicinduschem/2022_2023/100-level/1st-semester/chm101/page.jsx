import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CHM303() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="basic and industrial chemistry"
      session="2022/2023"
      semester="first semester"
      courseCode="CHM101"
      courseTitle="general chemistry I"
      allowedTime="2hrs: 30mins"
      instruction="attempt FOUR questions only"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State Daltons atomic theory and its modifications{" "}
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Define:
            <ol className="mx-4 list-[lower-roman]">
              <li>atom</li>
              <li>molecule</li>
              <li>ion</li>
            </ol>
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            Briefly describe any three quantum numbers{" "}
            <strong className="whitespace-nowrap">(6.5 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                A compound is found to contain 26.56% potassium, 35.41%
                chromium, and the remainder oxygen. Find its empirical formula
                (K=39, Cr=52, O=16){" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="2ai" />
              </li>
              <li>
                Determine the molecular formula of the compound with an
                empirical formula of CH and a formula mass of 78 (C=12, H=1){" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="2aii" />
              </li>
            </ol>
          </li>
          <li>
            Write the electronic configuration of the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Ca</li>
              <li>
                Ca<sup>2+</sup>
              </li>
              <li>
                Zn<sup>2+</sup>
              </li>
            </ol>
            <strong className="whitespace-nowrap">(4.5 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            Consider the equation CuO + Zn &rarr; ZnO + Cu
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Write the oixdation and reduction half reaction{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="2ci" />
              </li>
              <li>
                Identify the oxidizing and reducing agents{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="2cii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Balance the redox reaction in an acidic medium Cr<sub>2</sub>O
                <sub>7</sub>
                <sup>2+</sup> + Fe<sup>2+</sup> &rarr; Cr<sup>3+</sup> + Fe
                <sup>3+</sup>{" "}
                <strong className="whitespace-nowrap">(8 marks)</strong>
                <Answers questionNumber="3ai" />
              </li>
              <li>
                Identify the oxidizing and reducing agent{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="3aii" />
              </li>
            </ol>
          </li>
          <li>
            Calculate the oxidation number of
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Cr in K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="3ci" />
              </li>
              <li>
                S in Na<sub>2</sub>SO<sub>4</sub>{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="3cii" />
              </li>
              <li>
                Mn in KMn0<sub>4</sub>{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="3ciii" />
              </li>
            </ol>
            And hence the name of each compound
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Calculate the vapour pressure of a perfect solution of 95.0g of
            glycerine (C<sub>2</sub>H<sub>5</sub>OH, 92.1g/mol) in 190.0g
            ethanol (C<sub>2</sub>H<sub>5</sub>OH, 46.0g/mol) at 40
            <sup>&deg;</sup>C. Given P<sup>0</sup>
            <sub>ethanol</sub> at 40<sup>&deg;</sup>C is 135.3 torr. The
            glycerine is non-volatile at this temperature{" "}
            <strong className="whitespace-nowrap">(9 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Calculate the freezing point of an aqueous of sucrose whose
            composition is 25.0g C<sub>12</sub>H<sub>22</sub>0<sub>11</sub> in
            100.0g H<sub>2</sub>0. Given freezing ppoint of H<sub>2</sub>
            0=0.0&deg;C, K<sub>r</sub> (water)=1.860cm<sup>-1</sup>, C=12, O=16,
            H=1 <strong className="whitespace-nowrap">(8.5 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define acid and base according to:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Arrhenius{" "}
                <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="5ai" />
              </li>
              <li>
                Lewis <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="5aii" />
              </li>
            </ol>
          </li>
          <li>
            Write short notes on
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Normal salt{" "}
                <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="5bi" />
              </li>
              <li>
                Acid salt{" "}
                <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="5bii" />
              </li>
              <li>
                Complex Salt{" "}
                <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="5biii" />
              </li>
            </ol>
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Comment on five (5) essential postulates of kinetic theory of
                ideal gases{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="5ci" />
              </li>
              <li>
                State with equations three (3) laws governing the ideal gas
                behavior{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="5cii" />
              </li>
              <li>
                List and explain four (4) factors that affect the rate of
                chemical reaction.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="5ciii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State the first and second laws of thermochemistry{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Calculate the pressure exerted by 1 mole of water in 20L at 27
            <sup>&deg;</sup>C using:
            <ol className="mx-4 list-[lower-alpha]">
              <li>the ideal gas law</li>
              <li>
                van der Waals equation (Values for van der Waals constants{" "}
                <strong>a</strong> and <strong>b</strong> for water vapour are
                5.464 L<sup>2</sup>
                atm.mol<sup>-2</sup> and 0.03049 Lmole<sup>-1</sup>{" "}
                respectively)
              </li>
            </ol>{" "}
            <strong className="whitespace-nowrap">(4.5 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
          <li>
            Give two reasons why gases deviate from ideal behavior particularly
            at low temperatures and high pressures{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="6c" />
          </li>
          <li>
            Complete the following nuclear reactions equation
            <ol className="mx-4 list-[lower-roman]">
              <li>
                <sup>22</sup>
                <sub>11</sub>Na + <sup>4</sup>
                <sub>2</sub>He &rarr; <sup>26</sup>
                <sub>12</sub>Mg + ?{" "}
                <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="6di" />
              </li>
              <li>
                <sup>222</sup>
                <sub>86</sub>Rn &rarr; ? + <sup>26</sup>
                <sub>12</sub>He{" "}
                <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="6dii" />
              </li>
              <li>
                <sup>131</sup>
                <sub>53</sub>I &rarr; ? + <sup>0</sup>
                <sub>-1</sub>e{" "}
                <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="6diii" />
              </li>
              <li>
                <sup>22</sup>
                <sub>11</sub>Cl + <sup>1</sup>
                <sub>0</sub>n &rarr; <sup>1</sup>
                <sub>1</sub>H + ?{" "}
                <strong className="whitespace-nowrap">(1.5 marks)</strong>
                <Answers questionNumber="6div" />
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </Questions>
  );
}
