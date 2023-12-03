import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
            {options.map((option) => (
                <button className={css.button}
                    type='button'
                    key={option}
                    onClick={() => onLeaveFeedback(option)}>
                    {option}</button>
            ))}
        </>    )
}