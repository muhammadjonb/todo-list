import React, {memo} from "react";
import './AddList.css'
import { v4 as uuidv4 } from 'uuid'

 
export const AddList = memo((props) => {
    const {data, setData} = props;

    const hendleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const value = { id: uuidv4(), title };
        setData([...data, value]);
        e.target.title.value = "";
        localStorage.setItem("data", JSON.stringify([...data, value]));
      };

    return(
        <form className="form" onSubmit={hendleSubmit}>

            <input type="text" name="title"
              required
              autoCapitalize="off"
              autoFocus
              placeholder="Todo item" />
            <input type="submit" value="Add" />
          </form>
    );
});
