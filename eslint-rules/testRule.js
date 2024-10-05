"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myRule = {
    defaultOptions: [],
    meta: {
        type: 'problem',
        messages: {
            functionStartsWithFoo: 'Custom Eslint Error: functions should not start with "foo". ',
        },
        fixable: 'code',
        schema: [],
    },
    create: function (context) {
        console.log({ context: context.filename });
        return ({
            ArrowFunctionExpression: function (node) {
                var _a;
                var parent = node.parent;
                if ("id" in parent && "name" in parent.id) {
                    var name_1 = (_a = parent.id) === null || _a === void 0 ? void 0 : _a.name;
                    if (name_1.startsWith('foo')) {
                        return context.report({
                            node: parent.id,
                            messageId: 'functionStartsWithFoo',
                            fix: function (fixer) {
                                return fixer.replaceText(parent.id, name_1.replace('foo', 'bar'));
                            }
                        });
                    }
                }
            },
            FunctionDeclaration: function (node) {
                if (node.id) {
                    var name_2 = node.id.name;
                    if (name_2.startsWith('foo')) {
                        return context.report({
                            node: node.id,
                            messageId: 'functionStartsWithFoo',
                            fix: function (fixer) {
                                return fixer.replaceText(node.id, name_2.replace('foo', 'bar'));
                            }
                        });
                    }
                }
            }
        });
    }
};
exports.default = myRule;
