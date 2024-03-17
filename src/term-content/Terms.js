import TermPopup from "./term-component/TermPopup";
import { commentOptions } from "./Terms/CommentTerm";
import { forOptions } from "./Terms/ForTerm";
import { functionOptions } from "./Terms/FunctionTerm";
import { ifOptions } from "./Terms/IfTerm";
import { printOptions } from "./Terms/PrintTerm"
import { switchOptions } from "./Terms/SwitchTerm";
import { variableOptions } from "./Terms/VariableTerm";
import { whileOptions } from "./Terms/WhileTerm";

export function PrintTerm() {
    return <TermPopup name='Print Statements' options={ printOptions }/>
    
}
export function CommentTerm() {
    return <TermPopup name='Comments' options={ commentOptions }/>
}
export function VariableTerm() {
    return <TermPopup name='Variables' options={ variableOptions }/>
}
export function IfTerm() {
    return <TermPopup name='If Statements' options={ ifOptions } />
}
export function SwitchTerm() {
    return <TermPopup name='Switch Statements' options={ switchOptions }/>
}
export function ForTerm() {
    return <TermPopup name='For Loops' options={ forOptions } />
}
export function WhileTerm() {
    return <TermPopup name='While Statements' options={ whileOptions }/>
}
export function FunctionTerm() {
    return <TermPopup name='Functions' options={ functionOptions }/>
}
// export function RecursionTerm() {
//     return <TermPopup name='Recursion' />
// }



// export function ClassTerm() {
//     return <TermPopup name='Classes' />
// }
// export function MiscIterationTerm() {
//     return <TermPopup name='Iteration Keywords' />
// }
// export function OOPTerm() {
//     return <TermPopup name='Object-Oriented Programming' />
// }