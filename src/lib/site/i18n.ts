"use client";

/**
 * VELOS marketing site — i18n dictionaries.
 * Full: en, sr. Additional locales (tr, de, ru) are provided in
 * `locales-extra.ts` and fall back per-key to English.
 *
 * Copy notes: written like people talk. No em-dashes, no middot
 * separators, no "seamless / elevate / unlock" vocabulary. Concrete
 * facts over adjectives.
 */

export type Locale = "en" | "sr" | "tr" | "de" | "ru";

export const LOCALES: Locale[] = ["en", "sr", "tr", "de", "ru"];

export const LOCALE_META: Record<Locale, { label: string; native: string }> = {
  en: { label: "English", native: "English" },
  sr: { label: "Serbian", native: "Srpski" },
  tr: { label: "Turkish", native: "Türkçe" },
  de: { label: "German", native: "Deutsch" },
  ru: { label: "Russian", native: "Русский" },
};

type Dict = Record<string, string>;

/* ─────────────────────────── English (base) ─────────────────────────── */

const en: Dict = {
  // Brand / nav
  "brand.tagline": "Trade CRM & ERP Platform",
  "nav.modules": "Modules",
  "nav.showcase": "Product Tour",
  "nav.calculator": "Calculator",
  "nav.marketplace": "Marketplace",
  "nav.security": "Security",
  "nav.api": "API",
  "nav.pricing": "Pricing",
  "nav.faq": "FAQ",
  "nav.demo": "Live Demo",
  "nav.trial": "Start Free Trial",
  "nav.menu": "Menu",
  "nav.theme.toggle": "Toggle theme",

  // Hero
  "hero.badge": "Built for commodity trading houses",
  "hero.title.a": "Trade globally.",
  "hero.title.b": "Close deals from one screen.",
  "hero.subtitle":
    "VELOS is a CRM and ERP for international commodity trading. Partners, offers, documents, shipments and payments live in one system, in five languages, on any device.",
  "hero.cta.demo": "Open live demo",
  "hero.cta.trial": "Start 10-day free trial",
  "hero.cta.note": "Free for 10 days. Every feature, no credit card.",
  "hero.doc.title": "Proforma P-2025-0117",
  "hero.doc.meta": "sent to buyer, just now",
  "hero.ver.title": "Invoice F-2025-0231 verified",
  "hero.ver.meta": "QR scan, Rotterdam",

  // Stats
  "stats.endpoints": "REST API endpoints",
  "stats.modules": "Modules & views",
  "stats.currencies": "Currencies supported",
  "stats.languages": "UI languages",

  // Lifecycle
  "lifecycle.kicker": "The trade lifecycle",
  "lifecycle.title": "From first inquiry to final payment",
  "lifecycle.subtitle":
    "VELOS keeps every step of a commodity deal in one place. No more spreadsheets, lost emails and tools that don't talk to each other.",
  "lifecycle.step1.title": "Inquiry",
  "lifecycle.step1.desc": "Demands and RFQs from buyers and suppliers, held in one pipeline.",
  "lifecycle.step2.title": "Offer",
  "lifecycle.step2.desc": "Multi-currency offers and proformas, generated from your templates in seconds.",
  "lifecycle.step3.title": "Deal",
  "lifecycle.step3.desc": "Contracts, LOIs, commissions and deal tracking with full history.",
  "lifecycle.step4.title": "Logistics",
  "lifecycle.step4.desc": "Shipment requests, customs and maritime routing on the 3D globe.",
  "lifecycle.step5.title": "Documents",
  "lifecycle.step5.desc": "Invoices with QR codes, a public verification page and a complete audit trail.",
  "lifecycle.step6.title": "Payment",
  "lifecycle.step6.desc": "Banking, ERP posting, exchange rates and final reconciliation.",

  // Modules bento
  "modules.kicker": "Everything in one place",
  "modules.title": "60+ modules, one login",
  "modules.subtitle":
    "Every part of the platform your desk runs on, organized, connected and permission-controlled.",
  "modules.cat.crm.title": "CRM & Trade Desk",
  "modules.cat.crm.desc":
    "A 360° view of every counterparty, buyers, suppliers and agents, with full trade history, KYC status and contacts.",
  "modules.cat.docs.title": "Documents & Finance",
  "modules.cat.docs.desc":
    "Offers, proformas, invoices and LOIs from branded templates, with QR verification, revisions and a searchable register.",
  "modules.cat.calc.title": "Trade Calculator & Globe",
  "modules.cat.calc.desc":
    "Landed cost across currencies with freight, insurance, duties and bank charges, plus a 3D globe with maritime routing.",
  "modules.cat.market.title": "Marketplace & Portal",
  "modules.cat.market.desc":
    "A B2B marketplace with RFQs, negotiations and smart pricing, and a secure portal your partners log into themselves.",
  "modules.cat.ai.title": "Intelligence & Automation",
  "modules.cat.ai.desc":
    "Smart suggestions, document parsing, market news, custom dashboards and global search across all your data.",
  "modules.cat.admin.title": "Security & Administration",
  "modules.cat.admin.desc":
    "Multi-tenant isolation, a granular permission catalog, 2FA, audit log, webhooks and platform health monitoring.",
  "modules.more": "+ more",

  // Showcase
  "showcase.kicker": "Product tour",
  "showcase.title": "See the platform in action",
  "showcase.subtitle":
    "These are recreations of the real screens. The interface your team gets on day one is the one you are looking at now.",
  "showcase.tab.dashboard": "Dashboard",
  "showcase.tab.dashboard.desc": "Custom KPI dashboards, pipeline health and recent activity across the whole desk.",
  "showcase.tab.offers": "Offers & CRM",
  "showcase.tab.offers.desc": "Searchable offer pipeline with statuses, filters and partner details.",
  "showcase.tab.calc": "Trade Calculator",
  "showcase.tab.calc.desc": "Landed-cost engine with a live cost breakdown per shipment and margin control.",
  "showcase.tab.globe": "3D Trade Globe",
  "showcase.tab.globe.desc": "Live maritime routes between ports, no land crossings, real distances.",
  "showcase.tab.docs": "Documents & QR",
  "showcase.tab.docs.desc": "Every document with a QR code and a public verification page.",
  "showcase.tab.market": "Marketplace",
  "showcase.tab.market.desc": "B2B posts, RFQs, smart pricing and suggestions in one feed.",
  "showcase.tab.portal": "Partner Portal",
  "showcase.tab.portal.desc": "A separate, secure space where your counterparties work with you.",
  "showcase.tab.security": "Security & Audit",
  "showcase.tab.security.desc": "Every action recorded: audit log, RBAC matrix and live session control.",
  "showcase.badge": "Actual screens",

  // Calculator demo
  "calc.kicker": "Try it yourself",
  "calc.title": "The trade calculator, right here",
  "calc.subtitle":
    "A working demo of the landed-cost engine. Change any input and the unit economics update as you type.",
  "calc.product": "Commodity",
  "calc.quantity": "Quantity (t)",
  "calc.unitPrice": "Unit price (USD/t)",
  "calc.freight": "Freight (USD)",
  "calc.insurance": "Insurance",
  "calc.duty": "Customs duty",
  "calc.bank": "Bank charges (USD)",
  "calc.margin": "Target margin",
  "calc.results": "Cost breakdown",
  "calc.goods": "Goods value",
  "calc.insurance.amount": "Insurance",
  "calc.duty.amount": "Duty",
  "calc.landed": "Total landed cost",
  "calc.unit": "Cost per ton",
  "calc.selling": "Suggested selling price",
  "calc.profit": "Expected profit",
  "calc.reset": "Reset to defaults",
  "calc.hint":
    "In the full platform this engine is wired to live exchange rates, partner price lists and offer templates.",

  // Marketplace
  "market.kicker": "B2B marketplace",
  "market.title": "Do business where your partners are",
  "market.subtitle":
    "Trading houses, suppliers and buyers share one marketplace, with negotiation, pricing and intelligence built in.",
  "market.rfq.title": "RFQs & posts",
  "market.rfq.desc": "Publish supply and demand posts. Collect and compare responses in one place.",
  "market.nego.title": "Structured negotiations",
  "market.nego.desc": "Counter-offers, follow-ups and award decisions, tracked per counterparty.",
  "market.pricing.title": "Smart pricing",
  "market.pricing.desc": "Market-aware price suggestions and benchmark data per commodity and route.",
  "market.ai.title": "Smart suggestions",
  "market.ai.desc": "The platform suggests partners, prices and next actions based on your own history.",
  "market.esg.title": "ESG profiles",
  "market.esg.desc": "Sustainability ratings and reviews for counterparties, built into the network.",
  "market.intel.title": "Market intelligence",
  "market.intel.desc": "News, events and price signals for the commodities you trade.",
  "market.parse.title": "Document parsing",
  "market.parse.desc": "Upload a PDF or a photo, and the platform extracts structured trade data.",

  // Security
  "sec.kicker": "Security & trust",
  "sec.title": "Security you can show your auditor",
  "sec.subtitle":
    "Trades, documents and partner data are protected at every layer, from the database to every API request.",
  "sec.rls.title": "Row-level security",
  "sec.rls.desc": "Every tenant's data is isolated at the database level (PostgreSQL RLS).",
  "sec.rbac.title": "Granular RBAC",
  "sec.rbac.desc": "A full permission catalog. Assign module-level rights per user role.",
  "sec.2fa.title": "Two-factor auth",
  "sec.2fa.desc": "TOTP-based 2FA for every team member, with recovery codes.",
  "sec.audit.title": "Complete audit log",
  "sec.audit.desc": "Who did what, and when. Every write is recorded and searchable.",
  "sec.rate.title": "Rate limiting",
  "sec.rate.desc": "Per-IP and per-user throttling against brute force and abuse.",
  "sec.gps.title": "Location-checked verification",
  "sec.gps.desc": "Public document verification checks location and validity before revealing data.",
  "sec.session.title": "Session control",
  "sec.session.desc": "Idle and absolute timeouts, instant revocation, device visibility.",
  "sec.errors.title": "Error audit",
  "sec.errors.desc": "Client and server errors captured centrally with triage views.",

  // API / developers
  "api.kicker": "For developers",
  "api.title": "A real API: 216 endpoints",
  "api.subtitle":
    "Every module is available over REST, with tenant-scoped API keys, OpenAPI docs and webhooks.",
  "api.openapi": "Interactive OpenAPI docs at /api-docs",
  "api.keys": "Tenant-scoped API keys",
  "api.webhooks": "Outgoing webhooks for events",
  "api.relay": "AI relay proxy for integrations",
  "api.caption": "Authenticated request example, GET /api/offers",

  // Pricing
  "pricing.kicker": "Pricing",
  "pricing.title": "Plans that fit your desk",
  "pricing.subtitle": "Every plan starts with 10 free days. Upgrade when your trade volume grows.",
  "pricing.month": "/mo",
  "pricing.popular": "Most popular",
  "pricing.custom": "Custom",
  "pricing.f.users": "Users",
  "pricing.f.partners": "Partners",
  "pricing.f.offers": "Offers / month",
  "pricing.f.currencies": "Currencies",
  "pricing.f.calc": "Trade calculator",
  "pricing.f.portal": "Partner portal",
  "pricing.f.erp": "ERP & accounting",
  "pricing.f.market": "Marketplace access",
  "pricing.f.api": "REST API access",
  "pricing.f.support": "Support",
  "pricing.unlimited": "Unlimited",
  "pricing.choose": "Start free trial",
  "pricing.contact": "Talk to us",
  "pricing.trialNote": "10-day free trial on every plan, no credit card required",
  "pricing.compare": "Compare all features",
  "pricing.starter.tagline": "For solo traders getting started.",
  "pricing.starter.f.users": "1",
  "pricing.starter.f.partners": "Up to 50",
  "pricing.starter.f.offers": "25",
  "pricing.starter.f.currencies": "5",
  "pricing.starter.f.calc": "true",
  "pricing.starter.f.portal": "false",
  "pricing.starter.f.erp": "false",
  "pricing.starter.f.market": "false",
  "pricing.starter.f.api": "false",
  "pricing.starter.f.support": "Email",
  "pricing.business.tagline": "For growing trade desks with a small team.",
  "pricing.business.f.users": "5",
  "pricing.business.f.partners": "Up to 500",
  "pricing.business.f.offers": "250",
  "pricing.business.f.currencies": "20",
  "pricing.business.f.calc": "true",
  "pricing.business.f.portal": "true",
  "pricing.business.f.erp": "false",
  "pricing.business.f.market": "true",
  "pricing.business.f.api": "true",
  "pricing.business.f.support": "Email + chat",
  "pricing.enterprise.tagline": "For full trade houses with back-office needs.",
  "pricing.enterprise.f.users": "25",
  "pricing.enterprise.f.partners": "Unlimited",
  "pricing.enterprise.f.offers": "Unlimited",
  "pricing.enterprise.f.currencies": "50+",
  "pricing.enterprise.f.calc": "true",
  "pricing.enterprise.f.portal": "true",
  "pricing.enterprise.f.erp": "true",
  "pricing.enterprise.f.market": "true",
  "pricing.enterprise.f.api": "true",
  "pricing.enterprise.f.support": "Priority 24/7",
  "pricing.custom.tagline": "Self-hosted, white-label or on-premise.",
  "pricing.custom.f.users": "Unlimited",
  "pricing.custom.f.partners": "Unlimited",
  "pricing.custom.f.offers": "Unlimited",
  "pricing.custom.f.currencies": "50+",
  "pricing.custom.f.calc": "true",
  "pricing.custom.f.portal": "true",
  "pricing.custom.f.erp": "true",
  "pricing.custom.f.market": "true",
  "pricing.custom.f.api": "true",
  "pricing.custom.f.support": "Dedicated manager",

  // FAQ
  "faq.kicker": "FAQ",
  "faq.title": "Before you start",
  "faq.subtitle": "The questions traders ask us most.",
  "faq.q1": "What exactly is VELOS?",
  "faq.a1":
    "VELOS is a multi-tenant CRM & ERP platform for international commodity trading. It brings partner management, offers, documents, logistics, finance and a B2B marketplace into one secure workspace, built for trading houses rather than generic businesses.",
  "faq.q2": "Do I need to install anything?",
  "faq.a2":
    "No. VELOS runs in the cloud and works in any modern browser, on desktop, tablet and mobile. The interface is fully responsive and available in 5 languages.",
  "faq.q3": "Can my partners and agents access the platform?",
  "faq.a3":
    "Yes. The Partner Portal is a separate, secure space where counterparties see their offers, upload KYC documents and respond to RFQs. You control exactly what each partner can see.",
  "faq.q4": "Which languages does the platform support?",
  "faq.a4": "English, Serbian, Turkish, German and Russian, switchable per user, instantly.",
  "faq.q5": "How is my data protected?",
  "faq.a5":
    "Data is isolated per tenant at the database level (row-level security), access is controlled by a granular permission catalog (RBAC), and every account can be protected with two-factor authentication. Every write lands in an immutable audit log.",
  "faq.q6": "Does VELOS integrate with other systems?",
  "faq.a6":
    "Yes. 216 REST endpoints with interactive OpenAPI docs, tenant-scoped API keys and outgoing webhooks. The AI relay proxy lets you connect external intelligence services.",
  "faq.q7": "How does the 10-day free trial work?",
  "faq.a7":
    "You get full access to every feature of your chosen plan for 10 days, with no credit card required. At the end you can upgrade or simply walk away.",
  "faq.q8": "Do you offer self-hosting or customization?",
  "faq.a8":
    "The Custom plan covers on-premise or white-label deployments, custom modules and integrations tailored to your trade house. Talk to us about your requirements.",

  // CTA
  "cta.title": "Try VELOS on your next deal",
  "cta.subtitle":
    "Ten days free with every feature unlocked. If it does not fit your desk, you walk away, with nothing to uninstall.",
  "cta.demo": "Open live demo",
  "cta.trial": "Start free trial",

  // Footer
  "footer.tagline": "Trade CRM & ERP for international commodity trading.",
  "footer.product": "Product",
  "footer.company": "Company",
  "footer.legal": "Legal",
  "footer.resources": "Resources",
  "footer.about": "About",
  "footer.contact": "Contact",
  "footer.faq": "FAQ",
  "footer.pricing": "Pricing",
  "footer.demo": "Live demo",
  "footer.trial": "Free trial",
  "footer.api": "API & docs",
  "footer.marketplace": "Marketplace",
  "footer.privacy": "Privacy policy",
  "footer.terms": "Terms of service",
  "footer.rights": "All rights reserved.",
  "footer.languages": "Available in 5 languages",
  "footer.made": "Named after Veles, the Slavic god of earth, waters and wealth.",

  // Misc
  "misc.lang": "Language",
  "misc.backToTop": "Back to top",
  "misc.yes": "Included",
  "misc.no": "—",
};

/* ────────────────────────────── Serbian ─────────────────────────────── */

const sr: Dict = {
  // Brand / nav
  "brand.tagline": "Trade CRM & ERP platforma",
  "nav.modules": "Moduli",
  "nav.showcase": "Obilazak platforme",
  "nav.calculator": "Kalkulator",
  "nav.marketplace": "Marketplace",
  "nav.security": "Bezbednost",
  "nav.api": "API",
  "nav.pricing": "Cenovnik",
  "nav.faq": "FAQ",
  "nav.demo": "Živi demo",
  "nav.trial": "Započni besplatno",
  "nav.menu": "Meni",
  "nav.theme.toggle": "Promeni temu",

  // Hero
  "hero.badge": "Napravljeno za trgovinske kuće",
  "hero.title.a": "Trguj globalno.",
  "hero.title.b": "Zatvaraj poslove sa jednog ekrana.",
  "hero.subtitle":
    "VELOS je CRM i ERP platforma za međunarodnu trgovinu robama. Partneri, ponude, dokumenti, pošiljke i plaćanja na jednom mestu, na pet jezika, na svakom uređaju.",
  "hero.cta.demo": "Otvori živi demo",
  "hero.cta.trial": "Započni 10-dnevni besplatni period",
  "hero.cta.note": "Besplatno 10 dana. Sve funkcije, bez kreditne kartice.",
  "hero.doc.title": "Profaktura P-2025-0117",
  "hero.doc.meta": "poslata kupcu, upravo sada",
  "hero.ver.title": "Faktura F-2025-0231 verifikovana",
  "hero.ver.meta": "QR skeniranje, Roterdam",

  // Stats
  "stats.endpoints": "REST API endpointa",
  "stats.modules": "Modula i pregleda",
  "stats.currencies": "Podržanih valuta",
  "stats.languages": "Jezika interfejsa",

  // Lifecycle
  "lifecycle.kicker": "Životni ciklus trgovine",
  "lifecycle.title": "Od prvog upita do konačnog plaćanja",
  "lifecycle.subtitle":
    "VELOS čuva svaki korak posla na jednom mestu. Bez tablica, izgubljenih mejlova i alata koji ne pričaju jedni sa drugima.",
  "lifecycle.step1.title": "Upit",
  "lifecycle.step1.desc": "Zahtevi i RFQ-ovi kupaca i dobavljača, na okupu u jednom pipeline-u.",
  "lifecycle.step2.title": "Ponuda",
  "lifecycle.step2.desc": "Viševalutne ponude i profakture, generisane iz vaših šablona za nekoliko sekundi.",
  "lifecycle.step3.title": "Posao",
  "lifecycle.step3.desc": "Ugovori, LOI-jevi, provizije i praćenje poslova sa kompletnom istorijom.",
  "lifecycle.step4.title": "Logistika",
  "lifecycle.step4.desc": "Zahtevi za transport, carina i pomorsko rutiranje na 3D globusu.",
  "lifecycle.step5.title": "Dokumenti",
  "lifecycle.step5.desc": "Fakture sa QR kodovima, javna stranica za verifikaciju i kompletan revizioni trag.",
  "lifecycle.step6.title": "Plaćanje",
  "lifecycle.step6.desc": "Bankarstvo, ERP knjiženje, kursevi valuta i konačno poravnanje.",

  // Modules bento
  "modules.kicker": "Sve na jednom mestu",
  "modules.title": "60+ modula, jedna prijava",
  "modules.subtitle":
    "Svaki deo platforme na kome vaš tim radi, organizovan, povezan i kontrolisan permisijama.",
  "modules.cat.crm.title": "CRM & trade desk",
  "modules.cat.crm.desc":
    "Pregled 360° svakog partnera, kupaca, dobavljača i agenata, sa kompletnom istorijom trgovine, KYC statusom i kontaktima.",
  "modules.cat.docs.title": "Dokumenti & finansije",
  "modules.cat.docs.desc":
    "Ponude, profakture, fakture i LOI-jevi iz brendiranih šablona, sa QR verifikacijom, revizijama i pretraživim registrom.",
  "modules.cat.calc.title": "Kalkulator & globus",
  "modules.cat.calc.desc":
    "Nabavna cena kroz valute, sa freightom, osiguranjem, carinom i bankarskim troškovima, plus 3D globus sa pomorskim rutama.",
  "modules.cat.market.title": "Marketplace & portal",
  "modules.cat.market.desc":
    "B2B marketplace sa RFQ-ovima, pregovorima i pametnim cenama, i siguran portal u koji se vaši partneri sami prijavljuju.",
  "modules.cat.ai.title": "Inteligencija & automatizacija",
  "modules.cat.ai.desc":
    "Pametni predlozi, parsiranje dokumenata, tržišne vesti, prilagođene kontrole i globalna pretraga kroz sve podatke.",
  "modules.cat.admin.title": "Bezbednost & administracija",
  "modules.cat.admin.desc":
    "Multi-tenant izolacija, detaljan katalog permisija, 2FA, audit log, webhookovi i monitoring platforme.",
  "modules.more": "+ više",

  // Showcase
  "showcase.kicker": "Obilazak platforme",
  "showcase.title": "Pogledajte platformu u akciji",
  "showcase.subtitle":
    "Ovo su prikazi stvarnih ekrana. Interfejs koji vaš tim dobija prvog dana isti je kao onaj koji sad gledate.",
  "showcase.tab.dashboard": "Dashboard",
  "showcase.tab.dashboard.desc": "Prilagođene KPI kontrole, zdravlje pipeline-a i aktivnosti celog tima.",
  "showcase.tab.offers": "Ponude & CRM",
  "showcase.tab.offers.desc": "Pretraživ pipeline ponuda sa statusima, filterima i detaljima partnera.",
  "showcase.tab.calc": "Kalkulator",
  "showcase.tab.calc.desc": "Motor nabavne cene sa raščlambom troškova po pošiljci i kontrolom marže.",
  "showcase.tab.globe": "3D globus",
  "showcase.tab.globe.desc": "Pomorske rute između luka, bez kopnenih prelaza, stvarne udaljenosti.",
  "showcase.tab.docs": "Dokumenti & QR",
  "showcase.tab.docs.desc": "Svaki dokument sa QR kodom i javnom stranicom za verifikaciju.",
  "showcase.tab.market": "Marketplace",
  "showcase.tab.market.desc": "B2B objave, RFQ-ovi, pametne cene i predlozi u jednom feedu.",
  "showcase.tab.portal": "Partnerski portal",
  "showcase.tab.portal.desc": "Odvojen, siguran prostor u kojem vaši partneri rade sa vama.",
  "showcase.tab.security": "Bezbednost & audit",
  "showcase.tab.security.desc": "Svaka akcija zabeležena: audit log, RBAC matrica i kontrola sesija.",
  "showcase.badge": "Stvarni ekrani",

  // Calculator demo
  "calc.kicker": "Probajte sami",
  "calc.title": "Kalkulator trgovine, odmah ovde",
  "calc.subtitle":
    "Radna demo verzija motora nabavne cene. Promenite bilo koji unos i ekonomija po toni se menja dok kucate.",
  "calc.product": "Roba",
  "calc.quantity": "Količina (t)",
  "calc.unitPrice": "Cena po toni (USD/t)",
  "calc.freight": "Freight (USD)",
  "calc.insurance": "Osiguranje",
  "calc.duty": "Carina",
  "calc.bank": "Bankarski troškovi (USD)",
  "calc.margin": "Ciljna marža",
  "calc.results": "Raščlamba troškova",
  "calc.goods": "Vrednost robe",
  "calc.insurance.amount": "Osiguranje",
  "calc.duty.amount": "Carina",
  "calc.landed": "Ukupna nabavna cena",
  "calc.unit": "Cena po toni",
  "calc.selling": "Predložena prodajna cena",
  "calc.profit": "Očekivani profit",
  "calc.reset": "Vrati na podrazumevano",
  "calc.hint":
    "U punoj platformi ovaj motor je povezan sa live kursevima valuta, cenovnicima partnera i šablonima ponuda.",

  // Marketplace
  "market.kicker": "B2B marketplace",
  "market.title": "Poslujte tamo gde su vaši partneri",
  "market.subtitle":
    "Trgovinske kuće, dobavljači i kupci dele jedan marketplace, sa pregovorima, cenama i inteligencijom ugrađenim unutra.",
  "market.rfq.title": "RFQ-ovi i objave",
  "market.rfq.desc": "Objavite ponudu i tražnju. Prikupite i uporedite odgovore na jednom mestu.",
  "market.nego.title": "Strukturirani pregovori",
  "market.nego.desc": "Kontra-ponude, praćenje i odluke o dodeli, vođeni po partneru.",
  "market.pricing.title": "Pametne cene",
  "market.pricing.desc": "Predlozi cena svesni tržišta i benchmark podaci po robi i ruti.",
  "market.ai.title": "Pametni predlozi",
  "market.ai.desc": "Platforma predlaže partnere, cene i sledeće korake na osnovu vaše istorije.",
  "market.esg.title": "ESG profili",
  "market.esg.desc": "Ocene održivosti i recenzije partnera, ugrađene u mrežu.",
  "market.intel.title": "Tržišna inteligencija",
  "market.intel.desc": "Vesti, događaji i signali cena za robe kojima trgujete.",
  "market.parse.title": "Parsiranje dokumenata",
  "market.parse.desc": "Otpremite PDF ili sliku, i platforma izvlači strukturirane podatke.",

  // Security
  "sec.kicker": "Bezbednost i poverenje",
  "sec.title": "Bezbednost koju možete pokazati auditoru",
  "sec.subtitle":
    "Poslovi, dokumenti i podaci partnera zaštićeni su na svakom sloju, od baze do svakog API zahteva.",
  "sec.rls.title": "Row-level bezbednost",
  "sec.rls.desc": "Podaci svakog tenanta izolovani su na nivou baze (PostgreSQL RLS).",
  "sec.rbac.title": "Detaljan RBAC",
  "sec.rbac.desc": "Kompletan katalog permisija. Dodelite prava po modulu za svaku ulogu.",
  "sec.2fa.title": "Dvofaktorska autentifikacija",
  "sec.2fa.desc": "TOTP 2FA za svakog člana tima, sa recovery kodovima.",
  "sec.audit.title": "Kompletan audit log",
  "sec.audit.desc": "Ko je šta uradio, i kada. Svaki upis je zabeležen i pretraživ.",
  "sec.rate.title": "Ograničavanje brzine",
  "sec.rate.desc": "Throttling po IP-u i korisniku protiv brute-force napada.",
  "sec.gps.title": "Verifikacija sa proverom lokacije",
  "sec.gps.desc": "Javna verifikacija dokumenata proverava lokaciju i validnost pre otkrivanja podataka.",
  "sec.session.title": "Kontrola sesija",
  "sec.session.desc": "Idle i apsolutni timeout, trenutna revokacija, vidljivost uređaja.",
  "sec.errors.title": "Audit grešaka",
  "sec.errors.desc": "Klijentske i serverske greške centralno uhvaćene sa triage pregledima.",

  // API / developers
  "api.kicker": "Za developere",
  "api.title": "Pravi API: 216 endpointa",
  "api.subtitle":
    "Svaki modul je dostupan kroz REST, sa tenant API ključevima, OpenAPI dokumentacijom i webhookovima.",
  "api.openapi": "Interaktivna OpenAPI dokumentacija na /api-docs",
  "api.keys": "API ključevi po tenantu",
  "api.webhooks": "Outgoing webhookovi za događaje",
  "api.relay": "AI relay proxy za integracije",
  "api.caption": "Primer autentifikovanog zahteva, GET /api/offers",

  // Pricing
  "pricing.kicker": "Cenovnik",
  "pricing.title": "Planovi koji odgovaraju vašem timu",
  "pricing.subtitle": "Svaki plan počinje sa 10 besplatnih dana. Nadogradite kada vaš obim trgovine poraste.",
  "pricing.month": "/mes",
  "pricing.popular": "Najpopularniji",
  "pricing.custom": "Po dogovoru",
  "pricing.f.users": "Korisnici",
  "pricing.f.partners": "Partneri",
  "pricing.f.offers": "Ponude / mesec",
  "pricing.f.currencies": "Valute",
  "pricing.f.calc": "Kalkulator",
  "pricing.f.portal": "Partnerski portal",
  "pricing.f.erp": "ERP i računovodstvo",
  "pricing.f.market": "Marketplace",
  "pricing.f.api": "REST API",
  "pricing.f.support": "Podrška",
  "pricing.unlimited": "Neograničeno",
  "pricing.choose": "Započni besplatno",
  "pricing.contact": "Razgovarajte sa nama",
  "pricing.trialNote": "10-dnevni besplatni period na svakom planu, bez kreditne kartice",
  "pricing.compare": "Uporedi sve funkcije",
  "pricing.starter.tagline": "Za solo trgovce koji počinju.",
  "pricing.starter.f.users": "1",
  "pricing.starter.f.partners": "Do 50",
  "pricing.starter.f.offers": "25",
  "pricing.starter.f.currencies": "5",
  "pricing.starter.f.calc": "true",
  "pricing.starter.f.portal": "false",
  "pricing.starter.f.erp": "false",
  "pricing.starter.f.market": "false",
  "pricing.starter.f.api": "false",
  "pricing.starter.f.support": "Email",
  "pricing.business.tagline": "Za rastuće timove sa malom ekipom.",
  "pricing.business.f.users": "5",
  "pricing.business.f.partners": "Do 500",
  "pricing.business.f.offers": "250",
  "pricing.business.f.currencies": "20",
  "pricing.business.f.calc": "true",
  "pricing.business.f.portal": "true",
  "pricing.business.f.erp": "false",
  "pricing.business.f.market": "true",
  "pricing.business.f.api": "true",
  "pricing.business.f.support": "Email + chat",
  "pricing.enterprise.tagline": "Za pune trgovinske kuće sa back-office potrebama.",
  "pricing.enterprise.f.users": "25",
  "pricing.enterprise.f.partners": "Neograničeno",
  "pricing.enterprise.f.offers": "Neograničeno",
  "pricing.enterprise.f.currencies": "50+",
  "pricing.enterprise.f.calc": "true",
  "pricing.enterprise.f.portal": "true",
  "pricing.enterprise.f.erp": "true",
  "pricing.enterprise.f.market": "true",
  "pricing.enterprise.f.api": "true",
  "pricing.enterprise.f.support": "Prioritetna 24/7",
  "pricing.custom.tagline": "Self-hosted, white-label ili on-premise.",
  "pricing.custom.f.users": "Neograničeno",
  "pricing.custom.f.partners": "Neograničeno",
  "pricing.custom.f.offers": "Neograničeno",
  "pricing.custom.f.currencies": "50+",
  "pricing.custom.f.calc": "true",
  "pricing.custom.f.portal": "true",
  "pricing.custom.f.erp": "true",
  "pricing.custom.f.market": "true",
  "pricing.custom.f.api": "true",
  "pricing.custom.f.support": "Posvećen menadžer",

  // FAQ
  "faq.kicker": "FAQ",
  "faq.title": "Pre nego što počnete",
  "faq.subtitle": "Pitanja koja nam trgovci najčešće postavljaju.",
  "faq.q1": "Šta je tačno VELOS?",
  "faq.a1":
    "VELOS je multi-tenant CRM & ERP platforma za međunarodnu trgovinu robama. Spaja upravljanje partnerima, ponude, dokumente, logistiku, finansije i B2B marketplace u jedan siguran radni prostor, napravljena za trgovinske kuće, a ne za generičke biznise.",
  "faq.q2": "Da li treba da nešto instaliram?",
  "faq.a2":
    "Ne. VELOS radi u cloudu i funkcioniše u svakom modernom pregledaču, na računaru, tabletu i mobilnom. Interfejs je potpuno responzivan i dostupan na 5 jezika.",
  "faq.q3": "Da li moji partneri i agenti mogu da pristupe platformi?",
  "faq.a3":
    "Da. Partnerski portal je odvojen, siguran prostor u kojem partneri vide svoje ponude, otpremaju KYC dokumente i odgovaraju na RFQ-ove. Vi kontrolišete šta svaki partner vidi.",
  "faq.q4": "Koje jezike platforma podržava?",
  "faq.a4": "Engleski, srpski, turski, nemački i ruski, prebacivanje po korisniku, trenutno.",
  "faq.q5": "Kako su moji podaci zaštićeni?",
  "faq.a5":
    "Podaci su izolovani po tenantu na nivou baze (row-level security), pristup kontroliše detaljan katalog permisija (RBAC), a svaki nalog može biti zaštićen dvofaktorskom autentifikacijom. Svaki upis završava u nepromenljivom audit logu.",
  "faq.q6": "Da li se VELOS integriše sa drugim sistemima?",
  "faq.a6":
    "Da. 216 REST endpointa sa interaktivnom OpenAPI dokumentacijom, API ključevima po tenantu i outgoing webhookovima. AI relay proxy omogućava povezivanje spoljnih servisa.",
  "faq.q7": "Kako funkcioniše 10-dnevni besplatni period?",
  "faq.a7":
    "Dobijate pun pristup svim funkcijama izabranog plana na 10 dana, bez kreditne kartice. Na kraju možete nadograditi plan ili jednostavno odustati.",
  "faq.q8": "Da li nudite self-hosting ili prilagođavanja?",
  "faq.a8":
    "Custom plan pokriva on-premise ili white-label deploymente, custom module i integracije prilagođene vašoj trgovinskoj kući. Razgovarajte sa nama o vašim zahtevima.",

  // CTA
  "cta.title": "Probajte VELOS na sledećem poslu",
  "cta.subtitle":
    "Deset dana besplatno, sa otključanim svim funkcijama. Ako platforma ne odgovara vašem timu, samo odete, ništa ne deinstalirate.",
  "cta.demo": "Otvori živi demo",
  "cta.trial": "Započni besplatno",

  // Footer
  "footer.tagline": "Trade CRM & ERP za međunarodnu trgovinu robama.",
  "footer.product": "Proizvod",
  "footer.company": "Kompanija",
  "footer.legal": "Pravno",
  "footer.resources": "Resursi",
  "footer.about": "O nama",
  "footer.contact": "Kontakt",
  "footer.faq": "FAQ",
  "footer.pricing": "Cenovnik",
  "footer.demo": "Živi demo",
  "footer.trial": "Besplatan period",
  "footer.api": "API i dokumentacija",
  "footer.marketplace": "Marketplace",
  "footer.privacy": "Politika privatnosti",
  "footer.terms": "Uslovi korišćenja",
  "footer.rights": "Sva prava zadržana.",
  "footer.languages": "Dostupno na 5 jezika",
  "footer.made": "Imenovana po Velesu, slovenskom bogu zemlje, voda i bogatstva.",

  // Misc
  "misc.lang": "Jezik",
  "misc.backToTop": "Nazad na vrh",
  "misc.yes": "Uključeno",
  "misc.no": "—",
};

export const BASE_DICTS: Record<"en" | "sr", Dict> = { en, sr };
