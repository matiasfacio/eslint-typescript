import { TSESLint } from '@typescript-eslint/utils';

type MessageIds = 'functionStartsWithFoo';

const myRule: TSESLint.RuleModule<MessageIds> = {
    defaultOptions: [],
    meta: {
        type: 'problem',
        messages: {
            functionStartsWithFoo: 'Custom Eslint Error: functions should not start with "foo". ',
        },
        fixable: 'code',
        schema: [],
    },
    create: context => {
        console.log({context: context.filename})
        return ({
            ArrowFunctionExpression: node => {
                const parent = node.parent;
                if ("id" in parent && "name" in parent.id!) {
                    const name = parent.id?.name;
                    if (name.startsWith('foo')) {
                        return context.report({
                            node: parent.id!,
                            messageId: 'functionStartsWithFoo',
                            fix: fixer => {
                                return fixer.replaceText(parent.id!, name.replace('foo', 'bar'));
                            }
                        });
                    }
                }
            },
            FunctionDeclaration: node => {
                if (node.id) {
                    const name = node.id.name;
                    if (name.startsWith('foo')) {
                        return context.report({
                            node: node.id,
                            messageId: 'functionStartsWithFoo',
                            fix: fixer => {
                                return fixer.replaceText(node.id!, name.replace('foo', 'bar'));
                            }
                        });
            }
        }}})

    }}


export default myRule