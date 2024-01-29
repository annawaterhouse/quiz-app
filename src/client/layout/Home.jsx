import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
        <Link to="/ds">Data Structures</Link>
        <p className="text-3xl font-bold underline">hello</p>
        <Link to="/js">Javascript</Link>
        <Link to="/react">React</Link>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </section>
  );
}
