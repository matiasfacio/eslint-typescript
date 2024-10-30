# Linter

## What is a linter?

A linter in programming is a tool that ***analyzes code for potential errors, 
stylistic inconsistencies, or other issues*** that can lead to bugs or make the code harder to maintain. 
***It scans the code according to predefined rules (or custom ones)*** 
and flags anything that doesn’t comply with those rules. 
Linting tools are especially helpful in ***large projects and collaborative environments***, 
where maintaining consistent code quality and style is essential.

## What are popular linters?

### For Javascript:
### ESLint
check for issues such as unused variables, incorrect indentation, and syntax errors. By enforcing coding standards and catching common mistakes early, linters help improve code readability and prevent bugs before runtime.

### For Kotlin:

#### ktlint
A linter specifically for Kotlin, focusing on coding style and formatting based on the official Kotlin coding conventions.
#### Detekt 
A more feature-rich tool than ktlint, Detekt checks for potential code issues and offers static analysis, covering issues like complex methods, large classes, and common Kotlin-specific pitfalls.
SonarQube: Also supports Kotlin, performing static analysis to highlight code quality issues and maintainability concerns in Kotlin projects.


## How do they work?

**AST (Abstract Syntax Tree)** is the key concept behind how linters work.
AST is a tree representation of the abstract syntactic structure of source code written in a programming language.
Linters parse the source code into an AST and then traverse the tree to analyze the code based on the rules defined.
When a rule is violated, the linter reports the issue, often with a description and a suggested fix.
[AST Explorer](https://astexplorer.net/)