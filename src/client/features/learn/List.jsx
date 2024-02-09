
export default function List({ cards, categoryCards, saved}) {
  const data = cards || categoryCards || saved;
  console.log(data)
    return (
      <>
        {data && Object.keys(data)?.map((dataId) => (
          <section key={dataId} className="relative py-4 bg-white rounded-lg">
            <section className="flex justify-between items-center">
              <h2 className="text-lg font-bold tracking-wide mb-2">{dataId}</h2>
              <button>
                + Add Card
              </button>
            </section>
            <ul>
              {data[dataId].map((card) => (
                <li key={card.id} className="rounded-md shadow-md px-8 py-4">
                  <section className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold mb-2 mt-2">{card.question}</h3>
                    <button>
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                      </svg>
                    </button>
                  </section>
                  <p className="text-gray-700 text-sm font-light leading-relaxed mb-2">{card.answer}</p>
                  
                </li>
              ))}
            </ul>
          </section>
        ))}
      </>
    );
  }
