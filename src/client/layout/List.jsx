export default function List({ cards, categoryCards }) {

    return (
      <section>
        {cards && Object.keys(cards)?.map((dataId) => (
          <table key={dataId}>
            <thead>
              <tr>
                <th>starred</th>
                <th>Question</th>
                <th>Answer</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cards[dataId].map((card) => (
                <tr key={card.id}>
                  <td>{card.starred}</td>
                  <td>{card.question}</td>
                  <td>{card.answer}</td>
                  <td>Edit icon</td>
                  <td>Delete icon</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
        {categoryCards && (
        <table>
        <thead>
              <tr>
                <th>starred</th>
                <th>Question</th>
                <th>Answer</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
        {categoryCards.map((card) => (
            <tr key={card.id}>
                <td>{card.starred}</td>
                <td>{card.question}</td>
                <td>{card.answer}</td>
                <td>Edit icon</td>
                <td>Delete icon</td>
            </tr>
        ))}
            </table>
        )}
        
      </section>
    );
  }
