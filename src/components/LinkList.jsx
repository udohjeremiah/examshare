import Link from "next/link";

export default function LinkList({ items, isOrdered }) {
  return (
    <>
      {isOrdered ? (
        <ol className="mb-4 list-inside list-[square] flex-col text-sky-500 marker:text-sky-500">
          {items.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ol>
      ) : (
        <ul className="mb-4 list-inside list-[square] flex-col text-sky-500 marker:text-sky-500">
          {items.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      )}
    </>
  );
}

function ListItem({ item, ...properties }) {
  return (
    <li className="list-[square]" {...properties}>
      <Link
        href={item?.href}
        className="hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
      >
        {item?.name}
      </Link>
    </li>
  );
}
