export default function Learn({ cards, categoryCards, saved, setOpen}) {
  const data = cards || categoryCards || saved;
  console.log(data);
  return (
    <>
      {data &&
        Object.keys(data)?.map((dataId) => (
          <section key={dataId} className="container flow">
            <h2 className="text-500">{dataId}
              <span> {data[dataId]?.length}</span>
            </h2>
            <section className="tabs flex">
              <div className="mode-btn">
                <button>Learn</button>
                <button>Quiz</button>
              </div>
              <button onClick={()=>setOpen(true)}>+</button>
            </section>
            <ul className="flow">
              {data[dataId]?.map((card) => (
                <li key={card.id} className="card" style={{ padding: "2em" }}>
                  <h3 className="text-400 flex" style={{ marginBottom: "1em" }}>
                    {card.question}
                    <span>
                      <svg
                        style={{ width: "1em" }}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3"
                      >
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                      </svg>
                    </span>
                  </h3>
                  <p className="text-200">{card.answer}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </>
  );
}
