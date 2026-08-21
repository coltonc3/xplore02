Placeholder name.
## Problems
1. Search quality sucks. I get a terrible merchant for my task
2. Merchant quality is unknown 
3. Merchant quality is subjective
4. Biased. Coinbase’s only works for merchant using CB facilitator 
5. Not ready for enterprise. Which of these merchants has a soc2?
6. No SLA or terms
## Open questions
1. Should this be built on an existing index like Google or Exa?
2. Should it be on-chain? Logic should be public
3. How to monetize?
4. Should one company control it?

## How it works
Marketplace is a catalog of merchants in JSON, each with its own characteristics. It lives offchain (MVP), governed by a single entity deciding who gets listed and who doesn't.
#### Entry point
The interface is a plugin with skills, scripts, etc. Not sure if it should be MCP. All agent wallet platforms(Coinbase, Privy, Circle, Fireblocks) will install this plugin. Deterministic values (quality, certifications, price, SLA, refunds, uptime) are entered passed in plaintext via API query params while semantic search is used for relevance and usefulness.
#### Governance
Just me (MVP). Eventually this could be a company.
#### Listing
Apply via web form or API call. Wait for my approval (MVP).
#### Reviews
Human's feedback overrides agent's.

Plugin ensures the agent asks the human for feedback post-purchase:
- Task description
- 1-10 usefulness rating
- Rating reason

Agent submits review via public API.
#### Verifiers
Verify merchant authenticity, certifications, product description, ratings. Just me (MVP). Longer term at least certification verification will be outsourced to knowledgable third parties.
#### Schema

```
{
  "x402Version": 2,
  "items": [
    {
      "resource": "https://api.aisa.one/apis/v2/coingecko/simple/price",
      "type": "http",
      "x402Version": 2,
      "lastUpdated": "2026-06-25T16:40:14.015Z",
      "accepts": [
        {
          "scheme": "exact",
          "network": "eip155:8453",
          "asset": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          "amount": "10000",
          "payTo": "0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed",
          "extra": {
            "name": "USD Coin",
            "version": "2"
          }
        }
      ],
      "metadata": {
        "provider": {
          "name": "AIsa API",
          "verified": true, // new
          "description": "cryptocurrency market data prices",
          "category": "FINANCIAL_ANALYSIS",
          "tags": [
            "x402",
            "crypto",
            "market-data"
          ],
          "website": "https://aisa.one",
          "docsUrl": "https://aisa.one/docs/api-reference",
          "openApiUrl": "https://aisa.one/openapi.yaml"
        },
        "path": "/apis/v2/coingecko/simple/price",
        "method": "GET",
        "description": "Get cryptocurrency prices in multiple currencies",
        "rating": 1-10, // new
        "usefulFor": "idk", // new. AI aggregation of reviews
        "topRatings": []
        "certifications": [ // new
	        {
		        "type": "soc2",
		        "link": "https://mysoc2.org",
		        "last_renewed": "YYYY-MM-DD",
		        "expires": "YYYY-MM-DD"
	        }
        ],
        "sla": [ // new
	        {}
        ],
        "uptime": { // new
	        "period": "7d",
	        "value": 0.98
        },
        "latency": { // new
	        "period": "7d",
	        "value": 1234 // milliseconds
        },
        "buyerConcentration": { // new. TBD
        }
        "mimeType": "application/json",
        "input": {
          "type": "object",
          "properties": {
            "ids": {
              "type": "string"
            }
          }
        },
        "output": {
          "type": "object"
        },
        "siwx": false,
        "supportsVanillax402": true
      }
    }
  ],
  "pagination": {
    "limit": 50,
    "offset": 0,
    "total": 636
  }
}
```

## Monetization
Brainstorming
1. Merchant revenue share e.g. 5% (merchants make the most. Align with them)
2. Charge per query (another slice of small pie)
3. Ads (eats user tokens)
## Solving cold start
1. Invite merchant friends for free for first 6mo. Use Figment's facilitator exclusively and get in for free for a limited time
2. Forward deployed integrations for agent wallet providers
## Competitors
1. Dexter x402gle
2. Coinbase agentic market
3. Circle discovery

## Similar ideas
1. Google PageRank
2. Yelp
3. Moltbook