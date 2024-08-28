import pqa from "@/utils/pastQuestionsArchive";
import LinkList from "@/components/LinkList";

export default function Department({ params }) {
  const { institution, department } = params;

  const sessionKeys = Object.keys(
    pqa[institution]["departments"][department]["sessions"],
  );
  const sessions = sessionKeys.map((sessionKey) => ({
    href: `/past-questions-archive/${institution}/${department}/${sessionKey}`,
    name: pqa[institution]["departments"][department]["sessions"][sessionKey][
      "name"
    ],
  }));

  return <LinkList items={sessions} isOrdered={true} />;
}
