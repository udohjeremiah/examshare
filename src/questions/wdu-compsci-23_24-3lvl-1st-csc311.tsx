import Answers from "@/components/Answers";
import Questions from "@/components/Questions";

export default function CSC311() {
  return (
    <Questions
      school="western delta university"
      college="computing"
      department="computer science"
      session="2023/2024"
      semester="first semester"
      courseCode="CSC311"
      courseTitle="database design and management"
      allowedTime="2hrs"
      instruction="Answer any four (4) questions"
    >
      <li>
        <h4 className="mb-2 font-bold">Question 1</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Highlight three (3) components of a DBMS environment.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="1a" />
          </li>
          <li>
            What is the major objective of the three-tier architecture used in a
            DBMS? <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="1b" />
          </li>
          <li>
            With the aid of a diagram, describe the different levels of Data
            Mapping in DBMS?{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="1c" />
          </li>
          <li>
            Differentiate between the Hierarchical and Network Data Model.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="1d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 2</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Write a short note on the concept of the Relational Data Model.{" "}
            <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="2a" />
          </li>
          <li>
            State the criteria that must be fulfilled at each of the stages of
            First, Second, and Third Normal Forms.{" "}
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            What is the purpose of Normalization?{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
          <li>
            Match the items in Column A to their definitions in Column B.
            <div className="overflow-auto">
              <table className="mb-2 mt-2 border-collapse border">
                <thead>
                  <tr>
                    <th className="border px-6 text-center">Column A</th>
                    <th className="border px-6 text-center">Column B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-6 text-center">
                      Data maintenance
                    </td>
                    <td className="border px-6 text-center">
                      A. It refers to how well the data in the database is
                      protected from crashes, hacks and accidental deletion.
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">Data integrity</td>
                    <td className="border px-6 text-center">
                      B. It refers to how accurate and consistent the data in a
                      database is.
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">Data redundancy</td>
                    <td className="border px-6 text-center">
                      C. It refers to the separation between data and the
                      application (or applications) in which it is being used.
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">Data security</td>
                    <td className="border px-6 text-center">
                      D. It refers to monthly, daily or hourly tasks that are
                      run to fix errors within a database and prevent anomalies
                      from occuring.
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">
                      Data independence
                    </td>
                    <td className="border px-6 text-center">
                      E. It refers to storing the exact same data at different
                      places in a database.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="2d" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 3</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Briefly explain the following terms.
            <ol className="mx-4 list-[lower-roman]">
              <li>Update Anomaly</li>
              <li>Deletion Anomaly</li>
              <li>Insertion Anomaly</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="3a" />
          </li>
          <li>
            What is Data Independence?{" "}
            <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="3b" />
          </li>
          <li>
            Normalize the following table into First, Second, Third, and Fourth
            Normal Forms:
            <div className="overflow-auto">
              <table className="mb-2 mt-2 border-collapse border">
                <thead>
                  <tr>
                    <th className="border px-6 text-center">Cust_Name</th>
                    <th className="border px-6 text-center">Shipping Add</th>
                    <th className="border px-6 text-center">Newsletter</th>
                    <th className="border px-6 text-center">Supplier</th>
                    <th className="border px-6 text-center">Supplier_Number</th>
                    <th className="border px-6 text-center">Price ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-6 text-center">Alan Smith</td>
                    <td className="border px-6 text-center">Xbox One</td>
                    <td className="border px-6 text-center">
                      35 Palm St, Miami
                    </td>
                    <td className="border px-6 text-center">Xbox News</td>
                    <td className="border px-6 text-center">Microsoft</td>
                    <td className="border px-6 text-center">(800) BUY-XBOX</td>
                    <td className="border px-6 text-center">250</td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">Roger Banks</td>
                    <td className="border px-6 text-center">Playstation 5</td>
                    <td className="border px-6 text-center">
                      47 Campus Rd, Boston
                    </td>
                    <td className="border px-6 text-center">
                      Playstation News
                    </td>
                    <td className="border px-6 text-center">Sony</td>
                    <td className="border px-6 text-center">(800) BUY-SONY</td>
                    <td className="border px-6 text-center">300</td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">Evan Wilson</td>
                    <td className="border px-6 text-center">Playstation 5</td>
                    <td className="border px-6 text-center">
                      28 Rock Av, Denver
                    </td>
                    <td className="border px-6 text-center">
                      Xbox News, Playstation News
                    </td>
                    <td className="border px-6 text-center">Wholesale</td>
                    <td className="border px-6 text-center">TOLLFREE</td>
                    <td className="border px-6 text-center">450</td>
                  </tr>
                  <tr>
                    <td className="border px-6 text-center">Alan Smith</td>
                    <td className="border px-6 text-center">Playstation 5</td>
                    <td className="border px-6 text-center">
                      48 Campus Rd, Boston
                    </td>
                    <td className="border px-6 text-center">
                      Playstation News
                    </td>
                    <td className="border px-6 text-center">Sony</td>
                    <td className="border px-6 text-center">(800) BUY-SONY</td>
                    <td className="border px-6 text-center">300</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="3c" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 4</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            Write short notes on the following terms:
            <ol className="mx-4 list-[lower-roman]">
              <li>Physical Data Independence</li>
              <li>Composite Key</li>
              <li>External/Conceptual Mapping</li>
            </ol>
            <strong className="whitespace-nowrap">(6 marks)</strong>
            <Answers questionNumber="4a" />
          </li>
          <li>
            State one major drawback as it concerns Normalization.{" "}
            <strong className="whitespace-nowrap">(2 marks)</strong>
            <Answers questionNumber="2b" />
          </li>
          <li>
            With the aid of a diagram, describe the traditional-based file
            system. <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="2c" />
          </li>
          <li>
            One key drawback of the Traditional File-Based System is Concurrency
            control. Briefly describe what is meant by this term.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="2d" />
          </li>
          <li>
            Differentiate between a Database Designer and Database Developer.{" "}
            <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="2e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 5</h4>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            State three (3) ways in which a functional database can contribute
            to the successful running of an organization.
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="5a" />
          </li>
          <li>
            State a practical example on how data redundancy can be controlled
            in a database as opposed to file processing.{" "}
            <strong className="whitespace-nowrap">(2.5 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            State one objective of the principle of relational database.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
          <li>
            Briefly describe the Internal level of a database schema, listing
            its attributes/characteristics.{" "}
            <strong className="whitespace-nowrap">(5 marks)</strong>
            <Answers questionNumber="5d" />
          </li>
          <li>
            State the difference between DML and DDL facilities provided in a
            database management system.{" "}
            <strong className="whitespace-nowrap">(4 marks)</strong>
            <Answers questionNumber="5e" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Question 6</h4>
        <div className="overflow-auto">
          <table className="mb-2 mt-2 border-collapse border">
            <thead>
              <tr>
                <th className="border px-6 text-center">Cust_ID</th>
                <th className="border px-6 text-center">Customer_Name</th>
                <th className="border px-6 text-center">Item</th>
                <th className="border px-6 text-center">Shipping_Address</th>
                <th className="border px-6 text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-6 text-center">1001</td>
                <td className="border px-6 text-center">Nnamdi Okeke</td>
                <td className="border px-6 text-center">Xbox One</td>
                <td className="border px-6 text-center">Lagos</td>
                <td className="border px-6 text-center">100,000</td>
              </tr>
              <tr>
                <td className="border px-6 text-center">1002</td>
                <td className="border px-6 text-center">Joy Obus</td>
                <td className="border px-6 text-center">Playstation 4</td>
                <td className="border px-6 text-center">Benin</td>
                <td className="border px-6 text-center">150,000</td>
              </tr>
              <tr>
                <td className="border px-6 text-center">1003</td>
                <td className="border px-6 text-center">Raymond Williams</td>
                <td className="border px-6 text-center">PS Vita</td>
                <td className="border px-6 text-center">Warri</td>
                <td className="border px-6 text-center">70,000</td>
              </tr>
              <tr>
                <td className="border px-6 text-center">1004</td>
                <td className="border px-6 text-center">Andrew Adeolu</td>
                <td className="border px-6 text-center">Mac Laptop</td>
                <td className="border px-6 text-center">Abuja</td>
                <td className="border px-6 text-center">200,000</td>
              </tr>
              <tr>
                <td className="border px-6 text-center">1005</td>
                <td className="border px-6 text-center">Mary Slessor</td>
                <td className="border px-6 text-center">Television</td>
                <td className="border px-6 text-center">Port Harcourt</td>
                <td className="border px-6 text-center">80,000</td>
              </tr>
              <tr>
                <td className="border px-6 text-center">1006</td>
                <td className="border px-6 text-center">Jane Okpara</td>
                <td className="border px-6 text-center">Rechargable Fan</td>
                <td className="border px-6 text-center">Benin</td>
                <td className="border px-6 text-center">20,000</td>
              </tr>
              <tr>
                <td className="border px-6 text-center">1007</td>
                <td className="border px-6 text-center">Chris Amodu</td>
                <td className="border px-6 text-center">Power Bank</td>
                <td className="border px-6 text-center">Abuja</td>
                <td className="border px-6 text-center">10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ol className="flex list-[lower-alpha] flex-col gap-2">
          <li>
            The relation above, CUSTOMERS, contains data about the sales of
            items from an outline shop and all monetary value is in Naira. Use
            it to answer the questions below:
            <ol className="mx-4 list-[lower-roman]">
              <li>
                Write an SQL statement to view all the data available in the
                relation.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="6ai" />
              </li>
              <li>
                Write an SQL statement that queries only the customers that
                residing in Benin.{" "}
                <strong className="whitespace-nowrap">(2.5 marks)</strong>
                <Answers questionNumber="6aii" />
              </li>
              <li>
                Write an SQL statement to query the customers who have purchased
                goods worth N70,000 and above.{" "}
                <strong className="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="6aiii" />
              </li>
              <li>
                Write an SQL statement to update the data about Raymond Williams
                who is a repeat customer and has moved from Warri to Jos.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="6aiv" />
              </li>
              <li>
                Write an SQL statement to delete from the table all information
                about the customer &quot;Joy Obus&quot;.{" "}
                <strong className="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="6av" />
              </li>
            </ol>
          </li>
          <li>
            Within the concept of a Database, define a View.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="5b" />
          </li>
          <li>
            List three (3) examples of database usage in your environment.{" "}
            <strong className="whitespace-nowrap">(3 marks)</strong>
            <Answers questionNumber="5c" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
