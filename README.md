# CodeMirror 6 language-logstash

Please see [Rutzzz/lang-logstash](https://github.com/Rutzzz/lang-logstash)

I tried to translate 
[logstash config grammar](https://github.com/elastic/logstash/blob/433b341f0f0c6f7b992d5226599d380ef722173b/logstash-core/lib/logstash/config/grammar.treetop)
([local grammar file](src/grammar.treetop))
 to CodeMirror language.

But Compiled with some error

> Error: Could not load D:\Projects\GitHub\codemirror6\lang-example\src\syntax.grammar (imported by src/index.ts): Overlapping tokens name and string used in same context (example: "\"\"")
> After: PluginType "{" name/"if" "["
> 
> Overlapping tokens name and number used in same context (example: "-" vs "-0")
> After: PluginType "{" name/"if" "["
> 
> Overlapping tokens name and bareWord used in same context (example: "A" vs "A0")
> After: PluginType "{" name/"if" "[" (D:\Projects\GitHub\codemirror6\lang-example\src\syntax.grammar 1:1)


## Source

This is an logstash repository containing a minimal [CodeMirror](https://codemirror.net/6/) language support package. The idea is to clone it, rename it, and edit it to create support for a new language.

Things you'll need to do (see the [language support logstash](https://codemirror.net/6/logstashs/lang-package/) for a more detailed tutorial):

 * `git grep logstash` and replace all instances with your language name.

 * Rewrite the grammar in `src/syntax.grammar` to cover your language. See the [Lezer system guide](https://lezer.codemirror.net/docs/guide/#writing-a-grammar) for information on this file format.

 * Adjust the metadata in `src/index.ts` to work with your new grammar.

 * Adjust the grammar tests in `test/cases.txt`.

 * Build (`npm run prepare`) and test (`npm test`).

 * Rewrite this readme file.

 * Optionally add a license.

 * Publish. Put your package on npm under a name like `codemirror-lang-logstash`.
