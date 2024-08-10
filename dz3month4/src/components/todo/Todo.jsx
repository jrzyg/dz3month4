import style from './todo.module.css'

function Todo({number}) {
    return (
        <div className={style.text}>
            {number}
        </div>
    );
}

export default Todo;