import { LinkList } from "@/components/link-list";
import { pqa } from "@/utils/past-questions-archive";

export default async function Department({
  params,
}: {
  params: Promise<{ department: string; institution: string }>;
}) {
  const { department, institution } = await params;

  const sessionKeys = Object.keys(
    pqa[institution]["departments"][department]["sessions"],
  );
  const sessions = sessionKeys.map((sessionKey) => ({
    href: `/past-questions-archive/${institution}/${department}/${sessionKey}`,
    name: pqa[institution]["departments"][department]["sessions"][sessionKey][
      "name"
    ],
  }));

  return <LinkList isOrdered={true} items={sessions} />;
}
