
//       Discuss the precedence and associativity of operators in JavaScript
//        In JavaScript, operator precedence and associativity determine the order in which operators are evaluated in an expression. Understanding these concepts is crucial for writing code that behaves as expected. Here's an overview:

//         Precedence:
//         Operator precedence defines the priority or hierarchy of operators. Higher precedence operators are evaluated first. In situations where different operators appear in the same expression, the one with higher precedence takes precedence. For example, multiplication has higher precedence than addition.
        
//         Here are some examples of operator precedence in JavaScript:
        
//     1:- Highest Precedence:
        
//         Grouping: ()
//         Member Access: . (dot notation), [] (bracket notation)
//     2:- Unary Operators:
        
//         Unary Plus +, Unary Minus -, Logical NOT !, Typeof typeof, Increment ++, Decrement --
//     3:- Arithmetic Operators:
        
//         Multiplication *, Division /, Modulus %
//         Addition +, Subtraction -
//     4:- Shift Operators:
        
//         Left Shift <<, Right Shift >>, Unsigned Right Shift >>>
//     5:- Relational Operators:
        
//         Less than <, Greater than >, Less than or equal to <=, Greater than or equal to >=, Instanceof instanceof, In in
//     6:- Equality Operators:
        
//         Equal ==, Not Equal !=, Strict Equal ===, Strict Not Equal !==
//     7:- Bitwise AND &
        
//     8:- Bitwise XOR ^
        
//     9:- Bitwise OR |
        
//     10:-Logical AND &&
        
//     11:-Logical OR ||
        
//     12:-Conditional (Ternary) Operator ? :
        
//     13:-Assignment Operators:
        
//         Assignment =, Compound Assignment +=, -=, *=, /=, etc.
//         Comma , (Lowest Precedence):
        
//         Used to separate expressions.

//         Associativity:
//         Associativity defines the order in which operators of the same precedence are evaluated. It can be either left-to-right (left-associative) or right-to-left (right-associative).
        
//     1:- Left-Associative:
        
//         Operators are evaluated from left to right.
//         javascript
//         Copy code
//         let result = 10 - 5 + 2; // (10 - 5) + 2

//     2:- Right-Associative:
        
//         Operators are evaluated from right to left.
//         javascript
//         Copy code
//         let result = 2 ** 3 ** 2; // 2 ** (3 ** 2)
//     
//     Q.why is understanding these concept important
//     Understanding operator precedence and associativity is important for several reasons in programming:

//     1:- Correct Evaluation of Expressions:
        
//         Knowing the precedence of operators helps ensure that expressions are evaluated in the correct order. Without this understanding, the result of an expression may be unexpected.
//     2:- Code Readability:
        
//         Code readability is enhanced when operators are used in a way that aligns with their precedence. This makes the code more intuitive for other developers who read or maintain it.
//     3:- Avoiding Bugs and Unexpected Results:
        
//         Incorrect understanding of operator precedence can lead to subtle bugs in the code. Knowing which operations take precedence helps avoid errors and ensures the intended behavior of the program.
//     4:- Effective Use of Parentheses:
        
//         Understanding operator precedence allows developers to use parentheses strategically to override the default order of evaluation. This is particularly useful when the desired order of operations differs from the default.
//     5:- Consistent Coding Practices:
        
//         Consistent use of operator precedence across a codebase promotes a standardized and predictable coding style. This makes it easier for developers to collaborate and maintain each other's code.
//     6:- Optimizing Code:
        
//         In some cases, knowledge of operator precedence can be useful for optimizing code. Developers can leverage the default order of operations to write more concise and efficient expressions.
//     7:- Avoiding Ambiguity:
        
//         Operator precedence helps resolve ambiguity in expressions. When multiple operators are used in the same expression, understanding their precedence clarifies which operation takes precedence.
//     8:- Learning and Mastering the Language:
        
//         Understanding operator precedence and associativity is an integral part of mastering a programming language. It allows developers to express complex ideas concisely and accurately
