import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";

export default function LegalDisclaimer() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-14 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:shadow-sky-800 md:px-10">
      <BreadCrumb />
      <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">
        Disclaimer
      </h2>
      <p>Last updated: November 17, 2023</p>
      <div className="max-w-prose space-y-6">
        <h3 className="mb-2 text-2xl font-medium text-slate-900 dark:text-white">
          Interpretation and Definitions
        </h3>
        <h4 className="mb-2 text-xl font-medium text-slate-900 dark:text-white">
          Interpretation
        </h4>
        <p>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
        <h4 className="mb-2 text-xl font-medium text-slate-900 dark:text-white">
          Definitions
        </h4>
        <p>For the purposes of this Disclaimer:</p>
        <ul className="list-disc space-y-6 pl-10">
          <li>
            <strong>Company</strong> (referred to as either &quot;the
            Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in
            this Disclaimer) refers to ExamShare, 25 Chichester Road, Sapele,
            Delta State, Nigeria.
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>You</strong> means the individual accessing the Service, or
            the company, or other legal entity on behalf of which such
            individual is accessing or using the Service, as applicable.
          </li>
          <li>
            <strong>Website</strong> refers to ExamShare, accessible from{" "}
            <a
              href="https://examshare.vercel.app"
              rel="external nofollow noopener"
              target="_blank"
              className="text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
            >
              https://examshare.vercel.app
            </a>
          </li>
        </ul>
        <h3 className="mb-2 text-2xl font-medium text-slate-900 dark:text-white">
          Disclaimer
        </h3>
        <p>
          The information contained on the Service is for general information
          purposes only.
        </p>
        <p>
          The Company assumes no responsibility for errors or omissions in the
          contents of the Service.
        </p>
        <p>
          In no event shall the Company be liable for any special, direct,
          indirect, consequential, or incidental damages or any damages
          whatsoever, whether in an action of contract, negligence or other
          tort, arising out of or in connection with the use of the Service or
          the contents of the Service. The Company reserves the right to make
          additions, deletions, or modifications to the contents on the Service
          at any time without prior notice. This Disclaimer has been created
          with the help of the{" "}
          <Link
            href="https://www.freeprivacypolicy.com/free-disclaimer-generator/"
            target="_blank"
            className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
          >
            Free Disclaimer Generator
          </Link>
          .
        </p>
        <p>
          The Company does not warrant that the Service is free of viruses or
          other harmful components.
        </p>
        <h3 className="mb-2 text-2xl font-medium text-slate-900 dark:text-white">
          External Links Disclaimer
        </h3>
        <p>
          The Service may contain links to external websites that are not
          provided or maintained by or in any way affiliated with the Company.
        </p>
        <p>
          Please note that the Company does not guarantee the accuracy,
          relevance, timeliness, or completeness of any information on these
          external websites.
        </p>
        <h3 className="mb-2 text-2xl font-medium text-slate-900 dark:text-white">
          Errors and Omissions Disclaimer
        </h3>
        <p>
          The information given by the Service is for general guidance on
          matters of interest only. Even if the Company takes every precaution
          to ensure that the content of the Service is both current and
          accurate, errors can occur. Plus, given the changing nature of laws,
          rules and regulations, there may be delays, omissions or inaccuracies
          in the information contained on the Service.
        </p>
        <p>
          The Company is not responsible for any errors or omissions, or for the
          results obtained from the use of this information.
        </p>
        <h3 className="mb-2 text-2xl font-medium text-slate-900 dark:text-white">
          Fair Use Disclaimer
        </h3>
        <p>
          The Company may use copyrighted material which has not always been
          specifically authorized by the copyright owner. The Company is making
          such material available for criticism, comment, news reporting,
          teaching, scholarship, or research.
        </p>
        <p>
          The Company believes this constitutes a &quot;fair use&quot; of any
          such copyrighted material as provided for in section 107 of the United
          States Copyright law.
        </p>
        <p>
          If You wish to use copyrighted material from the Service for your own
          purposes that go beyond fair use, You must obtain permission from the
          copyright owner.
        </p>
        <h3 className="mb-2 text-2xl font-medium text-slate-900 dark:text-white">
          Views Expressed Disclaimer
        </h3>
        <p>
          The Service may contain views and opinions which are those of the
          authors and do not necessarily reflect the official policy or position
          of any other author, agency, organization, employer or company,
          including the Company.
        </p>
        <p>
          Comments published by users are their sole responsibility and the
          users will take full responsibility, liability and blame for any libel
          or litigation that results from something written in or as a direct
          result of something written in a comment. The Company is not liable
          for any comment published by users and reserves the right to delete
          any comment for any reason whatsoever.
        </p>
        <h3 className="mb-2 text-2xl font-medium text-slate-900 dark:text-white">
          No Responsibility Disclaimer
        </h3>
        <p>
          The information on the Service is provided with the understanding that
          the Company is not herein engaged in rendering legal, accounting, tax,
          or other professional advice and services. As such, it should not be
          used as a substitute for consultation with professional accounting,
          tax, legal or other competent advisers.
        </p>
        <p>
          In no event shall the Company or its suppliers be liable for any
          special, incidental, indirect, or consequential damages whatsoever
          arising out of or in connection with your access or use or inability
          to access or use the Service.
        </p>
        <h3 className="mb-2 text-2xl font-medium text-slate-900 dark:text-white">
          &quot;Use at Your Own Risk&quot; Disclaimer
        </h3>
        <p>
          All information in the Service is provided &quot;as is&quot;, with no
          guarantee of completeness, accuracy, timeliness or of the results
          obtained from the use of this information, and without warranty of any
          kind, express or implied, including, but not limited to warranties of
          performance, merchantability and fitness for a particular purpose.
        </p>
        <p>
          The Company will not be liable to You or anyone else for any decision
          made or action taken in reliance on the information given by the
          Service or for any consequential, special or similar damages, even if
          advised of the possibility of such damages.
        </p>
        <h3 className="mb-2 text-2xl font-medium text-slate-900 dark:text-white">
          Contact Us
        </h3>
        <p>
          If you have any questions about this Disclaimer, You can contact Us:
        </p>
        <ul className="list-disc space-y-6 pl-10">
          <li>
            <p>
              By email:{" "}
              <Link
                href="mailto:examshare.vercel.app@gmail.com"
                className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
              >
                examshare.vercel.app@gmail.com
              </Link>
            </p>
          </li>
          <li>
            <p>
              By visiting this page on our website:{" "}
              <Link
                href="https://examshare.vercel.app/contact-us"
                rel="external nofollow noopener"
                target="_blank"
                className="font-bold text-sky-500 hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
              >
                https://examshare.vercel.app/contact-us
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
