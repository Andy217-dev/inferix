(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [105],
  {
    2095: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 2150));
    },
    2150: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => C });
      var a = s(5155),
        n = s(383),
        i = s(5906),
        r = s(2115),
        l = s(5565),
        o = s(2863);
      let x = (e) => {
        let {
          content: t,
          onClick: s,
          isActive: n,
          stylesContent: i,
          width: r = "160px",
          height: l = "49px",
          backgroundColor: o = "black",
          hoverBackgroundColor: x = "#7EFFB2CF",
          textColor: c = "white",
          hoverTextColor: d = "black",
        } = e;
        return (0, a.jsx)("button", {
          className: "relative rounded-[96px] overflow-hidden",
          style: {
            border: "none",
            background:
              "linear-gradient(90deg, #0effB3 5%, #7affB2 20%, #FFFFFF 50%, #7effB2 80%, #2CD9FF 95%)",
            animation: "rotateBackground 2s ease-in-out infinite",
            boxShadow:
              "0px 2px 26px 0px rgba(27, 118, 255, 0.37), 0px 2px 33px 0px rgba(0, 255, 56, 0.22)",
            width: r,
            height: l,
          },
          onClick: s,
          disabled: !n,
          type: "button",
          children: (0, a.jsx)("div", {
            className:
              "absolute top-0 left-0 translate-y-[1.5px] translate-x-[1.5px] rounded-[96px] flex justify-center items-center text-[12px] sm:text-[14px]",
            style: {
              width: "calc(".concat(r, " - 3px)"),
              height: "calc(".concat(l, " - 3px)"),
              backgroundColor: o,
              color: c,
              ...i,
            },
            onMouseEnter: (e) => {
              (e.currentTarget.style.backgroundColor = x),
                (e.currentTarget.style.color = d);
            },
            onMouseLeave: (e) => {
              (e.currentTarget.style.backgroundColor = o),
                (e.currentTarget.style.color = c);
            },
            children: t,
          }),
        });
      };
      function c() {
        return (0, a.jsxs)("div", {
          className: "h-[195px] flex sm:gap-[39px] gap-[78px] flex-col",
          children: [
            (0, a.jsxs)("div", {
              className: "hidden sm:flex h-[107px] flex-col",
              children: [
                (0, a.jsx)("div", {
                  style: {
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(255, 255, 255, 0.70) 12.62%, #FFF 90.65%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  },
                  className:
                    "font-normal text-center flex text-transparent sm:text-[40px] text-[32px] justify-center lg:justify-start",
                  children: "Inferix GPU network",
                }),
                (0, a.jsxs)("div", {
                  className: "flex gap-[13px]",
                  children: [
                    (0, a.jsx)("p", {
                      style: {
                        backgroundImage:
                          "linear-gradient(180deg, #0EFFB2 12.62%, #9EFFCF 90.65%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      },
                      className: "flex lg:text-[40px] text-[32px]",
                      children: "Testnet",
                    }),
                    (0, a.jsx)("p", {
                      className: "lg:text-[40px] text-[32px] text-white",
                      children: "is live on IoTeX",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "sm:hidden h-[156px] w-[270px] flex flex-col",
              children: [
                (0, a.jsx)("div", {
                  style: {
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(255, 255, 255, 0.70) 12.62%, #FFF 90.65%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  },
                  className:
                    "font-normal text-center flex text-transparent sm:text-[40px] text-[32px] justify-center lg:justify-start",
                  children: "Inferix GPU network",
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col text-center",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex gap-[10px] justify-center",
                      children: [
                        (0, a.jsx)("div", {
                          style: {
                            backgroundImage:
                              "linear-gradient(180deg, #0EFFB2 12.62%, #9EFFCF 90.65%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          },
                          className:
                            "flex sm:text-[40px] text-[32px] justify-center",
                          children: "Testnet",
                        }),
                        " ",
                        (0, a.jsx)("div", {
                          className:
                            "sm:text-[40px] text-[32px] justify-center text-white ",
                          children: "is live on",
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "sm:text-[40px] text-[32px] text-white",
                      children: "IoTeX",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "flex justify-center lg:justify-start",
              children: (0, a.jsx)(x, {
                content: "Join our Telegram",
                onClick: () => {
                  window.open("https://t.me/inferixai_erc/", "_blank");
                },
                isActive: !0,
                stylesContent: {
                  fontSize: "14px",
                  fontFamily: "Inter, sans-serif",
                },
                width: "160px",
                height: "50px",
                backgroundColor: "black",
                hoverBackgroundColor: "#7EFFB2CF",
                hoverTextColor: "black",
                textColor: "#FFFFFF",
              }),
            }),
          ],
        });
      }
      var d = s(9030);
      function p() {
        let [e, t] = (0, r.useState)([]);
        (0, r.useEffect)(() => {
          (async () => {
            try {
              let e = await fetch("https://inferix.io/api/gpu-info");
              if (!e.ok) throw Error("Failed to fetch GPUs");
              let s = await e.json();
              t(s);
            } catch (e) {
              console.error(e);
            }
          })();
        }, []);
        let [s, n] = (0, r.useState)(0);
        (0, r.useEffect)(() => {
          e.length > 0 &&
            n(
              e.reduce(
                (e, t) =>
                  e +
                  (null == t ? void 0 : t.staking) *
                    (null == t ? void 0 : t.ib),
                0
              )
            );
        }, [e]);
        let i = () =>
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(l.default, {
                className: "object-contain",
                src: "/assets/icons/graph-container-1.svg",
                alt: "graph-container",
                width: 321,
                height: 269,
                priority: !0,
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-[8px] absolute top-7 left-7",
                children: [
                  (0, a.jsx)("div", {
                    style: {
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(255, 255, 255, 0.70) 12.62%, #FFF 90.65%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      fontFamily: "Rubik",
                    },
                    className:
                      "font-bold text-transparent text-[14px] text-center flex",
                    children: "Total Network Hashrate",
                  }),
                  (0, a.jsxs)("div", {
                    style: {
                      color: "#FFFFFF",
                      textShadow: "0px 0px 6px #AFFFE6",
                      fontFamily: "Rubik",
                    },
                    className: "font-bold text-[48px] text-center",
                    children: [
                      (0, a.jsx)(d.Ay, {
                        start: 0,
                        end: s,
                        duration: 1,
                        decimals: 2,
                        decimal: ".",
                      }),
                      " IB",
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                style: { color: "#F8F8F8F2", fontFamily: "Rubik" },
                className:
                  "absolute top-[58%] left-1/2 font-normal text-transparent text-[14px] text-center flex",
                children: "Hashrate",
              }),
            ],
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className:
                "hidden sm:flex w-[338px] h-[285px] bg-[#76767629] backdrop-blur-[58px] justify-center items-center rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)] relative",
              children: (0, a.jsx)(i, {}),
            }),
            (0, a.jsx)("div", {
              className: "total-right",
              style: { overflow: "hidden" },
              children: (0, a.jsx)("div", {
                className: "total-right-container",
                children: (0, a.jsx)("div", {
                  className:
                    "w-[338px] h-[285px] bg-[#76767629] backdrop-blur-[58px] flex justify-center items-center rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)] relative",
                  children: (0, a.jsx)(i, {}),
                }),
              }),
            }),
          ],
        });
      }
      function h() {
        return (0, a.jsxs)("div", {
          className:
            "absolute sm:gap-[50px] gap-[110px] lg:mt-[0px] mt-[50px] w-full sm:justify-between justify-center max-w-[1029px] flex flex-col lg:flex-row top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[30] items-center",
          children: [
            (0, a.jsx)(o.P.div, {
              initial: { x: "-100%", opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { duration: 0.6, ease: "easeOut" },
              children: (0, a.jsx)(c, {}),
            }),
            (0, a.jsx)(o.P.div, {
              initial: { x: "100%", opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { duration: 0.6, ease: "easeOut" },
              children: (0, a.jsx)(p, {}),
            }),
          ],
        });
      }
      function m() {
        return (0, a.jsxs)("section", {
          className: "relative w-full min-h-[770px]",
          children: [
            (0, a.jsx)("div", {
              className:
                "relative w-full h-full flex justify-center items-center overflow-x-hidden",
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
                "absolute w-full flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 items-center",
            }),
            (0, a.jsx)(l.default, {
              className: "absolute top-0 left-0 w-full h-full z-[20]",
              src: "/assets/images/bright_pants.svg",
              alt: "",
              width: 0,
              height: 0,
              priority: !0,
              style: { objectFit: "cover", filter: "brightness(0.7)" },
            }),
            (0, a.jsx)(l.default, {
              className:
                "absolute left-1/2 transform -translate-x-1/2 z-[21] lg:bottom-[190px] bottom-[100px]",
              src: "/assets/images/galaxy.svg",
              alt: "",
              width: 960,
              height: 540,
              priority: !0,
              style: { transform: "translate(-50%, 50%)" },
            }),
            (0, a.jsx)(l.default, {
              className: "absolute z-[20]",
              src: "/assets/images/bg_gradient.png",
              alt: "",
              width: 0,
              height: 0,
              priority: !0,
              style: { width: "100%", height: "100%", bottom: "0px" },
            }),
            (0, a.jsx)(h, {}),
          ],
        });
      }
      s(7979);
      let u = {
          src: "/_next/static/media/card-bg.7631121b.png",
          height: 444,
          width: 329,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAG1BMVEVMaXErLCwPDw8rLSwMDAwlJiYnKiotLS0sLCyIhS1OAAAACXRSTlMAUiGLC91taz+qVC5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nGNgYGBmZgABRkYwBQGMrKwcDAxMTGzsDAwMTCxgMQgJBQAGagA3TLYcnAAAAABJRU5ErkJggg==",
          blurWidth: 6,
          blurHeight: 8,
        },
        g = {
          src: "/_next/static/media/card-bg-2.1ffcf902.png",
          height: 444,
          width: 330,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAGFBMVEUqMDAODg6Ijo6JkJAoKiosLS0nJyctLS2jtvPZAAAACHRSTlMBIYpZ3WxHPnMFbXoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAmSURBVHicY2BgYGJiAAFmZjAFAWwsLOwMDIyMrKwMDAyMSBIwAAAF7QAtg35BOAAAAABJRU5ErkJggg==",
          blurWidth: 6,
          blurHeight: 8,
        };
      s(2685);
      let f = (e) => {
          let { data: t, totalHashRate: s, index: n } = e;
          return (0, a.jsxs)("div", {
            className: "gpu-card",
            children: [
              (0, a.jsx)(l.default, {
                className: "max-lg:hidden",
                src: 1 !== n ? u : g,
                alt: "gpuCard",
              }),
              (0, a.jsx)(l.default, {
                className: "max-md:hidden lg:hidden",
                src: 1 === n || 0 === n ? g : u,
                alt: "gpuCard",
              }),
              (0, a.jsx)(l.default, {
                className: "md:hidden",
                src: 0 !== n ? u : g,
                alt: "gpuCard",
              }),
              (0, a.jsxs)("div", {
                className: "info",
                children: [
                  (0, a.jsxs)("div", {
                    className: "name",
                    children: [
                      (0, a.jsx)("span", { children: t.brand }),
                      (0, a.jsx)("span", { children: t.name }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "statics",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "p",
                        children: [
                          (0, a.jsx)("span", { children: "Quantity" }),
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(d.Ay, {
                              start: 0,
                              end: t.quantity,
                              duration: 1,
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "p",
                        children: [
                          (0, a.jsx)("span", { children: "Staking" }),
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(d.Ay, {
                              start: 0,
                              end: t.staking,
                              duration: 1,
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "p",
                        children: [
                          (0, a.jsx)("span", { children: "30 days ROI" }),
                          (0, a.jsxs)("span", {
                            children: [
                              (0, a.jsx)(d.Ay, {
                                start: 0,
                                end: Number(
                                  (() => {
                                    if (0 == t.staking) return 0;
                                    let e = (t.ib / s) * 625e3;
                                    return (
                                      (((t.ifx + 30 * e) * 0.1) /
                                        (0.05 * t.ifx)) *
                                      100
                                    );
                                  })().toFixed(2)
                                ),
                                duration: 1,
                                decimals: 2,
                                decimal: ".",
                              }),
                              "%",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        b = () => {
          let [e, t] = (0, r.useState)([]);
          (0, r.useEffect)(() => {
            (async () => {
              try {
                let e = await fetch("https://inferix.io/api/gpu-info");
                if (!e.ok) throw Error("Failed to fetch GPUs");
                let s = await e.json();
                t(s);
              } catch (e) {
                console.error(e);
              }
            })();
          }, []);
          let [s, n] = (0, r.useState)(0);
          (0, r.useEffect)(() => {
            e.length > 0 &&
              n(
                e.reduce(
                  (e, t) =>
                    e +
                    (null == t ? void 0 : t.staking) *
                      (null == t ? void 0 : t.ib),
                  0
                )
              );
          }, [e]);
          let [i, l] = (0, r.useState)(!1),
            [o, x] = (0, r.useState)(window.innerWidth),
            [c, d] = (0, r.useState)(3);
          (0, r.useEffect)(() => {
            let e = () => {
              x(window.innerWidth);
            };
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
            (0, r.useEffect)(() => {
              o >= 768 && o < 1024 ? d(4) : d(3);
            }, [o]);
          let [p, h] = (0, r.useState)([...e.slice(0, c)]);
          return (
            (0, r.useEffect)(() => {
              i ? h([...e]) : h([...e.slice(0, c)]);
            }, [i, c, e]),
            (0, a.jsxs)("div", {
              className: "gpu-container",
              children: [
                (0, a.jsx)("div", {
                  className: "gpu-grid",
                  children: p.map((e, t) =>
                    (0, a.jsx)(f, { data: e, totalHashRate: s, index: t }, t)
                  ),
                }),
                (0, a.jsxs)("div", {
                  className: "showmore",
                  children: [
                    (0, a.jsx)("span", {}),
                    (0, a.jsx)("button", {
                      onClick: () => {
                        l(!i);
                      },
                      children: i ? "Show less" : "Show more",
                    }),
                  ],
                }),
              ],
            })
          );
        };
      s(2698);
      let j = (e) => {
          let { handleClickRegister: t, handleClickDocOne: s } = e,
            n = (e) => {
              let {
                isMobile: n,
                imageSrc: i,
                containerClass: r,
                imageClass: o,
                buttonContainerClass: c,
              } = e;
              return (0, a.jsxs)("div", {
                className: r,
                children: [
                  (0, a.jsx)(l.default, {
                    className: o,
                    src: i,
                    alt: n ? "education_mb" : "education",
                    width: 400,
                    height: 356,
                    priority: !0,
                  }),
                  (0, a.jsxs)("div", {
                    className: c,
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "text-[#F8F8F8F2] font-medium text-[18px] cursor-default text-center",
                        children: "GPU Mining Registration Port",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "w-full items-center flex flex-col gap-[16px]",
                        children: [
                          (0, a.jsx)(x, {
                            content: "Register now",
                            onClick: t,
                            isActive: !0,
                            stylesContent: {
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                            },
                            width: "130px",
                            height: "36px",
                            backgroundColor: "#01CAAA",
                            hoverBackgroundColor: "#7EFFB2CF",
                            hoverTextColor: "black",
                            textColor: "black",
                          }),
                          (0, a.jsx)(x, {
                            content: "Docs",
                            onClick: s,
                            isActive: !0,
                            stylesContent: {
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                            },
                            width: "130px",
                            height: "36px",
                            backgroundColor: "black",
                            hoverBackgroundColor: "#7EFFB2CF",
                            hoverTextColor: "black",
                            textColor: "#FFFFFF",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(n, {
                isMobile: !1,
                imageSrc: "/assets/images/dashboard/education.png",
                containerClass:
                  "w-[100%] lg:w-[497px] h-[356px] hidden sm:flex lg:justify-start items-center    bg-[#76767629] backdrop-blur-[58px] rounded-[8px]    border-b-[2px] sm:border-[0px] border-[#25272670] justify-center",
                imageClass: "object-contain",
                buttonContainerClass:
                  "h-[152px] ml-[-80px] mt-[-55px] w-[159px] items-center justify-start sm:justify-between top-[270px] sm:top-[108px] sm:left-[315px] flex flex-col lg:items-start text-center sm:text-left gap-[24px]",
              }),
              (0, a.jsx)(n, {
                isMobile: !0,
                imageSrc: "/assets/images/dashboard/education_mb.png",
                containerClass:
                  "w-[100%] sm:hidden lg:w-[497px] justify-center h-[444px] items-center bg-[#76767629] backdrop-blur-[58px] flex lg:justify-start  rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)]",
                imageClass: "object-contain mt-[50px]",
                buttonContainerClass:
                  "absolute h-[152px] w-[159px] bottom-[7%] flex flex-col text-center gap-[24px]",
              }),
            ],
          });
        },
        w = (e) => {
          let { handleClickRent: t, handleClickDocTwo: s } = e,
            n = (e) => {
              let {
                isMobile: n,
                imageSrc: i,
                containerClass: r,
                imageClass: o,
                buttonContainerClass: c,
              } = e;
              return (0, a.jsxs)("div", {
                className: r,
                children: [
                  (0, a.jsx)(l.default, {
                    className: o,
                    src: i,
                    alt: n ? "commands_mb.png" : "commands.png",
                    width: n ? 350 : 400,
                    height: 356,
                    priority: !0,
                  }),
                  (0, a.jsxs)("div", {
                    className: c,
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "text-[#F8F8F8F2] font-medium text-[18px] cursor-default text-center",
                        children: "GPU Renting Joining Port",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "w-full items-center flex flex-col gap-[16px]",
                        children: [
                          (0, a.jsx)(x, {
                            content: "Rent now",
                            onClick: t,
                            isActive: !0,
                            stylesContent: {
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                            },
                            width: "130px",
                            height: "36px",
                            backgroundColor: "#01CAAA",
                            hoverBackgroundColor: "#7EFFB2CF",
                            hoverTextColor: "black",
                            textColor: "black",
                          }),
                          (0, a.jsx)(x, {
                            content: "Docs",
                            onClick: s,
                            isActive: !0,
                            stylesContent: {
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                            },
                            width: "130px",
                            height: "36px",
                            backgroundColor: "black",
                            hoverBackgroundColor: "#7EFFB2CF",
                            hoverTextColor: "black",
                            textColor: "#FFFFFF",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(n, {
                isMobile: !1,
                imageSrc: "/assets/images/dashboard/commands.png",
                containerClass:
                  "w-[100%] lg:w-[497px] h-[356px] hidden sm:flex lg:justify-start items-center    bg-[#76767629] backdrop-blur-[58px] rounded-[8px]    border-b-[2px] sm:border-[0px] border-[#25272670] justify-center",
                imageClass: "object-contain",
                buttonContainerClass:
                  "h-[152px] ml-[-80px] mt-[-55px] w-[159px] items-center justify-start sm:justify-between top-[270px] sm:top-[108px] sm:left-[315px] flex flex-col lg:items-start text-center sm:text-left gap-[24px]",
              }),
              (0, a.jsx)(n, {
                isMobile: !0,
                imageSrc: "/assets/images/dashboard/commands_mb.png",
                containerClass:
                  "w-[100%] sm:hidden lg:w-[497px] justify-center h-[444px] items-center bg-[#76767629] backdrop-blur-[58px] flex lg:justify-start  rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)]",
                imageClass: "object-contain -mt-[82px]",
                buttonContainerClass:
                  "absolute h-[152px] w-[159px] bottom-[7%] flex flex-col text-center gap-[24px]",
              }),
            ],
          });
        };
      function A() {
        return (0, a.jsxs)("div", {
          className: "gap-[8px] w-[100%] flex flex-col lg:flex-row",
          children: [
            (0, a.jsx)(j, {
              handleClickRegister: () => {
                window.open("https://cloud.inferix.io/", "_blank");
              },
              handleClickDocOne: () => {
                window.open(
                  "https://hajans-organization123.gitbook.io/inferix-decentralized-gpu/inferix-testnet-1/adding-gpus-to-the-network",
                  "_blank"
                );
              },
            }),
            (0, a.jsx)(w, {
              handleClickRent: () => {
                window.open("https://cloud.inferix.io/", "_blank");
              },
              handleClickDocTwo: () => {
                window.open(
                  "https://hajans-organization123.gitbook.io/inferix-decentralized-gpu/inferix-testnet-1/renting-gpu-devices",
                  "_blank"
                );
              },
            }),
          ],
        });
      }
      function F() {
        return (0, a.jsxs)("div", {
          className:
            "w-[100%] lg:w-[1002px] h-[444px] sm:h-[356px] flex flex-col sm:flex-row items-center bg-[#76767629] backdrop-blur-[58px] rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)] justify-evenly",
          children: [
            (0, a.jsx)(l.default, {
              className: "object-contain block sm:hidden",
              src: "/assets/images/dashboard/sentiment_mb.png",
              alt: "sentiment_mb",
              width: 364,
              height: 304,
              priority: !0,
            }),
            (0, a.jsx)(l.default, {
              className: "object-contain hidden sm:block",
              src: "/assets/images/dashboard/sentiment.png",
              alt: "sentiment",
              width: 300,
              height: 300,
              priority: !0,
            }),
            (0, a.jsxs)("div", {
              className:
                "h-[152px] w-[246px] sm:w-[300px] items-center flex flex-col text-center gap-[24px] bottom-[-6%] sm:top-[0] sm:relative absolute",
              children: [
                (0, a.jsx)("span", {
                  className: "text-[#F8F8F8F2] font-medium text-[18px]",
                  children:
                    "Guide to participate in the Staking & Mining Program",
                }),
                (0, a.jsx)("div", {
                  className: "w-full flex justify-center",
                  children: (0, a.jsx)(x, {
                    content: "Docs",
                    onClick: () => {
                      window.open(
                        "https://hajans-organization123.gitbook.io/inferix-decentralized-gpu/inferix-testnet-1/gpu-staking",
                        "_blank"
                      );
                    },
                    isActive: !0,
                    stylesContent: {
                      fontSize: "14px",
                      fontFamily: "Inter, sans-serif",
                    },
                    width: "130px",
                    height: "36px",
                    backgroundColor: "black",
                    hoverBackgroundColor: "#7EFFB2CF",
                    hoverTextColor: "black",
                    textColor: "#FFFFFF",
                  }),
                }),
              ],
            }),
            (0, a.jsx)(l.default, {
              className: "object-contain hidden sm:block",
              src: "/assets/images/dashboard/smartHome.png",
              alt: "smartHome",
              width: 300,
              height: 300,
              priority: !0,
            }),
          ],
        });
      }
      function v(e) {
        let { isInViewport: t } = e,
          [s, n] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
          let e = () => {
            n(window.innerWidth <= 1e3);
          };
          return (
            window.addEventListener("resize", e),
            e(),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        s)
          ? (0, a.jsx)("div", {
              className: "product",
              style: { overflow: "hidden" },
              children: (0, a.jsxs)("div", {
                className: "product-container",
                children: [(0, a.jsx)(A, {}), (0, a.jsx)(F, {})],
              }),
            })
          : (0, a.jsx)("div", {
              className: "product",
              style: { overflow: "hidden" },
              children: (0, a.jsxs)("div", {
                className: "product-container",
                children: [
                  (0, a.jsx)(o.P.div, {
                    style: { overflow: "hidden", width: "100%" },
                    initial: { x: "-100%", opacity: 0 },
                    animate: t
                      ? { x: 0, opacity: 1 }
                      : { x: "-100%", opacity: 0 },
                    transition: { duration: 0.6, ease: "easeOut" },
                    children: (0, a.jsx)(A, {}),
                  }),
                  (0, a.jsx)(o.P.div, {
                    style: { overflow: "hidden", width: "100%" },
                    initial: { x: "100%", opacity: 0 },
                    animate: t
                      ? { x: 0, opacity: 1 }
                      : { x: "100%", opacity: 0 },
                    transition: { duration: 0.6, ease: "easeOut" },
                    children: (0, a.jsx)(F, {}),
                  }),
                ],
              }),
            });
      }
      var y = s(4370),
        k = s(5752);
      let C = () => {
        let e = new n.E({ defaultOptions: { queries: { staleTime: 1 / 0 } } }),
          t = (0, r.useRef)(null),
          [s, l] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                e[0].isIntersecting && l(!0);
              },
              { threshold: 0.2 }
            );
            return (
              t.current && e.observe(t.current),
              () => {
                t.current && e.unobserve(t.current);
              }
            );
          }, []),
          (0, a.jsxs)(i.Ht, {
            client: e,
            children: [
              (0, a.jsx)(k.A, {}),
              (0, a.jsx)(m, {}),
              (0, a.jsx)(b, {}),
              (0, a.jsx)("div", {
                className:
                  "w-full h-full flex flex-col justify-center items-center bg-black gap-1 px-2",
                ref: t,
                children: (0, a.jsx)(v, { isInViewport: s }),
              }),
              (0, a.jsx)(y.A, {}),
            ],
          })
        );
      };
    },
    2685: () => {},
    7979: () => {},
    2698: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [315, 433, 154, 805, 441, 517, 358], () => t(2095)), (_N_E = e.O());
  },
]);
