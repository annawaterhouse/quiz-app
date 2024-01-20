import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <section>
            <Link to="/quiz">Quiz</Link>
            <Link to="/learn">Learn</Link>
            <Link to="/ds">Data Structures</Link>
            <Link to="/js">Javascript</Link>
            <Link to="/react">React</Link>
            <h1>Home page</h1>
        </section>
    )
}