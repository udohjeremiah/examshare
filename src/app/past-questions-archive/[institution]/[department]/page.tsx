import pqa from "@/utils/past-questions-archive";
import LinkList from "@/components/link-list";

export default async function Department({
  params,
}: {
  params: Promise<{ institution: string; department: string }>;
}) {
  const { institution, department } = await params;

  const sessionKeys = Object.keys(
    // @ts-expect-error — dynamic string index on inferred JSON type
    pqa[institution]["departments"][department]["sessions"],
  );
  const sessions = sessionKeys.map((sessionKey) => ({
    href: `/past-questions-archive/${institution}/${department}/${sessionKey}`,
    // @ts-expect-error — dynamic string index on inferred JSON type
    name: pqa[institution]["departments"][department]["sessions"][sessionKey][
      "name"
    ],
  }));

  return <LinkList items={sessions} isOrdered={true} />;
}
