import { useCreateCardMutation } from "../../layout/quizSlice";
import { useGetCategoriesQuery } from "../../layout/quizSlice";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Form({ setOpen }) {
  const [createCard] = useCreateCardMutation();
  const { data: categories } = useGetCategoriesQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState({});

  const onSubmit = async (data) => {
    if (!data) return;
    setData(data);
    try {
      const response = await createCard(data).unwrap();
      setOpen(false);
      console.log(response, "response from create card");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data, "data from form");

  return (
    <form className="form container" onSubmit={handleSubmit(onSubmit)}>
      <h2>Create Card</h2>
      <div className="grid">
        <select {...register("category", { required: true })}>
          <option value="">Category</option>
          {categories &&
            categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
        </select>
        {errors.category && <span>Category is required</span>}
        <input
          {...register("question", { required: true })}
          placeholder="Question"
        />
        {errors.question && <span>This field is required</span>}
        <input
          {...register("answer", { required: true })}
          placeholder="Answer"
        />
        {errors.answer && <span>This field is required</span>}
        <input type="submit" />
      </div>
    </form>
  );
}
