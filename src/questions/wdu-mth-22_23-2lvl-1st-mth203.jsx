import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function MTH203() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="mathematics"
      session="2022/2023"
      semester="first semester"
      courseCode="mth203"
      courseTitle="linear algebra I"
      allowedTime="2hrs: 30mins"
      instruction="answer any THREE (3) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is a Vector Space?{" "}
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Give three (3) examples of a vector space{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            Define the following and give one (1) example in each case:
            <ol className="mx-4 list-[lower-roman]">
              <li>Echelon matrix</li>
              <li>Orthogonal matrix</li>
              <li>Skew-symmetric matrix</li>
            </ol>
            <strong className="whitespace-nowrap">(9 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Reduce the matrix below to echelon form: <br />A ={" "}
            <div className="inline-flex">
              <span className="text-7xl">[</span>{" "}
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <span> -4 </span>
                  <span>1</span>
                  <span> -6 </span>
                </div>
                <div className="flex gap-6">
                  <span>1</span>
                  <span>2</span>
                  <span> -5 </span>
                </div>
                <div className="flex gap-6">
                  <span>6</span>
                  <span>3</span>
                  <span>4</span>
                </div>
              </div>
              <span className="text-7xl">]</span>
            </div>{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Let A ={" "}
            <div className="inline-flex">
              <span className="text-5xl">(</span>{" "}
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <span>7</span>
                  <span>3</span>
                </div>
                <div className="flex gap-6">
                  <span>3</span>
                  <span> -1 </span>
                </div>
              </div>
              <span className="text-5xl">)</span>
            </div>
            , find an orthogonal matrix P such that D = P<sup>-1</sup>AP is
            diagonal <strong className="whitespace-nowrap">(13 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Given A ={" "}
            <div className="inline-flex">
              <span className="text-7xl">[</span>{" "}
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <span>1</span>
                  <span> -1 </span>
                  <span>1</span>
                </div>
                <div className="flex gap-6">
                  <span>2</span>
                  <span>4</span>
                  <span>3</span>
                </div>
                <div className="flex gap-6">
                  <span>5</span>
                  <span>6</span>
                  <span> -2 </span>
                </div>
              </div>
              <span className="text-7xl">]</span>
            </div>
            , using elementary row operations, reduce A to row echelon form{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Given A ={" "}
            <div className="inline-flex">
              <span className="text-7xl">[</span>{" "}
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <span>1</span>
                  <span>0</span>
                  <span>2</span>
                </div>
                <div className="flex gap-6">
                  <span>2</span>
                  <span> -1 </span>
                  <span>3</span>
                </div>
                <div className="flex gap-6">
                  <span>4</span>
                  <span>1</span>
                  <span>8</span>
                </div>
              </div>
              <span className="text-7xl">]</span>
            </div>
            , find A<sup>-1</sup> using elementary row operations{" "}
            <strong className="whitespace-nowrap">(13 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Solve the system, using Gaussian elimination method:
            <ol className="mx-4 list-[lower-roman]">
              <li>x + 2y + z = 3</li>
              <li>2x + 5y - z = -4</li>
              <li>3x + 2y - z = 5</li>
            </ol>{" "}
            <strong className="whitespace-nowrap">(13 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            Given Y ={" "}
            <div className="inline-flex">
              <span className="text-5xl">[</span>{" "}
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <span>
                    Y<sub>1</sub>
                  </span>
                </div>
                <div className="flex gap-6">
                  <span>
                    Y<sub>2</sub>
                  </span>
                </div>
              </div>
              <span className="text-5xl">]</span>
            </div>
            and A ={" "}
            <div className="inline-flex">
              <span className="text-5xl">[</span>{" "}
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <span>2</span>
                  <span>2</span>
                </div>
                <div className="flex gap-6">
                  <span>2</span>
                  <span>0</span>
                </div>
              </div>
              <span className="text-5xl">]</span>
            </div>
            , find Y<sup>1</sup>AY{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        If A ={" "}
        <div className="inline-flex">
          <span className="text-5xl">(</span>{" "}
          <div className="flex flex-col">
            <div className="flex gap-6">
              <span>2</span>
              <span>2</span>
            </div>
            <div className="flex gap-6">
              <span>1</span>
              <span>3</span>
            </div>
          </div>
          <span className="text-5xl">)</span>
        </div>
        <ol className="mx-4 list-[lower-roman]">
          <li>
            Find all eigen values and corresponding eigenvectors.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="5i" />
          </li>
          <li>
            Find a non singular matrix P such that D = P<sup>-1</sup>AP is
            diagonal and P<sup>-1</sup>{" "}
            <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="5ii" />
          </li>
          <li>
            Find A<sup>6</sup> and F(A), where t<sup>3</sup> - 3t<sup>2</sup> +
            7t + 3 <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="5iii" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            When are vectors linearly dependent?{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Determine whether or not U and V are linearly dependent.
            <ol className="mx-4 list-[lower-roman]">
              <li>U = (1, -3), V = (-2, 6)</li>
              <li>U = (1, 2, -3), V = (4, 5, -6)</li>
              <li>U = (2, 4, -8), V = (3, 6, -2)</li>
            </ol>
            <strong className="whitespace-nowrap">(15 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
