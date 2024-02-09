import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "./modeSlice";
export default function Mode() {
  //redux for list to quiz mode state management
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  const handleMode = () => {
    dispatch(toggleMode(!mode));
  };

  return (
    <section>
      <label htmlFor="switch" className="flex items-center md:gap-x-2">
        <span className="hidden md:block text-sm font-medium md:text-lg text-black">Learn</span>
        <input
          type="checkbox"
          className="sr-only"
          id="switch"
          checked={mode}
          onChange={handleMode}
        />
        <span
          className={`slider mr-2 ml-2 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
            mode ? "bg-green-400" : "bg-blue-400"
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              mode ? "translate-x-6" : ""
            }`}
          ></span>
        </span>
        <span className="hidden md:block font-medium md:text-lg text-black">Quiz</span>
      </label>
    </section>
  );
}
