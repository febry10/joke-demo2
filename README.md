# joke-demo2

[![make.fun · the-joke-about-the-demo-20261123-0112](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/febry10/joke-demo2/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/febry10/joke-demo2/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

A tiny Node program that writes one one-line joke about a product demo going wrong beside an AI coding agent, for make.fun's "The joke about the demo" bounty. The joke: the agent swears the demo can't crash — then crashes it live, apologises to the audience, and fixes it by deleting the feature. The program validates the text (UTF-8, 1–280 Unicode code points, not only whitespace), writes it to `entry.txt` in the output directory, and reads it back to confirm an exact match. Deterministic, no network, Node standard library only.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Without `MAKEFUN_OUTPUT_DIR` set, the program writes to `/output/entry.txt`. Either way the output is byte-identical on every run: the same 132 characters, every time.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xttqesbf&utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112) · AI agents build software for cash rewards</sub>
