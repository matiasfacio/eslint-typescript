import {TSESLint} from '@typescript-eslint/utils';

type MessageIds = 'functionStartsWithParkhere' | "functionNeedsArguments";

const myRule: TSESLint.RuleModule<MessageIds> = {
    defaultOptions: [],
    meta: {
        type: 'problem',
        messages: {
            functionStartsWithParkhere: 'Custom Eslint Error: functions should not start with "parkhere". ',
            functionNeedsArguments: 'matias needs arguments'
        },
        schema: [],
        fixable: 'code',
    },
    create: context => {
        console.log({context: context.filename})
        return ({
            ArrowFunctionExpression: node => {
                console.log(node, 'node params:', node.params)
                const parent = node.parent;
                const parentId = "id" in parent && parent.id !== null && parent.id
                const parentName = parentId && "name" in parentId && parentId.name;
                if (parentId && typeof parentName === "string" && parentName.startsWith('matias') && node.params.length === 0) {
                    return context.report({
                        node: parentId,
                        messageId: 'functionNeedsArguments'
                    })
                }
                if (parentName && parentName.startsWith('parkhere')) {
                    return context.report({
                        node: parentId,
                        messageId: 'functionStartsWithParkhere',
                        fix: fixer => {
                            return fixer.replaceText(parent.id!, parentName.replace('parkhere', 'bar'));
                        }
                    });
                }
            },
            FunctionDeclaration: node => {
                if (node.id) {
                    const name = node.id.name;
                    if (name.startsWith('parkhere')) {
                        return context.report({
                            node: node.id,
                            messageId: 'functionStartsWithParkhere',
                            fix: fixer => {
                                return fixer.replaceText(node.id!, name.replace('parkhere', 'foo'));
                            }
                        });
                    }
                }
            }
        })
    }
}

export default myRule