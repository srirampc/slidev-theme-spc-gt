---
theme: ../
author: Sriram P C
presenterName:  Sriram P C
affiliation: Institute for Data Engineering and Science @ Georgia Institute of Technology
mdc: true
short-title: Example
themeConfig:
  # Set gtColors false to set the title and text colors to black
  gtColors: true
---

## A _**Somewhat Long Title**_ for 
## a Math Talk or Lecture

### _Some Subtitle or Software_
#### _**Conference**_ @ Place, Country

<template #extra>

Extra content: Joint work with [Some Colleague](#) and [Other Colleague](#)

</template>


---

# Powered by _**Slidev**_

Slidev is a slide maker and <span v-mark.yellow>presentation tool</span> designed for developers.

[slidev-theme-spc-gt](https://github.com/srirampc/slidev-theme-spc-gt) is 
a [Slidev](https://github.com/slidevjs/slidev) theme heavily borrowed from
the [behackl/slidev-theme-behackl-kfu](https://github.com/behackl/slidev-theme-behackl-kfu)
theme by [Benjamin Hackl](https://benjamin-hackl.at).

Key Features:
- `light` theme with GT Background/colors
- Callout box for warnings, notes, danger messages, and themed remarks.
- Highlighted content block with `<block>`
- `section`, `intro`, `two-cols-header`, `two-cols` `image-left` and `image-right` layout with GT Backgrounds

---


To start a new presentation, simply start a new file `slides.md` (default name)
with a bit of content like

<div v-click="1">

```md {none|1-5|all}{lines: true, at: '+1'}
---
theme: path/to/slidev-theme-spc-gt
presenterName:  Sriram P C
affiliation: Institute for Data Engineering and Science @ Georgia Institute of Technology
---

# Fancy Main Title

### With Some Subtitle

```

</div>
<div v-click>

Then startup the preview server using

```bash
$ npx slidev
```

</div>

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |


---

# Admonitions!

::admonition{kind="warning" title="Warning" icon="mdi:warning"}
here is something important!
::

::admonition{kind="danger" title="Very dangerous!" icon="mdi:skull"}
here is something dangerous!
::

::admonition{kind="info" title="Interesting ..." icon="mdi:info"}
here is something interesting!
::

::admonition{title="GT Gold and Blue!" kind="gt"}
Here is something GaTech related!
::

::admonition{title="Defaults?"}
Let us also try and get some default values up and running?
::

---

# An Inequality ...

- Bóna--DeJonge-question $\iff a_n / C_n > a_{n+1} / C_{n+1}$ for $n\geq 3$
- After some further manipulations, this is equivalent to...

<v-click>
<block title="Proposition">

$a_n / C_n$ is decreasing for $n \geq 3$ if and only if
$$ F(n) := \sum_{k=1}^n k \sigma(k) (k^2 - 3n + 2) (2k^2 - n) \binom{2n}{n-k} < 0 $$
for $n \geq 5$.

</block>
</v-click>

---

# ... followed by __Asymptotics!__

<div style="font-size: 18px;">

- Split *binomial sums* into "central" and "tails" regions, <br>show
  contribution of tails is negligible
- Approximate $\binom{2n}{n-k}$ in "central" region, complete tails
- Mellin for integral representation; shift line of integration + collect residues

</div>

<decor class="top-15 right-40">
<mdi-compass />
</decor>

<block v-click title="Theorem (H.&ndash;Wagner, 2024)">

For $n \to \infty$, we have
$$ F(n) = \binom{2n}{n} \Big( -\frac{n^2}{8} + \frac{n}{24} + o(n) \Big) $$

</block>
<div v-click>

- **Not good enough!** No information about error -- can only
  say sequence is _eventually decreasing_...

</div>

---
layout: intro
---

# Introduction Layout

A left-aligned introductory slide with the GT section background.

---
layout: section
---

# Section Divider

Centered section layout matching Slidev's default `section` layout.

---

# _**Progressive**_ Lists & Decorations

<v-clicks depth="2">

- **Step-by-step reveals** using Slidev's `v-clicks`:

  - Support for nested lists with `depth="2"`

  - Combine with `<decor>` elements for subtle visual accents

</v-clicks>

<div class="grid grid-cols-[2fr_1fr] gap-4">
<div>
<v-clicks at="3">

- Install dependencies and start the preview server:
  ```sh
  $ pnpm install && pnpm dev
  ```

- Build static slides for sharing:
  ```sh
  $ pnpm build
  ```

</v-clicks>
</div>
<div>
<decor v-click="3" class="bottom-30 right-30"><mdi-laptop/></decor>
</div>
</div>


---
layout: image-right
image: https://picsum.photos/900/600
---

# Code

Use code snippets and get the highlighting directly!

```py
def fibonacci(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fibonacci(n-1) + fibonacci(n-2)
```

---
layout: image-left
image: https://picsum.photos/900/600
---

# Image Left

Image on the left, content on the right with the default GT background.

---
layout: two-cols
---

# Left Column

Content in the left column with the default GT background.

::right::

# Right Column

Content in the right column.

---
layout: two-cols-header
---

This spans both columns, might only be evident if used
with a sufficiently long text?

::left::

This is a list in the left column.

- First item
- Second item
- Third item
- And final item

::right::

And this is right column. We could put a little
decoration element here?

<decor class="bottom-10 right-50"><mdi-flower/></decor>

---
layout: end
class: "text-center"
---

# Thank you!
