"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myRule = {
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
    create: function (context) {
        console.log({ context: context.filename });
        return ({
            ArrowFunctionExpression: function (node) {
                console.log(node, 'node params:', node.params);
                var parent = node.parent;
                var parentId = "id" in parent && parent.id !== null && parent.id;
                var parentName = parentId && "name" in parentId && parentId.name;
                if (parentId && typeof parentName === "string" && parentName.startsWith('matias') && node.params.length === 0) {
                    return context.report({
                        node: parentId,
                        messageId: 'functionNeedsArguments'
                    });
                }
                if (parentName && parentName.startsWith('parkhere')) {
                    return context.report({
                        node: parentId,
                        messageId: 'functionStartsWithParkhere',
                        fix: function (fixer) {
                            return fixer.replaceText(parent.id, parentName.replace('parkhere', 'bar'));
                        }
                    });
                }
            },
            FunctionDeclaration: function (node) {
                if (node.id) {
                    var name_1 = node.id.name;
                    if (name_1.startsWith('parkhere')) {
                        return context.report({
                            node: node.id,
                            messageId: 'functionStartsWithParkhere',
                            fix: function (fixer) {
                                return fixer.replaceText(node.id, name_1.replace('parkhere', 'foo'));
                            }
                        });
                    }
                }
            }
        });
    }
};
exports.default = myRule;
