import { useCreateCardMutation } from "../../layout/quizSlice";
import { useGetCategoriesQuery } from "../../layout/quizSlice";
import { useForm } from "react-hook-form"
import { useState } from "react";


export default function Form() {
  // const [createCard] = useCreateCardMutation();
  // const { data: categories } = useGetCategoriesQuery();
  const { register,  formState: { errors }, handleSubmit } = useForm();
  const [ data, setData ] = useState({ question:});


  const onSubmit =  (data) => {
    setData(data);

    }
    // try {
    //   const response = await createCard(newCard).unwrap();
    //   console.log(response, "response from create card")
      // if (response.message) {
      //   setMessage(() => response.message);
      // }
      // if (response.data) {
      //   e.target.reset();
      //   navigate("/");
      // }
    // } catch (err) {
    //   console.log(err);
    // }
    console.log(data, "data from form")

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="z-50 absolute top-1/2 left-1/2">
      <legend>Add a new quiz card</legend>
        <section>
        <label>Category</label>
          <label>Question</label>
          <input
        {...register("question", { required: true }
        )}
        aria-invalid={errors.question ? "true" : "false"}
      />
      {errors.question?.type === "required" && (
        <p role="alert">Question is required</p>
      )}
      <label>Answer</label>
      <input
        {...register("answer", { required: false})}
      />
        </section>
      <input type="submit" />
    </form>
  );
}
