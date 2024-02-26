import { func } from "prop-types";
import TermPopup from "./term-component/TermPopup";
import TermCode from "./TermCode";

export function PrintTerm() {
    return (
        <div>
        <TermPopup name='Print Statements'
            text='print("Hello, World")' 
            language='python' />
        </div>
    )
}
export function CommentTerm() {
    return <TermPopup name='Comments' />
}
export function VariableTerm() {
    return <TermPopup name='Variables' />
}
export function IfTerm() {
    return <TermPopup name='If Statements' />
}
export function SwitchTerm() {
    return <TermPopup name='Switch Statements' />
}
export function ForTerm() {
    return <TermPopup name='For Loops' />
}
export function WhileTerm() {
    return <TermPopup name='While Statements' />
}
export function MiscIterationTerm() {
    return <TermPopup name='Iteration Keywords' />
}
export function FunctionTerm() {
    return <TermPopup name='Functions' />
}
export function RecursionTerm() {
    return <TermPopup name='Recursion' />
}
export function OOPTerm() {
    return <TermPopup name='Object-Oriented Programming' />
}
export function ClassTerm() {
    return <TermPopup name='Classes' />
}

