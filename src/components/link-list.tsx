import Link from "next/link";

interface LinkItem {
  href: string;
  name: string;
}

export function LinkList({
  isOrdered,
  items,
}: {
  isOrdered: boolean;
  items: LinkItem[];
}) {
  return (
    <>
      {isOrdered ? (
        <ol className="mb-4 list-inside list-[square] flex-col text-sky-500 marker:text-sky-500">
          {items.map((item: LinkItem, index: number) => (
            <ListItem item={item} key={index} />
          ))}
        </ol>
      ) : (
        <ul className="mb-4 list-inside list-[square] flex-col text-sky-500 marker:text-sky-500">
          {items.map((item: LinkItem, index: number) => (
            <ListItem item={item} key={index} />
          ))}
        </ul>
      )}
    </>
  );
}

function ListItem({
  item,
  ...properties
}: {
  [key: string]: unknown;
  item: LinkItem;
}) {
  return (
    <li className="list-[square]" {...properties}>
      <Link
        className="hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
        href={item?.href}
      >
        {item?.name}
      </Link>
    </li>
  );
}
