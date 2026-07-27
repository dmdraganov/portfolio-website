# Home Page Overrides

> Overrides `../MASTER.md` only where this document is more specific.

## Purpose

Convert a visitor from uncertainty into a direct Telegram or Kwork conversation by sequencing promise, inspectable work, price orientation, process, identity, capability, and contact.

## Layout

- Hero: 12-column desktop composition; copy uses 7 columns and the site blueprint uses 5 without a vertical divider between them. On mobile, copy precedes the same complete blueprint scaled to the viewport width.
- Projects: two full editorial entries, never masonry and never filterable at MVP scale.
- Primary CTA is visible in the hero and final section. It is not sticky and not hover-only.
- Maintain the approved section order from `../../EXPERIENCE.md`. Pricing and the three-step process share one section but remain visually distinct, scannable row groups rather than generic card grids.

## Site Blueprint

The hero blueprint shows three connected layers:

1. **Grid** — responsive structure and measurements.
2. **Interface** — navigation, content, media, CTA, and supporting modules.
3. **System** — data, keyboard access, responsive range, and component relationships.

The initial composition is complete without animation. On first appearance, it reveals grid, browser frame, interface, drawn system connections, and aligned label capsules in order. Fine-pointer position alone drives pronounced spring-smoothed depth shifts across the browser frame, interface, and system connections while the coordinate grid and its labels remain fixed. Entering hover adds no preset displacement; the layers return to rest on pointer leave, with no continuous motion or essential hover-only information.

## Motion Budget

- Hero: one restrained first-load entrance; copy is readable immediately.
- Each project media frame: one clip-path reveal when first entering view.
- Service and process rows: optional 40ms stagger, maximum four visible rows per group; never gate reading or interaction.
- Portrait: opacity plus at most 8px translation once.
- Final CTA uses only hover and press feedback.
- At most two animated focal elements are active in a viewport.

## Conversion Rules

- `Обсудить задачу` remains the visual primary action.
- Project title, summary, and `Открыть кейс` are always visible.
- Prices are scannable rows, not plan cards.
- Trust proof is the project, repository, demo, process, and warranty. Do not add empty testimonial or certificate placeholders.

## Mobile Override

- No custom cursor.
- No parallax.
- The complete desktop blueprint composition is preserved and scaled to the full mobile viewport width, including its grid, coordinates, annotations, and system connections. Pointer parallax remains inactive on touch input.
- Full-width Primary CTA.
- All project information visible without hover.
