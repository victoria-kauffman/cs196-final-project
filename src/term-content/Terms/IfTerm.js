export const ifOptions = {
    text:'Execute a block of code if a certain conditional is true',
    Python:'if a:\n\tprint("a was true!")' +
            '\nelif b:\n\tprint("a wasn\'t true, but b was true!")' +
            '\nelse:\n\tprint("Neither a nor b was true!")',
    Java:'if (a) { \n\tSystem.out.println("a was true!");\n }' +
         '\nelse if (b) { \n\tSystem.out.println("a wasn\'t true, but b was true!");' +
         '\nelse { \n\tSystem.out.println("Neither a nor b was true!");\n }',
    Cpp:'if (a) { \n\tprintf("a was true!");\n }' +
        '\nelse if (b) { \n\tprintf("a wasn\'t true, but b was true!");' +
        '\nelse { \n\tprintf("Neither a nor b was true!");\n }',
}