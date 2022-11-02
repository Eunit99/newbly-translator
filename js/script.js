/*
 * jQuery
 */

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors |
 * jquery.org/license */
!function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document)
      throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
  "use strict";
  var t = [], r = Object.getPrototypeOf, s = t.slice,
      g = t.flat ? function(e) { return t.flat.call(e) }
                 : function(e) { return t.concat.apply([], e) },
      u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty,
      a = v.toString, l = a.call(Object), y = {},
      m = function(
          e) { return "function" == typeof e && "number" != typeof e.nodeType },
      x = function(e) { return null != e && e === e.window }, E = C.document,
      c = {type : !0, src : !0, nonce : !0, noModule : !0};
  function b(e, t, n) {
    var r, i, o = (n = n || E).createElement("script");
    if (o.text = e, t)
      for (r in c)
        (i = t[r] || t.getAttribute && t.getAttribute(r)) &&
            o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o)
  }
  function w(e) {
    return null == e ? e + ""
           : "object" == typeof e || "function" == typeof e
               ? n[o.call(e)] || "object"
               : typeof e
  }
  var f = "3.5.1", S = function(e, t) { return new S.fn.init(e, t) };
  function p(e) {
    var t = !!e && "length" in e && e.length, n = w(e);
    return !m(e) && !x(e) &&
           ("array" === n || 0 === t ||
            "number" == typeof t && 0 < t && t - 1 in e)
  }
  S.fn = S.prototype = {
    jquery : f,
    constructor : S,
    length : 0,
    toArray : function() { return s.call(this) },
    get : function(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack : function(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each : function(e) { return S.each(this, e) },
    map : function(n) {
      return this.pushStack(
          S.map(this, function(e, t) { return n.call(e, t, e) }))
    },
    slice : function() { return this.pushStack(s.apply(this, arguments)) },
    first : function() { return this.eq(0) },
    last : function() { return this.eq(-1) },
    even : function() {
      return this.pushStack(S.grep(this, function(e, t) { return (t + 1) % 2 }))
    },
    odd : function() {
      return this.pushStack(S.grep(this, function(e, t) { return t % 2 }))
    },
    eq : function(e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [ this[n] ] : [])
    },
    end : function() { return this.prevObject || this.constructor() },
    push : u,
    sort : t.sort,
    splice : t.splice
  },
  S.extend = S.fn.extend =
      function() {
    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length,
                          l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++),
         "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--);
         s < u; s++)
      if (null != (e = arguments[s]))
        for (t in e)
          r = e[t],
          "__proto__" !== t && a !== r &&
              (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                   ? (n = a[t],
                      o = i && !Array.isArray(n)    ? []
                          : i || S.isPlainObject(n) ? n
                                                    : {},
                      i = !1, a[t] = S.extend(l, o, r))
                   : void 0 !== r && (a[t] = r));
    return a
  },
  S.extend({
    expando : "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady : !0,
    error : function(e) { throw new Error(e) },
    noop : function() {},
    isPlainObject : function(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) &&
             (!(t = r(e)) ||
              "function" ==
                      typeof (n = v.call(t, "constructor") && t.constructor) &&
                  a.call(n) === l)
    },
    isEmptyObject : function(e) {
      var t;
      for (t in e)
        return !1;
      return !0
    },
    globalEval : function(e, t, n) { b(e, {nonce : t && t.nonce}, n) },
    each : function(e, t) {
      var n, r = 0;
      if (p(e)) {
        for (n = e.length; r < n; r++)
          if (!1 === t.call(e[r], r, e[r]))
            break
      } else
        for (r in e)
          if (!1 === t.call(e[r], r, e[r]))
            break;
      return e
    },
    makeArray : function(e, t) {
      var n = t || [];
      return null != e &&
                 (p(Object(e)) ? S.merge(n, "string" == typeof e ? [ e ] : e)
                               : u.call(n, e)),
             n
    },
    inArray : function(e, t, n) { return null == t ? -1 : i.call(t, e, n) },
    merge : function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++)
        e[i++] = t[r];
      return e.length = i, e
    },
    grep : function(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
        !t(e[i], i) !== a && r.push(e[i]);
      return r
    },
    map : function(e, t, n) {
      var r, i, o = 0, a = [];
      if (p(e))
        for (r = e.length; o < r; o++)
          null != (i = t(e[o], o, n)) && a.push(i);
      else
        for (o in e)
          null != (i = t(e[o], o, n)) && a.push(i);
      return g(a)
    },
    guid : 1,
    support : y
  }),
  "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
  S.each("Boolean Number String Function Array Date RegExp Object Error Symbol"
             .split(" "),
         function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
  var d = function(n) {
    var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y,
        S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(),
        x = ue(), A = ue(), N = ue(),
        D = function(e, t) { return e === t && (l = !0), 0 },
        j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push,
        O = t.slice,
        P =
            function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t)
              return n;
          return -1
        },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I +
            "))|)" + M + "*\\]",
        F = ":(" + I +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"), X = new RegExp(F),
        V = new RegExp("^" + I + "$"), G = {
          ID : new RegExp("^#(" + I + ")"),
          CLASS : new RegExp("^\\.(" + I + ")"),
          TAG : new RegExp("^(" + I + "|[*])"),
          ATTR : new RegExp("^" + W),
          PSEUDO : new RegExp("^" + F),
          CHILD : new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M +
                  "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M +
                  "*(\\d+)|))" + M + "*\\)|)",
              "i"),
          bool : new RegExp("^(?:" + R + ")$", "i"),
          needsContext : new RegExp(
              "^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M +
                  "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)",
              "i")
        },
        Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])",
                        "g"),
        ne =
            function(e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return t || (n < 0 ? String.fromCharCode(n + 65536)
                             : String.fromCharCode(n >> 10 | 55296,
                                                   1023 & n | 56320))
        },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function(e, t) {
          return t ? "\0" === e
                         ? "\ufffd"
                         : e.slice(0, -1) + "\\" +
                               e.charCodeAt(e.length - 1).toString(16) + " "
                   : "\\" + e
        }, oe = function() { T() }, ae = be(function(e) {
                                      return !0 === e.disabled &&
                                             "fieldset" ===
                                                 e.nodeName.toLowerCase()
                                    }, {dir : "parentNode", next : "legend"});
    try {
      H.apply(t = O.call(p.childNodes), p.childNodes),
          t[p.childNodes.length].nodeType
    } catch (e) {
      H = { apply: t.length ? function (e, t) { L.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } }
    }
    function se(t, e, n, r) {
      var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
      if (n = n || [],
          "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
        return n;
      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t)))
          if (i = u[1]) {
            if (9 === p) {
              if (!(a = e.getElementById(i)))
                return n;
              if (a.id === i)
                return n.push(a), n
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n
          } else {
            if (u[2])
              return H.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && d.getElementsByClassName &&
                e.getElementsByClassName)
              return H.apply(n, e.getElementsByClassName(i)), n
          }
        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) &&
            (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope ||
                ((s = e.getAttribute("id")) ? s = s.replace(re, ie)
                                            : e.setAttribute("id", s = S)),
                o = (l = h(t)).length;
            while (o--)
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",")
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            N(t, !0)
          } finally {
            s === S && e.removeAttribute("id")
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r)
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
               e[t + " "] = n
      }
    }
    function le(e) { return e[S] = !0, e }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }
    function fe(e, t) {
      var n = e.split("|"), r = n.length;
      while (r--)
        b.attrHandle[n[r]] = t
    }
    function pe(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType &&
                          e.sourceIndex - t.sourceIndex;
      if (r)
        return r;
      if (n)
        while (n = n.nextSibling)
          if (n === t)
            return -1;
      return e ? 1 : -1
    }
    function de(t) {
      return function(
          e) { return "input" === e.nodeName.toLowerCase() && e.type === t }
    }
    function he(n) {
      return function(e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }
    function ge(t) {
      return function(e) {
        return "form" in e ? e.parentNode && !1 === e.disabled
                                 ? "label" in e
                                       ? "label" in e.parentNode
                                             ? e.parentNode.disabled === t
                                             : e.disabled === t
                                       : e.isDisabled === t ||
                                             e.isDisabled !== !t && ae(e) === t
                                 : e.disabled === t
                           : "label" in e && e.disabled === t
      }
    }
    function ve(a) {
      return le(function(o) {
        return o = +o, le(function(e, t) {
                 var n, r = a([], e.length, o), i = r.length;
                 while (i--)
                   e[n = r[i]] && (e[n] = !(t[n] = e[n]))
               })
      })
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }
    for (e in
             d = se.support = {},
             i = se.isXML =
                 function(e) {
                   var t = e.namespaceURI,
                       n = (e.ownerDocument || e).documentElement;
                   return !Y.test(t || n && n.nodeName || "HTML")
                 },
             T = se.setDocument =
                 function(e) {
                   var t, n, r = e ? e.ownerDocument || e : p;
                   return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function (e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function (e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function (e) { var t = e.replace(te, ne); return function (e) { return e.getAttribute("id") === t } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function (e) { var n = e.replace(te, ne); return function (e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function (e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) { var t; a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]") }), ce(function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, D = t ? function (e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function (e, t) { if (e === t) return l = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t); n = e; while (n = n.parentNode) a.unshift(n); n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0 }), C
                 },
             se.matches = function(e, t) { return se(e, null, null, t) },
             se.matchesSelector =
                 function(e, t) {
                   if (T(e), d.matchesSelector && E && !N[t + " "] &&
                                 (!s || !s.test(t)) && (!v || !v.test(t)))
                     try {
                       var n = c.call(e, t);
                       if (n || d.disconnectedMatch ||
                           e.document && 11 !== e.document.nodeType)
                         return n
                     } catch (e) {
                       N(t, !0)
                     }
                   return 0 < se(t, C, null, [ e ]).length
                 },
             se.contains = function(
                 e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) },
             se.attr =
                 function(e, t) {
                   (e.ownerDocument || e) != C && T(e);
                   var n = b.attrHandle[t.toLowerCase()],
                       r = n && j.call(b.attrHandle, t.toLowerCase())
                               ? n(e, t, !E)
                               : void 0;
                   return void 0 !== r         ? r
                          : d.attributes || !E ? e.getAttribute(t)
                          : (r = e.getAttributeNode(t)) && r.specified ? r.value
                                                                       : null
                 },
             se.escape = function(e) { return (e + "").replace(re, ie) },
             se.error =
                 function(e) {
                   throw new Error("Syntax error, unrecognized expression: " +
                                   e)
                 },
             se.uniqueSort =
                 function(e) {
                   var t, n = [], r = 0, i = 0;
                   if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0),
                       e.sort(D), l) {
                     while (t = e[i++])
                       t === e[i] && (r = n.push(i));
                     while (r--)
                       e.splice(n[r], 1)
                   }
                   return u = null, e
                 },
             o = se.getText =
                 function(e) {
                   var t, n = "", r = 0, i = e.nodeType;
                   if (i) {
                     if (1 === i || 9 === i || 11 === i) {
                       if ("string" == typeof e.textContent)
                         return e.textContent;
                       for (e = e.firstChild; e; e = e.nextSibling)
                         n += o(e)
                     } else if (3 === i || 4 === i)
                       return e.nodeValue
                   } else
                     while (t = e[r++])
                       n += o(t);
                   return n
                 },
             (
                 b =
                     se.selectors = {
                       cacheLength : 50,
                       createPseudo : le,
                       match : G,
                       attrHandle : {},
                       find : {},
                       relative : {
                         ">" : {dir : "parentNode", first : !0},
                         " " : {dir : "parentNode"},
                         "+" : {dir : "previousSibling", first : !0},
                         "~" : {dir : "previousSibling"}
                       },
                       preFilter : {
                         ATTR : function(e) {
                           return e[1] = e[1].replace(te, ne),
                                  e[3] = (e[3] || e[4] || e[5] ||
                                          "").replace(te, ne),
                                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                  e.slice(0, 4)
                         },
                         CHILD : function(e) {
                           return e[1] = e[1].toLowerCase(),
                                  "nth" === e[1].slice(0, 3)
                                      ? (e[3] || se.error(e[0]),
                                         e[4] = +(e[4] ? e[5] + (e[6] || 1)
                                                       : 2 * ("even" === e[3] ||
                                                              "odd" === e[3])),
                                         e[5] =
                                             +(e[7] + e[8] || "odd" === e[3]))
                                      : e[3] && se.error(e[0]),
                                  e
                         },
                         PSEUDO : function(e) {
                           var t, n = !e[6] && e[2];
                           return G.CHILD.test(e[0])
                                      ? null
                                      : (e[3]
                                             ? e[2] = e[4] || e[5] || ""
                                             : n && X.test(n) &&
                                                   (t = h(n, !0)) &&
                                                   (t = n.indexOf(
                                                            ")", n.length - t) -
                                                        n.length) &&
                                                   (e[0] = e[0].slice(0, t),
                                                    e[2] = n.slice(0, t)),
                                         e.slice(0, 3))
                         }
                       },
                       filter :
                           {
                             TAG : function(e) {
                               var t = e.replace(te, ne).toLowerCase();
                               return "*" === e ? function() {
                                 return !0
                               } : function(e) {
                                 return e.nodeName &&
                                        e.nodeName.toLowerCase() === t
                               }
                             },
                             CLASS : function(e) {
                               var t = m[e + " "];
                               return t ||
                                      (t = new RegExp("(^|" + M + ")" + e +
                                                      "(" + M + "|$)")) &&
                                          m(e, function(e) {
                                            return t.test(
                                                "string" ==
                                                        typeof e.className &&
                                                    e.className ||
                                                "undefined" !=
                                                        typeof e.getAttribute &&
                                                    e.getAttribute("class") ||
                                                "")
                                          })
                             },
                             ATTR : function(n, r, i) {
                               return function(e) {
                                 var t = se.attr(e, n);
                                 return null == t
                                            ? "!=" === r
                                            : !r ||
                                                  (t += "",
                                                   "=" === r    ? t === i
                                                   : "!=" === r ? t !== i
                                                   : "^=" === r
                                                       ? i && 0 === t.indexOf(i)
                                                   : "*=" === r
                                                       ? i && -1 < t.indexOf(i)
                                                   : "$=" === r
                                                       ? i && t.slice(
                                                                  -i.length) ===
                                                                  i
                                                   : "~=" === r
                                                       ? -1 < (" " +
                                                               t.replace(B,
                                                                         " ") +
                                                               " ")
                                                                  .indexOf(i)
                                                       : "|=" === r &&
                                                             (t === i ||
                                                              t.slice(0,
                                                                      i.length +
                                                                          1) ===
                                                                  i + "-"))
                               }
                             },
                             CHILD : function(h, e, t, g, v) {
                               var y = "nth" !== h.slice(0, 3),
                                   m = "last" !== h.slice(-4),
                                   x = "of-type" === e;
                               return 1 === g && 0 === v ? function(e) {
                                 return !!e.parentNode
                               } : function(e, t, n) {
                                 var r, i, o, a, s, u,
                                     l = y !== m ? "nextSibling"
                                                 : "previousSibling",
                                     c = e.parentNode,
                                     f = x && e.nodeName.toLowerCase(),
                                     p = !n && !x, d = !1;
                                 if (c) {
                                   if (y) {
                                     while (l) {
                                       a = e;
                                       while (a = a[l])
                                         if (x ? a.nodeName.toLowerCase() === f
                                               : 1 === a.nodeType)
                                           return !1;
                                       u = l =
                                           "only" === h && !u && "nextSibling"
                                     }
                                     return !0
                                   }
                                   if (u = [ m ? c.firstChild : c.lastChild ],
                                       m && p) {
                                     d = (s = (r = (i = (o = (a = c)[S] ||
                                                             (a[S] = {}))
                                                            [a.uniqueID] ||
                                                        (o[a.uniqueID] =
                                                             {}))[h] ||
                                                   [])[0] === k &&
                                              r[1]) &&
                                         r[2],
                                     a = s && c.childNodes[s];
                                     while (a = ++s && a && a[l] ||
                                                (d = s = 0) || u.pop())
                                       if (1 === a.nodeType && ++d && a === e) {
                                         i[h] = [ k, s, d ];
                                         break
                                       }
                                   } else if (
                                       p && (d = s =
                                                 (r = (i = (o = (a = e)[S] ||
                                                                (a[S] = {}))
                                                               [a.uniqueID] ||
                                                           (o[a.uniqueID] =
                                                                {}))[h] ||
                                                      [])[0] === k &&
                                                 r[1]),
                                       !1 === d)
                                     while (a = ++s && a && a[l] ||
                                                (d = s = 0) || u.pop())
                                       if ((x ? a.nodeName.toLowerCase() === f
                                              : 1 === a.nodeType) &&
                                           ++d &&
                                           (p &&
                                                ((i = (o = a[S] || (a[S] = {}))
                                                          [a.uniqueID] ||
                                                      (o[a.uniqueID] = {}))[h] =
                                                     [ k, d ]),
                                            a === e))
                                         break;
                                   return (d -= v) === g ||
                                          d % g == 0 && 0 <= d / g
                                 }
                               }
                             },
                             PSEUDO :
                                 function(e, o) {
                                   var t,
                                       a = b.pseudos[e] ||
                                           b.setFilters[e.toLowerCase()] ||
                                           se.error("unsupported pseudo: " + e);
                                   return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) { var n, r = a(e, o), i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function (e) { return a(e, 0, t) }) : a
                                 }
                           },
                       pseudos : {
                         not : le(function(e) {
                           var r = [], i = [], s = f(e.replace($, "$1"));
                           return s[S] ? le(function(e, t, n, r) {
                             var i, o = s(e, null, r, []), a = e.length;
                             while (a--)
                               (i = o[a]) && (e[a] = !(t[a] = i))
                           })
                                       : function(e, t, n) {
                                           return r[0] = e, s(r, null, n, i),
                                                  r[0] = null, !i.pop()
                                         }
                         }),
                         has : le(function(t) {
                           return function(e) { return 0 < se(t, e).length }
                         }),
                         contains : le(function(t) {
                           return t = t.replace(te, ne), function(e) {
                             return -1 < (e.textContent || o(e)).indexOf(t)
                           }
                         }),
                         lang : le(function(n) {
                           return V.test(n || "") ||
                                      se.error("unsupported lang: " + n),
                                  n = n.replace(te, ne).toLowerCase(),
                                  function(e) {
                                    var t;
                                    do {
                                      if (t = E ? e.lang
                                                : e.getAttribute("xml:lang") ||
                                                      e.getAttribute("lang"))
                                        return (t = t.toLowerCase()) === n ||
                                               0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) &&
                                             1 === e.nodeType);
                                    return !1
                                  }
                         }),
                         target : function(e) {
                           var t = n.location && n.location.hash;
                           return t && t.slice(1) === e.id
                         },
                         root : function(e) { return e === a },
                         focus : function(e) {
                           return e === C.activeElement &&
                                  (!C.hasFocus || C.hasFocus()) &&
                                  !!(e.type || e.href || ~e.tabIndex)
                         },
                         enabled : ge(!1),
                         disabled : ge(!0),
                         checked : function(e) {
                           var t = e.nodeName.toLowerCase();
                           return "input" === t && !!e.checked ||
                                  "option" === t && !!e.selected
                         },
                         selected : function(e) {
                           return e.parentNode && e.parentNode.selectedIndex,
                                  !0 === e.selected
                         },
                         empty : function(e) {
                           for (e = e.firstChild; e; e = e.nextSibling)
                             if (e.nodeType < 6)
                               return !1;
                           return !0
                         },
                         parent : function(e) { return !b.pseudos.empty(e) },
                         header : function(e) { return J.test(e.nodeName) },
                         input : function(e) { return Q.test(e.nodeName) },
                         button : function(e) {
                           var t = e.nodeName.toLowerCase();
                           return "input" === t && "button" === e.type ||
                                  "button" === t
                         },
                         text : function(e) {
                           var t;
                           return "input" === e.nodeName.toLowerCase() &&
                                  "text" === e.type &&
                                  (null == (t = e.getAttribute("type")) ||
                                   "text" === t.toLowerCase())
                         },
                         first : ve(function() { return [ 0 ] }),
                         last : ve(function(e, t) { return [ t - 1 ] }),
                         eq : ve(function(e, t,
                                          n) { return [ n < 0 ? n + t : n ] }),
                         even : ve(function(e, t) {
                           for (var n = 0; n < t; n += 2)
                             e.push(n);
                           return e
                         }),
                         odd : ve(function(e, t) {
                           for (var n = 1; n < t; n += 2)
                             e.push(n);
                           return e
                         }),
                         lt : ve(function(e, t, n) {
                           for (var r = n < 0   ? n + t
                                        : t < n ? t
                                                : n;
                                0 <= --r;)
                             e.push(r);
                           return e
                         }),
                         gt : ve(function(e, t, n) {
                           for (var r = n < 0 ? n + t : n; ++r < t;)
                             e.push(r);
                           return e
                         })
                       }
                     })
                 .pseudos.nth = b.pseudos.eq,
             {radio : !0, checkbox : !0, file : !0, password : !0, image : !0})
      b.pseudos[e] = de(e);
    for (e in {submit : !0, reset : !0})
      b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++)
        r += e[t].value;
      return r
    }
    function be(s, e, t) {
      var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c,
          p = r++;
      return e.first ? function(e, t, n) {
        while (e = e[u])
          if (1 === e.nodeType || f)
            return s(e, t, n);
        return !1
      } : function(e, t, n) {
        var r, i, o, a = [ k, p ];
        if (n) {
          while (e = e[u])
            if ((1 === e.nodeType || f) && s(e, t, n))
              return !0
        } else
          while (e = e[u])
            if (1 === e.nodeType || f)
              if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {}),
                  l && l === e.nodeName.toLowerCase())
                e = e[u] || e;
              else {
                if ((r = i[c]) && r[0] === k && r[1] === p)
                  return a[2] = r[2];
                if ((i[c] = a)[2] = s(e, t, n))
                  return !0
              }
        return !1
      }
    }
    function we(i) {
      return 1 < i.length ? function(e, t, n) {
        var r = i.length;
        while (r--)
          if (!i[r](e, t, n))
            return !1;
        return !0
      } : i[0]
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }
    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)),
             le(function(e, t, n, r) {
               var i, o, a, s = [], u = [], l = t.length,
                            c = e ||
                                function(e, t, n) {
                                  for (var r = 0, i = t.length; r < i; r++)
                                    se(e, t[r], n);
                                  return n
                                }(h || "*", n.nodeType ? [ n ] : n, []),
                            f = !d || !e && h ? c : Te(c, s, d, n, r),
                            p = g ? y || (e ? d : l || v) ? [] : t : f;
               if (g && g(f, p, n, r), v) {
                 i = Te(p, u), v(i, [], n, r), o = i.length;
                 while (o--)
                   (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
               }
               if (e) {
                 if (y || d) {
                   if (y) {
                     i = [], o = p.length;
                     while (o--)
                       (a = p[o]) && i.push(f[o] = a);
                     y(null, p = [], i, r)
                   }
                   o = p.length;
                   while (o--)
                     (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) &&
                         (e[i] = !(t[i] = a))
                 }
               } else
                 p = Te(p === t ? p.splice(l, p.length) : p),
                 y ? y(null, t, p, r) : H.apply(t, p)
             })
    }
    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type],
                        a = o || b.relative[" "], s = o ? 1 : 0,
                        u = be(function(e) { return e === i }, a, !0),
                        l = be(function(e) { return -1 < P(i, e) }, a, !0),
                        c = [ function(e, t, n) {
                          var r = !o && (n || t !== w) ||
                                  ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                          return i = null, r
                        } ];
           s < r; s++)
        if (t = b.relative[e[s].type])
          c = [ be(we(c), t) ];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++)
              if (b.relative[e[n].type])
                break;
            return Ce(1 < s && we(c),
                      1 < s && xe(e.slice(0, s - 1).concat({
                                 value : " " === e[s - 2].type ? "*" : ""
                               })).replace($, "$1"),
                      t, s < n && Ee(e.slice(s, n)),
                      n < r && Ee(e = e.slice(n)), n < r && xe(e))
          }
          c.push(t)
        }
      return we(c)
    }
    return me.prototype = b.filters = b.pseudos, b.setFilters = new me,
           h = se.tokenize =
               function(e, t) {
             var n, r, i, o, a, s, u, l = x[e + " "];
             if (l)
               return t ? 0 : l.slice(0);
             a = e, s = [], u = b.preFilter;
             while (a) {
               for (o in n && !(r = _.exec(a)) ||
                        (r && (a = a.slice(r[0].length) || a), s.push(i = [])),
                    n = !1,
                    (r = z.exec(a)) &&
                        (n = r.shift(),
                        i.push({value : n, type : r[0].replace($, " ")}),
                        a = a.slice(n.length)),
                    b.filter)
                 !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) ||
                     (n = r.shift(), i.push({value : n, type : o, matches : r}),
                      a = a.slice(n.length));
               if (!n)
                 break
             }
             return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
           },
           f = se.compile =
               function(e, t) {
             var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
             if (!a) {
               t || (t = h(e)), n = t.length;
               while (n--)
                 (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
               (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length,
                          r =
                              function(e, t, n, r, i) {
                                var o, a, s,
                                    u = 0, l = "0", c = e && [], f = [], p = w,
                                    d = e || x && b.find.TAG("*", i),
                                    h = k +=
                                    null == p ? 1 : Math.random() || .1,
                                    g = d.length;
                                for (i && (w = t == C || t || i);
                                     l !== g && null != (o = d[l]); l++) {
                                  if (x && o) {
                                    a = 0,
                                    t || o.ownerDocument == C || (T(o), n = !E);
                                    while (s = v[a++])
                                      if (s(o, t || C, n)) {
                                        r.push(o);
                                        break
                                      }
                                    i && (k = h)
                                  }
                                  m && ((o = !s && o) && u--, e && c.push(o))
                                }
                                if (u += l, m && l !== u) {
                                  a = 0;
                                  while (s = y[a++])
                                    s(c, f, t, n);
                                  if (e) {
                                    if (0 < u)
                                      while (l--)
                                        c[l] || f[l] || (f[l] = q.call(r));
                                    f = Te(f)
                                  }
                                  H.apply(r, f), i && !e && 0 < f.length &&
                                                     1 < u + y.length &&
                                                     se.uniqueSort(r)
                                }
                                return i && (k = h, w = p), c
                              },
                          m ? le(r) : r)))
                   .selector = e
             }
             return a
           },
           g = se.select =
               function(e, t, n, r) {
             var i, o, a, s, u, l = "function" == typeof e && e,
                                c = !r && h(e = l.selector || e);
             if (n = n || [], 1 === c.length) {
               if (2 < (o = c[0] = c[0].slice(0)).length &&
                   "ID" === (a = o[0]).type && 9 === t.nodeType && E &&
                   b.relative[o[1].type]) {
                 if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) ||
                            [])[0]))
                   return n;
                 l && (t = t.parentNode), e = e.slice(o.shift().value.length)
               }
               i = G.needsContext.test(e) ? 0 : o.length;
               while (i--) {
                 if (a = o[i], b.relative[s = a.type])
                   break;
                 if ((u = b.find[s]) &&
                     (r = u(a.matches[0].replace(te, ne),
                            ee.test(o[0].type) && ye(t.parentNode) || t))) {
                   if (o.splice(i, 1), !(e = r.length && xe(o)))
                     return H.apply(n, r), n;
                   break
                 }
               }
             }
             return (l || f(e, c))(r, t, !E, n,
                                   !t || ee.test(e) && ye(t.parentNode) || t),
                    n
           },
           d.sortStable = S.split("").sort(D).join("") === S,
           d.detectDuplicates = !!l, T(),
           d.sortDetached = ce(function(e) {
             return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
           }),
           ce(function(e) {
             return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
           }) ||
               fe("type|href|height|width",
                  function(e, t, n) {
                    if (!n)
                      return e.getAttribute(t,
                                            "type" === t.toLowerCase() ? 1 : 2)
                  }),
           d.attributes && ce(function(e) {
             return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
           }) ||
               fe("value",
                  function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                      return e.defaultValue
                  }),
           ce(function(e) { return null == e.getAttribute("disabled") }) ||
               fe(R,
                  function(e, t, n) {
                    var r;
                    if (!n)
                      return !0 === e[t] ? t.toLowerCase()
                             : (r = e.getAttributeNode(t)) && r.specified
                                 ? r.value
                                 : null
                  }),
           se
  }(C);
  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos,
  S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText,
  S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
  var h = function(e, t, n) {
    var r = [], i = void 0 !== n;
    while ((e = e[t]) && 9 !== e.nodeType)
      if (1 === e.nodeType) {
        if (i && S(e).is(n))
          break;
        r.push(e)
      }
    return r
  }, T = function(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n
  }, k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n) ? S.grep(e, function(e, t) { return !!n.call(e, t, e) !== r })
           : n.nodeType ? S.grep(e, function(e) { return e === n !== r })
           : "string" != typeof n
               ? S.grep(e, function(e) { return -1 < i.call(n, e) !== r })
               : S.filter(n, e, r)
  }
  S.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"),
           1 === t.length && 1 === r.nodeType
               ? S.find.matchesSelector(r, e) ? [ r ] : []
               : S.find.matches(
                     e, S.grep(t, function(e) { return 1 === e.nodeType }))
  }, S.fn.extend({
    find : function(e) {
      var t, n, r = this.length, i = this;
      if ("string" != typeof e)
        return this.pushStack(S(e).filter(function() {
          for (t = 0; t < r; t++)
            if (S.contains(i[t], this))
              return !0
        }));
      for (n = this.pushStack([]), t = 0; t < r; t++)
        S.find(e, i[t], n);
      return 1 < r ? S.uniqueSort(n) : n
    },
    filter : function(e) { return this.pushStack(D(this, e || [], !1)) },
    not : function(e) { return this.pushStack(D(this, e || [], !0)) },
    is : function(e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
                   .length
    }
  });
  var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function(e, t, n) {
    var r, i;
    if (!e)
      return this;
    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                    ? [ null, e, null ]
                    : q.exec(e)) ||
          !r[1] && t)
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof S ? t[0] : t,
            S.merge(this,
                    S.parseHTML(
                        r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
            N.test(r[1]) && S.isPlainObject(t))
          for (r in t)
            m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this
      }
      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1),
             this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this)
           : m(e)     ? void 0 !== n.ready ? n.ready(e) : e(S)
                      : S.makeArray(e, this)
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {children : !0, contents : !0, next : !0, prev : !0};
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType)
      ;
    return e
  }
  S.fn.extend({
    has : function(e) {
      var t = S(e, this), n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++)
          if (S.contains(this, t[e]))
            return !0
      })
    },
    closest : function(e, t) {
      var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 &&
                (a ? -1 < a.index(n)
                   : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
              o.push(n);
              break
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
    },
    index : function(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0])
                                      : i.call(this, e.jquery ? e[0] : e)
             : this[0] && this[0].parentNode ? this.first().prevAll().length
                                             : -1
    },
    add : function(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
    },
    addBack : function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }),
      S.each({
        parent : function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
        },
        parents : function(e) { return h(e, "parentNode") },
        parentsUntil : function(e, t, n) { return h(e, "parentNode", n) },
        next : function(e) { return O(e, "nextSibling") },
        prev : function(e) { return O(e, "previousSibling") },
        nextAll : function(e) { return h(e, "nextSibling") },
        prevAll : function(e) { return h(e, "previousSibling") },
        nextUntil : function(e, t, n) { return h(e, "nextSibling", n) },
        prevUntil : function(e, t, n) { return h(e, "previousSibling", n) },
        siblings : function(e) { return T((e.parentNode || {}).firstChild, e) },
        children : function(e) { return T(e.firstChild) },
        contents : function(e) {
          return null != e.contentDocument && r(e.contentDocument)
                     ? e.contentDocument
                     : (A(e, "template") && (e = e.content || e),
                        S.merge([], e.childNodes))
        }
      },
             function(r, i) {
               S.fn[r] = function(e, t) {
                 var n = S.map(this, i, e);
                 return "Until" !== r.slice(-5) && (t = e),
                        t && "string" == typeof t && (n = S.filter(t, n)),
                        1 < this.length &&
                            (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
                        this.pushStack(n)
               }
             });
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) { return e }
  function M(e) { throw e }
  function I(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n)
      : e && m(i = e.then)  ? i.call(e, t, n)
                            : t.apply(void 0, [ e ].slice(r))
    } catch (e) {
      n.apply(void 0, [ e ])
    }
  }
  S.Callbacks = function(r) {
    var e, n;
    r = "string" == typeof r
            ? (e = r, n = {},
               S.each(e.match(P) || [], function(e, t) { n[t] = !0 }), n)
            : S.extend({}, r);
    var i, t, o, a, s = [], u = [], l = -1, c = function() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();
        while (++l < s.length)
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse &&
              (l = s.length, t = !1)
      }
      r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
    }, f = {
      add : function() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                 S.each(e, function(e, t) {
                   m(t) ? r.unique && f.has(t) || s.push(t)
                        : t && t.length && "string" !== w(t) && n(t)
                 })
               }(arguments), t && !i && c()), this
      },
      remove : function() {
        return S.each(arguments, function(e, t) {
          var n;
          while (-1 < (n = S.inArray(t, s, n)))
            s.splice(n, 1), n <= l && l--
        }), this
      },
      has : function(e) { return e ? -1 < S.inArray(e, s) : 0 < s.length },
      empty : function() { return s && (s = []), this },
      disable : function() { return a = u = [], s = t = "", this },
      disabled : function() { return !s },
      lock : function() { return a = u = [], t || i || (s = t = ""), this },
      locked : function() { return !!a },
      fireWith : function(e, t) {
        return a || (t = [ e, (t = t || []).slice ? t.slice() : t ], u.push(t),
                     i || c()),
               this
      },
      fire : function() { return f.fireWith(this, arguments), this },
      fired : function() { return !!o }
    };
    return f
  }, S.extend({
    Deferred : function(e) {
      var o =
              [
                [
                  "notify", "progress", S.Callbacks("memory"),
                  S.Callbacks("memory"), 2
                ],
                [
                  "resolve", "done", S.Callbacks("once memory"),
                  S.Callbacks("once memory"), 0, "resolved"
                ],
                [
                  "reject", "fail", S.Callbacks("once memory"),
                  S.Callbacks("once memory"), 1, "rejected"
                ]
              ],
          i = "pending", a = {
            state : function() { return i },
            always :
                function() { return s.done(arguments).fail(arguments), this },
            "catch" : function(e) { return a.then(null, e) },
            pipe : function() {
              var i = arguments;
              return S
                  .Deferred(function(r) {
                    S.each(o, function(e, t) {
                      var n = m(i[t[4]]) && i[t[4]];
                      s[t[1]](function() {
                        var e = n && n.apply(this, arguments);
                        e && m(e.promise)
                            ? e.promise()
                                  .progress(r.notify)
                                  .done(r.resolve)
                                  .fail(r.reject)
                            : r[t[0] + "With"](this, n ? [ e ] : arguments)
                      })
                    }), i = null
                  })
                  .promise()
            },
            then : function(t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function() {
                  var n = this, r = arguments, e = function() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise())
                        throw new TypeError("Thenable self-resolution");
                      t = e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then,
                      m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                               : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s),
                                              l(u, o, R, o.notifyWith)))
                           : (a !== R && (n = void 0, r = [ e ]),
                              (s || o.resolveWith)(n, r))
                    }
                  }, t = s ? e : function() {
                    try {
                      e()
                    } catch (e) {
                      S.Deferred.exceptionHook &&
                          S.Deferred.exceptionHook(e, t.stackTrace),
                          u <= i + 1 && (a !== M && (n = void 0, r = [ e ]),
                                         o.rejectWith(n, r))
                    }
                  };
                  i ? t()
                    : (S.Deferred.getStackHook &&
                           (t.stackTrace = S.Deferred.getStackHook()),
                       C.setTimeout(t))
                }
              }
              return S
                  .Deferred(function(e) {
                    o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                  })
                  .promise()
            },
            promise : function(e) { return null != e ? S.extend(e, a) : a }
          },
          s = {};
      return S.each(o, function(e, t) {
        var n = t[2], r = t[5];
        a[t[1]] = n.add,
        r && n.add(function() { i = r }, o[3 - e][2].disable,
                   o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
        n.add(t[3].fire), s[t[0]] = function() {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
        }, s[t[0] + "With"] = n.fireWith
      }), a.promise(s), e && e.call(s, s), s
    },
    when : function(e) {
      var n = arguments.length, t = n, r = Array(t), i = s.call(arguments),
          o = S.Deferred(), a = function(t) {
            return function(e) {
              r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e,
              --n || o.resolveWith(r, i)
            }
          };
      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
                     "pending" === o.state() || m(i[t] && i[t].then)))
        return o.then();
      while (t--)
        I(i[t], a(t), o.reject);
      return o.promise()
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function(e, t) {
    C.console && C.console.warn && e && W.test(e.name) &&
        C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, S.readyException = function(e) { C.setTimeout(function() { throw e }) };
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B), S.ready()
  }
  S.fn.ready =
      function(e) {
    return F.then(e)["catch"](function(e) { S.readyException(e) }), this
  },
  S.extend({
    isReady : !1,
    readyWait : 1,
    ready : function(e) {
      (!0 === e ? --S.readyWait : S.isReady) ||
          (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [ S ])
    }
  }),
  S.ready.then = F.then,
  "complete" === E.readyState ||
          "loading" !== E.readyState && !E.documentElement.doScroll
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
         C.addEventListener("load", B));
  var $ = function(e, t, n, r, i, o, a) {
    var s = 0, u = e.length, l = null == n;
    if ("object" === w(n))
      for (s in i = !0, n)
        $(e, t, s, n[s], !0, o, a);
    else if (void 0 !== r &&
             (i = !0, m(r) || (a = !0),
              l && (a ? (t.call(e, r), t = null)
                      : (l = t,
                         t = function(e, t, n) { return l.call(S(e), n) })),
              t))
      for (; s < u; s++)
        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  }, _ = /^-ms-/, z = /-([a-z])/g;
  function U(e, t) { return t.toUpperCase() }
  function X(e) { return e.replace(_, "ms-").replace(z, U) }
  var V = function(
      e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };
  function G() { this.expando = S.expando + G.uid++ }
  G.uid = 1, G.prototype = {
    cache : function(e) {
      var t = e[this.expando];
      return t || (t = {},
                   V(e) && (e.nodeType ? e[this.expando] = t
                                       : Object.defineProperty(
                                             e, this.expando,
                                             {value : t, configurable : !0}))),
             t
    },
    set : function(e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t)
        i[X(t)] = n;
      else
        for (r in t)
          i[X(r)] = t[r];
      return i
    },
    get : function(e, t) {
      return void 0 === t ? this.cache(e)
                          : e[this.expando] && e[this.expando][X(t)]
    },
    access : function(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n
                 ? this.get(e, t)
                 : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove : function(e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t)  ? t.map(X)
                   : (t = X(t)) in r ? [ t ]
                                     : t.match(P) || [])
                  .length;
          while (n--)
            delete r[t[n]]
        }
        (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData : function(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t)
    }
  };
  var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
          "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = "true" === (i = n) ||
              "false" !== i && ("null" === i    ? null
                                : i === +i + "" ? +i
                                : J.test(i)     ? JSON.parse(i)
                                                : i)
        } catch (e) {
        }
        Q.set(e, t, n)
      } else
        n = void 0;
    return n
  }
  S.extend({
    hasData : function(e) { return Q.hasData(e) || Y.hasData(e) },
    data : function(e, t, n) { return Q.access(e, t, n) },
    removeData : function(e, t) { Q.remove(e, t) },
    _data : function(e, t, n) { return Y.access(e, t, n) },
    _removeData : function(e, t) { Y.remove(e, t) }
  }),
      S.fn.extend({
        data : function(n, e) {
          var t, r, i, o = this[0], a = o && o.attributes;
          if (void 0 === n) {
            if (this.length &&
                (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
              t = a.length;
              while (t--)
                a[t] && 0 === (r = a[t].name).indexOf("data-") &&
                    (r = X(r.slice(5)), Z(o, r, i[r]));
              Y.set(o, "hasDataAttrs", !0)
            }
            return i
          }
          return "object" == typeof n
                     ? this.each(function() { Q.set(this, n) })
                     : $(this, function(e) {
                         var t;
                         if (o && void 0 === e)
                           return void 0 !== (t = Q.get(o, n)) ? t
                                  : void 0 !== (t = Z(o, n))   ? t
                                                               : void 0;
                         this.each(function() { Q.set(this, n, e) })
                       }, null, e, 1 < arguments.length, null, !0)
        },
        removeData : function(
            e) { return this.each(function() { Q.remove(this, e) }) }
      }),
      S.extend({
        queue : function(e, t, n) {
          var r;
          if (e)
            return t = (t || "fx") + "queue", r = Y.get(e, t),
                   n && (!r || Array.isArray(n)
                             ? r = Y.access(e, t, S.makeArray(n))
                             : r.push(n)),
                   r || []
        },
        dequeue : function(e, t) {
          t = t || "fx";
          var n = S.queue(e, t), r = n.length, i = n.shift(),
              o = S._queueHooks(e, t);
          "inprogress" === i && (i = n.shift(), r--),
              i && ("fx" === t && n.unshift("inprogress"), delete o.stop,
                    i.call(e, function() { S.dequeue(e, t) }, o)),
              !r && o && o.empty.fire()
        },
        _queueHooks : function(e, t) {
          var n = t + "queueHooks";
          return Y.get(e, n) || Y.access(e, n, {
            empty : S.Callbacks("once memory").add(function() {
              Y.remove(e, [ t + "queue", n ])
            })
          })
        }
      }),
      S.fn.extend({
        queue : function(t, n) {
          var e = 2;
          return "string" != typeof t && (n = t, t = "fx", e--),
                 arguments.length < e ? S.queue(this[0], t)
                 : void 0 === n       ? this
                                      : this.each(function() {
                                    var e = S.queue(this, t, n);
                                    S._queueHooks(this, t),
                                        "fx" === t && "inprogress" !== e[0] &&
                                            S.dequeue(this, t)
                                  })
        },
              dequeue : function(
                  e) { return this.each(function() { S.dequeue(this, e) }) },
              clearQueue : function(e) { return this.queue(e || "fx", []) },
              promise : function(e, t) {
          var n, r = 1, i = S.Deferred(), o = this, a = this.length,
                 s = function() { --r || i.resolveWith(o, [ o ]) };
          "string" != typeof e && (t = e, e = void 0), e = e || "fx";
          while (a--)
            (n = Y.get(o[a], e + "queueHooks")) && n.empty &&
                (r++, n.empty.add(s));
          return s(), i.promise(t)
        }
      });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = [ "Top", "Right", "Bottom", "Left" ], re = E.documentElement,
      ie = function(e) { return S.contains(e.ownerDocument, e) },
      oe = {composed : !0};
  re.getRootNode && (ie = function(e) {
    return S.contains(e.ownerDocument, e) ||
           e.getRootNode(oe) === e.ownerDocument
  });
  var ae = function(e, t) {
    return "none" === (e = t || e).style.display ||
           "" === e.style.display && ie(e) && "none" === S.css(e, "display")
  };
  function se(e, t, n, r) {
    var i, o, a = 20,
              s = r ? function() { return r.cur() }
                    : function() { return S.css(e, t, "") },
              u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
              c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) &&
                  te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--)
        S.style(e, t, c + l),
            (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, S.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                 r && (r.unit = l, r.start = c, r.end = i)),
           i
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
          (n = r.style.display,
           t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
                                 l[c] || (r.style.display = "")),
                "" === r.style.display && ae(r) &&
                    (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument,
                             s = i.nodeName,
                             (u = ue[s]) ||
                                 (o = a.body.appendChild(a.createElement(s)),
                                  u = S.css(o, "display"),
                                  o.parentNode.removeChild(o),
                                  "none" === u && (u = "block"), ue[s] = u))))
             : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    for (c = 0; c < f; c++)
      null != l[c] && (e[c].style.display = l[c]);
    return e
  }
  S.fn.extend({
    show : function() { return le(this, !0) },
    hide : function() { return le(this) },
    toggle : function(e) {
      return "boolean" == typeof e
                 ? e ? this.show() : this.hide()
                 : this.each(function() {
                     ae(this) ? S(this).show() : S(this).hide()
                   })
    }
  });
  var ce, fe, pe = /^(?:checkbox|radio)$/i,
              de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
              he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")),
  (fe = E.createElement("input")).setAttribute("type", "radio"),
  fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"),
  ce.appendChild(fe),
  y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
  ce.innerHTML = "<textarea>x</textarea>",
  y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
  ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead : [ 1, "<table>", "</table>" ],
    col : [ 2, "<table><colgroup>", "</colgroup></table>" ],
    tr : [ 2, "<table><tbody>", "</tbody></table>" ],
    td : [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    _default : [ 0, "", "" ]
  };
  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName
                   ? e.getElementsByTagName(t || "*")
               : "undefined" != typeof e.querySelectorAll
                   ? e.querySelectorAll(t || "*")
                   : [],
           void 0 === t || t && A(e, t) ? S.merge([ e ], n) : n
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
  }
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td,
  y.option || (ge.optgroup = ge.option =
                   [ 1, "<select multiple='multiple'>", "</select>" ]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0,
                               h = e.length;
         d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o))
          S.merge(p, o.nodeType ? [ o ] : o);
        else if (me.test(o)) {
          a = a || f.appendChild(t.createElement("div")),
          s = (de.exec(o) || [ "", "" ])[1].toLowerCase(),
          u = ge[s] || ge._default,
          a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
          while (c--)
            a = a.lastChild;
          S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else
          p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++])
      if (r && -1 < S.inArray(o, r))
        i && i.push(o);
      else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;
        while (o = a[c++])
          he.test(o.type || "") && n.push(o)
      }
    return f
  }
  var be = /^key/, we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() { return !0 }
  function Ee() { return !1 }
  function Se(e, t) {
    return e === function() {
      try {
        return E.activeElement
      } catch (e) {
      }
    }() == ("focus" === t)
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t)
        ke(e, s, n, r, t[s], o);
      return e
    }
    if (null == r && null == i
            ? (i = n, r = n = void 0)
            : null == i && ("string" == typeof n ? (i = r, r = void 0)
                                                 : (i = r, r = n, n = void 0)),
        !1 === i)
      i = Ee;
    else if (!i)
      return e;
    return 1 === o &&
               (a = i, (i = function(
                            e) { return S().off(e), a.apply(this, arguments) })
                           .guid = a.guid || (a.guid = S.guid++)),
           e.each(function() { S.event.add(this, t, i, r, n) })
  }
  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace : !1,
      handler : function(e) {
        var t, n, r = Y.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length)
            (S.event.special[i] || {}).delegateType && e.stopPropagation();
          else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i),
                   this[i](),
                   r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1)
                                                   : n = {},
                   r !== n)
            return e.stopImmediatePropagation(), e.preventDefault(), n.value
        } else
          r.length && (Y.set(this, i, {
            value : S.event.trigger(S.extend(r[0], S.Event.prototype),
                                    r.slice(1), this)
          }),
                       e.stopImmediatePropagation())
      }
    }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
  }
  S.event = {
    global : {},
    add : function(t, e, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector),
            i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++),
            (u = v.events) || (u = v.events = Object.create(null)),
            (a = v.handle) || (a = v.handle = function(e) {
              return "undefined" != typeof S && S.event.triggered !== e.type ? S.event
                                                                                   .dispatch
                                                                                   .apply(
                                                                                       t,
                                                                                       arguments)
                                                                             : void 0
            }), l = (e = (e || "").match(P) || [ "" ]).length;
        while (l--)
          d = g = (s = Te.exec(e[l]) || [])[1],
          h = (s[2] || "").split(".").sort(),
          d && (f = S.event.special[d] || {},
                d = (i ? f.delegateType : f.bindType) || d,
                f = S.event.special[d] || {},
                c = S.extend({
                  type : d,
                  origType : g,
                  data : r,
                  handler : n,
                  guid : n.guid,
                  selector : i,
                  needsContext : i && S.expr.match.needsContext.test(i),
                  namespace : h.join(".")
                },
                             o),
                (p = u[d]) ||
                    ((p = u[d] = []).delegateCount = 0,
                     f.setup && !1 !== f.setup.call(t, r, h, a) ||
                         t.addEventListener && t.addEventListener(d, a)),
                f.add && (f.add.call(t, c),
                          c.handler.guid || (c.handler.guid = n.guid)),
                i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                S.event.global[d] = !0)
      }
    },
    remove : function(e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [ "" ]).length;
        while (l--)
          if (d = g = (s = Te.exec(t[l]) || [])[1],
              h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {},
            p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
            s = s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
            a = o = p.length;
            while (o--)
              c = p[o],
              !i && g !== c.origType || n && n.guid !== c.guid ||
                  s && !s.test(c.namespace) ||
                  r && r !== c.selector && ("**" !== r || !c.selector) ||
                  (p.splice(o, 1), c.selector && p.delegateCount--,
                   f.remove && f.remove.call(e, c));
            a && !p.length &&
                (f.teardown && !1 !== f.teardown.call(e, h, v.handle) ||
                     S.removeEvent(e, d, v.handle),
                 delete u[d])
          } else
            for (d in u)
              S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events")
      }
    },
    dispatch : function(e) {
      var t, n, r, i, o, a,
          s = new Array(arguments.length), u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++)
        s[t] = arguments[t];
      if (u.delegateTarget = this,
          !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            u.rnamespace && !1 !== o.namespace &&
                    !u.rnamespace.test(o.namespace) ||
                (u.handleObj = o, u.data = o.data,
                 void 0 !== (r = ((S.event.special[o.origType] || {}).handle ||
                                  o.handler)
                                     .apply(i.elem, s)) &&
                     !1 === (u.result = r) &&
                     (u.preventDefault(), u.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers : function(e, t) {
      var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[i = (r = t[n]).selector + " "] &&
                  (a[i] = r.needsContext ? -1 < S(i, this).index(l)
                                         : S.find(i, this, null, [ l ]).length),
                  a[i] && o.push(r);
            o.length && s.push({elem : l, handlers : o})
          }
      return l = this,
             u < t.length && s.push({elem : l, handlers : t.slice(u)}), s
    },
    addProp : function(t, e) {
      Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function () { if (this.originalEvent) return e(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[t] }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } })
    },
    fix : function(e) { return e[S.expando] ? e : new S.Event(e) },
    special : {
      load : {noBubble : !0},
      click : {
        setup : function(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") &&
                     Ae(t, "click", Ce),
                 !1
        },
        trigger : function(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                 !0
        },
        _default : function(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") &&
                     Y.get(t, "click") ||
                 A(t, "a")
        }
      },
      beforeunload : {
        postDispatch : function(e) {
          void 0 !== e.result && e.originalEvent &&
              (e.originalEvent.returnValue = e.result)
        }
      }
    }
  },
  S.removeEvent = function(
      e, t, n) { e.removeEventListener && e.removeEventListener(t, n) },
  S.Event =
      function(e, t) {
    if (!(this instanceof S.Event))
      return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type,
                   this.isDefaultPrevented =
                       e.defaultPrevented || void 0 === e.defaultPrevented &&
                                                 !1 === e.returnValue
                           ? Ce
                           : Ee,
                   this.target = e.target && 3 === e.target.nodeType
                                     ? e.target.parentNode
                                     : e.target,
                   this.currentTarget = e.currentTarget,
                   this.relatedTarget = e.relatedTarget)
                : this.type = e,
                  t && S.extend(this, t),
                  this.timeStamp = e && e.timeStamp || Date.now(),
                  this[S.expando] = !0
  },
  S.Event.prototype = {
    constructor : S.Event,
    isDefaultPrevented : Ee,
    isPropagationStopped : Ee,
    isImmediatePropagationStopped : Ee,
    isSimulated : !1,
    preventDefault : function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation : function() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce,
      e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation : function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce,
      e && !this.isSimulated && e.stopImmediatePropagation(),
      this.stopPropagation()
    }
  },
  S.each({
    altKey : !0,
    bubbles : !0,
    cancelable : !0,
    changedTouches : !0,
    ctrlKey : !0,
    detail : !0,
    eventPhase : !0,
    metaKey : !0,
    pageX : !0,
    pageY : !0,
    shiftKey : !0,
    view : !0,
    "char" : !0,
    code : !0,
    charCode : !0,
    key : !0,
    keyCode : !0,
    button : !0,
    buttons : !0,
    clientX : !0,
    clientY : !0,
    offsetX : !0,
    offsetY : !0,
    pointerId : !0,
    pointerType : !0,
    screenX : !0,
    screenY : !0,
    targetTouches : !0,
    toElement : !0,
    touches : !0,
    which : function(e) {
      var t = e.button;
      return null == e.which && be.test(e.type)
                 ? null != e.charCode ? e.charCode : e.keyCode
             : !e.which && void 0 !== t && we.test(e.type) ? 1 & t   ? 1
                                                             : 2 & t ? 3
                                                             : 4 & t ? 2
                                                                     : 0
                                                           : e.which
    }
  },
         S.event.addProp),
  S.each({focus : "focusin", blur : "focusout"},
         function(e, t) {
           S.event.special[e] = {
             setup : function() { return Ae(this, e, Se), !1 },
             trigger : function() { return Ae(this, e), !0 },
             delegateType : t
           }
         }),
  S.each({
    mouseenter : "mouseover",
    mouseleave : "mouseout",
    pointerenter : "pointerover",
    pointerleave : "pointerout"
  },
         function(e, i) {
           S.event.special[e] = {
             delegateType : i,
             bindType : i,
             handle : function(e) {
               var t, n = e.relatedTarget, r = e.handleObj;
               return n && (n === this || S.contains(this, n)) ||
                          (e.type = r.origType,
                           t = r.handler.apply(this, arguments), e.type = i),
                      t
             }
           }
         }),
  S.fn.extend({
    on : function(e, t, n, r) { return ke(this, e, t, n, r) },
    one : function(e, t, n, r) { return ke(this, e, t, n, r, 1) },
    off : function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj)
        return r = e.handleObj,
               S(e.delegateTarget)
                   .off(r.namespace ? r.origType + "." + r.namespace
                                    : r.origType,
                        r.selector, r.handler),
               this;
      if ("object" == typeof e) {
        for (i in e)
          this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0),
             !1 === n && (n = Ee),
             this.each(function() { S.event.remove(this, e, n, t) })
    }
  });
  var Ne = /<script|<style|<link/i, De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
               S(e).children("tbody")[0] ||
           e
  }
  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }
  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5)
                                                  : e.removeAttribute("type"),
                                                    e
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in Y.remove(t, "handle events"), s)
          for (n = 0, r = s[i].length; n < r; n++)
            S.event.add(t, i, s[i][n]);
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
    var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d))
      return n.each(function(e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
      });
    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
              1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        u = e,
        c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))),
        i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          u = a[c],
          he.test(u.type || "") && !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                   ? S._evalUrl && !u.noModule &&
                         S._evalUrl(
                             u.src,
                             {nonce : u.nonce || u.getAttribute("nonce")}, l)
                   : b(u.textContent.replace(je, ""), u, l))
    }
    return n
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
          r.parentNode &&
              (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e
  }
  S.extend({
    htmlPrefilter : function(e) { return e },
    clone : function(e, t, n) {
      var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType ||
            S.isXMLDoc(e)))
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          s = o[r], u = a[r], void 0,
          "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? u.checked = s.checked
              : "input" !== l && "textarea" !== l ||
                    (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Oe(o[r], a[r]);
        else
          Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
    },
    cleanData : function(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0
          }
          n[Q.expando] && (n[Q.expando] = void 0)
        }
    }
  }),
      S.fn.extend({
        detach : function(e) { return Re(this, e, !0) },
        remove : function(e) { return Re(this, e) },
        text : function(e) {
          return $(this, function(e) {
            return void 0 === e ? S.text(this) : this.empty().each(function() {
              1 !== this.nodeType && 11 !== this.nodeType &&
                      9 !== this.nodeType ||
                  (this.textContent = e)
            })
          }, null, e, arguments.length)
        },
        append : function() {
          return Pe(this, arguments, function(e) {
            1 !== this.nodeType && 11 !== this.nodeType &&
                    9 !== this.nodeType ||
                qe(this, e).appendChild(e)
          })
        },
        prepend : function() {
          return Pe(this, arguments, function(e) {
            if (1 === this.nodeType || 11 === this.nodeType ||
                9 === this.nodeType) {
              var t = qe(this, e);
              t.insertBefore(e, t.firstChild)
            }
          })
        },
        before : function() {
          return Pe(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
          })
        },
        after : function() {
          return Pe(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
        },
        empty : function() {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
          return this
        },
        clone : function(e, t) {
          return e = null != e && e, t = null == t ? e : t,
                 this.map(function() { return S.clone(this, e, t) })
        },
        html : function(e) {
          return $(this, function(e) {
            var t = this[0] || {}, n = 0, r = this.length;
            if (void 0 === e && 1 === t.nodeType)
              return t.innerHTML;
            if ("string" == typeof e && !Ne.test(e) &&
                !ge[(de.exec(e) || [ "", "" ])[1].toLowerCase()]) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                      (S.cleanData(ve(t, !1)), t.innerHTML = e);
                t = 0
              } catch (e) {
              }
            }
            t && this.empty().append(e)
          }, null, e, arguments.length)
        },
        replaceWith : function() {
          var n = [];
          return Pe(this, arguments, function(e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
                (S.cleanData(ve(this)), t && t.replaceChild(e, this))
          }, n)
        }
      }),
      S.each({
        appendTo : "append",
        prependTo : "prepend",
        insertBefore : "before",
        insertAfter : "after",
        replaceAll : "replaceWith"
      },
             function(e, a) {
               S.fn[e] = function(e) {
                 for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i;
                      o++)
                   t = o === i ? this : this.clone(!0), S(r[o])[a](t),
                   u.apply(n, t.get());
                 return this.pushStack(n)
               }
             });
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Ie = function(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e)
  }, We = function(e, t, n) {
    var r, i, o = {};
    for (i in t)
      o[i] = e.style[i], e.style[i] = t[i];
    for (i in r = n.call(e), t)
      e.style[i] = o[i];
    return r
  }, Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r, i, o, a, s = e.style;
    return (n = n || Ie(e)) &&
               ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) ||
                    (a = S.style(e, t)),
                !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) &&
                    (r = s.width, i = s.minWidth, o = s.maxWidth,
                     s.minWidth = s.maxWidth = s.width = a, a = n.width,
                     s.width = r, s.minWidth = i, s.maxWidth = o)),
           void 0 !== a ? a + "" : a
  }
  function $e(e, t) {
    return {
      get: function() {
        if (!e())
          return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }
  !function() {
    function e() {
      if (l) {
        u.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%",
        o = 36 === t(e.right), r = 36 === t(e.width),
        l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3),
        re.removeChild(u), l = null
      }
    }
    function t(e) { return Math.round(parseFloat(e)) }
    var n, r, i, o, a, s, u = E.createElement("div"),
                          l = E.createElement("div");
    l.style &&
        (l.style.backgroundClip = "content-box",
         l.cloneNode(!0).style.backgroundClip = "",
         y.clearCloneStyle = "content-box" === l.style.backgroundClip,
         S.extend(y, {
           boxSizingReliable : function() { return e(), r },
           pixelBoxStyles : function() { return e(), o },
           pixelPosition : function() { return e(), n },
           reliableMarginLeft : function() { return e(), s },
           scrollboxSize : function() { return e(), i },
           reliableTrDimensions : function() {
             var e, t, n, r;
             return null == a &&
                        (e = E.createElement("table"),
                         t = E.createElement("tr"), n = E.createElement("div"),
                         e.style.cssText = "position:absolute;left:-11111px",
                         t.style.height = "1px", n.style.height = "9px",
                         re.appendChild(e).appendChild(t).appendChild(n),
                         r = C.getComputedStyle(t), a = 3 < parseInt(r.height),
                         re.removeChild(e)),
                    a
           }
         }))
  }();
  var _e = [ "Webkit", "Moz", "ms" ], ze = E.createElement("div").style,
      Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function(e) {
             var t = e[0].toUpperCase() + e.slice(1), n = _e.length;
             while (n--)
               if ((e = _e[n] + t) in ze)
                 return e
           }(e) || e)
  }
  var Ve = /^(none|table(?!-c[ea]).+)/, Ge = /^--/,
      Ye = {position : "absolute", visibility : "hidden", display : "block"},
      Qe = {letterSpacing : "0", fontWeight : "400"};
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0, s = 0, u = 0;
    if (n === (r ? "border" : "content"))
      return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
          r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
               "margin" !== n &&
                   (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
            : (u += S.css(e, "padding" + ne[a], !0, i),
               "padding" !== n
                   ? u += S.css(e, "border" + ne[a] + "Width", !0, i)
                   : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    return !r && 0 <= o &&
               (u +=
                Math.max(
                    0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] -
                                 o - u - s - .5)) ||
                0),
           u
  }
  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) &&
            "border-box" === S.css(e, "boxSizing", !1, r),
        o = i, a = Be(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n)
        return a;
      a = "auto"
    }
    return (!y.boxSizingReliable() && i ||
            !y.reliableTrDimensions() && A(e, "tr") || "auto" === a ||
            !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) &&
               e.getClientRects().length &&
               (i = "border-box" === S.css(e, "boxSizing", !1, r),
                (o = s in e) && (a = e[s])),
           (a = parseFloat(a) || 0) +
               Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
  }
  function et(e, t, n, r, i) { return new et.prototype.init(e, t, n, r, i) }
  S.extend({
    cssHooks : {
      opacity : {
        get : function(e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber : {
      animationIterationCount : !0,
      columnCount : !0,
      fillOpacity : !0,
      flexGrow : !0,
      flexShrink : !0,
      fontWeight : !0,
      gridArea : !0,
      gridColumn : !0,
      gridColumnEnd : !0,
      gridColumnStart : !0,
      gridRow : !0,
      gridRowEnd : !0,
      gridRowStart : !0,
      lineHeight : !0,
      opacity : !0,
      order : !0,
      orphans : !0,
      widows : !0,
      zIndex : !0,
      zoom : !0
    },
    cssProps : {},
    style : function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n)
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] &&
            (n = se(e, t, i), o = "number"),
            null != n && n == n &&
                ("number" !== o || u ||
                     (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                 y.clearCloneStyle || "" !== n ||
                     0 !== t.indexOf("background") || (l[t] = "inherit"),
                 a && "set" in a && void 0 === (n = a.set(e, n, r)) ||
                     (u ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css : function(e, t, n, r) {
      var i, o, a, s = X(t);
      return Ge.test(t) || (t = Xe(s)),
             (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a &&
                 (i = a.get(e, !0, n)),
             void 0 === i && (i = Be(e, t, r)),
             "normal" === i && t in Qe && (i = Qe[t]),
             "" === n || n
                 ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i)
                 : i
    }
  }),
      S.each(
          [ "height", "width" ],
          function(e, u) {
            S.cssHooks[u] = {
              get : function(e, t, n) {
                if (t)
                  return !Ve.test(S.css(e, "display")) ||
                                 e.getClientRects().length &&
                                     e.getBoundingClientRect().width
                             ? Ze(e, u, n)
                             : We(e, Ye, function() { return Ze(e, u, n) })
              },
              set : function(e, t, n) {
                var r, i = Ie(e),
                       o = !y.scrollboxSize() && "absolute" === i.position,
                       a = (o || n) &&
                           "border-box" === S.css(e, "boxSizing", !1, i),
                       s = n ? Ke(e, u, n, a, i) : 0;
                return a && o &&
                           (s -= Math.ceil(
                                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                                parseFloat(i[u]) - Ke(e, u, "border", !1, i) -
                                .5)),
                       s && (r = te.exec(t)) && "px" !== (r[3] || "px") &&
                           (e.style[u] = t, t = S.css(e, u)),
                       Je(0, t, s)
              }
            }
          }),
      S.cssHooks.marginLeft =
          $e(y.reliableMarginLeft,
             function(e, t) {
               if (t)
                 return (parseFloat(Be(e, "marginLeft")) ||
                         e.getBoundingClientRect().left -
                             We(e, {marginLeft : 0},
                                function() {
                                  return e.getBoundingClientRect().left
                                })) +
                        "px"
             }),
      S.each({margin : "", padding : "", border : "Width"},
             function(i, o) {
               S.cssHooks[i + o] = {
                 expand : function(e) {
                   for (var t = 0, n = {},
                            r = "string" == typeof e ? e.split(" ") : [ e ];
                        t < 4; t++)
                     n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                   return n
                 }
               },
                              "margin" !== i && (S.cssHooks[i + o].set = Je)
             }),
      S.fn.extend({
        css : function(e, t) {
          return $(this, function(e, t, n) {
            var r, i, o = {}, a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
          }, e, t, 1 < arguments.length)
        }
      }),
      ((S.Tween = et).prototype = {
        constructor : et,
        init : function(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || S.easing._default,
          this.options = t, this.start = this.now = this.cur(), this.end = r,
          this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur : function() {
          var e = et.propHooks[this.prop];
          return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run : function(e) {
          var t, n = et.propHooks[this.prop];
          return this.options.duration
                     ? this.pos = t =
                           S.easing[this.easing](e, this.options.duration * e,
                                                 0, 1, this.options.duration)
                     : this.pos = t = e,
                       this.now = (this.end - this.start) * t + this.start,
                       this.options.step &&
                           this.options.step.call(this.elem, this.now, this),
                       n && n.set ? n.set(this)
                                  : et.propHooks._default.set(this),
                       this
        }
      }).init.prototype = et.prototype,
      (et.propHooks = {
        _default : {
          get : function(e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] &&
                                                null == e.elem.style[e.prop]
                       ? e.elem[e.prop]
                   : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t
                                                                     : 0
          },
          set : function(e) {
            S.fx.step[e.prop] ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
                    !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)]
                ? e.elem[e.prop] = e.now
                : S.style(e.elem, e.prop, e.now + e.unit)
          }
        }
      }).scrollTop = et.propHooks.scrollLeft = {
        set : function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      },
      S.easing = {
        linear : function(e) { return e },
        swing : function(e) { return .5 - Math.cos(e * Math.PI) / 2 },
        _default : "swing"
      },
      S.fx = et.prototype.init, S.fx.step = {};
  var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame
               ? C.requestAnimationFrame(st)
               : C.setTimeout(st, S.fx.interval),
           S.fx.tick())
  }
  function ut() {
    return C.setTimeout(function() { tt = void 0 }), tt = Date.now()
  }
  function lt(e, t) {
    var n, r = 0, i = {height : e};
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }
  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0,
                a = i.length;
         o < a; o++)
      if (r = i[o].call(n, t, e))
        return r
  }
  function ft(o, e, t) {
    var n, a,
        r = 0, i = ft.prefilters.length,
        s = S.Deferred().always(function() { delete u.elem }),
        u =
            function() {
          if (a)
            return !1;
          for (var e = tt || ut(),
                   t = Math.max(0, l.startTime + l.duration - e),
                   n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length;
               r < i; r++)
            l.tweens[r].run(n);
          return s.notifyWith(o, [ l, n, t ]),
                 n < 1 && i ? t
                            : (i || s.notifyWith(o, [ l, 1, 0 ]),
                               s.resolveWith(o, [ l ]), !1)
        },
        l = s.promise({
          elem : o,
          props : S.extend({}, e),
          opts :
              S.extend(!0, {specialEasing : {}, easing : S.easing._default}, t),
          originalProperties : e,
          originalOptions : t,
          startTime : tt || ut(),
          duration : t.duration,
          tweens : [],
          createTween : function(e, t) {
            var n = S.Tween(o, l.opts, e, t,
                            l.opts.specialEasing[e] || l.opts.easing);
            return l.tweens.push(n), n
          },
          stop : function(e) {
            var t = 0, n = e ? l.tweens.length : 0;
            if (a)
              return this;
            for (a = !0; t < n; t++)
              l.tweens[t].run(1);
            return e ? (s.notifyWith(o, [ l, 1, 0 ]),
                        s.resolveWith(o, [ l, e ]))
                     : s.rejectWith(o, [ l, e ]),
                   this
          }
        }),
        c = l.props;
    for (!function(e, t) {
           var n, r, i, o, a;
           for (n in e)
             if (i = t[r = X(n)], o = e[n],
                 Array.isArray(o) && (i = o[1], o = e[n] = o[0]),
                 n !== r && (e[r] = o, delete e[n]),
                 (a = S.cssHooks[r]) && "expand" in a)
               for (n in o = a.expand(o), delete e[r], o)
                 n in e || (e[n] = o[n], t[n] = i);
             else
               t[r] = i
         }(c, l.opts.specialEasing);
         r < i; r++)
      if (n = ft.prefilters[r].call(l, o, c, l.opts))
        return m(n.stop) &&
                   (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
               n;
    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l),
           l.progress(l.opts.progress)
               .done(l.opts.done, l.opts.complete)
               .fail(l.opts.fail)
               .always(l.opts.always),
           S.fx.timer(S.extend(u, {elem : o, anim : l, queue : l.opts.queue})),
           l
  }
  S.Animation = S.extend(ft, {
    tweeners : {
      "*" : [ function(e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n
      } ]
    },
    tweener : function(e, t) {
      m(e) ? (t = e, e = [ "*" ]) : e = e.match(P);
      for (var n, r = 0, i = e.length; r < i; r++)
        n = e[r], ft.tweeners[n] = ft.tweeners[n] || [],
        ft.tweeners[n].unshift(t)
    },
    prefilters : [ function(e, t, n) {
      var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this,
                                  d = {}, h = e.style, g = e.nodeType && ae(e),
                                  v = Y.get(e, "fxshow");
      for (r in n.queue ||
               (null == (a = S._queueHooks(e, "fx")).unqueued &&
                    (a.unqueued = 0, s = a.empty.fire,
                    a.empty.fire = function() { a.unqueued || s() }),
                a.unqueued++, p.always(function() {
                  p.always(function() {
                    a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                  })
                })),
           t)
        if (i = t[r], ot.test(i)) {
          if (delete t[r], o = o || "toggle" === i,
              i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r])
              continue;
            g = !0
          }
          d[r] = v && v[r] || S.style(e, r)
        }
      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
        for (r in f && 1 === e.nodeType &&
                 (n.overflow = [ h.overflow, h.overflowX, h.overflowY ],
                 null == (l = v && v.display) && (l = Y.get(e, "display")),
                 "none" === (c = S.css(e, "display")) &&
                      (l ? c = l
                         : (le([ e ], !0), l = e.style.display || l,
                                           c = S.css(e, "display"), le([ e ]))),
                 ("inline" === c || "inline-block" === c && null != l) &&
                      "none" === S.css(e, "float") &&
                      (u || (p.done(function() { h.display = l }),
                             null == l &&
                                 (c = h.display, l = "none" === c ? "" : c)),
                       h.display = "inline-block")),
             n.overflow && (h.overflow = "hidden", p.always(function() {
               h.overflow = n.overflow[0], h.overflowX = n.overflow[1],
               h.overflowY = n.overflow[2]
             })),
             u = !1, d)
          u || (v ? "hidden" in v && (g = v.hidden)
                  : v = Y.access(e, "fxshow", {display : l}),
                o && (v.hidden = !g), g && le([ e ], !0), p.done(function() {
                  for (r in g || le([ e ]), Y.remove(e, "fxshow"), d)
                    S.style(e, r, d[r])
                })),
              u = ct(g ? v[r] : 0, r, p),
              r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
    } ],
    prefilter : function(
        e, t) { t ? ft.prefilters.unshift(e) : ft.prefilters.push(e) }
  }),
  S.speed =
      function(e, t, n) {
    var r = e && "object" == typeof e ? S.extend({}, e) : {
      complete : n || !n && t || m(e) && e,
      duration : e,
      easing : n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0
                    : "number" != typeof r.duration &&
                          (r.duration in S.fx.speeds
                               ? r.duration = S.fx.speeds[r.duration]
                               : r.duration = S.fx.speeds._default),
                      null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                      r.old = r.complete, r.complete = function() {
                        m(r.old) && r.old.call(this),
                            r.queue && S.dequeue(this, r.queue)
                      }, r
  },
  S.fn.extend({
    fadeTo : function(e, t, n, r) {
      return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({opacity : t}, e, n, r)
    },
    animate : function(t, e, n, r) {
      var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function() {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0)
      };
      return a.finish = a,
             i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
    },
    stop : function(i, e, o) {
      var a = function(e) {
        var t = e.stop;
        delete e.stop, t(o)
      };
      return "string" != typeof i && (o = e, e = i, i = void 0),
             e && this.queue(i || "fx", []), this.each(function() {
               var e = !0, t = null != i && i + "queueHooks", n = S.timers,
                   r = Y.get(this);
               if (t)
                 r[t] && r[t].stop && a(r[t]);
               else
                 for (t in r)
                   r[t] && r[t].stop && at.test(t) && a(r[t]);
               for (t = n.length; t--;)
                 n[t].elem !== this || null != i && n[t].queue !== i ||
                     (n[t].anim.stop(o), e = !1, n.splice(t, 1));
               !e && o || S.dequeue(this, i)
             })
    },
    finish : function(a) {
      return !1 !== a && (a = a || "fx"), this.each(function() {
        var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"],
               i = S.timers, o = n ? n.length : 0;
        for (t.finish = !0, S.queue(this, a, []),
            r && r.stop && r.stop.call(this, !0), e = i.length;
             e--;)
          i[e].elem === this && i[e].queue === a &&
              (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++)
          n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }),
  S.each([ "toggle", "show", "hide" ],
         function(e, r) {
           var i = S.fn[r];
           S.fn[r] = function(e, t, n) {
             return null == e || "boolean" == typeof e
                        ? i.apply(this, arguments)
                        : this.animate(lt(r, !0), e, t, n)
           }
         }),
  S.each({
    slideDown : lt("show"),
    slideUp : lt("hide"),
    slideToggle : lt("toggle"),
    fadeIn : {opacity : "show"},
    fadeOut : {opacity : "hide"},
    fadeToggle : {opacity : "toggle"}
  },
         function(e, r) {
           S.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) }
         }),
  S.timers = [],
  S.fx.tick =
      function() {
    var e, t = 0, n = S.timers;
    for (tt = Date.now(); t < n.length; t++)
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || S.fx.stop(), tt = void 0
  },
  S.fx.timer = function(e) { S.timers.push(e), S.fx.start() },
  S.fx.interval = 13, S.fx.start = function() { nt || (nt = !0, st()) },
  S.fx.stop = function() { nt = null },
  S.fx.speeds = {slow : 600, fast : 200, _default : 400},
  S.fn.delay =
      function(r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx",
           this.queue(e, function(e, t) {
             var n = C.setTimeout(e, r);
             t.stop = function() { C.clearTimeout(n) }
           })
  },
  rt = E.createElement("input"),
  it = E.createElement("select").appendChild(E.createElement("option")),
  rt.type = "checkbox", y.checkOn = "" !== rt.value,
  y.optSelected = it.selected, (rt = E.createElement("input")).value = "t",
  rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt, dt = S.expr.attrHandle;
  S.fn.extend({
    attr : function(e,
                    t) { return $(this, S.attr, e, t, 1 < arguments.length) },
    removeAttr : function(
        e) { return this.each(function() { S.removeAttr(this, e) }) }
  }),
      S.extend({
        attr : function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return "undefined" == typeof e.getAttribute
                       ? S.prop(e, t, n)
                       : (1 === o && S.isXMLDoc(e) ||
                              (i = S.attrHooks[t.toLowerCase()] ||
                                   (S.expr.match.bool.test(t) ? pt : void 0)),
                          void 0 !== n ? null === n ? void S.removeAttr(e, t)
                                         : i && "set" in i &&
                                                 void 0 !== (r = i.set(e, n, t))
                                             ? r
                                             : (e.setAttribute(t, n + ""), n)
                          : i && "get" in i && null !== (r = i.get(e, t)) ? r
                          : null == (r = S.find.attr(e, t)) ? void 0
                                                            : r)
        },
        attrHooks : {
          type : {
            set : function(e, t) {
              if (!y.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t
              }
            }
          }
        },
        removeAttr : function(e, t) {
          var n, r = 0, i = t && t.match(P);
          if (i && 1 === e.nodeType)
            while (n = i[r++])
              e.removeAttribute(n)
        }
      }),
      pt = {
        set : function(e, t, n) {
          return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
      },
      S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
          var r, i, o = t.toLowerCase();
          return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null,
                       dt[o] = i),
                 r
        }
      });
  var ht = /^(?:input|select|textarea|button)$/i, gt = /^(?:a|area)$/i;
  function vt(e) { return (e.match(P) || []).join(" ") }
  function yt(e) { return e.getAttribute && e.getAttribute("class") || "" }
  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
  }
  S.fn.extend({
    prop : function(e,
                    t) { return $(this, S.prop, e, t, 1 < arguments.length) },
    removeProp : function(
        e) { return this.each(function() { delete this[S.propFix[e] || e] }) }
  }),
      S.extend({
        prop : function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return 1 === o && S.isXMLDoc(e) ||
                       (t = S.propFix[t] || t, i = S.propHooks[t]),
                   void 0 !== n
                       ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                             ? r
                             : e[t] = n
                   : i && "get" in i && null !== (r = i.get(e, t)) ? r
                                                                   : e[t]
        },
        propHooks : {
          tabIndex : {
            get : function(e) {
              var t = S.find.attr(e, "tabindex");
              return t ? parseInt(t, 10)
                     : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0
                                                                            : -1
            }
          }
        },
        propFix : {"for" : "htmlFor", "class" : "className"}
      }),
      y.optSelected || (S.propHooks.selected = {
        get : function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set : function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
      }),
      S.each(
          [
            "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding",
            "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"
          ],
          function() { S.propFix[this.toLowerCase()] = this }),
      S.fn.extend({
        addClass : function(t) {
          var e, n, r, i, o, a, s, u = 0;
          if (m(t))
            return this.each(function(
                e) { S(this).addClass(t.call(this, e, yt(this))) });
          if ((e = mt(t)).length)
            while (n = this[u++])
              if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = e[a++])
                  r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
              }
          return this
        },
        removeClass : function(t) {
          var e, n, r, i, o, a, s, u = 0;
          if (m(t))
            return this.each(function(
                e) { S(this).removeClass(t.call(this, e, yt(this))) });
          if (!arguments.length)
            return this.attr("class", "");
          if ((e = mt(t)).length)
            while (n = this[u++])
              if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = e[a++])
                  while (-1 < r.indexOf(" " + o + " "))
                    r = r.replace(" " + o + " ", " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
              }
          return this
        },
        toggleClass : function(i, t) {
          var o = typeof i, a = "string" === o || Array.isArray(i);
          return "boolean" == typeof t && a
                     ? t ? this.addClass(i) : this.removeClass(i)
                 : m(i) ? this.each(function(e) {
                     S(this).toggleClass(i.call(this, e, yt(this), t), t)
                   })
                        : this.each(function() {
                            var e, t, n, r;
                            if (a) {
                              t = 0, n = S(this), r = mt(i);
                              while (e = r[t++])
                                n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                            } else
                              void 0 !== i && "boolean" !== o ||
                                  ((e = yt(this)) &&
                                       Y.set(this, "__className__", e),
                                   this.setAttribute &&
                                       this.setAttribute(
                                           "class",
                                           e || !1 === i
                                               ? ""
                                               : Y.get(this, "__className__") ||
                                                     ""))
                          })
        },
        hasClass : function(e) {
          var t, n, r = 0;
          t = " " + e + " ";
          while (n = this[r++])
            if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
              return !0;
          return !1
        }
      });
  var xt = /\r/g;
  S.fn.extend({
    val : function(n) {
      var r, e, i, t = this[0];
      return arguments.length ? (i = m(n), this.each(function(e) {
        var t;
        1 === this.nodeType &&
            (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = ""
             : "number" == typeof t
                 ? t += ""
                 : Array.isArray(t) &&
                       (t = S.map(
                            t, function(e) { return null == e ? "" : e + "" })),
             (r = S.valHooks[this.type] ||
                  S.valHooks[this.nodeName.toLowerCase()]) &&
                     "set" in r && void 0 !== r.set(this, t, "value") ||
                 (this.value = t))
      }))
             : t              ? (r = S.valHooks[t.type] ||
                        S.valHooks[t.nodeName.toLowerCase()]) &&
                           "get" in r && void 0 !== (e = r.get(t, "value"))
                                    ? e
                                : "string" == typeof (e = t.value) ? e.replace(xt, "")
                                : null == e                        ? ""
                                                                   : e
                              : void 0
    }
  }),
      S.extend({
        valHooks : {
          option : {
            get : function(e) {
              var t = S.find.attr(e, "value");
              return null != t ? t : vt(S.text(e))
            }
          },
          select : {
            get : function(e) {
              var t, n, r, i = e.options, o = e.selectedIndex,
                           a = "select-one" === e.type, s = a ? null : [],
                           u = a ? o + 1 : i.length;
              for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                if (((n = i[r]).selected || r === o) && !n.disabled &&
                    (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                  if (t = S(n).val(), a)
                    return t;
                  s.push(t)
                }
              return s
            },
            set : function(e, t) {
              var n, r, i = e.options, o = S.makeArray(t), a = i.length;
              while (a--)
                ((r = i[a]).selected =
                     -1 < S.inArray(S.valHooks.option.get(r), o)) &&
                    (n = !0);
              return n || (e.selectedIndex = -1), o
            }
          }
        }
      }),
      S.each([ "radio", "checkbox" ], function() {
        S.valHooks[this] = {
          set : function(e, t) {
            if (Array.isArray(t))
              return e.checked = -1 < S.inArray(S(e).val(), t)
          }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
        })
      }), y.focusin = "onfocusin" in C;
  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function(e) { e.stopPropagation() };
  S.extend(S.event, {
    trigger : function(e, t, n, r) {
      var i, o, a, s, u, l, c, f,
          p = [ n || E ], d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || E,
          3 !== n.nodeType && 8 !== n.nodeType &&
              !bt.test(d + S.event.triggered) &&
              (-1 < d.indexOf(".") &&
                   (d = (h = d.split(".")).shift(), h.sort()),
               u = d.indexOf(":") < 0 && "on" + d,
               (e = e[S.expando] ? e
                                 : new S.Event(d, "object" == typeof e && e))
                   .isTrigger = r ? 2 : 3,
               e.namespace = h.join("."),
               e.rnamespace =
                   e.namespace ? new RegExp("(^|\\.)" +
                                            h.join("\\.(?:.*\\.|)") + "(\\.|$)")
                               : null,
               e.result = void 0, e.target || (e.target = n),
               t = null == t ? [ e ] : S.makeArray(t, [ e ]),
               c = S.event.special[d] || {},
               r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o;
               o = o.parentNode)
            p.push(o), a = o;
          a === (n.ownerDocument || E) &&
              p.push(a.defaultView || a.parentWindow || C)
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          f = o, e.type = 1 < i ? s : c.bindType || d,
          (l = (Y.get(o, "events") || Object.create(null))[e.type] &&
               Y.get(o, "handle")) &&
              l.apply(o, t),
          (l = u && o[u]) && l.apply && V(o) &&
              (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d,
               r || e.isDefaultPrevented() ||
                   c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) ||
                   u && m(n[d]) && !x(n) &&
                       ((a = n[u]) && (n[u] = null), S.event.triggered = d,
                        e.isPropagationStopped() && f.addEventListener(d, wt),
                        n[d](),
                        e.isPropagationStopped() &&
                            f.removeEventListener(d, wt),
                        S.event.triggered = void 0, a && (n[u] = a)),
               e.result
      }
    },
    simulate : function(e, t, n) {
      var r = S.extend(new S.Event, n, {type : e, isSimulated : !0});
      S.event.trigger(r, null, t)
    }
  }),
      S.fn.extend({
        trigger : function(
            e,
            t) { return this.each(function() { S.event.trigger(e, t, this) }) },
        triggerHandler : function(e, t) {
          var n = this[0];
          if (n)
            return S.event.trigger(e, t, n, !0)
        }
      }),
      y.focusin || S.each({focus : "focusin", blur : "focusout"}, function(n,
                                                                           r) {
        var i = function(e) { S.event.simulate(r, e.target, S.event.fix(e)) };
        S.event.special[r] = {
          setup : function() {
            var e = this.ownerDocument || this.document || this,
                t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
          },
          teardown : function() {
            var e = this.ownerDocument || this.document || this,
                t = Y.access(e, r) - 1;
            t ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r))
          }
        }
      });
  var Tt = C.location, Ct = {guid : Date.now()}, Et = /\?/;
  S.parseXML = function(e) {
    var t;
    if (!e || "string" != typeof e)
      return null;
    try {
      t = (new C.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length ||
               S.error("Invalid XML: " + e),
           t
  };
  var St = /\[\]$/, kt = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function(e, t) {
        r || St.test(n)
            ? i(n, t)
            : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
                 t, r, i)
      });
    else if (r || "object" !== w(e))
      i(n, e);
    else
      for (t in e)
        Dt(n + "[" + t + "]", e[t], r, i)
  }
  S.param = function(e, t) {
    var n, r = [], i = function(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
    };
    if (null == e)
      return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
      S.each(e, function() { i(this.name, this.value) });
    else
      for (n in e)
        Dt(n, e[n], t, i);
    return r.join("&")
  }, S.fn.extend({
    serialize : function() { return S.param(this.serializeArray()) },
    serializeArray : function() {
      return this
          .map(function() {
            var e = S.prop(this, "elements");
            return e ? S.makeArray(e) : this
          })
          .filter(function() {
            var e = this.type;
            return this.name && !S(this).is(":disabled") &&
                   Nt.test(this.nodeName) && !At.test(e) &&
                   (this.checked || !pe.test(e))
          })
          .map(function(e, t) {
            var n = S(this).val();
            return null == n ? null
                   : Array.isArray(n)
                       ? S.map(n,
                               function(e) {
                                 return {
                                   name: t.name, value: e.replace(kt, "\r\n")
                                 }
                               })
                       : {name : t.name, value : n.replace(kt, "\r\n")}
          })
          .get()
    }
  });
  var jt = /%20/g, qt = /#.*$/, Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ot = /^(?:GET|HEAD)$/, Pt = /^\/\//,
      Rt = {}, Mt = {}, It = "*/".concat("*"), Wt = E.createElement("a");
  function Ft(o) {
    return function(e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, r = 0, i = e.toLowerCase().match(P) || [];
      if (m(t))
        while (n = i[r++])
          "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t))
                       : (o[n] = o[n] || []).push(t)
    }
  }
  function Bt(t, i, o, a) {
    var s = {}, u = t === Mt;
    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function(e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n]
                   ? u ? !(r = n) : void 0
                   : (i.dataTypes.unshift(n), l(n), !1)
      }), r
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*")
  }
  function $t(e, t) {
    var n, r, i = S.ajaxSettings.flatOptions || {};
    for (n in t)
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e
  }
  Wt.href = Tt.href, S.extend({
    active : 0,
    lastModified : {},
    etag : {},
    ajaxSettings : {
      url : Tt.href,
      type : "GET",
      isLocal :
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Tt.protocol),
      global : !0,
      processData : !0,
      async : !0,
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      accepts : {
        "*" : It,
        text : "text/plain",
        html : "text/html",
        xml : "application/xml, text/xml",
        json : "application/json, text/javascript"
      },
      contents : {xml : /\bxml\b/, html : /\bhtml/, json : /\bjson\b/},
      responseFields :
          {xml : "responseXML", text : "responseText", json : "responseJSON"},
      converters : {
        "* text" : String,
        "text html" : !0,
        "text json" : JSON.parse,
        "text xml" : S.parseXML
      },
      flatOptions : {url : !0, context : !0}
    },
    ajaxSetup : function(
        e,
        t) { return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e) },
    ajaxPrefilter : Ft(Rt),
    ajaxTransport : Ft(Mt),
    ajax : function(e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c, f, p, n, d, r, h, g, i, o,
          v = S.ajaxSetup({}, t), y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(), b = S.Callbacks("once memory"),
          w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
            readyState : 0,
            getResponseHeader : function(e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while (t = Ht.exec(p))
                    n[t[1].toLowerCase() + " "] =
                        (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                }
                t = n[e.toLowerCase() + " "]
              }
              return null == t ? null : t.join(", ")
            },
            getAllResponseHeaders : function() { return h ? p : null },
            setRequestHeader : function(e, t) {
              return null == h &&
                         (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                          a[e] = t),
                     this
            },
            overrideMimeType : function(
                e) { return null == h && (v.mimeType = e), this },
            statusCode : function(e) {
              var t;
              if (e)
                if (h)
                  T.always(e[T.status]);
                else
                  for (t in e)
                    w[t] = [ w[t], e[t] ];
              return this
            },
            abort : function(e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this
            }
          };
      if (x.promise(T),
          v.url =
              ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
          v.type = t.method || t.type || v.method || v.type,
          v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [ "" ],
          null == v.crossDomain) {
        r = E.createElement("a");
        try {
          r.href = v.url, r.href = r.href,
          v.crossDomain =
              Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
        } catch (e) {
          v.crossDomain = !0
        }
      }
      if (v.data && v.processData && "string" != typeof v.data &&
              (v.data = S.param(v.data, v.traditional)),
          Bt(Rt, v, t, T), h)
        return T;
      for (i in (g = S.event && v.global) && 0 == S.active++ &&
               S.event.trigger("ajaxStart"),
           v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type),
           f = v.url.replace(qt, ""),
           v.hasContent
               ? v.data && v.processData &&
                     0 === (v.contentType ||
                            "").indexOf("application/x-www-form-urlencoded") &&
                     (v.data = v.data.replace(jt, "+"))
               : (o = v.url.slice(f.length),
                 v.data && (v.processData || "string" == typeof v.data) &&
                      (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data),
                 !1 === v.cache &&
                      (f = f.replace(Lt, "$1"),
                      o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o),
                 v.url = f + o),
           v.ifModified &&
               (S.lastModified[f] &&
                    T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
                S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
           (v.data && v.hasContent && !1 !== v.contentType || t.contentType) &&
               T.setRequestHeader("Content-Type", v.contentType),
           T.setRequestHeader(
               "Accept",
               v.dataTypes[0] && v.accepts[v.dataTypes[0]]
                   ? v.accepts[v.dataTypes[0]] +
                         ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
                   : v.accepts["*"]),
           v.headers)
        T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
        return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error),
          c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [ T, v ]), h)
          return T;
        v.async && 0 < v.timeout &&
            (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout));
        try {
          h = !1, c.send(a, l)
        } catch (e) {
          if (h)
            throw e;
          l(-1, e)
        }
      } else
        l(-1, "No Transport");
      function l(e, t, n, r) {
        var i, o, a, s, u, l = t;
        h ||
            (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "",
             T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e,
             n && (s =
                       function(e, t, n) {
                         var r, i, o, a, s = e.contents, u = e.dataTypes;
                         while ("*" === u[0])
                           u.shift(),
                               void 0 === r &&
                                   (r = e.mimeType ||
                                        t.getResponseHeader("Content-Type"));
                         if (r)
                           for (i in s)
                             if (s[i] && s[i].test(r)) {
                               u.unshift(i);
                               break
                             }
                         if (u[0] in n)
                           o = u[0];
                         else {
                           for (i in n) {
                             if (!u[0] || e.converters[i + " " + u[0]]) {
                               o = i;
                               break
                             }
                             a || (a = i)
                           }
                           o = o || a
                         }
                         if (o)
                           return o !== u[0] && u.unshift(o), n[o]
                       }(v, T, n)),
             !i && -1 < S.inArray("script", v.dataTypes) &&
                 (v.converters["text script"] = function() {}),
             s =
                 function(e, t, n, r) {
                   var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                   if (c[1])
                     for (a in e.converters)
                       l[a.toLowerCase()] = e.converters[a];
                   o = c.shift();
                   while (o)
                     if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                         !u && r && e.dataFilter &&
                             (t = e.dataFilter(t, e.dataType)),
                         u = o, o = c.shift())
                       if ("*" === o)
                         o = u;
                       else if ("*" !== u && u !== o) {
                         if (!(a = l[u + " " + o] || l["* " + o]))
                           for (i in l)
                             if ((s = i.split(" "))[1] === o &&
                                 (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                               !0 === a
                                   ? a = l[i]
                                   : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                               break
                             }
                         if (!0 !== a)
                           if (a && e["throws"])
                             t = a(t);
                           else
                             try {
                               t = a(t)
                             } catch (e) {
                               return {
                                 state: "parsererror",
                                     error: a ? e
                                              : "No conversion from " + u +
                                                    " to " + o
                               }
                             }
                       }
                   return { state: "success", data: t }
                 }(v, s, T, i),
             i ? (v.ifModified &&
                      ((u = T.getResponseHeader("Last-Modified")) &&
                           (S.lastModified[f] = u),
                       (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                  204 === e || "HEAD" === v.type ? l = "nocontent"
                  : 304 === e                    ? l = "notmodified"
                              : (l = s.state, o = s.data, i = !(a = s.error)))
               : (a = l, !e && l || (l = "error", e < 0 && (e = 0))),
             T.status = e, T.statusText = (t || l) + "",
             i ? x.resolveWith(y, [ o, l, T ]) : x.rejectWith(y, [ T, l, a ]),
             T.statusCode(w), w = void 0,
             g && m.trigger(i ? "ajaxSuccess" : "ajaxError",
                            [ T, v, i ? o : a ]),
             b.fireWith(y, [ T, l ]),
             g && (m.trigger("ajaxComplete", [ T, v ]),
                   --S.active || S.event.trigger("ajaxStop")))
      }
      return T
    },
    getJSON : function(e, t, n) { return S.get(e, t, n, "json") },
    getScript : function(e, t) { return S.get(e, void 0, t, "script") }
  }),
  S.each(
      [ "get", "post" ],
      function(e, i) {
        S[i] = function(e, t, n, r) {
          return m(t) && (r = r || n, n = t, t = void 0),
                 S.ajax(S.extend(
                     {url : e, type : i, dataType : r, data : t, success : n},
                     S.isPlainObject(e) && e))
        }
      }),
  S.ajaxPrefilter(function(e) {
    var t;
    for (t in e.headers)
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
  }),
  S._evalUrl =
      function(e, t, n) {
    return S.ajax({
      url : e,
      type : "GET",
      dataType : "script",
      cache : !0,
      async : !1,
      global : !1,
      converters : {"text script" : function() {}},
      dataFilter : function(e) { S.globalEval(e, t, n) }
    })
  },
  S.fn.extend({
    wrapAll : function(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])),
                         t = S(e, this[0].ownerDocument).eq(0).clone(!0),
                         this[0].parentNode && t.insertBefore(this[0]),
                         t.map(function() {
                            var e = this;
                            while (e.firstElementChild)
                              e = e.firstElementChild;
                            return e
                          }).append(this)),
             this
    },
    wrapInner : function(n) {
      return m(n)
                 ? this.each(function(e) { S(this).wrapInner(n.call(this, e)) })
                 : this.each(function() {
                     var e = S(this), t = e.contents();
                     t.length ? t.wrapAll(n) : e.append(n)
                   })
    },
    wrap : function(t) {
      var n = m(t);
      return this.each(function(e) { S(this).wrapAll(n ? t.call(this, e) : t) })
    },
    unwrap : function(e) {
      return this.parent(e).not("body").each(
                 function() { S(this).replaceWith(this.childNodes) }),
             this
    }
  }),
  S.expr.pseudos.hidden = function(e) { return !S.expr.pseudos.visible(e) },
  S.expr.pseudos.visible = function(e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, S.ajaxSettings.xhr = function() {
    try {
      return new C.XMLHttpRequest
    } catch (e) {
    }
  };
  var _t = {0 : 200, 1223 : 204}, zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt,
  S.ajaxTransport(function(i) {
    var o, a;
    if (y.cors || zt && !i.crossDomain)
      return {
        send: function(e, t) {
          var n, r = i.xhr();
          if (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            for (n in i.xhrFields)
              r[n] = i.xhrFields[n];
          for (n in i.mimeType && r.overrideMimeType &&
                   r.overrideMimeType(i.mimeType),
               i.crossDomain || e["X-Requested-With"] ||
                   (e["X-Requested-With"] = "XMLHttpRequest"),
               e)
            r.setRequestHeader(n, e[n]);
          o =
              function(e) {
            return function() {
              o &&
                  (o = a = r.onload = r.onerror = r.onabort = r.ontimeout =
                       r.onreadystatechange = null,
                   "abort" === e   ? r.abort()
                   : "error" === e ? "number" != typeof r.status
                                         ? t(0, "error")
                                         : t(r.status, r.statusText)
                                   : t(_t[r.status] || r.status, r.statusText,
                                       "text" !== (r.responseType || "text") ||
                                               "string" != typeof r.responseText
                                           ? {binary : r.response}
                                           : {text : r.responseText},
                                       r.getAllResponseHeaders()))
            }
          },
          r.onload = o(), a = r.onerror = r.ontimeout = o("error"),
          void 0 !== r.onabort
              ? r.onabort = a
              : r.onreadystatechange =
                    function() {
                  4 === r.readyState && C.setTimeout(function() { o && a() })
                },
          o = o("abort");
          try {
            r.send(i.hasContent && i.data || null)
          } catch (e) {
            if (o)
              throw e
          }
        }, abort: function() { o && o() }
      }
  }),
  S.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }),
  S.ajaxSetup({
    accepts : {
      script :
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents : {script : /\b(?:java|ecma)script\b/},
    converters : {"text script" : function(e) { return S.globalEval(e), e }}
  }),
  S.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), S.ajaxTransport("script", function(n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs)
      return {
        send: function(e, t) {
          r = S("<script>")
                  .attr(n.scriptAttrs || {})
                  .prop({charset : n.scriptCharset, src : n.url})
                  .on("load error",
                      i =
                          function(e) {
                            r.remove(),
                                i = null,
                                e && t("error" === e.type ? 404 : 200, e.type)
                          }),
          E.head.appendChild(r[0])
        }, abort: function() { i && i() }
      }
  });
  var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp : "callback",
    jsonpCallback : function() {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e
    }
  }),
      S.ajaxPrefilter(
          "json jsonp",
          function(e, t, n) {
            var r, i, o,
                a = !1 !== e.jsonp &&
                    (Vt.test(e.url)
                         ? "url"
                         : "string" == typeof e.data &&
                               0 ===
                                   (e.contentType || "")
                                       .indexOf(
                                           "application/x-www-form-urlencoded") &&
                               Vt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
              return r = e.jsonpCallback = m(e.jsonpCallback)
                                               ? e.jsonpCallback()
                                               : e.jsonpCallback,
                     a ? e[a] = e[a].replace(Vt, "$1" + r)
                       : !1 !== e.jsonp &&
                             (e.url +=
                              (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                     e.converters["script json"] =
                         function() {
                       return o || S.error(r + " was not called"), o[0]
                     },
                     e.dataTypes[0] = "json", i = C[r],
                     C[r] = function() { o = arguments }, n.always(function() {
                       void 0 === i
                           ? S(C).removeProp(r)
                           : C[r] = i,
                             e[r] && (e.jsonpCallback = t.jsonpCallback,
                                      Xt.push(r)),
                             o && m(i) && i(o[0]), o = i = void 0
                     }),
                     "script"
          }),
      y.createHTMLDocument =
          ((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
               "<form></form><form></form>",
           2 === Ut.childNodes.length),
      S.parseHTML =
          function(e, t, n) {
        return "string" != typeof e
                   ? []
                   : ("boolean" == typeof t && (n = t, t = !1),
                      t ||
                          (y.createHTMLDocument
                               ? ((r = (t = E.implementation.createHTMLDocument(
                                            ""))
                                           .createElement("base"))
                                      .href = E.location.href,
                                  t.head.appendChild(r))
                               : t = E),
                      o = !n && [],
                      (i = N.exec(e)) ? [ t.createElement(i[1]) ]
                                      : (i = xe([ e ], t, o),
                                         o && o.length && S(o).remove(),
                                         S.merge([], i.childNodes)));
        var r, i, o
      },
      S.fn.load =
          function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)),
               m(t) ? (n = t, t = void 0)
                    : t && "object" == typeof t && (i = "POST"),
               0 < a.length &&
                   S.ajax({
                      url : e,
                      type : i || "GET",
                      dataType : "html",
                      data : t
                    })
                       .done(function(e) {
                         o = arguments,
                         a.html(r ? S("<div>").append(S.parseHTML(e)).find(r)
                                  : e)
                       })
                       .always(n &&
                               function(e, t) {
                                 a.each(function() {
                                   n.apply(this, o || [ e.responseText, t, e ])
                                 })
                               }),
               this
      },
      S.expr.pseudos.animated =
          function(t) {
        return S.grep(S.timers, function(e) { return t === e.elem }).length
      },
      S.offset = {
        setOffset : function(e, t, n) {
          var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
          "static" === l && (e.style.position = "relative"),
              s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"),
              ("absolute" === l || "fixed" === l) &&
                      -1 < (o + u).indexOf("auto")
                  ? (a = (r = c.position()).top, i = r.left)
                  : (a = parseFloat(o) || 0, i = parseFloat(u) || 0),
              m(t) && (t = t.call(e, n, S.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + i),
              "using" in t
                  ? t.using.call(e, f)
                  : ("number" == typeof f.top && (f.top += "px"),
                     "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
      },
      S.fn.extend({
        offset : function(t) {
          if (arguments.length)
            return void 0 === t ? this
                                : this.each(function(
                                      e) { S.offset.setOffset(this, t, e) });
          var e, n, r = this[0];
          return r ? r.getClientRects().length
                         ? (e = r.getBoundingClientRect(),
                            n = r.ownerDocument.defaultView, {
                              top : e.top + n.pageYOffset,
                              left : e.left + n.pageXOffset
                            })
                         : {top : 0, left : 0}
                   : void 0
        },
        position : function() {
          if (this[0]) {
            var e, t, n, r = this[0], i = {top : 0, left : 0};
            if ("fixed" === S.css(r, "position"))
              t = r.getBoundingClientRect();
            else {
              t = this.offset(), n = r.ownerDocument,
              e = r.offsetParent || n.documentElement;
              while (e && (e === n.body || e === n.documentElement) &&
                     "static" === S.css(e, "position"))
                e = e.parentNode;
              e && e !== r && 1 === e.nodeType &&
                  ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                   i.left += S.css(e, "borderLeftWidth", !0))
            }
            return {
              top: t.top - i.top - S.css(r, "marginTop", !0),
                  left: t.left - i.left - S.css(r, "marginLeft", !0)
            }
          }
        },
        offsetParent : function() {
          return this.map(function() {
            var e = this.offsetParent;
            while (e && "static" === S.css(e, "position"))
              e = e.offsetParent;
            return e || re
          })
        }
      }),
      S.each({scrollLeft : "pageXOffset", scrollTop : "pageYOffset"},
             function(t, i) {
               var o = "pageYOffset" === i;
               S.fn[t] = function(e) {
                 return $(this, function(e, t, n) {
                   var r;
                   if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                       void 0 === n)
                     return r ? r[i] : e[t];
                   r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                     : e[t] = n
                 }, t, e, arguments.length)
               }
             }),
      S.each([ "top", "left" ],
             function(e, n) {
               S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
                 if (t)
                   return t = Be(e, n),
                          Me.test(t) ? S(e).position()[n] + "px" : t
               })
             }),
      S.each(
          {Height : "height", Width : "width"},
          function(a, s) {
            S.each(
                {padding : "inner" + a, content : s, "" : "outer" + a},
                function(r, o) {
                  S.fn[o] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return $(this, function(e, t, n) {
                      var r;
                      return x(e) ? 0 === o.indexOf("outer")
                                        ? e["inner" + a]
                                        : e.document
                                              .documentElement["client" + a]
                             : 9 === e.nodeType
                                 ? (r = e.documentElement,
                                    Math.max(e.body["scroll" + a],
                                             r["scroll" + a],
                                             e.body["offset" + a],
                                             r["offset" + a], r["client" + a]))
                             : void 0 === n ? S.css(e, t, i)
                                            : S.style(e, t, n, i)
                    }, s, n ? e : void 0, n)
                  }
                })
          }),
      S.each(
          [
            "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess",
            "ajaxSend"
          ],
          function(e, t) { S.fn[t] = function(e) { return this.on(t, e) } }),
      S.fn.extend({
        bind : function(e, t, n) { return this.on(e, null, t, n) },
        unbind : function(e, t) { return this.off(e, null, t) },
        delegate : function(e, t, n, r) { return this.on(t, e, n, r) },
        undelegate : function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**")
                                        : this.off(t, e || "**", n)
        },
        hover : function(e, t) { return this.mouseenter(e).mouseleave(t || e) }
      }),
      S.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu"
              .split(" "),
          function(e, n) {
            S.fn[n] = function(e, t) {
              return 0 < arguments.length ? this.on(n, null, e, t)
                                          : this.trigger(n)
            }
          });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy =
      function(e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e))
      return r = s.call(arguments, 2),
             (i = function() {
               return e.apply(t || this, r.concat(s.call(arguments)))
             }).guid = e.guid = e.guid || S.guid++, i
  },
  S.holdReady = function(e) { e ? S.readyWait++ : S.ready(!0) },
  S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A,
  S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w,
  S.now = Date.now,
  S.isNumeric =
      function(e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  },
  S.trim = function(e) { return null == e ? "" : (e + "").replace(Gt, "") },
  "function" == typeof define && define.amd &&
      define("jquery", [], function() { return S });
  var Yt = C.jQuery, Qt = C.$;
  return S.noConflict = function(e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});

/*
 * toastr
 */

!function(e) {
  e([ "jquery" ], function(e) {
    return function() {
      function t(e, t, n) {
        return g({
          type : O.error,
          iconClass : m().iconClasses.error,
          message : e,
          optionsOverride : n,
          title : t
        })
      }
      function n(t, n) {
        return t || (t = m()), v = e("#" + t.containerId),
                               v.length ? v : (n && (v = d(t)), v)
      }
      function o(e, t, n) {
        return g({
          type : O.info,
          iconClass : m().iconClasses.info,
          message : e,
          optionsOverride : n,
          title : t
        })
      }
      function s(e) { C = e }
      function i(e, t, n) {
        return g({
          type : O.success,
          iconClass : m().iconClasses.success,
          message : e,
          optionsOverride : n,
          title : t
        })
      }
      function a(e, t, n) {
        return g({
          type : O.warning,
          iconClass : m().iconClasses.warning,
          message : e,
          optionsOverride : n,
          title : t
        })
      }
      function r(e, t) {
        var o = m();
        v || n(o), u(e, o, t) || l(o)
      }
      function c(t) {
        var o = m();
        return v || n(o), t && 0 === e(":focus", t).length
                              ? void h(t)
                              : void (v.children().length && v.remove())
      }
      function l(t) {
        for (var n = v.children(), o = n.length - 1; o >= 0; o--)
          u(e(n[o]), t)
      }
      function u(t, n, o) {
        var s = !(!o || !o.force) && o.force;
        return !(!t || !s && 0 !== e(":focus", t).length) &&
               (t[n.hideMethod]({
                  duration : n.hideDuration,
                  easing : n.hideEasing,
                  complete : function() { h(t) }
                }),
                !0)
      }
      function d(t) {
        return v = e("<div/>")
                       .attr("id", t.containerId)
                       .addClass(t.positionClass),
               v.appendTo(e(t.target)), v
      }
      function p() {
        return {
          tapToDismiss: !0, toastClass: "toast", containerId: "toast-container",
              debug: !1, showMethod: "fadeIn", showDuration: 300,
              showEasing: "swing", onShown: void 0, hideMethod: "fadeOut",
              hideDuration: 1e3, hideEasing: "swing", onHidden: void 0,
              closeMethod: !1, closeDuration: !1, closeEasing: !1,
              closeOnHover: !0, extendedTimeOut: 1e3, iconClasses: {
                error: "toast-error",
                info: "toast-info",
                success: "toast-success",
                warning: "toast-warning"
              },
              iconClass: "toast-info", positionClass: "toast-top-right",
              timeOut: 5e3, titleClass: "toast-title",
              messageClass: "toast-message", escapeHtml: !1, target: "body",
              closeHtml: '<button type="button">&times;</button>',
              closeClass: "toast-close-button", newestOnTop: !0,
              preventDuplicates: !1, progressBar: !1,
              progressClass: "toast-progress", rtl: !1
        }
      }
      function f(e) { C && C(e) }
      function g(t) {
        function o(e) {
          return null == e && (e = ""), e.replace(/&/g, "&amp;")
                                            .replace(/"/g, "&quot;")
                                            .replace(/'/g, "&#39;")
                                            .replace(/</g, "&lt;")
                                            .replace(/>/g, "&gt;")
        }
        function s() { c(), u(), d(), p(), g(), C(), l(), i() }
        function i() {
          var e = "";
          switch (t.iconClass) {
          case "toast-success":
          case "toast-info":
            e = "polite";
            break;
          default:
            e = "assertive"
          }
          I.attr("aria-live", e)
        }
        function a() {
          E.closeOnHover && I.hover(H, D),
              !E.onclick && E.tapToDismiss && I.click(b),
              E.closeButton && j && j.click(function(e) {
                e.stopPropagation
                    ? e.stopPropagation()
                    : void 0 !== e.cancelBubble && e.cancelBubble !== !0 &&
                          (e.cancelBubble = !0),
                    E.onCloseClick && E.onCloseClick(e), b(!0)
              }),
              E.onclick && I.click(function(e) { E.onclick(e), b() })
        }
        function r() {
          I.hide(), I[E.showMethod]({
            duration : E.showDuration,
            easing : E.showEasing,
            complete : E.onShown
          }),
              E.timeOut > 0 &&
                  (k = setTimeout(b, E.timeOut),
                   F.maxHideTime = parseFloat(E.timeOut),
                   F.hideEta = (new Date).getTime() + F.maxHideTime,
                   E.progressBar && (F.intervalId = setInterval(x, 10)))
        }
        function c() { t.iconClass && I.addClass(E.toastClass).addClass(y) }
        function l() { E.newestOnTop ? v.prepend(I) : v.append(I) }
        function u() {
          if (t.title) {
            var e = t.title;
            E.escapeHtml && (e = o(t.title)),
                M.append(e).addClass(E.titleClass), I.append(M)
          }
        }
        function d() {
          if (t.message) {
            var e = t.message;
            E.escapeHtml && (e = o(t.message)),
                B.append(e).addClass(E.messageClass), I.append(B)
          }
        }
        function p() {
          E.closeButton &&
              (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j))
        }
        function g() {
          E.progressBar && (q.addClass(E.progressClass), I.prepend(q))
        }
        function C() { E.rtl && I.addClass("rtl") }
        function O(e, t) {
          if (e.preventDuplicates) {
            if (t.message === w)
              return !0;
            w = t.message
          }
          return !1
        }
        function b(t) {
          var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
              o = t && E.closeDuration !== !1 ? E.closeDuration
                                              : E.hideDuration,
              s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
          if (!e(":focus", I).length || t)
            return clearTimeout(F.intervalId), I[n]({
                     duration : o,
                     easing : s,
                     complete : function() {
                       h(I), clearTimeout(k),
                           E.onHidden && "hidden" !== P.state && E.onHidden(),
                           P.state = "hidden", P.endTime = new Date, f(P)
                     }
                   })
        }
        function D() {
          (E.timeOut > 0 || E.extendedTimeOut > 0) &&
              (k = setTimeout(b, E.extendedTimeOut),
               F.maxHideTime = parseFloat(E.extendedTimeOut),
               F.hideEta = (new Date).getTime() + F.maxHideTime)
        }
        function H() {
          clearTimeout(k),
              F.hideEta = 0,
              I.stop(!0, !0)[E.showMethod](
                  {duration : E.showDuration, easing : E.showEasing})
        }
        function x() {
          var e = (F.hideEta - (new Date).getTime()) / F.maxHideTime * 100;
          q.width(e + "%")
        }
        var E = m(), y = t.iconClass || E.iconClass;
        if ("undefined" != typeof t.optionsOverride &&
                (E = e.extend(E, t.optionsOverride),
                 y = t.optionsOverride.iconClass || y),
            !O(E, t)) {
          T++, v = n(E, !0);
          var k = null, I = e("<div/>"), M = e("<div/>"), B = e("<div/>"),
              q = e("<div/>"), j = e(E.closeHtml),
              F = {intervalId : null, hideEta : null, maxHideTime : null}, P = {
                toastId : T,
                state : "visible",
                startTime : new Date,
                options : E,
                map : t
              };
          return s(), r(), a(), f(P), E.debug && console && console.log(P), I
        }
      }
      function m() { return e.extend({}, p(), b.options) }
      function h(e) {
        v || (v = n()), e.is(":visible") || (e.remove(), e = null,
                                             0 === v.children().length &&
                                                 (v.remove(), w = void 0))
      }
      var v, C, w, T = 0, O = {
        error : "error",
        info : "info",
        success : "success",
        warning : "warning"
      },
                   b = {
                     clear : r,
                     remove : c,
                     error : t,
                     getContainer : n,
                     info : o,
                     options : {},
                     subscribe : s,
                     success : i,
                     version : "2.1.4",
                     warning : a
                   };
      return b
    }()
  })
}("function" == typeof define && define.amd ? define : function(e, t) {
  "undefined" != typeof module &&module.exports
      ? module.exports = t(require("jquery"))
      : window.toastr = t(window.jQuery)
});
//# sourceMappingURL=vendor/toastr.js.map

/*
 * Keycloak
 */

!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
      ? module.exports = t()
  : "function" == typeof define && define.amd
      ? define("keycloak", t)
      : (e = "undefined" != typeof globalThis ? globalThis : e || self)
            .Keycloak = t()
}(this, (function() {
    "use strict";
    var commonjsGlobal = "undefined" != typeof globalThis ? globalThis
                         : "undefined" != typeof window   ? window
                         : "undefined" != typeof global   ? global
                         : "undefined" != typeof self     ? self
                                                          : {};
    function commonjsRequire(e) {
      throw new Error(
          'Could not dynamically require "' + e +
          '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var es6Promise_min = {exports : {}};
    !function(e, t) {
      e.exports = function() {
        function e(e) {
          var t = typeof e;
          return null !== e && ("object" === t || "function" === t)
        }
        function t(e) { return "function" == typeof e }
        function r(e) { F = e }
        function n(e) { K = e }
        function o() {
          return function() { return process.nextTick(u) }
        }
        function i() {
          return void 0 !== B ? function() { B(u) } : c()
        }
        function s() {
          var e = 0, t = new q(u), r = document.createTextNode("");
          return t.observe(r, {characterData : !0}),
                 function() { r.data = e = ++e % 2 }
        }
        function a() {
          var e = new MessageChannel;
          return e.port1.onmessage = u,
                 function() { return e.port2.postMessage(0) }
        }
        function c() {
          var e = setTimeout;
          return function() { return e(u, 1) }
        }
        function u() {
          for (var e = 0; e < j; e += 2)
            (0, V[e])(V[e + 1]), V[e] = void 0, V[e + 1] = void 0;
          j = 0
        }
        function l() {
          try {
            var e = Function("return this")().require("vertx");
            return B = e.runOnLoop || e.runOnContext, i()
          } catch (e) {
            return c()
          }
        }
        function h(e, t) {
          var r = this, n = new this.constructor(f);
          void 0 === n[G] && U(n);
          var o = r._state;
          if (o) {
            var i = arguments[o - 1];
            K((function() { return E(o, n, i, r._result) }))
          } else
            A(r, n, e, t);
          return n
        }
        function d(e) {
          var t = this;
          if (e && "object" == typeof e && e.constructor === t)
            return e;
          var r = new t(f);
          return _(r, e), r
        }
        function f() {}
        function p() {
          return new TypeError("You cannot resolve a promise with itself")
        }
        function m() {
          return new TypeError(
              "A promises callback cannot return that same promise.")
        }
        function v(e, t, r, n) {
          try {
            e.call(t, r, n)
          } catch (e) {
            return e
          }
        }
        function k(e, t, r) {
          K((function(e) {
              var n = !1,
                  o = v(r, t,
                        (function(
                            r) { n || (n = !0, t !== r ? _(e, r) : S(e, r)) }),
                        (function(t) { n || (n = !0, b(e, t)) }),
                        "Settle: " + (e._label || " unknown promise"));
              !n && o && (n = !0, b(e, o))
            }),
            e)
        }
        function g(e, t) {
          t._state === Q   ? S(e, t._result)
          : t._state === Z ? b(e, t._result)
                           : A(t, void 0, (function(t) { return _(e, t) }),
                               (function(t) { return b(e, t) }))
        }
        function y(e, r, n) {
          r.constructor === e.constructor && n === h &&
                  r.constructor.resolve === d
              ? g(e, r)
          : void 0 === n ? S(e, r)
          : t(n)         ? k(e, r, n)
                         : S(e, r)
        }
        function _(t, r) {
          if (t === r)
            b(t, p());
          else if (e(r)) {
            var n = void 0;
            try {
              n = r.then
            } catch (e) {
              return void b(t, e)
            }
            y(t, r, n)
          } else
            S(t, r)
        }
        function w(e) { e._onerror && e._onerror(e._result), R(e) }
        function S(e, t) {
          e._state === $ && (e._result = t, e._state = Q,
                             0 !== e._subscribers.length && K(R, e))
        }
        function b(e, t) {
          e._state === $ && (e._state = Z, e._result = t, K(w, e))
        }
        function A(e, t, r, n) {
          var o = e._subscribers, i = o.length;
          e._onerror = null, o[i] = t, o[i + Q] = r, o[i + Z] = n,
          0 === i && e._state && K(R, e)
        }
        function R(e) {
          var t = e._subscribers, r = e._state;
          if (0 !== t.length) {
            for (var n = void 0, o = void 0, i = e._result, s = 0; s < t.length;
                 s += 3)
              n = t[s], o = t[s + r], n ? E(r, n, o, i) : o(i);
            e._subscribers.length = 0
          }
        }
        function E(e, r, n, o) {
          var i = t(n), s = void 0, a = void 0, c = !0;
          if (i) {
            try {
              s = n(o)
            } catch (e) {
              c = !1, a = e
            }
            if (r === s)
              return void b(r, m())
          } else
            s = o;
          r._state !== $ || (i && c     ? _(r, s)
                             : !1 === c ? b(r, a)
                             : e === Q  ? S(r, s)
                                        : e === Z && b(r, s))
        }
        function H(e, t) {
          try {
            t((function(t) { _(e, t) }), (function(t) { b(e, t) }))
          } catch (t) {
            b(e, t)
          }
        }
        function C() { return ee++ }
        function U(e) {
          e[G] = ee++, e._state = void 0, e._result = void 0,
          e._subscribers = []
        }
        function T() {
          return new Error("Array Methods must be provided an Array")
        }
        function O(e) { return new te(this, e).promise }
        function I(e) {
          var t = this;
          return new t(N(e) ? function(r, n) {
            for (var o = e.length, i = 0; i < o; i++)
              t.resolve(e[i]).then(r, n)
          } : function(e, t) {
            return t(new TypeError("You must pass an array to race."))
          })
        }
        function L(e) {
          var t = new this(f);
          return b(t, e), t
        }
        function x() {
          throw new TypeError(
              "You must pass a resolver function as the first argument to the promise constructor")
        }
        function P() {
          throw new TypeError(
              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }
        function X() {
          var e = void 0;
          if (void 0 !== commonjsGlobal)
            e = commonjsGlobal;
          else if ("undefined" != typeof self)
            e = self;
          else
            try {
              e = Function("return this")()
            } catch (e) {
              throw new Error(
                  "polyfill failed because global object is unavailable in this environment")
            }
          var t = e.Promise;
          if (t) {
            var r = null;
            try {
              r = Object.prototype.toString.call(t.resolve())
            } catch (e) {
            }
            if ("[object Promise]" === r && !t.cast)
              return
          }
          e.Promise = re
        }
        var M = void 0;
        M = Array.isArray ? Array.isArray : function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        };
        var N = M, j = 0, B = void 0, F = void 0,
            K =
                function(e, t) {
              V[j] = e, V[j + 1] = t, 2 === (j += 2) && (F ? F(u) : z())
            },
            D = "undefined" != typeof window ? window : void 0, J = D || {},
            q = J.MutationObserver || J.WebKitMutationObserver,
            Y = "undefined" == typeof self && "undefined" != typeof process &&
                "[object process]" === {}.toString.call(process),
            W = "undefined" != typeof Uint8ClampedArray &&
                "undefined" != typeof importScripts &&
                "undefined" != typeof MessageChannel,
            V = new Array(1e3), z = void 0;
        z = Y                                                      ? o()
            : q                                                    ? s()
            : W                                                    ? a()
            : void 0 === D && "function" == typeof commonjsRequire ? l()
                                                                   : c();
        var G = Math.random().toString(36).substring(2), $ = void 0, Q = 1,
            Z = 2, ee = 0, te = function() {
              function e(e, t) {
                this._instanceConstructor = e, this.promise = new e(f),
                this.promise[G] || U(this.promise),
                N(t) ? (this.length = t.length, this._remaining = t.length,
                        this._result = new Array(this.length),
                        0 === this.length ? S(this.promise, this._result)
                                          : (this.length = this.length || 0,
                                             this._enumerate(t),
                                             0 === this._remaining &&
                                                 S(this.promise, this._result)))
                     : b(this.promise, T())
              }
              return e.prototype._enumerate = function(e) {
                for (var t = 0; this._state === $ && t < e.length; t++)
                  this._eachEntry(e[t], t)
              }, e.prototype._eachEntry = function(e, t) {
                var r = this._instanceConstructor, n = r.resolve;
                if (n === d) {
                  var o = void 0, i = void 0, s = !1;
                  try {
                    o = e.then
                  } catch (e) {
                    s = !0, i = e
                  }
                  if (o === h && e._state !== $)
                    this._settledAt(e._state, t, e._result);
                  else if ("function" != typeof o)
                    this._remaining--, this._result[t] = e;
                  else if (r === re) {
                    var a = new r(f);
                    s ? b(a, i) : y(a, e, o), this._willSettleAt(a, t)
                  } else
                    this._willSettleAt(new r((function(t) { return t(e) })), t)
                } else
                  this._willSettleAt(n(e), t)
              }, e.prototype._settledAt = function(e, t, r) {
                var n = this.promise;
                n._state === $ && (this._remaining--,
                                   e === Z ? b(n, r) : this._result[t] = r),
                    0 === this._remaining && S(n, this._result)
              }, e.prototype._willSettleAt = function(e, t) {
                var r = this;
                A(e, void 0, (function(e) { return r._settledAt(Q, t, e) }),
                  (function(e) { return r._settledAt(Z, t, e) }))
              }, e
            }(), re = function() {
              function e(t) {
                this[G] = C(), this._result = this._state = void 0,
                this._subscribers = [],
                f !== t && ("function" != typeof t && x(),
                            this instanceof e ? H(this, t) : P())
              }
              return e.prototype.catch = function(
                         e) { return this.then(null, e) },
                     e.prototype.finally = function(e) {
                       var r = this, n = r.constructor;
                       return t(e) ? r.then((function(t) {
                                              return n.resolve(e()).then(
                                                  (function() { return t }))
                                            }),
                                            (function(t) {
                                              return n.resolve(e()).then(
                                                  (function() { throw t }))
                                            }))
                                   : r.then(e, e)
                     }, e
            }();
        return re.prototype.then = h, re.all = O, re.race = I, re.resolve = d,
               re.reject = L, re._setScheduler = r, re._setAsap = n,
               re._asap = K, re.polyfill = X, re.Promise = re, re
      }()
    }(es6Promise_min);
    var base64Js = {};
    base64Js.byteLength = byteLength, base64Js.toByteArray = toByteArray,
    base64Js.fromByteArray = fromByteArray;
    for (
        var lookup = [], revLookup = [],
            Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            code =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            i = 0, len = code.length;
        i < len; ++i)
      lookup[i] = code[i], revLookup[code.charCodeAt(i)] = i;
    function getLens(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      return -1 === r && (r = t), [ r, r === t ? 0 : 4 - r % 4 ]
    }
    function byteLength(e) {
      var t = getLens(e), r = t[0], n = t[1];
      return 3 * (r + n) / 4 - n
    }
    function _byteLength(e, t, r) { return 3 * (t + r) / 4 - r }
    function toByteArray(e) {
      var t, r, n = getLens(e), o = n[0], i = n[1],
                s = new Arr(_byteLength(e, o, i)), a = 0, c = i > 0 ? o - 4 : o;
      for (r = 0; r < c; r += 4)
        t = revLookup[e.charCodeAt(r)] << 18 |
            revLookup[e.charCodeAt(r + 1)] << 12 |
            revLookup[e.charCodeAt(r + 2)] << 6 |
            revLookup[e.charCodeAt(r + 3)],
        s[a++] = t >> 16 & 255, s[a++] = t >> 8 & 255, s[a++] = 255 & t;
      return 2 === i && (t = revLookup[e.charCodeAt(r)] << 2 |
                             revLookup[e.charCodeAt(r + 1)] >> 4,
                         s[a++] = 255 & t),
             1 === i && (t = revLookup[e.charCodeAt(r)] << 10 |
                             revLookup[e.charCodeAt(r + 1)] << 4 |
                             revLookup[e.charCodeAt(r + 2)] >> 2,
                         s[a++] = t >> 8 & 255, s[a++] = 255 & t),
             s
    }
    function tripletToBase64(e) {
      return lookup[e >> 18 & 63] + lookup[e >> 12 & 63] + lookup[e >> 6 & 63] +
             lookup[63 & e]
    }
    function encodeChunk(e, t, r) {
      for (var n, o = [], i = t; i < r; i += 3)
        n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) +
            (255 & e[i + 2]),
        o.push(tripletToBase64(n));
      return o.join("")
    }
    function fromByteArray(e) {
      for (var t, r = e.length, n = r % 3, o = [], i = 16383, s = 0, a = r - n;
           s < a; s += i)
        o.push(encodeChunk(e, s, s + i > a ? a : s + i));
      return 1 === n
                 ? (t = e[r - 1],
                    o.push(lookup[t >> 2] + lookup[t << 4 & 63] + "=="))
                 : 2 === n && (t = (e[r - 2] << 8) + e[r - 1],
                               o.push(lookup[t >> 10] + lookup[t >> 4 & 63] +
                                      lookup[t << 2 & 63] + "=")),
             o.join("")
    }
    revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63;
    var sha256$1 = {exports : {}};
    /**
     * [js-sha256]{@link https://github.com/emn178/js-sha256}
     *
     * @version 0.9.0
     * @author Chen, Yi-Cyuan [emn178@gmail.com]
     * @copyright Chen, Yi-Cyuan 2014-2017
     * @license MIT
     */
    (function(module) {
      (function() {
        var ERROR = "input is invalid type", WINDOW = "object" == typeof window,
            root = WINDOW ? window : {};
        root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
        var WEB_WORKER = !WINDOW && "object" == typeof self,
            NODE_JS = !root.JS_SHA256_NO_NODE_JS &&
                      "object" == typeof process && process.versions &&
                      process.versions.node;
        NODE_JS ? root = commonjsGlobal : WEB_WORKER && (root = self);
        var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports,
            ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER &&
                           "undefined" != typeof ArrayBuffer,
            HEX_CHARS = "0123456789abcdef".split(""),
            EXTRA = [ -2147483648, 8388608, 32768, 128 ],
            SHIFT = [ 24, 16, 8, 0 ],
            K =
                [
                  1116352408, 1899447441, 3049323471, 3921009573, 961987163,
                  1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                  607225278,  1426881987, 1925078388, 2162078206, 2614888103,
                  3248222580, 3835390401, 4022224774, 264347078,  604807628,
                  770255983,  1249150122, 1555081692, 1996064986, 2554220882,
                  2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
                  113926993,  338241895,  666307205,  773529912,  1294757372,
                  1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                  2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
                  3600352804, 4094571909, 275423344,  430227734,  506948616,
                  659060556,  883997877,  958139571,  1322822218, 1537002063,
                  1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
                  2428436474, 2756734187, 3204031479, 3329325298
                ],
            OUTPUT_TYPES = [ "hex", "array", "digest", "arrayBuffer" ],
            blocks = [];
        !root.JS_SHA256_NO_NODE_JS && Array.isArray ||
            (Array.isArray =
                 function(e) {
                   return "[object Array]" === Object.prototype.toString.call(e)
                 }),
            !ARRAY_BUFFER ||
                !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView ||
                (ArrayBuffer.isView = function(e) {
                  return "object" == typeof e && e.buffer &&
                         e.buffer.constructor === ArrayBuffer
                });
        var createOutputMethod = function(e, t) {
          return function(r) { return new Sha256(t, !0).update(r)[e]() }
        }, createMethod = function(e) {
          var t = createOutputMethod("hex", e);
          NODE_JS && (t = nodeWrap(t, e)),
              t.create = function() { return new Sha256(e) },
              t.update = function(e) { return t.create().update(e) };
          for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
            var n = OUTPUT_TYPES[r];
            t[n] = createOutputMethod(n, e)
          }
          return t
        }, nodeWrap = function(method, is224) {
          var crypto = eval("require('crypto')"),
              Buffer = eval("require('buffer').Buffer"),
              algorithm = is224 ? "sha224" : "sha256",
              nodeMethod = function(e) {
                if ("string" == typeof e)
                  return crypto.createHash(algorithm).update(e, "utf8").digest(
                      "hex");
                if (null == e)
                  throw new Error(ERROR);
                return e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
                       Array.isArray(e) || ArrayBuffer.isView(e) ||
                               e.constructor === Buffer
                           ? crypto.createHash(algorithm)
                                 .update(new Buffer(e))
                                 .digest("hex")
                           : method(e)
              };
          return nodeMethod
        }, createHmacOutputMethod = function(e, t) {
          return function(r,
                          n) { return new HmacSha256(r, t, !0).update(n)[e]() }
        }, createHmacMethod = function(e) {
          var t = createHmacOutputMethod("hex", e);
          t.create = function(t) { return new HmacSha256(t, e) },
          t.update = function(e, r) { return t.create(e).update(r) };
          for (var r = 0; r < OUTPUT_TYPES.length; ++r) {
            var n = OUTPUT_TYPES[r];
            t[n] = createHmacOutputMethod(n, e)
          }
          return t
        };
        function Sha256(e, t) {
          t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
                   blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] =
                       blocks[9] = blocks[10] = blocks[11] = blocks[12] =
                           blocks[13] = blocks[14] = blocks[15] = 0,
               this.blocks = blocks)
            : this.blocks =
                  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
              e ? (this.h0 = 3238371032, this.h1 = 914150663,
                   this.h2 = 812702999, this.h3 = 4144912697,
                   this.h4 = 4290775857, this.h5 = 1750603025,
                   this.h6 = 1694076839, this.h7 = 3204075428)
                : (this.h0 = 1779033703, this.h1 = 3144134277,
                   this.h2 = 1013904242, this.h3 = 2773480762,
                   this.h4 = 1359893119, this.h5 = 2600822924,
                   this.h6 = 528734635, this.h7 = 1541459225),
              this.block = this.start = this.bytes = this.hBytes = 0,
              this.finalized = this.hashed = !1, this.first = !0, this.is224 = e
        }
        function HmacSha256(e, t, r) {
          var n, o = typeof e;
          if ("string" === o) {
            var i, s = [], a = e.length, c = 0;
            for (n = 0; n < a; ++n)
              (i = e.charCodeAt(n)) < 128 ? s[c++] = i
              : i < 2048 ? (s[c++] = 192 | i >> 6, s[c++] = 128 | 63 & i)
              : i < 55296 || i >= 57344
                  ? (s[c++] = 224 | i >> 12, s[c++] = 128 | i >> 6 & 63,
                     s[c++] = 128 | 63 & i)
                  : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++n)),
                     s[c++] = 240 | i >> 18, s[c++] = 128 | i >> 12 & 63,
                     s[c++] = 128 | i >> 6 & 63, s[c++] = 128 | 63 & i);
            e = s
          } else {
            if ("object" !== o)
              throw new Error(ERROR);
            if (null === e)
              throw new Error(ERROR);
            if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
              e = new Uint8Array(e);
            else if (!(Array.isArray(e) ||
                       ARRAY_BUFFER && ArrayBuffer.isView(e)))
              throw new Error(ERROR)
          }
          e.length > 64 && (e = new Sha256(t, !0).update(e).array());
          var u = [], l = [];
          for (n = 0; n < 64; ++n) {
            var h = e[n] || 0;
            u[n] = 92 ^ h, l[n] = 54 ^ h
          }
          Sha256.call(this, t, r), this.update(l),
              this.oKeyPad = u, this.inner = !0, this.sharedMemory = r
        }
        Sha256.prototype
            .update =
            function(e) {
          if (!this.finalized) {
            var t, r = typeof e;
            if ("string" !== r) {
              if ("object" !== r)
                throw new Error(ERROR);
              if (null === e)
                throw new Error(ERROR);
              if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                e = new Uint8Array(e);
              else if (!(Array.isArray(e) ||
                         ARRAY_BUFFER && ArrayBuffer.isView(e)))
                throw new Error(ERROR);
              t = !0
            }
            for (var n, o, i = 0, s = e.length, a = this.blocks; i < s;) {
              if (this.hashed &&
                      (this.hashed = !1, a[0] = this.block,
                       a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] =
                           a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] =
                               a[15] = 0),
                  t)
                for (o = this.start; i < s && o < 64; ++i)
                  a[o >> 2] |= e[i] << SHIFT[3 & o++];
              else
                for (o = this.start; i < s && o < 64; ++i)
                  (n = e.charCodeAt(i)) < 128 ? a[o >> 2] |= n << SHIFT[3 & o++]
                  : n < 2048 ? (a[o >> 2] |= (192 | n >> 6) << SHIFT[3 & o++],
                                a[o >> 2] |= (128 | 63 & n) << SHIFT[3 & o++])
                  : n < 55296 || n >= 57344
                      ? (a[o >> 2] |= (224 | n >> 12) << SHIFT[3 & o++],
                         a[o >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & o++],
                         a[o >> 2] |= (128 | 63 & n) << SHIFT[3 & o++])
                      : (n = 65536 +
                             ((1023 & n) << 10 | 1023 & e.charCodeAt(++i)),
                         a[o >> 2] |= (240 | n >> 18) << SHIFT[3 & o++],
                         a[o >> 2] |= (128 | n >> 12 & 63) << SHIFT[3 & o++],
                         a[o >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & o++],
                         a[o >> 2] |= (128 | 63 & n) << SHIFT[3 & o++]);
              this.lastByteIndex = o, this.bytes += o - this.start,
              o >= 64 ? (this.block = a[16], this.start = o - 64, this.hash(),
                         this.hashed = !0)
                      : this.start = o
            }
            return this.bytes > 4294967295 &&
                       (this.hBytes += this.bytes / 4294967296 << 0,
                        this.bytes = this.bytes % 4294967296),
                   this
          }
        },
  Sha256.prototype.finalize =
            function() {
    if (!this.finalized) {
      this.finalized = !0;
      var e = this.blocks, t = this.lastByteIndex;
      e[16] = this.block, e[t >> 2] |= EXTRA[3 & t], this.block = e[16],
      t >= 56 &&
          (this.hashed || this.hash(), e[0] = this.block,
           e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] =
               e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
      e[14] = this.hBytes << 3 | this.bytes >>> 29, e[15] = this.bytes << 3,
      this.hash()
    }
  },
  Sha256.prototype.hash =
            function() {
    var e, t, r, n, o, i, s, a, c, u = this.h0, l = this.h1, h = this.h2,
                                   d = this.h3, f = this.h4, p = this.h5,
                                   m = this.h6, v = this.h7, k = this.blocks;
    for (e = 16; e < 64; ++e)
      t = ((o = k[e - 15]) >>> 7 | o << 25) ^ (o >>> 18 | o << 14) ^ o >>> 3,
      r = ((o = k[e - 2]) >>> 17 | o << 15) ^ (o >>> 19 | o << 13) ^ o >>> 10,
      k[e] = k[e - 16] + t + k[e - 7] + r << 0;
    for (c = l & h, e = 0; e < 64; e += 4)
      this.first
          ? (this.is224
                 ? (i = 300032, v = (o = k[0] - 1413257819) - 150054599 << 0,
                    d = o + 24177077 << 0)
                 : (i = 704751109, v = (o = k[0] - 210244248) - 1521486534 << 0,
                    d = o + 143694565 << 0),
             this.first = !1)
          : (t = (u >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^
                 (u >>> 22 | u << 10),
             n = (i = u & l) ^ u & h ^ c,
             v = d + (o = v +
                          (r = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^
                               (f >>> 25 | f << 7)) +
                          (f & p ^ ~f & m) + K[e] + k[e])
                 << 0,
             d = o + (t + n) << 0),
          t = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10),
          n = (s = d & u) ^ d & l ^ i,
          m = h + (o = m +
                       (r = (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^
                            (v >>> 25 | v << 7)) +
                       (v & f ^ ~v & p) + K[e + 1] + k[e + 1])
              << 0,
          t = ((h = o + (t + n) << 0) >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^
              (h >>> 22 | h << 10),
          n = (a = h & d) ^ h & u ^ s,
          p = l + (o = p +
                       (r = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^
                            (m >>> 25 | m << 7)) +
                       (m & v ^ ~m & f) + K[e + 2] + k[e + 2])
              << 0,
          t = ((l = o + (t + n) << 0) >>> 2 | l << 30) ^ (l >>> 13 | l << 19) ^
              (l >>> 22 | l << 10),
          n = (c = l & h) ^ l & d ^ a,
          f = u + (o = f +
                       (r = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^
                            (p >>> 25 | p << 7)) +
                       (p & m ^ ~p & v) + K[e + 3] + k[e + 3])
              << 0,
          u = o + (t + n) << 0;
    this.h0 = this.h0 + u << 0, this.h1 = this.h1 + l << 0,
    this.h2 = this.h2 + h << 0, this.h3 = this.h3 + d << 0,
    this.h4 = this.h4 + f << 0, this.h5 = this.h5 + p << 0,
    this.h6 = this.h6 + m << 0, this.h7 = this.h7 + v << 0
  },
  Sha256.prototype.hex =
            function() {
    this.finalize();
    var e = this.h0, t = this.h1, r = this.h2, n = this.h3, o = this.h4,
        i = this.h5, s = this.h6, a = this.h7,
        c = HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] +
            HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] +
            HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] +
            HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] +
            HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] +
            HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] +
            HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] +
            HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] +
            HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] +
            HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] +
            HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] +
            HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] +
            HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] +
            HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] +
            HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] +
            HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] +
            HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] +
            HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] +
            HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] +
            HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] +
            HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] +
            HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] +
            HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] +
            HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] +
            HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] +
            HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] +
            HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] +
            HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s];
    return this.is224 ||
               (c += HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] +
                     HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] +
                     HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] +
                     HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a]),
           c
  },
  Sha256.prototype.toString = Sha256.prototype.hex,
  Sha256.prototype.digest =
            function() {
    this.finalize();
    var e = this.h0, t = this.h1, r = this.h2, n = this.h3, o = this.h4,
        i = this.h5, s = this.h6, a = this.h7, c = [
          e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e,
          t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t,
          r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r,
          n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n,
          o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o,
          i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i,
          s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s
        ];
    return this.is224 ||
               c.push(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a),
           c
  },
  Sha256.prototype.array = Sha256.prototype.digest,
  Sha256.prototype.arrayBuffer =
            function() {
    this.finalize();
    var e = new ArrayBuffer(this.is224 ? 28 : 32), t = new DataView(e);
    return t.setUint32(0, this.h0), t.setUint32(4, this.h1),
           t.setUint32(8, this.h2), t.setUint32(12, this.h3),
           t.setUint32(16, this.h4), t.setUint32(20, this.h5),
           t.setUint32(24, this.h6), this.is224 || t.setUint32(28, this.h7), e
  },
  HmacSha256.prototype = new Sha256,
  HmacSha256.prototype.finalize = function() {
    if (Sha256.prototype.finalize.call(this), this.inner) {
      this.inner = !1;
      var e = this.array();
      Sha256.call(this, this.is224, this.sharedMemory),
          this.update(this.oKeyPad), this.update(e),
          Sha256.prototype.finalize.call(this)
    }
  };
        var exports = createMethod();
        exports.sha256 = exports, exports.sha224 = createMethod(!0),
        exports.sha256.hmac = createHmacMethod(),
        exports.sha224.hmac = createHmacMethod(!0),
        COMMON_JS ? module.exports = exports
                  : (root.sha256 = exports.sha256, root.sha224 = exports.sha224)
      })()
    })(sha256$1);
    var sha256 = sha256$1.exports;
    if (void 0 === es6Promise_min.exports.Promise)
      throw Error(
          "Keycloak requires an environment that supports Promises. Make sure that you include the appropriate polyfill.");
    var loggedPromiseDeprecation = !1;
    function logPromiseDeprecation() {
      loggedPromiseDeprecation ||
          (loggedPromiseDeprecation = !0,
           console.warn(
               "[KEYCLOAK] Usage of legacy style promise methods such as `.error()` and `.success()` has been deprecated and support will be removed in future versions. Use standard style promise methods such as `.then() and `.catch()` instead."))
    }
    function Keycloak(e) {
      if (!(this instanceof Keycloak))
        return new Keycloak(e);
      for (var t, r, n = this, o = [],
                     i = {enable : !0, callbackList : [], interval : 5},
                     s = document.getElementsByTagName("script"), a = 0;
           a < s.length; a++)
        -1 === s[a].src.indexOf("keycloak.js") &&
                -1 === s[a].src.indexOf("keycloak.min.js") ||
            -1 === s[a].src.indexOf("version=") ||
            (n.iframeVersion =
                 s[a].src.substring(s[a].src.indexOf("version=") + 8)
                     .split("&")[0]);
      var c = !0, u = C(console.info), l = C(console.warn);
      function h(e, t) {
        for (var r = function(e) {
               var t = null, r = window.crypto || window.msCrypto;
               if (r && r.getRandomValues && window.Uint8Array)
                 return t = new Uint8Array(e), r.getRandomValues(t), t;
               t = new Array(e);
               for (var n = 0; n < t.length; n++)
                 t[n] = Math.floor(256 * Math.random());
               return t
             }(e), n = new Array(e), o = 0; o < e; o++)
          n[o] = t.charCodeAt(r[o] % t.length);
        return String.fromCharCode.apply(null, n)
      }
      function d() {
        return void 0 !== n.authServerUrl
                   ? "/" == n.authServerUrl.charAt(n.authServerUrl.length - 1)
                         ? n.authServerUrl + "realms/" +
                               encodeURIComponent(n.realm)
                         : n.authServerUrl + "/realms/" +
                               encodeURIComponent(n.realm)
                   : void 0
      }
      function f(e, t) {
        var r = e.code, o = e.error, i = e.prompt, s = (new Date).getTime();
        if (e.kc_action_status && n.onActionUpdate &&
                n.onActionUpdate(e.kc_action_status),
            o)
          if ("none" != i) {
            var a = {error : o, error_description : e.error_description};
            n.onAuthError && n.onAuthError(a), t && t.setError(a)
          } else
            t && t.setSuccess();
        else if ("standard" != n.flow && (e.access_token || e.id_token) &&
                     f(e.access_token, null, e.id_token, !0),
                 "implicit" != n.flow && r) {
          var l = "code=" + r + "&grant_type=authorization_code",
              h = n.endpoints.token(), d = new XMLHttpRequest;
          d.open("POST", h, !0),
              d.setRequestHeader("Content-type",
                                 "application/x-www-form-urlencoded"),
              l += "&client_id=" + encodeURIComponent(n.clientId),
              l += "&redirect_uri=" + e.redirectUri,
              e.pkceCodeVerifier &&
                  (l += "&code_verifier=" + e.pkceCodeVerifier),
              d.withCredentials = !0, d.onreadystatechange = function() {
                if (4 == d.readyState)
                  if (200 == d.status) {
                    var e = JSON.parse(d.responseText);
                    f(e.access_token, e.refresh_token, e.id_token,
                      "standard" === n.flow),
                        S()
                  } else
                    n.onAuthError && n.onAuthError(), t && t.setError()
              }, d.send(l)
        }
        function f(r, o, i, a) {
          m(r, o, i, s = (s + (new Date).getTime()) / 2),
              c && (n.tokenParsed && n.tokenParsed.nonce != e.storedNonce ||
                    n.refreshTokenParsed &&
                        n.refreshTokenParsed.nonce != e.storedNonce ||
                    n.idTokenParsed && n.idTokenParsed.nonce != e.storedNonce)
                  ? (u("[KEYCLOAK] Invalid nonce, clearing token"),
                     n.clearToken(), t && t.setError())
                  : a && (n.onAuthSuccess && n.onAuthSuccess(),
                          t && t.setSuccess())
        }
      }
      function p(e) {
        return 0 == e.status && e.responseText &&
               e.responseURL.startsWith("file:")
      }
      function m(e, t, r, o) {
        if (n.tokenTimeoutHandle && (clearTimeout(n.tokenTimeoutHandle),
                                     n.tokenTimeoutHandle = null),
            t ? (n.refreshToken = t, n.refreshTokenParsed = v(t))
              : (delete n.refreshToken, delete n.refreshTokenParsed),
            r ? (n.idToken = r, n.idTokenParsed = v(r))
              : (delete n.idToken, delete n.idTokenParsed),
            e) {
          if (n.token = e, n.tokenParsed = v(e),
              n.sessionId = n.tokenParsed.session_state, n.authenticated = !0,
              n.subject = n.tokenParsed.sub,
              n.realmAccess = n.tokenParsed.realm_access,
              n.resourceAccess = n.tokenParsed.resource_access,
              o && (n.timeSkew = Math.floor(o / 1e3) - n.tokenParsed.iat),
              null != n.timeSkew &&
                  (u("[KEYCLOAK] Estimated time difference between browser and server is " +
                     n.timeSkew + " seconds"),
                   n.onTokenExpired)) {
            var i = 1e3 * (n.tokenParsed.exp - (new Date).getTime() / 1e3 +
                           n.timeSkew);
            u("[KEYCLOAK] Token expires in " + Math.round(i / 1e3) + " s"),
                i <= 0 ? n.onTokenExpired()
                       : n.tokenTimeoutHandle = setTimeout(n.onTokenExpired, i)
          }
        } else
          delete n.token, delete n.tokenParsed, delete n.subject,
              delete n.realmAccess, delete n.resourceAccess,
              n.authenticated = !1
      }
      function v(e) {
        switch ((e = (e = (e = e.split(".")[1]).replace(/-/g, "+"))
                         .replace(/_/g, "/"))
                    .length %
                4) {
        case 0:
          break;
        case 2:
          e += "==";
          break;
        case 3:
          e += "=";
          break;
        default:
          throw "Invalid token"
        }
        return e = decodeURIComponent(escape(atob(e))), e = JSON.parse(e)
      }
      function k() {
        var e = "0123456789abcdef", t = h(36, e).split("");
        return t[14] = "4", t[19] = e.substr(3 & t[19] | 8, 1),
               t[8] = t[13] = t[18] = t[23] = "-", t.join("")
      }
      function g(e) {
        var t = function(e) {
          var t;
          switch (n.flow) {
          case "standard":
            t = [ "code", "state", "session_state", "kc_action_status" ];
            break;
          case "implicit":
            t = [
              "access_token", "token_type", "id_token", "state",
              "session_state", "expires_in", "kc_action_status"
            ];
            break;
          case "hybrid":
            t = [
              "access_token", "token_type", "id_token", "code", "state",
              "session_state", "expires_in", "kc_action_status"
            ]
          }
          t.push("error"), t.push("error_description"), t.push("error_uri");
          var r, o, i = e.indexOf("?"), s = e.indexOf("#");
          "query" === n.responseMode && -1 !== i
              ? (r = e.substring(0, i),
                 "" !== (o = y(e.substring(i + 1, -1 !== s ? s : e.length), t))
                             .paramsString &&
                     (r += "?" + o.paramsString),
                 -1 !== s && (r += e.substring(s)))
              : "fragment" === n.responseMode && -1 !== s &&
                    (r = e.substring(0, s),
                     "" !== (o = y(e.substring(s + 1), t)).paramsString &&
                         (r += "#" + o.paramsString));
          if (o && o.oauthParams)
            if ("standard" === n.flow || "hybrid" === n.flow) {
              if ((o.oauthParams.code || o.oauthParams.error) &&
                  o.oauthParams.state)
                return o.oauthParams.newUrl = r, o.oauthParams
            } else if ("implicit" === n.flow &&
                       (o.oauthParams.access_token || o.oauthParams.error) &&
                       o.oauthParams.state)
              return o.oauthParams.newUrl = r, o.oauthParams
        }(e);
        if (t) {
          var o = r.get(t.state);
          return o && (t.valid = !0, t.redirectUri = o.redirectUri,
                       t.storedNonce = o.nonce, t.prompt = o.prompt,
                       t.pkceCodeVerifier = o.pkceCodeVerifier),
                 t
        }
      }
      function y(e, t) {
        for (var r = e.split("&"), n = {paramsString : "", oauthParams : {}},
                 o = 0;
             o < r.length; o++) {
          var i = r[o].indexOf("="), s = r[o].slice(0, i);
          -1 !== t.indexOf(s)
              ? n.oauthParams[s] = r[o].slice(i + 1)
              : ("" !== n.paramsString && (n.paramsString += "&"),
                 n.paramsString += r[o])
        }
        return n
      }
      function _() {
        var e = {
          setSuccess : function(t) { e.resolve(t) },
          setError : function(t) { e.reject(t) }
        };
        return e.promise = new es6Promise_min.exports.Promise(
                   (function(t, r) { e.resolve = t, e.reject = r })),
               e.promise.success = function(e) {
                 return logPromiseDeprecation(),
                        this.then((function(t) { e(t) })), this
               }, e.promise.error = function(e) {
                 return logPromiseDeprecation(),
                        this.catch((function(t) { e(t) })), this
               }, e
      }
      function w() {
        var e = _();
        if (!i.enable)
          return e.setSuccess(), e.promise;
        if (i.iframe)
          return e.setSuccess(), e.promise;
        var t = document.createElement("iframe");
        i.iframe = t, t.onload = function() {
          var t = n.endpoints.authorize();
          "/" === t.charAt(0)
              ? i.iframeOrigin =
                    window.location.origin
                        ? window.location.origin
                        : window.location.protocol + "//" +
                              window.location.hostname +
                              (window.location.port ? ":" + window.location.port
                                                    : "")
              : i.iframeOrigin = t.substring(0, t.indexOf("/", 8)),
                e.setSuccess()
        };
        var r = n.endpoints.checkSessionIframe();
        t.setAttribute("src", r),
            t.setAttribute("title", "keycloak-session-iframe"),
            t.style.display = "none", document.body.appendChild(t);
        return window.addEventListener(
                   "message", (function(e) {
                     if (e.origin === i.iframeOrigin &&
                         i.iframe.contentWindow === e.source &&
                         ("unchanged" == e.data || "changed" == e.data ||
                          "error" == e.data)) {
                       "unchanged" != e.data && n.clearToken();
                       for (var t = i.callbackList.splice(
                                    0, i.callbackList.length),
                                r = t.length - 1;
                            r >= 0; --r) {
                         var o = t[r];
                         "error" == e.data ? o.setError()
                                           : o.setSuccess("unchanged" == e.data)
                       }
                     }
                   }),
                   !1),
               e.promise
      }
      function S() {
        i.enable && n.token &&
            setTimeout((function() { b().then((function(e) { e && S() })) }),
                       1e3 * i.interval)
      }
      function b() {
        var e = _();
        if (i.iframe && i.iframeOrigin) {
          var t = n.clientId + " " + (n.sessionId ? n.sessionId : "");
          i.callbackList.push(e);
          var r = i.iframeOrigin;
          1 == i.callbackList.length && i.iframe.contentWindow.postMessage(t, r)
        } else
          e.setSuccess();
        return e.promise
      }
      function A() {
        var e = _();
        if (i.enable || n.silentCheckSsoRedirectUri) {
          var t = document.createElement("iframe");
          t.setAttribute("src", n.endpoints.thirdPartyCookiesIframe()),
              t.setAttribute("title", "keycloak-3p-check-iframe"),
              t.style.display = "none", document.body.appendChild(t);
          var r = function(o) {
            t.contentWindow === o.source &&
                ("supported" !== o.data && "unsupported" !== o.data ||
                 ("unsupported" === o.data &&
                      (i.enable = !1,
                       n.silentCheckSsoFallback &&
                           (n.silentCheckSsoRedirectUri = !1),
                       l("[KEYCLOAK] 3rd party cookies aren't supported by this browser. checkLoginIframe and silent check-sso are not available.")),
                  document.body.removeChild(t),
                  window.removeEventListener("message", r), e.setSuccess()))
          };
          window.addEventListener("message", r, !1)
        } else
          e.setSuccess();
        return function(e, t, r) {
          var n = null, o = new es6Promise_min.exports.Promise((function(e, o) {
            n = setTimeout(
                (function() {
                  o({
                    error : r || "Promise is not settled within timeout of " +
                                     t + "ms"
                  })
                }),
                t)
          }));
          return es6Promise_min.exports.Promise.race([ e, o ]).finally(
              (function() { clearTimeout(n) }))
        }(e.promise, n.messageReceiveTimeout,
          "Timeout when waiting for 3rd party check iframe message.")
      }
      function R(e) {
        if (!e || "default" == e)
          return {
            login : function(e) {
              return window.location.replace(n.createLoginUrl(e)), _().promise
            },
            logout : function(e) {
              return window.location.replace(n.createLogoutUrl(e)), _().promise
            },
            register : function(e) {
              return window.location.replace(n.createRegisterUrl(e)),
                     _().promise
            },
            accountManagement : function() {
              var e = n.createAccountUrl();
              if (void 0 === e)
                throw "Not supported by the OIDC server";
              return window.location.href = e, _().promise
            },
            redirectUri : function(e, t) {
              return e && e.redirectUri ? e.redirectUri
                     : n.redirectUri    ? n.redirectUri
                                        : location.href
            }
          };
        if ("cordova" == e) {
          i.enable = !1;
          var t = function(e, t, r) {
            return window.cordova && window.cordova.InAppBrowser
                       ? window.cordova.InAppBrowser.open(e, t, r)
                       : window.open(e, t, r)
          }, r = function(e) {
            var t = function(e) {
              return e && e.cordovaOptions
                         ? Object.keys(e.cordovaOptions)
                               .reduce((function(t, r) {
                                         return t[r] = e.cordovaOptions[r], t
                                       }),
                                       {})
                         : {}
            }(e);
            return t.location = "no",
                   e && "none" == e.prompt && (t.hidden = "yes"), function(e) {
                     return Object.keys(e)
                         .reduce(
                             (function(t,
                                       r) { return t.push(r + "=" + e[r]), t }),
                             [])
                         .join(",")
                   }(t)
          };
          return {
            login: function(e) {
              var o = _(), i = r(e), s = n.createLoginUrl(e),
                  a = t(s, "_blank", i), c = !1, u = !1,
                  l = function() { u = !0, a.close() };
              return a.addEventListener("loadstart", (function(e) {
                                          0 == e.url.indexOf(
                                                   "http://localhost") &&
                                              (f(g(e.url), o), l(), c = !0)
                                        })),
                     a.addEventListener(
                         "loaderror", (function(e) {
                           c || (0 == e.url.indexOf("http://localhost")
                                     ? (f(g(e.url), o), l(), c = !0)
                                     : (o.setError(), l()))
                         })),
                     a.addEventListener("exit", (function(e) {
                                          u || o.setError(
                                                   {reason : "closed_by_user"})
                                        })),
                     o.promise
            }, logout: function(e) {
              var r,
                  o = _(), i = n.createLogoutUrl(e),
                  s = t(i, "_blank", "location=no,hidden=yes,clearcache=yes");
              return s.addEventListener(
                         "loadstart", (function(e) {
                           0 == e.url.indexOf("http://localhost") && s.close()
                         })),
                     s.addEventListener(
                         "loaderror", (function(e) {
                           0 == e.url.indexOf("http://localhost") || (r = !0),
                               s.close()
                         })),
                     s.addEventListener("exit", (function(e) {
                                          r ? o.setError()
                                            : (n.clearToken(), o.setSuccess())
                                        })),
                     o.promise
            }, register: function(e) {
              var o = _(), i = n.createRegisterUrl(), s = r(e),
                  a = t(i, "_blank", s);
              return a.addEventListener("loadstart", (function(e) {
                                          0 == e.url.indexOf(
                                                   "http://localhost") &&
                                              (a.close(), f(g(e.url), o))
                                        })),
                     o.promise
            }, accountManagement: function() {
              var e = n.createAccountUrl();
              if (void 0 === e)
                throw "Not supported by the OIDC server";
              var r = t(e, "_blank", "location=no");
              r.addEventListener("loadstart", (function(e) {
                                   0 == e.url.indexOf("http://localhost") &&
                                       r.close()
                                 }))
            }, redirectUri: function(e) { return "http://localhost" }
          }
        }
        if ("cordova-native" == e)
          return i.enable = !1, {
            login : function(e) {
              var t = _(), r = n.createLoginUrl(e);
              return universalLinks.subscribe(
                         "keycloak", (function(e) {
                           universalLinks.unsubscribe("keycloak"),
                               window.cordova.plugins.browsertab.close(),
                               f(g(e.url), t)
                         })),
                     window.cordova.plugins.browsertab.openUrl(r), t.promise
            },
            logout : function(e) {
              var t = _(), r = n.createLogoutUrl(e);
              return universalLinks.subscribe(
                         "keycloak", (function(e) {
                           universalLinks.unsubscribe("keycloak"),
                               window.cordova.plugins.browsertab.close(),
                               n.clearToken(), t.setSuccess()
                         })),
                     window.cordova.plugins.browsertab.openUrl(r), t.promise
            },
            register : function(e) {
              var t = _(), r = n.createRegisterUrl(e);
              return universalLinks.subscribe(
                         "keycloak", (function(e) {
                           universalLinks.unsubscribe("keycloak"),
                               window.cordova.plugins.browsertab.close(),
                               f(g(e.url), t)
                         })),
                     window.cordova.plugins.browsertab.openUrl(r), t.promise
            },
            accountManagement : function() {
              var e = n.createAccountUrl();
              if (void 0 === e)
                throw "Not supported by the OIDC server";
              window.cordova.plugins.browsertab.openUrl(e)
            },
            redirectUri : function(e) {
              return e && e.redirectUri ? e.redirectUri
                     : n.redirectUri    ? n.redirectUri
                                        : "http://localhost"
            }
          };
        throw "invalid adapter type: " + e
      }
      n.init =
          function(o) {
        n.authenticated = !1, r = function() {
          try {
            return new E
          } catch (e) {
          }
          return new H
        }();
        if (t = o && [ "default", "cordova", "cordova-native" ].indexOf(
                         o.adapter) > -1
                    ? R(o.adapter)
                : o && "object" == typeof o.adapter ? o.adapter
                : window.Cordova || window.cordova  ? R("cordova")
                                                    : R(),
            o) {
          if (void 0 !== o.useNonce && (c = o.useNonce),
              void 0 !== o.checkLoginIframe && (i.enable = o.checkLoginIframe),
              o.checkLoginIframeInterval &&
                  (i.interval = o.checkLoginIframeInterval),
              "login-required" === o.onLoad && (n.loginRequired = !0),
              o.responseMode) {
            if ("query" !== o.responseMode && "fragment" !== o.responseMode)
              throw "Invalid value for responseMode";
            n.responseMode = o.responseMode
          }
          if (o.flow) {
            switch (o.flow) {
            case "standard":
              n.responseType = "code";
              break;
            case "implicit":
              n.responseType = "id_token token";
              break;
            case "hybrid":
              n.responseType = "code id_token token";
              break;
            default:
              throw "Invalid value for flow"
            }
            n.flow = o.flow
          }
          if (null != o.timeSkew && (n.timeSkew = o.timeSkew),
              o.redirectUri && (n.redirectUri = o.redirectUri),
              o.silentCheckSsoRedirectUri &&
                  (n.silentCheckSsoRedirectUri = o.silentCheckSsoRedirectUri),
              "boolean" == typeof o.silentCheckSsoFallback
                  ? n.silentCheckSsoFallback = o.silentCheckSsoFallback
                  : n.silentCheckSsoFallback = !0,
              o.pkceMethod) {
            if ("S256" !== o.pkceMethod)
              throw "Invalid value for pkceMethod";
            n.pkceMethod = o.pkceMethod
          }
          "boolean" == typeof o.enableLogging
              ? n.enableLogging = o.enableLogging
              : n.enableLogging = !1,
                "string" == typeof o.scope && (n.scope = o.scope),
                "number" == typeof o.messageReceiveTimeout &&o
                                    .messageReceiveTimeout > 0
                    ? n.messageReceiveTimeout = o.messageReceiveTimeout
                    : n.messageReceiveTimeout = 1e4
        }
        n.responseMode || (n.responseMode = "fragment"),
            n.responseType || (n.responseType = "code", n.flow = "standard");
        var s = _(), a = _();
        a.promise
            .then((function() {
              n.onReady && n.onReady(n.authenticated),
                  s.setSuccess(n.authenticated)
            }))
            .catch((function(e) { s.setError(e) }));
        var u = function(t) {
          var r, o = _();
          e ? "string" == typeof e && (r = e) : r = "keycloak.json";
          function i(e) {
            n.endpoints =
                e ? {
                  authorize : function() { return e.authorization_endpoint },
                  token : function() { return e.token_endpoint },
                  logout : function() {
                    if (!e.end_session_endpoint)
                      throw "Not supported by the OIDC server";
                    return e.end_session_endpoint
                  },
                  checkSessionIframe : function() {
                    if (!e.check_session_iframe)
                      throw "Not supported by the OIDC server";
                    return e.check_session_iframe
                  },
                  register : function() {
                    throw 'Redirection to "Register user" page not supported in standard OIDC mode'
                  },
                  userinfo : function() {
                    if (!e.userinfo_endpoint)
                      throw "Not supported by the OIDC server";
                    return e.userinfo_endpoint
                  }
                }
                  : {
                      authorize : function() {
                        return d() + "/protocol/openid-connect/auth"
                      },
                      token : function() {
                        return d() + "/protocol/openid-connect/token"
                      },
                      logout : function() {
                        return d() + "/protocol/openid-connect/logout"
                      },
                      checkSessionIframe : function() {
                        var e =
                            d() +
                            "/protocol/openid-connect/login-status-iframe.html";
                        return n.iframeVersion &&
                                   (e = e + "?version=" + n.iframeVersion),
                               e
                      },
                      thirdPartyCookiesIframe : function() {
                        var e =
                            d() +
                            "/protocol/openid-connect/3p-cookies/step1.html";
                        return n.iframeVersion &&
                                   (e = e + "?version=" + n.iframeVersion),
                               e
                      },
                      register : function() {
                        return d() + "/protocol/openid-connect/registrations"
                      },
                      userinfo : function() {
                        return d() + "/protocol/openid-connect/userinfo"
                      }
                    }
          }
          if (r) {
            (c = new XMLHttpRequest).open("GET", r, !0),
                c.setRequestHeader("Accept", "application/json"),
                c.onreadystatechange = function() {
                  if (4 == c.readyState)
                    if (200 == c.status || p(c)) {
                      var e = JSON.parse(c.responseText);
                      n.authServerUrl = e["auth-server-url"], n.realm = e.realm,
                      n.clientId = e.resource, i(null), o.setSuccess()
                    } else
                      o.setError()
                }, c.send()
          } else {
            if (!e.clientId)
              throw "clientId missing";
            n.clientId = e.clientId;
            var s = e.oidcProvider;
            if (s) {
              var a, c;
              if ("string" == typeof s)
                a = "/" == s.charAt(s.length - 1)
                        ? s + ".well-known/openid-configuration"
                        : s + "/.well-known/openid-configuration",
                (c = new XMLHttpRequest).open("GET", a, !0),
                c.setRequestHeader("Accept", "application/json"),
                c.onreadystatechange = function() {
                  4 == c.readyState &&
                      (200 == c.status || p(c)
                           ? (i(JSON.parse(c.responseText)), o.setSuccess())
                           : o.setError())
                }, c.send();
              else
                i(s), o.setSuccess()
            } else {
              if (!e.url)
                for (var u = document.getElementsByTagName("script"), l = 0;
                     l < u.length; l++)
                  if (u[l].src.match(/.*keycloak\.js/)) {
                    e.url =
                        u[l].src.substr(0, u[l].src.indexOf("/js/keycloak.js"));
                    break
                  }
              if (!e.realm)
                throw "realm missing";
              n.authServerUrl = e.url, n.realm = e.realm, i(null),
              o.setSuccess()
            }
          }
          return o.promise
        }();
        function l() {
          var e = function(e) {
            e || (r.prompt = "none"),
                n.login(r)
                    .then((function() { a.setSuccess() }))
                    .catch((function(e) { a.setError(e) }))
          }, t = function() {
            var e = document.createElement("iframe"), t = n.createLoginUrl({
              prompt : "none",
              redirectUri : n.silentCheckSsoRedirectUri
            });
            e.setAttribute("src", t),
                e.setAttribute("title", "keycloak-silent-check-sso"),
                e.style.display = "none", document.body.appendChild(e);
            var r = function(t) {
              t.origin === window.location.origin &&
                  e.contentWindow === t.source &&
                  (f(g(t.data), a), document.body.removeChild(e),
                   window.removeEventListener("message", r))
            };
            window.addEventListener("message", r)
          }, r = {};
          switch (o.onLoad) {
          case "check-sso":
            i.enable ? w().then((function() {
              b().then((function(r) {
                   r                             ? a.setSuccess()
                   : n.silentCheckSsoRedirectUri ? t()
                                                 : e(!1)
                 }))
                  .catch((function(e) { a.setError(e) }))
            }))
            : n.silentCheckSsoRedirectUri? t()
                     : e(!1);
            break;
          case "login-required":
            e(!0);
            break;
          default:
            throw "Invalid value for onLoad"
          }
        }
        function h() {
          var e = g(window.location.href);
          if (e && window.history.replaceState(window.history.state, null,
                                               e.newUrl),
              e && e.valid)
            return w()
                .then((function() { f(e, a) }))
                .catch((function(e) { a.setError(e) }));
          o ? o.token && o.refreshToken
                  ? (m(o.token, o.refreshToken, o.idToken),
                     i.enable ? w().then((function() {
                       b().then((function(e) {
                            e ? (n.onAuthSuccess && n.onAuthSuccess(),
                                 a.setSuccess(), S())
                              : a.setSuccess()
                          }))
                           .catch((function(e) { a.setError(e) }))
                     }))
                              : n.updateToken(-1)
                                    .then((function() {
                                      n.onAuthSuccess && n.onAuthSuccess(),
                                          a.setSuccess()
                                    }))
                                    .catch((function(e) {
                                      n.onAuthError && n.onAuthError(),
                                          o.onLoad ? l() : a.setError(e)
                                    })))
              : o.onLoad ? l()
                         : a.setSuccess()
                         : a.setSuccess()
        }
        return u.then((function() {
          (function() {
            var e = _(), t = function() {
              "interactive" !== document.readyState &&
                      "complete" !== document.readyState ||
                  (document.removeEventListener("readystatechange", t),
                   e.setSuccess())
            };
            return document.addEventListener("readystatechange", t), t(),
                   e.promise
          })().then(A)
              .then(h)
              .catch((function(e) { s.setError(e) }))
        })),
               u.catch((function(e) { s.setError(e) })), s.promise
      },
      n.login = function(e) { return t.login(e) },
      n.createLoginUrl =
          function(e) {
        var o, i = k(), s = k(), a = t.redirectUri(e),
               u = {state : i, nonce : s, redirectUri : encodeURIComponent(a)};
        e && e.prompt && (u.prompt = e.prompt),
            o = e && "register" == e.action ? n.endpoints.register()
                                            : n.endpoints.authorize();
        var l = e && e.scope || n.scope;
        l ? -1 === l.indexOf("openid") && (l = "openid " + l) : l = "openid";
        var d, f,
            p = o + "?client_id=" + encodeURIComponent(n.clientId) +
                "&redirect_uri=" + encodeURIComponent(a) +
                "&state=" + encodeURIComponent(i) +
                "&response_mode=" + encodeURIComponent(n.responseMode) +
                "&response_type=" + encodeURIComponent(n.responseType) +
                "&scope=" + encodeURIComponent(l);
        if (c && (p = p + "&nonce=" + encodeURIComponent(s)),
            e && e.prompt && (p += "&prompt=" + encodeURIComponent(e.prompt)),
            e && e.maxAge && (p += "&max_age=" + encodeURIComponent(e.maxAge)),
            e && e.loginHint &&
                (p += "&login_hint=" + encodeURIComponent(e.loginHint)),
            e && e.idpHint &&
                (p += "&kc_idp_hint=" + encodeURIComponent(e.idpHint)),
            e && e.action && "register" != e.action &&
                (p += "&kc_action=" + encodeURIComponent(e.action)),
            e && e.locale &&
                (p += "&ui_locales=" + encodeURIComponent(e.locale)),
            e && e.acr) {
          var m = (d = e.acr, f = {id_token : {acr : d}}, JSON.stringify(f));
          p += "&claims=" + encodeURIComponent(m)
        }
        if (n.pkceMethod) {
          var v = function(e) {
            return h(
                e,
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
          }(96);
          u.pkceCodeVerifier = v;
          var g = function(e, t) {
            if ("S256" === e) {
              var r = new Uint8Array(sha256.arrayBuffer(t));
              return base64Js.fromByteArray(r)
                  .replace(/\+/g, "-")
                  .replace(/\//g, "_")
                  .replace(/\=/g, "")
            }
            throw "Invalid value for pkceMethod"
          }(n.pkceMethod, v);
          p += "&code_challenge=" + g,
              p += "&code_challenge_method=" + n.pkceMethod
        }
        return r.add(u), p
      },
      n.logout = function(e) { return t.logout(e) },
      n.createLogoutUrl =
          function(e) {
        var r = n.endpoints.logout() +
                "?client_id=" + encodeURIComponent(n.clientId) +
                "&post_logout_redirect_uri=" +
                encodeURIComponent(t.redirectUri(e, !1));
        return n.idToken &&
                   (r += "&id_token_hint=" + encodeURIComponent(n.idToken)),
               r
      },
      n.register = function(e) { return t.register(e) },
      n.createRegisterUrl = function(e) {
        return e || (e = {}), e.action = "register", n.createLoginUrl(e)
      }, n.createAccountUrl = function(e) {
        var r = d(), o = void 0;
        return void 0 !== r &&
                   (o = r + "/account?referrer=" +
                        encodeURIComponent(n.clientId) + "&referrer_uri=" +
                        encodeURIComponent(t.redirectUri(e))),
               o
      }, n.accountManagement = function() {
        return t.accountManagement()
      }, n.hasRealmRole = function(e) {
        var t = n.realmAccess;
        return !!t && t.roles.indexOf(e) >= 0
      }, n.hasResourceRole = function(e, t) {
        if (!n.resourceAccess)
          return !1;
        var r = n.resourceAccess[t || n.clientId];
        return !!r && r.roles.indexOf(e) >= 0
      }, n.loadUserProfile = function() {
        var e = d() + "/account", t = new XMLHttpRequest;
        t.open("GET", e, !0), t.setRequestHeader("Accept", "application/json"),
            t.setRequestHeader("Authorization", "bearer " + n.token);
        var r = _();
        return t.onreadystatechange = function() {
          4 == t.readyState &&
              (200 == t.status ? (n.profile = JSON.parse(t.responseText),
                                  r.setSuccess(n.profile))
                               : r.setError())
        }, t.send(), r.promise
      }, n.loadUserInfo = function() {
        var e = n.endpoints.userinfo(), t = new XMLHttpRequest;
        t.open("GET", e, !0), t.setRequestHeader("Accept", "application/json"),
            t.setRequestHeader("Authorization", "bearer " + n.token);
        var r = _();
        return t.onreadystatechange = function() {
          4 == t.readyState &&
              (200 == t.status ? (n.userInfo = JSON.parse(t.responseText),
                                  r.setSuccess(n.userInfo))
                               : r.setError())
        }, t.send(), r.promise
      }, n.isTokenExpired = function(e) {
        if (!n.tokenParsed || !n.refreshToken && "implicit" != n.flow)
          throw "Not authenticated";
        if (null == n.timeSkew)
          return u("[KEYCLOAK] Unable to determine if token is expired as timeskew is not set"),
                 !0;
        var t = n.tokenParsed.exp - Math.ceil((new Date).getTime() / 1e3) +
                n.timeSkew;
        if (e) {
          if (isNaN(e))
            throw "Invalid minValidity";
          t -= e
        }
        return t < 0
      }, n.updateToken = function(e) {
        var t = _();
        if (!n.refreshToken)
          return t.setError(), t.promise;
        e = e || 5;
        var r = function() {
          var r = !1;
          if (-1 == e
                  ? (r = !0, u("[KEYCLOAK] Refreshing token: forced refresh"))
                  : n.tokenParsed && !n.isTokenExpired(e) ||
                        (r = !0,
                         u("[KEYCLOAK] Refreshing token: token expired")),
              r) {
            var i = "grant_type=refresh_token&refresh_token=" + n.refreshToken,
                s = n.endpoints.token();
            if (o.push(t), 1 == o.length) {
              var a = new XMLHttpRequest;
              a.open("POST", s, !0),
                  a.setRequestHeader("Content-type",
                                     "application/x-www-form-urlencoded"),
                  a.withCredentials = !0,
                  i += "&client_id=" + encodeURIComponent(n.clientId);
              var c = (new Date).getTime();
              a.onreadystatechange = function() {
                if (4 == a.readyState)
                  if (200 == a.status) {
                    u("[KEYCLOAK] Token refreshed"),
                        c = (c + (new Date).getTime()) / 2;
                    var e = JSON.parse(a.responseText);
                    m(e.access_token, e.refresh_token, e.id_token, c),
                        n.onAuthRefreshSuccess && n.onAuthRefreshSuccess();
                    for (var t = o.pop(); null != t; t = o.pop())
                      t.setSuccess(!0)
                  } else {
                    l("[KEYCLOAK] Failed to refresh token"),
                        400 == a.status && n.clearToken(),
                        n.onAuthRefreshError && n.onAuthRefreshError();
                    for (t = o.pop(); null != t; t = o.pop())
                      t.setError(!0)
                  }
              }, a.send(i)
            }
          } else
            t.setSuccess(!1)
        };
        i.enable ? b().then((function() { r() }))
                       .catch((function(e) { t.setError(e) }))
                 : r();
        return t.promise
      }, n.clearToken = function() {
        n.token && (m(null, null, null), n.onAuthLogout && n.onAuthLogout(),
                    n.loginRequired && n.login())
      };
      var E = function() {
        if (!(this instanceof E))
          return new E;
        localStorage.setItem("kc-test", "test"),
            localStorage.removeItem("kc-test");
        function e() {
          for (var e = (new Date).getTime(), t = 0; t < localStorage.length;
               t++) {
            var r = localStorage.key(t);
            if (r && 0 == r.indexOf("kc-callback-")) {
              var n = localStorage.getItem(r);
              if (n)
                try {
                  var o = JSON.parse(n).expires;
                  (!o || o < e) && localStorage.removeItem(r)
                } catch (e) {
                  localStorage.removeItem(r)
                }
            }
          }
        }
        this.get = function(t) {
          if (t) {
            var r = "kc-callback-" + t, n = localStorage.getItem(r);
            return n && (localStorage.removeItem(r), n = JSON.parse(n)), e(), n
          }
        }, this.add = function(t) {
          e();
          var r = "kc-callback-" + t.state;
          t.expires = (new Date).getTime() + 36e5,
          localStorage.setItem(r, JSON.stringify(t))
        }
      }, H = function() {
        if (!(this instanceof H))
          return new H;
        var e = this;
        e.get = function(e) {
          if (e) {
            var o = r("kc-callback-" + e);
            return n("kc-callback-" + e, "", t(-100)),
                   o ? JSON.parse(o) : void 0
          }
        }, e.add = function(e) {
          n("kc-callback-" + e.state, JSON.stringify(e), t(60))
        }, e.removeItem = function(e) { n(e, "", t(-100)) };
        var t = function(e) {
          var t = new Date;
          return t.setTime(t.getTime() + 60 * e * 1e3), t
        }, r = function(e) {
          for (var t = e + "=", r = document.cookie.split(";"), n = 0;
               n < r.length; n++) {
            for (var o = r[n]; " " == o.charAt(0);)
              o = o.substring(1);
            if (0 == o.indexOf(t))
              return o.substring(t.length, o.length)
          }
          return ""
        }, n = function(e, t, r) {
          var n = e + "=" + t + "; expires=" + r.toUTCString() + "; ";
          document.cookie = n
        }
      };
      function C(e) {
        return function() {
          n.enableLogging &&
              e.apply(console, Array.prototype.slice.call(arguments))
        }
      }
    }
    return Keycloak
  }));
//# sourceMappingURL=vendor/keycloak.min.js.map

var newbly = {
  init : function() {
    /*
     * GLOBAL VARIABLES
     * --------------------------------
     * These are the global variables used.
     */

    const release = "1.0.11"; // Current release version
    const stylesheet = `https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@${
        release}/lib/css/style.min.css`; // Link to hosted stylesheet
    const IEScript = `https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@${
        release}/lib/js/script.js`; // Link to hosted script compatible with IE
    // 11
    const editIconLink =
        `https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@${
            release}/assets/icons/edit-icon.svg`;
    const toastrStyle =
        `https://cdn.jsdelivr.net/gh/eunit99/newbly-translator@${
            release}/vendor/toastr.min.css`;

    /*
     * Include the stylesheet for Newbly in the head of the page
     */
    document.head.innerHTML +=
        `<link rel="stylesheet" href="${stylesheet}" type="text/css"/>`;

    /*
     * Provide support to legacy IE browser
     */

    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent))
      document.write(`<script src="${IEScript}"><\/script>`);

    /*
     * Include the toastr styles in the head of the page
     */
    document.head.innerHTML +=
        `<link rel="stylesheet" href="${toastrStyle}" type="text/css"/>`;

    /*
     * Get current page URL
     * --------------------------------------------------------------
     * function to return current page URL
     */

    function getPageURL() {
      let pageURL = window.location.href;
      return pageURL;
    }

    /*
     * KEYCLOAK ADAPTER
     * --------------------------------------------------------------
     * Keycloak is used to provide authentication service for user
     * If a user needs to submit their correction, then they must be
     * authenticated We use Keycloak to handle auth
     */

    const keycloak = Keycloak({
      realm : "newbly",
      "auth-server-url" : "https://sso.newb.ly/auth",
      "ssl-required" : "external",
      resource : "newbly",
      "public-client" : true,
      "confidential-port" : 0,
      url : `https://sso.newb.ly/auth/realms/newbly/protocol/openid-connect/auth?client_id=newbly-ui&redirect_uri=${
          getPageURL()}&state=addc88ed-299c-4a1b-b304-555bdffb8909&response_mode=fragment&response_type=code&scope=openid&nonce=e19093ff-fab9-4a80-80a8-99f9a979a836`,
      clientId : "newbly-api",
      "enable-cors" : true,
    });

    async function updateDOMContentWithLocalStorage() {
      let localStorageArticleContent = await getLocalStorageArticleContent();

      // Initialize these variables depending on if they exist on the local
      // storage
      let title;
      let content;

      if (localStorageArticleContent !== null) {
        title = localStorageArticleContent.title
      } else {
        title = "";
      };

      if (localStorageArticleContent !== null) {
        content = localStorageArticleContent.content
      } else {
        content = [];
      };

      // Replace the title with content from localStorage
      document.getElementById("newbly-translated-text-null").innerHTML = title;

      for (let i = 0; i < content.length; i++) {
        let currentElement =
            document.getElementById(`newbly-translated-text-${i}`);

        if (content[i] && currentElement) {
          document.getElementById(`newbly-translated-text-${i}`).innerHTML =
              content[i];
        }
      }
    }

    async function getArticleId() {
      let articleId = "";
      let fetchURL = newblyBackendAPI();
      let response = await fetch(fetchURL);
      let data = await response.json();

      if (response.ok) {
        articleId = data.articleId;

        return articleId;
      } else {
        console.error(
            "Something went wrong while contacting the Newbly server. Could not fetch articleId.");
        toastr.error(
            "Something went wrong while contacting the Newbly server. Could not fetch articleId.");
        return false;
      }
    }

    async function localStorageArticleKey() {
      let articleId = await getArticleId();
      let key =
          `${getLongBrowserLanguage().longLang.toLowerCase()}_${articleId}`;

      return key; // english_wu4Rqww7
    }

    async function setLocalStorageArticleContent(articleId, articleContent) {
      const key = await localStorageArticleKey();

      let localStorageArticleContent = await getLocalStorageArticleContent();

      // Initialize these variables depending on if they exist on the local
      // storage
      let title;
      let content;
      let suggestions;

      if (localStorageArticleContent !== null) {
        title = localStorageArticleContent.title
      } else {
        title = "";
      };

      if (localStorageArticleContent !== null) {
        content = localStorageArticleContent.content
      } else {
        content = [];
      };

      if (localStorageArticleContent !== null) {
        suggestions = localStorageArticleContent.suggestions
      } else {
        suggestions = [];
      };

      let value = {
        title : title,
        suggestions : suggestions,
        content : content,
      };

      // This part represent the article title since it is assigned an Id of
      // null
      if (articleId === null) {
        value.title = articleContent;
      }

      // This part corresponds to an acyual articleContent since we never
      // assigned articleId as null
      if (articleId !== null) {
        const index = articleId;

        // If suggestion has already been provided, then, replace that
        // suggestion with the new one
        if (value.content[articleId]) {
          value.content.splice(articleId, 1, articleContent);
          // Else add the suggestion to the array since it does not already
          // exist
        } else {
          value.content.push(articleContent);
        }
      }

      // Keep track of the number of suggestions done by the user
      value.suggestions.push(value.suggestions.length);

      // Set the value to localStorage
      localStorage.setItem(key, JSON.stringify(value));

      // function to replace DOM content with that from localStorage
      await updateDOMContentWithLocalStorage();
    }

    async function getLocalStorageArticleContent() {
      const key = await localStorageArticleKey();

      return JSON.parse(localStorage.getItem(key));
    }

    function setTranslationModalViewed() {
      localStorage.setItem("@translationModalViewed", true);
    }

    function getTranslationModalViewed() {
      return JSON.parse(localStorage.getItem("@translationModalViewed"));
    }

    async function replaceDOMContentWithCustomSuggestions() {
      let localStorageKey = await localStorageArticleKey();
      let articleId = await getArticleId();
      const generatedKey =
          `${getLongBrowserLanguage().longLang.toLowerCase()}_${articleId}`;

      if (localStorageKey === generatedKey) {
        // function to replace DOM content with that from localStorage
        await updateDOMContentWithLocalStorage();
      }
    }

    async function saveSuggestion(articleContentIndex, updatedTranslations) {
      /*
       * Get the articleId
       * The articleId is used to know which article we are sending a PATCH
       * request to
       */
      let articleId = await getArticleId();

      let payload = {
        articleContentIndex : articleContentIndex,
        articleTranslatedPartCorrection : updatedTranslations,
      };

      const options = {
        method : "PATCH",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json; charset=UTF-8",
          Authorization : "Bearer " + keycloak.token,
        },
        body : JSON.stringify(payload),
      };

      fetch(`https://api.newb.ly/articles/${articleId}/suggestion`, options)
          .then((data) => {
            if (!data.ok) {
              setSuggestionsSentToBackend(false);
              throw Error(data.status);
            }
            return data.json();
          })
          .then((response) => {
            console.info("The suggestion was successfully submitted!");
            toastr.success("The suggestion was successfully submitted!");
            setSuggestionsSentToBackend(true);
          })
          .catch((e) => {
            console.error("An error occurred: " + e);
            toastr.error("An error occurred");
            setSuggestionsSentToBackend(false);
          });
    }

    /*
     * This function loadData is called when the user is authenticated
     * If the user is not authenticated, this function will not be called
     * This function retrieves user details
     */
    const loadData = () => {
      if (keycloak.idToken) {
        // IDToken
        console.log(keycloak.idTokenParsed);
      } else {
        keycloak.loadUserProfile(
            function() {
              // Account Service
              console.log(keycloak.profile);
            },
            function() {
              console.log(
                  "Failed to retrieve user details. Please enable claims or account role");
            });
      }
    };

    /*
     * This function loadFailure is called when the user is not authenticated
     * If the user is authenticated, this  function will not be called
     */
    const loadFailure = () => {
      console.error("Failed to load data. Check console log");
      toastr.error("Failed to load data. Check console log");
    };

    const reloadData = () => {
      keycloak.updateToken(30).then(loadData).catch(() => {
        loadFailure();
        console.error("Failed to load data. User is logged out.");
        toastr.error("Failed to load data. User is logged out.");
      });
    };

    /*
     * ALL CURRENTLY SUPPORTED TRANSLATIONS
     * ----------------------------------------------------------------
     * This array contains a list of currently available
     * newBlyAvailableTranslations, update as necessary Please update as more
     * translations are available
     */

    var newBlyAvailableLanguageTranslations = [
      "ar", // Arabic
      // "bh", // Hindi
      "hr", // Croatian
      "en", // English
      "ro", // Romanian
      "ru", // Russian
      "sr", // Serbian
      "tr", // Turkish
      "uk", // Ukrainian
    ];

    /*
     * UI Modal languages
     *----------------------------------------------------------------
     * This newblyUIModalLanguages object corresponds to the translations of the
     *UI IF YOU ADD ADDITIONAL LANGUAGE SUPPORT TO THE
     *newBlyAvailableLanguageTranslations array, DO WELL UPDATE
     *newblyUIModalLanguages TOO
     */

    var newblyUIModalLanguages = {
      ar : {
        title : "الترجمات متوفرة لهذا المقال!",
        includeText : "تضمين الترجمة!",
        notThisTime : "ليس هذه المرة.",
        translationConsentText :
            "متصفحك باللغة العربية لذلك اعتقدنا أنك قد ترغب في تضمين ترجمات باللغة العربية لهذه المقالة.",
        saveChanges : "احفظ التغييرات",
        cancel : "يلغي",
        discardChanges : "تجاهل التغييرات",
        loginRegister : "دخولتسجيل",
        authTextOne : "رائع! لقد ساهمت بإصلاح خطأ في الترجمة!",
        authTextTwo :
            "لكي نتمكن من مراجعة اقتراحاتك ، عليك أولاً تسجيل الدخول. إذا لم يكن لديك حساب بعد ، فإن التسجيل سهل للغاية!",
        areYouSure : "هل أنت واثق؟",
      },
      bh : {
        title : "इस लेख के लिए अनुवाद उपलब्ध हैं!",
        includeText : "अनुवाद शामिल करें!",
        notThisTime : "इस समय नहीं।",
        translationConsentText :
            "आपका ब्राउज़र हिंदी में है इसलिए हमने सोचा कि आप इस लेख के लिए हिंदी में अनुवाद शामिल करना चाहेंगे।",
        saveChanges : "परिवर्तनों को सुरक्षित करें",
        cancel : "रद्द करना",
        discardChanges : "परिवर्तनों को निरस्त करें",
        loginRegister : "लॉग इन / रजिस्टर",
        authTextOne : "बहुत बढ़िया! आपने अनुवाद त्रुटि को ठीक करके योगदान दिया है!",
        authTextTwo :
            "हमारे लिए आपके सुझावों की समीक्षा करने के लिए, आपको पहले लॉग इन करना होगा। यदि आपके पास अभी तक कोई खाता नहीं है, तो साइन अप करना बहुत आसान है!",
        areYouSure : "क्या आपको यकीन है?",
      },
      en : {
        title : "Translations available for this article!",
        includeText : "Include translation!",
        notThisTime : "Not this time.",
        translationConsentText :
            "Your browser is in English so we thought you might want to include translations in English for this article.",
        saveChanges : "Save changes",
        cancel : "Cancel",
        discardChanges : "Discard changes",
        loginRegister : "Login / Register",
        authTextOne : "Awesome! You contributed by fixing a translation error!",
        authTextTwo :
            "In order for us to review your suggestions, you need first to log in. If you do not yet have an account, signing up is very easy!",
        areYouSure : "Are you sure?",
      },
      fr : {
        title : "Des traductions sont disponibles pour cet article !",
        includeText : "Inclure la traduction !",
        notThisTime : "Pas cette fois.",
        translationConsentText :
            "Votre navigateur est en français, nous avons donc pensé que vous voudriez peut-être inclure des traductions en français pour cet article.",
        saveChanges : "Sauvegarder les modifications",
        cancel : "Annuler",
        discardChanges : "Annuler les modifications",
        loginRegister : "Connexion ou Inscription",
        authTextOne :
            "Impressionnant! Vous avez contribué en corrigeant une erreur de traduction !",
        authTextTwo :
            "Pour que nous puissions examiner vos suggestions, vous devez d'abord vous connecter. Si vous n'avez pas encore de compte, l'inscription est très simple !",
        areYouSure : "Êtes-vous sûr?",
      },
      hr : {
        title : "Prijevodi su dostupni za ovaj članak!",
        includeText : "Uključi prijevod!",
        notThisTime : "Ne ovaj put.",
        translationConsentText :
            "Vaš preglednik je na hrvatskom pa smo mislili da biste mogli uključiti prijevode na hrvatski za ovaj članak.",
        saveChanges : "Spremi promjene",
        cancel : "Otkazati",
        discardChanges : "Odbaciti promjene",
        loginRegister : "Prijavite se ili se registrirajte",
        authTextOne :
            "Super! Doprinijeli ste ispravljanjem pogreške u prijevodu!",
        authTextTwo :
            "Kako bismo mogli pregledati vaše prijedloge, morate se prvo prijaviti. Ako još nemate račun, prijava je vrlo jednostavna!",
        areYouSure : "Jesi li siguran?",
      },
      ro : {
        title : "Sunt disponibile traduceri pentru acest articol!",
        includeText : "Includeți traducerea!",
        notThisTime : "Nu de data asta.",
        translationConsentText :
            "Browserul dvs. este în limba română, așa că ne-am gândit că ați dori să includeți traduceri în limba română pentru acest articol.",
        saveChanges : "Salvează modificările",
        cancel : "Anulare",
        discardChanges : "Renunțați la modificări",
        loginRegister : "Autentificați-vă sau înregistrați-vă",
        authTextOne :
            "Minunat! Ai contribuit prin remedierea unei erori de traducere!",
        authTextTwo :
            "Pentru ca noi să examinăm sugestiile dvs., trebuie mai întâi să vă conectați. Dacă nu aveți încă un cont, înregistrarea este foarte ușoară!",
        areYouSure : "Esti sigur?",
      },
      ru : {
        title : "Для этой статьи доступны переводы!",
        includeText : "Включите перевод!",
        notThisTime : "Не в этот раз.",
        translationConsentText :
            "Ваш браузер на русском языке, поэтому мы подумали, что вы, возможно, захотите включить русский перевод для этой статьи.",
        saveChanges : "Сохранить изменения",
        cancel : "Отмена",
        discardChanges : "Отменить изменения",
        loginRegister : "Войдите или зарегистрируйтесь",
        authTextOne :
            "Потрясающий! Вы внесли свой вклад, исправив ошибку перевода!",
        authTextTwo :
            "Чтобы мы рассмотрели ваши предложения, вам необходимо сначала войти в систему. Если у вас еще нет учетной записи, зарегистрироваться очень просто!",
        areYouSure : "Ты уверен?",
      },
      sr : {
        title : "Преводи су доступни за овај чланак!",
        includeText : "Укључи превод!",
        notThisTime : "Не овог пута.",
        translationConsentText :
            "Ваш претраживач је на српском, па смо мислили да бисте могли да укључите преводе на српски за овај чланак.",
        saveChanges : "Сачувај измене",
        cancel : "Поништити, отказати",
        discardChanges : "Одбаците промене",
        loginRegister : "Пријавите се или региструјте",
        authTextOne : "Сјајно! Ви сте допринели исправљањем грешке у преводу!",
        authTextTwo :
            "Да бисмо прегледали ваше предлоге, прво се морате пријавити. Ако још увек немате налог, регистрација је веома лака!",
        areYouSure : "Да ли сте сигурни?",
      },
      tr : {
        title : "Bu makale için çeviriler mevcuttur!",
        includeText : "Çeviri dahil!",
        notThisTime : "Bu sefer değil.",
        translationConsentText :
            "Tarayıcınız Türkçe olduğu için bu makaleye Türkçe çeviriler eklemek isteyebileceğinizi düşündük.",
        saveChanges : "Değişiklikleri Kaydet",
        cancel : "İptal",
        discardChanges : "Değişiklikleri gözardı et",
        loginRegister : "Giriş yap veya kaydol",
        authTextOne :
            "Mükemmel! Bir çeviri hatasını düzelterek katkıda bulundunuz!",
        authTextTwo :
            "Önerilerinizi inceleyebilmemiz için öncelikle giriş yapmanız gerekiyor. Henüz bir hesabınız yoksa üye olmak çok kolay!",
        areYouSure : "Emin misin?",
      },
      uk : {
        title : "Для цієї статті доступні переклади!",
        includeText : "Включіть переклад!",
        notThisTime : "Не цього разу.",
        translationConsentText :
            "Ваш веб-переглядач україномовний, тому ми подумали, що ви можете включити переклад українською для цієї статті.",
        saveChanges : "Зберегти зміни",
        cancel : "Скасувати",
        discardChanges : "Скасувати зміни",
        loginRegister : "Увійти або зареєструватися",
        authTextOne :
            "Чудово! Ви зробили свій внесок, виправивши помилку перекладу!",
        authTextTwo :
            "Щоб ми могли розглянути ваші пропозиції, вам потрібно спочатку ввійти. Якщо у вас ще немає облікового запису, зареєструватися дуже просто!",
        areYouSure : "Ти впевнений?",
      },
    };

    function getLongBrowserLanguage() {
      // This function provides translations of the Newbly Modal depending on
      // the shortLang, like fr, en, sr, ru

      let newblyUIModalLang = newblyUIModalLanguages, newblyModalTitle,
          newblyModalIncludeText, newblyModalCancelText,
          newblyTranslationConsentText, saveChanges, cancel, discardChanges,
          loginRegister, authTextOne, authTextTwo, areYouSure;

      switch (getShortBrowserLanguage()) {
      case "ar":
        longLang = "Arabic";
        newblyModalTitle = newblyUIModalLang.ar.title;
        newblyModalIncludeText = newblyUIModalLang.ar.includeText;
        newblyModalCancelText = newblyUIModalLang.ar.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.ar.translationConsentText;
        saveChanges = newblyUIModalLang.ar.saveChanges;
        cancel = newblyUIModalLang.ar.cancel;
        discardChanges = newblyUIModalLang.ar.discardChanges;
        loginRegister = newblyUIModalLang.ar.loginRegister;
        authTextOne = newblyUIModalLang.ar.authTextOne;
        authTextTwo = newblyUIModalLang.ar.authTextTwo;
        areYouSure = newblyUIModalLang.ar.areYouSure;
        break;
      case "bh":
        longLang = "Bihari";
        newblyModalTitle = newblyUIModalLang.bh.title;
        newblyModalIncludeText = newblyUIModalLang.bh.includeText;
        newblyModalCancelText = newblyUIModalLang.bh.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.bh.translationConsentText;
        saveChanges = newblyUIModalLang.bh.saveChanges;
        cancel = newblyUIModalLang.bh.cancel;
        discardChanges = newblyUIModalLang.bh.discardChanges;
        loginRegister = newblyUIModalLang.bh.loginRegister;
        authTextOne = newblyUIModalLang.bh.authTextOne;
        authTextTwo = newblyUIModalLang.bh.authTextTwo;
        areYouSure = newblyUIModalLang.bh.areYouSure;
        break;
      case "en":
        longLang = "English";
        newblyModalTitle = newblyUIModalLang.en.title;
        newblyModalIncludeText = newblyUIModalLang.en.includeText;
        newblyModalCancelText = newblyUIModalLang.en.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.en.translationConsentText;
        saveChanges = newblyUIModalLang.en.saveChanges;
        cancel = newblyUIModalLang.en.cancel;
        discardChanges = newblyUIModalLang.en.discardChanges;
        loginRegister = newblyUIModalLang.en.loginRegister;
        authTextOne = newblyUIModalLang.en.authTextOne;
        authTextTwo = newblyUIModalLang.en.authTextTwo;
        areYouSure = newblyUIModalLang.en.areYouSure;
        break;
      case "fr":
        longLang = "French";
        newblyModalTitle = newblyUIModalLang.fr.title;
        newblyModalIncludeText = newblyUIModalLang.fr.includeText;
        newblyModalCancelText = newblyUIModalLang.fr.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.fr.translationConsentText;
        saveChanges = newblyUIModalLang.fr.saveChanges;
        cancel = newblyUIModalLang.fr.cancel;
        discardChanges = newblyUIModalLang.fr.discardChanges;
        loginRegister = newblyUIModalLang.fr.loginRegister;
        authTextOne = newblyUIModalLang.fr.authTextOne;
        authTextTwo = newblyUIModalLang.fr.authTextTwo;
        areYouSure = newblyUIModalLang.fr.areYouSure;
        break;
      case "hr":
        longLang = "Croatian";
        newblyModalTitle = newblyUIModalLang.hr.title;
        newblyModalIncludeText = newblyUIModalLang.hr.includeText;
        newblyModalCancelText = newblyUIModalLang.hr.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.hr.translationConsentText;
        saveChanges = newblyUIModalLang.hr.saveChanges;
        cancel = newblyUIModalLang.hr.cancel;
        discardChanges = newblyUIModalLang.hr.discardChanges;
        loginRegister = newblyUIModalLang.hr.loginRegister;
        authTextOne = newblyUIModalLang.hr.authTextOne;
        authTextTwo = newblyUIModalLang.hr.authTextTwo;
        areYouSure = newblyUIModalLang.hr.areYouSure;
        break;
      case "ro":
        longLang = "Romanian";
        newblyModalTitle = newblyUIModalLang.ro.title;
        newblyModalIncludeText = newblyUIModalLang.ro.includeText;
        newblyModalCancelText = newblyUIModalLang.ro.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.ro.translationConsentText;
        saveChanges = newblyUIModalLang.ro.saveChanges;
        cancel = newblyUIModalLang.ro.cancel;
        discardChanges = newblyUIModalLang.ro.discardChanges;
        loginRegister = newblyUIModalLang.ro.loginRegister;
        authTextOne = newblyUIModalLang.ro.authTextOne;
        authTextTwo = newblyUIModalLang.ro.authTextTwo;
        areYouSure = newblyUIModalLang.ro.areYouSure;
        break;
      case "ru":
        longLang = "Russian";
        newblyModalTitle = newblyUIModalLang.ru.title;
        newblyModalIncludeText = newblyUIModalLang.ru.includeText;
        newblyModalCancelText = newblyUIModalLang.ru.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.ru.translationConsentText;
        saveChanges = newblyUIModalLang.ru.saveChanges;
        cancel = newblyUIModalLang.ru.cancel;
        discardChanges = newblyUIModalLang.ru.discardChanges;
        loginRegister = newblyUIModalLang.ru.loginRegister;
        authTextOne = newblyUIModalLang.ru.authTextOne;
        authTextTwo = newblyUIModalLang.ru.authTextTwo;
        areYouSure = newblyUIModalLang.ru.areYouSure;
        break;
      case "sr":
        longLang = "Serbian";
        newblyModalTitle = newblyUIModalLang.sr.title;
        newblyModalIncludeText = newblyUIModalLang.sr.includeText;
        newblyModalCancelText = newblyUIModalLang.sr.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.sr.translationConsentText;
        saveChanges = newblyUIModalLang.sr.saveChanges;
        cancel = newblyUIModalLang.sr.cancel;
        discardChanges = newblyUIModalLang.sr.discardChanges;
        loginRegister = newblyUIModalLang.sr.loginRegister;
        authTextOne = newblyUIModalLang.sr.authTextOne;
        authTextTwo = newblyUIModalLang.sr.authTextTwo;
        areYouSure = newblyUIModalLang.sr.areYouSure;
        break;
      case "tr":
        longLang = "Turkish";
        newblyModalTitle = newblyUIModalLang.tr.title;
        newblyModalIncludeText = newblyUIModalLang.tr.includeText;
        newblyModalCancelText = newblyUIModalLang.tr.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.tr.translationConsentText;
        saveChanges = newblyUIModalLang.uk.saveChanges;
        cancel = newblyUIModalLang.uk.cancel;
        discardChanges = newblyUIModalLang.uk.discardChanges;
        loginRegister = newblyUIModalLang.uk.loginRegister;
        authTextOne = newblyUIModalLang.uk.authTextOne;
        authTextTwo = newblyUIModalLang.uk.authTextTwo;
        areYouSure = newblyUIModalLang.tr.areYouSure;
        break;
      case "uk":
        longLang = "Ukrainian";
        newblyModalTitle = newblyUIModalLang.uk.title;
        newblyModalIncludeText = newblyUIModalLang.uk.includeText;
        newblyModalCancelText = newblyUIModalLang.uk.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.uk.translationConsentText;
        saveChanges = newblyUIModalLang.uk.saveChanges;
        cancel = newblyUIModalLang.uk.cancel;
        discardChanges = newblyUIModalLang.uk.discardChanges;
        loginRegister = newblyUIModalLang.uk.loginRegister;
        authTextOne = newblyUIModalLang.uk.authTextOne;
        authTextTwo = newblyUIModalLang.uk.authTextTwo;
        areYouSure = newblyUIModalLang.uk.areYouSure;
        break;
      default:
        longLang = "English";
        newblyModalTitle = newblyUIModalLang.en.title;
        newblyModalIncludeText = newblyUIModalLang.en.includeText;
        newblyModalCancelText = newblyUIModalLang.en.notThisTime;
        newblyTranslationConsentText =
            newblyUIModalLang.en.translationConsentText;
        saveChanges = newblyUIModalLang.en.saveChanges;
        cancel = newblyUIModalLang.en.cancel;
        discardChanges = newblyUIModalLang.en.discardChanges;
        loginRegister = newblyUIModalLang.en.loginRegister;
        authTextOne = newblyUIModalLang.en.authTextOne;
        authTextTwo = newblyUIModalLang.en.authTextTwo;
        areYouSure = newblyUIModalLang.en.areYouSure;
      }

      newblyUIModalLang = longLang;

      setLanguage(getShortBrowserLanguage(), longLang);

      return {
        longLang,
        newblyUIModalLang,
        newblyModalTitle,
        newblyTranslationConsentText,
        newblyModalIncludeText,
        newblyModalCancelText,
        saveChanges,
        cancel,
        discardChanges,
        loginRegister,
        authTextOne,
        authTextTwo,
        areYouSure,
      };
    }

    var append = {
      appendNewblyPromptModal : function() {
        const newblyPromptModal = `
        <div class="newbly-translation--ui-modal" id="newbly-translation--ui-modal">
              <div class="newbly-translation--ui-modal__title" id="newbly-translation--ui-modal__title"></div>

              <div class="newbly-translation--ui-modal__text" id="newbly-translation--ui-modal__text"></div>

              <div class="newbly-translation--ui-modal__btn-container">
                <button id="include-translation" class="newbly-translation--ui-modal__btn__btn"></button>

                <button id="cancel-translation" class="newbly-translation--ui-modal__btn__btn"></button>
              </div>
          </div>
      `;

        document.body.innerHTML += newblyPromptModal;
      },

      appendNewblyTextarea : function(contentIndex, content) {
        const textarea = `
          <div class="enhance-newbly modal-wrapper" id="newbly-textarea-modal-wrapper">
            <div class="enhance-newbly modal" id="">
              <div class="enhance-newbly editable-container" id="newbly-textarea-container">
                <div class="enhance-newbly edit-section">
                  <textarea
                  dir=${getTextDirection()}
                  class="enhance-newbly" spellcheck="false" id="enhance-translations">${
            content}</textarea>
                  <div class="enhance-newbly edit-buttons" id="">
                    <button class="enhance-newbly disabled" id="save-suggested-changes"></button>
                    <button class="enhance-newbly" id="cancel-changes"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

        document.body.innerHTML += textarea;

        // If shortBrowserLanguage is "ar", then add class ".arabic" to  modal
        if (getShortBrowserLanguage() === "ar") {
          document.getElementById("newbly-textarea-modal-wrapper")
              .classList.add("arabic");
        }

        // Add content depending on user's browser language
        document.getElementById("save-suggested-changes").innerText =
            getLongBrowserLanguage().saveChanges;
        document.getElementById("cancel-changes").innerText =
            getLongBrowserLanguage().cancel;

        /*
         * Initialize the modal buttons
         * This is needed so user can click on the cancel button
         * to cancel or close the modal
         */
        initModalBtns.newblyTextareaBtns(contentIndex, content);

        // Display the translationConsentText depending on user's browser
        // language
        document.getElementById("newbly-translation--ui-modal__text")
            .innerText = getLongBrowserLanguage().newblyTranslationConsentText;
      },

      appendNewblyConfirmationModal : function(contentIndex, content) {
        const confirmationPrompt = `
          <!-- Confirmation modal -->
          <div class="enhance-newbly modal-wrapper" id="newbly-enhance-confirmation-modal">
            <div class="enhance-newbly modal" id="">
              <div class="enhance-newbly editable-container" id="">
              <!-- Modal (Are you sure) -->
                <p class="enhance-newbly" id="are-you-sure"></p>
                <div class="enhance-newbly edit-buttons" id="">
                  <button class="enhance-newbly" id="close-newbly-enhance-textarea"></button>
                  <button class="enhance-newbly" id="close-newbly-modal"></button>
                </div>
              </div>
            </div>
          </div>
        `;

        document.body.innerHTML += confirmationPrompt;

        // If shortBrowserLanguage is "ar", then add class ".arabic" to  modal
        if (getShortBrowserLanguage() === "ar") {
          document.getElementById("newbly-enhance-confirmation-modal")
              .classList.add("arabic");
        }

        // Add content depending on user's browser language
        document.getElementById("are-you-sure").innerText =
            getLongBrowserLanguage().areYouSure;
        document.getElementById("close-newbly-enhance-textarea").innerText =
            getLongBrowserLanguage().discardChanges;
        document.getElementById("close-newbly-modal").innerText =
            getLongBrowserLanguage().cancel;

        document.getElementById("newbly-enhance-confirmation-modal")
            .style.display = "flex";

        // Initialize the buttons waiting for corresponding actions
        initModalBtns.newblyConfirmationBtns(contentIndex, content);
      },

      appendNewblyAuthenticationModal : function() {
        const authPrompt = `
          <!-- Authentication modal -->
          <div class="enhance-newbly modal-wrapper" id="enhance-newbly-auth-wrapper">
            <div class="enhance-newbly modal">
              <div class="enhance-newbly close-button" id="enhance-newbly-auth-wrapper-close-button"><svg fill="#b0adab" width="35" height="35" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z">
                  </path>
                </svg></div>
              <div class="enhance-newbly modal-content">
                <p class="enhance-newbly" id="enhance-newbly-auth-text-one"></p>
                <p class="enhance-newbly" id="enhance-newbly-auth-text-two"></p>
                  <button class="enhance-newbly login-button" id="enhance-newbly-auth-button"><span
                    class="enhance-newbly"></span>
                  </button>
              </div>
            </div>
          </div>
        `;

        document.body.innerHTML += authPrompt;

        document.getElementById("enhance-newbly-auth-wrapper").style.display =
            "flex";

        // If shortBrowserLanguage is "ar", then add class ".arabic" to  modal
        if (getShortBrowserLanguage() === "ar") {
          document.getElementById("enhance-newbly-auth-wrapper")
              .classList.add("arabic");
        }

        // Add content depending on user's browser language
        document.getElementById("enhance-newbly-auth-text-one").innerText =
            getLongBrowserLanguage().authTextOne;
        document.getElementById("enhance-newbly-auth-text-two").innerText =
            getLongBrowserLanguage().authTextTwo;
        document.getElementById("enhance-newbly-auth-button").innerText =
            getLongBrowserLanguage().loginRegister;

        // Initialize the buttons waiting for corresponding actions
        initModalBtns.newblyAuthModalBtns();
      },
    };

    /*
     * Call the appendNewblyPromptModal function to append the Newbly prompt
     * modal to the document
     */
    append.appendNewblyPromptModal();

    var enhanceNewbly = {
      editIconContainer : function(index, translatedText) {
        handleEditIconBtn(index, translatedText);

        /*
         * Append the editIcon to the container containing the translated text
         * fetchArticleTranslated currently calls this function
         */
        const editIcon = `
          <!-- Edit icons -->
          <span class="newbly-translated-text edit-icon" id="edit-icon-${
            index}">
            <img src="${editIconLink}" alt="Edit">
          </span>
          <!-- Edit icons -->
        `;

        return editIcon;
      },
    };

    var hideModals = {
      textareaModal : function() {
        document.getElementById("newbly-textarea-modal-wrapper").style.display =
            "none";
      },

      confirmationModal : function() {
        document.getElementById("newbly-enhance-confirmation-modal")
            .style.display = "none";
      },

      authenticationModal : function() {
        document.getElementById("enhance-newbly-auth-wrapper").style.display =
            "none";
      },

      NewblyTranslatorUIModal : function() {
        // Hide #newbly-translation--ui-modal"
        document.getElementById("newbly-translation--ui-modal").style.display =
            "none";
      },
    };

    var handleTextareaChange = function(translatedTextIndex, translatedText) {
      const textarea = document.getElementById("enhance-translations");
      const saveBtn = document.getElementById("save-suggested-changes");
      var isTextChange = false;
      let currentTextareaContent;

      textarea.addEventListener("input", function(e) {
        currentTextareaContent = e.target.value;

        if (currentTextareaContent !== translatedText) {
          saveBtn.classList.remove("disabled");
          isTextChange = true;

          /*
           * Set setSuggestionsSentToBackend to false because
           * This new suggestion has not been sent to the backend yet
           */
          setSuggestionsSentToBackend(false);
        } else {
          saveBtn.classList.add("disabled");
          isTextChange = false;
        }
      });

      return isTextChange;
    };

    var displayNewblyTextarea = function(translatedTextIndex, translatedText) {
      /*
       * Call the appendNewblyTextarea function to append the Newbly textarea to
       * the document Note that there is display: none in the styles for
       * .modal-wrapper by default
       */
      append.appendNewblyTextarea(translatedTextIndex, translatedText);

      // Change display styles to flex
      document.getElementById("newbly-textarea-modal-wrapper").style.display =
          "flex";

      handleTextareaChange(translatedTextIndex, translatedText);
    };

    var handleEditIconBtn = function(translatedTextIndex, translatedText) {
      let editIconId;

      if (translatedTextIndex === null) {
        /*
         * If translatedTextIndex is null, then, the edit-icon corresponds to
         * that of the articleTitle Article title does not have an
         * translatedTextIndex from the response received from the API,
         * remember?
         */
        editIconId = "edit-icon-null";
      } else {
        editIconId = `edit-icon-${translatedTextIndex}`;
      }

      setTimeout(() => {
        document.getElementById(editIconId)
            .addEventListener("click", function(e) {
              /*
               * Call displayNewblyTextarea in 1s to allow appending of editIcon
               * to the document when the edit icon is clicked So we can attach
               * an even to it
               */

              displayNewblyTextarea(translatedTextIndex, translatedText);
            });
      }, 1000);
    };

    function replaceTranslationWithCorrectedTranslation(
        contentIndex, currentTextareaContent) {
      const textId = `newbly-translated-text-${contentIndex}`;

      document.getElementById(textId).innerHTML = currentTextareaContent;
    }

    function getTargetLanguage() {
      let targetLanguage;
      let URLHasNLangParam;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      // Check if the target language is available in URL params
      if (urlParams.has("nLang") || urlParams.has("nlang")) {
        // Assign targetLanguage to "nLang" from the URL params if it exists
        targetLanguage = urlParams.get("nLang") || urlParams.get("nlang");

        // Set URLHasNLangParam to true since `nLang` exist in query string
        URLHasNLangParam = true;
      } else if (!urlParams.has("nLang") || !urlParams.has("nlang")) {
        // Assign "english" to the target language if URL does not have "nLang"
        targetLanguage = "english";

        // Set URLHasNLangParam to false since `nLang` does not exist in query
        // string
        URLHasNLangParam = false;
      }

      return {targetLanguage, URLHasNLangParam};
    }

    function isNewblyTranslationAvailable() {
      // if userBrowserLanguage is part of newBlyAvailableTranslations, then
      // translation is supported

      let isTranslationAvailable;

      for (let i = 0; i < newBlyAvailableLanguageTranslations.length; i++) {
        if (newBlyAvailableLanguageTranslations[i] ===
            getShortBrowserLanguage()) {
          isTranslationAvailable = true;
          console.log("Newbly translation is available for: " +
                      getLongBrowserLanguage().longLang);
        }
      }

      return isTranslationAvailable;
    }

    var getFirstBrowserLanguage = function() {
      var nav = window.navigator,
          browserLanguagePropertyKeys =
              [
                "language",
                "browserLanguage",
                "systemLanguage",
                "userLanguage",
              ],
          i, language;

      // support for HTML 5.1 "navigator.languages"
      if (Array.isArray(nav.languages)) {
        for (i = 0; i < nav.languages.length; i++) {
          language = nav.languages[i];
          if (language && language.length) {
            return language;
          }
        }
      }

      // support for other well known properties in browsers
      for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
        language = nav[browserLanguagePropertyKeys[i]];
        if (language && language.length) {
          return language;
        }
      }

      return null;
    };

    function getShortBrowserLanguage() {
      let browserLang = getFirstBrowserLanguage();

      let shortLang;

      if (browserLang.indexOf("-") !== -1) {
        shortLang = browserLang.split("-")[0];
      } else if (browserLang.indexOf("_") !== -1) {
        shortLang = browserLang.split("_")[0];
      } else {
        shortLang = browserLang;
      }

      return shortLang;
    }

    function setLanguage(shortLang, longLang) {
      let value = {code : shortLang, name : longLang, native : longLang};

      localStorage.setItem("@language", JSON.stringify(value));
    }

    function setSuggestionsSentToBackend(value) {
      localStorage.setItem("@suggestionsSent", value);
    }

    function isSuggestionsSentToBackend() {
      return JSON.parse(localStorage.getItem("@suggestionsSent"));
    }

    var displayNewblyTranslatorUIModal = function() {
      // Instantiate the isNewblyTranslatorUIDisplayed variable
      let isNewblyTranslatorUIDisplayed;

      // If targetLanguage is not specified in the URL query params, and if
      // Newbly translation is available, the display the translator modal
      if (!getTargetLanguage().URLHasNLangParam &&
          isNewblyTranslationAvailable()) {
        // Set the display property of #newbly-translation--ui-modal to "block"
        document.getElementById("newbly-translation--ui-modal").style.display =
            "block";

        // If shortBrowserLanguage is "ar", then add class ".arabic" to Newbly
        // consent modal
        if (getShortBrowserLanguage() === "ar") {
          document.getElementById("newbly-translation--ui-modal")
              .classList.add("arabic");
        }

        // Display the translationConsentText depending on user's browser
        // language
        document.getElementById("newbly-translation--ui-modal__text")
            .innerText = getLongBrowserLanguage().newblyTranslationConsentText;

        document.getElementById("newbly-translation--ui-modal__title")
            .innerText = getLongBrowserLanguage().newblyModalTitle;
        document.getElementById("include-translation").innerText =
            getLongBrowserLanguage().newblyModalIncludeText;
        document.getElementById("cancel-translation").innerText =
            getLongBrowserLanguage().newblyModalCancelText;

        // Initialize buttons on the Newbly translator prompt
        initNewblyTranslatorUIBtns.includeTranslation();
        initNewblyTranslatorUIBtns.cancelTranslations();

        isNewblyTranslatorUIDisplayed = true;
      } else if (!isNewblyTranslationAvailable()) {
        // If Newbly translation is not available for the browser language, then
        // log the error in the console
        console.error(
            "Newbly translation is not currently available for this page. Browser language is: " +
            getFirstBrowserLanguage());

        isNewblyTranslatorUIDisplayed = false;
      }

      return isNewblyTranslatorUIDisplayed;
    };

    var initNewblyTranslatorUIBtns = {
      includeTranslation : function() {
        var includeTranslationBtn =
            document.getElementById("include-translation");

        includeTranslationBtn.addEventListener("click", function(e) {
          /*
           * THIS FUNCTION IS RESPONSIBLE FOR THE TRANSLATION
           * ----------------------------------------------------------------
           * startNewblyTranslation() - Start fetching the translations from
           * the backend
           */

          startNewblyTranslation();

          console.info("Newbly translation started!");

          // Hide the Newbly translation modal prompt
          hideModals.NewblyTranslatorUIModal();

          /*
           * Call setTranslationModalViewed
           * ----------------------------------------------------------------
           * sets @translationModalViewed to true
           */
          setTranslationModalViewed();
        }); // Translation started
      },

      cancelTranslations : function() {
        var cancelTranslationBtn =
            document.getElementById("cancel-translation");

        cancelTranslationBtn.addEventListener("click", function(e) {
          console.info("Newbly translation cancelled");

          // Hide the Newbly translation modal prompt
          hideModals.NewblyTranslatorUIModal();
        }); // Translation cancelled
      },
    };

    function getURLToBackend() {
      // URL to be appended to the backend API
      let URLToBackend;
      let URLArray = getPageURL().split("?");
      let nonQueryPartURL = URLArray[0];
      let queryPartURL = URLArray[1];

      // If no query string (...) is provided, then assign URLToBackend to the
      // first part of the URLArray
      if (!queryPartURL) {
        // No query string specified in URL
        URLToBackend = URLArray[0];
      } else {
        function removeNLangParamsFromURL() {
          // URL returned after checks for nLang query string params
          let nLangContainedURL = URLArray[1];
          let strippedURL;

          // Query string specified in URL

          if (nLangContainedURL.includes(
                  `&nLang=${getTargetLanguage().targetLanguage}`)) {
            strippedURL = nLangContainedURL.replace(
                `&nLang=${getTargetLanguage().targetLanguage}`, "");
          } else if (nLangContainedURL.includes(
                         `?nLang=${getTargetLanguage().targetLanguage}`)) {
            strippedURL = nLangContainedURL.replace(
                `?nLang=${getTargetLanguage().targetLanguage}`, "");
          } else if (nLangContainedURL ===
                     `nLang=${getTargetLanguage().targetLanguage}`) {
            strippedURL = "";
          } else {
            strippedURL = nLangContainedURL;
          }

          return strippedURL;
        }

        function actualURLToBackend() {
          // If NLangParams === ""
          if (!removeNLangParamsFromURL()) {
            return nonQueryPartURL;
          } else {
            return nonQueryPartURL + "?" + removeNLangParamsFromURL();
          }
        }

        URLToBackend = actualURLToBackend();
      }

      return URLToBackend;
    }

    function newblyBackendAPI() {
      // This refers to the Newbly backend API URL for a specific article gotten
      // through the pageURL
      let API_URL;

      if (!getTargetLanguage().URLHasNLangParam) {
        API_URL = "https://api.newb.ly/articles/?language=" +
                  getLongBrowserLanguage().longLang.toLowerCase() +
                  "&url=" + getURLToBackend();
      } else {
        API_URL = "https://api.newb.ly/articles/?language=" +
                  getTargetLanguage().targetLanguage +
                  "&url=" + getURLToBackend()
      }

      return API_URL;
    }

    /*
     * Actions and activities that happen in the enhance modal
     * These functions control the displaying of the different modals depending
     * on the action taken from the different buttons These modals include the
     * textareaModal, confirmationModal, authenticationModal
     */
    var enhanceNewblyModalActions = {
      // cancel button
      handleTextareaCancelBtn : function(contentIndex, content) {
        hideModals.textareaModal();

        /*
         * Call the appendNewblyConfirmationModal function to append the Newbly
         * confirmation modal to the document if the textarea content did change
         * Note that there is display: none in the styles for .modal-wrapper by
         * default
         */
        append.appendNewblyConfirmationModal(content);
      },

      // Save changes button
      handleSaveChangesBtn : async function(contentIndex, content) {
        let currentTextareaContent =
            document.getElementById("enhance-translations").value;

        replaceTranslationWithCorrectedTranslation(contentIndex,
                                                   currentTextareaContent);

        /*
         * Call the setLocalStorageArticleContent to set the corresponding
         * currentTextareaContent to localStorage
         */
        await setLocalStorageArticleContent(contentIndex,
                                            currentTextareaContent);

        /*
         * Hide the textarea modal once button is clicked
         */
        hideModals.textareaModal();

        keycloak.init({onLoad : "check-sso", flow : "implicit"})
            .then(function(authenticated) {
              /*
               * Use Keycloak to check if user is authenticated
               * If authenticated, call saveSuggestion()
               * else call appendNewblyAuthenticationModal()
               */

              if (authenticated) {
                /*
                 * Check if this suggestion has not already been sent to backend
                 * If suggestion has not been sent,
                 * Then call the saveSuggestion function to send a PATCH reques
                 * Else do not call saveSuggestion function
                 */

                if (!isSuggestionsSentToBackend()) {
                  saveSuggestion(contentIndex, currentTextareaContent);
                }
              } else {
                /*
                 * Call appendNewblyAuthenticationModal() to append the
                 * authModal since user is not authenticated
                 */

                append.appendNewblyAuthenticationModal();
              }
            })
            .catch(function() {
              console.error("Failed to initialize Keycloak");
              toastr.error("Failed to initialize Keycloak");
            });
      },

      // cancel button in confirmation modal
      handleCancelConfirmationBtn : function(content) {
        hideModals.confirmationModal();

        displayNewblyTextarea();
      },

      // Discard changes button in confirmation modal upon click, will hide the
      // modal
      handleDiscardChangesBtn : function() {
        hideModals.textareaModal();
        hideModals.confirmationModal();

        // TODO Write a function to allow editBtn to still be clicked agin
        handleEditIconBtn(5, "translatedText");
      },

      handleCloseAuthModalBtn : function(e) {
        // Hide the textarea modal
        hideModals.textareaModal();

        // Hide the authentication prompt modal
        hideModals.authenticationModal();
      },

      handleAuthBtn : function(e) {
        // Hide the authentication prompt modal
        hideModals.authenticationModal();

        keycloak.init({onLoad : "login-required", flow : "implicit"});
      },
    };

    /*
     * Initialize buttons in the enhance modals such as texareaModal,
     * confirmationModal, authenticationModal, etc Depending upon the button
     * that was clicked, Call the corresponding function
     */

    var initModalBtns = {
      newblyTextareaBtns : function(contentIndex, content) {
        document.getElementById("cancel-changes")
            .addEventListener("click", function(e) {
              e.preventDefault();
              enhanceNewblyModalActions.handleTextareaCancelBtn(contentIndex,
                                                                content);
            });

        document.getElementById("save-suggested-changes")
            .addEventListener("click", function(e) {
              e.preventDefault();

              enhanceNewblyModalActions.handleSaveChangesBtn(contentIndex,
                                                             content);
            });
      },

      newblyConfirmationBtns : function(content) {
        document.getElementById("close-newbly-modal")
            .addEventListener("click", function(e) {
              e.preventDefault();
              enhanceNewblyModalActions.handleCancelConfirmationBtn(content);
            });

        document.getElementById("close-newbly-enhance-textarea")
            .addEventListener("click", function(e) {
              e.preventDefault();
              enhanceNewblyModalActions.handleDiscardChangesBtn(content);
            });
      },

      newblyAuthModalBtns : function() {
        document.getElementById("enhance-newbly-auth-wrapper-close-button")
            .addEventListener("click", function(e) {
              e.preventDefault();
              enhanceNewblyModalActions.handleCloseAuthModalBtn();
            });

        document.getElementById("enhance-newbly-auth-button")
            .addEventListener("click", function(e) {
              e.preventDefault();
              enhanceNewblyModalActions.handleAuthBtn();
            });
      },
    };

    var startNewblyTranslation = function(fetchURL) {
      let result = "";

      async function fetchArticleFromBackend(fetchURL) {
        let response = await fetch(fetchURL);
        let data = await response.json();

        if (response.ok) {
          return data;
        } else {
          console.error(
              "Something went wrong while contacting the Newbly server. Could not fetch translations.");
          toastr.error(
              "Something went wrong while contacting the Newbly server. Could not fetch translations.");

          return false;
        }
      }

      async function fetchFnc(fetchURL) {
        result = await fetchArticleFromBackend(fetchURL);
        fetchData(result);
      }

      fetchFnc(newblyBackendAPI());

      // Set the fetch data
      var fetchData = function(data) {
        /**
         * We only need to call the function `displayContentsFromBackendOnPage`
         * because we do not have the backend API on our index.html page which
         * will provide the the articles in array format
         */

        /**
         * Call the functions `fetchArticleTitle` and `fetchArticleContent`
         */

        fetchArticleTitle(data.articleTitle);
        fetchArticleContent(data.articleContent);

        return data;
      };

      var fetchArticleTitle = function(articleTitle) {
        if (doesTextExist(articleTitle)) {
          findContainerElement(articleTitle);
        }

        return articleTitle;
      };

      var fetchArticleContent = function(articleContent) {
        for (let i = 0; i < articleContent.length; i++) {
          if (doesTextExist(articleContent[i])) {
            findContainerElement(articleContent[i]);
          }
        }

        return articleContent;
      };

      var doesTextExist = function(searchString) {
        if (document.body.textContent.includes(searchString)) {
          console.info("Texts exist on page: " + searchString);

          return true;
        } else {
          console.error("Texts do not exist on page: " + searchString);

          return false;
        }
      };

      var findContainerElement = function(searchString) {
        // Find the container element where data is coming from and pass the
        // text

        // The possible tags which can contain the text to be appended the newly
        // translatedContent

        const elements = [
          "a",       "article", "b",      "div",     "h1",   "h2", "h3", "h4",
          "h5",      "h6",      "i",      "li",      "main", "ol", "p",  "q",
          "section", "span",    "strong", "summary", "u",    "ul",
        ];

        var matches = [];
        var container;

        for (let i = 0; i < elements.length; i++) {
          var element = elements[i];

          for (var element of document.querySelectorAll(element)) {
            if (element.textContent.includes(searchString)) {
              matches.push(element);
              container = matches[matches.length - 1];

              // Call this function to append the translations to the container
              // element

              getContainerAndContent(container, container.innerText);
            }
          }
        }

        return container, container.innerText;
      };

      var appendTranslation = function(id, container, translatedText) {
        /*
         * Use insertAdjacentHTML to insert the translatedText using HTML format
         * right a the articleTitle
         */

        container.insertAdjacentHTML(
            `beforeend`,
            `<p class='newbly-translated-text' id='newbly-translated-text-${
                id}'> ${translatedText}</p>`);

        /*
         *  Add RTL stylings if translation target language is arabic
         * This is done by adding the .arabic class
         */

        if (getTargetLanguage().targetLanguage === "arabic" ||
            getLongBrowserLanguage().longLang.toLowerCase() === "arabic") {
          const arTranslations =
              document.querySelectorAll(".newbly-translated-text");

          for (const arTranslation of arTranslations) {
            arTranslation.classList.add("arabic");
          }
        }
      };

      var getContainerAndContent = function(container) {
        var fetchArticleTranslated = function() {
          // For article Title

          var articleTitleTranslated = result.articleTitleTranslated;
          var articleTitle = result.articleTitle;

          // If the container innerText of the document matches with
          // articleTitle, the append articleTitleTranslated

          if (container.innerText === articleTitle) {
            /*
             * Use insertAdjacentHTML to insert the articleTitleTranslated using
             * HTML format right a the articleTitle null represent the index, we
             * shall use it to represent the id for the title
             */
            appendTranslation(null, container, articleTitleTranslated);

            /*
             * Append the editIcon to the container and pass null as an id and
             * articleTitleTranslated as parameters to it
             */
            container.insertAdjacentHTML(
                "beforeend",
                enhanceNewbly.editIconContainer(null, articleTitleTranslated));
          }

          // For article Content

          var articleContentTranslated = result.articleContentTranslated;
          var articleContent = result.articleContent;

          // Loop through array of articleContent and replace them article one
          // by one with the respective translated version

          for (let i = 0; i < articleContent.length; i++) {
            /*
             * If the container innerText  of the document matches with
             * articleContent[i], the append articleContentTranslated[i]
             */

            if (container.innerText === articleContent[i]) {
              /*
               * Use insertAdjacentHTML to insert the
               * articleContentTranslated[i] using HTML format right a the
               * articleTitle i represent the index, we shall use it to
               * differentialte the ids
               */

              appendTranslation(i, container, articleContentTranslated[i]);

              // Append the editIcon to container and pass the index of the
              // translatedContent and articleContentTranslated[i] as parameters
              // to it
              container.insertAdjacentHTML("beforeend",
                                           enhanceNewbly.editIconContainer(
                                               i, articleContentTranslated[i]));
            }
          }
        };

        fetchArticleTranslated();
      };

      /*
       * INITIALIZE KEYCLOAK
       * --------------------------------
       * Keycloak is initialized here since the user chose to include
       * translations on the webpage
       */

      keycloak.init({onLoad : "check-sso", flow : "implicit"}).then(reloadData);

      // call the function to automatically replace contents on the page with
      // custom suggestions
      replaceDOMContentWithCustomSuggestions();
    };

    function getTextDirection() {
      let textDirection;

      if (getShortBrowserLanguage() === "ar") {
        textDirection = "rtl";
      } else {
        textDirection = "ltr";
      }

      return textDirection;
    }

    console.log(
        "Newbly translation initialized. Learn more here: https://newb.ly/");
    console.info("Ξunit");

    /*
     * Controls wether to start translations or display the consent modal
     *----------------------------------------------------------------
     * If URLHasNLangParam === true, then start translations automatically
     * If URLHasNLangParam !== true, then start check for check if translation
     *modal has been viewed If translation modal has been viewed, start
     *translations automatically, else display the translation consent modal
     */

    if (getTargetLanguage().URLHasNLangParam) {
      /*
       * Call the function to start fetching translations from backend
       * Since the URL has nLang query parameter
       */
      startNewblyTranslation();
    } else if (getTranslationModalViewed()) {
      startNewblyTranslation();
    } else {
      // Call the displayNewblyTranslatorUIModal function to display the Newbly
      // prompt modal to suggest translation
      displayNewblyTranslatorUIModal();
    }
  },
};

// Initialize Newbly translation
newbly.init();
