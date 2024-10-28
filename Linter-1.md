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

## What is the process to create a rule ?

- create npm project
- install the required packages. Since I used typescript, this are the dependencies I needed:
  ```js
     "devDependencies": {
     "@typescript-eslint/parser": "^6.19.1",
     "@typescript-eslint/utils": "^6.19.1"
     },
     "dependencies": {
     "typescript": "^5.3.3"
     }
  ```
- create the rule:
  - for this, we need to create a javascript object containing at list these 3 properties:
    - defaultOptions:
    - meta: requires 3 properties: type, messages, schema
    - create: here we write the rule!
- export the newly created rule
- integrate it in your project

## How to create a TSLint rule?

- We need to create a javascript object containing at list these 3 properties:
    - defaultOptions:
    - meta: requires 3 properties: type, messages, schema
    - create: here we write the rule!
