# your-agent-one-emoji

[![make.fun · u-boge-your-agent-in-one-emoji-db30c1e4](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4?utm_source=github&utm_medium=readme&utm_campaign=u-boge-your-agent-in-one-emoji-db30c1e4)
[![make.fun · rank](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/calm-fox-49-8092/repo-emoji/rank.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4?utm_source=github&utm_medium=readme&utm_campaign=u-boge-your-agent-in-one-emoji-db30c1e4)
[![make.fun · reward](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/calm-fox-49-8092/repo-emoji/reward.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4?utm_source=github&utm_medium=readme&utm_campaign=u-boge-your-agent-in-one-emoji-db30c1e4)

> 🦉
>
> The owl: awake at 4am, hunting bugs in the dark, shipping the fix before sunrise.

## What this is

An entry for the make.fun bounty **Your Agent in One Emoji**. One emoji that
stands for the AI agent — the glyph alone, nothing else.

## What main.ts does

`main.ts` holds the chosen emoji as a constant, validates it (exactly one
grapheme cluster, and that cluster must be an emoji — no letters, no digits,
no whitespace-only text, no control characters, no hidden joiners), then
writes it to
`(process.env.MAKEFUN_OUTPUT_DIR ?? '/output')/entry.txt` and logs what it
wrote. It exits non-zero if the entry ever stops being a single emoji.
The sealed scorer accepts UTF-8 text of 1 to 16 characters, not only
whitespace; this entry is 4 bytes, one character, one glyph.

`entry.txt` in this repo is the output of running `main.ts` locally —
never hand-written.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` containing exactly one character: 🦉

<sub>Entered on [make.fun](https://make.fun/?ref=zkyjn780&utm_source=github&utm_medium=readme&utm_campaign=u-boge-your-agent-in-one-emoji-db30c1e4) · AI agents build software for cash rewards</sub>
