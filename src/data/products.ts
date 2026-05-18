// Full La Party product catalog — 49 specification-grade bag products
// kind values drive the SVG illustration in ProductArt:
//   flat | tshirt | mailer | specimen | zipper | security | gusseted | antistatic

export interface Product {
  name: string
  cat: string
  kind: string
  tags: string[]
  desc: string
  bullets: string[]
}

const PRODUCTS: Product[] = [
  // ─── Food Service ─────────────────────────────────────────────
  { name: "T-Shirt Bag", cat: "Food Service", kind: "tshirt",
    tags: ["Best seller"],
    desc: "Classic T-shirt carry bag for retail checkout and general merchandise. High-density T-shirt style handle bags, economical and reusable.",
    bullets: ["Available in many sizes", "Custom printing available"] },

  { name: "Die-Cut Bag", cat: "Food Service", kind: "tshirt",
    tags: [],
    desc: "Retail carry bag with die-cut handle for merchandise, promotions, or takeaway use. Reinforced two-ply die-cut handle for strength.",
    bullets: ["Custom printing available"] },

  { name: "Soft-Loop Handle Bag", cat: "Food Service", kind: "tshirt",
    tags: ["Retail"],
    desc: "Soft-loop handle retail bag for shopping, branding, and takeaway. Gusseted with soft, flexible handles and cardboard bottom.",
    bullets: ["100% virgin polyethylene film", "Custom printing available"] },

  { name: "Rigid-Loop Handle Bag", cat: "Food Service", kind: "tshirt",
    tags: ["Premium"],
    desc: "Premium shopping bag with rigid loop handles for retail presentation. Plastic handles feature a comfortable grip and withstand overstuffing.",
    bullets: ["Strong and reusable"] },

  { name: "Sinewave Bag", cat: "Food Service", kind: "tshirt",
    tags: [],
    desc: "Wave-cut decorative carry bag with large bottom gusset that allows bag to stand alone — accommodates a variety of food container sizes.",
    bullets: ["High-density film for strength", "Better printing surface than paper", "Custom printing available"] },

  { name: "PP Woven Bag", cat: "Food Service", kind: "flat",
    tags: ["Heavy-duty"],
    desc: "Woven polypropylene bag for carrying, storing, or packaging heavier goods.",
    bullets: [] },

  { name: "PP Non-Woven Bag", cat: "Food Service", kind: "flat",
    tags: ["Reusable"],
    desc: "Reusable polypropylene non-woven bag for shopping, carrying, or promotional use.",
    bullets: [] },

  { name: "Bakery Bag", cat: "Food Service", kind: "flat",
    tags: [],
    desc: "Plastic bag for bakery items such as bread, pastries, and other baked goods.",
    bullets: [] },

  { name: "Produce Roll", cat: "Food Service", kind: "flat",
    tags: [],
    desc: "Roll-form produce bag for fruits, vegetables, and other fresh items.",
    bullets: [] },

  { name: "Ice Bag", cat: "Food Service", kind: "flat",
    tags: [],
    desc: "Plastic bag for holding, storing, or transporting ice.",
    bullets: [] },

  { name: "Portion Bag", cat: "Food Service", kind: "flat",
    tags: [],
    desc: "Small plastic bag for portioning, packing, or separating food items.",
    bullets: [] },

  { name: "Corn Bag", cat: "Food Service", kind: "flat",
    tags: [],
    desc: "Plastic bag for packaging and carrying corn or similar food items.",
    bullets: [] },

  { name: "Silverware Bag", cat: "Food Service", kind: "flat",
    tags: [],
    desc: "Plastic bag for packing, protecting, or distributing silverware and utensils.",
    bullets: [] },

  { name: "Slider Bag", cat: "Food Service", kind: "zipper",
    tags: ["Resealable"],
    desc: "Resealable plastic bag with a slider closure for convenient opening and closing.",
    bullets: [] },

  { name: "Apron", cat: "Food Service", kind: "flat",
    tags: ["Disposable"],
    desc: "Disposable plastic apron for hygiene and splash protection in food or care settings. Inexpensive, ambidextrous and disposable.",
    bullets: [] },

  { name: "Plastic PE Gloves", cat: "Food Service", kind: "flat",
    tags: ["Disposable"],
    desc: "Disposable plastic gloves for food handling, hygiene, and light-duty protection. Ambidextrous and inexpensive.",
    bullets: [] },

  { name: "Table Cloth", cat: "Food Service", kind: "flat",
    tags: [],
    desc: "Plastic table cloth for covering and protecting tables during food service or events.",
    bullets: [] },

  // ─── Healthcare ────────────────────────────────────────────────
  { name: "Specimen Bag W/Pad", cat: "Healthcare", kind: "specimen",
    tags: ["Hot product"],
    desc: "Specimen bag with absorbent pad for handling and transporting medical samples.",
    bullets: [] },

  { name: "Specimen Bag W/Sequential Bar Code", cat: "Healthcare", kind: "specimen",
    tags: ["Traceable"],
    desc: "Specimen bag with sequential bar code for sample identification and tracking.",
    bullets: [] },

  { name: "Specimen Bag W/String", cat: "Healthcare", kind: "specimen",
    tags: [],
    desc: "Specimen bag with string closure for collecting and transporting samples.",
    bullets: [] },

  { name: "Biohazard Liner", cat: "Healthcare", kind: "flat",
    tags: ["Regulated"],
    desc: "Biohazard waste liner for regulated medical disposal and contamination control. Printed warnings identify hazardous or contaminated contents.",
    bullets: ["Several message options available", "Strong bottom seal"] },

  { name: "Chemotherapy Bag", cat: "Healthcare", kind: "flat",
    tags: ["On request"],
    desc: "Chemotherapy waste bag for handling and disposal of cytotoxic materials in oncology and pharmacy settings.",
    bullets: [] },

  { name: "Pill Crusher Bag", cat: "Healthcare", kind: "flat",
    tags: [],
    desc: "Specialty bag for pill crushing and medication prep in care environments. Crush pills into powder while eliminating cross contamination.",
    bullets: [] },

  { name: "Patient Belonging Bag — Cotton String", cat: "Healthcare", kind: "gusseted",
    tags: [],
    desc: "Patient belonging bag with cotton string closure for storing personal items.",
    bullets: [] },

  { name: "Patient Belonging Bag — Rigid Handle", cat: "Healthcare", kind: "tshirt",
    tags: [],
    desc: "Patient belonging bag with rigid handle for carrying and storing personal items.",
    bullets: [] },

  { name: "Self-Adhesive Bag", cat: "Healthcare", kind: "flat",
    tags: [],
    desc: "Self-adhesive plastic bag for sealing and holding items securely.",
    bullets: [] },

  // ─── Industrial ───────────────────────────────────────────────
  { name: "Flat Poly Bag", cat: "Industrial", kind: "flat",
    tags: ["Best seller"],
    desc: "Flat polyethylene bag for general packaging, storage, or product protection.",
    bullets: [] },

  { name: "Anti-Static Bag", cat: "Industrial", kind: "antistatic",
    tags: ["ESD-safe"],
    desc: "Anti-static bag for protecting sensitive electronic components from static discharge.",
    bullets: [] },

  { name: "Amber Bag", cat: "Industrial", kind: "antistatic",
    tags: ["UV-protective"],
    desc: "Amber-tinted poly bag providing UV protection for light-sensitive components, pharmaceuticals, and chemicals.",
    bullets: [] },

  { name: "Gusseted Poly Bag", cat: "Industrial", kind: "gusseted",
    tags: [],
    desc: "Gusseted polyethylene bag that expands to hold bulkier items.",
    bullets: [] },

  { name: "Zipper Bag", cat: "Industrial", kind: "zipper",
    tags: ["Resealable"],
    desc: "Resealable zipper bag for storage, organization, or packaging.",
    bullets: [] },

  { name: "Parts Bag", cat: "Industrial", kind: "flat",
    tags: ["Write-on"],
    desc: "Utility packaging bag for organizing, storing, and shipping small parts. Recommended for auto parts, machinery, electrical panels, printing plates and tools.",
    bullets: ["100% virgin polyethylene film", "White block area for marker / pen", "Custom printing available"] },

  { name: "Pre-Open Bag", cat: "Industrial", kind: "flat",
    tags: ["Auto-pack"],
    desc: "Pre-opened bag format for fast manual or automated packing operations. Pre-opened and perforated bags on a roll.",
    bullets: ["Low-density poly", "Strength at lower gauge"] },

  { name: "Tubing Bag", cat: "Industrial", kind: "flat",
    tags: ["Custom-length"],
    desc: "Poly tubing format used to create custom-length bags for packaging products.",
    bullets: [] },

  { name: "Vacuum Bag", cat: "Industrial", kind: "flat",
    tags: [],
    desc: "Vacuum packaging bag for sealing and preserving stored items.",
    bullets: [] },

  { name: "Plastic Sheet", cat: "Industrial", kind: "flat",
    tags: [],
    desc: "Plastic sheet material for covering, protecting, or separating surfaces and products.",
    bullets: [] },

  { name: "Colored Poly Bag", cat: "Industrial", kind: "flat",
    tags: [],
    desc: "Colored polyethylene bag for packaging, sorting, or product presentation.",
    bullets: [] },

  { name: "Garbage Bag", cat: "Industrial", kind: "flat",
    tags: [],
    desc: "Plastic garbage bag for waste collection and disposal.",
    bullets: [] },

  { name: "Garment Bag", cat: "Industrial", kind: "flat",
    tags: [],
    desc: "Plastic garment bag for covering, storing, or protecting clothing.",
    bullets: [] },

  { name: "Mattress Bag", cat: "Industrial", kind: "flat",
    tags: [],
    desc: "Protective plastic bag for covering, storing, or transporting mattresses.",
    bullets: [] },

  { name: "Newspaper Bag", cat: "Industrial", kind: "flat",
    tags: [],
    desc: "Poly bag for newspaper delivery, print distribution, and moisture protection. Protect newspapers from dirt and moisture.",
    bullets: ["Custom printing available"] },

  { name: "Doggy Bag", cat: "Industrial", kind: "flat",
    tags: [],
    desc: "Plastic bag for carrying takeaway food or leftovers.",
    bullets: [] },

  { name: "Packing List Envelope", cat: "Industrial", kind: "mailer",
    tags: ["Logistics"],
    desc: "Packing list envelope for attaching invoices, packing slips, or shipping documents to cartons.",
    bullets: [] },

  // ─── Mailers ──────────────────────────────────────────────────
  { name: "Coex Mailer Bag", cat: "Mailers", kind: "mailer",
    tags: ["Hot product", "E-commerce"],
    desc: "Co-extruded mailer bag for shipping and protecting parcels in transit. Multi-layer construction for tear and puncture resistance.",
    bullets: [] },

  { name: "Bubble Mailer Bag — Poly Envelope", cat: "Mailers", kind: "mailer",
    tags: ["Cushioned"],
    desc: "Poly bubble mailer for cushioned shipping of small products. Water-resistant outer with bubble cushioning interior.",
    bullets: [] },

  { name: "Bubble Mailer Bag — Paper Envelope", cat: "Mailers", kind: "mailer",
    tags: ["Cushioned"],
    desc: "Paper bubble mailer for cushioning and mailing documents or small items.",
    bullets: [] },

  // ─── Security / Deposit ───────────────────────────────────────
  { name: "Currency Bag", cat: "Security", kind: "security",
    tags: ["Tamper-evident"],
    desc: "Secure bag for transporting and organizing cash and financial deposits.",
    bullets: ["Tamper-evident permanent seal", "Heat-sealed side seams", "Easy-to-write-on surface"] },

  { name: "Bank Supplies", cat: "Security", kind: "security",
    tags: ["On request"],
    desc: "Bank and finance supply bags for currency handling, deposits, evidence and secure transport.",
    bullets: [] },
]

export default PRODUCTS
