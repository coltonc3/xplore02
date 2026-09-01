import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const demoPath = new URL("../index.html", import.meta.url);

test("demo includes a broad merchant set and sample-data disclosure", async () => {
  const html = await readFile(demoPath, "utf8");
  const merchantIds = [...html.matchAll(/\bid:\s*"([^"]+)"/g)].map((match) => match[1]);

  assert.equal(merchantIds.length, 25);
  for (const merchant of ["Claude", "ChatGPT", "BlockRun.AI", "Tripadvisor", "CoinGecko", "QuickNode", "Messari", "Allium", "Syra", "Arkham", "ChainQuery"]) {
    assert.match(html, new RegExp(merchant.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(html, /fictional sample data/i);
  assert.match(html, /SOC 2/);
  assert.match(html, /No SLA/);
  assert.match(html, /Insufficient data/);
  assert.doesNotMatch(html, />Certification</);
  assert.match(html, />Certifications</);
  assert.match(html, /<title>xPlore02 — trusted discovery for x402<\/title>/);
  assert.match(html, /xPlore02<\/div>/);
});

test("Syra profile uses source-backed public data without inventing enterprise evidence", async () => {
  const html = await readFile(demoPath, "utf8");

  assert.match(html, /id: "syra"/);
  assert.match(html, /resource: "https:\/\/api\.syraa\.fun\/health"/);
  assert.match(html, /website: "https:\/\/www\.syraa\.fun"/);
  assert.match(html, /docsUrl: "https:\/\/api\.syraa\.fun\/skill\.md"/);
  assert.match(html, /openApiUrl: "https:\/\/api\.syraa\.fun\/openapi\.json"/);
  for (const network of ["solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp", "eip155:8453", "eip155:56", "eip155:196"]) {
    assert.match(html, new RegExp(network.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(html, /merchant-reported and internally inconsistent/i);
  assert.match(html, /33\.4k calls over 7 days/);
  assert.match(html, /1\.4% reported 7-day failure rate/);
  assert.match(html, /certifications: \[\]/);
  assert.match(html, /sla: "No SLA"/);
  assert.match(html, /price: null/);
});

test("demo exposes the planned local interactions", async () => {
  const html = await readFile(demoPath, "utf8");

  for (const functionName of [
    "renderRows",
    "applyFilters",
    "sortMerchants",
    "openMerchant",
    "closeMerchant",
    "resetFilters",
  ]) {
    assert.match(html, new RegExp(`function\\s+${functionName}\\s*\\(`));
  }

  assert.match(html, /id="search"/);
  assert.match(html, /id="quality-filter"/);
  assert.match(html, /id="enterprise-filter"/);
  assert.match(html, /<dialog\b/);
  assert.match(html, /function\s+renderStats\s*\(/);
});

test("demo registry follows the x402 discovery schema from the source document", async () => {
  const html = await readFile(demoPath, "utf8");

  assert.match(html, /const registry = \{/);
  assert.match(html, /x402Version:\s*2/);
  assert.match(html, /items:\s*profiles\.map/);
  assert.match(html, /accepts:\s*\[/);
  assert.match(html, /provider:\s*\{/);
  for (const field of ["certifications", "sla", "uptime", "latency", "buyerConcentration", "supportsVanillax402"]) {
    assert.match(html, new RegExp(`${field}:`));
  }
});

test("Allium trust and service fields use researched public claims", async () => {
  const html = await readFile(demoPath, "utf8");

  assert.match(html, /certifications: \["SOC 1 Type 1 & 2", "SOC 2 Type 1 & 2"\]/);
  assert.match(html, /sla: "99\.9%"/);
  assert.match(html, /support: "24\/7 enterprise support"/);
  assert.match(html, /uptime: 100/);
  assert.match(html, /uptimePeriod: "90d"/);
  assert.match(html, /latencyText: "Sub-second"/);
  assert.match(html, /refund: "Fees are non-refundable"/);
});

test("demo explains the xPlore02 score methodology and its safeguards", async () => {
  const html = await readFile(demoPath, "utf8");

  assert.match(html, /id="methodology-button"/);
  assert.match(html, /id="methodology-dialog"/);
  assert.match(html, /Task usefulness[\s\S]*30%/);
  assert.match(html, /Reliability and performance[\s\S]*25%/);
  assert.match(html, /Trust and certifications[\s\S]*20%/);
  assert.match(html, /Commercial readiness[\s\S]*15%/);
  assert.match(html, /Review confidence and volume[\s\S]*10%/);
  assert.match(html, /Missing or unverified evidence lowers the score/i);
  assert.match(html, /Human feedback carries more weight than agent-generated reviews/i);
  assert.match(html, /Price is shown and filterable, but does not automatically improve quality/i);
  assert.match(html, /function\s+openMethodology\s*\(/);
  assert.match(html, /function\s+closeMethodology\s*\(/);
});
