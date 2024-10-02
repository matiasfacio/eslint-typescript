"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@typescript-eslint/utils");
var myRule = {
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
    create: function (context) {
        return ({
            VariableDeclarator: function (node) {
                var _a, _b;
                if ("kind" in node.parent && node.parent.kind === 'const') {
                    if ("init" in node
                        && node.init !== null
                        && "value" in node.init
                        && ((_b = (_a = node.init) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toString().includes('Matias'))) {
                        return context.report({
                            node: node.init,
                            messageId: 'myNameShouldNotBeMatias',
                        });
                    }
                }
                return;
            },
            CallExpression: function (node) {
                // we only care about the callees that have a name (see below)
                if (node.callee.type !== utils_1.AST_NODE_TYPES.Identifier) {
                    return;
                }
                console.log({ nodeName: node.callee.name, type: node.callee.type, args: node.arguments.length });
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
        });
    },
};
exports.default = myRule;
