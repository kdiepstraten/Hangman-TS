import style from './HangmanWord.module.css'

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({ reveal = false, guessedLetters, wordToGuess} :HangmanWordProps) {

    return (
        <div className={style.container}>
            {wordToGuess.split("").map((letter, index) => (
                <span className={style.underscore} key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter) || reveal
                        ? "visible"
                        : "hidden",
                        color: !guessedLetters.includes(letter) && reveal ? "cadetblue" : "black"
                }}>
                    {letter}
                </span>
                </span>
            ))}
        </div>
    )
}