/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */ ! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "2.2.4",
    n = function(a, b) {
      return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function(a, b) {
      return b.toUpperCase()
    };
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function() {
      return e.call(this)
    },
    get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
    },
    pushStack: function(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function(a) {
      return n.each(this, a)
    },
    map: function(a) {
      return this.pushStack(n.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function() {
      return this.pushStack(e.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (a = arguments[h]))
        for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {
      throw new Error(a)
    },
    noop: function() {},
    isFunction: function(a) {
      return "function" === n.type(a)
    },
    isArray: Array.isArray,
    isWindow: function(a) {
      return null != a && a === a.window
    },
    isNumeric: function(a) {
      var b = a && a.toString();
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
    },
    isPlainObject: function(a) {
      var b;
      if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
      if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
      for (b in a);
      return void 0 === b || k.call(a, b)
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
    },
    globalEval: function(a) {
      var b, c = eval;
      a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    },
    camelCase: function(a) {
      return a.replace(p, "ms-").replace(q, r)
    },
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function(a, b) {
      var c, d = 0;
      if (s(a)) {
        for (c = a.length; c > d; d++)
          if (b.call(a[d], d, a[d]) === !1) break
      } else
        for (d in a)
          if (b.call(a[d], d, a[d]) === !1) break;
      return a
    },
    trim: function(a) {
      return null == a ? "" : (a + "").replace(o, "")
    },
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
    },
    inArray: function(a, b, c) {
      return null == b ? -1 : h.call(b, a, c)
    },
    merge: function(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
      return a.length = e, a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, c) {
      var d, e, g = 0,
        h = [];
      if (s(a))
        for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
      else
        for (g in a) e = b(a[g], g, c), null != e && h.push(e);
      return f.apply([], h)
    },
    guid: 1,
    proxy: function(a, b) {
      var c, d, f;
      return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
        return a.apply(b || this, d.concat(e.call(arguments)))
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
    },
    now: Date.now,
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
    i["[object " + b + "]"] = b.toLowerCase()
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var t = function(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function(a, b) {
        return a === b && (l = !0), 0
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return c;
        return -1
      },
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
      O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function(a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      },
      da = function() {
        m()
      };
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
    } catch (ea) {
      H = {
        apply: E.length ? function(a, b) {
          G.apply(a, I.call(b))
        } : function(a, b) {
          var c = a.length,
            d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }

    function fa(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a)))
          if (f = o[1]) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
            while (h--) r[h] = l + " " + qa(r[h]);
            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d
          } catch (y) {} finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e)
    }

    function ga() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function ha(a) {
      return a[u] = !0, a
    }

    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b
    }

    function ka(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function la(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function ma(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function na(a) {
      return ha(function(b) {
        return b = +b, ha(function(c, d) {
          var e, f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }
    c = fa.support = {}, f = fa.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = fa.setDocument = function(a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ia(function(a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function(a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : []
        }
      }, d.filter.ID = function(a) {
        var b = a.replace(ba, ca);
        return function(a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function(a) {
        var b = a.replace(ba, ca);
        return function(a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
      } : function(a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ia(function(a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function(a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a) return !0;
        return !1
      }, B = b ? function(a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
      } : function(a, b) {
        if (a === b) return l = !0, 0;
        var c, d = 0,
          e = a.parentNode,
          f = b.parentNode,
          g = [a],
          h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = a;
        while (c = c.parentNode) g.unshift(c);
        c = b;
        while (c = c.parentNode) h.unshift(c);
        while (g[d] === h[d]) d++;
        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
      }, n) : n
    }, fa.matches = function(a, b) {
      return fa(a, null, null, b)
    }, fa.matchesSelector = function(a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0
    }, fa.contains = function(a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, fa.attr = function(a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, fa.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, fa.uniqueSort = function(a) {
      var b, d = [],
        e = 0,
        f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1)
      }
      return k = null, a
    }, e = fa.getText = function(a) {
      var b, c = "",
        d = 0,
        f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === f || 4 === f) return a.nodeValue
      } else
        while (b = a[d++]) c += e(b);
      return c
    }, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
        },
        PSEUDO: function(a) {
          var b, c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function() {
            return !0
          } : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
          })
        },
        ATTR: function(a, b, c) {
          return function(d) {
            var e = fa.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        },
        CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function(a) {
            return !!a.parentNode
          } : function(b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h,
              t = !1;
            if (q) {
              if (f) {
                while (p) {
                  m = b;
                  while (m = m[p])
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break
                  }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              return t -= e, t === d || t % d === 0 && t / d >= 0
            }
          }
        },
        PSEUDO: function(a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
            var d, f = e(a, b),
              g = f.length;
            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function(a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: ha(function(a) {
          var b = [],
            c = [],
            d = h(a.replace(Q, "$1"));
          return d[u] ? ha(function(a, b, c, e) {
            var f, g = d(a, null, e, []),
              h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function(a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
          }
        }),
        has: ha(function(a) {
          return function(b) {
            return fa(a, b).length > 0
          }
        }),
        contains: ha(function(a) {
          return a = a.replace(ba, ca),
            function(b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
            }
        }),
        lang: ha(function(a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
            function(b) {
              var c;
              do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function(a) {
          return a === o
        },
        focus: function(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function(a) {
          return a.disabled === !1
        },
        disabled: function(a) {
          return a.disabled === !0
        },
        checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function(a) {
          return !d.pseudos.empty(a)
        },
        header: function(a) {
          return Y.test(a.nodeName)
        },
        input: function(a) {
          return X.test(a.nodeName)
        },
        button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: na(function() {
          return [0]
        }),
        last: na(function(a, b) {
          return [b - 1]
        }),
        eq: na(function(a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: na(function(a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: na(function(a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: na(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: na(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = la(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = ma(b);

    function pa() {}
    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
    };

    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first ? function(b, c, f) {
        while (b = b[d])
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function(b, c, g) {
        var h, i, j, k = [w, f];
        if (g) {
          while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          while (b = b[d])
            if (1 === b.nodeType || e) {
              if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
              if (i[d] = k, k[2] = a(b, c, g)) return !0
            }
      }
    }

    function sa(a) {
      return a.length > 1 ? function(b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c
    }

    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      return g
    }

    function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          p = f || ta(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : ua(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
      })
    }

    function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
          return a === b
        }, h, !0), l = ra(function(a) {
          return J(b, a) > -1
        }, h, !0), m = [function(a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e
        }]; f > i; i++)
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++)
              if (d.relative[a[e].type]) break;
            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
          }
          m.push(c)
        }
      return sa(m)
    }

    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function(f, g, h, i, k) {
          var l, o, q, r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;
          for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
            if (e && l) {
              o = 0, g || l.ownerDocument === n || (m(l), h = !p);
              while (q = a[o++])
                if (q(l, g || n, h)) {
                  i.push(l);
                  break
                }
              k && (w = y)
            }
            c && ((l = !q && l) && r--, f && t.push(l))
          }
          if (r += s, c && s !== r) {
            o = 0;
            while (q = b[o++]) q(t, u, g, h);
            if (f) {
              if (r > 0)
                while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u)
            }
            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
          }
          return k && (w = y, j = v), t
        };
      return c ? ha(f) : f
    }
    return h = fa.compile = function(a, b) {
      var c, d = [],
        e = [],
        f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, xa(e, d)), f.selector = a
      }
      return f
    }, i = fa.select = function(a, b, e, f) {
      var i, j, k, l, m, n = "function" == typeof a && a,
        o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        i = W.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
            break
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ia(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ja("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ia(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ja("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), ia(function(a) {
      return null == a.getAttribute("disabled")
    }) || ja(K, function(a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), fa
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = function(a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a)
        }
      return d
    },
    v = function(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return n.grep(a, function(a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function(a) {
      return h.call(b, a) > -1 !== c
    })
  }
  n.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
      return 1 === a.nodeType
    }))
  }, n.fn.extend({
    find: function(a) {
      var b, c = this.length,
        d = [],
        e = this;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
        for (b = 0; c > b; b++)
          if (n.contains(e[b], this)) return !0
      }));
      for (b = 0; c > b; b++) n.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    },
    filter: function(a) {
      return this.pushStack(z(this, a || [], !1))
    },
    not: function(a) {
      return this.pushStack(z(this, a || [], !0))
    },
    is: function(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
    }
  });
  var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = n.fn.init = function(a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || A, "string" == typeof a) {
        if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this
        }
        return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
    E = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.fn.extend({
    has: function(a) {
      var b = n(a, this),
        c = b.length;
      return this.filter(function() {
        for (var a = 0; c > a; a++)
          if (n.contains(this, b[a])) return !0
      })
    },
    closest: function(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
    },
    index: function(a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });

  function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a
  }
  n.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function(a) {
      return u(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {
      return u(a, "parentNode", c)
    },
    next: function(a) {
      return F(a, "nextSibling")
    },
    prev: function(a) {
      return F(a, "previousSibling")
    },
    nextAll: function(a) {
      return u(a, "nextSibling")
    },
    prevAll: function(a) {
      return u(a, "previousSibling")
    },
    nextUntil: function(a, b, c) {
      return u(a, "nextSibling", c)
    },
    prevUntil: function(a, b, c) {
      return u(a, "previousSibling", c)
    },
    siblings: function(a) {
      return v((a.parentNode || {}).firstChild, a)
    },
    children: function(a) {
      return v(a.firstChild)
    },
    contents: function(a) {
      return a.contentDocument || n.merge([], a.childNodes)
    }
  }, function(a, b) {
    n.fn[a] = function(c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function(a, c) {
      b[c] = !0
    }), b
  }
  n.Callbacks = function(a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b, c, d, e, f = [],
      g = [],
      h = -1,
      i = function() {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
      },
      j = {
        add: function() {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            n.each(b, function(b, c) {
              n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
            })
          }(arguments), c && !b && i()), this
        },
        remove: function() {
          return n.each(arguments, function(a, b) {
            var c;
            while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
          }), this
        },
        has: function(a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0
        },
        empty: function() {
          return f && (f = []), this
        },
        disable: function() {
          return e = g = [], f = c = "", this
        },
        disabled: function() {
          return !f
        },
        lock: function() {
          return e = g = [], c || (f = c = ""), this
        },
        locked: function() {
          return !!e
        },
        fireWith: function(a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
        },
        fire: function() {
          return j.fireWith(this, arguments), this
        },
        fired: function() {
          return !!d
        }
      };
    return j
  }, n.extend({
    Deferred: function(a) {
      var b = [
          ["resolve", "done", n.Callbacks("once memory"), "resolved"],
          ["reject", "fail", n.Callbacks("once memory"), "rejected"],
          ["notify", "progress", n.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function() {
            return c
          },
          always: function() {
            return e.done(arguments).fail(arguments), this
          },
          then: function() {
            var a = arguments;
            return n.Deferred(function(c) {
              n.each(b, function(b, f) {
                var g = n.isFunction(a[b]) && a[b];
                e[f[1]](function() {
                  var a = g && g.apply(this, arguments);
                  a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function(a) {
            return null != a ? n.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, n.each(b, function(a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {
      var b = 0,
        c = e.call(arguments),
        d = c.length,
        f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
        g = 1 === f ? a : n.Deferred(),
        h = function(a, b, c) {
          return function(d) {
            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
          }
        },
        i, j, k;
      if (d > 1)
        for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var I;
  n.fn.ready = function(a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {
      a ? n.readyWait++ : n.ready(!0)
    },
    ready: function(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
    }
  });

  function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
  }
  n.ready.promise = function(b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
  }, n.ready.promise();
  var K = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) K(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
          return j.call(n(a), c)
        })), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    L = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

  function M() {
    this.expando = n.expando + M.uid++
  }
  M.uid = 1, M.prototype = {
    register: function(a, b) {
      var c = b || {};
      return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
        value: c,
        writable: !0,
        configurable: !0
      }), a[this.expando]
    },
    cache: function(a) {
      if (!L(a)) return {};
      var b = a[this.expando];
      return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
        value: b,
        configurable: !0
      }))), b
    },
    set: function(a, b, c) {
      var d, e = this.cache(a);
      if ("string" == typeof b) e[b] = c;
      else
        for (d in b) e[d] = b[d];
      return e
    },
    get: function(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
    },
    access: function(a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    },
    remove: function(a, b) {
      var c, d, e, f = a[this.expando];
      if (void 0 !== f) {
        if (void 0 === b) this.register(a);
        else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
          while (c--) delete f[d[c]]
        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
      }
    },
    hasData: function(a) {
      var b = a[this.expando];
      return void 0 !== b && !n.isEmptyObject(b)
    }
  };
  var N = new M,
    O = new M,
    P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Q = /[A-Z]/g;

  function R(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
        } catch (e) {}
        O.set(a, b, c)
      } else c = void 0;
    return c
  }
  n.extend({
    hasData: function(a) {
      return O.hasData(a) || N.hasData(a)
    },
    data: function(a, b, c) {
      return O.access(a, b, c)
    },
    removeData: function(a, b) {
      O.remove(a, b)
    },
    _data: function(a, b, c) {
      return N.access(a, b, c)
    },
    _removeData: function(a, b) {
      N.remove(a, b)
    }
  }), n.fn.extend({
    data: function(a, b) {
      var c, d, e, f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;
          while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
          N.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function() {
        O.set(this, a)
      }) : K(this, function(b) {
        var c, d;
        if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
          if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
          if (c = R(f, d, void 0), void 0 !== c) return c
        } else d = n.camelCase(a), this.each(function() {
          var c = O.get(this, d);
          O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    },
    removeData: function(a) {
      return this.each(function() {
        O.remove(this, a)
      })
    }
  }), n.extend({
    queue: function(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
    },
    dequeue: function(a, b) {
      b = b || "fx";
      var c = n.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = n._queueHooks(a, b),
        g = function() {
          n.dequeue(a, b)
        };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function(a, b) {
      var c = b + "queueHooks";
      return N.get(a, c) || N.access(a, c, {
        empty: n.Callbacks("once memory").add(function() {
          N.remove(a, [b + "queue", c])
        })
      })
    }
  }), n.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
      })
    },
    dequeue: function(a) {
      return this.each(function() {
        n.dequeue(this, a)
      })
    },
    clearQueue: function(a) {
      return this.queue(a || "fx", [])
    },
    promise: function(a, b) {
      var c, d = 1,
        e = n.Deferred(),
        f = this,
        g = this.length,
        h = function() {
          --d || e.resolveWith(f, [f])
        };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    U = ["Top", "Right", "Bottom", "Left"],
    V = function(a, b) {
      return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };

  function W(a, b, c, d) {
    var e, f = 1,
      g = 20,
      h = d ? function() {
        return d.cur()
      } : function() {
        return n.css(a, b, "")
      },
      i = h(),
      j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;
      do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
    }
    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
  }
  var X = /^(?:checkbox|radio)$/i,
    Y = /<([\w:-]+)/,
    Z = /^$|\/(?:java|ecma)script/i,
    $ = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

  function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
  }

  function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
  }
  var ba = /<|&#?\w+;/;

  function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
      if (f = a[o], f || 0 === f)
        if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
        else if (ba.test(f)) {
      g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
      while (k--) g = g.lastChild;
      n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
    } else m.push(b.createTextNode(f));
    l.textContent = "", o = 0;
    while (f = m[o++])
      if (d && n.inArray(f, d) > -1) e && e.push(f);
      else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
      k = 0;
      while (f = g[k++]) Z.test(f.type || "") && c.push(f)
    }
    return l
  }! function() {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var da = /^key/,
    ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    fa = /^([^.]*)(?:\.(.+)|)/;

  function ga() {
    return !0
  }

  function ha() {
    return !1
  }

  function ia() {
    try {
      return d.activeElement
    } catch (a) {}
  }

  function ja(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) ja(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
    else if (!e) return a;
    return 1 === f && (g = e, e = function(a) {
      return n().off(a), g.apply(this, arguments)
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
      n.event.add(this, b, e, d, c)
    })
  }
  n.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
        }), b = (b || "").match(G) || [""], j = b.length;
        while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
      }
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
      if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;
        while (j--)
          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
            while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
          } else
            for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && N.remove(a, "handle events")
      }
    },
    dispatch: function(a) {
      a = n.event.fix(a);
      var b, c, d, f, g, h = [],
        i = e.call(arguments),
        j = (N.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
        for (; i !== this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({
              elem: i,
              handlers: d
            })
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {
        var c, e, f, g = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
      }
    },
    fix: function(a) {
      if (a[n.expando]) return a;
      var b, c, e, f = a.type,
        g = a,
        h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
      while (b--) c = e[b], a[c] = g[c];
      return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
        },
        _default: function(a) {
          return n.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    }
  }, n.removeEvent = function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c)
  }, n.Event = function(a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: ha,
    isPropagationStopped: ha,
    isImmediatePropagationStopped: ha,
    isSimulated: !1,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault()
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), n.fn.extend({
    on: function(a, b, c, d) {
      return ja(this, a, b, c, d)
    },
    one: function(a, b, c, d) {
      return ja(this, a, b, c, d, 1)
    },
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
        n.event.remove(this, a, c, b)
      })
    }
  });
  var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    la = /<script|<style|<link/i,
    ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
    na = /^true\/(.*)/,
    oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function ra(a) {
    var b = na.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function sa(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
      }
      O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
    }
  }

  function ta(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
  }

  function ua(a, b, c, d) {
    b = f.apply([], b);
    var e, g, h, i, j, k, m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
    });
    if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
      if (i)
        for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
    }
    return a
  }

  function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
    return a
  }
  n.extend({
    htmlPrefilter: function(a) {
      return a.replace(ka, "<$1></$2>")
    },
    clone: function(a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
        for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
        else sa(a, h);
      return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
    },
    cleanData: function(a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (L(c)) {
          if (b = c[N.expando]) {
            if (b.events)
              for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            c[N.expando] = void 0
          }
          c[O.expando] && (c[O.expando] = void 0)
        }
    }
  }), n.fn.extend({
    domManip: ua,
    detach: function(a) {
      return va(this, a, !0)
    },
    remove: function(a) {
      return va(this, a)
    },
    text: function(a) {
      return K(this, function(a) {
        return void 0 === a ? n.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
        })
      }, null, a, arguments.length)
    },
    append: function() {
      return ua(this, arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {
      return ua(this, arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function() {
      return ua(this, arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function() {
      return ua(this, arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
      return this
    },
    clone: function(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
        return n.clone(this, a, b)
      })
    },
    html: function(a) {
      return K(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {
      var a = [];
      return ua(this, arguments, function(b) {
        var c = this.parentNode;
        n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
      }, a)
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    n.fn[a] = function(a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var wa, xa = {
    HTML: "block",
    BODY: "block"
  };

  function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d
  }

  function za(a) {
    var b = d,
      c = xa[a];
    return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
  }
  var Aa = /^margin/,
    Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ca = function(b) {
      var c = b.ownerDocument.defaultView;
      return c && c.opener || (c = a), c.getComputedStyle(b)
    },
    Da = function(a, b, c, d) {
      var e, f, g = {};
      for (f in b) g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e
    },
    Ea = d.documentElement;
  ! function() {
    var b, c, e, f, g = d.createElement("div"),
      h = d.createElement("div");
    if (h.style) {
      h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

      function i() {
        h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
        var d = a.getComputedStyle(h);
        b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
      }
      n.extend(l, {
        pixelPosition: function() {
          return i(), b
        },
        boxSizingReliable: function() {
          return null == c && i(), c
        },
        pixelMarginRight: function() {
          return null == c && i(), e
        },
        reliableMarginLeft: function() {
          return null == c && i(), f
        },
        reliableMarginRight: function() {
          var b, c = h.appendChild(d.createElement("div"));
          return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
        }
      })
    }
  }();

  function Fa(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
  }

  function Ga(a, b) {
    return {
      get: function() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }
  var Ha = /^(none|table(?!-c[ea]).+)/,
    Ia = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ja = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ka = ["Webkit", "O", "Moz", "ms"],
    La = d.createElement("div").style;

  function Ma(a) {
    if (a in La) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ka.length;
    while (c--)
      if (a = Ka[c] + b, a in La) return a
  }

  function Na(a, b, c) {
    var d = T.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
  }

  function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    return g
  }

  function Pa(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ca(a),
      g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
      d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }

  function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = Fa(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = n.camelCase(b),
          i = a.style;
        return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
    }
  }), n.each(["height", "width"], function(a, b) {
    n.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
          return Pa(a, b, d)
        }) : Pa(a, b, d) : void 0
      },
      set: function(a, c, d) {
        var e, f = d && Ca(a),
          g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
        return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
      }
    }
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
      marginLeft: 0
    }, function() {
      return a.getBoundingClientRect().left
    })) + "px" : void 0
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
    return b ? Da(a, {
      display: "inline-block"
    }, Fa, [a, "marginRight"]) : void 0
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    n.cssHooks[a + b] = {
      expand: function(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
  }), n.fn.extend({
    css: function(a, b) {
      return K(this, function(a, b, c) {
        var d, e, f = {},
          g = 0;
        if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function() {
      return Qa(this, !0)
    },
    hide: function() {
      return Qa(this)
    },
    toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        V(this) ? n(this).show() : n(this).hide()
      })
    }
  });

  function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e)
  }
  n.Tween = Ra, Ra.prototype = {
    constructor: Ra,
    init: function(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
    },
    cur: function() {
      var a = Ra.propHooks[this.prop];
      return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
    },
    run: function(a) {
      var b, c = Ra.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
    }
  }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
    _default: {
      get: function(a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
      },
      set: function(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
      }
    }
  }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
    set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, n.easing = {
    linear: function(a) {
      return a
    },
    swing: function(a) {
      return .5 - Math.cos(a * Math.PI) / 2
    },
    _default: "swing"
  }, n.fx = Ra.prototype.init, n.fx.step = {};
  var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
    Va = /queueHooks$/;

  function Wa() {
    return a.setTimeout(function() {
      Sa = void 0
    }), Sa = n.now()
  }

  function Xa(a, b) {
    var c, d = 0,
      e = {
        height: a
      };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function Za(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this,
      m = {},
      o = a.style,
      p = a.nodeType && V(a),
      q = N.get(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i()
    }), h.unqueued++, l.always(function() {
      l.always(function() {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], Ua.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0
        }
        m[d] = q && q[d] || n.style(a, d)
      } else j = void 0;
    if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
        n(a).hide()
      }), l.done(function() {
        var b;
        N.remove(a, "fxshow");
        for (b in m) n.style(a, b, m[b])
      });
      for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function $a(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function _a(a, b, c) {
    var d, e, f = 0,
      g = _a.prefilters.length,
      h = n.Deferred().always(function() {
        delete i.elem
      }),
      i = function() {
        if (e) return !1;
        for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, {
          specialEasing: {},
          easing: n.easing._default
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Sa || Wa(),
        duration: c.duration,
        tweens: [],
        createTween: function(b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function(b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for ($a(k, j.opts.specialEasing); g > f; f++)
      if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }
  n.Animation = n.extend(_a, {
      tweeners: {
        "*": [function(a, b) {
          var c = this.createTween(a, b);
          return W(c.elem, a, T.exec(b), c), c
        }]
      },
      tweener: function(a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
      },
      prefilters: [Za],
      prefilter: function(a, b) {
        b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
      }
    }), n.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
      }, d
    }, n.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(V).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function(a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function() {
            var b = _a(this, n.extend({}, a), f);
            (e || N.get(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          !b && c || n.dequeue(this, a)
        })
      },
      finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b, c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
      var c = n.fn[b];
      n.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
      }
    }), n.each({
      slideDown: Xa("show"),
      slideUp: Xa("hide"),
      slideToggle: Xa("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(a, b) {
      n.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), n.timers = [], n.fx.tick = function() {
      var a, b = 0,
        c = n.timers;
      for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), Sa = void 0
    }, n.fx.timer = function(a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
      Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
      a.clearInterval(Ta), Ta = null
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function(b, c) {
      return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
        var e = a.setTimeout(c, b);
        d.stop = function() {
          a.clearTimeout(e)
        }
      })
    },
    function() {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
    }();
  var ab, bb = n.expr.attrHandle;
  n.fn.extend({
    attr: function(a, b) {
      return K(this, n.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        n.removeAttr(this, a)
      })
    }
  }), n.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
    },
    attrHooks: {
      type: {
        set: function(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    },
    removeAttr: function(a, b) {
      var c, d, e = 0,
        f = b && b.match(G);
      if (f && 1 === a.nodeType)
        while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    }
  }), ab = {
    set: function(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = bb[b] || n.find.attr;
    bb[b] = function(a, b, d) {
      var e, f;
      return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
    }
  });
  var cb = /^(?:input|select|textarea|button)$/i,
    db = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function(a, b) {
      return K(this, n.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {
      return this.each(function() {
        delete this[n.propFix[a] || a]
      })
    }
  }), n.extend({
    prop: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
        void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function(a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.optSelected || (n.propHooks.selected = {
    get: function(a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    },
    set: function(a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    n.propFix[this.toLowerCase()] = this
  });
  var eb = /[\t\r\n\f]/g;

  function fb(a) {
    return a.getAttribute && a.getAttribute("class") || ""
  }
  n.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h, i = 0;
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).addClass(a.call(this, b, fb(this)))
      });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++])
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;
            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            h = n.trim(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h, i = 0;
      if (n.isFunction(a)) return this.each(function(b) {
        n(this).removeClass(a.call(this, b, fb(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++])
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;
            while (f = b[g++])
              while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
            h = n.trim(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b)
      }) : this.each(function() {
        var b, d, e, f;
        if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];
          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
      })
    },
    hasClass: function(a) {
      var b, c, d = 0;
      b = " " + a + " ";
      while (c = this[d++])
        if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
      return !1
    }
  });
  var gb = /\r/g,
    hb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function(a) {
      var b, c, d, e = this[0]; {
        if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
            return null == a ? "" : a + ""
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
        }
      },
      select: {
        get: function(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b)
            }
          return g
        },
        set: function(a, b) {
          var c, d, e = a.options,
            f = n.makeArray(b),
            g = e.length;
          while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
          return c || (a.selectedIndex = -1), f
        }
      }
    }
  }), n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = {
      set: function(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
      }
    }, l.checkOn || (n.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var ib = /^(?:focusinfocus|focusoutblur)$/;
  n.extend(n.event, {
    trigger: function(b, c, e, f) {
      var g, h, i, j, l, m, o, p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
          i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
        }
        g = 0;
        while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
      }
    },
    simulate: function(a, b, c) {
      var d = n.extend(new n.Event, c, {
        type: a,
        isSimulated: !0
      });
      n.event.trigger(d, null, b)
    }
  }), n.fn.extend({
    trigger: function(a, b) {
      return this.each(function() {
        n.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    n.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }
  }), l.focusin = "onfocusin" in a, l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {
      n.event.simulate(b, a.target, n.event.fix(a))
    };
    n.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this,
          e = N.access(d, b);
        e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
      },
      teardown: function() {
        var d = this.ownerDocument || this,
          e = N.access(d, b) - 1;
        e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
      }
    }
  });
  var jb = a.location,
    kb = n.now(),
    lb = /\?/;
  n.parseJSON = function(a) {
    return JSON.parse(a + "")
  }, n.parseXML = function(b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = (new a.DOMParser).parseFromString(b, "text/xml")
    } catch (d) {
      c = void 0
    }
    return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
  };
  var mb = /#.*$/,
    nb = /([?&])_=[^&]*/,
    ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    qb = /^(?:GET|HEAD)$/,
    rb = /^\/\//,
    sb = {},
    tb = {},
    ub = "*/".concat("*"),
    vb = d.createElement("a");
  vb.href = jb.href;

  function wb(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function xb(a, b, c, d) {
    var e = {},
      f = a === tb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function yb(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a
  }

  function zb(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function Ab(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          }
      if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: jb.href,
      type: "GET",
      isLocal: pb.test(jb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ub,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
    },
    ajaxPrefilter: wb(sb),
    ajaxTransport: wb(tb),
    ajax: function(b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};
      var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
        o = m.context || m,
        p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
        q = n.Deferred(),
        r = n.Callbacks("once memory"),
        s = m.statusCode || {},
        t = {},
        u = {},
        v = 0,
        w = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (2 === v) {
              if (!h) {
                h = {};
                while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2]
              }
              b = h[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function() {
            return 2 === v ? g : null
          },
          setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return v || (a = u[c] = u[c] || a, t[a] = b), this
          },
          overrideMimeType: function(a) {
            return v || (m.mimeType = a), this
          },
          statusCode: function(a) {
            var b;
            if (a)
              if (2 > v)
                for (b in a) s[b] = [s[b], a[b]];
              else x.always(a[x.status]);
            return this
          },
          abort: function(a) {
            var b = a || w;
            return e && e.abort(b), z(0, b), this
          }
        };
      if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");
        try {
          j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
        } catch (y) {
          m.crossDomain = !0
        }
      }
      if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
      k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
      for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
      if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
      w = "abort";
      for (l in {
          success: 1,
          error: 1,
          complete: 1
        }) x[l](m[l]);
      if (e = xb(tb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
        m.async && m.timeout > 0 && (i = a.setTimeout(function() {
          x.abort("timeout")
        }, m.timeout));
        try {
          v = 1, e.send(t, z)
        } catch (y) {
          if (!(2 > v)) throw y;
          z(-1, y)
        }
      } else z(-1, "No Transport");

      function z(b, c, d, h) {
        var j, l, t, u, w, y = c;
        2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
      }
      return x
    },
    getJSON: function(a, b, c) {
      return n.get(a, b, c, "json")
    },
    getScript: function(a, b) {
      return n.get(a, void 0, b, "script")
    }
  }), n.each(["get", "post"], function(a, b) {
    n[b] = function(a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, n.isPlainObject(a) && a))
    }
  }), n._evalUrl = function(a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, n.fn.extend({
    wrapAll: function(a) {
      var b;
      return n.isFunction(a) ? this.each(function(b) {
        n(this).wrapAll(a.call(this, b))
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
        var a = this;
        while (a.firstElementChild) a = a.firstElementChild;
        return a
      }).append(this)), this)
    },
    wrapInner: function(a) {
      return n.isFunction(a) ? this.each(function(b) {
        n(this).wrapInner(a.call(this, b))
      }) : this.each(function() {
        var b = n(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function(a) {
      var b = n.isFunction(a);
      return this.each(function(c) {
        n(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
      }).end()
    }
  }), n.expr.filters.hidden = function(a) {
    return !n.expr.filters.visible(a)
  }, n.expr.filters.visible = function(a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
  };
  var Bb = /%20/g,
    Cb = /\[\]$/,
    Db = /\r?\n/g,
    Eb = /^(?:submit|button|image|reset|file)$/i,
    Fb = /^(?:input|select|textarea|keygen)/i;

  function Gb(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function(b, e) {
      c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== n.type(b)) d(a, b);
    else
      for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
  }
  n.param = function(a, b) {
    var c, d = [],
      e = function(a, b) {
        b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
      e(this.name, this.value)
    });
    else
      for (c in a) Gb(c, a[c], b, e);
    return d.join("&").replace(Bb, "+")
  }, n.fn.extend({
    serialize: function() {
      return n.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this
      }).filter(function() {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
      }).map(function(a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
          return {
            name: b.name,
            value: a.replace(Db, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(Db, "\r\n")
        }
      }).get()
    }
  }), n.ajaxSettings.xhr = function() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  };
  var Hb = {
      0: 200,
      1223: 204
    },
    Ib = n.ajaxSettings.xhr();
  l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
    var c, d;
    return l.cors || Ib && !b.crossDomain ? {
      send: function(e, f) {
        var g, h = b.xhr();
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
          for (g in b.xhrFields) h[g] = b.xhrFields[g];
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
        for (g in e) h.setRequestHeader(g, e[g]);
        c = function(a) {
          return function() {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
              binary: h.response
            } : {
              text: h.responseText
            }, h.getAllResponseHeaders()))
          }
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
          4 === h.readyState && a.setTimeout(function() {
            c && d()
          })
        }, c = c("abort");
        try {
          h.send(b.hasContent && b.data || null)
        } catch (i) {
          if (c) throw i
        }
      },
      abort: function() {
        c && c()
      }
    } : void 0
  }), n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(a) {
        return n.globalEval(a), a
      }
    }
  }), n.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), n.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function(e, f) {
          b = n("<script>").prop({
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", c = function(a) {
            b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
          }), d.head.appendChild(b[0])
        },
        abort: function() {
          c && c()
        }
      }
    }
  });
  var Jb = [],
    Kb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = Jb.pop() || n.expando + "_" + kb++;
      return this[a] = !0, a
    }
  }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
      return g || n.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
      g = arguments
    }, d.always(function() {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), n.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || d;
    var e = x.exec(a),
      f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
  };
  var Lb = n.fn.load;
  n.fn.load = function(a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function(a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
    }).always(c && function(a, b) {
      g.each(function() {
        c.apply(this, f || [a.responseText, b, a])
      })
    }), this
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    n.fn[b] = function(a) {
      return this.on(b, a)
    }
  }), n.expr.filters.animated = function(a) {
    return n.grep(n.timers, function(b) {
      return a === b.elem
    }).length
  };

  function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
  }
  n.offset = {
    setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, n.fn.extend({
    offset: function(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function(b) {
        n.offset.setOffset(this, a, b)
      });
      var b, c, d = this[0],
        e = {
          top: 0,
          left: 0
        },
        f = d && d.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e
    },
    position: function() {
      if (this[0]) {
        var a, b, c = this[0],
          d = {
            top: 0,
            left: 0
          };
        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - d.top - n.css(c, "marginTop", !0),
          left: b.left - d.left - n.css(c, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var a = this.offsetParent;
        while (a && "static" === n.css(a, "position")) a = a.offsetParent;
        return a || Ea
      })
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = "pageYOffset" === b;
    n.fn[a] = function(d) {
      return K(this, function(a, d, e) {
        var f = Mb(a);
        return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
      }, a, d, arguments.length)
    }
  }), n.each(["top", "left"], function(a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
    })
  }), n.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      n.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return K(this, function(b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.extend({
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {
      return this.off(a, null, b)
    },
    delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    },
    size: function() {
      return this.length
    }
  }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return n
  });
  var Nb = a.jQuery,
    Ob = a.$;
  return n.noConflict = function(b) {
    return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
  }, b || (a.jQuery = a.$ = n), n
});

/*! jQuery UI - v1.12.1 - 2016-09-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function(t) {
  function e(t) {
    for (var e = t.css("visibility");
      "inherit" === e;) t = t.parent(), e = t.css("visibility");
    return "hidden" !== e
  }

  function i(t) {
    for (var e, i; t.length && t[0] !== document;) {
      if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
      t = t.parent()
    }
    return 0
  }

  function s() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
  }

  function n(e) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e.on("mouseout", i, function() {
      t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
    }).on("mouseover", i, o)
  }

  function o() {
    t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
  }

  function a(e, i) {
    t.extend(e, i);
    for (var s in i) null == i[s] && (e[s] = i[s]);
    return e
  }

  function r(t) {
    return function() {
      var e = this.element.val();
      t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
    }
  }
  t.ui = t.ui || {}, t.ui.version = "1.12.1";
  var h = 0,
    l = Array.prototype.slice;
  t.cleanData = function(e) {
      return function(i) {
        var s, n, o;
        for (o = 0; null != (n = i[o]); o++) try {
          s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
        } catch (a) {}
        e(i)
      }
    }(t.cleanData), t.widget = function(e, i, s) {
      var n, o, a, r = {},
        h = e.split(".")[0];
      e = e.split(".")[1];
      var l = h + "-" + e;
      return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function(e) {
        return !!t.data(e, l)
      }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function(t, e) {
        return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
      }, t.extend(o, n, {
        version: s.version,
        _proto: t.extend({}, s),
        _childConstructors: []
      }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
        return t.isFunction(s) ? (r[e] = function() {
          function t() {
            return i.prototype[e].apply(this, arguments)
          }

          function n(t) {
            return i.prototype[e].apply(this, t)
          }
          return function() {
            var e, i = this._super,
              o = this._superApply;
            return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
          }
        }(), void 0) : (r[e] = s, void 0)
      }), o.prototype = t.widget.extend(a, {
        widgetEventPrefix: n ? a.widgetEventPrefix || e : e
      }, r, {
        constructor: o,
        namespace: h,
        widgetName: e,
        widgetFullName: l
      }), n ? (t.each(n._childConstructors, function(e, i) {
        var s = i.prototype;
        t.widget(s.namespace + "." + s.widgetName, o, i._proto)
      }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function(e) {
      for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
        for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
      return e
    }, t.widget.bridge = function(e, i) {
      var s = i.prototype.widgetFullName || e;
      t.fn[e] = function(n) {
        var o = "string" == typeof n,
          a = l.call(arguments, 1),
          r = this;
        return o ? this.length || "instance" !== n ? this.each(function() {
          var i, o = t.data(this, s);
          return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'")
        }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function() {
          var e = t.data(this, s);
          e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
        })), r
      }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
        classes: {},
        disabled: !1,
        create: null
      },
      _createWidget: function(e, i) {
        i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
          remove: function(t) {
            t.target === i && this.destroy()
          }
        }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
      },
      _getCreateOptions: function() {
        return {}
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function() {
        var e = this;
        this._destroy(), t.each(this.classesElementLookup, function(t, i) {
          e._removeClass(i, t)
        }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
      },
      _destroy: t.noop,
      widget: function() {
        return this.element
      },
      option: function(e, i) {
        var s, n, o, a = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof e)
          if (a = {}, s = e.split("."), e = s.shift(), s.length) {
            for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
            if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
            n[e] = i
          } else {
            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
            a[e] = i
          }
        return this._setOptions(a), this
      },
      _setOptions: function(t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this
      },
      _setOption: function(t, e) {
        return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
      },
      _setOptionClasses: function(e) {
        var i, s, n;
        for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
          element: s,
          keys: i,
          classes: e,
          add: !0
        })))
      },
      _setOptionDisabled: function(t) {
        this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
      },
      enable: function() {
        return this._setOptions({
          disabled: !1
        })
      },
      disable: function() {
        return this._setOptions({
          disabled: !0
        })
      },
      _classes: function(e) {
        function i(i, o) {
          var a, r;
          for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
        }
        var s = [],
          n = this;
        return e = t.extend({
          element: this.element,
          classes: this.options.classes || {}
        }, e), this._on(e.element, {
          remove: "_untrackClassesElement"
        }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
      },
      _untrackClassesElement: function(e) {
        var i = this;
        t.each(i.classesElementLookup, function(s, n) {
          -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
        })
      },
      _removeClass: function(t, e, i) {
        return this._toggleClass(t, e, i, !1)
      },
      _addClass: function(t, e, i) {
        return this._toggleClass(t, e, i, !0)
      },
      _toggleClass: function(t, e, i, s) {
        s = "boolean" == typeof s ? s : i;
        var n = "string" == typeof t || null === t,
          o = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: s
          };
        return o.element.toggleClass(this._classes(o), s), this
      },
      _on: function(e, i, s) {
        var n, o = this;
        "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
          function r() {
            return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
          }
          "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
          var h = s.match(/^([\w:-]*)\s*(.*)$/),
            l = h[1] + o.eventNamespace,
            c = h[2];
          c ? n.on(l, c, r) : i.on(l, r)
        })
      },
      _off: function(e, i) {
        i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
      },
      _delay: function(t, e) {
        function i() {
          return ("string" == typeof t ? s[t] : t).apply(s, arguments)
        }
        var s = this;
        return setTimeout(i, e || 0)
      },
      _hoverable: function(e) {
        this.hoverable = this.hoverable.add(e), this._on(e, {
          mouseenter: function(e) {
            this._addClass(t(e.currentTarget), null, "ui-state-hover")
          },
          mouseleave: function(e) {
            this._removeClass(t(e.currentTarget), null, "ui-state-hover")
          }
        })
      },
      _focusable: function(e) {
        this.focusable = this.focusable.add(e), this._on(e, {
          focusin: function(e) {
            this._addClass(t(e.currentTarget), null, "ui-state-focus")
          },
          focusout: function(e) {
            this._removeClass(t(e.currentTarget), null, "ui-state-focus")
          }
        })
      },
      _trigger: function(e, i, s) {
        var n, o, a = this.options[e];
        if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
          for (n in o) n in i || (i[n] = o[n]);
        return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
      }
    }, t.each({
      show: "fadeIn",
      hide: "fadeOut"
    }, function(e, i) {
      t.Widget.prototype["_" + e] = function(s, n, o) {
        "string" == typeof n && (n = {
          effect: n
        });
        var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
        n = n || {}, "number" == typeof n && (n = {
          duration: n
        }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
          t(this)[e](), o && o.call(s[0]), i()
        })
      }
    }), t.widget,
    function() {
      function e(t, e, i) {
        return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
      }

      function i(e, i) {
        return parseInt(t.css(e, i), 10) || 0
      }

      function s(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
          width: e.width(),
          height: e.height(),
          offset: {
            top: 0,
            left: 0
          }
        } : t.isWindow(i) ? {
          width: e.width(),
          height: e.height(),
          offset: {
            top: e.scrollTop(),
            left: e.scrollLeft()
          }
        } : i.preventDefault ? {
          width: 0,
          height: 0,
          offset: {
            top: i.pageY,
            left: i.pageX
          }
        } : {
          width: e.outerWidth(),
          height: e.outerHeight(),
          offset: e.offset()
        }
      }
      var n, o = Math.max,
        a = Math.abs,
        r = /left|center|right/,
        h = /top|center|bottom/,
        l = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        u = /%$/,
        d = t.fn.position;
      t.position = {
        scrollbarWidth: function() {
          if (void 0 !== n) return n;
          var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            o = s.children()[0];
          return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i
        },
        getScrollInfo: function(e) {
          var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
            o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
          return {
            width: o ? t.position.scrollbarWidth() : 0,
            height: n ? t.position.scrollbarWidth() : 0
          }
        },
        getWithinInfo: function(e) {
          var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType,
            o = !s && !n;
          return {
            element: i,
            isWindow: s,
            isDocument: n,
            offset: o ? t(e).offset() : {
              left: 0,
              top: 0
            },
            scrollLeft: i.scrollLeft(),
            scrollTop: i.scrollTop(),
            width: i.outerWidth(),
            height: i.outerHeight()
          }
        }
      }, t.fn.position = function(n) {
        if (!n || !n.of) return d.apply(this, arguments);
        n = t.extend({}, n);
        var u, p, f, g, m, _, v = t(n.of),
          b = t.position.getWithinInfo(n.within),
          y = t.position.getScrollInfo(b),
          w = (n.collision || "flip").split(" "),
          k = {};
        return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function() {
          var t, e, i = (n[this] || "").split(" ");
          1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
        }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function() {
          var s, r, h = t(this),
            l = h.outerWidth(),
            c = h.outerHeight(),
            d = i(this, "marginLeft"),
            _ = i(this, "marginTop"),
            x = l + d + i(this, "marginRight") + y.width,
            C = c + _ + i(this, "marginBottom") + y.height,
            D = t.extend({}, m),
            I = e(k.my, h.outerWidth(), h.outerHeight());
          "right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += I[0], D.top += I[1], s = {
            marginLeft: d,
            marginTop: _
          }, t.each(["left", "top"], function(e, i) {
            t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
              targetWidth: p,
              targetHeight: f,
              elemWidth: l,
              elemHeight: c,
              collisionPosition: s,
              collisionWidth: x,
              collisionHeight: C,
              offset: [u[0] + I[0], u[1] + I[1]],
              my: n.my,
              at: n.at,
              within: b,
              elem: h
            })
          }), n.using && (r = function(t) {
            var e = g.left - D.left,
              i = e + p - l,
              s = g.top - D.top,
              r = s + f - c,
              u = {
                target: {
                  element: v,
                  left: g.left,
                  top: g.top,
                  width: p,
                  height: f
                },
                element: {
                  element: h,
                  left: D.left,
                  top: D.top,
                  width: l,
                  height: c
                },
                horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
              };
            l > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u)
          }), h.offset(t.extend(D, {
            using: r
          }))
        })
      }, t.ui.position = {
        fit: {
          left: function(t, e) {
            var i, s = e.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              a = s.width,
              r = t.left - e.collisionPosition.marginLeft,
              h = n - r,
              l = r + e.collisionWidth - a - n;
            e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
          },
          top: function(t, e) {
            var i, s = e.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              a = e.within.height,
              r = t.top - e.collisionPosition.marginTop,
              h = n - r,
              l = r + e.collisionHeight - a - n;
            e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
          }
        },
        flip: {
          left: function(t, e) {
            var i, s, n = e.within,
              o = n.offset.left + n.scrollLeft,
              r = n.width,
              h = n.isWindow ? n.scrollLeft : n.offset.left,
              l = t.left - e.collisionPosition.marginLeft,
              c = l - h,
              u = l + e.collisionWidth - r - h,
              d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
              p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
              f = -2 * e.offset[0];
            0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > a(s)) && (t.left += d + p + f))
          },
          top: function(t, e) {
            var i, s, n = e.within,
              o = n.offset.top + n.scrollTop,
              r = n.height,
              h = n.isWindow ? n.scrollTop : n.offset.top,
              l = t.top - e.collisionPosition.marginTop,
              c = l - h,
              u = l + e.collisionHeight - r - h,
              d = "top" === e.my[1],
              p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
              f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
              g = -2 * e.offset[1];
            0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, (i > 0 || u > a(i)) && (t.top += p + f + g))
          }
        },
        flipfit: {
          left: function() {
            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
          },
          top: function() {
            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
          }
        }
      }
    }(), t.ui.position, t.extend(t.expr[":"], {
      data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
        return function(i) {
          return !!t.data(i, e)
        }
      }) : function(e, i, s) {
        return !!t.data(e, s[3])
      }
    }), t.fn.extend({
      disableSelection: function() {
        var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
        return function() {
          return this.on(t + ".ui-disableSelection", function(t) {
            t.preventDefault()
          })
        }
      }(),
      enableSelection: function() {
        return this.off(".ui-disableSelection")
      }
    });
  var c = "ui-effects-",
    u = "ui-effects-style",
    d = "ui-effects-animated",
    p = t;
  t.effects = {
      effect: {}
    },
    function(t, e) {
      function i(t, e, i) {
        var s = u[e.type] || {};
        return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
      }

      function s(i) {
        var s = l(),
          n = s._rgba = [];
        return i = i.toLowerCase(), f(h, function(t, o) {
          var a, r = o.re.exec(i),
            h = r && o.parse(r),
            l = o.space || "rgba";
          return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e
        }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
      }

      function n(t, e, i) {
        return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
      }
      var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        h = [{
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(t) {
            return [t[1], t[2], t[3], t[4]]
          }
        }, {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(t) {
            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
          }
        }, {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function(t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
          }
        }, {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function(t) {
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
          }
        }, {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space: "hsla",
          parse: function(t) {
            return [t[1], t[2] / 100, t[3] / 100, t[4]]
          }
        }],
        l = t.Color = function(e, i, s, n) {
          return new t.Color.fn.parse(e, i, s, n)
        },
        c = {
          rgba: {
            props: {
              red: {
                idx: 0,
                type: "byte"
              },
              green: {
                idx: 1,
                type: "byte"
              },
              blue: {
                idx: 2,
                type: "byte"
              }
            }
          },
          hsla: {
            props: {
              hue: {
                idx: 0,
                type: "degrees"
              },
              saturation: {
                idx: 1,
                type: "percent"
              },
              lightness: {
                idx: 2,
                type: "percent"
              }
            }
          }
        },
        u = {
          "byte": {
            floor: !0,
            max: 255
          },
          percent: {
            max: 1
          },
          degrees: {
            mod: 360,
            floor: !0
          }
        },
        d = l.support = {},
        p = t("<p>")[0],
        f = t.each;
      p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
        e.cache = "_" + t, e.props.alpha = {
          idx: 3,
          type: "percent",
          def: 1
        }
      }), l.fn = t.extend(l.prototype, {
        parse: function(n, a, r, h) {
          if (n === e) return this._rgba = [null, null, null, null], this;
          (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
          var u = this,
            d = t.type(n),
            p = this._rgba = [];
          return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
            p[e.idx] = i(n[e.idx], e)
          }), this) : "object" === d ? (n instanceof l ? f(c, function(t, e) {
            n[e.cache] && (u[e.cache] = n[e.cache].slice())
          }) : f(c, function(e, s) {
            var o = s.cache;
            f(s.props, function(t, e) {
              if (!u[o] && s.to) {
                if ("alpha" === t || null == n[t]) return;
                u[o] = s.to(u._rgba)
              }
              u[o][e.idx] = i(n[t], e, !0)
            }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
          }), this) : e
        },
        is: function(t) {
          var i = l(t),
            s = !0,
            n = this;
          return f(c, function(t, o) {
            var a, r = i[o.cache];
            return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function(t, i) {
              return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
            })), s
          }), s
        },
        _space: function() {
          var t = [],
            e = this;
          return f(c, function(i, s) {
            e[s.cache] && t.push(i)
          }), t.pop()
        },
        transition: function(t, e) {
          var s = l(t),
            n = s._space(),
            o = c[n],
            a = 0 === this.alpha() ? l("transparent") : this,
            r = a[o.cache] || o.to(a._rgba),
            h = r.slice();
          return s = s[o.cache], f(o.props, function(t, n) {
            var o = n.idx,
              a = r[o],
              l = s[o],
              c = u[n.type] || {};
            null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)))
          }), this[n](h)
        },
        blend: function(e) {
          if (1 === this._rgba[3]) return this;
          var i = this._rgba.slice(),
            s = i.pop(),
            n = l(e)._rgba;
          return l(t.map(i, function(t, e) {
            return (1 - s) * n[e] + s * t
          }))
        },
        toRgbaString: function() {
          var e = "rgba(",
            i = t.map(this._rgba, function(t, e) {
              return null == t ? e > 2 ? 1 : 0 : t
            });
          return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
        },
        toHslaString: function() {
          var e = "hsla(",
            i = t.map(this.hsla(), function(t, e) {
              return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
            });
          return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
        },
        toHexString: function(e) {
          var i = this._rgba.slice(),
            s = i.pop();
          return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
          }).join("")
        },
        toString: function() {
          return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
      }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e, i, s = t[0] / 255,
          n = t[1] / 255,
          o = t[2] / 255,
          a = t[3],
          r = Math.max(s, n, o),
          h = Math.min(s, n, o),
          l = r - h,
          c = r + h,
          u = .5 * c;
        return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
      }, c.hsla.from = function(t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e = t[0] / 360,
          i = t[1],
          s = t[2],
          o = t[3],
          a = .5 >= s ? s * (1 + i) : s + i - s * i,
          r = 2 * s - a;
        return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
      }, f(c, function(s, n) {
        var o = n.props,
          a = n.cache,
          h = n.to,
          c = n.from;
        l.fn[s] = function(s) {
          if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
          var n, r = t.type(s),
            u = "array" === r || "object" === r ? s : arguments,
            d = this[a].slice();
          return f(o, function(t, e) {
            var s = u["object" === r ? t : e.idx];
            null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
          }), c ? (n = l(c(d)), n[a] = d, n) : l(d)
        }, f(o, function(e, i) {
          l.fn[e] || (l.fn[e] = function(n) {
            var o, a = t.type(n),
              h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
              l = this[h](),
              c = l[i.idx];
            return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
          })
        })
      }), l.hook = function(e) {
        var i = e.split(" ");
        f(i, function(e, i) {
          t.cssHooks[i] = {
            set: function(e, n) {
              var o, a, r = "";
              if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                  for (a = "backgroundColor" === i ? e.parentNode : e;
                    ("" === r || "transparent" === r) && a && a.style;) try {
                    r = t.css(a, "backgroundColor"), a = a.parentNode
                  } catch (h) {}
                  n = n.blend(r && "transparent" !== r ? r : "_default")
                }
                n = n.toRgbaString()
              }
              try {
                e.style[i] = n
              } catch (h) {}
            }
          }, t.fx.step[i] = function(e) {
            e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
          }
        })
      }, l.hook(a), t.cssHooks.borderColor = {
        expand: function(t) {
          var e = {};
          return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
            e["border" + s + "Color"] = t
          }), e
        }
      }, o = t.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
      }
    }(p),
    function() {
      function e(e) {
        var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
          o = {};
        if (n && n.length && n[0] && n[n[0]])
          for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
        else
          for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
        return o
      }

      function i(e, i) {
        var s, o, a = {};
        for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
        return a
      }
      var s = ["add", "remove", "toggle"],
        n = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1
        };
      t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
        t.fx.step[i] = function(t) {
          ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
        }
      }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }), t.effects.animateClass = function(n, o, a, r) {
        var h = t.speed(o, a, r);
        return this.queue(function() {
          var o, a = t(this),
            r = a.attr("class") || "",
            l = h.children ? a.find("*").addBack() : a;
          l = l.map(function() {
            var i = t(this);
            return {
              el: i,
              start: e(this)
            }
          }), o = function() {
            t.each(s, function(t, e) {
              n[e] && a[e + "Class"](n[e])
            })
          }, o(), l = l.map(function() {
            return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
          }), a.attr("class", r), l = l.map(function() {
            var e = this,
              i = t.Deferred(),
              s = t.extend({}, h, {
                queue: !1,
                complete: function() {
                  i.resolve(e)
                }
              });
            return this.el.animate(this.diff, s), i.promise()
          }), t.when.apply(t, l.get()).done(function() {
            o(), t.each(arguments, function() {
              var e = this.el;
              t.each(this.diff, function(t) {
                e.css(t, "")
              })
            }), h.complete.call(a[0])
          })
        })
      }, t.fn.extend({
        addClass: function(e) {
          return function(i, s, n, o) {
            return s ? t.effects.animateClass.call(this, {
              add: i
            }, s, n, o) : e.apply(this, arguments)
          }
        }(t.fn.addClass),
        removeClass: function(e) {
          return function(i, s, n, o) {
            return arguments.length > 1 ? t.effects.animateClass.call(this, {
              remove: i
            }, s, n, o) : e.apply(this, arguments)
          }
        }(t.fn.removeClass),
        toggleClass: function(e) {
          return function(i, s, n, o, a) {
            return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
              add: i
            } : {
              remove: i
            }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
              toggle: i
            }, s, n, o)
          }
        }(t.fn.toggleClass),
        switchClass: function(e, i, s, n, o) {
          return t.effects.animateClass.call(this, {
            add: i,
            remove: e
          }, s, n, o)
        }
      })
    }(),
    function() {
      function e(e, i, s, n) {
        return t.isPlainObject(e) && (i = e, e = e.effect), e = {
          effect: e
        }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
      }

      function i(e) {
        return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
      }

      function s(t, e) {
        var i = e.outerWidth(),
          s = e.outerHeight(),
          n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
          o = n.exec(t) || ["", 0, i, s, 0];
        return {
          top: parseFloat(o[1]) || 0,
          right: "auto" === o[2] ? i : parseFloat(o[2]),
          bottom: "auto" === o[3] ? s : parseFloat(o[3]),
          left: parseFloat(o[4]) || 0
        }
      }
      t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
        return function(i) {
          return !!t(i).data(d) || e(i)
        }
      }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
        save: function(t, e) {
          for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(c + e[i], t[0].style[e[i]])
        },
        restore: function(t, e) {
          for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(c + e[s]), t.css(e[s], i))
        },
        setMode: function(t, e) {
          return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
        },
        createWrapper: function(e) {
          if (e.parent().is(".ui-effects-wrapper")) return e.parent();
          var i = {
              width: e.outerWidth(!0),
              height: e.outerHeight(!0),
              "float": e.css("float")
            },
            s = t("<div></div>").addClass("ui-effects-wrapper").css({
              fontSize: "100%",
              background: "transparent",
              border: "none",
              margin: 0,
              padding: 0
            }),
            n = {
              width: e.width(),
              height: e.height()
            },
            o = document.activeElement;
          try {
            o.id
          } catch (a) {
            o = document.body
          }
          return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
            position: "relative"
          }), e.css({
            position: "relative"
          })) : (t.extend(i, {
            position: e.css("position"),
            zIndex: e.css("z-index")
          }), t.each(["top", "left", "bottom", "right"], function(t, s) {
            i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
          }), e.css({
            position: "relative",
            top: 0,
            left: 0,
            right: "auto",
            bottom: "auto"
          })), e.css(n), s.css(i).show()
        },
        removeWrapper: function(e) {
          var i = document.activeElement;
          return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
        }
      }), t.extend(t.effects, {
        version: "1.12.1",
        define: function(e, i, s) {
          return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
        },
        scaledDimensions: function(t, e, i) {
          if (0 === e) return {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
          };
          var s = "horizontal" !== i ? (e || 100) / 100 : 1,
            n = "vertical" !== i ? (e || 100) / 100 : 1;
          return {
            height: t.height() * n,
            width: t.width() * s,
            outerHeight: t.outerHeight() * n,
            outerWidth: t.outerWidth() * s
          }
        },
        clipToBox: function(t) {
          return {
            width: t.clip.right - t.clip.left,
            height: t.clip.bottom - t.clip.top,
            left: t.clip.left,
            top: t.clip.top
          }
        },
        unshift: function(t, e, i) {
          var s = t.queue();
          e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
        },
        saveStyle: function(t) {
          t.data(u, t[0].style.cssText)
        },
        restoreStyle: function(t) {
          t[0].style.cssText = t.data(u) || "", t.removeData(u)
        },
        mode: function(t, e) {
          var i = t.is(":hidden");
          return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
        },
        getBaseline: function(t, e) {
          var i, s;
          switch (t[0]) {
            case "top":
              i = 0;
              break;
            case "middle":
              i = .5;
              break;
            case "bottom":
              i = 1;
              break;
            default:
              i = t[0] / e.height
          }
          switch (t[1]) {
            case "left":
              s = 0;
              break;
            case "center":
              s = .5;
              break;
            case "right":
              s = 1;
              break;
            default:
              s = t[1] / e.width
          }
          return {
            x: s,
            y: i
          }
        },
        createPlaceholder: function(e) {
          var i, s = e.css("position"),
            n = e.position();
          return e.css({
            marginTop: e.css("marginTop"),
            marginBottom: e.css("marginBottom"),
            marginLeft: e.css("marginLeft"),
            marginRight: e.css("marginRight")
          }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
            display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
            visibility: "hidden",
            marginTop: e.css("marginTop"),
            marginBottom: e.css("marginBottom"),
            marginLeft: e.css("marginLeft"),
            marginRight: e.css("marginRight"),
            "float": e.css("float")
          }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({
            position: s,
            left: n.left,
            top: n.top
          }), i
        },
        removePlaceholder: function(t) {
          var e = c + "placeholder",
            i = t.data(e);
          i && (i.remove(), t.removeData(e))
        },
        cleanUp: function(e) {
          t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
        },
        setTransition: function(e, i, s, n) {
          return n = n || {}, t.each(i, function(t, i) {
            var o = e.cssUnit(i);
            o[0] > 0 && (n[i] = o[0] * s + o[1])
          }), n
        }
      }), t.fn.extend({
        effect: function() {
          function i(e) {
            function i() {
              r.removeData(d), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a()
            }

            function a() {
              t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e()
            }
            var r = t(this);
            s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a)
          }
          var s = e.apply(this, arguments),
            n = t.effects.effect[s.effect],
            o = n.mode,
            a = s.queue,
            r = a || "fx",
            h = s.complete,
            l = s.mode,
            c = [],
            u = function(e) {
              var i = t(this),
                s = t.effects.mode(i, l) || o;
              i.data(d, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
            };
          return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function() {
            h && h.call(this)
          }) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
        },
        show: function(t) {
          return function(s) {
            if (i(s)) return t.apply(this, arguments);
            var n = e.apply(this, arguments);
            return n.mode = "show", this.effect.call(this, n)
          }
        }(t.fn.show),
        hide: function(t) {
          return function(s) {
            if (i(s)) return t.apply(this, arguments);
            var n = e.apply(this, arguments);
            return n.mode = "hide", this.effect.call(this, n)
          }
        }(t.fn.hide),
        toggle: function(t) {
          return function(s) {
            if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
            var n = e.apply(this, arguments);
            return n.mode = "toggle", this.effect.call(this, n)
          }
        }(t.fn.toggle),
        cssUnit: function(e) {
          var i = this.css(e),
            s = [];
          return t.each(["em", "px", "%", "pt"], function(t, e) {
            i.indexOf(e) > 0 && (s = [parseFloat(i), e])
          }), s
        },
        cssClip: function(t) {
          return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
        },
        transfer: function(e, i) {
          var s = t(this),
            n = t(e.to),
            o = "fixed" === n.css("position"),
            a = t("body"),
            r = o ? a.scrollTop() : 0,
            h = o ? a.scrollLeft() : 0,
            l = n.offset(),
            c = {
              top: l.top - r,
              left: l.left - h,
              height: n.innerHeight(),
              width: n.innerWidth()
            },
            u = s.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
              top: u.top - r,
              left: u.left - h,
              height: s.innerHeight(),
              width: s.innerWidth(),
              position: o ? "fixed" : "absolute"
            }).animate(c, e.duration, e.easing, function() {
              d.remove(), t.isFunction(i) && i()
            })
        }
      }), t.fx.step.clip = function(e) {
        e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
          top: e.pos * (e.end.top - e.start.top) + e.start.top,
          right: e.pos * (e.end.right - e.start.right) + e.start.right,
          bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
          left: e.pos * (e.end.left - e.start.left) + e.start.left
        })
      }
    }(),
    function() {
      var e = {};
      t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
        e[i] = function(e) {
          return Math.pow(e, t + 2)
        }
      }), t.extend(e, {
        Sine: function(t) {
          return 1 - Math.cos(t * Math.PI / 2)
        },
        Circ: function(t) {
          return 1 - Math.sqrt(1 - t * t)
        },
        Elastic: function(t) {
          return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(t) {
          return t * t * (3 * t - 2)
        },
        Bounce: function(t) {
          for (var e, i = 4;
            ((e = Math.pow(2, --i)) - 1) / 11 > t;);
          return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
      }), t.each(e, function(e, i) {
        t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
          return 1 - i(1 - t)
        }, t.easing["easeInOut" + e] = function(t) {
          return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
        }
      })
    }();
  var f = t.effects;
  t.effects.define("blind", "hide", function(e, i) {
    var s = {
        up: ["bottom", "top"],
        vertical: ["bottom", "top"],
        down: ["top", "bottom"],
        left: ["right", "left"],
        horizontal: ["right", "left"],
        right: ["left", "right"]
      },
      n = t(this),
      o = e.direction || "up",
      a = n.cssClip(),
      r = {
        clip: t.extend({}, a)
      },
      h = t.effects.createPlaceholder(n);
    r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  }), t.effects.define("bounce", function(e, i) {
    var s, n, o, a = t(this),
      r = e.mode,
      h = "hide" === r,
      l = "show" === r,
      c = e.direction || "up",
      u = e.distance,
      d = e.times || 5,
      p = 2 * d + (l || h ? 1 : 0),
      f = e.duration / p,
      g = e.easing,
      m = "up" === c || "down" === c ? "top" : "left",
      _ = "up" === c || "left" === c,
      v = 0,
      b = a.queue().length;
    for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (n = {
        opacity: 1
      }, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d > v; v++) s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2;
    h && (s = {
      opacity: 0
    }, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1)
  }), t.effects.define("clip", "hide", function(e, i) {
    var s, n = {},
      o = t(this),
      a = e.direction || "vertical",
      r = "both" === a,
      h = r || "horizontal" === a,
      l = r || "vertical" === a;
    s = o.cssClip(), n.clip = {
      top: l ? (s.bottom - s.top) / 2 : s.top,
      right: h ? (s.right - s.left) / 2 : s.right,
      bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
      left: h ? (s.right - s.left) / 2 : s.left
    }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  }), t.effects.define("drop", "hide", function(e, i) {
    var s, n = t(this),
      o = e.mode,
      a = "show" === o,
      r = e.direction || "left",
      h = "up" === r || "down" === r ? "top" : "left",
      l = "up" === r || "left" === r ? "-=" : "+=",
      c = "+=" === l ? "-=" : "+=",
      u = {
        opacity: 0
      };
    t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  }), t.effects.define("explode", "hide", function(e, i) {
    function s() {
      b.push(this), b.length === u * d && n()
    }

    function n() {
      p.css({
        visibility: "visible"
      }), t(b).remove(), i()
    }
    var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
      d = u,
      p = t(this),
      f = e.mode,
      g = "show" === f,
      m = p.show().css("visibility", "hidden").offset(),
      _ = Math.ceil(p.outerWidth() / d),
      v = Math.ceil(p.outerHeight() / u),
      b = [];
    for (o = 0; u > o; o++)
      for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++) r = m.left + a * _, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
        position: "absolute",
        visibility: "visible",
        left: -a * _,
        top: -o * v
      }).parent().addClass("ui-effects-explode").css({
        position: "absolute",
        overflow: "hidden",
        width: _,
        height: v,
        left: r + (g ? l * _ : 0),
        top: h + (g ? c * v : 0),
        opacity: g ? 0 : 1
      }).animate({
        left: r + (g ? 0 : l * _),
        top: h + (g ? 0 : c * v),
        opacity: g ? 1 : 0
      }, e.duration || 500, e.easing, s)
  }), t.effects.define("fade", "toggle", function(e, i) {
    var s = "show" === e.mode;
    t(this).css("opacity", s ? 0 : 1).animate({
      opacity: s ? 1 : 0
    }, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  }), t.effects.define("fold", "hide", function(e, i) {
    var s = t(this),
      n = e.mode,
      o = "show" === n,
      a = "hide" === n,
      r = e.size || 15,
      h = /([0-9]+)%/.exec(r),
      l = !!e.horizFirst,
      c = l ? ["right", "bottom"] : ["bottom", "right"],
      u = e.duration / 2,
      d = t.effects.createPlaceholder(s),
      p = s.cssClip(),
      f = {
        clip: t.extend({}, p)
      },
      g = {
        clip: t.extend({}, p)
      },
      m = [p[c[0]], p[c[1]]],
      _ = s.queue().length;
    h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function(i) {
      d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i()
    }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4)
  }), t.effects.define("highlight", "show", function(e, i) {
    var s = t(this),
      n = {
        backgroundColor: s.css("backgroundColor")
      };
    "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
      backgroundImage: "none",
      backgroundColor: e.color || "#ffff99"
    }).animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  }), t.effects.define("size", function(e, i) {
    var s, n, o, a = t(this),
      r = ["fontSize"],
      h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
      l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
      c = e.mode,
      u = "effect" !== c,
      d = e.scale || "both",
      p = e.origin || ["middle", "center"],
      f = a.css("position"),
      g = a.position(),
      m = t.effects.scaledDimensions(a),
      _ = e.from || m,
      v = e.to || t.effects.scaledDimensions(a, 0);
    t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = {
      from: {
        y: _.height / m.height,
        x: _.width / m.width
      },
      to: {
        y: v.height / m.height,
        x: v.width / m.width
      }
    }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
      var i = t(this),
        s = t.effects.scaledDimensions(i),
        o = {
          height: s.height * n.from.y,
          width: s.width * n.from.x,
          outerHeight: s.outerHeight * n.from.y,
          outerWidth: s.outerWidth * n.from.x
        },
        a = {
          height: s.height * n.to.y,
          width: s.width * n.to.x,
          outerHeight: s.height * n.to.y,
          outerWidth: s.width * n.to.x
        };
      n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() {
        u && t.effects.restoreStyle(i)
      })
    })), a.animate(v, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function() {
        var e = a.offset();
        0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
      }
    })
  }), t.effects.define("scale", function(e, i) {
    var s = t(this),
      n = e.mode,
      o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
      a = t.extend(!0, {
        from: t.effects.scaledDimensions(s),
        to: t.effects.scaledDimensions(s, o, e.direction || "both"),
        origin: e.origin || ["middle", "center"]
      }, e);
    e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
  }), t.effects.define("puff", "hide", function(e, i) {
    var s = t.extend(!0, {}, e, {
      fade: !0,
      percent: parseInt(e.percent, 10) || 150
    });
    t.effects.effect.scale.call(this, s, i)
  }), t.effects.define("pulsate", "show", function(e, i) {
    var s = t(this),
      n = e.mode,
      o = "show" === n,
      a = "hide" === n,
      r = o || a,
      h = 2 * (e.times || 5) + (r ? 1 : 0),
      l = e.duration / h,
      c = 0,
      u = 1,
      d = s.queue().length;
    for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); h > u; u++) s.animate({
      opacity: c
    }, l, e.easing), c = 1 - c;
    s.animate({
      opacity: c
    }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1)
  }), t.effects.define("shake", function(e, i) {
    var s = 1,
      n = t(this),
      o = e.direction || "left",
      a = e.distance || 20,
      r = e.times || 3,
      h = 2 * r + 1,
      l = Math.round(e.duration / h),
      c = "up" === o || "down" === o ? "top" : "left",
      u = "up" === o || "left" === o,
      d = {},
      p = {},
      f = {},
      g = n.queue().length;
    for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); r > s; s++) n.animate(p, l, e.easing).animate(f, l, e.easing);
    n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1)
  }), t.effects.define("slide", "show", function(e, i) {
    var s, n, o = t(this),
      a = {
        up: ["bottom", "top"],
        down: ["top", "bottom"],
        left: ["right", "left"],
        right: ["left", "right"]
      },
      r = e.mode,
      h = e.direction || "left",
      l = "up" === h || "down" === h ? "top" : "left",
      c = "up" === h || "left" === h,
      u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
      d = {};
    t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  });
  var f;
  t.uiBackCompat !== !1 && (f = t.effects.define("transfer", function(e, i) {
    t(this).transfer(e, i)
  })), t.ui.focusable = function(i, s) {
    var n, o, a, r, h, l = i.nodeName.toLowerCase();
    return "area" === l ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i)))
  }, t.extend(t.expr[":"], {
    focusable: function(e) {
      return t.ui.focusable(e, null != t.attr(e, "tabindex"))
    }
  }), t.ui.focusable, t.fn.form = function() {
    return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
  }, t.ui.formResetMixin = {
    _formResetHandler: function() {
      var e = t(this);
      setTimeout(function() {
        var i = e.data("ui-form-reset-instances");
        t.each(i, function() {
          this.refresh()
        })
      })
    },
    _bindFormResetHandler: function() {
      if (this.form = this.element.form(), this.form.length) {
        var t = this.form.data("ui-form-reset-instances") || [];
        t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
      }
    },
    _unbindFormResetHandler: function() {
      if (this.form.length) {
        var e = this.form.data("ui-form-reset-instances");
        e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
      }
    }
  }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
    function s(e, i, s, o) {
      return t.each(n, function() {
        i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
      }), i
    }
    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
      o = i.toLowerCase(),
      a = {
        innerWidth: t.fn.innerWidth,
        innerHeight: t.fn.innerHeight,
        outerWidth: t.fn.outerWidth,
        outerHeight: t.fn.outerHeight
      };
    t.fn["inner" + i] = function(e) {
      return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
        t(this).css(o, s(this, e) + "px")
      })
    }, t.fn["outer" + i] = function(e, n) {
      return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
        t(this).css(o, s(this, e, !0, n) + "px")
      })
    }
  }), t.fn.addBack = function(t) {
    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
  }), t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, t.ui.escapeSelector = function() {
    var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
    return function(e) {
      return e.replace(t, "\\$1")
    }
  }(), t.fn.labels = function() {
    var e, i, s, n, o;
    return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
  }, t.fn.scrollParent = function(e) {
    var i = this.css("position"),
      s = "absolute" === i,
      n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
      o = this.parents().filter(function() {
        var e = t(this);
        return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
      }).eq(0);
    return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
  }, t.extend(t.expr[":"], {
    tabbable: function(e) {
      var i = t.attr(e, "tabindex"),
        s = null != i;
      return (!s || i >= 0) && t.ui.focusable(e, s)
    }
  }), t.fn.extend({
    uniqueId: function() {
      var t = 0;
      return function() {
        return this.each(function() {
          this.id || (this.id = "ui-id-" + ++t)
        })
      }
    }(),
    removeUniqueId: function() {
      return this.each(function() {
        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
      })
    }
  }), t.widget("ui.accordion", {
    version: "1.12.1",
    options: {
      active: 0,
      animate: {},
      classes: {
        "ui-accordion-header": "ui-corner-top",
        "ui-accordion-header-collapsed": "ui-corner-all",
        "ui-accordion-content": "ui-corner-bottom"
      },
      collapsible: !1,
      event: "click",
      header: "> li > :first-child, > :not(li):even",
      heightStyle: "auto",
      icons: {
        activeHeader: "ui-icon-triangle-1-s",
        header: "ui-icon-triangle-1-e"
      },
      activate: null,
      beforeActivate: null
    },
    hideProps: {
      borderTopWidth: "hide",
      borderBottomWidth: "hide",
      paddingTop: "hide",
      paddingBottom: "hide",
      height: "hide"
    },
    showProps: {
      borderTopWidth: "show",
      borderBottomWidth: "show",
      paddingTop: "show",
      paddingBottom: "show",
      height: "show"
    },
    _create: function() {
      var e = this.options;
      this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
    },
    _getCreateEventData: function() {
      return {
        header: this.active,
        panel: this.active.length ? this.active.next() : t()
      }
    },
    _createIcons: function() {
      var e, i, s = this.options.icons;
      s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
    },
    _destroyIcons: function() {
      this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
    },
    _destroy: function() {
      var t;
      this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
    },
    _setOption: function(t, e) {
      return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0)
    },
    _setOptionDisabled: function(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
    },
    _keydown: function(e) {
      if (!e.altKey && !e.ctrlKey) {
        var i = t.ui.keyCode,
          s = this.headers.length,
          n = this.headers.index(e.target),
          o = !1;
        switch (e.keyCode) {
          case i.RIGHT:
          case i.DOWN:
            o = this.headers[(n + 1) % s];
            break;
          case i.LEFT:
          case i.UP:
            o = this.headers[(n - 1 + s) % s];
            break;
          case i.SPACE:
          case i.ENTER:
            this._eventHandler(e);
            break;
          case i.HOME:
            o = this.headers[0];
            break;
          case i.END:
            o = this.headers[s - 1]
        }
        o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
      }
    },
    _panelKeyDown: function(e) {
      e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
    },
    refresh: function() {
      var e = this.options;
      this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
    },
    _processPanels: function() {
      var t = this.headers,
        e = this.panels;
      this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
    },
    _refresh: function() {
      var e, i = this.options,
        s = i.heightStyle,
        n = this.element.parent();
      this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
        var e = t(this),
          i = e.uniqueId().attr("id"),
          s = e.next(),
          n = s.uniqueId().attr("id");
        e.attr("aria-controls", n), s.attr("aria-labelledby", i)
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }).next().attr({
        "aria-hidden": "true"
      }).hide(), this.active.length ? this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }).next().attr({
        "aria-hidden": "false"
      }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
        var i = t(this),
          s = i.css("position");
        "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
      }), this.headers.each(function() {
        e -= t(this).outerHeight(!0)
      }), this.headers.next().each(function() {
        t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
      }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
        var i = t(this).is(":visible");
        i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
      }).height(e))
    },
    _activate: function(e) {
      var i = this._findActive(e)[0];
      i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop
      }))
    },
    _findActive: function(e) {
      return "number" == typeof e ? this.headers.eq(e) : t()
    },
    _setupEvents: function(e) {
      var i = {
        keydown: "_keydown"
      };
      e && t.each(e.split(" "), function(t, e) {
        i[e] = "_eventHandler"
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
        keydown: "_panelKeyDown"
      }), this._hoverable(this.headers), this._focusable(this.headers)
    },
    _eventHandler: function(e) {
      var i, s, n = this.options,
        o = this.active,
        a = t(e.currentTarget),
        r = a[0] === o[0],
        h = r && n.collapsible,
        l = h ? t() : a.next(),
        c = o.next(),
        u = {
          oldHeader: o,
          oldPanel: c,
          newHeader: h ? t() : a,
          newPanel: l
        };
      e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = h ? !1 : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
    },
    _toggle: function(e) {
      var i = e.newPanel,
        s = this.prevShow.length ? this.prevShow : e.oldPanel;
      this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
        "aria-hidden": "true"
      }), s.prev().attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), i.length && s.length ? s.prev().attr({
        tabIndex: -1,
        "aria-expanded": "false"
      }) : i.length && this.headers.filter(function() {
        return 0 === parseInt(t(this).attr("tabIndex"), 10)
      }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      })
    },
    _animate: function(t, e, i) {
      var s, n, o, a = this,
        r = 0,
        h = t.css("box-sizing"),
        l = t.length && (!e.length || t.index() < e.index()),
        c = this.options.animate || {},
        u = l && c.down || c,
        d = function() {
          a._toggleComplete(i)
        };
      return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
        duration: o,
        easing: n,
        step: function(t, e) {
          e.now = Math.round(t)
        }
      }), t.hide().animate(this.showProps, {
        duration: o,
        easing: n,
        complete: d,
        step: function(t, i) {
          i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
        }
      }), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
    },
    _toggleComplete: function(t) {
      var e = t.oldPanel,
        i = e.prev();
      this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
    }
  }), t.ui.safeActiveElement = function(t) {
    var e;
    try {
      e = t.activeElement
    } catch (i) {
      e = t.body
    }
    return e || (e = t.body), e.nodeName || (e = t.body), e
  }, t.widget("ui.menu", {
    version: "1.12.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-caret-1-e"
      },
      items: "> *",
      menus: "ul",
      position: {
        my: "left top",
        at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
        role: this.options.role,
        tabIndex: 0
      }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
        "mousedown .ui-menu-item": function(t) {
          t.preventDefault()
        },
        "click .ui-menu-item": function(e) {
          var i = t(e.target),
            s = t(t.ui.safeActiveElement(this.document[0]));
          !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
        },
        "mouseenter .ui-menu-item": function(e) {
          if (!this.previousFilter) {
            var i = t(e.target).closest(".ui-menu-item"),
              s = t(e.currentTarget);
            i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
          }
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function(t, e) {
          var i = this.active || this.element.find(this.options.items).eq(0);
          e || this.focus(t, i)
        },
        blur: function(e) {
          this._delay(function() {
            var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
            i && this.collapseAll(e)
          })
        },
        keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function(t) {
          this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
        }
      })
    },
    _destroy: function() {
      var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
        i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function() {
        var e = t(this);
        e.data("ui-menu-submenu-caret") && e.remove()
      })
    },
    _keydown: function(e) {
      var i, s, n, o, a = !0;
      switch (e.keyCode) {
        case t.ui.keyCode.PAGE_UP:
          this.previousPage(e);
          break;
        case t.ui.keyCode.PAGE_DOWN:
          this.nextPage(e);
          break;
        case t.ui.keyCode.HOME:
          this._move("first", "first", e);
          break;
        case t.ui.keyCode.END:
          this._move("last", "last", e);
          break;
        case t.ui.keyCode.UP:
          this.previous(e);
          break;
        case t.ui.keyCode.DOWN:
          this.next(e);
          break;
        case t.ui.keyCode.LEFT:
          this.collapse(e);
          break;
        case t.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
          break;
        case t.ui.keyCode.ENTER:
        case t.ui.keyCode.SPACE:
          this._activate(e);
          break;
        case t.ui.keyCode.ESCAPE:
          this.collapse(e);
          break;
        default:
          a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
            delete this.previousFilter
          }, 1e3)) : delete this.previousFilter
      }
      a && e.preventDefault()
    },
    _activate: function(t) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
    },
    refresh: function() {
      var e, i, s, n, o, a = this,
        r = this.options.icons.submenu,
        h = this.element.find(this.options.menus);
      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function() {
        var e = t(this),
          i = e.prev(),
          s = t("<span>").data("ui-menu-submenu-caret", !0);
        a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
      }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
        var e = t(this);
        a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
      }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
        tabIndex: -1,
        role: this._itemRole()
      }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
    },
    _itemRole: function() {
      return {
        menu: "menuitem",
        listbox: "option"
      }[this.options.role]
    },
    _setOption: function(t, e) {
      if ("icons" === t) {
        var i = this.element.find(".ui-menu-icon");
        this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
      }
      this._super(t, e)
    },
    _setOptionDisabled: function(t) {
      this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
    },
    focus: function(t, e) {
      var i, s, n;
      this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
        this._close()
      }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
        item: e
      })
    },
    _scrollIntoView: function(e) {
      var i, s, n, o, a, r;
      this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
    },
    blur: function(t, e) {
      e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
        item: this.active
      }), this.active = null)
    },
    _startOpening: function(t) {
      clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
        this._close(), this._open(t)
      }, this.delay))
    },
    _open: function(e) {
      var i = t.extend({ of: this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
    },
    collapseAll: function(e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function() {
        var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
        s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
      }, this.delay)
    },
    _close: function(t) {
      t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
    },
    _closeOnDocumentClick: function(e) {
      return !t(e.target).closest(".ui-menu").length
    },
    _isDivider: function(t) {
      return !/[^\-\u2014\u2013\s]/.test(t.text())
    },
    collapse: function(t) {
      var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      e && e.length && (this._close(), this.focus(t, e))
    },
    expand: function(t) {
      var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
      e && e.length && (this._open(e.parent()), this._delay(function() {
        this.focus(t, e)
      }))
    },
    next: function(t) {
      this._move("next", "first", t)
    },
    previous: function(t) {
      this._move("prev", "last", t)
    },
    isFirstItem: function() {
      return this.active && !this.active.prevAll(".ui-menu-item").length
    },
    isLastItem: function() {
      return this.active && !this.active.nextAll(".ui-menu-item").length
    },
    _move: function(t, e, i) {
      var s;
      this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
    },
    nextPage: function(e) {
      var i, s, n;
      return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
        return i = t(this), 0 > i.offset().top - s - n
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0)
    },
    previousPage: function(e) {
      var i, s, n;
      return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
        return i = t(this), i.offset().top - s + n > 0
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0)
    },
    _hasScroll: function() {
      return this.element.outerHeight() < this.element.prop("scrollHeight")
    },
    select: function(e) {
      this.active = this.active || t(e.target).closest(".ui-menu-item");
      var i = {
        item: this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
    },
    _filterMenuItems: function(e) {
      var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
        s = RegExp("^" + i, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
        return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
      })
    }
  }), t.widget("ui.autocomplete", {
    version: "1.12.1",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function() {
      var e, i, s, n = this.element[0].nodeName.toLowerCase(),
        o = "textarea" === n,
        a = "input" === n;
      this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
        keydown: function(n) {
          if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;
          e = !1, s = !1, i = !1;
          var o = t.ui.keyCode;
          switch (n.keyCode) {
            case o.PAGE_UP:
              e = !0, this._move("previousPage", n);
              break;
            case o.PAGE_DOWN:
              e = !0, this._move("nextPage", n);
              break;
            case o.UP:
              e = !0, this._keyEvent("previous", n);
              break;
            case o.DOWN:
              e = !0, this._keyEvent("next", n);
              break;
            case o.ENTER:
              this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
              break;
            case o.TAB:
              this.menu.active && this.menu.select(n);
              break;
            case o.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
              break;
            default:
              i = !0, this._searchTimeout(n)
          }
        },
        keypress: function(s) {
          if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
          if (!i) {
            var n = t.ui.keyCode;
            switch (s.keyCode) {
              case n.PAGE_UP:
                this._move("previousPage", s);
                break;
              case n.PAGE_DOWN:
                this._move("nextPage", s);
                break;
              case n.UP:
                this._keyEvent("previous", s);
                break;
              case n.DOWN:
                this._keyEvent("next", s)
            }
          }
        },
        input: function(t) {
          return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0)
        },
        focus: function() {
          this.selectedItem = null, this.previous = this._value()
        },
        blur: function(t) {
          return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0)
        }
      }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
        role: null
      }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
        mousedown: function(e) {
          e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
          })
        },
        menufocus: function(e, i) {
          var s, n;
          return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() {
            t(e.target).trigger(e.originalEvent)
          }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
            item: n
          }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0)
        },
        menuselect: function(e, i) {
          var s = i.item.data("ui-autocomplete-item"),
            n = this.previous;
          this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function() {
            this.previous = n, this.selectedItem = s
          })), !1 !== this._trigger("select", e, {
            item: s
          }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
        }
      }), this.liveRegion = t("<div>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr("autocomplete")
        }
      })
    },
    _destroy: function() {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    },
    _setOption: function(t, e) {
      this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
    },
    _isEventTargetInWidget: function(e) {
      var i = this.menu.element[0];
      return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
    },
    _closeOnClickOutside: function(t) {
      this._isEventTargetInWidget(t) || this.close()
    },
    _appendTo: function() {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
    },
    _initSource: function() {
      var e, i, s = this;
      t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
        s(t.ui.autocomplete.filter(e, i.term))
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
        s.xhr && s.xhr.abort(), s.xhr = t.ajax({
          url: i,
          data: e,
          dataType: "json",
          success: function(t) {
            n(t)
          },
          error: function() {
            n([])
          }
        })
      }) : this.source = this.options.source
    },
    _searchTimeout: function(t) {
      clearTimeout(this.searching), this.searching = this._delay(function() {
        var e = this.term === this._value(),
          i = this.menu.element.is(":visible"),
          s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
        (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
      }, this.options.delay)
    },
    search: function(t, e) {
      return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
    },
    _search: function(t) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
        term: t
      }, this._response())
    },
    _response: function() {
      var e = ++this.requestIndex;
      return t.proxy(function(t) {
        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
      }, this)
    },
    __response: function(t) {
      t && (t = this._normalize(t)), this._trigger("response", null, {
        content: t
      }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
    },
    close: function(t) {
      this.cancelSearch = !0, this._close(t)
    },
    _close: function(t) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
    },
    _change: function(t) {
      this.previous !== this._value() && this._trigger("change", t, {
        item: this.selectedItem
      })
    },
    _normalize: function(e) {
      return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
        return "string" == typeof e ? {
          label: e,
          value: e
        } : t.extend({}, e, {
          label: e.label || e.value,
          value: e.value || e.label
        })
      })
    },
    _suggest: function(e) {
      var i = this.menu.element.empty();
      this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
        mousedown: "_closeOnClickOutside"
      })
    },
    _resizeMenu: function() {
      var t = this.menu.element;
      t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
    },
    _renderMenu: function(e, i) {
      var s = this;
      t.each(i, function(t, i) {
        s._renderItemData(e, i)
      })
    },
    _renderItemData: function(t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e)
    },
    _renderItem: function(e, i) {
      return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
    },
    _move: function(t, e) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0)
    },
    widget: function() {
      return this.menu.element
    },
    _value: function() {
      return this.valueMethod.apply(this.element, arguments)
    },
    _keyEvent: function(t, e) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
    },
    _isContentEditable: function(t) {
      if (!t.length) return !1;
      var e = t.prop("contentEditable");
      return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
    }
  }), t.extend(t.ui.autocomplete, {
    escapeRegex: function(t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    },
    filter: function(e, i) {
      var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
      return t.grep(e, function(t) {
        return s.test(t.label || t.value || t)
      })
    }
  }), t.widget("ui.autocomplete", t.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function(t) {
          return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
        }
      }
    },
    __response: function(e) {
      var i;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
    }
  }), t.ui.autocomplete;
  var g = /ui-corner-([a-z]){2,6}/g;
  t.widget("ui.controlgroup", {
    version: "1.12.1",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
        button: "input[type=button], input[type=submit], input[type=reset], button, a",
        controlgroupLabel: ".ui-controlgroup-label",
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: "select",
        spinner: ".ui-spinner-input"
      }
    },
    _create: function() {
      this._enhance()
    },
    _enhance: function() {
      this.element.attr("role", "toolbar"), this.refresh()
    },
    _destroy: function() {
      this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
    },
    _initWidgets: function() {
      var e = this,
        i = [];
      t.each(this.options.items, function(s, n) {
        var o, a = {};
        return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function() {
          var e = t(this);
          e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
        }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
          classes: {}
        }, e.element.find(n).each(function() {
          var n = t(this),
            o = n[s]("instance"),
            r = t.widget.extend({}, a);
          if ("button" !== s || !n.parent(".ui-spinner").length) {
            o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
            var h = n[s]("widget");
            t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0])
          }
        })), void 0) : void 0
      }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
    },
    _callChildMethod: function(e) {
      this.childWidgets.each(function() {
        var i = t(this),
          s = i.data("ui-controlgroup-data");
        s && s[e] && s[e]()
      })
    },
    _updateCornerClass: function(t, e) {
      var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
        s = this._buildSimpleOptions(e, "label").classes.label;
      this._removeClass(t, null, i), this._addClass(t, null, s)
    },
    _buildSimpleOptions: function(t, e) {
      var i = "vertical" === this.options.direction,
        s = {
          classes: {}
        };
      return s.classes[e] = {
        middle: "",
        first: "ui-corner-" + (i ? "top" : "left"),
        last: "ui-corner-" + (i ? "bottom" : "right"),
        only: "ui-corner-all"
      }[t], s
    },
    _spinnerOptions: function(t) {
      var e = this._buildSimpleOptions(t, "ui-spinner");
      return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
    },
    _buttonOptions: function(t) {
      return this._buildSimpleOptions(t, "ui-button")
    },
    _checkboxradioOptions: function(t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label")
    },
    _selectmenuOptions: function(t) {
      var e = "vertical" === this.options.direction;
      return {
        width: e ? "auto" : !1,
        classes: {
          middle: {
            "ui-selectmenu-button-open": "",
            "ui-selectmenu-button-closed": ""
          },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
          },
          last: {
            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
          },
          only: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all"
          }
        }[t]
      }
    },
    _resolveClassesValues: function(e, i) {
      var s = {};
      return t.each(e, function(n) {
        var o = i.options.classes[n] || "";
        o = t.trim(o.replace(g, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
      }), s
    },
    _setOption: function(t, e) {
      return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0)
    },
    refresh: function() {
      var e, i = this;
      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, s) {
        var n = e[s]().data("ui-controlgroup-data");
        if (n && i["_" + n.widgetName + "Options"]) {
          var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
          o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
        } else i._updateCornerClass(e[s](), s)
      }), this._callChildMethod("refresh"))
    }
  }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
    version: "1.12.1",
    options: {
      disabled: null,
      label: null,
      icon: !0,
      classes: {
        "ui-checkboxradio-label": "ui-corner-all",
        "ui-checkboxradio-icon": "ui-corner-all"
      }
    },
    _getCreateOptions: function() {
      var e, i, s = this,
        n = this._super() || {};
      return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
        s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
      }), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n
    },
    _create: function() {
      var t = this.element[0].checked;
      this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
        change: "_toggleClasses",
        focus: function() {
          this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
        },
        blur: function() {
          this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
        }
      })
    },
    _readType: function() {
      var e = this.element[0].nodeName.toLowerCase();
      this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
    },
    _enhance: function() {
      this._updateIcon(this.element[0].checked)
    },
    widget: function() {
      return this.label
    },
    _getRadioGroup: function() {
      var e, i = this.element[0].name,
        s = "input[name='" + t.ui.escapeSelector(i) + "']";
      return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function() {
        return 0 === t(this).form().length
      }), e.not(this.element)) : t([])
    },
    _toggleClasses: function() {
      var e = this.element[0].checked;
      this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
        var e = t(this).checkboxradio("instance");
        e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
      })
    },
    _destroy: function() {
      this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
    },
    _setOption: function(t, e) {
      return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0
    },
    _updateIcon: function(e) {
      var i = "ui-icon ui-icon-background ";
      this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
    },
    _updateLabel: function() {
      var t = this.label.contents().not(this.element[0]);
      this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
    },
    refresh: function() {
      var t = this.element[0].checked,
        e = this.element[0].disabled;
      this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
        disabled: e
      })
    }
  }]), t.ui.checkboxradio, t.widget("ui.button", {
    version: "1.12.1",
    defaultElement: "<button>",
    options: {
      classes: {
        "ui-button": "ui-corner-all"
      },
      disabled: null,
      icon: null,
      iconPosition: "beginning",
      label: null,
      showLabel: !0
    },
    _getCreateOptions: function() {
      var t, e = this._super() || {};
      return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
    },
    _create: function() {
      !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
        keyup: function(e) {
          e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
        }
      })
    },
    _enhance: function() {
      this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
    },
    _updateTooltip: function() {
      this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
    },
    _updateIcon: function(e, i) {
      var s = "iconPosition" !== e,
        n = s ? this.options.iconPosition : i,
        o = "top" === n || "bottom" === n;
      this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
    },
    _destroy: function() {
      this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
    },
    _attachIconSpace: function(t) {
      this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
    },
    _attachIcon: function(t) {
      this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
    },
    _setOptions: function(t) {
      var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
        i = void 0 === t.icon ? this.options.icon : t.icon;
      e || i || (t.showLabel = !0), this._super(t)
    },
    _setOption: function(t, e) {
      "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
    },
    refresh: function() {
      var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOptions({
        disabled: t
      }), this._updateTooltip()
    }
  }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
    options: {
      text: !0,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function() {
      this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
    },
    _setOption: function(t, e) {
      return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0)
    }
  }), t.fn.button = function(e) {
    return function() {
      return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
        icon: !1
      }) : this.checkboxradio.apply(this, arguments))
    }
  }(t.fn.button), t.fn.buttonset = function() {
    return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
      button: arguments[0].items
    }), this.controlgroup.apply(this, arguments))
  }), t.ui.button, t.extend(t.ui, {
    datepicker: {
      version: "1.12.1"
    }
  });
  var m;
  t.extend(s.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function() {
      return this.dpDiv
    },
    setDefaults: function(t) {
      return a(this._defaults, t || {}), this
    },
    _attachDatepicker: function(e, i) {
      var s, n, o;
      s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
    },
    _newInst: function(e, i) {
      var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: s,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      }
    },
    _connectDatepicker: function(e, i) {
      var s = t(e);
      i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
    },
    _attachments: function(e, i) {
      var s, n, o, a = this._get(i, "appendText"),
        r = this._get(i, "isRTL");
      i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
        src: o,
        alt: n,
        title: n
      }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
        src: o,
        alt: n,
        title: n
      }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
      }))
    },
    _autoSize: function(t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e, i, s, n, o = new Date(2009, 11, 20),
          a = this._get(t, "dateFormat");
        a.match(/[DM]/) && (e = function(t) {
          for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
          return s
        }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
      }
    },
    _inlineDatepicker: function(e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
    },
    _dialogDatepicker: function(e, i, s, n, o) {
      var r, h, l, c, u, d = this._dialogInst;
      return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
    },
    _destroyDatepicker: function(e) {
      var i, s = t(e),
        n = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), m === n && (m = null))
    },
    _enableDatepicker: function(e) {
      var i, s, n = t(e),
        o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
        this.disabled = !1
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
        return t === e ? null : t
      }))
    },
    _disableDatepicker: function(e) {
      var i, s, n = t(e),
        o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
        this.disabled = !0
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
        return t === e ? null : t
      }), this._disabledInputs[this._disabledInputs.length] = e)
    },
    _isDisabledDatepicker: function(t) {
      if (!t) return !1;
      for (var e = 0; this._disabledInputs.length > e; e++)
        if (this._disabledInputs[e] === t) return !0;
      return !1
    },
    _getInst: function(e) {
      try {
        return t.data(e, "datepicker")
      } catch (i) {
        throw "Missing instance data for this datepicker"
      }
    },
    _optionDatepicker: function(e, i, s) {
      var n, o, r, h, l = this._getInst(e);
      return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
    },
    _changeDatepicker: function(t, e, i) {
      this._optionDatepicker(t, e, i)
    },
    _refreshDatepicker: function(t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e)
    },
    _setDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
    },
    _getDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
    },
    _doKeyDown: function(e) {
      var i, s, n, o = t.datepicker._getInst(e.target),
        a = !0,
        r = o.dpDiv.is(".ui-datepicker-rtl");
      if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          t.datepicker._hideDatepicker(), a = !1;
          break;
        case 13:
          return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
        case 27:
          t.datepicker._hideDatepicker();
          break;
        case 33:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 34:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 35:
          (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
          break;
        case 36:
          (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
          break;
        case 37:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 38:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
          break;
        case 39:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 40:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
          break;
        default:
          a = !1
      } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
      a && (e.preventDefault(), e.stopPropagation())
    },
    _doKeyPress: function(e) {
      var i, s, n = t.datepicker._getInst(e.target);
      return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
    },
    _doKeyUp: function(e) {
      var i, s = t.datepicker._getInst(e.target);
      if (s.input.val() !== s.lastVal) try {
        i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
      } catch (n) {}
      return !0
    },
    _showDatepicker: function(e) {
      if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
        var s, n, o, r, h, l, c;
        s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
          return r |= "fixed" === t(this).css("position"), !r
        }), h = {
          left: t.datepicker._pos[0],
          top: t.datepicker._pos[1]
        }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
          position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
          display: "none",
          left: h.left + "px",
          top: h.top + "px"
        }), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s))
      }
    },
    _updateDatepicker: function(e) {
      this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
      var i, s = this._getNumberOfMonths(e),
        n = s[1],
        a = 17,
        r = e.dpDiv.find("." + this._dayOverClass + " a");
      r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
      }, 0))
    },
    _shouldFocusInput: function(t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
    },
    _checkOffset: function(e, i, s) {
      var n = e.dpDiv.outerWidth(),
        o = e.dpDiv.outerHeight(),
        a = e.input ? e.input.outerWidth() : 0,
        r = e.input ? e.input.outerHeight() : 0,
        h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
        l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
      return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i
    },
    _findPos: function(e) {
      for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
      return i = t(e).offset(), [i.left, i.top]
    },
    _hideDatepicker: function(e) {
      var i, s, n, o, a = this._curInst;
      !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() {
        t.datepicker._tidyDialog(a)
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
    },
    _tidyDialog: function(t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
    },
    _checkExternalClick: function(e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
          s = t.datepicker._getInst(i[0]);
        (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function(e, i, s) {
      var n = t(e),
        o = this._getInst(n[0]);
      this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
    },
    _gotoToday: function(e) {
      var i, s = t(e),
        n = this._getInst(s[0]);
      this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
    },
    _selectMonthYear: function(e, i, s) {
      var n = t(e),
        o = this._getInst(n[0]);
      o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
    },
    _selectDay: function(e, i, s, n) {
      var o, a = t(e);
      t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
    },
    _clearDate: function(e) {
      var i = t(e);
      this._selectDate(i, "")
    },
    _selectDate: function(e, i) {
      var s, n = t(e),
        o = this._getInst(n[0]);
      i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
    },
    _updateAlternate: function(e) {
      var i, s, n, o = this._get(e, "altField");
      o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
    },
    noWeekends: function(t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""]
    },
    iso8601Week: function(t) {
      var e, i = new Date(t.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
    },
    parseDate: function(e, i, s) {
      if (null == e || null == i) throw "Invalid arguments";
      if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
      var n, o, a, r, h = 0,
        l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
        u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
        d = (s ? s.dayNames : null) || this._defaults.dayNames,
        p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
        f = (s ? s.monthNames : null) || this._defaults.monthNames,
        g = -1,
        m = -1,
        _ = -1,
        v = -1,
        b = !1,
        y = function(t) {
          var i = e.length > n + 1 && e.charAt(n + 1) === t;
          return i && n++, i
        },
        w = function(t) {
          var e = y(t),
            s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            n = "y" === t ? s : 1,
            o = RegExp("^\\d{" + n + "," + s + "}"),
            a = i.substring(h).match(o);
          if (!a) throw "Missing number at position " + h;
          return h += a[0].length, parseInt(a[0], 10)
        },
        k = function(e, s, n) {
          var o = -1,
            a = t.map(y(e) ? n : s, function(t, e) {
              return [
                [e, t]
              ]
            }).sort(function(t, e) {
              return -(t[1].length - e[1].length)
            });
          if (t.each(a, function(t, e) {
              var s = e[1];
              return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0
            }), -1 !== o) return o + 1;
          throw "Unknown name at position " + h
        },
        x = function() {
          if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
          h++
        };
      for (n = 0; e.length > n; n++)
        if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;
        else switch (e.charAt(n)) {
          case "d":
            _ = w("d");
            break;
          case "D":
            k("D", u, d);
            break;
          case "o":
            v = w("o");
            break;
          case "m":
            m = w("m");
            break;
          case "M":
            m = k("M", p, f);
            break;
          case "y":
            g = w("y");
            break;
          case "@":
            r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
            break;
          case "!":
            r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
            break;
          case "'":
            y("'") ? x() : b = !0;
            break;
          default:
            x()
        }
      if (i.length > h && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
      if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1)
        for (m = 1, _ = v;;) {
          if (o = this._getDaysInMonth(g, m - 1), o >= _) break;
          m++, _ -= o
        }
      if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";
      return r
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function(t, e, i) {
      if (!e) return "";
      var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        o = (i ? i.dayNames : null) || this._defaults.dayNames,
        a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        r = (i ? i.monthNames : null) || this._defaults.monthNames,
        h = function(e) {
          var i = t.length > s + 1 && t.charAt(s + 1) === e;
          return i && s++, i
        },
        l = function(t, e, i) {
          var s = "" + e;
          if (h(t))
            for (; i > s.length;) s = "0" + s;
          return s
        },
        c = function(t, e, i, s) {
          return h(t) ? s[e] : i[e]
        },
        u = "",
        d = !1;
      if (e)
        for (s = 0; t.length > s; s++)
          if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
          else switch (t.charAt(s)) {
            case "d":
              u += l("d", e.getDate(), 2);
              break;
            case "D":
              u += c("D", e.getDay(), n, o);
              break;
            case "o":
              u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              u += l("m", e.getMonth() + 1, 2);
              break;
            case "M":
              u += c("M", e.getMonth(), a, r);
              break;
            case "y":
              u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
              break;
            case "@":
              u += e.getTime();
              break;
            case "!":
              u += 1e4 * e.getTime() + this._ticksTo1970;
              break;
            case "'":
              h("'") ? u += "'" : d = !0;
              break;
            default:
              u += t.charAt(s)
          }
      return u
    },
    _possibleChars: function(t) {
      var e, i = "",
        s = !1,
        n = function(i) {
          var s = t.length > e + 1 && t.charAt(e + 1) === i;
          return s && e++, s
        };
      for (e = 0; t.length > e; e++)
        if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
        else switch (t.charAt(e)) {
          case "d":
          case "m":
          case "y":
          case "@":
            i += "0123456789";
            break;
          case "D":
          case "M":
            return null;
          case "'":
            n("'") ? i += "'" : s = !0;
            break;
          default:
            i += t.charAt(e)
        }
      return i
    },
    _get: function(t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
    },
    _setDateFromField: function(t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
          s = t.lastVal = t.input ? t.input.val() : null,
          n = this._getDefaultDate(t),
          o = n,
          a = this._getFormatConfig(t);
        try {
          o = this.parseDate(i, s, a) || n
        } catch (r) {
          s = e ? "" : s
        }
        t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
      }
    },
    _getDefaultDate: function(t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
    },
    _determineDate: function(e, i, s) {
      var n = function(t) {
          var e = new Date;
          return e.setDate(e.getDate() + t), e
        },
        o = function(i) {
          try {
            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
          } catch (s) {}
          for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
            switch (l[2] || "d") {
              case "d":
              case "D":
                r += parseInt(l[1], 10);
                break;
              case "w":
              case "W":
                r += 7 * parseInt(l[1], 10);
                break;
              case "m":
              case "M":
                a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                break;
              case "y":
              case "Y":
                o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
            }
            l = h.exec(i)
          }
          return new Date(o, a, r)
        },
        a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
      return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
    },
    _daylightSavingAdjust: function(t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
    },
    _setDate: function(t, e, i) {
      var s = !e,
        n = t.selectedMonth,
        o = t.selectedYear,
        a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
      t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
    },
    _getDate: function(t) {
      var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e
    },
    _attachHandlers: function(e) {
      var i = this._get(e, "stepMonths"),
        s = "#" + e.id.replace(/\\\\/g, "\\");
      e.dpDiv.find("[data-handler]").map(function() {
        var e = {
          prev: function() {
            t.datepicker._adjustDate(s, -i, "M")
          },
          next: function() {
            t.datepicker._adjustDate(s, +i, "M")
          },
          hide: function() {
            t.datepicker._hideDatepicker()
          },
          today: function() {
            t.datepicker._gotoToday(s)
          },
          selectDay: function() {
            return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
          },
          selectMonth: function() {
            return t.datepicker._selectMonthYear(s, this, "M"), !1
          },
          selectYear: function() {
            return t.datepicker._selectMonthYear(s, this, "Y"), !1
          }
        };
        t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
      })
    },
    _generateHTML: function(t) {
      var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date,
        B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
        Y = this._get(t, "isRTL"),
        j = this._get(t, "showButtonPanel"),
        q = this._get(t, "hideIfNoPrevNext"),
        K = this._get(t, "navigationAsDateFormat"),
        U = this._getNumberOfMonths(t),
        V = this._get(t, "showCurrentAtPos"),
        $ = this._get(t, "stepMonths"),
        X = 1 !== U[0] || 1 !== U[1],
        G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
        Q = this._getMinMaxDate(t, "min"),
        J = this._getMinMaxDate(t, "max"),
        Z = t.drawMonth - V,
        te = t.drawYear;
      if (0 > Z && (Z += 12, te--), J)
        for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
      for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
        for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
          if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", T = "", X) {
            if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
              case 0:
                T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
                break;
              case U[1] - 1:
                T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
                break;
              default:
                T += " ui-datepicker-group-middle", I = ""
            }
            T += "'>"
          }
          for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
          for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X ? this.maxRows > z ? this.maxRows : z : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)), N = 0; O > N; N++) {
            for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++) E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = A.getMonth() !== Z, L = F && !v || !E[0] || Q && Q > A || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
            T += W + "</tr>"
          }
          Z++, Z > 11 && (Z = 0, te++), T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += T
        }
        y += x
      }
      return y += l, t._keyEvent = !1, y
    },
    _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
      var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
        _ = this._get(t, "changeYear"),
        v = this._get(t, "showMonthAfterYear"),
        b = "<div class='ui-datepicker-title'>",
        y = "";
      if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
      else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
        y += "</select>"
      }
      if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml)
        if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";
        else {
          for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
              var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
              return isNaN(e) ? d : e
            }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
          t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
        }
      return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>"
    },
    _adjustInstDate: function(t, e, i) {
      var s = t.selectedYear + ("Y" === i ? e : 0),
        n = t.selectedMonth + ("M" === i ? e : 0),
        o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
        a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
      t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
    },
    _restrictMinMax: function(t, e) {
      var i = this._getMinMaxDate(t, "min"),
        s = this._getMinMaxDate(t, "max"),
        n = i && i > e ? i : e;
      return s && n > s ? s : n
    },
    _notifyChange: function(t) {
      var e = this._get(t, "onChangeMonthYear");
      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
    },
    _getNumberOfMonths: function(t) {
      var e = this._get(t, "numberOfMonths");
      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
    },
    _getMinMaxDate: function(t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null)
    },
    _getDaysInMonth: function(t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
    },
    _getFirstDayOfMonth: function(t, e) {
      return new Date(t, e, 1).getDay()
    },
    _canAdjustMonth: function(t, e, i, s) {
      var n = this._getNumberOfMonths(t),
        o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
      return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
    },
    _isInRange: function(t, e) {
      var i, s, n = this._getMinMaxDate(t, "min"),
        o = this._getMinMaxDate(t, "max"),
        a = null,
        r = null,
        h = this._get(t, "yearRange");
      return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
    },
    _getFormatConfig: function(t) {
      var e = this._get(t, "shortYearCutoff");
      return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
        shortYearCutoff: e,
        dayNamesShort: this._get(t, "dayNamesShort"),
        dayNames: this._get(t, "dayNames"),
        monthNamesShort: this._get(t, "monthNamesShort"),
        monthNames: this._get(t, "monthNames")
      }
    },
    _formatDate: function(t, e, i, s) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
    }
  }), t.fn.datepicker = function(e) {
    if (!this.length) return this;
    t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
      "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
    }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
  }, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  var _ = !1;
  t(document).on("mouseup", function() {
    _ = !1
  }), t.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function() {
      var e = this;
      this.element.on("mousedown." + this.widgetName, function(t) {
        return e._mouseDown(t)
      }).on("click." + this.widgetName, function(i) {
        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
      }), this.started = !1
    },
    _mouseDestroy: function() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function(e) {
      if (!_) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
        var i = this,
          s = 1 === e.which,
          n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
        return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
          i.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
          return i._mouseMove(t)
        }, this._mouseUpDelegate = function(t) {
          return i._mouseUp(t)
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), _ = !0, !0)) : !0
      }
    },
    _mouseMove: function(e) {
      if (this._mouseMoved) {
        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
        if (!e.which)
          if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
          else if (!this.ignoreMissingWhich) return this._mouseUp(e)
      }
      return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
    },
    _mouseUp: function(e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault()
    },
    _mouseDistanceMet: function(t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function() {
      return this.mouseDelayMet
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
      return !0
    }
  }), t.ui.plugin = {
    add: function(e, i, s) {
      var n, o = t.ui[e].prototype;
      for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
    },
    call: function(t, e, i, s) {
      var n, o = t.plugins[e];
      if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
        for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
    }
  }, t.ui.safeBlur = function(e) {
    e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
  }, t.widget("ui.draggable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
    },
    _setOption: function(t, e) {
      this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
    },
    _destroy: function() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0)
    },
    _mouseCapture: function(e) {
      var i = this.options;
      return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
    },
    _blockFrames: function(e) {
      this.iframeBlocks = this.document.find(e).map(function() {
        var e = t(this);
        return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
      })
    },
    _unblockFrames: function() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    },
    _blurActiveElement: function(e) {
      var i = t.ui.safeActiveElement(this.document[0]),
        s = t(e.target);
      s.closest(i).length || t.ui.safeBlur(i)
    },
    _mouseStart: function(e) {
      var i = this.options;
      return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
        return "fixed" === t(this).css("position")
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
    },
    _refreshOffsets: function(t) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }, this.offset.click = {
        left: t.pageX - this.offset.left,
        top: t.pageY - this.offset.top
      }
    },
    _mouseDrag: function(e, i) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
        var s = this._uiHash();
        if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
        this.position = s.position
      }
      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
    },
    _mouseStop: function(e) {
      var i = this,
        s = !1;
      return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        i._trigger("stop", e) !== !1 && i._clear()
      }) : this._trigger("stop", e) !== !1 && this._clear(), !1
    },
    _mouseUp: function(e) {
      return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
    },
    cancel: function() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
        target: this.element[0]
      })) : this._clear(), this
    },
    _getHandle: function(e) {
      return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
    },
    _setHandleClassName: function() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
    },
    _removeHandleClassName: function() {
      this._removeClass(this.handleElement, "ui-draggable-handle")
    },
    _createHelper: function(e) {
      var i = this.options,
        s = t.isFunction(i.helper),
        n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
      return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
    },
    _setPositionRelative: function() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
    },
    _adjustOffsetFromHelper: function(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    },
    _isRootNode: function(t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0]
    },
    _getParentOffset: function() {
      var e = this.offsetParent.offset(),
        i = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function() {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };
      var t = this.element.position(),
        e = this._isRootNode(this.scrollParent[0]);
      return {
        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
      }
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      }
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function() {
      var e, i, s, n = this.options,
        o = this.document[0];
      return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
    },
    _convertPositionTo: function(t, e) {
      e || (e = this.position);
      var i = "absolute" === t ? 1 : -1,
        s = this._isRootNode(this.scrollParent[0]);
      return {
        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
      }
    },
    _generatePosition: function(t, e) {
      var i, s, n, o, a = this.options,
        r = this._isRootNode(this.scrollParent[0]),
        h = t.pageX,
        l = t.pageY;
      return r && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
        top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
        left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
      }
    },
    _clear: function() {
      this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
    },
    _trigger: function(e, i, s) {
      return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
    },
    plugins: {},
    _uiHash: function() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      }
    }
  }), t.ui.plugin.add("draggable", "connectToSortable", {
    start: function(e, i, s) {
      var n = t.extend({}, i, {
        item: s.element
      });
      s.sortables = [], t(s.options.connectToSortable).each(function() {
        var i = t(this).sortable("instance");
        i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
      })
    },
    stop: function(e, i, s) {
      var n = t.extend({}, i, {
        item: s.element
      });
      s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
        var t = this;
        t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
          position: t.placeholder.css("position"),
          top: t.placeholder.css("top"),
          left: t.placeholder.css("left")
        }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
      })
    },
    drag: function(e, i, s) {
      t.each(s.sortables, function() {
        var n = !1,
          o = this;
        o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() {
          return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
        })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
          return i.helper[0]
        }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() {
          this.refreshPositions()
        }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() {
          this.refreshPositions()
        }))
      })
    }
  }), t.ui.plugin.add("draggable", "cursor", {
    start: function(e, i, s) {
      var n = t("body"),
        o = s.options;
      n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
    },
    stop: function(e, i, s) {
      var n = s.options;
      n._cursor && t("body").css("cursor", n._cursor)
    }
  }), t.ui.plugin.add("draggable", "opacity", {
    start: function(e, i, s) {
      var n = t(i.helper),
        o = s.options;
      n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
    },
    stop: function(e, i, s) {
      var n = s.options;
      n._opacity && t(i.helper).css("opacity", n._opacity)
    }
  }), t.ui.plugin.add("draggable", "scroll", {
    start: function(t, e, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
    },
    drag: function(e, i, s) {
      var n = s.options,
        o = !1,
        a = s.scrollParentNotHidden[0],
        r = s.document[0];
      a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
    }
  }), t.ui.plugin.add("draggable", "snap", {
    start: function(e, i, s) {
      var n = s.options;
      s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
        var e = t(this),
          i = e.offset();
        this !== s.element[0] && s.snapElements.push({
          item: this,
          width: e.outerWidth(),
          height: e.outerHeight(),
          top: i.top,
          left: i.left
        })
      })
    },
    drag: function(e, i, s) {
      var n, o, a, r, h, l, c, u, d, p, f = s.options,
        g = f.snapTolerance,
        m = i.offset.left,
        _ = m + s.helperProportions.width,
        v = i.offset.top,
        b = v + s.helperProportions.height;
      for (d = s.snapElements.length - 1; d >= 0; d--) h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
        snapItem: s.snapElements[d].item
      })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >= Math.abs(h - _), r = g >= Math.abs(l - m), n && (i.position.top = s._convertPositionTo("relative", {
        top: c - s.helperProportions.height,
        left: 0
      }).top), o && (i.position.top = s._convertPositionTo("relative", {
        top: u,
        left: 0
      }).top), a && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: h - s.helperProportions.width
      }).left), r && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: l
      }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >= Math.abs(h - m), r = g >= Math.abs(l - _), n && (i.position.top = s._convertPositionTo("relative", {
        top: c,
        left: 0
      }).top), o && (i.position.top = s._convertPositionTo("relative", {
        top: u - s.helperProportions.height,
        left: 0
      }).top), a && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: h
      }).left), r && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: l - s.helperProportions.width
      }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
        snapItem: s.snapElements[d].item
      })), s.snapElements[d].snapping = n || o || a || r || p)
    }
  }), t.ui.plugin.add("draggable", "stack", {
    start: function(e, i, s) {
      var n, o = s.options,
        a = t.makeArray(t(o.stack)).sort(function(e, i) {
          return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
        });
      a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
        t(this).css("zIndex", n + e)
      }), this.css("zIndex", n + a.length))
    }
  }), t.ui.plugin.add("draggable", "zIndex", {
    start: function(e, i, s) {
      var n = t(i.helper),
        o = s.options;
      n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
    },
    stop: function(e, i, s) {
      var n = s.options;
      n._zIndex && t(i.helper).css("zIndex", n._zIndex)
    }
  }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      classes: {
        "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
      },
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _num: function(t) {
      return parseFloat(t) || 0
    },
    _isNumber: function(t) {
      return !isNaN(parseFloat(t))
    },
    _hasScroll: function(e, i) {
      if ("hidden" === t(e).css("overflow")) return !1;
      var s = i && "left" === i ? "scrollLeft" : "scrollTop",
        n = !1;
      return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
    },
    _create: function() {
      var e, i = this.options,
        s = this;
      this._addClass("ui-resizable"), t.extend(this, {
        _aspectRatio: !!i.aspectRatio,
        aspectRatio: i.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
        position: this.element.css("position"),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css("top"),
        left: this.element.css("left")
      })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
        marginTop: this.originalElement.css("marginTop"),
        marginRight: this.originalElement.css("marginRight"),
        marginBottom: this.originalElement.css("marginBottom"),
        marginLeft: this.originalElement.css("marginLeft")
      }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
        position: "static",
        zoom: 1,
        display: "block"
      })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() {
        i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
      }).on("mouseleave", function() {
        i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
      }), this._mouseInit()
    },
    _destroy: function() {
      this._mouseDestroy();
      var e, i = function(e) {
        t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
      };
      return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
        position: e.css("position"),
        width: e.outerWidth(),
        height: e.outerHeight(),
        top: e.css("top"),
        left: e.css("left")
      }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
    },
    _setOption: function(t, e) {
      switch (this._super(t, e), t) {
        case "handles":
          this._removeHandles(), this._setupHandles();
          break;
        default:
      }
    },
    _setupHandles: function() {
      var e, i, s, n, o, a = this.options,
        r = this;
      if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
          n: ".ui-resizable-n",
          e: ".ui-resizable-e",
          s: ".ui-resizable-s",
          w: ".ui-resizable-w",
          se: ".ui-resizable-se",
          sw: ".ui-resizable-sw",
          ne: ".ui-resizable-ne",
          nw: ".ui-resizable-nw"
        } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
          zIndex: a.zIndex
        }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
      this._renderAxis = function(e) {
        var i, s, n, o;
        e = e || this.element;
        for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
          mousedown: r._mouseDown
        })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
        r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
      }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
    },
    _removeHandles: function() {
      this._handles.remove()
    },
    _mouseCapture: function(e) {
      var i, s, n = !1;
      for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
      return !this.options.disabled && n
    },
    _mouseStart: function(e) {
      var i, s, n, o = this.options,
        a = this.element;
      return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: i,
        top: s
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: a.width(),
        height: a.height()
      }, this.originalSize = this._helper ? {
        width: a.outerWidth(),
        height: a.outerHeight()
      } : {
        width: a.width(),
        height: a.height()
      }, this.sizeDiff = {
        width: a.outerWidth() - a.width(),
        height: a.outerHeight() - a.height()
      }, this.originalPosition = {
        left: i,
        top: s
      }, this.originalMousePosition = {
        left: e.pageX,
        top: e.pageY
      }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
    },
    _mouseDrag: function(e) {
      var i, s, n = this.originalMousePosition,
        o = this.axis,
        a = e.pageX - n.left || 0,
        r = e.pageY - n.top || 0,
        h = this._change[o];
      return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
    },
    _mouseStop: function(e) {
      this.resizing = !1;
      var i, s, n, o, a, r, h, l = this.options,
        c = this;
      return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
        width: c.helper.width() - o,
        height: c.helper.height() - n
      }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
        top: h,
        left: r
      })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
    },
    _updatePrevProperties: function() {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      }, this.prevSize = {
        width: this.size.width,
        height: this.size.height
      }
    },
    _applyChanges: function() {
      var t = {};
      return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
    },
    _updateVirtualBoundaries: function(t) {
      var e, i, s, n, o, a = this.options;
      o = {
        minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
        maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
        minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
        maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
      }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o
    },
    _updateCache: function(t) {
      this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
    },
    _updateRatio: function(t) {
      var e = this.position,
        i = this.size,
        s = this.axis;
      return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
    },
    _respectSize: function(t) {
      var e = this._vBoundaries,
        i = this.axis,
        s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
        n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
        o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
        a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
        r = this.originalPosition.left + this.originalSize.width,
        h = this.originalPosition.top + this.originalSize.height,
        l = /sw|nw|w/.test(i),
        c = /nw|ne|n/.test(i);
      return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
    },
    _getPaddingPlusBorderDimensions: function(t) {
      for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
      return {
        height: i[0] + i[2],
        width: i[1] + i[3]
      }
    },
    _proportionallyResize: function() {
      if (this._proportionallyResizeElements.length)
        for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
          height: i.height() - this.outerDimensions.height || 0,
          width: i.width() - this.outerDimensions.width || 0
        })
    },
    _renderProxy: function() {
      var e = this.element,
        i = this.options;
      this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        position: "absolute",
        left: this.elementOffset.left + "px",
        top: this.elementOffset.top + "px",
        zIndex: ++i.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
    },
    _change: {
      e: function(t, e) {
        return {
          width: this.originalSize.width + e
        }
      },
      w: function(t, e) {
        var i = this.originalSize,
          s = this.originalPosition;
        return {
          left: s.left + e,
          width: i.width - e
        }
      },
      n: function(t, e, i) {
        var s = this.originalSize,
          n = this.originalPosition;
        return {
          top: n.top + i,
          height: s.height - i
        }
      },
      s: function(t, e, i) {
        return {
          height: this.originalSize.height + i
        }
      },
      se: function(e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
      },
      sw: function(e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
      },
      ne: function(e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
      },
      nw: function(e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
      }
    },
    _propagate: function(e, i) {
      t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
    },
    plugins: {},
    ui: function() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      }
    }
  }), t.ui.plugin.add("resizable", "animate", {
    stop: function(e) {
      var i = t(this).resizable("instance"),
        s = i.options,
        n = i._proportionallyResizeElements,
        o = n.length && /textarea/i.test(n[0].nodeName),
        a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
        r = o ? 0 : i.sizeDiff.width,
        h = {
          width: i.size.width - r,
          height: i.size.height - a
        },
        l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
        c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(t.extend(h, c && l ? {
        top: c,
        left: l
      } : {}), {
        duration: s.animateDuration,
        easing: s.animateEasing,
        step: function() {
          var s = {
            width: parseFloat(i.element.css("width")),
            height: parseFloat(i.element.css("height")),
            top: parseFloat(i.element.css("top")),
            left: parseFloat(i.element.css("left"))
          };
          n && n.length && t(n[0]).css({
            width: s.width,
            height: s.height
          }), i._updateCache(s), i._propagate("resize", e)
        }
      })
    }
  }), t.ui.plugin.add("resizable", "containment", {
    start: function() {
      var e, i, s, n, o, a, r, h = t(this).resizable("instance"),
        l = h.options,
        c = h.element,
        u = l.containment,
        d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
      d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = {
        left: 0,
        top: 0
      }, h.containerPosition = {
        left: 0,
        top: 0
      }, h.parentData = {
        element: t(document),
        left: 0,
        top: 0,
        width: t(document).width(),
        height: t(document).height() || document.body.parentNode.scrollHeight
      }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
        i[t] = h._num(e.css("padding" + s))
      }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
        height: e.innerHeight() - i[3],
        width: e.innerWidth() - i[1]
      }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = {
        element: d,
        left: s.left,
        top: s.top,
        width: a,
        height: r
      }))
    },
    resize: function(e) {
      var i, s, n, o, a = t(this).resizable("instance"),
        r = a.options,
        h = a.containerOffset,
        l = a.position,
        c = a._aspectRatio || e.shiftKey,
        u = {
          top: 0,
          left: 0
        },
        d = a.containerElement,
        p = !0;
      d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
    },
    stop: function() {
      var e = t(this).resizable("instance"),
        i = e.options,
        s = e.containerOffset,
        n = e.containerPosition,
        o = e.containerElement,
        a = t(e.helper),
        r = a.offset(),
        h = a.outerWidth() - e.sizeDiff.width,
        l = a.outerHeight() - e.sizeDiff.height;
      e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      })
    }
  }), t.ui.plugin.add("resizable", "alsoResize", {
    start: function() {
      var e = t(this).resizable("instance"),
        i = e.options;
      t(i.alsoResize).each(function() {
        var e = t(this);
        e.data("ui-resizable-alsoresize", {
          width: parseFloat(e.width()),
          height: parseFloat(e.height()),
          left: parseFloat(e.css("left")),
          top: parseFloat(e.css("top"))
        })
      })
    },
    resize: function(e, i) {
      var s = t(this).resizable("instance"),
        n = s.options,
        o = s.originalSize,
        a = s.originalPosition,
        r = {
          height: s.size.height - o.height || 0,
          width: s.size.width - o.width || 0,
          top: s.position.top - a.top || 0,
          left: s.position.left - a.left || 0
        };
      t(n.alsoResize).each(function() {
        var e = t(this),
          s = t(this).data("ui-resizable-alsoresize"),
          n = {},
          o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        t.each(o, function(t, e) {
          var i = (s[e] || 0) + (r[e] || 0);
          i && i >= 0 && (n[e] = i || null)
        }), e.css(n)
      })
    },
    stop: function() {
      t(this).removeData("ui-resizable-alsoresize")
    }
  }), t.ui.plugin.add("resizable", "ghost", {
    start: function() {
      var e = t(this).resizable("instance"),
        i = e.size;
      e.ghost = e.originalElement.clone(), e.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: i.height,
        width: i.width,
        margin: 0,
        left: 0,
        top: 0
      }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
    },
    resize: function() {
      var e = t(this).resizable("instance");
      e.ghost && e.ghost.css({
        position: "relative",
        height: e.size.height,
        width: e.size.width
      })
    },
    stop: function() {
      var e = t(this).resizable("instance");
      e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
    }
  }), t.ui.plugin.add("resizable", "grid", {
    resize: function() {
      var e, i = t(this).resizable("instance"),
        s = i.options,
        n = i.size,
        o = i.originalSize,
        a = i.originalPosition,
        r = i.axis,
        h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
        l = h[0] || 1,
        c = h[1] || 1,
        u = Math.round((n.width - o.width) / l) * l,
        d = Math.round((n.height - o.height) / c) * c,
        p = o.width + u,
        f = o.height + d,
        g = s.maxWidth && p > s.maxWidth,
        m = s.maxHeight && f > s.maxHeight,
        _ = s.minWidth && s.minWidth > p,
        v = s.minHeight && s.minHeight > f;
      s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
    }
  }), t.ui.resizable, t.widget("ui.dialog", {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      classes: {
        "ui-dialog": "ui-corner-all",
        "ui-dialog-titlebar": "ui-corner-all"
      },
      closeOnEscape: !0,
      closeText: "Close",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function(e) {
          var i = t(this).css(e).offset().top;
          0 > i && t(this).css("top", e.top - i)
        }
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
    },
    sizeRelatedOptions: {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0
    },
    resizableRelatedOptions: {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0
    },
    _create: function() {
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height
      }, this.originalPosition = {
        parent: this.element.parent(),
        index: this.element.parent().children().index(this.element)
      }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
    },
    _init: function() {
      this.options.autoOpen && this.open()
    },
    _appendTo: function() {
      var e = this.options.appendTo;
      return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
    },
    _destroy: function() {
      var t, e = this.originalPosition;
      this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
    },
    widget: function() {
      return this.uiDialog
    },
    disable: t.noop,
    enable: t.noop,
    close: function(e) {
      var i = this;
      this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
        i._trigger("close", e)
      }))
    },
    isOpen: function() {
      return this._isOpen
    },
    moveToTop: function() {
      this._moveToTop()
    },
    _moveToTop: function(e, i) {
      var s = !1,
        n = this.uiDialog.siblings(".ui-front:visible").map(function() {
          return +t(this).css("z-index")
        }).get(),
        o = Math.max.apply(null, n);
      return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
    },
    open: function() {
      var e = this;
      return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
        e._focusTabbable(), e._trigger("focus")
      }), this._makeFocusTarget(), this._trigger("open"), void 0)
    },
    _focusTabbable: function() {
      var t = this._focusedElement;
      t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
    },
    _keepFocus: function(e) {
      function i() {
        var e = t.ui.safeActiveElement(this.document[0]),
          i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
        i || this._focusTabbable()
      }
      e.preventDefault(), i.call(this), this._delay(i)
    },
    _createWrapper: function() {
      this.uiDialog = t("<div>").hide().attr({
        tabIndex: -1,
        role: "dialog"
      }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
        keydown: function(e) {
          if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), void 0;
          if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
            var i = this.uiDialog.find(":tabbable"),
              s = i.filter(":first"),
              n = i.filter(":last");
            e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
              n.trigger("focus")
            }), e.preventDefault()) : (this._delay(function() {
              s.trigger("focus")
            }), e.preventDefault())
          }
        },
        mousedown: function(t) {
          this._moveToTop(t) && this._focusTabbable()
        }
      }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
        "aria-describedby": this.element.uniqueId().attr("id")
      })
    },
    _createTitlebar: function() {
      var e;
      this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
        mousedown: function(e) {
          t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
        }
      }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
        label: t("<a>").text(this.options.closeText).html(),
        icon: "ui-icon-closethick",
        showLabel: !1
      }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
        click: function(t) {
          t.preventDefault(), this.close(t)
        }
      }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
        "aria-labelledby": e.attr("id")
      })
    },
    _title: function(t) {
      this.options.title ? t.text(this.options.title) : t.html("&#160;")
    },
    _createButtonPane: function() {
      this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
    },
    _createButtons: function() {
      var e = this,
        i = this.options.buttons;
      return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (t.each(i, function(i, s) {
        var n, o;
        s = t.isFunction(s) ? {
          click: s,
          text: i
        } : s, s = t.extend({
          type: "button"
        }, s), n = s.click, o = {
          icon: s.icon,
          iconPosition: s.iconPosition,
          showLabel: s.showLabel,
          icons: s.icons,
          text: s.text
        }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() {
          n.apply(e.element[0], arguments)
        })
      }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
    },
    _makeDraggable: function() {
      function e(t) {
        return {
          position: t.position,
          offset: t.offset
        }
      }
      var i = this,
        s = this.options;
      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function(s, n) {
          i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
        },
        drag: function(t, s) {
          i._trigger("drag", t, e(s))
        },
        stop: function(n, o) {
          var a = o.offset.left - i.document.scrollLeft(),
            r = o.offset.top - i.document.scrollTop();
          s.position = {
            my: "left top",
            at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
            of: i.window
          }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
        }
      })
    },
    _makeResizable: function() {
      function e(t) {
        return {
          originalPosition: t.originalPosition,
          originalSize: t.originalSize,
          position: t.position,
          size: t.size
        }
      }
      var i = this,
        s = this.options,
        n = s.resizable,
        o = this.uiDialog.css("position"),
        a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
      this.uiDialog.resizable({
        cancel: ".ui-dialog-content",
        containment: "document",
        alsoResize: this.element,
        maxWidth: s.maxWidth,
        maxHeight: s.maxHeight,
        minWidth: s.minWidth,
        minHeight: this._minHeight(),
        handles: a,
        start: function(s, n) {
          i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
        },
        resize: function(t, s) {
          i._trigger("resize", t, e(s))
        },
        stop: function(n, o) {
          var a = i.uiDialog.offset(),
            r = a.left - i.document.scrollLeft(),
            h = a.top - i.document.scrollTop();
          s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
            my: "left top",
            at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
            of: i.window
          }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
        }
      }).css("position", o)
    },
    _trackFocus: function() {
      this._on(this.widget(), {
        focusin: function(e) {
          this._makeFocusTarget(), this._focusedElement = t(e.target)
        }
      })
    },
    _makeFocusTarget: function() {
      this._untrackInstance(), this._trackingInstances().unshift(this)
    },
    _untrackInstance: function() {
      var e = this._trackingInstances(),
        i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
    },
    _trackingInstances: function() {
      var t = this.document.data("ui-dialog-instances");
      return t || (t = [], this.document.data("ui-dialog-instances", t)), t
    },
    _minHeight: function() {
      var t = this.options;
      return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
    },
    _position: function() {
      var t = this.uiDialog.is(":visible");
      t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
    },
    _setOptions: function(e) {
      var i = this,
        s = !1,
        n = {};
      t.each(e, function(t, e) {
        i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
      }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
    },
    _setOption: function(e, i) {
      var s, n, o = this.uiDialog;
      "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
        label: t("<a>").text("" + this.options.closeText).html()
      }), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
    },
    _size: function() {
      var t, e, i, s = this.options;
      this.element.show().css({
        width: "auto",
        minHeight: 0,
        maxHeight: "none",
        height: 0
      }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
        height: "auto",
        width: s.width
      }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
        minHeight: e,
        maxHeight: i,
        height: "auto"
      }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
    },
    _blockFrames: function() {
      this.iframeBlocks = this.document.find("iframe").map(function() {
        var e = t(this);
        return t("<div>").css({
          position: "absolute",
          width: e.outerWidth(),
          height: e.outerHeight()
        }).appendTo(e.parent()).offset(e.offset())[0]
      })
    },
    _unblockFrames: function() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    },
    _allowInteraction: function(e) {
      return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
    },
    _createOverlay: function() {
      if (this.options.modal) {
        var e = !0;
        this._delay(function() {
          e = !1
        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
          focusin: function(t) {
            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
          }
        }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
          mousedown: "_keepFocus"
        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
      }
    },
    _destroyOverlay: function() {
      if (this.options.modal && this.overlay) {
        var t = this.document.data("ui-dialog-overlays") - 1;
        t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
      }
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
    options: {
      dialogClass: ""
    },
    _createWrapper: function() {
      this._super(), this.uiDialog.addClass(this.options.dialogClass)
    },
    _setOption: function(t, e) {
      "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
    }
  }), t.ui.dialog, t.widget("ui.droppable", {
    version: "1.12.1",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      addClasses: !0,
      greedy: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function() {
      var e, i = this.options,
        s = i.accept;
      this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
        return t.is(s)
      }, this.proportions = function() {
        return arguments.length ? (e = arguments[0], void 0) : e ? e : e = {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight
        }
      }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
    },
    _addToManager: function(e) {
      t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
    },
    _splice: function(t) {
      for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
    },
    _destroy: function() {
      var e = t.ui.ddmanager.droppables[this.options.scope];
      this._splice(e)
    },
    _setOption: function(e, i) {
      if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
        return t.is(i)
      };
      else if ("scope" === e) {
        var s = t.ui.ddmanager.droppables[this.options.scope];
        this._splice(s), this._addToManager(i)
      }
      this._super(e, i)
    },
    _activate: function(e) {
      var i = t.ui.ddmanager.current;
      this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
    },
    _deactivate: function(e) {
      var i = t.ui.ddmanager.current;
      this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
    },
    _over: function(e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
    },
    _out: function(e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
    },
    _drop: function(e, i) {
      var s = i || t.ui.ddmanager.current,
        n = !1;
      return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
        var i = t(this).droppable("instance");
        return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && v(s, t.extend(i, {
          offset: i.element.offset()
        }), i.options.tolerance, e) ? (n = !0, !1) : void 0
      }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
    },
    ui: function(t) {
      return {
        draggable: t.currentItem || t.element,
        helper: t.helper,
        position: t.position,
        offset: t.positionAbs
      }
    },
    _addHoverClass: function() {
      this._addClass("ui-droppable-hover")
    },
    _removeHoverClass: function() {
      this._removeClass("ui-droppable-hover")
    },
    _addActiveClass: function() {
      this._addClass("ui-droppable-active")
    },
    _removeActiveClass: function() {
      this._removeClass("ui-droppable-active")
    }
  });
  var v = t.ui.intersect = function() {
    function t(t, e, i) {
      return t >= e && e + i > t
    }
    return function(e, i, s, n) {
      if (!i.offset) return !1;
      var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
        a = (e.positionAbs || e.position.absolute).top + e.margins.top,
        r = o + e.helperProportions.width,
        h = a + e.helperProportions.height,
        l = i.offset.left,
        c = i.offset.top,
        u = l + i.proportions().width,
        d = c + i.proportions().height;
      switch (s) {
        case "fit":
          return o >= l && u >= r && a >= c && d >= h;
        case "intersect":
          return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;
        case "pointer":
          return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
        case "touch":
          return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u);
        default:
          return !1
      }
    }
  }();
  t.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function(e, i) {
      var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
        a = i ? i.type : null,
        r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
      t: for (s = 0; o.length > s; s++)
        if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
          for (n = 0; r.length > n; n++)
            if (r[n] === o[s].element[0]) {
              o[s].proportions().height = 0;
              continue t
            }
          o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
            width: o[s].element[0].offsetWidth,
            height: o[s].element[0].offsetHeight
          }))
        }
    },
    drop: function(e, i) {
      var s = !1;
      return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
        this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
      }), s
    },
    dragStart: function(e, i) {
      e.element.parentsUntil("body").on("scroll.droppable", function() {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
      })
    },
    drag: function(e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var s, n, o, a = v(e, this, this.options.tolerance, i),
            r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
          r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
            return t(this).droppable("instance").options.scope === n
          }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
        }
      })
    },
    dragStop: function(e, i) {
      e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
    }
  }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
    options: {
      hoverClass: !1,
      activeClass: !1
    },
    _addActiveClass: function() {
      this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
    },
    _removeActiveClass: function() {
      this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
    },
    _addHoverClass: function() {
      this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
    },
    _removeHoverClass: function() {
      this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
    }
  }), t.ui.droppable, t.widget("ui.progressbar", {
    version: "1.12.1",
    options: {
      classes: {
        "ui-progressbar": "ui-corner-all",
        "ui-progressbar-value": "ui-corner-left",
        "ui-progressbar-complete": "ui-corner-right"
      },
      max: 100,
      value: 0,
      change: null,
      complete: null
    },
    min: 0,
    _create: function() {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
        role: "progressbar",
        "aria-valuemin": this.min
      }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
    },
    _destroy: function() {
      this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
    },
    value: function(t) {
      return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0)
    },
    _constrainedValue: function(t) {
      return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
    },
    _setOptions: function(t) {
      var e = t.value;
      delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
    },
    _setOption: function(t, e) {
      "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
    },
    _setOptionDisabled: function(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
    },
    _percentage: function() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
    },
    _refreshValue: function() {
      var e = this.options.value,
        i = this._percentage();
      this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
        "aria-valuemax": this.options.max,
        "aria-valuenow": e
      }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
    }
  }), t.widget("ui.selectable", t.ui.mouse, {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function() {
      var e = this;
      this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
        e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
          var i = t(this),
            s = i.offset(),
            n = {
              left: s.left - e.elementPos.left,
              top: s.top - e.elementPos.top
            };
          t.data(this, "selectable-item", {
            element: this,
            $element: i,
            left: n.left,
            top: n.top,
            right: n.left + i.outerWidth(),
            bottom: n.top + i.outerHeight(),
            startselected: !1,
            selected: i.hasClass("ui-selected"),
            selecting: i.hasClass("ui-selecting"),
            unselecting: i.hasClass("ui-unselecting")
          })
        })
      }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
    },
    _destroy: function() {
      this.selectees.removeData("selectable-item"), this._mouseDestroy()
    },
    _mouseStart: function(e) {
      var i = this,
        s = this.options;
      this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
        left: e.pageX,
        top: e.pageY,
        width: 0,
        height: 0
      }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
        var s = t.data(this, "selectable-item");
        s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
          unselecting: s.element
        }))
      }), t(e.target).parents().addBack().each(function() {
        var s, n = t.data(this, "selectable-item");
        return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
          selecting: n.element
        }) : i._trigger("unselecting", e, {
          unselecting: n.element
        }), !1) : void 0
      }))
    },
    _mouseDrag: function(e) {
      if (this.dragged = !0, !this.options.disabled) {
        var i, s = this,
          n = this.options,
          o = this.opos[0],
          a = this.opos[1],
          r = e.pageX,
          h = e.pageY;
        return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
          left: o,
          top: a,
          width: r - o,
          height: h - a
        }), this.selectees.each(function() {
          var i = t.data(this, "selectable-item"),
            l = !1,
            c = {};
          i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
            selecting: i.element
          }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
            unselecting: i.element
          }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
            unselecting: i.element
          })))))
        }), !1
      }
    },
    _mouseStop: function(e) {
      var i = this;
      return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
        var s = t.data(this, "selectable-item");
        i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
          unselected: s.element
        })
      }), t(".ui-selecting", this.element[0]).each(function() {
        var s = t.data(this, "selectable-item");
        i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
          selected: s.element
        })
      }), this._trigger("stop", e), this.helper.remove(), !1
    }
  }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
    version: "1.12.1",
    defaultElement: "<select>",
    options: {
      appendTo: null,
      classes: {
        "ui-selectmenu-button-open": "ui-corner-top",
        "ui-selectmenu-button-closed": "ui-corner-all"
      },
      disabled: null,
      icons: {
        button: "ui-icon-triangle-1-s"
      },
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      width: !1,
      change: null,
      close: null,
      focus: null,
      open: null,
      select: null
    },
    _create: function() {
      var e = this.element.uniqueId().attr("id");
      this.ids = {
        element: e,
        button: e + "-button",
        menu: e + "-menu"
      }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
    },
    _drawButton: function() {
      var e, i = this,
        s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
      this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
        click: function(t) {
          this.button.focus(), t.preventDefault()
        }
      }), this.element.hide(), this.button = t("<span>", {
        tabindex: this.options.disabled ? -1 : 0,
        id: this.ids.button,
        role: "combobox",
        "aria-expanded": "false",
        "aria-autocomplete": "list",
        "aria-owns": this.ids.menu,
        "aria-haspopup": "true",
        title: this.element.attr("title")
      }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
        i._rendered || i._refreshMenu()
      })
    },
    _drawMenu: function() {
      var e = this;
      this.menu = t("<ul>", {
        "aria-hidden": "true",
        "aria-labelledby": this.ids.button,
        id: this.ids.menu
      }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
        classes: {
          "ui-menu": "ui-corner-bottom"
        },
        role: "listbox",
        select: function(t, i) {
          t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
        },
        focus: function(t, i) {
          var s = i.item.data("ui-selectmenu-item");
          null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
            item: s
          }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
        }
      }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
        return !1
      }, this.menuInstance._isDivider = function() {
        return !1
      }
    },
    refresh: function() {
      this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
    },
    _refreshMenu: function() {
      var t, e = this.element.find("option");
      this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
    },
    open: function(t) {
      this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
    },
    _position: function() {
      this.menuWrap.position(t.extend({ of: this.button
      }, this.options.position))
    },
    close: function(t) {
      this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
    },
    widget: function() {
      return this.button
    },
    menuWidget: function() {
      return this.menu
    },
    _renderButtonItem: function(e) {
      var i = t("<span>");
      return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
    },
    _renderMenu: function(e, i) {
      var s = this,
        n = "";
      t.each(i, function(i, o) {
        var a;
        o.optgroup !== n && (a = t("<li>", {
          text: o.optgroup
        }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
      })
    },
    _renderItemData: function(t, e) {
      return this._renderItem(t, e).data("ui-selectmenu-item", e)
    },
    _renderItem: function(e, i) {
      var s = t("<li>"),
        n = t("<div>", {
          title: i.element.attr("title")
        });
      return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
    },
    _setText: function(t, e) {
      e ? t.text(e) : t.html("&#160;")
    },
    _move: function(t, e) {
      var i, s, n = ".ui-menu-item";
      this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s)
    },
    _getSelectedItem: function() {
      return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
    },
    _toggle: function(t) {
      this[this.isOpen ? "close" : "open"](t)
    },
    _setSelection: function() {
      var t;
      this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
    },
    _documentClick: {
      mousedown: function(e) {
        this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
      }
    },
    _buttonEvents: {
      mousedown: function() {
        var t;
        window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
      },
      click: function(t) {
        this._setSelection(), this._toggle(t)
      },
      keydown: function(e) {
        var i = !0;
        switch (e.keyCode) {
          case t.ui.keyCode.TAB:
          case t.ui.keyCode.ESCAPE:
            this.close(e), i = !1;
            break;
          case t.ui.keyCode.ENTER:
            this.isOpen && this._selectFocusedItem(e);
            break;
          case t.ui.keyCode.UP:
            e.altKey ? this._toggle(e) : this._move("prev", e);
            break;
          case t.ui.keyCode.DOWN:
            e.altKey ? this._toggle(e) : this._move("next", e);
            break;
          case t.ui.keyCode.SPACE:
            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
            break;
          case t.ui.keyCode.LEFT:
            this._move("prev", e);
            break;
          case t.ui.keyCode.RIGHT:
            this._move("next", e);
            break;
          case t.ui.keyCode.HOME:
          case t.ui.keyCode.PAGE_UP:
            this._move("first", e);
            break;
          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_DOWN:
            this._move("last", e);
            break;
          default:
            this.menu.trigger(e), i = !1
        }
        i && e.preventDefault()
      }
    },
    _selectFocusedItem: function(t) {
      var e = this.menuItems.eq(this.focusIndex).parent("li");
      e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
    },
    _select: function(t, e) {
      var i = this.element[0].selectedIndex;
      this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
        item: t
      }), t.index !== i && this._trigger("change", e, {
        item: t
      }), this.close(e)
    },
    _setAria: function(t) {
      var e = this.menuItems.eq(t.index).attr("id");
      this.button.attr({
        "aria-labelledby": e,
        "aria-activedescendant": e
      }), this.menu.attr("aria-activedescendant", e)
    },
    _setOption: function(t, e) {
      if ("icons" === t) {
        var i = this.button.find("span.ui-icon");
        this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
      }
      this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
    },
    _setOptionDisabled: function(t) {
      this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
    },
    _appendTo: function() {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
    },
    _toggleAttr: function() {
      this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
    },
    _resizeButton: function() {
      var t = this.options.width;
      return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0)
    },
    _resizeMenu: function() {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
    },
    _getCreateOptions: function() {
      var t = this._super();
      return t.disabled = this.element.prop("disabled"), t
    },
    _parseOptions: function(e) {
      var i = this,
        s = [];
      e.each(function(e, n) {
        s.push(i._parseOption(t(n), e))
      }), this.items = s
    },
    _parseOption: function(t, e) {
      var i = t.parent("optgroup");
      return {
        element: t,
        index: e,
        value: t.val(),
        label: t.text(),
        optgroup: i.attr("label") || "",
        disabled: i.prop("disabled") || t.prop("disabled")
      }
    },
    _destroy: function() {
      this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
    }
  }]), t.widget("ui.slider", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      classes: {
        "ui-slider": "ui-corner-all",
        "ui-slider-handle": "ui-corner-all",
        "ui-slider-range": "ui-corner-all ui-widget-header"
      },
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
    },
    _refresh: function() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
    },
    _createHandles: function() {
      var e, i, s = this.options,
        n = this.element.find(".ui-slider-handle"),
        o = "<span tabindex='0'></span>",
        a = [];
      for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
      this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
        t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
      })
    },
    _createRange: function() {
      var e = this.options;
      e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
        left: "",
        bottom: ""
      })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
    },
    _setupEvents: function() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
    },
    _destroy: function() {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
    },
    _mouseCapture: function(e) {
      var i, s, n, o, a, r, h, l, c = this,
        u = this.options;
      return u.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
        x: e.pageX,
        y: e.pageY
      }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
        var i = Math.abs(s - c.values(e));
        (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
      }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
        left: 0,
        top: 0
      } : {
        left: e.pageX - h.left - o.width() / 2,
        top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
    },
    _mouseStart: function() {
      return !0
    },
    _mouseDrag: function(t) {
      var e = {
          x: t.pageX,
          y: t.pageY
        },
        i = this._normValueFromMouse(e);
      return this._slide(t, this._handleIndex, i), !1
    },
    _mouseStop: function(t) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    },
    _detectOrientation: function() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    },
    _normValueFromMouse: function(t) {
      var e, i, s, n, o;
      return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
    },
    _uiHash: function(t, e, i) {
      var s = {
        handle: this.handles[t],
        handleIndex: t,
        value: void 0 !== e ? e : this.value()
      };
      return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
    },
    _hasMultipleValues: function() {
      return this.options.values && this.options.values.length
    },
    _start: function(t, e) {
      return this._trigger("start", t, this._uiHash(e))
    },
    _slide: function(t, e, i) {
      var s, n, o = this.value(),
        a = this.values();
      this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
    },
    _stop: function(t, e) {
      this._trigger("stop", t, this._uiHash(e))
    },
    _change: function(t, e) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
    },
    value: function(t) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
    },
    values: function(e, i) {
      var s, n, o;
      if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
      if (!arguments.length) return this._values();
      if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
      for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
      this._refreshValue()
    },
    _setOption: function(e, i) {
      var s, n = 0;
      switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
        case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;
        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;
        case "values":
          for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
          this._animateOff = !1;
          break;
        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;
        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1
      }
    },
    _setOptionDisabled: function(t) {
      this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
    },
    _value: function() {
      var t = this.options.value;
      return t = this._trimAlignValue(t)
    },
    _values: function(t) {
      var e, i, s;
      if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
      if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
        return i
      }
      return []
    },
    _trimAlignValue: function(t) {
      if (this._valueMin() >= t) return this._valueMin();
      if (t >= this._valueMax()) return this._valueMax();
      var e = this.options.step > 0 ? this.options.step : 1,
        i = (t - this._valueMin()) % e,
        s = t - i;
      return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
    },
    _calculateNewMax: function() {
      var t = this.options.max,
        e = this._valueMin(),
        i = this.options.step,
        s = Math.round((t - e) / i) * i;
      t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
    },
    _precision: function() {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
    },
    _precisionOf: function(t) {
      var e = "" + t,
        i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1
    },
    _valueMin: function() {
      return this.options.min
    },
    _valueMax: function() {
      return this.max
    },
    _refreshRange: function(t) {
      "vertical" === t && this.range.css({
        width: "",
        left: ""
      }), "horizontal" === t && this.range.css({
        height: "",
        bottom: ""
      })
    },
    _refreshValue: function() {
      var e, i, s, n, o, a = this.options.range,
        r = this.options,
        h = this,
        l = this._animateOff ? !1 : r.animate,
        c = {};
      this._hasMultipleValues() ? this.handles.each(function(s) {
        i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          left: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          width: i - e + "%"
        }, {
          queue: !1,
          duration: r.animate
        })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          bottom: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          height: i - e + "%"
        }, {
          queue: !1,
          duration: r.animate
        }))), e = i
      }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        width: i + "%"
      }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        width: 100 - i + "%"
      }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        height: i + "%"
      }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        height: 100 - i + "%"
      }, r.animate))
    },
    _handleEvents: {
      keydown: function(e) {
        var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
        switch (e.keyCode) {
          case t.ui.keyCode.HOME:
          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_UP:
          case t.ui.keyCode.PAGE_DOWN:
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return
        }
        switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
          case t.ui.keyCode.HOME:
            n = this._valueMin();
            break;
          case t.ui.keyCode.END:
            n = this._valueMax();
            break;
          case t.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case t.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + o);
            break;
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - o)
        }
        this._slide(e, a, n)
      },
      keyup: function(e) {
        var i = t(e.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
      }
    }
  }), t.widget("ui.sortable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function(t, e, i) {
      return t >= e && e + i > t
    },
    _isFloating: function(t) {
      return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    },
    _create: function() {
      this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
    },
    _setOption: function(t, e) {
      this._super(t, e), "handle" === t && this._setHandleClassName()
    },
    _setHandleClassName: function() {
      var e = this;
      this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() {
        e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
      })
    },
    _destroy: function() {
      this._mouseDestroy();
      for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
      return this
    },
    _mouseCapture: function(e, i) {
      var s = null,
        n = !1,
        o = this;
      return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
        return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
      }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
        this === e.target && (n = !0)
      }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
    },
    _mouseStart: function(e, i, s) {
      var n, o, a = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left
        }, t.extend(this.offset, {
          click: {
            left: e.pageX - this.offset.left,
            top: e.pageY - this.offset.top
          },
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset()
        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
          prev: this.currentItem.prev()[0],
          parent: this.currentItem.parent()[0]
        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
        for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
      return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
    },
    _mouseDrag: function(e) {
      var i, s, n, o, a = this.options,
        r = !1;
      for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
        if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
          if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
          this._rearrange(e, s), this._trigger("change", e, this._uiHash());
          break
        }
      return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    },
    _mouseStop: function(e, i) {
      if (e) {
        if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
          var s = this,
            n = this.placeholder.offset(),
            o = this.options.axis,
            a = {};
          o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
            s._clear(e)
          })
        } else this._clear(e, i);
        return !1
      }
    },
    cancel: function() {
      if (this.dragging) {
        this._mouseUp(new t.Event("mouseup", {
          target: null
        })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
        for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
    },
    serialize: function(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
        s = [];
      return e = e || {}, t(i).each(function() {
        var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
        i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
      }), !s.length && e.key && s.push(e.key + "="), s.join("&")
    },
    toArray: function(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
        s = [];
      return e = e || {}, i.each(function() {
        s.push(t(e.item || this).attr(e.attribute || "id") || "")
      }), s
    },
    _intersectsWith: function(t) {
      var e = this.positionAbs.left,
        i = e + this.helperProportions.width,
        s = this.positionAbs.top,
        n = s + this.helperProportions.height,
        o = t.left,
        a = o + t.width,
        r = t.top,
        h = r + t.height,
        l = this.offset.click.top,
        c = this.offset.click.left,
        u = "x" === this.options.axis || s + l > r && h > s + l,
        d = "y" === this.options.axis || e + c > o && a > e + c,
        p = u && d;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
    },
    _intersectsWithPointer: function(t) {
      var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
        n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
        o = s && n;
      return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1
    },
    _intersectsWithSides: function(t) {
      var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
        i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
        s = this._getDragVerticalDirection(),
        n = this._getDragHorizontalDirection();
      return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
    },
    _getDragVerticalDirection: function() {
      var t = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== t && (t > 0 ? "down" : "up")
    },
    _getDragHorizontalDirection: function() {
      var t = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== t && (t > 0 ? "right" : "left")
    },
    refresh: function(t) {
      return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
    },
    _connectWith: function() {
      var t = this.options;
      return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
    },
    _getItemsAsjQuery: function(e) {
      function i() {
        r.push(this)
      }
      var s, n, o, a, r = [],
        h = [],
        l = this._connectWith();
      if (l && e)
        for (s = l.length - 1; s >= 0; s--)
          for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
      for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
          options: this.options,
          item: this.currentItem
        }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
      return t(r)
    },
    _removeCurrentsFromItems: function() {
      var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = t.grep(this.items, function(t) {
        for (var i = 0; e.length > i; i++)
          if (e[i] === t.item[0]) return !1;
        return !0
      })
    },
    _refreshItems: function(e) {
      this.items = [], this.containers = [this];
      var i, s, n, o, a, r, h, l, c = this.items,
        u = [
          [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
            item: this.currentItem
          }) : t(this.options.items, this.element), this]
        ],
        d = this._connectWith();
      if (d && this.ready)
        for (i = d.length - 1; i >= 0; i--)
          for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
            item: this.currentItem
          }) : t(o.options.items, o.element), o]), this.containers.push(o));
      for (i = u.length - 1; i >= 0; i--)
        for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
          item: h,
          instance: a,
          width: 0,
          height: 0,
          left: 0,
          top: 0
        })
    },
    refreshPositions: function(e) {
      this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, s, n, o;
      for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
      else
        for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this
    },
    _createPlaceholder: function(e) {
      e = e || this;
      var i, s = e.options;
      s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
        element: function() {
          var s = e.currentItem[0].nodeName.toLowerCase(),
            n = t("<" + s + ">", e.document[0]);
          return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
        },
        update: function(t, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
        }
      }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
    },
    _createTrPlaceholder: function(e, i) {
      var s = this;
      e.children().each(function() {
        t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
      })
    },
    _contactContainers: function(e) {
      var i, s, n, o, a, r, h, l, c, u, d = null,
        p = null;
      for (i = this.containers.length - 1; i >= 0; i--)
        if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
          if (this._intersectsWith(this.containers[i].containerCache)) {
            if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
            d = this.containers[i], p = i
          } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
      if (d)
        if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
        else {
          for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down"));
          if (!o && !this.options.dropOnEmpty) return;
          if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
          o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
        }
    },
    _createHelper: function(e) {
      var i = this.options,
        s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
    },
    _adjustOffsetFromHelper: function(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    },
    _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var e = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function() {
      if ("relative" === this.cssPosition) {
        var t = this.currentItem.position();
        return {
          top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        }
      }
      return {
        top: 0,
        left: 0
      }
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      }
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function() {
      var e, i, s, n = this.options;
      "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
    },
    _convertPositionTo: function(e, i) {
      i || (i = this.position);
      var s = "absolute" === e ? 1 : -1,
        n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
        o = /(html|body)/i.test(n[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
      }
    },
    _generatePosition: function(e) {
      var i, s, n = this.options,
        o = e.pageX,
        a = e.pageY,
        r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
        h = /(html|body)/i.test(r[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
        top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
      }
    },
    _rearrange: function(t, e, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var n = this.counter;
      this._delay(function() {
        n === this.counter && this.refreshPositions(!s)
      })
    },
    _clear: function(t, e) {
      function i(t, e, i) {
        return function(s) {
          i._trigger(t, s, e._uiHash(e))
        }
      }
      this.reverting = !1;
      var s, n = [];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
        this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
      } else this.currentItem.show();
      for (this.fromOutside && !e && n.push(function(t) {
          this._trigger("receive", t, this._uiHash(this.fromOutside))
        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
          this._trigger("update", t, this._uiHash())
        }), this !== this.currentContainer && (e || (n.push(function(t) {
          this._trigger("remove", t, this._uiHash())
        }), n.push(function(t) {
          return function(e) {
            t._trigger("receive", e, this._uiHash(this))
          }
        }.call(this, this.currentContainer)), n.push(function(t) {
          return function(e) {
            t._trigger("update", e, this._uiHash(this))
          }
        }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
        for (s = 0; n.length > s; s++) n[s].call(this, t);
        this._trigger("stop", t, this._uiHash())
      }
      return this.fromOutside = !1, !this.cancelHelperRemoval
    },
    _trigger: function() {
      t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    },
    _uiHash: function(e) {
      var i = e || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || t([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: e ? e.element : null
      }
    }
  }), t.widget("ui.spinner", {
    version: "1.12.1",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      classes: {
        "ui-spinner": "ui-corner-all",
        "ui-spinner-down": "ui-corner-br",
        "ui-spinner-up": "ui-corner-tr"
      },
      culture: null,
      icons: {
        down: "ui-icon-triangle-1-s",
        up: "ui-icon-triangle-1-n"
      },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null
    },
    _create: function() {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr("autocomplete")
        }
      })
    },
    _getCreateOptions: function() {
      var e = this._super(),
        i = this.element;
      return t.each(["min", "max", "step"], function(t, s) {
        var n = i.attr(s);
        null != n && n.length && (e[s] = n)
      }), e
    },
    _events: {
      keydown: function(t) {
        this._start(t) && this._keydown(t) && t.preventDefault()
      },
      keyup: "_stop",
      focus: function() {
        this.previous = this.element.val()
      },
      blur: function(t) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
      },
      mousewheel: function(t, e) {
        if (e) {
          if (!this.spinning && !this._start(t)) return !1;
          this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
            this.spinning && this._stop(t)
          }, 100), t.preventDefault()
        }
      },
      "mousedown .ui-spinner-button": function(e) {
        function i() {
          var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
          e || (this.element.trigger("focus"), this.previous = s, this._delay(function() {
            this.previous = s
          }))
        }
        var s;
        s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
          delete this.cancelBlur, i.call(this)
        }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function(e) {
        return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
      },
      "mouseleave .ui-spinner-button": "_stop"
    },
    _enhance: function() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
    },
    _draw: function() {
      this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
        classes: {
          "ui-button": ""
        }
      }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
        icon: this.options.icons.up,
        showLabel: !1
      }), this.buttons.last().button({
        icon: this.options.icons.down,
        showLabel: !1
      }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
    },
    _keydown: function(e) {
      var i = this.options,
        s = t.ui.keyCode;
      switch (e.keyCode) {
        case s.UP:
          return this._repeat(null, 1, e), !0;
        case s.DOWN:
          return this._repeat(null, -1, e), !0;
        case s.PAGE_UP:
          return this._repeat(null, i.page, e), !0;
        case s.PAGE_DOWN:
          return this._repeat(null, -i.page, e), !0
      }
      return !1
    },
    _start: function(t) {
      return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
    },
    _repeat: function(t, e, i) {
      t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
        this._repeat(40, e, i)
      }, t), this._spin(e * this.options.step, i)
    },
    _spin: function(t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
        value: i
      }) === !1 || (this._value(i), this.counter++)
    },
    _increment: function(e) {
      var i = this.options.incremental;
      return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
    },
    _precision: function() {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
    },
    _precisionOf: function(t) {
      var e = "" + t,
        i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1
    },
    _adjustValue: function(t) {
      var e, i, s = this.options;
      return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
    },
    _stop: function(t) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
    },
    _setOption: function(t, e) {
      var i, s, n;
      return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0)
    },
    _setOptionDisabled: function(t) {
      this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
    },
    _setOptions: r(function(t) {
      this._super(t)
    }),
    _parse: function(t) {
      return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
    },
    _format: function(t) {
      return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
    },
    _refresh: function() {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val())
      })
    },
    isValid: function() {
      var t = this.value();
      return null === t ? !1 : t === this._adjustValue(t)
    },
    _value: function(t, e) {
      var i;
      "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
    },
    _destroy: function() {
      this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
    },
    stepUp: r(function(t) {
      this._stepUp(t)
    }),
    _stepUp: function(t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop())
    },
    stepDown: r(function(t) {
      this._stepDown(t)
    }),
    _stepDown: function(t) {
      this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
    },
    pageUp: r(function(t) {
      this._stepUp((t || 1) * this.options.page)
    }),
    pageDown: r(function(t) {
      this._stepDown((t || 1) * this.options.page)
    }),
    value: function(t) {
      return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val())
    },
    widget: function() {
      return this.uiSpinner
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
    _enhance: function() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
    },
    _uiSpinnerHtml: function() {
      return "<span>"
    },
    _buttonHtml: function() {
      return "<a></a><a></a>"
    }
  }), t.ui.spinner, t.widget("ui.tabs", {
    version: "1.12.1",
    delay: 300,
    options: {
      active: null,
      classes: {
        "ui-tabs": "ui-corner-all",
        "ui-tabs-nav": "ui-corner-all",
        "ui-tabs-panel": "ui-corner-bottom",
        "ui-tabs-tab": "ui-corner-top"
      },
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _isLocal: function() {
      var t = /#.*$/;
      return function(e) {
        var i, s;
        i = e.href.replace(t, ""), s = location.href.replace(t, "");
        try {
          i = decodeURIComponent(i)
        } catch (n) {}
        try {
          s = decodeURIComponent(s)
        } catch (n) {}
        return e.hash.length > 1 && i === s
      }
    }(),
    _create: function() {
      var e = this,
        i = this.options;
      this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
        return e.tabs.index(t)
      }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
    },
    _initialActive: function() {
      var e = this.options.active,
        i = this.options.collapsible,
        s = location.hash.substring(1);
      return null === e && (s && this.tabs.each(function(i, n) {
        return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
      }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
    },
    _getCreateEventData: function() {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : t()
      }
    },
    _tabKeydown: function(e) {
      var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
        s = this.tabs.index(i),
        n = !0;
      if (!this._handlePageNav(e)) {
        switch (e.keyCode) {
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
            s++;
            break;
          case t.ui.keyCode.UP:
          case t.ui.keyCode.LEFT:
            n = !1, s--;
            break;
          case t.ui.keyCode.END:
            s = this.anchors.length - 1;
            break;
          case t.ui.keyCode.HOME:
            s = 0;
            break;
          case t.ui.keyCode.SPACE:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
          case t.ui.keyCode.ENTER:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
          default:
            return
        }
        e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
          this.option("active", s)
        }, this.delay))
      }
    },
    _panelKeydown: function(e) {
      this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
    },
    _handlePageNav: function(e) {
      return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
    },
    _findNextTab: function(e, i) {
      function s() {
        return e > n && (e = 0), 0 > e && (e = n), e
      }
      for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
      return e
    },
    _focusNextTab: function(t, e) {
      return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
    },
    _setOption: function(t, e) {
      return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
    },
    _sanitizeSelector: function(t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
    },
    refresh: function() {
      var e = this.options,
        i = this.tablist.children(":has(a[href])");
      e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
        return i.index(t)
      }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
    },
    _refresh: function() {
      this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        "aria-hidden": "true"
      }), this.active.length ? (this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
        "aria-hidden": "false"
      })) : this.tabs.eq(0).attr("tabIndex", 0)
    },
    _processTabs: function() {
      var e = this,
        i = this.tabs,
        s = this.anchors,
        n = this.panels;
      this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
        t(this).is(".ui-state-disabled") && e.preventDefault()
      }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
        t(this).closest("li").is(".ui-state-disabled") && this.blur()
      }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
        role: "tab",
        tabIndex: -1
      }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
        return t("a", this)[0]
      }).attr({
        role: "presentation",
        tabIndex: -1
      }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
        var n, o, a, r = t(s).uniqueId().attr("id"),
          h = t(s).closest("li"),
          l = h.attr("aria-controls");
        e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({
          "aria-controls": a,
          "aria-labelledby": r
        }), o.attr("aria-labelledby", r)
      }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
    },
    _getList: function() {
      return this.tablist || this.element.find("ol, ul").eq(0)
    },
    _createPanel: function(e) {
      return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
    },
    _setOptionDisabled: function(e) {
      var i, s, n;
      for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
      this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
    },
    _setupEvents: function(e) {
      var i = {};
      e && t.each(e.split(" "), function(t, e) {
        i[e] = "_eventHandler"
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
        click: function(t) {
          t.preventDefault()
        }
      }), this._on(this.anchors, i), this._on(this.tabs, {
        keydown: "_tabKeydown"
      }), this._on(this.panels, {
        keydown: "_panelKeydown"
      }), this._focusable(this.tabs), this._hoverable(this.tabs)
    },
    _setupHeightStyle: function(e) {
      var i, s = this.element.parent();
      "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
        var e = t(this),
          s = e.css("position");
        "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
      }), this.element.children().not(this.panels).each(function() {
        i -= t(this).outerHeight(!0)
      }), this.panels.each(function() {
        t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
      }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
        i = Math.max(i, t(this).height("").height())
      }).height(i))
    },
    _eventHandler: function(e) {
      var i = this.options,
        s = this.active,
        n = t(e.currentTarget),
        o = n.closest("li"),
        a = o[0] === s[0],
        r = a && i.collapsible,
        h = r ? t() : this._getPanelForTab(o),
        l = s.length ? this._getPanelForTab(s) : t(),
        c = {
          oldTab: s,
          oldPanel: l,
          newTab: r ? t() : o,
          newPanel: h
        };
      e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
    },
    _toggle: function(e, i) {
      function s() {
        o.running = !1, o._trigger("activate", e, i)
      }

      function n() {
        o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
      }
      var o = this,
        a = i.newPanel,
        r = i.oldPanel;
      this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
        o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
      }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
        return 0 === t(this).attr("tabIndex")
      }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      })
    },
    _activate: function(e) {
      var i, s = this._findActive(e);
      s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop
      }))
    },
    _findActive: function(e) {
      return e === !1 ? t() : this.tabs.eq(e)
    },
    _getIndex: function(e) {
      return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
    },
    _destroy: function() {
      this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
        t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
      }), this.tabs.each(function() {
        var e = t(this),
          i = e.data("ui-tabs-aria-controls");
        i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
    },
    enable: function(e) {
      var i = this.options.disabled;
      i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
        return t !== e ? t : null
      }) : t.map(this.tabs, function(t, i) {
        return i !== e ? i : null
      })), this._setOptionDisabled(i))
    },
    disable: function(e) {
      var i = this.options.disabled;
      if (i !== !0) {
        if (void 0 === e) i = !0;
        else {
          if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
          i = t.isArray(i) ? t.merge([e], i).sort() : [e]
        }
        this._setOptionDisabled(i)
      }
    },
    load: function(e, i) {
      e = this._getIndex(e);
      var s = this,
        n = this.tabs.eq(e),
        o = n.find(".ui-tabs-anchor"),
        a = this._getPanelForTab(n),
        r = {
          tab: n,
          panel: a
        },
        h = function(t, e) {
          "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
        };
      this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) {
        setTimeout(function() {
          a.html(t), s._trigger("load", i, r), h(n, e)
        }, 1)
      }).fail(function(t, e) {
        setTimeout(function() {
          h(t, e)
        }, 1)
      })))
    },
    _ajaxSettings: function(e, i, s) {
      var n = this;
      return {
        url: e.attr("href").replace(/#.*$/, ""),
        beforeSend: function(e, o) {
          return n._trigger("beforeLoad", i, t.extend({
            jqXHR: e,
            ajaxSettings: o
          }, s))
        }
      }
    },
    _getPanelForTab: function(e) {
      var i = t(e).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + i))
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
    _processTabs: function() {
      this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
    }
  }), t.ui.tabs, t.widget("ui.tooltip", {
    version: "1.12.1",
    options: {
      classes: {
        "ui-tooltip": "ui-corner-all ui-widget-shadow"
      },
      content: function() {
        var e = t(this).attr("title") || "";
        return t("<a>").text(e).html()
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip"
      },
      show: !0,
      track: !1,
      close: null,
      open: null
    },
    _addDescribedBy: function(e, i) {
      var s = (e.attr("aria-describedby") || "").split(/\s+/);
      s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
    },
    _removeDescribedBy: function(e) {
      var i = e.data("ui-tooltip-id"),
        s = (e.attr("aria-describedby") || "").split(/\s+/),
        n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
    },
    _create: function() {
      this._on({
        mouseover: "open",
        focusin: "open"
      }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
        role: "log",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
    },
    _setOption: function(e, i) {
      var s = this;
      this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
        s._updateContent(e.element)
      })
    },
    _setOptionDisabled: function(t) {
      this[t ? "_disable" : "_enable"]()
    },
    _disable: function() {
      var e = this;
      t.each(this.tooltips, function(i, s) {
        var n = t.Event("blur");
        n.target = n.currentTarget = s.element[0], e.close(n, !0)
      }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
        var e = t(this);
        return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
      }))
    },
    _enable: function() {
      this.disabledTitles.each(function() {
        var e = t(this);
        e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
      }), this.disabledTitles = t([])
    },
    open: function(e) {
      var i = this,
        s = t(e ? e.target : this.element).closest(this.options.items);
      s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
        var e, s = t(this);
        s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
          element: this,
          title: s.attr("title")
        }, s.attr("title", ""))
      }), this._registerCloseHandlers(e, s), this._updateContent(s, e))
    },
    _updateContent: function(t, e) {
      var i, s = this.options.content,
        n = this,
        o = e ? e.type : null;
      return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
        n._delay(function() {
          t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
        })
      }), i && this._open(e, t, i), void 0)
    },
    _open: function(e, i, s) {
      function n(t) {
        l.of = t, a.is(":hidden") || a.position(l)
      }
      var o, a, r, h, l = t.extend({}, this.options.position);
      if (s) {
        if (o = this._find(i)) return o.tooltip.find(".ui-tooltip-content").html(s), void 0;
        i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
          mousemove: n
        }), n(e)) : a.position(t.extend({ of: i
        }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
          a.is(":visible") && (n(l.of), clearInterval(r))
        }, t.fx.interval)), this._trigger("open", e, {
          tooltip: a
        })
      }
    },
    _registerCloseHandlers: function(e, i) {
      var s = {
        keyup: function(e) {
          if (e.keyCode === t.ui.keyCode.ESCAPE) {
            var s = t.Event(e);
            s.currentTarget = i[0], this.close(s, !0)
          }
        }
      };
      i[0] !== this.element[0] && (s.remove = function() {
        this._removeTooltip(this._find(i).tooltip)
      }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
    },
    close: function(e) {
      var i, s = this,
        n = t(e ? e.currentTarget : this.element),
        o = this._find(n);
      return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
        s._removeTooltip(t(this))
      }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
        t(i.element).attr("title", i.title), delete s.parents[e]
      }), o.closing = !0, this._trigger("close", e, {
        tooltip: i
      }), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0)
    },
    _tooltip: function(e) {
      var i = t("<div>").attr("role", "tooltip"),
        s = t("<div>").appendTo(i),
        n = i.uniqueId().attr("id");
      return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
        element: e,
        tooltip: i
      }
    },
    _find: function(t) {
      var e = t.data("ui-tooltip-id");
      return e ? this.tooltips[e] : null
    },
    _removeTooltip: function(t) {
      t.remove(), delete this.tooltips[t.attr("id")]
    },
    _appendTo: function(t) {
      var e = t.closest(".ui-front, dialog");
      return e.length || (e = this.document[0].body), e
    },
    _destroy: function() {
      var e = this;
      t.each(this.tooltips, function(i, s) {
        var n = t.Event("blur"),
          o = s.element;
        n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
      }), this.liveRegion.remove()
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
    options: {
      tooltipClass: null
    },
    _tooltip: function() {
      var t = this._superApply(arguments);
      return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
    }
  }), t.ui.tooltip
});
if ("undefined" == typeof jQuery) {
  var jQuery;
  jQuery = "function" == typeof require ? $ = require("jquery") : $
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(a, b, c, d, e) {
      return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function(a, b, c, d, e) {
      return d * (b /= e) * b + c
    },
    easeOutQuad: function(a, b, c, d, e) {
      return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function(a, b, c, d, e) {
      return d * (b /= e) * b * b + c
    },
    easeOutCubic: function(a, b, c, d, e) {
      return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function(a, b, c, d, e) {
      return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function(a, b, c, d, e) {
      return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function(a, b, c, d, e) {
      return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function(a, b, c, d, e) {
      return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function(a, b, c, d, e) {
      return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function(a, b, c, d, e) {
      return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function(a, b, c, d, e) {
      return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function(a, b, c, d, e) {
      return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function(a, b, c, d, e) {
      return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function(a, b, c, d, e) {
      return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function(a, b, c, d, e) {
      return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function(a, b, c, d, e) {
      return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function(a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d;
      if (0 == b) return c;
      if (1 == (b /= e)) return c + d;
      if (g || (g = .3 * e), h < Math.abs(d)) {
        h = d;
        var f = g / 4
      } else var f = g / (2 * Math.PI) * Math.asin(d / h);
      return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
    },
    easeOutElastic: function(a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d;
      if (0 == b) return c;
      if (1 == (b /= e)) return c + d;
      if (g || (g = .3 * e), h < Math.abs(d)) {
        h = d;
        var f = g / 4
      } else var f = g / (2 * Math.PI) * Math.asin(d / h);
      return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
    },
    easeInOutElastic: function(a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d;
      if (0 == b) return c;
      if (2 == (b /= e / 2)) return c + d;
      if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
        h = d;
        var f = g / 4
      } else var f = g / (2 * Math.PI) * Math.asin(d / h);
      return b < 1 ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
    },
    easeInBack: function(a, b, c, d, e, f) {
      return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function(a, b, c, d, e, f) {
      return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function(a, b, c, d, e, f) {
      return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function(a, b, c, d, e) {
      return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function(a, b, c, d, e) {
      return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function(a, b, c, d, e) {
      return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
  }), jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? d / 2 * b * b + c : d / 4 * ((b -= 2) * b * b + 2) + c
    }
  }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(a) {
    function b(a) {
      var b = a.length,
        d = c.type(a);
      return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }
    if (!a.jQuery) {
      var c = function(a, b) {
        return new c.fn.init(a, b)
      };
      c.isWindow = function(a) {
        return null != a && a == a.window
      }, c.type = function(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a
      }, c.isArray = Array.isArray || function(a) {
        return "array" === c.type(a)
      }, c.isPlainObject = function(a) {
        var b;
        if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
        try {
          if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (d) {
          return !1
        }
        for (b in a);
        return void 0 === b || f.call(a, b)
      }, c.each = function(a, c, d) {
        var e, f = 0,
          g = a.length,
          h = b(a);
        if (d) {
          if (h)
            for (; g > f && (e = c.apply(a[f], d), e !== !1); f++);
          else
            for (f in a)
              if (e = c.apply(a[f], d), e === !1) break
        } else if (h)
          for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++);
        else
          for (f in a)
            if (e = c.call(a[f], f, a[f]), e === !1) break;
        return a
      }, c.data = function(a, b, e) {
        if (void 0 === e) {
          var f = a[c.expando],
            g = f && d[f];
          if (void 0 === b) return g;
          if (g && b in g) return g[b]
        } else if (void 0 !== b) {
          var f = a[c.expando] || (a[c.expando] = ++c.uuid);
          return d[f] = d[f] || {}, d[f][b] = e, e
        }
      }, c.removeData = function(a, b) {
        var e = a[c.expando],
          f = e && d[e];
        f && c.each(b, function(a, b) {
          delete f[b]
        })
      }, c.extend = function() {
        var a, b, d, e, f, g, h = arguments[0] || {},
          i = 1,
          j = arguments.length,
          k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
          if (null != (f = arguments[i]))
            for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
        return h
      }, c.queue = function(a, d, e) {
        function f(a, c) {
          var d = c || [];
          return null != a && (b(Object(a)) ? ! function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
            if (c !== c)
              for (; void 0 !== b[d];) a[e++] = b[d++];
            return a.length = e, a
          }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
        }
        if (a) {
          d = (d || "fx") + "queue";
          var g = c.data(a, d);
          return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
        }
      }, c.dequeue = function(a, b) {
        c.each(a.nodeType ? [a] : a, function(a, d) {
          b = b || "fx";
          var e = c.queue(d, b),
            f = e.shift();
          "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() {
            c.dequeue(d, b)
          }))
        })
      }, c.fn = c.prototype = {
        init: function(a) {
          if (a.nodeType) return this[0] = a, this;
          throw new Error("Not a DOM node.")
        },
        offset: function() {
          var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
            top: 0,
            left: 0
          };
          return {
            top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
            left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
          }
        },
        position: function() {
          function a() {
            for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) a = a.offsetParent;
            return a || document
          }
          var b = this[0],
            a = a.apply(b),
            d = this.offset(),
            e = /^(?:body|html)$/i.test(a.nodeName) ? {
              top: 0,
              left: 0
            } : c(a).offset();
          return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), {
            top: d.top - e.top,
            left: d.left - e.left
          }
        }
      };
      var d = {};
      c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
      for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
      c.fn.init.prototype = c.fn, a.Velocity = {
        Utilities: c
      }
    }
  }(window), function(a) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
  }(function() {
    return function(a, b, c, d) {
      function e(a) {
        for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
          var e = a[b];
          e && d.push(e)
        }
        return d
      }

      function f(a) {
        return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a
      }

      function g(a) {
        var b = m.data(a, "velocity");
        return null === b ? d : b
      }

      function h(a) {
        return function(b) {
          return Math.round(b * a) * (1 / a)
        }
      }

      function i(a, c, d, e) {
        function f(a, b) {
          return 1 - 3 * b + 3 * a
        }

        function g(a, b) {
          return 3 * b - 6 * a
        }

        function h(a) {
          return 3 * a
        }

        function i(a, b, c) {
          return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
        }

        function j(a, b, c) {
          return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
        }

        function k(b, c) {
          for (var e = 0; p > e; ++e) {
            var f = j(c, a, d);
            if (0 === f) return c;
            var g = i(c, a, d) - b;
            c -= g / f
          }
          return c
        }

        function l() {
          for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d)
        }

        function m(b, c, e) {
          var f, g, h = 0;
          do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
          return g
        }

        function n(b) {
          for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;
          --e;
          var g = (b - x[e]) / (x[e + 1] - x[e]),
            h = c + g * u,
            i = j(h, a, d);
          return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u)
        }

        function o() {
          y = !0, (a != c || d != e) && l()
        }
        var p = 4,
          q = .001,
          r = 1e-7,
          s = 10,
          t = 11,
          u = 1 / (t - 1),
          v = "Float32Array" in b;
        if (4 !== arguments.length) return !1;
        for (var w = 0; 4 > w; ++w)
          if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
        a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
        var x = v ? new Float32Array(t) : new Array(t),
          y = !1,
          z = function(b) {
            return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
          };
        z.getControlPoints = function() {
          return [{
            x: a,
            y: c
          }, {
            x: d,
            y: e
          }]
        };
        var A = "generateBezier(" + [a, c, d, e] + ")";
        return z.toString = function() {
          return A
        }, z
      }

      function j(a, b) {
        var c = a;
        return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : !(!p.isArray(a) || 4 !== a.length) && i.apply(null, a), c === !1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c
      }

      function k(a) {
        if (a) {
          var b = (new Date).getTime(),
            c = t.State.calls.length;
          c > 1e4 && (t.State.calls = e(t.State.calls));
          for (var f = 0; c > f; f++)
            if (t.State.calls[f]) {
              var h = t.State.calls[f],
                i = h[0],
                j = h[2],
                n = h[3],
                o = !!n,
                q = null;
              n || (n = t.State.calls[f][3] = b - 16);
              for (var r = Math.min((b - n) / j.duration, 1), s = 0, u = i.length; u > s; s++) {
                var w = i[s],
                  y = w.element;
                if (g(y)) {
                  var z = !1;
                  if (j.display !== d && null !== j.display && "none" !== j.display) {
                    if ("flex" === j.display) {
                      var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                      m.each(A, function(a, b) {
                        v.setPropertyValue(y, "display", b)
                      })
                    }
                    v.setPropertyValue(y, "display", j.display)
                  }
                  j.visibility !== d && "hidden" !== j.visibility && v.setPropertyValue(y, "visibility", j.visibility);
                  for (var B in w)
                    if ("element" !== B) {
                      var C, D = w[B],
                        E = p.isString(D.easing) ? t.Easings[D.easing] : D.easing;
                      if (1 === r) C = D.endValue;
                      else {
                        var F = D.endValue - D.startValue;
                        if (C = D.startValue + F * E(r, j, F), !o && C === D.currentValue) continue
                      }
                      if (D.currentValue = C, "tween" === B) q = C;
                      else {
                        if (v.Hooks.registered[B]) {
                          var G = v.Hooks.getRoot(B),
                            H = g(y).rootPropertyValueCache[G];
                          H && (D.rootPropertyValue = H)
                        }
                        var I = v.setPropertyValue(y, B, D.currentValue + (0 === parseFloat(C) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);
                        v.Hooks.registered[B] && (g(y).rootPropertyValueCache[G] = v.Normalizations.registered[G] ? v.Normalizations.registered[G]("extract", null, I[1]) : I[1]), "transform" === I[0] && (z = !0)
                      }
                    }
                  j.mobileHA && g(y).transformCache.translate3d === d && (g(y).transformCache.translate3d = "(0px, 0px, 0px)", z = !0), z && v.flushTransformCache(y)
                }
              }
              j.display !== d && "none" !== j.display && (t.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (t.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], r, Math.max(0, n + j.duration - b), n, q), 1 === r && l(f)
            }
        }
        t.State.isTicking && x(k)
      }

      function l(a, b) {
        if (!t.State.calls[a]) return !1;
        for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
          var l = c[j].element;
          if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), f.loop !== !0 && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
            g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
            var n = !1;
            m.each(v.Lists.transforms3D, function(a, b) {
              var c = /^scale/.test(b) ? 1 : 0,
                e = g(l).transformCache[b];
              g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b])
            }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating")
          }
          if (!b && f.complete && !f.loop && j === k - 1) try {
            f.complete.call(e, e)
          } catch (o) {
            setTimeout(function() {
              throw o
            }, 1)
          }
          h && f.loop !== !0 && h(e), g(l) && f.loop === !0 && !b && (m.each(g(l).tweensContainer, function(a, b) {
            /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360), /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100)
          }), t(l, "reverse", {
            loop: !0,
            delay: f.delay
          })), f.queue !== !1 && m.dequeue(l, f.queue)
        }
        t.State.calls[a] = !1;
        for (var p = 0, q = t.State.calls.length; q > p; p++)
          if (t.State.calls[p] !== !1) {
            i = !0;
            break
          }
        i === !1 && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = [])
      }
      var m, n = function() {
          if (c.documentMode) return c.documentMode;
          for (var a = 7; a > 4; a--) {
            var b = c.createElement("div");
            if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
          }
          return d
        }(),
        o = function() {
          var a = 0;
          return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
            var c, d = (new Date).getTime();
            return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
              b(d + c)
            }, c)
          }
        }(),
        p = {
          isString: function(a) {
            return "string" == typeof a
          },
          isArray: Array.isArray || function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
          },
          isFunction: function(a) {
            return "[object Function]" === Object.prototype.toString.call(a)
          },
          isNode: function(a) {
            return a && a.nodeType
          },
          isNodeList: function(a) {
            return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
          },
          isWrapped: function(a) {
            return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a))
          },
          isSVG: function(a) {
            return b.SVGElement && a instanceof b.SVGElement
          },
          isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
          }
        },
        q = !1;
      if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
      if (7 >= n) return void(jQuery.fn.velocity = jQuery.fn.animate);
      var r = 400,
        s = "swing",
        t = {
          State: {
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isAndroid: /Android/i.test(navigator.userAgent),
            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
            isChrome: b.chrome,
            isFirefox: /Firefox/i.test(navigator.userAgent),
            prefixElement: c.createElement("div"),
            prefixMatches: {},
            scrollAnchor: null,
            scrollPropertyLeft: null,
            scrollPropertyTop: null,
            isTicking: !1,
            calls: []
          },
          CSS: {},
          Utilities: m,
          Redirects: {},
          Easings: {},
          Promise: b.Promise,
          defaults: {
            queue: "",
            duration: r,
            easing: s,
            begin: d,
            complete: d,
            progress: d,
            display: d,
            visibility: d,
            loop: !1,
            delay: !1,
            mobileHA: !0,
            _cacheValues: !0
          },
          init: function(a) {
            m.data(a, "velocity", {
              isSVG: p.isSVG(a),
              isAnimating: !1,
              computedStyle: null,
              tweensContainer: null,
              rootPropertyValueCache: {},
              transformCache: {}
            })
          },
          hook: null,
          mock: !1,
          version: {
            major: 1,
            minor: 2,
            patch: 2
          },
          debug: !1
        };
      b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
      var u = function() {
        function a(a) {
          return -a.tension * a.x - a.friction * a.v
        }

        function b(b, c, d) {
          var e = {
            x: b.x + d.dx * c,
            v: b.v + d.dv * c,
            tension: b.tension,
            friction: b.friction
          };
          return {
            dx: e.v,
            dv: a(e)
          }
        }

        function c(c, d) {
          var e = {
              dx: c.v,
              dv: a(c)
            },
            f = b(c, .5 * d, e),
            g = b(c, .5 * d, f),
            h = b(c, d, g),
            i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
            j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
          return c.x = c.x + i * d, c.v = c.v + j * d, c
        }
        return function d(a, b, e) {
          var f, g, h, i = {
              x: -1,
              v: 0,
              tension: null,
              friction: null
            },
            j = [0],
            k = 0,
            l = 1e-4,
            m = .016;
          for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l;);
          return f ? function(a) {
            return j[a * (j.length - 1) | 0]
          } : k
        }
      }();
      t.Easings = {
        linear: function(a) {
          return a
        },
        swing: function(a) {
          return .5 - Math.cos(a * Math.PI) / 2
        },
        spring: function(a) {
          return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
        }
      }, m.each([
        ["ease", [.25, .1, .25, 1]],
        ["ease-in", [.42, 0, 1, 1]],
        ["ease-out", [0, 0, .58, 1]],
        ["ease-in-out", [.42, 0, .58, 1]],
        ["easeInSine", [.47, 0, .745, .715]],
        ["easeOutSine", [.39, .575, .565, 1]],
        ["easeInOutSine", [.445, .05, .55, .95]],
        ["easeInQuad", [.55, .085, .68, .53]],
        ["easeOutQuad", [.25, .46, .45, .94]],
        ["easeInOutQuad", [.455, .03, .515, .955]],
        ["easeInCubic", [.55, .055, .675, .19]],
        ["easeOutCubic", [.215, .61, .355, 1]],
        ["easeInOutCubic", [.645, .045, .355, 1]],
        ["easeInQuart", [.895, .03, .685, .22]],
        ["easeOutQuart", [.165, .84, .44, 1]],
        ["easeInOutQuart", [.77, 0, .175, 1]],
        ["easeInQuint", [.755, .05, .855, .06]],
        ["easeOutQuint", [.23, 1, .32, 1]],
        ["easeInOutQuint", [.86, 0, .07, 1]],
        ["easeInExpo", [.95, .05, .795, .035]],
        ["easeOutExpo", [.19, 1, .22, 1]],
        ["easeInOutExpo", [1, 0, 0, 1]],
        ["easeInCirc", [.6, .04, .98, .335]],
        ["easeOutCirc", [.075, .82, .165, 1]],
        ["easeInOutCirc", [.785, .135, .15, .86]]
      ], function(a, b) {
        t.Easings[b[0]] = i.apply(null, b[1])
      });
      var v = t.CSS = {
        RegEx: {
          isHex: /^#([A-f\d]{3}){1,2}$/i,
          valueUnwrap: /^[A-z]+\((.*)\)$/i,
          wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
          valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
        },
        Lists: {
          colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
          transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
          transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
        },
        Hooks: {
          templates: {
            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
            backgroundPosition: ["X Y", "0% 0%"],
            transformOrigin: ["X Y Z", "50% 50% 0px"],
            perspectiveOrigin: ["X Y", "50% 50%"]
          },
          registered: {},
          register: function() {
            for (var a = 0; a < v.Lists.colors.length; a++) {
              var b = "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
              v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", b]
            }
            var c, d, e;
            if (n)
              for (c in v.Hooks.templates) {
                d = v.Hooks.templates[c], e = d[0].split(" ");
                var f = d[1].match(v.RegEx.valueSplit);
                "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [e.join(" "), f.join(" ")])
              }
            for (c in v.Hooks.templates) {
              d = v.Hooks.templates[c], e = d[0].split(" ");
              for (var a in e) {
                var g = c + e[a],
                  h = a;
                v.Hooks.registered[g] = [c, h]
              }
            }
          },
          getRoot: function(a) {
            var b = v.Hooks.registered[a];
            return b ? b[0] : a
          },
          cleanRootPropertyValue: function(a, b) {
            return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b
          },
          extractValue: function(a, b) {
            var c = v.Hooks.registered[a];
            if (c) {
              var d = c[0],
                e = c[1];
              return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e]
            }
            return b
          },
          injectValue: function(a, b, c) {
            var d = v.Hooks.registered[a];
            if (d) {
              var e, f, g = d[0],
                h = d[1];
              return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, f = e.join(" ")
            }
            return c
          }
        },
        Normalizations: {
          registered: {
            clip: function(a, b, c) {
              switch (a) {
                case "name":
                  return "clip";
                case "extract":
                  var d;
                  return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                case "inject":
                  return "rect(" + c + ")"
              }
            },
            blur: function(a, b, c) {
              switch (a) {
                case "name":
                  return t.State.isFirefox ? "filter" : "-webkit-filter";
                case "extract":
                  var d = parseFloat(c);
                  if (!d && 0 !== d) {
                    var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                    d = e ? e[1] : 0
                  }
                  return d;
                case "inject":
                  return parseFloat(c) ? "blur(" + c + ")" : "none"
              }
            },
            opacity: function(a, b, c) {
              if (8 >= n) switch (a) {
                case "name":
                  return "filter";
                case "extract":
                  var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                  return c = d ? d[1] / 100 : 1;
                case "inject":
                  return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
              } else switch (a) {
                case "name":
                  return "opacity";
                case "extract":
                  return c;
                case "inject":
                  return c
              }
            }
          },
          register: function() {
            9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
            for (var a = 0; a < v.Lists.transformsBase.length; a++) ! function() {
              var b = v.Lists.transformsBase[a];
              v.Normalizations.registered[b] = function(a, c, e) {
                switch (a) {
                  case "name":
                    return "transform";
                  case "extract":
                    return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
                  case "inject":
                    var f = !1;
                    switch (b.substr(0, b.length - 1)) {
                      case "translate":
                        f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                        break;
                      case "scal":
                      case "scale":
                        t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                        break;
                      case "skew":
                        f = !/(deg|\d)$/i.test(e);
                        break;
                      case "rotate":
                        f = !/(deg|\d)$/i.test(e)
                    }
                    return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b]
                }
              }
            }();
            for (var a = 0; a < v.Lists.colors.length; a++) ! function() {
              var b = v.Lists.colors[a];
              v.Normalizations.registered[b] = function(a, c, e) {
                switch (a) {
                  case "name":
                    return b;
                  case "extract":
                    var f;
                    if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                    else {
                      var g, h = {
                        black: "rgb(0, 0, 0)",
                        blue: "rgb(0, 0, 255)",
                        gray: "rgb(128, 128, 128)",
                        green: "rgb(0, 128, 0)",
                        red: "rgb(255, 0, 0)",
                        white: "rgb(255, 255, 255)"
                      };
                      /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                    }
                    return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
                  case "inject":
                    return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                }
              }
            }()
          }
        },
        Names: {
          camelCase: function(a) {
            return a.replace(/-(\w)/g, function(a, b) {
              return b.toUpperCase()
            })
          },
          SVGAttribute: function(a) {
            var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
            return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
          },
          prefixCheck: function(a) {
            if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];
            for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
              var e;
              if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                  return a.toUpperCase()
                }), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, [e, !0]
            }
            return [a, !1]
          }
        },
        Values: {
          hexToRgb: function(a) {
            var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
            return a = a.replace(c, function(a, b, c, d) {
              return b + b + c + c + d + d
            }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
          },
          isCSSNullValue: function(a) {
            return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
          },
          getUnitType: function(a) {
            return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
          },
          getDisplayType: function(a) {
            var b = a && a.tagName.toString().toLowerCase();
            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
          },
          addClass: function(a, b) {
            a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b
          },
          removeClass: function(a, b) {
            a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ")
          }
        },
        getPropertyValue: function(a, c, e, f) {
          function h(a, c) {
            function e() {
              j && v.setPropertyValue(a, "display", "none")
            }
            var i = 0;
            if (8 >= n) i = m.css(a, c);
            else {
              var j = !1;
              if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
                if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                  var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                  return e(), k
                }
                if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                  var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                  return e(), l
                }
              }
              var o;
              o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e()
            }
            if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
              var p = h(a, "position");
              ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px")
            }
            return i
          }
          var i;
          if (v.Hooks.registered[c]) {
            var j = c,
              k = v.Hooks.getRoot(j);
            e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e)
          } else if (v.Normalizations.registered[c]) {
            var l, o;
            l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o)
          }
          if (!/^[\d-]/.test(i))
            if (g(a) && g(a).isSVG && v.Names.SVGAttribute(c))
              if (/^(height|width)$/i.test(c)) try {
                i = a.getBBox()[c]
              } catch (p) {
                i = 0
              } else i = a.getAttribute(c);
              else i = h(a, v.Names.prefixCheck(c)[0]);
          return v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), i
        },
        setPropertyValue: function(a, c, d, e, f) {
          var h = c;
          if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
          else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
          else {
            if (v.Hooks.registered[c]) {
              var i = c,
                j = v.Hooks.getRoot(c);
              e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j
            }
            if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try {
              a.style[h] = d
            } catch (k) {
              t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
            } else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
            t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
          }
          return [h, d]
        },
        flushTransformCache: function(a) {
          function b(b) {
            return parseFloat(v.getPropertyValue(a, b))
          }
          var c = "";
          if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
            var d = {
              translate: [b("translateX"), b("translateY")],
              skewX: [b("skewX")],
              skewY: [b("skewY")],
              scale: 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")],
              rotate: [b("rotateZ"), 0, 0]
            };
            m.each(g(a).transformCache, function(a) {
              /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a])
            })
          } else {
            var e, f;
            m.each(g(a).transformCache, function(b) {
              return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void(c += b + e + " "))
            }), f && (c = "perspective" + f + " " + c)
          }
          v.setPropertyValue(a, "transform", c)
        }
      };
      v.Hooks.register(), v.Normalizations.register(), t.hook = function(a, b, c) {
        var e = d;
        return a = f(a), m.each(a, function(a, f) {
          if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b));
          else {
            var h = t.CSS.setPropertyValue(f, b, c);
            "transform" === h[0] && t.CSS.flushTransformCache(f), e = h
          }
        }), e
      };
      var w = function() {
        function a() {
          return h ? B.promise || null : i
        }

        function e() {
          function a(a) {
            function l(a, b) {
              var c = d,
                e = d,
                g = d;
              return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? g = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], h.duration), a[2] !== d && (g = a[2]))) : c = a, b || (e = e || h.easing), p.isFunction(c) && (c = c.call(f, y, x)), p.isFunction(g) && (g = g.call(f, y, x)), [c || 0, e, g]
            }

            function n(a, b) {
              var c, d;
              return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                return c = a, ""
              }), c || (c = v.Values.getUnitType(a)), [d, c]
            }

            function r() {
              var a = {
                  myParent: f.parentNode || c.body,
                  position: v.getPropertyValue(f, "position"),
                  fontSize: v.getPropertyValue(f, "fontSize")
                },
                d = a.position === I.lastPosition && a.myParent === I.lastParent,
                e = a.fontSize === I.lastFontSize;
              I.lastParent = a.myParent, I.lastPosition = a.position, I.lastFontSize = a.fontSize;
              var h = 100,
                i = {};
              if (e && d) i.emToPx = I.lastEmToPx, i.percentToPxWidth = I.lastPercentToPxWidth, i.percentToPxHeight = I.lastPercentToPxHeight;
              else {
                var j = g(f).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                  t.CSS.setPropertyValue(j, b, "hidden")
                }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                  t.CSS.setPropertyValue(j, b, h + "%")
                }), t.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = I.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / h, a.myParent.removeChild(j)
              }
              return null === I.remToPx && (I.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(b.innerWidth) / 100, I.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = I.remToPx, i.vwToPx = I.vwToPx, i.vhToPx = I.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), f), i
            }
            if (h.begin && 0 === y) try {
              h.begin.call(o, o)
            } catch (u) {
              setTimeout(function() {
                throw u
              }, 1)
            }
            if ("scroll" === C) {
              var w, z, A, D = /^x$/i.test(h.axis) ? "Left" : "Top",
                E = parseFloat(h.offset) || 0;
              h.container ? p.isWrapped(h.container) || p.isNode(h.container) ? (h.container = h.container[0] || h.container, w = h.container["scroll" + D], A = w + m(f).position()[D.toLowerCase()] + E) : h.container = null : (w = t.State.scrollAnchor[t.State["scrollProperty" + D]], z = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === D ? "Top" : "Left")]], A = m(f).offset()[D.toLowerCase()] + E), i = {
                scroll: {
                  rootPropertyValue: !1,
                  startValue: w,
                  currentValue: w,
                  endValue: A,
                  unitType: "",
                  easing: h.easing,
                  scrollData: {
                    container: h.container,
                    direction: D,
                    alternateValue: z
                  }
                },
                element: f
              }, t.debug && console.log("tweensContainer (scroll): ", i.scroll, f)
            } else if ("reverse" === C) {
              if (!g(f).tweensContainer) return void m.dequeue(f, h.queue);
              "none" === g(f).opts.display && (g(f).opts.display = "auto"), "hidden" === g(f).opts.visibility && (g(f).opts.visibility = "visible"), g(f).opts.loop = !1, g(f).opts.begin = null, g(f).opts.complete = null, s.easing || delete h.easing, s.duration || delete h.duration, h = m.extend({}, g(f).opts, h);
              var F = m.extend(!0, {}, g(f).tweensContainer);
              for (var G in F)
                if ("element" !== G) {
                  var H = F[G].startValue;
                  F[G].startValue = F[G].currentValue = F[G].endValue, F[G].endValue = H, p.isEmptyObject(s) || (F[G].easing = h.easing), t.debug && console.log("reverse tweensContainer (" + G + "): " + JSON.stringify(F[G]), f)
                }
              i = F
            } else if ("start" === C) {
              var F;
              g(f).tweensContainer && g(f).isAnimating === !0 && (F = g(f).tweensContainer), m.each(q, function(a, b) {
                if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(a)) {
                  var c = l(b, !0),
                    e = c[0],
                    f = c[1],
                    g = c[2];
                  if (v.RegEx.isHex.test(e)) {
                    for (var h = ["Red", "Green", "Blue"], i = v.Values.hexToRgb(e), j = g ? v.Values.hexToRgb(g) : d, k = 0; k < h.length; k++) {
                      var m = [i[k]];
                      f && m.push(f), j !== d && m.push(j[k]), q[a + h[k]] = m
                    }
                    delete q[a]
                  }
                }
              });
              for (var K in q) {
                var L = l(q[K]),
                  M = L[0],
                  N = L[1],
                  O = L[2];
                K = v.Names.camelCase(K);
                var P = v.Hooks.getRoot(K),
                  Q = !1;
                if (g(f).isSVG || "tween" === P || v.Names.prefixCheck(P)[1] !== !1 || v.Normalizations.registered[P] !== d) {
                  (h.display !== d && null !== h.display && "none" !== h.display || h.visibility !== d && "hidden" !== h.visibility) && /opacity|filter/.test(K) && !O && 0 !== M && (O = 0), h._cacheValues && F && F[K] ? (O === d && (O = F[K].endValue + F[K].unitType), Q = g(f).rootPropertyValueCache[P]) : v.Hooks.registered[K] ? O === d ? (Q = v.getPropertyValue(f, P), O = v.getPropertyValue(f, K, Q)) : Q = v.Hooks.templates[P][1] : O === d && (O = v.getPropertyValue(f, K));
                  var R, S, T, U = !1;
                  if (R = n(K, O), O = R[0], T = R[1], R = n(K, M), M = R[0].replace(/^([+-\/*])=/, function(a, b) {
                      return U = b, ""
                    }), S = R[1], O = parseFloat(O) || 0, M = parseFloat(M) || 0, "%" === S && (/^(fontSize|lineHeight)$/.test(K) ? (M /= 100, S = "em") : /^scale/.test(K) ? (M /= 100, S = "") : /(Red|Green|Blue)$/i.test(K) && (M = M / 100 * 255, S = "")), /[\/*]/.test(U)) S = T;
                  else if (T !== S && 0 !== O)
                    if (0 === M) S = T;
                    else {
                      e = e || r();
                      var V = /margin|padding|left|right|width|text|word|letter/i.test(K) || /X$/.test(K) || "x" === K ? "x" : "y";
                      switch (T) {
                        case "%":
                          O *= "x" === V ? e.percentToPxWidth : e.percentToPxHeight;
                          break;
                        case "px":
                          break;
                        default:
                          O *= e[T + "ToPx"]
                      }
                      switch (S) {
                        case "%":
                          O *= 1 / ("x" === V ? e.percentToPxWidth : e.percentToPxHeight);
                          break;
                        case "px":
                          break;
                        default:
                          O *= 1 / e[S + "ToPx"]
                      }
                    }
                  switch (U) {
                    case "+":
                      M = O + M;
                      break;
                    case "-":
                      M = O - M;
                      break;
                    case "*":
                      M = O * M;
                      break;
                    case "/":
                      M = O / M
                  }
                  i[K] = {
                    rootPropertyValue: Q,
                    startValue: O,
                    currentValue: O,
                    endValue: M,
                    unitType: S,
                    easing: N
                  }, t.debug && console.log("tweensContainer (" + K + "): " + JSON.stringify(i[K]), f)
                } else t.debug && console.log("Skipping [" + P + "] due to a lack of browser support.")
              }
              i.element = f
            }
            i.element && (v.Values.addClass(f, "velocity-animating"), J.push(i), "" === h.queue && (g(f).tweensContainer = i, g(f).opts = h), g(f).isAnimating = !0, y === x - 1 ? (t.State.calls.push([J, o, h, null, B.resolver]), t.State.isTicking === !1 && (t.State.isTicking = !0, k())) : y++)
          }
          var e, f = this,
            h = m.extend({}, t.defaults, s),
            i = {};
          switch (g(f) === d && t.init(f), parseFloat(h.delay) && h.queue !== !1 && m.queue(f, h.queue, function(a) {
            t.velocityQueueEntryFlag = !0, g(f).delayTimer = {
              setTimeout: setTimeout(a, parseFloat(h.delay)),
              next: a
            }
          }), h.duration.toString().toLowerCase()) {
            case "fast":
              h.duration = 200;
              break;
            case "normal":
              h.duration = r;
              break;
            case "slow":
              h.duration = 600;
              break;
            default:
              h.duration = parseFloat(h.duration) || 1
          }
          t.mock !== !1 && (t.mock === !0 ? h.duration = h.delay = 1 : (h.duration *= parseFloat(t.mock) || 1, h.delay *= parseFloat(t.mock) || 1)), h.easing = j(h.easing, h.duration), h.begin && !p.isFunction(h.begin) && (h.begin = null), h.progress && !p.isFunction(h.progress) && (h.progress = null), h.complete && !p.isFunction(h.complete) && (h.complete = null), h.display !== d && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = t.CSS.Values.getDisplayType(f))), h.visibility !== d && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && t.State.isMobile && !t.State.isGingerbread, h.queue === !1 ? h.delay ? setTimeout(a, h.delay) : a() : m.queue(f, h.queue, function(b, c) {
            return c === !0 ? (B.promise && B.resolver(o), !0) : (t.velocityQueueEntryFlag = !0, void a(b))
          }), "" !== h.queue && "fx" !== h.queue || "inprogress" === m.queue(f)[0] || m.dequeue(f)
        }
        var h, i, n, o, q, s, u = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
        if (p.isWrapped(this) ? (h = !1, n = 0, o = this, i = this) : (h = !0, n = 1, o = u ? arguments[0].elements || arguments[0].e : arguments[0]), o = f(o)) {
          u ? (q = arguments[0].properties || arguments[0].p, s = arguments[0].options || arguments[0].o) : (q = arguments[n], s = arguments[n + 1]);
          var x = o.length,
            y = 0;
          if (!/^(stop|finish)$/i.test(q) && !m.isPlainObject(s)) {
            var z = n + 1;
            s = {};
            for (var A = z; A < arguments.length; A++) p.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? p.isString(arguments[A]) || p.isArray(arguments[A]) ? s.easing = arguments[A] : p.isFunction(arguments[A]) && (s.complete = arguments[A]) : s.duration = arguments[A]
          }
          var B = {
            promise: null,
            resolver: null,
            rejecter: null
          };
          h && t.Promise && (B.promise = new t.Promise(function(a, b) {
            B.resolver = a, B.rejecter = b
          }));
          var C;
          switch (q) {
            case "scroll":
              C = "scroll";
              break;
            case "reverse":
              C = "reverse";
              break;
            case "finish":
            case "stop":
              m.each(o, function(a, b) {
                g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer)
              });
              var D = [];
              return m.each(t.State.calls, function(a, b) {
                b && m.each(b[1], function(c, e) {
                  var f = s === d ? "" : s;
                  return f !== !0 && b[2].queue !== f && (s !== d || b[2].queue !== !1) || void m.each(o, function(c, d) {
                    d === e && ((s === !0 || p.isString(s)) && (m.each(m.queue(d, p.isString(s) ? s : ""), function(a, b) {
                      p.isFunction(b) && b(null, !0)
                    }), m.queue(d, p.isString(s) ? s : "", [])), "stop" === q ? (g(d) && g(d).tweensContainer && f !== !1 && m.each(g(d).tweensContainer, function(a, b) {
                      b.endValue = b.currentValue
                    }), D.push(a)) : "finish" === q && (b[2].duration = 1))
                  })
                })
              }), "stop" === q && (m.each(D, function(a, b) {
                l(b, !0)
              }), B.promise && B.resolver(o)), a();
            default:
              if (!m.isPlainObject(q) || p.isEmptyObject(q)) {
                if (p.isString(q) && t.Redirects[q]) {
                  var E = m.extend({}, s),
                    F = E.duration,
                    G = E.delay || 0;
                  return E.backwards === !0 && (o = m.extend(!0, [], o).reverse()), m.each(o, function(a, b) {
                    parseFloat(E.stagger) ? E.delay = G + parseFloat(E.stagger) * a : p.isFunction(E.stagger) && (E.delay = G + E.stagger.call(b, a, x)), E.drag && (E.duration = parseFloat(F) || (/^(callout|transition)/.test(q) ? 1e3 : r), E.duration = Math.max(E.duration * (E.backwards ? 1 - a / x : (a + 1) / x), .75 * E.duration, 200)), t.Redirects[q].call(b, b, E || {}, a, x, o, B.promise ? B : d)
                  }), a()
                }
                var H = "Velocity: First argument (" + q + ") was not a property map, a known action, or a registered redirect. Aborting.";
                return B.promise ? B.rejecter(new Error(H)) : console.log(H), a()
              }
              C = "start"
          }
          var I = {
              lastParent: null,
              lastPosition: null,
              lastFontSize: null,
              lastPercentToPxWidth: null,
              lastPercentToPxHeight: null,
              lastEmToPx: null,
              remToPx: null,
              vwToPx: null,
              vhToPx: null
            },
            J = [];
          m.each(o, function(a, b) {
            p.isNode(b) && e.call(b)
          });
          var K, E = m.extend({}, t.defaults, s);
          if (E.loop = parseInt(E.loop), K = 2 * E.loop - 1, E.loop)
            for (var L = 0; K > L; L++) {
              var M = {
                delay: E.delay,
                progress: E.progress
              };
              L === K - 1 && (M.display = E.display, M.visibility = E.visibility, M.complete = E.complete), w(o, "reverse", M)
            }
          return a()
        }
      };
      t = m.extend(w, t), t.animate = w;
      var x = b.requestAnimationFrame || o;
      return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() {
        c.hidden ? (x = function(a) {
          return setTimeout(function() {
            a(!0)
          }, 16)
        }, k()) : x = b.requestAnimationFrame || o
      }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function(a, b) {
        t.Redirects["slide" + b] = function(a, c, e, f, g, h) {
          var i = m.extend({}, c),
            j = i.begin,
            k = i.complete,
            l = {
              height: "",
              marginTop: "",
              marginBottom: "",
              paddingTop: "",
              paddingBottom: ""
            },
            n = {};
          i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() {
            j && j.call(g, g);
            for (var c in l) {
              n[c] = a.style[c];
              var d = t.CSS.getPropertyValue(a, c);
              l[c] = "Down" === b ? [d, 0] : [0, d]
            }
            n.overflow = a.style.overflow, a.style.overflow = "hidden"
          }, i.complete = function() {
            for (var b in n) a.style[b] = n[b];
            k && k.call(g, g), h && h.resolver(g)
          }, t(a, l, i)
        }
      }), m.each(["In", "Out"], function(a, b) {
        t.Redirects["fade" + b] = function(a, c, e, f, g, h) {
          var i = m.extend({}, c),
            j = {
              opacity: "In" === b ? 1 : 0
            },
            k = i.complete;
          i.complete = e !== f - 1 ? i.begin = null : function() {
            k && k.call(g, g), h && h.resolver(g)
          }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i)
        }
      }), t
    }(window.jQuery || window.Zepto || window, window, document)
  })), ! function(a, b, c, d) {
    "use strict";

    function e(a, b, c) {
      return setTimeout(k(a, c), b)
    }

    function f(a, b, c) {
      return !!Array.isArray(a) && (g(a, c[b], c), !0)
    }

    function g(a, b, c) {
      var e;
      if (a)
        if (a.forEach) a.forEach(b, c);
        else if (a.length !== d)
        for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
      else
        for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function h(a, b, c) {
      for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
      return a
    }

    function i(a, b) {
      return h(a, b, !0)
    }

    function j(a, b, c) {
      var d, e = b.prototype;
      d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && h(d, c)
    }

    function k(a, b) {
      return function() {
        return a.apply(b, arguments)
      }
    }

    function l(a, b) {
      return typeof a == ka ? a.apply(b ? b[0] || d : d, b) : a
    }

    function m(a, b) {
      return a === d ? b : a
    }

    function n(a, b, c) {
      g(r(b), function(b) {
        a.addEventListener(b, c, !1)
      })
    }

    function o(a, b, c) {
      g(r(b), function(b) {
        a.removeEventListener(b, c, !1)
      })
    }

    function p(a, b) {
      for (; a;) {
        if (a == b) return !0;
        a = a.parentNode
      }
      return !1
    }

    function q(a, b) {
      return a.indexOf(b) > -1
    }

    function r(a) {
      return a.trim().split(/\s+/g)
    }

    function s(a, b, c) {
      if (a.indexOf && !c) return a.indexOf(b);
      for (var d = 0; d < a.length;) {
        if (c && a[d][c] == b || !c && a[d] === b) return d;
        d++
      }
      return -1
    }

    function t(a) {
      return Array.prototype.slice.call(a, 0)
    }

    function u(a, b, c) {
      for (var d = [], e = [], f = 0; f < a.length;) {
        var g = b ? a[f][b] : a[f];
        s(e, g) < 0 && d.push(a[f]), e[f] = g, f++
      }
      return c && (d = b ? d.sort(function(a, c) {
        return a[b] > c[b]
      }) : d.sort()), d
    }

    function v(a, b) {
      for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ia.length;) {
        if (c = ia[g], e = c ? c + f : b, e in a) return e;
        g++
      }
      return d
    }

    function w() {
      return oa++
    }

    function x(a) {
      var b = a.ownerDocument;
      return b.defaultView || b.parentWindow
    }

    function y(a, b) {
      var c = this;
      this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) {
        l(a.options.enable, [a]) && c.handler(b)
      }, this.init()
    }

    function z(a) {
      var b, c = a.options.inputClass;
      return new(b = c ? c : ra ? N : sa ? Q : qa ? S : M)(a, A)
    }

    function A(a, b, c) {
      var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & ya && 0 === d - e,
        g = b & (Aa | Ba) && 0 === d - e;
      c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, B(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function B(a, b) {
      var c = a.session,
        d = b.pointers,
        e = d.length;
      c.firstInput || (c.firstInput = E(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = E(b) : 1 === e && (c.firstMultiple = !1);
      var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = F(d);
      b.timeStamp = na(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = J(h, i), b.distance = I(h, i), C(c, b), b.offsetDirection = H(b.deltaX, b.deltaY), b.scale = g ? L(g.pointers, d) : 1, b.rotation = g ? K(g.pointers, d) : 0, D(c, b);
      var j = a.element;
      p(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j
    }

    function C(a, b) {
      var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};
      (b.eventType === ya || f.eventType === Aa) && (e = a.prevDelta = {
        x: f.deltaX || 0,
        y: f.deltaY || 0
      }, d = a.offsetDelta = {
        x: c.x,
        y: c.y
      }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function D(a, b) {
      var c, e, f, g, h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;
      if (b.eventType != Ba && (i > xa || h.velocity === d)) {
        var j = h.deltaX - b.deltaX,
          k = h.deltaY - b.deltaY,
          l = G(i, j, k);
        e = l.x, f = l.y, c = ma(l.x) > ma(l.y) ? l.x : l.y, g = H(j, k), a.lastInterval = b
      } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
      b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }

    function E(a) {
      for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
        clientX: la(a.pointers[c].clientX),
        clientY: la(a.pointers[c].clientY)
      }, c++;
      return {
        timeStamp: na(),
        pointers: b,
        center: F(b),
        deltaX: a.deltaX,
        deltaY: a.deltaY
      }
    }

    function F(a) {
      var b = a.length;
      if (1 === b) return {
        x: la(a[0].clientX),
        y: la(a[0].clientY)
      };
      for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
      return {
        x: la(c / b),
        y: la(d / b)
      }
    }

    function G(a, b, c) {
      return {
        x: b / a || 0,
        y: c / a || 0
      }
    }

    function H(a, b) {
      return a === b ? Ca : ma(a) >= ma(b) ? a > 0 ? Da : Ea : b > 0 ? Fa : Ga
    }

    function I(a, b, c) {
      c || (c = Ka);
      var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
      return Math.sqrt(d * d + e * e)
    }

    function J(a, b, c) {
      c || (c = Ka);
      var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];
      return 180 * Math.atan2(e, d) / Math.PI
    }

    function K(a, b) {
      return J(b[1], b[0], La) - J(a[1], a[0], La)
    }

    function L(a, b) {
      return I(b[0], b[1], La) / I(a[0], a[1], La)
    }

    function M() {
      this.evEl = Na, this.evWin = Oa, this.allow = !0, this.pressed = !1, y.apply(this, arguments)
    }

    function N() {
      this.evEl = Ra, this.evWin = Sa, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function O() {
      this.evTarget = Ua, this.evWin = Va, this.started = !1, y.apply(this, arguments)
    }

    function P(a, b) {
      var c = t(a.touches),
        d = t(a.changedTouches);
      return b & (Aa | Ba) && (c = u(c.concat(d), "identifier", !0)), [c, d]
    }

    function Q() {
      this.evTarget = Xa, this.targetIds = {}, y.apply(this, arguments)
    }

    function R(a, b) {
      var c = t(a.touches),
        d = this.targetIds;
      if (b & (ya | za) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
      var e, f, g = t(a.changedTouches),
        h = [],
        i = this.target;
      if (f = c.filter(function(a) {
          return p(a.target, i)
        }), b === ya)
        for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
      for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Aa | Ba) && delete d[g[e].identifier], e++;
      return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0
    }

    function S() {
      y.apply(this, arguments);
      var a = k(this.handler, this);
      this.touch = new Q(this.manager, a), this.mouse = new M(this.manager, a)
    }

    function T(a, b) {
      this.manager = a, this.set(b)
    }

    function U(a) {
      if (q(a, bb)) return bb;
      var b = q(a, cb),
        c = q(a, db);
      return b && c ? cb + " " + db : b || c ? b ? cb : db : q(a, ab) ? ab : _a
    }

    function V(a) {
      this.id = w(), this.manager = null, this.options = i(a || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = eb, this.simultaneous = {}, this.requireFail = []
    }

    function W(a) {
      return a & jb ? "cancel" : a & hb ? "end" : a & gb ? "move" : a & fb ? "start" : ""
    }

    function X(a) {
      return a == Ga ? "down" : a == Fa ? "up" : a == Da ? "left" : a == Ea ? "right" : ""
    }

    function Y(a, b) {
      var c = b.manager;
      return c ? c.get(a) : a
    }

    function Z() {
      V.apply(this, arguments)
    }

    function $() {
      Z.apply(this, arguments), this.pX = null, this.pY = null
    }

    function _() {
      Z.apply(this, arguments)
    }

    function aa() {
      V.apply(this, arguments), this._timer = null, this._input = null
    }

    function ba() {
      Z.apply(this, arguments)
    }

    function ca() {
      Z.apply(this, arguments)
    }

    function da() {
      V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function ea(a, b) {
      return b = b || {}, b.recognizers = m(b.recognizers, ea.defaults.preset), new fa(a, b)
    }

    function fa(a, b) {
      b = b || {}, this.options = i(b, ea.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = z(this), this.touchAction = new T(this, this.options.touchAction), ga(this, !0), g(b.recognizers, function(a) {
        var b = this.add(new a[0](a[1]));
        a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
      }, this)
    }

    function ga(a, b) {
      var c = a.element;
      g(a.options.cssProps, function(a, d) {
        c.style[v(c.style, d)] = b ? a : ""
      })
    }

    function ha(a, c) {
      var d = b.createEvent("Event");
      d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }
    var ia = ["", "webkit", "moz", "MS", "ms", "o"],
      ja = b.createElement("div"),
      ka = "function",
      la = Math.round,
      ma = Math.abs,
      na = Date.now,
      oa = 1,
      pa = /mobile|tablet|ip(ad|hone|od)|android/i,
      qa = "ontouchstart" in a,
      ra = v(a, "PointerEvent") !== d,
      sa = qa && pa.test(navigator.userAgent),
      ta = "touch",
      ua = "pen",
      va = "mouse",
      wa = "kinect",
      xa = 25,
      ya = 1,
      za = 2,
      Aa = 4,
      Ba = 8,
      Ca = 1,
      Da = 2,
      Ea = 4,
      Fa = 8,
      Ga = 16,
      Ha = Da | Ea,
      Ia = Fa | Ga,
      Ja = Ha | Ia,
      Ka = ["x", "y"],
      La = ["clientX", "clientY"];
    y.prototype = {
      handler: function() {},
      init: function() {
        this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(x(this.element), this.evWin, this.domHandler)
      },
      destroy: function() {
        this.evEl && o(this.element, this.evEl, this.domHandler), this.evTarget && o(this.target, this.evTarget, this.domHandler), this.evWin && o(x(this.element), this.evWin, this.domHandler)
      }
    };
    var Ma = {
        mousedown: ya,
        mousemove: za,
        mouseup: Aa
      },
      Na = "mousedown",
      Oa = "mousemove mouseup";
    j(M, y, {
      handler: function(a) {
        var b = Ma[a.type];
        b & ya && 0 === a.button && (this.pressed = !0), b & za && 1 !== a.which && (b = Aa), this.pressed && this.allow && (b & Aa && (this.pressed = !1), this.callback(this.manager, b, {
          pointers: [a],
          changedPointers: [a],
          pointerType: va,
          srcEvent: a
        }))
      }
    });
    var Pa = {
        pointerdown: ya,
        pointermove: za,
        pointerup: Aa,
        pointercancel: Ba,
        pointerout: Ba
      },
      Qa = {
        2: ta,
        3: ua,
        4: va,
        5: wa
      },
      Ra = "pointerdown",
      Sa = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (Ra = "MSPointerDown", Sa = "MSPointerMove MSPointerUp MSPointerCancel"), j(N, y, {
      handler: function(a) {
        var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = Pa[d],
          f = Qa[a.pointerType] || a.pointerType,
          g = f == ta,
          h = s(b, a.pointerId, "pointerId");
        e & ya && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Aa | Ba) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
          pointers: b,
          changedPointers: [a],
          pointerType: f,
          srcEvent: a
        }), c && b.splice(h, 1))
      }
    });
    var Ta = {
        touchstart: ya,
        touchmove: za,
        touchend: Aa,
        touchcancel: Ba
      },
      Ua = "touchstart",
      Va = "touchstart touchmove touchend touchcancel";
    j(O, y, {
      handler: function(a) {
        var b = Ta[a.type];
        if (b === ya && (this.started = !0), this.started) {
          var c = P.call(this, a, b);
          b & (Aa | Ba) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, {
            pointers: c[0],
            changedPointers: c[1],
            pointerType: ta,
            srcEvent: a
          })
        }
      }
    });
    var Wa = {
        touchstart: ya,
        touchmove: za,
        touchend: Aa,
        touchcancel: Ba
      },
      Xa = "touchstart touchmove touchend touchcancel";
    j(Q, y, {
      handler: function(a) {
        var b = Wa[a.type],
          c = R.call(this, a, b);
        c && this.callback(this.manager, b, {
          pointers: c[0],
          changedPointers: c[1],
          pointerType: ta,
          srcEvent: a
        })
      }
    }), j(S, y, {
      handler: function(a, b, c) {
        var d = c.pointerType == ta,
          e = c.pointerType == va;
        if (d) this.mouse.allow = !1;
        else if (e && !this.mouse.allow) return;
        b & (Aa | Ba) && (this.mouse.allow = !0), this.callback(a, b, c)
      },
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy()
      }
    });
    var Ya = v(ja.style, "touchAction"),
      Za = Ya !== d,
      $a = "compute",
      _a = "auto",
      ab = "manipulation",
      bb = "none",
      cb = "pan-x",
      db = "pan-y";
    T.prototype = {
      set: function(a) {
        a == $a && (a = this.compute()), Za && (this.manager.element.style[Ya] = a), this.actions = a.toLowerCase().trim()
      },
      update: function() {
        this.set(this.manager.options.touchAction)
      },
      compute: function() {
        var a = [];
        return g(this.manager.recognizers, function(b) {
          l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
        }), U(a.join(" "))
      },
      preventDefaults: function(a) {
        if (!Za) {
          var b = a.srcEvent,
            c = a.offsetDirection;
          if (this.manager.session.prevented) return void b.preventDefault();
          var d = this.actions,
            e = q(d, bb),
            f = q(d, db),
            g = q(d, cb);
          return e || f && c & Ha || g && c & Ia ? this.preventSrc(b) : void 0
        }
      },
      preventSrc: function(a) {
        this.manager.session.prevented = !0, a.preventDefault()
      }
    };
    var eb = 1,
      fb = 2,
      gb = 4,
      hb = 8,
      ib = hb,
      jb = 16,
      kb = 32;
    V.prototype = {
      defaults: {},
      set: function(a) {
        return h(this.options, a), this.manager && this.manager.touchAction.update(), this
      },
      recognizeWith: function(a) {
        if (f(a, "recognizeWith", this)) return this;
        var b = this.simultaneous;
        return a = Y(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
      },
      dropRecognizeWith: function(a) {
        return f(a, "dropRecognizeWith", this) ? this : (a = Y(a, this), delete this.simultaneous[a.id], this)
      },
      requireFailure: function(a) {
        if (f(a, "requireFailure", this)) return this;
        var b = this.requireFail;
        return a = Y(a, this), -1 === s(b, a) && (b.push(a), a.requireFailure(this)), this
      },
      dropRequireFailure: function(a) {
        if (f(a, "dropRequireFailure", this)) return this;
        a = Y(a, this);
        var b = s(this.requireFail, a);
        return b > -1 && this.requireFail.splice(b, 1), this
      },
      hasRequireFailures: function() {
        return this.requireFail.length > 0
      },
      canRecognizeWith: function(a) {
        return !!this.simultaneous[a.id]
      },
      emit: function(a) {
        function b(b) {
          c.manager.emit(c.options.event + (b ? W(d) : ""), a)
        }
        var c = this,
          d = this.state;
        hb > d && b(!0), b(), d >= hb && b(!0)
      },
      tryEmit: function(a) {
        return this.canEmit() ? this.emit(a) : void(this.state = kb)
      },
      canEmit: function() {
        for (var a = 0; a < this.requireFail.length;) {
          if (!(this.requireFail[a].state & (kb | eb))) return !1;
          a++
        }
        return !0
      },
      recognize: function(a) {
        var b = h({}, a);
        return l(this.options.enable, [this, b]) ? (this.state & (ib | jb | kb) && (this.state = eb), this.state = this.process(b), void(this.state & (fb | gb | hb | jb) && this.tryEmit(b))) : (this.reset(), void(this.state = kb))
      },
      process: function() {},
      getTouchAction: function() {},
      reset: function() {}
    }, j(Z, V, {
      defaults: {
        pointers: 1
      },
      attrTest: function(a) {
        var b = this.options.pointers;
        return 0 === b || a.pointers.length === b
      },
      process: function(a) {
        var b = this.state,
          c = a.eventType,
          d = b & (fb | gb),
          e = this.attrTest(a);
        return d && (c & Ba || !e) ? b | jb : d || e ? c & Aa ? b | hb : b & fb ? b | gb : fb : kb
      }
    }), j($, Z, {
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Ja
      },
      getTouchAction: function() {
        var a = this.options.direction,
          b = [];
        return a & Ha && b.push(db), a & Ia && b.push(cb), b
      },
      directionTest: function(a) {
        var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;
        return e & b.direction || (b.direction & Ha ? (e = 0 === f ? Ca : 0 > f ? Da : Ea, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ca : 0 > g ? Fa : Ga, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
      },
      attrTest: function(a) {
        return Z.prototype.attrTest.call(this, a) && (this.state & fb || !(this.state & fb) && this.directionTest(a))
      },
      emit: function(a) {
        this.pX = a.deltaX, this.pY = a.deltaY;
        var b = X(a.direction);
        b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a)
      }
    }), j(_, Z, {
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [bb]
      },
      attrTest: function(a) {
        return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & fb)
      },
      emit: function(a) {
        if (this._super.emit.call(this, a), 1 !== a.scale) {
          var b = a.scale < 1 ? "in" : "out";
          this.manager.emit(this.options.event + b, a)
        }
      }
    }), j(aa, V, {
      defaults: {
        event: "press",
        pointers: 1,
        time: 500,
        threshold: 5
      },
      getTouchAction: function() {
        return [_a]
      },
      process: function(a) {
        var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime > b.time;
        if (this._input = a, !d || !c || a.eventType & (Aa | Ba) && !f) this.reset();
        else if (a.eventType & ya) this.reset(), this._timer = e(function() {
          this.state = ib, this.tryEmit()
        }, b.time, this);
        else if (a.eventType & Aa) return ib;
        return kb
      },
      reset: function() {
        clearTimeout(this._timer)
      },
      emit: function(a) {
        this.state === ib && (a && a.eventType & Aa ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = na(), this.manager.emit(this.options.event, this._input)))
      }
    }), j(ba, Z, {
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [bb]
      },
      attrTest: function(a) {
        return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & fb)
      }
    }), j(ca, Z, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: .65,
        direction: Ha | Ia,
        pointers: 1
      },
      getTouchAction: function() {
        return $.prototype.getTouchAction.call(this)
      },
      attrTest: function(a) {
        var b, c = this.options.direction;
        return c & (Ha | Ia) ? b = a.velocity : c & Ha ? b = a.velocityX : c & Ia && (b = a.velocityY), this._super.attrTest.call(this, a) && c & a.direction && a.distance > this.options.threshold && ma(b) > this.options.velocity && a.eventType & Aa
      },
      emit: function(a) {
        var b = X(a.direction);
        b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
      }
    }), j(da, V, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 2,
        posThreshold: 10
      },
      getTouchAction: function() {
        return [ab]
      },
      process: function(a) {
        var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime < b.time;
        if (this.reset(), a.eventType & ya && 0 === this.count) return this.failTimeout();
        if (d && f && c) {
          if (a.eventType != Aa) return this.failTimeout();
          var g = !this.pTime || a.timeStamp - this.pTime < b.interval,
            h = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
          this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
          var i = this.count % b.taps;
          if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function() {
            this.state = ib, this.tryEmit()
          }, b.interval, this), fb) : ib
        }
        return kb
      },
      failTimeout: function() {
        return this._timer = e(function() {
          this.state = kb
        }, this.options.interval, this), kb
      },
      reset: function() {
        clearTimeout(this._timer)
      },
      emit: function() {
        this.state == ib && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
      }
    }), ea.VERSION = "2.0.4", ea.defaults = {
      domEvents: !1,
      touchAction: $a,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [
        [ba, {
          enable: !1
        }],
        [_, {
            enable: !1
          },
          ["rotate"]
        ],
        [ca, {
          direction: Ha
        }],
        [$, {
            direction: Ha
          },
          ["swipe"]
        ],
        [da],
        [da, {
            event: "doubletap",
            taps: 2
          },
          ["tap"]
        ],
        [aa]
      ],
      cssProps: {
        userSelect: "default",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var lb = 1,
      mb = 2;
    fa.prototype = {
      set: function(a) {
        return h(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
      },
      stop: function(a) {
        this.session.stopped = a ? mb : lb
      },
      recognize: function(a) {
        var b = this.session;
        if (!b.stopped) {
          this.touchAction.preventDefaults(a);
          var c, d = this.recognizers,
            e = b.curRecognizer;
          (!e || e && e.state & ib) && (e = b.curRecognizer = null);
          for (var f = 0; f < d.length;) c = d[f], b.stopped === mb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (fb | gb | hb) && (e = b.curRecognizer = c), f++
        }
      },
      get: function(a) {
        if (a instanceof V) return a;
        for (var b = this.recognizers, c = 0; c < b.length; c++)
          if (b[c].options.event == a) return b[c];
        return null
      },
      add: function(a) {
        if (f(a, "add", this)) return this;
        var b = this.get(a.options.event);
        return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
      },
      remove: function(a) {
        if (f(a, "remove", this)) return this;
        var b = this.recognizers;
        return a = this.get(a), b.splice(s(b, a), 1), this.touchAction.update(), this
      },
      on: function(a, b) {
        var c = this.handlers;
        return g(r(a), function(a) {
          c[a] = c[a] || [], c[a].push(b)
        }), this
      },
      off: function(a, b) {
        var c = this.handlers;
        return g(r(a), function(a) {
          b ? c[a].splice(s(c[a], b), 1) : delete c[a]
        }), this
      },
      emit: function(a, b) {
        this.options.domEvents && ha(a, b);
        var c = this.handlers[a] && this.handlers[a].slice();
        if (c && c.length) {
          b.type = a, b.preventDefault = function() {
            b.srcEvent.preventDefault()
          };
          for (var d = 0; d < c.length;) c[d](b), d++
        }
      },
      destroy: function() {
        this.element && ga(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
      }
    }, h(ea, {
      INPUT_START: ya,
      INPUT_MOVE: za,
      INPUT_END: Aa,
      INPUT_CANCEL: Ba,
      STATE_POSSIBLE: eb,
      STATE_BEGAN: fb,
      STATE_CHANGED: gb,
      STATE_ENDED: hb,
      STATE_RECOGNIZED: ib,
      STATE_CANCELLED: jb,
      STATE_FAILED: kb,
      DIRECTION_NONE: Ca,
      DIRECTION_LEFT: Da,
      DIRECTION_RIGHT: Ea,
      DIRECTION_UP: Fa,
      DIRECTION_DOWN: Ga,
      DIRECTION_HORIZONTAL: Ha,
      DIRECTION_VERTICAL: Ia,
      DIRECTION_ALL: Ja,
      Manager: fa,
      Input: y,
      TouchAction: T,
      TouchInput: Q,
      MouseInput: M,
      PointerEventInput: N,
      TouchMouseInput: S,
      SingleTouchInput: O,
      Recognizer: V,
      AttrRecognizer: Z,
      Tap: da,
      Pan: $,
      Swipe: ca,
      Pinch: _,
      Rotate: ba,
      Press: aa,
      on: n,
      off: o,
      each: g,
      merge: i,
      extend: h,
      inherit: j,
      bindFn: k,
      prefixed: v
    }), typeof define == ka && define.amd ? define(function() {
      return ea
    }) : "undefined" != typeof module && module.exports ? module.exports = ea : a[c] = ea
  }(window, document, "Hammer"),
  function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], a) : "object" == typeof exports ? a(require("jquery"), require("hammerjs")) : a(jQuery, Hammer)
  }(function(a, b) {
    function c(c, d) {
      var e = a(c);
      e.data("hammer") || e.data("hammer", new b(e[0], d))
    }
    a.fn.hammer = function(a) {
      return this.each(function() {
        c(this, a)
      })
    }, b.Manager.prototype.emit = function(b) {
      return function(c, d) {
        b.call(this, c, d), a(this.element).trigger({
          type: c,
          gesture: d
        })
      }
    }(b.Manager.prototype.emit)
  }),
  function(a) {
    a.Package ? Materialize = {} : a.Materialize = {}
  }(window),
  function(a) {
    for (var b = 0, c = ["webkit", "moz"], d = a.requestAnimationFrame, e = a.cancelAnimationFrame, f = c.length; --f >= 0 && !d;) d = a[c[f] + "RequestAnimationFrame"], e = a[c[f] + "CancelRequestAnimationFrame"];
    d && e || (d = function(a) {
      var c = +Date.now(),
        d = Math.max(b + 16, c);
      return setTimeout(function() {
        a(b = d)
      }, d - c)
    }, e = clearTimeout), a.requestAnimationFrame = d, a.cancelAnimationFrame = e
  }(window), Materialize.objectSelectorString = function(a) {
    var b = a.prop("tagName") || "",
      c = a.attr("id") || "",
      d = a.attr("class") || "";
    return (b + c + d).replace(/\s/g, "")
  }, Materialize.guid = function() {
    function a() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
      return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
    }
  }(), Materialize.escapeHash = function(a) {
    return a.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
  }, Materialize.elementOrParentIsFixed = function(a) {
    var b = $(a),
      c = b.add(b.parents()),
      d = !1;
    return c.each(function() {
      if ("fixed" === $(this).css("position")) return d = !0, !1
    }), d
  };
var getTime = Date.now || function() {
  return (new Date).getTime()
};
Materialize.throttle = function(a, b, c) {
  var d, e, f, g = null,
    h = 0;
  c || (c = {});
  var i = function() {
    h = c.leading === !1 ? 0 : getTime(), g = null, f = a.apply(d, e), d = e = null
  };
  return function() {
    var j = getTime();
    h || c.leading !== !1 || (h = j);
    var k = b - (j - h);
    return d = this, e = arguments, k <= 0 ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
  }
};
var Vel;
Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity,
  function(a) {
    a.fn.collapsible = function(b, c) {
      var d = {
          accordion: void 0,
          onOpen: void 0,
          onClose: void 0
        },
        e = b;
      return b = a.extend(d, b), this.each(function() {
        function d(b) {
          m = l.find("> li > .collapsible-header"), b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({
            duration: 350,
            easing: "easeOutQuart",
            queue: !1,
            complete: function() {
              a(this).css("height", "")
            }
          }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({
            duration: 350,
            easing: "easeOutQuart",
            queue: !1,
            complete: function() {
              a(this).css("height", "")
            }
          }), m.not(b).removeClass("active").parent().removeClass("active"), m.not(b).parent().children(".collapsible-body").stop(!0, !1).each(function() {
            a(this).is(":visible") && a(this).slideUp({
              duration: 350,
              easing: "easeOutQuart",
              queue: !1,
              complete: function() {
                a(this).css("height", ""), h(a(this).siblings(".collapsible-header"))
              }
            })
          })
        }

        function f(b) {
          b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({
            duration: 350,
            easing: "easeOutQuart",
            queue: !1,
            complete: function() {
              a(this).css("height", "")
            }
          }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({
            duration: 350,
            easing: "easeOutQuart",
            queue: !1,
            complete: function() {
              a(this).css("height", "")
            }
          })
        }

        function g(a, c) {
          c || a.toggleClass("active"), b.accordion || "accordion" === n || void 0 === n ? d(a) : f(a), h(a)
        }

        function h(a) {
          a.hasClass("active") ? "function" == typeof b.onOpen && b.onOpen.call(this, a.parent()) : "function" == typeof b.onClose && b.onClose.call(this, a.parent())
        }

        function i(a) {
          var b = j(a);
          return b.length > 0
        }

        function j(a) {
          return a.closest("li > .collapsible-header")
        }

        function k() {
          l.off("click.collapse", "> li > .collapsible-header")
        }
        var l = a(this),
          m = a(this).find("> li > .collapsible-header"),
          n = l.data("collapsible");
        if ("destroy" === e) return void k();
        if (c >= 0 && c < m.length) {
          var o = m.eq(c);
          return void(o.length && ("open" === e || "close" === e && o.hasClass("active")) && g(o))
        }
        k(), l.on("click.collapse", "> li > .collapsible-header", function(b) {
          var c = a(b.target);
          i(c) && (c = j(c)), g(c)
        }), b.accordion || "accordion" === n || void 0 === n ? g(m.filter(".active").first(), !0) : m.filter(".active").each(function() {
          g(a(this), !0)
        })
      })
    }, a(document).ready(function() {
      a(".collapsible").collapsible()
    })
  }(jQuery),
  function(a) {
    a.fn.scrollTo = function(b) {
      return a(this).scrollTop(a(this).scrollTop() - a(this).offset().top + a(b).offset().top), this
    }, a.fn.dropdown = function(b) {
      var c = {
        inDuration: 300,
        outDuration: 225,
        constrainWidth: !0,
        hover: !1,
        gutter: 0,
        belowOrigin: !1,
        alignment: "left",
        stopPropagation: !1
      };
      return "open" === b ? (this.each(function() {
        a(this).trigger("open")
      }), !1) : "close" === b ? (this.each(function() {
        a(this).trigger("close")
      }), !1) : void this.each(function() {
        function d() {
          void 0 !== g.data("induration") && (h.inDuration = g.data("induration")), void 0 !== g.data("outduration") && (h.outDuration = g.data("outduration")), void 0 !== g.data("constrainwidth") && (h.constrainWidth = g.data("constrainwidth")), void 0 !== g.data("hover") && (h.hover = g.data("hover")), void 0 !== g.data("gutter") && (h.gutter = g.data("gutter")), void 0 !== g.data("beloworigin") && (h.belowOrigin = g.data("beloworigin")), void 0 !== g.data("alignment") && (h.alignment = g.data("alignment")), void 0 !== g.data("stoppropagation") && (h.stopPropagation = g.data("stoppropagation"))
        }

        function e(b) {
          "focus" === b && (i = !0), d(), j.addClass("active"), g.addClass("active"), h.constrainWidth === !0 ? j.css("width", g.outerWidth()) : j.css("white-space", "nowrap");
          var c = window.innerHeight,
            e = g.innerHeight(),
            k = g.offset().left,
            l = g.offset().top - a(window).scrollTop(),
            m = h.alignment,
            n = 0,
            o = 0,
            p = 0;
          h.belowOrigin === !0 && (p = e);
          var q = 0,
            r = 0,
            s = g.parent();
          if (s.is("body") || (s[0].scrollHeight > s[0].clientHeight && (q = s[0].scrollTop), s[0].scrollWidth > s[0].clientWidth && (r = s[0].scrollLeft)), k + j.innerWidth() > a(window).width() ? m = "right" : k - j.innerWidth() + g.innerWidth() < 0 && (m = "left"), l + j.innerHeight() > c)
            if (l + e - j.innerHeight() < 0) {
              var t = c - l - p;
              j.css("max-height", t)
            } else p || (p += e), p -= j.innerHeight();
          if ("left" === m) n = h.gutter, o = g.position().left + n;
          else if ("right" === m) {
            var u = g.position().left + g.outerWidth() - j.outerWidth();
            n = -h.gutter, o = u + n
          }
          j.css({
            position: "absolute",
            top: g.position().top + p + q,
            left: o + r
          }), j.stop(!0, !0).css("opacity", 0).slideDown({
            queue: !1,
            duration: h.inDuration,
            easing: "easeOutCubic",
            complete: function() {
              a(this).css("height", "")
            }
          }).animate({
            opacity: 1
          }, {
            queue: !1,
            duration: h.inDuration,
            easing: "easeOutSine"
          }), setTimeout(function() {
            a(document).bind("click." + j.attr("id"), function(b) {
              f(), a(document).unbind("click." + j.attr("id"))
            })
          }, 0)
        }

        function f() {
          i = !1, j.fadeOut(h.outDuration), j.removeClass("active"), g.removeClass("active"), a(document).unbind("click." + j.attr("id")), setTimeout(function() {
            j.css("max-height", "")
          }, h.outDuration)
        }
        var g = a(this),
          h = a.extend({}, c, b),
          i = !1,
          j = a("#" + g.attr("data-activates"));
        if (d(), g.after(j), h.hover) {
          var k = !1;
          g.unbind("click." + g.attr("id")), g.on("mouseenter", function(a) {
            k === !1 && (e(), k = !0)
          }), g.on("mouseleave", function(b) {
            var c = b.toElement || b.relatedTarget;
            a(c).closest(".dropdown-content").is(j) || (j.stop(!0, !0), f(), k = !1)
          }), j.on("mouseleave", function(b) {
            var c = b.toElement || b.relatedTarget;
            a(c).closest(".dropdown-button").is(g) || (j.stop(!0, !0), f(), k = !1)
          })
        } else g.unbind("click." + g.attr("id")), g.bind("click." + g.attr("id"), function(b) {
          i || (g[0] != b.currentTarget || g.hasClass("active") || 0 !== a(b.target).closest(".dropdown-content").length ? g.hasClass("active") && (f(), a(document).unbind("click." + j.attr("id"))) : (b.preventDefault(), h.stopPropagation && b.stopPropagation(), e("click")))
        });
        g.on("open", function(a, b) {
          e(b)
        }), g.on("close", f)
      })
    }, a(document).ready(function() {
      a(".dropdown-button").dropdown()
    })
  }(jQuery),
  function(a) {
    var b = 0,
      c = 0,
      d = function() {
        return c++, "materialize-modal-overlay-" + c
      },
      e = {
        init: function(c) {
          var e = {
            opacity: .5,
            inDuration: 350,
            outDuration: 250,
            ready: void 0,
            complete: void 0,
            dismissible: !0,
            startingTop: "4%",
            endingTop: "10%"
          };
          return c = a.extend(e, c), this.each(function() {
            var e = a(this),
              f = a(this).attr("id") || "#" + a(this).data("target"),
              g = function() {
                var d = e.data("overlay-id"),
                  f = a("#" + d);
                e.removeClass("open"), a("body").css({
                  overflow: "",
                  width: ""
                }), e.find(".modal-close").off("click.close"), a(document).off("keyup.modal" + d), f.velocity({
                  opacity: 0
                }, {
                  duration: c.outDuration,
                  queue: !1,
                  ease: "easeOutQuart"
                });
                var g = {
                  duration: c.outDuration,
                  queue: !1,
                  ease: "easeOutCubic",
                  complete: function() {
                    a(this).css({
                      display: "none"
                    }), "function" == typeof c.complete && c.complete.call(this, e), f.remove(), b--
                  }
                };
                e.hasClass("bottom-sheet") ? e.velocity({
                  bottom: "-100%",
                  opacity: 0
                }, g) : e.velocity({
                  top: c.startingTop,
                  opacity: 0,
                  scaleX: .7
                }, g)
              },
              h = function(f) {
                var h = a("body"),
                  i = h.innerWidth();
                if (h.css("overflow", "hidden"), h.width(i), !e.hasClass("open")) {
                  var j = d(),
                    k = a('<div class="modal-overlay"></div>');
                  lStack = ++b, k.attr("id", j).css("z-index", 1e3 + 2 * lStack), e.data("overlay-id", j).css("z-index", 1e3 + 2 * lStack + 1), e.addClass("open"), a("body").append(k), c.dismissible && (k.click(function() {
                    g()
                  }), a(document).on("keyup.modal" + j, function(a) {
                    27 === a.keyCode && g()
                  })), e.find(".modal-close").on("click.close", function(a) {
                    g()
                  }), k.css({
                    display: "block",
                    opacity: 0
                  }), e.css({
                    display: "block",
                    opacity: 0
                  }), k.velocity({
                    opacity: c.opacity
                  }, {
                    duration: c.inDuration,
                    queue: !1,
                    ease: "easeOutCubic"
                  }), e.data("associated-overlay", k[0]);
                  var l = {
                    duration: c.inDuration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                      "function" == typeof c.ready && c.ready.call(this, e, f)
                    }
                  };
                  e.hasClass("bottom-sheet") ? e.velocity({
                    bottom: "0",
                    opacity: 1
                  }, l) : (a.Velocity.hook(e, "scaleX", .7), e.css({
                    top: c.startingTop
                  }), e.velocity({
                    top: c.endingTop,
                    opacity: 1,
                    scaleX: "1"
                  }, l))
                }
              };
            a(document).off("click.modalTrigger", 'a[href="#' + f + '"], [data-target="' + f + '"]'), a(this).off("openModal"), a(this).off("closeModal"), a(document).on("click.modalTrigger", 'a[href="#' + f + '"], [data-target="' + f + '"]', function(b) {
              c.startingTop = (a(this).offset().top - a(window).scrollTop()) / 1.15, h(a(this)), b.preventDefault()
            }), a(this).on("openModal", function() {
              a(this).attr("href") || "#" + a(this).data("target");
              h()
            }), a(this).on("closeModal", function() {
              g()
            })
          })
        },
        open: function() {
          a(this).trigger("openModal")
        },
        close: function() {
          a(this).trigger("closeModal")
        }
      };
    a.fn.modal = function(b) {
      return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.modal") : e.init.apply(this, arguments)
    }
  }(jQuery),
  function(a) {
    a.fn.materialbox = function() {
      return this.each(function() {
        function b() {
          f = !1;
          var b = i.parent(".material-placeholder"),
            d = (window.innerWidth, window.innerHeight, i.data("width")),
            g = i.data("height");
          i.velocity("stop", !0), a("#materialbox-overlay").velocity("stop", !0), a(".materialbox-caption").velocity("stop", !0), a("#materialbox-overlay").velocity({
            opacity: 0
          }, {
            duration: h,
            queue: !1,
            easing: "easeOutQuad",
            complete: function() {
              e = !1, a(this).remove()
            }
          }), i.velocity({
            width: d,
            height: g,
            left: 0,
            top: 0
          }, {
            duration: h,
            queue: !1,
            easing: "easeOutQuad",
            complete: function() {
              b.css({
                height: "",
                width: "",
                position: "",
                top: "",
                left: ""
              }), i.removeAttr("style"), i.attr("style", k), i.removeClass("active"), f = !0, c && c.css("overflow", "")
            }
          }), a(".materialbox-caption").velocity({
            opacity: 0
          }, {
            duration: h,
            queue: !1,
            easing: "easeOutQuad",
            complete: function() {
              a(this).remove()
            }
          })
        }
        if (!a(this).hasClass("initialized")) {
          a(this).addClass("initialized");
          var c, d, e = !1,
            f = !0,
            g = 275,
            h = 200,
            i = a(this),
            j = a("<div></div>").addClass("material-placeholder"),
            k = i.attr("style");
          i.wrap(j), i.on("click", function() {
            var h = i.parent(".material-placeholder"),
              j = window.innerWidth,
              k = window.innerHeight,
              l = i.width(),
              m = i.height();
            if (f === !1) return b(), !1;
            if (e && f === !0) return b(), !1;
            f = !1, i.addClass("active"), e = !0, h.css({
              width: h[0].getBoundingClientRect().width,
              height: h[0].getBoundingClientRect().height,
              position: "relative",
              top: 0,
              left: 0
            }), c = void 0, d = h[0].parentNode;
            for (; null !== d && !a(d).is(document);) {
              var n = a(d);
              "visible" !== n.css("overflow") && (n.css("overflow", "visible"), c = void 0 === c ? n : c.add(n)), d = d.parentNode
            }
            i.css({
              position: "absolute",
              "z-index": 1e3,
              "will-change": "left, top, width, height"
            }).data("width", l).data("height", m);
            var o = a('<div id="materialbox-overlay"></div>').css({
              opacity: 0
            }).click(function() {
              f === !0 && b()
            });
            i.before(o);
            var p = o[0].getBoundingClientRect();
            if (o.css({
                width: j,
                height: k,
                left: -1 * p.left,
                top: -1 * p.top
              }), o.velocity({
                opacity: 1
              }, {
                duration: g,
                queue: !1,
                easing: "easeOutQuad"
              }), "" !== i.data("caption")) {
              var q = a('<div class="materialbox-caption"></div>');
              q.text(i.data("caption")), a("body").append(q), q.css({
                display: "inline"
              }), q.velocity({
                opacity: 1
              }, {
                duration: g,
                queue: !1,
                easing: "easeOutQuad"
              })
            }
            var r = 0,
              s = l / j,
              t = m / k,
              u = 0,
              v = 0;
            s > t ? (r = m / l, u = .9 * j, v = .9 * j * r) : (r = l / m, u = .9 * k * r, v = .9 * k), i.hasClass("responsive-img") ? i.velocity({
              "max-width": u,
              width: l
            }, {
              duration: 0,
              queue: !1,
              complete: function() {
                i.css({
                  left: 0,
                  top: 0
                }).velocity({
                  height: v,
                  width: u,
                  left: a(document).scrollLeft() + j / 2 - i.parent(".material-placeholder").offset().left - u / 2,
                  top: a(document).scrollTop() + k / 2 - i.parent(".material-placeholder").offset().top - v / 2
                }, {
                  duration: g,
                  queue: !1,
                  easing: "easeOutQuad",
                  complete: function() {
                    f = !0
                  }
                })
              }
            }) : i.css("left", 0).css("top", 0).velocity({
              height: v,
              width: u,
              left: a(document).scrollLeft() + j / 2 - i.parent(".material-placeholder").offset().left - u / 2,
              top: a(document).scrollTop() + k / 2 - i.parent(".material-placeholder").offset().top - v / 2
            }, {
              duration: g,
              queue: !1,
              easing: "easeOutQuad",
              complete: function() {
                f = !0
              }
            })
          }), a(window).scroll(function() {
            e && b()
          }), a(document).keyup(function(a) {
            27 === a.keyCode && f === !0 && e && b()
          })
        }
      })
    }, a(document).ready(function() {
      a(".materialboxed").materialbox()
    })
  }(jQuery),
  function(a) {
    a.fn.parallax = function() {
      var b = a(window).width();
      return this.each(function(c) {
        function d(c) {
          var d;
          d = b < 601 ? e.height() > 0 ? e.height() : e.children("img").height() : e.height() > 0 ? e.height() : 500;
          var f = e.children("img").first(),
            g = f.height(),
            h = g - d,
            i = e.offset().top + d,
            j = e.offset().top,
            k = a(window).scrollTop(),
            l = window.innerHeight,
            m = k + l,
            n = (m - j) / (d + l),
            o = Math.round(h * n);
          c && f.css("display", "block"), i > k && j < k + l && f.css("transform", "translate3D(-50%," + o + "px, 0)")
        }
        var e = a(this);
        e.addClass("parallax"), e.children("img").one("load", function() {
          d(!0)
        }).each(function() {
          this.complete && a(this).trigger("load")
        }), a(window).scroll(function() {
          b = a(window).width(), d(!1)
        }), a(window).resize(function() {
          b = a(window).width(), d(!1)
        })
      })
    }
  }(jQuery),
  function(a) {
    var b = {
      init: function(b) {
        var c = {
          onShow: null,
          swipeable: !1,
          responsiveThreshold: 1 / 0
        };
        b = a.extend(c, b);
        var d = Materialize.objectSelectorString(a(this));
        return this.each(function(c) {
          var e, f, g, h, i, j = d + c,
            k = a(this),
            l = a(window).width(),
            m = k.find("li.tab a"),
            n = k.width(),
            o = a(),
            p = Math.max(n, k[0].scrollWidth) / m.length,
            q = prev_index = 0,
            r = !1,
            s = 300,
            t = function(a) {
              return Math.ceil(n - a.position().left - a.outerWidth() - k.scrollLeft())
            },
            u = function(a) {
              return Math.floor(a.position().left + k.scrollLeft())
            },
            v = function(a) {
              q - a >= 0 ? (h.velocity({
                right: t(e)
              }, {
                duration: s,
                queue: !1,
                easing: "easeOutQuad"
              }), h.velocity({
                left: u(e)
              }, {
                duration: s,
                queue: !1,
                easing: "easeOutQuad",
                delay: 90
              })) : (h.velocity({
                left: u(e)
              }, {
                duration: s,
                queue: !1,
                easing: "easeOutQuad"
              }), h.velocity({
                right: t(e)
              }, {
                duration: s,
                queue: !1,
                easing: "easeOutQuad",
                delay: 90
              }))
            };
          b.swipeable && l > b.responsiveThreshold && (b.swipeable = !1), e = a(m.filter('[href="' + location.hash + '"]')), 0 === e.length && (e = a(this).find("li.tab a.active").first()), 0 === e.length && (e = a(this).find("li.tab a").first()), e.addClass("active"), q = m.index(e), q < 0 && (q = 0), void 0 !== e[0] && (f = a(e[0].hash), f.addClass("active")), k.find(".indicator").length || k.append('<div class="indicator"></div>'), h = k.find(".indicator"), k.append(h), k.is(":visible") && setTimeout(function() {
            h.css({
              right: t(e)
            }), h.css({
              left: u(e)
            })
          }, 0), a(window).off("resize.tabs-" + j).on("resize.tabs-" + j, function() {
            n = k.width(), p = Math.max(n, k[0].scrollWidth) / m.length, q < 0 && (q = 0), 0 !== p && 0 !== n && (h.css({
              right: t(e)
            }), h.css({
              left: u(e)
            }))
          }), b.swipeable ? (m.each(function() {
            var b = a(Materialize.escapeHash(this.hash));
            b.addClass("carousel-item"), o = o.add(b)
          }), g = o.wrapAll('<div class="tabs-content carousel"></div>'), o.css("display", ""), a(".tabs-content.carousel").carousel({
            fullWidth: !0,
            noWrap: !0,
            onCycleTo: function(a) {
              if (!r) {
                var b = q;
                q = g.index(a), e = m.eq(q), v(b)
              }
            }
          })) : m.not(e).each(function() {
            a(Materialize.escapeHash(this.hash)).hide()
          }), k.off("click.tabs").on("click.tabs", "a", function(c) {
            if (a(this).parent().hasClass("disabled")) return void c.preventDefault();
            if (!a(this).attr("target")) {
              r = !0, n = k.width(), p = Math.max(n, k[0].scrollWidth) / m.length, e.removeClass("active");
              var d = f;
              e = a(this), f = a(Materialize.escapeHash(this.hash)), m = k.find("li.tab a");
              e.position();
              e.addClass("active"), prev_index = q, q = m.index(a(this)), q < 0 && (q = 0), b.swipeable ? o.length && o.carousel("set", q) : (void 0 !== f && (f.show(), f.addClass("active"), "function" == typeof b.onShow && b.onShow.call(this, f)), void 0 === d || d.is(f) || (d.hide(), d.removeClass("active"))), i = setTimeout(function() {
                r = !1
              }, s), v(prev_index), c.preventDefault()
            }
          })
        })
      },
      select_tab: function(a) {
        this.find('a[href="#' + a + '"]').trigger("click")
      }
    };
    a.fn.tabs = function(c) {
      return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tabs") : b.init.apply(this, arguments)
    }, a(document).ready(function() {
      a("ul.tabs").tabs()
    })
  }(jQuery),
  function(a) {
    a.fn.tooltip = function(c) {
      var d = 5,
        e = {
          delay: 350,
          tooltip: "",
          position: "bottom",
          html: !1
        };
      return "remove" === c ? (this.each(function() {
        a("#" + a(this).attr("data-tooltip-id")).remove(), a(this).off("mouseenter.tooltip mouseleave.tooltip")
      }), !1) : (c = a.extend(e, c), this.each(function() {
        var e = Materialize.guid(),
          f = a(this);
        f.attr("data-tooltip-id") && a("#" + f.attr("data-tooltip-id")).remove(), f.attr("data-tooltip-id", e);
        var g, h, i, j, k, l, m = function() {
          g = f.attr("data-html") ? "true" === f.attr("data-html") : c.html, h = f.attr("data-delay"), h = void 0 === h || "" === h ? c.delay : h, i = f.attr("data-position"), i = void 0 === i || "" === i ? c.position : i, j = f.attr("data-tooltip"), j = void 0 === j || "" === j ? c.tooltip : j
        };
        m();
        var n = function() {
          var b = a('<div class="material-tooltip"></div>');
          return j = g ? a("<span></span>").html(j) : a("<span></span>").text(j), b.append(j).appendTo(a("body")).attr("id", e), l = a('<div class="backdrop"></div>'), l.appendTo(b), b
        };
        k = n(), f.off("mouseenter.tooltip mouseleave.tooltip");
        var o, p = !1;
        f.on({
          "mouseenter.tooltip": function(a) {
            var c = function() {
              m(), p = !0, k.velocity("stop"), l.velocity("stop"), k.css({
                visibility: "visible",
                left: "0px",
                top: "0px"
              });
              var a, c, e, g = f.outerWidth(),
                h = f.outerHeight(),
                j = k.outerHeight(),
                n = k.outerWidth(),
                o = "0px",
                q = "0px",
                r = l[0].offsetWidth,
                s = l[0].offsetHeight,
                t = 8,
                u = 8,
                v = 0;
              "top" === i ? (a = f.offset().top - j - d, c = f.offset().left + g / 2 - n / 2, e = b(c, a, n, j), o = "-10px", l.css({
                bottom: 0,
                left: 0,
                borderRadius: "14px 14px 0 0",
                transformOrigin: "50% 100%",
                marginTop: j,
                marginLeft: n / 2 - r / 2
              })) : "left" === i ? (a = f.offset().top + h / 2 - j / 2, c = f.offset().left - n - d, e = b(c, a, n, j), q = "-10px", l.css({
                top: "-7px",
                right: 0,
                width: "14px",
                height: "14px",
                borderRadius: "14px 0 0 14px",
                transformOrigin: "95% 50%",
                marginTop: j / 2,
                marginLeft: n
              })) : "right" === i ? (a = f.offset().top + h / 2 - j / 2, c = f.offset().left + g + d, e = b(c, a, n, j), q = "+10px", l.css({
                top: "-7px",
                left: 0,
                width: "14px",
                height: "14px",
                borderRadius: "0 14px 14px 0",
                transformOrigin: "5% 50%",
                marginTop: j / 2,
                marginLeft: "0px"
              })) : (a = f.offset().top + f.outerHeight() + d, c = f.offset().left + g / 2 - n / 2, e = b(c, a, n, j), o = "+10px", l.css({
                top: 0,
                left: 0,
                marginLeft: n / 2 - r / 2
              })), k.css({
                top: e.y,
                left: e.x
              }), t = Math.SQRT2 * n / parseInt(r), u = Math.SQRT2 * j / parseInt(s), v = Math.max(t, u), k.velocity({
                translateY: o,
                translateX: q
              }, {
                duration: 350,
                queue: !1
              }).velocity({
                opacity: 1
              }, {
                duration: 300,
                delay: 50,
                queue: !1
              }), l.css({
                visibility: "visible"
              }).velocity({
                opacity: 1
              }, {
                duration: 55,
                delay: 0,
                queue: !1
              }).velocity({
                scaleX: v,
                scaleY: v
              }, {
                duration: 300,
                delay: 0,
                queue: !1,
                easing: "easeInOutQuad"
              })
            };
            o = setTimeout(c, h)
          },
          "mouseleave.tooltip": function() {
            p = !1, clearTimeout(o), setTimeout(function() {
              p !== !0 && (k.velocity({
                opacity: 0,
                translateY: 0,
                translateX: 0
              }, {
                duration: 225,
                queue: !1
              }), l.velocity({
                opacity: 0,
                scaleX: 1,
                scaleY: 1
              }, {
                duration: 225,
                queue: !1,
                complete: function() {
                  l.css({
                    visibility: "hidden"
                  }), k.css({
                    visibility: "hidden"
                  }), p = !1
                }
              }))
            }, 225)
          }
        })
      }))
    };
    var b = function(b, c, d, e) {
      var f = b,
        g = c;
      return f < 0 ? f = 4 : f + d > window.innerWidth && (f -= f + d - window.innerWidth), g < 0 ? g = 4 : g + e > window.innerHeight + a(window).scrollTop && (g -= g + e - window.innerHeight), {
        x: f,
        y: g
      }
    };
    a(document).ready(function() {
      a(".tooltipped").tooltip()
    })
  }(jQuery),
  function(a) {
    "use strict";

    function b(a) {
      return null !== a && a === a.window
    }

    function c(a) {
      return b(a) ? a : 9 === a.nodeType && a.defaultView
    }

    function d(a) {
      var b, d, e = {
          top: 0,
          left: 0
        },
        f = a && a.ownerDocument;
      return b = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = c(f), {
        top: e.top + d.pageYOffset - b.clientTop,
        left: e.left + d.pageXOffset - b.clientLeft
      }
    }

    function e(a) {
      var b = "";
      for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
      return b
    }

    function f(a) {
      if (k.allowEvent(a) === !1) return null;
      for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
        if (!(c instanceof SVGElement || c.className.indexOf("waves-effect") === -1)) {
          b = c;
          break
        }
        if (c.classList.contains("waves-effect")) {
          b = c;
          break
        }
        c = c.parentElement
      }
      return b
    }

    function g(b) {
      var c = f(b);
      null !== c && (j.show(b, c), "ontouchstart" in a && (c.addEventListener("touchend", j.hide, !1), c.addEventListener("touchcancel", j.hide, !1)), c.addEventListener("mouseup", j.hide, !1), c.addEventListener("mouseleave", j.hide, !1))
    }
    var h = h || {},
      i = document.querySelectorAll.bind(document),
      j = {
        duration: 750,
        show: function(a, b) {
          if (2 === a.button) return !1;
          var c = b || this,
            f = document.createElement("div");
          f.className = "waves-ripple", c.appendChild(f);
          var g = d(c),
            h = a.pageY - g.top,
            i = a.pageX - g.left,
            k = "scale(" + c.clientWidth / 100 * 10 + ")";
          "touches" in a && (h = a.touches[0].pageY - g.top, i = a.touches[0].pageX - g.left), f.setAttribute("data-hold", Date.now()), f.setAttribute("data-scale", k), f.setAttribute("data-x", i), f.setAttribute("data-y", h);
          var l = {
            top: h + "px",
            left: i + "px"
          };
          f.className = f.className + " waves-notransition", f.setAttribute("style", e(l)), f.className = f.className.replace("waves-notransition", ""), l["-webkit-transform"] = k, l["-moz-transform"] = k, l["-ms-transform"] = k, l["-o-transform"] = k, l.transform = k, l.opacity = "1", l["-webkit-transition-duration"] = j.duration + "ms", l["-moz-transition-duration"] = j.duration + "ms", l["-o-transition-duration"] = j.duration + "ms", l["transition-duration"] = j.duration + "ms", l["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f.setAttribute("style", e(l))
        },
        hide: function(a) {
          k.touchup(a);
          var b = this,
            c = (1.4 * b.clientWidth, null),
            d = b.getElementsByClassName("waves-ripple");
          if (!(d.length > 0)) return !1;
          c = d[d.length - 1];
          var f = c.getAttribute("data-x"),
            g = c.getAttribute("data-y"),
            h = c.getAttribute("data-scale"),
            i = Date.now() - Number(c.getAttribute("data-hold")),
            l = 350 - i;
          l < 0 && (l = 0), setTimeout(function() {
            var a = {
              top: g + "px",
              left: f + "px",
              opacity: "0",
              "-webkit-transition-duration": j.duration + "ms",
              "-moz-transition-duration": j.duration + "ms",
              "-o-transition-duration": j.duration + "ms",
              "transition-duration": j.duration + "ms",
              "-webkit-transform": h,
              "-moz-transform": h,
              "-ms-transform": h,
              "-o-transform": h,
              transform: h
            };
            c.setAttribute("style", e(a)), setTimeout(function() {
              try {
                b.removeChild(c)
              } catch (a) {
                return !1
              }
            }, j.duration)
          }, l)
        },
        wrapInput: function(a) {
          for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if ("input" === c.tagName.toLowerCase()) {
              var d = c.parentNode;
              if ("i" === d.tagName.toLowerCase() && d.className.indexOf("waves-effect") !== -1) continue;
              var e = document.createElement("i");
              e.className = c.className + " waves-input-wrapper";
              var f = c.getAttribute("style");
              f || (f = ""), e.setAttribute("style", f), c.className = "waves-button-input", c.removeAttribute("style"), d.replaceChild(e, c), e.appendChild(c)
            }
          }
        }
      },
      k = {
        touches: 0,
        allowEvent: function(a) {
          var b = !0;
          return "touchstart" === a.type ? k.touches += 1 : "touchend" === a.type || "touchcancel" === a.type ? setTimeout(function() {
            k.touches > 0 && (k.touches -= 1)
          }, 500) : "mousedown" === a.type && k.touches > 0 && (b = !1), b
        },
        touchup: function(a) {
          k.allowEvent(a)
        }
      };
    h.displayEffect = function(b) {
      b = b || {}, "duration" in b && (j.duration = b.duration), j.wrapInput(i(".waves-effect")), "ontouchstart" in a && document.body.addEventListener("touchstart", g, !1), document.body.addEventListener("mousedown", g, !1)
    }, h.attach = function(b) {
      "input" === b.tagName.toLowerCase() && (j.wrapInput([b]), b = b.parentElement), "ontouchstart" in a && b.addEventListener("touchstart", g, !1), b.addEventListener("mousedown", g, !1)
    }, a.Waves = h, document.addEventListener("DOMContentLoaded", function() {
      h.displayEffect()
    }, !1)
  }(window), Materialize.toast = function(a, b, c, d) {
    function e(a) {
      var b = document.createElement("div");
      if (b.classList.add("toast"), c)
        for (var e = c.split(" "), f = 0, g = e.length; f < g; f++) b.classList.add(e[f]);
      ("object" == typeof HTMLElement ? a instanceof HTMLElement : a && "object" == typeof a && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName) ? b.appendChild(a): a instanceof jQuery ? b.appendChild(a[0]) : b.innerHTML = a;
      var h = new Hammer(b, {
        prevent_default: !1
      });
      return h.on("pan", function(a) {
        var c = a.deltaX,
          d = 80;
        b.classList.contains("panning") || b.classList.add("panning");
        var e = 1 - Math.abs(c / d);
        e < 0 && (e = 0), Vel(b, {
          left: c,
          opacity: e
        }, {
          duration: 50,
          queue: !1,
          easing: "easeOutQuad"
        })
      }), h.on("panend", function(a) {
        var c = a.deltaX,
          e = 80;
        Math.abs(c) > e ? Vel(b, {
          marginTop: "-40px"
        }, {
          duration: 375,
          easing: "easeOutExpo",
          queue: !1,
          complete: function() {
            "function" == typeof d && d(), b.parentNode.removeChild(b)
          }
        }) : (b.classList.remove("panning"), Vel(b, {
          left: 0,
          opacity: 1
        }, {
          duration: 300,
          easing: "easeOutExpo",
          queue: !1
        }))
      }), b
    }
    c = c || "";
    var f = document.getElementById("toast-container");
    null === f && (f = document.createElement("div"), f.id = "toast-container", document.body.appendChild(f));
    var g = e(a);
    a && f.appendChild(g), g.style.opacity = 0, Vel(g, {
      translateY: "-35px",
      opacity: 1
    }, {
      duration: 300,
      easing: "easeOutCubic",
      queue: !1
    });
    var h, i = b;
    null != i && (h = setInterval(function() {
      null === g.parentNode && window.clearInterval(h), g.classList.contains("panning") || (i -= 20), i <= 0 && (Vel(g, {
        opacity: 0,
        marginTop: "-40px"
      }, {
        duration: 375,
        easing: "easeOutExpo",
        queue: !1,
        complete: function() {
          "function" == typeof d && d(), this[0].parentNode.removeChild(this[0])
        }
      }), window.clearInterval(h))
    }, 20))
  },
  function(a) {
    var b = {
      init: function(b) {
        var c = {
          menuWidth: 300,
          edge: "left",
          closeOnClick: !1,
          draggable: !0
        };
        b = a.extend(c, b), a(this).each(function() {
          var c = a(this),
            d = c.attr("data-activates"),
            e = a("#" + d);
          300 != b.menuWidth && e.css("width", b.menuWidth);
          var f = a('.drag-target[data-sidenav="' + d + '"]');
          b.draggable ? (f.length && f.remove(), f = a('<div class="drag-target"></div>').attr("data-sidenav", d), a("body").append(f)) : f = a(), "left" == b.edge ? (e.css("transform", "translateX(-100%)"), f.css({
            left: 0
          })) : (e.addClass("right-aligned").css("transform", "translateX(100%)"), f.css({
            right: 0
          })), e.hasClass("fixed") && window.innerWidth > 992 && e.css("transform", "translateX(0)"), e.hasClass("fixed") && a(window).resize(function() {
            window.innerWidth > 992 ? 0 !== a("#sidenav-overlay").length && i ? g(!0) : e.css("transform", "translateX(0%)") : i === !1 && ("left" === b.edge ? e.css("transform", "translateX(-100%)") : e.css("transform", "translateX(100%)"))
          }), b.closeOnClick === !0 && e.on("click.itemclick", "a:not(.collapsible-header)", function() {
            g()
          });
          var g = function(c) {
              h = !1, i = !1, a("body").css({
                overflow: "",
                width: ""
              }), a("#sidenav-overlay").velocity({
                opacity: 0
              }, {
                duration: 200,
                queue: !1,
                easing: "easeOutQuad",
                complete: function() {
                  a(this).remove()
                }
              }), "left" === b.edge ? (f.css({
                width: "",
                right: "",
                left: "0"
              }), e.velocity({
                translateX: "-100%"
              }, {
                duration: 200,
                queue: !1,
                easing: "easeOutCubic",
                complete: function() {
                  c === !0 && (e.removeAttr("style"), e.css("width", b.menuWidth))
                }
              })) : (f.css({
                width: "",
                right: "0",
                left: ""
              }), e.velocity({
                translateX: "100%"
              }, {
                duration: 200,
                queue: !1,
                easing: "easeOutCubic",
                complete: function() {
                  c === !0 && (e.removeAttr("style"), e.css("width", b.menuWidth))
                }
              }))
            },
            h = !1,
            i = !1;
          b.draggable && (f.on("click", function() {
            i && g()
          }), f.hammer({
            prevent_default: !1
          }).bind("pan", function(c) {
            if ("touch" == c.gesture.pointerType) {
              var d = (c.gesture.direction, c.gesture.center.x),
                f = (c.gesture.center.y, c.gesture.velocityX, a("body")),
                h = a("#sidenav-overlay"),
                j = f.innerWidth();
              if (f.css("overflow", "hidden"), f.width(j), 0 === h.length && (h = a('<div id="sidenav-overlay"></div>'), h.css("opacity", 0).click(function() {
                  g()
                }), a("body").append(h)), "left" === b.edge && (d > b.menuWidth ? d = b.menuWidth : d < 0 && (d = 0)), "left" === b.edge) d < b.menuWidth / 2 ? i = !1 : d >= b.menuWidth / 2 && (i = !0), e.css("transform", "translateX(" + (d - b.menuWidth) + "px)");
              else {
                d < window.innerWidth - b.menuWidth / 2 ? i = !0 : d >= window.innerWidth - b.menuWidth / 2 && (i = !1);
                var k = d - b.menuWidth / 2;
                k < 0 && (k = 0), e.css("transform", "translateX(" + k + "px)")
              }
              var l;
              "left" === b.edge ? (l = d / b.menuWidth, h.velocity({
                opacity: l
              }, {
                duration: 10,
                queue: !1,
                easing: "easeOutQuad"
              })) : (l = Math.abs((d - window.innerWidth) / b.menuWidth), h.velocity({
                opacity: l
              }, {
                duration: 10,
                queue: !1,
                easing: "easeOutQuad"
              }))
            }
          }).bind("panend", function(c) {
            if ("touch" == c.gesture.pointerType) {
              var d = a("#sidenav-overlay"),
                g = c.gesture.velocityX,
                j = c.gesture.center.x,
                k = j - b.menuWidth,
                l = j - b.menuWidth / 2;
              k > 0 && (k = 0), l < 0 && (l = 0), h = !1, "left" === b.edge ? i && g <= .3 || g < -.5 ? (0 !== k && e.velocity({
                translateX: [0, k]
              }, {
                duration: 300,
                queue: !1,
                easing: "easeOutQuad"
              }), d.velocity({
                opacity: 1
              }, {
                duration: 50,
                queue: !1,
                easing: "easeOutQuad"
              }), f.css({
                width: "50%",
                right: 0,
                left: ""
              }), i = !0) : (!i || g > .3) && (a("body").css({
                overflow: "",
                width: ""
              }), e.velocity({
                translateX: [-1 * b.menuWidth - 10, k]
              }, {
                duration: 200,
                queue: !1,
                easing: "easeOutQuad"
              }), d.velocity({
                opacity: 0
              }, {
                duration: 200,
                queue: !1,
                easing: "easeOutQuad",
                complete: function() {
                  a(this).remove()
                }
              }), f.css({
                width: "10px",
                right: "",
                left: 0
              })) : i && g >= -.3 || g > .5 ? (0 !== l && e.velocity({
                translateX: [0, l]
              }, {
                duration: 300,
                queue: !1,
                easing: "easeOutQuad"
              }), d.velocity({
                opacity: 1
              }, {
                duration: 50,
                queue: !1,
                easing: "easeOutQuad"
              }), f.css({
                width: "50%",
                right: "",
                left: 0
              }), i = !0) : (!i || g < -.3) && (a("body").css({
                overflow: "",
                width: ""
              }), e.velocity({
                translateX: [b.menuWidth + 10, l]
              }, {
                duration: 200,
                queue: !1,
                easing: "easeOutQuad"
              }), d.velocity({
                opacity: 0
              }, {
                duration: 200,
                queue: !1,
                easing: "easeOutQuad",
                complete: function() {
                  a(this).remove()
                }
              }), f.css({
                width: "10px",
                right: 0,
                left: ""
              }))
            }
          })), c.off("click.sidenav").on("click.sidenav", function() {
            if (i === !0) i = !1, h = !1, g();
            else {
              var c = a("body"),
                d = a('<div id="sidenav-overlay"></div>'),
                j = c.innerWidth();
              c.css("overflow", "hidden"), c.width(j), a("body").append(f), "left" === b.edge ? (f.css({
                width: "50%",
                right: 0,
                left: ""
              }), e.velocity({
                translateX: [0, -1 * b.menuWidth]
              }, {
                duration: 300,
                queue: !1,
                easing: "easeOutQuad"
              })) : (f.css({
                width: "50%",
                right: "",
                left: 0
              }), e.velocity({
                translateX: [0, b.menuWidth]
              }, {
                duration: 300,
                queue: !1,
                easing: "easeOutQuad"
              })), d.css("opacity", 0).click(function() {
                i = !1, h = !1, g(), d.velocity({
                  opacity: 0
                }, {
                  duration: 300,
                  queue: !1,
                  easing: "easeOutQuad",
                  complete: function() {
                    a(this).remove()
                  }
                })
              }), a("body").append(d), d.velocity({
                opacity: 1
              }, {
                duration: 300,
                queue: !1,
                easing: "easeOutQuad",
                complete: function() {
                  i = !0, h = !1
                }
              })
            }
            return !1
          })
        })
      },
      destroy: function() {
        var b = a("#sidenav-overlay"),
          c = a('.drag-target[data-sidenav="' + a(this).attr("data-activates") + '"]');
        b.trigger("click"), c.remove(), a(this).off("click"), b.remove()
      },
      show: function() {
        this.trigger("click")
      },
      hide: function() {
        a("#sidenav-overlay").trigger("click")
      }
    };
    a.fn.sideNav = function(c) {
      return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.sideNav") : b.init.apply(this, arguments)
    }
  }(jQuery),
  function(a) {
    function b(b, c, d, e) {
      var g = a();
      return a.each(f, function(a, f) {
        if (f.height() > 0) {
          var h = f.offset().top,
            i = f.offset().left,
            j = i + f.width(),
            k = h + f.height(),
            l = !(i > c || j < e || h > d || k < b);
          l && g.push(f)
        }
      }), g
    }

    function c(c) {
      ++i;
      var d = e.scrollTop(),
        f = e.scrollLeft(),
        h = f + e.width(),
        k = d + e.height(),
        l = b(d + j.top + c || 200, h + j.right, k + j.bottom, f + j.left);
      a.each(l, function(a, b) {
        var c = b.data("scrollSpy:ticks");
        "number" != typeof c && b.triggerHandler("scrollSpy:enter"), b.data("scrollSpy:ticks", i)
      }), a.each(g, function(a, b) {
        var c = b.data("scrollSpy:ticks");
        "number" == typeof c && c !== i && (b.triggerHandler("scrollSpy:exit"), b.data("scrollSpy:ticks", null))
      }), g = l
    }

    function d() {
      e.trigger("scrollSpy:winSize")
    }
    var e = a(window),
      f = [],
      g = [],
      h = !1,
      i = 0,
      j = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    a.scrollSpy = function(b, d) {
      var g = {
        throttle: 100,
        scrollOffset: 200
      };
      d = a.extend(g, d);
      var i = [];
      b = a(b), b.each(function(b, c) {
        f.push(a(c)), a(c).data("scrollSpy:id", b), a('a[href="#' + a(c).attr("id") + '"]').click(function(b) {
          b.preventDefault();
          var c = a(Materialize.escapeHash(this.hash)).offset().top + 1;
          a("html, body").animate({
            scrollTop: c - d.scrollOffset
          }, {
            duration: 400,
            queue: !1,
            easing: "easeOutCubic"
          })
        })
      }), j.top = d.offsetTop || 0, j.right = d.offsetRight || 0, j.bottom = d.offsetBottom || 0, j.left = d.offsetLeft || 0;
      var k = Materialize.throttle(function() {
          c(d.scrollOffset)
        }, d.throttle || 100),
        l = function() {
          a(document).ready(k)
        };
      return h || (e.on("scroll", l), e.on("resize", l), h = !0), setTimeout(l, 0), b.on("scrollSpy:enter", function() {
        i = a.grep(i, function(a) {
          return 0 != a.height()
        });
        var b = a(this);
        i[0] ? (a('a[href="#' + i[0].attr("id") + '"]').removeClass("active"), b.data("scrollSpy:id") < i[0].data("scrollSpy:id") ? i.unshift(a(this)) : i.push(a(this))) : i.push(a(this)), a('a[href="#' + i[0].attr("id") + '"]').addClass("active")
      }), b.on("scrollSpy:exit", function() {
        if (i = a.grep(i, function(a) {
            return 0 != a.height()
          }), i[0]) {
          a('a[href="#' + i[0].attr("id") + '"]').removeClass("active");
          var b = a(this);
          i = a.grep(i, function(a) {
            return a.attr("id") != b.attr("id")
          }), i[0] && a('a[href="#' + i[0].attr("id") + '"]').addClass("active")
        }
      }), b
    }, a.winSizeSpy = function(b) {
      return a.winSizeSpy = function() {
        return e
      }, b = b || {
        throttle: 100
      }, e.on("resize", Materialize.throttle(d, b.throttle || 100))
    }, a.fn.scrollSpy = function(b) {
      return a.scrollSpy(a(this), b)
    }
  }(jQuery),
  function(a) {
    a(document).ready(function() {
      function b(b) {
        var c = b.css("font-family"),
          d = b.css("font-size"),
          f = b.css("line-height");
        d && e.css("font-size", d), c && e.css("font-family", c), f && e.css("line-height", f), "off" === b.attr("wrap") && e.css("overflow-wrap", "normal").css("white-space", "pre"), e.text(b.val() + "\n");
        var g = e.html().replace(/\n/g, "<br>");
        e.html(g), b.is(":visible") ? e.css("width", b.width()) : e.css("width", a(window).width() / 2), b.data("original-height") <= e.height() ? b.css("height", e.height()) : b.val().length < b.data("previous-length") && b.css("height", b.data("original-height")), b.data("previous-length", b.val().length)
      }
      Materialize.updateTextFields = function() {
        var b = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        a(b).each(function(b, c) {
          var d = a(this);
          a(c).val().length > 0 || c.autofocus || void 0 !== d.attr("placeholder") ? d.siblings("label").addClass("active") : a(c)[0].validity ? d.siblings("label").toggleClass("active", a(c)[0].validity.badInput === !0) : d.siblings("label").removeClass("active")
        })
      };
      var c = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
      a(document).on("change", c, function() {
        0 === a(this).val().length && void 0 === a(this).attr("placeholder") || a(this).siblings("label").addClass("active"), validate_field(a(this))
      }), a(document).ready(function() {
        Materialize.updateTextFields()
      }), a(document).on("reset", function(b) {
        var d = a(b.target);
        d.is("form") && (d.find(c).removeClass("valid").removeClass("invalid"), d.find(c).each(function() {
          "" === a(this).attr("value") && a(this).siblings("label").removeClass("active")
        }), d.find("select.initialized").each(function() {
          var a = d.find("option[selected]").text();
          d.siblings("input.select-dropdown").val(a)
        }))
      }), a(document).on("focus", c, function() {
        a(this).siblings("label, .prefix").addClass("active")
      }), a(document).on("blur", c, function() {
        var b = a(this),
          c = ".prefix";
        0 === b.val().length && b[0].validity.badInput !== !0 && void 0 === b.attr("placeholder") && (c += ", label"), b.siblings(c).removeClass("active"), validate_field(b)
      }), window.validate_field = function(a) {
        var b = void 0 !== a.attr("data-length"),
          c = parseInt(a.attr("data-length")),
          d = a.val().length;
        0 === a.val().length && a[0].validity.badInput === !1 ? a.hasClass("validate") && (a.removeClass("valid"), a.removeClass("invalid")) : a.hasClass("validate") && (a.is(":valid") && b && d <= c || a.is(":valid") && !b ? (a.removeClass("invalid"), a.addClass("valid")) : (a.removeClass("valid"), a.addClass("invalid")))
      };
      var d = "input[type=radio], input[type=checkbox]";
      a(document).on("keyup.radio", d, function(b) {
        if (9 === b.which) {
          a(this).addClass("tabbed");
          var c = a(this);
          return void c.one("blur", function(b) {
            a(this).removeClass("tabbed")
          })
        }
      });
      var e = a(".hiddendiv").first();
      e.length || (e = a('<div class="hiddendiv common"></div>'), a("body").append(e));
      var f = ".materialize-textarea";
      a(f).each(function() {
        var b = a(this);
        b.data("original-height", b.height()), b.data("previous-length", b.val().length)
      }), a("body").on("keyup keydown autoresize", f, function() {
        b(a(this))
      }), a(document).on("change", '.file-field input[type="file"]', function() {
        for (var b = a(this).closest(".file-field"), c = b.find("input.file-path"), d = a(this)[0].files, e = [], f = 0; f < d.length; f++) e.push(d[f].name);
        c.val(e.join(", ")), c.trigger("change")
      });
      var g = "input[type=range]",
        h = !1;
      a(g).each(function() {
        var b = a('<span class="thumb"><span class="value"></span></span>');
        a(this).after(b)
      });
      var i = function(a) {
          var b = parseInt(a.parent().css("padding-left")),
            c = -7 + b + "px";
          a.velocity({
            height: "30px",
            width: "30px",
            top: "-30px",
            marginLeft: c
          }, {
            duration: 300,
            easing: "easeOutExpo"
          })
        },
        j = function(a) {
          var b = a.width() - 15,
            c = parseFloat(a.attr("max")),
            d = parseFloat(a.attr("min")),
            e = (parseFloat(a.val()) - d) / (c - d);
          return e * b
        },
        k = ".range-field";
      a(document).on("change", g, function(b) {
        var c = a(this).siblings(".thumb");
        c.find(".value").html(a(this).val()), c.hasClass("active") || i(c);
        var d = j(a(this));
        c.addClass("active").css("left", d)
      }), a(document).on("mousedown touchstart", g, function(b) {
        var c = a(this).siblings(".thumb");
        if (c.length <= 0 && (c = a('<span class="thumb"><span class="value"></span></span>'), a(this).after(c)), c.find(".value").html(a(this).val()), h = !0, a(this).addClass("active"), c.hasClass("active") || i(c), "input" !== b.type) {
          var d = j(a(this));
          c.addClass("active").css("left", d)
        }
      }), a(document).on("mouseup touchend", k, function() {
        h = !1, a(this).removeClass("active")
      }), a(document).on("input mousemove touchmove", k, function(b) {
        var c = a(this).children(".thumb"),
          d = a(this).find(g);
        if (h) {
          c.hasClass("active") || i(c);
          var e = j(d);
          c.addClass("active").css("left", e), c.find(".value").html(c.siblings(g).val())
        }
      }), a(document).on("mouseout touchleave", k, function() {
        if (!h) {
          var b = a(this).children(".thumb"),
            c = parseInt(a(this).css("padding-left")),
            d = 7 + c + "px";
          b.hasClass("active") && b.velocity({
            height: "0",
            width: "0",
            top: "10px",
            marginLeft: d
          }, {
            duration: 100
          }), b.removeClass("active")
        }
      }), a.fn.autocomplete = function(b) {
        var c = {
          data: {},
          limit: 1 / 0,
          onAutocomplete: null,
          minLength: 1
        };
        return b = a.extend(c, b), this.each(function() {
          var c, d = a(this),
            e = b.data,
            f = 0,
            g = -1,
            h = d.closest(".input-field");
          if (!a.isEmptyObject(e)) {
            var i, j = a('<ul class="autocomplete-content dropdown-content"></ul>');
            h.length ? (i = h.children(".autocomplete-content.dropdown-content").first(), i.length || h.append(j)) : (i = d.next(".autocomplete-content.dropdown-content"), i.length || d.after(j)), i.length && (j = i);
            var k = function(a, b) {
                var c = b.find("img"),
                  d = b.text().toLowerCase().indexOf("" + a.toLowerCase()),
                  e = d + a.length - 1,
                  f = b.text().slice(0, d),
                  g = b.text().slice(d, e + 1),
                  h = b.text().slice(e + 1);
                b.html("<span>" + f + "<span class='highlight'>" + g + "</span>" + h + "</span>"), c.length && b.prepend(c)
              },
              l = function() {
                g = -1, j.find(".active").removeClass("active")
              },
              m = function() {
                j.empty(), l(), c = void 0
              };
            d.off("blur.autocomplete").on("blur.autocomplete", function() {
              m()
            }), d.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", function(g) {
              f = 0;
              var h = d.val().toLowerCase();
              if (13 !== g.which && 38 !== g.which && 40 !== g.which) {
                if (c !== h && (m(), h.length >= b.minLength))
                  for (var i in e)
                    if (e.hasOwnProperty(i) && i.toLowerCase().indexOf(h) !== -1 && i.toLowerCase() !== h) {
                      if (f >= b.limit) break;
                      var l = a("<li></li>");
                      e[i] ? l.append('<img src="' + e[i] + '" class="right circle"><span>' + i + "</span>") : l.append("<span>" + i + "</span>"), j.append(l), k(h, l), f++
                    }
                c = h
              }
            }), d.off("keydown.autocomplete").on("keydown.autocomplete", function(a) {
              var b, c = a.which,
                d = j.children("li").length,
                e = j.children(".active").first();
              return 13 === c && g >= 0 ? (b = j.children("li").eq(g), void(b.length && (b.trigger("mousedown.autocomplete"), a.preventDefault()))) : void(38 !== c && 40 !== c || (a.preventDefault(),
                38 === c && g > 0 && g--, 40 === c && g < d - 1 && g++, e.removeClass("active"), g >= 0 && j.children("li").eq(g).addClass("active")))
            }), j.on("mousedown.autocomplete touchstart.autocomplete", "li", function() {
              var c = a(this).text().trim();
              d.val(c), d.trigger("change"), m(), "function" == typeof b.onAutocomplete && b.onAutocomplete.call(this, c)
            })
          }
        })
      }
    }), a.fn.material_select = function(b) {
      function c(a, b, c) {
        var e = a.indexOf(b),
          f = e === -1;
        return f ? a.push(b) : a.splice(e, 1), c.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(b).toggleClass("active"), c.find("option").eq(b).prop("selected", f), d(a, c), f
      }

      function d(a, b) {
        for (var c = "", d = 0, e = a.length; d < e; d++) {
          var f = b.find("option").eq(a[d]).text();
          c += 0 === d ? f : ", " + f
        }
        "" === c && (c = b.find("option:disabled").eq(0).text()), b.siblings("input.select-dropdown").val(c)
      }
      a(this).each(function() {
        var d = a(this);
        if (!d.hasClass("browser-default")) {
          var e = !!d.attr("multiple"),
            f = d.data("select-id");
          if (f && (d.parent().find("span.caret").remove(), d.parent().find("input").remove(), d.unwrap(), a("ul#select-options-" + f).remove()), "destroy" === b) return void d.data("select-id", null).removeClass("initialized");
          var g = Materialize.guid();
          d.data("select-id", g);
          var h = a('<div class="select-wrapper"></div>');
          h.addClass(d.attr("class"));
          var i = a('<ul id="select-options-' + g + '" class="dropdown-content select-dropdown ' + (e ? "multiple-select-dropdown" : "") + '"></ul>'),
            j = d.children("option, optgroup"),
            k = [],
            l = !1,
            m = d.find("option:selected").html() || d.find("option:first").html() || "",
            n = function(b, c, d) {
              var f = c.is(":disabled") ? "disabled " : "",
                g = "optgroup-option" === d ? "optgroup-option " : "",
                h = e ? '<input type="checkbox"' + f + "/><label></label>" : "",
                j = c.data("icon"),
                k = c.attr("class");
              if (j) {
                var l = "";
                return k && (l = ' class="' + k + '"'), i.append(a('<li class="' + f + g + '"><img alt="" src="' + j + '"' + l + "><span>" + h + c.html() + "</span></li>")), !0
              }
              i.append(a('<li class="' + f + g + '"><span>' + h + c.html() + "</span></li>"))
            };
          j.length && j.each(function() {
            if (a(this).is("option")) e ? n(d, a(this), "multiple") : n(d, a(this));
            else if (a(this).is("optgroup")) {
              var b = a(this).children("option");
              i.append(a('<li class="optgroup"><span>' + a(this).attr("label") + "</span></li>")), b.each(function() {
                n(d, a(this), "optgroup-option")
              })
            }
          }), i.find("li:not(.optgroup)").each(function(f) {
            a(this).click(function(g) {
              if (!a(this).hasClass("disabled") && !a(this).hasClass("optgroup")) {
                var h = !0;
                e ? (a('input[type="checkbox"]', this).prop("checked", function(a, b) {
                  return !b
                }), h = c(k, f, d), q.trigger("focus")) : (i.find("li").removeClass("active"), a(this).toggleClass("active"), q.val(a(this).text())), r(i, a(this)), d.find("option").eq(f).prop("selected", h), d.trigger("change"), "undefined" != typeof b && b()
              }
              g.stopPropagation()
            })
          }), d.wrap(h);
          var o = a('<span class="caret">&#9660;</span>');
          d.is(":disabled") && o.addClass("disabled");
          var p = m.replace(/"/g, "&quot;"),
            q = a('<input type="text" class="select-dropdown" readonly="true" ' + (d.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + g + '" value="' + p + '"/>');
          d.before(q), q.before(o), q.after(i), d.is(":disabled") || q.dropdown({
            hover: !1
          }), d.attr("tabindex") && a(q[0]).attr("tabindex", d.attr("tabindex")), d.addClass("initialized"), q.on({
            focus: function() {
              if (a("ul.select-dropdown").not(i[0]).is(":visible") && a("input.select-dropdown").trigger("close"), !i.is(":visible")) {
                a(this).trigger("open", ["focus"]);
                var b = a(this).val();
                e && b.indexOf(",") >= 0 && (b = b.split(",")[0]);
                var c = i.find("li").filter(function() {
                  return a(this).text().toLowerCase() === b.toLowerCase()
                })[0];
                r(i, c, !0)
              }
            },
            click: function(a) {
              a.stopPropagation()
            }
          }), q.on("blur", function() {
            e || a(this).trigger("close"), i.find("li.selected").removeClass("selected")
          }), i.hover(function() {
            l = !0
          }, function() {
            l = !1
          }), a(window).on({
            click: function() {
              e && (l || q.trigger("close"))
            }
          }), e && d.find("option:selected:not(:disabled)").each(function() {
            var b = a(this).index();
            c(k, b, d), i.find("li").eq(b).find(":checkbox").prop("checked", !0)
          });
          var r = function(b, c, d) {
              if (c) {
                b.find("li.selected").removeClass("selected");
                var f = a(c);
                f.addClass("selected"), e && !d || i.scrollTo(f)
              }
            },
            s = [],
            t = function(b) {
              if (9 == b.which) return void q.trigger("close");
              if (40 == b.which && !i.is(":visible")) return void q.trigger("open");
              if (13 != b.which || i.is(":visible")) {
                b.preventDefault();
                var c = String.fromCharCode(b.which).toLowerCase(),
                  d = [9, 13, 27, 38, 40];
                if (c && d.indexOf(b.which) === -1) {
                  s.push(c);
                  var f = s.join(""),
                    g = i.find("li").filter(function() {
                      return 0 === a(this).text().toLowerCase().indexOf(f)
                    })[0];
                  g && r(i, g)
                }
                if (13 == b.which) {
                  var h = i.find("li.selected:not(.disabled)")[0];
                  h && (a(h).trigger("click"), e || q.trigger("close"))
                }
                40 == b.which && (g = i.find("li.selected").length ? i.find("li.selected").next("li:not(.disabled)")[0] : i.find("li:not(.disabled)")[0], r(i, g)), 27 == b.which && q.trigger("close"), 38 == b.which && (g = i.find("li.selected").prev("li:not(.disabled)")[0], g && r(i, g)), setTimeout(function() {
                  s = []
                }, 1e3)
              }
            };
          q.on("keydown", t)
        }
      })
    }
  }(jQuery),
  function(a) {
    var b = {
      init: function(b) {
        var c = {
          indicators: !0,
          height: 400,
          transition: 500,
          interval: 6e3
        };
        return b = a.extend(c, b), this.each(function() {
          function c(a, b) {
            a.hasClass("center-align") ? a.velocity({
              opacity: 0,
              translateY: -100
            }, {
              duration: b,
              queue: !1
            }) : a.hasClass("right-align") ? a.velocity({
              opacity: 0,
              translateX: 100
            }, {
              duration: b,
              queue: !1
            }) : a.hasClass("left-align") && a.velocity({
              opacity: 0,
              translateX: -100
            }, {
              duration: b,
              queue: !1
            })
          }

          function d(a) {
            a >= j.length ? a = 0 : a < 0 && (a = j.length - 1), k = i.find(".active").index(), k != a && (e = j.eq(k), $caption = e.find(".caption"), e.removeClass("active"), e.velocity({
              opacity: 0
            }, {
              duration: b.transition,
              queue: !1,
              easing: "easeOutQuad",
              complete: function() {
                j.not(".active").velocity({
                  opacity: 0,
                  translateX: 0,
                  translateY: 0
                }, {
                  duration: 0,
                  queue: !1
                })
              }
            }), c($caption, b.transition), b.indicators && f.eq(k).removeClass("active"), j.eq(a).velocity({
              opacity: 1
            }, {
              duration: b.transition,
              queue: !1,
              easing: "easeOutQuad"
            }), j.eq(a).find(".caption").velocity({
              opacity: 1,
              translateX: 0,
              translateY: 0
            }, {
              duration: b.transition,
              delay: b.transition,
              queue: !1,
              easing: "easeOutQuad"
            }), j.eq(a).addClass("active"), b.indicators && f.eq(a).addClass("active"))
          }
          var e, f, g, h = a(this),
            i = h.find("ul.slides").first(),
            j = i.find("> li"),
            k = i.find(".active").index();
          k != -1 && (e = j.eq(k)), h.hasClass("fullscreen") || (b.indicators ? h.height(b.height + 40) : h.height(b.height), i.height(b.height)), j.find(".caption").each(function() {
            c(a(this), 0)
          }), j.find("img").each(function() {
            var b = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            a(this).attr("src") !== b && (a(this).css("background-image", "url(" + a(this).attr("src") + ")"), a(this).attr("src", b))
          }), b.indicators && (f = a('<ul class="indicators"></ul>'), j.each(function(c) {
            var e = a('<li class="indicator-item"></li>');
            e.click(function() {
              var c = i.parent(),
                e = c.find(a(this)).index();
              d(e), clearInterval(g), g = setInterval(function() {
                k = i.find(".active").index(), j.length == k + 1 ? k = 0 : k += 1, d(k)
              }, b.transition + b.interval)
            }), f.append(e)
          }), h.append(f), f = h.find("ul.indicators").find("li.indicator-item")), e ? e.show() : (j.first().addClass("active").velocity({
            opacity: 1
          }, {
            duration: b.transition,
            queue: !1,
            easing: "easeOutQuad"
          }), k = 0, e = j.eq(k), b.indicators && f.eq(k).addClass("active")), e.find("img").each(function() {
            e.find(".caption").velocity({
              opacity: 1,
              translateX: 0,
              translateY: 0
            }, {
              duration: b.transition,
              queue: !1,
              easing: "easeOutQuad"
            })
          }), g = setInterval(function() {
            k = i.find(".active").index(), d(k + 1)
          }, b.transition + b.interval);
          var l = !1,
            m = !1,
            n = !1;
          h.hammer({
            prevent_default: !1
          }).bind("pan", function(a) {
            if ("touch" === a.gesture.pointerType) {
              clearInterval(g);
              var b = a.gesture.direction,
                c = a.gesture.deltaX,
                d = a.gesture.velocityX,
                e = a.gesture.velocityY;
              $curr_slide = i.find(".active"), Math.abs(d) > Math.abs(e) && $curr_slide.velocity({
                translateX: c
              }, {
                duration: 50,
                queue: !1,
                easing: "easeOutQuad"
              }), 4 === b && (c > h.innerWidth() / 2 || d < -.65) ? n = !0 : 2 === b && (c < -1 * h.innerWidth() / 2 || d > .65) && (m = !0);
              var f;
              m && (f = $curr_slide.next(), 0 === f.length && (f = j.first()), f.velocity({
                opacity: 1
              }, {
                duration: 300,
                queue: !1,
                easing: "easeOutQuad"
              })), n && (f = $curr_slide.prev(), 0 === f.length && (f = j.last()), f.velocity({
                opacity: 1
              }, {
                duration: 300,
                queue: !1,
                easing: "easeOutQuad"
              }))
            }
          }).bind("panend", function(a) {
            "touch" === a.gesture.pointerType && ($curr_slide = i.find(".active"), l = !1, curr_index = i.find(".active").index(), !n && !m || j.length <= 1 ? $curr_slide.velocity({
              translateX: 0
            }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            }) : m ? (d(curr_index + 1), $curr_slide.velocity({
              translateX: -1 * h.innerWidth()
            }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad",
              complete: function() {
                $curr_slide.velocity({
                  opacity: 0,
                  translateX: 0
                }, {
                  duration: 0,
                  queue: !1
                })
              }
            })) : n && (d(curr_index - 1), $curr_slide.velocity({
              translateX: h.innerWidth()
            }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad",
              complete: function() {
                $curr_slide.velocity({
                  opacity: 0,
                  translateX: 0
                }, {
                  duration: 0,
                  queue: !1
                })
              }
            })), m = !1, n = !1, clearInterval(g), g = setInterval(function() {
              k = i.find(".active").index(), j.length == k + 1 ? k = 0 : k += 1, d(k)
            }, b.transition + b.interval))
          }), h.on("sliderPause", function() {
            clearInterval(g)
          }), h.on("sliderStart", function() {
            clearInterval(g), g = setInterval(function() {
              k = i.find(".active").index(), j.length == k + 1 ? k = 0 : k += 1, d(k)
            }, b.transition + b.interval)
          }), h.on("sliderNext", function() {
            k = i.find(".active").index(), d(k + 1)
          }), h.on("sliderPrev", function() {
            k = i.find(".active").index(), d(k - 1)
          })
        })
      },
      pause: function() {
        a(this).trigger("sliderPause")
      },
      start: function() {
        a(this).trigger("sliderStart")
      },
      next: function() {
        a(this).trigger("sliderNext")
      },
      prev: function() {
        a(this).trigger("sliderPrev")
      }
    };
    a.fn.slider = function(c) {
      return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments)
    }
  }(jQuery),
  function(a) {
    a(document).ready(function() {
      a(document).on("click.card", ".card", function(b) {
        a(this).find("> .card-reveal").length && (a(b.target).is(a(".card-reveal .card-title")) || a(b.target).is(a(".card-reveal .card-title i")) ? a(this).find(".card-reveal").velocity({
          translateY: 0
        }, {
          duration: 225,
          queue: !1,
          easing: "easeInOutQuad",
          complete: function() {
            a(this).css({
              display: "none"
            })
          }
        }) : (a(b.target).is(a(".card .activator")) || a(b.target).is(a(".card .activator i"))) && (a(b.target).closest(".card").css("overflow", "hidden"), a(this).find(".card-reveal").css({
          display: "block"
        }).velocity("stop", !1).velocity({
          translateY: "-100%"
        }, {
          duration: 300,
          queue: !1,
          easing: "easeInOutQuad"
        })))
      })
    })
  }(jQuery),
  function(a) {
    var b = {
      data: [],
      placeholder: "",
      secondaryPlaceholder: "",
      autocompleteOptions: {}
    };
    a(document).ready(function() {
      a(document).on("click", ".chip .close", function(b) {
        var c = a(this).closest(".chips");
        c.attr("data-initialized") || a(this).closest(".chip").remove()
      })
    }), a.fn.material_chip = function(c) {
      var d = this;
      if (this.$el = a(this), this.$document = a(document), this.SELS = {
          CHIPS: ".chips",
          CHIP: ".chip",
          INPUT: "input",
          DELETE: ".material-icons",
          SELECTED_CHIP: ".selected"
        }, "data" === c) return this.$el.data("chips");
      var e = a.extend({}, b, c);
      d.hasAutocomplete = !a.isEmptyObject(e.autocompleteOptions.data), this.init = function() {
        var b = 0;
        d.$el.each(function() {
          var c = a(this),
            f = Materialize.guid();
          d.chipId = f, e.data && e.data instanceof Array || (e.data = []), c.data("chips", e.data), c.attr("data-index", b), c.attr("data-initialized", !0), c.hasClass(d.SELS.CHIPS) || c.addClass("chips"), d.chips(c, f), b++
        })
      }, this.handleEvents = function() {
        var b = d.SELS;
        d.$document.off("click.chips-focus", b.CHIPS).on("click.chips-focus", b.CHIPS, function(c) {
          a(c.target).find(b.INPUT).focus()
        }), d.$document.off("click.chips-select", b.CHIP).on("click.chips-select", b.CHIP, function(c) {
          var e = a(c.target);
          if (e.length) {
            var f = e.hasClass("selected"),
              g = e.closest(b.CHIPS);
            a(b.CHIP).removeClass("selected"), f || d.selectChip(e.index(), g)
          }
        }), d.$document.off("keydown.chips").on("keydown.chips", function(c) {
          if (!a(c.target).is("input, textarea")) {
            var e, f = d.$document.find(b.CHIP + b.SELECTED_CHIP),
              g = f.closest(b.CHIPS),
              h = f.siblings(b.CHIP).length;
            if (f.length)
              if (8 === c.which || 46 === c.which) {
                c.preventDefault(), e = f.index(), d.deleteChip(e, g);
                var i = null;
                e + 1 < h ? i = e : e !== h && e + 1 !== h || (i = h - 1), i < 0 && (i = null), null !== i && d.selectChip(i, g), h || g.find("input").focus()
              } else if (37 === c.which) {
              if (e = f.index() - 1, e < 0) return;
              a(b.CHIP).removeClass("selected"), d.selectChip(e, g)
            } else if (39 === c.which) {
              if (e = f.index() + 1, a(b.CHIP).removeClass("selected"), e > h) return void g.find("input").focus();
              d.selectChip(e, g)
            }
          }
        }), d.$document.off("focusin.chips", b.CHIPS + " " + b.INPUT).on("focusin.chips", b.CHIPS + " " + b.INPUT, function(c) {
          var d = a(c.target).closest(b.CHIPS);
          d.addClass("focus"), d.siblings("label, .prefix").addClass("active"), a(b.CHIP).removeClass("selected")
        }), d.$document.off("focusout.chips", b.CHIPS + " " + b.INPUT).on("focusout.chips", b.CHIPS + " " + b.INPUT, function(c) {
          var d = a(c.target).closest(b.CHIPS);
          d.removeClass("focus"), d.data("chips").length || d.siblings("label").removeClass("active"), d.siblings(".prefix").removeClass("active")
        }), d.$document.off("keydown.chips-add", b.CHIPS + " " + b.INPUT).on("keydown.chips-add", b.CHIPS + " " + b.INPUT, function(c) {
          var e = a(c.target),
            f = e.closest(b.CHIPS),
            g = f.children(b.CHIP).length;
          if (13 === c.which) {
            if (d.hasAutocomplete && f.find(".autocomplete-content.dropdown-content").length && f.find(".autocomplete-content.dropdown-content").children().length) return;
            return c.preventDefault(), d.addChip({
              tag: e.val()
            }, f), void e.val("")
          }
          if ((8 === c.keyCode || 37 === c.keyCode) && "" === e.val() && g) return c.preventDefault(), d.selectChip(g - 1, f), void e.blur()
        }), d.$document.off("click.chips-delete", b.CHIPS + " " + b.DELETE).on("click.chips-delete", b.CHIPS + " " + b.DELETE, function(c) {
          var e = a(c.target),
            f = e.closest(b.CHIPS),
            g = e.closest(b.CHIP);
          c.stopPropagation(), d.deleteChip(g.index(), f), f.find("input").focus()
        })
      }, this.chips = function(b, c) {
        b.empty(), b.data("chips").forEach(function(a) {
          b.append(d.renderChip(a))
        }), b.append(a('<input id="' + c + '" class="input" placeholder="">')), d.setPlaceholder(b);
        var f = b.next("label");
        f.length && (f.attr("for", c), b.data("chips").length && f.addClass("active"));
        var g = a("#" + c);
        d.hasAutocomplete && (e.autocompleteOptions.onAutocomplete = function(a) {
          d.addChip({
            tag: a
          }, b), g.val(""), g.focus()
        }, g.autocomplete(e.autocompleteOptions))
      }, this.renderChip = function(b) {
        if (b.tag) {
          var c = a('<div class="chip"></div>');
          return c.text(b.tag), c.append(a('<i class="material-icons close">close</i>')), c
        }
      }, this.setPlaceholder = function(a) {
        a.data("chips").length && e.placeholder ? a.find("input").prop("placeholder", e.placeholder) : !a.data("chips").length && e.secondaryPlaceholder && a.find("input").prop("placeholder", e.secondaryPlaceholder)
      }, this.isValid = function(a, b) {
        for (var c = a.data("chips"), d = !1, e = 0; e < c.length; e++)
          if (c[e].tag === b.tag) return void(d = !0);
        return "" !== b.tag && !d
      }, this.addChip = function(a, b) {
        if (d.isValid(b, a)) {
          for (var c = d.renderChip(a), e = [], f = b.data("chips"), g = 0; g < f.length; g++) e.push(f[g]);
          e.push(a), b.data("chips", e), c.insertBefore(b.find("input")), b.trigger("chip.add", a), d.setPlaceholder(b)
        }
      }, this.deleteChip = function(a, b) {
        var c = b.data("chips")[a];
        b.find(".chip").eq(a).remove();
        for (var e = [], f = b.data("chips"), g = 0; g < f.length; g++) g !== a && e.push(f[g]);
        b.data("chips", e), b.trigger("chip.delete", c), d.setPlaceholder(b)
      }, this.selectChip = function(a, b) {
        var c = b.find(".chip").eq(a);
        c && !1 === c.hasClass("selected") && (c.addClass("selected"), b.trigger("chip.select", b.data("chips")[a]))
      }, this.getChipsElement = function(a, b) {
        return b.eq(a)
      }, this.init(), this.handleEvents()
    }
  }(jQuery),
  function(a) {
    a.fn.pushpin = function(b) {
      var c = {
        top: 0,
        bottom: 1 / 0,
        offset: 0
      };
      return "remove" === b ? (this.each(function() {
        (id = a(this).data("pushpin-id")) && (a(window).off("scroll." + id), a(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))
      }), !1) : (b = a.extend(c, b), $index = 0, this.each(function() {
        function c(a) {
          a.removeClass("pin-top"), a.removeClass("pinned"), a.removeClass("pin-bottom")
        }

        function d(d, e) {
          d.each(function() {
            b.top <= e && b.bottom >= e && !a(this).hasClass("pinned") && (c(a(this)), a(this).css("top", b.offset), a(this).addClass("pinned")), e < b.top && !a(this).hasClass("pin-top") && (c(a(this)), a(this).css("top", 0), a(this).addClass("pin-top")), e > b.bottom && !a(this).hasClass("pin-bottom") && (c(a(this)), a(this).addClass("pin-bottom"), a(this).css("top", b.bottom - g))
          })
        }
        var e = Materialize.guid(),
          f = a(this),
          g = a(this).offset().top;
        a(this).data("pushpin-id", e), d(f, a(window).scrollTop()), a(window).on("scroll." + e, function() {
          var c = a(window).scrollTop() + b.offset;
          d(f, c)
        })
      }))
    }
  }(jQuery),
  function(a) {
    a(document).ready(function() {
      a.fn.reverse = [].reverse, a(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(c) {
        var d = a(this);
        b(d)
      }), a(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(b) {
        var d = a(this);
        c(d)
      }), a(document).on("click.fabClickToggle", ".fixed-action-btn.click-to-toggle > a", function(d) {
        var e = a(this),
          f = e.parent();
        f.hasClass("active") ? c(f) : b(f)
      }), a(document).on("click.fabToolbar", ".fixed-action-btn.toolbar > a", function(b) {
        var c = a(this),
          e = c.parent();
        d(e)
      })
    }), a.fn.extend({
      openFAB: function() {
        b(a(this))
      },
      closeFAB: function() {
        c(a(this))
      },
      openToolbar: function() {
        d(a(this))
      },
      closeToolbar: function() {
        e(a(this))
      }
    });
    var b = function(b) {
        var c = b;
        if (c.hasClass("active") === !1) {
          var d, e, f = c.hasClass("horizontal");
          f === !0 ? e = 40 : d = 40, c.addClass("active"), c.find("ul .btn-floating").velocity({
            scaleY: ".4",
            scaleX: ".4",
            translateY: d + "px",
            translateX: e + "px"
          }, {
            duration: 0
          });
          var g = 0;
          c.find("ul .btn-floating").reverse().each(function() {
            a(this).velocity({
              opacity: "1",
              scaleX: "1",
              scaleY: "1",
              translateY: "0",
              translateX: "0"
            }, {
              duration: 80,
              delay: g
            }), g += 40
          })
        }
      },
      c = function(a) {
        var b, c, d = a,
          e = d.hasClass("horizontal");
        e === !0 ? c = 40 : b = 40, d.removeClass("active");
        d.find("ul .btn-floating").velocity("stop", !0), d.find("ul .btn-floating").velocity({
          opacity: "0",
          scaleX: ".4",
          scaleY: ".4",
          translateY: b + "px",
          translateX: c + "px"
        }, {
          duration: 80
        })
      },
      d = function(b) {
        if ("true" !== b.attr("data-open")) {
          var c, d, f, g = window.innerWidth,
            h = window.innerHeight,
            i = b[0].getBoundingClientRect(),
            j = b.find("> a").first(),
            k = b.find("> ul").first(),
            l = a('<div class="fab-backdrop"></div>'),
            m = j.css("background-color");
          j.append(l), c = i.left - g / 2 + i.width / 2, d = h - i.bottom, f = g / l.width(), b.attr("data-origin-bottom", i.bottom), b.attr("data-origin-left", i.left), b.attr("data-origin-width", i.width), b.addClass("active"), b.attr("data-open", !0), b.css({
            "text-align": "center",
            width: "100%",
            bottom: 0,
            left: 0,
            transform: "translateX(" + c + "px)",
            transition: "none"
          }), j.css({
            transform: "translateY(" + -d + "px)",
            transition: "none"
          }), l.css({
            "background-color": m
          }), setTimeout(function() {
            b.css({
              transform: "",
              transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
            }), j.css({
              overflow: "visible",
              transform: "",
              transition: "transform .2s"
            }), setTimeout(function() {
              b.css({
                overflow: "hidden",
                "background-color": m
              }), l.css({
                transform: "scale(" + f + ")",
                transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
              }), k.find("> li > a").css({
                opacity: 1
              }), a(window).on("scroll.fabToolbarClose", function() {
                e(b), a(window).off("scroll.fabToolbarClose"), a(document).off("click.fabToolbarClose")
              }), a(document).on("click.fabToolbarClose", function(c) {
                a(c.target).closest(k).length || (e(b), a(window).off("scroll.fabToolbarClose"), a(document).off("click.fabToolbarClose"))
              })
            }, 100)
          }, 0)
        }
      },
      e = function(a) {
        if ("true" === a.attr("data-open")) {
          var b, c, d, e = window.innerWidth,
            f = window.innerHeight,
            g = a.attr("data-origin-width"),
            h = a.attr("data-origin-bottom"),
            i = a.attr("data-origin-left"),
            j = a.find("> .btn-floating").first(),
            k = a.find("> ul").first(),
            l = a.find(".fab-backdrop"),
            m = j.css("background-color");
          b = i - e / 2 + g / 2, c = f - h, d = e / l.width(), a.removeClass("active"), a.attr("data-open", !1), a.css({
            "background-color": "transparent",
            transition: "none"
          }), j.css({
            transition: "none"
          }), l.css({
            transform: "scale(0)",
            "background-color": m
          }), k.find("> li > a").css({
            opacity: ""
          }), setTimeout(function() {
            l.remove(), a.css({
              "text-align": "",
              width: "",
              bottom: "",
              left: "",
              overflow: "",
              "background-color": "",
              transform: "translate3d(" + -b + "px,0,0)"
            }), j.css({
              overflow: "",
              transform: "translate3d(0," + c + "px,0)"
            }), setTimeout(function() {
              a.css({
                transform: "translate3d(0,0,0)",
                transition: "transform .2s"
              }), j.css({
                transform: "translate3d(0,0,0)",
                transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
              })
            }, 20)
          }, 200)
        }
      }
  }(jQuery),
  function(a) {
    Materialize.fadeInImage = function(b) {
      var c;
      if ("string" == typeof b) c = a(b);
      else {
        if ("object" != typeof b) return;
        c = b
      }
      c.css({
        opacity: 0
      }), a(c).velocity({
        opacity: 1
      }, {
        duration: 650,
        queue: !1,
        easing: "easeOutSine"
      }), a(c).velocity({
        opacity: 1
      }, {
        duration: 1300,
        queue: !1,
        easing: "swing",
        step: function(b, c) {
          c.start = 100;
          var d = b / 100,
            e = 150 - (100 - b) / 1.75;
          e < 100 && (e = 100), b >= 0 && a(this).css({
            "-webkit-filter": "grayscale(" + d + ")brightness(" + e + "%)",
            filter: "grayscale(" + d + ")brightness(" + e + "%)"
          })
        }
      })
    }, Materialize.showStaggeredList = function(b) {
      var c;
      if ("string" == typeof b) c = a(b);
      else {
        if ("object" != typeof b) return;
        c = b
      }
      var d = 0;
      c.find("li").velocity({
        translateX: "-100px"
      }, {
        duration: 0
      }), c.find("li").each(function() {
        a(this).velocity({
          opacity: "1",
          translateX: "0"
        }, {
          duration: 800,
          delay: d,
          easing: [60, 10]
        }), d += 120
      })
    }, a(document).ready(function() {
      var b = !1,
        c = !1;
      a(".dismissable").each(function() {
        a(this).hammer({
          prevent_default: !1
        }).bind("pan", function(d) {
          if ("touch" === d.gesture.pointerType) {
            var e = a(this),
              f = d.gesture.direction,
              g = d.gesture.deltaX,
              h = d.gesture.velocityX;
            e.velocity({
              translateX: g
            }, {
              duration: 50,
              queue: !1,
              easing: "easeOutQuad"
            }), 4 === f && (g > e.innerWidth() / 2 || h < -.75) && (b = !0), 2 === f && (g < -1 * e.innerWidth() / 2 || h > .75) && (c = !0)
          }
        }).bind("panend", function(d) {
          if (Math.abs(d.gesture.deltaX) < a(this).innerWidth() / 2 && (c = !1, b = !1), "touch" === d.gesture.pointerType) {
            var e = a(this);
            if (b || c) {
              var f;
              f = b ? e.innerWidth() : -1 * e.innerWidth(), e.velocity({
                translateX: f
              }, {
                duration: 100,
                queue: !1,
                easing: "easeOutQuad",
                complete: function() {
                  e.css("border", "none"), e.velocity({
                    height: 0,
                    padding: 0
                  }, {
                    duration: 200,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                      e.remove()
                    }
                  })
                }
              })
            } else e.velocity({
              translateX: 0
            }, {
              duration: 100,
              queue: !1,
              easing: "easeOutQuad"
            });
            b = !1, c = !1
          }
        })
      })
    })
  }(jQuery),
  function(a) {
    var b = !1;
    Materialize.scrollFire = function(a) {
      var c = function() {
          for (var b = window.pageYOffset + window.innerHeight, c = 0; c < a.length; c++) {
            var d = a[c],
              e = d.selector,
              f = d.offset,
              g = d.callback,
              h = document.querySelector(e);
            if (null !== h) {
              var i = h.getBoundingClientRect().top + window.pageYOffset;
              if (b > i + f && d.done !== !0) {
                if ("function" == typeof g) g.call(this, h);
                else if ("string" == typeof g) {
                  var j = new Function(g);
                  j(h)
                }
                d.done = !0
              }
            }
          }
        },
        d = Materialize.throttle(function() {
          c()
        }, a.throttle || 100);
      b || (window.addEventListener("scroll", d), window.addEventListener("resize", d), b = !0), setTimeout(d, 0)
    }
  }(jQuery),
  function(a) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : this.Picker = a(jQuery)
  }(function(a) {
    function b(f, g, i, l) {
      function m() {
        return b._.node("div", b._.node("div", b._.node("div", b._.node("div", y.component.nodes(t.open), v.box), v.wrap), v.frame), v.holder)
      }

      function n() {
        w.data(g, y).addClass(v.input).attr("tabindex", -1).val(w.data("value") ? y.get("select", u.format) : f.value), u.editable || w.on("focus." + t.id + " click." + t.id, function(a) {
          a.preventDefault(), y.$root.eq(0).focus()
        }).on("keydown." + t.id, q), e(f, {
          haspopup: !0,
          expanded: !1,
          readonly: !1,
          owns: f.id + "_root"
        })
      }

      function o() {
        y.$root.on({
          keydown: q,
          focusin: function(a) {
            y.$root.removeClass(v.focused), a.stopPropagation()
          },
          "mousedown click": function(b) {
            var c = b.target;
            c != y.$root.children()[0] && (b.stopPropagation(), "mousedown" != b.type || a(c).is("input, select, textarea, button, option") || (b.preventDefault(), y.$root.eq(0).focus()))
          }
        }).on({
          focus: function() {
            w.addClass(v.target)
          },
          blur: function() {
            w.removeClass(v.target)
          }
        }).on("focus.toOpen", r).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
          var b = a(this),
            c = b.data(),
            d = b.hasClass(v.navDisabled) || b.hasClass(v.disabled),
            e = h();
          e = e && (e.type || e.href), (d || e && !a.contains(y.$root[0], e)) && y.$root.eq(0).focus(), !d && c.nav ? y.set("highlight", y.component.item.highlight, {
            nav: c.nav
          }) : !d && "pick" in c ? y.set("select", c.pick) : c.clear ? y.clear().close(!0) : c.close && y.close(!0)
        }), e(y.$root[0], "hidden", !0)
      }

      function p() {
        var b;
        u.hiddenName === !0 ? (b = f.name, f.name = "") : (b = ["string" == typeof u.hiddenPrefix ? u.hiddenPrefix : "", "string" == typeof u.hiddenSuffix ? u.hiddenSuffix : "_submit"], b = b[0] + f.name + b[1]), y._hidden = a('<input type=hidden name="' + b + '"' + (w.data("value") || f.value ? ' value="' + y.get("select", u.formatSubmit) + '"' : "") + ">")[0], w.on("change." + t.id, function() {
          y._hidden.value = f.value ? y.get("select", u.formatSubmit) : ""
        }), u.container ? a(u.container).append(y._hidden) : w.after(y._hidden)
      }

      function q(a) {
        var b = a.keyCode,
          c = /^(8|46)$/.test(b);
        return 27 == b ? (y.close(), !1) : void((32 == b || c || !t.open && y.component.key[b]) && (a.preventDefault(), a.stopPropagation(), c ? y.clear().close() : y.open()))
      }

      function r(a) {
        a.stopPropagation(), "focus" == a.type && y.$root.addClass(v.focused), y.open()
      }
      if (!f) return b;
      var s = !1,
        t = {
          id: f.id || "P" + Math.abs(~~(Math.random() * new Date))
        },
        u = i ? a.extend(!0, {}, i.defaults, l) : l || {},
        v = a.extend({}, b.klasses(), u.klass),
        w = a(f),
        x = function() {
          return this.start()
        },
        y = x.prototype = {
          constructor: x,
          $node: w,
          start: function() {
            return t && t.start ? y : (t.methods = {}, t.start = !0, t.open = !1, t.type = f.type, f.autofocus = f == h(), f.readOnly = !u.editable, f.id = f.id || t.id, "text" != f.type && (f.type = "text"), y.component = new i(y, u), y.$root = a(b._.node("div", m(), v.picker, 'id="' + f.id + '_root" tabindex="0"')), o(), u.formatSubmit && p(), n(), u.container ? a(u.container).append(y.$root) : w.after(y.$root), y.on({
              start: y.component.onStart,
              render: y.component.onRender,
              stop: y.component.onStop,
              open: y.component.onOpen,
              close: y.component.onClose,
              set: y.component.onSet
            }).on({
              start: u.onStart,
              render: u.onRender,
              stop: u.onStop,
              open: u.onOpen,
              close: u.onClose,
              set: u.onSet
            }), s = c(y.$root.children()[0]), f.autofocus && y.open(), y.trigger("start").trigger("render"))
          },
          render: function(a) {
            return a ? y.$root.html(m()) : y.$root.find("." + v.box).html(y.component.nodes(t.open)), y.trigger("render")
          },
          stop: function() {
            return t.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), w.removeClass(v.input).removeData(g), setTimeout(function() {
              w.off("." + t.id)
            }, 0), f.type = t.type, f.readOnly = !1, y.trigger("stop"), t.methods = {}, t.start = !1, y) : y
          },
          open: function(c) {
            return t.open ? y : (w.addClass(v.active), e(f, "expanded", !0), setTimeout(function() {
              y.$root.addClass(v.opened), e(y.$root[0], "hidden", !1)
            }, 0), c !== !1 && (t.open = !0, s && k.css("overflow", "hidden").css("padding-right", "+=" + d()), y.$root.eq(0).focus(), j.on("click." + t.id + " focusin." + t.id, function(a) {
              var b = a.target;
              b != f && b != document && 3 != a.which && y.close(b === y.$root.children()[0])
            }).on("keydown." + t.id, function(c) {
              var d = c.keyCode,
                e = y.component.key[d],
                f = c.target;
              27 == d ? y.close(!0) : f != y.$root[0] || !e && 13 != d ? a.contains(y.$root[0], f) && 13 == d && (c.preventDefault(), f.click()) : (c.preventDefault(), e ? b._.trigger(y.component.key.go, y, [b._.trigger(e)]) : y.$root.find("." + v.highlighted).hasClass(v.disabled) || y.set("select", y.component.item.highlight).close())
            })), y.trigger("open"))
          },
          close: function(a) {
            return a && (y.$root.off("focus.toOpen").eq(0).focus(), setTimeout(function() {
              y.$root.on("focus.toOpen", r)
            }, 0)), w.removeClass(v.active), e(f, "expanded", !1), setTimeout(function() {
              y.$root.removeClass(v.opened + " " + v.focused), e(y.$root[0], "hidden", !0)
            }, 0), t.open ? (t.open = !1, s && k.css("overflow", "").css("padding-right", "-=" + d()), j.off("." + t.id), y.trigger("close")) : y
          },
          clear: function(a) {
            return y.set("clear", null, a)
          },
          set: function(b, c, d) {
            var e, f, g = a.isPlainObject(b),
              h = g ? b : {};
            if (d = g && a.isPlainObject(c) ? c : d || {}, b) {
              g || (h[b] = c);
              for (e in h) f = h[e], e in y.component.item && (void 0 === f && (f = null), y.component.set(e, f, d)), "select" != e && "clear" != e || w.val("clear" == e ? "" : y.get(e, u.format)).trigger("change");
              y.render()
            }
            return d.muted ? y : y.trigger("set", h)
          },
          get: function(a, c) {
            if (a = a || "value", null != t[a]) return t[a];
            if ("valueSubmit" == a) {
              if (y._hidden) return y._hidden.value;
              a = "value"
            }
            if ("value" == a) return f.value;
            if (a in y.component.item) {
              if ("string" == typeof c) {
                var d = y.component.get(a);
                return d ? b._.trigger(y.component.formats.toString, y.component, [c, d]) : ""
              }
              return y.component.get(a)
            }
          },
          on: function(b, c, d) {
            var e, f, g = a.isPlainObject(b),
              h = g ? b : {};
            if (b) {
              g || (h[b] = c);
              for (e in h) f = h[e], d && (e = "_" + e), t.methods[e] = t.methods[e] || [], t.methods[e].push(f)
            }
            return y
          },
          off: function() {
            var a, b, c = arguments;
            for (a = 0, namesCount = c.length; a < namesCount; a += 1) b = c[a], b in t.methods && delete t.methods[b];
            return y
          },
          trigger: function(a, c) {
            var d = function(a) {
              var d = t.methods[a];
              d && d.map(function(a) {
                b._.trigger(a, y, [c])
              })
            };
            return d("_" + a), d(a), y
          }
        };
      return new x
    }

    function c(a) {
      var b, c = "position";
      return a.currentStyle ? b = a.currentStyle[c] : window.getComputedStyle && (b = getComputedStyle(a)[c]), "fixed" == b
    }

    function d() {
      if (k.height() <= i.height()) return 0;
      var b = a('<div style="visibility:hidden;width:100px" />').appendTo("body"),
        c = b[0].offsetWidth;
      b.css("overflow", "scroll");
      var d = a('<div style="width:100%" />').appendTo(b),
        e = d[0].offsetWidth;
      return b.remove(), c - e
    }

    function e(b, c, d) {
      if (a.isPlainObject(c))
        for (var e in c) f(b, e, c[e]);
      else f(b, c, d)
    }

    function f(a, b, c) {
      a.setAttribute(("role" == b ? "" : "aria-") + b, c)
    }

    function g(b, c) {
      a.isPlainObject(b) || (b = {
        attribute: c
      }), c = "";
      for (var d in b) {
        var e = ("role" == d ? "" : "aria-") + d,
          f = b[d];
        c += null == f ? "" : e + '="' + b[d] + '"'
      }
      return c
    }

    function h() {
      try {
        return document.activeElement
      } catch (a) {}
    }
    var i = a(window),
      j = a(document),
      k = a(document.documentElement);
    return b.klasses = function(a) {
      return a = a || "picker", {
        picker: a,
        opened: a + "--opened",
        focused: a + "--focused",
        input: a + "__input",
        active: a + "__input--active",
        target: a + "__input--target",
        holder: a + "__holder",
        frame: a + "__frame",
        wrap: a + "__wrap",
        box: a + "__box"
      }
    }, b._ = {
      group: function(a) {
        for (var c, d = "", e = b._.trigger(a.min, a); e <= b._.trigger(a.max, a, [e]); e += a.i) c = b._.trigger(a.item, a, [e]), d += b._.node(a.node, c[0], c[1], c[2]);
        return d
      },
      node: function(b, c, d, e) {
        return c ? (c = a.isArray(c) ? c.join("") : c, d = d ? ' class="' + d + '"' : "", e = e ? " " + e : "", "<" + b + d + e + ">" + c + "</" + b + ">") : ""
      },
      lead: function(a) {
        return (a < 10 ? "0" : "") + a
      },
      trigger: function(a, b, c) {
        return "function" == typeof a ? a.apply(b, c || []) : a
      },
      digits: function(a) {
        return /\d/.test(a[1]) ? 2 : 1
      },
      isDate: function(a) {
        return {}.toString.call(a).indexOf("Date") > -1 && this.isInteger(a.getDate())
      },
      isInteger: function(a) {
        return {}.toString.call(a).indexOf("Number") > -1 && a % 1 === 0
      },
      ariaAttr: g
    }, b.extend = function(c, d) {
      a.fn[c] = function(e, f) {
        var g = this.data(c);
        return "picker" == e ? g : g && "string" == typeof e ? b._.trigger(g[e], g, [f]) : this.each(function() {
          var f = a(this);
          f.data(c) || new b(this, c, d, e)
        })
      }, a.fn[c].defaults = d.defaults
    }, b
  }),
  function(a) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], a) : "object" == typeof exports ? module.exports = a(require("./picker.js"), require("jquery")) : a(Picker, jQuery)
  }(function(a, b) {
    function c(a, b) {
      var c = this,
        d = a.$node[0],
        e = d.value,
        f = a.$node.data("value"),
        g = f || e,
        h = f ? b.formatSubmit : b.format,
        i = function() {
          return d.currentStyle ? "rtl" == d.currentStyle.direction : "rtl" == getComputedStyle(a.$root[0]).direction
        };
      c.settings = b, c.$node = a.$node, c.queue = {
        min: "measure create",
        max: "measure create",
        now: "now create",
        select: "parse create validate",
        highlight: "parse navigate create validate",
        view: "parse create validate viewset",
        disable: "deactivate",
        enable: "activate"
      }, c.item = {}, c.item.clear = null, c.item.disable = (b.disable || []).slice(0), c.item.enable = - function(a) {
        return a[0] === !0 ? a.shift() : -1
      }(c.item.disable), c.set("min", b.min).set("max", b.max).set("now"), g ? c.set("select", g, {
        format: h
      }) : c.set("select", null).set("highlight", c.item.now), c.key = {
        40: 7,
        38: -7,
        39: function() {
          return i() ? -1 : 1
        },
        37: function() {
          return i() ? 1 : -1
        },
        go: function(a) {
          var b = c.item.highlight,
            d = new Date(b.year, b.month, b.date + a);
          c.set("highlight", d, {
            interval: a
          }), this.render()
        }
      }, a.on("render", function() {
        a.$root.find("." + b.klass.selectMonth).on("change", function() {
          var c = this.value;
          c && (a.set("highlight", [a.get("view").year, c, a.get("highlight").date]), a.$root.find("." + b.klass.selectMonth).trigger("focus"))
        }), a.$root.find("." + b.klass.selectYear).on("change", function() {
          var c = this.value;
          c && (a.set("highlight", [c, a.get("view").month, a.get("highlight").date]), a.$root.find("." + b.klass.selectYear).trigger("focus"))
        })
      }, 1).on("open", function() {
        var d = "";
        c.disabled(c.get("now")) && (d = ":not(." + b.klass.buttonToday + ")"), a.$root.find("button" + d + ", select").attr("disabled", !1)
      }, 1).on("close", function() {
        a.$root.find("button, select").attr("disabled", !0)
      }, 1)
    }
    var d = 7,
      e = 6,
      f = a._;
    c.prototype.set = function(a, b, c) {
      var d = this,
        e = d.item;
      return null === b ? ("clear" == a && (a = "select"), e[a] = b, d) : (e["enable" == a ? "disable" : "flip" == a ? "enable" : a] = d.queue[a].split(" ").map(function(e) {
        return b = d[e](a, b, c)
      }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : a.match(/^(flip|min|max|disable|enable)$/) && (e.select && d.disabled(e.select) && d.set("select", e.select, c),
        e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), d)
    }, c.prototype.get = function(a) {
      return this.item[a]
    }, c.prototype.create = function(a, c, d) {
      var e, g = this;
      return c = void 0 === c ? a : c, c == -(1 / 0) || c == 1 / 0 ? e = c : b.isPlainObject(c) && f.isInteger(c.pick) ? c = c.obj : b.isArray(c) ? (c = new Date(c[0], c[1], c[2]), c = f.isDate(c) ? c : g.create().obj) : c = f.isInteger(c) || f.isDate(c) ? g.normalize(new Date(c), d) : g.now(a, c, d), {
        year: e || c.getFullYear(),
        month: e || c.getMonth(),
        date: e || c.getDate(),
        day: e || c.getDay(),
        obj: e || c,
        pick: e || c.getTime()
      }
    }, c.prototype.createRange = function(a, c) {
      var d = this,
        e = function(a) {
          return a === !0 || b.isArray(a) || f.isDate(a) ? d.create(a) : a
        };
      return f.isInteger(a) || (a = e(a)), f.isInteger(c) || (c = e(c)), f.isInteger(a) && b.isPlainObject(c) ? a = [c.year, c.month, c.date + a] : f.isInteger(c) && b.isPlainObject(a) && (c = [a.year, a.month, a.date + c]), {
        from: e(a),
        to: e(c)
      }
    }, c.prototype.withinRange = function(a, b) {
      return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick
    }, c.prototype.overlapRanges = function(a, b) {
      var c = this;
      return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to)
    }, c.prototype.now = function(a, b, c) {
      return b = new Date, c && c.rel && b.setDate(b.getDate() + c.rel), this.normalize(b, c)
    }, c.prototype.navigate = function(a, c, d) {
      var e, f, g, h, i = b.isArray(c),
        j = b.isPlainObject(c),
        k = this.item.view;
      if (i || j) {
        for (j ? (f = c.year, g = c.month, h = c.date) : (f = +c[0], g = +c[1], h = +c[2]), d && d.nav && k && k.month !== g && (f = k.year, g = k.month), e = new Date(f, g + (d && d.nav ? d.nav : 0), 1), f = e.getFullYear(), g = e.getMonth(); new Date(f, g, h).getMonth() !== g;) h -= 1;
        c = [f, g, h]
      }
      return c
    }, c.prototype.normalize = function(a) {
      return a.setHours(0, 0, 0, 0), a
    }, c.prototype.measure = function(a, b) {
      var c = this;
      return b ? "string" == typeof b ? b = c.parse(a, b) : f.isInteger(b) && (b = c.now(a, b, {
        rel: b
      })) : b = "min" == a ? -(1 / 0) : 1 / 0, b
    }, c.prototype.viewset = function(a, b) {
      return this.create([b.year, b.month, 1])
    }, c.prototype.validate = function(a, c, d) {
      var e, g, h, i, j = this,
        k = c,
        l = d && d.interval ? d.interval : 1,
        m = j.item.enable === -1,
        n = j.item.min,
        o = j.item.max,
        p = m && j.item.disable.filter(function(a) {
          if (b.isArray(a)) {
            var d = j.create(a).pick;
            d < c.pick ? e = !0 : d > c.pick && (g = !0)
          }
          return f.isInteger(a)
        }).length;
      if ((!d || !d.nav) && (!m && j.disabled(c) || m && j.disabled(c) && (p || e || g) || !m && (c.pick <= n.pick || c.pick >= o.pick)))
        for (m && !p && (!g && l > 0 || !e && l < 0) && (l *= -1); j.disabled(c) && (Math.abs(l) > 1 && (c.month < k.month || c.month > k.month) && (c = k, l = l > 0 ? 1 : -1), c.pick <= n.pick ? (h = !0, l = 1, c = j.create([n.year, n.month, n.date + (c.pick === n.pick ? 0 : -1)])) : c.pick >= o.pick && (i = !0, l = -1, c = j.create([o.year, o.month, o.date + (c.pick === o.pick ? 0 : 1)])), !h || !i);) c = j.create([c.year, c.month, c.date + l]);
      return c
    }, c.prototype.disabled = function(a) {
      var c = this,
        d = c.item.disable.filter(function(d) {
          return f.isInteger(d) ? a.day === (c.settings.firstDay ? d : d - 1) % 7 : b.isArray(d) || f.isDate(d) ? a.pick === c.create(d).pick : b.isPlainObject(d) ? c.withinRange(d, a) : void 0
        });
      return d = d.length && !d.filter(function(a) {
        return b.isArray(a) && "inverted" == a[3] || b.isPlainObject(a) && a.inverted
      }).length, c.item.enable === -1 ? !d : d || a.pick < c.item.min.pick || a.pick > c.item.max.pick
    }, c.prototype.parse = function(a, b, c) {
      var d = this,
        e = {};
      return b && "string" == typeof b ? (c && c.format || (c = c || {}, c.format = d.settings.format), d.formats.toArray(c.format).map(function(a) {
        var c = d.formats[a],
          g = c ? f.trigger(c, d, [b, e]) : a.replace(/^!/, "").length;
        c && (e[a] = b.substr(0, g)), b = b.substr(g)
      }), [e.yyyy || e.yy, +(e.mm || e.m) - 1, e.dd || e.d]) : b
    }, c.prototype.formats = function() {
      function a(a, b, c) {
        var d = a.match(/\w+/)[0];
        return c.mm || c.m || (c.m = b.indexOf(d) + 1), d.length
      }

      function b(a) {
        return a.match(/\w+/)[0].length
      }
      return {
        d: function(a, b) {
          return a ? f.digits(a) : b.date
        },
        dd: function(a, b) {
          return a ? 2 : f.lead(b.date)
        },
        ddd: function(a, c) {
          return a ? b(a) : this.settings.weekdaysShort[c.day]
        },
        dddd: function(a, c) {
          return a ? b(a) : this.settings.weekdaysFull[c.day]
        },
        m: function(a, b) {
          return a ? f.digits(a) : b.month + 1
        },
        mm: function(a, b) {
          return a ? 2 : f.lead(b.month + 1)
        },
        mmm: function(b, c) {
          var d = this.settings.monthsShort;
          return b ? a(b, d, c) : d[c.month]
        },
        mmmm: function(b, c) {
          var d = this.settings.monthsFull;
          return b ? a(b, d, c) : d[c.month]
        },
        yy: function(a, b) {
          return a ? 2 : ("" + b.year).slice(2)
        },
        yyyy: function(a, b) {
          return a ? 4 : b.year
        },
        toArray: function(a) {
          return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
        },
        toString: function(a, b) {
          var c = this;
          return c.formats.toArray(a).map(function(a) {
            return f.trigger(c.formats[a], c, [0, b]) || a.replace(/^!/, "")
          }).join("")
        }
      }
    }(), c.prototype.isDateExact = function(a, c) {
      var d = this;
      return f.isInteger(a) && f.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (f.isDate(a) || b.isArray(a)) && (f.isDate(c) || b.isArray(c)) ? d.create(a).pick === d.create(c).pick : !(!b.isPlainObject(a) || !b.isPlainObject(c)) && (d.isDateExact(a.from, c.from) && d.isDateExact(a.to, c.to))
    }, c.prototype.isDateOverlap = function(a, c) {
      var d = this,
        e = d.settings.firstDay ? 1 : 0;
      return f.isInteger(a) && (f.isDate(c) || b.isArray(c)) ? (a = a % 7 + e, a === d.create(c).day + 1) : f.isInteger(c) && (f.isDate(a) || b.isArray(a)) ? (c = c % 7 + e, c === d.create(a).day + 1) : !(!b.isPlainObject(a) || !b.isPlainObject(c)) && d.overlapRanges(a, c)
    }, c.prototype.flipEnable = function(a) {
      var b = this.item;
      b.enable = a || (b.enable == -1 ? 1 : -1)
    }, c.prototype.deactivate = function(a, c) {
      var d = this,
        e = d.item.disable.slice(0);
      return "flip" == c ? d.flipEnable() : c === !1 ? (d.flipEnable(1), e = []) : c === !0 ? (d.flipEnable(-1), e = []) : c.map(function(a) {
        for (var c, g = 0; g < e.length; g += 1)
          if (d.isDateExact(a, e[g])) {
            c = !0;
            break
          }
        c || (f.isInteger(a) || f.isDate(a) || b.isArray(a) || b.isPlainObject(a) && a.from && a.to) && e.push(a)
      }), e
    }, c.prototype.activate = function(a, c) {
      var d = this,
        e = d.item.disable,
        g = e.length;
      return "flip" == c ? d.flipEnable() : c === !0 ? (d.flipEnable(1), e = []) : c === !1 ? (d.flipEnable(-1), e = []) : c.map(function(a) {
        var c, h, i, j;
        for (i = 0; i < g; i += 1) {
          if (h = e[i], d.isDateExact(h, a)) {
            c = e[i] = null, j = !0;
            break
          }
          if (d.isDateOverlap(h, a)) {
            b.isPlainObject(a) ? (a.inverted = !0, c = a) : b.isArray(a) ? (c = a, c[3] || c.push("inverted")) : f.isDate(a) && (c = [a.getFullYear(), a.getMonth(), a.getDate(), "inverted"]);
            break
          }
        }
        if (c)
          for (i = 0; i < g; i += 1)
            if (d.isDateExact(e[i], a)) {
              e[i] = null;
              break
            }
        if (j)
          for (i = 0; i < g; i += 1)
            if (d.isDateOverlap(e[i], a)) {
              e[i] = null;
              break
            }
        c && e.push(c)
      }), e.filter(function(a) {
        return null != a
      })
    }, c.prototype.nodes = function(a) {
      var b = this,
        c = b.settings,
        g = b.item,
        h = g.now,
        i = g.select,
        j = g.highlight,
        k = g.view,
        l = g.disable,
        m = g.min,
        n = g.max,
        o = function(a, b) {
          return c.firstDay && (a.push(a.shift()), b.push(b.shift())), f.node("thead", f.node("tr", f.group({
            min: 0,
            max: d - 1,
            i: 1,
            node: "th",
            item: function(d) {
              return [a[d], c.klass.weekdays, 'scope=col title="' + b[d] + '"']
            }
          })))
        }((c.showWeekdaysFull ? c.weekdaysFull : c.weekdaysLetter).slice(0), c.weekdaysFull.slice(0)),
        p = function(a) {
          return f.node("div", " ", c.klass["nav" + (a ? "Next" : "Prev")] + (a && k.year >= n.year && k.month >= n.month || !a && k.year <= m.year && k.month <= m.month ? " " + c.klass.navDisabled : ""), "data-nav=" + (a || -1) + " " + f.ariaAttr({
            role: "button",
            controls: b.$node[0].id + "_table"
          }) + ' title="' + (a ? c.labelMonthNext : c.labelMonthPrev) + '"')
        },
        q = function(d) {
          var e = c.showMonthsShort ? c.monthsShort : c.monthsFull;
          return "short_months" == d && (e = c.monthsShort), c.selectMonths && void 0 == d ? f.node("select", f.group({
            min: 0,
            max: 11,
            i: 1,
            node: "option",
            item: function(a) {
              return [e[a], 0, "value=" + a + (k.month == a ? " selected" : "") + (k.year == m.year && a < m.month || k.year == n.year && a > n.month ? " disabled" : "")]
            }
          }), c.klass.selectMonth + " browser-default", (a ? "" : "disabled") + " " + f.ariaAttr({
            controls: b.$node[0].id + "_table"
          }) + ' title="' + c.labelMonthSelect + '"') : "short_months" == d ? null != i ? f.node("div", e[i.month]) : f.node("div", e[k.month]) : f.node("div", e[k.month], c.klass.month)
        },
        r = function(d) {
          var e = k.year,
            g = c.selectYears === !0 ? 5 : ~~(c.selectYears / 2);
          if (g) {
            var h = m.year,
              i = n.year,
              j = e - g,
              l = e + g;
            if (h > j && (l += h - j, j = h), i < l) {
              var o = j - h,
                p = l - i;
              j -= o > p ? p : o, l = i
            }
            if (c.selectYears && void 0 == d) return f.node("select", f.group({
              min: j,
              max: l,
              i: 1,
              node: "option",
              item: function(a) {
                return [a, 0, "value=" + a + (e == a ? " selected" : "")]
              }
            }), c.klass.selectYear + " browser-default", (a ? "" : "disabled") + " " + f.ariaAttr({
              controls: b.$node[0].id + "_table"
            }) + ' title="' + c.labelYearSelect + '"')
          }
          return "raw" == d ? f.node("div", e) : f.node("div", e, c.klass.year)
        };
      return createDayLabel = function() {
        return null != i ? f.node("div", i.date) : f.node("div", h.date)
      }, createWeekdayLabel = function() {
        var a;
        a = null != i ? i.day : h.day;
        var b = c.weekdaysFull[a];
        return b
      }, f.node("div", f.node("div", createWeekdayLabel(), "picker__weekday-display") + f.node("div", q("short_months"), c.klass.month_display) + f.node("div", createDayLabel(), c.klass.day_display) + f.node("div", r("raw"), c.klass.year_display), c.klass.date_display) + f.node("div", f.node("div", (c.selectYears ? q() + r() : q() + r()) + p() + p(1), c.klass.header) + f.node("table", o + f.node("tbody", f.group({
        min: 0,
        max: e - 1,
        i: 1,
        node: "tr",
        item: function(a) {
          var e = c.firstDay && 0 === b.create([k.year, k.month, 1]).day ? -7 : 0;
          return [f.group({
            min: d * a - k.day + e + 1,
            max: function() {
              return this.min + d - 1
            },
            i: 1,
            node: "td",
            item: function(a) {
              a = b.create([k.year, k.month, a + (c.firstDay ? 1 : 0)]);
              var d = i && i.pick == a.pick,
                e = j && j.pick == a.pick,
                g = l && b.disabled(a) || a.pick < m.pick || a.pick > n.pick,
                o = f.trigger(b.formats.toString, b, [c.format, a]);
              return [f.node("div", a.date, function(b) {
                return b.push(k.month == a.month ? c.klass.infocus : c.klass.outfocus), h.pick == a.pick && b.push(c.klass.now), d && b.push(c.klass.selected), e && b.push(c.klass.highlighted), g && b.push(c.klass.disabled), b.join(" ")
              }([c.klass.day]), "data-pick=" + a.pick + " " + f.ariaAttr({
                role: "gridcell",
                label: o,
                selected: !(!d || b.$node.val() !== o) || null,
                activedescendant: !!e || null,
                disabled: !!g || null
              })), "", f.ariaAttr({
                role: "presentation"
              })]
            }
          })]
        }
      })), c.klass.table, 'id="' + b.$node[0].id + '_table" ' + f.ariaAttr({
        role: "grid",
        controls: b.$node[0].id,
        readonly: !0
      })), c.klass.calendar_container) + f.node("div", f.node("button", c.today, "btn-flat picker__today", "type=button data-pick=" + h.pick + (a && !b.disabled(h) ? "" : " disabled") + " " + f.ariaAttr({
        controls: b.$node[0].id
      })) + f.node("button", c.clear, "btn-flat picker__clear", "type=button data-clear=1" + (a ? "" : " disabled") + " " + f.ariaAttr({
        controls: b.$node[0].id
      })) + f.node("button", c.close, "btn-flat picker__close", "type=button data-close=true " + (a ? "" : " disabled") + " " + f.ariaAttr({
        controls: b.$node[0].id
      })), c.klass.footer)
    }, c.defaults = function(a) {
      return {
        labelMonthNext: "Next month",
        labelMonthPrev: "Previous month",
        labelMonthSelect: "Select a month",
        labelYearSelect: "Select a year",
        monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
        today: "Today",
        clear: "Clear",
        close: "Close",
        format: "d mmmm, yyyy",
        klass: {
          table: a + "table",
          header: a + "header",
          date_display: a + "date-display",
          day_display: a + "day-display",
          month_display: a + "month-display",
          year_display: a + "year-display",
          calendar_container: a + "calendar-container",
          navPrev: a + "nav--prev",
          navNext: a + "nav--next",
          navDisabled: a + "nav--disabled",
          month: a + "month",
          year: a + "year",
          selectMonth: a + "select--month",
          selectYear: a + "select--year",
          weekdays: a + "weekday",
          day: a + "day",
          disabled: a + "day--disabled",
          selected: a + "day--selected",
          highlighted: a + "day--highlighted",
          now: a + "day--today",
          infocus: a + "day--infocus",
          outfocus: a + "day--outfocus",
          footer: a + "footer",
          buttonClear: a + "button--clear",
          buttonToday: a + "button--today",
          buttonClose: a + "button--close"
        }
      }
    }(a.klasses().picker + "__"), a.extend("pickadate", c)
  }),
  function(a) {
    function b() {
      var b = +a(this).attr("data-length"),
        c = +a(this).val().length,
        d = c <= b;
      a(this).parent().find('span[class="character-counter"]').html(c + "/" + b), e(d, a(this))
    }

    function c(b) {
      var c = b.parent().find('span[class="character-counter"]');
      c.length || (c = a("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), b.parent().append(c))
    }

    function d() {
      a(this).parent().find('span[class="character-counter"]').html("")
    }

    function e(a, b) {
      var c = b.hasClass("invalid");
      a && c ? b.removeClass("invalid") : a || c || (b.removeClass("valid"), b.addClass("invalid"))
    }
    a.fn.characterCounter = function() {
      return this.each(function() {
        var e = a(this),
          f = e.parent().find('span[class="character-counter"]');
        if (!f.length) {
          var g = void 0 !== e.attr("data-length");
          g && (e.on("input", b), e.on("focus", b), e.on("blur", d), c(e))
        }
      })
    }, a(document).ready(function() {
      a("input, textarea").characterCounter()
    })
  }(jQuery),
  function(a) {
    var b = {
      init: function(b) {
        var c = {
          duration: 200,
          dist: -100,
          shift: 0,
          padding: 0,
          fullWidth: !1,
          indicators: !1,
          noWrap: !1,
          onCycleTo: null
        };
        b = a.extend(c, b);
        var d = Materialize.objectSelectorString(a(this));
        return this.each(function(c) {
          function e() {
            "undefined" != typeof window.ontouchstart && (O[0].addEventListener("touchstart", n), O[0].addEventListener("touchmove", o), O[0].addEventListener("touchend", p)), O[0].addEventListener("mousedown", n), O[0].addEventListener("mousemove", o), O[0].addEventListener("mouseup", p), O[0].addEventListener("mouseleave", p), O[0].addEventListener("click", l)
          }

          function f(a) {
            return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientX : a.clientX
          }

          function g(a) {
            return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientY : a.clientY
          }

          function h(a) {
            return a >= x ? a % x : a < 0 ? h(x + a % x) : a
          }

          function i(c) {
            E = !0, O.hasClass("scrolling") || O.addClass("scrolling"), null != N && window.clearTimeout(N), N = window.setTimeout(function() {
              E = !1, O.removeClass("scrolling")
            }, b.duration);
            var d, e, f, g, i, j, k, l = u;
            if (t = "number" == typeof c ? c : t, u = Math.floor((t + w / 2) / w), f = t - u * w, g = f < 0 ? 1 : -1, i = -g * f * 2 / w, e = x >> 1, b.fullWidth ? k = "translateX(0)" : (k = "translateX(" + (O[0].clientWidth - r) / 2 + "px) ", k += "translateY(" + (O[0].clientHeight - s) / 2 + "px)"), P) {
              var m = u % x,
                n = M.find(".indicator-item.active");
              n.index() !== m && (n.removeClass("active"), M.find(".indicator-item").eq(m).addClass("active"))
            }
            for ((!b.noWrap || u >= 0 && u < x) && (j = q[h(u)], a(j).hasClass("active") || (O.find(".carousel-item").removeClass("active"), a(j).addClass("active")), j.style[F] = k + " translateX(" + -f / 2 + "px) translateX(" + g * b.shift * i * d + "px) translateZ(" + b.dist * i + "px)", j.style.zIndex = 0, b.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * i, j.style.opacity = tweenedOpacity, j.style.display = "block"), d = 1; d <= e; ++d) b.fullWidth ? (zTranslation = b.dist, tweenedOpacity = d === e && f < 0 ? 1 - i : 1) : (zTranslation = b.dist * (2 * d + i * g), tweenedOpacity = 1 - .2 * (2 * d + i * g)), (!b.noWrap || u + d < x) && (j = q[h(u + d)], j.style[F] = k + " translateX(" + (b.shift + (w * d - f) / 2) + "px) translateZ(" + zTranslation + "px)", j.style.zIndex = -d, j.style.opacity = tweenedOpacity, j.style.display = "block"), b.fullWidth ? (zTranslation = b.dist, tweenedOpacity = d === e && f > 0 ? 1 - i : 1) : (zTranslation = b.dist * (2 * d - i * g), tweenedOpacity = 1 - .2 * (2 * d - i * g)), (!b.noWrap || u - d >= 0) && (j = q[h(u - d)], j.style[F] = k + " translateX(" + (-b.shift + (-w * d - f) / 2) + "px) translateZ(" + zTranslation + "px)", j.style.zIndex = -d, j.style.opacity = tweenedOpacity, j.style.display = "block");
            if ((!b.noWrap || u >= 0 && u < x) && (j = q[h(u)], j.style[F] = k + " translateX(" + -f / 2 + "px) translateX(" + g * b.shift * i + "px) translateZ(" + b.dist * i + "px)", j.style.zIndex = 0, b.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * i, j.style.opacity = tweenedOpacity, j.style.display = "block"), l !== u && "function" == typeof b.onCycleTo) {
              var o = O.find(".carousel-item").eq(h(u));
              b.onCycleTo.call(this, o, J)
            }
          }

          function j() {
            var a, b, c, d;
            a = Date.now(), b = a - H, H = a, c = t - G, G = t, d = 1e3 * c / (1 + b), D = .8 * d + .2 * D
          }

          function k() {
            var a, c;
            B && (a = Date.now() - H, c = B * Math.exp(-a / b.duration), c > 2 || c < -2 ? (i(C - c), requestAnimationFrame(k)) : i(C))
          }

          function l(c) {
            if (J) return c.preventDefault(), c.stopPropagation(), !1;
            if (!b.fullWidth) {
              var d = a(c.target).closest(".carousel-item").index(),
                e = u % x - d;
              0 !== e && (c.preventDefault(), c.stopPropagation()), m(d)
            }
          }

          function m(a) {
            var c = u % x - a;
            b.noWrap || (c < 0 ? Math.abs(c + x) < Math.abs(c) && (c += x) : c > 0 && Math.abs(c - x) < c && (c -= x)), c < 0 ? O.trigger("carouselNext", [Math.abs(c)]) : c > 0 && O.trigger("carouselPrev", [c])
          }

          function n(a) {
            a.preventDefault(), v = !0, J = !1, K = !1, z = f(a), A = g(a), D = B = 0, G = t, H = Date.now(), clearInterval(I), I = setInterval(j, 100)
          }

          function o(a) {
            var b, c, d;
            if (v)
              if (b = f(a), y = g(a), c = z - b, d = Math.abs(A - y), d < 30 && !K)(c > 2 || c < -2) && (J = !0, z = b, i(t + c));
              else {
                if (J) return a.preventDefault(), a.stopPropagation(), !1;
                K = !0
              }
            if (J) return a.preventDefault(), a.stopPropagation(), !1
          }

          function p(a) {
            if (v) return v = !1, clearInterval(I), C = t, (D > 10 || D < -10) && (B = .9 * D, C = t + B), C = Math.round(C / w) * w, b.noWrap && (C >= w * (x - 1) ? C = w * (x - 1) : C < 0 && (C = 0)), B = C - t, H = Date.now(), requestAnimationFrame(k), J && (a.preventDefault(), a.stopPropagation()), !1
          }
          var q, r, s, t, u, v, w, x, z, A, B, C, D, E, F, G, H, I, J, K, L = d + c,
            M = a('<ul class="indicators"></ul>'),
            N = null,
            O = a(this),
            P = O.attr("data-indicators") || b.indicators,
            Q = function() {
              var b = O.find(".carousel-item img").first();
              if (b.length) b.prop("complete") ? O.css("height", b.height()) : b.on("load", function() {
                O.css("height", a(this).height())
              });
              else {
                var c = O.find(".carousel-item").first().height();
                O.css("height", c)
              }
            };
          return b.fullWidth && (b.dist = 0, Q(), P && O.find(".carousel-fixed-item").addClass("with-indicators")), O.hasClass("initialized") ? (a(window).trigger("resize"), a(this).trigger("carouselNext", [1e-6]), !0) : (O.addClass("initialized"), v = !1, t = C = 0, q = [], r = O.find(".carousel-item").first().innerWidth(), s = O.find(".carousel-item").first().innerHeight(), w = 2 * r + b.padding, O.find(".carousel-item").each(function(b) {
            if (q.push(a(this)[0]), P) {
              var c = a('<li class="indicator-item"></li>');
              0 === b && c.addClass("active"), c.click(function(b) {
                b.stopPropagation();
                var c = a(this).index();
                m(c)
              }), M.append(c)
            }
          }), P && O.append(M), x = q.length, F = "transform", ["webkit", "Moz", "O", "ms"].every(function(a) {
            var b = a + "Transform";
            return "undefined" == typeof document.body.style[b] || (F = b, !1)
          }), a(window).off("resize.carousel-" + L).on("resize.carousel-" + L, function() {
            b.fullWidth ? (r = O.find(".carousel-item").first().innerWidth(), s = O.find(".carousel-item").first().innerHeight(), w = 2 * r + b.padding, t = 2 * u * r, C = t) : i()
          }), e(), i(t), a(this).on("carouselNext", function(a, b) {
            void 0 === b && (b = 1), C = w * Math.round(t / w) + w * b, t !== C && (B = C - t, H = Date.now(), requestAnimationFrame(k))
          }), a(this).on("carouselPrev", function(a, b) {
            void 0 === b && (b = 1), C = w * Math.round(t / w) - w * b, t !== C && (B = C - t, H = Date.now(), requestAnimationFrame(k))
          }), void a(this).on("carouselSet", function(a, b) {
            void 0 === b && (b = 0), m(b)
          }))
        })
      },
      next: function(b) {
        a(this).trigger("carouselNext", [b])
      },
      prev: function(b) {
        a(this).trigger("carouselPrev", [b])
      },
      set: function(b) {
        a(this).trigger("carouselSet", [b])
      }
    };
    a.fn.carousel = function(c) {
      return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.carousel") : b.init.apply(this, arguments)
    }
  }(jQuery),
  function(a) {
    var b = {
      init: function(b) {
        return this.each(function() {
          var c = a("#" + a(this).attr("data-activates")),
            d = (a("body"), a(this)),
            e = d.parent(".tap-target-wrapper"),
            f = e.find(".tap-target-wave"),
            g = e.find(".tap-target-origin"),
            h = d.find(".tap-target-content");
          e.length || (e = d.wrap(a('<div class="tap-target-wrapper"></div>')).parent()), h.length || (h = a('<div class="tap-target-content"></div>'), d.append(h)), f.length || (f = a('<div class="tap-target-wave"></div>'), g.length || (g = c.clone(!0, !0), g.addClass("tap-target-origin"), g.removeAttr("id"), g.removeAttr("style"), f.append(g)), e.append(f));
          var i = function() {
              e.is(".open") || (e.addClass("open"), setTimeout(function() {
                g.off("click.tapTarget").on("click.tapTarget", function(a) {
                  j(), g.off("click.tapTarget")
                }), a(document).off("click.tapTarget").on("click.tapTarget", function(b) {
                  j(), a(document).off("click.tapTarget")
                });
                var b = Materialize.throttle(function() {
                  k()
                }, 200);
                a(window).off("resize.tapTarget").on("resize.tapTarget", b)
              }, 0))
            },
            j = function() {
              e.is(".open") && (e.removeClass("open"), g.off("click.tapTarget"), a(document).off("click.tapTarget"), a(window).off("resize.tapTarget"))
            },
            k = function() {
              var b = "fixed" === c.css("position");
              if (!b)
                for (var g = c.parents(), i = 0; i < g.length && !(b = "fixed" == a(g[i]).css("position")); i++);
              var j = c.outerWidth(),
                k = c.outerHeight(),
                l = b ? c.offset().top - a(document).scrollTop() : c.offset().top,
                m = b ? c.offset().left - a(document).scrollLeft() : c.offset().left,
                n = a(window).width(),
                o = a(window).height(),
                p = n / 2,
                q = o / 2,
                r = m <= p,
                s = m > p,
                t = l <= q,
                u = l > q,
                v = m >= .25 * n && m <= .75 * n,
                w = d.outerWidth(),
                x = d.outerHeight(),
                y = l + k / 2 - x / 2,
                z = m + j / 2 - w / 2,
                A = b ? "fixed" : "absolute",
                B = v ? w : w / 2 + j,
                C = x / 2,
                D = t ? x / 2 : 0,
                E = 0,
                F = r && !v ? w / 2 - j : 0,
                G = 0,
                H = j,
                I = u ? "bottom" : "top",
                J = j > k ? 2 * j : 2 * j,
                K = J,
                L = x / 2 - K / 2,
                M = w / 2 - J / 2,
                N = {};
              N.top = t ? y : "", N.right = s ? n - z - w : "", N.bottom = u ? o - y - x : "", N.left = r ? z : "", N.position = A, e.css(N), h.css({
                width: B,
                height: C,
                top: D,
                right: G,
                bottom: E,
                left: F,
                padding: H,
                verticalAlign: I
              }), f.css({
                top: L,
                left: M,
                width: J,
                height: K
              })
            };
          "open" == b && (k(), i()), "close" == b && j()
        })
      },
      open: function() {},
      close: function() {}
    };
    a.fn.tapTarget = function(c) {
      return b[c] || "object" == typeof c ? b.init.apply(this, arguments) : void a.error("Method " + c + " does not exist on jQuery.tap-target")
    }
  }(jQuery);
/* perfect-scrollbar v0.7.0 */
! function t(e, n, r) {
  function o(i, s) {
    if (!n[i]) {
      if (!e[i]) {
        var a = "function" == typeof require && require;
        if (!s && a) return a(i, !0);
        if (l) return l(i, !0);
        var c = new Error("Cannot find module '" + i + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var u = n[i] = {
        exports: {}
      };
      e[i][0].call(u.exports, function(t) {
        var n = e[i][1][t];
        return o(n ? n : t)
      }, u, u.exports, t, e, n, r)
    }
    return n[i].exports
  }
  for (var l = "function" == typeof require && require, i = 0; i < r.length; i++) o(r[i]);
  return o
}({
  1: [function(t, e, n) {
    "use strict";
    var r = t("../main");
    "function" == typeof define && define.amd ? define(r) : (window.PerfectScrollbar = r, "undefined" == typeof window.Ps && (window.Ps = r))
  }, {
    "../main": 7
  }],
  2: [function(t, e, n) {
    "use strict";

    function r(t, e) {
      var n = t.className.split(" ");
      n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
    }

    function o(t, e) {
      var n = t.className.split(" "),
        r = n.indexOf(e);
      r >= 0 && n.splice(r, 1), t.className = n.join(" ")
    }
    n.add = function(t, e) {
      t.classList ? t.classList.add(e) : r(t, e)
    }, n.remove = function(t, e) {
      t.classList ? t.classList.remove(e) : o(t, e)
    }, n.list = function(t) {
      return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
    }
  }, {}],
  3: [function(t, e, n) {
    "use strict";

    function r(t, e) {
      return window.getComputedStyle(t)[e]
    }

    function o(t, e, n) {
      return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
    }

    function l(t, e) {
      for (var n in e) {
        var r = e[n];
        "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r
      }
      return t
    }
    var i = {};
    i.e = function(t, e) {
      var n = document.createElement(t);
      return n.className = e, n
    }, i.appendTo = function(t, e) {
      return e.appendChild(t), t
    }, i.css = function(t, e, n) {
      return "object" == typeof e ? l(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n)
    }, i.matches = function(t, e) {
      return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
    }, i.remove = function(t) {
      "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
    }, i.queryChildren = function(t, e) {
      return Array.prototype.filter.call(t.childNodes, function(t) {
        return i.matches(t, e)
      })
    }, e.exports = i
  }, {}],
  4: [function(t, e, n) {
    "use strict";
    var r = function(t) {
      this.element = t, this.events = {}
    };
    r.prototype.bind = function(t, e) {
      "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
    }, r.prototype.unbind = function(t, e) {
      var n = "undefined" != typeof e;
      this.events[t] = this.events[t].filter(function(r) {
        return !(!n || r === e) || (this.element.removeEventListener(t, r, !1), !1)
      }, this)
    }, r.prototype.unbindAll = function() {
      for (var t in this.events) this.unbind(t)
    };
    var o = function() {
      this.eventElements = []
    };
    o.prototype.eventElement = function(t) {
      var e = this.eventElements.filter(function(e) {
        return e.element === t
      })[0];
      return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e
    }, o.prototype.bind = function(t, e, n) {
      this.eventElement(t).bind(e, n)
    }, o.prototype.unbind = function(t, e, n) {
      this.eventElement(t).unbind(e, n)
    }, o.prototype.unbindAll = function() {
      for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
    }, o.prototype.once = function(t, e, n) {
      var r = this.eventElement(t),
        o = function(t) {
          r.unbind(e, o), n(t)
        };
      r.bind(e, o)
    }, e.exports = o
  }, {}],
  5: [function(t, e, n) {
    "use strict";
    e.exports = function() {
      function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
      }
      return function() {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
      }
    }()
  }, {}],
  6: [function(t, e, n) {
    "use strict";
    var r = t("./class"),
      o = t("./dom"),
      l = n.toInt = function(t) {
        return parseInt(t, 10) || 0
      },
      i = n.clone = function(t) {
        if (t) {
          if (Array.isArray(t)) return t.map(i);
          if ("object" == typeof t) {
            var e = {};
            for (var n in t) e[n] = i(t[n]);
            return e
          }
          return t
        }
        return null
      };
    n.extend = function(t, e) {
      var n = i(t);
      for (var r in e) n[r] = i(e[r]);
      return n
    }, n.isEditable = function(t) {
      return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
    }, n.removePsClasses = function(t) {
      for (var e = r.list(t), n = 0; n < e.length; n++) {
        var o = e[n];
        0 === o.indexOf("ps-") && r.remove(t, o)
      }
    }, n.outerWidth = function(t) {
      return l(o.css(t, "width")) + l(o.css(t, "paddingLeft")) + l(o.css(t, "paddingRight")) + l(o.css(t, "borderLeftWidth")) + l(o.css(t, "borderRightWidth"))
    }, n.startScrolling = function(t, e) {
      r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"))
    }, n.stopScrolling = function(t, e) {
      r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"))
    }, n.env = {
      isWebKit: "WebkitAppearance" in document.documentElement.style,
      supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      supportsIePointer: null !== window.navigator.msMaxTouchPoints
    }
  }, {
    "./class": 2,
    "./dom": 3
  }],
  7: [function(t, e, n) {
    "use strict";
    var r = t("./plugin/destroy"),
      o = t("./plugin/initialize"),
      l = t("./plugin/update");
    e.exports = {
      initialize: o,
      update: l,
      destroy: r
    }
  }, {
    "./plugin/destroy": 9,
    "./plugin/initialize": 17,
    "./plugin/update": 21
  }],
  8: [function(t, e, n) {
    "use strict";
    e.exports = {
      handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipePropagation: !0,
      swipeEasing: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !1,
      wheelSpeed: 1,
      theme: "default"
    }
  }, {}],
  9: [function(t, e, n) {
    "use strict";
    var r = t("../lib/helper"),
      o = t("../lib/dom"),
      l = t("./instances");
    e.exports = function(t) {
      var e = l.get(t);
      e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), r.removePsClasses(t), l.remove(t))
    }
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18
  }],
  10: [function(t, e, n) {
    "use strict";

    function r(t, e) {
      function n(t) {
        return t.getBoundingClientRect()
      }
      var r = function(t) {
        t.stopPropagation()
      };
      e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function(r) {
        var o = r.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
          s = o > e.scrollbarYTop ? 1 : -1;
        i(t, "top", t.scrollTop + s * e.containerHeight), l(t), r.stopPropagation()
      }), e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function(r) {
        var o = r.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
          s = o > e.scrollbarXLeft ? 1 : -1;
        i(t, "left", t.scrollLeft + s * e.containerWidth), l(t), r.stopPropagation()
      })
    }
    var o = t("../instances"),
      l = t("../update-geometry"),
      i = t("../update-scroll");
    e.exports = function(t) {
      var e = o.get(t);
      r(t, e)
    }
  }, {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  11: [function(t, e, n) {
    "use strict";

    function r(t, e) {
      function n(n) {
        var o = r + n * e.railXRatio,
          i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
        o < 0 ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o;
        var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
        c(t, "left", s)
      }
      var r = null,
        o = null,
        s = function(e) {
          n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault()
        },
        u = function() {
          l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
        };
      e.event.bind(e.scrollbarX, "mousedown", function(n) {
        o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
      })
    }

    function o(t, e) {
      function n(n) {
        var o = r + n * e.railYRatio,
          i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
        o < 0 ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o;
        var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
        c(t, "top", s)
      }
      var r = null,
        o = null,
        s = function(e) {
          n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault()
        },
        u = function() {
          l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
        };
      e.event.bind(e.scrollbarY, "mousedown", function(n) {
        o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
      })
    }
    var l = t("../../lib/helper"),
      i = t("../../lib/dom"),
      s = t("../instances"),
      a = t("../update-geometry"),
      c = t("../update-scroll");
    e.exports = function(t) {
      var e = s.get(t);
      r(t, e), o(t, e)
    }
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  12: [function(t, e, n) {
    "use strict";

    function r(t, e) {
      function n(n, r) {
        var o = t.scrollTop;
        if (0 === n) {
          if (!e.scrollbarYActive) return !1;
          if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
        }
        var l = t.scrollLeft;
        if (0 === r) {
          if (!e.scrollbarXActive) return !1;
          if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
        }
        return !0
      }
      var r = !1;
      e.event.bind(t, "mouseenter", function() {
        r = !0
      }), e.event.bind(t, "mouseleave", function() {
        r = !1
      });
      var i = !1;
      e.event.bind(e.ownerDocument, "keydown", function(c) {
        if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
          var u = l.matches(e.scrollbarX, ":focus") || l.matches(e.scrollbarY, ":focus");
          if (r || u) {
            var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
            if (d) {
              if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
              else
                for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
              if (o.isEditable(d)) return
            }
            var p = 0,
              f = 0;
            switch (c.which) {
              case 37:
                p = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;
                break;
              case 38:
                f = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;
                break;
              case 39:
                p = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;
                break;
              case 40:
                f = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;
                break;
              case 33:
                f = 90;
                break;
              case 32:
                f = c.shiftKey ? 90 : -90;
                break;
              case 34:
                f = -90;
                break;
              case 35:
                f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                break;
              case 36:
                f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                break;
              default:
                return
            }
            a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), i = n(p, f), i && c.preventDefault()
          }
        }
      })
    }
    var o = t("../../lib/helper"),
      l = t("../../lib/dom"),
      i = t("../instances"),
      s = t("../update-geometry"),
      a = t("../update-scroll");
    e.exports = function(t) {
      var e = i.get(t);
      r(t, e)
    }
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  13: [function(t, e, n) {
    "use strict";

    function r(t, e) {
      function n(n, r) {
        var o = t.scrollTop;
        if (0 === n) {
          if (!e.scrollbarYActive) return !1;
          if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
        }
        var l = t.scrollLeft;
        if (0 === r) {
          if (!e.scrollbarXActive) return !1;
          if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
        }
        return !0
      }

      function r(t) {
        var e = t.deltaX,
          n = -1 * t.deltaY;
        return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
      }

      function o(e, n) {
        var r = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
        if (r) {
          var o = window.getComputedStyle(r),
            l = [o.overflow, o.overflowX, o.overflowY].join("");
          if (!l.match(/(scroll|auto)/)) return !1;
          var i = r.scrollHeight - r.clientHeight;
          if (i > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === i && n < 0)) return !0;
          var s = r.scrollLeft - r.clientWidth;
          if (s > 0 && !(0 === r.scrollLeft && e < 0 || r.scrollLeft === s && e > 0)) return !0
        }
        return !1
      }

      function s(s) {
        var c = r(s),
          u = c[0],
          d = c[1];
        o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? i(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : i(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : i(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (i(t, "top", t.scrollTop - d * e.settings.wheelSpeed), i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), l(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()))
      }
      var a = !1;
      "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s)
    }
    var o = t("../instances"),
      l = t("../update-geometry"),
      i = t("../update-scroll");
    e.exports = function(t) {
      var e = o.get(t);
      r(t, e)
    }
  }, {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  14: [function(t, e, n) {
    "use strict";

    function r(t, e) {
      e.event.bind(t, "scroll", function() {
        l(t)
      })
    }
    var o = t("../instances"),
      l = t("../update-geometry");
    e.exports = function(t) {
      var e = o.get(t);
      r(t, e)
    }
  }, {
    "../instances": 18,
    "../update-geometry": 19
  }],
  15: [function(t, e, n) {
    "use strict";

    function r(t, e) {
      function n() {
        var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
        return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
      }

      function r() {
        c || (c = setInterval(function() {
          return l.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void i(t)) : void clearInterval(c)
        }, 50))
      }

      function a() {
        c && (clearInterval(c), c = null), o.stopScrolling(t)
      }
      var c = null,
        u = {
          top: 0,
          left: 0
        },
        d = !1;
      e.event.bind(e.ownerDocument, "selectionchange", function() {
        t.contains(n()) ? d = !0 : (d = !1, a())
      }), e.event.bind(window, "mouseup", function() {
        d && (d = !1, a())
      }), e.event.bind(window, "keyup", function() {
        d && (d = !1, a())
      }), e.event.bind(window, "mousemove", function(e) {
        if (d) {
          var n = {
              x: e.pageX,
              y: e.pageY
            },
            l = {
              left: t.offsetLeft,
              right: t.offsetLeft + t.offsetWidth,
              top: t.offsetTop,
              bottom: t.offsetTop + t.offsetHeight
            };
          n.x < l.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > l.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < l.top + 3 ? (l.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > l.bottom - 3 ? (n.y - l.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r()
        }
      })
    }
    var o = t("../../lib/helper"),
      l = t("../instances"),
      i = t("../update-geometry"),
      s = t("../update-scroll");
    e.exports = function(t) {
      var e = l.get(t);
      r(t, e)
    }
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  16: [function(t, e, n) {
    "use strict";

    function r(t, e, n, r) {
      function o(n, r) {
        var o = t.scrollTop,
          l = t.scrollLeft,
          i = Math.abs(n),
          s = Math.abs(r);
        if (s > i) {
          if (r < 0 && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation
        } else if (i > s && (n < 0 && l === e.contentWidth - e.containerWidth || n > 0 && 0 === l)) return !e.settings.swipePropagation;
        return !0
      }

      function a(e, n) {
        s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), i(t)
      }

      function c() {
        w = !0
      }

      function u() {
        w = !1
      }

      function d(t) {
        return t.targetTouches ? t.targetTouches[0] : t
      }

      function p(t) {
        return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
      }

      function f(t) {
        if (p(t)) {
          Y = !0;
          var e = d(t);
          g.pageX = e.pageX, g.pageY = e.pageY, v = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation()
        }
      }

      function h(t) {
        if (!Y && e.settings.swipePropagation && f(t), !w && Y && p(t)) {
          var n = d(t),
            r = {
              pageX: n.pageX,
              pageY: n.pageY
            },
            l = r.pageX - g.pageX,
            i = r.pageY - g.pageY;
          a(l, i), g = r;
          var s = (new Date).getTime(),
            c = s - v;
          c > 0 && (m.x = l / c, m.y = i / c, v = s), o(l, i) && (t.stopPropagation(), t.preventDefault())
        }
      }

      function b() {
        !w && Y && (Y = !1, e.settings.swipeEasing && (clearInterval(y), y = setInterval(function() {
          return l.get(t) && (m.x || m.y) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(y)
        }, 10)))
      }
      var g = {},
        v = 0,
        m = {},
        y = null,
        w = !1,
        Y = !1;
      n ? (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)) : r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b)))
    }
    var o = t("../../lib/helper"),
      l = t("../instances"),
      i = t("../update-geometry"),
      s = t("../update-scroll");
    e.exports = function(t) {
      if (o.env.supportsTouch || o.env.supportsIePointer) {
        var e = l.get(t);
        r(t, e, o.env.supportsTouch, o.env.supportsIePointer)
      }
    }
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  17: [function(t, e, n) {
    "use strict";
    var r = t("../lib/helper"),
      o = t("../lib/class"),
      l = t("./instances"),
      i = t("./update-geometry"),
      s = {
        "click-rail": t("./handler/click-rail"),
        "drag-scrollbar": t("./handler/drag-scrollbar"),
        keyboard: t("./handler/keyboard"),
        wheel: t("./handler/mouse-wheel"),
        touch: t("./handler/touch"),
        selection: t("./handler/selection")
      },
      a = t("./handler/native-scroll");
    e.exports = function(t, e) {
      e = "object" == typeof e ? e : {}, o.add(t, "ps");
      var n = l.add(t);
      n.settings = r.extend(n.settings, e), o.add(t, "ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function(e) {
        s[e](t)
      }), a(t), i(t)
    }
  }, {
    "../lib/class": 2,
    "../lib/helper": 6,
    "./handler/click-rail": 10,
    "./handler/drag-scrollbar": 11,
    "./handler/keyboard": 12,
    "./handler/mouse-wheel": 13,
    "./handler/native-scroll": 14,
    "./handler/selection": 15,
    "./handler/touch": 16,
    "./instances": 18,
    "./update-geometry": 19
  }],
  18: [function(t, e, n) {
    "use strict";

    function r(t) {
      function e() {
        a.add(t, "ps--focus")
      }

      function n() {
        a.remove(t, "ps--focus")
      }
      var r = this;
      r.settings = s.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === u.css(t, "direction"), r.isNegativeScroll = function() {
        var e = t.scrollLeft,
          n = null;
        return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
      }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new d, r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = u.appendTo(u.e("div", "ps__scrollbar-x-rail"), t), r.scrollbarX = u.appendTo(u.e("div", "ps__scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = s.toInt(u.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : s.toInt(u.css(r.scrollbarXRail, "top")), r.railBorderXWidth = s.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(r.scrollbarXRail, "borderRightWidth")), u.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = s.toInt(u.css(r.scrollbarXRail, "marginLeft")) + s.toInt(u.css(r.scrollbarXRail, "marginRight")), u.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = u.appendTo(u.e("div", "ps__scrollbar-y-rail"), t), r.scrollbarY = u.appendTo(u.e("div", "ps__scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = s.toInt(u.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : s.toInt(u.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? s.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = s.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(r.scrollbarYRail, "borderBottomWidth")), u.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = s.toInt(u.css(r.scrollbarYRail, "marginTop")) + s.toInt(u.css(r.scrollbarYRail, "marginBottom")), u.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null
    }

    function o(t) {
      return t.getAttribute("data-ps-id")
    }

    function l(t, e) {
      t.setAttribute("data-ps-id", e)
    }

    function i(t) {
      t.removeAttribute("data-ps-id")
    }
    var s = t("../lib/helper"),
      a = t("../lib/class"),
      c = t("./default-setting"),
      u = t("../lib/dom"),
      d = t("../lib/event-manager"),
      p = t("../lib/guid"),
      f = {};
    n.add = function(t) {
      var e = p();
      return l(t, e), f[e] = new r(t), f[e]
    }, n.remove = function(t) {
      delete f[o(t)], i(t)
    }, n.get = function(t) {
      return f[o(t)]
    }
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/event-manager": 4,
    "../lib/guid": 5,
    "../lib/helper": 6,
    "./default-setting": 8
  }],
  19: [function(t, e, n) {
    "use strict";

    function r(t, e) {
      return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
    }

    function o(t, e) {
      var n = {
        width: e.railXWidth
      };
      e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, s.css(e.scrollbarXRail, n);
      var r = {
        top: t.scrollTop,
        height: e.railYHeight
      };
      e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, s.css(e.scrollbarYRail, r), s.css(e.scrollbarX, {
        left: e.scrollbarXLeft,
        width: e.scrollbarXWidth - e.railBorderXWidth
      }), s.css(e.scrollbarY, {
        top: e.scrollbarYTop,
        height: e.scrollbarYHeight - e.railBorderYWidth
      })
    }
    var l = t("../lib/helper"),
      i = t("../lib/class"),
      s = t("../lib/dom"),
      a = t("./instances"),
      c = t("./update-scroll");
    e.exports = function(t) {
      var e = a.get(t);
      e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
      var n;
      t.contains(e.scrollbarXRail) || (n = s.queryChildren(t, ".ps__scrollbar-x-rail"), n.length > 0 && n.forEach(function(t) {
        s.remove(t)
      }), s.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = s.queryChildren(t, ".ps__scrollbar-y-rail"), n.length > 0 && n.forEach(function(t) {
        s.remove(t)
      }), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, l.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = l.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, l.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = l.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps--active-x") : (i.remove(t, "ps--active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps--active-y") : (i.remove(t, "ps--active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
    }
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-scroll": 20
  }],
  20: [function(t, e, n) {
    "use strict";
    var r = t("./instances"),
      o = function(t) {
        var e = document.createEvent("Event");
        return e.initEvent(t, !0, !0), e
      };
    e.exports = function(t, e, n) {
      if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
      if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
      if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";
      "top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(o("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(o("ps-x-reach-start")));
      var l = r.get(t);
      "top" === e && n >= l.contentHeight - l.containerHeight && (n = l.contentHeight - l.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(o("ps-y-reach-end"))), "left" === e && n >= l.contentWidth - l.containerWidth && (n = l.contentWidth - l.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(o("ps-x-reach-end"))), void 0 === l.lastTop && (l.lastTop = t.scrollTop), void 0 === l.lastLeft && (l.lastLeft = t.scrollLeft), "top" === e && n < l.lastTop && t.dispatchEvent(o("ps-scroll-up")), "top" === e && n > l.lastTop && t.dispatchEvent(o("ps-scroll-down")), "left" === e && n < l.lastLeft && t.dispatchEvent(o("ps-scroll-left")), "left" === e && n > l.lastLeft && t.dispatchEvent(o("ps-scroll-right")), "top" === e && n !== l.lastTop && (t.scrollTop = l.lastTop = n, t.dispatchEvent(o("ps-scroll-y"))), "left" === e && n !== l.lastLeft && (t.scrollLeft = l.lastLeft = n, t.dispatchEvent(o("ps-scroll-x")))
    }
  }, {
    "./instances": 18
  }],
  21: [function(t, e, n) {
    "use strict";
    var r = t("../lib/helper"),
      o = t("../lib/dom"),
      l = t("./instances"),
      i = t("./update-geometry"),
      s = t("./update-scroll");
    e.exports = function(t) {
      var e = l.get(t);
      e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = r.toInt(o.css(e.scrollbarXRail, "marginLeft")) + r.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = r.toInt(o.css(e.scrollbarYRail, "marginTop")) + r.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), i(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
    }
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-geometry": 19,
    "./update-scroll": 20
  }]
}, {}, [1]);
'use strict';

var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var verticalDefaultWidth = '240px';
var verticalIconizedWidth = '50px';

var Forge = function() {
  function Forge(navType, navOpt) {
    _classCallCheck(this, Forge);

    this.config = {
      navType: navType,
      navOpt: navOpt
    };
    // console.log(this.config);
    this.header = $('header'); // Header
    this.main = $('main'); // Main content area
    // TOP NAVIGATION
    this.topNav = this.header.find('div.navbar-fixed'); // Top Navigation
    this.leftNavTop = this.topNav.find('ul.topnav-Menu-ls');
    this.appSearchBtn = this.topNav.find("a.app-search-btn");
    this.appSearchBar = this.topNav.find("form#app-search");
    this.appSearchClose = this.appSearchBar.find('i.app-search-Cls');
    // VERTICLE NAVIGATIONS
    this.verticalNavs = this.header.find('div.vertical-navigations'); // Wrapper of vertical nav
    this.verticalDefaultNav = this.verticalNavs.find('ul#nav-default'); // Default vertical nav
    this.activeNavigationHeader = $(document).find('ul.side-nav li.active');
    // this.verticalIconizedNav=this.verticalNavs.find('ul#nav-iconized'); // Iconized vertical nav

    // OTHER VERTICLE NAVIGATIONS
    this.verticalBars = this.header.find('div.other-verticalSections'); // Wrapper of other vertical nav
    this.notificationSection = this.verticalBars.find("div#sb-notification"); // Notification sidebar
    this.themeSettingSection = this.verticalBars.find("div#themeOptions"); // Theme setting sidebar

    // HORIZONTAL NAVS
    this.horizontalNavs = this.header.find('div.horizontal-navigations'); // Wrapper of Horizontal nav
    this.horizontalNavSelector = this.horizontalNavs.find('div.nav-wrapper ul');
    // BUTTONS
    this.toggleThemesetting = this.themeSettingSection.find('a.toggleThemesetting'); // open/close themeSetting sidebar
    this.rightNotificationBtn = this.topNav.find('a.notification-toggle-open'); // open/close notification sidebar
    this.navHiddenMenuToggle = this.topNav.find('a.toggle-topnav-hidden-menu');
    this.navHiddenMenu = this.topNav.find('.topnav-hidden-menu');
    this.defaultCollapse = this.topNav.find('a#sidebar-default-collapse'); // Mobile icon for collapse : default
    this.iconizedCollapse = this.topNav.find('a#sidebar-iconized-collapse'); // Mobile icon for collapse : iconized
    this.iconizedToggle = this.topNav.find('a.iconizedToggle'); // Toggle vertical : default and iconized
    this.navLogo = this.topNav.find('a.defaultMenu-logo');
  }

  /**
   * [init : Events]
   * @return {[type]} [description]
   */


  _createClass(Forge, [{
    key: 'init',
    value: function init() {
      var _this = this;

      // CALL OF SETTINGS
      this.settings();
      $(window).on('resize', function() {
        return _this.windowResize();
      });
      // DROP DOWN MENU (SIDEBAR ACCORDIAN : EXPANSTION)
      $(".full-top-nav .dropdown-button").on("click", function() {
        _this.themeSettingSection.addClass('inactive').removeClass('active');
        _this.rightNotificationBtn.addClass('menu').removeClass('rightArrow');
        _this.notificationSection.removeClass('open-right-panel');
        return false;
      });
      // SEARCH OPEN
      this.appSearchBtn.on("click", function() {
        _this.openSearch();
        return false;
      });
      // SEARCH CLOSE
      this.appSearchClose.on("click", function() {
        _this.closeSearch();
        return false;
      });
      //  TOGGLING THEME SETTINGS
      this.toggleThemesetting.on("click", function() {
        _this.toggleSettings();
        return false;
      });
      // NOTIFICATION : RIGHT SIDEBAR
      this.rightNotificationBtn.on("click", function(event) {
        _this.toggleRightNotification(event);
        return false;
      });

      /**
       * VERTICAL NAV EVENTS
       */
      this.verticalNavs.find('.collapsible-header').on("click", function(event) {
        _this.verticlNavHeader(event);
      });
      this.verticalNavs.find('.collapsible-header').on("mouseenter", function(event) {
        _this.verticalIconizedNavHead(event);
      });
      $(document).on('mouseleave', '#outter-sidebar', function(event) {
        _this.resetOutter();
        return false;
      });
      $(document).on('click', '#outter-sidebar .collapsible-header', function(event) {
        _this.asideMenuCollapseHandler(event);
      });

      /**
       * TOP NAV MOBILE BUTTON EVENT
       */
      this.topNav.find('a.mob-menu').on("click", function(event) {
        _this.topNavMobHandler(event);
        return false;
      });

      /**
       * HORIZONTAL NAV EVENTs
       */
      this.horizontalNavSelector.find('a.open_hor_sub').on("mouseenter", function(event) {
        return _this.openhorizontalNavSubEnter(event);
      }).on("mouseleave", function(event) {
        return _this.openhorizontalNavSubLeave(event);
      });
      this.horizontalNavSelector.find("div.hor_sub").on("mouseenter", function(event) {
        var $this = $(event.currentTarget);
        $this.show().removeClass('hide');
      }).on("mouseleave", function(event) {
        var $this = $(event.currentTarget);
        $this.hide().addClass('hide');
      });
      /**
       * OTHER NAV/Click events
       */
      this.iconizedToggle.on("click", function(event) {
        _this.iconizedToggleHandler(event);
      });
      this.themeSettingSection.find('input:radio').on("click", function(event) {
        _this.updateSetting(event);
      });
      this.navHiddenMenuToggle.on("click", function(event) {
        _this.navHiddenMenuCallback(event);
      });
    }
  }, {
    key: 'settings',
    value: function settings() {
      var conf = this.config;
      // CHECK LOCAL HAS MENU SETTINGS
      if (localStorage.sess == 1) {
        // console.log('load session vals');
        this.loadStoredSetting(); // Loading store setting based on HTML5 stored data
      }
      // IF User has its setting then load that one
      else {
        // console.log('load user vals');
        this.loadUserConfig(); // Loading user's default/config setting based on HTML5 stored data
      }
    }

    /**
     * [loadUserConfig : User Menu setting]
     * @return {[type]} [description]
     */

  }, {
    key: 'loadUserConfig',
    value: function loadUserConfig() {
      // Loading User config setting
      localStorage.removeItem("sess"); // Removing storedata
      localStorage.navType = this.config.navType; // Getting data from user's config
      localStorage.navOpt = this.config.navOpt; // Getting data from user's config
      this.navSetter({
        navType: this.config.navType, // vertical/horizontal
        navOpt: this.config.navOpt // default/iconized
      });
    }

    /**
     * [loadStoredSetting : Default menu settings]
     * @return {[type]} [description]
     */

  }, {
    key: 'loadStoredSetting',
    value: function loadStoredSetting() {
      // Loading store config setting
      this.navSetter({
        navType: localStorage.navType, // vertical/horizontal
        navOpt: localStorage.navOpt // default/iconized
      });
    }

    /**
     * [openSearch]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */

  }, {
    key: 'openSearch',
    value: function openSearch(e) {
      if (this.appSearchBar.hasClass('active') === false && this.appSearchBar.hasClass('inactive') === false) {
        this.appSearchBar.addClass('active');
      } else {
        this.appSearchBar.toggleClass('active inactive');
        this.appSearchBar.find('input').val("");
      }
    }

    /**
     * [closeSearch close search]
     * @return {[type]} [description]
     */

  }, {
    key: 'closeSearch',
    value: function closeSearch() {
      this.appSearchBar.toggleClass('active inactive');
      this.appSearchBar.find('input').val("");
    }

    /**
     * [toggleSettings : Show setting to choose menu]
     * @return {[type]} [description]
     */

  }, {
    key: 'toggleSettings',
    value: function toggleSettings() {
      var settingSection = this.themeSettingSection;
      if (settingSection.hasClass('active') === false && settingSection.hasClass('inactive') === false) {
        settingSection.addClass('active');
      } else {
        settingSection.toggleClass('active inactive');
      }
    }

    /**
     * [iconizedToggleHandler  : -> toggle nav type handle among iconized/standard default menu]
     */

  }, {
    key: 'iconizedToggleHandler',
    value: function iconizedToggleHandler(event) {
      if (localStorage.navOpt == 'iconized') this.navSetter({
        navOpt: 'default'
      });
      else this.navSetter({
        navOpt: 'iconized'
      });
    }

    /**
     * [toggleRightNotification : Show/hide right Notification]
     */

  }, {
    key: 'toggleRightNotification',
    value: function toggleRightNotification(event) {
      $(event.currentTarget).toggleClass('menu rightArrow');
      this.notificationSection.toggleClass('open-right-panel');
      this.themeSettingSection.addClass('inactive').removeClass('active');
    }

    /**
     * [verticlNavHeader : Vertical Nav Header event]
     */

  }, {
    key: 'verticlNavHeader',
    value: function verticlNavHeader(event) {
      var $this = $(event.currentTarget);
      var myPosition = $this.position();
      var scrollH = $this.prop('scrollHeight');
      if ($this.parents().eq(2).hasClass('icon-menu')) {
        // console.log('Yeah, I know');
        event.preventDefault();
        var collaposibleBody = $this.next('.collapsible-body').html();
        this.iconMenuFullAside($this, collaposibleBody, myPosition, scrollH);
        return false;
      } else {
        if ($this.hasClass('active')) {
          $this.children('i.mdi-navigation-chevron-left').addClass('close-aside').removeClass('open-aside');
        } else {
          $this.children('i.mdi-navigation-chevron-left').addClass('open-aside').removeClass('close-aside');
        }
        $this.closest('li').siblings('li').children('a.collapsible-header').children('i.mdi-navigation-chevron-left').addClass('close-aside').removeClass('open-aside');
      }
      // return false;
    }

    /**
     * [asideMenuCollapseHandler : Is menu open/close icon indicator]
     */

  }, {
    key: 'asideMenuCollapseHandler',
    value: function asideMenuCollapseHandler(event) {
      var $this = $(event.currentTarget);
      if ($this.hasClass('active')) {
        $this.children('i.mdi-navigation-chevron-left').addClass('open-aside').removeClass('close-aside');
      } else {
        $this.children('i.mdi-navigation-chevron-left').addClass('close-aside').removeClass('open-aside');
      }
    }
  }, {
    key: 'resetIconizeWidth',
    value: function resetIconizeWidth(w) {}
    /*this.verticalIconizedNav.css({
    	"width":w
    });
    this.verticalIconizedNav.children('li.menu-item').css({
    	"width":w
    });*/


    /**
     * [resetOutter : reset outter sidebar (Verical Iconized menu)]
     */

  }, {
    key: 'resetOutter',
    value: function resetOutter() {
      $("#outter-sidebar").remove();
    }

    /**
     * [iconMenuFullAside : Icon menu handler]
     * @param  {[type]} obj          [description]
     * @param  {String} content      [description]
     * @param  {Number} myPosition   [description]
     * @param  {Number} scrollheight [description]
     * @return {[type]}              [description]
     */

  }, {
    key: 'iconMenuFullAside',
    value: function iconMenuFullAside(obj) {
      var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var myPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var scrollheight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      this.resetOutter();
      var setTop = myPosition.top;
      // console.log('top:'+myPosition.top, '---bottom:'+myPosition.bottom, "---h:"+scrollheight);
      // console.log("sum"+setTop);
      var htmlContent = this.sideHtmlBuilder(obj, content, setTop);
      this.verticalNavs.append(htmlContent);
      var unorderList = $('#outter-sidebar').children('.aside-content').children('ul');
      if (unorderList.length) {
        unorderList.addClass('sidescollable');
      }
      $('#outter-sidebar .collapsible').collapsible();
      var ele = document.getElementById("outter-sidebar").getElementsByClassName("sidescollable");
      if (ele.length) {
        Ps.initialize(ele[0]);
      }
    }

    /**
     * [sideHtmlBuilder : Vertical Icon menu builder for Outter div]
     * @param  {[type]} obj      [description]
     * @param  {[type]} content  [description]
     * @param  {[type]} leaveTop [description]
     * @return {[type]}          [description]
     */

  }, {
    key: 'sideHtmlBuilder',
    value: function sideHtmlBuilder(obj, content, leaveTop) {
      var redirection = obj.attr('href');
      var arr = ["#", "!#", "#!", "javascript:void(0)"];
      var headlineText = obj.children('span').text();
      var htmlContent = void 0;
      if (content.length <= 0 && $.inArray(redirection, arr) == -1) {
        htmlContent = '\n\t\t\t\t<div class="aside-menu" id="outter-sidebar" style="top:' + (leaveTop + 64) + 'px">\n\t\t\t\t\t<a class="aside-headertext" href="' + redirection + '">' + headlineText + '</a>\n\t\t\t\t</div>\n\t\t\t';
      } else {
        htmlContent = '\n\t\t\t\t<div class="aside-menu" id="outter-sidebar" style="top:' + (leaveTop + 62) + 'px">\n\t\t\t\t\t<span class="aside-headertext">' + headlineText + '</span>\n\t\t\t\t\t<div class=\'aside-content\'>\n\t\t\t\t\t\t' + content + '\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t';
      }
      return htmlContent;
    }
  }, {
    key: 'verticalIconizedNavHead',
    value: function verticalIconizedNavHead(event) {
      if (this.verticalNavs.hasClass('icon-menu')) {
        this.verticlNavHeader(event);
      }
    }
  }, {
    key: 'clickOnIconizedHead',
    value: function clickOnIconizedHead(event) {
      var $this = $(event.currentTarget);
      thisBody = $this.siblings('.iconized-collapsible-body');
      if (thisBody.length && thisBody.hasClass('iconized-body-enter')) {
        // this.verticalIconizedNav.animate({scrollTop:0},1000);
        thisBody.focus();
      }
    }
  }, {
    key: 'verticalIconizedBody',
    value: function verticalIconizedBody(event) {
      var $this = $(event.currentTarget);
      // Materialize.showStaggeredList($this);
      $this.addClass('iconized-body-leave').removeClass('iconized-body-enter');
      this.resetIconizeWidth(50);
    }
  }, {
    key: 'verticalIconizeMouserEnter',
    value: function verticalIconizeMouserEnter(event) {
      var $this = $(event.currentTarget),
        thisHead = $this.children('a'),
        thisBody = $this.children('.iconized-collapsible-body');
      if ($this.hasClass('menu-item') && thisHead.hasClass('iconized-collapsible-head') == false) {
        this.resetIconizeWidth(50);
      }
      thisBody.addClass('iconized-body-enter').removeClass('iconized-body-leave');
    }
  }, {
    key: 'verticalIconizeMouserLeave',
    value: function verticalIconizeMouserLeave(event) {
      var $this = $(event.currentTarget),
        thisHead = $this.children('a'),
        thisBody = $this.children('.iconized-collapsible-body');
      if (!thisBody.hasClass(":hover")) {
        thisBody.addClass('iconized-body-leave').removeClass('iconized-body-enter');
        if ($this.hasClass('menu-item')) {
          this.resetIconizeWidth(50);
        }
      }
    }
  }, {
    key: 'topNavMobHandler',
    value: function topNavMobHandler(event) {
      var $this = $(event.currentTarget),
        pointAttr = $this.attr('data-activates');
      // console.log(pointAttr);
    }
  }, {
    key: 'openhorizontalNavSubEnter',
    value: function openhorizontalNavSubEnter(event) {
      var $this = $(event.currentTarget);
      var hor_sub = $this.next('div.hor_sub');
      hor_sub.show().removeClass('hide');
    }
  }, {
    key: 'openhorizontalNavSubLeave',
    value: function openhorizontalNavSubLeave(event) {
      var $this = $(event.currentTarget);
      var hor_sub = $this.next('div.hor_sub');
      hor_sub.hide();
    }

    /**
     * [navSetter : Navigation setter]
     *  This will help to manage menu type (menu type-verical/horizontal and menu kind- icon/default)
     */

  }, {
    key: 'navSetter',
    value: function navSetter(args) {
      var tnLeftUl = this.iconizedToggle.closest('ul.topnav-Menu-ls');
      var navType = args.navType === undefined ? localStorage.navType : args.navType; /*setting nav-type : Horizontal/vertical*/
      var navOpt = args.navOpt === undefined ? localStorage.navOpt : args.navOpt; /*setting nav-opt : default/iconized*/

      this.themeSettingSection.find('input[type=radio]').prop('checked', false); // Unset default/cached checked radio buttons
      this.subOptions(navType, navOpt);
      this.menuSwitch(navType, navOpt);
    }

    /**
     * [updateSetting : take update from user selected menu settings]
     */

  }, {
    key: 'updateSetting',
    value: function updateSetting(event) {
      var $this = $(event.currentTarget);
      var identfier = $this.attr('data-identfier');
      var selector = $this.attr('data-type');
      localStorage.sess = 1; // Setting sess variable
      switch (identfier) {
        case 'theme_nav':
          this.navSetter({
            navType: selector
          });
          break;
        case 'theme_nav_opts':
          this.navSetter({
            navOpt: selector
          });
          break;
      }
      return false;
    }

    /**
     * [subOptions : Menu kind options manager]
     * @param  {[type]} navType [description]
     * @param  {[type]} navOpt  [description]
     * @return {[type]}         [description]
     */

  }, {
    key: 'subOptions',
    value: function subOptions(navType, navOpt) {
      this.themeSettingSection.find('[data-type="' + navOpt + '"]').prop('checked', true); // Check radio button based on actual data
      if (navType == 'vertical' && navOpt == 'default') {
        // Actived when req for vertical and default
        localStorage.navOpt = 'default';
        // console.log('vertical default');
        // self.verticalDefaultNav.removeClass('hide-on-large-only');
        // LOGIC of  vertical default
        this.defaultCollapse.show().siblings('a.button-collapse').hide(); // collapse button
        this.verticalNavs.removeClass('icon-menu'); // Show Default Sidemenu
        this.resetOutter(); // Reset aside-menu-box
        // the last active menu.
        this.verticalNavs.find('ul.side-nav  > li.active').children('.collapsible-body').show();
        // Transition effect
        this.main.addClass('transition-main-enter').removeClass('transition-main-horizontalAct transition-main-enter2'); // Set main width
        this.navLogo.children('span').addClass('zoomIn').removeClass('zoomOut').css({
          'opacity': 1
        }).end().removeClass('iconizedMenu-act').end();
        this.navLogo.children('.logo-icon').removeClass('iconized');
        this.leftNavTop.addClass('move-right').removeClass('move-left');
        // .css('left',"0px");
        this.iconizedToggle.addClass('leftArrow').removeClass('rightArrow');
      } else if (navType == 'vertical' && navOpt == 'iconized') {
        // Actived when req for vertical and iconized
        localStorage.navOpt = 'iconized';
        // console.log('vertical iconized');
        this.navLogo.children('.logo-icon').addClass('iconized');
        // self.verticalDefaultNav.removeClass('hide-on-large-only');
        // LOGIC of  vertical default
        // this.iconizedCollapse.show().siblings('a.button-collapse').hide(); // collapse button
        this.verticalNavs.addClass('icon-menu'); // ENABLE ICON MENU
        this.verticalNavs.children('ul.side-nav').find('li a.collapsible-header').next('.collapsible-body').hide();
        this.main.addClass('transition-main-enter2').removeClass('transition-main-horizontalAct transition-main-enter'); // Set main width
        this.navLogo.children('span').addClass('zoomOut').removeClass('zoomIn').css({
          'opacity': 0
        }).end().addClass('iconizedMenu-act');
        this.navLogo.children('img').css({
          'padding-left': '0px'
        });
        this.leftNavTop.addClass('move-left').removeClass('move-right');
        // .css('left',this.verticalIconizedWidth);
        this.iconizedToggle.addClass('rightArrow').removeClass('leftArrow');
      }

      if (navType == 'horizontal' && navOpt == 'default') {
        // Actived when req for vertical and default
        localStorage.navOpt = 'default';
        // console.log('horizontal default');
        // self.verticalDefaultNav.removeClass('hide-on-large-only');
        // LOGIC of  vertical default
        this.defaultCollapse.show().siblings('a.button-collapse').hide(); // collapse button
        this.horizontalNavSelector.addClass('default').removeClass('iconized');
      } else if (navType == 'horizontal' && navOpt == 'iconized') {
        // Actived when req for vertical and iconized
        localStorage.navOpt = 'iconized';
        // console.log('horizontal iconized');
        // this.verticalDefaultNav.removeClass('hide-on-large-only');
        // LOGIC of  vertical default
        this.iconizedCollapse.show().siblings('a.button-collapse').hide(); // collapse button
        this.horizontalNavSelector.addClass('iconized').removeClass('default');
      }
    }

    /**
     * [menuSwitch : Menu switcher]
     * @param  {[type]} navType [description]
     * @param  {[type]} navOpt  [description]
     * @return {[type]}         [description]
     */

  }, {
    key: 'menuSwitch',
    value: function menuSwitch(navType, navOpt) {
      // MAIN MENU TYPE SELECTION
      this.themeSettingSection.find('[data-type="' + navType + '"]').prop('checked', true); // Check radio button based on actual data
      var vertImg = this.themeSettingSection.find('img.vert-set-svg');
      var horzImg = this.themeSettingSection.find('img.horz-set-svg');
      switch (navType) {
        case 'horizontal':
          localStorage.navType = navType;
          // console.log('Inside navSetter and switched to horizontal');
          horzImg.show();
          vertImg.hide();

          this.main.addClass('transition-main-horizontalAct').removeClass('transition-main-enter transition-main-enter2');
          this.horizontalNavs.addClass('show').removeClass('hide');
          this.verticalNavs.addClass('hide hide-on-large-only').removeClass('show');
          this.iconizedToggle.addClass('hide-on-large-only');
          this.navLogo.children('span').addClass('zoomIn').removeClass('zoomOut').css({
            'opacity': 1
          }).end().removeClass('iconizedMenu-act').end();
          this.navLogo.children('img').css({
            'padding-left': '30px'
          });
          this.leftNavTop.addClass('move-right').removeClass('move-left');
          // this.subOptions();
          break;
        default:
          localStorage.navType = navType;
          vertImg.show();
          horzImg.hide();
          this.horizontalNavs.addClass('hide').removeClass('show');
          this.verticalNavs.addClass('show').removeClass('hide hide-on-large-only');
          this.iconizedToggle.removeClass('hide-on-large-only');
          // console.log('Inside navSetter and switched to vertical');
          // this.subOptions();
          break;
      }
    }
  }, {
    key: 'navHiddenMenuCallback',
    value: function navHiddenMenuCallback(event) {
      var $this = $(event.currentTarget);
      var isHidden = this.navHiddenMenu.hasClass('hide');
      if (isHidden) {
        this.navHiddenMenu.removeClass('hide').addClass('show');
        return false;
      }
      this.navHiddenMenu.addClass('hide').removeClass('show');
      return false;
    }

    /**
     * [windowResize : Trace on window resize - change menu type for mobile devices]
     * @return {[type]} [description]
     */

  }, {
    key: 'windowResize',
    value: function windowResize() {
      var win_width = $(window).width();
      // this.verticalIconizedNavHeight=this.verticalIconizedNav.prop('scrollHeight');
      if (win_width < 992 && localStorage.navType == 'horizontal') {
        localStorage.tempNav = 1;
        this.navSetter({
          navType: 'vertical'
        });
        // console.log('width is less than 992 and type is horizontal');
      } else if (win_width > 992 && localStorage.tempNav == 1) {
        localStorage.tempNav = 0;
        this.navSetter({
          navType: 'horizontal'
        });
        // console.log('width is greater than 992 and type is horizontal');
      }
    }
  }]);

  return Forge;
}();
$(function() {
  // Plugin initialization
  $('.carousel.carousel-slider').carousel({
    full_width: true
  });
  $('.carousel').carousel();
  $('.slider').slider({
    full_width: true
  });
  $('.parallax').parallax();
  $('.modal').modal();
  $('.scrollspy').scrollSpy();
  $('.button-collapse').sideNav({
    'edge': 'left'
  });
  $('.datepicker').pickadate({
    selectYears: 20
  });
  // $('select.basic-select').not('.disabled').material_select();
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    }
  });

  $('.chips').material_chip();

  $('.chips-initial').material_chip({
    readOnly: true,
    data: [{
      tag: 'Apple',
    }, {
      tag: 'Microsoft',
    }, {
      tag: 'Google',
    }]
  });

  $('.chips-placeholder').material_chip({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
  });

  // Swipeable Tabs Demo Init
  if ($('#tabs-swipe-demo').length) {
    $('#tabs-swipe-demo').tabs({
      'swipeable': true
    });
  }

  // DOM-SubTreeModification
  document.addEventListener("DOMSubtreeModified", function(e) {
    if ($('#sidenav-overlay').length === 0) {
      $('.mob-menu').removeClass('leftArrow').addClass('menu');
    } else {
      $('.mob-menu').removeClass('menu').addClass('leftArrow');
    }
  }, false);

  $("#rsb-tasklist div.tab-notelist").sortable({
    placeholder: "ui-state-highlight"
  });

  $("#rsb-tasklist div.tab-notelist").disableSelection();

  //  MATERIALIZED INIT
  $('select.mat_select').material_select();
  $('.theme-tooltipped').tooltip({
    delay: 50
  });

  // PuSH Pin
  var tocWrapper = $('.toc-wrapper');
  var mainContainer = $('.main-container');
  if (tocWrapper.length && mainContainer.length) {
    tocWrapper.pushpin({
      top: $('.main-container').offset().top
    });
  }

  // ScrollFire
  var options = [{
      selector: '#staggered-test',
      offset: 50,
      callback: function(el) {
        Materialize.toast("This is our ScrollFire Demo!", 1500);
        $("#call-1").velocity({
          backgroundColor: "#333",
          color: "#ef5350"
        }, {
          duration: 500
        });
      }
    },
    {
      selector: '#staggered-test',
      offset: 205,
      callback: function(el) {
        Materialize.toast("Please continue scrolling!", 1500);
        $("#call-2").velocity({
          backgroundColor: "#333",
          color: "#ef5350"
        }, {
          duration: 500
        });
      }
    },
    {
      selector: '#staggered-test',
      offset: 500,
      callback: function(el) {
        Materialize.showStaggeredList($(el));
        $("#call-3").velocity({
          backgroundColor: "#333",
          color: "#ef5350"
        }, {
          duration: 500
        });
      }
    },
    {
      selector: '#image-test',
      offset: 500,
      callback: function(el) {
        Materialize.fadeInImage($(el));
        $("#call-4").velocity({
          backgroundColor: "#333",
          color: "#ef5350"
        }, {
          duration: 500
        });
      }
    }
  ];
  Materialize.scrollFire(options);

  $(window).on('load', () => {
    // Load Tab Elements
    setTimeout(() => {
      $('ul.tabs').tabs();
    }, 300);

    // Application PreLoader & Loader
    // ############# HIDE PRELOADER AND ITS OVERLAY #################
    setTimeout(() => {
      $('.preloader-center').addClass('loaded');
    }, 1000);
    setTimeout(() => {
      $("#preloader").addClass('loaded');
      $("#loader-wrapper").addClass('loaded');
    }, 1010);

    // ############# HIDE PRELOADER AND ITS OVERLAY ENDs #################

    /**
     * Custom scrollbars
     */
    var navdefault = document.getElementById('nav-default');
    if (typeof(navdefault) != 'undefined' && navdefault != null) {
      Ps.initialize(navdefault);
    }

    var psNotificationList = document.getElementById('psNotificationList');
    if (typeof(psNotificationList) != 'undefined' && psNotificationList != null) {
      Ps.initialize(psNotificationList);
    }

    var psTabShortcut = document.getElementById('psTabShortcut');
    if (typeof(psTabShortcut) != 'undefined' && psTabShortcut != null) {
      Ps.initialize(psTabShortcut);
    }
    var psTabNotelist = document.getElementById('psTabNotelist');
    if (typeof(psTabNotelist) != 'undefined' && psTabNotelist != null) {
      Ps.initialize(psTabNotelist);
    }
    var psTopNavMmsgs = document.getElementById('psTopNavMmsgs');
    var psTopNavMmsgsWeb = document.getElementById('psTopNavMmsgsWeb');
    if (typeof(psTopNavMmsgs) != 'undefined' && psTopNavMmsgs != null) {
      Ps.initialize(psTopNavMmsgs);
    }
    if (typeof(psTopNavMmsgsWeb) != 'undefined' && psTopNavMmsgsWeb != null) {
      Ps.initialize(psTopNavMmsgsWeb);
    }
  });

  // DASH CARD HANDLERS
  $('.card-dash .card-reveal .card-title').on("click", () => $(this).closest('.card').removeAttr("style"));

  $('.card-dash .activator').on("click", () => $(this).closest('.card').removeAttr("style"));

  // WINDOW ON RESIZE
  $(window).on('resize', () => $('ul.tabs').tabs());

  // WINDOW ON LOAD
  $(window).on("load", () => {
    let forge = new Forge('vertical', 'default');
    forge.init();
  });
});
