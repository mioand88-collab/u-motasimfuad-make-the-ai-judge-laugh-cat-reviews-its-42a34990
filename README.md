# Cat Reviews Its Human

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/mioand88-collab/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/mioand88-collab/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

A make.fun entry for [Make the AI Judge Laugh: Cat Reviews Its Human](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990).

`main.ts` (Node) writes one funny single-line one-star review, written by a
house cat about its human, to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default
`/output`). The review keeps the deadpan shape of a real one-star review
while the complaint goes somewhere only a cat would go: the bowl sat empty
for six whole minutes, so the cat screamed into its human's sleeping face
at 4 a.m. — and the human had the nerve to call the cat dramatic.

Run it with:

```sh
node main.ts
```

The program guards the line before writing: it throws unless the review is
1–200 characters, a single line, and not only whitespace, and it verifies
the written file round-trips exactly.
