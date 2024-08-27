import Link from "next/link";

export default function LinkList({ items, isOrdered }) {
  return (
    <div>
      {Object.keys(items).map((header) => (
        <div key={header}>
          {header && (
            <h3
              id={header}
              className="inline-block text-xl text-slate-900 dark:text-white"
            >
              {header.toUpperCase()}
            </h3>
          )}
          {isOrdered ? (
            <ol
              key={header}
              className="mb-4 list-inside list-[square] flex-col text-sky-500 marker:text-sky-500"
            >
              {items[header].map((item, index) => (
                <li key={index} className="list-[square]">
                  <Link
                    href={`${item?.route?.toLowerCase()}`}
                    className="hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ol>
          ) : (
            <ul
              key={header}
              className="mb-4 list-inside list-[square] flex-col text-sky-500 marker:text-sky-500"
            >
              {items[header].map((item, index) => (
                <li key={index} className="list-[square]">
                  <Link
                    href={`${item?.route}`}
                    className="hover:text-slate-400 hover:underline hover:decoration-sky-500 hover:underline-offset-4"
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
