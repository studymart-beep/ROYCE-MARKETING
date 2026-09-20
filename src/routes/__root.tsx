
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

const TIKTOK_PIXEL_ID = "DANPK5JC77UCMIGVONK0";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: SITE.title },
      {
        name: "description",
        content: SITE.description,
      },
      {
        name: "theme-color",
        content: "#FFFFFF",
      },
      {
        name: "author",
        content: SITE.name,
      },
      {
        name: "keywords",
        content:
          "Royce Marketing, advertising agency, digital marketing, social media advertising, brand promotion, video ads, TikTok Ads, Instagram marketing, WhatsApp marketing",
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],

    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "manifest",
        href: "/__grok/manifest.webmanifest",
      },
      {
        rel: "apple-touch-icon",
        href: "/__grok/icon-180.png",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
      },
    ],

    scripts: [
      {
        children: `
          !function (w, d, t) {
            w.TiktokAnalyticsObject = t;

            var ttq = w[t] = w[t] || [];

            ttq.methods = [
              "page",
              "track",
              "identify",
              "instances",
              "debug",
              "on",
              "off",
              "once",
              "ready",
              "alias",
              "group",
              "enableCookie",
              "disableCookie",
              "holdConsent",
              "revokeConsent",
              "grantConsent"
            ];

            ttq.setAndDefer = function (t, e) {
              t[e] = function () {
                t.push(
                  [e].concat(
                    Array.prototype.slice.call(arguments, 0)
                  )
                );
              };
            };

            for (
              var i = 0;
              i < ttq.methods.length;
              i++
            ) {
              ttq.setAndDefer(
                ttq,
                ttq.methods[i]
              );
            }

            ttq.instance = function (t) {
              for (
                var e = ttq._i[t] || [],
                    n = 0;
                n < ttq.methods.length;
                n++
              ) {
                ttq.setAndDefer(
                  e,
                  ttq.methods[n]
                );
              }

              return e;
            };

            ttq.load = function (e, n) {
              var r =
                "https://analytics.tiktok.com/i18n/pixel/events.js";

              ttq._i = ttq._i || {};
              ttq._i[e] = [];
              ttq._i[e]._u = r;

              ttq._t = ttq._t || {};
              ttq._t[e] = +new Date;

              ttq._o = ttq._o || {};
              ttq._o[e] = n || {};

              n = d.createElement("script");
              n.type = "text/javascript";
              n.async = true;
              n.src =
                r +
                "?sdkid=" +
                e +
                "&lib=" +
                t;

              e =
                d.getElementsByTagName("script")[0];

              e.parentNode.insertBefore(n, e);
            };

            ttq.load("${TIKTOK_PIXEL_ID}");
            ttq.page();

          }(window, document, "ttq");
        `,
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html
      lang="en"
      className="antialiased"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>

      <body className="bg-paper text-ink">
        <PreviewHostBridge />

        <AuthProvider>
          <Outlet />
        </AuthProvider>

        <Scripts />
      </body>
    </html>
  );
}