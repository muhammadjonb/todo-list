import React, {memo} from "react";
import './modal.css'

export const Modal = memo((props) => {
    const{item, setItem, data, setData} = props;

    const hendleClose = () => {
        setItem(false)
      };

    const hendleUpdate = (e) => {
        (e).preventDefault();
        const newData = [...data];
        const find = newData.find((i) => i.id === item.id);
        find.title = e.target.title.value;
        const index = newData.findIndex((i) => i.id === item.id);
        newData.splice(index, 1, find);
        setData(newData);
        localStorage.setItem("data", JSON.stringify(newData))
        hendleClose();
      };
      const hendleDelete = () => {
        const filter = data.filter((i) => i.id !== item.id)
        localStorage.setItem("data", JSON.stringify(filter))
        setData(filter);
        hendleClose();
      };

    return(
        <div className={item ? "modal" : "close-modal"}>
        <div className="modal-box">
          <div className="modal-header">
            <h3>Update <span>Todo</span> item</h3>

            <button onClick={hendleClose}>Close</button>
          </div>
          <form className="modal-form" onSubmit={hendleUpdate} >
            <input
              type="text"
              name="title"
              id=""
              value={item?.title}
              onChange={(e) => setItem({ ...item, title: e?.target?.value })}
            />



            <div>
              <button type="button" onClick={hendleDelete}>Delete</button>
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
});
export default memo(Modal)