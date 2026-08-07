# SCALA Sites

**Open source vertical website templates powered by SCALA AI OS.**

Pre-built, industry-optimized websites for restaurants, real estate agencies, salons, gyms, hotels, creative studios, and more. Each template connects natively to [SCALA](https://get-scala.com) for live booking, WhatsApp, CRM, and AI-powered features — or works standalone with mock data.

## Why SCALA Sites?

The gap in every vertical is not design — beautiful templates already exist. The gap is that **the website doesn't talk to the business system.** Every template on the market redirects to third-party booking, hides pricing, has no WhatsApp, no real-time availability, and no post-conversion flow.

SCALA Sites solves this:

| Feature | Regular Templates | SCALA Sites |
|---|---|---|
| Booking | Redirects to OpenTable/Fresha | Native widget, stays on your site |
| Availability | Static | Real-time ("3 spots left") |
| WhatsApp | None | SARA-connected confirmations |
| Pricing | Often hidden | Always transparent |
| Social proof | Badge in footer | Inside the booking flow |
| Multilingual | Manual | 5 languages built-in |

## Verticals

| Vertical | Components | Demo |
|---|---|---|
| **DineOS** (Restaurant) | MenuSection, StorySection, UpsellBanner | `/restaurant` |
| **PropertyOS** (Real Estate) | ListingSearch, AgentCard, ValuationWidget | `/property` |
| **BeautyOS** (Salon/Spa) | StylistBooking, BeforeAfter, ServiceMenu | `/beauty` |
| **GymOS** (Gym/CrossFit) | ClassSchedule, MembershipTiers, TrainerCard | `/gym` |
| **TravelOS** (Hotel/Resort) | RoomShowcase, ExperienceGrid, AvailabilityChecker | `/hotel` |
| **StudioOS** (Creative Agency) | PortfolioShowcase, ServicePackages, ProjectInquiry | `/studio` |
| **ClinicoOS** (Medical Clinic) | DoctorBooking, TreatmentMenu, InsuranceChecker | `/clinic` |
| **LegalOS** (Law Firm) | LawyerDirectory, CaseEvaluator, PracticeAreas | `/law` |
| **AutoOS** (Car Dealership) | VehicleInventory, TestDriveBooking, FinanceCalculator | `/auto` |
| **WeddingOS** (Wedding Venue) | VenueShowcase, WeddingPlanner, VendorDirectory | `/wedding` |
| **PetOS** (Veterinary) | VetBooking, ServicePackages, PetProfile | `/vet` |
| **EduOS** (School/Academy) | CourseCatalog, EnrollmentForm, InstructorGrid | `/school` |

## Shared Components (Core)

Every vertical gets these out of the box:

- **Hero** — Full-width with image/video, overlay, dual CTAs
- **BookingWidget** — Multi-step, real-time slots, urgency badges, social proof
- **ReviewCarousel** — Auto-advancing, aggregate rating, verified badges
- **WhatsAppCTA** — Floating button with pulse animation
- **TeamGrid** — Staff profiles with individual booking
- **Gallery** — Filterable masonry with keyboard-accessible lightbox
- **FAQAccordion** — Schema markup for SEO
- **LoyaltyPrompt** — Phone capture for WhatsApp loyalty
- **Footer** — Contact, map, social, "Powered by SCALA"

## Themes

Three built-in themes, each fully customizable via CSS variables:

- **Minimal** — Clean white, Inter font, subtle borders (luxury, professional)
- **Bold** — Dark background, Bebas Neue headings, sharp edges (gyms, bars)
- **Classic** — Warm tones, Playfair Display serif, soft radius (traditional, heritage)

Use `createCustomTheme()` to override any color in a base theme:

```typescript
import { createCustomTheme, themeToStyleObject } from '@scala-sites/themes'

const myTheme = createCustomTheme('classic', {
  primary: '#1e3a5f',
  accent: '#c9a84c',
  background: '#ffffff',
})
```

## Quick Start

```bash
git clone https://github.com/Alessandro114/scala-sites.git
cd scala-sites
npm install
npm run dev
```

Open `http://localhost:3099` to see all demos.

## Project Structure

```
scala-sites/
  packages/
    core/           # Shared components, API client, i18n, SEO, analytics
    themes/         # 3 theme presets (minimal, bold, classic) + createCustomTheme
    verticals/
      dineos/       # Restaurant components
      propertyos/   # Real estate components
      beautyos/     # Salon/spa components
      gymos/        # Gym/fitness components
      travelos/     # Hotel/resort components
      studioos/     # Creative studio components
      clinicoos/    # Medical clinic components
      legalos/      # Law firm components
      autoos/       # Car dealership components
      weddingos/    # Wedding venue components
      petos/        # Veterinary components
      eduos/        # School/academy components
  apps/
    demo/           # Next.js demo with all verticals
```

## Tech Stack

- **Next.js 14** (App Router, SSG + ISR)
- **Tailwind CSS** with CSS variable theming
- **TypeScript** throughout
- **Zero dependencies** beyond React and Next.js

## Using with SCALA

These templates work standalone with mock data. To connect to SCALA:

```typescript
import { createScalaAPI } from '@scala-sites/core/lib/scala-api'

const api = createScalaAPI({
  baseUrl: 'https://api.get-scala.com',
  apiKey: 'your-api-key',
  tenantId: 'your-tenant-id',
})

// Real-time booking slots
const slots = await api.getAvailableSlots('2026-08-10')

// Live menu with 86'd items
const menu = await api.getMenu()

// Reviews from all sources
const reviews = await api.getReviews()
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-vertical`)
3. Build components following the existing patterns in `packages/core/`
4. Add a demo page in `apps/demo/app/`
5. Submit a pull request

New verticals are welcome! Check the [issues](https://github.com/Alessandro114/scala-sites/issues) for requested verticals.

## License

MIT — use freely for any project. The SCALA API is a separate proprietary service.

---

Built with care by [SCALA AI OS](https://get-scala.com) — the agentic AI operating system for every business vertical.
