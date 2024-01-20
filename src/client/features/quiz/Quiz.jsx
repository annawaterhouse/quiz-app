import Flash from './Flash'
import Forum from './Forum'
import { Link } from 'react-router-dom'

export default function Quiz() {
    //last link click to filter the flashcards by category
    //list view vs card view
    return (
        <section>
            <Link to="/">Go to home</Link>
            <Link to="/learn">Continue learning</Link>
            <h1>Quiz</h1>
            <Flash />
            <Forum />
        </section>
    )
}