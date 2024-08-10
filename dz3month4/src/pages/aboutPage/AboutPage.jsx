import Description from "../../components/description/Description";
import clsx from "clsx";
import style from './aboutPage.module.css'

function AboutPage() {
    return (
        <div className={clsx(style.aboutPage, style.text)}>
            <Description page={{title: "Title 2", description: "description 2"}}/>
        </div>
    );
}

export default AboutPage;