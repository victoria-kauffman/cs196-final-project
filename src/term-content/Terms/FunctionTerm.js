export const functionOptions = {
    text:'A block of code that can be called by its name. Parameters can be passed into a function to provide slight changes at runtime, and the function can return data',
    Python:'def python_function(a):' + 
            '\n\tprint("python_function was called with input" + a)' +
            '\n\treturn "Returning this string"',
    Java:'// In Java, you often provide extra information to define a function' + 
         '\n// Public defines the scope of this function; it can be accessed by other classes' +
         '\n// Static means that this function is defined in a class' +
         '\n// String defines the function\'s return type' +
         '\npublic static String java_function(String a) {' +
         '\n\tSystem.out.println("java_function was called with input " + a);' +
         '\n\treturn "Returning this string";',
    Cpp:'// In C++, you often provide extra information to define a function' + 
        '\n// char* defines the function\'s return type' +
        '\nchar* cpp_function(char* a) {' +
        '\n\tprintf("cpps_function was called with input %s", a);' +
        '\n\treturn "Returning this string";'
}