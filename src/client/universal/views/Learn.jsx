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
                <li key={card.id} className="card">
                  <article className="info">
                    <h3 className="text-400 flex">
                      {card.question}
                    </h3>
                    <p className="text-200">{card.answer}</p>
                  </article>
                  <section className="icons">

                  </section>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </>
  );
}
