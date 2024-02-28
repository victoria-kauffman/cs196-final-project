import TermPopup from "./term-component/TermPopup";
import TermCode from "./BlockCode";
import PrintBlock from "./Terms/PrintTerm"

export function PrintTerm() {
    return <TermPopup name='Print Statements' id='print'
                code={PrintBlock}/>
    
}
export function CommentTerm() {
    return <TermPopup name='Comments' 
                code={'# This is a Python single-line comment\n' +
                        '\'\'\' And this\nis a\nPython multi-line comment \'\'\''}/>
}
export function VariableTerm() {
    return <TermPopup name='Variables'
                code={'python_var = 61'} />
}
export function IfTerm() {
    return <TermPopup name='If Statements'
                code={'if a:\n\tprint("a was true!")\n' +
                        'elif b:\n\tprint("a wasn\'t true, but b was true!"' +
                        '\nelse:\n\tprint("Neither a nor b was true!"'} />
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

