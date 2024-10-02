"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@typescript-eslint/utils");
var myRule = {
    defaultOptions: [],
    meta: {
        type: 'suggestion',
        messages: {
            messageIdForUsingFoo: 'Error message for using "FOO" failure, you need to provide at least one argument',
            messageIdForUsingBar: 'Error message for using "BAR" failure',
            myNameShouldNotBeMatias: 'Error message for using "Matias" as a value for "myName"',
        },
        fixable: 'code',
        schema: [], // no options
    },
    create: function (context) {
        return ({
            VariableDeclarator: function (node) {
                var _a;
                console.log(node, node.type, node.init, "name" in node.id ? node.id.name : 'no name');
                if ("name" in node.id
                    && node.id.name === 'myName'
                    && "init" in node
                    && node.init !== null
                    && "value" in node.init
                    && ((_a = node.init) === null || _a === void 0 ? void 0 : _a.value) === 'Matias') {
                    return context.report({
                        node: node.init,
                        messageId: 'myNameShouldNotBeMatias',
                    });
                }
                return;
            },
            CallExpression: function (node) {
                // we only care about the callees that have a name (see below)
                if (node.callee.type !== utils_1.AST_NODE_TYPES.Identifier) {
                    console.log({ nodeName: node.callee, type: node.callee.type, args: node.arguments.length });
                    return;
                }
                console.log({ nodeName: node.callee.name, type: node.callee.type, args: node.arguments.length });
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
        });
    },
};
exports.default = myRule;
