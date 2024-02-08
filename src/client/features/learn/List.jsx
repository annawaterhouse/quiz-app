
export default function List({ cards, categoryCards }) {
  const data = cards || categoryCards;
  console.log(data)
    return (
      <>
        {data && Object.keys(data)?.map((dataId) => (
          <section key={dataId} className="flex flex-col">
            <h2 className="text-2xl">{dataId}</h2>
            <ul className="rounded-xl shadow-md bg-clip-border">
              {data[dataId].map((card) => (
                <li key={card.id} className="p-4">
                  <h3 className="text-xl font-semibold tracking-normal leading-snug mt-2 mb-2">{card.question}</h3>
                  <p className="text-gray-700 text-base font-light leading-relaxed mb-2">{card.answer}</p>
                  {/* <section className="text-xs">
                    <p>save</p>
                    <p>edit</p>
                    <p>delete</p>
                  </section> */}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </>
    );
  }
