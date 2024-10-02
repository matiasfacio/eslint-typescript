# Experimenting with eslint custom rules

## How to run

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

you should now also see this local package in the node_modules folder of the project you linked it to.

### When you want to update the rule

1. cd into eslint-rules
2. run `yarn unlink`
3. edit your rule
4. run tsc compiler `tsc testRule.ts`
5. run `yarn link`
6. cd into project where you want to use the custom rule
7. run `yarn link eslint-plugin-rules` (name of the package in the package.json file of the eslint)

### When you want to remove the rule

1. cd into project where you want to remove the custom rule
2. run `yarn unlink eslint-plugin-rules`
3. cd into eslint-rules
4. run `yarn unlink`
5. remove the rule from the `.eslintrc` file