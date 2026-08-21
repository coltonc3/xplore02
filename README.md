# xPlore02

A self-contained browser demo for a trusted x402 merchant discovery layer.

The demo compares fictional x402 merchants using usefulness, reliability,
trust, certifications, commercial readiness, and review confidence. It runs
entirely in the browser with no server or dependencies.

## Hosted demo

https://f.stableupload.dev/nhanj4av9x/demo.xplore02.html

The hosted page is a published snapshot. The version-controlled source of
truth is `xplore-marketplace-demo.html` in this repository.

## Run the demo

Open `xplore-marketplace-demo.html` in a browser.

## Run the tests

```sh
node --test tests/xplore-marketplace-demo.test.mjs
```

## Project files

- `xplore-marketplace-demo.html` — interactive standalone demo
- `xplore02.md` — original product notes and proposed registry schema
- `docs/superpowers/specs/` — demo design
- `docs/superpowers/plans/` — implementation plan
- `tests/` — static behavior and content checks

Most merchant records and metrics are fictional sample data. Source-backed
claims are identified in the demo.
