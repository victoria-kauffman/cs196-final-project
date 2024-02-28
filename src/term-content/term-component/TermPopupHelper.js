import { printCode } from "../Terms/PrintTerm";

export function setCodeBlock(language, term) {
    switch(term) {
        case "print":
            return printCode(language);
    }
}