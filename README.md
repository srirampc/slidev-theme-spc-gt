# slidev-theme-spc-gt

A [Slidev](https://github.com/slidevjs/slidev) theme 
heavily borrowed from the theme by [behackl/slidev-theme-behackl-kfu](https://github.com/behackl/slidev-theme-behackl-kfu).
Visual style is taken from [behackl/slidev-theme-behackl-kfu](https://github.com/behackl/slidev-theme-behackl-kfu),
but uses Georgia Institute of Technology's colors from its [brand guide](https://brand.gatech.edu/our-look/colors).

The theme provides custom layouts, a small set of reusable components, and 
default styling for headings, code blocks, lists, admonitions, and decorative elements.

## Install

Use via local checkout by pointing `theme` to the repository path:

```yaml
---
theme: path/to/slidev-theme-spc-gt
---
```

Learn more about [how to use a Slidev theme](https://sli.dev/themes/use).

## Colors

By default, slides use Georgia Tech's recommended text and title colors:

- Content text: `#051E39` (Navy)
- Titles / headings: `#8F713D` (Dark Gold)

To disable these colors and revert to black (`#000000`) across the entire deck, set `gtColors: false` in `themeConfig`:

```yaml
---
theme: path/to/slidev-theme-spc-gt
themeConfig:
  gtColors: false
---
```

You can also customize the colors via `themeConfig` (`text-color` and `title-color`), or disable GT colors for a single slide using `class: plain-colors` (or `layoutClass: plain-colors` on `two-cols` / `two-cols-header`).

## Layouts

This theme provides the following custom layouts:

- `cover` — title slide layout with presenter name, affiliation, and optional extra content.
- `default` — regular content slide layout.
- `intro` — left-aligned introductory slide.
- `section` — centered section divider slide.
- `image-left` — image on the left, content on the right with the default GT background.
- `image-right` — content on the left, image on the right with the default GT background.
- `two-cols` — two-column content layout with the default GT background.
- `two-cols-header` — header with two columns and an optional bottom row.
- `end` — centered closing / thank-you slide.

The theme also inherits Slidev's base layouts via `@slidev/client/styles/layouts-base.css`, so standard layouts such as `center` or `fact` remain available.

## Components

### `<admonition>`

A callout box for warnings, notes, danger messages, and themed remarks.

```md
::admonition{kind="warning" title="Warning" icon="mdi:warning"}
Pay attention to this point.
::
```

Supported built-in `kind` values are:

- `warning`
- `danger`
- `info`
- `gt`
- `base` / default

The `icon` prop is optional. If omitted, a default icon is chosen from the admonition kind.

### `<block>`

A highlighted content block with an optional title, useful for theorems, propositions, examples, or definitions.

```md
<block title="Proposition">

Every interesting theorem deserves a nice box.

</block>
```

### `<decor>`

A background decoration container, typically used with Iconify icons.

```md
<decor class="top-15 right-40">
  <mdi-compass />
</decor>
```

### Branding components

The theme includes SVG-based branding helpers:

- `<logo-gt-ext>` — Georgia Tech extended logo
- `<bottom-logo-gt-ext>` — bottom-right positioned Georgia Tech extended logo

## Development

- `npm install`
- `npm run dev` to start the theme preview
- edit `example/slides.md` and the theme files to see changes
- `npm run export` to generate a preview PDF
- `npm run screenshot` to generate preview PNGs
