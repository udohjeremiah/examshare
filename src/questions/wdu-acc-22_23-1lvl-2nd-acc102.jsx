import Questions from "@/components/Questions";
import Answers from "@/components/Answers";

export default function ACC102() {
  return (
    <Questions
      school="western delta university"
      college="social and management sciences"
      department="accounting and finance"
      session="2022/2023"
      semester="second semester"
      courseCode="ACC102"
      courseTitle="introduction to financial accounting II"
      allowedTime="3hrs"
      instruction="attempt all questions in section A and B. attempt question 1 and any other 2 questions in section c"
    >
      <li>
        <h4 className="mb-2 font-bold">Section A: (10 marks)</h4>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            _______ is not a reason for disagreement between the cash book and
            the bank statement (a) Unpresented cheques (b) Uncredited cheques
            (c) Bill receivable (d) Standing order
            <Answers questionNumber="sectionA-1" />
          </li>
          <li>
            _______ is an obligation which a business is legally bound to pay
            (a) Liabilities (b) Income (c) Capital (d) Assets
            <Answers questionNumber="sectionA-2" />
          </li>
          <li>
            _______ is the depreciation method that ensures reduction in
            depreciation charged agaisnt income on non-current asset (a)
            Straight line method (b) Sinking fund method (c) Revaluation method
            (d) Reducing balance method
            <Answers questionNumber="sectionA-3" />
          </li>
          <li>
            _______ is an order made by a customer to the bank to make regular
            payment to somebody (a) Credit transfer (b) Standing order (c)
            Dividend (d) Direct debits
            <Answers questionNumber="sectionA-4" />
          </li>
          <li>
            _______ ratio shows the number of times stock is turned over within
            the period. (a) Currency ratio (b) Inventory turnover (c) Debtor
            ratio (d) Dividend yield
            <Answers questionNumber="sectionA-5" />
          </li>
          <li>
            _______ method assumes that inventories purchased or produced first
            are sold first. (a) LIFO method (b) FIFO method (c) weighted Average
            Method (d) Net Realisable Value
            <Answers questionNumber="sectionA-6" />
          </li>
          <li>
            _______ account can be defined as the account used to record the
            difference on a trial balance temporarily until the errors are
            detected and corrected. (a) Suspense (b) Trading (c) Cash (d)
            Purchases
            <Answers questionNumber="sectionA-7" />
          </li>
          <li>
            _______ method makes provision for equal amount to be charged as
            depreciation for each year of useful life of an asset. (a) Straight
            line (b) Revaluation (c) Depreciation (d) Accrual
            <Answers questionNumber="sectionA-8" />
          </li>
          <li>
            The following are methods of inventory valuation except _______ (a)
            LIFO (b) FIFO (c) WAP (d) IFRS
            <Answers questionNumber="sectionA-9" />
          </li>
          <li>
            The following are examples of intangible assets except _______ (a)
            Goodwill (b) Inventory (c) Patent right (d) Copy right
            <Answers questionNumber="sectionA-10" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Section B: (10 marks)</h4>
        <ol className="flex list-decimal flex-col gap-2">
          <li>
            The acronym LIFO stands for <Answers questionNumber="sectionB-1" />
          </li>
          <li>
            List two reasons for disagreement between the cash book and the bank
            statement
            <Answers questionNumber="sectionB-2" />
          </li>
          <li>
            List two methods of depreciation{" "}
            <Answers questionNumber="sectionB-3" />
          </li>
          <li>
            List two types of accounting ratios{" "}
            <Answers questionNumber="sectionB-4" />
          </li>
          <li>
            List the two formats for preparing financial statements{" "}
            <Answers questionNumber="sectionB-5" />
          </li>
        </ol>
      </li>

      <li>
        <h4 className="mb-2 font-bold">Section C: (50 marks)</h4>
        <ol className="flex flex-col gap-2">
          <li>
            <h5 className="mb-2 font-bold">Question 1</h5>
            <p className="mb-2">
              Azazi commenced business as a sole trader in March 2023 as a
              textile merchant. The following are the details of
              &quot;Ankara&quot; purchased and sold by him in March, 2023.
            </p>
            <div className="mb-2">
              <p className="space-x-4">
                <span>March 4th</span>
                <span>purchased 100 bundles at N1,000 each</span>
              </p>
              <p className="space-x-4">
                <span>March 6th</span>
                <span>purchased 150 bundles at N1,000 each</span>
              </p>
              <p className="space-x-4">
                <span>March 8th</span>
                <span>sold 80 bundles at N1,800 each</span>
              </p>
              <p className="space-x-4">
                <span>March 13th</span>
                <span>sold 90 bundles at N1,850 each</span>
              </p>
              <p className="space-x-4">
                <span>March 18th</span>
                <span>purchased 70 bundles at N1,200 each</span>
              </p>
              <p className="space-x-4">
                <span>March 22nd</span>
                <span>sold 50 bundles at N1,950 each</span>
              </p>
              <p className="space-x-4">
                <span>March 25th</span>
                <span>sold 60 bundles at N1,800 each</span>
              </p>
              <p className="space-x-4">
                <span>March 28th</span>
                <span>purchased 90 bundles at N1,250 each</span>
              </p>
              <p className="space-x-4">
                <span>March 31st</span>
                <span>sold 50 bundles at N1,900 each</span>
              </p>
            </div>
            Required: Using First-In-First-Out (FIFO), calculate the value of
            closing inventory at 31st March, 2023 and prepare the profit or loss
            account for the month{" "}
            <strong class="whitespace-nowrap">(20 marks)</strong>
            <Answers questionNumber="sectionC-1" />
          </li>
          <li>
            <h5 className="mb-2 font-bold">Question 2</h5>
            <ol className="flex list-[lower-alpha] flex-col gap-2">
              <li>
                What is a Bank Reconcilation Statement?{" "}
                <strong class="whitespace-nowrap">(5 marks)</strong>
                <Answers questionNumber="sectionC-2a" />
              </li>
              <li>
                List and explain five reasons for disagreement between cash book
                and bank statement{" "}
                <strong class="whitespace-nowrap">(10 marks)</strong>
                <Answers questionNumber="sectionC-2b" />
              </li>
            </ol>
          </li>
          <li>
            <h5 className="mb-2 font-bold">Question 3</h5>
            <p className="mb-2">
              Use the following information from the books of Ojo enterprises to
              answer the question below:
            </p>
            <div className="mb-2">
              <p className="space-x-4">
                <span>Sales</span>
                <span>N45,000</span>
              </p>
              <p className="space-x-4">
                <span>Opening inventory</span>
                <span>N20,000</span>
              </p>
              <p className="space-x-4">
                <span>Closing inventory</span>
                <span>N30,000</span>
              </p>
              <p className="space-x-4">
                <span>Expenses</span>
                <span>N15,000</span>
              </p>
              <p className="space-x-4">
                <span>Non-current asset</span>
                <span>40,000</span>
              </p>
              <p className="space-x-4">
                <span>Receivables</span>
                <span>N10,000</span>
              </p>
              <p className="space-x-4">
                <span>Payables</span>
                <span>N5,000</span>
              </p>
              <p className="space-x-4">
                <span>Purchases</span>
                <span>25,000</span>
              </p>
            </div>
            Required: Calculate the following:
            <ol className="flex list-[lower-alpha] flex-col gap-2">
              <li>Cost of goods sold</li>
              <li>Net profit</li>
              <li>Current ratio</li>
              <li>Working capital</li>
              <li>Net profit percentage</li>
            </ol>
            <strong class="whitespace-nowrap">(15 marks)</strong>
            <Answers questionNumber="sectionC-3" />
          </li>
          <li>
            <h5 className="mb-2 font-bold">Question 4</h5>
            <ol className="flex list-[lower-alpha] flex-col gap-2">
              <li>
                Define depreciation{" "}
                <strong class="whitespace-nowrap">(2 marks)</strong>
                <Answers questionNumber="sectionC-4a" />
              </li>
              <li>
                List 3 causes of depreciation{" "}
                <strong class="whitespace-nowrap">(3 marks)</strong>
                <Answers questionNumber="sectionC-4b" />
              </li>
              <li>
                Stephanie & Co. bought a laptop on the 1/7/2023 for office use
                at a cost of #120,000. The equipment is expected to have a
                useful of 4 years. The scrap value of the computer is estimated
                at #20,000. Using sum-of-the-digit method, calculate the annual
                depreciation.{" "}
                <strong class="whitespace-nowrap">(10 marks)</strong>
                <Answers questionNumber="sectionC-4c" />
              </li>
            </ol>
          </li>
          <li>
            <h5 className="mb-2 font-bold">Question 5</h5>
            <p className="mb-2">
              The following information has been extracted from the books of WDU
              enterprises:
            </p>
            <div className="mb-2">
              <p className="space-x-4">
                <span>Sales</span>
                <span>N50,000</span>
              </p>
              <p className="space-x-4">
                <span>Opening inventory</span>
                <span>N5,000</span>
              </p>
              <p className="space-x-4">
                <span>Purchases</span>
                <span>N20,000</span>
              </p>
              <p className="space-x-4">
                <span>Returned outwards</span>
                <span>N1,000</span>
              </p>
              <p className="space-x-4">
                <span>Closing inventory</span>
                <span>N2,500</span>
              </p>
              <p className="space-x-4">
                <span>Carriage inward</span>
                <span>N2,500</span>
              </p>
              <p className="space-x-4">
                <span>Wages</span>
                <span>N5,000</span>
              </p>
              <p className="space-x-4">
                <span>Marketing expenses</span>
                <span>5,000</span>
              </p>
              <p className="space-x-4">
                <span>Return inwards</span>
                <span>2,500</span>
              </p>
            </div>
            You are required to prepare the trading account of the business{" "}
            <strong class="whitespace-nowrap">(15 marks)</strong>
            <Answers questionNumber="sectionC-5" />
          </li>
        </ol>
      </li>
    </Questions>
  );
}
