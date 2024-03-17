export const switchOptions = {
    text:'Select one of several code blocks to be executed based on the value of a single expression',
    Python:'match a:' + 
            '\n\tcase 1:\n\t\tprint("a was 1")' +
            '\n\tcase 2:\n\t\tprint("a was 2")' +
            '\n\tcase 3:\n\t\tprint("a was 3")' +
            '\n\tcase 4:\n\t\tprint("a was 4")' +
            '\n\tcase _:\n\t\tprint("a was none of {1, 2, 3, 4}")',
    Java:'switch (a) {' + 
         '\n\tcase 1:\n\t\tSystem.out.println("a was 1");\n\t\tbreak;' +
         '\n\tcase 2:\n\t\tSystem.out.println("a was 2");\n\t\tbreak;' +
         '\n\tcase 3:\n\t\tSystem.out.println("a was 3");\n\t\tbreak;' +
         '\n\tcase 4:\n\t\tSystem.out.println("a was 4");\n\t\tbreak;' +
         '\n\tdefault:\n\t\tSystem.out.println("a was none of {1, 2, 3, 4}");\n}',
    Cpp:'switch (a) {' + 
        '\n\tcase 1:\n\t\tprintf("a was 1");\n\t\tbreak;' +
        '\n\tcase 2:\n\t\tprintf("a was 2");\n\t\tbreak;' +
        '\n\tcase 3:\n\t\tprintf("a was 3");\n\t\tbreak;' +
        '\n\tcase 4:\n\t\tprintf("a was 4");\n\t\tbreak;' +
        '\n\tdefault:\n\t\tprintf("a was none of {1, 2, 3, 4}");\n}'
}