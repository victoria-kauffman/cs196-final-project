import BlockCode from '../BlockCode'

export default function () {
    // Create print code block
    return (
        <div>
            <BlockCode language='python' 
                        text={printCode('python')}/>
            <BlockCode language='java' 
                        text={printCode('java')}/>
            <BlockCode language='c++' 
                        text={printCode('c++')}/>
        </div>
    )
}

export function printCode(language) {
    switch (language) {
        case 'python':
            return 'print("Hello, World!")';
        case 'java':
            return 'System.out.println("Hello, World!");';
        case 'c++':
            return 'std::cout << "Hello, World!";\n' + 
                    'printf("Hello, World!");';
    }
}