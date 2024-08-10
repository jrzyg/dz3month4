import Todo from "../../components/todo/Todo";
import style from './todosPage.module.css'


const array = ["todo 1", "todo 2", "todo 3"]


function TodosPage() {
    return (
        <div className={style.todosPage}>
            {array.map((el, index) => <div key={index}><Todo number={el}/></div>)}
        </div>
    );
}

export default TodosPage;