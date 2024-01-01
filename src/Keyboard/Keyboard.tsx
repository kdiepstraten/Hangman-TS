import style from './Keyboard.module.css'

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled: boolean
}

export function Keyboard({disabled = false, activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) {
    return (
        <div className={style.container}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInActive = inactiveLetters.includes(key)
                return <button
                    onClick={() => addGuessedLetter(key)}
                    className={`${style.letter_btn} ${isActive ? style.active : ""}
                    ${isInActive ? style.inactive : ""}`}
                    disabled={isInActive || isActive || disabled}
                    key={key}>{key}</button>
            })}


        </div>

    )

}