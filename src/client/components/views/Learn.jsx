export default function Learn({ cards, categoryCards, saved }) {
  const data = cards || categoryCards || saved;
  console.log(data);
  return (
    <>
      {data &&
        Object.keys(data)?.map((dataId) => (
          <section key={dataId} className="relative py-4 rounded-lg">
            <section className="flex justify-between items-center">
              <h2 className="text-lg font-bold tracking-wide mb-2">{dataId}</h2>
              <button>+ New Card</button>
            </section>
            <ul className="grid gap-4">
              {data[dataId].map((card) => (
                <li
                  key={card.id}
                  className="grid grid-cols-12 rounded-md shadow-md  bg-white px-8 py-4"
                >
                  <section className="col-span-11">
                    <h3 className="text-lg font-semibold mb-1 mt-2">
                      {card.question}
                    </h3>
                    <p className="text-gray-700 text-sm font-light leading-relaxed mb-2">
                      {card.answer}
                    </p>
                  </section>
                  <section className="col-span-1">
                    <button>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3"
                      >
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                      </svg>
                    </button>
                  </section>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </>
  );
}
