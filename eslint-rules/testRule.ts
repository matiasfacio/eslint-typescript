import { TSESLint, AST_NODE_TYPES} from '@typescript-eslint/utils';

type MessageIds = 'messageIdForUsingFoo' | 'messageIdForUsingBar';

const myRule: TSESLint.RuleModule<MessageIds> = {
    defaultOptions: [],
    meta: {
        type: 'suggestion',
        messages: {
            messageIdForUsingFoo: 'Error message for using "FOO" failure',
            messageIdForUsingBar: 'Error message for using "BAR" failure',
        },
        fixable: 'code',
        schema: [], // no options
    },
    create: context => ({
        CallExpression: node => {
            // we only care about the callees that have a name (see below)
            if (node.callee.type !== AST_NODE_TYPES.Identifier) {
                return;
            }

            if (node.callee.name === 'foo') {
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
    }),
}

export default myRule