import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function MTH202() {
  return (
    <Questions
      school="western delta university"
      college="natural and applied sciences"
      department="mathematics"
      session="2022/2023"
      semester="second semester"
      courseCode="mth202"
      courseTitle="linear algebra II"
      allowedTime="2hr: 30mins"
      instruction="answer any other THREE (3) questions only"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Decompose A ={" "}
            <div className="inline-flex">
              <span className="text-7xl">(</span>{" "}
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <span>2</span>
                  <span>5</span>
                  <span>1</span>
                </div>
                <div className="flex gap-6">
                  <span>3</span>
                  <span>1</span>
                  <span>-2</span>
                </div>
                <div className="flex gap-6">
                  <span>4</span>
                  <span>10</span>
                  <span>2</span>
                </div>
              </div>
              <span className="text-7xl">)</span>
            </div>{" "}
            into symmetric and skew symmetric matrices{" "}
            <strong className="whitespace-nowrap">(15 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            If A ={" "}
            <div className="inline-flex">
              <span className="text-7xl">(</span>{" "}
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <span>1</span>
                  <span>0</span>
                  <span>-1</span>
                  <span>2</span>
                </div>
                <div className="flex gap-6">
                  <span>3</span>
                  <span>4</span>
                  <span>6</span>
                  <span>-1</span>
                </div>
                <div className="flex gap-6">
                  <span>2</span>
                  <span>5</span>
                  <span>-9</span>
                  <span>7</span>
                </div>
              </div>
              <span className="text-7xl">)</span>
            </div>
            . Find:
            <ol className="mx-4 list-[lower-roman]">
              <li>row space of A</li>
              <li>column space of A</li>
            </ol>
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Diagonalize the matrix A ={" "}
            <div className="inline-flex">
              <span className="text-5xl">(</span>{" "}
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <span>1</span>
                  <span>2</span>
                </div>
                <div className="flex gap-6">
                  <span>3</span>
                  <span>0</span>
                </div>
              </div>
              <span className="text-5xl">)</span>
            </div>
            <strong className="whitespace-nowrap">(23 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State the dimension theorem{" "}
            <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            State the standard basis for R<sup>4</sup>{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            Reduce these matrices to Gauss Jordan form:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                <div className="inline-flex">
                  <span className="text-7xl">(</span>{" "}
                  <div className="flex flex-col">
                    <div className="flex gap-6">
                      <span>2</span>
                      <span>2</span>
                      <span>-1</span>
                    </div>
                    <div className="flex gap-6">
                      <span>0</span>
                      <span>0</span>
                      <span>3</span>
                    </div>
                    <div className="flex gap-6">
                      <span>1</span>
                      <span>-1</span>
                      <span>2</span>
                    </div>
                  </div>
                  <span className="text-7xl">)</span>
                </div>
              </li>
              <li>
                <div className="inline-flex">
                  <span className="text-7xl">(</span>{" "}
                  <div className="flex flex-col">
                    <div className="flex gap-6">
                      <span>1</span>
                      <span>1</span>
                      <span>0</span>
                    </div>
                    <div className="flex gap-6">
                      <span>1</span>
                      <span>2</span>
                      <span>1</span>
                    </div>
                    <div className="flex gap-6">
                      <span>-1</span>
                      <span>1</span>
                      <span>2</span>
                    </div>
                  </div>
                  <span className="text-7xl">)</span>
                </div>
              </li>
            </ol>
            <strong className="whitespace-nowrap">(12 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li className="list-none">
            If A ={" "}
            <div className="inline-flex">
              <span className="text-7xl">(</span>{" "}
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                <div className="flex gap-6">
                  <span>1</span>
                  <span>0</span>
                  <span>-1</span>
                </div>
                <div className="flex gap-6">
                  <span>2</span>
                  <span>3</span>
                  <span>1</span>
                </div>
              </div>
              <span className="text-7xl">)</span>
            </div>
            . Find A<sup>-1</sup>, using elementary row operation{" "}
            <strong className="whitespace-nowrap">(23 marks)</strong>
            <Answers questionNumber="4" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Let R be a non-empty set with two binary operations of addition and
            multiplication, then define the following with examples:
            <ol className="mx-4 list-[lower-roman]">
              <li>A ring</li>
              <li>Subring S or R</li>
              <li>Integral domain</li>
            </ol>
            <strong className="whitespace-nowrap">(15 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            If D is an integral domain, for some a, b, c, p, define the
            following with examples:
            <ol className="mx-4 list-[lower-roman]">
              <li>b divides a in D</li>
              <li>associate of a ∈ D</li>
              <li>P ∈ D in irreducible</li>
              <li>Unique factorization</li>
            </ol>
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following with example:
            <ol className="mx-4 list-[lower-roman]">
              <li>Orthogonal basis</li>
              <li>Orthonormal basis</li>
            </ol>
            <strong className="whitespace-nowrap">(15 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            What are the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                subspace of V of R<sup>n</sup>
              </li>
              <li>null space of A</li>
              <li>row space of A</li>
              <li>column space of A</li>
            </ol>
            <strong className="whitespace-nowrap">(8 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
