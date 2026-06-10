"use client";

import { useEffect, useRef } from "react";

const MOX_SCRIPT_SRC = "https://sites.mobilox.nl/voorraad.js";
const MOX_FULL_INVENTORY_URL = "https://occasions.mobilox.nl/3115662-ye-cars";
const MOX_FEATURED_INVENTORY_URL = `${MOX_FULL_INVENTORY_URL}?limit=3&layout=grid`;
const TITLE_RESTORE_DELAYS = [0, 500, 1500, 3000, 6000];

type LiveInventoryVariant = "full" | "featured";

type LiveInventoryWidgetProps = {
  variant?: LiveInventoryVariant;
};

function getInventoryUrl(variant: LiveInventoryVariant) {
  return variant === "featured" ? MOX_FEATURED_INVENTORY_URL : MOX_FULL_INVENTORY_URL;
}

function createMoxWidgetId(url: string) {
  const normalizedUrl = url.replace(/\/$/, "");
  let hash = 0;

  for (let index = 0; index < normalizedUrl.length; index += 1) {
    hash = (hash << 5) - hash + normalizedUrl.charCodeAt(index);
    hash &= hash;
  }

  return `mox-voorraad-${Math.abs(hash)}`;
}

function createErrorElement() {
  const element = document.createElement("div");
  element.className = "live-inventory__error";
  element.textContent = "De live voorraad kon niet worden geladen. Probeer het later opnieuw.";
  return element;
}

export function LiveInventoryWidget({ variant = "full" }: LiveInventoryWidgetProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) return undefined;

    const inventoryUrl = getInventoryUrl(variant);
    const widgetId = createMoxWidgetId(inventoryUrl);
    const originalTitle = document.title;
    const restoreTitle = () => {
      document.title = originalTitle;
    };
    const restoreTimers: number[] = [];
    const script = document.createElement("script");

    mount.replaceChildren();

    script.type = "text/javascript";
    script.id = "mox-voorraad";
    script.src = MOX_SCRIPT_SRC;
    script.dataset.url = inventoryUrl;

    const handleLoad = () => {
      TITLE_RESTORE_DELAYS.forEach((delay) => {
        restoreTimers.push(window.setTimeout(restoreTitle, delay));
      });
    };

    const handleError = () => {
      mount.replaceChildren(createErrorElement());
      restoreTitle();
    };

    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);
    mount.appendChild(script);

    return () => {
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
      restoreTimers.forEach((timer) => window.clearTimeout(timer));
      script.remove();
      mount.querySelector(`[id="${widgetId}"]`)?.remove();
      mount.replaceChildren();
    };
  }, [variant]);

  return (
    <div className={`live-inventory live-inventory--${variant}`}>
      <div className="live-inventory__frame">
        <div className="live-inventory__mount" ref={mountRef}>
          <div className="live-inventory__placeholder" role="status" aria-live="polite">
            <span className="live-inventory__spinner" aria-hidden="true" />
            <strong>Live voorraad laden</strong>
            <small>Rechtstreeks gekoppeld met de actuele Mobilox-voorraad.</small>
          </div>
        </div>
      </div>
    </div>
  );
}
