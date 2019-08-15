# Paletas

The palettes behind [@tinyskylines](https://botsin.space/@tinyskylines).

## Contributing

### Adding a Palette

1. [Fork][fork] this repository
1. Create a new file in `src/palettes` using the format described below
1. Once you're done, open a new [Pull Request][pr] and I'll get it merged 💫

### Palette Files

A palette is a single Markdown file with a few bits of [frontmatter][fm]:

```markdown
---
title: Casual Diploma
author: Beatriz M.
colors:
  - 001b44
  - d5008f
  - ffa3d7
  - fbf1a9
---
```

#### Tips

- The file should be named something similar to your palette title — ex., `casual-diploma.md`.
- Both `title` and `author` are optional; the only required value is the `colors` list.

If your palette derives from an existing image or palette, you're encouraged to provide a link like so:

```
source: http://tachyons.io/docs/themes/skins
```



### Palette Tips

- Include a minimum of 3 colors
- Palettes with higher contrast between colors tend to work better

Thanks! 🙏

[fork]: https://help.github.com/en/articles/fork-a-repo
[fm]: https://www.11ty.io/docs/data-frontmatter/
[pr]: https://help.github.com/en/articles/creating-a-pull-request
