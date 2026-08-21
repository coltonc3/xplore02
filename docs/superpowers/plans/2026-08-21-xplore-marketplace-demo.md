# xPlore02 Marketplace Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a self-contained, interactive HTML marketplace demo that contrasts enterprise-ready x402 merchants with low-quality merchants.

**Architecture:** One standalone HTML document owns the sample dataset, table rendering, filtering, sorting, detail drawer, styling, and client-side behavior. It has no runtime dependencies and performs no network requests.

**Tech Stack:** Semantic HTML, CSS, vanilla JavaScript

**Spec:** `docs/superpowers/specs/2026-08-21-xplore-marketplace-demo-design.md`

## Global Constraints

- Deliver `xplore-marketplace-demo.html` at the Staybull workspace root.
- Require no server, dependency installation, wallet, backend, or network access.
- Label all merchant records and metrics as fictional sample data.
- Include 8–10 merchants spanning enterprise-grade through obviously poor quality.
- Keep live payments, applications, authentication, persistence, governance, and production deployment out of scope.

---

### Task 1: Build and verify the marketplace demo

**Files:**
- Create: `xplore-marketplace-demo.html`

**Interfaces:**
- Consumes: No external interfaces; the page embeds a `merchants` JavaScript array.
- Produces: Search, quality and enterprise filters, sortable columns, reset behavior, and an expandable merchant-detail panel.

- [ ] **Step 1: Create the static page and sample merchant dataset**

Build the semantic page shell, embedded fictional records, marketplace table, filter controls, sample-data notice, and detail dialog. Include merchant identity, use case, price, rating, uptime, latency, verification, SOC 2 status, SLA, review count, supported network, refund policy, common tasks, and rank rationale.

- [ ] **Step 2: Add local marketplace interactions**

Implement `renderRows()`, `applyFilters()`, `sortMerchants()`, `openMerchant()`, `closeMerchant()`, and `resetFilters()` in vanilla JavaScript. Make search cover merchant name, category, description, and common tasks. Keep all rendering text-safe by creating DOM elements or escaping interpolated values.

- [ ] **Step 3: Add responsive enterprise styling**

Use a restrained light palette, compact status pills, strong table hierarchy, visible focus states, horizontal table scrolling, and a responsive detail dialog. Ensure poor-quality and unknown states remain distinct without relying on color alone.

- [ ] **Step 4: Run static and browser verification**

Run an HTML/parser check and a JavaScript syntax check against the embedded script. Open the file in a browser, inspect desktop and narrow layouts, exercise search, both filters, sorting, reset, row expansion, dialog close, and verify no browser-console errors occur.
