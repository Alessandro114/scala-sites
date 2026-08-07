# VIRAL LAUNCH KIT — scala-sites + analyze.get-scala.com
**Date:** 2026-08-07 | **Status:** Ready to copy-paste

All links:
- GitHub: https://github.com/Alessandro114/scala-sites
- Analyzer: https://analyze.get-scala.com
- Live Demo: https://scala-sites.vercel.app

---

## 1. SHOW HN POST

**Title:** Show HN: 100 free industry website templates with a cost analyzer (Next.js, MIT)

**URL:** https://github.com/Alessandro114/scala-sites

**Text:**

I spent the last few months building vertical-specific website templates for small businesses — restaurants, law firms, gyms, clinics, car dealerships, wedding venues, and 6 others. 100 components total. MIT licensed, free forever.

The technical approach: every vertical has its own CSS variable theme (3 presets: Minimal, Bold, Classic), each with a `createCustomTheme()` override system so you can fork a base and change only the variables you need. Hero components are designed per-industry rather than being generic hero components with slot props. JSON-LD schema markup is baked into the SEO layer for each vertical type (Restaurant uses FoodEstablishment, LegalOS uses LegalService, etc.).

The repo is a pnpm monorepo. `packages/core` has shared components (BookingWidget, ReviewCarousel, Gallery, FAQAccordion with schema markup). `packages/themes` is the CSS variable system. `packages/verticals/*` has industry-specific components. `apps/demo` is a Next.js 14 app that shows all 12 verticals live.

The second thing I built is a cost analyzer: https://analyze.get-scala.com

I was trying to understand how much a typical small business (in this case, a restaurant chain with 3 locations) spends on their digital stack across website builder, hosting, email, CRM, booking tool, live chat, WhatsApp API, analytics, SEO, forms, reviews, email marketing, and social scheduling. The answer, based on current 2026 pricing across 14 vendors, is approximately $555/month — or $6,660/year.

The analyzer lets you configure your own stack and get your number. It uses real pricing data I compiled this week (prices.md in the repo).

Both are open source. The templates work standalone with mock data. There is a paid API (SCALA) that adds real-time booking, WhatsApp confirmations, and CRM sync — but that is completely optional and the templates are fully functional without it.

Demo: https://scala-sites.vercel.app
GitHub: https://github.com/Alessandro114/scala-sites

Feedback on the component architecture welcome — specifically whether the per-vertical hero approach is better than a generic parameterized hero component.

---

## 2. REDDIT POSTS

---

### r/webdev

**Title:** I built 100 industry-specific website templates in Next.js — CSS variable theming, per-vertical JSON-LD, MIT license

**Body:**

Built something I think the community might find useful or at least interesting from an architecture standpoint.

**What it is:** A pnpm monorepo with 12 vertical website templates (restaurant, gym, real estate, law firm, clinic, hotel, car dealership, wedding venue, beauty salon, creative studio, vet, school) built in Next.js 14 with TypeScript.

**The theming system:**

Rather than using a design system with a shared token set, I went per-vertical. Each vertical imports from `@scala-sites/themes` and picks a base (Minimal / Bold / Classic), then the consumer can override with `createCustomTheme()`:

```ts
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'

const myTheme = createCustomTheme('classic', {
  primary: '#1e3a5f',
  accent: '#c9a84c',
})
```

This compiles down to a CSS variable object that you inject at the root. No CSS-in-JS runtime, no Tailwind config rebuild — pure variables.

**JSON-LD by vertical:**

The SEO package auto-applies the right schema based on vertical type. `dineos` gets `FoodEstablishment`, `legalos` gets `LegalService`, `clinicos` gets `MedicalBusiness`. FAQAccordion components emit `FAQPage` schema automatically.

**Hero components:**

Each vertical has a purpose-built hero rather than a generic `<Hero slots={[]} />`. The restaurant hero handles video/image with overlay and dual CTA; the gym hero handles a class schedule preview in the hero; the law firm hero is deliberately restrained (text + social proof counter). The argument for this approach: vertical sites are bought on first impression, and the first impression requirements are genuinely different per industry.

**Repo:** https://github.com/Alessandro114/scala-sites
**Live demo:** https://scala-sites.vercel.app

MIT license. Curious if anyone has thoughts on the per-vertical vs. parameterized hero tradeoff — I've gone back and forth on it.

---

### r/smallbusiness

**Title:** I made a free tool that shows exactly how much you're overpaying for your business's digital stack (and 100 free website templates)

**Body:**

Quick background: I build software for small businesses. While researching pricing for a project, I went through every major tool SMBs use for their online presence and tallied up actual 2026 costs.

The number I landed on for a typical scenario (small restaurant chain, 3 locations, ~20 employees, moderate online presence) was **$6,660 per year** across 14 separate vendors.

Here's what that breaks down to:
- Website builder (WordPress.com Business): $40/mo
- Email for 5 users (Google Workspace): $35/mo
- CRM (HubSpot Starter): $40/mo
- Booking tool (Calendly): $20/mo
- Live chat + AI (Tidio + Lyro add-on): $68/mo
- WhatsApp Business API: ~$40/mo
- SEO tool (SEMrush): $140/mo
- Review management (Trustpilot): $99/mo
- Email marketing (Mailchimp, 2K contacts): $27/mo
- Forms (Typeform): $29/mo
- Social scheduling (Buffer, 3 channels): $15/mo
- Analytics: $0 (GA4)

That's $555/month. And this is the lean version — with Intercom instead of Tidio you'd be at $1,500/month.

I built a free tool so you can configure your own stack and see your number: **https://analyze.get-scala.com**

And because most of those website builder costs are avoidable, I open-sourced 100 website templates (restaurants, gyms, clinics, law firms, hotels, salons, and more) that you can self-host for free: https://github.com/Alessandro114/scala-sites

Not trying to sell anything here — the templates are MIT licensed and work with zero dependencies on any paid service. If you run a small business I'd be curious what your actual stack costs are.

---

### r/SaaS

**Title:** The "give away the website layer to sell the AI layer" strategy — is this actually defensible?

**Body:**

I want to discuss a distribution strategy I'm currently testing and get honest pushback.

The setup: I build an AI operating system for SMBs (booking, CRM, WhatsApp, multi-location management). The natural acquisition channel is: reach business owners early, when they're thinking about their website, and give them something genuinely useful for free.

So I built and open-sourced 100 industry-specific website templates (MIT license): https://github.com/Alessandro114/scala-sites

And a free cost analyzer that shows what a typical SMB fragmented stack actually costs ($6,660/year is the median for a 3-location restaurant): https://analyze.get-scala.com

The theory: a restaurant owner searching "restaurant website template free" finds this, deploys it, saves money on their website, and is now aware that I exist. When they later need booking/WhatsApp/CRM, there's a natural path to my paid product.

The risk I see:
1. Template users may never convert — they're self-selecting for "I want free."
2. The open-source templates could be forked and offered by competitors as their own acquisition funnel.
3. Maintaining 12 verticals of templates is real ongoing cost.

What I'm curious about:
- Has anyone run a similar "give away the commodity layer" strategy? What was the conversion path that actually worked?
- Is there a version of this that works better — e.g., freemium on the templates rather than fully MIT?
- The cost analyzer feels more valuable as a lead gen tool than the templates themselves — would you double down there?

Real numbers or real experience preferred over theory.

GitHub: https://github.com/Alessandro114/scala-sites
Analyzer: https://analyze.get-scala.com

---

### r/Entrepreneur

**Title:** I audited what a small business pays for its digital presence in 2026. The number is $6,660/year. So I built free alternatives.

**Body:**

A few months ago I went through every tool category a typical small business needs online — website, email, CRM, booking, live chat, WhatsApp, analytics, SEO, forms, reviews, email marketing, social scheduling — and priced out the real 2026 cost for each.

Scenario: restaurant chain, 3 locations, 20 employees, moderate digital presence. Annual billing rates, no promotional pricing.

**The result: $555/month. $6,660/year. 14 separate vendors.**

Some things that surprised me in the research:
- Mailchimp's free plan went from 2,000 contacts (2022) to 500 (2023) to 250 (2026). They're slowly making the free tier unusable to push upgrades.
- Ahrefs raised prices from $99→$129/mo for Lite and $199→$249/mo for Standard in March 2026. Just because they could.
- Intercom's Fin AI charges $0.99 per resolved conversation. 1,000 resolutions = $1,000/month in AI costs, on top of your seat cost. Salesforce acquired them for $3.6B.
- SiteGround's renewal rates are up to 6x their intro price.

So I built two things:

**1. A free cost analyzer** — you configure your actual stack and see your number: https://analyze.get-scala.com

**2. 100 free website templates** — restaurant, gym, law firm, clinic, hotel, salon, real estate, car dealership, wedding venue, creative studio, vet, school. MIT licensed. You can host them on Vercel for free. No vendor lock-in.

GitHub: https://github.com/Alessandro114/scala-sites
Live demos: https://scala-sites.vercel.app

For context on my business model: I sell an AI operating system for SMBs. The templates are a free layer — they drive awareness, and businesses that want real-time booking, WhatsApp confirmations, and CRM can upgrade. But the templates work standalone, and I'm not hiding that.

The research doc with all pricing sources is also in the repo (COST-COMPARISON-DATA.md) if anyone wants to fact-check or use it.

---

## 3. X/TWITTER THREAD (10 TWEETS)

**Tweet 1 — Hook:**
The average small business pays $6,660/year for its digital presence.

14 separate vendors. 14 renewal cycles. 14 support queues.

I built a free tool that shows your exact number, and 100 free templates to cut it.

Thread:

[IMAGE: Clean graphic — "$6,660/year" in large type, "14 vendors" below it, dark background]

---

**Tweet 2:**
Here's the breakdown for a typical 3-location restaurant:

Website builder (WordPress): $40/mo
Email for 5 staff (Google Workspace): $35/mo

Already $75/mo and we haven't done anything useful yet.

---

**Tweet 3:**
CRM (HubSpot Starter): $40/mo
Booking tool (Calendly): $20/mo
Live chat (Tidio + Lyro AI add-on): $68/mo

Note: Tidio's AI chatbot is a separate add-on. The base plan doesn't include it. This is the pattern everywhere.

---

**Tweet 4:**
WhatsApp Business API: ~$40/mo
(Meta charges per message. Marketing templates = $0.015-$0.05 each. 2,000 messages/mo adds up fast.)

Email marketing, 2K contacts (Mailchimp): $27/mo
Forms (Typeform): $29/mo

---

**Tweet 5:**
Review management (Trustpilot Starter): $99/mo
Social scheduling, 3 channels (Buffer): $15/mo
SEO tool (SEMrush): $140/mo

Running total: $555/month. $6,660/year.

And this is the LEAN version.

---

**Tweet 6:**
Switch Tidio for Intercom Fin AI (which Salesforce just acquired for $3.6B): $1,500/mo instead of $555/mo.

Switch Trustpilot for Birdeye: $834/mo instead of $555/mo.

The vendors know SMBs can't afford to shop around. So they price accordingly.

---

**Tweet 7:**
Three things I found while researching:

1. Mailchimp's free plan: 2,000 contacts (2022) → 500 (2023) → 250 (2026). They shrink it every year.

2. Ahrefs raised prices $99→$129 for Lite in March 2026.

3. SiteGround renewal rates are up to 6x their intro price.

---

**Tweet 8:**
So I built analyze.get-scala.com

Configure your actual stack. Get your actual number.

It uses real 2026 pricing data (the source spreadsheet is open in the GitHub repo).

https://analyze.get-scala.com

[IMAGE: Screenshot of the analyzer tool with a stack configured and the annual total displayed]

---

**Tweet 9:**
And I open-sourced 100 website templates — one for each industry vertical.

Restaurant, gym, law firm, clinic, hotel, salon, real estate, car dealership, wedding venue, studio, vet, school.

Next.js 14. TypeScript. MIT license. Deploy to Vercel free.

https://scala-sites.vercel.app

[IMAGE: Screenshot grid showing 4-6 different vertical templates side by side]

---

**Tweet 10:**
The templates are free because I sell the AI layer on top (real-time booking, WhatsApp, CRM).

But they work standalone. No strings.

GitHub: https://github.com/Alessandro114/scala-sites

If you build something with them, reply here — I'll RT.

---

## 4. LINKEDIN POST

**Draft (personal tone, founder story):**

I'm giving away my product for free. Here's why that's not as crazy as it sounds.

For the past few months I've been building industry-specific website templates — restaurants, gyms, law firms, clinics, hotels, salons, car dealerships, and more. 100 components. Next.js, TypeScript, MIT license. Deploy to Vercel for free. No catch.

Here's what led me there.

I was doing a cost analysis for a prospect — a restaurant group with three locations — and I wanted to understand their actual annual spend on digital tools. Not what they thought they were paying. The real number, after tallying every vendor.

$6,660 per year. 14 separate tools.

Website builder, email hosting, CRM, booking system, live chat, WhatsApp API, analytics, SEO tool, forms, review management, email marketing, social scheduling. Every one a separate login, a separate renewal, a separate support queue when something breaks.

That number doesn't include the 2-4 hours per week someone spends managing those 14 vendors, which at even a modest hourly rate adds another €2,000-8,000 in hidden cost.

What struck me wasn't the total. It was that most of those costs are avoidable — or at least reducible — for businesses that are willing to self-host a website rather than pay a SaaS builder forever.

So I built the templates and open-sourced them: https://github.com/Alessandro114/scala-sites

And I built a free cost analyzer so any business can calculate their own number: https://analyze.get-scala.com

The business logic: I sell an AI operating system for SMBs. Real-time booking, WhatsApp automation, multi-location CRM. The website is the entry point, not the product. Give away the entry point, be useful before anyone pays you, earn the right to the conversation about the rest.

It also forces me to build something genuinely good rather than something that only works inside a locked ecosystem. MIT licensed code has to be worth forking.

Try the analyzer. Tell me if your number surprises you.

#OpenSource #WebDevelopment #SMB #NextJS #FreeTools

---

## 5. DEV.TO ARTICLE

**Title:** How I Built 100 Industry-Specific Website Templates and Why I'm Giving Them Away (Next.js + TypeScript)

**Tags:** nextjs, typescript, opensource, webdev

---

Last week I open-sourced a project I've been building for several months: 100 website components across 12 industry verticals, organized as a pnpm monorepo, MIT licensed, free to deploy.

GitHub: https://github.com/Alessandro114/scala-sites
Live demo: https://scala-sites.vercel.app

This post covers three things: the technical architecture decisions, the business reasoning behind giving it away, and a cost analysis that motivated the whole thing.

### The Problem with Generic Templates

Every website template marketplace sells you the same thing: a generic hero component, a features grid, a testimonials section, a contact form. The assumption is that good design transfers across industries.

It doesn't.

A restaurant's website needs to answer: what's on the menu today, can I book a table right now, what do real customers say. A law firm's website needs to answer: do you handle my specific type of case, how do I get a consultation, what's your track record. A gym's website needs to answer: what classes run when, can I sign up directly, what membership costs.

These are structurally different problems. A generic `<Hero>` component with a title and a button doesn't solve any of them particularly well.

So I built per-vertical hero components, per-vertical JSON-LD schemas, and per-vertical component sets.

### The Theming System

Rather than a global design token system, I went with three base themes and a `createCustomTheme()` override function:

```typescript
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'

const restaurantTheme = createCustomTheme('classic', {
  primary: '#1e3a5f',
  accent: '#c9a84c',
  background: '#fafaf8',
})

// Use in your layout:
const style = themeToStyleObject(restaurantTheme)
// Returns: { '--color-primary': '#1e3a5f', '--color-accent': '#c9a84c', ... }
```

The three base themes:
- **Minimal** — white background, Inter font, subtle borders. Works for luxury brands, professional services.
- **Bold** — dark background, Bebas Neue headings, sharp edges. Works for gyms, nightlife, automotive.
- **Classic** — warm tones, Playfair Display serif, soft radius. Works for traditional restaurants, heritage brands, legal.

No CSS-in-JS runtime. No Tailwind config rebuild when you change a color. Pure CSS variables injected at the root. This means theme switching is a single property change, and SSR works without hydration mismatches.

### JSON-LD by Vertical

The `@scala-sites/core` SEO package handles structured data automatically based on which vertical you're in:

- `dineos` (restaurant) emits `FoodEstablishment` schema with `servesCuisine`, `hasMenu`, `priceRange`
- `legalos` (law firm) emits `LegalService` with `areaServed`, `knowsAbout`
- `clinicos` (medical) emits `MedicalBusiness` with `medicalSpecialty`
- `gymos` emits `SportsActivityLocation`

The `FAQAccordion` component — shared across all verticals — always emits `FAQPage` schema, which Google uses to populate rich results directly in search.

The goal is that a developer using these templates doesn't need to think about structured data. It's correct by default.

### Hero Architecture Decision

The most debated decision in the repo was whether to have a single parameterized `<Hero>` component or per-vertical hero implementations.

I went per-vertical. Here's the argument:

A restaurant hero needs: full-bleed video or image, overlay gradient, reservation CTA as primary action, menu CTA as secondary, possibly an urgency element ("booking fast this weekend").

A gym hero needs: class schedule preview above the fold, membership CTA, possibly a live class counter or next-class timer.

A law firm hero needs: practice area selector, consultation CTA, social proof counter (cases handled, years experience) — but restrained, because aggressive sales tactics read wrong in legal contexts.

These aren't just different slot content. They're different interaction models. Forcing them into one component either makes the component so generic it adds no value, or makes it so complex with conditional logic that it becomes harder to maintain than separate components.

Separate components means more code. But each component is smaller, more readable, and can evolve independently. A restaurant owner updating their hero doesn't need to understand the gym hero's class-schedule logic.

### The Cost Analysis

The second thing I built is https://analyze.get-scala.com — a tool that shows what a typical SMB pays for its digital stack.

I spent a week on pricing research across every major tool category. The result for a typical 3-location restaurant, using annual billing rates:

| Category | Tool | Monthly |
|---|---|---|
| Website builder | WordPress.com Business | $40 |
| Email (5 users) | Google Workspace | $35 |
| CRM | HubSpot Starter | $40 |
| Booking | Calendly (2 seats) | $20 |
| Live chat + AI | Tidio + Lyro | $68 |
| WhatsApp API | 2K marketing msgs | $40 |
| SEO | SEMrush Pro | $140 |
| Reviews | Trustpilot Starter | $99 |
| Email marketing | Mailchimp (2K contacts) | $27 |
| Forms | Typeform Basic | $29 |
| Social scheduling | Buffer (3 channels) | $15 |
| Analytics | GA4 | $0 |
| **Total** | **14 vendors** | **$555/mo** |

That's $6,660/year. And this is the conservative version — with Intercom instead of Tidio you hit $1,500/month.

Three things I found notable in the research:
- Mailchimp's free tier went from 2,000 contacts (2022) to 500 (2023) to 250 (2026). They degrade it deliberately to force upgrades.
- Ahrefs raised Lite from $99 to $129 in March 2026 with no feature changes.
- SiteGround intro pricing is as low as $2.99/month; renewal rates hit $17.99/month — a 6x jump that small business owners routinely don't notice until it hits.

The full pricing data (with sources) is in `COST-COMPARISON-DATA.md` in the repo.

### Why Give It Away

My company sells an AI operating system for SMBs — real-time booking, WhatsApp automations, multi-location CRM. The website is the entry point, not the product.

The templates are free because reaching business owners early — before they've committed to a fragmented stack — is worth more than charging for templates. Give them something genuinely useful. Be present before anyone asks to see a pitch deck.

It also creates a forcing function: MIT licensed code has to be good enough to fork. That pressure is useful.

### Performance

The demo app (Next.js 14, App Router, SSG) scores 97-100 on Lighthouse across all vertical pages. Static generation means zero TTFB on cached routes. The CSS variable theming adds zero runtime overhead — it's compiled at build time.

No JavaScript is required to render any template above the fold. Booking widgets and interactive components lazy-load only when scrolled into view.

### Try It

GitHub: https://github.com/Alessandro114/scala-sites
Cost analyzer: https://analyze.get-scala.com
Live demo: https://scala-sites.vercel.app

Star the repo if it's useful. Open an issue if you want a vertical that's not there yet. PRs welcome — especially for industries outside the current 12.

---

## 6. PRODUCT HUNT LAUNCH COPY

**Tagline (58 chars):**
Free website templates for every industry + cost analyzer

---

**Short description (258 chars):**
100 industry-specific website templates (restaurant, gym, clinic, law firm, hotel, and 7 more) built in Next.js. MIT licensed. Deploy free to Vercel. Includes a cost analyzer that shows what your current fragmented stack actually costs per year.

---

**Long description (500 words):**

Most small businesses pay $6,660 per year for their digital presence — spread across 14 separate vendors: a website builder, email hosting, CRM, booking tool, live chat, WhatsApp API, analytics, SEO tool, forms, review management, email marketing, and social scheduling.

That number is based on real 2026 pricing research across every major tool category (the full data is open in the GitHub repo). And it's the conservative number — with Intercom's AI instead of Tidio's, you hit $1,500/month.

**We built two things to fix this.**

**1. SCALA Sites — 100 free website templates**

A pnpm monorepo with 12 industry verticals:
- DineOS (Restaurant)
- GymOS (Gym / CrossFit)
- ClinicoOS (Medical Clinic)
- LegalOS (Law Firm)
- TravelOS (Hotel / Resort)
- BeautyOS (Salon / Spa)
- PropertyOS (Real Estate)
- AutoOS (Car Dealership)
- WeddingOS (Wedding Venue)
- StudioOS (Creative Agency)
- PetOS (Veterinary)
- EduOS (School / Academy)

Each vertical has purpose-built components — not generic slots filled with placeholder content. The restaurant hero handles video/image with a live booking CTA. The law firm hero is deliberately restrained because aggressive sales patterns read wrong in legal contexts. The gym hero previews the class schedule above the fold.

**Shared across all verticals:**
- CSS variable theming (3 presets: Minimal, Bold, Classic) + `createCustomTheme()` override
- JSON-LD structured data auto-applied per vertical type (FoodEstablishment, LegalService, MedicalBusiness, etc.)
- BookingWidget with real-time slots, urgency badges, social proof
- ReviewCarousel, Gallery, FAQAccordion (with FAQPage schema), TeamGrid, WhatsAppCTA

Built on Next.js 14 (App Router), TypeScript throughout, Tailwind CSS with CSS variable theming. Zero JS dependencies beyond React and Next.js. Lighthouse 97-100 across all vertical pages.

MIT licensed. Deploy to Vercel free in one click.

**2. Cost Analyzer — analyze.get-scala.com**

Configure your exact stack — choose your website builder, email host, CRM, booking tool, and 10 other categories. See your annual cost calculated in real time, broken down by vendor, with the real 2026 pricing behind each number.

**Business model transparency:** The templates work standalone with mock data. We sell SCALA — an AI operating system for SMBs with real-time booking, WhatsApp automations, and multi-location CRM. The templates are free because reaching business owners early is more valuable than charging for templates.

GitHub: https://github.com/Alessandro114/scala-sites
Live demo: https://scala-sites.vercel.app
Analyzer: https://analyze.get-scala.com

---

**Maker comment (200 words):**

Hey Product Hunt — Alessandro here, founder of SCALA.

I started this project after doing a cost audit for a restaurant client and landing on a number that felt wrong: $6,660/year for a standard digital stack. I went back and checked every vendor, every pricing page, every renewal rate. The number was right.

That led to two questions: why does it cost this much, and what would it cost if you self-hosted the website layer instead of paying a SaaS builder forever?

The answer to the second question is what became SCALA Sites. 100 components, 12 industries, MIT license, free to deploy. The templates don't require our paid product — they work with mock data out of the box.

The cost analyzer at analyze.get-scala.com started as an internal tool to show prospects their current fragmented cost before I pitched them on SCALA. Then I realized it was genuinely useful as a standalone tool, so I made it public.

Two things I'd love feedback on: the per-vertical hero architecture (vs. a generic parameterized hero), and whether the cost analyzer is more useful as a lead gen tool than the templates themselves.

Thanks for hunting this.

---

## 7. EMAIL TO FRIENDS — HN UPVOTE REQUEST

**Subject:** Quick favor — can you upvote my HN post?

Hi [Name],

I just launched on Hacker News — would really appreciate an upvote if you find it interesting.

The post: Show HN: 100 free industry website templates with a cost analyzer (Next.js, MIT)
Link: https://news.ycombinator.com/item?id=[INSERT-ID-AFTER-POSTING]

The short version: I open-sourced 100 website templates for small businesses (restaurants, gyms, law firms, clinics, hotels, and more) built in Next.js. MIT licensed. I also built a free tool that shows what a typical SMB pays for its fragmented digital stack — turns out it's $6,660/year across 14 vendors.

Both are live:
- Templates: https://github.com/Alessandro114/scala-sites
- Cost analyzer: https://analyze.get-scala.com

Only upvote if you genuinely find it worth sharing — HN's algorithm is sensitive to brigading. But if it's useful, I'd love the signal boost.

Thanks either way.

Alessandro

---

*End of VIRAL-LAUNCH-KIT.md*
*All links verified: GitHub / analyze.get-scala.com / scala-sites.vercel.app*
*Content language: English throughout*
*Ready to post: 2026-08-08 morning*
