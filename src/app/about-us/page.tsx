import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";

export const metadata = {
  title: "About Us | ExamShare",
};

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 md:px-10">
      <BreadCrumb />
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
        About Us
      </h2>
      <div className="flex max-w-prose flex-col gap-6">
        <div>
          <p className="mb-2">
            Welcome to ExamShare, a platform meticulously crafted to enhance
            your exam preparation journey. Our team comprises dedicated
            individuals, primarily students, who have united with a shared
            mission: to provide a robust repository of past examination
            questions.
          </p>
          <p>
            Our commitment extends beyond personal success; we are ardent
            advocates of{" "}
            <Link
              href="https://opensource.com/resources/what-open-education"
              className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
            >
              open-source education
            </Link>
            , contributing to the global educational community.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">Why ExamShare?</h3>
          <p>
            In a world increasingly reliant on information and technology, we
            recognized the need for a reliable resource dedicated to sharing
            past examination questions and solutions. We identified common
            challenges in the way students prepare for exams and resolved to
            offer an innovative solution.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">Our Inspiration</h3>
          <p className="mb-2">
            Our inspiration stems from the famous Winston Churchill quote:
          </p>
          <blockquote className="mb-2">
            <p className="rounded-md border bg-sky-50 p-4 before:content-['\201C'] after:content-['\201D'] dark:bg-sky-900">
              Those who fail to learn from history are doomed to repeat it.
            </p>
          </blockquote>
          <p className="mb-2">And the accompanying irony:</p>
          <blockquote className="mb-2">
            <p className="rounded-md border bg-sky-50 p-4 before:content-['\201C'] after:content-['\201D'] dark:bg-sky-900">
              Those who study history are doomed to stand by while everyone else
              repeats it.
            </p>
          </blockquote>
          <p className="mb-2">
            The first quote underscores the importance of learning from the
            past, emphasizing that understanding the format and content of
            previous exams can significantly improve your preparation.
          </p>
          <p>
            The second quote highlights the risk of assuming that past
            examination questions mirror those you will face. We encourage using
            these questions solely for preparatory purposes, avoiding any
            expectation of encountering the exact same questions in your exams.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">What We Offer</h3>
          <p className="mb-2">
            At ExamShare, we aim to provide you with the tools you need to excel
            in your exams. Our platform allows you to access a wealth of past
            examination questions and their solutions, enabling you to prepare
            comprehensively and with confidence.
          </p>
          <p>
            Join us in revolutionizing the way students approach their exams.
            Explore the world of ExamShare and unlock the keys to successful
            examination preparation.
          </p>
        </div>
      </div>
    </div>
  );
}
