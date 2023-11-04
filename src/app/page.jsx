import Link from "next/link";
import { FaRegCompass } from "react-icons/fa";
import { LiaUsersSolid } from "react-icons/lia";
import { BsGlobe } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-6 bg-sky-50 px-4 py-20 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:bg-sky-900 dark:shadow-sky-800 md:px-10 lg:flex-row">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl lg:text-left lg:text-7xl">
            ELEVATE YOUR EXAMS
          </h2>
          <p className="max-w-prose text-center md:text-lg lg:text-left lg:text-xl">
            Welcome to the thrilling world of ExamShare, an open source project
            for sharing past examination questions in higher education. Conquer
            those exams and help others do the same!
          </p>
          <div className="flex w-full flex-col gap-4">
            <Link
              href="/past-questions-archive"
              className="rounded-xl bg-sky-500 p-3 text-center font-semibold text-white hover:bg-sky-600 active:bg-sky-700 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-300 dark:active:bg-sky-500"
            >
              Explore Past Questions
            </Link>
            <Link
              href="/submit-past-question"
              className="rounded-xl border border-sky-700 p-3 text-center font-semibold text-sky-700 hover:bg-sky-100 active:bg-sky-200 dark:border-sky-300 dark:text-sky-300 dark:hover:bg-sky-950 dark:active:bg-sky-900"
            >
              Submit a Past Question
            </Link>
          </div>
        </div>
        <Image
          src="/hero_image.svg"
          alt="A girl holding a book in her hands while surrounded by other books, looking at a spaceship flying into the air"
          width={1664}
          height={1117}
          priority
          className="lg:w-6/12"
        />
      </section>

      <section
        id="discover-examshare"
        className="flex flex-col items-center gap-7 px-4 py-14 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:shadow-sky-800 md:px-10 lg:flex-row"
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Discover ExamShare
          </h2>
          <div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <FaRegCompass size={25} />
                <h3 className="text-xl">Past Goldmines</h3>
              </div>
              <p className="ml-3 max-w-prose border-l border-sky-200 px-5 pb-6 pt-2 dark:border-sky-700">
                There is nothing new under the sun. Explore questions from
                earlier years and beyond, generously shared by individuals who
                have taken these exams before you, to enhance your exam
                preparation.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <LiaUsersSolid size={25} />
                <h3 className="text-xl">Boost Learning</h3>
              </div>
              <p className="ml-3 max-w-prose border-l border-sky-200 px-5 pb-6 pt-2 dark:border-sky-700">
                Unlock the potential of collaborative learning. Share, discuss,
                and learn from others&apos; answers to these past examination
                questions.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <BsGlobe size={25} />
                <h3 className="text-xl">Help The Future</h3>
              </div>
              <p className="ml-3 max-w-prose px-5 pb-6 pt-2">
                Following the example set by generous individuals who shared
                with you, assist future generations in their learning journey by
                sharing your own past examination questions. This simple act
                adds value to both the community and global education.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/help_image.svg"
          alt="A young man sitting and extending his hands to assist a young girl who is falling on the ground and reaching out for help"
          width={1664}
          height={1117}
          priority
          className="lg:w-5/12"
        />
      </section>

      <section className="flex flex-col gap-6 bg-sky-50 px-4 py-14 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:bg-sky-900 dark:shadow-sky-800 md:px-10">
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-sky-600 p-12 text-white dark:bg-sky-400 dark:text-sky-50">
          <h3 className="text-4xl font-extrabold">500+</h3>
          <p className="text-3xl font-medium">Institutions</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-sky-600 p-12 text-white dark:bg-sky-400 dark:text-sky-50">
          <h3 className="text-4xl font-extrabold">20,000+</h3>
          <p className="text-3xl font-medium">Questions</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-sky-600 p-12 text-white dark:bg-sky-400 dark:text-sky-50">
          <h3 className="text-4xl font-extrabold">10,000+</h3>
          <p className="text-3xl font-medium">Users</p>
        </div>
      </section>

      <section
        id="most-faqs"
        className="flex flex-col items-center gap-7 px-4 py-14 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:shadow-sky-800 md:px-10 lg:flex-row"
      >
        <Image
          src="/faq.svg"
          alt=""
          width={1000}
          height={659}
          className="lg:w-5/12"
        />
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="mb-2 max-w-prose font-medium text-slate-900 dark:text-white">
                How can I view the past exam questions for my school?
              </h3>
              <p className="max-w-prose text-sm">
                To access past exam questions for your school, go to the{" "}
                <Link
                  href="/#most-faqs"
                  className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
                >
                  past questions archive page
                </Link>{" "}
                and locate your school listed alphabetically. Click on your
                school, and you will be directed to a dedicated section
                displaying the <strong>available</strong> past questions for
                your school. From there, select the department, followed by the
                session, level, semester, and course to view the past questions.
                If there are no past questions available for your school, you
                will be redirected to a 404 error page.
              </p>
            </div>
            <div>
              <h3 className="mb-2 max-w-prose font-medium text-slate-900 dark:text-white">
                How can I share my own past exam questions?
              </h3>
              <p className="max-w-prose text-sm">
                Simply upload your past examination questions in the dedicated
                section. Share the wisdom!
              </p>
            </div>
            <div>
              <h3 className="mb-2 max-w-prose font-medium text-slate-900 dark:text-white">
                Is the content verified?
              </h3>
              <p className="max-w-prose text-sm">
                Yes! Our enthusiastic team carefully reviews and curates each
                question for accuracy and relevance.
              </p>
            </div>
            <div>
              <h3 className="mb-2 max-w-prose font-medium text-slate-900 dark:text-white">
                Are my contributions anonymous?
              </h3>
              <p className="max-w-prose text-sm">
                Absolutely! We value your privacy. You can choose to remain
                anonymous or take credit for your contributions.
              </p>
            </div>
            <div>
              <h3 className="mb-2 max-w-prose font-medium text-slate-900 dark:text-white">
                How can I contribute to the development of ExamShare?
              </h3>
              <p className="max-w-prose text-sm">
                ExamShare is an open-source project, so its survival relies on
                your contributions, which are highly valued and appreciated.
                Please visit our ExamShare repository on GitHub, where the code
                is hosted live, and start contributing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
