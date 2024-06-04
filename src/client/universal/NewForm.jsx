import { useCreateCardMutation } from "../layout/quizSlice";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { Button } from "@/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";



export default function NewForm({ setOpen }) {
  const [createCard] = useCreateCardMutation();
  const { register, handleSubmit, formState: { errors } } = useForm();
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
    <Form>
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <FormField>
      <FormItem  {...register("category", { required: true })}>
              <FormLabel>Category</FormLabel>
              <Select>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
      </FormField>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
