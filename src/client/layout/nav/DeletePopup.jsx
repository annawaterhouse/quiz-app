export default function DeletePopup({ message, setMessage, name, onDelete, id }) {

  return (
      message && (
        <section className="absolute bottom-4 left-0 bg-white z-10">
          <article className="bg-blue-100 p-8 w-full">
            <button onClick={() => setMessage(false)}>x</button>
            <p className="text-xs">Are you sure you'd like to delete {name}?</p>
            <button onClick={() => onDelete(id)}>yes</button>
          </article>
        </section>
      )
    );
  }