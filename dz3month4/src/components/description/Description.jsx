import style from './description.module.css'

function Description({page}) {
    return (
        <>
            <h2 className={style.text}>{page.title} {page.description}</h2>
        </>
    );
}

export default Description;