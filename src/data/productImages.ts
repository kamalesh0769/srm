// Maps catalog product slugs to imported product image assets.
// Anything not in this map falls back to the placeholder.

import placeholder from "@/assets/product-placeholder.jpg";

import acrylicWeddingInvitationCards from "@/assets/products/acrylic-wedding-invitation-cards.jpg";
import babyShowerInvite from "@/assets/products/baby-shower-invite.jpg";
import birthdayInvite from "@/assets/products/birthday-invite.jpg";
import christianWeddings from "@/assets/products/christian-weddings.jpg";
import hinduWedding from "@/assets/products/hindu-wedding.jpg";
import houseWarmingInvite from "@/assets/products/house-warming-invite.jpg";
import interfaithWeddingInvitations from "@/assets/products/interfaith-wedding-invitations.jpg";
import invitationCards from "@/assets/products/invitation-cards.jpg";
import laserCutWeddingCards from "@/assets/products/laser-cut-wedding-cards.jpg";
import muslimCards from "@/assets/products/muslim-cards.jpg";
import paddedInvitations from "@/assets/products/padded-invitations.jpg";
import personalInvitationCards from "@/assets/products/personal-invitation-cards.jpg";
import pubertyInvitation from "@/assets/products/puberty-invitation.jpg";
import scrollWeddingInvitationCards from "@/assets/products/scroll-wedding-invitation-cards.jpg";
import tracingSheetInvitationCards from "@/assets/products/tracing-sheet-invitation-cards.jpg";
import weddingCards from "@/assets/products/wedding-cards.jpg";

import standardVisitingCards from "@/assets/products/standard-visiting-cards.jpg";
import texturedVisitingCards from "@/assets/products/textured-visiting-cards.jpg";
import diecutVisitingCards from "@/assets/products/diecut-visiting-cards.jpg";
import laminatedVisitingCards from "@/assets/products/laminated-visiting-cards.jpg";
import syntheticVisitingCards from "@/assets/products/synthetic-visiting-cards.jpg";
import cornerCutVisitingCards from "@/assets/products/corner-cut-visiting-cards.jpg";
import squareVisitingCards from "@/assets/products/square-visiting-cards.jpg";
import goldFoilVisitingCard from "@/assets/products/gold-foil-visiting-card.jpg";
import roundCornerCards from "@/assets/products/round-corner-cards.jpg";

import envelopes from "@/assets/products/envelopes.jpg";
import brochures from "@/assets/products/brochures.jpg";
import catalogues from "@/assets/products/catalogues.jpg";
import letterHead from "@/assets/products/letter-head.jpg";
import selfInkSeals from "@/assets/products/self-ink-seals.jpg";
import billBooks from "@/assets/products/bill-books.jpg";
import vouchers from "@/assets/products/vouchers.jpg";
import identityCards from "@/assets/products/identity-cards.jpg";
import lanyardsRopes from "@/assets/products/lanyards-ropes.jpg";
import eventCertificate from "@/assets/products/event-certificate.jpg";

import flyers from "@/assets/products/flyers.jpg";
import notePads from "@/assets/products/note-pads.jpg";
import rollupStandees from "@/assets/products/rollup-standees.jpg";
import brochuresMarketing from "@/assets/products/brochures-marketing.jpg";
import flexBanners from "@/assets/products/flex-banners.jpg";
import backlightBoards from "@/assets/products/backlight-boards.jpg";
import foamBoard from "@/assets/products/foam-board.jpg";
import packagingStickers from "@/assets/products/packaging-stickers.jpg";
import menuCards from "@/assets/products/menu-cards.jpg";
import stickers from "@/assets/products/stickers.jpg";
import planCopy from "@/assets/products/plan-copy.jpg";

const map: Record<string, string> = {
  // Invitations
  "acrylic-wedding-invitation-cards": acrylicWeddingInvitationCards,
  "baby-shower-invite": babyShowerInvite,
  "birthday-invite": birthdayInvite,
  "christian-weddings": christianWeddings,
  "hindu-wedding": hinduWedding,
  "house-warming-invite": houseWarmingInvite,
  "interfaith-wedding-invitations": interfaithWeddingInvitations,
  "invitation-cards": invitationCards,
  "laser-cut-wedding-cards": laserCutWeddingCards,
  "muslim-cards": muslimCards,
  "padded-invitations": paddedInvitations,
  "personal-invitation-cards": personalInvitationCards,
  "puberty-invitation": pubertyInvitation,
  "scroll-wedding-invitation-cards": scrollWeddingInvitationCards,
  "tracing-sheet-invitation-cards": tracingSheetInvitationCards,
  "wedding-cards": weddingCards,
  // Visiting Cards
  "standard-visiting-cards": standardVisitingCards,
  "textured-visiting-cards": texturedVisitingCards,
  "diecut-visiting-cards": diecutVisitingCards,
  "laminated-visiting-cards": laminatedVisitingCards,
  "synthetic-visiting-cards": syntheticVisitingCards,
  "corner-cut-visiting-cards": cornerCutVisitingCards,
  "square-visiting-cards": squareVisitingCards,
  "gold-foil-visiting-card": goldFoilVisitingCard,
  "circle-visiting-card": roundCornerCards,
  "round-corner-cards": roundCornerCards,
  // Office Stationery
  "envelopes": envelopes,
  "brochures": brochures,
  "catalogues": catalogues,
  "letter-head": letterHead,
  "self-ink-seals": selfInkSeals,
  "bill-books": billBooks,
  "vouchers": vouchers,
  "identity-cards": identityCards,
  "lanyards-ropes": lanyardsRopes,
  "event-certificate": eventCertificate,
  // Marketing Products — note: "Brochures" appears in two categories; both slugs collide so use unique fallbacks.
  "flyers": flyers,
  "note-pads": notePads,
  "rollup-standees": rollupStandees,
  "brochures-marketing": brochuresMarketing,
  "flex-banners": flexBanners,
  "backlight-boards": backlightBoards,
  "foam-board": foamBoard,
  "packaging-stickers": packagingStickers,
  "menu-cards": menuCards,
  "stickers": stickers,
  "plan-copy": planCopy,
};

export const getProductImage = (slug: string): string => map[slug] ?? placeholder;
