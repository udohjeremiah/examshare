import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function MTH206() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="mathematics"
      session="2022/2023"
      semester="second semester"
      courseCode="mth206"
      courseTitle="mathematical method I"
      allowedTime="2hrs"
      instruction="attempt any FOUR questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Solve the integral{" "}
            <math>
              <mo className="text-2xl">∫</mo>
              <msup>
                <mi>e</mi>
                <mn>5x</mn>
              </msup>
              <mi>sin</mi>
              <mn>3x</mn>
              <mi>dx</mi>
            </math>{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Integrate by partial function{" "}
            <math>
              <mo className="text-2xl">∫</mo>
              <mfrac>
                <mrow>
                  <mi>
                    <msup>
                      <mn>2</mn>
                      <mn>x2</mn>
                    </msup>
                  </mi>
                  <mo>+</mo>
                  <mn>6x</mn>
                  <mo> - </mo>
                  <mn>35</mn>
                </mrow>
                <mrow>
                  <mi>
                    <msup>
                      <mi>x</mi>
                      <mn>2</mn>
                    </msup>
                  </mi>
                  <mo> - </mo>
                  <mi>x</mi>
                  <mo> - </mo>
                  <mi>12</mi>
                </mrow>
              </mfrac>
              <mi>dx</mi>
            </math>{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Solve the integral{" "}
            <math>
              <mo className="text-2xl">∫</mo>
              <msup>
                <mi>x</mi>
                <mn>3</mn>
              </msup>
              <msup>
                <mi>e</mi>
                <mn>2x</mn>
              </msup>
              <mi>dx</mi>
            </math>{" "}
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Prove that cos x = 1{" "}
            <math>
              <mo> - </mo>
              <mfrac>
                <mrow>
                  <msup>
                    <mi>x</mi>
                    <mn>2</mn>
                  </msup>
                </mrow>
                <mrow>
                  <mn>2!</mn>
                </mrow>
              </mfrac>
              <mo>+</mo>
              <mfrac>
                <mrow>
                  <msup>
                    <mi>x</mi>
                    <mn>4</mn>
                  </msup>
                </mrow>
                <mrow>
                  <mn>4!</mn>
                </mrow>
              </mfrac>
              <mo> - </mo>
              <mfrac>
                <mrow>
                  <msup>
                    <mi>x</mi>
                    <mn>6</mn>
                  </msup>
                </mrow>
                <mrow>
                  <mn>6!</mn>
                </mrow>
              </mfrac>
              <mo>+</mo>
              <mi>...</mi>
            </math>{" "}
            and that the series is valid for all values of x{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <p>Solve the following equations using D operator</p>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            (
            <math>
              <msup>
                <mi>D</mi>
                <mn>2</mn>
              </msup>
              <mo>+</mo>
              <mn>4</mn>
              <mi>D</mi>
              <mo> - </mo>
              <mn>3</mn>
            </math>
            )(
            <math>
              <msup>
                <mi>e</mi>
                <mn>2x</mn>
              </msup>
            </math>
            )
          </li>
          <li>
            <math>
              <mfrac>
                <mrow>
                  <mn>1</mn>
                </mrow>
                <mrow>
                  <msup>
                    <mi>(D</mi>
                    <mn>2</mn>
                  </msup>
                  <mo>+</mo>
                  <mn>4)</mn>
                </mrow>
              </mfrac>
            </math>
            (
            <math>
              <mrow>
                <msup>
                  <mi>e</mi>
                  <mn> -3x </mn>
                </msup>
              </mrow>
            </math>
            )
          </li>
          <li>
            (
            <math>
              <msup>
                <mi>D</mi>
                <mn>2</mn>
              </msup>
              <mo> - </mo>
              <mn>7D</mn>
              <mo>+</mo>
              <mn>2</mn>
            </math>
            )(
            <math>
              <msup>
                <mi>e</mi>
                <mn>x/2</mn>
              </msup>
            </math>
            )
          </li>
          <li>
            <math>
              <mfrac>
                <mrow>
                  <mn>1</mn>
                </mrow>
                <mrow>
                  <msup>
                    <mi>D</mi>
                    <mn>2</mn>
                  </msup>
                  <mo> - </mo>
                  <mn>3D</mn>
                  <mo> - </mo>
                  <mn>2</mn>
                </mrow>
              </mfrac>
            </math>
            (
            <math>
              <mrow>
                <msup>
                  <mi>e</mi>
                  <mn>5x</mn>
                </msup>
              </mrow>
            </math>
            )
          </li>
          <li>
            (
            <math>
              <mi>D</mi>
              <mo>+</mo>
              <mn>4</mn>
            </math>
            )(
            <math>
              <msup>
                <mi>e</mi>
                <mn>3x</mn>
              </msup>
            </math>
            )
          </li>
        </ol>
        <strong className="whitespace-nowrap">(17.5 marks)</strong>
        <Answers questionNumber="3" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <p className="mb-2">
          Find{" "}
          <math>
            <mfrac>
              <mrow>
                <mn>∂z</mn>
              </mrow>
              <mrow>
                <mn>∂x</mn>
              </mrow>
            </mfrac>
          </math>{" "}
          and{" "}
          <math>
            <mfrac>
              <mrow>
                <mn>∂z</mn>
              </mrow>
              <mrow>
                <mn>∂x</mn>
              </mrow>
            </mfrac>
          </math>
          :
        </p>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            z = 4x<sup>2</sup> + 3xy + 5y<sup>2</sup>
          </li>
          <li>z = (3x + 2xy)(4x - 5y)</li>
          <li>z = tan(3x + 4y)</li>
          <li>
            z =
            <math>
              <mfrac>
                <mrow>
                  <mi>sin</mi>
                  <mi>(3x</mi>
                  <mo>+</mo>
                  <mi>2y)</mi>
                </mrow>
                <mrow>
                  <mi>xy</mi>
                </mrow>
              </mfrac>
            </math>
          </li>
        </ol>
        <strong className="whitespace-nowrap">(10 marks)</strong>
        <Answers questionNumber="4" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <p>Solve the following equations by operator D method</p>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            (
            <math>
              <msup>
                <mi>D</mi>
                <mn>2</mn>
              </msup>
              <mo> - </mo>
              <mn>5</mn>
              <mi>D</mi>
              <mo> - </mo>
              <mn>4</mn>
            </math>
            )(
            <math>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
              <mo>+</mo>
              <mn>4x</mn>
              <mo>+</mo>
              <mn>1</mn>
            </math>
            )
          </li>
          <li>
            (
            <math>
              <msup>
                <mi>D</mi>
                <mn>2</mn>
              </msup>
              <mo> - </mo>
              <mn>7</mn>
              <mi>D</mi>
              <mo> + </mo>
              <mn>3</mn>
            </math>
            )(
            <math>
              <mi>sin</mi>
              <mn>2x</mn>
              <mo>+</mo>
              <mn>3</mn>
              <mi>cos</mi>
              <mn>2x</mn>
            </math>
            )
          </li>
          <li>
            (
            <math>
              <msup>
                <mi>D</mi>
                <mn>2</mn>
              </msup>
              <mo> - </mo>
              <mn>3</mn>
              <mi>D</mi>
              <mo> + </mo>
              <mn>6</mn>
            </math>
            )(
            <math>
              <msup>
                <mi>4e</mi>
                <mn>2x</mn>
              </msup>
            </math>
            )
          </li>
          <li>
            <math>
              <mfrac>
                <mrow>
                  <mn>1</mn>
                </mrow>
                <mrow>
                  <mi>D</mi>
                </mrow>
              </mfrac>
            </math>
            (
            <math>
              <mn>2</mn>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
              <mo>+</mo>
              <mn>8</mn>
              <mo>+</mo>
              <mfrac>
                <mrow>
                  <mn>3</mn>
                </mrow>
                <mrow>
                  <mi>x</mi>
                </mrow>
              </mfrac>
            </math>
            )
          </li>{" "}
          <li>
            <math>
              <mfrac>
                <mrow>
                  <mn>1</mn>
                </mrow>
                <mrow>
                  <msup>
                    <mi>D</mi>
                    <mn>2</mn>
                  </msup>
                </mrow>
              </mfrac>
            </math>
            (
            <math>
              <mn>3</mn>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
              <mo>+</mo>
              <mi>cos</mi>
              <mn>2x</mn>
            </math>
            )
          </li>
        </ol>
        <Answers questionNumber="5" />
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <p>
          Find all the first and second partial differential coefficients for
          each of the following function:
        </p>
        <ol className="mx-4 list-[lower-roman]">
          <li>
            z = 3x<sup>2</sup> + 2xy + 4y<sup>2</sup>{" "}
            <strong className="whitespace-nowrap">(3.5 marks)</strong>
            <Answers questionNumber="6i" />
          </li>
          <li>
            z =
            <math>
              <mfrac>
                <mrow>
                  <mi>x</mi>
                  <mo>+</mo>
                  <mi>y</mi>
                </mrow>
                <mrow>
                  <mi>x</mi>
                  <mo>-</mo>
                  <mi>y</mi>
                </mrow>
              </mfrac>
            </math>
            <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="6ii" />
          </li>
          <li>
            If z = 5x<sup>2</sup> + 3x<sup>2</sup>y4y<sup>3</sup>, find{" "}
            <math>
              <mfrac>
                <mrow>
                  <mn>∂z</mn>
                </mrow>
                <mrow>
                  <mn>∂x</mn>
                </mrow>
              </mfrac>
            </math>
            ,{" "}
            <math>
              <mfrac>
                <mrow>
                  <mn>∂z</mn>
                </mrow>
                <mrow>
                  <mn>∂y</mn>
                </mrow>
              </mfrac>
            </math>
            ,{" "}
            <math>
              <mfrac>
                <mrow>
                  <msup>
                    <mn>∂</mn>
                    <mn>2</mn>
                  </msup>
                  <mn>z</mn>
                </mrow>
                <mrow>
                  <mn>∂</mn>
                  <msup>
                    <mn>x</mn>
                    <mn>2</mn>
                  </msup>
                </mrow>
              </mfrac>
            </math>
            ,{" "}
            <math>
              <mfrac>
                <mrow>
                  <msup>
                    <mn>∂</mn>
                    <mn>2</mn>
                  </msup>
                  <mn>z</mn>
                </mrow>
                <mrow>
                  <mn>∂</mn>
                  <msup>
                    <mn>y</mn>
                    <mn>2</mn>
                  </msup>
                </mrow>
              </mfrac>
            </math>
            ,{" "}
            <math>
              <mfrac>
                <mrow>
                  <msup>
                    <mn>∂</mn>
                    <mn>2</mn>
                  </msup>
                  <mn>z</mn>
                </mrow>
                <mrow>
                  <mn>∂x</mn>
                  <mn>∂y</mn>
                </mrow>
              </mfrac>
            </math>{" "}
            and{" "}
            <math>
              <mfrac>
                <mrow>
                  <msup>
                    <mn>∂</mn>
                    <mn>2</mn>
                  </msup>
                  <mn>z</mn>
                </mrow>
                <mrow>
                  <mn>∂y</mn>
                  <mn>∂x</mn>
                </mrow>
              </mfrac>
            </math>
            <Answers questionNumber="6iii" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
