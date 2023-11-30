import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC203() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2022/2023"
      semester="first semester"
      courseCode="CSC203"
      courseTitle="computer programming II"
      allowedTime="2hrs: 30mins"
      instruction="answer four (4) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Briefly define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Whitespace</li>
              <li>Constants</li>
              <li>Header files</li>
            </ol>
            <strong className="whitespace-nowrap">(4.5 marks)</strong>
            <Answers questionNumber="1a" />
          </li>

          <li>
            Write a C++ program that displays &quot;Welcome to C++
            Programming!&quot; and &quot;Computer Programming is an interesting
            endeavor!&quot;{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="1b" />
          </li>

          <li>
            Consider the following C++ program and use it to answer the question
            that follows: <br />
            <pre className="mb-2 mt-2 block">
              <code>
                &#47;&#47; This program computes the area of a circle
                <br />
                #include &lt;iosteam&gt;
                <br />
                #include &lt;cmath&gt;
                <br />
                using namespace std;
                <br />
                int main () &#123;
                <br />
                {"  "}const float pi = 3.142;
                <br />
                {"  "}double radius, result, area, exponent = 2.0;
                <br />
                {"  "}cout &gt;&gt; &quot;Enter the value of radius&quot;
                &gt;&gt; endl;
                <br />
                {"  "}cin &lt;&lt; radius;
                <br />
                {"  "}result = power (radius, exponent);
                <br />
                {"  "}cout &gt;&gt; &quot;The area of the circie is &quot;
                &gt;&gt; area;
                <br />
                {"  "}return 0;
                <br />
                &#125;
              </code>
            </pre>
            Identify and correct at least ten (10) syntax errors in the given
            program <strong className="whitespace-nowrap">(10 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following programming terms:
            <ol className="mx-4 list-[lower-roman]">
              <li>comment</li>
              <li>setw manipulator</li>
              <li>variable name</li>
              <li>increment operator</li>
              <li>decrement operator</li>
            </ol>
            <strong className="whitespace-nowrap">(7.5 marks)</strong>
            <Answers questionNumber="2a" />
          </li>

          <li>
            Give six (6) examples of valid variable names in C++ programming.{" "}
            <strong>(3 marks)</strong>
            <Answers questionNumber="2b" />
          </li>

          <li>
            Suppose <code>total_tax = avg_ _Tax * ++count;</code> explain how a
            C++ compiler will execute the given statement{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="2c" />
          </li>

          <li>
            Write a C++ program that generates the table below
            <table className="mb-2 mt-2 border-collapse border">
              <thead>
                <tr>
                  <th className="border px-6 text-center">Year</th>
                  <th className="border px-6 text-center">Profit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-6 text-center">1950</td>
                  <td className="border px-6 text-center">500000000</td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">1951</td>
                  <td className="border px-6 text-center">600000000</td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">1952</td>
                  <td className="border px-6 text-center">700000000</td>
                </tr>
              </tbody>
            </table>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="2d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Using suitable examples, write explanatory notes on the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Relational operators</li>
              <li>Loops</li>
            </ol>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3a" />
          </li>

          <li>
            Give the syntax of while and do loops{" "}
            <strong className="whitespace-nowrap">(4.5 marks)</strong>
            <Answers questionNumber="3b" />
          </li>

          <li>
            Name four (4) arithmetic operators and describe them using examples{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3c" />
          </li>

          <li>
            Write a C++ program using a while loop that asks a user to enter
            numbers, calculates their sum, prints the result until the number
            entered is negative{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="3d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Highlight the role of decisions in computer programming{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4a" />
          </li>

          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                With the aid of a flowchart only, describe the working principle
                of <code>if...else</code> statement{" "}
                <strong className="whitespace-nowrap">(3.5 marks)</strong>
                <Answers questionNumber="4bi" />
              </li>
              <li>
                Write down the syntax of a <code>switch</code> statement{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="4bii" />
              </li>
            </ol>
          </li>

          <li>
            State three (3) examples of logical operators and show how they are
            represented in C++{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="4c" />
          </li>

          <li>
            Write a C++ program that obtains test score and assigns grade
            according to the following information. The test score is an integer
            from 1 to 100
            <table className="mb-2 mt-2 border-collapse border">
              <thead>
                <tr>
                  <th className="border px-6 text-center">Test Score</th>
                  <th className="border px-6 text-center">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-6 text-center">70 and above</td>
                  <td className="border px-6 text-center">Distinction</td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">60 - 69</td>
                  <td className="border px-6 text-center">Merit</td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">50-59</td>
                  <td className="border px-6 text-center">Pass</td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">Below 50</td>
                  <td className="border px-6 text-center">Fail</td>
                </tr>
              </tbody>
            </table>
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is a Structure?{" "}
            <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="5a" />
          </li>

          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                State the syntax of a structure{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="5bi" />
              </li>
              <li>
                Write a program that defines a structure, assigns values to the
                structure and displays the values{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="5bii" />
              </li>
            </ol>
          </li>

          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Define Enumeration{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="5ci" />
              </li>
              <li>
                Give the syntax of enumeration and write an enumeration whose
                values are months the year{" "}
                <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="5cii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define a function{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Give two (2) reasons for using functions in computer programming{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="6bi" />
              </li>
              <li>
                What is an argument?{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="6bii" />
              </li>
              <li>
                Name three (3) parameter passing techniques to functions{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="6biii" />
              </li>
            </ol>
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Define recursion{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="6ci" />
              </li>
              <li>
                Write a recursive function that adds a range of numbers by
                adding two numbers each time it is called by a main program{" "}
                <strong className="whitespace-nowrap">(6 marks)</strong>
                <Answers questionNumber="6cii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </Questions>
  );
}
