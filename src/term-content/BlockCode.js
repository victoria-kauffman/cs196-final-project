import { CodeBlock, dracula } from "react-code-blocks";

export default function BlockCode(props) {
    return (
        <CodeBlock
            text={props.text}
            language={props.language}
            showLineNumbers={true}
            theme={dracula}
            codeBlock={{ lineNumbers: true, wrapLines: false }}
        />
    );
}