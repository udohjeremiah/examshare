import Answers from "@/components/Answers";
import Questions from "@/components/Questions";

export default function CSC309() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2023/2024"
      semester="first semester"
      courseCode="CSC309"
      courseTitle="advanced computer programming (Java)"
      allowedTime="2hrs: 30mins"
      instruction="Answer four (4) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1 (Compulsory)</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Event</li>
              <li>Action Listener</li>
            </ol>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            Wtite a Java program segment that selects an item from a comboBox
            and assign the selected item to a textField.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            Write a Java method to convert the expression:{" "}
            <code>Celsius = (Fahrenheit - 32) * 0.55</code>.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
          <li>
            The Malthusian population model for estimating the population of a
            country is given as:{" "}
            <code>
              P<sub>t</sub> = P<sub>0</sub>t<sub>0</sub>e
              <sup>
                R
                <sup>
                  (t-t<sub>0</sub>)
                </sup>
              </sup>
            </code>
            .<br />
            where:
            <br />P<sub>t</sub> is the estimated population at time t,
            <br />P<sub>o</sub> is the initial population at time t<sub>0</sub>
            ,
            <br />R is the population growth rate,
            <br />t<sub>o</sub> is the initial time in year,
            <br />t is the final time in year in which population is to be
            estimated
            <br />
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Manually design a form to obtain the necessary input values from
                the user{" "}
                <strong className="whitespace-nowrap">(4 marks)</strong>
                <Answers questionNumber="1di" />
              </li>
              <li>
                Create a command button with a label{" "}
                <code>Estimate Population</code> in the form. Write Java code
                for the <code>Estimate Population</code> button so that when
                clicked, computes the estimated population using the given
                expression.{" "}
                <strong className="whitespace-nowrap">(9 marks)</strong>
                <Answers questionNumber="1dii" />
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define Inheritance as used in Object Oriented Programming.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            Illustrate with one example how a class can inherit the methods
            available in another class.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
          <li>
            Define the following:
            <ol className="mx-4 list-[lower-roman]">
              <li>Exception</li>
              <li>Error</li>
            </ol>
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="2d" />
          </li>
          <li>
            Write a Java program that generates{" "}
            <code>ArrayIndexOutBoundException</code> when there is an attempt by
            the user to access an array beyond the maximum index.
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="2e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State four Java <code>IO.File</code> class methods that can be used
            to manipulate files.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            State the role of the method named in (3a).{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            Assuming the user is prompted to enter a name that is either file or
            directory. Write a Java program that determines if the name exists
            and invoke a method called <code>analyzeFile</code> that gives the
            properties of the file if the name is a file.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
          <li>
            Highlight two major benefits of writing Java applications as unit of
            classes. <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="3d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the following as used in Java <code>Class</code> definition:
            <ol className="mx-4 list-[lower-roman]">
              <li>Getter</li>
              <li>Setter</li>
            </ol>
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            State two differences betweeen a constructor and a method.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="4b" />
          </li>
          <li>
            Give a class definition of the computation of area of a box using
            UML class diagram and with the associated Java code.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4c" />
          </li>
          <li>
            Define the keyword <code>Super</code> as used in object-oriented
            programming. Support your answer with the appropriate Java
            application.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="4d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State the function of the following <code>jTextField</code> methods:{" "}
            <code>setText</code> and <code>getText</code>. Write a Java program
            segment to illustrate their use.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            Why is the private modifier used in the declaration of variables.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            Manually design a form that retrieves the following items of data
            from the user: MatNo, Surname, FirstName, Department, and GPA. Write
            a Java program to transfer the entered data by the user to a
            database table when a command button called &quot;Transfer
            Data&quot; is clicked.{" "}
            <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Define the method <code>actionPerformed</code>.
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="6a" />
          </li>
          <li>
            What is a <code>JLabel</code>?{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="6b" />
          </li>
          <li>
            State two differences <code>Radio</code> button and{" "}
            <code>CheckBox</code> GUI components.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="6c" />
          </li>
          <li>
            Given that X and Y are square matrices, i.e.,
            <div className="flex flex-wrap items-center gap-4">
              <div>
                X ={" "}
                <div className="inline-flex">
                  <span className="text-7xl">[</span>{" "}
                  <div className="flex flex-col">
                    <div className="flex gap-6">
                      <span>9</span>
                      <span>8</span>
                      <span>4</span>
                    </div>
                    <div className="flex gap-6">
                      <span>5</span>
                      <span>3</span>
                      <span>7</span>
                    </div>
                    <div className="flex gap-6">
                      <span>6</span>
                      <span>2</span>
                      <span>5</span>
                    </div>
                  </div>
                  <span className="text-7xl">]</span>
                </div>
              </div>
              <div>
                Y ={" "}
                <div className="inline-flex">
                  <span className="text-7xl">[</span>{" "}
                  <div className="flex flex-col">
                    <div className="flex gap-6">
                      <span>2</span>
                      <span>6</span>
                      <span>3</span>
                    </div>
                    <div className="flex gap-6">
                      <span>7</span>
                      <span>3</span>
                      <span>1</span>
                    </div>
                    <div className="flex gap-6">
                      <span>4</span>
                      <span>6</span>
                      <span>8</span>
                    </div>
                  </div>
                  <span className="text-7xl">]</span>
                </div>
              </div>
            </div>
            Design a Java class called <code>MatMult</code> that computes the
            product of X and Y. Write your output to a formatted file called{" "}
            <code>matxy.txt</code>.{" "}
            <strong className="whitespace-nowrap">(7 marks)</strong>
            <Answers questionNumber="6d" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
