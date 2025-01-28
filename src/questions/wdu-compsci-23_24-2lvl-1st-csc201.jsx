import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function CSC201() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2023/2024"
      semester="first semester"
      courseCode="CSC201"
      courseTitle="computer programming I (Java)"
      allowedTime="2hrs: 30mins"
      instruction="answer question 1 and any other three (3) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (Compulsory)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State two reasons why we learn both structured programming and
            object-oriented programming.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            State two major application areas of Java programming language.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            State two major features of Unified Modeling Language (UML).{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
          <li>
            The entity television can be regarded as a class with attributes and
            behaviours. Derive the attributes and behaviour of the class
            television using UML class diagram.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="1d" />
          </li>
          <li>
            Highlight the four vital components of a for loop.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1e" />
          </li>
          <li>
            A person invests a certain of money in a savings account at a given
            interest. Assuming that all the interest is left on deposit,
            calculate and display the amount of money in the account at the end
            of each year for n years. Write a Java application to determine the
            amounts using the formula:
            <br />
            <strong>
              A = P(1+R)<sup>n</sup>
            </strong>
            <br />
            where
            <br />
            P is the original amount invested (i.e., the principal)
            <br />
            R is the annual interest rate
            <br />
            n is the number of years
            <br />A is the amount on deposit at the end of the nth year.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="1f" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following terms as used in Java development environment.
            <ol className="mx-4 list-[lower-roman]">
              <li>Javac.exe</li>
              <li>Java.exe</li>
            </ol>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Why is the Java programming language platform independent?
            Illustrate with a diagram.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            What is a loop?{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
          <li>
            Write a Java application that computes the sum of square of even
            numbers between 2 and 50.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="2d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li className="list-[lower-alpha]">
            Define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Local variable</li>
              <li>Instance variable.</li>
            </ol>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            What is a static method? Illustrate with one example.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            Write a method that converts a Fahrenheit temperature to Celsius
            temperature using the expression:{" "}
            <code>Celsius = (Fahrenheit - 32) * 0.55</code>{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
          <li>
            Give the syntax of the <code>while</code> loop.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="3d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define enhanced for loop.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            State one situation in which the use of the enhanced is valuable.
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
          <li>
            Highlight three methods available in the predefined class called
            Arrays. <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
          <li>
            Write a java program segment to illustrate each of the methods
            stated in (4c){" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="4d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following as used in Java file processing:
            <ol className="mx-4 list-[lower-roman]">
              <li>Stream</li>
              <li>Text file</li>
              <li>Sequential file.</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Write a Java program that requests from the user matriculation
            number, total points earned, total units registered and compute the
            GPA using the expression:{" "}
            <code>GPA = Total Points Earned / Total Units Registered</code>.
            Write your output consisting of Matriculation No., Total Units,
            Total Points, and GPA to a file named honour.txt.{" "}
            <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            Highlight two differences between a primitive variable and
            non-primitive variable.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define an ArrayList. llustrate with an example.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            Define a static method. Illustrate with one example.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
          <li>
            The scores of ten students in a given examination are represented in
            a one-dimensional array as follows: 57 40 34 61 66 56 48 56 52 51.
            Write methods to accomplish the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Compute the largest score{" "}
                <strong className="whitespace-nowrap">(3.5 marks)</strong>
                <Answers questionNumber="6c" />
              </li>
              <li>
                Compute the smallest score{" "}
                <strong className="whitespace-nowrap">(3.5 marks)</strong>
                <Answers questionNumber="6c" />
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </Questions>
  );
}
