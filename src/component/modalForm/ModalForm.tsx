import s from "./ModalForm.module.scss";
import { useHandleColorChange } from "../../utils/useHandleColorChange";
export default function ModalForm() {
  const { color, backgroundColor, handleColorChange } = useHandleColorChange();
  return (
    <form onSubmit={() => {}} className={s.schedulerForm}>
      <div className={s.title}>
        <input type="text" placeholder="Add Title" style={{ color: color }} />
        <input type="color" onChange={handleColorChange} />
      </div>
      <div className={s.separor}></div>
      <div className={s.schedulerData}>
        <div className={s.schedulerDate}>
          <input
            type="date"
            datatype=""
            className={s.start}
            style={{ backgroundColor: backgroundColor, color: color }}
          />
          <input
            type="date"
            className={s.end}
            style={{ backgroundColor: backgroundColor, color: color }}
          />
        </div>
      </div>
    </form>
  );
}
