import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const logstashLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({closing: ")", align: false})
      }),
      foldNodeProp.add({
        Application: foldInside
      }),
      styleTags({
        "get set async static": t.modifier,
        "if else": t.controlKeyword,
        "not in and or xor nand": t.operatorKeyword,
        "let var const function class extends": t.definitionKeyword,
        "input filter output": t.keyword,
        super: t.atom,
        BooleanLiteral: t.bool,
        this: t.self,
        null: t.null,
        Star: t.modifier,
        VariableName: t.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": t.function(t.variableName),
        VariableDefinition: t.definition(t.variableName),
        Label: t.labelName,
        PropertyName: t.propertyName,
        PrivatePropertyName: t.special(t.propertyName),
        "CallExpression/MemberExpression/PropertyName": t.function(t.propertyName),
        "FunctionDeclaration/VariableDefinition": t.function(t.definition(t.variableName)),
        "ClassDeclaration/VariableDefinition": t.definition(t.className),
        LineComment: t.lineComment,
        number: t.number,
        string: t.string,
        compareOperator: t.compareOperator,
        regexp: t.regexp,
        "=>": t.definitionOperator,
        "( )": t.paren,
        "[ ]": t.squareBracket,
        "{ }": t.brace,
        ".": t.derefOperator,
        ", ;": t.separator,
        name: t.attributeName,
        value: t.attributeValue
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "#"}
  }
})

export function logstash() {
  return new LanguageSupport(logstashLanguage)
}
