import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC203() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2023/2023"
      semester="first semester"
      courseCode="CSC203"
      courseTitle="computer programming II (C++)"
      allowedTime="2hrs: 30mins"
      instruction="Answer question one (1) and any other three (3) other questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (Compulsory) (25 Marks)</h4>
        <ol className="mx-4 list-[lower-roman]">
          <li>
            Develop a C++ program that displays &quot;Hello, I am learning C++
            Programming!&quot; and &quot;Coding is Fun!&quot; on two different
            lines. <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            What is the function of the following in C++ Programming:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                <code>cin</code>
              </li>
              <li>
                <code>cout</code>
              </li>
              <li>blank line</li>
              <li>
                <code>#include &lt;iostream&gt;</code>
              </li>
            </ol>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            What is a variable? State the syntax for creating a variable.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
          <li>
            Copy and complete the table.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <table className="mb-2 mt-2 border-collapse border">
              <thead>
                <tr>
                  <th className="border px-6 text-center">Data Type</th>
                  <th className="border px-6 text-center">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-6 text-center">
                    <code>boolean</code>
                  </td>
                  <td className="border px-6 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">
                    <code>char</code>
                  </td>
                  <td className="border px-6 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">int</td>
                  <td className="border px-6 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">float</td>
                  <td className="border px-6 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-6 text-center">double</td>
                  <td className="border px-6 text-center"></td>
                </tr>
              </tbody>
            </table>
            <Answers questionNumber="1d" />
          </li>
          <li>
            Hence, add the correct data type for the following variables:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                <code>_______ myNumber = 9;</code>
              </li>
              <li>
                <code>_______ myNumber = 8.99;</code>
              </li>
              <li>
                <code>_______ myApp = &apos;A&apos;</code>
              </li>
              <li>
                <code>_______ myCondition = false;</code>
              </li>
              <li>
                <code>_______ myVariable = &quot;Hello World!&quot;</code>
              </li>
            </ol>
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="1e" />
          </li>
          <li>
            Suppose variable <code>x = 20</code> and <code>y = 5</code>, compute
            the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                <code>x * y</code>
              </li>
              <li>
                <code>x / y</code>
              </li>
              <li>
                <code>x % y</code>
              </li>
              <li>
                <code>x++</code>
              </li>
              <li>
                <code>y++</code>
              </li>
            </ol>
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="1f" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Operators{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="2ai" />
              </li>
              <li>
                Arithmetic operators{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="2aii" />
              </li>
            </ol>
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Name four (4) arithmetic operators and with the aid of suitable
                examples, explain how to use them.{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="2bi" />
              </li>
              <li>
                List three (3) logical operators and using examples, describe
                what they are used for.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="2bii" />
              </li>
              <li>
                Write a C++ program that continuously accepts inputs, but
                terminates when the user enters a zero (0) value. Hint: Assign
                variable number to an integer value. Use a <code>while</code>{" "}
                loop. <strong className="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="2c" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Study the C++ code below and use it to answer the question that
            follows:
            <pre className="mb-2 mt-2 block">
              <code>
                #include &lt;iostream&gt;
                <br />
                #include &lt;cmath&gt;
                <br />
                using namespace std;
                <br />
                int main () &#123;
                <br /> cout &lt;&lt; sqrt(25) &lt;&lt; endl;
                <br /> cout &lt;&lt; round(8.7) &lt;&lt; endl;
                <br /> cout &lt;&lt; max(200, 300) &lt;&lt; endl;
                <br /> cout &lt;&lt; min(500, 1000) &lt;&lt; endl;
                <br /> string txt = &quot;Programming&quot;;
                <br /> cout &lt;&lt; txt.length();
                <br /> return 0;
                <br />
                &#125;
              </code>
            </pre>
            Determine the output of the program.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            Give the syntax of <code>switch</code> statement and <code>do</code>
            /<code>while</code> loop. Briefly explain them.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                What are nested loops?{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="3bi" />
              </li>
              <li>
                Using a for loop, display &quot;Yes, I understand definite
                iterations&quot; 5 times on the screen.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="3bii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define Arrays. Explain how to declare multidimensional arrays.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            <code>int myNumbers[20] = &#123; &#125;</code>. How many elements
            should the array contain?
            <strong className="whitespace-nowrap">(1 mark)</strong>
            <Answers questionNumber="4b" />
          </li>
          <li>
            Consider the array:{" "}
            <code>
              string cars[5] = &#123;&quot;Audi&quot;, &quot;Benz&quot;,
              &quot;Ford&quot;, &quot;Kia&quot;, &quot;Toyota&quot;&#125;
            </code>
            . What will the instruction <code>cout &lt;&lt; cars[2]</code>{" "}
            display? <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
          <li>
            Given the array string
            <pre className="mb-2 mt-2 block">
              <code>
                letters[2][6] = &#123;&#123;&quot;I&quot;, &quot;J&quot;,
                &quot;K&quot;, &quot;L&quot;, &quot;M&quot;,
                &quot;N&quot;&#125;, &#123;&quot;O&quot;, &quot;P&quot;,
                &quot;Q&quot;, &quot;R&quot;, &quot;S&quot;, &quot;T&quot;
                &#125;&#125;
              </code>
            </pre>
            Determine the output of the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                <code>cout &lt;&lt; letters[0][4];</code>
              </li>
              <li>
                <code>cout &lt;&lt; letters[1][3];</code>
              </li>
              <strong className="whitespace-nowrap">(3 marks)</strong>
              <Answers questionNumber="4d" />
            </ol>
          </li>
          <li>
            Write a C++ program that obtains ten (10) integers from a user,
            stores them in an array and displays the sum.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5 (15 marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Structures</li>
              <li>Pointers</li>
              <li>Functions</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Give the syntrax for creating a function.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="5bi" />
              </li>
              <li>
                <code>void</code> and <code>return</code> are keywords in
                computer programming. What do they mean?{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="5bii" />
              </li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Develop a C++ function that calculates and returns the sum of three
            integer variables a, b, c.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6 (15 Marks)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            What is recursion? Highlight the role of recursion in programming.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Describe how to create a class and an object.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
          <li>
            Create a class called <code>Car</code>. It has three attributes:{" "}
            <code>brand = &quot;FORD&quot;</code>,{" "}
            <code>model = &quot;X20&quot;</code> and <code>year = 2024</code>.
            The class also has public access specifier. Create an object of
            class <code>Car</code>. Name it <code>carObj</code>. Display the
            attribute values of Car/object. (Hint: brand and model (string).
            year (integer)){" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="6c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
