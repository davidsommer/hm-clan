# HM-Clan Website Project Context

## Project Path

Primary project directory:

`C:\Users\dso\work\hm`

This project is intended to be a static, mobile-ready website about the band HM-Clan. Work on the actual website should stay in plain HTML, CSS, and JavaScript.

Do not rely on Webpack, npm build tooling, framework components, or generated app structures for the real site unless the user explicitly asks for that later. Existing Webpack/package files can be ignored for normal website work.

## Core Goal

Build a visually strong, static HM-Clan archive website using real HM-Clan content.

Requested pages/features:

- `index.html` as homepage
- `geschichte.html` with a large underground-style band timeline
- `musik.html` with album layout and album components
- `videos.html`
- `fotos.html`
- Urban design with textures, gritty surfaces, strong typography, and street/underground mood
- Animations
- Gallery lightbox
- Complete mobile navigation
- Album and video components
- Hero backgrounds
- Replace fake data with real HM-Clan content
- Final design polish

## Existing Local Structure

Current scanned files:

- `index.html`
- `css/style.css`
- `css/responsive.css`
- `js/app.js`
- `pdf/band-info_hm-clan__juni_2010.pdf`
- `pdf/band-history_hm-clan__juni_2010.pdf`
- `img/.gitkeep`

The image folder is currently empty except for `.gitkeep`. Hero backgrounds, album covers, photos, video thumbnails, and textures are not yet present locally.

The current `index.html` is a starter page. Navigation already points to pages that do not yet exist:

- `geschichte.html`
- `musik.html`
- `konzerte.html`
- `videos.html`
- `fotos.html`
- `about.html`

There are encoding issues in the current HTML content, such as broken umlauts. Fix these when editing.

The directory did not appear to be a Git repository during the first scan.

## Content Sources

Primary local sources:

- `pdf/band-history_hm-clan__juni_2010.pdf`
- `pdf/band-info_hm-clan__juni_2010.pdf`

Archive sources provided by user:

- `https://archiv.hm-clan.ch/`
- `https://archiv.hm-clan.ch/konzertuumlbersicht.html`
- `https://archiv.hm-clan.ch/fotosessions.html`
- `https://archiv.hm-clan.ch/cds.html`
- `https://archiv.hm-clan.ch/videoclips.html`
- `https://archiv.hm-clan.ch/diverses.html`

Archive password:

- `hm`

Archive access notes:

- The archive uses Weebly password protection.
- Direct Basic Auth with `hm:hm` or empty username did not unlock the page.
- The working login flow is:
  - request a protected page and observe redirect to `/401/login.php?redirect=/...`
  - POST password form data to that login URL
  - example: `p=hm&redirect=/cds.html&u=weebs`
  - this sets a `WeeblySiteLogin` cookie
  - reuse that cookie for subsequent archive pages
- Temporary HTML copies were successfully downloaded to `C:\tmp\hm_archive_*.html` during initial research.
- The in-app browser runtime failed to start in the current Windows sandbox, but `curl` with the Weebly cookie worked.

## Real HM-Clan Facts From PDFs

Use these as trusted content until better archive details are available.

Band basics:

- HM-Clan was a Bernese dialect hip-hop crew from Biglen.
- The name started as "history makers" and was shortened to "hm-clan" around the first CD release.
- The letters "h" and "m" are pronounced in English and stand for "history makers".
- The crew existed from 1999 to 2010, almost 11 years.
- They played over 120 concerts in Switzerland and nearby foreign countries.
- They released three CDs/albums and two video clips.
- They also offered rap workshops in schools, confirmation classes, and youth centers.
- Their lyrics were self-written and often came from personal life situations, including faith/religion.
- Their beats were self-produced and characterized as "Made by hm-clan".

Important members/roles:

- Benjamin Müller, aka disciple-b: MC, beats, lyrics
- Andreas Marmet, aka gandi: initially technician/mixer, later stage member, studio/technical work
- David Sommer, aka dave: rapper/lyrics, joined late 2003, returned in 2008 after a break
- Joel Stauffer, aka J82: early MC
- Christoph Hasenfratz: early guitarist, later homepage/web role
- David Mörner, aka dj mate: early mixer, later DJ, then web/graphic design
- Therese Krähenbühl, aka tray-c: vocalist in 2003
- David Schranz, aka radical-d: guest/additional stage member in autumn 2002
- Timon Studler, aka dj studi: occasional live support

Timeline anchors:

- September 1999: founded in Biglen as "history makers".
- 18 September 1999: first public performance at a wedding celebration.
- 2000: Markus Wildermuth briefly managed the band.
- Summer 2001: the crew prepared songs and recorded the first CD.
- 15 September 2001: CD baptism/release event for "dr ander hiphop" at Reberhaus in Bolligen.
- 2001: name shortened to "hm-clan".
- Summer 2002: personnel restructuring; David Mörner moved away from DJing to web/graphic design; Joel Stauffer left the stage; gandi moved from mixer to stage.
- 10 August 2002: Prix Walo "Sprungbrett" participation in Kreuzlingen.
- 22 March 2003: tray-c performed with the crew at BäGO Fescht in National, Bern.
- 2 August 2003: Freakstock open-air performance in Gotha, Germany.
- Late 2003: dave joined, making HM-Clan a trio again.
- Summer 2004: second album "wortspiu" released.
- 28 August 2004: "wortspiu" CD baptism at Kulturkeller Alpina in Burgdorf.
- 2004: video clip for "hm-clan bäng bäng" aired for months on SF DRS.
- Autumn 2006: dave left; HM-Clan continued as disciple-b and gandi with guest rappers.
- March 2007: mx3 Band of the Week on Radio VIRUS; song "Wieso?" played regularly.
- 16 November 2007: third album "[drü:eis]" released at Wasserwerk Club, Bern.
- 2007: video clip for "är vermisst di" ran on SF Roboclip.
- 2007: HM-Clan helped found "Beat Ministry" with other Christian Swiss hip-hop bands.
- 2008: dave returned; gandi moved back toward mixing; shows increasingly supported by live band and guests.
- 5 June 2010: final concert / Schluss-Event in Huttwil according to band-history PDF.
- 6 June 2010: end of the HM-Clan era according to band-info PDF. Treat as the final weekend, and verify exact date if archive access becomes available.

Albums:

- "dr ander hiphop" (2001)
- "wortspiu" (2004)
- "[drü:eis]" (2007)

Known videos:

- "hm-clan bäng bäng" from the "wortspiu" era
- "är vermisst di" from the "[drü:eis]" era

Known features/collaborations on "[drü:eis]":

- Souladdict / dr Connector from California
- chöjs on two songs, including "N.E.I" and "es eifachs"
- face2face on "Zyt vergeit"
- Female vocal support on several tracks

Useful quote:

> Nicht einfach ein Konzert, sondern vielmehr eine fette hm-show...

Use the quote sparingly and keep copyright-sensitive excerpts short.

## Design Direction

The user wants "echtes Urban-Design mit Texturen". Interpret this as:

- Dark, gritty, underground, Swiss/Bernese hip-hop archive mood
- Concrete, paper, sticker, poster, scratched metal, photocopy, stage-light, and club-wall textures
- Strong display typography for titles
- Dense but readable archive sections
- Timeline should feel large and physical, not a generic corporate timeline
- Avoid fake glossy SaaS/cards-only look
- Avoid one-note palettes. Do not make the whole site only black/gold. Use dark base plus concrete grey, faded white, rust/red, signal yellow, poster paper, and restrained accent colors.
- Use real images when available. If no real assets exist, use CSS textures temporarily and clearly keep placeholders easy to replace.

## Frontend Rules

- Always write the band name as `hm-clan` in visible website copy. Do not use `HM-CLAN` or `HM-Clan` in UI text.
- Do not use the word `Archiv`/`archive` in visible website copy. Technical source URLs and local folder names may keep it when required.

- Keep the actual site plain HTML/CSS/JS.
- No frameworks unless explicitly requested.
- No landing-page-only treatment; build usable archive pages.
- Mobile navigation must be complete and accessible:
  - burger button
  - close/open state
  - close on link click
  - keyboard and aria attributes where practical
  - body scroll lock if menu covers viewport
- Use reusable CSS classes for album cards, video cards, photo grid, timeline entries, buttons, and page heroes.
- Use JS only for real interactions:
  - mobile nav
  - lightbox
  - scroll/entrance animations
  - optional active navigation state
- Prefer progressive enhancement. The content should remain readable without JS.
- Keep text legible on mobile and desktop.
- Avoid nested card-in-card layouts.
- Do not add visible explanatory UI text about how the site works.

## Suggested Implementation Order

1. Create shared visual system in `css/style.css` and responsive rules in `css/responsive.css`.
2. Fix `index.html` encoding and turn it into a strong homepage.
3. Create `geschichte.html` using the PDF timeline facts.
4. Create `musik.html` with three album components and real known release details.
5. Create `videos.html` with known clips and placeholders for archive thumbnails/links until archive access works.
6. Create `fotos.html` with gallery grid and JS lightbox; use placeholders if no photos are available locally.
7. Expand `js/app.js` for mobile nav, lightbox, and animation hooks.
8. Add real assets from archive/user-provided files when available.
9. Final polish and mobile verification.

## Open Questions / To Verify

- Exact album tracklists from the archive discography PDF.
- Whether archive images should be hotlinked or downloaded locally into `img/`.
- Exact final event date: band-history PDF says 5 June 2010; band-info PDF says 6 June 2010.

## Archive Findings From Live Pages

Archive navigation:

- Home: `/`
- Konzerte: `/konzerte.html`
- Konzertübersicht: `/konzertuumlbersicht.html`
- Concert year pages: `/2000-2003.html`, `/2004.html`, `/2005-2006.html`, `/2007.html`, `/2008.html`, `/2009.html`, `/schlussevent.html`
- Fotosessions: `/fotosessions.html`
- CDs: `/cds.html`
- Videoclips: `/videoclips.html`
- Diverses: `/diverses.html`
- Jokes: `/jokes.html`

Archive home links:

- Band-History PDF: `/uploads/1/3/0/4/13049361/band-history_hm-clan__juni_2010.pdf`
- Band-Info PDF: `/uploads/1/3/0/4/13049361/band-info_hm-clan__juni_2010.pdf`
- Old bio PDF from 2003: `/uploads/1/3/0/4/13049361/bio_hm-clan_2003__nov.pdf`

CD page findings:

- Headings: `dr ander hiphop`, `wortspiu`, `[3:1]`
- Text labels:
  - `2001 - Foto-Session Booklet`
  - `2004 - Foto-Session Booklet`
  - `2007 - Foto-Session Booklet`
- Discography PDF: `/uploads/1/3/0/4/13049361/discographie_hm-clan_19.10.07.pdf`
- Useful CD/flyer image paths:
  - `/uploads/1/3/0/4/13049361/flyer-reberhaus-sept01_orig.jpg`
  - `/uploads/1/3/0/4/13049361/published/flyer-plattentaufe-28-8-04.gif?1663407086`
  - `/uploads/1/3/0/4/13049361/flyer-releaseparty-31_orig.jpg`
  - `/uploads/1/3/0/4/13049361/bild-461_orig.jpg`
  - `/uploads/1/3/0/4/13049361/studio-d-nu-wisler-001_orig.jpg`
- CD page contains many slideshow images for:
  - `01-session-dranderhh-*`
  - `booklet-pics-*`
  - `07-session-dr-eis-schulhaus-*`

Fotosessions page findings:

- Listed sessions:
  - `1999 - Ur-ur-history makers @Thun`
  - `2000 - Ur-history makers @Biglen`
  - `2002 - db / gandi @Biglen`
  - `2003 - db / gandi / tray-c / DaveM / Chrigu :) @Biglen`
  - `2003 - db / gandi / tray-c @Thun`
  - `2004 - db / Dave / gandi / Studi`
  - `2005 - New Jack @Biglen`
  - `2006 - db / gandi @Graffitii + Schulhaus Wandorf`
  - `2007 - db / gandi - Session für [3:1] @Schulhaus Wankdorf`
  - `2008 - db / Dave / gandi @ Graffitti Wankdorf`
- Useful slideshow image families:
  - `99-*`
  - `hm-clan*.jpg`
  - `beny*`, `joel*`, `dave*`, `andy*`, `kusi*`
  - `02-session-biglen-*`
  - `photo-session-hm-clan-11-01-2003-*`

Videoclips page findings:

- The page embeds three YouTube videos:
  - `https://www.youtube.com/embed/JRxDf0ahBos`
  - `https://www.youtube.com/embed/fN5XjdF446o`
  - `https://www.youtube.com/embed/3Qu6aFaQfSk`
- Use these as the first real video components.

Konzertübersicht findings:

- The archive has a full concert list from 1999 through 2010.
- It confirms the final event as `05.06.10 Schluss-Event / Kirchentag Oberaargau / Huttwil`.
- Useful linked PDFs:
  - Stageplan 2004: `/uploads/1/3/0/4/13049361/stageplan_hm-clan_13.10.04.pdf`
  - Stageplan 2006: `/uploads/1/3/0/4/13049361/stageplan_hm-clan_juli_06.pdf`
  - Stageplan 2008: `/uploads/1/3/0/4/13049361/stageplan_hm-clan_2008.pdf`
  - Concert archive PDF: `/uploads/1/3/0/4/13049361/eventarchiv_hm-clan_.pdf`
  - Workshop archive PDF: `/uploads/1/3/0/4/13049361/workshoparchiv_22.4.09.pdf`
- Representative concert anchors for homepage/timeline:
  - `15.09.01 Hip Hop Night (CD Taufe) / Reberhaus / Bolligen`
  - `10.08.02 Prix Walo Vorausscheidungen / Kreuzlingen`
  - `02.08.03 OpenAir Freakstock / Gotha DE`
  - `28.08.04 CD Taufe "wortspiu" / Alpina Burgdorf`
  - `17.11.07 Release Party [drü:eis] / Wasserwerk Club / Bern`
  - `20.12.08 Beat Ministry / Beatlehem HipHopNight / Jugendtreff e9 / Basel`
  - `05.06.10 Schluss-Event / Kirchentag Oberaargau / Huttwil`

Diverses page findings:

- Headings:
  - `1999 - Demo-Tape`
  - `2001 - hm-Vorstellungs-Clip (CD Taufe Reberhaus) by Bunnyface`
  - `Alte Newsletter`
  - `Zeitungsberichte`
  - `Studio zwöi @Biglen`
  - `2006 - Werbefilm Workshops`
  - `Div. hm-Logos`
  - `2003 - Autogrammkarte`
- Newsletter links:
  - `/uploads/1/3/0/4/13049361/nl2_2001.pdf`
  - `/uploads/1/3/0/4/13049361/nl3_2001.pdf`
  - `/uploads/1/3/0/4/13049361/news4.pdf`
  - `/uploads/1/3/0/4/13049361/news5.pdf`
  - `/uploads/1/3/0/4/13049361/news6.pdf`
- Useful image families:
  - review/press scans such as `07-11-16-review-hiphop-ch.jpg`, `08-bernerzeitung-hhgd.jpg`
  - studio images such as `bau-studio-zw-i-biglen-*`, `studio-zw-i-biglen-*`
  - logos such as `history-makers.jpg`, `hm-desktop.jpg`, `hm-clan-jpg.jpg`, `hm-logo-black-300dpi.jpg`, `hm-logo-neu-300dpi.jpg`, `hm-logo-neu-white.jpg`
  - autograph card: `/uploads/1/3/0/4/13049361/autogrammkarte_orig.jpg`

