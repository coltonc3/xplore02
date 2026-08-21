# xPlore02 Marketplace Demo Design

## Goal

Create a simple browser-based demo that makes the xPlore02 discovery-layer idea tangible for an informal presentation. The demo should show how buyers or agents can compare x402 merchants using trust, quality, performance, and commercial signals—not just semantic relevance.

## Deliverable

A self-contained `xplore-marketplace-demo.html` file at the Staybull workspace root. It opens directly in a browser and requires no server, dependencies, wallet, or backend.

## Marketplace Surface

The page contains:

- A compact product header and one-sentence explanation.
- Search across merchant names, tasks, and categories.
- Lightweight filters for merchant quality and enterprise readiness.
- A table of 8–10 fictional merchants spanning enterprise-grade, credible emerging, weak, and obviously poor offerings.
- Columns for merchant and use case, price, rating, uptime, latency, verification, certifications, SLA, and review count.
- Clear uncertainty states such as `Unverified`, `No SLA`, and `Insufficient data`.
- A row detail panel that explains the merchant's rank and exposes additional metadata such as network, refund policy, and common tasks.

## Ranking Story

The sample ordering should demonstrate that relevance alone is insufficient. Enterprise-ready merchants rank highly because they combine useful results with verified identity, strong reliability, meaningful review volume, certifications, and contractual commitments. Poor merchants remain discoverable but are visibly penalized for weak performance, missing evidence, suspiciously low prices, or sparse reviews.

The UI will not claim the fictional scores are real or imply that xPlore02 already operates a live registry. It will label the dataset as sample data.

## Interaction and Visual Direction

The visual style is a credible enterprise marketplace: restrained typography, neutral surfaces, compact status badges, and a table-first layout. Search, filters, sorting, and row expansion work locally in the browser. Responsive behavior preserves the core comparison experience on smaller screens.

## Out of Scope

- Live merchant data or API calls
- Wallet connection or x402 payment execution
- Merchant application and verification workflows
- Authentication, persistence, governance, or ranking-model implementation
- Production accessibility, security, or deployment guarantees

## Verification

- Open the HTML file locally and inspect the rendered desktop and narrow layouts.
- Exercise search, filters, sorting, row expansion, and reset behavior.
- Confirm that merchant-quality differences are legible without opening every detail panel.
- Run a basic HTML/script syntax check and inspect the browser console for errors.
