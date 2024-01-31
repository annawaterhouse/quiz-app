export default function List({categoryCards}) {
    console.log(categoryCards, "categoryCards")
    return(
        <section>
            <ul>
                {categoryCards?.map((card) => (
                    <li key={card.id}>
                        <h2>{card.question}</h2>
                        <p>{card.answer}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}