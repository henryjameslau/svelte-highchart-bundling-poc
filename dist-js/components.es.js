const nf = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(nf);
let Ms = !1;
function of() {
  Ms = !0;
}
of();
const af = 1, lf = 2, hf = 16, df = 1, cf = 2, pf = 4, uf = 8, ff = 16, gf = 1, mf = 2, _e = Symbol(), xf = !1;
var Nl = Array.isArray, zl = Array.from, wr = Object.getOwnPropertyDescriptor, yf = Object.getOwnPropertyDescriptors, vf = Object.prototype, bf = Array.prototype, Wl = Object.getPrototypeOf;
function kf(y) {
  return y();
}
function qn(y) {
  for (var k = 0; k < y.length; k++)
    y[k]();
}
const Ue = 2, Fl = 4, Lr = 8, io = 16, Ve = 32, _r = 64, $n = 128, Ei = 256, Sr = 512, Pe = 1024, vi = 2048, Ki = 4096, ti = 8192, Zi = 16384, wf = 32768, so = 65536, Mf = 1 << 17, Sf = 1 << 19, Hl = 1 << 20, Pi = Symbol("$state"), Cf = Symbol("legacy props");
function Xl(y) {
  return y === this.v;
}
function Tf(y, k) {
  return y != y ? k == k : y !== k || y !== null && typeof y == "object" || typeof y == "function";
}
function ro(y) {
  return !Tf(y, this.v);
}
function Af(y) {
  throw new Error("effect_in_teardown");
}
function Pf() {
  throw new Error("effect_in_unowned_derived");
}
function Ef(y) {
  throw new Error("effect_orphan");
}
function Of() {
  throw new Error("effect_update_depth_exceeded");
}
function Lf(y) {
  throw new Error("props_invalid_value");
}
function _f() {
  throw new Error("state_descriptors_fixed");
}
function If() {
  throw new Error("state_prototype_fixed");
}
function Df() {
  throw new Error("state_unsafe_local_read");
}
function Bf() {
  throw new Error("state_unsafe_mutation");
}
function ze(y) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: y,
    reactions: null,
    equals: Xl,
    version: 0
  };
}
// @__NO_SIDE_EFFECTS__
function no(y, k = !1) {
  var O;
  const w = ze(y);
  return k || (w.equals = ro), Ms && Kt !== null && Kt.l !== null && ((O = Kt.l).s ?? (O.s = [])).push(w), w;
}
function Vn(y, k = !1) {
  return /* @__PURE__ */ Rf(/* @__PURE__ */ no(y, k));
}
// @__NO_SIDE_EFFECTS__
function Rf(y) {
  return Bt !== null && Bt.f & Ue && (ei === null ? Uf([y]) : ei.push(y)), y;
}
function De(y, k) {
  return Bt !== null && po() && Bt.f & (Ue | io) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ei === null || !ei.includes(y)) && Bf(), Yl(y, k);
}
function Yl(y, k) {
  return y.equals(k) || (y.v = k, y.version = ih(), Gl(y, vi), po() && Mt !== null && Mt.f & Pe && !(Mt.f & Ve) && (be !== null && be.includes(y) ? (ii(Mt, vi), Br(Mt)) : yi === null ? Vf([y]) : yi.push(y))), k;
}
function Gl(y, k) {
  var w = y.reactions;
  if (w !== null)
    for (var O = po(), I = w.length, N = 0; N < I; N++) {
      var H = w[N], Z = H.f;
      Z & vi || !O && H === Mt || (ii(H, k), Z & (Pe | Ei) && (Z & Ue ? Gl(
        /** @type {Derived} */
        H,
        Ki
      ) : Br(
        /** @type {Effect} */
        H
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Cr(y) {
  var k = Ue | vi;
  Mt === null ? k |= Ei : Mt.f |= Hl;
  var w = Bt !== null && Bt.f & Ue ? (
    /** @type {Derived} */
    Bt
  ) : null;
  const O = {
    children: null,
    ctx: Kt,
    deps: null,
    equals: Xl,
    f: k,
    fn: y,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: w ?? Mt
  };
  return w !== null && (w.children ?? (w.children = [])).push(O), O;
}
// @__NO_SIDE_EFFECTS__
function Nf(y) {
  const k = /* @__PURE__ */ Cr(y);
  return k.equals = ro, k;
}
function jl(y) {
  var k = y.children;
  if (k !== null) {
    y.children = null;
    for (var w = 0; w < k.length; w += 1) {
      var O = k[w];
      O.f & Ue ? oo(
        /** @type {Derived} */
        O
      ) : Ji(
        /** @type {Effect} */
        O
      );
    }
  }
}
function zf(y) {
  for (var k = y.parent; k !== null; ) {
    if (!(k.f & Ue))
      return (
        /** @type {Effect} */
        k
      );
    k = k.parent;
  }
  return null;
}
function Ul(y) {
  var k, w = Mt;
  $i(zf(y));
  try {
    jl(y), k = sh(y);
  } finally {
    $i(w);
  }
  return k;
}
function Vl(y) {
  var k = Ul(y), w = (Vi || y.f & Ei) && y.deps !== null ? Ki : Pe;
  ii(y, w), y.equals(k) || (y.v = k, y.version = ih());
}
function oo(y) {
  jl(y), ks(y, 0), ii(y, Zi), y.v = y.children = y.deps = y.ctx = y.reactions = null;
}
function ql(y) {
  Mt === null && Bt === null && Ef(), Bt !== null && Bt.f & Ei && Pf(), co && Af();
}
function Wf(y, k) {
  var w = k.last;
  w === null ? k.last = k.first = y : (w.next = y, y.prev = w, k.last = y);
}
function Ir(y, k, w, O = !0) {
  var I = (y & _r) !== 0, N = Mt, H = {
    ctx: Kt,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: y | vi,
    first: null,
    fn: k,
    last: null,
    next: null,
    parent: I ? null : N,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (w) {
    var Z = qi;
    try {
      Pl(!0), Ss(H), H.f |= wf;
    } catch (F) {
      throw Ji(H), F;
    } finally {
      Pl(Z);
    }
  } else k !== null && Br(H);
  var R = w && H.deps === null && H.first === null && H.nodes_start === null && H.teardown === null && (H.f & Hl) === 0;
  if (!R && !I && O && (N !== null && Wf(H, N), Bt !== null && Bt.f & Ue)) {
    var X = (
      /** @type {Derived} */
      Bt
    );
    (X.children ?? (X.children = [])).push(H);
  }
  return H;
}
function Al(y) {
  ql();
  var k = Mt !== null && (Mt.f & Ve) !== 0 && Kt !== null && !Kt.m;
  if (k) {
    var w = (
      /** @type {ComponentContext} */
      Kt
    );
    (w.e ?? (w.e = [])).push({
      fn: y,
      effect: Mt,
      reaction: Bt
    });
  } else {
    var O = ao(y);
    return O;
  }
}
function Ff(y) {
  return ql(), Dr(y);
}
function ao(y) {
  return Ir(Fl, y, !1);
}
function Hf(y, k) {
  var w = (
    /** @type {ComponentContextLegacy} */
    Kt
  ), O = { effect: null, ran: !1 };
  w.l.r1.push(O), O.effect = Dr(() => {
    y(), !O.ran && (O.ran = !0, De(w.l.r2, !0), ws(k));
  });
}
function Xf() {
  var y = (
    /** @type {ComponentContextLegacy} */
    Kt
  );
  Dr(() => {
    if ($t(y.l.r2)) {
      for (var k of y.l.r1) {
        var w = k.effect;
        w.f & Pe && ii(w, Ki), Qi(w) && Ss(w), k.ran = !1;
      }
      y.l.r2.v = !1;
    }
  });
}
function Dr(y) {
  return Ir(Lr, y, !0);
}
function xr(y) {
  return lo(y);
}
function lo(y, k = 0) {
  return Ir(Lr | io | k, y, !0);
}
function Tr(y, k = !0) {
  return Ir(Lr | Ve, y, !0, k);
}
function $l(y) {
  var k = y.teardown;
  if (k !== null) {
    const w = co, O = Bt;
    El(!0), Er(null);
    try {
      k.call(null);
    } finally {
      El(w), Er(O);
    }
  }
}
function Kl(y) {
  var k = y.deriveds;
  if (k !== null) {
    y.deriveds = null;
    for (var w = 0; w < k.length; w += 1)
      oo(k[w]);
  }
}
function Zl(y, k = !1) {
  var w = y.first;
  for (y.first = y.last = null; w !== null; ) {
    var O = w.next;
    Ji(w, k), w = O;
  }
}
function Yf(y) {
  for (var k = y.first; k !== null; ) {
    var w = k.next;
    k.f & Ve || Ji(k), k = w;
  }
}
function Ji(y, k = !0) {
  var w = !1;
  if ((k || y.f & Sf) && y.nodes_start !== null) {
    for (var O = y.nodes_start, I = y.nodes_end; O !== null; ) {
      var N = O === I ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Rr(O)
      );
      O.remove(), O = N;
    }
    w = !0;
  }
  Zl(y, k && !w), Kl(y), ks(y, 0), ii(y, Zi);
  var H = y.transitions;
  if (H !== null)
    for (const R of H)
      R.stop();
  $l(y);
  var Z = y.parent;
  Z !== null && Z.first !== null && Jl(y), y.next = y.prev = y.teardown = y.ctx = y.deps = y.fn = y.nodes_start = y.nodes_end = null;
}
function Jl(y) {
  var k = y.parent, w = y.prev, O = y.next;
  w !== null && (w.next = O), O !== null && (O.prev = w), k !== null && (k.first === y && (k.first = O), k.last === y && (k.last = w));
}
function Kn(y, k) {
  var w = [];
  ho(y, w, !0), Ql(w, () => {
    Ji(y), k && k();
  });
}
function Ql(y, k) {
  var w = y.length;
  if (w > 0) {
    var O = () => --w || k();
    for (var I of y)
      I.out(O);
  } else
    k();
}
function ho(y, k, w) {
  if (!(y.f & ti)) {
    if (y.f ^= ti, y.transitions !== null)
      for (const H of y.transitions)
        (H.is_global || w) && k.push(H);
    for (var O = y.first; O !== null; ) {
      var I = O.next, N = (O.f & so) !== 0 || (O.f & Ve) !== 0;
      ho(O, k, N ? w : !1), O = I;
    }
  }
}
function Ar(y) {
  th(y, !0);
}
function th(y, k) {
  if (y.f & ti) {
    Qi(y) && Ss(y), y.f ^= ti;
    for (var w = y.first; w !== null; ) {
      var O = w.next, I = (w.f & so) !== 0 || (w.f & Ve) !== 0;
      th(w, I ? k : !1), w = O;
    }
    if (y.transitions !== null)
      for (const N of y.transitions)
        (N.is_global || k) && N.in();
  }
}
let Zn = !1, Jn = [];
function Gf() {
  Zn = !1;
  const y = Jn.slice();
  Jn = [], qn(y);
}
function jf(y) {
  Zn || (Zn = !0, queueMicrotask(Gf)), Jn.push(y);
}
let Mr = !1, Pr = !1, qi = !1, co = !1;
function Pl(y) {
  qi = y;
}
function El(y) {
  co = y;
}
let Qn = [], bs = 0;
let Bt = null;
function Er(y) {
  Bt = y;
}
let Mt = null;
function $i(y) {
  Mt = y;
}
let ei = null;
function Uf(y) {
  ei = y;
}
let be = null, Ie = 0, yi = null;
function Vf(y) {
  yi = y;
}
let eh = 0, Vi = !1, Kt = null;
function ih() {
  return ++eh;
}
function po() {
  return !Ms || Kt !== null && Kt.l === null;
}
function Qi(y) {
  var H, Z;
  var k = y.f;
  if (k & vi)
    return !0;
  if (k & Ki) {
    var w = y.deps, O = (k & Ei) !== 0;
    if (w !== null) {
      var I;
      if (k & Sr) {
        for (I = 0; I < w.length; I++)
          ((H = w[I]).reactions ?? (H.reactions = [])).push(y);
        y.f ^= Sr;
      }
      for (I = 0; I < w.length; I++) {
        var N = w[I];
        if (Qi(
          /** @type {Derived} */
          N
        ) && Vl(
          /** @type {Derived} */
          N
        ), O && Mt !== null && !Vi && !((Z = N == null ? void 0 : N.reactions) != null && Z.includes(y)) && (N.reactions ?? (N.reactions = [])).push(y), N.version > y.version)
          return !0;
      }
    }
    O || ii(y, Pe);
  }
  return !1;
}
function qf(y, k) {
  for (var w = k; w !== null; ) {
    if (w.f & $n)
      try {
        w.fn(y);
        return;
      } catch {
        w.f ^= $n;
      }
    w = w.parent;
  }
  throw Mr = !1, y;
}
function $f(y) {
  return (y.f & Zi) === 0 && (y.parent === null || (y.parent.f & $n) === 0);
}
function uo(y, k, w, O) {
  if (Mr) {
    if (w === null && (Mr = !1), $f(k))
      throw y;
    return;
  }
  w !== null && (Mr = !0);
  {
    qf(y, k);
    return;
  }
}
function sh(y) {
  var q;
  var k = be, w = Ie, O = yi, I = Bt, N = Vi, H = ei, Z = Kt, R = y.f;
  be = /** @type {null | Value[]} */
  null, Ie = 0, yi = null, Bt = R & (Ve | _r) ? null : y, Vi = !qi && (R & Ei) !== 0, ei = null, Kt = y.ctx;
  try {
    var X = (
      /** @type {Function} */
      (0, y.fn)()
    ), F = y.deps;
    if (be !== null) {
      var j;
      if (ks(y, Ie), F !== null && Ie > 0)
        for (F.length = Ie + be.length, j = 0; j < be.length; j++)
          F[Ie + j] = be[j];
      else
        y.deps = F = be;
      if (!Vi)
        for (j = Ie; j < F.length; j++)
          ((q = F[j]).reactions ?? (q.reactions = [])).push(y);
    } else F !== null && Ie < F.length && (ks(y, Ie), F.length = Ie);
    return X;
  } finally {
    be = k, Ie = w, yi = O, Bt = I, Vi = N, ei = H, Kt = Z;
  }
}
function Kf(y, k) {
  let w = k.reactions;
  if (w !== null) {
    var O = w.indexOf(y);
    if (O !== -1) {
      var I = w.length - 1;
      I === 0 ? w = k.reactions = null : (w[O] = w[I], w.pop());
    }
  }
  w === null && k.f & Ue && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (be === null || !be.includes(k)) && (ii(k, Ki), k.f & (Ei | Sr) || (k.f ^= Sr), ks(
    /** @type {Derived} **/
    k,
    0
  ));
}
function ks(y, k) {
  var w = y.deps;
  if (w !== null)
    for (var O = k; O < w.length; O++)
      Kf(y, w[O]);
}
function Ss(y) {
  var k = y.f;
  if (!(k & Zi)) {
    ii(y, Pe);
    var w = Mt, O = Kt;
    Mt = y;
    try {
      k & io ? Yf(y) : Zl(y), Kl(y), $l(y);
      var I = sh(y);
      y.teardown = typeof I == "function" ? I : null, y.version = eh;
    } catch (N) {
      uo(N, y, w, O || y.ctx);
    } finally {
      Mt = w;
    }
  }
}
function Zf() {
  bs > 1e3 && (bs = 0, Of()), bs++;
}
function Jf(y) {
  var k = y.length;
  if (k !== 0) {
    Zf();
    var w = qi;
    qi = !0;
    try {
      for (var O = 0; O < k; O++) {
        var I = y[O];
        I.f & Pe || (I.f ^= Pe);
        var N = [];
        rh(I, N), Qf(N);
      }
    } finally {
      qi = w;
    }
  }
}
function Qf(y) {
  var k = y.length;
  if (k !== 0)
    for (var w = 0; w < k; w++) {
      var O = y[w];
      if (!(O.f & (Zi | ti)))
        try {
          Qi(O) && (Ss(O), O.deps === null && O.first === null && O.nodes_start === null && (O.teardown === null ? Jl(O) : O.fn = null));
        } catch (I) {
          uo(I, O, null, O.ctx);
        }
    }
}
function tg() {
  if (Pr = !1, bs > 1001)
    return;
  const y = Qn;
  Qn = [], Jf(y), Pr || (bs = 0);
}
function Br(y) {
  Pr || (Pr = !0, queueMicrotask(tg));
  for (var k = y; k.parent !== null; ) {
    k = k.parent;
    var w = k.f;
    if (w & (_r | Ve)) {
      if (!(w & Pe)) return;
      k.f ^= Pe;
    }
  }
  Qn.push(k);
}
function rh(y, k) {
  var w = y.first, O = [];
  t: for (; w !== null; ) {
    var I = w.f, N = (I & Ve) !== 0, H = N && (I & Pe) !== 0, Z = w.next;
    if (!H && !(I & ti))
      if (I & Lr) {
        if (N)
          w.f ^= Pe;
        else
          try {
            Qi(w) && Ss(w);
          } catch (j) {
            uo(j, w, null, w.ctx);
          }
        var R = w.first;
        if (R !== null) {
          w = R;
          continue;
        }
      } else I & Fl && O.push(w);
    if (Z === null) {
      let j = w.parent;
      for (; j !== null; ) {
        if (y === j)
          break t;
        var X = j.next;
        if (X !== null) {
          w = X;
          continue t;
        }
        j = j.parent;
      }
    }
    w = Z;
  }
  for (var F = 0; F < O.length; F++)
    R = O[F], k.push(R), rh(R, k);
}
function $t(y) {
  var F;
  var k = y.f, w = (k & Ue) !== 0;
  if (w && k & Zi) {
    var O = Ul(
      /** @type {Derived} */
      y
    );
    return oo(
      /** @type {Derived} */
      y
    ), O;
  }
  if (Bt !== null) {
    ei !== null && ei.includes(y) && Df();
    var I = Bt.deps;
    be === null && I !== null && I[Ie] === y ? Ie++ : be === null ? be = [y] : be.push(y), yi !== null && Mt !== null && Mt.f & Pe && !(Mt.f & Ve) && yi.includes(y) && (ii(Mt, vi), Br(Mt));
  } else if (w && /** @type {Derived} */
  y.deps === null)
    for (var N = (
      /** @type {Derived} */
      y
    ), H = N.parent, Z = N; H !== null; )
      if (H.f & Ue) {
        var R = (
          /** @type {Derived} */
          H
        );
        Z = R, H = R.parent;
      } else {
        var X = (
          /** @type {Effect} */
          H
        );
        (F = X.deriveds) != null && F.includes(Z) || (X.deriveds ?? (X.deriveds = [])).push(Z);
        break;
      }
  return w && (N = /** @type {Derived} */
  y, Qi(N) && Vl(N)), y.v;
}
function ws(y) {
  const k = Bt;
  try {
    return Bt = null, y();
  } finally {
    Bt = k;
  }
}
const eg = ~(vi | Ki | Pe);
function ii(y, k) {
  y.f = y.f & eg | k;
}
function ig(y, k = !1, w) {
  Kt = {
    p: Kt,
    c: null,
    e: null,
    m: !1,
    s: y,
    x: null,
    l: null
  }, Ms && !k && (Kt.l = {
    s: null,
    u: null,
    r1: [],
    r2: ze(!1)
  });
}
function sg(y) {
  const k = Kt;
  if (k !== null) {
    const H = k.e;
    if (H !== null) {
      var w = Mt, O = Bt;
      k.e = null;
      try {
        for (var I = 0; I < H.length; I++) {
          var N = H[I];
          $i(N.effect), Er(N.reaction), ao(N.fn);
        }
      } finally {
        $i(w), Er(O);
      }
    }
    Kt = k.p, k.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function to(y) {
  if (!(typeof y != "object" || !y || y instanceof EventTarget)) {
    if (Pi in y)
      eo(y);
    else if (!Array.isArray(y))
      for (let k in y) {
        const w = y[k];
        typeof w == "object" && w && Pi in w && eo(w);
      }
  }
}
function eo(y, k = /* @__PURE__ */ new Set()) {
  if (typeof y == "object" && y !== null && // We don't want to traverse DOM elements
  !(y instanceof EventTarget) && !k.has(y)) {
    k.add(y), y instanceof Date && y.getTime();
    for (let O in y)
      try {
        eo(y[O], k);
      } catch {
      }
    const w = Wl(y);
    if (w !== Object.prototype && w !== Array.prototype && w !== Map.prototype && w !== Set.prototype && w !== Date.prototype) {
      const O = yf(w);
      for (let I in O) {
        const N = O[I].get;
        if (N)
          try {
            N.call(y);
          } catch {
          }
      }
    }
  }
}
function Ui(y, k = null, w) {
  if (typeof y != "object" || y === null || Pi in y)
    return y;
  const O = Wl(y);
  if (O !== vf && O !== bf)
    return y;
  var I = /* @__PURE__ */ new Map(), N = Nl(y), H = ze(0);
  N && I.set("length", ze(
    /** @type {any[]} */
    y.length
  ));
  var Z;
  return new Proxy(
    /** @type {any} */
    y,
    {
      defineProperty(R, X, F) {
        (!("value" in F) || F.configurable === !1 || F.enumerable === !1 || F.writable === !1) && _f();
        var j = I.get(X);
        return j === void 0 ? (j = ze(F.value), I.set(X, j)) : De(j, Ui(F.value, Z)), !0;
      },
      deleteProperty(R, X) {
        var F = I.get(X);
        if (F === void 0)
          X in R && I.set(X, ze(_e));
        else {
          if (N && typeof X == "string") {
            var j = (
              /** @type {Source<number>} */
              I.get("length")
            ), q = Number(X);
            Number.isInteger(q) && q < j.v && De(j, q);
          }
          De(F, _e), Ol(H);
        }
        return !0;
      },
      get(R, X, F) {
        var xt;
        if (X === Pi)
          return y;
        var j = I.get(X), q = X in R;
        if (j === void 0 && (!q || (xt = wr(R, X)) != null && xt.writable) && (j = ze(Ui(q ? R[X] : _e, Z)), I.set(X, j)), j !== void 0) {
          var et = $t(j);
          return et === _e ? void 0 : et;
        }
        return Reflect.get(R, X, F);
      },
      getOwnPropertyDescriptor(R, X) {
        var F = Reflect.getOwnPropertyDescriptor(R, X);
        if (F && "value" in F) {
          var j = I.get(X);
          j && (F.value = $t(j));
        } else if (F === void 0) {
          var q = I.get(X), et = q == null ? void 0 : q.v;
          if (q !== void 0 && et !== _e)
            return {
              enumerable: !0,
              configurable: !0,
              value: et,
              writable: !0
            };
        }
        return F;
      },
      has(R, X) {
        var et;
        if (X === Pi)
          return !0;
        var F = I.get(X), j = F !== void 0 && F.v !== _e || Reflect.has(R, X);
        if (F !== void 0 || Mt !== null && (!j || (et = wr(R, X)) != null && et.writable)) {
          F === void 0 && (F = ze(j ? Ui(R[X], Z) : _e), I.set(X, F));
          var q = $t(F);
          if (q === _e)
            return !1;
        }
        return j;
      },
      set(R, X, F, j) {
        var ne;
        var q = I.get(X), et = X in R;
        if (N && X === "length")
          for (var xt = F; xt < /** @type {Source<number>} */
          q.v; xt += 1) {
            var Zt = I.get(xt + "");
            Zt !== void 0 ? De(Zt, _e) : xt in R && (Zt = ze(_e), I.set(xt + "", Zt));
          }
        q === void 0 ? (!et || (ne = wr(R, X)) != null && ne.writable) && (q = ze(void 0), De(q, Ui(F, Z)), I.set(X, q)) : (et = q.v !== _e, De(q, Ui(F, Z)));
        var ct = Reflect.getOwnPropertyDescriptor(R, X);
        if (ct != null && ct.set && ct.set.call(j, F), !et) {
          if (N && typeof X == "string") {
            var ot = (
              /** @type {Source<number>} */
              I.get("length")
            ), St = Number(X);
            Number.isInteger(St) && St >= ot.v && De(ot, St + 1);
          }
          Ol(H);
        }
        return !0;
      },
      ownKeys(R) {
        $t(H);
        var X = Reflect.ownKeys(R).filter((q) => {
          var et = I.get(q);
          return et === void 0 || et.v !== _e;
        });
        for (var [F, j] of I)
          j.v !== _e && !(F in R) && X.push(F);
        return X;
      },
      setPrototypeOf() {
        If();
      }
    }
  );
}
function Ol(y, k = 1) {
  De(y, y.v + k);
}
var rg, ng;
function og(y = "") {
  return document.createTextNode(y);
}
// @__NO_SIDE_EFFECTS__
function Or(y) {
  return rg.call(y);
}
// @__NO_SIDE_EFFECTS__
function Rr(y) {
  return ng.call(y);
}
function yr(y, k) {
  return /* @__PURE__ */ Or(y);
}
function ag(y, k) {
  {
    var w = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Or(
        /** @type {Node} */
        y
      )
    );
    return w instanceof Comment && w.data === "" ? /* @__PURE__ */ Rr(w) : w;
  }
}
function vs(y, k = 1, w = !1) {
  let O = y;
  for (; k--; )
    O = /** @type {TemplateNode} */
    /* @__PURE__ */ Rr(O);
  return O;
}
function lg(y) {
  y.textContent = "";
}
let hg = !1;
function dg(y) {
  var k = document.createElement("template");
  return k.innerHTML = y, k.content;
}
function Ll(y, k) {
  var w = (
    /** @type {Effect} */
    Mt
  );
  w.nodes_start === null && (w.nodes_start = y, w.nodes_end = k);
}
// @__NO_SIDE_EFFECTS__
function ts(y, k) {
  var w = (k & gf) !== 0, O = (k & mf) !== 0, I, N = !y.startsWith("<!>");
  return () => {
    I === void 0 && (I = dg(N ? y : "<!>" + y), w || (I = /** @type {Node} */
    /* @__PURE__ */ Or(I)));
    var H = (
      /** @type {TemplateNode} */
      O ? document.importNode(I, !0) : I.cloneNode(!0)
    );
    if (w) {
      var Z = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Or(H)
      ), R = (
        /** @type {TemplateNode} */
        H.lastChild
      );
      Ll(Z, R);
    } else
      Ll(H, H);
    return H;
  };
}
function ji(y, k) {
  y !== null && y.before(
    /** @type {Node} */
    k
  );
}
function vr(y, k) {
  var w = k == null ? "" : typeof k == "object" ? k + "" : k;
  w !== (y.__t ?? (y.__t = y.nodeValue)) && (y.__t = w, y.nodeValue = w == null ? "" : w + "");
}
function br(y, k, w, O = null, I = !1) {
  var N = y, H = null, Z = null, R = null, X = I ? so : 0;
  lo(() => {
    R !== (R = !!k()) && (R ? (H ? Ar(H) : H = Tr(() => w(N)), Z && Kn(Z, () => {
      Z = null;
    })) : (Z ? Ar(Z) : O && (Z = Tr(() => O(N))), H && Kn(H, () => {
      H = null;
    })));
  }, X);
}
function cg(y, k) {
  return k;
}
function pg(y, k, w, O) {
  for (var I = [], N = k.length, H = 0; H < N; H++)
    ho(k[H].e, I, !0);
  var Z = N > 0 && I.length === 0 && w !== null;
  if (Z) {
    var R = (
      /** @type {Element} */
      /** @type {Element} */
      w.parentNode
    );
    lg(R), R.append(
      /** @type {Element} */
      w
    ), O.clear(), xi(y, k[0].prev, k[N - 1].next);
  }
  Ql(I, () => {
    for (var X = 0; X < N; X++) {
      var F = k[X];
      Z || (O.delete(F.k), xi(y, F.prev, F.next)), Ji(F.e, !Z);
    }
  });
}
function ug(y, k, w, O, I, N = null) {
  var H = y, Z = { flags: k, items: /* @__PURE__ */ new Map(), first: null };
  {
    var R = (
      /** @type {Element} */
      y
    );
    H = R.appendChild(og());
  }
  var X = null, F = !1;
  lo(() => {
    var j = w(), q = Nl(j) ? j : j == null ? [] : zl(j), et = q.length;
    if (!(F && et === 0)) {
      F = et === 0;
      {
        var xt = (
          /** @type {Effect} */
          Bt
        );
        fg(q, Z, H, I, k, (xt.f & ti) !== 0, O);
      }
      N !== null && (et === 0 ? X ? Ar(X) : X = Tr(() => N(H)) : X !== null && Kn(X, () => {
        X = null;
      })), w();
    }
  });
}
function fg(y, k, w, O, I, N, H) {
  var Z = y.length, R = k.items, X = k.first, F = X, j, q = null, et = [], xt = [], Zt, ct, ot, St;
  for (St = 0; St < Z; St += 1) {
    if (Zt = y[St], ct = H(Zt, St), ot = R.get(ct), ot === void 0) {
      var ne = F ? (
        /** @type {TemplateNode} */
        F.e.nodes_start
      ) : w;
      q = mg(
        ne,
        k,
        q,
        q === null ? k.first : q.next,
        Zt,
        ct,
        St,
        O,
        I
      ), R.set(ct, q), et = [], xt = [], F = q.next;
      continue;
    }
    if (gg(ot, Zt, St), ot.e.f & ti && Ar(ot.e), ot !== F) {
      if (j !== void 0 && j.has(ot)) {
        if (et.length < xt.length) {
          var ce = xt[0], Lt;
          q = ce.prev;
          var Rt = et[0], _ = et[et.length - 1];
          for (Lt = 0; Lt < et.length; Lt += 1)
            _l(et[Lt], ce, w);
          for (Lt = 0; Lt < xt.length; Lt += 1)
            j.delete(xt[Lt]);
          xi(k, Rt.prev, _.next), xi(k, q, Rt), xi(k, _, ce), F = ce, q = _, St -= 1, et = [], xt = [];
        } else
          j.delete(ot), _l(ot, F, w), xi(k, ot.prev, ot.next), xi(k, ot, q === null ? k.first : q.next), xi(k, q, ot), q = ot;
        continue;
      }
      for (et = [], xt = []; F !== null && F.k !== ct; )
        (N || !(F.e.f & ti)) && (j ?? (j = /* @__PURE__ */ new Set())).add(F), xt.push(F), F = F.next;
      if (F === null)
        continue;
      ot = F;
    }
    et.push(ot), q = ot, F = ot.next;
  }
  if (F !== null || j !== void 0) {
    for (var E = j === void 0 ? [] : zl(j); F !== null; )
      (N || !(F.e.f & ti)) && E.push(F), F = F.next;
    var P = E.length;
    if (P > 0) {
      var z = Z === 0 ? w : null;
      pg(k, E, z, R);
    }
  }
  Mt.first = k.first && k.first.e, Mt.last = q && q.e;
}
function gg(y, k, w, O) {
  Yl(y.v, k), y.i = w;
}
function mg(y, k, w, O, I, N, H, Z, R) {
  var X = (R & af) !== 0, F = (R & hf) === 0, j = X ? F ? /* @__PURE__ */ no(I) : ze(I) : I, q = R & lf ? ze(H) : H, et = {
    i: q,
    v: j,
    k: N,
    a: null,
    // @ts-expect-error
    e: null,
    prev: w,
    next: O
  };
  try {
    return et.e = Tr(() => Z(y, j, q), hg), et.e.prev = w && w.e, et.e.next = O && O.e, w === null ? k.first = et : (w.next = et, w.e.next = et.e), O !== null && (O.prev = et, O.e.prev = et.e), et;
  } finally {
  }
}
function _l(y, k, w) {
  for (var O = y.next ? (
    /** @type {TemplateNode} */
    y.next.e.nodes_start
  ) : w, I = k ? (
    /** @type {TemplateNode} */
    k.e.nodes_start
  ) : w, N = (
    /** @type {TemplateNode} */
    y.e.nodes_start
  ); N !== O; ) {
    var H = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Rr(N)
    );
    I.before(N), N = H;
  }
}
function xi(y, k, w) {
  k === null ? y.first = w : (k.next = w, k.e.next = w && w.e), w !== null && (w.prev = k, w.e.prev = k && k.e);
}
function xg(y, k, w, O) {
  var I = y.__styles ?? (y.__styles = {});
  I[k] !== w && (I[k] = w, w == null ? y.style.removeProperty(k) : y.style.setProperty(k, w, ""));
}
function Il(y, k) {
  return y === k || (y == null ? void 0 : y[Pi]) === k;
}
function yg(y = {}, k, w, O) {
  return ao(() => {
    var I, N;
    return Dr(() => {
      I = N, N = [], ws(() => {
        y !== w(...N) && (k(y, ...N), I && Il(w(...I), y) && k(null, ...I));
      });
    }), () => {
      jf(() => {
        N && Il(w(...N), y) && k(null, ...N);
      });
    };
  }), y;
}
function vg(y = !1) {
  const k = (
    /** @type {ComponentContextLegacy} */
    Kt
  ), w = k.l.u;
  if (!w) return;
  let O = () => to(k.s);
  if (y) {
    let I = 0, N = (
      /** @type {Record<string, any>} */
      {}
    );
    const H = /* @__PURE__ */ Cr(() => {
      let Z = !1;
      const R = k.s;
      for (const X in R)
        R[X] !== N[X] && (N[X] = R[X], Z = !0);
      return Z && I++, I;
    });
    O = () => $t(H);
  }
  w.b.length && Ff(() => {
    Dl(k, O), qn(w.b);
  }), Al(() => {
    const I = ws(() => w.m.map(kf));
    return () => {
      for (const N of I)
        typeof N == "function" && N();
    };
  }), w.a.length && Al(() => {
    Dl(k, O), qn(w.a);
  });
}
function Dl(y, k) {
  if (y.l.s)
    for (const w of y.l.s) $t(w);
  k();
}
let kr = !1;
function bg(y) {
  var k = kr;
  try {
    return kr = !1, [y(), kr];
  } finally {
    kr = k;
  }
}
function Bl(y) {
  for (var k = Mt, w = Mt; k !== null && !(k.f & (Ve | _r)); )
    k = k.parent;
  try {
    return $i(k), y();
  } finally {
    $i(w);
  }
}
function Rl(y, k, w, O) {
  var _;
  var I = (w & df) !== 0, N = !Ms || (w & cf) !== 0, H = (w & uf) !== 0, Z = (w & ff) !== 0, R = !1, X;
  H ? [X, R] = bg(() => (
    /** @type {V} */
    y[k]
  )) : X = /** @type {V} */
  y[k];
  var F = Pi in y || Cf in y, j = ((_ = wr(y, k)) == null ? void 0 : _.set) ?? (F && H && k in y ? (E) => y[k] = E : void 0), q = (
    /** @type {V} */
    O
  ), et = !0, xt = !1, Zt = () => (xt = !0, et && (et = !1, Z ? q = ws(
    /** @type {() => V} */
    O
  ) : q = /** @type {V} */
  O), q);
  X === void 0 && O !== void 0 && (j && N && Lf(), X = Zt(), j && j(X));
  var ct;
  if (N)
    ct = () => {
      var E = (
        /** @type {V} */
        y[k]
      );
      return E === void 0 ? Zt() : (et = !0, xt = !1, E);
    };
  else {
    var ot = Bl(
      () => (I ? Cr : Nf)(() => (
        /** @type {V} */
        y[k]
      ))
    );
    ot.f |= Mf, ct = () => {
      var E = $t(ot);
      return E !== void 0 && (q = /** @type {V} */
      void 0), E === void 0 ? q : E;
    };
  }
  if (!(w & pf))
    return ct;
  if (j) {
    var St = y.$$legacy;
    return function(E, P) {
      return arguments.length > 0 ? ((!N || !P || St || R) && j(P ? ct() : E), E) : ct();
    };
  }
  var ne = !1, ce = !1, Lt = /* @__PURE__ */ no(X), Rt = Bl(
    () => /* @__PURE__ */ Cr(() => {
      var E = ct(), P = $t(Lt);
      return ne ? (ne = !1, ce = !0, P) : (ce = !1, Lt.v = E);
    })
  );
  return I || (Rt.equals = ro), function(E, P) {
    if (arguments.length > 0) {
      const z = P ? $t(Rt) : N && H ? Ui(E) : E;
      return Rt.equals(z) || (ne = !0, De(Lt, z), xt && q !== void 0 && (q = z), ws(() => $t(Rt))), E;
    }
    return $t(Rt);
  };
}
var nh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oh(y) {
  return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
}
var ah = { exports: {} };
(function(y, k) {
  /**
  * Highcharts JS v12.0.1 (2024-11-28)
  * @module highcharts/highcharts
  *
  * (c) 2009-2024 Torstein Honsi
  *
  * License: www.highcharts.com/license
  */
  (function(w, O) {
    y.exports = O();
  })(nh, () => (() => {
    let w, O;
    var I, N, H, Z, R, X, F, j, q, et, xt, Zt, ct, ot, St, ne, ce, Lt = {};
    Lt.d = (l, t) => {
      for (var e in t) Lt.o(t, e) && !Lt.o(l, e) && Object.defineProperty(l, e, { enumerable: !0, get: t[e] });
    }, Lt.o = (l, t) => Object.prototype.hasOwnProperty.call(l, t);
    var Rt = {};
    Lt.d(Rt, { default: () => rf }), function(l) {
      l.SVG_NS = "http://www.w3.org/2000/svg", l.product = "Highcharts", l.version = "12.0.1", l.win = typeof window < "u" ? window : {}, l.doc = l.win.document, l.svg = l.doc && l.doc.createElementNS && !!l.doc.createElementNS(l.SVG_NS, "svg").createSVGRect, l.userAgent = l.win.navigator && l.win.navigator.userAgent || "", l.isChrome = l.win.chrome, l.isFirefox = l.userAgent.indexOf("Firefox") !== -1, l.isMS = /(edge|msie|trident)/i.test(l.userAgent) && !l.win.opera, l.isSafari = !l.isChrome && l.userAgent.indexOf("Safari") !== -1, l.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(l.userAgent), l.isWebKit = l.userAgent.indexOf("AppleWebKit") !== -1, l.deg2rad = 2 * Math.PI / 360, l.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], l.noop = function() {
      }, l.supportsPassiveEvents = function() {
        let t = !1;
        if (!l.isMS) {
          let e = Object.defineProperty({}, "passive", { get: function() {
            t = !0;
          } });
          l.win.addEventListener && l.win.removeEventListener && (l.win.addEventListener("testPassive", l.noop, e), l.win.removeEventListener("testPassive", l.noop, e));
        }
        return t;
      }(), l.charts = [], l.composed = [], l.dateFormats = {}, l.seriesTypes = {}, l.symbolSizes = {}, l.chartCount = 0;
    }(I || (I = {}));
    let _ = I, { charts: E, doc: P, win: z } = _;
    function V(l, t, e, i) {
      let s = t ? "Highcharts error" : "Highcharts warning";
      l === 32 && (l = `${s}: Deprecated member`);
      let r = Nt(l), n = r ? `${s} #${l}: www.highcharts.com/errors/${l}/` : l.toString();
      if (i !== void 0) {
        let o = "";
        r && (n += "?"), Dt(i, function(a, h) {
          o += `
 - ${h}: ${a}`, r && (n += encodeURI(h) + "=" + encodeURI(a));
        }), n += o;
      }
      vt(_, "displayError", { chart: e, code: l, message: n, params: i }, function() {
        if (t) throw Error(n);
        z.console && V.messages.indexOf(n) === -1 && console.warn(n);
      }), V.messages.push(n);
    }
    function Q(l, t) {
      return parseInt(l, t || 10);
    }
    function ht(l) {
      return typeof l == "string";
    }
    function gt(l) {
      let t = Object.prototype.toString.call(l);
      return t === "[object Array]" || t === "[object Array Iterator]";
    }
    function Yt(l, t) {
      return !!l && typeof l == "object" && (!t || !gt(l));
    }
    function It(l) {
      return Yt(l) && typeof l.nodeType == "number";
    }
    function tt(l) {
      let t = l && l.constructor;
      return !!(Yt(l, !0) && !It(l) && t && t.name && t.name !== "Object");
    }
    function Nt(l) {
      return typeof l == "number" && !isNaN(l) && l < 1 / 0 && l > -1 / 0;
    }
    function nt(l) {
      return l != null;
    }
    function Se(l, t, e) {
      let i, s = ht(t) && !nt(e), r = (n, o) => {
        nt(n) ? l.setAttribute(o, n) : s ? (i = l.getAttribute(o)) || o !== "class" || (i = l.getAttribute(o + "Name")) : l.removeAttribute(o);
      };
      return ht(t) ? r(e, t) : Dt(t, r), i;
    }
    function oe(l) {
      return gt(l) ? l : [l];
    }
    function K(l, t) {
      let e;
      for (e in l || (l = {}), t) l[e] = t[e];
      return l;
    }
    function Tt() {
      let l = arguments, t = l.length;
      for (let e = 0; e < t; e++) {
        let i = l[e];
        if (i != null) return i;
      }
    }
    function Qt(l, t) {
      K(l.style, t);
    }
    function zt(l) {
      return Math.pow(10, Math.floor(Math.log(l) / Math.LN10));
    }
    function te(l, t) {
      return l > 1e14 ? l : parseFloat(l.toPrecision(t || 14));
    }
    (V || (V = {})).messages = [], Math.easeInOutSine = function(l) {
      return -0.5 * (Math.cos(Math.PI * l) - 1);
    };
    let ee = Array.prototype.find ? function(l, t) {
      return l.find(t);
    } : function(l, t) {
      let e, i = l.length;
      for (e = 0; e < i; e++) if (t(l[e], e)) return l[e];
    };
    function Dt(l, t, e) {
      for (let i in l) Object.hasOwnProperty.call(l, i) && t.call(e || l[i], l[i], i, l);
    }
    function at(l, t, e) {
      function i(n, o) {
        let a = l.removeEventListener;
        a && a.call(l, n, o, !1);
      }
      function s(n) {
        let o, a;
        l.nodeName && (t ? (o = {})[t] = !0 : o = n, Dt(o, function(h, c) {
          if (n[c]) for (a = n[c].length; a--; ) i(c, n[c][a].fn);
        }));
      }
      let r = typeof l == "function" && l.prototype || l;
      if (Object.hasOwnProperty.call(r, "hcEvents")) {
        let n = r.hcEvents;
        if (t) {
          let o = n[t] || [];
          e ? (n[t] = o.filter(function(a) {
            return e !== a.fn;
          }), i(t, e)) : (s(n), n[t] = []);
        } else s(n), delete r.hcEvents;
      }
    }
    function vt(l, t, e, i) {
      if (e = e || {}, P.createEvent && (l.dispatchEvent || l.fireEvent && l !== _)) {
        let s = P.createEvent("Events");
        s.initEvent(t, !0, !0), e = K(s, e), l.dispatchEvent ? l.dispatchEvent(e) : l.fireEvent(t, e);
      } else if (l.hcEvents) {
        e.target || K(e, { preventDefault: function() {
          e.defaultPrevented = !0;
        }, target: l, type: t });
        let s = [], r = l, n = !1;
        for (; r.hcEvents; ) Object.hasOwnProperty.call(r, "hcEvents") && r.hcEvents[t] && (s.length && (n = !0), s.unshift.apply(s, r.hcEvents[t])), r = Object.getPrototypeOf(r);
        n && s.sort((o, a) => o.order - a.order), s.forEach((o) => {
          o.fn.call(l, e) === !1 && e.preventDefault();
        });
      }
      i && !e.defaultPrevented && i.call(l, e);
    }
    let Wt = function() {
      let l = Math.random().toString(36).substring(2, 9) + "-", t = 0;
      return function() {
        return "highcharts-" + (w ? "" : l) + t++;
      };
    }();
    z.jQuery && (z.jQuery.fn.highcharts = function() {
      let l = [].slice.call(arguments);
      if (this[0]) return l[0] ? (new _[ht(l[0]) ? l.shift() : "Chart"](this[0], l[0], l[1]), this) : E[Se(this[0], "data-highcharts-chart")];
    });
    let U = { addEvent: function(l, t, e, i = {}) {
      let s = typeof l == "function" && l.prototype || l;
      Object.hasOwnProperty.call(s, "hcEvents") || (s.hcEvents = {});
      let r = s.hcEvents;
      _.Point && l instanceof _.Point && l.series && l.series.chart && (l.series.chart.runTrackerClick = !0);
      let n = l.addEventListener;
      n && n.call(l, t, e, !!_.supportsPassiveEvents && { passive: i.passive === void 0 ? t.indexOf("touch") !== -1 : i.passive, capture: !1 }), r[t] || (r[t] = []);
      let o = { fn: e, order: typeof i.order == "number" ? i.order : 1 / 0 };
      return r[t].push(o), r[t].sort((a, h) => a.order - h.order), function() {
        at(l, t, e);
      };
    }, arrayMax: function(l) {
      let t = l.length, e = l[0];
      for (; t--; ) l[t] > e && (e = l[t]);
      return e;
    }, arrayMin: function(l) {
      let t = l.length, e = l[0];
      for (; t--; ) l[t] < e && (e = l[t]);
      return e;
    }, attr: Se, clamp: function(l, t, e) {
      return l > t ? l < e ? l : e : t;
    }, clearTimeout: function(l) {
      nt(l) && clearTimeout(l);
    }, correctFloat: te, createElement: function(l, t, e, i, s) {
      let r = P.createElement(l);
      return t && K(r, t), s && Qt(r, { padding: "0", border: "none", margin: "0" }), e && Qt(r, e), i && i.appendChild(r), r;
    }, crisp: function(l, t = 0, e) {
      let i = t % 2 / 2, s = e ? -1 : 1;
      return (Math.round(l * s - i) + i) * s;
    }, css: Qt, defined: nt, destroyObjectProperties: function(l, t, e) {
      Dt(l, function(i, s) {
        i !== t && (i != null && i.destroy) && i.destroy(), (i != null && i.destroy || !e) && delete l[s];
      });
    }, diffObjects: function(l, t, e, i) {
      let s = {};
      return function r(n, o, a, h) {
        let c = e ? o : n;
        Dt(n, function(d, p) {
          if (!h && i && i.indexOf(p) > -1 && o[p]) {
            d = oe(d), a[p] = [];
            for (let u = 0; u < Math.max(d.length, o[p].length); u++) o[p][u] && (d[u] === void 0 ? a[p][u] = o[p][u] : (a[p][u] = {}, r(d[u], o[p][u], a[p][u], h + 1)));
          } else Yt(d, !0) && !d.nodeType ? (a[p] = gt(d) ? [] : {}, r(d, o[p] || {}, a[p], h + 1), Object.keys(a[p]).length !== 0 || p === "colorAxis" && h === 0 || delete a[p]) : (n[p] !== o[p] || p in n && !(p in o)) && p !== "__proto__" && p !== "constructor" && (a[p] = c[p]);
        });
      }(l, t, s, 0), s;
    }, discardElement: function(l) {
      l && l.parentElement && l.parentElement.removeChild(l);
    }, erase: function(l, t) {
      let e = l.length;
      for (; e--; ) if (l[e] === t) {
        l.splice(e, 1);
        break;
      }
    }, error: V, extend: K, extendClass: function(l, t) {
      let e = function() {
      };
      return e.prototype = new l(), K(e.prototype, t), e;
    }, find: ee, fireEvent: vt, getAlignFactor: (l = "") => ({ center: 0.5, right: 1, middle: 0.5, bottom: 1 })[l] || 0, getClosestDistance: function(l, t) {
      let e, i, s, r = !t;
      return l.forEach((n) => {
        if (n.length > 1) for (s = n.length - 1; s > 0; s--) (i = n[s] - n[s - 1]) < 0 && !r ? (t == null || t(), t = void 0) : i && (e === void 0 || i < e) && (e = i);
      }), e;
    }, getMagnitude: zt, getNestedProperty: function(l, t) {
      let e = l.split(".");
      for (; e.length && nt(t); ) {
        let i = e.shift();
        if (i === void 0 || i === "__proto__") return;
        if (i === "this") {
          let r;
          return Yt(t) && (r = t["@this"]), r ?? t;
        }
        let s = t[i];
        if (!nt(s) || typeof s == "function" || typeof s.nodeType == "number" || s === z) return;
        t = s;
      }
      return t;
    }, getStyle: function l(t, e, i) {
      let s;
      if (e === "width") {
        let n = Math.min(t.offsetWidth, t.scrollWidth), o = t.getBoundingClientRect && t.getBoundingClientRect().width;
        return o < n && o >= n - 1 && (n = Math.floor(o)), Math.max(0, n - (l(t, "padding-left", !0) || 0) - (l(t, "padding-right", !0) || 0));
      }
      if (e === "height") return Math.max(0, Math.min(t.offsetHeight, t.scrollHeight) - (l(t, "padding-top", !0) || 0) - (l(t, "padding-bottom", !0) || 0));
      let r = z.getComputedStyle(t, void 0);
      return r && (s = r.getPropertyValue(e), Tt(i, e !== "opacity") && (s = Q(s))), s;
    }, insertItem: function(l, t) {
      let e, i = l.options.index, s = t.length;
      for (e = l.options.isInternal ? s : 0; e < s + 1; e++) if (!t[e] || Nt(i) && i < Tt(t[e].options.index, t[e]._i) || t[e].options.isInternal) {
        t.splice(e, 0, l);
        break;
      }
      return e;
    }, isArray: gt, isClass: tt, isDOMElement: It, isFunction: function(l) {
      return typeof l == "function";
    }, isNumber: Nt, isObject: Yt, isString: ht, merge: function(l, ...t) {
      let e, i = [l, ...t], s = {}, r = function(o, a) {
        return typeof o != "object" && (o = {}), Dt(a, function(h, c) {
          c !== "__proto__" && c !== "constructor" && (!Yt(h, !0) || tt(h) || It(h) ? o[c] = a[c] : o[c] = r(o[c] || {}, h));
        }), o;
      };
      l === !0 && (s = i[1], i = Array.prototype.slice.call(i, 2));
      let n = i.length;
      for (e = 0; e < n; e++) s = r(s, i[e]);
      return s;
    }, normalizeTickInterval: function(l, t, e, i, s) {
      let r, n = l;
      e = Tt(e, zt(l));
      let o = l / e;
      for (!t && (t = s ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], i === !1 && (e === 1 ? t = t.filter(function(a) {
        return a % 1 == 0;
      }) : e <= 0.1 && (t = [1 / e]))), r = 0; r < t.length && (n = t[r], (!s || !(n * e >= l)) && (s || !(o <= (t[r] + (t[r + 1] || t[r])) / 2))); r++) ;
      return te(n * e, -Math.round(Math.log(1e-3) / Math.LN10));
    }, objectEach: Dt, offset: function(l) {
      let t = P.documentElement, e = l.parentElement || l.parentNode ? l.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
      return { top: e.top + (z.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: e.left + (z.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), width: e.width, height: e.height };
    }, pad: function(l, t, e) {
      return Array((t || 2) + 1 - String(l).replace("-", "").length).join(e || "0") + l;
    }, pick: Tt, pInt: Q, pushUnique: function(l, t) {
      return 0 > l.indexOf(t) && !!l.push(t);
    }, relativeLength: function(l, t, e) {
      return /%$/.test(l) ? t * parseFloat(l) / 100 + (e || 0) : parseFloat(l);
    }, removeEvent: at, replaceNested: function(l, ...t) {
      let e, i;
      do
        for (i of (e = l, t)) l = l.replace(i[0], i[1]);
      while (l !== e);
      return l;
    }, splat: oe, stableSort: function(l, t) {
      let e, i, s = l.length;
      for (i = 0; i < s; i++) l[i].safeI = i;
      for (l.sort(function(r, n) {
        return (e = t(r, n)) === 0 ? r.safeI - n.safeI : e;
      }), i = 0; i < s; i++) delete l[i].safeI;
    }, syncTimeout: function(l, t, e) {
      return t > 0 ? setTimeout(l, t, e) : (l.call(0, e), -1);
    }, timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, ucfirst: function(l) {
      return ht(l) ? l.substring(0, 1).toUpperCase() + l.substring(1) : String(l);
    }, uniqueKey: Wt, useSerialIds: function(l) {
      return w = Tt(l, w);
    }, wrap: function(l, t, e) {
      let i = l[t];
      l[t] = function() {
        let s = arguments, r = this;
        return e.apply(this, [function() {
          return i.apply(r, arguments.length ? arguments : s);
        }].concat([].slice.call(arguments)));
      };
    } }, { win: Ct } = _, { defined: Jt, error: Gt, extend: At, isNumber: Ce, isObject: xe, isString: ye, merge: We, objectEach: Te, pad: bt, splat: qt, timeUnits: kt, ucfirst: Pt } = U, ni = _.isSafari && Ct.Intl && !Ct.Intl.DateTimeFormat.prototype.formatRange, Fe = (l) => l.main === void 0, qe = (l) => ["D", "L", "M", "X", "J", "V", "S"].indexOf(l), Be = class {
      constructor(l) {
        this.options = {}, this.variableTimezone = !1, this.Date = Ct.Date, this.update(l);
      }
      update(l = {}) {
        let t = l.timezone ?? "UTC";
        this.dTLCache = {}, this.options = l = We(!0, this.options, l);
        let { timezoneOffset: e, useUTC: i } = l;
        this.Date = l.Date || Ct.Date || Date, Jt(i) && (t = i ? "UTC" : void 0), e && e % 60 == 0 && (t = "Etc/GMT" + (e > 0 ? "+" : "") + e / 60), this.variableTimezone = t !== "UTC" && (t == null ? void 0 : t.indexOf("Etc/GMT")) !== 0, this.timezone = t, ["months", "shortMonths", "weekdays", "shortWeekdays"].forEach((s) => {
          let r = /months/i.test(s), n = /short/.test(s), o = { timeZone: "UTC" };
          o[r ? "month" : "weekday"] = n ? "short" : "long", this[s] = (r ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : [3, 4, 5, 6, 7, 8, 9]).map((a) => this.dateFormat(o, (r ? 31 : 1) * 24 * 36e5 * a));
        });
      }
      toParts(l) {
        let [t, e, i, s, r, n, o] = this.dateTimeFormat({ weekday: "narrow", day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }, l, "es").split(/(?:, |\/|:)/g);
        return [s, +i - 1, e, r, n, o, Math.floor(Number(l) || 0) % 1e3, qe(t)].map(Number);
      }
      dateTimeFormat(l, t, e = this.options.locale) {
        let i = JSON.stringify(l) + e;
        ye(l) && (l = this.str2dtf(l));
        let s = this.dTLCache[i];
        if (!s) {
          l.timeZone ?? (l.timeZone = this.timezone);
          try {
            s = new Intl.DateTimeFormat(e, l);
          } catch (r) {
            /Invalid time zone/i.test(r.message) ? (Gt(34), l.timeZone = "UTC", s = new Intl.DateTimeFormat(e, l)) : Gt(r.message, !1);
          }
        }
        return this.dTLCache[i] = s, (s == null ? void 0 : s.format(t)) || "";
      }
      str2dtf(l, t = {}) {
        let e = { L: { fractionalSecondDigits: 3 }, S: { second: "2-digit" }, M: { minute: "numeric" }, H: { hour: "2-digit" }, k: { hour: "numeric" }, E: { weekday: "narrow" }, a: { weekday: "short" }, A: { weekday: "long" }, d: { day: "2-digit" }, e: { day: "numeric" }, b: { month: "short" }, B: { month: "long" }, m: { month: "2-digit" }, o: { month: "numeric" }, y: { year: "2-digit" }, Y: { year: "numeric" } };
        return Object.keys(e).forEach((i) => {
          l.indexOf(i) !== -1 && At(t, e[i]);
        }), t;
      }
      makeTime(l, t, e = 1, i = 0, s, r, n) {
        let o = this.Date.UTC(l, t, e, i, s || 0, r || 0, n || 0);
        if (this.timezone !== "UTC") {
          let a = this.getTimezoneOffset(o);
          if (o += a, [2, 3, 8, 9, 10, 11].indexOf(t) !== -1 && (i < 5 || i > 20)) {
            let h = this.getTimezoneOffset(o);
            a !== h ? o += h - a : a - 36e5 !== this.getTimezoneOffset(o - 36e5) || ni || (o -= 36e5);
          }
        }
        return o;
      }
      parse(l) {
        if (!ye(l)) return l ?? void 0;
        let t = (l = l.replace(/\//g, "-").replace(/(GMT|UTC)/, "")).indexOf("Z") > -1 || /([+-][0-9]{2}):?[0-9]{2}$/.test(l), e = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(l);
        t || e || (l += "Z");
        let i = Date.parse(l);
        if (Ce(i)) return i + (!t || e ? this.getTimezoneOffset(i) : 0);
      }
      getTimezoneOffset(l) {
        if (this.timezone !== "UTC") {
          let [t, e, i, s, r = 0] = this.dateTimeFormat({ timeZoneName: "shortOffset" }, l, "en").split(/(GMT|:)/).map(Number), n = -(36e5 * (i + r / 60));
          if (Ce(n)) return n;
        }
        return 0;
      }
      dateFormat(l, t, e) {
        var s;
        let i = (s = _.defaultOptions) == null ? void 0 : s.lang;
        if (!Jt(t) || isNaN(t)) return (i == null ? void 0 : i.invalidDate) || "";
        if (ye(l = l ?? "%Y-%m-%d %H:%M:%S")) {
          let r, n = /%\[([a-zA-Z]+)\]/g;
          for (; r = n.exec(l); ) l = l.replace(r[0], this.dateTimeFormat(r[1], t));
        }
        if (ye(l) && l.indexOf("%") !== -1) {
          let r = this, [n, o, a, h, c, d, p, u] = this.toParts(t), f = (i == null ? void 0 : i.weekdays) || this.weekdays, m = (i == null ? void 0 : i.shortWeekdays) || this.shortWeekdays, x = (i == null ? void 0 : i.months) || this.months, g = (i == null ? void 0 : i.shortMonths) || this.shortMonths;
          Te(At({ a: m ? m[u] : f[u].substr(0, 3), A: f[u], d: bt(a), e: bt(a, 2, " "), w: u, b: g[o], B: x[o], m: bt(o + 1), o: o + 1, y: n.toString().substr(2, 2), Y: n, H: bt(h), k: h, I: bt(h % 12 || 12), l: h % 12 || 12, M: bt(c), p: h < 12 ? "AM" : "PM", P: h < 12 ? "am" : "pm", S: bt(d), L: bt(p, 3) }, _.dateFormats), function(b, v) {
            if (ye(l)) for (; l.indexOf("%" + v) !== -1; ) l = l.replace("%" + v, typeof b == "function" ? b.call(r, t) : b);
          });
        } else if (xe(l)) {
          let r = (this.getTimezoneOffset(t) || 0) / 36e5, n = this.options.timezone || "Etc/GMT" + (r >= 0 ? "+" : "") + r, { prefix: o = "", suffix: a = "" } = l;
          l = o + this.dateTimeFormat(At({ timeZone: n }, l), t) + a;
        }
        return e ? Pt(l) : l;
      }
      resolveDTLFormat(l) {
        return xe(l, !0) ? xe(l, !0) && Fe(l) ? { main: l } : l : { main: (l = qt(l))[0], from: l[1], to: l[2] };
      }
      getTimeTicks(l, t, e, i) {
        let s = this, r = [], n = {}, { count: o = 1, unitRange: a } = l, [h, c, d, p, u, f] = s.toParts(t), m = (t || 0) % 1e3, x;
        if (i ?? (i = 1), Jt(t)) {
          if (m = a >= kt.second ? 0 : o * Math.floor(m / o), a >= kt.second && (f = a >= kt.minute ? 0 : o * Math.floor(f / o)), a >= kt.minute && (u = a >= kt.hour ? 0 : o * Math.floor(u / o)), a >= kt.hour && (p = a >= kt.day ? 0 : o * Math.floor(p / o)), a >= kt.day && (d = a >= kt.month ? 1 : Math.max(1, o * Math.floor(d / o))), a >= kt.month && (c = a >= kt.year ? 0 : o * Math.floor(c / o)), a >= kt.year && (h -= h % o), a === kt.week) {
            o && (t = s.makeTime(h, c, d, p, u, f, m));
            let v = qe(this.dateTimeFormat({ timeZone: this.timezone, weekday: "narrow" }, t, "es"));
            d += -v + i + (v < i ? -7 : 0);
          }
          t = s.makeTime(h, c, d, p, u, f, m), s.variableTimezone && Jt(e) && (x = e - t > 4 * kt.month || s.getTimezoneOffset(t) !== s.getTimezoneOffset(e));
          let g = t, b = 1;
          for (; g < e; ) r.push(g), a === kt.year ? g = s.makeTime(h + b * o, 0) : a === kt.month ? g = s.makeTime(h, c + b * o) : x && (a === kt.day || a === kt.week) ? g = s.makeTime(h, c, d + b * o * (a === kt.day ? 1 : 7)) : x && a === kt.hour && o > 1 ? g = s.makeTime(h, c, d, p + b * o) : g += a * o, b++;
          r.push(g), a <= kt.hour && r.length < 1e4 && r.forEach((v) => {
            v % 18e5 == 0 && s.dateFormat("%H%M%S%L", v) === "000000000" && (n[v] = "day");
          });
        }
        return r.info = At(l, { higherRanks: n, totalRange: a * o }), r;
      }
      getDateFormat(l, t, e, i) {
        let s = this.dateFormat("%m-%d %H:%M:%S.%L", t), r = "01-01 00:00:00.000", n = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, o = "millisecond", a = o;
        for (o in kt) {
          if (l === kt.week && +this.dateFormat("%w", t) === e && s.substr(6) === r.substr(6)) {
            o = "week";
            break;
          }
          if (kt[o] > l) {
            o = a;
            break;
          }
          if (n[o] && s.substr(n[o]) !== r.substr(n[o])) break;
          o !== "week" && (a = o);
        }
        return this.resolveDTLFormat(i[o]).main;
      }
    }, { isTouchDevice: $e } = _, { fireEvent: Ke, merge: Ae } = U, Ee = { colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"], symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { locale: void 0, loading: "Loading...", months: void 0, shortMonths: void 0, weekdays: void 0, numericSymbols: ["k", "M", "G", "T", "P", "E"], resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1" }, global: { buttonTheme: { fill: "#f7f7f7", padding: 8, r: 2, stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontSize: "0.8em", fontWeight: "normal" }, states: { hover: { fill: "#e6e6e6" }, select: { fill: "#e6e9ff", style: { color: "#000000", fontWeight: "bold" } }, disabled: { style: { color: "#cccccc" } } } } }, time: { Date: void 0, timezone: "UTC", timezoneOffset: 0, useUTC: void 0 }, chart: { alignThresholds: !1, panning: { enabled: !1, type: "x" }, styledMode: !1, borderRadius: 0, colorCount: 10, allowMutatingData: !0, ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: {}, position: {} }, reflow: !0, type: "line", zooming: { singleTouch: !1, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#334eff", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" }, title: { style: { color: "#333333", fontWeight: "bold" }, text: "Chart title", margin: 15, minScale: 0.67 }, subtitle: { style: { color: "#666666", fontSize: "0.8em" }, text: "" }, caption: { margin: 15, style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, legend: { enabled: !0, align: "center", alignColumns: !0, className: "highcharts-no-tooltip", events: {}, layout: "horizontal", itemMarginBottom: 2, itemMarginTop: 2, labelFormatter: function() {
      return this.name;
    }, borderColor: "#999999", borderRadius: 0, navigation: { style: { fontSize: "0.8em" }, activeColor: "#0022ff", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "0.8em", textDecoration: "none", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#666666", textDecoration: "line-through" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontSize: "0.8em", fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } }, tooltip: { enabled: !0, animation: { duration: 300, easing: (l) => Math.sqrt(1 - Math.pow(l - 1, 2)) }, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%[AebHMSL]", second: "%[AebHMS]", minute: "%[AebHM]", hour: "%[AebHM]", day: "%[AebY]", week: "Week from %[AebY]", month: "%[BY]", year: "%Y" }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, shape: "callout", shared: !1, snap: $e ? 25 : 10, headerFormat: '<span style="font-size: 0.8em">{ucfirst point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: "#ffffff", borderWidth: void 0, shadow: !0, stickOnContact: !1, style: { color: "#333333", cursor: "default", fontSize: "0.8em" }, useHTML: !1 }, credits: { enabled: !0, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" }, text: "Highcharts.com" } };
    Ee.chart.styledMode = !0, Ee.chart.styledMode = !1;
    let ve = new Be(Ee.time), ke = { defaultOptions: Ee, defaultTime: ve, getOptions: function() {
      return Ee;
    }, setOptions: function(l) {
      return Ke(_, "setOptions", { options: l }), Ae(!0, Ee, l), l.time && ve.update(Ee.time), l.lang && "locale" in l.lang && ve.update({ locale: l.lang.locale }), Ee;
    } }, { isNumber: oi, merge: hh, pInt: we, defined: fo } = U;
    class ie {
      static parse(t) {
        return t ? new ie(t) : ie.None;
      }
      constructor(t) {
        let e, i, s, r;
        this.rgba = [NaN, NaN, NaN, NaN], this.input = t;
        let n = _.Color;
        if (n && n !== ie) return new n(t);
        if (typeof t == "object" && t.stops !== void 0) this.stops = t.stops.map((o) => new ie(o[1]));
        else if (typeof t == "string") for (this.input = t = ie.names[t.toLowerCase()] || t, s = ie.parsers.length; s-- && !i; ) (e = (r = ie.parsers[s]).regex.exec(t)) && (i = r.parse(e));
        i && (this.rgba = i);
      }
      get(t) {
        let e = this.input, i = this.rgba;
        if (typeof e == "object" && this.stops !== void 0) {
          let s = hh(e);
          return s.stops = [].slice.call(s.stops), this.stops.forEach((r, n) => {
            s.stops[n] = [s.stops[n][0], r.get(t)];
          }), s;
        }
        return i && oi(i[0]) ? t !== "rgb" && (t || i[3] !== 1) ? t === "a" ? `${i[3]}` : "rgba(" + i.join(",") + ")" : "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : e;
      }
      brighten(t) {
        let e = this.rgba;
        if (this.stops) this.stops.forEach(function(i) {
          i.brighten(t);
        });
        else if (oi(t) && t !== 0) for (let i = 0; i < 3; i++) e[i] += we(255 * t), e[i] < 0 && (e[i] = 0), e[i] > 255 && (e[i] = 255);
        return this;
      }
      setOpacity(t) {
        return this.rgba[3] = t, this;
      }
      tweenTo(t, e) {
        let i = this.rgba, s = t.rgba;
        if (!oi(i[0]) || !oi(s[0])) return t.input || "none";
        let r = s[3] !== 1 || i[3] !== 1;
        return (r ? "rgba(" : "rgb(") + Math.round(s[0] + (i[0] - s[0]) * (1 - e)) + "," + Math.round(s[1] + (i[1] - s[1]) * (1 - e)) + "," + Math.round(s[2] + (i[2] - s[2]) * (1 - e)) + (r ? "," + (s[3] + (i[3] - s[3]) * (1 - e)) : "") + ")";
      }
    }
    ie.names = { white: "#ffffff", black: "#000000" }, ie.parsers = [{ regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/, parse: function(l) {
      return [we(l[1]), we(l[2]), we(l[3]), parseFloat(l[4], 10)];
    } }, { regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/, parse: function(l) {
      return [we(l[1]), we(l[2]), we(l[3]), 1];
    } }, { regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i, parse: function(l) {
      return [we(l[1] + l[1], 16), we(l[2] + l[2], 16), we(l[3] + l[3], 16), fo(l[4]) ? we(l[4] + l[4], 16) / 255 : 1];
    } }, { regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i, parse: function(l) {
      return [we(l[1], 16), we(l[2], 16), we(l[3], 16), fo(l[4]) ? we(l[4], 16) / 255 : 1];
    } }], ie.None = new ie("");
    let { parse: go } = ie, { win: dh } = _, { isNumber: Nr, objectEach: ch } = U;
    class Me {
      constructor(t, e, i) {
        this.pos = NaN, this.options = e, this.elem = t, this.prop = i;
      }
      dSetter() {
        let t = this.paths, e = t && t[0], i = t && t[1], s = this.now || 0, r = [];
        if (s !== 1 && e && i)
          if (e.length === i.length && s < 1) for (let n = 0; n < i.length; n++) {
            let o = e[n], a = i[n], h = [];
            for (let c = 0; c < a.length; c++) {
              let d = o[c], p = a[c];
              Nr(d) && Nr(p) && !(a[0] === "A" && (c === 4 || c === 5)) ? h[c] = d + s * (p - d) : h[c] = p;
            }
            r.push(h);
          }
          else r = i;
        else r = this.toD || [];
        this.elem.attr("d", r, void 0, !0);
      }
      update() {
        let t = this.elem, e = this.prop, i = this.now, s = this.options.step;
        this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, s && s.call(t, i, this);
      }
      run(t, e, i) {
        let s = this, r = s.options, n = function(h) {
          return !n.stopped && s.step(h);
        }, o = dh.requestAnimationFrame || function(h) {
          setTimeout(h, 13);
        }, a = function() {
          for (let h = 0; h < Me.timers.length; h++) Me.timers[h]() || Me.timers.splice(h--, 1);
          Me.timers.length && o(a);
        };
        t !== e || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, n.elem = this.elem, n.prop = this.prop, n() && Me.timers.push(n) === 1 && o(a)) : (delete r.curAnim[this.prop], r.complete && Object.keys(r.curAnim).length === 0 && r.complete.call(this.elem));
      }
      step(t) {
        let e, i, s = +/* @__PURE__ */ new Date(), r = this.options, n = this.elem, o = r.complete, a = r.duration, h = r.curAnim;
        return n.attr && !n.element ? e = !1 : t || s >= a + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), h[this.prop] = !0, i = !0, ch(h, function(c) {
          c !== !0 && (i = !1);
        }), i && o && o.call(n), e = !1) : (this.pos = r.easing((s - this.startTime) / a), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e;
      }
      initPath(t, e, i) {
        let s = t.startX, r = t.endX, n = i.slice(), o = t.isArea, a = o ? 2 : 1, h = e && i.length > e.length && i.hasStackedCliffs, c, d, p, u, f = e && e.slice();
        if (!f || h) return [n, n];
        function m(g, b) {
          for (; g.length < d; ) {
            let v = g[0], M = b[d - g.length];
            if (M && v[0] === "M" && (M[0] === "C" ? g[0] = ["C", v[1], v[2], v[1], v[2], v[1], v[2]] : g[0] = ["L", v[1], v[2]]), g.unshift(v), o) {
              let C = g.pop();
              g.push(g[g.length - 1], C);
            }
          }
        }
        function x(g) {
          for (; g.length < d; ) {
            let b = g[Math.floor(g.length / a) - 1].slice();
            if (b[0] === "C" && (b[1] = b[5], b[2] = b[6]), o) {
              let v = g[Math.floor(g.length / a)].slice();
              g.splice(g.length / 2, 0, b, v);
            } else g.push(b);
          }
        }
        if (s && r && r.length) {
          for (p = 0; p < s.length; p++) {
            if (s[p] === r[0]) {
              c = p;
              break;
            }
            if (s[0] === r[r.length - s.length + p]) {
              c = p, u = !0;
              break;
            }
            if (s[s.length - 1] === r[r.length - s.length + p]) {
              c = s.length - p;
              break;
            }
          }
          c === void 0 && (f = []);
        }
        return f.length && Nr(c) && (d = n.length + c * a, u ? (m(f, n), x(n)) : (m(n, f), x(f))), [f, n];
      }
      fillSetter() {
        Me.prototype.strokeSetter.apply(this, arguments);
      }
      strokeSetter() {
        this.elem.attr(this.prop, go(this.start).tweenTo(go(this.end), this.pos), void 0, !0);
      }
    }
    Me.timers = [];
    let { defined: ph, getStyle: uh, isArray: fh, isNumber: gh, isObject: zr, merge: mo, objectEach: mh, pick: xh } = U;
    function Wr(l) {
      return zr(l) ? mo({ duration: 500, defer: 0 }, l) : { duration: l ? 500 : 0, defer: 0 };
    }
    function xo(l, t) {
      let e = Me.timers.length;
      for (; e--; ) Me.timers[e].elem !== l || t && t !== Me.timers[e].prop || (Me.timers[e].stopped = !0);
    }
    let fe = { animate: function(l, t, e) {
      let i, s = "", r, n, o;
      zr(e) || (o = arguments, e = { duration: o[2], easing: o[3], complete: o[4] }), gh(e.duration) || (e.duration = 400), e.easing = typeof e.easing == "function" ? e.easing : Math[e.easing] || Math.easeInOutSine, e.curAnim = mo(t), mh(t, function(a, h) {
        xo(l, h), n = new Me(l, e, h), r = void 0, h === "d" && fh(t.d) ? (n.paths = n.initPath(l, l.pathArray, t.d), n.toD = t.d, i = 0, r = 1) : l.attr ? i = l.attr(h) : (i = parseFloat(uh(l, h)) || 0, h !== "opacity" && (s = "px")), r || (r = a), typeof r == "string" && r.match("px") && (r = r.replace(/px/g, "")), n.run(i, r, s);
      });
    }, animObject: Wr, getDeferredAnimation: function(l, t, e) {
      let i = Wr(t), s = e ? [e] : l.series, r = 0, n = 0;
      return s.forEach((o) => {
        let a = Wr(o.options.animation);
        r = zr(t) && ph(t.defer) ? i.defer : Math.max(r, a.duration + a.defer), n = Math.min(i.duration, a.duration);
      }), l.renderer.forExport && (r = 0), { defer: Math.max(0, r - n), duration: Math.min(r, n) };
    }, setAnimation: function(l, t) {
      t.renderer.globalAnimation = xh(l, t.options.chart.animation, !0);
    }, stop: xo }, { SVG_NS: yo, win: yh } = _, { attr: vh, createElement: bh, css: kh, error: vo, isFunction: wh, isString: bo, objectEach: ko, splat: Mh } = U, { trustedTypes: Fr } = yh, Cs = Fr && wh(Fr.createPolicy) && Fr.createPolicy("highcharts", { createHTML: (l) => l }), Sh = Cs ? Cs.createHTML("") : "";
    class Ft {
      static filterUserAttributes(t) {
        return ko(t, (e, i) => {
          let s = !0;
          Ft.allowedAttributes.indexOf(i) === -1 && (s = !1), ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i) !== -1 && (s = bo(e) && Ft.allowedReferences.some((r) => e.indexOf(r) === 0)), s || (vo(33, !1, void 0, { "Invalid attribute in config": `${i}` }), delete t[i]), bo(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"));
        }), t;
      }
      static parseStyle(t) {
        return t.split(";").reduce((e, i) => {
          let s = i.split(":").map((n) => n.trim()), r = s.shift();
          return r && s.length && (e[r.replace(/-([a-z])/g, (n) => n[1].toUpperCase())] = s.join(":")), e;
        }, {});
      }
      static setElementHTML(t, e) {
        t.innerHTML = Ft.emptyHTML, e && new Ft(e).addToDOM(t);
      }
      constructor(t) {
        this.nodes = typeof t == "string" ? this.parseMarkup(t) : t;
      }
      addToDOM(t) {
        return function e(i, s) {
          let r;
          return Mh(i).forEach(function(n) {
            let o, a = n.tagName, h = n.textContent ? _.doc.createTextNode(n.textContent) : void 0, c = Ft.bypassHTMLFiltering;
            if (a)
              if (a === "#text") o = h;
              else if (Ft.allowedTags.indexOf(a) !== -1 || c) {
                let d = a === "svg" ? yo : s.namespaceURI || yo, p = _.doc.createElementNS(d, a), u = n.attributes || {};
                ko(n, function(f, m) {
                  m !== "tagName" && m !== "attributes" && m !== "children" && m !== "style" && m !== "textContent" && (u[m] = f);
                }), vh(p, c ? u : Ft.filterUserAttributes(u)), n.style && kh(p, n.style), h && p.appendChild(h), e(n.children || [], p), o = p;
              } else vo(33, !1, void 0, { "Invalid tagName in config": a });
            o && s.appendChild(o), r = o;
          }), r;
        }(this.nodes, t);
      }
      parseMarkup(t) {
        let e, i = [];
        t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
        try {
          e = new DOMParser().parseFromString(Cs ? Cs.createHTML(t) : t, "text/html");
        } catch {
        }
        if (!e) {
          let r = bh("div");
          r.innerHTML = t, e = { body: r };
        }
        let s = (r, n) => {
          let o = r.nodeName.toLowerCase(), a = { tagName: o };
          o === "#text" && (a.textContent = r.textContent || "");
          let h = r.attributes;
          if (h) {
            let c = {};
            [].forEach.call(h, (d) => {
              d.name === "data-style" ? a.style = Ft.parseStyle(d.value) : c[d.name] = d.value;
            }), a.attributes = c;
          }
          if (r.childNodes.length) {
            let c = [];
            [].forEach.call(r.childNodes, (d) => {
              s(d, c);
            }), c.length && (a.children = c);
          }
          n.push(a);
        };
        return [].forEach.call(e.body.childNodes, (r) => s(r, i)), i;
      }
    }
    Ft.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "dx", "dy", "disabled", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "in2", "markerHeight", "markerWidth", "offset", "opacity", "operator", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "radius", "refX", "refY", "role", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke", "stroke-linecap", "stroke-width", "style", "tableValues", "result", "rowspan", "summary", "target", "tabindex", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], Ft.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], Ft.allowedTags = ["a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feComposite", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMorphology", "feOffset", "feMerge", "feMergeNode", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "text", "textPath", "thead", "title", "tbody", "tspan", "td", "th", "tr", "u", "ul", "#text"], Ft.emptyHTML = Sh, Ft.bypassHTMLFiltering = !1;
    let { defaultOptions: wo, defaultTime: Mo } = ke, { doc: Ch } = _, { extend: Th, getNestedProperty: Ah, isArray: Ph, isNumber: So, isObject: Eh, pick: Oh, ucfirst: Lh } = U, Ts = { add: (l, t) => l + t, divide: (l, t) => t !== 0 ? l / t : "", eq: (l, t) => l == t, each: function(l) {
      let t = arguments[arguments.length - 1];
      return !!Ph(l) && l.map((e, i) => As(t.body, Th(Eh(e) ? e : { "@this": e }, { "@index": i, "@first": i === 0, "@last": i === l.length - 1 }))).join("");
    }, ge: (l, t) => l >= t, gt: (l, t) => l > t, if: (l) => !!l, le: (l, t) => l <= t, lt: (l, t) => l < t, multiply: (l, t) => l * t, ne: (l, t) => l != t, subtract: (l, t) => l - t, ucfirst: Lh, unless: (l) => !l }, Co = {};
    function As(l = "", t, e) {
      let i = /\{([\p{L}\d:\.,;\-\/<>\[\]%_@"'’= #\(\)]+)\}/gu, s = /\(([\p{L}\d:\.,;\-\/<>\[\]%_@"'= ]+)\)/gu, r = [], n = /f$/, o = /\.(\d)/, a = (e == null ? void 0 : e.options.lang) || wo.lang, h = e && e.time || Mo, c = e && e.numberFormatter || To, d = (x = "") => {
        let g;
        return x === "true" || x !== "false" && ((g = Number(x)).toString() === x ? g : /^["'].+["']$/.test(x) ? x.slice(1, -1) : Ah(x, t));
      }, p, u, f = 0, m;
      for (; (p = i.exec(l)) !== null; ) {
        let x = p, g = s.exec(p[1]);
        g && (p = g, m = !0), u && u.isBlock || (u = { ctx: t, expression: p[1], find: p[0], isBlock: p[1].charAt(0) === "#", start: p.index, startInner: p.index + p[0].length, length: p[0].length });
        let b = (u.isBlock ? x : p)[1].split(" ")[0].replace("#", "");
        Ts[b] && (u.isBlock && b === u.fn && f++, u.fn || (u.fn = b));
        let v = p[1] === "else";
        if (u.isBlock && u.fn && (p[1] === `/${u.fn}` || v))
          if (f) !v && f--;
          else {
            let M = u.startInner, C = l.substr(M, p.index - M);
            u.body === void 0 ? (u.body = C, u.startInner = p.index + p[0].length) : u.elseBody = C, u.find += C + p[0], v || (r.push(u), u = void 0);
          }
        else u.isBlock || r.push(u);
        if (g && !(u != null && u.isBlock)) break;
      }
      return r.forEach((x) => {
        let g, b, { body: v, elseBody: M, expression: C, fn: S } = x;
        if (S) {
          let A = [x], T = [], L = C.length, B = 0, W;
          for (b = 0; b <= L; b++) {
            let G = C.charAt(b);
            W || G !== '"' && G !== "'" ? W === G && (W = "") : W = G, W || G !== " " && b !== L || (T.push(C.substr(B, b - B)), B = b + 1);
          }
          for (b = Ts[S].length; b--; ) A.unshift(d(T[b + 1]));
          g = Ts[S].apply(t, A), x.isBlock && typeof g == "boolean" && (g = As(g ? v : M, t, e));
        } else {
          let A = C.split(":");
          if (g = d(A.shift() || ""), A.length && typeof g == "number") {
            let T = A.join(":");
            if (n.test(T)) {
              let L = parseInt((T.match(o) || ["", "-1"])[1], 10);
              g !== null && (g = c(g, L, a.decimalPoint, T.indexOf(",") > -1 ? a.thousandsSep : ""));
            } else g = h.dateFormat(T, g), m && (g = `"${g}"`);
          }
        }
        l = l.replace(x.find, Oh(g, ""));
      }), m ? As(l, t, e) : l;
    }
    function To(l, t, e, i) {
      var m, x;
      t = +t;
      let s, r, [n, o] = (l = +l || 0).toString().split("e").map(Number), a = ((m = this == null ? void 0 : this.options) == null ? void 0 : m.lang) || wo.lang, h = (l.toString().split(".")[1] || "").split("e")[0].length, c = t, d = {};
      e ?? (e = a.decimalPoint), i ?? (i = a.thousandsSep), t === -1 ? t = Math.min(h, 20) : So(t) ? t && o < 0 && ((r = t + o) >= 0 ? (n = +n.toExponential(r).split("e")[0], t = r) : (n = Math.floor(n), l = t < 20 ? +(n * Math.pow(10, o)).toFixed(t) : 0, o = 0)) : t = 2, o && (t ?? (t = 2), l = n), So(t) && t >= 0 && (d.minimumFractionDigits = t, d.maximumFractionDigits = t), i === "" && (d.useGrouping = !1);
      let p = i || e, u = p ? "en" : (this == null ? void 0 : this.locale) || a.locale || ((x = Ch.body.closest("[lang]")) == null ? void 0 : x.lang), f = JSON.stringify(d) + u;
      return s = (Co[f] ?? (Co[f] = new Intl.NumberFormat(u, d))).format(l), p && (s = s.replace(/\,/g, i ?? ",").replace(".", e ?? ".")), (t || +s != 0) && (!(o < 0) || c) || (s = "0"), o && +s != 0 && (s += "e" + (o < 0 ? "" : "+") + o), s;
    }
    let He = { dateFormat: function(l, t, e) {
      return Mo.dateFormat(l, t, e);
    }, format: As, helpers: Ts, numberFormat: To };
    (function(l) {
      let t;
      l.rendererTypes = {}, l.getRendererType = function(e = t) {
        return l.rendererTypes[e] || l.rendererTypes[t];
      }, l.registerRendererType = function(e, i, s) {
        l.rendererTypes[e] = i, (!t || s) && (t = e, _.Renderer = i);
      };
    })(N || (N = {}));
    let es = N, { clamp: _h, pick: Ih, pushUnique: Dh, stableSort: Hr } = U;
    (H || (H = {})).distribute = function l(t, e, i) {
      let s = t, r = s.reducedLen || e, n = (v, M) => v.target - M.target, o = [], a = t.length, h = [], c = o.push, d, p, u, f = !0, m, x, g = 0, b;
      for (d = a; d--; ) g += t[d].size;
      if (g > r) {
        for (Hr(t, (v, M) => (M.rank || 0) - (v.rank || 0)), u = (b = t[0].rank === t[t.length - 1].rank) ? a / 2 : -1, p = b ? u : a - 1; u && g > r; ) m = t[d = Math.floor(p)], Dh(h, d) && (g -= m.size), p += u, b && p >= t.length && (u /= 2, p = u);
        h.sort((v, M) => M - v).forEach((v) => c.apply(o, t.splice(v, 1)));
      }
      for (Hr(t, n), t = t.map((v) => ({ size: v.size, targets: [v.target], align: Ih(v.align, 0.5) })); f; ) {
        for (d = t.length; d--; ) m = t[d], x = (Math.min.apply(0, m.targets) + Math.max.apply(0, m.targets)) / 2, m.pos = _h(x - m.size * m.align, 0, e - m.size);
        for (d = t.length, f = !1; d--; ) d > 0 && t[d - 1].pos + t[d - 1].size > t[d].pos && (t[d - 1].size += t[d].size, t[d - 1].targets = t[d - 1].targets.concat(t[d].targets), t[d - 1].align = 0.5, t[d - 1].pos + t[d - 1].size > e && (t[d - 1].pos = e - t[d - 1].size), t.splice(d, 1), f = !0);
      }
      return c.apply(s, o), d = 0, t.some((v) => {
        let M = 0;
        return (v.targets || []).some(() => (s[d].pos = v.pos + M, i !== void 0 && Math.abs(s[d].pos - s[d].target) > i ? (s.slice(0, d + 1).forEach((C) => delete C.pos), s.reducedLen = (s.reducedLen || e) - 0.1 * e, s.reducedLen > 0.1 * e && l(s, e, i), !0) : (M += s[d].size, d++, !1)));
      }), Hr(s, n), s;
    };
    let Ps = H, { animate: Bh, animObject: Rh, stop: Ao } = fe, { deg2rad: Po, doc: Oi, svg: Nh, SVG_NS: Es, win: zh } = _, { addEvent: Wh, attr: Xr, createElement: Fh, crisp: Os, css: Eo, defined: Ze, erase: Hh, extend: is, fireEvent: Yr, getAlignFactor: Gr, isArray: Oo, isFunction: Lo, isObject: Xh, isString: _o, merge: jr, objectEach: Li, pick: Xe, pInt: Ls, pushUnique: Yh, replaceNested: Gh, syncTimeout: jh, uniqueKey: Io } = U;
    class ae {
      _defaultGetter(t) {
        let e = Xe(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0);
        return /^-?[\d\.]+$/.test(e) && (e = parseFloat(e)), e;
      }
      _defaultSetter(t, e, i) {
        i.setAttribute(e, t);
      }
      add(t) {
        let e, i = this.renderer, s = this.element;
        return t && (this.parentGroup = t), this.textStr !== void 0 && this.element.nodeName === "text" && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(s), this.onAdd && this.onAdd(), this;
      }
      addClass(t, e) {
        let i = e ? "" : this.attr("class") || "";
        return (t = (t || "").split(/ /g).reduce(function(s, r) {
          return i.indexOf(r) === -1 && s.push(r), s;
        }, i ? [i] : []).join(" ")) !== i && this.attr("class", t), this;
      }
      afterSetters() {
        this.doTransform && (this.updateTransform(), this.doTransform = !1);
      }
      align(t, e, i, s = !0) {
        let r = {}, n = this.renderer, o = n.alignedObjects, a = !!t;
        t ? (this.alignOptions = t, this.alignByTranslate = e, this.alignTo = i) : (t = this.alignOptions || {}, e = this.alignByTranslate, i = this.alignTo);
        let h = !i || _o(i) ? i || "renderer" : void 0;
        h && (a && Yh(o, this), i = void 0);
        let c = Xe(i, n[h], n), d = (c.x || 0) + (t.x || 0) + ((c.width || 0) - (t.width || 0)) * Gr(t.align), p = (c.y || 0) + (t.y || 0) + ((c.height || 0) - (t.height || 0)) * Gr(t.verticalAlign);
        return r[e ? "translateX" : "x"] = Math.round(d), r[e ? "translateY" : "y"] = Math.round(p), s && (this[this.placed ? "animate" : "attr"](r), this.placed = !0), this.alignAttr = r, this;
      }
      alignSetter(t) {
        let e = { left: "start", center: "middle", right: "end" };
        e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]));
      }
      animate(t, e, i) {
        let s = Rh(Xe(e, this.renderer.globalAnimation, !0)), r = s.defer;
        return Oi.hidden && (s.duration = 0), s.duration !== 0 ? (i && (s.complete = i), jh(() => {
          this.element && Bh(this, t, s);
        }, r)) : (this.attr(t, void 0, i || s.complete), Li(t, function(n, o) {
          s.step && s.step.call(this, n, { prop: o, pos: 1, elem: this });
        }, this)), this;
      }
      applyTextOutline(t) {
        let e = this.element;
        t.indexOf("contrast") !== -1 && (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
        let i = t.split(" "), s = i[i.length - 1], r = i[0];
        if (r && r !== "none" && _.svg) {
          this.fakeTS = !0, r = r.replace(/(^[\d\.]+)(.*?)$/g, function(c, d, p) {
            return 2 * Number(d) + p;
          }), this.removeTextOutline();
          let n = Oi.createElementNS(Es, "tspan");
          Xr(n, { class: "highcharts-text-outline", fill: s, stroke: s, "stroke-width": r, "stroke-linejoin": "round" });
          let o = e.querySelector("textPath") || e;
          [].forEach.call(o.childNodes, (c) => {
            let d = c.cloneNode(!0);
            d.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((p) => d.removeAttribute(p)), n.appendChild(d);
          });
          let a = 0;
          [].forEach.call(o.querySelectorAll("text tspan"), (c) => {
            a += Number(c.getAttribute("dy"));
          });
          let h = Oi.createElementNS(Es, "tspan");
          h.textContent = "​", Xr(h, { x: Number(e.getAttribute("x")), dy: -a }), n.appendChild(h), o.insertBefore(n, o.firstChild);
        }
      }
      attr(t, e, i, s) {
        let { element: r } = this, n = ae.symbolCustomAttribs, o, a, h = this, c;
        return typeof t == "string" && e !== void 0 && (o = t, (t = {})[o] = e), typeof t == "string" ? h = (this[t + "Getter"] || this._defaultGetter).call(this, t, r) : (Li(t, function(d, p) {
          c = !1, s || Ao(this, p), this.symbolName && n.indexOf(p) !== -1 && (a || (this.symbolAttr(t), a = !0), c = !0), this.rotation && (p === "x" || p === "y") && (this.doTransform = !0), c || (this[p + "Setter"] || this._defaultSetter).call(this, d, p, r);
        }, this), this.afterSetters()), i && i.call(this), h;
      }
      clip(t) {
        if (t && !t.clipPath) {
          let e = Io() + "-", i = this.renderer.createElement("clipPath").attr({ id: e }).add(this.renderer.defs);
          is(t, { clipPath: i, id: e, count: 0 }), t.add(i);
        }
        return this.attr("clip-path", t ? `url(${this.renderer.url}#${t.id})` : "none");
      }
      crisp(t, e) {
        e = Math.round(e || t.strokeWidth || 0);
        let i = t.x || this.x || 0, s = t.y || this.y || 0, r = (t.width || this.width || 0) + i, n = (t.height || this.height || 0) + s, o = Os(i, e), a = Os(s, e);
        return is(t, { x: o, y: a, width: Os(r, e) - o, height: Os(n, e) - a }), Ze(t.strokeWidth) && (t.strokeWidth = e), t;
      }
      complexColor(t, e, i) {
        let s = this.renderer, r, n, o, a, h, c, d, p, u, f, m = [], x;
        Yr(this.renderer, "complexColor", { args: arguments }, function() {
          if (t.radialGradient ? n = "radialGradient" : t.linearGradient && (n = "linearGradient"), n) {
            if (o = t[n], h = s.gradients, c = t.stops, u = i.radialReference, Oo(o) && (t[n] = o = { x1: o[0], y1: o[1], x2: o[2], y2: o[3], gradientUnits: "userSpaceOnUse" }), n === "radialGradient" && u && !Ze(o.gradientUnits) && (a = o, o = jr(o, s.getRadialAttr(u, a), { gradientUnits: "userSpaceOnUse" })), Li(o, function(g, b) {
              b !== "id" && m.push(b, g);
            }), Li(c, function(g) {
              m.push(g);
            }), h[m = m.join(",")]) f = h[m].attr("id");
            else {
              o.id = f = Io();
              let g = h[m] = s.createElement(n).attr(o).add(s.defs);
              g.radAttr = a, g.stops = [], c.forEach(function(b) {
                b[1].indexOf("rgba") === 0 ? (d = (r = ie.parse(b[1])).get("rgb"), p = r.get("a")) : (d = b[1], p = 1);
                let v = s.createElement("stop").attr({ offset: b[0], "stop-color": d, "stop-opacity": p }).add(g);
                g.stops.push(v);
              });
            }
            x = "url(" + s.url + "#" + f + ")", i.setAttribute(e, x), i.gradient = m, t.toString = function() {
              return x;
            };
          }
        });
      }
      css(t) {
        let e = this.styles, i = {}, s = this.element, r, n = !e;
        if (e && Li(t, function(o, a) {
          e && e[a] !== o && (i[a] = o, n = !0);
        }), n) {
          e && (t = is(e, i)), t.width === null || t.width === "auto" ? delete this.textWidth : s.nodeName.toLowerCase() === "text" && t.width && (r = this.textWidth = Ls(t.width)), is(this.styles, t), r && !Nh && this.renderer.forExport && delete t.width;
          let o = jr(t);
          s.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "whiteSpace", "width"].forEach((a) => o && delete o[a]), o.color && (o.fill = o.color)), Eo(s, o);
        }
        return this.added && (this.element.nodeName === "text" && this.renderer.buildText(this), t.textOutline && this.applyTextOutline(t.textOutline)), this;
      }
      dashstyleSetter(t) {
        let e, i = this["stroke-width"];
        if (i === "inherit" && (i = 1), t = t && t.toLowerCase()) {
          let s = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
          for (e = s.length; e--; ) s[e] = "" + Ls(s[e]) * Xe(i, NaN);
          t = s.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t);
        }
      }
      destroy() {
        var a;
        let t = this, e = t.element || {}, i = t.renderer, s = e.ownerSVGElement, r = e.nodeName === "SPAN" && t.parentGroup || void 0, n, o;
        if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, Ao(t), t.clipPath && s) {
          let h = t.clipPath;
          [].forEach.call(s.querySelectorAll("[clip-path],[CLIP-PATH]"), function(c) {
            c.getAttribute("clip-path").indexOf(h.element.id) > -1 && c.removeAttribute("clip-path");
          }), t.clipPath = h.destroy();
        }
        if (t.connector = (a = t.connector) == null ? void 0 : a.destroy(), t.stops) {
          for (o = 0; o < t.stops.length; o++) t.stops[o].destroy();
          t.stops.length = 0, t.stops = void 0;
        }
        for (t.safeRemoveChild(e); r && r.div && r.div.childNodes.length === 0; ) n = r.parentGroup, t.safeRemoveChild(r.div), delete r.div, r = n;
        t.alignOptions && Hh(i.alignedObjects, t), Li(t, function(h, c) {
          t[c] && t[c].parentGroup === t && t[c].destroy && t[c].destroy(), delete t[c];
        });
      }
      dSetter(t, e, i) {
        Oo(t) && (typeof t[0] == "string" && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce((s, r, n) => r && r.join ? (n ? s + " " : "") + r.join(" ") : (r || "").toString(), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t);
      }
      fillSetter(t, e, i) {
        typeof t == "string" ? i.setAttribute(e, t) : t && this.complexColor(t, e, i);
      }
      hrefSetter(t, e, i) {
        i.setAttributeNS("http://www.w3.org/1999/xlink", e, t);
      }
      getBBox(t, e) {
        let i, s, r, n, { alignValue: o, element: a, renderer: h, styles: c, textStr: d } = this, { cache: p, cacheKeys: u } = h, f = a.namespaceURI === this.SVG_NS, m = Xe(e, this.rotation, 0), x = h.styledMode ? a && ae.prototype.getStyle.call(a, "font-size") : c.fontSize;
        if (Ze(d) && ((n = d.toString()).indexOf("<") === -1 && (n = n.replace(/\d/g, "0")), n += ["", h.rootFontSize, x, m, this.textWidth, o, c.lineClamp, c.textOverflow, c.fontWeight].join(",")), n && !t && (i = p[n]), !i || i.polygon) {
          if (f || h.forExport) {
            try {
              r = this.fakeTS && function(b) {
                let v = a.querySelector(".highcharts-text-outline");
                v && Eo(v, { display: b });
              }, Lo(r) && r("none"), i = a.getBBox ? is({}, a.getBBox()) : { width: a.offsetWidth, height: a.offsetHeight, x: 0, y: 0 }, Lo(r) && r("");
            } catch {
            }
            (!i || i.width < 0) && (i = { x: 0, y: 0, width: 0, height: 0 });
          } else i = this.htmlGetBBox();
          s = i.height, f && (i.height = s = { "11px,17": 14, "13px,20": 16 }[`${x || ""},${Math.round(s)}`] || s), m && (i = this.getRotatedBox(i, m));
          let g = { bBox: i };
          Yr(this, "afterGetBBox", g), i = g.bBox;
        }
        if (n && (d === "" || i.height > 0)) {
          for (; u.length > 250; ) delete p[u.shift()];
          p[n] || u.push(n), p[n] = i;
        }
        return i;
      }
      getRotatedBox(t, e) {
        let { x: i, y: s, width: r, height: n } = t, { alignValue: o, translateY: a, rotationOriginX: h = 0, rotationOriginY: c = 0 } = this, d = Gr(o), p = Number(this.element.getAttribute("y") || 0) - (a ? 0 : s), u = e * Po, f = (e - 90) * Po, m = Math.cos(u), x = Math.sin(u), g = r * m, b = r * x, v = Math.cos(f), M = Math.sin(f), [[C, S], [A, T]] = [h, c].map((lt) => [lt - lt * m, lt * x]), L = i + d * (r - g) + C + T + p * v, B = L + g, W = B - n * v, G = W - g, D = s + p - d * b - S + A + p * M, Y = D + b, it = Y - n * M, pt = it - b, J = Math.min(L, B, W, G), dt = Math.min(D, Y, it, pt), $ = Math.max(L, B, W, G) - J, rt = Math.max(D, Y, it, pt) - dt;
        return { x: J, y: dt, width: $, height: rt, polygon: [[L, D], [B, Y], [W, it], [G, pt]] };
      }
      getStyle(t) {
        return zh.getComputedStyle(this.element || this, "").getPropertyValue(t);
      }
      hasClass(t) {
        return ("" + this.attr("class")).split(" ").indexOf(t) !== -1;
      }
      hide() {
        return this.attr({ visibility: "hidden" });
      }
      htmlGetBBox() {
        return { height: 0, width: 0, x: 0, y: 0 };
      }
      constructor(t, e) {
        this.onEvents = {}, this.opacity = 1, this.SVG_NS = Es, this.element = e === "span" || e === "body" ? Fh(e) : Oi.createElementNS(this.SVG_NS, e), this.renderer = t, this.styles = {}, Yr(this, "afterInit");
      }
      on(t, e) {
        let { onEvents: i } = this;
        return i[t] && i[t](), i[t] = Wh(this.element, t, e), this;
      }
      opacitySetter(t, e, i) {
        let s = Number(Number(t).toFixed(3));
        this.opacity = s, i.setAttribute(e, s);
      }
      reAlign() {
        var t;
        (t = this.alignOptions) != null && t.width && this.alignOptions.align !== "left" && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align());
      }
      removeClass(t) {
        return this.attr("class", ("" + this.attr("class")).replace(_o(t) ? RegExp(`(^| )${t}( |$)`) : t, " ").replace(/ +/g, " ").trim());
      }
      removeTextOutline() {
        let t = this.element.querySelector("tspan.highcharts-text-outline");
        t && this.safeRemoveChild(t);
      }
      safeRemoveChild(t) {
        let e = t.parentNode;
        e && e.removeChild(t);
      }
      setRadialReference(t) {
        let e = this.element.gradient && this.renderer.gradients[this.element.gradient];
        return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this;
      }
      shadow(t) {
        var r;
        let { renderer: e } = this, i = jr(((r = this.parentGroup) == null ? void 0 : r.rotation) === 90 ? { offsetX: -1, offsetY: -1 } : {}, Xh(t) ? t : {}), s = e.shadowDefinition(i);
        return this.attr({ filter: t ? `url(${e.url}#${s})` : "none" });
      }
      show(t = !0) {
        return this.attr({ visibility: t ? "inherit" : "visible" });
      }
      "stroke-widthSetter"(t, e, i) {
        this[e] = t, i.setAttribute(e, t);
      }
      strokeWidth() {
        if (!this.renderer.styledMode) return this["stroke-width"] || 0;
        let t = this.getStyle("stroke-width"), e = 0, i;
        return /px$/.test(t) ? e = Ls(t) : t !== "" && (Xr(i = Oi.createElementNS(Es, "rect"), { width: t, "stroke-width": 0 }), this.element.parentNode.appendChild(i), e = i.getBBox().width, i.parentNode.removeChild(i)), e;
      }
      symbolAttr(t) {
        let e = this;
        ae.symbolCustomAttribs.forEach(function(i) {
          e[i] = Xe(t[i], e[i]);
        }), e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) });
      }
      textSetter(t) {
        t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this), this.reAlign());
      }
      titleSetter(t) {
        let e = this.element, i = e.getElementsByTagName("title")[0] || Oi.createElementNS(this.SVG_NS, "title");
        e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.textContent = Gh(Xe(t, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      }
      toFront() {
        let t = this.element;
        return t.parentNode.appendChild(t), this;
      }
      translate(t, e) {
        return this.attr({ translateX: t, translateY: e });
      }
      updateTransform(t = "transform") {
        var p;
        let { element: e, matrix: i, rotation: s = 0, rotationOriginX: r, rotationOriginY: n, scaleX: o, scaleY: a, translateX: h = 0, translateY: c = 0 } = this, d = ["translate(" + h + "," + c + ")"];
        Ze(i) && d.push("matrix(" + i.join(",") + ")"), s && (d.push("rotate(" + s + " " + Xe(r, e.getAttribute("x"), 0) + " " + Xe(n, e.getAttribute("y") || 0) + ")"), ((p = this.text) == null ? void 0 : p.element.tagName) === "SPAN" && this.text.attr({ rotation: s, rotationOriginX: (r || 0) - this.padding, rotationOriginY: (n || 0) - this.padding })), (Ze(o) || Ze(a)) && d.push("scale(" + Xe(o, 1) + " " + Xe(a, 1) + ")"), d.length && !(this.text || this).textPath && e.setAttribute(t, d.join(" "));
      }
      visibilitySetter(t, e, i) {
        t === "inherit" ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t;
      }
      xGetter(t) {
        return this.element.nodeName === "circle" && (t === "x" ? t = "cx" : t === "y" && (t = "cy")), this._defaultGetter(t);
      }
      zIndexSetter(t, e) {
        let i = this.renderer, s = this.parentGroup, r = (s || i).element || i.box, n = this.element, o = r === i.box, a, h, c, d = !1, p, u = this.added, f;
        if (Ze(t) ? (n.setAttribute("data-z-index", t), t = +t, this[e] === t && (u = !1)) : Ze(this[e]) && n.removeAttribute("data-z-index"), this[e] = t, u) {
          for ((t = this.zIndex) && s && (s.handleZ = !0), f = (a = r.childNodes).length - 1; f >= 0 && !d; f--) p = !Ze(c = (h = a[f]).getAttribute("data-z-index")), h !== n && (t < 0 && p && !o && !f ? (r.insertBefore(n, a[f]), d = !0) : (Ls(c) <= t || p && (!Ze(t) || t >= 0)) && (r.insertBefore(n, a[f + 1]), d = !0));
          d || (r.insertBefore(n, a[o ? 3 : 0]), d = !0);
        }
        return d;
      }
    }
    ae.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], ae.prototype.strokeSetter = ae.prototype.fillSetter, ae.prototype.yGetter = ae.prototype.xGetter, ae.prototype.matrixSetter = ae.prototype.rotationOriginXSetter = ae.prototype.rotationOriginYSetter = ae.prototype.rotationSetter = ae.prototype.scaleXSetter = ae.prototype.scaleYSetter = ae.prototype.translateXSetter = ae.prototype.translateYSetter = ae.prototype.verticalAlignSetter = function(l, t) {
      this[t] = l, this.doTransform = !0;
    };
    let Je = ae, { defined: Ur, extend: Uh, getAlignFactor: Do, isNumber: ss, merge: Vh, pick: _s, removeEvent: Bo } = U;
    class bi extends Je {
      constructor(t, e, i, s, r, n, o, a, h, c) {
        let d;
        super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = e, this.x = i, this.y = s, this.anchorX = n, this.anchorY = o, this.baseline = h, this.className = c, this.addClass(c === "button" ? "highcharts-no-tooltip" : "highcharts-label"), c && this.addClass("highcharts-" + c), this.text = t.text(void 0, 0, 0, a).attr({ zIndex: 1 }), typeof r == "string" && ((d = /^url\((.*?)\)$/.test(r)) || this.renderer.symbols[r]) && (this.symbolKey = r), this.bBox = bi.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || d, this.deferredAttr = {}, this.alignFactor = 0;
      }
      alignSetter(t) {
        let e = Do(t);
        e !== this.alignFactor && (this.alignFactor = e, this.bBox && ss(this.xSetting) && this.attr({ x: this.xSetting }));
      }
      anchorXSetter(t, e) {
        this.anchorX = t, this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting);
      }
      anchorYSetter(t, e) {
        this.anchorY = t, this.boxAttr(e, t - this.ySetting);
      }
      boxAttr(t, e) {
        this.box ? this.box.attr(t, e) : this.deferredAttr[t] = e;
      }
      css(t) {
        if (t) {
          let e = {};
          t = Vh(t), bi.textProps.forEach((i) => {
            t[i] !== void 0 && (e[i] = t[i], delete t[i]);
          }), this.text.css(e), "fontSize" in e || "fontWeight" in e ? this.updateTextPadding() : ("width" in e || "textOverflow" in e) && this.updateBoxSize();
        }
        return Je.prototype.css.call(this, t);
      }
      destroy() {
        Bo(this.element, "mouseenter"), Bo(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), Je.prototype.destroy.call(this);
      }
      fillSetter(t, e) {
        t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t);
      }
      getBBox(t, e) {
        this.textStr && this.bBox.width === 0 && this.bBox.height === 0 && this.updateBoxSize();
        let { padding: i, height: s = 0, translateX: r = 0, translateY: n = 0, width: o = 0 } = this, a = _s(this.paddingLeft, i), h = e ?? (this.rotation || 0), c = { width: o, height: s, x: r + this.bBox.x - a, y: n + this.bBox.y - i + this.baselineOffset };
        return h && (c = this.getRotatedBox(c, h)), c;
      }
      getCrispAdjust() {
        return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
      }
      heightSetter(t) {
        this.heightSetting = t, this.doUpdate = !0;
      }
      afterSetters() {
        super.afterSetters(), this.doUpdate && (this.updateBoxSize(), this.doUpdate = !1);
      }
      onAdd() {
        this.text.add(this), this.attr({ text: _s(this.textStr, ""), x: this.x || 0, y: this.y || 0 }), this.box && Ur(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
      }
      paddingSetter(t, e) {
        ss(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0;
      }
      rSetter(t, e) {
        this.boxAttr(e, t);
      }
      strokeSetter(t, e) {
        this.stroke = t, this.boxAttr(e, t);
      }
      "stroke-widthSetter"(t, e) {
        t && (this.needsBox = !0), this["stroke-width"] = t, this.boxAttr(e, t);
      }
      "text-alignSetter"(t) {
        this.textAlign = t;
      }
      textSetter(t) {
        t !== void 0 && this.text.attr({ text: t }), this.updateTextPadding(), this.reAlign();
      }
      updateBoxSize() {
        let t, e = this.text, i = {}, s = this.padding, r = this.bBox = (!ss(this.widthSetting) || !ss(this.heightSetting) || this.textAlign) && Ur(e.textStr) ? e.getBBox(void 0, 0) : bi.emptyBBox;
        this.width = this.getPaddedWidth(), this.height = (this.heightSetting || r.height || 0) + 2 * s;
        let n = this.renderer.fontMetrics(e);
        if (this.baselineOffset = s + Math.min((this.text.firstLineMetrics || n).b, r.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - n.h) / 2), this.needsBox && !e.textPath) {
          if (!this.box) {
            let o = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
            o.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), o.add(this);
          }
          t = this.getCrispAdjust(), i.x = t, i.y = (this.baseline ? -this.baselineOffset : 0) + t, i.width = Math.round(this.width), i.height = Math.round(this.height), this.box.attr(Uh(i, this.deferredAttr)), this.deferredAttr = {};
        }
      }
      updateTextPadding() {
        let t = this.text;
        if (!t.textPath) {
          this.updateBoxSize();
          let e = this.baseline ? 0 : this.baselineOffset, i = (this.paddingLeft ?? this.padding) + (Ur(this.widthSetting) && this.bBox ? Do(this.textAlign) * (this.widthSetting - this.bBox.width) : 0);
          (i !== t.x || e !== t.y) && (t.attr("x", i), t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0)), e !== void 0 && t.attr("y", e)), t.x = i, t.y = e;
        }
      }
      widthSetter(t) {
        this.widthSetting = ss(t) ? t : void 0, this.doUpdate = !0;
      }
      getPaddedWidth() {
        let t = this.padding, e = _s(this.paddingLeft, t), i = _s(this.paddingRight, t);
        return (this.widthSetting || this.bBox.width || 0) + e + i;
      }
      xSetter(t) {
        this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting);
      }
      ySetter(t) {
        this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting);
      }
    }
    bi.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }, bi.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineClamp", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"];
    let { defined: Ro, isNumber: qh, pick: rs } = U;
    function No(l, t, e, i, s) {
      let r = [];
      if (s) {
        let n = s.start || 0, o = rs(s.r, e), a = rs(s.r, i || e), h = 2e-4 / (s.borderRadius ? 1 : Math.max(o, 1)), c = Math.abs((s.end || 0) - n - 2 * Math.PI) < h, d = (s.end || 0) - (c ? h : 0), p = s.innerR, u = rs(s.open, c), f = Math.cos(n), m = Math.sin(n), x = Math.cos(d), g = Math.sin(d), b = rs(s.longArc, d - n - Math.PI < h ? 0 : 1), v = ["A", o, a, 0, b, rs(s.clockwise, 1), l + o * x, t + a * g];
        v.params = { start: n, end: d, cx: l, cy: t }, r.push(["M", l + o * f, t + a * m], v), Ro(p) && ((v = ["A", p, p, 0, b, Ro(s.clockwise) ? 1 - s.clockwise : 0, l + p * f, t + p * m]).params = { start: d, end: n, cx: l, cy: t }, r.push(u ? ["M", l + p * x, t + p * g] : ["L", l + p * x, t + p * g], v)), u || r.push(["Z"]);
      }
      return r;
    }
    function zo(l, t, e, i, s) {
      return s && s.r ? Vr(l, t, e, i, s) : [["M", l, t], ["L", l + e, t], ["L", l + e, t + i], ["L", l, t + i], ["Z"]];
    }
    function Vr(l, t, e, i, s) {
      let r = (s == null ? void 0 : s.r) || 0;
      return [["M", l + r, t], ["L", l + e - r, t], ["A", r, r, 0, 0, 1, l + e, t + r], ["L", l + e, t + i - r], ["A", r, r, 0, 0, 1, l + e - r, t + i], ["L", l + r, t + i], ["A", r, r, 0, 0, 1, l, t + i - r], ["L", l, t + r], ["A", r, r, 0, 0, 1, l + r, t], ["Z"]];
    }
    let Wo = { arc: No, callout: function(l, t, e, i, s) {
      let r = Math.min(s && s.r || 0, e, i), n = r + 6, o = s && s.anchorX, a = s && s.anchorY || 0, h = Vr(l, t, e, i, { r });
      if (!qh(o) || o < e && o > 0 && a < i && a > 0) return h;
      if (l + o > e - n)
        if (a > t + n && a < t + i - n) h.splice(3, 1, ["L", l + e, a - 6], ["L", l + e + 6, a], ["L", l + e, a + 6], ["L", l + e, t + i - r]);
        else if (o < e) {
          let c = a < t + n, d = c ? t : t + i;
          h.splice(c ? 2 : 5, 0, ["L", o, a], ["L", l + e - r, d]);
        } else h.splice(3, 1, ["L", l + e, i / 2], ["L", o, a], ["L", l + e, i / 2], ["L", l + e, t + i - r]);
      else if (l + o < n)
        if (a > t + n && a < t + i - n) h.splice(7, 1, ["L", l, a + 6], ["L", l - 6, a], ["L", l, a - 6], ["L", l, t + r]);
        else if (o > 0) {
          let c = a < t + n, d = c ? t : t + i;
          h.splice(c ? 1 : 6, 0, ["L", o, a], ["L", l + r, d]);
        } else h.splice(7, 1, ["L", l, i / 2], ["L", o, a], ["L", l, i / 2], ["L", l, t + r]);
      else a > i && o < e - n ? h.splice(5, 1, ["L", o + 6, t + i], ["L", o, t + i + 6], ["L", o - 6, t + i], ["L", l + r, t + i]) : a < 0 && o > n && h.splice(1, 1, ["L", o - 6, t], ["L", o, t - 6], ["L", o + 6, t], ["L", e - r, t]);
      return h;
    }, circle: function(l, t, e, i) {
      return No(l + e / 2, t + i / 2, e / 2, i / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: !1 });
    }, diamond: function(l, t, e, i) {
      return [["M", l + e / 2, t], ["L", l + e, t + i / 2], ["L", l + e / 2, t + i], ["L", l, t + i / 2], ["Z"]];
    }, rect: zo, roundedRect: Vr, square: zo, triangle: function(l, t, e, i) {
      return [["M", l + e / 2, t], ["L", l + e, t + i], ["L", l, t + i], ["Z"]];
    }, "triangle-down": function(l, t, e, i) {
      return [["M", l, t], ["L", l + e, t], ["L", l + e / 2, t + i], ["Z"]];
    } }, { doc: qr, SVG_NS: $h, win: Fo } = _, { attr: $r, extend: Kh, fireEvent: Zh, isString: Jh, objectEach: Qh, pick: td } = U, Kr = (l, t) => l.substring(0, t) + "…", ed = class {
      constructor(l) {
        let t = l.styles;
        this.renderer = l.renderer, this.svgElement = l, this.width = l.textWidth, this.textLineHeight = t && t.lineHeight, this.textOutline = t && t.textOutline, this.ellipsis = !!(t && t.textOverflow === "ellipsis"), this.lineClamp = t == null ? void 0 : t.lineClamp, this.noWrap = !!(t && t.whiteSpace === "nowrap");
      }
      buildSVG() {
        let l = this.svgElement, t = l.element, e = l.renderer, i = td(l.textStr, "").toString(), s = i.indexOf("<") !== -1, r = t.childNodes, n = !l.added && e.box, o = [i, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, l.getStyle("font-size"), l.styles.lineClamp, this.width].join(",");
        if (o !== l.textCache) {
          l.textCache = o, delete l.actualWidth;
          for (let a = r.length; a--; ) t.removeChild(r[a]);
          if (s || this.ellipsis || this.width || l.textPath || i.indexOf(" ") !== -1 && (!this.noWrap || /<br.*?>/g.test(i))) {
            if (i !== "") {
              n && n.appendChild(t);
              let a = new Ft(i);
              this.modifyTree(a.nodes), a.addToDOM(t), this.modifyDOM(), this.ellipsis && (t.textContent || "").indexOf("…") !== -1 && l.attr("title", this.unescapeEntities(l.textStr || "", ["&lt;", "&gt;"])), n && n.removeChild(t);
            }
          } else t.appendChild(qr.createTextNode(this.unescapeEntities(i)));
          Jh(this.textOutline) && l.applyTextOutline && l.applyTextOutline(this.textOutline);
        }
      }
      modifyDOM() {
        let l, t = this.svgElement, e = $r(t.element, "x");
        for (t.firstLineMetrics = void 0; (l = t.element.firstChild) && /^[\s\u200B]*$/.test(l.textContent || " "); ) t.element.removeChild(l);
        [].forEach.call(t.element.querySelectorAll("tspan.highcharts-br"), (n, o) => {
          n.nextSibling && n.previousSibling && (o === 0 && n.previousSibling.nodeType === 1 && (t.firstLineMetrics = t.renderer.fontMetrics(n.previousSibling)), $r(n, { dy: this.getLineHeight(n.nextSibling), x: e }));
        });
        let i = this.width || 0;
        if (!i) return;
        let s = (n, o) => {
          var m;
          let a = n.textContent || "", h = a.replace(/([^\^])-/g, "$1- ").split(" "), c = !this.noWrap && (h.length > 1 || t.element.childNodes.length > 1), d = this.getLineHeight(o), p = Math.max(0, i - 0.8 * d), u = 0, f = t.actualWidth;
          if (c) {
            let x = [], g = [];
            for (; o.firstChild && o.firstChild !== n; ) g.push(o.firstChild), o.removeChild(o.firstChild);
            for (; h.length; ) if (h.length && !this.noWrap && u > 0 && (x.push(n.textContent || ""), n.textContent = h.join(" ").replace(/- /g, "-")), this.truncate(n, void 0, h, u === 0 && f || 0, i, p, (b, v) => h.slice(0, v).join(" ").replace(/- /g, "-")), f = t.actualWidth, u++, this.lineClamp && u >= this.lineClamp) {
              h.length && (this.truncate(n, n.textContent || "", void 0, 0, i, p, Kr), n.textContent = ((m = n.textContent) == null ? void 0 : m.replace("…", "")) + "…");
              break;
            }
            g.forEach((b) => {
              o.insertBefore(b, n);
            }), x.forEach((b) => {
              o.insertBefore(qr.createTextNode(b), n);
              let v = qr.createElementNS($h, "tspan");
              v.textContent = "​", $r(v, { dy: d, x: e }), o.insertBefore(v, n);
            });
          } else this.ellipsis && a && this.truncate(n, a, void 0, 0, i, p, Kr);
        }, r = (n) => {
          [].slice.call(n.childNodes).forEach((o) => {
            o.nodeType === Fo.Node.TEXT_NODE ? s(o, n) : (o.className.baseVal.indexOf("highcharts-br") !== -1 && (t.actualWidth = 0), r(o));
          });
        };
        r(t.element);
      }
      getLineHeight(l) {
        let t = l.nodeType === Fo.Node.TEXT_NODE ? l.parentElement : l;
        return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(t || this.svgElement.element).h;
      }
      modifyTree(l) {
        let t = (e, i) => {
          let { attributes: s = {}, children: r, style: n = {}, tagName: o } = e, a = this.renderer.styledMode;
          if (o === "b" || o === "strong" ? a ? s.class = "highcharts-strong" : n.fontWeight = "bold" : (o === "i" || o === "em") && (a ? s.class = "highcharts-emphasized" : n.fontStyle = "italic"), n && n.color && (n.fill = n.color), o === "br") {
            s.class = "highcharts-br", e.textContent = "​";
            let h = l[i + 1];
            h && h.textContent && (h.textContent = h.textContent.replace(/^ +/gm, ""));
          } else o === "a" && r && r.some((h) => h.tagName === "#text") && (e.children = [{ children: r, tagName: "tspan" }]);
          o !== "#text" && o !== "a" && (e.tagName = "tspan"), Kh(e, { attributes: s, style: n }), r && r.filter((h) => h.tagName !== "#text").forEach(t);
        };
        l.forEach(t), Zh(this.svgElement, "afterModifyTree", { nodes: l });
      }
      truncate(l, t, e, i, s, r, n) {
        let o, a, h = this.svgElement, { rotation: c } = h, d = [], p = e && !i ? 1 : 0, u = (t || e || "").length, f = u;
        e || (s = r);
        let m = function(x, g) {
          let b = g || x, v = l.parentNode;
          if (v && d[b] === void 0 && v.getSubStringLength) try {
            d[b] = i + v.getSubStringLength(0, e && !i ? b + 1 : b);
          } catch {
          }
          return d[b];
        };
        if (h.rotation = 0, i + (a = m(l.textContent.length)) > s) {
          for (; p <= u; ) f = Math.ceil((p + u) / 2), e && (o = n(e, f)), a = m(f, o && o.length - 1), p === u ? p = u + 1 : a > s ? u = f - 1 : p = f;
          u === 0 ? l.textContent = "" : t && u === t.length - 1 || (l.textContent = o || n(t || e, f)), this.ellipsis && a > s && this.truncate(l, l.textContent || "", void 0, 0, s, r, Kr);
        }
        e && e.splice(0, f), h.actualWidth = a, h.rotation = c;
      }
      unescapeEntities(l, t) {
        return Qh(this.renderer.escapes, function(e, i) {
          t && t.indexOf(e) !== -1 || (l = l.toString().replace(RegExp(e, "g"), i));
        }), l;
      }
    }, { defaultOptions: id } = ke, { charts: sd, deg2rad: Ho, doc: _i, isFirefox: Xo, isMS: Yo, isWebKit: rd, noop: nd, SVG_NS: od, symbolSizes: ns, win: Zr } = _, { addEvent: Is, attr: Ds, createElement: ad, crisp: Go, css: Bs, defined: ki, destroyObjectProperties: ld, extend: wi, isArray: hd, isNumber: os, isObject: as, isString: dd, merge: Jr, pick: Qr, pInt: cd, replaceNested: pd, uniqueKey: ud } = U;
    class Rs {
      constructor(t, e, i, s, r, n, o) {
        let a, h, c = this.createElement("svg").attr({ version: "1.1", class: "highcharts-root" }), d = c.element;
        o || c.css(this.getStyle(s || {})), t.appendChild(d), Ds(t, "dir", "ltr"), t.innerHTML.indexOf("xmlns") === -1 && Ds(d, "xmlns", this.SVG_NS), this.box = d, this.boxWrapper = c, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(_i.createTextNode("Created with Highcharts 12.0.1")), this.defs = this.createElement("defs").add(), this.allowHTML = n, this.forExport = r, this.styledMode = o, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = c.getStyle("font-size"), this.setSize(e, i, !1), Xo && t.getBoundingClientRect && ((a = function() {
          Bs(t, { left: 0, top: 0 }), h = t.getBoundingClientRect(), Bs(t, { left: Math.ceil(h.left) - h.left + "px", top: Math.ceil(h.top) - h.top + "px" });
        })(), this.unSubPixelFix = Is(Zr, "resize", a));
      }
      definition(t) {
        return new Ft([t]).addToDOM(this.defs.element);
      }
      getReferenceURL() {
        if ((Xo || rd) && _i.getElementsByTagName("base").length) {
          if (!ki(O)) {
            let t = ud(), e = new Ft([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: t }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": `url(#${t})`, fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(_i.body);
            Bs(e, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
            let i = _i.elementFromPoint(6, 6);
            O = (i && i.id) === "hitme", _i.body.removeChild(e);
          }
          if (O) return pd(Zr.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
        }
        return "";
      }
      getStyle(t) {
        return this.style = wi({ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif', fontSize: "1rem" }, t), this.style;
      }
      setStyle(t) {
        this.boxWrapper.css(this.getStyle(t));
      }
      isHidden() {
        return !this.boxWrapper.getBBox().width;
      }
      destroy() {
        let t = this.defs;
        return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), ld(this.gradients || {}), this.gradients = null, this.defs = t.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null;
      }
      createElement(t) {
        return new this.Element(this, t);
      }
      getRadialAttr(t, e) {
        return { cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2], cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2], r: (e.r || 0) * t[2] };
      }
      shadowDefinition(t) {
        let e = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t).map((s) => `${s}-${t[s]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), i = Jr({ color: "#000000", offsetX: 1, offsetY: 1, opacity: 0.15, width: 5 }, t);
        return this.defs.element.querySelector(`#${e}`) || this.definition({ tagName: "filter", attributes: { id: e, filterUnits: i.filterUnits }, children: this.getShadowFilterContent(i) }), e;
      }
      getShadowFilterContent(t) {
        return [{ tagName: "feDropShadow", attributes: { dx: t.offsetX, dy: t.offsetY, "flood-color": t.color, "flood-opacity": Math.min(5 * t.opacity, 1), stdDeviation: t.width / 2 } }];
      }
      buildText(t) {
        new ed(t).buildSVG();
      }
      getContrast(t) {
        let e = ie.parse(t).rgba.map((s) => {
          let r = s / 255;
          return r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        }), i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
        return 1.05 / (i + 0.05) > (i + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
      }
      button(t, e, i, s, r = {}, n, o, a, h, c) {
        let d = this.label(t, e, i, h, void 0, void 0, c, void 0, "button"), p = this.styledMode, u = arguments, f = 0;
        r = Jr(id.global.buttonTheme, r), p && (delete r.fill, delete r.stroke, delete r["stroke-width"]);
        let m = r.states || {}, x = r.style || {};
        delete r.states, delete r.style;
        let g = [Ft.filterUserAttributes(r)], b = [x];
        return p || ["hover", "select", "disabled"].forEach((v, M) => {
          g.push(Jr(g[0], Ft.filterUserAttributes(u[M + 5] || m[v] || {}))), b.push(g[M + 1].style), delete g[M + 1].style;
        }), Is(d.element, Yo ? "mouseover" : "mouseenter", function() {
          f !== 3 && d.setState(1);
        }), Is(d.element, Yo ? "mouseout" : "mouseleave", function() {
          f !== 3 && d.setState(f);
        }), d.setState = (v = 0) => {
          if (v !== 1 && (d.state = f = v), d.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][v]), !p) {
            d.attr(g[v]);
            let M = b[v];
            as(M) && d.css(M);
          }
        }, d.attr(g[0]), !p && (d.css(wi({ cursor: "default" }, x)), c && d.text.css({ pointerEvents: "none" })), d.on("touchstart", (v) => v.stopPropagation()).on("click", function(v) {
          f !== 3 && s.call(d, v);
        });
      }
      crispLine(t, e) {
        let [i, s] = t;
        return ki(i[1]) && i[1] === s[1] && (i[1] = s[1] = Go(i[1], e)), ki(i[2]) && i[2] === s[2] && (i[2] = s[2] = Go(i[2], e)), t;
      }
      path(t) {
        let e = this.styledMode ? {} : { fill: "none" };
        return hd(t) ? e.d = t : as(t) && wi(e, t), this.createElement("path").attr(e);
      }
      circle(t, e, i) {
        let s = as(t) ? t : t === void 0 ? {} : { x: t, y: e, r: i }, r = this.createElement("circle");
        return r.xSetter = r.ySetter = function(n, o, a) {
          a.setAttribute("c" + o, n);
        }, r.attr(s);
      }
      arc(t, e, i, s, r, n) {
        let o;
        as(t) ? (e = (o = t).y, i = o.r, s = o.innerR, r = o.start, n = o.end, t = o.x) : o = { innerR: s, start: r, end: n };
        let a = this.symbol("arc", t, e, i, i, o);
        return a.r = i, a;
      }
      rect(t, e, i, s, r, n) {
        let o = as(t) ? t : t === void 0 ? {} : { x: t, y: e, r, width: Math.max(i || 0, 0), height: Math.max(s || 0, 0) }, a = this.createElement("rect");
        return this.styledMode || (n !== void 0 && (o["stroke-width"] = n, wi(o, a.crisp(o))), o.fill = "none"), a.rSetter = function(h, c, d) {
          a.r = h, Ds(d, { rx: h, ry: h });
        }, a.rGetter = function() {
          return a.r || 0;
        }, a.attr(o);
      }
      roundedRect(t) {
        return this.symbol("roundedRect").attr(t);
      }
      setSize(t, e, i) {
        this.width = t, this.height = e, this.boxWrapper.animate({ width: t, height: e }, { step: function() {
          this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
        }, duration: Qr(i, !0) ? void 0 : 0 }), this.alignElements();
      }
      g(t) {
        let e = this.createElement("g");
        return t ? e.attr({ class: "highcharts-" + t }) : e;
      }
      image(t, e, i, s, r, n) {
        let o = { preserveAspectRatio: "none" };
        os(e) && (o.x = e), os(i) && (o.y = i), os(s) && (o.width = s), os(r) && (o.height = r);
        let a = this.createElement("image").attr(o), h = function(c) {
          a.attr({ href: t }), n.call(a, c);
        };
        if (n) {
          a.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
          let c = new Zr.Image();
          Is(c, "load", h), c.src = t, c.complete && h({});
        } else a.attr({ href: t });
        return a;
      }
      symbol(t, e, i, s, r, n) {
        let o, a, h, c, d = this, p = /^url\((.*?)\)$/, u = p.test(t), f = !u && (this.symbols[t] ? t : "circle"), m = f && this.symbols[f];
        if (m) typeof e == "number" && (a = m.call(this.symbols, e || 0, i || 0, s || 0, r || 0, n)), o = this.path(a), d.styledMode || o.attr("fill", "none"), wi(o, { symbolName: f || void 0, x: e, y: i, width: s, height: r }), n && wi(o, n);
        else if (u) {
          h = t.match(p)[1];
          let x = o = this.image(h);
          x.imgwidth = Qr(n && n.width, ns[h] && ns[h].width), x.imgheight = Qr(n && n.height, ns[h] && ns[h].height), c = (g) => g.attr({ width: g.width, height: g.height }), ["width", "height"].forEach((g) => {
            x[`${g}Setter`] = function(b, v) {
              this[v] = b;
              let { alignByTranslate: M, element: C, width: S, height: A, imgwidth: T, imgheight: L } = this, B = v === "width" ? T : L, W = 1;
              n && n.backgroundSize === "within" && S && A && T && L ? (W = Math.min(S / T, A / L), Ds(C, { width: Math.round(T * W), height: Math.round(L * W) })) : C && B && C.setAttribute(v, B), !M && T && L && this.translate(((S || 0) - T * W) / 2, ((A || 0) - L * W) / 2);
            };
          }), ki(e) && x.attr({ x: e, y: i }), x.isImg = !0, x.symbolUrl = t, ki(x.imgwidth) && ki(x.imgheight) ? c(x) : (x.attr({ width: 0, height: 0 }), ad("img", { onload: function() {
            let g = sd[d.chartIndex];
            this.width === 0 && (Bs(this, { position: "absolute", top: "-999em" }), _i.body.appendChild(this)), ns[h] = { width: this.width, height: this.height }, x.imgwidth = this.width, x.imgheight = this.height, x.element && c(x), this.parentNode && this.parentNode.removeChild(this), d.imgCount--, d.imgCount || !g || g.hasLoaded || g.onload();
          }, src: h }), this.imgCount++);
        }
        return o;
      }
      clipRect(t, e, i, s) {
        return this.rect(t, e, i, s, 0);
      }
      text(t, e, i, s) {
        let r = {};
        if (s && (this.allowHTML || !this.forExport)) return this.html(t, e, i);
        r.x = Math.round(e || 0), i && (r.y = Math.round(i)), ki(t) && (r.text = t);
        let n = this.createElement("text").attr(r);
        return s && (!this.forExport || this.allowHTML) || (n.xSetter = function(o, a, h) {
          let c = h.getElementsByTagName("tspan"), d = h.getAttribute(a);
          for (let p = 0, u; p < c.length; p++) (u = c[p]).getAttribute(a) === d && u.setAttribute(a, o);
          h.setAttribute(a, o);
        }), n;
      }
      fontMetrics(t) {
        let e = cd(Je.prototype.getStyle.call(t, "font-size") || 0), i = e < 24 ? e + 3 : Math.round(1.2 * e), s = Math.round(0.8 * i);
        return { h: i, b: s, f: e };
      }
      rotCorr(t, e, i) {
        let s = t;
        return e && i && (s = Math.max(s * Math.cos(e * Ho), 4)), { x: -t / 3 * Math.sin(e * Ho), y: s };
      }
      pathToSegments(t) {
        let e = [], i = [], s = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
        for (let r = 0; r < t.length; r++) dd(i[0]) && os(t[r]) && i.length === s[i[0].toUpperCase()] && t.splice(r, 0, i[0].replace("M", "L").replace("m", "l")), typeof t[r] == "string" && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[r]);
        return e.push(i.slice(0)), e;
      }
      label(t, e, i, s, r, n, o, a, h) {
        return new bi(this, t, e, i, s, r, n, o, a, h);
      }
      alignElements() {
        this.alignedObjects.forEach((t) => t.align());
      }
    }
    wi(Rs.prototype, { Element: Je, SVG_NS: od, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: Wo, draw: nd }), es.registerRendererType("svg", Rs, !0);
    let { composed: fd } = _, { attr: gd, css: Ii, createElement: md, defined: jo, extend: xd, getAlignFactor: yd, isNumber: vd, pInt: bd, pushUnique: kd } = U;
    function Uo(l, t, e) {
      var s;
      let i = ((s = this.div) == null ? void 0 : s.style) || e.style;
      Je.prototype[`${t}Setter`].call(this, l, t, e), i && (i[t] = l);
    }
    let wd = (l, t) => {
      var e;
      if (!l.div) {
        let i = gd(l.element, "class"), s = l.css, r = md("div", i ? { className: i } : void 0, { position: "absolute", left: `${l.translateX || 0}px`, top: `${l.translateY || 0}px`, ...l.styles, display: l.display, opacity: l.opacity, visibility: l.visibility }, ((e = l.parentGroup) == null ? void 0 : e.div) || t);
        l.classSetter = (n, o, a) => {
          a.setAttribute("class", n), r.className = n;
        }, l.translateXSetter = l.translateYSetter = (n, o) => {
          l[o] = n, r.style[o === "translateX" ? "left" : "top"] = `${n}px`, l.doTransform = !0;
        }, l.opacitySetter = l.visibilitySetter = Uo, l.css = (n) => (s.call(l, n), n.cursor && (r.style.cursor = n.cursor), n.pointerEvents && (r.style.pointerEvents = n.pointerEvents), l), l.on = function() {
          return Je.prototype.on.apply({ element: r, onEvents: l.onEvents }, arguments), l;
        }, l.div = r;
      }
      return l.div;
    };
    class ls extends Je {
      static compose(t) {
        kd(fd, this.compose) && (t.prototype.html = function(e, i, s) {
          return new ls(this, "span").attr({ text: e, x: Math.round(i), y: Math.round(s) });
        });
      }
      constructor(t, e) {
        super(t, e), this.css({ position: "absolute", ...t.styledMode ? {} : { fontFamily: t.style.fontFamily, fontSize: t.style.fontSize } });
      }
      getSpanCorrection(t, e, i) {
        this.xCorr = -t * i, this.yCorr = -e;
      }
      css(t) {
        let e, { element: i } = this, s = i.tagName === "SPAN" && t && "width" in t, r = s && t.width;
        return s && (delete t.width, this.textWidth = bd(r) || void 0, e = !0), (t == null ? void 0 : t.textOverflow) === "ellipsis" && (t.overflow = "hidden"), t != null && t.lineClamp && (t.display = "-webkit-box", t.WebkitLineClamp = t.lineClamp, t.WebkitBoxOrient = "vertical", t.overflow = "hidden"), vd(Number(t == null ? void 0 : t.fontSize)) && (t.fontSize = t.fontSize + "px"), xd(this.styles, t), Ii(i, t), e && this.updateTransform(), this;
      }
      htmlGetBBox() {
        let { element: t } = this;
        return { x: t.offsetLeft, y: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight };
      }
      updateTransform() {
        var g;
        if (!this.added) {
          this.alignOnAdd = !0;
          return;
        }
        let { element: t, renderer: e, rotation: i, rotationOriginX: s, rotationOriginY: r, scaleX: n, scaleY: o, styles: a, textAlign: h = "left", textWidth: c, translateX: d = 0, translateY: p = 0, x: u = 0, y: f = 0 } = this, { display: m = "block", whiteSpace: x } = a;
        if (Ii(t, { marginLeft: `${d}px`, marginTop: `${p}px` }), t.tagName === "SPAN") {
          let b = [i, h, t.innerHTML, c, this.textAlign].join(","), v = -(((g = this.parentGroup) == null ? void 0 : g.padding) * 1) || 0, M, C = !1;
          if (c !== this.oldTextWidth) {
            let L = this.textPxLength ? this.textPxLength : (Ii(t, { width: "", whiteSpace: x || "nowrap" }), t.offsetWidth), B = c || 0;
            (B > this.oldTextWidth || L > B) && (/[ \-]/.test(t.textContent || t.innerText) || t.style.textOverflow === "ellipsis") && (Ii(t, { width: L > B || i || n ? c + "px" : "auto", display: m, whiteSpace: x || "normal" }), this.oldTextWidth = c, C = !0);
          }
          this.hasBoxWidthChanged = C, b !== this.cTT && (M = e.fontMetrics(t).b, jo(i) && (i !== (this.oldRotation || 0) || h !== this.oldAlign) && this.setSpanRotation(i, v, v), this.getSpanCorrection(!jo(i) && !this.textWidth && this.textPxLength || t.offsetWidth, M, yd(h)));
          let { xCorr: S = 0, yCorr: A = 0 } = this, T = { left: `${u + S}px`, top: `${f + A}px`, textAlign: h, transformOrigin: `${(s ?? u) - S - u - v}px ${(r ?? f) - A - f - v}px` };
          (n || o) && (T.transform = `scale(${n ?? 1},${o ?? 1})`), Ii(t, T), this.cTT = b, this.oldRotation = i, this.oldAlign = h;
        }
      }
      setSpanRotation(t, e, i) {
        Ii(this.element, { transform: `rotate(${t}deg)`, transformOrigin: `${e}% ${i}px` });
      }
      add(t) {
        let e, i = this.renderer.box.parentNode, s = [];
        if (this.parentGroup = t, t && !(e = t.div)) {
          let r = t;
          for (; r; ) s.push(r), r = r.parentGroup;
          for (let n of s.reverse()) e = wd(n, i);
        }
        return (e || i).appendChild(this.element), this.added = !0, this.alignOnAdd && this.updateTransform(), this;
      }
      textSetter(t) {
        t !== this.textStr && (delete this.bBox, delete this.oldTextWidth, Ft.setElementHTML(this.element, t ?? ""), this.textStr = t, this.doTransform = !0);
      }
      alignSetter(t) {
        this.alignValue = this.textAlign = t, this.doTransform = !0;
      }
      xSetter(t, e) {
        this[e] = t, this.doTransform = !0;
      }
    }
    let Mi = ls.prototype;
    Mi.visibilitySetter = Mi.opacitySetter = Uo, Mi.ySetter = Mi.rotationSetter = Mi.rotationOriginXSetter = Mi.rotationOriginYSetter = Mi.xSetter, function(l) {
      l.xAxis = { alignTicks: !0, allowDecimals: void 0, panningEnabled: !0, zIndex: 2, zoomEnabled: !0, dateTimeLabelFormats: { millisecond: { main: "%[HMSL]", range: !1 }, second: { main: "%[HMS]", range: !1 }, minute: { main: "%[HM]", range: !1 }, hour: { main: "%[HM]", range: !1 }, day: { main: "%[eb]" }, week: { main: "%[eb]" }, month: { main: "%[bY]" }, year: { main: "%Y" } }, endOnTick: !1, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotationLimit: 80, distance: 15, enabled: !0, indentation: 10, overflow: "justify", reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: !1, zIndex: 7, style: { color: "#333333", cursor: "default", fontSize: "0.8em", textOverflow: "ellipsis" } }, maxPadding: 0.01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minorTicksPerMajor: 5, minPadding: 0.01, offset: void 0, reversed: void 0, reversedStacks: !1, showEmpty: !0, showFirstLabel: !0, showLastLabel: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", useHTML: !1, x: 0, y: 0, style: { color: "#666666", fontSize: "0.8em" } }, visible: !0, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#333333", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#333333" }, l.yAxis = { reversedStacks: !0, endOnTick: !0, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: void 0 }, startOnTick: !0, title: { text: "Values" }, stackLabels: { animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function() {
        let { numberFormatter: t } = this.axis.chart;
        return t(this.total || 0, -1);
      }, style: { color: "#000000", fontSize: "0.7em", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 };
    }(Z || (Z = {}));
    let Md = Z, { addEvent: Sd, isFunction: Cd, objectEach: Td, removeEvent: Ad } = U;
    (R || (R = {})).registerEventOptions = function(l, t) {
      l.eventOptions = l.eventOptions || {}, Td(t.events, function(e, i) {
        l.eventOptions[i] !== e && (l.eventOptions[i] && (Ad(l, i, l.eventOptions[i]), delete l.eventOptions[i]), Cd(e) && (l.eventOptions[i] = e, Sd(l, i, e, { order: 0 })));
      });
    };
    let Ns = R, { deg2rad: tn } = _, { clamp: Pd, correctFloat: zs, defined: en, destroyObjectProperties: Ed, extend: Vo, fireEvent: hs, getAlignFactor: Od, isNumber: Ws, merge: Ld, objectEach: _d, pick: Ye } = U, Di = class {
      constructor(l, t, e, i, s) {
        this.isNew = !0, this.isNewLabel = !0, this.axis = l, this.pos = t, this.type = e || "", this.parameters = s || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, hs(this, "init"), e || i || this.addLabel();
      }
      addLabel() {
        let l = this, t = l.axis, e = t.options, i = t.chart, s = t.categories, r = t.logarithmic, n = t.names, o = l.pos, a = Ye(l.options && l.options.labels, e.labels), h = t.tickPositions, c = o === h[0], d = o === h[h.length - 1], p = (!a.step || a.step === 1) && t.tickInterval === 1, u = h.info, f = l.label, m, x, g, b = this.parameters.category || (s ? Ye(s[o], n[o], o) : o);
        r && Ws(b) && (b = zs(r.lin2log(b))), t.dateTime && (u ? m = (x = i.time.resolveDTLFormat(e.dateTimeLabelFormats[!e.grid && u.higherRanks[o] || u.unitName])).main : Ws(b) && (m = t.dateTime.getXDateFormat(b, e.dateTimeLabelFormats || {}))), l.isFirst = c, l.isLast = d;
        let v = { axis: t, chart: i, dateTimeLabelFormat: m, isFirst: c, isLast: d, pos: o, tick: l, tickPositionInfo: u, value: b };
        hs(this, "labelFormat", v);
        let M = (A) => a.formatter ? a.formatter.call(A, A) : a.format ? (A.text = t.defaultLabelFormatter.call(A), He.format(a.format, A, i)) : t.defaultLabelFormatter.call(A), C = M.call(v, v), S = x && x.list;
        S ? l.shortenLabel = function() {
          for (g = 0; g < S.length; g++) if (Vo(v, { dateTimeLabelFormat: S[g] }), f.attr({ text: M.call(v, v) }), f.getBBox().width < t.getSlotWidth(l) - 2 * (a.padding || 0)) return;
          f.attr({ text: "" });
        } : l.shortenLabel = void 0, p && t._addedPlotLB && l.moveLabel(C, a), en(f) || l.movedLabel ? f && f.textStr !== C && !p && (!f.textWidth || a.style.width || f.styles.width || f.css({ width: null }), f.attr({ text: C }), f.textPxLength = f.getBBox().width) : (l.label = f = l.createLabel(C, a), l.rotation = 0);
      }
      createLabel(l, t, e) {
        let i = this.axis, { renderer: s, styledMode: r } = i.chart, n = en(l) && t.enabled ? s.text(l, e == null ? void 0 : e.x, e == null ? void 0 : e.y, t.useHTML).add(i.labelGroup) : void 0;
        if (n) {
          let o = t.style.whiteSpace || "normal";
          r || n.css(Ld(t.style, { whiteSpace: "nowrap" })), n.textPxLength = n.getBBox().width, r || n.css({ whiteSpace: o });
        }
        return n;
      }
      destroy() {
        Ed(this, this.axis);
      }
      getPosition(l, t, e, i) {
        let s = this.axis, r = s.chart, n = i && r.oldChartHeight || r.chartHeight, o = { x: l ? zs(s.translate(t + e, void 0, void 0, i) + s.transB) : s.left + s.offset + (s.opposite ? (i && r.oldChartWidth || r.chartWidth) - s.right - s.left : 0), y: l ? n - s.bottom + s.offset - (s.opposite ? s.height : 0) : zs(n - s.translate(t + e, void 0, void 0, i) - s.transB) };
        return o.y = Pd(o.y, -1e9, 1e9), hs(this, "afterGetPosition", { pos: o }), o;
      }
      getLabelPosition(l, t, e, i, s, r, n, o) {
        let a, h, c = this.axis, d = c.transA, p = c.isLinked && c.linkedParent ? c.linkedParent.reversed : c.reversed, u = c.staggerLines, f = c.tickRotCorr || { x: 0, y: 0 }, m = i || c.reserveSpaceDefault ? 0 : -c.labelOffset * (c.labelAlign === "center" ? 0.5 : 1), x = s.distance, g = {};
        return a = c.side === 0 ? e.rotation ? -x : -e.getBBox().height : c.side === 2 ? f.y + x : Math.cos(e.rotation * tn) * (f.y - e.getBBox(!1, 0).height / 2), en(s.y) && (a = c.side === 0 && c.horiz ? s.y + a : s.y), l = l + Ye(s.x, [0, 1, 0, -1][c.side] * x) + m + f.x - (r && i ? r * d * (p ? -1 : 1) : 0), t = t + a - (r && !i ? r * d * (p ? 1 : -1) : 0), u && (h = n / (o || 1) % u, c.opposite && (h = u - h - 1), t += h * (c.labelOffset / u)), g.x = l, g.y = Math.round(t), hs(this, "afterGetLabelPosition", { pos: g, tickmarkOffset: r, index: n }), g;
      }
      getLabelSize() {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
      }
      getMarkPath(l, t, e, i, s = !1, r) {
        return r.crispLine([["M", l, t], ["L", l + (s ? 0 : -e), t + (s ? e : 0)]], i);
      }
      handleOverflow(l) {
        let t = this.axis, e = t.options.labels, i = l.x, s = t.chart.chartWidth, r = t.chart.spacing, n = Ye(t.labelLeft, Math.min(t.pos, r[3])), o = Ye(t.labelRight, Math.max(t.isRadial ? 0 : t.pos + t.len, s - r[1])), a = this.label, h = this.rotation, c = Od(t.labelAlign || a.attr("align")), d = a.getBBox().width, p = t.getSlotWidth(this), u = p, f = 1, m, x, g;
        h || e.overflow !== "justify" ? h < 0 && i - c * d < n ? g = Math.round(i / Math.cos(h * tn) - n) : h > 0 && i + c * d > o && (g = Math.round((s - i) / Math.cos(h * tn))) : (m = i - c * d, x = i + (1 - c) * d, m < n ? u = l.x + u * (1 - c) - n : x > o && (u = o - l.x + u * c, f = -1), (u = Math.min(p, u)) < p && t.labelAlign === "center" && (l.x += f * (p - u - c * (p - Math.min(d, u)))), (d > u || t.autoRotation && (a.styles || {}).width) && (g = u)), g && a && (this.shortenLabel ? this.shortenLabel() : a.css(Vo({}, { width: Math.floor(g) + "px", lineClamp: t.isRadial ? 0 : 1 })));
      }
      moveLabel(l, t) {
        let e = this, i = e.label, s = e.axis, r = !1, n;
        i && i.textStr === l ? (e.movedLabel = i, r = !0, delete e.label) : _d(s.ticks, function(o) {
          r || o.isNew || o === e || !o.label || o.label.textStr !== l || (e.movedLabel = o.label, r = !0, o.labelPos = e.movedLabel.xy, delete o.label);
        }), !r && (e.labelPos || i) && (n = e.labelPos || i.xy, e.movedLabel = e.createLabel(l, t, n), e.movedLabel && e.movedLabel.attr({ opacity: 0 }));
      }
      render(l, t, e) {
        let i = this.axis, s = i.horiz, r = this.pos, n = Ye(this.tickmarkOffset, i.tickmarkOffset), o = this.getPosition(s, r, n, t), a = o.x, h = o.y, c = i.pos, d = c + i.len, p = s ? a : h;
        !i.chart.polar && this.isNew && (zs(p) < c || p > d) && (e = 0);
        let u = Ye(e, this.label && this.label.newOpacity, 1);
        e = Ye(e, 1), this.isActive = !0, this.renderGridLine(t, e), this.renderMark(o, e), this.renderLabel(o, t, u, l), this.isNew = !1, hs(this, "afterRender");
      }
      renderGridLine(l, t) {
        let e = this.axis, i = e.options, s = {}, r = this.pos, n = this.type, o = Ye(this.tickmarkOffset, e.tickmarkOffset), a = e.chart.renderer, h = this.gridLine, c, d = i.gridLineWidth, p = i.gridLineColor, u = i.gridLineDashStyle;
        this.type === "minor" && (d = i.minorGridLineWidth, p = i.minorGridLineColor, u = i.minorGridLineDashStyle), h || (e.chart.styledMode || (s.stroke = p, s["stroke-width"] = d || 0, s.dashstyle = u), n || (s.zIndex = 1), l && (t = 0), this.gridLine = h = a.path().attr(s).addClass("highcharts-" + (n ? n + "-" : "") + "grid-line").add(e.gridGroup)), h && (c = e.getPlotLinePath({ value: r + o, lineWidth: h.strokeWidth(), force: "pass", old: l, acrossPanes: !1 })) && h[l || this.isNew ? "attr" : "animate"]({ d: c, opacity: t });
      }
      renderMark(l, t) {
        let e = this.axis, i = e.options, s = e.chart.renderer, r = this.type, n = e.tickSize(r ? r + "Tick" : "tick"), o = l.x, a = l.y, h = Ye(i[r !== "minor" ? "tickWidth" : "minorTickWidth"], !r && e.isXAxis ? 1 : 0), c = i[r !== "minor" ? "tickColor" : "minorTickColor"], d = this.mark, p = !d;
        n && (e.opposite && (n[0] = -n[0]), d || (this.mark = d = s.path().addClass("highcharts-" + (r ? r + "-" : "") + "tick").add(e.axisGroup), e.chart.styledMode || d.attr({ stroke: c, "stroke-width": h })), d[p ? "attr" : "animate"]({ d: this.getMarkPath(o, a, n[0], d.strokeWidth(), e.horiz, s), opacity: t }));
      }
      renderLabel(l, t, e, i) {
        let s = this.axis, r = s.horiz, n = s.options, o = this.label, a = n.labels, h = a.step, c = Ye(this.tickmarkOffset, s.tickmarkOffset), d = l.x, p = l.y, u = !0;
        o && Ws(d) && (o.xy = l = this.getLabelPosition(d, p, o, r, a, c, i, h), (!this.isFirst || this.isLast || n.showFirstLabel) && (!this.isLast || this.isFirst || n.showLastLabel) ? !r || a.step || a.rotation || t || e === 0 || this.handleOverflow(l) : u = !1, h && i % h && (u = !1), u && Ws(l.y) ? (l.opacity = e, o[this.isNewLabel ? "attr" : "animate"](l).show(!0), this.isNewLabel = !1) : (o.hide(), this.isNewLabel = !0));
      }
      replaceMovedLabel() {
        let l = this.label, t = this.axis;
        l && !this.isNew && (l.animate({ opacity: 0 }, void 0, l.destroy), delete this.label), t.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel;
      }
    }, { animObject: Id } = fe, { xAxis: qo, yAxis: Dd } = Md, { defaultOptions: sn } = ke, { registerEventOptions: Bd } = Ns, { deg2rad: Rd } = _, { arrayMax: $o, arrayMin: Nd, clamp: rn, correctFloat: Oe, defined: Ot, destroyObjectProperties: zd, erase: Ko, error: nn, extend: Fs, fireEvent: jt, getClosestDistance: Zo, insertItem: Wd, isArray: Jo, isNumber: st, isString: Qo, merge: Hs, normalizeTickInterval: Fd, objectEach: Xs, pick: ut, relativeLength: Ys, removeEvent: Hd, splat: Xd, syncTimeout: Yd } = U, ta = (l, t) => Fd(t, void 0, void 0, ut(l.options.allowDecimals, t < 0.5 || l.tickAmount !== void 0), !!l.tickAmount);
    Fs(sn, { xAxis: qo, yAxis: Hs(qo, Dd) });
    class Bi {
      constructor(t, e, i) {
        this.init(t, e, i);
      }
      init(t, e, i = this.coll) {
        let s = i === "xAxis", r = this.isZAxis || (t.inverted ? !s : s);
        this.chart = t, this.horiz = r, this.isXAxis = s, this.coll = i, jt(this, "init", { userOptions: e }), this.opposite = ut(e.opposite, this.opposite), this.side = ut(e.side, this.side, r ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e);
        let n = this.options, o = n.labels;
        this.type ?? (this.type = n.type || "linear"), this.uniqueNames ?? (this.uniqueNames = n.uniqueNames ?? !0), jt(this, "afterSetType"), this.userOptions = e, this.minPixelPadding = 0, this.reversed = ut(n.reversed, this.reversed), this.visible = n.visible, this.zoomEnabled = n.zoomEnabled, this.hasNames = this.type === "category" || n.categories === !0, this.categories = Jo(n.categories) && n.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = Ot(n.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ?? (this.len = 0), this.minRange = this.userMinRange = n.minRange || n.maxZoom, this.range = n.range, this.offset = n.offset || 0, this.max = void 0, this.min = void 0;
        let a = ut(n.crosshair, Xd(t.options.tooltip.crosshairs)[s ? 0 : 1]);
        this.crosshair = a === !0 ? {} : a, t.axes.indexOf(this) === -1 && (s ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), Wd(this, t[this.coll])), t.orderItems(this.coll), this.series = this.series || [], t.inverted && !this.isZAxis && s && !Ot(this.reversed) && (this.reversed = !0), this.labelRotation = st(o.rotation) ? o.rotation : void 0, Bd(this, n), jt(this, "afterInit");
      }
      setOptions(t) {
        let e = this.horiz ? { labels: { autoRotation: [-45], padding: 3 }, margin: 15 } : { labels: { padding: 1 }, title: { rotation: 90 * this.side } };
        this.options = Hs(e, sn[this.coll], t), jt(this, "afterSetOptions", { userOptions: t });
      }
      defaultLabelFormatter() {
        let t = this.axis, { numberFormatter: e } = this.chart, i = st(this.value) ? this.value : NaN, s = t.chart.time, r = t.categories, n = this.dateTimeLabelFormat, o = sn.lang, a = o.numericSymbols, h = o.numericSymbolMagnitude || 1e3, c = t.logarithmic ? Math.abs(i) : t.tickInterval, d = a && a.length, p, u;
        if (r) u = `${this.value}`;
        else if (n) u = s.dateFormat(n, i, !0);
        else if (d && a && c >= 1e3) for (; d-- && u === void 0; ) c >= (p = Math.pow(h, d + 1)) && 10 * i % p == 0 && a[d] !== null && i !== 0 && (u = e(i / p, -1) + a[d]);
        return u === void 0 && (u = Math.abs(i) >= 1e4 ? e(i, -1) : e(i, -1, void 0, "")), u;
      }
      getSeriesExtremes() {
        let t, e = this;
        jt(this, "getSeriesExtremes", null, function() {
          e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach((i) => {
            if (i.reserveSpace()) {
              let s = i.options, r, n = s.threshold, o, a;
              if (e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= (n || 0) && (n = void 0), e.isXAxis) (r = i.getColumn("x")).length && (r = e.logarithmic ? r.filter((h) => h > 0) : r, o = (t = i.getXExtremes(r)).min, a = t.max, st(o) || o instanceof Date || (r = r.filter(st), o = (t = i.getXExtremes(r)).min, a = t.max), r.length && (e.dataMin = Math.min(ut(e.dataMin, o), o), e.dataMax = Math.max(ut(e.dataMax, a), a)));
              else {
                let h = i.applyExtremes();
                st(h.dataMin) && (o = h.dataMin, e.dataMin = Math.min(ut(e.dataMin, o), o)), st(h.dataMax) && (a = h.dataMax, e.dataMax = Math.max(ut(e.dataMax, a), a)), Ot(n) && (e.threshold = n), (!s.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1);
              }
            }
          });
        }), jt(this, "afterGetSeriesExtremes");
      }
      translate(t, e, i, s, r, n) {
        var m;
        let o = this.linkedParent || this, a = s && o.old ? o.old.min : o.min;
        if (!st(a)) return NaN;
        let h = o.minPixelPadding, c = (o.isOrdinal || ((m = o.brokenAxis) == null ? void 0 : m.hasBreaks) || o.logarithmic && r) && o.lin2val, d = 1, p = 0, u = s && o.old ? o.old.transA : o.transA, f = 0;
        return u || (u = o.transA), i && (d *= -1, p = o.len), o.reversed && (d *= -1, p -= d * (o.sector || o.len)), e ? (f = (t = t * d + p - h) / u + a, c && (f = o.lin2val(f))) : (c && (t = o.val2lin(t)), f = d * (t - a) * u + p + d * h + (st(n) ? u * n : 0), o.isRadial || (f = Oe(f))), f;
      }
      toPixels(t, e) {
        return this.translate(this.chart.time.parse(t) ?? NaN, !1, !this.horiz, void 0, !0) + (e ? 0 : this.pos);
      }
      toValue(t, e) {
        return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0);
      }
      getPlotLinePath(t) {
        let e = this, i = e.chart, s = e.left, r = e.top, n = t.old, o = t.value, a = t.lineWidth, h = n && i.oldChartHeight || i.chartHeight, c = n && i.oldChartWidth || i.chartWidth, d = e.transB, p = t.translatedValue, u = t.force, f, m, x, g, b;
        function v(C, S, A) {
          return u !== "pass" && (C < S || C > A) && (u ? C = rn(C, S, A) : b = !0), C;
        }
        let M = { value: o, lineWidth: a, old: n, force: u, acrossPanes: t.acrossPanes, translatedValue: p };
        return jt(this, "getPlotLinePath", M, function(C) {
          f = x = (p = rn(p = ut(p, e.translate(o, void 0, void 0, n)), -1e9, 1e9)) + d, m = g = h - p - d, st(p) ? e.horiz ? (m = r, g = h - e.bottom + (e.options.isInternal ? 0 : i.scrollablePixelsY || 0), f = x = v(f, s, s + e.width)) : (f = s, x = c - e.right + (i.scrollablePixelsX || 0), m = g = v(m, r, r + e.height)) : (b = !0, u = !1), C.path = b && !u ? void 0 : i.renderer.crispLine([["M", f, m], ["L", x, g]], a || 1);
        }), M.path;
      }
      getLinearTickPositions(t, e, i) {
        let s, r, n, o = Oe(Math.floor(e / t) * t), a = Oe(Math.ceil(i / t) * t), h = [];
        if (Oe(o + t) === o && (n = 20), this.single) return [e];
        for (s = o; s <= a && (h.push(s), (s = Oe(s + t, n)) !== r); ) r = s;
        return h;
      }
      getMinorTickInterval() {
        let { minorTicks: t, minorTickInterval: e } = this.options;
        return t === !0 ? ut(e, "auto") : t !== !1 ? e : void 0;
      }
      getMinorTickPositions() {
        var c;
        let t = this.options, e = this.tickPositions, i = this.minorTickInterval, s = this.pointRangePadding || 0, r = (this.min || 0) - s, n = (this.max || 0) + s, o = (c = this.brokenAxis) != null && c.hasBreaks ? this.brokenAxis.unitLength : n - r, a = [], h;
        if (o && o / i < this.len / 3) {
          let d = this.logarithmic;
          if (d) this.paddedTicks.forEach(function(p, u, f) {
            u && a.push.apply(a, d.getLogTickPositions(i, f[u - 1], f[u], !0));
          });
          else if (this.dateTime && this.getMinorTickInterval() === "auto") a = a.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i), r, n, t.startOfWeek));
          else for (h = r + (e[0] - r) % i; h <= n && h !== a[0]; h += i) a.push(h);
        }
        return a.length !== 0 && this.trimTicks(a), a;
      }
      adjustForMinRange() {
        let t = this.options, e = this.logarithmic, i = this.chart.time, { max: s, min: r, minRange: n } = this, o, a, h, c;
        this.isXAxis && n === void 0 && !e && (n = Ot(t.min) || Ot(t.max) || Ot(t.floor) || Ot(t.ceiling) ? null : Math.min(5 * (Zo(this.series.map((d) => {
          let p = d.getColumn("x");
          return d.xIncrement ? p.slice(0, 2) : p;
        })) || 0), this.dataMax - this.dataMin)), st(s) && st(r) && st(n) && s - r < n && (a = this.dataMax - this.dataMin >= n, o = (n - s + r) / 2, h = [r - o, i.parse(t.min) ?? r - o], a && (h[2] = e ? e.log2lin(this.dataMin) : this.dataMin), c = [(r = $o(h)) + n, i.parse(t.max) ?? r + n], a && (c[2] = e ? e.log2lin(this.dataMax) : this.dataMax), (s = Nd(c)) - r < n && (h[0] = s - n, h[1] = i.parse(t.min) ?? s - n, r = $o(h))), this.minRange = n, this.min = r, this.max = s;
      }
      getClosest() {
        let t, e;
        if (this.categories) e = 1;
        else {
          let i = [];
          this.series.forEach(function(s) {
            let r = s.closestPointRange, n = s.getColumn("x");
            n.length === 1 ? i.push(n[0]) : s.sorted && Ot(r) && s.reserveSpace() && (e = Ot(e) ? Math.min(e, r) : r);
          }), i.length && (i.sort((s, r) => s - r), t = Zo([i]));
        }
        return t && e ? Math.min(t, e) : t || e;
      }
      nameToX(t) {
        let e = Jo(this.options.categories), i = e ? this.categories : this.names, s = t.options.x, r;
        return t.series.requireSorting = !1, Ot(s) || (s = this.uniqueNames && i ? e ? i.indexOf(t.name) : ut(i.keys[t.name], -1) : t.series.autoIncrement()), s === -1 ? !e && i && (r = i.length) : st(s) && (r = s), r !== void 0 ? (this.names[r] = t.name, this.names.keys[t.name] = r) : t.x && (r = t.x), r;
      }
      updateNames() {
        let t = this, e = this.names;
        e.length > 0 && (Object.keys(e.keys).forEach(function(i) {
          delete e.keys[i];
        }), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((i) => {
          i.xIncrement = null, (!i.points || i.isDirtyData) && (t.max = Math.max(t.max || 0, i.dataTable.rowCount - 1), i.processData(), i.generatePoints());
          let s = i.getColumn("x").slice();
          i.data.forEach((r, n) => {
            let o = s[n];
            r != null && r.options && r.name !== void 0 && (o = t.nameToX(r)) !== void 0 && o !== r.x && (s[n] = r.x = o);
          }), i.dataTable.setColumn("x", s);
        }));
      }
      setAxisTranslation() {
        let t = this, e = t.max - t.min, i = t.linkedParent, s = !!t.categories, r = t.isXAxis, n = t.axisPointRange || 0, o, a = 0, h = 0, c, d = t.transA;
        (r || s || n) && (o = t.getClosest(), i ? (a = i.minPointOffset, h = i.pointRangePadding) : t.series.forEach(function(p) {
          let u = s ? 1 : r ? ut(p.options.pointRange, o, 0) : t.axisPointRange || 0, f = p.options.pointPlacement;
          if (n = Math.max(n, u), !t.single || s) {
            let m = p.is("xrange") ? !r : r;
            a = Math.max(a, m && Qo(f) ? 0 : u / 2), h = Math.max(h, m && f === "on" ? 0 : u);
          }
        }), c = t.ordinal && t.ordinal.slope && o ? t.ordinal.slope / o : 1, t.minPointOffset = a *= c, t.pointRangePadding = h *= c, t.pointRange = Math.min(n, t.single && s ? 1 : e), r && o && (t.closestPointRange = o)), t.translationSlope = t.transA = d = t.staticScale || t.len / (e + h || 1), t.transB = t.horiz ? t.left : t.bottom, t.minPixelPadding = d * a, jt(this, "afterSetAxisTranslation");
      }
      minFromRange() {
        let { max: t, min: e } = this;
        return st(t) && st(e) && t - e || void 0;
      }
      setTickInterval(t) {
        var it, pt, J, dt;
        let { categories: e, chart: i, dataMax: s, dataMin: r, dateTime: n, isXAxis: o, logarithmic: a, options: h, softThreshold: c } = this, d = i.time, p = st(this.threshold) ? this.threshold : void 0, u = this.minRange || 0, { ceiling: f, floor: m, linkedTo: x, softMax: g, softMin: b } = h, v = st(x) && ((it = i[this.coll]) == null ? void 0 : it[x]), M = h.tickPixelInterval, C = h.maxPadding, S = h.minPadding, A = 0, T, L = st(h.tickInterval) && h.tickInterval >= 0 ? h.tickInterval : void 0, B, W, G, D;
        if (n || e || v || this.getTickAmount(), G = ut(this.userMin, d.parse(h.min)), D = ut(this.userMax, d.parse(h.max)), v ? (this.linkedParent = v, T = v.getExtremes(), this.min = ut(T.min, T.dataMin), this.max = ut(T.max, T.dataMax), this.type !== v.type && nn(11, !0, i)) : (c && Ot(p) && st(s) && st(r) && (r >= p ? (B = p, S = 0) : s <= p && (W = p, C = 0)), this.min = ut(G, B, r), this.max = ut(D, W, s)), st(this.max) && st(this.min) && (a && (this.positiveValuesOnly && !t && 0 >= Math.min(this.min, ut(r, this.min)) && nn(10, !0, i), this.min = Oe(a.log2lin(this.min), 16), this.max = Oe(a.log2lin(this.max), 16)), this.range && st(r) && (this.userMin = this.min = G = Math.max(r, this.minFromRange() || 0), this.userMax = D = this.max, this.range = void 0)), jt(this, "foundExtremes"), this.adjustForMinRange(), st(this.min) && st(this.max)) {
          if (!st(this.userMin) && st(b) && b < this.min && (this.min = G = b), !st(this.userMax) && st(g) && g > this.max && (this.max = D = g), e || this.axisPointRange || (pt = this.stacking) != null && pt.usePercentage || v || !(A = this.max - this.min) || (!Ot(G) && S && (this.min -= A * S), Ot(D) || !C || (this.max += A * C)), !st(this.userMin) && st(m) && (this.min = Math.max(this.min, m)), !st(this.userMax) && st(f) && (this.max = Math.min(this.max, f)), c && st(r) && st(s)) {
            let $ = p || 0;
            !Ot(G) && this.min < $ && r >= $ ? this.min = h.minRange ? Math.min($, this.max - u) : $ : !Ot(D) && this.max > $ && s <= $ && (this.max = h.minRange ? Math.max($, this.min + u) : $);
          }
          !i.polar && this.min > this.max && (Ot(h.min) ? this.max = this.min : Ot(h.max) && (this.min = this.max)), A = this.max - this.min;
        }
        if (this.min !== this.max && st(this.min) && st(this.max) ? v && !L && M === v.options.tickPixelInterval ? this.tickInterval = L = v.tickInterval : this.tickInterval = ut(L, this.tickAmount ? A / Math.max(this.tickAmount - 1, 1) : void 0, e ? 1 : A * M / Math.max(this.len, M)) : this.tickInterval = 1, o && !t) {
          let $ = this.min !== ((J = this.old) == null ? void 0 : J.min) || this.max !== ((dt = this.old) == null ? void 0 : dt.max);
          this.series.forEach(function(rt) {
            var lt;
            rt.forceCrop = (lt = rt.forceCropping) == null ? void 0 : lt.call(rt), rt.processData($);
          }), jt(this, "postProcessData", { hasExtremesChanged: $ });
        }
        this.setAxisTranslation(), jt(this, "initialAxisTranslation"), this.pointRange && !L && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
        let Y = ut(h.minTickInterval, n && !this.series.some(($) => !$.sorted) ? this.closestPointRange : 0);
        !L && this.tickInterval < Y && (this.tickInterval = Y), n || a || L || (this.tickInterval = ta(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
      }
      setTickPositions() {
        var c, d;
        let t = this.options, e = t.tickPositions, i = t.tickPositioner, s = this.getMinorTickInterval(), r = !this.isPanning, n = r && t.startOnTick, o = r && t.endOnTick, a = [], h;
        if (this.tickmarkOffset = this.categories && t.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0, this.single = this.min === this.max && Ot(this.min) && !this.tickAmount && (this.min % 1 == 0 || t.allowDecimals !== !1), e) a = e.slice();
        else if (st(this.min) && st(this.max)) {
          if (!((c = this.ordinal) != null && c.positions) && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) a = [this.min, this.max], nn(19, !1, this.chart);
          else if (this.dateTime) a = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, (d = this.ordinal) == null ? void 0 : d.positions, this.closestPointRange, !0);
          else if (this.logarithmic) a = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
          else {
            let p = this.tickInterval, u = p;
            for (; u <= 2 * p && (a = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && a.length > this.tickAmount); ) this.tickInterval = ta(this, u *= 1.1);
          }
          a.length > this.len && (a = [a[0], a[a.length - 1]])[0] === a[1] && (a.length = 1), i && (this.tickPositions = a, (h = i.apply(this, [this.min, this.max])) && (a = h));
        }
        this.tickPositions = a, this.minorTickInterval = s === "auto" && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : s, this.paddedTicks = a.slice(0), this.trimTicks(a, n, o), !this.isLinked && st(this.min) && st(this.max) && (this.single && a.length < 2 && !this.categories && !this.series.some((p) => p.is("heatmap") && p.options.pointPlacement === "between") && (this.min -= 0.5, this.max += 0.5), e || h || this.adjustTickAmount()), jt(this, "afterSetTickPositions");
      }
      trimTicks(t, e, i) {
        let s = t[0], r = t[t.length - 1], n = !this.isOrdinal && this.minPointOffset || 0;
        if (jt(this, "trimTicks"), !this.isLinked) {
          if (e && s !== -1 / 0) this.min = s;
          else for (; this.min - n > t[0]; ) t.shift();
          if (i) this.max = r;
          else for (; this.max + n < t[t.length - 1]; ) t.pop();
          t.length === 0 && Ot(s) && !this.options.tickPositions && t.push((r + s) / 2);
        }
      }
      alignToOthers() {
        let t, e = this, i = e.chart, s = [this], r = e.options, n = i.options.chart, o = this.coll === "yAxis" && n.alignThresholds, a = [];
        if (e.thresholdAlignment = void 0, (n.alignTicks !== !1 && r.alignTicks || o) && r.startOnTick !== !1 && r.endOnTick !== !1 && !e.logarithmic) {
          let h = (d) => {
            let { horiz: p, options: u } = d;
            return [p ? u.left : u.top, u.width, u.height, u.pane].join(",");
          }, c = h(this);
          i[this.coll].forEach(function(d) {
            let { series: p } = d;
            p.length && p.some((u) => u.visible) && d !== e && h(d) === c && (t = !0, s.push(d));
          });
        }
        if (t && o) {
          s.forEach((c) => {
            let d = c.getThresholdAlignment(e);
            st(d) && a.push(d);
          });
          let h = a.length > 1 ? a.reduce((c, d) => c += d, 0) / a.length : void 0;
          s.forEach((c) => {
            c.thresholdAlignment = h;
          });
        }
        return t;
      }
      getThresholdAlignment(t) {
        if ((!st(this.dataMin) || this !== t && this.series.some((e) => e.isDirty || e.isDirtyData)) && this.getSeriesExtremes(), st(this.threshold)) {
          let e = rn((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
          return this.options.reversed && (e = 1 - e), e;
        }
      }
      getTickAmount() {
        let t = this.options, e = t.tickPixelInterval, i = t.tickAmount;
        Ot(t.tickInterval) || i || !(this.len < e) || this.isRadial || this.logarithmic || !t.startOnTick || !t.endOnTick || (i = 2), !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1), i < 4 && (this.finalTickAmt = i, i = 5), this.tickAmount = i;
      }
      adjustTickAmount() {
        let t = this, { finalTickAmt: e, max: i, min: s, options: r, tickPositions: n, tickAmount: o, thresholdAlignment: a } = t, h = n == null ? void 0 : n.length, c = ut(t.threshold, t.softThreshold ? 0 : null), d, p, u = t.tickInterval, f, m = () => n.push(Oe(n[n.length - 1] + u)), x = () => n.unshift(Oe(n[0] - u));
        if (st(a) && (f = a < 0.5 ? Math.ceil(a * (o - 1)) : Math.floor(a * (o - 1)), r.reversed && (f = o - 1 - f)), t.hasData() && st(s) && st(i)) {
          let g = () => {
            t.transA *= (h - 1) / (o - 1), t.min = r.startOnTick ? n[0] : Math.min(s, n[0]), t.max = r.endOnTick ? n[n.length - 1] : Math.max(i, n[n.length - 1]);
          };
          if (st(f) && st(t.threshold)) {
            for (; n[f] !== c || n.length !== o || n[0] > s || n[n.length - 1] < i; ) {
              for (n.length = 0, n.push(t.threshold); n.length < o; ) n[f] === void 0 || n[f] > t.threshold ? x() : m();
              if (u > 8 * t.tickInterval) break;
              u *= 2;
            }
            g();
          } else if (h < o) {
            for (; n.length < o; ) n.length % 2 || s === c ? m() : x();
            g();
          }
          if (Ot(e)) {
            for (p = d = n.length; p--; ) (e === 3 && p % 2 == 1 || e <= 2 && p > 0 && p < d - 1) && n.splice(p, 1);
            t.finalTickAmt = void 0;
          }
        }
      }
      setScale() {
        var n, o;
        let { coll: t, stacking: e } = this, i = !1, s = !1;
        this.series.forEach((a) => {
          i = i || a.isDirtyData || a.isDirty, s = s || a.xAxis && a.xAxis.isDirty || !1;
        }), this.setAxisSize();
        let r = this.len !== (this.old && this.old.len);
        r || i || s || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (e && t === "yAxis" && e.buildStacks(), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), e && t === "xAxis" && e.buildStacks(), this.isDirty || (this.isDirty = r || this.min !== ((n = this.old) == null ? void 0 : n.min) || this.max !== ((o = this.old) == null ? void 0 : o.max))) : e && e.cleanStacks(), i && delete this.allExtremes, jt(this, "afterSetScale");
      }
      setExtremes(t, e, i = !0, s, r) {
        let n = this.chart;
        this.series.forEach((o) => {
          delete o.kdTree;
        }), t = n.time.parse(t), e = n.time.parse(e), jt(this, "setExtremes", r = Fs(r, { min: t, max: e }), (o) => {
          this.userMin = o.min, this.userMax = o.max, this.eventArgs = o, i && n.redraw(s);
        });
      }
      setAxisSize() {
        let t = this.chart, e = this.options, i = e.offsets || [0, 0, 0, 0], s = this.horiz, r = this.width = Math.round(Ys(ut(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)), n = this.height = Math.round(Ys(ut(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)), o = this.top = Math.round(Ys(ut(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)), a = this.left = Math.round(Ys(ut(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft));
        this.bottom = t.chartHeight - n - o, this.right = t.chartWidth - r - a, this.len = Math.max(s ? r : n, 0), this.pos = s ? a : o;
      }
      getExtremes() {
        let t = this.logarithmic;
        return { min: t ? Oe(t.lin2log(this.min)) : this.min, max: t ? Oe(t.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
      }
      getThreshold(t) {
        let e = this.logarithmic, i = e ? e.lin2log(this.min) : this.min, s = e ? e.lin2log(this.max) : this.max;
        return t === null || t === -1 / 0 ? t = i : t === 1 / 0 ? t = s : i > t ? t = i : s < t && (t = s), this.translate(t, 0, 1, 0, 1);
      }
      autoLabelAlign(t) {
        let e = (ut(t, 0) - 90 * this.side + 720) % 360, i = { align: "center" };
        return jt(this, "autoLabelAlign", i, function(s) {
          e > 15 && e < 165 ? s.align = "right" : e > 195 && e < 345 && (s.align = "left");
        }), i.align;
      }
      tickSize(t) {
        let e = this.options, i = ut(e[t === "tick" ? "tickWidth" : "minorTickWidth"], t === "tick" && this.isXAxis && !this.categories ? 1 : 0), s = e[t === "tick" ? "tickLength" : "minorTickLength"], r;
        i && s && (e[t + "Position"] === "inside" && (s = -s), r = [s, i]);
        let n = { tickSize: r };
        return jt(this, "afterTickSize", n), n.tickSize;
      }
      labelMetrics() {
        let t = this.chart.renderer, e = this.ticks, i = e[Object.keys(e)[0]] || {};
        return this.chart.renderer.fontMetrics(i.label || i.movedLabel || t.box);
      }
      unsquish() {
        let t = this.options.labels, e = t.padding || 0, i = this.horiz, s = this.tickInterval, r = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / s), n = t.rotation, o = Oe(0.8 * this.labelMetrics().h), a = Math.max(this.max - this.min, 0), h = function(f) {
          let m = (f + 2 * e) / (r || 1);
          return (m = m > 1 ? Math.ceil(m) : 1) * s > a && f !== 1 / 0 && r !== 1 / 0 && a && (m = Math.ceil(a / s)), Oe(m * s);
        }, c = s, d, p = Number.MAX_VALUE, u;
        if (i) {
          if (!t.staggerLines && (st(n) ? u = [n] : r < t.autoRotationLimit && (u = t.autoRotation)), u) {
            let f, m;
            for (let x of u) (x === n || x && x >= -90 && x <= 90) && (m = (f = h(Math.abs(o / Math.sin(Rd * x)))) + Math.abs(x / 360)) < p && (p = m, d = x, c = f);
          }
        } else c = h(0.75 * o);
        return this.autoRotation = u, this.labelRotation = ut(d, st(n) ? n : 0), t.step ? s : c;
      }
      getSlotWidth(t) {
        let e = this.chart, i = this.horiz, s = this.options.labels, r = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), n = e.margin[3];
        if (t && st(t.slotWidth)) return t.slotWidth;
        if (i && s.step < 2 && !this.isRadial) return s.rotation ? 0 : (this.staggerLines || 1) * this.len / r;
        if (!i) {
          let o = s.style.width;
          if (o !== void 0) return parseInt(String(o), 10);
          if (n) return n - e.spacing[3];
        }
        return 0.33 * e.chartWidth;
      }
      renderUnsquish() {
        let t = this.chart, e = t.renderer, i = this.tickPositions, s = this.ticks, r = this.options.labels, n = r.style, o = this.horiz, a = this.getSlotWidth(), h = Math.max(1, Math.round(a - (o ? 2 * (r.padding || 0) : r.distance || 0))), c = {}, d = this.labelMetrics(), p = n.lineClamp, u, f = p ?? (Math.floor(this.len / (i.length * d.h)) || 1), m = 0;
        Qo(r.rotation) || (c.rotation = r.rotation || 0), i.forEach(function(x) {
          var v;
          let g = s[x];
          g.movedLabel && g.replaceMovedLabel();
          let b = ((v = g.label) == null ? void 0 : v.textPxLength) || 0;
          b > m && (m = b);
        }), this.maxLabelLength = m, this.autoRotation ? m > h && m > d.h ? c.rotation = this.labelRotation : this.labelRotation = 0 : a && (u = h), c.rotation && (u = m > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : m, p || (f = 1)), this.labelAlign = r.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (c.align = this.labelAlign), i.forEach(function(x) {
          let g = s[x], b = g && g.label, v = n.width, M = {};
          b && (b.attr(c), g.shortenLabel ? g.shortenLabel() : u && !v && n.whiteSpace !== "nowrap" && (u < (b.textPxLength || 0) || b.element.tagName === "SPAN") ? b.css(Fs(M, { width: `${u}px`, lineClamp: f })) : !b.styles.width || M.width || v || b.css({ width: "auto" }), g.rotation = c.rotation);
        }, this), this.tickRotCorr = e.rotCorr(d.b, this.labelRotation || 0, this.side !== 0);
      }
      hasData() {
        return this.series.some(function(t) {
          return t.hasData();
        }) || this.options.showEmpty && Ot(this.min) && Ot(this.max);
      }
      addTitle(t) {
        let e, i = this.chart.renderer, s = this.horiz, r = this.opposite, n = this.options.title, o = this.chart.styledMode;
        this.axisTitle || ((e = n.textAlign) || (e = (s ? { low: "left", middle: "center", high: "right" } : { low: r ? "right" : "left", middle: "center", high: r ? "left" : "right" })[n.align]), this.axisTitle = i.text(n.text || "", 0, 0, n.useHTML).attr({ zIndex: 7, rotation: n.rotation || 0, align: e }).addClass("highcharts-axis-title"), o || this.axisTitle.css(Hs(n.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), o || n.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }), this.axisTitle[t ? "show" : "hide"](t);
      }
      generateTick(t) {
        let e = this.ticks;
        e[t] ? e[t].addLabel() : e[t] = new Di(this, t);
      }
      createGroups() {
        let { axisParent: t, chart: e, coll: i, options: s } = this, r = e.renderer, n = (o, a, h) => r.g(o).attr({ zIndex: h }).addClass(`highcharts-${i.toLowerCase()}${a} ` + (this.isRadial ? `highcharts-radial-axis${a} ` : "") + (s.className || "")).add(t);
        this.axisGroup || (this.gridGroup = n("grid", "-grid", s.gridZIndex), this.axisGroup = n("axis", "", s.zIndex), this.labelGroup = n("axis-labels", "-labels", s.labels.zIndex));
      }
      getOffset() {
        let t = this, { chart: e, horiz: i, options: s, side: r, ticks: n, tickPositions: o, coll: a } = t, h = e.inverted && !t.isZAxis ? [1, 0, 3, 2][r] : r, c = t.hasData(), d = s.title, p = s.labels, u = st(s.crossing), f = e.axisOffset, m = e.clipOffset, x = [-1, 1, 1, -1][r], g, b = 0, v, M = 0, C = 0, S, A;
        if (t.showAxis = g = c || s.showEmpty, t.staggerLines = t.horiz && p.staggerLines || void 0, t.createGroups(), c || t.isLinked ? (o.forEach(function(T) {
          t.generateTick(T);
        }), t.renderUnsquish(), t.reserveSpaceDefault = r === 0 || r === 2 || { 1: "left", 3: "right" }[r] === t.labelAlign, ut(p.reserveSpace, !u && null, t.labelAlign === "center" || null, t.reserveSpaceDefault) && o.forEach(function(T) {
          C = Math.max(n[T].getLabelSize(), C);
        }), t.staggerLines && (C *= t.staggerLines), t.labelOffset = C * (t.opposite ? -1 : 1)) : Xs(n, function(T, L) {
          T.destroy(), delete n[L];
        }), d != null && d.text && d.enabled !== !1 && (t.addTitle(g), g && !u && d.reserveSpace !== !1 && (t.titleOffset = b = t.axisTitle.getBBox()[i ? "height" : "width"], M = Ot(v = d.offset) ? 0 : ut(d.margin, i ? 5 : 10))), t.renderLine(), t.offset = x * ut(s.offset, f[r] ? f[r] + (s.margin || 0) : 0), t.tickRotCorr = t.tickRotCorr || { x: 0, y: 0 }, A = r === 0 ? -t.labelMetrics().h : r === 2 ? t.tickRotCorr.y : 0, S = Math.abs(C) + M, C && (S -= A, S += x * (i ? ut(p.y, t.tickRotCorr.y + x * p.distance) : ut(p.x, x * p.distance))), t.axisTitleMargin = ut(v, S), t.getMaxLabelDimensions && (t.maxLabelDimensions = t.getMaxLabelDimensions(n, o)), a !== "colorAxis" && m) {
          let T = this.tickSize("tick");
          f[r] = Math.max(f[r], (t.axisTitleMargin || 0) + b + x * t.offset, S, o && o.length && T ? T[0] + x * t.offset : 0);
          let L = !t.axisLine || s.offset ? 0 : t.axisLine.strokeWidth() / 2;
          m[h] = Math.max(m[h], L);
        }
        jt(this, "afterGetOffset");
      }
      getLinePath(t) {
        let e = this.chart, i = this.opposite, s = this.offset, r = this.horiz, n = this.left + (i ? this.width : 0) + s, o = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
        return i && (t *= -1), e.renderer.crispLine([["M", r ? this.left : n, r ? o : this.top], ["L", r ? e.chartWidth - this.right : n, r ? o : e.chartHeight - this.bottom]], t);
      }
      renderLine() {
        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
      }
      getTitlePosition(t) {
        let e = this.horiz, i = this.left, s = this.top, r = this.len, n = this.options.title, o = e ? i : s, a = this.opposite, h = this.offset, c = n.x, d = n.y, p = this.chart.renderer.fontMetrics(t), u = t ? Math.max(t.getBBox(!1, 0).height - p.h - 1, 0) : 0, f = { low: o + (e ? 0 : r), middle: o + r / 2, high: o + (e ? r : 0) }[n.align], m = (e ? s + this.height : i) + (e ? 1 : -1) * (a ? -1 : 1) * (this.axisTitleMargin || 0) + [-u, u, p.f, -u][this.side], x = { x: e ? f + c : m + (a ? this.width : 0) + h + c, y: e ? m + d - (a ? this.height : 0) + h : f + d };
        return jt(this, "afterGetTitlePosition", { titlePosition: x }), x;
      }
      renderMinorTick(t, e) {
        let i = this.minorTicks;
        i[t] || (i[t] = new Di(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1);
      }
      renderTick(t, e, i) {
        let s = this.isLinked, r = this.ticks;
        (!s || t >= this.min && t <= this.max || this.grid && this.grid.isColumn) && (r[t] || (r[t] = new Di(this, t)), i && r[t].isNew && r[t].render(e, !0, -1), r[t].render(e));
      }
      render() {
        let t, e, i = this, s = i.chart, r = i.logarithmic, n = s.renderer, o = i.options, a = i.isLinked, h = i.tickPositions, c = i.axisTitle, d = i.ticks, p = i.minorTicks, u = i.alternateBands, f = o.stackLabels, m = o.alternateGridColor, x = o.crossing, g = i.tickmarkOffset, b = i.axisLine, v = i.showAxis, M = Id(n.globalAnimation);
        if (i.labelEdge.length = 0, i.overlap = !1, [d, p, u].forEach(function(C) {
          Xs(C, function(S) {
            S.isActive = !1;
          });
        }), st(x)) {
          let C = this.isXAxis ? s.yAxis[0] : s.xAxis[0], S = [1, -1, -1, 1][this.side];
          if (C) {
            let A = C.toPixels(x, !0);
            i.horiz && (A = C.len - A), i.offset = S * A;
          }
        }
        if (i.hasData() || a) {
          let C = i.chart.hasRendered && i.old && st(i.old.min);
          i.minorTickInterval && !i.categories && i.getMinorTickPositions().forEach(function(S) {
            i.renderMinorTick(S, C);
          }), h.length && (h.forEach(function(S, A) {
            i.renderTick(S, A, C);
          }), g && (i.min === 0 || i.single) && (d[-1] || (d[-1] = new Di(i, -1, null, !0)), d[-1].render(-1))), m && h.forEach(function(S, A) {
            e = h[A + 1] !== void 0 ? h[A + 1] + g : i.max - g, A % 2 == 0 && S < i.max && e <= i.max + (s.polar ? -g : g) && (u[S] || (u[S] = new _.PlotLineOrBand(i, {})), t = S + g, u[S].options = { from: r ? r.lin2log(t) : t, to: r ? r.lin2log(e) : e, color: m, className: "highcharts-alternate-grid" }, u[S].render(), u[S].isActive = !0);
          }), i._addedPlotLB || (i._addedPlotLB = !0, (o.plotLines || []).concat(o.plotBands || []).forEach(function(S) {
            i.addPlotBandOrLine(S);
          }));
        }
        [d, p, u].forEach(function(C) {
          let S = [], A = M.duration;
          Xs(C, function(T, L) {
            T.isActive || (T.render(L, !1, 0), T.isActive = !1, S.push(L));
          }), Yd(function() {
            let T = S.length;
            for (; T--; ) C[S[T]] && !C[S[T]].isActive && (C[S[T]].destroy(), delete C[S[T]]);
          }, C !== u && s.hasRendered && A ? A : 0);
        }), b && (b[b.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(b.strokeWidth()) }), b.isPlaced = !0, b[v ? "show" : "hide"](v)), c && v && (c[c.isNew ? "attr" : "animate"](i.getTitlePosition(c)), c.isNew = !1), f && f.enabled && i.stacking && i.stacking.renderStackTotals(), i.old = { len: i.len, max: i.max, min: i.min, transA: i.transA, userMax: i.userMax, userMin: i.userMin }, i.isDirty = !1, jt(this, "afterRender");
      }
      redraw() {
        this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t) {
          t.render();
        })), this.series.forEach(function(t) {
          t.isDirty = !0;
        });
      }
      getKeepProps() {
        return this.keepProps || Bi.keepProps;
      }
      destroy(t) {
        let e = this, i = e.plotLinesAndBands, s = this.eventOptions;
        if (jt(this, "destroy", { keepEvents: t }), t || Hd(e), [e.ticks, e.minorTicks, e.alternateBands].forEach(function(r) {
          zd(r);
        }), i) {
          let r = i.length;
          for (; r--; ) i[r].destroy();
        }
        for (let r in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(n) {
          e[n] && (e[n] = e[n].destroy());
        }), e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[r] = e.plotLinesAndBandsGroups[r].destroy();
        Xs(e, function(r, n) {
          e.getKeepProps().indexOf(n) === -1 && delete e[n];
        }), this.eventOptions = s;
      }
      drawCrosshair(t, e) {
        let i = this.crosshair, s = ut(i && i.snap, !0), r = this.chart, n, o, a, h = this.cross, c;
        if (jt(this, "drawCrosshair", { e: t, point: e }), t || (t = this.cross && this.cross.e), i && (Ot(e) || !s) !== !1) {
          if (s ? Ot(e) && (o = ut(this.coll !== "colorAxis" ? e.crosshairPos : null, this.isXAxis ? e.plotX : this.len - e.plotY)) : o = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), Ot(o) && (c = { value: e && (this.isXAxis ? e.x : ut(e.stackY, e.y)), translatedValue: o }, r.polar && Fs(c, { isCrosshair: !0, chartX: t && t.chartX, chartY: t && t.chartY, point: e }), n = this.getPlotLinePath(c) || null), !Ot(n)) {
            this.hideCrosshair();
            return;
          }
          a = this.categories && !this.isRadial, h || (this.cross = h = r.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (a ? "category " : "thin ") + (i.className || "")).attr({ zIndex: ut(i.zIndex, 2) }).add(), !r.styledMode && (h.attr({ stroke: i.color || (a ? ie.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"), "stroke-width": ut(i.width, 1) }).css({ "pointer-events": "none" }), i.dashStyle && h.attr({ dashstyle: i.dashStyle }))), h.show().attr({ d: n }), a && !i.width && h.attr({ "stroke-width": this.transA }), this.cross.e = t;
        } else this.hideCrosshair();
        jt(this, "afterDrawCrosshair", { e: t, point: e });
      }
      hideCrosshair() {
        this.cross && this.cross.hide(), jt(this, "afterHideCrosshair");
      }
      update(t, e) {
        let i = this.chart;
        t = Hs(this.userOptions, t), this.destroy(!0), this.init(i, t), i.isDirtyBox = !0, ut(e, !0) && i.redraw();
      }
      remove(t) {
        let e = this.chart, i = this.coll, s = this.series, r = s.length;
        for (; r--; ) s[r] && s[r].remove(!1);
        Ko(e.axes, this), Ko(e[i] || [], this), e.orderItems(i), this.destroy(), e.isDirtyBox = !0, ut(t, !0) && e.redraw();
      }
      setTitle(t, e) {
        this.update({ title: t }, e);
      }
      setCategories(t, e) {
        this.update({ categories: t }, e);
      }
    }
    Bi.keepProps = ["coll", "extKey", "hcEvents", "len", "names", "series", "userMax", "userMin"];
    let { addEvent: Gd, getMagnitude: jd, normalizeTickInterval: Ud, timeUnits: Gs } = U;
    (function(l) {
      function t() {
        return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
      }
      function e() {
        if (this.type !== "datetime") {
          this.dateTime = void 0;
          return;
        }
        this.dateTime || (this.dateTime = new i(this));
      }
      l.compose = function(s) {
        return s.keepProps.includes("dateTime") || (s.keepProps.push("dateTime"), s.prototype.getTimeTicks = t, Gd(s, "afterSetType", e)), s;
      };
      class i {
        constructor(r) {
          this.axis = r;
        }
        normalizeTimeTickInterval(r, n) {
          let o = n || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], a = o[o.length - 1], h = Gs[a[0]], c = a[1], d;
          for (d = 0; d < o.length && (h = Gs[(a = o[d])[0]], c = a[1], !o[d + 1] || !(r <= (h * c[c.length - 1] + Gs[o[d + 1][0]]) / 2)); d++) ;
          h === Gs.year && r < 5 * h && (c = [1, 2, 5]);
          let p = Ud(r / h, c, a[0] === "year" ? Math.max(jd(r / h), 1) : 1);
          return { unitRange: h, count: p, unitName: a[0] };
        }
        getXDateFormat(r, n) {
          let { axis: o } = this, a = o.chart.time;
          return o.closestPointRange ? a.getDateFormat(o.closestPointRange, r, o.options.startOfWeek, n) || a.resolveDTLFormat(n.year).main : a.resolveDTLFormat(n.day).main;
        }
      }
      l.Additions = i;
    })(X || (X = {}));
    let Vd = X, { addEvent: ea, normalizeTickInterval: qd, pick: $d } = U;
    (function(l) {
      function t() {
        this.type !== "logarithmic" ? this.logarithmic = void 0 : this.logarithmic ?? (this.logarithmic = new i(this));
      }
      function e() {
        let s = this.logarithmic;
        s && (this.lin2val = function(r) {
          return s.lin2log(r);
        }, this.val2lin = function(r) {
          return s.log2lin(r);
        });
      }
      l.compose = function(s) {
        return s.keepProps.includes("logarithmic") || (s.keepProps.push("logarithmic"), ea(s, "afterSetType", t), ea(s, "afterInit", e)), s;
      };
      class i {
        constructor(r) {
          this.axis = r;
        }
        getLogTickPositions(r, n, o, a) {
          let h = this.axis, c = h.len, d = h.options, p = [];
          if (a || (this.minorAutoInterval = void 0), r >= 0.5) r = Math.round(r), p = h.getLinearTickPositions(r, n, o);
          else if (r >= 0.08) {
            let u, f, m, x, g, b, v, M = Math.floor(n);
            for (u = r > 0.3 ? [1, 2, 4] : r > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], f = M; f < o + 1 && !v; f++) for (m = 0, x = u.length; m < x && !v; m++) (g = this.log2lin(this.lin2log(f) * u[m])) > n && (!a || b <= o) && b !== void 0 && p.push(b), b > o && (v = !0), b = g;
          } else {
            let u = this.lin2log(n), f = this.lin2log(o), m = a ? h.getMinorTickInterval() : d.tickInterval, x = d.tickPixelInterval / (a ? 5 : 1), g = a ? c / h.tickPositions.length : c;
            r = qd(r = $d(m === "auto" ? null : m, this.minorAutoInterval, (f - u) * x / (g || 1))), p = h.getLinearTickPositions(r, u, f).map(this.log2lin), a || (this.minorAutoInterval = r / 5);
          }
          return a || (h.tickInterval = r), p;
        }
        lin2log(r) {
          return Math.pow(10, r);
        }
        log2lin(r) {
          return Math.log(r) / Math.LN10;
        }
      }
      l.Additions = i;
    })(F || (F = {}));
    let Kd = F, { erase: Zd, extend: Jd, isNumber: ia } = U;
    (function(l) {
      let t;
      function e(h) {
        return this.addPlotBandOrLine(h, "plotBands");
      }
      function i(h, c) {
        let d = this.userOptions, p = new t(this, h);
        if (this.visible && (p = p.render()), p) {
          if (this._addedPlotLB || (this._addedPlotLB = !0, (d.plotLines || []).concat(d.plotBands || []).forEach((u) => {
            this.addPlotBandOrLine(u);
          })), c) {
            let u = d[c] || [];
            u.push(h), d[c] = u;
          }
          this.plotLinesAndBands.push(p);
        }
        return p;
      }
      function s(h) {
        return this.addPlotBandOrLine(h, "plotLines");
      }
      function r(h, c, d) {
        d = d || this.options;
        let p = this.getPlotLinePath({ value: c, force: !0, acrossPanes: d.acrossPanes }), u = [], f = this.horiz, m = !ia(this.min) || !ia(this.max) || h < this.min && c < this.min || h > this.max && c > this.max, x = this.getPlotLinePath({ value: h, force: !0, acrossPanes: d.acrossPanes }), g, b = 1, v;
        if (x && p) for (m && (v = x.toString() === p.toString(), b = 0), g = 0; g < x.length; g += 2) {
          let M = x[g], C = x[g + 1], S = p[g], A = p[g + 1];
          (M[0] === "M" || M[0] === "L") && (C[0] === "M" || C[0] === "L") && (S[0] === "M" || S[0] === "L") && (A[0] === "M" || A[0] === "L") && (f && S[1] === M[1] ? (S[1] += b, A[1] += b) : f || S[2] !== M[2] || (S[2] += b, A[2] += b), u.push(["M", M[1], M[2]], ["L", C[1], C[2]], ["L", A[1], A[2]], ["L", S[1], S[2]], ["Z"])), u.isFlat = v;
        }
        return u;
      }
      function n(h) {
        this.removePlotBandOrLine(h);
      }
      function o(h) {
        let c = this.plotLinesAndBands, d = this.options, p = this.userOptions;
        if (c) {
          let u = c.length;
          for (; u--; ) c[u].id === h && c[u].destroy();
          [d.plotLines || [], p.plotLines || [], d.plotBands || [], p.plotBands || []].forEach(function(f) {
            for (u = f.length; u--; ) (f[u] || {}).id === h && Zd(f, f[u]);
          });
        }
      }
      function a(h) {
        this.removePlotBandOrLine(h);
      }
      l.compose = function(h, c) {
        let d = c.prototype;
        return d.addPlotBand || (t = h, Jd(d, { addPlotBand: e, addPlotLine: s, addPlotBandOrLine: i, getPlotBandPath: r, removePlotBand: n, removePlotLine: a, removePlotBandOrLine: o })), c;
      };
    })(j || (j = {}));
    let Qd = j, { addEvent: tc, arrayMax: sa, arrayMin: ra, defined: Qe, destroyObjectProperties: ec, erase: ic, fireEvent: sc, merge: na, objectEach: rc, pick: nc } = U;
    class js {
      static compose(t, e) {
        return tc(t, "afterInit", function() {
          this.labelCollectors.push(() => {
            var s;
            let i = [];
            for (let r of this.axes) for (let { label: n, options: o } of r.plotLinesAndBands) n && !((s = o == null ? void 0 : o.label) != null && s.allowOverlap) && i.push(n);
            return i;
          });
        }), Qd.compose(js, e);
      }
      constructor(t, e) {
        this.axis = t, this.options = e, this.id = e.id;
      }
      render() {
        sc(this, "render");
        let { axis: t, options: e } = this, { horiz: i, logarithmic: s } = t, { color: r, events: n, zIndex: o = 0 } = e, { renderer: a, time: h } = t.chart, c = {}, d = h.parse(e.to), p = h.parse(e.from), u = h.parse(e.value), f = e.borderWidth, m = e.label, { label: x, svgElem: g } = this, b = [], v, M = Qe(p) && Qe(d), C = Qe(u), S = !g, A = { class: "highcharts-plot-" + (M ? "band " : "line ") + (e.className || "") }, T = M ? "bands" : "lines";
        if (!t.chart.styledMode && (C ? (A.stroke = r || "#999999", A["stroke-width"] = nc(e.width, 1), e.dashStyle && (A.dashstyle = e.dashStyle)) : M && (A.fill = r || "#e6e9ff", f && (A.stroke = e.borderColor, A["stroke-width"] = f))), c.zIndex = o, T += "-" + o, (v = t.plotLinesAndBandsGroups[T]) || (t.plotLinesAndBandsGroups[T] = v = a.g("plot-" + T).attr(c).add()), g || (this.svgElem = g = a.path().attr(A).add(v)), Qe(u)) b = t.getPlotLinePath({ value: (s == null ? void 0 : s.log2lin(u)) ?? u, lineWidth: g.strokeWidth(), acrossPanes: e.acrossPanes });
        else {
          if (!(Qe(p) && Qe(d))) return;
          b = t.getPlotBandPath((s == null ? void 0 : s.log2lin(p)) ?? p, (s == null ? void 0 : s.log2lin(d)) ?? d, e);
        }
        return !this.eventsAdded && n && (rc(n, (L, B) => {
          g == null || g.on(B, (W) => {
            n[B].apply(this, [W]);
          });
        }), this.eventsAdded = !0), (S || !g.d) && (b != null && b.length) ? g.attr({ d: b }) : g && (b ? (g.show(), g.animate({ d: b })) : g.d && (g.hide(), x && (this.label = x = x.destroy()))), m && (Qe(m.text) || Qe(m.formatter)) && (b != null && b.length) && t.width > 0 && t.height > 0 && !b.isFlat ? (m = na({ align: i && M ? "center" : void 0, x: i ? !M && 4 : 10, verticalAlign: !i && M ? "middle" : void 0, y: i ? M ? 16 : 10 : M ? 6 : -4, rotation: i && !M ? 90 : 0, ...M ? { inside: !0 } : {} }, m), this.renderLabel(m, b, M, o)) : x && x.hide(), this;
      }
      renderLabel(t, e, i, s) {
        var f;
        let r = this.axis, n = r.chart.renderer, o = t.inside, a = this.label;
        a || (this.label = a = n.text(this.getLabelText(t), 0, 0, t.useHTML).attr({ align: t.textAlign || t.align, rotation: t.rotation, class: "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || ""), zIndex: s }), r.chart.styledMode || a.css(na({ fontSize: "0.8em", textOverflow: i && !o ? "" : "ellipsis" }, t.style)), a.add());
        let h = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]], c = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]], d = ra(h), p = ra(c), u = sa(h) - d;
        a.align(t, !1, { x: d, y: p, width: u, height: sa(c) - p }), (!a.alignValue || a.alignValue === "left" || Qe(o)) && a.css({ width: (((f = t.style) == null ? void 0 : f.width) || (i && o ? u : a.rotation === 90 ? r.height - (a.alignAttr.y - r.top) : (t.clip ? r.width : r.chart.chartWidth) - (a.alignAttr.x - r.left))) + "px" }), a.show(!0);
      }
      getLabelText(t) {
        return Qe(t.formatter) ? t.formatter.call(this) : t.text;
      }
      destroy() {
        ic(this.axis.plotLinesAndBands, this), delete this.axis, ec(this);
      }
    }
    let { animObject: oc } = fe, { format: oa } = He, { composed: ac, dateFormats: lc, doc: aa, isSafari: hc } = _, { distribute: dc } = Ps, { addEvent: cc, clamp: Ri, css: la, discardElement: pc, extend: uc, fireEvent: ha, isArray: fc, isNumber: gc, isObject: mc, isString: on, merge: xc, pick: Ni, pushUnique: yc, splat: an, syncTimeout: vc } = U;
    class ln {
      constructor(t, e, i) {
        this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.options = {}, this.outside = !1, this.chart = t, this.init(t, e), this.pointer = i;
      }
      bodyFormatter(t) {
        return t.map((e) => {
          let i = e.series.tooltipOptions, s = e.formatPrefix || "point";
          return (i[s + "Formatter"] || e.tooltipFormatter).call(e, i[s + "Format"] || "");
        });
      }
      cleanSplit(t) {
        this.chart.series.forEach(function(e) {
          let i = e && e.tt;
          i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1);
        });
      }
      defaultFormatter(t) {
        let e, i = this.points || an(this);
        return (e = (e = [t.headerFooterFormatter(i[0])]).concat(t.bodyFormatter(i))).push(t.headerFooterFormatter(i[0], !0)), e;
      }
      destroy() {
        this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), pc(this.container)), U.clearTimeout(this.hideTimer);
      }
      getAnchor(t, e) {
        let i, { chart: s, pointer: r } = this, n = s.inverted, o = s.plotTop, a = s.plotLeft;
        if ((t = an(t))[0].series && t[0].series.yAxis && !t[0].series.yAxis.options.reversedStacks && (t = t.slice().reverse()), this.followPointer && e) e.chartX === void 0 && (e = r.normalize(e)), i = [e.chartX - a, e.chartY - o];
        else if (t[0].tooltipPos) i = t[0].tooltipPos;
        else {
          let h = 0, c = 0;
          t.forEach(function(d) {
            let p = d.pos(!0);
            p && (h += p[0], c += p[1]);
          }), h /= t.length, c /= t.length, this.shared && t.length > 1 && e && (n ? h = e.chartX : c = e.chartY), i = [h - a, c - o];
        }
        return i.map(Math.round);
      }
      getClassName(t, e, i) {
        let s = this.options, r = t.series, n = r.options;
        return [s.className, "highcharts-label", i && "highcharts-tooltip-header", e ? "highcharts-tooltip-box" : "highcharts-tooltip", !i && "highcharts-color-" + Ni(t.colorIndex, r.colorIndex), n && n.className].filter(on).join(" ");
      }
      getLabel({ anchorX: t, anchorY: e } = { anchorX: 0, anchorY: 0 }) {
        let i = this, s = this.chart.styledMode, r = this.options, n = this.split && this.allowShared, o = this.container, a = this.chart.renderer;
        if (this.label) {
          let h = !this.label.hasClass("highcharts-label");
          (!n && h || n && !h) && this.destroy();
        }
        if (!this.label) {
          if (this.outside) {
            let h = this.chart, c = h.options.chart.style, d = es.getRendererType();
            this.container = o = _.doc.createElement("div"), o.className = "highcharts-tooltip-container " + (h.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || ""), la(o, { position: "absolute", top: "1px", pointerEvents: "none", zIndex: Math.max(this.options.style.zIndex || 0, (c && c.zIndex || 0) + 3) }), this.renderer = a = new d(o, 0, 0, c, void 0, void 0, a.styledMode);
          }
          if (n ? this.label = a.g("tooltip") : (this.label = a.label("", t, e, r.shape, void 0, void 0, r.useHTML, void 0, "tooltip").attr({ padding: r.padding, r: r.borderRadius }), s || this.label.attr({ fill: r.backgroundColor, "stroke-width": r.borderWidth || 0 }).css(r.style).css({ pointerEvents: r.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none") })), i.outside) {
            let h = this.label;
            [h.xSetter, h.ySetter].forEach((c, d) => {
              h[d ? "ySetter" : "xSetter"] = (p) => {
                c.call(h, i.distance), h[d ? "y" : "x"] = p, o && (o.style[d ? "top" : "left"] = `${p}px`);
              };
            });
          }
          this.label.attr({ zIndex: 8 }).shadow(r.shadow).add();
        }
        return o && !o.parentElement && _.doc.body.appendChild(o), this.label;
      }
      getPlayingField() {
        let { body: t, documentElement: e } = aa, { chart: i, distance: s, outside: r } = this;
        return { width: r ? Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth) - 2 * s - 2 : i.chartWidth, height: r ? Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight) : i.chartHeight };
      }
      getPosition(t, e, i) {
        var it, pt;
        let { distance: s, chart: r, outside: n, pointer: o } = this, { inverted: a, plotLeft: h, plotTop: c, polar: d } = r, { plotX: p = 0, plotY: u = 0 } = i, f = {}, m = a && i.h || 0, { height: x, width: g } = this.getPlayingField(), b = o.getChartPosition(), v = (J) => J * b.scaleX, M = (J) => J * b.scaleY, C = (J) => {
          let dt = J === "x";
          return [J, dt ? g : x, dt ? t : e].concat(n ? [dt ? v(t) : M(e), dt ? b.left - s + v(p + h) : b.top - s + M(u + c), 0, dt ? g : x] : [dt ? t : e, dt ? p + h : u + c, dt ? h : c, dt ? h + r.plotWidth : c + r.plotHeight]);
        }, S = C("y"), A = C("x"), T, L = !!i.negative;
        !d && ((pt = (it = r.hoverSeries) == null ? void 0 : it.yAxis) != null && pt.reversed) && (L = !L);
        let B = !this.followPointer && Ni(i.ttBelow, !d && !a === L), W = function(J, dt, $, rt, lt, wt, _t) {
          let ft = n ? J === "y" ? M(s) : v(s) : s, mt = ($ - rt) / 2, Et = rt < lt - s, me = lt + s + rt < dt, se = lt - ft - $ + mt, ue = lt + ft - mt;
          if (B && me) f[J] = ue;
          else if (!B && Et) f[J] = se;
          else if (Et) f[J] = Math.min(_t - rt, se - m < 0 ? se : se - m);
          else {
            if (!me) return !1;
            f[J] = Math.max(wt, ue + m + $ > dt ? ue : ue + m);
          }
        }, G = function(J, dt, $, rt, lt) {
          if (lt < s || lt > dt - s) return !1;
          lt < $ / 2 ? f[J] = 1 : lt > dt - rt / 2 ? f[J] = dt - rt - 2 : f[J] = lt - $ / 2;
        }, D = function(J) {
          [S, A] = [A, S], T = J;
        }, Y = () => {
          W.apply(0, S) !== !1 ? G.apply(0, A) !== !1 || T || (D(!0), Y()) : T ? f.x = f.y = 0 : (D(!0), Y());
        };
        return (a && !d || this.len > 1) && D(), Y(), f;
      }
      hide(t) {
        let e = this;
        U.clearTimeout(this.hideTimer), t = Ni(t, this.options.hideDelay), this.isHidden || (this.hideTimer = vc(function() {
          let i = e.getLabel();
          e.getLabel().animate({ opacity: 0 }, { duration: t && 150, complete: () => {
            i.hide(), e.container && e.container.remove();
          } }), e.isHidden = !0;
        }, t));
      }
      init(t, e) {
        this.chart = t, this.options = e, this.crosshairs = [], this.isHidden = !0, this.split = e.split && !t.inverted && !t.polar, this.shared = e.shared || this.split, this.outside = Ni(e.outside, !!(t.scrollablePixelsX || t.scrollablePixelsY));
      }
      shouldStickOnContact(t) {
        return !!(!this.followPointer && this.options.stickOnContact && (!t || this.pointer.inClass(t.target, "highcharts-tooltip")));
      }
      move(t, e, i, s) {
        let r = this, n = oc(!r.isHidden && r.options.animation), o = r.followPointer || (r.len || 0) > 1, a = { x: t, y: e };
        o || (a.anchorX = i, a.anchorY = s), n.step = () => r.drawTracker(), r.getLabel().animate(a, n);
      }
      refresh(t, e) {
        let { chart: i, options: s, pointer: r, shared: n } = this, o = an(t), a = o[0], h = s.format, c = s.formatter || this.defaultFormatter, d = i.styledMode, p = this.allowShared;
        if (!s.enabled || !a.series) return;
        U.clearTimeout(this.hideTimer), this.allowShared = !(!fc(t) && t.series && t.series.noSharedTooltip), p = p && !this.allowShared, this.followPointer = !this.split && a.series.tooltipOptions.followPointer;
        let u = this.getAnchor(t, e), f = u[0], m = u[1];
        n && this.allowShared && (r.applyInactiveState(o), o.forEach((b) => b.setState("hover")), a.points = o), this.len = o.length;
        let x = on(h) ? oa(h, a, i) : c.call(a, this);
        a.points = void 0;
        let g = a.series;
        if (this.distance = Ni(g.tooltipOptions.distance, 16), x === !1) this.hide();
        else {
          if (this.split && this.allowShared) this.renderSplit(x, o);
          else {
            let b = f, v = m;
            if (e && r.isDirectTouch && (b = e.chartX - i.plotLeft, v = e.chartY - i.plotTop), i.polar || g.options.clip === !1 || o.some((M) => r.isDirectTouch || M.series.shouldShowTooltip(b, v))) {
              let M = this.getLabel(p && this.tt || {});
              (!s.style.width || d) && M.css({ width: (this.outside ? this.getPlayingField() : i.spacingBox).width + "px" }), M.attr({ class: this.getClassName(a), text: x && x.join ? x.join("") : x }), this.outside && M.attr({ x: Ri(M.x || 0, 0, this.getPlayingField().width - (M.width || 0)) }), d || M.attr({ stroke: s.borderColor || a.color || g.color || "#666666" }), this.updatePosition({ plotX: f, plotY: m, negative: a.negative, ttBelow: a.ttBelow, h: u[2] || 0 });
            } else {
              this.hide();
              return;
            }
          }
          this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = !1;
        }
        ha(this, "refresh");
      }
      renderSplit(t, e) {
        var dt;
        let i = this, { chart: s, chart: { chartWidth: r, chartHeight: n, plotHeight: o, plotLeft: a, plotTop: h, scrollablePixelsY: c = 0, scrollablePixelsX: d, styledMode: p }, distance: u, options: f, options: { positioner: m }, pointer: x } = i, { scrollLeft: g = 0, scrollTop: b = 0 } = ((dt = s.scrollablePlotArea) == null ? void 0 : dt.scrollingContainer) || {}, v = i.outside && typeof d != "number" ? aa.documentElement.getBoundingClientRect() : { left: g, right: g + r, top: b, bottom: b + n }, M = i.getLabel(), C = this.renderer || s.renderer, S = !!(s.xAxis[0] && s.xAxis[0].opposite), { left: A, top: T } = x.getChartPosition(), L = h + b, B = 0, W = o - c;
        function G($, rt, lt, wt, _t = !0) {
          let ft, mt;
          return lt ? (ft = S ? 0 : W, mt = Ri($ - wt / 2, v.left, v.right - wt - (i.outside ? A : 0))) : (ft = rt - L, mt = Ri(mt = _t ? $ - wt - u : $ + u, _t ? mt : v.left, v.right)), { x: mt, y: ft };
        }
        on(t) && (t = [!1, t]);
        let D = t.slice(0, e.length + 1).reduce(function($, rt, lt) {
          if (rt !== !1 && rt !== "") {
            let wt = e[lt - 1] || { isHeader: !0, plotX: e[0].plotX, plotY: o, series: {} }, _t = wt.isHeader, ft = _t ? i : wt.series, mt = ft.tt = function(re, Ut, de) {
              let mi = re, { isHeader: ys, series: mr } = Ut;
              if (!mi) {
                let Gi = { padding: f.padding, r: f.borderRadius };
                p || (Gi.fill = f.backgroundColor, Gi["stroke-width"] = f.borderWidth ?? 1), mi = C.label("", 0, 0, f[ys ? "headerShape" : "shape"], void 0, void 0, f.useHTML).addClass(i.getClassName(Ut, !0, ys)).attr(Gi).add(M);
              }
              return mi.isActive = !0, mi.attr({ text: de }), p || mi.css(f.style).attr({ stroke: f.borderColor || Ut.color || mr.color || "#333333" }), mi;
            }(ft.tt, wt, rt.toString()), Et = mt.getBBox(), me = Et.width + mt.strokeWidth();
            _t && (B = Et.height, W += B, S && (L -= B));
            let { anchorX: se, anchorY: ue } = function(re) {
              let Ut, de, { isHeader: mi, plotX: ys = 0, plotY: mr = 0, series: Gi } = re;
              if (mi) Ut = Math.max(a + ys, a), de = h + o / 2;
              else {
                let { xAxis: Cl, yAxis: Tl } = Gi;
                Ut = Cl.pos + Ri(ys, -u, Cl.len + u), Gi.shouldShowTooltip(0, Tl.pos - h + mr, { ignoreX: !0 }) && (de = Tl.pos + mr);
              }
              return { anchorX: Ut = Ri(Ut, v.left - u, v.right + u), anchorY: de };
            }(wt);
            if (typeof ue == "number") {
              let re = Et.height + 1, Ut = m ? m.call(i, me, re, wt) : G(se, ue, _t, me);
              $.push({ align: m ? 0 : void 0, anchorX: se, anchorY: ue, boxWidth: me, point: wt, rank: Ni(Ut.rank, _t ? 1 : 0), size: re, target: Ut.y, tt: mt, x: Ut.x });
            } else mt.isActive = !1;
          }
          return $;
        }, []);
        !m && D.some(($) => {
          let { outside: rt } = i, lt = (rt ? A : 0) + $.anchorX;
          return lt < v.left && lt + $.boxWidth < v.right || lt < A - v.left + $.boxWidth && v.right - lt > lt;
        }) && (D = D.map(($) => {
          let { x: rt, y: lt } = G($.anchorX, $.anchorY, $.point.isHeader, $.boxWidth, !1);
          return uc($, { target: lt, x: rt });
        })), i.cleanSplit(), dc(D, W);
        let Y = { left: A, right: A };
        D.forEach(function($) {
          let { x: rt, boxWidth: lt, isHeader: wt } = $;
          !wt && (i.outside && A + rt < Y.left && (Y.left = A + rt), !wt && i.outside && Y.left + lt > Y.right && (Y.right = A + rt));
        }), D.forEach(function($) {
          let { x: rt, anchorX: lt, anchorY: wt, pos: _t, point: { isHeader: ft } } = $, mt = { visibility: _t === void 0 ? "hidden" : "inherit", x: rt, y: (_t || 0) + L, anchorX: lt, anchorY: wt };
          if (i.outside && rt < lt) {
            let Et = A - Y.left;
            Et > 0 && (ft || (mt.x = rt + Et, mt.anchorX = lt + Et), ft && (mt.x = (Y.right - Y.left) / 2, mt.anchorX = lt + Et));
          }
          $.tt.attr(mt);
        });
        let { container: it, outside: pt, renderer: J } = i;
        if (pt && it && J) {
          let { width: $, height: rt, x: lt, y: wt } = M.getBBox();
          J.setSize($ + lt, rt + wt, !1), it.style.left = Y.left + "px", it.style.top = T + "px";
        }
        hc && M.attr({ opacity: M.opacity === 1 ? 0.999 : 1 });
      }
      drawTracker() {
        if (!this.shouldStickOnContact()) {
          this.tracker && (this.tracker = this.tracker.destroy());
          return;
        }
        let t = this.chart, e = this.label, i = this.shared ? t.hoverPoints : t.hoverPoint;
        if (!e || !i) return;
        let s = { x: 0, y: 0, width: 0, height: 0 }, r = this.getAnchor(i), n = e.getBBox();
        r[0] += t.plotLeft - (e.translateX || 0), r[1] += t.plotTop - (e.translateY || 0), s.x = Math.min(0, r[0]), s.y = Math.min(0, r[1]), s.width = r[0] < 0 ? Math.max(Math.abs(r[0]), n.width - r[0]) : Math.max(Math.abs(r[0]), n.width), s.height = r[1] < 0 ? Math.max(Math.abs(r[1]), n.height - Math.abs(r[1])) : Math.max(Math.abs(r[1]), n.height), this.tracker ? this.tracker.attr(s) : (this.tracker = e.renderer.rect(s).addClass("highcharts-tracker").add(e), t.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
      }
      styledModeFormat(t) {
        return t.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"');
      }
      headerFooterFormatter(t, e) {
        let i = t.series, s = i.tooltipOptions, r = i.xAxis, n = r && r.dateTime, o = { isFooter: e, point: t }, a = s.xDateFormat || "", h = s[e ? "footerFormat" : "headerFormat"];
        return ha(this, "headerFormatter", o, function(c) {
          if (n && !a && gc(t.key) && (a = n.getXDateFormat(t.key, s.dateTimeLabelFormats)), n && a) {
            if (mc(a)) {
              let d = a;
              lc[0] = (p) => i.chart.time.dateFormat(d, p), a = "%0";
            }
            (t.tooltipDateKeys || ["key"]).forEach((d) => {
              h = h.replace(RegExp("point\\." + d + "([ \\)}])", ""), `(point.${d}:${a})$1`);
            });
          }
          i.chart.styledMode && (h = this.styledModeFormat(h)), c.text = oa(h, t, this.chart);
        }), o.text || "";
      }
      update(t) {
        this.destroy(), this.init(this.chart, xc(!0, this.options, t));
      }
      updatePosition(t) {
        let { chart: e, container: i, distance: s, options: r, pointer: n, renderer: o } = this, { height: a = 0, width: h = 0 } = this.getLabel(), { left: c, top: d, scaleX: p, scaleY: u } = n.getChartPosition(), f = (r.positioner || this.getPosition).call(this, h, a, t), m = _.doc, x = (t.plotX || 0) + e.plotLeft, g = (t.plotY || 0) + e.plotTop, b;
        o && i && (r.positioner && (f.x += c - s, f.y += d - s), b = (r.borderWidth || 0) + 2 * s + 2, o.setSize(Ri(h + b, 0, m.documentElement.clientWidth) - 1, a + b, !1), (p !== 1 || u !== 1) && (la(i, { transform: `scale(${p}, ${u})` }), x *= p, g *= u), x += c - f.x, g += d - f.y), this.move(Math.round(f.x), Math.round(f.y || 0), x, g);
      }
    }
    (function(l) {
      l.compose = function(t) {
        yc(ac, "Core.Tooltip") && cc(t, "afterInit", function() {
          let e = this.chart;
          e.options.tooltip && (e.tooltip = new l(e, e.options.tooltip, this));
        });
      };
    })(ln || (ln = {}));
    let da = ln, { animObject: bc } = fe, { defaultOptions: kc } = ke, { format: wc } = He, { addEvent: Mc, crisp: Sc, erase: Cc, extend: Us, fireEvent: hn, getNestedProperty: Tc, isArray: Ac, isFunction: Pc, isNumber: ai, isObject: Vs, merge: ca, pick: li, syncTimeout: Ec, removeEvent: pa, uniqueKey: Oc } = U;
    class ds {
      animateBeforeDestroy() {
        let t = this, e = { x: t.startXPos, opacity: 0 }, i = t.getGraphicalProps();
        i.singular.forEach(function(s) {
          t[s] = t[s].animate(s === "dataLabel" ? { x: t[s].startXPos, y: t[s].startYPos, opacity: 0 } : e);
        }), i.plural.forEach(function(s) {
          t[s].forEach(function(r) {
            r.element && r.animate(Us({ x: t.startXPos }, r.startYPos ? { x: r.startXPos, y: r.startYPos } : {}));
          });
        });
      }
      applyOptions(t, e) {
        let i = this.series, s = i.options.pointValKey || i.pointValKey;
        return Us(this, t = ds.prototype.optionsToObject.call(this, t)), this.options = this.options ? Us(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, s && (this.y = ds.prototype.getNestedProperty.call(this, s)), this.selected && (this.state = "select"), "name" in this && e === void 0 && i.xAxis && i.xAxis.hasNames && (this.x = i.xAxis.nameToX(this)), this.x === void 0 && i ? this.x = e ?? i.autoIncrement() : ai(t.x) && i.options.relativeXValue ? this.x = i.autoIncrement(t.x) : typeof this.x == "string" && (e ?? (e = i.chart.time.parse(this.x)), ai(e) && (this.x = e)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this;
      }
      destroy() {
        if (!this.destroyed) {
          let t = this, e = t.series, i = e.chart, s = e.options.dataSorting, r = i.hoverPoints, n = bc(t.series.chart.renderer.globalAnimation), o = () => {
            for (let a in (t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (pa(t), t.destroyElements()), t) delete t[a];
          };
          t.legendItem && i.legend.destroyItem(t), r && (t.setState(), Cc(r, t), r.length || (i.hoverPoints = null)), t === i.hoverPoint && t.onMouseOut(), s && s.enabled ? (this.animateBeforeDestroy(), Ec(o, n.duration)) : o(), i.pointCount--;
        }
        this.destroyed = !0;
      }
      destroyElements(t) {
        let e = this, i = e.getGraphicalProps(t);
        i.singular.forEach(function(s) {
          e[s] = e[s].destroy();
        }), i.plural.forEach(function(s) {
          e[s].forEach(function(r) {
            r && r.element && r.destroy();
          }), delete e[s];
        });
      }
      firePointEvent(t, e, i) {
        let s = this, r = this.series.options;
        s.manageEvent(t), t === "click" && r.allowPointSelect && (i = function(n) {
          !s.destroyed && s.select && s.select(null, n.ctrlKey || n.metaKey || n.shiftKey);
        }), hn(s, t, e, i);
      }
      getClassName() {
        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (this.colorIndex !== void 0 ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
      }
      getGraphicalProps(t) {
        let e, i, s = this, r = [], n = { singular: [], plural: [] };
        for ((t = t || { graphic: 1, dataLabel: 1 }).graphic && r.push("graphic", "connector"), t.dataLabel && r.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i = r.length; i--; ) s[e = r[i]] && n.singular.push(e);
        return ["graphic", "dataLabel"].forEach(function(o) {
          let a = o + "s";
          t[o] && s[a] && n.plural.push(a);
        }), n;
      }
      getNestedProperty(t) {
        return t ? t.indexOf("custom.") === 0 ? Tc(t, this.options) : this[t] : void 0;
      }
      getZone() {
        let t = this.series, e = t.zones, i = t.zoneAxis || "y", s, r = 0;
        for (s = e[0]; this[i] >= s.value; ) s = e[++r];
        return this.nonZonedColor || (this.nonZonedColor = this.color), s && s.color && !this.options.color ? this.color = s.color : this.color = this.nonZonedColor, s;
      }
      hasNewShapeType() {
        return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
      }
      constructor(t, e, i) {
        this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = t, this.applyOptions(e, i), this.id ?? (this.id = Oc()), this.resolveColor(), t.chart.pointCount++, hn(this, "afterInit");
      }
      isValid() {
        return (ai(this.x) || this.x instanceof Date) && ai(this.y);
      }
      optionsToObject(t) {
        var c;
        let e = this.series, i = e.options.keys, s = i || e.pointArrayMap || ["y"], r = s.length, n = {}, o, a = 0, h = 0;
        if (ai(t) || t === null) n[s[0]] = t;
        else if (Ac(t)) for (!i && t.length > r && ((o = typeof t[0]) == "string" ? (c = e.xAxis) != null && c.dateTime ? n.x = e.chart.time.parse(t[0]) : n.name = t[0] : o === "number" && (n.x = t[0]), a++); h < r; ) i && t[a] === void 0 || (s[h].indexOf(".") > 0 ? ds.prototype.setNestedProperty(n, t[a], s[h]) : n[s[h]] = t[a]), a++, h++;
        else typeof t == "object" && (n = t, t.dataLabels && (e.hasDataLabels = () => !0), t.marker && (e._hasPointMarkers = !0));
        return n;
      }
      pos(t, e = this.plotY) {
        if (!this.destroyed) {
          let { plotX: i, series: s } = this, { chart: r, xAxis: n, yAxis: o } = s, a = 0, h = 0;
          if (ai(i) && ai(e)) return t && (a = n ? n.pos : r.plotLeft, h = o ? o.pos : r.plotTop), r.inverted && n && o ? [o.len - e + h, n.len - i + a] : [i + a, e + h];
        }
      }
      resolveColor() {
        let t = this.series, e = t.chart.options.chart, i = t.chart.styledMode, s, r, n = e.colorCount, o;
        delete this.nonZonedColor, t.options.colorByPoint ? (i || (s = (r = t.options.colors || t.chart.options.colors)[t.colorCounter], n = r.length), o = t.colorCounter, t.colorCounter++, t.colorCounter === n && (t.colorCounter = 0)) : (i || (s = t.color), o = t.colorIndex), this.colorIndex = li(this.options.colorIndex, o), this.color = li(this.options.color, s);
      }
      setNestedProperty(t, e, i) {
        return i.split(".").reduce(function(s, r, n, o) {
          let a = o.length - 1 === n;
          return s[r] = a ? e : Vs(s[r], !0) ? s[r] : {}, s[r];
        }, t), t;
      }
      shouldDraw() {
        return !this.isNull;
      }
      tooltipFormatter(t) {
        var a;
        let { chart: e, pointArrayMap: i = ["y"], tooltipOptions: s } = this.series, { valueDecimals: r = "", valuePrefix: n = "", valueSuffix: o = "" } = s;
        return e.styledMode && (t = ((a = e.tooltip) == null ? void 0 : a.styledModeFormat(t)) || t), i.forEach((h) => {
          h = "{point." + h, (n || o) && (t = t.replace(RegExp(h + "}", "g"), n + h + "}" + o)), t = t.replace(RegExp(h + "}", "g"), h + ":,." + r + "f}");
        }), wc(t, this, e);
      }
      update(t, e, i, s) {
        let r, n = this, o = n.series, a = n.graphic, h = o.chart, c = o.options;
        function d() {
          n.applyOptions(t);
          let p = a && n.hasMockGraphic, u = n.y === null ? !p : p;
          a && u && (n.graphic = a.destroy(), delete n.hasMockGraphic), Vs(t, !0) && (a && a.element && t && t.marker && t.marker.symbol !== void 0 && (n.graphic = a.destroy()), t != null && t.dataLabels && n.dataLabel && (n.dataLabel = n.dataLabel.destroy())), r = n.index;
          let f = {};
          for (let m of o.dataColumnKeys()) f[m] = n[m];
          o.dataTable.setRow(f, r), c.data[r] = Vs(c.data[r], !0) || Vs(t, !0) ? n.options : li(t, c.data[r]), o.isDirty = o.isDirtyData = !0, !o.fixedBox && o.hasCartesianSeries && (h.isDirtyBox = !0), c.legendType === "point" && (h.isDirtyLegend = !0), e && h.redraw(i);
        }
        e = li(e, !0), s === !1 ? d() : n.firePointEvent("update", { options: t }, d);
      }
      remove(t, e) {
        this.series.removePoint(this.series.data.indexOf(this), t, e);
      }
      select(t, e) {
        let i = this, s = i.series, r = s.chart;
        t = li(t, !i.selected), this.selectedStaging = t, i.firePointEvent(t ? "select" : "unselect", { accumulate: e }, function() {
          i.selected = i.options.selected = t, s.options.data[s.data.indexOf(i)] = i.options, i.setState(t && "select"), e || r.getSelectedPoints().forEach(function(n) {
            let o = n.series;
            n.selected && n !== i && (n.selected = n.options.selected = !1, o.options.data[o.data.indexOf(n)] = n.options, n.setState(r.hoverPoints && o.options.inactiveOtherPoints ? "inactive" : ""), n.firePointEvent("unselect"));
          });
        }), delete this.selectedStaging;
      }
      onMouseOver(t) {
        let { inverted: e, pointer: i } = this.series.chart;
        i && (t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e), i.runPointActions(t, this));
      }
      onMouseOut() {
        let t = this.series.chart;
        this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach(function(e) {
          e.setState();
        }), t.hoverPoints = t.hoverPoint = null;
      }
      manageEvent(t) {
        var s, r, n, o, a, h, c;
        let e = ca(this.series.options.point, this.options), i = (s = e.events) == null ? void 0 : s[t];
        Pc(i) && (!((r = this.hcEvents) != null && r[t]) || ((o = (n = this.hcEvents) == null ? void 0 : n[t]) == null ? void 0 : o.map((d) => d.fn).indexOf(i)) === -1) ? ((a = this.importedUserEvent) == null || a.call(this), this.importedUserEvent = Mc(this, t, i), this.hcEvents && (this.hcEvents[t].userEvent = !0)) : this.importedUserEvent && !i && ((h = this.hcEvents) != null && h[t]) && ((c = this.hcEvents) != null && c[t].userEvent) && (pa(this, t), delete this.hcEvents[t], Object.keys(this.hcEvents) || delete this.importedUserEvent);
      }
      setState(t, e) {
        var S;
        let i = this.series, s = this.state, r = i.options.states[t || "normal"] || {}, n = kc.plotOptions[i.type].marker && i.options.marker, o = n && n.enabled === !1, a = n && n.states && n.states[t || "normal"] || {}, h = a.enabled === !1, c = this.marker || {}, d = i.chart, p = n && i.markerAttribs, u = i.halo, f, m, x, g = i.stateMarkerGraphic, b;
        if ((t = t || "") === this.state && !e || this.selected && t !== "select" || r.enabled === !1 || t && (h || o && a.enabled === !1) || t && c.states && c.states[t] && c.states[t].enabled === !1) return;
        if (this.state = t, p && (f = i.markerAttribs(this, t)), this.graphic && !this.hasMockGraphic) {
          if (s && this.graphic.removeClass("highcharts-point-" + s), t && this.graphic.addClass("highcharts-point-" + t), !d.styledMode) {
            m = i.pointAttribs(this, t), x = li(d.options.chart.animation, r.animation);
            let A = m.opacity;
            i.options.inactiveOtherPoints && ai(A) && (this.dataLabels || []).forEach(function(T) {
              T && !T.hasClass("highcharts-data-label-hidden") && (T.animate({ opacity: A }, x), T.connector && T.connector.animate({ opacity: A }, x));
            }), this.graphic.animate(m, x);
          }
          f && this.graphic.animate(f, li(d.options.chart.animation, a.animation, n.animation)), g && g.hide();
        } else t && a && (b = c.symbol || i.symbol, g && g.currentSymbol !== b && (g = g.destroy()), f && (g ? g[e ? "animate" : "attr"]({ x: f.x, y: f.y }) : b && (i.stateMarkerGraphic = g = d.renderer.symbol(b, f.x, f.y, f.width, f.height, ca(n, a)).add(i.markerGroup), g.currentSymbol = b)), !d.styledMode && g && this.state !== "inactive" && g.attr(i.pointAttribs(this, t))), g && (g[t && this.isInside ? "show" : "hide"](), g.element.point = this, g.addClass(this.getClassName(), !0));
        let v = r.halo, M = this.graphic || g, C = M && M.visibility || "inherit";
        v && v.size && M && C !== "hidden" && !this.isCluster ? (u || (i.halo = u = d.renderer.path().add(M.parentGroup)), u.show()[e ? "animate" : "attr"]({ d: this.haloPath(v.size) }), u.attr({ class: "highcharts-halo highcharts-color-" + li(this.colorIndex, i.colorIndex) + (this.className ? " " + this.className : ""), visibility: C, zIndex: -1 }), u.point = this, d.styledMode || u.attr(Us({ fill: this.color || i.color, "fill-opacity": v.opacity }, Ft.filterUserAttributes(v.attributes || {})))) : (S = u == null ? void 0 : u.point) != null && S.haloPath && !u.point.destroyed && u.animate({ d: u.point.haloPath(0) }, null, u.hide), hn(this, "afterSetState", { state: t });
      }
      haloPath(t) {
        let e = this.pos();
        return e ? this.series.chart.renderer.symbols.circle(Sc(e[0], 1) - t, e[1] - t, 2 * t, 2 * t) : [];
      }
    }
    let hi = ds, { parse: Lc } = ie, { charts: dn, composed: _c, isTouchDevice: Ic } = _, { addEvent: Re, attr: Dc, css: cn, extend: pn, find: ua, fireEvent: di, isNumber: qs, isObject: $s, objectEach: Bc, offset: Rc, pick: Ge, pushUnique: Nc, splat: fa } = U;
    class le {
      applyInactiveState(t) {
        let e = [], i;
        (t || []).forEach(function(s) {
          i = s.series, e.push(i), i.linkedParent && e.push(i.linkedParent), i.linkedSeries && (e = e.concat(i.linkedSeries)), i.navigatorSeries && e.push(i.navigatorSeries);
        }), this.chart.series.forEach(function(s) {
          e.indexOf(s) === -1 ? s.setState("inactive", !0) : s.options.inactiveOtherPoints && s.setAllPointsToState("inactive");
        });
      }
      destroy() {
        let t = this;
        this.eventsToUnbind.forEach((e) => e()), this.eventsToUnbind = [], !_.chartCount && (le.unbindDocumentMouseUp.forEach((e) => e.unbind()), le.unbindDocumentMouseUp.length = 0, le.unbindDocumentTouchEnd && (le.unbindDocumentTouchEnd = le.unbindDocumentTouchEnd())), clearInterval(t.tooltipTimeout), Bc(t, function(e, i) {
          t[i] = void 0;
        });
      }
      getSelectionMarkerAttrs(t, e) {
        let i = { args: { chartX: t, chartY: e }, attrs: {}, shapeType: "rect" };
        return di(this, "getSelectionMarkerAttrs", i, (s) => {
          let r, { chart: n, zoomHor: o, zoomVert: a } = this, { mouseDownX: h = 0, mouseDownY: c = 0 } = n, d = s.attrs;
          d.x = n.plotLeft, d.y = n.plotTop, d.width = o ? 1 : n.plotWidth, d.height = a ? 1 : n.plotHeight, o && (r = t - h, d.width = Math.max(1, Math.abs(r)), d.x = (r > 0 ? 0 : r) + h), a && (r = e - c, d.height = Math.max(1, Math.abs(r)), d.y = (r > 0 ? 0 : r) + c);
        }), i;
      }
      drag(t) {
        let { chart: e } = this, { mouseDownX: i = 0, mouseDownY: s = 0 } = e, { panning: r, panKey: n, selectionMarkerFill: o } = e.options.chart, a = e.plotLeft, h = e.plotTop, c = e.plotWidth, d = e.plotHeight, p = $s(r) ? r.enabled : r, u = n && t[`${n}Key`], f = t.chartX, m = t.chartY, x, g = this.selectionMarker;
        if ((!g || !g.touch) && (f < a ? f = a : f > a + c && (f = a + c), m < h ? m = h : m > h + d && (m = h + d), this.hasDragged = Math.sqrt(Math.pow(i - f, 2) + Math.pow(s - m, 2)), this.hasDragged > 10)) {
          x = e.isInsidePlot(i - a, s - h, { visiblePlotOnly: !0 });
          let { shapeType: b, attrs: v } = this.getSelectionMarkerAttrs(f, m);
          (e.hasCartesianSeries || e.mapView) && this.hasZoom && x && !u && !g && (this.selectionMarker = g = e.renderer[b](), g.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(), e.styledMode || g.attr({ fill: o || Lc("#334eff").setOpacity(0.25).get() })), g && g.attr(v), x && !g && p && e.pan(t, r);
        }
      }
      dragStart(t) {
        let e = this.chart;
        e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = t.chartX, e.mouseDownY = t.chartY;
      }
      getSelectionBox(t) {
        let e = { args: { marker: t }, result: t.getBBox() };
        return di(this, "getSelectionBox", e), e.result;
      }
      drop(t) {
        let e, { chart: i, selectionMarker: s } = this;
        for (let r of i.axes) r.isPanning && (r.isPanning = !1, (r.options.startOnTick || r.options.endOnTick || r.series.some((n) => n.boosted)) && (r.forceRedraw = !0, r.setExtremes(r.userMin, r.userMax, !1), e = !0));
        if (e && i.redraw(), s && t) {
          if (this.hasDragged) {
            let r = this.getSelectionBox(s);
            i.transform({ axes: i.axes.filter((n) => n.zoomEnabled && (n.coll === "xAxis" && this.zoomX || n.coll === "yAxis" && this.zoomY)), selection: { originalEvent: t, xAxis: [], yAxis: [], ...r }, from: r });
          }
          qs(i.index) && (this.selectionMarker = s.destroy());
        }
        i && qs(i.index) && (cn(i.container, { cursor: i._cursor }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = []);
      }
      findNearestKDPoint(t, e, i) {
        let s;
        return t.forEach(function(r) {
          let n = !(r.noSharedTooltip && e) && 0 > r.options.findNearestPointBy.indexOf("y"), o = r.searchPoint(i, n);
          $s(o, !0) && o.series && (!$s(s, !0) || function(a, h) {
            var u, f;
            let c = a.distX - h.distX, d = a.dist - h.dist, p = ((u = h.series.group) == null ? void 0 : u.zIndex) - ((f = a.series.group) == null ? void 0 : f.zIndex);
            return c !== 0 && e ? c : d !== 0 ? d : p !== 0 ? p : a.series.index > h.series.index ? -1 : 1;
          }(s, o) > 0) && (s = o);
        }), s;
      }
      getChartCoordinatesFromPoint(t, e) {
        let { xAxis: i, yAxis: s } = t.series, r = t.shapeArgs;
        if (i && s) {
          let n = t.clientX ?? t.plotX ?? 0, o = t.plotY || 0;
          return t.isNode && r && qs(r.x) && qs(r.y) && (n = r.x, o = r.y), e ? { chartX: s.len + s.pos - o, chartY: i.len + i.pos - n } : { chartX: n + i.pos, chartY: o + s.pos };
        }
        if (r && r.x && r.y) return { chartX: r.x, chartY: r.y };
      }
      getChartPosition() {
        if (this.chartPosition) return this.chartPosition;
        let { container: t } = this.chart, e = Rc(t);
        this.chartPosition = { left: e.left, top: e.top, scaleX: 1, scaleY: 1 };
        let { offsetHeight: i, offsetWidth: s } = t;
        return s > 2 && i > 2 && (this.chartPosition.scaleX = e.width / s, this.chartPosition.scaleY = e.height / i), this.chartPosition;
      }
      getCoordinates(t) {
        let e = { xAxis: [], yAxis: [] };
        for (let i of this.chart.axes) e[i.isXAxis ? "xAxis" : "yAxis"].push({ axis: i, value: i.toValue(t[i.horiz ? "chartX" : "chartY"]) });
        return e;
      }
      getHoverData(t, e, i, s, r, n) {
        let o = [], a = function(u) {
          return u.visible && !(!r && u.directTouch) && Ge(u.options.enableMouseTracking, !0);
        }, h = e, c, d = { chartX: n ? n.chartX : void 0, chartY: n ? n.chartY : void 0, shared: r };
        di(this, "beforeGetHoverData", d), c = h && !h.stickyTracking ? [h] : i.filter((u) => u.stickyTracking && (d.filter || a)(u));
        let p = s && t || !n ? t : this.findNearestKDPoint(c, r, n);
        return h = p && p.series, p && (r && !h.noSharedTooltip ? (c = i.filter(function(u) {
          return d.filter ? d.filter(u) : a(u) && !u.noSharedTooltip;
        })).forEach(function(u) {
          let f = ua(u.points, function(m) {
            return m.x === p.x && !m.isNull;
          });
          $s(f) && (u.boosted && u.boost && (f = u.boost.getPoint(f)), o.push(f));
        }) : o.push(p)), di(this, "afterGetHoverData", d = { hoverPoint: p }), { hoverPoint: d.hoverPoint, hoverSeries: h, hoverPoints: o };
      }
      getPointFromEvent(t) {
        let e = t.target, i;
        for (; e && !i; ) i = e.point, e = e.parentNode;
        return i;
      }
      onTrackerMouseOut(t) {
        let e = this.chart, i = t.relatedTarget, s = e.hoverSeries;
        this.isDirectTouch = !1, !s || !i || s.stickyTracking || this.inClass(i, "highcharts-tooltip") || this.inClass(i, "highcharts-series-" + s.index) && this.inClass(i, "highcharts-tracker") || s.onMouseOut();
      }
      inClass(t, e) {
        let i = t, s;
        for (; i; ) {
          if (s = Dc(i, "class")) {
            if (s.indexOf(e) !== -1) return !0;
            if (s.indexOf("highcharts-container") !== -1) return !1;
          }
          i = i.parentElement;
        }
      }
      constructor(t, e) {
        var i;
        this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = e, this.chart = t, this.runChartClick = !!((i = e.chart.events) != null && i.click), this.pinchDown = [], this.setDOMEvents(), di(this, "afterInit");
      }
      normalize(t, e) {
        let i = t.touches, s = i ? i.length ? i.item(0) : Ge(i.changedTouches, t.changedTouches)[0] : t;
        e || (e = this.getChartPosition());
        let r = s.pageX - e.left, n = s.pageY - e.top;
        return pn(t, { chartX: Math.round(r /= e.scaleX), chartY: Math.round(n /= e.scaleY) });
      }
      onContainerClick(t) {
        let e = this.chart, i = e.hoverPoint, s = this.normalize(t), r = e.plotLeft, n = e.plotTop;
        !e.cancelClick && (i && this.inClass(s.target, "highcharts-tracker") ? (di(i.series, "click", pn(s, { point: i })), e.hoverPoint && i.firePointEvent("click", s)) : (pn(s, this.getCoordinates(s)), e.isInsidePlot(s.chartX - r, s.chartY - n, { visiblePlotOnly: !0 }) && di(e, "click", s)));
      }
      onContainerMouseDown(t) {
        var i;
        let e = (1 & (t.buttons || t.button)) == 1;
        t = this.normalize(t), _.isFirefox && t.button !== 0 && this.onContainerMouseMove(t), (t.button === void 0 || e) && (this.zoomOption(t), e && ((i = t.preventDefault) == null || i.call(t)), this.dragStart(t));
      }
      onContainerMouseLeave(t) {
        let { pointer: e } = dn[Ge(le.hoverChartIndex, -1)] || {};
        t = this.normalize(t), this.onContainerMouseMove(t), e && !this.inClass(t.relatedTarget, "highcharts-tooltip") && (e.reset(), e.chartPosition = void 0);
      }
      onContainerMouseEnter() {
        delete this.chartPosition;
      }
      onContainerMouseMove(t) {
        let e = this.chart, i = e.tooltip, s = this.normalize(t);
        this.setHoverChartIndex(t), (e.mouseIsDown === "mousedown" || this.touchSelect(s)) && this.drag(s), !e.openMenu && (this.inClass(s.target, "highcharts-tracker") || e.isInsidePlot(s.chartX - e.plotLeft, s.chartY - e.plotTop, { visiblePlotOnly: !0 })) && !(i && i.shouldStickOnContact(s)) && (this.inClass(s.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(s));
      }
      onDocumentTouchEnd(t) {
        this.onDocumentMouseUp(t);
      }
      onContainerTouchMove(t) {
        this.touchSelect(t) ? this.onContainerMouseMove(t) : this.touch(t);
      }
      onContainerTouchStart(t) {
        this.touchSelect(t) ? this.onContainerMouseDown(t) : (this.zoomOption(t), this.touch(t, !0));
      }
      onDocumentMouseMove(t) {
        let e = this.chart, i = e.tooltip, s = this.chartPosition, r = this.normalize(t, s);
        !s || e.isInsidePlot(r.chartX - e.plotLeft, r.chartY - e.plotTop, { visiblePlotOnly: !0 }) || i && i.shouldStickOnContact(r) || r.target !== e.container.ownerDocument && this.inClass(r.target, "highcharts-tracker") || this.reset();
      }
      onDocumentMouseUp(t) {
        var e, i;
        (i = (e = dn[Ge(le.hoverChartIndex, -1)]) == null ? void 0 : e.pointer) == null || i.drop(t);
      }
      pinch(t) {
        let e = this, { chart: i, hasZoom: s, lastTouches: r } = e, n = [].map.call(t.touches || [], (d) => e.normalize(d)), o = n.length, a = o === 1 && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick), h = i.tooltip, c = o === 1 && Ge(h == null ? void 0 : h.options.followTouchMove, !0);
        o > 1 ? e.initiated = !0 : c && (e.initiated = !1), s && e.initiated && !a && t.cancelable !== !1 && t.preventDefault(), t.type === "touchstart" ? (e.pinchDown = n, e.res = !0, i.mouseDownX = t.chartX) : c ? this.runPointActions(e.normalize(t)) : r && (di(i, "touchpan", { originalEvent: t, touches: n }, () => {
          let d = (p) => {
            let u = p[0], f = p[1] || u;
            return { x: u.chartX, y: u.chartY, width: f.chartX - u.chartX, height: f.chartY - u.chartY };
          };
          i.transform({ axes: i.axes.filter((p) => p.zoomEnabled && (this.zoomHor && p.horiz || this.zoomVert && !p.horiz)), to: d(n), from: d(r), trigger: t.type });
        }), e.res && (e.res = !1, this.reset(!1, 0))), e.lastTouches = n;
      }
      reset(t, e) {
        let i = this.chart, s = i.hoverSeries, r = i.hoverPoint, n = i.hoverPoints, o = i.tooltip, a = o && o.shared ? n : r;
        t && a && fa(a).forEach(function(h) {
          h.series.isCartesian && h.plotX === void 0 && (t = !1);
        }), t ? o && a && fa(a).length && (o.refresh(a), o.shared && n ? n.forEach(function(h) {
          h.setState(h.state, !0), h.series.isCartesian && (h.series.xAxis.crosshair && h.series.xAxis.drawCrosshair(null, h), h.series.yAxis.crosshair && h.series.yAxis.drawCrosshair(null, h));
        }) : r && (r.setState(r.state, !0), i.axes.forEach(function(h) {
          h.crosshair && r.series[h.coll] === h && h.drawCrosshair(null, r);
        }))) : (r && r.onMouseOut(), n && n.forEach(function(h) {
          h.setState();
        }), s && s.onMouseOut(), o && o.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i.axes.forEach(function(h) {
          h.hideCrosshair();
        }), i.hoverPoints = i.hoverPoint = void 0);
      }
      runPointActions(t, e, i) {
        let s = this.chart, r = s.series, n = s.tooltip && s.tooltip.options.enabled ? s.tooltip : void 0, o = !!n && n.shared, a = e || s.hoverPoint, h = a && a.series || s.hoverSeries, c = (!t || t.type !== "touchmove") && (!!e || h && h.directTouch && this.isDirectTouch), d = this.getHoverData(a, h, r, c, o, t);
        a = d.hoverPoint, h = d.hoverSeries;
        let p = d.hoverPoints, u = h && h.tooltipOptions.followPointer && !h.tooltipOptions.split, f = o && h && !h.noSharedTooltip;
        if (a && (i || a !== s.hoverPoint || n && n.isHidden)) {
          if ((s.hoverPoints || []).forEach(function(m) {
            p.indexOf(m) === -1 && m.setState();
          }), s.hoverSeries !== h && h.onMouseOver(), this.applyInactiveState(p), (p || []).forEach(function(m) {
            m.setState("hover");
          }), s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"), !a.series) return;
          s.hoverPoints = p, s.hoverPoint = a, a.firePointEvent("mouseOver", void 0, () => {
            n && a && n.refresh(f ? p : a, t);
          });
        } else if (u && n && !n.isHidden) {
          let m = n.getAnchor([{}], t);
          s.isInsidePlot(m[0], m[1], { visiblePlotOnly: !0 }) && n.updatePosition({ plotX: m[0], plotY: m[1] });
        }
        this.unDocMouseMove || (this.unDocMouseMove = Re(s.container.ownerDocument, "mousemove", (m) => {
          var x, g;
          return (g = (x = dn[le.hoverChartIndex ?? -1]) == null ? void 0 : x.pointer) == null ? void 0 : g.onDocumentMouseMove(m);
        }), this.eventsToUnbind.push(this.unDocMouseMove)), s.axes.forEach(function(m) {
          let x, g = Ge((m.crosshair || {}).snap, !0);
          !g || (x = s.hoverPoint) && x.series[m.coll] === m || (x = ua(p, (b) => b.series && b.series[m.coll] === m)), x || !g ? m.drawCrosshair(t, x) : m.hideCrosshair();
        });
      }
      setDOMEvents() {
        let t = this.chart.container, e = t.ownerDocument;
        t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(Re(t, "mouseenter", this.onContainerMouseEnter.bind(this)), Re(t, "mouseleave", this.onContainerMouseLeave.bind(this))), le.unbindDocumentMouseUp.some((s) => s.doc === e) || le.unbindDocumentMouseUp.push({ doc: e, unbind: Re(e, "mouseup", this.onDocumentMouseUp.bind(this)) });
        let i = this.chart.renderTo.parentElement;
        for (; i && i.tagName !== "BODY"; ) this.eventsToUnbind.push(Re(i, "scroll", () => {
          delete this.chartPosition;
        })), i = i.parentElement;
        this.eventsToUnbind.push(Re(t, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }), Re(t, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), le.unbindDocumentTouchEnd || (le.unbindDocumentTouchEnd = Re(e, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })), this.setPointerCapture(), Re(this.chart, "redraw", this.setPointerCapture.bind(this));
      }
      setPointerCapture() {
        var r, n;
        if (!Ic) return;
        let t = this.pointerCaptureEventsToUnbind, e = this.chart, i = e.container, s = Ge((r = e.options.tooltip) == null ? void 0 : r.followTouchMove, !0) && e.series.some((o) => o.options.findNearestPointBy.indexOf("y") > -1);
        !this.hasPointerCapture && s ? (t.push(Re(i, "pointerdown", (o) => {
          var a, h;
          (a = o.target) != null && a.hasPointerCapture(o.pointerId) && ((h = o.target) == null || h.releasePointerCapture(o.pointerId));
        }), Re(i, "pointermove", (o) => {
          var a, h;
          (h = (a = e.pointer) == null ? void 0 : a.getPointFromEvent(o)) == null || h.onMouseOver(o);
        })), e.styledMode || cn(i, { "touch-action": "none" }), i.className += " highcharts-no-touch-action", this.hasPointerCapture = !0) : this.hasPointerCapture && !s && (t.forEach((o) => o()), t.length = 0, e.styledMode || cn(i, { "touch-action": Ge((n = e.options.chart.style) == null ? void 0 : n["touch-action"], "manipulation") }), i.className = i.className.replace(" highcharts-no-touch-action", ""), this.hasPointerCapture = !1);
      }
      setHoverChartIndex(t) {
        var s;
        let e = this.chart, i = _.charts[Ge(le.hoverChartIndex, -1)];
        if (i && i !== e) {
          let r = { relatedTarget: e.container };
          t && !(t != null && t.relatedTarget) && (t = { ...r, ...t }), (s = i.pointer) == null || s.onContainerMouseLeave(t || r);
        }
        i && i.mouseIsDown || (le.hoverChartIndex = e.index);
      }
      touch(t, e) {
        let i, { chart: s, pinchDown: r = [] } = this;
        this.setHoverChartIndex(), (t = this.normalize(t)).touches.length === 1 ? s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, { visiblePlotOnly: !0 }) && !s.openMenu ? (e && this.runPointActions(t), t.type === "touchmove" && (i = !!r[0] && Math.pow(r[0].chartX - t.chartX, 2) + Math.pow(r[0].chartY - t.chartY, 2) >= 16), Ge(i, !0) && this.pinch(t)) : e && this.reset() : t.touches.length === 2 && this.pinch(t);
      }
      touchSelect(t) {
        return !!(this.chart.zooming.singleTouch && t.touches && t.touches.length === 1);
      }
      zoomOption(t) {
        let e = this.chart, i = e.inverted, s = e.zooming.type || "", r, n;
        /touch/.test(t.type) && (s = Ge(e.zooming.pinchType, s)), this.zoomX = r = /x/.test(s), this.zoomY = n = /y/.test(s), this.zoomHor = r && !i || n && i, this.zoomVert = n && !i || r && i, this.hasZoom = r || n;
      }
    }
    le.unbindDocumentMouseUp = [], function(l) {
      l.compose = function(t) {
        Nc(_c, "Core.Pointer") && Re(t, "beforeRender", function() {
          this.pointer = new l(this, this.options);
        });
      };
    }(le || (le = {}));
    let ga = le, { fireEvent: ma, isArray: zc, objectEach: Ks, uniqueKey: Zs } = U, Js = class {
      constructor(l = {}) {
        this.autoId = !l.id, this.columns = {}, this.id = l.id || Zs(), this.modified = this, this.rowCount = 0, this.versionTag = Zs();
        let t = 0;
        Ks(l.columns || {}, (e, i) => {
          this.columns[i] = e.slice(), t = Math.max(t, e.length);
        }), this.applyRowCount(t);
      }
      applyRowCount(l) {
        this.rowCount = l, Ks(this.columns, (t) => {
          zc(t) && (t.length = l);
        });
      }
      getColumn(l, t) {
        return this.columns[l];
      }
      getColumns(l, t) {
        return (l || Object.keys(this.columns)).reduce((e, i) => (e[i] = this.columns[i], e), {});
      }
      getRow(l, t) {
        return (t || Object.keys(this.columns)).map((e) => {
          var i;
          return (i = this.columns[e]) == null ? void 0 : i[l];
        });
      }
      setColumn(l, t = [], e = 0, i) {
        this.setColumns({ [l]: t }, e, i);
      }
      setColumns(l, t, e) {
        let i = this.rowCount;
        Ks(l, (s, r) => {
          this.columns[r] = s.slice(), i = s.length;
        }), this.applyRowCount(i), e != null && e.silent || (ma(this, "afterSetColumns"), this.versionTag = Zs());
      }
      setRow(l, t = this.rowCount, e, i) {
        let { columns: s } = this, r = e ? this.rowCount + 1 : t + 1;
        Ks(l, (n, o) => {
          let a = s[o] || (i == null ? void 0 : i.addColumns) !== !1 && Array(r);
          a && (e ? a.splice(t, 0, n) : a[t] = n, s[o] = a);
        }), r > this.rowCount && this.applyRowCount(r), i != null && i.silent || (ma(this, "afterSetRows"), this.versionTag = Zs());
      }
    }, { extend: Wc, merge: Fc, pick: xa } = U;
    (function(l) {
      function t(e, i, s) {
        var M, C;
        let r = this.legendItem = this.legendItem || {}, { chart: n, options: o } = this, { baseline: a = 0, symbolWidth: h, symbolHeight: c } = e, d = this.symbol || "circle", p = c / 2, u = n.renderer, f = r.group, m = a - Math.round((((M = e.fontMetrics) == null ? void 0 : M.b) || c) * (s ? 0.4 : 0.3)), x = {}, g, b = o.marker, v = 0;
        if (n.styledMode || (x["stroke-width"] = Math.min(o.lineWidth || 0, 24), o.dashStyle ? x.dashstyle = o.dashStyle : o.linecap === "square" || (x["stroke-linecap"] = "round")), r.line = u.path().addClass("highcharts-graph").attr(x).add(f), s && (r.area = u.path().addClass("highcharts-area").add(f)), x["stroke-linecap"] && (v = Math.min(r.line.strokeWidth(), h) / 2), h) {
          let S = [["M", v, m], ["L", h - v, m]];
          r.line.attr({ d: S }), (C = r.area) == null || C.attr({ d: [...S, ["L", h - v, a], ["L", v, a]] });
        }
        if (b && b.enabled !== !1 && h) {
          let S = Math.min(xa(b.radius, p), p);
          d.indexOf("url") === 0 && (b = Fc(b, { width: c, height: c }), S = 0), r.symbol = g = u.symbol(d, h / 2 - S, m - S, 2 * S, 2 * S, Wc({ context: "legend" }, b)).addClass("highcharts-point").add(f), g.isMarker = !0;
        }
      }
      l.areaMarker = function(e, i) {
        t.call(this, e, i, !0);
      }, l.lineMarker = t, l.rectangle = function(e, i) {
        let s = i.legendItem || {}, r = e.options, n = e.symbolHeight, o = r.squareSymbol, a = o ? n : e.symbolWidth;
        s.symbol = this.chart.renderer.rect(o ? (e.symbolWidth - n) / 2 : 0, e.baseline - n + 1, a, n, xa(e.options.symbolRadius, n / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(s.group);
      };
    })(q || (q = {}));
    let ya = q, { defaultOptions: va } = ke, { extend: Hc, extendClass: Xc, merge: Yc } = U;
    (function(l) {
      function t(e, i) {
        let s = va.plotOptions || {}, r = i.defaultOptions, n = i.prototype;
        return n.type = e, n.pointClass || (n.pointClass = hi), !l.seriesTypes[e] && (r && (s[e] = r), l.seriesTypes[e] = i, !0);
      }
      l.seriesTypes = _.seriesTypes, l.registerSeriesType = t, l.seriesType = function(e, i, s, r, n) {
        let o = va.plotOptions || {};
        if (i = i || "", o[e] = Yc(o[i], s), delete l.seriesTypes[e], t(e, Xc(l.seriesTypes[i] || function() {
        }, r)), l.seriesTypes[e].prototype.type = e, n) {
          class a extends hi {
          }
          Hc(a.prototype, n), l.seriesTypes[e].prototype.pointClass = a;
        }
        return l.seriesTypes[e];
      };
    })(et || (et = {}));
    let Vt = et, { animObject: ba, setAnimation: Gc } = fe, { defaultOptions: Qs } = ke, { registerEventOptions: jc } = Ns, { svg: Uc, win: Vc } = _, { seriesTypes: zi } = Vt, { arrayMax: un, arrayMin: ka, clamp: wa, correctFloat: Ma, crisp: qc, defined: he, destroyObjectProperties: $c, diffObjects: Kc, erase: Sa, error: tr, extend: Wi, find: Zc, fireEvent: Ht, getClosestDistance: Jc, getNestedProperty: Ca, insertItem: Ta, isArray: Aa, isNumber: pe, isString: Qc, merge: Fi, objectEach: fn, pick: Xt, removeEvent: tp, syncTimeout: Pa } = U;
    class Hi {
      constructor() {
        this.zoneAxis = "y";
      }
      init(t, e) {
        let i;
        Ht(this, "init", { options: e }), this.dataTable ?? (this.dataTable = new Js());
        let s = t.series;
        this.eventsToUnbind = [], this.chart = t, this.options = this.setOptions(e);
        let r = this.options, n = r.visible !== !1;
        this.linkedSeries = [], this.bindAxes(), Wi(this, { name: r.name, state: "", visible: n, selected: r.selected === !0 }), jc(this, r);
        let o = r.events;
        (o && o.click || r.point && r.point.events && r.point.events.click || r.allowPointSelect) && (t.runTrackerClick = !0), this.getColor(), this.getSymbol(), this.isCartesian && (t.hasCartesianSeries = !0), s.length && (i = s[s.length - 1]), this._i = Xt(i && i._i, -1) + 1, this.opacity = this.options.opacity, t.orderItems("series", Ta(this, s)), r.dataSorting && r.dataSorting.enabled ? this.setDataSortingOptions() : this.points || this.data || this.setData(r.data, !1), Ht(this, "afterInit");
      }
      is(t) {
        return zi[t] && this instanceof zi[t];
      }
      bindAxes() {
        let t, e = this, i = e.options, s = e.chart;
        Ht(this, "bindAxes", null, function() {
          (e.axisTypes || []).forEach(function(r) {
            (s[r] || []).forEach(function(n) {
              t = n.options, (Xt(i[r], 0) === n.index || i[r] !== void 0 && i[r] === t.id) && (Ta(e, n.series), e[r] = n, n.isDirty = !0);
            }), e[r] || e.optionalAxis === r || tr(18, !0, s);
          });
        }), Ht(this, "afterBindAxes");
      }
      hasData() {
        return this.visible && this.dataMax !== void 0 && this.dataMin !== void 0 || this.visible && this.dataTable.rowCount > 0;
      }
      hasMarkerChanged(t, e) {
        let i = t.marker, s = e.marker || {};
        return i && (s.enabled && !i.enabled || s.symbol !== i.symbol || s.height !== i.height || s.width !== i.width);
      }
      autoIncrement(t) {
        let e, i = this.options, { pointIntervalUnit: s, relativeXValue: r } = this.options, n = this.chart.time, o = this.xIncrement ?? n.parse(i.pointStart) ?? 0;
        if (this.pointInterval = e = Xt(this.pointInterval, i.pointInterval, 1), r && pe(t) && (e *= t), s) {
          let a = n.toParts(o);
          s === "day" ? a[2] += e : s === "month" ? a[1] += e : s === "year" && (a[0] += e), e = n.makeTime.apply(n, a) - o;
        }
        return r && pe(t) ? o + e : (this.xIncrement = o + e, o);
      }
      setDataSortingOptions() {
        let t = this.options;
        Wi(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }), he(t.pointRange) || (t.pointRange = 1);
      }
      setOptions(t) {
        var x, g;
        let e, i = this.chart, s = i.options.plotOptions, r = i.userOptions || {}, n = Fi(t), o = i.styledMode, a = { plotOptions: s, userOptions: n };
        Ht(this, "setOptions", a);
        let h = a.plotOptions[this.type], c = r.plotOptions || {}, d = c.series || {}, p = Qs.plotOptions[this.type] || {}, u = c[this.type] || {};
        this.userOptions = a.userOptions;
        let f = Fi(h, s.series, u, n);
        this.tooltipOptions = Fi(Qs.tooltip, (x = Qs.plotOptions.series) == null ? void 0 : x.tooltip, p == null ? void 0 : p.tooltip, i.userOptions.tooltip, (g = c.series) == null ? void 0 : g.tooltip, u.tooltip, n.tooltip), this.stickyTracking = Xt(n.stickyTracking, u.stickyTracking, d.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || f.stickyTracking), h.marker === null && delete f.marker, this.zoneAxis = f.zoneAxis || "y";
        let m = this.zones = (f.zones || []).map((b) => ({ ...b }));
        return (f.negativeColor || f.negativeFillColor) && !f.zones && (e = { value: f[this.zoneAxis + "Threshold"] || f.threshold || 0, className: "highcharts-negative" }, o || (e.color = f.negativeColor, e.fillColor = f.negativeFillColor), m.push(e)), m.length && he(m[m.length - 1].value) && m.push(o ? {} : { color: this.color, fillColor: this.fillColor }), Ht(this, "afterSetOptions", { options: f }), f;
      }
      getName() {
        return Xt(this.options.name, "Series " + (this.index + 1));
      }
      getCyclic(t, e, i) {
        let s, r, n = this.chart, o = `${t}Index`, a = `${t}Counter`, h = (i == null ? void 0 : i.length) || n.options.chart.colorCount;
        !e && (he(r = Xt(t === "color" ? this.options.colorIndex : void 0, this[o])) ? s = r : (n.series.length || (n[a] = 0), s = n[a] % h, n[a] += 1), i && (e = i[s])), s !== void 0 && (this[o] = s), this[t] = e;
      }
      getColor() {
        this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || Qs.plotOptions[this.type].color, this.chart.options.colors);
      }
      getPointsCollection() {
        return (this.hasGroupedData ? this.points : this.data) || [];
      }
      getSymbol() {
        let t = this.options.marker;
        this.getCyclic("symbol", t.symbol, this.chart.options.symbols);
      }
      getColumn(t, e) {
        return (e ? this.dataTable.modified : this.dataTable).getColumn(t, !0) || [];
      }
      findPointIndex(t, e) {
        let i, s, r, n = t.id, o = t.x, a = this.points, h = this.options.dataSorting;
        if (n) {
          let c = this.chart.get(n);
          c instanceof hi && (i = c);
        } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
          let c = (d) => !d.touched && d.index === t.index;
          if (h && h.matchByName ? c = (d) => !d.touched && d.name === t.name : this.options.relativeXValue && (c = (d) => !d.touched && d.options.x === t.x), !(i = Zc(a, c))) return;
        }
        return i && (r = i && i.index) !== void 0 && (s = !0), r === void 0 && pe(o) && (r = this.getColumn("x").indexOf(o, e)), r !== -1 && r !== void 0 && this.cropped && (r = r >= this.cropStart ? r - this.cropStart : r), !s && pe(r) && a[r] && a[r].touched && (r = void 0), r;
      }
      updateData(t, e) {
        let i = this.options, s = i.dataSorting, r = this.points, n = [], o = this.requireSorting, a = t.length === r.length, h, c, d, p, u = !0;
        if (this.xIncrement = null, t.forEach(function(m, x) {
          let g, b = he(m) && this.pointClass.prototype.optionsToObject.call({ series: this }, m) || {}, v = b.x;
          b.id || pe(v) ? ((g = this.findPointIndex(b, p)) === -1 || g === void 0 ? n.push(m) : r[g] && m !== i.data[g] ? (r[g].update(m, !1, null, !1), r[g].touched = !0, o && (p = g + 1)) : r[g] && (r[g].touched = !0), (!a || x !== g || s && s.enabled || this.hasDerivedData) && (h = !0)) : n.push(m);
        }, this), h) for (c = r.length; c--; ) (d = r[c]) && !d.touched && d.remove && d.remove(!1, e);
        else !a || s && s.enabled ? u = !1 : (t.forEach(function(m, x) {
          m === r[x].y || r[x].destroyed || r[x].update(m, !1, null, !1);
        }), n.length = 0);
        if (r.forEach(function(m) {
          m && (m.touched = !1);
        }), !u) return !1;
        n.forEach(function(m) {
          this.addPoint(m, !1, null, null, !1);
        }, this);
        let f = this.getColumn("x");
        return this.xIncrement === null && f.length && (this.xIncrement = un(f), this.autoIncrement()), !0;
      }
      dataColumnKeys() {
        return ["x", ...this.pointArrayMap || ["y"]];
      }
      setData(t, e = !0, i, s) {
        var A, T;
        let r = this.points, n = r && r.length || 0, o = this.options, a = this.chart, h = o.dataSorting, c = this.xAxis, d = o.turboThreshold, p = this.dataTable, u = this.dataColumnKeys(), f = this.pointValKey || "y", m = (this.pointArrayMap || []).length, x = o.keys, g, b, v = 0, M = 1, C;
        a.options.chart.allowMutatingData || (o.data && delete this.options.data, this.userOptions.data && delete this.userOptions.data, C = Fi(!0, t));
        let S = (t = C || t || []).length;
        if (h && h.enabled && (t = this.sortData(t)), a.options.chart.allowMutatingData && s !== !1 && S && n && !this.cropped && !this.hasGroupedData && this.visible && !this.boosted && (b = this.updateData(t, i)), !b) {
          this.xIncrement = null, this.colorCounter = 0;
          let L = d && S > d;
          if (L) {
            let B = this.getFirstValidPoint(t), W = this.getFirstValidPoint(t, S - 1, -1), G = (D) => !!(Aa(D) && (x || pe(D[0])));
            if (pe(B) && pe(W)) {
              let D = [], Y = [];
              for (let it of t) D.push(this.autoIncrement()), Y.push(it);
              p.setColumns({ x: D, [f]: Y });
            } else if (G(B) && G(W))
              if (m) {
                let D = B.length === m ? 1 : 0, Y = Array(u.length).fill(0).map(() => []);
                for (let it of t) {
                  D && Y[0].push(this.autoIncrement());
                  for (let pt = D; pt <= m; pt++) (A = Y[pt]) == null || A.push(it[pt - D]);
                }
                p.setColumns(u.reduce((it, pt, J) => (it[pt] = Y[J], it), {}));
              } else {
                x && (v = x.indexOf("x"), M = x.indexOf("y"), v = v >= 0 ? v : 0, M = M >= 0 ? M : 1), B.length === 1 && (M = 0);
                let D = [], Y = [];
                if (v === M) for (let it of t) D.push(this.autoIncrement()), Y.push(it[M]);
                else for (let it of t) D.push(it[v]), Y.push(it[M]);
                p.setColumns({ x: D, [f]: Y });
              }
            else L = !1;
          }
          if (!L) {
            let B = u.reduce((W, G) => (W[G] = [], W), {});
            for (g = 0; g < S; g++) {
              let W = this.pointClass.prototype.applyOptions.apply({ series: this }, [t[g]]);
              for (let G of u) B[G][g] = W[G];
            }
            p.setColumns(B);
          }
          for (Qc(this.getColumn("y")[0]) && tr(14, !0, a), this.data = [], this.options.data = this.userOptions.data = t, g = n; g--; ) (T = r[g]) == null || T.destroy();
          c && (c.minRange = c.userMinRange), this.isDirty = a.isDirtyBox = !0, this.isDirtyData = !!r, i = !1;
        }
        o.legendType === "point" && (this.processData(), this.generatePoints()), e && a.redraw(i);
      }
      sortData(t) {
        let e = this, i = e.options.dataSorting.sortKey || "y", s = function(r, n) {
          return he(n) && r.pointClass.prototype.optionsToObject.call({ series: r }, n) || {};
        };
        return t.forEach(function(r, n) {
          t[n] = s(e, r), t[n].index = n;
        }, this), t.concat().sort((r, n) => {
          let o = Ca(i, r), a = Ca(i, n);
          return a < o ? -1 : a > o ? 1 : 0;
        }).forEach(function(r, n) {
          r.x = n;
        }, this), e.linkedSeries && e.linkedSeries.forEach(function(r) {
          let n = r.options, o = n.data;
          n.dataSorting && n.dataSorting.enabled || !o || (o.forEach(function(a, h) {
            o[h] = s(r, a), t[h] && (o[h].x = t[h].x, o[h].index = h);
          }), r.setData(o, !1));
        }), t;
      }
      getProcessedData(t) {
        let e = this, { dataTable: i, isCartesian: s, options: r, xAxis: n } = e, o = r.cropThreshold, a = t || e.getExtremesFromAll, h = n == null ? void 0 : n.logarithmic, c = i.rowCount, d, p, u = 0, f, m, x, g = e.getColumn("x"), b = i, v = !1;
        return n && (m = (f = n.getExtremes()).min, x = f.max, v = !!(n.categories && !n.names.length), s && e.sorted && !a && (!o || c > o || e.forceCrop) && (g[c - 1] < m || g[0] > x ? b = new Js() : e.getColumn(e.pointValKey || "y").length && (g[0] < m || g[c - 1] > x) && (b = (d = this.cropData(i, m, x)).modified, u = d.start, p = !0))), g = b.getColumn("x") || [], { modified: b, cropped: p, cropStart: u, closestPointRange: Jc([h ? g.map(h.log2lin) : g], () => e.requireSorting && !v && tr(15, !1, e.chart)) };
      }
      processData(t) {
        let e = this.xAxis, i = this.dataTable;
        if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
        let s = this.getProcessedData();
        i.modified = s.modified, this.cropped = s.cropped, this.cropStart = s.cropStart, this.closestPointRange = this.basePointRange = s.closestPointRange, Ht(this, "afterProcessData");
      }
      cropData(t, e, i) {
        let s = t.getColumn("x", !0) || [], r = s.length, n = {}, o, a, h = 0, c = r;
        for (o = 0; o < r; o++) if (s[o] >= e) {
          h = Math.max(0, o - 1);
          break;
        }
        for (a = o; a < r; a++) if (s[a] > i) {
          c = a + 1;
          break;
        }
        for (let d of this.dataColumnKeys()) {
          let p = t.getColumn(d, !0);
          p && (n[d] = p.slice(h, c));
        }
        return { modified: new Js({ columns: n }), start: h, end: c };
      }
      generatePoints() {
        var C, S;
        let t = this.options, e = this.processedData || t.data, i = this.dataTable.modified, s = this.getColumn("x", !0), r = this.pointClass, n = i.rowCount, o = this.cropStart || 0, a = this.hasGroupedData, h = t.keys, c = [], d = t.dataGrouping && t.dataGrouping.groupAll ? o : 0, p = (C = this.xAxis) == null ? void 0 : C.categories, u = this.pointArrayMap || ["y"], f = this.dataColumnKeys(), m, x, g, b, v = this.data, M;
        if (!v && !a) {
          let A = [];
          A.length = (e == null ? void 0 : e.length) || 0, v = this.data = A;
        }
        for (h && a && (this.options.keys = !1), b = 0; b < n; b++) x = o + b, a ? ((g = new r(this, i.getRow(b, f) || [])).dataGroup = this.groupMap[d + b], (S = g.dataGroup) != null && S.options && (g.options = g.dataGroup.options, Wi(g, g.dataGroup.options), delete g.dataLabels)) : (g = v[x], M = e ? e[x] : i.getRow(b, u), g || M === void 0 || (v[x] = g = new r(this, M, s[b]))), g && (g.index = a ? d + b : x, c[b] = g, g.category = (p == null ? void 0 : p[g.x]) ?? g.x, g.key = g.name ?? g.category);
        if (this.options.keys = h, v && (n !== (m = v.length) || a)) for (b = 0; b < m; b++) b !== o || a || (b += n), v[b] && (v[b].destroyElements(), v[b].plotX = void 0);
        this.data = v, this.points = c, Ht(this, "afterGeneratePoints");
      }
      getXExtremes(t) {
        return { min: ka(t), max: un(t) };
      }
      getExtremes(t, e) {
        var C;
        let { xAxis: i, yAxis: s } = this, r = e || this.getExtremesFromAll || this.options.getExtremesFromAll, n = r && this.cropped ? this.dataTable : this.dataTable.modified, o = n.rowCount, a = t || this.stackedYData, h = a ? [a] : ((C = this.keysAffectYAxis || this.pointArrayMap || ["y"]) == null ? void 0 : C.map((S) => n.getColumn(S, !0) || [])) || [], c = this.getColumn("x", !0), d = [], p = this.requireSorting && !this.is("column") ? 1 : 0, u = !!s && s.positiveValuesOnly, f = r || this.cropped || !i, m, x, g, b = 0, v = 0;
        for (i && (b = (m = i.getExtremes()).min, v = m.max), g = 0; g < o; g++) if (x = c[g], f || (c[g + p] || x) >= b && (c[g - p] || x) <= v) for (let S of h) {
          let A = S[g];
          pe(A) && (A > 0 || !u) && d.push(A);
        }
        let M = { activeYData: d, dataMin: ka(d), dataMax: un(d) };
        return Ht(this, "afterGetExtremes", { dataExtremes: M }), M;
      }
      applyExtremes() {
        let t = this.getExtremes();
        return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t;
      }
      getFirstValidPoint(t, e = 0, i = 1) {
        let s = t.length, r = e;
        for (; r >= 0 && r < s; ) {
          if (he(t[r])) return t[r];
          r += i;
        }
      }
      translate() {
        var b;
        this.generatePoints();
        let t = this.options, e = t.stacking, i = this.xAxis, s = this.enabledDataSorting, r = this.yAxis, n = this.points, o = n.length, a = this.pointPlacementToXValue(), h = !!a, c = t.threshold, d = t.startFromThreshold ? c : 0, p, u, f, m, x = Number.MAX_VALUE;
        function g(v) {
          return wa(v, -1e9, 1e9);
        }
        for (p = 0; p < o; p++) {
          let v, M = n[p], C = M.x, S, A, T = M.y, L = M.low, B = e && ((b = r.stacking) == null ? void 0 : b.stacks[(this.negStacks && T < (d ? 0 : c) ? "-" : "") + this.stackKey]);
          u = i.translate(C, !1, !1, !1, !0, a), M.plotX = pe(u) ? Ma(g(u)) : void 0, e && this.visible && B && B[C] && (m = this.getStackIndicator(m, C, this.index), !M.isNull && m.key && (A = (S = B[C]).points[m.key]), S && Aa(A) && (L = A[0], T = A[1], L === d && m.key === B[C].base && (L = Xt(pe(c) ? c : r.min)), r.positiveValuesOnly && he(L) && L <= 0 && (L = void 0), M.total = M.stackTotal = Xt(S.total), M.percentage = he(M.y) && S.total ? M.y / S.total * 100 : void 0, M.stackY = T, this.irregularWidths || S.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), M.yBottom = he(L) ? g(r.translate(L, !1, !0, !1, !0)) : void 0, this.dataModify && (T = this.dataModify.modifyValue(T, p)), pe(T) && M.plotX !== void 0 && (v = pe(v = r.translate(T, !1, !0, !1, !0)) ? g(v) : void 0), M.plotY = v, M.isInside = this.isPointInside(M), M.clientX = h ? Ma(i.translate(C, !1, !1, !1, !0, a)) : u, M.negative = (M.y || 0) < (c || 0), M.isNull || M.visible === !1 || (f !== void 0 && (x = Math.min(x, Math.abs(u - f))), f = u), M.zone = this.zones.length ? M.getZone() : void 0, !M.graphic && this.group && s && (M.isNew = !0);
        }
        this.closestPointRangePx = x, Ht(this, "afterTranslate");
      }
      getValidPoints(t, e, i) {
        let s = this.chart;
        return (t || this.points || []).filter(function(r) {
          let { plotX: n, plotY: o } = r;
          return !!((i || !r.isNull && pe(o)) && (!e || s.isInsidePlot(n, o, { inverted: s.inverted }))) && r.visible !== !1;
        });
      }
      getClipBox() {
        let { chart: t, xAxis: e, yAxis: i } = this, { x: s, y: r, width: n, height: o } = Fi(t.clipBox);
        return e && e.len !== t.plotSizeX && (n = e.len), i && i.len !== t.plotSizeY && (o = i.len), t.inverted && !this.invertible && ([n, o] = [o, n]), { x: s, y: r, width: n, height: o };
      }
      getSharedClipKey() {
        return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
      }
      setClip() {
        let { chart: t, group: e, markerGroup: i } = this, s = t.sharedClips, r = t.renderer, n = this.getClipBox(), o = this.getSharedClipKey(), a = s[o];
        a ? a.animate(n) : s[o] = a = r.clipRect(n), e && e.clip(this.options.clip === !1 ? void 0 : a), i && i.clip();
      }
      animate(t) {
        let { chart: e, group: i, markerGroup: s } = this, r = e.inverted, n = ba(this.options.animation), o = [this.getSharedClipKey(), n.duration, n.easing, n.defer].join(","), a = e.sharedClips[o], h = e.sharedClips[o + "m"];
        if (t && i) {
          let c = this.getClipBox();
          if (a) a.attr("height", c.height);
          else {
            c.width = 0, r && (c.x = e.plotHeight), a = e.renderer.clipRect(c), e.sharedClips[o] = a;
            let d = { x: -99, y: -99, width: r ? e.plotWidth + 199 : 99, height: r ? 99 : e.plotHeight + 199 };
            h = e.renderer.clipRect(d), e.sharedClips[o + "m"] = h;
          }
          i.clip(a), s == null || s.clip(h);
        } else if (a && !a.hasClass("highcharts-animating")) {
          let c = this.getClipBox(), d = n.step;
          (s != null && s.element.childNodes.length || e.series.length > 1) && (n.step = function(p, u) {
            d && d.apply(u, arguments), u.prop === "width" && (h != null && h.element) && h.attr(r ? "height" : "width", p + 99);
          }), a.addClass("highcharts-animating").animate(c, n);
        }
      }
      afterAnimate() {
        this.setClip(), fn(this.chart.sharedClips, (t, e, i) => {
          t && !this.chart.container.querySelector(`[clip-path="url(#${t.id})"]`) && (t.destroy(), delete i[e]);
        }), this.finishedAnimating = !0, Ht(this, "afterAnimate");
      }
      drawPoints(t = this.points) {
        let e, i, s, r, n, o, a, h = this.chart, c = h.styledMode, { colorAxis: d, options: p } = this, u = p.marker, f = this[this.specialGroup || "markerGroup"], m = this.xAxis, x = Xt(u.enabled, !m || !!m.isRadial || null, this.closestPointRangePx >= u.enabledThreshold * u.radius);
        if (u.enabled !== !1 || this._hasPointMarkers) for (e = 0; e < t.length; e++) if (r = (s = (i = t[e]).graphic) ? "animate" : "attr", n = i.marker || {}, o = !!i.marker, (x && n.enabled === void 0 || n.enabled) && !i.isNull && i.visible !== !1) {
          let g = Xt(n.symbol, this.symbol, "rect");
          a = this.markerAttribs(i, i.selected && "select"), this.enabledDataSorting && (i.startXPos = m.reversed ? -(a.width || 0) : m.width);
          let b = i.isInside !== !1;
          if (!s && b && ((a.width || 0) > 0 || i.hasImage) && (i.graphic = s = h.renderer.symbol(g, a.x, a.y, a.width, a.height, o ? n : u).add(f), this.enabledDataSorting && h.hasRendered && (s.attr({ x: i.startXPos }), r = "animate")), s && r === "animate" && s[b ? "show" : "hide"](b).animate(a), s) {
            let v = this.pointAttribs(i, c || !i.selected ? void 0 : "select");
            c ? d && s.css({ fill: v.fill }) : s[r](v);
          }
          s && s.addClass(i.getClassName(), !0);
        } else s && (i.graphic = s.destroy());
      }
      markerAttribs(t, e) {
        let i = this.options, s = i.marker, r = t.marker || {}, n = r.symbol || s.symbol, o = {}, a, h, c = Xt(r.radius, s && s.radius);
        e && (a = s.states[e], c = Xt((h = r.states && r.states[e]) && h.radius, a && a.radius, c && c + (a && a.radiusPlus || 0))), t.hasImage = n && n.indexOf("url") === 0, t.hasImage && (c = 0);
        let d = t.pos();
        return pe(c) && d && (i.crisp && (d[0] = qc(d[0], t.hasImage ? 0 : n === "rect" ? (s == null ? void 0 : s.lineWidth) || 0 : 1)), o.x = d[0] - c, o.y = d[1] - c), c && (o.width = o.height = 2 * c), o;
      }
      pointAttribs(t, e) {
        let i = this.options.marker, s = t && t.options, r = s && s.marker || {}, n = s && s.color, o = t && t.color, a = t && t.zone && t.zone.color, h, c, d = this.color, p, u, f = Xt(r.lineWidth, i.lineWidth), m = 1;
        return d = n || a || o || d, p = r.fillColor || i.fillColor || d, u = r.lineColor || i.lineColor || d, e = e || "normal", h = i.states[e] || {}, f = Xt((c = r.states && r.states[e] || {}).lineWidth, h.lineWidth, f + Xt(c.lineWidthPlus, h.lineWidthPlus, 0)), p = c.fillColor || h.fillColor || p, { stroke: u = c.lineColor || h.lineColor || u, "stroke-width": f, fill: p, opacity: m = Xt(c.opacity, h.opacity, m) };
      }
      destroy(t) {
        let e, i, s, r = this, n = r.chart, o = /AppleWebKit\/533/.test(Vc.navigator.userAgent), a = r.data || [];
        for (Ht(r, "destroy", { keepEventsForUpdate: t }), this.removeEvents(t), (r.axisTypes || []).forEach(function(h) {
          (s = r[h]) && s.series && (Sa(s.series, r), s.isDirty = s.forceRedraw = !0);
        }), r.legendItem && r.chart.legend.destroyItem(r), e = a.length; e--; ) (i = a[e]) && i.destroy && i.destroy();
        for (let h of r.zones) $c(h, void 0, !0);
        U.clearTimeout(r.animationTimeout), fn(r, function(h, c) {
          h instanceof Je && !h.survive && h[o && c === "group" ? "hide" : "destroy"]();
        }), n.hoverSeries === r && (n.hoverSeries = void 0), Sa(n.series, r), n.orderItems("series"), fn(r, function(h, c) {
          t && c === "hcEvents" || delete r[c];
        });
      }
      applyZones() {
        let { area: t, chart: e, graph: i, zones: s, points: r, xAxis: n, yAxis: o, zoneAxis: a } = this, { inverted: h, renderer: c } = e, d = this[`${a}Axis`], { isXAxis: p, len: u = 0, minPointOffset: f = 0 } = d || {}, m = ((i == null ? void 0 : i.strokeWidth()) || 0) / 2 + 1, x = (g, b = 0, v = 0) => {
          h && (v = u - v);
          let { translated: M = 0, lineClip: C } = g, S = v - M;
          C == null || C.push(["L", b, Math.abs(S) < m ? v - m * (S <= 0 ? -1 : 1) : M]);
        };
        if (s.length && (i || t) && d && pe(d.min)) {
          let g = d.getExtremes().max + f, b = (C) => {
            C.forEach((S, A) => {
              (S[0] === "M" || S[0] === "L") && (C[A] = [S[0], p ? u - S[1] : S[1], p ? S[2] : u - S[2]]);
            });
          };
          if (s.forEach((C) => {
            C.lineClip = [], C.translated = wa(d.toPixels(Xt(C.value, g), !0) || 0, 0, u);
          }), i && !this.showLine && i.hide(), t && t.hide(), a === "y" && r.length < n.len) for (let C of r) {
            let { plotX: S, plotY: A, zone: T } = C, L = T && s[s.indexOf(T) - 1];
            T && x(T, S, A), L && x(L, S, A);
          }
          let v = [], M = d.toPixels(d.getExtremes().min - f, !0);
          s.forEach((C) => {
            var pt, J;
            let S = C.lineClip || [], A = Math.round(C.translated || 0);
            n.reversed && S.reverse();
            let { clip: T, simpleClip: L } = C, B = 0, W = 0, G = n.len, D = o.len;
            p ? (B = A, G = M) : (W = A, D = M);
            let Y = [["M", B, W], ["L", G, W], ["L", G, D], ["L", B, D], ["Z"]], it = [Y[0], ...S, Y[1], Y[2], ...v, Y[3], Y[4]];
            v = S.reverse(), M = A, h && (b(it), t && b(Y)), T ? (T.animate({ d: it }), L == null || L.animate({ d: Y })) : (T = C.clip = c.path(it), t && (L = C.simpleClip = c.path(Y))), i && ((pt = C.graph) == null || pt.clip(T)), t && ((J = C.area) == null || J.clip(L));
          });
        } else this.visible && (i && i.show(), t && t.show());
      }
      plotGroup(t, e, i, s, r) {
        let n = this[t], o = !n, a = { visibility: i, zIndex: s || 0.1 };
        return he(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && (a.opacity = this.opacity), n || (this[t] = n = this.chart.renderer.g().add(r)), n.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (he(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (n.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), n.attr(a)[o ? "attr" : "animate"](this.getPlotBox(e)), n;
      }
      getPlotBox(t) {
        let e = this.xAxis, i = this.yAxis, s = this.chart, r = s.inverted && !s.polar && e && this.invertible && t === "series";
        return s.inverted && (e = i, i = this.xAxis), { translateX: e ? e.left : s.plotLeft, translateY: i ? i.top : s.plotTop, rotation: r ? 90 : 0, rotationOriginX: r ? (e.len - i.len) / 2 : 0, rotationOriginY: r ? (e.len + i.len) / 2 : 0, scaleX: r ? -1 : 1, scaleY: 1 };
      }
      removeEvents(t) {
        let { eventsToUnbind: e } = this;
        t || tp(this), e.length && (e.forEach((i) => {
          i();
        }), e.length = 0);
      }
      render() {
        var c, d, p, u, f;
        let t = this, { chart: e, options: i, hasRendered: s } = t, r = ba(i.animation), n = t.visible ? "inherit" : "hidden", o = i.zIndex, a = e.seriesGroup, h = t.finishedAnimating ? 0 : r.duration;
        Ht(this, "render"), t.plotGroup("group", "series", n, o, a), t.markerGroup = t.plotGroup("markerGroup", "markers", n, o, a), i.clip !== !1 && t.setClip(), h && ((c = t.animate) == null || c.call(t, !0)), t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), (d = t.drawDataLabels) == null || d.call(t), (p = t.redrawPoints) == null || p.call(t), i.enableMouseTracking && ((u = t.drawTracker) == null || u.call(t)), h && ((f = t.animate) == null || f.call(t)), s || (h && r.defer && (h += r.defer), t.animationTimeout = Pa(() => {
          t.afterAnimate();
        }, h || 0)), t.isDirty = !1, t.hasRendered = !0, Ht(t, "afterRender");
      }
      redraw() {
        let t = this.isDirty || this.isDirtyData;
        this.translate(), this.render(), t && delete this.kdTree;
      }
      reserveSpace() {
        return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
      }
      searchPoint(t, e) {
        let { xAxis: i, yAxis: s } = this, r = this.chart.inverted;
        return this.searchKDTree({ clientX: r ? i.len - t.chartY + i.pos : t.chartX - i.pos, plotY: r ? s.len - t.chartX + s.pos : t.chartY - s.pos }, e, t);
      }
      buildKDTree(t) {
        this.buildingKdTree = !0;
        let e = this, i = e.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
        delete e.kdTree, Pa(function() {
          e.kdTree = function s(r, n, o) {
            let a, h, c = r == null ? void 0 : r.length;
            if (c) return a = e.kdAxisArray[n % o], r.sort((d, p) => (d[a] || 0) - (p[a] || 0)), { point: r[h = Math.floor(c / 2)], left: s(r.slice(0, h), n + 1, o), right: s(r.slice(h + 1), n + 1, o) };
          }(e.getValidPoints(void 0, !e.directTouch), i, i), e.buildingKdTree = !1;
        }, e.options.kdNow || (t == null ? void 0 : t.type) === "touchstart" ? 0 : 1);
      }
      searchKDTree(t, e, i) {
        let s = this, [r, n] = this.kdAxisArray, o = e ? "distX" : "dist", a = (s.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, h = !!s.isBubble;
        if (this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return function c(d, p, u, f) {
          var A;
          let m = p.point, x = s.kdAxisArray[u % f], g, b, v = m;
          (function(T, L) {
            var J;
            let B = T[r], W = L[r], G = he(B) && he(W) ? B - W : null, D = T[n], Y = L[n], it = he(D) && he(Y) ? D - Y : 0, pt = h && ((J = L.marker) == null ? void 0 : J.radius) || 0;
            L.dist = Math.sqrt((G && G * G || 0) + it * it) - pt, L.distX = he(G) ? Math.abs(G) - pt : Number.MAX_VALUE;
          })(d, m);
          let M = (d[x] || 0) - (m[x] || 0) + (h && ((A = m.marker) == null ? void 0 : A.radius) || 0), C = M < 0 ? "left" : "right", S = M < 0 ? "right" : "left";
          return p[C] && (v = (g = c(d, p[C], u + 1, f))[o] < v[o] ? g : m), p[S] && Math.sqrt(M * M) < v[o] && (v = (b = c(d, p[S], u + 1, f))[o] < v[o] ? b : v), v;
        }(t, this.kdTree, a, a);
      }
      pointPlacementToXValue() {
        let { options: t, xAxis: e } = this, i = t.pointPlacement;
        return i === "between" && (i = e.reversed ? -0.5 : 0.5), pe(i) ? i * (t.pointRange || e.pointRange) : 0;
      }
      isPointInside(t) {
        let { chart: e, xAxis: i, yAxis: s } = this, { plotX: r = -1, plotY: n = -1 } = t;
        return n >= 0 && n <= (s ? s.len : e.plotHeight) && r >= 0 && r <= (i ? i.len : e.plotWidth);
      }
      drawTracker() {
        var p;
        let t = this, e = t.options, i = e.trackByArea, s = [].concat((i ? t.areaPath : t.graphPath) || []), r = t.chart, n = r.pointer, o = r.renderer, a = ((p = r.options.tooltip) == null ? void 0 : p.snap) || 0, h = () => {
          e.enableMouseTracking && r.hoverSeries !== t && t.onMouseOver();
        }, c = "rgba(192,192,192," + (Uc ? 1e-4 : 2e-3) + ")", d = t.tracker;
        d ? d.attr({ d: s }) : t.graph && (t.tracker = d = o.path(s).attr({ visibility: t.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), r.styledMode || d.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: c, fill: i ? c : "none", "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * a) }), [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach((u) => {
          u && (u.addClass("highcharts-tracker").on("mouseover", h).on("mouseout", (f) => {
            n == null || n.onTrackerMouseOut(f);
          }), e.cursor && !r.styledMode && u.css({ cursor: e.cursor }), u.on("touchstart", h));
        })), Ht(this, "afterDrawTracker");
      }
      addPoint(t, e, i, s, r) {
        let n, o, a = this.options, { chart: h, data: c, dataTable: d, xAxis: p } = this, u = p && p.hasNames && p.names, f = a.data, m = this.getColumn("x");
        e = Xt(e, !0);
        let x = { series: this };
        this.pointClass.prototype.applyOptions.apply(x, [t]);
        let g = x.x;
        if (o = m.length, this.requireSorting && g < m[o - 1]) for (n = !0; o && m[o - 1] > g; ) o--;
        d.setRow(x, o, !0, { addColumns: !1 }), u && x.name && (u[g] = x.name), f == null || f.splice(o, 0, t), (n || this.processedData) && (this.data.splice(o, 0, null), this.processData()), a.legendType === "point" && this.generatePoints(), i && (c[0] && c[0].remove ? c[0].remove(!1) : ([c, f, ...Object.values(d.getColumns())].filter(he).forEach((b) => {
          b.shift();
        }), d.rowCount -= 1, Ht(d, "afterDeleteRows"))), r !== !1 && Ht(this, "addPoint", { point: x }), this.isDirty = !0, this.isDirtyData = !0, e && h.redraw(s);
      }
      removePoint(t, e, i) {
        let s = this, { chart: r, data: n, points: o, dataTable: a } = s, h = n[t], c = function() {
          [(o == null ? void 0 : o.length) === n.length ? o : void 0, n, s.options.data, ...Object.values(a.getColumns())].filter(he).forEach((d) => {
            d.splice(t, 1);
          }), a.rowCount -= 1, Ht(a, "afterDeleteRows"), h == null || h.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && r.redraw();
        };
        Gc(i, r), e = Xt(e, !0), h ? h.firePointEvent("remove", null, c) : c();
      }
      remove(t, e, i, s) {
        let r = this, n = r.chart;
        function o() {
          r.destroy(s), n.isDirtyLegend = n.isDirtyBox = !0, n.linkSeries(s), Xt(t, !0) && n.redraw(e);
        }
        i !== !1 ? Ht(r, "remove", null, o) : o();
      }
      update(t, e) {
        var g, b;
        Ht(this, "update", { options: t = Kc(t, this.userOptions) });
        let i = this, s = i.chart, r = i.userOptions, n = i.initialType || i.type, o = s.options.plotOptions, a = zi[n].prototype, h = i.finishedAnimating && { animation: !1 }, c = {}, d, p, u = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], f = t.type || r.type || s.options.chart.type, m = !(this.hasDerivedData || f && f !== this.type || t.keys !== void 0 || t.pointStart !== void 0 || t.pointInterval !== void 0 || t.relativeXValue !== void 0 || t.joinBy || t.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some((v) => i.hasOptionChanged(v)));
        f = f || n, m ? (u.push("data", "isDirtyData", "isDirtyCanvas", "points", "dataTable", "processedData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"), t.visible !== !1 && u.push("area", "graph"), i.parallelArrays.forEach(function(v) {
          u.push(v + "Data");
        }), t.data && (t.dataSorting && Wi(i.options.dataSorting, t.dataSorting), this.setData(t.data, !1))) : this.dataTable.modified = this.dataTable, t = Fi(r, { index: r.index === void 0 ? i.index : r.index, pointStart: ((g = o == null ? void 0 : o.series) == null ? void 0 : g.pointStart) ?? r.pointStart ?? i.getColumn("x")[0] }, !m && { data: i.options.data }, t, h), m && t.data && (t.data = i.options.data), (u = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(u)).forEach(function(v) {
          u[v] = i[v], delete i[v];
        });
        let x = !1;
        if (zi[f]) {
          if (x = f !== i.type, i.remove(!1, !1, !1, !0), x)
            if (s.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(i, zi[f].prototype);
            else {
              let v = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
              for (p in a) i[p] = void 0;
              Wi(i, zi[f].prototype), v ? i.hcEvents = v : delete i.hcEvents;
            }
        } else tr(17, !0, s, { missingModuleFor: f });
        if (u.forEach(function(v) {
          i[v] = u[v];
        }), i.init(s, t), m && this.points) for (let v of ((d = i.options).visible === !1 ? (c.graphic = 1, c.dataLabel = 1) : (this.hasMarkerChanged(d, r) && (c.graphic = 1), (b = i.hasDataLabels) != null && b.call(i) || (c.dataLabel = 1)), this.points)) v && v.series && (v.resolveColor(), Object.keys(c).length && v.destroyElements(c), d.showInLegend === !1 && v.legendItem && s.legend.destroyItem(v));
        i.initialType = n, s.linkSeries(), s.setSortedData(), x && i.linkedSeries.length && (i.isDirtyData = !0), Ht(this, "afterUpdate"), Xt(e, !0) && s.redraw(!!m && void 0);
      }
      setName(t) {
        this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0;
      }
      hasOptionChanged(t) {
        var o, a;
        let e = this.chart, i = this.options[t], s = e.options.plotOptions, r = this.userOptions[t], n = Xt((o = s == null ? void 0 : s[this.type]) == null ? void 0 : o[t], (a = s == null ? void 0 : s.series) == null ? void 0 : a[t]);
        return r && !he(n) ? i !== r : i !== Xt(n, i);
      }
      onMouseOver() {
        let t = this.chart, e = t.hoverSeries, i = t.pointer;
        i == null || i.setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && Ht(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this;
      }
      onMouseOut() {
        let t = this.options, e = this.chart, i = e.tooltip, s = e.hoverPoint;
        e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && Ht(this, "mouseOut"), i && !this.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), e.series.forEach(function(r) {
          r.setState("", !0);
        });
      }
      setState(t, e) {
        let i = this, s = i.options, r = i.graph, n = s.inactiveOtherPoints, o = s.states, a = Xt(o[t || "normal"] && o[t || "normal"].animation, i.chart.options.chart.animation), h = s.lineWidth, c = s.opacity;
        if (t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function(d) {
          d && (i.state && d.removeClass("highcharts-series-" + i.state), t && d.addClass("highcharts-series-" + t));
        }), i.state = t, !i.chart.styledMode)) {
          if (o[t] && o[t].enabled === !1) return;
          if (t && (h = o[t].lineWidth || h + (o[t].lineWidthPlus || 0), c = Xt(o[t].opacity, c)), r && !r.dashstyle && pe(h)) for (let d of [r, ...this.zones.map((p) => p.graph)]) d == null || d.animate({ "stroke-width": h }, a);
          n || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function(d) {
            d && d.animate({ opacity: c }, a);
          });
        }
        e && n && i.points && i.setAllPointsToState(t || void 0);
      }
      setAllPointsToState(t) {
        this.points.forEach(function(e) {
          e.setState && e.setState(t);
        });
      }
      setVisible(t, e) {
        var a;
        let i = this, s = i.chart, r = s.options.chart.ignoreHiddenSeries, n = i.visible;
        i.visible = t = i.options.visible = i.userOptions.visible = t === void 0 ? !n : t;
        let o = t ? "show" : "hide";
        ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((h) => {
          var c;
          (c = i[h]) == null || c[o]();
        }), (s.hoverSeries === i || ((a = s.hoverPoint) == null ? void 0 : a.series) === i) && i.onMouseOut(), i.legendItem && s.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && s.series.forEach((h) => {
          h.options.stacking && h.visible && (h.isDirty = !0);
        }), i.linkedSeries.forEach((h) => {
          h.setVisible(t, !1);
        }), r && (s.isDirtyBox = !0), Ht(i, o), e !== !1 && s.redraw();
      }
      show() {
        this.setVisible(!0);
      }
      hide() {
        this.setVisible(!1);
      }
      select(t) {
        this.selected = t = this.options.selected = t === void 0 ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), Ht(this, t ? "select" : "unselect");
      }
      shouldShowTooltip(t, e, i = {}) {
        return i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i);
      }
      drawLegendSymbol(t, e) {
        var i;
        (i = ya[this.options.legendSymbol || "rectangle"]) == null || i.call(this, t, e);
      }
    }
    Hi.defaultOptions = { lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1e3 }, enableMouseTracking: !0, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: !0, formatter: function() {
      let { numberFormatter: l } = this.series.chart;
      return typeof this.y != "number" ? "" : l(this.y, -1);
    }, padding: 5, style: { fontSize: "0.7em", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 150 }, opacity: 0.2 } }, stickyTracking: !0, turboThreshold: 1e3, findNearestPointBy: "x" }, Hi.types = Vt.seriesTypes, Hi.registerType = Vt.registerSeriesType, Wi(Hi.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, directTouch: !1, invertible: !0, isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: hi, requireSorting: !0, sorted: !0 }), Vt.series = Hi;
    let Le = Hi, { animObject: ep, setAnimation: ip } = fe, { registerEventOptions: Ea } = Ns, { composed: sp, marginNames: Oa } = _, { distribute: rp } = Ps, { format: np } = He, { addEvent: er, createElement: op, css: ap, defined: gn, discardElement: lp, find: hp, fireEvent: si, isNumber: La, merge: Si, pick: Ne, pushUnique: dp, relativeLength: cp, stableSort: pp, syncTimeout: up } = U;
    class mn {
      constructor(t, e) {
        this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t, this.setOptions(e), e.enabled && (this.render(), Ea(this, e), er(this.chart, "endResize", function() {
          this.legend.positionCheckboxes();
        })), er(this.chart, "render", () => {
          this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
        });
      }
      setOptions(t) {
        let e = Ne(t.padding, 8);
        this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = Si(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop, this.itemMarginBottom = t.itemMarginBottom, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = Ne(t.symbolWidth, 16), this.pages = [], this.proximate = t.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
      }
      update(t, e) {
        let i = this.chart;
        this.setOptions(Si(!0, this.options, t)), "events" in this.options && Ea(this, this.options), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, Ne(e, !0) && i.redraw(), si(this, "afterUpdate", { redraw: e });
      }
      colorizeItem(t, e) {
        var h;
        let i = t.color, { area: s, group: r, label: n, line: o, symbol: a } = t.legendItem || {};
        if ((t instanceof Le || t instanceof hi) && (t.color = ((h = t.options) == null ? void 0 : h.legendSymbolColor) || i), r == null || r[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
          let { itemHiddenStyle: c = {} } = this, d = c.color, { fillColor: p, fillOpacity: u, lineColor: f, marker: m } = t.options, x = (g) => (!e && (g.fill && (g.fill = d), g.stroke && (g.stroke = d)), g);
          n == null || n.css(Si(e ? this.itemStyle : c)), o == null || o.attr(x({ stroke: f || t.color })), a && a.attr(x(m && a.isMarker ? t.pointAttribs() : { fill: t.color })), s == null || s.attr(x({ fill: p || t.color, "fill-opacity": p ? 1 : u ?? 0.75 }));
        }
        t.color = i, si(this, "afterColorizeItem", { item: t, visible: e });
      }
      positionItems() {
        this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
      }
      positionItem(t) {
        let { group: e, x: i = 0, y: s = 0 } = t.legendItem || {}, r = this.options, n = r.symbolPadding, o = !r.rtl, a = t.checkbox;
        if (e && e.element) {
          let h = { translateX: o ? i : this.legendWidth - i - 2 * n - 4, translateY: s };
          e[gn(e.translateY) ? "animate" : "attr"](h, void 0, () => {
            si(this, "afterPositionItem", { item: t });
          });
        }
        a && (a.x = i, a.y = s);
      }
      destroyItem(t) {
        let e = t.checkbox, i = t.legendItem || {};
        for (let s of ["group", "label", "line", "symbol"]) i[s] && (i[s] = i[s].destroy());
        e && lp(e), t.legendItem = void 0;
      }
      destroy() {
        for (let t of this.getAllItems()) this.destroyItem(t);
        for (let t of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"]) this[t] && (this[t] = this[t].destroy());
        this.display = null;
      }
      positionCheckboxes() {
        let t, e = this.group && this.group.alignAttr, i = this.clipHeight || this.legendHeight, s = this.titleHeight;
        e && (t = e.translateY, this.allItems.forEach(function(r) {
          let n, o = r.checkbox;
          o && (n = t + s + o.y + (this.scrollOffset || 0) + 3, ap(o, { left: e.translateX + r.checkboxOffset + o.x - 20 + "px", top: n + "px", display: this.proximate || n > t - 6 && n < t + i - 6 ? "" : "none" }));
        }, this));
      }
      renderTitle() {
        let t = this.options, e = this.padding, i = t.title, s, r = 0;
        i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, void 0, void 0, void 0, t.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(i.style), this.title.add(this.group)), i.width || this.title.css({ width: this.maxLegendWidth + "px" }), r = (s = this.title.getBBox()).height, this.offsetWidth = s.width, this.contentGroup.attr({ translateY: r })), this.titleHeight = r;
      }
      setText(t) {
        let e = this.options;
        t.legendItem.label.attr({ text: e.labelFormat ? np(e.labelFormat, t, this.chart) : e.labelFormatter.call(t) });
      }
      renderItem(t) {
        let e = t.legendItem = t.legendItem || {}, i = this.chart, s = i.renderer, r = this.options, n = r.layout === "horizontal", o = this.symbolWidth, a = r.symbolPadding || 0, h = this.itemStyle, c = this.itemHiddenStyle, d = n ? Ne(r.itemDistance, 20) : 0, p = !r.rtl, u = !t.series, f = !u && t.series.drawLegendSymbol ? t.series : t, m = f.options, x = !!this.createCheckboxForItem && m && m.showCheckbox, g = r.useHTML, b = t.options.className, v = e.label, M = o + a + d + (x ? 20 : 0);
        !v && (e.group = s.g("legend-item").addClass("highcharts-" + f.type + "-series highcharts-color-" + t.colorIndex + (b ? " " + b : "") + (u ? " highcharts-series-" + t.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), e.label = v = s.text("", p ? o + a : -a, this.baseline || 0, g), i.styledMode || v.css(Si(t.visible ? h : c)), v.attr({ align: p ? "left" : "right", zIndex: 2 }).add(e.group), !this.baseline && (this.fontMetrics = s.fontMetrics(v), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, v.attr("y", this.baseline), this.symbolHeight = Ne(r.symbolHeight, this.fontMetrics.f), r.squareSymbol && (this.symbolWidth = Ne(r.symbolWidth, Math.max(this.symbolHeight, 16)), M = this.symbolWidth + a + d + (x ? 20 : 0), p && v.attr("x", this.symbolWidth + a))), f.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, v, g)), x && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), (i.styledMode || !h.width) && v.css({ width: (r.itemWidth || this.widthOption || i.spacingBox.width) - M + "px" }), this.setText(t);
        let C = v.getBBox(), S = this.fontMetrics && this.fontMetrics.h || 0;
        t.itemWidth = t.checkboxOffset = r.itemWidth || e.labelWidth || C.width + M, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(e.labelHeight || (C.height > 1.5 * S ? C.height : S));
      }
      layoutItem(t) {
        let e = this.options, i = this.padding, s = e.layout === "horizontal", r = t.itemHeight, n = this.itemMarginBottom, o = this.itemMarginTop, a = s ? Ne(e.itemDistance, 20) : 0, h = this.maxLegendWidth, c = e.alignColumns && this.totalItemWidth > h ? this.maxItemWidth : t.itemWidth, d = t.legendItem || {};
        s && this.itemX - i + c > h && (this.itemX = i, this.lastLineHeight && (this.itemY += o + this.lastLineHeight + n), this.lastLineHeight = 0), this.lastItemY = o + this.itemY + n, this.lastLineHeight = Math.max(r, this.lastLineHeight), d.x = this.itemX, d.y = this.itemY, s ? this.itemX += c : (this.itemY += o + r + n, this.lastLineHeight = r), this.offsetWidth = this.widthOption || Math.max((s ? this.itemX - i - (t.checkbox ? 0 : a) : c) + i, this.offsetWidth);
      }
      getAllItems() {
        let t = [];
        return this.chart.series.forEach(function(e) {
          let i = e && e.options;
          e && Ne(i.showInLegend, !gn(i.linkedTo) && void 0, !0) && (t = t.concat((e.legendItem || {}).labels || (i.legendType === "point" ? e.data : e)));
        }), si(this, "afterGetAllItems", { allItems: t }), t;
      }
      getAlignment() {
        let t = this.options;
        return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0);
      }
      adjustMargins(t, e) {
        let i = this.chart, s = this.options, r = this.getAlignment();
        r && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(n, o) {
          n.test(r) && !gn(t[o]) && (i[Oa[o]] = Math.max(i[Oa[o]], i.legend[(o + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][o] * s[o % 2 ? "x" : "y"] + Ne(s.margin, 12) + e[o] + (i.titleOffset[o] || 0)));
        });
      }
      proximatePositions() {
        let t, e = this.chart, i = [], s = this.options.align === "left";
        for (let r of (this.allItems.forEach(function(n) {
          let o, a, h = s, c, d;
          n.yAxis && (n.xAxis.options.reversed && (h = !h), n.points && (o = hp(h ? n.points : n.points.slice(0).reverse(), function(p) {
            return La(p.plotY);
          })), a = this.itemMarginTop + n.legendItem.label.getBBox().height + this.itemMarginBottom, d = n.yAxis.top - e.plotTop, c = n.visible ? (o ? o.plotY : n.yAxis.height) + (d - 0.3 * a) : d + n.yAxis.height, i.push({ target: c, size: a, item: n }));
        }, this), rp(i, e.plotHeight))) t = r.item.legendItem || {}, La(r.pos) && (t.y = e.plotTop - e.spacing[0] + r.pos);
      }
      render() {
        let t = this.chart, e = t.renderer, i = this.options, s = this.padding, r = this.getAllItems(), n, o, a, h = this.group, c, d = this.box;
        this.itemX = s, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = cp(i.width, t.spacingBox.width - s), c = t.spacingBox.width - 2 * s - i.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (c /= 2), this.maxLegendWidth = this.widthOption || c, h || (this.group = h = e.g("legend").addClass(i.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = e.g().attr({ zIndex: 1 }).add(h), this.scrollGroup = e.g().add(this.contentGroup)), this.renderTitle(), pp(r, (p, u) => (p.options && p.options.legendIndex || 0) - (u.options && u.options.legendIndex || 0)), i.reversed && r.reverse(), this.allItems = r, this.display = n = !!r.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, r.forEach(this.renderItem, this), r.forEach(this.layoutItem, this), o = (this.widthOption || this.offsetWidth) + s, a = this.lastItemY + this.lastLineHeight + this.titleHeight, a = this.handleOverflow(a) + s, d || (this.box = d = e.rect().addClass("highcharts-legend-box").attr({ r: i.borderRadius }).add(h)), t.styledMode || d.attr({ stroke: i.borderColor, "stroke-width": i.borderWidth || 0, fill: i.backgroundColor || "none" }).shadow(i.shadow), o > 0 && a > 0 && d[d.placed ? "animate" : "attr"](d.crisp.call({}, { x: 0, y: 0, width: o, height: a }, d.strokeWidth())), h[n ? "show" : "hide"](), t.styledMode && h.getStyle("display") === "none" && (o = a = 0), this.legendWidth = o, this.legendHeight = a, n && this.align(), this.proximate || this.positionItems(), si(this, "afterRender");
      }
      align(t = this.chart.spacingBox) {
        let e = this.chart, i = this.options, s = t.y;
        /(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0 ? s += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e.titleOffset[2] > 0 && (s -= e.titleOffset[2]), s !== t.y && (t = Si(t, { y: s })), e.hasRendered || (this.group.placed = !1), this.group.align(Si(i, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : i.verticalAlign }), !0, t);
      }
      handleOverflow(t) {
        let e = this, i = this.chart, s = i.renderer, r = this.options, n = r.y, o = r.verticalAlign === "top", a = this.padding, h = r.maxHeight, c = r.navigation, d = Ne(c.animation, !0), p = c.arrowSize || 12, u = this.pages, f = this.allItems, m = function(A) {
          typeof A == "number" ? S.attr({ height: A }) : S && (e.clipRect = S.destroy(), e.contentGroup.clip()), e.contentGroup.div && (e.contentGroup.div.style.clip = A ? "rect(" + a + "px,9999px," + (a + A) + "px,0)" : "auto");
        }, x = function(A) {
          return e[A] = s.circle(0, 0, 1.3 * p).translate(p / 2, p / 2).add(C), i.styledMode || e[A].attr("fill", "rgba(0,0,0,0.0001)"), e[A];
        }, g, b, v, M = i.spacingBox.height + (o ? -n : n) - a, C = this.nav, S = this.clipRect;
        return r.layout !== "horizontal" || r.verticalAlign === "middle" || r.floating || (M /= 2), h && (M = Math.min(M, h)), u.length = 0, t && M > 0 && t > M && c.enabled !== !1 ? (this.clipHeight = g = Math.max(M - 20 - this.titleHeight - a, 0), this.currentPage = Ne(this.currentPage, 1), this.fullHeight = t, f.forEach((A, T) => {
          let L = (v = A.legendItem || {}).y || 0, B = Math.round(v.label.getBBox().height), W = u.length;
          (!W || L - u[W - 1] > g && (b || L) !== u[W - 1]) && (u.push(b || L), W++), v.pageIx = W - 1, b && ((f[T - 1].legendItem || {}).pageIx = W - 1), T === f.length - 1 && L + B - u[W - 1] > g && L > u[W - 1] && (u.push(L), v.pageIx = W), L !== b && (b = L);
        }), S || (S = e.clipRect = s.clipRect(0, a - 2, 9999, 0), e.contentGroup.clip(S)), m(g), C || (this.nav = C = s.g().attr({ zIndex: 1 }).add(this.group), this.up = s.symbol("triangle", 0, 0, p, p).add(C), x("upTracker").on("click", function() {
          e.scroll(-1, d);
        }), this.pager = s.text("", 15, 10).addClass("highcharts-legend-navigation"), !i.styledMode && c.style && this.pager.css(c.style), this.pager.add(C), this.down = s.symbol("triangle-down", 0, 0, p, p).add(C), x("downTracker").on("click", function() {
          e.scroll(1, d);
        })), e.scroll(0), t = M) : C && (m(), this.nav = C.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), t;
      }
      scroll(t, e) {
        let i = this.chart, s = this.pages, r = s.length, n = this.clipHeight, o = this.options.navigation, a = this.pager, h = this.padding, c = this.currentPage + t;
        c > r && (c = r), c > 0 && (e !== void 0 && ip(e, i), this.nav.attr({ translateX: h, translateY: n + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(d) {
          d.attr({ class: c === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
        }), a.attr({ text: c + "/" + r }), [this.down, this.downTracker].forEach(function(d) {
          d.attr({ x: 18 + this.pager.getBBox().width, class: c === r ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
        }, this), i.styledMode || (this.up.attr({ fill: c === 1 ? o.inactiveColor : o.activeColor }), this.upTracker.css({ cursor: c === 1 ? "default" : "pointer" }), this.down.attr({ fill: c === r ? o.inactiveColor : o.activeColor }), this.downTracker.css({ cursor: c === r ? "default" : "pointer" })), this.scrollOffset = -s[c - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = c, this.positionCheckboxes(), up(() => {
          si(this, "afterScroll", { currentPage: c });
        }, ep(Ne(e, i.renderer.globalAnimation, !0)).duration));
      }
      setItemEvents(t, e, i) {
        let s = this, r = t.legendItem || {}, n = s.chart.renderer.boxWrapper, o = t instanceof hi, a = t instanceof Le, h = "highcharts-legend-" + (o ? "point" : "series") + "-active", c = s.chart.styledMode, d = i ? [e, r.symbol] : [r.group], p = (u) => {
          s.allItems.forEach((f) => {
            t !== f && [f].concat(f.linkedSeries || []).forEach((m) => {
              m.setState(u, !o);
            });
          });
        };
        for (let u of d) u && u.on("mouseover", function() {
          t.visible && p("inactive"), t.setState("hover"), t.visible && n.addClass(h), c || e.css(s.options.itemHoverStyle);
        }).on("mouseout", function() {
          s.chart.styledMode || e.css(Si(t.visible ? s.itemStyle : s.itemHiddenStyle)), p(""), n.removeClass(h), t.setState();
        }).on("click", function(f) {
          let m = function() {
            t.setVisible && t.setVisible(), p(t.visible ? "inactive" : "");
          };
          n.removeClass(h), si(s, "itemClick", { browserEvent: f, legendItem: t }, m), o ? t.firePointEvent("legendItemClick", { browserEvent: f }) : a && si(t, "legendItemClick", { browserEvent: f });
        });
      }
      createCheckboxForItem(t) {
        t.checkbox = op("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: t.selected, defaultChecked: t.selected }, this.options.itemCheckboxStyle, this.chart.container), er(t.checkbox, "click", function(e) {
          let i = e.target;
          si(t.series || t, "checkboxClick", { checked: i.checked, item: t }, function() {
            t.select();
          });
        });
      }
    }
    (function(l) {
      l.compose = function(t) {
        dp(sp, "Core.Legend") && er(t, "beforeMargins", function() {
          this.legend = new l(this, this.options.legend);
        });
      };
    })(mn || (mn = {}));
    let _a = mn, { animate: xn, animObject: fp, setAnimation: yn } = fe, { defaultOptions: vn } = ke, { numberFormat: gp } = He, { registerEventOptions: Ia } = Ns, { charts: Ci, doc: cs, marginNames: Da, svg: mp, win: Ba } = _, { seriesTypes: bn } = Vt, { addEvent: kn, attr: Ra, createElement: wn, css: je, defined: ci, diffObjects: Na, discardElement: xp, erase: yp, error: Mn, extend: pi, find: Sn, fireEvent: yt, getAlignFactor: vp, getStyle: Cn, isArray: bp, isNumber: Xi, isObject: kp, isString: ir, merge: ri, objectEach: Tn, pick: ge, pInt: wp, relativeLength: za, removeEvent: Wa, splat: sr, syncTimeout: Mp, uniqueKey: Sp } = U;
    class ui {
      static chart(t, e, i) {
        return new ui(t, e, i);
      }
      constructor(t, e, i) {
        this.sharedClips = {};
        let s = [...arguments];
        (ir(t) || t.nodeName) && (this.renderTo = s.shift()), this.init(s[0], s[1]);
      }
      setZoomOptions() {
        let t = this.options.chart, e = t.zooming;
        this.zooming = { ...e, type: ge(t.zoomType, e.type), key: ge(t.zoomKey, e.key), pinchType: ge(t.pinchType, e.pinchType), singleTouch: ge(t.zoomBySingleTouch, e.singleTouch, !1), resetButton: ri(e.resetButton, t.resetZoomButton) };
      }
      init(t, e) {
        yt(this, "init", { args: arguments }, function() {
          var n;
          let i = ri(vn, t), s = i.chart, r = this.renderTo || s.renderTo;
          this.userOptions = pi({}, t), (this.renderTo = ir(r) ? cs.getElementById(r) : r) || Mn(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.locale = i.lang.locale ?? ((n = this.renderTo.closest("[lang]")) == null ? void 0 : n.lang), this.time = new Be(pi(i.time || {}, { locale: this.locale })), i.time = this.time.options, this.numberFormatter = (s.numberFormatter || gp).bind(this), this.styledMode = s.styledMode, this.hasCartesianSeries = s.showAxes, this.index = Ci.length, Ci.push(this), _.chartCount++, Ia(this, s), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), yt(this, "afterInit"), this.firstRender();
        });
      }
      initSeries(t) {
        let e = this.options.chart, i = t.type || e.type, s = bn[i];
        s || Mn(17, !0, this, { missingModuleFor: i });
        let r = new s();
        return typeof r.init == "function" && r.init(this, t), r;
      }
      setSortedData() {
        this.getSeriesOrderByLinks().forEach(function(t) {
          t.points || t.data || !t.enabledDataSorting || t.setData(t.options.data, !1);
        });
      }
      getSeriesOrderByLinks() {
        return this.series.concat().sort(function(t, e) {
          return t.linkedSeries.length || e.linkedSeries.length ? e.linkedSeries.length - t.linkedSeries.length : 0;
        });
      }
      orderItems(t, e = 0) {
        let i = this[t], s = this.options[t] = sr(this.options[t]).slice(), r = this.userOptions[t] = this.userOptions[t] ? sr(this.userOptions[t]).slice() : [];
        if (this.hasRendered && (s.splice(e), r.splice(e)), i) for (let n = e, o = i.length; n < o; ++n) {
          let a = i[n];
          a && (a.index = n, a instanceof Le && (a.name = a.getName()), a.options.isInternal || (s[n] = a.options, r[n] = a.userOptions));
        }
      }
      isInsidePlot(t, e, i = {}) {
        var x;
        let { inverted: s, plotBox: r, plotLeft: n, plotTop: o, scrollablePlotBox: a } = this, { scrollLeft: h = 0, scrollTop: c = 0 } = i.visiblePlotOnly && ((x = this.scrollablePlotArea) == null ? void 0 : x.scrollingContainer) || {}, d = i.series, p = i.visiblePlotOnly && a || r, u = i.inverted ? e : t, f = i.inverted ? t : e, m = { x: u, y: f, isInsidePlot: !0, options: i };
        if (!i.ignoreX) {
          let g = d && (s && !this.polar ? d.yAxis : d.xAxis) || { pos: n, len: 1 / 0 }, b = i.paneCoordinates ? g.pos + u : n + u;
          b >= Math.max(h + n, g.pos) && b <= Math.min(h + n + p.width, g.pos + g.len) || (m.isInsidePlot = !1);
        }
        if (!i.ignoreY && m.isInsidePlot) {
          let g = !s && i.axis && !i.axis.isXAxis && i.axis || d && (s ? d.xAxis : d.yAxis) || { pos: o, len: 1 / 0 }, b = i.paneCoordinates ? g.pos + f : o + f;
          b >= Math.max(c + o, g.pos) && b <= Math.min(c + o + p.height, g.pos + g.len) || (m.isInsidePlot = !1);
        }
        return yt(this, "afterIsInsidePlot", m), m.isInsidePlot;
      }
      redraw(t) {
        yt(this, "beforeRedraw");
        let e = this.hasCartesianSeries ? this.axes : this.colorAxis || [], i = this.series, s = this.pointer, r = this.legend, n = this.userOptions.legend, o = this.renderer, a = o.isHidden(), h = [], c, d, p, u = this.isDirtyBox, f = this.isDirtyLegend, m;
        for (o.rootFontSize = o.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), yn(!!this.hasRendered && t, this), a && this.temporaryDisplay(), this.layOutTitles(!1), p = i.length; p--; ) if (((m = i[p]).options.stacking || m.options.centerInCategory) && (d = !0, m.isDirty)) {
          c = !0;
          break;
        }
        if (c) for (p = i.length; p--; ) (m = i[p]).options.stacking && (m.isDirty = !0);
        i.forEach(function(x) {
          x.isDirty && (x.options.legendType === "point" ? (typeof x.updateTotals == "function" && x.updateTotals(), f = !0) : n && (n.labelFormatter || n.labelFormat) && (f = !0)), x.isDirtyData && yt(x, "updatedData");
        }), f && r && r.options.enabled && (r.render(), this.isDirtyLegend = !1), d && this.getStacks(), e.forEach(function(x) {
          x.updateNames(), x.setScale();
        }), this.getMargins(), e.forEach(function(x) {
          x.isDirty && (u = !0);
        }), e.forEach(function(x) {
          let g = x.min + "," + x.max;
          x.extKey !== g && (x.extKey = g, h.push(function() {
            yt(x, "afterSetExtremes", pi(x.eventArgs, x.getExtremes())), delete x.eventArgs;
          })), (u || d) && x.redraw();
        }), u && this.drawChartBox(), yt(this, "predraw"), i.forEach(function(x) {
          (u || x.isDirty) && x.visible && x.redraw(), x.isDirtyData = !1;
        }), s && s.reset(!0), o.draw(), yt(this, "redraw"), yt(this, "render"), a && this.temporaryDisplay(!0), h.forEach(function(x) {
          x.call();
        });
      }
      get(t) {
        let e = this.series;
        function i(r) {
          return r.id === t || r.options && r.options.id === t;
        }
        let s = Sn(this.axes, i) || Sn(this.series, i);
        for (let r = 0; !s && r < e.length; r++) s = Sn(e[r].points || [], i);
        return s;
      }
      createAxes() {
        let t = this.userOptions;
        for (let e of (yt(this, "createAxes"), ["xAxis", "yAxis"])) for (let i of t[e] = sr(t[e] || {})) new Bi(this, i, e);
        yt(this, "afterCreateAxes");
      }
      getSelectedPoints() {
        return this.series.reduce((t, e) => (e.getPointsCollection().forEach((i) => {
          ge(i.selectedStaging, i.selected) && t.push(i);
        }), t), []);
      }
      getSelectedSeries() {
        return this.series.filter((t) => t.selected);
      }
      setTitle(t, e, i) {
        this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i);
      }
      applyDescription(t, e) {
        var n;
        let i = this, s = this.options[t] = ri(this.options[t], e), r = this[t];
        r && e && (this[t] = r = r.destroy()), s && !r && ((r = this.renderer.text(s.text, 0, 0, s.useHTML).attr({ align: s.align, class: "highcharts-" + t, zIndex: s.zIndex || 4 }).css({ textOverflow: "ellipsis", whiteSpace: "nowrap" }).add()).update = function(o, a) {
          i.applyDescription(t, o), i.layOutTitles(a);
        }, this.styledMode || r.css(pi(t === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, s.style)), r.textPxLength = r.getBBox().width, r.css({ whiteSpace: (n = s.style) == null ? void 0 : n.whiteSpace }), this[t] = r);
      }
      layOutTitles(t = !0) {
        var o, a, h, c;
        let e = [0, 0, 0], { options: i, renderer: s, spacingBox: r } = this;
        ["title", "subtitle", "caption"].forEach((d) => {
          var x;
          let p = this[d], u = this.options[d], f = ri(r), m = (p == null ? void 0 : p.textPxLength) || 0;
          if (p && u) {
            yt(this, "layOutTitle", { alignTo: f, key: d, textPxLength: m });
            let g = s.fontMetrics(p), b = g.b, v = g.h, M = u.verticalAlign || "top", C = M === "top", S = C && u.minScale || 1, A = d === "title" ? C ? -3 : 0 : C ? e[0] + 2 : 0, T = Math.min(f.width / m, 1), L = Math.max(S, T), B = ri({ y: M === "bottom" ? b : A + b }, { align: d === "title" ? T < S ? "left" : "center" : (x = this.title) == null ? void 0 : x.alignValue }, u), W = u.width || (T > S ? this.chartWidth : f.width) / L;
            p.alignValue !== B.align && (p.placed = !1);
            let G = Math.round(p.css({ width: `${W}px` }).getBBox(u.useHTML).height);
            if (B.height = G, p.align(B, !1, f).attr({ align: B.align, scaleX: L, scaleY: L, "transform-origin": `${f.x + m * L * vp(B.align)} ${v}` }), !u.floating) {
              let D = G * (G < 1.2 * v ? 1 : L);
              M === "top" ? e[0] = Math.ceil(e[0] + D) : M === "bottom" && (e[2] = Math.ceil(e[2] + D));
            }
          }
        }, this), e[0] && (((o = i.title) == null ? void 0 : o.verticalAlign) || "top") === "top" && (e[0] += ((a = i.title) == null ? void 0 : a.margin) || 0), e[2] && ((h = i.caption) == null ? void 0 : h.verticalAlign) === "bottom" && (e[2] += ((c = i.caption) == null ? void 0 : c.margin) || 0);
        let n = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
        this.titleOffset = e, yt(this, "afterLayOutTitles"), !this.isDirtyBox && n && (this.isDirtyBox = this.isDirtyLegend = n, this.hasRendered && t && this.isDirtyBox && this.redraw());
      }
      getContainerBox() {
        let t = [].map.call(this.renderTo.children, (i) => {
          if (i !== this.container) {
            let s = i.style.display;
            return i.style.display = "none", [i, s];
          }
        }), e = { width: Cn(this.renderTo, "width", !0) || 0, height: Cn(this.renderTo, "height", !0) || 0 };
        return t.filter(Boolean).forEach(([i, s]) => {
          i.style.display = s;
        }), e;
      }
      getChartSize() {
        var n;
        let t = this.options.chart, e = t.width, i = t.height, s = this.getContainerBox(), r = s.height <= 1 || !((n = this.renderTo.parentElement) != null && n.style.height) && this.renderTo.style.height === "100%";
        this.chartWidth = Math.max(0, e || s.width || 600), this.chartHeight = Math.max(0, za(i, this.chartWidth) || (r ? 400 : s.height)), this.containerBox = s;
      }
      temporaryDisplay(t) {
        let e = this.renderTo, i;
        if (t) for (; e && e.style; ) e.hcOrigStyle && (je(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (cs.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
        else for (; e && e.style && (cs.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, cs.body.appendChild(e)), (Cn(e, "display", !1) === "none" || e.hcOricDetached) && (e.hcOrigStyle = { display: e.style.display, height: e.style.height, overflow: e.style.overflow }, i = { display: "block", overflow: "hidden" }, e !== this.renderTo && (i.height = 0), je(e, i), e.offsetWidth || e.style.setProperty("display", "block", "important")), (e = e.parentNode) !== cs.body); ) ;
      }
      setClassName(t) {
        this.container.className = "highcharts-container " + (t || "");
      }
      getContainer() {
        var p;
        let t, e = this.options, i = e.chart, s = "data-highcharts-chart", r = Sp(), n = this.renderTo, o = wp(Ra(n, s));
        Xi(o) && Ci[o] && Ci[o].hasRendered && Ci[o].destroy(), Ra(n, s, this.index), n.innerHTML = Ft.emptyHTML, i.skipClone || n.offsetWidth || this.temporaryDisplay(), this.getChartSize();
        let a = this.chartHeight, h = this.chartWidth;
        je(n, { overflow: "hidden" }), this.styledMode || (t = pi({ position: "relative", overflow: "hidden", width: h + "px", height: a + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none", padding: "0px" }, i.style || {}));
        let c = wn("div", { id: r }, t, n);
        this.container = c, this.getChartSize(), h === this.chartWidth || (h = this.chartWidth, this.styledMode || je(c, { width: ge((p = i.style) == null ? void 0 : p.width, h + "px") })), this.containerBox = this.getContainerBox(), this._cursor = c.style.cursor;
        let d = i.renderer || !mp ? es.getRendererType(i.renderer) : Rs;
        if (this.renderer = new d(c, h, a, void 0, i.forExport, e.exporting && e.exporting.allowHTML, this.styledMode), yn(void 0, this), this.setClassName(i.className), this.styledMode) for (let u in e.defs) this.renderer.definition(e.defs[u]);
        else this.renderer.setStyle(i.style);
        this.renderer.chartIndex = this.index, yt(this, "afterGetContainer");
      }
      getMargins(t) {
        let { spacing: e, margin: i, titleOffset: s } = this;
        this.resetMargins(), s[0] && !ci(i[0]) && (this.plotTop = Math.max(this.plotTop, s[0] + e[0])), s[2] && !ci(i[2]) && (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])), this.legend && this.legend.display && this.legend.adjustMargins(i, e), yt(this, "getMargins"), t || this.getAxisMargins();
      }
      getAxisMargins() {
        let t = this, e = t.axisOffset = [0, 0, 0, 0], i = t.colorAxis, s = t.margin, r = function(n) {
          n.forEach(function(o) {
            o.visible && o.getOffset();
          });
        };
        t.hasCartesianSeries ? r(t.axes) : i && i.length && r(i), Da.forEach(function(n, o) {
          ci(s[o]) || (t[n] += e[o]);
        }), t.setChartSize();
      }
      getOptions() {
        return Na(this.userOptions, vn);
      }
      reflow(t) {
        var r;
        let e = this, i = e.containerBox, s = e.getContainerBox();
        (r = e.pointer) == null || delete r.chartPosition, !e.isPrinting && !e.isResizing && i && s.width && ((s.width !== i.width || s.height !== i.height) && (U.clearTimeout(e.reflowTimeout), e.reflowTimeout = Mp(function() {
          e.container && e.setSize(void 0, void 0, !1);
        }, t ? 100 : 0)), e.containerBox = s);
      }
      setReflow() {
        let t = this, e = (i) => {
          var s;
          (s = t.options) != null && s.chart.reflow && t.hasLoaded && t.reflow(i);
        };
        if (typeof ResizeObserver == "function") new ResizeObserver(e).observe(t.renderTo);
        else {
          let i = kn(Ba, "resize", e);
          kn(this, "destroy", i);
        }
      }
      setSize(t, e, i) {
        let s = this, r = s.renderer;
        s.isResizing += 1, yn(i, s);
        let n = r.globalAnimation;
        s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, t !== void 0 && (s.options.chart.width = t), e !== void 0 && (s.options.chart.height = e), s.getChartSize();
        let { chartWidth: o, chartHeight: a, scrollablePixelsX: h = 0, scrollablePixelsY: c = 0 } = s;
        (s.isDirtyBox || o !== s.oldChartWidth || a !== s.oldChartHeight) && (s.styledMode || (n ? xn : je)(s.container, { width: `${o + h}px`, height: `${a + c}px` }, n), s.setChartSize(!0), r.setSize(o, a, n), s.axes.forEach(function(d) {
          d.isDirty = !0, d.setScale();
        }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(n), s.oldChartHeight = void 0, yt(s, "resize"), setTimeout(() => {
          s && yt(s, "endResize");
        }, fp(n).duration)), s.isResizing -= 1;
      }
      setChartSize(t) {
        let e, i, s, r, { chartHeight: n, chartWidth: o, inverted: a, spacing: h, renderer: c } = this, d = this.clipOffset, p = Math[a ? "floor" : "round"];
        this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(o - e - this.marginRight)), this.plotHeight = r = Math.max(0, Math.round(n - i - this.marginBottom)), this.plotSizeX = a ? r : s, this.plotSizeY = a ? s : r, this.spacingBox = c.spacingBox = { x: h[3], y: h[0], width: o - h[3] - h[1], height: n - h[0] - h[2] }, this.plotBox = c.plotBox = { x: e, y: i, width: s, height: r }, d && (this.clipBox = { x: p(d[3]), y: p(d[0]), width: p(this.plotSizeX - d[1] - d[3]), height: p(this.plotSizeY - d[0] - d[2]) }), t || (this.axes.forEach(function(u) {
          u.setAxisSize(), u.setAxisTranslation();
        }), c.alignElements()), yt(this, "afterSetChartSize", { skipAxes: t });
      }
      resetMargins() {
        yt(this, "resetMargins");
        let t = this, e = t.options.chart, i = e.plotBorderWidth || 0, s = i / 2;
        ["margin", "spacing"].forEach(function(r) {
          let n = e[r], o = kp(n) ? n : [n, n, n, n];
          ["Top", "Right", "Bottom", "Left"].forEach(function(a, h) {
            t[r][h] = ge(e[r + a], o[h]);
          });
        }), Da.forEach(function(r, n) {
          t[r] = ge(t.margin[n], t.spacing[n]);
        }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [s, s, s, s], t.plotBorderWidth = i;
      }
      drawChartBox() {
        let t = this.options.chart, e = this.renderer, i = this.chartWidth, s = this.chartHeight, r = this.styledMode, n = this.plotBGImage, o = t.backgroundColor, a = t.plotBackgroundColor, h = t.plotBackgroundImage, c = this.plotLeft, d = this.plotTop, p = this.plotWidth, u = this.plotHeight, f = this.plotBox, m = this.clipRect, x = this.clipBox, g = this.chartBackground, b = this.plotBackground, v = this.plotBorder, M, C, S, A = "animate";
        g || (this.chartBackground = g = e.rect().addClass("highcharts-background").add(), A = "attr"), r ? M = C = g.strokeWidth() : (C = (M = t.borderWidth || 0) + (t.shadow ? 8 : 0), S = { fill: o || "none" }, (M || g["stroke-width"]) && (S.stroke = t.borderColor, S["stroke-width"] = M), g.attr(S).shadow(t.shadow)), g[A]({ x: C / 2, y: C / 2, width: i - C - M % 2, height: s - C - M % 2, r: t.borderRadius }), A = "animate", b || (A = "attr", this.plotBackground = b = e.rect().addClass("highcharts-plot-background").add()), b[A](f), !r && (b.attr({ fill: a || "none" }).shadow(t.plotShadow), h && (n ? (h !== n.attr("href") && n.attr("href", h), n.animate(f)) : this.plotBGImage = e.image(h, c, d, p, u).add())), m ? m.animate({ width: x.width, height: x.height }) : this.clipRect = e.clipRect(x), A = "animate", v || (A = "attr", this.plotBorder = v = e.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()), r || v.attr({ stroke: t.plotBorderColor, "stroke-width": t.plotBorderWidth || 0, fill: "none" }), v[A](v.crisp({ x: c, y: d, width: p, height: u }, -v.strokeWidth())), this.isDirtyBox = !1, yt(this, "afterDrawChartBox");
      }
      propFromSeries() {
        let t, e, i, s = this, r = s.options.chart, n = s.options.series;
        ["inverted", "angular", "polar"].forEach(function(o) {
          for (e = bn[r.type], i = r[o] || e && e.prototype[o], t = n && n.length; !i && t--; ) (e = bn[n[t].type]) && e.prototype[o] && (i = !0);
          s[o] = i;
        });
      }
      linkSeries(t) {
        let e = this, i = e.series;
        i.forEach(function(s) {
          s.linkedSeries.length = 0;
        }), i.forEach(function(s) {
          let { linkedTo: r } = s.options;
          if (ir(r)) {
            let n;
            (n = r === ":previous" ? e.series[s.index - 1] : e.get(r)) && n.linkedParent !== s && (n.linkedSeries.push(s), s.linkedParent = n, n.enabledDataSorting && s.setDataSortingOptions(), s.visible = ge(s.options.visible, n.options.visible, s.visible));
          }
        }), yt(this, "afterLinkSeries", { isUpdating: t });
      }
      renderSeries() {
        this.series.forEach(function(t) {
          t.translate(), t.render();
        });
      }
      render() {
        var c;
        let t = this.axes, e = this.colorAxis, i = this.renderer, s = this.options.chart.axisLayoutRuns || 2, r = (d) => {
          d.forEach((p) => {
            p.visible && p.render();
          });
        }, n = 0, o = !0, a, h = 0;
        for (let d of (this.setTitle(), yt(this, "beforeMargins"), (c = this.getStacks) == null || c.call(this), this.getMargins(!0), this.setChartSize(), t)) {
          let { options: p } = d, { labels: u } = p;
          if (this.hasCartesianSeries && d.horiz && d.visible && u.enabled && d.series.length && d.coll !== "colorAxis" && !this.polar) {
            n = p.tickLength, d.createGroups();
            let f = new Di(d, 0, "", !0), m = f.createLabel("x", u);
            if (f.destroy(), m && ge(u.reserveSpace, !Xi(p.crossing)) && (n = m.getBBox().height + u.distance + Math.max(p.offset || 0, 0)), n) {
              m == null || m.destroy();
              break;
            }
          }
        }
        for (this.plotHeight = Math.max(this.plotHeight - n, 0); (o || a || s > 1) && h < s; ) {
          let d = this.plotWidth, p = this.plotHeight;
          for (let u of t) h === 0 ? u.setScale() : (u.horiz && o || !u.horiz && a) && u.setTickInterval(!0);
          h === 0 ? this.getAxisMargins() : this.getMargins(), o = d / this.plotWidth > (h ? 1 : 1.1), a = p / this.plotHeight > (h ? 1 : 1.05), h++;
        }
        this.drawChartBox(), this.hasCartesianSeries ? r(t) : e && e.length && r(e), this.seriesGroup || (this.seriesGroup = i.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0;
      }
      addCredits(t) {
        let e = this, i = ri(!0, this.options.credits, t);
        i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
          i.href && (Ba.location.href = i.href);
        }).attr({ align: i.position.align, zIndex: 8 }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function(s) {
          e.credits = e.credits.destroy(), e.addCredits(s);
        });
      }
      destroy() {
        let t, e = this, i = e.axes, s = e.series, r = e.container, n = r && r.parentNode;
        for (yt(e, "destroy"), e.renderer.forExport ? yp(Ci, e) : Ci[e.index] = void 0, _.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), Wa(e), t = i.length; t--; ) i[t] = i[t].destroy();
        for (this.scroller && this.scroller.destroy && this.scroller.destroy(), t = s.length; t--; ) s[t] = s[t].destroy();
        ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach(function(o) {
          let a = e[o];
          a && a.destroy && (e[o] = a.destroy());
        }), r && (r.innerHTML = Ft.emptyHTML, Wa(r), n && xp(r)), Tn(e, function(o, a) {
          delete e[a];
        });
      }
      firstRender() {
        var s;
        let t = this, e = t.options;
        t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.createAxes();
        let i = bp(e.series) ? e.series : [];
        e.series = [], i.forEach(function(r) {
          t.initSeries(r);
        }), t.linkSeries(), t.setSortedData(), yt(t, "beforeRender"), t.render(), (s = t.pointer) == null || s.getChartPosition(), t.renderer.imgCount || t.hasLoaded || t.onload(), t.temporaryDisplay(!0);
      }
      onload() {
        this.callbacks.concat([this.callback]).forEach(function(t) {
          t && this.index !== void 0 && t.apply(this, [this]);
        }, this), yt(this, "load"), yt(this, "render"), ci(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0;
      }
      warnIfA11yModuleNotLoaded() {
        let { options: t, title: e } = this;
        !t || this.accessibility || (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (e && e.element.textContent || "").replace(/</g, "&lt;") }), t.accessibility && t.accessibility.enabled === !1 || Mn('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this));
      }
      addSeries(t, e, i) {
        let s, r = this;
        return t && (e = ge(e, !0), yt(r, "addSeries", { options: t }, function() {
          s = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), s.enabledDataSorting && s.setData(t.data, !1), yt(r, "afterAddSeries", { series: s }), e && r.redraw(i);
        })), s;
      }
      addAxis(t, e, i, s) {
        return this.createAxis(e ? "xAxis" : "yAxis", { axis: t, redraw: i, animation: s });
      }
      addColorAxis(t, e, i) {
        return this.createAxis("colorAxis", { axis: t, redraw: e, animation: i });
      }
      createAxis(t, e) {
        let i = new Bi(this, e.axis, t);
        return ge(e.redraw, !0) && this.redraw(e.animation), i;
      }
      showLoading(t) {
        let e = this, i = e.options, s = i.loading, r = function() {
          n && je(n, { left: e.plotLeft + "px", top: e.plotTop + "px", width: e.plotWidth + "px", height: e.plotHeight + "px" });
        }, n = e.loadingDiv, o = e.loadingSpan;
        n || (e.loadingDiv = n = wn("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, e.container)), o || (e.loadingSpan = o = wn("span", { className: "highcharts-loading-inner" }, null, n), kn(e, "redraw", r)), n.className = "highcharts-loading", Ft.setElementHTML(o, ge(t, i.lang.loading, "")), e.styledMode || (je(n, pi(s.style, { zIndex: 10 })), je(o, s.labelStyle), e.loadingShown || (je(n, { opacity: 0, display: "" }), xn(n, { opacity: s.style.opacity || 0.5 }, { duration: s.showDuration || 0 }))), e.loadingShown = !0, r();
      }
      hideLoading() {
        let t = this.options, e = this.loadingDiv;
        e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || xn(e, { opacity: 0 }, { duration: t.loading.hideDuration || 100, complete: function() {
          je(e, { display: "none" });
        } })), this.loadingShown = !1;
      }
      update(t, e, i, s) {
        let r, n, o, a = this, h = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, c = t.isResponsiveOptions, d = [];
        yt(a, "update", { options: t }), c || a.setResponsive(!1, !0), t = Na(t, a.options), a.userOptions = ri(a.userOptions, t);
        let p = t.chart;
        p && (ri(!0, a.options.chart, p), this.setZoomOptions(), "className" in p && a.setClassName(p.className), ("inverted" in p || "polar" in p || "type" in p) && (a.propFromSeries(), r = !0), "alignTicks" in p && (r = !0), "events" in p && Ia(this, p), Tn(p, function(m, x) {
          a.propsRequireUpdateSeries.indexOf("chart." + x) !== -1 && (n = !0), a.propsRequireDirtyBox.indexOf(x) !== -1 && (a.isDirtyBox = !0), a.propsRequireReflow.indexOf(x) === -1 || (a.isDirtyBox = !0, c || (o = !0));
        }), !a.styledMode && p.style && a.renderer.setStyle(a.options.chart.style || {})), !a.styledMode && t.colors && (this.options.colors = t.colors), Tn(t, function(m, x) {
          a[x] && typeof a[x].update == "function" ? a[x].update(m, !1) : typeof a[h[x]] == "function" ? a[h[x]](m) : x !== "colors" && a.collectionsWithUpdate.indexOf(x) === -1 && ri(!0, a.options[x], t[x]), x !== "chart" && a.propsRequireUpdateSeries.indexOf(x) !== -1 && (n = !0);
        }), this.collectionsWithUpdate.forEach(function(m) {
          t[m] && (sr(t[m]).forEach(function(x, g) {
            let b, v = ci(x.id);
            v && (b = a.get(x.id)), !b && a[m] && (b = a[m][ge(x.index, g)]) && (v && ci(b.options.id) || b.options.isInternal) && (b = void 0), b && b.coll === m && (b.update(x, !1), i && (b.touched = !0)), !b && i && a.collectionsWithInit[m] && (a.collectionsWithInit[m][0].apply(a, [x].concat(a.collectionsWithInit[m][1] || []).concat([!1])).touched = !0);
          }), i && a[m].forEach(function(x) {
            x.touched || x.options.isInternal ? delete x.touched : d.push(x);
          }));
        }), d.forEach(function(m) {
          m.chart && m.remove && m.remove(!1);
        }), r && a.axes.forEach(function(m) {
          m.update({}, !1);
        }), n && a.getSeriesOrderByLinks().forEach(function(m) {
          m.chart && m.update({}, !1);
        }, this);
        let u = p && p.width, f = p && (ir(p.height) ? za(p.height, u || a.chartWidth) : p.height);
        o || Xi(u) && u !== a.chartWidth || Xi(f) && f !== a.chartHeight ? a.setSize(u, f, s) : ge(e, !0) && a.redraw(s), yt(a, "afterUpdate", { options: t, redraw: e, animation: s });
      }
      setSubtitle(t, e) {
        this.applyDescription("subtitle", t), this.layOutTitles(e);
      }
      setCaption(t, e) {
        this.applyDescription("caption", t), this.layOutTitles(e);
      }
      showResetZoom() {
        let t = this, e = vn.lang, i = t.zooming.resetButton, s = i.theme, r = i.relativeTo === "chart" || i.relativeTo === "spacingBox" ? null : "plotBox";
        function n() {
          t.zoomOut();
        }
        yt(this, "beforeShowResetZoom", null, function() {
          t.resetZoomButton = t.renderer.button(e.resetZoom, null, null, n, s).attr({ align: i.position.align, title: e.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(i.position, !1, r);
        }), yt(this, "afterShowResetZoom");
      }
      zoomOut() {
        yt(this, "selection", { resetSelection: !0 }, () => this.transform({ reset: !0, trigger: "zoom" }));
      }
      pan(t, e) {
        let i = this, s = typeof e == "object" ? e : { enabled: e, type: "x" }, r = s.type, n = r && i[{ x: "xAxis", xy: "axes", y: "yAxis" }[r]].filter((a) => a.options.panningEnabled && !a.options.isInternal), o = i.options.chart;
        o != null && o.panning && (o.panning = s), yt(this, "pan", { originalEvent: t }, () => {
          i.transform({ axes: n, event: t, to: { x: t.chartX - (i.mouseDownX || 0), y: t.chartY - (i.mouseDownY || 0) }, trigger: "pan" }), je(i.container, { cursor: "move" });
        });
      }
      transform(t) {
        var f;
        let { axes: e = this.axes, event: i, from: s = {}, reset: r, selection: n, to: o = {}, trigger: a } = t, { inverted: h, time: c } = this, d = !1, p, u;
        for (let m of ((f = this.hoverPoints) == null || f.forEach((x) => x.setState()), e)) {
          let { horiz: x, len: g, minPointOffset: b = 0, options: v, reversed: M } = m, C = x ? "width" : "height", S = x ? "x" : "y", A = ge(o[C], m.len), T = ge(s[C], m.len), L = 10 > Math.abs(A) ? 1 : A / T, B = (s[S] || 0) + T / 2 - m.pos, W = B - ((o[S] ?? m.pos) + A / 2 - m.pos) / L, G = M && !h || !M && h ? -1 : 1;
          if (!r && (B < 0 || B > m.len)) continue;
          let D = m.toValue(W, !0) + (n || m.isOrdinal ? 0 : b * G), Y = m.toValue(W + g / L, !0) - (n || m.isOrdinal ? 0 : b * G || 0), it = m.allExtremes;
          if (D > Y && ([D, Y] = [Y, D]), L === 1 && !r && m.coll === "yAxis" && !it) {
            for (let Ut of m.series) {
              let de = Ut.getExtremes(Ut.getProcessedData(!0).modified.getColumn("y") || [], !0);
              it ?? (it = { dataMin: Number.MAX_VALUE, dataMax: -Number.MAX_VALUE }), Xi(de.dataMin) && Xi(de.dataMax) && (it.dataMin = Math.min(de.dataMin, it.dataMin), it.dataMax = Math.max(de.dataMax, it.dataMax));
            }
            m.allExtremes = it;
          }
          let { dataMin: pt, dataMax: J, min: dt, max: $ } = pi(m.getExtremes(), it || {}), rt = c.parse(v.min), lt = c.parse(v.max), wt = pt ?? rt, _t = J ?? lt, ft = Y - D, mt = m.categories ? 0 : Math.min(ft, _t - wt), Et = wt - mt * (ci(rt) ? 0 : v.minPadding), me = _t + mt * (ci(lt) ? 0 : v.maxPadding), se = m.allowZoomOutside || L === 1 || a !== "zoom" && L > 1, ue = Math.min(rt ?? Et, Et, se ? dt : Et), re = Math.max(lt ?? me, me, se ? $ : me);
          (!m.isOrdinal || m.options.overscroll || L !== 1 || r) && (D < ue && (D = ue, L >= 1 && (Y = D + ft)), Y > re && (Y = re, L >= 1 && (D = Y - ft)), (r || m.series.length && (D !== dt || Y !== $) && D >= ue && Y <= re) && (n ? n[m.coll].push({ axis: m, min: D, max: Y }) : (m.isPanning = a !== "zoom", m.isPanning && (u = !0), m.setExtremes(r ? void 0 : D, r ? void 0 : Y, !1, !1, { move: W, trigger: a, scale: L }), !r && (D > ue || Y < re) && a !== "mousewheel" && (p = !0)), d = !0), i && (this[x ? "mouseDownX" : "mouseDownY"] = i[x ? "chartX" : "chartY"]));
        }
        return d && (n ? yt(this, "selection", n, () => {
          delete t.selection, t.trigger = "zoom", this.transform(t);
        }) : (!p || u || this.resetZoomButton ? !p && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()) : this.showResetZoom(), this.redraw(a === "zoom" && (this.options.chart.animation ?? this.pointCount < 100)))), d;
      }
    }
    pi(ui.prototype, { callbacks: [], collectionsWithInit: { xAxis: [ui.prototype.addAxis, [!0]], yAxis: [ui.prototype.addAxis, [!1]], series: [ui.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"], propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"], propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"] });
    let { stop: Cp } = fe, { composed: Tp } = _, { addEvent: fi, createElement: rr, css: An, defined: Pn, erase: Ap, merge: Fa, pushUnique: Ha } = U;
    function Pp() {
      let l = this.scrollablePlotArea;
      (this.scrollablePixelsX || this.scrollablePixelsY) && !l && (this.scrollablePlotArea = l = new ps(this)), l == null || l.applyFixed();
    }
    function Xa() {
      this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0);
    }
    class ps {
      static compose(t, e, i) {
        Ha(Tp, this.compose) && (fi(t, "afterInit", Xa), fi(e, "afterSetChartSize", (s) => this.afterSetSize(s.target, s)), fi(e, "render", Pp), fi(i, "show", Xa));
      }
      static afterSetSize(t, e) {
        let i, s, r, { minWidth: n, minHeight: o } = t.options.chart.scrollablePlotArea || {}, { clipBox: a, plotBox: h, inverted: c, renderer: d } = t;
        if (!d.forExport && (n ? (t.scrollablePixelsX = i = Math.max(0, n - t.chartWidth), i && (t.scrollablePlotBox = Fa(t.plotBox), h.width = t.plotWidth += i, a[c ? "height" : "width"] += i, r = !0)) : o && (t.scrollablePixelsY = s = Math.max(0, o - t.chartHeight), Pn(s) && (t.scrollablePlotBox = Fa(t.plotBox), h.height = t.plotHeight += s, a[c ? "width" : "height"] += s, r = !1)), Pn(r) && !e.skipAxes)) for (let p of t.axes) (p.horiz === r || t.hasParallelCoordinates && p.coll === "yAxis") && (p.setAxisSize(), p.setAxisTranslation());
      }
      constructor(t) {
        var u;
        let e, i = t.options.chart, s = es.getRendererType(), r = i.scrollablePlotArea || {}, n = this.moveFixedElements.bind(this), o = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
        t.scrollablePixelsX && (o.overflowX = "auto"), t.scrollablePixelsY && (o.overflowY = "auto"), this.chart = t;
        let a = this.parentDiv = rr("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, t.renderTo), h = this.scrollingContainer = rr("div", { className: "highcharts-scrolling" }, o, a), c = this.innerContainer = rr("div", { className: "highcharts-inner-container" }, void 0, h), d = this.fixedDiv = rr("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (((u = i.style) == null ? void 0 : u.zIndex) || 0) + 2, top: 0 }, void 0, !0), p = this.fixedRenderer = new s(d, t.chartWidth, t.chartHeight, i.style);
        this.mask = p.path().attr({ fill: i.backgroundColor || "#fff", "fill-opacity": r.opacity ?? 0.85, zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), h.parentNode.insertBefore(d, h), An(t.renderTo, { overflow: "visible" }), fi(t, "afterShowResetZoom", n), fi(t, "afterApplyDrilldown", n), fi(t, "afterLayOutTitles", n), fi(h, "scroll", () => {
          let { pointer: f, hoverPoint: m } = t;
          f && (delete f.chartPosition, m && (e = m), f.runPointActions(void 0, e, !0));
        }), c.appendChild(t.container);
      }
      applyFixed() {
        var B;
        let { chart: t, fixedRenderer: e, isDirty: i, scrollingContainer: s } = this, { axisOffset: r, chartWidth: n, chartHeight: o, container: a, plotHeight: h, plotLeft: c, plotTop: d, plotWidth: p, scrollablePixelsX: u = 0, scrollablePixelsY: f = 0 } = t, { scrollPositionX: m = 0, scrollPositionY: x = 0 } = t.options.chart.scrollablePlotArea || {}, g = n + u, b = o + f;
        e.setSize(n, o), (i ?? !0) && (this.isDirty = !1, this.moveFixedElements()), Cp(t.container), An(a, { width: `${g}px`, height: `${b}px` }), t.renderer.boxWrapper.attr({ width: g, height: b, viewBox: [0, 0, g, b].join(" ") }), (B = t.chartBackground) == null || B.attr({ width: g, height: b }), An(s, { width: `${n}px`, height: `${o}px` }), Pn(i) || (s.scrollLeft = u * m, s.scrollTop = f * x);
        let v = d - r[0] - 1, M = c - r[3] - 1, C = d + h + r[2] + 1, S = c + p + r[1] + 1, A = c + p - u, T = d + h - f, L = [["M", 0, 0]];
        u ? L = [["M", 0, v], ["L", c - 1, v], ["L", c - 1, C], ["L", 0, C], ["Z"], ["M", A, v], ["L", n, v], ["L", n, C], ["L", A, C], ["Z"]] : f && (L = [["M", M, 0], ["L", M, d - 1], ["L", S, d - 1], ["L", S, 0], ["Z"], ["M", M, T], ["L", M, o], ["L", S, o], ["L", S, T], ["Z"]]), t.redrawTrigger !== "adjustHeight" && this.mask.attr({ d: L });
      }
      moveFixedElements() {
        let t, { container: e, inverted: i, scrollablePixelsX: s, scrollablePixelsY: r } = this.chart, n = this.fixedRenderer, o = ps.fixedSelectors;
        if (s && !i ? t = ".highcharts-yaxis" : s && i || r && !i ? t = ".highcharts-xaxis" : r && i && (t = ".highcharts-yaxis"), t && !(this.chart.hasParallelCoordinates && t === ".highcharts-yaxis")) for (let a of [`${t}:not(.highcharts-radial-axis)`, `${t}-labels:not(.highcharts-radial-axis-labels)`]) Ha(o, a);
        else for (let a of [".highcharts-xaxis", ".highcharts-yaxis"]) for (let h of [`${a}:not(.highcharts-radial-axis)`, `${a}-labels:not(.highcharts-radial-axis-labels)`]) Ap(o, h);
        for (let a of o) [].forEach.call(e.querySelectorAll(a), (h) => {
          (h.namespaceURI === n.SVG_NS ? n.box : n.box.parentNode).appendChild(h), h.style.pointerEvents = "auto";
        });
      }
    }
    ps.fixedSelectors = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-drillup-button", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-range-selector-group", ".highcharts-reset-zoom", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"];
    let { format: Ep } = He, { series: Op } = Vt, { destroyObjectProperties: Lp, fireEvent: Ya, getAlignFactor: En, isNumber: On, pick: us } = U, Ga = class {
      constructor(l, t, e, i, s) {
        let r = l.chart.inverted, n = l.reversed;
        this.axis = l;
        let o = this.isNegative = !!e != !!n;
        this.options = t = t || {}, this.x = i, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = s, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = { align: t.align || (r ? o ? "left" : "right" : "center"), verticalAlign: t.verticalAlign || (r ? "middle" : o ? "bottom" : "top"), y: t.y, x: t.x }, this.textAlign = t.textAlign || (r ? o ? "right" : "left" : "center");
      }
      destroy() {
        Lp(this, this.axis);
      }
      render(l) {
        let t = this.axis.chart, e = this.options, i = e.format, s = i ? Ep(i, this, t) : e.formatter.call(this);
        if (this.label) this.label.attr({ text: s, visibility: "hidden" });
        else {
          this.label = t.renderer.label(s, null, void 0, e.shape, void 0, void 0, e.useHTML, !1, "stack-labels");
          let r = { r: e.borderRadius || 0, text: s, padding: us(e.padding, 5), visibility: "hidden" };
          t.styledMode || (r.fill = e.backgroundColor, r.stroke = e.borderColor, r["stroke-width"] = e.borderWidth, this.label.css(e.style || {})), this.label.attr(r), this.label.added || this.label.add(l);
        }
        this.label.labelrank = t.plotSizeY, Ya(this, "afterRender");
      }
      setOffset(l, t, e, i, s, r) {
        let { alignOptions: n, axis: o, label: a, options: h, textAlign: c } = this, d = o.chart, p = this.getStackBox({ xOffset: l, width: t, boxBottom: e, boxTop: i, defaultX: s, xAxis: r }), { verticalAlign: u } = n;
        if (a && p) {
          let f = a.getBBox(void 0, 0), m = a.padding, x = us(h.overflow, "justify") === "justify", g;
          n.x = h.x || 0, n.y = h.y || 0;
          let { x: b, y: v } = this.adjustStackPosition({ labelBox: f, verticalAlign: u, textAlign: c });
          p.x -= b, p.y -= v, a.align(n, !1, p), (g = d.isInsidePlot(a.alignAttr.x + n.x + b, a.alignAttr.y + n.y + v)) || (x = !1), x && Op.prototype.justifyDataLabel.call(o, a, n, a.alignAttr, f, p), a.attr({ x: a.alignAttr.x, y: a.alignAttr.y, rotation: h.rotation, rotationOriginX: f.width * En(h.textAlign || "center"), rotationOriginY: f.height / 2 }), us(!x && h.crop, !0) && (g = On(a.x) && On(a.y) && d.isInsidePlot(a.x - m + (a.width || 0), a.y) && d.isInsidePlot(a.x + m, a.y)), a[g ? "show" : "hide"]();
        }
        Ya(this, "afterSetOffset", { xOffset: l, width: t });
      }
      adjustStackPosition({ labelBox: l, verticalAlign: t, textAlign: e }) {
        return { x: l.width / 2 + l.width / 2 * (2 * En(e) - 1), y: l.height / 2 * 2 * (1 - En(t)) };
      }
      getStackBox(l) {
        let t = this.axis, e = t.chart, { boxTop: i, defaultX: s, xOffset: r, width: n, boxBottom: o } = l, a = t.stacking.usePercentage ? 100 : us(i, this.total, 0), h = t.toPixels(a), c = l.xAxis || e.xAxis[0], d = us(s, c.translate(this.x)) + r, p = Math.abs(h - t.toPixels(o || On(t.min) && t.logarithmic && t.logarithmic.lin2log(t.min) || 0)), u = e.inverted, f = this.isNegative;
        return u ? { x: (f ? h : h - p) - e.plotLeft, y: c.height - d - n + c.top - e.plotTop, width: p, height: n } : { x: d + c.transB - e.plotLeft, y: (f ? h - p : h) - e.plotTop, width: n, height: p };
      }
    }, { getDeferredAnimation: _p } = fe, { series: { prototype: Ip } } = Vt, { addEvent: ja, correctFloat: fs, defined: Ua, destroyObjectProperties: Dp, fireEvent: Bp, isNumber: Ln, objectEach: Ti, pick: _n } = U;
    function Rp() {
      let l = this.inverted;
      this.axes.forEach((t) => {
        t.stacking && t.stacking.stacks && t.hasVisibleSeries && (t.stacking.oldStacks = t.stacking.stacks);
      }), this.series.forEach((t) => {
        let e = t.xAxis && t.xAxis.options || {};
        t.options.stacking && t.reserveSpace() && (t.stackKey = [t.type, _n(t.options.stack, ""), l ? e.top : e.left, l ? e.height : e.width].join(","));
      });
    }
    function Np() {
      var t;
      let l = this.stacking;
      if (l) {
        let e = l.stacks;
        Ti(e, (i, s) => {
          Dp(i), delete e[s];
        }), (t = l.stackTotalGroup) == null || t.destroy();
      }
    }
    function zp() {
      this.stacking || (this.stacking = new Gp(this));
    }
    function Wp(l, t, e, i) {
      return !Ua(l) || l.x !== t || i && l.stackKey !== i ? l = { x: t, index: 0, key: i, stackKey: i } : l.index++, l.key = [e, t, l.index].join(","), l;
    }
    function Fp() {
      let l, t = this, e = t.yAxis, i = t.stackKey || "", s = e.stacking.stacks, r = t.getColumn("x", !0), n = t.options.stacking, o = t[n + "Stacker"];
      o && [i, "-" + i].forEach((a) => {
        var u;
        let h = r.length, c, d, p;
        for (; h--; ) c = r[h], l = t.getStackIndicator(l, c, t.index, a), d = (u = s[a]) == null ? void 0 : u[c], (p = d == null ? void 0 : d.points[l.key || ""]) && o.call(t, p, d, h);
      });
    }
    function Hp(l, t, e) {
      let i = t.total ? 100 / t.total : 0;
      l[0] = fs(l[0] * i), l[1] = fs(l[1] * i), this.stackedYData[e] = l[1];
    }
    function Xp(l) {
      (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && this.chart.series.length > 1 ? Ip.setStackedPoints.call(this, l, "group") : l.stacking.resetStacks());
    }
    function Yp(l, t) {
      var T, L;
      let e, i, s, r, n, o, a, h = t || this.options.stacking;
      if (!h || !this.reserveSpace() || ({ group: "xAxis" }[h] || "yAxis") !== l.coll) return;
      let c = this.getColumn("x", !0), d = this.getColumn(this.pointValKey || "y", !0), p = [], u = d.length, f = this.options, m = f.threshold || 0, x = f.startFromThreshold ? m : 0, g = f.stack, b = t ? `${this.type},${h}` : this.stackKey || "", v = "-" + b, M = this.negStacks, C = l.stacking, S = C.stacks, A = C.oldStacks;
      for (C.stacksTouched += 1, a = 0; a < u; a++) {
        let B = c[a] || 0, W = d[a], G = Ln(W) && W || 0;
        o = (e = this.getStackIndicator(e, B, this.index)).key || "", S[n = (i = M && G < (x ? 0 : m)) ? v : b] || (S[n] = {}), S[n][B] || ((T = A[n]) != null && T[B] ? (S[n][B] = A[n][B], S[n][B].total = null) : S[n][B] = new Ga(l, l.options.stackLabels, !!i, B, g)), s = S[n][B], W !== null ? (s.points[o] = s.points[this.index] = [_n(s.cumulative, x)], Ua(s.cumulative) || (s.base = o), s.touched = C.stacksTouched, e.index > 0 && this.singleStacks === !1 && (s.points[o][0] = s.points[this.index + "," + B + ",0"][0])) : (delete s.points[o], delete s.points[this.index]);
        let D = s.total || 0;
        h === "percent" ? (r = i ? b : v, D = M && ((L = S[r]) != null && L[B]) ? (r = S[r][B]).total = Math.max(r.total || 0, D) + Math.abs(G) : fs(D + Math.abs(G))) : h === "group" ? Ln(W) && D++ : D = fs(D + G), h === "group" ? s.cumulative = (D || 1) - 1 : s.cumulative = fs(_n(s.cumulative, x) + G), s.total = D, W !== null && (s.points[o].push(s.cumulative), p[a] = s.cumulative, s.hasValidPoints = !0);
      }
      h === "percent" && (C.usePercentage = !0), h !== "group" && (this.stackedYData = p), C.oldStacks = {};
    }
    class Gp {
      constructor(t) {
        this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t;
      }
      buildStacks() {
        let t, e, i = this.axis, s = i.series, r = i.coll === "xAxis", n = i.options.reversedStacks, o = s.length;
        for (this.resetStacks(), this.usePercentage = !1, e = o; e--; ) t = s[n ? e : o - e - 1], r && t.setGroupedPoints(i), t.setStackedPoints(i);
        if (!r) for (e = 0; e < o; e++) s[e].modifyStacks();
        Bp(i, "afterBuildStacks");
      }
      cleanStacks() {
        this.oldStacks && (this.stacks = this.oldStacks, Ti(this.stacks, (t) => {
          Ti(t, (e) => {
            e.cumulative = e.total;
          });
        }));
      }
      resetStacks() {
        Ti(this.stacks, (t) => {
          Ti(t, (e, i) => {
            Ln(e.touched) && e.touched < this.stacksTouched ? (e.destroy(), delete t[i]) : (e.total = null, e.cumulative = null);
          });
        });
      }
      renderStackTotals() {
        var o;
        let t = this.axis, e = t.chart, i = e.renderer, s = this.stacks, r = _p(e, ((o = t.options.stackLabels) == null ? void 0 : o.animation) || !1), n = this.stackTotalGroup = this.stackTotalGroup || i.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
        n.translate(e.plotLeft, e.plotTop), Ti(s, (a) => {
          Ti(a, (h) => {
            h.render(n);
          });
        }), n.animate({ opacity: 1 }, r);
      }
    }
    (xt || (xt = {})).compose = function(l, t, e) {
      let i = t.prototype, s = e.prototype;
      i.getStacks || (ja(l, "init", zp), ja(l, "destroy", Np), i.getStacks = Rp, s.getStackIndicator = Wp, s.modifyStacks = Fp, s.percentStacker = Hp, s.setGroupedPoints = Xp, s.setStackedPoints = Yp);
    };
    let jp = xt, { defined: Up, merge: Va, isObject: Vp } = U;
    class qa extends Le {
      drawGraph() {
        let t = this.options, e = (this.gappedPath || this.getGraphPath).call(this), i = this.chart.styledMode;
        [this, ...this.zones].forEach((s, r) => {
          let n, o = s.graph, a = o ? "animate" : "attr", h = s.dashStyle || t.dashStyle;
          o ? (o.endX = this.preventGraphAnimation ? null : e.xMap, o.animate({ d: e })) : e.length && (s.graph = o = this.chart.renderer.path(e).addClass("highcharts-graph" + (r ? ` highcharts-zone-graph-${r - 1} ` : " ") + (r && s.className || "")).attr({ zIndex: 1 }).add(this.group)), o && !i && (n = { stroke: !r && t.lineColor || s.color || this.color || "#cccccc", "stroke-width": t.lineWidth || 0, fill: this.fillGraph && this.color || "none" }, h ? n.dashstyle = h : t.linecap !== "square" && (n["stroke-linecap"] = n["stroke-linejoin"] = "round"), o[a](n).shadow(r < 2 && t.shadow && Va({ filterUnits: "userSpaceOnUse" }, Vp(t.shadow) ? t.shadow : {}))), o && (o.startX = e.xMap, o.isArea = e.isArea);
        });
      }
      getGraphPath(t, e, i) {
        let s = this, r = s.options, n = [], o = [], a, h = r.step, c = (t = t || s.points).reversed;
        return c && t.reverse(), (h = { right: 1, center: 2 }[h] || h && 3) && c && (h = 4 - h), (t = this.getValidPoints(t, !1, !(r.connectNulls && !e && !i))).forEach(function(d, p) {
          let u, f = d.plotX, m = d.plotY, x = t[p - 1], g = d.isNull || typeof m != "number";
          (d.leftCliff || x && x.rightCliff) && !i && (a = !0), g && !Up(e) && p > 0 ? a = !r.connectNulls : g && !e ? a = !0 : (p === 0 || a ? u = [["M", d.plotX, d.plotY]] : s.getPointSpline ? u = [s.getPointSpline(t, d, p)] : h ? (u = h === 1 ? [["L", x.plotX, m]] : h === 2 ? [["L", (x.plotX + f) / 2, x.plotY], ["L", (x.plotX + f) / 2, m]] : [["L", f, x.plotY]]).push(["L", f, m]) : u = [["L", f, m]], o.push(d.x), h && (o.push(d.x), h === 2 && o.push(d.x)), n.push.apply(n, u), a = !1);
        }), n.xMap = o, s.graphPath = n, n;
      }
    }
    qa.defaultOptions = Va(Le.defaultOptions, { legendSymbol: "lineMarker" }), Vt.registerSeriesType("line", qa);
    let { seriesTypes: { line: In } } = Vt, { extend: qp, merge: $p, objectEach: Kp, pick: nr } = U;
    class Dn extends In {
      drawGraph() {
        this.areaPath = [], super.drawGraph.apply(this);
        let { areaPath: t, options: e } = this;
        [this, ...this.zones].forEach((i, s) => {
          let r = {}, n = i.fillColor || e.fillColor, o = i.area, a = o ? "animate" : "attr";
          o ? (o.endX = this.preventGraphAnimation ? null : t.xMap, o.animate({ d: t })) : (r.zIndex = 0, (o = i.area = this.chart.renderer.path(t).addClass("highcharts-area" + (s ? ` highcharts-zone-area-${s - 1} ` : " ") + (s && i.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (r.fill = n || i.color || this.color, r["fill-opacity"] = n ? 1 : e.fillOpacity ?? 0.75, o.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })), o[a](r), o.startX = t.xMap, o.shiftUnit = e.step ? 2 : 1;
        });
      }
      getGraphPath(t) {
        let e, i, s, r = In.prototype.getGraphPath, n = this.options, o = n.stacking, a = this.yAxis, h = [], c = [], d = this.index, p = a.stacking.stacks[this.stackKey], u = n.threshold, f = Math.round(a.getThreshold(n.threshold)), m = nr(n.connectNulls, o === "percent"), x = function(S, A, T) {
          let L = t[S], B = o && p[L.x].points[d], W = L[T + "Null"] || 0, G = L[T + "Cliff"] || 0, D, Y, it = !0;
          G || W ? (D = (W ? B[0] : B[1]) + G, Y = B[0] + G, it = !!W) : !o && t[A] && t[A].isNull && (D = Y = u), D !== void 0 && (c.push({ plotX: e, plotY: D === null ? f : a.getThreshold(D), isNull: it, isCliff: !0 }), h.push({ plotX: e, plotY: Y === null ? f : a.getThreshold(Y), doCurve: !1 }));
        };
        t = t || this.points, o && (t = this.getStackPoints(t));
        for (let S = 0, A = t.length; S < A; ++S) o || (t[S].leftCliff = t[S].rightCliff = t[S].leftNull = t[S].rightNull = void 0), i = t[S].isNull, e = nr(t[S].rectPlotX, t[S].plotX), s = o ? nr(t[S].yBottom, f) : f, i && !m || (m || x(S, S - 1, "left"), i && !o && m || (c.push(t[S]), h.push({ x: S, plotX: e, plotY: s })), m || x(S, S + 1, "right"));
        let g = r.call(this, c, !0, !0);
        h.reversed = !0;
        let b = r.call(this, h, !0, !0), v = b[0];
        v && v[0] === "M" && (b[0] = ["L", v[1], v[2]]);
        let M = g.concat(b);
        M.length && M.push(["Z"]);
        let C = r.call(this, c, !1, m);
        return this.chart.series.length > 1 && o && c.some((S) => S.isCliff) && (M.hasStackedCliffs = C.hasStackedCliffs = !0), M.xMap = g.xMap, this.areaPath = M, C;
      }
      getStackPoints(t) {
        let e = this, i = [], s = [], r = this.xAxis, n = this.yAxis, o = n.stacking.stacks[this.stackKey], a = {}, h = n.series, c = h.length, d = n.options.reversedStacks ? 1 : -1, p = h.indexOf(e);
        if (t = t || this.points, this.options.stacking) {
          for (let f = 0; f < t.length; f++) t[f].leftNull = t[f].rightNull = void 0, a[t[f].x] = t[f];
          Kp(o, function(f, m) {
            f.total !== null && s.push(m);
          }), s.sort(function(f, m) {
            return f - m;
          });
          let u = h.map((f) => f.visible);
          s.forEach(function(f, m) {
            let x = 0, g, b;
            if (a[f] && !a[f].isNull) i.push(a[f]), [-1, 1].forEach(function(v) {
              let M = v === 1 ? "rightNull" : "leftNull", C = o[s[m + v]], S = 0;
              if (C) {
                let A = p;
                for (; A >= 0 && A < c; ) {
                  let T = h[A].index;
                  !(g = C.points[T]) && (T === e.index ? a[f][M] = !0 : u[A] && (b = o[f].points[T]) && (S -= b[1] - b[0])), A += d;
                }
              }
              a[f][v === 1 ? "rightCliff" : "leftCliff"] = S;
            });
            else {
              let v = p;
              for (; v >= 0 && v < c; ) {
                let M = h[v].index;
                if (g = o[f].points[M]) {
                  x = g[1];
                  break;
                }
                v += d;
              }
              x = nr(x, 0), x = n.translate(x, 0, 1, 0, 1), i.push({ isNull: !0, plotX: r.translate(f, 0, 0, 0, 1), x: f, plotY: x, yBottom: x });
            }
          });
        }
        return i;
      }
    }
    Dn.defaultOptions = $p(In.defaultOptions, { threshold: 0, legendSymbol: "areaMarker" }), qp(Dn.prototype, { singleStacks: !1 }), Vt.registerSeriesType("area", Dn);
    let { line: $a } = Vt.seriesTypes, { merge: Zp, pick: or } = U;
    class Bn extends $a {
      getPointSpline(t, e, i) {
        let s, r, n, o, a = e.plotX || 0, h = e.plotY || 0, c = t[i - 1], d = t[i + 1];
        function p(f) {
          return f && !f.isNull && f.doCurve !== !1 && !e.isCliff;
        }
        if (p(c) && p(d)) {
          let f = c.plotX || 0, m = c.plotY || 0, x = d.plotX || 0, g = d.plotY || 0, b = 0;
          s = (1.5 * a + f) / 2.5, r = (1.5 * h + m) / 2.5, n = (1.5 * a + x) / 2.5, o = (1.5 * h + g) / 2.5, n !== s && (b = (o - r) * (n - a) / (n - s) + h - o), r += b, o += b, r > m && r > h ? (r = Math.max(m, h), o = 2 * h - r) : r < m && r < h && (r = Math.min(m, h), o = 2 * h - r), o > g && o > h ? (o = Math.max(g, h), r = 2 * h - o) : o < g && o < h && (o = Math.min(g, h), r = 2 * h - o), e.rightContX = n, e.rightContY = o, e.controlPoints = { low: [s, r], high: [n, o] };
        }
        let u = ["C", or(c.rightContX, c.plotX, 0), or(c.rightContY, c.plotY, 0), or(s, a, 0), or(r, h, 0), a, h];
        return c.rightContX = c.rightContY = void 0, u;
      }
    }
    Bn.defaultOptions = Zp($a.defaultOptions), Vt.registerSeriesType("spline", Bn);
    let Ka = Bn, { area: Jp, area: { prototype: Rn } } = Vt.seriesTypes, { extend: Qp, merge: tu } = U;
    class Nn extends Ka {
    }
    Nn.defaultOptions = tu(Ka.defaultOptions, Jp.defaultOptions), Qp(Nn.prototype, { getGraphPath: Rn.getGraphPath, getStackPoints: Rn.getStackPoints, drawGraph: Rn.drawGraph }), Vt.registerSeriesType("areaspline", Nn);
    let { animObject: eu } = fe, { parse: iu } = ie, { noop: su } = _, { clamp: ar, crisp: lr, defined: Za, extend: Ja, fireEvent: Qa, isArray: tl, isNumber: hr, merge: zn, pick: Yi, objectEach: ru } = U;
    class dr extends Le {
      animate(t) {
        let e, i, s = this, r = this.yAxis, n = r.pos, o = r.reversed, a = s.options, { clipOffset: h, inverted: c } = this.chart, d = {}, p = c ? "translateX" : "translateY";
        t && h ? (d.scaleY = 1e-3, i = ar(r.toPixels(a.threshold || 0), n, n + r.len), c ? (i += o ? -Math.floor(h[0]) : Math.ceil(h[2]), d.translateX = i - r.len) : (i += o ? Math.ceil(h[0]) : -Math.floor(h[2]), d.translateY = i), s.clipBox && s.setClip(), s.group.attr(d)) : (e = Number(s.group.attr(p)), s.group.animate({ scaleY: 1 }, Ja(eu(s.options.animation), { step: function(u, f) {
          s.group && (d[p] = e + f.pos * (n - e), s.group.attr(d));
        } })));
      }
      init(t, e) {
        super.init.apply(this, arguments);
        let i = this;
        (t = i.chart).hasRendered && t.series.forEach(function(s) {
          s.type === i.type && (s.isDirty = !0);
        });
      }
      getColumnMetrics() {
        var m, x;
        let t = this, e = t.options, i = t.xAxis, s = t.yAxis, r = i.options.reversedStacks, n = i.reversed && !r || !i.reversed && r, o = {}, a, h = 0;
        e.grouping === !1 ? h = 1 : t.chart.series.forEach(function(g) {
          let b, v = g.yAxis, M = g.options;
          g.type === t.type && g.reserveSpace() && s.len === v.len && s.pos === v.pos && (M.stacking && M.stacking !== "group" ? (o[a = g.stackKey] === void 0 && (o[a] = h++), b = o[a]) : M.grouping !== !1 && (b = h++), g.columnIndex = b);
        });
        let c = Math.min(Math.abs(i.transA) * (!((m = i.brokenAxis) != null && m.hasBreaks) && ((x = i.ordinal) == null ? void 0 : x.slope) || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len), d = c * e.groupPadding, p = (c - 2 * d) / (h || 1), u = Math.min(e.maxPointWidth || i.len, Yi(e.pointWidth, p * (1 - 2 * e.pointPadding))), f = (t.columnIndex || 0) + (n ? 1 : 0);
        return t.columnMetrics = { width: u, offset: (p - u) / 2 + (d + f * p - c / 2) * (n ? -1 : 1), paddedWidth: p, columnCount: h }, t.columnMetrics;
      }
      crispCol(t, e, i, s) {
        let r = this.borderWidth, n = this.chart.inverted;
        return s = lr(e + s, r, n) - (e = lr(e, r, n)), this.options.crisp && (i = lr(t + i, r) - (t = lr(t, r))), { x: t, y: e, width: i, height: s };
      }
      adjustForMissingColumns(t, e, i, s) {
        var r;
        if (!i.isNull && s.columnCount > 1) {
          let n = this.xAxis.series.filter((c) => c.visible).map((c) => c.index), o = 0, a = 0;
          ru((r = this.xAxis.stacking) == null ? void 0 : r.stacks, (c) => {
            var f;
            let d = typeof i.x == "number" ? (f = c[i.x.toString()]) == null ? void 0 : f.points : void 0, p = d == null ? void 0 : d[this.index], u = {};
            if (d && tl(p)) {
              let m = this.index, x = Object.keys(d).filter((g) => !g.match(",") && d[g] && d[g].length > 1).map(parseFloat).filter((g) => n.indexOf(g) !== -1).filter((g) => {
                let b = this.chart.series[g].options, v = b.stacking && b.stack;
                if (Za(v)) {
                  if (hr(u[v])) return m === g && (m = u[v]), !1;
                  u[v] = g;
                }
                return !0;
              }).sort((g, b) => b - g);
              o = x.indexOf(m), a = x.length;
            }
          }), o = this.xAxis.reversed ? a - 1 - o : o;
          let h = (a - 1) * s.paddedWidth + e;
          t = (i.plotX || 0) + h / 2 - e - o * s.paddedWidth;
        }
        return t;
      }
      translate() {
        let t = this, e = t.chart, i = t.options, s = t.dense = t.closestPointRange * t.xAxis.transA < 2, r = t.borderWidth = Yi(i.borderWidth, s ? 0 : 1), n = t.xAxis, o = t.yAxis, a = i.threshold, h = Yi(i.minPointLength, 5), c = t.getColumnMetrics(), d = c.width, p = t.pointXOffset = c.offset, u = t.dataMin, f = t.dataMax, m = t.translatedThreshold = o.getThreshold(a), x = t.barW = Math.max(d, 1 + 2 * r);
        i.pointPadding && i.crisp && (x = Math.ceil(x)), Le.prototype.translate.apply(t), t.points.forEach(function(g) {
          let b = Yi(g.yBottom, m), v = 999 + Math.abs(b), M = g.plotX || 0, C = ar(g.plotY, -v, o.len + v), S, A = Math.min(C, b), T = Math.max(C, b) - A, L = d, B = M + p, W = x;
          h && Math.abs(T) < h && (T = h, S = !o.reversed && !g.negative || o.reversed && g.negative, hr(a) && hr(f) && g.y === a && f <= a && (o.min || 0) < a && (u !== f || (o.max || 0) <= a) && (S = !S, g.negative = !g.negative), A = Math.abs(A - m) > h ? b - h : m - (S ? h : 0)), Za(g.options.pointWidth) && (B -= Math.round(((L = W = Math.ceil(g.options.pointWidth)) - d) / 2)), i.centerInCategory && (B = t.adjustForMissingColumns(B, L, g, c)), g.barX = B, g.pointWidth = L, g.tooltipPos = e.inverted ? [ar(o.len + o.pos - e.plotLeft - C, o.pos - e.plotLeft, o.len + o.pos - e.plotLeft), n.len + n.pos - e.plotTop - B - W / 2, T] : [n.left - e.plotLeft + B + W / 2, ar(C + o.pos - e.plotTop, o.pos - e.plotTop, o.len + o.pos - e.plotTop), T], g.shapeType = t.pointClass.prototype.shapeType || "roundedRect", g.shapeArgs = t.crispCol(B, g.isNull ? m : A, W, g.isNull ? 0 : T);
        }), Qa(this, "afterColumnTranslate");
      }
      drawGraph() {
        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
      }
      pointAttribs(t, e) {
        let i = this.options, s = this.pointAttrToOptions || {}, r = s.stroke || "borderColor", n = s["stroke-width"] || "borderWidth", o, a, h, c = t && t.color || this.color, d = t && t[r] || i[r] || c, p = t && t.options.dashStyle || i.dashStyle, u = t && t[n] || i[n] || this[n] || 0, f = Yi(t && t.opacity, i.opacity, 1);
        t && this.zones.length && (a = t.getZone(), c = t.options.color || a && (a.color || t.nonZonedColor) || this.color, a && (d = a.borderColor || d, p = a.dashStyle || p, u = a.borderWidth || u)), e && t && (h = (o = zn(i.states[e], t.options.states && t.options.states[e] || {})).brightness, c = o.color || h !== void 0 && iu(c).brighten(o.brightness).get() || c, d = o[r] || d, u = o[n] || u, p = o.dashStyle || p, f = Yi(o.opacity, f));
        let m = { fill: c, stroke: d, "stroke-width": u, opacity: f };
        return p && (m.dashstyle = p), m;
      }
      drawPoints(t = this.points) {
        let e, i = this, s = this.chart, r = i.options, n = s.renderer, o = r.animationLimit || 250;
        t.forEach(function(a) {
          let h = a.plotY, c = a.graphic, d = !!c, p = c && s.pointCount < o ? "animate" : "attr";
          hr(h) && a.y !== null ? (e = a.shapeArgs, c && a.hasNewShapeType() && (c = c.destroy()), i.enabledDataSorting && (a.startXPos = i.xAxis.reversed ? -(e && e.width || 0) : i.xAxis.width), !c && (a.graphic = c = n[a.shapeType](e).add(a.group || i.group), c && i.enabledDataSorting && s.hasRendered && s.pointCount < o && (c.attr({ x: a.startXPos }), d = !0, p = "animate")), c && d && c[p](zn(e)), s.styledMode || c[p](i.pointAttribs(a, a.selected && "select")).shadow(a.allowShadow !== !1 && r.shadow), c && (c.addClass(a.getClassName(), !0), c.attr({ visibility: a.visible ? "inherit" : "hidden" }))) : c && (a.graphic = c.destroy());
        });
      }
      drawTracker(t = this.points) {
        let e, i = this, s = i.chart, r = s.pointer, n = function(o) {
          r == null || r.normalize(o);
          let a = r == null ? void 0 : r.getPointFromEvent(o), h = !s.scrollablePlotArea || s.isInsidePlot(o.chartX - s.plotLeft, o.chartY - s.plotTop, { visiblePlotOnly: !0 });
          r && a && i.options.enableMouseTracking && h && (r.isDirectTouch = !0, a.onMouseOver(o));
        };
        t.forEach(function(o) {
          e = tl(o.dataLabels) ? o.dataLabels : o.dataLabel ? [o.dataLabel] : [], o.graphic && (o.graphic.element.point = o), e.forEach(function(a) {
            (a.div || a.element).point = o;
          });
        }), i._hasTracking || (i.trackerGroups.forEach(function(o) {
          i[o] && (i[o].addClass("highcharts-tracker").on("mouseover", n).on("mouseout", function(a) {
            r == null || r.onTrackerMouseOut(a);
          }).on("touchstart", n), !s.styledMode && i.options.cursor && i[o].css({ cursor: i.options.cursor }));
        }), i._hasTracking = !0), Qa(this, "afterDrawTracker");
      }
      remove() {
        let t = this, e = t.chart;
        e.hasRendered && e.series.forEach(function(i) {
          i.type === t.type && (i.isDirty = !0);
        }), Le.prototype.remove.apply(t, arguments);
      }
    }
    dr.defaultOptions = zn(Le.defaultOptions, { borderRadius: 3, centerInCategory: !1, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" }), Ja(dr.prototype, { directTouch: !0, getSymbol: su, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }), Vt.registerSeriesType("column", dr);
    let cr = dr, { getDeferredAnimation: nu } = fe, { format: ou } = He, { defined: Ai, extend: el, fireEvent: Wn, getAlignFactor: il, isArray: gi, isString: Fn, merge: gs, objectEach: au, pick: ms, pInt: lu, splat: sl } = U;
    (function(l) {
      function t() {
        return a(this).some((c) => c == null ? void 0 : c.enabled);
      }
      function e(c, d, p, u, f) {
        var B;
        let { chart: m, enabledDataSorting: x } = this, g = this.isCartesian && m.inverted, b = c.plotX, v = c.plotY, M = p.rotation || 0, C = Ai(b) && Ai(v) && m.isInsidePlot(b, Math.round(v), { inverted: g, paneCoordinates: !0, series: this }), S = M === 0 && ms(p.overflow, x ? "none" : "justify") === "justify", A = this.visible && c.visible !== !1 && Ai(b) && (c.series.forceDL || x && !S || C || ms(p.inside, !!this.options.stacking) && u && m.isInsidePlot(b, g ? u.x + 1 : u.y + u.height - 1, { inverted: g, paneCoordinates: !0, series: this })), T = c.pos();
        if (A && T) {
          var L;
          let W = d.getBBox(), G = d.getBBox(void 0, 0);
          if (u = el({ x: T[0], y: Math.round(T[1]), width: 0, height: 0 }, u || {}), p.alignTo === "plotEdges" && this.isCartesian && (u[g ? "x" : "y"] = 0, u[g ? "width" : "height"] = ((B = this.yAxis) == null ? void 0 : B.len) || 0), el(p, { width: W.width, height: W.height }), L = u, x && this.xAxis && !S && this.setDataLabelStartPos(c, d, f, C, L), d.align(gs(p, { width: G.width, height: G.height }), !1, u, !1), d.alignAttr.x += il(p.align) * (G.width - W.width), d.alignAttr.y += il(p.verticalAlign) * (G.height - W.height), d[d.placed ? "animate" : "attr"]({ x: d.alignAttr.x + (W.width - G.width) / 2, y: d.alignAttr.y + (W.height - G.height) / 2, rotationOriginX: (d.width || 0) / 2, rotationOriginY: (d.height || 0) / 2 }), S && u.height >= 0) this.justifyDataLabel(d, p, d.alignAttr, W, u, f);
          else if (ms(p.crop, !0)) {
            let { x: D, y: Y } = d.alignAttr;
            A = m.isInsidePlot(D, Y, { paneCoordinates: !0, series: this }) && m.isInsidePlot(D + W.width - 1, Y + W.height - 1, { paneCoordinates: !0, series: this });
          }
          p.shape && !M && d[f ? "attr" : "animate"]({ anchorX: T[0], anchorY: T[1] });
        }
        f && x && (d.placed = !1), A || x && !S ? (d.show(), d.placed = !0) : (d.hide(), d.placed = !1);
      }
      function i() {
        return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6);
      }
      function s(c) {
        let d = this.hasRendered || 0, p = this.initDataLabelsGroup().attr({ opacity: +d });
        return !d && p && (this.visible && p.show(), this.options.animation ? p.animate({ opacity: 1 }, c) : p.attr({ opacity: 1 })), p;
      }
      function r(c) {
        var A;
        let d;
        c = c || this.points;
        let p = this, u = p.chart, f = p.options, m = u.renderer, { backgroundColor: x, plotBackgroundColor: g } = u.options.chart, b = m.getContrast(Fn(g) && g || Fn(x) && x || "#000000"), v = a(p), { animation: M, defer: C } = v[0], S = C ? nu(u, M, p) : { defer: 0, duration: 0 };
        Wn(this, "drawDataLabels"), (A = p.hasDataLabels) != null && A.call(p) && (d = this.initDataLabels(S), c.forEach((T) => {
          var W, G;
          let L = T.dataLabels || [];
          sl(o(v, T.dlOptions || ((W = T.options) == null ? void 0 : W.dataLabels))).forEach((D, Y) => {
            let it = D.enabled && (T.visible || T.dataLabelOnHidden) && (!T.isNull || T.dataLabelOnNull) && function(me, se) {
              let ue = se.filter;
              if (ue) {
                let re = ue.operator, Ut = me[ue.property], de = ue.value;
                return re === ">" && Ut > de || re === "<" && Ut < de || re === ">=" && Ut >= de || re === "<=" && Ut <= de || re === "==" && Ut == de || re === "===" && Ut === de || re === "!=" && Ut != de || re === "!==" && Ut !== de;
              }
              return !0;
            }(T, D), { backgroundColor: pt, borderColor: J, distance: dt, style: $ = {} } = D, rt, lt, wt, _t = {}, ft = L[Y], mt = !ft, Et;
            it && (lt = Ai(rt = ms(D[T.formatPrefix + "Format"], D.format)) ? ou(rt, T, u) : (D[T.formatPrefix + "Formatter"] || D.formatter).call(T, D), wt = D.rotation, !u.styledMode && ($.color = ms(D.color, $.color, Fn(p.color) ? p.color : void 0, "#000000"), $.color === "contrast" ? (pt !== "none" && (Et = pt), T.contrastColor = m.getContrast(Et !== "auto" && Et || T.color || p.color), $.color = Et || !Ai(dt) && D.inside || 0 > lu(dt || 0) || f.stacking ? T.contrastColor : b) : delete T.contrastColor, f.cursor && ($.cursor = f.cursor)), _t = { r: D.borderRadius || 0, rotation: wt, padding: D.padding, zIndex: 1 }, u.styledMode || (_t.fill = pt === "auto" ? T.color : pt, _t.stroke = J === "auto" ? T.color : J, _t["stroke-width"] = D.borderWidth), au(_t, (me, se) => {
              me === void 0 && delete _t[se];
            })), !ft || it && Ai(lt) && !!ft.div == !!D.useHTML && (ft.rotation && D.rotation || ft.rotation === D.rotation) || (ft = void 0, mt = !0), it && Ai(lt) && (ft ? _t.text = lt : (ft = m.label(lt, 0, 0, D.shape, void 0, void 0, D.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + T.colorIndex + " " + (D.className || "") + (D.useHTML ? " highcharts-tracker" : "")), ft && (ft.options = D, ft.attr(_t), u.styledMode ? $.width && ft.css({ width: $.width, textOverflow: $.textOverflow, whiteSpace: $.whiteSpace }) : ft.css($).shadow(D.shadow), Wn(ft, "beforeAddingDataLabel", { labelOptions: D, point: T }), ft.added || ft.add(d), p.alignDataLabel(T, ft, D, void 0, mt), ft.isActive = !0, L[Y] && L[Y] !== ft && L[Y].destroy(), L[Y] = ft));
          });
          let B = L.length;
          for (; B--; ) L[B] && L[B].isActive ? L[B].isActive = !1 : ((G = L[B]) == null || G.destroy(), L.splice(B, 1));
          T.dataLabel = L[0], T.dataLabels = L;
        })), Wn(this, "afterDrawDataLabels");
      }
      function n(c, d, p, u, f, m) {
        let x = this.chart, g = d.align, b = d.verticalAlign, v = c.box ? 0 : c.padding || 0, M = x.inverted ? this.yAxis : this.xAxis, C = M ? M.left - x.plotLeft : 0, S = x.inverted ? this.xAxis : this.yAxis, A = S ? S.top - x.plotTop : 0, { x: T = 0, y: L = 0 } = d, B, W;
        return (B = (p.x || 0) + v + C) < 0 && (g === "right" && T >= 0 ? (d.align = "left", d.inside = !0) : T -= B, W = !0), (B = (p.x || 0) + u.width - v + C) > x.plotWidth && (g === "left" && T <= 0 ? (d.align = "right", d.inside = !0) : T += x.plotWidth - B, W = !0), (B = p.y + v + A) < 0 && (b === "bottom" && L >= 0 ? (d.verticalAlign = "top", d.inside = !0) : L -= B, W = !0), (B = (p.y || 0) + u.height - v + A) > x.plotHeight && (b === "top" && L <= 0 ? (d.verticalAlign = "bottom", d.inside = !0) : L += x.plotHeight - B, W = !0), W && (d.x = T, d.y = L, c.placed = !m, c.align(d, void 0, f)), W;
      }
      function o(c, d) {
        let p = [], u;
        if (gi(c) && !gi(d)) p = c.map(function(f) {
          return gs(f, d);
        });
        else if (gi(d) && !gi(c)) p = d.map(function(f) {
          return gs(c, f);
        });
        else if (gi(c) || gi(d)) {
          if (gi(c) && gi(d)) for (u = Math.max(c.length, d.length); u--; ) p[u] = gs(c[u], d[u]);
        } else p = gs(c, d);
        return p;
      }
      function a(c) {
        var p, u;
        let d = c.chart.options.plotOptions;
        return sl(o(o((p = d == null ? void 0 : d.series) == null ? void 0 : p.dataLabels, (u = d == null ? void 0 : d[c.type]) == null ? void 0 : u.dataLabels), c.options.dataLabels));
      }
      function h(c, d, p, u, f) {
        let m = this.chart, x = m.inverted, g = this.xAxis, b = g.reversed, v = ((x ? d.height : d.width) || 0) / 2, M = c.pointWidth, C = M ? M / 2 : 0;
        d.startXPos = x ? f.x : b ? -v - C : g.width - v + C, d.startYPos = x ? b ? this.yAxis.height - v + C : -v - C : f.y, u ? d.visibility === "hidden" && (d.show(), d.attr({ opacity: 0 }).animate({ opacity: 1 })) : d.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, d.hide), m.hasRendered && (p && d.attr({ x: d.startXPos, y: d.startYPos }), d.placed = !0);
      }
      l.compose = function(c) {
        let d = c.prototype;
        d.initDataLabels || (d.initDataLabels = s, d.initDataLabelsGroup = i, d.alignDataLabel = e, d.drawDataLabels = r, d.justifyDataLabel = n, d.setDataLabelStartPos = h, d.hasDataLabels = t);
      };
    })(Zt || (Zt = {}));
    let pr = Zt, { composed: hu } = _, { series: rl } = Vt, { merge: du, pick: xs, pushUnique: cu } = U;
    (function(l) {
      function t(e, i, s, r, n) {
        let o = this.chart.inverted, a = e.series, h = (a.xAxis ? a.xAxis.len : this.chart.plotSizeX) || 0, c = (a.yAxis ? a.yAxis.len : this.chart.plotSizeY) || 0, d = e.dlBox || e.shapeArgs, p = xs(e.below, e.plotY > xs(this.translatedThreshold, c)), u = xs(s.inside, !!this.options.stacking);
        if (d) {
          if (r = du(d), !(s.overflow === "allow" && s.crop === !1)) {
            r.y < 0 && (r.height += r.y, r.y = 0);
            let f = r.y + r.height - c;
            f > 0 && f < r.height - 1 && (r.height -= f);
          }
          o && (r = { x: c - r.y - r.height, y: h - r.x - r.width, width: r.height, height: r.width }), u || (o ? (r.x += p ? 0 : r.width, r.width = 0) : (r.y += p ? r.height : 0, r.height = 0));
        }
        s.align = xs(s.align, !o || u ? "center" : p ? "right" : "left"), s.verticalAlign = xs(s.verticalAlign, o || u ? "middle" : p ? "top" : "bottom"), rl.prototype.alignDataLabel.call(this, e, i, s, r, n), s.inside && e.contrastColor && i.css({ color: e.contrastColor });
      }
      l.compose = function(e) {
        pr.compose(rl), cu(hu, "ColumnDataLabel") && (e.prototype.alignDataLabel = t);
      };
    })(ct || (ct = {}));
    let pu = ct, { extend: uu, merge: fu } = U;
    class Hn extends cr {
    }
    Hn.defaultOptions = fu(cr.defaultOptions, {}), uu(Hn.prototype, { inverted: !0 }), Vt.registerSeriesType("bar", Hn);
    let { column: gu, line: nl } = Vt.seriesTypes, { addEvent: mu, extend: xu, merge: yu } = U;
    class ur extends nl {
      applyJitter() {
        let t = this, e = this.options.jitter, i = this.points.length;
        e && this.points.forEach(function(s, r) {
          ["x", "y"].forEach(function(n, o) {
            if (e[n] && !s.isNull) {
              let a = `plot${n.toUpperCase()}`, h = t[`${n}Axis`], c = e[n] * h.transA;
              if (h && !h.logarithmic) {
                let d = Math.max(0, (s[a] || 0) - c), p = Math.min(h.len, (s[a] || 0) + c);
                s[a] = d + (p - d) * function(u) {
                  let f = 1e4 * Math.sin(u);
                  return f - Math.floor(f);
                }(r + o * i), n === "x" && (s.clientX = s.plotX);
              }
            }
          });
        });
      }
      drawGraph() {
        this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy());
      }
    }
    ur.defaultOptions = yu(nl.defaultOptions, { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } }), xu(ur.prototype, { drawTracker: gu.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"] }), mu(ur, "afterTranslate", function() {
      this.applyJitter();
    }), Vt.registerSeriesType("scatter", ur);
    let { deg2rad: ol } = _, { fireEvent: vu, isNumber: Xn, pick: fr, relativeLength: bu } = U;
    (function(l) {
      l.getCenter = function() {
        let t = this.options, e = this.chart, i = 2 * (t.slicedOffset || 0), s = e.plotWidth - 2 * i, r = e.plotHeight - 2 * i, n = t.center, o = Math.min(s, r), a = t.thickness, h, c = t.size, d = t.innerSize || 0, p, u;
        typeof c == "string" && (c = parseFloat(c)), typeof d == "string" && (d = parseFloat(d));
        let f = [fr(n == null ? void 0 : n[0], "50%"), fr(n == null ? void 0 : n[1], "50%"), fr(c && c < 0 ? void 0 : t.size, "100%"), fr(d && d < 0 ? void 0 : t.innerSize || 0, "0%")];
        for (!e.angular || this instanceof Le || (f[3] = 0), p = 0; p < 4; ++p) u = f[p], h = p < 2 || p === 2 && /%$/.test(u), f[p] = bu(u, [s, r, o, f[2]][p]) + (h ? i : 0);
        return f[3] > f[2] && (f[3] = f[2]), Xn(a) && 2 * a < f[2] && a > 0 && (f[3] = f[2] - 2 * a), vu(this, "afterGetCenter", { positions: f }), f;
      }, l.getStartAndEndRadians = function(t, e) {
        let i = Xn(t) ? t : 0, s = Xn(e) && e > i && e - i < 360 ? e : i + 360;
        return { start: ol * (i + -90), end: ol * (s + -90) };
      };
    })(ot || (ot = {}));
    let al = ot, { setAnimation: ku } = fe, { addEvent: ll, defined: wu, extend: Mu, isNumber: Su, pick: Cu, relativeLength: Tu } = U;
    class hl extends hi {
      getConnectorPath(t) {
        let e = t.dataLabelPosition, i = t.options || {}, s = i.connectorShape, r = this.connectorShapes[s] || s;
        return e && r.call(this, { ...e.computed, alignment: e.alignment }, e.connectorPosition, i) || [];
      }
      getTranslate() {
        return this.sliced && this.slicedTranslation || { translateX: 0, translateY: 0 };
      }
      haloPath(t) {
        let e = this.shapeArgs;
        return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, { innerR: e.r - 1, start: e.start, end: e.end, borderRadius: e.borderRadius });
      }
      constructor(t, e, i) {
        super(t, e, i), this.half = 0, this.name ?? (this.name = "Slice");
        let s = (r) => {
          this.slice(r.type === "select");
        };
        ll(this, "select", s), ll(this, "unselect", s);
      }
      isValid() {
        return Su(this.y) && this.y >= 0;
      }
      setVisible(t, e = !0) {
        t !== this.visible && this.update({ visible: t ?? !this.visible }, e, void 0, !1);
      }
      slice(t, e, i) {
        let s = this.series;
        ku(i, s.chart), e = Cu(e, !0), this.sliced = this.options.sliced = t = wu(t) ? t : !this.sliced, s.options.data[s.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate());
      }
    }
    Mu(hl.prototype, { connectorShapes: { fixedOffset: function(l, t, e) {
      let i = t.breakAt, s = t.touchingSliceAt, r = e.softConnector ? ["C", l.x + (l.alignment === "left" ? -5 : 5), l.y, 2 * i.x - s.x, 2 * i.y - s.y, i.x, i.y] : ["L", i.x, i.y];
      return [["M", l.x, l.y], r, ["L", s.x, s.y]];
    }, straight: function(l, t) {
      let e = t.touchingSliceAt;
      return [["M", l.x, l.y], ["L", e.x, e.y]];
    }, crookedLine: function(l, t, e) {
      let { angle: i = this.angle || 0, breakAt: s, touchingSliceAt: r } = t, { series: n } = this, [o, a, h] = n.center, c = h / 2, { plotLeft: d, plotWidth: p } = n.chart, u = l.alignment === "left", { x: f, y: m } = l, x = s.x;
      if (e.crookDistance) {
        let b = Tu(e.crookDistance, 1);
        x = u ? o + c + (p + d - o - c) * (1 - b) : d + (o - c) * b;
      } else x = o + (a - m) * Math.tan(i - Math.PI / 2);
      let g = [["M", f, m]];
      return (u ? x <= f && x >= s.x : x >= f && x <= s.x) && g.push(["L", x, m]), g.push(["L", s.x, s.y], ["L", r.x, r.y]), g;
    } } });
    let { getStartAndEndRadians: Au } = al, { noop: dl } = _, { clamp: Pu, extend: Eu, fireEvent: cl, merge: Yn, pick: Ou } = U;
    class Gn extends Le {
      animate(t) {
        let e = this, i = e.points, s = e.startAngleRad;
        t || i.forEach(function(r) {
          let n = r.graphic, o = r.shapeArgs;
          n && o && (n.attr({ r: Ou(r.startR, e.center && e.center[3] / 2), start: s, end: s }), n.animate({ r: o.r, start: o.start, end: o.end }, e.options.animation));
        });
      }
      drawEmpty() {
        let t, e, i = this.startAngleRad, s = this.endAngleRad, r = this.options;
        this.total === 0 && this.center ? (t = this.center[0], e = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t, e, this.center[1] / 2, 0, i, s).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({ d: Wo.arc(t, e, this.center[2] / 2, 0, { start: i, end: s, innerR: this.center[3] / 2 }) }), this.chart.styledMode || this.graph.attr({ "stroke-width": r.borderWidth, fill: r.fillColor || "none", stroke: r.color || "#cccccc" })) : this.graph && (this.graph = this.graph.destroy());
      }
      drawPoints() {
        let t = this.chart.renderer;
        this.points.forEach(function(e) {
          e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy()), e.graphic || (e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0);
        });
      }
      generatePoints() {
        super.generatePoints(), this.updateTotals();
      }
      getX(t, e, i, s) {
        let r = this.center, n = this.radii ? this.radii[i.index] || 0 : r[2] / 2, o = s.dataLabelPosition, a = (o == null ? void 0 : o.distance) || 0, h = Math.asin(Pu((t - r[1]) / (n + a), -1, 1));
        return r[0] + Math.cos(h) * (n + a) * (e ? -1 : 1) + (a > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0);
      }
      hasData() {
        return !!this.dataTable.rowCount;
      }
      redrawPoints() {
        let t, e, i, s, r = this, n = r.chart;
        this.drawEmpty(), r.group && !n.styledMode && r.group.shadow(r.options.shadow), r.points.forEach(function(o) {
          let a = {};
          e = o.graphic, !o.isNull && e ? (s = o.shapeArgs, t = o.getTranslate(), n.styledMode || (i = r.pointAttribs(o, o.selected && "select")), o.delayedRendering ? (e.setRadialReference(r.center).attr(s).attr(t), n.styledMode || e.attr(i).attr({ "stroke-linejoin": "round" }), o.delayedRendering = !1) : (e.setRadialReference(r.center), n.styledMode || Yn(!0, a, i), Yn(!0, a, s, t), e.animate(a)), e.attr({ visibility: o.visible ? "inherit" : "hidden" }), e.addClass(o.getClassName(), !0)) : e && (o.graphic = e.destroy());
        });
      }
      sortByAngle(t, e) {
        t.sort(function(i, s) {
          return i.angle !== void 0 && (s.angle - i.angle) * e;
        });
      }
      translate(t) {
        cl(this, "translate"), this.generatePoints();
        let e = this.options, i = e.slicedOffset, s = Au(e.startAngle, e.endAngle), r = this.startAngleRad = s.start, n = (this.endAngleRad = s.end) - r, o = this.points, a = e.ignoreHiddenPoint, h = o.length, c, d, p, u, f, m, x, g = 0;
        for (t || (this.center = t = this.getCenter()), m = 0; m < h; m++) {
          x = o[m], c = r + g * n, x.isValid() && (!a || x.visible) && (g += x.percentage / 100), d = r + g * n;
          let b = { x: t[0], y: t[1], r: t[2] / 2, innerR: t[3] / 2, start: Math.round(1e3 * c) / 1e3, end: Math.round(1e3 * d) / 1e3 };
          x.shapeType = "arc", x.shapeArgs = b, (p = (d + c) / 2) > 1.5 * Math.PI ? p -= 2 * Math.PI : p < -Math.PI / 2 && (p += 2 * Math.PI), x.slicedTranslation = { translateX: Math.round(Math.cos(p) * i), translateY: Math.round(Math.sin(p) * i) }, u = Math.cos(p) * t[2] / 2, f = Math.sin(p) * t[2] / 2, x.tooltipPos = [t[0] + 0.7 * u, t[1] + 0.7 * f], x.half = p < -Math.PI / 2 || p > Math.PI / 2 ? 1 : 0, x.angle = p;
        }
        cl(this, "afterTranslate");
      }
      updateTotals() {
        let t = this.points, e = t.length, i = this.options.ignoreHiddenPoint, s, r, n = 0;
        for (s = 0; s < e; s++) (r = t[s]).isValid() && (!i || r.visible) && (n += r.y);
        for (s = 0, this.total = n; s < e; s++) (r = t[s]).percentage = n > 0 && (r.visible || !i) ? r.y / n * 100 : 0, r.total = n;
      }
    }
    Gn.defaultOptions = Yn(Le.defaultOptions, { borderRadius: 3, center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { connectorPadding: 5, connectorShape: "crookedLine", crookDistance: void 0, distance: 30, enabled: !0, formatter: function() {
      return this.isNull ? void 0 : this.name;
    }, softConnector: !0, x: 0 }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: 0.1 } } }), Eu(Gn.prototype, { axisTypes: [], directTouch: !0, drawGraph: void 0, drawTracker: cr.prototype.drawTracker, getCenter: al.getCenter, getSymbol: dl, invertible: !1, isCartesian: !1, noSharedTooltip: !0, pointAttribs: cr.prototype.pointAttribs, pointClass: hl, requireSorting: !1, searchPoint: dl, trackerGroups: ["group", "dataLabelsGroup"] }), Vt.registerSeriesType("pie", Gn);
    let { composed: Lu, noop: _u } = _, { distribute: Iu } = Ps, { series: pl } = Vt, { arrayMax: Du, clamp: ul, defined: fl, pick: Bu, pushUnique: Ru, relativeLength: gl } = U;
    (function(l) {
      let t = { radialDistributionY: function(n, o) {
        var a;
        return (((a = o.dataLabelPosition) == null ? void 0 : a.top) || 0) + n.distributeBox.pos;
      }, radialDistributionX: function(n, o, a, h, c) {
        let d = c.dataLabelPosition;
        return n.getX(a < ((d == null ? void 0 : d.top) || 0) + 2 || a > ((d == null ? void 0 : d.bottom) || 0) - 2 ? h : a, o.half, o, c);
      }, justify: function(n, o, a, h) {
        var c;
        return h[0] + (n.half ? -1 : 1) * (a + (((c = o.dataLabelPosition) == null ? void 0 : c.distance) || 0));
      }, alignToPlotEdges: function(n, o, a, h) {
        let c = n.getBBox().width;
        return o ? c + h : a - c - h;
      }, alignToConnectors: function(n, o, a, h) {
        let c = 0, d;
        return n.forEach(function(p) {
          (d = p.dataLabel.getBBox().width) > c && (c = d);
        }), o ? c + h : a - c - h;
      } };
      function e(n, o) {
        let a = Math.PI / 2, { start: h = 0, end: c = 0 } = n.shapeArgs || {}, d = n.angle || 0;
        o > 0 && h < a && c > a && d > a / 2 && d < 1.5 * a && (d = d <= a ? Math.max(a / 2, (h + a) / 2) : Math.min(1.5 * a, (a + c) / 2));
        let { center: p, options: u } = this, f = p[2] / 2, m = Math.cos(d), x = Math.sin(d), g = p[0] + m * f, b = p[1] + x * f, v = Math.min((u.slicedOffset || 0) + (u.borderWidth || 0), o / 5);
        return { natural: { x: g + m * o, y: b + x * o }, computed: {}, alignment: o < 0 ? "center" : n.half ? "right" : "left", connectorPosition: { angle: d, breakAt: { x: g + m * v, y: b + x * v }, touchingSliceAt: { x: g, y: b } }, distance: o };
      }
      function i() {
        var A;
        let n = this, o = n.points, a = n.chart, h = a.plotWidth, c = a.plotHeight, d = a.plotLeft, p = Math.round(a.chartWidth / 3), u = n.center, f = u[2] / 2, m = u[1], x = [[], []], g = [0, 0, 0, 0], b = n.dataLabelPositioners, v, M, C, S = 0;
        n.visible && ((A = n.hasDataLabels) != null && A.call(n)) && (o.forEach((T) => {
          (T.dataLabels || []).forEach((L) => {
            L.shortened && (L.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), L.shortened = !1);
          });
        }), pl.prototype.drawDataLabels.apply(n), o.forEach((T) => {
          (T.dataLabels || []).forEach((L, B) => {
            var Y;
            let W = u[2] / 2, G = L.options, D = gl((G == null ? void 0 : G.distance) || 0, W);
            B === 0 && x[T.half].push(T), !fl((Y = G == null ? void 0 : G.style) == null ? void 0 : Y.width) && L.getBBox().width > p && (L.css({ width: Math.round(0.7 * p) + "px" }), L.shortened = !0), L.dataLabelPosition = this.getDataLabelPosition(T, D), S = Math.max(S, D);
          });
        }), x.forEach((T, L) => {
          let B = T.length, W = [], G, D, Y = 0, it;
          B && (n.sortByAngle(T, L - 0.5), S > 0 && (G = Math.max(0, m - f - S), D = Math.min(m + f + S, a.plotHeight), T.forEach((pt) => {
            (pt.dataLabels || []).forEach((J) => {
              var $;
              let dt = J.dataLabelPosition;
              dt && dt.distance > 0 && (dt.top = Math.max(0, m - f - dt.distance), dt.bottom = Math.min(m + f + dt.distance, a.plotHeight), Y = J.getBBox().height || 21, J.lineHeight = a.renderer.fontMetrics(J.text || J).h + 2 * J.padding, pt.distributeBox = { target: ((($ = J.dataLabelPosition) == null ? void 0 : $.natural.y) || 0) - dt.top + J.lineHeight / 2, size: Y, rank: pt.y }, W.push(pt.distributeBox));
            });
          }), Iu(W, it = D + Y - G, it / 5)), T.forEach((pt) => {
            (pt.dataLabels || []).forEach((J) => {
              let dt = J.options || {}, $ = pt.distributeBox, rt = J.dataLabelPosition, lt = (rt == null ? void 0 : rt.natural.y) || 0, wt = dt.connectorPadding || 0, _t = J.lineHeight || 21, ft = (_t - J.getBBox().height) / 2, mt = 0, Et = lt, me = "inherit";
              if (rt) {
                if (W && fl($) && rt.distance > 0 && ($.pos === void 0 ? me = "hidden" : (C = $.size, Et = b.radialDistributionY(pt, J))), dt.justify) mt = b.justify(pt, J, f, u);
                else switch (dt.alignTo) {
                  case "connectors":
                    mt = b.alignToConnectors(T, L, h, d);
                    break;
                  case "plotEdges":
                    mt = b.alignToPlotEdges(J, L, h, d);
                    break;
                  default:
                    mt = b.radialDistributionX(n, pt, Et - ft, lt, J);
                }
                if (rt.attribs = { visibility: me, align: rt.alignment }, rt.posAttribs = { x: mt + (dt.x || 0) + ({ left: wt, right: -wt }[rt.alignment] || 0), y: Et + (dt.y || 0) - _t / 2 }, rt.computed.x = mt, rt.computed.y = Et - ft, Bu(dt.crop, !0)) {
                  let se;
                  mt - (M = J.getBBox().width) < wt && L === 1 ? (se = Math.round(M - mt + wt), g[3] = Math.max(se, g[3])) : mt + M > h - wt && L === 0 && (se = Math.round(mt + M - h + wt), g[1] = Math.max(se, g[1])), Et - C / 2 < 0 ? g[0] = Math.max(Math.round(-Et + C / 2), g[0]) : Et + C / 2 > c && (g[2] = Math.max(Math.round(Et + C / 2 - c), g[2])), rt.sideOverflow = se;
                }
              }
            });
          }));
        }), (Du(g) === 0 || this.verifyDataLabelOverflow(g)) && (this.placeDataLabels(), this.points.forEach((T) => {
          (T.dataLabels || []).forEach((L) => {
            var D;
            let { connectorColor: B, connectorWidth: W = 1 } = L.options || {}, G = L.dataLabelPosition;
            if (W) {
              let Y;
              v = L.connector, G && G.distance > 0 ? (Y = !v, v || (L.connector = v = a.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + T.colorIndex + (T.className ? " " + T.className : "")).add(n.dataLabelsGroup)), a.styledMode || v.attr({ "stroke-width": W, stroke: B || T.color || "#666666" }), v[Y ? "attr" : "animate"]({ d: T.getConnectorPath(L) }), v.attr({ visibility: (D = G.attribs) == null ? void 0 : D.visibility })) : v && (L.connector = v.destroy());
            }
          });
        })));
      }
      function s() {
        this.points.forEach((n) => {
          (n.dataLabels || []).forEach((o) => {
            var h;
            let a = o.dataLabelPosition;
            a ? (a.sideOverflow && (o.css({ width: Math.max(o.getBBox().width - a.sideOverflow, 0) + "px", textOverflow: (((h = o.options) == null ? void 0 : h.style) || {}).textOverflow || "ellipsis" }), o.shortened = !0), o.attr(a.attribs), o[o.moved ? "animate" : "attr"](a.posAttribs), o.moved = !0) : o && o.attr({ y: -9999 });
          }), delete n.distributeBox;
        }, this);
      }
      function r(n) {
        let o = this.center, a = this.options, h = a.center, c = a.minSize || 80, d = c, p = a.size !== null;
        return !p && (h[0] !== null ? d = Math.max(o[2] - Math.max(n[1], n[3]), c) : (d = Math.max(o[2] - n[1] - n[3], c), o[0] += (n[3] - n[1]) / 2), h[1] !== null ? d = ul(d, c, o[2] - Math.max(n[0], n[2])) : (d = ul(d, c, o[2] - n[0] - n[2]), o[1] += (n[0] - n[2]) / 2), d < o[2] ? (o[2] = d, o[3] = Math.min(a.thickness ? Math.max(0, d - 2 * a.thickness) : Math.max(0, gl(a.innerSize || 0, d)), d), this.translate(o), this.drawDataLabels && this.drawDataLabels()) : p = !0), p;
      }
      l.compose = function(n) {
        if (pr.compose(pl), Ru(Lu, "PieDataLabel")) {
          let o = n.prototype;
          o.dataLabelPositioners = t, o.alignDataLabel = _u, o.drawDataLabels = i, o.getDataLabelPosition = e, o.placeDataLabels = s, o.verifyDataLabelOverflow = r;
        }
      };
    })(St || (St = {}));
    let Nu = St;
    (function(l) {
      l.getCenterOfPoints = function(t) {
        let e = t.reduce((i, s) => (i.x += s.x, i.y += s.y, i), { x: 0, y: 0 });
        return { x: e.x / t.length, y: e.y / t.length };
      }, l.getDistanceBetweenPoints = function(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }, l.getAngleBetweenPoints = function(t, e) {
        return Math.atan2(e.x - t.x, e.y - t.y);
      }, l.pointInPolygon = function({ x: t, y: e }, i) {
        let s = i.length, r, n, o = !1;
        for (r = 0, n = s - 1; r < s; n = r++) {
          let [a, h] = i[r], [c, d] = i[n];
          h > e != d > e && t < (c - a) * (e - h) / (d - h) + a && (o = !o);
        }
        return o;
      };
    })(ne || (ne = {}));
    let { pointInPolygon: zu } = ne, { addEvent: Wu, fireEvent: ml, objectEach: xl, pick: Fu } = U;
    function Hu(l) {
      let t = l.length, e = (c, d) => !(d.x >= c.x + c.width || d.x + d.width <= c.x || d.y >= c.y + c.height || d.y + d.height <= c.y), i = (c, d) => {
        for (let p of c) if (zu({ x: p[0], y: p[1] }, d)) return !0;
        return !1;
      }, s, r, n, o, a, h = !1;
      for (let c = 0; c < t; c++) (s = l[c]) && (s.oldOpacity = s.opacity, s.newOpacity = 1, s.absoluteBox = function(d) {
        var p, u;
        if (d && (!d.alignAttr || d.placed)) {
          let f = d.box ? 0 : d.padding || 0, m = d.alignAttr || { x: d.attr("x"), y: d.attr("y") }, x = d.getBBox();
          return d.width = x.width, d.height = x.height, { x: m.x + (((p = d.parentGroup) == null ? void 0 : p.translateX) || 0) + f, y: m.y + (((u = d.parentGroup) == null ? void 0 : u.translateY) || 0) + f, width: (d.width || 0) - 2 * f, height: (d.height || 0) - 2 * f, polygon: x == null ? void 0 : x.polygon };
        }
      }(s));
      l.sort((c, d) => (d.labelrank || 0) - (c.labelrank || 0));
      for (let c = 0; c < t; ++c) {
        o = (r = l[c]) && r.absoluteBox;
        let d = o == null ? void 0 : o.polygon;
        for (let p = c + 1; p < t; ++p) {
          a = (n = l[p]) && n.absoluteBox;
          let u = !1;
          if (o && a && r !== n && r.newOpacity !== 0 && n.newOpacity !== 0 && r.visibility !== "hidden" && n.visibility !== "hidden") {
            let f = a.polygon;
            if (d && f && d !== f ? i(d, f) && (u = !0) : e(o, a) && (u = !0), u) {
              let m = r.labelrank < n.labelrank ? r : n, x = m.text;
              m.newOpacity = 0, x != null && x.element.querySelector("textPath") && x.hide();
            }
          }
        }
      }
      for (let c of l) yl(c, this) && (h = !0);
      h && ml(this, "afterHideAllOverlappingLabels");
    }
    function yl(l, t) {
      let e, i, s = !1;
      return l && (i = l.newOpacity, l.oldOpacity !== i && (l.hasClass("highcharts-data-label") ? (l[i ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), e = function() {
        t.styledMode || l.css({ pointerEvents: i ? "auto" : "none" });
      }, s = !0, l[l.isOld ? "animate" : "attr"]({ opacity: i }, void 0, e), ml(t, "afterHideOverlappingLabel")) : l.attr({ opacity: i })), l.isOld = !0), s;
    }
    function Xu() {
      var e;
      let l = this, t = [];
      for (let i of l.labelCollectors || []) t = t.concat(i());
      for (let i of l.yAxis || []) i.stacking && i.options.stackLabels && !i.options.stackLabels.allowOverlap && xl(i.stacking.stacks, (s) => {
        xl(s, (r) => {
          r.label && t.push(r.label);
        });
      });
      for (let i of l.series || []) if (i.visible && ((e = i.hasDataLabels) != null && e.call(i))) {
        let s = (r) => {
          for (let n of r) n.visible && (n.dataLabels || []).forEach((o) => {
            var h;
            let a = o.options || {};
            o.labelrank = Fu(a.labelrank, n.labelrank, (h = n.shapeArgs) == null ? void 0 : h.height), a.allowOverlap ?? Number(a.distance) > 0 ? (o.oldOpacity = o.opacity, o.newOpacity = 1, yl(o, l)) : t.push(o);
          });
        };
        s(i.nodes || []), s(i.points);
      }
      this.hideOverlappingLabels(t);
    }
    let vl = { compose: function(l) {
      let t = l.prototype;
      t.hideOverlappingLabels || (t.hideOverlappingLabels = Hu, Wu(l, "render", Xu));
    } }, { defaultOptions: Yu } = ke, { noop: bl } = _, { addEvent: kl, extend: Gu, isObject: wl, merge: ju, relativeLength: jn } = U, Uu = { radius: 0, scope: "stack", where: void 0 }, Ml = bl, Sl = bl;
    function Vu(l, t, e, i, s = {}) {
      let r = Ml(l, t, e, i, s), { innerR: n = 0, r: o = e, start: a = 0, end: h = 0 } = s;
      if (s.open || !s.borderRadius) return r;
      let c = h - a, d = Math.sin(c / 2), p = Math.max(Math.min(jn(s.borderRadius || 0, o - n), (o - n) / 2, o * d / (1 + d)), 0), u = Math.min(p, c / Math.PI * 2 * n), f = r.length - 1;
      for (; f--; ) (function(m, x, g) {
        let b, v, M, C = m[x], S = m[x + 1];
        if (S[0] === "Z" && (S = m[0]), (C[0] === "M" || C[0] === "L") && S[0] === "A" ? (b = C, v = S, M = !0) : C[0] === "A" && (S[0] === "M" || S[0] === "L") && (b = S, v = C), b && v && v.params) {
          let A = v[1], T = v[5], L = v.params, { start: B, end: W, cx: G, cy: D } = L, Y = T ? A - g : A + g, it = Y ? Math.asin(g / Y) : 0, pt = T ? it : -it, J = Math.cos(it) * Y;
          M ? (L.start = B + pt, b[1] = G + J * Math.cos(B), b[2] = D + J * Math.sin(B), m.splice(x + 1, 0, ["A", g, g, 0, 0, 1, G + A * Math.cos(L.start), D + A * Math.sin(L.start)])) : (L.end = W - pt, v[6] = G + A * Math.cos(L.end), v[7] = D + A * Math.sin(L.end), m.splice(x + 1, 0, ["A", g, g, 0, 0, 1, G + J * Math.cos(W), D + J * Math.sin(W)])), v[4] = Math.abs(L.end - L.start) < Math.PI ? 0 : 1;
        }
      })(r, f, f > 1 ? u : p);
      return r;
    }
    function qu() {
      var l, t;
      if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
        let { options: e, yAxis: i } = this, s = e.stacking === "percent", r = (t = (l = Yu.plotOptions) == null ? void 0 : l[this.type]) == null ? void 0 : t.borderRadius, n = Un(e.borderRadius, wl(r) ? r : {}), o = i.options.reversed;
        for (let a of this.points) {
          let { shapeArgs: h } = a;
          if (a.shapeType === "roundedRect" && h) {
            let { width: c = 0, height: d = 0, y: p = 0 } = h, u = p, f = d;
            if (n.scope === "stack" && a.stackTotal) {
              let b = i.translate(s ? 100 : a.stackTotal, !1, !0, !1, !0), v = i.translate(e.threshold || 0, !1, !0, !1, !0), M = this.crispCol(0, Math.min(b, v), 0, Math.abs(b - v));
              u = M.y, f = M.height;
            }
            let m = (a.negative ? -1 : 1) * (o ? -1 : 1) == -1, x = n.where;
            !x && this.is("waterfall") && Math.abs((a.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (x = "all"), x || (x = "end");
            let g = Math.min(jn(n.radius, c), c / 2, x === "all" ? d / 2 : 1 / 0) || 0;
            x === "end" && (m && (u -= g), f += g), Gu(h, { brBoxHeight: f, brBoxY: u, r: g });
          }
        }
      }
    }
    function Un(l, t) {
      return wl(l) || (l = { radius: l || 0 }), ju(Uu, t, l);
    }
    function $u() {
      let l = Un(this.options.borderRadius);
      for (let t of this.points) {
        let e = t.shapeArgs;
        e && (e.borderRadius = jn(l.radius, (e.r || 0) - (e.innerR || 0)));
      }
    }
    function Ku(l, t, e, i, s = {}) {
      let r = Sl(l, t, e, i, s), { r: n = 0, brBoxHeight: o = i, brBoxY: a = t } = s, h = t - a, c = a + o - (t + i), d = h - n > -0.1 ? 0 : n, p = c - n > -0.1 ? 0 : n, u = Math.max(d && h, 0), f = Math.max(p && c, 0), m = [l + d, t], x = [l + e - d, t], g = [l + e, t + d], b = [l + e, t + i - p], v = [l + e - p, t + i], M = [l + p, t + i], C = [l, t + i - p], S = [l, t + d], A = (T, L) => Math.sqrt(Math.pow(T, 2) - Math.pow(L, 2));
      if (u) {
        let T = A(d, d - u);
        m[0] -= T, x[0] += T, g[1] = S[1] = t + d - u;
      }
      if (i < d - u) {
        let T = A(d, d - u - i);
        g[0] = b[0] = l + e - d + T, v[0] = Math.min(g[0], v[0]), M[0] = Math.max(b[0], M[0]), C[0] = S[0] = l + d - T, g[1] = S[1] = t + i;
      }
      if (f) {
        let T = A(p, p - f);
        v[0] += T, M[0] -= T, b[1] = C[1] = t + i - p + f;
      }
      if (i < p - f) {
        let T = A(p, p - f - i);
        g[0] = b[0] = l + e - p + T, x[0] = Math.min(g[0], x[0]), m[0] = Math.max(b[0], m[0]), C[0] = S[0] = l + p - T, b[1] = C[1] = t;
      }
      return r.length = 0, r.push(["M", ...m], ["L", ...x], ["A", d, d, 0, 0, 1, ...g], ["L", ...b], ["A", p, p, 0, 0, 1, ...v], ["L", ...M], ["A", p, p, 0, 0, 1, ...C], ["L", ...S], ["A", d, d, 0, 0, 1, ...m], ["Z"]), r;
    }
    let { diffObjects: Zu, extend: Ju, find: Qu, merge: tf, pick: gr, uniqueKey: ef } = U;
    (function(l) {
      function t(i, s) {
        let r = i.condition;
        (r.callback || function() {
          return this.chartWidth <= gr(r.maxWidth, Number.MAX_VALUE) && this.chartHeight <= gr(r.maxHeight, Number.MAX_VALUE) && this.chartWidth >= gr(r.minWidth, 0) && this.chartHeight >= gr(r.minHeight, 0);
        }).call(this) && s.push(i._id);
      }
      function e(i, s) {
        let r = this.options.responsive, n = this.currentResponsive, o = [], a;
        !s && r && r.rules && r.rules.forEach((d) => {
          d._id === void 0 && (d._id = ef()), this.matchResponsiveRule(d, o);
        }, this);
        let h = tf(...o.map((d) => Qu((r || {}).rules || [], (p) => p._id === d)).map((d) => d && d.chartOptions));
        h.isResponsiveOptions = !0, o = o.toString() || void 0;
        let c = n && n.ruleIds;
        o === c || (n && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(n.undoOptions, i, !0), this.updatingResponsive = !1), o ? ((a = Zu(h, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = { ruleIds: o, mergedOptions: h, undoOptions: a }, this.updatingResponsive || this.update(h, i, !0)) : this.currentResponsive = void 0);
      }
      l.compose = function(i) {
        let s = i.prototype;
        return s.matchResponsiveRule || Ju(s, { matchResponsiveRule: t, setResponsive: e }), i;
      };
    })(ce || (ce = {}));
    let sf = ce;
    _.AST = Ft, _.Axis = Bi, _.Chart = ui, _.Color = ie, _.DataLabel = pr, _.DataTableCore = Js, _.Fx = Me, _.HTMLElement = ls, _.Legend = _a, _.LegendSymbol = ya, _.OverlappingDataLabels = _.OverlappingDataLabels || vl, _.PlotLineOrBand = js, _.Point = hi, _.Pointer = ga, _.RendererRegistry = es, _.Series = Le, _.SeriesRegistry = Vt, _.StackItem = Ga, _.SVGElement = Je, _.SVGRenderer = Rs, _.Templating = He, _.Tick = Di, _.Time = Be, _.Tooltip = da, _.animate = fe.animate, _.animObject = fe.animObject, _.chart = ui.chart, _.color = ie.parse, _.dateFormat = He.dateFormat, _.defaultOptions = ke.defaultOptions, _.distribute = Ps.distribute, _.format = He.format, _.getDeferredAnimation = fe.getDeferredAnimation, _.getOptions = ke.getOptions, _.numberFormat = He.numberFormat, _.seriesType = Vt.seriesType, _.setAnimation = fe.setAnimation, _.setOptions = ke.setOptions, _.stop = fe.stop, _.time = ke.defaultTime, _.timers = Me.timers, { compose: function(l, t, e) {
      let i = l.types.pie;
      if (!t.symbolCustomAttribs.includes("borderRadius")) {
        let s = e.prototype.symbols;
        kl(l, "afterColumnTranslate", qu, { order: 9 }), kl(i, "afterTranslate", $u), t.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY"), Ml = s.arc, Sl = s.roundedRect, s.arc = Vu, s.roundedRect = Ku;
      }
    }, optionsToObject: Un }.compose(_.Series, _.SVGElement, _.SVGRenderer), pu.compose(_.Series.types.column), pr.compose(_.Series), Vd.compose(_.Axis), ls.compose(_.SVGRenderer), _a.compose(_.Chart), Kd.compose(_.Axis), vl.compose(_.Chart), Nu.compose(_.Series.types.pie), js.compose(_.Chart, _.Axis), ga.compose(_.Chart), sf.compose(_.Chart), ps.compose(_.Axis, _.Chart, _.Series), jp.compose(_.Axis, _.Chart, _.Series), da.compose(_.Pointer), U.extend(_, U);
    let rf = _;
    return Rt.default;
  })());
})(ah);
var kg = ah.exports;
const wg = /* @__PURE__ */ oh(kg);
var lh = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(y, k) {
  (function(w, O) {
    y.exports = O();
  })(nh, function w() {
    var O = typeof self < "u" ? self : typeof window < "u" ? window : O !== void 0 ? O : {}, I = !O.document && !!O.postMessage, N = O.IS_PAPA_WORKER || !1, H = {}, Z = 0, R = { parse: function(E, P) {
      var z = (P = P || {}).dynamicTyping || !1;
      if (_(z) && (P.dynamicTypingFunction = z, z = {}), P.dynamicTyping = z, P.transform = !!_(P.transform) && P.transform, P.worker && R.WORKERS_SUPPORTED) {
        var V = function() {
          if (!R.WORKERS_SUPPORTED) return !1;
          var ht = (Yt = O.URL || O.webkitURL || null, It = w.toString(), R.BLOB_URL || (R.BLOB_URL = Yt.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", It, ")();"], { type: "text/javascript" })))), gt = new O.Worker(ht), Yt, It;
          return gt.onmessage = St, gt.id = Z++, H[gt.id] = gt;
        }();
        return V.userStep = P.step, V.userChunk = P.chunk, V.userComplete = P.complete, V.userError = P.error, P.step = _(P.step), P.chunk = _(P.chunk), P.complete = _(P.complete), P.error = _(P.error), delete P.worker, void V.postMessage({ input: E, config: P, workerId: V.id });
      }
      var Q = null;
      return R.NODE_STREAM_INPUT, typeof E == "string" ? (E = function(ht) {
        return ht.charCodeAt(0) === 65279 ? ht.slice(1) : ht;
      }(E), Q = P.download ? new j(P) : new et(P)) : E.readable === !0 && _(E.read) && _(E.on) ? Q = new xt(P) : (O.File && E instanceof File || E instanceof Object) && (Q = new q(P)), Q.stream(E);
    }, unparse: function(E, P) {
      var z = !1, V = !0, Q = ",", ht = `\r
`, gt = '"', Yt = gt + gt, It = !1, tt = null, Nt = !1;
      (function() {
        if (typeof P == "object") {
          if (typeof P.delimiter != "string" || R.BAD_DELIMITERS.filter(function(K) {
            return P.delimiter.indexOf(K) !== -1;
          }).length || (Q = P.delimiter), (typeof P.quotes == "boolean" || typeof P.quotes == "function" || Array.isArray(P.quotes)) && (z = P.quotes), typeof P.skipEmptyLines != "boolean" && typeof P.skipEmptyLines != "string" || (It = P.skipEmptyLines), typeof P.newline == "string" && (ht = P.newline), typeof P.quoteChar == "string" && (gt = P.quoteChar), typeof P.header == "boolean" && (V = P.header), Array.isArray(P.columns)) {
            if (P.columns.length === 0) throw new Error("Option columns is empty");
            tt = P.columns;
          }
          P.escapeChar !== void 0 && (Yt = P.escapeChar + gt), (typeof P.escapeFormulae == "boolean" || P.escapeFormulae instanceof RegExp) && (Nt = P.escapeFormulae instanceof RegExp ? P.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var nt = new RegExp(ct(gt), "g");
      if (typeof E == "string" && (E = JSON.parse(E)), Array.isArray(E)) {
        if (!E.length || Array.isArray(E[0])) return Se(null, E, It);
        if (typeof E[0] == "object") return Se(tt || Object.keys(E[0]), E, It);
      } else if (typeof E == "object") return typeof E.data == "string" && (E.data = JSON.parse(E.data)), Array.isArray(E.data) && (E.fields || (E.fields = E.meta && E.meta.fields || tt), E.fields || (E.fields = Array.isArray(E.data[0]) ? E.fields : typeof E.data[0] == "object" ? Object.keys(E.data[0]) : []), Array.isArray(E.data[0]) || typeof E.data[0] == "object" || (E.data = [E.data])), Se(E.fields || [], E.data || [], It);
      throw new Error("Unable to serialize unrecognized input");
      function Se(K, Tt, Qt) {
        var zt = "";
        typeof K == "string" && (K = JSON.parse(K)), typeof Tt == "string" && (Tt = JSON.parse(Tt));
        var te = Array.isArray(K) && 0 < K.length, ee = !Array.isArray(Tt[0]);
        if (te && V) {
          for (var Dt = 0; Dt < K.length; Dt++) 0 < Dt && (zt += Q), zt += oe(K[Dt], Dt);
          0 < Tt.length && (zt += ht);
        }
        for (var at = 0; at < Tt.length; at++) {
          var vt = te ? K.length : Tt[at].length, Wt = !1, U = te ? Object.keys(Tt[at]).length === 0 : Tt[at].length === 0;
          if (Qt && !te && (Wt = Qt === "greedy" ? Tt[at].join("").trim() === "" : Tt[at].length === 1 && Tt[at][0].length === 0), Qt === "greedy" && te) {
            for (var Ct = [], Jt = 0; Jt < vt; Jt++) {
              var Gt = ee ? K[Jt] : Jt;
              Ct.push(Tt[at][Gt]);
            }
            Wt = Ct.join("").trim() === "";
          }
          if (!Wt) {
            for (var At = 0; At < vt; At++) {
              0 < At && !U && (zt += Q);
              var Ce = te && ee ? K[At] : At;
              zt += oe(Tt[at][Ce], At);
            }
            at < Tt.length - 1 && (!Qt || 0 < vt && !U) && (zt += ht);
          }
        }
        return zt;
      }
      function oe(K, Tt) {
        if (K == null) return "";
        if (K.constructor === Date) return JSON.stringify(K).slice(1, 25);
        var Qt = !1;
        Nt && typeof K == "string" && Nt.test(K) && (K = "'" + K, Qt = !0);
        var zt = K.toString().replace(nt, Yt);
        return (Qt = Qt || z === !0 || typeof z == "function" && z(K, Tt) || Array.isArray(z) && z[Tt] || function(te, ee) {
          for (var Dt = 0; Dt < ee.length; Dt++) if (-1 < te.indexOf(ee[Dt])) return !0;
          return !1;
        }(zt, R.BAD_DELIMITERS) || -1 < zt.indexOf(Q) || zt.charAt(0) === " " || zt.charAt(zt.length - 1) === " ") ? gt + zt + gt : zt;
      }
    } };
    if (R.RECORD_SEP = "", R.UNIT_SEP = "", R.BYTE_ORDER_MARK = "\uFEFF", R.BAD_DELIMITERS = ["\r", `
`, '"', R.BYTE_ORDER_MARK], R.WORKERS_SUPPORTED = !I && !!O.Worker, R.NODE_STREAM_INPUT = 1, R.LocalChunkSize = 10485760, R.RemoteChunkSize = 5242880, R.DefaultDelimiter = ",", R.Parser = ot, R.ParserHandle = Zt, R.NetworkStreamer = j, R.FileStreamer = q, R.StringStreamer = et, R.ReadableStreamStreamer = xt, O.jQuery) {
      var X = O.jQuery;
      X.fn.parse = function(E) {
        var P = E.config || {}, z = [];
        return this.each(function(ht) {
          if (!(X(this).prop("tagName").toUpperCase() === "INPUT" && X(this).attr("type").toLowerCase() === "file" && O.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var gt = 0; gt < this.files.length; gt++) z.push({ file: this.files[gt], inputElem: this, instanceConfig: X.extend({}, P) });
        }), V(), this;
        function V() {
          if (z.length !== 0) {
            var ht, gt, Yt, It, tt = z[0];
            if (_(E.before)) {
              var Nt = E.before(tt.file, tt.inputElem);
              if (typeof Nt == "object") {
                if (Nt.action === "abort") return ht = "AbortError", gt = tt.file, Yt = tt.inputElem, It = Nt.reason, void (_(E.error) && E.error({ name: ht }, gt, Yt, It));
                if (Nt.action === "skip") return void Q();
                typeof Nt.config == "object" && (tt.instanceConfig = X.extend(tt.instanceConfig, Nt.config));
              } else if (Nt === "skip") return void Q();
            }
            var nt = tt.instanceConfig.complete;
            tt.instanceConfig.complete = function(Se) {
              _(nt) && nt(Se, tt.file, tt.inputElem), Q();
            }, R.parse(tt.file, tt.instanceConfig);
          } else _(E.complete) && E.complete();
        }
        function Q() {
          z.splice(0, 1), V();
        }
      };
    }
    function F(E) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(P) {
        var z = Lt(P);
        z.chunkSize = parseInt(z.chunkSize), P.step || P.chunk || (z.chunkSize = null), this._handle = new Zt(z), (this._handle.streamer = this)._config = z;
      }).call(this, E), this.parseChunk = function(P, z) {
        if (this.isFirstChunk && _(this._config.beforeFirstChunk)) {
          var V = this._config.beforeFirstChunk(P);
          V !== void 0 && (P = V);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var Q = this._partialLine + P;
        this._partialLine = "";
        var ht = this._handle.parse(Q, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var gt = ht.meta.cursor;
          this._finished || (this._partialLine = Q.substring(gt - this._baseIndex), this._baseIndex = gt), ht && ht.data && (this._rowCount += ht.data.length);
          var Yt = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (N) O.postMessage({ results: ht, workerId: R.WORKER_ID, finished: Yt });
          else if (_(this._config.chunk) && !z) {
            if (this._config.chunk(ht, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            ht = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(ht.data), this._completeResults.errors = this._completeResults.errors.concat(ht.errors), this._completeResults.meta = ht.meta), this._completed || !Yt || !_(this._config.complete) || ht && ht.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), Yt || ht && ht.meta.paused || this._nextChunk(), ht;
        }
        this._halted = !0;
      }, this._sendError = function(P) {
        _(this._config.error) ? this._config.error(P) : N && this._config.error && O.postMessage({ workerId: R.WORKER_ID, error: P, finished: !1 });
      };
    }
    function j(E) {
      var P;
      (E = E || {}).chunkSize || (E.chunkSize = R.RemoteChunkSize), F.call(this, E), this._nextChunk = I ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(z) {
        this._input = z, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (P = new XMLHttpRequest(), this._config.withCredentials && (P.withCredentials = this._config.withCredentials), I || (P.onload = Rt(this._chunkLoaded, this), P.onerror = Rt(this._chunkError, this)), P.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !I), this._config.downloadRequestHeaders) {
            var z = this._config.downloadRequestHeaders;
            for (var V in z) P.setRequestHeader(V, z[V]);
          }
          if (this._config.chunkSize) {
            var Q = this._start + this._config.chunkSize - 1;
            P.setRequestHeader("Range", "bytes=" + this._start + "-" + Q);
          }
          try {
            P.send(this._config.downloadRequestBody);
          } catch (ht) {
            this._chunkError(ht.message);
          }
          I && P.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        P.readyState === 4 && (P.status < 200 || 400 <= P.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : P.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(z) {
          var V = z.getResponseHeader("Content-Range");
          return V === null ? -1 : parseInt(V.substring(V.lastIndexOf("/") + 1));
        }(P), this.parseChunk(P.responseText)));
      }, this._chunkError = function(z) {
        var V = P.statusText || z;
        this._sendError(new Error(V));
      };
    }
    function q(E) {
      var P, z;
      (E = E || {}).chunkSize || (E.chunkSize = R.LocalChunkSize), F.call(this, E);
      var V = typeof FileReader < "u";
      this.stream = function(Q) {
        this._input = Q, z = Q.slice || Q.webkitSlice || Q.mozSlice, V ? ((P = new FileReader()).onload = Rt(this._chunkLoaded, this), P.onerror = Rt(this._chunkError, this)) : P = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var Q = this._input;
        if (this._config.chunkSize) {
          var ht = Math.min(this._start + this._config.chunkSize, this._input.size);
          Q = z.call(Q, this._start, ht);
        }
        var gt = P.readAsText(Q, this._config.encoding);
        V || this._chunkLoaded({ target: { result: gt } });
      }, this._chunkLoaded = function(Q) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(Q.target.result);
      }, this._chunkError = function() {
        this._sendError(P.error);
      };
    }
    function et(E) {
      var P;
      F.call(this, E = E || {}), this.stream = function(z) {
        return P = z, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var z, V = this._config.chunkSize;
          return V ? (z = P.substring(0, V), P = P.substring(V)) : (z = P, P = ""), this._finished = !P, this.parseChunk(z);
        }
      };
    }
    function xt(E) {
      F.call(this, E = E || {});
      var P = [], z = !0, V = !1;
      this.pause = function() {
        F.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        F.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(Q) {
        this._input = Q, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        V && P.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), P.length ? this.parseChunk(P.shift()) : z = !0;
      }, this._streamData = Rt(function(Q) {
        try {
          P.push(typeof Q == "string" ? Q : Q.toString(this._config.encoding)), z && (z = !1, this._checkIsFinished(), this.parseChunk(P.shift()));
        } catch (ht) {
          this._streamError(ht);
        }
      }, this), this._streamError = Rt(function(Q) {
        this._streamCleanUp(), this._sendError(Q);
      }, this), this._streamEnd = Rt(function() {
        this._streamCleanUp(), V = !0, this._streamData("");
      }, this), this._streamCleanUp = Rt(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function Zt(E) {
      var P, z, V, Q = Math.pow(2, 53), ht = -Q, gt = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Yt = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, It = this, tt = 0, Nt = 0, nt = !1, Se = !1, oe = [], K = { data: [], errors: [], meta: {} };
      if (_(E.step)) {
        var Tt = E.step;
        E.step = function(at) {
          if (K = at, te()) zt();
          else {
            if (zt(), K.data.length === 0) return;
            tt += at.data.length, E.preview && tt > E.preview ? z.abort() : (K.data = K.data[0], Tt(K, It));
          }
        };
      }
      function Qt(at) {
        return E.skipEmptyLines === "greedy" ? at.join("").trim() === "" : at.length === 1 && at[0].length === 0;
      }
      function zt() {
        return K && V && (Dt("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + R.DefaultDelimiter + "'"), V = !1), E.skipEmptyLines && (K.data = K.data.filter(function(at) {
          return !Qt(at);
        })), te() && function() {
          if (!K) return;
          function at(Wt, U) {
            _(E.transformHeader) && (Wt = E.transformHeader(Wt, U)), oe.push(Wt);
          }
          if (Array.isArray(K.data[0])) {
            for (var vt = 0; te() && vt < K.data.length; vt++) K.data[vt].forEach(at);
            K.data.splice(0, 1);
          } else K.data.forEach(at);
        }(), function() {
          if (!K || !E.header && !E.dynamicTyping && !E.transform) return K;
          function at(Wt, U) {
            var Ct, Jt = E.header ? {} : [];
            for (Ct = 0; Ct < Wt.length; Ct++) {
              var Gt = Ct, At = Wt[Ct];
              E.header && (Gt = Ct >= oe.length ? "__parsed_extra" : oe[Ct]), E.transform && (At = E.transform(At, Gt)), At = ee(Gt, At), Gt === "__parsed_extra" ? (Jt[Gt] = Jt[Gt] || [], Jt[Gt].push(At)) : Jt[Gt] = At;
            }
            return E.header && (Ct > oe.length ? Dt("FieldMismatch", "TooManyFields", "Too many fields: expected " + oe.length + " fields but parsed " + Ct, Nt + U) : Ct < oe.length && Dt("FieldMismatch", "TooFewFields", "Too few fields: expected " + oe.length + " fields but parsed " + Ct, Nt + U)), Jt;
          }
          var vt = 1;
          return !K.data.length || Array.isArray(K.data[0]) ? (K.data = K.data.map(at), vt = K.data.length) : K.data = at(K.data, 0), E.header && K.meta && (K.meta.fields = oe), Nt += vt, K;
        }();
      }
      function te() {
        return E.header && oe.length === 0;
      }
      function ee(at, vt) {
        return Wt = at, E.dynamicTypingFunction && E.dynamicTyping[Wt] === void 0 && (E.dynamicTyping[Wt] = E.dynamicTypingFunction(Wt)), (E.dynamicTyping[Wt] || E.dynamicTyping) === !0 ? vt === "true" || vt === "TRUE" || vt !== "false" && vt !== "FALSE" && (function(U) {
          if (gt.test(U)) {
            var Ct = parseFloat(U);
            if (ht < Ct && Ct < Q) return !0;
          }
          return !1;
        }(vt) ? parseFloat(vt) : Yt.test(vt) ? new Date(vt) : vt === "" ? null : vt) : vt;
        var Wt;
      }
      function Dt(at, vt, Wt, U) {
        var Ct = { type: at, code: vt, message: Wt };
        U !== void 0 && (Ct.row = U), K.errors.push(Ct);
      }
      this.parse = function(at, vt, Wt) {
        var U = E.quoteChar || '"';
        if (E.newline || (E.newline = function(Gt, At) {
          Gt = Gt.substring(0, 1048576);
          var Ce = new RegExp(ct(At) + "([^]*?)" + ct(At), "gm"), xe = (Gt = Gt.replace(Ce, "")).split("\r"), ye = Gt.split(`
`), We = 1 < ye.length && ye[0].length < xe[0].length;
          if (xe.length === 1 || We) return `
`;
          for (var Te = 0, bt = 0; bt < xe.length; bt++) xe[bt][0] === `
` && Te++;
          return Te >= xe.length / 2 ? `\r
` : "\r";
        }(at, U)), V = !1, E.delimiter) _(E.delimiter) && (E.delimiter = E.delimiter(at), K.meta.delimiter = E.delimiter);
        else {
          var Ct = function(Gt, At, Ce, xe, ye) {
            var We, Te, bt, qt;
            ye = ye || [",", "	", "|", ";", R.RECORD_SEP, R.UNIT_SEP];
            for (var kt = 0; kt < ye.length; kt++) {
              var Pt = ye[kt], ni = 0, Fe = 0, qe = 0;
              bt = void 0;
              for (var Be = new ot({ comments: xe, delimiter: Pt, newline: At, preview: 10 }).parse(Gt), $e = 0; $e < Be.data.length; $e++) if (Ce && Qt(Be.data[$e])) qe++;
              else {
                var Ke = Be.data[$e].length;
                Fe += Ke, bt !== void 0 ? 0 < Ke && (ni += Math.abs(Ke - bt), bt = Ke) : bt = Ke;
              }
              0 < Be.data.length && (Fe /= Be.data.length - qe), (Te === void 0 || ni <= Te) && (qt === void 0 || qt < Fe) && 1.99 < Fe && (Te = ni, We = Pt, qt = Fe);
            }
            return { successful: !!(E.delimiter = We), bestDelimiter: We };
          }(at, E.newline, E.skipEmptyLines, E.comments, E.delimitersToGuess);
          Ct.successful ? E.delimiter = Ct.bestDelimiter : (V = !0, E.delimiter = R.DefaultDelimiter), K.meta.delimiter = E.delimiter;
        }
        var Jt = Lt(E);
        return E.preview && E.header && Jt.preview++, P = at, z = new ot(Jt), K = z.parse(P, vt, Wt), zt(), nt ? { meta: { paused: !0 } } : K || { meta: { paused: !1 } };
      }, this.paused = function() {
        return nt;
      }, this.pause = function() {
        nt = !0, z.abort(), P = _(E.chunk) ? "" : P.substring(z.getCharIndex());
      }, this.resume = function() {
        It.streamer._halted ? (nt = !1, It.streamer.parseChunk(P, !0)) : setTimeout(It.resume, 3);
      }, this.aborted = function() {
        return Se;
      }, this.abort = function() {
        Se = !0, z.abort(), K.meta.aborted = !0, _(E.complete) && E.complete(K), P = "";
      };
    }
    function ct(E) {
      return E.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function ot(E) {
      var P, z = (E = E || {}).delimiter, V = E.newline, Q = E.comments, ht = E.step, gt = E.preview, Yt = E.fastMode, It = P = E.quoteChar === void 0 || E.quoteChar === null ? '"' : E.quoteChar;
      if (E.escapeChar !== void 0 && (It = E.escapeChar), (typeof z != "string" || -1 < R.BAD_DELIMITERS.indexOf(z)) && (z = ","), Q === z) throw new Error("Comment character same as delimiter");
      Q === !0 ? Q = "#" : (typeof Q != "string" || -1 < R.BAD_DELIMITERS.indexOf(Q)) && (Q = !1), V !== `
` && V !== "\r" && V !== `\r
` && (V = `
`);
      var tt = 0, Nt = !1;
      this.parse = function(nt, Se, oe) {
        if (typeof nt != "string") throw new Error("Input must be a string");
        var K = nt.length, Tt = z.length, Qt = V.length, zt = Q.length, te = _(ht), ee = [], Dt = [], at = [], vt = tt = 0;
        if (!nt) return Ae();
        if (E.header && !Se) {
          var Wt = nt.split(V)[0].split(z), U = [], Ct = {}, Jt = !1;
          for (var Gt in Wt) {
            var At = Wt[Gt];
            _(E.transformHeader) && (At = E.transformHeader(At, Gt));
            var Ce = At, xe = Ct[At] || 0;
            for (0 < xe && (Jt = !0, Ce = At + "_" + xe), Ct[At] = xe + 1; U.includes(Ce); ) Ce = Ce + "_" + xe;
            U.push(Ce);
          }
          if (Jt) {
            var ye = nt.split(V);
            ye[0] = U.join(z), nt = ye.join(V);
          }
        }
        if (Yt || Yt !== !1 && nt.indexOf(P) === -1) {
          for (var We = nt.split(V), Te = 0; Te < We.length; Te++) {
            if (at = We[Te], tt += at.length, Te !== We.length - 1) tt += V.length;
            else if (oe) return Ae();
            if (!Q || at.substring(0, zt) !== Q) {
              if (te) {
                if (ee = [], qe(at.split(z)), Ee(), Nt) return Ae();
              } else qe(at.split(z));
              if (gt && gt <= Te) return ee = ee.slice(0, gt), Ae(!0);
            }
          }
          return Ae();
        }
        for (var bt = nt.indexOf(z, tt), qt = nt.indexOf(V, tt), kt = new RegExp(ct(It) + ct(P), "g"), Pt = nt.indexOf(P, tt); ; ) if (nt[tt] !== P) if (Q && at.length === 0 && nt.substring(tt, tt + zt) === Q) {
          if (qt === -1) return Ae();
          tt = qt + Qt, qt = nt.indexOf(V, tt), bt = nt.indexOf(z, tt);
        } else if (bt !== -1 && (bt < qt || qt === -1)) at.push(nt.substring(tt, bt)), tt = bt + Tt, bt = nt.indexOf(z, tt);
        else {
          if (qt === -1) break;
          if (at.push(nt.substring(tt, qt)), Ke(qt + Qt), te && (Ee(), Nt)) return Ae();
          if (gt && ee.length >= gt) return Ae(!0);
        }
        else for (Pt = tt, tt++; ; ) {
          if ((Pt = nt.indexOf(P, Pt + 1)) === -1) return oe || Dt.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: ee.length, index: tt }), $e();
          if (Pt === K - 1) return $e(nt.substring(tt, Pt).replace(kt, P));
          if (P !== It || nt[Pt + 1] !== It) {
            if (P === It || Pt === 0 || nt[Pt - 1] !== It) {
              bt !== -1 && bt < Pt + 1 && (bt = nt.indexOf(z, Pt + 1)), qt !== -1 && qt < Pt + 1 && (qt = nt.indexOf(V, Pt + 1));
              var ni = Be(qt === -1 ? bt : Math.min(bt, qt));
              if (nt.substr(Pt + 1 + ni, Tt) === z) {
                at.push(nt.substring(tt, Pt).replace(kt, P)), nt[tt = Pt + 1 + ni + Tt] !== P && (Pt = nt.indexOf(P, tt)), bt = nt.indexOf(z, tt), qt = nt.indexOf(V, tt);
                break;
              }
              var Fe = Be(qt);
              if (nt.substring(Pt + 1 + Fe, Pt + 1 + Fe + Qt) === V) {
                if (at.push(nt.substring(tt, Pt).replace(kt, P)), Ke(Pt + 1 + Fe + Qt), bt = nt.indexOf(z, tt), Pt = nt.indexOf(P, tt), te && (Ee(), Nt)) return Ae();
                if (gt && ee.length >= gt) return Ae(!0);
                break;
              }
              Dt.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: ee.length, index: tt }), Pt++;
            }
          } else Pt++;
        }
        return $e();
        function qe(ve) {
          ee.push(ve), vt = tt;
        }
        function Be(ve) {
          var ke = 0;
          if (ve !== -1) {
            var oi = nt.substring(Pt + 1, ve);
            oi && oi.trim() === "" && (ke = oi.length);
          }
          return ke;
        }
        function $e(ve) {
          return oe || (ve === void 0 && (ve = nt.substring(tt)), at.push(ve), tt = K, qe(at), te && Ee()), Ae();
        }
        function Ke(ve) {
          tt = ve, qe(at), at = [], qt = nt.indexOf(V, tt);
        }
        function Ae(ve) {
          return { data: ee, errors: Dt, meta: { delimiter: z, linebreak: V, aborted: Nt, truncated: !!ve, cursor: vt + (Se || 0) } };
        }
        function Ee() {
          ht(Ae()), ee = [], Dt = [];
        }
      }, this.abort = function() {
        Nt = !0;
      }, this.getCharIndex = function() {
        return tt;
      };
    }
    function St(E) {
      var P = E.data, z = H[P.workerId], V = !1;
      if (P.error) z.userError(P.error, P.file);
      else if (P.results && P.results.data) {
        var Q = { abort: function() {
          V = !0, ne(P.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: ce, resume: ce };
        if (_(z.userStep)) {
          for (var ht = 0; ht < P.results.data.length && (z.userStep({ data: P.results.data[ht], errors: P.results.errors, meta: P.results.meta }, Q), !V); ht++) ;
          delete P.results;
        } else _(z.userChunk) && (z.userChunk(P.results, Q, P.file), delete P.results);
      }
      P.finished && !V && ne(P.workerId, P.results);
    }
    function ne(E, P) {
      var z = H[E];
      _(z.userComplete) && z.userComplete(P), z.terminate(), delete H[E];
    }
    function ce() {
      throw new Error("Not implemented.");
    }
    function Lt(E) {
      if (typeof E != "object" || E === null) return E;
      var P = Array.isArray(E) ? [] : {};
      for (var z in E) P[z] = Lt(E[z]);
      return P;
    }
    function Rt(E, P) {
      return function() {
        E.apply(P, arguments);
      };
    }
    function _(E) {
      return typeof E == "function";
    }
    return N && (O.onmessage = function(E) {
      var P = E.data;
      if (R.WORKER_ID === void 0 && P && (R.WORKER_ID = P.workerId), typeof P.input == "string") O.postMessage({ workerId: R.WORKER_ID, results: R.parse(P.input, P.config), finished: !0 });
      else if (O.File && P.input instanceof File || P.input instanceof Object) {
        var z = R.parse(P.input, P.config);
        z && O.postMessage({ workerId: R.WORKER_ID, results: z, finished: !0 });
      }
    }), (j.prototype = Object.create(F.prototype)).constructor = j, (q.prototype = Object.create(F.prototype)).constructor = q, (et.prototype = Object.create(et.prototype)).constructor = et, (xt.prototype = Object.create(F.prototype)).constructor = xt, R;
  });
})(lh);
var Mg = lh.exports;
const Sg = /* @__PURE__ */ oh(Mg), Cg = (y, k = "csv") => {
  let w;
  if (k === "csv")
    w = Sg.parse(y, {
      header: !0,
      skipEmptyLines: !0
    }).data;
  else if (k === "json")
    w = Array.isArray(y) ? y : JSON.parse(y);
  else
    throw new Error('Invalid input type. Use "csv" or "json"');
  const O = Object.keys(w[0]).filter((N) => N !== "name");
  return w.reduce((N, H) => (O.forEach((Z) => {
    const R = Z.replace(/^\*/, "");
    N.push({
      name: H.name,
      category: R,
      value: parseFloat(H[Z]) || 0
    });
  }), N), []);
};
var Tg = /* @__PURE__ */ ts("<h3> </h3>"), Ag = /* @__PURE__ */ ts("<p> </p>"), Pg = /* @__PURE__ */ ts('<li class="svelte-znc1we"><span class="chart-bullet svelte-znc1we"></span> </li>'), Eg = /* @__PURE__ */ ts('<ul class="chart-legend svelte-znc1we"></ul>'), Og = /* @__PURE__ */ ts("<p> </p>"), Lg = /* @__PURE__ */ ts('<!> <!> <!> <div class="chart-container"></div> <!>', 1);
function _g(y, k) {
  ig(k, !1);
  let w = Rl(k, "data", 8), O = Rl(k, "config", 24, () => ({})), I = Vn(), N, H, Z = Vn(), R = Vn();
  function X(ct, ot) {
    ct = Cg(ct, "json");
    const St = ot.barHeight || 30, ne = ot.xAxisLabel || null, ce = ot.valueSuffix || null, Lt = ot.xKey || "x", Rt = ot.yKey || "y", _ = ot.zKey || "z";
    De(R, ot.colors || [
      "#206095",
      "#27A0CC",
      "#871A5B",
      "#A8BD3A",
      "#F66068"
    ]), H = ot.categories || Array.from(new Set(ct.map((z) => z[Rt]))), De(Z, (() => {
      const z = {};
      for (const V of ct)
        z[V[_]] || (z[V[_]] = { name: V[_], data: [] }), z[V[_]].data.push(V[Lt]);
      return Object.values(z);
    })());
    const P = {
      chart: { type: "bar", height: H.length * (St + 10) + 60 },
      title: !1,
      colors: $t(R),
      xAxis: { categories: H, title: !1, lineWidth: 0 },
      yAxis: {
        min: 0,
        reversedStacks: !1,
        title: { text: ne, align: "high" },
        labels: { overflow: "justify" },
        gridLineWidth: 1
      },
      tooltip: { valueSuffix: ce, enabled: !1 },
      plotOptions: {
        series: {
          animation: !1,
          stacking: "normal",
          pointWidth: St,
          borderRadius: 0,
          borderWidth: 0,
          groupPadding: 0,
          dataLabels: {
            enabled: !1,
            inside: !0,
            allowOverlap: !0,
            align: "right",
            style: { textOutline: "none" },
            formatter() {
              return this.point.shapeArgs.height > 30 ? this.y.toLocaleString("en-GB") : null;
            }
          },
          enableMouseTracking: !1
        }
      },
      legend: !1,
      credits: { enabled: !1 },
      series: $t(Z)
    };
    N ? N.update(P, !0, !0, !0) : N = wg.chart($t(I), P);
  }
  Hf(
    () => ($t(I), to(w()), to(O())),
    () => {
      $t(I) && X(w(), O());
    }
  ), Xf(), vg();
  var F = Lg(), j = ag(F);
  br(j, () => O().title, (ct) => {
    var ot = Tg(), St = yr(ot);
    xr(() => vr(St, O().title)), ji(ct, ot);
  });
  var q = vs(j, 2);
  br(q, () => O().subtitle, (ct) => {
    var ot = Ag(), St = yr(ot);
    xr(() => vr(St, O().subtitle)), ji(ct, ot);
  });
  var et = vs(q, 2);
  br(et, () => {
    var ct;
    return (ct = $t(Z)) == null ? void 0 : ct[1];
  }, (ct) => {
    var ot = Eg();
    ug(ot, 5, () => $t(Z), cg, (St, ne, ce) => {
      var Lt = Pg(), Rt = yr(Lt), _ = vs(Rt);
      xr(() => {
        xg(Rt, "background", $t(R)[ce]), vr(_, ` ${$t(ne).name ?? ""}`);
      }), ji(St, Lt);
    }), ji(ct, ot);
  });
  var xt = vs(et, 2);
  yg(xt, (ct) => De(I, ct), () => $t(I));
  var Zt = vs(xt, 2);
  br(Zt, () => O().footnote, (ct) => {
    var ot = Og(), St = yr(ot);
    xr(() => vr(St, O().footnote)), ji(ct, ot);
  }), ji(y, F), sg();
}
export {
  _g as StackedBarChart
};
//# sourceMappingURL=components.es.js.map