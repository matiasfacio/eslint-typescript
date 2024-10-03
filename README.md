# Experimenting with eslint custom rules

## How to run

### Option 1 - Install the package
1. in the root folder run `yarn add ./estlin-rules`
2. that's it

### Option 2 - Link the package
1. cd into eslint-rules
2. run `yarn link`
3. cd into project where you want to use the custom rule
4. run `yarn link eslint-plugin-rules` (this name can be found in the package.json file of the eslint)

Everywhere you have a `.eslintrc` file, you can add the custom rule like this:

```json
{
  "plugins": ["rules"],
  "rules": {
    "rules/my-rule-name": "warn"
  }
}
```

You should now see this local package in the node_modules folder of the project you linked it to.

### When you want to update the rule

#### Following Option 1
1. remove the local package `yarn remove eslint-plugin-rules`
2. edit the rules
3. run `yarn add ./estlin-rules`

#### Following Option 2
1. cd into eslint-rules
2. run `yarn unlink`
3. edit your rule
4. run tsc compiler `tsc testRule.ts`
5. run `yarn link`
6. cd into project where you want to use the custom rule
7. run `yarn link eslint-plugin-rules` (name of the package in the package.json file of the eslint)

### When you want to remove the rule

#### Following Option 1
1. remove the local package `yarn remove eslint-plugin-rules`
2. remove the rule from the `.eslintrc` file
3. that's it

#### Following Option 2
1. cd into project where you want to remove the custom rule
2. run `yarn unlink eslint-plugin-rules`
3. cd into eslint-rules
4. run `yarn unlink`
5. remove the rule from the `.eslintrc` file


## Advantages/disadvantages of using first approach (installing)
- **Advantages**
  - You can easily update the rule by running `yarn add ./estlin-rules`
  - You can easily remove the rule by running `yarn remove eslint-plugin-rules`
- **Disadvantages**
  - You have to run `yarn add ./estlin-rules` every time you want to use the rule in a new project
  - You have to run `yarn remove eslint-plugin-rules` every time you want to remove the rule from a project

## Advantages/disadvantages of using second approach (linking)
- **Advantages**
  - Fast development cycle since you can edit the rule and by being them linked, the changes will be reflected immediately
  - You can easily remove the rule by running `yarn unlink eslint-plugin-rules`
- **Disadvantages**
  - Potencial dependency issues since the linking package might have dependencies that collied with the ones in your project
  - Possible inconsistencies across development environments
  - Need to be `unlink` before production, otherwise unexpected behaviours might happen, specially if the rule is not production ready
  - Potencial dependency mismatches might cause issues since they aren't cully controlled through the normal package installation process
- **Notes**
  - Use when actively developing a package and need to test it across multiple projects, or you want to debug it without constantly publishing it to npm
  - Don't use it in a collaborative environment, since it might cause issues with other developers who might not understand how to use yarn link