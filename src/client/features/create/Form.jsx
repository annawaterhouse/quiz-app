export default function Form() {
  
  const handleSubmit = (e) => {
    console.log("submitting form");
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        className="border-black border"
        id="name"
        type="name"
        name="name"
      />
      <label htmlFor="email">Email</label>
      <input
        className="border-black border"
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea
        className="border-black border"
        id="message"
        name="message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
