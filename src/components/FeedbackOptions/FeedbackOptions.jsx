import css from './FeedbackOptions.module.css'
export const FeedbackOptions = ({good,neutral,bad}) => {
    return (
        <>
                <button className={css.button } onClick={good}>Good</button>
                <button className={css.button } onClick={neutral}>Neutral</button>
                <button className={css.button } onClick={bad}>Bad</button>
</>    )
}