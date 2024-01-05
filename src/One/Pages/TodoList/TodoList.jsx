import {Fragment, useState} from "react";
import "./TodoList.css"
import { Modal } from "../../Components/Modal/modal";
import { Lists } from "../../Components/Lists/Lists"
import { AddList } from "../../Components/AddList/Addlist";


export const TodoList = () =>{
    const storage = JSON.parse(localStorage.getItem("data") || "[]")
    const [data, setData] = useState([...storage]);
    const [item, setItem] = useState(false);
  
    const hendleEdit = (item) => {
      setItem(item)
    };
    return(
        <Fragment>
            <div className="App">
        <div className="todo-container">
          <AddList data={data} setData={setData} />
          <Lists data={data} hendleEdit={hendleEdit} />
        </div>
      </div>
      < Modal item={item} setItem={setItem} data={data} setData={setData} />
        </Fragment>
    );
};