import style from './HangmanDrawing.module.css'



const HEAD = (
    <div className={style.head}></div>
)
const BODY = (
    <div className={style.body}></div>
)
const RIGHT_ARM = (
    <div className={style.right_arm}></div>
)
const LEFT_ARM = (
    <div className={style.left_arm}></div>
)
const RIGHT_LEG = (
    <div className={style.right_leg}></div>
)
const LEFT_LEG = (
    <div className={style.left_leg}></div>
)
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
type HangmanDrawingProps = {
    numberOfGuesses: number
}
export function HangmanDrawing({numberOfGuesses} : HangmanDrawingProps) {

    return (
    <div className={style.container}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className={style.hook}></div>
        <div className={style.top}></div>
        <div className={style.bar}></div>
    <div className={style.bttm}></div>
    </div>
    )

}
