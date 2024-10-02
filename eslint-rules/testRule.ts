import { TSESLint, AST_NODE_TYPES} from '@typescript-eslint/utils';

type MessageIds = 'messageIdForUsingFoo' | 'messageIdForUsingBar' | 'myNameShouldNotBeMatias' | 'functionStartsWithFoo';

const myRule: TSESLint.RuleModule<MessageIds> = {
    defaultOptions: [],
    meta: {
        type: 'suggestion',
        messages: {
            messageIdForUsingFoo: 'Custom Eslint Error: for using "FOO" failure, you need to provide at least one argument',
            messageIdForUsingBar: 'Custom Eslint Error: for using "BAR" failure',
            myNameShouldNotBeMatias: 'Custom Eslint Error: for using "Matias" as a value for "myName"',
            functionStartsWithFoo: 'Custom Eslint Error: functions should not start with "foo"',
        },
        fixable: 'code',
        schema: [], // no options
    },
    create: context => {
        return ({
            VariableDeclarator: node => {
                if ("kind" in node.parent && node.parent.kind === 'const') {
                    if ("init" in node
                        && node.init !== null
                        && "value" in node.init
                        && node.init?.value?.toString().includes('Matias')
                        ) {
                        return context.report({
                            node: node.init,
                            messageId: 'myNameShouldNotBeMatias',
                        });
                    }
                }
                return;
            },
            CallExpression: node => {
            // we only care about the callees that have a name (see below)
            if (node.callee.type !== AST_NODE_TYPES.Identifier) {
                return;
            }
            console.log({nodeName: node.callee.name, type: node.callee.type, args: node.arguments.length})

            if (node.callee.name.startsWith('foo')) {
                return context.report({
                    node: node.callee,
                    messageId: 'functionStartsWithFoo',
                });
            }
            if (node.callee.name === 'foo' && node.arguments.length === 0) {
                return context.report({
                    node: node.callee,
                    messageId: 'messageIdForUsingFoo',
                });
            }
            if (node.callee.name === 'bar') {
                return context.report({
                    node: node.callee,
                    messageId: 'messageIdForUsingBar',
                });
            }

            return;
        },
    })},
}

export default myRule