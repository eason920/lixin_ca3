const Bh = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const r of o.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && a(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function a(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
};
Bh();
function Go(e, t) {
  const n = Object.create(null),
    a = e.split(",");
  for (let i = 0; i < a.length; i++) n[a[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const Mh =
    "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",
  Lh = Go(Mh),
  Rh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Dh = Go(Rh);
function qd(e) {
  return !!e || e === "";
}
function an(e) {
  if (ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n],
        i = Be(a) ? $h(a) : an(a);
      if (i) for (const o in i) t[o] = i[o];
    }
    return t;
  } else {
    if (Be(e)) return e;
    if (De(e)) return e;
  }
}
const Nh = /;(?![^(]*\))/g,
  zh = /:(.+)/;
function $h(e) {
  const t = {};
  return (
    e.split(Nh).forEach((n) => {
      if (n) {
        const a = n.split(zh);
        a.length > 1 && (t[a[0].trim()] = a[1].trim());
      }
    }),
    t
  );
}
function mt(e) {
  let t = "";
  if (Be(e)) t = e;
  else if (ne(e))
    for (let n = 0; n < e.length; n++) {
      const a = mt(e[n]);
      a && (t += a + " ");
    }
  else if (De(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Fh(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Be(t) && (e.class = mt(t)), n && (e.style = an(n)), e;
}
function jh(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let a = 0; n && a < e.length; a++) n = kn(e[a], t[a]);
  return n;
}
function kn(e, t) {
  if (e === t) return !0;
  let n = tc(e),
    a = tc(t);
  if (n || a) return n && a ? e.getTime() === t.getTime() : !1;
  if (((n = yi(e)), (a = yi(t)), n || a)) return e === t;
  if (((n = ne(e)), (a = ne(t)), n || a)) return n && a ? jh(e, t) : !1;
  if (((n = De(e)), (a = De(t)), n || a)) {
    if (!n || !a) return !1;
    const i = Object.keys(e).length,
      o = Object.keys(t).length;
    if (i !== o) return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r),
        s = t.hasOwnProperty(r);
      if ((l && !s) || (!l && s) || !kn(e[r], t[r])) return !1;
    }
  }
  return String(e) === String(t);
}
function Wo(e, t) {
  return e.findIndex((n) => kn(n, t));
}
const yt = (e) =>
    Be(e)
      ? e
      : e == null
      ? ""
      : ne(e) || (De(e) && (e.toString === Jd || !de(e.toString)))
      ? JSON.stringify(e, Zd, 2)
      : String(e),
  Zd = (e, t) =>
    t && t.__v_isRef
      ? Zd(e, t.value)
      : Ea(t)
      ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, i]) => ((n[`${a} =>`] = i), n), {}) }
      : ra(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : De(t) && !ne(t) && !eu(t)
      ? String(t)
      : t,
  xe = {},
  Aa = [],
  St = () => {},
  Vh = () => !1,
  Yh = /^on[^a-z]/,
  Ri = (e) => Yh.test(e),
  Ys = (e) => e.startsWith("onUpdate:"),
  Re = Object.assign,
  Hs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Hh = Object.prototype.hasOwnProperty,
  we = (e, t) => Hh.call(e, t),
  ne = Array.isArray,
  Ea = (e) => Di(e) === "[object Map]",
  ra = (e) => Di(e) === "[object Set]",
  tc = (e) => Di(e) === "[object Date]",
  de = (e) => typeof e == "function",
  Be = (e) => typeof e == "string",
  yi = (e) => typeof e == "symbol",
  De = (e) => e !== null && typeof e == "object",
  Us = (e) => De(e) && de(e.then) && de(e.catch),
  Jd = Object.prototype.toString,
  Di = (e) => Jd.call(e),
  Uh = (e) => Di(e).slice(8, -1),
  eu = (e) => Di(e) === "[object Object]",
  Gs = (e) => Be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  ri = Go(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Ko = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Gh = /-(\w)/g,
  gt = Ko((e) => e.replace(Gh, (t, n) => (n ? n.toUpperCase() : ""))),
  Wh = /\B([A-Z])/g,
  Rt = Ko((e) => e.replace(Wh, "-$1").toLowerCase()),
  Ni = Ko((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  si = Ko((e) => (e ? `on${Ni(e)}` : "")),
  Pa = (e, t) => !Object.is(e, t),
  Ta = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  ko = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Sn = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let nc;
const Kh = () =>
  nc ||
  (nc =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof self != "undefined"
      ? self
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : {});
let rt;
class Ws {
  constructor(t = !1) {
    (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        rt &&
        ((this.parent = rt), (this.index = (rt.scopes || (rt.scopes = [])).push(this) - 1));
  }
  run(t) {
    if (this.active) {
      const n = rt;
      try {
        return (rt = this), t();
      } finally {
        rt = n;
      }
    }
  }
  on() {
    rt = this;
  }
  off() {
    rt = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, a;
      for (n = 0, a = this.effects.length; n < a; n++) this.effects[n].stop();
      for (n = 0, a = this.cleanups.length; n < a; n++) this.cleanups[n]();
      if (this.scopes) for (n = 0, a = this.scopes.length; n < a; n++) this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      this.active = !1;
    }
  }
}
function Qh(e) {
  return new Ws(e);
}
function tu(e, t = rt) {
  t && t.active && t.effects.push(e);
}
function Xh() {
  return rt;
}
function qh(e) {
  rt && rt.cleanups.push(e);
}
const Ks = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  nu = (e) => (e.w & Cn) > 0,
  au = (e) => (e.n & Cn) > 0,
  Zh = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Cn;
  },
  Jh = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let a = 0; a < t.length; a++) {
        const i = t[a];
        nu(i) && !au(i) ? i.delete(e) : (t[n++] = i), (i.w &= ~Cn), (i.n &= ~Cn);
      }
      t.length = n;
    }
  },
  ns = new WeakMap();
let ti = 0,
  Cn = 1;
const as = 30;
let Et;
const Un = Symbol(""),
  is = Symbol("");
class zi {
  constructor(t, n = null, a) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      tu(this, a);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Et,
      n = xn;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Et),
        (Et = this),
        (xn = !0),
        (Cn = 1 << ++ti),
        ti <= as ? Zh(this) : ac(this),
        this.fn()
      );
    } finally {
      ti <= as && Jh(this),
        (Cn = 1 << --ti),
        (Et = this.parent),
        (xn = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Et === this
      ? (this.deferStop = !0)
      : this.active && (ac(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function ac(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
function em(e, t) {
  e.effect && (e = e.effect.fn);
  const n = new zi(e);
  t && (Re(n, t), t.scope && tu(n, t.scope)), (!t || !t.lazy) && n.run();
  const a = n.run.bind(n);
  return (a.effect = n), a;
}
function tm(e) {
  e.effect.stop();
}
let xn = !0;
const iu = [];
function sa() {
  iu.push(xn), (xn = !1);
}
function la() {
  const e = iu.pop();
  xn = e === void 0 ? !0 : e;
}
function vt(e, t, n) {
  if (xn && Et) {
    let a = ns.get(e);
    a || ns.set(e, (a = new Map()));
    let i = a.get(n);
    i || a.set(n, (i = Ks())), ou(i);
  }
}
function ou(e, t) {
  let n = !1;
  ti <= as ? au(e) || ((e.n |= Cn), (n = !nu(e))) : (n = !e.has(Et)),
    n && (e.add(Et), Et.deps.push(e));
}
function en(e, t, n, a, i, o) {
  const r = ns.get(e);
  if (!r) return;
  let l = [];
  if (t === "clear") l = [...r.values()];
  else if (n === "length" && ne(e))
    r.forEach((s, c) => {
      (c === "length" || c >= a) && l.push(s);
    });
  else
    switch ((n !== void 0 && l.push(r.get(n)), t)) {
      case "add":
        ne(e) ? Gs(n) && l.push(r.get("length")) : (l.push(r.get(Un)), Ea(e) && l.push(r.get(is)));
        break;
      case "delete":
        ne(e) || (l.push(r.get(Un)), Ea(e) && l.push(r.get(is)));
        break;
      case "set":
        Ea(e) && l.push(r.get(Un));
        break;
    }
  if (l.length === 1) l[0] && os(l[0]);
  else {
    const s = [];
    for (const c of l) c && s.push(...c);
    os(Ks(s));
  }
}
function os(e, t) {
  const n = ne(e) ? e : [...e];
  for (const a of n) a.computed && ic(a);
  for (const a of n) a.computed || ic(a);
}
function ic(e, t) {
  (e !== Et || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const nm = Go("__proto__,__v_isRef,__isVue"),
  ru = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(yi)
  ),
  am = Qo(),
  im = Qo(!1, !0),
  om = Qo(!0),
  rm = Qo(!0, !0),
  oc = sm();
function sm() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const a = ye(this);
        for (let o = 0, r = this.length; o < r; o++) vt(a, "get", o + "");
        const i = a[t](...n);
        return i === -1 || i === !1 ? a[t](...n.map(ye)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        sa();
        const a = ye(this)[t].apply(this, n);
        return la(), a;
      };
    }),
    e
  );
}
function Qo(e = !1, t = !1) {
  return function (a, i, o) {
    if (i === "__v_isReactive") return !e;
    if (i === "__v_isReadonly") return e;
    if (i === "__v_isShallow") return t;
    if (i === "__v_raw" && o === (e ? (t ? pu : fu) : t ? uu : du).get(a)) return a;
    const r = ne(a);
    if (!e && r && we(oc, i)) return Reflect.get(oc, i, o);
    const l = Reflect.get(a, i, o);
    return (yi(i) ? ru.has(i) : nm(i)) || (e || vt(a, "get", i), t)
      ? l
      : $e(l)
      ? r && Gs(i)
        ? l
        : l.value
      : De(l)
      ? e
        ? Xs(l)
        : Ct(l)
      : l;
  };
}
const lm = su(),
  cm = su(!0);
function su(e = !1) {
  return function (n, a, i, o) {
    let r = n[a];
    if (Ia(r) && $e(r) && !$e(i)) return !1;
    if (!e && !Ia(i) && (So(i) || ((i = ye(i)), (r = ye(r))), !ne(n) && $e(r) && !$e(i)))
      return (r.value = i), !0;
    const l = ne(n) && Gs(a) ? Number(a) < n.length : we(n, a),
      s = Reflect.set(n, a, i, o);
    return n === ye(o) && (l ? Pa(i, r) && en(n, "set", a, i) : en(n, "add", a, i)), s;
  };
}
function dm(e, t) {
  const n = we(e, t);
  e[t];
  const a = Reflect.deleteProperty(e, t);
  return a && n && en(e, "delete", t, void 0), a;
}
function um(e, t) {
  const n = Reflect.has(e, t);
  return (!yi(t) || !ru.has(t)) && vt(e, "has", t), n;
}
function fm(e) {
  return vt(e, "iterate", ne(e) ? "length" : Un), Reflect.ownKeys(e);
}
const lu = { get: am, set: lm, deleteProperty: dm, has: um, ownKeys: fm },
  cu = {
    get: om,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  pm = Re({}, lu, { get: im, set: cm }),
  hm = Re({}, cu, { get: rm }),
  Qs = (e) => e,
  Xo = (e) => Reflect.getPrototypeOf(e);
function qi(e, t, n = !1, a = !1) {
  e = e.__v_raw;
  const i = ye(e),
    o = ye(t);
  n || (t !== o && vt(i, "get", t), vt(i, "get", o));
  const { has: r } = Xo(i),
    l = a ? Qs : n ? Js : wi;
  if (r.call(i, t)) return l(e.get(t));
  if (r.call(i, o)) return l(e.get(o));
  e !== i && e.get(t);
}
function Zi(e, t = !1) {
  const n = this.__v_raw,
    a = ye(n),
    i = ye(e);
  return (
    t || (e !== i && vt(a, "has", e), vt(a, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function Ji(e, t = !1) {
  return (e = e.__v_raw), !t && vt(ye(e), "iterate", Un), Reflect.get(e, "size", e);
}
function rc(e) {
  e = ye(e);
  const t = ye(this);
  return Xo(t).has.call(t, e) || (t.add(e), en(t, "add", e, e)), this;
}
function sc(e, t) {
  t = ye(t);
  const n = ye(this),
    { has: a, get: i } = Xo(n);
  let o = a.call(n, e);
  o || ((e = ye(e)), (o = a.call(n, e)));
  const r = i.call(n, e);
  return n.set(e, t), o ? Pa(t, r) && en(n, "set", e, t) : en(n, "add", e, t), this;
}
function lc(e) {
  const t = ye(this),
    { has: n, get: a } = Xo(t);
  let i = n.call(t, e);
  i || ((e = ye(e)), (i = n.call(t, e))), a && a.call(t, e);
  const o = t.delete(e);
  return i && en(t, "delete", e, void 0), o;
}
function cc() {
  const e = ye(this),
    t = e.size !== 0,
    n = e.clear();
  return t && en(e, "clear", void 0, void 0), n;
}
function eo(e, t) {
  return function (a, i) {
    const o = this,
      r = o.__v_raw,
      l = ye(r),
      s = t ? Qs : e ? Js : wi;
    return !e && vt(l, "iterate", Un), r.forEach((c, d) => a.call(i, s(c), s(d), o));
  };
}
function to(e, t, n) {
  return function (...a) {
    const i = this.__v_raw,
      o = ye(i),
      r = Ea(o),
      l = e === "entries" || (e === Symbol.iterator && r),
      s = e === "keys" && r,
      c = i[e](...a),
      d = n ? Qs : t ? Js : wi;
    return (
      !t && vt(o, "iterate", s ? is : Un),
      {
        next() {
          const { value: u, done: f } = c.next();
          return f ? { value: u, done: f } : { value: l ? [d(u[0]), d(u[1])] : d(u), done: f };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function cn(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function mm() {
  const e = {
      get(o) {
        return qi(this, o);
      },
      get size() {
        return Ji(this);
      },
      has: Zi,
      add: rc,
      set: sc,
      delete: lc,
      clear: cc,
      forEach: eo(!1, !1),
    },
    t = {
      get(o) {
        return qi(this, o, !1, !0);
      },
      get size() {
        return Ji(this);
      },
      has: Zi,
      add: rc,
      set: sc,
      delete: lc,
      clear: cc,
      forEach: eo(!1, !0),
    },
    n = {
      get(o) {
        return qi(this, o, !0);
      },
      get size() {
        return Ji(this, !0);
      },
      has(o) {
        return Zi.call(this, o, !0);
      },
      add: cn("add"),
      set: cn("set"),
      delete: cn("delete"),
      clear: cn("clear"),
      forEach: eo(!0, !1),
    },
    a = {
      get(o) {
        return qi(this, o, !0, !0);
      },
      get size() {
        return Ji(this, !0);
      },
      has(o) {
        return Zi.call(this, o, !0);
      },
      add: cn("add"),
      set: cn("set"),
      delete: cn("delete"),
      clear: cn("clear"),
      forEach: eo(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = to(o, !1, !1)),
        (n[o] = to(o, !0, !1)),
        (t[o] = to(o, !1, !0)),
        (a[o] = to(o, !0, !0));
    }),
    [e, n, t, a]
  );
}
const [gm, vm, bm, ym] = mm();
function qo(e, t) {
  const n = t ? (e ? ym : bm) : e ? vm : gm;
  return (a, i, o) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? a
      : Reflect.get(we(n, i) && i in a ? n : a, i, o);
}
const wm = { get: qo(!1, !1) },
  _m = { get: qo(!1, !0) },
  xm = { get: qo(!0, !1) },
  Am = { get: qo(!0, !0) },
  du = new WeakMap(),
  uu = new WeakMap(),
  fu = new WeakMap(),
  pu = new WeakMap();
function Em(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Tm(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Em(Uh(e));
}
function Ct(e) {
  return Ia(e) ? e : Zo(e, !1, lu, wm, du);
}
function hu(e) {
  return Zo(e, !1, pm, _m, uu);
}
function Xs(e) {
  return Zo(e, !0, cu, xm, fu);
}
function km(e) {
  return Zo(e, !0, hm, Am, pu);
}
function Zo(e, t, n, a, i) {
  if (!De(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = i.get(e);
  if (o) return o;
  const r = Tm(e);
  if (r === 0) return e;
  const l = new Proxy(e, r === 2 ? a : n);
  return i.set(e, l), l;
}
function Gn(e) {
  return Ia(e) ? Gn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ia(e) {
  return !!(e && e.__v_isReadonly);
}
function So(e) {
  return !!(e && e.__v_isShallow);
}
function qs(e) {
  return Gn(e) || Ia(e);
}
function ye(e) {
  const t = e && e.__v_raw;
  return t ? ye(t) : e;
}
function Zs(e) {
  return ko(e, "__v_skip", !0), e;
}
const wi = (e) => (De(e) ? Ct(e) : e),
  Js = (e) => (De(e) ? Xs(e) : e);
function el(e) {
  xn && Et && ((e = ye(e)), ou(e.dep || (e.dep = Ks())));
}
function Jo(e, t) {
  (e = ye(e)), e.dep && os(e.dep);
}
function $e(e) {
  return !!(e && e.__v_isRef === !0);
}
function me(e) {
  return gu(e, !1);
}
function mu(e) {
  return gu(e, !0);
}
function gu(e, t) {
  return $e(e) ? e : new Sm(e, t);
}
class Sm {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ye(t)),
      (this._value = n ? t : wi(t));
  }
  get value() {
    return el(this), this._value;
  }
  set value(t) {
    (t = this.__v_isShallow ? t : ye(t)),
      Pa(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = this.__v_isShallow ? t : wi(t)), Jo(this));
  }
}
function Cm(e) {
  Jo(e);
}
function ge(e) {
  return $e(e) ? e.value : e;
}
const Om = {
  get: (e, t, n) => ge(Reflect.get(e, t, n)),
  set: (e, t, n, a) => {
    const i = e[t];
    return $e(i) && !$e(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, a);
  },
};
function tl(e) {
  return Gn(e) ? e : new Proxy(e, Om);
}
class Pm {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: a } = t(
      () => el(this),
      () => Jo(this)
    );
    (this._get = n), (this._set = a);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Im(e) {
  return new Pm(e);
}
function Bm(e) {
  const t = ne(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = vu(e, n);
  return t;
}
class Mm {
  constructor(t, n, a) {
    (this._object = t), (this._key = n), (this._defaultValue = a), (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function vu(e, t, n) {
  const a = e[t];
  return $e(a) ? a : new Mm(e, t, n);
}
class Lm {
  constructor(t, n, a, i) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new zi(t, () => {
        this._dirty || ((this._dirty = !0), Jo(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = a);
  }
  get value() {
    const t = ye(this);
    return (
      el(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function Rm(e, t, n = !1) {
  let a, i;
  const o = de(e);
  return o ? ((a = e), (i = St)) : ((a = e.get), (i = e.set)), new Lm(a, i, o || !i, n);
}
const li = [];
function bu(e, ...t) {
  sa();
  const n = li.length ? li[li.length - 1].component : null,
    a = n && n.appContext.config.warnHandler,
    i = Dm();
  if (a)
    Dt(a, n, 11, [
      e + t.join(""),
      n && n.proxy,
      i.map(({ vnode: o }) => `at <${sf(n, o.type)}>`).join(`
`),
      i,
    ]);
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length &&
      o.push(
        `
`,
        ...Nm(i)
      ),
      console.warn(...o);
  }
  la();
}
function Dm() {
  let e = li[li.length - 1];
  if (!e) return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({ vnode: e, recurseCount: 0 });
    const a = e.component && e.component.parent;
    e = a && a.vnode;
  }
  return t;
}
function Nm(e) {
  const t = [];
  return (
    e.forEach((n, a) => {
      t.push(
        ...(a === 0
          ? []
          : [
              `
`,
            ]),
        ...zm(n)
      );
    }),
    t
  );
}
function zm({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "",
    a = e.component ? e.component.parent == null : !1,
    i = ` at <${sf(e.component, e.type, a)}`,
    o = ">" + n;
  return e.props ? [i, ...$m(e.props), o] : [i + o];
}
function $m(e) {
  const t = [],
    n = Object.keys(e);
  return (
    n.slice(0, 3).forEach((a) => {
      t.push(...yu(a, e[a]));
    }),
    n.length > 3 && t.push(" ..."),
    t
  );
}
function yu(e, t, n) {
  return Be(t)
    ? ((t = JSON.stringify(t)), n ? t : [`${e}=${t}`])
    : typeof t == "number" || typeof t == "boolean" || t == null
    ? n
      ? t
      : [`${e}=${t}`]
    : $e(t)
    ? ((t = yu(e, ye(t.value), !0)), n ? t : [`${e}=Ref<`, t, ">"])
    : de(t)
    ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`]
    : ((t = ye(t)), n ? t : [`${e}=`, t]);
}
function Dt(e, t, n, a) {
  let i;
  try {
    i = a ? e(...a) : e();
  } catch (o) {
    ca(o, t, n);
  }
  return i;
}
function ht(e, t, n, a) {
  if (de(e)) {
    const o = Dt(e, t, n, a);
    return (
      o &&
        Us(o) &&
        o.catch((r) => {
          ca(r, t, n);
        }),
      o
    );
  }
  const i = [];
  for (let o = 0; o < e.length; o++) i.push(ht(e[o], t, n, a));
  return i;
}
function ca(e, t, n, a = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const r = t.proxy,
      l = n;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let d = 0; d < c.length; d++) if (c[d](e, r, l) === !1) return;
      }
      o = o.parent;
    }
    const s = t.appContext.config.errorHandler;
    if (s) {
      Dt(s, null, 10, [e, r, l]);
      return;
    }
  }
  Fm(e, n, i, a);
}
function Fm(e, t, n, a = !0) {
  console.error(e);
}
let Co = !1,
  rs = !1;
const ut = [];
let Qt = 0;
const ci = [];
let ni = null,
  va = 0;
const di = [];
let fn = null,
  ba = 0;
const wu = Promise.resolve();
let nl = null,
  ss = null;
function Lt(e) {
  const t = nl || wu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function jm(e) {
  let t = Qt + 1,
    n = ut.length;
  for (; t < n; ) {
    const a = (t + n) >>> 1;
    _i(ut[a]) < e ? (t = a + 1) : (n = a);
  }
  return t;
}
function al(e) {
  (!ut.length || !ut.includes(e, Co && e.allowRecurse ? Qt + 1 : Qt)) &&
    e !== ss &&
    (e.id == null ? ut.push(e) : ut.splice(jm(e.id), 0, e), _u());
}
function _u() {
  !Co && !rs && ((rs = !0), (nl = wu.then(Au)));
}
function Vm(e) {
  const t = ut.indexOf(e);
  t > Qt && ut.splice(t, 1);
}
function xu(e, t, n, a) {
  ne(e) ? n.push(...e) : (!t || !t.includes(e, e.allowRecurse ? a + 1 : a)) && n.push(e), _u();
}
function Ym(e) {
  xu(e, ni, ci, va);
}
function il(e) {
  xu(e, fn, di, ba);
}
function er(e, t = null) {
  if (ci.length) {
    for (ss = t, ni = [...new Set(ci)], ci.length = 0, va = 0; va < ni.length; va++) ni[va]();
    (ni = null), (va = 0), (ss = null), er(e, t);
  }
}
function Oo(e) {
  if ((er(), di.length)) {
    const t = [...new Set(di)];
    if (((di.length = 0), fn)) {
      fn.push(...t);
      return;
    }
    for (fn = t, fn.sort((n, a) => _i(n) - _i(a)), ba = 0; ba < fn.length; ba++) fn[ba]();
    (fn = null), (ba = 0);
  }
}
const _i = (e) => (e.id == null ? 1 / 0 : e.id);
function Au(e) {
  (rs = !1), (Co = !0), er(e), ut.sort((n, a) => _i(n) - _i(a));
  const t = St;
  try {
    for (Qt = 0; Qt < ut.length; Qt++) {
      const n = ut[Qt];
      n && n.active !== !1 && Dt(n, null, 14);
    }
  } finally {
    (Qt = 0),
      (ut.length = 0),
      Oo(),
      (Co = !1),
      (nl = null),
      (ut.length || ci.length || di.length) && Au(e);
  }
}
let ya,
  no = [];
function Eu(e, t) {
  var n, a;
  (ya = e),
    ya
      ? ((ya.enabled = !0), no.forEach(({ event: i, args: o }) => ya.emit(i, ...o)), (no = []))
      : typeof window != "undefined" &&
        window.HTMLElement &&
        !(
          !(
            (a = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null ||
            a === void 0
          ) && a.includes("jsdom")
        )
      ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
          Eu(o, t);
        }),
        setTimeout(() => {
          ya || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (no = []));
        }, 3e3))
      : (no = []);
}
function Hm(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || xe;
  let i = n;
  const o = t.startsWith("update:"),
    r = o && t.slice(7);
  if (r && r in a) {
    const d = `${r === "modelValue" ? "model" : r}Modifiers`,
      { number: u, trim: f } = a[d] || xe;
    f && (i = n.map((v) => v.trim())), u && (i = n.map(Sn));
  }
  let l,
    s = a[(l = si(t))] || a[(l = si(gt(t)))];
  !s && o && (s = a[(l = si(Rt(t)))]), s && ht(s, e, 6, i);
  const c = a[l + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), ht(c, e, 6, i);
  }
}
function Tu(e, t, n = !1) {
  const a = t.emitsCache,
    i = a.get(e);
  if (i !== void 0) return i;
  const o = e.emits;
  let r = {},
    l = !1;
  if (!de(e)) {
    const s = (c) => {
      const d = Tu(c, t, !0);
      d && ((l = !0), Re(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(s),
      e.extends && s(e.extends),
      e.mixins && e.mixins.forEach(s);
  }
  return !o && !l
    ? (a.set(e, null), null)
    : (ne(o) ? o.forEach((s) => (r[s] = null)) : Re(r, o), a.set(e, r), r);
}
function tr(e, t) {
  return !e || !Ri(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      we(e, t[0].toLowerCase() + t.slice(1)) || we(e, Rt(t)) || we(e, t));
}
let We = null,
  nr = null;
function xi(e) {
  const t = We;
  return (We = e), (nr = (e && e.type.__scopeId) || null), t;
}
function on(e) {
  nr = e;
}
function rn() {
  nr = null;
}
const Um = (e) => Ke;
function Ke(e, t = We, n) {
  if (!t || e._n) return e;
  const a = (...i) => {
    a._d && hs(-1);
    const o = xi(t),
      r = e(...i);
    return xi(o), a._d && hs(1), r;
  };
  return (a._n = !0), (a._c = !0), (a._d = !0), a;
}
function bo(e) {
  const {
    type: t,
    vnode: n,
    proxy: a,
    withProxy: i,
    props: o,
    propsOptions: [r],
    slots: l,
    attrs: s,
    emit: c,
    render: d,
    renderCache: u,
    data: f,
    setupState: v,
    ctx: m,
    inheritAttrs: p,
  } = e;
  let g, b;
  const h = xi(e);
  try {
    if (n.shapeFlag & 4) {
      const x = i || a;
      (g = lt(d.call(x, x, u, o, v, f, m))), (b = s);
    } else {
      const x = t;
      (g = lt(x.length > 1 ? x(o, { attrs: s, slots: l, emit: c }) : x(o, null))),
        (b = t.props ? s : Wm(s));
    }
  } catch (x) {
    (pi.length = 0), ca(x, e, 1), (g = oe(Qe));
  }
  let w = g;
  if (b && p !== !1) {
    const x = Object.keys(b),
      { shapeFlag: S } = w;
    x.length && S & 7 && (r && x.some(Ys) && (b = Km(b, r)), (w = $t(w, b)));
  }
  return (
    n.dirs && ((w = $t(w)), (w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (w.transition = n.transition),
    (g = w),
    xi(h),
    g
  );
}
function Gm(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    if (On(a)) {
      if (a.type !== Qe || a.children === "v-if") {
        if (t) return;
        t = a;
      }
    } else return;
  }
  return t;
}
const Wm = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Ri(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Km = (e, t) => {
    const n = {};
    for (const a in e) (!Ys(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
    return n;
  };
function Qm(e, t, n) {
  const { props: a, children: i, component: o } = e,
    { props: r, children: l, patchFlag: s } = t,
    c = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && s >= 0) {
    if (s & 1024) return !0;
    if (s & 16) return a ? dc(a, r, c) : !!r;
    if (s & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (r[f] !== a[f] && !tr(c, f)) return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : a === r ? !1 : a ? (r ? dc(a, r, c) : !0) : !!r;
  return !1;
}
function dc(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < a.length; i++) {
    const o = a[i];
    if (t[o] !== e[o] && !tr(n, o)) return !0;
  }
  return !1;
}
function ol({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const ku = (e) => e.__isSuspense,
  Xm = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, a, i, o, r, l, s, c) {
      e == null ? Zm(t, n, a, i, o, r, l, s, c) : Jm(e, t, n, a, i, r, l, s, c);
    },
    hydrate: e0,
    create: rl,
    normalize: t0,
  },
  qm = Xm;
function Ai(e, t) {
  const n = e.props && e.props[t];
  de(n) && n();
}
function Zm(e, t, n, a, i, o, r, l, s) {
  const {
      p: c,
      o: { createElement: d },
    } = s,
    u = d("div"),
    f = (e.suspense = rl(e, i, a, t, u, n, o, r, l, s));
  c(null, (f.pendingBranch = e.ssContent), u, null, a, f, o, r),
    f.deps > 0
      ? (Ai(e, "onPending"),
        Ai(e, "onFallback"),
        c(null, e.ssFallback, t, n, a, null, o, r),
        ka(f, e.ssFallback))
      : f.resolve();
}
function Jm(e, t, n, a, i, o, r, l, { p: s, um: c, o: { createElement: d } }) {
  const u = (t.suspense = e.suspense);
  (u.vnode = t), (t.el = e.el);
  const f = t.ssContent,
    v = t.ssFallback,
    { activeBranch: m, pendingBranch: p, isInFallback: g, isHydrating: b } = u;
  if (p)
    (u.pendingBranch = f),
      Mt(f, p)
        ? (s(p, f, u.hiddenContainer, null, i, u, o, r, l),
          u.deps <= 0 ? u.resolve() : g && (s(m, v, n, a, i, null, o, r, l), ka(u, v)))
        : (u.pendingId++,
          b ? ((u.isHydrating = !1), (u.activeBranch = p)) : c(p, i, u),
          (u.deps = 0),
          (u.effects.length = 0),
          (u.hiddenContainer = d("div")),
          g
            ? (s(null, f, u.hiddenContainer, null, i, u, o, r, l),
              u.deps <= 0 ? u.resolve() : (s(m, v, n, a, i, null, o, r, l), ka(u, v)))
            : m && Mt(f, m)
            ? (s(m, f, n, a, i, u, o, r, l), u.resolve(!0))
            : (s(null, f, u.hiddenContainer, null, i, u, o, r, l), u.deps <= 0 && u.resolve()));
  else if (m && Mt(f, m)) s(m, f, n, a, i, u, o, r, l), ka(u, f);
  else if (
    (Ai(t, "onPending"),
    (u.pendingBranch = f),
    u.pendingId++,
    s(null, f, u.hiddenContainer, null, i, u, o, r, l),
    u.deps <= 0)
  )
    u.resolve();
  else {
    const { timeout: h, pendingId: w } = u;
    h > 0
      ? setTimeout(() => {
          u.pendingId === w && u.fallback(v);
        }, h)
      : h === 0 && u.fallback(v);
  }
}
function rl(e, t, n, a, i, o, r, l, s, c, d = !1) {
  const {
      p: u,
      m: f,
      um: v,
      n: m,
      o: { parentNode: p, remove: g },
    } = c,
    b = Sn(e.props && e.props.timeout),
    h = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: r,
      container: a,
      hiddenContainer: i,
      anchor: o,
      deps: 0,
      pendingId: 0,
      timeout: typeof b == "number" ? b : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: d,
      isUnmounted: !1,
      effects: [],
      resolve(w = !1) {
        const {
          vnode: x,
          activeBranch: S,
          pendingBranch: _,
          pendingId: C,
          effects: T,
          parentComponent: L,
          container: P,
        } = h;
        if (h.isHydrating) h.isHydrating = !1;
        else if (!w) {
          const R = S && _.transition && _.transition.mode === "out-in";
          R &&
            (S.transition.afterLeave = () => {
              C === h.pendingId && f(_, P, O, 0);
            });
          let { anchor: O } = h;
          S && ((O = m(S)), v(S, L, h, !0)), R || f(_, P, O, 0);
        }
        ka(h, _), (h.pendingBranch = null), (h.isInFallback = !1);
        let k = h.parent,
          A = !1;
        for (; k; ) {
          if (k.pendingBranch) {
            k.effects.push(...T), (A = !0);
            break;
          }
          k = k.parent;
        }
        A || il(T), (h.effects = []), Ai(x, "onResolve");
      },
      fallback(w) {
        if (!h.pendingBranch) return;
        const { vnode: x, activeBranch: S, parentComponent: _, container: C, isSVG: T } = h;
        Ai(x, "onFallback");
        const L = m(S),
          P = () => {
            !h.isInFallback || (u(null, w, C, L, _, null, T, l, s), ka(h, w));
          },
          k = w.transition && w.transition.mode === "out-in";
        k && (S.transition.afterLeave = P), (h.isInFallback = !0), v(S, _, null, !0), k || P();
      },
      move(w, x, S) {
        h.activeBranch && f(h.activeBranch, w, x, S), (h.container = w);
      },
      next() {
        return h.activeBranch && m(h.activeBranch);
      },
      registerDep(w, x) {
        const S = !!h.pendingBranch;
        S && h.deps++;
        const _ = w.vnode.el;
        w.asyncDep
          .catch((C) => {
            ca(C, w, 0);
          })
          .then((C) => {
            if (w.isUnmounted || h.isUnmounted || h.pendingId !== w.suspenseId) return;
            w.asyncResolved = !0;
            const { vnode: T } = w;
            ms(w, C, !1), _ && (T.el = _);
            const L = !_ && w.subTree.el;
            x(w, T, p(_ || w.subTree.el), _ ? null : m(w.subTree), h, r, s),
              L && g(L),
              ol(w, T.el),
              S && --h.deps === 0 && h.resolve();
          });
      },
      unmount(w, x) {
        (h.isUnmounted = !0),
          h.activeBranch && v(h.activeBranch, n, w, x),
          h.pendingBranch && v(h.pendingBranch, n, w, x);
      },
    };
  return h;
}
function e0(e, t, n, a, i, o, r, l, s) {
  const c = (t.suspense = rl(
      t,
      a,
      n,
      e.parentNode,
      document.createElement("div"),
      null,
      i,
      o,
      r,
      l,
      !0
    )),
    d = s(e, (c.pendingBranch = t.ssContent), n, c, o, r);
  return c.deps === 0 && c.resolve(), d;
}
function t0(e) {
  const { shapeFlag: t, children: n } = e,
    a = t & 32;
  (e.ssContent = uc(a ? n.default : n)), (e.ssFallback = a ? uc(n.fallback) : oe(Qe));
}
function uc(e) {
  let t;
  if (de(e)) {
    const n = Jn && e._c;
    n && ((e._d = !1), K()), (e = e()), n && ((e._d = !0), (t = tt), qu());
  }
  return (
    ne(e) && (e = Gm(e)),
    (e = lt(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function Su(e, t) {
  t && t.pendingBranch ? (ne(e) ? t.effects.push(...e) : t.effects.push(e)) : il(e);
}
function ka(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: a } = e,
    i = (n.el = t.el);
  a && a.subTree === n && ((a.vnode.el = i), ol(a, i));
}
function An(e, t) {
  if (ze) {
    let n = ze.provides;
    const a = ze.parent && ze.parent.provides;
    a === n && (n = ze.provides = Object.create(a)), (n[e] = t);
  }
}
function Fe(e, t, n = !1) {
  const a = ze || We;
  if (a) {
    const i =
      a.parent == null ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && de(t) ? t.call(a.proxy) : t;
  }
}
function n0(e, t) {
  return $i(e, null, t);
}
function Cu(e, t) {
  return $i(e, null, { flush: "post" });
}
function a0(e, t) {
  return $i(e, null, { flush: "sync" });
}
const fc = {};
function Nt(e, t, n) {
  return $i(e, t, n);
}
function $i(e, t, { immediate: n, deep: a, flush: i, onTrack: o, onTrigger: r } = xe) {
  const l = ze;
  let s,
    c = !1,
    d = !1;
  if (
    ($e(e)
      ? ((s = () => e.value), (c = So(e)))
      : Gn(e)
      ? ((s = () => e), (a = !0))
      : ne(e)
      ? ((d = !0),
        (c = e.some((b) => Gn(b) || So(b))),
        (s = () =>
          e.map((b) => {
            if ($e(b)) return b.value;
            if (Gn(b)) return Vn(b);
            if (de(b)) return Dt(b, l, 2);
          })))
      : de(e)
      ? t
        ? (s = () => Dt(e, l, 2))
        : (s = () => {
            if (!(l && l.isUnmounted)) return u && u(), ht(e, l, 3, [f]);
          })
      : (s = St),
    t && a)
  ) {
    const b = s;
    s = () => Vn(b());
  }
  let u,
    f = (b) => {
      u = g.onStop = () => {
        Dt(b, l, 4);
      };
    };
  if (Ra) return (f = St), t ? n && ht(t, l, 3, [s(), d ? [] : void 0, f]) : s(), St;
  let v = d ? [] : fc;
  const m = () => {
    if (!!g.active)
      if (t) {
        const b = g.run();
        (a || c || (d ? b.some((h, w) => Pa(h, v[w])) : Pa(b, v))) &&
          (u && u(), ht(t, l, 3, [b, v === fc ? void 0 : v, f]), (v = b));
      } else g.run();
  };
  m.allowRecurse = !!t;
  let p;
  i === "sync" ? (p = m) : i === "post" ? (p = () => Ve(m, l && l.suspense)) : (p = () => Ym(m));
  const g = new zi(s, p);
  return (
    t ? (n ? m() : (v = g.run())) : i === "post" ? Ve(g.run.bind(g), l && l.suspense) : g.run(),
    () => {
      g.stop(), l && l.scope && Hs(l.scope.effects, g);
    }
  );
}
function i0(e, t, n) {
  const a = this.proxy,
    i = Be(e) ? (e.includes(".") ? Ou(a, e) : () => a[e]) : e.bind(a, a);
  let o;
  de(t) ? (o = t) : ((o = t.handler), (n = t));
  const r = ze;
  Pn(this);
  const l = $i(i, o.bind(a), n);
  return r ? Pn(r) : Tn(), l;
}
function Ou(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let i = 0; i < n.length && a; i++) a = a[n[i]];
    return a;
  };
}
function Vn(e, t) {
  if (!De(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), $e(e))) Vn(e.value, t);
  else if (ne(e)) for (let n = 0; n < e.length; n++) Vn(e[n], t);
  else if (ra(e) || Ea(e))
    e.forEach((n) => {
      Vn(n, t);
    });
  else if (eu(e)) for (const n in e) Vn(e[n], t);
  return e;
}
function sl() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    at(() => {
      e.isMounted = !0;
    }),
    ua(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const bt = [Function, Array],
  o0 = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: bt,
      onEnter: bt,
      onAfterEnter: bt,
      onEnterCancelled: bt,
      onBeforeLeave: bt,
      onLeave: bt,
      onAfterLeave: bt,
      onLeaveCancelled: bt,
      onBeforeAppear: bt,
      onAppear: bt,
      onAfterAppear: bt,
      onAppearCancelled: bt,
    },
    setup(e, { slots: t }) {
      const n = Ge(),
        a = sl();
      let i;
      return () => {
        const o = t.default && ar(t.default(), !0);
        if (!o || !o.length) return;
        let r = o[0];
        if (o.length > 1) {
          for (const p of o)
            if (p.type !== Qe) {
              r = p;
              break;
            }
        }
        const l = ye(e),
          { mode: s } = l;
        if (a.isLeaving) return Pr(r);
        const c = pc(r);
        if (!c) return Pr(r);
        const d = Ba(c, l, a, n);
        Zn(c, d);
        const u = n.subTree,
          f = u && pc(u);
        let v = !1;
        const { getTransitionKey: m } = c.type;
        if (m) {
          const p = m();
          i === void 0 ? (i = p) : p !== i && ((i = p), (v = !0));
        }
        if (f && f.type !== Qe && (!Mt(c, f) || v)) {
          const p = Ba(f, l, a, n);
          if ((Zn(f, p), s === "out-in"))
            return (
              (a.isLeaving = !0),
              (p.afterLeave = () => {
                (a.isLeaving = !1), n.update();
              }),
              Pr(r)
            );
          s === "in-out" &&
            c.type !== Qe &&
            (p.delayLeave = (g, b, h) => {
              const w = Pu(a, f);
              (w[String(f.key)] = f),
                (g._leaveCb = () => {
                  b(), (g._leaveCb = void 0), delete d.delayedLeave;
                }),
                (d.delayedLeave = h);
            });
        }
        return r;
      };
    },
  },
  ll = o0;
function Pu(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || ((a = Object.create(null)), n.set(t.type, a)), a;
}
function Ba(e, t, n, a) {
  const {
      appear: i,
      mode: o,
      persisted: r = !1,
      onBeforeEnter: l,
      onEnter: s,
      onAfterEnter: c,
      onEnterCancelled: d,
      onBeforeLeave: u,
      onLeave: f,
      onAfterLeave: v,
      onLeaveCancelled: m,
      onBeforeAppear: p,
      onAppear: g,
      onAfterAppear: b,
      onAppearCancelled: h,
    } = t,
    w = String(e.key),
    x = Pu(n, e),
    S = (T, L) => {
      T && ht(T, a, 9, L);
    },
    _ = (T, L) => {
      const P = L[1];
      S(T, L), ne(T) ? T.every((k) => k.length <= 1) && P() : T.length <= 1 && P();
    },
    C = {
      mode: o,
      persisted: r,
      beforeEnter(T) {
        let L = l;
        if (!n.isMounted)
          if (i) L = p || l;
          else return;
        T._leaveCb && T._leaveCb(!0);
        const P = x[w];
        P && Mt(e, P) && P.el._leaveCb && P.el._leaveCb(), S(L, [T]);
      },
      enter(T) {
        let L = s,
          P = c,
          k = d;
        if (!n.isMounted)
          if (i) (L = g || s), (P = b || c), (k = h || d);
          else return;
        let A = !1;
        const R = (T._enterCb = (O) => {
          A ||
            ((A = !0),
            O ? S(k, [T]) : S(P, [T]),
            C.delayedLeave && C.delayedLeave(),
            (T._enterCb = void 0));
        });
        L ? _(L, [T, R]) : R();
      },
      leave(T, L) {
        const P = String(e.key);
        if ((T._enterCb && T._enterCb(!0), n.isUnmounting)) return L();
        S(u, [T]);
        let k = !1;
        const A = (T._leaveCb = (R) => {
          k ||
            ((k = !0),
            L(),
            R ? S(m, [T]) : S(v, [T]),
            (T._leaveCb = void 0),
            x[P] === e && delete x[P]);
        });
        (x[P] = e), f ? _(f, [T, A]) : A();
      },
      clone(T) {
        return Ba(T, t, n, a);
      },
    };
  return C;
}
function Pr(e) {
  if (Fi(e)) return (e = $t(e)), (e.children = null), e;
}
function pc(e) {
  return Fi(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Zn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Zn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function ar(e, t = !1, n) {
  let a = [],
    i = 0;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : o);
    r.type === ke
      ? (r.patchFlag & 128 && i++, (a = a.concat(ar(r.children, t, l))))
      : (t || r.type !== Qe) && a.push(l != null ? $t(r, { key: l }) : r);
  }
  if (i > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
  return a;
}
function Ue(e) {
  return de(e) ? { setup: e, name: e.name } : e;
}
const Wn = (e) => !!e.type.__asyncLoader;
function r0(e) {
  de(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: a,
    delay: i = 200,
    timeout: o,
    suspensible: r = !0,
    onError: l,
  } = e;
  let s = null,
    c,
    d = 0;
  const u = () => (d++, (s = null), f()),
    f = () => {
      let v;
      return (
        s ||
        (v = s =
          t()
            .catch((m) => {
              if (((m = m instanceof Error ? m : new Error(String(m))), l))
                return new Promise((p, g) => {
                  l(
                    m,
                    () => p(u()),
                    () => g(m),
                    d + 1
                  );
                });
              throw m;
            })
            .then((m) =>
              v !== s && s
                ? s
                : (m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default),
                  (c = m),
                  m)
            ))
      );
    };
  return Ue({
    name: "AsyncComponentWrapper",
    __asyncLoader: f,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const v = ze;
      if (c) return () => Ir(c, v);
      const m = (h) => {
        (s = null), ca(h, v, 13, !a);
      };
      if ((r && v.suspense) || Ra)
        return f()
          .then((h) => () => Ir(h, v))
          .catch((h) => (m(h), () => (a ? oe(a, { error: h }) : null)));
      const p = me(!1),
        g = me(),
        b = me(!!i);
      return (
        i &&
          setTimeout(() => {
            b.value = !1;
          }, i),
        o != null &&
          setTimeout(() => {
            if (!p.value && !g.value) {
              const h = new Error(`Async component timed out after ${o}ms.`);
              m(h), (g.value = h);
            }
          }, o),
        f()
          .then(() => {
            (p.value = !0), v.parent && Fi(v.parent.vnode) && al(v.parent.update);
          })
          .catch((h) => {
            m(h), (g.value = h);
          }),
        () => {
          if (p.value && c) return Ir(c, v);
          if (g.value && a) return oe(a, { error: g.value });
          if (n && !b.value) return oe(n);
        }
      );
    },
  });
}
function Ir(e, { vnode: { ref: t, props: n, children: a, shapeFlag: i }, parent: o }) {
  const r = oe(e, n, a);
  return (r.ref = t), r;
}
const Fi = (e) => e.type.__isKeepAlive,
  s0 = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Ge(),
        a = n.ctx;
      if (!a.renderer)
        return () => {
          const h = t.default && t.default();
          return h && h.length === 1 ? h[0] : h;
        };
      const i = new Map(),
        o = new Set();
      let r = null;
      const l = n.suspense,
        {
          renderer: {
            p: s,
            m: c,
            um: d,
            o: { createElement: u },
          },
        } = a,
        f = u("div");
      (a.activate = (h, w, x, S, _) => {
        const C = h.component;
        c(h, w, x, 0, l),
          s(C.vnode, h, w, x, C, l, S, h.slotScopeIds, _),
          Ve(() => {
            (C.isDeactivated = !1), C.a && Ta(C.a);
            const T = h.props && h.props.onVnodeMounted;
            T && et(T, C.parent, h);
          }, l);
      }),
        (a.deactivate = (h) => {
          const w = h.component;
          c(h, f, null, 1, l),
            Ve(() => {
              w.da && Ta(w.da);
              const x = h.props && h.props.onVnodeUnmounted;
              x && et(x, w.parent, h), (w.isDeactivated = !0);
            }, l);
        });
      function v(h) {
        Br(h), d(h, n, l, !0);
      }
      function m(h) {
        i.forEach((w, x) => {
          const S = Lo(w.type);
          S && (!h || !h(S)) && p(x);
        });
      }
      function p(h) {
        const w = i.get(h);
        !r || w.type !== r.type ? v(w) : r && Br(r), i.delete(h), o.delete(h);
      }
      Nt(
        () => [e.include, e.exclude],
        ([h, w]) => {
          h && m((x) => ai(h, x)), w && m((x) => !ai(w, x));
        },
        { flush: "post", deep: !0 }
      );
      let g = null;
      const b = () => {
        g != null && i.set(g, Mr(n.subTree));
      };
      return (
        at(b),
        da(b),
        ua(() => {
          i.forEach((h) => {
            const { subTree: w, suspense: x } = n,
              S = Mr(w);
            if (h.type === S.type) {
              Br(S);
              const _ = S.component.da;
              _ && Ve(_, x);
              return;
            }
            v(h);
          });
        }),
        () => {
          if (((g = null), !t.default)) return null;
          const h = t.default(),
            w = h[0];
          if (h.length > 1) return (r = null), h;
          if (!On(w) || (!(w.shapeFlag & 4) && !(w.shapeFlag & 128))) return (r = null), w;
          let x = Mr(w);
          const S = x.type,
            _ = Lo(Wn(x) ? x.type.__asyncResolved || {} : S),
            { include: C, exclude: T, max: L } = e;
          if ((C && (!_ || !ai(C, _))) || (T && _ && ai(T, _))) return (r = x), w;
          const P = x.key == null ? S : x.key,
            k = i.get(P);
          return (
            x.el && ((x = $t(x)), w.shapeFlag & 128 && (w.ssContent = x)),
            (g = P),
            k
              ? ((x.el = k.el),
                (x.component = k.component),
                x.transition && Zn(x, x.transition),
                (x.shapeFlag |= 512),
                o.delete(P),
                o.add(P))
              : (o.add(P), L && o.size > parseInt(L, 10) && p(o.values().next().value)),
            (x.shapeFlag |= 256),
            (r = x),
            ku(w.type) ? w : x
          );
        }
      );
    },
  },
  l0 = s0;
function ai(e, t) {
  return ne(e)
    ? e.some((n) => ai(n, t))
    : Be(e)
    ? e.split(",").includes(t)
    : e.test
    ? e.test(t)
    : !1;
}
function cl(e, t) {
  Iu(e, "a", t);
}
function dl(e, t) {
  Iu(e, "da", t);
}
function Iu(e, t, n = ze) {
  const a =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((ir(t, a, n), n)) {
    let i = n.parent;
    for (; i && i.parent; ) Fi(i.parent.vnode) && c0(a, t, n, i), (i = i.parent);
  }
}
function c0(e, t, n, a) {
  const i = ir(t, e, a, !0);
  fa(() => {
    Hs(a[t], i);
  }, n);
}
function Br(e) {
  let t = e.shapeFlag;
  t & 256 && (t -= 256), t & 512 && (t -= 512), (e.shapeFlag = t);
}
function Mr(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function ir(e, t, n = ze, a = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return;
          sa(), Pn(n);
          const l = ht(t, n, e, r);
          return Tn(), la(), l;
        });
    return a ? i.unshift(o) : i.push(o), o;
  }
}
const sn =
    (e) =>
    (t, n = ze) =>
      (!Ra || e === "sp") && ir(e, t, n),
  Bu = sn("bm"),
  at = sn("m"),
  ul = sn("bu"),
  da = sn("u"),
  ua = sn("bum"),
  fa = sn("um"),
  Mu = sn("sp"),
  Lu = sn("rtg"),
  Ru = sn("rtc");
function Du(e, t = ze) {
  ir("ec", e, t);
}
function ui(e, t) {
  const n = We;
  if (n === null) return e;
  const a = rr(n) || n.proxy,
    i = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, l, s, c = xe] = t[o];
    de(r) && (r = { mounted: r, updated: r }),
      r.deep && Vn(l),
      i.push({ dir: r, instance: a, value: l, oldValue: void 0, arg: s, modifiers: c });
  }
  return e;
}
function Bt(e, t, n, a) {
  const i = e.dirs,
    o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let s = l.dir[a];
    s && (sa(), ht(s, n, 8, [e.el, l, e, t]), la());
  }
}
const fl = "components",
  d0 = "directives";
function En(e, t) {
  return pl(fl, e, !0, t) || e;
}
const Nu = Symbol();
function ji(e) {
  return Be(e) ? pl(fl, e, !1) || e : e || Nu;
}
function u0(e) {
  return pl(d0, e);
}
function pl(e, t, n = !0, a = !1) {
  const i = We || ze;
  if (i) {
    const o = i.type;
    if (e === fl) {
      const l = Lo(o, !1);
      if (l && (l === t || l === gt(t) || l === Ni(gt(t)))) return o;
    }
    const r = hc(i[e] || o[e], t) || hc(i.appContext[e], t);
    return !r && a ? o : r;
  }
}
function hc(e, t) {
  return e && (e[t] || e[gt(t)] || e[Ni(gt(t))]);
}
function Ei(e, t, n, a) {
  let i;
  const o = n && n[a];
  if (ne(e) || Be(e)) {
    i = new Array(e.length);
    for (let r = 0, l = e.length; r < l; r++) i[r] = t(e[r], r, void 0, o && o[r]);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let r = 0; r < e; r++) i[r] = t(r + 1, r, void 0, o && o[r]);
  } else if (De(e))
    if (e[Symbol.iterator]) i = Array.from(e, (r, l) => t(r, l, void 0, o && o[l]));
    else {
      const r = Object.keys(e);
      i = new Array(r.length);
      for (let l = 0, s = r.length; l < s; l++) {
        const c = r[l];
        i[l] = t(e[c], c, l, o && o[l]);
      }
    }
  else i = [];
  return n && (n[a] = i), i;
}
function f0(e, t) {
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (ne(a)) for (let i = 0; i < a.length; i++) e[a[i].name] = a[i].fn;
    else a && (e[a.name] = a.fn);
  }
  return e;
}
function Ma(e, t, n = {}, a, i) {
  if (We.isCE || (We.parent && Wn(We.parent) && We.parent.isCE))
    return oe("slot", t === "default" ? null : { name: t }, a && a());
  let o = e[t];
  o && o._c && (o._d = !1), K();
  const r = o && zu(o(n)),
    l = Ye(ke, { key: n.key || `_${t}` }, r || (a ? a() : []), r && e._ === 1 ? 64 : -2);
  return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function zu(e) {
  return e.some((t) => (On(t) ? !(t.type === Qe || (t.type === ke && !zu(t.children))) : !0))
    ? e
    : null;
}
function $u(e) {
  const t = {};
  for (const n in e) t[si(n)] = e[n];
  return t;
}
const ls = (e) => (e ? (nf(e) ? rr(e) || e.proxy : ls(e.parent)) : null),
  Po = Re(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ls(e.parent),
    $root: (e) => ls(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ju(e),
    $forceUpdate: (e) => e.f || (e.f = () => al(e.update)),
    $nextTick: (e) => e.n || (e.n = Lt.bind(e.proxy)),
    $watch: (e) => i0.bind(e),
  }),
  cs = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: a,
        data: i,
        props: o,
        accessCache: r,
        type: l,
        appContext: s,
      } = e;
      let c;
      if (t[0] !== "$") {
        const v = r[t];
        if (v !== void 0)
          switch (v) {
            case 1:
              return a[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (a !== xe && we(a, t)) return (r[t] = 1), a[t];
          if (i !== xe && we(i, t)) return (r[t] = 2), i[t];
          if ((c = e.propsOptions[0]) && we(c, t)) return (r[t] = 3), o[t];
          if (n !== xe && we(n, t)) return (r[t] = 4), n[t];
          ds && (r[t] = 0);
        }
      }
      const d = Po[t];
      let u, f;
      if (d) return t === "$attrs" && vt(e, "get", t), d(e);
      if ((u = l.__cssModules) && (u = u[t])) return u;
      if (n !== xe && we(n, t)) return (r[t] = 4), n[t];
      if (((f = s.config.globalProperties), we(f, t))) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: a, setupState: i, ctx: o } = e;
      return i !== xe && we(i, t)
        ? ((i[t] = n), !0)
        : a !== xe && we(a, t)
        ? ((a[t] = n), !0)
        : we(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: i, propsOptions: o } },
      r
    ) {
      let l;
      return (
        !!n[r] ||
        (e !== xe && we(e, r)) ||
        (t !== xe && we(t, r)) ||
        ((l = o[0]) && we(l, r)) ||
        we(a, r) ||
        we(Po, r) ||
        we(i.config.globalProperties, r)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : we(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  },
  p0 = Re({}, cs, {
    get(e, t) {
      if (t !== Symbol.unscopables) return cs.get(e, t, e);
    },
    has(e, t) {
      return t[0] !== "_" && !Lh(t);
    },
  });
let ds = !0;
function h0(e) {
  const t = ju(e),
    n = e.proxy,
    a = e.ctx;
  (ds = !1), t.beforeCreate && mc(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: o,
    methods: r,
    watch: l,
    provide: s,
    inject: c,
    created: d,
    beforeMount: u,
    mounted: f,
    beforeUpdate: v,
    updated: m,
    activated: p,
    deactivated: g,
    beforeDestroy: b,
    beforeUnmount: h,
    destroyed: w,
    unmounted: x,
    render: S,
    renderTracked: _,
    renderTriggered: C,
    errorCaptured: T,
    serverPrefetch: L,
    expose: P,
    inheritAttrs: k,
    components: A,
    directives: R,
    filters: O,
  } = t;
  if ((c && m0(c, a, null, e.appContext.config.unwrapInjectedRef), r))
    for (const ee in r) {
      const ae = r[ee];
      de(ae) && (a[ee] = ae.bind(n));
    }
  if (i) {
    const ee = i.call(n, n);
    De(ee) && (e.data = Ct(ee));
  }
  if (((ds = !0), o))
    for (const ee in o) {
      const ae = o[ee],
        he = de(ae) ? ae.bind(n, n) : de(ae.get) ? ae.get.bind(n, n) : St,
        j = !de(ae) && de(ae.set) ? ae.set.bind(n) : St,
        J = Oe({ get: he, set: j });
      Object.defineProperty(a, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => J.value,
        set: (D) => (J.value = D),
      });
    }
  if (l) for (const ee in l) Fu(l[ee], a, n, ee);
  if (s) {
    const ee = de(s) ? s.call(n) : s;
    Reflect.ownKeys(ee).forEach((ae) => {
      An(ae, ee[ae]);
    });
  }
  d && mc(d, e, "c");
  function $(ee, ae) {
    ne(ae) ? ae.forEach((he) => ee(he.bind(n))) : ae && ee(ae.bind(n));
  }
  if (
    ($(Bu, u),
    $(at, f),
    $(ul, v),
    $(da, m),
    $(cl, p),
    $(dl, g),
    $(Du, T),
    $(Ru, _),
    $(Lu, C),
    $(ua, h),
    $(fa, x),
    $(Mu, L),
    ne(P))
  )
    if (P.length) {
      const ee = e.exposed || (e.exposed = {});
      P.forEach((ae) => {
        Object.defineProperty(ee, ae, { get: () => n[ae], set: (he) => (n[ae] = he) });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === St && (e.render = S),
    k != null && (e.inheritAttrs = k),
    A && (e.components = A),
    R && (e.directives = R);
}
function m0(e, t, n = St, a = !1) {
  ne(e) && (e = us(e));
  for (const i in e) {
    const o = e[i];
    let r;
    De(o)
      ? "default" in o
        ? (r = Fe(o.from || i, o.default, !0))
        : (r = Fe(o.from || i))
      : (r = Fe(o)),
      $e(r) && a
        ? Object.defineProperty(t, i, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (l) => (r.value = l),
          })
        : (t[i] = r);
  }
}
function mc(e, t, n) {
  ht(ne(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Fu(e, t, n, a) {
  const i = a.includes(".") ? Ou(n, a) : () => n[a];
  if (Be(e)) {
    const o = t[e];
    de(o) && Nt(i, o);
  } else if (de(e)) Nt(i, e.bind(n));
  else if (De(e))
    if (ne(e)) e.forEach((o) => Fu(o, t, n, a));
    else {
      const o = de(e.handler) ? e.handler.bind(n) : t[e.handler];
      de(o) && Nt(i, o, e);
    }
}
function ju(e) {
  const t = e.type,
    { mixins: n, extends: a } = t,
    {
      mixins: i,
      optionsCache: o,
      config: { optionMergeStrategies: r },
    } = e.appContext,
    l = o.get(t);
  let s;
  return (
    l
      ? (s = l)
      : !i.length && !n && !a
      ? (s = t)
      : ((s = {}), i.length && i.forEach((c) => Io(s, c, r, !0)), Io(s, t, r)),
    o.set(t, s),
    s
  );
}
function Io(e, t, n, a = !1) {
  const { mixins: i, extends: o } = t;
  o && Io(e, o, n, !0), i && i.forEach((r) => Io(e, r, n, !0));
  for (const r in t)
    if (!(a && r === "expose")) {
      const l = g0[r] || (n && n[r]);
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const g0 = {
  data: gc,
  props: Fn,
  emits: Fn,
  methods: Fn,
  computed: Fn,
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  components: Fn,
  directives: Fn,
  watch: b0,
  provide: gc,
  inject: v0,
};
function gc(e, t) {
  return t
    ? e
      ? function () {
          return Re(de(e) ? e.call(this, this) : e, de(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function v0(e, t) {
  return Fn(us(e), us(t));
}
function us(e) {
  if (ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Fn(e, t) {
  return e ? Re(Re(Object.create(null), e), t) : t;
}
function b0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Re(Object.create(null), e);
  for (const a in t) n[a] = Xe(e[a], t[a]);
  return n;
}
function y0(e, t, n, a = !1) {
  const i = {},
    o = {};
  ko(o, or, 1), (e.propsDefaults = Object.create(null)), Vu(e, t, i, o);
  for (const r in e.propsOptions[0]) r in i || (i[r] = void 0);
  n ? (e.props = a ? i : hu(i)) : e.type.props ? (e.props = i) : (e.props = o), (e.attrs = o);
}
function w0(e, t, n, a) {
  const {
      props: i,
      attrs: o,
      vnode: { patchFlag: r },
    } = e,
    l = ye(i),
    [s] = e.propsOptions;
  let c = !1;
  if ((a || r > 0) && !(r & 16)) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let f = d[u];
        if (tr(e.emitsOptions, f)) continue;
        const v = t[f];
        if (s)
          if (we(o, f)) v !== o[f] && ((o[f] = v), (c = !0));
          else {
            const m = gt(f);
            i[m] = fs(s, l, m, v, e, !1);
          }
        else v !== o[f] && ((o[f] = v), (c = !0));
      }
    }
  } else {
    Vu(e, t, i, o) && (c = !0);
    let d;
    for (const u in l)
      (!t || (!we(t, u) && ((d = Rt(u)) === u || !we(t, d)))) &&
        (s
          ? n && (n[u] !== void 0 || n[d] !== void 0) && (i[u] = fs(s, l, u, void 0, e, !0))
          : delete i[u]);
    if (o !== l) for (const u in o) (!t || (!we(t, u) && !0)) && (delete o[u], (c = !0));
  }
  c && en(e, "set", "$attrs");
}
function Vu(e, t, n, a) {
  const [i, o] = e.propsOptions;
  let r = !1,
    l;
  if (t)
    for (let s in t) {
      if (ri(s)) continue;
      const c = t[s];
      let d;
      i && we(i, (d = gt(s)))
        ? !o || !o.includes(d)
          ? (n[d] = c)
          : ((l || (l = {}))[d] = c)
        : tr(e.emitsOptions, s) || ((!(s in a) || c !== a[s]) && ((a[s] = c), (r = !0)));
    }
  if (o) {
    const s = ye(n),
      c = l || xe;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      n[u] = fs(i, s, u, c[u], e, !we(c, u));
    }
  }
  return r;
}
function fs(e, t, n, a, i, o) {
  const r = e[n];
  if (r != null) {
    const l = we(r, "default");
    if (l && a === void 0) {
      const s = r.default;
      if (r.type !== Function && de(s)) {
        const { propsDefaults: c } = i;
        n in c ? (a = c[n]) : (Pn(i), (a = c[n] = s.call(null, t)), Tn());
      } else a = s;
    }
    r[0] && (o && !l ? (a = !1) : r[1] && (a === "" || a === Rt(n)) && (a = !0));
  }
  return a;
}
function Yu(e, t, n = !1) {
  const a = t.propsCache,
    i = a.get(e);
  if (i) return i;
  const o = e.props,
    r = {},
    l = [];
  let s = !1;
  if (!de(e)) {
    const d = (u) => {
      s = !0;
      const [f, v] = Yu(u, t, !0);
      Re(r, f), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!o && !s) return a.set(e, Aa), Aa;
  if (ne(o))
    for (let d = 0; d < o.length; d++) {
      const u = gt(o[d]);
      vc(u) && (r[u] = xe);
    }
  else if (o)
    for (const d in o) {
      const u = gt(d);
      if (vc(u)) {
        const f = o[d],
          v = (r[u] = ne(f) || de(f) ? { type: f } : f);
        if (v) {
          const m = wc(Boolean, v.type),
            p = wc(String, v.type);
          (v[0] = m > -1), (v[1] = p < 0 || m < p), (m > -1 || we(v, "default")) && l.push(u);
        }
      }
    }
  const c = [r, l];
  return a.set(e, c), c;
}
function vc(e) {
  return e[0] !== "$";
}
function bc(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function yc(e, t) {
  return bc(e) === bc(t);
}
function wc(e, t) {
  return ne(t) ? t.findIndex((n) => yc(n, e)) : de(t) && yc(t, e) ? 0 : -1;
}
const Hu = (e) => e[0] === "_" || e === "$stable",
  hl = (e) => (ne(e) ? e.map(lt) : [lt(e)]),
  _0 = (e, t, n) => {
    if (t._n) return t;
    const a = Ke((...i) => hl(t(...i)), n);
    return (a._c = !1), a;
  },
  Uu = (e, t, n) => {
    const a = e._ctx;
    for (const i in e) {
      if (Hu(i)) continue;
      const o = e[i];
      if (de(o)) t[i] = _0(i, o, a);
      else if (o != null) {
        const r = hl(o);
        t[i] = () => r;
      }
    }
  },
  Gu = (e, t) => {
    const n = hl(t);
    e.slots.default = () => n;
  },
  x0 = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = ye(t)), ko(t, "_", n)) : Uu(t, (e.slots = {}));
    } else (e.slots = {}), t && Gu(e, t);
    ko(e.slots, or, 1);
  },
  A0 = (e, t, n) => {
    const { vnode: a, slots: i } = e;
    let o = !0,
      r = xe;
    if (a.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : (Re(i, t), !n && l === 1 && delete i._)
        : ((o = !t.$stable), Uu(t, i)),
        (r = t);
    } else t && (Gu(e, t), (r = { default: 1 }));
    if (o) for (const l in i) !Hu(l) && !(l in r) && delete i[l];
  };
function Wu() {
  return {
    app: null,
    config: {
      isNativeTag: Vh,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let E0 = 0;
function T0(e, t) {
  return function (a, i = null) {
    de(a) || (a = Object.assign({}, a)), i != null && !De(i) && (i = null);
    const o = Wu(),
      r = new Set();
    let l = !1;
    const s = (o.app = {
      _uid: E0++,
      _component: a,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: uf,
      get config() {
        return o.config;
      },
      set config(c) {},
      use(c, ...d) {
        return (
          r.has(c) ||
            (c && de(c.install) ? (r.add(c), c.install(s, ...d)) : de(c) && (r.add(c), c(s, ...d))),
          s
        );
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), s;
      },
      component(c, d) {
        return d ? ((o.components[c] = d), s) : o.components[c];
      },
      directive(c, d) {
        return d ? ((o.directives[c] = d), s) : o.directives[c];
      },
      mount(c, d, u) {
        if (!l) {
          const f = oe(a, i);
          return (
            (f.appContext = o),
            d && t ? t(f, c) : e(f, c, u),
            (l = !0),
            (s._container = c),
            (c.__vue_app__ = s),
            rr(f.component) || f.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, s._container), delete s._container.__vue_app__);
      },
      provide(c, d) {
        return (o.provides[c] = d), s;
      },
    });
    return s;
  };
}
function Bo(e, t, n, a, i = !1) {
  if (ne(e)) {
    e.forEach((f, v) => Bo(f, t && (ne(t) ? t[v] : t), n, a, i));
    return;
  }
  if (Wn(a) && !i) return;
  const o = a.shapeFlag & 4 ? rr(a.component) || a.component.proxy : a.el,
    r = i ? null : o,
    { i: l, r: s } = e,
    c = t && t.r,
    d = l.refs === xe ? (l.refs = {}) : l.refs,
    u = l.setupState;
  if (
    (c != null &&
      c !== s &&
      (Be(c) ? ((d[c] = null), we(u, c) && (u[c] = null)) : $e(c) && (c.value = null)),
    de(s))
  )
    Dt(s, l, 12, [r, d]);
  else {
    const f = Be(s),
      v = $e(s);
    if (f || v) {
      const m = () => {
        if (e.f) {
          const p = f ? d[s] : s.value;
          i
            ? ne(p) && Hs(p, o)
            : ne(p)
            ? p.includes(o) || p.push(o)
            : f
            ? ((d[s] = [o]), we(u, s) && (u[s] = d[s]))
            : ((s.value = [o]), e.k && (d[e.k] = s.value));
        } else f ? ((d[s] = r), we(u, s) && (u[s] = r)) : v && ((s.value = r), e.k && (d[e.k] = r));
      };
      r ? ((m.id = -1), Ve(m, n)) : m();
    }
  }
}
let dn = !1;
const ao = (e) => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
  io = (e) => e.nodeType === 8;
function k0(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: a,
        createText: i,
        nextSibling: o,
        parentNode: r,
        remove: l,
        insert: s,
        createComment: c,
      },
    } = e,
    d = (b, h) => {
      if (!h.hasChildNodes()) {
        n(null, b, h), Oo(), (h._vnode = b);
        return;
      }
      (dn = !1),
        u(h.firstChild, b, null, null, null),
        Oo(),
        (h._vnode = b),
        dn && console.error("Hydration completed but contains mismatches.");
    },
    u = (b, h, w, x, S, _ = !1) => {
      const C = io(b) && b.data === "[",
        T = () => p(b, h, w, x, S, C),
        { type: L, ref: P, shapeFlag: k, patchFlag: A } = h,
        R = b.nodeType;
      (h.el = b), A === -2 && ((_ = !1), (h.dynamicChildren = null));
      let O = null;
      switch (L) {
        case La:
          R !== 3
            ? h.children === ""
              ? (s((h.el = i("")), r(b), b), (O = b))
              : (O = T())
            : (b.data !== h.children && ((dn = !0), (b.data = h.children)), (O = o(b)));
          break;
        case Qe:
          R !== 8 || C ? (O = T()) : (O = o(b));
          break;
        case Kn:
          if (R !== 1 && R !== 3) O = T();
          else {
            O = b;
            const Q = !h.children.length;
            for (let $ = 0; $ < h.staticCount; $++)
              Q && (h.children += O.nodeType === 1 ? O.outerHTML : O.data),
                $ === h.staticCount - 1 && (h.anchor = O),
                (O = o(O));
            return O;
          }
          break;
        case ke:
          C ? (O = m(b, h, w, x, S, _)) : (O = T());
          break;
        default:
          if (k & 1)
            R !== 1 || h.type.toLowerCase() !== b.tagName.toLowerCase()
              ? (O = T())
              : (O = f(b, h, w, x, S, _));
          else if (k & 6) {
            h.slotScopeIds = S;
            const Q = r(b);
            if (
              (t(h, Q, null, w, x, ao(Q), _),
              (O = C ? g(b) : o(b)),
              O && io(O) && O.data === "teleport end" && (O = o(O)),
              Wn(h))
            ) {
              let $;
              C
                ? (($ = oe(ke)), ($.anchor = O ? O.previousSibling : Q.lastChild))
                : ($ = b.nodeType === 3 ? Le("") : oe("div")),
                ($.el = b),
                (h.component.subTree = $);
            }
          } else
            k & 64
              ? R !== 8
                ? (O = T())
                : (O = h.type.hydrate(b, h, w, x, S, _, e, v))
              : k & 128 && (O = h.type.hydrate(b, h, w, x, ao(r(b)), S, _, e, u));
      }
      return P != null && Bo(P, null, x, h), O;
    },
    f = (b, h, w, x, S, _) => {
      _ = _ || !!h.dynamicChildren;
      const { type: C, props: T, patchFlag: L, shapeFlag: P, dirs: k } = h,
        A = (C === "input" && k) || C === "option";
      if (A || L !== -1) {
        if ((k && Bt(h, null, w, "created"), T))
          if (A || !_ || L & 48)
            for (const O in T)
              ((A && O.endsWith("value")) || (Ri(O) && !ri(O))) &&
                a(b, O, null, T[O], !1, void 0, w);
          else T.onClick && a(b, "onClick", null, T.onClick, !1, void 0, w);
        let R;
        if (
          ((R = T && T.onVnodeBeforeMount) && et(R, w, h),
          k && Bt(h, null, w, "beforeMount"),
          ((R = T && T.onVnodeMounted) || k) &&
            Su(() => {
              R && et(R, w, h), k && Bt(h, null, w, "mounted");
            }, x),
          P & 16 && !(T && (T.innerHTML || T.textContent)))
        ) {
          let O = v(b.firstChild, h, b, w, x, S, _);
          for (; O; ) {
            dn = !0;
            const Q = O;
            (O = O.nextSibling), l(Q);
          }
        } else P & 8 && b.textContent !== h.children && ((dn = !0), (b.textContent = h.children));
      }
      return b.nextSibling;
    },
    v = (b, h, w, x, S, _, C) => {
      C = C || !!h.dynamicChildren;
      const T = h.children,
        L = T.length;
      for (let P = 0; P < L; P++) {
        const k = C ? T[P] : (T[P] = lt(T[P]));
        if (b) b = u(b, k, x, S, _, C);
        else {
          if (k.type === La && !k.children) continue;
          (dn = !0), n(null, k, w, null, x, S, ao(w), _);
        }
      }
      return b;
    },
    m = (b, h, w, x, S, _) => {
      const { slotScopeIds: C } = h;
      C && (S = S ? S.concat(C) : C);
      const T = r(b),
        L = v(o(b), h, T, w, x, S, _);
      return L && io(L) && L.data === "]"
        ? o((h.anchor = L))
        : ((dn = !0), s((h.anchor = c("]")), T, L), L);
    },
    p = (b, h, w, x, S, _) => {
      if (((dn = !0), (h.el = null), _)) {
        const L = g(b);
        for (;;) {
          const P = o(b);
          if (P && P !== L) l(P);
          else break;
        }
      }
      const C = o(b),
        T = r(b);
      return l(b), n(null, h, T, C, w, x, ao(T), S), C;
    },
    g = (b) => {
      let h = 0;
      for (; b; )
        if (((b = o(b)), b && io(b) && (b.data === "[" && h++, b.data === "]"))) {
          if (h === 0) return o(b);
          h--;
        }
      return b;
    };
  return [d, u];
}
const Ve = Su;
function Ku(e) {
  return Xu(e);
}
function Qu(e) {
  return Xu(e, k0);
}
function Xu(e, t) {
  const n = Kh();
  n.__VUE__ = !0;
  const {
      insert: a,
      remove: i,
      patchProp: o,
      createElement: r,
      createText: l,
      createComment: s,
      setText: c,
      setElementText: d,
      parentNode: u,
      nextSibling: f,
      setScopeId: v = St,
      cloneNode: m,
      insertStaticContent: p,
    } = e,
    g = (y, E, I, N = null, z = null, U = null, X = !1, H = null, G = !!E.dynamicChildren) => {
      if (y === E) return;
      y && !Mt(y, E) && ((N = W(y)), q(y, z, U, !0), (y = null)),
        E.patchFlag === -2 && ((G = !1), (E.dynamicChildren = null));
      const { type: V, ref: se, shapeFlag: te } = E;
      switch (V) {
        case La:
          b(y, E, I, N);
          break;
        case Qe:
          h(y, E, I, N);
          break;
        case Kn:
          y == null && w(E, I, N, X);
          break;
        case ke:
          R(y, E, I, N, z, U, X, H, G);
          break;
        default:
          te & 1
            ? _(y, E, I, N, z, U, X, H, G)
            : te & 6
            ? O(y, E, I, N, z, U, X, H, G)
            : (te & 64 || te & 128) && V.process(y, E, I, N, z, U, X, H, G, be);
      }
      se != null && z && Bo(se, y && y.ref, U, E || y, !E);
    },
    b = (y, E, I, N) => {
      if (y == null) a((E.el = l(E.children)), I, N);
      else {
        const z = (E.el = y.el);
        E.children !== y.children && c(z, E.children);
      }
    },
    h = (y, E, I, N) => {
      y == null ? a((E.el = s(E.children || "")), I, N) : (E.el = y.el);
    },
    w = (y, E, I, N) => {
      [y.el, y.anchor] = p(y.children, E, I, N, y.el, y.anchor);
    },
    x = ({ el: y, anchor: E }, I, N) => {
      let z;
      for (; y && y !== E; ) (z = f(y)), a(y, I, N), (y = z);
      a(E, I, N);
    },
    S = ({ el: y, anchor: E }) => {
      let I;
      for (; y && y !== E; ) (I = f(y)), i(y), (y = I);
      i(E);
    },
    _ = (y, E, I, N, z, U, X, H, G) => {
      (X = X || E.type === "svg"), y == null ? C(E, I, N, z, U, X, H, G) : P(y, E, z, U, X, H, G);
    },
    C = (y, E, I, N, z, U, X, H) => {
      let G, V;
      const { type: se, props: te, shapeFlag: le, transition: ue, patchFlag: _e, dirs: Ae } = y;
      if (y.el && m !== void 0 && _e === -1) G = y.el = m(y.el);
      else {
        if (
          ((G = y.el = r(y.type, U, te && te.is, te)),
          le & 8
            ? d(G, y.children)
            : le & 16 && L(y.children, G, null, N, z, U && se !== "foreignObject", X, H),
          Ae && Bt(y, null, N, "created"),
          te)
        ) {
          for (const Se in te)
            Se !== "value" && !ri(Se) && o(G, Se, null, te[Se], U, y.children, N, z, F);
          "value" in te && o(G, "value", null, te.value),
            (V = te.onVnodeBeforeMount) && et(V, N, y);
        }
        T(G, y, y.scopeId, X, N);
      }
      Ae && Bt(y, null, N, "beforeMount");
      const Ee = (!z || (z && !z.pendingBranch)) && ue && !ue.persisted;
      Ee && ue.beforeEnter(G),
        a(G, E, I),
        ((V = te && te.onVnodeMounted) || Ee || Ae) &&
          Ve(() => {
            V && et(V, N, y), Ee && ue.enter(G), Ae && Bt(y, null, N, "mounted");
          }, z);
    },
    T = (y, E, I, N, z) => {
      if ((I && v(y, I), N)) for (let U = 0; U < N.length; U++) v(y, N[U]);
      if (z) {
        let U = z.subTree;
        if (E === U) {
          const X = z.vnode;
          T(y, X, X.scopeId, X.slotScopeIds, z.parent);
        }
      }
    },
    L = (y, E, I, N, z, U, X, H, G = 0) => {
      for (let V = G; V < y.length; V++) {
        const se = (y[V] = H ? mn(y[V]) : lt(y[V]));
        g(null, se, E, I, N, z, U, X, H);
      }
    },
    P = (y, E, I, N, z, U, X) => {
      const H = (E.el = y.el);
      let { patchFlag: G, dynamicChildren: V, dirs: se } = E;
      G |= y.patchFlag & 16;
      const te = y.props || xe,
        le = E.props || xe;
      let ue;
      I && Dn(I, !1),
        (ue = le.onVnodeBeforeUpdate) && et(ue, I, E, y),
        se && Bt(E, y, I, "beforeUpdate"),
        I && Dn(I, !0);
      const _e = z && E.type !== "foreignObject";
      if (
        (V ? k(y.dynamicChildren, V, H, I, N, _e, U) : X || he(y, E, H, null, I, N, _e, U, !1),
        G > 0)
      ) {
        if (G & 16) A(H, E, te, le, I, N, z);
        else if (
          (G & 2 && te.class !== le.class && o(H, "class", null, le.class, z),
          G & 4 && o(H, "style", te.style, le.style, z),
          G & 8)
        ) {
          const Ae = E.dynamicProps;
          for (let Ee = 0; Ee < Ae.length; Ee++) {
            const Se = Ae[Ee],
              xt = te[Se],
              ma = le[Se];
            (ma !== xt || Se === "value") && o(H, Se, xt, ma, z, y.children, I, N, F);
          }
        }
        G & 1 && y.children !== E.children && d(H, E.children);
      } else !X && V == null && A(H, E, te, le, I, N, z);
      ((ue = le.onVnodeUpdated) || se) &&
        Ve(() => {
          ue && et(ue, I, E, y), se && Bt(E, y, I, "updated");
        }, N);
    },
    k = (y, E, I, N, z, U, X) => {
      for (let H = 0; H < E.length; H++) {
        const G = y[H],
          V = E[H],
          se = G.el && (G.type === ke || !Mt(G, V) || G.shapeFlag & 70) ? u(G.el) : I;
        g(G, V, se, null, N, z, U, X, !0);
      }
    },
    A = (y, E, I, N, z, U, X) => {
      if (I !== N) {
        for (const H in N) {
          if (ri(H)) continue;
          const G = N[H],
            V = I[H];
          G !== V && H !== "value" && o(y, H, V, G, X, E.children, z, U, F);
        }
        if (I !== xe)
          for (const H in I) !ri(H) && !(H in N) && o(y, H, I[H], null, X, E.children, z, U, F);
        "value" in N && o(y, "value", I.value, N.value);
      }
    },
    R = (y, E, I, N, z, U, X, H, G) => {
      const V = (E.el = y ? y.el : l("")),
        se = (E.anchor = y ? y.anchor : l(""));
      let { patchFlag: te, dynamicChildren: le, slotScopeIds: ue } = E;
      ue && (H = H ? H.concat(ue) : ue),
        y == null
          ? (a(V, I, N), a(se, I, N), L(E.children, I, se, z, U, X, H, G))
          : te > 0 && te & 64 && le && y.dynamicChildren
          ? (k(y.dynamicChildren, le, I, z, U, X, H),
            (E.key != null || (z && E === z.subTree)) && ml(y, E, !0))
          : he(y, E, I, se, z, U, X, H, G);
    },
    O = (y, E, I, N, z, U, X, H, G) => {
      (E.slotScopeIds = H),
        y == null
          ? E.shapeFlag & 512
            ? z.ctx.activate(E, I, N, X, G)
            : Q(E, I, N, z, U, X, G)
          : $(y, E, G);
    },
    Q = (y, E, I, N, z, U, X) => {
      const H = (y.component = tf(y, N, z));
      if ((Fi(y) && (H.ctx.renderer = be), af(H), H.asyncDep)) {
        if ((z && z.registerDep(H, ee), !y.el)) {
          const G = (H.subTree = oe(Qe));
          h(null, G, E, I);
        }
        return;
      }
      ee(H, y, E, I, z, U, X);
    },
    $ = (y, E, I) => {
      const N = (E.component = y.component);
      if (Qm(y, E, I))
        if (N.asyncDep && !N.asyncResolved) {
          ae(N, E, I);
          return;
        } else (N.next = E), Vm(N.update), N.update();
      else (E.el = y.el), (N.vnode = E);
    },
    ee = (y, E, I, N, z, U, X) => {
      const H = () => {
          if (y.isMounted) {
            let { next: se, bu: te, u: le, parent: ue, vnode: _e } = y,
              Ae = se,
              Ee;
            Dn(y, !1),
              se ? ((se.el = _e.el), ae(y, se, X)) : (se = _e),
              te && Ta(te),
              (Ee = se.props && se.props.onVnodeBeforeUpdate) && et(Ee, ue, se, _e),
              Dn(y, !0);
            const Se = bo(y),
              xt = y.subTree;
            (y.subTree = Se),
              g(xt, Se, u(xt.el), W(xt), y, z, U),
              (se.el = Se.el),
              Ae === null && ol(y, Se.el),
              le && Ve(le, z),
              (Ee = se.props && se.props.onVnodeUpdated) && Ve(() => et(Ee, ue, se, _e), z);
          } else {
            let se;
            const { el: te, props: le } = E,
              { bm: ue, m: _e, parent: Ae } = y,
              Ee = Wn(E);
            if (
              (Dn(y, !1),
              ue && Ta(ue),
              !Ee && (se = le && le.onVnodeBeforeMount) && et(se, Ae, E),
              Dn(y, !0),
              te && re)
            ) {
              const Se = () => {
                (y.subTree = bo(y)), re(te, y.subTree, y, z, null);
              };
              Ee ? E.type.__asyncLoader().then(() => !y.isUnmounted && Se()) : Se();
            } else {
              const Se = (y.subTree = bo(y));
              g(null, Se, I, N, y, z, U), (E.el = Se.el);
            }
            if ((_e && Ve(_e, z), !Ee && (se = le && le.onVnodeMounted))) {
              const Se = E;
              Ve(() => et(se, Ae, Se), z);
            }
            (E.shapeFlag & 256 || (Ae && Wn(Ae.vnode) && Ae.vnode.shapeFlag & 256)) &&
              y.a &&
              Ve(y.a, z),
              (y.isMounted = !0),
              (E = I = N = null);
          }
        },
        G = (y.effect = new zi(H, () => al(V), y.scope)),
        V = (y.update = () => G.run());
      (V.id = y.uid), Dn(y, !0), V();
    },
    ae = (y, E, I) => {
      E.component = y;
      const N = y.vnode.props;
      (y.vnode = E),
        (y.next = null),
        w0(y, E.props, N, I),
        A0(y, E.children, I),
        sa(),
        er(void 0, y.update),
        la();
    },
    he = (y, E, I, N, z, U, X, H, G = !1) => {
      const V = y && y.children,
        se = y ? y.shapeFlag : 0,
        te = E.children,
        { patchFlag: le, shapeFlag: ue } = E;
      if (le > 0) {
        if (le & 128) {
          J(V, te, I, N, z, U, X, H, G);
          return;
        } else if (le & 256) {
          j(V, te, I, N, z, U, X, H, G);
          return;
        }
      }
      ue & 8
        ? (se & 16 && F(V, z, U), te !== V && d(I, te))
        : se & 16
        ? ue & 16
          ? J(V, te, I, N, z, U, X, H, G)
          : F(V, z, U, !0)
        : (se & 8 && d(I, ""), ue & 16 && L(te, I, N, z, U, X, H, G));
    },
    j = (y, E, I, N, z, U, X, H, G) => {
      (y = y || Aa), (E = E || Aa);
      const V = y.length,
        se = E.length,
        te = Math.min(V, se);
      let le;
      for (le = 0; le < te; le++) {
        const ue = (E[le] = G ? mn(E[le]) : lt(E[le]));
        g(y[le], ue, I, null, z, U, X, H, G);
      }
      V > se ? F(y, z, U, !0, !1, te) : L(E, I, N, z, U, X, H, G, te);
    },
    J = (y, E, I, N, z, U, X, H, G) => {
      let V = 0;
      const se = E.length;
      let te = y.length - 1,
        le = se - 1;
      for (; V <= te && V <= le; ) {
        const ue = y[V],
          _e = (E[V] = G ? mn(E[V]) : lt(E[V]));
        if (Mt(ue, _e)) g(ue, _e, I, null, z, U, X, H, G);
        else break;
        V++;
      }
      for (; V <= te && V <= le; ) {
        const ue = y[te],
          _e = (E[le] = G ? mn(E[le]) : lt(E[le]));
        if (Mt(ue, _e)) g(ue, _e, I, null, z, U, X, H, G);
        else break;
        te--, le--;
      }
      if (V > te) {
        if (V <= le) {
          const ue = le + 1,
            _e = ue < se ? E[ue].el : N;
          for (; V <= le; ) g(null, (E[V] = G ? mn(E[V]) : lt(E[V])), I, _e, z, U, X, H, G), V++;
        }
      } else if (V > le) for (; V <= te; ) q(y[V], z, U, !0), V++;
      else {
        const ue = V,
          _e = V,
          Ae = new Map();
        for (V = _e; V <= le; V++) {
          const ot = (E[V] = G ? mn(E[V]) : lt(E[V]));
          ot.key != null && Ae.set(ot.key, V);
        }
        let Ee,
          Se = 0;
        const xt = le - _e + 1;
        let ma = !1,
          Zl = 0;
        const qa = new Array(xt);
        for (V = 0; V < xt; V++) qa[V] = 0;
        for (V = ue; V <= te; V++) {
          const ot = y[V];
          if (Se >= xt) {
            q(ot, z, U, !0);
            continue;
          }
          let It;
          if (ot.key != null) It = Ae.get(ot.key);
          else
            for (Ee = _e; Ee <= le; Ee++)
              if (qa[Ee - _e] === 0 && Mt(ot, E[Ee])) {
                It = Ee;
                break;
              }
          It === void 0
            ? q(ot, z, U, !0)
            : ((qa[It - _e] = V + 1),
              It >= Zl ? (Zl = It) : (ma = !0),
              g(ot, E[It], I, null, z, U, X, H, G),
              Se++);
        }
        const Jl = ma ? S0(qa) : Aa;
        for (Ee = Jl.length - 1, V = xt - 1; V >= 0; V--) {
          const ot = _e + V,
            It = E[ot],
            ec = ot + 1 < se ? E[ot + 1].el : N;
          qa[V] === 0
            ? g(null, It, I, ec, z, U, X, H, G)
            : ma && (Ee < 0 || V !== Jl[Ee] ? D(It, I, ec, 2) : Ee--);
        }
      }
    },
    D = (y, E, I, N, z = null) => {
      const { el: U, type: X, transition: H, children: G, shapeFlag: V } = y;
      if (V & 6) {
        D(y.component.subTree, E, I, N);
        return;
      }
      if (V & 128) {
        y.suspense.move(E, I, N);
        return;
      }
      if (V & 64) {
        X.move(y, E, I, be);
        return;
      }
      if (X === ke) {
        a(U, E, I);
        for (let te = 0; te < G.length; te++) D(G[te], E, I, N);
        a(y.anchor, E, I);
        return;
      }
      if (X === Kn) {
        x(y, E, I);
        return;
      }
      if (N !== 2 && V & 1 && H)
        if (N === 0) H.beforeEnter(U), a(U, E, I), Ve(() => H.enter(U), z);
        else {
          const { leave: te, delayLeave: le, afterLeave: ue } = H,
            _e = () => a(U, E, I),
            Ae = () => {
              te(U, () => {
                _e(), ue && ue();
              });
            };
          le ? le(U, _e, Ae) : Ae();
        }
      else a(U, E, I);
    },
    q = (y, E, I, N = !1, z = !1) => {
      const {
        type: U,
        props: X,
        ref: H,
        children: G,
        dynamicChildren: V,
        shapeFlag: se,
        patchFlag: te,
        dirs: le,
      } = y;
      if ((H != null && Bo(H, null, I, y, !0), se & 256)) {
        E.ctx.deactivate(y);
        return;
      }
      const ue = se & 1 && le,
        _e = !Wn(y);
      let Ae;
      if ((_e && (Ae = X && X.onVnodeBeforeUnmount) && et(Ae, E, y), se & 6)) Y(y.component, I, N);
      else {
        if (se & 128) {
          y.suspense.unmount(I, N);
          return;
        }
        ue && Bt(y, null, E, "beforeUnmount"),
          se & 64
            ? y.type.remove(y, E, I, z, be, N)
            : V && (U !== ke || (te > 0 && te & 64))
            ? F(V, E, I, !1, !0)
            : ((U === ke && te & 384) || (!z && se & 16)) && F(G, E, I),
          N && ve(y);
      }
      ((_e && (Ae = X && X.onVnodeUnmounted)) || ue) &&
        Ve(() => {
          Ae && et(Ae, E, y), ue && Bt(y, null, E, "unmounted");
        }, I);
    },
    ve = (y) => {
      const { type: E, el: I, anchor: N, transition: z } = y;
      if (E === ke) {
        M(I, N);
        return;
      }
      if (E === Kn) {
        S(y);
        return;
      }
      const U = () => {
        i(I), z && !z.persisted && z.afterLeave && z.afterLeave();
      };
      if (y.shapeFlag & 1 && z && !z.persisted) {
        const { leave: X, delayLeave: H } = z,
          G = () => X(I, U);
        H ? H(y.el, U, G) : G();
      } else U();
    },
    M = (y, E) => {
      let I;
      for (; y !== E; ) (I = f(y)), i(y), (y = I);
      i(E);
    },
    Y = (y, E, I) => {
      const { bum: N, scope: z, update: U, subTree: X, um: H } = y;
      N && Ta(N),
        z.stop(),
        U && ((U.active = !1), q(X, y, E, I)),
        H && Ve(H, E),
        Ve(() => {
          y.isUnmounted = !0;
        }, E),
        E &&
          E.pendingBranch &&
          !E.isUnmounted &&
          y.asyncDep &&
          !y.asyncResolved &&
          y.suspenseId === E.pendingId &&
          (E.deps--, E.deps === 0 && E.resolve());
    },
    F = (y, E, I, N = !1, z = !1, U = 0) => {
      for (let X = U; X < y.length; X++) q(y[X], E, I, N, z);
    },
    W = (y) =>
      y.shapeFlag & 6
        ? W(y.component.subTree)
        : y.shapeFlag & 128
        ? y.suspense.next()
        : f(y.anchor || y.el),
    fe = (y, E, I) => {
      y == null
        ? E._vnode && q(E._vnode, null, null, !0)
        : g(E._vnode || null, y, E, null, null, null, I),
        Oo(),
        (E._vnode = y);
    },
    be = { p: g, um: q, m: D, r: ve, mt: Q, mc: L, pc: he, pbc: k, n: W, o: e };
  let ce, re;
  return t && ([ce, re] = t(be)), { render: fe, hydrate: ce, createApp: T0(fe, ce) };
}
function Dn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ml(e, t, n = !1) {
  const a = e.children,
    i = t.children;
  if (ne(a) && ne(i))
    for (let o = 0; o < a.length; o++) {
      const r = a[o];
      let l = i[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = i[o] = mn(i[o])), (l.el = r.el)),
        n || ml(r, l));
    }
}
function S0(e) {
  const t = e.slice(),
    n = [0];
  let a, i, o, r, l;
  const s = e.length;
  for (a = 0; a < s; a++) {
    const c = e[a];
    if (c !== 0) {
      if (((i = n[n.length - 1]), e[i] < c)) {
        (t[a] = i), n.push(a);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        (l = (o + r) >> 1), e[n[l]] < c ? (o = l + 1) : (r = l);
      c < e[n[o]] && (o > 0 && (t[a] = n[o - 1]), (n[o] = a));
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; ) (n[o] = r), (r = t[r]);
  return n;
}
const C0 = (e) => e.__isTeleport,
  fi = (e) => e && (e.disabled || e.disabled === ""),
  _c = (e) => typeof SVGElement != "undefined" && e instanceof SVGElement,
  ps = (e, t) => {
    const n = e && e.to;
    return Be(n) ? (t ? t(n) : null) : n;
  },
  O0 = {
    __isTeleport: !0,
    process(e, t, n, a, i, o, r, l, s, c) {
      const {
          mc: d,
          pc: u,
          pbc: f,
          o: { insert: v, querySelector: m, createText: p, createComment: g },
        } = c,
        b = fi(t.props);
      let { shapeFlag: h, children: w, dynamicChildren: x } = t;
      if (e == null) {
        const S = (t.el = p("")),
          _ = (t.anchor = p(""));
        v(S, n, a), v(_, n, a);
        const C = (t.target = ps(t.props, m)),
          T = (t.targetAnchor = p(""));
        C && (v(T, C), (r = r || _c(C)));
        const L = (P, k) => {
          h & 16 && d(w, P, k, i, o, r, l, s);
        };
        b ? L(n, _) : C && L(C, T);
      } else {
        t.el = e.el;
        const S = (t.anchor = e.anchor),
          _ = (t.target = e.target),
          C = (t.targetAnchor = e.targetAnchor),
          T = fi(e.props),
          L = T ? n : _,
          P = T ? S : C;
        if (
          ((r = r || _c(_)),
          x
            ? (f(e.dynamicChildren, x, L, i, o, r, l), ml(e, t, !0))
            : s || u(e, t, L, P, i, o, r, l, !1),
          b)
        )
          T || oo(t, n, S, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const k = (t.target = ps(t.props, m));
          k && oo(t, k, null, c, 0);
        } else T && oo(t, _, C, c, 1);
      }
    },
    remove(e, t, n, a, { um: i, o: { remove: o } }, r) {
      const { shapeFlag: l, children: s, anchor: c, targetAnchor: d, target: u, props: f } = e;
      if ((u && o(d), (r || !fi(f)) && (o(c), l & 16)))
        for (let v = 0; v < s.length; v++) {
          const m = s[v];
          i(m, t, n, !0, !!m.dynamicChildren);
        }
    },
    move: oo,
    hydrate: P0,
  };
function oo(e, t, n, { o: { insert: a }, m: i }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: r, anchor: l, shapeFlag: s, children: c, props: d } = e,
    u = o === 2;
  if ((u && a(r, t, n), (!u || fi(d)) && s & 16))
    for (let f = 0; f < c.length; f++) i(c[f], t, n, 2);
  u && a(l, t, n);
}
function P0(e, t, n, a, i, o, { o: { nextSibling: r, parentNode: l, querySelector: s } }, c) {
  const d = (t.target = ps(t.props, s));
  if (d) {
    const u = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (fi(t.props)) (t.anchor = c(r(e), t, l(e), n, a, i, o)), (t.targetAnchor = u);
      else {
        t.anchor = r(e);
        let f = u;
        for (; f; )
          if (((f = r(f)), f && f.nodeType === 8 && f.data === "teleport anchor")) {
            (t.targetAnchor = f), (d._lpa = t.targetAnchor && r(t.targetAnchor));
            break;
          }
        c(u, t, d, n, a, i, o);
      }
  }
  return t.anchor && r(t.anchor);
}
const I0 = O0,
  ke = Symbol(void 0),
  La = Symbol(void 0),
  Qe = Symbol(void 0),
  Kn = Symbol(void 0),
  pi = [];
let tt = null;
function K(e = !1) {
  pi.push((tt = e ? null : []));
}
function qu() {
  pi.pop(), (tt = pi[pi.length - 1] || null);
}
let Jn = 1;
function hs(e) {
  Jn += e;
}
function Zu(e) {
  return (e.dynamicChildren = Jn > 0 ? tt || Aa : null), qu(), Jn > 0 && tt && tt.push(e), e;
}
function ie(e, t, n, a, i, o) {
  return Zu(B(e, t, n, a, i, o, !0));
}
function Ye(e, t, n, a, i) {
  return Zu(oe(e, t, n, a, i, !0));
}
function On(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
function B0(e) {}
const or = "__vInternal",
  Ju = ({ key: e }) => (e != null ? e : null),
  yo = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null ? (Be(e) || $e(e) || de(e) ? { i: We, r: e, k: t, f: !!n } : e) : null;
function B(e, t = null, n = null, a = 0, i = null, o = e === ke ? 0 : 1, r = !1, l = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ju(t),
    ref: t && yo(t),
    scopeId: nr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: a,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
  };
  return (
    l ? (gl(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= Be(n) ? 8 : 16),
    Jn > 0 && !r && tt && (s.patchFlag > 0 || o & 6) && s.patchFlag !== 32 && tt.push(s),
    s
  );
}
const oe = M0;
function M0(e, t = null, n = null, a = 0, i = null, o = !1) {
  if (((!e || e === Nu) && (e = Qe), On(e))) {
    const l = $t(e, t, !0);
    return (
      n && gl(l, n),
      Jn > 0 && !o && tt && (l.shapeFlag & 6 ? (tt[tt.indexOf(e)] = l) : tt.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((V0(e) && (e = e.__vccOpts), t)) {
    t = ef(t);
    let { class: l, style: s } = t;
    l && !Be(l) && (t.class = mt(l)),
      De(s) && (qs(s) && !ne(s) && (s = Re({}, s)), (t.style = an(s)));
  }
  const r = Be(e) ? 1 : ku(e) ? 128 : C0(e) ? 64 : De(e) ? 4 : de(e) ? 2 : 0;
  return B(e, t, n, a, i, r, o, !0);
}
function ef(e) {
  return e ? (qs(e) || or in e ? Re({}, e) : e) : null;
}
function $t(e, t, n = !1) {
  const { props: a, ref: i, patchFlag: o, children: r } = e,
    l = t ? Vi(a || {}, t) : a;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ju(l),
    ref: t && t.ref ? (n && i ? (ne(i) ? i.concat(yo(t)) : [i, yo(t)]) : yo(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ke ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && $t(e.ssContent),
    ssFallback: e.ssFallback && $t(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  };
}
function Le(e = " ", t = 0) {
  return oe(La, null, e, t);
}
function pa(e, t) {
  const n = oe(Kn, null, e);
  return (n.staticCount = t), n;
}
function Pe(e = "", t = !1) {
  return t ? (K(), Ye(Qe, null, e)) : oe(Qe, null, e);
}
function lt(e) {
  return e == null || typeof e == "boolean"
    ? oe(Qe)
    : ne(e)
    ? oe(ke, null, e.slice())
    : typeof e == "object"
    ? mn(e)
    : oe(La, null, String(e));
}
function mn(e) {
  return e.el === null || e.memo ? e : $t(e);
}
function gl(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (ne(t)) n = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), gl(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !(or in t)
        ? (t._ctx = We)
        : i === 3 && We && (We.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    de(t)
      ? ((t = { default: t, _ctx: We }), (n = 32))
      : ((t = String(t)), a & 64 ? ((n = 16), (t = [Le(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Vi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const i in a)
      if (i === "class") t.class !== a.class && (t.class = mt([t.class, a.class]));
      else if (i === "style") t.style = an([t.style, a.style]);
      else if (Ri(i)) {
        const o = t[i],
          r = a[i];
        r && o !== r && !(ne(o) && o.includes(r)) && (t[i] = o ? [].concat(o, r) : r);
      } else i !== "" && (t[i] = a[i]);
  }
  return t;
}
function et(e, t, n, a = null) {
  ht(e, t, 7, [n, a]);
}
const L0 = Wu();
let R0 = 0;
function tf(e, t, n) {
  const a = e.type,
    i = (t ? t.appContext : e.appContext) || L0,
    o = {
      uid: R0++,
      vnode: e,
      type: a,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Ws(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Yu(a, i),
      emitsOptions: Tu(a, i),
      emit: null,
      emitted: null,
      propsDefaults: xe,
      inheritAttrs: a.inheritAttrs,
      ctx: xe,
      data: xe,
      props: xe,
      attrs: xe,
      slots: xe,
      refs: xe,
      setupState: xe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = Hm.bind(null, o)), e.ce && e.ce(o), o
  );
}
let ze = null;
const Ge = () => ze || We,
  Pn = (e) => {
    (ze = e), e.scope.on();
  },
  Tn = () => {
    ze && ze.scope.off(), (ze = null);
  };
function nf(e) {
  return e.vnode.shapeFlag & 4;
}
let Ra = !1;
function af(e, t = !1) {
  Ra = t;
  const { props: n, children: a } = e.vnode,
    i = nf(e);
  y0(e, n, i, t), x0(e, a);
  const o = i ? D0(e, t) : void 0;
  return (Ra = !1), o;
}
function D0(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Zs(new Proxy(e.ctx, cs)));
  const { setup: a } = n;
  if (a) {
    const i = (e.setupContext = a.length > 1 ? rf(e) : null);
    Pn(e), sa();
    const o = Dt(a, e, 0, [e.props, i]);
    if ((la(), Tn(), Us(o))) {
      if ((o.then(Tn, Tn), t))
        return o
          .then((r) => {
            ms(e, r, t);
          })
          .catch((r) => {
            ca(r, e, 0);
          });
      e.asyncDep = o;
    } else ms(e, o, t);
  } else of(e, t);
}
function ms(e, t, n) {
  de(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : De(t) && (e.setupState = tl(t)),
    of(e, n);
}
let Mo, gs;
function N0(e) {
  (Mo = e),
    (gs = (t) => {
      t.render._rc && (t.withProxy = new Proxy(t.ctx, p0));
    });
}
const z0 = () => !Mo;
function of(e, t, n) {
  const a = e.type;
  if (!e.render) {
    if (!t && Mo && !a.render) {
      const i = a.template;
      if (i) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config,
          { delimiters: l, compilerOptions: s } = a,
          c = Re(Re({ isCustomElement: o, delimiters: l }, r), s);
        a.render = Mo(i, c);
      }
    }
    (e.render = a.render || St), gs && gs(e);
  }
  Pn(e), sa(), h0(e), la(), Tn();
}
function $0(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return vt(e, "get", "$attrs"), t[n];
    },
  });
}
function rf(e) {
  const t = (a) => {
    e.exposed = a || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = $0(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function rr(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(tl(Zs(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Po) return Po[n](e);
        },
      }))
    );
}
const F0 = /(?:^|[-_])(\w)/g,
  j0 = (e) => e.replace(F0, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Lo(e, t = !0) {
  return de(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function sf(e, t, n = !1) {
  let a = Lo(t);
  if (!a && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (a = i[1]);
  }
  if (!a && e && e.parent) {
    const i = (o) => {
      for (const r in o) if (o[r] === t) return r;
    };
    a = i(e.components || e.parent.type.components) || i(e.appContext.components);
  }
  return a ? j0(a) : n ? "App" : "Anonymous";
}
function V0(e) {
  return de(e) && "__vccOpts" in e;
}
const Oe = (e, t) => Rm(e, t, Ra);
function Y0() {
  return null;
}
function H0() {
  return null;
}
function U0(e) {}
function G0(e, t) {
  return null;
}
function W0() {
  return lf().slots;
}
function K0() {
  return lf().attrs;
}
function lf() {
  const e = Ge();
  return e.setupContext || (e.setupContext = rf(e));
}
function Q0(e, t) {
  const n = ne(e) ? e.reduce((a, i) => ((a[i] = {}), a), {}) : e;
  for (const a in t) {
    const i = n[a];
    i
      ? ne(i) || de(i)
        ? (n[a] = { type: i, default: t[a] })
        : (i.default = t[a])
      : i === null && (n[a] = { default: t[a] });
  }
  return n;
}
function X0(e, t) {
  const n = {};
  for (const a in e)
    t.includes(a) || Object.defineProperty(n, a, { enumerable: !0, get: () => e[a] });
  return n;
}
function q0(e) {
  const t = Ge();
  let n = e();
  return (
    Tn(),
    Us(n) &&
      (n = n.catch((a) => {
        throw (Pn(t), a);
      })),
    [n, () => Pn(t)]
  );
}
function Ze(e, t, n) {
  const a = arguments.length;
  return a === 2
    ? De(t) && !ne(t)
      ? On(t)
        ? oe(e, null, [t])
        : oe(e, t)
      : oe(e, null, t)
    : (a > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : a === 3 && On(n) && (n = [n]),
      oe(e, t, n));
}
const cf = Symbol(""),
  Z0 = () => {
    {
      const e = Fe(cf);
      return (
        e ||
          bu(
            "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
          ),
        e
      );
    }
  };
function J0() {}
function eg(e, t, n, a) {
  const i = n[a];
  if (i && df(i, e)) return i;
  const o = t();
  return (o.memo = e.slice()), (n[a] = o);
}
function df(e, t) {
  const n = e.memo;
  if (n.length != t.length) return !1;
  for (let a = 0; a < n.length; a++) if (Pa(n[a], t[a])) return !1;
  return Jn > 0 && tt && tt.push(e), !0;
}
const uf = "3.2.37",
  tg = {
    createComponentInstance: tf,
    setupComponent: af,
    renderComponentRoot: bo,
    setCurrentRenderingInstance: xi,
    isVNode: On,
    normalizeVNode: lt,
  },
  ng = tg,
  ag = null,
  ig = null,
  og = "http://www.w3.org/2000/svg",
  jn = typeof document != "undefined" ? document : null,
  xc = jn && jn.createElement("template"),
  rg = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, a) => {
      const i = t ? jn.createElementNS(og, e) : jn.createElement(e, n ? { is: n } : void 0);
      return e === "select" && a && a.multiple != null && i.setAttribute("multiple", a.multiple), i;
    },
    createText: (e) => jn.createTextNode(e),
    createComment: (e) => jn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => jn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    cloneNode(e) {
      const t = e.cloneNode(!0);
      return "_value" in e && (t._value = e._value), t;
    },
    insertStaticContent(e, t, n, a, i, o) {
      const r = n ? n.previousSibling : t.lastChild;
      if (i && (i === o || i.nextSibling))
        for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); );
      else {
        xc.innerHTML = a ? `<svg>${e}</svg>` : e;
        const l = xc.content;
        if (a) {
          const s = l.firstChild;
          for (; s.firstChild; ) l.appendChild(s.firstChild);
          l.removeChild(s);
        }
        t.insertBefore(l, n);
      }
      return [r ? r.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    },
  };
function sg(e, t, n) {
  const a = e._vtc;
  a && (t = (t ? [t, ...a] : [...a]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : (e.className = t);
}
function lg(e, t, n) {
  const a = e.style,
    i = Be(n);
  if (n && !i) {
    for (const o in n) vs(a, o, n[o]);
    if (t && !Be(t)) for (const o in t) n[o] == null && vs(a, o, "");
  } else {
    const o = a.display;
    i ? t !== n && (a.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (a.display = o);
  }
}
const Ac = /\s*!important$/;
function vs(e, t, n) {
  if (ne(n)) n.forEach((a) => vs(e, t, a));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const a = cg(e, t);
    Ac.test(n) ? e.setProperty(Rt(a), n.replace(Ac, ""), "important") : (e[a] = n);
  }
}
const Ec = ["Webkit", "Moz", "ms"],
  Lr = {};
function cg(e, t) {
  const n = Lr[t];
  if (n) return n;
  let a = gt(t);
  if (a !== "filter" && a in e) return (Lr[t] = a);
  a = Ni(a);
  for (let i = 0; i < Ec.length; i++) {
    const o = Ec[i] + a;
    if (o in e) return (Lr[t] = o);
  }
  return t;
}
const Tc = "http://www.w3.org/1999/xlink";
function dg(e, t, n, a, i) {
  if (a && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Tc, t.slice(6, t.length)) : e.setAttributeNS(Tc, t, n);
  else {
    const o = Dh(t);
    n == null || (o && !qd(n)) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function ug(e, t, n, a, i, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    a && r(a, i, o), (e[t] = n == null ? "" : n);
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const s = n == null ? "" : n;
    (e.value !== s || e.tagName === "OPTION") && (e.value = s), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean"
      ? (n = qd(n))
      : n == null && s === "string"
      ? ((n = ""), (l = !0))
      : s === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
const [ff, fg] = (() => {
  let e = Date.now,
    t = !1;
  if (typeof window != "undefined") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let bs = 0;
const pg = Promise.resolve(),
  hg = () => {
    bs = 0;
  },
  mg = () => bs || (pg.then(hg), (bs = ff()));
function Xt(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function gg(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
function vg(e, t, n, a, i = null) {
  const o = e._vei || (e._vei = {}),
    r = o[t];
  if (a && r) r.value = a;
  else {
    const [l, s] = bg(t);
    if (a) {
      const c = (o[t] = yg(a, i));
      Xt(e, l, c, s);
    } else r && (gg(e, l, r, s), (o[t] = void 0));
  }
}
const kc = /(?:Once|Passive|Capture)$/;
function bg(e) {
  let t;
  if (kc.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(kc)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [Rt(e.slice(2)), t];
}
function yg(e, t) {
  const n = (a) => {
    const i = a.timeStamp || ff();
    (fg || i >= n.attached - 1) && ht(wg(a, n.value), t, 5, [a]);
  };
  return (n.value = e), (n.attached = mg()), n;
}
function wg(e, t) {
  if (ne(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((a) => (i) => !i._stopped && a && a(i))
    );
  } else return t;
}
const Sc = /^on[a-z]/,
  _g = (e, t, n, a, i = !1, o, r, l, s) => {
    t === "class"
      ? sg(e, a, i)
      : t === "style"
      ? lg(e, n, a)
      : Ri(t)
      ? Ys(t) || vg(e, t, n, a, r)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : xg(e, t, a, i)
        )
      ? ug(e, t, a, o, r, l, s)
      : (t === "true-value" ? (e._trueValue = a) : t === "false-value" && (e._falseValue = a),
        dg(e, t, a, i));
  };
function xg(e, t, n, a) {
  return a
    ? !!(t === "innerHTML" || t === "textContent" || (t in e && Sc.test(t) && de(n)))
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Sc.test(t) && Be(n))
    ? !1
    : t in e;
}
function pf(e, t) {
  const n = Ue(e);
  class a extends sr {
    constructor(o) {
      super(n, o, t);
    }
  }
  return (a.def = n), a;
}
const Ag = (e) => pf(e, Of),
  Eg = typeof HTMLElement != "undefined" ? HTMLElement : class {};
class sr extends Eg {
  constructor(t, n = {}, a) {
    super(),
      (this._def = t),
      (this._props = n),
      (this._instance = null),
      (this._connected = !1),
      (this._resolved = !1),
      (this._numberProps = null),
      this.shadowRoot && a
        ? a(this._createVNode(), this.shadowRoot)
        : this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    (this._connected = !0), this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    (this._connected = !1),
      Lt(() => {
        this._connected || (ws(null, this.shadowRoot), (this._instance = null));
      });
  }
  _resolveDef() {
    if (this._resolved) return;
    this._resolved = !0;
    for (let a = 0; a < this.attributes.length; a++) this._setAttr(this.attributes[a].name);
    new MutationObserver((a) => {
      for (const i of a) this._setAttr(i.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (a) => {
        const { props: i, styles: o } = a,
          r = !ne(i),
          l = i ? (r ? Object.keys(i) : i) : [];
        let s;
        if (r)
          for (const c in this._props) {
            const d = i[c];
            (d === Number || (d && d.type === Number)) &&
              ((this._props[c] = Sn(this._props[c])), ((s || (s = Object.create(null)))[c] = !0));
          }
        this._numberProps = s;
        for (const c of Object.keys(this)) c[0] !== "_" && this._setProp(c, this[c], !0, !1);
        for (const c of l.map(gt))
          Object.defineProperty(this, c, {
            get() {
              return this._getProp(c);
            },
            set(d) {
              this._setProp(c, d);
            },
          });
        this._applyStyles(o), this._update();
      },
      n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = Sn(n)), this._setProp(gt(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, a = !0, i = !0) {
    n !== this._props[t] &&
      ((this._props[t] = n),
      i && this._instance && this._update(),
      a &&
        (n === !0
          ? this.setAttribute(Rt(t), "")
          : typeof n == "string" || typeof n == "number"
          ? this.setAttribute(Rt(t), n + "")
          : n || this.removeAttribute(Rt(t))));
  }
  _update() {
    ws(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = oe(this._def, Re({}, this._props));
    return (
      this._instance ||
        (t.ce = (n) => {
          (this._instance = n),
            (n.isCE = !0),
            (n.emit = (i, ...o) => {
              this.dispatchEvent(new CustomEvent(i, { detail: o }));
            });
          let a = this;
          for (; (a = a && (a.parentNode || a.host)); )
            if (a instanceof sr) {
              n.parent = a._instance;
              break;
            }
        }),
      t
    );
  }
  _applyStyles(t) {
    t &&
      t.forEach((n) => {
        const a = document.createElement("style");
        (a.textContent = n), this.shadowRoot.appendChild(a);
      });
  }
}
function Tg(e = "$style") {
  {
    const t = Ge();
    if (!t) return xe;
    const n = t.type.__cssModules;
    if (!n) return xe;
    const a = n[e];
    return a || xe;
  }
}
function kg(e) {
  const t = Ge();
  if (!t) return;
  const n = () => ys(t.subTree, e(t.proxy));
  Cu(n),
    at(() => {
      const a = new MutationObserver(n);
      a.observe(t.subTree.el.parentNode, { childList: !0 }), fa(() => a.disconnect());
    });
}
function ys(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    (e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          ys(n.activeBranch, t);
        });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) Cc(e.el, t);
  else if (e.type === ke) e.children.forEach((n) => ys(n, t));
  else if (e.type === Kn) {
    let { el: n, anchor: a } = e;
    for (; n && (Cc(n, t), n !== a); ) n = n.nextSibling;
  }
}
function Cc(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const a in t) n.setProperty(`--${a}`, t[a]);
  }
}
const un = "transition",
  Za = "animation",
  vl = (e, { slots: t }) => Ze(ll, mf(e), t);
vl.displayName = "Transition";
const hf = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Sg = (vl.props = Re({}, ll.props, hf)),
  Nn = (e, t = []) => {
    ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Oc = (e) => (e ? (ne(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function mf(e) {
  const t = {};
  for (const A in e) A in hf || (t[A] = e[A]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: a,
      duration: i,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: r = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: s = o,
      appearActiveClass: c = r,
      appearToClass: d = l,
      leaveFromClass: u = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: v = `${n}-leave-to`,
    } = e,
    m = Cg(i),
    p = m && m[0],
    g = m && m[1],
    {
      onBeforeEnter: b,
      onEnter: h,
      onEnterCancelled: w,
      onLeave: x,
      onLeaveCancelled: S,
      onBeforeAppear: _ = b,
      onAppear: C = h,
      onAppearCancelled: T = w,
    } = t,
    L = (A, R, O) => {
      pn(A, R ? d : l), pn(A, R ? c : r), O && O();
    },
    P = (A, R) => {
      (A._isLeaving = !1), pn(A, u), pn(A, v), pn(A, f), R && R();
    },
    k = (A) => (R, O) => {
      const Q = A ? C : h,
        $ = () => L(R, A, O);
      Nn(Q, [R, $]),
        Pc(() => {
          pn(R, A ? s : o), Yt(R, A ? d : l), Oc(Q) || Ic(R, a, p, $);
        });
    };
  return Re(t, {
    onBeforeEnter(A) {
      Nn(b, [A]), Yt(A, o), Yt(A, r);
    },
    onBeforeAppear(A) {
      Nn(_, [A]), Yt(A, s), Yt(A, c);
    },
    onEnter: k(!1),
    onAppear: k(!0),
    onLeave(A, R) {
      A._isLeaving = !0;
      const O = () => P(A, R);
      Yt(A, u),
        vf(),
        Yt(A, f),
        Pc(() => {
          !A._isLeaving || (pn(A, u), Yt(A, v), Oc(x) || Ic(A, a, g, O));
        }),
        Nn(x, [A, O]);
    },
    onEnterCancelled(A) {
      L(A, !1), Nn(w, [A]);
    },
    onAppearCancelled(A) {
      L(A, !0), Nn(T, [A]);
    },
    onLeaveCancelled(A) {
      P(A), Nn(S, [A]);
    },
  });
}
function Cg(e) {
  if (e == null) return null;
  if (De(e)) return [Rr(e.enter), Rr(e.leave)];
  {
    const t = Rr(e);
    return [t, t];
  }
}
function Rr(e) {
  return Sn(e);
}
function Yt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set())).add(t);
}
function pn(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Pc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Og = 0;
function Ic(e, t, n, a) {
  const i = (e._endId = ++Og),
    o = () => {
      i === e._endId && a();
    };
  if (n) return setTimeout(o, n);
  const { type: r, timeout: l, propCount: s } = gf(e, t);
  if (!r) return a();
  const c = r + "end";
  let d = 0;
  const u = () => {
      e.removeEventListener(c, f), o();
    },
    f = (v) => {
      v.target === e && ++d >= s && u();
    };
  setTimeout(() => {
    d < s && u();
  }, l + 1),
    e.addEventListener(c, f);
}
function gf(e, t) {
  const n = window.getComputedStyle(e),
    a = (m) => (n[m] || "").split(", "),
    i = a(un + "Delay"),
    o = a(un + "Duration"),
    r = Bc(i, o),
    l = a(Za + "Delay"),
    s = a(Za + "Duration"),
    c = Bc(l, s);
  let d = null,
    u = 0,
    f = 0;
  t === un
    ? r > 0 && ((d = un), (u = r), (f = o.length))
    : t === Za
    ? c > 0 && ((d = Za), (u = c), (f = s.length))
    : ((u = Math.max(r, c)),
      (d = u > 0 ? (r > c ? un : Za) : null),
      (f = d ? (d === un ? o.length : s.length) : 0));
  const v = d === un && /\b(transform|all)(,|$)/.test(n[un + "Property"]);
  return { type: d, timeout: u, propCount: f, hasTransform: v };
}
function Bc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, a) => Mc(n) + Mc(e[a])));
}
function Mc(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function vf() {
  return document.body.offsetHeight;
}
const bf = new WeakMap(),
  yf = new WeakMap(),
  Pg = {
    name: "TransitionGroup",
    props: Re({}, Sg, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Ge(),
        a = sl();
      let i, o;
      return (
        da(() => {
          if (!i.length) return;
          const r = e.moveClass || `${e.name || "v"}-move`;
          if (!Lg(i[0].el, n.vnode.el, r)) return;
          i.forEach(Ig), i.forEach(Bg);
          const l = i.filter(Mg);
          vf(),
            l.forEach((s) => {
              const c = s.el,
                d = c.style;
              Yt(c, r), (d.transform = d.webkitTransform = d.transitionDuration = "");
              const u = (c._moveCb = (f) => {
                (f && f.target !== c) ||
                  ((!f || /transform$/.test(f.propertyName)) &&
                    (c.removeEventListener("transitionend", u), (c._moveCb = null), pn(c, r)));
              });
              c.addEventListener("transitionend", u);
            });
        }),
        () => {
          const r = ye(e),
            l = mf(r);
          let s = r.tag || ke;
          (i = o), (o = t.default ? ar(t.default()) : []);
          for (let c = 0; c < o.length; c++) {
            const d = o[c];
            d.key != null && Zn(d, Ba(d, l, a, n));
          }
          if (i)
            for (let c = 0; c < i.length; c++) {
              const d = i[c];
              Zn(d, Ba(d, l, a, n)), bf.set(d, d.el.getBoundingClientRect());
            }
          return oe(s, null, o);
        }
      );
    },
  },
  wf = Pg;
function Ig(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function Bg(e) {
  yf.set(e, e.el.getBoundingClientRect());
}
function Mg(e) {
  const t = bf.get(e),
    n = yf.get(e),
    a = t.left - n.left,
    i = t.top - n.top;
  if (a || i) {
    const o = e.el.style;
    return (
      (o.transform = o.webkitTransform = `translate(${a}px,${i}px)`),
      (o.transitionDuration = "0s"),
      e
    );
  }
}
function Lg(e, t, n) {
  const a = e.cloneNode();
  e._vtc &&
    e._vtc.forEach((r) => {
      r.split(/\s+/).forEach((l) => l && a.classList.remove(l));
    }),
    n.split(/\s+/).forEach((r) => r && a.classList.add(r)),
    (a.style.display = "none");
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(a);
  const { hasTransform: o } = gf(a);
  return i.removeChild(a), o;
}
const In = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (n) => Ta(t, n) : t;
};
function Rg(e) {
  e.target.composing = !0;
}
function Lc(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Ro = {
    created(e, { modifiers: { lazy: t, trim: n, number: a } }, i) {
      e._assign = In(i);
      const o = a || (i.props && i.props.type === "number");
      Xt(e, t ? "change" : "input", (r) => {
        if (r.target.composing) return;
        let l = e.value;
        n && (l = l.trim()), o && (l = Sn(l)), e._assign(l);
      }),
        n &&
          Xt(e, "change", () => {
            e.value = e.value.trim();
          }),
        t || (Xt(e, "compositionstart", Rg), Xt(e, "compositionend", Lc), Xt(e, "change", Lc));
    },
    mounted(e, { value: t }) {
      e.value = t == null ? "" : t;
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: a, number: i } }, o) {
      if (
        ((e._assign = In(o)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== "range" &&
            (n ||
              (a && e.value.trim() === t) ||
              ((i || e.type === "number") && Sn(e.value) === t))))
      )
        return;
      const r = t == null ? "" : t;
      e.value !== r && (e.value = r);
    },
  },
  Yi = {
    deep: !0,
    created(e, t, n) {
      (e._assign = In(n)),
        Xt(e, "change", () => {
          const a = e._modelValue,
            i = Da(e),
            o = e.checked,
            r = e._assign;
          if (ne(a)) {
            const l = Wo(a, i),
              s = l !== -1;
            if (o && !s) r(a.concat(i));
            else if (!o && s) {
              const c = [...a];
              c.splice(l, 1), r(c);
            }
          } else if (ra(a)) {
            const l = new Set(a);
            o ? l.add(i) : l.delete(i), r(l);
          } else r(_f(e, o));
        });
    },
    mounted: Rc,
    beforeUpdate(e, t, n) {
      (e._assign = In(n)), Rc(e, t, n);
    },
  };
function Rc(e, { value: t, oldValue: n }, a) {
  (e._modelValue = t),
    ne(t)
      ? (e.checked = Wo(t, a.props.value) > -1)
      : ra(t)
      ? (e.checked = t.has(a.props.value))
      : t !== n && (e.checked = kn(t, _f(e, !0)));
}
const bl = {
    created(e, { value: t }, n) {
      (e.checked = kn(t, n.props.value)),
        (e._assign = In(n)),
        Xt(e, "change", () => {
          e._assign(Da(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, a) {
      (e._assign = In(a)), t !== n && (e.checked = kn(t, a.props.value));
    },
  },
  Do = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, a) {
      const i = ra(t);
      Xt(e, "change", () => {
        const o = Array.prototype.filter
          .call(e.options, (r) => r.selected)
          .map((r) => (n ? Sn(Da(r)) : Da(r)));
        e._assign(e.multiple ? (i ? new Set(o) : o) : o[0]);
      }),
        (e._assign = In(a));
    },
    mounted(e, { value: t }) {
      Dc(e, t);
    },
    beforeUpdate(e, t, n) {
      e._assign = In(n);
    },
    updated(e, { value: t }) {
      Dc(e, t);
    },
  };
function Dc(e, t) {
  const n = e.multiple;
  if (!(n && !ne(t) && !ra(t))) {
    for (let a = 0, i = e.options.length; a < i; a++) {
      const o = e.options[a],
        r = Da(o);
      if (n) ne(t) ? (o.selected = Wo(t, r) > -1) : (o.selected = t.has(r));
      else if (kn(Da(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Da(e) {
  return "_value" in e ? e._value : e.value;
}
function _f(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const xf = {
  created(e, t, n) {
    ro(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    ro(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, a) {
    ro(e, t, n, a, "beforeUpdate");
  },
  updated(e, t, n, a) {
    ro(e, t, n, a, "updated");
  },
};
function Af(e, t) {
  switch (e) {
    case "SELECT":
      return Do;
    case "TEXTAREA":
      return Ro;
    default:
      switch (t) {
        case "checkbox":
          return Yi;
        case "radio":
          return bl;
        default:
          return Ro;
      }
  }
}
function ro(e, t, n, a, i) {
  const r = Af(e.tagName, n.props && n.props.type)[i];
  r && r(e, t, n, a);
}
function Dg() {
  (Ro.getSSRProps = ({ value: e }) => ({ value: e })),
    (bl.getSSRProps = ({ value: e }, t) => {
      if (t.props && kn(t.props.value, e)) return { checked: !0 };
    }),
    (Yi.getSSRProps = ({ value: e }, t) => {
      if (ne(e)) {
        if (t.props && Wo(e, t.props.value) > -1) return { checked: !0 };
      } else if (ra(e)) {
        if (t.props && e.has(t.props.value)) return { checked: !0 };
      } else if (e) return { checked: !0 };
    }),
    (xf.getSSRProps = (e, t) => {
      if (typeof t.type != "string") return;
      const n = Af(t.type.toUpperCase(), t.props && t.props.type);
      if (n.getSSRProps) return n.getSSRProps(e, t);
    });
}
const Ng = ["ctrl", "shift", "alt", "meta"],
  zg = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Ng.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Ef =
    (e, t) =>
    (n, ...a) => {
      for (let i = 0; i < t.length; i++) {
        const o = zg[t[i]];
        if (o && o(n, t)) return;
      }
      return e(n, ...a);
    },
  $g = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Fg = (e, t) => (n) => {
    if (!("key" in n)) return;
    const a = Rt(n.key);
    if (t.some((i) => i === a || $g[i] === a)) return e(n);
  },
  Tf = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Ja(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: a }) {
      !t != !n &&
        (a
          ? t
            ? (a.beforeEnter(e), Ja(e, !0), a.enter(e))
            : a.leave(e, () => {
                Ja(e, !1);
              })
          : Ja(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Ja(e, t);
    },
  };
function Ja(e, t) {
  e.style.display = t ? e._vod : "none";
}
function jg() {
  Tf.getSSRProps = ({ value: e }) => {
    if (!e) return { style: { display: "none" } };
  };
}
const kf = Re({ patchProp: _g }, rg);
let hi,
  Nc = !1;
function Sf() {
  return hi || (hi = Ku(kf));
}
function Cf() {
  return (hi = Nc ? hi : Qu(kf)), (Nc = !0), hi;
}
const ws = (...e) => {
    Sf().render(...e);
  },
  Of = (...e) => {
    Cf().hydrate(...e);
  },
  yl = (...e) => {
    const t = Sf().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (a) => {
        const i = Pf(a);
        if (!i) return;
        const o = t._component;
        !de(o) && !o.render && !o.template && (o.template = i.innerHTML), (i.innerHTML = "");
        const r = n(i, !1, i instanceof SVGElement);
        return (
          i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
          r
        );
      }),
      t
    );
  },
  Vg = (...e) => {
    const t = Cf().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (a) => {
        const i = Pf(a);
        if (i) return n(i, !0, i instanceof SVGElement);
      }),
      t
    );
  };
function Pf(e) {
  return Be(e) ? document.querySelector(e) : e;
}
let zc = !1;
const Yg = () => {
    zc || ((zc = !0), Dg(), jg());
  },
  Hg = () => {};
var Ug = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        compile: Hg,
        EffectScope: Ws,
        ReactiveEffect: zi,
        customRef: Im,
        effect: em,
        effectScope: Qh,
        getCurrentScope: Xh,
        isProxy: qs,
        isReactive: Gn,
        isReadonly: Ia,
        isRef: $e,
        isShallow: So,
        markRaw: Zs,
        onScopeDispose: qh,
        proxyRefs: tl,
        reactive: Ct,
        readonly: Xs,
        ref: me,
        shallowReactive: hu,
        shallowReadonly: km,
        shallowRef: mu,
        stop: tm,
        toRaw: ye,
        toRef: vu,
        toRefs: Bm,
        triggerRef: Cm,
        unref: ge,
        camelize: gt,
        capitalize: Ni,
        normalizeClass: mt,
        normalizeProps: Fh,
        normalizeStyle: an,
        toDisplayString: yt,
        toHandlerKey: si,
        BaseTransition: ll,
        Comment: Qe,
        Fragment: ke,
        KeepAlive: l0,
        Static: Kn,
        Suspense: qm,
        Teleport: I0,
        Text: La,
        callWithAsyncErrorHandling: ht,
        callWithErrorHandling: Dt,
        cloneVNode: $t,
        compatUtils: ig,
        computed: Oe,
        createBlock: Ye,
        createCommentVNode: Pe,
        createElementBlock: ie,
        createElementVNode: B,
        createHydrationRenderer: Qu,
        createPropsRestProxy: X0,
        createRenderer: Ku,
        createSlots: f0,
        createStaticVNode: pa,
        createTextVNode: Le,
        createVNode: oe,
        defineAsyncComponent: r0,
        defineComponent: Ue,
        defineEmits: H0,
        defineExpose: U0,
        defineProps: Y0,
        get devtools() {
          return ya;
        },
        getCurrentInstance: Ge,
        getTransitionRawChildren: ar,
        guardReactiveProps: ef,
        h: Ze,
        handleError: ca,
        initCustomFormatter: J0,
        inject: Fe,
        isMemoSame: df,
        isRuntimeOnly: z0,
        isVNode: On,
        mergeDefaults: Q0,
        mergeProps: Vi,
        nextTick: Lt,
        onActivated: cl,
        onBeforeMount: Bu,
        onBeforeUnmount: ua,
        onBeforeUpdate: ul,
        onDeactivated: dl,
        onErrorCaptured: Du,
        onMounted: at,
        onRenderTracked: Ru,
        onRenderTriggered: Lu,
        onServerPrefetch: Mu,
        onUnmounted: fa,
        onUpdated: da,
        openBlock: K,
        popScopeId: rn,
        provide: An,
        pushScopeId: on,
        queuePostFlushCb: il,
        registerRuntimeCompiler: N0,
        renderList: Ei,
        renderSlot: Ma,
        resolveComponent: En,
        resolveDirective: u0,
        resolveDynamicComponent: ji,
        resolveFilter: ag,
        resolveTransitionHooks: Ba,
        setBlockTracking: hs,
        setDevtoolsHook: Eu,
        setTransitionHooks: Zn,
        ssrContextKey: cf,
        ssrUtils: ng,
        toHandlers: $u,
        transformVNodeArgs: B0,
        useAttrs: K0,
        useSSRContext: Z0,
        useSlots: W0,
        useTransitionState: sl,
        version: uf,
        warn: bu,
        watch: Nt,
        watchEffect: n0,
        watchPostEffect: Cu,
        watchSyncEffect: a0,
        withAsyncContext: q0,
        withCtx: Ke,
        withDefaults: G0,
        withDirectives: ui,
        withMemo: eg,
        withScopeId: Um,
        Transition: vl,
        TransitionGroup: wf,
        VueElement: sr,
        createApp: yl,
        createSSRApp: Vg,
        defineCustomElement: pf,
        defineSSRCustomElement: Ag,
        hydrate: Of,
        initDirectivesForSSR: Yg,
        render: ws,
        useCssModule: Tg,
        useCssVars: kg,
        vModelCheckbox: Yi,
        vModelDynamic: xf,
        vModelRadio: bl,
        vModelSelect: Do,
        vModelText: Ro,
        vShow: Tf,
        withKeys: Fg,
        withModifiers: Ef,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _t = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [a, i] of t) n[a] = i;
    return n;
  };
const Gg = {};
function Wg(e, t) {
  const n = En("router-view");
  return K(), Ye(n);
}
var Kg = _t(Gg, [["render", Wg]]);
const Qg = "modulepreload",
  $c = {},
  Xg = "/",
  so = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((a) => {
            if (((a = `${Xg}${a}`), a in $c)) return;
            $c[a] = !0;
            const i = a.endsWith(".css"),
              o = i ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${a}"]${o}`)) return;
            const r = document.createElement("link");
            if (
              ((r.rel = i ? "stylesheet" : Qg),
              i || ((r.as = "script"), (r.crossOrigin = "")),
              (r.href = a),
              document.head.appendChild(r),
              i)
            )
              return new Promise((l, s) => {
                r.addEventListener("load", l),
                  r.addEventListener("error", () => s(new Error(`Unable to preload CSS for ${a}`)));
              });
          })
        ).then(() => t());
  };
/*!
 * vue-router v4.0.16
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const If = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
  Ha = (e) => (If ? Symbol(e) : "_vr_" + e),
  lr = Ha("rvlm"),
  _s = Ha("rvd"),
  Hi = Ha("r"),
  cr = Ha("rl"),
  No = Ha("rvl"),
  wa = typeof window != "undefined";
function qg(e) {
  return e.__esModule || (If && e[Symbol.toStringTag] === "Module");
}
const Te = Object.assign;
function Dr(e, t) {
  const n = {};
  for (const a in t) {
    const i = t[a];
    n[a] = Array.isArray(i) ? i.map(e) : e(i);
  }
  return n;
}
const mi = () => {},
  Zg = /\/$/,
  Jg = (e) => e.replace(Zg, "");
function Nr(e, t, n = "/") {
  let a,
    i = {},
    o = "",
    r = "";
  const l = t.indexOf("?"),
    s = t.indexOf("#", l > -1 ? l : 0);
  return (
    l > -1 && ((a = t.slice(0, l)), (o = t.slice(l + 1, s > -1 ? s : t.length)), (i = e(o))),
    s > -1 && ((a = a || t.slice(0, s)), (r = t.slice(s, t.length))),
    (a = av(a != null ? a : t, n)),
    { fullPath: a + (o && "?") + o + r, path: a, query: i, hash: r }
  );
}
function ev(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Fc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function tv(e, t, n) {
  const a = t.matched.length - 1,
    i = n.matched.length - 1;
  return (
    a > -1 &&
    a === i &&
    Na(t.matched[a], n.matched[i]) &&
    Bf(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Na(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Bf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!nv(e[n], t[n])) return !1;
  return !0;
}
function nv(e, t) {
  return Array.isArray(e) ? jc(e, t) : Array.isArray(t) ? jc(t, e) : e === t;
}
function jc(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((n, a) => n === t[a])
    : e.length === 1 && e[0] === t;
}
function av(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    a = e.split("/");
  let i = n.length - 1,
    o,
    r;
  for (o = 0; o < a.length; o++)
    if (((r = a[o]), !(i === 1 || r === ".")))
      if (r === "..") i--;
      else break;
  return n.slice(0, i).join("/") + "/" + a.slice(o - (o === a.length ? 1 : 0)).join("/");
}
var za;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(za || (za = {}));
var Qn;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Qn || (Qn = {}));
const zr = "";
function Mf(e) {
  if (!e)
    if (wa) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"), (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Jg(e);
}
const iv = /^[^#]+#/;
function Lf(e, t) {
  return e.replace(iv, "#") + t;
}
function ov(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    a = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: a.left - n.left - (t.left || 0),
    top: a.top - n.top - (t.top || 0),
  };
}
const dr = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function rv(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      a = typeof n == "string" && n.startsWith("#"),
      i =
        typeof n == "string"
          ? a
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!i) return;
    t = ov(i, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function Vc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const xs = new Map();
function sv(e, t) {
  xs.set(e, t);
}
function lv(e) {
  const t = xs.get(e);
  return xs.delete(e), t;
}
let cv = () => location.protocol + "//" + location.host;
function Rf(e, t) {
  const { pathname: n, search: a, hash: i } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let l = i.includes(e.slice(o)) ? e.slice(o).length : 1,
      s = i.slice(l);
    return s[0] !== "/" && (s = "/" + s), Fc(s, "");
  }
  return Fc(n, e) + a + i;
}
function dv(e, t, n, a) {
  let i = [],
    o = [],
    r = null;
  const l = ({ state: f }) => {
    const v = Rf(e, location),
      m = n.value,
      p = t.value;
    let g = 0;
    if (f) {
      if (((n.value = v), (t.value = f), r && r === m)) {
        r = null;
        return;
      }
      g = p ? f.position - p.position : 0;
    } else a(v);
    i.forEach((b) => {
      b(n.value, m, {
        delta: g,
        type: za.pop,
        direction: g ? (g > 0 ? Qn.forward : Qn.back) : Qn.unknown,
      });
    });
  };
  function s() {
    r = n.value;
  }
  function c(f) {
    i.push(f);
    const v = () => {
      const m = i.indexOf(f);
      m > -1 && i.splice(m, 1);
    };
    return o.push(v), v;
  }
  function d() {
    const { history: f } = window;
    !f.state || f.replaceState(Te({}, f.state, { scroll: dr() }), "");
  }
  function u() {
    for (const f of o) f();
    (o = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", d);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", d),
    { pauseListeners: s, listen: c, destroy: u }
  );
}
function Yc(e, t, n, a = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: a,
    position: window.history.length,
    scroll: i ? dr() : null,
  };
}
function uv(e) {
  const { history: t, location: n } = window,
    a = { value: Rf(e, n) },
    i = { value: t.state };
  i.value ||
    o(
      a.value,
      {
        back: null,
        current: a.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(s, c, d) {
    const u = e.indexOf("#"),
      f = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + s : cv() + e + s;
    try {
      t[d ? "replaceState" : "pushState"](c, "", f), (i.value = c);
    } catch (v) {
      console.error(v), n[d ? "replace" : "assign"](f);
    }
  }
  function r(s, c) {
    const d = Te({}, t.state, Yc(i.value.back, s, i.value.forward, !0), c, {
      position: i.value.position,
    });
    o(s, d, !0), (a.value = s);
  }
  function l(s, c) {
    const d = Te({}, i.value, t.state, { forward: s, scroll: dr() });
    o(d.current, d, !0);
    const u = Te({}, Yc(a.value, s, null), { position: d.position + 1 }, c);
    o(s, u, !1), (a.value = s);
  }
  return { location: a, state: i, push: l, replace: r };
}
function wl(e) {
  e = Mf(e);
  const t = uv(e),
    n = dv(e, t.state, t.location, t.replace);
  function a(o, r = !0) {
    r || n.pauseListeners(), history.go(o);
  }
  const i = Te({ location: "", base: e, go: a, createHref: Lf.bind(null, e) }, t, n);
  return (
    Object.defineProperty(i, "location", { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(i, "state", { enumerable: !0, get: () => t.state.value }),
    i
  );
}
function fv(e = "") {
  let t = [],
    n = [zr],
    a = 0;
  e = Mf(e);
  function i(l) {
    a++, a === n.length || n.splice(a), n.push(l);
  }
  function o(l, s, { direction: c, delta: d }) {
    const u = { direction: c, delta: d, type: za.pop };
    for (const f of t) f(l, s, u);
  }
  const r = {
    location: zr,
    state: {},
    base: e,
    createHref: Lf.bind(null, e),
    replace(l) {
      n.splice(a--, 1), i(l);
    },
    push(l, s) {
      i(l);
    },
    listen(l) {
      return (
        t.push(l),
        () => {
          const s = t.indexOf(l);
          s > -1 && t.splice(s, 1);
        }
      );
    },
    destroy() {
      (t = []), (n = [zr]), (a = 0);
    },
    go(l, s = !0) {
      const c = this.location,
        d = l < 0 ? Qn.back : Qn.forward;
      (a = Math.max(0, Math.min(a + l, n.length - 1))),
        s && o(this.location, c, { direction: d, delta: l });
    },
  };
  return Object.defineProperty(r, "location", { enumerable: !0, get: () => n[a] }), r;
}
function pv(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    wl(e)
  );
}
function hv(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Df(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ht = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Nf = Ha("nf");
var As;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(As || (As = {}));
function $a(e, t) {
  return Te(new Error(), { type: e, [Nf]: !0 }, t);
}
function Ut(e, t) {
  return e instanceof Error && Nf in e && (t == null || !!(e.type & t));
}
const Hc = "[^/]+?",
  mv = { sensitive: !1, strict: !1, start: !0, end: !0 },
  gv = /[.+*?^${}()[\]/\\]/g;
function vv(e, t) {
  const n = Te({}, mv, t),
    a = [];
  let i = n.start ? "^" : "";
  const o = [];
  for (const c of e) {
    const d = c.length ? [] : [90];
    n.strict && !c.length && (i += "/");
    for (let u = 0; u < c.length; u++) {
      const f = c[u];
      let v = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0) u || (i += "/"), (i += f.value.replace(gv, "\\$&")), (v += 40);
      else if (f.type === 1) {
        const { value: m, repeatable: p, optional: g, regexp: b } = f;
        o.push({ name: m, repeatable: p, optional: g });
        const h = b || Hc;
        if (h !== Hc) {
          v += 10;
          try {
            new RegExp(`(${h})`);
          } catch (x) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${h}): ` + x.message);
          }
        }
        let w = p ? `((?:${h})(?:/(?:${h}))*)` : `(${h})`;
        u || (w = g && c.length < 2 ? `(?:/${w})` : "/" + w),
          g && (w += "?"),
          (i += w),
          (v += 20),
          g && (v += -8),
          p && (v += -20),
          h === ".*" && (v += -50);
      }
      d.push(v);
    }
    a.push(d);
  }
  if (n.strict && n.end) {
    const c = a.length - 1;
    a[c][a[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (i += "/?"), n.end ? (i += "$") : n.strict && (i += "(?:/|$)");
  const r = new RegExp(i, n.sensitive ? "" : "i");
  function l(c) {
    const d = c.match(r),
      u = {};
    if (!d) return null;
    for (let f = 1; f < d.length; f++) {
      const v = d[f] || "",
        m = o[f - 1];
      u[m.name] = v && m.repeatable ? v.split("/") : v;
    }
    return u;
  }
  function s(c) {
    let d = "",
      u = !1;
    for (const f of e) {
      (!u || !d.endsWith("/")) && (d += "/"), (u = !1);
      for (const v of f)
        if (v.type === 0) d += v.value;
        else if (v.type === 1) {
          const { value: m, repeatable: p, optional: g } = v,
            b = m in c ? c[m] : "";
          if (Array.isArray(b) && !p)
            throw new Error(
              `Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`
            );
          const h = Array.isArray(b) ? b.join("/") : b;
          if (!h)
            if (g)
              f.length < 2 && e.length > 1 && (d.endsWith("/") ? (d = d.slice(0, -1)) : (u = !0));
            else throw new Error(`Missing required param "${m}"`);
          d += h;
        }
    }
    return d;
  }
  return { re: r, score: a, keys: o, parse: l, stringify: s };
}
function bv(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const a = t[n] - e[n];
    if (a) return a;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function yv(e, t) {
  let n = 0;
  const a = e.score,
    i = t.score;
  for (; n < a.length && n < i.length; ) {
    const o = bv(a[n], i[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(i.length - a.length) === 1) {
    if (Uc(a)) return 1;
    if (Uc(i)) return -1;
  }
  return i.length - a.length;
}
function Uc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const wv = { type: 0, value: "" },
  _v = /[a-zA-Z0-9_]/;
function xv(e) {
  if (!e) return [[]];
  if (e === "/") return [[wv]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(v) {
    throw new Error(`ERR (${n})/"${c}": ${v}`);
  }
  let n = 0,
    a = n;
  const i = [];
  let o;
  function r() {
    o && i.push(o), (o = []);
  }
  let l = 0,
    s,
    c = "",
    d = "";
  function u() {
    !c ||
      (n === 0
        ? o.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (s === "*" || s === "+") &&
            t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
          o.push({
            type: 1,
            value: c,
            regexp: d,
            repeatable: s === "*" || s === "+",
            optional: s === "*" || s === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function f() {
    c += s;
  }
  for (; l < e.length; ) {
    if (((s = e[l++]), s === "\\" && n !== 2)) {
      (a = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        s === "/" ? (c && u(), r()) : s === ":" ? (u(), (n = 1)) : f();
        break;
      case 4:
        f(), (n = a);
        break;
      case 1:
        s === "("
          ? (n = 2)
          : _v.test(s)
          ? f()
          : (u(), (n = 0), s !== "*" && s !== "?" && s !== "+" && l--);
        break;
      case 2:
        s === ")" ? (d[d.length - 1] == "\\" ? (d = d.slice(0, -1) + s) : (n = 3)) : (d += s);
        break;
      case 3:
        u(), (n = 0), s !== "*" && s !== "?" && s !== "+" && l--, (d = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), u(), r(), i;
}
function Av(e, t, n) {
  const a = vv(xv(e.path), n),
    i = Te(a, { record: e, parent: t, children: [], alias: [] });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function zf(e, t) {
  const n = [],
    a = new Map();
  t = Wc({ strict: !1, end: !0, sensitive: !1 }, t);
  function i(d) {
    return a.get(d);
  }
  function o(d, u, f) {
    const v = !f,
      m = Tv(d);
    m.aliasOf = f && f.record;
    const p = Wc(t, d),
      g = [m];
    if ("alias" in d) {
      const w = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const x of w)
        g.push(
          Te({}, m, {
            components: f ? f.record.components : m.components,
            path: x,
            aliasOf: f ? f.record : m,
          })
        );
    }
    let b, h;
    for (const w of g) {
      const { path: x } = w;
      if (u && x[0] !== "/") {
        const S = u.record.path,
          _ = S[S.length - 1] === "/" ? "" : "/";
        w.path = u.record.path + (x && _ + x);
      }
      if (
        ((b = Av(w, u, p)),
        f
          ? f.alias.push(b)
          : ((h = h || b), h !== b && h.alias.push(b), v && d.name && !Gc(b) && r(d.name)),
        "children" in m)
      ) {
        const S = m.children;
        for (let _ = 0; _ < S.length; _++) o(S[_], b, f && f.children[_]);
      }
      (f = f || b), s(b);
    }
    return h
      ? () => {
          r(h);
        }
      : mi;
  }
  function r(d) {
    if (Df(d)) {
      const u = a.get(d);
      u && (a.delete(d), n.splice(n.indexOf(u), 1), u.children.forEach(r), u.alias.forEach(r));
    } else {
      const u = n.indexOf(d);
      u > -1 &&
        (n.splice(u, 1),
        d.record.name && a.delete(d.record.name),
        d.children.forEach(r),
        d.alias.forEach(r));
    }
  }
  function l() {
    return n;
  }
  function s(d) {
    let u = 0;
    for (
      ;
      u < n.length && yv(d, n[u]) >= 0 && (d.record.path !== n[u].record.path || !$f(d, n[u]));

    )
      u++;
    n.splice(u, 0, d), d.record.name && !Gc(d) && a.set(d.record.name, d);
  }
  function c(d, u) {
    let f,
      v = {},
      m,
      p;
    if ("name" in d && d.name) {
      if (((f = a.get(d.name)), !f)) throw $a(1, { location: d });
      (p = f.record.name),
        (v = Te(
          Ev(
            u.params,
            f.keys.filter((h) => !h.optional).map((h) => h.name)
          ),
          d.params
        )),
        (m = f.stringify(v));
    } else if ("path" in d)
      (m = d.path), (f = n.find((h) => h.re.test(m))), f && ((v = f.parse(m)), (p = f.record.name));
    else {
      if (((f = u.name ? a.get(u.name) : n.find((h) => h.re.test(u.path))), !f))
        throw $a(1, { location: d, currentLocation: u });
      (p = f.record.name), (v = Te({}, u.params, d.params)), (m = f.stringify(v));
    }
    const g = [];
    let b = f;
    for (; b; ) g.unshift(b.record), (b = b.parent);
    return { name: p, path: m, params: v, matched: g, meta: Sv(g) };
  }
  return (
    e.forEach((d) => o(d)),
    { addRoute: o, resolve: c, removeRoute: r, getRoutes: l, getRecordMatcher: i }
  );
}
function Ev(e, t) {
  const n = {};
  for (const a of t) a in e && (n[a] = e[a]);
  return n;
}
function Tv(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: kv(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || {} : { default: e.component },
  };
}
function kv(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const a in e.components) t[a] = typeof n == "boolean" ? n : n[a];
  return t;
}
function Gc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Sv(e) {
  return e.reduce((t, n) => Te(t, n.meta), {});
}
function Wc(e, t) {
  const n = {};
  for (const a in e) n[a] = a in t ? t[a] : e[a];
  return n;
}
function $f(e, t) {
  return t.children.some((n) => n === e || $f(e, n));
}
const Ff = /#/g,
  Cv = /&/g,
  Ov = /\//g,
  Pv = /=/g,
  Iv = /\?/g,
  jf = /\+/g,
  Bv = /%5B/g,
  Mv = /%5D/g,
  Vf = /%5E/g,
  Lv = /%60/g,
  Yf = /%7B/g,
  Rv = /%7C/g,
  Hf = /%7D/g,
  Dv = /%20/g;
function _l(e) {
  return encodeURI("" + e)
    .replace(Rv, "|")
    .replace(Bv, "[")
    .replace(Mv, "]");
}
function Nv(e) {
  return _l(e).replace(Yf, "{").replace(Hf, "}").replace(Vf, "^");
}
function Es(e) {
  return _l(e)
    .replace(jf, "%2B")
    .replace(Dv, "+")
    .replace(Ff, "%23")
    .replace(Cv, "%26")
    .replace(Lv, "`")
    .replace(Yf, "{")
    .replace(Hf, "}")
    .replace(Vf, "^");
}
function zv(e) {
  return Es(e).replace(Pv, "%3D");
}
function $v(e) {
  return _l(e).replace(Ff, "%23").replace(Iv, "%3F");
}
function Fv(e) {
  return e == null ? "" : $v(e).replace(Ov, "%2F");
}
function zo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Uf(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const a = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let i = 0; i < a.length; ++i) {
    const o = a[i].replace(jf, " "),
      r = o.indexOf("="),
      l = zo(r < 0 ? o : o.slice(0, r)),
      s = r < 0 ? null : zo(o.slice(r + 1));
    if (l in t) {
      let c = t[l];
      Array.isArray(c) || (c = t[l] = [c]), c.push(s);
    } else t[l] = s;
  }
  return t;
}
function Ts(e) {
  let t = "";
  for (let n in e) {
    const a = e[n];
    if (((n = zv(n)), a == null)) {
      a !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Array.isArray(a) ? a.map((o) => o && Es(o)) : [a && Es(a)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function jv(e) {
  const t = {};
  for (const n in e) {
    const a = e[n];
    a !== void 0 &&
      (t[n] = Array.isArray(a)
        ? a.map((i) => (i == null ? null : "" + i))
        : a == null
        ? a
        : "" + a);
  }
  return t;
}
function ei() {
  let e = [];
  function t(a) {
    return (
      e.push(a),
      () => {
        const i = e.indexOf(a);
        i > -1 && e.splice(i, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function Gf(e, t, n) {
  const a = () => {
    e[t].delete(n);
  };
  fa(a),
    dl(a),
    cl(() => {
      e[t].add(n);
    }),
    e[t].add(n);
}
function Vv(e) {
  const t = Fe(lr, {}).value;
  !t || Gf(t, "leaveGuards", e);
}
function Yv(e) {
  const t = Fe(lr, {}).value;
  !t || Gf(t, "updateGuards", e);
}
function gn(e, t, n, a, i) {
  const o = a && (a.enterCallbacks[i] = a.enterCallbacks[i] || []);
  return () =>
    new Promise((r, l) => {
      const s = (u) => {
          u === !1
            ? l($a(4, { from: n, to: t }))
            : u instanceof Error
            ? l(u)
            : hv(u)
            ? l($a(2, { from: t, to: u }))
            : (o && a.enterCallbacks[i] === o && typeof u == "function" && o.push(u), r());
        },
        c = e.call(a && a.instances[i], t, n, s);
      let d = Promise.resolve(c);
      e.length < 3 && (d = d.then(s)), d.catch((u) => l(u));
    });
}
function $r(e, t, n, a) {
  const i = [];
  for (const o of e)
    for (const r in o.components) {
      let l = o.components[r];
      if (!(t !== "beforeRouteEnter" && !o.instances[r]))
        if (Hv(l)) {
          const c = (l.__vccOpts || l)[t];
          c && i.push(gn(c, n, a, o, r));
        } else {
          let s = l();
          i.push(() =>
            s.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${r}" at "${o.path}"`)
                );
              const d = qg(c) ? c.default : c;
              o.components[r] = d;
              const f = (d.__vccOpts || d)[t];
              return f && gn(f, n, a, o, r)();
            })
          );
        }
    }
  return i;
}
function Hv(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ks(e) {
  const t = Fe(Hi),
    n = Fe(cr),
    a = Oe(() => t.resolve(ge(e.to))),
    i = Oe(() => {
      const { matched: s } = a.value,
        { length: c } = s,
        d = s[c - 1],
        u = n.matched;
      if (!d || !u.length) return -1;
      const f = u.findIndex(Na.bind(null, d));
      if (f > -1) return f;
      const v = Kc(s[c - 2]);
      return c > 1 && Kc(d) === v && u[u.length - 1].path !== v
        ? u.findIndex(Na.bind(null, s[c - 2]))
        : f;
    }),
    o = Oe(() => i.value > -1 && Wv(n.params, a.value.params)),
    r = Oe(() => i.value > -1 && i.value === n.matched.length - 1 && Bf(n.params, a.value.params));
  function l(s = {}) {
    return Gv(s) ? t[ge(e.replace) ? "replace" : "push"](ge(e.to)).catch(mi) : Promise.resolve();
  }
  return { route: a, href: Oe(() => a.value.href), isActive: o, isExactActive: r, navigate: l };
}
const Uv = Ue({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: ks,
    setup(e, { slots: t }) {
      const n = Ct(ks(e)),
        { options: a } = Fe(Hi),
        i = Oe(() => ({
          [Qc(e.activeClass, a.linkActiveClass, "router-link-active")]: n.isActive,
          [Qc(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]:
            n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : Ze(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value,
              },
              o
            );
      };
    },
  }),
  Wf = Uv;
function Gv(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Wv(e, t) {
  for (const n in t) {
    const a = t[n],
      i = e[n];
    if (typeof a == "string") {
      if (a !== i) return !1;
    } else if (!Array.isArray(i) || i.length !== a.length || a.some((o, r) => o !== i[r]))
      return !1;
  }
  return !0;
}
function Kc(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Qc = (e, t, n) => (e != null ? e : t != null ? t : n),
  Kv = Ue({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const a = Fe(No),
        i = Oe(() => e.route || a.value),
        o = Fe(_s, 0),
        r = Oe(() => i.value.matched[o]);
      An(_s, o + 1), An(lr, r), An(No, i);
      const l = me();
      return (
        Nt(
          () => [l.value, r.value, e.name],
          ([s, c, d], [u, f, v]) => {
            c &&
              ((c.instances[d] = s),
              f &&
                f !== c &&
                s &&
                s === u &&
                (c.leaveGuards.size || (c.leaveGuards = f.leaveGuards),
                c.updateGuards.size || (c.updateGuards = f.updateGuards))),
              s && c && (!f || !Na(c, f) || !u) && (c.enterCallbacks[d] || []).forEach((m) => m(s));
          },
          { flush: "post" }
        ),
        () => {
          const s = i.value,
            c = r.value,
            d = c && c.components[e.name],
            u = e.name;
          if (!d) return Xc(n.default, { Component: d, route: s });
          const f = c.props[e.name],
            v = f ? (f === !0 ? s.params : typeof f == "function" ? f(s) : f) : null,
            p = Ze(
              d,
              Te({}, v, t, {
                onVnodeUnmounted: (g) => {
                  g.component.isUnmounted && (c.instances[u] = null);
                },
                ref: l,
              })
            );
          return Xc(n.default, { Component: p, route: s }) || p;
        }
      );
    },
  });
function Xc(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Kf = Kv;
function Qf(e) {
  const t = zf(e.routes, e),
    n = e.parseQuery || Uf,
    a = e.stringifyQuery || Ts,
    i = e.history,
    o = ei(),
    r = ei(),
    l = ei(),
    s = mu(Ht);
  let c = Ht;
  wa &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const d = Dr.bind(null, (M) => "" + M),
    u = Dr.bind(null, Fv),
    f = Dr.bind(null, zo);
  function v(M, Y) {
    let F, W;
    return Df(M) ? ((F = t.getRecordMatcher(M)), (W = Y)) : (W = M), t.addRoute(W, F);
  }
  function m(M) {
    const Y = t.getRecordMatcher(M);
    Y && t.removeRoute(Y);
  }
  function p() {
    return t.getRoutes().map((M) => M.record);
  }
  function g(M) {
    return !!t.getRecordMatcher(M);
  }
  function b(M, Y) {
    if (((Y = Te({}, Y || s.value)), typeof M == "string")) {
      const re = Nr(n, M, Y.path),
        y = t.resolve({ path: re.path }, Y),
        E = i.createHref(re.fullPath);
      return Te(re, y, { params: f(y.params), hash: zo(re.hash), redirectedFrom: void 0, href: E });
    }
    let F;
    if ("path" in M) F = Te({}, M, { path: Nr(n, M.path, Y.path).path });
    else {
      const re = Te({}, M.params);
      for (const y in re) re[y] == null && delete re[y];
      (F = Te({}, M, { params: u(M.params) })), (Y.params = u(Y.params));
    }
    const W = t.resolve(F, Y),
      fe = M.hash || "";
    W.params = d(f(W.params));
    const be = ev(a, Te({}, M, { hash: Nv(fe), path: W.path })),
      ce = i.createHref(be);
    return Te({ fullPath: be, hash: fe, query: a === Ts ? jv(M.query) : M.query || {} }, W, {
      redirectedFrom: void 0,
      href: ce,
    });
  }
  function h(M) {
    return typeof M == "string" ? Nr(n, M, s.value.path) : Te({}, M);
  }
  function w(M, Y) {
    if (c !== M) return $a(8, { from: Y, to: M });
  }
  function x(M) {
    return C(M);
  }
  function S(M) {
    return x(Te(h(M), { replace: !0 }));
  }
  function _(M) {
    const Y = M.matched[M.matched.length - 1];
    if (Y && Y.redirect) {
      const { redirect: F } = Y;
      let W = typeof F == "function" ? F(M) : F;
      return (
        typeof W == "string" &&
          ((W = W.includes("?") || W.includes("#") ? (W = h(W)) : { path: W }), (W.params = {})),
        Te({ query: M.query, hash: M.hash, params: M.params }, W)
      );
    }
  }
  function C(M, Y) {
    const F = (c = b(M)),
      W = s.value,
      fe = M.state,
      be = M.force,
      ce = M.replace === !0,
      re = _(F);
    if (re) return C(Te(h(re), { state: fe, force: be, replace: ce }), Y || F);
    const y = F;
    y.redirectedFrom = Y;
    let E;
    return (
      !be && tv(a, W, F) && ((E = $a(16, { to: y, from: W })), j(W, W, !0, !1)),
      (E ? Promise.resolve(E) : L(y, W))
        .catch((I) => (Ut(I) ? (Ut(I, 2) ? I : he(I)) : ee(I, y, W)))
        .then((I) => {
          if (I) {
            if (Ut(I, 2)) return C(Te(h(I.to), { state: fe, force: be, replace: ce }), Y || y);
          } else I = k(y, W, !0, ce, fe);
          return P(y, W, I), I;
        })
    );
  }
  function T(M, Y) {
    const F = w(M, Y);
    return F ? Promise.reject(F) : Promise.resolve();
  }
  function L(M, Y) {
    let F;
    const [W, fe, be] = Qv(M, Y);
    F = $r(W.reverse(), "beforeRouteLeave", M, Y);
    for (const re of W)
      re.leaveGuards.forEach((y) => {
        F.push(gn(y, M, Y));
      });
    const ce = T.bind(null, M, Y);
    return (
      F.push(ce),
      ga(F)
        .then(() => {
          F = [];
          for (const re of o.list()) F.push(gn(re, M, Y));
          return F.push(ce), ga(F);
        })
        .then(() => {
          F = $r(fe, "beforeRouteUpdate", M, Y);
          for (const re of fe)
            re.updateGuards.forEach((y) => {
              F.push(gn(y, M, Y));
            });
          return F.push(ce), ga(F);
        })
        .then(() => {
          F = [];
          for (const re of M.matched)
            if (re.beforeEnter && !Y.matched.includes(re))
              if (Array.isArray(re.beforeEnter))
                for (const y of re.beforeEnter) F.push(gn(y, M, Y));
              else F.push(gn(re.beforeEnter, M, Y));
          return F.push(ce), ga(F);
        })
        .then(
          () => (
            M.matched.forEach((re) => (re.enterCallbacks = {})),
            (F = $r(be, "beforeRouteEnter", M, Y)),
            F.push(ce),
            ga(F)
          )
        )
        .then(() => {
          F = [];
          for (const re of r.list()) F.push(gn(re, M, Y));
          return F.push(ce), ga(F);
        })
        .catch((re) => (Ut(re, 8) ? re : Promise.reject(re)))
    );
  }
  function P(M, Y, F) {
    for (const W of l.list()) W(M, Y, F);
  }
  function k(M, Y, F, W, fe) {
    const be = w(M, Y);
    if (be) return be;
    const ce = Y === Ht,
      re = wa ? history.state : {};
    F &&
      (W || ce
        ? i.replace(M.fullPath, Te({ scroll: ce && re && re.scroll }, fe))
        : i.push(M.fullPath, fe)),
      (s.value = M),
      j(M, Y, F, ce),
      he();
  }
  let A;
  function R() {
    A ||
      (A = i.listen((M, Y, F) => {
        const W = b(M),
          fe = _(W);
        if (fe) {
          C(Te(fe, { replace: !0 }), W).catch(mi);
          return;
        }
        c = W;
        const be = s.value;
        wa && sv(Vc(be.fullPath, F.delta), dr()),
          L(W, be)
            .catch((ce) =>
              Ut(ce, 12)
                ? ce
                : Ut(ce, 2)
                ? (C(ce.to, W)
                    .then((re) => {
                      Ut(re, 20) && !F.delta && F.type === za.pop && i.go(-1, !1);
                    })
                    .catch(mi),
                  Promise.reject())
                : (F.delta && i.go(-F.delta, !1), ee(ce, W, be))
            )
            .then((ce) => {
              (ce = ce || k(W, be, !1)),
                ce &&
                  (F.delta ? i.go(-F.delta, !1) : F.type === za.pop && Ut(ce, 20) && i.go(-1, !1)),
                P(W, be, ce);
            })
            .catch(mi);
      }));
  }
  let O = ei(),
    Q = ei(),
    $;
  function ee(M, Y, F) {
    he(M);
    const W = Q.list();
    return W.length ? W.forEach((fe) => fe(M, Y, F)) : console.error(M), Promise.reject(M);
  }
  function ae() {
    return $ && s.value !== Ht
      ? Promise.resolve()
      : new Promise((M, Y) => {
          O.add([M, Y]);
        });
  }
  function he(M) {
    return $ || (($ = !M), R(), O.list().forEach(([Y, F]) => (M ? F(M) : Y())), O.reset()), M;
  }
  function j(M, Y, F, W) {
    const { scrollBehavior: fe } = e;
    if (!wa || !fe) return Promise.resolve();
    const be =
      (!F && lv(Vc(M.fullPath, 0))) || ((W || !F) && history.state && history.state.scroll) || null;
    return Lt()
      .then(() => fe(M, Y, be))
      .then((ce) => ce && rv(ce))
      .catch((ce) => ee(ce, M, Y));
  }
  const J = (M) => i.go(M);
  let D;
  const q = new Set();
  return {
    currentRoute: s,
    addRoute: v,
    removeRoute: m,
    hasRoute: g,
    getRoutes: p,
    resolve: b,
    options: e,
    push: x,
    replace: S,
    go: J,
    back: () => J(-1),
    forward: () => J(1),
    beforeEach: o.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: Q.add,
    isReady: ae,
    install(M) {
      const Y = this;
      M.component("RouterLink", Wf),
        M.component("RouterView", Kf),
        (M.config.globalProperties.$router = Y),
        Object.defineProperty(M.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => ge(s),
        }),
        wa && !D && s.value === Ht && ((D = !0), x(i.location).catch((fe) => {}));
      const F = {};
      for (const fe in Ht) F[fe] = Oe(() => s.value[fe]);
      M.provide(Hi, Y), M.provide(cr, Ct(F)), M.provide(No, s);
      const W = M.unmount;
      q.add(M),
        (M.unmount = function () {
          q.delete(M),
            q.size < 1 && ((c = Ht), A && A(), (A = null), (s.value = Ht), (D = !1), ($ = !1)),
            W();
        });
    },
  };
}
function ga(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function Qv(e, t) {
  const n = [],
    a = [],
    i = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < o; r++) {
    const l = t.matched[r];
    l && (e.matched.find((c) => Na(c, l)) ? a.push(l) : n.push(l));
    const s = e.matched[r];
    s && (t.matched.find((c) => Na(c, s)) || i.push(s));
  }
  return [n, a, i];
}
function Xv() {
  return Fe(Hi);
}
function qv() {
  return Fe(cr);
}
var Zv = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      get NavigationFailureType() {
        return As;
      },
      RouterLink: Wf,
      RouterView: Kf,
      START_LOCATION: Ht,
      createMemoryHistory: fv,
      createRouter: Qf,
      createRouterMatcher: zf,
      createWebHashHistory: pv,
      createWebHistory: wl,
      isNavigationFailure: Ut,
      matchedRouteKey: lr,
      onBeforeRouteLeave: Vv,
      onBeforeRouteUpdate: Yv,
      parseQuery: Uf,
      routeLocationKey: cr,
      routerKey: Hi,
      routerViewLocationKey: No,
      stringifyQuery: Ts,
      useLink: ks,
      useRoute: qv,
      useRouter: Xv,
      viewDepthKey: _s,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
const lo = "\u57CE\u5B89\u660E\u65E5\u65B0\u5BA3\u8A00";
var Ne = {
    meta: { title: lo, description: lo, keywords: lo },
    address1: "",
    address2: "",
    address: "\u53F0\u5357\u5E02\u5584\u5316\u5340\u81EA\u7531\u8DEF17\u865F",
    googleSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.0807364212137!2d120.29100030000001!3d23.130724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7b8729ab13cb%3A0x4a6ed60df5569dda!2zNzQx5Y-w5Y2X5biC5ZaE5YyW5Y2A6Ieq55Sx6LevMTfomZ8!5e0!3m2!1szh-TW!2stw!4v1731401146839!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/RDRggBWHMNnyKNiA6",
    phone: "06-337-6688",
    fbLink: "https://www.facebook.com/61565692594495/",
    fbMessage: "https://m.me/61565692594495/",
    caseName: lo,
    houseInfos: [],
    gtmCode: ["GTM-NFZM5443"],
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN",
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s",
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
      title: "\u6211\u60F3\u4E86\u89E3",
      subTitle:
        "\u6B61\u8FCE\u9810\u7D04\uFF0C\u5C07\u6709\u5C08\u4EBA\u8207\u60A8\u806F\u7D61\uFF0C\u6211\u5011\u5C07\u7AED\u8AA0\u70BA\u60A8\u670D\u52D9",
    },
    room_type: ["\u5169\u623F", "\u4E09\u623F"],
    navList: [
      { name: "\u5927\u57CE\u4E4B\u5883", target: ".s3", offset: "" },
      { name: "\u5927\u5883\u7F8E\u5B85", target: ".s5", offset: "" },
      { name: "\u5DE5\u85DD\u56B4\u9078", target: ".s7", offset: "" },
      { name: "\u9810\u7D04\u8CDE\u5C4B", target: ".order", offset: "" },
    ],
  },
  Jv = "/lixin_ca3/dist/assets/title1.8eeb070d.png",
  eb = "/lixin_ca3/dist/assets/title2.e7a9f563.png",
  tb = "/lixin_ca3/dist/assets/img.c42bd30c.png",
  nb = "/lixin_ca3/dist/assets/en.84a4f95e.png",
  ab = "/lixin_ca3/dist/assets/logo.da5d899e.png",
  ib = "/lixin_ca3/dist/assets/slogo.1433bd9f.png";
const ob = pa(
    '<div class="ani_gray" data-v-9f8bc9cc></div><img src="' +
      Jv +
      '" class="title1" data-aos="fade" data-aos-delay="400" data-aos-duration="2000" data-v-9f8bc9cc><img src="' +
      eb +
      '" class="title2" data-aos="fade" data-aos-delay="700" data-aos-duration="2000" data-v-9f8bc9cc><div class="box" data-aos="fade" data-aos-delay="0" data-v-9f8bc9cc><img src="' +
      tb +
      '" data-aos="zoom-in" data-aos-delay="1500" data-v-9f8bc9cc></div><img src="' +
      nb +
      '" class="en" data-aos="zoom-in" data-aos-delay="1500" data-v-9f8bc9cc><img src="' +
      ab +
      '" class="logo" data-aos="zoom-in" data-aos-delay="1500" data-v-9f8bc9cc><img src="' +
      ib +
      '" class="slogo" data-aos="zoom-in" data-aos-delay="1500" data-v-9f8bc9cc>',
    7
  ),
  rb = [ob],
  sb = {
    __name: "s1",
    emits: { el_height: null },
    setup(e, { emit: t }) {
      const n = me(null);
      return (
        at(() => {
          setTimeout(() => {
            t("sec_height", n.value.offsetHeight);
          }, 1e3);
        }),
        (a, i) => (
          K(),
          ie("article", { ref_key: "dom", ref: n, class: "s1 overflow-hidden", id: "s1" }, rb, 512)
        )
      );
    },
  };
var lb = _t(sb, [["__scopeId", "data-v-9f8bc9cc"]]),
  cb = "/lixin_ca3/dist/assets/en.9fa0ec59.png",
  db = "/lixin_ca3/dist/assets/txt.0b0f6908.png",
  ub = "/lixin_ca3/dist/assets/1.1761779e.png",
  fb = "/lixin_ca3/dist/assets/2.3d67080d.png",
  pb = "/lixin_ca3/dist/assets/3.eca42533.png",
  hb = "/lixin_ca3/dist/assets/4.916b275f.png",
  mb = "/lixin_ca3/dist/assets/logo.2001d151.png";
const gb = {
  __name: "hr",
  props: { propsColor: { type: String, default: "52, 168, 222" } },
  setup(e) {
    const t = e;
    return (n, a) => (
      K(),
      ie(
        "div",
        {
          style: an(
            `background-image: repeating-linear-gradient(to right, rgba(${t.propsColor},0%), rgba(${t.propsColor},0%) 15%, rgba(${t.propsColor},100%) 40%, rgba(${t.propsColor},100%) 60%, rgba(${t.propsColor},0%) 85%, rgba(${t.propsColor},0%) 100%)`
          ),
        },
        null,
        4
      )
    );
  },
};
var Ua = _t(gb, [["__scopeId", "data-v-895b394e"]]);
const Xf = (e) => (on("data-v-5406c019"), (e = e()), rn(), e),
  vb = { class: "s2" },
  bb = { class: "tbox" },
  yb = Xf(() => B("img", { "data-aos": "fade-up", src: cb, class: "en" }, null, -1)),
  wb = Xf(() => B("img", { "data-aos": "fade-up", src: db, class: "txt" }, null, -1)),
  _b = pa(
    '<div class="pbox" data-v-5406c019><img data-aos="fade-up" src="' +
      ub +
      '" data-v-5406c019><img data-aos="fade-up" data-aos-delay="300" src="' +
      fb +
      '" data-v-5406c019><img data-aos="fade-up" data-aos-delay="600" src="' +
      pb +
      '" data-v-5406c019><img data-aos="fade-up" data-aos-delay="900" src="' +
      hb +
      '" data-v-5406c019></div><img data-aos="fade-up" data-aos-delay="1200" class="logo" src="' +
      mb +
      '" data-v-5406c019>',
    2
  ),
  xb = {
    __name: "s2",
    setup(e) {
      const t = Ge().appContext.config.globalProperties;
      return (
        Oe(() => t.isMobile()),
        (n, a) => (
          K(),
          ie("article", vb, [
            B("div", bb, [
              yb,
              oe(Ua, { "data-aos": "fade-up", class: "hr", "props-color": "255,255,255" }),
              wb,
            ]),
            _b,
          ])
        )
      );
    },
  };
var Ab = _t(xb, [["__scopeId", "data-v-5406c019"]]),
  Eb = "/lixin_ca3/dist/assets/logo.86053003.png",
  Tb = "/lixin_ca3/dist/assets/txt.e2bc07ed.png",
  kb = "/lixin_ca3/dist/assets/1.542786b8.png",
  Sb = "/lixin_ca3/dist/assets/2.570dcbc0.png",
  Cb = "/lixin_ca3/dist/assets/3.76d85dbc.png",
  Ob = "/lixin_ca3/dist/assets/4.97fddaa2.png";
const qf = (e) => (on("data-v-655a95fe"), (e = e()), rn(), e),
  Pb = { class: "s3" },
  Ib = { class: "tbox" },
  Bb = qf(() => B("img", { "data-aos": "fade-up", src: Eb, class: "logo" }, null, -1)),
  Mb = qf(() => B("img", { "data-aos": "fade-up", src: Tb, class: "txt" }, null, -1)),
  Lb = pa(
    '<div class="pbox" data-v-655a95fe><img data-aos="fade-up" src="' +
      kb +
      '" data-v-655a95fe><img data-aos="fade-up" data-aos-delay="300" src="' +
      Sb +
      '" data-v-655a95fe><img data-aos="fade-up" data-aos-delay="600" src="' +
      Cb +
      '" data-v-655a95fe><img data-aos="fade-up" data-aos-delay="900" src="' +
      Ob +
      '" data-v-655a95fe></div>',
    1
  ),
  Rb = {
    __name: "s3",
    setup(e) {
      return (t, n) => (
        K(),
        ie("article", Pb, [
          B("div", Ib, [Bb, Mb, oe(Ua, { "data-aos": "fade-up", class: "hr" })]),
          Lb,
        ])
      );
    },
  };
var Db = _t(Rb, [["__scopeId", "data-v-655a95fe"]]),
  Nb =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAq0AAABJCAMAAAAgyO8kAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANXRSTlMADzoJHxcFUUpBJcMbLKafXzW1vIJ0bZiJMhPJrGZX39h60OYo7pGQLnz10bBFnPyvlVrnzODSzIoAAAP4SURBVHja7d3rdppAFIbhPcMwwggingFN1JIGk2iTtPd/bd1j03NMFCvM6vqeX17Au1jIHDYdwSOAixP0D+hcIFe4OE/kms4W+agVLs8TfkTnUgq1QgO83FeKzmMM16oJ4MI84Stj6BxlbGslgIuztcalptpMFpsoJ4AG5FxraqiuUtpaCaAREdcqS6onDrlWhZdWaIhWXGsYUx1lwLWWiBUao0uuNaiTa9zhWmPECg3SFdfaOT3X6oprzRArNEqnXOtVRafJ+lyrxLIANMyTXGs/o1OkC641RKzQOC/kWhcpHU9OuNYAsUILvIBrncjjYx1zrR0sYUErRIdrHctjY11xrc9YwoKW5M9c6+a4XLMR19pHrNCavD8Zr0YZvS+d2VoVAbQmsrXOUnpPdWtrLQmgReV4M5p9lO9FfWtrjQmgVbGt9Tait6inKdeaEkDLKq51+qToMLVLuNaQAFoXcq3J7nCu/rTHtW4JwAFbrrWX+Idi3c251oAAnBBwrY8HcvV7A64VsYIzgqQ3H/T812KdD7nWDgE4o8O1Dud/5xo9dLlWxApO6XCt3Qf/z1gHBdfaJwCn9LnWYhD9HuvwnmsdE4Bjxlzr/fDXXEV3uS66iBUcNO4W62VX/Ix1eM21rgjAQavifnk9FD+erB+ul/c9AnDSlGv9/P3p2r3hWuc4KgCOEvPl9YebQhDb3XGtD4gVnCUeuNa7HREln7jWLmIFh4nB55u7TwmJta11gFrBYWLwgWtd848v9k3giQCc9WTfBL4I2+3+X9aIABw14m8CN11BllhzresNAThps+ZvAmtF30QFVgfAWZOCay0i+i7ar7xiTws4qL9feY1+29XCtQ6fCcAxzy+7Wv7eMXhFAE65+rZjELuxwX0vu7Fx0gXctz/p8urBLPOIU4TglCDpPQ4eDb3G9LjWKe6+AEeE04STNPQ6lXCtt7hXCJyQ7m+/UHSI4lo/zjICaF02s7WWdJhM7K1tFQG0rBrZWiW9RdpaV5jtCi3zN7ZWSW+TttYJ7nGHVuWTI24bZiHXOl4gV2hRvhhzrQG9b4spGdAubz8lY0vHCLnWRQez3aAlXsdOIApPme6GUYTQDi/YT3c7bXLmFrlCC7ztfnImphKD+16mEmPiO7ivxsR3JrnWMNUE0CCdhlyrpFOlXKuMkSs0SFeSa03pdBnXmhoCaIzJuNaM6qhCmcUYTwyNUXEqw6zuOwTXanwCaERk4kymuvZbRBobhTVYaESuTJxWmurSJdfq4zsWNMDzudZS0xlKE/kCHwbg4nTOtZrzUtNK+QIPV7g4T/hK6XOTj1ArNMDLfV/T2XLUCpfniZz+BcQKDcAwAfivfAVGPkUjCvtQogAAAABJRU5ErkJggg==",
  zb = "/lixin_ca3/dist/assets/map.e28996c8.png";
/*!
 * better-scroll / core
 * (c) 2016-2021 ustbhuangyi
 * Released under the MIT License.
 */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Ss = function (
  e,
  t
) {
  return (
    (Ss =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, a) {
          n.__proto__ = a;
        }) ||
      function (n, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
      }),
    Ss(e, t)
  );
};
function ur(e, t) {
  Ss(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var Ti = function () {
  return (
    (Ti =
      Object.assign ||
      function (t) {
        for (var n, a = 1, i = arguments.length; a < i; a++) {
          n = arguments[a];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    Ti.apply(this, arguments)
  );
};
function Zf() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
  for (var a = Array(e), i = 0, t = 0; t < n; t++)
    for (var o = arguments[t], r = 0, l = o.length; r < l; r++, i++) a[i] = o[r];
  return a;
}
var $b = [
  { sourceKey: "scroller.scrollBehaviorX.currentPos", key: "x" },
  { sourceKey: "scroller.scrollBehaviorY.currentPos", key: "y" },
  { sourceKey: "scroller.scrollBehaviorX.hasScroll", key: "hasHorizontalScroll" },
  { sourceKey: "scroller.scrollBehaviorY.hasScroll", key: "hasVerticalScroll" },
  { sourceKey: "scroller.scrollBehaviorX.contentSize", key: "scrollerWidth" },
  { sourceKey: "scroller.scrollBehaviorY.contentSize", key: "scrollerHeight" },
  { sourceKey: "scroller.scrollBehaviorX.maxScrollPos", key: "maxScrollX" },
  { sourceKey: "scroller.scrollBehaviorY.maxScrollPos", key: "maxScrollY" },
  { sourceKey: "scroller.scrollBehaviorX.minScrollPos", key: "minScrollX" },
  { sourceKey: "scroller.scrollBehaviorY.minScrollPos", key: "minScrollY" },
  { sourceKey: "scroller.scrollBehaviorX.movingDirection", key: "movingDirectionX" },
  { sourceKey: "scroller.scrollBehaviorY.movingDirection", key: "movingDirectionY" },
  { sourceKey: "scroller.scrollBehaviorX.direction", key: "directionX" },
  { sourceKey: "scroller.scrollBehaviorY.direction", key: "directionY" },
  { sourceKey: "scroller.actions.enabled", key: "enabled" },
  { sourceKey: "scroller.animater.pending", key: "pending" },
  { sourceKey: "scroller.animater.stop", key: "stop" },
  { sourceKey: "scroller.scrollTo", key: "scrollTo" },
  { sourceKey: "scroller.scrollBy", key: "scrollBy" },
  { sourceKey: "scroller.scrollToElement", key: "scrollToElement" },
  { sourceKey: "scroller.resetPosition", key: "resetPosition" },
];
function wo(e) {
  console.error("[BScroll warn]: " + e);
}
var Vt = typeof window != "undefined",
  Fa = Vt && navigator.userAgent.toLowerCase(),
  Fb = !!(Fa && /wechatdevtools/.test(Fa)),
  jb = Fa && Fa.indexOf("android") > 0,
  Vb = (function () {
    if (typeof Fa == "string") {
      var e = /os (\d\d?_\d(_\d)?)/,
        t = e.exec(Fa);
      if (!t) return !1;
      var n = t[1].split("_").map(function (a) {
        return parseInt(a, 10);
      });
      return n[0] === 13 && n[1] >= 4;
    }
    return !1;
  })(),
  Jf = !1;
if (Vt) {
  var Yb = "test-passive";
  try {
    var qc = {};
    Object.defineProperty(qc, "passive", {
      get: function () {
        Jf = !0;
      },
    }),
      window.addEventListener(Yb, function () {}, qc);
  } catch {}
}
function Xn() {
  return window.performance && window.performance.now && window.performance.timing
    ? window.performance.now() + window.performance.timing.navigationStart
    : +new Date();
}
var Cs = function (e, t) {
  for (var n in t) e[n] = t[n];
  return e;
};
function Os(e) {
  return e == null;
}
function Zc(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var xl = Vt && document.createElement("div").style,
  Sa = (function () {
    if (!Vt) return !1;
    for (
      var e = [
          { key: "standard", value: "transform" },
          { key: "webkit", value: "webkitTransform" },
          { key: "Moz", value: "MozTransform" },
          { key: "O", value: "OTransform" },
          { key: "ms", value: "msTransform" },
        ],
        t = 0,
        n = e;
      t < n.length;
      t++
    ) {
      var a = n[t];
      if (xl[a.value] !== void 0) return a.key;
    }
    return !1;
  })();
function Gt(e) {
  return Sa === !1
    ? e
    : Sa === "standard"
    ? e === "transitionEnd"
      ? "transitionend"
      : e
    : Sa + e.charAt(0).toUpperCase() + e.substr(1);
}
function ep(e) {
  return typeof e == "string" ? document.querySelector(e) : e;
}
function Hb(e, t, n, a) {
  var i = Jf ? { passive: !1, capture: !!a } : !!a;
  e.addEventListener(t, n, i);
}
function Ub(e, t, n, a) {
  e.removeEventListener(t, n, { capture: !!a });
}
function Jc(e) {
  for (var t = 0, n = 0; e; ) (t -= e.offsetLeft), (n -= e.offsetTop), (e = e.offsetParent);
  return { left: t, top: n };
}
Sa && Sa !== "standard" && "" + Sa.toLowerCase();
var Gb = Gt("transform"),
  tp = Gt("transition"),
  Wb = Vt && Gt("perspective") in xl,
  ed = Vt && ("ontouchstart" in window || Fb),
  Kb = Vt && tp in xl,
  Yn = {
    transform: Gb,
    transition: tp,
    transitionTimingFunction: Gt("transitionTimingFunction"),
    transitionDuration: Gt("transitionDuration"),
    transitionDelay: Gt("transitionDelay"),
    transformOrigin: Gt("transformOrigin"),
    transitionEnd: Gt("transitionEnd"),
    transitionProperty: Gt("transitionProperty"),
  },
  Fr = {
    touchstart: 1,
    touchmove: 1,
    touchend: 1,
    touchcancel: 1,
    mousedown: 2,
    mousemove: 2,
    mouseup: 2,
  };
function td(e) {
  if (e instanceof window.SVGElement) {
    var t = e.getBoundingClientRect();
    return { top: t.top, left: t.left, width: t.width, height: t.height };
  } else
    return { top: e.offsetTop, left: e.offsetLeft, width: e.offsetWidth, height: e.offsetHeight };
}
function ki(e, t) {
  for (var n in t) if (t[n].test(e[n])) return !0;
  return !1;
}
var Qb = ki;
function Xb(e, t) {
  var n = document.createEvent("Event");
  n.initEvent(t, !0, !0), (n.pageX = e.pageX), (n.pageY = e.pageY), e.target.dispatchEvent(n);
}
function np(e, t) {
  t === void 0 && (t = "click");
  var n;
  e.type === "mouseup"
    ? (n = e)
    : (e.type === "touchend" || e.type === "touchcancel") && (n = e.changedTouches[0]);
  var a = {};
  n &&
    ((a.screenX = n.screenX || 0),
    (a.screenY = n.screenY || 0),
    (a.clientX = n.clientX || 0),
    (a.clientY = n.clientY || 0));
  var i,
    o = !0,
    r = !0,
    l = e.ctrlKey,
    s = e.shiftKey,
    c = e.altKey,
    d = e.metaKey,
    u = { ctrlKey: l, shiftKey: s, altKey: c, metaKey: d };
  if (typeof MouseEvent != "undefined")
    try {
      i = new MouseEvent(t, Cs(Ti({ bubbles: o, cancelable: r }, u), a));
    } catch {
      f();
    }
  else f();
  function f() {
    (i = document.createEvent("Event")), i.initEvent(t, o, r), Cs(i, a);
  }
  (i.forwardedTouchEvent = !0), (i._constructed = !0), e.target.dispatchEvent(i);
}
function qb(e) {
  np(e, "dblclick");
}
var zn = {
    swipe: {
      style: "cubic-bezier(0.23, 1, 0.32, 1)",
      fn: function (e) {
        return 1 + --e * e * e * e * e;
      },
    },
    swipeBounce: {
      style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      fn: function (e) {
        return e * (2 - e);
      },
    },
    bounce: {
      style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
      fn: function (e) {
        return 1 - --e * e * e * e;
      },
    },
  },
  Zb = 1e3 / 60,
  vn = Vt && window;
function ap() {}
var ip = (function () {
    return Vt
      ? vn.requestAnimationFrame ||
          vn.webkitRequestAnimationFrame ||
          vn.mozRequestAnimationFrame ||
          vn.oRequestAnimationFrame ||
          function (e) {
            return window.setTimeout(e, e.interval || Zb);
          }
      : ap;
  })(),
  ea = (function () {
    return Vt
      ? vn.cancelAnimationFrame ||
          vn.webkitCancelAnimationFrame ||
          vn.mozCancelAnimationFrame ||
          vn.oCancelAnimationFrame ||
          function (e) {
            window.clearTimeout(e);
          }
      : ap;
  })(),
  nd = function (e) {},
  jr = { enumerable: !0, configurable: !0, get: nd, set: nd },
  Jb = function (e, t) {
    for (var n = t.split("."), a = 0; a < n.length - 1; a++)
      if (((e = e[n[a]]), typeof e != "object" || !e)) return;
    var i = n.pop();
    return typeof e[i] == "function"
      ? function () {
          return e[i].apply(e, arguments);
        }
      : e[i];
  },
  ey = function (e, t, n) {
    for (var a = t.split("."), i, o = 0; o < a.length - 1; o++)
      (i = a[o]), e[i] || (e[i] = {}), (e = e[i]);
    e[a.pop()] = n;
  };
function ty(e, t, n) {
  (jr.get = function () {
    return Jb(this, t);
  }),
    (jr.set = function (i) {
      ey(this, t, i);
    }),
    Object.defineProperty(e, n, jr);
}
var Bn = (function () {
    function e(t) {
      (this.events = {}), (this.eventTypes = {}), this.registerType(t);
    }
    return (
      (e.prototype.on = function (t, n, a) {
        return (
          a === void 0 && (a = this),
          this.hasType(t),
          this.events[t] || (this.events[t] = []),
          this.events[t].push([n, a]),
          this
        );
      }),
      (e.prototype.once = function (t, n, a) {
        var i = this;
        a === void 0 && (a = this), this.hasType(t);
        var o = function () {
          for (var r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
          i.off(t, o);
          var s = n.apply(a, r);
          if (s === !0) return s;
        };
        return (o.fn = n), this.on(t, o), this;
      }),
      (e.prototype.off = function (t, n) {
        if (!t && !n) return (this.events = {}), this;
        if (t) {
          if ((this.hasType(t), !n)) return (this.events[t] = []), this;
          var a = this.events[t];
          if (!a) return this;
          for (var i = a.length; i--; )
            (a[i][0] === n || (a[i][0] && a[i][0].fn === n)) && a.splice(i, 1);
          return this;
        }
      }),
      (e.prototype.trigger = function (t) {
        for (var n = [], a = 1; a < arguments.length; a++) n[a - 1] = arguments[a];
        this.hasType(t);
        var i = this.events[t];
        if (!!i)
          for (var o = i.length, r = Zf(i), l, s = 0; s < o; s++) {
            var c = r[s],
              d = c[0],
              u = c[1];
            if (d && ((l = d.apply(u, n)), l === !0)) return l;
          }
      }),
      (e.prototype.registerType = function (t) {
        var n = this;
        t.forEach(function (a) {
          n.eventTypes[a] = a;
        });
      }),
      (e.prototype.destroy = function () {
        (this.events = {}), (this.eventTypes = {});
      }),
      (e.prototype.hasType = function (t) {
        var n = this.eventTypes,
          a = n[t] === t;
        a ||
          wo(
            'EventEmitter has used unknown event type: "' +
              t +
              '", should be oneof [' +
              ("" +
                Object.keys(n).map(function (i) {
                  return JSON.stringify(i);
                })) +
              "]"
          );
      }),
      e
    );
  })(),
  $o = (function () {
    function e(t, n) {
      (this.wrapper = t), (this.events = n), this.addDOMEvents();
    }
    return (
      (e.prototype.destroy = function () {
        this.removeDOMEvents(), (this.events = []);
      }),
      (e.prototype.addDOMEvents = function () {
        this.handleDOMEvents(Hb);
      }),
      (e.prototype.removeDOMEvents = function () {
        this.handleDOMEvents(Ub);
      }),
      (e.prototype.handleDOMEvents = function (t) {
        var n = this,
          a = this.wrapper;
        this.events.forEach(function (i) {
          t(a, i.name, n, !!i.capture);
        });
      }),
      (e.prototype.handleEvent = function (t) {
        var n = t.type;
        this.events.some(function (a) {
          return a.name === n ? (a.handler(t), !0) : !1;
        });
      }),
      e
    );
  })(),
  ny = (function () {
    function e() {}
    return e;
  })(),
  ay = (function (e) {
    ur(t, e);
    function t() {
      var n = e.call(this) || this;
      return (
        (n.startX = 0),
        (n.startY = 0),
        (n.scrollX = !1),
        (n.scrollY = !0),
        (n.freeScroll = !1),
        (n.directionLockThreshold = 0),
        (n.eventPassthrough = ""),
        (n.click = !1),
        (n.dblclick = !1),
        (n.tap = ""),
        (n.bounce = { top: !0, bottom: !0, left: !0, right: !0 }),
        (n.bounceTime = 800),
        (n.momentum = !0),
        (n.momentumLimitTime = 300),
        (n.momentumLimitDistance = 15),
        (n.swipeTime = 2500),
        (n.swipeBounceTime = 500),
        (n.deceleration = 0.0015),
        (n.flickLimitTime = 200),
        (n.flickLimitDistance = 100),
        (n.resizePolling = 60),
        (n.probeType = 0),
        (n.stopPropagation = !1),
        (n.preventDefault = !0),
        (n.preventDefaultException = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/ }),
        (n.tagException = { tagName: /^TEXTAREA$/ }),
        (n.HWCompositing = !0),
        (n.useTransition = !0),
        (n.bindToWrapper = !1),
        (n.bindToTarget = !1),
        (n.disableMouse = ed),
        (n.disableTouch = !ed),
        (n.autoBlur = !0),
        (n.autoEndDistance = 5),
        (n.outOfBoundaryDampingFactor = 1 / 3),
        (n.specifiedIndexAsContent = 0),
        (n.quadrant = 1),
        n
      );
    }
    return (
      (t.prototype.merge = function (n) {
        if (!n) return this;
        for (var a in n) {
          if (a === "bounce") {
            this.bounce = this.resolveBounce(n[a]);
            continue;
          }
          this[a] = n[a];
        }
        return this;
      }),
      (t.prototype.process = function () {
        return (
          (this.translateZ = this.HWCompositing && Wb ? " translateZ(1px)" : ""),
          (this.useTransition = this.useTransition && Kb),
          (this.preventDefault = !this.eventPassthrough && this.preventDefault),
          (this.scrollX = this.eventPassthrough === "horizontal" ? !1 : this.scrollX),
          (this.scrollY = this.eventPassthrough === "vertical" ? !1 : this.scrollY),
          (this.freeScroll = this.freeScroll && !this.eventPassthrough),
          (this.scrollX = this.freeScroll ? !0 : this.scrollX),
          (this.scrollY = this.freeScroll ? !0 : this.scrollY),
          (this.directionLockThreshold = this.eventPassthrough ? 0 : this.directionLockThreshold),
          this
        );
      }),
      (t.prototype.resolveBounce = function (n) {
        var a = { top: !0, right: !0, bottom: !0, left: !0 },
          i = { top: !1, right: !1, bottom: !1, left: !1 },
          o;
        return typeof n == "object" ? (o = Cs(a, n)) : (o = n ? a : i), o;
      }),
      t
    );
  })(ny),
  iy = (function () {
    function e(t, n) {
      (this.wrapper = t),
        (this.options = n),
        (this.hooks = new Bn(["beforeStart", "start", "move", "end", "click"])),
        this.handleDOMEvents();
    }
    return (
      (e.prototype.handleDOMEvents = function () {
        var t = this.options,
          n = t.bindToWrapper,
          a = t.disableMouse,
          i = t.disableTouch,
          o = t.click,
          r = this.wrapper,
          l = n ? r : window,
          s = [],
          c = [],
          d = !i,
          u = !a;
        o && s.push({ name: "click", handler: this.click.bind(this), capture: !0 }),
          d &&
            (s.push({ name: "touchstart", handler: this.start.bind(this) }),
            c.push(
              { name: "touchmove", handler: this.move.bind(this) },
              { name: "touchend", handler: this.end.bind(this) },
              { name: "touchcancel", handler: this.end.bind(this) }
            )),
          u &&
            (s.push({ name: "mousedown", handler: this.start.bind(this) }),
            c.push(
              { name: "mousemove", handler: this.move.bind(this) },
              { name: "mouseup", handler: this.end.bind(this) }
            )),
          (this.wrapperEventRegister = new $o(r, s)),
          (this.targetEventRegister = new $o(l, c));
      }),
      (e.prototype.beforeHandler = function (t, n) {
        var a = this.options,
          i = a.preventDefault,
          o = a.stopPropagation,
          r = a.preventDefaultException,
          l = {
            start: function () {
              return i && !ki(t.target, r);
            },
            end: function () {
              return i && !ki(t.target, r);
            },
            move: function () {
              return i;
            },
          };
        l[n]() && t.preventDefault(), o && t.stopPropagation();
      }),
      (e.prototype.setInitiated = function (t) {
        t === void 0 && (t = 0), (this.initiated = t);
      }),
      (e.prototype.start = function (t) {
        var n = Fr[t.type];
        if (!(this.initiated && this.initiated !== n)) {
          if ((this.setInitiated(n), Qb(t.target, this.options.tagException))) {
            this.setInitiated();
            return;
          }
          if (
            !(n === 2 && t.button !== 0) &&
            !this.hooks.trigger(this.hooks.eventTypes.beforeStart, t)
          ) {
            this.beforeHandler(t, "start");
            var a = t.touches ? t.touches[0] : t;
            (this.pointX = a.pageX),
              (this.pointY = a.pageY),
              this.hooks.trigger(this.hooks.eventTypes.start, t);
          }
        }
      }),
      (e.prototype.move = function (t) {
        if (Fr[t.type] === this.initiated) {
          this.beforeHandler(t, "move");
          var n = t.touches ? t.touches[0] : t,
            a = n.pageX - this.pointX,
            i = n.pageY - this.pointY;
          if (
            ((this.pointX = n.pageX),
            (this.pointY = n.pageY),
            !this.hooks.trigger(this.hooks.eventTypes.move, { deltaX: a, deltaY: i, e: t }))
          ) {
            var o =
                document.documentElement.scrollLeft ||
                window.pageXOffset ||
                document.body.scrollLeft,
              r =
                document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
              l = this.pointX - o,
              s = this.pointY - r,
              c = this.options.autoEndDistance;
            (l > document.documentElement.clientWidth - c ||
              s > document.documentElement.clientHeight - c ||
              l < c ||
              s < c) &&
              this.end(t);
          }
        }
      }),
      (e.prototype.end = function (t) {
        Fr[t.type] === this.initiated &&
          (this.setInitiated(),
          this.beforeHandler(t, "end"),
          this.hooks.trigger(this.hooks.eventTypes.end, t));
      }),
      (e.prototype.click = function (t) {
        this.hooks.trigger(this.hooks.eventTypes.click, t);
      }),
      (e.prototype.setContent = function (t) {
        t !== this.wrapper && ((this.wrapper = t), this.rebindDOMEvents());
      }),
      (e.prototype.rebindDOMEvents = function () {
        this.wrapperEventRegister.destroy(),
          this.targetEventRegister.destroy(),
          this.handleDOMEvents();
      }),
      (e.prototype.destroy = function () {
        this.wrapperEventRegister.destroy(),
          this.targetEventRegister.destroy(),
          this.hooks.destroy();
      }),
      e
    );
  })(),
  Vr = { x: ["translateX", "px"], y: ["translateY", "px"] },
  oy = (function () {
    function e(t) {
      this.setContent(t), (this.hooks = new Bn(["beforeTranslate", "translate"]));
    }
    return (
      (e.prototype.getComputedPosition = function () {
        var t = window.getComputedStyle(this.content, null),
          n = t[Yn.transform].split(")")[0].split(", "),
          a = +(n[12] || n[4]) || 0,
          i = +(n[13] || n[5]) || 0;
        return { x: a, y: i };
      }),
      (e.prototype.translate = function (t) {
        var n = [];
        Object.keys(t).forEach(function (a) {
          if (!!Vr[a]) {
            var i = Vr[a][0];
            if (i) {
              var o = Vr[a][1],
                r = t[a];
              n.push(i + "(" + r + o + ")");
            }
          }
        }),
          this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, n, t),
          (this.style[Yn.transform] = n.join(" ")),
          this.hooks.trigger(this.hooks.eventTypes.translate, t);
      }),
      (e.prototype.setContent = function (t) {
        this.content !== t && ((this.content = t), (this.style = t.style));
      }),
      (e.prototype.destroy = function () {
        this.hooks.destroy();
      }),
      e
    );
  })(),
  op = (function () {
    function e(t, n, a) {
      (this.translater = n),
        (this.options = a),
        (this.timer = 0),
        (this.hooks = new Bn([
          "move",
          "end",
          "beforeForceStop",
          "forceStop",
          "callStop",
          "time",
          "timeFunction",
        ])),
        this.setContent(t);
    }
    return (
      (e.prototype.translate = function (t) {
        this.translater.translate(t);
      }),
      (e.prototype.setPending = function (t) {
        this.pending = t;
      }),
      (e.prototype.setForceStopped = function (t) {
        this.forceStopped = t;
      }),
      (e.prototype.setCallStop = function (t) {
        this.callStopWhenPending = t;
      }),
      (e.prototype.setContent = function (t) {
        this.content !== t && ((this.content = t), (this.style = t.style), this.stop());
      }),
      (e.prototype.clearTimer = function () {
        this.timer && (ea(this.timer), (this.timer = 0));
      }),
      (e.prototype.destroy = function () {
        this.hooks.destroy(), ea(this.timer);
      }),
      e
    );
  })(),
  ry = function (e, t, n, a) {
    var i = function (c, d) {
        var u = c - d,
          f = u > 0 ? -1 : u < 0 ? 1 : 0;
        return f;
      },
      o = i(t.x, e.x),
      r = i(t.y, e.y),
      l = n.x - a.x,
      s = n.y - a.y;
    return o * l <= 0 && r * s <= 0;
  },
  sy = (function (e) {
    ur(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.startProbe = function (n, a) {
        var i = this,
          o = n,
          r = function () {
            var l = i.translater.getComputedPosition();
            ry(n, a, l, o) && i.hooks.trigger(i.hooks.eventTypes.move, l),
              i.pending ||
                (i.callStopWhenPending
                  ? (i.callStopWhenPending = !1)
                  : i.hooks.trigger(i.hooks.eventTypes.end, l)),
              (o = l),
              i.pending && (i.timer = ip(r));
          };
        this.callStopWhenPending && this.setCallStop(!1), ea(this.timer), r();
      }),
      (t.prototype.transitionTime = function (n) {
        n === void 0 && (n = 0),
          (this.style[Yn.transitionDuration] = n + "ms"),
          this.hooks.trigger(this.hooks.eventTypes.time, n);
      }),
      (t.prototype.transitionTimingFunction = function (n) {
        (this.style[Yn.transitionTimingFunction] = n),
          this.hooks.trigger(this.hooks.eventTypes.timeFunction, n);
      }),
      (t.prototype.transitionProperty = function () {
        this.style[Yn.transitionProperty] = Yn.transform;
      }),
      (t.prototype.move = function (n, a, i, o) {
        this.setPending(i > 0),
          this.transitionTimingFunction(o),
          this.transitionProperty(),
          this.transitionTime(i),
          this.translate(a);
        var r = this.options.probeType === 3;
        i && r && this.startProbe(n, a),
          i ||
            ((this._reflow = this.content.offsetHeight),
            r && this.hooks.trigger(this.hooks.eventTypes.move, a),
            this.hooks.trigger(this.hooks.eventTypes.end, a));
      }),
      (t.prototype.doStop = function () {
        var n = this.pending;
        if ((this.setForceStopped(!1), this.setCallStop(!1), n)) {
          this.setPending(!1), ea(this.timer);
          var a = this.translater.getComputedPosition(),
            i = a.x,
            o = a.y;
          this.transitionTime(),
            this.translate({ x: i, y: o }),
            this.setForceStopped(!0),
            this.setCallStop(!0),
            this.hooks.trigger(this.hooks.eventTypes.forceStop, { x: i, y: o });
        }
        return n;
      }),
      (t.prototype.stop = function () {
        var n = this.doStop();
        n && this.hooks.trigger(this.hooks.eventTypes.callStop);
      }),
      t
    );
  })(op),
  ly = (function (e) {
    ur(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.move = function (n, a, i, o) {
        if (!i) {
          this.translate(a),
            this.options.probeType === 3 && this.hooks.trigger(this.hooks.eventTypes.move, a),
            this.hooks.trigger(this.hooks.eventTypes.end, a);
          return;
        }
        this.animate(n, a, i, o);
      }),
      (t.prototype.animate = function (n, a, i, o) {
        var r = this,
          l = Xn(),
          s = l + i,
          c = this.options.probeType === 3,
          d = function () {
            var u = Xn();
            if (u >= s) {
              r.translate(a),
                c && r.hooks.trigger(r.hooks.eventTypes.move, a),
                r.hooks.trigger(r.hooks.eventTypes.end, a);
              return;
            }
            u = (u - l) / i;
            var f = o(u),
              v = {};
            Object.keys(a).forEach(function (m) {
              var p = n[m],
                g = a[m];
              v[m] = (g - p) * f + p;
            }),
              r.translate(v),
              c && r.hooks.trigger(r.hooks.eventTypes.move, v),
              r.pending && (r.timer = ip(d)),
              r.pending ||
                (r.callStopWhenPending
                  ? (r.callStopWhenPending = !1)
                  : r.hooks.trigger(r.hooks.eventTypes.end, a));
          };
        this.setPending(!0), this.callStopWhenPending && this.setCallStop(!1), ea(this.timer), d();
      }),
      (t.prototype.doStop = function () {
        var n = this.pending;
        if ((this.setForceStopped(!1), this.setCallStop(!1), n)) {
          this.setPending(!1), ea(this.timer);
          var a = this.translater.getComputedPosition();
          this.setForceStopped(!0),
            this.setCallStop(!0),
            this.hooks.trigger(this.hooks.eventTypes.forceStop, a);
        }
        return n;
      }),
      (t.prototype.stop = function () {
        var n = this.doStop();
        n && this.hooks.trigger(this.hooks.eventTypes.callStop);
      }),
      t
    );
  })(op);
function cy(e, t, n) {
  var a = n.useTransition,
    i = {};
  return (
    Object.defineProperty(i, "probeType", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return n.probeType;
      },
    }),
    a ? new sy(e, t, i) : new ly(e, t, i)
  );
}
var ad = (function () {
    function e(t, n, a) {
      (this.wrapper = t),
        (this.options = a),
        (this.hooks = new Bn([
          "beforeComputeBoundary",
          "computeBoundary",
          "momentum",
          "end",
          "ignoreHasScroll",
        ])),
        this.refresh(n);
    }
    return (
      (e.prototype.start = function () {
        (this.dist = 0), this.setMovingDirection(0), this.setDirection(0);
      }),
      (e.prototype.move = function (t) {
        return (
          (t = this.hasScroll ? t : 0),
          this.setMovingDirection(t),
          this.performDampingAlgorithm(t, this.options.outOfBoundaryDampingFactor)
        );
      }),
      (e.prototype.setMovingDirection = function (t) {
        this.movingDirection = t > 0 ? -1 : t < 0 ? 1 : 0;
      }),
      (e.prototype.setDirection = function (t) {
        this.direction = t > 0 ? -1 : t < 0 ? 1 : 0;
      }),
      (e.prototype.performDampingAlgorithm = function (t, n) {
        var a = this.currentPos + t;
        return (
          (a > this.minScrollPos || a < this.maxScrollPos) &&
            ((a > this.minScrollPos && this.options.bounces[0]) ||
            (a < this.maxScrollPos && this.options.bounces[1])
              ? (a = this.currentPos + t * n)
              : (a = a > this.minScrollPos ? this.minScrollPos : this.maxScrollPos)),
          a
        );
      }),
      (e.prototype.end = function (t) {
        var n = { duration: 0 },
          a = Math.abs(this.currentPos - this.startPos);
        if (
          this.options.momentum &&
          t < this.options.momentumLimitTime &&
          a > this.options.momentumLimitDistance
        ) {
          var i =
            (this.direction === -1 && this.options.bounces[0]) ||
            (this.direction === 1 && this.options.bounces[1])
              ? this.wrapperSize
              : 0;
          n = this.hasScroll
            ? this.momentum(
                this.currentPos,
                this.startPos,
                t,
                this.maxScrollPos,
                this.minScrollPos,
                i,
                this.options
              )
            : { destination: this.currentPos, duration: 0 };
        } else this.hooks.trigger(this.hooks.eventTypes.end, n);
        return n;
      }),
      (e.prototype.momentum = function (t, n, a, i, o, r, l) {
        l === void 0 && (l = this.options);
        var s = t - n,
          c = Math.abs(s) / a,
          d = l.deceleration,
          u = l.swipeBounceTime,
          f = l.swipeTime,
          v = Math.min(f, (c * 2) / d),
          m = { destination: t + ((c * c) / d) * (s < 0 ? -1 : 1), duration: v, rate: 15 };
        return (
          this.hooks.trigger(this.hooks.eventTypes.momentum, m, s),
          m.destination < i
            ? ((m.destination = r ? Math.max(i - r / 4, i - (r / m.rate) * c) : i),
              (m.duration = u))
            : m.destination > o &&
              ((m.destination = r ? Math.min(o + r / 4, o + (r / m.rate) * c) : o),
              (m.duration = u)),
          (m.destination = Math.round(m.destination)),
          m
        );
      }),
      (e.prototype.updateDirection = function () {
        var t = this.currentPos - this.absStartPos;
        this.setDirection(t);
      }),
      (e.prototype.refresh = function (t) {
        var n = this.options.rect,
          a = n.size,
          i = n.position,
          o = window.getComputedStyle(this.wrapper, null).position === "static",
          r = td(this.wrapper);
        (this.wrapperSize = this.wrapper[a === "width" ? "clientWidth" : "clientHeight"]),
          this.setContent(t);
        var l = td(this.content);
        (this.contentSize = l[a]),
          (this.relativeOffset = l[i]),
          o && (this.relativeOffset -= r[i]),
          this.computeBoundary(),
          this.setDirection(0);
      }),
      (e.prototype.setContent = function (t) {
        t !== this.content && ((this.content = t), this.resetState());
      }),
      (e.prototype.resetState = function () {
        (this.currentPos = 0),
          (this.startPos = 0),
          (this.dist = 0),
          this.setDirection(0),
          this.setMovingDirection(0),
          this.resetStartPos();
      }),
      (e.prototype.computeBoundary = function () {
        this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary);
        var t = { minScrollPos: 0, maxScrollPos: this.wrapperSize - this.contentSize };
        t.maxScrollPos < 0 &&
          ((t.maxScrollPos -= this.relativeOffset),
          this.options.specifiedIndexAsContent === 0 && (t.minScrollPos = -this.relativeOffset)),
          this.hooks.trigger(this.hooks.eventTypes.computeBoundary, t),
          (this.minScrollPos = t.minScrollPos),
          (this.maxScrollPos = t.maxScrollPos),
          (this.hasScroll = this.options.scrollable && this.maxScrollPos < this.minScrollPos),
          !this.hasScroll &&
            this.minScrollPos < this.maxScrollPos &&
            ((this.maxScrollPos = this.minScrollPos), (this.contentSize = this.wrapperSize));
      }),
      (e.prototype.updatePosition = function (t) {
        this.currentPos = t;
      }),
      (e.prototype.getCurrentPos = function () {
        return this.currentPos;
      }),
      (e.prototype.checkInBoundary = function () {
        var t = this.adjustPosition(this.currentPos),
          n = t === this.getCurrentPos();
        return { position: t, inBoundary: n };
      }),
      (e.prototype.adjustPosition = function (t) {
        return (
          !this.hasScroll && !this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll)
            ? (t = this.minScrollPos)
            : t > this.minScrollPos
            ? (t = this.minScrollPos)
            : t < this.maxScrollPos && (t = this.maxScrollPos),
          t
        );
      }),
      (e.prototype.updateStartPos = function () {
        this.startPos = this.currentPos;
      }),
      (e.prototype.updateAbsStartPos = function () {
        this.absStartPos = this.currentPos;
      }),
      (e.prototype.resetStartPos = function () {
        this.updateStartPos(), this.updateAbsStartPos();
      }),
      (e.prototype.getAbsDist = function (t) {
        return (this.dist += t), Math.abs(this.dist);
      }),
      (e.prototype.destroy = function () {
        this.hooks.destroy();
      }),
      e
    );
  })(),
  co,
  uo,
  fo,
  po,
  id =
    ((co = {}),
    (co.yes = function (e) {
      return !0;
    }),
    (co.no = function (e) {
      return e.preventDefault(), !1;
    }),
    co),
  dy =
    ((uo = {}),
    (uo.horizontal = ((fo = {}), (fo.yes = "horizontal"), (fo.no = "vertical"), fo)),
    (uo.vertical = ((po = {}), (po.yes = "vertical"), (po.no = "horizontal"), po)),
    uo),
  uy = (function () {
    function e(t, n, a) {
      (this.directionLockThreshold = t),
        (this.freeScroll = n),
        (this.eventPassthrough = a),
        this.reset();
    }
    return (
      (e.prototype.reset = function () {
        this.directionLocked = "";
      }),
      (e.prototype.checkMovingDirection = function (t, n, a) {
        return this.computeDirectionLock(t, n), this.handleEventPassthrough(a);
      }),
      (e.prototype.adjustDelta = function (t, n) {
        return (
          this.directionLocked === "horizontal"
            ? (n = 0)
            : this.directionLocked === "vertical" && (t = 0),
          { deltaX: t, deltaY: n }
        );
      }),
      (e.prototype.computeDirectionLock = function (t, n) {
        this.directionLocked === "" &&
          !this.freeScroll &&
          (t > n + this.directionLockThreshold
            ? (this.directionLocked = "horizontal")
            : n >= t + this.directionLockThreshold
            ? (this.directionLocked = "vertical")
            : (this.directionLocked = "none"));
      }),
      (e.prototype.handleEventPassthrough = function (t) {
        var n = dy[this.directionLocked];
        if (n) {
          if (this.eventPassthrough === n.yes) return id.yes(t);
          if (this.eventPassthrough === n.no) return id.no(t);
        }
        return !1;
      }),
      e
    );
  })(),
  fy = function (e, t, n) {
    return n === 2 ? [t, -e] : n === 3 ? [-e, -t] : n === 4 ? [-t, e] : [e, t];
  },
  py = (function () {
    function e(t, n, a, i, o) {
      (this.hooks = new Bn([
        "start",
        "beforeMove",
        "scrollStart",
        "scroll",
        "beforeEnd",
        "end",
        "scrollEnd",
        "contentNotMoved",
        "detectMovingDirection",
        "coordinateTransformation",
      ])),
        (this.scrollBehaviorX = t),
        (this.scrollBehaviorY = n),
        (this.actionsHandler = a),
        (this.animater = i),
        (this.options = o),
        (this.directionLockAction = new uy(
          o.directionLockThreshold,
          o.freeScroll,
          o.eventPassthrough
        )),
        (this.enabled = !0),
        this.bindActionsHandler();
    }
    return (
      (e.prototype.bindActionsHandler = function () {
        var t = this;
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function (n) {
          return t.enabled ? t.handleStart(n) : !0;
        }),
          this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function (n) {
            var a = n.deltaX,
              i = n.deltaY,
              o = n.e;
            if (!t.enabled) return !0;
            var r = fy(a, i, t.options.quadrant),
              l = r[0],
              s = r[1],
              c = { deltaX: l, deltaY: s };
            return (
              t.hooks.trigger(t.hooks.eventTypes.coordinateTransformation, c),
              t.handleMove(c.deltaX, c.deltaY, o)
            );
          }),
          this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function (n) {
            return t.enabled ? t.handleEnd(n) : !0;
          }),
          this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function (n) {
            t.enabled && !n._constructed && t.handleClick(n);
          });
      }),
      (e.prototype.handleStart = function (t) {
        var n = Xn();
        (this.fingerMoved = !1),
          (this.contentMoved = !1),
          (this.startTime = n),
          this.directionLockAction.reset(),
          this.scrollBehaviorX.start(),
          this.scrollBehaviorY.start(),
          this.animater.doStop(),
          this.scrollBehaviorX.resetStartPos(),
          this.scrollBehaviorY.resetStartPos(),
          this.hooks.trigger(this.hooks.eventTypes.start, t);
      }),
      (e.prototype.handleMove = function (t, n, a) {
        if (!this.hooks.trigger(this.hooks.eventTypes.beforeMove, a)) {
          var i = this.scrollBehaviorX.getAbsDist(t),
            o = this.scrollBehaviorY.getAbsDist(n),
            r = Xn();
          if (this.checkMomentum(i, o, r)) return !0;
          if (this.directionLockAction.checkMovingDirection(i, o, a))
            return this.actionsHandler.setInitiated(), !0;
          var l = this.directionLockAction.adjustDelta(t, n),
            s = this.scrollBehaviorX.getCurrentPos(),
            c = this.scrollBehaviorX.move(l.deltaX),
            d = this.scrollBehaviorY.getCurrentPos(),
            u = this.scrollBehaviorY.move(l.deltaY);
          if (!this.hooks.trigger(this.hooks.eventTypes.detectMovingDirection)) {
            this.fingerMoved || (this.fingerMoved = !0);
            var f = c !== s || u !== d;
            !this.contentMoved && !f && this.hooks.trigger(this.hooks.eventTypes.contentNotMoved),
              !this.contentMoved &&
                f &&
                ((this.contentMoved = !0), this.hooks.trigger(this.hooks.eventTypes.scrollStart)),
              this.contentMoved &&
                f &&
                (this.animater.translate({ x: c, y: u }), this.dispatchScroll(r));
          }
        }
      }),
      (e.prototype.dispatchScroll = function (t) {
        t - this.startTime > this.options.momentumLimitTime &&
          ((this.startTime = t),
          this.scrollBehaviorX.updateStartPos(),
          this.scrollBehaviorY.updateStartPos(),
          this.options.probeType === 1 &&
            this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())),
          this.options.probeType > 1 &&
            this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
      }),
      (e.prototype.checkMomentum = function (t, n, a) {
        return (
          a - this.endTime > this.options.momentumLimitTime &&
          n < this.options.momentumLimitDistance &&
          t < this.options.momentumLimitDistance
        );
      }),
      (e.prototype.handleEnd = function (t) {
        if (!this.hooks.trigger(this.hooks.eventTypes.beforeEnd, t)) {
          var n = this.getCurrentPos();
          if (
            (this.scrollBehaviorX.updateDirection(),
            this.scrollBehaviorY.updateDirection(),
            this.hooks.trigger(this.hooks.eventTypes.end, t, n))
          )
            return !0;
          (n = this.ensureIntegerPos(n)), this.animater.translate(n), (this.endTime = Xn());
          var a = this.endTime - this.startTime;
          this.hooks.trigger(this.hooks.eventTypes.scrollEnd, n, a);
        }
      }),
      (e.prototype.ensureIntegerPos = function (t) {
        this.ensuringInteger = !0;
        var n = t.x,
          a = t.y,
          i = this.scrollBehaviorX,
          o = i.minScrollPos,
          r = i.maxScrollPos,
          l = this.scrollBehaviorY,
          s = l.minScrollPos,
          c = l.maxScrollPos;
        return (
          (n = n > 0 ? Math.ceil(n) : Math.floor(n)),
          (a = a > 0 ? Math.ceil(a) : Math.floor(a)),
          (n = Zc(n, r, o)),
          (a = Zc(a, c, s)),
          { x: n, y: a }
        );
      }),
      (e.prototype.handleClick = function (t) {
        ki(t.target, this.options.preventDefaultException) ||
          (t.preventDefault(), t.stopPropagation());
      }),
      (e.prototype.getCurrentPos = function () {
        return { x: this.scrollBehaviorX.getCurrentPos(), y: this.scrollBehaviorY.getCurrentPos() };
      }),
      (e.prototype.refresh = function () {
        this.endTime = 0;
      }),
      (e.prototype.destroy = function () {
        this.hooks.destroy();
      }),
      e
    );
  })();
function hy(e) {
  var t = [
    "click",
    "bindToWrapper",
    "disableMouse",
    "disableTouch",
    "preventDefault",
    "stopPropagation",
    "tagException",
    "preventDefaultException",
    "autoEndDistance",
  ].reduce(function (n, a) {
    return (n[a] = e[a]), n;
  }, {});
  return t;
}
function od(e, t, n, a) {
  var i = [
    "momentum",
    "momentumLimitTime",
    "momentumLimitDistance",
    "deceleration",
    "swipeBounceTime",
    "swipeTime",
    "outOfBoundaryDampingFactor",
    "specifiedIndexAsContent",
  ].reduce(function (o, r) {
    return (o[r] = e[r]), o;
  }, {});
  return (i.scrollable = !!e[t]), (i.bounces = n), (i.rect = a), i;
}
function Ps(e, t, n) {
  n.forEach(function (a) {
    var i, o;
    typeof a == "string" ? (i = o = a) : ((i = a.source), (o = a.target)),
      e.on(i, function () {
        for (var r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
        return t.trigger.apply(t, Zf([o], r));
      });
  });
}
function my(e, t) {
  for (var n = Object.keys(e), a = 0, i = n; a < i.length; a++) {
    var o = i[a];
    if (e[o] !== t[o]) return !1;
  }
  return !0;
}
var rd = 1,
  gy = (function () {
    function e(t, n, a) {
      (this.wrapper = t),
        (this.content = n),
        (this.resizeTimeout = 0),
        (this.hooks = new Bn([
          "beforeStart",
          "beforeMove",
          "beforeScrollStart",
          "scrollStart",
          "scroll",
          "beforeEnd",
          "scrollEnd",
          "resize",
          "touchEnd",
          "end",
          "flick",
          "scrollCancel",
          "momentum",
          "scrollTo",
          "minDistanceScroll",
          "scrollToElement",
          "beforeRefresh",
        ])),
        (this.options = a);
      var i = this.options.bounce,
        o = i.left,
        r = i.right,
        l = i.top,
        s = i.bottom;
      (this.scrollBehaviorX = new ad(
        t,
        n,
        od(a, "scrollX", [o, r], { size: "width", position: "left" })
      )),
        (this.scrollBehaviorY = new ad(
          t,
          n,
          od(a, "scrollY", [l, s], { size: "height", position: "top" })
        )),
        (this.translater = new oy(this.content)),
        (this.animater = cy(this.content, this.translater, this.options)),
        (this.actionsHandler = new iy(
          this.options.bindToTarget ? this.content : t,
          hy(this.options)
        )),
        (this.actions = new py(
          this.scrollBehaviorX,
          this.scrollBehaviorY,
          this.actionsHandler,
          this.animater,
          this.options
        ));
      var c = this.resize.bind(this);
      (this.resizeRegister = new $o(window, [
        { name: "orientationchange", handler: c },
        { name: "resize", handler: c },
      ])),
        this.registerTransitionEnd(),
        this.init();
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        this.bindTranslater(),
          this.bindAnimater(),
          this.bindActions(),
          this.hooks.on(this.hooks.eventTypes.scrollEnd, function () {
            t.togglePointerEvents(!0);
          });
      }),
      (e.prototype.registerTransitionEnd = function () {
        this.transitionEndRegister = new $o(this.content, [
          { name: Yn.transitionEnd, handler: this.transitionEnd.bind(this) },
        ]);
      }),
      (e.prototype.bindTranslater = function () {
        var t = this,
          n = this.translater.hooks;
        n.on(n.eventTypes.beforeTranslate, function (a) {
          t.options.translateZ && a.push(t.options.translateZ);
        }),
          n.on(n.eventTypes.translate, function (a) {
            var i = t.getCurrentPos();
            if ((t.updatePositions(a), t.actions.ensuringInteger === !0)) {
              t.actions.ensuringInteger = !1;
              return;
            }
            (a.x !== i.x || a.y !== i.y) && t.togglePointerEvents(!1);
          });
      }),
      (e.prototype.bindAnimater = function () {
        var t = this;
        this.animater.hooks.on(this.animater.hooks.eventTypes.end, function (n) {
          t.resetPosition(t.options.bounceTime) ||
            (t.animater.setPending(!1), t.hooks.trigger(t.hooks.eventTypes.scrollEnd, n));
        }),
          Ps(this.animater.hooks, this.hooks, [
            { source: this.animater.hooks.eventTypes.move, target: this.hooks.eventTypes.scroll },
            {
              source: this.animater.hooks.eventTypes.forceStop,
              target: this.hooks.eventTypes.scrollEnd,
            },
          ]);
      }),
      (e.prototype.bindActions = function () {
        var t = this,
          n = this.actions;
        Ps(n.hooks, this.hooks, [
          { source: n.hooks.eventTypes.start, target: this.hooks.eventTypes.beforeStart },
          { source: n.hooks.eventTypes.start, target: this.hooks.eventTypes.beforeScrollStart },
          { source: n.hooks.eventTypes.beforeMove, target: this.hooks.eventTypes.beforeMove },
          { source: n.hooks.eventTypes.scrollStart, target: this.hooks.eventTypes.scrollStart },
          { source: n.hooks.eventTypes.scroll, target: this.hooks.eventTypes.scroll },
          { source: n.hooks.eventTypes.beforeEnd, target: this.hooks.eventTypes.beforeEnd },
        ]),
          n.hooks.on(n.hooks.eventTypes.end, function (a, i) {
            if (
              (t.hooks.trigger(t.hooks.eventTypes.touchEnd, i),
              t.hooks.trigger(t.hooks.eventTypes.end, i) ||
                (!n.fingerMoved &&
                  (t.hooks.trigger(t.hooks.eventTypes.scrollCancel), t.checkClick(a))))
            )
              return !0;
            if (t.resetPosition(t.options.bounceTime, zn.bounce))
              return t.animater.setForceStopped(!1), !0;
          }),
          n.hooks.on(n.hooks.eventTypes.scrollEnd, function (a, i) {
            var o = Math.abs(a.x - t.scrollBehaviorX.startPos),
              r = Math.abs(a.y - t.scrollBehaviorY.startPos);
            if (t.checkFlick(i, o, r)) {
              t.animater.setForceStopped(!1), t.hooks.trigger(t.hooks.eventTypes.flick);
              return;
            }
            if (t.momentum(a, i)) {
              t.animater.setForceStopped(!1);
              return;
            }
            n.contentMoved && t.hooks.trigger(t.hooks.eventTypes.scrollEnd, a),
              t.animater.forceStopped && t.animater.setForceStopped(!1);
          });
      }),
      (e.prototype.checkFlick = function (t, n, a) {
        var i = 1;
        if (
          this.hooks.events.flick.length > 1 &&
          t < this.options.flickLimitTime &&
          n < this.options.flickLimitDistance &&
          a < this.options.flickLimitDistance &&
          (a > i || n > i)
        )
          return !0;
      }),
      (e.prototype.momentum = function (t, n) {
        var a = { time: 0, easing: zn.swiper, newX: t.x, newY: t.y },
          i = this.scrollBehaviorX.end(n),
          o = this.scrollBehaviorY.end(n);
        if (
          ((a.newX = Os(i.destination) ? a.newX : i.destination),
          (a.newY = Os(o.destination) ? a.newY : o.destination),
          (a.time = Math.max(i.duration, o.duration)),
          this.hooks.trigger(this.hooks.eventTypes.momentum, a, this),
          a.newX !== t.x || a.newY !== t.y)
        )
          return (
            (a.newX > this.scrollBehaviorX.minScrollPos ||
              a.newX < this.scrollBehaviorX.maxScrollPos ||
              a.newY > this.scrollBehaviorY.minScrollPos ||
              a.newY < this.scrollBehaviorY.maxScrollPos) &&
              (a.easing = zn.swipeBounce),
            this.scrollTo(a.newX, a.newY, a.time, a.easing),
            !0
          );
      }),
      (e.prototype.checkClick = function (t) {
        var n = { preventClick: this.animater.forceStopped };
        if (this.hooks.trigger(this.hooks.eventTypes.checkClick))
          return this.animater.setForceStopped(!1), !0;
        if (!n.preventClick) {
          var a = this.options.dblclick,
            i = !1;
          if (a && this.lastClickTime) {
            var o = a.delay,
              r = o === void 0 ? 300 : o;
            Xn() - this.lastClickTime < r && ((i = !0), qb(t));
          }
          return (
            this.options.tap && Xb(t, this.options.tap),
            this.options.click && !ki(t.target, this.options.preventDefaultException) && np(t),
            (this.lastClickTime = i ? null : Xn()),
            !0
          );
        }
        return !1;
      }),
      (e.prototype.resize = function () {
        var t = this;
        !this.actions.enabled ||
          (jb && (this.wrapper.scrollTop = 0),
          clearTimeout(this.resizeTimeout),
          (this.resizeTimeout = window.setTimeout(function () {
            t.hooks.trigger(t.hooks.eventTypes.resize);
          }, this.options.resizePolling)));
      }),
      (e.prototype.transitionEnd = function (t) {
        if (!(t.target !== this.content || !this.animater.pending)) {
          var n = this.animater;
          n.transitionTime(),
            this.resetPosition(this.options.bounceTime, zn.bounce) ||
              (this.animater.setPending(!1),
              this.options.probeType !== 3 &&
                this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos()));
        }
      }),
      (e.prototype.togglePointerEvents = function (t) {
        t === void 0 && (t = !0);
        for (
          var n = this.content.children.length ? this.content.children : [this.content],
            a = t ? "auto" : "none",
            i = 0;
          i < n.length;
          i++
        ) {
          var o = n[i];
          o.isBScrollContainer || (o.style.pointerEvents = a);
        }
      }),
      (e.prototype.refresh = function (t) {
        var n = this.setContent(t);
        this.hooks.trigger(this.hooks.eventTypes.beforeRefresh),
          this.scrollBehaviorX.refresh(t),
          this.scrollBehaviorY.refresh(t),
          n &&
            (this.translater.setContent(t),
            this.animater.setContent(t),
            this.transitionEndRegister.destroy(),
            this.registerTransitionEnd(),
            this.options.bindToTarget && this.actionsHandler.setContent(t)),
          this.actions.refresh(),
          (this.wrapperOffset = Jc(this.wrapper));
      }),
      (e.prototype.setContent = function (t) {
        var n = t !== this.content;
        return n && (this.content = t), n;
      }),
      (e.prototype.scrollBy = function (t, n, a, i) {
        a === void 0 && (a = 0);
        var o = this.getCurrentPos(),
          r = o.x,
          l = o.y;
        (i = i || zn.bounce), (t += r), (n += l), this.scrollTo(t, n, a, i);
      }),
      (e.prototype.scrollTo = function (t, n, a, i, o) {
        a === void 0 && (a = 0),
          i === void 0 && (i = zn.bounce),
          o === void 0 && (o = { start: {}, end: {} });
        var r = this.options.useTransition ? i.style : i.fn,
          l = this.getCurrentPos(),
          s = Ti({ x: l.x, y: l.y }, o.start),
          c = Ti({ x: t, y: n }, o.end);
        if ((this.hooks.trigger(this.hooks.eventTypes.scrollTo, c), !my(s, c))) {
          var d = Math.abs(c.x - s.x),
            u = Math.abs(c.y - s.y);
          d < rd &&
            u < rd &&
            ((a = 0), this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll)),
            this.animater.move(s, c, a, r);
        }
      }),
      (e.prototype.scrollToElement = function (t, n, a, i, o) {
        var r = ep(t),
          l = Jc(r),
          s = function (d, u, f) {
            return typeof d == "number" ? d : d ? Math.round(u / 2 - f / 2) : 0;
          };
        (a = s(a, r.offsetWidth, this.wrapper.offsetWidth)),
          (i = s(i, r.offsetHeight, this.wrapper.offsetHeight));
        var c = function (d, u, f, v) {
          return (d -= u), (d = v.adjustPosition(d - f)), d;
        };
        (l.left = c(l.left, this.wrapperOffset.left, a, this.scrollBehaviorX)),
          (l.top = c(l.top, this.wrapperOffset.top, i, this.scrollBehaviorY)),
          !this.hooks.trigger(this.hooks.eventTypes.scrollToElement, r, l) &&
            this.scrollTo(l.left, l.top, n, o);
      }),
      (e.prototype.resetPosition = function (t, n) {
        t === void 0 && (t = 0), n === void 0 && (n = zn.bounce);
        var a = this.scrollBehaviorX.checkInBoundary(),
          i = a.position,
          o = a.inBoundary,
          r = this.scrollBehaviorY.checkInBoundary(),
          l = r.position,
          s = r.inBoundary;
        return o && s ? !1 : (Vb && this.reflow(), this.scrollTo(i, l, t, n), !0);
      }),
      (e.prototype.reflow = function () {
        this._reflow = this.content.offsetHeight;
      }),
      (e.prototype.updatePositions = function (t) {
        this.scrollBehaviorX.updatePosition(t.x), this.scrollBehaviorY.updatePosition(t.y);
      }),
      (e.prototype.getCurrentPos = function () {
        return this.actions.getCurrentPos();
      }),
      (e.prototype.enable = function () {
        this.actions.enabled = !0;
      }),
      (e.prototype.disable = function () {
        ea(this.animater.timer), (this.actions.enabled = !1);
      }),
      (e.prototype.destroy = function () {
        var t = this,
          n = [
            "resizeRegister",
            "transitionEndRegister",
            "actionsHandler",
            "actions",
            "hooks",
            "animater",
            "translater",
            "scrollBehaviorX",
            "scrollBehaviorY",
          ];
        n.forEach(function (a) {
          return t[a].destroy();
        });
      }),
      e
    );
  })(),
  fr = (function (e) {
    ur(t, e);
    function t(n, a) {
      var i =
          e.call(this, [
            "refresh",
            "contentChanged",
            "enable",
            "disable",
            "beforeScrollStart",
            "scrollStart",
            "scroll",
            "scrollEnd",
            "scrollCancel",
            "touchEnd",
            "flick",
            "destroy",
          ]) || this,
        o = ep(n);
      return o
        ? ((i.plugins = {}),
          (i.options = new ay().merge(a).process()),
          i.setContent(o).valid &&
            ((i.hooks = new Bn([
              "refresh",
              "enable",
              "disable",
              "destroy",
              "beforeInitialScrollTo",
              "contentChanged",
            ])),
            i.init(o)),
          i)
        : (wo("Can not resolve the wrapper DOM."), i);
    }
    return (
      (t.use = function (n) {
        var a = n.pluginName,
          i = t.plugins.some(function (o) {
            return n === o.ctor;
          });
        return i
          ? t
          : Os(a)
          ? (wo(
              "Plugin Class must specify plugin's name in static property by 'pluginName' field."
            ),
            t)
          : ((t.pluginsMap[a] = !0),
            t.plugins.push({ name: a, applyOrder: n.applyOrder, ctor: n }),
            t);
      }),
      (t.prototype.setContent = function (n) {
        var a = !1,
          i = !0,
          o = n.children[this.options.specifiedIndexAsContent];
        return (
          o
            ? ((a = this.content !== o), a && (this.content = o))
            : (wo("The wrapper need at least one child element to be content element to scroll."),
              (i = !1)),
          { valid: i, contentChanged: a }
        );
      }),
      (t.prototype.init = function (n) {
        var a = this;
        (this.wrapper = n),
          (n.isBScrollContainer = !0),
          (this.scroller = new gy(n, this.content, this.options)),
          this.scroller.hooks.on(this.scroller.hooks.eventTypes.resize, function () {
            a.refresh();
          }),
          this.eventBubbling(),
          this.handleAutoBlur(),
          this.enable(),
          this.proxy($b),
          this.applyPlugins(),
          this.refreshWithoutReset(this.content);
        var i = this.options,
          o = i.startX,
          r = i.startY,
          l = { x: o, y: r };
        this.hooks.trigger(this.hooks.eventTypes.beforeInitialScrollTo, l) ||
          this.scroller.scrollTo(l.x, l.y);
      }),
      (t.prototype.applyPlugins = function () {
        var n = this,
          a = this.options;
        t.plugins
          .sort(function (i, o) {
            var r,
              l = ((r = {}), (r.pre = -1), (r.post = 1), r),
              s = i.applyOrder ? l[i.applyOrder] : 0,
              c = o.applyOrder ? l[o.applyOrder] : 0;
            return s - c;
          })
          .forEach(function (i) {
            var o = i.ctor;
            a[i.name] && typeof o == "function" && (n.plugins[i.name] = new o(n));
          });
      }),
      (t.prototype.handleAutoBlur = function () {
        this.options.autoBlur &&
          this.on(this.eventTypes.beforeScrollStart, function () {
            var n = document.activeElement;
            n && (n.tagName === "INPUT" || n.tagName === "TEXTAREA") && n.blur();
          });
      }),
      (t.prototype.eventBubbling = function () {
        Ps(this.scroller.hooks, this, [
          this.eventTypes.beforeScrollStart,
          this.eventTypes.scrollStart,
          this.eventTypes.scroll,
          this.eventTypes.scrollEnd,
          this.eventTypes.scrollCancel,
          this.eventTypes.touchEnd,
          this.eventTypes.flick,
        ]);
      }),
      (t.prototype.refreshWithoutReset = function (n) {
        this.scroller.refresh(n),
          this.hooks.trigger(this.hooks.eventTypes.refresh, n),
          this.trigger(this.eventTypes.refresh, n);
      }),
      (t.prototype.proxy = function (n) {
        var a = this;
        n.forEach(function (i) {
          var o = i.key,
            r = i.sourceKey;
          ty(a, r, o);
        });
      }),
      (t.prototype.refresh = function () {
        var n = this.setContent(this.wrapper),
          a = n.contentChanged,
          i = n.valid;
        if (i) {
          var o = this.content;
          this.refreshWithoutReset(o),
            a &&
              (this.hooks.trigger(this.hooks.eventTypes.contentChanged, o),
              this.trigger(this.eventTypes.contentChanged, o)),
            this.scroller.resetPosition();
        }
      }),
      (t.prototype.enable = function () {
        this.scroller.enable(),
          this.hooks.trigger(this.hooks.eventTypes.enable),
          this.trigger(this.eventTypes.enable);
      }),
      (t.prototype.disable = function () {
        this.scroller.disable(),
          this.hooks.trigger(this.hooks.eventTypes.disable),
          this.trigger(this.eventTypes.disable);
      }),
      (t.prototype.destroy = function () {
        this.hooks.trigger(this.hooks.eventTypes.destroy),
          this.trigger(this.eventTypes.destroy),
          this.scroller.destroy();
      }),
      (t.prototype.eventRegister = function (n) {
        this.registerType(n);
      }),
      (t.plugins = []),
      (t.pluginsMap = {}),
      t
    );
  })(Bn);
function pr(e, t) {
  var n = new fr(e, t);
  return n;
}
pr.use = fr.use;
pr.plugins = fr.plugins;
pr.pluginsMap = fr.pluginsMap;
var vy = pr;
const by = {
  __name: "fullview1",
  setup(e) {
    const t = me(),
      n = me(),
      a = me(!1),
      i = 2,
      o = Ge().appContext.config.globalProperties,
      r = Oe(() => o.$isMobile());
    return (
      at(() => {
        n.value.addEventListener("load", () => {
          if (r.value) {
            let l = new vy(t.value, {
              probeType: 2,
              scrollX: !0,
              scrollY: !0,
              disableTouch: !1,
              disableMouse: !1,
              bindToWrapper: !0,
              eventPassthrough: "vertical",
              bounce: !1,
            });
            l.scrollTo(l.maxScrollX / i, 500),
              setTimeout(() => {
                l.on("scroll", () => {
                  a.value = !0;
                });
              }, 1e3);
          }
        });
      }),
      (l, s) => (
        K(),
        ie(
          "div",
          { class: "viewbox", ref_key: "viewbox", ref: t },
          [B("img", { ref_key: "viewImg", ref: n, src: zb }, null, 512)],
          512
        )
      )
    );
  },
};
const hr = (e) => (on("data-v-e4df9380"), (e = e()), rn(), e),
  yy = hr(() => B("div", { class: "memo" }, "\u7A7A\u62CD\u7F8E\u5316\u5716", -1)),
  wy = { "data-aos": "fade-up", ref: "dom_title", class: "title_box pointer-events-none" },
  _y = Le(" \u90FD\u66F4\u958B\u767C\u904D\u5730\u958B\u82B1 "),
  xy = hr(() => B("br", null, null, -1)),
  Ay = Le(
    " \u5357\u79D15\u5206\u9418\u65B0\u5584\u5316 \u5E02\u5FC3\u5347\u7D1A\u5982\u91CD\u5283 "
  ),
  Ey = [_y, xy, Ay],
  Ty = {
    ref: "dom_hr",
    class: "hr_box pointer-events-none",
    "data-aos": "flip-left",
    "data-aos-duration": "3000",
    "data-aos-delay": "300",
  },
  ky = hr(() =>
    B(
      "div",
      { "data-aos": "fade-up", class: "txt" },
      [
        Le(
          " \u5F9E\u5584\u5316\u5E02\u5834\u5916\u89C0\u518D\u9032\u5316\u3001\u591A\u500B\u5371\u8001\u90FD\u66F4\u6848\u555F\u52D5\u3001"
        ),
        B("br"),
        Le(
          " \u5230\u8D85\u904E6,000\u576A\u57FA\u5730\u5EFA\u8A2D\u958B\u767C\u6848\uFF0C\u52A0\u4E0A\u672A\u4F86\u6377\u904B\u6DF1\u7DA0\u7DDA\uFF0C"
        ),
        B("br"),
        Le(
          " \u5584\u5316\u5E02\u5340\u6B63\u4EE5\u9A5A\u4EBA\u7684\u901F\u5EA6\u767C\u5C55\uFF0C\u5546\u5708\u3001\u4EA4\u901A\u3001\u516C\u5171\u5EFA\u8A2D\u5168\u9762\u5347\u7D1A "
        ),
      ],
      -1
    )
  ),
  Sy = hr(() =>
    B(
      "div",
      { class: "finger absolute md:block pointer-events-none" },
      [B("img", { src: Nb, alt: "", srcset: "" })],
      -1
    )
  ),
  Cy = {
    __name: "map",
    emits: { el_height: null },
    setup(e, { emit: t }) {
      const n = me(null);
      return (
        at(() => {
          setTimeout(() => {
            t("sec_height", n.value.offsetHeight);
          }, 1e3);
        }),
        (a, i) => (
          K(),
          ie(
            "article",
            { ref_key: "dom", ref: n, class: "map" },
            [
              oe(by),
              yy,
              B("div", wy, Ey, 512),
              B("div", Ty, [oe(Ua, { class: "hr" })], 512),
              ky,
              Sy,
            ],
            512
          )
        )
      );
    },
  };
var Oy = _t(Cy, [["__scopeId", "data-v-e4df9380"]]),
  Py = "/lixin_ca3/dist/assets/title1.6632287f.png",
  Iy = "/lixin_ca3/dist/assets/title2.4b73345d.png";
function sd(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function Al(e = {}, t = {}) {
  Object.keys(t).forEach((n) => {
    typeof e[n] == "undefined"
      ? (e[n] = t[n])
      : sd(t[n]) && sd(e[n]) && Object.keys(t[n]).length > 0 && Al(e[n], t[n]);
  });
}
const rp = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
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
function He() {
  const e = typeof document != "undefined" ? document : {};
  return Al(e, rp), e;
}
const By = {
  document: rp,
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
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout == "undefined" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout != "undefined" && clearTimeout(e);
  },
};
function je() {
  const e = typeof window != "undefined" ? window : {};
  return Al(e, By), e;
}
function My(e) {
  const t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get() {
      return t;
    },
    set(n) {
      t.__proto__ = n;
    },
  });
}
class bn extends Array {
  constructor(t) {
    typeof t == "number" ? super(t) : (super(...(t || [])), My(this));
  }
}
function Ui(e = []) {
  const t = [];
  return (
    e.forEach((n) => {
      Array.isArray(n) ? t.push(...Ui(n)) : t.push(n);
    }),
    t
  );
}
function sp(e, t) {
  return Array.prototype.filter.call(e, t);
}
function Ly(e) {
  const t = [];
  for (let n = 0; n < e.length; n += 1) t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function Ry(e, t) {
  if (typeof e != "string") return [e];
  const n = [],
    a = t.querySelectorAll(e);
  for (let i = 0; i < a.length; i += 1) n.push(a[i]);
  return n;
}
function Z(e, t) {
  const n = je(),
    a = He();
  let i = [];
  if (!t && e instanceof bn) return e;
  if (!e) return new bn(i);
  if (typeof e == "string") {
    const o = e.trim();
    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
      let r = "div";
      o.indexOf("<li") === 0 && (r = "ul"),
        o.indexOf("<tr") === 0 && (r = "tbody"),
        (o.indexOf("<td") === 0 || o.indexOf("<th") === 0) && (r = "tr"),
        o.indexOf("<tbody") === 0 && (r = "table"),
        o.indexOf("<option") === 0 && (r = "select");
      const l = a.createElement(r);
      l.innerHTML = o;
      for (let s = 0; s < l.childNodes.length; s += 1) i.push(l.childNodes[s]);
    } else i = Ry(e.trim(), t || a);
  } else if (e.nodeType || e === n || e === a) i.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof bn) return e;
    i = e;
  }
  return new bn(Ly(i));
}
Z.fn = bn.prototype;
function Dy(...e) {
  const t = Ui(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.add(...t);
    }),
    this
  );
}
function Ny(...e) {
  const t = Ui(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.remove(...t);
    }),
    this
  );
}
function zy(...e) {
  const t = Ui(e.map((n) => n.split(" ")));
  this.forEach((n) => {
    t.forEach((a) => {
      n.classList.toggle(a);
    });
  });
}
function $y(...e) {
  const t = Ui(e.map((n) => n.split(" ")));
  return sp(this, (n) => t.filter((a) => n.classList.contains(a)).length > 0).length > 0;
}
function Fy(e, t) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (let n = 0; n < this.length; n += 1)
    if (arguments.length === 2) this[n].setAttribute(e, t);
    else for (const a in e) (this[n][a] = e[a]), this[n].setAttribute(a, e[a]);
  return this;
}
function jy(e) {
  for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
  return this;
}
function Vy(e) {
  for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
  return this;
}
function Yy(e) {
  for (let t = 0; t < this.length; t += 1)
    this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
  return this;
}
function Hy(...e) {
  let [t, n, a, i] = e;
  typeof e[1] == "function" && (([t, a, i] = e), (n = void 0)), i || (i = !1);
  function o(c) {
    const d = c.target;
    if (!d) return;
    const u = c.target.dom7EventData || [];
    if ((u.indexOf(c) < 0 && u.unshift(c), Z(d).is(n))) a.apply(d, u);
    else {
      const f = Z(d).parents();
      for (let v = 0; v < f.length; v += 1) Z(f[v]).is(n) && a.apply(f[v], u);
    }
  }
  function r(c) {
    const d = c && c.target ? c.target.dom7EventData || [] : [];
    d.indexOf(c) < 0 && d.unshift(c), a.apply(this, d);
  }
  const l = t.split(" ");
  let s;
  for (let c = 0; c < this.length; c += 1) {
    const d = this[c];
    if (n)
      for (s = 0; s < l.length; s += 1) {
        const u = l[s];
        d.dom7LiveListeners || (d.dom7LiveListeners = {}),
          d.dom7LiveListeners[u] || (d.dom7LiveListeners[u] = []),
          d.dom7LiveListeners[u].push({ listener: a, proxyListener: o }),
          d.addEventListener(u, o, i);
      }
    else
      for (s = 0; s < l.length; s += 1) {
        const u = l[s];
        d.dom7Listeners || (d.dom7Listeners = {}),
          d.dom7Listeners[u] || (d.dom7Listeners[u] = []),
          d.dom7Listeners[u].push({ listener: a, proxyListener: r }),
          d.addEventListener(u, r, i);
      }
  }
  return this;
}
function Uy(...e) {
  let [t, n, a, i] = e;
  typeof e[1] == "function" && (([t, a, i] = e), (n = void 0)), i || (i = !1);
  const o = t.split(" ");
  for (let r = 0; r < o.length; r += 1) {
    const l = o[r];
    for (let s = 0; s < this.length; s += 1) {
      const c = this[s];
      let d;
      if (
        (!n && c.dom7Listeners
          ? (d = c.dom7Listeners[l])
          : n && c.dom7LiveListeners && (d = c.dom7LiveListeners[l]),
        d && d.length)
      )
        for (let u = d.length - 1; u >= 0; u -= 1) {
          const f = d[u];
          (a && f.listener === a) ||
          (a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a)
            ? (c.removeEventListener(l, f.proxyListener, i), d.splice(u, 1))
            : a || (c.removeEventListener(l, f.proxyListener, i), d.splice(u, 1));
        }
    }
  }
  return this;
}
function Gy(...e) {
  const t = je(),
    n = e[0].split(" "),
    a = e[1];
  for (let i = 0; i < n.length; i += 1) {
    const o = n[i];
    for (let r = 0; r < this.length; r += 1) {
      const l = this[r];
      if (t.CustomEvent) {
        const s = new t.CustomEvent(o, { detail: a, bubbles: !0, cancelable: !0 });
        (l.dom7EventData = e.filter((c, d) => d > 0)),
          l.dispatchEvent(s),
          (l.dom7EventData = []),
          delete l.dom7EventData;
      }
    }
  }
  return this;
}
function Wy(e) {
  const t = this;
  function n(a) {
    a.target === this && (e.call(this, a), t.off("transitionend", n));
  }
  return e && t.on("transitionend", n), this;
}
function Ky(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(t.getPropertyValue("margin-right")) +
        parseFloat(t.getPropertyValue("margin-left"))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function Qy(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(t.getPropertyValue("margin-top")) +
        parseFloat(t.getPropertyValue("margin-bottom"))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function Xy() {
  if (this.length > 0) {
    const e = je(),
      t = He(),
      n = this[0],
      a = n.getBoundingClientRect(),
      i = t.body,
      o = n.clientTop || i.clientTop || 0,
      r = n.clientLeft || i.clientLeft || 0,
      l = n === e ? e.scrollY : n.scrollTop,
      s = n === e ? e.scrollX : n.scrollLeft;
    return { top: a.top + l - o, left: a.left + s - r };
  }
  return null;
}
function qy() {
  const e = je();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}
function Zy(e, t) {
  const n = je();
  let a;
  if (arguments.length === 1)
    if (typeof e == "string") {
      if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
    } else {
      for (a = 0; a < this.length; a += 1) for (const i in e) this[a].style[i] = e[i];
      return this;
    }
  if (arguments.length === 2 && typeof e == "string") {
    for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
    return this;
  }
  return this;
}
function Jy(e) {
  return e
    ? (this.forEach((t, n) => {
        e.apply(t, [t, n]);
      }),
      this)
    : this;
}
function e1(e) {
  const t = sp(this, e);
  return Z(t);
}
function t1(e) {
  if (typeof e == "undefined") return this[0] ? this[0].innerHTML : null;
  for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
  return this;
}
function n1(e) {
  if (typeof e == "undefined") return this[0] ? this[0].textContent.trim() : null;
  for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
  return this;
}
function a1(e) {
  const t = je(),
    n = He(),
    a = this[0];
  let i, o;
  if (!a || typeof e == "undefined") return !1;
  if (typeof e == "string") {
    if (a.matches) return a.matches(e);
    if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
    if (a.msMatchesSelector) return a.msMatchesSelector(e);
    for (i = Z(e), o = 0; o < i.length; o += 1) if (i[o] === a) return !0;
    return !1;
  }
  if (e === n) return a === n;
  if (e === t) return a === t;
  if (e.nodeType || e instanceof bn) {
    for (i = e.nodeType ? [e] : e, o = 0; o < i.length; o += 1) if (i[o] === a) return !0;
    return !1;
  }
  return !1;
}
function i1() {
  let e = this[0],
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (t += 1);
    return t;
  }
}
function o1(e) {
  if (typeof e == "undefined") return this;
  const t = this.length;
  if (e > t - 1) return Z([]);
  if (e < 0) {
    const n = t + e;
    return n < 0 ? Z([]) : Z([this[n]]);
  }
  return Z([this[e]]);
}
function r1(...e) {
  let t;
  const n = He();
  for (let a = 0; a < e.length; a += 1) {
    t = e[a];
    for (let i = 0; i < this.length; i += 1)
      if (typeof t == "string") {
        const o = n.createElement("div");
        for (o.innerHTML = t; o.firstChild; ) this[i].appendChild(o.firstChild);
      } else if (t instanceof bn) for (let o = 0; o < t.length; o += 1) this[i].appendChild(t[o]);
      else this[i].appendChild(t);
  }
  return this;
}
function s1(e) {
  const t = He();
  let n, a;
  for (n = 0; n < this.length; n += 1)
    if (typeof e == "string") {
      const i = t.createElement("div");
      for (i.innerHTML = e, a = i.childNodes.length - 1; a >= 0; a -= 1)
        this[n].insertBefore(i.childNodes[a], this[n].childNodes[0]);
    } else if (e instanceof bn)
      for (a = 0; a < e.length; a += 1) this[n].insertBefore(e[a], this[n].childNodes[0]);
    else this[n].insertBefore(e, this[n].childNodes[0]);
  return this;
}
function l1(e) {
  return this.length > 0
    ? e
      ? this[0].nextElementSibling && Z(this[0].nextElementSibling).is(e)
        ? Z([this[0].nextElementSibling])
        : Z([])
      : this[0].nextElementSibling
      ? Z([this[0].nextElementSibling])
      : Z([])
    : Z([]);
}
function c1(e) {
  const t = [];
  let n = this[0];
  if (!n) return Z([]);
  for (; n.nextElementSibling; ) {
    const a = n.nextElementSibling;
    e ? Z(a).is(e) && t.push(a) : t.push(a), (n = a);
  }
  return Z(t);
}
function d1(e) {
  if (this.length > 0) {
    const t = this[0];
    return e
      ? t.previousElementSibling && Z(t.previousElementSibling).is(e)
        ? Z([t.previousElementSibling])
        : Z([])
      : t.previousElementSibling
      ? Z([t.previousElementSibling])
      : Z([]);
  }
  return Z([]);
}
function u1(e) {
  const t = [];
  let n = this[0];
  if (!n) return Z([]);
  for (; n.previousElementSibling; ) {
    const a = n.previousElementSibling;
    e ? Z(a).is(e) && t.push(a) : t.push(a), (n = a);
  }
  return Z(t);
}
function f1(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode !== null &&
      (e ? Z(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
  return Z(t);
}
function p1(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    let a = this[n].parentNode;
    for (; a; ) e ? Z(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
  }
  return Z(t);
}
function h1(e) {
  let t = this;
  return typeof e == "undefined" ? Z([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}
function m1(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const a = this[n].querySelectorAll(e);
    for (let i = 0; i < a.length; i += 1) t.push(a[i]);
  }
  return Z(t);
}
function g1(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const a = this[n].children;
    for (let i = 0; i < a.length; i += 1) (!e || Z(a[i]).is(e)) && t.push(a[i]);
  }
  return Z(t);
}
function v1() {
  for (let e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  return this;
}
const ld = {
  addClass: Dy,
  removeClass: Ny,
  hasClass: $y,
  toggleClass: zy,
  attr: Fy,
  removeAttr: jy,
  transform: Vy,
  transition: Yy,
  on: Hy,
  off: Uy,
  trigger: Gy,
  transitionEnd: Wy,
  outerWidth: Ky,
  outerHeight: Qy,
  styles: qy,
  offset: Xy,
  css: Zy,
  each: Jy,
  html: t1,
  text: n1,
  is: a1,
  index: i1,
  eq: o1,
  append: r1,
  prepend: s1,
  next: l1,
  nextAll: c1,
  prev: d1,
  prevAll: u1,
  parent: f1,
  parents: p1,
  closest: h1,
  find: m1,
  children: g1,
  filter: e1,
  remove: v1,
};
Object.keys(ld).forEach((e) => {
  Object.defineProperty(Z.fn, e, { value: ld[e], writable: !0 });
});
function b1(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Fo(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function Si() {
  return Date.now();
}
function y1(e) {
  const t = je();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function w1(e, t) {
  t === void 0 && (t = "x");
  const n = je();
  let a, i, o;
  const r = y1(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = r.transform || r.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (o = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((o =
          r.MozTransform ||
          r.OTransform ||
          r.MsTransform ||
          r.msTransform ||
          r.transform ||
          r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")),
        (a = o.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = o.m41)
        : a.length === 16
        ? (i = parseFloat(a[12]))
        : (i = parseFloat(a[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = o.m42)
        : a.length === 16
        ? (i = parseFloat(a[13]))
        : (i = parseFloat(a[5]))),
    i || 0
  );
}
function ho(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function _1(e) {
  return typeof window != "undefined" && typeof window.HTMLElement != "undefined"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function st() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const a = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (a != null && !_1(a)) {
      const i = Object.keys(Object(a)).filter((o) => t.indexOf(o) < 0);
      for (let o = 0, r = i.length; o < r; o += 1) {
        const l = i[o],
          s = Object.getOwnPropertyDescriptor(a, l);
        s !== void 0 &&
          s.enumerable &&
          (ho(e[l]) && ho(a[l])
            ? a[l].__swiper__
              ? (e[l] = a[l])
              : st(e[l], a[l])
            : !ho(e[l]) && ho(a[l])
            ? ((e[l] = {}), a[l].__swiper__ ? (e[l] = a[l]) : st(e[l], a[l]))
            : (e[l] = a[l]));
      }
    }
  }
  return e;
}
function mo(e, t, n) {
  e.style.setProperty(t, n);
}
function lp(e) {
  let { swiper: t, targetPosition: n, side: a } = e;
  const i = je(),
    o = -t.translate;
  let r = null,
    l;
  const s = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(t.cssModeFrameID);
  const c = n > o ? "next" : "prev",
    d = (f, v) => (c === "next" && f >= v) || (c === "prev" && f <= v),
    u = () => {
      (l = new Date().getTime()), r === null && (r = l);
      const f = Math.max(Math.min((l - r) / s, 1), 0),
        v = 0.5 - Math.cos(f * Math.PI) / 2;
      let m = o + v * (n - o);
      if ((d(m, n) && (m = n), t.wrapperEl.scrollTo({ [a]: m }), d(m, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [a]: m });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(u);
    };
  u();
}
let Yr;
function x1() {
  const e = je(),
    t = He();
  return {
    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
    passiveListener: (function () {
      let a = !1;
      try {
        const i = Object.defineProperty({}, "passive", {
          get() {
            a = !0;
          },
        });
        e.addEventListener("testPassiveListener", null, i);
      } catch {}
      return a;
    })(),
    gestures: (function () {
      return "ongesturestart" in e;
    })(),
  };
}
function cp() {
  return Yr || (Yr = x1()), Yr;
}
let Hr;
function A1(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = cp(),
    a = je(),
    i = a.navigator.platform,
    o = t || a.navigator.userAgent,
    r = { ios: !1, android: !1 },
    l = a.screen.width,
    s = a.screen.height,
    c = o.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = o.match(/(iPad).*OS\s([\d_]+)/);
  const u = o.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !d && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = i === "Win32";
  let m = i === "MacIntel";
  const p = [
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
  ];
  return (
    !d &&
      m &&
      n.touch &&
      p.indexOf(`${l}x${s}`) >= 0 &&
      ((d = o.match(/(Version)\/([\d.]+)/)), d || (d = [0, 1, "13_0_0"]), (m = !1)),
    c && !v && ((r.os = "android"), (r.android = !0)),
    (d || f || u) && ((r.os = "ios"), (r.ios = !0)),
    r
  );
}
function E1(e) {
  return e === void 0 && (e = {}), Hr || (Hr = A1(e)), Hr;
}
let Ur;
function T1() {
  const e = je();
  function t() {
    const n = e.navigator.userAgent.toLowerCase();
    return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0;
  }
  return {
    isSafari: t(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
  };
}
function k1() {
  return Ur || (Ur = T1()), Ur;
}
function S1(e) {
  let { swiper: t, on: n, emit: a } = e;
  const i = je();
  let o = null,
    r = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (a("beforeResize"), a("resize"));
    },
    s = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((o = new ResizeObserver((u) => {
          r = i.requestAnimationFrame(() => {
            const { width: f, height: v } = t;
            let m = f,
              p = v;
            u.forEach((g) => {
              let { contentBoxSize: b, contentRect: h, target: w } = g;
              (w && w !== t.el) ||
                ((m = h ? h.width : (b[0] || b).inlineSize),
                (p = h ? h.height : (b[0] || b).blockSize));
            }),
              (m !== f || p !== v) && l();
          });
        })),
        o.observe(t.el));
    },
    c = () => {
      r && i.cancelAnimationFrame(r), o && o.unobserve && t.el && (o.unobserve(t.el), (o = null));
    },
    d = () => {
      !t || t.destroyed || !t.initialized || a("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver != "undefined") {
      s();
      return;
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", d);
  }),
    n("destroy", () => {
      c(), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", d);
    });
}
function C1(e) {
  let { swiper: t, extendParams: n, on: a, emit: i } = e;
  const o = [],
    r = je(),
    l = function (d, u) {
      u === void 0 && (u = {});
      const f = r.MutationObserver || r.WebkitMutationObserver,
        v = new f((m) => {
          if (m.length === 1) {
            i("observerUpdate", m[0]);
            return;
          }
          const p = function () {
            i("observerUpdate", m[0]);
          };
          r.requestAnimationFrame ? r.requestAnimationFrame(p) : r.setTimeout(p, 0);
        });
      v.observe(d, {
        attributes: typeof u.attributes == "undefined" ? !0 : u.attributes,
        childList: typeof u.childList == "undefined" ? !0 : u.childList,
        characterData: typeof u.characterData == "undefined" ? !0 : u.characterData,
      }),
        o.push(v);
    },
    s = () => {
      if (!!t.params.observer) {
        if (t.params.observeParents) {
          const d = t.$el.parents();
          for (let u = 0; u < d.length; u += 1) l(d[u]);
        }
        l(t.$el[0], { childList: t.params.observeSlideChildren }),
          l(t.$wrapperEl[0], { attributes: !1 });
      }
    },
    c = () => {
      o.forEach((d) => {
        d.disconnect();
      }),
        o.splice(0, o.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), a("init", s), a("destroy", c);
}
var O1 = {
  on(e, t, n) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || typeof t != "function") return a;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((o) => {
        a.eventsListeners[o] || (a.eventsListeners[o] = []), a.eventsListeners[o][i](t);
      }),
      a
    );
  },
  once(e, t, n) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || typeof t != "function") return a;
    function i() {
      a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var o = arguments.length, r = new Array(o), l = 0; l < o; l++) r[l] = arguments[l];
      t.apply(a, r);
    }
    return (i.__emitterProxy = t), a.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const a = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[a](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((a) => {
          typeof t == "undefined"
            ? (n.eventsListeners[a] = [])
            : n.eventsListeners[a] &&
              n.eventsListeners[a].forEach((i, o) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[a].splice(o, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, a;
    for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r];
    return (
      typeof o[0] == "string" || Array.isArray(o[0])
        ? ((t = o[0]), (n = o.slice(1, o.length)), (a = e))
        : ((t = o[0].events), (n = o[0].data), (a = o[0].context || e)),
      n.unshift(a),
      (Array.isArray(t) ? t : t.split(" ")).forEach((s) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(a, [s, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[s] &&
            e.eventsListeners[s].forEach((c) => {
              c.apply(a, n);
            });
      }),
      e
    );
  },
};
function P1() {
  const e = this;
  let t, n;
  const a = e.$el;
  typeof e.params.width != "undefined" && e.params.width !== null
    ? (t = e.params.width)
    : (t = a[0].clientWidth),
    typeof e.params.height != "undefined" && e.params.height !== null
      ? (n = e.params.height)
      : (n = a[0].clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10)),
      (n =
        n - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }));
}
function I1() {
  const e = this;
  function t(P) {
    return e.isHorizontal()
      ? P
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[P];
  }
  function n(P, k) {
    return parseFloat(P.getPropertyValue(t(k)) || 0);
  }
  const a = e.params,
    { $wrapperEl: i, size: o, rtlTranslate: r, wrongRTL: l } = e,
    s = e.virtual && a.virtual.enabled,
    c = s ? e.virtual.slides.length : e.slides.length,
    d = i.children(`.${e.params.slideClass}`),
    u = s ? e.virtual.slides.length : d.length;
  let f = [];
  const v = [],
    m = [];
  let p = a.slidesOffsetBefore;
  typeof p == "function" && (p = a.slidesOffsetBefore.call(e));
  let g = a.slidesOffsetAfter;
  typeof g == "function" && (g = a.slidesOffsetAfter.call(e));
  const b = e.snapGrid.length,
    h = e.slidesGrid.length;
  let w = a.spaceBetween,
    x = -p,
    S = 0,
    _ = 0;
  if (typeof o == "undefined") return;
  typeof w == "string" && w.indexOf("%") >= 0 && (w = (parseFloat(w.replace("%", "")) / 100) * o),
    (e.virtualSize = -w),
    r
      ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    a.centeredSlides &&
      a.cssMode &&
      (mo(e.wrapperEl, "--swiper-centered-offset-before", ""),
      mo(e.wrapperEl, "--swiper-centered-offset-after", ""));
  const C = a.grid && a.grid.rows > 1 && e.grid;
  C && e.grid.initSlides(u);
  let T;
  const L =
    a.slidesPerView === "auto" &&
    a.breakpoints &&
    Object.keys(a.breakpoints).filter((P) => typeof a.breakpoints[P].slidesPerView != "undefined")
      .length > 0;
  for (let P = 0; P < u; P += 1) {
    T = 0;
    const k = d.eq(P);
    if ((C && e.grid.updateSlide(P, k, u, t), k.css("display") !== "none")) {
      if (a.slidesPerView === "auto") {
        L && (d[P].style[t("width")] = "");
        const A = getComputedStyle(k[0]),
          R = k[0].style.transform,
          O = k[0].style.webkitTransform;
        if (
          (R && (k[0].style.transform = "none"),
          O && (k[0].style.webkitTransform = "none"),
          a.roundLengths)
        )
          T = e.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(!0);
        else {
          const Q = n(A, "width"),
            $ = n(A, "padding-left"),
            ee = n(A, "padding-right"),
            ae = n(A, "margin-left"),
            he = n(A, "margin-right"),
            j = A.getPropertyValue("box-sizing");
          if (j && j === "border-box") T = Q + ae + he;
          else {
            const { clientWidth: J, offsetWidth: D } = k[0];
            T = Q + $ + ee + ae + he + (D - J);
          }
        }
        R && (k[0].style.transform = R),
          O && (k[0].style.webkitTransform = O),
          a.roundLengths && (T = Math.floor(T));
      } else
        (T = (o - (a.slidesPerView - 1) * w) / a.slidesPerView),
          a.roundLengths && (T = Math.floor(T)),
          d[P] && (d[P].style[t("width")] = `${T}px`);
      d[P] && (d[P].swiperSlideSize = T),
        m.push(T),
        a.centeredSlides
          ? ((x = x + T / 2 + S / 2 + w),
            S === 0 && P !== 0 && (x = x - o / 2 - w),
            P === 0 && (x = x - o / 2 - w),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            a.roundLengths && (x = Math.floor(x)),
            _ % a.slidesPerGroup === 0 && f.push(x),
            v.push(x))
          : (a.roundLengths && (x = Math.floor(x)),
            (_ - Math.min(e.params.slidesPerGroupSkip, _)) % e.params.slidesPerGroup === 0 &&
              f.push(x),
            v.push(x),
            (x = x + T + w)),
        (e.virtualSize += T + w),
        (S = T),
        (_ += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, o) + g),
    r &&
      l &&
      (a.effect === "slide" || a.effect === "coverflow") &&
      i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
    a.setWrapperSize && i.css({ [t("width")]: `${e.virtualSize + a.spaceBetween}px` }),
    C && e.grid.updateWrapperSize(T, f, t),
    !a.centeredSlides)
  ) {
    const P = [];
    for (let k = 0; k < f.length; k += 1) {
      let A = f[k];
      a.roundLengths && (A = Math.floor(A)), f[k] <= e.virtualSize - o && P.push(A);
    }
    (f = P),
      Math.floor(e.virtualSize - o) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - o);
  }
  if ((f.length === 0 && (f = [0]), a.spaceBetween !== 0)) {
    const P = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
    d.filter((k, A) => (a.cssMode ? A !== d.length - 1 : !0)).css({ [P]: `${w}px` });
  }
  if (a.centeredSlides && a.centeredSlidesBounds) {
    let P = 0;
    m.forEach((A) => {
      P += A + (a.spaceBetween ? a.spaceBetween : 0);
    }),
      (P -= a.spaceBetween);
    const k = P - o;
    f = f.map((A) => (A < 0 ? -p : A > k ? k + g : A));
  }
  if (a.centerInsufficientSlides) {
    let P = 0;
    if (
      (m.forEach((k) => {
        P += k + (a.spaceBetween ? a.spaceBetween : 0);
      }),
      (P -= a.spaceBetween),
      P < o)
    ) {
      const k = (o - P) / 2;
      f.forEach((A, R) => {
        f[R] = A - k;
      }),
        v.forEach((A, R) => {
          v[R] = A + k;
        });
    }
  }
  if (
    (Object.assign(e, { slides: d, snapGrid: f, slidesGrid: v, slidesSizesGrid: m }),
    a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
  ) {
    mo(e.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
      mo(e.wrapperEl, "--swiper-centered-offset-after", `${e.size / 2 - m[m.length - 1] / 2}px`);
    const P = -e.snapGrid[0],
      k = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((A) => A + P)), (e.slidesGrid = e.slidesGrid.map((A) => A + k));
  }
  if (
    (u !== c && e.emit("slidesLengthChange"),
    f.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
    v.length !== h && e.emit("slidesGridLengthChange"),
    a.watchSlidesProgress && e.updateSlidesOffset(),
    !s && !a.cssMode && (a.effect === "slide" || a.effect === "fade"))
  ) {
    const P = `${a.containerModifierClass}backface-hidden`,
      k = e.$el.hasClass(P);
    u <= a.maxBackfaceHiddenSlides ? k || e.$el.addClass(P) : k && e.$el.removeClass(P);
  }
}
function B1(e) {
  const t = this,
    n = [],
    a = t.virtual && t.params.virtual.enabled;
  let i = 0,
    o;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const r = (l) =>
    a
      ? t.slides.filter((s) => parseInt(s.getAttribute("data-swiper-slide-index"), 10) === l)[0]
      : t.slides.eq(l)[0];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || Z([])).each((l) => {
        n.push(l);
      });
    else
      for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
        const l = t.activeIndex + o;
        if (l > t.slides.length && !a) break;
        n.push(r(l));
      }
  else n.push(r(t.activeIndex));
  for (o = 0; o < n.length; o += 1)
    if (typeof n[o] != "undefined") {
      const l = n[o].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && t.$wrapperEl.css("height", `${i}px`);
}
function M1() {
  const e = this,
    t = e.slides;
  for (let n = 0; n < t.length; n += 1)
    t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop;
}
function L1(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: a, rtlTranslate: i, snapGrid: o } = t;
  if (a.length === 0) return;
  typeof a[0].swiperSlideOffset == "undefined" && t.updateSlidesOffset();
  let r = -e;
  i && (r = e),
    a.removeClass(n.slideVisibleClass),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  for (let l = 0; l < a.length; l += 1) {
    const s = a[l];
    let c = s.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= a[0].swiperSlideOffset);
    const d =
        (r + (n.centeredSlides ? t.minTranslate() : 0) - c) / (s.swiperSlideSize + n.spaceBetween),
      u =
        (r - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (s.swiperSlideSize + n.spaceBetween),
      f = -(r - c),
      v = f + t.slidesSizesGrid[l];
    ((f >= 0 && f < t.size - 1) || (v > 1 && v <= t.size) || (f <= 0 && v >= t.size)) &&
      (t.visibleSlides.push(s),
      t.visibleSlidesIndexes.push(l),
      a.eq(l).addClass(n.slideVisibleClass)),
      (s.progress = i ? -d : d),
      (s.originalProgress = i ? -u : u);
  }
  t.visibleSlides = Z(t.visibleSlides);
}
function R1(e) {
  const t = this;
  if (typeof e == "undefined") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    a = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: o, isEnd: r } = t;
  const l = o,
    s = r;
  a === 0
    ? ((i = 0), (o = !0), (r = !0))
    : ((i = (e - t.minTranslate()) / a), (o = i <= 0), (r = i >= 1)),
    Object.assign(t, { progress: i, isBeginning: o, isEnd: r }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
    o && !l && t.emit("reachBeginning toEdge"),
    r && !s && t.emit("reachEnd toEdge"),
    ((l && !o) || (s && !r)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function D1() {
  const e = this,
    { slides: t, params: n, $wrapperEl: a, activeIndex: i, realIndex: o } = e,
    r = e.virtual && n.virtual.enabled;
  t.removeClass(
    `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
  );
  let l;
  r ? (l = e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`)) : (l = t.eq(i)),
    l.addClass(n.slideActiveClass),
    n.loop &&
      (l.hasClass(n.slideDuplicateClass)
        ? a
            .children(
              `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
            )
            .addClass(n.slideDuplicateActiveClass)
        : a
            .children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`)
            .addClass(n.slideDuplicateActiveClass));
  let s = l.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
  n.loop && s.length === 0 && ((s = t.eq(0)), s.addClass(n.slideNextClass));
  let c = l.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
  n.loop && c.length === 0 && ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
    n.loop &&
      (s.hasClass(n.slideDuplicateClass)
        ? a
            .children(
              `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicateNextClass)
        : a
            .children(
              `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicateNextClass),
      c.hasClass(n.slideDuplicateClass)
        ? a
            .children(
              `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicatePrevClass)
        : a
            .children(
              `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicatePrevClass)),
    e.emitSlidesClasses();
}
function N1(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { slidesGrid: a, snapGrid: i, params: o, activeIndex: r, realIndex: l, snapIndex: s } = t;
  let c = e,
    d;
  if (typeof c == "undefined") {
    for (let f = 0; f < a.length; f += 1)
      typeof a[f + 1] != "undefined"
        ? n >= a[f] && n < a[f + 1] - (a[f + 1] - a[f]) / 2
          ? (c = f)
          : n >= a[f] && n < a[f + 1] && (c = f + 1)
        : n >= a[f] && (c = f);
    o.normalizeSlideIndex && (c < 0 || typeof c == "undefined") && (c = 0);
  }
  if (i.indexOf(n) >= 0) d = i.indexOf(n);
  else {
    const f = Math.min(o.slidesPerGroupSkip, c);
    d = f + Math.floor((c - f) / o.slidesPerGroup);
  }
  if ((d >= i.length && (d = i.length - 1), c === r)) {
    d !== s && ((t.snapIndex = d), t.emit("snapIndexChange"));
    return;
  }
  const u = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
  Object.assign(t, { snapIndex: d, realIndex: u, previousIndex: r, activeIndex: c }),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    l !== u && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function z1(e) {
  const t = this,
    n = t.params,
    a = Z(e).closest(`.${n.slideClass}`)[0];
  let i = !1,
    o;
  if (a) {
    for (let r = 0; r < t.slides.length; r += 1)
      if (t.slides[r] === a) {
        (i = !0), (o = r);
        break;
      }
  }
  if (a && i)
    (t.clickedSlide = a),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(Z(a).attr("data-swiper-slide-index"), 10))
        : (t.clickedIndex = o);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
var $1 = {
  updateSize: P1,
  updateSlides: I1,
  updateAutoHeight: B1,
  updateSlidesOffset: M1,
  updateSlidesProgress: L1,
  updateProgress: R1,
  updateSlidesClasses: D1,
  updateActiveIndex: N1,
  updateClickedSlide: z1,
};
function F1(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: a, translate: i, $wrapperEl: o } = t;
  if (n.virtualTranslate) return a ? -i : i;
  if (n.cssMode) return i;
  let r = w1(o[0], e);
  return a && (r = -r), r || 0;
}
function j1(e, t) {
  const n = this,
    { rtlTranslate: a, params: i, $wrapperEl: o, wrapperEl: r, progress: l } = n;
  let s = 0,
    c = 0;
  const d = 0;
  n.isHorizontal() ? (s = a ? -e : e) : (c = e),
    i.roundLengths && ((s = Math.floor(s)), (c = Math.floor(c))),
    i.cssMode
      ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -s : -c)
      : i.virtualTranslate || o.transform(`translate3d(${s}px, ${c}px, ${d}px)`),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? s : c);
  let u;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (u = 0) : (u = (e - n.minTranslate()) / f),
    u !== l && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function V1() {
  return -this.snapGrid[0];
}
function Y1() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function H1(e, t, n, a, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    a === void 0 && (a = !0);
  const o = this,
    { params: r, wrapperEl: l } = o;
  if (o.animating && r.preventInteractionOnTransition) return !1;
  const s = o.minTranslate(),
    c = o.maxTranslate();
  let d;
  if ((a && e > s ? (d = s) : a && e < c ? (d = c) : (d = e), o.updateProgress(d), r.cssMode)) {
    const u = o.isHorizontal();
    if (t === 0) l[u ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!o.support.smoothScroll)
        return lp({ swiper: o, targetPosition: -d, side: u ? "left" : "top" }), !0;
      l.scrollTo({ [u ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (o.setTransition(0),
        o.setTranslate(d),
        n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd")))
      : (o.setTransition(t),
        o.setTranslate(d),
        n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")),
        o.animating ||
          ((o.animating = !0),
          o.onTranslateToWrapperTransitionEnd ||
            (o.onTranslateToWrapperTransitionEnd = function (f) {
              !o ||
                o.destroyed ||
                (f.target === this &&
                  (o.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  (o.onTranslateToWrapperTransitionEnd = null),
                  delete o.onTranslateToWrapperTransitionEnd,
                  n && o.emit("transitionEnd")));
            }),
          o.$wrapperEl[0].addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd),
          o.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            o.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var U1 = {
  getTranslate: F1,
  setTranslate: j1,
  minTranslate: V1,
  maxTranslate: Y1,
  translateTo: H1,
};
function G1(e, t) {
  const n = this;
  n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t);
}
function dp(e) {
  let { swiper: t, runCallbacks: n, direction: a, step: i } = e;
  const { activeIndex: o, previousIndex: r } = t;
  let l = a;
  if (
    (l || (o > r ? (l = "next") : o < r ? (l = "prev") : (l = "reset")),
    t.emit(`transition${i}`),
    n && o !== r)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      l === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
  }
}
function W1(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: a } = n;
  a.cssMode ||
    (a.autoHeight && n.updateAutoHeight(),
    dp({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function K1(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: a } = n;
  (n.animating = !1),
    !a.cssMode &&
      (n.setTransition(0), dp({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var Q1 = { setTransition: G1, transitionStart: W1, transitionEnd: K1 };
function X1(e, t, n, a, i) {
  if (
    (e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e != "number" && typeof e != "string")
  )
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
    );
  if (typeof e == "string") {
    const w = parseInt(e, 10);
    if (!isFinite(w))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = w;
  }
  const o = this;
  let r = e;
  r < 0 && (r = 0);
  const {
    params: l,
    snapGrid: s,
    slidesGrid: c,
    previousIndex: d,
    activeIndex: u,
    rtlTranslate: f,
    wrapperEl: v,
    enabled: m,
  } = o;
  if ((o.animating && l.preventInteractionOnTransition) || (!m && !a && !i)) return !1;
  const p = Math.min(o.params.slidesPerGroupSkip, r);
  let g = p + Math.floor((r - p) / o.params.slidesPerGroup);
  g >= s.length && (g = s.length - 1),
    (u || l.initialSlide || 0) === (d || 0) && n && o.emit("beforeSlideChangeStart");
  const b = -s[g];
  if ((o.updateProgress(b), l.normalizeSlideIndex))
    for (let w = 0; w < c.length; w += 1) {
      const x = -Math.floor(b * 100),
        S = Math.floor(c[w] * 100),
        _ = Math.floor(c[w + 1] * 100);
      typeof c[w + 1] != "undefined"
        ? x >= S && x < _ - (_ - S) / 2
          ? (r = w)
          : x >= S && x < _ && (r = w + 1)
        : x >= S && (r = w);
    }
  if (
    o.initialized &&
    r !== u &&
    ((!o.allowSlideNext && b < o.translate && b < o.minTranslate()) ||
      (!o.allowSlidePrev && b > o.translate && b > o.maxTranslate() && (u || 0) !== r))
  )
    return !1;
  let h;
  if (
    (r > u ? (h = "next") : r < u ? (h = "prev") : (h = "reset"),
    (f && -b === o.translate) || (!f && b === o.translate))
  )
    return (
      o.updateActiveIndex(r),
      l.autoHeight && o.updateAutoHeight(),
      o.updateSlidesClasses(),
      l.effect !== "slide" && o.setTranslate(b),
      h !== "reset" && (o.transitionStart(n, h), o.transitionEnd(n, h)),
      !1
    );
  if (l.cssMode) {
    const w = o.isHorizontal(),
      x = f ? b : -b;
    if (t === 0) {
      const S = o.virtual && o.params.virtual.enabled;
      S && ((o.wrapperEl.style.scrollSnapType = "none"), (o._immediateVirtual = !0)),
        (v[w ? "scrollLeft" : "scrollTop"] = x),
        S &&
          requestAnimationFrame(() => {
            (o.wrapperEl.style.scrollSnapType = ""), (o._swiperImmediateVirtual = !1);
          });
    } else {
      if (!o.support.smoothScroll)
        return lp({ swiper: o, targetPosition: x, side: w ? "left" : "top" }), !0;
      v.scrollTo({ [w ? "left" : "top"]: x, behavior: "smooth" });
    }
    return !0;
  }
  return (
    o.setTransition(t),
    o.setTranslate(b),
    o.updateActiveIndex(r),
    o.updateSlidesClasses(),
    o.emit("beforeTransitionStart", t, a),
    o.transitionStart(n, h),
    t === 0
      ? o.transitionEnd(n, h)
      : o.animating ||
        ((o.animating = !0),
        o.onSlideToWrapperTransitionEnd ||
          (o.onSlideToWrapperTransitionEnd = function (x) {
            !o ||
              o.destroyed ||
              (x.target === this &&
                (o.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  o.onSlideToWrapperTransitionEnd
                ),
                (o.onSlideToWrapperTransitionEnd = null),
                delete o.onSlideToWrapperTransitionEnd,
                o.transitionEnd(n, h)));
          }),
        o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd),
        o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd)),
    !0
  );
}
function q1(e, t, n, a) {
  if (
    (e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string")
  ) {
    const r = parseInt(e, 10);
    if (!isFinite(r))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = r;
  }
  const i = this;
  let o = e;
  return i.params.loop && (o += i.loopedSlides), i.slideTo(o, t, n, a);
}
function Z1(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const a = this,
    { animating: i, enabled: o, params: r } = a;
  if (!o) return a;
  let l = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
  const s = a.activeIndex < r.slidesPerGroupSkip ? 1 : l;
  if (r.loop) {
    if (i && r.loopPreventsSlide) return !1;
    a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
  }
  return r.rewind && a.isEnd ? a.slideTo(0, e, t, n) : a.slideTo(a.activeIndex + s, e, t, n);
}
function J1(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const a = this,
    { params: i, animating: o, snapGrid: r, slidesGrid: l, rtlTranslate: s, enabled: c } = a;
  if (!c) return a;
  if (i.loop) {
    if (o && i.loopPreventsSlide) return !1;
    a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
  }
  const d = s ? a.translate : -a.translate;
  function u(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
  }
  const f = u(d),
    v = r.map((g) => u(g));
  let m = r[v.indexOf(f) - 1];
  if (typeof m == "undefined" && i.cssMode) {
    let g;
    r.forEach((b, h) => {
      f >= b && (g = h);
    }),
      typeof g != "undefined" && (m = r[g > 0 ? g - 1 : g]);
  }
  let p = 0;
  if (
    (typeof m != "undefined" &&
      ((p = l.indexOf(m)),
      p < 0 && (p = a.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((p = p - a.slidesPerViewDynamic("previous", !0) + 1), (p = Math.max(p, 0)))),
    i.rewind && a.isBeginning)
  ) {
    const g =
      a.params.virtual && a.params.virtual.enabled && a.virtual
        ? a.virtual.slides.length - 1
        : a.slides.length - 1;
    return a.slideTo(g, e, t, n);
  }
  return a.slideTo(p, e, t, n);
}
function ew(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const a = this;
  return a.slideTo(a.activeIndex, e, t, n);
}
function tw(e, t, n, a) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), a === void 0 && (a = 0.5);
  const i = this;
  let o = i.activeIndex;
  const r = Math.min(i.params.slidesPerGroupSkip, o),
    l = r + Math.floor((o - r) / i.params.slidesPerGroup),
    s = i.rtlTranslate ? i.translate : -i.translate;
  if (s >= i.snapGrid[l]) {
    const c = i.snapGrid[l],
      d = i.snapGrid[l + 1];
    s - c > (d - c) * a && (o += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[l - 1],
      d = i.snapGrid[l];
    s - c <= (d - c) * a && (o -= i.params.slidesPerGroup);
  }
  return (o = Math.max(o, 0)), (o = Math.min(o, i.slidesGrid.length - 1)), i.slideTo(o, e, t, n);
}
function nw() {
  const e = this,
    { params: t, $wrapperEl: n } = e,
    a = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    o;
  if (t.loop) {
    if (e.animating) return;
    (o = parseInt(Z(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - a / 2 || i > e.slides.length - e.loopedSlides + a / 2
          ? (e.loopFix(),
            (i = n
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            Fo(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - a
        ? (e.loopFix(),
          (i = n
            .children(
              `.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          Fo(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var aw = {
  slideTo: X1,
  slideToLoop: q1,
  slideNext: Z1,
  slidePrev: J1,
  slideReset: ew,
  slideToClosest: tw,
  slideToClickedSlide: nw,
};
function iw() {
  const e = this,
    t = He(),
    { params: n, $wrapperEl: a } = e,
    i = a.children().length > 0 ? Z(a.children()[0].parentNode) : a;
  i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
  let o = i.children(`.${n.slideClass}`);
  if (n.loopFillGroupWithBlank) {
    const s = n.slidesPerGroup - (o.length % n.slidesPerGroup);
    if (s !== n.slidesPerGroup) {
      for (let c = 0; c < s; c += 1) {
        const d = Z(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
        i.append(d);
      }
      o = i.children(`.${n.slideClass}`);
    }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = o.length),
    (e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10))),
    (e.loopedSlides += n.loopAdditionalSlides),
    e.loopedSlides > o.length && (e.loopedSlides = o.length);
  const r = [],
    l = [];
  o.each((s, c) => {
    const d = Z(s);
    c < e.loopedSlides && l.push(s),
      c < o.length && c >= o.length - e.loopedSlides && r.push(s),
      d.attr("data-swiper-slide-index", c);
  });
  for (let s = 0; s < l.length; s += 1)
    i.append(Z(l[s].cloneNode(!0)).addClass(n.slideDuplicateClass));
  for (let s = r.length - 1; s >= 0; s -= 1)
    i.prepend(Z(r[s].cloneNode(!0)).addClass(n.slideDuplicateClass));
}
function ow() {
  const e = this;
  e.emit("beforeLoopFix");
  const {
    activeIndex: t,
    slides: n,
    loopedSlides: a,
    allowSlidePrev: i,
    allowSlideNext: o,
    snapGrid: r,
    rtlTranslate: l,
  } = e;
  let s;
  (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
  const d = -r[t] - e.getTranslate();
  t < a
    ? ((s = n.length - a * 3 + t),
      (s += a),
      e.slideTo(s, 0, !1, !0) && d !== 0 && e.setTranslate((l ? -e.translate : e.translate) - d))
    : t >= n.length - a &&
      ((s = -n.length + t + a),
      (s += a),
      e.slideTo(s, 0, !1, !0) && d !== 0 && e.setTranslate((l ? -e.translate : e.translate) - d)),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = o),
    e.emit("loopFix");
}
function rw() {
  const e = this,
    { $wrapperEl: t, params: n, slides: a } = e;
  t
    .children(`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`)
    .remove(),
    a.removeAttr("data-swiper-slide-index");
}
var sw = { loopCreate: iw, loopFix: ow, loopDestroy: rw };
function lw(e) {
  const t = this;
  if (
    t.support.touch ||
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  (n.style.cursor = "move"), (n.style.cursor = e ? "grabbing" : "grab");
}
function cw() {
  const e = this;
  e.support.touch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "");
}
var dw = { setGrabCursor: lw, unsetGrabCursor: cw };
function uw(e, t) {
  t === void 0 && (t = this);
  function n(a) {
    if (!a || a === He() || a === je()) return null;
    a.assignedSlot && (a = a.assignedSlot);
    const i = a.closest(e);
    return !i && !a.getRootNode ? null : i || n(a.getRootNode().host);
  }
  return n(t);
}
function fw(e) {
  const t = this,
    n = He(),
    a = je(),
    i = t.touchEventsData,
    { params: o, touches: r, enabled: l } = t;
  if (!l || (t.animating && o.preventInteractionOnTransition)) return;
  !t.animating && o.cssMode && o.loop && t.loopFix();
  let s = e;
  s.originalEvent && (s = s.originalEvent);
  let c = Z(s.target);
  if (
    (o.touchEventsTarget === "wrapper" && !c.closest(t.wrapperEl).length) ||
    ((i.isTouchEvent = s.type === "touchstart"),
    !i.isTouchEvent && "which" in s && s.which === 3) ||
    (!i.isTouchEvent && "button" in s && s.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  !!o.noSwipingClass &&
    o.noSwipingClass !== "" &&
    s.target &&
    s.target.shadowRoot &&
    e.path &&
    e.path[0] &&
    (c = Z(e.path[0]));
  const u = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
    f = !!(s.target && s.target.shadowRoot);
  if (o.noSwiping && (f ? uw(u, c[0]) : c.closest(u)[0])) {
    t.allowClick = !0;
    return;
  }
  if (o.swipeHandler && !c.closest(o.swipeHandler)[0]) return;
  (r.currentX = s.type === "touchstart" ? s.targetTouches[0].pageX : s.pageX),
    (r.currentY = s.type === "touchstart" ? s.targetTouches[0].pageY : s.pageY);
  const v = r.currentX,
    m = r.currentY,
    p = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
    g = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
  if (p && (v <= g || v >= a.innerWidth - g))
    if (p === "prevent") e.preventDefault();
    else return;
  if (
    (Object.assign(i, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (r.startX = v),
    (r.startY = m),
    (i.touchStartTime = Si()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    o.threshold > 0 && (i.allowThresholdMove = !1),
    s.type !== "touchstart")
  ) {
    let b = !0;
    c.is(i.focusableElements) && ((b = !1), c[0].nodeName === "SELECT" && (i.isTouched = !1)),
      n.activeElement &&
        Z(n.activeElement).is(i.focusableElements) &&
        n.activeElement !== c[0] &&
        n.activeElement.blur();
    const h = b && t.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || h) && !c[0].isContentEditable && s.preventDefault();
  }
  t.params.freeMode &&
    t.params.freeMode.enabled &&
    t.freeMode &&
    t.animating &&
    !o.cssMode &&
    t.freeMode.onTouchStart(),
    t.emit("touchStart", s);
}
function pw(e) {
  const t = He(),
    n = this,
    a = n.touchEventsData,
    { params: i, touches: o, rtlTranslate: r, enabled: l } = n;
  if (!l) return;
  let s = e;
  if ((s.originalEvent && (s = s.originalEvent), !a.isTouched)) {
    a.startMoving && a.isScrolling && n.emit("touchMoveOpposite", s);
    return;
  }
  if (a.isTouchEvent && s.type !== "touchmove") return;
  const c =
      s.type === "touchmove" && s.targetTouches && (s.targetTouches[0] || s.changedTouches[0]),
    d = s.type === "touchmove" ? c.pageX : s.pageX,
    u = s.type === "touchmove" ? c.pageY : s.pageY;
  if (s.preventedByNestedSwiper) {
    (o.startX = d), (o.startY = u);
    return;
  }
  if (!n.allowTouchMove) {
    Z(s.target).is(a.focusableElements) || (n.allowClick = !1),
      a.isTouched &&
        (Object.assign(o, { startX: d, startY: u, currentX: d, currentY: u }),
        (a.touchStartTime = Si()));
    return;
  }
  if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (u < o.startY && n.translate <= n.maxTranslate()) ||
        (u > o.startY && n.translate >= n.minTranslate())
      ) {
        (a.isTouched = !1), (a.isMoved = !1);
        return;
      }
    } else if (
      (d < o.startX && n.translate <= n.maxTranslate()) ||
      (d > o.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    a.isTouchEvent &&
    t.activeElement &&
    s.target === t.activeElement &&
    Z(s.target).is(a.focusableElements)
  ) {
    (a.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (a.allowTouchCallbacks && n.emit("touchMove", s), s.targetTouches && s.targetTouches.length > 1)
  )
    return;
  (o.currentX = d), (o.currentY = u);
  const f = o.currentX - o.startX,
    v = o.currentY - o.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + v ** 2) < n.params.threshold) return;
  if (typeof a.isScrolling == "undefined") {
    let b;
    (n.isHorizontal() && o.currentY === o.startY) || (n.isVertical() && o.currentX === o.startX)
      ? (a.isScrolling = !1)
      : f * f + v * v >= 25 &&
        ((b = (Math.atan2(Math.abs(v), Math.abs(f)) * 180) / Math.PI),
        (a.isScrolling = n.isHorizontal() ? b > i.touchAngle : 90 - b > i.touchAngle));
  }
  if (
    (a.isScrolling && n.emit("touchMoveOpposite", s),
    typeof a.startMoving == "undefined" &&
      (o.currentX !== o.startX || o.currentY !== o.startY) &&
      (a.startMoving = !0),
    a.isScrolling)
  ) {
    a.isTouched = !1;
    return;
  }
  if (!a.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && s.cancelable && s.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && s.stopPropagation(),
    a.isMoved ||
      (i.loop && !i.cssMode && n.loopFix(),
      (a.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (a.allowMomentumBounce = !1),
      i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
      n.emit("sliderFirstMove", s)),
    n.emit("sliderMove", s),
    (a.isMoved = !0);
  let m = n.isHorizontal() ? f : v;
  (o.diff = m),
    (m *= i.touchRatio),
    r && (m = -m),
    (n.swipeDirection = m > 0 ? "prev" : "next"),
    (a.currentTranslate = m + a.startTranslate);
  let p = !0,
    g = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (g = 0),
    m > 0 && a.currentTranslate > n.minTranslate()
      ? ((p = !1),
        i.resistance &&
          (a.currentTranslate =
            n.minTranslate() - 1 + (-n.minTranslate() + a.startTranslate + m) ** g))
      : m < 0 &&
        a.currentTranslate < n.maxTranslate() &&
        ((p = !1),
        i.resistance &&
          (a.currentTranslate =
            n.maxTranslate() + 1 - (n.maxTranslate() - a.startTranslate - m) ** g)),
    p && (s.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      a.currentTranslate < a.startTranslate &&
      (a.currentTranslate = a.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      a.currentTranslate > a.startTranslate &&
      (a.currentTranslate = a.startTranslate),
    !n.allowSlidePrev && !n.allowSlideNext && (a.currentTranslate = a.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(m) > i.threshold || a.allowThresholdMove) {
      if (!a.allowThresholdMove) {
        (a.allowThresholdMove = !0),
          (o.startX = o.currentX),
          (o.startY = o.currentY),
          (a.currentTranslate = a.startTranslate),
          (o.diff = n.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY);
        return;
      }
    } else {
      a.currentTranslate = a.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) || i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    n.params.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(a.currentTranslate),
    n.setTranslate(a.currentTranslate));
}
function hw(e) {
  const t = this,
    n = t.touchEventsData,
    { params: a, touches: i, rtlTranslate: o, slidesGrid: r, enabled: l } = t;
  if (!l) return;
  let s = e;
  if (
    (s.originalEvent && (s = s.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", s),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && a.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  a.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const c = Si(),
    d = c - n.touchStartTime;
  if (t.allowClick) {
    const h = s.path || (s.composedPath && s.composedPath());
    t.updateClickedSlide((h && h[0]) || s.target),
      t.emit("tap click", s),
      d < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", s);
  }
  if (
    ((n.lastClickTime = Si()),
    Fo(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      i.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let u;
  if (
    (a.followFinger ? (u = o ? t.translate : -t.translate) : (u = -n.currentTranslate), a.cssMode)
  )
    return;
  if (t.params.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: u });
    return;
  }
  let f = 0,
    v = t.slidesSizesGrid[0];
  for (let h = 0; h < r.length; h += h < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
    const w = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof r[h + w] != "undefined"
      ? u >= r[h] && u < r[h + w] && ((f = h), (v = r[h + w] - r[h]))
      : u >= r[h] && ((f = h), (v = r[r.length - 1] - r[r.length - 2]));
  }
  let m = null,
    p = null;
  a.rewind &&
    (t.isBeginning
      ? (p =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (m = 0));
  const g = (u - r[f]) / v,
    b = f < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (d > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (g >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? m : f + b) : t.slideTo(f)),
      t.swipeDirection === "prev" &&
        (g > 1 - a.longSwipesRatio
          ? t.slideTo(f + b)
          : p !== null && g < 0 && Math.abs(g) > a.longSwipesRatio
          ? t.slideTo(p)
          : t.slideTo(f));
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
      ? s.target === t.navigation.nextEl
        ? t.slideTo(f + b)
        : t.slideTo(f)
      : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : f + b),
        t.swipeDirection === "prev" && t.slideTo(p !== null ? p : f));
  }
}
function cd() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: a, allowSlidePrev: i, snapGrid: o } = e;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses(),
    (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = a),
    e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
}
function mw(e) {
  const t = this;
  !t.enabled ||
    t.allowClick ||
    (t.params.preventClicks && e.preventDefault(),
    t.params.preventClicksPropagation &&
      t.animating &&
      (e.stopPropagation(), e.stopImmediatePropagation()));
}
function gw() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: a } = e;
  if (!a) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const o = e.maxTranslate() - e.minTranslate();
  o === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / o),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
let dd = !1;
function vw() {}
const up = (e, t) => {
  const n = He(),
    { params: a, touchEvents: i, el: o, wrapperEl: r, device: l, support: s } = e,
    c = !!a.nested,
    d = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  if (!s.touch)
    o[d](i.start, e.onTouchStart, !1),
      n[d](i.move, e.onTouchMove, c),
      n[d](i.end, e.onTouchEnd, !1);
  else {
    const f =
      i.start === "touchstart" && s.passiveListener && a.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    o[d](i.start, e.onTouchStart, f),
      o[d](i.move, e.onTouchMove, s.passiveListener ? { passive: !1, capture: c } : c),
      o[d](i.end, e.onTouchEnd, f),
      i.cancel && o[d](i.cancel, e.onTouchEnd, f);
  }
  (a.preventClicks || a.preventClicksPropagation) && o[d]("click", e.onClick, !0),
    a.cssMode && r[d]("scroll", e.onScroll),
    a.updateOnWindowResize
      ? e[u](
          l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate",
          cd,
          !0
        )
      : e[u]("observerUpdate", cd, !0);
};
function bw() {
  const e = this,
    t = He(),
    { params: n, support: a } = e;
  (e.onTouchStart = fw.bind(e)),
    (e.onTouchMove = pw.bind(e)),
    (e.onTouchEnd = hw.bind(e)),
    n.cssMode && (e.onScroll = gw.bind(e)),
    (e.onClick = mw.bind(e)),
    a.touch && !dd && (t.addEventListener("touchstart", vw), (dd = !0)),
    up(e, "on");
}
function yw() {
  up(this, "off");
}
var ww = { attachEvents: bw, detachEvents: yw };
const ud = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function _w() {
  const e = this,
    { activeIndex: t, initialized: n, loopedSlides: a = 0, params: i, $el: o } = e,
    r = i.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l) return;
  const c = (l in r ? r[l] : void 0) || e.originalParams,
    d = ud(e, i),
    u = ud(e, c),
    f = i.enabled;
  d && !u
    ? (o.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),
      e.emitContainerClasses())
    : !d &&
      u &&
      (o.addClass(`${i.containerModifierClass}grid`),
      ((c.grid.fill && c.grid.fill === "column") || (!c.grid.fill && i.grid.fill === "column")) &&
        o.addClass(`${i.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((g) => {
      const b = i[g] && i[g].enabled,
        h = c[g] && c[g].enabled;
      b && !h && e[g].disable(), !b && h && e[g].enable();
    });
  const v = c.direction && c.direction !== i.direction,
    m = i.loop && (c.slidesPerView !== i.slidesPerView || v);
  v && n && e.changeDirection(), st(e.params, c);
  const p = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    f && !p ? e.disable() : !f && p && e.enable(),
    (e.currentBreakpoint = l),
    e.emit("_beforeBreakpoint", c),
    m &&
      n &&
      (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)),
    e.emit("breakpoint", c);
}
function xw(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let a = !1;
  const i = je(),
    o = t === "window" ? i.innerHeight : n.clientHeight,
    r = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const s = parseFloat(l.substr(1));
        return { value: o * s, point: l };
      }
      return { value: l, point: l };
    });
  r.sort((l, s) => parseInt(l.value, 10) - parseInt(s.value, 10));
  for (let l = 0; l < r.length; l += 1) {
    const { point: s, value: c } = r[l];
    t === "window"
      ? i.matchMedia(`(min-width: ${c}px)`).matches && (a = s)
      : c <= n.clientWidth && (a = s);
  }
  return a || "max";
}
var Aw = { setBreakpoint: _w, getBreakpoint: xw };
function Ew(e, t) {
  const n = [];
  return (
    e.forEach((a) => {
      typeof a == "object"
        ? Object.keys(a).forEach((i) => {
            a[i] && n.push(t + i);
          })
        : typeof a == "string" && n.push(t + a);
    }),
    n
  );
}
function Tw() {
  const e = this,
    { classNames: t, params: n, rtl: a, $el: i, device: o, support: r } = e,
    l = Ew(
      [
        "initialized",
        n.direction,
        { "pointer-events": !r.touch },
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: a },
        { grid: n.grid && n.grid.rows > 1 },
        { "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column" },
        { android: o.android },
        { ios: o.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
}
function kw() {
  const e = this,
    { $el: t, classNames: n } = e;
  t.removeClass(n.join(" ")), e.emitContainerClasses();
}
var Sw = { addClasses: Tw, removeClasses: kw };
function Cw(e, t, n, a, i, o) {
  const r = je();
  let l;
  function s() {
    o && o();
  }
  !Z(e).parent("picture")[0] && (!e.complete || !i) && t
    ? ((l = new r.Image()),
      (l.onload = s),
      (l.onerror = s),
      a && (l.sizes = a),
      n && (l.srcset = n),
      t && (l.src = t))
    : s();
}
function Ow() {
  const e = this;
  e.imagesToLoad = e.$el.find("img");
  function t() {
    typeof e == "undefined" ||
      e === null ||
      !e ||
      e.destroyed ||
      (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
      e.imagesLoaded === e.imagesToLoad.length &&
        (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }
  for (let n = 0; n < e.imagesToLoad.length; n += 1) {
    const a = e.imagesToLoad[n];
    e.loadImage(
      a,
      a.currentSrc || a.getAttribute("src"),
      a.srcset || a.getAttribute("srcset"),
      a.sizes || a.getAttribute("sizes"),
      !0,
      t
    );
  }
}
var Pw = { loadImage: Cw, preloadImages: Ow };
function Iw() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: a } = n;
  if (a) {
    const i = e.slides.length - 1,
      o = e.slidesGrid[i] + e.slidesSizesGrid[i] + a * 2;
    e.isLocked = e.size > o;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Bw = { checkOverflow: Iw },
  fd = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
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
    threshold: 0,
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
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
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
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Mw(e, t) {
  return function (a) {
    a === void 0 && (a = {});
    const i = Object.keys(a)[0],
      o = a[i];
    if (typeof o != "object" || o === null) {
      st(t, a);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] === !0 &&
        (e[i] = { auto: !0 }),
      !(i in e && "enabled" in o))
    ) {
      st(t, a);
      return;
    }
    e[i] === !0 && (e[i] = { enabled: !0 }),
      typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      st(t, a);
  };
}
const Gr = {
    eventsEmitter: O1,
    update: $1,
    translate: U1,
    transition: Q1,
    slide: aw,
    loop: sw,
    grabCursor: dw,
    events: ww,
    breakpoints: Aw,
    checkOverflow: Bw,
    classes: Sw,
    images: Pw,
  },
  Wr = {};
class qe {
  constructor() {
    let t, n;
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
    if (
      (i.length === 1 &&
      i[0].constructor &&
      Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
        ? (n = i[0])
        : ([t, n] = i),
      n || (n = {}),
      (n = st({}, n)),
      t && !n.el && (n.el = t),
      n.el && Z(n.el).length > 1)
    ) {
      const c = [];
      return (
        Z(n.el).each((d) => {
          const u = st({}, n, { el: d });
          c.push(new qe(u));
        }),
        c
      );
    }
    const r = this;
    (r.__swiper__ = !0),
      (r.support = cp()),
      (r.device = E1({ userAgent: n.userAgent })),
      (r.browser = k1()),
      (r.eventsListeners = {}),
      (r.eventsAnyListeners = []),
      (r.modules = [...r.__modules__]),
      n.modules && Array.isArray(n.modules) && r.modules.push(...n.modules);
    const l = {};
    r.modules.forEach((c) => {
      c({
        swiper: r,
        extendParams: Mw(n, l),
        on: r.on.bind(r),
        once: r.once.bind(r),
        off: r.off.bind(r),
        emit: r.emit.bind(r),
      });
    });
    const s = st({}, fd, l);
    return (
      (r.params = st({}, s, Wr, n)),
      (r.originalParams = st({}, r.params)),
      (r.passedParams = st({}, n)),
      r.params &&
        r.params.on &&
        Object.keys(r.params.on).forEach((c) => {
          r.on(c, r.params.on[c]);
        }),
      r.params && r.params.onAny && r.onAny(r.params.onAny),
      (r.$ = Z),
      Object.assign(r, {
        enabled: r.params.enabled,
        el: t,
        classNames: [],
        slides: Z(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return r.params.direction === "horizontal";
        },
        isVertical() {
          return r.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        touchEvents: (function () {
          const d = ["touchstart", "touchmove", "touchend", "touchcancel"],
            u = ["pointerdown", "pointermove", "pointerup"];
          return (
            (r.touchEventsTouch = { start: d[0], move: d[1], end: d[2], cancel: d[3] }),
            (r.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
            r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: r.params.focusableElements,
          lastClickTime: Si(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: r.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      r.emit("_swiper"),
      r.params.init && r.init(),
      r
    );
  }
  enable() {
    const t = this;
    t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
  }
  disable() {
    const t = this;
    !t.enabled || ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
  }
  setProgress(t, n) {
    const a = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = a.minTranslate(),
      r = (a.maxTranslate() - i) * t + i;
    a.translateTo(r, typeof n == "undefined" ? 0 : n),
      a.updateActiveIndex(),
      a.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter((a) => a.indexOf("swiper") === 0 || a.indexOf(t.params.containerModifierClass) === 0);
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter((a) => a.indexOf("swiper-slide") === 0 || a.indexOf(n.params.slideClass) === 0)
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.each((a) => {
      const i = t.getSlideClasses(a);
      n.push({ slideEl: a, classNames: i }), t.emit("_slideClass", a, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const a = this,
      { params: i, slides: o, slidesGrid: r, slidesSizesGrid: l, size: s, activeIndex: c } = a;
    let d = 1;
    if (i.centeredSlides) {
      let u = o[c].swiperSlideSize,
        f;
      for (let v = c + 1; v < o.length; v += 1)
        o[v] && !f && ((u += o[v].swiperSlideSize), (d += 1), u > s && (f = !0));
      for (let v = c - 1; v >= 0; v -= 1)
        o[v] && !f && ((u += o[v].swiperSlideSize), (d += 1), u > s && (f = !0));
    } else if (t === "current")
      for (let u = c + 1; u < o.length; u += 1)
        (n ? r[u] + l[u] - r[c] < s : r[u] - r[c] < s) && (d += 1);
    else for (let u = c - 1; u >= 0; u -= 1) r[c] - r[u] < s && (d += 1);
    return d;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: a } = t;
    a.breakpoints && t.setBreakpoint(),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const r = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(r, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let o;
    t.params.freeMode && t.params.freeMode.enabled
      ? (i(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
          ? (o = t.slideTo(t.slides.length - 1, 0, !1, !0))
          : (o = t.slideTo(t.activeIndex, 0, !1, !0)),
        o || i()),
      a.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
      t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const a = this,
      i = a.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (a.$el
          .removeClass(`${a.params.containerModifierClass}${i}`)
          .addClass(`${a.params.containerModifierClass}${t}`),
        a.emitContainerClasses(),
        (a.params.direction = t),
        a.slides.each((o) => {
          t === "vertical" ? (o.style.width = "") : (o.style.height = "");
        }),
        a.emit("changeDirection"),
        n && a.update()),
      a
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.$el.addClass(`${n.params.containerModifierClass}rtl`), (n.el.dir = "rtl"))
        : (n.$el.removeClass(`${n.params.containerModifierClass}rtl`), (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    const a = Z(t || n.params.el);
    if (((t = a[0]), !t)) return !1;
    t.swiper = n;
    const i = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let r = (() => {
      if (t && t.shadowRoot && t.shadowRoot.querySelector) {
        const l = Z(t.shadowRoot.querySelector(i()));
        return (l.children = (s) => a.children(s)), l;
      }
      return a.children ? a.children(i()) : Z(a).children(i());
    })();
    if (r.length === 0 && n.params.createElements) {
      const s = He().createElement("div");
      (r = Z(s)),
        (s.className = n.params.wrapperClass),
        a.append(s),
        a.children(`.${n.params.slideClass}`).each((c) => {
          r.append(c);
        });
    }
    return (
      Object.assign(n, {
        $el: a,
        el: t,
        $wrapperEl: r,
        wrapperEl: r[0],
        mounted: !0,
        rtl: t.dir.toLowerCase() === "rtl" || a.css("direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (t.dir.toLowerCase() === "rtl" || a.css("direction") === "rtl"),
        wrongRTL: r.css("display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.params.loop && n.loopCreate(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.preloadImages && n.preloadImages(),
        n.params.loop
          ? n.slideTo(
              n.params.initialSlide + n.loopedSlides,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
        n.attachEvents(),
        (n.initialized = !0),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const a = this,
      { params: i, $el: o, $wrapperEl: r, slides: l } = a;
    return (
      typeof a.params == "undefined" ||
        a.destroyed ||
        (a.emit("beforeDestroy"),
        (a.initialized = !1),
        a.detachEvents(),
        i.loop && a.loopDestroy(),
        n &&
          (a.removeClasses(),
          o.removeAttr("style"),
          r.removeAttr("style"),
          l &&
            l.length &&
            l
              .removeClass(
                [i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(
                  " "
                )
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")),
        a.emit("destroy"),
        Object.keys(a.eventsListeners).forEach((s) => {
          a.off(s);
        }),
        t !== !1 && ((a.$el[0].swiper = null), b1(a)),
        (a.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    st(Wr, t);
  }
  static get extendedDefaults() {
    return Wr;
  }
  static get defaults() {
    return fd;
  }
  static installModule(t) {
    qe.prototype.__modules__ || (qe.prototype.__modules__ = []);
    const n = qe.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => qe.installModule(n)), qe)
      : (qe.installModule(t), qe);
  }
}
Object.keys(Gr).forEach((e) => {
  Object.keys(Gr[e]).forEach((t) => {
    qe.prototype[t] = Gr[e][t];
  });
});
qe.use([S1, C1]);
function Lw(e, t, n, a) {
  const i = He();
  return (
    e.params.createElements &&
      Object.keys(a).forEach((o) => {
        if (!n[o] && n.auto === !0) {
          let r = e.$el.children(`.${a[o]}`)[0];
          r || ((r = i.createElement("div")), (r.className = a[o]), e.$el.append(r)),
            (n[o] = r),
            (t[o] = r);
        }
      }),
    n
  );
}
function fp(e) {
  let { swiper: t, extendParams: n, on: a, emit: i } = e;
  n({
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
    (t.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null });
  function o(m) {
    let p;
    return (
      m &&
        ((p = Z(m)),
        t.params.uniqueNavElements &&
          typeof m == "string" &&
          p.length > 1 &&
          t.$el.find(m).length === 1 &&
          (p = t.$el.find(m))),
      p
    );
  }
  function r(m, p) {
    const g = t.params.navigation;
    m &&
      m.length > 0 &&
      (m[p ? "addClass" : "removeClass"](g.disabledClass),
      m[0] && m[0].tagName === "BUTTON" && (m[0].disabled = p),
      t.params.watchOverflow &&
        t.enabled &&
        m[t.isLocked ? "addClass" : "removeClass"](g.lockClass));
  }
  function l() {
    if (t.params.loop) return;
    const { $nextEl: m, $prevEl: p } = t.navigation;
    r(p, t.isBeginning && !t.params.rewind), r(m, t.isEnd && !t.params.rewind);
  }
  function s(m) {
    m.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function c(m) {
    m.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), i("navigationNext"));
  }
  function d() {
    const m = t.params.navigation;
    if (
      ((t.params.navigation = Lw(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev",
      })),
      !(m.nextEl || m.prevEl))
    )
      return;
    const p = o(m.nextEl),
      g = o(m.prevEl);
    p && p.length > 0 && p.on("click", c),
      g && g.length > 0 && g.on("click", s),
      Object.assign(t.navigation, { $nextEl: p, nextEl: p && p[0], $prevEl: g, prevEl: g && g[0] }),
      t.enabled || (p && p.addClass(m.lockClass), g && g.addClass(m.lockClass));
  }
  function u() {
    const { $nextEl: m, $prevEl: p } = t.navigation;
    m && m.length && (m.off("click", c), m.removeClass(t.params.navigation.disabledClass)),
      p && p.length && (p.off("click", s), p.removeClass(t.params.navigation.disabledClass));
  }
  a("init", () => {
    t.params.navigation.enabled === !1 ? v() : (d(), l());
  }),
    a("toEdge fromEdge lock unlock", () => {
      l();
    }),
    a("destroy", () => {
      u();
    }),
    a("enable disable", () => {
      const { $nextEl: m, $prevEl: p } = t.navigation;
      m && m[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass),
        p && p[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
    }),
    a("click", (m, p) => {
      const { $nextEl: g, $prevEl: b } = t.navigation,
        h = p.target;
      if (t.params.navigation.hideOnClick && !Z(h).is(b) && !Z(h).is(g)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === h || t.pagination.el.contains(h))
        )
          return;
        let w;
        g
          ? (w = g.hasClass(t.params.navigation.hiddenClass))
          : b && (w = b.hasClass(t.params.navigation.hiddenClass)),
          i(w === !0 ? "navigationShow" : "navigationHide"),
          g && g.toggleClass(t.params.navigation.hiddenClass),
          b && b.toggleClass(t.params.navigation.hiddenClass);
      }
    });
  const f = () => {
      t.$el.removeClass(t.params.navigation.navigationDisabledClass), d(), l();
    },
    v = () => {
      t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
    };
  Object.assign(t.navigation, { enable: f, disable: v, update: l, init: d, destroy: u });
}
function pp(e) {
  let { swiper: t, extendParams: n, on: a, emit: i } = e,
    o;
  (t.autoplay = { running: !1, paused: !1 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  function r() {
    const g = t.slides.eq(t.activeIndex);
    let b = t.params.autoplay.delay;
    g.attr("data-swiper-autoplay") &&
      (b = g.attr("data-swiper-autoplay") || t.params.autoplay.delay),
      clearTimeout(o),
      (o = Fo(() => {
        let h;
        t.params.autoplay.reverseDirection
          ? t.params.loop
            ? (t.loopFix(), (h = t.slidePrev(t.params.speed, !0, !0)), i("autoplay"))
            : t.isBeginning
            ? t.params.autoplay.stopOnLastSlide
              ? s()
              : ((h = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0)), i("autoplay"))
            : ((h = t.slidePrev(t.params.speed, !0, !0)), i("autoplay"))
          : t.params.loop
          ? (t.loopFix(), (h = t.slideNext(t.params.speed, !0, !0)), i("autoplay"))
          : t.isEnd
          ? t.params.autoplay.stopOnLastSlide
            ? s()
            : ((h = t.slideTo(0, t.params.speed, !0, !0)), i("autoplay"))
          : ((h = t.slideNext(t.params.speed, !0, !0)), i("autoplay")),
          ((t.params.cssMode && t.autoplay.running) || h === !1) && r();
      }, b));
  }
  function l() {
    return typeof o != "undefined" || t.autoplay.running
      ? !1
      : ((t.autoplay.running = !0), i("autoplayStart"), r(), !0);
  }
  function s() {
    return !t.autoplay.running || typeof o == "undefined"
      ? !1
      : (o && (clearTimeout(o), (o = void 0)), (t.autoplay.running = !1), i("autoplayStop"), !0);
  }
  function c(g) {
    !t.autoplay.running ||
      t.autoplay.paused ||
      (o && clearTimeout(o),
      (t.autoplay.paused = !0),
      g === 0 || !t.params.autoplay.waitForTransition
        ? ((t.autoplay.paused = !1), r())
        : ["transitionend", "webkitTransitionEnd"].forEach((b) => {
            t.$wrapperEl[0].addEventListener(b, u);
          }));
  }
  function d() {
    const g = He();
    g.visibilityState === "hidden" && t.autoplay.running && c(),
      g.visibilityState === "visible" && t.autoplay.paused && (r(), (t.autoplay.paused = !1));
  }
  function u(g) {
    !t ||
      t.destroyed ||
      !t.$wrapperEl ||
      (g.target === t.$wrapperEl[0] &&
        (["transitionend", "webkitTransitionEnd"].forEach((b) => {
          t.$wrapperEl[0].removeEventListener(b, u);
        }),
        (t.autoplay.paused = !1),
        t.autoplay.running ? r() : s()));
  }
  function f() {
    t.params.autoplay.disableOnInteraction ? s() : (i("autoplayPause"), c()),
      ["transitionend", "webkitTransitionEnd"].forEach((g) => {
        t.$wrapperEl[0].removeEventListener(g, u);
      });
  }
  function v() {
    t.params.autoplay.disableOnInteraction || ((t.autoplay.paused = !1), i("autoplayResume"), r());
  }
  function m() {
    t.params.autoplay.pauseOnMouseEnter && (t.$el.on("mouseenter", f), t.$el.on("mouseleave", v));
  }
  function p() {
    t.$el.off("mouseenter", f), t.$el.off("mouseleave", v);
  }
  a("init", () => {
    t.params.autoplay.enabled && (l(), He().addEventListener("visibilitychange", d), m());
  }),
    a("beforeTransitionStart", (g, b, h) => {
      t.autoplay.running &&
        (h || !t.params.autoplay.disableOnInteraction ? t.autoplay.pause(b) : s());
    }),
    a("sliderFirstMove", () => {
      t.autoplay.running && (t.params.autoplay.disableOnInteraction ? s() : c());
    }),
    a("touchEnd", () => {
      t.params.cssMode && t.autoplay.paused && !t.params.autoplay.disableOnInteraction && r();
    }),
    a("destroy", () => {
      p(), t.autoplay.running && s(), He().removeEventListener("visibilitychange", d);
    }),
    Object.assign(t.autoplay, { pause: c, run: r, start: l, stop: s });
}
function ta(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function yn(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((a) => n.indexOf(a) < 0)
    .forEach((a) => {
      typeof e[a] == "undefined"
        ? (e[a] = t[a])
        : ta(t[a]) && ta(e[a]) && Object.keys(t[a]).length > 0
        ? t[a].__swiper__
          ? (e[a] = t[a])
          : yn(e[a], t[a])
        : (e[a] = t[a]);
    });
}
function hp(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl == "undefined" &&
      typeof e.navigation.prevEl == "undefined"
  );
}
function mp(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el == "undefined";
}
function gp(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el == "undefined";
}
function vp(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((a) => a.trim())
      .filter((a) => !!a),
    n = [];
  return (
    t.forEach((a) => {
      n.indexOf(a) < 0 && n.push(a);
    }),
    n.join(" ")
  );
}
const bp = [
  "modules",
  "init",
  "_direction",
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
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
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
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
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
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
];
function pd(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    a = {},
    i = {};
  yn(n, qe.defaults), yn(n, qe.extendedDefaults), (n._emitClasses = !0), (n.init = !1);
  const o = {},
    r = bp.map((s) => s.replace(/_/, "")),
    l = Object.assign({}, e);
  return (
    Object.keys(l).forEach((s) => {
      typeof e[s] != "undefined" &&
        (r.indexOf(s) >= 0
          ? ta(e[s])
            ? ((n[s] = {}), (i[s] = {}), yn(n[s], e[s]), yn(i[s], e[s]))
            : ((n[s] = e[s]), (i[s] = e[s]))
          : s.search(/on[A-Z]/) === 0 && typeof e[s] == "function"
          ? t
            ? (a[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
            : (n.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
          : (o[s] = e[s]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((s) => {
      n[s] === !0 && (n[s] = {}), n[s] === !1 && delete n[s];
    }),
    { params: n, passedParams: i, rest: o, events: a }
  );
}
function Rw(e, t) {
  let { el: n, nextEl: a, prevEl: i, paginationEl: o, scrollbarEl: r, swiper: l } = e;
  hp(t) &&
    a &&
    i &&
    ((l.params.navigation.nextEl = a),
    (l.originalParams.navigation.nextEl = a),
    (l.params.navigation.prevEl = i),
    (l.originalParams.navigation.prevEl = i)),
    mp(t) && o && ((l.params.pagination.el = o), (l.originalParams.pagination.el = o)),
    gp(t) && r && ((l.params.scrollbar.el = r), (l.originalParams.scrollbar.el = r)),
    l.init(n);
}
function yp(e, t) {
  let n = t.slidesPerView;
  if (t.breakpoints) {
    const i = qe.prototype.getBreakpoint(t.breakpoints),
      o = i in t.breakpoints ? t.breakpoints[i] : void 0;
    o && o.slidesPerView && (n = o.slidesPerView);
  }
  let a = Math.ceil(parseFloat(t.loopedSlides || n, 10));
  return (a += t.loopAdditionalSlides), a > e.length && (a = e.length), a;
}
function Dw(e, t, n) {
  const a = t.map(
    (s, c) => (
      s.props || (s.props = {}),
      (s.props.swiperRef = e),
      (s.props["data-swiper-slide-index"] = c),
      s
    )
  );
  function i(s, c, d) {
    return (
      s.props || (s.props = {}),
      Ze(
        s.type,
        {
          ...s.props,
          key: `${s.key}-duplicate-${c}-${d}`,
          class: `${s.props.className || ""} ${n.slideDuplicateClass} ${s.props.class || ""}`,
        },
        s.children
      )
    );
  }
  if (n.loopFillGroupWithBlank) {
    const s = n.slidesPerGroup - (a.length % n.slidesPerGroup);
    if (s !== n.slidesPerGroup)
      for (let c = 0; c < s; c += 1) {
        const d = Ze("div", { class: `${n.slideClass} ${n.slideBlankClass}` });
        a.push(d);
      }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = a.length);
  const o = yp(a, n),
    r = [],
    l = [];
  return (
    a.forEach((s, c) => {
      c < o && l.push(i(s, c, "prepend")),
        c < a.length && c >= a.length - o && r.push(i(s, c, "append"));
    }),
    e.value && (e.value.loopedSlides = o),
    [...r, ...a, ...l]
  );
}
function Nw(e, t, n, a, i) {
  const o = [];
  if (!t) return o;
  const r = (s) => {
    o.indexOf(s) < 0 && o.push(s);
  };
  if (n && a) {
    const s = a.map(i),
      c = n.map(i);
    s.join("") !== c.join("") && r("children"), a.length !== n.length && r("children");
  }
  return (
    bp
      .filter((s) => s[0] === "_")
      .map((s) => s.replace(/_/, ""))
      .forEach((s) => {
        if (s in e && s in t)
          if (ta(e[s]) && ta(t[s])) {
            const c = Object.keys(e[s]),
              d = Object.keys(t[s]);
            c.length !== d.length
              ? r(s)
              : (c.forEach((u) => {
                  e[s][u] !== t[s][u] && r(s);
                }),
                d.forEach((u) => {
                  e[s][u] !== t[s][u] && r(s);
                }));
          } else e[s] !== t[s] && r(s);
      }),
    o
  );
}
function Kr(e, t, n) {
  e === void 0 && (e = {});
  const a = [],
    i = { "container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": [] },
    o = (r, l) => {
      !Array.isArray(r) ||
        r.forEach((s) => {
          const c = typeof s.type == "symbol";
          l === "default" && (l = "container-end"),
            c && s.children
              ? o(s.children, "default")
              : s.type && (s.type.name === "SwiperSlide" || s.type.name === "AsyncComponentWrapper")
              ? a.push(s)
              : i[l] && i[l].push(s);
        });
    };
  return (
    Object.keys(e).forEach((r) => {
      if (typeof e[r] != "function") return;
      const l = e[r]();
      o(l, r);
    }),
    (n.value = t.value),
    (t.value = a),
    { slides: a, slots: i }
  );
}
function zw(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: a,
    changedParams: i,
    nextEl: o,
    prevEl: r,
    scrollbarEl: l,
    paginationEl: s,
  } = e;
  const c = i.filter((_) => _ !== "children" && _ !== "direction"),
    { params: d, pagination: u, navigation: f, scrollbar: v, virtual: m, thumbs: p } = t;
  let g, b, h, w, x;
  i.includes("thumbs") && a.thumbs && a.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (g = !0),
    i.includes("controller") &&
      a.controller &&
      a.controller.control &&
      d.controller &&
      !d.controller.control &&
      (b = !0),
    i.includes("pagination") &&
      a.pagination &&
      (a.pagination.el || s) &&
      (d.pagination || d.pagination === !1) &&
      u &&
      !u.el &&
      (h = !0),
    i.includes("scrollbar") &&
      a.scrollbar &&
      (a.scrollbar.el || l) &&
      (d.scrollbar || d.scrollbar === !1) &&
      v &&
      !v.el &&
      (w = !0),
    i.includes("navigation") &&
      a.navigation &&
      (a.navigation.prevEl || r) &&
      (a.navigation.nextEl || o) &&
      (d.navigation || d.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (x = !0);
  const S = (_) => {
    !t[_] ||
      (t[_].destroy(),
      _ === "navigation"
        ? ((d[_].prevEl = void 0),
          (d[_].nextEl = void 0),
          (t[_].prevEl = void 0),
          (t[_].nextEl = void 0))
        : ((d[_].el = void 0), (t[_].el = void 0)));
  };
  c.forEach((_) => {
    if (ta(d[_]) && ta(a[_])) yn(d[_], a[_]);
    else {
      const C = a[_];
      (C === !0 || C === !1) && (_ === "navigation" || _ === "pagination" || _ === "scrollbar")
        ? C === !1 && S(_)
        : (d[_] = a[_]);
    }
  }),
    c.includes("controller") &&
      !b &&
      t.controller &&
      t.controller.control &&
      d.controller &&
      d.controller.control &&
      (t.controller.control = d.controller.control),
    i.includes("children") && n && m && d.virtual.enabled
      ? ((m.slides = n), m.update(!0))
      : i.includes("children") && t.lazy && t.params.lazy.enabled && t.lazy.load(),
    g && p.init() && p.update(!0),
    b && (t.controller.control = d.controller.control),
    h && (s && (d.pagination.el = s), u.init(), u.render(), u.update()),
    w && (l && (d.scrollbar.el = l), v.init(), v.updateSize(), v.setTranslate()),
    x && (o && (d.navigation.nextEl = o), r && (d.navigation.prevEl = r), f.init(), f.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = a.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = a.allowSlidePrev),
    i.includes("direction") && t.changeDirection(a.direction, !1),
    t.update();
}
function $w(e, t, n) {
  if (!n) return null;
  const a = e.value.isHorizontal()
    ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
    : { top: `${n.offset}px` };
  return t
    .filter((i, o) => o >= n.from && o <= n.to)
    .map(
      (i) => (
        i.props || (i.props = {}),
        i.props.style || (i.props.style = {}),
        (i.props.swiperRef = e),
        (i.props.style = a),
        Ze(i.type, { ...i.props }, i.children)
      )
    );
}
const Fw = (e) => {
    !e ||
      e.destroyed ||
      !e.params.virtual ||
      (e.params.virtual && !e.params.virtual.enabled) ||
      (e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses(),
      e.lazy && e.params.lazy.enabled && e.lazy.load(),
      e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
  },
  wp = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: Number, default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      preloadImages: { type: Boolean, default: void 0 },
      updateOnImagesReady: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopAdditionalSlides: { type: Number, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopFillGroupWithBlank: { type: Boolean, default: void 0 },
      loopPreventsSlide: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideDuplicateActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideDuplicateClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slideDuplicateNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      slideDuplicatePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      lazy: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "imagesReady",
      "init",
      "keyPress",
      "lazyImageLoad",
      "lazyImageReady",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(e, t) {
      let { slots: n, emit: a } = t;
      const { tag: i, wrapperTag: o } = e,
        r = me("swiper"),
        l = me(null),
        s = me(!1),
        c = me(!1),
        d = me(null),
        u = me(null),
        f = me(null),
        v = { value: [] },
        m = { value: [] },
        p = me(null),
        g = me(null),
        b = me(null),
        h = me(null),
        { params: w, passedParams: x } = pd(e, !1);
      Kr(n, v, m), (f.value = x), (m.value = v.value);
      const S = () => {
        Kr(n, v, m), (s.value = !0);
      };
      if (
        ((w.onAny = function (C) {
          for (var T = arguments.length, L = new Array(T > 1 ? T - 1 : 0), P = 1; P < T; P++)
            L[P - 1] = arguments[P];
          a(C, ...L);
        }),
        Object.assign(w.on, {
          _beforeBreakpoint: S,
          _containerClasses(C, T) {
            r.value = T;
          },
        }),
        (u.value = new qe(w)),
        (u.value.loopCreate = () => {}),
        (u.value.loopDestroy = () => {}),
        w.loop && (u.value.loopedSlides = yp(v.value, w)),
        u.value.virtual && u.value.params.virtual.enabled)
      ) {
        u.value.virtual.slides = v.value;
        const C = {
          cache: !1,
          slides: v.value,
          renderExternal: (T) => {
            l.value = T;
          },
          renderExternalUpdate: !1,
        };
        yn(u.value.params.virtual, C), yn(u.value.originalParams.virtual, C);
      }
      da(() => {
        !c.value && u.value && (u.value.emitSlidesClasses(), (c.value = !0));
        const { passedParams: C } = pd(e, !1),
          T = Nw(C, f.value, v.value, m.value, (L) => L.props && L.props.key);
        (f.value = C),
          (T.length || s.value) &&
            u.value &&
            !u.value.destroyed &&
            zw({
              swiper: u.value,
              slides: v.value,
              passedParams: C,
              changedParams: T,
              nextEl: p.value,
              prevEl: g.value,
              scrollbarEl: h.value,
              paginationEl: b.value,
            }),
          (s.value = !1);
      }),
        An("swiper", u),
        Nt(l, () => {
          Lt(() => {
            Fw(u.value);
          });
        }),
        at(() => {
          !d.value ||
            (Rw(
              {
                el: d.value,
                nextEl: p.value,
                prevEl: g.value,
                paginationEl: b.value,
                scrollbarEl: h.value,
                swiper: u.value,
              },
              w
            ),
            a("swiper", u.value));
        }),
        ua(() => {
          u.value && !u.value.destroyed && u.value.destroy(!0, !1);
        });
      function _(C) {
        return w.virtual
          ? $w(u, C, l.value)
          : !w.loop || (u.value && u.value.destroyed)
          ? (C.forEach((T) => {
              T.props || (T.props = {}), (T.props.swiperRef = u);
            }),
            C)
          : Dw(u, C, w);
      }
      return () => {
        const { slides: C, slots: T } = Kr(n, v, m);
        return Ze(i, { ref: d, class: vp(r.value) }, [
          T["container-start"],
          Ze(o, { class: "swiper-wrapper" }, [T["wrapper-start"], _(C), T["wrapper-end"]]),
          hp(e) && [
            Ze("div", { ref: g, class: "swiper-button-prev" }),
            Ze("div", { ref: p, class: "swiper-button-next" }),
          ],
          gp(e) && Ze("div", { ref: h, class: "swiper-scrollbar" }),
          mp(e) && Ze("div", { ref: b, class: "swiper-pagination" }),
          T["container-end"],
        ]);
      };
    },
  },
  gi = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      zoom: { type: Boolean, default: void 0 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        a = !1;
      const { swiperRef: i } = e,
        o = me(null),
        r = me("swiper-slide");
      function l(c, d, u) {
        d === o.value && (r.value = u);
      }
      at(() => {
        !i.value || (i.value.on("_slideClass", l), (a = !0));
      }),
        ul(() => {
          a || !i || !i.value || (i.value.on("_slideClass", l), (a = !0));
        }),
        da(() => {
          !o.value ||
            !i ||
            !i.value ||
            (i.value.destroyed && r.value !== "swiper-slide" && (r.value = "swiper-slide"));
        }),
        ua(() => {
          !i || !i.value || i.value.off("_slideClass", l);
        });
      const s = Oe(() => ({
        isActive:
          r.value.indexOf("swiper-slide-active") >= 0 ||
          r.value.indexOf("swiper-slide-duplicate-active") >= 0,
        isVisible: r.value.indexOf("swiper-slide-visible") >= 0,
        isDuplicate: r.value.indexOf("swiper-slide-duplicate") >= 0,
        isPrev:
          r.value.indexOf("swiper-slide-prev") >= 0 ||
          r.value.indexOf("swiper-slide-duplicate-prev") >= 0,
        isNext:
          r.value.indexOf("swiper-slide-next") >= 0 ||
          r.value.indexOf("swiper-slide-duplicate-next") >= 0,
      }));
      return (
        An("swiperSlide", s),
        () =>
          Ze(
            e.tag,
            { class: vp(`${r.value}`), ref: o, "data-swiper-slide-index": e.virtualIndex },
            e.zoom
              ? Ze(
                  "div",
                  {
                    class: "swiper-zoom-container",
                    "data-swiper-zoom": typeof e.zoom == "number" ? e.zoom : void 0,
                  },
                  n.default && n.default(s.value)
                )
              : n.default && n.default(s.value)
          )
      );
    },
  };
const jw = ["src"],
  Vw = {
    __name: "PicCaption",
    props: { src: String, caption: Object },
    setup(e) {
      return (t, n) => (
        K(),
        ie("div", null, [
          B("img", { src: e.src }, null, 8, jw),
          B(
            "span",
            {
              style: an({
                color: e.caption.color,
                top: e.caption.top || "auto",
                left: e.caption.left || "auto",
                bottom: e.caption.bottom || "auto",
                right: e.caption.right || "auto",
              }),
            },
            yt(e.caption.txt),
            5
          ),
        ])
      );
    },
  };
var hd = _t(Vw, [["__scopeId", "data-v-4c4d1066"]]);
const _p = (e) => (on("data-v-920ea1b4"), (e = e()), rn(), e),
  Yw = { class: "s9" },
  Hw = { class: "box" },
  Uw = _p(() => B("img", { src: Py, class: "title" }, null, -1)),
  Gw = { class: "box" },
  Ww = _p(() => B("img", { src: Iy, class: "title" }, null, -1)),
  Kw = {
    __name: "s9",
    setup(e) {
      const t = Ge().appContext.config.globalProperties,
        n = Oe(() => t.$isMobile()),
        a = me(
          n.value
            ? [
                new URL("/lixin_ca3/dist/assets/1mb.873a394b.png", self.location).href,
                new URL("/lixin_ca3/dist/assets/2mb.0bb2565d.png", self.location).href,
              ]
            : [
                new URL("/lixin_ca3/dist/assets/1.5c3957ca.png", self.location).href,
                new URL("/lixin_ca3/dist/assets/2.8191257f.png", self.location).href,
              ]
        ),
        i = me({
          txt: "\u5916\u89C03D\u793A\u610F\u5716",
          color: "#fff",
          right: "10px",
          bottom: "10px",
        });
      return (o, r) => (
        K(),
        ie("article", Yw, [
          oe(
            ge(wp),
            {
              modules: [ge(fp), ge(pp)],
              navigation: "",
              loop: "",
              autoplay: { delay: 3e3, disableOnInteraction: !1, pauseOnMouseEnter: !0 },
              class: "mySwiper",
            },
            {
              default: Ke(() => [
                oe(ge(gi), null, {
                  default: Ke(() => [
                    B("div", Hw, [
                      oe(hd, { class: "view", src: a.value[0], caption: i.value }, null, 8, [
                        "src",
                        "caption",
                      ]),
                      Uw,
                    ]),
                  ]),
                  _: 1,
                }),
                oe(ge(gi), null, {
                  default: Ke(() => [
                    B("div", Gw, [
                      oe(hd, { class: "view", src: a.value[1], caption: i.value }, null, 8, [
                        "src",
                        "caption",
                      ]),
                      Ww,
                    ]),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
            8,
            ["modules"]
          ),
        ])
      );
    },
  };
var Qw = _t(Kw, [["__scopeId", "data-v-920ea1b4"]]),
  Xw = "/lixin_ca3/dist/assets/view3.cd760ab9.png",
  qw = "/lixin_ca3/dist/assets/title3.8f694e64.png",
  El = "/lixin_ca3/dist/assets/line.7fc592af.png",
  Zw = "/lixin_ca3/dist/assets/pics3.ed800c4c.png",
  Jw = "/lixin_ca3/dist/assets/view2.182475af.png",
  e_ = "/lixin_ca3/dist/assets/title2.3189462e.png",
  t_ = "/lixin_ca3/dist/assets/pics2.bf0a4ec5.png",
  n_ = "/lixin_ca3/dist/assets/view1.eba43667.png",
  a_ = "/lixin_ca3/dist/assets/title1.238e617f.png",
  i_ = "/lixin_ca3/dist/assets/pics1.9c3fc137.png";
const Ga = (e) => (on("data-v-9b096cc0"), (e = e()), rn(), e),
  o_ = { class: "s10" },
  r_ = { class: "box" },
  s_ = Ga(() =>
    B(
      "div",
      { class: "mbox" },
      [
        B("img", { src: Xw, class: "view" }),
        B("div", { class: "tbox" }, [
          B("img", { src: qw, class: "title" }),
          B(
            "p",
            null,
            " \u8B93\u661F\u7D1A\u670D\u52D9\uFF0C\u6210\u70BA\u65E5\u5E38\u6A19\u914D\u3002\u53F0\u5357\u6676\u82F1\u96F2\u7AEF\u7BA1\u5BB6\uFF0C\u63D0\u4F9B\u4F4F\u6236\u98EF\u5E97\u5EF6\u4F38\u670D\u52D9\uFF0C\u5F9E\u82B1\u85DD\u63D0\u6848\u3001\u79C1\u5EDA\u5230\u5BB6\u3001\u7F8E\u994C\u6599\u7406\u63A1\u8CFC\uFF0C\u5230\u661F\u7D1A\u793E\u5340\u8AB2\u7A0B\uFF0C\u8B93\u6BCF\u4F4D\u4F4F\u6236\u90FD\u80FD\u8F15\u9B06\u4EAB\u53D7\u9AD8\u54C1\u8CEA\u751F\u6D3B\u3002 "
          ),
        ]),
      ],
      -1
    )
  ),
  l_ = { key: 0, class: "hr", src: El },
  c_ = Ga(() =>
    B(
      "div",
      { class: "pbox is_v3" },
      [
        B("img", { src: Zw }),
        B("span", { class: "pc_u is_u1" }, "\u53F0\u5357\u6676\u82F1\u9152\u5E97"),
        B("span", { class: "pc_u is_u2" }, "\u53F0\u5357\u6676\u82F1\u9152\u5E97\u5927\u5EF3"),
      ],
      -1
    )
  ),
  d_ = { class: "box" },
  u_ = Ga(() =>
    B(
      "div",
      { class: "mbox" },
      [
        B("img", { src: Jw, class: "view" }),
        B("div", { class: "tbox" }, [
          B("img", { src: e_, class: "title" }),
          B(
            "p",
            null,
            " \u5F9E\u53F0\u5357\u7B2C\u4E00\u8C6A\u5B85\uFF0C\u5230\u53F0\u5357\u6307\u6A19\u8C6A\u5885\uFF0C\u5F97\u5229\u51FA\u624B\u7686\u662F\u5730\u6A19\u3002\u7CBE\u6E96\u638C\u63E1\u7A7A\u9593\u5C64\u6B21\u884D\u751F\u7684\u5FC3\u7406\u72C0\u614B\uFF0C\u8B93\u56DE\u5BB6\u7684\u52D5\u7DDA\uFF0C\u6BCF\u4E00\u6B65\u7686\u5145\u6EFF\u653E\u9B06\u537B\u5C08\u5C6C\u7684\u5100\u5F0F\u611F\u3002 "
          ),
        ]),
      ],
      -1
    )
  ),
  f_ = { key: 0, class: "hr", src: El },
  p_ = Ga(() =>
    B(
      "div",
      { class: "pbox is_v2" },
      [
        B("img", { src: t_ }),
        B("span", { class: "pc_a is_a1" }, "\u516C\u8A2D\u5BE6\u666F\u62CD\u651D\u5716"),
        B("span", { class: "pc_a is_a2" }, "\u516C\u8A2D\u5BE6\u666F\u62CD\u651D\u5716"),
        B("span", { class: "pc_a is_a3" }, "\u516C\u8A2D\u5BE6\u666F\u62CD\u651D\u5716"),
        B("span", { class: "pc_u is_u1" }, "\u53E4\u6839\u6F22\uFF0E\u6842\u7530 "),
        B("span", { class: "pc_u is_u2" }, "\u8018\u975E\u51E1"),
        B("span", { class: "pc_u is_u3" }, "\u9060\u594F\u66F2"),
      ],
      -1
    )
  ),
  h_ = { class: "box" },
  m_ = Ga(() =>
    B(
      "div",
      { class: "mbox" },
      [
        B("img", { src: n_, class: "view" }),
        B("div", { class: "tbox" }, [
          B("img", { src: a_, class: "title" }),
          B(
            "p",
            null,
            " \u5EFA\u7BC9\u662F\u8207\u6642\u9593\u7684\u5C0D\u8A71\uFF0C\u7121\u8AD6\u516C\u5171\u5EFA\u8A2D\u6216\u79C1\u4EBA\u5B85\u90B8\uFF0C\u64C5\u9577\u5728\u8A2D\u8A08\u878D\u5408\u81EA\u7136\u8207\u7576\u4EE3\uFF0C\u79C9\u6301\u300C\u7A7A\u9593\u5373\u751F\u547D\u5EF6\u4F38\u300D\u7406\u5FF5\uFF0C\u529B\u6C42\u6BCF\u500B\u7D30\u7BC0\u90FD\u80FD\u70BA\u4F7F\u7528\u8005\u5E36\u4F86\u5BE6\u7528\u7684\u611F\u52D5\u3002 "
          ),
        ]),
      ],
      -1
    )
  ),
  g_ = { key: 0, class: "hr", src: El },
  v_ = Ga(() =>
    B(
      "div",
      { class: "pbox is_v1" },
      [
        B("img", { src: i_ }),
        B("span", { class: "pc_a is_a1" }, "\u5916\u89C03D\u793A\u610F\u5716"),
        B("span", { class: "pc_a is_a2" }, "\u5916\u89C03D\u793A\u610F\u5716"),
        B("span", { class: "pc_a is_a3" }, "\u5916\u89C03D\u793A\u610F\u5716"),
        B("span", { class: "pc_a is_a4" }, "\u5916\u89C03D\u793A\u610F\u5716"),
        B(
          "span",
          { class: "pc_u is_u1" },
          "\u65B0\u5317\u6797\u53E3 \uFF0D \u5C0F\u30FB\u5B78\u5802"
        ),
        B("span", { class: "pc_u is_u2" }, "\u6843\u5712\u89C0\u97F3 \uFF0D \u9F0E\u9A30\u6848"),
        B(
          "span",
          { class: "pc_u is_u3" },
          "\u65B0\u5317\u65B0\u838A \uFF0D \u5143\u90A6\u9D3B\u798F\u6848"
        ),
        B(
          "span",
          { class: "pc_u is_u4" },
          "\u7965\u6CD3\u677F\u6A4B\u5927\u540C\u90FD\u66F4\u6848"
        ),
      ],
      -1
    )
  ),
  b_ = {
    __name: "s10",
    setup(e) {
      const t = Ge().appContext.config.globalProperties,
        n = Oe(() => t.$isMobile());
      return (a, i) => (
        K(),
        ie("article", o_, [
          oe(
            ge(wp),
            {
              modules: [ge(fp), ge(pp)],
              navigation: "",
              loop: "",
              autoplay: { delay: 3e3, disableOnInteraction: !1, pauseOnMouseEnter: !0 },
              class: "mySwiper",
            },
            {
              default: Ke(() => [
                oe(ge(gi), null, {
                  default: Ke(() => [
                    B("div", r_, [s_, ge(n) ? Pe("", !0) : (K(), ie("img", l_)), c_]),
                  ]),
                  _: 1,
                }),
                oe(ge(gi), null, {
                  default: Ke(() => [
                    B("div", d_, [u_, ge(n) ? Pe("", !0) : (K(), ie("img", f_)), p_]),
                  ]),
                  _: 1,
                }),
                oe(ge(gi), null, {
                  default: Ke(() => [
                    B("div", h_, [m_, ge(n) ? Pe("", !0) : (K(), ie("img", g_)), v_]),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
            8,
            ["modules"]
          ),
        ])
      );
    },
  };
var y_ = _t(b_, [["__scopeId", "data-v-9b096cc0"]]);
const Tl = (e) => (on("data-v-1884ccc1"), (e = e()), rn(), e),
  w_ = { class: "s12" },
  __ = { class: "box" },
  x_ = Tl(() =>
    B("div", { "data-aos": "fade-up", class: "title" }, "29\u576A \u8D85\u898F\u683C2+1\u623F", -1)
  ),
  A_ = Tl(() =>
    B(
      "div",
      { "data-aos": "fade-up", class: "txt" },
      [
        Le(
          " \u9748\u6D3B\u7A7A\u9593\u898F\u5283\uFF0C\u6EFF\u8DB3\u73FE\u4EE3\u4EBA\u591A\u5143\u9700\u6C42\u30022+1\u623F\u8A2D\u8A08\u517C\u5177\u6A5F\u80FD\u8207\u7F8E\u611F\uFF0C"
        ),
        B("br"),
        Le(
          " \u5927\u9762\u7A4D\u63A1\u5149\u8A2D\u8A08\uFF0C\u642D\u914D\u9AD8\u6548\u6536\u7D0D\u6A5F\u80FD\uFF0C\u8B93\u6BCF\u4E00\u5BF8\u7A7A\u9593\u90FD\u767C\u63EE\u6975\u81F4\u50F9\u503C\u3002 "
        ),
      ],
      -1
    )
  ),
  E_ = Tl(() => B("div", { class: "tip" }, "\u6A23\u54C1\u5C4B\u5BE6\u666F\u62CD\u651D", -1)),
  T_ = {
    __name: "s12",
    setup(e) {
      return (t, n) => (
        K(),
        ie("article", w_, [
          B("div", __, [
            x_,
            oe(Ua, { "data-aos": "fade-up", class: "hr", "props-color": "255,255,255" }),
            A_,
            E_,
          ]),
        ])
      );
    },
  };
var k_ = _t(T_, [["__scopeId", "data-v-1884ccc1"]]);
const kl = (e) => (on("data-v-5d402d28"), (e = e()), rn(), e),
  S_ = { class: "s13" },
  C_ = { class: "box" },
  O_ = kl(() =>
    B(
      "div",
      { "data-aos": "fade-up", class: "title" },
      "35\u576A \u8D85\u576A\u6548\u6B633\u623F",
      -1
    )
  ),
  P_ = kl(() =>
    B(
      "div",
      { "data-aos": "fade-up", class: "txt" },
      [
        Le(
          " \u5BEC\u655E\u8212\u9069\uFF0C\u8B93\u5BB6\u66F4\u5B8C\u6574\u30023 \u623F\u898F\u5283\u517C\u9867\u79C1\u5BC6\u6027\u8207\u5171\u4EAB\u7A7A\u9593\uFF0C"
        ),
        B("br"),
        Le(
          " \u7CBE\u7DFB\u7684\u8A2D\u8A08\u7D30\u7BC0\uFF0C\u8B93\u5BB6\u4EBA\u4E4B\u9593\u64C1\u6709\u66F4\u591A\u4E92\u52D5\u8207\u7368\u7ACB\u7A7A\u9593\u3002 "
        ),
      ],
      -1
    )
  ),
  I_ = kl(() => B("div", { class: "tip" }, "\u6A23\u54C1\u5C4B\u5BE6\u666F\u62CD\u651D", -1)),
  B_ = {
    __name: "s13",
    setup(e) {
      return (t, n) => (
        K(),
        ie("article", S_, [
          B("div", C_, [
            O_,
            oe(Ua, { "data-aos": "fade-up", class: "hr", "props-color": "255,255,255" }),
            P_,
            I_,
          ]),
        ])
      );
    },
  };
var M_ = _t(B_, [["__scopeId", "data-v-5d402d28"]]),
  L_ = "/lixin_ca3/dist/assets/en.f96bbddb.png",
  R_ = "/lixin_ca3/dist/assets/title_pc.ad14113c.png",
  D_ = "/lixin_ca3/dist/assets/title_mb.6f2eb856.png",
  md = "/lixin_ca3/dist/assets/1.cb0bd8b8.png",
  gd = "/lixin_ca3/dist/assets/2.622a4a45.png";
const N_ = (e) => (on("data-v-23067982"), (e = e()), rn(), e),
  z_ = { class: "s11" },
  $_ = N_(() => B("img", { src: L_, class: "en" }, null, -1)),
  F_ = { key: 0, src: R_, class: "title", "data-aos": "fade-up" },
  j_ = { key: 1, src: D_, class: "title", "data-aos": "fade-up" },
  V_ = pa(
    '<div class="box" data-v-23067982><div class="content ani_left" data-v-23067982><img src="' +
      md +
      '" data-v-23067982><img src="' +
      md +
      '" data-v-23067982></div></div><div class="box" data-v-23067982><div class="content ani_right" data-v-23067982><img src="' +
      gd +
      '" data-v-23067982><img src="' +
      gd +
      '" data-v-23067982></div></div>',
    2
  ),
  Y_ = {
    __name: "s11",
    setup(e) {
      const t = Ge().appContext.config.globalProperties,
        n = Oe(() => t.$isMobile());
      return (a, i) => (
        K(), ie("article", z_, [$_, ge(n) ? (K(), ie("img", j_)) : (K(), ie("img", F_)), V_])
      );
    },
  };
var H_ = _t(Y_, [["__scopeId", "data-v-23067982"]]),
  U_ = "/lixin_ca3/dist/assets/title.8fa11702.png",
  G_ = "/lixin_ca3/dist/assets/en.1644bccc.png",
  W_ = "/lixin_ca3/dist/assets/en2.8a110187.svg";
const K_ = B("input", { type: "checkbox", id: "policy-modal", class: "modal-toggle" }, null, -1),
  Q_ = { class: "modal" },
  X_ = { class: "modal-box w-11/12 max-w-5xl text-left" },
  q_ = B(
    "div",
    { class: "text-3xl font-bold" },
    "\u500B\u8CC7\u544A\u77E5\u4E8B\u9805\u8072\u660E",
    -1
  ),
  Z_ = { class: "text-lg py-4" },
  J_ = pa(
    '<div class="py-4"><h3 class="font-bold">\u4E00\u3001\u96B1\u79C1\u6B0A\u4FDD\u8B77\u653F\u7B56\u7684\u9069\u7528\u7BC4\u570D</h3><p> \u96B1\u79C1\u6B0A\u4FDD\u8B77\u653F\u7B56\u5167\u5BB9\uFF0C\u5305\u62EC\u672C\u7DB2\u7AD9\u5982\u4F55\u8655\u7406\u5728\u60A8\u4F7F\u7528\u7DB2\u7AD9\u670D\u52D9\u6642\u6536\u96C6\u5230\u7684\u500B\u4EBA\u8B58\u5225\u8CC7\u6599\u3002\u96B1\u79C1\u6B0A\u4FDD\u8B77\u653F\u7B56\u4E0D\u9069\u7528\u65BC\u672C\u7DB2\u7AD9\u4EE5\u5916\u7684\u76F8\u95DC\u9023\u7D50\u7DB2\u7AD9\uFF0C\u4E5F\u4E0D\u9069\u7528\u65BC\u975E\u672C\u7DB2\u7AD9\u6240\u59D4\u8A17\u6216\u53C3\u8207\u7BA1\u7406\u7684\u4EBA\u54E1\u3002 </p><h3 class="mt-4 font-bold">\u4E8C\u3001\u500B\u4EBA\u8CC7\u6599\u7684\u8490\u96C6\u3001\u8655\u7406\u53CA\u5229\u7528\u65B9\u5F0F</h3><ul class="mt-4 list-disc pl-8"><li> \u7576\u60A8\u9020\u8A2A\u672C\u7DB2\u7AD9\u6216\u4F7F\u7528\u672C\u7DB2\u7AD9\u6240\u63D0\u4F9B\u4E4B\u529F\u80FD\u670D\u52D9\u6642\uFF0C \u6211\u5011\u5C07\u8996\u8A72\u670D\u52D9\u529F\u80FD\u6027\u8CEA\uFF0C\u8ACB\u60A8\u63D0\u4F9B\u5FC5\u8981\u7684\u500B\u4EBA\u8CC7\u6599\uFF0C \u4E26\u5728\u8A72\u7279\u5B9A\u76EE\u7684\u7BC4\u570D\u5167\u8655\u7406\u53CA\u5229\u7528\u60A8\u7684\u500B\u4EBA\u8CC7\u6599\uFF1B\u975E\u7D93\u60A8\u66F8\u9762\u540C\u610F\uFF0C \u672C\u7DB2\u7AD9\u4E0D\u6703\u5C07\u500B\u4EBA\u8CC7\u6599\u7528\u65BC\u5176\u4ED6\u7528\u9014\u3002 </li><li> \u672C\u7DB2\u7AD9\u5728\u60A8\u4F7F\u7528\u670D\u52D9\u4FE1\u7BB1\u3001\u554F\u5377\u8ABF\u67E5\u7B49\u4E92\u52D5\u6027\u529F\u80FD\u6642\uFF0C\u6703\u4FDD\u7559\u60A8\u6240\u63D0\u4F9B\u7684\u59D3\u540D\u3001\u96FB\u5B50\u90F5\u4EF6\u5730\u5740\u3001\u806F\u7D61\u65B9\u5F0F\u53CA\u4F7F\u7528\u6642\u9593\u7B49\u3002 </li><li> \u65BC\u4E00\u822C\u700F\u89BD\u6642\uFF0C\u4F3A\u670D\u5668\u6703\u81EA\u884C\u8A18\u9304\u76F8\u95DC\u884C\u5F91\uFF0C \u5305\u62EC\u60A8\u4F7F\u7528\u9023\u7DDA\u8A2D\u5099\u7684IP\u4F4D\u5740\u3001\u4F7F\u7528\u6642\u9593\u3001\u4F7F\u7528\u7684\u700F\u89BD\u5668\u3001\u700F\u89BD\u53CA\u9EDE\u9078\u8CC7\u6599\u8A18\u9304\u7B49\uFF0C\u505A\u70BA\u6211\u5011\u589E\u9032\u7DB2\u7AD9\u670D\u52D9\u7684\u53C3\u8003\u4F9D\u64DA\uFF0C\u6B64\u8A18\u9304\u70BA\u5167\u90E8\u61C9\u7528\uFF0C\u6C7A\u4E0D\u5C0D\u5916\u516C\u4F48\u3002 </li><li> \u70BA\u63D0\u4F9B\u7CBE\u78BA\u7684\u670D\u52D9\uFF0C\u6211\u5011\u6703\u5C07\u6536\u96C6\u7684\u554F\u5377\u8ABF\u67E5\u5167\u5BB9\u9032\u884C\u7D71\u8A08\u8207\u5206\u6790\uFF0C\u5206\u6790\u7D50\u679C\u4E4B\u7D71\u8A08\u6578\u64DA\u6216\u8AAA\u660E\u6587\u5B57\u5448\u73FE\uFF0C\u9664\u4F9B\u5167\u90E8\u7814\u7A76\u5916\uFF0C\u6211\u5011\u6703\u8996\u9700\u8981\u516C\u4F48\u7D71\u8A08\u6578\u64DA\u53CA\u8AAA\u660E\u6587\u5B57\uFF0C\u4F46\u4E0D\u6D89\u53CA\u7279\u5B9A\u500B\u4EBA\u4E4B\u8CC7\u6599\u3002 </li></ul><h3 class="mt-4 font-bold">\u4E09\u3001\u8CC7\u6599\u4E4B\u4FDD\u8B77</h3><ul class="mt-4 list-disc pl-8"><li> \u672C\u7DB2\u7AD9\u4E3B\u6A5F\u5747\u8A2D\u6709\u9632\u706B\u7246\u3001\u9632\u6BD2\u7CFB\u7D71\u7B49\u76F8\u95DC\u7684\u5404\u9805\u8CC7\u8A0A\u5B89\u5168\u8A2D\u5099\u53CA\u5FC5\u8981\u7684\u5B89\u5168\u9632\u8B77\u63AA\u65BD\uFF0C \u52A0\u4EE5\u4FDD\u8B77\u7DB2\u7AD9\u53CA\u60A8\u7684\u500B\u4EBA\u8CC7\u6599\u63A1\u7528\u56B4\u683C\u7684\u4FDD\u8B77\u63AA\u65BD\uFF0C \u53EA\u7531\u7D93\u904E\u6388\u6B0A\u7684\u4EBA\u54E1\u624D\u80FD\u63A5\u89F8\u60A8\u7684\u500B\u4EBA\u8CC7\u6599\uFF0C \u76F8\u95DC\u8655\u7406\u4EBA\u54E1\u7686\u7C3D\u6709\u4FDD\u5BC6\u5408\u7D04\uFF0C\u5982\u6709\u9055\u53CD\u4FDD\u5BC6\u7FA9\u52D9\u8005\uFF0C \u5C07\u6703\u53D7\u5230\u76F8\u95DC\u7684\u6CD5\u5F8B\u8655\u5206\u3002 </li><li> \u5982\u56E0\u696D\u52D9\u9700\u8981\u6709\u5FC5\u8981\u59D4\u8A17\u5176\u4ED6\u55AE\u4F4D\u63D0\u4F9B\u670D\u52D9\u6642\uFF0C\u672C\u7DB2\u7AD9\u4EA6\u6703\u56B4\u683C\u8981\u6C42\u5176\u9075\u5B88\u4FDD\u5BC6\u7FA9\u52D9\uFF0C\u4E26\u4E14\u63A1\u53D6\u5FC5\u8981\u6AA2\u67E5\u7A0B\u5E8F\u4EE5\u78BA\u5B9A\u5176\u5C07\u78BA\u5BE6\u9075\u5B88\u3002 </li></ul><h3 class="mt-4 font-bold">\u56DB\u3001\u7DB2\u7AD9\u5C0D\u5916\u7684\u76F8\u95DC\u9023\u7D50</h3><p> \u672C\u7DB2\u7AD9\u7684\u7DB2\u9801\u63D0\u4F9B\u5176\u4ED6\u7DB2\u7AD9\u7684\u7DB2\u8DEF\u9023\u7D50\uFF0C\u60A8\u4E5F\u53EF\u7D93\u7531\u672C\u7DB2\u7AD9\u6240\u63D0\u4F9B\u7684\u9023\u7D50\uFF0C\u9EDE\u9078\u9032\u5165\u5176\u4ED6\u7DB2\u7AD9\u3002\u4F46\u8A72\u9023\u7D50\u7DB2\u7AD9\u4E0D\u9069\u7528\u672C\u7DB2\u7AD9\u7684\u96B1\u79C1\u6B0A\u4FDD\u8B77\u653F\u7B56\uFF0C\u60A8\u5FC5\u9808\u53C3\u8003\u8A72\u9023\u7D50\u7DB2\u7AD9\u4E2D\u7684\u96B1\u79C1\u6B0A\u4FDD\u8B77\u653F\u7B56\u3002 </p><h3 class="mt-4 font-bold">\u4E94\u3001\u8207\u7B2C\u4E09\u4EBA\u5171\u7528\u500B\u4EBA\u8CC7\u6599\u4E4B\u653F\u7B56</h3><p> \u672C\u7DB2\u7AD9\u7D55\u4E0D\u6703\u63D0\u4F9B\u3001\u4EA4\u63DB\u3001\u51FA\u79DF\u6216\u51FA\u552E\u4EFB\u4F55\u60A8\u7684\u500B\u4EBA\u8CC7\u6599\u7D66\u5176\u4ED6\u500B\u4EBA\u3001\u5718\u9AD4\u3001\u79C1\u4EBA\u4F01\u696D\u6216\u516C\u52D9\u6A5F\u95DC\uFF0C\u4F46\u6709\u6CD5\u5F8B\u4F9D\u64DA\u6216\u5408\u7D04\u7FA9\u52D9\u8005\uFF0C\u4E0D\u5728\u6B64\u9650\u3002 </p><p class="mt-4">\u524D\u9805\u4F46\u66F8\u4E4B\u60C5\u5F62\u5305\u62EC\u4E0D\u9650\u65BC\uFF1A</p><ul class="mt-4 list-disc pl-8list-disc pl-8"><li>\u7D93\u7531\u60A8\u66F8\u9762\u540C\u610F\u3002</li><li>\u6CD5\u5F8B\u660E\u6587\u898F\u5B9A\u3002</li><li>\u70BA\u514D\u9664\u60A8\u751F\u547D\u3001\u8EAB\u9AD4\u3001\u81EA\u7531\u6216\u8CA1\u7522\u4E0A\u4E4B\u5371\u96AA\u3002</li><li> \u8207\u516C\u52D9\u6A5F\u95DC\u6216\u5B78\u8853\u7814\u7A76\u6A5F\u69CB\u5408\u4F5C\uFF0C\u57FA\u65BC\u516C\u5171\u5229\u76CA\u70BA\u7D71\u8A08\u6216\u5B78\u8853\u7814\u7A76\u800C\u6709\u5FC5\u8981\uFF0C\u4E14\u8CC7\u6599\u7D93\u904E\u63D0\u4F9B\u8005\u8655\u7406\u6216\u8490\u96C6\u8457\u4F9D\u5176\u63ED\u9732\u65B9\u5F0F\u7121\u5F9E\u8B58\u5225\u7279\u5B9A\u4E4B\u7576\u4E8B\u4EBA\u3002 </li><li> \u7576\u60A8\u5728\u7DB2\u7AD9\u7684\u884C\u70BA\uFF0C\u9055\u53CD\u670D\u52D9\u689D\u6B3E\u6216\u53EF\u80FD\u640D\u5BB3\u6216\u59A8\u7919\u7DB2\u7AD9\u8207\u5176\u4ED6\u4F7F\u7528\u8005\u6B0A\u76CA\u6216\u5C0E\u81F4\u4EFB\u4F55\u4EBA\u906D\u53D7\u640D\u5BB3\u6642\uFF0C\u7D93\u7DB2\u7AD9\u7BA1\u7406\u55AE\u4F4D\u7814\u6790\u63ED\u9732\u60A8\u7684\u500B\u4EBA\u8CC7\u6599\u662F\u70BA\u4E86\u8FA8\u8B58\u3001\u806F\u7D61\u6216\u63A1\u53D6\u6CD5\u5F8B\u884C\u52D5\u6240\u5FC5\u8981\u8005\u3002 </li><li>\u6709\u5229\u65BC\u60A8\u7684\u6B0A\u76CA\u3002</li><li> \u672C\u7DB2\u7AD9\u59D4\u8A17\u5EE0\u5546\u5354\u52A9\u8490\u96C6\u3001\u8655\u7406\u6216\u5229\u7528\u60A8\u7684\u500B\u4EBA\u8CC7\u6599\u6642\uFF0C\u5C07\u5C0D\u59D4\u5916\u5EE0\u5546\u6216\u500B\u4EBA\u5584\u76E1\u76E3\u7763\u7BA1\u7406\u4E4B\u8CAC\u3002 </li></ul><h3 class="mt-4 font-bold">\u516D\u3001Cookie\u4E4B\u4F7F\u7528</h3><p> \u70BA\u4E86\u63D0\u4F9B\u60A8\u6700\u4F73\u7684\u670D\u52D9\uFF0C \u672C\u7DB2\u7AD9\u6703\u5728\u60A8\u7684\u96FB\u8166\u4E2D\u653E\u7F6E\u4E26\u53D6\u7528\u6211\u5011\u7684Cookie\uFF0C \u82E5\u60A8\u4E0D\u9858\u63A5\u53D7Cookie\u7684\u5BEB\u5165\uFF0C\u60A8\u53EF\u5728\u60A8\u4F7F\u7528\u7684\u700F\u89BD\u5668\u529F\u80FD\u9805\u4E2D\u8A2D\u5B9A\u96B1\u79C1\u6B0A\u7B49\u7D1A\u70BA\u9AD8\uFF0C\u5373\u53EF\u62D2\u7D55Cookie\u7684\u5BEB\u5165\uFF0C\u4F46\u53EF\u80FD\u6703\u5C0E\u81F3\u7DB2\u7AD9\u67D0\u4E9B\u529F\u80FD\u7121\u6CD5\u6B63\u5E38\u57F7\u884C \u3002 </p><h3 class="mt-4 font-bold">\u4E03\u3001\u96B1\u79C1\u6B0A\u4FDD\u8B77\u653F\u7B56\u4E4B\u4FEE\u6B63</h3><p> \u672C\u7DB2\u7AD9\u96B1\u79C1\u6B0A\u4FDD\u8B77\u653F\u7B56\u5C07\u56E0\u61C9\u9700\u6C42\u96A8\u6642\u9032\u884C\u4FEE\u6B63\uFF0C\u4FEE\u6B63\u5F8C\u7684\u689D\u6B3E\u5C07\u520A\u767B\u65BC\u7DB2\u7AD9\u4E0A\u3002 </p></div><div class="modal-action"><label for="policy-modal" class="btn">\u95DC\u9589</label></div>',
    2
  ),
  ex = {
    __name: "policy",
    setup(e) {
      return (t, n) => (
        K(),
        ie(
          ke,
          null,
          [
            K_,
            B("div", Q_, [
              B("div", X_, [
                q_,
                B(
                  "h3",
                  Z_,
                  " \u975E\u5E38\u6B61\u8FCE\u60A8\u5149\u81E8\u300C" +
                    yt(ge(Ne).caseName) +
                    "\u7DB2\u7AD9\u300D\uFF08\u4EE5\u4E0B\u7C21\u7A31\u672C\u7DB2\u7AD9\uFF09\uFF0C\u70BA\u4E86\u8B93\u60A8\u80FD\u5920\u5B89\u5FC3\u4F7F\u7528\u672C\u7DB2\u7AD9\u7684\u5404\u9805\u670D\u52D9\u8207\u8CC7\u8A0A\uFF0C\u7279\u6B64\u5411\u60A8\u8AAA\u660E\u672C\u7DB2\u7AD9\u7684\u96B1\u79C1\u6B0A\u4FDD\u8B77\u653F\u7B56\uFF0C\u4EE5\u4FDD\u969C\u60A8\u7684\u6B0A\u76CA\uFF0C\u8ACB\u60A8\u8A73\u95B1\u4E0B\u5217\u5167\u5BB9\uFF1A ",
                  1
                ),
                J_,
              ]),
            ]),
          ],
          64
        )
      );
    },
  },
  tx = { key: 0, class: "modal -mt-20 md:-mt-72" },
  nx = { class: "modal-box py-12 relative flex flex-col items-center justify-center" },
  ax = { key: 0, class: "h-12", src: "//h65.tw/img/form/phone.svg", alt: "phone", srcset: "" },
  ix = { key: 1, class: "h-12", src: "//h65.tw/img/form/messenger.svg", alt: "fb", srcset: "" },
  ox = { key: 2, class: "h-12", src: "//h65.tw/img/form/gmap.svg", alt: "gmap", srcset: "" },
  rx = { class: "text-xl mt-4 font-bold" },
  sx = { class: "text-md mt-4" },
  xp = {
    __name: "modal",
    props: { open: { type: Boolean, default: !1 }, type: { type: String, default: null } },
    emits: { init: null },
    setup(e, { emit: t }) {
      const n = e,
        a = () => {
          n.type == "phone"
            ? ((window.location.href = `tel:${Ne.phone.replace("-", "")}`),
              setTimeout(() => {
                window.location.href = "phoneThanks";
              }, 1e3))
            : n.type == "fb"
            ? window.open(Ne.fbMessage)
            : n.type == "gmap" && window.open(Ne.googleLink);
        };
      return (i, o) => (
        K(),
        ie(
          ke,
          null,
          [
            ui(
              B(
                "input",
                {
                  type: "checkbox",
                  "onUpdate:modelValue": o[0] || (o[0] = (r) => (n.open = r)),
                  id: "contact-modal",
                  class: "modal-toggle",
                },
                null,
                512
              ),
              [[Yi, n.open]]
            ),
            n.open
              ? (K(),
                ie("div", tx, [
                  B("div", nx, [
                    B(
                      "label",
                      {
                        for: "contact-modal",
                        class: "btn btn-sm btn-circle absolute right-4 top-4",
                        onClick: o[1] || (o[1] = (r) => i.$emit("init")),
                      },
                      "\u2715"
                    ),
                    n.type == "phone"
                      ? (K(), ie("img", ax))
                      : n.type == "fb"
                      ? (K(), ie("img", ix))
                      : n.type == "gmap"
                      ? (K(), ie("img", ox))
                      : Pe("", !0),
                    B(
                      "div",
                      rx,
                      yt(
                        n.type == "phone"
                          ? "\u8CDE\u5C4B\u5C08\u7DDA"
                          : n.type == "fb"
                          ? "Facebook Messenger"
                          : `${ge(Ne).address2 ? ge(Ne).address2 : "\u5C0E\u822A\u5730\u5740"}`
                      ),
                      1
                    ),
                    B(
                      "div",
                      sx,
                      yt(
                        n.type == "phone"
                          ? ge(Ne).phone
                          : n.type == "fb"
                          ? "\u7DDA\u4E0A\u8AEE\u8A62"
                          : `${ge(Ne).address}`
                      ),
                      1
                    ),
                    n.type != "phone"
                      ? (K(),
                        ie(
                          "div",
                          {
                            key: 3,
                            class: mt([
                              "btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2",
                              {
                                hidden: n.type == "phone" && !i.$isMobile(),
                                btlead: n.type == "fb",
                                btsearch: n.type == "gmap",
                                btcontac: n.type == "phone",
                              },
                            ]),
                            onClick: o[2] || (o[2] = (r) => a()),
                          },
                          yt(
                            n.type == "phone"
                              ? "\u64A5\u6253\u96FB\u8A71"
                              : n.type == "fb"
                              ? "\u7ACB\u5373\u8AEE\u8A62"
                              : "\u958B\u555F\u5C0E\u822A"
                          ),
                          3
                        ))
                      : (K(),
                        ie(
                          "div",
                          {
                            key: 4,
                            class: mt([
                              "btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2",
                              {
                                hidden: n.type == "phone" && !i.$isMobile(),
                                btlead: n.type == "fb",
                                btsearch: n.type == "gmap",
                                btcontac: n.type == "phone",
                              },
                            ]),
                            onClick: o[3] || (o[3] = (r) => a()),
                            id: "phonegtm",
                          },
                          yt(
                            n.type == "phone"
                              ? "\u64A5\u6253\u96FB\u8A71"
                              : n.type == "fb"
                              ? "\u7ACB\u5373\u8AEE\u8A62"
                              : "\u958B\u555F\u5C0E\u822A"
                          ),
                          3
                        )),
                  ]),
                ]))
              : Pe("", !0),
          ],
          64
        )
      );
    },
  };
const lx = B("div", null, [B("div", { class: "contact-info-img" })], -1),
  cx = {
    key: 0,
    class: "bg-white mo-contact-info flex justify-between w-full contact-item-box items-center",
  },
  dx = B(
    "img",
    { src: "//h65.tw/img/form/phone.svg", alt: "\u64A5\u6253\u96FB\u8A71", srcset: "" },
    null,
    -1
  ),
  ux = B("div", null, "\u64A5\u6253\u96FB\u8A71", -1),
  fx = [dx, ux],
  px = B(
    "img",
    { src: "//h65.tw/img/form/messenger.svg", alt: "FB \u8AEE\u8A62", srcset: "" },
    null,
    -1
  ),
  hx = B("div", null, "FB \u8AEE\u8A62", -1),
  mx = [px, hx],
  gx = B(
    "img",
    { src: "//h65.tw/img/form/pen.svg", alt: "\u9810\u7D04\u8CDE\u5C4B", srcset: "" },
    null,
    -1
  ),
  vx = B("div", null, "\u9810\u7D04\u8CDE\u5C4B", -1),
  bx = [gx, vx],
  yx = B(
    "img",
    { src: "//h65.tw/img/form/gmap.svg", alt: "\u5730\u5716\u5C0E\u822A", srcset: "" },
    null,
    -1
  ),
  wx = B("div", null, "\u5730\u5716\u5C0E\u822A", -1),
  _x = [yx, wx],
  xx = {
    __name: "contactInfo",
    setup(e) {
      const t = me(!1),
        n = me(""),
        a = () => {
          (t.value = !1), (n.value = null);
        },
        i = Fe("smoothScroll"),
        o = (r) => {
          i({ scrollTo: document.querySelector(r) });
        };
      return (r, l) => (
        K(),
        ie(
          ke,
          null,
          [
            lx,
            r.$isMobile()
              ? (K(),
                ie("div", cx, [
                  ge(Ne).phone
                    ? (K(),
                      ie(
                        "div",
                        {
                          key: 0,
                          class: "flex flex-1 flex-col contact-item justify-center items-center",
                          onClick:
                            l[0] ||
                            (l[0] = (s) => {
                              (t.value = !0), (n.value = "phone");
                            }),
                        },
                        fx
                      ))
                    : Pe("", !0),
                  B(
                    "div",
                    {
                      class: "flex flex-1 flex-col contact-item justify-center items-center",
                      onClick:
                        l[1] ||
                        (l[1] = (s) => {
                          (t.value = !0), (n.value = "fb");
                        }),
                    },
                    mx
                  ),
                  B(
                    "div",
                    {
                      class: "flex flex-1 flex-col contact-item justify-center items-center",
                      onClick: l[2] || (l[2] = (s) => o(".order")),
                    },
                    bx
                  ),
                  ge(Ne).address
                    ? (K(),
                      ie(
                        "div",
                        {
                          key: 1,
                          class: "flex flex-1 flex-col contact-item justify-center items-center",
                          onClick:
                            l[3] ||
                            (l[3] = (s) => {
                              (t.value = !0), (n.value = "gmap");
                            }),
                        },
                        _x
                      ))
                    : Pe("", !0),
                ]))
              : Pe("", !0),
            oe(xp, { open: t.value, type: n.value, onInit: a }, null, 8, ["open", "type"]),
          ],
          64
        )
      );
    },
  };
const Ax = { class: "gmap relative z-20" },
  Ex = ["src"],
  vd = {
    __name: "map",
    setup(e) {
      return (t, n) => (
        K(), ie("div", Ax, [B("iframe", { src: ge(Ne).googleSrc, frameborder: "0" }, null, 8, Ex)])
      );
    },
  };
var Tx = "/lixin_ca3/dist/assets/title.d3477dfb.svg";
const kx = pa(
    '<div class="house z-20 relative"><img src="' +
      Tx +
      '"></div><div class="footer relative z-20 flex items-center justify-center w-full h-[40px] bg-[#302626]"><a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50" src="//h65.tw/img/footerLogo.gif" alt="\u7ACB\u7098\u6578\u4F4D" srcset=""></a><a href="https://www.h65.tw/admin/test/login" target="_blank" class="text-white text-xs">\u7DB2\u9801\u88FD\u4F5C</a></div>',
    2
  ),
  Sx = {
    __name: "houseInfo",
    setup(e) {
      const t = Ge().appContext.config.globalProperties;
      return Oe(() => t.$isMobile()), (n, a) => kx;
    },
  },
  Ap = [
    [
      "\u81FA\u5317\u5E02",
      "\u4E2D\u6B63\u5340",
      "\u5927\u540C\u5340",
      "\u4E2D\u5C71\u5340",
      "\u677E\u5C71\u5340",
      "\u5927\u5B89\u5340",
      "\u842C\u83EF\u5340",
      "\u4FE1\u7FA9\u5340",
      "\u58EB\u6797\u5340",
      "\u5317\u6295\u5340",
      "\u5167\u6E56\u5340",
      "\u5357\u6E2F\u5340",
      "\u6587\u5C71\u5340",
    ],
    [
      "\u57FA\u9686\u5E02",
      "\u4EC1\u611B\u5340",
      "\u4FE1\u7FA9\u5340",
      "\u4E2D\u6B63\u5340",
      "\u4E2D\u5C71\u5340",
      "\u5B89\u6A02\u5340",
      "\u6696\u6696\u5340",
      "\u4E03\u5835\u5340",
    ],
    [
      "\u65B0\u5317\u5E02",
      "\u842C\u91CC\u5340",
      "\u91D1\u5C71\u5340",
      "\u677F\u6A4B\u5340",
      "\u6C50\u6B62\u5340",
      "\u6DF1\u5751\u5340",
      "\u77F3\u7887\u5340",
      "\u745E\u82B3\u5340",
      "\u5E73\u6EAA\u5340",
      "\u96D9\u6EAA\u5340",
      "\u8CA2\u5BEE\u5340",
      "\u65B0\u5E97\u5340",
      "\u576A\u6797\u5340",
      "\u70CF\u4F86\u5340",
      "\u6C38\u548C\u5340",
      "\u4E2D\u548C\u5340",
      "\u571F\u57CE\u5340",
      "\u4E09\u5CFD\u5340",
      "\u6A39\u6797\u5340",
      "\u9DAF\u6B4C\u5340",
      "\u4E09\u91CD\u5340",
      "\u65B0\u838A\u5340",
      "\u6CF0\u5C71\u5340",
      "\u6797\u53E3\u5340",
      "\u8606\u6D32\u5340",
      "\u4E94\u80A1\u5340",
      "\u516B\u91CC\u5340",
      "\u6DE1\u6C34\u5340",
      "\u4E09\u829D\u5340",
      "\u77F3\u9580\u5340",
    ],
    [
      "\u5B9C\u862D\u7E23",
      "\u5B9C\u862D",
      "\u982D\u57CE",
      "\u7901\u6EAA",
      "\u58EF\u570D",
      "\u54E1\u5C71",
      "\u7F85\u6771",
      "\u4E09\u661F",
      "\u5927\u540C",
      "\u4E94\u7D50",
      "\u51AC\u5C71",
      "\u8607\u6FB3",
      "\u5357\u6FB3",
      "\u91E3\u9B5A\u81FA\u5217\u5DBC",
    ],
    ["\u65B0\u7AF9\u5E02", "\u65B0\u7AF9\u5E02"],
    [
      "\u65B0\u7AF9\u7E23",
      "\u7AF9\u5317",
      "\u6E56\u53E3",
      "\u65B0\u8C50",
      "\u65B0\u57D4",
      "\u95DC\u897F",
      "\u828E\u6797",
      "\u5BF6\u5C71",
      "\u7AF9\u6771",
      "\u4E94\u5CF0",
      "\u6A6B\u5C71",
      "\u5C16\u77F3",
      "\u5317\u57D4",
      "\u5CE8\u7709",
    ],
    [
      "\u6843\u5712\u5E02",
      "\u4E2D\u58E2\u5340",
      "\u5E73\u93AE\u5340",
      "\u9F8D\u6F6D\u5340",
      "\u694A\u6885\u5340",
      "\u65B0\u5C4B\u5340",
      "\u89C0\u97F3\u5340",
      "\u6843\u5712\u5340",
      "\u9F9C\u5C71\u5340",
      "\u516B\u5FB7\u5340",
      "\u5927\u6EAA\u5340",
      "\u5FA9\u8208\u5340",
      "\u5927\u5712\u5340",
      "\u8606\u7AF9\u5340",
    ],
    [
      "\u82D7\u6817\u7E23",
      "\u7AF9\u5357",
      "\u982D\u4EFD",
      "\u4E09\u7063",
      "\u5357\u5E84",
      "\u7345\u6F6D",
      "\u5F8C\u9F8D",
      "\u901A\u9704",
      "\u82D1\u88E1",
      "\u82D7\u6817",
      "\u9020\u6A4B",
      "\u982D\u5C4B",
      "\u516C\u9928",
      "\u5927\u6E56",
      "\u6CF0\u5B89",
      "\u9285\u947C",
      "\u4E09\u7FA9",
      "\u897F\u6E56",
      "\u5353\u862D",
    ],
    [
      "\u81FA\u4E2D\u5E02",
      "\u4E2D\u5340",
      "\u6771\u5340",
      "\u5357\u5340",
      "\u897F\u5340",
      "\u5317\u5340",
      "\u5317\u5C6F\u5340",
      "\u897F\u5C6F\u5340",
      "\u5357\u5C6F\u5340",
      "\u592A\u5E73\u5340",
      "\u5927\u91CC\u5340",
      "\u9727\u5CF0\u5340",
      "\u70CF\u65E5\u5340",
      "\u8C50\u539F\u5340",
      "\u540E\u91CC\u5340",
      "\u77F3\u5CA1\u5340",
      "\u6771\u52E2\u5340",
      "\u548C\u5E73\u5340",
      "\u65B0\u793E\u5340",
      "\u6F6D\u5B50\u5340",
      "\u5927\u96C5\u5340",
      "\u795E\u5CA1\u5340",
      "\u5927\u809A\u5340",
      "\u6C99\u9E7F\u5340",
      "\u9F8D\u4E95\u5340",
      "\u68A7\u68F2\u5340",
      "\u6E05\u6C34\u5340",
      "\u5927\u7532\u5340",
      "\u5916\u57D4\u5340",
      "\u5927\u5B89\u5340",
    ],
    [
      "\u5F70\u5316\u7E23",
      "\u5F70\u5316",
      "\u82AC\u5712",
      "\u82B1\u58C7",
      "\u79C0\u6C34",
      "\u9E7F\u6E2F",
      "\u798F\u8208",
      "\u7DDA\u897F",
      "\u548C\u7F8E",
      "\u4F38\u6E2F",
      "\u54E1\u6797",
      "\u793E\u982D",
      "\u6C38\u9756",
      "\u57D4\u5FC3",
      "\u6EAA\u6E56",
      "\u5927\u6751",
      "\u57D4\u9E7D",
      "\u7530\u4E2D",
      "\u5317\u6597",
      "\u7530\u5C3E",
      "\u57E4\u982D",
      "\u6EAA\u5DDE",
      "\u7AF9\u5858",
      "\u4E8C\u6797",
      "\u5927\u57CE",
      "\u82B3\u82D1",
      "\u4E8C\u6C34",
    ],
    [
      "\u5357\u6295\u7E23",
      "\u5357\u6295",
      "\u4E2D\u5BEE",
      "\u8349\u5C6F",
      "\u570B\u59D3",
      "\u57D4\u91CC",
      "\u4EC1\u611B",
      "\u540D\u9593",
      "\u96C6\u96C6",
      "\u6C34\u91CC",
      "\u9B5A\u6C60",
      "\u4FE1\u7FA9",
      "\u7AF9\u5C71",
      "\u9E7F\u8C37",
    ],
    ["\u5609\u7FA9\u5E02", "\u5609\u7FA9\u5E02"],
    [
      "\u5609\u7FA9\u7E23",
      "\u756A\u8DEF",
      "\u6885\u5C71",
      "\u7AF9\u5D0E",
      "\u963F\u91CC\u5C71",
      "\u4E2D\u57D4",
      "\u5927\u57D4",
      "\u6C34\u4E0A",
      "\u9E7F\u8349",
      "\u592A\u4FDD",
      "\u6734\u5B50",
      "\u516D\u8173",
      "\u65B0\u6E2F",
      "\u6C11\u96C4",
      "\u5927\u6797",
      "\u6EAA\u53E3",
      "\u7FA9\u7AF9",
      "\u5E03\u888B",
      "\u6771\u77F3",
    ],
    [
      "\u96F2\u6797\u7E23",
      "\u6597\u5357",
      "\u5927\u57E4",
      "\u864E\u5C3E",
      "\u571F\u5EAB",
      "\u8912\u5FE0",
      "\u6771\u52E2",
      "\u81FA\u897F",
      "\u5D19\u80CC",
      "\u9EA5\u5BEE",
      "\u6597\u516D",
      "\u6797\u5167",
      "\u53E4\u5751",
      "\u83BF\u6850",
      "\u897F\u87BA",
      "\u4E8C\u5D19",
      "\u5317\u6E2F",
      "\u6C34\u6797",
      "\u53E3\u6E56",
      "\u56DB\u6E56",
      "\u5143\u9577",
    ],
    [
      "\u81FA\u5357\u5E02",
      "\u4E2D\u897F\u5340",
      "\u6771\u5340",
      "\u5357\u5340",
      "\u5317\u5340",
      "\u5B89\u5E73\u5340",
      "\u5B89\u5357\u5340",
      "\u6C38\u5EB7\u5340",
      "\u6B78\u4EC1\u5340",
      "\u65B0\u5316\u5340",
      "\u5DE6\u93AE\u5340",
      "\u7389\u4E95\u5340",
      "\u6960\u897F\u5340",
      "\u5357\u5316\u5340",
      "\u4EC1\u5FB7\u5340",
      "\u95DC\u5EDF\u5340",
      "\u9F8D\u5D0E\u5340",
      "\u5B98\u7530\u5340",
      "\u9EBB\u8C46\u5340",
      "\u4F73\u91CC\u5340",
      "\u897F\u6E2F\u5340",
      "\u4E03\u80A1\u5340",
      "\u5C07\u8ECD\u5340",
      "\u5B78\u7532\u5340",
      "\u5317\u9580\u5340",
      "\u65B0\u71DF\u5340",
      "\u5F8C\u58C1\u5340",
      "\u767D\u6CB3\u5340",
      "\u6771\u5C71\u5340",
      "\u516D\u7532\u5340",
      "\u4E0B\u71DF\u5340",
      "\u67F3\u71DF\u5340",
      "\u9E7D\u6C34\u5340",
      "\u5584\u5316\u5340",
      "\u5927\u5167\u5340",
      "\u5C71\u4E0A\u5340",
      "\u65B0\u5E02\u5340",
      "\u5B89\u5B9A\u5340",
    ],
    [
      "\u9AD8\u96C4\u5E02",
      "\u65B0\u8208\u5340",
      "\u524D\u91D1\u5340",
      "\u82D3\u96C5\u5340",
      "\u9E7D\u57D5\u5340",
      "\u9F13\u5C71\u5340",
      "\u65D7\u6D25\u5340",
      "\u524D\u93AE\u5340",
      "\u4E09\u6C11\u5340",
      "\u6960\u6893\u5340",
      "\u5C0F\u6E2F\u5340",
      "\u5DE6\u71DF\u5340",
      "\u4EC1\u6B66\u5340",
      "\u5927\u793E\u5340",
      "\u5CA1\u5C71\u5340",
      "\u8DEF\u7AF9\u5340",
      "\u963F\u84EE\u5340",
      "\u7530\u5BEE\u5340",
      "\u71D5\u5DE2\u5340",
      "\u6A4B\u982D\u5340",
      "\u6893\u5B98\u5340",
      "\u5F4C\u9640\u5340",
      "\u6C38\u5B89\u5340",
      "\u6E56\u5167\u5340",
      "\u9CF3\u5C71\u5340",
      "\u5927\u5BEE\u5340",
      "\u6797\u5712\u5340",
      "\u9CE5\u677E\u5340",
      "\u5927\u6A39\u5340",
      "\u65D7\u5C71\u5340",
      "\u7F8E\u6FC3\u5340",
      "\u516D\u9F9C\u5340",
      "\u5167\u9580\u5340",
      "\u6749\u6797\u5340",
      "\u7532\u4ED9\u5340",
      "\u6843\u6E90\u5340",
      "\u90A3\u746A\u590F\u5340",
      "\u8302\u6797\u5340",
      "\u8304\u8423\u5340",
    ],
    ["\u5357\u6D77\u8AF8\u5CF6", "\u6771\u6C99", "\u5357\u6C99"],
    [
      "\u6F8E\u6E56\u7E23",
      "\u99AC\u516C",
      "\u897F\u5DBC",
      "\u671B\u5B89",
      "\u4E03\u7F8E",
      "\u767D\u6C99",
      "\u6E56\u897F",
    ],
    [
      "\u5C4F\u6771\u7E23",
      "\u5C4F\u6771",
      "\u4E09\u5730\u9580",
      "\u9727\u81FA",
      "\u746A\u5BB6",
      "\u4E5D\u5982",
      "\u91CC\u6E2F",
      "\u9AD8\u6A39",
      "\u9E7D\u57D4",
      "\u9577\u6CBB",
      "\u9E9F\u6D1B",
      "\u7AF9\u7530",
      "\u5167\u57D4",
      "\u842C\u4E39",
      "\u6F6E\u5DDE",
      "\u6CF0\u6B66",
      "\u4F86\u7FA9",
      "\u842C\u5DD2",
      "\u5D01\u9802",
      "\u65B0\u57E4",
      "\u5357\u5DDE",
      "\u6797\u908A",
      "\u6771\u6E2F",
      "\u7409\u7403",
      "\u4F73\u51AC",
      "\u65B0\u5712",
      "\u678B\u5BEE",
      "\u678B\u5C71",
      "\u6625\u65E5",
      "\u7345\u5B50",
      "\u8ECA\u57CE",
      "\u7261\u4E39",
      "\u6046\u6625",
      "\u6EFF\u5DDE",
    ],
    [
      "\u81FA\u6771\u7E23",
      "\u81FA\u6771",
      "\u7DA0\u5CF6",
      "\u862D\u5DBC",
      "\u5EF6\u5E73",
      "\u5351\u5357",
      "\u9E7F\u91CE",
      "\u95DC\u5C71",
      "\u6D77\u7AEF",
      "\u6C60\u4E0A",
      "\u6771\u6CB3",
      "\u6210\u529F",
      "\u9577\u6FF1",
      "\u592A\u9EBB\u91CC",
      "\u91D1\u5CF0",
      "\u5927\u6B66",
      "\u9054\u4EC1",
    ],
    [
      "\u82B1\u84EE\u7E23",
      "\u82B1\u84EE",
      "\u65B0\u57CE",
      "\u79C0\u6797",
      "\u5409\u5B89",
      "\u58FD\u8C50",
      "\u9CF3\u6797",
      "\u5149\u5FA9",
      "\u8C50\u6FF1",
      "\u745E\u7A57",
      "\u842C\u69AE",
      "\u7389\u91CC",
      "\u5353\u6EAA",
      "\u5BCC\u91CC",
    ],
    [
      "\u91D1\u9580\u7E23",
      "\u91D1\u6C99",
      "\u91D1\u6E56",
      "\u91D1\u5BE7",
      "\u91D1\u57CE",
      "\u70C8\u5DBC",
      "\u70CF\u5775",
    ],
    ["\u9023\u6C5F\u7E23", "\u5357\u7AFF", "\u5317\u7AFF", "\u8392\u5149", "\u6771\u5F15"],
  ],
  Cx = Ap.map((e) => {
    const t = e[0];
    return { label: t, value: t };
  }),
  Ox = (e) => {
    if (e.length === 0) return [];
    const t = (n) => n[0] === e;
    return Ap.find(t)
      .slice(1)
      .map((n) => ({ value: n, label: n }));
  };
var Px = Object.defineProperty,
  bd = Object.getOwnPropertySymbols,
  Ix = Object.prototype.hasOwnProperty,
  Bx = Object.prototype.propertyIsEnumerable,
  yd = (e, t, n) =>
    t in e ? Px(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ep = (e, t) => {
    for (var n in t || (t = {})) Ix.call(t, n) && yd(e, n, t[n]);
    if (bd) for (var n of bd(t)) Bx.call(t, n) && yd(e, n, t[n]);
    return e;
  },
  mr = (e) => typeof e == "function",
  gr = (e) => typeof e == "string",
  Tp = (e) => gr(e) && e.trim().length > 0,
  Mx = (e) => typeof e == "number",
  Hn = (e) => typeof e == "undefined",
  Ci = (e) => typeof e == "object" && e !== null,
  Lx = (e) => zt(e, "tag") && Tp(e.tag),
  kp = (e) => window.TouchEvent && e instanceof TouchEvent,
  Sp = (e) => zt(e, "component") && Cp(e.component),
  Rx = (e) => mr(e) || Ci(e),
  Cp = (e) => !Hn(e) && (gr(e) || Rx(e) || Sp(e)),
  wd = (e) => Ci(e) && ["height", "width", "right", "left", "top", "bottom"].every((t) => Mx(e[t])),
  zt = (e, t) => (Ci(e) || mr(e)) && t in e,
  Dx = (
    (e) => () =>
      e++
  )(0);
function Qr(e) {
  return kp(e) ? e.targetTouches[0].clientX : e.clientX;
}
function _d(e) {
  return kp(e) ? e.targetTouches[0].clientY : e.clientY;
}
var Nx = (e) => {
    Hn(e.remove) ? e.parentNode && e.parentNode.removeChild(e) : e.remove();
  },
  Gi = (e) =>
    Sp(e)
      ? Gi(e.component)
      : Lx(e)
      ? Ue({
          render() {
            return e;
          },
        })
      : typeof e == "string"
      ? e
      : ye(ge(e)),
  zx = (e) => {
    if (typeof e == "string") return e;
    const t = zt(e, "props") && Ci(e.props) ? e.props : {},
      n = zt(e, "listeners") && Ci(e.listeners) ? e.listeners : {};
    return { component: Gi(e), props: t, listeners: n };
  },
  $x = () => typeof window != "undefined",
  Sl = class {
    constructor() {
      this.allHandlers = {};
    }
    getHandlers(e) {
      return this.allHandlers[e] || [];
    }
    on(e, t) {
      const n = this.getHandlers(e);
      n.push(t), (this.allHandlers[e] = n);
    }
    off(e, t) {
      const n = this.getHandlers(e);
      n.splice(n.indexOf(t) >>> 0, 1);
    }
    emit(e, t) {
      this.getHandlers(e).forEach((a) => a(t));
    }
  },
  Fx = (e) => ["on", "off", "emit"].every((t) => zt(e, t) && mr(e[t])),
  ft;
(function (e) {
  (e.SUCCESS = "success"),
    (e.ERROR = "error"),
    (e.WARNING = "warning"),
    (e.INFO = "info"),
    (e.DEFAULT = "default");
})(ft || (ft = {}));
var jo;
(function (e) {
  (e.TOP_LEFT = "top-left"),
    (e.TOP_CENTER = "top-center"),
    (e.TOP_RIGHT = "top-right"),
    (e.BOTTOM_LEFT = "bottom-left"),
    (e.BOTTOM_CENTER = "bottom-center"),
    (e.BOTTOM_RIGHT = "bottom-right");
})(jo || (jo = {}));
var pt;
(function (e) {
  (e.ADD = "add"),
    (e.DISMISS = "dismiss"),
    (e.UPDATE = "update"),
    (e.CLEAR = "clear"),
    (e.UPDATE_DEFAULTS = "update_defaults");
})(pt || (pt = {}));
var Tt = "Vue-Toastification",
  At = {
    type: { type: String, default: ft.DEFAULT },
    classNames: { type: [String, Array], default: () => [] },
    trueBoolean: { type: Boolean, default: !0 },
  },
  Op = { type: At.type, customIcon: { type: [String, Boolean, Object, Function], default: !0 } },
  _o = {
    component: { type: [String, Object, Function, Boolean], default: "button" },
    classNames: At.classNames,
    showOnHover: { type: Boolean, default: !1 },
    ariaLabel: { type: String, default: "close" },
  },
  Is = {
    timeout: { type: [Number, Boolean], default: 5e3 },
    hideProgressBar: { type: Boolean, default: !1 },
    isRunning: { type: Boolean, default: !1 },
  },
  Pp = { transition: { type: [Object, String], default: `${Tt}__bounce` } },
  jx = {
    position: { type: String, default: jo.TOP_RIGHT },
    draggable: At.trueBoolean,
    draggablePercent: { type: Number, default: 0.6 },
    pauseOnFocusLoss: At.trueBoolean,
    pauseOnHover: At.trueBoolean,
    closeOnClick: At.trueBoolean,
    timeout: Is.timeout,
    hideProgressBar: Is.hideProgressBar,
    toastClassName: At.classNames,
    bodyClassName: At.classNames,
    icon: Op.customIcon,
    closeButton: _o.component,
    closeButtonClassName: _o.classNames,
    showCloseButtonOnHover: _o.showOnHover,
    accessibility: {
      type: Object,
      default: () => ({ toastRole: "alert", closeButtonLabel: "close" }),
    },
    rtl: { type: Boolean, default: !1 },
    eventBus: { type: Object, required: !1, default: () => new Sl() },
  },
  Vx = {
    id: { type: [String, Number], required: !0, default: 0 },
    type: At.type,
    content: { type: [String, Object, Function], required: !0, default: "" },
    onClick: { type: Function, default: void 0 },
    onClose: { type: Function, default: void 0 },
  },
  Yx = {
    container: { type: [Object, Function], default: () => document.body },
    newestOnTop: At.trueBoolean,
    maxToasts: { type: Number, default: 20 },
    transition: Pp.transition,
    toastDefaults: Object,
    filterBeforeCreate: { type: Function, default: (e) => e },
    filterToasts: { type: Function, default: (e) => e },
    containerClassName: At.classNames,
    onMounted: Function,
    shareAppContext: [Boolean, Object],
  },
  Zt = {
    CORE_TOAST: jx,
    TOAST: Vx,
    CONTAINER: Yx,
    PROGRESS_BAR: Is,
    ICON: Op,
    TRANSITION: Pp,
    CLOSE_BUTTON: _o,
  },
  Ip = Ue({
    name: "VtProgressBar",
    props: Zt.PROGRESS_BAR,
    data() {
      return { hasClass: !0 };
    },
    computed: {
      style() {
        return {
          animationDuration: `${this.timeout}ms`,
          animationPlayState: this.isRunning ? "running" : "paused",
          opacity: this.hideProgressBar ? 0 : 1,
        };
      },
      cpClass() {
        return this.hasClass ? `${Tt}__progress-bar` : "";
      },
    },
    watch: {
      timeout() {
        (this.hasClass = !1), this.$nextTick(() => (this.hasClass = !0));
      },
    },
    mounted() {
      this.$el.addEventListener("animationend", this.animationEnded);
    },
    beforeUnmount() {
      this.$el.removeEventListener("animationend", this.animationEnded);
    },
    methods: {
      animationEnded() {
        this.$emit("close-toast");
      },
    },
  });
function Hx(e, t) {
  return K(), ie("div", { style: an(e.style), class: mt(e.cpClass) }, null, 6);
}
Ip.render = Hx;
var Ux = Ip,
  Bp = Ue({
    name: "VtCloseButton",
    props: Zt.CLOSE_BUTTON,
    computed: {
      buttonComponent() {
        return this.component !== !1 ? Gi(this.component) : "button";
      },
      classes() {
        const e = [`${Tt}__close-button`];
        return this.showOnHover && e.push("show-on-hover"), e.concat(this.classNames);
      },
    },
  }),
  Gx = Le(" \xD7 ");
function Wx(e, t) {
  return (
    K(),
    Ye(
      ji(e.buttonComponent),
      Vi({ "aria-label": e.ariaLabel, class: e.classes }, e.$attrs),
      { default: Ke(() => [Gx]), _: 1 },
      16,
      ["aria-label", "class"]
    )
  );
}
Bp.render = Wx;
var Kx = Bp,
  Mp = {},
  Qx = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "check-circle",
    class: "svg-inline--fa fa-check-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  Xx = B(
    "path",
    {
      fill: "currentColor",
      d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
    },
    null,
    -1
  ),
  qx = [Xx];
function Zx(e, t) {
  return K(), ie("svg", Qx, qx);
}
Mp.render = Zx;
var Jx = Mp,
  Lp = {},
  e2 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "info-circle",
    class: "svg-inline--fa fa-info-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  t2 = B(
    "path",
    {
      fill: "currentColor",
      d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
    },
    null,
    -1
  ),
  n2 = [t2];
function a2(e, t) {
  return K(), ie("svg", e2, n2);
}
Lp.render = a2;
var xd = Lp,
  Rp = {},
  i2 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-circle",
    class: "svg-inline--fa fa-exclamation-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  o2 = B(
    "path",
    {
      fill: "currentColor",
      d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
    },
    null,
    -1
  ),
  r2 = [o2];
function s2(e, t) {
  return K(), ie("svg", i2, r2);
}
Rp.render = s2;
var l2 = Rp,
  Dp = {},
  c2 = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-triangle",
    class: "svg-inline--fa fa-exclamation-triangle fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
  },
  d2 = B(
    "path",
    {
      fill: "currentColor",
      d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
    },
    null,
    -1
  ),
  u2 = [d2];
function f2(e, t) {
  return K(), ie("svg", c2, u2);
}
Dp.render = f2;
var p2 = Dp,
  Np = Ue({
    name: "VtIcon",
    props: Zt.ICON,
    computed: {
      customIconChildren() {
        return zt(this.customIcon, "iconChildren")
          ? this.trimValue(this.customIcon.iconChildren)
          : "";
      },
      customIconClass() {
        return gr(this.customIcon)
          ? this.trimValue(this.customIcon)
          : zt(this.customIcon, "iconClass")
          ? this.trimValue(this.customIcon.iconClass)
          : "";
      },
      customIconTag() {
        return zt(this.customIcon, "iconTag") ? this.trimValue(this.customIcon.iconTag, "i") : "i";
      },
      hasCustomIcon() {
        return this.customIconClass.length > 0;
      },
      component() {
        return this.hasCustomIcon
          ? this.customIconTag
          : Cp(this.customIcon)
          ? Gi(this.customIcon)
          : this.iconTypeComponent;
      },
      iconTypeComponent() {
        return {
          [ft.DEFAULT]: xd,
          [ft.INFO]: xd,
          [ft.SUCCESS]: Jx,
          [ft.ERROR]: p2,
          [ft.WARNING]: l2,
        }[this.type];
      },
      iconClasses() {
        const e = [`${Tt}__icon`];
        return this.hasCustomIcon ? e.concat(this.customIconClass) : e;
      },
    },
    methods: {
      trimValue(e, t = "") {
        return Tp(e) ? e.trim() : t;
      },
    },
  });
function h2(e, t) {
  return (
    K(),
    Ye(
      ji(e.component),
      { class: mt(e.iconClasses) },
      { default: Ke(() => [Le(yt(e.customIconChildren), 1)]), _: 1 },
      8,
      ["class"]
    )
  );
}
Np.render = h2;
var m2 = Np,
  zp = Ue({
    name: "VtToast",
    components: { ProgressBar: Ux, CloseButton: Kx, Icon: m2 },
    inheritAttrs: !1,
    props: Object.assign({}, Zt.CORE_TOAST, Zt.TOAST),
    data() {
      return {
        isRunning: !0,
        disableTransitions: !1,
        beingDragged: !1,
        dragStart: 0,
        dragPos: { x: 0, y: 0 },
        dragRect: {},
      };
    },
    computed: {
      classes() {
        const e = [`${Tt}__toast`, `${Tt}__toast--${this.type}`, `${this.position}`].concat(
          this.toastClassName
        );
        return (
          this.disableTransitions && e.push("disable-transition"),
          this.rtl && e.push(`${Tt}__toast--rtl`),
          e
        );
      },
      bodyClasses() {
        return [`${Tt}__toast-${gr(this.content) ? "body" : "component-body"}`].concat(
          this.bodyClassName
        );
      },
      draggableStyle() {
        return this.dragStart === this.dragPos.x
          ? {}
          : this.beingDragged
          ? {
              transform: `translateX(${this.dragDelta}px)`,
              opacity: 1 - Math.abs(this.dragDelta / this.removalDistance),
            }
          : { transition: "transform 0.2s, opacity 0.2s", transform: "translateX(0)", opacity: 1 };
      },
      dragDelta() {
        return this.beingDragged ? this.dragPos.x - this.dragStart : 0;
      },
      removalDistance() {
        return wd(this.dragRect)
          ? (this.dragRect.right - this.dragRect.left) * this.draggablePercent
          : 0;
      },
    },
    mounted() {
      this.draggable && this.draggableSetup(), this.pauseOnFocusLoss && this.focusSetup();
    },
    beforeUnmount() {
      this.draggable && this.draggableCleanup(), this.pauseOnFocusLoss && this.focusCleanup();
    },
    methods: {
      hasProp: zt,
      getVueComponentFromObj: Gi,
      closeToast() {
        this.eventBus.emit(pt.DISMISS, this.id);
      },
      clickHandler() {
        this.onClick && this.onClick(this.closeToast),
          this.closeOnClick &&
            (!this.beingDragged || this.dragStart === this.dragPos.x) &&
            this.closeToast();
      },
      timeoutHandler() {
        this.closeToast();
      },
      hoverPause() {
        this.pauseOnHover && (this.isRunning = !1);
      },
      hoverPlay() {
        this.pauseOnHover && (this.isRunning = !0);
      },
      focusPause() {
        this.isRunning = !1;
      },
      focusPlay() {
        this.isRunning = !0;
      },
      focusSetup() {
        addEventListener("blur", this.focusPause), addEventListener("focus", this.focusPlay);
      },
      focusCleanup() {
        removeEventListener("blur", this.focusPause), removeEventListener("focus", this.focusPlay);
      },
      draggableSetup() {
        const e = this.$el;
        e.addEventListener("touchstart", this.onDragStart, { passive: !0 }),
          e.addEventListener("mousedown", this.onDragStart),
          addEventListener("touchmove", this.onDragMove, { passive: !1 }),
          addEventListener("mousemove", this.onDragMove),
          addEventListener("touchend", this.onDragEnd),
          addEventListener("mouseup", this.onDragEnd);
      },
      draggableCleanup() {
        const e = this.$el;
        e.removeEventListener("touchstart", this.onDragStart),
          e.removeEventListener("mousedown", this.onDragStart),
          removeEventListener("touchmove", this.onDragMove),
          removeEventListener("mousemove", this.onDragMove),
          removeEventListener("touchend", this.onDragEnd),
          removeEventListener("mouseup", this.onDragEnd);
      },
      onDragStart(e) {
        (this.beingDragged = !0),
          (this.dragPos = { x: Qr(e), y: _d(e) }),
          (this.dragStart = Qr(e)),
          (this.dragRect = this.$el.getBoundingClientRect());
      },
      onDragMove(e) {
        this.beingDragged &&
          (e.preventDefault(),
          this.isRunning && (this.isRunning = !1),
          (this.dragPos = { x: Qr(e), y: _d(e) }));
      },
      onDragEnd() {
        this.beingDragged &&
          (Math.abs(this.dragDelta) >= this.removalDistance
            ? ((this.disableTransitions = !0), this.$nextTick(() => this.closeToast()))
            : setTimeout(() => {
                (this.beingDragged = !1),
                  wd(this.dragRect) &&
                  this.pauseOnHover &&
                  this.dragRect.bottom >= this.dragPos.y &&
                  this.dragPos.y >= this.dragRect.top &&
                  this.dragRect.left <= this.dragPos.x &&
                  this.dragPos.x <= this.dragRect.right
                    ? (this.isRunning = !1)
                    : (this.isRunning = !0);
              }));
      },
    },
  }),
  g2 = ["role"];
function v2(e, t) {
  const n = En("Icon"),
    a = En("CloseButton"),
    i = En("ProgressBar");
  return (
    K(),
    ie(
      "div",
      {
        class: mt(e.classes),
        style: an(e.draggableStyle),
        onClick: t[0] || (t[0] = (...o) => e.clickHandler && e.clickHandler(...o)),
        onMouseenter: t[1] || (t[1] = (...o) => e.hoverPause && e.hoverPause(...o)),
        onMouseleave: t[2] || (t[2] = (...o) => e.hoverPlay && e.hoverPlay(...o)),
      },
      [
        e.icon
          ? (K(),
            Ye(n, { key: 0, "custom-icon": e.icon, type: e.type }, null, 8, [
              "custom-icon",
              "type",
            ]))
          : Pe("v-if", !0),
        B(
          "div",
          { role: e.accessibility.toastRole || "alert", class: mt(e.bodyClasses) },
          [
            typeof e.content == "string"
              ? (K(), ie(ke, { key: 0 }, [Le(yt(e.content), 1)], 2112))
              : (K(),
                Ye(
                  ji(e.getVueComponentFromObj(e.content)),
                  Vi(
                    { key: 1, "toast-id": e.id },
                    e.hasProp(e.content, "props") ? e.content.props : {},
                    $u(e.hasProp(e.content, "listeners") ? e.content.listeners : {}),
                    { onCloseToast: e.closeToast }
                  ),
                  null,
                  16,
                  ["toast-id", "onCloseToast"]
                )),
          ],
          10,
          g2
        ),
        e.closeButton
          ? (K(),
            Ye(
              a,
              {
                key: 1,
                component: e.closeButton,
                "class-names": e.closeButtonClassName,
                "show-on-hover": e.showCloseButtonOnHover,
                "aria-label": e.accessibility.closeButtonLabel,
                onClick: Ef(e.closeToast, ["stop"]),
              },
              null,
              8,
              ["component", "class-names", "show-on-hover", "aria-label", "onClick"]
            ))
          : Pe("v-if", !0),
        e.timeout
          ? (K(),
            Ye(
              i,
              {
                key: 2,
                "is-running": e.isRunning,
                "hide-progress-bar": e.hideProgressBar,
                timeout: e.timeout,
                onCloseToast: e.timeoutHandler,
              },
              null,
              8,
              ["is-running", "hide-progress-bar", "timeout", "onCloseToast"]
            ))
          : Pe("v-if", !0),
      ],
      38
    )
  );
}
zp.render = v2;
var b2 = zp,
  $p = Ue({
    name: "VtTransition",
    props: Zt.TRANSITION,
    emits: ["leave"],
    methods: {
      hasProp: zt,
      leave(e) {
        e instanceof HTMLElement &&
          ((e.style.left = e.offsetLeft + "px"),
          (e.style.top = e.offsetTop + "px"),
          (e.style.width = getComputedStyle(e).width),
          (e.style.position = "absolute"));
      },
    },
  });
function y2(e, t) {
  return (
    K(),
    Ye(
      wf,
      {
        tag: "div",
        "enter-active-class": e.transition.enter
          ? e.transition.enter
          : `${e.transition}-enter-active`,
        "move-class": e.transition.move ? e.transition.move : `${e.transition}-move`,
        "leave-active-class": e.transition.leave
          ? e.transition.leave
          : `${e.transition}-leave-active`,
        onLeave: e.leave,
      },
      { default: Ke(() => [Ma(e.$slots, "default")]), _: 3 },
      8,
      ["enter-active-class", "move-class", "leave-active-class", "onLeave"]
    )
  );
}
$p.render = y2;
var w2 = $p,
  Fp = Ue({
    name: "VueToastification",
    devtools: { hide: !0 },
    components: { Toast: b2, VtTransition: w2 },
    props: Object.assign({}, Zt.CORE_TOAST, Zt.CONTAINER, Zt.TRANSITION),
    data() {
      return { count: 0, positions: Object.values(jo), toasts: {}, defaults: {} };
    },
    computed: {
      toastArray() {
        return Object.values(this.toasts);
      },
      filteredToasts() {
        return this.defaults.filterToasts(this.toastArray);
      },
    },
    beforeMount() {
      const e = this.eventBus;
      e.on(pt.ADD, this.addToast),
        e.on(pt.CLEAR, this.clearToasts),
        e.on(pt.DISMISS, this.dismissToast),
        e.on(pt.UPDATE, this.updateToast),
        e.on(pt.UPDATE_DEFAULTS, this.updateDefaults),
        (this.defaults = this.$props);
    },
    mounted() {
      this.setup(this.container);
    },
    methods: {
      async setup(e) {
        mr(e) && (e = await e()), Nx(this.$el), e.appendChild(this.$el);
      },
      setToast(e) {
        Hn(e.id) || (this.toasts[e.id] = e);
      },
      addToast(e) {
        e.content = zx(e.content);
        const t = Object.assign(
            {},
            this.defaults,
            e.type && this.defaults.toastDefaults && this.defaults.toastDefaults[e.type],
            e
          ),
          n = this.defaults.filterBeforeCreate(t, this.toastArray);
        n && this.setToast(n);
      },
      dismissToast(e) {
        const t = this.toasts[e];
        !Hn(t) && !Hn(t.onClose) && t.onClose(), delete this.toasts[e];
      },
      clearToasts() {
        Object.keys(this.toasts).forEach((e) => {
          this.dismissToast(e);
        });
      },
      getPositionToasts(e) {
        const t = this.filteredToasts
          .filter((n) => n.position === e)
          .slice(0, this.defaults.maxToasts);
        return this.defaults.newestOnTop ? t.reverse() : t;
      },
      updateDefaults(e) {
        Hn(e.container) || this.setup(e.container),
          (this.defaults = Object.assign({}, this.defaults, e));
      },
      updateToast({ id: e, options: t, create: n }) {
        this.toasts[e]
          ? (t.timeout && t.timeout === this.toasts[e].timeout && t.timeout++,
            this.setToast(Object.assign({}, this.toasts[e], t)))
          : n && this.addToast(Object.assign({}, { id: e }, t));
      },
      getClasses(e) {
        return [`${Tt}__container`, e].concat(this.defaults.containerClassName);
      },
    },
  });
function _2(e, t) {
  const n = En("Toast"),
    a = En("VtTransition");
  return (
    K(),
    ie("div", null, [
      (K(!0),
      ie(
        ke,
        null,
        Ei(
          e.positions,
          (i) => (
            K(),
            ie("div", { key: i }, [
              oe(
                a,
                { transition: e.defaults.transition, class: mt(e.getClasses(i)) },
                {
                  default: Ke(() => [
                    (K(!0),
                    ie(
                      ke,
                      null,
                      Ei(
                        e.getPositionToasts(i),
                        (o) => (K(), Ye(n, Vi({ key: o.id }, o), null, 16))
                      ),
                      128
                    )),
                  ]),
                  _: 2,
                },
                1032,
                ["transition", "class"]
              ),
            ])
          )
        ),
        128
      )),
    ])
  );
}
Fp.render = _2;
var x2 = Fp,
  Ad = (e = {}, t = !0) => {
    const n = (e.eventBus = e.eventBus || new Sl());
    t &&
      Lt(() => {
        const o = yl(x2, Ep({}, e)),
          r = o.mount(document.createElement("div")),
          l = e.onMounted;
        if ((Hn(l) || l(r, o), e.shareAppContext)) {
          const s = e.shareAppContext;
          s === !0
            ? console.warn(`[${Tt}] App to share context with was not provided.`)
            : ((o._context.components = s._context.components),
              (o._context.directives = s._context.directives),
              (o._context.mixins = s._context.mixins),
              (o._context.provides = s._context.provides),
              (o.config.globalProperties = s.config.globalProperties));
        }
      });
    const a = (o, r) => {
      const l = Object.assign({}, { id: Dx(), type: ft.DEFAULT }, r, { content: o });
      return n.emit(pt.ADD, l), l.id;
    };
    (a.clear = () => n.emit(pt.CLEAR, void 0)),
      (a.updateDefaults = (o) => {
        n.emit(pt.UPDATE_DEFAULTS, o);
      }),
      (a.dismiss = (o) => {
        n.emit(pt.DISMISS, o);
      });
    function i(o, { content: r, options: l }, s = !1) {
      const c = Object.assign({}, l, { content: r });
      n.emit(pt.UPDATE, { id: o, options: c, create: s });
    }
    return (
      (a.update = i),
      (a.success = (o, r) => a(o, Object.assign({}, r, { type: ft.SUCCESS }))),
      (a.info = (o, r) => a(o, Object.assign({}, r, { type: ft.INFO }))),
      (a.error = (o, r) => a(o, Object.assign({}, r, { type: ft.ERROR }))),
      (a.warning = (o, r) => a(o, Object.assign({}, r, { type: ft.WARNING }))),
      a
    );
  },
  A2 = () => {
    const e = () => console.warn(`[${Tt}] This plugin does not support SSR!`);
    return new Proxy(e, {
      get() {
        return e;
      },
    });
  };
function Bs(e) {
  return $x() ? (Fx(e) ? Ad({ eventBus: e }, !1) : Ad(e, !0)) : A2();
}
var jp = Symbol("VueToastification"),
  Vp = new Sl(),
  E2 = (e, t) => {
    (t == null ? void 0 : t.shareAppContext) === !0 && (t.shareAppContext = e);
    const n = Bs(Ep({ eventBus: Vp }, t));
    e.provide(jp, n);
  },
  T2 = (e) => {
    if (e) return Bs(e);
    const t = Ge() ? Fe(jp, void 0) : void 0;
    return t || Bs(Vp);
  },
  k2 = E2;
const S2 = { id: "order", class: "order relative text-center" },
  C2 = { class: "order-section" },
  O2 = { class: "title_box" },
  P2 = B("img", { class: "img_title", src: U_ }, null, -1),
  I2 = B("img", { class: "img_subtitle", src: G_ }, null, -1),
  B2 = B("img", { class: "img_contact", src: W_ }, null, -1),
  M2 = { class: "form mx-auto relative flex justify-center" },
  L2 = { class: "left h-full flex flex-col justify-between items-center" },
  R2 = { class: "row" },
  D2 = { class: "deco" },
  N2 = Le(" \u59D3\u540D "),
  z2 = { key: 0 },
  $2 = ["value"],
  F2 = { class: "row" },
  j2 = { class: "deco" },
  V2 = Le(" \u624B\u6A5F "),
  Y2 = { key: 0 },
  H2 = ["value"],
  U2 = { class: "row" },
  G2 = { class: "deco" },
  W2 = Le(" \u4FE1\u7BB1 "),
  K2 = { key: 0 },
  Q2 = ["value"],
  X2 = { class: "row" },
  q2 = Le(" \u5C45\u4F4F\u7E23\u5E02 "),
  Z2 = { key: 0 },
  J2 = ["value"],
  e5 = { class: "row" },
  t5 = Le(" \u5C45\u4F4F\u5730\u5340 "),
  n5 = { key: 0 },
  a5 = ["value"],
  i5 = { class: "row" },
  o5 = ["value"],
  r5 = { key: 0, class: "right" },
  s5 = { class: "row textarea w-full h-full rounded-none" },
  l5 = { class: "flex_box" },
  c5 = { class: "flex gap-2 items-center control policy" },
  d5 = ["checked"],
  u5 = B(
    "p",
    { class: "text-[#000]" },
    [
      Le(" \u672C\u4EBA\u77E5\u6089\u4E26\u540C\u610F"),
      B(
        "label",
        { for: "policy-modal", class: "modal-button cursor-pointer hover:opacity-70" },
        "\u300C\u500B\u8CC7\u544A\u77E5\u4E8B\u9805\u8072\u660E\u300D"
      ),
      Le("\u5167\u5BB9 "),
    ],
    -1
  ),
  f5 = { key: 0, class: "map_mb" },
  p5 = {
    __name: "order",
    setup(e) {
      const t = Ge().appContext.config.globalProperties,
        n = Oe(() => t.$isMobile()),
        a = T2(),
        i = me(!1),
        o = Ct({
          name: "",
          phone: "",
          room_type: "",
          budget: "",
          project: "",
          email: "",
          use_type: "",
          ctime: "",
          city: "",
          area: "",
          msg: "",
          policyChecked: !1,
        }),
        r = ["project", "msg", "email", "room_type", "budget", "city", "area", "ctime", "use_type"],
        l = me([
          "\u59D3\u540D",
          "\u624B\u6A5F",
          "\u623F\u578B",
          "\u9810\u7B97",
          "\u5EFA\u6848",
          "\u4FE1\u7BB1",
          "\u806F\u7D61\u6642\u9593",
          "\u7528\u9014",
          "\u5C45\u4F4F\u7E23\u5E02",
          "\u5C45\u4F4F\u5730\u5340",
          "\u5099\u8A3B\u8A0A\u606F",
          "\u500B\u8CC7\u544A\u77E5\u4E8B\u9805\u8072\u660E",
        ]),
        s = me([]);
      Nt(
        () => o.city,
        (d, u) => {
          (s.value = Ox(d)), (o.area = s.value[0].value);
        }
      );
      const c = () => {
        const d = new URLSearchParams(window.location.search),
          u = d.get("utm_source"),
          f = d.get("utm_medium"),
          v = d.get("utm_content"),
          m = d.get("utm_campaign"),
          p = new Date();
        p.getFullYear(),
          p.getMonth() + 1,
          p.getDate(),
          p.getHours(),
          p.getMinutes(),
          p.getSeconds();
        const g = new FormData();
        let b = !0,
          h = [],
          w = 0;
        for (const [S, _] of Object.entries(o))
          r.includes(S) || ((_ == "" || _ == !1) && h.push(l.value[w])), w++, g.append(S, _);
        if (
          (g.append("utm_source", u),
          g.append("utm_medium", f),
          g.append("utm_content", v),
          g.append("utm_campaign", m),
          h.length > 0)
        ) {
          (b = !1), a.error(`\u300C${h.join(", ")}\u300D\u70BA\u5FC5\u586B\u6216\u5FC5\u9078`);
          return;
        }
        const x = /^(09)[0-9]{8}$/;
        if (!o.phone.match(x)) {
          (b = !1),
            a.error("\u624B\u6A5F\u683C\u5F0F\u932F\u8AA4 ( 09\u958B\u982D10\u4F4D\u6578\u5B57 )");
          return;
        }
        b &&
          !i.value &&
          ((i.value = !0),
          fetch("contact-form.php", { method: "POST", body: g }).then((S) => {
            S.status === 200 && (window.location.href = "formThanks"), (i.value = !1);
          }));
      };
      return (d, u) => (
        K(),
        ie("div", S2, [
          B("div", C2, [
            B("div", O2, [P2, oe(Ua, { class: "hr", "props-color": "255,255,255" }), I2, B2]),
            B("div", M2, [
              B("div", L2, [
                B("label", R2, [
                  B("span", D2, [N2, r.includes("name") ? Pe("", !0) : (K(), ie("span", z2))]),
                  B(
                    "input",
                    {
                      type: "text",
                      placeholder: "",
                      class: "input w-full rounded-none",
                      value: o.name,
                      onInput: u[0] || (u[0] = (f) => (o.name = f.target.value)),
                    },
                    null,
                    40,
                    $2
                  ),
                ]),
                B("label", F2, [
                  B("span", j2, [V2, r.includes("phone") ? Pe("", !0) : (K(), ie("span", Y2))]),
                  B(
                    "input",
                    {
                      type: "text",
                      placeholder: "",
                      class: "input w-full rounded-none",
                      value: o.phone,
                      onInput: u[1] || (u[1] = (f) => (o.phone = f.target.value)),
                    },
                    null,
                    40,
                    H2
                  ),
                ]),
                B("label", U2, [
                  B("span", G2, [
                    W2,
                    r.includes("email") ? Pe("", !0) : (K(), ie("span", K2, "*")),
                  ]),
                  B(
                    "input",
                    {
                      type: "text",
                      placeholder: "",
                      class: "input w-full rounded-none",
                      value: o.email,
                      onInput: u[2] || (u[2] = (f) => (o.email = f.target.value)),
                    },
                    null,
                    40,
                    Q2
                  ),
                ]),
                B("label", X2, [
                  B("span", null, [
                    q2,
                    r.includes("city") ? Pe("", !0) : (K(), ie("span", Z2, "*")),
                  ]),
                  ui(
                    B(
                      "select",
                      {
                        class: "select w-full rounded-none",
                        "onUpdate:modelValue": u[3] || (u[3] = (f) => (o.city = f)),
                      },
                      [
                        (K(!0),
                        ie(
                          ke,
                          null,
                          Ei(
                            ge(Cx),
                            (f) => (
                              K(), ie("option", { value: f.value, key: f }, yt(f.label), 9, J2)
                            )
                          ),
                          128
                        )),
                      ],
                      512
                    ),
                    [[Do, o.city]]
                  ),
                ]),
                B("label", e5, [
                  B("span", null, [
                    t5,
                    r.includes("area") ? Pe("", !0) : (K(), ie("span", n5, "*")),
                  ]),
                  ui(
                    B(
                      "select",
                      {
                        class: "select w-full rounded-none",
                        "onUpdate:modelValue": u[4] || (u[4] = (f) => (o.area = f)),
                      },
                      [
                        (K(!0),
                        ie(
                          ke,
                          null,
                          Ei(
                            s.value,
                            (f) => (
                              K(), ie("option", { value: f.value, key: f }, yt(f.label), 9, a5)
                            )
                          ),
                          128
                        )),
                      ],
                      512
                    ),
                    [[Do, o.area]]
                  ),
                ]),
                B("label", i5, [
                  B(
                    "input",
                    {
                      type: "text",
                      placeholder: "\u8ACB\u8F38\u5165\u60A8\u7684\u7559\u8A00",
                      class: "input w-full rounded-none",
                      value: o.msg,
                      onInput: u[5] || (u[5] = (f) => (o.msg = f.target.value)),
                    },
                    null,
                    40,
                    o5
                  ),
                ]),
              ]),
              ge(n)
                ? Pe("", !0)
                : (K(),
                  ie("div", r5, [
                    B("div", s5, [ge(Ne).address ? (K(), Ye(vd, { key: 0 })) : Pe("", !0)]),
                  ])),
            ]),
            B("div", l5, [
              B("div", c5, [
                ui(
                  B(
                    "input",
                    {
                      type: "checkbox",
                      "onUpdate:modelValue": u[6] || (u[6] = (f) => (o.policyChecked = f)),
                      checked: o.policyChecked,
                      class: "checkbox bg-white rounded-md",
                    },
                    null,
                    8,
                    d5
                  ),
                  [[Yi, o.policyChecked]]
                ),
                u5,
              ]),
              oe(ex),
              B(
                "div",
                { class: "send btn cursor-pointer", onClick: u[7] || (u[7] = (f) => c()) },
                yt(i.value ? "\u767C\u9001\u4E2D.." : "\u7ACB\u5373\u9810\u7D04"),
                1
              ),
            ]),
            ge(n)
              ? (K(), ie("div", f5, [ge(Ne).address ? (K(), Ye(vd, { key: 0 })) : Pe("", !0)]))
              : Pe("", !0),
            oe(xx),
          ]),
          oe(Sx),
        ])
      );
    },
  };
var h5 = "/lixin_ca3/dist/assets/2.1e264f01.svg",
  m5 = "/lixin_ca3/dist/assets/3.d23ba91c.svg",
  g5 = "/lixin_ca3/dist/assets/4.6f692203.svg";
const v5 = { key: 0, class: "nav" },
  b5 = B("img", { src: h5 }, null, -1),
  y5 = [b5],
  w5 = B("img", { src: m5 }, null, -1),
  _5 = [w5],
  x5 = B("img", { src: g5 }, null, -1),
  A5 = [x5],
  E5 = {
    __name: "navbar",
    setup(e) {
      const t = Ge().appContext.config.globalProperties,
        n = Oe(() => t.$isMobile()),
        a = me(!1),
        i = me(""),
        o = Fe("smoothScroll"),
        r = (c, d) => {
          const u = document.querySelector(c);
          if (u) {
            const f = parseInt(d) ? parseInt(d) : 0,
              v = u.getBoundingClientRect(),
              m = window.pageYOffset + v.top + f;
            o({ scrollTo: m });
          }
        },
        l = (c, d) => {
          switch (c + 1) {
            case 1:
              (a.value = !0), (i.value = "gmap");
              break;
            case 2:
              (a.value = !0), (i.value = "phone");
              break;
            case 3:
              window.open(Ne.fbLink);
              break;
            case 4:
              r(d.target);
              break;
          }
        },
        s = () => {
          (a.value = !1), (i.value = null);
        };
      return (c, d) => (
        K(),
        ie(
          ke,
          null,
          [
            ge(n)
              ? Pe("", !0)
              : (K(),
                ie("ul", v5, [
                  B("li", { onClick: d[0] || (d[0] = (u) => l(1, ge(Ne).navList[1])) }, y5),
                  B("li", { onClick: d[1] || (d[1] = (u) => l(2, ge(Ne).navList[2])) }, _5),
                  B("li", { onClick: d[2] || (d[2] = (u) => l(3, ge(Ne).navList[3])) }, A5),
                ])),
            oe(xp, { open: a.value, type: i.value, onInit: s }, null, 8, ["open", "type"]),
          ],
          64
        )
      );
    },
  };
var Wt =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function Cl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Yp(e) {
  if (e.__esModule) return e;
  var t = Object.defineProperty({}, "__esModule", { value: !0 });
  return (
    Object.keys(e).forEach(function (n) {
      var a = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        t,
        n,
        a.get
          ? a
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }
      );
    }),
    t
  );
}
var Hp = { exports: {} };
(function (e, t) {
  (function (n, a) {
    e.exports = a();
  })(Wt, function () {
    return (function (n) {
      function a(o) {
        if (i[o]) return i[o].exports;
        var r = (i[o] = { exports: {}, id: o, loaded: !1 });
        return n[o].call(r.exports, r, r.exports, a), (r.loaded = !0), r.exports;
      }
      var i = {};
      return (a.m = n), (a.c = i), (a.p = "dist/"), a(0);
    })([
      function (n, a, i) {
        function o(O) {
          return O && O.__esModule ? O : { default: O };
        }
        var r =
            Object.assign ||
            function (O) {
              for (var Q = 1; Q < arguments.length; Q++) {
                var $ = arguments[Q];
                for (var ee in $) Object.prototype.hasOwnProperty.call($, ee) && (O[ee] = $[ee]);
              }
              return O;
            },
          l = i(1),
          s = (o(l), i(6)),
          c = o(s),
          d = i(7),
          u = o(d),
          f = i(8),
          v = o(f),
          m = i(9),
          p = o(m),
          g = i(10),
          b = o(g),
          h = i(11),
          w = o(h),
          x = i(14),
          S = o(x),
          _ = [],
          C = !1,
          T = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          L = function () {
            var O = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if ((O && (C = !0), C)) return (_ = (0, w.default)(_, T)), (0, b.default)(_, T.once), _;
          },
          P = function () {
            (_ = (0, S.default)()), L();
          },
          k = function () {
            _.forEach(function (O, Q) {
              O.node.removeAttribute("data-aos"),
                O.node.removeAttribute("data-aos-easing"),
                O.node.removeAttribute("data-aos-duration"),
                O.node.removeAttribute("data-aos-delay");
            });
          },
          A = function (O) {
            return (
              O === !0 ||
              (O === "mobile" && p.default.mobile()) ||
              (O === "phone" && p.default.phone()) ||
              (O === "tablet" && p.default.tablet()) ||
              (typeof O == "function" && O() === !0)
            );
          },
          R = function (O) {
            (T = r(T, O)), (_ = (0, S.default)());
            var Q = document.all && !window.atob;
            return A(T.disable) || Q
              ? k()
              : (T.disableMutationObserver ||
                  v.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (T.disableMutationObserver = !0)),
                document.querySelector("body").setAttribute("data-aos-easing", T.easing),
                document.querySelector("body").setAttribute("data-aos-duration", T.duration),
                document.querySelector("body").setAttribute("data-aos-delay", T.delay),
                T.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? L(!0)
                  : T.startEvent === "load"
                  ? window.addEventListener(T.startEvent, function () {
                      L(!0);
                    })
                  : document.addEventListener(T.startEvent, function () {
                      L(!0);
                    }),
                window.addEventListener("resize", (0, u.default)(L, T.debounceDelay, !0)),
                window.addEventListener(
                  "orientationchange",
                  (0, u.default)(L, T.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, c.default)(function () {
                    (0, b.default)(_, T.once);
                  }, T.throttleDelay)
                ),
                T.disableMutationObserver || v.default.ready("[data-aos]", P),
                _);
          };
        n.exports = { init: R, refresh: L, refreshHard: P };
      },
      function (n, a) {},
      ,
      ,
      ,
      ,
      function (n, a) {
        (function (i) {
          function o(A, R, O) {
            function Q(E) {
              var I = ve,
                N = M;
              return (ve = M = void 0), (be = E), (F = A.apply(N, I));
            }
            function $(E) {
              return (be = E), (W = setTimeout(he, R)), ce ? Q(E) : F;
            }
            function ee(E) {
              var I = E - fe,
                N = E - be,
                z = R - I;
              return re ? P(z, Y - N) : z;
            }
            function ae(E) {
              var I = E - fe,
                N = E - be;
              return fe === void 0 || I >= R || I < 0 || (re && N >= Y);
            }
            function he() {
              var E = k();
              return ae(E) ? j(E) : void (W = setTimeout(he, ee(E)));
            }
            function j(E) {
              return (W = void 0), y && ve ? Q(E) : ((ve = M = void 0), F);
            }
            function J() {
              W !== void 0 && clearTimeout(W), (be = 0), (ve = fe = M = W = void 0);
            }
            function D() {
              return W === void 0 ? F : j(k());
            }
            function q() {
              var E = k(),
                I = ae(E);
              if (((ve = arguments), (M = this), (fe = E), I)) {
                if (W === void 0) return $(fe);
                if (re) return (W = setTimeout(he, R)), Q(fe);
              }
              return W === void 0 && (W = setTimeout(he, R)), F;
            }
            var ve,
              M,
              Y,
              F,
              W,
              fe,
              be = 0,
              ce = !1,
              re = !1,
              y = !0;
            if (typeof A != "function") throw new TypeError(f);
            return (
              (R = d(R) || 0),
              l(O) &&
                ((ce = !!O.leading),
                (re = "maxWait" in O),
                (Y = re ? L(d(O.maxWait) || 0, R) : Y),
                (y = "trailing" in O ? !!O.trailing : y)),
              (q.cancel = J),
              (q.flush = D),
              q
            );
          }
          function r(A, R, O) {
            var Q = !0,
              $ = !0;
            if (typeof A != "function") throw new TypeError(f);
            return (
              l(O) &&
                ((Q = "leading" in O ? !!O.leading : Q), ($ = "trailing" in O ? !!O.trailing : $)),
              o(A, R, { leading: Q, maxWait: R, trailing: $ })
            );
          }
          function l(A) {
            var R = typeof A == "undefined" ? "undefined" : u(A);
            return !!A && (R == "object" || R == "function");
          }
          function s(A) {
            return !!A && (typeof A == "undefined" ? "undefined" : u(A)) == "object";
          }
          function c(A) {
            return (
              (typeof A == "undefined" ? "undefined" : u(A)) == "symbol" || (s(A) && T.call(A) == m)
            );
          }
          function d(A) {
            if (typeof A == "number") return A;
            if (c(A)) return v;
            if (l(A)) {
              var R = typeof A.valueOf == "function" ? A.valueOf() : A;
              A = l(R) ? R + "" : R;
            }
            if (typeof A != "string") return A === 0 ? A : +A;
            A = A.replace(p, "");
            var O = b.test(A);
            return O || h.test(A) ? w(A.slice(2), O ? 2 : 8) : g.test(A) ? v : +A;
          }
          var u =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (A) {
                    return typeof A;
                  }
                : function (A) {
                    return A &&
                      typeof Symbol == "function" &&
                      A.constructor === Symbol &&
                      A !== Symbol.prototype
                      ? "symbol"
                      : typeof A;
                  },
            f = "Expected a function",
            v = NaN,
            m = "[object Symbol]",
            p = /^\s+|\s+$/g,
            g = /^[-+]0x[0-9a-f]+$/i,
            b = /^0b[01]+$/i,
            h = /^0o[0-7]+$/i,
            w = parseInt,
            x =
              (typeof i == "undefined" ? "undefined" : u(i)) == "object" &&
              i &&
              i.Object === Object &&
              i,
            S =
              (typeof self == "undefined" ? "undefined" : u(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            _ = x || S || Function("return this")(),
            C = Object.prototype,
            T = C.toString,
            L = Math.max,
            P = Math.min,
            k = function () {
              return _.Date.now();
            };
          n.exports = r;
        }).call(
          a,
          (function () {
            return this;
          })()
        );
      },
      function (n, a) {
        (function (i) {
          function o(k, A, R) {
            function O(y) {
              var E = q,
                I = ve;
              return (q = ve = void 0), (fe = y), (Y = k.apply(I, E));
            }
            function Q(y) {
              return (fe = y), (F = setTimeout(ae, A)), be ? O(y) : Y;
            }
            function $(y) {
              var E = y - W,
                I = y - fe,
                N = A - E;
              return ce ? L(N, M - I) : N;
            }
            function ee(y) {
              var E = y - W,
                I = y - fe;
              return W === void 0 || E >= A || E < 0 || (ce && I >= M);
            }
            function ae() {
              var y = P();
              return ee(y) ? he(y) : void (F = setTimeout(ae, $(y)));
            }
            function he(y) {
              return (F = void 0), re && q ? O(y) : ((q = ve = void 0), Y);
            }
            function j() {
              F !== void 0 && clearTimeout(F), (fe = 0), (q = W = ve = F = void 0);
            }
            function J() {
              return F === void 0 ? Y : he(P());
            }
            function D() {
              var y = P(),
                E = ee(y);
              if (((q = arguments), (ve = this), (W = y), E)) {
                if (F === void 0) return Q(W);
                if (ce) return (F = setTimeout(ae, A)), O(W);
              }
              return F === void 0 && (F = setTimeout(ae, A)), Y;
            }
            var q,
              ve,
              M,
              Y,
              F,
              W,
              fe = 0,
              be = !1,
              ce = !1,
              re = !0;
            if (typeof k != "function") throw new TypeError(u);
            return (
              (A = c(A) || 0),
              r(R) &&
                ((be = !!R.leading),
                (ce = "maxWait" in R),
                (M = ce ? T(c(R.maxWait) || 0, A) : M),
                (re = "trailing" in R ? !!R.trailing : re)),
              (D.cancel = j),
              (D.flush = J),
              D
            );
          }
          function r(k) {
            var A = typeof k == "undefined" ? "undefined" : d(k);
            return !!k && (A == "object" || A == "function");
          }
          function l(k) {
            return !!k && (typeof k == "undefined" ? "undefined" : d(k)) == "object";
          }
          function s(k) {
            return (
              (typeof k == "undefined" ? "undefined" : d(k)) == "symbol" || (l(k) && C.call(k) == v)
            );
          }
          function c(k) {
            if (typeof k == "number") return k;
            if (s(k)) return f;
            if (r(k)) {
              var A = typeof k.valueOf == "function" ? k.valueOf() : k;
              k = r(A) ? A + "" : A;
            }
            if (typeof k != "string") return k === 0 ? k : +k;
            k = k.replace(m, "");
            var R = g.test(k);
            return R || b.test(k) ? h(k.slice(2), R ? 2 : 8) : p.test(k) ? f : +k;
          }
          var d =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (k) {
                    return typeof k;
                  }
                : function (k) {
                    return k &&
                      typeof Symbol == "function" &&
                      k.constructor === Symbol &&
                      k !== Symbol.prototype
                      ? "symbol"
                      : typeof k;
                  },
            u = "Expected a function",
            f = NaN,
            v = "[object Symbol]",
            m = /^\s+|\s+$/g,
            p = /^[-+]0x[0-9a-f]+$/i,
            g = /^0b[01]+$/i,
            b = /^0o[0-7]+$/i,
            h = parseInt,
            w =
              (typeof i == "undefined" ? "undefined" : d(i)) == "object" &&
              i &&
              i.Object === Object &&
              i,
            x =
              (typeof self == "undefined" ? "undefined" : d(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            S = w || x || Function("return this")(),
            _ = Object.prototype,
            C = _.toString,
            T = Math.max,
            L = Math.min,
            P = function () {
              return S.Date.now();
            };
          n.exports = o;
        }).call(
          a,
          (function () {
            return this;
          })()
        );
      },
      function (n, a) {
        function i(d) {
          var u = void 0,
            f = void 0;
          for (u = 0; u < d.length; u += 1)
            if (((f = d[u]), (f.dataset && f.dataset.aos) || (f.children && i(f.children))))
              return !0;
          return !1;
        }
        function o() {
          return (
            window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
          );
        }
        function r() {
          return !!o();
        }
        function l(d, u) {
          var f = window.document,
            v = o(),
            m = new v(s);
          (c = u), m.observe(f.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
        }
        function s(d) {
          d &&
            d.forEach(function (u) {
              var f = Array.prototype.slice.call(u.addedNodes),
                v = Array.prototype.slice.call(u.removedNodes),
                m = f.concat(v);
              if (i(m)) return c();
            });
        }
        Object.defineProperty(a, "__esModule", { value: !0 });
        var c = function () {};
        a.default = { isSupported: r, ready: l };
      },
      function (n, a) {
        function i(f, v) {
          if (!(f instanceof v)) throw new TypeError("Cannot call a class as a function");
        }
        function o() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(a, "__esModule", { value: !0 });
        var r = (function () {
            function f(v, m) {
              for (var p = 0; p < m.length; p++) {
                var g = m[p];
                (g.enumerable = g.enumerable || !1),
                  (g.configurable = !0),
                  "value" in g && (g.writable = !0),
                  Object.defineProperty(v, g.key, g);
              }
            }
            return function (v, m, p) {
              return m && f(v.prototype, m), p && f(v, p), v;
            };
          })(),
          l =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          s =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          c =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          d =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          u = (function () {
            function f() {
              i(this, f);
            }
            return (
              r(f, [
                {
                  key: "phone",
                  value: function () {
                    var v = o();
                    return !(!l.test(v) && !s.test(v.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var v = o();
                    return !(!c.test(v) && !d.test(v.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              f
            );
          })();
        a.default = new u();
      },
      function (n, a) {
        Object.defineProperty(a, "__esModule", { value: !0 });
        var i = function (r, l, s) {
            var c = r.node.getAttribute("data-aos-once");
            l > r.position
              ? r.node.classList.add("aos-animate")
              : typeof c != "undefined" &&
                (c === "false" || (!s && c !== "true")) &&
                r.node.classList.remove("aos-animate");
          },
          o = function (r, l) {
            var s = window.pageYOffset,
              c = window.innerHeight;
            r.forEach(function (d, u) {
              i(d, c + s, l);
            });
          };
        a.default = o;
      },
      function (n, a, i) {
        function o(c) {
          return c && c.__esModule ? c : { default: c };
        }
        Object.defineProperty(a, "__esModule", { value: !0 });
        var r = i(12),
          l = o(r),
          s = function (c, d) {
            return (
              c.forEach(function (u, f) {
                u.node.classList.add("aos-init"), (u.position = (0, l.default)(u.node, d.offset));
              }),
              c
            );
          };
        a.default = s;
      },
      function (n, a, i) {
        function o(c) {
          return c && c.__esModule ? c : { default: c };
        }
        Object.defineProperty(a, "__esModule", { value: !0 });
        var r = i(13),
          l = o(r),
          s = function (c, d) {
            var u = 0,
              f = 0,
              v = window.innerHeight,
              m = {
                offset: c.getAttribute("data-aos-offset"),
                anchor: c.getAttribute("data-aos-anchor"),
                anchorPlacement: c.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (m.offset && !isNaN(m.offset) && (f = parseInt(m.offset)),
              m.anchor &&
                document.querySelectorAll(m.anchor) &&
                (c = document.querySelectorAll(m.anchor)[0]),
              (u = (0, l.default)(c).top),
              m.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                u += c.offsetHeight / 2;
                break;
              case "bottom-bottom":
                u += c.offsetHeight;
                break;
              case "top-center":
                u += v / 2;
                break;
              case "bottom-center":
                u += v / 2 + c.offsetHeight;
                break;
              case "center-center":
                u += v / 2 + c.offsetHeight / 2;
                break;
              case "top-top":
                u += v;
                break;
              case "bottom-top":
                u += c.offsetHeight + v;
                break;
              case "center-top":
                u += c.offsetHeight / 2 + v;
            }
            return m.anchorPlacement || m.offset || isNaN(d) || (f = d), u + f;
          };
        a.default = s;
      },
      function (n, a) {
        Object.defineProperty(a, "__esModule", { value: !0 });
        var i = function (o) {
          for (var r = 0, l = 0; o && !isNaN(o.offsetLeft) && !isNaN(o.offsetTop); )
            (r += o.offsetLeft - (o.tagName != "BODY" ? o.scrollLeft : 0)),
              (l += o.offsetTop - (o.tagName != "BODY" ? o.scrollTop : 0)),
              (o = o.offsetParent);
          return { top: l, left: r };
        };
        a.default = i;
      },
      function (n, a) {
        Object.defineProperty(a, "__esModule", { value: !0 });
        var i = function (o) {
          return (
            (o = o || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(o, function (r) {
              return { node: r };
            })
          );
        };
        a.default = i;
      },
    ]);
  });
})(Hp);
var T5 = Cl(Hp.exports);
const k5 = B(
    "img",
    { class: "w-32", src: "//h65.tw/img/loading_w.gif", alt: "loading", srcset: "" },
    null,
    -1
  ),
  S5 = [k5],
  C5 = { class: "home overflow-hidden font-['Noto_Sans_TC',sans-serif]" },
  O5 = {
    __name: "Home",
    setup(e) {
      const t = me(!0),
        n = me("");
      return (
        at(() => {
          window.onload = function () {
            (t.value = !1), T5.init({ offset: 0, duration: 1500 });
          };
        }),
        (a, i) => (
          K(),
          ie(
            ke,
            null,
            [
              B("div", { ref_key: "gtmNoScript", ref: n }, null, 512),
              B(
                "div",
                {
                  class: mt([
                    { "opacity-0": !t.value, "pointer-events-none": !t.value },
                    "transition-all duration-500 flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]",
                  ]),
                },
                S5,
                2
              ),
              ge(Ne).navList.length > 0 ? (K(), Ye(E5, { key: 0 })) : Pe("", !0),
              B("div", C5, [
                oe(lb),
                oe(Ab),
                oe(Db),
                oe(Oy),
                oe(Qw),
                oe(y_),
                oe(k_),
                oe(M_),
                oe(H_),
                oe(p5),
              ]),
            ],
            64
          )
        )
      );
    },
  },
  P5 = [
    { path: "/", name: "Home", component: O5 },
    {
      path: "/formThanks",
      name: "formThanks",
      component: () =>
        so(
          () => import("./FormThanks.6d1b1733.js"),
          ["assets/FormThanks.6d1b1733.js", "assets/FormThanks.47c2e792.css"]
        ),
    },
    {
      path: "/phoneThanks",
      name: "phoneThanks",
      component: () =>
        so(
          () => import("./PhoneThanks.e5ba58c2.js"),
          ["assets/PhoneThanks.e5ba58c2.js", "assets/PhoneThanks.de821098.css"]
        ),
    },
    {
      name: "404",
      path: "/404",
      component: () =>
        so(
          () => import("./404.8683db0a.js"),
          ["assets/404.8683db0a.js", "assets/404.480c6317.css"]
        ),
    },
    {
      name: "404",
      path: "/404",
      component: () =>
        so(
          () => import("./404.8683db0a.js"),
          ["assets/404.8683db0a.js", "assets/404.480c6317.css"]
        ),
    },
    { path: "/:catchAll(.*)", redirect: "/404" },
  ],
  Ed = Qf({ history: wl(), routes: P5 });
var Up = { exports: {} };
(function (e, t) {
  (function (n, a) {
    e.exports = a();
  })(typeof self != "undefined" ? self : Wt, function () {
    return (function (n) {
      var a = {};
      function i(o) {
        if (a[o]) return a[o].exports;
        var r = (a[o] = { i: o, l: !1, exports: {} });
        return n[o].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
      }
      return (
        (i.m = n),
        (i.c = a),
        (i.d = function (o, r, l) {
          i.o(o, r) || Object.defineProperty(o, r, { enumerable: !0, get: l });
        }),
        (i.r = function (o) {
          typeof Symbol != "undefined" &&
            Symbol.toStringTag &&
            Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(o, "__esModule", { value: !0 });
        }),
        (i.t = function (o, r) {
          if ((1 & r && (o = i(o)), 8 & r || (4 & r && typeof o == "object" && o && o.__esModule)))
            return o;
          var l = Object.create(null);
          if (
            (i.r(l),
            Object.defineProperty(l, "default", { enumerable: !0, value: o }),
            2 & r && typeof o != "string")
          )
            for (var s in o)
              i.d(
                l,
                s,
                function (c) {
                  return o[c];
                }.bind(null, s)
              );
          return l;
        }),
        (i.n = function (o) {
          var r =
            o && o.__esModule
              ? function () {
                  return o.default;
                }
              : function () {
                  return o;
                };
          return i.d(r, "a", r), r;
        }),
        (i.o = function (o, r) {
          return Object.prototype.hasOwnProperty.call(o, r);
        }),
        (i.p = ""),
        i((i.s = "fb15"))
      );
    })({
      8875: function (n, a, i) {
        var o, r, l;
        (function (s, c) {
          (r = []),
            (o = c),
            (l = typeof o == "function" ? o.apply(a, r) : o),
            l === void 0 || (n.exports = l);
        })(typeof self != "undefined" && self, function () {
          function s() {
            var c = Object.getOwnPropertyDescriptor(document, "currentScript");
            if (
              (!c && "currentScript" in document && document.currentScript) ||
              (c && c.get !== s && document.currentScript)
            )
              return document.currentScript;
            try {
              throw new Error();
            } catch (S) {
              var d,
                u,
                f,
                v = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
                m = /@([^@]*):(\d+):(\d+)\s*$/gi,
                p = v.exec(S.stack) || m.exec(S.stack),
                g = (p && p[1]) || !1,
                b = (p && p[2]) || !1,
                h = document.location.href.replace(document.location.hash, ""),
                w = document.getElementsByTagName("script");
              g === h &&
                ((d = document.documentElement.outerHTML),
                (u = new RegExp(
                  "(?:[^\\n]+?\\n){0," + (b - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                  "i"
                )),
                (f = d.replace(u, "$1").trim()));
              for (var x = 0; x < w.length; x++)
                if (
                  w[x].readyState === "interactive" ||
                  w[x].src === g ||
                  (g === h && w[x].innerHTML && w[x].innerHTML.trim() === f)
                )
                  return w[x];
              return null;
            }
          }
          return s;
        });
      },
      fb15: function (n, a, i) {
        if ((i.r(a), typeof window != "undefined")) {
          var o = window.document.currentScript,
            r = i("8875");
          (o = r()),
            "currentScript" in document ||
              Object.defineProperty(document, "currentScript", { get: r });
          var l = o && o.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          l && (i.p = l[1]);
        }
        function s() {
          var d = !1;
          return (
            (function (u) {
              (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                u
              ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                  u.substr(0, 4)
                )) &&
                (d = !0);
            })(navigator.userAgent || navigator.vendor || window.opera),
            d
          );
        }
        var c = {
          install: function (d) {
            d.config.globalProperties.$isMobile = s;
          },
        };
        a.default = c;
      },
    });
  });
})(Up);
var I5 = Cl(Up.exports);
function Td(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function B5(e, t, n) {
  return (
    t && Td(e.prototype, t),
    n && Td(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
/*!
 * Splide.js
 * Version  : 4.0.7
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ var kd = "(prefers-reduced-motion: reduce)",
  xa = 1,
  M5 = 2,
  ja = 3,
  Wa = 4,
  Wi = 5,
  xo = 6,
  Vo = 7,
  L5 = {
    CREATED: xa,
    MOUNTED: M5,
    IDLE: ja,
    MOVING: Wa,
    SCROLLING: Wi,
    DRAGGING: xo,
    DESTROYED: Vo,
  };
function tn(e) {
  e.length = 0;
}
function Rn(e, t, n) {
  return Array.prototype.slice.call(e, t, n);
}
function Ce(e) {
  return e.bind.apply(e, [null].concat(Rn(arguments, 1)));
}
var Ms = setTimeout,
  Ls = function () {};
function Sd(e) {
  return requestAnimationFrame(e);
}
function vr(e, t) {
  return typeof t === e;
}
function Oi(e) {
  return !Pl(e) && vr("object", e);
}
var Ol = Array.isArray,
  Gp = Ce(vr, "function"),
  Mn = Ce(vr, "string"),
  br = Ce(vr, "undefined");
function Pl(e) {
  return e === null;
}
function Wp(e) {
  return e instanceof HTMLElement;
}
function Ka(e) {
  return Ol(e) ? e : [e];
}
function Ot(e, t) {
  Ka(e).forEach(t);
}
function Il(e, t) {
  return e.indexOf(t) > -1;
}
function Ao(e, t) {
  return e.push.apply(e, Ka(t)), e;
}
function wn(e, t, n) {
  e &&
    Ot(t, function (a) {
      a && e.classList[n ? "add" : "remove"](a);
    });
}
function Ft(e, t) {
  wn(e, Mn(t) ? t.split(" ") : t, !0);
}
function Ki(e, t) {
  Ot(t, e.appendChild.bind(e));
}
function Bl(e, t) {
  Ot(e, function (n) {
    var a = (t || n).parentNode;
    a && a.insertBefore(n, t);
  });
}
function Pi(e, t) {
  return Wp(e) && (e.msMatchesSelector || e.matches).call(e, t);
}
function Kp(e, t) {
  var n = e ? Rn(e.children) : [];
  return t
    ? n.filter(function (a) {
        return Pi(a, t);
      })
    : n;
}
function Qi(e, t) {
  return t ? Kp(e, t)[0] : e.firstElementChild;
}
var Yo = Object.keys;
function qn(e, t, n) {
  if (e) {
    var a = Yo(e);
    a = n ? a.reverse() : a;
    for (var i = 0; i < a.length; i++) {
      var o = a[i];
      if (o !== "__proto__" && t(e[o], o) === !1) break;
    }
  }
  return e;
}
function Ii(e) {
  return (
    Rn(arguments, 1).forEach(function (t) {
      qn(t, function (n, a) {
        e[a] = t[a];
      });
    }),
    e
  );
}
function _n(e) {
  return (
    Rn(arguments, 1).forEach(function (t) {
      qn(t, function (n, a) {
        Ol(n) ? (e[a] = n.slice()) : Oi(n) ? (e[a] = _n({}, Oi(e[a]) ? e[a] : {}, n)) : (e[a] = n);
      });
    }),
    e
  );
}
function Cd(e, t) {
  Ka(t || Yo(e)).forEach(function (n) {
    delete e[n];
  });
}
function jt(e, t) {
  Ot(e, function (n) {
    Ot(t, function (a) {
      n && n.removeAttribute(a);
    });
  });
}
function pe(e, t, n) {
  Oi(t)
    ? qn(t, function (a, i) {
        pe(e, i, a);
      })
    : Ot(e, function (a) {
        Pl(n) || n === "" ? jt(a, t) : a.setAttribute(t, String(n));
      });
}
function Ca(e, t, n) {
  var a = document.createElement(e);
  return t && (Mn(t) ? Ft(a, t) : pe(a, t)), n && Ki(n, a), a;
}
function ct(e, t, n) {
  if (br(n)) return getComputedStyle(e)[t];
  Pl(n) || (e.style[t] = "" + n);
}
function Ho(e, t) {
  ct(e, "display", t);
}
function Qp(e) {
  (e.setActive && e.setActive()) || e.focus({ preventScroll: !0 });
}
function kt(e, t) {
  return e.getAttribute(t);
}
function Od(e, t) {
  return e && e.classList.contains(t);
}
function dt(e) {
  return e.getBoundingClientRect();
}
function na(e) {
  Ot(e, function (t) {
    t && t.parentNode && t.parentNode.removeChild(t);
  });
}
function Xp(e) {
  return Qi(new DOMParser().parseFromString(e, "text/html").body);
}
function Kt(e, t) {
  e.preventDefault(), t && (e.stopPropagation(), e.stopImmediatePropagation());
}
function qp(e, t) {
  return e && e.querySelector(t);
}
function Ml(e, t) {
  return t ? Rn(e.querySelectorAll(t)) : [];
}
function qt(e, t) {
  wn(e, t, !1);
}
function Rs(e) {
  return e.timeStamp;
}
function hn(e) {
  return Mn(e) ? e : e ? e + "px" : "";
}
var it = "splide",
  Ll = "data-" + it;
function vi(e, t) {
  if (!e) throw new Error("[" + it + "] " + (t || ""));
}
var Va = Math.min,
  Bi = Math.max,
  Uo = Math.floor,
  Mi = Math.ceil,
  nt = Math.abs;
function Zp(e, t, n) {
  return nt(e - t) < n;
}
function Eo(e, t, n, a) {
  var i = Va(t, n),
    o = Bi(t, n);
  return a ? i < e && e < o : i <= e && e <= o;
}
function ii(e, t, n) {
  var a = Va(t, n),
    i = Bi(t, n);
  return Va(Bi(a, e), i);
}
function Ds(e) {
  return +(e > 0) - +(e < 0);
}
function Ns(e, t) {
  return (
    Ot(t, function (n) {
      e = e.replace("%s", "" + n);
    }),
    e
  );
}
function Rl(e) {
  return e < 10 ? "0" + e : "" + e;
}
var Pd = {};
function R5(e) {
  return "" + e + Rl((Pd[e] = (Pd[e] || 0) + 1));
}
function Jp() {
  var e = [];
  function t(r, l, s, c) {
    i(r, l, function (d, u, f) {
      var v = "addEventListener" in d,
        m = v ? d.removeEventListener.bind(d, u, s, c) : d.removeListener.bind(d, s);
      v ? d.addEventListener(u, s, c) : d.addListener(s), e.push([d, u, f, s, m]);
    });
  }
  function n(r, l, s) {
    i(r, l, function (c, d, u) {
      e = e.filter(function (f) {
        return f[0] === c && f[1] === d && f[2] === u && (!s || f[3] === s) ? (f[4](), !1) : !0;
      });
    });
  }
  function a(r, l, s) {
    var c,
      d = !0;
    return (
      typeof CustomEvent == "function"
        ? (c = new CustomEvent(l, { bubbles: d, detail: s }))
        : ((c = document.createEvent("CustomEvent")), c.initCustomEvent(l, d, !1, s)),
      r.dispatchEvent(c),
      c
    );
  }
  function i(r, l, s) {
    Ot(r, function (c) {
      c &&
        Ot(l, function (d) {
          d.split(" ").forEach(function (u) {
            var f = u.split(".");
            s(c, f[0], f[1]);
          });
        });
    });
  }
  function o() {
    e.forEach(function (r) {
      r[4]();
    }),
      tn(e);
  }
  return { bind: t, unbind: n, dispatch: a, destroy: o };
}
var ln = "mounted",
  Id = "ready",
  nn = "move",
  Qa = "moved",
  eh = "shifted",
  Dl = "click",
  th = "active",
  nh = "inactive",
  ah = "visible",
  ih = "hidden",
  oh = "slide:keydown",
  Ie = "refresh",
  Je = "updated",
  aa = "resize",
  Nl = "resized",
  rh = "drag",
  sh = "dragging",
  lh = "dragged",
  yr = "scroll",
  ha = "scrolled",
  zl = "destroy",
  ch = "arrows:mounted",
  dh = "arrows:updated",
  uh = "pagination:mounted",
  fh = "pagination:updated",
  $l = "navigation:mounted",
  Fl = "autoplay:play",
  ph = "autoplay:playing",
  jl = "autoplay:pause",
  Vl = "lazyload:loaded";
function Me(e) {
  var t = e ? e.event.bus : document.createDocumentFragment(),
    n = Jp();
  function a(o, r) {
    n.bind(t, Ka(o).join(" "), function (l) {
      r.apply(r, Ol(l.detail) ? l.detail : []);
    });
  }
  function i(o) {
    n.dispatch(t, o, Rn(arguments, 1));
  }
  return e && e.event.on(zl, n.destroy), Ii(n, { bus: t, on: a, off: Ce(n.unbind, t), emit: i });
}
function wr(e, t, n, a) {
  var i = Date.now,
    o,
    r = 0,
    l,
    s = !0,
    c = 0;
  function d() {
    if (!s) {
      if (
        ((r = e ? Va((i() - o) / e, 1) : 1), n && n(r), r >= 1 && (t(), (o = i()), a && ++c >= a))
      )
        return f();
      Sd(d);
    }
  }
  function u(b) {
    !b && m(), (o = i() - (b ? r * e : 0)), (s = !1), Sd(d);
  }
  function f() {
    s = !0;
  }
  function v() {
    (o = i()), (r = 0), n && n(r);
  }
  function m() {
    l && cancelAnimationFrame(l), (r = 0), (l = 0), (s = !0);
  }
  function p(b) {
    e = b;
  }
  function g() {
    return s;
  }
  return { start: u, rewind: v, pause: f, cancel: m, set: p, isPaused: g };
}
function D5(e) {
  var t = e;
  function n(i) {
    t = i;
  }
  function a(i) {
    return Il(Ka(i), t);
  }
  return { set: n, is: a };
}
function N5(e, t) {
  var n;
  function a() {
    n ||
      ((n = wr(
        t || 0,
        function () {
          e(), (n = null);
        },
        null,
        1
      )),
      n.start());
  }
  return a;
}
function z5(e, t, n) {
  var a = e.state,
    i = n.breakpoints || {},
    o = n.reducedMotion || {},
    r = Jp(),
    l = [];
  function s() {
    var m = n.mediaQuery === "min";
    Yo(i)
      .sort(function (p, g) {
        return m ? +p - +g : +g - +p;
      })
      .forEach(function (p) {
        d(i[p], "(" + (m ? "min" : "max") + "-width:" + p + "px)");
      }),
      d(o, kd),
      u();
  }
  function c(m) {
    m && r.destroy();
  }
  function d(m, p) {
    var g = matchMedia(p);
    r.bind(g, "change", u), l.push([m, g]);
  }
  function u() {
    var m = a.is(Vo),
      p = n.direction,
      g = l.reduce(function (b, h) {
        return _n(b, h[1].matches ? h[0] : {});
      }, {});
    Cd(n),
      v(g),
      n.destroy
        ? e.destroy(n.destroy === "completely")
        : m
        ? (c(!0), e.mount())
        : p !== n.direction && e.refresh();
  }
  function f(m) {
    matchMedia(kd).matches && (m ? _n(n, o) : Cd(n, Yo(o)));
  }
  function v(m, p) {
    _n(n, m), p && _n(Object.getPrototypeOf(n), m), a.is(xa) || e.emit(Je, n);
  }
  return { setup: s, destroy: c, reduce: f, set: v };
}
var _r = "Arrow",
  xr = _r + "Left",
  Ar = _r + "Right",
  hh = _r + "Up",
  mh = _r + "Down",
  Bd = "rtl",
  Er = "ttb",
  Xr = {
    width: ["height"],
    left: ["top", "right"],
    right: ["bottom", "left"],
    x: ["y"],
    X: ["Y"],
    Y: ["X"],
    ArrowLeft: [hh, Ar],
    ArrowRight: [mh, xr],
  };
function $5(e, t, n) {
  function a(o, r, l) {
    l = l || n.direction;
    var s = l === Bd && !r ? 1 : l === Er ? 0 : -1;
    return (
      (Xr[o] && Xr[o][s]) ||
      o.replace(/width|left|right/i, function (c, d) {
        var u = Xr[c.toLowerCase()][s] || c;
        return d > 0 ? u.charAt(0).toUpperCase() + u.slice(1) : u;
      })
    );
  }
  function i(o) {
    return o * (n.direction === Bd ? 1 : -1);
  }
  return { resolve: a, orient: i };
}
var Jt = "role",
  Oa = "tabindex",
  F5 = "disabled",
  Pt = "aria-",
  Xi = Pt + "controls",
  gh = Pt + "current",
  Md = Pt + "selected",
  wt = Pt + "label",
  Yl = Pt + "labelledby",
  vh = Pt + "hidden",
  Hl = Pt + "orientation",
  Li = Pt + "roledescription",
  Ld = Pt + "live",
  Rd = Pt + "busy",
  Dd = Pt + "atomic",
  Ul = [Jt, Oa, F5, Xi, gh, wt, Yl, vh, Hl, Li],
  qr = it,
  Nd = it + "__track",
  j5 = it + "__list",
  Tr = it + "__slide",
  bh = Tr + "--clone",
  V5 = Tr + "__container",
  Gl = it + "__arrows",
  kr = it + "__arrow",
  yh = kr + "--prev",
  wh = kr + "--next",
  Sr = it + "__pagination",
  _h = Sr + "__page",
  Y5 = it + "__progress",
  H5 = Y5 + "__bar",
  U5 = it + "__toggle",
  G5 = it + "__spinner",
  W5 = it + "__sr",
  K5 = "is-initialized",
  ia = "is-active",
  xh = "is-prev",
  Ah = "is-next",
  zs = "is-visible",
  $s = "is-loading",
  Eh = "is-focus-in",
  Q5 = [ia, zs, xh, Ah, $s, Eh],
  X5 = {
    slide: Tr,
    clone: bh,
    arrows: Gl,
    arrow: kr,
    prev: yh,
    next: wh,
    pagination: Sr,
    page: _h,
    spinner: G5,
  };
function q5(e, t) {
  if (Gp(e.closest)) return e.closest(t);
  for (var n = e; n && n.nodeType === 1 && !Pi(n, t); ) n = n.parentElement;
  return n;
}
var Z5 = 5,
  zd = 200,
  Th = "touchstart mousedown",
  Zr = "touchmove mousemove",
  Jr = "touchend touchcancel mouseup click";
function J5(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.bind,
    r = e.root,
    l = n.i18n,
    s = {},
    c = [],
    d = [],
    u = [],
    f,
    v,
    m;
  function p() {
    w(), x(), h();
  }
  function g() {
    i(Ie, b),
      i(Ie, p),
      i(Je, h),
      o(
        document,
        Th + " keydown",
        function (C) {
          m = C.type === "keydown";
        },
        { capture: !0 }
      ),
      o(r, "focusin", function () {
        wn(r, Eh, !!m);
      });
  }
  function b(C) {
    var T = Ul.concat("style");
    tn(c), qt(r, d), qt(f, u), jt([f, v], T), jt(r, C ? T : ["style", Li]);
  }
  function h() {
    qt(r, d),
      qt(f, u),
      (d = _(qr)),
      (u = _(Nd)),
      Ft(r, d),
      Ft(f, u),
      pe(r, wt, n.label),
      pe(r, Yl, n.labelledby);
  }
  function w() {
    (f = S("." + Nd)),
      (v = Qi(f, "." + j5)),
      vi(f && v, "A track/list element is missing."),
      Ao(c, Kp(v, "." + Tr + ":not(." + bh + ")")),
      qn({ arrows: Gl, pagination: Sr, prev: yh, next: wh, bar: H5, toggle: U5 }, function (C, T) {
        s[T] = S("." + C);
      }),
      Ii(s, { root: r, track: f, list: v, slides: c });
  }
  function x() {
    var C = r.id || R5(it),
      T = n.role;
    (r.id = C),
      (f.id = f.id || C + "-track"),
      (v.id = v.id || C + "-list"),
      !kt(r, Jt) && r.tagName !== "SECTION" && T && pe(r, Jt, T),
      pe(r, Li, l.carousel),
      pe(v, Jt, "presentation");
  }
  function S(C) {
    var T = qp(r, C);
    return T && q5(T, "." + qr) === r ? T : void 0;
  }
  function _(C) {
    return [
      C + "--" + n.type,
      C + "--" + n.direction,
      n.drag && C + "--draggable",
      n.isNavigation && C + "--nav",
      C === qr && ia,
    ];
  }
  return Ii(s, { setup: p, mount: g, destroy: b });
}
var Ya = "slide",
  Xa = "loop",
  Cr = "fade";
function e3(e, t, n, a) {
  var i = Me(e),
    o = i.on,
    r = i.emit,
    l = i.bind,
    s = e.Components,
    c = e.root,
    d = e.options,
    u = d.isNavigation,
    f = d.updateOnMove,
    v = d.i18n,
    m = d.pagination,
    p = d.slideFocus,
    g = s.Direction.resolve,
    b = kt(a, "style"),
    h = kt(a, wt),
    w = n > -1,
    x = Qi(a, "." + V5),
    S = Ml(a, d.focusableNodes || ""),
    _;
  function C() {
    w ||
      ((a.id = c.id + "-slide" + Rl(t + 1)),
      pe(a, Jt, m ? "tabpanel" : "group"),
      pe(a, Li, v.slide),
      pe(a, wt, h || Ns(v.slideLabel, [t + 1, e.length]))),
      T();
  }
  function T() {
    l(a, "click", Ce(r, Dl, he)),
      l(a, "keydown", Ce(r, oh, he)),
      o([Qa, eh, ha], A),
      o($l, P),
      f && o(nn, k);
  }
  function L() {
    (_ = !0), i.destroy(), qt(a, Q5), jt(a, Ul), pe(a, "style", b), pe(a, wt, h || "");
  }
  function P() {
    var j = e.splides
      .map(function (J) {
        var D = J.splide.Components.Slides.getAt(t);
        return D ? D.slide.id : "";
      })
      .join(" ");
    pe(a, wt, Ns(v.slideX, (w ? n : t) + 1)),
      pe(a, Xi, j),
      pe(a, Jt, p ? "button" : ""),
      p && jt(a, Li);
  }
  function k() {
    _ || A();
  }
  function A() {
    if (!_) {
      var j = e.index;
      R(), O(), wn(a, xh, t === j - 1), wn(a, Ah, t === j + 1);
    }
  }
  function R() {
    var j = $();
    j !== Od(a, ia) && (wn(a, ia, j), pe(a, gh, (u && j) || ""), r(j ? th : nh, he));
  }
  function O() {
    var j = ee(),
      J = !j && (!$() || w);
    if (
      (e.state.is([Wa, Wi]) || pe(a, vh, J || ""),
      pe(S, Oa, J ? -1 : ""),
      p && pe(a, Oa, J ? -1 : 0),
      j !== Od(a, zs) && (wn(a, zs, j), r(j ? ah : ih, he)),
      !j && document.activeElement === a)
    ) {
      var D = s.Slides.getAt(e.index);
      D && Qp(D.slide);
    }
  }
  function Q(j, J, D) {
    ct((D && x) || a, j, J);
  }
  function $() {
    var j = e.index;
    return j === t || (d.cloneStatus && j === n);
  }
  function ee() {
    if (e.is(Cr)) return $();
    var j = dt(s.Elements.track),
      J = dt(a),
      D = g("left", !0),
      q = g("right", !0);
    return Uo(j[D]) <= Mi(J[D]) && Uo(J[q]) <= Mi(j[q]);
  }
  function ae(j, J) {
    var D = nt(j - t);
    return !w && (d.rewind || e.is(Xa)) && (D = Va(D, e.length - D)), D <= J;
  }
  var he = {
    index: t,
    slideIndex: n,
    slide: a,
    container: x,
    isClone: w,
    mount: C,
    destroy: L,
    update: A,
    style: Q,
    isWithin: ae,
  };
  return he;
}
function t3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.emit,
    r = a.bind,
    l = t.Elements,
    s = l.slides,
    c = l.list,
    d = [];
  function u() {
    f(),
      i(Ie, v),
      i(Ie, f),
      i([ln, Ie], function () {
        d.sort(function (k, A) {
          return k.index - A.index;
        });
      });
  }
  function f() {
    s.forEach(function (k, A) {
      p(k, A, -1);
    });
  }
  function v() {
    S(function (k) {
      k.destroy();
    }),
      tn(d);
  }
  function m() {
    S(function (k) {
      k.update();
    });
  }
  function p(k, A, R) {
    var O = e3(e, A, R, k);
    O.mount(), d.push(O);
  }
  function g(k) {
    return k
      ? _(function (A) {
          return !A.isClone;
        })
      : d;
  }
  function b(k) {
    var A = t.Controller,
      R = A.toIndex(k),
      O = A.hasFocus() ? 1 : n.perPage;
    return _(function (Q) {
      return Eo(Q.index, R, R + O - 1);
    });
  }
  function h(k) {
    return _(k)[0];
  }
  function w(k, A) {
    Ot(k, function (R) {
      if ((Mn(R) && (R = Xp(R)), Wp(R))) {
        var O = s[A];
        O ? Bl(R, O) : Ki(c, R), Ft(R, n.classes.slide), T(R, Ce(o, aa));
      }
    }),
      o(Ie);
  }
  function x(k) {
    na(
      _(k).map(function (A) {
        return A.slide;
      })
    ),
      o(Ie);
  }
  function S(k, A) {
    g(A).forEach(k);
  }
  function _(k) {
    return d.filter(
      Gp(k)
        ? k
        : function (A) {
            return Mn(k) ? Pi(A.slide, k) : Il(Ka(k), A.index);
          }
    );
  }
  function C(k, A, R) {
    S(function (O) {
      O.style(k, A, R);
    });
  }
  function T(k, A) {
    var R = Ml(k, "img"),
      O = R.length;
    O
      ? R.forEach(function (Q) {
          r(Q, "load error", function () {
            --O || A();
          });
        })
      : A();
  }
  function L(k) {
    return k ? s.length : d.length;
  }
  function P() {
    return d.length > n.perPage;
  }
  return {
    mount: u,
    destroy: v,
    update: m,
    register: p,
    get: g,
    getIn: b,
    getAt: h,
    add: w,
    remove: x,
    forEach: S,
    filter: _,
    style: C,
    getLength: L,
    isEnough: P,
  };
}
function n3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.bind,
    r = a.emit,
    l = t.Slides,
    s = t.Direction.resolve,
    c = t.Elements,
    d = c.root,
    u = c.track,
    f = c.list,
    v = l.getAt,
    m = l.style,
    p,
    g;
  function b() {
    h(), o(window, "resize load", N5(Ce(r, aa))), i([Je, Ie], h), i(aa, w);
  }
  function h() {
    (g = null),
      (p = n.direction === Er),
      ct(d, "maxWidth", hn(n.width)),
      ct(u, s("paddingLeft"), x(!1)),
      ct(u, s("paddingRight"), x(!0)),
      w();
  }
  function w() {
    var $ = dt(d);
    (!g || g.width !== $.width || g.height !== $.height) &&
      (ct(u, "height", S()),
      m(s("marginRight"), hn(n.gap)),
      m("width", C()),
      m("height", T(), !0),
      (g = $),
      r(Nl));
  }
  function x($) {
    var ee = n.padding,
      ae = s($ ? "right" : "left");
    return (ee && hn(ee[ae] || (Oi(ee) ? 0 : ee))) || "0px";
  }
  function S() {
    var $ = "";
    return (
      p &&
        (($ = _()),
        vi($, "height or heightRatio is missing."),
        ($ = "calc(" + $ + " - " + x(!1) + " - " + x(!0) + ")")),
      $
    );
  }
  function _() {
    return hn(n.height || dt(f).width * n.heightRatio);
  }
  function C() {
    return n.autoWidth ? null : hn(n.fixedWidth) || (p ? "" : L());
  }
  function T() {
    return hn(n.fixedHeight) || (p ? (n.autoHeight ? null : L()) : _());
  }
  function L() {
    var $ = hn(n.gap);
    return "calc((100%" + ($ && " + " + $) + ")/" + (n.perPage || 1) + ($ && " - " + $) + ")";
  }
  function P() {
    return dt(f)[s("width")];
  }
  function k($, ee) {
    var ae = v($ || 0);
    return ae ? dt(ae.slide)[s("width")] + (ee ? 0 : O()) : 0;
  }
  function A($, ee) {
    var ae = v($);
    if (ae) {
      var he = dt(ae.slide)[s("right")],
        j = dt(f)[s("left")];
      return nt(he - j) + (ee ? 0 : O());
    }
    return 0;
  }
  function R() {
    return A(e.length - 1, !0) - A(-1, !0);
  }
  function O() {
    var $ = v(0);
    return ($ && parseFloat(ct($.slide, s("marginRight")))) || 0;
  }
  function Q($) {
    return parseFloat(ct(u, s("padding" + ($ ? "Right" : "Left")))) || 0;
  }
  return { mount: b, listSize: P, slideSize: k, sliderSize: R, totalSize: A, getPadding: Q };
}
var a3 = 2;
function i3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.emit,
    r = t.Elements,
    l = t.Slides,
    s = t.Direction.resolve,
    c = [],
    d;
  function u() {
    f(), i(Ie, v), i(Ie, f), i([Je, aa], m);
  }
  function f() {
    (d = b()) && (p(d), o(aa));
  }
  function v() {
    na(c), tn(c);
  }
  function m() {
    d < b() && o(Ie);
  }
  function p(h) {
    var w = l.get().slice(),
      x = w.length;
    if (x) {
      for (; w.length < h; ) Ao(w, w);
      Ao(w.slice(-h), w.slice(0, h)).forEach(function (S, _) {
        var C = _ < h,
          T = g(S.slide, _);
        C ? Bl(T, w[0].slide) : Ki(r.list, T),
          Ao(c, T),
          l.register(T, _ - h + (C ? 0 : x), S.index);
      });
    }
  }
  function g(h, w) {
    var x = h.cloneNode(!0);
    return Ft(x, n.classes.clone), (x.id = e.root.id + "-clone" + Rl(w + 1)), x;
  }
  function b() {
    var h = n.clones;
    if (!e.is(Xa)) h = 0;
    else if (!h) {
      var w = n[s("fixedWidth")] && t.Layout.slideSize(0),
        x = w && Mi(dt(r.track)[s("width")] / w);
      h = x || (n[s("autoWidth")] && e.length) || n.perPage * a3;
    }
    return h;
  }
  return { mount: u, destroy: v };
}
function o3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.emit,
    r = e.state.set,
    l = t.Layout,
    s = l.slideSize,
    c = l.getPadding,
    d = l.totalSize,
    u = l.listSize,
    f = l.sliderSize,
    v = t.Direction,
    m = v.resolve,
    p = v.orient,
    g = t.Elements,
    b = g.list,
    h = g.track,
    w;
  function x() {
    (w = t.Transition), i([ln, Nl, Je, Ie], S);
  }
  function S() {
    t.Controller.isBusy() || (t.Scroll.cancel(), C(e.index), t.Slides.update());
  }
  function _(j, J, D, q) {
    j !== J && ae(j > D) && (k(), T(P(O(), j > D), !0)),
      r(Wa),
      o(nn, J, D, j),
      w.start(J, function () {
        r(ja), o(Qa, J, D, j), q && q();
      });
  }
  function C(j) {
    T(R(j, !0));
  }
  function T(j, J) {
    if (!e.is(Cr)) {
      var D = J ? j : L(j);
      ct(b, "transform", "translate" + m("X") + "(" + D + "px)"), j !== D && o(eh);
    }
  }
  function L(j) {
    if (e.is(Xa)) {
      var J = A(j),
        D = J > t.Controller.getEnd(),
        q = J < 0;
      (q || D) && (j = P(j, D));
    }
    return j;
  }
  function P(j, J) {
    var D = j - ee(J),
      q = f();
    return (j -= p(q * (Mi(nt(D) / q) || 1)) * (J ? 1 : -1)), j;
  }
  function k() {
    T(O()), w.cancel();
  }
  function A(j) {
    for (var J = t.Slides.get(), D = 0, q = 1 / 0, ve = 0; ve < J.length; ve++) {
      var M = J[ve].index,
        Y = nt(R(M, !0) - j);
      if (Y <= q) (q = Y), (D = M);
      else break;
    }
    return D;
  }
  function R(j, J) {
    var D = p(d(j - 1) - $(j));
    return J ? Q(D) : D;
  }
  function O() {
    var j = m("left");
    return dt(b)[j] - dt(h)[j] + p(c(!1));
  }
  function Q(j) {
    return n.trimSpace && e.is(Ya) && (j = ii(j, 0, p(f() - u()))), j;
  }
  function $(j) {
    var J = n.focus;
    return J === "center" ? (u() - s(j, !0)) / 2 : +J * s(j) || 0;
  }
  function ee(j) {
    return R(j ? t.Controller.getEnd() : 0, !!n.trimSpace);
  }
  function ae(j) {
    var J = p(P(O(), j));
    return j ? J >= 0 : J <= b[m("scrollWidth")] - dt(h)[m("width")];
  }
  function he(j, J) {
    J = br(J) ? O() : J;
    var D = j !== !0 && p(J) < p(ee(!1)),
      q = j !== !1 && p(J) > p(ee(!0));
    return D || q;
  }
  return {
    mount: x,
    move: _,
    jump: C,
    translate: T,
    shift: P,
    cancel: k,
    toIndex: A,
    toPosition: R,
    getPosition: O,
    getLimit: ee,
    exceededLimit: he,
    reposition: S,
  };
}
function r3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = t.Move,
    r = o.getPosition,
    l = o.getLimit,
    s = o.toPosition,
    c = t.Slides,
    d = c.isEnough,
    u = c.getLength,
    f = e.is(Xa),
    v = e.is(Ya),
    m = Ce(P, !1),
    p = Ce(P, !0),
    g = n.start || 0,
    b = g,
    h,
    w,
    x;
  function S() {
    _(), i([Je, Ie], _);
  }
  function _() {
    (h = u(!0)), (w = n.perMove), (x = n.perPage);
    var D = ii(g, 0, h - 1);
    D !== g && ((g = D), o.reposition());
  }
  function C(D, q, ve) {
    if (!J()) {
      var M = L(D),
        Y = R(M);
      Y > -1 && (q || Y !== g) && (ae(Y), o.move(M, Y, b, ve));
    }
  }
  function T(D, q, ve, M) {
    t.Scroll.scroll(D, q, ve, function () {
      ae(R(o.toIndex(r()))), M && M();
    });
  }
  function L(D) {
    var q = g;
    if (Mn(D)) {
      var ve = D.match(/([+\-<>])(\d+)?/) || [],
        M = ve[1],
        Y = ve[2];
      M === "+" || M === "-"
        ? (q = k(g + +("" + M + (+Y || 1)), g))
        : M === ">"
        ? (q = Y ? Q(+Y) : m(!0))
        : M === "<" && (q = p(!0));
    } else q = f ? D : ii(D, 0, O());
    return q;
  }
  function P(D, q) {
    var ve = w || (j() ? 1 : x),
      M = k(g + ve * (D ? -1 : 1), g, !(w || j()));
    return M === -1 && v && !Zp(r(), l(!D), 1) ? (D ? 0 : O()) : q ? M : R(M);
  }
  function k(D, q, ve) {
    if (d()) {
      var M = O(),
        Y = A(D);
      Y !== D && ((q = D), (D = Y), (ve = !1)),
        D < 0 || D > M
          ? !w && (Eo(0, D, q, !0) || Eo(M, q, D, !0))
            ? (D = Q($(D)))
            : f
            ? (D = ve ? (D < 0 ? -(h % x || x) : h) : D)
            : n.rewind
            ? (D = D < 0 ? M : 0)
            : (D = -1)
          : ve && D !== q && (D = Q($(q) + (D < q ? -1 : 1)));
    } else D = -1;
    return D;
  }
  function A(D) {
    if (v && n.trimSpace === "move" && D !== g)
      for (var q = r(); q === s(D, !0) && Eo(D, 0, e.length - 1, !n.rewind); ) D < g ? --D : ++D;
    return D;
  }
  function R(D) {
    return f ? (D + h) % h || 0 : D;
  }
  function O() {
    return Bi(h - (j() || (f && w) ? 1 : x), 0);
  }
  function Q(D) {
    return ii(j() ? D : x * D, 0, O());
  }
  function $(D) {
    return j() ? D : Uo((D >= O() ? h - 1 : D) / x);
  }
  function ee(D) {
    var q = o.toIndex(D);
    return v ? ii(q, 0, O()) : q;
  }
  function ae(D) {
    D !== g && ((b = g), (g = D));
  }
  function he(D) {
    return D ? b : g;
  }
  function j() {
    return !br(n.focus) || n.isNavigation;
  }
  function J() {
    return e.state.is([Wa, Wi]) && !!n.waitForTransition;
  }
  return {
    mount: S,
    go: C,
    scroll: T,
    getNext: m,
    getPrev: p,
    getAdjacent: P,
    getEnd: O,
    setIndex: ae,
    getIndex: he,
    toIndex: Q,
    toPage: $,
    toDest: ee,
    hasFocus: j,
    isBusy: J,
  };
}
var s3 = "http://www.w3.org/2000/svg",
  l3 = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
  go = 40;
function c3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.bind,
    r = a.emit,
    l = n.classes,
    s = n.i18n,
    c = t.Elements,
    d = t.Controller,
    u = c.arrows,
    f = c.track,
    v = u,
    m = c.prev,
    p = c.next,
    g,
    b,
    h = {};
  function w() {
    S(), i(Je, x);
  }
  function x() {
    _(), w();
  }
  function S() {
    var A = n.arrows;
    A && !(m && p) && L(),
      m &&
        p &&
        (Ii(h, { prev: m, next: p }),
        Ho(v, A ? "" : "none"),
        Ft(v, (b = Gl + "--" + n.direction)),
        A && (C(), k(), pe([m, p], Xi, f.id), r(ch, m, p)));
  }
  function _() {
    a.destroy(), qt(v, b), g ? (na(u ? [m, p] : v), (m = p = null)) : jt([m, p], Ul);
  }
  function C() {
    i([Qa, Ie, ha], k), o(p, "click", Ce(T, ">")), o(m, "click", Ce(T, "<"));
  }
  function T(A) {
    d.go(A, !0);
  }
  function L() {
    (v = u || Ca("div", l.arrows)),
      (m = P(!0)),
      (p = P(!1)),
      (g = !0),
      Ki(v, [m, p]),
      !u && Bl(v, f);
  }
  function P(A) {
    var R =
      '<button class="' +
      l.arrow +
      " " +
      (A ? l.prev : l.next) +
      '" type="button"><svg xmlns="' +
      s3 +
      '" viewBox="0 0 ' +
      go +
      " " +
      go +
      '" width="' +
      go +
      '" height="' +
      go +
      '" focusable="false"><path d="' +
      (n.arrowPath || l3) +
      '" />';
    return Xp(R);
  }
  function k() {
    var A = e.index,
      R = d.getPrev(),
      O = d.getNext(),
      Q = R > -1 && A < R ? s.last : s.prev,
      $ = O > -1 && A > O ? s.first : s.next;
    (m.disabled = R < 0), (p.disabled = O < 0), pe(m, wt, Q), pe(p, wt, $), r(dh, m, p, R, O);
  }
  return { arrows: h, mount: w, destroy: _ };
}
var d3 = Ll + "-interval";
function u3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.bind,
    r = a.emit,
    l = wr(n.interval, e.go.bind(e, ">"), C),
    s = l.isPaused,
    c = t.Elements,
    d = t.Elements,
    u = d.root,
    f = d.toggle,
    v = n.autoplay,
    m,
    p,
    g = v === "pause";
  function b() {
    v && (h(), f && pe(f, Xi, c.track.id), g || w(), _());
  }
  function h() {
    n.pauseOnHover &&
      o(u, "mouseenter mouseleave", function (L) {
        (m = L.type === "mouseenter"), S();
      }),
      n.pauseOnFocus &&
        o(u, "focusin focusout", function (L) {
          (p = L.type === "focusin"), S();
        }),
      f &&
        o(f, "click", function () {
          g ? w() : x(!0);
        }),
      i([nn, yr, Ie], l.rewind),
      i(nn, T);
  }
  function w() {
    s() && t.Slides.isEnough() && (l.start(!n.resetProgress), (p = m = g = !1), _(), r(Fl));
  }
  function x(L) {
    L === void 0 && (L = !0), (g = !!L), _(), s() || (l.pause(), r(jl));
  }
  function S() {
    g || (m || p ? x(!1) : w());
  }
  function _() {
    f && (wn(f, ia, !g), pe(f, wt, n.i18n[g ? "play" : "pause"]));
  }
  function C(L) {
    var P = c.bar;
    P && ct(P, "width", L * 100 + "%"), r(ph, L);
  }
  function T(L) {
    var P = t.Slides.getAt(L);
    l.set((P && +kt(P.slide, d3)) || n.interval);
  }
  return { mount: b, destroy: l.cancel, play: w, pause: x, isPaused: s };
}
function f3(e, t, n) {
  var a = Me(e),
    i = a.on;
  function o() {
    n.cover && (i(Vl, Ce(l, !0)), i([ln, Je, Ie], Ce(r, !0)));
  }
  function r(s) {
    t.Slides.forEach(function (c) {
      var d = Qi(c.container || c.slide, "img");
      d && d.src && l(s, d, c);
    });
  }
  function l(s, c, d) {
    d.style("background", s ? 'center/cover no-repeat url("' + c.src + '")' : "", !0),
      Ho(c, s ? "none" : "");
  }
  return { mount: o, destroy: Ce(r, !1) };
}
var p3 = 10,
  h3 = 600,
  m3 = 0.6,
  g3 = 1.5,
  v3 = 800;
function b3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.emit,
    r = e.state.set,
    l = t.Move,
    s = l.getPosition,
    c = l.getLimit,
    d = l.exceededLimit,
    u = l.translate,
    f,
    v,
    m = 1;
  function p() {
    i(nn, w), i([Je, Ie], x);
  }
  function g(_, C, T, L, P) {
    var k = s();
    if ((w(), T)) {
      var A = t.Layout.sliderSize(),
        R = Ds(_) * A * Uo(nt(_) / A) || 0;
      _ = l.toPosition(t.Controller.toDest(_ % A)) + R;
    }
    var O = Zp(k, _, 1);
    (m = 1),
      (C = O ? 0 : C || Bi(nt(_ - k) / g3, v3)),
      (v = L),
      (f = wr(C, b, Ce(h, k, _, P), 1)),
      r(Wi),
      o(yr),
      f.start();
  }
  function b() {
    r(ja), v && v(), o(ha);
  }
  function h(_, C, T, L) {
    var P = s(),
      k = _ + (C - _) * S(L),
      A = (k - P) * m;
    u(P + A), e.is(Ya) && !T && d() && ((m *= m3), nt(A) < p3 && g(c(d(!0)), h3, !1, v, !0));
  }
  function w() {
    f && f.cancel();
  }
  function x() {
    f && !f.isPaused() && (w(), b());
  }
  function S(_) {
    var C = n.easingFunc;
    return C ? C(_) : 1 - Math.pow(1 - _, 4);
  }
  return { mount: p, destroy: w, scroll: g, cancel: x };
}
var _a = { passive: !1, capture: !0 };
function y3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.emit,
    r = a.bind,
    l = a.unbind,
    s = e.state,
    c = t.Move,
    d = t.Scroll,
    u = t.Controller,
    f = t.Elements.track,
    v = t.Media.reduce,
    m = t.Direction,
    p = m.resolve,
    g = m.orient,
    b = c.getPosition,
    h = c.exceededLimit,
    w,
    x,
    S,
    _,
    C,
    T = !1,
    L,
    P,
    k;
  function A() {
    r(f, Zr, Ls, _a),
      r(f, Jr, Ls, _a),
      r(f, Th, O, _a),
      r(f, "click", ee, { capture: !0 }),
      r(f, "dragstart", Kt),
      i([ln, Je], R);
  }
  function R() {
    var y = n.drag;
    re(!y), (_ = y === "free");
  }
  function O(y) {
    if (((L = !1), !P)) {
      var E = be(y);
      fe(y.target) &&
        (E || !y.button) &&
        (u.isBusy()
          ? Kt(y, !0)
          : ((k = E ? f : window),
            (C = s.is([Wa, Wi])),
            (S = null),
            r(k, Zr, Q, _a),
            r(k, Jr, $, _a),
            c.cancel(),
            d.cancel(),
            ae(y)));
    }
  }
  function Q(y) {
    if ((s.is(xo) || (s.set(xo), o(rh)), y.cancelable))
      if (C) {
        c.translate(w + W(ve(y)));
        var E = M(y) > zd,
          I = T !== (T = h());
        (E || I) && ae(y), (L = !0), o(sh), Kt(y);
      } else J(y) && ((C = j(y)), Kt(y));
  }
  function $(y) {
    s.is(xo) && (s.set(ja), o(lh)), C && (he(y), Kt(y)), l(k, Zr, Q), l(k, Jr, $), (C = !1);
  }
  function ee(y) {
    !P && L && Kt(y, !0);
  }
  function ae(y) {
    (S = x), (x = y), (w = b());
  }
  function he(y) {
    var E = D(y),
      I = q(E),
      N = n.rewind && n.rewindByDrag;
    v(!1),
      _
        ? u.scroll(I, 0, n.snap)
        : e.is(Cr)
        ? u.go(g(Ds(E)) < 0 ? (N ? "<" : "-") : N ? ">" : "+")
        : e.is(Ya) && T && N
        ? u.go(h(!0) ? ">" : "<")
        : u.go(u.toDest(I), !0),
      v(!0);
  }
  function j(y) {
    var E = n.dragMinThreshold,
      I = Oi(E),
      N = (I && E.mouse) || 0,
      z = (I ? E.touch : +E) || 10;
    return nt(ve(y)) > (be(y) ? z : N);
  }
  function J(y) {
    return nt(ve(y)) > nt(ve(y, !0));
  }
  function D(y) {
    if (e.is(Xa) || !T) {
      var E = M(y);
      if (E && E < zd) return ve(y) / E;
    }
    return 0;
  }
  function q(y) {
    return (
      b() +
      Ds(y) *
        Va(nt(y) * (n.flickPower || 600), _ ? 1 / 0 : t.Layout.listSize() * (n.flickMaxPages || 1))
    );
  }
  function ve(y, E) {
    return F(y, E) - F(Y(y), E);
  }
  function M(y) {
    return Rs(y) - Rs(Y(y));
  }
  function Y(y) {
    return (x === y && S) || x;
  }
  function F(y, E) {
    return (be(y) ? y.changedTouches[0] : y)["page" + p(E ? "Y" : "X")];
  }
  function W(y) {
    return y / (T && e.is(Ya) ? Z5 : 1);
  }
  function fe(y) {
    var E = n.noDrag;
    return !Pi(y, "." + _h + ", ." + kr) && (!E || !Pi(y, E));
  }
  function be(y) {
    return typeof TouchEvent != "undefined" && y instanceof TouchEvent;
  }
  function ce() {
    return C;
  }
  function re(y) {
    P = y;
  }
  return { mount: A, disable: re, isDragging: ce };
}
var w3 = { Spacebar: " ", Right: Ar, Left: xr, Up: hh, Down: mh };
function Wl(e) {
  return (e = Mn(e) ? e : e.key), w3[e] || e;
}
var $d = "keydown";
function _3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.bind,
    r = a.unbind,
    l = e.root,
    s = t.Direction.resolve,
    c,
    d;
  function u() {
    f(), i(Je, v), i(Je, f), i(nn, p);
  }
  function f() {
    var b = n.keyboard;
    b && ((c = b === "global" ? window : l), o(c, $d, g));
  }
  function v() {
    r(c, $d);
  }
  function m(b) {
    d = b;
  }
  function p() {
    var b = d;
    (d = !0),
      Ms(function () {
        d = b;
      });
  }
  function g(b) {
    if (!d) {
      var h = Wl(b);
      h === s(xr) ? e.go("<") : h === s(Ar) && e.go(">");
    }
  }
  return { mount: u, destroy: v, disable: m };
}
var bi = Ll + "-lazy",
  To = bi + "-srcset",
  x3 = "[" + bi + "], [" + To + "]";
function A3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.off,
    r = a.bind,
    l = a.emit,
    s = n.lazyLoad === "sequential",
    c = [ln, Ie, Qa, ha],
    d = [];
  function u() {
    n.lazyLoad && (f(), i(Ie, f), s || i(c, v));
  }
  function f() {
    tn(d),
      t.Slides.forEach(function (b) {
        Ml(b.slide, x3).forEach(function (h) {
          var w = kt(h, bi),
            x = kt(h, To);
          if (w !== h.src || x !== h.srcset) {
            var S = n.classes.spinner,
              _ = h.parentElement,
              C = Qi(_, "." + S) || Ca("span", S, _);
            d.push([h, b, C]), h.src || Ho(h, "none");
          }
        });
      }),
      s && g();
  }
  function v() {
    (d = d.filter(function (b) {
      var h = n.perPage * ((n.preloadPages || 1) + 1) - 1;
      return b[1].isWithin(e.index, h) ? m(b) : !0;
    })),
      d.length || o(c);
  }
  function m(b) {
    var h = b[0];
    Ft(b[1].slide, $s),
      r(h, "load error", Ce(p, b)),
      pe(h, "src", kt(h, bi)),
      pe(h, "srcset", kt(h, To)),
      jt(h, bi),
      jt(h, To);
  }
  function p(b, h) {
    var w = b[0],
      x = b[1];
    qt(x.slide, $s), h.type !== "error" && (na(b[2]), Ho(w, ""), l(Vl, w, x), l(aa)), s && g();
  }
  function g() {
    d.length && m(d.shift());
  }
  return { mount: u, destroy: Ce(tn, d) };
}
function E3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = a.emit,
    r = a.bind,
    l = t.Slides,
    s = t.Elements,
    c = t.Controller,
    d = c.hasFocus,
    u = c.getIndex,
    f = c.go,
    v = t.Direction.resolve,
    m = [],
    p,
    g;
  function b() {
    h(),
      i([Je, Ie], b),
      n.pagination &&
        l.isEnough() &&
        (i([nn, yr, ha], T), w(), T(), o(uh, { list: p, items: m }, C(e.index)));
  }
  function h() {
    p && (na(s.pagination ? Rn(p.children) : p), qt(p, g), tn(m), (p = null)), a.destroy();
  }
  function w() {
    var L = e.length,
      P = n.classes,
      k = n.i18n,
      A = n.perPage,
      R = d() ? L : Mi(L / A);
    (p = s.pagination || Ca("ul", P.pagination, s.track.parentElement)),
      Ft(p, (g = Sr + "--" + _())),
      pe(p, Jt, "tablist"),
      pe(p, wt, k.select),
      pe(p, Hl, _() === Er ? "vertical" : "");
    for (var O = 0; O < R; O++) {
      var Q = Ca("li", null, p),
        $ = Ca("button", { class: P.page, type: "button" }, Q),
        ee = l.getIn(O).map(function (he) {
          return he.slide.id;
        }),
        ae = !d() && A > 1 ? k.pageX : k.slideX;
      r($, "click", Ce(x, O)),
        n.paginationKeyboard && r($, "keydown", Ce(S, O)),
        pe(Q, Jt, "presentation"),
        pe($, Jt, "tab"),
        pe($, Xi, ee.join(" ")),
        pe($, wt, Ns(ae, O + 1)),
        pe($, Oa, -1),
        m.push({ li: Q, button: $, page: O });
    }
  }
  function x(L) {
    f(">" + L, !0);
  }
  function S(L, P) {
    var k = m.length,
      A = Wl(P),
      R = _(),
      O = -1;
    A === v(Ar, !1, R)
      ? (O = ++L % k)
      : A === v(xr, !1, R)
      ? (O = (--L + k) % k)
      : A === "Home"
      ? (O = 0)
      : A === "End" && (O = k - 1);
    var Q = m[O];
    Q && (Qp(Q.button), f(">" + O), Kt(P, !0));
  }
  function _() {
    return n.paginationDirection || n.direction;
  }
  function C(L) {
    return m[c.toPage(L)];
  }
  function T() {
    var L = C(u(!0)),
      P = C(u());
    if (L) {
      var k = L.button;
      qt(k, ia), jt(k, Md), pe(k, Oa, -1);
    }
    if (P) {
      var A = P.button;
      Ft(A, ia), pe(A, Md, !0), pe(A, Oa, "");
    }
    o(fh, { list: p, items: m }, L, P);
  }
  return { items: m, mount: b, destroy: h, getAt: C, update: T };
}
var T3 = [" ", "Enter"];
function k3(e, t, n) {
  var a = n.isNavigation,
    i = n.slideFocus,
    o = [];
  function r() {
    e.options = { slideFocus: br(i) ? a : i };
  }
  function l() {
    e.splides.forEach(function (p) {
      p.isParent || (d(e, p.splide), d(p.splide, e));
    }),
      a && u();
  }
  function s() {
    o.forEach(function (p) {
      p.destroy();
    }),
      tn(o);
  }
  function c() {
    s(), l();
  }
  function d(p, g) {
    var b = Me(p);
    b.on(nn, function (h, w, x) {
      g.go(g.is(Xa) ? x : h);
    }),
      o.push(b);
  }
  function u() {
    var p = Me(e),
      g = p.on;
    g(Dl, v), g(oh, m), g([ln, Je], f), o.push(p), p.emit($l, e.splides);
  }
  function f() {
    pe(t.Elements.list, Hl, n.direction === Er ? "vertical" : "");
  }
  function v(p) {
    e.go(p.index);
  }
  function m(p, g) {
    Il(T3, Wl(g)) && (v(p), Kt(g));
  }
  return { setup: r, mount: l, destroy: s, remount: c };
}
function S3(e, t, n) {
  var a = Me(e),
    i = a.bind,
    o = 0;
  function r() {
    n.wheel && i(t.Elements.track, "wheel", l, _a);
  }
  function l(c) {
    if (c.cancelable) {
      var d = c.deltaY,
        u = d < 0,
        f = Rs(c),
        v = n.wheelMinThreshold || 0,
        m = n.wheelSleep || 0;
      nt(d) > v && f - o > m && (e.go(u ? "<" : ">"), (o = f)), s(u) && Kt(c);
    }
  }
  function s(c) {
    return !n.releaseWheel || e.state.is(Wa) || t.Controller.getAdjacent(c) !== -1;
  }
  return { mount: r };
}
var C3 = 90;
function O3(e, t, n) {
  var a = Me(e),
    i = a.on,
    o = t.Elements.track,
    r = n.live && !n.isNavigation,
    l = Ca("span", W5),
    s = wr(C3, Ce(d, !1));
  function c() {
    r &&
      (f(!t.Autoplay.isPaused()),
      pe(o, Dd, !0),
      (l.textContent = "\u2026"),
      i(Fl, Ce(f, !0)),
      i(jl, Ce(f, !1)),
      i([Qa, ha], Ce(d, !0)));
  }
  function d(v) {
    pe(o, Rd, v), v ? (Ki(o, l), s.start()) : na(l);
  }
  function u() {
    jt(o, [Ld, Dd, Rd]), na(l);
  }
  function f(v) {
    r && pe(o, Ld, v ? "off" : "polite");
  }
  return { mount: c, disable: f, destroy: u };
}
var P3 = Object.freeze({
    __proto__: null,
    Media: z5,
    Direction: $5,
    Elements: J5,
    Slides: t3,
    Layout: n3,
    Clones: i3,
    Move: o3,
    Controller: r3,
    Arrows: c3,
    Autoplay: u3,
    Cover: f3,
    Scroll: b3,
    Drag: y3,
    Keyboard: _3,
    LazyLoad: A3,
    Pagination: E3,
    Sync: k3,
    Wheel: S3,
    Live: O3,
  }),
  I3 = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s",
  },
  B3 = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: !0,
    arrows: !0,
    pagination: !0,
    paginationKeyboard: !0,
    interval: 5e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    resetProgress: !0,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: !0,
    direction: "ltr",
    trimSpace: !0,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: !0,
    classes: X5,
    i18n: I3,
    reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
  };
function M3(e, t, n) {
  var a = Me(e),
    i = a.on;
  function o() {
    i([ln, Ie], function () {
      Ms(function () {
        t.Slides.style("transition", "opacity " + n.speed + "ms " + n.easing);
      });
    });
  }
  function r(l, s) {
    var c = t.Elements.track;
    ct(c, "height", hn(dt(c).height)),
      Ms(function () {
        s(), ct(c, "height", "");
      });
  }
  return { mount: o, start: r, cancel: Ls };
}
function L3(e, t, n) {
  var a = Me(e),
    i = a.bind,
    o = t.Move,
    r = t.Controller,
    l = t.Scroll,
    s = t.Elements.list,
    c = Ce(ct, s, "transition"),
    d;
  function u() {
    i(s, "transitionend", function (p) {
      p.target === s && d && (v(), d());
    });
  }
  function f(p, g) {
    var b = o.toPosition(p, !0),
      h = o.getPosition(),
      w = m(p);
    nt(b - h) >= 1 && w >= 1
      ? n.useScroll
        ? l.scroll(b, w, !1, g)
        : (c("transform " + w + "ms " + n.easing), o.translate(b, !0), (d = g))
      : (o.jump(p), g());
  }
  function v() {
    c(""), l.cancel();
  }
  function m(p) {
    var g = n.rewindSpeed;
    if (e.is(Ya) && g) {
      var b = r.getIndex(!0),
        h = r.getEnd();
      if ((b === 0 && p >= h) || (b >= h && p === 0)) return g;
    }
    return n.speed;
  }
  return { mount: u, start: f, cancel: v };
}
var R3 = (function () {
    function e(n, a) {
      (this.event = Me()),
        (this.Components = {}),
        (this.state = D5(xa)),
        (this.splides = []),
        (this._o = {}),
        (this._E = {});
      var i = Mn(n) ? qp(document, n) : n;
      vi(i, i + " is invalid."),
        (this.root = i),
        (a = _n({ label: kt(i, wt) || "", labelledby: kt(i, Yl) || "" }, B3, e.defaults, a || {}));
      try {
        _n(a, JSON.parse(kt(i, Ll)));
      } catch {
        vi(!1, "Invalid JSON");
      }
      this._o = Object.create(_n({}, a));
    }
    var t = e.prototype;
    return (
      (t.mount = function (a, i) {
        var o = this,
          r = this.state,
          l = this.Components;
        vi(r.is([xa, Vo]), "Already mounted!"),
          r.set(xa),
          (this._C = l),
          (this._T = i || this._T || (this.is(Cr) ? M3 : L3)),
          (this._E = a || this._E);
        var s = Ii({}, P3, this._E, { Transition: this._T });
        return (
          qn(s, function (c, d) {
            var u = c(o, l, o._o);
            (l[d] = u), u.setup && u.setup();
          }),
          qn(l, function (c) {
            c.mount && c.mount();
          }),
          this.emit(ln),
          Ft(this.root, K5),
          r.set(ja),
          this.emit(Id),
          this
        );
      }),
      (t.sync = function (a) {
        return (
          this.splides.push({ splide: a }),
          a.splides.push({ splide: this, isParent: !0 }),
          this.state.is(ja) && (this._C.Sync.remount(), a.Components.Sync.remount()),
          this
        );
      }),
      (t.go = function (a) {
        return this._C.Controller.go(a), this;
      }),
      (t.on = function (a, i) {
        return this.event.on(a, i), this;
      }),
      (t.off = function (a) {
        return this.event.off(a), this;
      }),
      (t.emit = function (a) {
        var i;
        return (i = this.event).emit.apply(i, [a].concat(Rn(arguments, 1))), this;
      }),
      (t.add = function (a, i) {
        return this._C.Slides.add(a, i), this;
      }),
      (t.remove = function (a) {
        return this._C.Slides.remove(a), this;
      }),
      (t.is = function (a) {
        return this._o.type === a;
      }),
      (t.refresh = function () {
        return this.emit(Ie), this;
      }),
      (t.destroy = function (a) {
        a === void 0 && (a = !0);
        var i = this.event,
          o = this.state;
        return (
          o.is(xa)
            ? Me(this).on(Id, this.destroy.bind(this, a))
            : (qn(
                this._C,
                function (r) {
                  r.destroy && r.destroy(a);
                },
                !0
              ),
              i.emit(zl),
              i.destroy(),
              a && tn(this.splides),
              o.set(Vo)),
          this
        );
      }),
      B5(e, [
        {
          key: "options",
          get: function () {
            return this._o;
          },
          set: function (a) {
            this._C.Media.set(a, !0);
          },
        },
        {
          key: "length",
          get: function () {
            return this._C.Slides.getLength(!0);
          },
        },
        {
          key: "index",
          get: function () {
            return this._C.Controller.getIndex();
          },
        },
      ]),
      e
    );
  })(),
  Kl = R3;
Kl.defaults = {};
Kl.STATES = L5;
const Fd = [
    th,
    ch,
    dh,
    jl,
    Fl,
    ph,
    Dl,
    zl,
    rh,
    lh,
    sh,
    ih,
    nh,
    Vl,
    ln,
    nn,
    Qa,
    $l,
    uh,
    fh,
    Ie,
    aa,
    Nl,
    yr,
    ha,
    Je,
    ah,
  ],
  kh = "splide";
function jd(e) {
  return e !== null && typeof e == "object";
}
function D3(e, t) {
  if (e) {
    const n = Object.keys(e);
    for (let a = 0; a < n.length; a++) {
      const i = n[a];
      if (i !== "__proto__" && t(e[i], i) === !1) break;
    }
  }
  return e;
}
function Sh(e, t) {
  const n = e;
  return (
    D3(t, (a, i) => {
      Array.isArray(a)
        ? (n[i] = a.slice())
        : jd(a)
        ? (n[i] = Sh(jd(n[i]) ? n[i] : {}, a))
        : (n[i] = a);
    }),
    n
  );
}
var Ql = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, i] of t) n[a] = i;
  return n;
};
const N3 = Ue({
    name: "SplideTrack",
    setup() {
      da(() => {
        var e;
        const t = Fe(kh);
        (e = t == null ? void 0 : t.value) == null || e.refresh();
      });
    },
  }),
  z3 = { class: "splide__track" },
  $3 = { class: "splide__list" };
function F3(e, t, n, a, i, o) {
  return K(), ie("div", z3, [B("ul", $3, [Ma(e.$slots, "default")])]);
}
var j3 = Ql(N3, [["render", F3]]);
const V3 = Ue({
  name: "Splide",
  emits: Fd.map((e) => `splide:${e}`),
  components: { SplideTrack: j3 },
  props: {
    tag: { default: "div", type: String },
    options: { default: {}, type: Object },
    extensions: Object,
    transition: Function,
    hasTrack: { default: !0, type: Boolean },
  },
  setup(e, t) {
    const n = me(),
      a = me();
    at(() => {
      a.value &&
        ((n.value = new Kl(a.value, e.options)),
        s(n.value),
        n.value.mount(e.extensions, e.transition));
    }),
      ua(() => {
        var c;
        (c = n.value) == null || c.destroy();
      }),
      Nt(
        () => Sh({}, e.options),
        (c) => {
          n.value && (n.value.options = c);
        },
        { deep: !0 }
      ),
      An(kh, n);
    const i = Oe(() => {
        var c;
        return ((c = n.value) == null ? void 0 : c.index) || 0;
      }),
      o = Oe(() => {
        var c;
        return ((c = n.value) == null ? void 0 : c.length) || 0;
      });
    function r(c) {
      var d;
      (d = n.value) == null || d.go(c);
    }
    function l(c) {
      var d;
      (d = n.value) == null || d.sync(c);
    }
    function s(c) {
      Fd.forEach((d) => {
        c.on(d, (...u) => {
          t.emit(`splide:${d}`, c, ...u);
        });
      });
    }
    return { splide: n, root: a, index: i, length: o, go: r, sync: l };
  },
});
function Y3(e, t, n, a, i, o) {
  const r = En("SplideTrack");
  return (
    K(),
    Ye(
      ji(e.tag),
      { class: "splide", ref: "root" },
      {
        default: Ke(() => [
          e.hasTrack
            ? (K(), Ye(r, { key: 0 }, { default: Ke(() => [Ma(e.$slots, "default")]), _: 3 }))
            : Ma(e.$slots, "default", { key: 1 }),
        ]),
        _: 3,
      },
      512
    )
  );
}
var Vd = Ql(V3, [["render", Y3]]);
const H3 = Ue({ name: "SplideSlide" }),
  U3 = { class: "splide__slide" };
function G3(e, t, n, a, i, o) {
  return K(), ie("li", U3, [Ma(e.$slots, "default")]);
}
var Yd = Ql(H3, [["render", G3]]);
const W3 = {
  install(e) {
    e.component(Vd.name, Vd), e.component(Yd.name, Yd);
  },
};
/*!
 * Vue-Lazyload.js v3.0.0-rc.1
 * (c) 2022 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */ function Ch(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var Fs = Ch(function (e) {
    const t = Object.prototype.toString,
      n = Object.prototype.propertyIsEnumerable,
      a = Object.getOwnPropertySymbols;
    e.exports = (o, ...r) => {
      if (!i(o)) throw new TypeError("expected the first argument to be an object");
      if (r.length === 0 || typeof Symbol != "function" || typeof a != "function") return o;
      for (let l of r) {
        let s = a(l);
        for (let c of s) n.call(l, c) && (o[c] = l[c]);
      }
      return o;
    };
    function i(o) {
      return typeof o == "function" || t.call(o) === "[object Object]" || Array.isArray(o);
    }
  }),
  Hd = Object.freeze({ __proto__: null, default: Fs, __moduleExports: Fs }),
  K3 = (Hd && Fs) || Hd,
  Ud = Ch(function (e) {
    const t = Object.prototype.toString,
      n = (r) => r !== "__proto__" && r !== "constructor" && r !== "prototype",
      a = (e.exports = (r, ...l) => {
        let s = 0;
        for (o(r) && (r = l[s++]), r || (r = {}); s < l.length; s++)
          if (i(l[s])) {
            for (const c of Object.keys(l[s]))
              n(c) && (i(r[c]) && i(l[s][c]) ? a(r[c], l[s][c]) : (r[c] = l[s][c]));
            K3(r, l[s]);
          }
        return r;
      });
    function i(r) {
      return typeof r == "function" || t.call(r) === "[object Object]";
    }
    function o(r) {
      return typeof r == "object" ? r === null : typeof r != "function";
    }
  });
const Ln = typeof window != "undefined" && window !== null,
  Gd = Q3();
function Q3() {
  return Ln &&
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ? ("isIntersecting" in window.IntersectionObserverEntry.prototype ||
        Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
          get: function () {
            return this.intersectionRatio > 0;
          },
        }),
      !0)
    : !1;
}
const $n = { event: "event", observer: "observer" };
function oi(e, t) {
  if (!e.length) return;
  const n = e.indexOf(t);
  if (n > -1) return e.splice(n, 1);
}
function Wd(e, t) {
  if (e.tagName !== "IMG" || !e.getAttribute("data-srcset")) return "";
  let n = e.getAttribute("data-srcset").trim().split(",");
  const a = [],
    o = e.parentNode.offsetWidth * t;
  let r, l, s;
  n.forEach((u) => {
    (u = u.trim()),
      (r = u.lastIndexOf(" ")),
      r === -1
        ? ((l = u), (s = 99999))
        : ((l = u.substr(0, r)), (s = parseInt(u.substr(r + 1, u.length - r - 2), 10))),
      a.push([s, l]);
  }),
    a.sort((u, f) => {
      if (u[0] < f[0]) return 1;
      if (u[0] > f[0]) return -1;
      if (u[0] === f[0]) {
        if (f[1].indexOf(".webp", f[1].length - 5) !== -1) return 1;
        if (u[1].indexOf(".webp", u[1].length - 5) !== -1) return -1;
      }
      return 0;
    });
  let c = "",
    d;
  for (let u = 0; u < a.length; u++) {
    (d = a[u]), (c = d[1]);
    const f = a[u + 1];
    if (f && f[0] < o) {
      c = d[1];
      break;
    } else if (!f) {
      c = d[1];
      break;
    }
  }
  return c;
}
const X3 = (e = 1) => (Ln && window.devicePixelRatio) || e;
function q3() {
  if (!Ln) return !1;
  let e = !0;
  function t(n, a) {
    const i = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha:
          "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation:
          "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      },
      o = new Image();
    (o.onload = function () {
      const r = o.width > 0 && o.height > 0;
      a(r);
    }),
      (o.onerror = function () {
        a(!1);
      }),
      (o.src = "data:image/webp;base64," + i[n]);
  }
  return (
    t("lossy", (n) => {
      e = n;
    }),
    t("lossless", (n) => {
      e = n;
    }),
    t("alpha", (n) => {
      e = n;
    }),
    t("animation", (n) => {
      e = n;
    }),
    e
  );
}
function Z3(e, t) {
  let n = null,
    a = 0;
  return function () {
    if (n) return;
    const i = Date.now() - a,
      o = this,
      r = arguments,
      l = function () {
        (a = Date.now()), (n = !1), e.apply(o, r);
      };
    i >= t ? l() : (n = setTimeout(l, t));
  };
}
function J3() {
  if (!Ln) return !1;
  let e = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get: function () {
        e = !0;
      },
    });
    window.addEventListener("test", Xl, t);
  } catch {}
  return e;
}
const eA = J3(),
  tA = {
    on(e, t, n, a = !1) {
      eA ? e.addEventListener(t, n, { capture: a, passive: !0 }) : e.addEventListener(t, n, a);
    },
    off(e, t, n, a = !1) {
      e.removeEventListener(t, n, a);
    },
  },
  js = (e, t, n) => {
    let a = new Image();
    if (!e || !e.src) {
      const i = new Error("image src is required");
      return n(i);
    }
    e.cors && (a.crossOrigin = e.cors),
      (a.src = e.src),
      (a.onload = function () {
        t({ naturalHeight: a.naturalHeight, naturalWidth: a.naturalWidth, src: a.src }), (a = null);
      }),
      (a.onerror = function (i) {
        n(i);
      });
  },
  es = (e, t) =>
    typeof getComputedStyle != "undefined"
      ? getComputedStyle(e, null).getPropertyValue(t)
      : e.style[t],
  nA = (e) => es(e, "overflow") + es(e, "overflowY") + es(e, "overflowX"),
  aA = (e) => {
    if (!Ln) return;
    if (!(e instanceof Element)) return window;
    let t = e;
    for (; t && !(t === document.body || t === document.documentElement || !t.parentNode); ) {
      if (/(scroll|auto)/.test(nA(t))) return t;
      t = t.parentNode;
    }
    return window;
  };
function Xl() {}
class iA {
  constructor(t) {
    (this.max = t || 100), (this._caches = []);
  }
  has(t) {
    return this._caches.indexOf(t) > -1;
  }
  add(t) {
    this.has(t) || (this._caches.push(t), this._caches.length > this.max && this.free());
  }
  free() {
    this._caches.shift();
  }
}
class oA {
  constructor(t, n, a, i, o, r, l, s, c, d) {
    (this.el = t),
      (this.src = n),
      (this.error = a),
      (this.loading = i),
      (this.bindType = o),
      (this.attempt = 0),
      (this.cors = s),
      (this.naturalHeight = 0),
      (this.naturalWidth = 0),
      (this.options = l),
      (this.rect = {}),
      (this.$parent = r),
      (this.elRenderer = c),
      (this._imageCache = d),
      (this.performanceData = { init: Date.now(), loadStart: 0, loadEnd: 0 }),
      this.filter(),
      this.initState(),
      this.render("loading", !1);
  }
  initState() {
    "dataset" in this.el
      ? (this.el.dataset.src = this.src)
      : this.el.setAttribute("data-src", this.src),
      (this.state = { loading: !1, error: !1, loaded: !1, rendered: !1 });
  }
  record(t) {
    this.performanceData[t] = Date.now();
  }
  update(t) {
    const n = this.src;
    (this.src = t.src),
      (this.loading = t.loading),
      (this.error = t.error),
      this.filter(),
      n !== this.src && ((this.attempt = 0), this.initState());
  }
  getRect() {
    this.rect = this.el.getBoundingClientRect();
  }
  checkInView() {
    return (
      this.getRect(),
      this.rect.top < window.innerHeight * this.options.preLoad &&
        this.rect.bottom > this.options.preLoadTop &&
        this.rect.left < window.innerWidth * this.options.preLoad &&
        this.rect.right > 0
    );
  }
  filter() {
    for (const t in this.options.filter) this.options.filter[t](this, this.options);
  }
  renderLoading(t) {
    (this.state.loading = !0),
      js(
        { src: this.loading, cors: this.cors },
        () => {
          this.render("loading", !1), (this.state.loading = !1), t();
        },
        () => {
          t(),
            (this.state.loading = !1),
            this.options.silent ||
              console.warn(`VueLazyload log: load failed with loading image(${this.loading})`);
        }
      );
  }
  load(t = Xl) {
    if (this.attempt > this.options.attempt - 1 && this.state.error) {
      this.options.silent ||
        console.log(
          `VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`
        ),
        t();
      return;
    }
    if (!(this.state.rendered && this.state.loaded)) {
      if (this._imageCache.has(this.src))
        return (this.state.loaded = !0), this.render("loaded", !0), (this.state.rendered = !0), t();
      this.renderLoading(() => {
        this.attempt++,
          this.options.adapter.beforeLoad && this.options.adapter.beforeLoad(this, this.options),
          this.record("loadStart"),
          js(
            { src: this.src, cors: this.cors },
            (n) => {
              (this.naturalHeight = n.naturalHeight),
                (this.naturalWidth = n.naturalWidth),
                (this.state.loaded = !0),
                (this.state.error = !1),
                this.record("loadEnd"),
                this.render("loaded", !1),
                (this.state.rendered = !0),
                this._imageCache.add(this.src),
                t();
            },
            (n) => {
              !this.options.silent && console.error(n),
                (this.state.error = !0),
                (this.state.loaded = !1),
                this.render("error", !1);
            }
          );
      });
    }
  }
  render(t, n) {
    this.elRenderer(this, t, n);
  }
  performance() {
    let t = "loading",
      n = 0;
    return (
      this.state.loaded &&
        ((t = "loaded"),
        (n = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3)),
      this.state.error && (t = "error"),
      { src: this.src, state: t, time: n }
    );
  }
  $destroy() {
    (this.el = null),
      (this.src = ""),
      (this.error = null),
      (this.loading = ""),
      (this.bindType = null),
      (this.attempt = 0);
  }
}
const Kd = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  rA = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"],
  sA = { rootMargin: "0px", threshold: 0 };
class lA {
  constructor({
    preLoad: t,
    error: n,
    throttleWait: a,
    preLoadTop: i,
    dispatchEvent: o,
    loading: r,
    attempt: l,
    silent: s = !0,
    scale: c,
    listenEvents: d,
    filter: u,
    adapter: f,
    observer: v,
    observerOptions: m,
  }) {
    (this.version = '"3.0.0-rc.1"'),
      (this.lazyContainerMananger = null),
      (this.mode = $n.event),
      (this.ListenerQueue = []),
      (this.TargetIndex = 0),
      (this.TargetQueue = []),
      (this.options = {
        silent: s,
        dispatchEvent: !!o,
        throttleWait: a || 200,
        preLoad: t || 1.3,
        preLoadTop: i || 0,
        error: n || Kd,
        loading: r || Kd,
        attempt: l || 3,
        scale: c || X3(c),
        listenEvents: d || rA,
        supportWebp: q3(),
        filter: u || {},
        adapter: f || {},
        observer: !!v,
        observerOptions: m || sA,
      }),
      this._initEvent(),
      (this._imageCache = new iA(200)),
      (this.lazyLoadHandler = Z3(this._lazyLoadHandler.bind(this), this.options.throttleWait)),
      this.setMode(this.options.observer ? $n.observer : $n.event);
  }
  performance() {
    const t = [];
    return this.ListenerQueue.map((n) => t.push(n.performance())), t;
  }
  addLazyBox(t) {
    this.ListenerQueue.push(t),
      Ln &&
        (this._addListenerTarget(window),
        this._observer && this._observer.observe(t.el),
        t.$el && t.$el.parentNode && this._addListenerTarget(t.$el.parentNode));
  }
  add(t, n, a) {
    if (this.ListenerQueue.some((s) => s.el === t))
      return this.update(t, n), Lt(this.lazyLoadHandler);
    let { src: i, loading: o, error: r, cors: l } = this._valueFormatter(n.value);
    Lt(() => {
      (i = Wd(t, this.options.scale) || i), this._observer && this._observer.observe(t);
      const s = Object.keys(n.modifiers)[0];
      let c;
      s && ((c = n.instance.$refs[s]), (c = c ? c.el || c : document.getElementById(s))),
        c || (c = aA(t));
      const d = new oA(
        t,
        i,
        r,
        o,
        n.arg,
        c,
        this.options,
        l,
        this._elRenderer.bind(this),
        this._imageCache
      );
      this.ListenerQueue.push(d),
        Ln && (this._addListenerTarget(window), this._addListenerTarget(c)),
        Lt(this.lazyLoadHandler);
    });
  }
  update(t, n, a) {
    let { src: i, loading: o, error: r } = this._valueFormatter(n.value);
    i = Wd(t, this.options.scale) || i;
    const l = this.ListenerQueue.find((s) => s.el === t);
    l
      ? l.update({ src: i, loading: o, error: r })
      : (t.getAttribute("lazy") !== "loaded" || t.dataset.src !== i) && this.add(t, n, a),
      this._observer && (this._observer.unobserve(t), this._observer.observe(t)),
      Lt(this.lazyLoadHandler);
  }
  remove(t) {
    if (!t) return;
    this._observer && this._observer.unobserve(t);
    const n = this.ListenerQueue.find((a) => a.el === t);
    n &&
      (this._removeListenerTarget(n.$parent),
      this._removeListenerTarget(window),
      oi(this.ListenerQueue, n),
      n.$destroy && n.$destroy());
  }
  removeComponent(t) {
    !t ||
      (oi(this.ListenerQueue, t),
      this._observer && this._observer.unobserve(t.el),
      t.$parent && t.$el.parentNode && this._removeListenerTarget(t.$el.parentNode),
      this._removeListenerTarget(window));
  }
  setMode(t) {
    !Gd && t === $n.observer && (t = $n.event),
      (this.mode = t),
      t === $n.event
        ? (this._observer &&
            (this.ListenerQueue.forEach((n) => {
              this._observer.unobserve(n.el);
            }),
            (this._observer = null)),
          this.TargetQueue.forEach((n) => {
            this._initListen(n.el, !0);
          }))
        : (this.TargetQueue.forEach((n) => {
            this._initListen(n.el, !1);
          }),
          this._initIntersectionObserver());
  }
  _addListenerTarget(t) {
    if (!t) return;
    let n = this.TargetQueue.find((a) => a.el === t);
    return (
      n
        ? n.childrenCount++
        : ((n = { el: t, id: ++this.TargetIndex, childrenCount: 1, listened: !0 }),
          this.mode === $n.event && this._initListen(n.el, !0),
          this.TargetQueue.push(n)),
      this.TargetIndex
    );
  }
  _removeListenerTarget(t) {
    this.TargetQueue.forEach((n, a) => {
      n.el === t &&
        (n.childrenCount--,
        n.childrenCount || (this._initListen(n.el, !1), this.TargetQueue.splice(a, 1), (n = null)));
    });
  }
  _initListen(t, n) {
    this.options.listenEvents.forEach((a) => tA[n ? "on" : "off"](t, a, this.lazyLoadHandler));
  }
  _initEvent() {
    (this.Event = { listeners: { loading: [], loaded: [], error: [] } }),
      (this.$on = (t, n) => {
        this.Event.listeners[t] || (this.Event.listeners[t] = []), this.Event.listeners[t].push(n);
      }),
      (this.$once = (t, n) => {
        const a = this;
        function i() {
          a.$off(t, i), n.apply(a, arguments);
        }
        this.$on(t, i);
      }),
      (this.$off = (t, n) => {
        if (!n) {
          if (!this.Event.listeners[t]) return;
          this.Event.listeners[t].length = 0;
          return;
        }
        oi(this.Event.listeners[t], n);
      }),
      (this.$emit = (t, n, a) => {
        !this.Event.listeners[t] || this.Event.listeners[t].forEach((i) => i(n, a));
      });
  }
  _lazyLoadHandler() {
    const t = [];
    this.ListenerQueue.forEach((n, a) => {
      (!n.el || !n.el.parentNode || n.state.loaded) && t.push(n),
        n.checkInView() && (n.state.loaded || n.load());
    }),
      t.forEach((n) => {
        oi(this.ListenerQueue, n), n.$destroy && n.$destroy();
      });
  }
  _initIntersectionObserver() {
    !Gd ||
      ((this._observer = new IntersectionObserver(
        this._observerHandler.bind(this),
        this.options.observerOptions
      )),
      this.ListenerQueue.length &&
        this.ListenerQueue.forEach((t) => {
          this._observer.observe(t.el);
        }));
  }
  _observerHandler(t) {
    t.forEach((n) => {
      n.isIntersecting &&
        this.ListenerQueue.forEach((a) => {
          if (a.el === n.target) {
            if (a.state.loaded) return this._observer.unobserve(a.el);
            a.load();
          }
        });
    });
  }
  _elRenderer(t, n, a) {
    if (!t.el) return;
    const { el: i, bindType: o } = t;
    let r;
    switch (n) {
      case "loading":
        r = t.loading;
        break;
      case "error":
        r = t.error;
        break;
      default:
        r = t.src;
        break;
    }
    if (
      (o
        ? (i.style[o] = 'url("' + r + '")')
        : i.getAttribute("src") !== r && i.setAttribute("src", r),
      i.setAttribute("lazy", n),
      this.$emit(n, t, a),
      this.options.adapter[n] && this.options.adapter[n](t, this.options),
      this.options.dispatchEvent)
    ) {
      const l = new CustomEvent(n, { detail: t });
      i.dispatchEvent(l);
    }
  }
  _valueFormatter(t) {
    return typeof t == "object"
      ? (!t.src &&
          !this.options.silent &&
          console.error("Vue Lazyload warning: miss src with " + t),
        {
          src: t.src,
          loading: t.loading || this.options.loading,
          error: t.error || this.options.error,
          cors: this.options.cors,
        })
      : {
          src: t,
          loading: this.options.loading,
          error: this.options.error,
          cors: this.options.cors,
        };
  }
}
const Oh = (e, t) => {
  let n = Ct({});
  const a = () => {
    n = e.value.getBoundingClientRect();
  };
  return {
    rect: n,
    checkInView: () => (
      a(),
      Ln &&
        n.top < window.innerHeight * t &&
        n.bottom > 0 &&
        n.left < window.innerWidth * t &&
        n.right > 0
    ),
  };
};
var cA = (e) =>
  Ue({
    props: { tag: { type: String, default: "div" } },
    emits: ["show"],
    setup(t, { emit: n, slots: a }) {
      const i = me(),
        o = Ct({ loaded: !1, error: !1, attempt: 0 }),
        r = me(!1),
        { rect: l, checkInView: s } = Oh(i, e.options.preLoad),
        c = () => {
          (r.value = !0), (o.loaded = !0), n("show", r.value);
        },
        d = Oe(() => ({ el: i.value, rect: l, checkInView: s, load: c, state: o }));
      return (
        at(() => {
          e.addLazyBox(d.value), e.lazyLoadHandler();
        }),
        fa(() => {
          e.removeComponent(d.value);
        }),
        () => {
          var u;
          return oe(t.tag, { ref: i }, [
            r.value && ((u = a.default) === null || u === void 0 ? void 0 : u.call(a)),
          ]);
        }
      );
    },
  });
class dA {
  constructor(t) {
    (this.lazy = t), (t.lazyContainerMananger = this), (this._queue = []);
  }
  bind(t, n, a) {
    const i = new fA(t, n, a, this.lazy);
    this._queue.push(i);
  }
  update(t, n, a) {
    const i = this._queue.find((o) => o.el === t);
    !i || i.update(t, n);
  }
  unbind(t, n, a) {
    const i = this._queue.find((o) => o.el === t);
    !i || (i.clear(), oi(this._queue, i));
  }
}
const uA = { selector: "img", error: "", loading: "" };
class fA {
  constructor(t, n, a, i) {
    (this.el = t),
      (this.vnode = a),
      (this.binding = n),
      (this.options = {}),
      (this.lazy = i),
      (this._queue = []),
      this.update(t, n);
  }
  update(t, n) {
    (this.el = t),
      (this.options = Ud({}, uA, n.value)),
      this.getImgs().forEach((i) => {
        this.lazy.add(
          i,
          Ud({}, this.binding, {
            value: {
              src: i.getAttribute("data-src") || i.dataset.src,
              error: i.getAttribute("data-error") || i.dataset.error || this.options.error,
              loading: i.getAttribute("data-loading") || i.dataset.loading || this.options.loading,
            },
          }),
          this.vnode
        );
      });
  }
  getImgs() {
    return Array.from(this.el.querySelectorAll(this.options.selector));
  }
  clear() {
    this.getImgs().forEach((n) => this.lazy.remove(n)),
      (this.vnode = null),
      (this.binding = null),
      (this.lazy = null);
  }
}
var pA = (e) =>
    Ue({
      setup(t, { slots: n }) {
        const a = me(),
          i = Ct({ src: "", error: "", loading: "", attempt: e.options.attempt }),
          o = Ct({ loaded: !1, error: !1, attempt: 0 }),
          { rect: r, checkInView: l } = Oh(a, e.options.preLoad),
          s = me(""),
          c = (f = Xl) => {
            if (o.attempt > i.attempt - 1 && o.error)
              return (
                e.options.silent ||
                  console.log(`VueLazyload log: ${i.src} tried too more than ${i.attempt} times`),
                f()
              );
            const v = i.src;
            js(
              { src: v },
              ({ src: m }) => {
                (s.value = m), (o.loaded = !0);
              },
              () => {
                o.attempt++, (s.value = i.error), (o.error = !0);
              }
            );
          },
          d = Oe(() => ({ el: a.value, rect: r, checkInView: l, load: c, state: o }));
        at(() => {
          e.addLazyBox(d.value), e.lazyLoadHandler();
        }),
          fa(() => {
            e.removeComponent(d.value);
          });
        const u = () => {
          const { src: f, loading: v, error: m } = e._valueFormatter(t.src);
          (o.loaded = !1), (i.src = f), (i.error = m), (i.loading = v), (s.value = i.loading);
        };
        return (
          Nt(
            () => t.src,
            () => {
              u(), e.addLazyBox(d.value), e.lazyLoadHandler();
            },
            { immediate: !0 }
          ),
          () => {
            var f;
            return oe(t.tag || "img", { src: s.value, ref: a }, [
              (f = n.default) === null || f === void 0 ? void 0 : f.call(n),
            ]);
          }
        );
      },
    }),
  hA = {
    install(e, t = {}) {
      const n = new lA(t),
        a = new dA(n);
      if (Number(e.version.split(".")[0]) < 3) return new Error("Vue version at least 3.0");
      (e.config.globalProperties.$Lazyload = n),
        e.provide("Lazyload", n),
        t.lazyComponent && e.component("lazy-component", cA(n)),
        t.lazyImage && e.component("lazy-image", pA(n)),
        e.directive("lazy", {
          beforeMount: n.add.bind(n),
          beforeUpdate: n.update.bind(n),
          updated: n.lazyLoadHandler.bind(n),
          unmounted: n.remove.bind(n),
        }),
        e.directive("lazy-container", {
          beforeMount: a.bind.bind(a),
          updated: a.update.bind(a),
          unmounted: a.unbind.bind(a),
        });
    },
  };
var Ph = { exports: {} };
(function (e, t) {
  (function (n, a) {
    e.exports = a();
  })(Wt, function () {
    return (function (n) {
      var a = {};
      function i(o) {
        if (a[o]) return a[o].exports;
        var r = (a[o] = { i: o, l: !1, exports: {} });
        return n[o].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
      }
      return (
        (i.m = n),
        (i.c = a),
        (i.d = function (o, r, l) {
          i.o(o, r) || Object.defineProperty(o, r, { enumerable: !0, get: l });
        }),
        (i.r = function (o) {
          typeof Symbol != "undefined" &&
            Symbol.toStringTag &&
            Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(o, "__esModule", { value: !0 });
        }),
        (i.t = function (o, r) {
          if ((1 & r && (o = i(o)), 8 & r || (4 & r && typeof o == "object" && o && o.__esModule)))
            return o;
          var l = Object.create(null);
          if (
            (i.r(l),
            Object.defineProperty(l, "default", { enumerable: !0, value: o }),
            2 & r && typeof o != "string")
          )
            for (var s in o)
              i.d(
                l,
                s,
                function (c) {
                  return o[c];
                }.bind(null, s)
              );
          return l;
        }),
        (i.n = function (o) {
          var r =
            o && o.__esModule
              ? function () {
                  return o.default;
                }
              : function () {
                  return o;
                };
          return i.d(r, "a", r), r;
        }),
        (i.o = function (o, r) {
          return Object.prototype.hasOwnProperty.call(o, r);
        }),
        (i.p = ""),
        i((i.s = 0))
      );
    })([
      function (n, a, i) {
        function o(v, m, p) {
          return (
            m in v
              ? Object.defineProperty(v, m, {
                  value: p,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (v[m] = p),
            v
          );
        }
        function r(v) {
          return (r =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (m) {
                  return typeof m;
                }
              : function (m) {
                  return m &&
                    typeof Symbol == "function" &&
                    m.constructor === Symbol &&
                    m !== Symbol.prototype
                    ? "symbol"
                    : typeof m;
                })(v);
        }
        var l;
        i.r(a);
        var s = function (v) {
            return v < 0.5 ? 4 * v * v * v : (v - 1) * (2 * v - 2) * (2 * v - 2) + 1;
          },
          c = function () {
            return {
              duration: 500,
              offset: 0,
              container: window,
              updateHistory: !0,
              easingFunction: null,
            };
          },
          d = Symbol("smoothScrollCtx"),
          u = function (v) {
            var m = v.scrollTo,
              p = v.offset,
              g = v.duration,
              b = v.container,
              h = v.updateHistory,
              w = v.hash,
              x = v.easingFunction;
            l ||
              (l =
                window.requestAnimationFrame ||
                function (A) {
                  return window.setTimeout(A, 16);
                }),
              h &&
                window.history.pushState &&
                location.hash !== w &&
                window.history.pushState("", "", w);
            var S,
              _,
              C = typeof m == "number",
              T = b.scrollTop || window.pageYOffset,
              L =
                (C
                  ? m
                  : ((_ = T),
                    (S = m).nodeName === "HTML" ? -_ : S.getBoundingClientRect().top + _)) + p,
              P = typeof x == "function" ? x : s,
              k = Date.now();
            (function A() {
              var R = Date.now() - k,
                O = R < g,
                Q = O ? T + (L - T) * P(R / g) : L;
              O ? l(A) : h && !C && location.replace("#" + m.id),
                b === window ? b.scrollTo(0, Q) : (b.scrollTop = Q);
            })();
          },
          f = {
            install: function (v, m) {
              var p,
                g = !v.version.startsWith("3"),
                b = function () {
                  return m ? Object.assign(c(), m) : c();
                };
              v.directive(
                "smooth-scroll",
                (o((p = {}), g ? "inserted" : "mounted", function (w, x, S) {
                  if (
                    (typeof window == "undefined" ? "undefined" : r(window)) === "object" &&
                    window.pageYOffset !== void 0
                  ) {
                    var _ = Object.assign(b(), x.value);
                    typeof _.container == "string" &&
                      (_.container = document.querySelector(_.container));
                    var C = function (T) {
                      T.preventDefault();
                      var L = g ? S.data.attrs.href : S.props.href,
                        P = document.getElementById(L.substring(1));
                      P && u(Object.assign(_, { scrollTo: P, hash: L }));
                    };
                    w.addEventListener("click", C), (w[d] = { clickHandler: C });
                  }
                }),
                o(p, g ? "unbind" : "unmounted", function (w) {
                  w.removeEventListener("click", w[d].clickHandler), (w[d] = null);
                }),
                p)
              );
              var h = function (w) {
                var x = Object.assign(b(), w);
                return u(x);
              };
              ((g ? v.prototype : v.config.globalProperties).$smoothScroll = h),
                g || v.provide("smoothScroll", h);
            },
          };
        a.default = f;
      },
    ]).default;
  });
})(Ph);
var mA = Cl(Ph.exports);
function Qd(e) {
  return e.type.indexOf("mouse") !== -1 ? e.clientX : e.touches[0].clientX;
}
function Xd(e) {
  return e.type.indexOf("mouse") !== -1 ? e.clientY : e.touches[0].clientY;
}
var gA = (function () {
    var e = !1;
    try {
      var t = Object.defineProperty({}, "passive", {
        get: function () {
          e = !0;
        },
      });
      window.addEventListener("test", null, t);
    } catch {}
    return e;
  })(),
  vA = {
    install: function (e, t) {
      var n = Object.assign(
        {},
        {
          disableClick: !1,
          tapTolerance: 10,
          swipeTolerance: 30,
          touchHoldTolerance: 400,
          longTapTimeInterval: 400,
          touchClass: "",
          dragFrequency: 100,
          rollOverFrequency: 100,
        },
        t
      );
      function a(p) {
        var g = this.$$touchObj,
          b = p.type.indexOf("touch") >= 0,
          h = p.type.indexOf("mouse") >= 0,
          w = this;
        b && (g.lastTouchStartTime = p.timeStamp),
          !(h && g.lastTouchStartTime && p.timeStamp - g.lastTouchStartTime < 350) &&
            (g.touchStarted ||
              (u(this),
              (g.touchStarted = !0),
              (g.touchMoved = !1),
              (g.swipeOutBounded = !1),
              (g.startX = Qd(p)),
              (g.startY = Xd(p)),
              (g.currentX = 0),
              (g.currentY = 0),
              (g.touchStartTime = p.timeStamp),
              (g.hasSwipe =
                c(this, "swipe") ||
                c(this, "swipe.left") ||
                c(this, "swipe.right") ||
                c(this, "swipe.top") ||
                c(this, "swipe.bottom")),
              c(this, "hold") &&
                (g.touchHoldTimer = setTimeout(function () {
                  (g.touchHoldTimer = null), d(p, w, "hold");
                }, g.options.touchHoldTolerance)),
              d(p, this, "press")));
      }
      function i(p) {
        var g = this.$$touchObj,
          b = Qd(p),
          h = Xd(p),
          w = g.currentX != b || g.currentY != h;
        if (((g.currentX = b), (g.currentY = h), g.touchMoved)) {
          if (g.hasSwipe && !g.swipeOutBounded) {
            var S = g.options.swipeTolerance;
            g.swipeOutBounded =
              Math.abs(g.startX - g.currentX) > S && Math.abs(g.startY - g.currentY) > S;
          }
        } else {
          var x = g.options.tapTolerance;
          (g.touchMoved =
            Math.abs(g.startX - g.currentX) > x || Math.abs(g.startY - g.currentY) > x),
            g.touchMoved && (v(g), d(p, this, "drag.once"));
        }
        if (c(this, "rollover") && w) {
          var _ = p.timeStamp,
            C = g.options.rollOverFrequency;
          (g.touchRollTime == null || _ > g.touchRollTime + C) &&
            ((g.touchRollTime = _), d(p, this, "rollover"));
        }
        if (c(this, "drag") && g.touchStarted && g.touchMoved && w) {
          var _ = p.timeStamp,
            C = g.options.dragFrequency;
          (g.touchDragTime == null || _ > g.touchDragTime + C) &&
            ((g.touchDragTime = _), d(p, this, "drag"));
        }
      }
      function o() {
        var p = this.$$touchObj;
        v(p), f(this), (p.touchStarted = p.touchMoved = !1), (p.startX = p.startY = 0);
      }
      function r(p) {
        var g = this.$$touchObj,
          b = p.type.indexOf("touch") >= 0,
          h = p.type.indexOf("mouse") >= 0;
        b && (g.lastTouchEndTime = p.timeStamp);
        var w = b && !g.touchHoldTimer;
        if (
          (v(g),
          (g.touchStarted = !1),
          f(this),
          !(h && g.lastTouchEndTime && p.timeStamp - g.lastTouchEndTime < 350))
        )
          if ((d(p, this, "release"), g.touchMoved)) {
            if (g.hasSwipe && !g.swipeOutBounded) {
              var x = g.options.swipeTolerance,
                S,
                _ = Math.abs(g.startY - g.currentY),
                C = Math.abs(g.startX - g.currentX);
              (_ > x || C > x) &&
                (_ > x
                  ? (S = g.startY > g.currentY ? "top" : "bottom")
                  : (S = g.startX > g.currentX ? "left" : "right"),
                c(this, "swipe." + S) ? d(p, this, "swipe." + S, S) : d(p, this, "swipe", S));
            }
          } else if (
            c(this, "longtap") &&
            p.timeStamp - g.touchStartTime > g.options.longTapTimeInterval
          )
            p.cancelable && p.preventDefault(), d(p, this, "longtap");
          else if (c(this, "hold") && w) {
            p.cancelable && p.preventDefault();
            return;
          } else d(p, this, "tap");
      }
      function l() {
        u(this);
      }
      function s() {
        f(this);
      }
      function c(p, g) {
        var b = p.$$touchObj.callbacks[g];
        return b != null && b.length > 0;
      }
      function d(p, g, b, h) {
        var w = g.$$touchObj,
          x = w.callbacks[b];
        if (x == null || x.length === 0) return null;
        for (var S = 0; S < x.length; S++) {
          var _ = x[S];
          _.modifiers.stop && p.stopPropagation(),
            _.modifiers.prevent && p.preventDefault(),
            !(_.modifiers.self && p.target !== p.currentTarget) &&
              typeof _.value == "function" &&
              (h ? _.value(h, p) : _.value(p));
        }
      }
      function u(p) {
        var g = p.$$touchObj.options.touchClass;
        g && p.classList.add(g);
      }
      function f(p) {
        var g = p.$$touchObj.options.touchClass;
        g && p.classList.remove(g);
      }
      function v(p) {
        p.touchHoldTimer && (clearTimeout(p.touchHoldTimer), (p.touchHoldTimer = null));
      }
      function m(p, g) {
        var b = p.$$touchObj || { callbacks: {}, hasBindTouchEvents: !1, options: n };
        return g && (b.options = Object.assign({}, b.options, g)), (p.$$touchObj = b), p.$$touchObj;
      }
      e.directive("touch", {
        beforeMount: function (p, g) {
          var b = m(p),
            h = gA ? { passive: !0 } : !1,
            w = g.arg || "tap";
          switch (w) {
            case "swipe":
              var x = g.modifiers;
              if (x.left || x.right || x.top || x.bottom) {
                for (var S in g.modifiers)
                  if (["left", "right", "top", "bottom"].indexOf(S) >= 0) {
                    var _ = "swipe." + S;
                    (b.callbacks[_] = b.callbacks[_] || []), b.callbacks[_].push(g);
                  }
              } else (b.callbacks.swipe = b.callbacks.swipe || []), b.callbacks.swipe.push(g);
              break;
            case "press":
            case "drag":
              g.modifiers.disablePassive && (h = !1);
            default:
              (b.callbacks[w] = b.callbacks[w] || []), b.callbacks[w].push(g);
          }
          b.hasBindTouchEvents ||
            (p.addEventListener("touchstart", a, h),
            p.addEventListener("touchmove", i, h),
            p.addEventListener("touchcancel", o),
            p.addEventListener("touchend", r),
            b.options.disableClick ||
              (p.addEventListener("mousedown", a),
              p.addEventListener("mousemove", i),
              p.addEventListener("mouseup", r),
              p.addEventListener("mouseenter", l),
              p.addEventListener("mouseleave", s)),
            (b.hasBindTouchEvents = !0));
        },
        unmounted: function (p) {
          p.removeEventListener("touchstart", a),
            p.removeEventListener("touchmove", i),
            p.removeEventListener("touchcancel", o),
            p.removeEventListener("touchend", r),
            p.$$touchObj &&
              !p.$$touchObj.options.disableClick &&
              (p.removeEventListener("mousedown", a),
              p.removeEventListener("mousemove", i),
              p.removeEventListener("mouseup", r),
              p.removeEventListener("mouseenter", l),
              p.removeEventListener("mouseleave", s)),
            delete p.$$touchObj;
        },
      }),
        e.directive("touch-class", {
          beforeMount: function (p, g) {
            m(p, { touchClass: g.value });
          },
        }),
        e.directive("touch-options", {
          beforeMount: function (p, g) {
            m(p, g.value);
          },
        });
    },
  },
  Ih = {},
  Vs = {},
  ql = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.assertIsGtmId = e.GTM_ID_PATTERN = void 0),
    (e.GTM_ID_PATTERN = /^GTM-[0-9A-Z]+$/);
  function t(n) {
    if (typeof n != "string" || !e.GTM_ID_PATTERN.test(n))
      throw new Error(`GTM-ID '${n}' is not valid`);
  }
  e.assertIsGtmId = t;
})(ql);
var Or = {},
  oa = {};
Object.defineProperty(oa, "__esModule", { value: !0 });
oa.hasScript = oa.loadScript = void 0;
function bA(e, t) {
  var n, a, i, o, r;
  const l = document,
    s = l.createElement("script"),
    c = (v) => {
      var m;
      (m = t.onReady) === null || m === void 0 || m.call(t, { id: e, script: s }),
        s.removeEventListener("load", c);
    };
  if (
    (s.addEventListener("load", c),
    (window.dataLayer = (n = window.dataLayer) !== null && n !== void 0 ? n : []),
    (a = window.dataLayer) === null ||
      a === void 0 ||
      a.push({ event: "gtm.js", "gtm.start": new Date().getTime() }),
    !e)
  )
    return s;
  (s.async = !t.defer),
    (s.defer = Boolean(t.defer || t.compatibility)),
    t.nonce && (s.nonce = t.nonce);
  const d = new URLSearchParams({
      id: e,
      ...((i = t.queryParams) !== null && i !== void 0 ? i : {}),
    }),
    u = (o = t.source) !== null && o !== void 0 ? o : "https://www.googletagmanager.com/gtm.js";
  s.src = `${u}?${d}`;
  const f = (r = t.parentElement) !== null && r !== void 0 ? r : l.body;
  if (typeof (f == null ? void 0 : f.appendChild) != "function")
    throw new Error("parentElement must be a DOM element");
  return f.appendChild(s), s;
}
oa.loadScript = bA;
function yA(e = "https://www.googletagmanager.com/gtm.js") {
  return Array.from(document.getElementsByTagName("script")).some((t) => t.src.includes(e));
}
oa.hasScript = yA;
Object.defineProperty(Or, "__esModule", { value: !0 });
Or.GtmSupport = void 0;
const ts = ql,
  vo = oa;
class wA {
  constructor(t) {
    if (
      ((this.scriptElements = []),
      (this.isInBrowserContext = () => typeof window != "undefined"),
      Array.isArray(t.id))
    )
      for (const n of t.id)
        typeof n == "string" ? (0, ts.assertIsGtmId)(n) : (0, ts.assertIsGtmId)(n.id);
    else (0, ts.assertIsGtmId)(t.id);
    (this.id = t.id),
      (this.options = {
        enabled: !0,
        debug: !1,
        loadScript: !0,
        defer: !1,
        compatibility: !1,
        ...t,
      }),
      delete this.options.id;
  }
  enabled() {
    var t;
    return (t = this.options.enabled) !== null && t !== void 0 ? t : !0;
  }
  enable(t = !0, n) {
    if (
      ((this.options.enabled = t),
      this.isInBrowserContext() && t && !(0, vo.hasScript)(n) && this.options.loadScript)
    )
      if (Array.isArray(this.id))
        this.id.forEach((a) => {
          let i;
          typeof a == "string"
            ? (i = (0, vo.loadScript)(a, { ...this.options }))
            : (i = (0, vo.loadScript)(a.id, { ...this.options, queryParams: a.queryParams })),
            this.scriptElements.push(i);
        });
      else {
        const a = (0, vo.loadScript)(this.id, { ...this.options });
        this.scriptElements.push(a);
      }
  }
  debugEnabled() {
    var t;
    return (t = this.options.debug) !== null && t !== void 0 ? t : !1;
  }
  debug(t) {
    this.options.debug = t;
  }
  dataLayer() {
    var t;
    return this.isInBrowserContext() && this.options.enabled
      ? (window.dataLayer = (t = window.dataLayer) !== null && t !== void 0 ? t : [])
      : !1;
  }
  trackView(t, n, a = {}) {
    var i, o, r;
    const l =
      this.isInBrowserContext() && ((i = this.options.enabled) !== null && i !== void 0 ? i : !1);
    this.options.debug &&
      console.log(`[GTM-Support${l ? "" : "(disabled)"}]: Dispatching TrackView`, {
        screenName: t,
        path: n,
      }),
      l &&
        (window.dataLayer = (o = window.dataLayer) !== null && o !== void 0 ? o : []).push({
          ...a,
          event:
            (r = this.options.trackViewEventProperty) !== null && r !== void 0 ? r : "content-view",
          "content-name": n,
          "content-view-name": t,
        });
  }
  trackEvent({
    event: t,
    category: n = null,
    action: a = null,
    label: i = null,
    value: o = null,
    noninteraction: r = !1,
    ...l
  } = {}) {
    var s, c;
    const d =
      this.isInBrowserContext() && ((s = this.options.enabled) !== null && s !== void 0 ? s : !1);
    this.options.debug &&
      console.log(`[GTM-Support${d ? "" : "(disabled)"}]: Dispatching event`, {
        event: t,
        category: n,
        action: a,
        label: i,
        value: o,
        ...l,
      }),
      d &&
        (window.dataLayer = (c = window.dataLayer) !== null && c !== void 0 ? c : []).push({
          event: t != null ? t : "interaction",
          target: n,
          action: a,
          "target-properties": i,
          value: o,
          "interaction-type": r,
          ...l,
        });
  }
}
Or.GtmSupport = wA;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.loadScript = e.hasScript = e.GtmSupport = e.GTM_ID_PATTERN = e.assertIsGtmId = void 0);
  var t = ql;
  Object.defineProperty(e, "assertIsGtmId", {
    enumerable: !0,
    get: function () {
      return t.assertIsGtmId;
    },
  }),
    Object.defineProperty(e, "GTM_ID_PATTERN", {
      enumerable: !0,
      get: function () {
        return t.GTM_ID_PATTERN;
      },
    });
  var n = Or;
  Object.defineProperty(e, "GtmSupport", {
    enumerable: !0,
    get: function () {
      return n.GtmSupport;
    },
  });
  var a = oa;
  Object.defineProperty(e, "hasScript", {
    enumerable: !0,
    get: function () {
      return a.hasScript;
    },
  }),
    Object.defineProperty(e, "loadScript", {
      enumerable: !0,
      get: function () {
        return a.loadScript;
      },
    });
})(Vs);
var _A = Yp(Ug),
  xA = Yp(Zv);
(function (e) {
  var t =
      (Wt && Wt.__assign) ||
      function () {
        return (
          (t =
            Object.assign ||
            function (v) {
              for (var m, p = 1, g = arguments.length; p < g; p++) {
                m = arguments[p];
                for (var b in m) Object.prototype.hasOwnProperty.call(m, b) && (v[b] = m[b]);
              }
              return v;
            }),
          t.apply(this, arguments)
        );
      },
    n =
      (Wt && Wt.__awaiter) ||
      function (v, m, p, g) {
        function b(h) {
          return h instanceof p
            ? h
            : new p(function (w) {
                w(h);
              });
        }
        return new (p || (p = Promise))(function (h, w) {
          function x(C) {
            try {
              _(g.next(C));
            } catch (T) {
              w(T);
            }
          }
          function S(C) {
            try {
              _(g.throw(C));
            } catch (T) {
              w(T);
            }
          }
          function _(C) {
            C.done ? h(C.value) : b(C.value).then(x, S);
          }
          _((g = g.apply(v, m || [])).next());
        });
      },
    a =
      (Wt && Wt.__generator) ||
      function (v, m) {
        var p = {
            label: 0,
            sent: function () {
              if (h[0] & 1) throw h[1];
              return h[1];
            },
            trys: [],
            ops: [],
          },
          g,
          b,
          h,
          w;
        return (
          (w = { next: x(0), throw: x(1), return: x(2) }),
          typeof Symbol == "function" &&
            (w[Symbol.iterator] = function () {
              return this;
            }),
          w
        );
        function x(_) {
          return function (C) {
            return S([_, C]);
          };
        }
        function S(_) {
          if (g) throw new TypeError("Generator is already executing.");
          for (; p; )
            try {
              if (
                ((g = 1),
                b &&
                  (h =
                    _[0] & 2
                      ? b.return
                      : _[0]
                      ? b.throw || ((h = b.return) && h.call(b), 0)
                      : b.next) &&
                  !(h = h.call(b, _[1])).done)
              )
                return h;
              switch (((b = 0), h && (_ = [_[0] & 2, h.value]), _[0])) {
                case 0:
                case 1:
                  h = _;
                  break;
                case 4:
                  return p.label++, { value: _[1], done: !1 };
                case 5:
                  p.label++, (b = _[1]), (_ = [0]);
                  continue;
                case 7:
                  (_ = p.ops.pop()), p.trys.pop();
                  continue;
                default:
                  if (
                    ((h = p.trys),
                    !(h = h.length > 0 && h[h.length - 1]) && (_[0] === 6 || _[0] === 2))
                  ) {
                    p = 0;
                    continue;
                  }
                  if (_[0] === 3 && (!h || (_[1] > h[0] && _[1] < h[3]))) {
                    p.label = _[1];
                    break;
                  }
                  if (_[0] === 6 && p.label < h[1]) {
                    (p.label = h[1]), (h = _);
                    break;
                  }
                  if (h && p.label < h[2]) {
                    (p.label = h[2]), p.ops.push(_);
                    break;
                  }
                  h[2] && p.ops.pop(), p.trys.pop();
                  continue;
              }
              _ = m.call(v, p);
            } catch (C) {
              (_ = [6, C]), (b = 0);
            } finally {
              g = h = 0;
            }
          if (_[0] & 5) throw _[1];
          return { value: _[0] ? _[1] : void 0, done: !0 };
        }
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.useGtm =
      e.GtmPlugin =
      e.loadScript =
      e.hasScript =
      e.GtmSupport =
      e.assertIsGtmId =
      e.createGtm =
        void 0);
  var i = Vs;
  Object.defineProperty(e, "GtmPlugin", {
    enumerable: !0,
    get: function () {
      return i.GtmSupport;
    },
  });
  var o = _A,
    r;
  function l(v, m) {
    m === void 0 && (m = { id: "" }),
      (m = t({ trackOnNextTick: !1 }, m)),
      (r = new i.GtmSupport(m)),
      (v.config.globalProperties.$gtm = r),
      r.isInBrowserContext() &&
        (m.vueRouter &&
          s(v, m.vueRouter, m.ignoredViews, m.trackOnNextTick, m.vueRouterAdditionalEventData),
        r.options.enabled &&
          r.options.loadScript &&
          (Array.isArray(m.id)
            ? m.id.forEach(function (p) {
                if (typeof p == "string") (0, i.loadScript)(p, m);
                else {
                  var g = t({}, m);
                  p.queryParams != null && (g.queryParams = t(t({}, g.queryParams), p.queryParams)),
                    (0, i.loadScript)(p.id, g);
                }
              })
            : (0, i.loadScript)(m.id, m))),
      v.provide("gtm", m);
  }
  function s(v, m, p, g, b) {
    return (
      p === void 0 && (p = []),
      b === void 0 &&
        (b = function () {
          return {};
        }),
      n(this, void 0, void 0, function () {
        var h,
          w = this;
        return a(this, function (x) {
          switch (x.label) {
            case 0:
              return (
                x.trys.push([0, 2, , 3]),
                [
                  4,
                  Promise.resolve().then(function () {
                    return xA;
                  }),
                ]
              );
            case 1:
              return (h = x.sent()), [3, 3];
            case 2:
              return (
                x.sent(),
                console.warn(
                  "[VueGtm]: You tried to register 'vueRouter' for vue-gtm, but 'vue-router' was not found."
                ),
                [2]
              );
            case 3:
              return (
                m.afterEach(function (S, _, C) {
                  return n(w, void 0, void 0, function () {
                    var T, L, P, k, A, R, O, Q, $;
                    return a(this, function (ee) {
                      switch (ee.label) {
                        case 0:
                          return typeof S.name != "string" ||
                            (Array.isArray(p) && p.includes(S.name)) ||
                            (typeof p == "function" && p(S, _))
                            ? [2]
                            : ((T =
                                S.meta && typeof S.meta.gtm == "string" && !!S.meta.gtm
                                  ? S.meta.gtm
                                  : S.name),
                              h.isNavigationFailure(C, h.NavigationFailureType.aborted)
                                ? r != null &&
                                  r.debugEnabled() &&
                                  console.log(
                                    "[VueGtm]: '".concat(
                                      T,
                                      "' not tracked due to navigation aborted"
                                    )
                                  )
                                : h.isNavigationFailure(C, h.NavigationFailureType.cancelled) &&
                                  r != null &&
                                  r.debugEnabled() &&
                                  console.log(
                                    "[VueGtm]: '".concat(
                                      T,
                                      "' not tracked due to navigation cancelled"
                                    )
                                  ),
                              (P = [{}]),
                              [4, b(S, _)]);
                        case 1:
                          return (
                            (L = t.apply(void 0, [
                              t.apply(void 0, P.concat([ee.sent()])),
                              (R = S.meta) === null || R === void 0
                                ? void 0
                                : R.gtmAdditionalEventData,
                            ])),
                            (k =
                              ($ =
                                (Q =
                                  (O = m.options) === null || O === void 0 ? void 0 : O.history) ===
                                  null || Q === void 0
                                  ? void 0
                                  : Q.base) !== null && $ !== void 0
                                ? $
                                : ""),
                            (A = k),
                            A.endsWith("/") || (A += "/"),
                            (A += S.fullPath.startsWith("/") ? S.fullPath.substr(1) : S.fullPath),
                            g
                              ? (0, o.nextTick)(function () {
                                  r == null || r.trackView(T, A, L);
                                })
                              : r == null || r.trackView(T, A, L),
                            [2]
                          );
                      }
                    });
                  });
                }),
                [2]
              );
          }
        });
      })
    );
  }
  function c(v) {
    return {
      install: function (m) {
        return l(m, v);
      },
    };
  }
  e.createGtm = c;
  var d = { install: l },
    u = Vs;
  Object.defineProperty(e, "assertIsGtmId", {
    enumerable: !0,
    get: function () {
      return u.assertIsGtmId;
    },
  }),
    Object.defineProperty(e, "GtmSupport", {
      enumerable: !0,
      get: function () {
        return u.GtmSupport;
      },
    }),
    Object.defineProperty(e, "hasScript", {
      enumerable: !0,
      get: function () {
        return u.hasScript;
      },
    }),
    Object.defineProperty(e, "loadScript", {
      enumerable: !0,
      get: function () {
        return u.loadScript;
      },
    }),
    (e.default = d);
  function f() {
    return r;
  }
  e.useGtm = f;
})(Ih);
const AA = { transition: "Vue-Toastification__fade", maxToasts: 5, newestOnTop: !0 };
yl(Kg)
  .use(k2, AA)
  .use(I5)
  .use(mA)
  .use(W3)
  .use(Ed)
  .use(vA)
  .use(hA, { preLoad: 2, lazyComponent: !0, attempt: 1 })
  .use(
    Ih.createGtm({
      id: Ne.gtmCode,
      defer: !1,
      compatibility: !0,
      enabled: !0,
      debug: !0,
      loadScript: !0,
      vueRouter: Ed,
      trackOnNextTick: !1,
    })
  )
  .mount("#app");
export { _t as _, rn as a, B as b, ie as c, K as o, on as p };
