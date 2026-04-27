import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { ChevronRight, CreditCard, Gift, Heart, RotateCcw } from "lucide-react";
import { findProduct, allProducts } from "@/data/catalog";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import placeholder from "@/assets/product-placeholder.jpg";
import { getProductImage } from "@/data/productImages";

const NotFoundCard = () => (
  <div className="container py-32 text-center">
    <h1 className="font-display text-5xl font-black mb-4">Product not found</h1>
    <p className="text-muted-foreground mb-8">This item isn't in our catalog.</p>
    <Link to="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm uppercase text-sm font-semibold tracking-wider hover:bg-primary-glow transition-colors">
      Back home
    </Link>
  </div>
);

const Product = () => {
  const { slug = "" } = useParams();
  const product = useMemo(() => findProduct(slug), [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    if (product) {
      document.title = `${product.name} — SRM Art Prints`;
    }
  }, [product]);

  const main = product ? getProductImage(product.slug) : placeholder;
  const thumbs = useMemo(() => [main, placeholder, main], [main]);
  const [active, setActive] = useState<string>(main);
  useEffect(() => setActive(main), [main]);

  const related = useMemo(() => {
    if (!product) return [];
    return allProducts
      .filter((p) => p.category === product.category && p.slug !== product.slug)
      .slice(0, 4);
  }, [product]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        {!product ? (
          <NotFoundCard />
        ) : (
          <>
            {/* Breadcrumbs */}
            <div className="container pt-8 md:pt-10">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>{product.category}</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-foreground font-medium">{product.name}</span>
              </nav>
            </div>

            {/* Product detail */}
            <section className="container py-10 md:py-16">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Gallery */}
                <div>
                  <div className="relative aspect-square bg-card rounded-sm overflow-hidden shadow-soft border border-border">
                    {product.isNew && (
                      <span className="absolute top-4 left-4 z-10 bg-background text-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm">
                        New
                      </span>
                    )}
                    <img
                      src={active}
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {thumbs.map((t, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActive(t)}
                        className={`aspect-square overflow-hidden rounded-sm bg-card transition-all ${
                          active === t ? "ring-2 ring-primary" : "ring-1 ring-border hover:ring-primary/50"
                        }`}
                      >
                        <img src={t} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h1 className="font-display text-4xl md:text-5xl font-black leading-tight">
                    {product.name}
                  </h1>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-8 h-px bg-border" />

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={`https://wa.me/919094569498?text=${encodeURIComponent(`Hi SRM Art Prints, I'd like a quote for ${product.name}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-sm font-semibold uppercase tracking-wider text-sm transition-colors duration-300"
                    >
                      Request A Quote
                    </a>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Heart className="h-5 w-5" />
                      <span className="text-sm font-medium">Add to wishlist</span>
                    </button>
                  </div>

                  <div className="mt-8 h-px bg-border" />

                  {/* Trust badges */}
                  <div className="mt-8 grid grid-cols-3 gap-4 border border-border rounded-sm p-6 bg-card/60">
                    <Badge icon={CreditCard} label="Convenient Payment" />
                    <Badge icon={Gift} label="Free Discount Code" />
                    <Badge icon={RotateCcw} label="7-Day Return" />
                  </div>

                  <div className="mt-8 flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-semibold">{product.category}</span>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <PaymentIcons />
                    </div>
                    <p className="text-sm font-semibold">10% off when paying by credit card</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Related */}
            {related.length > 0 && (
              <section className="bg-secondary py-20">
                <div className="container">
                  <h2 className="font-display text-3xl md:text-4xl font-black mb-10">
                    More in <em className="italic font-medium text-primary">{product.category}</em>
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        to={`/product/${r.slug}`}
                        className="group bg-background border border-border rounded-sm overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
                      >
                        <div className="aspect-[4/5] overflow-hidden bg-muted">
                          <img
                            src={getProductImage(r.slug)}
                            alt={r.name}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-display text-lg font-bold leading-tight">{r.name}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

const Badge = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex flex-col items-center text-center gap-2">
    <Icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
    <span className="text-xs font-semibold uppercase tracking-wider leading-tight">{label}</span>
  </div>
);

const PaymentIcons = () => (
  <div className="flex items-center gap-2">
    {["PayPal", "MC", "VISA", "AMEX"].map((p) => (
      <span
        key={p}
        className="px-2.5 py-1 text-[10px] font-bold tracking-wider bg-primary text-primary-foreground rounded-sm"
      >
        {p}
      </span>
    ))}
  </div>
);

export default Product;
