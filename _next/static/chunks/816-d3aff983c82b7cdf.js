(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [816],
  {
    7396: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => s.a });
      var r = i(4839),
        s = i.n(r);
    },
    5483: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        i(6573);
      let r = function (e) {
        for (
          var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          i[r - 1] = arguments[r];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8929: (e, t, i) => {
      "use strict";
      function r(e, t, i, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        i(6573),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    4839: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return E;
          },
        });
      let r = i(306),
        s = i(5155),
        n = r._(i(2115)),
        a = i(2745),
        l = i(9821),
        o = i(180),
        d = i(2170),
        u = i(5483),
        c = i(3576),
        p = i(1394),
        h = i(4116),
        f = i(8929),
        m = i(9544),
        g = i(4445),
        v = i(5353),
        b = new Set();
      function y(e, t, i, r, s, n) {
        if ("undefined" != typeof window && (n || (0, l.isLocalURL)(t))) {
          if (!r.bypassPrefetchedCheck && !n) {
            let s =
              t +
              "%" +
              i +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (b.has(s)) return;
            b.add(s);
          }
          (async () => (n ? e.prefetch(t, s) : e.prefetch(t, i, r)))().catch(
            (e) => {}
          );
        }
      }
      function w(e) {
        return "string" == typeof e ? e : (0, o.formatUrl)(e);
      }
      let E = n.default.forwardRef(function (e, t) {
        let i, r;
        let {
          href: o,
          as: b,
          children: E,
          prefetch: S = null,
          passHref: T,
          replace: x,
          shallow: _,
          scroll: C,
          locale: P,
          onClick: M,
          onMouseEnter: O,
          onTouchStart: A,
          legacyBehavior: L = !1,
          ...I
        } = e;
        (i = E),
          L &&
            ("string" == typeof i || "number" == typeof i) &&
            (i = (0, s.jsx)("a", { children: i }));
        let R = n.default.useContext(c.RouterContext),
          k = n.default.useContext(p.AppRouterContext),
          N = null != R ? R : k,
          D = !R,
          j = !1 !== S,
          z = null === S ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: G, as: F } = n.default.useMemo(() => {
            if (!R) {
              let e = w(o);
              return { href: e, as: b ? w(b) : e };
            }
            let [e, t] = (0, a.resolveHref)(R, o, !0);
            return { href: e, as: b ? (0, a.resolveHref)(R, b) : t || e };
          }, [R, o, b]),
          $ = n.default.useRef(G),
          B = n.default.useRef(F);
        L && (r = n.default.Children.only(i));
        let V = L ? r && "object" == typeof r && r.ref : t,
          [H, W, X] = (0, h.useIntersection)({ rootMargin: "200px" }),
          U = n.default.useCallback(
            (e) => {
              (B.current !== F || $.current !== G) &&
                (X(), (B.current = F), ($.current = G)),
                H(e);
            },
            [F, G, X, H]
          ),
          q = (0, v.useMergedRef)(U, V);
        n.default.useEffect(() => {
          N && W && j && y(N, G, F, { locale: P }, { kind: z }, D);
        }, [F, G, W, P, j, null == R ? void 0 : R.locale, N, D, z]);
        let Y = {
          ref: q,
          onClick(e) {
            L || "function" != typeof M || M(e),
              L &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              N &&
                !e.defaultPrevented &&
                (function (e, t, i, r, s, a, o, d, u) {
                  let { nodeName: c } = e.currentTarget;
                  if (
                    "A" === c.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!u && !(0, l.isLocalURL)(i)))
                  )
                    return;
                  e.preventDefault();
                  let p = () => {
                    let e = null == o || o;
                    "beforePopState" in t
                      ? t[s ? "replace" : "push"](i, r, {
                          shallow: a,
                          locale: d,
                          scroll: e,
                        })
                      : t[s ? "replace" : "push"](r || i, { scroll: e });
                  };
                  u ? n.default.startTransition(p) : p();
                })(e, N, G, F, x, _, C, P, D);
          },
          onMouseEnter(e) {
            L || "function" != typeof O || O(e),
              L &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              N &&
                (j || !D) &&
                y(
                  N,
                  G,
                  F,
                  { locale: P, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: z },
                  D
                );
          },
          onTouchStart: function (e) {
            L || "function" != typeof A || A(e),
              L &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              N &&
                (j || !D) &&
                y(
                  N,
                  G,
                  F,
                  { locale: P, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: z },
                  D
                );
          },
        };
        if ((0, d.isAbsoluteUrl)(F)) Y.href = F;
        else if (!L || T || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== P ? P : null == R ? void 0 : R.locale,
            t =
              (null == R ? void 0 : R.isLocaleDomain) &&
              (0, f.getDomainLocale)(
                F,
                e,
                null == R ? void 0 : R.locales,
                null == R ? void 0 : R.domainLocales
              );
          Y.href =
            t ||
            (0, m.addBasePath)(
              (0, u.addLocale)(F, e, null == R ? void 0 : R.defaultLocale)
            );
        }
        return L
          ? n.default.cloneElement(r, Y)
          : (0, s.jsx)("a", { ...I, ...Y, children: i });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8571: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return i;
          },
        });
      let i =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2745: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let r = i(4156),
        s = i(180),
        n = i(1673),
        a = i(2170),
        l = i(6573),
        o = i(9821),
        d = i(1885),
        u = i(1605);
      function c(e, t, i) {
        let c;
        let p = "string" == typeof t ? t : (0, s.formatWithValidation)(t),
          h = p.match(/^[a-zA-Z]{1,}:\/\//),
          f = h ? p.slice(h[0].length) : p;
        if ((f.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              p +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, a.normalizeRepeatedSlashes)(f);
          p = (h ? h[0] : "") + t;
        }
        if (!(0, o.isLocalURL)(p)) return i ? [p] : p;
        try {
          c = new URL(p.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          c = new URL("/", "http://n");
        }
        try {
          let e = new URL(p, c);
          e.pathname = (0, l.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, d.isDynamicRoute)(e.pathname) && e.searchParams && i) {
            let i = (0, r.searchParamsToUrlQuery)(e.searchParams),
              { result: a, params: l } = (0, u.interpolateAs)(
                e.pathname,
                e.pathname,
                i
              );
            a &&
              (t = (0, s.formatWithValidation)({
                pathname: a,
                hash: e.hash,
                query: (0, n.omit)(i, l),
              }));
          }
          let a =
            e.origin === c.origin ? e.href.slice(e.origin.length) : e.href;
          return i ? [a, t || a] : a;
        } catch (e) {
          return i ? [p] : p;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4116: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = i(2115),
        s = i(8571),
        n = "function" == typeof IntersectionObserver,
        a = new Map(),
        l = [];
      function o(e) {
        let { rootRef: t, rootMargin: i, disabled: o } = e,
          d = o || !n,
          [u, c] = (0, r.useState)(!1),
          p = (0, r.useRef)(null),
          h = (0, r.useCallback)((e) => {
            p.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (n) {
              if (d || u) return;
              let e = p.current;
              if (e && e.tagName)
                return (function (e, t, i) {
                  let {
                    id: r,
                    observer: s,
                    elements: n,
                  } = (function (e) {
                    let t;
                    let i = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = l.find(
                        (e) => e.root === i.root && e.margin === i.margin
                      );
                    if (r && (t = a.get(r))) return t;
                    let s = new Map();
                    return (
                      (t = {
                        id: i,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = s.get(e.target),
                              i = e.isIntersecting || e.intersectionRatio > 0;
                            t && i && t(i);
                          });
                        }, e),
                        elements: s,
                      }),
                      l.push(i),
                      a.set(i, t),
                      t
                    );
                  })(i);
                  return (
                    n.set(e, t),
                    s.observe(e),
                    function () {
                      if ((n.delete(e), s.unobserve(e), 0 === n.size)) {
                        s.disconnect(), a.delete(r);
                        let e = l.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && l.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && c(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: i,
                });
            } else if (!u) {
              let e = (0, s.requestIdleCallback)(() => c(!0));
              return () => (0, s.cancelIdleCallback)(e);
            }
          }, [d, i, t, u, p.current]),
          [
            h,
            u,
            (0, r.useCallback)(() => {
              c(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    918: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          ACTION_SUFFIX: function () {
            return c;
          },
          APP_DIR_ALIAS: function () {
            return I;
          },
          CACHE_ONE_YEAR: function () {
            return x;
          },
          DOT_NEXT_ALIAS: function () {
            return A;
          },
          ESLINT_DEFAULT_DIRS: function () {
            return Q;
          },
          GSP_NO_RETURNED_VALUE: function () {
            return W;
          },
          GSSP_COMPONENT_MEMBER_ERROR: function () {
            return q;
          },
          GSSP_NO_RETURNED_VALUE: function () {
            return X;
          },
          INFINITE_CACHE: function () {
            return _;
          },
          INSTRUMENTATION_HOOK_FILENAME: function () {
            return M;
          },
          MATCHED_PATH_HEADER: function () {
            return s;
          },
          MIDDLEWARE_FILENAME: function () {
            return C;
          },
          MIDDLEWARE_LOCATION_REGEXP: function () {
            return P;
          },
          NEXT_BODY_SUFFIX: function () {
            return f;
          },
          NEXT_CACHE_IMPLICIT_TAG_ID: function () {
            return T;
          },
          NEXT_CACHE_REVALIDATED_TAGS_HEADER: function () {
            return v;
          },
          NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function () {
            return b;
          },
          NEXT_CACHE_SOFT_TAGS_HEADER: function () {
            return g;
          },
          NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function () {
            return S;
          },
          NEXT_CACHE_TAGS_HEADER: function () {
            return m;
          },
          NEXT_CACHE_TAG_MAX_ITEMS: function () {
            return w;
          },
          NEXT_CACHE_TAG_MAX_LENGTH: function () {
            return E;
          },
          NEXT_DATA_SUFFIX: function () {
            return p;
          },
          NEXT_INTERCEPTION_MARKER_PREFIX: function () {
            return r;
          },
          NEXT_META_SUFFIX: function () {
            return h;
          },
          NEXT_QUERY_PARAM_PREFIX: function () {
            return i;
          },
          NEXT_RESUME_HEADER: function () {
            return y;
          },
          NON_STANDARD_NODE_ENV: function () {
            return Y;
          },
          PAGES_DIR_ALIAS: function () {
            return O;
          },
          PRERENDER_REVALIDATE_HEADER: function () {
            return n;
          },
          PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function () {
            return a;
          },
          PUBLIC_DIR_MIDDLEWARE_CONFLICT: function () {
            return G;
          },
          ROOT_DIR_ALIAS: function () {
            return L;
          },
          RSC_ACTION_CLIENT_WRAPPER_ALIAS: function () {
            return z;
          },
          RSC_ACTION_ENCRYPTION_ALIAS: function () {
            return j;
          },
          RSC_ACTION_PROXY_ALIAS: function () {
            return N;
          },
          RSC_ACTION_VALIDATE_ALIAS: function () {
            return k;
          },
          RSC_CACHE_WRAPPER_ALIAS: function () {
            return D;
          },
          RSC_MOD_REF_PROXY_ALIAS: function () {
            return R;
          },
          RSC_PREFETCH_SUFFIX: function () {
            return l;
          },
          RSC_SEGMENTS_DIR_SUFFIX: function () {
            return o;
          },
          RSC_SEGMENT_SUFFIX: function () {
            return d;
          },
          RSC_SUFFIX: function () {
            return u;
          },
          SERVER_PROPS_EXPORT_ERROR: function () {
            return H;
          },
          SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function () {
            return $;
          },
          SERVER_PROPS_SSG_CONFLICT: function () {
            return B;
          },
          SERVER_RUNTIME: function () {
            return Z;
          },
          SSG_FALLBACK_EXPORT_ERROR: function () {
            return K;
          },
          SSG_GET_INITIAL_PROPS_CONFLICT: function () {
            return F;
          },
          STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function () {
            return V;
          },
          UNSTABLE_REVALIDATE_RENAME_ERROR: function () {
            return U;
          },
          WEBPACK_LAYERS: function () {
            return ee;
          },
          WEBPACK_RESOURCE_QUERIES: function () {
            return et;
          },
        });
      let i = "nxtP",
        r = "nxtI",
        s = "x-matched-path",
        n = "x-prerender-revalidate",
        a = "x-prerender-revalidate-if-generated",
        l = ".prefetch.rsc",
        o = ".segments",
        d = ".segment.rsc",
        u = ".rsc",
        c = ".action",
        p = ".json",
        h = ".meta",
        f = ".body",
        m = "x-next-cache-tags",
        g = "x-next-cache-soft-tags",
        v = "x-next-revalidated-tags",
        b = "x-next-revalidate-tag-token",
        y = "next-resume",
        w = 64,
        E = 256,
        S = 1024,
        T = "_N_T_",
        x = 31536e3,
        _ = 0xfffffffe,
        C = "middleware",
        P = `(?:src/)?${C}`,
        M = "instrumentation",
        O = "private-next-pages",
        A = "private-dot-next",
        L = "private-next-root-dir",
        I = "private-next-app-dir",
        R = "private-next-rsc-mod-ref-proxy",
        k = "private-next-rsc-action-validate",
        N = "private-next-rsc-server-reference",
        D = "private-next-rsc-cache-wrapper",
        j = "private-next-rsc-action-encryption",
        z = "private-next-rsc-action-client-wrapper",
        G =
          "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",
        F =
          "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",
        $ =
          "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",
        B =
          "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",
        V =
          "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",
        H =
          "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",
        W =
          "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",
        X =
          "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",
        U =
          "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",
        q =
          "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",
        Y =
          'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',
        K =
          "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",
        Q = ["app", "pages", "components", "lib", "src"],
        Z = {
          edge: "edge",
          experimentalEdge: "experimental-edge",
          nodejs: "nodejs",
        },
        J = {
          shared: "shared",
          reactServerComponents: "rsc",
          serverSideRendering: "ssr",
          actionBrowser: "action-browser",
          api: "api",
          middleware: "middleware",
          instrument: "instrument",
          edgeAsset: "edge-asset",
          appPagesBrowser: "app-pages-browser",
        },
        ee = {
          ...J,
          GROUP: {
            builtinReact: [J.reactServerComponents, J.actionBrowser],
            serverOnly: [
              J.reactServerComponents,
              J.actionBrowser,
              J.instrument,
              J.middleware,
            ],
            neutralTarget: [J.api],
            clientOnly: [J.serverSideRendering, J.appPagesBrowser],
            bundled: [
              J.reactServerComponents,
              J.actionBrowser,
              J.serverSideRendering,
              J.appPagesBrowser,
              J.shared,
              J.instrument,
            ],
            appPages: [
              J.reactServerComponents,
              J.serverSideRendering,
              J.appPagesBrowser,
              J.actionBrowser,
            ],
          },
        },
        et = {
          edgeSSREntry: "__next_edge_ssr_entry__",
          metadata: "__next_metadata__",
          metadataRoute: "__next_metadata_route__",
          metadataImageMeta: "__next_metadata_image_meta__",
        };
    },
    6832: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function s(e) {
        return i.test(e) ? e.replace(r, "\\$&") : e;
      }
    },
    180: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          formatUrl: function () {
            return n;
          },
          formatWithValidation: function () {
            return l;
          },
          urlObjectKeys: function () {
            return a;
          },
        });
      let r = i(9955)._(i(4156)),
        s = /https?|ftp|gopher|file/;
      function n(e) {
        let { auth: t, hostname: i } = e,
          n = e.protocol || "",
          a = e.pathname || "",
          l = e.hash || "",
          o = e.query || "",
          d = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (d = t + e.host)
            : i &&
              ((d = t + (~i.indexOf(":") ? "[" + i + "]" : i)),
              e.port && (d += ":" + e.port)),
          o &&
            "object" == typeof o &&
            (o = String(r.urlQueryToSearchParams(o)));
        let u = e.search || (o && "?" + o) || "";
        return (
          n && !n.endsWith(":") && (n += ":"),
          e.slashes || ((!n || s.test(n)) && !1 !== d)
            ? ((d = "//" + (d || "")), a && "/" !== a[0] && (a = "/" + a))
            : d || (d = ""),
          l && "#" !== l[0] && (l = "#" + l),
          u && "?" !== u[0] && (u = "?" + u),
          "" +
            n +
            d +
            (a = a.replace(/[?#]/g, encodeURIComponent)) +
            (u = u.replace("#", "%23")) +
            l
        );
      }
      let a = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function l(e) {
        return n(e);
      }
    },
    1885: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          getSortedRouteObjects: function () {
            return r.getSortedRouteObjects;
          },
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return s.isDynamicRoute;
          },
        });
      let r = i(8931),
        s = i(4895);
    },
    1605: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = i(8827),
        s = i(2630);
      function n(e, t, i) {
        let n = "",
          a = (0, s.getRouteRegex)(e),
          l = a.groups,
          o = (t !== e ? (0, r.getRouteMatcher)(a)(t) : "") || i;
        n = e;
        let d = Object.keys(l);
        return (
          d.every((e) => {
            let t = o[e] || "",
              { repeat: i, optional: r } = l[e],
              s = "[" + (i ? "..." : "") + e + "]";
            return (
              r && (s = (t ? "" : "/") + "[" + s + "]"),
              i && !Array.isArray(t) && (t = [t]),
              (r || e in o) &&
                (n =
                  n.replace(
                    s,
                    i
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (n = ""),
          { params: d, result: n }
        );
      }
    },
    4895: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = i(8456),
        s = /\/\[[^/]+?\](?=\/|$)/;
      function n(e) {
        return (
          (0, r.isInterceptionRouteAppPath)(e) &&
            (e = (0, r.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          s.test(e)
        );
      }
    },
    9821: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = i(2170),
        s = i(6003);
      function n(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            i = new URL(e, t);
          return i.origin === t && (0, s.hasBasePath)(i.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    1673: (e, t) => {
      "use strict";
      function i(e, t) {
        let i = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (i[r] = e[r]);
          }),
          i
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    4156: (e, t) => {
      "use strict";
      function i(e) {
        let t = {};
        return (
          e.forEach((e, i) => {
            void 0 === t[i]
              ? (t[i] = e)
              : Array.isArray(t[i])
              ? t[i].push(e)
              : (t[i] = [t[i], e]);
          }),
          t
        );
      }
      function r(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function s(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [i, s] = e;
            Array.isArray(s)
              ? s.forEach((e) => t.append(i, r(e)))
              : t.set(i, r(s));
          }),
          t
        );
      }
      function n(e) {
        for (
          var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          i[r - 1] = arguments[r];
        return (
          i.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, i) => e.append(i, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          assign: function () {
            return n;
          },
          searchParamsToUrlQuery: function () {
            return i;
          },
          urlQueryToSearchParams: function () {
            return s;
          },
        });
    },
    8827: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = i(2170);
      function s(e) {
        let { re: t, groups: i } = e;
        return (e) => {
          let s = t.exec(e);
          if (!s) return !1;
          let n = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            a = {};
          return (
            Object.keys(i).forEach((e) => {
              let t = i[e],
                r = s[t.pos];
              void 0 !== r &&
                (a[e] = ~r.indexOf("/")
                  ? r.split("/").map((e) => n(e))
                  : t.repeat
                  ? [n(r)]
                  : n(r));
            }),
            a
          );
        };
      }
    },
    2630: (e, t, i) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return m;
          },
          getNamedRouteRegex: function () {
            return f;
          },
          getRouteRegex: function () {
            return c;
          },
          parseParameter: function () {
            return o;
          },
        });
      let r = i(918),
        s = i(8456),
        n = i(6832),
        a = i(1246),
        l = /\[((?:\[.*\])|.+)\]/;
      function o(e) {
        let t = e.match(l);
        return t ? d(t[1]) : d(e);
      }
      function d(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let i = e.startsWith("...");
        return i && (e = e.slice(3)), { key: e, repeat: i, optional: t };
      }
      function u(e) {
        let t = (0, a.removeTrailingSlash)(e).slice(1).split("/"),
          i = {},
          r = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = s.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                a = e.match(l);
              if (t && a) {
                let { key: e, optional: s, repeat: l } = d(a[1]);
                return (
                  (i[e] = { pos: r++, repeat: l, optional: s }),
                  "/" + (0, n.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!a) return "/" + (0, n.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: s } = d(a[1]);
                return (
                  (i[e] = { pos: r++, repeat: t, optional: s }),
                  t ? (s ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: i,
        };
      }
      function c(e) {
        let { parameterizedRoute: t, groups: i } = u(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: i };
      }
      function p(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: i,
            segment: r,
            routeKeys: s,
            keyPrefix: a,
          } = e,
          { key: l, optional: o, repeat: u } = d(r),
          c = l.replace(/\W/g, "");
        a && (c = "" + a + c);
        let p = !1;
        (0 === c.length || c.length > 30) && (p = !0),
          isNaN(parseInt(c.slice(0, 1))) || (p = !0),
          p && (c = i()),
          a ? (s[c] = "" + a + l) : (s[c] = l);
        let h = t ? (0, n.escapeStringRegexp)(t) : "";
        return u
          ? o
            ? "(?:/" + h + "(?<" + c + ">.+?))?"
            : "/" + h + "(?<" + c + ">.+?)"
          : "/" + h + "(?<" + c + ">[^/]+?)";
      }
      function h(e, t) {
        let i;
        let l = (0, a.removeTrailingSlash)(e).slice(1).split("/"),
          o =
            ((i = 0),
            () => {
              let e = "",
                t = ++i;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          d = {};
        return {
          namedParameterizedRoute: l
            .map((e) => {
              let i = s.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                a = e.match(/\[((?:\[.*\])|.+)\]/);
              if (i && a) {
                let [i] = e.split(a[0]);
                return p({
                  getSafeRouteKey: o,
                  interceptionMarker: i,
                  segment: a[1],
                  routeKeys: d,
                  keyPrefix: t ? r.NEXT_INTERCEPTION_MARKER_PREFIX : void 0,
                });
              }
              return a
                ? p({
                    getSafeRouteKey: o,
                    segment: a[1],
                    routeKeys: d,
                    keyPrefix: t ? r.NEXT_QUERY_PARAM_PREFIX : void 0,
                  })
                : "/" + (0, n.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: d,
        };
      }
      function f(e, t) {
        let i = h(e, t);
        return {
          ...c(e),
          namedRegex: "^" + i.namedParameterizedRoute + "(?:/)?$",
          routeKeys: i.routeKeys,
        };
      }
      function m(e, t) {
        let { parameterizedRoute: i } = u(e),
          { catchAll: r = !0 } = t;
        if ("/" === i) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: s } = h(e, !1);
        return { namedRegex: "^" + s + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    8931: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          getSortedRouteObjects: function () {
            return s;
          },
          getSortedRoutes: function () {
            return r;
          },
        });
      class i {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let i = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              i.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            i.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              i.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              i.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            i
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let s = e[0];
          if (s.startsWith("[") && s.endsWith("]")) {
            let i = s.slice(1, -1),
              a = !1;
            if (
              (i.startsWith("[") &&
                i.endsWith("]") &&
                ((i = i.slice(1, -1)), (a = !0)),
              i.startsWith("…"))
            )
              throw Error(
                "Detected a three-dot character ('…') at ('" +
                  i +
                  "'). Did you mean ('...')?"
              );
            if (
              (i.startsWith("...") && ((i = i.substring(3)), (r = !0)),
              i.startsWith("[") || i.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  i +
                  "')."
              );
            if (i.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  i +
                  "')."
              );
            function n(e, i) {
              if (null !== e && e !== i)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    i +
                    "')."
                );
              t.forEach((e) => {
                if (e === i)
                  throw Error(
                    'You cannot have the same slug name "' +
                      i +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === s.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      i +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(i);
            }
            if (r) {
              if (a) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                n(this.optionalRestSlugName, i),
                  (this.optionalRestSlugName = i),
                  (s = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                n(this.restSlugName, i), (this.restSlugName = i), (s = "[...]");
              }
            } else {
              if (a)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              n(this.slugName, i), (this.slugName = i), (s = "[]");
            }
          }
          this.children.has(s) || this.children.set(s, new i()),
            this.children.get(s)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(e) {
        let t = new i();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
      function s(e, t) {
        let i = {},
          s = [];
        for (let r = 0; r < e.length; r++) {
          let n = t(e[r]);
          (i[n] = r), (s[r] = n);
        }
        return r(s).map((t) => e[i[t]]);
      }
    },
    2170: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          DecodeError: function () {
            return f;
          },
          MiddlewareNotFoundError: function () {
            return b;
          },
          MissingStaticPage: function () {
            return v;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return p;
          },
          ST: function () {
            return h;
          },
          WEB_VITALS: function () {
            return i;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return o;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return l;
          },
          isAbsoluteUrl: function () {
            return n;
          },
          isResSent: function () {
            return d;
          },
          loadGetInitialProps: function () {
            return c;
          },
          normalizeRepeatedSlashes: function () {
            return u;
          },
          stringifyError: function () {
            return y;
          },
        });
      let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(e) {
        let t,
          i = !1;
        return function () {
          for (var r = arguments.length, s = Array(r), n = 0; n < r; n++)
            s[n] = arguments[n];
          return i || ((i = !0), (t = e(...s))), t;
        };
      }
      let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        n = (e) => s.test(e);
      function a() {
        let { protocol: e, hostname: t, port: i } = window.location;
        return e + "//" + t + (i ? ":" + i : "");
      }
      function l() {
        let { href: e } = window.location,
          t = a();
        return e.substring(t.length);
      }
      function o(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function d(e) {
        return e.finished || e.headersSent;
      }
      function u(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function c(e, t) {
        let i = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await c(t.Component, t.ctx) }
            : {};
        let r = await e.getInitialProps(t);
        if (i && d(i)) return r;
        if (!r)
          throw Error(
            '"' +
              o(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.'
          );
        return r;
      }
      let p = "undefined" != typeof performance,
        h =
          p &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class f extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class v extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class b extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function y(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    8689: () => {},
    2252: () => {},
    5476: (e, t, i) => {
      "use strict";
      i.d(t, { Ij: () => d, Vx: () => a, dK: () => o });
      var r = i(9948),
        s = i(6999);
      function n(e, t, i, r) {
        return (
          e.params.createElements &&
            Object.keys(r).forEach((n) => {
              if (!i[n] && !0 === i.auto) {
                let a = (0, s.e)(e.el, `.${r[n]}`)[0];
                a ||
                  (((a = (0, s.c)("div", r[n])).className = r[n]),
                  e.el.append(a)),
                  (i[n] = a),
                  (t[n] = a);
              }
            }),
          i
        );
      }
      function a(e) {
        let { swiper: t, extendParams: i, on: r, emit: a } = e;
        function l(e) {
          let i;
          return e &&
            "string" == typeof e &&
            t.isElement &&
            (i = t.el.querySelector(e) || t.hostEl.querySelector(e))
            ? i
            : (e &&
                ("string" == typeof e &&
                  (i = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                "string" == typeof e &&
                i &&
                i.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                  ? (i = t.el.querySelector(e))
                  : i && 1 === i.length && (i = i[0])),
              e && !i)
            ? e
            : i;
        }
        function o(e, i) {
          let r = t.params.navigation;
          (e = (0, s.m)(e)).forEach((e) => {
            e &&
              (e.classList[i ? "add" : "remove"](...r.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = i),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](r.lockClass));
          });
        }
        function d() {
          let { nextEl: e, prevEl: i } = t.navigation;
          if (t.params.loop) {
            o(i, !1), o(e, !1);
            return;
          }
          o(i, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function u(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), a("navigationPrev"));
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), a("navigationNext"));
        }
        function p() {
          let e = t.params.navigation;
          if (
            ((t.params.navigation = n(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !(e.nextEl || e.prevEl))
          )
            return;
          let i = l(e.nextEl),
            r = l(e.prevEl);
          Object.assign(t.navigation, { nextEl: i, prevEl: r }),
            (i = (0, s.m)(i)),
            (r = (0, s.m)(r));
          let a = (i, r) => {
            i && i.addEventListener("click", "next" === r ? c : u),
              !t.enabled && i && i.classList.add(...e.lockClass.split(" "));
          };
          i.forEach((e) => a(e, "next")), r.forEach((e) => a(e, "prev"));
        }
        function h() {
          let { nextEl: e, prevEl: i } = t.navigation;
          (e = (0, s.m)(e)), (i = (0, s.m)(i));
          let r = (e, i) => {
            e.removeEventListener("click", "next" === i ? c : u),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(" ")
              );
          };
          e.forEach((e) => r(e, "next")), i.forEach((e) => r(e, "prev"));
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          r("init", () => {
            !1 === t.params.navigation.enabled ? f() : (p(), d());
          }),
          r("toEdge fromEdge lock unlock", () => {
            d();
          }),
          r("destroy", () => {
            h();
          }),
          r("enable disable", () => {
            let { nextEl: e, prevEl: i } = t.navigation;
            if (((e = (0, s.m)(e)), (i = (0, s.m)(i)), t.enabled)) {
              d();
              return;
            }
            [...e, ...i]
              .filter((e) => !!e)
              .forEach((e) => e.classList.add(t.params.navigation.lockClass));
          }),
          r("click", (e, i) => {
            let { nextEl: r, prevEl: n } = t.navigation;
            (r = (0, s.m)(r)), (n = (0, s.m)(n));
            let l = i.target,
              o = n.includes(l) || r.includes(l);
            if (t.isElement && !o) {
              let e = i.path || (i.composedPath && i.composedPath());
              e && (o = e.find((e) => r.includes(e) || n.includes(e)));
            }
            if (t.params.navigation.hideOnClick && !o) {
              let e;
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === l || t.pagination.el.contains(l))
              )
                return;
              r.length
                ? (e = r[0].classList.contains(t.params.navigation.hiddenClass))
                : n.length &&
                  (e = n[0].classList.contains(
                    t.params.navigation.hiddenClass
                  )),
                !0 === e ? a("navigationShow") : a("navigationHide"),
                [...r, ...n]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.toggle(t.params.navigation.hiddenClass)
                  );
            }
          });
        let f = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            h();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(" ")
            ),
              p(),
              d();
          },
          disable: f,
          update: d,
          init: p,
          destroy: h,
        });
      }
      function l(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!+\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function o(e) {
        let t,
          { swiper: i, extendParams: r, on: a, emit: o } = e,
          d = "swiper-pagination";
        r({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${d}-bullet`,
            bulletActiveClass: `${d}-bullet-active`,
            modifierClass: `${d}-`,
            currentClass: `${d}-current`,
            totalClass: `${d}-total`,
            hiddenClass: `${d}-hidden`,
            progressbarFillClass: `${d}-progressbar-fill`,
            progressbarOppositeClass: `${d}-progressbar-opposite`,
            clickableClass: `${d}-clickable`,
            lockClass: `${d}-lock`,
            horizontalClass: `${d}-horizontal`,
            verticalClass: `${d}-vertical`,
            paginationDisabledClass: `${d}-disabled`,
          },
        }),
          (i.pagination = { el: null, bullets: [] });
        let u = 0;
        function c() {
          return (
            !i.params.pagination.el ||
            !i.pagination.el ||
            (Array.isArray(i.pagination.el) && 0 === i.pagination.el.length)
          );
        }
        function p(e, t) {
          let { bulletActiveClass: r } = i.params.pagination;
          e &&
            (e = e[`${"prev" === t ? "previous" : "next"}ElementSibling`]) &&
            (e.classList.add(`${r}-${t}`),
            (e = e[`${"prev" === t ? "previous" : "next"}ElementSibling`]) &&
              e.classList.add(`${r}-${t}-${t}`));
        }
        function h(e) {
          let t = e.target.closest(l(i.params.pagination.bulletClass));
          if (!t) return;
          e.preventDefault();
          let r = (0, s.h)(t) * i.params.slidesPerGroup;
          if (i.params.loop) {
            var n, a, o;
            if (i.realIndex === r) return;
            let e =
              ((n = i.realIndex),
              (a = r),
              ((n %= o = i.slides.length), (a %= o) === n + 1)
                ? "next"
                : a === n - 1
                ? "previous"
                : void 0);
            "next" === e
              ? i.slideNext()
              : "previous" === e
              ? i.slidePrev()
              : i.slideToLoop(r);
          } else i.slideTo(r);
        }
        function f() {
          let e, r;
          let n = i.rtl,
            a = i.params.pagination;
          if (c()) return;
          let d = i.pagination.el;
          d = (0, s.m)(d);
          let h =
              i.virtual && i.params.virtual.enabled
                ? i.virtual.slides.length
                : i.slides.length,
            f = i.params.loop
              ? Math.ceil(h / i.params.slidesPerGroup)
              : i.snapGrid.length;
          if (
            (i.params.loop
              ? ((r = i.previousRealIndex || 0),
                (e =
                  i.params.slidesPerGroup > 1
                    ? Math.floor(i.realIndex / i.params.slidesPerGroup)
                    : i.realIndex))
              : void 0 !== i.snapIndex
              ? ((e = i.snapIndex), (r = i.previousSnapIndex))
              : ((r = i.previousIndex || 0), (e = i.activeIndex || 0)),
            "bullets" === a.type &&
              i.pagination.bullets &&
              i.pagination.bullets.length > 0)
          ) {
            let l, o, c;
            let h = i.pagination.bullets;
            if (
              (a.dynamicBullets &&
                ((t = (0, s.f)(
                  h[0],
                  i.isHorizontal() ? "width" : "height",
                  !0
                )),
                d.forEach((e) => {
                  e.style[i.isHorizontal() ? "width" : "height"] = `${
                    t * (a.dynamicMainBullets + 4)
                  }px`;
                }),
                a.dynamicMainBullets > 1 &&
                  void 0 !== r &&
                  ((u += e - (r || 0)) > a.dynamicMainBullets - 1
                    ? (u = a.dynamicMainBullets - 1)
                    : u < 0 && (u = 0)),
                (c =
                  ((o =
                    (l = Math.max(e - u, 0)) +
                    (Math.min(h.length, a.dynamicMainBullets) - 1)) +
                    l) /
                  2)),
              h.forEach((e) => {
                let t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => `${a.bulletActiveClass}${e}`),
                ]
                  .map((e) =>
                    "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              d.length > 1)
            )
              h.forEach((t) => {
                let r = (0, s.h)(t);
                r === e
                  ? t.classList.add(...a.bulletActiveClass.split(" "))
                  : i.isElement && t.setAttribute("part", "bullet"),
                  a.dynamicBullets &&
                    (r >= l &&
                      r <= o &&
                      t.classList.add(
                        ...`${a.bulletActiveClass}-main`.split(" ")
                      ),
                    r === l && p(t, "prev"),
                    r === o && p(t, "next"));
              });
            else {
              let t = h[e];
              if (
                (t && t.classList.add(...a.bulletActiveClass.split(" ")),
                i.isElement &&
                  h.forEach((t, i) => {
                    t.setAttribute(
                      "part",
                      i === e ? "bullet-active" : "bullet"
                    );
                  }),
                a.dynamicBullets)
              ) {
                let e = h[l],
                  t = h[o];
                for (let e = l; e <= o; e += 1)
                  h[e] &&
                    h[e].classList.add(
                      ...`${a.bulletActiveClass}-main`.split(" ")
                    );
                p(e, "prev"), p(t, "next");
              }
            }
            if (a.dynamicBullets) {
              let e = Math.min(h.length, a.dynamicMainBullets + 4),
                r = (t * e - t) / 2 - c * t,
                s = n ? "right" : "left";
              h.forEach((e) => {
                e.style[i.isHorizontal() ? s : "top"] = `${r}px`;
              });
            }
          }
          d.forEach((t, r) => {
            if (
              ("fraction" === a.type &&
                (t.querySelectorAll(l(a.currentClass)).forEach((t) => {
                  t.textContent = a.formatFractionCurrent(e + 1);
                }),
                t.querySelectorAll(l(a.totalClass)).forEach((e) => {
                  e.textContent = a.formatFractionTotal(f);
                })),
              "progressbar" === a.type)
            ) {
              let r;
              r = a.progressbarOpposite
                ? i.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : i.isHorizontal()
                ? "horizontal"
                : "vertical";
              let s = (e + 1) / f,
                n = 1,
                o = 1;
              "horizontal" === r ? (n = s) : (o = s),
                t.querySelectorAll(l(a.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${o})`),
                    (e.style.transitionDuration = `${i.params.speed}ms`);
                });
            }
            "custom" === a.type && a.renderCustom
              ? ((t.innerHTML = a.renderCustom(i, e + 1, f)),
                0 === r && o("paginationRender", t))
              : (0 === r && o("paginationRender", t), o("paginationUpdate", t)),
              i.params.watchOverflow &&
                i.enabled &&
                t.classList[i.isLocked ? "add" : "remove"](a.lockClass);
          });
        }
        function m() {
          let e = i.params.pagination;
          if (c()) return;
          let t =
              i.virtual && i.params.virtual.enabled
                ? i.virtual.slides.length
                : i.grid && i.params.grid.rows > 1
                ? i.slides.length / Math.ceil(i.params.grid.rows)
                : i.slides.length,
            r = i.pagination.el;
          r = (0, s.m)(r);
          let n = "";
          if ("bullets" === e.type) {
            let r = i.params.loop
              ? Math.ceil(t / i.params.slidesPerGroup)
              : i.snapGrid.length;
            i.params.freeMode && i.params.freeMode.enabled && r > t && (r = t);
            for (let t = 0; t < r; t += 1)
              e.renderBullet
                ? (n += e.renderBullet.call(i, t, e.bulletClass))
                : (n += `<${e.bulletElement} ${
                    i.isElement ? 'part="bullet"' : ""
                  } class="${e.bulletClass}"></${e.bulletElement}>`);
          }
          "fraction" === e.type &&
            (n = e.renderFraction
              ? e.renderFraction.call(i, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            "progressbar" === e.type &&
              (n = e.renderProgressbar
                ? e.renderProgressbar.call(i, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
            (i.pagination.bullets = []),
            r.forEach((t) => {
              "custom" !== e.type && (t.innerHTML = n || ""),
                "bullets" === e.type &&
                  i.pagination.bullets.push(
                    ...t.querySelectorAll(l(e.bulletClass))
                  );
            }),
            "custom" !== e.type && o("paginationRender", r[0]);
        }
        function g() {
          let e;
          i.params.pagination = n(
            i,
            i.originalParams.pagination,
            i.params.pagination,
            { el: "swiper-pagination" }
          );
          let t = i.params.pagination;
          t.el &&
            ("string" == typeof t.el &&
              i.isElement &&
              (e = i.el.querySelector(t.el)),
            e ||
              "string" != typeof t.el ||
              (e = [...document.querySelectorAll(t.el)]),
            e || (e = t.el),
            e &&
              0 !== e.length &&
              (i.params.uniqueNavElements &&
                "string" == typeof t.el &&
                Array.isArray(e) &&
                e.length > 1 &&
                (e = [...i.el.querySelectorAll(t.el)]).length > 1 &&
                (e = e.filter((e) => (0, s.a)(e, ".swiper")[0] === i.el)[0]),
              Array.isArray(e) && 1 === e.length && (e = e[0]),
              Object.assign(i.pagination, { el: e }),
              (e = (0, s.m)(e)).forEach((e) => {
                "bullets" === t.type &&
                  t.clickable &&
                  e.classList.add(...(t.clickableClass || "").split(" ")),
                  e.classList.add(t.modifierClass + t.type),
                  e.classList.add(
                    i.isHorizontal() ? t.horizontalClass : t.verticalClass
                  ),
                  "bullets" === t.type &&
                    t.dynamicBullets &&
                    (e.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                    (u = 0),
                    t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                  "progressbar" === t.type &&
                    t.progressbarOpposite &&
                    e.classList.add(t.progressbarOppositeClass),
                  t.clickable && e.addEventListener("click", h),
                  i.enabled || e.classList.add(t.lockClass);
              })));
        }
        function v() {
          let e = i.params.pagination;
          if (c()) return;
          let t = i.pagination.el;
          t &&
            (t = (0, s.m)(t)).forEach((t) => {
              t.classList.remove(e.hiddenClass),
                t.classList.remove(e.modifierClass + e.type),
                t.classList.remove(
                  i.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                e.clickable &&
                  (t.classList.remove(...(e.clickableClass || "").split(" ")),
                  t.removeEventListener("click", h));
            }),
            i.pagination.bullets &&
              i.pagination.bullets.forEach((t) =>
                t.classList.remove(...e.bulletActiveClass.split(" "))
              );
        }
        a("changeDirection", () => {
          if (!i.pagination || !i.pagination.el) return;
          let e = i.params.pagination,
            { el: t } = i.pagination;
          (t = (0, s.m)(t)).forEach((t) => {
            t.classList.remove(e.horizontalClass, e.verticalClass),
              t.classList.add(
                i.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
        }),
          a("init", () => {
            !1 === i.params.pagination.enabled ? b() : (g(), m(), f());
          }),
          a("activeIndexChange", () => {
            void 0 === i.snapIndex && f();
          }),
          a("snapIndexChange", () => {
            f();
          }),
          a("snapGridLengthChange", () => {
            m(), f();
          }),
          a("destroy", () => {
            v();
          }),
          a("enable disable", () => {
            let { el: e } = i.pagination;
            e &&
              (e = (0, s.m)(e)).forEach((e) =>
                e.classList[i.enabled ? "remove" : "add"](
                  i.params.pagination.lockClass
                )
              );
          }),
          a("lock unlock", () => {
            f();
          }),
          a("click", (e, t) => {
            let r = t.target,
              n = (0, s.m)(i.pagination.el);
            if (
              i.params.pagination.el &&
              i.params.pagination.hideOnClick &&
              n &&
              n.length > 0 &&
              !r.classList.contains(i.params.pagination.bulletClass)
            ) {
              if (
                i.navigation &&
                ((i.navigation.nextEl && r === i.navigation.nextEl) ||
                  (i.navigation.prevEl && r === i.navigation.prevEl))
              )
                return;
              !0 === n[0].classList.contains(i.params.pagination.hiddenClass)
                ? o("paginationShow")
                : o("paginationHide"),
                n.forEach((e) =>
                  e.classList.toggle(i.params.pagination.hiddenClass)
                );
            }
          });
        let b = () => {
          i.el.classList.add(i.params.pagination.paginationDisabledClass);
          let { el: e } = i.pagination;
          e &&
            (e = (0, s.m)(e)).forEach((e) =>
              e.classList.add(i.params.pagination.paginationDisabledClass)
            ),
            v();
        };
        Object.assign(i.pagination, {
          enable: () => {
            i.el.classList.remove(i.params.pagination.paginationDisabledClass);
            let { el: e } = i.pagination;
            e &&
              (e = (0, s.m)(e)).forEach((e) =>
                e.classList.remove(i.params.pagination.paginationDisabledClass)
              ),
              g(),
              m(),
              f();
          },
          disable: b,
          render: m,
          update: f,
          init: g,
          destroy: v,
        });
      }
      function d(e) {
        let t,
          i,
          s,
          n,
          a,
          l,
          o,
          d,
          u,
          c,
          { swiper: p, extendParams: h, on: f, emit: m, params: g } = e;
        (p.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
          h({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !1,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          });
        let v = g && g.autoplay ? g.autoplay.delay : 3e3,
          b = g && g.autoplay ? g.autoplay.delay : 3e3,
          y = new Date().getTime();
        function w(e) {
          p &&
            !p.destroyed &&
            p.wrapperEl &&
            e.target === p.wrapperEl &&
            (p.wrapperEl.removeEventListener("transitionend", w),
            !c && (!e.detail || !e.detail.bySwiperTouchMove) && P());
        }
        let E = () => {
            if (p.destroyed || !p.autoplay.running) return;
            p.autoplay.paused ? (n = !0) : n && ((b = s), (n = !1));
            let e = p.autoplay.paused ? s : y + b - new Date().getTime();
            (p.autoplay.timeLeft = e),
              m("autoplayTimeLeft", e, e / v),
              (i = requestAnimationFrame(() => {
                E();
              }));
          },
          S = () => {
            let e;
            if (
              (e =
                p.virtual && p.params.virtual.enabled
                  ? p.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  : p.slides[p.activeIndex])
            )
              return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          },
          T = (e) => {
            if (p.destroyed || !p.autoplay.running) return;
            cancelAnimationFrame(i), E();
            let r = void 0 === e ? p.params.autoplay.delay : e;
            (v = p.params.autoplay.delay), (b = p.params.autoplay.delay);
            let n = S();
            !Number.isNaN(n) &&
              n > 0 &&
              void 0 === e &&
              ((r = n), (v = n), (b = n)),
              (s = r);
            let a = p.params.speed,
              l = () => {
                p &&
                  !p.destroyed &&
                  (p.params.autoplay.reverseDirection
                    ? !p.isBeginning || p.params.loop || p.params.rewind
                      ? (p.slidePrev(a, !0, !0), m("autoplay"))
                      : p.params.autoplay.stopOnLastSlide ||
                        (p.slideTo(p.slides.length - 1, a, !0, !0),
                        m("autoplay"))
                    : !p.isEnd || p.params.loop || p.params.rewind
                    ? (p.slideNext(a, !0, !0), m("autoplay"))
                    : p.params.autoplay.stopOnLastSlide ||
                      (p.slideTo(0, a, !0, !0), m("autoplay")),
                  p.params.cssMode &&
                    ((y = new Date().getTime()),
                    requestAnimationFrame(() => {
                      T();
                    })));
              };
            return (
              r > 0
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    l();
                  }, r)))
                : requestAnimationFrame(() => {
                    l();
                  }),
              r
            );
          },
          x = () => {
            (y = new Date().getTime()),
              (p.autoplay.running = !0),
              T(),
              m("autoplayStart");
          },
          _ = () => {
            (p.autoplay.running = !1),
              clearTimeout(t),
              cancelAnimationFrame(i),
              m("autoplayStop");
          },
          C = (e, i) => {
            if (p.destroyed || !p.autoplay.running) return;
            clearTimeout(t), e || (u = !0);
            let r = () => {
              m("autoplayPause"),
                p.params.autoplay.waitForTransition
                  ? p.wrapperEl.addEventListener("transitionend", w)
                  : P();
            };
            if (((p.autoplay.paused = !0), i)) {
              d && (s = p.params.autoplay.delay), (d = !1), r();
              return;
            }
            (s = (s || p.params.autoplay.delay) - (new Date().getTime() - y)),
              (p.isEnd && s < 0 && !p.params.loop) || (s < 0 && (s = 0), r());
          },
          P = () => {
            (p.isEnd && s < 0 && !p.params.loop) ||
              p.destroyed ||
              !p.autoplay.running ||
              ((y = new Date().getTime()),
              u ? ((u = !1), T(s)) : T(),
              (p.autoplay.paused = !1),
              m("autoplayResume"));
          },
          M = () => {
            if (p.destroyed || !p.autoplay.running) return;
            let e = (0, r.g)();
            "hidden" === e.visibilityState && ((u = !0), C(!0)),
              "visible" === e.visibilityState && P();
          },
          O = (e) => {
            "mouse" === e.pointerType &&
              ((u = !0), (c = !0), p.animating || p.autoplay.paused || C(!0));
          },
          A = (e) => {
            "mouse" === e.pointerType && ((c = !1), p.autoplay.paused && P());
          },
          L = () => {
            p.params.autoplay.pauseOnMouseEnter &&
              (p.el.addEventListener("pointerenter", O),
              p.el.addEventListener("pointerleave", A));
          },
          I = () => {
            p.el &&
              "string" != typeof p.el &&
              (p.el.removeEventListener("pointerenter", O),
              p.el.removeEventListener("pointerleave", A));
          },
          R = () => {
            (0, r.g)().addEventListener("visibilitychange", M);
          },
          k = () => {
            (0, r.g)().removeEventListener("visibilitychange", M);
          };
        f("init", () => {
          p.params.autoplay.enabled && (L(), R(), x());
        }),
          f("destroy", () => {
            I(), k(), p.autoplay.running && _();
          }),
          f("_freeModeStaticRelease", () => {
            (l || u) && P();
          }),
          f("_freeModeNoMomentumRelease", () => {
            p.params.autoplay.disableOnInteraction ? _() : C(!0, !0);
          }),
          f("beforeTransitionStart", (e, t, i) => {
            !p.destroyed &&
              p.autoplay.running &&
              (i || !p.params.autoplay.disableOnInteraction ? C(!0, !0) : _());
          }),
          f("sliderFirstMove", () => {
            if (!p.destroyed && p.autoplay.running) {
              if (p.params.autoplay.disableOnInteraction) {
                _();
                return;
              }
              (a = !0),
                (l = !1),
                (u = !1),
                (o = setTimeout(() => {
                  (u = !0), (l = !0), C(!0);
                }, 200));
            }
          }),
          f("touchEnd", () => {
            if (!p.destroyed && p.autoplay.running && a) {
              if (
                (clearTimeout(o),
                clearTimeout(t),
                p.params.autoplay.disableOnInteraction)
              ) {
                (l = !1), (a = !1);
                return;
              }
              l && p.params.cssMode && P(), (l = !1), (a = !1);
            }
          }),
          f("slideChange", () => {
            !p.destroyed && p.autoplay.running && (d = !0);
          }),
          Object.assign(p.autoplay, { start: x, stop: _, pause: C, resume: P });
      }
    },
    9948: (e, t, i) => {
      "use strict";
      function r(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function s(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : r(t[i]) &&
                r(e[i]) &&
                Object.keys(t[i]).length > 0 &&
                s(e[i], t[i]);
          });
      }
      i.d(t, { a: () => o, g: () => a });
      let n = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function a() {
        let e = "undefined" != typeof document ? document : {};
        return s(e, n), e;
      }
      let l = {
        document: n,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function o() {
        let e = "undefined" != typeof window ? window : {};
        return s(e, l), e;
      }
    },
    6999: (e, t, i) => {
      "use strict";
      i.d(t, {
        a: () => y,
        c: () => f,
        d: () => a,
        e: () => c,
        f: () => w,
        h: () => b,
        j: () => l,
        m: () => E,
        n: () => n,
        p: () => v,
        q: () => g,
        r: () => m,
        s: () => d,
        t: () => u,
        u: () => h,
        v: () => p,
        w: () =>
          function e() {
            let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
              i = ["__proto__", "constructor", "prototype"];
            for (let r = 1; r < arguments.length; r += 1) {
              let s = r < 0 || arguments.length <= r ? void 0 : arguments[r];
              if (
                null != s &&
                ("undefined" != typeof window && void 0 !== window.HTMLElement
                  ? !(s instanceof HTMLElement)
                  : !s || (1 !== s.nodeType && 11 !== s.nodeType))
              ) {
                let r = Object.keys(Object(s)).filter((e) => 0 > i.indexOf(e));
                for (let i = 0, n = r.length; i < n; i += 1) {
                  let n = r[i],
                    a = Object.getOwnPropertyDescriptor(s, n);
                  void 0 !== a &&
                    a.enumerable &&
                    (o(t[n]) && o(s[n])
                      ? s[n].__swiper__
                        ? (t[n] = s[n])
                        : e(t[n], s[n])
                      : !o(t[n]) && o(s[n])
                      ? ((t[n] = {}),
                        s[n].__swiper__ ? (t[n] = s[n]) : e(t[n], s[n]))
                      : (t[n] = s[n]));
                }
              }
            }
            return t;
          },
        x: () => s,
      });
      var r = i(9948);
      function s(e) {
        Object.keys(e).forEach((t) => {
          try {
            e[t] = null;
          } catch (e) {}
          try {
            delete e[t];
          } catch (e) {}
        });
      }
      function n(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function a() {
        return Date.now();
      }
      function l(e, t) {
        let i, s, n;
        void 0 === t && (t = "x");
        let a = (0, r.a)(),
          l = (function (e) {
            let t;
            let i = (0, r.a)();
            return (
              i.getComputedStyle && (t = i.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          a.WebKitCSSMatrix
            ? ((s = l.transform || l.webkitTransform).split(",").length > 6 &&
                (s = s
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (n = new a.WebKitCSSMatrix("none" === s ? "" : s)))
            : (i = (n =
                l.MozTransform ||
                l.OTransform ||
                l.MsTransform ||
                l.msTransform ||
                l.transform ||
                l
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (s = a.WebKitCSSMatrix
              ? n.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (s = a.WebKitCSSMatrix
              ? n.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          s || 0
        );
      }
      function o(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function d(e, t, i) {
        e.style.setProperty(t, i);
      }
      function u(e) {
        let t,
          { swiper: i, targetPosition: s, side: n } = e,
          a = (0, r.a)(),
          l = -i.translate,
          o = null,
          d = i.params.speed;
        (i.wrapperEl.style.scrollSnapType = "none"),
          a.cancelAnimationFrame(i.cssModeFrameID);
        let u = s > l ? "next" : "prev",
          c = (e, t) => ("next" === u && e >= t) || ("prev" === u && e <= t),
          p = () => {
            (t = new Date().getTime()), null === o && (o = t);
            let e =
              l +
              (0.5 -
                Math.cos(Math.max(Math.min((t - o) / d, 1), 0) * Math.PI) / 2) *
                (s - l);
            if (
              (c(e, s) && (e = s), i.wrapperEl.scrollTo({ [n]: e }), c(e, s))
            ) {
              (i.wrapperEl.style.overflow = "hidden"),
                (i.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (i.wrapperEl.style.overflow = ""),
                    i.wrapperEl.scrollTo({ [n]: e });
                }),
                a.cancelAnimationFrame(i.cssModeFrameID);
              return;
            }
            i.cssModeFrameID = a.requestAnimationFrame(p);
          };
        p();
      }
      function c(e, t) {
        void 0 === t && (t = "");
        let i = [...e.children];
        return (e instanceof HTMLSlotElement && i.push(...e.assignedElements()),
        t)
          ? i.filter((e) => e.matches(t))
          : i;
      }
      function p(e, t) {
        let i = t.contains(e);
        return !i && t instanceof HTMLSlotElement
          ? [...t.assignedElements()].includes(e)
          : i;
      }
      function h(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function f(e, t) {
        var i;
        void 0 === t && (t = []);
        let r = document.createElement(e);
        return (
          r.classList.add(
            ...(Array.isArray(t)
              ? t
              : (void 0 === (i = t) && (i = ""),
                i
                  .trim()
                  .split(" ")
                  .filter((e) => !!e.trim())))
          ),
          r
        );
      }
      function m(e, t) {
        let i = [];
        for (; e.previousElementSibling; ) {
          let r = e.previousElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
        }
        return i;
      }
      function g(e, t) {
        let i = [];
        for (; e.nextElementSibling; ) {
          let r = e.nextElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
        }
        return i;
      }
      function v(e, t) {
        return (0, r.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function b(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function y(e, t) {
        let i = [],
          r = e.parentElement;
        for (; r; )
          t ? r.matches(t) && i.push(r) : i.push(r), (r = r.parentElement);
        return i;
      }
      function w(e, t, i) {
        let s = (0, r.a)();
        return i
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function E(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
    },
    3628: (e, t, i) => {
      "use strict";
      let r, s, n;
      i.d(t, { RC: () => W, qr: () => X });
      var a = i(2115),
        l = i(9948),
        o = i(6999);
      function d() {
        return (
          r ||
            (r = (function () {
              let e = (0, l.a)(),
                t = (0, l.g)();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          r
        );
      }
      function u(e) {
        return (
          void 0 === e && (e = {}),
          s ||
            (s = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e,
                i = d(),
                r = (0, l.a)(),
                s = r.navigator.platform,
                n = t || r.navigator.userAgent,
                a = { ios: !1, android: !1 },
                o = r.screen.width,
                u = r.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                p = n.match(/(iPad).*OS\s([\d_]+)/),
                h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "MacIntel" === s;
              return (
                !p &&
                  m &&
                  i.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${o}x${u}`) >= 0 &&
                  ((p = n.match(/(Version)\/([\d.]+)/)) ||
                    (p = [0, 1, "13_0_0"]),
                  (m = !1)),
                c && "Win32" !== s && ((a.os = "android"), (a.android = !0)),
                (p || f || h) && ((a.os = "ios"), (a.ios = !0)),
                a
              );
            })(e)),
          s
        );
      }
      let c = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        p = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        h = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let i = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (i) {
            let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (i.shadowRoot
                ? (t = i.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  ))
                : requestAnimationFrame(() => {
                    i.shadowRoot &&
                      (t = i.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`
                      )) &&
                      t.remove();
                  })),
              t && t.remove();
          }
        },
        f = (e, t) => {
          if (!e.slides[t]) return;
          let i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute("loading");
        },
        m = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          let r =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            s = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let i = [s - t];
            i.push(...Array.from({ length: t }).map((e, t) => s + r + t)),
              e.slides.forEach((t, r) => {
                i.includes(t.column) && f(e, r);
              });
            return;
          }
          let n = s + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let r = s - t; r <= n + t; r += 1) {
              let t = ((r % i) + i) % i;
              (t < s || t > n) && f(e, t);
            }
          else
            for (
              let r = Math.max(s - t, 0);
              r <= Math.min(n + t, i - 1);
              r += 1
            )
              r !== s && (r > n || r < s) && f(e, r);
        };
      function g(e) {
        let { swiper: t, runCallbacks: i, direction: r, step: s } = e,
          { activeIndex: n, previousIndex: a } = t,
          l = r;
        if (
          (l || (l = n > a ? "next" : n < a ? "prev" : "reset"),
          t.emit(`transition${s}`),
          i && n !== a)
        ) {
          if ("reset" === l) {
            t.emit(`slideResetTransition${s}`);
            return;
          }
          t.emit(`slideChangeTransition${s}`),
            "next" === l
              ? t.emit(`slideNextTransition${s}`)
              : t.emit(`slidePrevTransition${s}`);
        }
      }
      function v(e, t, i) {
        let r = (0, l.a)(),
          { params: s } = e,
          n = s.edgeSwipeDetection,
          a = s.edgeSwipeThreshold;
        return (
          !n ||
          (!(i <= a) && !(i >= r.innerWidth - a)) ||
          ("prevent" === n && (t.preventDefault(), !0))
        );
      }
      function b(e) {
        let t = (0, l.g)(),
          i = e;
        i.originalEvent && (i = i.originalEvent);
        let r = this.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
          r.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (r.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) {
          v(this, i, i.targetTouches[0].pageX);
          return;
        }
        let { params: s, touches: n, enabled: a } = this;
        if (
          !a ||
          (!s.simulateTouch && "mouse" === i.pointerType) ||
          (this.animating && s.preventInteractionOnTransition)
        )
          return;
        !this.animating && s.cssMode && s.loop && this.loopFix();
        let d = i.target;
        if (
          ("wrapper" === s.touchEventsTarget && !(0, o.v)(d, this.wrapperEl)) ||
          ("which" in i && 3 === i.which) ||
          ("button" in i && i.button > 0) ||
          (r.isTouched && r.isMoved)
        )
          return;
        let u = !!s.noSwipingClass && "" !== s.noSwipingClass,
          c = i.composedPath ? i.composedPath() : i.path;
        u && i.target && i.target.shadowRoot && c && (d = c[0]);
        let p = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          h = !!(i.target && i.target.shadowRoot);
        if (
          s.noSwiping &&
          (h
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    if (!i || i === (0, l.g)() || i === (0, l.a)()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let r = i.closest(e);
                    return r || i.getRootNode
                      ? r || t(i.getRootNode().host)
                      : null;
                  })(t)
                );
              })(p, d)
            : d.closest(p))
        ) {
          this.allowClick = !0;
          return;
        }
        if (s.swipeHandler && !d.closest(s.swipeHandler)) return;
        (n.currentX = i.pageX), (n.currentY = i.pageY);
        let f = n.currentX,
          m = n.currentY;
        if (!v(this, i, f)) return;
        Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (n.startX = f),
          (n.startY = m),
          (r.touchStartTime = (0, o.d)()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          s.threshold > 0 && (r.allowThresholdMove = !1);
        let g = !0;
        d.matches(r.focusableElements) &&
          ((g = !1), "SELECT" === d.nodeName && (r.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(r.focusableElements) &&
            t.activeElement !== d &&
            ("mouse" === i.pointerType ||
              ("mouse" !== i.pointerType && !d.matches(r.focusableElements))) &&
            t.activeElement.blur();
        let b = g && this.allowTouchMove && s.touchStartPreventDefault;
        (s.touchStartForcePreventDefault || b) &&
          !d.isContentEditable &&
          i.preventDefault(),
          s.freeMode &&
            s.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !s.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit("touchStart", i);
      }
      function y(e) {
        let t, i;
        let r = (0, l.g)(),
          s = this.touchEventsData,
          { params: n, touches: a, rtlTranslate: d, enabled: u } = this;
        if (!u || (!n.simulateTouch && "mouse" === e.pointerType)) return;
        let c = e;
        if (
          (c.originalEvent && (c = c.originalEvent),
          "pointermove" === c.type &&
            (null !== s.touchId || c.pointerId !== s.pointerId))
        )
          return;
        if ("touchmove" === c.type) {
          if (
            !(t = [...c.changedTouches].filter(
              (e) => e.identifier === s.touchId
            )[0]) ||
            t.identifier !== s.touchId
          )
            return;
        } else t = c;
        if (!s.isTouched) {
          s.startMoving && s.isScrolling && this.emit("touchMoveOpposite", c);
          return;
        }
        let p = t.pageX,
          h = t.pageY;
        if (c.preventedByNestedSwiper) {
          (a.startX = p), (a.startY = h);
          return;
        }
        if (!this.allowTouchMove) {
          c.target.matches(s.focusableElements) || (this.allowClick = !1),
            s.isTouched &&
              (Object.assign(a, {
                startX: p,
                startY: h,
                currentX: p,
                currentY: h,
              }),
              (s.touchStartTime = (0, o.d)()));
          return;
        }
        if (n.touchReleaseOnEdges && !n.loop) {
          if (this.isVertical()) {
            if (
              (h < a.startY && this.translate <= this.maxTranslate()) ||
              (h > a.startY && this.translate >= this.minTranslate())
            ) {
              (s.isTouched = !1), (s.isMoved = !1);
              return;
            }
          } else if (
            (p < a.startX && this.translate <= this.maxTranslate()) ||
            (p > a.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          (r.activeElement &&
            r.activeElement.matches(s.focusableElements) &&
            r.activeElement !== c.target &&
            "mouse" !== c.pointerType &&
            r.activeElement.blur(),
          r.activeElement &&
            c.target === r.activeElement &&
            c.target.matches(s.focusableElements))
        ) {
          (s.isMoved = !0), (this.allowClick = !1);
          return;
        }
        s.allowTouchCallbacks && this.emit("touchMove", c),
          (a.previousX = a.currentX),
          (a.previousY = a.currentY),
          (a.currentX = p),
          (a.currentY = h);
        let f = a.currentX - a.startX,
          m = a.currentY - a.startY;
        if (
          this.params.threshold &&
          Math.sqrt(f ** 2 + m ** 2) < this.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (this.isHorizontal() && a.currentY === a.startY) ||
          (this.isVertical() && a.currentX === a.startX)
            ? (s.isScrolling = !1)
            : f * f + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(f))) / Math.PI),
              (s.isScrolling = this.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (s.isScrolling && this.emit("touchMoveOpposite", c),
          void 0 === s.startMoving &&
            (a.currentX !== a.startX || a.currentY !== a.startY) &&
            (s.startMoving = !0),
          s.isScrolling ||
            ("touchmove" === c.type && s.preventTouchMoveFromPointerMove))
        ) {
          s.isTouched = !1;
          return;
        }
        if (!s.startMoving) return;
        (this.allowClick = !1),
          !n.cssMode && c.cancelable && c.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && c.stopPropagation();
        let g = this.isHorizontal() ? f : m,
          v = this.isHorizontal()
            ? a.currentX - a.previousX
            : a.currentY - a.previousY;
        n.oneWayMovement &&
          ((g = Math.abs(g) * (d ? 1 : -1)), (v = Math.abs(v) * (d ? 1 : -1))),
          (a.diff = g),
          (g *= n.touchRatio),
          d && ((g = -g), (v = -v));
        let b = this.touchesDirection;
        (this.swipeDirection = g > 0 ? "prev" : "next"),
          (this.touchesDirection = v > 0 ? "prev" : "next");
        let y = this.params.loop && !n.cssMode,
          w =
            ("next" === this.touchesDirection && this.allowSlideNext) ||
            ("prev" === this.touchesDirection && this.allowSlidePrev);
        if (!s.isMoved) {
          if (
            (y && w && this.loopFix({ direction: this.swipeDirection }),
            (s.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (s.allowMomentumBounce = !1),
            n.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", c);
        }
        if (
          (new Date().getTime(),
          s.isMoved &&
            s.allowThresholdMove &&
            b !== this.touchesDirection &&
            y &&
            w &&
            Math.abs(g) >= 1)
        ) {
          Object.assign(a, {
            startX: p,
            startY: h,
            currentX: p,
            currentY: h,
            startTranslate: s.currentTranslate,
          }),
            (s.loopSwapReset = !0),
            (s.startTranslate = s.currentTranslate);
          return;
        }
        this.emit("sliderMove", c),
          (s.isMoved = !0),
          (s.currentTranslate = g + s.startTranslate);
        let E = !0,
          S = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (S = 0),
          g > 0
            ? (y &&
                w &&
                !i &&
                s.allowThresholdMove &&
                s.currentTranslate >
                  (n.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1] -
                      ("auto" !== n.slidesPerView &&
                      this.slides.length - n.slidesPerView >= 2
                        ? this.slidesSizesGrid[this.activeIndex + 1] +
                          this.params.spaceBetween
                        : 0) -
                      this.params.spaceBetween
                    : this.minTranslate()) &&
                this.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              s.currentTranslate > this.minTranslate() &&
                ((E = !1),
                n.resistance &&
                  (s.currentTranslate =
                    this.minTranslate() -
                    1 +
                    (-this.minTranslate() + s.startTranslate + g) ** S)))
            : g < 0 &&
              (y &&
                w &&
                !i &&
                s.allowThresholdMove &&
                s.currentTranslate <
                  (n.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1] +
                      this.params.spaceBetween +
                      ("auto" !== n.slidesPerView &&
                      this.slides.length - n.slidesPerView >= 2
                        ? this.slidesSizesGrid[
                            this.slidesSizesGrid.length - 1
                          ] + this.params.spaceBetween
                        : 0)
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ("auto" === n.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(n.slidesPerView, 10))),
                }),
              s.currentTranslate < this.maxTranslate() &&
                ((E = !1),
                n.resistance &&
                  (s.currentTranslate =
                    this.maxTranslate() +
                    1 -
                    (this.maxTranslate() - s.startTranslate - g) ** S))),
          E && (c.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          n.threshold > 0)
        ) {
          if (Math.abs(g) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
              (s.allowThresholdMove = !0),
                (a.startX = a.currentX),
                (a.startY = a.currentY),
                (s.currentTranslate = s.startTranslate),
                (a.diff = this.isHorizontal()
                  ? a.currentX - a.startX
                  : a.currentY - a.startY);
              return;
            }
          } else {
            s.currentTranslate = s.startTranslate;
            return;
          }
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && this.freeMode) ||
            n.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          n.freeMode &&
            n.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(s.currentTranslate),
          this.setTranslate(s.currentTranslate));
      }
      function w(e) {
        let t, i;
        let r = this,
          s = r.touchEventsData,
          n = e;
        if (
          (n.originalEvent && (n = n.originalEvent),
          "touchend" === n.type || "touchcancel" === n.type)
        ) {
          if (
            !(t = [...n.changedTouches].filter(
              (e) => e.identifier === s.touchId
            )[0]) ||
            t.identifier !== s.touchId
          )
            return;
        } else {
          if (null !== s.touchId || n.pointerId !== s.pointerId) return;
          t = n;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(n.type) &&
          !(
            ["pointercancel", "contextmenu"].includes(n.type) &&
            (r.browser.isSafari || r.browser.isWebView)
          )
        )
          return;
        (s.pointerId = null), (s.touchId = null);
        let {
          params: a,
          touches: l,
          rtlTranslate: d,
          slidesGrid: u,
          enabled: c,
        } = r;
        if (!c || (!a.simulateTouch && "mouse" === n.pointerType)) return;
        if (
          (s.allowTouchCallbacks && r.emit("touchEnd", n),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        ) {
          s.isMoved && a.grabCursor && r.setGrabCursor(!1),
            (s.isMoved = !1),
            (s.startMoving = !1);
          return;
        }
        a.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) &&
          r.setGrabCursor(!1);
        let p = (0, o.d)(),
          h = p - s.touchStartTime;
        if (r.allowClick) {
          let e = n.path || (n.composedPath && n.composedPath());
          r.updateClickedSlide((e && e[0]) || n.target, e),
            r.emit("tap click", n),
            h < 300 &&
              p - s.lastClickTime < 300 &&
              r.emit("doubleTap doubleClick", n);
        }
        if (
          ((s.lastClickTime = (0, o.d)()),
          (0, o.n)(() => {
            r.destroyed || (r.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !r.swipeDirection ||
            (0 === l.diff && !s.loopSwapReset) ||
            (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
        ) {
          (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
          return;
        }
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (i = a.followFinger
            ? d
              ? r.translate
              : -r.translate
            : -s.currentTranslate),
          a.cssMode)
        )
          return;
        if (a.freeMode && a.freeMode.enabled) {
          r.freeMode.onTouchEnd({ currentPos: i });
          return;
        }
        let f = i >= -r.maxTranslate() && !r.params.loop,
          m = 0,
          g = r.slidesSizesGrid[0];
        for (
          let e = 0;
          e < u.length;
          e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
        ) {
          let t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== u[e + t]
            ? (f || (i >= u[e] && i < u[e + t])) &&
              ((m = e), (g = u[e + t] - u[e]))
            : (f || i >= u[e]) &&
              ((m = e), (g = u[u.length - 1] - u[u.length - 2]));
        }
        let v = null,
          b = null;
        a.rewind &&
          (r.isBeginning
            ? (b =
                a.virtual && a.virtual.enabled && r.virtual
                  ? r.virtual.slides.length - 1
                  : r.slides.length - 1)
            : r.isEnd && (v = 0));
        let y = (i - u[m]) / g,
          w = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (h > a.longSwipesMs) {
          if (!a.longSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          "next" === r.swipeDirection &&
            (y >= a.longSwipesRatio
              ? r.slideTo(a.rewind && r.isEnd ? v : m + w)
              : r.slideTo(m)),
            "prev" === r.swipeDirection &&
              (y > 1 - a.longSwipesRatio
                ? r.slideTo(m + w)
                : null !== b && y < 0 && Math.abs(y) > a.longSwipesRatio
                ? r.slideTo(b)
                : r.slideTo(m));
        } else {
          if (!a.shortSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          r.navigation &&
          (n.target === r.navigation.nextEl || n.target === r.navigation.prevEl)
            ? n.target === r.navigation.nextEl
              ? r.slideTo(m + w)
              : r.slideTo(m)
            : ("next" === r.swipeDirection && r.slideTo(null !== v ? v : m + w),
              "prev" === r.swipeDirection && r.slideTo(null !== b ? b : m));
        }
      }
      function E() {
        let e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: r, allowSlidePrev: s, snapGrid: n } = e,
          a = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        let l = a && t.loop;
        ("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        l
          ? e.params.loop && !a
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = s),
          (e.allowSlideNext = r),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function S(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function T() {
        let { wrapperEl: e, rtlTranslate: t, enabled: i } = this;
        if (!i) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let r = this.maxTranslate() - this.minTranslate();
        (0 === r ? 0 : (this.translate - this.minTranslate()) / r) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      function x(e) {
        h(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update();
      }
      function _() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges &&
            (this.el.style.touchAction = "auto"));
      }
      let C = (e, t) => {
          let i = (0, l.g)(),
            { params: r, el: s, wrapperEl: n, device: a } = e,
            o = !!r.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener";
          s &&
            "string" != typeof s &&
            (i[d]("touchstart", e.onDocumentTouchStart, {
              passive: !1,
              capture: o,
            }),
            s[d]("touchstart", e.onTouchStart, { passive: !1 }),
            s[d]("pointerdown", e.onTouchStart, { passive: !1 }),
            i[d]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("touchend", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerup", e.onTouchEnd, { passive: !0 }),
            i[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
            i[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerout", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
            i[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (r.preventClicks || r.preventClicksPropagation) &&
              s[d]("click", e.onClick, !0),
            r.cssMode && n[d]("scroll", e.onScroll),
            r.updateOnWindowResize
              ? e[t](
                  a.ios || a.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  E,
                  !0
                )
              : e[t]("observerUpdate", E, !0),
            s[d]("load", e.onLoad, { capture: !0 }));
        },
        P = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var M = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let O = {
          eventsEmitter: {
            on(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              let s = i ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  r.eventsListeners[e] || (r.eventsListeners[e] = []),
                    r.eventsListeners[e][s](t);
                }),
                r
              );
            },
            once(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              function s() {
                r.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                for (var i = arguments.length, n = Array(i), a = 0; a < i; a++)
                  n[a] = arguments[a];
                t.apply(r, n);
              }
              return (s.__emitterProxy = t), r.on(e, s, i);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let i = this;
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((r, s) => {
                          (r === t ||
                            (r.__emitterProxy && r.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(s, 1);
                        });
                  }),
                i
              );
            },
            emit() {
              let e, t, i;
              let r = this;
              if (!r.eventsListeners || r.destroyed || !r.eventsListeners)
                return r;
              for (var s = arguments.length, n = Array(s), a = 0; a < s; a++)
                n[a] = arguments[a];
              return (
                "string" == typeof n[0] || Array.isArray(n[0])
                  ? ((e = n[0]), (t = n.slice(1, n.length)), (i = r))
                  : ((e = n[0].events),
                    (t = n[0].data),
                    (i = n[0].context || r)),
                t.unshift(i),
                (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
                  r.eventsAnyListeners &&
                    r.eventsAnyListeners.length &&
                    r.eventsAnyListeners.forEach((r) => {
                      r.apply(i, [e, ...t]);
                    }),
                    r.eventsListeners &&
                      r.eventsListeners[e] &&
                      r.eventsListeners[e].forEach((e) => {
                        e.apply(i, t);
                      });
                }),
                r
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let i = this.el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : i.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : i.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt((0, o.p)(i, "padding-left") || 0, 10) -
                    parseInt((0, o.p)(i, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt((0, o.p)(i, "padding-top") || 0, 10) -
                    parseInt((0, o.p)(i, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function i(e, i) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(i)) || 0
                );
              }
              let r = t.params,
                {
                  wrapperEl: s,
                  slidesEl: n,
                  size: a,
                  rtlTranslate: l,
                  wrongRTL: d,
                } = t,
                u = t.virtual && r.virtual.enabled,
                c = u ? t.virtual.slides.length : t.slides.length,
                p = (0, o.e)(n, `.${t.params.slideClass}, swiper-slide`),
                h = u ? t.virtual.slides.length : p.length,
                f = [],
                m = [],
                g = [],
                v = r.slidesOffsetBefore;
              "function" == typeof v && (v = r.slidesOffsetBefore.call(t));
              let b = r.slidesOffsetAfter;
              "function" == typeof b && (b = r.slidesOffsetAfter.call(t));
              let y = t.snapGrid.length,
                w = t.slidesGrid.length,
                E = r.spaceBetween,
                S = -v,
                T = 0,
                x = 0;
              if (void 0 === a) return;
              "string" == typeof E && E.indexOf("%") >= 0
                ? (E = (parseFloat(E.replace("%", "")) / 100) * a)
                : "string" == typeof E && (E = parseFloat(E)),
                (t.virtualSize = -E),
                p.forEach((e) => {
                  l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                    (e.style.marginBottom = ""),
                    (e.style.marginTop = "");
                }),
                r.centeredSlides &&
                  r.cssMode &&
                  ((0, o.s)(s, "--swiper-centered-offset-before", ""),
                  (0, o.s)(s, "--swiper-centered-offset-after", ""));
              let _ = r.grid && r.grid.rows > 1 && t.grid;
              _ ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
              let C =
                "auto" === r.slidesPerView &&
                r.breakpoints &&
                Object.keys(r.breakpoints).filter(
                  (e) => void 0 !== r.breakpoints[e].slidesPerView
                ).length > 0;
              for (let s = 0; s < h; s += 1) {
                let n;
                if (
                  ((e = 0),
                  p[s] && (n = p[s]),
                  _ && t.grid.updateSlide(s, n, p),
                  !p[s] || "none" !== (0, o.p)(n, "display"))
                ) {
                  if ("auto" === r.slidesPerView) {
                    C && (p[s].style[t.getDirectionLabel("width")] = "");
                    let a = getComputedStyle(n),
                      l = n.style.transform,
                      d = n.style.webkitTransform;
                    if (
                      (l && (n.style.transform = "none"),
                      d && (n.style.webkitTransform = "none"),
                      r.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? (0, o.f)(n, "width", !0)
                        : (0, o.f)(n, "height", !0);
                    else {
                      let t = i(a, "width"),
                        r = i(a, "padding-left"),
                        s = i(a, "padding-right"),
                        l = i(a, "margin-left"),
                        o = i(a, "margin-right"),
                        d = a.getPropertyValue("box-sizing");
                      if (d && "border-box" === d) e = t + l + o;
                      else {
                        let { clientWidth: i, offsetWidth: a } = n;
                        e = t + r + s + l + o + (a - i);
                      }
                    }
                    l && (n.style.transform = l),
                      d && (n.style.webkitTransform = d),
                      r.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (a - (r.slidesPerView - 1) * E) / r.slidesPerView),
                      r.roundLengths && (e = Math.floor(e)),
                      p[s] &&
                        (p[s].style[t.getDirectionLabel("width")] = `${e}px`);
                  p[s] && (p[s].swiperSlideSize = e),
                    g.push(e),
                    r.centeredSlides
                      ? ((S = S + e / 2 + T / 2 + E),
                        0 === T && 0 !== s && (S = S - a / 2 - E),
                        0 === s && (S = S - a / 2 - E),
                        0.001 > Math.abs(S) && (S = 0),
                        r.roundLengths && (S = Math.floor(S)),
                        x % r.slidesPerGroup == 0 && f.push(S),
                        m.push(S))
                      : (r.roundLengths && (S = Math.floor(S)),
                        (x - Math.min(t.params.slidesPerGroupSkip, x)) %
                          t.params.slidesPerGroup ==
                          0 && f.push(S),
                        m.push(S),
                        (S = S + e + E)),
                    (t.virtualSize += e + E),
                    (T = e),
                    (x += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, a) + b),
                l &&
                  d &&
                  ("slide" === r.effect || "coverflow" === r.effect) &&
                  (s.style.width = `${t.virtualSize + E}px`),
                r.setWrapperSize &&
                  (s.style[t.getDirectionLabel("width")] = `${
                    t.virtualSize + E
                  }px`),
                _ && t.grid.updateWrapperSize(e, f),
                !r.centeredSlides)
              ) {
                let e = [];
                for (let i = 0; i < f.length; i += 1) {
                  let s = f[i];
                  r.roundLengths && (s = Math.floor(s)),
                    f[i] <= t.virtualSize - a && e.push(s);
                }
                (f = e),
                  Math.floor(t.virtualSize - a) - Math.floor(f[f.length - 1]) >
                    1 && f.push(t.virtualSize - a);
              }
              if (u && r.loop) {
                let e = g[0] + E;
                if (r.slidesPerGroup > 1) {
                  let i = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        r.slidesPerGroup
                    ),
                    s = e * r.slidesPerGroup;
                  for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + s);
                }
                for (
                  let i = 0;
                  i < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  i += 1
                )
                  1 === r.slidesPerGroup && f.push(f[f.length - 1] + e),
                    m.push(m[m.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === f.length && (f = [0]), 0 !== E)) {
                let e =
                  t.isHorizontal() && l
                    ? "marginLeft"
                    : t.getDirectionLabel("marginRight");
                p.filter(
                  (e, t) => !r.cssMode || !!r.loop || t !== p.length - 1
                ).forEach((t) => {
                  t.style[e] = `${E}px`;
                });
              }
              if (r.centeredSlides && r.centeredSlidesBounds) {
                let e = 0;
                g.forEach((t) => {
                  e += t + (E || 0);
                });
                let t = (e -= E) > a ? e - a : 0;
                f = f.map((e) => (e <= 0 ? -v : e > t ? t + b : e));
              }
              if (r.centerInsufficientSlides) {
                let e = 0;
                g.forEach((t) => {
                  e += t + (E || 0);
                }),
                  (e -= E);
                let t =
                  (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
                if (e + t < a) {
                  let i = (a - e - t) / 2;
                  f.forEach((e, t) => {
                    f[t] = e - i;
                  }),
                    m.forEach((e, t) => {
                      m[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: p,
                  snapGrid: f,
                  slidesGrid: m,
                  slidesSizesGrid: g,
                }),
                r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
              ) {
                (0, o.s)(s, "--swiper-centered-offset-before", `${-f[0]}px`),
                  (0, o.s)(
                    s,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - g[g.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + i));
              }
              if (
                (h !== c && t.emit("slidesLengthChange"),
                f.length !== y &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                m.length !== w && t.emit("slidesGridLengthChange"),
                r.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit("slidesUpdated"),
                !u &&
                  !r.cssMode &&
                  ("slide" === r.effect || "fade" === r.effect))
              ) {
                let e = `${r.containerModifierClass}backface-hidden`,
                  i = t.el.classList.contains(e);
                h <= r.maxBackfaceHiddenSlides
                  ? i || t.el.classList.add(e)
                  : i && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let i = this,
                r = [],
                s = i.virtual && i.params.virtual.enabled,
                n = 0;
              "number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed);
              let a = (e) =>
                s ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
              if (
                "auto" !== i.params.slidesPerView &&
                i.params.slidesPerView > 1
              ) {
                if (i.params.centeredSlides)
                  (i.visibleSlides || []).forEach((e) => {
                    r.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t;
                    if (e > i.slides.length && !s) break;
                    r.push(a(e));
                  }
              } else r.push(a(i.activeIndex));
              for (t = 0; t < r.length; t += 1)
                if (void 0 !== r[t]) {
                  let e = r[t].offsetHeight;
                  n = e > n ? e : n;
                }
              (n || 0 === n) && (i.wrapperEl.style.height = `${n}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let i = 0; i < e.length; i += 1)
                e[i].swiperSlideOffset =
                  (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: i, rtlTranslate: r, snapGrid: s } = this;
              if (0 === i.length) return;
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              let n = -e;
              r && (n = e),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              let a = t.spaceBetween;
              "string" == typeof a && a.indexOf("%") >= 0
                ? (a = (parseFloat(a.replace("%", "")) / 100) * this.size)
                : "string" == typeof a && (a = parseFloat(a));
              for (let e = 0; e < i.length; e += 1) {
                let l = i[e],
                  o = l.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                let d =
                    (n + (t.centeredSlides ? this.minTranslate() : 0) - o) /
                    (l.swiperSlideSize + a),
                  u =
                    (n -
                      s[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      o) /
                    (l.swiperSlideSize + a),
                  p = -(n - o),
                  h = p + this.slidesSizesGrid[e],
                  f = p >= 0 && p <= this.size - this.slidesSizesGrid[e],
                  m =
                    (p >= 0 && p < this.size - 1) ||
                    (h > 1 && h <= this.size) ||
                    (p <= 0 && h >= this.size);
                m &&
                  (this.visibleSlides.push(l),
                  this.visibleSlidesIndexes.push(e)),
                  c(l, m, t.slideVisibleClass),
                  c(l, f, t.slideFullyVisibleClass),
                  (l.progress = r ? -d : d),
                  (l.originalProgress = r ? -u : u);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                {
                  progress: r,
                  isBeginning: s,
                  isEnd: n,
                  progressLoop: a,
                } = this,
                l = s,
                o = n;
              if (0 === i) (r = 0), (s = !0), (n = !0);
              else {
                r = (e - this.minTranslate()) / i;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  a = 1 > Math.abs(e - this.maxTranslate());
                (s = t || r <= 0),
                  (n = a || r >= 1),
                  t && (r = 0),
                  a && (r = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  i = this.getSlideIndexByData(this.slides.length - 1),
                  r = this.slidesGrid[t],
                  s = this.slidesGrid[i],
                  n = this.slidesGrid[this.slidesGrid.length - 1],
                  l = Math.abs(e);
                (a = l >= r ? (l - r) / n : (l + n - s) / n) > 1 && (a -= 1);
              }
              Object.assign(this, {
                progress: r,
                progressLoop: a,
                isBeginning: s,
                isEnd: n,
              }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                s && !l && this.emit("reachBeginning toEdge"),
                n && !o && this.emit("reachEnd toEdge"),
                ((l && !s) || (o && !n)) && this.emit("fromEdge"),
                this.emit("progress", r);
            },
            updateSlidesClasses: function () {
              let e, t, i;
              let { slides: r, params: s, slidesEl: n, activeIndex: a } = this,
                l = this.virtual && s.virtual.enabled,
                d = this.grid && s.grid && s.grid.rows > 1,
                u = (e) =>
                  (0, o.e)(n, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
              if (l) {
                if (s.loop) {
                  let t = a - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = u(`[data-swiper-slide-index="${t}"]`));
                } else e = u(`[data-swiper-slide-index="${a}"]`);
              } else
                d
                  ? ((e = r.filter((e) => e.column === a)[0]),
                    (i = r.filter((e) => e.column === a + 1)[0]),
                    (t = r.filter((e) => e.column === a - 1)[0]))
                  : (e = r[a]);
              e &&
                !d &&
                ((i = (0, o.q)(e, `.${s.slideClass}, swiper-slide`)[0]),
                s.loop && !i && (i = r[0]),
                (t = (0, o.r)(e, `.${s.slideClass}, swiper-slide`)[0]),
                s.loop),
                r.forEach((r) => {
                  p(r, r === e, s.slideActiveClass),
                    p(r, r === i, s.slideNextClass),
                    p(r, r === t, s.slidePrevClass);
                }),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t, i;
              let r = this,
                s = r.rtlTranslate ? r.translate : -r.translate,
                {
                  snapGrid: n,
                  params: a,
                  activeIndex: l,
                  realIndex: o,
                  snapIndex: d,
                } = r,
                u = e,
                c = (e) => {
                  let t = e - r.virtual.slidesBefore;
                  return (
                    t < 0 && (t = r.virtual.slides.length + t),
                    t >= r.virtual.slides.length &&
                      (t -= r.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === u &&
                  (u = (function (e) {
                    let t;
                    let { slidesGrid: i, params: r } = e,
                      s = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < i.length; e += 1)
                      void 0 !== i[e + 1]
                        ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                          ? (t = e)
                          : s >= i[e] && s < i[e + 1] && (t = e + 1)
                        : s >= i[e] && (t = e);
                    return (
                      r.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(r)),
                n.indexOf(s) >= 0)
              )
                t = n.indexOf(s);
              else {
                let e = Math.min(a.slidesPerGroupSkip, u);
                t = e + Math.floor((u - e) / a.slidesPerGroup);
              }
              if (
                (t >= n.length && (t = n.length - 1), u === l && !r.params.loop)
              ) {
                t !== d && ((r.snapIndex = t), r.emit("snapIndexChange"));
                return;
              }
              if (
                u === l &&
                r.params.loop &&
                r.virtual &&
                r.params.virtual.enabled
              ) {
                r.realIndex = c(u);
                return;
              }
              let p = r.grid && a.grid && a.grid.rows > 1;
              if (r.virtual && a.virtual.enabled && a.loop) i = c(u);
              else if (p) {
                let e = r.slides.filter((e) => e.column === u)[0],
                  t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(t) && (t = Math.max(r.slides.indexOf(e), 0)),
                  (i = Math.floor(t / a.grid.rows));
              } else if (r.slides[u]) {
                let e = r.slides[u].getAttribute("data-swiper-slide-index");
                i = e ? parseInt(e, 10) : u;
              } else i = u;
              Object.assign(r, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: o,
                realIndex: i,
                previousIndex: l,
                activeIndex: u,
              }),
                r.initialized && m(r),
                r.emit("activeIndexChange"),
                r.emit("snapIndexChange"),
                (r.initialized || r.params.runCallbacksOnInit) &&
                  (o !== i && r.emit("realIndexChange"), r.emit("slideChange"));
            },
            updateClickedSlide: function (e, t) {
              let i;
              let r = this.params,
                s = e.closest(`.${r.slideClass}, swiper-slide`);
              !s &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !s &&
                    e.matches &&
                    e.matches(`.${r.slideClass}, swiper-slide`) &&
                    (s = e);
                });
              let n = !1;
              if (s) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === s) {
                    (n = !0), (i = e);
                    break;
                  }
              }
              if (s && n)
                (this.clickedSlide = s),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        s.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = i);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              r.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              let {
                params: t,
                rtlTranslate: i,
                translate: r,
                wrapperEl: s,
              } = this;
              if (t.virtualTranslate) return i ? -r : r;
              if (t.cssMode) return r;
              let n = (0, o.j)(s, e);
              return (n += this.cssOverflowAdjustment()), i && (n = -n), n || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: i,
                  params: r,
                  wrapperEl: s,
                  progress: n,
                } = this,
                a = 0,
                l = 0;
              this.isHorizontal() ? (a = i ? -e : e) : (l = e),
                r.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? a : l),
                r.cssMode
                  ? (s[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -a : -l)
                  : r.virtualTranslate ||
                    (this.isHorizontal()
                      ? (a -= this.cssOverflowAdjustment())
                      : (l -= this.cssOverflowAdjustment()),
                    (s.style.transform = `translate3d(${a}px, ${l}px, 0px)`));
              let o = this.maxTranslate() - this.minTranslate();
              (0 === o ? 0 : (e - this.minTranslate()) / o) !== n &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, r, s) {
              let n;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === r && (r = !0);
              let a = this,
                { params: l, wrapperEl: d } = a;
              if (a.animating && l.preventInteractionOnTransition) return !1;
              let u = a.minTranslate(),
                c = a.maxTranslate();
              if (
                ((n = r && e > u ? u : r && e < c ? c : e),
                a.updateProgress(n),
                l.cssMode)
              ) {
                let e = a.isHorizontal();
                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -n;
                else {
                  if (!a.support.smoothScroll)
                    return (
                      (0, o.t)({
                        swiper: a,
                        targetPosition: -n,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  d.scrollTo({ [e ? "left" : "top"]: -n, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (a.setTransition(0),
                    a.setTranslate(n),
                    i &&
                      (a.emit("beforeTransitionStart", t, s),
                      a.emit("transitionEnd")))
                  : (a.setTransition(t),
                    a.setTranslate(n),
                    i &&
                      (a.emit("beforeTransitionStart", t, s),
                      a.emit("transitionStart")),
                    a.animating ||
                      ((a.animating = !0),
                      a.onTranslateToWrapperTransitionEnd ||
                        (a.onTranslateToWrapperTransitionEnd = function (e) {
                          a &&
                            !a.destroyed &&
                            e.target === this &&
                            (a.wrapperEl.removeEventListener(
                              "transitionend",
                              a.onTranslateToWrapperTransitionEnd
                            ),
                            (a.onTranslateToWrapperTransitionEnd = null),
                            delete a.onTranslateToWrapperTransitionEnd,
                            (a.animating = !1),
                            i && a.emit("transitionEnd"));
                        }),
                      a.wrapperEl.addEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = `${e}ms`),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                g({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              (this.animating = !1),
                i.cssMode ||
                  (this.setTransition(0),
                  g({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, i, r, s) {
              let n;
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let a = this,
                l = e;
              l < 0 && (l = 0);
              let {
                params: d,
                snapGrid: u,
                slidesGrid: c,
                previousIndex: p,
                activeIndex: h,
                rtlTranslate: f,
                wrapperEl: m,
                enabled: g,
              } = a;
              if (
                (!g && !r && !s) ||
                a.destroyed ||
                (a.animating && d.preventInteractionOnTransition)
              )
                return !1;
              void 0 === t && (t = a.params.speed);
              let v = Math.min(a.params.slidesPerGroupSkip, l),
                b = v + Math.floor((l - v) / a.params.slidesPerGroup);
              b >= u.length && (b = u.length - 1);
              let y = -u[b];
              if (d.normalizeSlideIndex)
                for (let e = 0; e < c.length; e += 1) {
                  let t = -Math.floor(100 * y),
                    i = Math.floor(100 * c[e]),
                    r = Math.floor(100 * c[e + 1]);
                  void 0 !== c[e + 1]
                    ? t >= i && t < r - (r - i) / 2
                      ? (l = e)
                      : t >= i && t < r && (l = e + 1)
                    : t >= i && (l = e);
                }
              if (
                a.initialized &&
                l !== h &&
                ((!a.allowSlideNext &&
                  (f
                    ? y > a.translate && y > a.minTranslate()
                    : y < a.translate && y < a.minTranslate())) ||
                  (!a.allowSlidePrev &&
                    y > a.translate &&
                    y > a.maxTranslate() &&
                    (h || 0) !== l))
              )
                return !1;
              l !== (p || 0) && i && a.emit("beforeSlideChangeStart"),
                a.updateProgress(y),
                (n = l > h ? "next" : l < h ? "prev" : "reset");
              let w = a.virtual && a.params.virtual.enabled;
              if (
                !(w && s) &&
                ((f && -y === a.translate) || (!f && y === a.translate))
              )
                return (
                  a.updateActiveIndex(l),
                  d.autoHeight && a.updateAutoHeight(),
                  a.updateSlidesClasses(),
                  "slide" !== d.effect && a.setTranslate(y),
                  "reset" !== n &&
                    (a.transitionStart(i, n), a.transitionEnd(i, n)),
                  !1
                );
              if (d.cssMode) {
                let e = a.isHorizontal(),
                  i = f ? y : -y;
                if (0 === t)
                  w &&
                    ((a.wrapperEl.style.scrollSnapType = "none"),
                    (a._immediateVirtual = !0)),
                    w &&
                    !a._cssModeVirtualInitialSet &&
                    a.params.initialSlide > 0
                      ? ((a._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          m[e ? "scrollLeft" : "scrollTop"] = i;
                        }))
                      : (m[e ? "scrollLeft" : "scrollTop"] = i),
                    w &&
                      requestAnimationFrame(() => {
                        (a.wrapperEl.style.scrollSnapType = ""),
                          (a._immediateVirtual = !1);
                      });
                else {
                  if (!a.support.smoothScroll)
                    return (
                      (0, o.t)({
                        swiper: a,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  m.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
                }
                return !0;
              }
              return (
                a.setTransition(t),
                a.setTranslate(y),
                a.updateActiveIndex(l),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, r),
                a.transitionStart(i, n),
                0 === t
                  ? a.transitionEnd(i, n)
                  : a.animating ||
                    ((a.animating = !0),
                    a.onSlideToWrapperTransitionEnd ||
                      (a.onSlideToWrapperTransitionEnd = function (e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.wrapperEl.removeEventListener(
                            "transitionend",
                            a.onSlideToWrapperTransitionEnd
                          ),
                          (a.onSlideToWrapperTransitionEnd = null),
                          delete a.onSlideToWrapperTransitionEnd,
                          a.transitionEnd(i, n));
                      }),
                    a.wrapperEl.addEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, i, r) {
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let s = this;
              if (s.destroyed) return;
              void 0 === t && (t = s.params.speed);
              let n = s.grid && s.params.grid && s.params.grid.rows > 1,
                a = e;
              if (s.params.loop) {
                if (s.virtual && s.params.virtual.enabled)
                  a += s.virtual.slidesBefore;
                else {
                  let e;
                  if (n) {
                    let t = a * s.params.grid.rows;
                    e = s.slides.filter(
                      (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                    )[0].column;
                  } else e = s.getSlideIndexByData(a);
                  let t = n
                      ? Math.ceil(s.slides.length / s.params.grid.rows)
                      : s.slides.length,
                    { centeredSlides: i } = s.params,
                    l = s.params.slidesPerView;
                  "auto" === l
                    ? (l = s.slidesPerViewDynamic())
                    : ((l = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
                      i && l % 2 == 0 && (l += 1));
                  let o = t - e < l;
                  if (
                    (i && (o = o || e < Math.ceil(l / 2)),
                    r &&
                      i &&
                      "auto" !== s.params.slidesPerView &&
                      !n &&
                      (o = !1),
                    o)
                  ) {
                    let r = i
                      ? e < s.activeIndex
                        ? "prev"
                        : "next"
                      : e - s.activeIndex - 1 < s.params.slidesPerView
                      ? "next"
                      : "prev";
                    s.loopFix({
                      direction: r,
                      slideTo: !0,
                      activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                      slideRealIndex: "next" === r ? s.realIndex : void 0,
                    });
                  }
                  if (n) {
                    let e = a * s.params.grid.rows;
                    a = s.slides.filter(
                      (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                    )[0].column;
                  } else a = s.getSlideIndexByData(a);
                }
              }
              return (
                requestAnimationFrame(() => {
                  s.slideTo(a, t, i, r);
                }),
                s
              );
            },
            slideNext: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                { enabled: s, params: n, animating: a } = r;
              if (!s || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let l = n.slidesPerGroup;
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
              let o = r.activeIndex < n.slidesPerGroupSkip ? 1 : l,
                d = r.virtual && n.virtual.enabled;
              if (n.loop) {
                if (a && !d && n.loopPreventsSliding) return !1;
                if (
                  (r.loopFix({ direction: "next" }),
                  (r._clientLeft = r.wrapperEl.clientLeft),
                  r.activeIndex === r.slides.length - 1 && n.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      r.slideTo(r.activeIndex + o, e, t, i);
                    }),
                    !0
                  );
              }
              return n.rewind && r.isEnd
                ? r.slideTo(0, e, t, i)
                : r.slideTo(r.activeIndex + o, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                {
                  params: s,
                  snapGrid: n,
                  slidesGrid: a,
                  rtlTranslate: l,
                  enabled: o,
                  animating: d,
                } = r;
              if (!o || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let u = r.virtual && s.virtual.enabled;
              if (s.loop) {
                if (d && !u && s.loopPreventsSliding) return !1;
                r.loopFix({ direction: "prev" }),
                  (r._clientLeft = r.wrapperEl.clientLeft);
              }
              function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let p = c(l ? r.translate : -r.translate),
                h = n.map((e) => c(e)),
                f = n[h.indexOf(p) - 1];
              if (void 0 === f && s.cssMode) {
                let e;
                n.forEach((t, i) => {
                  p >= t && (e = i);
                }),
                  void 0 !== e && (f = n[e > 0 ? e - 1 : e]);
              }
              let m = 0;
              if (
                (void 0 !== f &&
                  ((m = a.indexOf(f)) < 0 && (m = r.activeIndex - 1),
                  "auto" === s.slidesPerView &&
                    1 === s.slidesPerGroup &&
                    s.slidesPerGroupAuto &&
                    (m = Math.max(
                      (m = m - r.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                s.rewind && r.isBeginning)
              ) {
                let s =
                  r.params.virtual && r.params.virtual.enabled && r.virtual
                    ? r.virtual.slides.length - 1
                    : r.slides.length - 1;
                return r.slideTo(s, e, t, i);
              }
              return s.loop && 0 === r.activeIndex && s.cssMode
                ? (requestAnimationFrame(() => {
                    r.slideTo(m, e, t, i);
                  }),
                  !0)
                : r.slideTo(m, e, t, i);
            },
            slideReset: function (e, t, i) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return (
                  void 0 === e && (e = this.params.speed),
                  this.slideTo(this.activeIndex, e, t, i)
                );
            },
            slideToClosest: function (e, t, i, r) {
              if (
                (void 0 === t && (t = !0),
                void 0 === r && (r = 0.5),
                this.destroyed)
              )
                return;
              void 0 === e && (e = this.params.speed);
              let s = this.activeIndex,
                n = Math.min(this.params.slidesPerGroupSkip, s),
                a = n + Math.floor((s - n) / this.params.slidesPerGroup),
                l = this.rtlTranslate ? this.translate : -this.translate;
              if (l >= this.snapGrid[a]) {
                let e = this.snapGrid[a];
                l - e > (this.snapGrid[a + 1] - e) * r &&
                  (s += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[a - 1];
                l - e <= (this.snapGrid[a] - e) * r &&
                  (s -= this.params.slidesPerGroup);
              }
              return (
                (s = Math.min(
                  (s = Math.max(s, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(s, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this;
              if (t.destroyed) return;
              let { params: i, slidesEl: r } = t,
                s =
                  "auto" === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                n = t.clickedIndex,
                a = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  t.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
                )),
                  i.centeredSlides
                    ? n < t.loopedSlides - s / 2 ||
                      n > t.slides.length - t.loopedSlides + s / 2
                      ? (t.loopFix(),
                        (n = t.getSlideIndex(
                          (0, o.e)(r, `${a}[data-swiper-slide-index="${e}"]`)[0]
                        )),
                        (0, o.n)(() => {
                          t.slideTo(n);
                        }))
                      : t.slideTo(n)
                    : n > t.slides.length - s
                    ? (t.loopFix(),
                      (n = t.getSlideIndex(
                        (0, o.e)(r, `${a}[data-swiper-slide-index="${e}"]`)[0]
                      )),
                      (0, o.n)(() => {
                        t.slideTo(n);
                      }))
                    : t.slideTo(n);
              } else t.slideTo(n);
            },
          },
          loop: {
            loopCreate: function (e) {
              let t = this,
                { params: i, slidesEl: r } = t;
              if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
              let s = t.grid && i.grid && i.grid.rows > 1,
                n = i.slidesPerGroup * (s ? i.grid.rows : 1),
                a = t.slides.length % n != 0,
                l = s && t.slides.length % i.grid.rows != 0,
                d = (e) => {
                  for (let r = 0; r < e; r += 1) {
                    let e = t.isElement
                      ? (0, o.c)("swiper-slide", [i.slideBlankClass])
                      : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                    t.slidesEl.append(e);
                  }
                };
              a
                ? i.loopAddBlankSlides
                  ? (d(n - (t.slides.length % n)),
                    t.recalcSlides(),
                    t.updateSlides())
                  : (0, o.u)(
                      "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                    )
                : l &&
                  (i.loopAddBlankSlides
                    ? (d(i.grid.rows - (t.slides.length % i.grid.rows)),
                      t.recalcSlides(),
                      t.updateSlides())
                    : (0, o.u)(
                        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                      )),
                (0, o.e)(r, `.${i.slideClass}, swiper-slide`).forEach(
                  (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                  }
                ),
                t.loopFix({
                  slideRealIndex: e,
                  direction: i.centeredSlides ? void 0 : "next",
                });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: i = !0,
                  direction: r,
                  setTranslate: s,
                  activeSlideIndex: n,
                  byController: a,
                  byMousewheel: l,
                } = void 0 === e ? {} : e,
                d = this;
              if (!d.params.loop) return;
              d.emit("beforeLoopFix");
              let {
                  slides: u,
                  allowSlidePrev: c,
                  allowSlideNext: p,
                  slidesEl: h,
                  params: f,
                } = d,
                { centeredSlides: m } = f;
              if (
                ((d.allowSlidePrev = !0),
                (d.allowSlideNext = !0),
                d.virtual && f.virtual.enabled)
              ) {
                i &&
                  (f.centeredSlides || 0 !== d.snapIndex
                    ? f.centeredSlides && d.snapIndex < f.slidesPerView
                      ? d.slideTo(
                          d.virtual.slides.length + d.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : d.snapIndex === d.snapGrid.length - 1 &&
                        d.slideTo(d.virtual.slidesBefore, 0, !1, !0)
                    : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                  (d.allowSlidePrev = c),
                  (d.allowSlideNext = p),
                  d.emit("loopFix");
                return;
              }
              let g = f.slidesPerView;
              "auto" === g
                ? (g = d.slidesPerViewDynamic())
                : ((g = Math.ceil(parseFloat(f.slidesPerView, 10))),
                  m && g % 2 == 0 && (g += 1));
              let v = f.slidesPerGroupAuto ? g : f.slidesPerGroup,
                b = v;
              b % v != 0 && (b += v - (b % v)),
                (b += f.loopAdditionalSlides),
                (d.loopedSlides = b);
              let y = d.grid && f.grid && f.grid.rows > 1;
              u.length < g + b
                ? (0, o.u)(
                    "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                  )
                : y &&
                  "row" === f.grid.fill &&
                  (0, o.u)(
                    "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                  );
              let w = [],
                E = [],
                S = d.activeIndex;
              void 0 === n
                ? (n = d.getSlideIndex(
                    u.filter((e) => e.classList.contains(f.slideActiveClass))[0]
                  ))
                : (S = n);
              let T = "next" === r || !r,
                x = "prev" === r || !r,
                _ = 0,
                C = 0,
                P = y ? Math.ceil(u.length / f.grid.rows) : u.length,
                M =
                  (y ? u[n].column : n) +
                  (m && void 0 === s ? -g / 2 + 0.5 : 0);
              if (M < b) {
                _ = Math.max(b - M, v);
                for (let e = 0; e < b - M; e += 1) {
                  let t = e - Math.floor(e / P) * P;
                  if (y) {
                    let e = P - t - 1;
                    for (let t = u.length - 1; t >= 0; t -= 1)
                      u[t].column === e && w.push(t);
                  } else w.push(P - t - 1);
                }
              } else if (M + g > P - b) {
                C = Math.max(M - (P - 2 * b), v);
                for (let e = 0; e < C; e += 1) {
                  let t = e - Math.floor(e / P) * P;
                  y
                    ? u.forEach((e, i) => {
                        e.column === t && E.push(i);
                      })
                    : E.push(t);
                }
              }
              if (
                ((d.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  d.__preventObserver__ = !1;
                }),
                x &&
                  w.forEach((e) => {
                    (u[e].swiperLoopMoveDOM = !0),
                      h.prepend(u[e]),
                      (u[e].swiperLoopMoveDOM = !1);
                  }),
                T &&
                  E.forEach((e) => {
                    (u[e].swiperLoopMoveDOM = !0),
                      h.append(u[e]),
                      (u[e].swiperLoopMoveDOM = !1);
                  }),
                d.recalcSlides(),
                "auto" === f.slidesPerView
                  ? d.updateSlides()
                  : y &&
                    ((w.length > 0 && x) || (E.length > 0 && T)) &&
                    d.slides.forEach((e, t) => {
                      d.grid.updateSlide(t, e, d.slides);
                    }),
                f.watchSlidesProgress && d.updateSlidesOffset(),
                i)
              ) {
                if (w.length > 0 && x) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[S],
                      t = d.slidesGrid[S + _] - e;
                    l
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(S + Math.ceil(_), 0, !1, !0),
                        s &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else if (s) {
                    let e = y ? w.length / f.grid.rows : w.length;
                    d.slideTo(d.activeIndex + e, 0, !1, !0),
                      (d.touchEventsData.currentTranslate = d.translate);
                  }
                } else if (E.length > 0 && T) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[S],
                      t = d.slidesGrid[S - C] - e;
                    l
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(S - C, 0, !1, !0),
                        s &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else {
                    let e = y ? E.length / f.grid.rows : E.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0);
                  }
                }
              }
              if (
                ((d.allowSlidePrev = c),
                (d.allowSlideNext = p),
                d.controller && d.controller.control && !a)
              ) {
                let e = {
                  slideRealIndex: t,
                  direction: r,
                  setTranslate: s,
                  activeSlideIndex: n,
                  byController: !0,
                };
                Array.isArray(d.controller.control)
                  ? d.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({
                          ...e,
                          slideTo:
                            t.params.slidesPerView === f.slidesPerView && i,
                        });
                    })
                  : d.controller.control instanceof d.constructor &&
                    d.controller.control.params.loop &&
                    d.controller.control.loopFix({
                      ...e,
                      slideTo:
                        d.controller.control.params.slidesPerView ===
                          f.slidesPerView && i,
                    });
              }
              d.emit("loopFix");
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (!e.loop || (this.virtual && this.params.virtual.enabled))
                return;
              this.recalcSlides();
              let i = [];
              this.slides.forEach((e) => {
                i[
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex
                ] = e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                i.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              let i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = b.bind(this)),
                (this.onTouchMove = y.bind(this)),
                (this.onTouchEnd = w.bind(this)),
                (this.onDocumentTouchStart = _.bind(this)),
                e.cssMode && (this.onScroll = T.bind(this)),
                (this.onClick = S.bind(this)),
                (this.onLoad = x.bind(this)),
                C(this, "on");
            },
            detachEvents: function () {
              C(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: i, params: r, el: s } = e,
                n = r.breakpoints;
              if (!n || (n && 0 === Object.keys(n).length)) return;
              let a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              let l = (a in n ? n[a] : void 0) || e.originalParams,
                d = P(e, r),
                u = P(e, l),
                c = e.params.grabCursor,
                p = l.grabCursor,
                h = r.enabled;
              d && !u
                ? (s.classList.remove(
                    `${r.containerModifierClass}grid`,
                    `${r.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  u &&
                  (s.classList.add(`${r.containerModifierClass}grid`),
                  ((l.grid.fill && "column" === l.grid.fill) ||
                    (!l.grid.fill && "column" === r.grid.fill)) &&
                    s.classList.add(`${r.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                c && !p ? e.unsetGrabCursor() : !c && p && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === l[t]) return;
                  let i = r[t] && r[t].enabled,
                    s = l[t] && l[t].enabled;
                  i && !s && e[t].disable(), !i && s && e[t].enable();
                });
              let f = l.direction && l.direction !== r.direction,
                m = r.loop && (l.slidesPerView !== r.slidesPerView || f),
                g = r.loop;
              f && i && e.changeDirection(), (0, o.w)(e.params, l);
              let v = e.params.enabled,
                b = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                h && !v ? e.disable() : !h && v && e.enable(),
                (e.currentBreakpoint = a),
                e.emit("_beforeBreakpoint", l),
                i &&
                  (m
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !g && b
                    ? (e.loopCreate(t), e.updateSlides())
                    : g && !b && e.loopDestroy()),
                e.emit("breakpoint", l);
            },
            getBreakpoint: function (e, t, i) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !i))
              )
                return;
              let r = !1,
                s = (0, l.a)(),
                n = "window" === t ? s.innerHeight : i.clientHeight,
                a = Object.keys(e).map((e) =>
                  "string" == typeof e && 0 === e.indexOf("@")
                    ? { value: n * parseFloat(e.substr(1)), point: e }
                    : { value: e, point: e }
                );
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < a.length; e += 1) {
                let { point: n, value: l } = a[e];
                "window" === t
                  ? s.matchMedia(`(min-width: ${l}px)`).matches && (r = n)
                  : l <= i.clientWidth && (r = n);
              }
              return r || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: i } = t;
              if (i) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: i, el: r, device: s } = this,
                n = (function (e, t) {
                  let i = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((r) => {
                            e[r] && i.push(t + r);
                          })
                        : "string" == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: s.android },
                    { ios: s.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...n), r.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e &&
                "string" != typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        A = {};
      class L {
        constructor() {
          let e, t;
          for (var i = arguments.length, r = Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
          1 === r.length &&
          r[0].constructor &&
          "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = (0, o.w)({}, t)),
            e && !t.el && (t.el = e);
          let a = (0, l.g)();
          if (
            t.el &&
            "string" == typeof t.el &&
            a.querySelectorAll(t.el).length > 1
          ) {
            let e = [];
            return (
              a.querySelectorAll(t.el).forEach((i) => {
                let r = (0, o.w)({}, t, { el: i });
                e.push(new L(r));
              }),
              e
            );
          }
          let c = this;
          (c.__swiper__ = !0),
            (c.support = d()),
            (c.device = u({ userAgent: t.userAgent })),
            (c.browser =
              (n ||
                (n = (function () {
                  let e = (0, l.a)(),
                    t = u(),
                    i = !1;
                  function r() {
                    let t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      0 > t.indexOf("chrome") &&
                      0 > t.indexOf("android")
                    );
                  }
                  if (r()) {
                    let t = String(e.navigator.userAgent);
                    if (t.includes("Version/")) {
                      let [e, r] = t
                        .split("Version/")[1]
                        .split(" ")[0]
                        .split(".")
                        .map((e) => Number(e));
                      i = e < 16 || (16 === e && r < 2);
                    }
                  }
                  let s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                    n = r(),
                    a = n || (s && t.ios);
                  return {
                    isSafari: i || n,
                    needPerspectiveFix: i,
                    need3dFix: a,
                    isWebView: s,
                  };
                })()),
              n)),
            (c.eventsListeners = {}),
            (c.eventsAnyListeners = []),
            (c.modules = [...c.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              c.modules.push(...t.modules);
          let p = {};
          c.modules.forEach((e) => {
            e({
              params: t,
              swiper: c,
              extendParams: (function (e, t) {
                return function (i) {
                  void 0 === i && (i = {});
                  let r = Object.keys(i)[0],
                    s = i[r];
                  if (
                    "object" != typeof s ||
                    null === s ||
                    (!0 === e[r] && (e[r] = { enabled: !0 }),
                    "navigation" === r &&
                      e[r] &&
                      e[r].enabled &&
                      !e[r].prevEl &&
                      !e[r].nextEl &&
                      (e[r].auto = !0),
                    ["pagination", "scrollbar"].indexOf(r) >= 0 &&
                      e[r] &&
                      e[r].enabled &&
                      !e[r].el &&
                      (e[r].auto = !0),
                    !(r in e && "enabled" in s))
                  ) {
                    (0, o.w)(t, i);
                    return;
                  }
                  "object" != typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                    e[r] || (e[r] = { enabled: !1 }),
                    (0, o.w)(t, i);
                };
              })(t, p),
              on: c.on.bind(c),
              once: c.once.bind(c),
              off: c.off.bind(c),
              emit: c.emit.bind(c),
            });
          });
          let h = (0, o.w)({}, M, p);
          return (
            (c.params = (0, o.w)({}, h, A, t)),
            (c.originalParams = (0, o.w)({}, c.params)),
            (c.passedParams = (0, o.w)({}, t)),
            c.params &&
              c.params.on &&
              Object.keys(c.params.on).forEach((e) => {
                c.on(e, c.params.on[e]);
              }),
            c.params && c.params.onAny && c.onAny(c.params.onAny),
            Object.assign(c, {
              enabled: c.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === c.params.direction,
              isVertical: () => "vertical" === c.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: c.params.allowSlideNext,
              allowSlidePrev: c.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: c.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: c.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            c.emit("_swiper"),
            c.params.init && c.init(),
            c
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: i } = this,
            r = (0, o.e)(t, `.${i.slideClass}, swiper-slide`),
            s = (0, o.h)(r[0]);
          return (0, o.h)(e) - s;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let i = this.minTranslate(),
            r = (this.maxTranslate() - i) * e + i;
          this.translateTo(r, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((i) => {
            let r = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          let {
              params: i,
              slides: r,
              slidesGrid: s,
              slidesSizesGrid: n,
              size: a,
              activeIndex: l,
            } = this,
            o = 1;
          if ("number" == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e,
              t = r[l] ? Math.ceil(r[l].swiperSlideSize) : 0;
            for (let i = l + 1; i < r.length; i += 1)
              r[i] &&
                !e &&
                ((t += Math.ceil(r[i].swiperSlideSize)),
                (o += 1),
                t > a && (e = !0));
            for (let i = l - 1; i >= 0; i -= 1)
              r[i] &&
                !e &&
                ((t += r[i].swiperSlideSize), (o += 1), t > a && (e = !0));
          } else if ("current" === e)
            for (let e = l + 1; e < r.length; e += 1)
              (t ? s[e] + n[e] - s[l] < a : s[e] - s[l] < a) && (o += 1);
          else for (let e = l - 1; e >= 0; e -= 1) s[l] - s[e] < a && (o += 1);
          return o;
        }
        update() {
          let e;
          let t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: i, params: r } = t;
          function s() {
            let e = Math.min(
              Math.max(
                t.rtlTranslate ? -1 * t.translate : t.translate,
                t.maxTranslate()
              ),
              t.minTranslate()
            );
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (r.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && h(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            r.freeMode && r.freeMode.enabled && !r.cssMode)
          )
            s(), r.autoHeight && t.updateAutoHeight();
          else {
            if (
              ("auto" === r.slidesPerView || r.slidesPerView > 1) &&
              t.isEnd &&
              !r.centeredSlides
            ) {
              let i =
                t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(i.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || s();
          }
          r.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.el.classList.remove(
                `${this.params.containerModifierClass}${i}`
              ),
              this.el.classList.add(
                `${this.params.containerModifierClass}${e}`
              ),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "rtl"))
              : (this.el.classList.remove(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (("string" == typeof i && (i = document.querySelector(i)), !i))
            return !1;
          (i.swiper = t),
            i.parentNode &&
              i.parentNode.host &&
              i.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          let r = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            s =
              i && i.shadowRoot && i.shadowRoot.querySelector
                ? i.shadowRoot.querySelector(r())
                : (0, o.e)(i, r())[0];
          return (
            !s &&
              t.params.createElements &&
              ((s = (0, o.c)("div", t.params.wrapperClass)),
              i.append(s),
              (0, o.e)(i, `.${t.params.slideClass}`).forEach((e) => {
                s.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: s,
              slidesEl:
                t.isElement && !i.parentNode.host.slideSlots
                  ? i.parentNode.host
                  : s,
              hostEl: t.isElement ? i.parentNode.host : i,
              mounted: !0,
              rtl:
                "rtl" === i.dir.toLowerCase() ||
                "rtl" === (0, o.p)(i, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === i.dir.toLowerCase() ||
                  "rtl" === (0, o.p)(i, "direction")),
              wrongRTL: "-webkit-box" === (0, o.p)(s, "display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized || !1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          let i = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((e) => {
              e.complete
                ? h(t, e)
                : e.addEventListener("load", (e) => {
                    h(t, e.target);
                  });
            }),
            m(t),
            (t.initialized = !0),
            m(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let i = this,
            { params: r, el: s, wrapperEl: n, slides: a } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              r.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                s && "string" != typeof s && s.removeAttribute("style"),
                n && n.removeAttribute("style"),
                a &&
                  a.length &&
                  a.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideFullyVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                (i.el && "string" != typeof i.el && (i.el.swiper = null),
                (0, o.x)(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, o.w)(A, e);
        }
        static get extendedDefaults() {
          return A;
        }
        static get defaults() {
          return M;
        }
        static installModule(e) {
          L.prototype.__modules__ || (L.prototype.__modules__ = []);
          let t = L.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => L.installModule(e))
              : L.installModule(e),
            L
          );
        }
      }
      Object.keys(O).forEach((e) => {
        Object.keys(O[e]).forEach((t) => {
          L.prototype[t] = O[e][t];
        });
      }),
        L.use([
          function (e) {
            let { swiper: t, on: i, emit: r } = e,
              s = (0, l.a)(),
              n = null,
              a = null,
              o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              d = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (n = new ResizeObserver((e) => {
                    a = s.requestAnimationFrame(() => {
                      let { width: i, height: r } = t,
                        s = i,
                        n = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: i,
                          contentRect: r,
                          target: a,
                        } = e;
                        (a && a !== t.el) ||
                          ((s = r ? r.width : (i[0] || i).inlineSize),
                          (n = r ? r.height : (i[0] || i).blockSize));
                      }),
                        (s !== i || n !== r) && o();
                    });
                  })).observe(t.el);
              },
              u = () => {
                a && s.cancelAnimationFrame(a),
                  n && n.unobserve && t.el && (n.unobserve(t.el), (n = null));
              },
              c = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            i("init", () => {
              if (t.params.resizeObserver && void 0 !== s.ResizeObserver) {
                d();
                return;
              }
              s.addEventListener("resize", o),
                s.addEventListener("orientationchange", c);
            }),
              i("destroy", () => {
                u(),
                  s.removeEventListener("resize", o),
                  s.removeEventListener("orientationchange", c);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: r, emit: s } = e,
              n = [],
              a = (0, l.a)(),
              d = function (e, i) {
                void 0 === i && (i = {});
                let r = new (a.MutationObserver || a.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) {
                      s("observerUpdate", e[0]);
                      return;
                    }
                    let i = function () {
                      s("observerUpdate", e[0]);
                    };
                    a.requestAnimationFrame
                      ? a.requestAnimationFrame(i)
                      : a.setTimeout(i, 0);
                  }
                );
                r.observe(e, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList:
                    t.isElement || (void 0 === i.childList || i).childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  n.push(r);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = (0, o.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) d(e[t]);
                  }
                  d(t.hostEl, { childList: t.params.observeSlideChildren }),
                    d(t.wrapperEl, { attributes: !1 });
                }
              }),
              r("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      let I = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function R(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function k(e, t) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : R(t[i]) && R(e[i]) && Object.keys(t[i]).length > 0
              ? t[i].__swiper__
                ? (e[i] = t[i])
                : k(e[i], t[i])
              : (e[i] = t[i]);
          });
      }
      function N(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            void 0 === e.navigation.nextEl &&
            void 0 === e.navigation.prevEl
        );
      }
      function D(e) {
        return (
          void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
        );
      }
      function j(e) {
        return (
          void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
        );
      }
      function z(e) {
        void 0 === e && (e = "");
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = [];
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e);
          }),
          i.join(" ")
        );
      }
      let G = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function F() {
        return (F = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function $(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function B(e, t) {
        return "undefined" == typeof window
          ? (0, a.useEffect)(e, t)
          : (0, a.useLayoutEffect)(e, t);
      }
      let V = (0, a.createContext)(null),
        H = (0, a.createContext)(null),
        W = (0, a.forwardRef)(function (e, t) {
          var i;
          let {
              className: r,
              tag: s = "div",
              wrapperTag: n = "div",
              children: l,
              onSwiper: o,
              ...d
            } = void 0 === e ? {} : e,
            u = !1,
            [c, p] = (0, a.useState)("swiper"),
            [h, f] = (0, a.useState)(null),
            [m, g] = (0, a.useState)(!1),
            v = (0, a.useRef)(!1),
            b = (0, a.useRef)(null),
            y = (0, a.useRef)(null),
            w = (0, a.useRef)(null),
            E = (0, a.useRef)(null),
            S = (0, a.useRef)(null),
            T = (0, a.useRef)(null),
            x = (0, a.useRef)(null),
            _ = (0, a.useRef)(null),
            {
              params: C,
              passedParams: P,
              rest: O,
              events: A,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let i = { on: {} },
                r = {},
                s = {};
              k(i, M), (i._emitClasses = !0), (i.init = !1);
              let n = {},
                a = I.map((e) => e.replace(/_/, ""));
              return (
                Object.keys(Object.assign({}, e)).forEach((l) => {
                  void 0 !== e[l] &&
                    (a.indexOf(l) >= 0
                      ? R(e[l])
                        ? ((i[l] = {}),
                          (s[l] = {}),
                          k(i[l], e[l]),
                          k(s[l], e[l]))
                        : ((i[l] = e[l]), (s[l] = e[l]))
                      : 0 === l.search(/on[A-Z]/) && "function" == typeof e[l]
                      ? t
                        ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                        : (i.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                      : (n[l] = e[l]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
                }),
                { params: i, passedParams: s, rest: n, events: r }
              );
            })(d),
            { slides: V, slots: W } = (function (e) {
              let t = [],
                i = {
                  "container-start": [],
                  "container-end": [],
                  "wrapper-start": [],
                  "wrapper-end": [],
                };
              return (
                a.Children.toArray(e).forEach((e) => {
                  if ($(e)) t.push(e);
                  else if (e.props && e.props.slot && i[e.props.slot])
                    i[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let r = (function e(t) {
                      let i = [];
                      return (
                        a.Children.toArray(t).forEach((t) => {
                          $(t)
                            ? i.push(t)
                            : t.props &&
                              t.props.children &&
                              e(t.props.children).forEach((e) => i.push(e));
                        }),
                        i
                      );
                    })(e.props.children);
                    r.length > 0
                      ? r.forEach((e) => t.push(e))
                      : i["container-end"].push(e);
                  } else i["container-end"].push(e);
                }),
                { slides: t, slots: i }
              );
            })(l),
            X = () => {
              g(!m);
            };
          Object.assign(C.on, {
            _containerClasses(e, t) {
              p(t);
            },
          });
          let U = () => {
            Object.assign(C.on, A), (u = !0);
            let e = { ...C };
            if (
              (delete e.wrapperClass,
              (y.current = new L(e)),
              y.current.virtual && y.current.params.virtual.enabled)
            ) {
              y.current.virtual.slides = V;
              let e = {
                cache: !1,
                slides: V,
                renderExternal: f,
                renderExternalUpdate: !1,
              };
              k(y.current.params.virtual, e),
                k(y.current.originalParams.virtual, e);
            }
          };
          b.current || U(), y.current && y.current.on("_beforeBreakpoint", X);
          let q = () => {
              !u &&
                A &&
                y.current &&
                Object.keys(A).forEach((e) => {
                  y.current.on(e, A[e]);
                });
            },
            Y = () => {
              A &&
                y.current &&
                Object.keys(A).forEach((e) => {
                  y.current.off(e, A[e]);
                });
            };
          return (
            (0, a.useEffect)(() => () => {
              y.current && y.current.off("_beforeBreakpoint", X);
            }),
            (0, a.useEffect)(() => {
              !v.current &&
                y.current &&
                (y.current.emitSlidesClasses(), (v.current = !0));
            }),
            B(() => {
              if ((t && (t.current = b.current), b.current))
                return (
                  y.current.destroyed && U(),
                  (function (e, t) {
                    let {
                      el: i,
                      nextEl: r,
                      prevEl: s,
                      paginationEl: n,
                      scrollbarEl: a,
                      swiper: l,
                    } = e;
                    N(t) &&
                      r &&
                      s &&
                      ((l.params.navigation.nextEl = r),
                      (l.originalParams.navigation.nextEl = r),
                      (l.params.navigation.prevEl = s),
                      (l.originalParams.navigation.prevEl = s)),
                      D(t) &&
                        n &&
                        ((l.params.pagination.el = n),
                        (l.originalParams.pagination.el = n)),
                      j(t) &&
                        a &&
                        ((l.params.scrollbar.el = a),
                        (l.originalParams.scrollbar.el = a)),
                      l.init(i);
                  })(
                    {
                      el: b.current,
                      nextEl: S.current,
                      prevEl: T.current,
                      paginationEl: x.current,
                      scrollbarEl: _.current,
                      swiper: y.current,
                    },
                    C
                  ),
                  o && !y.current.destroyed && o(y.current),
                  () => {
                    y.current &&
                      !y.current.destroyed &&
                      y.current.destroy(!0, !1);
                  }
                );
            }, []),
            B(() => {
              q();
              let e = (function (e, t, i, r, s) {
                let n = [];
                if (!t) return n;
                let a = (e) => {
                  0 > n.indexOf(e) && n.push(e);
                };
                if (i && r) {
                  let e = r.map(s),
                    t = i.map(s);
                  e.join("") !== t.join("") && a("children"),
                    r.length !== i.length && a("children");
                }
                return (
                  I.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((i) => {
                      if (i in e && i in t) {
                        if (R(e[i]) && R(t[i])) {
                          let r = Object.keys(e[i]),
                            s = Object.keys(t[i]);
                          r.length !== s.length
                            ? a(i)
                            : (r.forEach((r) => {
                                e[i][r] !== t[i][r] && a(i);
                              }),
                              s.forEach((r) => {
                                e[i][r] !== t[i][r] && a(i);
                              }));
                        } else e[i] !== t[i] && a(i);
                      }
                    }),
                  n
                );
              })(P, w.current, V, E.current, (e) => e.key);
              return (
                (w.current = P),
                (E.current = V),
                e.length &&
                  y.current &&
                  !y.current.destroyed &&
                  (function (e) {
                    let t,
                      i,
                      r,
                      s,
                      n,
                      a,
                      l,
                      o,
                      {
                        swiper: d,
                        slides: u,
                        passedParams: c,
                        changedParams: p,
                        nextEl: h,
                        prevEl: f,
                        scrollbarEl: m,
                        paginationEl: g,
                      } = e,
                      v = p.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: b,
                        pagination: y,
                        navigation: w,
                        scrollbar: E,
                        virtual: S,
                        thumbs: T,
                      } = d;
                    p.includes("thumbs") &&
                      c.thumbs &&
                      c.thumbs.swiper &&
                      !c.thumbs.swiper.destroyed &&
                      b.thumbs &&
                      (!b.thumbs.swiper || b.thumbs.swiper.destroyed) &&
                      (t = !0),
                      p.includes("controller") &&
                        c.controller &&
                        c.controller.control &&
                        b.controller &&
                        !b.controller.control &&
                        (i = !0),
                      p.includes("pagination") &&
                        c.pagination &&
                        (c.pagination.el || g) &&
                        (b.pagination || !1 === b.pagination) &&
                        y &&
                        !y.el &&
                        (r = !0),
                      p.includes("scrollbar") &&
                        c.scrollbar &&
                        (c.scrollbar.el || m) &&
                        (b.scrollbar || !1 === b.scrollbar) &&
                        E &&
                        !E.el &&
                        (s = !0),
                      p.includes("navigation") &&
                        c.navigation &&
                        (c.navigation.prevEl || f) &&
                        (c.navigation.nextEl || h) &&
                        (b.navigation || !1 === b.navigation) &&
                        w &&
                        !w.prevEl &&
                        !w.nextEl &&
                        (n = !0);
                    let x = (e) => {
                      d[e] &&
                        (d[e].destroy(),
                        "navigation" === e
                          ? (d.isElement &&
                              (d[e].prevEl.remove(), d[e].nextEl.remove()),
                            (b[e].prevEl = void 0),
                            (b[e].nextEl = void 0),
                            (d[e].prevEl = void 0),
                            (d[e].nextEl = void 0))
                          : (d.isElement && d[e].el.remove(),
                            (b[e].el = void 0),
                            (d[e].el = void 0)));
                    };
                    p.includes("loop") &&
                      d.isElement &&
                      (b.loop && !c.loop
                        ? (a = !0)
                        : !b.loop && c.loop
                        ? (l = !0)
                        : (o = !0)),
                      v.forEach((e) => {
                        if (R(b[e]) && R(c[e]))
                          Object.assign(b[e], c[e]),
                            ("navigation" === e ||
                              "pagination" === e ||
                              "scrollbar" === e) &&
                              "enabled" in c[e] &&
                              !c[e].enabled &&
                              x(e);
                        else {
                          let t = c[e];
                          (!0 === t || !1 === t) &&
                          ("navigation" === e ||
                            "pagination" === e ||
                            "scrollbar" === e)
                            ? !1 === t && x(e)
                            : (b[e] = c[e]);
                        }
                      }),
                      v.includes("controller") &&
                        !i &&
                        d.controller &&
                        d.controller.control &&
                        b.controller &&
                        b.controller.control &&
                        (d.controller.control = b.controller.control),
                      p.includes("children") && u && S && b.virtual.enabled
                        ? ((S.slides = u), S.update(!0))
                        : p.includes("virtual") &&
                          S &&
                          b.virtual.enabled &&
                          (u && (S.slides = u), S.update(!0)),
                      p.includes("children") && u && b.loop && (o = !0),
                      t && T.init() && T.update(!0),
                      i && (d.controller.control = b.controller.control),
                      r &&
                        (d.isElement &&
                          (!g || "string" == typeof g) &&
                          ((g = document.createElement("div")).classList.add(
                            "swiper-pagination"
                          ),
                          g.part.add("pagination"),
                          d.el.appendChild(g)),
                        g && (b.pagination.el = g),
                        y.init(),
                        y.render(),
                        y.update()),
                      s &&
                        (d.isElement &&
                          (!m || "string" == typeof m) &&
                          ((m = document.createElement("div")).classList.add(
                            "swiper-scrollbar"
                          ),
                          m.part.add("scrollbar"),
                          d.el.appendChild(m)),
                        m && (b.scrollbar.el = m),
                        E.init(),
                        E.updateSize(),
                        E.setTranslate()),
                      n &&
                        (d.isElement &&
                          ((h && "string" != typeof h) ||
                            ((h = document.createElement("div")).classList.add(
                              "swiper-button-next"
                            ),
                            (h.innerHTML = d.hostEl.constructor.nextButtonSvg),
                            h.part.add("button-next"),
                            d.el.appendChild(h)),
                          (f && "string" != typeof f) ||
                            ((f = document.createElement("div")).classList.add(
                              "swiper-button-prev"
                            ),
                            (f.innerHTML = d.hostEl.constructor.prevButtonSvg),
                            f.part.add("button-prev"),
                            d.el.appendChild(f))),
                        h && (b.navigation.nextEl = h),
                        f && (b.navigation.prevEl = f),
                        w.init(),
                        w.update()),
                      p.includes("allowSlideNext") &&
                        (d.allowSlideNext = c.allowSlideNext),
                      p.includes("allowSlidePrev") &&
                        (d.allowSlidePrev = c.allowSlidePrev),
                      p.includes("direction") &&
                        d.changeDirection(c.direction, !1),
                      (a || o) && d.loopDestroy(),
                      (l || o) && d.loopCreate(),
                      d.update();
                  })({
                    swiper: y.current,
                    slides: V,
                    passedParams: P,
                    changedParams: e,
                    nextEl: S.current,
                    prevEl: T.current,
                    scrollbarEl: _.current,
                    paginationEl: x.current,
                  }),
                () => {
                  Y();
                }
              );
            }),
            B(() => {
              G(y.current);
            }, [h]),
            a.createElement(
              s,
              F({ ref: b, className: z(`${c}${r ? ` ${r}` : ""}`) }, O),
              a.createElement(
                H.Provider,
                { value: y.current },
                W["container-start"],
                a.createElement(
                  n,
                  {
                    className: (void 0 === (i = C.wrapperClass) && (i = ""), i)
                      ? i.includes("swiper-wrapper")
                        ? i
                        : `swiper-wrapper ${i}`
                      : "swiper-wrapper",
                  },
                  W["wrapper-start"],
                  C.virtual
                    ? (function (e, t, i) {
                        if (!i) return null;
                        let r = (e) => {
                            let i = e;
                            return (
                              e < 0
                                ? (i = t.length + e)
                                : i >= t.length && (i -= t.length),
                              i
                            );
                          },
                          s = e.isHorizontal()
                            ? {
                                [e.rtlTranslate
                                  ? "right"
                                  : "left"]: `${i.offset}px`,
                              }
                            : { top: `${i.offset}px` },
                          { from: n, to: l } = i,
                          o = e.params.loop ? -t.length : 0,
                          d = e.params.loop ? 2 * t.length : t.length,
                          u = [];
                        for (let e = o; e < d; e += 1)
                          e >= n && e <= l && u.push(t[r(e)]);
                        return u.map((t, i) =>
                          a.cloneElement(t, {
                            swiper: e,
                            style: s,
                            key: t.props.virtualIndex || t.key || `slide-${i}`,
                          })
                        );
                      })(y.current, V, h)
                    : V.map((e, t) =>
                        a.cloneElement(e, {
                          swiper: y.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  W["wrapper-end"]
                ),
                N(C) &&
                  a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("div", {
                      ref: T,
                      className: "swiper-button-prev",
                    }),
                    a.createElement("div", {
                      ref: S,
                      className: "swiper-button-next",
                    })
                  ),
                j(C) &&
                  a.createElement("div", {
                    ref: _,
                    className: "swiper-scrollbar",
                  }),
                D(C) &&
                  a.createElement("div", {
                    ref: x,
                    className: "swiper-pagination",
                  }),
                W["container-end"]
              )
            )
          );
        });
      W.displayName = "Swiper";
      let X = (0, a.forwardRef)(function (e, t) {
        let {
            tag: i = "div",
            children: r,
            className: s = "",
            swiper: n,
            zoom: l,
            lazy: o,
            virtualIndex: d,
            swiperSlideIndex: u,
            ...c
          } = void 0 === e ? {} : e,
          p = (0, a.useRef)(null),
          [h, f] = (0, a.useState)("swiper-slide"),
          [m, g] = (0, a.useState)(!1);
        function v(e, t, i) {
          t === p.current && f(i);
        }
        B(() => {
          if (
            (void 0 !== u && (p.current.swiperSlideIndex = u),
            t && (t.current = p.current),
            p.current && n)
          ) {
            if (n.destroyed) {
              "swiper-slide" !== h && f("swiper-slide");
              return;
            }
            return (
              n.on("_slideClass", v),
              () => {
                n && n.off("_slideClass", v);
              }
            );
          }
        }),
          B(() => {
            n && p.current && !n.destroyed && f(n.getSlideClasses(p.current));
          }, [n]);
        let b = {
            isActive: h.indexOf("swiper-slide-active") >= 0,
            isVisible: h.indexOf("swiper-slide-visible") >= 0,
            isPrev: h.indexOf("swiper-slide-prev") >= 0,
            isNext: h.indexOf("swiper-slide-next") >= 0,
          },
          y = () => ("function" == typeof r ? r(b) : r);
        return a.createElement(
          i,
          F(
            {
              ref: p,
              className: z(`${h}${s ? ` ${s}` : ""}`),
              "data-swiper-slide-index": d,
              onLoad: () => {
                g(!0);
              },
            },
            c
          ),
          l &&
            a.createElement(
              V.Provider,
              { value: b },
              a.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" == typeof l ? l : void 0,
                },
                y(),
                o &&
                  !m &&
                  a.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !l &&
            a.createElement(
              V.Provider,
              { value: b },
              y(),
              o &&
                !m &&
                a.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      X.displayName = "SwiperSlide";
    },
  },
]);
