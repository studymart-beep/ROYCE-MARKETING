import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChartLine, a as Target, c as Share2, d as Menu, f as Megaphone, g as ChartColumn, h as Clapperboard, i as TrendingUp, l as Search, m as Compass, n as WandSparkles, o as Sparkles, p as Layers, s as ShieldCheck, t as X, u as Radio, v as ArrowUpRight, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as whatsappInquiryUrl, n as NAV_LINKS, r as SITE } from "./router-D5iUuGRn.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D-LA3ifE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-5", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.08 6.46 2.08 11.94c0 1.76.46 3.48 1.34 5L2 22l5.2-1.37a9.9 9.9 0 0 0 4.84 1.23h.01c5.49 0 9.96-4.46 9.96-9.94a9.84 9.84 0 0 0-2.96-7.01Zm-7.01 15.27h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.08.81.82-3.01-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.26 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29Z"
		})
	});
}
function InstagramIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-5", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8ZM12 8.1A3.9 3.9 0 1 1 8.1 12 3.9 3.9 0 0 1 12 8.1Zm0 1.6A2.3 2.3 0 1 0 14.3 12 2.3 2.3 0 0 0 12 9.7Zm4.55-2.85a.95.95 0 1 1-.95.95.95.95 0 0 1 .95-.95Z"
		})
	});
}
function TikTokIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-5", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M14.2 3h2.55a6.4 6.4 0 0 0 1.1 3.38A6.5 6.5 0 0 0 21 7.8v2.52a8.9 8.9 0 0 1-4.7-1.46v6.59A6.55 6.55 0 1 1 9.6 9.02v2.66a3.9 3.9 0 1 0 2.75 3.73V3Z"
		})
	});
}
function Section({ id, tone = "paper", className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("scroll-mt-20 px-4 py-20 md:px-6 md:py-28", tone === "ivory" ? "bg-ivory" : "bg-paper", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl",
			children
		})
	});
}
function SectionIntro({ eyebrow, title, description, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-1.5 rounded-full bg-accent",
					"aria-hidden": "true"
				}), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted md:text-lg",
				children: description
			}) : null
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-primary text-paper shadow-sm hover:bg-primary-deep",
			secondary: "bg-paper text-ink shadow-card hover:shadow-card-hover",
			outline: "bg-transparent text-ink ring-1 ring-border hover:bg-ivory",
			inverse: "bg-paper text-primary hover:bg-primary-soft",
			ghost: "bg-transparent text-ink hover:bg-ivory",
			onPrimary: "bg-transparent text-paper ring-1 ring-paper/50 hover:bg-paper/10"
		},
		size: {
			sm: "h-9 px-4 text-sm",
			default: "h-11 px-5 text-sm",
			lg: "h-12 px-7 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border bg-paper px-3.5 text-sm text-ink shadow-none outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-muted/80 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-ink", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full resize-y rounded-lg border border-border bg-paper px-3.5 py-3 text-sm text-ink outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-muted/80 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20", className),
		...props
	});
}
var CHANNELS = [
	{
		label: "WhatsApp",
		value: SITE.phoneDisplay,
		href: SITE.whatsappUrl,
		icon: WhatsAppIcon
	},
	{
		label: "Instagram",
		value: SITE.instagramHandle,
		href: SITE.instagramUrl,
		icon: InstagramIcon
	},
	{
		label: "TikTok",
		value: SITE.tiktokHandle,
		href: SITE.tiktokUrl,
		icon: TikTokIcon
	}
];
function Contact() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = String(data.get("fullName") ?? "").trim();
		const business = String(data.get("businessName") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const phone = String(data.get("phone") ?? "").trim();
		const advertise = String(data.get("advertise") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		const body = [
			"Hello Royce Marketing — I'd like to start an advertising campaign.",
			"",
			`Full name: ${name}`,
			`Business: ${business || "—"}`,
			`Email: ${email}`,
			`Phone: ${phone || "—"}`,
			`What I want to advertise: ${advertise}`,
			"",
			message
		].join("\n");
		window.open(whatsappInquiryUrl(body), "_blank", "noopener,noreferrer");
		setStatus("ready");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		tone: "paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-1.5 rounded-full bg-accent",
						"aria-hidden": "true"
					}), "Contact"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl",
					children: "Let's Grow Your Brand Together."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg",
					children: "Have a business, product, service, or brand you want to promote? Contact Royce Marketing today."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: CHANNELS.map((channel) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: channel.href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-4 rounded-xl bg-ivory p-4 shadow-card transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-card-hover",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-11 items-center justify-center rounded-lg bg-paper text-primary shadow-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(channel.icon, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-semibold uppercase tracking-widest text-muted",
								children: channel.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-base font-semibold text-ink",
								children: channel.value
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-auto size-4 text-muted" })
						]
					}) }, channel.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 hidden overflow-hidden rounded-xl shadow-card lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/creative-ads.jpg",
						alt: "Creative advertising boards, social content, and campaign materials",
						className: "aspect-3/2 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10",
						width: 1728,
						height: 1152
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-ivory p-6 shadow-card md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-semibold tracking-tight text-ink",
						children: "Send an inquiry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: "Submit the form to open WhatsApp with your details. Our team replies directly there — nothing is stored on this page yet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 grid gap-4",
						onSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full Name",
									htmlFor: "fullName",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "fullName",
										name: "fullName",
										autoComplete: "name",
										required: true
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Business Name",
									htmlFor: "businessName",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "businessName",
										name: "businessName",
										autoComplete: "organization"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email Address",
									htmlFor: "email",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										name: "email",
										type: "email",
										autoComplete: "email",
										required: true
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone Number",
									htmlFor: "phone",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "phone",
										name: "phone",
										type: "tel",
										autoComplete: "tel"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "What do you want to advertise?",
								htmlFor: "advertise",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "advertise",
									name: "advertise",
									placeholder: "Product, service, brand, or campaign",
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Message",
								htmlFor: "message",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "message",
									name: "message",
									rows: 5,
									placeholder: "Tell us about your goal, timeline, and audience.",
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								size: "lg",
								className: "mt-2 w-full sm:w-auto",
								children: ["Send Inquiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							}),
							status === "ready" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								role: "status",
								children: "WhatsApp should open with your inquiry. If it didn't, use the WhatsApp link on the left."
							}) : null
						]
					})
				]
			})]
		})
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
function Cta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper px-4 py-16 md:px-6 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl overflow-hidden rounded-xl bg-primary px-6 py-14 text-center text-paper shadow-card md:px-16 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-1.5 rounded-full bg-accent",
						"aria-hidden": "true"
					}), "Start a campaign"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl",
					children: "Ready to Put Your Brand in Front of More People?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-soft md:text-lg",
					children: "Let Royce Marketing help you create advertising campaigns that get your business noticed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "inverse",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.whatsappUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["Start Your Campaign", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "onPrimary",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: "Contact Us"
						})
					})]
				})
			]
		})
	});
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 52 40",
		className: cn("h-9 w-auto shrink-0", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "52",
				height: "40",
				rx: "11",
				className: "fill-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "fill-paper",
				d: "M8.4 9.2h8.1c3.2 0 5.3 2 5.3 4.9 0 2.15-1.2 3.85-3.15 4.6L22.6 29H18.2l-3.5-5.4h-2.8V29H8.4V9.2Zm3.75 2.75v4.45h4.15c1.4 0 2.3-.95 2.3-2.25 0-1.28-.9-2.2-2.3-2.2h-4.15Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "fill-paper",
				d: "M27.3 29V9.2h3.05l3.25 9.15 3.25-9.15h3.05V29h-2.85V15.4L33.7 24.4h-2.5l-3.05-9V29H27.3Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "14",
				y: "32.6",
				width: "24",
				height: "2",
				rx: "1",
				className: "fill-accent"
			})
		]
	});
}
function BrandLockup({ className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#home",
		className: cn("flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: compact ? "size-8" : "size-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("font-semibold tracking-tight text-ink", compact ? "text-sm" : "text-sm md:text-base"),
			children: SITE.name
		})]
	});
}
var SOCIALS = [
	{
		href: SITE.whatsappUrl,
		label: "WhatsApp",
		icon: WhatsAppIcon
	},
	{
		href: SITE.instagramUrl,
		label: "Instagram",
		icon: InstagramIcon
	},
	{
		href: SITE.tiktokUrl,
		label: "TikTok",
		icon: TikTokIcon
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm leading-relaxed text-muted",
						children: "Royce Marketing is a premium advertising and digital marketing agency helping businesses, brands, and organizations reach more people through campaigns that get noticed."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-ink",
					children: "Navigate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-muted transition-colors hover:text-ink",
						children: link.label
					}) }, link.href))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-ink",
					children: "Connect"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: SOCIALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }), item.label]
					}) }, item.label))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-6xl px-4 py-6 text-sm text-muted md:px-6",
				children: [
					"© 2026 ",
					SITE.name,
					". All rights reserved."
				]
			})
		})]
	});
}
var PLATFORMS = [
	"Facebook Ads",
	"Instagram Ads",
	"TikTok Ads",
	"Google Ads",
	"YouTube Ads"
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden bg-hero-glow bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hero-grid pointer-events-none absolute inset-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-1.5 rounded-full bg-accent",
							"aria-hidden": "true"
						}), "Advertising Agency"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl",
						children: ["Your Brand Deserves", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-primary",
							children: "To Be Seen."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg",
						children: "Royce Marketing helps businesses reach the right audience, build brand awareness, and grow through powerful advertising and digital marketing solutions."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								children: ["Start Advertising", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								children: "Explore Our Services"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted",
						children: PLATFORMS.map((name, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "inline-flex items-center gap-4",
							children: [index > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden size-1 rounded-full bg-border sm:inline-block",
								"aria-hidden": "true"
							}) : null, name]
						}, name))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-xl lg:max-w-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-xl shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hero-campaign.jpg",
							alt: "Advertising campaign workspace with analytics dashboards, social ads, and creative boards",
							className: "aspect-4/3 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10",
							width: 1600,
							height: 1200
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-float absolute -left-2 top-8 hidden w-44 rounded-lg bg-paper p-3 shadow-float sm:block md:-left-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-8 items-center justify-center rounded-md bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-ink",
								children: "Campaign live"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Social · Search · Video"
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-float-delayed absolute -right-2 bottom-16 hidden w-48 rounded-lg bg-paper p-3 shadow-float sm:block md:-right-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-8 items-center justify-center rounded-md bg-accent-soft text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-ink",
								children: "Audience growth"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Reach the right people"
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-paper/95 px-3 py-2 shadow-float backdrop-blur-sm md:left-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-ink",
							children: "Creative ads in motion"
						})]
					})
				]
			})]
		})]
	});
}
var STEPS = [
	{
		number: "01",
		title: "Tell Us Your Goal",
		text: "Share your business, product, service, or campaign objective."
	},
	{
		number: "02",
		title: "We Create Your Campaign",
		text: "Our team develops the advertising strategy and creative direction."
	},
	{
		number: "03",
		title: "Reach More People",
		text: "Launch your campaign and connect with your target audience."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		tone: "ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
			eyebrow: "Process",
			title: "From Idea to Impact."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "relative mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-7 right-16 left-16 hidden h-px bg-border lg:block",
				"aria-hidden": "true"
			}), STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4 lg:flex-col lg:items-center lg:text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-paper text-sm font-semibold tracking-wide text-primary shadow-card",
						children: step.number
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold tracking-tight text-ink",
						children: step.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-sm text-sm leading-relaxed text-muted lg:mx-auto",
						children: step.text
					})] })]
				})
			}, step.number))]
		})]
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 border-b bg-paper/90 backdrop-blur-md transition-[box-shadow,border-color] duration-200", scrolled ? "border-border shadow-card" : "border-border/80"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					"aria-label": "Primary",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm font-medium text-muted transition-colors duration-150 hover:text-ink",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: "Get Started"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-full text-ink ring-1 ring-border lg:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-menu",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((value) => !value),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-menu",
			className: cn("border-t border-border bg-paper lg:hidden", "transition-[opacity,transform] duration-200 ease-out", open ? "pointer-events-auto opacity-100" : "pointer-events-none hidden opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4",
				"aria-label": "Mobile",
				children: [NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-ivory",
					onClick: () => setOpen(false),
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-2 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						onClick: () => setOpen(false),
						children: "Get Started"
					})
				})]
			})
		})]
	});
}
var SERVICES = [
	{
		title: "Social Media Advertising",
		description: "Run engaging advertising campaigns across social media platforms.",
		items: [
			"Facebook Ads",
			"Instagram Ads",
			"TikTok Ads",
			"Social media promotions"
		],
		icon: Share2
	},
	{
		title: "Google Advertising",
		description: "Help businesses reach customers actively searching online.",
		items: [
			"Google Search Ads",
			"Display Ads",
			"YouTube Ads",
			"Online promotional campaigns"
		],
		icon: Search
	},
	{
		title: "Brand Promotion",
		description: "Make your business visible and memorable.",
		items: [
			"Brand awareness campaigns",
			"Product promotion",
			"Business promotion",
			"Creative advertising content"
		],
		icon: Sparkles
	},
	{
		title: "Digital Marketing",
		description: "Build a stronger online presence through modern digital strategies.",
		items: [
			"Online campaigns",
			"Audience targeting",
			"Content promotion",
			"Digital growth strategy"
		],
		icon: ChartLine
	},
	{
		title: "Video & Creative Ads",
		description: "Create advertising content that captures attention.",
		items: [
			"Video advertisements",
			"Promotional graphics",
			"Creative campaign designs",
			"Social media content"
		],
		icon: Clapperboard
	},
	{
		title: "Campaign Management",
		description: "Plan, launch, and manage advertising campaigns.",
		items: [
			"Campaign setup",
			"Ad optimization",
			"Audience research",
			"Performance monitoring"
		],
		icon: Megaphone
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "services",
		tone: "ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
			eyebrow: "Services",
			title: "We Advertise. You Grow.",
			description: "From social media campaigns to digital advertising, Royce Marketing helps businesses put their message in front of the right audience."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: SERVICES.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group rounded-xl bg-paper p-6 shadow-card transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-11 items-center justify-center rounded-lg bg-primary-soft text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.icon, {
							className: "size-5",
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-lg font-semibold tracking-tight text-ink",
						children: service.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: service.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2",
						children: service.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2 text-sm text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-primary",
								"aria-hidden": "true"
							}), item]
						}, item))
					})
				]
			}, service.title))
		})]
	});
}
var FEATURES = [
	{
		title: "Creative advertising solutions",
		text: "Campaigns designed to stop the scroll and stay memorable.",
		icon: WandSparkles
	},
	{
		title: "Multi-platform advertising",
		text: "Social, search, video, and display — coordinated as one plan.",
		icon: Layers
	},
	{
		title: "Audience-focused campaigns",
		text: "We put your message in front of people who actually need it.",
		icon: Target
	},
	{
		title: "Professional service",
		text: "Clear communication, careful execution, and accountable delivery.",
		icon: ShieldCheck
	},
	{
		title: "Business growth mindset",
		text: "Every campaign is built around visibility, reach, and results.",
		icon: TrendingUp
	},
	{
		title: "Modern digital strategies",
		text: "Current platforms, current formats, current audience behavior.",
		icon: Compass
	}
];
function WhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		tone: "paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative order-2 lg:order-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl shadow-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/studio.jpg",
						alt: "Bright advertising studio with campaign moodboards and creative work in progress",
						className: "aspect-4/3 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10",
						width: 1600,
						height: 1200
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-5 -right-2 hidden max-w-xs rounded-lg bg-paper p-4 shadow-float sm:block lg:-right-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-primary",
						children: "Your message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium text-ink",
						children: "Our job is to make it travel."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-1 lg:order-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-1.5 rounded-full bg-accent",
							"aria-hidden": "true"
						}), "Why Royce Marketing"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl",
						children: "Your Message. Our Reach."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg",
						children: "We combine creative advertising, digital strategy, and audience-focused campaigns to help businesses connect with more people and create meaningful growth opportunities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-4 sm:grid-cols-2",
						children: FEATURES.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 rounded-lg bg-ivory p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, {
									className: "size-4",
									strokeWidth: 1.75
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-ink",
								children: feature.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: feature.text
							})] })]
						}, feature.title))
					})
				]
			})]
		})
	});
}
function Home() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "AdvertisingAgency",
		name: SITE.name,
		description: SITE.description,
		url: "/",
		telephone: "+2349042436206",
		sameAs: [
			SITE.instagramUrl,
			SITE.tiktokUrl,
			SITE.whatsappUrl
		],
		areaServed: "NG",
		knowsAbout: [
			"Social media advertising",
			"Google Ads",
			"Brand promotion",
			"Video advertising",
			"Digital marketing"
		]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#home",
			className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
		})
	] });
}
//#endregion
export { Home as component };
