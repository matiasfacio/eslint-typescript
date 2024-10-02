"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@typescript-eslint/utils");
var myRule = {
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
    create: function (context) { return ({
        CallExpression: function (node) {
            // we only care about the callees that have a name (see below)
            if (node.callee.type !== utils_1.AST_NODE_TYPES.Identifier) {
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
    }); },
};
exports.default = myRule;
