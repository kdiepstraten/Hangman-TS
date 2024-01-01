import style from './App.module.css'
import {useCallback, useEffect, useState} from "react";
import words from './wordList.json'
import {HangmanDrawing} from "./HangmanDrawing/HangmanDrawing.tsx";
import {HangmanWord} from "./HangmanWord/HangmanWord.tsx";
import {Keyboard} from "./Keyboard/Keyboard.tsx";

function getWord(){
    return words[Math.floor(Math.random() * words.length)]
}
function App() {
    const [wordToGuess, setWordToGuess] = useState(getWord)
    const [guessedLetters, setGeussedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    const isLoser = incorrectLetters.length >= 6
    const isWinner = wordToGuess
        .split("")
        .every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || isWinner || isLoser) return

            setGeussedLetters(currentLetters => [...currentLetters, letter])
        }, [guessedLetters, isWinner, isLoser])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if (!key.match(/^[a-z]$/)) return

            e.preventDefault()
            addGuessedLetter(key)
        }
        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [guessedLetters])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if (key !== "Enter") return

            e.preventDefault()
            setGeussedLetters([])
            setWordToGuess(getWord())
        }
        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, []);
    return (

        <div className={style.conatiner}>
            <div className={style.win}>
                {isWinner && "Winner! - Refresh or press Enter to try again"}
                {isLoser && "Nice try - Refresh or press Enter to try again"}
            </div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord
                reveal={isLoser}
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}/>
            <div className={style.self}>
            <Keyboard
                disabled={isWinner || isLoser}
                activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
                inactiveLetters={incorrectLetters}
                addGuessedLetter={addGuessedLetter}
            />
            </div>

        </div>

    )
}

export default App
