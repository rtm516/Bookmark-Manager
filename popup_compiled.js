try {
	'use strict';
	var k, n = this,
		p = function (a) {
			return void 0 !== a
		},
		aa = function () {},
		ba = function (a) {
			a.$ = function () {
				return a.ac ? a.ac : a.ac = new a
			}
		},
		ca = function (a) {
			var b = typeof a;
			if ("object" == b)
				if (a) {
					if (a instanceof Array) return "array";
					if (a instanceof Object) return b;
					var c = Object.prototype.toString.call(a);
					if ("[object Window]" == c) return "object";
					if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
					if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
				} else return "null";
			else if ("function" == b && "undefined" == typeof a.call) return "object";
			return b
		},
		da = function (a) {
			return "array" == ca(a)
		},
		ea = function (a) {
			var b = ca(a);
			return "array" == b || "object" == b && "number" == typeof a.length
		},
		q = function (a) {
			return "string" == typeof a
		},
		fa = function (a) {
			return "number" == typeof a
		},
		ga = function (a) {
			return "function" == ca(a)
		},
		ha = function (a) {
			var b =
				typeof a;
			return "object" == b && null != a || "function" == b
		},
		ia = "closure_uid_" + (1E9 * Math.random() >>> 0),
		ka = 0,
		la = function (a, b, c) {
			return a.call.apply(a.bind, arguments)
		},
		na = function (a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function () {
					var c = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(c, d);
					return a.apply(b, c)
				}
			}
			return function () {
				return a.apply(b, arguments)
			}
		},
		u = function (a, b, c) {
			u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
				la : na;
			return u.apply(null, arguments)
		},
		oa = function (a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function () {
				var b = c.slice();
				b.push.apply(b, arguments);
				return a.apply(this, b)
			}
		},
		pa = Date.now || function () {
			return +new Date
		},
		v = function (a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.O = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			a.I = function (a, c, f) {
				for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
				return b.prototype[c].apply(a, g)
			}
		};
	var ra = function () {
		this.l = "standalone";
		this.h = "en";
		this.g = !1;
		qa(this)
	};
	ba(ra);
	var qa = function (a) {
			var b = window.chrome;
			a.h = b && b.i18n ? b.i18n.getUILanguage() : "en";
			a.g = "ar" == a.h || "he" == a.h
		},
		sa = function () {
			var a = ra.$();
			return "crx" == a.l || "crx_standalone" == a.l
		};
	var ta = function (a) {
		if (Error.captureStackTrace) Error.captureStackTrace(this, ta);
		else {
			var b = Error().stack;
			b && (this.stack = b)
		}
		a && (this.message = String(a))
	};
	v(ta, Error);
	ta.prototype.name = "CustomError";
	var ua;
	var va = String.prototype.trim ? function (a) {
			return a.trim()
		} : function (a) {
			return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
		},
		xa = function (a) {
			return -1 != wa.indexOf(a)
		},
		ya = String.prototype.repeat ? function (a, b) {
			return a.repeat(b)
		} : function (a, b) {
			return Array(b + 1).join(a)
		},
		w = function (a) {
			return null == a ? "" : String(a)
		},
		za = function (a, b) {
			return a < b ? -1 : a > b ? 1 : 0
		},
		Ba = function (a) {
			for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
			return b
		},
		Ca = function (a) {
			return String(a).replace(/\-([a-z])/g, function (a, c) {
				return c.toUpperCase()
			})
		},
		Da = function (a) {
			var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
			return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
				return b + e.toUpperCase()
			})
		},
		Ea = function (a) {
			isFinite(a) && (a = String(a));
			return q(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
		};
	var Fa = function (a) {
			return a[a.length - 1]
		},
		Ga = function (a, b) {
			return Array.prototype.indexOf.call(a, b, void 0)
		},
		Ha = function (a, b, c) {
			Array.prototype.forEach.call(a, b, c)
		},
		Ia = function (a, b) {
			return Array.prototype.filter.call(a, b, void 0)
		},
		Ja = function (a, b, c) {
			return Array.prototype.map.call(a, b, c)
		},
		Ka = function (a, b, c, d) {
			d && (b = u(b, d));
			return Array.prototype.reduce.call(a, b, c)
		},
		La = function (a, b) {
			var c = 0;
			Ha(a, function (a, e, f) {
				b.call(void 0, a, e, f) && ++c
			}, void 0);
			return c
		},
		Na = function (a, b) {
			var c = Ma(a, b, void 0);
			return 0 >
				c ? null : q(a) ? a.charAt(c) : a[c]
		},
		Ma = function (a, b, c) {
			for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
				if (f in e && b.call(c, e[f], f, a)) return f;
			return -1
		},
		Oa = function (a, b) {
			return 0 <= Ga(a, b)
		},
		Qa = function (a, b) {
			var c = Ga(a, b),
				d;
			(d = 0 <= c) && Pa(a, c);
			return d
		},
		Pa = function (a, b) {
			Array.prototype.splice.call(a, b, 1)
		},
		Ra = function (a) {
			return Array.prototype.concat.apply(Array.prototype, arguments)
		},
		Sa = function (a) {
			var b = a.length;
			if (0 < b) {
				for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
				return c
			}
			return []
		},
		Ua = function (a, b, c, d) {
			Array.prototype.splice.apply(a,
				Ta(arguments, 1))
		},
		Ta = function (a, b, c) {
			return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
		},
		Va = function (a, b) {
			return a > b ? 1 : a < b ? -1 : 0
		},
		Wa = function (a, b, c) {
			var d;
			c = c || Va;
			for (var e = 0, f = a.length; e < f;) {
				var g = e + f >> 1,
					h;
				h = c(b, a[g]);
				0 < h ? e = g + 1 : (f = g, d = !h)
			}
			d = d ? e : ~e;
			0 > d && Ua(a, -(d + 1), 0, b)
		};
	var Xa = function (a) {
			return function () {
				return a
			}
		},
		Ya = Xa(!1),
		Za = Xa(!0),
		$a = function (a) {
			return a
		},
		ab = function (a) {
			var b;
			b = b || 0;
			return function () {
				return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
			}
		};
	var bb = "StopIteration" in n ? n.StopIteration : {
			message: "StopIteration",
			stack: ""
		},
		cb = function () {};
	cb.prototype.next = function () {
		throw bb;
	};
	cb.prototype.Ba = function () {
		return this
	};
	var db = function (a) {
			if (a instanceof cb) return a;
			if ("function" == typeof a.Ba) return a.Ba(!1);
			if (ea(a)) {
				var b = 0,
					c = new cb;
				c.next = function () {
					for (;;) {
						if (b >= a.length) throw bb;
						if (b in a) return a[b++];
						b++
					}
				};
				return c
			}
			throw Error("Not implemented");
		},
		eb = function (a, b) {
			if (ea(a)) try {
				Ha(a, b, void 0)
			} catch (c) {
				if (c !== bb) throw c;
			} else {
				a = db(a);
				try {
					for (;;) b.call(void 0, a.next(), void 0, a)
				} catch (c) {
					if (c !== bb) throw c;
				}
			}
		},
		fb = function (a) {
			if (ea(a)) return Sa(a);
			a = db(a);
			var b = [];
			eb(a, function (a) {
				b.push(a)
			});
			return b
		};
	var gb = function (a, b, c) {
			for (var d in a) b.call(c, a[d], d, a)
		},
		hb = function (a) {
			var b = 0,
				c;
			for (c in a) b++;
			return b
		},
		ib = function (a) {
			for (var b in a) return b
		},
		jb = function (a) {
			var b = [],
				c = 0,
				d;
			for (d in a) b[c++] = a[d];
			return b
		},
		kb = function (a) {
			var b = [],
				c = 0,
				d;
			for (d in a) b[c++] = d;
			return b
		},
		lb = function (a, b) {
			b in a && delete a[b]
		},
		mb = function (a) {
			var b = {},
				c;
			for (c in a) b[c] = a[c];
			return b
		},
		nb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
		ob = function (a, b) {
			for (var c,
					d, e = 1; e < arguments.length; e++) {
				d = arguments[e];
				for (c in d) a[c] = d[c];
				for (var f = 0; f < nb.length; f++) c = nb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
			}
		},
		pb = function (a) {
			var b = arguments.length;
			if (1 == b && da(arguments[0])) return pb.apply(null, arguments[0]);
			if (b % 2) throw Error("Uneven number of arguments");
			for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
			return c
		};
	var qb = function (a, b) {
		this.h = {};
		this.g = [];
		this.o = this.l = 0;
		var c = arguments.length;
		if (1 < c) {
			if (c % 2) throw Error("Uneven number of arguments");
			for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
		} else if (a) {
			a instanceof qb ? (c = a.cb(), d = a.fa()) : (c = kb(a), d = jb(a));
			for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
		}
	};
	k = qb.prototype;
	k.Ga = function () {
		return this.l
	};
	k.fa = function () {
		rb(this);
		for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
		return a
	};
	k.cb = function () {
		rb(this);
		return this.g.concat()
	};
	k.clear = function () {
		this.h = {};
		this.o = this.l = this.g.length = 0
	};
	k.remove = function (a) {
		return sb(this.h, a) ? (delete this.h[a], this.l--, this.o++, this.g.length > 2 * this.l && rb(this), !0) : !1
	};
	var rb = function (a) {
		if (a.l != a.g.length) {
			for (var b = 0, c = 0; b < a.g.length;) {
				var d = a.g[b];
				sb(a.h, d) && (a.g[c++] = d);
				b++
			}
			a.g.length = c
		}
		if (a.l != a.g.length) {
			for (var e = {}, c = b = 0; b < a.g.length;) d = a.g[b], sb(e, d) || (a.g[c++] = d, e[d] = 1), b++;
			a.g.length = c
		}
	};
	k = qb.prototype;
	k.get = function (a, b) {
		return sb(this.h, a) ? this.h[a] : b
	};
	k.set = function (a, b) {
		sb(this.h, a) || (this.l++, this.g.push(a), this.o++);
		this.h[a] = b
	};
	k.forEach = function (a, b) {
		for (var c = this.cb(), d = 0; d < c.length; d++) {
			var e = c[d],
				f = this.get(e);
			a.call(b, f, e, this)
		}
	};
	k.clone = function () {
		return new qb(this)
	};
	k.Ba = function (a) {
		rb(this);
		var b = 0,
			c = this.o,
			d = this,
			e = new cb;
		e.next = function () {
			if (c != d.o) throw Error("The map has changed since the iterator was created");
			if (b >= d.g.length) throw bb;
			var e = d.g[b++];
			return a ? e : d.h[e]
		};
		return e
	};
	var sb = function (a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	};
	var tb = function (a) {
		if (a.fa && "function" == typeof a.fa) return a.fa();
		if (q(a)) return a.split("");
		if (ea(a)) {
			for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
			return b
		}
		return jb(a)
	};
	var ub = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
		vb = function (a) {
			return a ? decodeURI(a) : a
		},
		wb = function (a, b) {
			if (a)
				for (var c = a.split("&"), d = 0; d < c.length; d++) {
					var e = c[d].indexOf("="),
						f = null,
						g = null;
					0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
					b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
				}
		};
	var xb = function (a, b) {
		this.l = this.C = this.h = "";
		this.B = null;
		this.A = this.v = "";
		this.g = !1;
		var c;
		a instanceof xb ? (this.g = p(b) ? b : a.g, yb(this, a.h), this.C = a.C, this.l = a.l, zb(this, a.B), this.v = a.v, Ab(this, a.o.clone()), this.A = a.A) : a && (c = String(a).match(ub)) ? (this.g = !!b, yb(this, c[1] || "", !0), this.C = Bb(c[2] || ""), this.l = Bb(c[3] || "", !0), zb(this, c[4]), this.v = Bb(c[5] || "", !0), Ab(this, c[6] || "", !0), this.A = Bb(c[7] || "")) : (this.g = !!b, this.o = new Cb(null, 0, this.g))
	};
	xb.prototype.toString = function () {
		var a = [],
			b = this.h;
		b && a.push(Db(b, Eb, !0), ":");
		var c = this.l;
		if (c || "file" == b) a.push("//"), (b = this.C) && a.push(Db(b, Eb, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.B, null != c && a.push(":", String(c));
		if (c = this.v) this.l && "/" != c.charAt(0) && a.push("/"), a.push(Db(c, "/" == c.charAt(0) ? Fb : Gb, !0));
		(c = this.o.toString()) && a.push("?", c);
		(c = this.A) && a.push("#", Db(c, Hb));
		return a.join("")
	};
	xb.prototype.clone = function () {
		return new xb(this)
	};
	var yb = function (a, b, c) {
			a.h = c ? Bb(b, !0) : b;
			a.h && (a.h = a.h.replace(/:$/, ""))
		},
		zb = function (a, b) {
			if (b) {
				b = +b;
				if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
				a.B = b
			} else a.B = null
		},
		Ab = function (a, b, c) {
			b instanceof Cb ? (a.o = b, Ib(a.o, a.g)) : (c || (b = Db(b, Jb)), a.o = new Cb(b, 0, a.g))
		},
		Kb = function (a) {
			a instanceof xb ? a.clone() : new xb(a, void 0)
		},
		Bb = function (a, b) {
			return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
		},
		Db = function (a, b, c) {
			return q(a) ? (a = encodeURI(a).replace(b, Lb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g,
				"%$1")), a) : null
		},
		Lb = function (a) {
			a = a.charCodeAt(0);
			return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
		},
		Eb = /[#\/\?@]/g,
		Gb = /[\#\?:]/g,
		Fb = /[\#\?]/g,
		Jb = /[\#\?@]/g,
		Hb = /#/g,
		Cb = function (a, b, c) {
			this.h = this.g = null;
			this.l = a || null;
			this.o = !!c
		},
		Mb = function (a) {
			a.g || (a.g = new qb, a.h = 0, a.l && wb(a.l, function (b, c) {
				var d = decodeURIComponent(b.replace(/\+/g, " "));
				Mb(a);
				a.l = null;
				var d = Nb(a, d),
					e = a.g.get(d);
				e || a.g.set(d, e = []);
				e.push(c);
				a.h = a.h + 1
			}))
		};
	Cb.prototype.Ga = function () {
		Mb(this);
		return this.h
	};
	Cb.prototype.remove = function (a) {
		Mb(this);
		a = Nb(this, a);
		return sb(this.g.h, a) ? (this.l = null, this.h = this.h - this.g.get(a).length, this.g.remove(a)) : !1
	};
	Cb.prototype.clear = function () {
		this.g = this.l = null;
		this.h = 0
	};
	var Ob = function (a, b) {
		Mb(a);
		b = Nb(a, b);
		return sb(a.g.h, b)
	};
	k = Cb.prototype;
	k.cb = function () {
		Mb(this);
		for (var a = this.g.fa(), b = this.g.cb(), c = [], d = 0; d < b.length; d++)
			for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
		return c
	};
	k.fa = function (a) {
		Mb(this);
		var b = [];
		if (q(a)) Ob(this, a) && (b = Ra(b, this.g.get(Nb(this, a))));
		else {
			a = this.g.fa();
			for (var c = 0; c < a.length; c++) b = Ra(b, a[c])
		}
		return b
	};
	k.set = function (a, b) {
		Mb(this);
		this.l = null;
		a = Nb(this, a);
		Ob(this, a) && (this.h = this.h - this.g.get(a).length);
		this.g.set(a, [b]);
		this.h = this.h + 1;
		return this
	};
	k.get = function (a, b) {
		var c = a ? this.fa(a) : [];
		return 0 < c.length ? String(c[0]) : b
	};
	k.toString = function () {
		if (this.l) return this.l;
		if (!this.g) return "";
		for (var a = [], b = this.g.cb(), c = 0; c < b.length; c++)
			for (var d = b[c], e = encodeURIComponent(String(d)), d = this.fa(d), f = 0; f < d.length; f++) {
				var g = e;
				"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
				a.push(g)
			}
		return this.l = a.join("&")
	};
	k.clone = function () {
		var a = new Cb;
		a.l = this.l;
		this.g && (a.g = this.g.clone(), a.h = this.h);
		return a
	};
	var Nb = function (a, b) {
			var c = String(b);
			a.o && (c = c.toLowerCase());
			return c
		},
		Ib = function (a, b) {
			b && !a.o && (Mb(a), a.l = null, a.g.forEach(function (a, b) {
				var e = b.toLowerCase();
				b != e && (this.remove(b), this.remove(e), 0 < a.length && (this.l = null, this.g.set(Nb(this, e), Sa(a)), this.h = this.h + a.length))
			}, a));
			a.o = b
		};
	var Pb = {
		clo: "",
		portrait: "",
		gc: "0",
		pos: "1",
		of: "1",
		elp: "1",
		gen: "",
		esb: "1"
	};
	var Qb = {
			vc: {
				1E3: {
					other: "0K"
				},
				1E4: {
					other: "00K"
				},
				1E5: {
					other: "000K"
				},
				1E6: {
					other: "0M"
				},
				1E7: {
					other: "00M"
				},
				1E8: {
					other: "000M"
				},
				1E9: {
					other: "0B"
				},
				1E10: {
					other: "00B"
				},
				1E11: {
					other: "000B"
				},
				1E12: {
					other: "0T"
				},
				1E13: {
					other: "00T"
				},
				1E14: {
					other: "000T"
				}
			},
			uc: {
				1E3: {
					other: "0 thousand"
				},
				1E4: {
					other: "00 thousand"
				},
				1E5: {
					other: "000 thousand"
				},
				1E6: {
					other: "0 million"
				},
				1E7: {
					other: "00 million"
				},
				1E8: {
					other: "000 million"
				},
				1E9: {
					other: "0 billion"
				},
				1E10: {
					other: "00 billion"
				},
				1E11: {
					other: "000 billion"
				},
				1E12: {
					other: "0 trillion"
				},
				1E13: {
					other: "00 trillion"
				},
				1E14: {
					other: "000 trillion"
				}
			}
		},
		Rb = Qb,
		Rb = Qb;
	var Sb = {
		AED: [2, "dh", "\u062f.\u0625.", "DH"],
		ALL: [0, "Lek", "Lek"],
		AUD: [2, "$", "AU$"],
		BDT: [2, "\u09f3", "Tk"],
		BGN: [2, "lev", "lev"],
		BRL: [2, "R$", "R$"],
		CAD: [2, "$", "C$"],
		CDF: [2, "FrCD", "CDF"],
		CHF: [2, "CHF", "CHF"],
		CLP: [0, "$", "CL$"],
		CNY: [2, "\u00a5", "RMB\u00a5"],
		COP: [32, "$", "COL$"],
		CRC: [0, "\u20a1", "CR\u20a1"],
		CZK: [50, "K\u010d", "K\u010d"],
		DKK: [50, "kr.", "kr."],
		DOP: [2, "RD$", "RD$"],
		EGP: [2, "\u00a3", "LE"],
		ETB: [2, "Birr", "Birr"],
		EUR: [2, "\u20ac", "\u20ac"],
		GBP: [2, "\u00a3", "GB\u00a3"],
		HKD: [2, "$", "HK$"],
		HRK: [2, "kn", "kn"],
		HUF: [34,
			"Ft", "Ft"
		],
		IDR: [0, "Rp", "Rp"],
		ILS: [34, "\u20aa", "IL\u20aa"],
		INR: [2, "\u20b9", "Rs"],
		IRR: [0, "Rial", "IRR"],
		ISK: [0, "kr", "kr"],
		JMD: [2, "$", "JA$"],
		JPY: [0, "\u00a5", "JP\u00a5"],
		KRW: [0, "\u20a9", "KR\u20a9"],
		LKR: [2, "Rs", "SLRs"],
		LTL: [2, "Lt", "Lt"],
		MNT: [0, "\u20ae", "MN\u20ae"],
		MVR: [2, "Rf", "MVR"],
		MXN: [2, "$", "Mex$"],
		MYR: [2, "RM", "RM"],
		NOK: [50, "kr", "NOkr"],
		PAB: [2, "B/.", "B/."],
		PEN: [2, "S/.", "S/."],
		PHP: [2, "\u20b1", "Php"],
		PKR: [0, "Rs", "PKRs."],
		PLN: [50, "z\u0142", "z\u0142"],
		RON: [2, "RON", "RON"],
		RSD: [0, "din", "RSD"],
		RUB: [50, "\u20bd",
			"RUB"
		],
		SAR: [2, "Rial", "Rial"],
		SEK: [50, "kr", "kr"],
		SGD: [2, "$", "S$"],
		THB: [2, "\u0e3f", "THB"],
		TRY: [2, "TL", "YTL"],
		TWD: [2, "NT$", "NT$"],
		TZS: [0, "TSh", "TSh"],
		UAH: [2, "\u0433\u0440\u043d.", "UAH"],
		USD: [2, "$", "US$"],
		UYU: [2, "$", "$U"],
		VND: [48, "\u20ab", "VN\u20ab"],
		YER: [0, "Rial", "Rial"],
		ZAR: [2, "R", "ZAR"]
	};
	var Tb = {
			xc: ".",
			Qb: ",",
			Gc: "%",
			Sb: "0",
			Jc: "+",
			Dc: "-",
			Ac: "E",
			Ic: "\u2030",
			Cc: "\u221e",
			Fc: "NaN",
			Pb: "#,##0.###",
			Kc: "#E0",
			Hc: "#,##0%",
			wc: "\u00a4#,##0.00",
			yc: "USD"
		},
		x = Tb,
		x = Tb;
	var Wb = function () {
			this.T = x.yc;
			this.v = 40;
			this.g = 1;
			this.da = 0;
			this.o = 3;
			this.B = this.h = 0;
			this.Z = !1;
			this.N = this.K = "";
			this.C = "-";
			this.G = "";
			this.A = 1;
			this.l = [];
			this.H = this.S = !1;
			this.ba = 0;
			switch (1) {
				case 1:
					Ub(this, x.Pb);
					break;
				case 2:
					Ub(this, x.Kc);
					break;
				case 3:
					Ub(this, x.Hc);
					break;
				case 4:
					var a;
					a = x.wc;
					var b = ["0"],
						c = Sb[this.T][0] & 7;
					if (0 < c) {
						b.push(".");
						for (var d = 0; d < c; d++) b.push("0")
					}
					a = a.replace(/0.00/g, b.join(""));
					Ub(this, a);
					break;
				case 5:
					Vb(this, 1);
					break;
				case 6:
					Vb(this, 2);
					break;
				default:
					throw Error("Unsupported pattern type.");
			}
		},
		Ub = function (a, b) {
			b.replace(/ /g, "\u00a0");
			var c = [0];
			a.K = Xb(a, b, c);
			for (var d = c[0], e = -1, f = 0, g = 0, h = 0, l = -1, m = b.length, r = !0; c[0] < m && r; c[0]++) switch (b.charAt(c[0])) {
				case "#":
					0 < g ? h++ : f++;
					0 <= l && 0 > e && l++;
					break;
				case "0":
					if (0 < h) throw Error('Unexpected "0" in pattern "' + b + '"');
					g++;
					0 <= l && 0 > e && l++;
					break;
				case ",":
					0 < l && a.l.push(l);
					l = 0;
					break;
				case ".":
					if (0 <= e) throw Error('Multiple decimal separators in pattern "' + b + '"');
					e = f + g + h;
					break;
				case "E":
					if (a.H) throw Error('Multiple exponential symbols in pattern "' + b + '"');
					a.H = !0;
					a.B = 0;
					c[0] + 1 < m && "+" == b.charAt(c[0] + 1) && (c[0]++, a.Z = !0);
					for (; c[0] + 1 < m && "0" == b.charAt(c[0] + 1);) c[0]++, a.B++;
					if (1 > f + g || 1 > a.B) throw Error('Malformed exponential pattern "' + b + '"');
					r = !1;
					break;
				default:
					c[0]--, r = !1
			}
			0 == g && 0 < f && 0 <= e && (g = e, 0 == g && g++, h = f - g, f = g - 1, g = 1);
			if (0 > e && 0 < h || 0 <= e && (e < f || e > f + g) || 0 == l) throw Error('Malformed pattern "' + b + '"');
			h = f + g + h;
			a.o = 0 <= e ? h - e : 0;
			0 <= e && (a.h = f + g - e, 0 > a.h && (a.h = 0));
			a.g = (0 <= e ? e : h) - f;
			a.H && (a.v = f + a.g, 0 == a.o && 0 == a.g && (a.g = 1));
			a.l.push(Math.max(0, l));
			a.S = 0 == e || e == h;
			d = c[0] -
				d;
			a.N = Xb(a, b, c);
			c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++, a.C = Xb(a, b, c), c[0] += d, a.G = Xb(a, b, c)) : (a.C = a.K + a.C, a.G += a.N)
		},
		Vb = function (a, b) {
			a.ba = b;
			Ub(a, x.Pb);
			a.h = 0;
			a.o = 2;
			if (0 < a.h) throw Error("Can't combine significant digits and minimum fraction digits");
			a.da = 2
		},
		Zb = function (a, b) {
			var c = Math.pow(10, a.o),
				d;
			if (0 >= a.da) d = Math.round(b * c);
			else {
				d = b * c;
				var e = a.o;
				if (d) {
					var f = a.da - Yb(d) - 1;
					f < -e ? (e = Math.pow(10, e), d = Math.round(d / e) * e) : (e = Math.pow(10, f), d = Math.round(d * e) / e)
				}
				d = Math.round(d)
			}
			e = d;
			isFinite(e) ? (d = Math.floor(e /
				c), c = Math.floor(e - d * c)) : (d = b, c = 0);
			return {
				bc: d,
				Vc: c
			}
		},
		$b = function (a, b, c, d) {
			if (a.h > a.o) throw Error("Min value must be less than max value");
			d || (d = []);
			b = Zb(a, b);
			var e = Math.pow(10, a.o),
				f = b.bc,
				g = b.Vc,
				h = 0 < a.h || 0 < g || !1;
			b = a.h;
			h && (b = a.h);
			for (var l = "", m = f; 1E20 < m;) l = "0" + l, m = Math.round(m / 10);
			var l = m + l,
				r = x.xc,
				m = x.Sb.charCodeAt(0),
				t = l.length,
				B = 0;
			if (0 < f || 0 < c) {
				for (f = t; f < c; f++) d.push(String.fromCharCode(m));
				if (2 <= a.l.length)
					for (c = 1; c < a.l.length; c++) B += a.l[c];
				c = t - B;
				if (0 < c)
					for (var f = a.l, L = B = t = 0, ma = x.Qb, Aa = l.length,
							ja = 0; ja < Aa; ja++) {
						if (d.push(String.fromCharCode(m + 1 * +l.charAt(ja))), 1 < Aa - ja)
							if (L = f[B], ja < c) {
								var Ee = c - ja;
								(1 === L || 0 < L && 1 === Ee % L) && d.push(ma)
							} else B < f.length && (ja === c ? B += 1 : L === ja - c - t + 1 && (d.push(ma), t += L, B += 1))
					} else {
						c = l;
						l = a.l;
						f = x.Qb;
						B = 0;
						L = c.length;
						ma = [];
						for (t = l.length - 1; 0 <= t && 0 < L; t--) {
							B = l[t];
							for (Aa = 0; Aa < B && 0 <= L - Aa - 1; Aa++) ma.push(String.fromCharCode(m + 1 * +c.charAt(L - Aa - 1)));
							L -= B;
							0 < L && ma.push(f)
						}
						d.push.apply(d, ma.reverse())
					}
			} else h || d.push(String.fromCharCode(m));
			(a.S || h) && d.push(r);
			a = "" + (g + e);
			for (e = a.length;
				"0" ==
				a.charAt(e - 1) && e > b + 1;) e--;
			for (f = 1; f < e; f++) d.push(String.fromCharCode(m + 1 * +a.charAt(f)))
		},
		ac = function (a, b, c) {
			c.push(x.Ac);
			0 > b ? (b = -b, c.push(x.Dc)) : a.Z && c.push(x.Jc);
			b = "" + b;
			for (var d = x.Sb, e = b.length; e < a.B; e++) c.push(d);
			c.push(b)
		},
		Xb = function (a, b, c) {
			for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
				var g = b.charAt(c[0]);
				if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
				else if (e) d += g;
				else switch (g) {
					case "#":
					case "0":
					case ",":
					case ".":
					case ";":
						return d;
					case "\u00a4":
						c[0] + 1 < f && "\u00a4" == b.charAt(c[0] +
							1) ? (c[0]++, d += a.T) : d += Sb[a.T][1];
						break;
					case "%":
						if (1 != a.A) throw Error("Too many percent/permill");
						a.A = 100;
						d += x.Gc;
						break;
					case "\u2030":
						if (1 != a.A) throw Error("Too many percent/permill");
						a.A = 1E3;
						d += x.Ic;
						break;
					default:
						d += g
				}
			}
			return d
		},
		bc = {
			prefix: "",
			rc: "",
			Bb: 0
		},
		cc = function (a, b) {
			var c = 1 == a.ba ? Rb.vc : Rb.uc;
			if (3 > b) return bc;
			b = Math.min(14, b);
			c = c[Math.pow(10, b)];
			if (!c) return bc;
			c = c.other;
			return c && "0" != c ? (c = /([^0]*)(0+)(.*)/.exec(c)) ? {
				prefix: c[1],
				rc: c[3],
				Bb: b - (c[2].length - 1)
			} : bc : bc
		},
		Yb = function (a) {
			for (var b = 0; 1 <= (a /= 10);) b++;
			return b
		};
	var dc = function (a) {
			return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
		},
		ec = dc,
		ec = dc;
	var fc = function (a, b) {
			var c;
			if (void 0 === b) {
				c = a + "";
				var d = c.indexOf(".");
				c = Math.min(-1 == d ? 0 : c.length - d - 1, 3)
			} else c = b;
			return 1 == (a | 0) && 0 == c ? "one" : "other"
		},
		gc = fc,
		gc = fc;
	var jc = function (a) {
			this.g = [];
			this.o = [];
			this.l = new Wb;
			a && (a = hc(this, a), this.o = ic(this, a))
		},
		kc = /'([{}#].*?)'/g,
		lc = /''/g,
		nc = function (a, b) {
			if (0 == a.o.length) return "";
			var c = [];
			mc(a, a.o, b, !1, c);
			for (c = c.join(""); 0 < a.g.length;) c = c.replace(a.h(a.g), a.g.pop());
			return c
		},
		mc = function (a, b, c, d, e) {
			for (var f = 0; f < b.length; f++) switch (b[f].type) {
				case 4:
					e.push(b[f].value);
					break;
				case 3:
					var g = b[f].value,
						h = a,
						l = e,
						m = c[g];
					p(m) ? (h.g.push(m), l.push(h.h(h.g))) : l.push("Undefined parameter - " + g);
					break;
				case 2:
					g = b[f].value;
					h = e;
					l =
						g.jb;
					p(c[l]) ? (l = g[c[l]], p(l) || (l = g.other), mc(a, l, c, d, h)) : h.push("Undefined parameter - " + l);
					break;
				case 0:
					g = b[f].value;
					oc(a, g, c, gc, d, e);
					break;
				case 1:
					g = b[f].value, oc(a, g, c, ec, d, e)
			}
		},
		oc = function (a, b, c, d, e, f) {
			var g = b.jb,
				h = b.Tb,
				l = +c[g];
			if (isNaN(l)) f.push("Undefined or invalid parameter - " + g);
			else if (h = l - h, g = b[c[g]], p(g) || (d = a.l.ra ? d(h, a.l.ra()) : d(h), g = b[d], p(g) || (g = b.other)), b = [], mc(a, g, c, e, b), c = b.join(""), e) f.push(c);
			else {
				a = a.l;
				d = h;
				if (isNaN(d)) a = x.Fc;
				else {
					e = [];
					h = d;
					0 == a.ba ? h = bc : (h = Math.abs(h), b = cc(a,
						1 >= h ? 0 : Yb(h)).Bb, h = cc(a, b + Yb(Zb(a, h / Math.pow(10, b)).bc)));
					d /= Math.pow(10, h.Bb);
					e.push(h.prefix);
					b = 0 > d || 0 == d && 0 > 1 / d;
					e.push(b ? a.C : a.K);
					if (isFinite(d))
						if (d = d * (b ? -1 : 1) * a.A, a.H)
							if (0 == d) $b(a, d, a.g, e), ac(a, 0, e);
							else {
								g = Math.floor(Math.log(d) / Math.log(10) + 2E-15);
								d /= Math.pow(10, g);
								l = a.g;
								if (1 < a.v && a.v > a.g) {
									for (; 0 != g % a.v;) d *= 10, g--;
									l = 1
								} else 1 > a.g ? (g++, d /= 10) : (g -= a.g - 1, d *= Math.pow(10, a.g - 1));
								$b(a, d, l, e);
								ac(a, g, e)
							}
					else $b(a, d, a.g, e);
					else e.push(x.Cc);
					e.push(b ? a.G : a.N);
					e.push(h.rc);
					a = e.join("")
				}
				f.push(c.replace(/#/g,
					a))
			}
		},
		hc = function (a, b) {
			var c = a.g,
				d = u(a.h, a);
			b = b.replace(lc, function () {
				c.push("'");
				return d(c)
			});
			return b = b.replace(kc, function (a, b) {
				c.push(b);
				return d(c)
			})
		},
		pc = function (a) {
			var b = 0,
				c = [],
				d = [],
				e = /[{}]/g;
			e.lastIndex = 0;
			for (var f; f = e.exec(a);) {
				var g = f.index;
				"}" == f[0] ? (c.pop(), 0 == c.length && (f = {
					type: 1
				}, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (0 == c.length && (b = a.substring(b, g), "" != b && d.push({
					type: 0,
					value: b
				}), b = g + 1), c.push("{"))
			}
			b = a.substring(b);
			"" != b && d.push({
				type: 0,
				value: b
			});
			return d
		},
		qc = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
		rc = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
		sc = /^\s*(\w+)\s*,\s*select\s*,/,
		ic = function (a, b) {
			for (var c = [], d = pc(b), e = 0; e < d.length; e++) {
				var f = {};
				if (0 == d[e].type) f.type = 4, f.value = d[e].value;
				else if (1 == d[e].type) {
					var g = d[e].value;
					switch (qc.test(g) ? 0 : rc.test(g) ? 1 : sc.test(g) ? 2 : /^\s*\w+\s*/.test(g) ? 3 : 5) {
						case 2:
							f.type = 2;
							f.value = tc(a, d[e].value);
							break;
						case 0:
							f.type = 0;
							f.value = uc(a, d[e].value);
							break;
						case 1:
							f.type = 1;
							f.value = vc(a, d[e].value);
							break;
						case 3:
							f.type = 3, f.value = d[e].value
					}
				}
				c.push(f)
			}
			return c
		},
		tc = function (a,
			b) {
			var c = "";
			b = b.replace(sc, function (a, b) {
				c = b;
				return ""
			});
			var d = {};
			d.jb = c;
			for (var e = pc(b), f = 0; f < e.length;) {
				var g = e[f].value;
				f++;
				if (1 == e[f].type) var h = ic(a, e[f].value);
				d[g.replace(/\s/g, "")] = h;
				f++
			}
			return d
		},
		uc = function (a, b) {
			var c = "",
				d = 0;
			b = b.replace(qc, function (a, b, e) {
				c = b;
				e && (d = parseInt(e, 10));
				return ""
			});
			var e = {};
			e.jb = c;
			e.Tb = d;
			for (var f = pc(b), g = 0; g < f.length;) {
				var h = f[g].value;
				g++;
				if (1 == f[g].type) var l = ic(a, f[g].value);
				e[h.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = l;
				g++
			}
			return e
		},
		vc = function (a, b) {
			var c = "";
			b =
				b.replace(rc, function (a, b) {
					c = b;
					return ""
				});
			var d = {};
			d.jb = c;
			d.Tb = 0;
			for (var e = pc(b), f = 0; f < e.length;) {
				var g = e[f].value;
				f++;
				if (1 == e[f].type) var h = ic(a, e[f].value);
				d[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = h;
				f++
			}
			return d
		};
	jc.prototype.h = function (a) {
		return "\ufddf_" + (a.length - 1).toString(10) + "_"
	};
	chrome.i18n.getMessage("5591817825901366736");
	chrome.i18n.getMessage("4777755382377009548");
	chrome.i18n.getMessage("7154665243775472938");
	chrome.i18n.getMessage("2566403151253785267");
	chrome.i18n.getMessage("9041611521175673293");
	chrome.i18n.getMessage("1719053155706676551");
	chrome.i18n.getMessage("2359350477261263182");
	chrome.i18n.getMessage("6033899037238526353");
	chrome.i18n.getMessage("350784886925845499");
	chrome.i18n.getMessage("7300188402017534561");
	chrome.i18n.getMessage("5111612377742357508");
	chrome.i18n.getMessage("1603625918394102877");
	chrome.i18n.getMessage("845676589918576610");
	chrome.i18n.getMessage("1325447181056095975");
	chrome.i18n.getMessage("7687211811508159108");
	chrome.i18n.getMessage("469477235199550748");
	chrome.i18n.getMessage("5217401654984037028");
	chrome.i18n.getMessage("7596432446723472214");
	chrome.i18n.getMessage("5091977456489870115");
	chrome.i18n.getMessage("4380394239807746302");
	chrome.i18n.getMessage("142359106099692409");
	chrome.i18n.getMessage("2608454409093505599");
	chrome.i18n.getMessage("5579702837382664819");
	chrome.i18n.getMessage("2088133380647290173");
	chrome.i18n.getMessage("2257250286834696444");
	chrome.i18n.getMessage("5603457799050818619");
	chrome.i18n.getMessage("169055910458549089");
	chrome.i18n.getMessage("6178455470693561470");
	chrome.i18n.getMessage("6433056041891472200");
	chrome.i18n.getMessage("8110520007971944893");
	chrome.i18n.getMessage("9021466412659564505");
	chrome.i18n.getMessage("1378894003206512970");
	chrome.i18n.getMessage("8243618543879664815");
	chrome.i18n.getMessage("7987287518899618882");
	chrome.i18n.getMessage("2785193083209311775");
	chrome.i18n.getMessage("877609626717798805");
	chrome.i18n.getMessage("9092805374125336008");
	chrome.i18n.getMessage("7754736007020239723");
	chrome.i18n.getMessage("6233852423673631009");
	chrome.i18n.getMessage("1678004121951995792");
	chrome.i18n.getMessage("5561412620611998456");
	chrome.i18n.getMessage("3646641743349296313");
	chrome.i18n.getMessage("9099680152087323883");
	chrome.i18n.getMessage("3054430907861836285");
	chrome.i18n.getMessage("2662413919655166560");
	chrome.i18n.getMessage("3977845230474613475");
	chrome.i18n.getMessage("5679720964567650205");
	chrome.i18n.getMessage("5425054962709217464");
	chrome.i18n.getMessage("7487940627543583924");
	chrome.i18n.getMessage("7820796809104165402");
	chrome.i18n.getMessage("482762608498192214");
	chrome.i18n.getMessage("1594074305226612589");
	chrome.i18n.getMessage("8326016121095925083");
	chrome.i18n.getMessage("4437205840090971415");
	chrome.i18n.getMessage("8656517483230131428");
	chrome.i18n.getMessage("5822895345080436445");
	chrome.i18n.getMessage("362505154270301776");
	chrome.i18n.getMessage("8008659366698984178");
	chrome.i18n.getMessage("8349590636030562194");
	chrome.i18n.getMessage("2506204110427755391");
	chrome.i18n.getMessage("1932973762029792550");
	chrome.i18n.getMessage("2854553310495850050");
	chrome.i18n.getMessage("1437051989465419947");
	chrome.i18n.getMessage("8459240917425469878");
	chrome.i18n.getMessage("377368134657453613");
	chrome.i18n.getMessage("9148646719734889095");
	chrome.i18n.getMessage("5474647412096976366");
	chrome.i18n.getMessage("4677342274083596624");
	chrome.i18n.getMessage("1117324761561996205");
	chrome.i18n.getMessage("62686912805627037");
	chrome.i18n.getMessage("625779090990399178");
	chrome.i18n.getMessage("7977240188055092028");
	chrome.i18n.getMessage("5500830105937873966");
	chrome.i18n.getMessage("4313041477349547430");
	chrome.i18n.getMessage("1033240210015440654");
	chrome.i18n.getMessage("930782679857911410");
	chrome.i18n.getMessage("3284734782999930756");
	var wc = chrome.i18n.getMessage("1582412901770221448");
	chrome.i18n.getMessage("7333334175520057323");
	chrome.i18n.getMessage("534304870772683249");
	var xc = chrome.i18n.getMessage("5378436065321978089"),
		yc = chrome.i18n.getMessage("963040144042262397");
	chrome.i18n.getMessage("4806941490284711499");
	chrome.i18n.getMessage("3650952447025672637");
	chrome.i18n.getMessage("7407898565330883980");
	chrome.i18n.getMessage("5089168125978769021");
	chrome.i18n.getMessage("5456454482863742119");
	chrome.i18n.getMessage("4974279938502768331");
	chrome.i18n.getMessage("3051034269680162898");
	var zc = chrome.i18n.getMessage("2860423337665026261");
	chrome.i18n.getMessage("4511605174156009486");
	chrome.i18n.getMessage("546306107859654806");
	chrome.i18n.getMessage("1847259066982820034");
	chrome.i18n.getMessage("5334597244901829906");
	chrome.i18n.getMessage("213958631597214757");
	chrome.i18n.getMessage("4849410737412842755");
	chrome.i18n.getMessage("101199566431814132");
	chrome.i18n.getMessage("278208331708453602");
	chrome.i18n.getMessage("2301390744929043794");
	chrome.i18n.getMessage("1691734467561749621");
	chrome.i18n.getMessage("1460136507747533015");
	chrome.i18n.getMessage("6878231700728680871");
	var Ac = chrome.i18n.getMessage("5161136602189081305");
	chrome.i18n.getMessage("3423652049926153935");
	chrome.i18n.getMessage("2926789704127794819");
	chrome.i18n.getMessage("2414987366409119013");
	chrome.i18n.getMessage("2117634893694108880");
	chrome.i18n.getMessage("2315132909835126412");
	chrome.i18n.getMessage("3484416881429158332");
	chrome.i18n.getMessage("6718105992776681941");
	chrome.i18n.getMessage("8143412461134291283");
	chrome.i18n.getMessage("7058809993296833390");
	chrome.i18n.getMessage("1124849668149719420");
	chrome.i18n.getMessage("7436494590700857376");
	chrome.i18n.getMessage("2015775921681923490");
	chrome.i18n.getMessage("468549910877472151");
	chrome.i18n.getMessage("2856195586300956496");
	chrome.i18n.getMessage("1036132178487616999");
	chrome.i18n.getMessage("5672850901284728452");
	chrome.i18n.getMessage("5901988325256570549");
	chrome.i18n.getMessage("3832066920911226237");
	chrome.i18n.getMessage("2518095696810513128");
	chrome.i18n.getMessage("1796916450152826566");
	chrome.i18n.getMessage("1507362459078633250");
	var Bc = chrome.i18n.getMessage("6572308230373875858"),
		Cc = chrome.i18n.getMessage("528339682728930567"),
		Dc = chrome.i18n.getMessage("6380136177516870340"),
		Ec = chrome.i18n.getMessage("7778510137824413661"),
		Fc = chrome.i18n.getMessage("5369754108335659754"),
		Gc = chrome.i18n.getMessage("8275729822640276507"),
		Hc = chrome.i18n.getMessage("6646879811322446587"),
		Ic = chrome.i18n.getMessage("687829671213164815"),
		Jc = chrome.i18n.getMessage("7804811638177746132"),
		Kc = chrome.i18n.getMessage("9181119817188520774"),
		Lc = chrome.i18n.getMessage("3596311690500158112"),
		Mc = chrome.i18n.getMessage("6559526625155197659");
	chrome.i18n.getMessage("7376646180156094924");
	chrome.i18n.getMessage("3924970930634517299");
	chrome.i18n.getMessage("2803486006471792395");
	chrome.i18n.getMessage("5328412494790717118");
	chrome.i18n.getMessage("7342965026300699486");
	chrome.i18n.getMessage("7512206123241896524");
	chrome.i18n.getMessage("3275784965391951363");
	chrome.i18n.getMessage("6253147562582857321");
	chrome.i18n.getMessage("2967109838548277236");
	chrome.i18n.getMessage("3880744822029422406");
	chrome.i18n.getMessage("5266193592374285468");
	chrome.i18n.getMessage("2528672033407304265");
	chrome.i18n.getMessage("1519227660570105215");
	chrome.i18n.getMessage("2620868598794227408");
	chrome.i18n.getMessage("218054763532467155");
	chrome.i18n.getMessage("1035347665345261212");
	chrome.i18n.getMessage("8723654283178734366");
	chrome.i18n.getMessage("4943286974087295923");
	chrome.i18n.getMessage("1799055681547226163");
	chrome.i18n.getMessage("8618253608886563193");
	chrome.i18n.getMessage("6963034896702768829");
	chrome.i18n.getMessage("2396988228061015409");
	chrome.i18n.getMessage("2665932089093244134");
	chrome.i18n.getMessage("609920334473042917");
	chrome.i18n.getMessage("4052124018014680002");
	chrome.i18n.getMessage("639862355711352140");
	chrome.i18n.getMessage("8375480305752533335");
	chrome.i18n.getMessage("2619769175243212891");
	chrome.i18n.getMessage("1635366592844795535");
	chrome.i18n.getMessage("3087091861834859241");
	chrome.i18n.getMessage("4639190252078874549");
	chrome.i18n.getMessage("3153433695439945201");
	chrome.i18n.getMessage("7666041165203922544");
	chrome.i18n.getMessage("7009051272745522428");
	chrome.i18n.getMessage("37315674215151127");
	chrome.i18n.getMessage("1680034627075195442");
	chrome.i18n.getMessage("3248191933104379517");
	chrome.i18n.getMessage("6301951743370594966");
	chrome.i18n.getMessage("7077571379260349566");
	chrome.i18n.getMessage("1839253253564716482");
	chrome.i18n.getMessage("5305493859040531582");
	chrome.i18n.getMessage("3947500116452515010");
	chrome.i18n.getMessage("2454859602363061373");
	chrome.i18n.getMessage("5621148847082889884");
	chrome.i18n.getMessage("1477567329816921885");
	chrome.i18n.getMessage("111315886393984302");
	chrome.i18n.getMessage("3501212562096780610");
	chrome.i18n.getMessage("2166866096346653276");
	chrome.i18n.getMessage("8335280220243538613");
	var Nc = chrome.i18n.getMessage("2149498606985329379"),
		Oc = chrome.i18n.getMessage("7124932478652977474");
	chrome.i18n.getMessage("1942405576047748946");
	chrome.i18n.getMessage("7056277361038404533");
	chrome.i18n.getMessage("5089667744614498582");
	chrome.i18n.getMessage("1592899529499992997");
	chrome.i18n.getMessage("8583880697323281603");
	chrome.i18n.getMessage("5086992011880811613");
	chrome.i18n.getMessage("3328377906372603674");
	chrome.i18n.getMessage("4083819681339999404");
	chrome.i18n.getMessage("5603774725128707055");
	chrome.i18n.getMessage("9165786145616395636");
	chrome.i18n.getMessage("3646623530558910508");
	chrome.i18n.getMessage("3951067234379178869");
	var Pc = chrome.i18n.getMessage("7837019345094275313");
	new jc(Pc);
	var Qc = chrome.i18n.getMessage("4656590351979220611");
	new jc(Qc);
	var Rc = chrome.i18n.getMessage("482023609949292589");
	new jc(Rc);
	var Sc = chrome.i18n.getMessage("2085656217833573245");
	new jc(Sc);
	var Tc = chrome.i18n.getMessage("4924494577575330019");
	new jc(Tc);
	var Uc = chrome.i18n.getMessage("3493389010978087325");
	new jc(Uc);
	chrome.i18n.getMessage("2195758109188330562");
	var Vc = chrome.i18n.getMessage("7944194550132470305"),
		Wc = chrome.i18n.getMessage("3002524775820283106"),
		Xc = chrome.i18n.getMessage("8694618136165028235"),
		Yc = chrome.i18n.getMessage("8632024322663078476"),
		Zc = chrome.i18n.getMessage("373495866496779840"),
		$c = chrome.i18n.getMessage("8590712065595806821"),
		ad = chrome.i18n.getMessage("3355297279379313357");
	chrome.i18n.getMessage("6259598030649933216");
	chrome.i18n.getMessage("3554323414956249846");
	chrome.i18n.getMessage("4257688962636177926");
	chrome.i18n.getMessage("1337190557080419948");
	chrome.i18n.getMessage("3735789968703193383");
	chrome.i18n.getMessage("6358134683201979560");
	chrome.i18n.getMessage("5743059824945410094");
	chrome.i18n.getMessage("2135921744011555145");
	chrome.i18n.getMessage("1185158158029036642");
	chrome.i18n.getMessage("2102196226288832274");
	chrome.i18n.getMessage("4991252214297708837");
	chrome.i18n.getMessage("178181731883558542");
	chrome.i18n.getMessage("1148670835609345833");
	var bd = function () {
		var a = ra.$().g;
		return {
			tf: "col-animate",
			Qg: "col-no-animate",
			Tf: "col-visibility-culled",
			Sc: "col-drop-target",
			rh: "col-stars-gws",
			ye: {
				qf: "col-ab-button-active"
			},
			Ae: {
				I: "col-bbv",
				title: "col-bbv-ttl",
				info: "col-bbv-info"
			},
			Be: {
				Df: a ? "col-bounding-box-rtl" : "col-bounding-box",
				jc: a ? "col-bounding-box-pane-rtl" : "col-bounding-box-pane"
			},
			De: {
				I: "col-bb",
				link: "col-bb-link"
			},
			Ee: {
				I: "col-btn",
				disabled: "col-btn-disabled",
				Pg: "col-btn-no-outline",
				red: "col-red-btn",
				ig: "col-grey-btn",
				blue: "col-blue-btn"
			},
			Ob: {
				wb: "colc",
				fc: "colc-main",
				Ld: "colc-maine",
				hidden: "colc-hidden",
				Id: "colc-img",
				$b: "colc-over",
				Jd: "colc-innero",
				Pc: "colc-conft",
				Oc: "colc-confi",
				tc: a ? "colc-undoi-rtl" : "colc-undoi",
				ue: "colc-vers",
				$d: "colc-previmg",
				Qd: "colc-nextimg",
				Tc: "colc-fchip",
				Db: "colc-fchiph",
				Rd: "colc-noimgshow",
				te: "colc-tilea",
				title: "colc-title",
				Kb: "colc-note",
				url: "colc-url",
				group: "colc-grp",
				Xc: "colc-grpe",
				Yc: "colc-grpt",
				Lc: "colc-arw",
				ve: "colc-view",
				xe: "colc-viewt",
				we: "colc-viewd",
				ne: "colc-sug",
				qe: "colc-sugs",
				pe: "colc-sugi",
				yb: "colc-sugbb",
				re: "colc-sugt",
				oe: "colc-sugh",
				text: "colc-text",
				se: "colc-texthover",
				icon: "colc-icon",
				Yd: "col-popup-exp",
				Zd: "col-popup-prom"
			},
			He: {
				Wb: "col-cv-drag-shadow",
				ie: "col-cv-select",
				selected: "col-cv-selected",
				Ih: "col-cv-updated"
			},
			Ie: {
				I: "col-cv",
				Bf: "col-cv-non-navigable",
				Mc: "col-cv-collections-span",
				content: "col-cv-content",
				Vf: "col-cv-bg-domain-icon",
				Wb: "col-cv-drag-shadow",
				cg: "col-cv-favicon",
				dg: "col-cv-favicon-editable",
				hidden: "col-mri-hidden",
				Oa: "col-cv-image",
				qg: "col-cv-image-base",
				$b: "col-cv-overlay",
				overflow: "col-context-menu-button",
				select: a ? "col-cv-select-rtl" : "col-cv-select",
				selected: "col-cv-selected",
				je: "col-cv-select-editable",
				title: "col-cv-title",
				url: "col-cv-url",
				ze: {
					I: "col-cv-bg",
					le: "col-cv-bg-shown",
					title: "col-cv-bg-title"
				},
				zc: {
					background: "col-cv-descbg",
					ph: "col-cv-desc-snippet",
					title: "col-cv-desc-title",
					Hg: "col-cv-title-long",
					eh: "col-cv-search-title",
					dh: "col-cv-search-snippet"
				},
				Me: {
					background: "col-cv-dbg",
					xf: "col-cv-dbg-hidden",
					domain: "col-cv-dmn",
					Kb: "col-cv-dnot",
					title: "col-cv-dttl"
				}
			},
			Fe: {
				pf: "col-detail-actions",
				background: "col-detail-bg-default",
				I: "col-cv-edit-detail",
				eg: "col-cv-edit-field",
				heading: "col-cv-edit-info-heading",
				Oa: "col-cv-edit-image",
				rg: "col-detail-image",
				info: "col-cv-edit-info",
				pa: "col-detail-remove",
				nc: "col-cv-edit-rimg",
				close: "col-cv-edit-info-close",
				view: "col-detail-view",
				visible: "col-cv-edit-detail-visible"
			},
			Ge: {
				I: "col-cv-edit-div",
				content: "col-cv-edit-content",
				Md: "col-context-menu-option",
				visible: "col-cv-edit-div-visible"
			},
			Je: {
				I: "col-context-menu",
				button: "col-context-menu-button",
				Md: "col-context-menu-option",
				Lg: "col-context-menu-padding"
			},
			ef: {
				Qc: "colsv-suggested-clip-container",
				I: "colsv-suggested-clip",
				Xg: "colsv-overlay-loading",
				uh: "colsv-thumbnail",
				text: "colsv-text",
				title: "colsv-title",
				description: "colsv-desc",
				url: "colsv-url",
				link: "colsv-link",
				vh: "colsv-thumbnail-title",
				Zf: "colsv-explanation",
				$f: "colsv-explanation-link",
				bg: "colsv-explanation-title",
				ag: "colsv-explanation-text"
			},
			Ke: {
				I: "col-curationv",
				zf: "col-banner",
				version: "col-ver",
				ug: "col-curationv-bounding",
				xh: "col-tiles-container",
				$e: {
					I: "col-pv",
					selected: "col-pv-select",
					title: "col-pv-title",
					Bh: "col-pv-title-crx"
				},
				gf: {
					selected: "col-tlv-select"
				}
			},
			Ne: {
				Nf: "col-dnd-dragel-counter",
				item: "col-dnd-dragel-item",
				fc: "col-dnd-dragel"
			},
			Bc: {
				I: "col-editable-elt",
				editable: "col-editable-elt-enabled"
			},
			Qe: {
				gg: "col-ft-row",
				Mh: "col-ft-zippy",
				Oh: "col-ft-zippy-open",
				Nh: a ? "col-ft-zippy-closed-rtl" : "col-ft-zippy-closed",
				icon: "col-ft-icon",
				pg: "col-ft-icon-bookmarks-bar",
				fg: "col-ft-name",
				check: "col-ft-check",
				Ff: "col-ft-check-sel",
				Ag: "col-ft-items",
				hg: "col-ft-main",
				Hh: "col-ft-header",
				Yg: "col-ft-headerParentLabel",
				gh: "col-ft-selectedFolder",
				Gh: "col-ft-body"
			},
			Re: {
				Sc: "col-fv-info-drop-target",
				ie: "col-fv-select",
				selected: "col-fv-selected",
				Ue: {
					Ig: "col-fv-info",
					content: "col-fv-content",
					title: "col-fv-info-title",
					background: "col-fv-info-bg",
					Og: a ? "col-fv-info-bg-no-items-rtl" : "col-fv-info-bg-no-items",
					yf: "col-fv-bg-list"
				}
			},
			Se: {
				sg: "col-fv-info-box",
				nf: "col-fv-acl-text",
				uf: "col-fv-author",
				vf: "col-fv-author-by",
				I: "col-fel",
				Uf: "col-fv-del-btn",
				Wb: "col-cv-drag-shadow",
				wg: "col-fv-list-bg",
				zg: "col-fv-list-icon",
				Dg: "col-fv-list-title",
				yg: "col-fv-list-desc",
				Bg: "col-fv-list-privacy",
				placeholder: "col-fv-placeholder",
				kc: "col-fv-info-ref-private",
				profile: "col-fv-profile",
				$g: "col-fv-profile-px",
				select: "col-fv-select",
				selected: "col-fel-selected",
				je: "col-fv-select-editable",
				jh: "col-fv-share-btn",
				kh: "col-fv-share-btn-hidden",
				lh: "col-fv-share-open",
				Ce: {
					rf: "col-breadcrumb-active-drop-target",
					I: "col-fv-breadcrumb",
					Af: "col-fv-breadcrumbs-focused",
					list: "col-fv-breadcrumbs",
					Cg: a ? "col-fv-breadcrumbs-rtl" : "",
					selected: "col-breadcrumb-selected",
					text: "col-fv-breadcrumb-text",
					th: "col-fv-breadcrumb-text-focused"
				},
				zc: {
					I: "col-fv-desc"
				},
				Te: {
					I: "col-fv-info",
					ah: "col-fv-info-ref"
				},
				kf: {
					I: "col-fv-ttl",
					Qc: "col-fv-ttl-cont"
				}
			},
			Ve: {
				button: "col-intro-button",
				Ef: "col-intro-buttons-row",
				Na: "col-intro-header",
				ng: "col-intro-header-btn",
				kg: "col-intro-head-logo",
				lg: "col-intro-head-text",
				mg: "col-intro-head-title",
				jg: "col-intro-head-desc",
				hide: "col-intro-hide",
				hidden: "col-intro-hidden",
				icon: "col-intro-icon",
				Wg: "col-intro-organize",
				jc: "col-intro-pane",
				sh: "col-intro-text-col",
				search: "col-intro-search",
				he: "col-intro-section",
				fh: "col-intro-section-clear",
				qh: "col-intro-star",
				text: "col-intro-text",
				title: "col-intro-title",
				wb: "col-intro-wrapper",
				Lh: "col-intro-wrapper-cont",
				tg: "col-intro-view-active"
			},
			We: {
				background: "col-list-clip-bg",
				Jh: "col-list-overlay",
				Kb: "col-list-clip-note",
				url: "col-list-clip-url",
				Mc: "col-list-clip-chip",
				title: "col-list-title",
				select: "col-list-select",
				Gf: "col-list-checkbox",
				hidden: "col-list-hidden"
			},
			Xe: {
				I: "col-modal-base",
				buttons: "col-modal-buttons",
				If: "col-modal-close-button",
				Jf: "col-modal-close-container",
				content: "col-modal-content",
				Lf: "col-modal-content-base",
				Mf: "col-modal-content-visible",
				Ya: "col-modal-create-button",
				Of: "col-nav-create-clip-input",
				Pf: "col-nav-create-menu",
				Rf: a ? "col-nav-create-menu-item-rtl" : "col-nav-create-menu-item",
				Qf: "col-nav-create-menu-folio",
				Sf: "col-nav-create-splitter",
				sf: "col-nav-add-clip-button",
				fixed: "col-modal-fixed",
				label: "col-modal-label",
				open: "col-modal-open",
				jc: "col-modal-pane",
				mh: "col-modal-shield",
				nh: "col-modal-shield-visible",
				title: "col-modal-title",
				Le: {
					I: "col-modal-delete-folio",
					name: "col-modal-delete-folio-name"
				},
				Oe: {
					I: "col-modal-feedback",
					form: "col-modal-feedback-form"
				}
			},
			Ec: {
				I: "col-mri",
				Oa: "col-mri-image",
				hidden: "col-mri-hidden"
			},
			Ye: {
				I: "col-nav",
				Wf: "col-nav-expander",
				Xf: "col-nav-expander-closed",
				Yf: "col-nav-expander-open",
				og: a ? "col-nav-header-rtl" : "col-nav-header",
				item: "col-nav-item",
				list: "col-nav-list",
				xg: "col-nav-list-collapsed",
				Gg: "col-nav-logo",
				he: "col-nav-section",
				selected: "col-nav-item-selected",
				le: "col-nav-shown",
				Pe: {
					I: "col-navie-signin-bubble-base",
					content: "col-navie-signin-bubble-content",
					Oa: "col-navie-signin-bubble-image",
					link: "col-navie-signin-bubble-link",
					links: "col-navie-signin-bubble-links"
				}
			},
			Rb: {
				ma: "coln-anim",
				text: "coln-text",
				Sd: "coln-noscr",
				I: "coln-int",
				ge: "colsb",
				na: "coln-fola",
				Ua: "coln-newf",
				ca: "coln-inpf",
				rb: "coln-inpf-err",
				Ya: "coln-cref",
				Cb: a ? "coln-dup-rtl" : "coln-dup",
				Na: "coln-nhed",
				fb: "coln-ntit",
				Nb: "coln-topsh",
				zb: "coln-btmsh",
				ib: "coln-newf-clone",
				qb: "coln-nhed-clone",
				Yb: "coln-ntit-clone",
				Da: {
					I: "coln-fol",
					selected: "coln-fols",
					wb: "coln-folw",
					title: "coln-folt",
					kc: "coln-foli",
					yb: "coln-folbb",
					Rc: a ? "coln-fold-rtl" : "coln-fold"
				}
			},
			hf: {
				I: "col-cur-tl",
				label: "col-cur-tl-label",
				vg: "col-cur-tl-line"
			},
			af: {
				Rg: "col-ogb-logo",
				Sg: "col-ogb-sbox",
				Tg: "col-ogb-sbtn",
				Vg: "col-ogb"
			},
			df: {
				I: "col-sg",
				Kf: "col-sg-condensed",
				Eg: "col-sg-listview",
				title: "col-sg-info-title"
			},
			jf: {
				I: "col-tlv",
				zh: "col-tlv-title",
				Ah: "col-tlv-title-crx",
				Eh: "col-tlv-title-desc",
				title: "col-tlv-title-ft"
			},
			lf: {
				I: "col-tb-base",
				buttons: "col-tb-buttons",
				chrome: "col-tb-chrome",
				Jg: "col-tb-menu",
				Mg: "col-tb-nav",
				Ng: "col-tb-nav-title",
				oh: "col-tb-signin",
				Ze: {
					I: "col-tb-presentation",
					button: "col-tb-presentation-btn",
					caption: "col-tb-presentation-caption",
					wh: "col-tb-presentation-tile"
				},
				cf: {
					I: "col-tb-settings",
					button: "col-tb-settings-btn",
					Kg: "col-menu-header"
				},
				bf: {
					I: "col-tb-selector",
					button: "col-tb-selector-btn"
				}
			},
			mf: {
				I: "col-zd",
				Fh: "col-zdtt",
				Cf: "col-zdbt",
				Hf: "col-zdc",
				link: "col-zda",
				Oa: "col-zdi",
				search: "col-zd-search",
				bh: "col-zd-searchfilter",
				filter: "col-zd-filter",
				yh: "col-zd-timeline",
				profile: "col-zd-profile",
				R: "col-zd-folio"
			},
			ff: {
				I: "suggested-content-view",
				title: "col-tlv-title",
				Ch: "col-tlv-title-desc",
				Dh: "col-tlv-title-ft",
				ih: "suggested-content-view-selector",
				error: "suggested-content-view-zero-items",
				Fg: "suggested-content-view-indicator"
			}
		}
	};
	var cd = function () {
		this.Ra = this.Ra;
		this.ra = this.ra
	};
	cd.prototype.Ra = !1;
	cd.prototype.sa = function () {
		this.Ra || (this.Ra = !0, this.M())
	};
	var y = function (a, b) {
		var c = oa(dd, b);
		a.Ra ? c.call(void 0) : (a.ra || (a.ra = []), a.ra.push(p(void 0) ? u(c, void 0) : c))
	};
	cd.prototype.M = function () {
		if (this.ra)
			for (; this.ra.length;) this.ra.shift()()
	};
	var dd = function (a) {
			a && "function" == typeof a.sa && a.sa()
		},
		ed = function (a) {
			for (var b = 0, c = arguments.length; b < c; ++b) {
				var d = arguments[b];
				ea(d) ? ed.apply(null, d) : dd(d)
			}
		};
	var z = function (a, b) {
		this.type = a;
		this.C = this.target = b;
		this.G = !1;
		this.oc = !0
	};
	z.prototype.l = function () {
		this.G = !0
	};
	z.prototype.h = function () {
		this.oc = !1
	};
	var A = function (a, b, c, d) {
		z.call(this, a);
		this.data = b || "";
		this.g = c || "";
		this.o = d || ""
	};
	v(A, z);
	var wa;
	a: {
		var fd = n.navigator;
		if (fd) {
			var gd = fd.userAgent;
			if (gd) {
				wa = gd;
				break a
			}
		}
		wa = ""
	};
	var hd = function () {
			this.h = "";
			this.g = null
		},
		id = function (a) {
			var b = new hd;
			b.h = a;
			b.g = 0
		};
	id("<!DOCTYPE html>");
	id("");
	id("<br>");
	var jd = function (a) {
			this.g = new qb;
			if (a) {
				a = tb(a);
				for (var b = a.length, c = 0; c < b; c++) this.nb(a[c])
			}
		},
		kd = function (a) {
			var b = typeof a;
			return "object" == b && a || "function" == b ? "o" + (a[ia] || (a[ia] = ++ka)) : b.substr(0, 1) + a
		};
	k = jd.prototype;
	k.Ga = function () {
		return this.g.Ga()
	};
	k.nb = function (a) {
		this.g.set(kd(a), a)
	};
	k.removeAll = function (a) {
		a = tb(a);
		for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
	};
	k.remove = function (a) {
		return this.g.remove(kd(a))
	};
	k.clear = function () {
		this.g.clear()
	};
	k.contains = function (a) {
		a = kd(a);
		return sb(this.g.h, a)
	};
	k.fa = function () {
		return this.g.fa()
	};
	k.clone = function () {
		return new jd(this)
	};
	k.Ba = function () {
		return this.g.Ba(!1)
	};
	var ld = xa("Macintosh"),
		md = xa("Windows"),
		nd = xa("Linux") || xa("CrOS"),
		od = "",
		pd = /WebKit\/(\S+)/.exec(wa);
	pd && (od = pd ? pd[1] : "");
	var qd = od,
		rd = {},
		sd = function (a) {
			var b;
			if (!(b = rd[a])) {
				b = 0;
				for (var c = va(String(qd)).split("."), d = va(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
					var g = c[f] || "",
						h = d[f] || "",
						l = /(\d*)(\D*)/g,
						m = /(\d*)(\D*)/g;
					do {
						var r = l.exec(g) || ["", "", ""],
							t = m.exec(h) || ["", "", ""];
						if (0 == r[0].length && 0 == t[0].length) break;
						b = za(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || za(0 == r[2].length, 0 == t[2].length) || za(r[2], t[2])
					} while (0 == b)
				}
				b = rd[a] = 0 <= b
			}
			return b
		};
	var td = function (a, b, c, d, e) {
		this.reset(a, b, c, d, e)
	};
	td.prototype.g = null;
	var ud = 0;
	td.prototype.reset = function (a, b, c, d, e) {
		"number" == typeof e || ud++;
		this.l = d || pa();
		this.o = a;
		this.A = b;
		this.h = c;
		delete this.g
	};
	td.prototype.getMessage = function () {
		return this.A
	};
	var vd = function (a) {
			this.o = a;
			this.h = this.l = this.g = null
		},
		wd = function (a, b) {
			this.name = a;
			this.value = b
		};
	wd.prototype.toString = function () {
		return this.name
	};
	var xd = new wd("SHOUT", 1200),
		yd = new wd("SEVERE", 1E3),
		zd = new wd("WARNING", 900),
		Ad = new wd("INFO", 800),
		Bd = new wd("CONFIG", 700);
	vd.prototype.getChildren = function () {
		this.h || (this.h = {});
		return this.h
	};
	var Cd = function (a) {
		return a.l ? a.l : a.g ? Cd(a.g) : null
	};
	vd.prototype.log = function (a, b, c) {
		if (a.value >= Cd(this).value)
			for (ga(b) && (b = b()), a = new td(a, String(b), this.o), c && (a.g = c), c = "log:" + a.getMessage(), n.console && (n.console.timeStamp ? n.console.timeStamp(c) : n.console.markTimeline && n.console.markTimeline(c)), n.msWriteProfilerMark && n.msWriteProfilerMark(c), c = this; c;) c = c.g
	};
	vd.prototype.info = function (a, b) {
		this.log(Ad, a, b)
	};
	var Dd = {},
		Ed = null,
		Fd = function () {
			Ed || (Ed = new vd(""), Dd[""] = Ed, Ed.l = Bd)
		},
		C = function (a) {
			Fd();
			var b;
			if (!(b = Dd[a])) {
				b = new vd(a);
				var c = a.lastIndexOf("."),
					d = a.substr(c + 1),
					c = C(a.substr(0, c));
				c.getChildren()[d] = b;
				b.g = c;
				Dd[a] = b
			}
			return b
		};
	sd("528");
	sd("528");
	var Gd = function (a, b) {
		z.call(this, a ? a.type : "");
		this.C = this.target = null;
		this.g = this.button = this.clientY = this.clientX = 0;
		this.H = this.B = this.A = this.v = !1;
		this.o = null;
		if (a) {
			this.type = a.type;
			var c = a.changedTouches ? a.changedTouches[0] : null;
			this.target = a.target || a.srcElement;
			this.C = b;
			null === c ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY);
			this.button = a.button;
			this.g = a.keyCode || 0;
			this.v = a.ctrlKey;
			this.A = a.altKey;
			this.B = a.shiftKey;
			this.H = a.metaKey;
			this.o = a;
			a.defaultPrevented && this.h()
		}
	};
	v(Gd, z);
	Gd.prototype.l = function () {
		Gd.O.l.call(this);
		this.o.stopPropagation ? this.o.stopPropagation() : this.o.cancelBubble = !0
	};
	Gd.prototype.h = function () {
		Gd.O.h.call(this);
		var a = this.o;
		a.preventDefault ? a.preventDefault() : a.returnValue = !1
	};
	var Hd = "closure_listenable_" + (1E6 * Math.random() | 0),
		Id = function (a) {
			return !(!a || !a[Hd])
		},
		Jd = 0;
	var Kd = function (a, b, c, d, e) {
			this.listener = a;
			this.proxy = null;
			this.src = b;
			this.type = c;
			this.Ab = !!d;
			this.pb = e;
			this.key = ++Jd;
			this.removed = this.kb = !1
		},
		Ld = function (a) {
			a.removed = !0;
			a.listener = null;
			a.proxy = null;
			a.src = null;
			a.pb = null
		};
	var Md = function (a) {
			this.src = a;
			this.g = {};
			this.h = 0
		},
		Od = function (a, b, c, d, e, f) {
			var g = b.toString();
			b = a.g[g];
			b || (b = a.g[g] = [], a.h++);
			var h = Nd(b, c, e, f); - 1 < h ? (a = b[h], d || (a.kb = !1)) : (a = new Kd(c, a.src, g, !!e, f), a.kb = d, b.push(a));
			return a
		};
	Md.prototype.remove = function (a, b, c, d) {
		a = a.toString();
		if (!(a in this.g)) return !1;
		var e = this.g[a];
		b = Nd(e, b, c, d);
		return -1 < b ? (Ld(e[b]), Pa(e, b), 0 == e.length && (delete this.g[a], this.h--), !0) : !1
	};
	var Pd = function (a, b) {
		var c = b.type;
		c in a.g && Qa(a.g[c], b) && (Ld(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
	};
	Md.prototype.removeAll = function (a) {
		a = a && a.toString();
		var b = 0,
			c;
		for (c in this.g)
			if (!a || c == a) {
				for (var d = this.g[c], e = 0; e < d.length; e++) ++b, Ld(d[e]);
				delete this.g[c];
				this.h--
			}
		return b
	};
	var Qd = function (a, b, c, d, e) {
			a = a.g[b.toString()];
			b = -1;
			a && (b = Nd(a, c, d, e));
			return -1 < b ? a[b] : null
		},
		Nd = function (a, b, c, d) {
			for (var e = 0; e < a.length; ++e) {
				var f = a[e];
				if (!f.removed && f.listener == b && f.Ab == !!c && f.pb == d) return e
			}
			return -1
		};
	var Rd = "closure_lm_" + (1E6 * Math.random() | 0),
		Sd = {},
		Td = 0,
		Ud = function (a, b, c, d, e) {
			if (da(b)) {
				for (var f = 0; f < b.length; f++) Ud(a, b[f], c, d, e);
				return null
			}
			c = Vd(c);
			return Id(a) ? a.listen(b, c, d, e) : Wd(a, b, c, !1, d, e)
		},
		Wd = function (a, b, c, d, e, f) {
			if (!b) throw Error("Invalid event type");
			var g = !!e,
				h = Xd(a);
			h || (a[Rd] = h = new Md(a));
			c = Od(h, b, c, d, e, f);
			if (c.proxy) return c;
			d = Yd();
			c.proxy = d;
			d.src = a;
			d.listener = c;
			if (a.addEventListener) a.addEventListener(b.toString(), d, g);
			else if (a.attachEvent) a.attachEvent(Zd(b.toString()), d);
			else throw Error("addEventListener and attachEvent are unavailable.");
			Td++;
			return c
		},
		Yd = function () {
			var a = $d,
				b = function (c) {
					return a.call(b.src, b.listener, c)
				};
			return b
		},
		ae = function (a, b, c, d, e) {
			if (da(b)) {
				for (var f = 0; f < b.length; f++) ae(a, b[f], c, d, e);
				return null
			}
			c = Vd(c);
			return Id(a) ? Od(a.ba, String(b), c, !0, d, e) : Wd(a, b, c, !0, d, e)
		},
		be = function (a, b, c, d, e) {
			if (da(b))
				for (var f = 0; f < b.length; f++) be(a, b[f], c, d, e);
			else c = Vd(c), Id(a) ? a.unlisten(b, c, d, e) : a && (a = Xd(a)) && (b = Qd(a, b, c, !!d, e)) && ce(b)
		},
		ce = function (a) {
			if (!fa(a) && a && !a.removed) {
				var b = a.src;
				if (Id(b)) Pd(b.ba, a);
				else {
					var c = a.type,
						d = a.proxy;
					b.removeEventListener ? b.removeEventListener(c, d, a.Ab) : b.detachEvent && b.detachEvent(Zd(c), d);
					Td--;
					(c = Xd(b)) ? (Pd(c, a), 0 == c.h && (c.src = null, b[Rd] = null)) : Ld(a)
				}
			}
		},
		Zd = function (a) {
			return a in Sd ? Sd[a] : Sd[a] = "on" + a
		},
		$d = function (a, b) {
			var c;
			if (a.removed) c = !0;
			else {
				c = new Gd(b, this);
				var d = a.listener,
					e = a.pb || a.src;
				a.kb && ce(a);
				c = d.call(e, c)
			}
			return c
		},
		Xd = function (a) {
			a = a[Rd];
			return a instanceof Md ? a : null
		},
		de = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
		Vd = function (a) {
			if (ga(a)) return a;
			a[de] || (a[de] = function (b) {
				return a.handleEvent(b)
			});
			return a[de]
		};
	var ee = function (a) {
		cd.call(this);
		this.h = a;
		this.g = {}
	};
	v(ee, cd);
	var fe = [];
	ee.prototype.listen = function (a, b, c, d) {
		da(b) || (b && (fe[0] = b.toString()), b = fe);
		for (var e = 0; e < b.length; e++) {
			var f = Ud(a, b[e], c || this.handleEvent, d || !1, this.h || this);
			if (!f) break;
			this.g[f.key] = f
		}
		return this
	};
	var he = function (a, b, c, d) {
			return ge(a, b, c, d, void 0)
		},
		ge = function (a, b, c, d, e, f) {
			if (da(c))
				for (var g = 0; g < c.length; g++) ge(a, b, c[g], d, e, f);
			else {
				b = ae(b, c, d || a.handleEvent, e, f || a.h || a);
				if (!b) return a;
				a.g[b.key] = b
			}
			return a
		};
	ee.prototype.unlisten = function (a, b, c, d, e) {
		if (da(b))
			for (var f = 0; f < b.length; f++) this.unlisten(a, b[f], c, d, e);
		else c = c || this.handleEvent, e = e || this.h || this, c = Vd(c), d = !!d, b = Id(a) ? Qd(a.ba, String(b), c, d, e) : a ? (a = Xd(a)) ? Qd(a, b, c, d, e) : null : null, b && (ce(b), delete this.g[b.key]);
		return this
	};
	ee.prototype.removeAll = function () {
		gb(this.g, function (a, b) {
			this.g.hasOwnProperty(b) && ce(a)
		}, this);
		this.g = {}
	};
	ee.prototype.M = function () {
		ee.O.M.call(this);
		this.removeAll()
	};
	ee.prototype.handleEvent = function () {
		throw Error("EventHandler.handleEvent not implemented");
	};
	var D = function (a, b) {
			a && a.log(yd, b, void 0)
		},
		E = function (a, b) {
			a && a.log(zd, b, void 0)
		},
		F = function (a, b) {
			a && a.info(b, void 0)
		};
	var ie = function () {
		this.g = new ee(this);
		y(this, this.g);
		this.D = null
	};
	v(ie, cd);
	var je = C("gws.collections.controllers.UmaController"),
		ke = {
			bookmark_added: "BookmarkAdded",
			undo_unstar: "BookmarkBubble_Unstar",
			star: "Star",
			navie_create_button: "Stars_Navigate_New",
			navie_create_star_button: "Stars_Navigate_NewStar",
			navie_create_folder_button: "Stars_Navigate_NewFolder",
			navie_create_folder_confirm: "Stars_Navigate_NewFolder_Confirm",
			navie_item_timeline: "Stars_Navigate_AllItems",
			navie_item_profile: "Stars_Navigate_AllFolders",
			navie_item_bookmarks_bar: "Stars_Navigate_BookmarksBar",
			navie_item_folio: "Stars_Navigate_Folio",
			navie_dnd_move: "Stars_Navigate_DndMove",
			activity_bar_cancel: "Stars_ActivityBar_Cancel",
			activity_bar_delete: "Stars_ActivityBar_Delete",
			activity_bar_create_folio: "Stars_ActivityBar_CreateFolio",
			activity_bar_dropdown_folio: "Stars_ActivityBar_DropdownFolio",
			activity_bar_clip_moved: "Stars_ActivityBar_ClipMoved",
			activity_bar_items_moved: "Stars_ActivityBar_ItemsMoved",
			clip_checkmark: "Stars_Clip_Checkmark",
			clip_edit_closed: "Stars_Clip_Edit_Closed",
			clip_edit_opened: "Stars_Clip_Edit_Opened",
			clip_note_edit: "Stars_Clip_NoteEdit",
			clip_title_edit: "Stars_Clip_TitleEdit",
			clip_url_edit: "Stars_Clip_UrlEdit",
			folio_checkmark: "Stars_Folio_Checkmark",
			folio_title_edit: "Stars_Folio_TitleEdit",
			folio_make_public_button: "Stars_Folio_MakePublicButton",
			folio_make_private_button: "Stars_Folio_MakePrivateButton",
			folio_tile: "Stars_Folio_Tile",
			folio_tile_dnd_move: "Stars_Folio_TileDndMove",
			folio_description_edit: "Stars_Folio_DescriptionEdit",
			folio_breadcrumb: "Stars_Folio_Breadcrumb",
			folio_chip: "Stars_Folio_Chip",
			search_button: "Stars_SearchButton",
			title_bar_edit_button: "Stars_TitleBar_EditButton",
			title_bar_all_filter: "Stars_TitleBar_AllFilter",
			title_bar_image_filter: "Stars_TitleBar_ImageFilter",
			title_bar_video_filter: "Stars_TitleBar_VideoFilter",
			title_bar_webpage_filter: "Stars_TitleBar_WebpageFilter",
			images_percent: "Stars.Images_Percent",
			first20_images_percent: "Stars.Images_Percent_First20",
			no_images_snippets_percent: "Stars.No_Images_Snippets",
			goog_related_percent: "Stars.Goog_Related",
			no_image_no_snippet_20_percent: "Stars.No_Img_No_Snippet_20_Percent",
			goog_related_20_percent: "Stars.Goog_Related_20_Percent",
			list_view_enabled: "Stars_List_View_Enabled",
			list_view_disabled: "Stars_List_View_Disabled",
			list_view_launch_bookmark: "Stars_List_View_Launch_Bookmark",
			list_view_curation_start: "Stars_List_View_Curation_Start",
			alert_account_mismatch: "Stars_Alert_Account_Mismatch",
			alert_backend_failure: "Stars_Alert_Backend_Failure",
			alert_bad_folio_name: "Stars_Alert_Bad_Folio_Name",
			alert_cannot_reload: "Stars_Alert_Cannot_Reload",
			alert_connection_lost: "Stars_Alert_Connection_Lost",
			alert_connection_restored: "Stars_Alert_Connection_Restored",
			alert_extension_disconnected: "Stars_Alert_Extension_Disconnected",
			alert_initialization_error: "Stars_Alert_Initialization_Error",
			alert_invalid_url: "Stars_Alert_Invalid_Url",
			alert_no_backend: "Stars_Alert_No_Backend",
			alert_no_connection: "Stars_Alert_No_Connection",
			alert_reload_needed: "Stars_Alert_Reload_Needed",
			alert_search_backend_failure: "Stars_Alert_Search_Backend_Failure",
			alert_version_mismatch: "Stars_Alert_Version_Mismatch",
			alert_write_error: "Stars_Alert_Write_Error",
			alert_out_of_quota: "Stars_Alert_Out_Of_Quota",
			clipper_shown: "Stars_Clipper_Shown",
			clipper_bookmark_added: "Stars_Clipper_Bookmark_Added",
			clipper_bookmark_deleted: "Stars_Clipper_Bookmark_Deleted",
			clipper_folder_selected: "Stars_Clipper_Folder_Selected",
			clipper_last_used_displayed: "Stars_Clipper_Last_Used_Displayed",
			clipper_last_used_selected: "Stars_Clipper_Last_Used_Selected",
			clipper_suggest_displayed: "Stars_Clipper_Suggest_Displayed",
			clipper_suggest_selected: "Stars_Clipper_Suggest_Selected",
			clipper_image_changed: "Stars_Clipper_Image_Changed",
			clipper_title_changed: "Stars_Clipper_Title_Changed",
			clipper_note_changed: "Stars_Clipper_Note_Changed",
			clipper_url_changed: "Stars_Clipper_Url_Changed",
			clipper_view_all: "Stars_Clipper_View_All",
			stars_signin_clicked: "Stars_SignIn_Clicked",
			user_signed_in: "Stars_User_Signed_In",
			user_signed_out: "Stars_User_Signed_Out",
			user_unknown: "Stars_User_Unknown",
			Stars_Update_PageAction_Icon: "Stars_Update_PageAction_Icon"
		},
		le = {
			curation_start: "Stars_Curation_Start",
			timeline: "Stars_Timeline_Active",
			profile: "Stars_Profile_Active",
			bookmarks_bar: "Stars_BookmarksBar_Active",
			folio: "Stars_Folio_Active",
			search: "Stars_Search_Active",
			error: "Stars_ErrorView_Active"
		},
		me = {
			timeline: "Stars_Launch_Bookmark_Timeline",
			bookmarks_bar: "Stars_Launch_Bookmark_BookmarksBar",
			folio: "Stars_Launch_Bookmark_Folio",
			search: "Stars_Launch_Bookmark_Search"
		},
		ne = "images_percent first20_images_percent no_images_snippets_percent goog_related_percent no_image_no_snippet_20_percent goog_related_20_percent".split(" "),
		oe = {
			number_of_nodes: "Stars.Number_Of_Nodes",
			clipper_open_folio_count: "Stars.Clipper_Open_Folio_Count",
			clipper_folio_selected_visible_folio_count: "Stars.Clipper_Folio_Selected_Visible_Folio_Count",
			clipper_folio_selected_depth_count: "Stars.Clipper_Folio_Selected_Depth_Count"
		},
		pe = {
			version: "Stars.Version"
		},
		qe = pb(le.timeline, "Stars.Timeline_Active_Clip_Count", le.profile, "Stars.Profile_Active_Clip_Count", le.bookmarks_bar, "Stars.BookmarksBar_Active_Clip_Count", le.folio, "Stars.Folio_Active_Clip_Count", le.search, "Stars.Search_Active_Clip_Count", me.timeline,
			"Stars.Launch_Bookmark_Timeline_Clip_Count", me.bookmarks_bar, "Stars.Launch_Bookmark_BookmarksBar_Clip_Count", me.folio, "Stars.Launch_Bookmark_Folio_Clip_Count", me.search, "Stars.Launch_Bookmark_Search_Clip_Count"),
		re = function (a, b) {
			a.g.listen(b, "log", a.h);
			a.D = null
		};
	ie.prototype.h = function (a) {
		"launch_bookmark" == a.g && (F(je, "Log recordLaunch"), chrome.bookmarkManagerPrivate ? chrome.bookmarkManagerPrivate.recordLaunch() : E(je, "chrome.bookmarkManagerPrivate API is not available."));
		if (p(chrome.metricsPrivate)) {
			var b = oe[a.g];
			if (b) F(je, "Log count: " + b + ": " + Ea(a.data)), chrome.metricsPrivate.recordCount(b, Ea(a.data));
			else if (b = pe[a.g]) F(je, "Log sparse value: " + b + ": " + Ea(a.data)), chrome.metricsPrivate.recordSparseValue(b, Ea(a.data));
			else {
				var b = a.g,
					c = a.o;
				if (b = "launch_bookmark" ==
					b ? me[c] || "" : ke[b] || le[c] || "") 0 <= ne.indexOf(a.g) ? (F(je, "Log percent: " + b + ": " + Ea(a.data)), chrome.metricsPrivate.recordPercentage(b, Ea(a.data))) : ((a = qe[b]) && this.D && (c = this.D.h.l.length, F(je, "Log clip count: " + a + ": " + c), chrome.metricsPrivate.recordCount(a, c)), F(je, "Log user action: " + b), chrome.metricsPrivate.recordUserAction(b))
			}
		} else E(je, "chrome.metricsPrivate API is not available.")
	};
	var te = function (a, b) {
		z.call(this, a);
		this.error = b || null;
		this.message = se[a]
	};
	v(te, z);
	var se = {
		account_mismatch: Dc,
		backend_failure: Cc,
		bad_folio_name: Bc,
		import_completed: Nc,
		cannot_reload: Ec,
		connection_lost: Fc,
		connection_restored: Gc,
		extension_disconnected: Hc,
		initialization_error: Ic,
		invalid_url: Jc,
		no_backend: Cc,
		no_connection: Kc,
		reload_needed: Lc,
		search_backend_failure: Mc,
		version_mismatch: Cc,
		write_error: Cc
	};
	var ue = function (a) {
		z.call(this, a);
		this.g = 0;
		this.R = null;
		this.parentId = "";
		this.clip = null;
		this.newValue = this.oldValue = "";
		this.o = !1;
		this.source = 0;
		this.A = ""
	};
	v(ue, z);
	var we = function (a, b, c, d, e) {
			var f = new ue("folio_changed");
			f.R = a;
			f.g = b;
			f.oldValue = c;
			f.newValue = d;
			ve(f, e);
			return f
		},
		xe = function (a, b, c, d, e) {
			var f = new ue("clip_changed");
			f.clip = a;
			f.g = b;
			f.oldValue = c;
			f.newValue = d;
			ve(f, e);
			return f
		},
		ve = function (a, b) {
			b && (a.source = b.g, a.A = b.w())
		};
	ue.prototype.ta = function () {
		return w(this.clip && this.clip.w() || this.R && this.R.w())
	};
	var ye = null,
		ze = null,
		Be = function (a) {
			var b = new Uint8Array(Math.ceil(3 * a.length / 4)),
				c = 0;
			Ae(a, function (a) {
				b[c++] = a
			});
			return b.subarray(0, c)
		},
		Ae = function (a, b) {
			function c(b) {
				for (; d < a.length;) {
					var c = a.charAt(d++),
						e = ze[c];
					if (null != e) return e;
					if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
				}
				return b
			}
			Ce();
			for (var d = 0;;) {
				var e = c(-1),
					f = c(0),
					g = c(64),
					h = c(64);
				if (64 === h && -1 === e) break;
				b(e << 2 | f >> 4);
				64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
			}
		},
		Ce = function () {
			if (!ye) {
				ye = {};
				ze = {};
				for (var a = 0; 65 > a; a++) ye[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), ze[ye[a]] = a, 62 <= a && (ze["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
			}
		};
	var De = n.JSON.parse,
		Fe = n.JSON.stringify;
	var Ge = function () {},
		Ie = function (a, b, c, d) {
			a.g = null;
			b || (b = []);
			a.A = void 0;
			a.o = -1;
			a.ea = b;
			a: {
				if (a.ea.length) {
					b = a.ea.length - 1;
					var e = a.ea[b];
					if (e && "object" == typeof e && !da(e)) {
						a.l = b - a.o;
						a.h = e;
						break a
					}
				} - 1 < c ? (a.l = c, a.h = null) : a.l = Number.MAX_VALUE
			}
			if (d)
				for (c = 0; c < d.length; c++) b = d[c], b < a.l ? (b += a.o, a.ea[b] = a.ea[b] || He) : a.h[b] = a.h[b] || He
		},
		He = [],
		G = function (a, b) {
			if (b < a.l) {
				var c = b + a.o,
					d = a.ea[c];
				return d === He ? a.ea[c] = [] : d
			}
			d = a.h[b];
			return d === He ? a.h[b] = [] : d
		},
		H = function (a, b, c) {
			b < a.l ? a.ea[b + a.o] = c : a.h[b] = c
		},
		I = function (a,
			b, c) {
			a.g || (a.g = {});
			if (!a.g[c]) {
				var d = G(a, c);
				d && (a.g[c] = new b(d))
			}
			return a.g[c]
		},
		Je = function (a, b, c) {
			a.g || (a.g = {});
			if (!a.g[c]) {
				for (var d = G(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
				a.g[c] = e
			}
			b = a.g[c];
			b == He && (b = a.g[c] = []);
			return b
		},
		J = function (a, b, c) {
			a.g || (a.g = {});
			var d = c ? c.ea : c;
			a.g[b] = c;
			H(a, b, d)
		},
		Ke = function (a, b, c) {
			a.g || (a.g = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].ea;
			a.g[b] = c;
			H(a, b, d)
		},
		Le = n.JSON && n.JSON.stringify || "object" === typeof JSON && JSON.stringify;
	Ge.prototype.J = "function" == typeof Uint8Array ? function () {
		var a = Uint8Array.prototype.toJSON;
		Uint8Array.prototype.toJSON = function () {
			Ce();
			for (var a = ye, b = [], e = 0; e < this.length; e += 3) {
				var f = this[e],
					g = e + 1 < this.length,
					h = g ? this[e + 1] : 0,
					l = e + 2 < this.length,
					m = l ? this[e + 2] : 0,
					r = f >> 2,
					f = (f & 3) << 4 | h >> 4,
					h = (h & 15) << 2 | m >> 6,
					m = m & 63;
				l || (m = 64, g || (h = 64));
				b.push(a[r], a[f], a[h], a[m])
			}
			return b.join("")
		};
		try {
			var b = Le.call(null, this.ea)
		} finally {
			Uint8Array.prototype.toJSON = a
		}
		return b
	} : Le ? function () {
		return Le.call(null, this.ea)
	} : function () {
		return Fe(this.ea)
	};
	Ge.prototype.toString = function () {
		return this.ea.toString()
	};
	var Ne = function (a) {
			return new a.constructor(Me(a.ea))
		},
		Me = function (a) {
			var b;
			if (da(a)) {
				for (var c = Array(a.length), d = 0; d < a.length; d++) null != (b = a[d]) && (c[d] = "object" == typeof b ? Me(b) : b);
				return c
			}
			c = {};
			for (d in a) null != (b = a[d]) && (c[d] = "object" == typeof b ? Me(b) : b);
			return c
		};
	var Pe = function (a) {
		Ie(this, a, -1, Oe)
	};
	v(Pe, Ge);
	var Oe = [3];
	Pe.prototype.getTitle = function () {
		return G(this, 2)
	};
	Pe.prototype.setTitle = function (a) {
		H(this, 2, a)
	};
	var Qe = function (a) {
		Ie(this, a, -1, null)
	};
	v(Qe, Ge);
	var Se = function (a) {
			return I(a, Re, 3)
		},
		Re = function (a) {
			Ie(this, a, -1, null)
		};
	v(Re, Ge);
	var Te = function (a) {
		return G(a, 1)
	};
	var Ue = function (a) {
		Ie(this, a, -1, null)
	};
	v(Ue, Ge);
	Ue.prototype.w = function () {
		return G(this, 1)
	};
	var Ve = function (a) {
		Ie(this, a, -1, null)
	};
	v(Ve, Ge);
	Ve.prototype.getTitle = function () {
		return G(this, 1)
	};
	Ve.prototype.setTitle = function (a) {
		H(this, 1, a)
	};
	var We = function (a) {
		Ie(this, a, -1, null)
	};
	v(We, Ge);
	var Xe = function (a) {
		Ie(this, a, -1, null)
	};
	v(Xe, Ge);
	var Ze = function (a) {
		Ie(this, a, 23, Ye)
	};
	v(Ze, Ge);
	var Ye = [3];
	Ze.prototype.ta = function () {
		return I(this, Ue, 1)
	};
	Ze.prototype.Qa = function (a) {
		H(this, 8, a)
	};
	var $e = function (a) {
		return null != G(a, 11) ? G(a, 11) : 0
	};
	Ze.prototype.la = function () {
		return G(this, 16)
	};
	Ze.prototype.qa = function (a) {
		H(this, 16, a)
	};
	Ze.prototype.Fb = function () {
		return G(this, 21)
	};
	var af = function (a) {
		Ie(this, a, -1, null)
	};
	v(af, Ge);
	af.prototype.P = function () {
		return G(this, 2)
	};
	var bf = function (a) {
		Ie(this, a, -1, null)
	};
	v(bf, Ge);
	k = bf.prototype;
	k.ta = function () {
		return I(this, Ue, 1)
	};
	k.getTitle = function () {
		return G(this, 2)
	};
	k.setTitle = function (a) {
		H(this, 2, a)
	};
	k.Qa = function (a) {
		H(this, 8, a)
	};
	k.W = function () {
		return I(this, Ue, 9)
	};
	k.Fb = function () {
		return G(this, 10)
	};
	k.P = function () {
		return G(this, 11)
	};
	k.la = function () {
		return G(this, 14)
	};
	k.qa = function (a) {
		H(this, 14, a)
	};
	var df = function (a) {
		Ie(this, a, -1, cf)
	};
	v(df, Ge);
	var cf = [2, 3];
	k = df.prototype;
	k.Lb = function () {
		return G(this, 1)
	};
	k.ce = function (a) {
		H(this, 1, a)
	};
	k.mc = function () {
		return G(this, 4)
	};
	k.be = function (a) {
		H(this, 4, a)
	};
	k.lc = function () {
		return G(this, 5)
	};
	k.ae = function (a) {
		H(this, 5, a)
	};
	k.mb = function () {
		return G(this, 6)
	};
	var ef = function (a, b) {
		z.call(this, a);
		this.R = b || null
	};
	v(ef, z);
	var ff = function (a) {
		return a.R ? a.R.w() : ""
	};
	var gf = function (a) {
			if (!a) return "";
			a = w(a);
			a.match(ub)[1] || (a = "http://" + a);
			return a
		},
		hf = function (a) {
			var b = "";
			a && (b = w(vb(a.match(ub)[3] || null)), b = 0 == b.indexOf("www.") ? b.substring(4) : b, a = w(vb(a.match(ub)[5] || null)), a = "/" == a ? [] : a.split(/\/+/), 1 < a.length && (b += "/" + a[1]));
			return b
		};
	var jf = function (a) {
		this.g = a || new Ve;
		a = G(this.g, 3);
		H(this.g, 3, a)
	};
	jf.prototype.getTitle = function () {
		return w(this.g.getTitle())
	};
	var kf = function (a) {
		return w(G(a.g, 3))
	};
	jf.prototype.setTitle = function (a) {
		this.g.setTitle(a)
	};
	var lf = function (a, b) {
		try {
			Kb(b)
		} catch (c) {
			b = encodeURI(b)
		}
		try {
			Kb(b)
		} catch (c) {
			b = ""
		}
		H(a.g, 3, b)
	};
	jf.prototype.J = function () {
		return this.g.J()
	};
	var mf = function (a) {
		try {
			var b = De(a);
			return new jf(new Ve(b))
		} catch (c) {
			return null
		}
	};
	var nf = function (a) {
		cd.call(this);
		this.l = [];
		this.g = {};
		this.h = {};
		this.o = "boolean" == typeof a ? a : !0
	};
	v(nf, cd);
	var of = C("gws.collections.models.IndexedClips");
	nf.prototype.get = function () {
		return Object.create(this.l)
	};
	var rf = function (a, b) {
		var c = b.w();
		if (c in a.g) return E( of , "Clip with ID already exists: " + c), !1;
		if (!pf(a, qf(b), b)) return !1;
		a.l.push(b);
		a.g[c] = b;
		return !0
	};
	nf.prototype.remove = function (a) {
		var b = Ga(this.l, a);
		if (0 > b) return !1;
		Pa(this.l, b);
		lb(this.g, a.w());
		sf(this, qf(a), a);
		this.o && dd(a);
		return !0
	};
	var uf = function (a, b) {
			var c = b.clip;
			if (204 == b.g) {
				var d = tf(b.oldValue),
					e = tf(b.newValue);
				sf(a, d, c);
				pf(a, e, c)
			}
		},
		sf = function (a, b, c) {
			b in a.h && (Qa(a.h[b], c), 0 == a.h[b].length && lb(a.h, b))
		},
		pf = function (a, b, c) {
			if (!b) return E( of , "Clip has no URL: " + c.toString()), !1;
			b in a.h ? (a = a.h[b], Oa(a, c) || a.push(c)) : a.h[b] = [c];
			return !0
		},
		tf = function (a) {
			return (a = mf(a)) ? kf(a) : ""
		};
	nf.prototype.M = function () {
		this.o && ed(this.l);
		nf.O.M.call(this)
	};
	var vf = function (a) {
		cd.call(this);
		this.g = [];
		this.h = {};
		this.l = "boolean" == typeof a ? a : !0
	};
	v(vf, cd);
	var wf = C("gws.collections.models.IndexedFolios");
	vf.prototype.get = function () {
		return Object.create(this.g)
	};
	var xf = function (a, b) {
			return a.h[b] || null
		},
		yf = function (a, b) {
			var c = b.w();
			if (c in a.h) return E(wf, "Folio with ID already exists: " + c), !1;
			a.g.push(b);
			a.h[c] = b;
			return !0
		};
	vf.prototype.remove = function (a) {
		var b = Ga(this.g, a);
		if (0 > b) return !1;
		Pa(this.g, b);
		lb(this.h, a.w());
		this.l && dd(a);
		return !0
	};
	vf.prototype.M = function () {
		this.l && ed(this.g);
		vf.O.M.call(this)
	};
	var zf = function () {};
	ba(zf);
	var Af = {
			0: "c_",
			1: "f_",
			2: "d_",
			3: "g_",
			4: "lc_",
			5: "lf_"
		},
		Cf = function () {
			zf.$();
			return Bf(0)
		},
		Bf = function (a) {
			return Af[a] + (839808 * a + Math.floor(839808 * Math.random())).toString(36) + pa().toString(36)
		};
	var Df = function (a, b, c) {
		z.call(this, c || "TRANSACTION_COMMIT");
		this.g = a || 0;
		(a = b) || (zf.$(), a = Bf(2));
		this.A = a;
		this.o = [];
		this.v = []
	};
	v(Df, z);
	var Ef = function () {
			return new Df(3, void 0)
		},
		Ff = function (a, b) {
			0 < a.o.length && b.dispatchEvent(a)
		},
		K = function (a, b, c) {
			a.o.push(b);
			a.v.push(c);
			c.dispatchEvent(b)
		};
	Df.prototype.w = function () {
		return this.A
	};
	var M = function () {
		cd.call(this);
		this.ba = new Md(this);
		this.Kd = this;
		this.Sa = null
	};
	v(M, cd);
	M.prototype[Hd] = !0;
	k = M.prototype;
	k.aa = function (a) {
		this.Sa = a
	};
	k.removeEventListener = function (a, b, c, d) {
		be(this, a, b, c, d)
	};
	k.dispatchEvent = function (a) {
		var b, c = this.Sa;
		if (c)
			for (b = []; c; c = c.Sa) b.push(c);
		var c = this.Kd,
			d = a.type || a;
		if (q(a)) a = new z(a, c);
		else if (a instanceof z) a.target = a.target || c;
		else {
			var e = a;
			a = new z(d, c);
			ob(a, e)
		}
		var e = !0,
			f;
		if (b)
			for (var g = b.length - 1; !a.G && 0 <= g; g--) f = a.C = b[g], e = Gf(f, d, !0, a) && e;
		a.G || (f = a.C = c, e = Gf(f, d, !0, a) && e, a.G || (e = Gf(f, d, !1, a) && e));
		if (b)
			for (g = 0; !a.G && g < b.length; g++) f = a.C = b[g], e = Gf(f, d, !1, a) && e;
		return e
	};
	k.M = function () {
		M.O.M.call(this);
		this.ba && this.ba.removeAll(void 0);
		this.Sa = null
	};
	k.listen = function (a, b, c, d) {
		return Od(this.ba, String(a), b, !1, c, d)
	};
	k.unlisten = function (a, b, c, d) {
		return this.ba.remove(String(a), b, c, d)
	};
	var Gf = function (a, b, c, d) {
		b = a.ba.g[String(b)];
		if (!b) return !0;
		b = b.concat();
		for (var e = !0, f = 0; f < b.length; ++f) {
			var g = b[f];
			if (g && !g.removed && g.Ab == c) {
				var h = g.listener,
					l = g.pb || g.src;
				g.kb && Pd(a.ba, g);
				e = !1 !== h.call(l, d) && e
			}
		}
		return e && 0 != d.oc
	};
	var Hf = function () {
		M.call(this)
	};
	v(Hf, M);
	var N = function (a) {
			return a || new Df
		},
		O = function (a, b, c) {
			b != c && Ff(b, a)
		};
	var If = function (a) {
		M.call(this);
		this.F = a
	};
	v(If, Hf);
	If.prototype.w = function () {
		return this.F.ta() ? w(this.F.ta().w()) : ""
	};
	If.prototype.la = function () {
		return w(this.F.la())
	};
	If.prototype.qa = function (a) {
		this.F.qa(a);
		a = new z("server_id_set_event");
		a.T = this;
		this.dispatchEvent(a)
	};
	var Jf = function (a) {
			return a.F.ta()
		},
		Kf = function (a) {
			a.F.Qa(pa())
		};
	If.prototype.tb = function () {
		return !!this.F.Fb()
	};
	If.prototype.J = function () {
		return this.F.J()
	};
	var Mf = function (a, b) {
			return a ? Lf(a, b) + b : "" + b
		},
		Of = function (a, b) {
			var c = String.fromCharCode(0),
				d = Nf(a, c),
				e = Nf(b, c);
			if (e > d) return "";
			if (b.substring(e) < a.substring(d)) return ya(c, d - e);
			if (1 < e) return ya(c, d - e + 1);
			e = String.fromCharCode(Math.floor(a.charCodeAt(d) / 2));
			return ya(c, d) + e
		},
		Lf = function (a, b) {
			var c = String.fromCharCode(255),
				d = Nf(a, c),
				e = Nf(b, c); - 1 === d && (d = a.length); - 1 === e && (e = b.length);
			if (e > d) return "";
			if (b.substring(e) > a.substring(d)) return ya(c, d - e);
			if (1 < e) return ya(c, d - e + 1);
			e = a.charCodeAt(d);
			e = String.fromCharCode(Math.ceil(e +
				(c.charCodeAt(0) - e) / 2));
			return ya(c, d) + e
		},
		Pf = function (a, b, c) {
			var d = "";
			if (a < c && c < b) return d;
			for (var e = 0; e < Math.min(a.length, b.length); ++e) {
				var f = a.charCodeAt(e),
					g = b.charCodeAt(e);
				if (2 <= g - f) return d += String.fromCharCode(f + Math.floor((g - f) / 2));
				if (f === g) {
					if (d += String.fromCharCode(f), a.substring(e + 1) < c && c < b.substring(e + 1)) return d
				} else return f = d, f += a.charAt(e), f += Lf(a.substring(e + 1), c), b.length > e + 1 && (a = d, a += b.charAt(e), a += Of(b.substring(e + 1), c), a.length < f.length) ? a : f
			}
			return d += Of(b.substring(e), c)
		},
		Qf = function () {
			for (var a = (sa() ? 1 : 28) - 1, b = "", c = 0; c < a; ++c) b += String.fromCharCode(Math.floor(256 * Math.random()));
			return b + "="
		},
		Nf = function (a, b) {
			for (var c = 0; c < a.length; ++c)
				if (a[c] != b) return c;
			return -1
		};
	var Sf = function (a) {
		If.call(this, a || new bf);
		this.eb = null;
		this.l = new nf(!1);
		y(this, this.l);
		this.h = new vf(!1);
		y(this, this.h);
		this.g = [];
		this.o = Rf(this);
		this.A = new ee(this);
		y(this, this.A)
	};
	v(Sf, If);
	Sf.prototype.H = function (a) {
		return !!this.l.g[a] || !!xf(this.h, a)
	};
	Sf.prototype.va = function () {
		return this.eb ? [this.eb.w()] : []
	};
	Sf.prototype.P = function () {
		var a = w(this.F.P());
		return atob(a)
	};
	Sf.prototype.v = function (a, b, c) {
		var d = Jf(this.W());
		a = this.P(a);
		var e = btoa(b);
		if (e === this.F.P()) return !1;
		H(this.F, 11, e);
		Kf(this);
		var e = N(c),
			f = new ue("folio_changed");
		f.R = this;
		f.parentId = d.J();
		f.g = 111;
		f.oldValue = a;
		f.newValue = b;
		ve(f, e);
		K(e, f, this);
		O(this, e, c);
		return !0
	};
	var Tf = function (a, b) {
		var c = b.Sa,
			c = (c ? c : null) || b;
		a.A.listen(c, "clip_changed", a.B).listen(c, "folio_changed", a.B)
	};
	Sf.prototype.B = function (a) {
		var b = a.clip || a.R;
		if (null !== b && this.H(b.w())) {
			switch (a.g) {
				case 111:
					b = a.R;
					Qa(this.g, b);
					Wa(this.g, b, this.o);
					break;
				case 304:
					b = a.clip, Qa(this.g, b), Wa(this.g, b, this.o)
			}
			"clip_changed" === a.type && uf(this.l, a)
		}
	};
	var Uf = function (a, b, c) {
			b || (zf.$(), b = Bf(1));
			var d = b;
			b = new Ue;
			H(b, 1, d);
			H(b, 2, a);
			a = new bf;
			J(a, 1, b);
			c && a.setTitle(c);
			c = pa();
			H(a, 7, c);
			a.Qa(c);
			return new Sf(a)
		},
		Vf = function (a, b) {
			var c;
			b instanceof Sf ? c = !!xf(a.h, b.w()) : (c = b.w(), c = !!a.l.g[c]);
			return c
		},
		Wf = function (a, b) {
			var c = N(b);
			Kf(a);
			var d = new ue("folio_changed");
			d.R = a;
			d.g = 107;
			ve(d, c);
			K(c, d, a);
			O(a, c, b)
		},
		$f = function (a, b, c, d) {
			if (!Vf(a, b)) {
				var e = N(d);
				Wf(a, e);
				var f = N(e),
					g = a.w();
				if (!c) {
					var h = Jf(a);
					c = new af;
					h = Ne(h);
					J(c, 1, h);
					c = new Xf(c)
				}
				c.P() || (h = a.g.length ? Fa(a.g).P(a.w()) :
					"", h = Mf(h, Qf()), H(c.g, 2, btoa(h)));
				if (c != b.g[g])
					if (g = N(f), h = w(I(c.g, Ue, 1).w()), h in b.g) E(Yf, "Clip already in folio: " + h);
					else {
						b.g[h] = c;
						var h = Je(b.F, af, 3),
							l = c.g;
						l && (h.push(l), Ke(b.F, 3, h));
						Zf(b, c, 301, "", g);
						O(b, g, f)
					}
				b.B.nb(a);
				O(b, f, e);
				rf(a.l, b) && (Wa(a.g, b, a.o), Tf(a, b), O(a, e, d))
			}
		},
		ag = function (a, b, c) {
			if (!Vf(a, b)) {
				for (var d = N(c), e = !0, f = b.B.fa(), g = N(d), h = 0; h < f.length; ++h) e = e && f[h].pa(b, !1, g);
				O(a, g, d);
				e && ($f(a, b, void 0, d), O(a, d, c))
			}
		};
	Sf.prototype.pa = function (a, b, c) {
		if (!Vf(this, a)) return !1;
		var d = N(c);
		Wf(this, d);
		var e = N(d);
		if (!b) {
			var f = this.w();
			if (f in a.g) {
				b = N(e);
				var g = a.g[f];
				lb(a.g, f);
				f = Je(a.F, af, 3);
				Qa(f, g.g);
				Ke(a.F, 3, f);
				Zf(a, g, 302, g.J(), e);
				O(a, b, e)
			}
		}
		a.B.remove(this);
		O(a, e, d);
		if (!this.l.remove(a)) return !1;
		Qa(this.g, a);
		O(this, d, c);
		return !0
	};
	var dg = function (a, b, c) {
			if (!Vf(a, b)) {
				for (var d = a; d;) {
					if (d == b) return;
					d = d.W()
				}
				var d = N(c),
					e = b.W(),
					f = b.P(a.w());
				if (e) {
					if (!bg(e, b)) return;
					b.v(e.w(), "", d);
					Wf(e, d)
				}
				yf(a.h, b) && (cg(b, a, d), e = Qf(), f && (e = f.substring(f.length - (sa() ? 1 : 28))), f = b.P(a.w()) || Mf(a.g.length ? Fa(a.g).P(a.w()) : "", e), b.v(a.w(), f, d), Wa(a.g, b, a.o), Tf(a, b), Wf(a, d), O(a, d, c))
			}
		},
		eg = function (a, b, c) {
			var d = N(c);
			if (!Vf(a, b) || !bg(a, b)) return !1;
			b.v("", "", d);
			cg(b, null, d);
			Wf(a, d);
			O(a, d, c);
			return !0
		},
		bg = function (a, b) {
			var c = a.h.remove(b);
			c && Qa(a.g, b);
			return c
		};
	Sf.prototype.getTitle = function (a) {
		if (!a) return w(this.F.getTitle());
		a = [];
		for (var b = this; b;) {
			var c = b.getTitle();
			Ua(a, 0, 0, c);
			b = b.W()
		}
		return a.join(" / ")
	};
	Sf.prototype.tb = function () {
		return fg(this) || !!this.F.Fb()
	};
	var fg = function (a) {
			return "f_bookmarks_bar" == (a.la() || a.w())
		},
		gg = function (a, b, c) {
			var d = w(G(a.F, 3));
			if (d != b) {
				var e = N(c);
				H(a.F, 3, b);
				Kf(a);
				b = we(a, 103, d, b, e);
				K(e, b, a);
				O(a, e, c)
			}
		};
	Sf.prototype.setTitle = function (a, b) {
		var c = this.getTitle();
		if (c == a) return !1;
		var d = N(b);
		this.F.setTitle(a);
		Kf(this);
		c = we(this, 102, c, a, d);
		K(d, c, this);
		O(this, d, b);
		return !0
	};
	Sf.prototype.W = function () {
		return this.eb
	};
	var cg = function (a, b, c) {
		var d = b ? Jf(b).J() : "",
			e = a.W() ? Jf(a.W()).J() : "";
		(a.eb = b) ? (b = Jf(b), J(a.F, 9, b)) : J(a.F, 9, void 0);
		Kf(a);
		b = N(c);
		d = we(a, 109, e, d, b);
		K(b, d, a);
		O(a, b, c)
	};
	Sf.prototype.toString = function () {
		return "FolioModel:" + this.w()
	};
	Sf.prototype.G = function () {
		var a = Ba(this.la() || this.w()) % 8 + 1;
		return (sa() ? "images/" : "https://ssl.gstatic.com/stars/images/") + "folder-bg-" + a + ".jpg"
	};
	var Rf = function (a) {
		var b = a.w();
		return function (a, d) {
			var e;
			if (!(e = b) && (e = a)) {
				if (d) {
					e = a.va();
					for (var f = d.va(), g = [], h = 0; h < e.length; ++h)
						for (var l = 0; l < f.length; ++l) e[h] == f[l] && g.push(e[h]);
					e = g
				} else e = [];
				e = e[0]
			}(f = e) ? (e = a && a.P(f), f = d && d.P(f), e = e && f ? e < f ? -1 : f < e ? 1 : 0 : 0) : e = 0;
			return e
		}
	};
	var P = function (a, b, c) {
		z.call(this, a);
		this.value = b || null;
		this.enable = !!c;
		this.g = this.clip = null
	};
	v(P, z);
	var hg = function (a) {
		this.g = a || new Pe
	};
	hg.prototype.setTitle = function (a) {
		this.g.setTitle(a)
	};
	hg.prototype.J = function () {
		return this.g.J()
	};
	var ig = function (a) {
		try {
			var b = De(a);
			return new hg(new Pe(b))
		} catch (c) {
			return null
		}
	};
	var Xf = function (a) {
		this.g = a || new af
	};
	Xf.prototype.P = function () {
		var a = w(this.g.P());
		return atob(a)
	};
	Xf.prototype.J = function () {
		return this.g.J()
	};
	var jg = function (a) {
		try {
			var b = De(a);
			return new Xf(new af(b))
		} catch (c) {
			return null
		}
	};
	var Q = function (a, b) {
		this.width = a;
		this.height = b
	};
	Q.prototype.clone = function () {
		return new Q(this.width, this.height)
	};
	var kg = function (a) {
		return a.width / a.height
	};
	Q.prototype.ceil = function () {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	Q.prototype.floor = function () {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	Q.prototype.round = function () {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	var ng = function (a) {
			this.g = a || new Qe;
			I(this.g, Re, 2) || (a = new Re, J(this.g, 2, a));
			Se(this.g) || (a = new Re, J(this.g, 3, a));
			new xb(lg(this));
			new xb(mg(this))
		},
		og = function (a) {
			var b;
			b = I(a.g, Re, 2);
			b = G(b, 2);
			a = I(a.g, Re, 2);
			a = G(a, 3);
			return b && a ? new Q(b, a) : null
		},
		lg = function (a) {
			return w(Te(I(a.g, Re, 2)))
		},
		pg = function (a) {
			var b;
			b = Se(a.g);
			b = G(b, 2);
			a = Se(a.g);
			a = G(a, 3);
			return b && a ? new Q(b, a) : null
		},
		mg = function (a) {
			return w(Te(Se(a.g))).replace(/^\/\//, "https://")
		};
	ng.prototype.J = function () {
		return this.g.J()
	};
	var qg = function (a) {
		try {
			var b = De(a);
			return new ng(new Qe(b))
		} catch (c) {
			return null
		}
	};
	var rg = function (a) {
		this.g = a || new We
	};
	rg.prototype.J = function () {
		return this.g.J()
	};
	var sg = function (a) {
		this.g = a || new Xe
	};
	sg.prototype.J = function () {
		return this.g.J()
	};
	var tg = function (a) {
		try {
			var b = De(a);
			return new sg(new Xe(b))
		} catch (c) {
			return null
		}
	};
	var R = function (a, b) {
		this.x = p(a) ? a : 0;
		this.y = p(b) ? b : 0
	};
	R.prototype.clone = function () {
		return new R(this.x, this.y)
	};
	var ug = function (a, b) {
		return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
	};
	R.prototype.ceil = function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this
	};
	R.prototype.floor = function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this
	};
	R.prototype.round = function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this
	};
	var xg = function (a) {
			return a ? new vg(wg(a)) : ua || (ua = new vg)
		},
		yg = function (a, b) {
			var c, d, e, f;
			c = document;
			c = b || c;
			if (c.querySelectorAll && c.querySelector && a) return c.querySelectorAll("" + (a ? "." + a : ""));
			if (a && c.getElementsByClassName) {
				var g = c.getElementsByClassName(a);
				return g
			}
			g = c.getElementsByTagName("*");
			if (a) {
				f = {};
				for (d = e = 0; c = g[d]; d++) {
					var h = c.className;
					"function" == typeof h.split && Oa(h.split(/\s+/), a) && (f[e++] = c)
				}
				f.length = e;
				return f
			}
			return g
		},
		Ag = function (a, b) {
			gb(b, function (b, d) {
				"style" == d ? a.style.cssText =
					b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : zg.hasOwnProperty(d) ? a.setAttribute(zg[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
			})
		},
		zg = {
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			colspan: "colSpan",
			frameborder: "frameBorder",
			height: "height",
			maxlength: "maxLength",
			role: "role",
			rowspan: "rowSpan",
			type: "type",
			usemap: "useMap",
			valign: "vAlign",
			width: "width"
		},
		Bg = function (a) {
			return a.parentWindow || a.defaultView
		},
		Dg = function (a, b, c) {
			return Cg(document, arguments)
		},
		Cg = function (a, b) {
			var c = b[1],
				d = a.createElement(b[0]);
			c && (q(c) ? d.className = c : da(c) ? d.className = c.join(" ") : Ag(d, c));
			2 < b.length && Eg(a, d, b, 2);
			return d
		},
		Eg = function (a, b, c, d) {
			function e(c) {
				c && b.appendChild(q(c) ? a.createTextNode(c) : c)
			}
			for (; d < c.length; d++) {
				var f = c[d];
				!ea(f) || ha(f) && 0 < f.nodeType ? e(f) : Ha(Fg(f) ? Sa(f) : f, e)
			}
		},
		Gg = function (a, b) {
			Eg(wg(a), a, arguments, 1)
		},
		Hg = function (a) {
			a && a.parentNode && a.parentNode.removeChild(a)
		},
		wg = function (a) {
			return 9 == a.nodeType ? a : a.ownerDocument || a.document
		},
		Ig = function (a, b) {
			if ("textContent" in
				a) a.textContent = b;
			else if (3 == a.nodeType) a.data = b;
			else if (a.firstChild && 3 == a.firstChild.nodeType) {
				for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
				a.firstChild.data = b
			} else {
				for (var c; c = a.firstChild;) a.removeChild(c);
				a.appendChild(wg(a).createTextNode(String(b)))
			}
		},
		Jg = {
			SCRIPT: 1,
			STYLE: 1,
			HEAD: 1,
			IFRAME: 1,
			OBJECT: 1
		},
		Kg = {
			IMG: " ",
			BR: "\n"
		},
		Lg = function (a, b, c) {
			if (!(a.nodeName in Jg))
				if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
				else if (a.nodeName in Kg) b.push(Kg[a.nodeName]);
			else
				for (a = a.firstChild; a;) Lg(a, b, c), a = a.nextSibling
		},
		Fg = function (a) {
			if (a && "number" == typeof a.length) {
				if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
				if (ga(a)) return "function" == typeof a.item
			}
			return !1
		},
		vg = function (a) {
			this.g = a || n.document || document
		};
	k = vg.prototype;
	k.Y = function (a) {
		return q(a) ? this.g.getElementById(a) : a
	};
	k.setProperties = Ag;
	k.L = function (a, b, c) {
		return Cg(this.g, arguments)
	};
	k.Wc = function (a, b) {
		a.appendChild(b)
	};
	k.append = Gg;
	k.getChildren = function (a) {
		return void 0 != a.children ? a.children : Ia(a.childNodes, function (a) {
			return 1 == a.nodeType
		})
	};
	k.contains = function (a, b) {
		if (!a || !b) return !1;
		if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
		if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
		for (; b && a != b;) b = b.parentNode;
		return b == a
	};
	k.ke = Ig;
	var Mg = function (a) {
		var b = [];
		Lg(a, b, !0);
		a = b.join("");
		a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
		a = a.replace(/\u200B/g, "");
		a = a.replace(/ +/g, " ");
		" " != a && (a = a.replace(/^\s*/, ""));
		return a
	};
	var Qg = function (a) {
		If.call(this, a || new Ze);
		this.h = Ng(this);
		this.l = S(this);
		this.o = Og(this);
		a = {};
		for (var b = Je(this.F, af, 3), c = 0; c < b.length; c++) {
			var d = new Xf(b[c]),
				e = w(I(d.g, Ue, 1).w());
			a[e] = d
		}
		this.g = a;
		this.A = Pg(this);
		a = I(this.F, We, 13);
		!this.C && a && (this.C = new rg(a));
		this.C = this.C || null;
		this.B = new jd;
		this.w() || (a = Cf(), this.F.ta() || (b = new Ue, J(this.F, 1, b)), b = this.F.ta(), H(b, 1, a))
	};
	v(Qg, If);
	var Yf = C("gws.collections.models.ClipModel");
	Qg.prototype.H = function () {
		return !1
	};
	Qg.prototype.P = function (a) {
		return (a = this.g[a]) ? a.P() : ""
	};
	Qg.prototype.v = function (a, b, c) {
		var d = N(c);
		a = this.g[a];
		if (!a) return !1;
		var e = a.P();
		if (a.P() == b) return !1;
		H(a.g, 2, btoa(b));
		Kf(this);
		Zf(this, a, 304, e, d);
		O(this, d, c);
		return !0
	};
	var Rg = function (a, b) {
			var c = new Ue;
			H(c, 1, a);
			H(c, 2, b);
			var d = new Ze;
			J(d, 1, c);
			c = pa();
			H(d, 7, c);
			d.Qa(c);
			return new Qg(d)
		},
		Sg = function (a, b) {
			var c = N(b);
			a.B.fa().forEach(function (a) {
				a.pa(this, !1, c)
			}, a);
			O(a, c, b)
		},
		Zf = function (a, b, c, d, e) {
			var f = N(e),
				g = I(b.g, Ue, 1);
			if (g) {
				var h = "";
				switch (c) {
					case 301:
						h = b.J();
						break;
					case 304:
						h = b.P();
						break;
					case 303:
						h = (0).toString();
						break;
					case 302:
						h = ""
				}
				b = h;
				h = new ue("clip_changed");
				h.clip = a;
				h.parentId = g.J();
				h.g = c;
				h.oldValue = d;
				h.newValue = b;
				ve(h, f);
				K(f, h, a);
				O(a, f, e)
			} else E(Yf, "Bad FolioInfo - no folio id set?? FolioInfo:" +
				b.g.J())
		};
	Qg.prototype.clone = function () {
		return new Qg(Ne(this.F))
	};
	Qg.prototype.va = function () {
		return kb(this.g)
	};
	Qg.prototype.mb = function () {
		return hb(this.g)
	};
	var Ng = function (a) {
		var b = I(a.F, Qe, 5);
		!a.h && b && (a.h = new ng(b));
		if (!a.h && 3 == G(a.F, 4)) {
			var b = Og(a),
				b = w(G(b.g, 1)).replace(/\//g, "-"),
				b = "https://www.gstatic.com/vd/kp/%s/en/1/image.jpg".replace("%s", b),
				c = Dg("img");
			c.src = b;
			c.onload = u(a.T, a, c)
		}
		return a.h || null
	};
	Qg.prototype.T = function (a) {
		var b = new ng,
			c = a.src,
			d = Se(b.g);
		H(d, 1, c);
		new xb(mg(b));
		c = a.naturalWidth;
		a = a.naturalHeight;
		d = Se(b.g);
		H(d, 2, c);
		c = Se(b.g);
		H(c, 3, a);
		Tg(this, b, new Df(3))
	};
	var Og = function (a) {
			var b = I(a.F, Pe, 9);
			!a.o && b && (a.o = new hg(b));
			return a.o || null
		},
		S = function (a) {
			var b = I(a.F, Ve, 6);
			!a.l && b && (a.l = new jf(b));
			return a.l || null
		},
		qf = function (a) {
			var b;
			S(a) && (b = kf(S(a)));
			(b = gf(b)) || E(Yf, "No URL for clip! " + a.toString());
			return b
		};
	Qg.prototype.getTitle = function () {
		return S(this) ? S(this).getTitle().toString() : ""
	};
	var Pg = function (a) {
			var b = I(a.F, Xe, 10);
			!a.A && b && (a.A = new sg(b));
			return a.A || null
		},
		Ug = function (a, b, c) {
			var d = N(c);
			if (kf(S(a)) != b) {
				var e = S(a).J(),
					f = S(a);
				lf(f, b);
				H(f.g, 5, void 0);
				Kf(a);
				b = xe(a, 204, e, f.J(), d);
				K(d, b, a);
				O(a, d, c)
			}
		};
	Qg.prototype.setTitle = function (a, b) {
		var c = N(b);
		if (S(this).getTitle() == a) return !1;
		var d = S(this).J(),
			e = S(this);
		e.setTitle(a);
		Kf(this);
		d = xe(this, 204, d, e.J(), c);
		K(c, d, this);
		O(this, c, b);
		return !0
	};
	var Vg = function (a, b, c) {
			var d = N(c),
				e = a.l && a.l.J(),
				f = b.J();
			e != f && (a.l = b, J(a.F, 6, b.g), Kf(a), b = xe(a, 204, e || "", f, d), K(d, b, a), O(a, d, c))
		},
		Wg = function (a, b, c) {
			var d = N(c),
				e = w(G(a.F, 2));
			e != b && (H(a.F, 2, b), Kf(a), b = xe(a, 202, e, b, d), K(d, b, a), O(a, d, c))
		},
		Xg = function (a, b, c) {
			var d = N(c),
				e = G(a.F, 4);
			G(a.F, 4) != b && (H(a.F, 4, b), b = xe(a, 206, "" + e, "" + b, d), K(d, b, a), O(a, d, c))
		},
		Tg = function (a, b, c) {
			var d = N(c),
				e = a.h && a.h.J(),
				f = b.J();
			e != f && (a.h = b, J(a.F, 5, b.g), Kf(a), b = xe(a, 203, e || "", f, d), K(d, b, a), O(a, d, c))
		};
	Qg.prototype.toString = function () {
		return "ClipModel:" + this.w()
	};
	Qg.prototype.G = function () {
		var a = Ba(this.la() || this.w()) % 8 + 1;
		return (sa() ? "images/" : "https://ssl.gstatic.com/stars/images/") + "tile-bg-" + a + ".jpg"
	};
	C("gws.collections.models.DataOperationModel");
	var bh = function (a) {
		M.call(this);
		this.g = new df;
		this.l = new vf;
		y(this, this.l);
		this.h = new nf;
		y(this, this.h);
		if (a) {
			for (var b = Ef(), c = Je(a, bf, 2), d = 0; d < c.length; ++d) Yg(this, new Sf(c[d]), b);
			for (var d = N(b), c = this.La(), e = 0; e < c.length; ++e) {
				var f = c[e],
					g;
				(g = (g = f.F.W()) ? w(g.w()) : "") && (g = Zg(this, g)) && dg(g, f, d)
			}
			O(this, d, b);
			c = Je(a, Ze, 3);
			for (d = 0; d < c.length; ++d) $g(this, new Qg(c[d]), b);
			b = a.Lb();
			!this.w() && b && (ah(this, b, this.g.Lb, this.g.ce), this.dispatchEvent("user_id_changed"));
			b = w(a.mc());
			ah(this, b, this.g.mc, this.g.be);
			a = w(a.lc());
			ah(this, a, this.g.lc, this.g.ae)
		}
		this.Hb = !1;
		this.A = new ee(this);
		y(this, this.A);
		this.A.listen(this, "clip_changed", this.v)
	};
	v(bh, Hf);
	var ch = C("gws.collections.models.UserModel");
	bh.prototype.v = function (a) {
		uf(this.h, a)
	};
	var $g = function (a, b, c) {
			var d = N(c);
			if (!rf(a.h, b)) return !1;
			b.aa(a);
			var e = Je(a.g, Ze, 3),
				f = b.F;
			f && (e.push(f), Ke(a.g, 3, e));
			e = new ue("clip_added");
			e.clip = b;
			ve(e, d);
			K(d, e, a);
			e = b.va();
			for (f = 0; f < e.length; f++) {
				var g = Zg(a, e[f]);
				g ? $f(g, b, b.g[e[f]], d) : E(ch, "Folio does not exist: " + e[f])
			}
			O(a, d, c);
			return !0
		},
		Yg = function (a, b, c) {
			var d = N(c);
			if (xf(a.l, b.w()) || !yf(a.l, b)) return E(ch, "Folio could not be added: " + b.w()), !1;
			b.aa(a);
			var e = Je(a.g, bf, 2),
				f = b.F;
			f && (e.push(f), Ke(a.g, 2, e));
			(e = b.W()) && dg(e, b, d);
			e = new ue("folio_added");
			e.R = b;
			ve(e, d);
			K(d, e, a);
			O(a, d, c);
			b.aa(a);
			return !0
		},
		dh = function (a, b) {
			return b ? Na(a.h.get(), function (a) {
				return a.la() == b
			}) : null
		};
	bh.prototype.La = function () {
		return this.l.get()
	};
	var eh = function (a, b) {
			return b ? Na(a.l.get(), function (a) {
				return a.la() == b
			}) : null
		},
		Zg = function (a, b) {
			return xf(a.l, b) || eh(a, b)
		};
	bh.prototype.w = function () {
		return w(this.g.Lb())
	};
	var ah = function (a, b, c, d) {
		p(b) && null !== b && c.call(a.g) != b && d.call(a.g, b)
	};
	bh.prototype.pa = function (a, b) {
		for (var c = N(b), d = a.va(), e = 0; e < d.length; e++) {
			var f = Zg(this, d[e]);
			f ? f.pa(a, !0, c) : E(ch, "Trying to remove clip with a folio id that cannot be found: " + d[e])
		}
		if (!this.h.remove(a)) return !1;
		d = Je(this.g, Ze, 3);
		Qa(d, a.F);
		Ke(this.g, 3, d);
		d = new ue("clip_removed");
		d.clip = a;
		ve(d, c);
		K(c, d, this);
		O(this, c, b);
		return !0
	};
	bh.prototype.o = function (a, b) {
		for (var c = N(b), d = a.length - 1; 0 <= d; --d) this.pa(a[d], c);
		O(this, c, b)
	};
	var gh = function (a, b, c, d) {
			var e = N(d);
			if (xf(a.l, b.w())) {
				var f = b.l.get(),
					g = b.h.get();
				if (c) a.o(f, e), fh(a, g, !0, e);
				else {
					a: {
						for (var h = N(e), l = f.length - 1; 0 <= l; --l) {
							var m = f[l];
							if (m && !b.pa(m, void 0, h)) break a
						}
						O(a, h, e)
					}
					a: {
						f = N(e);
						for (h = 0; h < g.length; ++h)
							if (!eg(b, g[h], f)) break a;O(a, f, e)
					}
				}(g = b.W()) && eg(g, b, e);
				b.aa(null);
				a.l.remove(b);
				g = Je(a.g, bf, 2);
				Qa(g, b.F);
				Ke(a.g, 2, g);
				g = new ue("folio_removed");
				g.R = b;
				g.o = c || !1;
				ve(g, e);
				K(e, g, a);
				O(a, e, d)
			}
		},
		fh = function (a, b, c, d) {
			for (var e = N(d), f = 0; f < b.length; f++) gh(a, b[f], c, e);
			O(a, e, d)
		};
	bh.prototype.clear = function (a) {
		var b = N(a);
		fh(this, Sa(this.La()), !1, b);
		this.o(Sa(this.h.get()), b);
		O(this, b, a)
	};
	bh.prototype.J = function () {
		return this.g.J()
	};
	var hh = function (a) {
			if (a.classList) return a.classList;
			a = a.className;
			return q(a) && a.match(/\S+/g) || []
		},
		ih = function (a, b) {
			return a.classList ? a.classList.contains(b) : Oa(hh(a), b)
		},
		jh = function (a, b) {
			a.classList ? a.classList.add(b) : ih(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
		},
		kh = function (a, b) {
			if (a.classList) Ha(b, function (b) {
				jh(a, b)
			});
			else {
				var c = {};
				Ha(hh(a), function (a) {
					c[a] = !0
				});
				Ha(b, function (a) {
					c[a] = !0
				});
				a.className = "";
				for (var d in c) a.className += 0 < a.className.length ? " " + d : d
			}
		},
		lh = function (a, b) {
			a.classList ? a.classList.remove(b) : ih(a, b) && (a.className = Ia(hh(a), function (a) {
				return a != b
			}).join(" "))
		};
	var nh = function (a, b, c) {
			var d = mh[c];
			if (!d) {
				var e = Ca(c),
					d = e;
				void 0 === a.style[e] && (e = "Webkit" + Da(e), void 0 !== a.style[e] && (d = e));
				mh[c] = d
			}(c = d) && (a.style[c] = b)
		},
		mh = {},
		oh = function (a, b) {
			var c;
			a: {
				c = wg(a);
				if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
					c = c[b] || c.getPropertyValue(b) || "";
					break a
				}
				c = ""
			}
			return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
		},
		ph = function (a) {
			var b;
			try {
				b = a.getBoundingClientRect()
			} catch (c) {
				return {
					left: 0,
					top: 0,
					right: 0,
					bottom: 0
				}
			}
			return b
		},
		qh = function (a) {
			if (1 == a.nodeType) return a = ph(a), new R(a.left, a.top);
			a = a.changedTouches ? a.changedTouches[0] : a;
			return new R(a.clientX, a.clientY)
		},
		rh = function (a, b) {
			"number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
			return a
		},
		th = function (a) {
			var b = sh;
			if ("none" != oh(a, "display")) return b(a);
			var c = a.style,
				d = c.display,
				e = c.visibility,
				f = c.position;
			c.visibility = "hidden";
			c.position = "absolute";
			c.display = "inline";
			a = b(a);
			c.display = d;
			c.position = f;
			c.visibility = e;
			return a
		},
		sh = function (a) {
			var b = a.offsetWidth,
				c = a.offsetHeight;
			return p(b) && (b || c) || !a.getBoundingClientRect ? new Q(b, c) : (a = ph(a), new Q(a.right - a.left, a.bottom - a.top))
		};
	var uh = function (a) {
			a()
		},
		vh = function (a, b) {
			a && uh(function () {
				a.style.display = b ? "" : "none"
			})
		},
		wh = function (a, b) {
			a && uh(function () {
				var c = a.style;
				"opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * +b + ")")
			})
		},
		T = function (a, b, c, d) {
			a && (ra.$().g && "transform" == b && !d && c && q(c) && (c = xh(c)), uh(function () {
				if (q(b)) nh(a, c, b);
				else
					for (var d in b) nh(a, b[d], d)
			}))
		},
		xh = function (a) {
			var b = "translate(",
				c = a.split(b);
			2 > c.length && (b = "translate3d(", c = a.split(b));
			2 > c.length &&
				(b = "translateX(", c = a.split(b));
			if (2 > c.length) return a;
			2 == c.length && (a = 0 == c[1].indexOf("-") ? c[0] + b + c[1].substr(1) : c[0] + b + "-" + c[1]);
			return a
		},
		yh = function (a, b, c) {
			if (a)
				if (ra.$().g) {
					var d, e;
					b instanceof R ? (d = b.x, e = b.y) : (d = b, e = c);
					T(a, "left", "");
					T(a, "right", d + "px");
					T(a, "top", e + "px")
				} else uh(function () {
					var d, e;
					b instanceof R ? (d = b.x, e = b.y) : (d = b, e = c);
					a.style.left = rh(d, !1);
					a.style.top = rh(e, !1)
				})
		},
		zh = function (a, b, c) {
			a && uh(function () {
				var d = b,
					e;
				if (d instanceof Q) e = d.height, d = d.width;
				else {
					if (void 0 == c) throw Error("missing height argument");
					e = c
				}
				a.style.width = rh(d, !0);
				a.style.height = rh(e, !0)
			})
		},
		Ah = function (a, b) {
			a && uh(function () {
				jh(a, b)
			})
		},
		Bh = function (a, b) {
			a && uh(function () {
				kh(a, b)
			})
		},
		Ch = function (a, b) {
			a && uh(function () {
				lh(a, b)
			})
		},
		Dh = function (a, b, c) {
			a && uh(function () {
				c ? jh(a, b) : lh(a, b)
			})
		},
		Eh = function (a, b) {
			a && b && uh(function () {
				a.appendChild(b)
			})
		},
		Fh = function (a, b, c) {
			var d = arguments;
			uh(function () {
				Gg.apply(a.append, [].slice.call(d, 1))
			})
		},
		Gh = function (a) {
			uh(function () {
				Hg(a)
			})
		},
		Hh = function (a, b, c) {
			uh(function () {
				a.ke(b, c)
			})
		};
	var Jh = function (a, b) {
			var c = Array.prototype.slice.call(arguments),
				d = c.shift();
			if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
			return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (a, b, d, h, l, m, r, t) {
				if ("%" == m) return "%";
				var B = c.shift();
				if ("undefined" == typeof B) throw Error("[goog.string.format] Not enough arguments");
				arguments[0] = B;
				return Ih[m].apply(null, arguments)
			})
		},
		Ih = {
			s: function (a, b, c) {
				return isNaN(c) || "" == c || a.length >= +c ? a : a = -1 < b.indexOf("-", 0) ? a + ya(" ",
					+c - a.length) : ya(" ", +c - a.length) + a
			},
			f: function (a, b, c, d, e) {
				d = a.toString();
				isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
				var f;
				f = 0 > +a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
				0 <= +a && (d = f + d);
				if (isNaN(c) || d.length >= +c) return d;
				d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
				a = +c - d.length - f.length;
				return d = 0 <= b.indexOf("-", 0) ? f + d + ya(" ", a) : f + ya(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
			},
			d: function (a, b, c, d, e, f, g, h) {
				return Ih.f(parseInt(a, 10), b, c, d, 0, f, g, h)
			}
		};
	Ih.i = Ih.d;
	Ih.u = Ih.d;
	var Kh = function (a, b, c, d) {
			this.position = a || new R;
			this.h = b || new Q(0, 0);
			this.visible = "boolean" == typeof c ? c : !0;
			this.g = d || 0
		},
		Lh = function (a, b) {
			b && (vh(b, a.visible), wh(b, a.visible ? 1 : 0))
		};
	Kh.prototype.hide = function () {
		this.visible = !1;
		return this
	};
	Kh.prototype.clone = function () {
		return new Kh(new R(this.position.x, this.position.y), new Q(this.h.width, this.h.height), this.visible, this.g || void 0)
	};
	Kh.prototype.toString = function () {
		return Jh("Position(%d, %d), Size(%d, %d), %s", this.position.x, this.position.y, this.h.width, this.h.height, this.visible ? "visible" : "hidden")
	};
	var Mh = function () {};
	ba(Mh);
	Mh.prototype.g = 0;
	var U = function (a) {
		M.call(this);
		this.l = a || xg();
		this.Zb = null;
		this.oa = !1;
		this.A = null;
		this.da = void 0;
		this.gb = this.hb = this.ya = this.dc = null
	};
	v(U, M);
	U.prototype.fe = Mh.$();
	U.prototype.w = function () {
		return this.Zb || (this.Zb = ":" + (this.fe.g++).toString(36))
	};
	U.prototype.Y = function () {
		return this.A
	};
	var Nh = function (a) {
		a.da || (a.da = new ee(a));
		return a.da
	};
	U.prototype.aa = function (a) {
		if (this.ya && this.ya != a) throw Error("Method not supported");
		U.O.aa.call(this, a)
	};
	U.prototype.ia = function () {
		this.A = this.l.g.createElement("DIV")
	};
	var Oh = function (a, b) {
		if (a.oa) throw Error("Component already rendered");
		a.A || a.ia();
		b ? b.insertBefore(a.A, null) : a.l.g.body.appendChild(a.A);
		a.ya && !a.ya.oa || a.Ka()
	};
	U.prototype.Ka = function () {
		this.oa = !0;
		Ph(this, function (a) {
			!a.oa && a.Y() && a.Ka()
		})
	};
	var Qh = function (a) {
		Ph(a, function (a) {
			a.oa && Qh(a)
		});
		a.da && a.da.removeAll();
		a.oa = !1
	};
	U.prototype.M = function () {
		this.oa && Qh(this);
		this.da && (this.da.sa(), delete this.da);
		Ph(this, function (a) {
			a.sa()
		});
		this.A && Hg(this.A);
		this.ya = this.dc = this.A = this.gb = this.hb = null;
		U.O.M.call(this)
	};
	U.prototype.T = function () {
		return this.dc
	};
	var Ph = function (a, b) {
		a.hb && Ha(a.hb, b, void 0)
	};
	U.prototype.removeChild = function (a, b) {
		if (a) {
			var c = q(a) ? a : a.w(),
				d;
			this.gb && c ? (d = this.gb, d = (null !== d && c in d ? d[c] : void 0) || null) : d = null;
			a = d;
			if (c && a) {
				lb(this.gb, c);
				Qa(this.hb, a);
				b && (Qh(a), a.A && Hg(a.A));
				c = a;
				if (null == c) throw Error("Unable to set parent component");
				c.ya = null;
				U.O.aa.call(c, null)
			}
		}
		if (!a) throw Error("Child is not in parent component");
		return a
	};
	var Rh = function (a, b) {
		U.call(this, b);
		this.h = a;
		this.C = this.G = this.H = null;
		this.B = !1;
		this.v = new Kh(void 0, void 0, !1);
		this.g = new Kh(void 0, void 0, !1);
		this.o = bd().Rb
	};
	v(Rh, U);
	var Sh = function (a, b) {
		a.B != b && (a.B = b, a.update())
	};
	Rh.prototype.T = function () {
		return this.h
	};
	Rh.prototype.w = function () {
		return this.h.w()
	};
	Rh.prototype.getTitle = function () {
		return this.h.getTitle()
	};
	var Th = function (a) {
		return a.v.visible || a.g.visible
	};
	Rh.prototype.update = function () {
		var a = this.Y();
		a && (Hh(this.l, this.H, this.h.getTitle()), Dh(a, this.o.Da.selected, this.B))
	};
	Rh.prototype.ia = function () {
		Rh.O.ia.call(this);
		this.G = this.l.L("DIV", this.o.Da.kc);
		this.C = this.l.L("DIV", this.o.Da.Rc);
		this.H = this.l.L("DIV", [this.o.Da.title, this.o.text]);
		fg(this.h) && Ah(this.G, this.o.Da.yb);
		var a = this.A;
		Ah(a, this.o.Da.I);
		var b = this.l.L("DIV", this.o.Da.wb, this.G, this.H);
		this.l.append(a, b, this.C);
		this.update();
		Lh(this.v, a);
		Nh(this).listen(this.C, "click", this.K).listen(a, "click", this.N)
	};
	Rh.prototype.K = function (a) {
		a && (a.h(), a.l());
		this.dispatchEvent(new ef("nested_picker_drill_to_child", this.h))
	};
	Rh.prototype.N = function () {
		this.B ? this.dispatchEvent(new ef("nested_picker_folio_unselected", this.h)) : this.dispatchEvent(new ef("nested_picker_folio_selected", this.h))
	};
	var Uh = function (a, b, c) {
			a.g.position.x = p(b) ? b : a.v.position.x;
			a.g.position.y = p(c) ? c : a.v.position.y
		},
		Vh = function (a) {
			var b = a.Y();
			if (b) {
				a.g.visible && Lh(a.g, a.Y());
				var c = a.g,
					d = a.v;
				b && (yh(b, c.position.x, c.position.y), !d || d.position.x == c.position.x && d.position.y == c.position.y || T(b, "transform", "translate(" + Math.floor(d.position.x - c.position.x) + "px," + Math.floor(d.position.y - c.position.y) + "px)"));
				Ah(b, a.o.ma)
			}
		},
		Wh = function (a, b) {
			var c;
			if (a || b)
				if (a)
					if (b)
						if (fg(a.h)) c = -1;
						else if (fg(b.h)) c = 1;
			else {
				var d = a.getTitle();
				c = b.getTitle();
				d = String(d).toLowerCase();
				c = String(c).toLowerCase();
				c = d < c ? -1 : d == c ? 0 : 1
			} else c = 1;
			else c = -1;
			else c = 0;
			return c
		};
	var Xh = function (a) {
		return (a = a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")) ? a : null
	};
	var Yh = function (a, b, c) {
		cd.call(this);
		this.g = null;
		this.o = !1;
		this.B = a;
		this.v = c;
		this.h = b || window;
		this.l = u(this.A, this)
	};
	v(Yh, cd);
	var ai = function (a) {
		a.stop();
		a.o = !1;
		var b = Zh(a),
			c = $h(a);
		b && !c && a.h.mozRequestAnimationFrame ? (a.g = Ud(a.h, "MozBeforePaint", a.l), a.h.mozRequestAnimationFrame(null), a.o = !0) : a.g = b && c ? b.call(a.h, a.l) : a.h.setTimeout(ab(a.l), 20)
	};
	Yh.prototype.stop = function () {
		if (null != this.g) {
			var a = Zh(this),
				b = $h(this);
			a && !b && this.h.mozRequestAnimationFrame ? ce(this.g) : a && b ? b.call(this.h, this.g) : this.h.clearTimeout(this.g)
		}
		this.g = null
	};
	Yh.prototype.A = function () {
		this.o && this.g && ce(this.g);
		this.g = null;
		this.B.call(this.v, pa())
	};
	Yh.prototype.M = function () {
		this.stop();
		Yh.O.M.call(this)
	};
	var Zh = function (a) {
			a = a.h;
			return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
		},
		$h = function (a) {
			a = a.h;
			return a.cancelAnimationFrame || a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
		};
	var bi = function (a, b, c) {
		this.o = c;
		this.l = a;
		this.A = b;
		this.h = 0;
		this.g = null
	};
	bi.prototype.get = function () {
		var a;
		0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.l();
		return a
	};
	var ci = function (a, b) {
		a.A(b);
		a.h < a.o && (a.h++, b.next = a.g, a.g = b)
	};
	var di = function (a) {
			n.setTimeout(function () {
				throw a;
			}, 0)
		},
		hi = function (a, b) {
			var c = a;
			b && (c = u(a, b));
			c = ei(c);
			!ga(n.setImmediate) || n.Window && n.Window.prototype && !xa("Edge") && n.Window.prototype.setImmediate == n.setImmediate ? (fi || (fi = gi()), fi(c)) : n.setImmediate(c)
		},
		fi, gi = function () {
			var a = n.MessageChannel;
			"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !xa("Presto") && (a = function () {
				var a = document.createElement("IFRAME");
				a.style.display = "none";
				a.src = "";
				document.documentElement.appendChild(a);
				var b = a.contentWindow,
					a = b.document;
				a.open();
				a.write("");
				a.close();
				var c = "callImmediate" + Math.random(),
					d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
					a = u(function (a) {
						if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
					}, this);
				b.addEventListener("message", a, !1);
				this.port1 = {};
				this.port2 = {
					postMessage: function () {
						b.postMessage(c, d)
					}
				}
			});
			if ("undefined" !== typeof a && !xa("Trident") && !xa("MSIE")) {
				var b = new a,
					c = {},
					d = c;
				b.port1.onmessage = function () {
					if (p(c.next)) {
						c = c.next;
						var a =
							c.Ub;
						c.Ub = null;
						a()
					}
				};
				return function (a) {
					d.next = {
						Ub: a
					};
					d = d.next;
					b.port2.postMessage(0)
				}
			}
			return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
				var b = document.createElement("SCRIPT");
				b.onreadystatechange = function () {
					b.onreadystatechange = null;
					b.parentNode.removeChild(b);
					b = null;
					a();
					a = null
				};
				document.documentElement.appendChild(b)
			} : function (a) {
				n.setTimeout(a, 0)
			}
		},
		ei = $a;
	var ii = function () {
			this.h = this.g = null
		},
		ki = new bi(function () {
			return new ji
		}, function (a) {
			a.reset()
		}, 100);
	ii.prototype.remove = function () {
		var a = null;
		this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
		return a
	};
	var ji = function () {
		this.next = this.h = this.g = null
	};
	ji.prototype.set = function (a, b) {
		this.g = a;
		this.h = b;
		this.next = null
	};
	ji.prototype.reset = function () {
		this.next = this.h = this.g = null
	};
	var pi = function (a, b) {
			li || mi();
			ni || (li(), ni = !0);
			var c = oi,
				d = ki.get();
			d.set(a, b);
			c.h ? c.h.next = d : c.g = d;
			c.h = d
		},
		li, mi = function () {
			if (n.Promise && n.Promise.resolve) {
				var a = n.Promise.resolve(void 0);
				li = function () {
					a.then(qi)
				}
			} else li = function () {
				hi(qi)
			}
		},
		ni = !1,
		oi = new ii,
		qi = function () {
			for (var a = null; a = oi.remove();) {
				try {
					a.g.call(a.h)
				} catch (b) {
					di(b)
				}
				ci(ki, a)
			}
			ni = !1
		};
	var ri = function (a) {
			if (a.A && !a.v || a.H || 112 <= a.g && 123 >= a.g) return !1;
			switch (a.g) {
				case 18:
				case 20:
				case 93:
				case 17:
				case 40:
				case 35:
				case 27:
				case 36:
				case 45:
				case 37:
				case 224:
				case 91:
				case 144:
				case 12:
				case 34:
				case 33:
				case 19:
				case 255:
				case 44:
				case 39:
				case 145:
				case 16:
				case 38:
				case 252:
				case 224:
				case 92:
					return !1;
				case 0:
					return !0;
				default:
					return 166 > a.g || 183 < a.g
			}
		},
		ui = function (a, b, c, d, e) {
			if (!sd("525")) return !0;
			if (ld && e) return si(a);
			if (e && !d) return !1;
			fa(b) && (b = ld ? ti(b) : b);
			if (!c && (17 == b || 18 == b || ld && 91 == b)) return !1;
			if (d && c) switch (a) {
				case 220:
				case 219:
				case 221:
				case 192:
				case 186:
				case 189:
				case 187:
				case 188:
				case 190:
				case 191:
				case 192:
				case 222:
					return !1
			}
			switch (a) {
				case 13:
					return !0;
				case 27:
					return !1
			}
			return si(a)
		},
		si = function (a) {
			if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || 0 == a) return !0;
			switch (a) {
				case 32:
				case 43:
				case 63:
				case 64:
				case 107:
				case 109:
				case 110:
				case 111:
				case 186:
				case 59:
				case 189:
				case 187:
				case 61:
				case 188:
				case 190:
				case 191:
				case 192:
				case 222:
				case 219:
				case 220:
				case 221:
					return !0;
				default:
					return !1
			}
		},
		ti = function (a) {
			switch (a) {
				case 93:
					return 91;
				default:
					return a
			}
		};
	var V = function (a, b) {
			this.g = 0;
			this.C = void 0;
			this.o = this.h = this.l = null;
			this.A = this.v = !1;
			if (a != aa) try {
				var c = this;
				a.call(b, function (a) {
					vi(c, 2, a)
				}, function (a) {
					vi(c, 3, a)
				})
			} catch (d) {
				vi(this, 3, d)
			}
		},
		wi = function () {
			this.next = this.context = this.h = this.o = this.g = null;
			this.l = !1
		};
	wi.prototype.reset = function () {
		this.context = this.h = this.o = this.g = null;
		this.l = !1
	};
	var xi = new bi(function () {
			return new wi
		}, function (a) {
			a.reset()
		}, 100),
		yi = function (a, b, c) {
			var d = xi.get();
			d.o = a;
			d.h = b;
			d.context = c;
			return d
		},
		W = function (a) {
			if (a instanceof V) return a;
			var b = new V(aa);
			vi(b, 2, a);
			return b
		},
		zi = function (a) {
			return new V(function (b, c) {
				c(a)
			})
		},
		Bi = function (a, b, c) {
			Ai(a, b, c, null) || pi(oa(b, a))
		},
		Ci = function (a) {
			return new V(function (b, c) {
				var d = a.length,
					e = [];
				if (d)
					for (var f = function (a, c) {
							d--;
							e[a] = c;
							0 == d && b(e)
						}, g = function (a) {
							c(a)
						}, h = 0, l; h < a.length; h++) l = a[h], Bi(l, oa(f, h), g);
				else b(e)
			})
		},
		Ei = function () {
			var a, b = new V(function (b) {
				a = b
			});
			return new Di(b, a)
		};
	V.prototype.then = function (a, b, c) {
		return Fi(this, ga(a) ? a : null, ga(b) ? b : null, c)
	};
	V.prototype.then = V.prototype.then;
	V.prototype.$goog_Thenable = !0;
	var Hi = function (a, b, c) {
			b = yi(b, b, c);
			b.l = !0;
			Gi(a, b);
			return a
		},
		Ii = function (a, b, c) {
			return Fi(a, null, b, c)
		};
	V.prototype.B = function (a) {
		0 == this.g && pi(function () {
			var b = new Ji(a);
			Ki(this, b)
		}, this)
	};
	var Ki = function (a, b) {
			if (0 == a.g)
				if (a.l) {
					var c = a.l;
					if (c.h) {
						for (var d = 0, e = null, f = null, g = c.h; g && (g.l || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
						e && (0 == c.g && 1 == d ? Ki(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : Li(c), Mi(c, e, 3, b)))
					}
					a.l = null
				} else vi(a, 3, b)
		},
		Gi = function (a, b) {
			a.h || 2 != a.g && 3 != a.g || Ni(a);
			a.o ? a.o.next = b : a.h = b;
			a.o = b
		},
		Fi = function (a, b, c, d) {
			var e = yi(null, null, null);
			e.g = new V(function (a, g) {
				e.o = b ? function (c) {
					try {
						var e = b.call(d, c);
						a(e)
					} catch (m) {
						g(m)
					}
				} : a;
				e.h = c ? function (b) {
					try {
						var e = c.call(d,
							b);
						!p(e) && b instanceof Ji ? g(b) : a(e)
					} catch (m) {
						g(m)
					}
				} : g
			});
			e.g.l = a;
			Gi(a, e);
			return e.g
		};
	V.prototype.H = function (a) {
		this.g = 0;
		vi(this, 2, a)
	};
	V.prototype.ba = function (a) {
		this.g = 0;
		vi(this, 3, a)
	};
	var vi = function (a, b, c) {
			0 == a.g && (a == c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.g = 1, Ai(c, a.H, a.ba, a) || (a.C = c, a.g = b, a.l = null, Ni(a), 3 != b || c instanceof Ji || Oi(a, c)))
		},
		Ai = function (a, b, c, d) {
			if (a instanceof V) return Gi(a, yi(b || aa, c || null, d)), !0;
			var e;
			if (a) try {
				e = !!a.$goog_Thenable
			} catch (g) {
				e = !1
			} else e = !1;
			if (e) return a.then(b, c, d), !0;
			if (ha(a)) try {
				var f = a.then;
				if (ga(f)) return Pi(a, f, b, c, d), !0
			} catch (g) {
				return c.call(d, g), !0
			}
			return !1
		},
		Pi = function (a, b, c, d, e) {
			var f = !1,
				g = function (a) {
					f || (f = !0,
						c.call(e, a))
				},
				h = function (a) {
					f || (f = !0, d.call(e, a))
				};
			try {
				b.call(a, g, h)
			} catch (l) {
				h(l)
			}
		},
		Ni = function (a) {
			a.v || (a.v = !0, pi(a.G, a))
		},
		Li = function (a) {
			var b = null;
			a.h && (b = a.h, a.h = b.next, b.next = null);
			a.h || (a.o = null);
			return b
		};
	V.prototype.G = function () {
		for (var a = null; a = Li(this);) Mi(this, a, this.g, this.C);
		this.v = !1
	};
	var Mi = function (a, b, c, d) {
			if (3 == c && b.h && !b.l)
				for (; a && a.A; a = a.l) a.A = !1;
			if (b.g) b.g.l = null, Qi(b, c, d);
			else try {
				b.l ? b.o.call(b.context) : Qi(b, c, d)
			} catch (e) {
				Ri.call(null, e)
			}
			ci(xi, b)
		},
		Qi = function (a, b, c) {
			2 == b ? a.o.call(a.context, c) : a.h && a.h.call(a.context, c)
		},
		Oi = function (a, b) {
			a.A = !0;
			pi(function () {
				a.A && Ri.call(null, b)
			})
		},
		Ri = di,
		Ji = function (a) {
			ta.call(this, a)
		};
	v(Ji, ta);
	Ji.prototype.name = "cancel";
	var Di = function (a, b) {
		this.g = a;
		this.h = b
	};
	var Si = function (a, b, c) {
		if (ga(a)) c && (a = u(a, c));
		else if (a && "function" == typeof a.handleEvent) a = u(a.handleEvent, a);
		else throw Error("Invalid listener argument");
		return 2147483647 < +b ? -1 : n.setTimeout(a, b || 0)
	};
	var Ti = function (a) {
		M.call(this);
		this.g = null;
		this.h = a;
		a = !sd("531") && "TEXTAREA" == a.tagName;
		this.l = new ee(this);
		this.l.listen(this.h, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
	};
	v(Ti, M);
	Ti.prototype.handleEvent = function (a) {
		if ("input" == a.type) Ui(this), this.dispatchEvent(Vi(a));
		else if ("keydown" != a.type || ri(a)) {
			var b = "keydown" == a.type ? this.h.value : null,
				c = Vi(a);
			Ui(this);
			this.g = Si(function () {
				this.g = null;
				this.h.value != b && this.dispatchEvent(c)
			}, 0, this)
		}
	};
	var Ui = function (a) {
			null != a.g && (n.clearTimeout(a.g), a.g = null)
		},
		Vi = function (a) {
			a = new Gd(a.o);
			a.type = "input";
			return a
		};
	Ti.prototype.M = function () {
		Ti.O.M.call(this);
		this.l.sa();
		Ui(this);
		delete this.h
	};
	var Wi = function (a, b) {
		M.call(this);
		var c = this.g = a;
		(c = ha(c) && 1 == c.nodeType ? this.g : this.g ? this.g.body : null) && oh(c, "direction");
		this.h = Ud(this.g, "mousewheel", this, b)
	};
	v(Wi, M);
	Wi.prototype.handleEvent = function (a) {
		var b = 0,
			c = 0;
		a = a.o;
		if ("mousewheel" == a.type) {
			b = 1;
			if (md || sd("532.0")) b = 40;
			c = Xi(-a.wheelDelta, b);
			b = p(a.wheelDeltaX) ? Xi(-a.wheelDeltaY, b) : c
		} else c = a.detail, 100 < c ? c = 3 : -100 > c && (c = -3), p(a.axis) && a.axis === a.HORIZONTAL_AXIS || (b = c);
		fa(this.l) && (b = Math.min(Math.max(b, -this.l), this.l));
		c = new Yi(c, a, 0, b);
		this.dispatchEvent(c)
	};
	var Xi = function (a, b) {
		return (ld || nd) && 0 != a % b ? a : a / b
	};
	Wi.prototype.M = function () {
		Wi.O.M.call(this);
		ce(this.h);
		this.h = null
	};
	var Yi = function (a, b, c, d) {
		Gd.call(this, b);
		this.type = "mousewheel";
		this.detail = a;
		this.ba = d
	};
	v(Yi, Gd);
	var $i = function (a, b, c, d) {
		M.call(this);
		this.g = a;
		this.o = b;
		this.h = c;
		this.A = d || 0;
		a.removeAttribute("maxlength");
		this.l = new Ti(a);
		Ud(this.l, "input", this.v, !1, this);
		Zi(this)
	};
	v($i, M);
	$i.prototype.v = function () {
		Zi(this)
	};
	var Zi = function (a) {
		var b = a.g.value.length;
		if (b > a.h) {
			var c = a.g.scrollTop,
				d = a.g.scrollLeft;
			a.g.value = a.g.value.substring(0, a.h);
			b = a.h;
			a.g.scrollTop = c;
			a.g.scrollLeft = d
		}
		a.o && Ig(a.o, String(1 == a.A ? b : a.h - b))
	};
	$i.prototype.M = function () {
		$i.O.M.call(this);
		delete this.g;
		this.l.sa();
		this.l = null
	};
	var X = function (a, b) {
		U.call(this, b);
		this.D = a;
		this.o = {};
		this.N = [];
		this.v = this.C = this.G = "";
		this.H = this.K = 0;
		this.ka = this.S = !1;
		this.h = {};
		zf.$();
		this.g = bd().Rb;
		this.B = null;
		this.ga = new Yh(this.Wa, Bg(this.l.g), this);
		y(this, this.ga)
	};
	v(X, U);
	C("gws.collections.serp.NestedPicker");
	X.prototype.ia = function () {
		X.O.ia.call(this);
		var a = this.A;
		Bh(a, [this.g.I, this.g.ge]);
		var b = this.l.L("INPUT", [this.g.ca, this.g.text]);
		b.placeholder = Ac;
		b.setAttribute("aria-label", Ac);
		var c = this.l.L("DIV", [this.g.Ya, this.g.text], xc);
		b.setAttribute("tabindex", "0");
		c.setAttribute("tabindex", "0");
		var d = this.l.L("DIV", this.g.Ua, [b, c]),
			e = d.cloneNode(!0);
		vh(e, !1);
		var f = this.l.L("DIV", this.g.Cb),
			g = this.l.L("DIV", this.g.fb),
			h = this.l.L("DIV", this.g.Na, [f, g]),
			l = h.cloneNode(!0),
			m;
		m = this.g.fb;
		var r = l || this.l.g,
			t = r || document,
			B = null;
		t.getElementsByClassName ? B = t.getElementsByClassName(m)[0] : t.querySelectorAll && t.querySelector ? B = t.querySelector("." + m) : B = yg(m, r)[0];
		m = B || null;
		vh(h, !1);
		vh(l, !1);
		r = this.l.L("DIV", this.g.na, d, e, h, l);
		t = this.l.L("DIV", this.g.Nb);
		wh(t, 0);
		B = this.l.L("DIV", this.g.zb);
		wh(B, 0);
		Fh(this.l, a, r, t, B);
		this.h[this.g.na] = r;
		this.h[this.g.ca] = b;
		this.h[this.g.Ya] = c;
		this.h[this.g.Nb] = t;
		this.h[this.g.zb] = B;
		this.h[this.g.Ua] = d;
		this.h[this.g.ib] = e;
		this.h[this.g.Cb] = f;
		this.h[this.g.fb] = g;
		this.h[this.g.Yb] =
			m;
		this.h[this.g.Na] = h;
		this.h[this.g.qb] = l;
		a = new $i(b, null, 300);
		y(this, a);
		this.Ea();
		this.Aa = new Wi(this.Y(), !0);
		y(this, this.Aa);
		Nh(this).listen(this.D, "folios_loaded", this.Ea).listen(this.D, "folio_added", this.gd).listen(this.D, "folio_removed", this.jd).listen(this.D, "folio_changed", this.hd).listen(this, "nested_picker_drill_to_child", this.pd).listen(this, "nested_picker_drill_to_parent", this.Xb).listen(this, "nested_picker_folio_selected", this.Ta).listen(this, "nested_picker_folio_unselected", this.Va).listen(this.h[this.g.ca],
			"keyup", this.ab).listen(this.h[this.g.ca], "keydown", this.$a).listen(this.h[this.g.Ya], "click", this.Z).listen(this.h[this.g.Ya], "keydown", this.Za).listen(this.h[this.g.Cb], "click", this.Xb).listen(this.h[this.g.na], "scroll", this.za).listen(this.h[this.g.na], "mousemove", this.Fa).listen(this.h[this.g.ca], "blur", this.Fa)
	};
	X.prototype.Ea = function () {
		var a;
		a: {
			a = this.o;
			for (var b in a) {
				a = !1;
				break a
			}
			a = !0
		}
		if (a)
			for (a = this.D.La(), b = 0; b < a.length; b++) aj(this, a[b])
	};
	var aj = function (a, b) {
		if (!(b.w() in a.o || b.tb() && !fg(b))) {
			var c = new Rh(b, a.l);
			c.aa(a);
			y(a, c);
			a.o[b.w()] = c;
			Oh(c, a.h[a.g.na]);
			bj(a)
		}
	};
	k = X.prototype;
	k.gd = function (a) {
		a.R && aj(this, a.R)
	};
	k.hd = function (a) {
		var b = a.R;
		b && b.w() in this.o && (this.o[b.w()].update(), this.C == b.w() && Hh(this.l, this.h[this.g.fb], b.getTitle()), "folio_changed" == a.type && 109 == a.g && bj(this))
	};
	k.jd = function (a) {
		(a = a.R) && a.w() in this.o && (a.w(), this.G == a.w() && (this.G = ""), this.C == a.w() && (this.H = 1, this.v = ""), this.N.push(a.w()), bj(this))
	};
	k.Xb = function () {
		if (this.C) {
			var a = this.o[this.C];
			a ? (a = (a = a.T().W()) ? a.w() : "", a in this.o || (a = "")) : a = "";
			if (1 != this.H || a != this.v) this.v = a, this.H = 1, bj(this), cj(this, null), this.h[this.g.ca].focus()
		}
	};
	k.pd = function (a) {
		a = ff(a);
		if (2 != this.H || a != this.v)
			if (2 != this.K || a != this.C) this.h[this.g.ca].focus(), cj(this, null), this.H = 2, this.v = a, bj(this)
	};
	var bj = function (a) {
		if (a.S) a.ka = !0;
		else {
			a.S = !0;
			a.K = a.H;
			var b = 1 == a.K,
				c;
			for (c in a.o) {
				var d = a.o[c];
				d.v.visible && (d.g.visible = !1, Uh(d, 250 * (b ? 1 : -1)), Vh(d))
			}
			if (0 != a.K) {
				Ah(a.h[a.g.Na], a.g.ma);
				"" != a.v && (c = a.h[a.g.qb], Ah(c, a.g.ma), vh(c, !0), T(c, "transform", "translate(" + 250 * (b ? -1 : 1) + "px,0px)"));
				d = "" == a.v ? 0 : 30;
				Ah(a.h[a.g.Ua], a.g.ma);
				a.h[a.g.ca].value = "";
				Ch(a.h[a.g.ca], a.g.rb);
				c = a.h[a.g.ib];
				Ah(c, a.g.ma);
				T(c, "transform", "translate(" + 250 * (b ? -1 : 1) + "px," + d + "px)");
				vh(c, !0);
				var e = dj(a, ej(a, a.v));
				for (c = 0; c < e.length; ++c) {
					e[c].g.visible = !0;
					var f = 250 * (b ? -1 : 1);
					e[c].v.position = f instanceof R ? f : new R(f, 30 * c + d + 37);
					Uh(e[c], 0);
					Vh(e[c])
				}
			} else
				for (b = dj(a, ej(a, a.C)), d = 37 + ("" == a.C ? 0 : 30), c = 0; c < b.length; ++c) b[c].g.visible = !0, Uh(b[c], 0, 30 * c + d), Vh(b[c]);
			null != a.ga.g || ai(a.ga)
		}
	};
	X.prototype.Wa = function () {
		if (0 != this.K) {
			var a = 1 == this.K;
			T(this.h[this.g.Na], "transform", "translate(" + 250 * (a ? 1 : -1) + "px,0px)");
			if ("" != this.v) {
				T(this.h[this.g.qb], "transform", "translate(0px,0px)");
				var b = this.o[this.v].getTitle();
				Hh(this.l, this.h[this.g.Yb], b)
			}
			b = "" == this.v ? 0 : 30;
			T(this.h[this.g.Ua], "transform", "translate(" + 250 * (a ? 1 : -1) + "px," + ("" == this.C ? 0 : 30) + "px)");
			T(this.h[this.g.ib], "transform", "translate(0px," + b + "px)")
		}
		for (var c in this.o) Th(this.o[c]) && (b = this.o[c], a = b.Y()) && (b = b.g, a && (0 < b.g && a &&
			0 < b.g && T(a, "transition", "opacity 0.3s $DELAY, transform 0.3s $DELAY".replace(/\$DELAY/g, b.g ? b.g + "ms" : "")), T(a, "transform", "translate(0, 0)")));
		Si(this.Ia, 300, this)
	};
	X.prototype.Ia = function () {
		if (0 != this.K) {
			var a = this.h[this.g.Na];
			Ch(a, this.g.ma);
			vh(a, "" != this.v);
			T(a, "transform", "translate(0px,0px)");
			"" != this.v && (a = this.o[this.v].getTitle(), Hh(this.l, this.h[this.g.fb], a), a = this.h[this.g.qb], Ch(a, this.g.ma), vh(a, !1));
			var a = "" == this.v ? 0 : 30,
				b = this.h[this.g.Ua];
			Ch(b, this.g.ma);
			T(b, "transform", "translate(0px," + a + "px)");
			a = this.h[this.g.ib];
			vh(a, !1);
			Ch(a, this.g.ma)
		}
		for (var c in this.o)
			if (Th(this.o[c]) && (a = this.o[c], b = a.Y())) {
				var d = a.g,
					e = b,
					f = a.v;
				e && f && (f.position.x != d.position.x ||
					f.position.y != d.position.y) && (0 < d.g && e && 0 < d.g && T(e, "transition", ""), T(e, "transform", ""));
				Lh(a.g, b);
				Ch(b, a.o.ma);
				a.v = a.g.clone()
			}
		this.K = 0;
		this.C = this.v;
		c = this.h[this.g.na];
		Dh(c, this.g.Sd, c.clientHeight == c.scrollHeight);
		this.za();
		for (c = 0; c < this.N.length; ++c)
			if (a = this.o[this.N[c]]) delete this.o[a.w()], a.sa();
		this.N = [];
		this.S = !1;
		this.ka ? (this.ka = !1, bj(this)) : this.H = 0
	};
	var ej = function (a, b) {
			var c, d;
			if (b) {
				c = a.o[b];
				c = c.T().h.get();
				d = [];
				for (var e = 0; e < c.length; ++e) Oa(a.N, c[e].w()) || d.push(a.o[c[e].w()])
			} else
				for (e in d = [], a.o) c = a.o[e], Oa(a.N, e) || null != c.T().W() || d.push(c);
			return d
		},
		dj = function (a, b) {
			var c = Sa(b);
			c.sort(Wh || Va);
			for (var d = a.Ja, e = {}, f = 0; f < c.length; f++) {
				var g = c[f],
					h = d.call(a, g, f, c);
				p(h) && (e[h] || (e[h] = [])).push(g)
			}
			return c = Ra(e.selected || [], e.search || [], e.other || [])
		};
	X.prototype.Ja = function (a) {
		if (a.w() == this.G) return "selected";
		var b = Xh(this.h[this.g.ca].value);
		return (b = b && b.toLowerCase()) && 1 < b.length && -1 != a.getTitle().toLowerCase().indexOf(b) ? "search" : "other"
	};
	var fj = function (a, b) {
			if (b in a.o) {
				a.G in a.o && Sh(a.o[a.G], !1);
				var c = a.o[b];
				Sh(c, !0);
				a.h[a.g.ca].value = "";
				a.G = b;
				c = c.T().W();
				a.v = c ? c.w() : "";
				a.v in a.o || (a.v = "");
				a.C != a.v && (a.H = a.ob ? 1 : 2);
				bj(a)
			}
		},
		gj = function (a) {
			if (a.G) {
				var b = a.o[a.G];
				b && Sh(b, !1);
				a.G = "";
				a.v = "";
				a.C != a.v && (a.H = 1);
				a.h[a.g.ca].value = "";
				bj(a)
			}
		};
	X.prototype.Ta = function (a) {
		fj(this, ff(a))
	};
	X.prototype.Va = function () {
		gj(this)
	};
	X.prototype.$a = function (a) {
		switch (a.g) {
			case 9:
				a.h();
				a.B ? hj(this) : ij(this);
				break;
			case 13:
				a.h();
				a.l();
				break;
			case 46:
				a.l();
				break;
			case 38:
			case 40:
				a.h()
		}
	};
	X.prototype.ab = function (a) {
		switch (a.g) {
			case 9:
				a.h();
				break;
			case 13:
				a.h();
				a.l();
				this.B ? (fj(this, this.B.T().w()), this.dispatchEvent(new ef("nested_picker_folio_selected", this.B.T()))) : this.Z();
				break;
			case 38:
				a.h();
				hj(this);
				break;
			case 40:
				a.h();
				ij(this);
				break;
			case 39:
				this.B && (a.h(), this.S || this.B.K());
				break;
			case 37:
				if (this.B || 0 == this.h[this.g.ca].value.length) a.h(), this.S || this.dispatchEvent(new ef("nested_picker_drill_to_parent"));
				break;
			default:
				cj(this, null), Ch(this.h[this.g.ca], this.g.rb), ri(a) && bj(this)
		}
	};
	var cj = function (a, b) {
		if (a.B !== b) {
			a.B && Sh(a.B, !1);
			if (b) {
				Sh(b, !0);
				var c = a.h[a.g.na],
					d = c.scrollTop,
					e = qh(b.Y()),
					f = qh(c),
					e = (new R(e.x - f.x, e.y - f.y)).y + d,
					f = th(c).height,
					g = th(b.Y()).height;
				e + g > d + f ? c.scrollTop = e + g - f + 5 : e < d && (c.scrollTop = e - 5)
			} else a.h[a.g.na].scrollTop = 0;
			a.B = b
		}
	};
	X.prototype.Fa = function () {
		cj(this, null)
	};
	var hj = function (a) {
			var b = dj(a, ej(a, a.C));
			cj(a, b[Math.max((a.B ? b.indexOf(a.B) : -1) - 1, -1)])
		},
		ij = function (a) {
			var b = dj(a, ej(a, a.C));
			cj(a, b[Math.min((a.B ? b.indexOf(a.B) : -1) + 1, b.length - 1)])
		};
	X.prototype.Za = function (a) {
		if (13 == a.g || 32 == a.g) a.h(), this.Z()
	};
	X.prototype.Z = function () {
		var a = this.h[this.g.ca],
			b = Xh(a.value);
		if (b) {
			b = Uf(this.D.w(), Bf(1), b);
			aj(this, b);
			Yg(this.D, b);
			var c = this.o[this.C];
			c && dg(c.T(), b);
			this.dispatchEvent(new ef("nested_picker_folio_selected", b));
			fj(this, b.w());
			a.value = ""
		} else Ah(a, this.g.rb), this.dispatchEvent(new te("bad_folio_name"))
	};
	X.prototype.bb = function (a) {
		var b = this.h[this.g.na],
			c = b.scrollTop,
			d = 0 > a.ba,
			b = c + b.clientHeight >= b.scrollHeight;
		(0 >= c && d || b && !d) && a.h()
	};
	X.prototype.za = function () {
		var a = this.h[this.g.na],
			b = a.scrollTop,
			c = 0 >= b;
		wh(this.h[this.g.zb], b + a.clientHeight >= a.scrollHeight ? 0 : 1);
		wh(this.h[this.g.Nb], c ? 0 : 1)
	};
	var jj = function (a, b) {
		this.g = a;
		this.id = b
	};
	var kj = function () {};
	kj.prototype.Mb = function (a) {
		return a.execute()
	};
	kj.prototype.pc = function (a) {
		return W(a())
	};
	kj.prototype.qc = function (a) {
		var b = Ei();
		hi(function () {
			b.h(a())
		});
		return b.g
	};
	kj.prototype.setTimeout = function (a, b) {
		return lj(a, b)
	};
	var lj = function (a, b) {
		var c = Ei(),
			d = n.setTimeout(function () {
				c.h(a())
			}, b);
		return new jj(c.g, d)
	};
	kj.prototype.clearTimeout = function (a) {
		a && (n.clearTimeout(a.id), a.g.B())
	};
	kj.prototype.execute = aa;
	var mj = new kj,
		nj = function (a, b) {
			return mj.setTimeout(a, b)
		},
		oj = ["google", "sx", "setTimeout"],
		pj = n;
	oj[0] in pj || !pj.execScript || pj.execScript("var " + oj[0]);
	for (var qj; oj.length && (qj = oj.shift());) !oj.length && p(nj) ? pj[qj] = nj : pj[qj] ? pj = pj[qj] : pj = pj[qj] = {};
	var sj = function (a, b) {
		M.call(this);
		a && rj(this, a, b)
	};
	v(sj, M);
	k = sj.prototype;
	k.Ma = null;
	k.ub = null;
	k.Ib = null;
	k.vb = null;
	k.ja = -1;
	k.Pa = -1;
	k.xb = !1;
	var tj = {
			3: 13,
			12: 144,
			63232: 38,
			63233: 40,
			63234: 37,
			63235: 39,
			63236: 112,
			63237: 113,
			63238: 114,
			63239: 115,
			63240: 116,
			63241: 117,
			63242: 118,
			63243: 119,
			63244: 120,
			63245: 121,
			63246: 122,
			63247: 123,
			63248: 44,
			63272: 46,
			63273: 36,
			63275: 35,
			63276: 33,
			63277: 34,
			63289: 144,
			63302: 45
		},
		uj = {
			Up: 38,
			Down: 40,
			Left: 37,
			Right: 39,
			Enter: 13,
			F1: 112,
			F2: 113,
			F3: 114,
			F4: 115,
			F5: 116,
			F6: 117,
			F7: 118,
			F8: 119,
			F9: 120,
			F10: 121,
			F11: 122,
			F12: 123,
			"U+007F": 46,
			Home: 36,
			End: 35,
			PageUp: 33,
			PageDown: 34,
			Insert: 45
		},
		vj = sd("525"),
		wj = ld && !1;
	sj.prototype.g = function (a) {
		if (17 == this.ja && !a.v || 18 == this.ja && !a.A || ld && 91 == this.ja && !a.H) this.Pa = this.ja = -1; - 1 == this.ja && (a.v && 17 != a.g ? this.ja = 17 : a.A && 18 != a.g ? this.ja = 18 : a.H && 91 != a.g && (this.ja = 91));
		if (vj && !ui(a.g, this.ja, a.B, a.v, a.A)) this.handleEvent(a);
		else {
			var b = a.g;
			this.Pa = ld ? ti(b) : b;
			wj && (this.xb = a.A)
		}
	};
	sj.prototype.h = function (a) {
		this.Pa = this.ja = -1;
		this.xb = a.A
	};
	sj.prototype.handleEvent = function (a) {
		var b = a.o,
			c, d, e = b.altKey;
		"keypress" == a.type ? c = this.Pa : (c = b.keyCode || this.Pa, d = b.charCode || 0, wj && (e = this.xb), ld && 63 == d && 224 == c && (c = 191));
		d = c = ld ? ti(c) : c;
		var f = b.keyIdentifier;
		c ? 63232 <= c && c in tj ? d = tj[c] : 25 == c && a.B && (d = 9) : f && f in uj && (d = uj[f]);
		this.ja = d;
		a = new xj(d, 0, 0, b);
		a.A = e;
		this.dispatchEvent(a)
	};
	sj.prototype.Y = function () {
		return this.Ma
	};
	var rj = function (a, b, c) {
			a.vb && yj(a);
			a.Ma = b;
			a.ub = Ud(a.Ma, "keypress", a, c);
			a.Ib = Ud(a.Ma, "keydown", a.g, c, a);
			a.vb = Ud(a.Ma, "keyup", a.h, c, a)
		},
		yj = function (a) {
			a.ub && (ce(a.ub), ce(a.Ib), ce(a.vb), a.ub = null, a.Ib = null, a.vb = null);
			a.Ma = null;
			a.ja = -1;
			a.Pa = -1
		};
	sj.prototype.M = function () {
		sj.O.M.call(this);
		yj(this)
	};
	var xj = function (a, b, c, d) {
		Gd.call(this, d);
		this.type = "key";
		this.g = a
	};
	v(xj, Gd);
	var zj = function (a, b, c, d, e) {
		U.call(this, e);
		this.Z = a;
		this.ga = b;
		this.h = c.toLowerCase();
		this.v = !0;
		this.B = d;
		this.o = !1;
		this.N = bd().Bc;
		this.C = null;
		this.G = !1;
		this.K = new sj;
		y(this, this.K);
		Nh(this).listen(this.K, "key", this.kd)
	};
	v(zj, U);
	k = zj.prototype;
	k.ia = function () {
		var a = this.l.L(this.h, [this.N.I, this.Z]);
		this.A = a;
		a.type = "text";
		a.spellcheck = !1;
		Aj(this, "");
		Bj(this, this.v);
		"div" != this.h && 0 < this.B && (a = new $i(a, null, this.B), y(this, a))
	};
	k.Ka = function () {
		zj.O.Ka.call(this);
		var a = this.A;
		this.C || (this.C = new Ti(a), y(this, this.C));
		rj(this.K, a);
		Nh(this).listen(a, "mousedown", this.me).listen(a, "blur", this.onBlur).listen(a, "focus", this.Ud).listen(this.C, "input", this.td)
	};
	k.onBlur = function () {
		this.Ca();
		window.getSelection().removeAllRanges()
	};
	k.Ud = function () {
		if (!this.G) {
			var a = u(this.Od, this);
			mj.qc(a)
		}
		this.G = !1
	};
	k.Od = function () {
		var a = this.Y();
		a && fa(a.selectionStart) ? a.selectionStart = a.selectionEnd = a.value.length : a && p(a.createTextRange) && (a.focus(), a = a.createTextRange(), a.collapse(!1), a.select())
	};
	var Bj = function (a, b) {
			a.v = b;
			var c = a.A;
			"div" === a.h ? c.contentEditable = !a.v : (c.readOnly = a.v, c.disabled = a.v, c.placeholder = a.v ? "" : a.ga);
			Dh(c, a.N.editable, !a.v);
			b && c.blur()
		},
		Aj = function (a, b) {
			"div" == a.h ? Hh(a.l, a.A, b) : a.A.value = b
		};
	k = zj.prototype;
	k.update = function (a) {
		this.o || Aj(this, a)
	};
	k.td = function () {
		this.o = !0;
		if ("div" == this.h && 0 < this.B) {
			var a = "div" == this.h ? Mg(this.A) : this.A.value;
			a.length > this.B && Aj(this, a.substring(0, this.B))
		}
	};
	k.kd = function (a) {
		switch (a.g) {
			case 13:
				a.l();
				if ("textarea" === this.h ? !a.B : 1) a.h(), this.A.blur();
				break;
			case 46:
				a.l();
				break;
			case 37:
			case 38:
			case 39:
			case 40:
				a.l()
		}
	};
	k.me = function (a) {
		this.v || a.l();
		this.G = this.Y() != document.activeElement
	};
	k.Ca = function () {
		if (this.Y() && ("textarea" == this.h ? this.Y().scrollTop = 0 : this.Y().scrollLeft = 0, this.o)) {
			this.o = !1;
			var a = new z("editable_element_saved");
			a.value = "div" == this.h ? Mg(this.A) : this.A.value;
			this.dispatchEvent(a)
		}
	};
	k.M = function () {
		this.Ca();
		zj.O.M.call(this)
	};
	var Cj = function (a, b, c, d) {
		zj.call(this, a, b, d ? "textarea" : "input", 2048, c);
		this.S = !!d;
		this.g = "";
		this.H = !1
	};
	v(Cj, zj);
	k = Cj.prototype;
	k.ia = function () {
		Cj.O.ia.call(this);
		var a = this.A;
		a.type = "url";
		Nh(this).listen(a, "focus", this.Fd)
	};
	k.Ca = function () {
		if (this.o) {
			var a = this.A;
			0 == a.value.trim().length ? (this.dispatchEvent(new te("invalid_url")), this.o = !1) : (a.value = gf(a.value), a.validity.valid ? (this.g = a.value, Cj.O.Ca.call(this)) : (this.dispatchEvent(new te("invalid_url")), this.o = !1))
		}
	};
	k.update = function (a) {
		this.o || this.H || (this.g = a, Aj(this, this.S ? this.g : hf(this.g) || this.g))
	};
	k.Fd = function () {
		this.H = !0;
		Aj(this, this.g)
	};
	k.onBlur = function () {
		this.H = !1;
		this.Ca();
		Aj(this, this.S ? this.g : hf(this.g) || this.g)
	};
	var Dj = function (a) {
		U.call(this, a);
		this.v = bd().Ob;
		this.g = new zj(this.v.Kb, Wc, "textarea", 1024, a);
		y(this, this.g);
		this.g.aa(this);
		this.h = new zj(this.v.title, Vc, "input", 300, a);
		y(this, this.h);
		this.h.aa(this);
		this.o = new Cj(this.v.url, Xc, a);
		y(this, this.o);
		this.o.aa(this)
	};
	v(Dj, U);
	C("gws.collections.serp.TileArea");
	Dj.prototype.ia = function () {
		Dj.O.ia.call(this);
		var a = this.A;
		Ah(a, this.v.te);
		Oh(this.h, a);
		Oh(this.g, a);
		Oh(this.o, a);
		Bj(this.h, !1);
		Bj(this.g, !1);
		Bj(this.o, !1);
		Nh(this).listen(this.h, "editable_element_saved", u(this.B, this, "title_changed", "clipper_title_changed")).listen(this.g, "editable_element_saved", u(this.B, this, "note_changed", "clipper_note_changed")).listen(this.o, "editable_element_saved", u(this.B, this, "url_changed", "clipper_url_changed"))
	};
	Dj.prototype.B = function (a, b, c) {
		this.dispatchEvent(new P(a, c.value));
		this.dispatchEvent(new A("log", "", b))
	};
	var Ej = function (a) {
		a.h.Ca();
		a.g.Ca();
		a.o.Ca()
	};
	Dj.prototype.M = function () {
		Ej(this);
		Dj.O.M.call(this)
	};
	var Fj = function () {};
	var Gj = function () {};
	v(Gj, Fj);
	Gj.prototype.Ga = function () {
		var a = 0;
		eb(this.Ba(!0), function () {
			a++
		});
		return a
	};
	Gj.prototype.clear = function () {
		var a = fb(this.Ba(!0)),
			b = this;
		Ha(a, function (a) {
			b.remove(a)
		})
	};
	var Hj = function (a) {
		this.g = a
	};
	v(Hj, Gj);
	k = Hj.prototype;
	k.isAvailable = function () {
		if (!this.g) return !1;
		try {
			return this.g.setItem("__sak", "1"), this.g.removeItem("__sak"), !0
		} catch (a) {
			return !1
		}
	};
	k.set = function (a, b) {
		try {
			this.g.setItem(a, b)
		} catch (c) {
			if (0 == this.g.length) throw "Storage mechanism: Storage disabled";
			throw "Storage mechanism: Quota exceeded";
		}
	};
	k.get = function (a) {
		a = this.g.getItem(a);
		if (!q(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
		return a
	};
	k.remove = function (a) {
		this.g.removeItem(a)
	};
	k.Ga = function () {
		return this.g.length
	};
	k.Ba = function (a) {
		var b = 0,
			c = this.g,
			d = new cb;
		d.next = function () {
			if (b >= c.length) throw bb;
			var d = c.key(b++);
			if (a) return d;
			d = c.getItem(d);
			if (!q(d)) throw "Storage mechanism: Invalid value was encountered";
			return d
		};
		return d
	};
	k.clear = function () {
		this.g.clear()
	};
	k.key = function (a) {
		return this.g.key(a)
	};
	var Ij = function () {
		var a = null;
		try {
			a = window.localStorage || null
		} catch (b) {}
		this.g = a
	};
	v(Ij, Hj);
	var Jj = function () {},
		Kj = function () {
			this.g = new Ij;
			this.h = this.g.isAvailable()
		};
	v(Kj, Jj);
	ba(Kj);
	Kj.prototype.get = function (a) {
		if (this.h) return this.g.get(a)
	};
	var Lj = function (a) {
		M.call(this);
		this.B = a;
		this.o = pg(a) || og(a) || new Q(1, 1);
		this.S = kg(this.o) || 1;
		a = pg(this.B) && pg(this.B).width || 300;
		a = Math.min(a, 300);
		this.G = new Q(a, a / this.S);
		this.H = new ee(this);
		y(this, this.H);
		this.g = this.h = null;
		this.v = 0;
		this.l = null;
		this.C = 0;
		this.K = new R(1, 1);
		this.N = null;
		this.T = new R(0, 0);
		this.A = bd().Ec;
		this.da = !1
	};
	v(Lj, M);
	C("gws.collections.view.MultiResImage");
	Lj.prototype.M = function () {
		this.h && Gh(this.h);
		Lj.O.M.call(this)
	};
	var Mj = function (a) {
			return !!mg(a.B) && !!pg(a.B)
		},
		Nj = function (a) {
			if (a.h) {
				var b = "";
				a.N && (b += "scale(" + a.N.x + "," + a.N.y + ") ");
				b += "translate(" + Math.floor(a.T.x) + "px," + Math.floor(a.T.y) + "px) scale(" + a.K.x + "," + a.K.y + ")";
				T(a.h, "transform", b, !0)
			}
		},
		Oj = function (a, b) {
			zh(b, Math.floor(a.G.width), Math.floor(a.G.height))
		},
		Pj = function (a) {
			if (!Mj(a)) return !0;
			var b = pg(a.B);
			return !a.da && (a.o.width > b.width || a.o.height > b.height) && 300 < a.o.width && 300 < a.o.height
		};
	Lj.prototype.ka = function () {
		this.v = 2;
		Pj(this) && Qj(this)
	};
	Lj.prototype.ga = function (a) {
		this.v = 4;
		vh(this.g, !1);
		lg(this.B) && !this.l ? Qj(this) : (this.h && Ah(this.h, this.A.hidden), this.dispatchEvent(a))
	};
	var Qj = function (a) {
		if (!a.l) {
			a.l = Dg("img", {
				"class": a.A.Oa,
				alt: ""
			});
			var b = a.v;
			Dh(a.l, a.A.hidden, 2 == b || 1 == b);
			a.C = 1;
			he(he(a.H, a.l, "load", a.ya), a.l, "error", a.Z);
			a.l.src = lg(a.B);
			Oj(a, a.l);
			Eh(a.h, a.l)
		}
	};
	Lj.prototype.ya = function () {
		this.C = 2;
		this.g && (Ah(this.g, this.A.hidden), vh(this.g, !1), this.v = 3);
		Ch(this.l, this.A.hidden)
	};
	Lj.prototype.Z = function (a) {
		this.C = 4;
		vh(this.l, !1);
		this.g && 3 == this.v ? (Ch(this.g, this.A.hidden), vh(this.g, !0), this.v = 2) : 2 != this.v && (this.h && Ah(this.h, this.A.hidden), this.dispatchEvent(a))
	};
	var Rj = function (a, b) {
		M.call(this);
		this.C = a;
		this.A = og(a) || pg(a) || new Q(1, 1);
		this.v = kg(this.A) || 1;
		var c = pg(this.C) && pg(this.C).width || 300,
			c = Math.min(b || 300, c);
		this.l = new Q(c, Math.floor(c / this.v));
		this.B = new Lj(a);
		this.B.aa(this);
		y(this, this.B);
		this.g = null;
		this.o = new R(0, 0);
		this.h = new R(1, 1);
		this.H = this.G = null
	};
	v(Rj, M);
	Rj.prototype.M = function () {
		this.g && (Gh(this.g), this.g = null);
		Rj.O.M.call(this)
	};
	Rj.prototype.P = function () {
		return this.o
	};
	var Sj = function (a) {
		!a.g || ug(a.o, a.G) && ug(a.h, a.H) || (T(a.g, "transform", "translate3d(" + Math.floor(a.o.x) + "px," + Math.floor(a.o.y) + "px, 0) scale(" + a.h.x + "," + a.h.y + ")"), a.G = a.o.clone(), a.H = a.h.clone())
	};
	Rj.prototype.Y = function () {
		return this.g
	};
	var Tj = function (a, b) {
		U.call(this, b);
		this.H = this.K = !1;
		this.C = this.ga = this.N = null;
		this.Aa = new Dj(b);
		this.Aa.aa(this);
		y(this, this.Aa);
		this.ab = this.$a = this.Ia = this.bb = this.Fa = this.Ja = this.Z = this.S = this.ka = null;
		this.o = [];
		this.h = -1;
		this.Wa = !1;
		this.G = this.v = this.ec = "";
		this.Za = !1;
		this.g = bd().Ob;
		this.D = a;
		this.B = new X(a, this.l);
		this.B.aa(this);
		y(this, this.B);
		this.Va = new Yh(this.Td, Bg(this.l.g), this);
		y(this, this.Va);
		this.Ea = new sj;
		y(this, this.Ea);
		Nh(this).listen(this.Ea, "key", this.fd)
	};
	v(Tj, U);
	var Uj = C("gws.collections.serp.ClipperView");
	k = Tj.prototype;
	k.ia = function () {
		Tj.O.ia.call(this);
		var a = this.l,
			b = this.A;
		Bh(b, [this.g.wb, this.g.hidden]);
		this.N = a.L("div", this.g.fc);
		this.ka = a.L("div", [this.g.Pc, this.g.text]);
		this.S = a.L("div", [this.g.Oc, this.g.icon]);
		this.S.title = yc;
		var c = a.L("div", this.g.Jd, [this.ka, a.L("div", this.g.ue), this.S]),
			c = a.L("div", this.g.$b, c);
		this.Z = a.L("div", [this.g.Tc, this.g.text, this.g.Db]);
		this.Ja = a.L("div", [this.g.$d, this.g.hidden]);
		this.Fa = a.L("div", [this.g.Qd, this.g.hidden]);
		this.ga = a.L("div", this.g.Id, [c, this.Z, this.Ja, this.Fa]);
		this.za = this.l.L("div", [this.g.Yc, this.g.text], Yc);
		c = this.l.L("div", this.g.Lc);
		this.Ta = this.l.L("div", [this.g.group, this.g.se], [this.za, c]);
		this.ob = a.L("div", this.g.ve, a.L("div", [this.g.xe, this.g.text], Zc));
		this.ab = a.L("div", this.g.pe);
		this.Ia = a.L("div", [this.g.re, this.g.text]);
		this.$a = a.L("div", [this.g.oe, this.g.text], $c);
		this.bb = a.L("div", this.g.ne, this.ab, this.Ia, this.$a);
		Fh(a, this.N, this.ga);
		Oh(this.Aa, this.N);
		Fh(a, this.N, this.Ta);
		Oh(this.B, this.N);
		c = this.B;
		Nh(c).listen(c.Aa, "mousewheel", c.bb);
		Fh(a, this.N, this.bb, this.ob);
		Fh(a, b, this.N)
	};
	k.Ka = function () {
		Tj.O.Ka.call(this);
		this.Ea.Y() || rj(this.Ea, this.l.g.body);
		Nh(this).listen(this.l.g.body, "mouseup", this.od).listen(this.Y(), "mouseup", this.nd).listen(this.bb, "click", this.Wd).listen(this.S, "click", this.Dd).listen(this.Ja, "click", this.ee).listen(this.Fa, "click", this.de).listen(this.Z, "click", this.qd).listen(this.Ta, "click", this.Vd).listen(this.ob, "click", this.Gd).listen(this, "nested_picker_folio_selected", this.dd).listen(this, "nested_picker_folio_unselected", this.ed)
	};
	k.Vd = function () {
		this.H = !0;
		Vj(this)
	};
	k.fd = function (a) {
		27 == a.g ? this.dispatchEvent(new P("cancel_edit")) : 13 == a.g && this.close()
	};
	k.nd = function (a) {
		a.l()
	};
	var Xj = function (a, b) {
		var c = 0;
		a.K && (Wj(a, !1), c = 310);
		a.G = "";
		a.o = [];
		a.h = -1;
		a.Wa = !1;
		if (!a.G) {
			var d, e = Kj.$();
			d = e.get("stars.lufid");
			var f = e.get("stars.lufts"),
				e = Zg(a.D, d),
				f = 1728E5 > pa() - f;
			if (d = e && f ? d : "") a.dispatchEvent(new A("log", "", "clipper_last_used_displayed")), a.G = d, a.Za = !0, Hh(a.l, a.$a, ad)
		}
		Si(u(a.cc, a, b), c)
	};
	Tj.prototype.cc = function (a) {
		this.ec = "url(" + a.G() + ")";
		var b = Ng(a);
		S(a);
		b && lg(b);
		this.Wa || (b && (lg(b) || mg(b)) ? (0 == this.o.length && (this.o = [b], this.h = 0), Yj(this, b)) : (this.h = this.o.length, Zj(this)));
		var b = this.Aa,
			c = S(a);
		b.g.update(w(G(a.F, 2)) || w(G(c.g, 2)));
		b.h.update(c ? c.getTitle() : "");
		b.o.update(qf(a));
		a = a.va();
		(a = a[a.length - 1]) ? (fj(this.B, a), this.v = a) : this.v ? (fj(this.B, this.v), this.dispatchEvent(new P("move_to_folio", this.v))) : (this.v = "", gj(this.B));
		this.K ? Vj(this) : Wj(this, !0)
	};
	var ak = function (a, b) {
		return Ma(a.o, function (a) {
			return lg(a) == b
		})
	};
	Tj.prototype.nc = function (a) {
		a = Ng(a);
		var b = ak(this, lg(a)); - 1 == b ? D(Uj, "removeImage: not in imageDataModels_ (length=" + this.o.length + ") img=" + lg(a)) : (Pa(this.o, b), 0 == this.o.length ? (this.h = this.o.length, Zj(this)) : b == this.h ? (this.h == this.o.length && this.h--, Yj(this, this.o[this.h]), a = new P("image_data_changed"), a.g = [this.o[this.h]], this.dispatchEvent(a)) : b < this.h && (this.h--, Yj(this, this.o[this.h])), Vj(this))
	};
	var Yj = function (a, b) {
			if (!a.C || a.C.C != b) {
				a.C && a.C.sa();
				T(a.ga, "background-image", "");
				a.C = new Rj(b);
				y(a, a.C);
				var c = a.C;
				if (250 != c.A.width || 126 != c.A.height) {
					c.h.x = 250 / c.l.width;
					c.h.y = 126 / c.l.height;
					c.A.width = 250;
					c.A.height = 126;
					var d = new Q(0, 0),
						e = new R(0, 0);
					c.v > 250 / 126 ? (d.width = 126 * c.v, d.height = 126, e.x = .5 * (250 - d.width), e.y = 0) : (d.height = 250 / c.v, d.width = 250, e.x = 0, e.y = Math.max(Math.min(0, (+Pb.portrait || 25) / 100 * -d.height + 63), -d.height + 126));
					var f = c.B,
						g = d.width,
						d = d.height,
						h = new R(1 / c.h.x, 1 / c.h.y),
						l = e.y;
					f.T.x =
						e.x;
					f.T.y = l;
					g && d ? (f.o.width = +g, f.o.height = +d) : g ? (f.o.width = +g, f.o.height = g / f.S) : (f.o.width = d * f.S, f.o.height = +d);
					f.K.x = f.o.width / f.G.width;
					f.K.y = f.o.height / f.G.height;
					f.N = h || null;
					f.da = !1;
					!f.da && f.h && (Pj(f) ? (Qj(f), 3 == f.C && (Ch(f.l, f.A.hidden), vh(f.l, !0), f.g && vh(f.g, !1), f.v = 3, f.C = 2)) : f.g && 3 == f.v && (Ch(f.g, f.A.hidden), vh(f.g, !0), f.v = 2, f.l && (vh(f.l, !1), f.C = 3)));
					Nj(f);
					Sj(c)
				}
				c = a.C;
				e = a.ga;
				c.g = Dg("div", "col-ci");
				zh(c.g, Math.floor(c.l.width), Math.floor(c.l.height));
				T(c.g, "clip", "rect(0px, " + c.l.width + "px, " +
					c.l.height + "px, 0px)");
				Sj(c);
				f = c.B;
				g = c.g;
				f.h || (f.h = Dg("div", f.A.I), Oj(f, f.h));
				Nj(f);
				!f.g && Mj(f) ? !f.g && Mj(f) && (f.g = Dg("img", {
					"class": f.A.Oa,
					alt: ""
				}), f.v = 1, he(f.H, f.g, "load", f.ka), he(f.H, f.g, "error", f.ga), f.g.src = mg(f.B), Oj(f, f.g), Eh(f.h, f.g)) : Qj(f);
				Eh(g, f.h);
				Eh(e, c.g)
			}
		},
		Zj = function (a) {
			T(a.ga, "background-image", a.ec);
			a.C && (a.C.sa(), a.C = null)
		};
	Tj.prototype.ee = function () {
		bk(this, this.h - 1)
	};
	Tj.prototype.de = function () {
		bk(this, this.h + 1)
	};
	var bk = function (a, b) {
		if (!(b == a.h || 0 > b || b > a.o.length)) {
			a.h = b;
			b == a.o.length ? Zj(a) : Yj(a, a.o[a.h]);
			a.Wa = !0;
			var c = new P("image_data_changed");
			c.g = [a.o[a.h]];
			a.dispatchEvent(c);
			a.dispatchEvent(new A("log", "", "clipper_image_changed"));
			Vj(a)
		}
	};
	Tj.prototype.Wd = function () {
		fj(this.B, this.G);
		this.v = this.G;
		this.dispatchEvent(new P("move_to_folio", this.G));
		this.dispatchEvent(new A("log", "", this.Za ? "clipper_last_used_selected" : "clipper_suggest_selected"));
		ck(this.G);
		Vj(this)
	};
	var ck = function (a) {
			var b = Kj.$();
			b.h && b.g.set("stars.lufid", a);
			a = "" + pa();
			b.h && b.g.set("stars.lufts", a)
		},
		Wj = function (a, b) {
			a.K != b && (a.K = b, b || (a.H = !1, Ej(a.Aa)), Vj(a), a.dispatchEvent(new P(a.K ? "show_clipper" : "hide_clipper")))
		},
		dk = function (a) {
			Hh(a.l, a.ka, Oc);
			Ch(a.S, a.g.tc);
			a.S.title = yc
		};
	k = Tj.prototype;
	k.close = function () {
		Wj(this, !1)
	};
	k.od = function () {
		F(Uj, "Closed clipper view");
		Wj(this, !1)
	};
	k.Dd = function () {
		F(Uj, "Unstarred item from clipper view");
		this.v ? (this.dispatchEvent(new P("remove_from_folio", this.v)), this.v = "", gj(this.B), Vj(this)) : (this.dispatchEvent(new A("log", "", "undo_unstar")), this.dispatchEvent(new A("log", "", "clipper_bookmark_deleted")), this.dispatchEvent(new P("remove_clip")))
	};
	k.qd = function () {
		this.v && (F(Uj, "Clicked on folio chip."), this.dispatchEvent(new P("open_curation", this.v, !0)))
	};
	k.Gd = function () {
		F(Uj, "Clicked on view activity.");
		this.dispatchEvent(new A("log", "", "clipper_view_all"));
		this.dispatchEvent(new P("open_curation", void 0, !0))
	};
	k.dd = function (a) {
		var b = ff(a);
		a = a.R ? a.R.la() : "";
		this.H = !1;
		this.v = b;
		this.dispatchEvent(new P("move_to_folio", b));
		this.dispatchEvent(new A("log", "", "clipper_folder_selected"));
		var c = Zg(this.D, b);
		if (c) {
			var d = 0,
				e = 0;
			if (c = c.W())
				for (d = c.h.get().length; c;) e++, c = c.W();
			else
				for (var c = this.D.La(), f = 0; f < c.length; ++f) !c[f].eb && d++;
			this.dispatchEvent(new A("log", d.toString(), "clipper_folio_selected_visible_folio_count"));
			this.dispatchEvent(new A("log", e.toString(), "clipper_folio_selected_depth_count"))
		}
		ck(a || b);
		Vj(this)
	};
	k.ed = function (a) {
		a = ff(a);
		this.H = !1;
		this.v = "";
		this.dispatchEvent(new P("remove_from_folio", a));
		Vj(this)
	};
	var Vj = function (a) {
		a.K && a.dispatchEvent("clipper_opened");
		null != a.Va.g || ai(a.Va)
	};
	Tj.prototype.Td = function () {
		if (this.oa) {
			var a;
			a = this.B;
			a = a.G in a.o ? a.o[a.G].T() : null;
			Dh(this.Z, this.g.Db, !a);
			if (a) {
				a = a.getTitle();
				Hh(this.l, this.Z, a);
				Hh(this.l, this.za, a);
				var b = new jc(wc);
				a = nc(b, {
					FOLDER_NAME: a
				});
				Hh(this.l, this.ka, a);
				Ah(this.S, this.g.tc);
				this.S.title = zc
			} else Hh(this.l, this.za, Yc), dk(this);
			a = -1 != this.h;
			Dh(this.Ja, this.g.hidden, !a || 0 == this.h);
			Dh(this.Fa, this.g.hidden, !a || this.h == this.o.length);
			Dh(this.ga, this.g.Rd, a && this.h == this.o.length);
			(a = Zg(this.D, this.G)) ? (Hh(this.l, this.Ia, a.getTitle()),
				Dh(this.ab, this.g.yb, fg(a))) : (this.G = "", this.Za = !1);
			a = !!a && !this.v && !this.H;
			Dh(this.N, this.g.qe, a);
			this.K && (b = this.l.g.body, Dh(b, this.g.Zd, a), Dh(b, this.g.Yd, this.H));
			Dh(this.A, this.g.hidden, !this.K);
			Dh(this.N, this.g.Ld, this.H);
			Dh(this.ob, this.g.we, this.H);
			Dh(this.Ta, this.g.Xc, this.H);
			this.H ? (a = this.B, a.h[a.g.ca].focus(), bj(a)) : (a = this.B, b = a.h[a.g.ca], b.value = "", b.blur(), cj(a, null), Ch(b, a.g.rb));
			Si(this.Pd, 310, this)
		}
	};
	Tj.prototype.Pd = function () {
		this.K || this.dispatchEvent("clipper_closed")
	};
	var ek = function (a) {
		var b = new V(function (b, d) {
			var e = new Image;
			e.onerror = oa(d, "Error loading image: " + a);
			e.onabort = oa(d, "Aborted loading image: " + a);
			e.onload = oa(b, e);
			e.src = a
		});
		Si(b.B, 2E3, b);
		return b
	};
	var fk = function (a) {
		M.call(this);
		this.l = new ee(this);
		y(this, this.l);
		this.D = a;
		this.h = null
	};
	v(fk, M);
	var gk = C("gws.collections.serp.ClipperController");
	fk.prototype.Gb = function (a) {
		this.aa(a);
		this.l.listen(this.D, "clip_removed", this.ad).listen(this.D, "clip_changed", this.$c).listen(this.D, "folio_removed", this.cd).listen(this.D, "folio_changed", this.bd).listen(this, "note_changed", this.vd).listen(this, "url_changed", this.Ed).listen(this, "title_changed", this.Cd).listen(this, "move_to_folio", this.ud).listen(this, "remove_clip", this.Ad).listen(this, "remove_from_folio", this.Bd).listen(this, "open_curation", this.xd)
	};
	var hk = function (a, b) {
			a.g = new Tj(a.D, b);
			a.g.aa(a);
			y(a, a.g);
			Oh(a.g, void 0)
		},
		ik = function (a) {
			a.g && (dd(a.g), a.g = null)
		};
	k = fk.prototype;
	k.ad = function (a) {
		a.clip && this.h && this.h == a.clip && (this.h = null, this.g && this.g.close())
	};
	k.$c = function (a) {
		if (this.h && this.h.w() == a.clip.w()) {
			var b = a.clip;
			if (0 != a.source || 0 == a.source && (203 == a.g || 204 == a.g))
				if (!Ng(b) || og(Ng(b)) || 203 != a.g || a.oldValue) this.g && this.g.cc(b);
				else {
					var c = lg(Ng(b));
					ek(c).then(function (a) {
						if (this.g)
							if (100 > a.width || 100 > a.height) this.g.nc(b);
							else {
								if (a.width && a.height) {
									var e = this.g,
										f = a.width;
									a = a.height;
									var g = Ng(b),
										h = ak(e, lg(g));
									if (-1 == h) D(Uj, "updateImageSize: not in imageDataModels_ (length=" + e.o.length + ") w=" + f + " h=" + a + " img=" + lg(g));
									else {
										var g = qg(g.J()),
											l = I(g.g, Re,
												2);
										H(l, 2, f);
										f = I(g.g, Re, 2);
										H(f, 3, a);
										e.o[h] = g;
										h == e.h && Tg(b, g)
									}
								}
							}
						else D(gk, "refetchImageSize(" + c + ") no save widget")
					}, function (a) {
						D(gk, "refetchImageSize(" + c + ") failed: " + a)
					}, this)
				}
		}
	};
	k.cd = function (a) {
		if (this.g) {
			var b = this.g;
			a = a.R;
			b.oa && (b.v == a.w() && (b.v = "", Hh(b.l, b.za, Yc), Ah(b.Z, b.g.Db), dk(b)), b.G == a.w() && Vj(b))
		}
	};
	k.bd = function (a) {
		if (this.g) {
			var b = this.g;
			a = a.R;
			if (b.oa) {
				var c = a.getTitle();
				if (b.v == a.w()) {
					Hh(b.l, b.Z, c);
					Hh(b.l, b.za, c);
					var d;
					d = new jc(wc);
					d = nc(d, {
						FOLDER_NAME: c
					});
					Hh(b.l, b.ka, d)
				}
				b.G == a.w() && Hh(b.l, b.Ia, c)
			}
		}
	};
	k.vd = function (a) {
		Wg(this.h, a.value || "")
	};
	k.Cd = function (a) {
		this.h.setTitle(a.value || "")
	};
	k.Ed = function (a) {
		(a = gf(a.value)) && Ug(this.h, a)
	};
	k.ud = function (a) {
		if (a = Zg(this.D, a.value)) {
			var b = this.D,
				c = this.h,
				d = N(void 0);
			Vf(a, c) || (ag(a, c, d), O(b, d, void 0))
		}
	};
	k.Ad = function () {
		var a = this.D,
			b = this.h.w(),
			c = N(void 0),
			b = a.h.g[b] || null || dh(a, b);
		a.pa(b, c);
		O(a, c, void 0)
	};
	k.Bd = function (a) {
		var b = this.D,
			c = this.h.w(),
			d = a.value;
		a = N(void 0);
		c = b.h.g[c] || null || dh(b, c);
		d = Zg(b, d);
		null != d && null != c && d.pa(c, void 0, a);
		O(b, a, void 0)
	};
	k.xd = function () {
		F(gk, "Opening curation view");
		this.g && this.g.close()
	};
	var jk = function (a) {
		fk.call(this, a);
		this.o = !1
	};
	v(jk, fk);
	C("gws.collections.serp.PageClipperController");
	k = jk.prototype;
	k.Gb = function (a) {
		jk.O.Gb.call(this, a);
		this.l.listen(this.D, "clip_added", this.Zc).listen(this, "image_data_changed", this.sd).listen(a, "add_extra_image_data", this.ld).listen(a, "force_clipper_clip", this.rd).listen(this, "cancel_edit", this.md)
	};
	k.Zc = function (a) {
		if (0 == a.source || 4 == a.source) this.o = !0, this.h = a = a.clip, this.g && Xj(this.g, a)
	};
	k.sd = function (a) {
		if (a.g[0]) Tg(this.h, a.g[0]);
		else {
			a = this.h;
			var b = new ng;
			H(b.g, 6, !0);
			Tg(a, b, void 0)
		}
	};
	k.rd = function (a) {
		this.o = !1;
		this.h = a = a.clip;
		this.g && Xj(this.g, a)
	};
	k.md = function () {
		this.o && this.dispatchEvent(new P("remove_clip"))
	};
	k.ld = function (a) {
		if (this.g) {
			var b = this.g;
			a = a.g;
			if (b.C) {
				for (var c = b.o[b.h], d = !1, e = 0; e < a.length; ++e)
					if (lg(c) == lg(a[e])) {
						d = !0;
						b.h = e;
						break
					}
				d || (a.unshift(c), b.h = 0)
			} else b.h = a.length;
			b.o = a;
			Vj(b)
		}
	};
	var kk = function (a, b) {
		var c = b ? mb(b) : {};
		a && ob(c, a);
		return c
	};
	var mk = function (a, b, c) {
			this.h = null;
			this.B = this.C = this.g = this.l = this.o = 0;
			this.G = !1;
			a && lk(this, a, b, c)
		},
		nk = [],
		ok = function (a, b, c) {
			if (nk.length) {
				var d = nk.pop();
				a && lk(d, a, b, c);
				return d
			}
			return new mk(a, b, c)
		};
	mk.prototype.clone = function () {
		return ok(this.h, this.o, this.l - this.o)
	};
	mk.prototype.clear = function () {
		this.h = null;
		this.g = this.l = this.o = 0;
		this.G = !1
	};
	var lk = function (a, b, c, d) {
		b = b.constructor === Uint8Array ? b : b.constructor === ArrayBuffer ? new Uint8Array(b) : b.constructor === Array ? new Uint8Array(b) : b.constructor === String ? Be(b) : new Uint8Array(0);
		a.h = b;
		a.o = p(c) ? c : 0;
		a.l = p(d) ? a.o + d : a.h.length;
		a.g = a.o
	};
	mk.prototype.reset = function () {
		this.g = this.o
	};
	mk.prototype.A = function () {
		var a, b = this.h;
		a = b[this.g + 0];
		var c = a & 127;
		if (128 > a) return this.g += 1, c;
		a = b[this.g + 1];
		c |= (a & 127) << 7;
		if (128 > a) return this.g += 2, c;
		a = b[this.g + 2];
		c |= (a & 127) << 14;
		if (128 > a) return this.g += 3, c;
		a = b[this.g + 3];
		c |= (a & 127) << 21;
		if (128 > a) return this.g += 4, c;
		a = b[this.g + 4];
		c |= (a & 15) << 28;
		if (128 > a) return this.g += 5, c >>> 0;
		this.g += 10;
		return c
	};
	mk.prototype.v = mk.prototype.A;
	var pk = function () {
		this.g = []
	};
	pk.prototype.length = function () {
		return this.g.length
	};
	var qk = function (a) {
			var b = a.g;
			a.g = [];
			return b
		},
		rk = function (a, b) {
			for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
			a.g.push(b)
		},
		sk = function (a, b) {
			if (0 <= b) rk(a, b);
			else {
				for (var c = 0; 9 > c; c++) a.g.push(b & 127 | 128), b >>= 7;
				a.g.push(1)
			}
		};
	var tk = function (a, b, c) {
		this.g = ok(a, b, c);
		this.A = this.g.g;
		this.l = this.h = -1;
		this.o = !1
	};
	tk.prototype.reset = function () {
		this.g.reset();
		this.l = this.h = -1
	};
	var uk = function (a) {
			var b = a.g;
			(b = b.g == b.l) || (b = a.o) || (b = a.g, b = b.G || 0 > b.g || b.g > b.l);
			if (b) return !1;
			a.A = a.g.g;
			var b = a.g.A(),
				c = b & 7;
			if (0 != c && 5 != c && 1 != c && 2 != c && 3 != c && 4 != c) return a.o = !0, !1;
			a.h = b >>> 3;
			a.l = c;
			return !0
		},
		vk = function (a) {
			switch (a.l) {
				case 0:
					if (0 != a.l) vk(a);
					else {
						for (a = a.g; a.h[a.g] & 128;) a.g++;
						a.g++
					}
					break;
				case 1:
					1 != a.l ? vk(a) : (a = a.g, a.g += 8);
					break;
				case 2:
					if (2 != a.l) vk(a);
					else {
						var b = a.g.A();
						a = a.g;
						a.g += b
					}
					break;
				case 5:
					5 != a.l ? vk(a) : (a = a.g, a.g += 4);
					break;
				case 3:
					b = [a.h];
					do {
						if (!uk(a)) {
							a.o = !0;
							break
						}
						if (3 == a.l) b.push(a.h);
						else if (4 == a.l && a.h != b.pop()) {
							a.o = !0;
							break
						}
					} while (0 < b.length)
			}
		},
		xk = function (a, b) {
			var c = wk,
				d = a.g.l,
				e = a.g.A(),
				e = a.g.g + e;
			a.g.l = e;
			c(b, a);
			a.g.g = e;
			a.g.l = d
		},
		yk = function (a) {
			var b = a.g.A();
			a = a.g;
			for (var c = a.h, d = a.g, b = d + b, e = []; d < b;) {
				var f = c[d++];
				if (128 > f) e.push(f);
				else if (!(192 > f))
					if (224 > f) {
						var g = c[d++];
						e.push((f & 31) << 6 | g & 63)
					} else if (240 > f) {
					var g = c[d++],
						h = c[d++];
					e.push((f & 15) << 12 | (g & 63) << 6 | h & 63)
				}
			}
			c = String.fromCharCode.apply(null, e);
			a.g = d;
			return c
		};
	var zk = function () {
			this.o = [];
			this.h = 0;
			this.g = new pk;
			this.l = []
		},
		Ak = function (a, b) {
			rk(a.g, 8 * b + 2);
			var c = qk(a.g);
			a.o.push(c);
			a.h += c.length;
			c.push(a.h);
			return c
		},
		Bk = function (a, b) {
			for (var c = b.pop(), c = a.h + a.g.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.h++;
			b.push(c);
			a.h++
		};
	zk.prototype.reset = function () {
		this.o = [];
		qk(this.g);
		this.h = 0;
		this.l = []
	};
	var Ck = function (a) {
			for (var b = new Uint8Array(a.h + a.g.length()), c = a.o, d = c.length, e = 0, f = 0; f < d; f++) {
				var g = c[f];
				b.set(g, e);
				e += g.length
			}
			c = qk(a.g);
			b.set(c, e);
			a.o = [b];
			return b
		},
		Dk = function (a, b, c) {
			null != c && (rk(a.g, 8 * b + 0), sk(a.g, c))
		},
		Ek = function (a, b, c) {
			if (null != c) {
				b = Ak(a, b);
				for (var d = a.g, e = 0; e < c.length; e++) {
					var f = c.charCodeAt(e);
					128 > f ? d.g.push(f) : (2048 > f ? d.g.push(f >> 6 | 192) : (d.g.push(f >> 12 | 224), d.g.push(f >> 6 & 63 | 128)), d.g.push(f & 63 | 128))
				}
				Bk(a, b)
			}
		};
	var Fk = function (a, b) {
		a.forEach(function (a) {
			b(a);
			a.children && Fk(a.children, b)
		})
	};
	var Gk = function () {
		this.h = {};
		this.g = {}
	};
	ba(Gk);
	var Hk = function (a) {
			var b = Gk.$();
			a && (b.h[a] = (b.h[a] || 0) + 1)
		},
		Ik = function (a) {
			var b = Gk.$();
			a && (b.g[a] = (b.g[a] || 0) + 1)
		};
	var Jk = function (a) {
		cd.call(this);
		this.l = a;
		this.g = {};
		this.h = {}
	};
	v(Jk, cd);
	Jk.prototype.M = function () {
		this.unlisten();
		Jk.O.M.call(this)
	};
	Jk.prototype.listen = function (a, b) {
		var c = u(b, this.l);
		a.addListener(c);
		var d = a[ia] || (a[ia] = ++ka);
		d in this.g ? this.h[d].nb(c) : (this.g[d] = a, this.h[d] = new jd([c]));
		return this
	};
	Jk.prototype.unlisten = function (a) {
		if (a) {
			var b = a[ia] || (a[ia] = ++ka);
			if (b in this.g) {
				var c = this.h[b].fa();
				Ha(c, a.removeListener, a);
				delete this.h[b];
				delete this.g[b]
			}
		} else gb(this.g, this.unlisten, this)
	};
	var Kk = function () {
		M.call(this);
		this.l = new ee(this);
		y(this, this.l)
	};
	v(Kk, M);
	Kk.prototype.h = function (a) {
		this.aa(a)
	};
	var Lk = C("image.collections.extension.Promises"),
		Ri = function (a) {
			D(Lk, a.toString())
		},
		Y = function (a, b, c) {
			return function (d) {
				var e = chrome.runtime.lastError;
				e ? (Ik(a), c(e.message || "Unknown Chrome API error")) : (Hk(a), b(d))
			}
		},
		Mk = function () {
			var a = chrome.runtime.id;
			return new V(function (b, c) {
				chrome.management.get(a, Y("chrome.management.get", b, c))
			})
		},
		Ok = function () {
			return p(Nk) ? W(Nk) : Mk().then(function (a) {
				return Nk = a = a.version
			})
		},
		Nk, Pk = function () {
			return Ok().then(function (a) {
				F(Lk, "Extension version: " + a);
				var b =
					a.substr(5, 1);
				a = a.substr(7);
				a = a.replace(".", "");
				a = (9 == a.length ? "" : "0") + a;
				a = b + a.substr(0, 4) + a.substr(5, 4);
				return /[^0-9]/.test(a) ? zi("Version " + a + " is not a number") : a
			})
		},
		Qk = function () {
			return new V(function (a, b) {
				chrome.bookmarks.getTree(Y("chrome.bookmarks.getTree", a, b))
			})
		},
		Sk = function () {
			return Rk().then(function (a) {
				return Qk().then(function (b) {
					function c(b) {
						b.Ha = a[b.id] || {};
						b.children && b.children.forEach(c)
					}
					b.forEach(c);
					return b
				})
			})
		},
		Tk = function () {
			return new V(function (a, b) {
				chrome.bookmarkManagerPrivate.getSubtree("",
					!0, Y("chrome.bookmarkManagerPrivate.getSubtree", a, b))
			})
		},
		Uk = function (a) {
			return new V(function (b, c) {
				chrome.bookmarks.get(a, Y("chrome.bookmarks.get", b, c))
			})
		},
		Vk = function (a) {
			return new V(function (b, c) {
				chrome.bookmarks.getChildren(a, Y("chrome.bookmarks.getChildren", b, c))
			})
		},
		Wk = function () {
			return Vk("0").then(function (a) {
				return 1 < a.length ? a[1] : zi("No child 1 in node 0")
			})
		},
		Yk = function () {
			return p(Xk) ? W(Xk) : Wk().then(function (a) {
				return Xk = a.id
			})
		},
		Xk, Zk = function (a) {
			return new V(function (b, c) {
				chrome.bookmarkManagerPrivate.getMetaInfo(a,
					"stars.id",
					function (d) {
						p(d) ? (Hk("chrome.bookmarkManagerPrivate.getMetaInfo"), b(d)) : (Ik("chrome.bookmarkManagerPrivate.getMetaInfo"), c("Node " + a + " has no property stars.id"))
					})
			})
		},
		$k = function (a) {
			return new V(function (b) {
				chrome.bookmarkManagerPrivate.getMetaInfo(a, void 0, function (a) {
					p(a) ? Hk("chrome.bookmarkManagerPrivate.getMetaInfo") : Ik("chrome.bookmarkManagerPrivate.getMetaInfo");
					b(a || {})
				})
			})
		},
		Rk = function () {
			return new V(function (a) {
				chrome.bookmarkManagerPrivate.getMetaInfo(void 0, void 0, function (b) {
					p(b) ?
						Hk("chrome.bookmarkManagerPrivate.getMetaInfo") : Ik("chrome.bookmarkManagerPrivate.getMetaInfo");
					a(b || {})
				})
			})
		},
		al = function (a, b, c) {
			return new V(function (d, e) {
				chrome.bookmarkManagerPrivate.setMetaInfo(a, b, c, Y("chrome.bookmarkManagerPrivate.setMetaInfo", d, e))
			})
		},
		bl = function (a, b) {
			return new V(function (c, d) {
				chrome.bookmarks.move(a, b, Y("chrome.bookmarks.move", c, d))
			})
		},
		cl = function (a, b) {
			return new V(function (c, d) {
				chrome.bookmarkManagerPrivate.createWithMetaInfo(a, b, Y("chrome.bookmarkManagerPrivate.createWithMetaInfo",
					c, d))
			})
		},
		dl = function (a) {
			return new V(function (b, c) {
				chrome.bookmarks.remove(a, Y("chrome.bookmarks.remove", b, c))
			})
		},
		el = function (a) {
			return new V(function (b, c) {
				chrome.bookmarks.removeTree(a, Y("chrome.bookmarks.removeTree", b, c))
			})
		},
		fl = function (a, b) {
			return new V(function (c, d) {
				chrome.bookmarks.update(a, b, Y("chrome.bookmarks.update", c, d))
			})
		},
		gl = function (a) {
			return new V(function (b, c) {
				chrome.bookmarks.search(a, Y("chrome.bookmarks.search", b, c))
			})
		},
		hl = function (a, b) {
			return new V(function (c, d) {
				chrome.tabs.executeScript(a,
					b, Y("chrome.tabs.executeScript", c, d))
			})
		},
		il = function (a) {
			return new V(function (b, c) {
				chrome.tabs.query(a, Y("chrome.tabs.query", b, c))
			})
		},
		jl = function (a) {
			return new V(function (b, c) {
				chrome.tabs.get(a, Y("chrome.tabs.get", b, c))
			})
		},
		kl = function (a) {
			var b = {
				active: !0
			};
			return new V(function (c, d) {
				chrome.tabs.update(a, b, Y("chrome.tabs.update", c, d))
			})
		},
		ll = function (a) {
			return new V(function (b, c) {
				chrome.tabs.create(a, Y("chrome.tabs.create", b, c))
			})
		},
		ml = function () {
			return new V(function (a, b) {
				chrome.storage.local.get("had-full-extension", Y("chrome.storage.local.get", a, b))
			})
		},
		nl = function () {
			var a = {
				"had-full-extension": "1"
			};
			new V(function (b, c) {
				chrome.storage.local.set(a, Y("chrome.storage.local.set", b, c))
			})
		};
	var ol = function (a) {
		this.g = a
	};
	ol.prototype.w = function () {
		return this.g
	};
	var pl = function (a) {
		Kk.call(this);
		this.D = a;
		this.g = null;
		this.o = new Jk(this);
		y(this, this.o)
	};
	v(pl, Kk);
	var ql = C("image.collections.extension.ActiveTabController");
	pl.prototype.h = function (a) {
		pl.O.h.call(this, a);
		il({
			active: !0,
			currentWindow: !0
		}).then(function (a) {
			0 < a.length && (this.g = new ol(a[0].id), this.o.listen(chrome.tabs.onUpdated, this.B).listen(chrome.tabs.onReplaced, this.v).listen(chrome.runtime.onMessage, this.A));
			rl(this)
		}, void 0, this)
	};
	pl.prototype.A = function (a) {
		switch (a.type) {
			case "created_clip":
				var b;
				try {
					b = new Qg(new Ze(De(a.clipData)))
				} catch (f) {
					b = null
				}
				var c;
				c = this.D;
				var d = b.w();
				if (c = c.h.g[d] || null || dh(c, d)) {
					var d = new Df(0, void 0),
						e = N(d);
					G(b.F, 4) && Xg(c, G(b.F, 4), e);
					Ng(b) && Tg(c, Ng(b), e);
					S(b) && Vg(c, S(b), e);
					O(c, e, d);
					Ff(d, this.D)
				} else E(ql, "Clip created for non-existent clip?");
				b = a.images;
				a = [];
				for (c = 0; c < b.length; c++) a.push(qg(b[c]));
				a.length && (b = new P("add_extra_image_data"), b.g = a, this.dispatchEvent(b));
				break;
			case "salient_images_found":
				b =
					a.images;
				a = [];
				for (c = 0; c < b.length; c++) a.push(qg(b[c]));
				a.length && (b = new P("add_extra_image_data"), b.g = a, this.dispatchEvent(b));
				break;
			default:
				D(ql, "Invalid message type: " + a.type)
		}
	};
	pl.prototype.B = function (a, b, c) {
		a == this.g.w() && "loading" == b.status && (this.g = new ol(c.id))
	};
	pl.prototype.v = function (a, b) {
		b == this.g.w() && (this.g = new ol(a), jl(a).then(function () {}, void 0, this))
	};
	var rl = function (a) {
			var b = {
				code: '!window["__SENTINEL__"];'.replace("__SENTINEL__", "full_script_injected"),
				allFrames: !1,
				runAt: "document_start"
			};
			hl(a.g.w(), b).then(function (a) {
				a[0] && sl(this)
			}, function (a) {
				D(ql, a.toString())
			}, a)
		},
		sl = function (a) {
			function b(a) {
				D(ql, a.toString())
			}
			var c = a.g.w();
			["bootstrap.js", "content_compiled.js"].forEach(function (a) {
				Ii(hl(c, {
					allFrames: !1,
					runAt: "document_start",
					file: a
				}), b)
			})
		};
	pl.prototype.postMessage = function (a) {
		if (!this.g) return !1;
		chrome.tabs.sendMessage(this.g.w(), a, u(function (b) {
			b || Si(u(this.postMessage, this, a), 100)
		}, this));
		return !0
	};
	var tl = C("image.collections.extension.ProtoParser"),
		wk = function (a, b) {
			try {
				for (var c = 0; uk(b);) {
					switch (b.h) {
						case 1:
							var d = yk(b);
							H(a, 1, d);
							break;
						case 2:
							var e = b.g.v();
							H(a, 2, e);
							break;
						case 3:
							var f = b.g.v();
							H(a, 3, f);
							break;
						default:
							vk(b)
					}
					if (100 < ++c) return D(tl, "Reached max number of fields while parsing image info"), !1
				}
				return !0
			} catch (g) {
				return D(tl, "Failed to parse image info: " + g), !1
			}
		};
	var ul = function (a, b) {
			var c = Te(b);
			c && Ek(a, 1, c);
			c = G(b, 2);
			null != c && null != c && Dk(a, 2, c);
			c = G(b, 3);
			null != c && null != c && Dk(a, 3, c)
		},
		vl = function (a, b) {
			var c = G(b, 1);
			c && Ek(a, 1, c);
			if (c = I(b, Re, 2)) a.l.push(Ak(a, 2)), ul(a, c), Bk(a, a.l.pop());
			if (c = Se(b)) a.l.push(Ak(a, 3)), ul(a, c), Bk(a, a.l.pop())
		},
		wl = function (a, b) {
			var c = G(b, 1);
			c && Ek(a, 1, c);
			c = G(b, 2);
			null != c && null != c && Dk(a, 2, c);
			c = G(b, 3);
			null != c && null != c && Dk(a, 3, c)
		},
		xl = function (a, b) {
			var c = G(b, 1);
			c && Ek(a, 1, c);
			(c = b.getTitle()) && Ek(a, 2, c);
			if (c = G(b, 3))
				for (var d = 0; d < c.length; ++d) Ek(a,
					3, c[d]);
			(c = G(b, 4)) && Ek(a, 4, c);
			(c = G(b, 5)) && Ek(a, 5, c);
			(c = G(b, 6)) && Ek(a, 6, c)
		},
		yl = function (a, b) {
			var c = b.getTitle();
			c && Ek(a, 1, c);
			(c = G(b, 2)) && Ek(a, 2, c);
			(c = G(b, 3)) && Ek(a, 3, c);
			(c = G(b, 4)) && Ek(a, 4, c);
			(c = G(b, 5)) && Ek(a, 5, c);
			c = G(b, 6);
			null != c && c && null != c && (rk(a.g, 48), a.g.g.push(c ? 1 : 0));
			(c = G(b, 7)) && null != c && (rk(a.g, 56), sk(a.g, c))
		};
	var zl = function (a, b, c) {
			this.name = a;
			p(b) && (this.id = b);
			this.A = !p(c) || c
		},
		Al = {},
		Bl = function (a) {
			a = a.g();
			0 == --Al[a] && delete Al[a]
		};
	zl.prototype.execute = function () {
		return Hi(Ok().then(function (a) {
			a = "crx." + a;
			return this.id && this.A ? al(this.id, "stars.version", a).then(Xa(a)) : a
		}, void 0, this).then(function (a) {
			var b = this.g();
			b in Al ? ++Al[b] : Al[b] = 1;
			return this.h(a)
		}, void 0, this), oa(Bl, this))
	};
	zl.prototype.g = function () {
		return Fe(this)
	};
	var Cl = function (a, b, c, d, e) {
		zl.call(this, "create", void 0, !1);
		this.title = a;
		this.parentId = b;
		p(c) && (this.index = c);
		p(d) && (this.url = d);
		this.Ha = e || {}
	};
	v(Cl, zl);
	Cl.prototype.g = function () {
		return Fe(new Cl(this.title, this.parentId, void 0, this.url, void 0))
	};
	Cl.prototype.h = function (a) {
		var b = {
			title: this.title,
			parentId: this.parentId
		};
		p(this.index) && (b.index = this.index);
		p(this.url) && (b.url = this.url);
		var c = mb(this.Ha);
		p(a) && (c["stars.version"] = a);
		return cl(b, c)
	};
	var Dl = function (a, b, c) {
		zl.call(this, "move", a);
		null != b && (this.parentId = b);
		null != c && (this.index = c)
	};
	v(Dl, zl);
	Dl.prototype.h = function () {
		var a = {};
		null != this.parentId && (a.parentId = this.parentId);
		null != this.index && (a.index = this.index);
		return bl(this.id, a)
	};
	var El = function (a) {
			this.h = a || n;
			this.g = []
		},
		Fl = C("image.collections.extension.PromiseQueue"),
		Hl = function (a, b) {
			a.g.push(b);
			1 == a.g.length && Gl(a)
		},
		Gl = function (a) {
			Hi(Ii(a.g[0].call(a.h), function (a) {
				D(Fl, a.toString())
			}), function () {
				this.g.shift();
				0 < this.g.length && Gl(this)
			}, a)
		};
	var Il = function (a) {
		zl.call(this, "remove", a, !1)
	};
	v(Il, zl);
	Il.prototype.h = function () {
		return dl(this.id)
	};
	var Jl = function (a) {
		zl.call(this, "removeTree", a, !1)
	};
	v(Jl, zl);
	Jl.prototype.h = function () {
		return el(this.id)
	};
	var Kl = C("image.collections.extension.Serialization"),
		Ll = function (a) {
			try {
				return 0 == a.lastIndexOf(")]}',", 0) && (a = a.substring(5)), De(a)
			} catch (b) {
				return null
			}
		},
		Ml = function (a, b) {
			var c = new zk;
			b(c, a);
			c = String.fromCharCode.apply(null, Ck(c));
			return window.btoa(c)
		},
		Nl = function (a) {
			try {
				a = window.atob(a)
			} catch (d) {
				return null
			}
			for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
			return new tk(b)
		},
		Ol = function (a) {
			if (!a) return null;
			a = Nl(a);
			if (!a) return D(Kl, "Image data is not base64-encoded"),
				null;
			var b = new Qe,
				c;
			a: try {
				for (var d = 0; uk(a);) {
					switch (a.h) {
						case 1:
							var e = yk(a);
							H(b, 1, e);
							break;
						case 2:
							var f = new Re;
							xk(a, f);
							J(b, 2, f);
							break;
						case 3:
							var g = new Re;
							xk(a, g);
							J(b, 3, g);
							break;
						default:
							vk(a)
					}
					if (100 < ++d) {
						D(tl, "Reached max number of fields while parsing image data");
						c = !1;
						break a
					}
				}
				c = !0
			} catch (h) {
				D(tl, "Failed to parse image data: " + h), c = !1
			}
			return c ? new ng(b) : (D(Kl, "Cannot parse image data"), null)
		},
		Pl = function (a) {
			if (!a) return null;
			a = Nl(a);
			if (!a) return D(Kl, "Page data is not base64-encoded"), null;
			var b =
				new Ve,
				c;
			a: try {
				for (var d = 0; uk(a);) {
					switch (a.h) {
						case 1:
							b.setTitle(yk(a));
							break;
						case 2:
							var e = yk(a);
							H(b, 2, e);
							break;
						case 3:
							var f = yk(a);
							H(b, 3, f);
							break;
						case 4:
							var g = yk(a);
							H(b, 4, g);
							break;
						case 5:
							var h = yk(a);
							H(b, 5, h);
							break;
						case 6:
							var l = !!a.g.A();
							H(b, 6, l);
							break;
						case 7:
							var m = a.g;
							b: {
								for (var r = m, t = void 0, B = 0, L = 0, ma = 0; 4 > ma; ma++)
									if (t = r.h[r.g++], B |= (t & 127) << 7 * ma, 128 > t) {
										r.C = B >>> 0;
										r.B = 0;
										break b
									}
								t = r.h[r.g++];B |= (t & 127) << 28;L |= (t & 127) >> 4;
								if (128 > t) r.C = B >>> 0,
								r.B = L >>> 0;
								else {
									for (ma = 0; 5 > ma; ma++)
										if (t = r.h[r.g++], L |= (t & 127) <<
											7 * ma + 3, 128 > t) {
											r.C = B >>> 0;
											r.B = L >>> 0;
											break b
										}
									r.G = !0
								}
							}
							var Aa = m.C,
								ja = m.B;
							if (r = ja & 2147483648) Aa = ~Aa + 1 >>> 0, ja = ~ja >>> 0, 0 == Aa && (ja = ja + 1 >>> 0);
							t = 4294967296 * ja + Aa;
							H(b, 7, r ? -t : t);
							break;
						default:
							vk(a)
					}
					if (100 < ++d) {
						D(tl, "Reached max number of fields while parsing page data");
						c = !1;
						break a
					}
				}
				c = !0
			} catch (Ee) {
				D(tl, "Failed to parse page data: " + Ee), c = !1
			}
			return c ? new jf(b) : (D(Kl, "Cannot parse page data"), null)
		},
		Ql = function (a) {
			if (!a) return null;
			a = Nl(a);
			if (!a) return D(Kl, "Entity data is not base64-encoded"), null;
			var b = new Pe,
				c;
			a: try {
				for (var d = 0; uk(a);) {
					switch (a.h) {
						case 1:
							var e = yk(a);
							H(b, 1, e);
							break;
						case 2:
							b.setTitle(yk(a));
							break;
						case 3:
							if (G(b, 3)) G(b, 3).push(yk(a));
							else {
								var f = [yk(a)];
								H(b, 3, f || [])
							}
							break;
						case 4:
							var g = yk(a);
							H(b, 4, g);
							break;
						case 5:
							var h = yk(a);
							H(b, 5, h);
							break;
						case 6:
							var l = yk(a);
							H(b, 6, l);
							break;
						default:
							vk(a)
					}
					if (100 < ++d) {
						D(tl, "Reached max number of fields while parsing entity data");
						c = !1;
						break a
					}
				}
				c = !0
			} catch (m) {
				D(tl, "Failed to parse entity data: " + m), c = !1
			}
			return c ? new hg(b) : (D(Kl, "Cannot parse entity data"), null)
		},
		Rl = function (a) {
			if (!a) return null;
			a = Nl(a);
			if (!a) return D(Kl, "Video data is not base64-encoded"), null;
			var b = new Xe,
				c;
			a: try {
				for (var d = 0; uk(a);) {
					switch (a.h) {
						case 1:
							var e = yk(a);
							H(b, 1, e);
							break;
						case 2:
							var f = a.g.v();
							H(b, 2, f);
							break;
						case 3:
							var g = a.g.v();
							H(b, 3, g);
							break;
						default:
							vk(a)
					}
					if (100 < ++d) {
						D(tl, "Reached max number of fields while parsing video data");
						c = !1;
						break a
					}
				}
				c = !0
			} catch (h) {
				D(tl, "Failed to parse video data: " + h), c = !1
			}
			return c ? new sg(b) : (D(Kl, "Cannot parse video data"), null)
		};
	var Sl = function (a, b, c) {
		zl.call(this, "setMetaInfo", a);
		this.l = b;
		this.value = c
	};
	v(Sl, zl);
	Sl.prototype.h = function () {
		return al(this.id, this.l, this.value)
	};
	var Tl = function (a, b, c) {
		zl.call(this, "update", a);
		null != b && (this.l = b);
		null != c && (this.o = c)
	};
	v(Tl, zl);
	Tl.prototype.h = function () {
		var a = {};
		null != this.l && (a.title = this.l);
		null != this.o && (a.url = this.o);
		return fl(this.id, a)
	};
	var Ul = function (a) {
		Kk.call(this);
		this.D = a;
		this.V = {};
		this.X = {};
		this.U = {};
		this.g = new El(this);
		this.o = new Jk(this);
		y(this, this.o)
	};
	v(Ul, Kk);
	var Z = C("image.collections.extension.IoController"),
		Vl = ["f_bookmarks_bar", "f_other_bookmarks", "f_mobile_bookmarks", "f_managed_bookmarks"];
	Ul.prototype.h = function (a) {
		Ul.O.h.call(this, a);
		he(this.l.listen(this.D, "TRANSACTION_COMMIT", this.v), a, "load_all", this.A);
		this.o.listen(chrome.bookmarks.onCreated, this.C).listen(chrome.bookmarks.onRemoved, this.T).listen(chrome.bookmarks.onChanged, this.B).listen(chrome.bookmarks.onMoved, this.H)//.listen(chrome.bookmarkManagerPrivate.onMetaInfoChanged, this.G)
	};
	Ul.prototype.A = function (a) {
		Hl(this.g, function () {
			return Sk().then(function (b) {
				var c = Wl(b);
				this.dispatchEvent(new A("log", c.toString(), "number_of_nodes"));
				return ml().then(function (d) {
					var e = !1;
					null !== d && "had-full-extension" in d || (e = a.g && c > a.g);
					e ? (F(Z, "Folios only mode is on"), this.D.Hb = !0) : nl();
					var f = Ef();
					return Xl(this, b, f, e).then(function () {
						F(Z, "User data loaded");
						Ff(f, this.D);
						this.dispatchEvent("all_loaded")
					}, void 0, this)
				}, void 0, this)
			}, void 0, this)
		})
	};
	var Xl = function (a, b, c, d) {
			return Ci(Ja(b, function (a) {
				return Yl(this, a, c, d)
			}, a))
		},
		Yl = function (a, b, c, d) {
			var e = Zl(a, b, c, d);
			if (b.url) return a.X[b.id] = e, d || e.then(function (a) {
				this.X[b.id] = W(a)
			}, function (a) {
				this.X[b.id] = zi(a)
			}, a), Ii(e, function (a) {
				E(Z, "Node " + b.id + " not loaded, reason: " + a.toString())
			});
			a.U[b.id] = e;
			e.then(function (a) {
				this.U[b.id] = W(a)
			}, function (a) {
				this.U[b.id] = zi(a)
			}, a);
			var f = b.children;
			return e.then(function () {
				return Ii(Xl(this, f, c, d).then(function () {
						return $l(this, f, c, d)
					}, void 0, this),
					function (a) {
						E(Z, "Failed to reorder children of node " + b.id + ": " + a.toString())
					})
			}, function (a) {
				E(Z, "Failed to load folder node " + b.id + ": " + a.toString());
				return Xl(this, f, c, d)
			}, a)
		},
		Wl = function (a) {
			var b = 0;
			Fk(a, function (a) {
				a.children && (b += a.children.length)
			});
			return b
		},
		bm = function (a) {
			a.D.Hb = !0;
			Tk().then(function (a) {
				var c = Ef();
				0 < a.length && am(this, a[0], c, void 0).then(function () {
					this.dispatchEvent("folio-server-ids-loaded")
				}, void 0, this);
				this.dispatchEvent("folios_loaded")
			}, void 0, a)
		},
		am = function (a, b, c, d) {
			if ("0" ==
				b.parentId && 2 == b.index) return W();
			var e = [];
			if ("0" != b.id && ("0" != b.parentId || 1 != b.index)) {
				F(Z, "Node " + b.id + ": " + b.title);
				b.Ha = {};
				var f = cm(a, b);
				d && dg(d, f, c);
				if (!Yg(a.D, f, c)) return F(Z, "Cannot add folio " + f.getTitle() + " to the user model"), zi("Failed to load folio");
				a.V[f.w()] = W(b.id);
				a.U[b.id] = W(f);
				e.push(Zk(b.id).then(function (a) {
					f.F.qa(a)
				}, $a))
			}
			if (b = b.children) {
				d = b.length;
				for (var g = 0; g < d; g++) e.push(am(a, b[g], c, f))
			}
			return Ci(e)
		},
		$l = function (a, b, c, d) {
			return Ka(b, function (a, b) {
				return a.then(function (a) {
					var e =
						Mf(a, Qf()),
						l;
					if (b.url) {
						if (d) return e;
						l = this.X[b.id]
					} else l = this.U[b.id];
					return l.then(function (b) {
						dm(b, a, c);
						return e
					}, void 0, this)
				}, void 0, this)
			}, W("" + Qf()), a)
		},
		gm = function (a, b, c, d) {
			return Ii(em(a, b.id).then(function (a) {
				var b = Zg(this.D, fm(a));
				if (b) {
					var b = Sa(b.g),
						g = Ga(b, a);
					if (1 != b.length && c != g) {
						var h;
						c < g ? (g = b[c - 1], h = b[c]) : (g = b[c], h = b[c + 1]);
						var b = g,
							g = h,
							l = fm(a);
						h = a.P(l);
						var m = h.substring(h.length - (sa() ? 1 : 28)),
							r = b && b.P(l),
							l = g && g.P(l);
						if (b && !r || g && !l) throw "Sibling doesn't have a valid position to use.";
						b = r && l ? r < h && h < l ? h : Pf(r, l, m) + m : l ? h && h < l ? h : Of(l, m) + m : r ? r < h ? h : Mf(r, m) : h;
						dm(a, b, d)
					}
				}
			}, void 0, a), function () {
				return Vk(b.parentId).then(function (a) {
					return $l(this, a, d)
				}, void 0, this)
			}, a)
		},
		em = function (a, b) {
			return a.X[b] || a.U[b] || zi("Node promise is missing.")
		},
		fm = function (a) {
			return a instanceof Qg ? (a = a.va(), w(a[0])) : (a = a.W()) ? a.w() : ""
		},
		dm = function (a, b, c) {
			var d = fm(a);
			if (d && b != a.P(d) && !a.v(d, b, c)) throw "Cannot set position of item " + a.w() + " to " + b;
		},
		Zl = function (a, b, c, d) {
			if (d && b.url) return F(Z, "Node " + b.id + ": skipped: " +
				b.title), zi("skipped");
			F(Z, "Node " + b.id + ": " + b.title);
			return "0" == b.id ? zi("Root node is ignored") : "0" == b.parentId && 1 == b.index ? zi("Other Bookmarks node is ignored") : "0" == b.parentId && 2 == b.index ? zi("Mobile Bookmarks node is ignored") : b.url ? hm(a, b, c) : im(a, b, c)
		},
		hm = function (a, b, c) {
			var d = jm(a, b);
			return km(a, d, b, c).then(function () {
				if (!$g(this.D, d, c)) throw "Cannot add clip " + d.getTitle() + " to the user model";
				this.V[d.w()] = W(b.id);
				return d
			}, void 0, a)
		},
		im = function (a, b, c) {
			var d = cm(a, b);
			return ("0" == b.parentId ?
				W(d) : lm(a, d, b, c)).then(function () {
				if (!Yg(this.D, d, c)) throw "Cannot add folio " + d.getTitle() + " to the user model";
				this.V[d.w()] = W(b.id);
				return d
			}, void 0, a)
		},
		km = function (a, b, c, d) {
			return (a.U[c.parentId] || zi()).then(function (a) {
				ag(a, b, d)
			}, function () {
				Sg(b, d)
			})
		},
		lm = function (a, b, c, d) {
			return (a.U[c.parentId] || zi()).then(function (a) {
				dg(a, b, d)
			}, function () {
				var a = N(d);
				b.W() && eg(b.W(), b, a);
				O(b, a, d)
			})
		},
		jm = function (a, b) {
			var c = b.Ha;
			zf.$();
			var d = Rg(Af[4] + b.id, a.D.w());
			H(d.F, 7, b.dateAdded);
			d.F.Qa(b.dateAdded);
			H(d.F,
				21, "managed" == b.unmodifiable);
			c["stars.id"] && d.qa(c["stars.id"]);
			Xg(d, +c["stars.type"] || 2);
			"stars.note" in c && Wg(d, w(c["stars.note"]));
			var e = Ol(c["stars.imageData"]);
			e && (d.h = e, J(d.F, 5, e.g), Kf(d));
			(e = Pl(c["stars.pageData"])) || (e = new jf);
			e.setTitle(b.title);
			lf(e, b.url);
			d.l = e;
			J(d.F, 6, e.g);
			if (e = Ql(c["stars.entityData"])) d.o = e, J(d.F, 9, e.g);
			if (c = Rl(c["stars.videoData"])) d.A = c, J(d.F, 10, c.g);
			return d
		},
		cm = function (a, b) {
			var c = b.Ha,
				d;
			zf.$();
			d = Af[5] + b.id;
			d = Uf(a.D.w(), d, b.title);
			"0" == b.parentId ? d.qa(Vl[b.index]) :
				c["stars.id"] && d.qa(c["stars.id"]);
			H(d.F, 7, b.dateAdded);
			d.F.Qa(b.dateGroupModified);
			H(d.F, 10, "0" == b.parentId || "managed" == b.unmodifiable);
			"stars.description" in c && gg(d, w(c["stars.description"]));
			return d
		};
	Ul.prototype.v = function (a) {
		if (0 == a.g || 2 == a.g || 4 == a.g) a = mm(this, a.o), Ha(a, function (a) {
			switch (a.type) {
				case "clip_added":
					nm(this, a);
					break;
				case "clip_changed":
					switch (a.g) {
						case 202:
							om(this, a);
							break;
						case 206:
							pm(this, a);
							break;
						case 203:
							qm(this, a);
							break;
						case 207:
							rm(this, a);
							break;
						case 208:
							sm(this, a);
							break;
						case 204:
							tm(this, a);
							break;
						case 209:
							um(this, a);
							break;
						case 301:
							vm(this, a);
							break;
						case 302:
							wm(this, a);
							break;
						case 304:
							xm(this, a);
							break;
						default:
							E(Z, "Unexpected clip change type: " + a.g)
					}
					break;
				case "clip_removed":
					ym(this,
						a);
					break;
				case "folio_added":
					zm(this, a);
					break;
				case "folio_changed":
					switch (a.g) {
						case 102:
							Am(this, a);
							break;
						case 103:
							Bm(this, a);
							break;
						case 109:
							Cm(this, a);
							break;
						case 111:
							Dm(this, a);
							break;
						case 107:
							break;
						default:
							E(Z, "Unexpected folio change type: " + a.g)
					}
					break;
				case "folio_removed":
					Em(this, a);
					break;
				default:
					D(Z, "Unexpected data event type: " + a.type)
			}
		}, this)
	};
	var mm = function (a, b) {
			var c = [],
				d = {};
			Ha(b, function (a) {
				var b = a.ta();
				b && (d[b] = Math.max(Fm(a), d[b] || 0))
			}, a);
			Ha(b, function (a) {
				var b = a.ta(),
					g = Fm(a);
				0 < g && g < d[b] || c.push(a)
			}, a);
			return c
		},
		Fm = function (a) {
			switch (a.type) {
				case "clip_added":
				case "clip_removed":
				case "folio_added":
				case "folio_removed":
					return 3
			}
			switch (a.g) {
				case 301:
				case 302:
				case 109:
					return 2;
				case 304:
				case 111:
					return 1
			}
			return 0
		},
		Gm = function (a, b, c) {
			Hl(a.g, function () {
				return this.V[b] ? this.V[b].then(c, void 0, this) : zi("Trying to perform action on non-existing node.")
			})
		},
		nm = function (a, b) {
			var c = b.clip;
			Hl(a.g, function () {
				var a, b = c.va();
				1 == b.length ? (b = b[0], b in this.V ? a = this.V[b] : D(Z, "Clip " + c.w() + " has invalid parent: " + b)) : 1 < b.length && D(Z, "Clip " + c.w() + " is in " + b.length + " folios");
				a || (a = Yk());
				var f;
				a = a.then(function (a) {
					f = a;
					return em(this, f)
				}, void 0, this).then(function (a) {
					return a
				}, function () {
					return null
				}, this).then(function (a) {
					var b = {
						"stars.id": c.la(),
						"stars.type": G(c.F, 4).toString(),
						"stars.note": w(G(c.F, 2)),
						"stars.flags": $e(c.F).toString()
					};
					if (Ng(c)) {
						var d = Ng(c),
							d = Ml(d.g, vl);
						b["stars.imageData"] = d
					}
					S(c) && (d = S(c), d = Ne(d.g), H(d, 1, void 0), H(d, 3, void 0), b["stars.pageData"] = Ml(d, yl));
					Og(c) && (d = Og(c), d = Ml(d.g, xl), b["stars.entityData"] = d);
					Pg(c) && (d = Pg(c), d = Ml(d.g, wl), b["stars.videoData"] = d);
					var e;
					a && (e = c.P(a.w()), e = Hm(e, a));
					a = c.getTitle();
					d = qf(c);
					return (new Cl(a, f, e, d, b)).execute()
				}, void 0, this).then(function (a) {
					this.X[a.id] = W(c);
					return a.id
				}, void 0, this);
				this.V[c.w()] = a;
				a.then(function (a) {
					this.V[c.w()] = W(a)
				}, function (a) {
					this.V[c.w()] = zi(a)
				}, this);
				return a
			})
		},
		ym =
		function (a, b) {
			var c = b.clip.w();
			Gm(a, c, function (a) {
				return (new Il(a)).execute().then(function () {
					delete this.V[c];
					delete this.X[a];
					this.dispatchEvent("clipper_closed")
				}, void 0, this)
			})
		},
		om = function (a, b) {
			Gm(a, b.clip.w(), function (a) {
				return (new Sl(a, "stars.note", b.newValue)).execute()
			})
		},
		pm = function (a, b) {
			Gm(a, b.clip.w(), function (a) {
				return (new Sl(a, "stars.type", b.newValue)).execute()
			})
		},
		qm = function (a, b) {
			var c = qg(b.newValue);
			c ? Gm(a, b.clip.w(), function (a) {
				var b = Ml(c.g, vl);
				return (new Sl(a, "stars.imageData",
					b)).execute()
			}) : D(Z, "Error parsing new image data")
		},
		rm = function (a, b) {
			var c = tg(b.newValue);
			c ? Gm(a, b.clip.w(), function (a) {
				var b = Ml(c.g, wl);
				return (new Sl(a, "stars.videoData", b)).execute()
			}) : D(Z, "Error parsing new video data")
		},
		sm = function (a, b) {
			var c = ig(b.newValue);
			c ? Gm(a, b.clip.w(), function (a) {
				var b = Ml(c.g, xl);
				return (new Sl(a, "stars.entityData", b)).execute()
			}) : D(Z, "Error parsing new entity data")
		},
		tm = function (a, b) {
			var c = mf(b.oldValue);
			if (c) {
				var d = mf(b.newValue);
				d ? Gm(a, b.clip.w(), function (a) {
					var b = c.g,
						g = d.g,
						h = g.getTitle(),
						l = G(g, 3);
					if (h != b.getTitle() || l != G(b, 3)) return (new Tl(a, h, l)).execute();
					H(b, 1, void 0);
					H(b, 3, void 0);
					H(g, 1, void 0);
					H(g, 3, void 0);
					b = Ml(b, yl);
					g = Ml(g, yl);
					return g != b ? (new Sl(a, "stars.pageData", g)).execute() : W()
				}) : D(Z, "Error parsing new page data")
			} else D(Z, "Error parsing old page data")
		},
		vm = function (a, b) {
			var c = b.clip,
				d = jg(b.newValue),
				e = w(I(d.g, Ue, 1).w()),
				f = Zg(a.D, e),
				g;
			a.D.Hb || (g = Hm(d.P(), f));
			Gm(a, c.w(), function (a) {
				return this.V[e].then(function (b) {
						return (new Dl(a, b, g)).execute()
					},
					void 0, this)
			})
		},
		wm = function (a, b) {
			jg(b.oldValue);
			Gm(a, b.clip.w(), function (a) {
				return Yk().then(function (b) {
					return (new Dl(a, b, void 0)).execute()
				}, void 0, this)
			})
		},
		Im = function (a, b, c, d) {
			return Uk(b).then(function (a) {
				a = a[0];
				var f = Hm(c, d);
				if (f != a.index) return f > a.index && ++f, (new Dl(b, void 0, f)).execute()
			}, void 0, a)
		},
		Hm = function (a, b) {
			var c = b.w(),
				d = Sa(b.g);
			return "" == a ? d.length : La(d, function (b) {
				return b.P(c) < a
			})
		},
		xm = function (a, b) {
			if (b.newValue) {
				var c = b.clip;
				Gm(a, c.w(), function (a) {
					if (1 != c.mb()) throw "Clip " + c.w() +
						" is in " + c.mb() + " folios.";
					var e = c.va()[0],
						e = Zg(this.D, e);
					return Im(this, a, b.newValue, e)
				})
			}
		},
		um = function (a, b) {
			Gm(a, b.clip.w(), function (a) {
				return (new Sl(a, "stars.flags", b.newValue)).execute()
			})
		},
		zm = function (a, b) {
			var c = b.R;
			Hl(a.g, function () {
				var a, b = c.W();
				if (b) {
					var f = b.w();
					f in this.V ? a = this.V[f] : D(Z, "Folio " + c.w() + " has invalid parent: " + f)
				}
				a || (a = Yk());
				a = a.then(function (a) {
					var d = {
							"stars.id": "",
							"stars.description": w(G(c.F, 3))
						},
						l;
					b && (l = c.P(f), l = Hm(l, b));
					var m = c.getTitle();
					return (new Cl(m, a, l, void 0,
						d)).execute()
				}, void 0, this).then(function (a) {
					this.U[a.id] = W(c);
					return a.id
				}, void 0, this);
				this.V[c.w()] = a;
				a.then(function (a) {
					this.V[c.w()] = W(a)
				}, function (a) {
					this.V[c.w()] = zi(a)
				}, this);
				return a
			})
		},
		Em = function (a, b) {
			var c = b.R.w();
			Gm(a, c, function (a) {
				return (new Jl(a)).execute().then(function () {
					delete this.V[c];
					delete this.U[a]
				}, void 0, this)
			})
		},
		Am = function (a, b) {
			Gm(a, b.R.w(), function (a) {
				return (new Tl(a, b.newValue, void 0)).execute()
			})
		},
		Bm = function (a, b) {
			Gm(a, b.R.w(), function (a) {
				return (new Sl(a, "stars.description",
					b.newValue)).execute()
			})
		},
		Cm = function (a, b) {
			Gm(a, b.R.w(), function (a) {
				var d;
				(d = Ll(b.newValue)) ? (d = new Ue(d), d = w(d.w()), d = this.V[d]) : d = Yk();
				return d.then(function (b) {
					return (new Dl(a, b, void 0)).execute()
				}, void 0, this)
			})
		},
		Dm = function (a, b) {
			if (b.newValue) {
				var c = b.R,
					d = Ll(b.parentId),
					d = w((new Ue(d)).w()),
					e = Zg(a.D, d);
				Gm(a, c.w(), function (a) {
					return Im(this, a, b.newValue, e)
				})
			}
		};
	Ul.prototype.C = function (a, b) {
		if (!((new Cl(b.title, b.parentId, b.index, b.url, void 0)).g() in Al)) {
			var c = Ef(),
				d = $k(a).then(function (a) {
					b.Ha = a;
					return Zl(this, b, c)
				}, void 0, this);
			b.url ? (this.X[a] = d, d.then(function (b) {
				this.X[a] = W(b)
			}, function (b) {
				this.X[a] = zi(b)
			}, this)) : (this.U[a] = d, d.then(function (b) {
				this.U[a] = W(b)
			}, function (b) {
				this.U[a] = zi(b)
			}, this));
			d.then(function () {
				if (p(b.index)) return Hi(gm(this, b, b.index, c), function () {
					Ff(c, this.D)
				}, this)
			}, function (a) {
				E(Z, a.toString())
			}, this)
		}
	};
	Ul.prototype.T = function (a) {
		if (!((new Il(a)).g() in Al || (new Jl(a)).g() in Al)) {
			var b = Ef();
			a in this.X ? this.X[a].then(function (c) {
				delete this.V[c.w()];
				delete this.X[a];
				this.D.pa(c, b);
				Ff(b, this.D)
			}, void 0, this) : a in this.U ? this.U[a].then(function (c) {
				delete this.V[c.w()];
				delete this.U[a];
				gh(this.D, c, !0, b);
				Ff(b, this.D)
			}, void 0, this) : D(Z, "Removed node " + a + " has no corresponding clip or folio promise")
		}
	};
	Ul.prototype.B = function (a, b) {
		if (!((new Tl(a, b.title, b.url)).g() in Al)) {
			var c = Ef();
			a in this.X ? this.X[a].then(function (a) {
				null != b.title && a.setTitle(b.title, c);
				null != b.url && Ug(a, b.url, c);
				Ff(c, this.D)
			}, void 0, this) : a in this.U ? this.U[a].then(function (a) {
				null != b.title && a.setTitle(b.title, c);
				Ff(c, this.D)
			}, void 0, this) : D(Z, "Changed node " + a + " has no corresponding clip or folio promise")
		}
	};
	Ul.prototype.H = function (a, b) {
		var c;
		b.parentId != b.ic ? c = new Dl(a, b.parentId, void 0) : b.index != b.Ug && (c = new Dl(a, void 0, b.index));
		c && c.g() in Al || (a in this.X ? Jm(this, a, b) : a in this.U ? Km(this, a, b) : D(Z, "Moved node " + a + " has no corresponding clip or folio promise"))
	};
	var Jm = function (a, b, c) {
			var d = {
					id: b,
					parentId: c.parentId
				},
				e = Ef();
			Hi(a.X[b].then(function (a) {
				return c.parentId == c.ic ? a : km(this, a, d, e).then(Xa(a))
			}, void 0, a).then(function (a) {
				if (0 < a.mb() && p(c.index)) return gm(this, d, c.index, e)
			}, void 0, a), function () {
				Ff(e, this.D)
			}, a)
		},
		Km = function (a, b, c) {
			var d = {
					id: b,
					parentId: c.parentId
				},
				e = Ef();
			Hi(a.U[b].then(function (a) {
				return c.parentId == c.ic ? a : lm(this, a, d, e).then(Xa(a))
			}, void 0, a).then(function (a) {
				if (a.W() && p(c.index)) return gm(this, d, c.index, e)
			}, void 0, a), function () {
				Ff(e,
					this.D)
			}, a)
		};
	Ul.prototype.G = function (a, b) {
		if (1 == hb(b)) {
			var c = w(ib(b));
			if ((new Sl(a, c, b[c])).g() in Al) return
		}
		a in this.X ? this.X[a].then(function (a) {
			var c = Ef(),
				f;
			for (f in b) {
				var g = b[f];
				switch (f) {
					case "stars.id":
						a.qa(g);
						break;
					case "stars.type":
						Xg(a, Ea(g) || 2, c);
						break;
					case "stars.note":
						Wg(a, g, c);
						break;
					case "stars.imageData":
						var h = Ol(g);
						h ? Tg(a, h, c) : D(Z, "Error decoding image data");
						break;
					case "stars.pageData":
						(h = Pl(g)) ? (lf(h, kf(S(a))), h.setTitle(S(a).getTitle()), Vg(a, h, c)) : D(Z, "Error decoding page data");
						break;
					case "stars.entityData":
						if (g =
							Ql(g)) {
							var h = a,
								l = g,
								g = c,
								m = N(g),
								r = h.o && h.o.J(),
								t = l.J();
							r != t && (h.o = l, J(h.F, 9, l.g), Kf(h), l = xe(h, 208, r || "", t, m), K(m, l, h), O(h, m, g))
						} else D(Z, "Error decoding entity data");
						break;
					case "stars.videoData":
						(g = Rl(g)) ? (h = a, l = g, g = c, m = N(g), r = h.A && h.A.J(), t = l.J(), r != t && (h.A = l, J(h.F, 10, l.g), Kf(h), l = xe(h, 207, r || "", t, m), K(m, l, h), O(h, m, g))) : D(Z, "Error decoding video data");
						break;
					case "stars.flags":
						h = a;
						l = +g || 0;
						g = c;
						m = N(g);
						r = $e(h.F);
						r != l && (H(h.F, 11, l), Kf(h), l = xe(h, 209, "" + r, "" + l, m), K(m, l, h), O(h, m, g));
						break;
					case "stars.version":
					case "stars.oldId":
					case "stars.touch":
						break;
					default:
						E(Z, "Unexpected meta info: " + f)
				}
			}
			Ff(c, this.D)
		}, void 0, this) : a in this.U ? this.U[a].then(function (a) {
			var c = Ef(),
				f;
			for (f in b) {
				var g = b[f];
				switch (f) {
					case "stars.id":
						a.qa(g);
						break;
					case "stars.description":
						gg(a, g, c);
						break;
					case "stars.version":
					case "stars.oldId":
						break;
					default:
						E(Z, "Unexpected meta info: " + f)
				}
			}
			Ff(c, this.D)
		}, void 0, this) : D(Z, "Node " + a + " with changed meta info has no corresponding clip or folio promise")
	};
	var Mm = function (a) {
			this.Xa = a || Lm
		},
		Lm = function (a, b) {
			return String(a) < String(b) ? -1 : String(a) > String(b) ? 1 : 0
		};
	k = Mm.prototype;
	k.ha = null;
	k.Xa = null;
	k.xa = null;
	k.wa = null;
	k.nb = function (a) {
		if (null == this.ha) return this.wa = this.xa = this.ha = new Nm(a), !0;
		var b = null;
		Om(this, function (c) {
			var d = null,
				e = this.Xa(c.value, a);
			0 < e ? (d = c.left, null == c.left && (b = new Nm(a, c), c.left = b, c == this.xa && (this.xa = b))) : 0 > e && (d = c.right, null == c.right && (b = new Nm(a, c), c.right = b, c == this.wa && (this.wa = b)));
			return d
		});
		b && (Om(this, function (a) {
			a.g++;
			return a.parent
		}, b.parent), Pm(this, b.parent));
		return !!b
	};
	k.remove = function (a) {
		var b = null;
		Om(this, function (c) {
			var d = null,
				e = this.Xa(c.value, a);
			0 < e ? d = c.left : 0 > e ? d = c.right : (b = c.value, Qm(this, c));
			return d
		});
		return b
	};
	k.clear = function () {
		this.wa = this.xa = this.ha = null
	};
	k.contains = function (a) {
		var b = !1;
		Om(this, function (c) {
			var d = null,
				e = this.Xa(c.value, a);
			0 < e ? d = c.left : 0 > e ? d = c.right : b = !0;
			return d
		});
		return b
	};
	k.Ga = function () {
		return this.ha ? this.ha.g : 0
	};
	k.fa = function () {
		var a = [];
		Rm(this, function (b) {
			a.push(b)
		});
		return a
	};
	var Rm = function (a, b, c) {
			if (a.ha) {
				var d;
				if (c) {
					if (Om(a, function (a) {
							var b = null,
								e = this.Xa(a.value, c);
							0 < e ? (b = a.left, d = a) : 0 > e ? b = a.right : d = a;
							return b
						}), !d) return
				} else d = Sm(a);
				a = d;
				for (var e = d.left ? d.left : d; null != a;)
					if (null != a.left && a.left != e && a.right != e) a = a.left;
					else {
						if (a.right != e && b(a.value)) break;
						var f = a;
						a = null != a.right && a.right != e ? a.right : a.parent;
						e = f
					}
			}
		},
		Om = function (a, b, c) {
			for (c = c ? c : a.ha; c && null != c;) c = b.call(a, c)
		},
		Pm = function (a, b) {
			Om(a, function (a) {
				var b = a.left ? a.left.height : 0,
					e = a.right ? a.right.height : 0;
				1 < b - e ? (a.left.right && (!a.left.left || a.left.left.height < a.left.right.height) && Tm(this, a.left), Um(this, a)) : 1 < e - b && (a.right.left && (!a.right.right || a.right.right.height < a.right.left.height) && Um(this, a.right), Tm(this, a));
				b = a.left ? a.left.height : 0;
				e = a.right ? a.right.height : 0;
				a.height = Math.max(b, e) + 1;
				return a.parent
			}, b)
		},
		Tm = function (a, b) {
			Vm(b) ? (b.parent.left = b.right, b.right.parent = b.parent) : Wm(b) ? (b.parent.right = b.right, b.right.parent = b.parent) : (a.ha = b.right, a.ha.parent = null);
			var c = b.right;
			b.right = b.right.left;
			null != b.right && (b.right.parent = b);
			c.left = b;
			b.parent = c;
			c.g = b.g;
			b.g -= (c.right ? c.right.g : 0) + 1
		},
		Um = function (a, b) {
			Vm(b) ? (b.parent.left = b.left, b.left.parent = b.parent) : Wm(b) ? (b.parent.right = b.left, b.left.parent = b.parent) : (a.ha = b.left, a.ha.parent = null);
			var c = b.left;
			b.left = b.left.right;
			null != b.left && (b.left.parent = b);
			c.right = b;
			b.parent = c;
			c.g = b.g;
			b.g -= (c.left ? c.left.g : 0) + 1
		},
		Qm = function (a, b) {
			if (null != b.left || null != b.right) {
				var c = null,
					d;
				if (null != b.left) {
					d = Xm(a, b.left);
					Om(a, function (a) {
							a.g--;
							return a.parent
						},
						d);
					if (d != b.left) {
						if (d.parent.right = d.left) d.left.parent = d.parent;
						d.left = b.left;
						d.left.parent = d;
						c = d.parent
					}
					d.parent = b.parent;
					d.right = b.right;
					d.right && (d.right.parent = d);
					b == a.wa && (a.wa = d)
				} else {
					d = Sm(a, b.right);
					Om(a, function (a) {
						a.g--;
						return a.parent
					}, d);
					if (d != b.right) {
						if (d.parent.left = d.right) d.right.parent = d.parent;
						d.right = b.right;
						d.right.parent = d;
						c = d.parent
					}
					d.parent = b.parent;
					d.left = b.left;
					d.left && (d.left.parent = d);
					b == a.xa && (a.xa = d)
				}
				d.g = b.g;
				Vm(b) ? b.parent.left = d : Wm(b) ? b.parent.right = d : a.ha = d;
				Pm(a, c ?
					c : d)
			} else Om(a, function (a) {
				a.g--;
				return a.parent
			}, b.parent), Vm(b) ? (b.parent.left = null, b == a.xa && (a.xa = b.parent), Pm(a, b.parent)) : Wm(b) ? (b.parent.right = null, b == a.wa && (a.wa = b.parent), Pm(a, b.parent)) : a.clear()
		},
		Sm = function (a, b) {
			if (!b) return a.xa;
			var c = b;
			Om(a, function (a) {
				var b = null;
				a.left && (b = c = a.left);
				return b
			}, b);
			return c
		},
		Xm = function (a, b) {
			if (!b) return a.wa;
			var c = b;
			Om(a, function (a) {
				var b = null;
				a.right && (b = c = a.right);
				return b
			}, b);
			return c
		},
		Nm = function (a, b) {
			this.value = a;
			this.parent = b ? b : null;
			this.g = 1
		};
	Nm.prototype.left = null;
	Nm.prototype.right = null;
	Nm.prototype.height = 1;
	var Wm = function (a) {
			return !!a.parent && a.parent.right == a
		},
		Vm = function (a) {
			return !!a.parent && a.parent.left == a
		};
	var Ym = function (a, b) {
			return a.id == b.id ? 0 : a.dateAdded < b.dateAdded ? -1 : a.dateAdded > b.dateAdded ? 1 : a.id < b.id ? -1 : 1
		},
		Zm = function (a) {
			this.D = a;
			this.g = {};
			this.h = new Mm(Ym);
			this.l = {
				Eb: void 0,
				parentId: void 0,
				Xd: 10,
				Vb: void 0,
				Kh: void 0
			};
			new Jk(this)
		};
	C("image.collections.extension.StarsServiceCrx");
	Zm.prototype.La = function (a) {
		var b = kk(a, this.l);
		return null.then(function () {
			return new V(function (a) {
				if (b.Eb) {
					for (var d = [], e = 0; e < b.Eb.length; e++) {
						var f = this.g[b.Eb[e]];
						d.push(f ? $m(f) : null)
					}
					a({
						Uc: d,
						Nd: !1
					})
				} else {
					var g = b.parentId,
						d = b.Xd,
						f = b.Vb;
					if (p(g))
						if (null === g) a: {
							e = [];g = f || {
								sb: !1,
								index: 0
							};
							if (!g.sb) {
								var h = this.g[""].node.children,
									f = an(this, h, g.index, d, e);
								if (f != h.length) {
									d = {
										sb: !1,
										index: f
									};
									d = bn(e, !0, d);
									break a
								}
							}
							h = this.g[""].node.children;f = an(this, h, g.sb ? g.index : 0, d - e.length, e);d = {
								sb: !0,
								index: f
							};d = bn(e,
								f != h.length, d)
						}
					else e = [], g = this.g[g].node.children, d = an(this, g, f || 0, d, e), d = bn(e, d != g.length, d);
					else d = cn(this, d, f);
					a(d)
				}
			}, this)
		}, void 0, this)
	};
	var cn = function (a, b, c) {
			var d = [],
				e = a.h;
			if (0 == e.Ga()) return bn(d, !1, void 0);
			var f;
			Rm(e, u(function (a) {
				if (a == c) return !1;
				f = a;
				d.push($m(this.g[a.id]));
				return d.length >= b
			}, a), c);
			return bn(d, f != Xm(e).value, f)
		},
		bn = function (a, b, c) {
			b = {
				Nd: b,
				Vb: c
			};
			b.Uc = a;
			return b
		},
		an = function (a, b, c, d, e) {
			for (var f = 0; c < b.length; c++)
				if (0 == !!b[c].url && "" != b[c].id) {
					if (f == d) return c;
					e.push($m(a.g[b[c].id]));
					f++
				}
			return b.length
		};
	Zm.prototype.update = function () {};
	Zm.prototype.remove = function (a, b) {
		for (var c = [], d = 0; d < a.length; d++) {
			if (!b && this.g[a[d]].node.children)
				for (var e = this.g[a[d]].node.children, f = 0; f < e.length; f++) c.push(bl(e[f].id, {
					parentId: ""
				}));
			c.push(el(a[d]))
		}
		return Ci(c).then(Za, Ya)
	};
	var $m = function (a) {
		if (!a.node.url) {
			var b = {};
			b.id = a.node.id;
			b.title = a.node.title;
			a.Jb["stars.description"] && (b.description = a.Jb["stars.description"]);
			"" != a.node.parentId && "" != a.node.parentId && (b.Zg = {
				parentId: a.node.parentId,
				position: a.position
			});
			a.Jb["stars.id"] && (b.hh = a.Jb["stars.id"]);
			b.tb = "" == a.node.parentId || !!a.node.unmodifiable;
			return b
		}
	};
	var dn = function () {
			this.g = pa()
		},
		en = new dn;
	dn.prototype.set = function (a) {
		this.g = a
	};
	dn.prototype.reset = function () {
		this.set(pa())
	};
	dn.prototype.get = function () {
		return this.g
	};
	var fn = function (a) {
		this.o = a || "";
		this.A = en
	};
	fn.prototype.g = !0;
	fn.prototype.h = !0;
	fn.prototype.l = !1;
	var gn = function (a) {
			return 10 > a ? "0" + a : String(a)
		},
		hn = function (a, b) {
			var c = (a.l - b) / 1E3,
				d = c.toFixed(3),
				e = 0;
			if (1 > c) e = 2;
			else
				for (; 100 > c;) e++, c *= 10;
			for (; 0 < e--;) d = " " + d;
			return d
		},
		jn = function (a) {
			fn.call(this, a)
		};
	v(jn, fn);
	var kn = function () {
		u(this.o, this);
		this.g = new jn;
		this.g.h = !1;
		this.g.l = !1;
		this.h = this.g.g = !1;
		this.l = "";
		this.A = {}
	};
	kn.prototype.o = function (a) {
		if (!this.A[a.h]) {
			var b;
			b = this.g;
			var c = [];
			c.push(b.o, " ");
			if (b.h) {
				var d = new Date(a.l);
				c.push("[", gn(d.getFullYear() - 2E3) + gn(d.getMonth() + 1) + gn(d.getDate()) + " " + gn(d.getHours()) + ":" + gn(d.getMinutes()) + ":" + gn(d.getSeconds()) + "." + gn(Math.floor(d.getMilliseconds() / 10)), "] ")
			}
			c.push("[", hn(a, b.A.get()), "s] ");
			c.push("[", a.h, "] ");
			c.push(a.getMessage());
			b.l && (d = a.g) && c.push("\n", d instanceof Error ? d.message : d.toString());
			b.g && c.push("\n");
			b = c.join("");
			if (c = ln) switch (a.o) {
				case xd:
					mn(c, "info", b);
					break;
				case yd:
					mn(c, "error", b);
					break;
				case zd:
					mn(c, "warn", b);
					break;
				default:
					mn(c, "debug", b)
			} else this.l += b
		}
	};
	var ln = n.console,
		mn = function (a, b, c) {
			if (a[b]) a[b](c);
			else a.log(c)
		};
	var nn = function () {
		M.call(this);
		var a = ra.$();
		a.l = "crx";
		qa(a);
		this.o = new ee(this);
		y(this, this.o);
		this.D = new bh;
		y(this, this.D);
		this.h = new Ul(this.D);
		y(this, this.h);
		this.A = new ie;
		y(this, this.A);
		new Zm(this.D);
		this.l = new pl(this.D);
		y(this, this.l);
		this.g = new jk(this.D);
		y(this, this.g)
	};
	v(nn, M);
	ba(nn);
	var on = new kn;
	0 != on.h && (Fd(), on.h = !1);
	var pn = C("image.collections.extension.Popup");
	k = nn.prototype;
	k.Nc = function () {
		window.close()
	};
	k.Hd = function () {
		var a = window;
		this.dispatchEvent(new A("log", "", "star"));
		this.dispatchEvent(new A("log", "", "clipper_shown"));
		var b = xg(a);
		ra.$().g && b.setProperties(b.g.body, {
			dir: "rtl"
		});
		var c = b.L("link", {
			rel: "stylesheet",
			type: "text/css",
			href: "clipper.css"
		});
		he(he(this.o, c, "load", this.yd), a, "unload", this.zd);
		b.Wc(b.g.head, c)
	};
	k.yd = function (a) {
		a = xg(a.target);
		ik(this.g);
		hk(this.g, a);
		il({
			active: !0,
			currentWindow: !0
		}).then(this.hc, void 0, this);
		Pk().then(function (a) {
			this.dispatchEvent(new A("log", a, "version"))
		}, void 0, this)
	};
	k.zd = function () {
		1 == chrome.extension.getViews({
			type: "popup"
		}).length && ik(this.g)
	};
	k.hc = function (a) {
		var b = a[0],
			c = b.url.match(ub)[1] || null,
			d = this.D.h.h[b.url] || null;
		if (d)
			for (var e = 0; e < d.length; ++e) {
				var f = d[e];
				if (!f.tb()) {
					d = new P("force_clipper_clip");
					d.clip = f;
					this.dispatchEvent(d);
					Oa(["http", "https"], c) && this.l.postMessage({
						type: "get_salient_images"
					});
					return
				}
			}
		gl({
			url: b.url
		}).then(function (c) {
			if (0 == c.length) qn(this, b);
			else {
				var d = c[0],
					e = Ef();
				$k(d.id).then(function (a) {
					d.Ha = a;
					return hm(this.h, d, e)
				}, void 0, this).then(function () {
						F(pn, "Node " + d.id + " loaded");
						Ff(e, this.D);
						this.hc(a)
					}, void 0,
					this)
			}
		}, void 0, this)
	};
	var qn = function (a, b) {
		var c = b.url.match(ub)[1] || null;
		a.dispatchEvent(new A("log", "", "bookmark_added"));
		a.dispatchEvent(new A("log", "", "clipper_bookmark_added"));
		var d = Cf(),
			e = a.D.w(),
			f = Rg(d, e);
		Xg(f, 2);
		f.F.qa(f.w());
		var g = new jf;
		lf(g, b.url);
		g.setTitle(b.title || "Untitled");
		f.l = g;
		J(f.F, 6, g.g);
		$g(a.D, f);
		Oa(["http", "https"], c) && a.l.postMessage({
			type: "collect_page",
			clipId: d,
			userId: e
		})
	};
	nn.prototype.v = function (a) {
		var b;
		a.value && (a = Zg(this.D, a.value)) && (b = a.la() || a.w());
		var c = b ? "/profile/folio/" + b : "";
		il({
			currentWindow: !0,
			url: "chrome://bookmarks/*"
		}).then(function (a) {
			for (var b = "chrome://bookmarks/#p=/me" + c, f = 0; f < a.length; f++)
				if (a[f].url == b || "" === c && "chrome://bookmarks/" == a[f].url) return kl(a[f].id);
			return ll({
				url: b
			})
		}, void 0, this)
	};
	(function () {
		var a = nn.$();
		F(pn, "Initializing popup");
		he(a.o, a.h, "folios_loaded", function () {
			this.dispatchEvent(new A("log", this.D.La().length.toString(), "clipper_open_folio_count"))
		});
		a.D.aa(a);
		a.h.h(a);
		bm(a.h);
		re(a.A, a);
		a.l.h(a);
		a.g.Gb(a);
		he(a.o, window, "load", a.Hd).listen(a, "clipper_closed", a.Nc).listen(a, "open_curation", a.v)
	})();

} catch (e) {
	_DumpException(e)
}
// Google Inc.