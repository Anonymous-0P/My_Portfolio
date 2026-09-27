## PREMIUM ART DIRECTION — OBSIDIAN EDITORIAL × KINETIC 3D

Upgrade the entire portfolio design so it does NOT look like a typical AI-generated developer portfolio.

Avoid common portfolio clichés such as:

- Generic black + blue/purple gradient
- Excessive glassmorphism
- Neon borders everywhere
- Floating glowing spheres
- Random 3D blobs
- Particle globe
- Astronaut models
- Generic laptop mockups
- Skill percentage bars
- Identical rounded cards everywhere
- Excessively centered layouts
- Overuse of gradients

The portfolio should instead feel like a combination of:

- Premium digital product studio
- Experimental creative developer portfolio
- Swiss editorial design
- Futuristic engineering laboratory
- High-end technology brand
- Modern architecture magazine

The final website must feel manually art-directed and intentionally designed rather than generated from a common website template.

---

# DESIGN IDENTITY

Create the portfolio around this visual identity:

**PRAKASH KAREKAR — DIGITAL SYSTEMS ENGINEER**

Visual theme:

**Obsidian × Titanium × Signal Lime**

The design should feel:

- Technical
- Architectural
- Minimal
- Intelligent
- Experimental
- Sophisticated
- Precise
- Premium
- Slightly futuristic

Do not make it look like a gaming website.

---

# COLOR SYSTEM

Use this restrained color system:

```css
--obsidian: #0B0C0C;
--carbon: #121412;
--ivory: #EAE9E4;
--stone: #878A84;
--titanium: #B8BBB6;
--signal-lime: #B7FF3C;
--periwinkle: #A9B4FF;
```

Color usage:

- 85–90% Obsidian / Carbon / Ivory
- 5–10% gray and metallic tones
- Maximum 2–4% signal lime
- Periwinkle only for occasional subtle details

Do NOT create large lime gradients.

Signal lime should only appear in carefully chosen details such as:

- Cursor states
- Small labels
- Status indicators
- Hover borders
- Project numbers
- Active navigation
- Important technical metadata

---

# TYPOGRAPHY DIRECTION

Do NOT use generic combinations such as:

- Poppins
- Roboto
- Montserrat
- Inter everywhere

Use a modern grotesk combined with an expressive editorial serif.

Recommended style:

Primary font:

- General Sans
- Satoshi
- Manrope
- Neue Montreal style

Secondary editorial font:

- Instrument Serif
- Similar high-quality serif

Use typography contrast intentionally.

Example:

```text
ENGINEERING
DIGITAL SYSTEMS
THAT WORK
BEYOND
real world.
```

The majority should be large modern sans-serif typography.

Use serif italic text sparingly for emotional emphasis.

Examples:

```text
built for the
real world.
```

or

```text
from idea
to production.
```

---

# TYPOGRAPHIC SCALE

Use extremely strong typographic hierarchy.

Hero name should occupy a major part of the viewport.

Example:

```text
PRAKASH
KAREKAR™
```

Desktop title sizes may reach:

```css
font-size: clamp(70px, 11vw, 190px);
```

Use controlled line height:

```css
line-height: 0.82;
```

The result should feel editorial instead of like a landing-page template.

---

# ASYMMETRIC EDITORIAL LAYOUT

Do not center everything.

Use:

- Left aligned content
- Right aligned metadata
- Vertical labels
- Small coordinates
- Large empty spaces
- Unequal columns
- Edge-aligned information
- Oversized section numbers

Example:

```text
[ 01 ]

PROFILE

                                    PRAKASH KAREKAR
                                    SOFTWARE DEVELOPER
                                    BENGALURU / INDIA
```

Use subtle grids inspired by editorial magazines.

---

# MICRO METADATA SYSTEM

Introduce small technical metadata throughout the portfolio.

Examples:

```text
PK® / 2026
```

```text
01 — 07
```

```text
SYSTEM STATUS
● ONLINE
```

```text
LOCATION
BENGALURU / INDIA
```

```text
SCROLL TO EXPLORE ↓
```

```text
ENGINEERING SYSTEM
PK / 001
```

```text
SELECTED WORK / 2025—26
```

Use uppercase typography with increased letter spacing.

Do not overuse these labels.

---

# CUSTOM 3D SIGNATURE OBJECT

Create a unique interactive 3D object specifically for Prakash.

Do NOT use a generic:

- Sphere
- Torus knot
- Planet
- Globe
- Floating cube
- Laptop
- Robot
- Astronaut
- Random blob

Create a custom abstract mechanical sculpture called:

# THE PRAKASH CORE

The object should look like a combination of:

- Precision mechanical component
- Futuristic processor
- Architectural sculpture
- Data core
- Industrial machinery
- Advanced engineering object

It should NOT literally resemble a CPU.

The core consists of FOUR interlocking parts.

Each part represents:

```text
01 / BACKEND
02 / MOBILE
03 / INFRASTRUCTURE
04 / SECURITY
```

Materials:

- Dark titanium
- Matte black metal
- Brushed metal
- Slight reflective surfaces
- Very subtle emissive lime details

Avoid excessive chrome.

---

# THREE.JS TECHNOLOGY

Build the 3D experience using:

- Three.js
- React Three Fiber
- Drei

Use Three.js / React Three Fiber rather than embedding an external Spline scene.

Use:

```text
@react-three/fiber
@react-three/drei
three
```

GSAP should control major transitions of the 3D object.

---

# HERO 3D EXPERIENCE

The 3D object should occupy approximately:

```text
35–45%
```

of the desktop hero.

The text occupies the remaining area.

Do NOT place a basic image of the developer in the hero.

The Prakash Core becomes the visual identity.

---

# INTRO / PRELOADER EXPERIENCE

Create an elegant 2–3 second intro.

Start with an almost black screen.

Display:

```text
PK®
SYSTEM / 001
```

Then:

```text
INITIALIZING
```

Optional numerical sequence:

```text
00
24
67
100
```

Four mechanical components appear separately.

GSAP animates the components toward the center.

They assemble into the Prakash Core.

After assembly:

Small signal lime light activates.

Then transition smoothly into the hero.

Reveal:

```text
PRAKASH
KAREKAR
```

Do NOT make the loading animation overly long.

Allow returning visitors to bypass or shorten it.

---

# HERO COPY

Instead of a generic:

"Hi, I'm Prakash..."

Use:

```text
PRAKASH
KAREKAR™
```

Small metadata:

```text
SOFTWARE DEVELOPER
BENGALURU / INDIA
```

Primary statement:

```text
ENGINEERING
DIGITAL SYSTEMS
THAT WORK
BEYOND LOCALHOST.
```

Use a serif treatment for:

```text
BEYOND LOCALHOST.
```

or another selected phrase.

Supporting text:

"Software Developer building backend systems, APIs, web platforms, mobile applications and production infrastructure."

Primary CTA:

```text
VIEW SELECTED WORK ↗
```

Secondary CTA:

```text
LET'S TALK
```

---

# HERO TEXT ANIMATION

Use a cinematic GSAP timeline.

Sequence:

1. Metadata fades in.
2. PRAKASH slides upward from an overflow-hidden wrapper.
3. KAREKAR reveals approximately 100–150ms later.
4. Individual characters slightly stagger.
5. Developer descriptor appears.
6. Main statement reveals line by line.
7. CTA buttons enter.
8. 3D object becomes interactive.

Animations must use:

- transform
- opacity
- clip-path
- masks

Avoid excessive bouncing.

Recommended easing:

```javascript
power3.out
power4.out
expo.out
```

---

# POINTER-BASED 3D INTERACTION

The Prakash Core should respond subtly to pointer movement.

Maximum rotation:

```text
X: approximately ±6°
Y: approximately ±10°
```

Movement should have inertia.

Use interpolation / GSAP instead of directly mapping cursor position.

When mouse moves right:

Core rotates slightly right.

When mouse moves vertically:

Lighting subtly changes.

When pointer gets close:

Core reacts very slightly.

The object must NEVER continuously rotate like a product viewer.

---

# 3D RAYCASTING

Make the four sections of the core individually interactive.

When hovering a part:

Highlight the related segment.

Show a small floating label.

Example:

```text
01
BACKEND
```

Hover another:

```text
03
INFRASTRUCTURE
```

Use Three.js raycasting.

Highlighting can use:

- subtle material brightness
- tiny signal-lime line
- slight separation
- changed emissive intensity

Do NOT make entire sections glow aggressively.

---

# SCROLL-CONTROLLED 3D STORY

The 3D object must evolve as the visitor scrolls.

Connect GSAP ScrollTrigger to the Three.js scene.

### HERO

Core is fully assembled.

```text
[ ASSEMBLED ]
```

---

### ABOUT

Rotate approximately:

```text
20–30°
```

Reveal internal mechanical layers.

---

### SKILLS

Create an exploded-view animation.

Four sections separate.

Example:

```text
             BACKEND

      MOBILE      INFRA

             SECURITY
```

Skills appear near their corresponding category.

Do NOT make the pieces travel too far.

The animation should resemble a premium technical product exploded diagram.

---

### EXPERIENCE

Core slowly reassembles.

Its internal central light becomes visible.

---

### PROJECTS

Core moves toward one side of the viewport.

Project content becomes dominant.

As different projects are selected, subtly alter:

- Core orientation
- Accent lighting
- Camera angle

---

### CONTACT

Core fully assembles again.

Slowly moves backward.

Final text becomes dominant.

---

# 3D TECHNICAL BLUEPRINT OVERLAY

At selected moments, temporarily show technical blueprint lines around the core.

Examples:

```text
PK / CORE / 01
```

```text
SYSTEM ARCHITECTURE
```

```text
X 34.81
Y 09.42
Z 67.20
```

Add thin measurement lines.

Keep them subtle.

The effect should resemble a mechanical CAD or engineering presentation.

---

# SCROLL STORYTELLING

The site should not feel like:

```text
Hero
About
Skills
Experience
Projects
Contact
```

Instead visually communicate:

```text
01 / IDENTITY
↓
Who is Prakash?


02 / SYSTEM
↓
How does he work?


03 / CAPABILITIES
↓
What can he build?


04 / SELECTED WORK
↓
Where is the proof?


05 / EXPERIENCE
↓
What has he done professionally?


06 / BEYOND CODE
↓
Leadership and community


07 / CONNECTION
↓
Let's build something.
```

The sections can still retain semantic IDs such as:

```text
#about
#skills
#projects
```

for navigation and SEO.

---

# SECTION TRANSITIONS

Avoid normal hard section boundaries.

Use visual transformations.

For example:

Hero background:

```text
#0B0C0C
```

About:

```text
#0B0C0C
```

Skills:

```text
#121412
```

Projects transition into:

```text
#EAE9E4
```

with dark typography.

Then Experience gradually transitions back to:

```text
#0B0C0C
```

Animate transitions with ScrollTrigger.

This creates major visual moments.

---

# LIGHT PROJECT SECTION

Make the Selected Work section unexpectedly switch to an ivory background:

```text
#EAE9E4
```

Typography:

```text
#0B0C0C
```

Accent:

```text
#A6E832
```

This contrast should feel dramatic but sophisticated.

---

# PROJECT DESIGN — NO STANDARD CARDS

Do not display projects inside three identical rounded cards.

Instead create editorial project rows.

Example:

```text
SELECTED WORK                          03 PROJECTS


01       ROTRA LOGISTICS                    2025

         DJANGO / FLUTTER / LINUX

                                        VIEW ↗
──────────────────────────────────────────────


02       THETRACKER                          2025

         FULL STACK SYSTEM

                                        VIEW ↗
──────────────────────────────────────────────


03       CERTIFYPRO                          2025

         AUTOMATION PLATFORM

                                        VIEW ↗
```

Use thin lines and substantial whitespace.

---

# PROJECT HOVER PREVIEW

When hovering a project row:

Show a large floating project preview near the pointer.

The preview should:

- Follow the pointer slowly
- Have a slight rotation
- Scale from approximately 0.85 to 1
- Be clipped when appearing
- Move with GSAP lag

Do not make the preview instantly stick to the mouse.

---

# PROJECT CURSOR STATE

When hovering a project:

Custom cursor changes to:

```text
VIEW ↗
```

Increase cursor diameter.

When leaving:

Return to the normal cursor.

---

# PROJECT TEXT ANIMATION

Hovering a project can slightly expand its title.

Example:

Normal:

```text
ROTRA LOGISTICS
```

Hover:

```text
R O T R A   L O G I S T I C S
```

Achieve through:

- letter spacing
- width
- character animation

Keep transitions approximately:

```text
400–700ms
```

---

# PROJECT CASE STUDIES

Project detail views should look like case studies rather than simple cards.

Example:

```text
ROTRA LOGISTICS

PROJECT
01 / 03

ROLE
Backend Development

SYSTEM
Web + Mobile

STACK
Django REST Framework
Flutter
Linux
Nginx
Gunicorn

RESPONSIBILITIES
Backend Architecture
REST APIs
Mobile Integration
Production Deployment
Server Configuration
Troubleshooting
```

Large statement:

```text
BUILD
↓
INTEGRATE
↓
DEPLOY
```

Allow clicking:

```text
VISIT LIVE PROJECT ↗
```

---

# KINETIC TYPOGRAPHY SECTION

Create a dedicated visual statement section.

Huge text:

```text
FROM
CODE
TO
PRODUCTION.
```

Animation:

Initially "CODE" appears in outline form.

As the user scrolls:

- The Prakash Core travels behind the typography.
- CODE gradually fills.
- TO appears.
- PRODUCTION reveals with a subtle metallic / mask animation.

This section communicates the developer's end-to-end capability.

---

# STATEMENT SECTION

Add another typography-driven sequence:

```text
I DESIGN.
I DEVELOP.
I DEPLOY.
I SECURE.
```

Reveal one statement at a time using ScrollTrigger.

For each word:

```text
I DESIGN.
```

core subtly changes orientation.

Then:

```text
I DEVELOP.
```

Then:

```text
I DEPLOY.
```

Then:

```text
I SECURE.
```

The final four words may briefly appear together.

---

# EXPERIENCE TIMELINE

Do NOT create standard glass cards.

Use a clean editorial timeline.

Example:

```text
2025 — NOW

THETA DYNAMICS PVT. LTD.

SOFTWARE DEVELOPER

Backend Development
REST Architecture
Flutter Integration
Production Infrastructure
Linux / Nginx / Gunicorn
```

Then:

```text
2024 — 2025

EYESEC CYBERSECURITY SOLUTIONS

CYBERSECURITY INTERN
```

Use an animated vertical timeline or horizontal year indicator.

---

# SKILLS DESIGN

Do not use percentage bars.

Instead build an engineering-style capability matrix.

Example:

```text
01   BACKEND

PYTHON
DJANGO
DJANGO REST
NODE.JS
REST API
WEBSOCKETS


02   INTERFACE

REACT
HTML
CSS


03   MOBILE

FLUTTER
DART
ANDROID


04   INFRASTRUCTURE

LINUX
DOCKER
NGINX
GUNICORN
GITHUB ACTIONS


05   SECURITY

NMAP
WIRESHARK
BURP SUITE
KALI LINUX
```

Use horizontal dividers and responsive typography.

---

# CUSTOM CURSOR

Desktop only.

Normal state:

```text
•
```

Link:

```text
○
```

Project:

```text
VIEW ↗
```

3D core:

```text
DRAG
```

Contact:

```text
SAY HI ↗
```

Implement using GSAP quickTo() or an optimized animation approach.

Cursor should follow the real pointer with subtle delay.

Disable custom cursor completely for touch devices.

---

# MAGNETIC INTERACTIONS

Add magnetic interactions only to major controls:

- View Work
- Contact
- Project links
- Social links

Movement maximum:

```text
5–8px
```

Avoid exaggerated magnetic effects.

---

# NAVIGATION DESIGN

Use a minimal fixed header.

Example:

```text
PK®                              MENU / 07
```

Desktop alternative:

```text
PK®            WORK   ABOUT   SYSTEM   CONTACT
```

Add status:

```text
● AVAILABLE
```

Active navigation should use a tiny signal-lime marker.

Avoid pill-shaped navigation containers.

---

# MOBILE MENU

Make the mobile menu a full-screen editorial overlay.

Example:

```text
01 / HOME

02 / PROFILE

03 / CAPABILITIES

04 / WORK

05 / EXPERIENCE

06 / BEYOND CODE

07 / CONTACT
```

Large typography.

Animate menu items using staggered GSAP reveals.

---

# CUSTOM SCROLL INDICATOR

Instead of a generic mouse icon use:

```text
SCROLL
↓
```

with a thin animated line.

Optional:

```text
00 / 100
```

displaying approximate page progress.

---

# SECTION NUMBERS

Each major section should have large section metadata.

Examples:

```text
01 / PROFILE
```

```text
02 / SYSTEM
```

```text
03 / CAPABILITIES
```

```text
04 / SELECTED WORK
```

```text
05 / EXPERIENCE
```

```text
06 / BEYOND CODE
```

```text
07 / CONTACT
```

---

# CONTACT EXPERIENCE

The final section should feel cinematic.

Background:

```text
#0B0C0C
```

Huge typography:

```text
LET'S BUILD
SOMETHING
REAL.
```

Use the editorial serif for:

```text
REAL.
```

Supporting text:

```text
Have an idea, project or opportunity?
Let's talk.
```

CTA:

```text
START A CONVERSATION ↗
```

Display email underneath.

---

# CONTACT 3D INTERACTION

The Prakash Core appears again.

When hovering the CTA:

- Core rotates toward the CTA.
- Internal light becomes slightly brighter.
- Tiny lime indicators activate.

Clicking Email can trigger a tiny mechanical separation effect before opening mailto.

Do not delay navigation significantly.

---

# FOOTER

Ultra-minimal.

Example:

```text
PRAKASH KAREKAR®                   BENGALURU / INDIA

SOFTWARE DEVELOPER                 2026

                                        BACK TO TOP ↑
```

Add:

```text
BUILT WITH
REACT / THREE.JS / GSAP
```

in very small text.

---

# TEXTURE

Add extremely subtle texture.

Possible effects:

- Film grain
- Fine noise
- Paper texture
- Grid
- Technical measurement lines

Opacity should remain very low:

```text
1–5%
```

Never interfere with readability.

---

# CUSTOM GRID

Use an underlying 12-column responsive grid.

On selected sections allow subtle grid lines to become visible.

Example:

```text
|          |          |          |
|          |          |          |
|          |          |          |
```

The lines should look architectural.

---

# IMAGE TREATMENT

If real project screenshots are available:

Use them.

Do NOT automatically generate generic project illustrations.

Display screenshots inside minimal browser frames.

Possible treatments:

- monochrome initially
- reveal full color on hover
- slight zoom
- clipped transitions
- perspective transform

---

# SCROLL SMOOTHING

Use Lenis.

Synchronize Lenis with GSAP ScrollTrigger properly.

Scrolling should feel smooth but never sluggish.

Do not override normal scrolling aggressively.

---

# MOTION RULES

Animation should follow these rules:

### GOOD

- Slow directional movement
- Clip reveals
- Text masks
- Stagger
- Scroll progression
- Parallax
- Camera movement
- Subtle rotations
- Perspective
- Mechanical transitions

### AVOID

- Bounce animations
- Excessive scale popping
- Everything fading upward
- Constant object rotation
- Excessive floating elements
- Random particle explosions
- Overusing spring animations

The animation language should feel deliberate and engineered.

---

# 3D PERFORMANCE

Optimize aggressively.

Requirements:

- Load compressed GLTF / GLB
- Use Draco compression where appropriate
- Optimize texture sizes
- Avoid unnecessary lights
- Limit environment map resolution
- Reduce device pixel ratio on weaker devices
- Pause rendering when canvas is offscreen if possible
- Simplify geometry on mobile
- Disable expensive post-processing on mobile

Target:

```text
60 FPS desktop
smooth usable experience mobile
```

---

# MOBILE 3D VERSION

Do not remove the entire creative identity on mobile.

Instead simplify it.

Mobile:

- Smaller core
- Reduced geometry
- Reduced lighting
- Disable raycasting if necessary
- Minimal pointer effects
- Scroll-controlled rotation
- No expensive post-processing

Keep the same design identity.

---

# REDUCED MOTION

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable:

- Camera movement
- Large parallax
- Smooth scroll
- Object explosion

Keep content fully accessible.

---

# GSAP ARCHITECTURE

Use:

```javascript
gsap.context()
```

inside components.

Clean everything on component unmount.

Use:

```javascript
ScrollTrigger.matchMedia()
```

or GSAP's modern responsive APIs for desktop/mobile animation differences.

Avoid creating duplicate ScrollTriggers.

Use timelines instead of disconnected animations where possible.

---

# 3D + GSAP ARCHITECTURE

The Three.js object should expose animation parameters such as:

```javascript
rotation
position
explosionProgress
coreIntensity
cameraPosition
```

GSAP should animate those numeric values.

React Three Fiber should render them.

Example conceptual structure:

```javascript
const state = {
  rotationY: 0,
  explosion: 0,
  coreIntensity: 0.2
};

gsap.to(state, {
  explosion: 1,
  scrollTrigger: {
    trigger: "#capabilities",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});
```

Then map `state.explosion` to the position of the four 3D pieces.

---

# NO AI-GENERATED WEBSITE FEEL

This is extremely important.

Do NOT create:

- Hero centered inside one container
- Three equal feature cards
- Three project cards in one grid
- Purple gradient glow everywhere
- Fake testimonials
- Fake statistics
- Generic motivational paragraphs
- Excessive icons
- Random decorative blobs
- Repetitive border-radius components

Instead prioritize:

- Typography
- Layout
- Space
- Motion
- Real projects
- Engineering metadata
- Visual hierarchy
- Custom 3D identity

Every section should have a slightly different composition while still belonging to the same design system.

---

# FINAL EXPERIENCE

The visitor should feel the following progression:

```text
MYSTERY
↓
Who is this?

IDENTITY
↓
Prakash Karekar

CAPABILITY
↓
Backend / Mobile / Infrastructure / Security

PROOF
↓
Real production systems

EXPERIENCE
↓
Professional engineering work

LEADERSHIP
↓
Technical community involvement

CONNECTION
↓
Let's work together
```

The website should ultimately communicate:

```text
HE DOESN'T JUST WRITE CODE.

HE BUILDS SYSTEMS.

HE CONNECTS THEM.

HE DEPLOYS THEM.

HE SECURES THEM.
```

Do this visually rather than repeating these lines everywhere.

---

# FINAL QUALITY BAR

The final website should feel appropriate for:

- Creative developer awards
- Senior engineering applications
- Startup opportunities
- Freelance clients
- Product engineering roles
- Backend engineering roles
- Full-stack engineering roles
- Creative technology roles

The visitor should remember:

**the typography**
+
**the Prakash Core**
+
**the project presentation**

after leaving the website.

Do not sacrifice readability or usability for animation.

The final result must remain a professional software developer portfolio first, with creative technology enhancing the experience rather than becoming the entire experience.