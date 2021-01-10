# bem.js
BEM helpers for JavaScript

### Resources

* [BEM](http://getbem.com)
* [NPM Package](https://www.npmjs.com/package/@arco-tech/bem)

### Install

```bash
npm i @arco-tech/bem
```

or

```bash
yarm i @arco-tech/bem
```

### Example Usage

```javascript
import { blk, mods, sblk, smods } from "@arco-tech/bem"

blk("input", "key-icon", "blue")
// "input input--key-icon input--blue"

const active = true
blk("checkbox", active && "active")
// "checkbox checkbox--active"

blk("button", ["green", "wide", ["disabled"]])
// "button button--green button--wide button--disabled"


mods("card", "rounded", "shadow")
// "card--rounded card--shadow"

const disabled = false
mods("toggle", ["red", disabled && "disabled"])
// "toggle--red"


sblk("input", "dark", "narrow")
// ".input.input--dark.input--narrow"

const disabled = true
sblk("button", "add-icon", disabled && "disabled")
// ".button.button--add-icon.button--disabled"


smods("container", "align-center", "large-margin")
// ".container--align-center.container--large-margin"
```
