import { useCreateCardMutation } from "../../layout/quizSlice";
import { useGetCategoriesQuery } from "../../layout/quizSlice";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from "@mui/material";
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

export default function Form() {
  const [createCard] = useCreateCardMutation();
  const { data: categories } = useGetCategoriesQuery();
  const { formState: { errors }, handleSubmit, control } = useForm();
  const [data, setData] = useState({});

  const onSubmit = async (data) => {
    setData(data);
    try {
      const response = await createCard(data).unwrap();
      console.log(response, "response from create card")

    } catch (err) {
      console.log(err);
    }
  }
  console.log(data, "data from form")

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white z-50 absolute ">
      <legend>Add a new quiz card</legend>
      <section className="flex flex-col">
        <FormControl variant="standard" error={Boolean(errors.category)}>
          <InputLabel htmlFor="category-select">Category</InputLabel>
          <Controller
            name="category"
            control={control}
            defaultValue=""
            rules={{ required: 'Category is required' }}
            render={({ field }) => (
              <Select
                {...field}
                labelId='category-select'
              >
                <MenuItem value=''>Select...</MenuItem>
                {categories?.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText>{errors.category?.message}</FormHelperText>
        </FormControl>
        <InputLabel variant="standard" htmlFor="category-select">
          Question
        </InputLabel>
        <Controller
          name="question"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Question"
              variant="standard"
              error={Boolean(errors.question)}
              helperText={errors.question ? 'Question is required' : null}
            />)}
        />
        <InputLabel variant="standard" htmlFor="category-select">
          Answer
        </InputLabel>
        <Controller
          name="answer"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Answer"
              variant="standard"
            />)}
        />
      </section>
      <input type="submit" />
    </form>
  );
}
