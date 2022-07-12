# gitlab-moscow

### Description
Userscript for `Gitlab` that replaces `MoSCoW` method's tags with the visually distictive labels.

### Details
MoSCoW prioritization, also known as MoSCoW method or MoSCoW analysis is a technique for managing requirements. [Here](https://www.productplan.com/glossary/moscow-prioritization/) you can learn more about that. Even tough the method is used primarily for refactoring the project scope, its principles are so universal that developers adapted them to the code review process - you can learn more about this [here](https://dev.to/allthecode/moscow-the-best-code-review-technique-you-re-not-using-2b0e). Main goal of this userscript is to improve the readability of MoSCoW labels applied to the code review process within Gitlab UI. Script replaces following tags with the corresponding, unified visual tags:
- `[M]` or `[MUST]`
- `[S]` or `[SHOULD]`
- `[C]` or `[COULD]`
- `[W]` or `[WOULD]`

### How to use it
Install it with any popular userscript browser plugin like: `Tampermonkey` or `Greasemonkey`. Tested and created with `Tampermonkey` on Firefox.
