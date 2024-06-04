import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import { useGetCategoriesQuery } from "../layout/quizSlice";

export default function CategoryMenu() {
  const { data: categories } = useGetCategoriesQuery();
  return (
    <Select   {...register("category", { required: true })}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categories &&
          categories.map((cat) => (
            <SelectItem key={cat.id} value={cat.id}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
