"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [805],
  {
    4370: (e, t, s) => {
      s.d(t, { A: () => n });
      var r = s(5155),
        i = s(2115),
        l = s(5565),
        o = s(8114);
      let n = () => {
        let {
            data: e,
            error: t,
            isLoading: s,
          } = (0, o.A)("https://inferix.io/api/year"),
          [n, a] = (0, i.useState)(null);
        return (
          (0, i.useEffect)(() => {
            e && e.year && null === n && a(e.year);
          }, [e, n]),
          (0, r.jsx)("div", {
            className:
              "bg-cover bg-center bg-no-repeat w-[100%] h-[606px] flex flex-col items-center justify-center mt-[0] relative",
            style: { backgroundImage: "url('/assets/images/bg-footer.png')" },
            children: (0, r.jsxs)("div", {
              className: "absolute bottom-0 w-full max-w-[1036px] px-5",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row justify-between w-full h-[72px] items-center mb-[125px] sm:mb-[0]",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-col gap-[32px] sm:gap-4 items-center sm:items-start",
                      children: [
                        (0, r.jsx)(l.default, {
                          src: "/assets/images/layer_footer.svg",
                          alt: "logo",
                          width: 158,
                          height: 32,
                        }),
                        (0, r.jsx)("span", {
                          style: { fontFamily: "Inter" },
                          className:
                            "text-white font-medium text-[16px] leading-[24px] cursor-default",
                          children: "Decentralized GPU Network",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "flex gap-[40px] mt-[32px] sm:mt-[0]",
                      children: [
                        {
                          href: "https://x.com/inferix_eth/",
                          src: "/assets/icons/icon-x.svg",
                          alt: "Twitter",
                        },
                        {
                          href: "https://t.me/inferixai_erc",
                          src: "/assets/icons/icon-telegram.svg",
                          alt: "Telegram",
                        },
                      ].map((e) => {
                        let { href: t, src: s, alt: i } = e;
                        return (0, r.jsx)(
                          "a",
                          {
                            href: t,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, r.jsx)(l.default, {
                              src: s,
                              alt: i,
                              width: 32,
                              height: 32,
                              className: "cursor-pointer",
                            }),
                          },
                          i
                        );
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "flex items-center",
                  children: (0, r.jsxs)("div", {
                    style: { fontFamily: "Inter" },
                    className:
                      "w-full max-w-[1036px] px-5 mt-[30px] items-center flex sm:flex-row flex-col-reverse justify-between p-5 border-t border-[#FFFFFF33] text-[14px] font-normal leading-[24px] text-white gap-[10px]",
                    children: [
                      (0, r.jsx)("div", {
                        children: s
                          ? (0, r.jsx)("span", { children: "Loading..." })
                          : t
                          ? (0, r.jsx)("span", {
                              children:
                                t.message || "Your year is not right now",
                            })
                          : "\xa9 ".concat(n, " Inferix. All rights reserved."),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex w-[286px] justify-between items-center order-1 sm:order-2 ",
                        children: [
                          (0, r.jsx)("a", {
                            href: "https://docs.inferixai.pro/terms-of-service/airdrop-terms-of-service",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: { fontFamily: "Inter" },
                            className:
                              "text-white text-[14px] font-normal leading-[24px] cursor-pointer",
                            children: "Terms and Conditions",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "w-[1px] h-[18px] bg-white cursor-default",
                          }),
                          (0, r.jsx)("a", {
                            href: "https://docs.inferixai.pro/terms-of-service/privacy-policy",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: { fontFamily: "Inter" },
                            className:
                              "text-white text-[14px] font-normal leading-[24px] cursor-pointer order-1 sm:order-2",
                            children: "Privacy Policy",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    5752: (e, t, s) => {
      s.d(t, { A: () => f });
      var r = s(5155),
        i = s(5565),
        l = s(2115),
        o = s(6046);
      let n = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        a = () => {
          window.open("https://app.inferixai.pro/");
        },
        c = () => {
          let e = document.getElementById("backer");
          e && e.scrollIntoView({ behavior: "smooth" });
        },
        x = () => {
          window.open("https://verifier.inferix.io/");
        },
        d = () => {
          window.open("https://docs.inferixai.pro");
        },
        h = () => {
          window.open("/dashboard");
        },
        p = [
          {
            href: "https://x.com/inferix_eth",
            src: "/assets/icons/icon-x.svg",
            alt: "Twitter",
          },
          {
            href: "https://t.me/inferixai_erc",
            src: "/assets/icons/icon-telegram.svg",
            alt: "Telegram",
          },
        ],
        f = () => {
          let e = (0, o.useRouter)(),
            t = (0, o.usePathname)(),
            [s, f] = (0, l.useState)(0),
            [m, u] = (0, l.useState)(!1),
            [w, g] = (0, l.useState)(!1);
          (0, l.useEffect)(() => {
            {
              let e = () => f(window.innerWidth);
              return (
                f(window.innerWidth),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }
          }, []),
            (0, l.useEffect)(() => {
              m
                ? setTimeout(() => {
                    g(m);
                  }, 400)
                : g(m);
            }, [m]);
          let j = () => {
              "/" === t ? n() : e.push("/");
            },
            b = () => {
              "/" === t
                ? c()
                : (e.push("/"),
                  setTimeout(() => {
                    c();
                  }, 1e3));
            };
          return (0, r.jsx)("div", {
            className: "fixed w-full top-2 sm:top-3 z-40 max-w-full",
            style: { fontFamily: "Inter, sans-serif" },
            children:
              s > 640
                ? (0, r.jsxs)("div", {
                    className:
                      "flex m-auto w-full sm:w-[calc(100%-24px)] lg:w-[1248px] h-[54px] lg:max-w-[calc(100%-24px)] justify-center items-center p-2 sm:rounded-[14px] border border-white/15 bg-white/1 backdrop-blur-[20.5px]",
                    children: [
                      (0, r.jsx)(i.default, {
                        className: "absolute top-2 left-2 cursor-pointer",
                        src: "/assets/icons/logo.svg",
                        alt: "logo",
                        width: 44,
                        height: 44,
                        priority: !0,
                        onClick: j,
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex gap-8",
                        children: [
                          (0, r.jsx)("button", {
                            className:
                              "text-white/60 text-[14px] font-normal leading-[26px]",
                            onClick: a,
                            children: "GPU Network",
                          }),
                          (0, r.jsx)("button", {
                            className:
                              "text-white/60 text-[14px] font-normal leading-[26px]",
                            onClick: h,
                            children: "Dashboard",
                          }),
                          (0, r.jsx)("button", {
                            className:
                              "text-white/60 text-[14px] font-normal leading-[26px]",
                            onClick: b,
                            children: "Partner",
                          }),
                          (0, r.jsx)("button", {
                            className:
                              "text-white/60 text-[14px] font-normal leading-[26px]",
                            onClick: d,
                            children: "Docs",
                          }),                          
                        ],
                      }),
                    ],
                  })
                : (0, r.jsxs)("div", {
                    className:
                      "w-[calc(100%-32px)] flex flex-col gap-8 justify-center items-center rounded-[14px] border border-white/15 backdrop-blur-[41px] m-auto transition-all duration-500",
                    style: { height: "".concat(m ? 490 : 54, "px") },
                    children: [
                      (0, r.jsx)(i.default, {
                        className:
                          "absolute cursor-pointer transition-all duration-500 ".concat(
                            m ? "top-8 left-[calc(50%-19px)]" : "top-2 left-2"
                          ),
                        src: "/assets/icons/logo.svg",
                        alt: "logo",
                        width: 44,
                        height: 44,
                        priority: !0,
                        onClick: j,
                      }),
                      w &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex flex-col gap-4",
                              children: [
                                (0, r.jsx)("button", {
                                  className:
                                    "text-white/60 text-[14px] font-normal leading-[26px]",
                                  onClick: () => {
                                    a(), u(!1);
                                  },
                                  children: "GPU Network",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "text-white/60 text-[14px] font-normal leading-[26px]",
                                  onClick: () => {
                                    b(), u(!1);
                                  },
                                  children: "Partner",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "text-white/60 text-[14px] font-normal leading-[26px]",
                                  onClick: () => {
                                    d(), u(!1);
                                  },
                                  children: "Docs",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "text-white/60 text-[14px] font-normal leading-[26px]",
                                  onClick: () => {
                                    h(), u(!1);
                                  },
                                  children: "Blog",
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "flex gap-4",
                              children: p.map((e) => {
                                let { href: t, src: s, alt: l } = e;
                                return (0, r.jsx)(
                                  "a",
                                  {
                                    href: t,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, r.jsx)(i.default, {
                                      src: s,
                                      alt: l,
                                      width: 32,
                                      height: 32,
                                      className: "cursor-pointer rounded-full",
                                    }),
                                  },
                                  l
                                );
                              }),
                            }),
                          ],
                        }),
                      (0, r.jsx)("button", {
                        className:
                          "absolute transition-all duration-500 ".concat(
                            m
                              ? "top-[420px] right-[calc(50%-19px)]"
                              : "top-2 right-2"
                          ),
                        onClick: () => {
                          u(!m);
                        },
                        children: w
                          ? (0, r.jsxs)("svg", {
                              width: "38",
                              height: "38",
                              viewBox: "0 0 38 38",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  fill: "black",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  fill: "url(#paint0_radial_3389_22498)",
                                  fillOpacity: "0.13",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  stroke: "#272728",
                                }),
                                (0, r.jsx)("path", {
                                  d: "M14.3333 14.3333L23.6666 23.6666M23.6666 14.3333L14.3333 23.6666",
                                  stroke: "#F8F8F8",
                                  strokeOpacity: "0.7",
                                  strokeWidth: "2",
                                  strokeLinecap: "square",
                                }),
                                (0, r.jsx)("defs", {
                                  children: (0, r.jsxs)("radialGradient", {
                                    id: "paint0_radial_3389_22498",
                                    cx: "0",
                                    cy: "0",
                                    r: "1",
                                    gradientUnits: "userSpaceOnUse",
                                    gradientTransform:
                                      "translate(12 8) rotate(53.1301) scale(37.5)",
                                    children: [
                                      (0, r.jsx)("stop", {
                                        stopColor: "white",
                                        stopOpacity: "0",
                                      }),
                                      (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "white",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                          : (0, r.jsxs)("svg", {
                              width: "38",
                              height: "38",
                              viewBox: "0 0 38 38",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  fill: "black",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  fill: "url(#paint0_radial_3389_22526)",
                                  fillOpacity: "0.13",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  stroke: "#272728",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "11",
                                  y: "12",
                                  width: "16",
                                  height: "2",
                                  fill: "#D9D9D9",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "11",
                                  y: "18",
                                  width: "16",
                                  height: "2",
                                  fill: "#D9D9D9",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "11",
                                  y: "24",
                                  width: "16",
                                  height: "2",
                                  fill: "#D9D9D9",
                                }),
                                (0, r.jsx)("defs", {
                                  children: (0, r.jsxs)("radialGradient", {
                                    id: "paint0_radial_3389_22526",
                                    cx: "0",
                                    cy: "0",
                                    r: "1",
                                    gradientUnits: "userSpaceOnUse",
                                    gradientTransform:
                                      "translate(12 8) rotate(53.1301) scale(37.5)",
                                    children: [
                                      (0, r.jsx)("stop", {
                                        stopColor: "white",
                                        stopOpacity: "0",
                                      }),
                                      (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "white",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
          });
        };
    },
    8114: (e, t, s) => {
      s.d(t, { A: () => l });
      var r = s(6679);
      let i = (e) => fetch(e).then((e) => e.json()),
        l = (e) => {
          let { data: t, error: s, isLoading: l } = (0, r.Ay)(e, i);
          return { data: t, error: s, isLoading: l };
        };
    },
  },
]);
