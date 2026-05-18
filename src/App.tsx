import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SearchPalette from "./components/SearchPalette";
import {
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakRadio,
  TweakToggle,
  TweakButton,
  useTweaks,
} from "./components/TweaksPanel";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

type AccentKey = "blue" | "indigo" | "teal" | "emerald";

const ACCENTS: Record<
  AccentKey,
  { primary: string; hover: string; soft: string; deep: string }
> = {
  blue: {
    primary: "#0052CC",
    hover: "#0065FF",
    soft: "#DEEBFF",
    deep: "#0747A6",
  },
  indigo: {
    primary: "#3F51E5",
    hover: "#5469F0",
    soft: "#E5E8FF",
    deep: "#2D3BB8",
  },
  teal: {
    primary: "#0B7F8A",
    hover: "#0FA0AE",
    soft: "#D7F2F5",
    deep: "#075860",
  },
  emerald: {
    primary: "#1F8A5B",
    hover: "#28A06B",
    soft: "#DCF3E5",
    deep: "#0E5E3D",
  },
};

const TWEAK_DEFAULTS = {
  primary: "#0052CC",
  density: "regular" as "compact" | "regular" | "comfy",
  accent: "indigo" as AccentKey,
  showHeroCards: true,
};

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [searchOpen, setSearchOpen] = React.useState(false);

  React.useEffect(() => {
    const a = ACCENTS[t.accent] ?? ACCENTS.blue;
    const r = document.documentElement.style;
    r.setProperty("--primary", a.primary);
    r.setProperty("--primary-hover", a.hover);
    r.setProperty("--primary-soft", a.soft);
    document.documentElement.dataset.density = t.density;
    document.documentElement.dataset.cards = t.showHeroCards ? "on" : "off";
  }, [t.accent, t.density, t.showHeroCards]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <React.Fragment>
      <Nav onOpenSearch={() => setSearchOpen(true)} />
      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
      </Routes>
      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakColor
          label="Accent"
          value={ACCENTS[t.accent]?.primary ?? ACCENTS.blue.primary}
          options={Object.values(ACCENTS).map((a) => a.primary)}
          onChange={(v) => {
            const key =
              (Object.keys(ACCENTS) as AccentKey[]).find(
                (k) => ACCENTS[k].primary === v,
              ) ?? "blue";
            setTweak("accent", key);
          }}
        />
        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v as typeof t.density)}
        />
        <TweakToggle
          label="Hero data cards"
          value={t.showHeroCards}
          onChange={(v) => setTweak("showHeroCards", v)}
        />
        <TweakSection label="Actions" />
        <TweakButton
          label="Open search palette"
          onClick={() => setSearchOpen(true)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}
