"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@typescript-eslint/utils");
var myRule = {
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
    create: function (context) {
        console.log('context', context);
        return ({
            VariableDeclarator: function (node) {
                var _a;
                console.log('node', node);
                if ("kind" in node.parent && node.parent.kind === 'const') {
                    if ("init" in node
                        && node.init !== null
                        && "value" in node.init
                        && ((_a = node.init.value) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase().includes('matias'))) {
                        var value_1 = node.init.value;
                        return context.report({
                            node: node.init,
                            messageId: 'myNameShouldNotBeMatias',
                            data: {
                                value: value_1,
                            },
                            fix: function (fixer) {
                                var newText = value_1.toString().replaceAll('matias', '');
                                var newText2 = newText.replaceAll('Matias', '');
                                return fixer.replaceText(node.init, '"' + newText2 + '"');
                            }
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
