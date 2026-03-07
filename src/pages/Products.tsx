import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { Package } from "lucide-react";

import frozenImg from "@/assets/category-frozen.png";
import fruitsImg from "@/assets/category-fruits.png";
import olivesImg from "@/assets/category-olives.png";
import peppersImg from "@/assets/category-peppers.png";
import picklesImg from "@/assets/category-pickles.png";
import beansImg from "@/assets/category-beans.png";
import cannedImg from "@/assets/category-canned.jpg";
import readyImg from "@/assets/category-ready.jpg";

const categories = [
  {
    id: "frozen-vegetables",
    name: "Frozen Vegetables",
    image: frozenImg,
    headline: "IQF-Frozen at the Peak of Freshness — Zero Compromise on Quality",
    intro: "Our frozen vegetable line is built on one technology: IQF — Individually Quick Frozen. Unlike conventional block-freezing, IQF encases each individual piece in a shell of ice within seconds of harvest, locking in natural color, texture, and nutritional density that slower methods destroy. Every vegetable in this range is sourced directly from Al Gharbia farms, processed within hours of harvest, and frozen to a standard that top-tier food manufacturers, retailers, and catering chains demand globally.",
    products: [
      { name: "Frozen Roasted Eggplant (Whole)", desc: "Fire-roasted, skin-on, ideal for baba ghanoush and Mediterranean dips. Available whole and peeled" },
      { name: "Frozen Grilled Eggplant Slices", desc: "Char-grilled slices, ready to incorporate in mezze platters, sandwiches, and ready meals" },
      { name: "Frozen Okra (Whole & Cut)", desc: "A Gulf and Middle Eastern staple; consistent size grading, vibrant green color" },
      { name: "Frozen Green Beans (Whole & Cut)", desc: "Crisp texture, bright green, available whole, cut, and French-cut" },
      { name: "Frozen Carrots (Diced, Sliced & Julienne)", desc: "Uniform cut sizes for industrial and retail use" },
      { name: "Frozen Colored Bell Pepper (Sliced & Diced)", desc: "Red, yellow, and green; vibrant color and consistent weight" },
      { name: "Frozen Diced Onion", desc: "White and yellow onion varieties; ready-to-cook, no prep required" },
      { name: "Frozen Artichoke (Hearts, Quarters & Bottoms)", desc: "Egypt's finest artichoke, trimmed and IQF-frozen for maximum versatility" },
      { name: "Frozen Broccoli Florets", desc: "Uniform floret size, deep green color, minimum stalk" },
      { name: "Frozen Mixed Vegetables", desc: "Custom blend options available (peas, carrots, corn, green beans)" },
    ],
    packaging: "Available in 10 kg bulk cartons, 5 kg retail bags, and 400g–1 kg retail pouches. Custom private label packaging available.",
  },
  {
    id: "fruits",
    name: "Fruits",
    image: fruitsImg,
    headline: "Egypt's Sweetest Harvests — Frozen Fresh and Canned at Peak Ripeness",
    intro: "Egypt's unique climate — long sunshine hours, fertile Nile Delta soil, and optimal temperature ranges — produces fruits of exceptional sweetness and nutritional value. ALGHAITH captures this quality in two preservation formats: IQF freezing for fruits that need to retain their fresh character, and canning in light syrup for fruits where a tender, ready-to-use product is preferred. Both formats deliver the authentic flavor of Egyptian-grown fruit to any market, any season.",
    products: [
      { name: "Frozen Strawberries (Whole & Sliced)", desc: "Sourced from Al Gharbia's celebrated strawberry belt; deep red, naturally sweet, high Brix" },
      { name: "Frozen Mango Chunks", desc: "Egyptian Alphonso and Zebda varieties; golden color, intense natural sweetness, no added sugar" },
      { name: "Frozen Guava (Halves & Pulp)", desc: "Tropical variety grown in the Nile Delta; ideal for food manufacturing, juices, and purees" },
      { name: "Frozen Pomegranate Arils", desc: "Ruby red, packed with antioxidants; ready-to-use for salads, beverages, and garnishes" },
      { name: "Canned Mango Halves in Light Syrup", desc: "Sun-ripened Egyptian mangoes, peeled and halved, preserved in light syrup; premium retail and foodservice format" },
      { name: "Canned Apricot Halves in Light Syrup", desc: "Tender, golden apricot halves in natural syrup; a staple for desserts, pastries, and breakfast products" },
      { name: "Canned Pear Halves in Light Syrup", desc: "Smooth, buttery pear halves preserved in light syrup; ideal for desserts and fruit salads" },
      { name: "Canned Figs in Syrup", desc: "Whole and halved Egyptian figs in light syrup; a premium product for European and specialty food markets" },
      { name: "Canned Fruit Salad", desc: "A vibrant mix of seasonal Egyptian fruits in light syrup; ready-to-serve retail and catering format" },
    ],
    packaging: "Frozen fruits: 10 kg bulk cartons and 400g–1 kg retail. Canned fruits: 400g retail cans, A9 catering cans. Private label available in all formats.",
  },
  {
    id: "olives",
    name: "Olives",
    image: olivesImg,
    headline: "Premium Egyptian Olives — Marinated, Preserved, and Ready for the World",
    intro: "Egypt has one of the oldest olive cultivation traditions in the Mediterranean world. The rich soils of the Delta and Upper Egypt produce olives of exceptional oil content and flavor depth. At ALGHAITH, we source from carefully selected Egyptian olive farms to produce a premium range of canned and jarred olives that meet the highest standards demanded by international retailers, food manufacturers, and specialty importers. Every olive we process is selected for consistent size, color uniformity, and flavor profile before being marinated or brined and sealed for export.",
    products: [
      { name: "Sliced Black Olives in Brine", desc: "Classic black olives, uniformly sliced, packed in natural brine. The most requested olive product for pizza manufacturers, salad bar operators, and retail chains" },
      { name: "Whole Black Olives in Brine", desc: "Naturally ripened black olives, pitted or unpitted, preserved in brine. Available in multiple size grades (Colossal to Medium)" },
      { name: "Green Olives Whole in Brine", desc: "Firm green olives harvested before full ripening; mild, slightly tangy flavor. Available pitted or unpitted" },
      { name: "Green Olives Stuffed with Red Pepper", desc: "A premium retail and food service product; green olives filled with pimento pepper" },
      { name: "Pitted Green Olives", desc: "De-stoned green olives in brine; ideal for cooking, charcuterie boards, and industrial food applications" },
      { name: "Marinated Black Olives in Sunflower Oil with Herbs", desc: "Premium olives marinated in oil with Mediterranean herbs; a gourmet retail product for European and North American specialty markets" },
      { name: "Kalamata-Style Olives in Brine & Vinegar", desc: "Dark purple, almond-shaped; a specialty product for Mediterranean food importers" },
    ],
    packaging: "Available in glass jars (180ml, 370ml, 720ml), retail cans (400g), and bulk catering cans (A9/A10). Private label available.",
  },
  {
    id: "peppers",
    name: "Peppers",
    image: peppersImg,
    headline: "From Sweet to Fiery — Egypt's Finest Preserved Peppers",
    intro: "Pepper cultivation is a major agricultural industry in Egypt, with Al Gharbia producing some of the country's highest-grade bell peppers, chili peppers, and sweet capsicum varieties. ALGHAITH's pepper range spans the full flavor spectrum — from mildly sweet fire-roasted capsicum to intensely spiced jalapeños — preserved in brine, sunflower oil, or vinegar to suit diverse international market preferences. Our roasted pepper products, in particular, have become a flagship export category, prized by European deli chains and Mediterranean specialty importers.",
    products: [
      { name: "Roasted Capsicum (Bell Pepper) in Brine & Sunflower Oil", desc: "Whole red capsicum, flame-roasted, peeled, and preserved. Rich smoky flavor, deep red color; a premium product for European gourmet retail and foodservice" },
      { name: "Roasted Green Chili Pepper in Sunflower Oil", desc: "Whole green chili peppers, fire-roasted and preserved in premium sunflower oil; popular in Middle Eastern and Mediterranean markets" },
      { name: "Roasted Green Chili Pepper in Brine", desc: "Oil-free version of the above; clean brine preservation for calorie-conscious and manufacturing segments" },
      { name: "Roasted Peeled Pepper in Brine (Assorted Colors)", desc: "Red, yellow, and green roasted peppers, peeled and packed in brine; a versatile product for antipasto, pizza toppings, and ready meals" },
      { name: "Pickled Jalapeño Slices", desc: "Premium quality jalapeño, uniform heat level, in seasoned brine; a top-selling product for pizza chains, fast food, and retail" },
      { name: "Pickled Jalapeño Whole", desc: "Whole jalapeño peppers preserved in brine; ideal for specialty retailers and food manufacturers" },
      { name: "Pickled Banana Peppers", desc: "Mild, sweet banana peppers in vinegar brine; popular in European and American markets for sandwich and pizza use" },
      { name: "Pickled Mexican Peppers (Nacho Peppers)", desc: "Classic sliced mixed peppers in vinegar brine; the standard topping for Tex-Mex and fast food chains" },
      { name: "Pickled Lombardi Peppers", desc: "Long mild peppers in natural brine; a traditional Middle Eastern pickling staple" },
    ],
    packaging: "Available in glass jars (370ml, 720ml), retail cans (400g), and bulk catering cans. Private label available.",
  },
  {
    id: "pickles",
    name: "Pickles",
    image: picklesImg,
    headline: "Traditional Flavors, International Quality — Egypt's Finest Preserved Vegetables",
    intro: "Pickling is one of the oldest food preservation traditions in Egypt, and ALGHAITH has elevated this craft to an industrial scale without sacrificing the authentic character that consumers love. Our pickled vegetable range uses food-grade brine solutions, natural vinegar, and traditional Egyptian recipes to produce products with the sharp, satisfying flavor that Middle Eastern, European, and North American consumers recognize and trust. All products are manufactured in our dedicated pickling facility under strictly controlled hygiene and food safety conditions.",
    products: [
      { name: "Pickled Cucumber (Gherkins)", desc: "Classic crisp cucumber pickles in seasoned brine; available whole, sliced, and quartered spears. Egypt's most exported pickle product" },
      { name: "Pickled Turnip (Lift)", desc: "The vibrant pink mezze staple, naturally colored with beets; a must-have for Middle Eastern and Arabic diaspora markets" },
      { name: "Pickled Lupine Beans (Termis)", desc: "Preserved lupini beans in seasoned brine; a popular street food snack across Egypt, the Levant, and North Africa" },
      { name: "Pickled Chickpeas", desc: "Whole cooked chickpeas preserved in tangy brine; a protein-rich snack and mezze item" },
      { name: "Preserved Vine Leaves in Brine", desc: "Tender grape leaves preserved in brine, ready for rolling; a key ingredient for Mahshi preparation at home and in foodservice" },
      { name: "Pickled Mixed Vegetables", desc: "A colorful assortment of pickled cauliflower, carrot, green pepper, and celery in brine; a popular retail item for supermarkets in Gulf and European markets" },
      { name: "Pickled Olives in Brine (Green & Black)", desc: "Traditional brine-cured olives; an everyday staple for Egyptian and Middle Eastern breakfast tables" },
    ],
    packaging: "Available in glass jars (500ml, 720ml, 1L, 2L) and retail cans (400g). Private label available in all formats.",
  },
  {
    id: "beans",
    name: "Beans & Legumes",
    image: beansImg,
    headline: "Everyday Staples — Premium Canned Legumes Ready for Any Market",
    intro: "Legumes are the cornerstone of diets across the Middle East, Mediterranean, and beyond. ALGHAITH's canned legume range brings the rich nutritional value and authentic taste of Egypt's finest pulses to your customers in convenient, ready-to-use formats — cooked, seasoned where applicable, and sealed for maximum shelf life. Our canned legumes are consistently one of our top-selling export categories, particularly in Gulf supermarkets, Egyptian diaspora retail, and health-focused food chains globally.",
    products: [
      { name: "Canned Fava Beans — Plain (Ful Medames)", desc: "Egypt's national dish in a can. Cooked fava beans in natural brine, ready to season and serve. The single most recognizable Egyptian food product for international markets" },
      { name: "Canned Fava Beans — Seasoned (Ful Medames with Oil & Spices)", desc: "Pre-seasoned with premium Egyptian sunflower oil, cumin, and lemon; a ready-to-heat product for retail and foodservice convenience" },
      { name: "Canned Chickpeas (Hummus Maslouk)", desc: "Premium whole chickpeas in natural brine; ready for hummus, salads, curries, and stews" },
      { name: "Canned White Beans in Brine", desc: "Soft white haricot beans in natural brine; a versatile ingredient for soups, stews, and salads" },
      { name: "Canned White Beans in Red Sauce (Fasolea)", desc: "Tender white beans in rich seasoned tomato sauce; a ready-to-eat product popular in Gulf and North African markets" },
      { name: "Canned Sweet Corn (Whole Kernel)", desc: "Tender, naturally sweet corn kernels in brine; vibrant yellow, consistent sweetness" },
      { name: "Canned Lupin Beans (Termis)", desc: "A popular Egyptian snack, preserved in brine; increasingly popular as a high-protein snack in European health food markets" },
      { name: "Canned Green Peas in Brine", desc: "Whole tender green peas; ideal for salads, side dishes, and industrial food manufacturing" },
    ],
    packaging: "Available in 400g retail cans, A9 catering cans (2.65 kg), and A10 bulk industrial cans (3 kg). Private label available.",
  },
  {
    id: "canned-vegetables",
    name: "Canned Vegetables",
    image: cannedImg,
    headline: "Egypt's Farm-Fresh Vegetables — Sealed and Preserved at Their Best",
    intro: "ALGHAITH's canned vegetable range captures the natural quality of Egyptian farm produce at its peak and delivers it to your market in a shelf-stable, convenient format. From our signature artichoke products — for which Egypt is globally recognized — to the versatile canned tomato range that underpins so much of the world's cooking, every product is processed under the strictest food safety standards to guarantee consistent quality in every can.",
    products: [
      { name: "Canned Artichoke Hearts in Brine", desc: "Tender artichoke hearts, trimmed and preserved in natural brine. A versatile premium ingredient for salads, pasta, pizza, and dips" },
      { name: "Canned Artichoke Quarters in Brine", desc: "Ready-to-use quartered artichoke in brine; perfect for industrial food manufacturing, catering, and antipasto products" },
      { name: "Canned Artichoke Bottoms (Tablets) in Brine", desc: "The prized heart of the artichoke, sliced into discs; a premium product for gourmet food manufacturers and European specialty importers" },
      { name: "Roasted Artichokes in Sunflower Oil with Spices (Roman Style)", desc: "Flame-grilled artichoke hearts marinated in oil with garlic, herbs, and spices; a ready-to-eat gourmet product for European premium retail" },
      { name: "Canned Whole Peeled Tomatoes", desc: "Selected Roma-type tomatoes, peeled and preserved in natural tomato juice. Egypt's most exported canned vegetable product" },
      { name: "Canned Diced Tomatoes", desc: "Pre-cut uniform tomato pieces in natural juice; ideal for industrial cooking, ready meal production, and foodservice" },
      { name: "Canned Crushed Tomatoes", desc: "Smooth, concentrated crushed tomatoes in natural juice; a versatile base for sauces, soups, and condiments" },
      { name: "Canned Mushrooms (Whole & Sliced)", desc: "Premium mushrooms preserved in brine; a food service and retail staple" },
      { name: "Canned Sweet Potato", desc: "Egyptian sweet potato, cooked and preserved; ready for purees, pies, and baby food manufacturing" },
      { name: "Canned Eggplant (Roasted)", desc: "Flame-roasted eggplant puree in cans; the perfect base for baba ghanoush and Mediterranean dips" },
    ],
    packaging: "Available in 400g retail cans, A9 catering cans, and A10 bulk cans. Customized cuts (diced, sliced, crushed) available upon request.",
  },
  {
    id: "ready-to-eat",
    name: "Ready to Eat",
    image: readyImg,
    headline: "Authentic Egyptian Mahshi — Ready to Serve",
    intro: "Our Ready-to-Eat line revolutionizes traditional Egyptian cuisine for the modern consumer. We have mastered the art of producing authentic Egyptian Mahshi (stuffed vegetables) at an industrial scale without compromising on the homemade quality, complex spices, and traditional taste that make these dishes famous. Our stuffed vegetables are cooked, preserved, and sealed to offer consumers the ultimate convenience: a traditional meal that simply needs to be heated and served.",
    products: [
      { name: "Stuffed Grape Leaves (Warak Enab)", desc: "Premium vine leaves stuffed with a traditional Egyptian rice and herb mixture (dill, parsley, coriander). Cooked and preserved in light brine and olive oil. Our flagship ready-to-eat product" },
      { name: "Stuffed Zucchini (Kousa Mahshi)", desc: "Tender Egyptian zucchini, center-cored and stuffed with our signature seasoned rice blend. Cooked perfectly to maintain structure while remaining soft" },
      { name: "Stuffed Bell Peppers", desc: "Sweet bell peppers loaded with seasoned rice; a colorful and flavorful traditional dish" },
      { name: "Stuffed Eggplant (Batingan Mahshi)", desc: "Small, tender eggplants (black or white varieties) stuffed with rice and spices. A challenging product to preserve, perfected by ALGHAITH" },
      { name: "Stuffed Cabbage Rolls (Malfouf)", desc: "Soft cabbage leaves wrapped around our seasoned rice mix, slow-cooked to perfection" },
      { name: "Stuffed Vine Leaves — Premium with Lemon & Olive Oil", desc: "A gourmet line specifically tailored for European and Levantine markets, featuring extra virgin olive oil and a prominent lemon profile" },
    ],
    packaging: "Available in 400g and 800g retail cans (easy-open ends), and 2 kg catering cans. Products can be tailored to specific regional taste profiles (from mild to spicy, Egyptian vs. Levantine style).",
  },
];

const Products = () => {
  const [active, setActive] = useState("frozen-vegetables");
  const contentRef = useRef<HTMLDivElement>(null);
  const activeCat = categories.find((c) => c.id === active)!;

  const handleCategoryChange = (id: string) => {
    setActive(id);
    // On mobile, scroll content into view smoothly
    if (window.innerWidth < 1024 && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <PageHero
          title="Our Products"
          subtitle="Eight Categories of Excellence — All Rooted in Egypt's Finest Soil"
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16 px-4 py-8 bg-section-alt rounded-2xl border border-border shadow-sm text-center">
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                At ALGHAITH Factory, our product range is designed to cover every segment of the global market for preserved and processed Egyptian produce. From individually quick-frozen vegetables to premium canned fruits, marinated olives to ready-to-eat stuffed dishes — every product we make starts with the same ingredient: the best raw materials Egypt has to offer.
              </p>
              <div className="h-px w-24 bg-primary/20 mx-auto my-6" />
              <p className="text-muted-foreground text-sm">
                All products are available under the ALGHAITH brand or as private label. Packaging formats range from 400g retail units to bulk industrial cans and cartons.
              </p>
            </div>

            {/* ─── Mobile sticky tab bar ─── */}
            <div className="lg:hidden sticky top-20 z-30 -mx-6 px-4 py-3 bg-background/95 backdrop-blur border-b border-border mb-8 overflow-x-auto">
              <div className="flex gap-2 w-max">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${active === cat.id
                        ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md"
                        : "bg-section-alt text-foreground border border-border"
                      }`}
                  >
                    <img src={cat.image} alt={cat.name} className="w-5 h-5 rounded-full object-cover" />
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* ─── Desktop: sidebar + content ─── */}
            <div className="flex gap-8 items-start">
              {/* Sticky Sidebar — desktop only */}
              <aside className="hidden lg:block w-64 shrink-0 sticky top-28 self-start">
                <div className="bg-white border border-border rounded-2xl p-3 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-3 pt-2 pb-3">Categories</p>
                  <div className="flex flex-col gap-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActive(cat.id)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-left transition-all duration-200 ${active === cat.id
                            ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-sm"
                            : "text-foreground hover:bg-section-alt"
                          }`}
                      >
                        <img src={cat.image} alt={cat.name} className="w-8 h-8 rounded-lg object-cover shrink-0" />
                        <span className="leading-tight">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Content */}
              <div ref={contentRef} className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="bg-white rounded-[32px] border border-border shadow-sm overflow-hidden">
                      {/* Banner Image */}
                      <div className="w-full h-44 md:h-56 lg:h-64 relative overflow-hidden">
                        <img src={activeCat.image} alt={activeCat.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex items-end px-6 md:px-10 pb-5 md:pb-7">
                          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground drop-shadow-sm">
                            {activeCat.name}
                          </h2>
                        </div>
                      </div>

                      <div className="px-6 md:px-10 pb-8 md:pb-10 pt-4">
                        <h3 className="font-display text-lg md:text-xl font-bold text-primary mb-4 mt-2">
                          {activeCat.headline}
                        </h3>

                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 font-medium">
                          {activeCat.intro}
                        </p>

                        {/* Product list */}
                        <div className="space-y-6">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-3 gap-3">
                            <h4 className="font-display text-xl font-bold text-foreground">Product Range</h4>
                            <span className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold border border-primary/20 self-start sm:self-auto">
                              {activeCat.products.length} Items Available
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {activeCat.products.map((p, idx) => (
                              <div
                                key={idx}
                                className="group bg-background border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                              >
                                <h5 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors flex items-start gap-3">
                                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                                  {p.name}
                                </h5>
                                <p className="text-muted-foreground text-sm leading-relaxed ml-5 font-medium border-l-2 border-border group-hover:border-primary/30 transition-colors pl-4 py-0.5">
                                  {p.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Packaging */}
                        <div className="mt-10 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-5 md:p-7 flex flex-col sm:flex-row items-start gap-5 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 pointer-events-none" />
                          <div className="bg-white p-3 rounded-xl shrink-0 shadow-sm border border-border relative z-10">
                            <Package className="w-6 h-6 text-primary" />
                          </div>
                          <div className="relative z-10">
                            <h4 className="font-bold text-foreground text-base mb-1.5">Packaging Options</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                              {activeCat.packaging}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
