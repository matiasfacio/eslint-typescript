"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const myRule = {
    defaultOptions: [],
    meta: {
        type: 'suggestion',
        messages: {
            messageIdForSomeFailure: 'Error message for some failure',
            messageIdForSomeOtherFailure: 'Error message for some other failure',
        },
        fixable: 'code',
        schema: [], // no options
    },
    create: context => ({
        CallExpression: node => {
            // we only care about the callees that have a name (see below)
            if (node.callee.type !== utils_1.AST_NODE_TYPES.Identifier) {
                return;
            }
            if (node.callee.name === 'foo') {
                return context.report({
                    node: node.callee,
                    messageId: 'messageIdForSomeFailure',
                });
            }
            if (node.callee.name === 'bar') {
                return context.report({
                    node: node.callee,
                    messageId: 'messageIdForSomeOtherFailure',
                });
            }
            return;
        },
    }),
};
exports.default = myRule;
