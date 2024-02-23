import { useCreateCardMutation } from "../../layout/quizSlice";
import { useGetCategoriesQuery } from "../../layout/quizSlice";
import { useForm } from "react-hook-form"
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from "@mui/material";
import Select from '@mui/material/Select';

function CategoryInput({ categories }) {
  const [category, setCategory] = useState("");
  const handleCategory = (e) => setCategory(e.target.value);

  return (
   <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel variant="standard" htmlFor="category-select">
        Category
      </InputLabel>
        <Select
          labelId='category-select'
          defaultValue=''
          value={category}
          onChange={handleCategory}
        >
          <MenuItem value=''>Select...</MenuItem>
                {categories?.map((cat) => (
          <MenuItem key={cat.name} value={cat.name}>{cat.name}</MenuItem>      ))}
        </Select>

        </FormControl>
  )
}

export default function Form() {
  const [createCard] = useCreateCardMutation();
  const { data: categories } = useGetCategoriesQuery();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [data, setData] = useState({});

  const onSubmit = (data) => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white z-50 absolute top-1/2 left-1/2">
      <legend>Add a new quiz card</legend>
      <section className="flex flex-col">
      <CategoryInput categories={categories} />

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
          {...register("answer", { required: false })}
        />
      </section>
      <input type="submit" />
    </form>
  );
}
