/* ==== Style ==== */
import css from './Copy.module.css';

function Copy() {
    return(
        <div className={css.copy}>
            &copy; Camilla Tofani<br />
            Project for <a href="https://www.start2impact.it/" target="_blank" className="footerLink">@Start2Impact</a>
        </div>
    );
}

export default Copy;
