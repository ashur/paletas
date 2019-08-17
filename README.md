# Paletas

Palettes for [@tinyskylines](https://botsin.space/@tinyskylines).

## Contributing

### Adding a Palette

1. [Fork][fork] this repository
1. Create a new file in `src/palettes` using the format described below
1. Once you're done, open a new [Pull Request][pr] and I'll get it merged 💫

> 🙋‍♀️ If you're not familiar with forking, pull requests, or if you have any other questions, give me a shout on [Mastodon][m] or [Twitter][t]. I'd be happy to help!

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
source: https://tachyons.io/docs/themes/skins
---
```

#### A Few Notes

- The file should be named something similar to your palette title — ex., `casual-diploma.md`.
- `title`, `author` and `source` are all optional; the only required property is the `colors` list.

> ✍️ If your colors are based on an existing image or palette, I encourage you to provide a link using the `source` property.

### Palette Tips

- 🎨 Include a minimum of 3 colors
- 🌓 Palettes with higher contrast between colors tend to work better
- 🤹‍♀️ Have fun out there!

Thanks! 🙏

[fork]: https://help.github.com/en/articles/fork-a-repo
[fm]: https://www.11ty.io/docs/data-frontmatter/
[pr]: https://help.github.com/en/articles/creating-a-pull-request
[m]: https://mastodon.social/@ashur
[t]: https://twitter.com/ashur
