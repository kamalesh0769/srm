// Catalog of all printable products grouped by category.
// Each product has a stable slug used in /product/:slug routes.

export type Product = {
  slug: string;
  name: string;
  description: string;
  category: string;
  isNew?: boolean;
};

export type CategoryGroup = {
  title: string;
  slug: string;
  products: Product[];
};

const mk = (category: string, name: string, description: string, isNew = false): Product => ({
  slug: name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  name,
  description,
  category,
  isNew,
});

export const catalog: CategoryGroup[] = [
  {
    title: "Invitations",
    slug: "invitations",
    products: [
      mk("Invitations", "Acrylic Wedding Invitation Cards", "Elegant acrylic wedding invitation cards with a luxurious transparent or frosted finish. Durable, waterproof, and fully customizable designs for a modern and premium wedding announcement.", true),
      mk("Invitations", "Baby Shower Invite", "Soft, joyful baby shower invitations printed on premium textured stock with custom illustrations and hand-picked typography."),
      mk("Invitations", "Birthday Invite", "Personalised birthday invites for all ages — from minimalist to playful, printed on heavyweight card."),
      mk("Invitations", "Christian Weddings", "Sacred and elegant Christian wedding invitations with foil accents, scripture inlays and bespoke covers."),
      mk("Invitations", "Hindu Wedding", "Traditional Hindu wedding cards with intricate motifs, gold foiling and rich silken finishes."),
      mk("Invitations", "House Warming Invite", "Warm housewarming invitations to welcome guests into your new home, beautifully printed with custom motifs."),
      mk("Invitations", "Interfaith Wedding Invitations", "Thoughtful, inclusive designs that honour two cultures in a single, beautifully crafted invitation."),
      mk("Invitations", "Invitation Cards", "All-purpose invitation cards for any occasion — corporate, personal or ceremonial."),
      mk("Invitations", "Laser Cut Wedding Cards", "Precision laser-cut wedding invitations with delicate filigree and intricate detailing."),
      mk("Invitations", "Muslim Cards", "Traditional Islamic wedding and ceremonial cards with calligraphy, foil and arabesque motifs."),
      mk("Invitations", "Padded Invitations", "Luxurious padded invitations with soft fabric and foam covers for a tactile premium feel."),
      mk("Invitations", "Personal Invitation Cards", "Custom personal invitations for milestones — from anniversaries to retirements."),
      mk("Invitations", "Puberty Invitation", "Traditional puberty function invitations with vibrant colours and cultural motifs."),
      mk("Invitations", "Scroll Wedding Invitation Cards", "Theatrical scroll-style wedding invitations rolled and tied with silk ribbon."),
      mk("Invitations", "Tracing Sheet Invitation Cards", "Delicate translucent tracing-sheet overlays for a soft, romantic invitation."),
      mk("Invitations", "Wedding Cards", "Bespoke wedding cards across every tradition, finish and budget."),
    ],
  },
  {
    title: "Visiting Cards",
    slug: "visiting-cards",
    products: [
      mk("Visiting Cards", "Standard Visiting Cards", "Classic 350gsm visiting cards with crisp print quality and a clean matte finish."),
      mk("Visiting Cards", "Textured Visiting Cards", "Premium textured stock for a tactile first impression — linen, felt and cotton finishes."),
      mk("Visiting Cards", "Diecut Visiting Cards", "Custom die-cut shapes for visiting cards that stand out from a stack."),
      mk("Visiting Cards", "Laminated Visiting Cards", "Glossy and matte lamination for a durable, long-lasting visiting card."),
      mk("Visiting Cards", "Synthetic Visiting Cards", "Waterproof synthetic visiting cards with a luxurious plastic-like feel."),
      mk("Visiting Cards", "Corner Cut Visiting Cards", "Modern corner-cut visiting cards in single or double rounded variants."),
      mk("Visiting Cards", "Square Visiting Cards", "Distinctive square format visiting cards that break the conventional mould."),
      mk("Visiting Cards", "Gold Foil Visiting Card", "Real gold foil stamping on premium dark stock for ultimate luxury."),
      mk("Visiting Cards", "Circle Visiting Card", "Round-format visiting cards with eye-catching presentation."),
      mk("Visiting Cards", "Round Corner Cards", "Subtly rounded corners on a classic visiting card silhouette."),
    ],
  },
  {
    title: "Office Stationery",
    slug: "office-stationery",
    products: [
      mk("Office Stationery", "Envelopes", "Custom branded envelopes in all DL, A4 and C5 sizes with full-colour printing."),
      mk("Office Stationery", "Brochures", "Bi-fold, tri-fold and gate-fold brochures on premium silk and matte stock."),
      mk("Office Stationery", "Catalogues", "Multi-page perfect-bound or saddle-stitched product catalogues."),
      mk("Office Stationery", "Letter Head", "Crisp branded letterheads on quality paper for official correspondence."),
      mk("Office Stationery", "Self Ink Seals", "Custom self-inking rubber stamps and seals for offices and signatures."),
      mk("Office Stationery", "Bill Books", "Triplicate and duplicate carbon bill books, fully numbered and customised."),
      mk("Office Stationery", "Vouchers", "Gift vouchers, coupons and promotional cards with security features."),
      mk("Office Stationery", "Identity Cards", "Photo ID cards on PVC, with magstripe or barcode options."),
      mk("Office Stationery", "Lanyards (Ropes)", "Custom-printed lanyards in polyester, satin and woven finishes."),
      mk("Office Stationery", "Event Certificate", "Award and event certificates with foil seals and signature lines."),
    ],
  },
  {
    title: "Marketing Products",
    slug: "marketing-products",
    products: [
      mk("Marketing Products", "Flyers", "Eye-catching flyers in A4, A5 and DL sizes for promotions and events."),
      mk("Marketing Products", "Note Pads", "Custom branded notepads in glued-edge or spiral-bound formats."),
      mk("Marketing Products", "Rollup Standees", "Portable retractable banners perfect for trade shows and storefronts."),
      mk("Marketing Products", "Brochures", "Fold-out marketing brochures with high-resolution print and premium finishes."),
      mk("Marketing Products", "Flex Banners", "Large-format vinyl flex banners up to 10ft for outdoor advertising."),
      mk("Marketing Products", "Backlight Boards", "Backlit signage boards with vivid edge-to-edge illuminated graphics."),
      mk("Marketing Products", "Foam Board", "Lightweight foam-mounted prints for displays, signage and exhibitions."),
      mk("Marketing Products", "Packaging Stickers", "Custom labels and stickers for product packaging — die-cut or sheet."),
      mk("Marketing Products", "Menu Cards", "Restaurant menu cards in laminated, leather-bound and acrylic finishes."),
      mk("Marketing Products", "Stickers", "Vinyl, paper and transparent stickers in any shape or size."),
      mk("Marketing Products", "Plan Copy", "Architectural and engineering plan copies up to A0 size."),
    ],
  },
];

export const allProducts: Product[] = catalog.flatMap((c) => c.products);

export const findProduct = (slug: string): Product | undefined =>
  allProducts.find((p) => p.slug === slug);
