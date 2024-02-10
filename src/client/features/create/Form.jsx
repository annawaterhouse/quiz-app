import { useCreateCardMutation } from "../learn/quizSlice";
import { useGetCategoriesQuery } from "../learn/quizSlice";

export default function Form() {
  const [createCard] = useCreateCardMutation();
  const { data: categories } = useGetCategoriesQuery();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCard = {
      categoryId: formData.get("categoryId"),
      question: formData.get("question"),
      answer: formData.get("answer"),
    }

    try {
      const response = await createCard(newCard).unwrap();
      console.log(response, "response from create card")
      // if (response.message) {
      //   setMessage(() => response.message);
      // }
      // if (response.data) {
      //   e.target.reset();
      //   navigate("/");
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmit} className="">
      <legend>Add a new quiz card</legend>
      <select name="categoryId" type="text" required>
        <option value="default">Category</option>
        {categories &&
          categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
      </select>
      <input name="question" type="text" placeholder="Question" required />
      <input name="answer" type="text" placeholder="Answer" required />
      <button type="submit">Add Card</button>
    </form>
  );
}
