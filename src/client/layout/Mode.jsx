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
      <label htmlFor="switch">
        <span>Learn</span>
        <input
          type="checkbox"
          id="switch"
          checked={mode}
          onChange={handleMode} />
        <span>Quiz</span>
      </label>
    </section>
  );
}
