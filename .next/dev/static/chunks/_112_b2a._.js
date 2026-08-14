(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>J,
    "useTheme",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = typeof window == "undefined", x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](x)) != null ? e : U;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](x) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = ({ forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R })=>{
    let [c, n] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "V.useState": ()=>H(m, l)
    }["V.useState"]), [T, y] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "V.useState": ()=>c === "system" ? E() : c
    }["V.useState"]), k = d ? Object.values(d) : a, S = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[S]": (o)=>{
            let r = o;
            if (!r) return;
            o === "system" && s && (r = E());
            let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = {
                "V.useCallback[S].L": (g)=>{
                    g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
                }
            }["V.useCallback[S].L"];
            if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
                let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
                P.style.colorScheme = D;
            }
            C == null || C();
        }
    }["V.useCallback[S]"], [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[f]": (o)=>{
            let r = typeof o == "function" ? o(c) : o;
            n(r);
            try {
                localStorage.setItem(m, r);
            } catch (v) {}
        }
    }["V.useCallback[f]"], [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "V.useCallback[A]": (o)=>{
            let r = E(o);
            y(r), c === "system" && s && !e && S("system");
        }
    }["V.useCallback[A]"], [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            let o = window.matchMedia(I);
            return o.addListener(A), A(o), ({
                "V.useEffect": ()=>o.removeListener(A)
            })["V.useEffect"];
        }
    }["V.useEffect"], [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            let o = {
                "V.useEffect.o": (r)=>{
                    r.key === m && (r.newValue ? n(r.newValue) : f(l));
                }
            }["V.useEffect.o"];
            return window.addEventListener("storage", o), ({
                "V.useEffect": ()=>window.removeEventListener("storage", o)
            })["V.useEffect"];
        }
    }["V.useEffect"], [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "V.useEffect": ()=>{
            S(e != null ? e : c);
        }
    }["V.useEffect"], [
        e,
        c
    ]);
    let Q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "V.useMemo[Q]": ()=>({
                theme: c,
                setTheme: f,
                forcedTheme: e,
                resolvedTheme: c === "system" ? T : c,
                themes: s ? [
                    ...a,
                    "system"
                ] : a,
                systemTheme: s ? T : void 0
            })
    }["V.useMemo[Q]"], [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](x.Provider, {
        value: Q
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w })=>{
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce: typeof window == "undefined" ? d : "",
        dangerouslySetInnerHTML: {
            __html: `(${M.toString()})(${p})`
        }
    });
}), H = (e, i)=>{
    if (O) return;
    let s;
    try {
        s = localStorage.getItem(e) || void 0;
    } catch (u) {}
    return s || i;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
;
}),
"[project]/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeCacheNode, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            cacheNode: activeCacheNode,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        cacheNode: activeCacheNode,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                cacheNode: oldEntry.cacheNode,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Browser variant of `./client-boundary-params`. In the browser the params and
// searchParams are created at render time rather than dynamically tracked.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createClientParams: null,
    createClientSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createClientParams: function() {
        return _paramsbrowser.createRenderParamsFromClient;
    },
    createClientSearchParams: function() {
        return _searchparamsbrowser.createRenderSearchParamsFromClient;
    }
});
const _paramsbrowser = __turbopack_context__.r("[project]/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
const _searchparamsbrowser = __turbopack_context__.r("[project]/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientPageRoot({ Component, serverProvidedParams }) {
    let searchParams;
    let params;
    if (serverProvidedParams !== null) {
        searchParams = serverProvidedParams.searchParams;
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params as
        // props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
        // This is an intentional behavior change: when Cache Components is enabled,
        // client segments receive the "canonical" search params, not the
        // rewritten ones. Users should either call useSearchParams directly or pass
        // the rewritten ones in from a Server Component.
        // TODO: Log a deprecation error when this object is accessed
        searchParams = (0, _routeparams.urlSearchParamsToParsedUrlQuery)((0, _react.use)(_hooksclientcontextsharedruntime.SearchParamsContext));
    }
    const clientSearchParams = (0, _clientboundaryparams.createClientSearchParams)(searchParams);
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        params: clientParams,
        searchParams: clientSearchParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientSegmentRoot({ Component, slots, serverProvidedParams }) {
    let params;
    if (serverProvidedParams !== null) {
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params
        // as props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
    }
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        ...slots,
        params: clientParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return _impl.InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return _impl.PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return _impl.RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return _impl.SlotMarker;
    }
});
const _impl = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return SlotMarker;
    }
});
const InstantValidationBoundaryContext = null;
const PlaceValidationBoundaryBelowThisLevel = null;
const RenderValidationBoundaryAtThisLevel = null;
const SlotMarker = null;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LoadingBoundaryProvider: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LoadingBoundaryProvider: function() {
        return LoadingBoundaryProvider;
    },
    /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ default: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _boundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _bfcachestatemanager = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const enableNewScrollHandler = ("TURBOPACK compile-time value", true);
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Resolve the root scroll padding used by the viewport check.
 *
 * Computed lengths serialize as pixels, but percentages remain relative to
 * the scrollport. Preserve the existing behavior for values that still
 * contain unresolved CSS math.
 */ function getScrollPaddingTopInPixels(htmlElement, viewportHeight) {
    const scrollPaddingTop = getComputedStyle(htmlElement).scrollPaddingTop;
    const value = Number.parseFloat(scrollPaddingTop);
    if (!Number.isFinite(value) || value < 0) {
        return 0;
    }
    if (scrollPaddingTop.endsWith('px')) {
        return value;
    }
    if (scrollPaddingTop.endsWith('%')) {
        return value / 100 * viewportHeight;
    }
    return 0;
}
/**
 * Check where the top corner of the HTMLElement is relative to the usable
 * viewport.
 *
 * Scroll padding is resolved lazily so an empty Fragment does not trigger a
 * computed style read. The caller caches the value for the second check.
 */ function getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) {
    const rects = instance.getClientRects();
    if (rects.length === 0) {
        return 0;
    }
    let elementTop = Number.POSITIVE_INFINITY;
    for(let i = 0; i < rects.length; i++){
        const rect = rects[i];
        if (rect.top < elementTop) {
            elementTop = rect.top;
        }
    }
    return elementTop >= getScrollPaddingTop() && elementTop <= viewportHeight ? 1 : 2;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return document.getElementById(hashFragment) ?? // If the hash fragment is a name, the page has to scroll to the first element with that name.
    document.getElementsByName(hashFragment)[0] ?? null;
}
class InnerScrollAndFocusHandlerOld extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        this.handlePotentialScroll();
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once.
            const { focusAndScrollRef, cacheNode } = this.props;
            const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
            if (scrollRef === null || !scrollRef.current) return;
            let domNode = null;
            const hashFragment = focusAndScrollRef.hashFragment;
            if (hashFragment) {
                domNode = getHashFragmentDomNode(hashFragment);
                if (domNode === null) {
                    // A missing hash target is still a handled scroll intent. Do not
                    // fall back to the route segment or leave the intent pending.
                    scrollRef.current = false;
                    focusAndScrollRef.onlyHashChange = false;
                    focusAndScrollRef.hashFragment = null;
                    return;
                }
            }
            // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
            // This already caused a bug where the first child was a <link/> in head.
            if (!domNode) {
                domNode = findDOMNode(this);
            }
            // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
            if (!(domNode instanceof Element)) {
                return;
            }
            // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
            // If the element is skipped, try to select the next sibling and try again.
            while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                if ("TURBOPACK compile-time truthy", 1) {
                    if (domNode.parentElement?.localName === 'head') {
                    // We enter this state when metadata was rendered as part of the page or via Next.js.
                    // This is always a bug in Next.js and caused by React hoisting metadata.
                    // Fixed with `experimental.appNewScrollHandler`
                    }
                }
                // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                if (domNode.nextElementSibling === null) {
                    return;
                }
                domNode = domNode.nextElementSibling;
            }
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
                // In case of hash scroll, we only need to scroll the element into view
                if (hashFragment) {
                    domNode.scrollIntoView();
                    return;
                }
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                const htmlElement = document.documentElement;
                const viewportHeight = htmlElement.clientHeight;
                let scrollPaddingTop = null;
                const getScrollPaddingTop = ()=>{
                    if (scrollPaddingTop === null) {
                        // Reuse the style and layout update from the geometry read above.
                        scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                    }
                    return scrollPaddingTop;
                };
                // If the element's top edge is already in the viewport, exit early.
                if (getScrollTargetState(domNode, viewportHeight, getScrollPaddingTop) === 1) {
                    return;
                }
                // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                htmlElement.scrollTop = 0;
                // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                if (getScrollTargetState(domNode, viewportHeight, getScrollPaddingTop) !== 1) {
                    // Scroll into view doesn't scroll horizontally by default when not needed
                    domNode.scrollIntoView();
                }
            }, {
                // We will force layout by querying domNode position
                dontForceLayout: true,
                onlyHashChange: focusAndScrollRef.onlyHashChange
            });
            // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
            focusAndScrollRef.onlyHashChange = false;
            focusAndScrollRef.hashFragment = null;
            // Set focus on the element
            domNode.focus();
        };
    }
}
/**
 * Fork of InnerScrollAndFocusHandlerOld using Fragment refs for scrolling.
 * No longer focuses the first host descendant.
 */ function InnerScrollHandlerNew(props) {
    const childrenRef = _react.default.useRef(null);
    (0, _react.useLayoutEffect)(()=>{
        const { focusAndScrollRef, cacheNode } = props;
        const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
        if (scrollRef === null || !scrollRef.current) return;
        let instance = null;
        const hashFragment = focusAndScrollRef.hashFragment;
        if (hashFragment) {
            instance = getHashFragmentDomNode(hashFragment);
            if (instance === null) {
                // A missing hash target is still a handled scroll intent. Do not
                // fall back to the route Fragment or leave the intent pending.
                scrollRef.current = false;
                focusAndScrollRef.onlyHashChange = false;
                focusAndScrollRef.hashFragment = null;
                return;
            }
        } else {
            instance = childrenRef.current;
        }
        // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
        if (instance === null) {
            return;
        }
        let didHandleScroll = false;
        (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
            const htmlElement = document.documentElement;
            let viewportHeight = null;
            let initialTargetState = null;
            let scrollPaddingTop = null;
            const getScrollPaddingTop = ()=>{
                if (scrollPaddingTop === null) {
                    // Reuse the style and layout update from the geometry read.
                    scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                }
                return scrollPaddingTop;
            };
            if (!hashFragment) {
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                viewportHeight = htmlElement.clientHeight;
                initialTargetState = getScrollTargetState(instance, viewportHeight, getScrollPaddingTop);
                // An empty Fragment is not a scroll target. In particular, avoid
                // React's sibling fallback and leave the scroll signal available
                // for another changed segment.
                if (initialTargetState === 0) {
                    return;
                }
            }
            didHandleScroll = true;
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            // This handler intentionally leaves focus untouched; resetting focus on
            // navigation is deferred.
            // In case of hash scroll, we only need to scroll the element into view
            if (hashFragment) {
                instance.scrollIntoView();
                return;
            }
            // If the element's top edge is already in the viewport, exit early.
            if (initialTargetState === 1) {
                return;
            }
            // Otherwise, try scrolling go the top of the document to be backward compatible with pages
            // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
            // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
            // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
            htmlElement.scrollTop = 0;
            // Scroll to domNode if domNode is not in viewport when scrolled to top of document
            if (getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) === 2) {
                // Scroll into view doesn't scroll horizontally by default when not needed
                instance.scrollIntoView();
            }
        }, {
            // We will force layout by querying domNode position
            dontForceLayout: true,
            onlyHashChange: focusAndScrollRef.onlyHashChange
        });
        if (!didHandleScroll) {
            return;
        }
        // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
        focusAndScrollRef.onlyHashChange = false;
        focusAndScrollRef.hashFragment = null;
    }, // but be prepared for lots of manual testing.
    undefined);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Fragment, {
        ref: childrenRef,
        children: props.children
    });
}
const InnerScrollAndMaybeFocusHandler = ("TURBOPACK compile-time truthy", 1) ? InnerScrollHandlerNew : "TURBOPACK unreachable";
function ScrollAndMaybeFocusHandler({ children, cacheNode }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndMaybeFocusHandler, {
        focusAndScrollRef: context.focusAndScrollRef,
        cacheNode: cacheNode,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter({ tree, segmentPath, debugNameContext, cacheNode: maybeCacheNode, params, url, isActive }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    const parentNavPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const cacheNode = maybeCacheNode !== null ? maybeCacheNode : // This should only be reachable for inactive/hidden segments, during
    // prerendering The active segment should always be consistent with the
    // CacheNode tree. Regardless, if we don't have a matching CacheNode, we
    // must suspend rather than render nothing, to prevent showing an
    // inconsistent route.
    (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    let resolvedRsc;
    if ((0, _pprnavigations.isDeferredRsc)(rsc)) {
        const unwrappedRsc = (0, _react.use)(rsc);
        if (unwrappedRsc === null) {
            // If the promise was resolved to `null`, it means the data for this
            // segment was not returned by the server. Suspend indefinitely. When this
            // happens, the router is responsible for triggering a new state update to
            // un-suspend this segment.
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = unwrappedRsc;
    } else {
        // This is not a deferred RSC promise. Don't need to unwrap it.
        if (rsc === null) {
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = rsc;
    }
    // In dev, we create a NavigationPromisesContext containing the instrumented promises that provide
    // `useSelectedLayoutSegment` and `useSelectedLayoutSegments`.
    // Promises are cached outside of render to survive suspense retries.
    let navigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createNestedLayoutNavigationPromises } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)");
        navigationPromises = createNestedLayoutNavigationPromises(tree, parentNavPromises);
    }
    let children = resolvedRsc;
    if (navigationPromises) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
            value: navigationPromises,
            children: resolvedRsc
        });
    }
    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            parentParams: params,
            // This is always set to null as we enter a child segment. It's
            // populated by LoadingBoundaryProvider the next time we reach a
            // loading boundary.
            parentLoadingData: null,
            debugNameContext: debugNameContext,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            isActive: isActive
        },
        children: children
    });
    return children;
}
function LoadingBoundaryProvider({ loading, children }) {
    // Provides the data needed to render a loading.tsx boundary, via context.
    //
    // loading.tsx creates a Suspense boundary around each of a layout's child
    // slots. (Might be bit confusing to think about the data flow, but: if
    // loading.tsx and layout.tsx are in the same directory, they are assigned
    // to the same CacheNode.)
    //
    // This provider component does not render the Suspense boundary directly;
    // that's handled by LoadingBoundary.
    //
    // TODO: For simplicity, we should combine this provider with LoadingBoundary
    // and render the Suspense boundary directly. The only real benefit of doing
    // it separately is so that when there are multiple parallel routes, we only
    // send the boundary data once, rather than once per child. But that's a
    // negligible benefit and can be achieved via caching instead.
    const parentContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
    if (parentContext === null) {
        return children;
    }
    // All values except for parentLoadingData are the same as the parent context.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: parentContext.parentTree,
            parentCacheNode: parentContext.parentCacheNode,
            parentSegmentPath: parentContext.parentSegmentPath,
            parentParams: parentContext.parentParams,
            parentLoadingData: loading,
            debugNameContext: parentContext.debugNameContext,
            url: parentContext.url,
            isActive: parentContext.isActive
        },
        children: children
    });
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ name, loading, children }) {
    // TODO: For LoadingBoundary, and the other built-in boundary types, don't
    // wrap in an extra function component if no user-defined boundary is
    // provided. In other words, inline this conditional wrapping logic into
    // the parent component. More efficient and keeps unnecessary junk out of
    // the component stack.
    if (loading !== null) {
        const loadingRsc = loading[0];
        const loadingStyles = loading[1];
        const loadingScripts = loading[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            name: name,
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter({ parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, parentParams, parentLoadingData, url, isActive, debugNameContext } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const activeTree = parentTree[1][parallelRouterKey];
    const maybeParentSlots = parentCacheNode.slots;
    if (activeTree === undefined || maybeParentSlots === null) {
        // Could not find a matching segment. The client tree is inconsistent with
        // the server tree. Suspend indefinitely; the router will have already
        // detected the inconsistency when handling the server response, and
        // triggered a refresh of the page to recover.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    let maybeValidationBoundaryId = null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const activeSegment = activeTree[0];
    const activeCacheNode = maybeParentSlots[parallelRouterKey] ?? null;
    const activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcachestatemanager.useRouterBFCache)(activeTree, activeCacheNode, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const cacheNode = bfcacheEntry.cacheNode;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        let params = parentParams;
        if (Array.isArray(segment)) {
            // This segment contains a route param. Accumulate these as we traverse
            // down the router tree. The result represents the set of params that
            // the layout/page components are permitted to access below this point.
            const paramName = segment[0];
            const paramCacheKey = segment[1];
            const paramType = segment[2];
            const paramValue = (0, _routeparams.getParamValueFromCacheKey)(paramCacheKey, paramType);
            if (paramValue !== null) {
                params = {
                    ...parentParams,
                    [paramName]: paramValue
                };
            }
        }
        const debugName = getBoundaryDebugNameFromSegment(segment);
        // `debugNameContext` represents the nearest non-"virtual" parent segment.
        // `getBoundaryDebugNameFromSegment` returns undefined for virtual segments.
        // So if `debugName` is undefined, the context is passed through unchanged.
        const childDebugNameContext = debugName ?? debugNameContext;
        // In practical terms, clicking this name in the Suspense DevTools
        // should select the child slots of that layout.
        //
        // So the name we apply to the Activity boundary is actually based on
        // the nearest parent segments.
        //
        // We skip over "virtual" parents, i.e. ones inserted by Next.js that
        // don't correspond to application-defined code.
        const isVirtual = debugName === undefined;
        const debugNameToDisplay = isVirtual ? undefined : debugNameContext;
        let templateValue = /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndMaybeFocusHandler, {
            cacheNode: cacheNode,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                    errorComponent: error,
                    errorStyles: errorStyles,
                    errorScripts: errorScripts,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                        name: debugNameToDisplay,
                        // TODO: The loading module data for a segment is stored on the
                        // parent, then applied to each of that parent segment's
                        // parallel route slots. In the simple case where there's only
                        // one parallel route (the `children` slot), this is no
                        // different from if the loading module data were stored on the
                        // child directly. But I'm not sure this actually makes sense
                        // when there are multiple parallel routes. It's not a huge
                        // issue because you always have the option to define a narrower
                        // loading boundary for a particular slot. But this sort of
                        // smells like an implementation accident to me.
                        loading: parentLoadingData,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                            notFound: notFound,
                            forbidden: forbidden,
                            unauthorized: unauthorized,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                        url: url,
                                        tree: tree,
                                        params: params,
                                        cacheNode: cacheNode,
                                        segmentPath: segmentPath,
                                        debugNameContext: childDebugNameContext,
                                        isActive: isActive && stateKey === activeStateKey
                                    }),
                                    segmentBoundaryTriggerNode
                                ]
                            })
                        })
                    })
                }),
                segmentViewStateNode
            ]
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: templateValue,
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
function getBoundaryDebugNameFromSegment(segment) {
    if (segment === '/') {
        // Reached the root
        return '/';
    }
    if (typeof segment === 'string') {
        if (isVirtualLayout(segment)) {
            return undefined;
        } else {
            return segment + '/';
        }
    }
    const paramCacheKey = segment[1];
    return paramCacheKey + '/';
}
function isVirtualLayout(segment) {
    return(// (like __PAGE__ and __DEFAULT__) to avoid collisions with
    // user-defined route groups.
    segment === '(__SLOT__)');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration();
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A param property was accessed directly with ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForEnumeration() {
    console.error(`params are being enumerated. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderParamsFromClient(clientParams) {
    return makeDynamicallyTrackedParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A searchParam property was accessed directly with ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForSyncSpread() {
    console.error(`The keys of \`searchParams\` were accessed directly. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
};
}),
"[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
function disableSmoothScrollDuringRouteTransition(fn, options = {}) {
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    if (!hasDataAttribute) {
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            const { warnOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
            warnOnce('Detected `scroll-behavior: smooth` on the `<html>` element. To disable smooth scrolling during route transitions, ' + 'add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
        // No smooth scrolling configured, run directly without style manipulation
        fn();
        return;
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule',
    // Tested by flight when checking for iterables
    '@@iterator'
]);
}),
"[project]/src/components/i18n-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DICTIONARIES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DICTIONARIES"],
    "I18nProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I18nProvider"],
    "useI18n",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useI18n"],
    "useT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useT"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/i18n-provider.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
}),
"[project]/src/components/i18n-provider.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n,
    "useT",
    ()=>useT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const STORAGE_KEY = "aspidus-demo-locale";
function detectInitialLocale() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCALES"].includes(stored)) return stored;
    } catch  {
    /* ignore */ }
    const nav = window.navigator.language?.slice(0, 2).toLowerCase();
    if (nav && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCALES"].includes(nav)) return nav;
    return "en";
}
function I18nProvider({ children }) {
    _s();
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    // hydrate from localStorage / browser after mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "I18nProvider.useEffect": ()=>{
            setLocaleState(detectInitialLocale());
        }
    }["I18nProvider.useEffect"], []);
    const setLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "I18nProvider.useCallback[setLocale]": (l)=>{
            setLocaleState(l);
            try {
                window.localStorage.setItem(STORAGE_KEY, l);
            } catch  {
            /* ignore */ }
        }
    }["I18nProvider.useCallback[setLocale]"], []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "I18nProvider.useCallback[t]": (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translate"])(locale, key)
    }["I18nProvider.useCallback[t]"], [
        locale
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "I18nProvider.useMemo[value]": ()=>({
                locale,
                setLocale,
                t,
                locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCALES"],
                meta: ({
                    "I18nProvider.useMemo[value]": (l)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCALE_META"][l]
                })["I18nProvider.useMemo[value]"]
            })
    }["I18nProvider.useMemo[value]"], [
        locale,
        setLocale,
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/i18n-provider.tsx",
        lineNumber: 64,
        columnNumber: 10
    }, this);
}
_s(I18nProvider, "x42NzHibhtiEYgoXjOS2vZGgwM4=");
_c = I18nProvider;
function useI18n() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
    return ctx;
}
_s1(useI18n, "/dMy7t63NXD4eYACoT93CePwGrg=");
function useT() {
    _s2();
    return useI18n().t;
}
_s2(useT, "6S7w3lED6SJPQav7/pq1n53b1Uc=", false, function() {
    return [
        useI18n
    ];
});
;
var _c;
__turbopack_context__.k.register(_c, "I18nProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/theme-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        attribute: "class",
        defaultTheme: "light",
        enableSystem: false,
        disableTransitionOnChange: true,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/theme-provider.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DICTIONARIES",
    ()=>DICTIONARIES,
    "LOCALES",
    ()=>LOCALES,
    "LOCALE_META",
    ()=>LOCALE_META,
    "TRANSLATION_KEYS",
    ()=>TRANSLATION_KEYS,
    "translate",
    ()=>translate
]);
"use client";
const LOCALES = [
    "en",
    "sr",
    "tr",
    "de",
    "ru"
];
const LOCALE_META = {
    en: {
        label: "English",
        flag: "🇬🇧",
        native: "English"
    },
    sr: {
        label: "Serbian",
        flag: "🇷🇸",
        native: "Srpski"
    },
    tr: {
        label: "Turkish",
        flag: "🇹🇷",
        native: "Türkçe"
    },
    de: {
        label: "German",
        flag: "🇩🇪",
        native: "Deutsch"
    },
    ru: {
        label: "Russian",
        flag: "🇷🇺",
        native: "Русский"
    }
};
const en = {
    // Brand / nav
    "brand.name": "Aspidus",
    "brand.tagline": "Trade CRM & ERP Platform",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.demo": "Live Demo",
    "nav.trial": "Free Trial",
    "nav.backHome": "Back to Home",
    // Hero
    "hero.title": "Manage Your Global Trade Operations",
    "hero.subtitle": "One platform for CRM, multi-currency offers, trade calculations, document management and ERP — built for international trading houses.",
    "hero.cta.demo": "Try Live Demo",
    "hero.cta.trial": "Start 10-day Free Trial",
    "hero.badge": "Trusted by trading houses in 30+ countries",
    // Stats
    "stats.currencies": "Currencies supported",
    "stats.languages": "UI languages",
    "stats.endpoints": "REST API endpoints",
    "stats.uptime": "Platform uptime",
    // Features
    "features.title": "Everything your trade desk needs",
    "features.subtitle": "From first inquiry to final payment — Aspidus unifies every step of the trade lifecycle.",
    "feature.crm.title": "CRM & Partners",
    "feature.crm.desc": "Track buyers, suppliers and agents with full contact, KYC and trade history in one 360° view.",
    "feature.calc.title": "Trade Calculator",
    "feature.calc.desc": "Compute landed cost across currencies with freight, insurance, duties and bank charges in real time.",
    "feature.docs.title": "Document Management",
    "feature.docs.desc": "Generate offers, proformas and invoices from templates with seals, QR verification and audit trail.",
    "feature.portal.title": "Partner Portal",
    "feature.portal.desc": "Invite counterparties to view their offers, upload KYC and respond to RFQs in a secure portal.",
    "feature.erp.title": "ERP & Accounting",
    "feature.erp.desc": "Journal entries, cost centers, bank reconciliation and fiscal periods — fully multi-currency.",
    "feature.fx.title": "Multi-currency FX",
    "feature.fx.desc": "50+ currencies with live exchange rates and automatic revaluation of open items.",
    // CTA section
    "cta.title": "Start your 10-day free trial",
    "cta.subtitle": "No credit card required. Full platform access. Cancel anytime.",
    "cta.button": "Create demo account",
    "cta.secondary": "Talk to sales",
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.legal": "Legal",
    "footer.about": "About",
    "footer.contact": "Contact",
    "footer.docs": "Documentation",
    "footer.api": "API Reference",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.security": "Security",
    // Demo shell
    "demo.badge": "Demo Mode",
    "demo.exit": "Exit Demo",
    "demo.search": "Search modules, partners, offers…",
    "demo.welcome": "Welcome back, Demo User",
    // Sidebar
    "nav.dashboard": "Dashboard",
    "nav.partners": "Partners",
    "nav.products": "Products",
    "nav.offers": "Offers",
    "nav.invoices": "Invoices",
    "nav.tradeCalculator": "Trade Calculator",
    "nav.documents": "Documents",
    "nav.logistics": "Logistics",
    "nav.inventory": "Inventory",
    "nav.portal": "Partner Portal",
    "nav.erp": "ERP & Accounting",
    "nav.reports": "Reports",
    "nav.settings": "Settings",
    "nav.group.main": "Main",
    "nav.group.trade": "Trade",
    "nav.group.back": "Back Office",
    // Dashboard
    "dash.title": "Dashboard",
    "dash.subtitle": "Snapshot of your trade operations this month.",
    "kpi.revenue": "Monthly Revenue",
    "kpi.offers": "Open Offers",
    "kpi.invoices": "Unpaid Invoices",
    "kpi.partners": "Active Partners",
    "dash.recentOffers": "Recent Offers",
    "dash.recentInvoices": "Recent Invoices",
    "dash.tradeVolume": "Trade Volume by Currency",
    "dash.upcoming": "Upcoming Payments",
    // Partners
    "partners.title": "Partners",
    "partners.subtitle": "Buyers, suppliers and agents you trade with.",
    "partners.search": "Search partners…",
    "partners.add": "Add Partner",
    "partners.col.name": "Partner",
    "partners.col.type": "Type",
    "partners.col.country": "Country",
    "partners.col.currency": "Currency",
    "partners.col.deals": "Deals",
    "partners.col.balance": "Balance",
    "partners.col.status": "Status",
    // Products
    "products.title": "Product Catalog",
    "products.subtitle": "Commodities and goods you offer to the market.",
    "products.search": "Search products…",
    "products.col.sku": "SKU",
    "products.col.name": "Product",
    "products.col.category": "Category",
    "products.col.unit": "Unit",
    "products.col.price": "Unit Price",
    "products.col.stock": "Stock",
    // Offers
    "offers.title": "Offers",
    "offers.subtitle": "Sales quotes sent to your buyers.",
    "offers.search": "Search offers…",
    "offers.new": "New Offer",
    "offers.col.number": "Offer #",
    "offers.col.partner": "Partner",
    "offers.col.date": "Date",
    "offers.col.currency": "Currency",
    "offers.col.amount": "Amount",
    "offers.col.status": "Status",
    // Invoices
    "invoices.title": "Invoices",
    "invoices.subtitle": "Track issued invoices and payment status.",
    "invoices.search": "Search invoices…",
    "invoices.new": "New Invoice",
    "invoices.col.number": "Invoice #",
    "invoices.col.partner": "Partner",
    "invoices.col.issued": "Issued",
    "invoices.col.due": "Due",
    "invoices.col.amount": "Amount",
    "invoices.col.status": "Status",
    // Trade calculator
    "calc.title": "Trade Calculator",
    "calc.subtitle": "Estimate landed cost across currencies.",
    "calc.product": "Product",
    "calc.quantity": "Quantity",
    "calc.unitPrice": "Unit Price",
    "calc.priceCurrency": "Price Currency",
    "calc.settlement": "Settlement Currency",
    "calc.freight": "Freight",
    "calc.insurance": "Insurance",
    "calc.duty": "Customs Duty (%)",
    "calc.bank": "Bank Charges",
    "calc.exchangeRate": "Exchange Rate",
    "calc.compute": "Compute Landed Cost",
    "calc.results.goods": "Goods Value",
    "calc.results.freight": "Freight",
    "calc.results.insurance": "Insurance",
    "calc.results.duty": "Customs Duty",
    "calc.results.bank": "Bank Charges",
    "calc.results.total": "Landed Cost",
    "calc.results.unit": "Per Unit Landed Cost",
    // Trial
    "trial.title": "Start your 10-day free trial",
    "trial.subtitle": "Fill in your details — we'll email payment instructions to activate your account.",
    "trial.company": "Company name",
    "trial.yourName": "Your name",
    "trial.email": "Work email",
    "trial.phone": "Phone",
    "trial.country": "Country",
    "trial.plan": "Preferred plan",
    "trial.submit": "Request Trial Access",
    "trial.success.title": "Almost there!",
    "trial.success.body": "Check your email for payment instructions to activate your 10-day trial.",
    "trial.success.again": "Submit another request",
    "trial.placeholder.company": "Acme Trading Ltd.",
    "trial.placeholder.name": "John Doe",
    "trial.placeholder.email": "you@company.com",
    "trial.placeholder.phone": "+1 555 000 0000",
    "trial.placeholder.country": "Select country",
    // Pricing
    "pricing.title": "Simple, transparent pricing",
    "pricing.subtitle": "Choose the plan that fits your trading volume. Cancel or upgrade anytime.",
    "pricing.month": "/mo",
    "pricing.choose": "Choose plan",
    "pricing.mostPopular": "Most Popular",
    "pricing.contact": "Contact Sales",
    "pricing.feature.users": "Users",
    "pricing.feature.partners": "Partners",
    "pricing.feature.offers": "Offers / month",
    "pricing.feature.currencies": "Currencies",
    "pricing.feature.tradeCalc": "Trade Calculator",
    "pricing.feature.portal": "Partner Portal",
    "pricing.feature.erp": "ERP module",
    "pricing.feature.api": "API access",
    "pricing.feature.support": "Support",
    "pricing.feature.unlimited": "Unlimited",
    "pricing.feature.yes": "Included",
    "pricing.feature.no": "—",
    // Guided tour
    "tour.step1.title": "Welcome to Aspidus Demo",
    "tour.step1.body": "Take a quick 60-second tour to learn the platform. You can skip anytime.",
    "tour.step2.title": "Your Dashboard",
    "tour.step2.body": "KPIs, recent offers and trade volume are at your fingertips.",
    "tour.step3.title": "Manage Partners",
    "tour.step3.body": "Buyers, suppliers and agents — all in one CRM with full trade history.",
    "tour.step4.title": "Product Catalog",
    "tour.step4.body": "Browse commodities with SKUs, prices and stock across multiple currencies.",
    "tour.step5.title": "Create Multi-currency Offers",
    "tour.step5.body": "Send offers in any of 50+ currencies with automatic FX conversion.",
    "tour.step6.title": "Track Invoices",
    "tour.step6.body": "Issue invoices, monitor payment status and chase overdue items.",
    "tour.step7.title": "Trade Calculator",
    "tour.step7.body": "Compute true landed cost — freight, insurance, duties and bank charges.",
    "tour.step8.title": "Ready to try?",
    "tour.step8.body": "Start your 10-day free trial and bring your whole trade desk online.",
    "tour.skip": "Skip tour",
    "tour.next": "Next",
    "tour.back": "Back",
    "tour.finish": "Start free trial",
    "tour.restart": "Restart tour",
    "tour.of": "of",
    // Theme
    "theme.toggle": "Toggle theme",
    "theme.light": "Light",
    "theme.dark": "Dark",
    // Common
    "common.viewAll": "View all",
    "common.status.draft": "Draft",
    "common.status.sent": "Sent",
    "common.status.accepted": "Accepted",
    "common.status.rejected": "Rejected",
    "common.status.paid": "Paid",
    "common.status.overdue": "Overdue",
    "common.status.active": "Active",
    "common.status.inactive": "Inactive",
    "common.export": "Export",
    "common.filter": "Filter"
};
const sr = {
    "brand.name": "Aspidus",
    "brand.tagline": "Trade CRM i ERP platforma",
    "nav.features": "Mogućnosti",
    "nav.pricing": "Cene",
    "nav.demo": "Demo",
    "nav.trial": "Besplatna proba",
    "nav.backHome": "Nazad na početnu",
    "hero.title": "Upravljajte svojim globalnim trgovačkim operacijama",
    "hero.subtitle": "Jedna platforma za CRM, ponude u više valuta, proračune trgovine, upravljanje dokumentima i ERP — napravljena za međunarodne trgovce.",
    "hero.cta.demo": "Probajte Demo",
    "hero.cta.trial": "Započnite 10-dnevnu probu",
    "hero.badge": "Poverenje trgovinskih kuća u 30+ zemalja",
    "stats.currencies": "Podržane valute",
    "stats.languages": "Jezici interfejsa",
    "stats.endpoints": "REST API krajnje tačke",
    "stats.uptime": "Vreme rada platforme",
    "features.title": "Sve što vaš trgovački sto treba",
    "features.subtitle": "Od prvog upita do konačnog plaćanja — Aspidus objedinjuje svaki korak trgovine.",
    "feature.crm.title": "CRM i Partneri",
    "feature.crm.desc": "Pratite kupce, dobavljače i agente sa punim pregledom kontakata, KYC-a i istorije trgovine.",
    "feature.calc.title": "Kalkulator trgovine",
    "feature.calc.desc": "Izračunajte trošak isporuke u različitim valutama sa transportom, osiguranjem, carinom i bankarskim troškovima.",
    "feature.docs.title": "Upravljanje dokumentima",
    "feature.docs.desc": "Generišite ponude, proforme i fakture iz šablona sa pečatima, QR verifikacijom i revizijskomtragom.",
    "feature.portal.title": "Portal partnera",
    "feature.portal.desc": "Pozovite partnere da pregledaju ponude, postave KYC i odgovore na RFQ u sigurnom portalu.",
    "feature.erp.title": "ERP i računovodstvo",
    "feature.erp.desc": "Dnevnički unosi, centri troškova, bankovno usklađivanje i fiskalni periodi — potpuno viševalutno.",
    "feature.fx.title": "Viševalutni FX",
    "feature.fx.desc": "50+ valuta sa živim kursevima i automatskom revalorizacijom otvorenih stavki.",
    "cta.title": "Započnite 10-dnevnu besplatnu probu",
    "cta.subtitle": "Bez kreditne kartice. Pun pristup platformi. Otkažite bilo kada.",
    "cta.button": "Napravite demo nalog",
    "cta.secondary": "Razgovarajte sa prodajom",
    "footer.rights": "Sva prava zadržana.",
    "footer.product": "Proizvod",
    "footer.company": "Kompanija",
    "footer.resources": "Resursi",
    "footer.legal": "Pravno",
    "footer.about": "O nama",
    "footer.contact": "Kontakt",
    "footer.docs": "Dokumentacija",
    "footer.api": "API referenca",
    "footer.privacy": "Privatnost",
    "footer.terms": "Uslovi",
    "footer.security": "Bezbednost",
    "demo.badge": "Demo režim",
    "demo.exit": "Napusti demo",
    "demo.search": "Pretraži module, partnere, ponude…",
    "demo.welcome": "Dobrodošli nazad, Demo korisniče",
    "nav.dashboard": "Kontrolna tabla",
    "nav.partners": "Partneri",
    "nav.products": "Proizvodi",
    "nav.offers": "Ponude",
    "nav.invoices": "Fakture",
    "nav.tradeCalculator": "Kalkulator trgovine",
    "nav.documents": "Dokumenti",
    "nav.logistics": "Logistika",
    "nav.inventory": "Zalihe",
    "nav.portal": "Portal partnera",
    "nav.erp": "ERP i računovodstvo",
    "nav.reports": "Izveštaji",
    "nav.settings": "Podešavanja",
    "nav.group.main": "Glavno",
    "nav.group.trade": "Trgovina",
    "nav.group.back": "Back Office",
    "dash.title": "Kontrolna tabla",
    "dash.subtitle": "Pregled vaših trgovačkih operacija ovog meseca.",
    "kpi.revenue": "Mesečni prihod",
    "kpi.offers": "Otvorene ponude",
    "kpi.invoices": "Neplaćene fakture",
    "kpi.partners": "Aktivni partneri",
    "dash.recentOffers": "Nedavne ponude",
    "dash.recentInvoices": "Nedavne fakture",
    "dash.tradeVolume": "Trgovinski volumen po valuti",
    "dash.upcoming": "Predstojeća plaćanja",
    "partners.title": "Partneri",
    "partners.subtitle": "Kupci, dobavljači i agenti sa kojima trgujete.",
    "partners.search": "Pretraži partnere…",
    "partners.add": "Dodaj partnera",
    "partners.col.name": "Partner",
    "partners.col.type": "Tip",
    "partners.col.country": "Zemlja",
    "partners.col.currency": "Valuta",
    "partners.col.deals": "Poslovi",
    "partners.col.balance": "Saldo",
    "partners.col.status": "Status",
    "products.title": "Katalog proizvoda",
    "products.subtitle": "Roba i komoditeti koje nude tržištu.",
    "products.search": "Pretraži proizvode…",
    "products.col.sku": "Šifra",
    "products.col.name": "Proizvod",
    "products.col.category": "Kategorija",
    "products.col.unit": "Jedinica",
    "products.col.price": "Cena po jedinici",
    "products.col.stock": "Zaliha",
    "offers.title": "Ponude",
    "offers.subtitle": "Ponude poslate vašim kupcima.",
    "offers.search": "Pretraži ponude…",
    "offers.new": "Nova ponuda",
    "offers.col.number": "Ponuda br.",
    "offers.col.partner": "Partner",
    "offers.col.date": "Datum",
    "offers.col.currency": "Valuta",
    "offers.col.amount": "Iznos",
    "offers.col.status": "Status",
    "invoices.title": "Fakture",
    "invoices.subtitle": "Pratite izdate fakture i status plaćanja.",
    "invoices.search": "Pretraži fakture…",
    "invoices.new": "Nova faktura",
    "invoices.col.number": "Faktura br.",
    "invoices.col.partner": "Partner",
    "invoices.col.issued": "Izdato",
    "invoices.col.due": "Rok",
    "invoices.col.amount": "Iznos",
    "invoices.col.status": "Status",
    "calc.title": "Kalkulator trgovine",
    "calc.subtitle": "Procenite trošak isporuke u različitim valutama.",
    "calc.product": "Proizvod",
    "calc.quantity": "Količina",
    "calc.unitPrice": "Cena po jedinici",
    "calc.priceCurrency": "Valuta cene",
    "calc.settlement": "Valuta poravnanja",
    "calc.freight": "Transport",
    "calc.insurance": "Osiguranje",
    "calc.duty": "Carina (%)",
    "calc.bank": "Bankarski troškovi",
    "calc.exchangeRate": "Kurs",
    "calc.compute": "Izračunaj trošak isporuke",
    "calc.results.goods": "Vrednost robe",
    "calc.results.freight": "Transport",
    "calc.results.insurance": "Osiguranje",
    "calc.results.duty": "Carina",
    "calc.results.bank": "Bankarski troškovi",
    "calc.results.total": "Trošak isporuke",
    "calc.results.unit": "Po jedinici",
    "trial.title": "Započnite 10-dnevnu besplatnu probu",
    "trial.subtitle": "Popunite podatke — poslaćemo uputstva za plaćanje na vaš email.",
    "trial.company": "Naziv kompanije",
    "trial.yourName": "Vaše ime",
    "trial.email": "Poslovni email",
    "trial.phone": "Telefon",
    "trial.country": "Zemlja",
    "trial.plan": "Željeni plan",
    "trial.submit": "Zatraži pristup probi",
    "trial.success.title": "Još malo!",
    "trial.success.body": "Proverite email za uputstva za plaćanje i aktivaciju 10-dnevne probe.",
    "trial.success.again": "Pošalji novi zahtev",
    "trial.placeholder.company": "Acme Trading d.o.o.",
    "trial.placeholder.name": "Marko Marković",
    "trial.placeholder.email": "vi@kompanija.com",
    "trial.placeholder.phone": "+381 11 000 0000",
    "trial.placeholder.country": "Izaberite zemlju",
    "pricing.title": "Jednostavne, transparentne cene",
    "pricing.subtitle": "Izaberite plan koji odgovara vašem obimu trgovine. Otkažite ili nadogradite bilo kada.",
    "pricing.month": "/mes",
    "pricing.choose": "Izaberi plan",
    "pricing.contact": "Kontaktirajte prodaju",
    "pricing.mostPopular": "Najpopularnije",
    "pricing.feature.users": "Korisnici",
    "pricing.feature.partners": "Partneri",
    "pricing.feature.offers": "Ponude / mesec",
    "pricing.feature.currencies": "Valute",
    "pricing.feature.tradeCalc": "Kalkulator trgovine",
    "pricing.feature.portal": "Portal partnera",
    "pricing.feature.erp": "ERP modul",
    "pricing.feature.api": "API pristup",
    "pricing.feature.support": "Podrška",
    "pricing.feature.unlimited": "Neograničeno",
    "pricing.feature.yes": "Uključeno",
    "pricing.feature.no": "—",
    "tour.step1.title": "Dobrodošli u Aspidus demo",
    "tour.step1.body": "Hajde da pogledamo platformu za 60 sekundi. Možete preskočiti bilo kada.",
    "tour.step2.title": "Vaša kontrolna tabla",
    "tour.step2.body": "KPI, nedavne ponude i trgovinski volumen na dohvat ruke.",
    "tour.step3.title": "Upravljajte partnerima",
    "tour.step3.body": "Kupci, dobavljači i agenti — sve u jednom CRM-u sa punom istorijom.",
    "tour.step4.title": "Katalog proizvoda",
    "tour.step4.body": "Pregledajte komoditete sa šiframa, cenama i zalihama u više valuta.",
    "tour.step5.title": "Kreirajte viševalutne ponude",
    "tour.step5.body": "Šaljite ponude u bilo kojoj od 50+ valuta sa automatskom FX konverzijom.",
    "tour.step6.title": "Pratite fakture",
    "tour.step6.body": "Izdajte fakture, pratile status plaćanja i podsećajte na kašnjenja.",
    "tour.step7.title": "Kalkulator trgovine",
    "tour.step7.body": "Izračunajte stvarni trošak isporuke — transport, osiguranje, carina i banka.",
    "tour.step8.title": "Spremni za probu?",
    "tour.step8.body": "Započnite 10-dnevnu besplatnu probu i povežite ceo trgovački sto.",
    "tour.skip": "Preskoči",
    "tour.next": "Dalje",
    "tour.back": "Nazad",
    "tour.finish": "Započni probu",
    "tour.restart": "Ponovi obilazak",
    "tour.of": "od",
    "theme.toggle": "Promeni temu",
    "theme.light": "Svetla",
    "theme.dark": "Tamna",
    "common.viewAll": "Pogledaj sve",
    "common.status.draft": "Nacrt",
    "common.status.sent": "Poslato",
    "common.status.accepted": "Prihvaćeno",
    "common.status.rejected": "Odbijeno",
    "common.status.paid": "Plaćeno",
    "common.status.overdue": "Dospelo",
    "common.status.active": "Aktivno",
    "common.status.inactive": "Neaktivno",
    "common.export": "Izvezi",
    "common.filter": "Filter"
};
const tr = {
    "brand.name": "Aspidus",
    "brand.tagline": "Ticaret CRM ve ERP Platformu",
    "nav.features": "Özellikler",
    "nav.pricing": "Fiyatlandırma",
    "nav.demo": "Canlı Demo",
    "nav.trial": "Ücretsiz Deneme",
    "nav.backHome": "Ana sayfaya dön",
    "hero.title": "Küresel Ticaret Operasyonlarınızı Yönetin",
    "hero.subtitle": "CRM, çok para birimli teklifler, ticaret hesaplamaları, belge yönetimi ve ERP için tek platform — uluslararası ticaret evleri için tasarlandı.",
    "hero.cta.demo": "Canlı Demoyu Dene",
    "hero.cta.trial": "10 günlük Ücretsiz Deneme Başlat",
    "hero.badge": "30+ ülkede ticaret evlerinin güvendiği",
    "stats.currencies": "Desteklenen para birimi",
    "stats.languages": "Arayüz dilleri",
    "stats.endpoints": "REST API uç noktası",
    "stats.uptime": "Platform çalışma süresi",
    "features.title": "Ticaret masanızın ihtiyaç duyduğu her şey",
    "features.subtitle": "İlk talepten son ödemeye kadar — Aspidus ticaret döngüsünün her adımını birleştirir.",
    "feature.crm.title": "CRM ve Partnerler",
    "feature.crm.desc": "Alıcılar, tedarikçiler ve acenteler tam temas, KYC ve ticaret geçmişi ile tek 360° görünümde.",
    "feature.calc.title": "Ticaret Hesaplayıcı",
    "feature.calc.desc": "Navlun, sigorta, gümrük ve banka masraflarıyla çok para birimli maliyet hesaplayın.",
    "feature.docs.title": "Belge Yönetimi",
    "feature.docs.desc": "Şablonlardan teklif, proforma ve fatura oluşturun — mühür, QR doğrulama ve denetim izi ile.",
    "feature.portal.title": "Partner Portalı",
    "feature.portal.desc": "Karşı tarafı teklifleri görüntülemeye, KYC yüklemeye ve RFQ'lara yanıt vermeye davet edin.",
    "feature.erp.title": "ERP ve Muhasebe",
    "feature.erp.desc": "Yevmiye kayıtları, maliyet merkezleri, banka mutabakatı ve mali dönemler — tamamen çok para birimli.",
    "feature.fx.title": "Çok para birimli FX",
    "feature.fx.desc": "Canlı döviz kurları ve açık kalemlerin otomatik yeniden değerlemesi ile 50+ para birimi.",
    "cta.title": "10 günlük ücretsiz denemenizi başlatın",
    "cta.subtitle": "Kredi kartı gerekmez. Tam platform erişimi. İstediğiniz zaman iptal edin.",
    "cta.button": "Demo hesap oluştur",
    "cta.secondary": "Satışla görüşün",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.product": "Ürün",
    "footer.company": "Şirket",
    "footer.resources": "Kaynaklar",
    "footer.legal": "Yasal",
    "footer.about": "Hakkında",
    "footer.contact": "İletişim",
    "footer.docs": "Dokümantasyon",
    "footer.api": "API Referansı",
    "footer.privacy": "Gizlilik",
    "footer.terms": "Şartlar",
    "footer.security": "Güvenlik",
    "demo.badge": "Demo Modu",
    "demo.exit": "Demodan çık",
    "demo.search": "Modül, partner, teklif ara…",
    "demo.welcome": "Tekrar hoş geldiniz, Demo Kullanıcı",
    "nav.dashboard": "Gösterge Paneli",
    "nav.partners": "Partnerler",
    "nav.products": "Ürünler",
    "nav.offers": "Teklifler",
    "nav.invoices": "Faturalar",
    "nav.tradeCalculator": "Ticaret Hesaplayıcı",
    "nav.documents": "Belgeler",
    "nav.logistics": "Lojistik",
    "nav.inventory": "Stok",
    "nav.portal": "Partner Portalı",
    "nav.erp": "ERP ve Muhasebe",
    "nav.reports": "Raporlar",
    "nav.settings": "Ayarlar",
    "nav.group.main": "Ana",
    "nav.group.trade": "Ticaret",
    "nav.group.back": "Back Office",
    "dash.title": "Gösterge Paneli",
    "dash.subtitle": "Bu ayki ticaret operasyonlarınızın özeti.",
    "kpi.revenue": "Aylık Gelir",
    "kpi.offers": "Açık Teklifler",
    "kpi.invoices": "Ödenmemiş Faturalar",
    "kpi.partners": "Aktif Partnerler",
    "dash.recentOffers": "Son Teklifler",
    "dash.recentInvoices": "Son Faturalar",
    "dash.tradeVolume": "Para Birimine Göre Ticaret Hacmi",
    "dash.upcoming": "Yaklaşan Ödemeler",
    "partners.title": "Partnerler",
    "partners.subtitle": "Ticaret yaptığınız alıcılar, tedarikçiler ve acenteler.",
    "partners.search": "Partner ara…",
    "partners.add": "Partner Ekle",
    "partners.col.name": "Partner",
    "partners.col.type": "Tür",
    "partners.col.country": "Ülke",
    "partners.col.currency": "Para Birimi",
    "partners.col.deals": "Anlaşma",
    "partners.col.balance": "Bakiye",
    "partners.col.status": "Durum",
    "products.title": "Ürün Kataloğu",
    "products.subtitle": "Pazara sunduğunuz emtia ve mallar.",
    "products.search": "Ürün ara…",
    "products.col.sku": "SKU",
    "products.col.name": "Ürün",
    "products.col.category": "Kategori",
    "products.col.unit": "Birim",
    "products.col.price": "Birim Fiyat",
    "products.col.stock": "Stok",
    "offers.title": "Teklifler",
    "offers.subtitle": "Alıcılarınıza gönderilen satış teklifleri.",
    "offers.search": "Teklif ara…",
    "offers.new": "Yeni Teklif",
    "offers.col.number": "Teklif #",
    "offers.col.partner": "Partner",
    "offers.col.date": "Tarih",
    "offers.col.currency": "Para Birimi",
    "offers.col.amount": "Tutar",
    "offers.col.status": "Durum",
    "invoices.title": "Faturalar",
    "invoices.subtitle": "Kesilmiş faturaları ve ödeme durumunu izleyin.",
    "invoices.search": "Fatura ara…",
    "invoices.new": "Yeni Fatura",
    "invoices.col.number": "Fatura #",
    "invoices.col.partner": "Partner",
    "invoices.col.issued": "Kesilme",
    "invoices.col.due": "Vade",
    "invoices.col.amount": "Tutar",
    "invoices.col.status": "Durum",
    "calc.title": "Ticaret Hesaplayıcı",
    "calc.subtitle": "Çok para birimli teslim maliyetini tahmin edin.",
    "calc.product": "Ürün",
    "calc.quantity": "Miktar",
    "calc.unitPrice": "Birim Fiyat",
    "calc.priceCurrency": "Fiyat Para Birimi",
    "calc.settlement": "Mutabakat Para Birimi",
    "calc.freight": "Navlun",
    "calc.insurance": "Sigorta",
    "calc.duty": "Gümrük Vergisi (%)",
    "calc.bank": "Banka Masrafları",
    "calc.exchangeRate": "Döviz Kuru",
    "calc.compute": "Teslim Maliyetini Hesapla",
    "calc.results.goods": "Mal Değeri",
    "calc.results.freight": "Navlun",
    "calc.results.insurance": "Sigorta",
    "calc.results.duty": "Gümrük Vergisi",
    "calc.results.bank": "Banka Masrafları",
    "calc.results.total": "Teslim Maliyeti",
    "calc.results.unit": "Birim Başına Teslim Maliyeti",
    "trial.title": "10 günlük ücretsiz denemenizi başlatın",
    "trial.subtitle": "Bilgilerinizi girin — hesabınızı etkinleştirmek için ödeme talimatlarını e-posta ile göndereceğiz.",
    "trial.company": "Şirket adı",
    "trial.yourName": "Adınız",
    "trial.email": "İş e-postası",
    "trial.phone": "Telefon",
    "trial.country": "Ülke",
    "trial.plan": "Tercih edilen plan",
    "trial.submit": "Deneme Erişimi Talep Et",
    "trial.success.title": "Neredeyse tamam!",
    "trial.success.body": "10 günlük denemenizi etkinleştirmek için ödeme talimatları için e-postanızı kontrol edin.",
    "trial.success.again": "Başka bir talep gönder",
    "trial.placeholder.company": "Acme Ticaret A.Ş.",
    "trial.placeholder.name": "Ahmet Yılmaz",
    "trial.placeholder.email": "siz@sirket.com",
    "trial.placeholder.phone": "+90 212 000 0000",
    "trial.placeholder.country": "Ülke seçin",
    "pricing.title": "Basit, şeffaf fiyatlandırma",
    "pricing.subtitle": "Ticaret hacminize uygun planı seçin. İstediğiniz zaman iptal edin veya yükseltin.",
    "pricing.month": "/ay",
    "pricing.choose": "Plan seç",
    "pricing.contact": "Satışla İletişime Geçin",
    "pricing.mostPopular": "En Popüler",
    "pricing.feature.users": "Kullanıcılar",
    "pricing.feature.partners": "Partnerler",
    "pricing.feature.offers": "Teklif / ay",
    "pricing.feature.currencies": "Para birimi",
    "pricing.feature.tradeCalc": "Ticaret Hesaplayıcı",
    "pricing.feature.portal": "Partner Portalı",
    "pricing.feature.erp": "ERP modülü",
    "pricing.feature.api": "API erişimi",
    "pricing.feature.support": "Destek",
    "pricing.feature.unlimited": "Sınırsız",
    "pricing.feature.yes": "Dahil",
    "pricing.feature.no": "—",
    "tour.step1.title": "Aspidus Demosuna Hoş Geldiniz",
    "tour.step1.body": "Platformu öğrenmek için 60 saniyelik bir tur atın. İstediğiniz zaman atlayabilirsiniz.",
    "tour.step2.title": "Gösterge Paneliniz",
    "tour.step2.body": "KPI'lar, son teklifler ve ticaret hacmi parmaklarınızın ucunda.",
    "tour.step3.title": "Partnerleri Yönetin",
    "tour.step3.body": "Alıcılar, tedarikçiler ve acenteler — tam ticaret geçmişi ile tek CRM'de.",
    "tour.step4.title": "Ürün Kataloğu",
    "tour.step4.body": "SKU, fiyat ve stok ile çok para birimli emtialara göz atın.",
    "tour.step5.title": "Çok Para Birimli Teklif Oluşturun",
    "tour.step5.body": "Otomatik FX dönüşümü ile 50+ para biriminde teklif gönderin.",
    "tour.step6.title": "Faturaları İzleyin",
    "tour.step6.body": "Fatura kesin, ödeme durumunu izleyin ve geciken kalemleri takip edin.",
    "tour.step7.title": "Ticaret Hesaplayıcı",
    "tour.step7.body": "Gerçek teslim maliyetini hesaplayın — navlun, sigorta, gümrük ve banka.",
    "tour.step8.title": "Denemeye hazır mısınız?",
    "tour.step8.body": "10 günlük ücretsiz denemenizi başlatın ve tüm ticaret masanızı çevrimiçi yapın.",
    "tour.skip": "Turu atla",
    "tour.next": "İleri",
    "tour.back": "Geri",
    "tour.finish": "Ücretsiz deneme başlat",
    "tour.restart": "Turu yeniden başlat",
    "tour.of": "/",
    "theme.toggle": "Temayı değiştir",
    "theme.light": "Açık",
    "theme.dark": "Koyu",
    "common.viewAll": "Tümünü gör",
    "common.status.draft": "Taslak",
    "common.status.sent": "Gönderildi",
    "common.status.accepted": "Kabul edildi",
    "common.status.rejected": "Reddedildi",
    "common.status.paid": "Ödendi",
    "common.status.overdue": "Vadesi geçmiş",
    "common.status.active": "Aktif",
    "common.status.inactive": "İnaktif",
    "common.export": "Dışa aktar",
    "common.filter": "Filtre"
};
const de = {
    "brand.name": "Aspidus",
    "brand.tagline": "Handels-CRM- und ERP-Plattform",
    "nav.features": "Funktionen",
    "nav.pricing": "Preise",
    "nav.demo": "Live-Demo",
    "nav.trial": "Kostenlose Testversion",
    "nav.backHome": "Zurück zur Startseite",
    "hero.title": "Verwalten Sie Ihre globalen Handelsoperationen",
    "hero.subtitle": "Eine Plattform für CRM, Mehrwährungsangebote, Handelsberechnungen, Dokumentenverwaltung und ERP — entwickelt für internationale Handelshäuser.",
    "hero.cta.demo": "Live-Demo testen",
    "hero.cta.trial": "10-tägige kostenlose Testversion starten",
    "hero.badge": "Vertraut von Handelshäusern in 30+ Ländern",
    "stats.currencies": "Unterstützte Währungen",
    "stats.languages": "UI-Sprachen",
    "stats.endpoints": "REST-API-Endpunkte",
    "stats.uptime": "Plattform-Verfügbarkeit",
    "features.title": "Alles, was Ihr Handelstisch braucht",
    "features.subtitle": "Von der ersten Anfrage bis zur letzten Zahlung — Aspidus vereint jeden Schritt des Handelszyklus.",
    "feature.crm.title": "CRM & Partner",
    "feature.crm.desc": "Käufer, Lieferanten und Agenten mit vollem Kontakt-, KYC- und Handelshistorie in einer 360°-Ansicht.",
    "feature.calc.title": "Handelsrechner",
    "feature.calc.desc": "Berechnen Sie die gelandeten Kosten über Währungen hinweg mit Fracht, Versicherung, Zöllen und Bankgebühren.",
    "feature.docs.title": "Dokumentenverwaltung",
    "feature.docs.desc": "Generieren Sie Angebote, Proformas und Rechnungen aus Vorlagen — mit Siegeln, QR-Verifizierung und Audit-Trail.",
    "feature.portal.title": "Partnerportal",
    "feature.portal.desc": "Laden Sie Geschäftspartner ein, Angebote einzusehen, KYC hochzuladen und auf RFQs zu antworten.",
    "feature.erp.title": "ERP & Buchhaltung",
    "feature.erp.desc": "Journalbuchungen, Kostenstellen, Bankabstimmung und Geschäftsperioden — vollständig mehrwährungsfähig.",
    "feature.fx.title": "Mehrwährungs-FX",
    "feature.fx.desc": "50+ Währungen mit Live-Wechselkursen und automatischer Neubewertung offener Posten.",
    "cta.title": "Starten Sie Ihre 10-tägige kostenlose Testversion",
    "cta.subtitle": "Keine Kreditkarte erforderlich. Vollständiger Plattformzugriff. Jederzeit kündbar.",
    "cta.button": "Demo-Konto erstellen",
    "cta.secondary": "Mit Vertrieb sprechen",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.product": "Produkt",
    "footer.company": "Unternehmen",
    "footer.resources": "Ressourcen",
    "footer.legal": "Rechtliches",
    "footer.about": "Über uns",
    "footer.contact": "Kontakt",
    "footer.docs": "Dokumentation",
    "footer.api": "API-Referenz",
    "footer.privacy": "Datenschutz",
    "footer.terms": "AGB",
    "footer.security": "Sicherheit",
    "demo.badge": "Demo-Modus",
    "demo.exit": "Demo verlassen",
    "demo.search": "Module, Partner, Angebote suchen…",
    "demo.welcome": "Willkommen zurück, Demo-Benutzer",
    "nav.dashboard": "Dashboard",
    "nav.partners": "Partner",
    "nav.products": "Produkte",
    "nav.offers": "Angebote",
    "nav.invoices": "Rechnungen",
    "nav.tradeCalculator": "Handelsrechner",
    "nav.documents": "Dokumente",
    "nav.logistics": "Logistik",
    "nav.inventory": "Lager",
    "nav.portal": "Partnerportal",
    "nav.erp": "ERP & Buchhaltung",
    "nav.reports": "Berichte",
    "nav.settings": "Einstellungen",
    "nav.group.main": "Haupt",
    "nav.group.trade": "Handel",
    "nav.group.back": "Back Office",
    "dash.title": "Dashboard",
    "dash.subtitle": "Überblick über Ihre Handelsoperationen in diesem Monat.",
    "kpi.revenue": "Monatsumsatz",
    "kpi.offers": "Offene Angebote",
    "kpi.invoices": "Unbezahlte Rechnungen",
    "kpi.partners": "Aktive Partner",
    "dash.recentOffers": "Letzte Angebote",
    "dash.recentInvoices": "Letzte Rechnungen",
    "dash.tradeVolume": "Handelsvolumen nach Währung",
    "dash.upcoming": "Anstehende Zahlungen",
    "partners.title": "Partner",
    "partners.subtitle": "Käufer, Lieferanten und Agenten, mit denen Sie handeln.",
    "partners.search": "Partner suchen…",
    "partners.add": "Partner hinzufügen",
    "partners.col.name": "Partner",
    "partners.col.type": "Typ",
    "partners.col.country": "Land",
    "partners.col.currency": "Währung",
    "partners.col.deals": "Geschäfte",
    "partners.col.balance": "Saldo",
    "partners.col.status": "Status",
    "products.title": "Produktkatalog",
    "products.subtitle": "Waren und Rohstoffe, die Sie dem Markt anbieten.",
    "products.search": "Produkte suchen…",
    "products.col.sku": "SKU",
    "products.col.name": "Produkt",
    "products.col.category": "Kategorie",
    "products.col.unit": "Einheit",
    "products.col.price": "Stückpreis",
    "products.col.stock": "Bestand",
    "offers.title": "Angebote",
    "offers.subtitle": "Verkaufsangebote an Ihre Käufer.",
    "offers.search": "Angebote suchen…",
    "offers.new": "Neues Angebot",
    "offers.col.number": "Angebot #",
    "offers.col.partner": "Partner",
    "offers.col.date": "Datum",
    "offers.col.currency": "Währung",
    "offers.col.amount": "Betrag",
    "offers.col.status": "Status",
    "invoices.title": "Rechnungen",
    "invoices.subtitle": "Verfolgen Sie ausgestellte Rechnungen und Zahlungsstatus.",
    "invoices.search": "Rechnungen suchen…",
    "invoices.new": "Neue Rechnung",
    "invoices.col.number": "Rechnung #",
    "invoices.col.partner": "Partner",
    "invoices.col.issued": "Ausgestellt",
    "invoices.col.due": "Fällig",
    "invoices.col.amount": "Betrag",
    "invoices.col.status": "Status",
    "calc.title": "Handelsrechner",
    "calc.subtitle": "Schätzen Sie gelandete Kosten über Währungen hinweg.",
    "calc.product": "Produkt",
    "calc.quantity": "Menge",
    "calc.unitPrice": "Stückpreis",
    "calc.priceCurrency": "Preiswährung",
    "calc.settlement": "Abrechnungswährung",
    "calc.freight": "Fracht",
    "calc.insurance": "Versicherung",
    "calc.duty": "Zoll (%)",
    "calc.bank": "Bankgebühren",
    "calc.exchangeRate": "Wechselkurs",
    "calc.compute": "Gelandete Kosten berechnen",
    "calc.results.goods": "Warenwert",
    "calc.results.freight": "Fracht",
    "calc.results.insurance": "Versicherung",
    "calc.results.duty": "Zoll",
    "calc.results.bank": "Bankgebühren",
    "calc.results.total": "Gelandete Kosten",
    "calc.results.unit": "Pro Einheit",
    "trial.title": "Starten Sie Ihre 10-tägige kostenlose Testversion",
    "trial.subtitle": "Füllen Sie Ihre Daten aus — wir senden Ihnen Zahlungsanweisungen per E-Mail zur Aktivierung.",
    "trial.company": "Firmenname",
    "trial.yourName": "Ihr Name",
    "trial.email": "Geschäfts-E-Mail",
    "trial.phone": "Telefon",
    "trial.country": "Land",
    "trial.plan": "Bevorzugter Plan",
    "trial.submit": "Testzugang anfordern",
    "trial.success.title": "Fast geschafft!",
    "trial.success.body": "Überprüfen Sie Ihre E-Mail für Zahlungsanweisungen zur Aktivierung Ihrer 10-tägigen Testversion.",
    "trial.success.again": "Weitere Anfrage senden",
    "trial.placeholder.company": "Acme Trading GmbH",
    "trial.placeholder.name": "Max Mustermann",
    "trial.placeholder.email": "sie@firma.com",
    "trial.placeholder.phone": "+49 30 0000000",
    "trial.placeholder.country": "Land auswählen",
    "pricing.title": "Einfache, transparente Preise",
    "pricing.subtitle": "Wählen Sie den Plan, der zu Ihrem Handelsvolumen passt. Jederzeit kündbar oder upgradbar.",
    "pricing.month": "/Mo",
    "pricing.choose": "Plan wählen",
    "pricing.contact": "Vertrieb kontaktieren",
    "pricing.mostPopular": "Beliebteste",
    "pricing.feature.users": "Benutzer",
    "pricing.feature.partners": "Partner",
    "pricing.feature.offers": "Angebote / Monat",
    "pricing.feature.currencies": "Währungen",
    "pricing.feature.tradeCalc": "Handelsrechner",
    "pricing.feature.portal": "Partnerportal",
    "pricing.feature.erp": "ERP-Modul",
    "pricing.feature.api": "API-Zugriff",
    "pricing.feature.support": "Support",
    "pricing.feature.unlimited": "Unbegrenzt",
    "pricing.feature.yes": "Enthalten",
    "pricing.feature.no": "—",
    "tour.step1.title": "Willkommen zur Aspidus-Demo",
    "tour.step1.body": "Machen Sie eine 60-Sekunden-Tour, um die Plattform kennenzulernen. Sie können jederzeit überspringen.",
    "tour.step2.title": "Ihr Dashboard",
    "tour.step2.body": "KPIs, letzte Angebote und Handelsvolumen auf einen Blick.",
    "tour.step3.title": "Partner verwalten",
    "tour.step3.body": "Käufer, Lieferanten und Agenten — alles in einem CRM mit voller Historie.",
    "tour.step4.title": "Produktkatalog",
    "tour.step4.body": "Durchsuchen Sie Rohstoffe mit SKUs, Preisen und Bestand in mehreren Währungen.",
    "tour.step5.title": "Mehrwährungsangebote erstellen",
    "tour.step5.body": "Senden Sie Angebote in einer von 50+ Währungen mit automatischer FX-Konvertierung.",
    "tour.step6.title": "Rechnungen verfolgen",
    "tour.step6.body": "Stellen Sie Rechnungen aus, überwachen Sie den Zahlungsstatus und mahnen Sie überfällige Posten.",
    "tour.step7.title": "Handelsrechner",
    "tour.step7.body": "Berechnen Sie echte gelandete Kosten — Fracht, Versicherung, Zölle und Bankgebühren.",
    "tour.step8.title": "Bereit zum Ausprobieren?",
    "tour.step8.body": "Starten Sie Ihre 10-tägige kostenlose Testversion und bringen Sie Ihren gesamten Handelstisch online.",
    "tour.skip": "Tour überspringen",
    "tour.next": "Weiter",
    "tour.back": "Zurück",
    "tour.finish": "Kostenlose Testversion starten",
    "tour.restart": "Tour neu starten",
    "tour.of": "von",
    "theme.toggle": "Thema wechseln",
    "theme.light": "Hell",
    "theme.dark": "Dunkel",
    "common.viewAll": "Alle anzeigen",
    "common.status.draft": "Entwurf",
    "common.status.sent": "Gesendet",
    "common.status.accepted": "Angenommen",
    "common.status.rejected": "Abgelehnt",
    "common.status.paid": "Bezahlt",
    "common.status.overdue": "Überfällig",
    "common.status.active": "Aktiv",
    "common.status.inactive": "Inaktiv",
    "common.export": "Exportieren",
    "common.filter": "Filter"
};
const ru = {
    "brand.name": "Aspidus",
    "brand.tagline": "Торговая CRM и ERP-платформа",
    "nav.features": "Возможности",
    "nav.pricing": "Цены",
    "nav.demo": "Живое демо",
    "nav.trial": "Бесплатный период",
    "nav.backHome": "На главную",
    "hero.title": "Управляйте глобальными торговыми операциями",
    "hero.subtitle": "Одна платформа для CRM, мультивалютных предложений, торговых расчётов, управления документами и ERP — для международных торговых домов.",
    "hero.cta.demo": "Попробовать демо",
    "hero.cta.trial": "Начать 10-дневный пробный период",
    "hero.badge": "Доверие торговых домов в 30+ странах",
    "stats.currencies": "Поддерживаемые валюты",
    "stats.languages": "Языки интерфейса",
    "stats.endpoints": "REST API эндпоинтов",
    "stats.uptime": "Время работы платформы",
    "features.title": "Всё, что нужно вашему торговому столу",
    "features.subtitle": "От первого запроса до последнего платежа — Aspidus объединяет каждый шаг торгового цикла.",
    "feature.crm.title": "CRM и Партнёры",
    "feature.crm.desc": "Покупатели, поставщики и агенты с полным контактом, KYC и историей сделок в одном окне 360°.",
    "feature.calc.title": "Торговый калькулятор",
    "feature.calc.desc": "Рассчитывайте себестоимость доставки в разных валютах с учётом фрахта, страхования, пошлин и банковских комиссий.",
    "feature.docs.title": "Управление документами",
    "feature.docs.desc": "Создавайте предложения, проформы и счета из шаблонов — с печатями, QR-проверкой и аудиторским следом.",
    "feature.portal.title": "Портал партнёров",
    "feature.portal.desc": "Приглашайте контрагентов просматривать предложения, загружать KYC и отвечать на RFQ в защищённом портале.",
    "feature.erp.title": "ERP и учёт",
    "feature.erp.desc": "Проводки, центры затрат, банковская сверка и финансовые периоды — полностью мультивалютные.",
    "feature.fx.title": "Мультивалютный FX",
    "feature.fx.desc": "50+ валют с актуальными курсами и автоматической переоценкой открытых позиций.",
    "cta.title": "Начните 10-дневный бесплатный период",
    "cta.subtitle": "Без кредитной карты. Полный доступ к платформе. Отмена в любой момент.",
    "cta.button": "Создать демо-аккаунт",
    "cta.secondary": "Связаться с отделом продаж",
    "footer.rights": "Все права защищены.",
    "footer.product": "Продукт",
    "footer.company": "Компания",
    "footer.resources": "Ресурсы",
    "footer.legal": "Правовая информация",
    "footer.about": "О нас",
    "footer.contact": "Контакты",
    "footer.docs": "Документация",
    "footer.api": "Справочник API",
    "footer.privacy": "Конфиденциальность",
    "footer.terms": "Условия",
    "footer.security": "Безопасность",
    "demo.badge": "Демо-режим",
    "demo.exit": "Выйти из демо",
    "demo.search": "Поиск модулей, партнёров, предложений…",
    "demo.welcome": "С возвращением, Demo-пользователь",
    "nav.dashboard": "Панель управления",
    "nav.partners": "Партнёры",
    "nav.products": "Товары",
    "nav.offers": "Предложения",
    "nav.invoices": "Счета",
    "nav.tradeCalculator": "Торговый калькулятор",
    "nav.documents": "Документы",
    "nav.logistics": "Логистика",
    "nav.inventory": "Склад",
    "nav.portal": "Портал партнёров",
    "nav.erp": "ERP и учёт",
    "nav.reports": "Отчёты",
    "nav.settings": "Настройки",
    "nav.group.main": "Основное",
    "nav.group.trade": "Торговля",
    "nav.group.back": "Back Office",
    "dash.title": "Панель управления",
    "dash.subtitle": "Снимок ваших торговых операций за этот месяц.",
    "kpi.revenue": "Месячная выручка",
    "kpi.offers": "Открытые предложения",
    "kpi.invoices": "Неоплаченные счета",
    "kpi.partners": "Активные партнёры",
    "dash.recentOffers": "Недавние предложения",
    "dash.recentInvoices": "Недавние счета",
    "dash.tradeVolume": "Объём торговли по валюте",
    "dash.upcoming": "Предстоящие платежи",
    "partners.title": "Партнёры",
    "partners.subtitle": "Покупатели, поставщики и агенты, с которыми вы торгуете.",
    "partners.search": "Поиск партнёров…",
    "partners.add": "Добавить партнёра",
    "partners.col.name": "Партнёр",
    "partners.col.type": "Тип",
    "partners.col.country": "Страна",
    "partners.col.currency": "Валюта",
    "partners.col.deals": "Сделки",
    "partners.col.balance": "Баланс",
    "partners.col.status": "Статус",
    "products.title": "Каталог товаров",
    "products.subtitle": "Сырьё и товары, которые вы предлагаете рынку.",
    "products.search": "Поиск товаров…",
    "products.col.sku": "Артикул",
    "products.col.name": "Товар",
    "products.col.category": "Категория",
    "products.col.unit": "Единица",
    "products.col.price": "Цена за единицу",
    "products.col.stock": "Склад",
    "offers.title": "Предложения",
    "offers.subtitle": "Коммерческие предложения вашим покупателям.",
    "offers.search": "Поиск предложений…",
    "offers.new": "Новое предложение",
    "offers.col.number": "Предложение №",
    "offers.col.partner": "Партнёр",
    "offers.col.date": "Дата",
    "offers.col.currency": "Валюта",
    "offers.col.amount": "Сумма",
    "offers.col.status": "Статус",
    "invoices.title": "Счета",
    "invoices.subtitle": "Отслеживайте выставленные счета и статус оплаты.",
    "invoices.search": "Поиск счетов…",
    "invoices.new": "Новый счёт",
    "invoices.col.number": "Счёт №",
    "invoices.col.partner": "Партнёр",
    "invoices.col.issued": "Выставлен",
    "invoices.col.due": "Срок",
    "invoices.col.amount": "Сумма",
    "invoices.col.status": "Статус",
    "calc.title": "Торговый калькулятор",
    "calc.subtitle": "Оцените себестоимость доставки в разных валютах.",
    "calc.product": "Товар",
    "calc.quantity": "Количество",
    "calc.unitPrice": "Цена за единицу",
    "calc.priceCurrency": "Валюта цены",
    "calc.settlement": "Валюта расчёта",
    "calc.freight": "Фрахт",
    "calc.insurance": "Страхование",
    "calc.duty": "Таможенная пошлина (%)",
    "calc.bank": "Банковские комиссии",
    "calc.exchangeRate": "Обменный курс",
    "calc.compute": "Рассчитать себестоимость",
    "calc.results.goods": "Стоимость товара",
    "calc.results.freight": "Фрахт",
    "calc.results.insurance": "Страхование",
    "calc.results.duty": "Таможенная пошлина",
    "calc.results.bank": "Банковские комиссии",
    "calc.results.total": "Себестоимость доставки",
    "calc.results.unit": "На единицу",
    "trial.title": "Начните 10-дневный бесплатный период",
    "trial.subtitle": "Заполните данные — мы отправим инструкции по оплате для активации аккаунта.",
    "trial.company": "Название компании",
    "trial.yourName": "Ваше имя",
    "trial.email": "Рабочий email",
    "trial.phone": "Телефон",
    "trial.country": "Страна",
    "trial.plan": "Предпочтительный план",
    "trial.submit": "Запросить пробный доступ",
    "trial.success.title": "Почти готово!",
    "trial.success.body": "Проверьте email — там инструкции по оплате для активации 10-дневного периода.",
    "trial.success.again": "Отправить ещё одну заявку",
    "trial.placeholder.company": "ООО «Acme Trading»",
    "trial.placeholder.name": "Иван Иванов",
    "trial.placeholder.email": "vy@kompaniya.ru",
    "trial.placeholder.phone": "+7 495 000-00-00",
    "trial.placeholder.country": "Выберите страну",
    "pricing.title": "Простые и прозрачные цены",
    "pricing.subtitle": "Выберите план, подходящий вашему объёму торговли. Отмена или апгрейд в любой момент.",
    "pricing.month": "/мес",
    "pricing.choose": "Выбрать план",
    "pricing.contact": "Связаться с отделом продаж",
    "pricing.mostPopular": "Популярный",
    "pricing.feature.users": "Пользователи",
    "pricing.feature.partners": "Партнёры",
    "pricing.feature.offers": "Предложений / месяц",
    "pricing.feature.currencies": "Валюты",
    "pricing.feature.tradeCalc": "Торговый калькулятор",
    "pricing.feature.portal": "Портал партнёров",
    "pricing.feature.erp": "ERP-модуль",
    "pricing.feature.api": "API-доступ",
    "pricing.feature.support": "Поддержка",
    "pricing.feature.unlimited": "Безлимитно",
    "pricing.feature.yes": "Включено",
    "pricing.feature.no": "—",
    "tour.step1.title": "Добро пожаловать в демо Aspidus",
    "tour.step1.body": "Пройдите короткий 60-секундный тур по платформе. Можно пропустить в любой момент.",
    "tour.step2.title": "Ваша панель управления",
    "tour.step2.body": "KPI, недавние предложения и объём торговли под рукой.",
    "tour.step3.title": "Управление партнёрами",
    "tour.step3.body": "Покупатели, поставщики и агенты — всё в одном CRM с полной историей.",
    "tour.step4.title": "Каталог товаров",
    "tour.step4.body": "Просматривайте сырьё с артикулами, ценами и остатками в разных валютах.",
    "tour.step5.title": "Создавайте мультивалютные предложения",
    "tour.step5.body": "Отправляйте предложения в любой из 50+ валют с автоматической конверсией.",
    "tour.step6.title": "Отслеживайте счета",
    "tour.step6.body": "Выставляйте счета, контролируйте оплату и напоминайте о просрочке.",
    "tour.step7.title": "Торговый калькулятор",
    "tour.step7.body": "Рассчитайте реальную себестоимость — фрахт, страхование, пошлины и банк.",
    "tour.step8.title": "Готовы попробовать?",
    "tour.step8.body": "Начните 10-дневный бесплатный период и переведите весь торговый стол онлайн.",
    "tour.skip": "Пропустить тур",
    "tour.next": "Далее",
    "tour.back": "Назад",
    "tour.finish": "Начать пробный период",
    "tour.restart": "Перезапустить тур",
    "tour.of": "из",
    "theme.toggle": "Сменить тему",
    "theme.light": "Светлая",
    "theme.dark": "Тёмная",
    "common.viewAll": "Показать все",
    "common.status.draft": "Черновик",
    "common.status.sent": "Отправлено",
    "common.status.accepted": "Принято",
    "common.status.rejected": "Отклонено",
    "common.status.paid": "Оплачено",
    "common.status.overdue": "Просрочено",
    "common.status.active": "Активен",
    "common.status.inactive": "Неактивен",
    "common.export": "Экспорт",
    "common.filter": "Фильтр"
};
const DICTIONARIES = {
    en,
    sr,
    tr,
    de,
    ru
};
function translate(locale, key) {
    return DICTIONARIES[locale]?.[key] ?? en[key] ?? key;
}
const TRANSLATION_KEYS = Object.keys(en);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_112_b2a._.js.map