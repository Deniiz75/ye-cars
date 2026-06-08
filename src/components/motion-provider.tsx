"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const revealGroups = [
  {
    selector:
      ".section-heading, .about-intro, .story-copy, .contact-details, .contact-form-panel, .detail-summary, .highlights, .contact-panel > div, .sold-cta, .cta-band__content, .reviews-header > div, .google-rating",
    effect: "up",
  },
  {
    selector:
      ".car-card, .service-row, .service-page-card, .values-grid article, .contact-cards > *, .detail-spec-grid > div, .review-card, .footer__grid > *",
    effect: "up",
  },
  {
    selector: ".story-visual, .service-feature__image, .detail-gallery__main",
    effect: "scale",
  },
  {
    selector: ".detail-gallery__thumbs > div",
    effect: "up",
  },
] as const;

const rippleSelector = [
  ".button",
  ".menu-button",
  ".whatsapp-float",
  ".mobile-contact a",
  ".contact-cards a",
  ".google-rating",
  ".service-row",
  ".service-page-card > a",
].join(", ");

export function MotionProvider() {
  const pathname = usePathname();
  const router = useRouter();
  const navigationTimer = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const observed = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    function prepareReveals(scope: ParentNode = document) {
      revealGroups.forEach(({ selector, effect }) => {
        const elements = [
          ...(scope instanceof HTMLElement && scope.matches(selector) ? [scope] : []),
          ...scope.querySelectorAll<HTMLElement>(selector),
        ];

        elements.forEach((element) => {
          if (observed.has(element)) return;

          observed.add(element);
          element.dataset.reveal = effect;

          const siblings = element.parentElement
            ? Array.from(element.parentElement.children).filter((sibling) =>
                sibling.matches(selector),
              )
            : [];
          const index = Math.max(0, siblings.indexOf(element));
          element.style.setProperty("--reveal-delay", `${Math.min(index, 4) * 70}ms`);

          observer.observe(element);
        });
      });
    }

    root.classList.add("motion-ready");
    root.classList.remove("page-is-leaving", "page-is-entering");
    window.requestAnimationFrame(() => root.classList.add("page-is-entering"));

    const enterTimer = window.setTimeout(() => root.classList.remove("page-is-entering"), 750);
    prepareReveals();

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) prepareReveals(node);
        });
      });
    });
    mutationObserver.observe(document.querySelector("main") ?? document.body, { childList: true, subtree: true });

    function handlePointerDown(event: PointerEvent) {
      if (event.button !== 0) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>(rippleSelector) : null;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const diameter = Math.max(rect.width, rect.height) * 1.5;
      const ripple = document.createElement("span");
      ripple.className = "interaction-ripple";
      ripple.style.width = `${diameter}px`;
      ripple.style.height = `${diameter}px`;
      ripple.style.left = `${event.clientX - rect.left - diameter / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - diameter / 2}px`;
      target.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 650);
    }

    function handleNavigation(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.protocol !== "http:" && url.protocol !== "https:") return;

      const current = new URL(window.location.href);
      const sameDocument = url.pathname === current.pathname;
      if (sameDocument) return;

      event.preventDefault();
      if (root.classList.contains("page-is-leaving")) return;

      root.classList.add("page-is-leaving");
      navigationTimer.current = window.setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, 230);
    }

    document.addEventListener("pointerdown", handlePointerDown, true);
    document.addEventListener("click", handleNavigation, true);

    return () => {
      window.clearTimeout(enterTimer);
      if (navigationTimer.current) window.clearTimeout(navigationTimer.current);
      observer.disconnect();
      mutationObserver.disconnect();
      document.removeEventListener("pointerdown", handlePointerDown, true);
      document.removeEventListener("click", handleNavigation, true);
    };
  }, [pathname, router]);

  return <div className="route-curtain" aria-hidden="true" />;
}
