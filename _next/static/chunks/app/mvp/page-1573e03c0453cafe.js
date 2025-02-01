(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [316],
  {
    5464: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 1043));
    },
    5828: (e, t, s) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var s in t)
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
        })(t, {
          callServer: function () {
            return a.callServer;
          },
          createServerReference: function () {
            return i;
          },
          findSourceMapURL: function () {
            return l.findSourceMapURL;
          },
        });
      let a = s(9603),
        l = s(3355),
        i = s(4979).createServerReference;
    },
    1043: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => j });
      var a = s(5155),
        l = s(383),
        i = s(5906),
        r = s(5752),
        n = s(4370),
        o = s(5565);
      let c = {
          src: "/_next/static/media/BG LAYOUT GRADIENT.fa81f88e.png",
          height: 328,
          width: 1440,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlM+wds1JGMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAOSURBVHicY2CAAUYoAAAANgAJbDU8EQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 2,
        },
        x = () =>
          (0, a.jsxs)("section", {
            className: "relative w-full max-h-screen ",
            style: { height: "auto" },
            children: [
              (0, a.jsx)("div", {
                className:
                  "relative w-full h-full flex justify-center items-center overflow-x-hidden brightness-[46%]",
                children: (0, a.jsx)("video", {
                  className:
                    "w-full max-sm:h-[900px] sm:h-[712px] max-h-screen object-cover object-top min-w-[1024px] z-10 relative",
                  playsInline: !0,
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  preload: "auto",
                  crossOrigin: "anonymous",
                  children: (0, a.jsx)("source", {
                    src: "/assets/videos/output_h264.mp4",
                    type: "video/mp4",
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className:
                  "absolute w-full flex flex-col top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 items-center",
                children: (0, a.jsxs)("p", {
                  style: {
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(255, 255, 255, 0.70) 12.62%, #FFF 90.65%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    fontFamily: "Inter, sans-serif",
                  },
                  className:
                    "font-normal text-transparent text-[32px] text-center max-w-[500px]",
                  children: [
                    "AI Training & ",
                    (0, a.jsx)("br", { className: "sm:hidden" }),
                    "Visual Computing ",
                    (0, a.jsx)("br", { className: "sm:hidden" }),
                    "Available on ",
                    (0, a.jsx)("br", { className: "sm:hidden" }),
                    "desktop and Web",
                  ],
                }),
              }),
              (0, a.jsx)(o.default, {
                className: "absolute top-0 left-0 w-full h-full z-[20]",
                src: "/assets/images/bright_pants.svg",
                alt: "",
                width: 0,
                height: 0,
                priority: !0,
                style: { objectFit: "cover", filter: "brightness(0.4)" },
              }),
              (0, a.jsx)(o.default, {
                className:
                  "absolute bottom-0 left-0 w-full h-full z-[20] object-cover",
                src: c,
                alt: "",
                width: 0,
                height: 0,
                priority: !0,
              }),
              (0, a.jsx)(o.default, {
                className: "absolute  left-1/2 transform -translate-x-1/2 z-20",
                src: "/assets/images/galaxy.svg",
                alt: "",
                width: 960,
                height: 540,
                priority: !0,
                style: { bottom: "0", transform: "translate(-50%, 50%)" },
              }),
            ],
          });
      s(6129);
      let d = {
          src: "/_next/static/media/nvidia_h100.b787d766.png",
          height: 385,
          width: 573,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEVMaXEZGRdCPz8UFBQPDw8xMTEeICAnKykeHh42PTv///8SEhJGTEq3RkeBAAAADHRSTlMAQhtJMTikgmDfC2/EgF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nB3IyQ0AMAjEQC8QyNV/vRF5eWRg2xgAVjWt4XepGyfzH7nkAQ8LnwB8VfDkLwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        p = {
          src: "/_next/static/media/nvidia_h100_mobile.39981a78.png",
          height: 720,
          width: 720,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEUUFBQPDw8TExMtLS0kJSUREREfHx8eHh4hIyILCwsREREREhJPVVM8QT/0WQ/oAAAADHRSTlNAUxcNkixJcaQsLc48Zp+EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nD3BSRKAMAwEscYeL0nM/7/LJYWEW0pVibvmbQyjZxonS+eokufiF7H2XhHY9QEqpAEMYvJBgQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        };
      var A = s(2115);
      let m = (e) => {
          let { isOpen: t, children: s } = e;
          return t
            ? (0, a.jsx)("div", {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-[#0000007A] backdrop-blur-[16px] p-4",
                children: (0, a.jsx)("div", {
                  className:
                    "relative flex flex-col gap-2 justify-end items-center max-w-[647px] h-[444px] w-full pt-4 pb-6 px-6 rounded-[8px]",
                  style: {
                    border: "1.5px solid rgba(255, 255, 255, 0.1)",
                    background: "rgba(118, 118, 118, 0.3)",
                    backdropFilter: "blur(100px)",
                    boxShadow:
                      "2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset",
                  },
                  children: s,
                }),
              })
            : null;
        },
        h = {
          src: "/_next/static/media/background_modal_success.f8539872.png",
          height: 888,
          width: 776,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAG1BMVEVMaXEmKSk8PDwLCwsvNzUpLy4uNDNKTUwtMTENJCGsAAAACHRSTlMAJRMINJ6FofCxehIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAArSURBVHicLchBDgAgDAJBaKn6/xcb0L1MsgA0guNirF2m54wvlc9MoPr5uQveAE7ZSBLHAAAAAElFTkSuQmCC",
          blurWidth: 7,
          blurHeight: 8,
        };
      var u = s(8510);
      let g = () => {
          let [e, t] = (0, A.useState)(!1),
            [s, l] = (0, A.useState)(""),
            i = () => t(!0),
            r = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
            n = async (e) => {
              if ((e.preventDefault(), r(s)))
                try {
                  await fetch("/api/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: s }),
                  }),
                    i(),
                    l(""),
                    console.log("submit success!");
                } catch (e) {
                  console.log(e);
                }
            };
          return (0, a.jsxs)("div", {
            className: "email",
            children: [
              (0, a.jsxs)("div", {
                className: "email-container",
                children: [
                  (0, a.jsx)(o.default, { src: d, alt: "nvidia-h100" }),
                  (0, a.jsx)(o.default, { src: p, alt: "nvidia-h100" }),
                  (0, a.jsxs)("form", {
                    onSubmit: n,
                    children: [
                      (0, a.jsxs)("div", {
                        className: "text-content",
                        children: [
                          (0, a.jsx)("span", {
                            children:
                              "Massive AI Training with 320+ H100 Units",
                          }),
                          (0, a.jsx)("span", {
                            children:
                              "The most advanced hardware system today with 320++ NVIDIA H100 GPUs",
                          }),
                          (0, a.jsx)("span", {
                            children:
                              "Enter email to participate in our AI Training program",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "input",
                        children: [
                          (0, a.jsx)("input", {
                            type: "email",
                            placeholder: "Enter your email...",
                            value: s,
                            onChange: (e) => {
                              l(e.target.value);
                            },
                          }),
                          (0, a.jsx)("button", {
                            type: "submit",
                            onClick: n,
                            disabled: !r(s),
                            style: { opacity: r(s) ? 1 : 0.5 },
                            children: "Submit",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(m, {
                isOpen: e,
                children: [
                  (0, a.jsx)(o.default, {
                    className: "absolute top-0 w-full h-full object-contain",
                    src: h,
                    alt: "bgModalSuccess",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "text-[#F8F8F8F2] font-medium text-[18px] text-center",
                        children: "You have submitted successfully",
                      }),
                      (0, a.jsx)("span", {
                        className: "text-[#9D9D9D] text-[12px] text-center",
                        children: "We will get back to you soon",
                      }),
                    ],
                  }),
                  (0, a.jsx)(u.A, {
                    content: "Done",
                    isActive: !0,
                    onClick: () => {
                      t(!1);
                    },
                    stylesContent: { fontFamily: "Inter, sans-serif" },
                  }),
                ],
              }),
            ],
          });
        },
        f = (e) => {
          let {
            label: t,
            icon: s,
            hoverIcon: l,
            hoverState: i,
            setHoverState: r,
            onClick: n,
          } = e;
          return (0, a.jsxs)("div", {
            className: "flex items-center gap-[4px] h-[24px] cursor-pointer",
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            onClick: n,
            children: [
              (0, a.jsx)("div", {
                className: "flex items-center justify-center w-[28px] h-[28px]",
                children: i
                  ? (0, a.jsx)(o.default, {
                      src: l,
                      alt: "",
                      width: 27,
                      height: 27,
                    })
                  : (0, a.jsx)(o.default, {
                      className: "opacity-60",
                      src: s,
                      alt: "",
                      width: 24,
                      height: 24,
                    }),
              }),
              (0, a.jsx)("div", {
                style: i ? { textShadow: "0px 0px 4px #48FFC5" } : {},
                className:
                  "cursor-default font-inter text-[14px] font-normal leading-[16.94px] ".concat(
                    i ? "text-white" : "text-white opacity-60"
                  ),
                children: t,
              }),
            ],
          });
        },
        b = () => {
          let [e, t] = (0, A.useState)({
              window: !1,
              linux: !1,
              WebApp: !1,
              DesktopPC: !1,
            }),
            s = (e, s) => {
              t((t) => ({ ...t, [e]: s }));
            },
            l = (e) => {
              window.open(e, "_blank");
            };
          return (0, a.jsx)("div", {
            className: "gpu",
            children: (0, a.jsxs)("div", {
              className: "gpu-container",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "w-[100%] lg:w-[503px] h-[360px] sm:h-[380px] items-center bg-[#76767629] backdrop-blur-[58px] flex flex-col sm:flex-row lg:justify-start justify-center rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)]",
                  children: [
                    (0, a.jsx)(o.default, {
                      className: "sm:hidden",
                      src: "/assets/images/img-gpu-mobile.png",
                      alt: "GPUsCard",
                      width: 340,
                      height: 334,
                      priority: !0,
                    }),
                    (0, a.jsx)(o.default, {
                      className: "hidden sm:block object-contain",
                      src: "/assets/images/img-gpu-mvp.webp",
                      alt: "img-gpu-mvp",
                      width: 360,
                      height: 334,
                      priority: !0,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "lg:h-[136px] mt-[-55px] sm:mt-[0] lg:ml-[-20px] ml-[0] h-[80px] justify-start sm:justify-between top-[270px] sm:top-[108px] sm:left-[315px] w-full sm:w-[204px] flex flex-col items-center lg:items-start text-center sm:text-left gap-[8px] sm:gap-[0px]",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "text-[#F8F8F8F2] font-medium text-[14px] sm:text-[18px] cursor-default",
                          children: "For GPU Owner",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "text-[#9D9D9D] block lg:hidden font-medium text-[12px] cursor-default",
                          children: "MVP is available on Desktop",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "hidden lg:flex flex-col gap-[16px] h-[64px] justify-between",
                          children: [
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "w-[100%] lg:w-[503px] h-[360px] sm:h-[380px] items-center bg-[#76767629] backdrop-blur-[58px] flex flex-col sm:flex-row lg:justify-start justify-center rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)]",
                  children: [
                    (0, a.jsx)(o.default, {
                      className: "sm:hidden ",
                      src: "/assets/images/ai-actionmb.webp",
                      alt: "img-Ai-mvp",
                      width: 360,
                      height: 334,
                      priority: !0,
                      quality: 100,
                    }),
                    (0, a.jsx)(o.default, {
                      className: "hidden sm:block object-contain",
                      src: "/assets/images/img-Aimvp.webp",
                      alt: "img-Ai-mvp",
                      width: 410,
                      height: 334,
                      priority: !0,
                      quality: 100,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "lg:h-[136px] h-[80px] lg:ml-[-70px] ml-[0]justify-start sm:justify-between mt-[-70px] sm:mt-[0] w-full sm:w-[204px] flex flex-col items-center sm:items-start text-center sm:text-left gap-[8px] sm:gap-[0px]",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "text-[#F8F8F8F2] sm:w-[125px] font-medium text-[14px] sm:text-[18px] cursor-default",
                          children: "3D Rendering & AI Users",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "text-[#9D9D9D] block lg:hidden font-medium text-[12px] cursor-default",
                          children: "MVP is available on Desktop",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "hidden lg:flex flex-col gap-[16px] h-[64px] justify-between",
                          children: [
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var w = s(5828);
      let v = (0, w.createServerReference)(
          "7f5fce47812a4ba2a01c10b062fa4b54b860b08451",
          w.callServer,
          void 0,
          w.findSourceMapURL,
          "default"
        ),
        j = () => {
          let e = new l.E({
            defaultOptions: { queries: { staleTime: 1 / 0 } },
          });
          return (
            (0, A.useEffect)(() => {
              (async () => {
                try {
                  await v();
                } catch (e) {
                  console.error("Failed to initialize database:", e);
                }
              })().then(null);
            }, []),
            (0, a.jsxs)(i.Ht, {
              client: e,
              children: [
                (0, a.jsx)(r.A, {}),
                (0, a.jsx)(x, {}),
                (0, a.jsxs)("div", {
                  className:
                    "w-full h-full flex flex-col justify-center items-center bg-black mt-[-406px] gap-1 px-2",
                  children: [(0, a.jsx)(g, {}), (0, a.jsx)(b, {})],
                }),
                (0, a.jsx)(n.A, {}),
              ],
            })
          );
        };
    },
    8510: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => l });
      var a = s(5155);
      s(4515);
      let l = (e) => {
        let { content: t, onClick: s, isActive: l, stylesContent: i } = e;
        return (0, a.jsx)("button", {
          className:
            "relative w-[160px] h-[50px] rounded-[96px] overflow-hidden",
          style: {
            border: "none",
            background:
              "linear-gradient(var(--a), #0effB3 5%, #7affB2 20%, #FFFFFF 50%, #7effB2 80%, #2CD9FF 95%)",
            animation: "rotateBackground 2s ease-in-out infinite",
            boxShadow:
              "0px 2px 26px 0px rgba(27, 118, 255, 0.37), 0px 2px 33px 0px rgba(0, 255, 56, 0.22)",
          },
          onClick: s,
          disabled: !l,
          type: "button",
          children: (0, a.jsx)("div", {
            className:
              "absolute top-0 left-0 translate-y-[1.5px] translate-x-[1.5px] w-[157px] h-[47px] rounded-[96px] bg-black flex justify-center items-center text-[12px] sm:text-[14px] text-white hover:bg-[#7EFFB2CF] hover:text-black",
            style: i,
            children: t,
          }),
        });
      };
    },
    4515: () => {},
    6129: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [341, 304, 433, 805, 441, 517, 358], () => t(5464)), (_N_E = e.O());
  },
]);
