import { TSESLint, AST_NODE_TYPES} from '@typescript-eslint/utils';

type MessageIds = 'messageIdForUsingFoo' | 'messageIdForUsingBar' | 'myNameShouldNotBeMatias' | 'functionStartsWithFoo';

const myRule: TSESLint.RuleModule<MessageIds> = {
    defaultOptions: [],
    meta: {
        type: 'problem',
        messages: {
            messageIdForUsingFoo: 'Custom Eslint Error: for using "FOO" failure, you need to provide at least one argument. ',
            messageIdForUsingBar: 'Custom Eslint Error: for using "BAR" failure. ',
            myNameShouldNotBeMatias: 'Custom Eslint Error: You made a mistake here as "{{value}}" includes "matias" was encountered. ',
            functionStartsWithFoo: 'Custom Eslint Error: functions should not start with "foo". ',
        },
        fixable: 'code',
        schema: [], // no options
    },
    create: context => {
        console.log('context', context)
        return ({
            VariableDeclarator: node => {
                console.log('node', node)
                if ("kind" in node.parent && node.parent.kind === 'const') {
                    if ("init" in node
                        && node.init !== null
                        && "value" in node.init
                        && node.init.value?.toString().toLowerCase().includes('matias')
                        ) {
                        const value = node.init.value;
                        return context.report({
                            node: node.init,
                            messageId: 'myNameShouldNotBeMatias',
                            data: {
                                value,
                            },
                            fix(fixer) {
                                const newText = value.toString().replaceAll('matias', '');
                                const newText2 = newText.replaceAll('Matias', '');
                                return fixer.replaceText(node.init!, '"' + newText2 + '"');
                            }
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