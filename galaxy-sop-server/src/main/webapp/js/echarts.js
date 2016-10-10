!
function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.echarts = e() : t.echarts = e()
}(this, function() {
	return function(t) {
		function e(n) {
			if (i[n]) return i[n].exports;
			var a = i[n] = {
				exports: {},
				id: n,
				loaded: !1
			};
			return t[n].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
		}
		var i = {};
		return e.m = t, e.c = i, e.p = "", e(0)
	}([function(t, e, i) {
		t.exports = i(2), i(85), i(79), i(90), i(163), i(279), i(268), i(289), i(246), i(242), i(238), i(275), i(284), i(224), i(229), i(235), i(264), i(257), i(34), i(176), i(196), i(304), i(301), i(211), i(187), i(166), i(317), i(182), i(181), i(308), i(188), i(204)
	}, function(t, e, i) {
		function n(t) {
			if ("object" == typeof t && null !== t) {
				var e = t;
				if (t instanceof Array) {
					e = [];
					for (var i = 0, a = t.length; a > i; i++) e[i] = n(t[i])
				} else if (!A(t) && !I(t)) {
					e = {};
					for (var o in t) t.hasOwnProperty(o) && (e[o] = n(t[o]))
				}
				return e
			}
			return t
		}
		function a(t, e, i) {
			if (!S(e) || !S(t)) return i ? n(e) : t;
			for (var o in e) if (e.hasOwnProperty(o)) {
				var r = t[o],
					s = e[o];
				!S(s) || !S(r) || w(s) || w(r) || I(s) || I(r) || A(s) || A(r) ? !i && o in t || (t[o] = n(e[o], !0)) : a(r, s, i)
			}
			return t
		}
		function o(t, e) {
			for (var i = t[0], n = 1, o = t.length; o > n; n++) i = a(i, t[n], e);
			return i
		}
		function r(t, e) {
			for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
			return t
		}
		function s(t, e, i) {
			for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
			return t
		}
		function l() {
			return document.createElement("canvas")
		}
		function h() {
			return D || (D = G.createCanvas().getContext("2d")), D
		}
		function u(t, e) {
			if (t) {
				if (t.indexOf) return t.indexOf(e);
				for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i
			}
			return -1
		}
		function c(t, e) {
			function i() {}
			var n = t.prototype;
			i.prototype = e.prototype, t.prototype = new i;
			for (var a in n) t.prototype[a] = n[a];
			t.prototype.constructor = t, t.superClass = e
		}
		function d(t, e, i) {
			t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, i)
		}
		function f(t) {
			return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
		}
		function p(t, e, i) {
			if (t && e) if (t.forEach && t.forEach === O) t.forEach(e, i);
			else if (t.length === +t.length) for (var n = 0, a = t.length; a > n; n++) e.call(i, t[n], n, t);
			else for (var o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t)
		}
		function g(t, e, i) {
			if (t && e) {
				if (t.map && t.map === N) return t.map(e, i);
				for (var n = [], a = 0, o = t.length; o > a; a++) n.push(e.call(i, t[a], a, t));
				return n
			}
		}
		function m(t, e, i, n) {
			if (t && e) {
				if (t.reduce && t.reduce === B) return t.reduce(e, i, n);
				for (var a = 0, o = t.length; o > a; a++) i = e.call(n, i, t[a], a, t);
				return i
			}
		}
		function v(t, e, i) {
			if (t && e) {
				if (t.filter && t.filter === E) return t.filter(e, i);
				for (var n = [], a = 0, o = t.length; o > a; a++) e.call(i, t[a], a, t) && n.push(t[a]);
				return n
			}
		}
		function y(t, e, i) {
			if (t && e) for (var n = 0, a = t.length; a > n; n++) if (e.call(i, t[n], n, t)) return t[n]
		}
		function x(t, e) {
			var i = V.call(arguments, 2);
			return function() {
				return t.apply(e, i.concat(V.call(arguments)))
			}
		}
		function _(t) {
			var e = V.call(arguments, 1);
			return function() {
				return t.apply(this, e.concat(V.call(arguments)))
			}
		}
		function w(t) {
			return "[object Array]" === z.call(t)
		}
		function b(t) {
			return "function" == typeof t
		}
		function M(t) {
			return "[object String]" === z.call(t)
		}
		function S(t) {
			var e = typeof t;
			return "function" === e || !! t && "object" == e
		}
		function A(t) {
			return !!k[z.call(t)] || t instanceof P
		}
		function I(t) {
			return t && 1 === t.nodeType && "string" == typeof t.nodeName
		}
		function T(t) {
			for (var e = 0, i = arguments.length; i > e; e++) if (null != arguments[e]) return arguments[e]
		}
		function C() {
			return Function.call.apply(V, arguments)
		}
		function L(t, e) {
			if (!t) throw new Error(e)
		}
		var D, P = i(16),
			k = {
				"[object Function]": 1,
				"[object RegExp]": 1,
				"[object Date]": 1,
				"[object Error]": 1,
				"[object CanvasGradient]": 1
			},
			z = Object.prototype.toString,
			R = Array.prototype,
			O = R.forEach,
			E = R.filter,
			V = R.slice,
			N = R.map,
			B = R.reduce,
			G = {
				inherits: c,
				mixin: d,
				clone: n,
				merge: a,
				mergeAll: o,
				extend: r,
				defaults: s,
				getContext: h,
				createCanvas: l,
				indexOf: u,
				slice: C,
				find: y,
				isArrayLike: f,
				each: p,
				map: g,
				reduce: m,
				filter: v,
				bind: x,
				curry: _,
				isArray: w,
				isString: M,
				isObject: S,
				isFunction: b,
				isBuildInObject: A,
				isDom: I,
				retrieve: T,
				assert: L,
				noop: function() {}
			};
		t.exports = G
	}, function(t, e, i) {
		function n(t) {
			return function(e, i, n) {
				e = e && e.toLowerCase(), L.prototype[t].call(this, e, i, n)
			}
		}
		function a() {
			L.call(this)
		}
		function o(t, e, i) {
			i = i || {}, "string" == typeof e && (e = H[e]), e && D(F, function(t) {
				t(e)
			}), this.id, this.group, this._dom = t, this._zr = A.init(t, {
				renderer: i.renderer || "canvas",
				devicePixelRatio: i.devicePixelRatio
			}), this._theme = I.clone(e), this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._api = new v(this), this._coordSysMgr = new y, L.call(this), this._messageCenter = new a, this._initEvents(), this.resize = I.bind(this.resize, this)
		}
		function r(t, e) {
			var i = this._model;
			i && i.eachComponent({
				mainType: "series",
				query: e
			}, function(n, a) {
				var o = this._chartsMap[n.__viewId];
				o && o.__alive && o[t](n, i, this._api, e)
			}, this)
		}
		function s(t, e, i) {
			var n = this._api;
			D(this._componentsViews, function(a) {
				var o = a.__model;
				a[t](o, e, n, i), p(o, a)
			}, this), e.eachSeries(function(a, o) {
				var r = this._chartsMap[a.__viewId];
				r[t](a, e, n, i), p(a, r)
			}, this)
		}
		function l(t, e) {
			for (var i = "component" === t, n = i ? this._componentsViews : this._chartsViews, a = i ? this._componentsMap : this._chartsMap, o = this._zr, r = 0; r < n.length; r++) n[r].__alive = !1;
			e[i ? "eachComponent" : "eachSeries"](function(t, r) {
				if (i) {
					if ("series" === t) return
				} else r = t;
				var s = r.id + "_" + r.type,
					l = a[s];
				if (!l) {
					var h = _.parseClassType(r.type),
						u = i ? b.getClass(h.main, h.sub) : M.getClass(h.sub);
					if (!u) return;
					l = new u, l.init(e, this._api), a[s] = l, n.push(l), o.add(l.group)
				}
				r.__viewId = s, l.__alive = !0, l.__id = s, l.__model = r
			}, this);
			for (var r = 0; r < n.length;) {
				var s = n[r];
				s.__alive ? r++ : (o.remove(s.group), s.dispose(e, this._api), n.splice(r, 1), delete a[s.__id])
			}
		}
		function h(t, e) {
			D(k, function(i) {
				D(G[i] || [], function(i) {
					i(t, e)
				})
			})
		}
		function u(t) {
			var e = {};
			t.eachSeries(function(t) {
				var i = t.get("stack"),
					n = t.getData();
				if (i && "list" === n.type) {
					var a = e[i];
					a && (n.stackedOn = a), e[i] = n
				}
			})
		}
		function c(t, e) {
			var i = this._api;
			D(B, function(n) {
				n(t, i, e)
			})
		}
		function d(t, e) {
			D(P, function(i) {
				D(W[i] || [], function(i) {
					i(t, e)
				})
			})
		}
		function f(t, e) {
			var i = this._api;
			D(this._componentsViews, function(n) {
				var a = n.__model;
				n.render(a, t, i, e), p(a, n)
			}, this), D(this._chartsViews, function(t) {
				t.__alive = !1
			}, this), t.eachSeries(function(n, a) {
				var o = this._chartsMap[n.__viewId];
				o.__alive = !0, o.render(n, t, i, e), o.group.silent = !! n.get("silent"), p(n, o)
			}, this), D(this._chartsViews, function(e) {
				e.__alive || e.remove(t, i)
			}, this)
		}
		function p(t, e) {
			var i = t.get("z"),
				n = t.get("zlevel");
			e.group.traverse(function(t) {
				null != i && (t.z = i), null != n && (t.zlevel = n)
			})
		}
		function g(t) {
			function e(t, e) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i];
					n[o] = e
				}
			}
			var i = 0,
				n = 1,
				a = 2,
				o = "__connectUpdateStatus";
			I.each(N, function(r, s) {
				t._messageCenter.on(s, function(r) {
					if (q[t.group] && t[o] !== i) {
						var s = t.makeActionFromEvent(r),
							l = [];
						for (var h in Z) {
							var u = Z[h];
							u !== t && u.group === t.group && l.push(u)
						}
						e(l, i), D(l, function(t) {
							t[o] !== n && t.dispatchAction(s)
						}), e(l, a)
					}
				})
			})
		}
		/*!
		 * ECharts, a javascript interactive chart library.
		 *
		 * Copyright (c) 2015, Baidu Inc.
		 * All rights reserved.
		 *
		 * LICENSE
		 * https://github.com/ecomfe/echarts/blob/master/LICENSE.txt
		 */
		var m = i(112),
			v = i(78),
			y = i(28),
			x = i(113),
			_ = i(10),
			w = i(13),
			b = i(54),
			M = i(25),
			S = i(3),
			A = i(67),
			I = i(1),
			T = i(22),
			C = i(15),
			L = i(21),
			D = I.each,
			P = ["echarts", "chart", "component"],
			k = ["transform", "filter", "statistic"];
		a.prototype.on = n("on"), a.prototype.off = n("off"), a.prototype.one = n("one"), I.mixin(a, L);
		var z = o.prototype;
		z.getDom = function() {
			return this._dom
		}, z.getZr = function() {
			return this._zr
		}, z.setOption = function(t, e, i) {
			this._model && !e || (this._model = new m(null, null, this._theme, new x(this._api))), this._model.setOption(t, F), R.prepareAndUpdate.call(this), !i && this._zr.refreshImmediately()
		}, z.setTheme = function() {
			console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
		}, z.getModel = function() {
			return this._model
		}, z.getOption = function() {
			return this._model.getOption()
		}, z.getWidth = function() {
			return this._zr.getWidth()
		}, z.getHeight = function() {
			return this._zr.getHeight()
		}, z.getRenderedCanvas = function(t) {
			if (C.canvasSupported) {
				t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
				var e = this._zr,
					i = e.storage.getDisplayList();
				return I.each(i, function(t) {
					t.stopAnimation(!0)
				}), e.painter.getRenderedCanvas(t)
			}
		}, z.getDataURL = function(t) {
			t = t || {};
			var e = t.excludeComponents,
				i = this._model,
				n = [],
				a = this;
			D(e, function(t) {
				i.eachComponent({
					mainType: t
				}, function(t) {
					var e = a._componentsMap[t.__viewId];
					e.group.ignore || (n.push(e), e.group.ignore = !0)
				})
			});
			var o = this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
			return D(n, function(t) {
				t.group.ignore = !1
			}), o
		}, z.getConnectedDataURL = function(t) {
			if (C.canvasSupported) {
				var e = this.group,
					i = Math.min,
					n = Math.max,
					a = 1 / 0;
				if (q[e]) {
					var o = a,
						r = a,
						s = -a,
						l = -a,
						h = [],
						u = t && t.pixelRatio || 1;
					for (var c in Z) {
						var d = Z[c];
						if (d.group === e) {
							var f = d.getRenderedCanvas(I.clone(t)),
								p = d.getDom().getBoundingClientRect();
							o = i(p.left, o), r = i(p.top, r), s = n(p.right, s), l = n(p.bottom, l), h.push({
								dom: f,
								left: p.left,
								top: p.top
							})
						}
					}
					o *= u, r *= u, s *= u, l *= u;
					var g = s - o,
						m = l - r,
						v = I.createCanvas();
					v.width = g, v.height = m;
					var y = A.init(v);
					return D(h, function(t) {
						var e = new S.Image({
							style: {
								x: t.left * u - o,
								y: t.top * u - r,
								image: t.dom
							}
						});
						y.add(e)
					}), y.refreshImmediately(), v.toDataURL("image/" + (t && t.type || "png"))
				}
				return this.getDataURL(t)
			}
		};
		var R = {
			update: function(t) {
				var e = this._model,
					i = this._api,
					n = this._coordSysMgr;
				if (e) {
					e.restoreData(), n.create(this._model, this._api), h.call(this, e, i), u.call(this, e), n.update(e, i), c.call(this, e, t), d.call(this, e, t), f.call(this, e, t);
					var a = e.get("backgroundColor") || "transparent",
						o = this._zr.painter;
					if (o.isSingleCanvas && o.isSingleCanvas()) this._zr.configLayer(0, {
						clearColor: a
					});
					else {
						if (!C.canvasSupported) {
							var r = T.parse(a);
							a = T.stringify(r, "rgb"), 0 === r[3] && (a = "transparent")
						}
						a = a, this._dom.style.backgroundColor = a
					}
				}
			},
			updateView: function(t) {
				var e = this._model;
				e && (c.call(this, e, t), d.call(this, e, t), s.call(this, "updateView", e, t))
			},
			updateVisual: function(t) {
				var e = this._model;
				e && (d.call(this, e, t), s.call(this, "updateVisual", e, t))
			},
			updateLayout: function(t) {
				var e = this._model;
				e && (c.call(this, e, t), s.call(this, "updateLayout", e, t))
			},
			highlight: function(t) {
				r.call(this, "highlight", t)
			},
			downplay: function(t) {
				r.call(this, "downplay", t)
			},
			prepareAndUpdate: function(t) {
				var e = this._model;
				l.call(this, "component", e), l.call(this, "chart", e), R.update.call(this, t)
			}
		};
		z.resize = function() {
			this._zr.resize();
			var t = this._model && this._model.resetOption("media");
			R[t ? "prepareAndUpdate" : "update"].call(this), this._loadingFX && this._loadingFX.resize()
		};
		var O = i(111);
		z.showLoading = function(t, e) {
			I.isObject(t) && (e = t, t = "default"), this.hideLoading();
			var i = O(this._api, e),
				n = this._zr;
			this._loadingFX = i, n.add(i)
		}, z.hideLoading = function() {
			this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
		}, z.makeActionFromEvent = function(t) {
			var e = I.extend({}, t);
			return e.type = N[t.type], e
		}, z.dispatchAction = function(t, e) {
			var i = V[t.type];
			if (i) {
				var n = i.actionInfo,
					a = n.update || "update",
					o = [t],
					r = !1;
				t.batch && (r = !0, o = I.map(t.batch, function(e) {
					return e = I.defaults(I.extend({}, e), t), e.batch = null, e
				}));
				for (var s, l = [], h = "highlight" === t.type || "downplay" === t.type, u = 0; u < o.length; u++) {
					var c = o[u];
					s = i.action(c, this._model), s = s || I.extend({}, c), s.type = n.event || s.type, l.push(s), h && R[a].call(this, c)
				}
				"none" !== a && !h && R[a].call(this, t), e || (s = r ? {
					type: n.event || t.type,
					batch: l
				} : l[0], this._messageCenter.trigger(s.type, s))
			}
		}, z.on = n("on"), z.off = n("off"), z.one = n("one");
		var E = ["click", "dblclick", "mouseover", "mouseout", "mousedown", "mouseup", "globalout"];
		z._initEvents = function() {
			var t = this._zr;
			D(E, function(e) {
				t.on(e, function(t) {
					var i = this.getModel(),
						n = t.target;
					if (n && null != n.dataIndex) {
						var a = n.dataModel || i.getSeriesByIndex(n.seriesIndex),
							o = a && a.getDataParams(n.dataIndex) || {};
						o.event = t, o.type = e, this.trigger(e, o)
					} else n && n.eventData && this.trigger(e, n.eventData)
				}, this)
			}, this), D(N, function(t, e) {
				this._messageCenter.on(e, function(t) {
					this.trigger(e, t)
				}, this)
			}, this)
		}, z.isDisposed = function() {
			return this._disposed
		}, z.clear = function() {
			this.setOption({}, !0)
		}, z.dispose = function() {
			this._disposed = !0;
			var t = this._api,
				e = this._model;
			D(this._componentsViews, function(i) {
				i.dispose(e, t)
			}), D(this._chartsViews, function(i) {
				i.dispose(e, t)
			}), this._zr.dispose(), delete Z[this.id]
		}, I.mixin(o, L);
		var V = [],
			N = {},
			B = [],
			G = {},
			F = [],
			W = {},
			H = {},
			Z = {},
			q = {},
			j = new Date - 0,
			U = new Date - 0,
			X = "_echarts_instance_",
			Y = {
				version: "3.1.7",
				dependencies: {
					zrender: "3.0.8"
				}
			};
		Y.init = function(t, e, i) {
			if (A.version.replace(".", "") - 0 < Y.dependencies.zrender.replace(".", "") - 0) throw new Error("ZRender " + A.version + " is too old for ECharts " + Y.version + ". Current version need ZRender " + Y.dependencies.zrender + "+");
			if (!t) throw new Error("Initialize failed: invalid dom.");
			var n = new o(t, e, i);
			return n.id = "ec_" + j++, Z[n.id] = n, t.setAttribute && t.setAttribute(X, n.id), g(n), n
		}, Y.connect = function(t) {
			if (I.isArray(t)) {
				var e = t;
				t = null, I.each(e, function(e) {
					null != e.group && (t = e.group)
				}), t = t || "g_" + U++, I.each(e, function(e) {
					e.group = t
				})
			}
			return q[t] = !0, t
		}, Y.disConnect = function(t) {
			q[t] = !1
		}, Y.dispose = function(t) {
			I.isDom(t) ? t = Y.getInstanceByDom(t) : "string" == typeof t && (t = Z[t]), t instanceof o && !t.isDisposed() && t.dispose()
		}, Y.getInstanceByDom = function(t) {
			var e = t.getAttribute(X);
			return Z[e]
		}, Y.getInstanceById = function(t) {
			return Z[t]
		}, Y.registerTheme = function(t, e) {
			H[t] = e
		}, Y.registerPreprocessor = function(t) {
			F.push(t)
		}, Y.registerProcessor = function(t, e) {
			if (I.indexOf(k, t) < 0) throw new Error("stage should be one of " + k);
			var i = G[t] || (G[t] = []);
			i.push(e)
		}, Y.registerAction = function(t, e, i) {
			"function" == typeof e && (i = e, e = "");
			var n = I.isObject(t) ? t.type : [t, t = {
				event: e
			}][0];
			t.event = (t.event || n).toLowerCase(), e = t.event, V[n] || (V[n] = {
				action: i,
				actionInfo: t
			}), N[e] = n
		}, Y.registerCoordinateSystem = function(t, e) {
			y.register(t, e)
		}, Y.registerLayout = function(t) {
			I.indexOf(B, t) < 0 && B.push(t)
		}, Y.registerVisualCoding = function(t, e) {
			if (I.indexOf(P, t) < 0) throw new Error("stage should be one of " + P);
			var i = W[t] || (W[t] = []);
			i.push(e)
		}, Y.extendChartView = function(t) {
			return M.extend(t)
		}, Y.extendComponentModel = function(t) {
			return _.extend(t)
		}, Y.extendSeriesModel = function(t) {
			return w.extend(t)
		}, Y.extendComponentView = function(t) {
			return b.extend(t)
		}, Y.setCanvasCreator = function(t) {
			I.createCanvas = t
		}, Y.registerVisualCoding("echarts", I.curry(i(74), "", "itemStyle")), Y.registerPreprocessor(i(120)), Y.registerAction({
			type: "highlight",
			event: "highlight",
			update: "highlight"
		}, I.noop), Y.registerAction({
			type: "downplay",
			event: "downplay",
			update: "downplay"
		}, I.noop), Y.graphic = i(3), Y.number = i(4), Y.format = i(9), Y.matrix = i(19), Y.vector = i(5), Y.util = {}, D(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend"], function(t) {
			Y.util[t] = I[t]
		}), t.exports = Y
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			if (!t.__isHover) {
				if (t.__hoverStlDirty) {
					var e = t.style.stroke,
						i = t.style.fill,
						n = t.__hoverStl,
						a = v.lift;
					n.fill = n.fill || i && (i instanceof _ ? i : a(i, -.1)), n.stroke = n.stroke || e && (e instanceof _ ? e : a(e, -.1));
					var o = {};
					for (var r in n) n.hasOwnProperty(r) && (o[r] = t.style[r]);
					t.__normalStl = o, t.__hoverStlDirty = !1
				}
				t.setStyle(t.__hoverStl), t.z2 += 1, t.__isHover = !0
			}
		}
		function a(t) {
			if (t.__isHover) {
				var e = t.__normalStl;
				e && t.setStyle(e), t.z2 -= 1, t.__isHover = !1
			}
		}
		function o(t) {
			"group" === t.type ? t.traverse(function(t) {
				"group" !== t.type && n(t)
			}) : n(t)
		}
		function r(t) {
			"group" === t.type ? t.traverse(function(t) {
				"group" !== t.type && a(t)
			}) : a(t)
		}
		function s(t, e) {
			t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0
		}
		function l() {
			!this.__isEmphasis && o(this)
		}
		function h() {
			!this.__isEmphasis && r(this)
		}
		function u() {
			this.__isEmphasis = !0, o(this)
		}
		function c() {
			this.__isEmphasis = !1, r(this)
		}
		function d(t, e, i, n, a) {
			var o = t ? "Update" : "",
				r = n && n.getShallow("animationDuration" + o),
				s = n && n.getShallow("animationEasing" + o);
			n && n.getShallow("animation") ? e.animateTo(i, r, s, a) : (e.attr(i), a && a())
		}
		var f = i(1),
			p = i(156),
			g = Math.round,
			m = i(6),
			v = i(22),
			y = i(19),
			x = i(5),
			_ = i(16),
			w = {};
		w.Group = i(26), w.Image = i(46), w.Text = i(65), w.Circle = i(147), w.Sector = i(153), w.Ring = i(152), w.Polygon = i(149), w.Polyline = i(150), w.Rect = i(151), w.Line = i(148), w.BezierCurve = i(146), w.Arc = i(145), w.LinearGradient = i(76), w.RadialGradient = i(141), w.BoundingRect = i(8), w.extendShape = function(t) {
			return m.extend(t)
		}, w.extendPath = function(t, e) {
			return p.extendFromString(t, e)
		}, w.makePath = function(t, e, i, n) {
			var a = p.createFromString(t, e),
				o = a.getBoundingRect();
			if (i) {
				var r = o.width / o.height;
				if ("center" === n) {
					var s, l = i.height * r;
					l <= i.width ? s = i.height : (l = i.width, s = l / r);
					var h = i.x + i.width / 2,
						u = i.y + i.height / 2;
					i.x = h - l / 2, i.y = u - s / 2, i.width = l, i.height = s
				}
				this.resizePath(a, i)
			}
			return a
		}, w.mergePath = p.mergePath, w.resizePath = function(t, e) {
			if (t.applyTransform) {
				var i = t.getBoundingRect(),
					n = i.calculateTransform(e);
				t.applyTransform(n)
			}
		}, w.subPixelOptimizeLine = function(t) {
			var e = w.subPixelOptimize,
				i = t.shape,
				n = t.style.lineWidth;
			return g(2 * i.x1) === g(2 * i.x2) && (i.x1 = i.x2 = e(i.x1, n, !0)), g(2 * i.y1) === g(2 * i.y2) && (i.y1 = i.y2 = e(i.y1, n, !0)), t
		}, w.subPixelOptimizeRect = function(t) {
			var e = w.subPixelOptimize,
				i = t.shape,
				n = t.style.lineWidth,
				a = i.x,
				o = i.y,
				r = i.width,
				s = i.height;
			return i.x = e(i.x, n, !0), i.y = e(i.y, n, !0), i.width = Math.max(e(a + r, n, !1) - i.x, 0 === r ? 0 : 1), i.height = Math.max(e(o + s, n, !1) - i.y, 0 === s ? 0 : 1), t
		}, w.subPixelOptimize = function(t, e, i) {
			var n = g(2 * t);
			return (n + g(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
		}, w.setHoverStyle = function(t, e) {
			"group" === t.type ? t.traverse(function(t) {
				"group" !== t.type && s(t, e)
			}) : s(t, e), t.on("mouseover", l).on("mouseout", h), t.on("emphasis", u).on("normal", c)
		}, w.setText = function(t, e, i) {
			var n = e.getShallow("position") || "inside",
				a = n.indexOf("inside") >= 0 ? "white" : i,
				o = e.getModel("textStyle");
			f.extend(t, {
				textDistance: e.getShallow("distance") || 5,
				textFont: o.getFont(),
				textPosition: n,
				textFill: o.getTextColor() || a
			})
		}, w.updateProps = f.curry(d, !0), w.initProps = f.curry(d, !1), w.getTransform = function(t, e) {
			for (var i = y.identity([]); t && t !== e;) y.mul(i, t.getLocalTransform(), i), t = t.parent;
			return i
		}, w.applyTransform = function(t, e, i) {
			return i && (e = y.invert([], e)), x.applyTransform([], t, e)
		}, w.transformDirection = function(t, e, i) {
			var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
				a = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
				o = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -a : "bottom" === t ? a : 0];
			return o = w.applyTransform(o, e, i), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
		}, t.exports = w
	}, function(t, e) {
		function i(t) {
			return t.replace(/^\s+/, "").replace(/\s+$/, "")
		}
		var n = {},
			a = 1e-4;
		n.linearMap = function(t, e, i, n) {
			var a = e[1] - e[0];
			if (0 === a) return (i[0] + i[1]) / 2;
			var o = (t - e[0]) / a;
			return n && (o = Math.min(Math.max(o, 0), 1)), o * (i[1] - i[0]) + i[0]
		}, n.parsePercent = function(t, e) {
			switch (t) {
			case "center":
			case "middle":
				t = "50%";
				break;
			case "left":
			case "top":
				t = "0%";
				break;
			case "right":
			case "bottom":
				t = "100%"
			}
			return "string" == typeof t ? i(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
		}, n.round = function(t) {
			return +(+t).toFixed(10)
		}, n.asc = function(t) {
			return t.sort(function(t, e) {
				return t - e
			}), t
		}, n.getPrecision = function(t) {
			if (isNaN(t)) return 0;
			for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
			return i
		}, n.getPixelPrecision = function(t, e) {
			var i = Math.log,
				n = Math.LN10,
				a = Math.floor(i(t[1] - t[0]) / n),
				o = Math.round(i(Math.abs(e[1] - e[0])) / n);
			return Math.max(-a + o, 0)
		}, n.MAX_SAFE_INTEGER = 9007199254740991, n.remRadian = function(t) {
			var e = 2 * Math.PI;
			return (t % e + e) % e
		}, n.isRadianAroundZero = function(t) {
			return t > -a && a > t
		}, n.parseDate = function(t) {
			return t instanceof Date ? t : new Date("string" == typeof t ? t.replace(/-/g, "/") : Math.round(t))
		}, n.nice = function(t, e) {
			var i, n = Math.floor(Math.log(t) / Math.LN10),
				a = Math.pow(10, n),
				o = t / a;
			return i = e ? 1.5 > o ? 1 : 2.5 > o ? 2 : 4 > o ? 3 : 7 > o ? 5 : 10 : 1 > o ? 1 : 2 > o ? 2 : 3 > o ? 3 : 5 > o ? 5 : 10, i * a
		}, t.exports = n
	}, function(t, e) {
		var i = "undefined" == typeof Float32Array ? Array : Float32Array,
			n = {
				create: function(t, e) {
					var n = new i(2);
					return n[0] = t || 0, n[1] = e || 0, n
				},
				copy: function(t, e) {
					return t[0] = e[0], t[1] = e[1], t
				},
				clone: function(t) {
					var e = new i(2);
					return e[0] = t[0], e[1] = t[1], e
				},
				set: function(t, e, i) {
					return t[0] = e, t[1] = i, t
				},
				add: function(t, e, i) {
					return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
				},
				scaleAndAdd: function(t, e, i, n) {
					return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
				},
				sub: function(t, e, i) {
					return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
				},
				len: function(t) {
					return Math.sqrt(this.lenSquare(t))
				},
				lenSquare: function(t) {
					return t[0] * t[0] + t[1] * t[1]
				},
				mul: function(t, e, i) {
					return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
				},
				div: function(t, e, i) {
					return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
				},
				dot: function(t, e) {
					return t[0] * e[0] + t[1] * e[1]
				},
				scale: function(t, e, i) {
					return t[0] = e[0] * i, t[1] = e[1] * i, t
				},
				normalize: function(t, e) {
					var i = n.len(e);
					return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
				},
				distance: function(t, e) {
					return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
				},
				distanceSquare: function(t, e) {
					return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
				},
				negate: function(t, e) {
					return t[0] = -e[0], t[1] = -e[1], t
				},
				lerp: function(t, e, i, n) {
					return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
				},
				applyTransform: function(t, e, i) {
					var n = e[0],
						a = e[1];
					return t[0] = i[0] * n + i[2] * a + i[4], t[1] = i[1] * n + i[3] * a + i[5], t
				},
				min: function(t, e, i) {
					return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
				},
				max: function(t, e, i) {
					return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
				}
			};
		n.length = n.len, n.lengthSquare = n.lenSquare, n.dist = n.distance, n.distSquare = n.distanceSquare, t.exports = n
	}, function(t, e, i) {
		function n(t) {
			var e = t.fill;
			return null != e && "none" !== e
		}
		function a(t) {
			var e = t.stroke;
			return null != e && "none" !== e && t.lineWidth > 0
		}
		function o(t) {
			r.call(this, t), this.path = new l
		}
		var r = i(35),
			s = i(1),
			l = i(27),
			h = i(137),
			u = i(16),
			c = Math.abs;
		o.prototype = {
			constructor: o,
			type: "path",
			__dirtyPath: !0,
			strokeContainThreshold: 5,
			brush: function(t) {
				t.save();
				var e = this.style,
					i = this.path,
					o = a(e),
					r = n(e);
				this.__dirtyPath && (r && e.fill instanceof u && e.fill.updateCanvasGradient(this, t), o && e.stroke instanceof u && e.stroke.updateCanvasGradient(this, t)), e.bind(t, this), this.setTransform(t);
				var s = e.lineDash,
					l = e.lineDashOffset,
					h = !! t.setLineDash;
				this.__dirtyPath || s && !h && o ? (i = this.path.beginPath(t), s && !h && (i.setLineDash(s), i.setLineDashOffset(l)), this.buildPath(i, this.shape), this.__dirtyPath = !1) : (t.beginPath(), this.path.rebuildPath(t)), r && i.fill(t), s && h && (t.setLineDash(s), t.lineDashOffset = l), o && i.stroke(t), null != e.text && this.drawRectText(t, this.getBoundingRect()), t.restore()
			},
			buildPath: function(t, e) {},
			getBoundingRect: function() {
				var t = this._rect,
					e = this.style,
					i = !t;
				if (i) {
					var o = this.path;
					this.__dirtyPath && (o.beginPath(), this.buildPath(o, this.shape)), t = o.getBoundingRect()
				}
				if (this._rect = t, a(e)) {
					var r = this._rectWithStroke;
					if (this.__dirty || i) {
						var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
						r.copy(t);
						var s = e.lineWidth,
							l = e.strokeNoScale ? this.getLineScale() : 1;
						n(e) || (s = Math.max(s, this.strokeContainThreshold)), l > 1e-10 && (r.width += s / l, r.height += s / l, r.x -= s / l / 2, r.y -= s / l / 2)
					}
					return r
				}
				return t
			},
			contain: function(t, e) {
				var i = this.transformCoordToLocal(t, e),
					o = this.getBoundingRect(),
					r = this.style;
				if (t = i[0], e = i[1], o.contain(t, e)) {
					var s = this.path.data;
					if (a(r)) {
						var l = r.lineWidth,
							u = r.strokeNoScale ? this.getLineScale() : 1;
						if (u > 1e-10 && (n(r) || (l = Math.max(l, this.strokeContainThreshold)), h.containStroke(s, l / u, t, e))) return !0
					}
					if (n(r)) return h.contain(s, t, e)
				}
				return !1
			},
			dirty: function(t) {
				0 === arguments.length && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
			},
			animateShape: function(t) {
				return this.animate("shape", t)
			},
			attrKV: function(t, e) {
				"shape" === t ? this.setShape(e) : r.prototype.attrKV.call(this, t, e)
			},
			setShape: function(t, e) {
				var i = this.shape;
				if (i) {
					if (s.isObject(t)) for (var n in t) i[n] = t[n];
					else i[t] = e;
					this.dirty(!0)
				}
				return this
			},
			getLineScale: function() {
				var t = this.transform;
				return t && c(t[0] - 1) > 1e-10 && c(t[3] - 1) > 1e-10 ? Math.sqrt(c(t[0] * t[3] - t[2] * t[1])) : 1
			}
		}, o.extend = function(t) {
			var e = function(e) {
					o.call(this, e), t.style && this.style.extendFrom(t.style, !1);
					var i = t.shape;
					if (i) {
						this.shape = this.shape || {};
						var n = this.shape;
						for (var a in i)!n.hasOwnProperty(a) && i.hasOwnProperty(a) && (n[a] = i[a])
					}
					t.init && t.init.call(this, e)
				};
			s.inherits(e, o);
			for (var i in t)"style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
			return e
		}, s.inherits(o, r), t.exports = o
	}, function(t, e, i) {
		var n = i(9),
			a = i(4),
			o = i(1),
			r = i(12),
			s = ["x", "y", "z", "radius", "angle"],
			l = {};
		l.createNameEach = function(t, e) {
			t = t.slice();
			var i = o.map(t, l.capitalFirst);
			e = (e || []).slice();
			var n = o.map(e, l.capitalFirst);
			return function(a, r) {
				o.each(t, function(t, o) {
					for (var s = {
						name: t,
						capital: i[o]
					}, l = 0; l < e.length; l++) s[e[l]] = t + n[l];
					a.call(r, s)
				})
			}
		}, l.capitalFirst = function(t) {
			return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
		}, l.eachAxisDim = l.createNameEach(s, ["axisIndex", "axis", "index"]), l.normalizeToArray = function(t) {
			return o.isArray(t) ? t : null == t ? [] : [t]
		}, l.createLinkedNodesFinder = function(t, e, i) {
			function n(t, e) {
				return o.indexOf(e.nodes, t) >= 0
			}
			function a(t, n) {
				var a = !1;
				return e(function(e) {
					o.each(i(t, e) || [], function(t) {
						n.records[e.name][t] && (a = !0)
					})
				}), a
			}
			function r(t, n) {
				n.nodes.push(t), e(function(e) {
					o.each(i(t, e) || [], function(t) {
						n.records[e.name][t] = !0
					})
				})
			}
			return function(i) {
				function o(t) {
					!n(t, s) && a(t, s) && (r(t, s), l = !0)
				}
				var s = {
					nodes: [],
					records: {}
				};
				if (e(function(t) {
					s.records[t.name] = {}
				}), !i) return s;
				r(i, s);
				var l;
				do l = !1, t(o);
				while (l);
				return s
			}
		}, l.defaultEmphasis = function(t, e) {
			if (t) {
				var i = t.emphasis = t.emphasis || {},
					n = t.normal = t.normal || {};
				o.each(e, function(t) {
					var e = o.retrieve(i[t], n[t]);
					null != e && (i[t] = e)
				})
			}
		}, l.createDataFormatModel = function(t, e, i) {
			var n = new r;
			return o.mixin(n, l.dataFormatMixin), n.seriesIndex = t.seriesIndex, n.name = t.name || "", n.getData = function() {
				return e
			}, n.getRawDataArray = function() {
				return i
			}, n
		}, l.getDataItemValue = function(t) {
			return t && (null == t.value ? t : t.value)
		}, l.converDataValue = function(t, e) {
			var i = e && e.type;
			return "ordinal" === i ? t : ("time" !== i || isFinite(t) || null == t || "-" === t || (t = +a.parseDate(t)), null == t || "" === t ? NaN : +t)
		}, l.dataFormatMixin = {
			getDataParams: function(t) {
				var e = this.getData(),
					i = this.seriesIndex,
					n = this.name,
					a = this.getRawValue(t),
					o = e.getRawIndex(t),
					r = e.getName(t, !0),
					s = this.getRawDataArray(),
					l = s && s[o];
				return {
					componentType: "series",
					seriesType: this.subType,
					seriesIndex: i,
					seriesName: n,
					name: r,
					dataIndex: o,
					data: l,
					value: a,
					color: e.getItemVisual(t, "color"),
					$vars: ["seriesName", "name", "value"]
				}
			},
			getFormattedLabel: function(t, e, i) {
				e = e || "normal";
				var a = this.getData(),
					o = a.getItemModel(t),
					r = this.getDataParams(t);
				return null == i && (i = o.get(["label", e, "formatter"])), "function" == typeof i ? (r.status = e, i(r)) : "string" == typeof i ? n.formatTpl(i, r) : void 0
			},
			getRawValue: function(t) {
				var e = this.getData().getItemModel(t);
				if (e && null != e.option) {
					var i = e.option;
					return o.isObject(i) && !o.isArray(i) ? i.value : i
				}
			}
		}, l.mappingToExists = function(t, e) {
			e = (e || []).slice();
			var i = o.map(t || [], function(t, e) {
				return {
					exist: t
				}
			});
			return o.each(e, function(t, n) {
				if (o.isObject(t)) for (var a = 0; a < i.length; a++) {
					var r = i[a].exist;
					if (!i[a].option && (null != t.id && r.id === t.id + "" || null != t.name && !l.isIdInner(t) && !l.isIdInner(r) && r.name === t.name + "")) {
						i[a].option = t, e[n] = null;
						break
					}
				}
			}), o.each(e, function(t, e) {
				if (o.isObject(t)) {
					for (var n = 0; n < i.length; n++) {
						var a = i[n].exist;
						if (!i[n].option && !l.isIdInner(a) && null == t.id) {
							i[n].option = t;
							break
						}
					}
					n >= i.length && i.push({
						option: t
					})
				}
			}), i
		}, l.isIdInner = function(t) {
			return o.isObject(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
		}, t.exports = l
	}, function(t, e, i) {
		"use strict";

		function n(t, e, i, n) {
			this.x = t, this.y = e, this.width = i, this.height = n
		}
		var a = i(5),
			o = i(19),
			r = a.applyTransform,
			s = Math.min,
			l = Math.abs,
			h = Math.max;
		n.prototype = {
			constructor: n,
			union: function(t) {
				var e = s(t.x, this.x),
					i = s(t.y, this.y);
				this.width = h(t.x + t.width, this.x + this.width) - e, this.height = h(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
			},
			applyTransform: function() {
				var t = [],
					e = [];
				return function(i) {
					i && (t[0] = this.x, t[1] = this.y, e[0] = this.x + this.width, e[1] = this.y + this.height, r(t, t, i), r(e, e, i), this.x = s(t[0], e[0]), this.y = s(t[1], e[1]), this.width = l(e[0] - t[0]), this.height = l(e[1] - t[1]))
				}
			}(),
			calculateTransform: function(t) {
				var e = this,
					i = t.width / e.width,
					n = t.height / e.height,
					a = o.create();
				return o.translate(a, a, [-e.x, -e.y]), o.scale(a, a, [i, n]), o.translate(a, a, [t.x, t.y]), a
			},
			intersect: function(t) {
				var e = this,
					i = e.x,
					n = e.x + e.width,
					a = e.y,
					o = e.y + e.height,
					r = t.x,
					s = t.x + t.width,
					l = t.y,
					h = t.y + t.height;
				return !(r > n || i > s || l > o || a > h)
			},
			contain: function(t, e) {
				var i = this;
				return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
			},
			clone: function() {
				return new n(this.x, this.y, this.width, this.height)
			},
			copy: function(t) {
				this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
			}
		}, t.exports = n
	}, function(t, e, i) {
		function n(t) {
			return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
		}
		function a(t) {
			return t.toLowerCase().replace(/-(.)/g, function(t, e) {
				return e.toUpperCase()
			})
		}
		function o(t) {
			var e = t.length;
			return "number" == typeof t ? [t, t, t, t] : 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
		}
		function r(t) {
			return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
		}
		function s(t, e) {
			return "{" + t + (null == e ? "" : e) + "}"
		}
		function l(t, e) {
			c.isArray(e) || (e = [e]);
			var i = e.length;
			if (!i) return "";
			for (var n = e[0].$vars, a = 0; a < n.length; a++) {
				var o = f[a];
				t = t.replace(s(o), s(o, 0))
			}
			for (var r = 0; i > r; r++) for (var l = 0; l < n.length; l++) t = t.replace(s(f[l], r), e[r][n[l]]);
			return t
		}
		function h(t, e) {
			"week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
			var i = d.parseDate(e),
				n = i.getFullYear(),
				a = i.getMonth() + 1,
				o = i.getDate(),
				r = i.getHours(),
				s = i.getMinutes(),
				l = i.getSeconds();
			return t = t.replace("MM", u(a)).toLowerCase().replace("yyyy", n).replace("yy", n % 100).replace("dd", u(o)).replace("d", o).replace("hh", u(r)).replace("h", r).replace("mm", u(s)).replace("m", s).replace("ss", u(l)).replace("s", l)
		}
		function u(t) {
			return 10 > t ? "0" + t : t
		}
		var c = i(1),
			d = i(4),
			f = ["a", "b", "c", "d", "e", "f", "g"];
		t.exports = {
			normalizeCssArray: o,
			addCommas: n,
			toCamelCase: a,
			encodeHTML: r,
			formatTpl: l,
			formatTime: h
		}
	}, function(t, e, i) {
		function n(t) {
			var e = [];
			return o.each(u.getClassesByMainType(t), function(t) {
				r.apply(e, t.prototype.dependencies || [])
			}), o.map(e, function(t) {
				return l.parseClassType(t).main
			})
		}
		var a = i(12),
			o = i(1),
			r = Array.prototype.push,
			s = i(41),
			l = i(20),
			h = i(11),
			u = a.extend({
				type: "component",
				id: "",
				name: "",
				mainType: "",
				subType: "",
				componentIndex: 0,
				defaultOption: null,
				ecModel: null,
				dependentModels: [],
				uid: null,
				layoutMode: null,
				init: function(t, e, i, n) {
					this.mergeDefaultAndTheme(this.option, this.ecModel)
				},
				mergeDefaultAndTheme: function(t, e) {
					var i = this.layoutMode,
						n = i ? h.getLayoutParams(t) : {},
						a = e.getTheme();
					o.merge(t, a.get(this.mainType)), o.merge(t, this.getDefaultOption()), i && h.mergeLayoutParam(t, n, i)
				},
				mergeOption: function(t) {
					o.merge(this.option, t, !0);
					var e = this.layoutMode;
					e && h.mergeLayoutParam(this.option, t, e)
				},
				optionUpdated: function(t) {},
				getDefaultOption: function() {
					if (!this.hasOwnProperty("__defaultOption")) {
						for (var t = [], e = this.constructor; e;) {
							var i = e.prototype.defaultOption;
							i && t.push(i), e = e.superClass
						}
						for (var n = {}, a = t.length - 1; a >= 0; a--) n = o.merge(n, t[a], !0);
						this.__defaultOption = n
					}
					return this.__defaultOption
				}
			});
		l.enableClassExtend(u, function(t, e, i, n) {
			o.extend(this, n), this.uid = s.getUID("componentModel")
		}), l.enableClassManagement(u, {
			registerWhenExtend: !0
		}), s.enableSubTypeDefaulter(u), s.enableTopologicalTravel(u, n), o.mixin(u, i(116)), t.exports = u
	}, function(t, e, i) {
		"use strict";

		function n(t, e, i, n, a) {
			var o = 0,
				r = 0;
			null == n && (n = 1 / 0), null == a && (a = 1 / 0);
			var s = 0;
			e.eachChild(function(l, h) {
				var u, c, d = l.position,
					f = l.getBoundingRect(),
					p = e.childAt(h + 1),
					g = p && p.getBoundingRect();
				if ("horizontal" === t) {
					var m = f.width + (g ? -g.x + f.x : 0);
					u = o + m, u > n || l.newline ? (o = 0, u = m, r += s + i, s = f.height) : s = Math.max(s, f.height)
				} else {
					var v = f.height + (g ? -g.y + f.y : 0);
					c = r + v, c > a || l.newline ? (o += s + i, r = 0, c = v, s = f.width) : s = Math.max(s, f.width)
				}
				l.newline || (d[0] = o, d[1] = r, "horizontal" === t ? o = u + i : r = c + i)
			})
		}
		var a = i(1),
			o = i(8),
			r = i(4),
			s = i(9),
			l = r.parsePercent,
			h = a.each,
			u = {},
			c = ["left", "right", "top", "bottom", "width", "height"];
		u.box = n, u.vbox = a.curry(n, "vertical"), u.hbox = a.curry(n, "horizontal"), u.getAvailableSize = function(t, e, i) {
			var n = e.width,
				a = e.height,
				o = l(t.x, n),
				r = l(t.y, a),
				h = l(t.x2, n),
				u = l(t.y2, a);
			return (isNaN(o) || isNaN(parseFloat(t.x))) && (o = 0), (isNaN(h) || isNaN(parseFloat(t.x2))) && (h = n), (isNaN(r) || isNaN(parseFloat(t.y))) && (r = 0), (isNaN(u) || isNaN(parseFloat(t.y2))) && (u = a), i = s.normalizeCssArray(i || 0), {
				width: Math.max(h - o - i[1] - i[3], 0),
				height: Math.max(u - r - i[0] - i[2], 0)
			}
		}, u.getLayoutRect = function(t, e, i) {
			i = s.normalizeCssArray(i || 0);
			var n = e.width,
				a = e.height,
				r = l(t.left, n),
				h = l(t.top, a),
				u = l(t.right, n),
				c = l(t.bottom, a),
				d = l(t.width, n),
				f = l(t.height, a),
				p = i[2] + i[0],
				g = i[1] + i[3],
				m = t.aspect;
			switch (isNaN(d) && (d = n - u - g - r), isNaN(f) && (f = a - c - p - h), isNaN(d) && isNaN(f) && (m > n / a ? d = .8 * n : f = .8 * a), null != m && (isNaN(d) && (d = m * f), isNaN(f) && (f = d / m)), isNaN(r) && (r = n - u - d - g), isNaN(h) && (h = a - c - f - p), t.left || t.right) {
			case "center":
				r = n / 2 - d / 2 - i[3];
				break;
			case "right":
				r = n - d - g
			}
			switch (t.top || t.bottom) {
			case "middle":
			case "center":
				h = a / 2 - f / 2 - i[0];
				break;
			case "bottom":
				h = a - f - p
			}
			r = r || 0, h = h || 0, isNaN(d) && (d = n - r - (u || 0)), isNaN(f) && (f = a - h - (c || 0));
			var v = new o(r + i[3], h + i[0], d, f);
			return v.margin = i, v
		}, u.positionGroup = function(t, e, i, n) {
			var o = t.getBoundingRect();
			e = a.extend(a.clone(e), {
				width: o.width,
				height: o.height
			}), e = u.getLayoutRect(e, i, n), t.position = [e.x - o.x, e.y - o.y]
		}, u.mergeLayoutParam = function(t, e, i) {
			function n(n) {
				var a = {},
					s = 0,
					l = {},
					u = 0,
					c = i.ignoreSize ? 1 : 2;
				if (h(n, function(e) {
					l[e] = t[e]
				}), h(n, function(t) {
					o(e, t) && (a[t] = l[t] = e[t]), r(a, t) && s++, r(l, t) && u++
				}), u !== c && s) {
					if (s >= c) return a;
					for (var d = 0; d < n.length; d++) {
						var f = n[d];
						if (!o(a, f) && o(t, f)) {
							a[f] = t[f];
							break
						}
					}
					return a
				}
				return l
			}
			function o(t, e) {
				return t.hasOwnProperty(e)
			}
			function r(t, e) {
				return null != t[e] && "auto" !== t[e]
			}
			function s(t, e, i) {
				h(t, function(t) {
					e[t] = i[t]
				})
			}!a.isObject(i) && (i = {});
			var l = ["width", "left", "right"],
				u = ["height", "top", "bottom"],
				c = n(l),
				d = n(u);
			s(l, t, c), s(u, t, d)
		}, u.getLayoutParams = function(t) {
			return u.copyLayoutParams({}, t)
		}, u.copyLayoutParams = function(t, e) {
			return e && t && h(c, function(i) {
				e.hasOwnProperty(i) && (t[i] = e[i])
			}), t
		}, t.exports = u
	}, function(t, e, i) {
		function n(t, e, i, n) {
			this.parentModel = e, this.ecModel = i, this.option = t, this.init && (arguments.length <= 4 ? this.init(t, e, i, n) : this.init.apply(this, arguments))
		}
		var a = i(1),
			o = i(20);
		n.prototype = {
			constructor: n,
			init: null,
			mergeOption: function(t) {
				a.merge(this.option, t, !0)
			},
			get: function(t, e) {
				if (!t) return this.option;
				"string" == typeof t && (t = t.split("."));
				for (var i = this.option, n = this.parentModel, a = 0; a < t.length && (i = i && "object" == typeof i ? i[t[a]] : null, null != i); a++);
				return null == i && n && !e && (i = n.get(t)), i
			},
			getShallow: function(t, e) {
				var i = this.option,
					n = i && i[t],
					a = this.parentModel;
				return null == n && a && !e && (n = a.getShallow(t)), n
			},
			getModel: function(t, e) {
				var i = this.get(t, !0),
					a = this.parentModel,
					o = new n(i, e || a && a.getModel(t), this.ecModel);
				return o
			},
			isEmpty: function() {
				return null == this.option
			},
			restoreData: function() {},
			clone: function() {
				var t = this.constructor;
				return new t(a.clone(this.option))
			},
			setReadOnly: function(t) {
				o.setReadOnly(this, t)
			}
		}, o.enableClassExtend(n);
		var r = a.mixin;
		r(n, i(118)), r(n, i(115)), r(n, i(119)), r(n, i(117)), t.exports = n
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			a = i(9),
			o = i(7),
			r = i(10),
			s = a.encodeHTML,
			l = a.addCommas,
			h = r.extend({
				type: "series.__base__",
				seriesIndex: 0,
				coordinateSystem: null,
				defaultOption: null,
				legendDataProvider: null,
				init: function(t, e, i, n) {
					this.seriesIndex = this.componentIndex, this.mergeDefaultAndTheme(t, i), this._dataBeforeProcessed = this.getInitialData(t, i), this._data = this._dataBeforeProcessed.cloneShallow()
				},
				mergeDefaultAndTheme: function(t, e) {
					n.merge(t, e.getTheme().get(this.subType)), n.merge(t, this.getDefaultOption()), o.defaultEmphasis(t.label, ["position", "show", "textStyle", "distance", "formatter"]);
					for (var i = t.data || [], a = 0; a < i.length; a++) i[a] && i[a].label && o.defaultEmphasis(i[a].label, ["position", "show", "textStyle", "distance", "formatter"])
				},
				mergeOption: function(t, e) {
					t = n.merge(this.option, t, !0);
					var i = this.getInitialData(t, e);
					i && (this._data = i, this._dataBeforeProcessed = i.cloneShallow())
				},
				getInitialData: function() {},
				getData: function() {
					return this._data
				},
				setData: function(t) {
					this._data = t
				},
				getRawData: function() {
					return this._dataBeforeProcessed
				},
				getRawDataArray: function() {
					return this.option.data
				},
				coordDimToDataDim: function(t) {
					return [t]
				},
				dataDimToCoordDim: function(t) {
					return t
				},
				getBaseAxis: function() {
					var t = this.coordinateSystem;
					return t && t.getBaseAxis && t.getBaseAxis()
				},
				formatTooltip: function(t, e) {
					var i = this._data,
						a = this.getRawValue(t),
						o = n.isArray(a) ? n.map(a, l).join(", ") : l(a),
						r = i.getName(t),
						h = i.getItemVisual(t, "color"),
						u = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + h + '"></span>';
					return e ? u + s(this.name) + " : " + o : s(this.name) + "<br />" + u + (r ? s(r) + " : " + o : o)
				},
				restoreData: function() {
					this._data = this._dataBeforeProcessed.cloneShallow()
				}
			});
		n.mixin(h, o.dataFormatMixin), t.exports = h
	}, function(t, e, i) {
		(function(e) {
			function n(t) {
				return d.isArray(t) || (t = [t]), t
			}
			function a(t, e) {
				var i = t.dimensions,
					n = new v(d.map(i, t.getDimensionInfo, t), t.hostModel);
				m(n, t, t._wrappedMethods);
				for (var a = n._storage = {}, o = t._storage, r = 0; r < i.length; r++) {
					var s = i[r],
						l = o[s];
					d.indexOf(e, s) >= 0 ? a[s] = new l.constructor(o[s].length) : a[s] = o[s]
				}
				return n
			}
			var o = "undefined",
				r = "undefined" == typeof window ? e : window,
				s = typeof r.Float64Array === o ? Array : r.Float64Array,
				l = typeof r.Int32Array === o ? Array : r.Int32Array,
				h = {
					"float": s,
					"int": l,
					ordinal: Array,
					number: Array,
					time: Array
				},
				u = i(12),
				c = i(52),
				d = i(1),
				f = i(7),
				p = d.isObject,
				g = ["stackedOn", "_nameList", "_idList", "_rawData"],
				m = function(t, e, i) {
					d.each(g.concat(i || []), function(i) {
						e.hasOwnProperty(i) && (t[i] = e[i])
					})
				},
				v = function(t, e) {
					t = t || ["x", "y"];
					for (var i = {}, n = [], a = 0; a < t.length; a++) {
						var o, r = {};
						"string" == typeof t[a] ? (o = t[a], r = {
							name: o,
							stackable: !1,
							type: "number"
						}) : (r = t[a], o = r.name, r.type = r.type || "number"), n.push(o), i[o] = r
					}
					this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData, this._extent
				},
				y = v.prototype;
			y.type = "list", y.getDimension = function(t) {
				return isNaN(t) || (t = this.dimensions[t] || t), t
			}, y.getDimensionInfo = function(t) {
				return d.clone(this._dimensionInfos[this.getDimension(t)])
			}, y.initData = function(t, e, i) {
				t = t || [], this._rawData = t;
				var n = this._storage = {},
					a = this.indices = [],
					o = this.dimensions,
					r = t.length,
					s = this._dimensionInfos,
					l = [],
					u = {};
				e = e || [];
				for (var c = 0; c < o.length; c++) {
					var p = s[o[c]],
						g = h[p.type];
					n[o[c]] = new g(r)
				}
				i = i ||
				function(t, e, i, n) {
					var a = f.getDataItemValue(t);
					return f.converDataValue(d.isArray(a) ? a[n] : a, s[e])
				};
				for (var m = 0; m < t.length; m++) {
					for (var v = t[m], y = 0; y < o.length; y++) {
						var x = o[y],
							_ = n[x];
						_[m] = i(v, x, m, y)
					}
					a.push(m)
				}
				for (var c = 0; c < t.length; c++) {
					var w = "";
					e[c] || (e[c] = t[c].name, w = t[c].id);
					var b = e[c] || "";
					!w && b && (u[b] = u[b] || 0, w = b, u[b] > 0 && (w += "__ec__" + u[b]), u[b]++), w && (l[c] = w)
				}
				this._nameList = e, this._idList = l
			}, y.count = function() {
				return this.indices.length
			}, y.get = function(t, e, i) {
				var n = this._storage,
					a = this.indices[e];
				if (null == a) return NaN;
				var o = n[t] && n[t][a];
				if (i) {
					var r = this._dimensionInfos[t];
					if (r && r.stackable) for (var s = this.stackedOn; s;) {
						var l = s.get(t, e);
						(o >= 0 && l > 0 || 0 >= o && 0 > l) && (o += l), s = s.stackedOn
					}
				}
				return o
			}, y.getValues = function(t, e, i) {
				var n = [];
				d.isArray(t) || (i = e, e = t, t = this.dimensions);
				for (var a = 0, o = t.length; o > a; a++) n.push(this.get(t[a], e, i));
				return n
			}, y.hasValue = function(t) {
				for (var e = this.dimensions, i = this._dimensionInfos, n = 0, a = e.length; a > n; n++) if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t))) return !1;
				return !0
			}, y.getDataExtent = function(t, e) {
				var i = this._storage[t],
					n = this.getDimensionInfo(t);
				e = n && n.stackable && e;
				var a, o = (this._extent || (this._extent = {}))[t + !! e];
				if (o) return o;
				if (i) {
					for (var r = 1 / 0, s = -(1 / 0), l = 0, h = this.count(); h > l; l++) a = this.get(t, l, e), r > a && (r = a), a > s && (s = a);
					return this._extent[t + e] = [r, s]
				}
				return [1 / 0, -(1 / 0)];
			}, y.getSum = function(t, e) {
				var i = this._storage[t],
					n = 0;
				if (i) for (var a = 0, o = this.count(); o > a; a++) {
					var r = this.get(t, a, e);
					isNaN(r) || (n += r)
				}
				return n
			}, y.indexOf = function(t, e) {
				var i = this._storage,
					n = i[t],
					a = this.indices;
				if (n) for (var o = 0, r = a.length; r > o; o++) {
					var s = a[o];
					if (n[s] === e) return o
				}
				return -1
			}, y.indexOfName = function(t) {
				for (var e = this.indices, i = this._nameList, n = 0, a = e.length; a > n; n++) {
					var o = e[n];
					if (i[o] === t) return n
				}
				return -1
			}, y.indexOfNearest = function(t, e, i) {
				var n = this._storage,
					a = n[t];
				if (a) {
					for (var o = Number.MAX_VALUE, r = -1, s = 0, l = this.count(); l > s; s++) {
						var h = e - this.get(t, s, i),
							u = Math.abs(h);
						(o > u || u === o && h > 0) && (o = u, r = s)
					}
					return r
				}
				return -1
			}, y.getRawIndex = function(t) {
				var e = this.indices[t];
				return null == e ? -1 : e
			}, y.getName = function(t) {
				return this._nameList[this.indices[t]] || ""
			}, y.getId = function(t) {
				return this._idList[this.indices[t]] || this.getRawIndex(t) + ""
			}, y.each = function(t, e, i, a) {
				"function" == typeof t && (a = i, i = e, e = t, t = []), t = d.map(n(t), this.getDimension, this);
				var o = [],
					r = t.length,
					s = this.indices;
				a = a || this;
				for (var l = 0; l < s.length; l++) if (0 === r) e.call(a, l);
				else if (1 === r) e.call(a, this.get(t[0], l, i), l);
				else {
					for (var h = 0; r > h; h++) o[h] = this.get(t[h], l, i);
					o[h] = l, e.apply(a, o)
				}
			}, y.filterSelf = function(t, e, i, a) {
				"function" == typeof t && (a = i, i = e, e = t, t = []), t = d.map(n(t), this.getDimension, this);
				var o = [],
					r = [],
					s = t.length,
					l = this.indices;
				a = a || this;
				for (var h = 0; h < l.length; h++) {
					var u;
					if (1 === s) u = e.call(a, this.get(t[0], h, i), h);
					else {
						for (var c = 0; s > c; c++) r[c] = this.get(t[c], h, i);
						r[c] = h, u = e.apply(a, r)
					}
					u && o.push(l[h])
				}
				return this.indices = o, this._extent = {}, this
			}, y.mapArray = function(t, e, i, n) {
				"function" == typeof t && (n = i, i = e, e = t, t = []);
				var a = [];
				return this.each(t, function() {
					a.push(e && e.apply(this, arguments))
				}, i, n), a
			}, y.map = function(t, e, i, o) {
				t = d.map(n(t), this.getDimension, this);
				var r = a(this, t),
					s = r.indices = this.indices,
					l = r._storage,
					h = [];
				return this.each(t, function() {
					var i = arguments[arguments.length - 1],
						n = e && e.apply(this, arguments);
					if (null != n) {
						"number" == typeof n && (h[0] = n, n = h);
						for (var a = 0; a < n.length; a++) {
							var o = t[a],
								r = l[o],
								u = s[i];
							r && (r[u] = n[a])
						}
					}
				}, i, o), r
			}, y.downSample = function(t, e, i, n) {
				for (var o = a(this, [t]), r = this._storage, s = o._storage, l = this.indices, h = o.indices = [], u = [], c = [], d = Math.floor(1 / e), f = s[t], p = this.count(), g = 0; g < r[t].length; g++) s[t][g] = r[t][g];
				for (var g = 0; p > g; g += d) {
					d > p - g && (d = p - g, u.length = d);
					for (var m = 0; d > m; m++) {
						var v = l[g + m];
						u[m] = f[v], c[m] = v
					}
					var y = i(u),
						v = c[n(u, y) || 0];
					f[v] = y, h.push(v)
				}
				return o
			}, y.getItemModel = function(t) {
				var e = this.hostModel;
				return t = this.indices[t], new u(this._rawData[t], e, e.ecModel)
			}, y.diff = function(t) {
				var e = this._idList,
					i = t && t._idList;
				return new c(t ? t.indices : [], this.indices, function(t) {
					return i[t] || t + ""
				}, function(t) {
					return e[t] || t + ""
				})
			}, y.getVisual = function(t) {
				var e = this._visual;
				return e && e[t]
			}, y.setVisual = function(t, e) {
				if (p(t)) for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]);
				else this._visual = this._visual || {}, this._visual[t] = e
			}, y.setLayout = function(t, e) {
				if (p(t)) for (var i in t) t.hasOwnProperty(i) && this.setLayout(i, t[i]);
				else this._layout[t] = e
			}, y.getLayout = function(t) {
				return this._layout[t]
			}, y.getItemLayout = function(t) {
				return this._itemLayouts[t]
			}, y.setItemLayout = function(t, e, i) {
				this._itemLayouts[t] = i ? d.extend(this._itemLayouts[t] || {}, e) : e
			}, y.getItemVisual = function(t, e, i) {
				var n = this._itemVisuals[t],
					a = n && n[e];
				return null != a || i ? a : this.getVisual(e)
			}, y.setItemVisual = function(t, e, i) {
				var n = this._itemVisuals[t] || {};
				if (this._itemVisuals[t] = n, p(e)) for (var a in e) e.hasOwnProperty(a) && (n[a] = e[a]);
				else n[e] = i
			};
			var x = function(t) {
					t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex
				};
			y.setItemGraphicEl = function(t, e) {
				var i = this.hostModel;
				e && (e.dataIndex = t, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(x, e)), this._graphicEls[t] = e
			}, y.getItemGraphicEl = function(t) {
				return this._graphicEls[t]
			}, y.eachItemGraphicEl = function(t, e) {
				d.each(this._graphicEls, function(i, n) {
					i && t && t.call(e, i, n)
				})
			}, y.cloneShallow = function() {
				var t = d.map(this.dimensions, this.getDimensionInfo, this),
					e = new v(t, this.hostModel);
				return e._storage = this._storage, m(e, this, this._wrappedMethods), e.indices = this.indices.slice(), e
			}, y.wrapMethod = function(t, e) {
				var i = this[t];
				"function" == typeof i && (this._wrappedMethods = this._wrappedMethods || [], this._wrappedMethods.push(t), this[t] = function() {
					var t = i.apply(this, arguments);
					return e.call(this, t)
				})
			}, t.exports = v
		}).call(e, function() {
			return this
		}())
	}, function(t, e) {
		function i(t) {
			var e = {},
				i = {},
				n = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
				a = t.match(/(Android);?[\s\/]+([\d.]+)?/),
				o = t.match(/(iPad).*OS\s([\d_]+)/),
				r = t.match(/(iPod)(.*OS\s([\d_]+))?/),
				s = !o && t.match(/(iPhone\sOS)\s([\d_]+)/),
				l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
				h = l && t.match(/TouchPad/),
				u = t.match(/Kindle\/([\d.]+)/),
				c = t.match(/Silk\/([\d._]+)/),
				d = t.match(/(BlackBerry).*Version\/([\d.]+)/),
				f = t.match(/(BB10).*Version\/([\d.]+)/),
				p = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
				g = t.match(/PlayBook/),
				m = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
				v = t.match(/Firefox\/([\d.]+)/),
				y = n && t.match(/Mobile\//) && !m,
				x = t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !m,
				_ = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
				w = t.match(/Edge\/([\d.]+)/);
			return (i.webkit = !! n) && (i.version = n[1]), a && (e.android = !0, e.version = a[2]), s && !r && (e.ios = e.iphone = !0, e.version = s[2].replace(/_/g, ".")), o && (e.ios = e.ipad = !0, e.version = o[2].replace(/_/g, ".")), r && (e.ios = e.ipod = !0, e.version = r[3] ? r[3].replace(/_/g, ".") : null), l && (e.webos = !0, e.version = l[2]), h && (e.touchpad = !0), d && (e.blackberry = !0, e.version = d[2]), f && (e.bb10 = !0, e.version = f[2]), p && (e.rimtabletos = !0, e.version = p[2]), g && (i.playbook = !0), u && (e.kindle = !0, e.version = u[1]), c && (i.silk = !0, i.version = c[1]), !c && e.android && t.match(/Kindle Fire/) && (i.silk = !0), m && (i.chrome = !0, i.version = m[1]), v && (i.firefox = !0, i.version = v[1]), _ && (i.ie = !0, i.version = _[1]), y && (t.match(/Safari/) || e.ios) && (i.safari = !0), x && (i.webview = !0), _ && (i.ie = !0, i.version = _[1]), w && (i.edge = !0, i.version = w[1]), e.tablet = !! (o || g || a && !t.match(/Mobile/) || v && t.match(/Tablet/) || _ && !t.match(/Phone/) && t.match(/Touch/)), e.phone = !(e.tablet || e.ipod || !(a || s || l || d || f || m && t.match(/Android/) || m && t.match(/CriOS\/([\d.]+)/) || v && t.match(/Mobile/) || _ && t.match(/Touch/))), {
				browser: i,
				os: e,
				node: !1,
				canvasSupported: !! document.createElement("canvas").getContext,
				touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
				pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 10)
			}
		}
		var n = {};
		n = "undefined" == typeof navigator ? {
			browser: {},
			os: {},
			node: !0,
			canvasSupported: !0
		} : i(navigator.userAgent), t.exports = n
	}, function(t, e) {
		var i = function(t) {
				this.colorStops = t || []
			};
		i.prototype = {
			constructor: i,
			addColorStop: function(t, e) {
				this.colorStops.push({
					offset: t,
					color: e
				})
			}
		}, t.exports = i
	}, function(t, e, i) {
		function n(t, e) {
			var i = t + ":" + e;
			if (h[i]) return h[i];
			for (var n = (t + "").split("\n"), a = 0, o = 0, r = n.length; r > o; o++) a = Math.max(p.measureText(n[o], e).width, a);
			return u > c && (u = 0, h = {}), u++, h[i] = a, a
		}
		function a(t, e, i, a) {
			var o = ((t || "") + "").split("\n").length,
				r = n(t, e),
				s = n("国", e),
				l = o * s,
				h = new f(0, 0, r, l);
			switch (h.lineHeight = s, a) {
			case "bottom":
			case "alphabetic":
				h.y -= s;
				break;
			case "middle":
				h.y -= s / 2
			}
			switch (i) {
			case "end":
			case "right":
				h.x -= h.width;
				break;
			case "center":
				h.x -= h.width / 2
			}
			return h
		}
		function o(t, e, i, n) {
			var a = e.x,
				o = e.y,
				r = e.height,
				s = e.width,
				l = i.height,
				h = r / 2 - l / 2,
				u = "left";
			switch (t) {
			case "left":
				a -= n, o += h, u = "right";
				break;
			case "right":
				a += n + s, o += h, u = "left";
				break;
			case "top":
				a += s / 2, o -= n + l, u = "center";
				break;
			case "bottom":
				a += s / 2, o += r + n, u = "center";
				break;
			case "inside":
				a += s / 2, o += h, u = "center";
				break;
			case "insideLeft":
				a += n, o += h, u = "left";
				break;
			case "insideRight":
				a += s - n, o += h, u = "right";
				break;
			case "insideTop":
				a += s / 2, o += n, u = "center";
				break;
			case "insideBottom":
				a += s / 2, o += r - l - n, u = "center";
				break;
			case "insideTopLeft":
				a += n, o += n, u = "left";
				break;
			case "insideTopRight":
				a += s - n, o += n, u = "right";
				break;
			case "insideBottomLeft":
				a += n, o += r - l - n;
				break;
			case "insideBottomRight":
				a += s - n, o += r - l - n, u = "right"
			}
			return {
				x: a,
				y: o,
				textAlign: u,
				textBaseline: "top"
			}
		}
		function r(t, e, i, a) {
			if (!i) return "";
			a = d.defaults({
				ellipsis: "...",
				minCharacters: 3,
				maxIterations: 3,
				cnCharWidth: n("国", e),
				ascCharWidth: n("a", e)
			}, a, !0), i -= n(a.ellipsis);
			for (var o = (t + "").split("\n"), r = 0, l = o.length; l > r; r++) o[r] = s(o[r], e, i, a);
			return o.join("\n")
		}
		function s(t, e, i, a) {
			for (var o = 0;; o++) {
				var r = n(t, e);
				if (i > r || o >= a.maxIterations) {
					t += a.ellipsis;
					break
				}
				var s = 0 === o ? l(t, i, a) : Math.floor(t.length * i / r);
				if (s < a.minCharacters) {
					t = "";
					break
				}
				t = t.substr(0, s)
			}
			return t
		}
		function l(t, e, i) {
			for (var n = 0, a = 0, o = t.length; o > a && e > n; a++) {
				var r = t.charCodeAt(a);
				n += r >= 0 && 127 >= r ? i.ascCharWidth : i.cnCharWidth
			}
			return a
		}
		var h = {},
			u = 0,
			c = 5e3,
			d = i(1),
			f = i(8),
			p = {
				getWidth: n,
				getBoundingRect: a,
				adjustTextPositionOnRect: o,
				ellipsis: r,
				measureText: function(t, e) {
					var i = d.getContext();
					return i.font = e, i.measureText(t)
				}
			};
		t.exports = p
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return t > -b && b > t
		}
		function a(t) {
			return t > b || -b > t
		}
		function o(t, e, i, n, a) {
			var o = 1 - a;
			return o * o * (o * t + 3 * a * e) + a * a * (a * n + 3 * o * i)
		}
		function r(t, e, i, n, a) {
			var o = 1 - a;
			return 3 * (((e - t) * o + 2 * (i - e) * a) * o + (n - i) * a * a)
		}
		function s(t, e, i, a, o, r) {
			var s = a + 3 * (e - i) - t,
				l = 3 * (i - 2 * e + t),
				h = 3 * (e - t),
				u = t - o,
				c = l * l - 3 * s * h,
				d = l * h - 9 * s * u,
				f = h * h - 3 * l * u,
				p = 0;
			if (n(c) && n(d)) if (n(l)) r[0] = 0;
			else {
				var g = -h / l;
				g >= 0 && 1 >= g && (r[p++] = g)
			} else {
				var m = d * d - 4 * c * f;
				if (n(m)) {
					var v = d / c,
						g = -l / s + v,
						y = -v / 2;
					g >= 0 && 1 >= g && (r[p++] = g), y >= 0 && 1 >= y && (r[p++] = y)
				} else if (m > 0) {
					var x = w(m),
						b = c * l + 1.5 * s * (-d + x),
						M = c * l + 1.5 * s * (-d - x);
					b = 0 > b ? -_(-b, A) : _(b, A), M = 0 > M ? -_(-M, A) : _(M, A);
					var g = (-l - (b + M)) / (3 * s);
					g >= 0 && 1 >= g && (r[p++] = g)
				} else {
					var I = (2 * c * l - 3 * s * d) / (2 * w(c * c * c)),
						T = Math.acos(I) / 3,
						C = w(c),
						L = Math.cos(T),
						g = (-l - 2 * C * L) / (3 * s),
						y = (-l + C * (L + S * Math.sin(T))) / (3 * s),
						D = (-l + C * (L - S * Math.sin(T))) / (3 * s);
					g >= 0 && 1 >= g && (r[p++] = g), y >= 0 && 1 >= y && (r[p++] = y), D >= 0 && 1 >= D && (r[p++] = D)
				}
			}
			return p
		}
		function l(t, e, i, o, r) {
			var s = 6 * i - 12 * e + 6 * t,
				l = 9 * e + 3 * o - 3 * t - 9 * i,
				h = 3 * e - 3 * t,
				u = 0;
			if (n(l)) {
				if (a(s)) {
					var c = -h / s;
					c >= 0 && 1 >= c && (r[u++] = c)
				}
			} else {
				var d = s * s - 4 * l * h;
				if (n(d)) r[0] = -s / (2 * l);
				else if (d > 0) {
					var f = w(d),
						c = (-s + f) / (2 * l),
						p = (-s - f) / (2 * l);
					c >= 0 && 1 >= c && (r[u++] = c), p >= 0 && 1 >= p && (r[u++] = p)
				}
			}
			return u
		}
		function h(t, e, i, n, a, o) {
			var r = (e - t) * a + t,
				s = (i - e) * a + e,
				l = (n - i) * a + i,
				h = (s - r) * a + r,
				u = (l - s) * a + s,
				c = (u - h) * a + h;
			o[0] = t, o[1] = r, o[2] = h, o[3] = c, o[4] = c, o[5] = u, o[6] = l, o[7] = n
		}
		function u(t, e, i, n, a, r, s, l, h, u, c) {
			var d, f, p, g, m, v = .005,
				y = 1 / 0;
			I[0] = h, I[1] = u;
			for (var _ = 0; 1 > _; _ += .05) T[0] = o(t, i, a, s, _), T[1] = o(e, n, r, l, _), g = x(I, T), y > g && (d = _, y = g);
			y = 1 / 0;
			for (var b = 0; 32 > b && !(M > v); b++) f = d - v, p = d + v, T[0] = o(t, i, a, s, f), T[1] = o(e, n, r, l, f), g = x(T, I), f >= 0 && y > g ? (d = f, y = g) : (C[0] = o(t, i, a, s, p), C[1] = o(e, n, r, l, p), m = x(C, I), 1 >= p && y > m ? (d = p, y = m) : v *= .5);
			return c && (c[0] = o(t, i, a, s, d), c[1] = o(e, n, r, l, d)), w(y)
		}
		function c(t, e, i, n) {
			var a = 1 - n;
			return a * (a * t + 2 * n * e) + n * n * i
		}
		function d(t, e, i, n) {
			return 2 * ((1 - n) * (e - t) + n * (i - e))
		}
		function f(t, e, i, o, r) {
			var s = t - 2 * e + i,
				l = 2 * (e - t),
				h = t - o,
				u = 0;
			if (n(s)) {
				if (a(l)) {
					var c = -h / l;
					c >= 0 && 1 >= c && (r[u++] = c)
				}
			} else {
				var d = l * l - 4 * s * h;
				if (n(d)) {
					var c = -l / (2 * s);
					c >= 0 && 1 >= c && (r[u++] = c)
				} else if (d > 0) {
					var f = w(d),
						c = (-l + f) / (2 * s),
						p = (-l - f) / (2 * s);
					c >= 0 && 1 >= c && (r[u++] = c), p >= 0 && 1 >= p && (r[u++] = p)
				}
			}
			return u
		}
		function p(t, e, i) {
			var n = t + i - 2 * e;
			return 0 === n ? .5 : (t - e) / n
		}
		function g(t, e, i, n, a) {
			var o = (e - t) * n + t,
				r = (i - e) * n + e,
				s = (r - o) * n + o;
			a[0] = t, a[1] = o, a[2] = s, a[3] = s, a[4] = r, a[5] = i
		}
		function m(t, e, i, n, a, o, r, s, l) {
			var h, u = .005,
				d = 1 / 0;
			I[0] = r, I[1] = s;
			for (var f = 0; 1 > f; f += .05) {
				T[0] = c(t, i, a, f), T[1] = c(e, n, o, f);
				var p = x(I, T);
				d > p && (h = f, d = p)
			}
			d = 1 / 0;
			for (var g = 0; 32 > g && !(M > u); g++) {
				var m = h - u,
					v = h + u;
				T[0] = c(t, i, a, m), T[1] = c(e, n, o, m);
				var p = x(T, I);
				if (m >= 0 && d > p) h = m, d = p;
				else {
					C[0] = c(t, i, a, v), C[1] = c(e, n, o, v);
					var y = x(C, I);
					1 >= v && d > y ? (h = v, d = y) : u *= .5
				}
			}
			return l && (l[0] = c(t, i, a, h), l[1] = c(e, n, o, h)), w(d)
		}
		var v = i(5),
			y = v.create,
			x = v.distSquare,
			_ = Math.pow,
			w = Math.sqrt,
			b = 1e-8,
			M = 1e-4,
			S = w(3),
			A = 1 / 3,
			I = y(),
			T = y(),
			C = y();
		t.exports = {
			cubicAt: o,
			cubicDerivativeAt: r,
			cubicRootAt: s,
			cubicExtrema: l,
			cubicSubdivide: h,
			cubicProjectPoint: u,
			quadraticAt: c,
			quadraticDerivativeAt: d,
			quadraticRootAt: f,
			quadraticExtremum: p,
			quadraticSubdivide: g,
			quadraticProjectPoint: m
		}
	}, function(t, e) {
		var i = "undefined" == typeof Float32Array ? Array : Float32Array,
			n = {
				create: function() {
					var t = new i(6);
					return n.identity(t), t
				},
				identity: function(t) {
					return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
				},
				copy: function(t, e) {
					return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
				},
				mul: function(t, e, i) {
					var n = e[0] * i[0] + e[2] * i[1],
						a = e[1] * i[0] + e[3] * i[1],
						o = e[0] * i[2] + e[2] * i[3],
						r = e[1] * i[2] + e[3] * i[3],
						s = e[0] * i[4] + e[2] * i[5] + e[4],
						l = e[1] * i[4] + e[3] * i[5] + e[5];
					return t[0] = n, t[1] = a, t[2] = o, t[3] = r, t[4] = s, t[5] = l, t
				},
				translate: function(t, e, i) {
					return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
				},
				rotate: function(t, e, i) {
					var n = e[0],
						a = e[2],
						o = e[4],
						r = e[1],
						s = e[3],
						l = e[5],
						h = Math.sin(i),
						u = Math.cos(i);
					return t[0] = n * u + r * h, t[1] = -n * h + r * u, t[2] = a * u + s * h, t[3] = -a * h + u * s, t[4] = u * o + h * l, t[5] = u * l - h * o, t
				},
				scale: function(t, e, i) {
					var n = i[0],
						a = i[1];
					return t[0] = e[0] * n, t[1] = e[1] * a, t[2] = e[2] * n, t[3] = e[3] * a, t[4] = e[4] * n, t[5] = e[5] * a, t
				},
				invert: function(t, e) {
					var i = e[0],
						n = e[2],
						a = e[4],
						o = e[1],
						r = e[3],
						s = e[5],
						l = i * r - o * n;
					return l ? (l = 1 / l, t[0] = r * l, t[1] = -o * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - r * a) * l, t[5] = (o * a - i * s) * l, t) : null
				}
			};
		t.exports = n
	}, function(t, e, i) {
		function n(t, e) {
			var i = o.slice(arguments, 2);
			return this.superClass.prototype[e].apply(t, i)
		}
		function a(t, e, i) {
			return this.superClass.prototype[e].apply(t, i)
		}
		var o = i(1),
			r = {},
			s = ".",
			l = "___EC__COMPONENT__CONTAINER___",
			h = r.parseClassType = function(t) {
				var e = {
					main: "",
					sub: ""
				};
				return t && (t = t.split(s), e.main = t[0] || "", e.sub = t[1] || ""), e
			};
		r.enableClassExtend = function(t, e) {
			t.extend = function(i) {
				var r = function() {
						e && e.apply(this, arguments), t.apply(this, arguments)
					};
				return o.extend(r.prototype, i), r.extend = this.extend, r.superCall = n, r.superApply = a, o.inherits(r, this), r.superClass = this, r
			}
		}, r.enableClassManagement = function(t, e) {
			function i(t) {
				var e = n[t.main];
				return e && e[l] || (e = n[t.main] = {}, e[l] = !0), e
			}
			e = e || {};
			var n = {};
			if (t.registerClass = function(t, e) {
				if (e) if (e = h(e), e.sub) {
					if (e.sub !== l) {
						var a = i(e);
						a[e.sub] = t
					}
				} else {
					if (n[e.main]) throw new Error(e.main + "exists.");
					n[e.main] = t
				}
				return t
			}, t.getClass = function(t, e, i) {
				var a = n[t];
				if (a && a[l] && (a = e ? a[e] : null), i && !a) throw new Error("Component " + t + "." + (e || "") + " not exists. Load it first.");
				return a
			}, t.getClassesByMainType = function(t) {
				t = h(t);
				var e = [],
					i = n[t.main];
				return i && i[l] ? o.each(i, function(t, i) {
					i !== l && e.push(t)
				}) : e.push(i), e
			}, t.hasClass = function(t) {
				return t = h(t), !! n[t.main]
			}, t.getAllClassMainTypes = function() {
				var t = [];
				return o.each(n, function(e, i) {
					t.push(i)
				}), t
			}, t.hasSubTypes = function(t) {
				t = h(t);
				var e = n[t.main];
				return e && e[l]
			}, t.parseClassType = h, e.registerWhenExtend) {
				var a = t.extend;
				a && (t.extend = function(e) {
					var i = a.call(this, e);
					return t.registerClass(i, e.type)
				})
			}
			return t
		}, r.setReadOnly = function(t, e) {}, t.exports = r
	}, function(t, e, i) {
		var n = Array.prototype.slice,
			a = i(1),
			o = a.indexOf,
			r = function() {
				this._$handlers = {}
			};
		r.prototype = {
			constructor: r,
			one: function(t, e, i) {
				var n = this._$handlers;
				return e && t ? (n[t] || (n[t] = []), o(n[t], t) >= 0 ? this : (n[t].push({
					h: e,
					one: !0,
					ctx: i || this
				}), this)) : this
			},
			on: function(t, e, i) {
				var n = this._$handlers;
				return e && t ? (n[t] || (n[t] = []), n[t].push({
					h: e,
					one: !1,
					ctx: i || this
				}), this) : this
			},
			isSilent: function(t) {
				var e = this._$handlers;
				return e[t] && e[t].length
			},
			off: function(t, e) {
				var i = this._$handlers;
				if (!t) return this._$handlers = {}, this;
				if (e) {
					if (i[t]) {
						for (var n = [], a = 0, o = i[t].length; o > a; a++) i[t][a].h != e && n.push(i[t][a]);
						i[t] = n
					}
					i[t] && 0 === i[t].length && delete i[t]
				} else delete i[t];
				return this
			},
			trigger: function(t) {
				if (this._$handlers[t]) {
					var e = arguments,
						i = e.length;
					i > 3 && (e = n.call(e, 1));
					for (var a = this._$handlers[t], o = a.length, r = 0; o > r;) {
						switch (i) {
						case 1:
							a[r].h.call(a[r].ctx);
							break;
						case 2:
							a[r].h.call(a[r].ctx, e[1]);
							break;
						case 3:
							a[r].h.call(a[r].ctx, e[1], e[2]);
							break;
						default:
							a[r].h.apply(a[r].ctx, e)
						}
						a[r].one ? (a.splice(r, 1), o--) : r++
					}
				}
				return this
			},
			triggerWithContext: function(t) {
				if (this._$handlers[t]) {
					var e = arguments,
						i = e.length;
					i > 4 && (e = n.call(e, 1, e.length - 1));
					for (var a = e[e.length - 1], o = this._$handlers[t], r = o.length, s = 0; r > s;) {
						switch (i) {
						case 1:
							o[s].h.call(a);
							break;
						case 2:
							o[s].h.call(a, e[1]);
							break;
						case 3:
							o[s].h.call(a, e[1], e[2]);
							break;
						default:
							o[s].h.apply(a, e)
						}
						o[s].one ? (o.splice(s, 1), r--) : s++
					}
				}
				return this
			}
		}, t.exports = r
	}, function(t, e) {
		function i(t) {
			return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
		}
		function n(t) {
			return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
		}
		function a(t) {
			return 0 > t ? 0 : t > 1 ? 1 : t
		}
		function o(t) {
			return i(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
		}
		function r(t) {
			return a(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
		}
		function s(t, e, i) {
			return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
		}
		function l(t, e, i) {
			return t + (e - t) * i
		}
		function h(t) {
			if (t) {
				t += "";
				var e = t.replace(/ /g, "").toLowerCase();
				if (e in _) return _[e].slice();
				if ("#" !== e.charAt(0)) {
					var i = e.indexOf("("),
						n = e.indexOf(")");
					if (-1 !== i && n + 1 === e.length) {
						var a = e.substr(0, i),
							s = e.substr(i + 1, n - (i + 1)).split(","),
							l = 1;
						switch (a) {
						case "rgba":
							if (4 !== s.length) return;
							l = r(s.pop());
						case "rgb":
							if (3 !== s.length) return;
							return [o(s[0]), o(s[1]), o(s[2]), l];
						case "hsla":
							if (4 !== s.length) return;
							return s[3] = r(s[3]), u(s);
						case "hsl":
							if (3 !== s.length) return;
							return u(s);
						default:
							return
						}
					}
				} else {
					if (4 === e.length) {
						var h = parseInt(e.substr(1), 16);
						if (!(h >= 0 && 4095 >= h)) return;
						return [(3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1]
					}
					if (7 === e.length) {
						var h = parseInt(e.substr(1), 16);
						if (!(h >= 0 && 16777215 >= h)) return;
						return [(16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1]
					}
				}
			}
		}
		function u(t) {
			var e = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
				n = r(t[1]),
				a = r(t[2]),
				o = .5 >= a ? a * (n + 1) : a + n - a * n,
				l = 2 * a - o,
				h = [i(255 * s(l, o, e + 1 / 3)), i(255 * s(l, o, e)), i(255 * s(l, o, e - 1 / 3))];
			return 4 === t.length && (h[3] = t[3]), h
		}
		function c(t) {
			if (t) {
				var e, i, n = t[0] / 255,
					a = t[1] / 255,
					o = t[2] / 255,
					r = Math.min(n, a, o),
					s = Math.max(n, a, o),
					l = s - r,
					h = (s + r) / 2;
				if (0 === l) e = 0, i = 0;
				else {
					i = .5 > h ? l / (s + r) : l / (2 - s - r);
					var u = ((s - n) / 6 + l / 2) / l,
						c = ((s - a) / 6 + l / 2) / l,
						d = ((s - o) / 6 + l / 2) / l;
					n === s ? e = d - c : a === s ? e = 1 / 3 + u - d : o === s && (e = 2 / 3 + c - u), 0 > e && (e += 1), e > 1 && (e -= 1)
				}
				var f = [360 * e, i, h];
				return null != t[3] && f.push(t[3]), f
			}
		}
		function d(t, e) {
			var i = h(t);
			if (i) {
				for (var n = 0; 3 > n; n++) 0 > e ? i[n] = i[n] * (1 - e) | 0 : i[n] = (255 - i[n]) * e + i[n] | 0;
				return x(i, 4 === i.length ? "rgba" : "rgb")
			}
		}
		function f(t, e) {
			var i = h(t);
			return i ? ((1 << 24) + (i[0] << 16) + (i[1] << 8) + +i[2]).toString(16).slice(1) : void 0
		}
		function p(t, e, n) {
			if (e && e.length && t >= 0 && 1 >= t) {
				n = n || [0, 0, 0, 0];
				var a = t * (e.length - 1),
					o = Math.floor(a),
					r = Math.ceil(a),
					s = e[o],
					h = e[r],
					u = a - o;
				return n[0] = i(l(s[0], h[0], u)), n[1] = i(l(s[1], h[1], u)), n[2] = i(l(s[2], h[2], u)), n[3] = i(l(s[3], h[3], u)), n
			}
		}
		function g(t, e, n) {
			if (e && e.length && t >= 0 && 1 >= t) {
				var o = t * (e.length - 1),
					r = Math.floor(o),
					s = Math.ceil(o),
					u = h(e[r]),
					c = h(e[s]),
					d = o - r,
					f = x([i(l(u[0], c[0], d)), i(l(u[1], c[1], d)), i(l(u[2], c[2], d)), a(l(u[3], c[3], d))], "rgba");
				return n ? {
					color: f,
					leftIndex: r,
					rightIndex: s,
					value: o
				} : f
			}
		}
		function m(t, e) {
			if (!(2 !== t.length || t[1] < t[0])) {
				for (var i = g(t[0], e, !0), n = g(t[1], e, !0), a = [{
					color: i.color,
					offset: 0
				}], o = n.value - i.value, r = Math.max(i.value, i.rightIndex), s = Math.min(n.value, n.leftIndex), l = r; o > 0 && s >= l; l++) a.push({
					color: e[l],
					offset: (l - i.value) / o
				});
				return a.push({
					color: n.color,
					offset: 1
				}), a
			}
		}
		function v(t, e, i, a) {
			return t = h(t), t ? (t = c(t), null != e && (t[0] = n(e)), null != i && (t[1] = r(i)), null != a && (t[2] = r(a)), x(u(t), "rgba")) : void 0
		}
		function y(t, e) {
			return t = h(t), t && null != e ? (t[3] = a(e), x(t, "rgba")) : void 0
		}
		function x(t, e) {
			return "rgb" !== e && "hsv" !== e && "hsl" !== e || (t = t.slice(0, 3)), e + "(" + t.join(",") + ")"
		}
		var _ = {
			transparent: [0, 0, 0, 0],
			aliceblue: [240, 248, 255, 1],
			antiquewhite: [250, 235, 215, 1],
			aqua: [0, 255, 255, 1],
			aquamarine: [127, 255, 212, 1],
			azure: [240, 255, 255, 1],
			beige: [245, 245, 220, 1],
			bisque: [255, 228, 196, 1],
			black: [0, 0, 0, 1],
			blanchedalmond: [255, 235, 205, 1],
			blue: [0, 0, 255, 1],
			blueviolet: [138, 43, 226, 1],
			brown: [165, 42, 42, 1],
			burlywood: [222, 184, 135, 1],
			cadetblue: [95, 158, 160, 1],
			chartreuse: [127, 255, 0, 1],
			chocolate: [210, 105, 30, 1],
			coral: [255, 127, 80, 1],
			cornflowerblue: [100, 149, 237, 1],
			cornsilk: [255, 248, 220, 1],
			crimson: [220, 20, 60, 1],
			cyan: [0, 255, 255, 1],
			darkblue: [0, 0, 139, 1],
			darkcyan: [0, 139, 139, 1],
			darkgoldenrod: [184, 134, 11, 1],
			darkgray: [169, 169, 169, 1],
			darkgreen: [0, 100, 0, 1],
			darkgrey: [169, 169, 169, 1],
			darkkhaki: [189, 183, 107, 1],
			darkmagenta: [139, 0, 139, 1],
			darkolivegreen: [85, 107, 47, 1],
			darkorange: [255, 140, 0, 1],
			darkorchid: [153, 50, 204, 1],
			darkred: [139, 0, 0, 1],
			darksalmon: [233, 150, 122, 1],
			darkseagreen: [143, 188, 143, 1],
			darkslateblue: [72, 61, 139, 1],
			darkslategray: [47, 79, 79, 1],
			darkslategrey: [47, 79, 79, 1],
			darkturquoise: [0, 206, 209, 1],
			darkviolet: [148, 0, 211, 1],
			deeppink: [255, 20, 147, 1],
			deepskyblue: [0, 191, 255, 1],
			dimgray: [105, 105, 105, 1],
			dimgrey: [105, 105, 105, 1],
			dodgerblue: [30, 144, 255, 1],
			firebrick: [178, 34, 34, 1],
			floralwhite: [255, 250, 240, 1],
			forestgreen: [34, 139, 34, 1],
			fuchsia: [255, 0, 255, 1],
			gainsboro: [220, 220, 220, 1],
			ghostwhite: [248, 248, 255, 1],
			gold: [255, 215, 0, 1],
			goldenrod: [218, 165, 32, 1],
			gray: [128, 128, 128, 1],
			green: [0, 128, 0, 1],
			greenyellow: [173, 255, 47, 1],
			grey: [128, 128, 128, 1],
			honeydew: [240, 255, 240, 1],
			hotpink: [255, 105, 180, 1],
			indianred: [205, 92, 92, 1],
			indigo: [75, 0, 130, 1],
			ivory: [255, 255, 240, 1],
			khaki: [240, 230, 140, 1],
			lavender: [230, 230, 250, 1],
			lavenderblush: [255, 240, 245, 1],
			lawngreen: [124, 252, 0, 1],
			lemonchiffon: [255, 250, 205, 1],
			lightblue: [173, 216, 230, 1],
			lightcoral: [240, 128, 128, 1],
			lightcyan: [224, 255, 255, 1],
			lightgoldenrodyellow: [250, 250, 210, 1],
			lightgray: [211, 211, 211, 1],
			lightgreen: [144, 238, 144, 1],
			lightgrey: [211, 211, 211, 1],
			lightpink: [255, 182, 193, 1],
			lightsalmon: [255, 160, 122, 1],
			lightseagreen: [32, 178, 170, 1],
			lightskyblue: [135, 206, 250, 1],
			lightslategray: [119, 136, 153, 1],
			lightslategrey: [119, 136, 153, 1],
			lightsteelblue: [176, 196, 222, 1],
			lightyellow: [255, 255, 224, 1],
			lime: [0, 255, 0, 1],
			limegreen: [50, 205, 50, 1],
			linen: [250, 240, 230, 1],
			magenta: [255, 0, 255, 1],
			maroon: [128, 0, 0, 1],
			mediumaquamarine: [102, 205, 170, 1],
			mediumblue: [0, 0, 205, 1],
			mediumorchid: [186, 85, 211, 1],
			mediumpurple: [147, 112, 219, 1],
			mediumseagreen: [60, 179, 113, 1],
			mediumslateblue: [123, 104, 238, 1],
			mediumspringgreen: [0, 250, 154, 1],
			mediumturquoise: [72, 209, 204, 1],
			mediumvioletred: [199, 21, 133, 1],
			midnightblue: [25, 25, 112, 1],
			mintcream: [245, 255, 250, 1],
			mistyrose: [255, 228, 225, 1],
			moccasin: [255, 228, 181, 1],
			navajowhite: [255, 222, 173, 1],
			navy: [0, 0, 128, 1],
			oldlace: [253, 245, 230, 1],
			olive: [128, 128, 0, 1],
			olivedrab: [107, 142, 35, 1],
			orange: [255, 165, 0, 1],
			orangered: [255, 69, 0, 1],
			orchid: [218, 112, 214, 1],
			palegoldenrod: [238, 232, 170, 1],
			palegreen: [152, 251, 152, 1],
			paleturquoise: [175, 238, 238, 1],
			palevioletred: [219, 112, 147, 1],
			papayawhip: [255, 239, 213, 1],
			peachpuff: [255, 218, 185, 1],
			peru: [205, 133, 63, 1],
			pink: [255, 192, 203, 1],
			plum: [221, 160, 221, 1],
			powderblue: [176, 224, 230, 1],
			purple: [128, 0, 128, 1],
			red: [255, 0, 0, 1],
			rosybrown: [188, 143, 143, 1],
			royalblue: [65, 105, 225, 1],
			saddlebrown: [139, 69, 19, 1],
			salmon: [250, 128, 114, 1],
			sandybrown: [244, 164, 96, 1],
			seagreen: [46, 139, 87, 1],
			seashell: [255, 245, 238, 1],
			sienna: [160, 82, 45, 1],
			silver: [192, 192, 192, 1],
			skyblue: [135, 206, 235, 1],
			slateblue: [106, 90, 205, 1],
			slategray: [112, 128, 144, 1],
			slategrey: [112, 128, 144, 1],
			snow: [255, 250, 250, 1],
			springgreen: [0, 255, 127, 1],
			steelblue: [70, 130, 180, 1],
			tan: [210, 180, 140, 1],
			teal: [0, 128, 128, 1],
			thistle: [216, 191, 216, 1],
			tomato: [255, 99, 71, 1],
			turquoise: [64, 224, 208, 1],
			violet: [238, 130, 238, 1],
			wheat: [245, 222, 179, 1],
			white: [255, 255, 255, 1],
			whitesmoke: [245, 245, 245, 1],
			yellow: [255, 255, 0, 1],
			yellowgreen: [154, 205, 50, 1]
		};
		t.exports = {
			parse: h,
			lift: d,
			toHex: f,
			fastMapToColor: p,
			mapToColor: g,
			mapIntervalToColor: m,
			modifyHSL: v,
			modifyAlpha: y,
			stringify: x
		}
	}, function(t, e, i) {
		var n = i(124),
			a = i(37);
		i(125), i(123);
		var o = i(32),
			r = i(4),
			s = i(1),
			l = i(17),
			h = {};
		h.getScaleExtent = function(t, e) {
			var i = t.scale,
				n = i.getExtent(),
				a = n[1] - n[0];
			if ("ordinal" === i.type) return isFinite(a) ? n : [0, 0];
			var o = e.getMin ? e.getMin() : e.get("min"),
				l = e.getMax ? e.getMax() : e.get("max"),
				h = e.getNeedCrossZero ? e.getNeedCrossZero() : !e.get("scale"),
				u = e.get("boundaryGap");
			s.isArray(u) || (u = [u || 0, u || 0]), u[0] = r.parsePercent(u[0], 1), u[1] = r.parsePercent(u[1], 1);
			var c = !0,
				d = !0;
			return null == o && (o = n[0] - u[0] * a, c = !1), null == l && (l = n[1] + u[1] * a, d = !1), "dataMin" === o && (o = n[0]), "dataMax" === l && (l = n[1]), h && (o > 0 && l > 0 && !c && (o = 0), 0 > o && 0 > l && !d && (l = 0)), [o, l]
		}, h.niceScaleExtent = function(t, e) {
			var i = t.scale,
				n = h.getScaleExtent(t, e),
				a = null != (e.getMin ? e.getMin() : e.get("min")),
				o = null != (e.getMax ? e.getMax() : e.get("max"));
			i.setExtent(n[0], n[1]), i.niceExtent(e.get("splitNumber"), a, o);
			var r = e.get("interval");
			null != r && i.setInterval && i.setInterval(r)
		}, h.createScaleByModel = function(t, e) {
			if (e = e || t.get("type")) switch (e) {
			case "category":
				return new n(t.getCategories(), [1 / 0, -(1 / 0)]);
			case "value":
				return new a;
			default:
				return (o.getClass(e) || a).create(t)
			}
		}, h.ifAxisCrossZero = function(t) {
			var e = t.scale.getExtent(),
				i = e[0],
				n = e[1];
			return !(i > 0 && n > 0 || 0 > i && 0 > n)
		}, h.getAxisLabelInterval = function(t, e, i, n) {
			var a, o = 0,
				r = 0,
				s = 1;
			e.length > 40 && (s = Math.round(e.length / 40));
			for (var h = 0; h < t.length; h += s) {
				var u = t[h],
					c = l.getBoundingRect(e[h], i, "center", "top");
				c[n ? "x" : "y"] += u, c[n ? "width" : "height"] *= 1.5, a ? a.intersect(c) ? (r++, o = Math.max(o, r)) : (a.union(c), r = 0) : a = c.clone()
			}
			return 0 === o && s > 1 ? s : o * s
		}, h.getFormattedLabels = function(t, e) {
			var i = t.scale,
				n = i.getTicksLabels(),
				a = i.getTicks();
			return "string" == typeof e ? (e = function(t) {
				return function(e) {
					return t.replace("{value}", e)
				}
			}(e), s.map(n, e)) : "function" == typeof e ? s.map(a, function(n, a) {
				return e("category" === t.type ? i.getLabel(n) : n, a)
			}, this) : n
		}, t.exports = h
	}, function(t, e, i) {
		"use strict";
		var n = i(3),
			a = i(8),
			o = n.extendShape({
				type: "triangle",
				shape: {
					cx: 0,
					cy: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e.cx,
						n = e.cy,
						a = e.width / 2,
						o = e.height / 2;
					t.moveTo(i, n - o), t.lineTo(i + a, n + o), t.lineTo(i - a, n + o), t.closePath()
				}
			}),
			r = n.extendShape({
				type: "diamond",
				shape: {
					cx: 0,
					cy: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e.cx,
						n = e.cy,
						a = e.width / 2,
						o = e.height / 2;
					t.moveTo(i, n - o), t.lineTo(i + a, n), t.lineTo(i, n + o), t.lineTo(i - a, n), t.closePath()
				}
			}),
			s = n.extendShape({
				type: "pin",
				shape: {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e.x,
						n = e.y,
						a = e.width / 5 * 3,
						o = Math.max(a, e.height),
						r = a / 2,
						s = r * r / (o - r),
						l = n - o + r + s,
						h = Math.asin(s / r),
						u = Math.cos(h) * r,
						c = Math.sin(h),
						d = Math.cos(h);
					t.arc(i, l, r, Math.PI - h, 2 * Math.PI + h);
					var f = .6 * r,
						p = .7 * r;
					t.bezierCurveTo(i + u - c * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - u + c * f, l + s + d * f, i - u, l + s), t.closePath()
				}
			}),
			l = n.extendShape({
				type: "arrow",
				shape: {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				},
				buildPath: function(t, e) {
					var i = e.height,
						n = e.width,
						a = e.x,
						o = e.y,
						r = n / 3 * 2;
					t.moveTo(a, o), t.lineTo(a + r, o + i), t.lineTo(a, o + i / 4 * 3), t.lineTo(a - r, o + i), t.lineTo(a, o), t.closePath()
				}
			}),
			h = {
				line: n.Line,
				rect: n.Rect,
				roundRect: n.Rect,
				square: n.Rect,
				circle: n.Circle,
				diamond: r,
				pin: s,
				arrow: l,
				triangle: o
			},
			u = {
				line: function(t, e, i, n, a) {
					a.x1 = t, a.y1 = e + n / 2, a.x2 = t + i, a.y2 = e + n / 2
				},
				rect: function(t, e, i, n, a) {
					a.x = t, a.y = e, a.width = i, a.height = n
				},
				roundRect: function(t, e, i, n, a) {
					a.x = t, a.y = e, a.width = i, a.height = n, a.r = Math.min(i, n) / 4
				},
				square: function(t, e, i, n, a) {
					var o = Math.min(i, n);
					a.x = t, a.y = e, a.width = o, a.height = o
				},
				circle: function(t, e, i, n, a) {
					a.cx = t + i / 2, a.cy = e + n / 2, a.r = Math.min(i, n) / 2
				},
				diamond: function(t, e, i, n, a) {
					a.cx = t + i / 2, a.cy = e + n / 2, a.width = i, a.height = n
				},
				pin: function(t, e, i, n, a) {
					a.x = t + i / 2, a.y = e + n / 2, a.width = i, a.height = n
				},
				arrow: function(t, e, i, n, a) {
					a.x = t + i / 2, a.y = e + n / 2, a.width = i, a.height = n
				},
				triangle: function(t, e, i, n, a) {
					a.cx = t + i / 2, a.cy = e + n / 2, a.width = i, a.height = n
				}
			},
			c = {};
		for (var d in h) c[d] = new h[d];
		var f = n.extendShape({
			type: "symbol",
			shape: {
				symbolType: "",
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			beforeBrush: function() {
				var t = this.style,
					e = this.shape;
				"pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
			},
			buildPath: function(t, e) {
				var i = e.symbolType,
					n = c[i];
				"none" !== e.symbolType && (n || (i = "rect", n = c[i]), u[i](e.x, e.y, e.width, e.height, n.shape), n.buildPath(t, n.shape))
			}
		}),
			p = function(t) {
				if ("image" !== this.type) {
					var e = this.style,
						i = this.shape;
					i && "line" === i.symbolType ? e.stroke = t : this.__isEmptyBrush ? (e.stroke = t, e.fill = "#fff") : (e.fill && (e.fill = t), e.stroke && (e.stroke = t)), this.dirty()
				}
			},
			g = {
				createSymbol: function(t, e, i, o, r, s) {
					var l = 0 === t.indexOf("empty");
					l && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
					var h;
					return h = 0 === t.indexOf("image://") ? new n.Image({
						style: {
							image: t.slice(8),
							x: e,
							y: i,
							width: o,
							height: r
						}
					}) : 0 === t.indexOf("path://") ? n.makePath(t.slice(7), {}, new a(e, i, o, r)) : new f({
						shape: {
							symbolType: t,
							x: e,
							y: i,
							width: o,
							height: r
						}
					}), h.__isEmptyBrush = l, h.setColor = p, h.setColor(s), h
				}
			};
		t.exports = g
	}, function(t, e, i) {
		function n() {
			this.group = new r, this.uid = s.getUID("viewChart")
		}
		function a(t, e) {
			if (t && (t.trigger(e), "group" === t.type)) for (var i = 0; i < t.childCount(); i++) a(t.childAt(i), e)
		}
		function o(t, e, i) {
			if (null != e.dataIndex) {
				var n = t.getItemGraphicEl(e.dataIndex);
				a(n, i)
			} else if (e.name) {
				var o = t.indexOfName(e.name),
					n = t.getItemGraphicEl(o);
				a(n, i)
			} else t.eachItemGraphicEl(function(t) {
				a(t, i)
			})
		}
		var r = i(26),
			s = i(41),
			l = i(20);
		n.prototype = {
			type: "chart",
			init: function(t, e) {},
			render: function(t, e, i, n) {},
			highlight: function(t, e, i, n) {
				o(t.getData(), n, "emphasis")
			},
			downplay: function(t, e, i, n) {
				o(t.getData(), n, "normal")
			},
			remove: function(t, e) {
				this.group.removeAll()
			},
			dispose: function() {}
		};
		var h = n.prototype;
		h.updateView = h.updateLayout = h.updateVisual = function(t, e, i, n) {
			this.render(t, e, i, n)
		}, l.enableClassExtend(n), l.enableClassManagement(n, {
			registerWhenExtend: !0
		}), t.exports = n
	}, function(t, e, i) {
		var n = i(1),
			a = i(55),
			o = i(8),
			r = function(t) {
				t = t || {}, a.call(this, t);
				for (var e in t) this[e] = t[e];
				this._children = [], this.__storage = null, this.__dirty = !0
			};
		r.prototype = {
			constructor: r,
			type: "group",
			silent: !1,
			children: function() {
				return this._children.slice()
			},
			childAt: function(t) {
				return this._children[t]
			},
			childOfName: function(t) {
				for (var e = this._children, i = 0; i < e.length; i++) if (e[i].name === t) return e[i]
			},
			childCount: function() {
				return this._children.length
			},
			add: function(t) {
				return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
			},
			addBefore: function(t, e) {
				if (t && t !== this && t.parent !== this && e && e.parent === this) {
					var i = this._children,
						n = i.indexOf(e);
					n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
				}
				return this
			},
			_doAdd: function(t) {
				t.parent && t.parent.remove(t), t.parent = this;
				var e = this.__storage,
					i = this.__zr;
				e && e !== t.__storage && (e.addToMap(t), t instanceof r && t.addChildrenToStorage(e)), i && i.refresh()
			},
			remove: function(t) {
				var e = this.__zr,
					i = this.__storage,
					a = this._children,
					o = n.indexOf(a, t);
				return 0 > o ? this : (a.splice(o, 1), t.parent = null, i && (i.delFromMap(t.id), t instanceof r && t.delChildrenFromStorage(i)), e && e.refresh(), this)
			},
			removeAll: function() {
				var t, e, i = this._children,
					n = this.__storage;
				for (e = 0; e < i.length; e++) t = i[e], n && (n.delFromMap(t.id), t instanceof r && t.delChildrenFromStorage(n)), t.parent = null;
				return i.length = 0, this
			},
			eachChild: function(t, e) {
				for (var i = this._children, n = 0; n < i.length; n++) {
					var a = i[n];
					t.call(e, a, n)
				}
				return this
			},
			traverse: function(t, e) {
				for (var i = 0; i < this._children.length; i++) {
					var n = this._children[i];
					t.call(e, n), "group" === n.type && n.traverse(t, e)
				}
				return this
			},
			addChildrenToStorage: function(t) {
				for (var e = 0; e < this._children.length; e++) {
					var i = this._children[e];
					t.addToMap(i), i instanceof r && i.addChildrenToStorage(t)
				}
			},
			delChildrenFromStorage: function(t) {
				for (var e = 0; e < this._children.length; e++) {
					var i = this._children[e];
					t.delFromMap(i.id), i instanceof r && i.delChildrenFromStorage(t)
				}
			},
			dirty: function() {
				return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
			},
			getBoundingRect: function(t) {
				for (var e = null, i = new o(0, 0, 0, 0), n = t || this._children, a = [], r = 0; r < n.length; r++) {
					var s = n[r];
					if (!s.ignore && !s.invisible) {
						var l = s.getBoundingRect(),
							h = s.getLocalTransform(a);
						h ? (i.copy(l), i.applyTransform(h), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
					}
				}
				return e || i
			}
		}, n.inherits(r, a), t.exports = r
	}, function(t, e, i) {
		"use strict";
		var n = i(18),
			a = i(5),
			o = i(64),
			r = i(8),
			s = {
				M: 1,
				L: 2,
				C: 3,
				Q: 4,
				A: 5,
				Z: 6,
				R: 7
			},
			l = [],
			h = [],
			u = [],
			c = [],
			d = Math.min,
			f = Math.max,
			p = Math.cos,
			g = Math.sin,
			m = Math.sqrt,
			v = "undefined" != typeof Float32Array,
			y = function() {
				this.data = [], this._len = 0, this._ctx = null, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0
			};
		y.prototype = {
			constructor: y,
			_lineDash: null,
			_dashOffset: 0,
			_dashIdx: 0,
			_dashSum: 0,
			getContext: function() {
				return this._ctx
			},
			beginPath: function(t) {
				return this._ctx = t, t && t.beginPath(), this._len = 0, this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
			},
			moveTo: function(t, e) {
				return this.addData(s.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
			},
			lineTo: function(t, e) {
				return this.addData(s.L, t, e), this._ctx && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), this._xi = t, this._yi = e, this
			},
			bezierCurveTo: function(t, e, i, n, a, o) {
				return this.addData(s.C, t, e, i, n, a, o), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, a, o) : this._ctx.bezierCurveTo(t, e, i, n, a, o)), this._xi = a, this._yi = o, this
			},
			quadraticCurveTo: function(t, e, i, n) {
				return this.addData(s.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
			},
			arc: function(t, e, i, n, a, o) {
				return this.addData(s.A, t, e, i, i, n, a - n, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, a, o), this._xi = p(a) * i + t, this._xi = g(a) * i + t, this
			},
			arcTo: function(t, e, i, n, a) {
				return this._ctx && this._ctx.arcTo(t, e, i, n, a), this
			},
			rect: function(t, e, i, n) {
				return this._ctx && this._ctx.rect(t, e, i, n), this.addData(s.R, t, e, i, n), this
			},
			closePath: function() {
				this.addData(s.Z);
				var t = this._ctx,
					e = this._x0,
					i = this._y0;
				return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
			},
			fill: function(t) {
				t && t.fill(), this.toStatic()
			},
			stroke: function(t) {
				t && t.stroke(), this.toStatic()
			},
			setLineDash: function(t) {
				if (t instanceof Array) {
					this._lineDash = t, this._dashIdx = 0;
					for (var e = 0, i = 0; i < t.length; i++) e += t[i];
					this._dashSum = e
				}
				return this
			},
			setLineDashOffset: function(t) {
				return this._dashOffset = t, this
			},
			len: function() {
				return this._len
			},
			setData: function(t) {
				var e = t.length;
				this.data && this.data.length == e || !v || (this.data = new Float32Array(e));
				for (var i = 0; e > i; i++) this.data[i] = t[i];
				this._len = e
			},
			appendPath: function(t) {
				t instanceof Array || (t = [t]);
				for (var e = t.length, i = 0, n = this._len, a = 0; e > a; a++) i += t[a].len();
				v && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
				for (var a = 0; e > a; a++) for (var o = t[a].data, r = 0; r < o.length; r++) this.data[n++] = o[r];
				this._len = n
			},
			addData: function(t) {
				var e = this.data;
				this._len + arguments.length > e.length && (this._expandData(), e = this.data);
				for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
				this._prevCmd = t
			},
			_expandData: function() {
				if (!(this.data instanceof Array)) {
					for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
					this.data = t
				}
			},
			_needsDash: function() {
				return this._lineDash
			},
			_dashedLineTo: function(t, e) {
				var i, n, a = this._dashSum,
					o = this._dashOffset,
					r = this._lineDash,
					s = this._ctx,
					l = this._xi,
					h = this._yi,
					u = t - l,
					c = e - h,
					p = m(u * u + c * c),
					g = l,
					v = h,
					y = r.length;
				for (u /= p, c /= p, 0 > o && (o = a + o), o %= a, g -= o * u, v -= o * c; u >= 0 && t >= g || 0 > u && g > t;) n = this._dashIdx, i = r[n], g += u * i, v += c * i, this._dashIdx = (n + 1) % y, u > 0 && l > g || 0 > u && g > l || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? d(g, t) : f(g, t), c >= 0 ? d(v, e) : f(v, e));
				u = g - t, c = v - e, this._dashOffset = -m(u * u + c * c)
			},
			_dashedBezierTo: function(t, e, i, a, o, r) {
				var s, l, h, u, c, d = this._dashSum,
					f = this._dashOffset,
					p = this._lineDash,
					g = this._ctx,
					v = this._xi,
					y = this._yi,
					x = n.cubicAt,
					_ = 0,
					w = this._dashIdx,
					b = p.length,
					M = 0;
				for (0 > f && (f = d + f), f %= d, s = 0; 1 > s; s += .1) l = x(v, t, i, o, s + .1) - x(v, t, i, o, s), h = x(y, e, a, r, s + .1) - x(y, e, a, r, s), _ += m(l * l + h * h);
				for (; b > w && (M += p[w], !(M > f)); w++);
				for (s = (M - f) / _; 1 >= s;) u = x(v, t, i, o, s), c = x(y, e, a, r, s), w % 2 ? g.moveTo(u, c) : g.lineTo(u, c), s += p[w] / _, w = (w + 1) % b;
				w % 2 !== 0 && g.lineTo(o, r), l = o - u, h = r - c, this._dashOffset = -m(l * l + h * h)
			},
			_dashedQuadraticTo: function(t, e, i, n) {
				var a = i,
					o = n;
				i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, a, o)
			},
			toStatic: function() {
				var t = this.data;
				t instanceof Array && (t.length = this._len, v && (this.data = new Float32Array(t)))
			},
			getBoundingRect: function() {
				l[0] = l[1] = u[0] = u[1] = Number.MAX_VALUE, h[0] = h[1] = c[0] = c[1] = -Number.MAX_VALUE;
				for (var t = this.data, e = 0, i = 0, n = 0, d = 0, f = 0; f < t.length;) {
					var m = t[f++];
					switch (1 == f && (e = t[f], i = t[f + 1], n = e, d = i), m) {
					case s.M:
						n = t[f++], d = t[f++], e = n, i = d, u[0] = n, u[1] = d, c[0] = n, c[1] = d;
						break;
					case s.L:
						o.fromLine(e, i, t[f], t[f + 1], u, c), e = t[f++], i = t[f++];
						break;
					case s.C:
						o.fromCubic(e, i, t[f++], t[f++], t[f++], t[f++], t[f], t[f + 1], u, c), e = t[f++], i = t[f++];
						break;
					case s.Q:
						o.fromQuadratic(e, i, t[f++], t[f++], t[f], t[f + 1], u, c), e = t[f++], i = t[f++];
						break;
					case s.A:
						var v = t[f++],
							y = t[f++],
							x = t[f++],
							_ = t[f++],
							w = t[f++],
							b = t[f++] + w,
							M = (t[f++], 1 - t[f++]);
						1 == f && (n = p(w) * x + v, d = g(w) * _ + y), o.fromArc(v, y, x, _, w, b, M, u, c), e = p(b) * x + v, i = g(b) * _ + y;
						break;
					case s.R:
						n = e = t[f++], d = i = t[f++];
						var S = t[f++],
							A = t[f++];
						o.fromLine(n, d, n + S, d + A, u, c);
						break;
					case s.Z:
						e = n, i = d
					}
					a.min(l, l, u), a.max(h, h, c)
				}
				return 0 === f && (l[0] = l[1] = h[0] = h[1] = 0), new r(l[0], l[1], h[0] - l[0], h[1] - l[1])
			},
			rebuildPath: function(t) {
				for (var e = this.data, i = 0; i < this._len;) {
					var n = e[i++];
					switch (n) {
					case s.M:
						t.moveTo(e[i++], e[i++]);
						break;
					case s.L:
						t.lineTo(e[i++], e[i++]);
						break;
					case s.C:
						t.bezierCurveTo(e[i++], e[i++], e[i++], e[i++], e[i++], e[i++]);
						break;
					case s.Q:
						t.quadraticCurveTo(e[i++], e[i++], e[i++], e[i++]);
						break;
					case s.A:
						var a = e[i++],
							o = e[i++],
							r = e[i++],
							l = e[i++],
							h = e[i++],
							u = e[i++],
							c = e[i++],
							d = e[i++],
							f = r > l ? r : l,
							p = r > l ? 1 : r / l,
							g = r > l ? l / r : 1,
							m = Math.abs(r - l) > .001;
						m ? (t.translate(a, o), t.rotate(c), t.scale(p, g), t.arc(0, 0, f, h, h + u, 1 - d), t.scale(1 / p, 1 / g), t.rotate(-c), t.translate(-a, -o)) : t.arc(a, o, f, h, h + u, 1 - d);
						break;
					case s.R:
						t.rect(e[i++], e[i++], e[i++], e[i++]);
						break;
					case s.Z:
						t.closePath()
					}
				}
			}
		}, y.CMD = s, t.exports = y
	}, function(t, e) {
		"use strict";

		function i() {
			this._coordinateSystems = []
		}
		var n = {};
		i.prototype = {
			constructor: i,
			create: function(t, e) {
				var i = [];
				for (var a in n) {
					var o = n[a].create(t, e);
					o && (i = i.concat(o))
				}
				this._coordinateSystems = i
			},
			update: function(t, e) {
				for (var i = this._coordinateSystems, n = 0; n < i.length; n++) i[n].update && i[n].update(t, e)
			}
		}, i.register = function(t, e) {
			n[t] = e
		}, i.get = function(t) {
			return n[t]
		}, t.exports = i
	}, function(t, e) {
		"use strict";
		var i = {};
		t.exports = {
			register: function(t, e) {
				i[t] = e
			},
			get: function(t) {
				return i[t]
			}
		}
	}, function(t, e, i) {
		var n = i(1);
		t.exports = function(t) {
			for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
			return function(e) {
				for (var i = {}, a = 0; a < t.length; a++) {
					var o = t[a][1];
					if (!(e && n.indexOf(e, o) >= 0)) {
						var r = this.getShallow(o);
						null != r && (i[t[a][0]] = r)
					}
				}
				return i
			}
		}
	}, function(t, e, i) {
		function n(t, e, i, n) {
			if (!e) return t;
			var s = o(e[0]),
				l = r.isArray(s) && s.length || 1;
			i = i || [], n = n || "extra";
			for (var h = 0; l > h; h++) if (!t[h]) {
				var u = i[h] || n + (h - i.length);
				t[h] = a(e, h) ? {
					type: "ordinal",
					name: u
				} : u
			}
			return t
		}
		function a(t, e) {
			for (var i = 0, n = t.length; n > i; i++) {
				var a = o(t[i]);
				if (!r.isArray(a)) return !1;
				var a = a[e];
				if (null != a && isFinite(a)) return !1;
				if (r.isString(a) && "-" !== a) return !0
			}
			return !1
		}
		function o(t) {
			return r.isArray(t) ? t : r.isObject(t) ? t.value : t
		}
		var r = i(1);
		t.exports = n
	}, function(t, e, i) {
		function n() {
			this._extent = [1 / 0, -(1 / 0)], this._interval = 0, this.init && this.init.apply(this, arguments)
		}
		var a = i(20),
			o = n.prototype;
		o.parse = function(t) {
			return t
		}, o.contain = function(t) {
			var e = this._extent;
			return t >= e[0] && t <= e[1]
		}, o.normalize = function(t) {
			var e = this._extent;
			return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
		}, o.scale = function(t) {
			var e = this._extent;
			return t * (e[1] - e[0]) + e[0]
		}, o.unionExtent = function(t) {
			var e = this._extent;
			t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
		}, o.getExtent = function() {
			return this._extent.slice()
		}, o.setExtent = function(t, e) {
			var i = this._extent;
			isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
		}, o.getTicksLabels = function() {
			for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++) t.push(this.getLabel(e[i]));
			return t
		}, a.enableClassExtend(n), a.enableClassManagement(n, {
			registerWhenExtend: !0
		}), t.exports = n
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return t.getBoundingClientRect ? t.getBoundingClientRect() : {
				left: 0,
				top: 0
			}
		}
		function a(t, e) {
			if (e = e || window.event, null != e.zrX) return e;
			var i = e.type,
				a = i && i.indexOf("touch") >= 0;
			if (a) {
				var o = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
				if (o) {
					var r = n(t);
					e.zrX = o.clientX - r.left, e.zrY = o.clientY - r.top
				}
			} else {
				var s = n(t);
				e.zrX = e.clientX - s.left, e.zrY = e.clientY - s.top, e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3
			}
			return e
		}
		function o(t, e, i) {
			l ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
		}
		function r(t, e, i) {
			l ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
		}
		var s = i(21),
			l = "undefined" != typeof window && !! window.addEventListener,
			h = l ?
		function(t) {
			t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
		} : function(t) {
			t.returnValue = !1, t.cancelBubble = !0
		};
		t.exports = {
			normalizeEvent: a,
			addEventListener: o,
			removeEventListener: r,
			stop: h,
			Dispatcher: s
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(3),
			a = i(1);
		i(51), i(96), i(2).extendComponentView({
			type: "grid",
			render: function(t, e) {
				this.group.removeAll(), t.get("show") && this.group.add(new n.Rect({
					shape: t.coordinateSystem.getRect(),
					style: a.defaults({
						fill: t.get("backgroundColor")
					}, t.getItemStyle()),
					silent: !0
				}))
			}
		})
	}, function(t, e, i) {
		function n(t) {
			t = t || {}, r.call(this, t);
			for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
			this.style = new o(t.style), this._rect = null, this.__clipPaths = []
		}
		var a = i(1),
			o = i(142),
			r = i(55),
			s = i(66);
		n.prototype = {
			constructor: n,
			type: "displayable",
			__dirty: !0,
			invisible: !1,
			z: 0,
			z2: 0,
			zlevel: 0,
			draggable: !1,
			dragging: !1,
			silent: !1,
			culling: !1,
			cursor: "pointer",
			rectHover: !1,
			beforeBrush: function(t) {},
			afterBrush: function(t) {},
			brush: function(t) {},
			getBoundingRect: function() {},
			contain: function(t, e) {
				return this.rectContain(t, e)
			},
			traverse: function(t, e) {
				t.call(e, this)
			},
			rectContain: function(t, e) {
				var i = this.transformCoordToLocal(t, e),
					n = this.getBoundingRect();
				return n.contain(i[0], i[1])
			},
			dirty: function() {
				this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
			},
			animateStyle: function(t) {
				return this.animate("style", t)
			},
			attrKV: function(t, e) {
				"style" !== t ? r.prototype.attrKV.call(this, t, e) : this.style.set(e)
			},
			setStyle: function(t, e) {
				return this.style.set(t, e), this.dirty(!1), this
			}
		}, a.inherits(n, r), a.mixin(n, s), t.exports = n
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			for (var e = 0; e < t.length && null == t[e];) e++;
			return t[e]
		}
		function a(t) {
			var e = n(t);
			return null != e && !c.isArray(p(e))
		}
		function o(t, e, i) {
			t = t || [];
			var n = e.get("coordinateSystem"),
				o = m[n],
				r = f.get(n),
				s = o && o(t, e, i),
				d = s && s.dimensions;
			d || (d = r && r.dimensions || ["x", "y"], d = u(d, t, d.concat(["value"])));
			var v, y = s && s.categoryAxisModel,
				x = "ordinal" === d[0].type ? 0 : "ordinal" === d[1].type ? 1 : -1,
				_ = new h(d, e),
				w = l(s, t),
				b = y && a(t) ?
			function(t, e, i, n) {
				return n === x ? i : g(p(t), d[n])
			} : function(t, e, i, n) {
				var a = p(t),
					o = g(a && a[n], d[n]);
				return x === n && "string" == typeof o && (v = v || y.getCategories(), o = c.indexOf(v, o), 0 > o && !isNaN(o) && (o = +o)), o
			};
			return _.initData(t, w, b), _
		}
		function r(t) {
			return "category" !== t && "time" !== t
		}
		function s(t) {
			return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
		}
		function l(t, e) {
			var i = [];
			if (t && t.categoryAxisModel) {
				var n = t.categoryAxisModel.getCategories();
				if (n) {
					var a = e.length;
					if (c.isArray(e[0]) && e[0].length > 1) {
						i = [];
						for (var o = 0; a > o; o++) i[o] = n[e[o][t.categoryIndex || 0]]
					} else i = n.slice(0)
				}
			}
			return i
		}
		var h = i(14),
			u = i(31),
			c = i(1),
			d = i(7),
			f = i(28),
			p = d.getDataItemValue,
			g = d.converDataValue,
			m = {
				cartesian2d: function(t, e, i) {
					var n = i.getComponent("xAxis", e.get("xAxisIndex")),
						a = i.getComponent("yAxis", e.get("yAxisIndex")),
						o = n.get("type"),
						l = a.get("type"),
						h = [{
							name: "x",
							type: s(o),
							stackable: r(o)
						}, {
							name: "y",
							type: s(l),
							stackable: r(l)
						}],
						c = "category" === o;
					return u(h, t, ["x", "y", "z"]), {
						dimensions: h,
						categoryIndex: c ? 0 : 1,
						categoryAxisModel: c ? n : "category" === l ? a : null
					}
				},
				polar: function(t, e, i) {
					var n = e.get("polarIndex") || 0,
						a = function(t) {
							return t.get("polarIndex") === n
						},
						o = i.findComponents({
							mainType: "angleAxis",
							filter: a
						})[0],
						l = i.findComponents({
							mainType: "radiusAxis",
							filter: a
						})[0],
						h = l.get("type"),
						c = o.get("type"),
						d = [{
							name: "radius",
							type: s(h),
							stackable: r(h)
						}, {
							name: "angle",
							type: s(c),
							stackable: r(c)
						}],
						f = "category" === c;
					return u(d, t, ["radius", "angle", "value"]), {
						dimensions: d,
						categoryIndex: f ? 1 : 0,
						categoryAxisModel: f ? o : "category" === h ? l : null
					}
				},
				geo: function(t, e, i) {
					return {
						dimensions: u([{
							name: "lng"
						}, {
							name: "lat"
						}], t, ["lng", "lat", "value"])
					}
				}
			};
		t.exports = o
	}, function(t, e, i) {
		var n = i(4),
			a = i(9),
			o = i(32),
			r = Math.floor,
			s = Math.ceil,
			l = o.extend({
				type: "interval",
				_interval: 0,
				setExtent: function(t, e) {
					var i = this._extent;
					isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
				},
				unionExtent: function(t) {
					var e = this._extent;
					t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), l.prototype.setExtent.call(this, e[0], e[1])
				},
				getInterval: function() {
					return this._interval || this.niceTicks(), this._interval
				},
				setInterval: function(t) {
					this._interval = t, this._niceExtent = this._extent.slice()
				},
				getTicks: function() {
					this._interval || this.niceTicks();
					var t = this._interval,
						e = this._extent,
						i = [],
						a = 1e4;
					if (t) {
						var o = this._niceExtent;
						e[0] < o[0] && i.push(e[0]);
						for (var r = o[0]; r <= o[1];) if (i.push(r), r = n.round(r + t), i.length > a) return [];
						e[1] > o[1] && i.push(e[1])
					}
					return i
				},
				getTicksLabels: function() {
					for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++) t.push(this.getLabel(e[i]));
					return t
				},
				getLabel: function(t) {
					return a.addCommas(t)
				},
				niceTicks: function(t) {
					t = t || 5;
					var e = this._extent,
						i = e[1] - e[0];
					if (isFinite(i)) {
						0 > i && (i = -i, e.reverse());
						var a = n.nice(i / t, !0),
							o = [n.round(s(e[0] / a) * a), n.round(r(e[1] / a) * a)];
						this._interval = a, this._niceExtent = o
					}
				},
				niceExtent: function(t, e, i) {
					var a = this._extent;
					if (a[0] === a[1]) if (0 !== a[0]) {
						var o = a[0] / 2;
						a[0] -= o, a[1] += o
					} else a[1] = 1;
					var l = a[1] - a[0];
					isFinite(l) || (a[0] = 0, a[1] = 1), this.niceTicks(t);
					var h = this._interval;
					e || (a[0] = n.round(r(a[0] / h) * h)), i || (a[1] = n.round(s(a[1] / h) * h))
				}
			});
		l.create = function() {
			return new l
		}, t.exports = l
	}, function(t, e, i) {
		function n(t) {
			this.group = new o.Group, this._symbolCtor = t || r
		}
		function a(t, e, i) {
			var n = t.getItemLayout(e);
			return n && !isNaN(n[0]) && !isNaN(n[1]) && !(i && i(e)) && "none" !== t.getItemVisual(e, "symbol")
		}
		var o = i(3),
			r = i(47),
			s = n.prototype;
		s.updateData = function(t, e) {
			var i = this.group,
				n = t.hostModel,
				r = this._data,
				s = this._symbolCtor;
			t.diff(r).add(function(n) {
				var o = t.getItemLayout(n);
				if (a(t, n, e)) {
					var r = new s(t, n);
					r.attr("position", o), t.setItemGraphicEl(n, r), i.add(r)
				}
			}).update(function(l, h) {
				var u = r.getItemGraphicEl(h),
					c = t.getItemLayout(l);
				return a(t, l, e) ? (u ? (u.updateData(t, l), o.updateProps(u, {
					position: c
				}, n)) : (u = new s(t, l), u.attr("position", c)), i.add(u), void t.setItemGraphicEl(l, u)) : void i.remove(u)
			}).remove(function(t) {
				var e = r.getItemGraphicEl(t);
				e && e.fadeOut(function() {
					i.remove(e)
				})
			}).execute(), this._data = t
		}, s.updateLayout = function() {
			var t = this._data;
			t && t.eachItemGraphicEl(function(e, i) {
				e.attr("position", t.getItemLayout(i))
			})
		}, s.remove = function(t) {
			var e = this.group,
				i = this._data;
			i && (t ? i.eachItemGraphicEl(function(t) {
				t.fadeOut(function() {
					e.remove(t)
				})
			}) : e.removeAll())
		}, t.exports = n
	}, function(t, e, i) {
		function n(t) {
			var e = {};
			return u(["start", "end", "startValue", "endValue"], function(i) {
				e[i] = t[i]
			}), e
		}
		function a(t, e, i, n) {
			null != i[e] && null == i[t] && (n[t] = null)
		}
		var o = i(1),
			r = i(15),
			s = i(2),
			l = i(7),
			h = i(167),
			u = o.each,
			c = l.eachAxisDim,
			d = s.extendComponentModel({
				type: "dataZoom",
				dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "series"],
				defaultOption: {
					zlevel: 0,
					z: 4,
					orient: null,
					xAxisIndex: null,
					yAxisIndex: null,
					angleAxisIndex: null,
					radiusAxisIndex: null,
					filterMode: "filter",
					throttle: 100,
					start: 0,
					end: 100,
					startValue: null,
					endValue: null
				},
				init: function(t, e, i) {
					this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel;
					var a = n(t);
					this.mergeDefaultAndTheme(t, i), this.doInit(a)
				},
				mergeOption: function(t) {
					var e = n(t);
					o.merge(this.option, t, !0), this.doInit(e)
				},
				doInit: function(t) {
					var e = this.option;
					r.canvasSupported || (e.realtime = !1), a("start", "startValue", t, e), a("end", "endValue", t, e), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies()
				},
				_giveAxisProxies: function() {
					var t = this._axisProxies;
					this.eachTargetAxis(function(e, i, n, a) {
						var o = this.dependentModels[e.axis][i],
							r = o.__dzAxisProxy || (o.__dzAxisProxy = new h(e.name, i, this, a));
						t[e.name + "_" + i] = r
					}, this)
				},
				_resetTarget: function() {
					var t = this.option,
						e = this._judgeAutoMode();
					c(function(e) {
						var i = e.axisIndex;
						t[i] = l.normalizeToArray(t[i])
					}, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
				},
				_judgeAutoMode: function() {
					var t = this.option,
						e = !1;
					c(function(i) {
						null != t[i.axisIndex] && (e = !0)
					}, this);
					var i = t.orient;
					return null == i && e ? "orient" : e ? void 0 : (null == i && (t.orient = "horizontal"), "axisIndex")
				},
				_autoSetAxisIndex: function() {
					var t = !0,
						e = this.get("orient", !0),
						i = this.option;
					if (t) {
						var n = "vertical" === e ? {
							dim: "y",
							axisIndex: "yAxisIndex",
							axis: "yAxis"
						} : {
							dim: "x",
							axisIndex: "xAxisIndex",
							axis: "xAxis"
						};
						this.dependentModels[n.axis].length && (i[n.axisIndex] = [0], t = !1)
					}
					t && c(function(e) {
						if (t) {
							var n = [],
								a = this.dependentModels[e.axis];
							if (a.length && !n.length) for (var o = 0, r = a.length; r > o; o++)"category" === a[o].get("type") && n.push(o);
							i[e.axisIndex] = n, n.length && (t = !1)
						}
					}, this), t && this.ecModel.eachSeries(function(t) {
						this._isSeriesHasAllAxesTypeOf(t, "value") && c(function(e) {
							var n = i[e.axisIndex],
								a = t.get(e.axisIndex);
							o.indexOf(n, a) < 0 && n.push(a)
						})
					}, this)
				},
				_autoSetOrient: function() {
					var t;
					this.eachTargetAxis(function(e) {
						!t && (t = e.name)
					}, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
				},
				_isSeriesHasAllAxesTypeOf: function(t, e) {
					var i = !0;
					return c(function(n) {
						var a = t.get(n.axisIndex),
							o = this.dependentModels[n.axis][a];
						o && o.get("type") === e || (i = !1)
					}, this), i
				},
				getFirstTargetAxisModel: function() {
					var t;
					return c(function(e) {
						if (null == t) {
							var i = this.get(e.axisIndex);
							i.length && (t = this.dependentModels[e.axis][i[0]])
						}
					}, this), t
				},
				eachTargetAxis: function(t, e) {
					var i = this.ecModel;
					c(function(n) {
						u(this.get(n.axisIndex), function(a) {
							t.call(e, n, a, this, i)
						}, this)
					}, this)
				},
				getAxisProxy: function(t, e) {
					return this._axisProxies[t + "_" + e]
				},
				setRawRange: function(t) {
					u(["start", "end", "startValue", "endValue"], function(e) {
						this.option[e] = t[e]
					}, this)
				},
				getPercentRange: function() {
					var t = this.findRepresentativeAxisProxy();
					return t ? t.getDataPercentWindow() : void 0
				},
				getValueRange: function(t, e) {
					if (null != t || null != e) return this.getAxisProxy(t, e).getDataValueWindow();
					var i = this.findRepresentativeAxisProxy();
					return i ? i.getDataValueWindow() : void 0
				},
				findRepresentativeAxisProxy: function() {
					var t = this._axisProxies;
					for (var e in t) if (t.hasOwnProperty(e) && t[e].hostedBy(this)) return t[e];
					for (var e in t) if (t.hasOwnProperty(e) && !t[e].hostedBy(this)) return t[e]
				}
			});
		t.exports = d
	}, function(t, e, i) {
		var n = i(54);
		t.exports = n.extend({
			type: "dataZoom",
			render: function(t, e, i, n) {
				this.dataZoomModel = t, this.ecModel = e, this.api = i
			},
			getTargetInfo: function() {
				function t(t, e, i, n) {
					for (var a, o = 0; o < i.length; o++) if (i[o].model === t) {
						a = i[o];
						break
					}
					a || i.push(a = {
						model: t,
						axisModels: [],
						coordIndex: n
					}), a.axisModels.push(e)
				}
				var e = this.dataZoomModel,
					i = this.ecModel,
					n = [],
					a = [],
					o = [];
				return e.eachTargetAxis(function(e, r) {
					var s = i.getComponent(e.axis, r);
					if (s) {
						o.push(s);
						var l = s.get("gridIndex"),
							h = s.get("polarIndex");
						if (null != l) {
							var u = i.getComponent("grid", l);
							t(u, s, n, l)
						} else if (null != h) {
							var u = i.getComponent("polar", h);
							t(u, s, a, h)
						}
					}
				}, this), {
					cartesians: n,
					polars: a,
					axisModels: o
				}
			}
		})
	}, function(t, e, i) {
		var n = i(1),
			a = i(20),
			o = a.parseClassType,
			r = 0,
			s = {},
			l = "_";
		s.getUID = function(t) {
			return [t || "", r++, Math.random()].join(l)
		}, s.enableSubTypeDefaulter = function(t) {
			var e = {};
			return t.registerSubTypeDefaulter = function(t, i) {
				t = o(t), e[t.main] = i
			}, t.determineSubType = function(i, n) {
				var a = n.type;
				if (!a) {
					var r = o(i).main;
					t.hasSubTypes(i) && e[r] && (a = e[r](n))
				}
				return a
			}, t
		}, s.enableTopologicalTravel = function(t, e) {
			function i(t) {
				var i = {},
					r = [];
				return n.each(t, function(s) {
					var l = a(i, s),
						h = l.originalDeps = e(s),
						u = o(h, t);
					l.entryCount = u.length, 0 === l.entryCount && r.push(s), n.each(u, function(t) {
						n.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t);
						var e = a(i, t);
						n.indexOf(e.successor, t) < 0 && e.successor.push(s)
					})
				}), {
					graph: i,
					noEntryList: r
				}
			}
			function a(t, e) {
				return t[e] || (t[e] = {
					predecessor: [],
					successor: []
				}), t[e]
			}
			function o(t, e) {
				var i = [];
				return n.each(t, function(t) {
					n.indexOf(e, t) >= 0 && i.push(t)
				}), i
			}
			t.topologicalTravel = function(t, e, a, o) {
				function r(t) {
					h[t].entryCount--, 0 === h[t].entryCount && u.push(t)
				}
				function s(t) {
					c[t] = !0, r(t)
				}
				if (t.length) {
					var l = i(e),
						h = l.graph,
						u = l.noEntryList,
						c = {};
					for (n.each(t, function(t) {
						c[t] = !0
					}); u.length;) {
						var d = u.pop(),
							f = h[d],
							p = !! c[d];
						p && (a.call(o, d, f.originalDeps.slice()), delete c[d]), n.each(f.successor, p ? s : r)
					}
					n.each(c, function() {
						throw new Error("Circle dependency may exists")
					})
				}
			}
		}, t.exports = s
	}, function(t, e) {
		var i = 1;
		"undefined" != typeof window && (i = Math.max(window.devicePixelRatio || 1, 1));
		var n = {
			debugMode: 0,
			devicePixelRatio: i
		};
		t.exports = n
	}, function(t, e, i) {
		function n(t, e) {
			var i = t[1] - t[0],
				n = e,
				a = i / n / 2;
			t[0] += a, t[1] -= a
		}
		var a = i(4),
			o = a.linearMap,
			r = i(1),
			s = [0, 1],
			l = function(t, e, i) {
				this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
			};
		l.prototype = {
			constructor: l,
			contain: function(t) {
				var e = this._extent,
					i = Math.min(e[0], e[1]),
					n = Math.max(e[0], e[1]);
				return t >= i && n >= t
			},
			containData: function(t) {
				return this.contain(this.dataToCoord(t))
			},
			getExtent: function() {
				var t = this._extent.slice();
				return t
			},
			getPixelPrecision: function(t) {
				return a.getPixelPrecision(t || this.scale.getExtent(), this._extent)
			},
			setExtent: function(t, e) {
				var i = this._extent;
				i[0] = t, i[1] = e
			},
			dataToCoord: function(t, e) {
				var i = this._extent,
					a = this.scale;
				return t = a.normalize(t), this.onBand && "ordinal" === a.type && (i = i.slice(), n(i, a.count())), o(t, s, i, e)
			},
			coordToData: function(t, e) {
				var i = this._extent,
					a = this.scale;
				this.onBand && "ordinal" === a.type && (i = i.slice(), n(i, a.count()));
				var r = o(t, i, s, e);
				return this.scale.scale(r)
			},
			getTicksCoords: function() {
				if (this.onBand) {
					for (var t = this.getBands(), e = [], i = 0; i < t.length; i++) e.push(t[i][0]);
					return t[i - 1] && e.push(t[i - 1][1]), e
				}
				return r.map(this.scale.getTicks(), this.dataToCoord, this)
			},
			getLabelsCoords: function() {
				if (this.onBand) {
					for (var t, e = this.getBands(), i = [], n = 0; n < e.length; n++) t = e[n], i.push((t[0] + t[1]) / 2);
					return i
				}
				return r.map(this.scale.getTicks(), this.dataToCoord, this)
			},
			getBands: function() {
				for (var t = this.getExtent(), e = [], i = this.scale.count(), n = t[0], a = t[1], o = a - n, r = 0; i > r; r++) e.push([o * r / i + n, o * (r + 1) / i + n]);
				return e
			},
			getBandWidth: function() {
				var t = this._extent,
					e = this.scale.getExtent(),
					i = e[1] - e[0] + (this.onBand ? 1 : 0);
				0 === i && (i = 1);
				var n = Math.abs(t[1] - t[0]);
				return Math.abs(n) / i
			}
		}, t.exports = l
	}, function(t, e) {
		t.exports = function(t, e, i, n, a) {
			n.eachRawSeriesByType(t, function(t) {
				var a = t.getData(),
					o = t.get("symbol") || e,
					r = t.get("symbolSize");
				a.setVisual({
					legendSymbol: i || o,
					symbol: o,
					symbolSize: r
				}), n.isSeriesFiltered(t) || ("function" == typeof r && a.each(function(e) {
					var i = t.getRawValue(e),
						n = t.getDataParams(e);
					a.setItemVisual(e, "symbolSize", r(i, n))
				}), a.each(function(t) {
					var e = a.getItemModel(t),
						i = e.get("symbol", !0),
						n = e.get("symbolSize", !0);
					null != i && a.setItemVisual(t, "symbol", i), null != n && a.setItemVisual(t, "symbolSize", n)
				}))
			})
		}
	}, function(t, e, i) {
		var n = i(42);
		t.exports = function() {
			if (0 !== n.debugMode) if (1 == n.debugMode) for (var t in arguments) throw new Error(arguments[t]);
			else if (n.debugMode > 1) for (var t in arguments) console.log(arguments[t])
		}
	}, function(t, e, i) {
		function n(t) {
			a.call(this, t)
		}
		var a = i(35),
			o = i(8),
			r = i(1),
			s = i(60),
			l = i(140),
			h = new l(50);
		n.prototype = {
			constructor: n,
			type: "image",
			brush: function(t) {
				var e, i = this.style,
					n = i.image;
				if (e = "string" == typeof n ? this._image : n, !e && n) {
					var a = h.get(n);
					if (!a) return e = new Image, e.onload = function() {
						e.onload = null;
						for (var t = 0; t < a.pending.length; t++) a.pending[t].dirty()
					}, a = {
						image: e,
						pending: [this]
					}, e.src = n, h.put(n, a), void(this._image = e);
					if (e = a.image, this._image = e, !e.width || !e.height) return void a.pending.push(this)
				}
				if (e) {
					var o = i.width || e.width,
						r = i.height || e.height,
						l = i.x || 0,
						u = i.y || 0;
					if (!e.width || !e.height) return;
					if (t.save(), i.bind(t), this.setTransform(t), i.r && (t.beginPath(), s.buildPath(t, i), t.clip()), i.sWidth && i.sHeight) {
						var c = i.sx || 0,
							d = i.sy || 0;
						t.drawImage(e, c, d, i.sWidth, i.sHeight, l, u, o, r)
					} else if (i.sx && i.sy) {
						var c = i.sx,
							d = i.sy,
							f = o - c,
							p = r - d;
						t.drawImage(e, c, d, f, p, l, u, o, r)
					} else t.drawImage(e, l, u, o, r);
					null == i.width && (i.width = o), null == i.height && (i.height = r), null != i.text && this.drawRectText(t, this.getBoundingRect()), t.restore()
				}
			},
			getBoundingRect: function() {
				var t = this.style;
				return this._rect || (this._rect = new o(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
			}
		}, r.inherits(n, a), t.exports = n
	}, function(t, e, i) {
		function n(t) {
			return r.isArray(t) || (t = [+t, +t]), t
		}
		function a(t, e) {
			l.Group.call(this), this.updateData(t, e)
		}
		function o(t, e) {
			this.parent.drift(t, e)
		}
		var r = i(1),
			s = i(24),
			l = i(3),
			h = i(4),
			u = a.prototype;
		u._createSymbol = function(t, e, i) {
			this.removeAll();
			var a = e.hostModel,
				r = e.getItemVisual(i, "color"),
				h = s.createSymbol(t, -.5, -.5, 1, 1, r);
			h.attr({
				style: {
					strokeNoScale: !0
				},
				z2: 100,
				culling: !0,
				scale: [0, 0]
			}), h.drift = o;
			var u = n(e.getItemVisual(i, "symbolSize"));
			l.initProps(h, {
				scale: u
			}, a), this._symbolType = t, this.add(h)
		}, u.stopSymbolAnimation = function(t) {
			this.childAt(0).stopAnimation(t)
		}, u.getScale = function() {
			return this.childAt(0).scale
		}, u.highlight = function() {
			this.childAt(0).trigger("emphasis")
		}, u.downplay = function() {
			this.childAt(0).trigger("normal")
		}, u.setZ = function(t, e) {
			var i = this.childAt(0);
			i.zlevel = t, i.z = e
		}, u.setDraggable = function(t) {
			var e = this.childAt(0);
			e.draggable = t, e.cursor = t ? "move" : "pointer"
		}, u.updateData = function(t, e) {
			var i = t.getItemVisual(e, "symbol") || "circle",
				a = t.hostModel,
				o = n(t.getItemVisual(e, "symbolSize"));
			if (i !== this._symbolType) this._createSymbol(i, t, e);
			else {
				var r = this.childAt(0);
				l.updateProps(r, {
					scale: o
				}, a)
			}
			this._updateCommon(t, e, o), this._seriesModel = a
		};
		var c = ["itemStyle", "normal"],
			d = ["itemStyle", "emphasis"],
			f = ["label", "normal"],
			p = ["label", "emphasis"];
		u._updateCommon = function(t, e, i) {
			var a = this.childAt(0),
				o = t.hostModel,
				s = t.getItemModel(e),
				u = s.getModel(c),
				g = t.getItemVisual(e, "color"),
				m = a.style,
				v = s.getModel(d).getItemStyle();
			a.rotation = s.getShallow("symbolRotate") * Math.PI / 180 || 0;
			var y = s.getShallow("symbolOffset");
			if (y) {
				var x = a.position;
				x[0] = h.parsePercent(y[0], i[0]), x[1] = h.parsePercent(y[1], i[1])
			}
			a.setColor(g), r.extend(m, u.getItemStyle(["color"]));
			var _ = t.getItemVisual(e, "opacity");
			null != _ && (m.opacity = _);
			for (var w, b = s.getModel(f), M = s.getModel(p), S = t.dimensions.slice(), A = S.pop();
			"ordinal" === (w = t.getDimensionInfo(A).type) || "time" === w;) A = S.pop();
			b.get("show") ? (l.setText(m, b, g), m.text = r.retrieve(o.getFormattedLabel(e, "normal"), t.get(A, e))) : m.text = "", M.getShallow("show") ? (l.setText(v, M, g), v.text = r.retrieve(o.getFormattedLabel(e, "emphasis"), t.get(A, e))) : v.text = "";
			var I = n(t.getItemVisual(e, "symbolSize"));
			if (a.off("mouseover").off("mouseout").off("emphasis").off("normal"), l.setHoverStyle(a, v), s.getShallow("hoverAnimation")) {
				var T = function() {
						var t = I[1] / I[0];
						this.animateTo({
							scale: [Math.max(1.1 * I[0], I[0] + 3), Math.max(1.1 * I[1], I[1] + 3 * t)]
						}, 400, "elasticOut")
					},
					C = function() {
						this.animateTo({
							scale: I
						}, 400, "elasticOut")
					};
				a.on("mouseover", T).on("mouseout", C).on("emphasis", T).on("normal", C)
			}
		}, u.fadeOut = function(t) {
			var e = this.childAt(0);
			e.style.text = "", l.updateProps(e, {
				scale: [0, 0]
			}, this._seriesModel, t)
		}, r.inherits(a, l.Group), t.exports = a
	}, function(t, e, i) {
		function n(t) {
			var e = {
				componentType: t.mainType
			};
			return e[t.mainType + "Index"] = t.componentIndex, e
		}
		function a(t, e, i) {
			var n, a, o = u(e - t.rotation);
			return c(o) ? (a = i > 0 ? "top" : "bottom", n = "center") : c(o - d) ? (a = i > 0 ? "bottom" : "top", n = "center") : (a = "middle", n = o > 0 && d > o ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
				rotation: o,
				textAlign: n,
				verticalAlign: a
			}
		}
		function o(t, e, i) {
			var n, a, o = u(-t.rotation),
				r = i[0] > i[1],
				s = "start" === e && !r || "start" !== e && r;
			return c(o - d / 2) ? (a = s ? "bottom" : "top", n = "center") : c(o - 1.5 * d) ? (a = s ? "top" : "bottom", n = "center") : (a = "middle", n = 1.5 * d > o && o > d / 2 ? s ? "left" : "right" : s ? "right" : "left"), {
				rotation: o,
				textAlign: n,
				verticalAlign: a
			}
		}
		var r = i(1),
			s = i(3),
			l = i(12),
			h = i(4),
			u = h.remRadian,
			c = h.isRadianAroundZero,
			d = Math.PI,
			f = function(t, e) {
				this.opt = e, this.axisModel = t, r.defaults(e, {
					labelOffset: 0,
					nameDirection: 1,
					tickDirection: 1,
					labelDirection: 1,
					silent: !0
				}), this.group = new s.Group({
					position: e.position.slice(),
					rotation: e.rotation
				})
			};
		f.prototype = {
			constructor: f,
			hasBuilder: function(t) {
				return !!p[t]
			},
			add: function(t) {
				p[t].call(this)
			},
			getGroup: function() {
				return this.group
			}
		};
		var p = {
			axisLine: function() {
				var t = this.opt,
					e = this.axisModel;
				if (e.get("axisLine.show")) {
					var i = this.axisModel.axis.getExtent();
					this.group.add(new s.Line({
						shape: {
							x1: i[0],
							y1: 0,
							x2: i[1],
							y2: 0
						},
						style: r.extend({
							lineCap: "round"
						}, e.getModel("axisLine.lineStyle").getLineStyle()),
						strokeContainThreshold: t.strokeContainThreshold,
						silent: !! t.axisLineSilent,
						z2: 1
					}))
				}
			},
			axisTick: function() {
				var t = this.axisModel;
				if (t.get("axisTick.show")) {
					for (var e = t.axis, i = t.getModel("axisTick"), n = this.opt, a = i.getModel("lineStyle"), o = i.get("length"), r = m(i, n.labelInterval), l = e.getTicksCoords(), h = [], u = 0; u < l.length; u++) if (!g(e, u, r)) {
						var c = l[u];
						h.push(new s.Line(s.subPixelOptimizeLine({
							shape: {
								x1: c,
								y1: 0,
								x2: c,
								y2: n.tickDirection * o
							},
							style: {
								lineWidth: a.get("width")
							},
							silent: !0
						})))
					}
					this.group.add(s.mergePath(h, {
						style: a.getLineStyle(),
						z2: 2,
						silent: !0
					}))
				}
			},
			axisLabel: function() {
				function t(t, e) {
					var i = t && t.getBoundingRect().clone(),
						n = e && e.getBoundingRect().clone();
					return i && n ? (i.applyTransform(t.getLocalTransform()), n.applyTransform(e.getLocalTransform()), i.intersect(n)) : void 0
				}
				var e = this.axisModel;
				if (e.get("axisLabel.show")) {
					var i = this.opt,
						o = e.axis,
						r = e.getModel("axisLabel"),
						h = r.getModel("textStyle"),
						u = r.get("margin"),
						c = o.scale.getTicks(),
						f = e.getFormattedLabels(),
						p = i.labelRotation;
					null == p && (p = r.get("rotate") || 0), p = p * d / 180;
					for (var m = a(i, p, i.labelDirection), v = e.get("data"), y = [], x = e.get("silent"), _ = 0; _ < c.length; _++) if (!g(o, _, i.labelInterval)) {
						var w = h;
						v && v[_] && v[_].textStyle && (w = new l(v[_].textStyle, h, e.ecModel));
						var b = w.getTextColor(),
							M = o.dataToCoord(c[_]),
							S = [M, i.labelOffset + i.labelDirection * u],
							A = o.scale.getLabel(c[_]),
							I = new s.Text({
								style: {
									text: f[_],
									textAlign: w.get("align", !0) || m.textAlign,
									textVerticalAlign: w.get("baseline", !0) || m.verticalAlign,
									textFont: w.getFont(),
									fill: "function" == typeof b ? b(A) : b
								},
								position: S,
								rotation: m.rotation,
								silent: x,
								z2: 10
							});
						I.eventData = n(e), I.eventData.targetType = "axisLabel", I.eventData.value = A, y.push(I), this.group.add(I)
					}
					if ("category" !== o.type) {
						if (e.getMin ? e.getMin() : e.get("min")) {
							var T = y[0],
								C = y[1];
							t(T, C) && (T.ignore = !0)
						}
						if (e.getMax ? e.getMax() : e.get("max")) {
							var L = y[y.length - 1],
								D = y[y.length - 2];
							t(D, L) && (L.ignore = !0)
						}
					}
				}
			},
			axisName: function() {
				var t = this.opt,
					e = this.axisModel,
					i = this.opt.axisName;
				if (null == i && (i = e.get("name")), i) {
					var r, l = e.get("nameLocation"),
						h = t.nameDirection,
						u = e.getModel("nameTextStyle"),
						c = e.get("nameGap") || 0,
						d = this.axisModel.axis.getExtent(),
						f = d[0] > d[1] ? -1 : 1,
						p = ["start" === l ? d[0] - f * c : "end" === l ? d[1] + f * c : (d[0] + d[1]) / 2, "middle" === l ? t.labelOffset + h * c : 0];
					r = "middle" === l ? a(t, t.rotation, h) : o(t, l, d);
					var g = new s.Text({
						style: {
							text: i,
							textFont: u.getFont(),
							fill: u.getTextColor() || e.get("axisLine.lineStyle.color"),
							textAlign: r.textAlign,
							textVerticalAlign: r.verticalAlign
						},
						position: p,
						rotation: r.rotation,
						silent: e.get("silent"),
						z2: 1
					});
					g.eventData = n(e), g.eventData.targetType = "axisName", g.eventData.name = i, this.group.add(g)
				}
			}
		},
			g = f.ifIgnoreOnTick = function(t, e, i) {
				var n, a = t.scale;
				return "ordinal" === a.type && ("function" == typeof i ? (n = a.getTicks()[e], !i(n, a.getLabel(n))) : e % (i + 1))
			},
			m = f.getInterval = function(t, e) {
				var i = t.get("interval");
				return null != i && "auto" != i || (i = e), i
			};
		t.exports = f
	}, function(t, e, i) {
		function n(t) {
			return r.isObject(t) && null != t.value ? t.value : t
		}
		function a() {
			return "category" === this.get("type") && r.map(this.get("data"), n)
		}
		function o() {
			return s.getFormattedLabels(this.axis, this.get("axisLabel.formatter"))
		}
		var r = i(1),
			s = i(23);
		t.exports = {
			getFormattedLabels: o,
			getCategories: a
		}
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			return e.type || (e.data ? "category" : "value")
		}
		var a = i(10),
			o = i(1),
			r = i(61),
			s = a.extend({
				type: "cartesian2dAxis",
				axis: null,
				init: function() {
					s.superApply(this, "init", arguments), this._resetRange()
				},
				mergeOption: function() {
					s.superApply(this, "mergeOption", arguments), this._resetRange()
				},
				restoreData: function() {
					s.superApply(this, "restoreData", arguments), this._resetRange()
				},
				setRange: function(t, e) {
					this.option.rangeStart = t, this.option.rangeEnd = e
				},
				getMin: function() {
					var t = this.option;
					return null != t.rangeStart ? t.rangeStart : t.min
				},
				getMax: function() {
					var t = this.option;
					return null != t.rangeEnd ? t.rangeEnd : t.max
				},
				getNeedCrossZero: function() {
					var t = this.option;
					return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
				},
				_resetRange: function() {
					this.option.rangeStart = this.option.rangeEnd = null
				}
			});
		o.merge(s.prototype, i(49));
		var l = {
			gridIndex: 0
		};
		r("x", s, n, l), r("y", s, n, l), t.exports = s
	}, function(t, e, i) {
		function n(t, e, i) {
			return i.getComponent("grid", t.get("gridIndex")) === e
		}
		function a(t) {
			var e, i = t.model,
				n = i.getFormattedLabels(),
				a = 1,
				o = n.length;
			o > 40 && (a = Math.ceil(o / 40));
			for (var r = 0; o > r; r += a) if (!t.isLabelIgnored(r)) {
				var s = i.getTextRect(n[r]);
				e ? e.union(s) : e = s
			}
			return e
		}
		function o(t, e, i) {
			this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this._model = t
		}
		function r(t, e) {
			var i = t.getExtent(),
				n = i[0] + i[1];
			t.toGlobalCoord = "x" === t.dim ?
			function(t) {
				return t + e
			} : function(t) {
				return n - t + e
			}, t.toLocalCoord = "x" === t.dim ?
			function(t) {
				return t - e
			} : function(t) {
				return n - t + e
			}
		}
		var s = i(11),
			l = i(23),
			h = i(1),
			u = i(107),
			c = i(105),
			d = h.each,
			f = l.ifAxisCrossZero,
			p = l.niceScaleExtent;
		i(108);
		var g = o.prototype;
		g.type = "grid", g.getRect = function() {
			return this._rect
		}, g.update = function(t, e) {
			function i(t) {
				var e = n[t];
				for (var i in e) {
					var a = e[i];
					if (a && ("category" === a.type || !f(a))) return !0
				}
				return !1
			}
			var n = this._axesMap;
			this._updateScale(t, this._model), d(n.x, function(t) {
				p(t, t.model)
			}), d(n.y, function(t) {
				p(t, t.model)
			}), d(n.x, function(t) {
				i("y") && (t.onZero = !1)
			}), d(n.y, function(t) {
				i("x") && (t.onZero = !1)
			}), this.resize(this._model, e)
		}, g.resize = function(t, e) {
			function i() {
				d(o, function(t) {
					var e = t.isHorizontal(),
						i = e ? [0, n.width] : [0, n.height],
						a = t.inverse ? 1 : 0;
					t.setExtent(i[a], i[1 - a]), r(t, e ? n.x : n.y)
				})
			}
			var n = s.getLayoutRect(t.getBoxLayoutParams(), {
				width: e.getWidth(),
				height: e.getHeight()
			});
			this._rect = n;
			var o = this._axesList;
			i(), t.get("containLabel") && (d(o, function(t) {
				if (!t.model.get("axisLabel.inside")) {
					var e = a(t);
					if (e) {
						var i = t.isHorizontal() ? "height" : "width",
							o = t.model.get("axisLabel.margin");
						n[i] -= e[i] + o, "top" === t.position ? n.y += e.height + o : "left" === t.position && (n.x += e.width + o)
					}
				}
			}), i())
		}, g.getAxis = function(t, e) {
			var i = this._axesMap[t];
			if (null != i) {
				if (null == e) for (var n in i) return i[n];
				return i[e]
			}
		}, g.getCartesian = function(t, e) {
			var i = "x" + t + "y" + e;
			return this._coordsMap[i]
		}, g._initCartesian = function(t, e, i) {
			function a(i) {
				return function(a, h) {
					if (n(a, t, e)) {
						var u = a.get("position");
						"x" === i ? ("top" !== u && "bottom" !== u && (u = "bottom"), o[u] && (u = "top" === u ? "bottom" : "top")) : ("left" !== u && "right" !== u && (u = "left"), o[u] && (u = "left" === u ? "right" : "left")), o[u] = !0;
						var d = new c(i, l.createScaleByModel(a), [0, 0], a.get("type"), u),
							f = "category" === d.type;
						d.onBand = f && a.get("boundaryGap"), d.inverse = a.get("inverse"), d.onZero = a.get("axisLine.onZero"), a.axis = d, d.model = a, d.index = h, this._axesList.push(d), r[i][h] = d, s[i]++
					}
				}
			}
			var o = {
				left: !1,
				right: !1,
				top: !1,
				bottom: !1
			},
				r = {
					x: {},
					y: {}
				},
				s = {
					x: 0,
					y: 0
				};
			return e.eachComponent("xAxis", a("x"), this), e.eachComponent("yAxis", a("y"), this), s.x && s.y ? (this._axesMap = r, void d(r.x, function(t, e) {
				d(r.y, function(i, n) {
					var a = "x" + e + "y" + n,
						o = new u(a);
					o.grid = this, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(t), o.addAxis(i)
				}, this)
			}, this)) : (this._axesMap = {}, void(this._axesList = []))
		}, g._updateScale = function(t, e) {
			function i(t, e, i) {
				d(i.coordDimToDataDim(e.dim), function(i) {
					e.scale.unionExtent(t.getDataExtent(i, "ordinal" !== e.scale.type))
				})
			}
			h.each(this._axesList, function(t) {
				t.scale.setExtent(1 / 0, -(1 / 0))
			}), t.eachSeries(function(a) {
				if ("cartesian2d" === a.get("coordinateSystem")) {
					var o = a.get("xAxisIndex"),
						r = a.get("yAxisIndex"),
						s = t.getComponent("xAxis", o),
						l = t.getComponent("yAxis", r);
					if (!n(s, e, t) || !n(l, e, t)) return;
					var h = this.getCartesian(o, r),
						u = a.getData(),
						c = h.getAxis("x"),
						d = h.getAxis("y");
					"list" === u.type && (i(u, c, a), i(u, d, a))
				}
			}, this)
		}, o.create = function(t, e) {
			var i = [];
			return t.eachComponent("grid", function(n, a) {
				var r = new o(n, t, e);
				r.name = "grid_" + a, r.resize(n, e), n.coordinateSystem = r, i.push(r)
			}), t.eachSeries(function(e) {
				if ("cartesian2d" === e.get("coordinateSystem")) {
					var n = e.get("xAxisIndex"),
						a = t.getComponent("xAxis", n),
						o = i[a.get("gridIndex")];
					e.coordinateSystem = o.getCartesian(n, e.get("yAxisIndex"))
				}
			}), i
		}, o.dimensions = u.prototype.dimensions, i(28).register("cartesian2d", o), t.exports = o
	}, function(t, e) {
		"use strict";

		function i(t) {
			return t
		}
		function n(t, e, n, a) {
			this._old = t, this._new = e, this._oldKeyGetter = n || i, this._newKeyGetter = a || i
		}
		function a(t, e, i) {
			for (var n = 0; n < t.length; n++) {
				var a = i(t[n]),
					o = e[a];
				null == o ? e[a] = n : (o.length || (e[a] = o = [o]), o.push(n))
			}
		}
		n.prototype = {
			constructor: n,
			add: function(t) {
				return this._add = t, this
			},
			update: function(t) {
				return this._update = t, this
			},
			remove: function(t) {
				return this._remove = t, this
			},
			execute: function() {
				var t, e = this._old,
					i = this._new,
					n = this._oldKeyGetter,
					o = this._newKeyGetter,
					r = {},
					s = {};
				for (a(e, r, n), a(i, s, o), t = 0; t < e.length; t++) {
					var l = n(e[t]),
						h = s[l];
					if (null != h) {
						var u = h.length;
						u ? (1 === u && (s[l] = null), h = h.unshift()) : s[l] = null, this._update && this._update(h, t)
					} else this._remove && this._remove(t)
				}
				for (var l in s) if (s.hasOwnProperty(l)) {
					var h = s[l];
					if (null == h) continue;
					if (h.length) for (var t = 0, u = h.length; u > t; t++) this._add && this._add(h[t]);
					else this._add && this._add(h)
				}
			}
		}, t.exports = n
	}, function(t, e) {
		t.exports = function(t, e, i) {
			e.eachSeriesByType(t, function(t) {
				var e = t.getData(),
					i = t.coordinateSystem,
					n = i.dimensions;
				e.each(n, function(t, n, a) {
					var o;
					o = isNaN(t) || isNaN(n) ? [NaN, NaN] : i.dataToPoint([t, n]), e.setItemLayout(a, o)
				}, !0)
			})
		}
	}, function(t, e, i) {
		var n = i(26),
			a = i(41),
			o = i(20),
			r = function() {
				this.group = new n, this.uid = a.getUID("viewComponent")
			};
		r.prototype = {
			constructor: r,
			init: function(t, e) {},
			render: function(t, e, i, n) {},
			dispose: function() {}
		};
		var s = r.prototype;
		s.updateView = s.updateLayout = s.updateVisual = function(t, e, i, n) {}, o.enableClassExtend(r), o.enableClassManagement(r, {
			registerWhenExtend: !0
		}), t.exports = r
	}, function(t, e, i) {
		"use strict";
		var n = i(58),
			a = i(21),
			o = i(77),
			r = i(154),
			s = i(1),
			l = function(t) {
				o.call(this, t), a.call(this, t), r.call(this, t), this.id = t.id || n()
			};
		l.prototype = {
			type: "element",
			name: "",
			__zr: null,
			ignore: !1,
			clipPath: null,
			drift: function(t, e) {
				switch (this.draggable) {
				case "horizontal":
					e = 0;
					break;
				case "vertical":
					t = 0
				}
				var i = this.transform;
				i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty()
			},
			beforeUpdate: function() {},
			afterUpdate: function() {},
			update: function() {
				this.updateTransform()
			},
			traverse: function(t, e) {},
			attrKV: function(t, e) {
				if ("position" === t || "scale" === t || "origin" === t) {
					if (e) {
						var i = this[t];
						i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
					}
				} else this[t] = e
			},
			hide: function() {
				this.ignore = !0, this.__zr && this.__zr.refresh()
			},
			show: function() {
				this.ignore = !1, this.__zr && this.__zr.refresh()
			},
			attr: function(t, e) {
				if ("string" == typeof t) this.attrKV(t, e);
				else if (s.isObject(t)) for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
				return this.dirty(), this
			},
			setClipPath: function(t) {
				var e = this.__zr;
				e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty()
			},
			removeClipPath: function() {
				var t = this.clipPath;
				t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty())
			},
			addSelfToZr: function(t) {
				this.__zr = t;
				var e = this.animators;
				if (e) for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
				this.clipPath && this.clipPath.addSelfToZr(t)
			},
			removeSelfFromZr: function(t) {
				this.__zr = null;
				var e = this.animators;
				if (e) for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
				this.clipPath && this.clipPath.removeSelfFromZr(t)
			}
		}, s.mixin(l, r), s.mixin(l, o), s.mixin(l, a), t.exports = l
	}, function(t, e, i) {
		function n(t, e) {
			return t[e]
		}
		function a(t, e, i) {
			t[e] = i
		}
		function o(t, e, i) {
			return (e - t) * i + t
		}
		function r(t, e, i) {
			return i > .5 ? e : t
		}
		function s(t, e, i, n, a) {
			var r = t.length;
			if (1 == a) for (var s = 0; r > s; s++) n[s] = o(t[s], e[s], i);
			else for (var l = t[0].length, s = 0; r > s; s++) for (var h = 0; l > h; h++) n[s][h] = o(t[s][h], e[s][h], i)
		}
		function l(t, e, i) {
			var n = t.length,
				a = e.length;
			if (n !== a) {
				var o = n > a;
				if (o) t.length = a;
				else for (var r = n; a > r; r++) t.push(1 === i ? e[r] : x.call(e[r]))
			}
		}
		function h(t, e, i) {
			if (t === e) return !0;
			var n = t.length;
			if (n !== e.length) return !1;
			if (1 === i) {
				for (var a = 0; n > a; a++) if (t[a] !== e[a]) return !1
			} else for (var o = t[0].length, a = 0; n > a; a++) for (var r = 0; o > r; r++) if (t[a][r] !== e[a][r]) return !1;
			return !0
		}
		function u(t, e, i, n, a, o, r, s, l) {
			var h = t.length;
			if (1 == l) for (var u = 0; h > u; u++) s[u] = c(t[u], e[u], i[u], n[u], a, o, r);
			else for (var d = t[0].length, u = 0; h > u; u++) for (var f = 0; d > f; f++) s[u][f] = c(t[u][f], e[u][f], i[u][f], n[u][f], a, o, r)
		}
		function c(t, e, i, n, a, o, r) {
			var s = .5 * (i - t),
				l = .5 * (n - e);
			return (2 * (e - i) + s + l) * r + (-3 * (e - i) - 2 * s - l) * o + s * a + e
		}
		function d(t) {
			if (y(t)) {
				var e = t.length;
				if (y(t[0])) {
					for (var i = [], n = 0; e > n; n++) i.push(x.call(t[n]));
					return i
				}
				return x.call(t)
			}
			return t
		}
		function f(t) {
			return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
		}
		function p(t, e, i, n, a) {
			var d = t._getter,
				p = t._setter,
				v = "spline" === e,
				x = n.length;
			if (x) {
				var _, w = n[0].value,
					b = y(w),
					M = !1,
					S = !1,
					A = b && y(w[0]) ? 2 : 1;
				n.sort(function(t, e) {
					return t.time - e.time
				}), _ = n[x - 1].time;
				for (var I = [], T = [], C = n[0].value, L = !0, D = 0; x > D; D++) {
					I.push(n[D].time / _);
					var P = n[D].value;
					if (b && h(P, C, A) || !b && P === C || (L = !1), C = P, "string" == typeof P) {
						var k = m.parse(P);
						k ? (P = k, M = !0) : S = !0
					}
					T.push(P)
				}
				if (!L) {
					if (b) {
						for (var z = T[x - 1], D = 0; x - 1 > D; D++) l(T[D], z, A);
						l(d(t._target, a), z, A)
					}
					var R, O, E, V, N, B, G = 0,
						F = 0;
					if (M) var W = [0, 0, 0, 0];
					var H = function(t, e) {
							var i;
							if (F > e) {
								for (R = Math.min(G + 1, x - 1), i = R; i >= 0 && !(I[i] <= e); i--);
								i = Math.min(i, x - 2)
							} else {
								for (i = G; x > i && !(I[i] > e); i++);
								i = Math.min(i - 1, x - 2)
							}
							G = i, F = e;
							var n = I[i + 1] - I[i];
							if (0 !== n) if (O = (e - I[i]) / n, v) if (V = T[i], E = T[0 === i ? i : i - 1], N = T[i > x - 2 ? x - 1 : i + 1], B = T[i > x - 3 ? x - 1 : i + 2], b) u(E, V, N, B, O, O * O, O * O * O, d(t, a), A);
							else {
								var l;
								if (M) l = u(E, V, N, B, O, O * O, O * O * O, W, 1), l = f(W);
								else {
									if (S) return r(V, N, O);
									l = c(E, V, N, B, O, O * O, O * O * O)
								}
								p(t, a, l)
							} else if (b) s(T[i], T[i + 1], O, d(t, a), A);
							else {
								var l;
								if (M) s(T[i], T[i + 1], O, W, 1), l = f(W);
								else {
									if (S) return r(T[i], T[i + 1], O);
									l = o(T[i], T[i + 1], O)
								}
								p(t, a, l)
							}
						},
						Z = new g({
							target: t._target,
							life: _,
							loop: t._loop,
							delay: t._delay,
							onframe: H,
							ondestroy: i
						});
					return e && "spline" !== e && (Z.easing = e), Z
				}
			}
		}
		var g = i(132),
			m = i(22),
			v = i(1),
			y = v.isArrayLike,
			x = Array.prototype.slice,
			_ = function(t, e, i, o) {
				this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || n, this._setter = o || a, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
			};
		_.prototype = {
			when: function(t, e) {
				var i = this._tracks;
				for (var n in e) {
					if (!i[n]) {
						i[n] = [];
						var a = this._getter(this._target, n);
						if (null == a) continue;
						0 !== t && i[n].push({
							time: 0,
							value: d(a)
						})
					}
					i[n].push({
						time: t,
						value: e[n]
					})
				}
				return this
			},
			during: function(t) {
				return this._onframeList.push(t), this
			},
			_doneCallback: function() {
				this._tracks = {}, this._clipList.length = 0;
				for (var t = this._doneList, e = t.length, i = 0; e > i; i++) t[i].call(this)
			},
			start: function(t) {
				var e, i = this,
					n = 0,
					a = function() {
						n--, n || i._doneCallback()
					};
				for (var o in this._tracks) {
					var r = p(this, t, a, this._tracks[o], o);
					r && (this._clipList.push(r), n++, this.animation && this.animation.addClip(r), e = r)
				}
				if (e) {
					var s = e.onframe;
					e.onframe = function(t, e) {
						s(t, e);
						for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
					}
				}
				return n || this._doneCallback(), this
			},
			stop: function(t) {
				for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
					var a = e[n];
					t && a.onframe(this._target, 1), i && i.removeClip(a)
				}
				e.length = 0
			},
			delay: function(t) {
				return this._delay = t, this
			},
			done: function(t) {
				return t && this._doneList.push(t), this
			},
			getClips: function() {
				return this._clipList
			}
		}, t.exports = _
	}, function(t, e) {
		var i = 2 * Math.PI;
		t.exports = {
			normalizeRadian: function(t) {
				return t %= i, 0 > t && (t += i), t
			}
		}
	}, function(t, e) {
		var i = 2311;
		t.exports = function() {
			return "zr_" + i++
		}
	}, function(t, e, i) {
		var n = i(144),
			a = i(143);
		t.exports = {
			buildPath: function(t, e, i) {
				var o = e.points,
					r = e.smooth;
				if (o && o.length >= 2) {
					if (r && "spline" !== r) {
						var s = a(o, r, i, e.smoothConstraint);
						t.moveTo(o[0][0], o[0][1]);
						for (var l = o.length, h = 0;
						(i ? l : l - 1) > h; h++) {
							var u = s[2 * h],
								c = s[2 * h + 1],
								d = o[(h + 1) % l];
							t.bezierCurveTo(u[0], u[1], c[0], c[1], d[0], d[1])
						}
					} else {
						"spline" === r && (o = n(o, i)), t.moveTo(o[0][0], o[0][1]);
						for (var h = 1, f = o.length; f > h; h++) t.lineTo(o[h][0], o[h][1])
					}
					i && t.closePath()
				}
			}
		}
	}, function(t, e) {
		t.exports = {
			buildPath: function(t, e) {
				var i, n, a, o, r = e.x,
					s = e.y,
					l = e.width,
					h = e.height,
					u = e.r;
				0 > l && (r += l, l = -l), 0 > h && (s += h, h = -h), "number" == typeof u ? i = n = a = o = u : u instanceof Array ? 1 === u.length ? i = n = a = o = u[0] : 2 === u.length ? (i = a = u[0], n = o = u[1]) : 3 === u.length ? (i = u[0], n = o = u[1], a = u[2]) : (i = u[0], n = u[1], a = u[2], o = u[3]) : i = n = a = o = 0;
				var c;
				i + n > l && (c = i + n, i *= l / c, n *= l / c), a + o > l && (c = a + o, a *= l / c, o *= l / c), n + a > h && (c = n + a, n *= h / c, a *= h / c), i + o > h && (c = i + o, i *= h / c, o *= h / c), t.moveTo(r + i, s), t.lineTo(r + l - n, s), 0 !== n && t.quadraticCurveTo(r + l, s, r + l, s + n), t.lineTo(r + l, s + h - a), 0 !== a && t.quadraticCurveTo(r + l, s + h, r + l - a, s + h), t.lineTo(r + o, s + h), 0 !== o && t.quadraticCurveTo(r, s + h, r, s + h - o), t.lineTo(r, s + i), 0 !== i && t.quadraticCurveTo(r, s, r + i, s)
			}
		}
	}, function(t, e, i) {
		var n = i(72),
			a = i(1),
			o = i(10),
			r = i(11),
			s = ["value", "category", "time", "log"];
		t.exports = function(t, e, i, l) {
			a.each(s, function(o) {
				e.extend({
					type: t + "Axis." + o,
					mergeDefaultAndTheme: function(e, n) {
						var s = this.layoutMode,
							l = s ? r.getLayoutParams(e) : {},
							h = n.getTheme();
						a.merge(e, h.get(o + "Axis")), a.merge(e, this.getDefaultOption()), e.type = i(t, e), s && r.mergeLayoutParam(e, l, s)
					},
					defaultOption: a.mergeAll([{},
					n[o + "Axis"], l], !0)
				})
			}), o.registerSubTypeDefaulter(t + "Axis", a.curry(i, t))
		}
	}, function(t, e) {
		t.exports = function(t, e) {
			var i = e.findComponents({
				mainType: "legend"
			});
			i && i.length && e.eachSeriesByType(t, function(t) {
				var e = t.getData();
				e.filterSelf(function(t) {
					for (var n = e.getName(t), a = 0; a < i.length; a++) if (!i[a].isSelected(n)) return !1;
					return !0
				}, this)
			}, this)
		}
	}, function(t, e) {
		t.exports = function(t, e) {
			var i = e.get("color"),
				n = 0;
			e.eachRawSeriesByType(t, function(t) {
				var a = t.get("color", !0),
					o = t.getRawData();
				if (!e.isSeriesFiltered(t)) {
					var r = t.getData();
					r.each(function(t) {
						var e = r.getItemModel(t),
							s = r.getRawIndex(t),
							l = r.getItemVisual(t, "color", !0);
						if (l) o.setItemVisual(s, "color", l);
						else {
							var h = a ? a[s % a.length] : i[(s + n) % i.length],
								u = e.get("itemStyle.normal.color") || h;
							o.setItemVisual(s, "color", u), r.setItemVisual(t, "color", u)
						}
					})
				}
				n += o.count()
			})
		}
	}, function(t, e, i) {
		var n = i(5),
			a = i(18),
			o = {},
			r = Math.min,
			s = Math.max,
			l = Math.sin,
			h = Math.cos,
			u = n.create(),
			c = n.create(),
			d = n.create(),
			f = 2 * Math.PI;
		o.fromPoints = function(t, e, i) {
			if (0 !== t.length) {
				var n, a = t[0],
					o = a[0],
					l = a[0],
					h = a[1],
					u = a[1];
				for (n = 1; n < t.length; n++) a = t[n], o = r(o, a[0]), l = s(l, a[0]), h = r(h, a[1]), u = s(u, a[1]);
				e[0] = o, e[1] = h, i[0] = l, i[1] = u
			}
		}, o.fromLine = function(t, e, i, n, a, o) {
			a[0] = r(t, i), a[1] = r(e, n), o[0] = s(t, i), o[1] = s(e, n)
		};
		var p = [],
			g = [];
		o.fromCubic = function(t, e, i, n, o, l, h, u, c, d) {
			var f, m = a.cubicExtrema,
				v = a.cubicAt,
				y = m(t, i, o, h, p);
			for (c[0] = 1 / 0, c[1] = 1 / 0, d[0] = -(1 / 0), d[1] = -(1 / 0), f = 0; y > f; f++) {
				var x = v(t, i, o, h, p[f]);
				c[0] = r(x, c[0]), d[0] = s(x, d[0])
			}
			for (y = m(e, n, l, u, g), f = 0; y > f; f++) {
				var _ = v(e, n, l, u, g[f]);
				c[1] = r(_, c[1]), d[1] = s(_, d[1])
			}
			c[0] = r(t, c[0]), d[0] = s(t, d[0]), c[0] = r(h, c[0]), d[0] = s(h, d[0]), c[1] = r(e, c[1]), d[1] = s(e, d[1]), c[1] = r(u, c[1]), d[1] = s(u, d[1])
		}, o.fromQuadratic = function(t, e, i, n, o, l, h, u) {
			var c = a.quadraticExtremum,
				d = a.quadraticAt,
				f = s(r(c(t, i, o), 1), 0),
				p = s(r(c(e, n, l), 1), 0),
				g = d(t, i, o, f),
				m = d(e, n, l, p);
			h[0] = r(t, o, g), h[1] = r(e, l, m), u[0] = s(t, o, g), u[1] = s(e, l, m)
		}, o.fromArc = function(t, e, i, a, o, r, s, p, g) {
			var m = n.min,
				v = n.max,
				y = Math.abs(o - r);
			if (1e-4 > y % f && y > 1e-4) return p[0] = t - i, p[1] = e - a, g[0] = t + i, void(g[1] = e + a);
			if (u[0] = h(o) * i + t, u[1] = l(o) * a + e, c[0] = h(r) * i + t, c[1] = l(r) * a + e, m(p, u, c), v(g, u, c), o %= f, 0 > o && (o += f), r %= f, 0 > r && (r += f), o > r && !s ? r += f : r > o && s && (o += f), s) {
				var x = r;
				r = o, o = x
			}
			for (var _ = 0; r > _; _ += Math.PI / 2) _ > o && (d[0] = h(_) * i + t, d[1] = l(_) * a + e, m(p, d, p), v(g, d, g))
		}, t.exports = o
	}, function(t, e, i) {
		var n = i(35),
			a = i(1),
			o = i(17),
			r = function(t) {
				n.call(this, t)
			};
		r.prototype = {
			constructor: r,
			type: "text",
			brush: function(t) {
				var e = this.style,
					i = e.x || 0,
					n = e.y || 0,
					a = e.text,
					r = e.fill,
					s = e.stroke;
				if (null != a && (a += ""), a) {
					if (t.save(), this.style.bind(t), this.setTransform(t), r && (t.fillStyle = r), s && (t.strokeStyle = s), t.font = e.textFont || e.font, t.textAlign = e.textAlign, e.textVerticalAlign) {
						var l = o.getBoundingRect(a, t.font, e.textAlign, "top");
						switch (t.textBaseline = "top", e.textVerticalAlign) {
						case "middle":
							n -= l.height / 2;
							break;
						case "bottom":
							n -= l.height
						}
					} else t.textBaseline = e.textBaseline;
					for (var h = o.measureText("国", t.font).width, u = a.split("\n"), c = 0; c < u.length; c++) r && t.fillText(u[c], i, n), s && t.strokeText(u[c], i, n), n += h;
					t.restore()
				}
			},
			getBoundingRect: function() {
				if (!this._rect) {
					var t = this.style,
						e = t.textVerticalAlign,
						i = o.getBoundingRect(t.text + "", t.textFont || t.font, t.textAlign, e ? "top" : t.textBaseline);
					switch (e) {
					case "middle":
						i.y -= i.height / 2;
						break;
					case "bottom":
						i.y -= i.height
					}
					i.x += t.x || 0, i.y += t.y || 0, this._rect = i
				}
				return this._rect
			}
		}, a.inherits(r, n), t.exports = r
	}, function(t, e, i) {
		function n(t, e) {
			return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
		}
		function a(t, e) {
			t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
		}
		var o = i(17),
			r = i(8),
			s = new r,
			l = function() {};
		l.prototype = {
			constructor: l,
			drawRectText: function(t, e, i) {
				var r = this.style,
					l = r.text;
				if (null != l && (l += ""), l) {
					var h, u, c = r.textPosition,
						d = r.textDistance,
						f = r.textAlign,
						p = r.textFont || r.font,
						g = r.textBaseline,
						m = r.textVerticalAlign;
					i = i || o.getBoundingRect(l, p, f, g);
					var v = this.transform,
						y = this.invTransform;
					if (v && (s.copy(e), s.applyTransform(v), e = s, a(t, y)), c instanceof Array) h = e.x + n(c[0], e.width), u = e.y + n(c[1], e.height), f = f || "left", g = g || "top";
					else {
						var x = o.adjustTextPositionOnRect(c, e, i, d);
						h = x.x, u = x.y, f = f || x.textAlign, g = g || x.textBaseline
					}
					if (t.textAlign = f, m) {
						switch (m) {
						case "middle":
							u -= i.height / 2;
							break;
						case "bottom":
							u -= i.height
						}
						t.textBaseline = "top"
					} else t.textBaseline = g;
					var _ = r.textFill,
						w = r.textStroke;
					_ && (t.fillStyle = _), w && (t.strokeStyle = w), t.font = p, t.shadowColor = r.textShadowColor, t.shadowBlur = r.textShadowBlur, t.shadowOffsetX = r.textShadowOffsetX, t.shadowOffsetY = r.textShadowOffsetY;
					for (var b = l.split("\n"), M = 0; M < b.length; M++) _ && t.fillText(b[M], h, u), w && t.strokeText(b[M], h, u), u += i.lineHeight;
					v && a(t, v)
				}
			}
		}, t.exports = l
	}, function(t, e, i) {
		function n(t) {
			delete c[t]
		}
		/*!
		 * ZRender, a high performance 2d drawing library.
		 *
		 * Copyright (c) 2013, Baidu Inc.
		 * All rights reserved.
		 *
		 * LICENSE
		 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
		 */
		var a = i(58),
			o = i(15),
			r = i(127),
			s = i(130),
			l = i(131),
			h = !o.canvasSupported,
			u = {
				canvas: i(129)
			},
			c = {},
			d = {};
		d.version = "3.0.8", d.init = function(t, e) {
			var i = new f(a(), t, e);
			return c[i.id] = i, i
		}, d.dispose = function(t) {
			if (t) t.dispose();
			else {
				for (var e in c) c[e].dispose();
				c = {}
			}
			return d
		}, d.getInstance = function(t) {
			return c[t]
		}, d.registerPainter = function(t, e) {
			u[t] = e
		};
		var f = function(t, e, i) {
				i = i || {}, this.dom = e, this.id = t;
				var n = this,
					a = new s,
					c = i.renderer;
				if (h) {
					if (!u.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
					c = "vml"
				} else c && u[c] || (c = "canvas");
				var d = new u[c](e, a, i);
				this.storage = a, this.painter = d, o.node || (this.handler = new r(d.getViewportRoot(), a, d)), this.animation = new l({
					stage: {
						update: function() {
							n._needsRefresh && n.refreshImmediately()
						}
					}
				}), this.animation.start(), this._needsRefresh;
				var f = a.delFromMap,
					p = a.addToMap;
				a.delFromMap = function(t) {
					var e = a.get(t);
					f.call(a, t), e && e.removeSelfFromZr(n)
				}, a.addToMap = function(t) {
					p.call(a, t), t.addSelfToZr(n)
				}
			};
		f.prototype = {
			constructor: f,
			getId: function() {
				return this.id
			},
			add: function(t) {
				this.storage.addRoot(t), this._needsRefresh = !0
			},
			remove: function(t) {
				this.storage.delRoot(t), this._needsRefresh = !0
			},
			configLayer: function(t, e) {
				this.painter.configLayer(t, e), this._needsRefresh = !0
			},
			refreshImmediately: function() {
				this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
			},
			refresh: function() {
				this._needsRefresh = !0
			},
			resize: function() {
				this.painter.resize(), this.handler && this.handler.resize()
			},
			clearAnimation: function() {
				this.animation.clear()
			},
			getWidth: function() {
				return this.painter.getWidth()
			},
			getHeight: function() {
				return this.painter.getHeight()
			},
			toDataURL: function(t, e, i) {
				return this.painter.toDataURL(t, e, i)
			},
			pathToImage: function(t, e, i) {
				var n = a();
				return this.painter.pathToImage(n, t, e, i)
			},
			setDefaultCursorStyle: function(t) {
				this.handler.setDefaultCursorStyle(t)
			},
			on: function(t, e, i) {
				this.handler && this.handler.on(t, e, i)
			},
			off: function(t, e) {
				this.handler && this.handler.off(t, e)
			},
			trigger: function(t, e) {
				this.handler && this.handler.trigger(t, e)
			},
			clear: function() {
				this.storage.delRoot(), this.painter.clear()
			},
			dispose: function() {
				this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler && this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, n(this.id)
			}
		}, t.exports = d
	}, function(t, e, i) {
		var n = i(2),
			a = i(1);
		t.exports = function(t, e) {
			a.each(e, function(e) {
				e.update = "updateView", n.registerAction(e, function(i, n) {
					var a = {};
					return n.eachComponent({
						mainType: "series",
						subType: t,
						query: i
					}, function(t) {
						t[e.method] && t[e.method](i.name);
						var n = t.getData();
						n.each(function(e) {
							var i = n.getName(e);
							a[i] = t.isSelected(i) || !1
						})
					}), {
						name: i.name,
						selected: a
					}
				})
			})
		}
	}, function(t, e, i) {
		var n = i(1);
		t.exports = {
			updateSelectedMap: function() {
				var t = this.option;
				this._dataOptMap = n.reduce(t.data, function(t, e) {
					return t[e.name] = e, t
				}, {})
			},
			select: function(t) {
				var e = this._dataOptMap,
					i = e[t],
					a = this.get("selectedMode");
				"single" === a && n.each(e, function(t) {
					t.selected = !1
				}), i && (i.selected = !0)
			},
			unSelect: function(t) {
				var e = this._dataOptMap[t];
				e && (e.selected = !1)
			},
			toggleSelected: function(t) {
				var e = this._dataOptMap[t];
				return null != e ? (this[e.selected ? "unSelect" : "select"](t), e.selected) : void 0
			},
			isSelected: function(t) {
				var e = this._dataOptMap[t];
				return e && e.selected
			}
		}
	}, function(t, e, i) {
		function n(t) {
			if (!t.target || !t.target.draggable) {
				var e = t.offsetX,
					i = t.offsetY,
					n = this.rect;
				n && n.contain(e, i) && (this._x = e, this._y = i, this._dragging = !0)
			}
		}
		function a(t) {
			if (this._dragging && (d.stop(t.event), "pinch" !== t.gestureEvent)) {
				if (f.isTaken("globalPan", this._zr)) return;
				var e = t.offsetX,
					i = t.offsetY,
					n = e - this._x,
					a = i - this._y;
				this._x = e, this._y = i;
				var o = this.target;
				if (o) {
					var r = o.position;
					r[0] += n, r[1] += a, o.dirty()
				}
				d.stop(t.event), this.trigger("pan", n, a)
			}
		}
		function o(t) {
			this._dragging = !1
		}
		function r(t) {
			d.stop(t.event);
			var e = t.wheelDelta > 0 ? 1.1 : 1 / 1.1;
			l.call(this, t, e, t.offsetX, t.offsetY)
		}
		function s(t) {
			if (!f.isTaken("globalPan", this._zr)) {
				d.stop(t.event);
				var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
				l.call(this, t, e, t.pinchX, t.pinchY)
			}
		}
		function l(t, e, i, n) {
			var a = this.rect;
			if (a && a.contain(i, n)) {
				var o = this.target,
					r = this.zoomLimit;
				if (o) {
					var s = o.position,
						l = o.scale,
						h = this.zoom = this.zoom || 1;
					h *= e, r && (h = Math.max(Math.min(r.max, h), r.min));
					var u = h / this.zoom;
					this.zoom = h, s[0] -= (i - s[0]) * (u - 1), s[1] -= (n - s[1]) * (u - 1), l[0] *= u, l[1] *= u, o.dirty()
				}
				this.trigger("zoom", e, i, n)
			}
		}
		function h(t, e, i) {
			this.target = e, this.rect = i, this.zoomLimit, this.zoom, this._zr = t;
			console.log(this);
			var l = c.bind,
				h = l(n, this),
				d = l(a, this),
				f = l(o, this),
				p = l(r, this),
				g = l(s, this);
			u.call(this), this.enable = function(e) {
				this.disable(), null == e && (e = !0), e !== !0 && "move" !== e && "pan" !== e || (t.on("mousedown", h), t.on("mousemove", d), t.on("mouseup", f)), e !== !0 && "scale" !== e && "zoom" !== e || (t.on("mousewheel", p), t.on("pinch", g))
			}, this.disable = function() {
				t.off("mousedown", h), t.off("mousemove", d), t.off("mouseup", f), t.off("mousewheel", p), t.off("pinch", g)
			}, this.dispose = this.disable, this.isDragging = function() {
				return this._dragging
			}, this.isPinching = function() {
				return this._pinching
			}
		}
		var u = i(21),
			c = i(1),
			d = i(33),
			f = i(102);
		c.mixin(h, u), t.exports = h
	}, function(t, e) {
		t.exports = function(t, e, i, n, a) {
			function o(t, e, i) {
				var n = e.length ? e.slice() : [e, e];
				return e[0] > e[1] && n.reverse(), 0 > t && n[0] + t < i[0] && (t = i[0] - n[0]), t > 0 && n[1] + t > i[1] && (t = i[1] - n[1]), t
			}
			return t ? ("rigid" === n ? (t = o(t, e, i), e[0] += t, e[1] += t) : (t = o(t, e[a], i), e[a] += t, "push" === n && e[0] > e[1] && (e[1 - a] = e[a])), e) : e
		}
	}, function(t, e, i) {
		var n = i(1),
			a = {
				show: !0,
				zlevel: 0,
				z: 0,
				inverse: !1,
				name: "",
				nameLocation: "end",
				nameTextStyle: {},
				nameGap: 15,
				silent: !0,
				axisLine: {
					show: !0,
					onZero: !0,
					lineStyle: {
						color: "#333",
						width: 1,
						type: "solid"
					}
				},
				axisTick: {
					show: !0,
					inside: !1,
					length: 5,
					lineStyle: {
						color: "#333",
						width: 1
					}
				},
				axisLabel: {
					show: !0,
					inside: !1,
					rotate: 0,
					margin: 8,
					textStyle: {
						color: "#333",
						fontSize: 12
					}
				},
				splitLine: {
					show: !0,
					lineStyle: {
						color: ["#ccc"],
						width: 1,
						type: "solid"
					}
				},
				splitArea: {
					show: !1,
					areaStyle: {
						color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
					}
				}
			},
			o = n.merge({
				boundaryGap: !0,
				axisTick: {
					interval: "auto"
				},
				axisLabel: {
					interval: "auto"
				}
			}, a),
			r = n.defaults({
				boundaryGap: [0, 0],
				splitNumber: 5
			}, a),
			s = n.defaults({
				scale: !0,
				min: "dataMin",
				max: "dataMax"
			}, r),
			l = n.defaults({}, r);
		l.scale = !0, t.exports = {
			categoryAxis: o,
			valueAxis: r,
			timeAxis: s,
			logAxis: l
		}
	}, function(t, e, i) {
		function n(t, e, i, n) {
			return c.isArray(t) ? c.map(t, function(t) {
				return f(t, e, i, n)
			}) : f(t, e, i, n)
		}
		function a(t) {
			var e = t.pieceList;
			t.hasSpecialVisual = !1, c.each(e, function(e, i) {
				e.originIndex = i, e.visual && (t.hasSpecialVisual = !0)
			})
		}
		function o(t) {
			var e = t.categories,
				i = t.visual,
				n = c.isArray(i);
			if (!e) {
				if (n) return;
				throw new Error
			}
			var a = t.categoryMap = {};
			if (p(e, function(t, e) {
				a[t] = e
			}), !n) {
				var o = [];
				c.isObject(i) ? p(i, function(t, e) {
					var i = a[e];
					o[null != i ? i : m] = t
				}) : o[m] = i, i = t.visual = o
			}
			for (var r = e.length - 1; r >= 0; r--) null == i[r] && (delete a[e[r]], e.pop())
		}
		function r(t) {
			return {
				applyVisual: function(e, i, n) {
					var a = i("color"),
						o = c.isArray(e);
					if (e = o ? [this.mapValueToVisual(e[0]), this.mapValueToVisual(e[1])] : this.mapValueToVisual(e), c.isArray(a)) for (var r = 0, s = a.length; s > r; r++) a[r].color = t(a[r].color, o ? e[r] : e);
					else n("color", t(a, e))
				},
				mapValueToVisual: function(t) {
					var e = this._normalizeData(t),
						i = this._getSpecifiedVisual(t),
						a = this.option.visual;
					return null == i && (i = u(this) ? h(this, a, e) : n(e, [0, 1], a, !0)), i
				}
			}
		}
		function s(t, e) {
			return t[Math.round(n(e, [0, 1], [0, t.length - 1], !0))]
		}
		function l(t, e, i) {
			i("color", this.mapValueToVisual(t))
		}
		function h(t, e, i) {
			return e[t.option.loop && i !== m ? i % e.length : i]
		}
		function u(t) {
			return "category" === t.option.mappingMethod
		}
		var c = i(1),
			d = i(22),
			f = i(4).linearMap,
			p = c.each,
			g = c.isObject,
			m = -1,
			v = function(t) {
				var e = t.mappingMethod,
					i = t.type;
				this.type = i, this.mappingMethod = e;
				var n = this.option = c.clone(t);
				this._normalizeData = x[e], this._getSpecifiedVisual = c.bind(_[e], this, i), c.extend(this, y[i]), "piecewise" === e && a(n), "category" === e && o(n)
			};
		v.prototype = {
			constructor: v,
			applyVisual: null,
			isValueActive: null,
			mapValueToVisual: null,
			getNormalizer: function() {
				return c.bind(this._normalizeData, this)
			}
		};
		var y = v.visualHandlers = {
			color: {
				applyVisual: l,
				getColorMapper: function() {
					var t = u(this) ? this.option.visual : c.map(this.option.visual, d.parse);
					return c.bind(u(this) ?
					function(e, i) {
						return !i && (e = this._normalizeData(e)), h(this, t, e)
					} : function(e, i, n) {
						var a = !! n;
						return !i && (e = this._normalizeData(e)), n = d.fastMapToColor(e, t, n), a ? n : c.stringify(n, "rgba")
					}, this)
				},
				mapValueToVisual: function(t) {
					var e = this.option.visual;
					if (c.isArray(t)) return t = [this._normalizeData(t[0]), this._normalizeData(t[1])], d.mapIntervalToColor(t, e);
					var i = this._normalizeData(t),
						n = this._getSpecifiedVisual(t);
					return null == n && (n = u(this) ? h(this, e, i) : d.mapToColor(i, e)), n
				}
			},
			colorHue: r(function(t, e) {
				return d.modifyHSL(t, e)
			}),
			colorSaturation: r(function(t, e) {
				return d.modifyHSL(t, null, e)
			}),
			colorLightness: r(function(t, e) {
				return d.modifyHSL(t, null, null, e)
			}),
			colorAlpha: r(function(t, e) {
				return d.modifyAlpha(t, e)
			}),
			opacity: {
				applyVisual: function(t, e, i) {
					i("opacity", this.mapValueToVisual(t))
				},
				mapValueToVisual: function(t) {
					var e = this._normalizeData(t),
						i = this._getSpecifiedVisual(t),
						a = this.option.visual;
					return null == i && (i = u(this) ? h(this, a, e) : n(e, [0, 1], a, !0)), i
				}
			},
			symbol: {
				applyVisual: function(t, e, i) {
					var n = this.mapValueToVisual(t);
					if (c.isString(n)) i("symbol", n);
					else if (g(n)) for (var a in n) n.hasOwnProperty(a) && i(a, n[a])
				},
				mapValueToVisual: function(t) {
					var e = this._normalizeData(t),
						i = this._getSpecifiedVisual(t),
						n = this.option.visual;
					return null == i && (i = u(this) ? h(this, n, e) : s(n, e) || {}), i
				}
			},
			symbolSize: {
				applyVisual: function(t, e, i) {
					i("symbolSize", this.mapValueToVisual(t))
				},
				mapValueToVisual: function(t) {
					var e = this._normalizeData(t),
						i = this._getSpecifiedVisual(t),
						a = this.option.visual;
					return null == i && (i = u(this) ? h(this, a, e) : n(e, [0, 1], a, !0)), i
				}
			}
		},
			x = {
				linear: function(t) {
					return n(t, this.option.dataExtent, [0, 1], !0)
				},
				piecewise: function(t) {
					var e = this.option.pieceList,
						i = v.findPieceIndex(t, e);
					return null != i ? n(i, [0, e.length - 1], [0, 1], !0) : void 0
				},
				category: function(t) {
					var e = this.option.categories ? this.option.categoryMap[t] : t;
					return null == e ? m : e
				}
			},
			_ = {
				linear: c.noop,
				piecewise: function(t, e) {
					var i = this.option,
						n = i.pieceList;
					if (i.hasSpecialVisual) {
						var a = v.findPieceIndex(e, n),
							o = n[a];
						if (o && o.visual) return o.visual[t]
					}
				},
				category: c.noop
			};
		v.addVisualHandler = function(t, e) {
			y[t] = e
		}, v.isValidType = function(t) {
			return y.hasOwnProperty(t)
		}, v.eachVisual = function(t, e, i) {
			c.isObject(t) ? c.each(t, e, i) : e.call(i, t)
		}, v.mapVisual = function(t, e, i) {
			var n, a = c.isArray(t) ? [] : c.isObject(t) ? {} : (n = !0, null);
			return v.eachVisual(t, function(t, o) {
				var r = e.call(i, t, o);
				n ? a = r : a[o] = r
			}), a
		}, v.retrieveVisuals = function(t) {
			var e, i = {};
			return t && p(y, function(n, a) {
				t.hasOwnProperty(a) && (i[a] = t[a], e = !0)
			}), e ? i : null
		}, v.prepareVisualTypes = function(t) {
			if (g(t)) {
				var e = [];
				p(t, function(t, i) {
					e.push(i)
				}), t = e
			} else {
				if (!c.isArray(t)) return [];
				t = t.slice()
			}
			return t.sort(function(t, e) {
				return "color" === e && "color" !== t && 0 === t.indexOf("color") ? 1 : -1
			}), t
		}, v.dependsOn = function(t, e) {
			return "color" === e ? !(!t || 0 !== t.indexOf(e)) : t === e
		}, v.cloneOpacityToAlpha = function(t) {
			new v({})
		}, v.findPieceIndex = function(t, e) {
			for (var i = 0, n = e.length; n > i; i++) {
				var a = e[i];
				if (null != a.value && a.value === t) return i
			}
			for (var i = 0, n = e.length; n > i; i++) {
				var a = e[i],
					o = a.interval;
				if (o) if (o[0] === -(1 / 0)) {
					if (t < o[1]) return i
				} else if (o[1] === 1 / 0) {
					if (o[0] < t) return i
				} else if (a.interval[0] <= t && t <= a.interval[1]) return i
			}
		}, t.exports = v
	}, function(t, e, i) {
		var n = i(16);
		t.exports = function(t, e, i) {
			function a(t) {
				var a = [e, "normal", "color"],
					o = i.get("color"),
					r = t.getData(),
					s = t.get(a) || o[t.seriesIndex % o.length];
				r.setVisual("color", s), i.isSeriesFiltered(t) || ("function" != typeof s || s instanceof n || r.each(function(e) {
					r.setItemVisual(e, "color", s(t.getDataParams(e)))
				}), r.each(function(t) {
					var e = r.getItemModel(t),
						i = e.get(a, !0);
					null != i && r.setItemVisual(t, "color", i)
				}))
			}
			t ? i.eachSeriesByType(t, a) : i.eachSeries(a)
		}
	}, function(t, e) {
		t.exports = function(t, e, i, n, a, o) {
			if (o > e && o > n || e > o && n > o) return 0;
			if (n === e) return 0;
			var r = e > n ? 1 : -1,
				s = (o - e) / (n - e),
				l = s * (i - t) + t;
			return l > a ? r : 0
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			a = i(16),
			o = function(t, e, i, n, o) {
				this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, a.call(this, o)
			};
		o.prototype = {
			constructor: o,
			type: "linear",
			updateCanvasGradient: function(t, e) {
				for (var i = t.getBoundingRect(), n = this.x * i.width + i.x, a = this.x2 * i.width + i.x, o = this.y * i.height + i.y, r = this.y2 * i.height + i.y, s = e.createLinearGradient(n, o, a, r), l = this.colorStops, h = 0; h < l.length; h++) s.addColorStop(l[h].offset, l[h].color);
				this.canvasGradient = s
			}
		}, n.inherits(o, a), t.exports = o
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return t > s || -s > t
		}
		var a = i(19),
			o = i(5),
			r = a.identity,
			s = 5e-5,
			l = function(t) {
				t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
			},
			h = l.prototype;
		h.transform = null, h.needLocalTransform = function() {
			return n(this.rotation) || n(this.position[0]) || n(this.position[1]) || n(this.scale[0] - 1) || n(this.scale[1] - 1)
		}, h.updateTransform = function() {
			var t = this.parent,
				e = t && t.transform,
				i = this.needLocalTransform(),
				n = this.transform;
			return i || e ? (n = n || a.create(), i ? this.getLocalTransform(n) : r(n), e && (i ? a.mul(n, t.transform, n) : a.copy(n, t.transform)), this.transform = n, this.invTransform = this.invTransform || a.create(), void a.invert(this.invTransform, n)) : void(n && r(n))
		}, h.getLocalTransform = function(t) {
			t = t || [], r(t);
			var e = this.origin,
				i = this.scale,
				n = this.rotation,
				o = this.position;
			return e && (t[4] -= e[0], t[5] -= e[1]), a.scale(t, t, i), n && a.rotate(t, t, n), e && (t[4] += e[0], t[5] += e[1]), t[4] += o[0], t[5] += o[1], t
		}, h.setTransform = function(t) {
			var e = this.transform;
			e && t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
		};
		var u = [];
		h.decomposeTransform = function() {
			if (this.transform) {
				var t = this.parent,
					e = this.transform;
				t && t.transform && (a.mul(u, t.invTransform, e), e = u);
				var i = e[0] * e[0] + e[1] * e[1],
					o = e[2] * e[2] + e[3] * e[3],
					r = this.position,
					s = this.scale;
				n(i - 1) && (i = Math.sqrt(i)), n(o - 1) && (o = Math.sqrt(o)), e[0] < 0 && (i = -i), e[3] < 0 && (o = -o), r[0] = e[4], r[1] = e[5], s[0] = i, s[1] = o, this.rotation = Math.atan2(-e[1] / o, e[0] / i)
			}
		}, h.transformCoordToLocal = function(t, e) {
			var i = [t, e],
				n = this.invTransform;
			return n && o.applyTransform(i, i, n), i
		}, h.transformCoordToGlobal = function(t, e) {
			var i = [t, e],
				n = this.transform;
			return n && o.applyTransform(i, i, n), i
		}, t.exports = l
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			a.each(o, function(e) {
				this[e] = a.bind(t[e], t)
			}, this)
		}
		var a = i(1),
			o = ["getDom", "getZr", "getWidth", "getHeight", "dispatchAction", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption"];
		t.exports = n
	}, function(t, e, i) {
		var n = i(1);
		i(51), i(80), i(81);
		var a = i(110),
			o = i(2);
		o.registerLayout(n.curry(a, "bar")), o.registerVisualCoding("chart", function(t) {
			t.eachSeriesByType("bar", function(t) {
				var e = t.getData();
				e.setVisual("legendSymbol", "roundRect")
			})
		}), i(34)
	}, function(t, e, i) {
		"use strict";
		var n = i(13),
			a = i(36);
		t.exports = n.extend({
			type: "series.bar",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, e) {
				return a(t.data, this, e)
			},
			getMarkerPosition: function(t) {
				var e = this.coordinateSystem;
				if (e) {
					var i = e.dataToPoint(t),
						n = this.getData(),
						a = n.getLayout("offset"),
						o = n.getLayout("size"),
						r = e.getBaseAxis().isHorizontal() ? 0 : 1;
					return i[r] += a + o / 2, i
				}
				return [NaN, NaN]
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "cartesian2d",
				legendHoverLink: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				barMinHeight: 0,
				itemStyle: {
					normal: {
						barBorderColor: "#fff",
						barBorderWidth: 0
					},
					emphasis: {
						barBorderColor: "#fff",
						barBorderWidth: 0
					}
				}
			}
		})
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			var i = t.width > 0 ? 1 : -1,
				n = t.height > 0 ? 1 : -1;
			e = Math.min(e, Math.abs(t.width), Math.abs(t.height)), t.x += i * e / 2, t.y += n * e / 2, t.width -= i * e, t.height -= n * e
		}
		var a = i(1),
			o = i(3);
		a.extend(i(12).prototype, i(82)), t.exports = i(2).extendChartView({
			type: "bar",
			render: function(t, e, i) {
				var n = t.get("coordinateSystem");
				return "cartesian2d" === n && this._renderOnCartesian(t, e, i), this.group
			},
			_renderOnCartesian: function(t, e, i) {
				function r(e, i) {
					var r = l.getItemLayout(e),
						s = l.getItemModel(e).get(p) || 0;
					n(r, s);
					var h = new o.Rect({
						shape: a.extend({}, r)
					});
					if (f) {
						var u = h.shape,
							c = d ? "height" : "width",
							g = {};
						u[c] = 0, g[c] = r[c], o[i ? "updateProps" : "initProps"](h, {
							shape: g
						}, t)
					}
					return h
				}
				var s = this.group,
					l = t.getData(),
					h = this._data,
					u = t.coordinateSystem,
					c = u.getBaseAxis(),
					d = c.isHorizontal(),
					f = t.get("animation"),
					p = ["itemStyle", "normal", "barBorderWidth"];
				l.diff(h).add(function(t) {
					if (l.hasValue(t)) {
						var e = r(t);
						l.setItemGraphicEl(t, e), s.add(e)
					}
				}).update(function(e, i) {
					var a = h.getItemGraphicEl(i);
					if (!l.hasValue(e)) return void s.remove(a);
					a || (a = r(e, !0));
					var u = l.getItemLayout(e),
						c = l.getItemModel(e).get(p) || 0;
					n(u, c), o.updateProps(a, {
						shape: u
					}, t), l.setItemGraphicEl(e, a), s.add(a)
				}).remove(function(e) {
					var i = h.getItemGraphicEl(e);
					i && (i.style.text = "", o.updateProps(i, {
						shape: {
							width: 0
						}
					}, t, function() {
						s.remove(i)
					}))
				}).execute(), this._updateStyle(t, l, d), this._data = l
			},
			_updateStyle: function(t, e, i) {
				function n(t, e, i, n, a) {
					o.setText(t, e, i), t.text = n, "outside" === t.textPosition && (t.textPosition = a)
				}
				e.eachItemGraphicEl(function(r, s) {
					var l = e.getItemModel(s),
						h = e.getItemVisual(s, "color"),
						u = e.getItemVisual(s, "opacity"),
						c = e.getItemLayout(s),
						d = l.getModel("itemStyle.normal"),
						f = l.getModel("itemStyle.emphasis").getBarItemStyle();
					r.setShape("r", d.get("barBorderRadius") || 0), r.setStyle(a.defaults({
						fill: h,
						opacity: u
					}, d.getBarItemStyle()));
					var p = i ? c.height > 0 ? "bottom" : "top" : c.width > 0 ? "left" : "right",
						g = l.getModel("label.normal"),
						m = l.getModel("label.emphasis"),
						v = r.style;
					g.get("show") ? n(v, g, h, a.retrieve(t.getFormattedLabel(s, "normal"), t.getRawValue(s)), p) : v.text = "", m.get("show") ? n(f, m, h, a.retrieve(t.getFormattedLabel(s, "emphasis"), t.getRawValue(s)), p) : f.text = "", o.setHoverStyle(r, f)
				})
			},
			remove: function(t, e) {
				var i = this.group;
				t.get("animation") ? this._data && this._data.eachItemGraphicEl(function(e) {
					e.style.text = "", o.updateProps(e, {
						shape: {
							width: 0
						}
					}, t, function() {
						i.remove(e)
					})
				}) : i.removeAll()
			}
		})
	}, function(t, e, i) {
		t.exports = {
			getBarItemStyle: i(30)([
				["fill", "color"],
				["stroke", "borderColor"],
				["lineWidth", "borderWidth"],
				["stroke", "barBorderColor"],
				["lineWidth", "barBorderWidth"],
				["opacity"],
				["shadowBlur"],
				["shadowOffsetX"],
				["shadowOffsetY"],
				["shadowColor"]
			])
		}
	}, function(t, e, i) {
		function n(t, e, i) {
			var n = e.getItemVisual(i, "color"),
				a = e.getItemVisual(i, "symbol"),
				o = e.getItemVisual(i, "symbolSize");
			if ("none" !== a) {
				p.isArray(o) || (o = [o, o]);
				var r = u.createSymbol(a, -o[0] / 2, -o[1] / 2, o[0], o[1], n);
				return r.name = t, r
			}
		}
		function a(t) {
			var e = new d({
				name: "line",
				style: {
					strokeNoScale: !0
				}
			});
			return o(e.shape, t), e
		}
		function o(t, e) {
			var i = e[0],
				n = e[1],
				a = e[2];
			t.x1 = i[0], t.y1 = i[1], t.x2 = n[0], t.y2 = n[1], t.percent = 1, a && (t.cpx1 = a[0], t.cpy1 = a[1])
		}
		function r(t) {
			return "symbol" === t.type && "arrow" === t.shape.symbolType
		}
		function s() {
			var t = this,
				e = t.childOfName("line");
			if (this.__dirty || e.__dirty) {
				var i = t.childOfName("fromSymbol"),
					n = t.childOfName("toSymbol"),
					a = t.childOfName("label"),
					o = e.pointAt(0),
					s = e.pointAt(e.shape.percent),
					h = c.sub([], s, o);
				c.normalize(h, h), i && (i.attr("position", o), r(i) && i.attr("rotation", l(s, o))), n && (n.attr("position", s), r(n) && n.attr("rotation", l(o, s))), a.attr("position", s);
				var u, d, f;
				"end" === a.__position ? (u = [5 * h[0] + s[0], 5 * h[1] + s[1]], d = h[0] > .8 ? "left" : h[0] < -.8 ? "right" : "center", f = h[1] > .8 ? "top" : h[1] < -.8 ? "bottom" : "middle") : (u = [5 * -h[0] + o[0], 5 * -h[1] + o[1]], d = h[0] > .8 ? "right" : h[0] < -.8 ? "left" : "center", f = h[1] > .8 ? "bottom" : h[1] < -.8 ? "top" : "middle"), a.attr({
					style: {
						textVerticalAlign: a.__verticalAlign || f,
						textAlign: a.__textAlign || d
					},
					position: u
				})
			}
		}
		function l(t, e) {
			return -Math.PI / 2 - Math.atan2(e[1] - t[1], e[0] - t[0])
		}
		function h(t, e, i, n) {
			f.Group.call(this), this._createLine(t, e, i, n)
		}
		var u = i(24),
			c = i(5),
			d = i(162),
			f = i(3),
			p = i(1),
			g = i(4),
			m = h.prototype;
		m.beforeUpdate = s, m._createLine = function(t, e, i, o) {
			var r = t.hostModel,
				s = t.getItemLayout(o),
				l = a(s);
			l.shape.percent = 0, f.initProps(l, {
				shape: {
					percent: 1
				}
			}, r), this.add(l);
			var h = new f.Text({
				name: "label"
			});
			if (this.add(h), e) {
				var u = n("fromSymbol", e, o);
				this.add(u), this._fromSymbolType = e.getItemVisual(o, "symbol")
			}
			if (i) {
				var c = n("toSymbol", i, o);
				this.add(c), this._toSymbolType = i.getItemVisual(o, "symbol")
			}
			this._updateCommonStl(t, e, i, o)
		}, m.updateData = function(t, e, i, a) {
			var r = t.hostModel,
				s = this.childOfName("line"),
				l = t.getItemLayout(a),
				h = {
					shape: {}
				};
			if (o(h.shape, l), f.updateProps(s, h, r), e) {
				var u = e.getItemVisual(a, "symbol");
				if (this._fromSymbolType !== u) {
					var c = n("fromSymbol", e, a);
					this.remove(this.childOfName("fromSymbol")), this.add(c)
				}
				this._fromSymbolType = u
			}
			if (i) {
				var d = i.getItemVisual(a, "symbol");
				if (d !== this._toSymbolType) {
					var p = n("toSymbol", i, a);
					this.remove(this.childOfName("toSymbol")), this.add(p)
				}
				this._toSymbolType = d
			}
			this._updateCommonStl(t, e, i, a)
		}, m._updateCommonStl = function(t, e, i, n) {
			var a = t.hostModel,
				o = this.childOfName("line"),
				r = t.getItemModel(n),
				s = r.getModel("label.normal"),
				l = s.getModel("textStyle"),
				h = r.getModel("label.emphasis"),
				u = h.getModel("textStyle"),
				c = g.round(a.getRawValue(n));
			isNaN(c) && (c = t.getName(n)), o.setStyle(p.extend({
				stroke: t.getItemVisual(n, "color")
			}, r.getModel("lineStyle.normal").getLineStyle()));
			var d = this.childOfName("label");
			d.setStyle({
				text: s.get("show") ? p.retrieve(a.getFormattedLabel(n, "normal"), c) : "",
				textFont: l.getFont(),
				fill: l.getTextColor() || t.getItemVisual(n, "color")
			}), d.hoverStyle = {
				text: h.get("show") ? p.retrieve(a.getFormattedLabel(n, "emphasis"), c) : "",
				textFont: u.getFont(),
				fill: u.getTextColor()
			}, d.__textAlign = l.get("align"), d.__verticalAlign = l.get("baseline"), d.__position = s.get("position"), f.setHoverStyle(this, r.getModel("lineStyle.emphasis").getLineStyle())
		}, m.updateLayout = function(t, e, i, n) {
			var a = t.getItemLayout(n),
				r = this.childOfName("line");
			o(r.shape, a), r.dirty(!0)
		}, p.inherits(h, f.Group), t.exports = h
	}, function(t, e, i) {
		function n(t) {
			this._ctor = t || o, this.group = new a.Group
		}
		var a = i(3),
			o = i(83),
			r = n.prototype;
		r.updateData = function(t, e, i) {
			var n = this._lineData,
				a = this.group,
				o = this._ctor;
			t.diff(n).add(function(n) {
				var r = new o(t, e, i, n);
				t.setItemGraphicEl(n, r), a.add(r)
			}).update(function(o, r) {
				var s = n.getItemGraphicEl(r);
				s.updateData(t, e, i, o), t.setItemGraphicEl(o, s), a.add(s)
			}).remove(function(t) {
				a.remove(n.getItemGraphicEl(t))
			}).execute(), this._lineData = t, this._fromData = e, this._toData = i
		}, r.updateLayout = function() {
			var t = this._lineData;
			t.eachItemGraphicEl(function(e, i) {
				e.updateLayout(t, this._fromData, this._toData, i)
			}, this)
		}, r.remove = function() {
			this.group.removeAll()
		}, t.exports = n
	}, function(t, e, i) {
		var n = i(1),
			a = i(2);
		i(86), i(87), a.registerVisualCoding("chart", n.curry(i(44), "line", "circle", "line")), a.registerLayout(n.curry(i(53), "line")), a.registerProcessor("statistic", n.curry(i(122), "line")), i(34)
	}, function(t, e, i) {
		"use strict";
		var n = i(36),
			a = i(13);
		t.exports = a.extend({
			type: "series.line",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, e) {
				return n(t.data, this, e)
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "cartesian2d",
				legendHoverLink: !0,
				hoverAnimation: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				polarIndex: 0,
				clipOverflow: !0,
				label: {
					normal: {
						position: "top"
					}
				},
				lineStyle: {
					normal: {
						width: 2,
						type: "solid"
					}
				},
				symbol: "emptyCircle",
				symbolSize: 4,
				showSymbol: !0,
				animationEasing: "linear"
			}
		})
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			if (t.length === e.length) {
				for (var i = 0; i < t.length; i++) {
					var n = t[i],
						a = e[i];
					if (n[0] !== a[0] || n[1] !== a[1]) return
				}
				return !0
			}
		}
		function a(t) {
			return "number" == typeof t ? t : t ? .3 : 0
		}
		function o(t) {
			var e = t.getGlobalExtent();
			if (t.onBand) {
				var i = t.getBandWidth() / 2 - 1,
					n = e[1] > e[0] ? 1 : -1;
				e[0] += n * i, e[1] -= n * i
			}
			return e
		}
		function r(t) {
			return t >= 0 ? 1 : -1
		}
		function s(t, e) {
			var i = t.getBaseAxis(),
				n = t.getOtherAxis(i),
				a = i.onZero ? 0 : n.scale.getExtent()[0],
				o = n.dim,
				s = "x" === o || "radius" === o ? 1 : 0;
			return e.mapArray([o], function(n, l) {
				for (var h, u = e.stackedOn; u && r(u.get(o, l)) === r(n);) {
					h = u;
					break
				}
				var c = [];
				return c[s] = e.get(i.dim, l), c[1 - s] = h ? h.get(o, l, !0) : a, t.dataToPoint(c)
			}, !0)
		}
		function l(t, e) {
			return null != e.dataIndex ? e.dataIndex : null != e.name ? t.indexOfName(e.name) : void 0
		}
		function h(t, e, i) {
			var n = o(t.getAxis("x")),
				a = o(t.getAxis("y")),
				r = t.getBaseAxis().isHorizontal(),
				s = n[0],
				l = a[0],
				h = n[1] - s,
				u = a[1] - l;
			i.get("clipOverflow") || (r ? (l -= u, u *= 3) : (s -= h, h *= 3));
			var c = new m.Rect({
				shape: {
					x: s,
					y: l,
					width: h,
					height: u
				}
			});
			return e && (c.shape[r ? "width" : "height"] = 0, m.initProps(c, {
				shape: {
					width: h,
					height: u
				}
			}, i)), c
		}
		function u(t, e, i) {
			var n = t.getAngleAxis(),
				a = t.getRadiusAxis(),
				o = a.getExtent(),
				r = n.getExtent(),
				s = Math.PI / 180,
				l = new m.Sector({
					shape: {
						cx: t.cx,
						cy: t.cy,
						r0: o[0],
						r: o[1],
						startAngle: -r[0] * s,
						endAngle: -r[1] * s,
						clockwise: n.inverse
					}
				});
			return e && (l.shape.endAngle = -r[0] * s, m.initProps(l, {
				shape: {
					endAngle: -r[1] * s
				}
			}, i)), l
		}
		function c(t, e, i) {
			return "polar" === t.type ? u(t, e, i) : h(t, e, i)
		}
		var d = i(1),
			f = i(38),
			p = i(47),
			g = i(88),
			m = i(3),
			v = i(89),
			y = i(25);
		t.exports = y.extend({
			type: "line",
			init: function() {
				var t = new m.Group,
					e = new f;
				this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
			},
			render: function(t, e, i) {
				var o = t.coordinateSystem,
					r = this.group,
					l = t.getData(),
					h = t.getModel("lineStyle.normal"),
					u = t.getModel("areaStyle.normal"),
					f = l.mapArray(l.getItemLayout, !0),
					p = "polar" === o.type,
					g = this._coordSys,
					m = this._symbolDraw,
					v = this._polyline,
					y = this._polygon,
					x = this._lineGroup,
					_ = t.get("animation"),
					w = !u.isEmpty(),
					b = s(o, l),
					M = t.get("showSymbol"),
					S = M && !p && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(l, o),
					A = this._data;
				A && A.eachItemGraphicEl(function(t, e) {
					t.__temp && (r.remove(t), A.setItemGraphicEl(e, null))
				}), M || m.remove(), r.add(x), v && g.type === o.type ? (w && !y ? y = this._newPolygon(f, b, o, _) : y && !w && (x.remove(y), y = this._polygon = null), x.setClipPath(c(o, !1, t)), M && m.updateData(l, S), l.eachItemGraphicEl(function(t) {
					t.stopAnimation(!0)
				}), n(this._stackedOnPoints, b) && n(this._points, f) || (_ ? this._updateAnimation(l, b, o, i) : (v.setShape({
					points: f
				}), y && y.setShape({
					points: f,
					stackedOnPoints: b
				})))) : (M && m.updateData(l, S), v = this._newPolyline(f, o, _), w && (y = this._newPolygon(f, b, o, _)), x.setClipPath(c(o, !0, t))), v.setStyle(d.defaults(h.getLineStyle(), {
					stroke: l.getVisual("color"),
					lineJoin: "bevel"
				}));
				var I = t.get("smooth");
				if (I = a(t.get("smooth")), v.setShape({
					smooth: I,
					smoothMonotone: t.get("smoothMonotone")
				}), y) {
					var T = l.stackedOn,
						C = 0;
					if (y.style.opacity = .7, y.setStyle(d.defaults(u.getAreaStyle(), {
						fill: l.getVisual("color"),
						lineJoin: "bevel"
					})), T) {
						var L = T.hostModel;
						C = a(L.get("smooth"))
					}
					y.setShape({
						smooth: I,
						stackedOnSmooth: C,
						smoothMonotone: t.get("smoothMonotone")
					})
				}
				this._data = l, this._coordSys = o, this._stackedOnPoints = b, this._points = f
			},
			highlight: function(t, e, i, n) {
				var a = t.getData(),
					o = l(a, n);
				if (null != o && o >= 0) {
					var r = a.getItemGraphicEl(o);
					if (!r) {
						var s = a.getItemLayout(o);
						r = new p(a, o, i), r.position = s, r.setZ(t.get("zlevel"), t.get("z")), r.ignore = isNaN(s[0]) || isNaN(s[1]), r.__temp = !0, a.setItemGraphicEl(o, r), r.stopSymbolAnimation(!0), this.group.add(r)
					}
					r.highlight()
				} else y.prototype.highlight.call(this, t, e, i, n)
			},
			downplay: function(t, e, i, n) {
				var a = t.getData(),
					o = l(a, n);
				if (null != o && o >= 0) {
					var r = a.getItemGraphicEl(o);
					r && (r.__temp ? (a.setItemGraphicEl(o, null), this.group.remove(r)) : r.downplay())
				} else y.prototype.downplay.call(this, t, e, i, n)
			},
			_newPolyline: function(t) {
				var e = this._polyline;
				return e && this._lineGroup.remove(e), e = new v.Polyline({
					shape: {
						points: t
					},
					silent: !0,
					z2: 10
				}), this._lineGroup.add(e), this._polyline = e, e
			},
			_newPolygon: function(t, e) {
				var i = this._polygon;
				return i && this._lineGroup.remove(i), i = new v.Polygon({
					shape: {
						points: t,
						stackedOnPoints: e
					},
					silent: !0
				}), this._lineGroup.add(i), this._polygon = i, i
			},
			_getSymbolIgnoreFunc: function(t, e) {
				var i = e.getAxesByScale("ordinal")[0];
				return i && i.isLabelIgnored ? d.bind(i.isLabelIgnored, i) : void 0
			},
			_updateAnimation: function(t, e, i, n) {
				var a = this._polyline,
					o = this._polygon,
					r = t.hostModel,
					s = g(this._data, t, this._stackedOnPoints, e, this._coordSys, i);
				a.shape.points = s.current, m.updateProps(a, {
					shape: {
						points: s.next
					}
				}, r), o && (o.setShape({
					points: s.current,
					stackedOnPoints: s.stackedOnCurrent
				}), m.updateProps(o, {
					shape: {
						points: s.next,
						stackedOnPoints: s.stackedOnNext
					}
				}, r));
				for (var l = [], h = s.status, u = 0; u < h.length; u++) {
					var c = h[u].cmd;
					if ("=" === c) {
						var d = t.getItemGraphicEl(h[u].idx1);
						d && l.push({
							el: d,
							ptIdx: u
						})
					}
				}
				a.animators && a.animators.length && a.animators[0].during(function() {
					for (var t = 0; t < l.length; t++) {
						var e = l[t].el;
						e.attr("position", a.shape.points[l[t].ptIdx])
					}
				})
			},
			remove: function(t) {
				var e = this.group,
					i = this._data;
				this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function(t, n) {
					t.__temp && (e.remove(t), i.setItemGraphicEl(n, null))
				}), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
			}
		})
	}, function(t, e) {
		function i(t) {
			return t >= 0 ? 1 : -1
		}
		function n(t, e, n) {
			for (var a, o = t.getBaseAxis(), r = t.getOtherAxis(o), s = o.onZero ? 0 : r.scale.getExtent()[0], l = r.dim, h = "x" === l || "radius" === l ? 1 : 0, u = e.stackedOn, c = e.get(l, n); u && i(u.get(l, n)) === i(c);) {
				a = u;
				break
			}
			var d = [];
			return d[h] = e.get(o.dim, n), d[1 - h] = a ? a.get(l, n, !0) : s, t.dataToPoint(d)
		}
		function a(t, e) {
			var i = [];
			return e.diff(t).add(function(t) {
				i.push({
					cmd: "+",
					idx: t
				})
			}).update(function(t, e) {
				i.push({
					cmd: "=",
					idx: e,
					idx1: t
				})
			}).remove(function(t) {
				i.push({
					cmd: "-",
					idx: t
				})
			}).execute(), i
		}
		t.exports = function(t, e, i, o, r, s) {
			for (var l = a(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], m = s.dimensions, v = 0; v < l.length; v++) {
				var y = l[v],
					x = !0;
				switch (y.cmd) {
				case "=":
					var _ = t.getItemLayout(y.idx),
						w = e.getItemLayout(y.idx1);
					(isNaN(_[0]) || isNaN(_[1])) && (_ = w.slice()), h.push(_), u.push(w), c.push(i[y.idx]), d.push(o[y.idx1]), g.push(e.getRawIndex(y.idx1));
					break;
				case "+":
					var b = y.idx;
					h.push(r.dataToPoint([e.get(m[0], b, !0), e.get(m[1], b, !0)])), u.push(e.getItemLayout(b).slice()), c.push(n(r, e, b)), d.push(o[b]), g.push(e.getRawIndex(b));
					break;
				case "-":
					var b = y.idx,
						M = t.getRawIndex(b);
					M !== b ? (h.push(t.getItemLayout(b)), u.push(s.dataToPoint([t.get(m[0], b, !0), t.get(m[1], b, !0)])), c.push(i[b]), d.push(n(s, t, b)), g.push(M)) : x = !1
				}
				x && (f.push(y), p.push(p.length))
			}
			p.sort(function(t, e) {
				return g[t] - g[e]
			});
			for (var S = [], A = [], I = [], T = [], C = [], v = 0; v < p.length; v++) {
				var b = p[v];
				S[v] = h[b], A[v] = u[b], I[v] = c[b], T[v] = d[b], C[v] = f[b]
			}
			return {
				current: S,
				next: A,
				stackedOnCurrent: I,
				stackedOnNext: T,
				status: C
			}
		}
	}, function(t, e, i) {
		function n(t, e, i, n, a, o, p, g, m, v) {
			for (var y = i, x = 0; a > x; x++) {
				var _ = e[y];
				if (y >= n || 0 > y || isNaN(_[0]) || isNaN(_[1])) break;
				if (y === i) t[o > 0 ? "moveTo" : "lineTo"](_[0], _[1]), u(d, _);
				else if (m > 0) {
					var w = y - o,
						b = y + o,
						M = .5,
						S = e[w],
						A = e[b];
					if (o > 0 && (y === a - 1 || isNaN(A[0]) || isNaN(A[1])) || 0 >= o && (0 === y || isNaN(A[0]) || isNaN(A[1]))) u(f, _);
					else {
						(isNaN(A[0]) || isNaN(A[1])) && (A = _), r.sub(c, A, S);
						var I, T;
						if ("x" === v || "y" === v) {
							var C = "x" === v ? 0 : 1;
							I = Math.abs(_[C] - S[C]), T = Math.abs(_[C] - A[C])
						} else I = r.dist(_, S), T = r.dist(_, A);
						M = T / (T + I), h(f, _, c, -m * (1 - M))
					}
					s(d, d, g), l(d, d, p), s(f, f, g), l(f, f, p), t.bezierCurveTo(d[0], d[1], f[0], f[1], _[0], _[1]), h(d, _, c, m * M)
				} else t.lineTo(_[0], _[1]);
				y += o
			}
			return x
		}
		function a(t, e) {
			var i = [1 / 0, 1 / 0],
				n = [-(1 / 0), -(1 / 0)];
			if (e) for (var a = 0; a < t.length; a++) {
				var o = t[a];
				o[0] < i[0] && (i[0] = o[0]), o[1] < i[1] && (i[1] = o[1]), o[0] > n[0] && (n[0] = o[0]), o[1] > n[1] && (n[1] = o[1])
			}
			return {
				min: e ? i : n,
				max: e ? n : i
			}
		}
		var o = i(6),
			r = i(5),
			s = r.min,
			l = r.max,
			h = r.scaleAndAdd,
			u = r.copy,
			c = [],
			d = [],
			f = [];
		t.exports = {
			Polyline: o.extend({
				type: "ec-polyline",
				shape: {
					points: [],
					smooth: 0,
					smoothConstraint: !0,
					smoothMonotone: null
				},
				style: {
					fill: null,
					stroke: "#000"
				},
				buildPath: function(t, e) {
					for (var i = e.points, o = 0, r = i.length, s = a(i, e.smoothConstraint); r > o;) o += n(t, i, o, r, r, 1, s.min, s.max, e.smooth, e.smoothMonotone) + 1
				}
			}),
			Polygon: o.extend({
				type: "ec-polygon",
				shape: {
					points: [],
					stackedOnPoints: [],
					smooth: 0,
					stackedOnSmooth: 0,
					smoothConstraint: !0,
					smoothMonotone: null
				},
				buildPath: function(t, e) {
					for (var i = e.points, o = e.stackedOnPoints, r = 0, s = i.length, l = e.smoothMonotone, h = a(i, e.smoothConstraint), u = a(o, e.smoothConstraint); s > r;) {
						var c = n(t, i, r, s, s, 1, h.min, h.max, e.smooth, l);
						n(t, o, r + c - 1, s, c, -1, u.min, u.max, e.stackedOnSmooth, l), r += c + 1, t.closePath()
					}
				}
			})
		}
	}, function(t, e, i) {
		var n = i(1),
			a = i(2);
		i(91), i(92), i(68)("pie", [{
			type: "pieToggleSelect",
			event: "pieselectchanged",
			method: "toggleSelected"
		}, {
			type: "pieSelect",
			event: "pieselected",
			method: "select"
		}, {
			type: "pieUnSelect",
			event: "pieunselected",
			method: "unSelect"
		}]), a.registerVisualCoding("chart", n.curry(i(63), "pie")), a.registerLayout(n.curry(i(94), "pie")), a.registerProcessor("filter", n.curry(i(62), "pie"))
	}, function(t, e, i) {
		"use strict";
		var n = i(14),
			a = i(1),
			o = i(7),
			r = i(31),
			s = i(69),
			l = i(2).extendSeriesModel({
				type: "series.pie",
				init: function(t) {
					l.superApply(this, "init", arguments), this.legendDataProvider = function() {
						return this._dataBeforeProcessed
					}, this.updateSelectedMap(), this._defaultLabelLine(t)
				},
				mergeOption: function(t) {
					l.superCall(this, "mergeOption", t), this.updateSelectedMap()
				},
				getInitialData: function(t, e) {
					var i = r(["value"], t.data),
						a = new n(i, this);
					return a.initData(t.data), a
				},
				getDataParams: function(t) {
					var e = this._data,
						i = l.superCall(this, "getDataParams", t),
						n = e.getSum("value");
					return i.percent = n ? +(e.get("value", t) / n * 100).toFixed(2) : 0, i.$vars.push("percent"), i
				},
				_defaultLabelLine: function(t) {
					o.defaultEmphasis(t.labelLine, ["show"]);
					var e = t.labelLine.normal,
						i = t.labelLine.emphasis;
					e.show = e.show && t.label.normal.show, i.show = i.show && t.label.emphasis.show
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					legendHoverLink: !0,
					hoverAnimation: !0,
					center: ["50%", "50%"],
					radius: [0, "75%"],
					clockwise: !0,
					startAngle: 90,
					minAngle: 0,
					selectedOffset: 10,
					avoidLabelOverlap: !0,
					label: {
						normal: {
							rotate: !1,
							show: !0,
							position: "outer"
						},
						emphasis: {}
					},
					labelLine: {
						normal: {
							show: !0,
							length: 15,
							length2: 15,
							smooth: !1,
							lineStyle: {
								width: 1,
								type: "solid"
							}
						}
					},
					itemStyle: {
						normal: {
							borderColor: "rgba(0,0,0,0)",
							borderWidth: 1
						},
						emphasis: {
							borderColor: "rgba(0,0,0,0)",
							borderWidth: 1
						}
					},
					animationEasing: "cubicOut",
					data: []
				}
			});
		a.mixin(l, s), t.exports = l
	}, function(t, e, i) {
		function n(t, e, i, n) {
			var o = e.getData(),
				r = this.dataIndex,
				s = o.getName(r),
				l = e.get("selectedOffset");
			n.dispatchAction({
				type: "pieToggleSelect",
				from: t,
				name: s,
				seriesId: e.id
			}), o.each(function(t) {
				a(o.getItemGraphicEl(t), o.getItemLayout(t), e.isSelected(o.getName(t)), l, i)
			})
		}
		function a(t, e, i, n, a) {
			var o = (e.startAngle + e.endAngle) / 2,
				r = Math.cos(o),
				s = Math.sin(o),
				l = i ? n : 0,
				h = [r * l, s * l];
			a ? t.animate().when(200, {
				position: h
			}).start("bounceOut") : t.attr("position", h)
		}
		function o(t, e) {
			function i() {
				o.ignore = o.hoverIgnore, r.ignore = r.hoverIgnore
			}
			function n() {
				o.ignore = o.normalIgnore, r.ignore = r.normalIgnore
			}
			s.Group.call(this);
			var a = new s.Sector({
				z2: 2
			}),
				o = new s.Polyline,
				r = new s.Text;
			this.add(a), this.add(o), this.add(r), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
		}
		function r(t, e, i, n, a) {
			var o = n.getModel("textStyle"),
				r = "inside" === a || "inner" === a;
			return {
				fill: o.getTextColor() || (r ? "#fff" : t.getItemVisual(e, "color")),
				textFont: o.getFont(),
				text: l.retrieve(t.hostModel.getFormattedLabel(e, i), t.getName(e))
			}
		}
		var s = i(3),
			l = i(1),
			h = o.prototype;
		h.updateData = function(t, e, i) {
			function n() {
				r.stopAnimation(!0), r.animateTo({
					shape: {
						r: c.r + 10
					}
				}, 300, "elasticOut")
			}
			function o() {
				r.stopAnimation(!0), r.animateTo({
					shape: {
						r: c.r
					}
				}, 300, "elasticOut")
			}
			var r = this.childAt(0),
				h = t.hostModel,
				u = t.getItemModel(e),
				c = t.getItemLayout(e),
				d = l.extend({}, c);
			d.label = null, i ? (r.setShape(d), r.shape.endAngle = c.startAngle, s.updateProps(r, {
				shape: {
					endAngle: c.endAngle
				}
			}, h)) : s.updateProps(r, {
				shape: d
			}, h);
			var f = u.getModel("itemStyle"),
				p = t.getItemVisual(e, "color");
			r.setStyle(l.defaults({
				fill: p
			}, f.getModel("normal").getItemStyle())), r.hoverStyle = f.getModel("emphasis").getItemStyle(), a(this, t.getItemLayout(e), u.get("selected"), h.get("selectedOffset"), h.get("animation")), r.off("mouseover").off("mouseout").off("emphasis").off("normal"), u.get("hoverAnimation") && r.on("mouseover", n).on("mouseout", o).on("emphasis", n).on("normal", o), this._updateLabel(t, e), s.setHoverStyle(this)
		}, h._updateLabel = function(t, e) {
			var i = this.childAt(1),
				n = this.childAt(2),
				a = t.hostModel,
				o = t.getItemModel(e),
				l = t.getItemLayout(e),
				h = l.label,
				u = t.getItemVisual(e, "color");
			s.updateProps(i, {
				shape: {
					points: h.linePoints || [
						[h.x, h.y],
						[h.x, h.y],
						[h.x, h.y]
					]
				}
			}, a), s.updateProps(n, {
				style: {
					x: h.x,
					y: h.y
				}
			}, a), n.attr({
				style: {
					textVerticalAlign: h.verticalAlign,
					textAlign: h.textAlign,
					textFont: h.font
				},
				rotation: h.rotation,
				origin: [h.x, h.y],
				z2: 10
			});
			var c = o.getModel("label.normal"),
				d = o.getModel("label.emphasis"),
				f = o.getModel("labelLine.normal"),
				p = o.getModel("labelLine.emphasis"),
				g = c.get("position") || d.get("position");
			n.setStyle(r(t, e, "normal", c, g)), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), i.ignore = i.normalIgnore = !f.get("show"), i.hoverIgnore = !p.get("show"), i.setStyle({
				stroke: u
			}), i.setStyle(f.getModel("lineStyle").getLineStyle()), n.hoverStyle = r(t, e, "emphasis", d, g), i.hoverStyle = p.getModel("lineStyle").getLineStyle();
			var m = f.get("smooth");
			m && m === !0 && (m = .4), i.setShape({
				smooth: m
			})
		}, l.inherits(o, s.Group);
		var u = i(25).extend({
			type: "pie",
			init: function() {
				var t = new s.Group;
				this._sectorGroup = t
			},
			render: function(t, e, i, a) {
				if (!a || a.from !== this.uid) {
					var r = t.getData(),
						s = this._data,
						h = this.group,
						u = e.get("animation"),
						c = !s,
						d = l.curry(n, this.uid, t, u, i),
						f = t.get("selectedMode");
					if (r.diff(s).add(function(t) {
						var e = new o(r, t);
						c && e.eachChild(function(t) {
							t.stopAnimation(!0)
						}), f && e.on("click", d), r.setItemGraphicEl(t, e), h.add(e)
					}).update(function(t, e) {
						var i = s.getItemGraphicEl(e);
						i.updateData(r, t), i.off("click"), f && i.on("click", d), h.add(i), r.setItemGraphicEl(t, i)
					}).remove(function(t) {
						var e = s.getItemGraphicEl(t);
						h.remove(e)
					}).execute(), u && c && r.count() > 0) {
						var p = r.getItemLayout(0),
							g = Math.max(i.getWidth(), i.getHeight()) / 2,
							m = l.bind(h.removeClipPath, h);
						h.setClipPath(this._createClipPath(p.cx, p.cy, g, p.startAngle, p.clockwise, m, t))
					}
					this._data = r
				}
			},
			_createClipPath: function(t, e, i, n, a, o, r) {
				var l = new s.Sector({
					shape: {
						cx: t,
						cy: e,
						r0: 0,
						r: i,
						startAngle: n,
						endAngle: n,
						clockwise: a
					}
				});
				return s.initProps(l, {
					shape: {
						endAngle: n + (a ? 1 : -1) * Math.PI * 2
					}
				}, r, o), l
			}
		});
		t.exports = u
	}, function(t, e, i) {
		"use strict";

		function n(t, e, i, n, a, o, r) {
			function s(e, i, n, a) {
				for (var o = e; i > o; o++) if (t[o].y += n, o > e && i > o + 1 && t[o + 1].y > t[o].y + t[o].height) return void l(o, n / 2);
				l(i - 1, n / 2)
			}
			function l(e, i) {
				for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--);
			}
			function h(t, e, i, n, a, o) {
				for (var r = o > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++) if ("center" !== t[s].position) {
					var h = Math.abs(t[s].y - n),
						u = t[s].len,
						c = t[s].len2,
						d = a + u > h ? Math.sqrt((a + u + c) * (a + u + c) - h * h) : Math.abs(t[s].x - i);
					e && d >= r && (d = r - 10), !e && r >= d && (d = r + 10), t[s].x = i + d * o, r = d
				}
			}
			t.sort(function(t, e) {
				return t.y - e.y
			});
			for (var u, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++) u = t[g].y - c, 0 > u && s(g, d, -u, a), c = t[g].y + t[g].height;
			0 > r - c && l(d - 1, c - r);
			for (var g = 0; d > g; g++) t[g].y >= i ? p.push(t[g]) : f.push(t[g]);
			h(f, !1, e, i, n, a), h(p, !0, e, i, n, a)
		}
		function a(t, e, i, a, o, r) {
			for (var s = [], l = [], h = 0; h < t.length; h++) t[h].x < e ? s.push(t[h]) : l.push(t[h]);
			n(l, e, i, a, 1, o, r), n(s, e, i, a, -1, o, r);
			for (var h = 0; h < t.length; h++) {
				var u = t[h].linePoints;
				if (u) {
					var c = u[1][0] - u[2][0];
					t[h].x < e ? u[2][0] = t[h].x + 3 : u[2][0] = t[h].x - 3, u[1][1] = u[2][1] = t[h].y, u[1][0] = u[2][0] + c
				}
			}
		}
		var o = i(17);
		t.exports = function(t, e, i, n) {
			var r, s, l = t.getData(),
				h = [],
				u = !1;
			l.each(function(i) {
				var n, a, c, d, f = l.getItemLayout(i),
					p = l.getItemModel(i),
					g = p.getModel("label.normal"),
					m = g.get("position") || p.get("label.emphasis.position"),
					v = p.getModel("labelLine.normal"),
					y = v.get("length"),
					x = v.get("length2"),
					_ = (f.startAngle + f.endAngle) / 2,
					w = Math.cos(_),
					b = Math.sin(_);
				r = f.cx, s = f.cy;
				var M = "inside" === m || "inner" === m;
				if ("center" === m) n = f.cx, a = f.cy, d = "center";
				else {
					var S = (M ? (f.r + f.r0) / 2 * w : f.r * w) + r,
						A = (M ? (f.r + f.r0) / 2 * b : f.r * b) + s;
					if (n = S + 3 * w, a = A + 3 * b, !M) {
						var I = S + w * (y + e - f.r),
							T = A + b * (y + e - f.r),
							C = I + (0 > w ? -1 : 1) * x,
							L = T;
						n = C + (0 > w ? -5 : 5), a = L, c = [
							[S, A],
							[I, T],
							[C, L]
						]
					}
					d = M ? "center" : w > 0 ? "left" : "right"
				}
				var D = g.getModel("textStyle").getFont(),
					P = g.get("rotate") ? 0 > w ? -_ + Math.PI : -_ : 0,
					k = t.getFormattedLabel(i, "normal") || l.getName(i),
					z = o.getBoundingRect(k, D, d, "top");
				u = !! P, f.label = {
					x: n,
					y: a,
					position: m,
					height: z.height,
					len: y,
					len2: x,
					linePoints: c,
					textAlign: d,
					verticalAlign: "middle",
					font: D,
					rotation: P
				}, M || h.push(f.label)
			}), !u && t.get("avoidLabelOverlap") && a(h, r, s, e, i, n)
		}
	}, function(t, e, i) {
		var n = i(4),
			a = n.parsePercent,
			o = i(93),
			r = i(1),
			s = 2 * Math.PI,
			l = Math.PI / 180;
		t.exports = function(t, e, i) {
			e.eachSeriesByType(t, function(t) {
				var e = t.get("center"),
					h = t.get("radius");
				r.isArray(h) || (h = [0, h]), r.isArray(e) || (e = [e, e]);
				var u = i.getWidth(),
					c = i.getHeight(),
					d = Math.min(u, c),
					f = a(e[0], u),
					p = a(e[1], c),
					g = a(h[0], d / 2),
					m = a(h[1], d / 2),
					v = t.getData(),
					y = -t.get("startAngle") * l,
					x = t.get("minAngle") * l,
					_ = v.getSum("value"),
					w = Math.PI / (_ || v.count()) * 2,
					b = t.get("clockwise"),
					M = t.get("roseType"),
					S = v.getDataExtent("value");
				S[0] = 0;
				var A = s,
					I = 0,
					T = y,
					C = b ? 1 : -1;
				if (v.each("value", function(t, e) {
					var i;
					i = "area" !== M ? 0 === _ ? w : t * w : s / (v.count() || 1), x > i ? (i = x, A -= x) : I += t;
					var a = T + C * i;
					v.setItemLayout(e, {
						angle: i,
						startAngle: T,
						endAngle: a,
						clockwise: b,
						cx: f,
						cy: p,
						r0: g,
						r: M ? n.linearMap(t, S, [g, m]) : m
					}), T = a
				}, !0), s > A) if (.001 >= A) {
					var L = s / v.count();
					v.each(function(t) {
						var e = v.getItemLayout(t);
						e.startAngle = y + C * t * L, e.endAngle = y + C * (t + 1) * L
					})
				} else w = A / I, T = y, v.each("value", function(t, e) {
					var i = v.getItemLayout(e),
						n = i.angle === x ? x : t * w;
					i.startAngle = T, i.endAngle = T + C * n, T += n
				});
				o(t, m, u, c)
			})
		}
	}, function(t, e, i) {
		var n = i(1),
			a = {
				retrieveTargetInfo: function(t, e) {
					if (t && ("treemapZoomToNode" === t.type || "treemapRootToNode" === t.type)) {
						var i = e.getData().tree.root,
							n = t.targetNode;
						if (n && i.contains(n)) return {
							node: n
						};
						var a = t.targetNodeId;
						if (null != a && (n = i.getNodeById(a))) return {
							node: n
						}
					}
				},
				getPathToRoot: function(t) {
					for (var e = []; t;) e.push(t), t = t.parentNode;
					return e.reverse()
				},
				aboveViewRoot: function(t, e) {
					var i = a.getPathToRoot(t);
					return a.aboveViewRootByViewPath(i, e)
				},
				aboveViewRootByViewPath: function(t, e) {
					var i = n.indexOf(t, e);
					return i >= 0 && i !== t.length - 1
				}
			};
		t.exports = a
	}, function(t, e, i) {
		"use strict";
		i(50), i(97)
	}, function(t, e, i) {
		function n(t, e) {
			function i(t, e) {
				var i = n.getAxis(t);
				return i.toGlobalCoord(i.dataToCoord(0))
			}
			var n = t.coordinateSystem,
				a = e.axis,
				o = {},
				r = a.position,
				s = a.onZero ? "onZero" : r,
				l = a.dim,
				h = n.getRect(),
				u = [h.x, h.x + h.width, h.y, h.y + h.height],
				c = {
					x: {
						top: u[2],
						bottom: u[3]
					},
					y: {
						left: u[0],
						right: u[1]
					}
				};
			c.x.onZero = Math.max(Math.min(i("y"), c.x.bottom), c.x.top), c.y.onZero = Math.max(Math.min(i("x"), c.y.right), c.y.left), o.position = ["y" === l ? c.y[s] : u[0], "x" === l ? c.x[s] : u[3]];
			var d = {
				x: 0,
				y: 1
			};
			o.rotation = Math.PI / 2 * d[l];
			var f = {
				top: -1,
				bottom: 1,
				left: -1,
				right: 1
			};
			o.labelDirection = o.tickDirection = o.nameDirection = f[r], a.onZero && (o.labelOffset = c[l][r] - c[l].onZero), e.getModel("axisTick").get("inside") && (o.tickDirection = -o.tickDirection), e.getModel("axisLabel").get("inside") && (o.labelDirection = -o.labelDirection);
			var p = e.getModel("axisLabel").get("rotate");
			return o.labelRotation = "top" === s ? -p : p, o.labelInterval = a.getLabelInterval(), o.z2 = 1, o
		}
		var a = i(1),
			o = i(3),
			r = i(48),
			s = r.ifIgnoreOnTick,
			l = r.getInterval,
			h = ["axisLine", "axisLabel", "axisTick", "axisName"],
			u = ["splitLine", "splitArea"],
			c = i(2).extendComponentView({
				type: "axis",
				render: function(t, e) {
					if (this.group.removeAll(), t.get("show")) {
						var i = e.getComponent("grid", t.get("gridIndex")),
							o = n(i, t),
							s = new r(t, o);
						a.each(h, s.add, s), this.group.add(s.getGroup()), a.each(u, function(e) {
							t.get(e + ".show") && this["_" + e](t, i, o.labelInterval)
						}, this)
					}
				},
				_splitLine: function(t, e, i) {
					var n = t.axis,
						r = t.getModel("splitLine"),
						h = r.getModel("lineStyle"),
						u = h.get("width"),
						c = h.get("color"),
						d = l(r, i);
					c = a.isArray(c) ? c : [c];
					for (var f = e.coordinateSystem.getRect(), p = n.isHorizontal(), g = [], m = 0, v = n.getTicksCoords(), y = [], x = [], _ = 0; _ < v.length; _++) if (!s(n, _, d)) {
						var w = n.toGlobalCoord(v[_]);
						p ? (y[0] = w, y[1] = f.y, x[0] = w, x[1] = f.y + f.height) : (y[0] = f.x, y[1] = w, x[0] = f.x + f.width, x[1] = w);
						var b = m++ % c.length;
						g[b] = g[b] || [], g[b].push(new o.Line(o.subPixelOptimizeLine({
							shape: {
								x1: y[0],
								y1: y[1],
								x2: x[0],
								y2: x[1]
							},
							style: {
								lineWidth: u
							},
							silent: !0
						})))
					}
					for (var M = h.getLineStyle(), _ = 0; _ < g.length; _++) this.group.add(o.mergePath(g[_], {
						style: a.defaults({
							stroke: c[_ % c.length]
						}, M),
						silent: !0
					}))
				},
				_splitArea: function(t, e, i) {
					var n = t.axis,
						r = t.getModel("splitArea"),
						h = r.getModel("areaStyle"),
						u = h.get("color"),
						c = e.coordinateSystem.getRect(),
						d = n.getTicksCoords(),
						f = n.toGlobalCoord(d[0]),
						p = n.toGlobalCoord(d[0]),
						g = [],
						m = 0,
						v = l(r, i);
					u = a.isArray(u) ? u : [u];
					for (var y = 1; y < d.length; y++) if (!s(n, y, v)) {
						var x, _, w, b, M = n.toGlobalCoord(d[y]);
						n.isHorizontal() ? (x = f, _ = c.y, w = M - x, b = c.height) : (x = c.x, _ = p, w = c.width, b = M - _);
						var S = m++ % u.length;
						g[S] = g[S] || [], g[S].push(new o.Rect({
							shape: {
								x: x,
								y: _,
								width: w,
								height: b
							},
							silent: !0
						})), f = x + w, p = _ + b
					}
					for (var A = h.getAreaStyle(), y = 0; y < g.length; y++) this.group.add(o.mergePath(g[y], {
						style: a.defaults({
							fill: u[y % u.length]
						}, A),
						silent: !0
					}))
				}
			});
		c.extend({
			type: "xAxis"
		}), c.extend({
			type: "yAxis"
		})
	}, function(t, e, i) {
		var n = i(1),
			a = i(7),
			o = i(2);
		o.registerAction("dataZoom", function(t, e) {
			var i = a.createLinkedNodesFinder(n.bind(e.eachComponent, e, "dataZoom"), a.eachAxisDim, function(t, e) {
				return t.get(e.axisIndex)
			}),
				o = [];
			e.eachComponent({
				mainType: "dataZoom",
				query: t
			}, function(t, e) {
				o.push.apply(o, i(t).nodes)
			}), n.each(o, function(e, i) {
				e.setRawRange({
					start: t.start,
					end: t.end,
					startValue: t.startValue,
					endValue: t.endValue
				})
			})
		})
	}, function(t, e, i) {
		function n(t, e, i) {
			i.getAxisProxy(t.name, e).reset(i)
		}
		function a(t, e, i) {
			i.getAxisProxy(t.name, e).filterData(i)
		}
		var o = i(2);
		o.registerProcessor("filter", function(t, e) {
			t.eachComponent("dataZoom", function(t) {
				t.eachTargetAxis(n), t.eachTargetAxis(a)
			}), t.eachComponent("dataZoom", function(t) {
				var e = t.findRepresentativeAxisProxy(),
					i = e.getDataPercentWindow(),
					n = e.getDataValueWindow();
				t.setRawRange({
					start: i[0],
					end: i[1],
					startValue: n[0],
					endValue: n[1]
				})
			})
		})
	}, function(t, e, i) {
		function n(t) {
			var e = t[r];
			return e || (e = t[r] = [{}]), e
		}
		var a = i(1),
			o = a.each,
			r = "\x00_ec_hist_store",
			s = {
				push: function(t, e) {
					var i = n(t);
					o(e, function(e, n) {
						for (var a = i.length - 1; a >= 0; a--) {
							var o = i[a];
							if (o[n]) break
						}
						if (0 > a) {
							var r = t.queryComponents({
								mainType: "dataZoom",
								subType: "select",
								id: n
							})[0];
							if (r) {
								var s = r.getPercentRange();
								i[0][n] = {
									dataZoomId: n,
									start: s[0],
									end: s[1]
								}
							}
						}
					}), i.push(e)
				},
				pop: function(t) {
					var e = n(t),
						i = e[e.length - 1];
					e.length > 1 && e.pop();
					var a = {};
					return o(i, function(t, i) {
						for (var n = e.length - 1; n >= 0; n--) {
							var t = e[n][i];
							if (t) {
								a[i] = t;
								break
							}
						}
					}), a
				},
				clear: function(t) {
					t[r] = null
				},
				count: function(t) {
					return n(t).length
				}
			};
		t.exports = s
	}, function(t, e, i) {
		i(10).registerSubTypeDefaulter("dataZoom", function(t) {
			return "slider"
		})
	}, function(t, e) {
		function i(t) {
			return t[n] || (t[n] = {})
		}
		var n = "\x00_ec_interaction_mutex",
			a = {
				take: function(t, e) {
					i(e)[t] = !0
				},
				release: function(t, e) {
					i(e)[t] = !1
				},
				isTaken: function(t, e) {
					return !!i(e)[t]
				}
			};
		t.exports = a
	}, function(t, e, i) {
		function n(t, e, i) {
			a.positionGroup(t, e.getBoxLayoutParams(), {
				width: i.getWidth(),
				height: i.getHeight()
			}, e.get("padding"))
		}
		var a = i(11),
			o = i(9),
			r = i(3);
		t.exports = {
			layout: function(t, e, i) {
				var o = a.getLayoutRect(e.getBoxLayoutParams(), {
					width: i.getWidth(),
					height: i.getHeight()
				}, e.get("padding"));
				a.box(e.get("orient"), t, e.get("itemGap"), o.width, o.height), n(t, e, i)
			},
			addBackground: function(t, e) {
				var i = o.normalizeCssArray(e.get("padding")),
					n = t.getBoundingRect(),
					a = e.getItemStyle(["color", "opacity"]);
				a.fill = e.get("backgroundColor");
				var s = new r.Rect({
					shape: {
						x: n.x - i[3],
						y: n.y - i[0],
						width: n.width + i[1] + i[3],
						height: n.height + i[0] + i[2]
					},
					style: a,
					silent: !0,
					z2: -1
				});
				r.subPixelOptimizeRect(s), t.add(s)
			}
		}
	}, function(t, e, i) {
		function n(t, e, i) {
			var n = -1;
			do n = Math.max(r.getPrecision(t.get(e, i)), n), t = t.stackedOn;
			while (t);
			return n
		}
		function a(t, e, i, a, o, r) {
			var s = [],
				l = p(e, a, t),
				h = e.indexOfNearest(a, l, !0);
			s[o] = e.get(i, h, !0), s[r] = e.get(a, h, !0);
			var u = n(e, a, h);
			return u >= 0 && (s[r] = +s[r].toFixed(u)), s
		}
		var o = i(1),
			r = i(4),
			s = o.indexOf,
			l = o.curry,
			h = {
				min: l(a, "min"),
				max: l(a, "max"),
				average: l(a, "average")
			},
			u = function(t, e) {
				var i = t.getData(),
					n = t.coordinateSystem;
				if ((isNaN(e.x) || isNaN(e.y)) && !o.isArray(e.coord) && n) {
					var a = c(e, i, n, t);
					if (e = o.clone(e), e.type && h[e.type] && a.baseAxis && a.valueAxis) {
						var r = n.dimensions,
							l = s(r, a.baseAxis.dim),
							u = s(r, a.valueAxis.dim);
						e.coord = h[e.type](i, a.baseDataDim, a.valueDataDim, l, u), e.value = e.coord[u]
					} else e.coord = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis]
				}
				return e
			},
			c = function(t, e, i, n) {
				var a = {};
				return null != t.valueIndex || null != t.valueDim ? (a.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, a.valueAxis = i.getAxis(n.dataDimToCoordDim(a.valueDataDim)), a.baseAxis = i.getOtherAxis(a.valueAxis), a.baseDataDim = n.coordDimToDataDim(a.baseAxis.dim)[0]) : (a.baseAxis = n.getBaseAxis(), a.valueAxis = i.getOtherAxis(a.baseAxis), a.baseDataDim = n.coordDimToDataDim(a.baseAxis.dim)[0], a.valueDataDim = n.coordDimToDataDim(a.valueAxis.dim)[0]), a
			},
			d = function(t, e) {
				return t && t.containData && e.coord && (null == e.x || null == e.y) ? t.containData(e.coord) : !0
			},
			f = function(t, e, i, n) {
				return 2 > n ? t.coord && t.coord[n] : t.value
			},
			p = function(t, e, i) {
				return "average" === i ? t.getSum(e, !0) / t.count() : t.getDataExtent(e, !0)["max" === i ? 1 : 0]
			};
		t.exports = {
			dataTransform: u,
			dataFilter: d,
			dimValueGetter: f,
			getAxisInfo: c,
			numCalculate: p
		}
	}, function(t, e, i) {
		var n = i(1),
			a = i(43),
			o = i(109),
			r = function(t, e, i, n, o) {
				a.call(this, t, e, i), this.type = n || "value", this.position = o || "bottom"
			};
		r.prototype = {
			constructor: r,
			index: 0,
			onZero: !1,
			model: null,
			isHorizontal: function() {
				var t = this.position;
				return "top" === t || "bottom" === t
			},
			getGlobalExtent: function() {
				var t = this.getExtent();
				return t[0] = this.toGlobalCoord(t[0]), t[1] = this.toGlobalCoord(t[1]), t
			},
			getLabelInterval: function() {
				var t = this._labelInterval;
				return t || (t = this._labelInterval = o(this)), t
			},
			isLabelIgnored: function(t) {
				if ("category" === this.type) {
					var e = this.getLabelInterval();
					return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
				}
			},
			toLocalCoord: null,
			toGlobalCoord: null
		}, n.inherits(r, a), t.exports = r
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return this._axes[t]
		}
		var a = i(1),
			o = function(t) {
				this._axes = {}, this._dimList = [], this.name = t || ""
			};
		o.prototype = {
			constructor: o,
			type: "cartesian",
			getAxis: function(t) {
				return this._axes[t]
			},
			getAxes: function() {
				return a.map(this._dimList, n, this)
			},
			getAxesByScale: function(t) {
				return t = t.toLowerCase(), a.filter(this.getAxes(), function(e) {
					return e.scale.type === t
				})
			},
			addAxis: function(t) {
				var e = t.dim;
				this._axes[e] = t, this._dimList.push(e)
			},
			dataToCoord: function(t) {
				return this._dataCoordConvert(t, "dataToCoord")
			},
			coordToData: function(t) {
				return this._dataCoordConvert(t, "coordToData")
			},
			_dataCoordConvert: function(t, e) {
				for (var i = this._dimList, n = t instanceof Array ? [] : {}, a = 0; a < i.length; a++) {
					var o = i[a],
						r = this._axes[o];
					n[o] = r[e](t[o])
				}
				return n
			}
		}, t.exports = o
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			o.call(this, t)
		}
		var a = i(1),
			o = i(106);
		n.prototype = {
			constructor: n,
			type: "cartesian2d",
			dimensions: ["x", "y"],
			getBaseAxis: function() {
				return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
			},
			containPoint: function(t) {
				var e = this.getAxis("x"),
					i = this.getAxis("y");
				return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
			},
			containData: function(t) {
				return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
			},
			dataToPoints: function(t, e) {
				return t.mapArray(["x", "y"], function(t, e) {
					return this.dataToPoint([t, e])
				}, e, this)
			},
			dataToPoint: function(t, e) {
				var i = this.getAxis("x"),
					n = this.getAxis("y");
				return [i.toGlobalCoord(i.dataToCoord(t[0], e)), n.toGlobalCoord(n.dataToCoord(t[1], e))]
			},
			pointToData: function(t, e) {
				var i = this.getAxis("x"),
					n = this.getAxis("y");
				return [i.coordToData(i.toLocalCoord(t[0]), e), n.coordToData(n.toLocalCoord(t[1]), e)]
			},
			getOtherAxis: function(t) {
				return this.getAxis("x" === t.dim ? "y" : "x")
			}
		}, a.inherits(n, o), t.exports = n
	}, function(t, e, i) {
		"use strict";
		i(50);
		var n = i(10);
		t.exports = n.extend({
			type: "grid",
			dependencies: ["xAxis", "yAxis"],
			layoutMode: "box",
			coordinateSystem: null,
			defaultOption: {
				show: !1,
				zlevel: 0,
				z: 0,
				left: "10%",
				top: 60,
				right: "10%",
				bottom: 60,
				containLabel: !1,
				backgroundColor: "rgba(0,0,0,0)",
				borderWidth: 1,
				borderColor: "#ccc"
			}
		})
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			a = i(23);
		t.exports = function(t) {
			var e = t.model,
				i = e.getModel("axisLabel"),
				o = i.get("interval");
			return "category" !== t.type || "auto" !== o ? "auto" === o ? 0 : o : a.getAxisLabelInterval(n.map(t.scale.getTicks(), t.dataToCoord, t), e.getFormattedLabels(), i.getModel("textStyle").getFont(), t.isHorizontal())
		}
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return t.get("stack") || "__ec_stack_" + t.seriesIndex
		}
		function a(t, e) {
			var i = {};
			r.each(t, function(t, e) {
				var a = t.coordinateSystem,
					o = a.getBaseAxis(),
					r = i[o.index] || {
						remainedWidth: o.getBandWidth(),
						autoWidthCount: 0,
						categoryGap: "20%",
						gap: "30%",
						axis: o,
						stacks: {}
					},
					s = r.stacks;
				i[o.index] = r;
				var l = n(t);
				s[l] || r.autoWidthCount++, s[l] = s[l] || {
					width: 0,
					maxWidth: 0
				};
				var h = t.get("barWidth"),
					u = t.get("barMaxWidth"),
					c = t.get("barGap"),
					d = t.get("barCategoryGap");
				h && !s[l].width && (h = Math.min(r.remainedWidth, h), s[l].width = h, r.remainedWidth -= h), u && (s[l].maxWidth = u), null != c && (r.gap = c), null != d && (r.categoryGap = d)
			});
			var a = {};
			return r.each(i, function(t, e) {
				a[e] = {};
				var i = t.stacks,
					n = t.axis,
					o = n.getBandWidth(),
					s = l(t.categoryGap, o),
					h = l(t.gap, 1),
					u = t.remainedWidth,
					c = t.autoWidthCount,
					d = (u - s) / (c + (c - 1) * h);
				d = Math.max(d, 0), r.each(i, function(t, e) {
					var i = t.maxWidth;
					!t.width && i && d > i && (i = Math.min(i, u), u -= i, t.width = i, c--)
				}), d = (u - s) / (c + (c - 1) * h), d = Math.max(d, 0);
				var f, p = 0;
				r.each(i, function(t, e) {
					t.width || (t.width = d), f = t, p += t.width * (1 + h)
				}), f && (p -= f.width * h);
				var g = -p / 2;
				r.each(i, function(t, i) {
					a[e][i] = a[e][i] || {
						offset: g,
						width: t.width
					}, g += t.width * (1 + h)
				})
			}), a
		}
		function o(t, e, i) {
			var o = a(r.filter(e.getSeriesByType(t), function(t) {
				return !e.isSeriesFiltered(t) && t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
			})),
				s = {};
			e.eachSeriesByType(t, function(t) {
				var e = t.getData(),
					i = t.coordinateSystem,
					a = i.getBaseAxis(),
					r = n(t),
					l = o[a.index][r],
					h = l.offset,
					u = l.width,
					c = i.getOtherAxis(a),
					d = t.get("barMinHeight") || 0,
					f = a.onZero ? c.toGlobalCoord(c.dataToCoord(0)) : c.getGlobalExtent()[0],
					p = i.dataToPoints(e, !0);
				s[r] = s[r] || [], e.setLayout({
					offset: h,
					size: u
				}), e.each(c.dim, function(t, i) {
					if (!isNaN(t)) {
						s[r][i] || (s[r][i] = {
							p: f,
							n: f
						});
						var n, a, o, l, g = t >= 0 ? "p" : "n",
							m = p[i],
							v = s[r][i][g];
						c.isHorizontal() ? (n = v, a = m[1] + h, o = m[0] - v, l = u, Math.abs(o) < d && (o = (0 > o ? -1 : 1) * d), s[r][i][g] += o) : (n = m[0] + h, a = v, o = u, l = m[1] - v, Math.abs(l) < d && (l = (0 >= l ? -1 : 1) * d), s[r][i][g] += l), e.setItemLayout(i, {
							x: n,
							y: a,
							width: o,
							height: l
						})
					}
				}, !0)
			}, this)
		}
		var r = i(1),
			s = i(4),
			l = s.parsePercent;
		t.exports = o
	}, function(t, e, i) {
		var n = i(3),
			a = i(1),
			o = Math.PI;
		t.exports = function(t, e) {
			e = e || {}, a.defaults(e, {
				text: "loading",
				color: "#c23531",
				textColor: "#000",
				maskColor: "rgba(255, 255, 255, 0.8)",
				zlevel: 0
			});
			var i = new n.Rect({
				style: {
					fill: e.maskColor
				},
				zlevel: e.zlevel,
				z: 1e4
			}),
				r = new n.Arc({
					shape: {
						startAngle: -o / 2,
						endAngle: -o / 2 + .1,
						r: 10
					},
					style: {
						stroke: e.color,
						lineCap: "round",
						lineWidth: 5
					},
					zlevel: e.zlevel,
					z: 10001
				}),
				s = new n.Rect({
					style: {
						fill: "none",
						text: e.text,
						textPosition: "right",
						textDistance: 10,
						textFill: e.textColor
					},
					zlevel: e.zlevel,
					z: 10001
				});
			r.animateShape(!0).when(1e3, {
				endAngle: 3 * o / 2
			}).start("circularInOut"), r.animateShape(!0).when(1e3, {
				startAngle: 3 * o / 2
			}).delay(300).start("circularInOut");
			var l = new n.Group;
			return l.add(r), l.add(s), l.add(i), l.resize = function() {
				var e = t.getWidth() / 2,
					n = t.getHeight() / 2;
				r.setShape({
					cx: e,
					cy: n
				});
				var a = r.shape.r;
				s.setShape({
					x: e - a,
					y: n - a,
					width: 2 * a,
					height: 2 * a
				}), i.setShape({
					x: 0,
					y: 0,
					width: t.getWidth(),
					height: t.getHeight()
				})
			}, l.resize(), l
		}
	}, function(t, e, i) {
		function n(t, e) {
			for (var i in e) _.hasClass(i) || ("object" == typeof e[i] ? t[i] = t[i] ? c.merge(t[i], e[i], !1) : c.clone(e[i]) : null == t[i] && (t[i] = e[i]))
		}
		function a(t) {
			t = t, this.option = {}, this.option[b] = 1, this._componentsMap = {}, this._seriesIndices = null, n(t, this._theme.option), c.merge(t, w, !1), this.mergeOption(t)
		}
		function o(t, e) {
			c.isArray(e) || (e = e ? [e] : []);
			var i = {};
			return p(e, function(e) {
				i[e] = (t[e] || []).slice()
			}), i
		}
		function r(t, e) {
			var i = {};
			p(e, function(t, e) {
				var n = t.exist;
				n && (i[n.id] = t)
			}), p(e, function(e, n) {
				var a = e.option;
				if (c.assert(!a || null == a.id || !i[a.id] || i[a.id] === e, "id duplicates: " + (a && a.id)), a && null != a.id && (i[a.id] = e), x(a)) {
					var o = s(t, a, e.exist);
					e.keyInfo = {
						mainType: t,
						subType: o
					}
				}
			}), p(e, function(t, e) {
				var n = t.exist,
					a = t.option,
					o = t.keyInfo;
				if (x(a)) {
					if (o.name = null != a.name ? a.name + "" : n ? n.name : "\x00-", n) o.id = n.id;
					else if (null != a.id) o.id = a.id + "";
					else {
						var r = 0;
						do o.id = "\x00" + o.name + "\x00" + r++;
						while (i[o.id])
					}
					i[o.id] = t
				}
			})
		}
		function s(t, e, i) {
			var n = e.type ? e.type : i ? i.subType : _.determineSubType(t, e);
			return n
		}
		function l(t) {
			return m(t, function(t) {
				return t.componentIndex
			}) || []
		}
		function h(t, e) {
			return e.hasOwnProperty("subType") ? g(t, function(t) {
				return t.subType === e.subType
			}) : t
		}
		function u(t) {
			if (!t._seriesIndices) throw new Error("Series has not been initialized yet.")
		}
		var c = i(1),
			d = i(7),
			f = i(12),
			p = c.each,
			g = c.filter,
			m = c.map,
			v = c.isArray,
			y = c.indexOf,
			x = c.isObject,
			_ = i(10),
			w = i(114),
			b = "\x00_ec_inner",
			M = f.extend({
				constructor: M,
				init: function(t, e, i, n) {
					i = i || {}, this.option = null, this._theme = new f(i), this._optionManager = n
				},
				setOption: function(t, e) {
					c.assert(!(b in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption()
				},
				resetOption: function(t) {
					var e = !1,
						i = this._optionManager;
					if (!t || "recreate" === t) {
						var n = i.mountOption("recreate" === t);
						this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : a.call(this, n), e = !0
					}
					if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
						var o = i.getTimelineOption(this);
						o && (this.mergeOption(o), e = !0)
					}
					if (!t || "recreate" === t || "media" === t) {
						var r = i.getMediaOption(this, this._api);
						r.length && p(r, function(t) {
							this.mergeOption(t, e = !0)
						}, this)
					}
					return e
				},
				mergeOption: function(t) {
					function e(e, a) {
						var s = d.normalizeToArray(t[e]),
							h = d.mappingToExists(n[e], s);
						r(e, h);
						var u = o(n, a);
						i[e] = [], n[e] = [], p(h, function(t, a) {
							var o = t.exist,
								r = t.option;
							if (c.assert(x(r) || o, "Empty component definition"), r) {
								var s = _.getClass(e, t.keyInfo.subType, !0);
								o && o instanceof s ? (o.mergeOption(r, this), o.optionUpdated(this)) : (o = new s(r, this, this, c.extend({
									dependentModels: u,
									componentIndex: a
								}, t.keyInfo)), o.optionUpdated(this))
							} else o.mergeOption({}, this), o.optionUpdated(this);
							n[e][a] = o, i[e][a] = o.option
						}, this), "series" === e && (this._seriesIndices = l(n.series))
					}
					var i = this.option,
						n = this._componentsMap,
						a = [];
					p(t, function(t, e) {
						null != t && (_.hasClass(e) ? a.push(e) : i[e] = null == i[e] ? c.clone(t) : c.merge(i[e], t, !0))
					}), _.topologicalTravel(a, _.getAllClassMainTypes(), e, this)
				},
				getOption: function() {
					var t = c.clone(this.option);
					return p(t, function(e, i) {
						if (_.hasClass(i)) {
							for (var e = d.normalizeToArray(e), n = e.length - 1; n >= 0; n--) d.isIdInner(e[n]) && e.splice(n, 1);
							t[i] = e
						}
					}), delete t[b], t
				},
				getTheme: function() {
					return this._theme
				},
				getComponent: function(t, e) {
					var i = this._componentsMap[t];
					return i ? i[e || 0] : void 0
				},
				queryComponents: function(t) {
					var e = t.mainType;
					if (!e) return [];
					var i = t.index,
						n = t.id,
						a = t.name,
						o = this._componentsMap[e];
					if (!o || !o.length) return [];
					var r;
					if (null != i) v(i) || (i = [i]), r = g(m(i, function(t) {
						return o[t]
					}), function(t) {
						return !!t
					});
					else if (null != n) {
						var s = v(n);
						r = g(o, function(t) {
							return s && y(n, t.id) >= 0 || !s && t.id === n
						})
					} else if (null != a) {
						var l = v(a);
						r = g(o, function(t) {
							return l && y(a, t.name) >= 0 || !l && t.name === a
						})
					}
					return h(r, t)
				},
				findComponents: function(t) {
					function e(t) {
						var e = a + "Index",
							i = a + "Id",
							n = a + "Name";
						return t && (t.hasOwnProperty(e) || t.hasOwnProperty(i) || t.hasOwnProperty(n)) ? {
							mainType: a,
							index: t[e],
							id: t[i],
							name: t[n]
						} : null
					}
					function i(e) {
						return t.filter ? g(e, t.filter) : e
					}
					var n = t.query,
						a = t.mainType,
						o = e(n),
						r = o ? this.queryComponents(o) : this._componentsMap[a];
					return i(h(r, t))
				},
				eachComponent: function(t, e, i) {
					var n = this._componentsMap;
					if ("function" == typeof t) i = e, e = t, p(n, function(t, n) {
						p(t, function(t, a) {
							e.call(i, n, t, a)
						})
					});
					else if (c.isString(t)) p(n[t], e, i);
					else if (x(t)) {
						var a = this.findComponents(t);
						p(a, e, i)
					}
				},
				getSeriesByName: function(t) {
					var e = this._componentsMap.series;
					return g(e, function(e) {
						return e.name === t
					})
				},
				getSeriesByIndex: function(t) {
					return this._componentsMap.series[t]
				},
				getSeriesByType: function(t) {
					var e = this._componentsMap.series;
					return g(e, function(e) {
						return e.subType === t
					})
				},
				getSeries: function() {
					return this._componentsMap.series.slice()
				},
				eachSeries: function(t, e) {
					u(this), p(this._seriesIndices, function(i) {
						var n = this._componentsMap.series[i];
						t.call(e, n, i)
					}, this)
				},
				eachRawSeries: function(t, e) {
					p(this._componentsMap.series, t, e)
				},
				eachSeriesByType: function(t, e, i) {
					u(this), p(this._seriesIndices, function(n) {
						var a = this._componentsMap.series[n];
						a.subType === t && e.call(i, a, n)
					}, this)
				},
				eachRawSeriesByType: function(t, e, i) {
					return p(this.getSeriesByType(t), e, i)
				},
				isSeriesFiltered: function(t) {
					return u(this), c.indexOf(this._seriesIndices, t.componentIndex) < 0
				},
				filterSeries: function(t, e) {
					u(this);
					var i = g(this._componentsMap.series, t, e);
					this._seriesIndices = l(i)
				},
				restoreData: function() {
					var t = this._componentsMap;
					this._seriesIndices = l(t.series);
					var e = [];
					p(t, function(t, i) {
						e.push(i)
					}), _.topologicalTravel(e, _.getAllClassMainTypes(), function(e, i) {
						p(t[e], function(t) {
							t.restoreData()
						})
					})
				}
			});
		t.exports = M
	}, function(t, e, i) {
		function n(t) {
			this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newOptionBackup
		}
		function a(t, e) {
			var i, n, a = [],
				o = [],
				r = t.timeline;
			if (t.baseOption && (n = t.baseOption), (r || t.options) && (n = n || {}, a = (t.options || []).slice()), t.media) {
				n = n || {};
				var s = t.media;
				d(s, function(t) {
					t && t.option && (t.query ? o.push(t) : i || (i = t))
				})
			}
			return n || (n = t), n.timeline || (n.timeline = r), d([n].concat(a).concat(h.map(o, function(t) {
				return t.option
			})), function(t) {
				d(e, function(e) {
					e(t)
				})
			}), {
				baseOption: n,
				timelineOptions: a,
				mediaDefault: i,
				mediaList: o
			}
		}
		function o(t, e, i) {
			var n = {
				width: e,
				height: i,
				aspectratio: e / i
			},
				a = !0;
			return h.each(t, function(t, e) {
				var i = e.match(m);
				if (i && i[1] && i[2]) {
					var o = i[1],
						s = i[2].toLowerCase();
					r(n[s], t, o) || (a = !1)
				}
			}), a
		}
		function r(t, e, i) {
			return "min" === i ? t >= e : "max" === i ? e >= t : t === e
		}
		function s(t, e) {
			return t.join(",") === e.join(",")
		}
		function l(t, e) {
			e = e || {}, d(e, function(e, i) {
				if (null != e) {
					var n = t[i];
					if (c.hasClass(i)) {
						e = u.normalizeToArray(e), n = u.normalizeToArray(n);
						var a = u.mappingToExists(n, e);
						t[i] = p(a, function(t) {
							return t.option && t.exist ? g(t.exist, t.option, !0) : t.exist || t.option
						})
					} else t[i] = g(n, e, !0)
				}
			})
		}
		var h = i(1),
			u = i(7),
			c = i(10),
			d = h.each,
			f = h.clone,
			p = h.map,
			g = h.merge,
			m = /^(min|max)?(.+)$/;
		n.prototype = {
			constructor: n,
			setOption: function(t, e) {
				t = f(t, !0);
				var i = this._optionBackup,
					n = this._newOptionBackup = a.call(this, t, e);
				i ? (l(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n
			},
			mountOption: function(t) {
				var e = t ? this._optionBackup : this._newOptionBackup;
				return this._timelineOptions = p(e.timelineOptions, f), this._mediaList = p(e.mediaList, f), this._mediaDefault = f(e.mediaDefault), this._currentMediaIndices = [], f(e.baseOption)
			},
			getTimelineOption: function(t) {
				var e, i = this._timelineOptions;
				if (i.length) {
					var n = t.getComponent("timeline");
					n && (e = f(i[n.getCurrentIndex()], !0))
				}
				return e
			},
			getMediaOption: function(t) {
				var e = this._api.getWidth(),
					i = this._api.getHeight(),
					n = this._mediaList,
					a = this._mediaDefault,
					r = [],
					l = [];
				if (!n.length && !a) return l;
				for (var h = 0, u = n.length; u > h; h++) o(n[h].query, e, i) && r.push(h);
				return !r.length && a && (r = [-1]), r.length && !s(r, this._currentMediaIndices) && (l = p(r, function(t) {
					return f(-1 === t ? a.option : n[t].option)
				})), this._currentMediaIndices = r, l
			}
		}, t.exports = n
	}, function(t, e) {
		var i = "";
		"undefined" != typeof navigator && (i = navigator.platform || ""), t.exports = {
			color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
			grid: {},
			textStyle: {
				fontFamily: i.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
				fontSize: 12,
				fontStyle: "normal",
				fontWeight: "normal"
			},
			animation: !0,
			animationThreshold: 2e3,
			animationDuration: 1e3,
			animationDurationUpdate: 300,
			animationEasing: "exponentialOut",
			animationEasingUpdate: "cubicOut"
		}
	}, function(t, e, i) {
		t.exports = {
			getAreaStyle: i(30)([
				["fill", "color"],
				["shadowBlur"],
				["shadowOffsetX"],
				["shadowOffsetY"],
				["opacity"],
				["shadowColor"]
			])
		}
	}, function(t, e) {
		t.exports = {
			getBoxLayoutParams: function() {
				return {
					left: this.get("left"),
					top: this.get("top"),
					right: this.get("right"),
					bottom: this.get("bottom"),
					width: this.get("width"),
					height: this.get("height")
				}
			}
		}
	}, function(t, e, i) {
		t.exports = {
			getItemStyle: i(30)([
				["fill", "color"],
				["stroke", "borderColor"],
				["lineWidth", "borderWidth"],
				["opacity"],
				["shadowBlur"],
				["shadowOffsetX"],
				["shadowOffsetY"],
				["shadowColor"]
			])
		}
	}, function(t, e, i) {
		var n = i(30)([
			["lineWidth", "width"],
			["stroke", "color"],
			["opacity"],
			["shadowBlur"],
			["shadowOffsetX"],
			["shadowOffsetY"],
			["shadowColor"]
		]);
		t.exports = {
			getLineStyle: function(t) {
				var e = n.call(this, t),
					i = this.getLineDash();
				return i && (e.lineDash = i), e
			},
			getLineDash: function() {
				var t = this.get("type");
				return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
			}
		}
	}, function(t, e, i) {
		function n(t, e) {
			return t && t.getShallow(e)
		}
		var a = i(17);
		t.exports = {
			getTextColor: function() {
				var t = this.ecModel;
				return this.getShallow("color") || t && t.get("textStyle.color")
			},
			getFont: function() {
				var t = this.ecModel,
					e = t && t.getModel("textStyle");
				return [this.getShallow("fontStyle") || n(e, "fontStyle"), this.getShallow("fontWeight") || n(e, "fontWeight"), (this.getShallow("fontSize") || n(e, "fontSize") || 12) + "px", this.getShallow("fontFamily") || n(e, "fontFamily") || "sans-serif"].join(" ")
			},
			getTextRect: function(t) {
				var e = this.get("textStyle") || {};
				return a.getBoundingRect(t, this.getFont(), e.align, e.baseline)
			},
			ellipsis: function(t, e, i) {
				return a.ellipsis(t, this.getFont(), e, i)
			}
		}
	}, function(t, e, i) {
		function n(t, e) {
			e = e.split(",");
			for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++);
			return i
		}
		function a(t, e, i, n) {
			e = e.split(",");
			for (var a, o = t, r = 0; r < e.length - 1; r++) a = e[r], null == o[a] && (o[a] = {}), o = o[a];
			(n || null == o[e[r]]) && (o[e[r]] = i)
		}
		function o(t) {
			c(l, function(e) {
				e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
			})
		}
		var r = i(1),
			s = i(121),
			l = [
				["x", "left"],
				["y", "top"],
				["x2", "right"],
				["y2", "bottom"]
			],
			h = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
			u = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"],
			c = r.each;
		t.exports = function(t) {
			c(t.series, function(t) {
				if (r.isObject(t)) {
					var e = t.type;
					if (s(t), "pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
						var i = n(t, "pointer.color");
						null != i && a(t, "itemStyle.normal.color", i)
					}
					for (var l = 0; l < u.length; l++) if (u[l] === t.type) {
						o(t);
						break
					}
				}
			}), t.dataRange && (t.visualMap = t.dataRange), c(h, function(e) {
				var i = t[e];
				i && (r.isArray(i) || (i = [i]), c(i, function(t) {
					o(t)
				}))
			})
		}
	}, function(t, e, i) {
		function n(t) {
			var e = t && t.itemStyle;
			e && a.each(o, function(i) {
				var n = e.normal,
					o = e.emphasis;
				n && n[i] && (t[i] = t[i] || {}, t[i].normal ? a.merge(t[i].normal, n[i]) : t[i].normal = n[i], n[i] = null), o && o[i] && (t[i] = t[i] || {}, t[i].emphasis ? a.merge(t[i].emphasis, o[i]) : t[i].emphasis = o[i], o[i] = null)
			})
		}
		var a = i(1),
			o = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
		t.exports = function(t) {
			if (t) {
				n(t), n(t.markPoint), n(t.markLine);
				var e = t.data;
				if (e) {
					for (var i = 0; i < e.length; i++) n(e[i]);
					var o = t.markPoint;
					if (o && o.data) for (var r = o.data, i = 0; i < r.length; i++) n(r[i]);
					var s = t.markLine;
					if (s && s.data) for (var l = s.data, i = 0; i < l.length; i++) a.isArray(l[i]) ? (n(l[i][0]), n(l[i][1])) : n(l[i])
				}
			}
		}
	}, function(t, e) {
		var i = {
			average: function(t) {
				for (var e = 0, i = 0, n = 0; n < t.length; n++) isNaN(t[n]) || (e += t[n], i++);
				return 0 === i ? NaN : e / i
			},
			sum: function(t) {
				for (var e = 0, i = 0; i < t.length; i++) e += t[i] || 0;
				return e
			},
			max: function(t) {
				for (var e = -(1 / 0), i = 0; i < t.length; i++) t[i] > e && (e = t[i]);
				return e
			},
			min: function(t) {
				for (var e = 1 / 0, i = 0; i < t.length; i++) t[i] < e && (e = t[i]);
				return e
			},
			nearest: function(t) {
				return t[0]
			}
		},
			n = function(t, e) {
				return Math.round(t.length / 2)
			};
		t.exports = function(t, e, a) {
			e.eachSeriesByType(t, function(t) {
				var e = t.getData(),
					a = t.get("sampling"),
					o = t.coordinateSystem;
				if ("cartesian2d" === o.type && a) {
					var r = o.getBaseAxis(),
						s = o.getOtherAxis(r),
						l = r.getExtent(),
						h = l[1] - l[0],
						u = Math.round(e.count() / h);
					if (u > 1) {
						var c;
						"string" == typeof a ? c = i[a] : "function" == typeof a && (c = a), c && (e = e.downSample(s.dim, 1 / u, c, n), t.setData(e))
					}
				}
			}, this)
		}
	}, function(t, e, i) {
		var n = i(1),
			a = i(32),
			o = i(4),
			r = i(37),
			s = a.prototype,
			l = r.prototype,
			h = Math.floor,
			u = Math.ceil,
			c = Math.pow,
			d = 10,
			f = Math.log,
			p = a.extend({
				type: "log",
				getTicks: function() {
					return n.map(l.getTicks.call(this), function(t) {
						return o.round(c(d, t))
					})
				},
				getLabel: l.getLabel,
				scale: function(t) {
					return t = s.scale.call(this, t), c(d, t)
				},
				setExtent: function(t, e) {
					t = f(t) / f(d), e = f(e) / f(d), l.setExtent.call(this, t, e)
				},
				getExtent: function() {
					var t = s.getExtent.call(this);
					return t[0] = c(d, t[0]), t[1] = c(d, t[1]), t
				},
				unionExtent: function(t) {
					t[0] = f(t[0]) / f(d), t[1] = f(t[1]) / f(d), s.unionExtent.call(this, t)
				},
				niceTicks: function(t) {
					t = t || 10;
					var e = this._extent,
						i = e[1] - e[0];
					if (!(i === 1 / 0 || 0 >= i)) {
						var n = c(10, h(f(i / t) / Math.LN10)),
							a = t / i * n;.5 >= a && (n *= 10);
						var r = [o.round(u(e[0] / n) * n), o.round(h(e[1] / n) * n)];
						this._interval = n, this._niceExtent = r
					}
				},
				niceExtent: l.niceExtent
			});
		n.each(["contain", "normalize"], function(t) {
			p.prototype[t] = function(e) {
				return e = f(e) / f(d), s[t].call(this, e)
			}
		}), p.create = function() {
			return new p
		}, t.exports = p
	}, function(t, e, i) {
		var n = i(1),
			a = i(32),
			o = a.prototype,
			r = a.extend({
				type: "ordinal",
				init: function(t, e) {
					this._data = t, this._extent = e || [0, t.length - 1]
				},
				parse: function(t) {
					return "string" == typeof t ? n.indexOf(this._data, t) : Math.round(t)
				},
				contain: function(t) {
					return t = this.parse(t), o.contain.call(this, t) && null != this._data[t]
				},
				normalize: function(t) {
					return o.normalize.call(this, this.parse(t))
				},
				scale: function(t) {
					return Math.round(o.scale.call(this, t))
				},
				getTicks: function() {
					for (var t = [], e = this._extent, i = e[0]; i <= e[1];) t.push(i), i++;
					return t
				},
				getLabel: function(t) {
					return this._data[t]
				},
				count: function() {
					return this._extent[1] - this._extent[0] + 1
				},
				niceTicks: n.noop,
				niceExtent: n.noop
			});
		r.create = function() {
			return new r
		}, t.exports = r
	}, function(t, e, i) {
		var n = i(1),
			a = i(4),
			o = i(9),
			r = i(37),
			s = r.prototype,
			l = Math.ceil,
			h = Math.floor,
			u = 864e5,
			c = function(t, e, i, n) {
				for (; n > i;) {
					var a = i + n >>> 1;
					t[a][2] < e ? i = a + 1 : n = a
				}
				return i
			},
			d = r.extend({
				type: "time",
				getLabel: function(t) {
					var e = this._stepLvl,
						i = new Date(t);
					return o.formatTime(e[0], i)
				},
				niceExtent: function(t, e, i) {
					var n = this._extent;
					if (n[0] === n[1] && (n[0] -= u, n[1] += u), n[1] === -(1 / 0) && n[0] === 1 / 0) {
						var o = new Date;
						n[1] = new Date(o.getFullYear(), o.getMonth(), o.getDate()), n[0] = n[1] - u
					}
					this.niceTicks(t, e, i);
					var r = this._interval;
					e || (n[0] = a.round(h(n[0] / r) * r)), i || (n[1] = a.round(l(n[1] / r) * r))
				},
				niceTicks: function(t) {
					t = t || 10;
					var e = this._extent,
						i = e[1] - e[0],
						n = i / t,
						o = f.length,
						r = c(f, n, 0, o),
						s = f[Math.min(r, o - 1)],
						u = s[2];
					if ("year" === s[0]) {
						var d = i / u,
							p = a.nice(d / t, !0);
						u *= p
					}
					var g = [l(e[0] / u) * u, h(e[1] / u) * u];
					this._stepLvl = s, this._interval = u, this._niceExtent = g
				},
				parse: function(t) {
					return +a.parseDate(t)
				}
			});
		n.each(["contain", "normalize"], function(t) {
			d.prototype[t] = function(e) {
				return s[t].call(this, this.parse(e))
			}
		});
		var f = [
			["hh:mm:ss", 1, 1e3],
			["hh:mm:ss", 5, 5e3],
			["hh:mm:ss", 10, 1e4],
			["hh:mm:ss", 15, 15e3],
			["hh:mm:ss", 30, 3e4],
			["hh:mm\nMM-dd", 1, 6e4],
			["hh:mm\nMM-dd", 5, 3e5],
			["hh:mm\nMM-dd", 10, 6e5],
			["hh:mm\nMM-dd", 15, 9e5],
			["hh:mm\nMM-dd", 30, 18e5],
			["hh:mm\nMM-dd", 1, 36e5],
			["hh:mm\nMM-dd", 2, 72e5],
			["hh:mm\nMM-dd", 6, 216e5],
			["hh:mm\nMM-dd", 12, 432e5],
			["MM-dd\nyyyy", 1, u],
			["week", 7, 7 * u],
			["month", 1, 31 * u],
			["quarter", 3, 380 * u / 4],
			["half-year", 6, 380 * u / 2],
			["year", 1, 380 * u]
		];
		d.create = function() {
			return new d
		}, t.exports = d
	}, function(t, e) {
		var i = {},
			n = "\x00__throttleOriginMethod",
			a = "\x00__throttleRate";
		i.throttle = function(t, e, i, n) {
			function a(a) {
				function f() {
					u = (new Date).getTime(), c = null, (d ? t : t[a]).apply(r, s || [])
				}
				var p = function() {
						l = (new Date).getTime(), r = this, s = arguments, o = l - (n ? h : u) - e, clearTimeout(c), n ? i ? c = setTimeout(f, e) : o >= 0 && f() : o >= 0 ? f() : i && (c = setTimeout(f, -o)), h = l
					};
				return p.clear = function() {
					c && (clearTimeout(c), c = null)
				}, p
			}
			var o, r, s, l = (new Date).getTime(),
				h = 0,
				u = 0,
				c = null,
				d = "function" == typeof t;
			if (e = e || 0, d) return a();
			for (var f = [], p = 0; p < t.length; p++) f[p] = a(p);
			return f
		}, i.fixRate = function(t, e) {
			return null != e ? i.throttle(t, e, !0, !1) : t
		}, i.debounce = function(t, e) {
			return null != e ? i.throttle(t, e, !0, !0) : t
		}, i.createOrUpdate = function(t, e, o, r) {
			var s = t[e];
			if (s && null != o && r) {
				var l = s[n] || s,
					h = s[a];
				h !== o && (s = t[e] = i[r](l, o), s[n] = l, s[a] = o)
			}
		}, i.clear = function(t, e) {
			var i = t[e];
			i && i[n] && (t[e] = i[n])
		}, t.exports = i
	}, function(t, e, i) {
		"use strict";

		function n(t, e, i) {
			return {
				type: t,
				event: i,
				target: e,
				cancelBubble: !1,
				offsetX: i.zrX,
				offsetY: i.zrY,
				gestureEvent: i.gestureEvent,
				pinchX: i.pinchX,
				pinchY: i.pinchY,
				pinchScale: i.pinchScale,
				wheelDelta: i.zrDelta
			}
		}
		function a(t, e, i) {
			var n = t._gestureMgr;
			"start" === i && n.clear();
			var a = n.recognize(e, t.findHover(e.zrX, e.zrY, null));
			if ("end" === i && n.clear(), a) {
				var o = a.type;
				e.gestureEvent = o, t._dispatchProxy(a.target, o, a.event)
			}
		}
		function o(t) {
			function e(t, e) {
				return function() {
					return e._touching ? void 0 : t.apply(e, arguments)
				}
			}
			for (var i = y.concat(x), n = 0; n < i.length; n++) {
				var a = i[n];
				t._handlers[a] = f.bind(S[a], t)
			}
			for (var n = 0; n < v.length; n++) {
				var a = v[n];
				t._handlers[a] = e(S[a], t)
			}
		}
		function r(t, e, i) {
			if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
				for (var n = t; n;) {
					if (n.silent || n.clipPath && !n.clipPath.contain(e, i)) return !1;
					n = n.parent
				}
				return !0
			}
			return !1
		}
		function s(t) {
			t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
				t._touching = !1
			}, 700)
		}
		function l() {
			return !1
		}
		function h() {
			return c.touchEventsSupported
		}
		function u(t) {
			return "mousewheel" === t && c.browser.firefox ? "DOMMouseScroll" : t
		}
		var c = i(15),
			d = i(33),
			f = i(1),
			p = i(155),
			g = i(139),
			m = i(21),
			v = ["click", "dblclick", "mousewheel", "mouseout"];
		!l() && v.push("mouseup", "mousedown", "mousemove");
		var y = ["touchstart", "touchend", "touchmove"],
			x = ["pointerdown", "pointerup", "pointermove"],
			_ = 300,
			w = d.addEventListener,
			b = d.removeEventListener,
			M = d.normalizeEvent,
			S = {
				mousemove: function(t) {
					t = M(this.root, t);
					var e = t.zrX,
						i = t.zrY,
						n = this.findHover(e, i, null),
						a = this._hovered;
					this._hovered = n, this.root.style.cursor = n ? n.cursor : this._defaultCursorStyle, a && n !== a && a.__zr && this._dispatchProxy(a, "mouseout", t), this._dispatchProxy(n, "mousemove", t), n && n !== a && this._dispatchProxy(n, "mouseover", t)
				},
				mouseout: function(t) {
					t = M(this.root, t);
					var e = t.toElement || t.relatedTarget;
					if (e != this.root) for (; e && 9 != e.nodeType;) {
						if (e === this.root) return;
						e = e.parentNode
					}
					this._dispatchProxy(this._hovered, "mouseout", t), this.trigger("globalout", {
						event: t
					})
				},
				touchstart: function(t) {
					t = M(this.root, t), this._lastTouchMoment = new Date, a(this, t, "start"), S.mousemove.call(this, t), S.mousedown.call(this, t), s(this)
				},
				touchmove: function(t) {
					t = M(this.root, t), a(this, t, "change"), S.mousemove.call(this, t), s(this)
				},
				touchend: function(t) {
					t = M(this.root, t), a(this, t, "end"), S.mouseup.call(this, t), +new Date - this._lastTouchMoment < _ && S.click.call(this, t), s(this)
				}
			};
		f.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick"], function(t) {
			S[t] = function(e) {
				e = M(this.root, e);
				var i = this.findHover(e.zrX, e.zrY, null);
				this._dispatchProxy(i, t, e)
			}
		});
		var A = function(t, e, i) {
				function n(e, i) {
					f.each(e, function(e) {
						w(t, u(e), i._handlers[e])
					}, i)
				}
				m.call(this), this.root = t, this.storage = e, this.painter = i, this._hovered, this._lastTouchMoment, this._lastX, this._lastY, this._defaultCursorStyle = "default", this._gestureMgr = new g, this._handlers = [], this._touching = !1, this._touchTimer, o(this), l() ? n(x, this) : h() && n(y, this), n(v, this), p.call(this)
			};
		A.prototype = {
			constructor: A,
			resize: function(t) {
				this._hovered = null
			},
			dispatch: function(t, e) {
				var i = this._handlers[t];
				i && i.call(this, e)
			},
			dispose: function() {
				for (var t = this.root, e = v.concat(y), i = 0; i < e.length; i++) {
					var n = e[i];
					b(t, u(n), this._handlers[n])
				}
				this.root = this.storage = this.painter = null
			},
			setDefaultCursorStyle: function(t) {
				this._defaultCursorStyle = t
			},
			_dispatchProxy: function(t, e, i) {
				for (var a = "on" + e, o = n(e, t, i), r = t; r && (r[a] && (o.cancelBubble = r[a].call(r, o)), r.trigger(e, o), r = r.parent, !o.cancelBubble););
				o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer(function(t) {
					"function" == typeof t[a] && t[a].call(t, o), t.trigger && t.trigger(e, o)
				}))
			},
			findHover: function(t, e, i) {
				for (var n = this.storage.getDisplayList(), a = n.length - 1; a >= 0; a--) if (!n[a].silent && n[a] !== i && !n[a].ignore && r(n[a], t, e)) return n[a]
			}
		}, f.mixin(A, m), f.mixin(A, p), t.exports = A
	}, function(t, e, i) {
		function n() {
			return !1
		}
		function a(t, e, i, n) {
			var a = document.createElement(e),
				o = i.getWidth(),
				r = i.getHeight(),
				s = a.style;
			return s.position = "absolute", s.left = 0, s.top = 0, s.width = o + "px", s.height = r + "px", a.width = o * n, a.height = r * n, a.setAttribute("data-zr-dom-id", t), a
		}
		var o = i(1),
			r = i(42),
			s = function(t, e, i) {
				var s;
				i = i || r.devicePixelRatio, "string" == typeof t ? s = a(t, "canvas", e, i) : o.isObject(t) && (s = t, t = s.id), this.id = t, this.dom = s;
				var l = s.style;
				l && (s.onselectstart = n, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)"), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
			};
		s.prototype = {
			constructor: s,
			elCount: 0,
			__dirty: !0,
			initContext: function() {
				this.ctx = this.dom.getContext("2d");
				var t = this.dpr;
				1 != t && this.ctx.scale(t, t)
			},
			createBackBuffer: function() {
				var t = this.dpr;
				this.domBack = a("back-" + this.id, "canvas", this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
			},
			resize: function(t, e) {
				var i = this.dpr,
					n = this.dom,
					a = n.style,
					o = this.domBack;
				a.width = t + "px", a.height = e + "px", n.width = t * i, n.height = e * i, 1 != i && this.ctx.scale(i, i), o && (o.width = t * i, o.height = e * i, 1 != i && this.ctxBack.scale(i, i))
			},
			clear: function(t) {
				var e = this.dom,
					i = this.ctx,
					n = e.width,
					a = e.height,
					o = this.clearColor,
					r = this.motionBlur && !t,
					s = this.lastFrameAlpha,
					l = this.dpr;
				if (r && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / l, a / l)), i.clearRect(0, 0, n / l, a / l), o && (i.save(), i.fillStyle = this.clearColor, i.fillRect(0, 0, n / l, a / l), i.restore()), r) {
					var h = this.domBack;
					i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, n / l, a / l), i.restore()
				}
			}
		}, t.exports = s
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return parseInt(t, 10)
		}
		function a(t) {
			return t ? t.isBuildin ? !0 : "function" == typeof t.resize && "function" == typeof t.refresh : !1
		}
		function o(t) {
			t.__unusedCount++
		}
		function r(t) {
			t.__dirty = !1, 1 == t.__unusedCount && t.clear()
		}
		function s(t, e, i) {
			return g.copy(t.getBoundingRect()), t.transform && g.applyTransform(t.transform), m.width = e, m.height = i, !g.intersect(m)
		}
		function l(t, e) {
			if (!t || !e || t.length !== e.length) return !0;
			for (var i = 0; i < t.length; i++) if (t[i] !== e[i]) return !0
		}
		function h(t, e) {
			for (var i = 0; i < t.length; i++) {
				var n, a = t[i];
				a.transform && (n = a.transform, e.transform(n[0], n[1], n[2], n[3], n[4], n[5]));
				var o = a.path;
				o.beginPath(e), a.buildPath(o, a.shape), e.clip(), a.transform && (n = a.invTransform, e.transform(n[0], n[1], n[2], n[3], n[4], n[5]))
			}
		}
		var u = i(42),
			c = i(1),
			d = i(45),
			f = i(8),
			p = i(128),
			g = new f(0, 0, 0, 0),
			m = new f(0, 0, 0, 0),
			v = function(t, e, i) {
				var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
				i = i || {}, this.dpr = i.devicePixelRatio || u.devicePixelRatio, this._singleCanvas = n, this.root = t;
				var a = t.style;
				if (a && (a["-webkit-tap-highlight-color"] = "transparent", a["-webkit-user-select"] = "none", a["user-select"] = "none", a["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e, n) {
					var o = t.width,
						r = t.height;
					this._width = o, this._height = r;
					var s = new p(t, this, 1);
					s.initContext(), this._layers = {
						0: s
					}, this._zlevelList = [0]
				} else {
					var o = this._getWidth(),
						r = this._getHeight();
					this._width = o, this._height = r;
					var l = document.createElement("div");
					this._domRoot = l;
					var h = l.style;
					h.position = "relative", h.overflow = "hidden", h.width = this._width + "px", h.height = this._height + "px", t.appendChild(l), this._layers = {}, this._zlevelList = []
				}
				this._layerConfig = {}, this.pathToImage = this._createPathToImage()
			};
		v.prototype = {
			constructor: v,
			isSingleCanvas: function() {
				return this._singleCanvas
			},
			getViewportRoot: function() {
				return this._singleCanvas ? this._layers[0].dom : this._domRoot
			},
			refresh: function(t) {
				var e = this.storage.getDisplayList(!0),
					i = this._zlevelList;
				this._paintList(e, t);
				for (var n = 0; n < i.length; n++) {
					var a = i[n],
						o = this._layers[a];
					!o.isBuildin && o.refresh && o.refresh()
				}
				return this
			},
			_paintList: function(t, e) {
				null == e && (e = !1), this._updateLayerStatus(t);
				var i, n, a, u = this._width,
					c = this._height;
				this.eachBuildinLayer(o);
				for (var f = null, p = 0, g = t.length; g > p; p++) {
					var m = t[p],
						v = this._singleCanvas ? 0 : m.zlevel;
					if (n !== v && (n = v, i = this.getLayer(n), i.isBuildin || d("ZLevel " + n + " has been used by unkown layer " + i.id), a = i.ctx, i.__unusedCount = 0, (i.__dirty || e) && i.clear()), (i.__dirty || e) && !m.invisible && 0 !== m.style.opacity && m.scale[0] && m.scale[1] && (!m.culling || !s(m, u, c))) {
						var y = m.__clipPaths;
						l(y, f) && (f && a.restore(), y && (a.save(), h(y, a)), f = y), m.beforeBrush && m.beforeBrush(a), m.brush(a, !1), m.afterBrush && m.afterBrush(a)
					}
					m.__dirty = !1
				}
				f && a.restore(), this.eachBuildinLayer(r)
			},
			getLayer: function(t) {
				if (this._singleCanvas) return this._layers[0];
				var e = this._layers[t];
				return e || (e = new p("zr_" + t, this, this.dpr), e.isBuildin = !0, this._layerConfig[t] && c.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
			},
			insertLayer: function(t, e) {
				var i = this._layers,
					n = this._zlevelList,
					o = n.length,
					r = null,
					s = -1,
					l = this._domRoot;
				if (i[t]) return void d("ZLevel " + t + " has been used already");
				if (!a(e)) return void d("Layer of zlevel " + t + " is not valid");
				if (o > 0 && t > n[0]) {
					for (s = 0; o - 1 > s && !(n[s] < t && n[s + 1] > t); s++);
					r = i[n[s]]
				}
				if (n.splice(s + 1, 0, t), r) {
					var h = r.dom;
					h.nextSibling ? l.insertBefore(e.dom, h.nextSibling) : l.appendChild(e.dom)
				} else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom);
				i[t] = e
			},
			eachLayer: function(t, e) {
				var i, n, a = this._zlevelList;
				for (n = 0; n < a.length; n++) i = a[n], t.call(e, this._layers[i], i)
			},
			eachBuildinLayer: function(t, e) {
				var i, n, a, o = this._zlevelList;
				for (a = 0; a < o.length; a++) n = o[a], i = this._layers[n], i.isBuildin && t.call(e, i, n)
			},
			eachOtherLayer: function(t, e) {
				var i, n, a, o = this._zlevelList;
				for (a = 0; a < o.length; a++) n = o[a], i = this._layers[n], i.isBuildin || t.call(e, i, n)
			},
			getLayers: function() {
				return this._layers
			},
			_updateLayerStatus: function(t) {
				var e = this._layers,
					i = {};
				this.eachBuildinLayer(function(t, e) {
					i[e] = t.elCount, t.elCount = 0
				});
				for (var n = 0, a = t.length; a > n; n++) {
					var o = t[n],
						r = this._singleCanvas ? 0 : o.zlevel,
						s = e[r];
					if (s) {
						if (s.elCount++, s.__dirty) continue;
						s.__dirty = o.__dirty
					}
				}
				this.eachBuildinLayer(function(t, e) {
					i[e] !== t.elCount && (t.__dirty = !0)
				})
			},
			clear: function() {
				return this.eachBuildinLayer(this._clearLayer), this
			},
			_clearLayer: function(t) {
				t.clear()
			},
			configLayer: function(t, e) {
				if (e) {
					var i = this._layerConfig;
					i[t] ? c.merge(i[t], e, !0) : i[t] = e;
					var n = this._layers[t];
					n && c.merge(n, i[t], !0)
				}
			},
			delLayer: function(t) {
				var e = this._layers,
					i = this._zlevelList,
					n = e[t];
				n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(c.indexOf(i, t), 1))
			},
			resize: function(t, e) {
				var i = this._domRoot;
				if (i.style.display = "none", t = t || this._getWidth(), e = e || this._getHeight(), i.style.display = "", this._width != t || e != this._height) {
					i.style.width = t + "px", i.style.height = e + "px";
					for (var n in this._layers) this._layers[n].resize(t, e);
					this.refresh(!0)
				}
				return this._width = t, this._height = e, this
			},
			clearLayer: function(t) {
				var e = this._layers[t];
				e && e.clear()
			},
			dispose: function() {
				this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
			},
			getRenderedCanvas: function(t) {
				if (t = t || {}, this._singleCanvas) return this._layers[0].dom;
				var e = new p("image", this, t.pixelRatio || this.dpr);
				e.initContext();
				var i = e.ctx;
				e.clearColor = t.backgroundColor, e.clear();
				for (var n = this.storage.getDisplayList(!0), a = 0; a < n.length; a++) {
					var o = n[a];
					o.invisible || (o.beforeBrush && o.beforeBrush(i), o.brush(i, !1), o.afterBrush && o.afterBrush(i))
				}
				return e.dom
			},
			getWidth: function() {
				return this._width
			},
			getHeight: function() {
				return this._height
			},
			_getWidth: function() {
				var t = this.root,
					e = document.defaultView.getComputedStyle(t);
				return (t.clientWidth || n(e.width) || n(t.style.width)) - (n(e.paddingLeft) || 0) - (n(e.paddingRight) || 0) | 0
			},
			_getHeight: function() {
				var t = this.root,
					e = document.defaultView.getComputedStyle(t);
				return (t.clientHeight || n(e.height) || n(t.style.height)) - (n(e.paddingTop) || 0) - (n(e.paddingBottom) || 0) | 0
			},
			_pathToImage: function(t, e, n, a, o) {
				var r = document.createElement("canvas"),
					s = r.getContext("2d");
				r.width = n * o, r.height = a * o, s.clearRect(0, 0, n * o, a * o);
				var l = {
					position: e.position,
					rotation: e.rotation,
					scale: e.scale
				};
				e.position = [0, 0, 0], e.rotation = 0, e.scale = [1, 1], e && e.brush(s);
				var h = i(46),
					u = new h({
						id: t,
						style: {
							x: 0,
							y: 0,
							image: r
						}
					});
				return null != l.position && (u.position = e.position = l.position), null != l.rotation && (u.rotation = e.rotation = l.rotation), null != l.scale && (u.scale = e.scale = l.scale), u
			},
			_createPathToImage: function() {
				var t = this;
				return function(e, i, n, a) {
					return t._pathToImage(e, i, n, a, t.dpr)
				}
			}
		}, t.exports = v
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 === e.z2 ? t.__renderidx - e.__renderidx : t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
		}
		var a = i(1),
			o = i(26),
			r = function() {
				this._elements = {}, this._roots = [], this._displayList = [], this._displayListLen = 0
			};
		r.prototype = {
			constructor: r,
			getDisplayList: function(t, e) {
				return e = e || !1, t && this.updateDisplayList(e), this._displayList
			},
			updateDisplayList: function(t) {
				this._displayListLen = 0;
				for (var e = this._roots, i = this._displayList, a = 0, o = e.length; o > a; a++) this._updateAndAddDisplayable(e[a], null, t);
				i.length = this._displayListLen;
				for (var a = 0, o = i.length; o > a; a++) i[a].__renderidx = a;
				i.sort(n)
			},
			_updateAndAddDisplayable: function(t, e, i) {
				if (!t.ignore || i) {
					t.beforeUpdate(), t.update(), t.afterUpdate();
					var n = t.clipPath;
					if (n && (n.parent = t, n.updateTransform(), e ? (e = e.slice(), e.push(n)) : e = [n]), "group" == t.type) {
						for (var a = t._children, o = 0; o < a.length; o++) {
							var r = a[o];
							r.__dirty = t.__dirty || r.__dirty, this._updateAndAddDisplayable(r, e, i)
						}
						t.__dirty = !1
					} else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
				}
			},
			addRoot: function(t) {
				this._elements[t.id] || (t instanceof o && t.addChildrenToStorage(this), this.addToMap(t), this._roots.push(t))
			},
			delRoot: function(t) {
				if (null == t) {
					for (var e = 0; e < this._roots.length; e++) {
						var i = this._roots[e];
						i instanceof o && i.delChildrenFromStorage(this)
					}
					return this._elements = {}, this._roots = [], this._displayList = [], void(this._displayListLen = 0)
				}
				if (t instanceof Array) for (var e = 0, n = t.length; n > e; e++) this.delRoot(t[e]);
				else {
					var r;
					r = "string" == typeof t ? this._elements[t] : t;
					var s = a.indexOf(this._roots, r);
					s >= 0 && (this.delFromMap(r.id), this._roots.splice(s, 1), r instanceof o && r.delChildrenFromStorage(this))
				}
			},
			addToMap: function(t) {
				return t instanceof o && (t.__storage = this), t.dirty(), this._elements[t.id] = t, this
			},
			get: function(t) {
				return this._elements[t]
			},
			delFromMap: function(t) {
				var e = this._elements,
					i = e[t];
				return i && (delete e[t], i instanceof o && (i.__storage = null)), this
			},
			dispose: function() {
				this._elements = this._renderList = this._roots = null
			}
		}, t.exports = r
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			a = i(33).Dispatcher,
			o = "undefined" != typeof window && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) ||
		function(t) {
			setTimeout(t, 16)
		}, r = i(56), s = function(t) {
			t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe ||
			function() {}, this._clips = [], this._running = !1, this._time = 0, a.call(this)
		};
		s.prototype = {
			constructor: s,
			addClip: function(t) {
				this._clips.push(t)
			},
			addAnimator: function(t) {
				t.animation = this;
				for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i])
			},
			removeClip: function(t) {
				var e = n.indexOf(this._clips, t);
				e >= 0 && this._clips.splice(e, 1)
			},
			removeAnimator: function(t) {
				for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
				t.animation = null
			},
			_update: function() {
				for (var t = (new Date).getTime(), e = t - this._time, i = this._clips, n = i.length, a = [], o = [], r = 0; n > r; r++) {
					var s = i[r],
						l = s.step(t);
					l && (a.push(l), o.push(s))
				}
				for (var r = 0; n > r;) i[r]._needsRemove ? (i[r] = i[n - 1], i.pop(), n--) : r++;
				n = a.length;
				for (var r = 0; n > r; r++) o[r].fire(a[r]);
				this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
			},
			start: function() {
				function t() {
					e._running && (o(t), e._update())
				}
				var e = this;
				this._running = !0, this._time = (new Date).getTime(), o(t)
			},
			stop: function() {
				this._running = !1
			},
			clear: function() {
				this._clips = []
			},
			animate: function(t, e) {
				e = e || {};
				var i = new r(t, e.loop, e.getter, e.setter);
				return i
			}
		}, n.mixin(s, a), t.exports = s
	}, function(t, e, i) {
		function n(t) {
			this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart
		}
		var a = i(133);
		n.prototype = {
			constructor: n,
			step: function(t) {
				this._initialized || (this._startTime = (new Date).getTime() + this._delay, this._initialized = !0);
				var e = (t - this._startTime) / this._life;
				if (!(0 > e)) {
					e = Math.min(e, 1);
					var i = this.easing,
						n = "string" == typeof i ? a[i] : i,
						o = "function" == typeof n ? n(e) : e;
					return this.fire("frame", o), 1 == e ? this.loop ? (this.restart(), "restart") : (this._needsRemove = !0, "destroy") : null
				}
			},
			restart: function() {
				var t = (new Date).getTime(),
					e = (t - this._startTime) % this._life;
				this._startTime = (new Date).getTime() - e + this.gap, this._needsRemove = !1
			},
			fire: function(t, e) {
				t = "on" + t, this[t] && this[t](this._target, e)
			}
		}, t.exports = n
	}, function(t, e) {
		var i = {
			linear: function(t) {
				return t
			},
			quadraticIn: function(t) {
				return t * t
			},
			quadraticOut: function(t) {
				return t * (2 - t)
			},
			quadraticInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
			},
			cubicIn: function(t) {
				return t * t * t
			},
			cubicOut: function(t) {
				return --t * t * t + 1
			},
			cubicInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
			},
			quarticIn: function(t) {
				return t * t * t * t
			},
			quarticOut: function(t) {
				return 1 - --t * t * t * t
			},
			quarticInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
			},
			quinticIn: function(t) {
				return t * t * t * t * t
			},
			quinticOut: function(t) {
				return --t * t * t * t * t + 1
			},
			quinticInOut: function(t) {
				return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
			},
			sinusoidalIn: function(t) {
				return 1 - Math.cos(t * Math.PI / 2)
			},
			sinusoidalOut: function(t) {
				return Math.sin(t * Math.PI / 2)
			},
			sinusoidalInOut: function(t) {
				return .5 * (1 - Math.cos(Math.PI * t))
			},
			exponentialIn: function(t) {
				return 0 === t ? 0 : Math.pow(1024, t - 1)
			},
			exponentialOut: function(t) {
				return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
			},
			exponentialInOut: function(t) {
				return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
			},
			circularIn: function(t) {
				return 1 - Math.sqrt(1 - t * t)
			},
			circularOut: function(t) {
				return Math.sqrt(1 - --t * t)
			},
			circularInOut: function(t) {
				return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
			},
			elasticIn: function(t) {
				var e, i = .1,
					n = .4;
				return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
			},
			elasticOut: function(t) {
				var e, i = .1,
					n = .4;
				return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
			},
			elasticInOut: function(t) {
				var e, i = .1,
					n = .4;
				return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
			},
			backIn: function(t) {
				var e = 1.70158;
				return t * t * ((e + 1) * t - e)
			},
			backOut: function(t) {
				var e = 1.70158;
				return --t * t * ((e + 1) * t + e) + 1
			},
			backInOut: function(t) {
				var e = 2.5949095;
				return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
			},
			bounceIn: function(t) {
				return 1 - i.bounceOut(1 - t)
			},
			bounceOut: function(t) {
				return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
			},
			bounceInOut: function(t) {
				return .5 > t ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5
			}
		};
		t.exports = i
	}, function(t, e, i) {
		var n = i(57).normalizeRadian,
			a = 2 * Math.PI;
		t.exports = {
			containStroke: function(t, e, i, o, r, s, l, h, u) {
				if (0 === l) return !1;
				var c = l;
				h -= t, u -= e;
				var d = Math.sqrt(h * h + u * u);
				if (d - c > i || i > d + c) return !1;
				if (Math.abs(o - r) % a < 1e-4) return !0;
				if (s) {
					var f = o;
					o = n(r), r = n(f)
				} else o = n(o), r = n(r);
				o > r && (r += a);
				var p = Math.atan2(u, h);
				return 0 > p && (p += a), p >= o && r >= p || p + a >= o && r >= p + a
			}
		}
	}, function(t, e, i) {
		var n = i(18);
		t.exports = {
			containStroke: function(t, e, i, a, o, r, s, l, h, u, c) {
				if (0 === h) return !1;
				var d = h;
				if (c > e + d && c > a + d && c > r + d && c > l + d || e - d > c && a - d > c && r - d > c && l - d > c || u > t + d && u > i + d && u > o + d && u > s + d || t - d > u && i - d > u && o - d > u && s - d > u) return !1;
				var f = n.cubicProjectPoint(t, e, i, a, o, r, s, l, u, c, null);
				return d / 2 >= f
			}
		}
	}, function(t, e) {
		t.exports = {
			containStroke: function(t, e, i, n, a, o, r) {
				if (0 === a) return !1;
				var s = a,
					l = 0,
					h = t;
				if (r > e + s && r > n + s || e - s > r && n - s > r || o > t + s && o > i + s || t - s > o && i - s > o) return !1;
				if (t === i) return Math.abs(o - t) <= s / 2;
				l = (e - n) / (t - i), h = (t * n - i * e) / (t - i);
				var u = l * o - r + h,
					c = u * u / (l * l + 1);
				return s / 2 * s / 2 >= c
			}
		}
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			return Math.abs(t - e) < x
		}
		function a() {
			var t = w[0];
			w[0] = w[1], w[1] = t
		}
		function o(t, e, i, n, o, r, s, l, h, u) {
			if (u > e && u > n && u > r && u > l || e > u && n > u && r > u && l > u) return 0;
			var c = g.cubicRootAt(e, n, r, l, u, _);
			if (0 === c) return 0;
			for (var d, f, p = 0, m = -1, v = 0; c > v; v++) {
				var y = _[v],
					x = g.cubicAt(t, i, o, s, y);
				h > x || (0 > m && (m = g.cubicExtrema(e, n, r, l, w), w[1] < w[0] && m > 1 && a(), d = g.cubicAt(e, n, r, l, w[0]), m > 1 && (f = g.cubicAt(e, n, r, l, w[1]))), p += 2 == m ? y < w[0] ? e > d ? 1 : -1 : y < w[1] ? d > f ? 1 : -1 : f > l ? 1 : -1 : y < w[0] ? e > d ? 1 : -1 : d > l ? 1 : -1)
			}
			return p
		}
		function r(t, e, i, n, a, o, r, s) {
			if (s > e && s > n && s > o || e > s && n > s && o > s) return 0;
			var l = g.quadraticRootAt(e, n, o, s, _);
			if (0 === l) return 0;
			var h = g.quadraticExtremum(e, n, o);
			if (h >= 0 && 1 >= h) {
				for (var u = 0, c = g.quadraticAt(e, n, o, h), d = 0; l > d; d++) {
					var f = g.quadraticAt(t, i, a, _[d]);
					r > f || (u += _[d] < h ? e > c ? 1 : -1 : c > o ? 1 : -1)
				}
				return u
			}
			var f = g.quadraticAt(t, i, a, _[0]);
			return r > f ? 0 : e > o ? 1 : -1
		}
		function s(t, e, i, n, a, o, r, s) {
			if (s -= e, s > i || -i > s) return 0;
			var l = Math.sqrt(i * i - s * s);
			_[0] = -l, _[1] = l;
			var h = Math.abs(n - a);
			if (1e-4 > h) return 0;
			if (1e-4 > h % y) {
				n = 0, a = y;
				var u = o ? 1 : -1;
				return r >= _[0] + t && r <= _[1] + t ? u : 0
			}
			if (o) {
				var l = n;
				n = p(a), a = p(l)
			} else n = p(n), a = p(a);
			n > a && (a += y);
			for (var c = 0, d = 0; 2 > d; d++) {
				var f = _[d];
				if (f + t > r) {
					var g = Math.atan2(s, f),
						u = o ? 1 : -1;
					0 > g && (g = y + g), (g >= n && a >= g || g + y >= n && a >= g + y) && (g > Math.PI / 2 && g < 1.5 * Math.PI && (u = -u), c += u)
				}
			}
			return c
		}
		function l(t, e, i, a, l) {
			for (var u = 0, p = 0, g = 0, y = 0, x = 0, _ = 0; _ < t.length;) {
				var w = t[_++];
				if (w === h.M && _ > 1 && (i || (u += m(p, g, y, x, a, l)), 0 !== u)) return !0;
				switch (1 == _ && (p = t[_], g = t[_ + 1], y = p, x = g), w) {
				case h.M:
					y = t[_++], x = t[_++], p = y, g = x;
					break;
				case h.L:
					if (i) {
						if (v(p, g, t[_], t[_ + 1], e, a, l)) return !0
					} else u += m(p, g, t[_], t[_ + 1], a, l) || 0;
					p = t[_++], g = t[_++];
					break;
				case h.C:
					if (i) {
						if (c.containStroke(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], e, a, l)) return !0
					} else u += o(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], a, l) || 0;
					p = t[_++], g = t[_++];
					break;
				case h.Q:
					if (i) {
						if (d.containStroke(p, g, t[_++], t[_++], t[_], t[_ + 1], e, a, l)) return !0
					} else u += r(p, g, t[_++], t[_++], t[_], t[_ + 1], a, l) || 0;
					p = t[_++], g = t[_++];
					break;
				case h.A:
					var b = t[_++],
						M = t[_++],
						S = t[_++],
						A = t[_++],
						I = t[_++],
						T = t[_++],
						C = (t[_++], 1 - t[_++]),
						L = Math.cos(I) * S + b,
						D = Math.sin(I) * A + M;
					_ > 1 ? u += m(p, g, L, D, a, l) : (y = L, x = D);
					var P = (a - b) * A / S + b;
					if (i) {
						if (f.containStroke(b, M, A, I, I + T, C, e, P, l)) return !0
					} else u += s(b, M, A, I, I + T, C, P, l);
					p = Math.cos(I + T) * S + b, g = Math.sin(I + T) * A + M;
					break;
				case h.R:
					y = p = t[_++], x = g = t[_++];
					var k = t[_++],
						z = t[_++],
						L = y + k,
						D = x + z;
					if (i) {
						if (v(y, x, L, x, e, a, l) || v(L, x, L, D, e, a, l) || v(L, D, y, D, e, a, l) || v(y, D, L, D, e, a, l)) return !0
					} else u += m(L, x, L, D, a, l), u += m(y, D, y, x, a, l);
					break;
				case h.Z:
					if (i) {
						if (v(p, g, y, x, e, a, l)) return !0
					} else if (u += m(p, g, y, x, a, l), 0 !== u) return !0;
					p = y, g = x
				}
			}
			return i || n(g, x) || (u += m(p, g, y, x, a, l) || 0), 0 !== u
		}
		var h = i(27).CMD,
			u = i(136),
			c = i(135),
			d = i(138),
			f = i(134),
			p = i(57).normalizeRadian,
			g = i(18),
			m = i(75),
			v = u.containStroke,
			y = 2 * Math.PI,
			x = 1e-4,
			_ = [-1, -1, -1],
			w = [-1, -1];
		t.exports = {
			contain: function(t, e, i) {
				return l(t, 0, !1, e, i)
			},
			containStroke: function(t, e, i, n) {
				return l(t, e, !0, i, n)
			}
		}
	}, function(t, e, i) {
		var n = i(18);
		t.exports = {
			containStroke: function(t, e, i, a, o, r, s, l, h) {
				if (0 === s) return !1;
				var u = s;
				if (h > e + u && h > a + u && h > r + u || e - u > h && a - u > h && r - u > h || l > t + u && l > i + u && l > o + u || t - u > l && i - u > l && o - u > l) return !1;
				var c = n.quadraticProjectPoint(t, e, i, a, o, r, l, h, null);
				return u / 2 >= c
			}
		}
	}, function(t, e) {
		"use strict";

		function i(t) {
			var e = t[1][0] - t[0][0],
				i = t[1][1] - t[0][1];
			return Math.sqrt(e * e + i * i)
		}
		function n(t) {
			return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
		}
		var a = function() {
				this._track = []
			};
		a.prototype = {
			constructor: a,
			recognize: function(t, e) {
				return this._doTrack(t, e), this._recognize(t)
			},
			clear: function() {
				return this._track.length = 0, this
			},
			_doTrack: function(t, e) {
				var i = t.touches;
				if (i) {
					for (var n = {
						points: [],
						touches: [],
						target: e,
						event: t
					}, a = 0, o = i.length; o > a; a++) {
						var r = i[a];
						n.points.push([r.clientX, r.clientY]), n.touches.push(r)
					}
					this._track.push(n)
				}
			},
			_recognize: function(t) {
				for (var e in o) if (o.hasOwnProperty(e)) {
					var i = o[e](this._track, t);
					if (i) return i
				}
			}
		};
		var o = {
			pinch: function(t, e) {
				var a = t.length;
				if (a) {
					var o = (t[a - 1] || {}).points,
						r = (t[a - 2] || {}).points || o;
					if (r && r.length > 1 && o && o.length > 1) {
						var s = i(o) / i(r);
						!isFinite(s) && (s = 1), e.pinchScale = s;
						var l = n(o);
						return e.pinchX = l[0], e.pinchY = l[1], {
							type: "pinch",
							target: t[0].target,
							event: e
						}
					}
				}
			}
		};
		t.exports = a
	}, function(t, e) {
		var i = function() {
				this.head = null, this.tail = null, this._len = 0
			},
			n = i.prototype;
		n.insert = function(t) {
			var e = new a(t);
			return this.insertEntry(e), e
		}, n.insertEntry = function(t) {
			this.head ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : this.head = this.tail = t, this._len++
		}, n.remove = function(t) {
			var e = t.prev,
				i = t.next;
			e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
		}, n.len = function() {
			return this._len
		};
		var a = function(t) {
				this.value = t, this.next, this.prev
			},
			o = function(t) {
				this._list = new i, this._map = {}, this._maxSize = t || 10
			},
			r = o.prototype;
		r.put = function(t, e) {
			var i = this._list,
				n = this._map;
			if (null == n[t]) {
				var a = i.len();
				if (a >= this._maxSize && a > 0) {
					var o = i.head;
					i.remove(o), delete n[o.key]
				}
				var r = i.insert(e);
				r.key = t, n[t] = r
			}
		}, r.get = function(t) {
			var e = this._map[t],
				i = this._list;
			return null != e ? (e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value) : void 0
		}, r.clear = function() {
			this._list.clear(), this._map = {}
		}, t.exports = o
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			a = i(16),
			o = function(t, e, i, n) {
				this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, a.call(this, n)
			};
		o.prototype = {
			constructor: o,
			type: "radial",
			updateCanvasGradient: function(t, e) {
				for (var i = t.getBoundingRect(), n = i.width, a = i.height, o = Math.min(n, a), r = this.x * n + i.x, s = this.y * a + i.y, l = this.r * o, h = e.createRadialGradient(r, s, 0, r, s, l), u = this.colorStops, c = 0; c < u.length; c++) h.addColorStop(u[c].offset, u[c].color);
				this.canvasGradient = h
			}
		}, n.inherits(o, a), t.exports = o
	}, function(t, e) {
		var i = ["lineCap", "lineJoin", "miterLimit", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowColor"],
			n = function(t) {
				this.extendFrom(t)
			};
		n.prototype = {
			constructor: n,
			fill: "#000000",
			stroke: null,
			opacity: 1,
			lineDash: null,
			lineDashOffset: 0,
			shadowBlur: 0,
			shadowOffsetX: 0,
			shadowOffsetY: 0,
			lineWidth: 1,
			strokeNoScale: !1,
			text: null,
			textFill: "#000",
			textStroke: null,
			textPosition: "inside",
			textBaseline: null,
			textAlign: null,
			textVerticalAlign: null,
			textDistance: 5,
			textShadowBlur: 0,
			textShadowOffsetX: 0,
			textShadowOffsetY: 0,
			bind: function(t, e) {
				for (var n = this.fill, a = this.stroke, o = 0; o < i.length; o++) {
					var r = i[o];
					null != this[r] && (t[r] = this[r])
				}
				if (null != a) {
					var s = this.lineWidth;
					t.lineWidth = s / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
				}
				null != n && (t.fillStyle = n.canvasGradient ? n.canvasGradient : n), null != a && (t.strokeStyle = a.canvasGradient ? a.canvasGradient : a), null != this.opacity && (t.globalAlpha = this.opacity)
			},
			extendFrom: function(t, e) {
				if (t) {
					var i = this;
					for (var n in t)!t.hasOwnProperty(n) || !e && i.hasOwnProperty(n) || (i[n] = t[n])
				}
			},
			set: function(t, e) {
				"string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
			},
			clone: function() {
				var t = new this.constructor;
				return t.extendFrom(this, !0), t
			}
		};
		var a, o, r = n.prototype;
		for (o = 0; o < i.length; o++) a = i[o], a in r || (r[a] = null);
		t.exports = n;
	}, function(t, e, i) {
		var n = i(5),
			a = n.min,
			o = n.max,
			r = n.scale,
			s = n.distance,
			l = n.add;
		t.exports = function(t, e, i, h) {
			var u, c, d, f, p = [],
				g = [],
				m = [],
				v = [];
			if (h) {
				d = [1 / 0, 1 / 0], f = [-(1 / 0), -(1 / 0)];
				for (var y = 0, x = t.length; x > y; y++) a(d, d, t[y]), o(f, f, t[y]);
				a(d, d, h[0]), o(f, f, h[1])
			}
			for (var y = 0, x = t.length; x > y; y++) {
				var _ = t[y];
				if (i) u = t[y ? y - 1 : x - 1], c = t[(y + 1) % x];
				else {
					if (0 === y || y === x - 1) {
						p.push(n.clone(t[y]));
						continue
					}
					u = t[y - 1], c = t[y + 1]
				}
				n.sub(g, c, u), r(g, g, e);
				var w = s(_, u),
					b = s(_, c),
					M = w + b;
				0 !== M && (w /= M, b /= M), r(m, g, -w), r(v, g, b);
				var S = l([], _, m),
					A = l([], _, v);
				h && (o(S, S, d), a(S, S, f), o(A, A, d), a(A, A, f)), p.push(S), p.push(A)
			}
			return i && p.push(p.shift()), p
		}
	}, function(t, e, i) {
		function n(t, e, i, n, a, o, r) {
			var s = .5 * (i - t),
				l = .5 * (n - e);
			return (2 * (e - i) + s + l) * r + (-3 * (e - i) - 2 * s - l) * o + s * a + e
		}
		var a = i(5);
		t.exports = function(t, e) {
			for (var i = t.length, o = [], r = 0, s = 1; i > s; s++) r += a.distance(t[s - 1], t[s]);
			var l = r / 2;
			l = i > l ? i : l;
			for (var s = 0; l > s; s++) {
				var h, u, c, d = s / (l - 1) * (e ? i : i - 1),
					f = Math.floor(d),
					p = d - f,
					g = t[f % i];
				e ? (h = t[(f - 1 + i) % i], u = t[(f + 1) % i], c = t[(f + 2) % i]) : (h = t[0 === f ? f : f - 1], u = t[f > i - 2 ? i - 1 : f + 1], c = t[f > i - 3 ? i - 1 : f + 2]);
				var m = p * p,
					v = p * m;
				o.push([n(h[0], g[0], u[0], c[0], p, m, v), n(h[1], g[1], u[1], c[1], p, m, v)])
			}
			return o
		}
	}, function(t, e, i) {
		t.exports = i(6).extend({
			type: "arc",
			shape: {
				cx: 0,
				cy: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var i = e.cx,
					n = e.cy,
					a = Math.max(e.r, 0),
					o = e.startAngle,
					r = e.endAngle,
					s = e.clockwise,
					l = Math.cos(o),
					h = Math.sin(o);
				t.moveTo(l * a + i, h * a + n), t.arc(i, n, a, o, r, !s)
			}
		})
	}, function(t, e, i) {
		"use strict";
		var n = i(18),
			a = n.quadraticSubdivide,
			o = n.cubicSubdivide,
			r = n.quadraticAt,
			s = n.cubicAt,
			l = [];
		t.exports = i(6).extend({
			type: "bezier-curve",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				cpx1: 0,
				cpy1: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var i = e.x1,
					n = e.y1,
					r = e.x2,
					s = e.y2,
					h = e.cpx1,
					u = e.cpy1,
					c = e.cpx2,
					d = e.cpy2,
					f = e.percent;
				0 !== f && (t.moveTo(i, n), null == c || null == d ? (1 > f && (a(i, h, r, f, l), h = l[1], r = l[2], a(n, u, s, f, l), u = l[1], s = l[2]), t.quadraticCurveTo(h, u, r, s)) : (1 > f && (o(i, h, c, r, f, l), h = l[1], c = l[2], r = l[3], o(n, u, d, s, f, l), u = l[1], d = l[2], s = l[3]), t.bezierCurveTo(h, u, c, d, r, s)))
			},
			pointAt: function(t) {
				var e = this.shape,
					i = e.cpx2,
					n = e.cpy2;
				return null === i || null === n ? [r(e.x1, e.cpx1, e.x2, t), r(e.y1, e.cpy1, e.y2, t)] : [s(e.x1, e.cpx1, e.cpx1, e.x2, t), s(e.y1, e.cpy1, e.cpy1, e.y2, t)]
			}
		})
	}, function(t, e, i) {
		"use strict";
		t.exports = i(6).extend({
			type: "circle",
			shape: {
				cx: 0,
				cy: 0,
				r: 0
			},
			buildPath: function(t, e) {
				t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
			}
		})
	}, function(t, e, i) {
		t.exports = i(6).extend({
			type: "line",
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				percent: 1
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				var i = e.x1,
					n = e.y1,
					a = e.x2,
					o = e.y2,
					r = e.percent;
				0 !== r && (t.moveTo(i, n), 1 > r && (a = i * (1 - r) + a * r, o = n * (1 - r) + o * r), t.lineTo(a, o))
			},
			pointAt: function(t) {
				var e = this.shape;
				return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
			}
		})
	}, function(t, e, i) {
		var n = i(59);
		t.exports = i(6).extend({
			type: "polygon",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			buildPath: function(t, e) {
				n.buildPath(t, e, !0)
			}
		})
	}, function(t, e, i) {
		var n = i(59);
		t.exports = i(6).extend({
			type: "polyline",
			shape: {
				points: null,
				smooth: !1,
				smoothConstraint: null
			},
			style: {
				stroke: "#000",
				fill: null
			},
			buildPath: function(t, e) {
				n.buildPath(t, e, !1)
			}
		})
	}, function(t, e, i) {
		var n = i(60);
		t.exports = i(6).extend({
			type: "rect",
			shape: {
				r: 0,
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			buildPath: function(t, e) {
				var i = e.x,
					a = e.y,
					o = e.width,
					r = e.height;
				e.r ? n.buildPath(t, e) : t.rect(i, a, o, r), t.closePath()
			}
		})
	}, function(t, e, i) {
		t.exports = i(6).extend({
			type: "ring",
			shape: {
				cx: 0,
				cy: 0,
				r: 0,
				r0: 0
			},
			buildPath: function(t, e) {
				var i = e.cx,
					n = e.cy,
					a = 2 * Math.PI;
				t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, a, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, a, !0)
			}
		})
	}, function(t, e, i) {
		t.exports = i(6).extend({
			type: "sector",
			shape: {
				cx: 0,
				cy: 0,
				r0: 0,
				r: 0,
				startAngle: 0,
				endAngle: 2 * Math.PI,
				clockwise: !0
			},
			buildPath: function(t, e) {
				var i = e.cx,
					n = e.cy,
					a = Math.max(e.r0 || 0, 0),
					o = Math.max(e.r, 0),
					r = e.startAngle,
					s = e.endAngle,
					l = e.clockwise,
					h = Math.cos(r),
					u = Math.sin(r);
				t.moveTo(h * a + i, u * a + n), t.lineTo(h * o + i, u * o + n), t.arc(i, n, o, r, s, !l), t.lineTo(Math.cos(s) * a + i, Math.sin(s) * a + n), 0 !== a && t.arc(i, n, a, s, r, l), t.closePath()
			}
		})
	}, function(t, e, i) {
		"use strict";
		var n = i(56),
			a = i(1),
			o = a.isString,
			r = a.isFunction,
			s = a.isObject,
			l = i(45),
			h = function() {
				this.animators = []
			};
		h.prototype = {
			constructor: h,
			animate: function(t, e) {
				var i, o = !1,
					r = this,
					s = this.__zr;
				if (t) {
					var h = t.split("."),
						u = r;
					o = "shape" === h[0];
					for (var c = 0, d = h.length; d > c; c++) u && (u = u[h[c]]);
					u && (i = u)
				} else i = r;
				if (!i) return void l('Property "' + t + '" is not existed in element ' + r.id);
				var f = r.animators,
					p = new n(i, e);
				return p.during(function(t) {
					r.dirty(o)
				}).done(function() {
					f.splice(a.indexOf(f, p), 1)
				}), f.push(p), s && s.animation.addAnimator(p), p
			},
			stopAnimation: function(t) {
				for (var e = this.animators, i = e.length, n = 0; i > n; n++) e[n].stop(t);
				return e.length = 0, this
			},
			animateTo: function(t, e, i, n, a) {
				function s() {
					h--, h || a && a()
				}
				o(i) ? (a = n, n = i, i = 0) : r(n) ? (a = n, n = "linear", i = 0) : r(i) ? (a = i, i = 0) : r(e) ? (a = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i, n, a);
				var l = this.animators.slice(),
					h = l.length;
				h || a && a();
				for (var u = 0; u < l.length; u++) l[u].done(s).start(n)
			},
			_animateToShallow: function(t, e, i, n, o) {
				var r = {},
					l = 0;
				for (var h in i) if (null != e[h]) s(i[h]) && !a.isArrayLike(i[h]) ? this._animateToShallow(t ? t + "." + h : h, e[h], i[h], n, o) : (r[h] = i[h], l++);
				else if (null != i[h]) if (t) {
					var u = {};
					u[t] = {}, u[t][h] = i[h], this.attr(u)
				} else this.attr(h, i[h]);
				return l > 0 && this.animate(t, !1).when(null == n ? 500 : n, r).delay(o || 0), this
			}
		}, t.exports = h
	}, function(t, e) {
		function i() {
			this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
		}
		i.prototype = {
			constructor: i,
			_dragStart: function(t) {
				var e = t.target;
				e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this._dispatchProxy(e, "dragstart", t.event))
			},
			_drag: function(t) {
				var e = this._draggingTarget;
				if (e) {
					var i = t.offsetX,
						n = t.offsetY,
						a = i - this._x,
						o = n - this._y;
					this._x = i, this._y = n, e.drift(a, o, t), this._dispatchProxy(e, "drag", t.event);
					var r = this.findHover(i, n, e),
						s = this._dropTarget;
					this._dropTarget = r, e !== r && (s && r !== s && this._dispatchProxy(s, "dragleave", t.event), r && r !== s && this._dispatchProxy(r, "dragenter", t.event))
				}
			},
			_dragEnd: function(t) {
				var e = this._draggingTarget;
				e && (e.dragging = !1), this._dispatchProxy(e, "dragend", t.event), this._dropTarget && this._dispatchProxy(this._dropTarget, "drop", t.event), this._draggingTarget = null, this._dropTarget = null
			}
		}, t.exports = i
	}, function(t, e, i) {
		function n(t, e, i, n, a, o, r, s, l, h, u) {
			var g = l * (p / 180),
				y = f(g) * (t - i) / 2 + d(g) * (e - n) / 2,
				x = -1 * d(g) * (t - i) / 2 + f(g) * (e - n) / 2,
				_ = y * y / (r * r) + x * x / (s * s);
			_ > 1 && (r *= c(_), s *= c(_));
			var w = (a === o ? -1 : 1) * c((r * r * (s * s) - r * r * (x * x) - s * s * (y * y)) / (r * r * (x * x) + s * s * (y * y))) || 0,
				b = w * r * x / s,
				M = w * -s * y / r,
				S = (t + i) / 2 + f(g) * b - d(g) * M,
				A = (e + n) / 2 + d(g) * b + f(g) * M,
				I = v([1, 0], [(y - b) / r, (x - M) / s]),
				T = [(y - b) / r, (x - M) / s],
				C = [(-1 * y - b) / r, (-1 * x - M) / s],
				L = v(T, C);
			m(T, C) <= -1 && (L = p), m(T, C) >= 1 && (L = 0), 0 === o && L > 0 && (L -= 2 * p), 1 === o && 0 > L && (L += 2 * p), u.addData(h, S, A, r, s, I, L, g, o)
		}
		function a(t) {
			if (!t) return [];
			var e, i = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
			for (e = 0; e < u.length; e++) i = i.replace(new RegExp(u[e], "g"), "|" + u[e]);
			var a, o = i.split("|"),
				r = 0,
				l = 0,
				h = new s,
				c = s.CMD;
			for (e = 1; e < o.length; e++) {
				var d, f = o[e],
					p = f.charAt(0),
					g = 0,
					m = f.slice(1).replace(/e,-/g, "e-").split(",");
				m.length > 0 && "" === m[0] && m.shift();
				for (var v = 0; v < m.length; v++) m[v] = parseFloat(m[v]);
				for (; g < m.length && !isNaN(m[g]) && !isNaN(m[0]);) {
					var y, x, _, w, b, M, S, A = r,
						I = l;
					switch (p) {
					case "l":
						r += m[g++], l += m[g++], d = c.L, h.addData(d, r, l);
						break;
					case "L":
						r = m[g++], l = m[g++], d = c.L, h.addData(d, r, l);
						break;
					case "m":
						r += m[g++], l += m[g++], d = c.M, h.addData(d, r, l), p = "l";
						break;
					case "M":
						r = m[g++], l = m[g++], d = c.M, h.addData(d, r, l), p = "L";
						break;
					case "h":
						r += m[g++], d = c.L, h.addData(d, r, l);
						break;
					case "H":
						r = m[g++], d = c.L, h.addData(d, r, l);
						break;
					case "v":
						l += m[g++], d = c.L, h.addData(d, r, l);
						break;
					case "V":
						l = m[g++], d = c.L, h.addData(d, r, l);
						break;
					case "C":
						d = c.C, h.addData(d, m[g++], m[g++], m[g++], m[g++], m[g++], m[g++]), r = m[g - 2], l = m[g - 1];
						break;
					case "c":
						d = c.C, h.addData(d, m[g++] + r, m[g++] + l, m[g++] + r, m[g++] + l, m[g++] + r, m[g++] + l), r += m[g - 2], l += m[g - 1];
						break;
					case "S":
						y = r, x = l;
						var T = h.len(),
							C = h.data;
						a === c.C && (y += r - C[T - 4], x += l - C[T - 3]), d = c.C, A = m[g++], I = m[g++], r = m[g++], l = m[g++], h.addData(d, y, x, A, I, r, l);
						break;
					case "s":
						y = r, x = l;
						var T = h.len(),
							C = h.data;
						a === c.C && (y += r - C[T - 4], x += l - C[T - 3]), d = c.C, A = r + m[g++], I = l + m[g++], r += m[g++], l += m[g++], h.addData(d, y, x, A, I, r, l);
						break;
					case "Q":
						A = m[g++], I = m[g++], r = m[g++], l = m[g++], d = c.Q, h.addData(d, A, I, r, l);
						break;
					case "q":
						A = m[g++] + r, I = m[g++] + l, r += m[g++], l += m[g++], d = c.Q, h.addData(d, A, I, r, l);
						break;
					case "T":
						y = r, x = l;
						var T = h.len(),
							C = h.data;
						a === c.Q && (y += r - C[T - 4], x += l - C[T - 3]), r = m[g++], l = m[g++], d = c.Q, h.addData(d, y, x, r, l);
						break;
					case "t":
						y = r, x = l;
						var T = h.len(),
							C = h.data;
						a === c.Q && (y += r - C[T - 4], x += l - C[T - 3]), r += m[g++], l += m[g++], d = c.Q, h.addData(d, y, x, r, l);
						break;
					case "A":
						_ = m[g++], w = m[g++], b = m[g++], M = m[g++], S = m[g++], A = r, I = l, r = m[g++], l = m[g++], d = c.A, n(A, I, r, l, M, S, _, w, b, d, h);
						break;
					case "a":
						_ = m[g++], w = m[g++], b = m[g++], M = m[g++], S = m[g++], A = r, I = l, r += m[g++], l += m[g++], d = c.A, n(A, I, r, l, M, S, _, w, b, d, h)
					}
				}
				"z" !== p && "Z" !== p || (d = c.Z, h.addData(d)), a = d
			}
			return h.toStatic(), h
		}
		function o(t, e) {
			var i, n = a(t);
			return e = e || {}, e.buildPath = function(t) {
				t.setData(n.data), i && l(t, i);
				var e = t.getContext();
				e && t.rebuildPath(e)
			}, e.applyTransform = function(t) {
				i || (i = h.create()), h.mul(i, t, i)
			}, e
		}
		var r = i(6),
			s = i(27),
			l = i(157),
			h = i(19),
			u = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
			c = Math.sqrt,
			d = Math.sin,
			f = Math.cos,
			p = Math.PI,
			g = function(t) {
				return Math.sqrt(t[0] * t[0] + t[1] * t[1])
			},
			m = function(t, e) {
				return (t[0] * e[0] + t[1] * e[1]) / (g(t) * g(e))
			},
			v = function(t, e) {
				return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(m(t, e))
			};
		t.exports = {
			createFromString: function(t, e) {
				return new r(o(t, e))
			},
			extendFromString: function(t, e) {
				return r.extend(o(t, e))
			},
			mergePath: function(t, e) {
				var i, n, a = [],
					o = t.length;
				for (n = 0; o > n; n++) i = t[n], i.__dirty && i.buildPath(i.path, i.shape), a.push(i.path);
				var s = new r(e);
				return s.buildPath = function(t) {
					t.appendPath(a);
					var e = t.getContext();
					e && t.rebuildPath(e)
				}, s
			}
		}
	}, function(t, e, i) {
		function n(t, e) {
			var i, n, o, u, c, d, f = t.data,
				p = a.M,
				g = a.C,
				m = a.L,
				v = a.R,
				y = a.A,
				x = a.Q;
			for (o = 0, u = 0; o < f.length;) {
				switch (i = f[o++], u = o, n = 0, i) {
				case p:
					n = 1;
					break;
				case m:
					n = 1;
					break;
				case g:
					n = 3;
					break;
				case x:
					n = 2;
					break;
				case y:
					var _ = e[4],
						w = e[5],
						b = l(e[0] * e[0] + e[1] * e[1]),
						M = l(e[2] * e[2] + e[3] * e[3]),
						S = h(-e[1] / M, e[0] / b);
					f[o++] += _, f[o++] += w, f[o++] *= b, f[o++] *= M, f[o++] += S, f[o++] += S, o += 2, u = o;
					break;
				case v:
					d[0] = f[o++], d[1] = f[o++], r(d, d, e), f[u++] = d[0], f[u++] = d[1], d[0] += f[o++], d[1] += f[o++], r(d, d, e), f[u++] = d[0], f[u++] = d[1]
				}
				for (c = 0; n > c; c++) {
					var d = s[c];
					d[0] = f[o++], d[1] = f[o++], r(d, d, e), f[u++] = d[0], f[u++] = d[1]
				}
			}
		}
		var a = i(27).CMD,
			o = i(5),
			r = o.applyTransform,
			s = [
				[],
				[],
				[]
			],
			l = Math.sqrt,
			h = Math.atan2;
		t.exports = n
	}, function(t, e, i) {
		if (!i(15).canvasSupported) {
			var n, a = "urn:schemas-microsoft-com:vml",
				o = window,
				r = o.document,
				s = !1;
			try {
				!r.namespaces.zrvml && r.namespaces.add("zrvml", a), n = function(t) {
					return r.createElement("<zrvml:" + t + ' class="zrvml">')
				}
			} catch (l) {
				n = function(t) {
					return r.createElement("<" + t + ' xmlns="' + a + '" class="zrvml">')
				}
			}
			var h = function() {
					if (!s) {
						s = !0;
						var t = r.styleSheets;
						t.length < 31 ? r.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
					}
				};
			t.exports = {
				doc: r,
				initVML: h,
				createNode: n
			}
		}
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			return null == t.value ? t : t.value
		}
		var a = i(14),
			o = i(31),
			r = i(263),
			s = i(1),
			l = {
				_baseAxisDim: null,
				getInitialData: function(t, e) {
					var i, r, s = e.getComponent("xAxis", this.get("xAxisIndex")),
						l = e.getComponent("yAxis", this.get("yAxisIndex")),
						h = s.get("type"),
						u = l.get("type");
					"category" === h ? (t.layout = "horizontal", i = s.getCategories(), r = !0) : "category" === u ? (t.layout = "vertical", i = l.getCategories(), r = !0) : t.layout = t.layout || "horizontal", this._baseAxisDim = "horizontal" === t.layout ? "x" : "y";
					var c = t.data,
						d = this.dimensions = ["base"].concat(this.valueDimensions);
					o(d, c);
					var f = new a(d, this);
					return f.initData(c, i ? i.slice() : null, function(t, e, i, a) {
						var o = n(t);
						return r ? "base" === e ? i : o[a - 1] : o[a]
					}), f
				},
				coordDimToDataDim: function(t) {
					var e = this.valueDimensions.slice(),
						i = ["base"],
						n = {
							horizontal: {
								x: i,
								y: e
							},
							vertical: {
								x: e,
								y: i
							}
						};
					return n[this.get("layout")][t]
				},
				dataDimToCoordDim: function(t) {
					var e;
					return s.each(["x", "y"], function(i, n) {
						var a = this.coordDimToDataDim(i);
						s.indexOf(a, t) >= 0 && (e = i)
					}, this), e
				},
				getBaseAxis: function() {
					var t = this._baseAxisDim;
					return this.ecModel.getComponent(t + "Axis", this.get(t + "AxisIndex")).axis
				}
			},
			h = {
				init: function() {
					var t = this._whiskerBoxDraw = new r(this.getStyleUpdater());
					this.group.add(t.group)
				},
				render: function(t, e, i) {
					this._whiskerBoxDraw.updateData(t.getData())
				},
				remove: function(t) {
					this._whiskerBoxDraw.remove()
				}
			};
		t.exports = {
			seriesModelMixin: l,
			viewMixin: h
		}
	}, function(t, e, i) {
		function n(t, e, i) {
			v.call(this), this.type = t, this.zr = e, this.opt = y.clone(i), this.group = new x.Group, this._containerRect = null, this._track = [], this._dragging, this._cover, this._disabled = !0, this._handlers = {
				mousedown: _(s, this),
				mousemove: _(l, this),
				mouseup: _(h, this)
			}, w(T, function(t) {
				this.zr.on(t, this._handlers[t])
			}, this)
		}
		function a(t) {
			t.traverse(function(t) {
				t.z = A
			})
		}
		function o(t, e) {
			var i = this.group.transformCoordToLocal(t, e);
			return !this._containerRect || this._containerRect.contain(i[0], i[1])
		}
		function r(t) {
			var e = t.event;
			e.preventDefault && e.preventDefault()
		}
		function s(t) {
			if (!(this._disabled || t.target && t.target.draggable)) {
				r(t);
				var e = t.offsetX,
					i = t.offsetY;
				o.call(this, e, i) && (this._dragging = !0, this._track = [
					[e, i]
				])
			}
		}
		function l(t) {
			this._dragging && !this._disabled && (r(t), u.call(this, t))
		}
		function h(t) {
			this._dragging && !this._disabled && (r(t), u.call(this, t, !0), this._dragging = !1, this._track = [])
		}
		function u(t, e) {
			var i = t.offsetX,
				n = t.offsetY;
			if (o.call(this, i, n)) {
				this._track.push([i, n]);
				var a = c.call(this) ? C[this.type].getRanges.call(this) : [];
				d.call(this, a), this.trigger("selected", y.clone(a)), e && this.trigger("selectEnd", y.clone(a))
			}
		}
		function c() {
			var t = this._track;
			if (!t.length) return !1;
			var e = t[t.length - 1],
				i = t[0],
				n = e[0] - i[0],
				a = e[1] - i[1],
				o = S(n * n + a * a, .5);
			return o > I
		}
		function d(t) {
			var e = C[this.type];
			t && t.length ? (this._cover || (this._cover = e.create.call(this), this.group.add(this._cover)), e.update.call(this, t)) : (this.group.remove(this._cover), this._cover = null), a(this.group)
		}
		function f() {
			var t = this.group,
				e = t.parent;
			e && e.remove(t)
		}
		function p() {
			var t = this.opt;
			return new x.Rect({
				style: {
					stroke: t.stroke,
					fill: t.fill,
					lineWidth: t.lineWidth,
					opacity: t.opacity
				}
			})
		}
		function g() {
			return y.map(this._track, function(t) {
				return this.group.transformCoordToLocal(t[0], t[1])
			}, this)
		}
		function m() {
			var t = g.call(this),
				e = t.length - 1;
			return 0 > e && (e = 0), [t[0], t[e]]
		}
		var v = i(21),
			y = i(1),
			x = i(3),
			_ = y.bind,
			w = y.each,
			b = Math.min,
			M = Math.max,
			S = Math.pow,
			A = 1e4,
			I = 2,
			T = ["mousedown", "mousemove", "mouseup"];
		n.prototype = {
			constructor: n,
			enable: function(t, e) {
				this._disabled = !1, f.call(this), this._containerRect = e !== !1 ? e || t.getBoundingRect() : null, t.add(this.group)
			},
			update: function(t) {
				d.call(this, t && y.clone(t))
			},
			disable: function() {
				this._disabled = !0, f.call(this)
			},
			dispose: function() {
				this.disable(), w(T, function(t) {
					this.zr.off(t, this._handlers[t])
				}, this)
			}
		}, y.mixin(n, v);
		var C = {
			line: {
				create: p,
				getRanges: function() {
					var t = m.call(this),
						e = b(t[0][0], t[1][0]),
						i = M(t[0][0], t[1][0]);
					return [[e, i]]
				},
				update: function(t) {
					var e = t[0],
						i = this.opt.width;
					this._cover.setShape({
						x: e[0],
						y: -i / 2,
						width: e[1] - e[0],
						height: i
					})
				}
			},
			rect: {
				create: p,
				getRanges: function() {
					var t = m.call(this),
						e = [b(t[1][0], t[0][0]), b(t[1][1], t[0][1])],
						i = [M(t[1][0], t[0][0]), M(t[1][1], t[0][1])];
					return [[
						[e[0], i[0]],
						[e[1], i[1]]
					]]
				},
				update: function(t) {
					var e = t[0];
					this._cover.setShape({
						x: e[0][0],
						y: e[1][0],
						width: e[0][1] - e[0][0],
						height: e[1][1] - e[1][0]
					})
				}
			}
		};
		t.exports = n
	}, function(t, e, i) {
		function n() {
			this.group = new a.Group, this._symbolEl = new s({
				silent: !0
			})
		}
		var a = i(3),
			o = i(24),
			r = i(1),
			s = a.extendShape({
				shape: {
					points: null,
					sizes: null
				},
				symbolProxy: null,
				buildPath: function(t, e) {
					for (var i = e.points, n = e.sizes, a = this.symbolProxy, o = a.shape, r = 0; r < i.length; r++) {
						var s = i[r],
							l = n[r];
						l[0] < 4 ? t.rect(s[0] - l[0] / 2, s[1] - l[1] / 2, l[0], l[1]) : (o.x = s[0] - l[0] / 2, o.y = s[1] - l[1] / 2, o.width = l[0], o.height = l[1], a.buildPath(t, o))
					}
				}
			}),
			l = n.prototype;
		l.updateData = function(t) {
			this.group.removeAll();
			var e = this._symbolEl,
				i = t.hostModel;
			e.setShape({
				points: t.mapArray(t.getItemLayout),
				sizes: t.mapArray(function(e) {
					var i = t.getItemVisual(e, "symbolSize");
					return r.isArray(i) || (i = [i, i]), i
				})
			}), e.symbolProxy = o.createSymbol(t.getVisual("symbol"), 0, 0, 0, 0), e.setColor = e.symbolProxy.setColor, e.setStyle(i.getModel("itemStyle.normal").getItemStyle(["color"]));
			var n = t.getVisual("color");
			n && e.setColor(n), this.group.add(this._symbolEl)
		}, l.updateLayout = function(t) {
			var e = t.getData();
			this._symbolEl.setShape({
				points: e.mapArray(e.getItemLayout)
			})
		}, l.remove = function() {
			this.group.removeAll()
		}, t.exports = n
	}, function(t, e, i) {
		var n = i(3),
			a = n.Line.prototype,
			o = n.BezierCurve.prototype;
		t.exports = n.extendShape({
			type: "ec-line",
			style: {
				stroke: "#000",
				fill: null
			},
			shape: {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				percent: 1,
				cpx1: null,
				cpy1: null
			},
			buildPath: function(t, e) {
				(null == e.cpx1 || null == e.cpy1 ? a : o).buildPath(t, e)
			},
			pointAt: function(t) {
				var e = this.shape;
				return null == e.cpx1 || null == e.cpy1 ? a.pointAt.call(this, t) : o.pointAt.call(this, t)
			}
		})
	}, function(t, e, i) {
		var n = i(1),
			a = i(2);
		i(164), i(165), a.registerVisualCoding("chart", n.curry(i(44), "scatter", "circle", null)), a.registerLayout(n.curry(i(53), "scatter")), i(34)
	}, function(t, e, i) {
		"use strict";
		var n = i(36),
			a = i(13);
		t.exports = a.extend({
			type: "series.scatter",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, e) {
				var i = n(t.data, this, e);
				return i
			},
			defaultOption: {
				coordinateSystem: "cartesian2d",
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				hoverAnimation: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				polarIndex: 0,
				geoIndex: 0,
				symbolSize: 10,
				large: !1,
				largeThreshold: 2e3,
				itemStyle: {
					normal: {
						opacity: .8
					}
				}
			}
		})
	}, function(t, e, i) {
		var n = i(38),
			a = i(161);
		i(2).extendChartView({
			type: "scatter",
			init: function() {
				this._normalSymbolDraw = new n, this._largeSymbolDraw = new a
			},
			render: function(t, e, i) {
				var n = t.getData(),
					a = this._largeSymbolDraw,
					o = this._normalSymbolDraw,
					r = this.group,
					s = t.get("large") && n.count() > t.get("largeThreshold") ? a : o;
				this._symbolDraw = s, s.updateData(n), r.add(s.group), r.remove(s === a ? o.group : a.group)
			},
			updateLayout: function(t) {
				this._symbolDraw.updateLayout(t)
			},
			remove: function(t, e) {
				this._symbolDraw && this._symbolDraw.remove(e, !0)
			}
		})
	}, function(t, e, i) {
		i(101), i(39), i(40), i(172), i(173), i(168), i(169), i(99), i(98)
	}, function(t, e, i) {
		function n(t, e) {
			var i = [1 / 0, -(1 / 0)];
			return h(e, function(e) {
				var n = e.getData();
				n && h(e.coordDimToDataDim(t), function(t) {
					var e = n.getDataExtent(t);
					e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
				})
			}, this), i
		}
		function a(t, e, i) {
			var n = i.getAxisModel(),
				a = n.axis.scale,
				r = [0, 100],
				s = [t.start, t.end],
				c = [];
			return e = e.slice(), o(e, n, a), h(["startValue", "endValue"], function(e) {
				c.push(null != t[e] ? a.parse(t[e]) : null)
			}), h([0, 1], function(t) {
				function i(e) {
					return Math[0 === t ? "floor" : "ceil"](1e12 * e) / 1e12
				}
				var n = c[t],
					o = s[t];
				null != o || null == n ? (null == o && (o = r[t]), n = a.parse(l.linearMap(o, r, e, !0))) : o = l.linearMap(n, e, r, !0), c[t] = i(n), s[t] = i(o)
			}), {
				valueWindow: u(c),
				percentWindow: u(s)
			}
		}
		function o(t, e, i) {
			return h(["min", "max"], function(n, a) {
				var o = e.get(n, !0);
				null != o && (o + "").toLowerCase() !== "data" + n && (t[a] = i.parse(o))
			}), e.get("scale", !0) || (t[0] > 0 && (t[0] = 0), t[1] < 0 && (t[1] = 0)), t
		}
		function r(t, e) {
			var i = t.getAxisModel(),
				n = t._percentWindow,
				a = t._valueWindow;
			if (n) {
				var o = e || 0 === n[0] && 100 === n[1],
					r = !e && l.getPixelPrecision(a, [0, 500]),
					s = !(e || 20 > r && r >= 0),
					h = e || o || s;
				i.setRange && i.setRange(h ? null : +a[0].toFixed(r), h ? null : +a[1].toFixed(r))
			}
		}
		var s = i(1),
			l = i(4),
			h = s.each,
			u = l.asc,
			c = function(t, e, i, n) {
				this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this.ecModel = n, this._dataZoomModel = i
			};
		c.prototype = {
			constructor: c,
			hostedBy: function(t) {
				return this._dataZoomModel === t
			},
			getDataExtent: function() {
				return this._dataExtent.slice()
			},
			getDataValueWindow: function() {
				return this._valueWindow.slice()
			},
			getDataPercentWindow: function() {
				return this._percentWindow.slice()
			},
			getTargetSeriesModels: function() {
				var t = [];
				return this.ecModel.eachSeries(function(e) {
					this._axisIndex === e.get(this._dimName + "AxisIndex") && t.push(e)
				}, this), t
			},
			getAxisModel: function() {
				return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
			},
			getOtherAxisModel: function() {
				var t, e, i = this._dimName,
					n = this.ecModel,
					a = this.getAxisModel(),
					o = "x" === i || "y" === i;
				o ? (e = "gridIndex", t = "x" === i ? "y" : "x") : (e = "polarIndex", t = "angle" === i ? "radius" : "angle");
				var r;
				return n.eachComponent(t + "Axis", function(t) {
					(t.get(e) || 0) === (a.get(e) || 0) && (r = t)
				}), r
			},
			reset: function(t) {
				if (t === this._dataZoomModel) {
					var e = this._dataExtent = n(this._dimName, this.getTargetSeriesModels()),
						i = a(t.option, e, this);
					this._valueWindow = i.valueWindow, this._percentWindow = i.percentWindow, r(this)
				}
			},
			restore: function(t) {
				t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, r(this, !0))
			},
			filterData: function(t) {
				function e(t) {
					return t >= o[0] && t <= o[1]
				}
				if (t === this._dataZoomModel) {
					var i = this._dimName,
						n = this.getTargetSeriesModels(),
						a = t.get("filterMode"),
						o = this._valueWindow,
						r = this.getOtherAxisModel();
					t.get("$fromToolbox") && r && "category" === r.get("type") && (a = "empty"), h(n, function(t) {
						var n = t.getData();
						n && h(t.coordDimToDataDim(i), function(i) {
							"empty" === a ? t.setData(n.map(i, function(t) {
								return e(t) ? t : NaN
							})) : n.filterSelf(i, e)
						})
					})
				}
			}
		}, t.exports = c
	}, function(t, e, i) {
		t.exports = i(39).extend({
			type: "dataZoom.inside",
			defaultOption: {
				zoomLock: !1
			}
		})
	}, function(t, e, i) {
		function n(t, e, i, n) {
			e = e.slice();
			var a = n.axisModels[0];
			if (a) {
				var r = o(t, a, i),
					s = r.signal * (e[1] - e[0]) * r.pixel / r.pixelLength;
				return h(s, e, [0, 100], "rigid"), e
			}
		}
		function a(t, e, i, n, a, s) {
			i = i.slice();
			var l = a.axisModels[0];
			if (l) {
				var h = o(e, l, n),
					u = h.pixel - h.pixelStart,
					c = u / h.pixelLength * (i[1] - i[0]) + i[0];
				return t = Math.max(t, 0), i[0] = (i[0] - c) * t + c, i[1] = (i[1] - c) * t + c, r(i)
			}
		}
		function o(t, e, i) {
			var n = e.axis,
				a = i.rect,
				o = {};
			return "x" === n.dim ? (o.pixel = t[0], o.pixelLength = a.width, o.pixelStart = a.x, o.signal = n.inverse ? 1 : -1) : (o.pixel = t[1], o.pixelLength = a.height, o.pixelStart = a.y, o.signal = n.inverse ? -1 : 1), o
		}
		function r(t) {
			var e = [0, 100];
			return !(t[0] <= e[1]) && (t[0] = e[1]), !(t[1] <= e[1]) && (t[1] = e[1]), !(t[0] >= e[0]) && (t[0] = e[0]), !(t[1] >= e[0]) && (t[1] = e[0]), t
		}
		var s = i(40),
			l = i(1),
			h = i(71),
			u = i(174),
			c = l.bind,
			d = s.extend({
				type: "dataZoom.inside",
				init: function(t, e) {
					this._range
				},
				render: function(t, e, i, n) {
					d.superApply(this, "render", arguments), u.shouldRecordRange(n, t.id) && (this._range = t.getPercentRange());
					var a = this.getTargetInfo().cartesians,
						o = l.map(a, function(t) {
							return u.generateCoordId(t.model)
						});
					l.each(a, function(e) {
						var n = e.model;
						u.register(i, {
							coordId: u.generateCoordId(n),
							allCoordIds: o,
							coordinateSystem: n.coordinateSystem,
							dataZoomId: t.id,
							throttleRage: t.get("throttle", !0),
							panGetRange: c(this._onPan, this, e),
							zoomGetRange: c(this._onZoom, this, e)
						})
					}, this)
				},
				remove: function() {
					u.unregister(this.api, this.dataZoomModel.id), d.superApply(this, "remove", arguments), this._range = null
				},
				dispose: function() {
					u.unregister(this.api, this.dataZoomModel.id), d.superApply(this, "dispose", arguments), this._range = null
				},
				_onPan: function(t, e, i, a) {
					return this._range = n([i, a], this._range, e, t)
				},
				_onZoom: function(t, e, i, n, o) {
					var r = this.dataZoomModel;
					return r.option.zoomLock ? this._range : this._range = a(1 / i, [n, o], this._range, e, t, r)
				}
			});
		t.exports = d
	}, function(t, e, i) {
		var n = i(39);
		t.exports = n.extend({
			type: "dataZoom.select"
		})
	}, function(t, e, i) {
		t.exports = i(40).extend({
			type: "dataZoom.select"
		})
	}, function(t, e, i) {
		var n = i(39),
			a = (i(11), i(1), n.extend({
				type: "dataZoom.slider",
				layoutMode: "box",
				defaultOption: {
					show: !0,
					right: "ph",
					top: "ph",
					width: "ph",
					height: "ph",
					left: null,
					bottom: null,
					backgroundColor: "rgba(47,69,84,0)",
					dataBackgroundColor: "#ddd",
					fillerColor: "rgba(47,69,84,0.15)",
					handleColor: "rgba(148,164,165,0.95)",
					handleSize: 10,
					labelPrecision: null,
					labelFormatter: null,
					showDetail: !0,
					showDataShadow: "auto",
					realtime: !0,
					zoomLock: !1,
					textStyle: {
						color: "#333"
					}
				},
				mergeOption: function(t) {
					a.superApply(this, "mergeOption", arguments)
				}
			}));
		t.exports = a
	}, function(t, e, i) {
		function n(t) {
			return "x" === t ? "y" : "x"
		}
		var a = i(1),
			o = i(3),
			r = i(126),
			s = i(40),
			l = o.Rect,
			h = i(4),
			u = h.linearMap,
			c = i(11),
			d = i(71),
			f = h.asc,
			p = a.bind,
			g = Math.round,
			m = Math.max,
			v = a.each,
			y = 7,
			x = 1,
			_ = 30,
			w = "horizontal",
			b = "vertical",
			M = 5,
			S = ["line", "bar", "candlestick", "scatter"],
			A = s.extend({
				type: "dataZoom.slider",
				init: function(t, e) {
					this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._halfHandleSize, this._location, this._dragging, this._dataShadowInfo, this.api = e
				},
				render: function(t, e, i, n) {
					return A.superApply(this, "render", arguments), r.createOrUpdate(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get("orient"), this._halfHandleSize = g(t.get("handleSize") / 2), this.dataZoomModel.get("show") === !1 ? void this.group.removeAll() : (n && "dataZoom" === n.type && n.from === this.uid || this._buildView(), void this._updateView())
				},
				remove: function() {
					A.superApply(this, "remove", arguments), r.clear(this, "_dispatchZoomAction")
				},
				dispose: function() {
					A.superApply(this, "dispose", arguments), r.clear(this, "_dispatchZoomAction")
				},
				_buildView: function() {
					var t = this.group;
					t.removeAll(), this._resetLocation(), this._resetInterval();
					var e = this._displayables.barGroup = new o.Group;
					this._renderBackground(), this._renderDataShadow(), this._renderHandle(), t.add(e), this._positionGroup()
				},
				_resetLocation: function() {
					var t = this.dataZoomModel,
						e = this.api,
						i = this._findCoordRect(),
						n = {
							width: e.getWidth(),
							height: e.getHeight()
						},
						o = this._orient === w ? {
							right: n.width - i.x - i.width,
							top: n.height - _ - y,
							width: i.width,
							height: _
						} : {
							right: y,
							top: i.y,
							width: _,
							height: i.height
						},
						r = c.getLayoutParams(t.option);
					a.each(["right", "top", "width", "height"], function(t) {
						"ph" === r[t] && (r[t] = o[t])
					});
					var s = c.getLayoutRect(r, n, t.padding);
					this._location = {
						x: s.x,
						y: s.y
					}, this._size = [s.width, s.height], this._orient === b && this._size.reverse()
				},
				_positionGroup: function() {
					var t = this.group,
						e = this._location,
						i = this._orient,
						n = this.dataZoomModel.getFirstTargetAxisModel(),
						a = n && n.get("inverse"),
						o = this._displayables.barGroup,
						r = (this._dataShadowInfo || {}).otherAxisInverse;
					o.attr(i !== w || a ? i === w && a ? {
						scale: r ? [-1, 1] : [-1, -1]
					} : i !== b || a ? {
						scale: r ? [-1, -1] : [-1, 1],
						rotation: Math.PI / 2
					} : {
						scale: r ? [1, -1] : [1, 1],
						rotation: Math.PI / 2
					} : {
						scale: r ? [1, 1] : [1, -1]
					});
					var s = t.getBoundingRect([o]);
					t.position[0] = e.x - s.x, t.position[1] = e.y - s.y
				},
				_getViewExtent: function() {
					var t = this._halfHandleSize,
						e = m(this._size[0], 4 * t),
						i = [t, e - t];
					return i
				},
				_renderBackground: function() {
					var t = this.dataZoomModel,
						e = this._size;
					this._displayables.barGroup.add(new l({
						silent: !0,
						shape: {
							x: 0,
							y: 0,
							width: e[0],
							height: e[1]
						},
						style: {
							fill: t.get("backgroundColor")
						}
					}))
				},
				_renderDataShadow: function() {
					var t = this._dataShadowInfo = this._prepareDataShadowInfo();
					if (t) {
						var e = this._size,
							i = t.series,
							n = i.getRawData(),
							a = i.getShadowDim ? i.getShadowDim() : t.otherDim,
							r = n.getDataExtent(a),
							s = .3 * (r[1] - r[0]);
						r = [r[0] - s, r[1] + s];
						var l = [0, e[1]],
							h = [0, e[0]],
							c = [
								[e[0], 0],
								[0, 0]
							],
							d = h[1] / (n.count() - 1),
							f = 0,
							p = Math.round(n.count() / e[0]);
						n.each([a], function(t, e) {
							if (p > 0 && e % p) return void(f += d);
							var i = null == t || isNaN(t) || "" === t ? null : u(t, r, l, !0);
							null != i && c.push([f, i]), f += d
						}), this._displayables.barGroup.add(new o.Polyline({
							shape: {
								points: c
							},
							style: {
								fill: this.dataZoomModel.get("dataBackgroundColor"),
								lineWidth: 0
							},
							silent: !0,
							z2: -20
						}))
					}
				},
				_prepareDataShadowInfo: function() {
					var t = this.dataZoomModel,
						e = t.get("showDataShadow");
					if (e !== !1) {
						var i, o = this.ecModel;
						return t.eachTargetAxis(function(r, s) {
							var l = t.getAxisProxy(r.name, s).getTargetSeriesModels();
							a.each(l, function(t) {
								if (!(i || e !== !0 && a.indexOf(S, t.get("type")) < 0)) {
									var l = n(r.name),
										h = o.getComponent(r.axis, s).axis;
									i = {
										thisAxis: h,
										series: t,
										thisDim: r.name,
										otherDim: l,
										otherAxisInverse: t.coordinateSystem.getOtherAxis(h).inverse
									}
								}
							}, this)
						}, this), i
					}
				},
				_renderHandle: function() {
					var t = this._displayables,
						e = t.handles = [],
						i = t.handleLabels = [],
						n = this._displayables.barGroup,
						a = this._size;
					n.add(t.filler = new l({
						draggable: !0,
						cursor: "move",
						drift: p(this._onDragMove, this, "all"),
						ondragend: p(this._onDragEnd, this),
						onmouseover: p(this._showDataInfo, this, !0),
						onmouseout: p(this._showDataInfo, this, !1),
						style: {
							fill: this.dataZoomModel.get("fillerColor"),
							textPosition: "inside"
						}
					})), n.add(new l(o.subPixelOptimizeRect({
						silent: !0,
						shape: {
							x: 0,
							y: 0,
							width: a[0],
							height: a[1]
						},
						style: {
							stroke: this.dataZoomModel.get("dataBackgroundColor"),
							lineWidth: x,
							fill: "rgba(0,0,0,0)"
						}
					}))), v([0, 1], function(t) {
						n.add(e[t] = new l({
							style: {
								fill: this.dataZoomModel.get("handleColor")
							},
							cursor: "move",
							draggable: !0,
							drift: p(this._onDragMove, this, t),
							ondragend: p(this._onDragEnd, this),
							onmouseover: p(this._showDataInfo, this, !0),
							onmouseout: p(this._showDataInfo, this, !1)
						}));
						var a = this.dataZoomModel.textStyleModel;
						this.group.add(i[t] = new o.Text({
							silent: !0,
							invisible: !0,
							style: {
								x: 0,
								y: 0,
								text: "",
								textVerticalAlign: "middle",
								textAlign: "center",
								fill: a.getTextColor(),
								textFont: a.getFont()
							}
						}))
					}, this)
				},
				_resetInterval: function() {
					var t = this._range = this.dataZoomModel.getPercentRange(),
						e = this._getViewExtent();
					this._handleEnds = [u(t[0], [0, 100], e, !0), u(t[1], [0, 100], e, !0)]
				},
				_updateInterval: function(t, e) {
					var i = this._handleEnds,
						n = this._getViewExtent();
					d(e, i, n, "all" === t || this.dataZoomModel.get("zoomLock") ? "rigid" : "cross", t), this._range = f([u(i[0], n, [0, 100], !0), u(i[1], n, [0, 100], !0)])
				},
				_updateView: function() {
					var t = this._displayables,
						e = this._handleEnds,
						i = f(e.slice()),
						n = this._size,
						a = this._halfHandleSize;
					v([0, 1], function(i) {
						var o = t.handles[i];
						o.setShape({
							x: e[i] - a,
							y: -1,
							width: 2 * a,
							height: n[1] + 2,
							r: 1
						})
					}, this), t.filler.setShape({
						x: i[0],
						y: 0,
						width: i[1] - i[0],
						height: this._size[1]
					}), this._updateDataInfo()
				},
				_updateDataInfo: function() {
					function t(t) {
						var e = o.getTransform(i.handles[t], this.group),
							s = o.transformDirection(0 === t ? "right" : "left", e),
							l = this._halfHandleSize + M,
							u = o.applyTransform([h[t] + (0 === t ? -l : l), this._size[1] / 2], e);
						n[t].setStyle({
							x: u[0],
							y: u[1],
							textVerticalAlign: a === w ? "middle" : s,
							textAlign: a === w ? s : "center",
							text: r[t]
						})
					}
					var e = this.dataZoomModel,
						i = this._displayables,
						n = i.handleLabels,
						a = this._orient,
						r = ["", ""];
					if (e.get("showDetail")) {
						var s, l;
						e.eachTargetAxis(function(t, i) {
							s || (s = e.getAxisProxy(t.name, i).getDataValueWindow(), l = this.ecModel.getComponent(t.axis, i).axis)
						}, this), s && (r = [this._formatLabel(s[0], l), this._formatLabel(s[1], l)])
					}
					var h = f(this._handleEnds.slice());
					t.call(this, 0), t.call(this, 1)
				},
				_formatLabel: function(t, e) {
					var i = this.dataZoomModel,
						n = i.get("labelFormatter");
					if (a.isFunction(n)) return n(t);
					var o = i.get("labelPrecision");
					return null != o && "auto" !== o || (o = e.getPixelPrecision()), t = null == t && isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(o, 20)), a.isString(n) && (t = n.replace("{value}", t)), t
				},
				_showDataInfo: function(t) {
					t = this._dragging || t;
					var e = this._displayables.handleLabels;
					e[0].attr("invisible", !t), e[1].attr("invisible", !t)
				},
				_onDragMove: function(t, e, i) {
					this._dragging = !0;
					var n = this._applyBarTransform([e, i], !0);
					this._updateInterval(t, n[0]), this._updateView(), this.dataZoomModel.get("realtime") && this._dispatchZoomAction()
				},
				_onDragEnd: function() {
					this._dragging = !1, this._showDataInfo(!1), this._dispatchZoomAction()
				},
				_dispatchZoomAction: function() {
					var t = this._range;
					this.api.dispatchAction({
						type: "dataZoom",
						from: this.uid,
						dataZoomId: this.dataZoomModel.id,
						start: t[0],
						end: t[1]
					})
				},
				_applyBarTransform: function(t, e) {
					var i = this._displayables.barGroup.getLocalTransform();
					return o.applyTransform(t, i, e)
				},
				_findCoordRect: function() {
					var t, e = this.getTargetInfo();
					if (e.cartesians.length) t = e.cartesians[0].model.coordinateSystem.getRect();
					else {
						var i = this.api.getWidth(),
							n = this.api.getHeight();
						t = {
							x: .2 * i,
							y: .2 * n,
							width: .6 * i,
							height: .6 * n
						}
					}
					return t
				}
			});
		t.exports = A
	}, function(t, e, i) {
		function n(t) {
			var e = t.getZr();
			return e[p] || (e[p] = {})
		}
		function a(t, e, i) {
			var n = new c(t.getZr());
			return n.enable(), n.on("pan", f(r, i)), n.on("zoom", f(s, i)), n
		}
		function o(t) {
			u.each(t, function(e, i) {
				e.count || (e.controller.off("pan").off("zoom"), delete t[i])
			})
		}
		function r(t, e, i) {
			l(t, function(n) {
				return n.panGetRange(t.controller, e, i)
			})
		}
		function s(t, e, i, n) {
			l(t, function(a) {
				return a.zoomGetRange(t.controller, e, i, n)
			})
		}
		function l(t, e) {
			var i = [];
			u.each(t.dataZoomInfos, function(t) {
				var n = e(t);
				n && i.push({
					dataZoomId: t.dataZoomId,
					start: n[0],
					end: n[1]
				})
			}), t.dispatchAction(i)
		}
		function h(t, e) {
			t.dispatchAction({
				type: "dataZoom",
				batch: e
			})
		}
		var u = i(1),
			c = i(70),
			d = i(126),
			f = u.curry,
			p = "\x00_ec_dataZoom_roams",
			g = {
				register: function(t, e) {
					var i = n(t),
						r = e.dataZoomId,
						s = e.coordId;
					u.each(i, function(t, i) {
						var n = t.dataZoomInfos;
						n[r] && u.indexOf(e.allCoordIds, s) < 0 && (delete n[r], t.count--)
					}), o(i);
					var l = i[s];
					l || (l = i[s] = {
						coordId: s,
						dataZoomInfos: {},
						count: 0
					}, l.controller = a(t, e, l), l.dispatchAction = u.curry(h, t)), l.controller.rect = e.coordinateSystem.getRect().clone(), d.createOrUpdate(l, "dispatchAction", e.throttleRate, "fixRate"), !l.dataZoomInfos[r] && l.count++, l.dataZoomInfos[r] = e
				},
				unregister: function(t, e) {
					var i = n(t);
					u.each(i, function(t) {
						var i = t.dataZoomInfos;
						i[e] && (delete i[e], t.count--)
					}), o(i)
				},
				shouldRecordRange: function(t, e) {
					if (t && "dataZoom" === t.type && t.batch) for (var i = 0, n = t.batch.length; n > i; i++) if (t.batch[i].dataZoomId === e) return !1;
					return !0
				},
				generateCoordId: function(t) {
					return t.type + "\x00_" + t.id
				}
			};
		t.exports = g
	}, function(t, e, i) {
		i(101), i(39), i(40), i(170), i(171), i(99), i(98)
	}, function(t, e, i) {
		i(177), i(179), i(178);
		var n = i(2);
		n.registerProcessor("filter", i(180))
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			a = i(12),
			o = i(2).extendComponentModel({
				type: "legend",
				dependencies: ["series"],
				layoutMode: {
					type: "box",
					ignoreSize: !0
				},
				init: function(t, e, i) {
					this.mergeDefaultAndTheme(t, i), t.selected = t.selected || {}, this._updateData(i);
					var n = this._data,
						a = this.option.selected;
					if (n[0] && "single" === this.get("selectedMode")) {
						var o = !1;
						for (var r in a) a[r] && (this.select(r), o = !0);
						!o && this.select(n[0].get("name"))
					}
				},
				mergeOption: function(t) {
					o.superCall(this, "mergeOption", t), this._updateData(this.ecModel)
				},
				_updateData: function(t) {
					var e = n.map(this.get("data") || [], function(t) {
						return "string" == typeof t && (t = {
							name: t
						}), new a(t, this, this.ecModel)
					}, this);
					this._data = e;
					var i = n.map(t.getSeries(), function(t) {
						return t.name
					});
					t.eachSeries(function(t) {
						if (t.legendDataProvider) {
							var e = t.legendDataProvider();
							i = i.concat(e.mapArray(e.getName))
						}
					}), this._availableNames = i
				},
				getData: function() {
					return this._data
				},
				select: function(t) {
					var e = this.option.selected,
						i = this.get("selectedMode");
					if ("single" === i) {
						var a = this._data;
						n.each(a, function(t) {
							e[t.get("name")] = !1
						})
					}
					e[t] = !0
				},
				unSelect: function(t) {
					"single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
				},
				toggleSelected: function(t) {
					var e = this.option.selected;
					t in e || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
				},
				isSelected: function(t) {
					var e = this.option.selected;
					return !(t in e && !e[t]) && n.indexOf(this._availableNames, t) >= 0
				},
				defaultOption: {
					zlevel: 0,
					z: 4,
					show: !0,
					orient: "horizontal",
					left: "center",
					top: "top",
					align: "auto",
					backgroundColor: "rgba(0,0,0,0)",
					borderColor: "#ccc",
					borderWidth: 0,
					padding: 5,
					itemGap: 10,
					itemWidth: 25,
					itemHeight: 14,
					textStyle: {
						color: "#333"
					},
					selectedMode: !0
				}
			});
		t.exports = o
	}, function(t, e, i) {
		function n(t, e) {
			e.dispatchAction({
				type: "legendToggleSelect",
				name: t
			})
		}
		function a(t, e, i) {
			t.get("legendHoverLink") && i.dispatchAction({
				type: "highlight",
				seriesName: t.name,
				name: e
			})
		}
		function o(t, e, i) {
			t.get("legendHoverLink") && i.dispatchAction({
				type: "downplay",
				seriesName: t.name,
				name: e
			})
		}
		var r = i(1),
			s = i(24),
			l = i(3),
			h = i(103),
			u = r.curry,
			c = "#ccc";
		t.exports = i(2).extendComponentView({
			type: "legend",
			init: function() {
				this._symbolTypeStore = {}
			},
			render: function(t, e, i) {
				var s = this.group;
				if (s.removeAll(), t.get("show")) {
					var c = t.get("selectedMode"),
						d = t.get("align");
					"auto" === d && (d = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left");
					var f = {};
					r.each(t.getData(), function(r) {
						var h = r.get("name");
						if ("" === h || "\n" === h) return void s.add(new l.Group({
							newline: !0
						}));
						var p = e.getSeriesByName(h)[0];
						if (!f[h]) if (p) {
							var g = p.getData(),
								m = g.getVisual("color");
							"function" == typeof m && (m = m(p.getDataParams(0)));
							var v = g.getVisual("legendSymbol") || "roundRect",
								y = g.getVisual("symbol"),
								x = this._createItem(h, r, t, v, y, d, m, c);
							x.on("click", u(n, h, i)).on("mouseover", u(a, p, "", i)).on("mouseout", u(o, p, "", i)), f[h] = !0
						} else e.eachRawSeries(function(e) {
							if (!f[h] && e.legendDataProvider) {
								var s = e.legendDataProvider(),
									l = s.indexOfName(h),
									p = s.getItemVisual(l, "color"),
									g = "roundRect",
									m = this._createItem(h, r, t, g, null, d, p, c);
								m.on("click", u(n, h, i)).on("mouseover", u(a, e, h, i)).on("mouseout", u(o, e, h, i)), f[h] = !0
							}
						}, this)
					}, this), h.layout(s, t, i), h.addBackground(s, t)
				}
			},
			_createItem: function(t, e, i, n, a, o, r, h) {
				var u = i.get("itemWidth"),
					d = i.get("itemHeight"),
					f = i.isSelected(t),
					p = new l.Group,
					g = e.getModel("textStyle"),
					m = e.get("icon");
				if (n = m || n, p.add(s.createSymbol(n, 0, 0, u, d, f ? r : c)), !m && a && (a !== n || "none" == a)) {
					var v = .8 * d;
					"none" === a && (a = "circle"), p.add(s.createSymbol(a, (u - v) / 2, (d - v) / 2, v, v, f ? r : c))
				}
				var y = "left" === o ? u + 5 : -5,
					x = o,
					_ = i.get("formatter");
				"string" == typeof _ && _ ? t = _.replace("{name}", t) : "function" == typeof _ && (t = _(t));
				var w = new l.Text({
					style: {
						text: t,
						x: y,
						y: d / 2,
						fill: f ? g.getTextColor() : c,
						textFont: g.getFont(),
						textAlign: x,
						textVerticalAlign: "middle"
					}
				});
				return p.add(w), p.add(new l.Rect({
					shape: p.getBoundingRect(),
					invisible: !0
				})), p.eachChild(function(t) {
					t.silent = !h
				}), this.group.add(p), l.setHoverStyle(p), p
			}
		})
	}, function(t, e, i) {
		function n(t, e, i) {
			var n, a = {},
				r = "toggleSelected" === t;
			return i.eachComponent("legend", function(i) {
				r && null != n ? i[n ? "select" : "unSelect"](e.name) : (i[t](e.name), n = i.isSelected(e.name));
				var s = i.getData();
				o.each(s, function(t) {
					var e = t.get("name");
					if ("\n" !== e && "" !== e) {
						var n = i.isSelected(e);
						e in a ? a[e] = a[e] && n : a[e] = n
					}
				})
			}), {
				name: e.name,
				selected: a
			}
		}
		var a = i(2),
			o = i(1);
		a.registerAction("legendToggleSelect", "legendselectchanged", o.curry(n, "toggleSelected")), a.registerAction("legendSelect", "legendselected", o.curry(n, "select")), a.registerAction("legendUnSelect", "legendunselected", o.curry(n, "unSelect"))
	}, function(t, e) {
		t.exports = function(t) {
			var e = t.findComponents({
				mainType: "legend"
			});
			e && e.length && t.filterSeries(function(t) {
				for (var i = 0; i < e.length; i++) if (!e[i].isSelected(t.name)) return !1;
				return !0
			})
		}
	}, function(t, e, i) {
		i(183), i(184), i(2).registerPreprocessor(function(t) {
			t.markLine = t.markLine || {}
		})
	}, function(t, e, i) {
		i(185), i(186), i(2).registerPreprocessor(function(t) {
			t.markPoint = t.markPoint || {}
		})
	}, function(t, e, i) {
		var n = i(7),
			a = i(2).extendComponentModel({
				type: "markLine",
				dependencies: ["series", "grid", "polar"],
				init: function(t, e, i, n) {
					this.mergeDefaultAndTheme(t, i), this.mergeOption(t, i, n.createdBySelf, !0)
				},
				mergeOption: function(t, e, i, o) {
					i || e.eachSeries(function(t) {
						var i = t.get("markLine"),
							r = t.markLineModel;
						if (!i || !i.data) return void(t.markLineModel = null);
						if (r) r.mergeOption(i, e, !0);
						else {
							o && n.defaultEmphasis(i.label, ["position", "show", "textStyle", "distance", "formatter"]);
							var s = {
								seriesIndex: t.seriesIndex,
								name: t.name,
								createdBySelf: !0
							};
							r = new a(i, this, e, s)
						}
						t.markLineModel = r
					}, this)
				},
				defaultOption: {
					zlevel: 0,
					z: 5,
					symbol: ["circle", "arrow"],
					symbolSize: [8, 16],
					precision: 2,
					tooltip: {
						trigger: "item"
					},
					label: {
						normal: {
							show: !0,
							position: "end"
						},
						emphasis: {
							show: !0
						}
					},
					lineStyle: {
						normal: {
							type: "dashed"
						},
						emphasis: {
							width: 3
						}
					},
					animationEasing: "linear"
				}
			});
		t.exports = a
	}, function(t, e, i) {
		function n(t, e) {
			return f.dataFilter(t, e[0]) && f.dataFilter(t, e[1])
		}
		function a(t, e, i, n, a, o, r) {
			var s, l = o.coordinateSystem,
				h = t.getItemModel(e),
				c = h.get("x"),
				d = h.get("y");
			if (null != c && null != d) s = [u.parsePercent(c, r.getWidth()), u.parsePercent(d, r.getHeight())];
			else {
				if (o.getMarkerPosition) s = o.getMarkerPosition(t.getValues(t.dimensions, e));
				else {
					var f = l.dimensions,
						p = t.get(f[0], e),
						g = t.get(f[1], e);
					s = l.dataToPoint([p, g])
				}
				if (n && "cartesian2d" === l.type) {
					var m = null != a ? l.getAxis(1 === a ? "x" : "y") : l.getAxesByScale("ordinal")[0];
					m && m.onBand && (s["x" === m.dim ? 0 : 1] = m.toGlobalCoord(m.getExtent()[i ? 0 : 1]))
				}
			}
			t.setItemLayout(e, s)
		}
		function o(t, e, i) {
			var a;
			a = t ? r.map(t && t.dimensions, function(t) {
				var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
				return i.name = t, i
			}) : [{
				name: "value",
				type: "float"
			}];
			var o = new s(a, i),
				l = new s(a, i),
				h = new s([], i),
				u = r.map(i.get("data"), r.curry(g, e, t, i));
			t && (u = r.filter(u, r.curry(n, t)));
			var c = t ? f.dimValueGetter : function(t) {
					return t.value
				};
			return o.initData(r.map(u, function(t) {
				return t[0]
			}), null, c), l.initData(r.map(u, function(t) {
				return t[1]
			}), null, c), h.initData(r.map(u, function(t) {
				return t[2]
			})), {
				from: o,
				to: l,
				line: h
			}
		}
		var r = i(1),
			s = i(14),
			l = i(9),
			h = i(7),
			u = i(4),
			c = l.addCommas,
			d = l.encodeHTML,
			f = i(104),
			p = i(84),
			g = function(t, e, i, n) {
				var a = t.getData(),
					o = n.type;
				if (!r.isArray(n) && ("min" === o || "max" === o || "average" === o)) {
					var s = f.getAxisInfo(n, a, e, t),
						l = s.baseAxis.dim + "Axis",
						h = s.valueAxis.dim + "Axis",
						u = s.baseAxis.scale.getExtent(),
						c = r.clone(n),
						d = {};
					c.type = null, c[l] = u[0], d[l] = u[1];
					var p = f.numCalculate(a, s.valueDataDim, o);
					p = s.valueAxis.coordToData(s.valueAxis.dataToCoord(p));
					var g = i.get("precision");
					g >= 0 && (p = +p.toFixed(g)), c[h] = d[h] = p, n = [c, d,
					{
						type: o,
						valueIndex: n.valueIndex,
						value: p
					}]
				}
				return n = [f.dataTransform(t, n[0]), f.dataTransform(t, n[1]), r.extend({}, n[2])], n[2].type = n[2].type || "", r.merge(n[2], n[0]), r.merge(n[2], n[1]), n
			},
			m = {
				formatTooltip: function(t) {
					var e = this._data,
						i = this.getRawValue(t),
						n = r.isArray(i) ? r.map(i, c).join(", ") : c(i),
						a = e.getName(t);
					return this.name + "<br />" + ((a ? d(a) + " : " : "") + n)
				},
				getRawDataArray: function() {
					return this.option.data
				},
				getData: function() {
					return this._data
				},
				setData: function(t) {
					this._data = t
				}
			};
		r.defaults(m, h.dataFormatMixin), i(2).extendComponentView({
			type: "markLine",
			init: function() {
				this._markLineMap = {}
			},
			render: function(t, e, i) {
				var n = this._markLineMap;
				for (var a in n) n[a].__keep = !1;
				e.eachSeries(function(t) {
					var n = t.markLineModel;
					n && this._renderSeriesML(t, n, e, i)
				}, this);
				for (var a in n) n[a].__keep || this.group.remove(n[a].group)
			},
			updateLayout: function(t, e, i) {
				e.eachSeries(function(t) {
					var e = t.markLineModel;
					if (e) {
						var n = e.getData(),
							o = e.__from,
							r = e.__to;
						o.each(function(e) {
							var s = n.getItemModel(e),
								l = s.get("type"),
								h = s.get("valueIndex");
							a(o, e, !0, l, h, t, i), a(r, e, !1, l, h, t, i)
						}), n.each(function(t) {
							n.setItemLayout(t, [o.getItemLayout(t), r.getItemLayout(t)])
						}), this._markLineMap[t.name].updateLayout()
					}
				}, this)
			},
			_renderSeriesML: function(t, e, i, n) {
				function s(e, i, o, r, s) {
					var l = e.getItemModel(i);
					a(e, i, o, r, s, t, n), e.setItemVisual(i, {
						symbolSize: l.get("symbolSize") || _[o ? 0 : 1],
						symbol: l.get("symbol", !0) || x[o ? 0 : 1],
						color: l.get("itemStyle.normal.color") || u.getVisual("color")
					})
				}
				var l = t.coordinateSystem,
					h = t.name,
					u = t.getData(),
					c = this._markLineMap,
					d = c[h];
				d || (d = c[h] = new p), this.group.add(d.group);
				var f = o(l, t, e),
					g = f.from,
					v = f.to,
					y = f.line;
				e.__from = g, e.__to = v, r.extend(e, m), e.setData(y);
				var x = e.get("symbol"),
					_ = e.get("symbolSize");
				r.isArray(x) || (x = [x, x]), "number" == typeof _ && (_ = [_, _]), f.from.each(function(t) {
					var e = y.getItemModel(t),
						i = e.get("type"),
						n = e.get("valueIndex");
					s(g, t, !0, i, n), s(v, t, !1, i, n)
				}), y.each(function(t) {
					var e = y.getItemModel(t).get("lineStyle.normal.color");
					y.setItemVisual(t, {
						color: e || g.getItemVisual(t, "color")
					}), y.setItemLayout(t, [g.getItemLayout(t), v.getItemLayout(t)])
				}), d.updateData(y, g, v), f.line.eachItemGraphicEl(function(t, i) {
					t.traverse(function(t) {
						t.dataModel = e
					})
				}), d.__keep = !0
			}
		})
	}, function(t, e, i) {
		var n = i(7),
			a = i(2).extendComponentModel({
				type: "markPoint",
				dependencies: ["series", "grid", "polar"],
				init: function(t, e, i, n) {
					this.mergeDefaultAndTheme(t, i), this.mergeOption(t, i, n.createdBySelf, !0)
				},
				mergeOption: function(t, e, i, o) {
					i || e.eachSeries(function(t) {
						var i = t.get("markPoint"),
							r = t.markPointModel;
						if (!i || !i.data) return void(t.markPointModel = null);
						if (r) r.mergeOption(i, e, !0);
						else {
							o && n.defaultEmphasis(i.label, ["position", "show", "textStyle", "distance", "formatter"]);
							var s = {
								seriesIndex: t.seriesIndex,
								name: t.name,
								createdBySelf: !0
							};
							r = new a(i, this, e, s)
						}
						t.markPointModel = r
					}, this)
				},
				defaultOption: {
					zlevel: 0,
					z: 5,
					symbol: "pin",
					symbolSize: 50,
					tooltip: {
						trigger: "item"
					},
					label: {
						normal: {
							show: !0,
							position: "inside"
						},
						emphasis: {
							show: !0
						}
					},
					itemStyle: {
						normal: {
							borderWidth: 2
						},
						emphasis: {}
					}
				}
			});
		t.exports = a
	}, function(t, e, i) {
		function n(t, e, i) {
			var n = e.coordinateSystem;
			t.each(function(a) {
				var o, r = t.getItemModel(a),
					s = r.getShallow("x"),
					l = r.getShallow("y");
				if (null != s && null != l) o = [h.parsePercent(s, i.getWidth()), h.parsePercent(l, i.getHeight())];
				else if (e.getMarkerPosition) o = e.getMarkerPosition(t.getValues(t.dimensions, a));
				else if (n) {
					var u = t.get(n.dimensions[0], a),
						c = t.get(n.dimensions[1], a);
					o = n.dataToPoint([u, c])
				}
				t.setItemLayout(a, o)
			})
		}
		function a(t, e, i) {
			var n;
			n = t ? r.map(t && t.dimensions, function(t) {
				var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
				return i.name = t, i
			}) : [{
				name: "value",
				type: "float"
			}];
			var a = new d(n, i),
				o = r.map(i.get("data"), r.curry(f.dataTransform, e));
			return t && (o = r.filter(o, r.curry(f.dataFilter, t))), a.initData(o, null, t ? f.dimValueGetter : function(t) {
				return t.value
			}), a
		}
		var o = i(38),
			r = i(1),
			s = i(9),
			l = i(7),
			h = i(4),
			u = s.addCommas,
			c = s.encodeHTML,
			d = i(14),
			f = i(104),
			p = {
				getRawDataArray: function() {
					return this.option.data
				},
				formatTooltip: function(t) {
					var e = this.getData(),
						i = this.getRawValue(t),
						n = r.isArray(i) ? r.map(i, u).join(", ") : u(i),
						a = e.getName(t);
					return this.name + "<br />" + ((a ? c(a) + " : " : "") + n)
				},
				getData: function() {
					return this._data
				},
				setData: function(t) {
					this._data = t
				}
			};
		r.defaults(p, l.dataFormatMixin), i(2).extendComponentView({
			type: "markPoint",
			init: function() {
				this._symbolDrawMap = {}
			},
			render: function(t, e, i) {
				var n = this._symbolDrawMap;
				for (var a in n) n[a].__keep = !1;
				e.eachSeries(function(t) {
					var e = t.markPointModel;
					e && this._renderSeriesMP(t, e, i)
				}, this);
				for (var a in n) n[a].__keep || (n[a].remove(), this.group.remove(n[a].group))
			},
			updateLayout: function(t, e, i) {
				e.eachSeries(function(t) {
					var e = t.markPointModel;
					e && (n(e.getData(), t, i), this._symbolDrawMap[t.name].updateLayout(e))
				}, this)
			},
			_renderSeriesMP: function(t, e, i) {
				var s = t.coordinateSystem,
					l = t.name,
					h = t.getData(),
					u = this._symbolDrawMap,
					c = u[l];
				c || (c = u[l] = new o);
				var d = a(s, t, e);
				r.mixin(e, p), e.setData(d), n(e.getData(), t, i), d.each(function(t) {
					var i = d.getItemModel(t),
						n = i.getShallow("symbolSize");
					"function" == typeof n && (n = n(e.getRawValue(t), e.getDataParams(t))), d.setItemVisual(t, {
						symbolSize: n,
						color: i.get("itemStyle.normal.color") || h.getVisual("color"),
						symbol: i.getShallow("symbol")
					})
				}), c.updateData(d), this.group.add(c.group), d.eachItemGraphicEl(function(t) {
					t.traverse(function(t) {
						t.dataModel = e
					})
				}), c.__keep = !0
			}
		})
	}, function(t, e, i) {
		"use strict";
		var n = i(2),
			a = i(3),
			o = i(11);
		n.extendComponentModel({
			type: "title",
			layoutMode: {
				type: "box",
				ignoreSize: !0
			},
			defaultOption: {
				zlevel: 0,
				z: 6,
				show: !0,
				text: "",
				target: "blank",
				subtext: "",
				subtarget: "blank",
				left: 0,
				top: 0,
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				borderWidth: 0,
				padding: 5,
				itemGap: 10,
				textStyle: {
					fontSize: 18,
					fontWeight: "bolder",
					color: "#333"
				},
				subtextStyle: {
					color: "#aaa"
				}
			}
		}), n.extendComponentView({
			type: "title",
			render: function(t, e, i) {
				if (this.group.removeAll(), t.get("show")) {
					var n = this.group,
						r = t.getModel("textStyle"),
						s = t.getModel("subtextStyle"),
						l = t.get("textAlign"),
						h = new a.Text({
							style: {
								text: t.get("text"),
								textFont: r.getFont(),
								fill: r.getTextColor(),
								textBaseline: "top"
							},
							z2: 10
						}),
						u = h.getBoundingRect(),
						c = t.get("subtext"),
						d = new a.Text({
							style: {
								text: c,
								textFont: s.getFont(),
								fill: s.getTextColor(),
								y: u.height + t.get("itemGap"),
								textBaseline: "top"
							},
							z2: 10
						}),
						f = t.get("link"),
						p = t.get("sublink");
					h.silent = !f, d.silent = !p, f && h.on("click", function() {
						window.open(f, "_" + t.get("target"))
					}), p && d.on("click", function() {
						window.open(p, "_" + t.get("subtarget"))
					}), n.add(h), c && n.add(d);
					var g = n.getBoundingRect(),
						m = t.getBoxLayoutParams();
					m.width = g.width, m.height = g.height;
					var v = o.getLayoutRect(m, {
						width: i.getWidth(),
						height: i.getHeight()
					}, t.get("padding"));
					l || (l = t.get("left") || t.get("right"), "middle" === l && (l = "center"), "right" === l ? v.x += v.width : "center" === l && (v.x += v.width / 2)), n.position = [v.x, v.y], h.setStyle("textAlign", l), d.setStyle("textAlign", l), g = n.getBoundingRect();
					var y = v.margin,
						x = t.getItemStyle(["color", "opacity"]);
					x.fill = t.get("backgroundColor");
					var _ = new a.Rect({
						shape: {
							x: g.x - y[3],
							y: g.y - y[0],
							width: g.width + y[1] + y[3],
							height: g.height + y[0] + y[2]
						},
						style: x,
						silent: !0
					});
					a.subPixelOptimizeRect(_), n.add(_)
				}
			}
		})
	}, function(t, e, i) {
		i(189), i(190), i(195), i(193), i(191), i(192), i(194)
	}, function(t, e, i) {
		var n = i(29),
			a = i(1),
			o = i(2).extendComponentModel({
				type: "toolbox",
				layoutMode: {
					type: "box",
					ignoreSize: !0
				},
				mergeDefaultAndTheme: function(t) {
					o.superApply(this, "mergeDefaultAndTheme", arguments), a.each(this.option.feature, function(t, e) {
						var i = n.get(e);
						i && a.merge(t, i.defaultOption)
					})
				},
				defaultOption: {
					show: !0,
					z: 6,
					zlevel: 0,
					orient: "horizontal",
					left: "right",
					top: "top",
					backgroundColor: "transparent",
					borderColor: "#ccc",
					borderWidth: 0,
					padding: 5,
					itemSize: 15,
					itemGap: 8,
					showTitle: !0,
					iconStyle: {
						normal: {
							borderColor: "#666",
							color: "none"
						},
						emphasis: {
							borderColor: "#3E98C5"
						}
					}
				}
			});
		t.exports = o
	}, function(t, e, i) {
		(function(e) {
			function n(t) {
				return 0 === t.indexOf("my")
			}
			var a = i(29),
				o = i(1),
				r = i(3),
				s = i(12),
				l = i(52),
				h = i(103),
				u = i(17);
			t.exports = i(2).extendComponentView({
				type: "toolbox",
				render: function(t, e, i) {
					function c(o, r) {
						var l, h = v[o],
							u = v[r],
							c = g[h],
							f = new s(c, t, t.ecModel);
						if (h && !u) {
							if (n(h)) l = {
								model: f,
								onclick: f.option.onclick,
								featureName: h
							};
							else {
								var p = a.get(h);
								if (!p) return;
								l = new p(f)
							}
							m[h] = l
						} else {
							if (l = m[u], !l) return;
							l.model = f
						}
						return !h && u ? void(l.dispose && l.dispose(e, i)) : !f.get("show") || l.unusable ? void(l.remove && l.remove(e, i)) : (d(f, l, h), f.setIconStatus = function(t, e) {
							var i = this.option,
								n = this.iconPaths;
							i.iconStatus = i.iconStatus || {}, i.iconStatus[t] = e, n[t] && n[t].trigger(e)
						}, void(l.render && l.render(f, e, i)))
					}
					function d(n, a, s) {
						var l = n.getModel("iconStyle"),
							h = a.getIcons ? a.getIcons() : n.get("icon"),
							u = n.get("title") || {};
						if ("string" == typeof h) {
							var c = h,
								d = u;
							h = {}, u = {}, h[s] = c, u[s] = d
						}
						var g = n.iconPaths = {};
						o.each(h, function(s, h) {
							var c = l.getModel("normal").getItemStyle(),
								d = l.getModel("emphasis").getItemStyle(),
								m = {
									x: -p / 2,
									y: -p / 2,
									width: p,
									height: p
								},
								v = 0 === s.indexOf("image://") ? (m.image = s.slice(8), new r.Image({
									style: m
								})) : r.makePath(s.replace("path://", ""), {
									style: c,
									hoverStyle: d,
									rectHover: !0
								}, m, "center");
							r.setHoverStyle(v), t.get("showTitle") && (v.__title = u[h], v.on("mouseover", function() {
								v.setStyle({
									text: u[h],
									textPosition: d.textPosition || "bottom",
									textFill: d.fill || d.stroke || "#000",
									textAlign: d.textAlign || "center"
								})
							}).on("mouseout", function() {
								v.setStyle({
									textFill: null
								})
							})), v.trigger(n.get("iconStatus." + h) || "normal"), f.add(v), v.on("click", o.bind(a.onclick, a, e, i, h)), g[h] = v
						})
					}
					var f = this.group;
					if (f.removeAll(), t.get("show")) {
						var p = +t.get("itemSize"),
							g = t.get("feature") || {},
							m = this._features || (this._features = {}),
							v = [];
						o.each(g, function(t, e) {
							v.push(e)
						}), new l(this._featureNames || [], v).add(c).update(c).remove(o.curry(c, null)).execute(), this._featureNames = v, h.layout(f, t, i), h.addBackground(f, t), f.eachChild(function(t) {
							var e = t.__title,
								n = t.hoverStyle;
							if (n && e) {
								var a = u.getBoundingRect(e, n.font),
									o = t.position[0] + f.position[0],
									r = t.position[1] + f.position[1] + p,
									s = !1;
								r + a.height > i.getHeight() && (n.textPosition = "top", s = !0);
								var l = s ? -5 - a.height : p + 8;
								o + a.width / 2 > i.getWidth() ? (n.textPosition = ["100%", l], n.textAlign = "right") : o - a.width / 2 < 0 && (n.textPosition = [0, l], n.textAlign = "left")
							}
						})
					}
				},
				remove: function(t, e) {
					o.each(this._features, function(i) {
						i.remove && i.remove(t, e)
					}), this.group.removeAll()
				},
				dispose: function(t, e) {
					o.each(this._features, function(i) {
						i.dispose && i.dispose(t, e)
					})
				}
			})
		}).call(e, i(201))
	}, function(t, e, i) {
		function n(t) {
			var e = {},
				i = [],
				n = [];
			return t.eachRawSeries(function(t) {
				var a = t.coordinateSystem;
				if (!a || "cartesian2d" !== a.type && "polar" !== a.type) i.push(t);
				else {
					var o = a.getBaseAxis();
					if ("category" === o.type) {
						var r = o.dim + "_" + o.index;
						e[r] || (e[r] = {
							categoryAxis: o,
							valueAxis: a.getOtherAxis(o),
							series: []
						}, n.push({
							axisDim: o.dim,
							axisIndex: o.index
						})), e[r].series.push(t)
					} else i.push(t)
				}
			}), {
				seriesGroupByCategoryAxis: e,
				other: i,
				meta: n
			}
		}
		function a(t) {
			var e = [];
			return p.each(t, function(t, i) {
				var n = t.categoryAxis,
					a = t.valueAxis,
					o = a.dim,
					r = [" "].concat(p.map(t.series, function(t) {
						return t.name
					})),
					s = [n.model.getCategories()];
				p.each(t.series, function(t) {
					s.push(t.getRawData().mapArray(o, function(t) {
						return t
					}))
				});
				for (var l = [r.join(v)], h = 0; h < s[0].length; h++) {
					for (var u = [], c = 0; c < s.length; c++) u.push(s[c][h]);
					l.push(u.join(v))
				}
				e.push(l.join("\n"))
			}), e.join("\n\n" + m + "\n\n")
		}
		function o(t) {
			return p.map(t, function(t) {
				var e = t.getRawData(),
					i = [t.name],
					n = [];
				return e.each(e.dimensions, function() {
					for (var t = arguments.length, a = arguments[t - 1], o = e.getName(a), r = 0; t - 1 > r; r++) n[r] = arguments[r];
					i.push((o ? o + v : "") + n.join(v))
				}), i.join("\n")
			}).join("\n\n" + m + "\n\n")
		}
		function r(t) {
			var e = n(t);
			return {
				value: p.filter([a(e.seriesGroupByCategoryAxis), o(e.other)], function(t) {
					return t.replace(/[\n\t\s]/g, "")
				}).join("\n\n" + m + "\n\n"),
				meta: e.meta
			}
		}
		function s(t) {
			return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
		}
		function l(t) {
			var e = t.slice(0, t.indexOf("\n"));
			return e.indexOf(v) >= 0 ? !0 : void 0
		}
		function h(t) {
			for (var e = t.split(/\n+/g), i = s(e.shift()).split(y), n = [], a = p.map(i, function(t) {
				return {
					name: t,
					data: []
				}
			}), o = 0; o < e.length; o++) {
				var r = s(e[o]).split(y);
				n.push(r.shift());
				for (var l = 0; l < r.length; l++) a[l] && (a[l].data[o] = r[l])
			}
			return {
				series: a,
				categories: n
			}
		}
		function u(t) {
			for (var e = t.split(/\n+/g), i = s(e.shift()), n = [], a = 0; a < e.length; a++) {
				var o, r = s(e[a]).split(y),
					l = "",
					h = !1;
				isNaN(r[0]) ? (h = !0, l = r[0], r = r.slice(1), n[a] = {
					name: l,
					value: []
				}, o = n[a].value) : o = n[a] = [];
				for (var u = 0; u < r.length; u++) o.push(+r[u]);
				1 === o.length && (h ? n[a].value = o[0] : n[a] = o[0])
			}
			return {
				name: i,
				data: n
			}
		}
		function c(t, e) {
			var i = t.split(new RegExp("\n*" + m + "\n*", "g")),
				n = {
					series: []
				};
			return p.each(i, function(t, i) {
				if (l(t)) {
					var a = h(t),
						o = e[i],
						r = o.axisDim + "Axis";
					o && (n[r] = n[r] || [], n[r][o.axisIndex] = {
						data: a.categories
					}, n.series = n.series.concat(a.series))
				} else {
					var a = u(t);
					n.series.push(a)
				}
			}), n
		}
		function d(t) {
			this._dom = null, this.model = t
		}
		function f(t, e) {
			return p.map(t, function(t, i) {
				var n = e && e[i];
				return p.isObject(n) && !p.isArray(n) ? (p.isObject(t) && !p.isArray(t) && (t = t.value), p.defaults({
					value: t
				}, n)) : t
			})
		}
		var p = i(1),
			g = i(33),
			m = new Array(60).join("-"),
			v = "	",
			y = new RegExp("[" + v + "]+", "g");
		d.defaultOption = {
			show: !0,
			readOnly: !1,
			optionToContent: null,
			contentToOption: null,
			icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
			title: "数据视图",
			lang: ["数据视图", "关闭", "刷新"],
			backgroundColor: "#fff",
			textColor: "#000",
			textareaColor: "#fff",
			textareaBorderColor: "#333",
			buttonColor: "#c23531",
			buttonTextColor: "#fff"
		}, d.prototype.onclick = function(t, e) {
			function i() {
				n.removeChild(o), S._dom = null
			}
			var n = e.getDom(),
				a = this.model;
			this._dom && n.removeChild(this._dom);
			var o = document.createElement("div");
			o.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", o.style.backgroundColor = a.get("backgroundColor") || "#fff";
			var s = document.createElement("h4"),
				l = a.get("lang") || [];
			s.innerHTML = l[0] || a.get("title"), s.style.cssText = "margin: 10px 20px;", s.style.color = a.get("textColor");
			var h = document.createElement("div"),
				u = document.createElement("textarea");
			h.style.cssText = "display:block;width:100%;overflow:hidden;";
			var d = a.get("optionToContent"),
				f = a.get("contentToOption"),
				m = r(t);
			if ("function" == typeof d) {
				var y = d(e.getOption());
				"string" == typeof y ? h.innerHTML = y : p.isDom(y) && h.appendChild(y)
			} else h.appendChild(u), u.readOnly = a.get("readOnly"), u.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;", u.style.color = a.get("textColor"), u.style.borderColor = a.get("textareaBorderColor"), u.style.backgroundColor = a.get("textareaColor"), u.value = m.value;
			var x = m.meta,
				_ = document.createElement("div");
			_.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
			var w = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
				b = document.createElement("div"),
				M = document.createElement("div");
			w += ";background-color:" + a.get("buttonColor"), w += ";color:" + a.get("buttonTextColor");
			var S = this;
			g.addEventListener(b, "click", i), g.addEventListener(M, "click", function() {
				var t;
				try {
					t = "function" == typeof f ? f(h, e.getOption()) : c(u.value, x)
				} catch (n) {
					throw i(), new Error("Data view format error " + n)
				}
				t && e.dispatchAction({
					type: "changeDataView",
					newOption: t
				}), i()
			}), b.innerHTML = l[1], M.innerHTML = l[2], M.style.cssText = w, b.style.cssText = w, !a.get("readOnly") && _.appendChild(M), _.appendChild(b), g.addEventListener(u, "keydown", function(t) {
				if (9 === (t.keyCode || t.which)) {
					var e = this.value,
						i = this.selectionStart,
						n = this.selectionEnd;
					this.value = e.substring(0, i) + v + e.substring(n), this.selectionStart = this.selectionEnd = i + 1, g.stop(t)
				}
			}), o.appendChild(s), o.appendChild(h), o.appendChild(_), h.style.height = n.clientHeight - 80 + "px", n.appendChild(o), this._dom = o
		}, d.prototype.remove = function(t, e) {
			this._dom && e.getDom().removeChild(this._dom)
		}, d.prototype.dispose = function(t, e) {
			this.remove(t, e)
		}, i(29).register("dataView", d), i(2).registerAction({
			type: "changeDataView",
			event: "dataViewChanged",
			update: "prepareAndUpdate"
		}, function(t, e) {
			var i = [];
			p.each(t.newOption.series, function(t) {
				var n = e.getSeriesByName(t.name)[0];
				if (n) {
					var a = n.get("data");
					i.push({
						name: t.name,
						data: f(t.data, a)
					})
				} else i.push(p.extend({
					type: "scatter"
				}, t))
			}), e.mergeOption(p.defaults({
				series: i
			}, t.newOption))
		}), t.exports = d
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			this.model = t, this._controllerGroup, this._controller, this._isZoomActive
		}
		function a(t, e) {
			var i = [{
				axisModel: t.getAxis("x").model,
				axisIndex: 0
			}, {
				axisModel: t.getAxis("y").model,
				axisIndex: 0
			}];
			return i.grid = t, e.eachComponent({
				mainType: "dataZoom",
				subType: "select"
			}, function(t, n) {
				o("xAxis", i[0].axisModel, t, e) && (i[0].dataZoomModel = t), o("yAxis", i[1].axisModel, t, e) && (i[1].dataZoomModel = t)
			}), i
		}
		function o(t, e, i, n) {
			var a = i.get(t + "Index");
			return null != a && n.getComponent(t, a) === e
		}
		function r(t, e) {
			var i = e.grid,
				n = new d(t[0][0], t[1][0], t[0][1] - t[0][0], t[1][1] - t[1][0]);
			if (n.intersect(i.getRect())) {
				var a = i.getCartesian(e[0].axisIndex, e[1].axisIndex),
					o = a.pointToData([t[0][0], t[1][0]], !0),
					r = a.pointToData([t[0][1], t[1][1]], !0);
				return [v([o[0], r[0]]), v([o[1], r[1]])]
			}
		}
		function s(t, e, i, n) {
			var a = e[i],
				o = a.dataZoomModel;
			return o ? {
				dataZoomId: o.id,
				startValue: t[i][0],
				endValue: t[i][1]
			} : void 0
		}
		function l(t, e) {
			t.setIconStatus("back", p.count(e) > 1 ? "emphasis" : "normal")
		}
		var h = i(1),
			u = i(4),
			c = i(160),
			d = i(8),
			f = i(26),
			p = i(100),
			g = i(102),
			m = h.each,
			v = u.asc;
		i(175);
		var y = "\x00_ec_\x00toolbox-dataZoom_";
		n.defaultOption = {
			show: !0,
			icon: {
				zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
				back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
			},
			title: {
				zoom: "区域缩放",
				back: "区域缩放还原"
			}
		};
		var x = n.prototype;
		x.render = function(t, e, i) {
			l(t, e)
		}, x.onclick = function(t, e, i) {
			var n = this._controllerGroup;
			this._controllerGroup || (n = this._controllerGroup = new f, e.getZr().add(n)), _[i].call(this, n, this.model, t, e)
		}, x.remove = function(t, e) {
			this._disposeController(), g.release("globalPan", e.getZr())
		}, x.dispose = function(t, e) {
			var i = e.getZr();
			g.release("globalPan", i), this._disposeController(), this._controllerGroup && i.remove(this._controllerGroup)
		};
		var _ = {
			zoom: function(t, e, i, n) {
				var a = this._isZoomActive = !this._isZoomActive,
					o = n.getZr();
				g[a ? "take" : "release"]("globalPan", o), e.setIconStatus("zoom", a ? "emphasis" : "normal"), a ? (o.setDefaultCursorStyle("crosshair"), this._createController(t, e, i, n)) : (o.setDefaultCursorStyle("default"), this._disposeController())
			},
			back: function(t, e, i, n) {
				this._dispatchAction(p.pop(i), n)
			}
		};
		x._createController = function(t, e, i, n) {
			var a = this._controller = new c("rect", n.getZr(), {
				lineWidth: 3,
				stroke: "#333",
				fill: "rgba(0,0,0,0.2)"
			});
			a.on("selectEnd", h.bind(this._onSelected, this, a, e, i, n)), a.enable(t, !1)
		}, x._disposeController = function() {
			var t = this._controller;
			t && (t.off("selected"), t.dispose())
		}, x._onSelected = function(t, e, i, n, o) {
			if (o.length) {
				var l = o[0];
				t.update();
				var h = {};
				i.eachComponent("grid", function(t, e) {
					var n = t.coordinateSystem,
						o = a(n, i),
						u = r(l, o);
					if (u) {
						var c = s(u, o, 0, "x"),
							d = s(u, o, 1, "y");
						c && (h[c.dataZoomId] = c), d && (h[d.dataZoomId] = d)
					}
				}, this), p.push(i, h), this._dispatchAction(h, n)
			}
		}, x._dispatchAction = function(t, e) {
			var i = [];
			m(t, function(t) {
				i.push(t)
			}), i.length && e.dispatchAction({
				type: "dataZoom",
				from: this.uid,
				batch: h.clone(i, !0)
			})
		}, i(29).register("dataZoom", n), i(2).registerPreprocessor(function(t) {
			function e(t, e) {
				if (e) {
					var a = t + "Index",
						o = e[a];
					null == o || h.isArray(o) || (o = o === !1 ? [] : [o]), i(t, function(e, i) {
						if (null == o || -1 !== h.indexOf(o, i)) {
							var r = {
								type: "select",
								$fromToolbox: !0,
								id: y + t + i
							};
							r[a] = i, n.push(r)
						}
					})
				}
			}
			function i(e, i) {
				var n = t[e];
				h.isArray(n) || (n = n ? [n] : []), m(n, i)
			}
			if (t) {
				var n = t.dataZoom || (t.dataZoom = []);
				h.isArray(n) || (n = [n]);
				var a = t.toolbox;
				if (a && (h.isArray(a) && (a = a[0]), a && a.feature)) {
					var o = a.feature.dataZoom;
					e("xAxis", o), e("yAxis", o)
				}
			}
		}), t.exports = n
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			this.model = t
		}
		var a = i(1);
		n.defaultOption = {
			show: !0,
			type: [],
			icon: {
				line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
				bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
				stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
				tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
			},
			title: {
				line: "切换为折线图",
				bar: "切换为柱状图",
				stack: "切换为堆叠",
				tiled: "切换为平铺"
			},
			option: {},
			seriesIndex: {}
		};
		var o = n.prototype;
		o.getIcons = function() {
			var t = this.model,
				e = t.get("icon"),
				i = {};
			return a.each(t.get("type"), function(t) {
				e[t] && (i[t] = e[t])
			}), i
		};
		var r = {
			line: function(t, e, i, n) {
				return "bar" === t ? a.merge({
					id: e,
					type: "line",
					data: i.get("data"),
					stack: i.get("stack"),
					markPoint: i.get("markPoint"),
					markLine: i.get("markLine")
				}, n.get("option.line") || {}, !0) : void 0
			},
			bar: function(t, e, i, n) {
				return "line" === t ? a.merge({
					id: e,
					type: "bar",
					data: i.get("data"),
					stack: i.get("stack"),
					markPoint: i.get("markPoint"),
					markLine: i.get("markLine")
				}, n.get("option.bar") || {}, !0) : void 0
			},
			stack: function(t, e, i, n) {
				return "line" === t || "bar" === t ? a.merge({
					id: e,
					stack: "__ec_magicType_stack__"
				}, n.get("option.stack") || {}, !0) : void 0
			},
			tiled: function(t, e, i, n) {
				return "line" === t || "bar" === t ? a.merge({
					id: e,
					stack: ""
				}, n.get("option.tiled") || {}, !0) : void 0
			}
		},
			s = [
				["line", "bar"],
				["stack", "tiled"]
			];
		o.onclick = function(t, e, i) {
			var n = this.model,
				o = n.get("seriesIndex." + i);
			if (r[i]) {
				var l = {
					series: []
				},
					h = function(t) {
						var e = t.subType,
							o = t.id,
							s = r[i](e, o, t, n);
						s && (a.defaults(s, t.option), l.series.push(s));
						var h = t.coordinateSystem;
						if (h && "cartesian2d" === h.type && ("line" === i || "bar" === i)) {
							var u = h.getAxesByScale("ordinal")[0];
							if (u) {
								var c = u.dim,
									d = t.get(c + "AxisIndex"),
									f = c + "Axis";
								l[f] = l[f] || [];
								for (var p = 0; d >= p; p++) l[f][d] = l[f][d] || {};
								l[f][d].boundaryGap = "bar" === i
							}
						}
					};
				a.each(s, function(t) {
					a.indexOf(t, i) >= 0 && a.each(t, function(t) {
						n.setIconStatus(t, "normal")
					})
				}), n.setIconStatus(i, "emphasis"), t.eachComponent({
					mainType: "series",
					query: null == o ? null : {
						seriesIndex: o
					}
				}, h), e.dispatchAction({
					type: "changeMagicType",
					currentType: i,
					newOption: l
				})
			}
		};
		var l = i(2);
		l.registerAction({
			type: "changeMagicType",
			event: "magicTypeChanged",
			update: "prepareAndUpdate"
		}, function(t, e) {
			e.mergeOption(t.newOption)
		}), i(29).register("magicType", n), t.exports = n
	}, function(t, e, i) {
		"use strict";

		function n(t) {
			this.model = t
		}
		var a = i(100);
		n.defaultOption = {
			show: !0,
			icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
			title: "还原"
		};
		var o = n.prototype;
		o.onclick = function(t, e, i) {
			a.clear(t), e.dispatchAction({
				type: "restore",
				from: this.uid
			})
		}, i(29).register("restore", n), i(2).registerAction({
			type: "restore",
			event: "restore",
			update: "prepareAndUpdate"
		}, function(t, e) {
			e.resetOption("recreate")
		}), t.exports = n
	}, function(t, e, i) {
		function n(t) {
			this.model = t
		}
		var a = i(15);
		n.defaultOption = {
			show: !0,
			icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
			title: "保存为图片",
			type: "png",
			name: "",
			excludeComponents: ["toolbox"],
			pixelRatio: 1,
			lang: ["右键另存为图片"]
		}, n.prototype.unusable = !a.canvasSupported;
		var o = n.prototype;
		o.onclick = function(t, e) {
			var i = this.model,
				n = i.get("name") || t.get("title.0.text") || "echarts",
				a = document.createElement("a"),
				o = i.get("type", !0) || "png";
			a.download = n + "." + o, a.target = "_blank";
			var r = e.getConnectedDataURL({
				type: o,
				backgroundColor: i.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
				excludeComponents: i.get("excludeComponents"),
				pixelRatio: i.get("pixelRatio")
			});
			if (a.href = r, "function" == typeof MouseEvent) {
				var s = new MouseEvent("click", {
					view: window,
					bubbles: !0,
					cancelable: !1
				});
				a.dispatchEvent(s)
			} else {
				var l = i.get("lang"),
					h = '<body style="margin:0;"><img src="' + r + '" style="max-width:100%;" title="' + (l && l[0] || "") + '" /></body>',
					u = window.open();
				u.document.write(h)
			}
		}, i(29).register("saveAsImage", n), t.exports = n
	}, function(t, e, i) {
		i(198), i(199), i(2).registerAction({
			type: "showTip",
			event: "showTip",
			update: "none"
		}, function() {}), i(2).registerAction({
			type: "hideTip",
			event: "hideTip",
			update: "none"
		}, function() {})
	}, function(t, e, i) {
		function n(t) {
			var e = "cubic-bezier(0.23, 1, 0.32, 1)",
				i = "left " + t + "s " + e + ",top " + t + "s " + e;
			return l.map(p, function(t) {
				return t + "transition:" + i
			}).join(";")
		}
		function a(t) {
			var e = [],
				i = t.get("fontSize"),
				n = t.getTextColor();
			return n && e.push("color:" + n), e.push("font:" + t.getFont()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), d(["decoration", "align"], function(i) {
				var n = t.get(i);
				n && e.push("text-" + i + ":" + n)
			}), e.join(";")
		}
		function o(t) {
			t = t;
			var e = [],
				i = t.get("transitionDuration"),
				o = t.get("backgroundColor"),
				r = t.getModel("textStyle"),
				s = t.get("padding");
			return i && e.push(n(i)), o && (e.push("background-Color:" + h.toHex(o)), e.push("filter:alpha(opacity=70)"), e.push("background-Color:" + o)), d(["width", "color", "radius"], function(i) {
				var n = "border-" + i,
					a = f(n),
					o = t.get(a);
				null != o && e.push(n + ":" + o + ("color" === i ? "" : "px"))
			}), e.push(a(r)), null != s && e.push("padding:" + c.normalizeCssArray(s).join("px ") + "px"), e.join(";") + ";"
		}
		function r(t, e) {
			var i = document.createElement("div"),
				n = e.getZr();
			this.el = i, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;
			var a = this;
			i.onmouseenter = function() {
				a.enterable && (clearTimeout(a._hideTimeout), a._show = !0), a._inContent = !0
			}, i.onmousemove = function(e) {
				if (!a.enterable) {
					var i = n.handler;
					u.normalizeEvent(t, e), i.dispatch("mousemove", e)
				}
			}, i.onmouseleave = function() {
				a.enterable && a._show && a.hideLater(a._hideDelay), a._inContent = !1
			}, s(i, t)
		}
		function s(t, e) {
			function i(t) {
				n(t.target) && t.preventDefault()
			}
			function n(i) {
				for (; i && i !== e;) {
					if (i === t) return !0;
					i = i.parentNode
				}
			}
			u.addEventListener(e, "touchstart", i), u.addEventListener(e, "touchmove", i), u.addEventListener(e, "touchend", i)
		}
		var l = i(1),
			h = i(22),
			u = i(33),
			c = i(9),
			d = l.each,
			f = c.toCamelCase,
			p = ["", "-webkit-", "-moz-", "-o-"],
			g = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:0;";
		r.prototype = {
			constructor: r,
			enterable: !0,
			update: function() {
				var t = this._container,
					e = t.currentStyle || document.defaultView.getComputedStyle(t),
					i = t.style;
				"absolute" !== i.position && "absolute" !== e.position && (i.position = "relative")
			},
			show: function(t) {
				clearTimeout(this._hideTimeout), this.el.style.cssText = g + o(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), this._show = !0
			},
			setContent: function(t) {
				var e = this.el;
				e.innerHTML = t, e.style.display = t ? "block" : "none"
			},
			moveTo: function(t, e) {
				var i = this.el.style;
				i.left = t + "px", i.top = e + "px", this._x = t, this._y = e
			},
			hide: function() {
				this.el.style.display = "none", this._show = !1
			},
			hideLater: function(t) {
				!this._show || this._inContent && this.enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(l.bind(this.hide, this), t)) : this.hide())
			},
			isShow: function() {
				return this._show
			}
		}, t.exports = r
	}, function(t, e, i) {
		i(2).extendComponentModel({
			type: "tooltip",
			defaultOption: {
				zlevel: 0,
				z: 8,
				show: !0,
				showContent: !0,
				trigger: "item",
				triggerOn: "mousemove",
				alwaysShowContent: !1,
				showDelay: 0,
				hideDelay: 100,
				transitionDuration: .4,
				enterable: !1,
				backgroundColor: "rgba(50,50,50,0.7)",
				borderColor: "#333",
				borderRadius: 4,
				borderWidth: 0,
				padding: 5,
				extraCssText: "",
				axisPointer: {
					type: "line",
					axis: "auto",
					animation: !0,
					animationDurationUpdate: 200,
					animationEasingUpdate: "exponentialOut",
					lineStyle: {
						color: "#555",
						width: 1,
						type: "solid"
					},
					crossStyle: {
						color: "#555",
						width: 1,
						type: "dashed",
						textStyle: {}
					},
					shadowStyle: {
						color: "rgba(150,150,150,0.3)"
					}
				},
				textStyle: {
					color: "#fff",
					fontSize: 14
				}
			}
		})
	}, function(t, e, i) {
		function n(t, e) {
			if (!t || !e) return !1;
			var i = g.round;
			return i(t[0]) === i(e[0]) && i(t[1]) === i(e[1])
		}
		function a(t, e, i, n) {
			return {
				x1: t,
				y1: e,
				x2: i,
				y2: n
			}
		}
		function o(t, e, i, n) {
			return {
				x: t,
				y: e,
				width: i,
				height: n
			}
		}
		function r(t, e, i, n, a, o) {
			return {
				cx: t,
				cy: e,
				r0: i,
				r: n,
				startAngle: a,
				endAngle: o,
				clockwise: !0
			}
		}
		function s(t, e, i, n, a) {
			var o = i.clientWidth,
				r = i.clientHeight,
				s = 20;
			return t + o + s > n ? t -= o + s : t += s, e + r + s > a ? e -= r + s : e += s, [t, e]
		}
		function l(t, e, i) {
			var n = i.clientWidth,
				a = i.clientHeight,
				o = 5,
				r = 0,
				s = 0,
				l = e.width,
				h = e.height;
			switch (t) {
			case "inside":
				r = e.x + l / 2 - n / 2, s = e.y + h / 2 - a / 2;
				break;
			case "top":
				r = e.x + l / 2 - n / 2, s = e.y - a - o;
				break;
			case "bottom":
				r = e.x + l / 2 - n / 2, s = e.y + h + o;
				break;
			case "left":
				r = e.x - n - o, s = e.y + h / 2 - a / 2;
				break;
			case "right":
				r = e.x + l + o, s = e.y + h / 2 - a / 2
			}
			return [r, s]
		}
		function h(t, e, i, n, a, o, r) {
			var h = r.getWidth(),
				u = r.getHeight(),
				c = o && o.getBoundingRect().clone();
			if (o && c.applyTransform(o.transform), "function" == typeof t && (t = t([e, i], a, c)), f.isArray(t)) e = m(t[0], h), i = m(t[1], u);
			else if ("string" == typeof t && o) {
				var d = l(t, c, n.el);
				e = d[0], i = d[1]
			} else {
				var d = s(e, i, n.el, h, u);
				e = d[0], i = d[1]
			}
			n.moveTo(e, i)
		}
		function u(t) {
			var e = t.coordinateSystem,
				i = t.get("tooltip.trigger", !0);
			return !(!e || "cartesian2d" !== e.type && "polar" !== e.type && "single" !== e.type || "item" === i)
		}
		var c = i(197),
			d = i(3),
			f = i(1),
			p = i(9),
			g = i(4),
			m = g.parsePercent,
			v = i(15);
		i(2).extendComponentView({
			type: "tooltip",
			_axisPointers: {},
			init: function(t, e) {
				if (!v.node) {
					var i = new c(e.getDom(), e);
					this._tooltipContent = i, e.on("showTip", this._manuallyShowTip, this), e.on("hideTip", this._manuallyHideTip, this)
				}
			},
			render: function(t, e, i) {
				if (!v.node) {
					this.group.removeAll(), this._axisPointers = {}, this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastHover = {};
					var n = this._tooltipContent;
					n.update(), n.enterable = t.get("enterable"), this._alwaysShowContent = t.get("alwaysShowContent"), this._seriesGroupByAxis = this._prepareAxisTriggerData(t, e);
					var a = this._crossText;
					if (a && this.group.add(a), null != this._lastX && null != this._lastY) {
						var o = this;
						clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
							o._manuallyShowTip({
								x: o._lastX,
								y: o._lastY
							})
						})
					}
					var r = this._api.getZr();
					r.off("click", this._tryShow), r.off("mousemove", this._mousemove), r.off("mouseout", this._hide), r.off("globalout", this._hide), "click" === t.get("triggerOn") ? r.on("click", this._tryShow, this) : (r.on("mousemove", this._mousemove, this), r.on("mouseout", this._hide, this), r.on("globalout", this._hide, this))
				}
			},
			_mousemove: function(t) {
				var e = this._tooltipModel.get("showDelay"),
					i = this;
				clearTimeout(this._showTimeout), e > 0 ? this._showTimeout = setTimeout(function() {
					i._tryShow(t)
				}, e) : this._tryShow(t)
			},
			_manuallyShowTip: function(t) {
				if (t.from !== this.uid) {
					var e = this._ecModel,
						i = t.seriesIndex,
						n = t.dataIndex,
						a = e.getSeriesByIndex(i),
						o = this._api;
					if (null == t.x || null == t.y) {
						if (a || e.eachSeries(function(t) {
							u(t) && !a && (a = t)
						}), a) {
							var r = a.getData();
							null == n && (n = r.indexOfName(t.name));
							var s, l, h = r.getItemGraphicEl(n),
								c = a.coordinateSystem;
							if (c && c.dataToPoint) {
								var d = c.dataToPoint(r.getValues(f.map(c.dimensions, function(t) {
									return a.coordDimToDataDim(t)[0]
								}), n, !0));
								s = d && d[0], l = d && d[1]
							} else if (h) {
								var p = h.getBoundingRect().clone();
								p.applyTransform(h.transform), s = p.x + p.width / 2, l = p.y + p.height / 2
							}
							null != s && null != l && this._tryShow({
								offsetX: s,
								offsetY: l,
								target: h,
								event: {}
							})
						}
					} else {
						var h = o.getZr().handler.findHover(t.x, t.y);
						this._tryShow({
							offsetX: t.x,
							offsetY: t.y,
							target: h,
							event: {}
						})
					}
				}
			},
			_manuallyHideTip: function(t) {
				t.from !== this.uid && this._hide()
			},
			_prepareAxisTriggerData: function(t, e) {
				var i = {};
				return e.eachSeries(function(t) {
					if (u(t)) {
						var e, n, a = t.coordinateSystem;
						"cartesian2d" === a.type ? (e = a.getBaseAxis(), n = e.dim + e.index) : "single" === a.type ? (e = a.getAxis(), n = e.dim + e.type) : (e = a.getBaseAxis(), n = e.dim + a.name), i[n] = i[n] || {
							coordSys: [],
							series: []
						}, i[n].coordSys.push(a), i[n].series.push(t)
					}
				}, this), i
			},
			_tryShow: function(t) {
				var e = t.target,
					i = this._tooltipModel,
					n = i.get("trigger"),
					a = this._ecModel,
					o = this._api;
				if (i) if (this._lastX = t.offsetX, this._lastY = t.offsetY, e && null != e.dataIndex) {
					var r = e.dataModel || a.getSeriesByIndex(e.seriesIndex),
						s = e.dataIndex,
						l = r.getData().getItemModel(s);
					"axis" === (l.get("tooltip.trigger") || n) ? this._showAxisTooltip(i, a, t) : (this._ticket = "", this._hideAxisPointer(), this._resetLastHover(), this._showItemTooltipContent(r, s, t)), o.dispatchAction({
						type: "showTip",
						from: this.uid,
						dataIndex: e.dataIndex,
						seriesIndex: e.seriesIndex
					})
				} else "item" === n ? this._hide() : this._showAxisTooltip(i, a, t), "cross" === i.get("axisPointer.type") && o.dispatchAction({
					type: "showTip",
					from: this.uid,
					x: t.offsetX,
					y: t.offsetY
				})
			},
			_showAxisTooltip: function(t, e, i) {
				var a = t.getModel("axisPointer"),
					o = a.get("type");
				if ("cross" === o) {
					var r = i.target;
					if (r && null != r.dataIndex) {
						var s = e.getSeriesByIndex(r.seriesIndex),
							l = r.dataIndex;
						this._showItemTooltipContent(s, l, i)
					}
				}
				this._showAxisPointer();
				var h = !0;
				f.each(this._seriesGroupByAxis, function(t) {
					var e = t.coordSys,
						r = e[0],
						s = [i.offsetX, i.offsetY];
					if (!r.containPoint(s)) return void this._hideAxisPointer(r.name);
					h = !1;
					var l = r.dimensions,
						u = r.pointToData(s, !0);
					s = r.dataToPoint(u);
					var c = r.getBaseAxis(),
						d = a.get("axis");
					"auto" === d && (d = c.dim);
					var p = !1,
						g = this._lastHover;
					if ("cross" === o) n(g.data, u) && (p = !0), g.data = u;
					else {
						var m = f.indexOf(l, d);
						g.data === u[m] && (p = !0), g.data = u[m]
					}
					"cartesian2d" !== r.type || p ? "polar" !== r.type || p ? "single" !== r.type || p || this._showSinglePointer(a, r, d, s) : this._showPolarPointer(a, r, d, s) : this._showCartesianPointer(a, r, d, s), "cross" !== o && this._dispatchAndShowSeriesTooltipContent(r, t.series, s, u, p)
				}, this), h && this._hide()
			},
			_showCartesianPointer: function(t, e, i, n) {
				function r(i, n, o) {
					var r = "x" === i ? a(n[0], o[0], n[0], o[1]) : a(o[0], n[1], o[1], n[1]),
						s = l._getPointerElement(e, t, i, r);
					u ? d.updateProps(s, {
						shape: r
					}, t) : s.attr({
						shape: r
					})
				}
				function s(i, n, a) {
					var r = e.getAxis(i),
						s = r.getBandWidth(),
						h = a[1] - a[0],
						c = "x" === i ? o(n[0] - s / 2, a[0], s, h) : o(a[0], n[1] - s / 2, h, s),
						f = l._getPointerElement(e, t, i, c);
					u ? d.updateProps(f, {
						shape: c
					}, t) : f.attr({
						shape: c
					})
				}
				var l = this,
					h = t.get("type"),
					u = "cross" !== h;
				if ("cross" === h) r("x", n, e.getAxis("y").getGlobalExtent()), r("y", n, e.getAxis("x").getGlobalExtent()), this._updateCrossText(e, n, t);
				else {
					var c = e.getAxis("x" === i ? "y" : "x"),
						f = c.getGlobalExtent();
					"cartesian2d" === e.type && ("line" === h ? r : s)(i, n, f)
				}
			},
			_showSinglePointer: function(t, e, i, n) {
				function o(i, n, o) {
					var s = e.getAxis(),
						h = s.orient,
						u = "horizontal" === h ? a(n[0], o[0], n[0], o[1]) : a(o[0], n[1], o[1], n[1]),
						c = r._getPointerElement(e, t, i, u);
					l ? d.updateProps(c, {
						shape: u
					}, t) : c.attr({
						shape: u
					})
				}
				var r = this,
					s = t.get("type"),
					l = "cross" !== s,
					h = e.getRect(),
					u = [h.y, h.y + h.height];
				o(i, n, u)
			},
			_showPolarPointer: function(t, e, i, n) {
				function o(i, n, o) {
					var r, s = e.pointToCoord(n);
					if ("angle" === i) {
						var h = e.coordToPoint([o[0], s[1]]),
							u = e.coordToPoint([o[1], s[1]]);
						r = a(h[0], h[1], u[0], u[1])
					} else r = {
						cx: e.cx,
						cy: e.cy,
						r: s[0]
					};
					var c = l._getPointerElement(e, t, i, r);
					f ? d.updateProps(c, {
						shape: r
					}, t) : c.attr({
						shape: r
					})
				}
				function s(i, n, a) {
					var o, s = e.getAxis(i),
						h = s.getBandWidth(),
						u = e.pointToCoord(n),
						c = Math.PI / 180;
					o = "angle" === i ? r(e.cx, e.cy, a[0], a[1], (-u[1] - h / 2) * c, (-u[1] + h / 2) * c) : r(e.cx, e.cy, u[0] - h / 2, u[0] + h / 2, 0, 2 * Math.PI);
					var p = l._getPointerElement(e, t, i, o);
					f ? d.updateProps(p, {
						shape: o
					}, t) : p.attr({
						shape: o
					})
				}
				var l = this,
					h = t.get("type"),
					u = e.getAngleAxis(),
					c = e.getRadiusAxis(),
					f = "cross" !== h;
				if ("cross" === h) o("angle", n, c.getExtent()), o("radius", n, u.getExtent()), this._updateCrossText(e, n, t);
				else {
					var p = e.getAxis("radius" === i ? "angle" : "radius"),
						g = p.getExtent();
					("line" === h ? o : s)(i, n, g)
				}
			},
			_updateCrossText: function(t, e, i) {
				var n = i.getModel("crossStyle"),
					a = n.getModel("textStyle"),
					o = this._tooltipModel,
					r = this._crossText;
				r || (r = this._crossText = new d.Text({
					style: {
						textAlign: "left",
						textVerticalAlign: "bottom"
					}
				}), this.group.add(r));
				var s = t.pointToData(e),
					l = t.dimensions;
				s = f.map(s, function(e, i) {
					var n = t.getAxis(l[i]);
					return e = "category" === n.type || "time" === n.type ? n.scale.getLabel(e) : p.addCommas(e.toFixed(n.getPixelPrecision()))
				}), r.setStyle({
					fill: a.getTextColor() || n.get("color"),
					textFont: a.getFont(),
					text: s.join(", "),
					x: e[0] + 5,
					y: e[1] - 5
				}), r.z = o.get("z"), r.zlevel = o.get("zlevel")
			},
			_getPointerElement: function(t, e, i, n) {
				var a = this._tooltipModel,
					o = a.get("z"),
					r = a.get("zlevel"),
					s = this._axisPointers,
					l = t.name;
				if (s[l] = s[l] || {}, s[l][i]) return s[l][i];
				var h = e.get("type"),
					u = e.getModel(h + "Style"),
					c = "shadow" === h,
					f = u[c ? "getAreaStyle" : "getLineStyle"](),
					p = "polar" === t.type ? c ? "Sector" : "radius" === i ? "Circle" : "Line" : c ? "Rect" : "Line";
				c ? f.stroke = null : f.fill = null;
				var g = s[l][i] = new d[p]({
					style: f,
					z: o,
					zlevel: r,
					silent: !0,
					shape: n
				});
				return this.group.add(g), g
			},
			_dispatchAndShowSeriesTooltipContent: function(t, e, i, n, a) {
				var o = this._tooltipModel,
					r = this._tooltipContent,
					s = t.getBaseAxis(),
					l = f.map(e, function(t) {
						return {
							seriesIndex: t.seriesIndex,
							dataIndex: t.getAxisTooltipDataIndex ? t.getAxisTooltipDataIndex(t.coordDimToDataDim(s.dim), n, s) : t.getData().indexOfNearest(t.coordDimToDataDim(s.dim)[0], n["x" === s.dim || "radius" === s.dim ? 0 : 1])
						}
					}),
					u = this._lastHover,
					c = this._api;
				if (u.payloadBatch && !a && c.dispatchAction({
					type: "downplay",
					batch: u.payloadBatch
				}), a || (c.dispatchAction({
					type: "highlight",
					batch: l
				}), u.payloadBatch = l), c.dispatchAction({
					type: "showTip",
					dataIndex: l[0].dataIndex,
					seriesIndex: l[0].seriesIndex,
					from: this.uid
				}), s && o.get("showContent")) {
					var d, g = o.get("formatter"),
						m = o.get("position"),
						v = f.map(e, function(t, e) {
							return t.getDataParams(l[e].dataIndex)
						});
					r.show(o);
					var y = l[0].dataIndex;
					if (!a) {
						if (this._ticket = "", g) {
							if ("string" == typeof g) d = p.formatTpl(g, v);
							else if ("function" == typeof g) {
								var x = this,
									_ = "axis_" + t.name + "_" + y,
									w = function(t, e) {
										t === x._ticket && (r.setContent(e), h(m, i[0], i[1], r, v, null, c))
									};
								x._ticket = _, d = g(v, _, w)
							}
						} else {
							var b = e[0].getData().getName(y);
							d = (b ? b + "<br />" : "") + f.map(e, function(t, e) {
								return t.formatTooltip(l[e].dataIndex, !0)
							}).join("<br />")
						}
						r.setContent(d)
					}
					h(m, i[0], i[1], r, v, null, c)
				}
			},
			_showItemTooltipContent: function(t, e, i) {
				var n = this._api,
					a = t.getData(),
					o = a.getItemModel(e),
					r = this._tooltipModel,
					s = this._tooltipContent,
					l = o.getModel("tooltip");
				if (l.parentModel ? l.parentModel.parentModel = r : l.parentModel = this._tooltipModel, l.get("showContent")) {
					var u, c = l.get("formatter"),
						d = l.get("position"),
						f = t.getDataParams(e);
					if (c) {
						if ("string" == typeof c) u = p.formatTpl(c, f);
						else if ("function" == typeof c) {
							var g = this,
								m = "item_" + t.name + "_" + e,
								v = function(t, e) {
									t === g._ticket && (s.setContent(e), h(d, i.offsetX, i.offsetY, s, f, i.target, n))
								};
							g._ticket = m, u = c(f, m, v)
						}
					} else u = t.formatTooltip(e);
					s.show(l), s.setContent(u), h(d, i.offsetX, i.offsetY, s, f, i.target, n)
				}
			},
			_showAxisPointer: function(t) {
				if (t) {
					var e = this._axisPointers[t];
					e && f.each(e, function(t) {
						t.show()
					})
				} else this.group.eachChild(function(t) {
					t.show()
				}), this.group.show()
			},
			_resetLastHover: function() {
				var t = this._lastHover;
				t.payloadBatch && this._api.dispatchAction({
					type: "downplay",
					batch: t.payloadBatch
				}), this._lastHover = {}
			},
			_hideAxisPointer: function(t) {
				if (t) {
					var e = this._axisPointers[t];
					e && f.each(e, function(t) {
						t.hide()
					})
				} else this.group.hide()
			},
			_hide: function() {
				clearTimeout(this._showTimeout), this._hideAxisPointer(), this._resetLastHover(), this._alwaysShowContent || this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay")), this._api.dispatchAction({
					type: "hideTip",
					from: this.uid
				}), this._lastX = this._lastY = null
			},
			dispose: function(t, e) {
				if (!v.node) {
					var i = e.getZr();
					this._tooltipContent.hide(), i.off("click", this._tryShow), i.off("mousemove", this._mousemove), i.off("mouseout", this._hide), i.off("globalout", this._hide), e.off("showTip", this._manuallyShowTip), e.off("hideTip", this._manuallyHideTip)
				}
			}
		})
	}, function(t, e, i) {
		function n(t, e) {
			var i = t.get("center"),
				n = t.get("radius"),
				a = e.getWidth(),
				o = e.getHeight(),
				r = s.parsePercent;
			this.cx = r(i[0], a), this.cy = r(i[1], o);
			var l = this.getRadiusAxis(),
				h = Math.min(a, o) / 2;
			l.setExtent(0, r(n, h))
		}
		function a(t, e) {
			var i = this,
				n = i.getAngleAxis(),
				a = i.getRadiusAxis();
			if (n.scale.setExtent(1 / 0, -(1 / 0)), a.scale.setExtent(1 / 0, -(1 / 0)), t.eachSeries(function(t) {
				if (t.coordinateSystem === i) {
					var e = t.getData();
					a.scale.unionExtent(e.getDataExtent("radius", "category" !== a.type)), n.scale.unionExtent(e.getDataExtent("angle", "category" !== n.type))
				}
			}), h(n, n.model), h(a, a.model), "category" === n.type && !n.onBand) {
				var o = n.getExtent(),
					r = 360 / n.scale.count();
				n.inverse ? o[1] += r : o[1] -= r, n.setExtent(o[0], o[1])
			}
		}
		function o(t, e) {
			if (t.type = e.get("type"), t.scale = l.createScaleByModel(e), t.onBand = e.get("boundaryGap") && "category" === t.type, "angleAxis" === e.mainType) {
				var i = e.get("startAngle");
				t.inverse = e.get("inverse") ^ e.get("clockwise"), t.setExtent(i, i + (t.inverse ? -360 : 360))
			}
			e.axis = t, t.model = e
		}
		var r = i(337),
			s = i(4),
			l = i(23),
			h = l.niceScaleExtent;
		i(338);
		var u = {
			dimensions: r.prototype.dimensions,
			create: function(t, e) {
				var i = [];
				return t.eachComponent("polar", function(t, s) {
					var l = new r(s);
					l.resize = n, l.update = a;
					var h = l.getRadiusAxis(),
						u = l.getAngleAxis(),
						c = t.findAxisModel("radiusAxis"),
						d = t.findAxisModel("angleAxis");
					o(h, c), o(u, d), l.resize(t, e), i.push(l), t.coordinateSystem = l
				}), t.eachSeries(function(t) {
					"polar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("polarIndex")])
				}), i
			}
		};
		i(28).register("polar", u)
	}, function(t, e) {
		function i() {
			h = !1, r.length ? l = r.concat(l) : u = -1, l.length && n()
		}
		function n() {
			if (!h) {
				var t = setTimeout(i);
				h = !0;
				for (var e = l.length; e;) {
					for (r = l, l = []; ++u < e;) r && r[u].run();
					u = -1, e = l.length
				}
				r = null, h = !1, clearTimeout(t)
			}
		}
		function a(t, e) {
			this.fun = t, this.array = e
		}
		function o() {}
		var r, s = t.exports = {},
			l = [],
			h = !1,
			u = -1;
		s.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
			l.push(new a(t, e)), 1 !== l.length || h || setTimeout(n, 0)
		}, a.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = o, s.addListener = o, s.once = o, s.off = o, s.removeListener = o, s.removeAllListeners = o, s.emit = o, s.binding = function(t) {
			throw new Error("process.binding is not supported")
		}, s.cwd = function() {
			return "/"
		}, s.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		}, s.umask = function() {
			return 0
		}
	}, function(t, e, i) {
		function n(t) {
			return parseInt(t, 10)
		}
		function a(t, e) {
			s.initVML(), this.root = t, this.storage = e;
			var i = document.createElement("div"),
				n = document.createElement("div");
			i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", n.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(i), this._vmlRoot = n, this._vmlViewport = i, this.resize();
			var a = e.delFromMap,
				o = e.addToMap;
			e.delFromMap = function(t) {
				var i = e.get(t);
				a.call(e, t), i && i.onRemove && i.onRemove(n)
			}, e.addToMap = function(t) {
				t.onAdd && t.onAdd(n), o.call(e, t)
			}, this._firstPaint = !0
		}
		function o(t) {
			return function() {
				r('In IE8.0 VML mode painter not support method "' + t + '"')
			}
		}
		var r = i(45),
			s = i(158);
		a.prototype = {
			constructor: a,
			getViewportRoot: function() {
				return this._vmlViewport
			},
			refresh: function() {
				var t = this.storage.getDisplayList(!0, !0);
				this._paintList(t)
			},
			_paintList: function(t) {
				for (var e = this._vmlRoot, i = 0; i < t.length; i++) {
					var n = t[i];
					n.invisible || n.ignore ? (n.__alreadyNotVisible || n.onRemove(e), n.__alreadyNotVisible = !0) : (n.__alreadyNotVisible && n.onAdd(e), n.__alreadyNotVisible = !1, n.__dirty && (n.beforeBrush && n.beforeBrush(), (n.brushVML || n.brush).call(n, e), n.afterBrush && n.afterBrush())), n.__dirty = !1
				}
				this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
			},
			resize: function() {
				var t = this._getWidth(),
					e = this._getHeight();
				if (this._width != t && this._height != e) {
					this._width = t, this._height = e;
					var i = this._vmlViewport.style;
					i.width = t + "px", i.height = e + "px"
				}
			},
			dispose: function() {
				this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null
			},
			getWidth: function() {
				return this._width
			},
			getHeight: function() {
				return this._height
			},
			_getWidth: function() {
				var t = this.root,
					e = t.currentStyle;
				return (t.clientWidth || n(e.width)) - n(e.paddingLeft) - n(e.paddingRight) | 0
			},
			_getHeight: function() {
				var t = this.root,
					e = t.currentStyle;
				return (t.clientHeight || n(e.height)) - n(e.paddingTop) - n(e.paddingBottom) | 0
			}
		};
		for (var l = ["getLayer", "insertLayer", "eachLayer", "eachBuildinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], h = 0; h < l.length; h++) {
			var u = l[h];
			a.prototype[u] = o(u)
		}
		t.exports = a
	}, function(t, e, i) {
		if (!i(15).canvasSupported) {
			var n = i(5),
				a = i(8),
				o = i(27).CMD,
				r = i(22),
				s = i(17),
				l = i(66),
				h = i(35),
				u = i(46),
				c = i(65),
				d = i(6),
				f = i(16),
				p = i(158),
				g = Math.round,
				m = Math.sqrt,
				v = Math.abs,
				y = Math.cos,
				x = Math.sin,
				_ = Math.max,
				w = n.applyTransform,
				b = ",",
				M = "progid:DXImageTransform.Microsoft",
				S = 21600,
				A = S / 2,
				I = 1e5,
				T = 1e3,
				C = function(t) {
					t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = S + "," + S, t.coordorigin = "0,0"
				},
				L = function(t) {
					return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
				},
				D = function(t, e, i) {
					return "rgb(" + [t, e, i].join(",") + ")"
				},
				P = function(t, e) {
					e && t && e.parentNode !== t && t.appendChild(e)
				},
				k = function(t, e) {
					e && t && e.parentNode === t && t.removeChild(e)
				},
				z = function(t, e, i) {
					return (parseFloat(t) || 0) * I + (parseFloat(e) || 0) * T + i
				},
				R = function(t, e) {
					return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
				},
				O = function(t, e, i) {
					var n = r.parse(e);
					i = +i, isNaN(i) && (i = 1), n && (t.color = D(n[0], n[1], n[2]), t.opacity = i * n[3])
				},
				E = function(t) {
					var e = r.parse(t);
					return [D(e[0], e[1], e[2]), e[3]]
				},
				V = function(t, e, i) {
					var n = e.fill;
					if (null != n) if (n instanceof f) {
						var a, o = 0,
							r = [0, 0],
							s = 0,
							l = 1,
							h = i.getBoundingRect(),
							u = h.width,
							c = h.height;
						if ("linear" === n.type) {
							a = "gradient";
							var d = i.transform,
								p = [n.x * u, n.y * c],
								g = [n.x2 * u, n.y2 * c];
							d && (w(p, p, d), w(g, g, d));
							var m = g[0] - p[0],
								v = g[1] - p[1];
							o = 180 * Math.atan2(m, v) / Math.PI, 0 > o && (o += 360), 1e-6 > o && (o = 0)
						} else {
							a = "gradientradial";
							var p = [n.x * u, n.y * c],
								d = i.transform,
								y = i.scale,
								x = u,
								b = c;
							r = [(p[0] - h.x) / x, (p[1] - h.y) / b], d && w(p, p, d), x /= y[0] * S, b /= y[1] * S;
							var M = _(x, b);
							s = 0 / M, l = 2 * n.r / M - s
						}
						var A = n.colorStops.slice();
						A.sort(function(t, e) {
							return t.offset - e.offset
						});
						for (var I = A.length, T = [], C = [], L = 0; I > L; L++) {
							var D = A[L],
								P = E(D.color);
							C.push(D.offset * l + s + " " + P[0]), 0 !== L && L !== I - 1 || T.push(P)
						}
						if (I >= 2) {
							var k = T[0][0],
								z = T[1][0],
								R = T[0][1] * e.opacity,
								V = T[1][1] * e.opacity;
							t.type = a, t.method = "none", t.focus = "100%", t.angle = o, t.color = k, t.color2 = z, t.colors = C.join(","), t.opacity = V, t.opacity2 = R
						}
						"radial" === a && (t.focusposition = r.join(","))
					} else O(t, n, e.opacity)
				},
				N = function(t, e) {
					null != e.lineJoin && (t.joinstyle = e.lineJoin), null != e.miterLimit && (t.miterlimit = e.miterLimit * S), null != e.lineCap && (t.endcap = e.lineCap), null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e.stroke || e.stroke instanceof f || O(t, e.stroke, e.opacity)
				},
				B = function(t, e, i, n) {
					var a = "fill" == e,
						o = t.getElementsByTagName(e)[0];
					null != i[e] && "none" !== i[e] && (a || !a && i.lineWidth) ? (t[a ? "filled" : "stroked"] = "true", i[e] instanceof f && k(t, o), o || (o = p.createNode(e)), a ? V(o, i, n) : N(o, i), P(t, o)) : (t[a ? "filled" : "stroked"] = "false", k(t, o))
				},
				G = [
					[],
					[],
					[]
				],
				F = function(t, e) {
					var i, n, a, r, s, l, h = o.M,
						u = o.C,
						c = o.L,
						d = o.A,
						f = o.Q,
						p = [];
					for (r = 0; r < t.length;) {
						switch (a = t[r++], n = "", i = 0, a) {
						case h:
							n = " m ", i = 1, s = t[r++], l = t[r++], G[0][0] = s, G[0][1] = l;
							break;
						case c:
							n = " l ", i = 1, s = t[r++], l = t[r++], G[0][0] = s, G[0][1] = l;
							break;
						case f:
						case u:
							n = " c ", i = 3;
							var v, _, M = t[r++],
								I = t[r++],
								T = t[r++],
								C = t[r++];
							a === f ? (v = T, _ = C, T = (T + 2 * M) / 3, C = (C + 2 * I) / 3, M = (s + 2 * M) / 3, I = (l + 2 * I) / 3) : (v = t[r++], _ = t[r++]), G[0][0] = M, G[0][1] = I, G[1][0] = T, G[1][1] = C, G[2][0] = v, G[2][1] = _, s = v, l = _;
							break;
						case d:
							var L = 0,
								D = 0,
								P = 1,
								k = 1,
								z = 0;
							e && (L = e[4], D = e[5], P = m(e[0] * e[0] + e[1] * e[1]), k = m(e[2] * e[2] + e[3] * e[3]), z = Math.atan2(-e[1] / k, e[0] / P));
							var R = t[r++],
								O = t[r++],
								E = t[r++],
								V = t[r++],
								N = t[r++] + z,
								B = t[r++] + N + z;
							r++;
							var F = t[r++],
								W = R + y(N) * E,
								H = O + x(N) * V,
								M = R + y(B) * E,
								I = O + x(B) * V,
								Z = F ? " wa " : " at ";
							Math.abs(W - M) < 1e-10 && F && (W += 270 / S), p.push(Z, g(((R - E) * P + L) * S - A), b, g(((O - V) * k + D) * S - A), b, g(((R + E) * P + L) * S - A), b, g(((O + V) * k + D) * S - A), b, g((W * P + L) * S - A), b, g((H * k + D) * S - A), b, g((M * P + L) * S - A), b, g((I * k + D) * S - A)), s = M, l = I;
							break;
						case o.R:
							var q = G[0],
								j = G[1];
							q[0] = t[r++], q[1] = t[r++], j[0] = q[0] + t[r++], j[1] = q[1] + t[r++], e && (w(q, q, e), w(j, j, e)), q[0] = g(q[0] * S - A), j[0] = g(j[0] * S - A), q[1] = g(q[1] * S - A), j[1] = g(j[1] * S - A), p.push(" m ", q[0], b, q[1], " l ", j[0], b, q[1], " l ", j[0], b, j[1], " l ", q[0], b, j[1]);
							break;
						case o.Z:
							p.push(" x ")
						}
						if (i > 0) {
							p.push(n);
							for (var U = 0; i > U; U++) {
								var X = G[U];
								e && w(X, X, e), p.push(g(X[0] * S - A), b, g(X[1] * S - A), i - 1 > U ? b : "")
							}
						}
					}
					return p.join("")
				};
			d.prototype.brushVML = function(t) {
				var e = this.style,
					i = this._vmlEl;
				i || (i = p.createNode("shape"), C(i), this._vmlEl = i), B(i, "fill", e, this), B(i, "stroke", e, this);
				var n = this.transform,
					a = null != n,
					o = i.getElementsByTagName("stroke")[0];
				if (o) {
					var r = e.lineWidth;
					if (a && !e.strokeNoScale) {
						var s = n[0] * n[3] - n[1] * n[2];
						r *= m(v(s))
					}
					o.weight = r + "px"
				}
				var l = this.path;
				this.__dirtyPath && (l.beginPath(), this.buildPath(l, this.shape), l.toStatic(), this.__dirtyPath = !1), i.path = F(l.data, this.transform), i.style.zIndex = z(this.zlevel, this.z, this.z2), P(t, i), e.text && this.drawRectText(t, this.getBoundingRect())
			}, d.prototype.onRemove = function(t) {
				k(t, this._vmlEl), this.removeRectText(t)
			}, d.prototype.onAdd = function(t) {
				P(t, this._vmlEl), this.appendRectText(t)
			};
			var W = function(t) {
					return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
				};
			u.prototype.brushVML = function(t) {
				var e, i, n = this.style,
					a = n.image;
				if (W(a)) {
					var o = a.src;
					if (o === this._imageSrc) e = this._imageWidth, i = this._imageHeight;
					else {
						var r = a.runtimeStyle,
							s = r.width,
							l = r.height;
						r.width = "auto", r.height = "auto", e = a.width, i = a.height, r.width = s, r.height = l, this._imageSrc = o, this._imageWidth = e, this._imageHeight = i
					}
					a = o
				} else a === this._imageSrc && (e = this._imageWidth, i = this._imageHeight);
				if (a) {
					var h = n.x || 0,
						u = n.y || 0,
						c = n.width,
						d = n.height,
						f = n.sWidth,
						v = n.sHeight,
						y = n.sx || 0,
						x = n.sy || 0,
						S = f && v,
						A = this._vmlEl;
					A || (A = p.doc.createElement("div"), C(A), this._vmlEl = A);
					var I, T = A.style,
						L = !1,
						D = 1,
						k = 1;
					if (this.transform && (I = this.transform, D = m(I[0] * I[0] + I[1] * I[1]), k = m(I[2] * I[2] + I[3] * I[3]), L = I[1] || I[2]), L) {
						var R = [h, u],
							O = [h + c, u],
							E = [h, u + d],
							V = [h + c, u + d];
						w(R, R, I), w(O, O, I), w(E, E, I), w(V, V, I);
						var N = _(R[0], O[0], E[0], V[0]),
							B = _(R[1], O[1], E[1], V[1]),
							G = [];
						G.push("M11=", I[0] / D, b, "M12=", I[2] / k, b, "M21=", I[1] / D, b, "M22=", I[3] / k, b, "Dx=", g(h * D + I[4]), b, "Dy=", g(u * k + I[5])), T.padding = "0 " + g(N) + "px " + g(B) + "px 0", T.filter = M + ".Matrix(" + G.join("") + ", SizingMethod=clip)"
					} else I && (h = h * D + I[4], u = u * k + I[5]), T.filter = "", T.left = g(h) + "px", T.top = g(u) + "px";
					var F = this._imageEl,
						H = this._cropEl;
					F || (F = p.doc.createElement("div"), this._imageEl = F);
					var Z = F.style;
					if (S) {
						if (e && i) Z.width = g(D * e * c / f) + "px", Z.height = g(k * i * d / v) + "px";
						else {
							var q = new Image,
								j = this;
							q.onload = function() {
								q.onload = null, e = q.width, i = q.height, Z.width = g(D * e * c / f) + "px", Z.height = g(k * i * d / v) + "px", j._imageWidth = e, j._imageHeight = i, j._imageSrc = a
							}, q.src = a
						}
						H || (H = p.doc.createElement("div"), H.style.overflow = "hidden", this._cropEl = H);
						var U = H.style;
						U.width = g((c + y * c / f) * D), U.height = g((d + x * d / v) * k), U.filter = M + ".Matrix(Dx=" + -y * c / f * D + ",Dy=" + -x * d / v * k + ")", H.parentNode || A.appendChild(H), F.parentNode != H && H.appendChild(F)
					} else Z.width = g(D * c) + "px", Z.height = g(k * d) + "px", A.appendChild(F), H && H.parentNode && (A.removeChild(H), this._cropEl = null);
					var X = "",
						Y = n.opacity;
					1 > Y && (X += ".Alpha(opacity=" + g(100 * Y) + ") "), X += M + ".AlphaImageLoader(src=" + a + ", SizingMethod=scale)", Z.filter = X, A.style.zIndex = z(this.zlevel, this.z, this.z2), P(t, A), n.text && this.drawRectText(t, this.getBoundingRect())
				}
			}, u.prototype.onRemove = function(t) {
				k(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
			}, u.prototype.onAdd = function(t) {
				P(t, this._vmlEl), this.appendRectText(t)
			};
			var H, Z = "normal",
				q = {},
				j = 0,
				U = 100,
				X = document.createElement("div"),
				Y = function(t) {
					var e = q[t];
					if (!e) {
						j > U && (j = 0, q = {});
						var i, n = X.style;
						try {
							n.font = t, i = n.fontFamily.split(",")[0]
						} catch (a) {}
						e = {
							style: n.fontStyle || Z,
							variant: n.fontVariant || Z,
							weight: n.fontWeight || Z,
							size: 0 | parseFloat(n.fontSize || 12),
							family: i || "Microsoft YaHei"
						}, q[t] = e, j++
					}
					return e
				};
			s.measureText = function(t, e) {
				var i = p.doc;
				H || (H = i.createElement("div"), H.style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", p.doc.body.appendChild(H));
				try {
					H.style.font = e
				} catch (n) {}
				return H.innerHTML = "", H.appendChild(i.createTextNode(t)), {
					width: H.offsetWidth
				}
			};
			for (var K = new a, Q = function(t, e, i, n) {
					var a = this.style,
						o = a.text;
					if (o) {
						var r, l, h = a.textAlign,
							u = Y(a.textFont),
							c = u.style + " " + u.variant + " " + u.weight + " " + u.size + 'px "' + u.family + '"',
							d = a.textBaseline,
							f = a.textVerticalAlign;
						i = i || s.getBoundingRect(o, c, h, d);
						var m = this.transform;
						if (m && !n && (K.copy(e), K.applyTransform(m), e = K), n) r = e.x, l = e.y;
						else {
							var v = a.textPosition,
								y = a.textDistance;
							if (v instanceof Array) r = e.x + R(v[0], e.width), l = e.y + R(v[1], e.height), h = h || "left", d = d || "top";
							else {
								var x = s.adjustTextPositionOnRect(v, e, i, y);
								r = x.x, l = x.y, h = h || x.textAlign, d = d || x.textBaseline
							}
						}
						if (f) {
							switch (f) {
							case "middle":
								l -= i.height / 2;
								break;
							case "bottom":
								l -= i.height
							}
							d = "top"
						}
						var _ = u.size;
						switch (d) {
						case "hanging":
						case "top":
							l += _ / 1.75;
							break;
						case "middle":
							break;
						default:
							l -= _ / 2.25
						}
						switch (h) {
						case "left":
							break;
						case "center":
							r -= i.width / 2;
							break;
						case "right":
							r -= i.width
						}
						var M, S, A, I = p.createNode,
							T = this._textVmlEl;
						T ? (A = T.firstChild, M = A.nextSibling, S = M.nextSibling) : (T = I("line"), M = I("path"), S = I("textpath"), A = I("skew"), S.style["v-text-align"] = "left", C(T), M.textpathok = !0, S.on = !0, T.from = "0 0", T.to = "1000 0.05", P(T, A), P(T, M), P(T, S), this._textVmlEl = T);
						var D = [r, l],
							k = T.style;
						m && n ? (w(D, D, m), A.on = !0, A.matrix = m[0].toFixed(3) + b + m[2].toFixed(3) + b + m[1].toFixed(3) + b + m[3].toFixed(3) + ",0,0", A.offset = (g(D[0]) || 0) + "," + (g(D[1]) || 0), A.origin = "0 0", k.left = "0px", k.top = "0px") : (A.on = !1, k.left = g(r) + "px", k.top = g(l) + "px"), S.string = L(o);
						try {
							S.style.font = c
						} catch (O) {}
						B(T, "fill", {
							fill: n ? a.fill : a.textFill,
							opacity: a.opacity
						}, this), B(T, "stroke", {
							stroke: n ? a.stroke : a.textStroke,
							opacity: a.opacity,
							lineDash: a.lineDash
						}, this), T.style.zIndex = z(this.zlevel, this.z, this.z2), P(t, T)
					}
				}, $ = function(t) {
					k(t, this._textVmlEl), this._textVmlEl = null
				}, J = function(t) {
					P(t, this._textVmlEl)
				}, tt = [l, h, u, d, c], et = 0; et < tt.length; et++) {
				var it = tt[et].prototype;
				it.drawRectText = Q, it.removeRectText = $, it.appendRectText = J
			}
			c.prototype.brushVML = function(t) {
				var e = this.style;
				e.text && this.drawRectText(t, {
					x: e.x || 0,
					y: e.y || 0,
					width: 0,
					height: 0
				}, this.getBoundingRect(), !0)
			}, c.prototype.onRemove = function(t) {
				this.removeRectText(t)
			}, c.prototype.onAdd = function(t) {
				this.appendRectText(t)
			}
		}
	}, function(t, e, i) {
		i(203), i(67).registerPainter("vml", i(202))
	}, function(t, e, i) {
		var n = i(1),
			a = i(206),
			o = i(2),
			r = {
				type: "geoRoam",
				event: "geoRoam",
				update: "updateLayout"
			};
		o.registerAction(r, function(t, e) {
			var i = t.component || "series";
			e.eachComponent(i, function(e) {
				if (e.name === t.name) {
					var o = e.coordinateSystem;
					if ("geo" !== o.type) return;
					var r = e.getModel("roamDetail"),
						s = a.calcPanAndZoom(r, t, e.get("scaleLimit"));
					e.setRoamPan && e.setRoamPan(s.x, s.y), e.setRoamZoom && e.setRoamZoom(s.zoom), o && o.setPan(s.x, s.y), o && o.setZoom(s.zoom), "series" === i && n.each(e.seriesGroup, function(t) {
						t.setRoamPan(s.x, s.y), t.setRoamZoom(s.zoom)
					})
				}
			})
		})
	}, function(t, e) {
		var i = {};
		i.calcPanAndZoom = function(t, e, i) {
			var n = e.dx,
				a = e.dy,
				o = e.zoom,
				r = t.get("x") || 0,
				s = t.get("y") || 0,
				l = t.get("zoom") || 1;
			if (null != n && null != a && (r += n, s += a), null != o) {
				i && (o = Math.max(Math.min(l * o, i.max), i.min) / l);
				var h = (e.originX - r) * (o - 1),
					u = (e.originY - s) * (o - 1);
				r -= h, s -= u
			}
			return {
				x: r,
				y: s,
				zoom: (o || 1) * l
			}
		}, t.exports = i
	}, function(t, e) {
		t.exports = function(t) {
			var e = t.coordinateSystem;
			if (!e || "view" === e.type) {
				var i = e.getBoundingRect(),
					n = t.getData(),
					a = n.graph,
					o = 0,
					r = n.getSum("value"),
					s = 2 * Math.PI / (r || n.count()),
					l = i.width / 2 + i.x,
					h = i.height / 2 + i.y,
					u = Math.min(i.width, i.height) / 2;
				a.eachNode(function(t) {
					var e = t.getValue("value");
					o += s * (r ? e : 2) / 2, t.setLayout([u * Math.cos(o) + l, u * Math.sin(o) + h]), o += s * (r ? e : 2) / 2
				}), a.eachEdge(function(t) {
					var e, i = t.getModel().get("lineStyle.normal.curveness") || 0,
						n = t.node1.getLayout(),
						a = t.node2.getLayout();
					i > 0 && (e = [l, h]), t.setLayout([n, a, e])
				})
			}
		}
	}, function(t, e) {
		t.exports = function(t) {
			var e = t.coordinateSystem;
			if (!e || "view" === e.type) {
				var i = t.getGraph();
				i.eachNode(function(t) {
					var e = t.getModel();
					t.setLayout([+e.get("x"), +e.get("y")])
				}), i.eachEdge(function(t) {
					var e, i = t.getModel().get("lineStyle.normal.curveness") || 0,
						n = t.node1.getLayout(),
						a = t.node2.getLayout();
					i > 0 && (e = [(n[0] + a[0]) / 2 - (n[1] - a[1]) * i, (n[1] + a[1]) / 2 - (a[0] - n[0]) * i]), t.setLayout([n, a, e])
				})
			}
		}
	}, function(t, e, i) {
		var n = i(14),
			a = i(343),
			o = i(223),
			r = i(31),
			s = i(1);
		t.exports = function(t, e, i, l) {
			for (var h = new a(l), u = 0; u < t.length; u++) h.addNode(s.retrieve(t[u].id, t[u].name, u), u);
			for (var c = [], d = [], u = 0; u < e.length; u++) {
				var f = e[u];
				h.addEdge(f.source, f.target, u) && (d.push(f), c.push(s.retrieve(f.id, f.source + " - " + f.target)))
			}
			var p = r(["value"], t),
				g = new n(p, i),
				m = new n(["value"], i);
			return g.initData(t), m.initData(d, c), h.setEdgeData(m), o.linkToGraph(g, h), h.update(), h
		}
	}, function(t, e, i) {
		function n(t, e) {
			var i = t.getItemStyle(),
				n = t.get("areaColor");
			return n && (i.fill = n), i
		}
		function a(t, e, i, n, a) {
			i.off("click"), t.get("selectedMode") && i.on("click", function(i) {
				var r = i.target.dataIndex;
				if (null != r) {
					var s = e.getName(r);
					n.dispatchAction({
						type: "mapToggleSelect",
						seriesIndex: t.seriesIndex,
						name: s,
						from: a.uid
					}), o(t, e, n)
				}
			})
		}
		function o(t, e) {
			e.eachItemGraphicEl(function(i, n) {
				var a = e.getName(n);
				i.trigger(t.isSelected(a) ? "emphasis" : "normal")
			})
		}
		function r(t, e) {
			var i = new l.Group;
			this._controller = new s(t.getZr(), e ? i : null, null), this.group = i, this._updateGroup = e
		}
		var s = i(70),
			l = i(3),
			h = i(1);
		r.prototype = {
			constructor: r,
			draw: function(t, e, i, r) {
				var s = t.getData && t.getData(),
					u = t.coordinateSystem,
					c = this.group;
				c.removeAll();
				var d = u.scale;
				c.position = u.position.slice(), c.scale = d.slice();
				var f, p, g, m, v, y, x = ["itemStyle", "normal"],
					_ = ["itemStyle", "emphasis"],
					w = ["label", "normal"],
					b = ["label", "emphasis"];
				s || (f = t.getModel(x), p = t.getModel(_), g = n(f, d), m = n(p, d), v = t.getModel(w), y = t.getModel(b)), h.each(u.regions, function(e) {
					var i, a = new l.Group;
					if (s) {
						i = s.indexOfName(e.name);
						var o = s.getItemModel(i),
							r = s.getItemVisual(i, "color", !0);
						f = o.getModel(x), p = o.getModel(_), g = n(f, d), m = n(p, d), v = o.getModel(w), y = o.getModel(b), r && (g.fill = r)
					}
					var u = v.getModel("textStyle"),
						M = y.getModel("textStyle");
					h.each(e.contours, function(t) {
						var e = new l.Polygon({
							shape: {
								points: t
							},
							style: {
								strokeNoScale: !0
							},
							culling: !0
						});
						e.setStyle(g), a.add(e)
					});
					var S = v.get("show"),
						A = y.get("show"),
						I = s && isNaN(s.get("value", i)),
						T = s && s.getItemLayout(i);
					if (!s || I && (S || A) || T && T.showLabel) {
						var C = s ? i : e.name,
							L = t.getFormattedLabel(C, "normal"),
							D = t.getFormattedLabel(C, "emphasis"),
							P = new l.Text({
								style: {
									text: S ? L || e.name : "",
									fill: u.getTextColor(),
									textFont: u.getFont(),
									textAlign: "center",
									textVerticalAlign: "middle"
								},
								hoverStyle: {
									text: A ? D || e.name : "",
									fill: M.getTextColor(),
									textFont: M.getFont()
								},
								position: e.center.slice(),
								scale: [1 / d[0], 1 / d[1]],
								z2: 10,
								silent: !0
							});
						a.add(P)
					}
					s && s.setItemGraphicEl(i, a), l.setHoverStyle(a, m), c.add(a)
				}), this._updateController(t, e, i), s && a(t, s, c, i, r), s && o(t, s)
			},
			remove: function() {
				this.group.removeAll(), this._controller.dispose()
			},
			_updateController: function(t, e, i) {
				var n = t.coordinateSystem,
					a = this._controller;
				a.zoomLimit = t.get("scaleLimit"), a.zoom = t.get("roamDetail.zoom"), a.enable(t.get("roam") || !1);
				var o = t.type.split(".")[0];
				a.off("pan").on("pan", function(e, n) {
					i.dispatchAction({
						type: "geoRoam",
						component: o,
						name: t.name,
						dx: e,
						dy: n
					})
				}), a.off("zoom").on("zoom", function(e, n, a) {
					if (i.dispatchAction({
						type: "geoRoam",
						component: o,
						name: t.name,
						zoom: e,
						originX: n,
						originY: a
					}), this._updateGroup) {
						var r = this.group,
							s = r.scale;
						r.traverse(function(t) {
							"text" === t.type && t.attr("scale", [1 / s[0], 1 / s[1]])
						})
					}
				}, this), a.rect = n.getViewRect()
			}
		}, t.exports = r
	}, function(t, e, i) {
		i(222), i(333), i(303);
		var n = i(2);
		n.extendComponentView({
			type: "parallel"
		}), n.registerPreprocessor(i(334))
	}, function(t, e, i) {
		function n(t, e) {
			a.each(["inRange", "outOfRange", "target", "controller", "color"], function(i) {
				e.hasOwnProperty(i) ? t[i] = a.clone(e[i]) : delete t[i]
			})
		}
		var a = i(1),
			o = i(15),
			r = i(2),
			s = i(7),
			l = i(347),
			h = i(73),
			u = h.mapVisual,
			c = h.eachVisual,
			d = i(4),
			f = a.isArray,
			p = a.each,
			g = d.asc,
			m = d.linearMap,
			v = r.extendComponentModel({
				type: "visualMap",
				dependencies: ["series"],
				dataBound: [-(1 / 0), 1 / 0],
				stateList: ["inRange", "outOfRange"],
				layoutMode: {
					type: "box",
					ignoreSize: !0
				},
				defaultOption: {
					show: !0,
					zlevel: 0,
					z: 4,
					min: 0,
					max: 200,
					dimension: null,
					inRange: null,
					outOfRange: null,
					left: 0,
					right: null,
					top: null,
					bottom: 0,
					itemWidth: null,
					itemHeight: null,
					inverse: !1,
					orient: "vertical",
					seriesIndex: null,
					backgroundColor: "rgba(0,0,0,0)",
					borderColor: "#ccc",
					contentColor: "#5793f3",
					inactiveColor: "#aaa",
					borderWidth: 0,
					padding: 5,
					textGap: 10,
					precision: 0,
					color: ["#bf444c", "#d88273", "#f6efa6"],
					formatter: null,
					text: null,
					textStyle: {
						color: "#333"
					}
				},
				init: function(t, e, i) {
					this._dataExtent, this.controllerVisuals = {}, this.targetVisuals = {}, this.textStyleModel, this.itemSize, this.mergeDefaultAndTheme(t, i), this.doMergeOption({}, !0)
				},
				mergeOption: function(t) {
					v.superApply(this, "mergeOption", arguments), this.doMergeOption(t, !1)
				},
				doMergeOption: function(t, e) {
					var i = this.option;
					!e && n(i, t), o.canvasSupported || (i.realtime = !1), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption()
				},
				formatValueText: function(t, e) {
					function i(t) {
						return t === l[0] ? "min" : t === l[1] ? "max" : (+t).toFixed(s)
					}
					var n, o, r = this.option,
						s = r.precision,
						l = this.dataBound,
						h = r.formatter;
					return a.isArray(t) && (t = t.slice(), n = !0), o = e ? t : n ? [i(t[0]), i(t[1])] : i(t), a.isString(h) ? h.replace("{value}", n ? o[0] : o).replace("{value2}", n ? o[1] : o) : a.isFunction(h) ? n ? h(t[0], t[1]) : h(t) : n ? t[0] === l[0] ? "< " + o[1] : t[1] === l[1] ? "> " + o[0] : o[0] + " - " + o[1] : o
				},
				resetTargetSeries: function(t, e) {
					var i = this.option,
						n = null == i.seriesIndex;
					i.seriesIndex = n ? [] : s.normalizeToArray(i.seriesIndex), n && this.ecModel.eachSeries(function(t, e) {
						var n = t.getData();
						"list" === n.type && i.seriesIndex.push(e)
					})
				},
				resetExtent: function() {
					var t = this.option,
						e = g([t.min, t.max]);
					this._dataExtent = e
				},
				getDataDimension: function(t) {
					var e = this.option.dimension;
					return null != e ? e : t.dimensions.length - 1
				},
				getExtent: function() {
					return this._dataExtent.slice()
				},
				resetVisual: function(t) {
					function e(e, o) {
						p(this.stateList, function(r) {
							var s = o[r] || (o[r] = i()),
								l = this.option[e][r] || {};
							p(l, function(i, o) {
								if (h.isValidType(o)) {
									var l = {
										type: o,
										dataExtent: n,
										visual: i
									};
									t && t.call(this, l, r), s[o] = new h(l), "controller" === e && "opacity" === o && (l = a.clone(l), l.type = "colorAlpha", s.__hidden.__alphaForOpacity = new h(l))
								}
							}, this)
						}, this)
					}
					function i() {
						var t = function() {};
						t.prototype.__hidden = t.prototype;
						var e = new t;
						return e
					}
					var n = this.getExtent();
					e.call(this, "controller", this.controllerVisuals), e.call(this, "target", this.targetVisuals)
				},
				completeVisualOption: function() {
					function t(t) {
						f(n.color) && !t.inRange && (t.inRange = {
							color: n.color.slice().reverse()
						}), p(this.stateList, function(e) {
							var i = t[e];
							if (a.isString(i)) {
								var n = l.get(i, "active", d);
								n ? (t[e] = {}, t[e][i] = n) : delete t[e]
							}
						}, this)
					}
					function e(t, e, i) {
						var n = t[e],
							a = t[i];
						n && !a && (a = t[i] = {}, p(n, function(t, e) {
							var i = l.get(e, "inactive", d);
							h.isValidType(e) && i && (a[e] = i)
						}))
					}
					function i(t) {
						var e = (t.inRange || {}).symbol || (t.outOfRange || {}).symbol,
							i = (t.inRange || {}).symbolSize || (t.outOfRange || {}).symbolSize,
							n = this.get("inactiveColor");
						p(this.stateList, function(o) {
							var r = this.itemSize,
								s = t[o];
							s || (s = t[o] = {
								color: d ? n : [n]
							}), s.symbol || (s.symbol = e && a.clone(e) || (d ? "roundRect" : ["roundRect"])), s.symbolSize || (s.symbolSize = i && a.clone(i) || (d ? r[0] : [r[0], r[0]])), s.symbol = u(s.symbol, function(t) {
								return "none" === t || "square" === t ? "roundRect" : t
							});
							var l = s.symbolSize;
							if (l) {
								var h = -(1 / 0);
								c(l, function(t) {
									t > h && (h = t)
								}), s.symbolSize = u(l, function(t) {
									return m(t, [0, h], [0, r[0]], !0)
								})
							}
						}, this)
					}
					var n = this.option,
						o = {
							inRange: n.inRange,
							outOfRange: n.outOfRange
						},
						r = n.target || (n.target = {}),
						s = n.controller || (n.controller = {});
					a.merge(r, o), a.merge(s, o);
					var d = this.isCategory();
					t.call(this, r), t.call(this, s), e.call(this, r, "inRange", "outOfRange"), e.call(this, r, "outOfRange", "inRange"), i.call(this, s)
				},
				eachTargetSeries: function(t, e) {
					a.each(this.option.seriesIndex, function(i) {
						t.call(e, this.ecModel.getSeriesByIndex(i))
					}, this)
				},
				isCategory: function() {
					return !!this.option.categories
				},
				resetItemSize: function() {
					this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))]
				},
				setSelected: a.noop,
				getValueState: a.noop
			});
		t.exports = v
	}, function(t, e, i) {
		var n = i(2),
			a = i(1),
			o = i(3),
			r = i(9),
			s = i(11),
			l = i(73);
		t.exports = n.extendComponentView({
			type: "visualMap",
			autoPositionValues: {
				left: 1,
				right: 1,
				top: 1,
				bottom: 1
			},
			init: function(t, e) {
				this.ecModel = t, this.api = e, this.visualMapModel, this._updatableShapes = {}
			},
			render: function(t, e, i, n) {
				return this.visualMapModel = t, t.get("show") === !1 ? void this.group.removeAll() : void this.doRender.apply(this, arguments)
			},
			renderBackground: function(t) {
				var e = this.visualMapModel,
					i = r.normalizeCssArray(e.get("padding") || 0),
					n = t.getBoundingRect();
				t.add(new o.Rect({
					z2: -1,
					silent: !0,
					shape: {
						x: n.x - i[3],
						y: n.y - i[0],
						width: n.width + i[3] + i[1],
						height: n.height + i[0] + i[2]
					},
					style: {
						fill: e.get("backgroundColor"),
						stroke: e.get("borderColor"),
						lineWidth: e.get("borderWidth")
					}
				}))
			},
			getControllerVisual: function(t, e, i) {
				function n(t) {
					return u[t]
				}
				function o(t, e) {
					u[t] = e
				}
				i = i || {};
				var r = i.forceState,
					s = this.visualMapModel,
					h = a.isArray(t);
				if (h && (!r || "color" !== e)) throw new Error(t);
				var u = {};
				if ("symbol" === e && (u.symbol = s.get("itemSymbol")), "color" === e) {
					var c = s.get("contentColor");
					u.color = h ? [{
						color: c,
						offset: 0
					}, {
						color: c,
						offset: 1
					}] : c
				}
				var d = s.controllerVisuals[r || s.getValueState(t)],
					f = l.prepareVisualTypes(d);
				return a.each(f, function(a) {
					var r = d[a];
					i.convertOpacityToAlpha && "opacity" === a && (a = "colorAlpha", r = d.__alphaForOpacity), l.dependsOn(a, e) && r && r.applyVisual(t, n, o)
				}), u[e]
			},
			positionGroup: function(t) {
				var e = this.visualMapModel,
					i = this.api;
				s.positionGroup(t, e.getBoxLayoutParams(), {
					width: i.getWidth(),
					height: i.getHeight()
				})
			},
			doRender: a.noop
		})
	}, function(t, e, i) {
		var n = i(11),
			a = {
				getItemAlign: function(t, e, i) {
					var a = t.option,
						o = a.align;
					if (null != o && "auto" !== o) return o;
					for (var r = {
						width: e.getWidth(),
						height: e.getHeight()
					}, s = "horizontal" === a.orient ? 1 : 0, l = [
						["left", "right", "width"],
						["top", "bottom", "height"]
					], h = l[s], u = [0, null, 10], c = {}, d = 0; 3 > d; d++) c[l[1 - s][d]] = u[d], c[h[d]] = 2 === d ? i[0] : a[h[d]];
					var f = [
						["x", "width", 3],
						["y", "height", 0]
					][s],
						p = n.getLayoutRect(c, r, a.padding);
					return h[(p.margin[f[2]] || 0) + p[f[0]] + .5 * p[f[1]] < .5 * r[f[1]] ? 0 : 1]
				}
			};
		t.exports = a
	}, function(t, e, i) {
		function n(t, e) {
			return t && t.hasOwnProperty && t.hasOwnProperty(e)
		}
		var a = i(1),
			o = a.each;
		t.exports = function(t) {
			var e = t && t.visualMap;
			a.isArray(e) || (e = e ? [e] : []), o(e, function(t) {
				if (t) {
					n(t, "splitList") && !n(t, "pieces") && (t.pieces = t.splitList, delete t.splitList);
					var e = t.pieces;
					e && a.isArray(e) && o(e, function(t) {
						a.isObject(t) && (n(t, "start") && !n(t, "min") && (t.min = t.start), n(t, "end") && !n(t, "max") && (t.max = t.end))
					})
				}
			})
		}
	}, function(t, e, i) {
		i(10).registerSubTypeDefaulter("visualMap", function(t) {
			return t.categories || (t.pieces ? t.pieces.length > 0 : t.splitNumber > 0) && !t.calculable ? "piecewise" : "continuous"
		})
	}, function(t, e, i) {
		function n(t, e) {
			var i = t.targetVisuals,
				n = {};
			r.each(["inRange", "outOfRange"], function(t) {
				var e = o.prepareVisualTypes(i[t]);
				n[t] = e
			}), t.eachTargetSeries(function(e) {
				function a(t) {
					return s.getItemVisual(r, t)
				}
				function o(t, e) {
					s.setItemVisual(r, t, e)
				}
				var r, s = e.getData(),
					l = t.getDataDimension(s);
				s.each([l], function(e, s) {
					r = s;
					for (var l = t.getValueState(e), h = i[l], u = n[l], c = 0, d = u.length; d > c; c++) {
						var f = u[c];
						h[f] && h[f].applyVisual(e, a, o)
					}
				})
			})
		}
		var a = i(2),
			o = i(73),
			r = i(1);
		a.registerVisualCoding("component", function(t) {
			t.eachComponent("visualMap", function(e) {
				n(e, t)
			})
		})
	}, function(t, e, i) {
		var n = i(2),
			a = {
				type: "selectDataRange",
				event: "dataRangeSelected",
				update: "update"
			};
		n.registerAction(a, function(t, e) {
			e.eachComponent({
				mainType: "visualMap",
				query: t
			}, function(e) {
				e.setSelected(t.selected)
			})
		})
	}, function(t, e, i) {
		function n() {
			s.call(this)
		}
		function a(t) {
			this.name = t, this.zoomLimit, s.call(this), this._roamTransform = new n, this._viewTransform = new n
		}
		var o = i(5),
			r = i(19),
			s = i(77),
			l = i(1),
			h = i(8),
			u = o.applyTransform;
		l.mixin(n, s), a.prototype = {
			constructor: a,
			type: "view",
			dimensions: ["x", "y"],
			setBoundingRect: function(t, e, i, n) {
				return this._rect = new h(t, e, i, n), this._rect
			},
			getBoundingRect: function() {
				return this._rect
			},
			setViewRect: function(t, e, i, n) {
				this.transformTo(t, e, i, n), this._viewRect = new h(t, e, i, n)
			},
			transformTo: function(t, e, i, n) {
				var a = this.getBoundingRect(),
					o = this._viewTransform;
				o.transform = a.calculateTransform(new h(t, e, i, n)), o.decomposeTransform(), this._updateTransform()
			},
			setPan: function(t, e) {
				this._roamTransform.position = [t, e], this._updateTransform()
			},
			setZoom: function(t) {
				var e = this.zoomLimit;
				e && (t = Math.max(Math.min(t, e.max), e.min)), this._roamTransform.scale = [t, t], this._updateTransform()
			},
			getRoamTransform: function() {
				return this._roamTransform.transform
			},
			_updateTransform: function() {
				var t = this._roamTransform,
					e = this._viewTransform;
				e.parent = t, t.updateTransform(), e.updateTransform(), e.transform && r.copy(this.transform || (this.transform = []), e.transform), this.decomposeTransform()
			},
			getViewRect: function() {
				return this._viewRect
			},
			dataToPoint: function(t) {
				var e = this.transform;
				return e ? u([], t, e) : [t[0], t[1]]
			},
			pointToData: function(t) {
				var e = this.invTransform;
				return e ? u([], t, e) : [t[0], t[1]]
			}
		}, l.mixin(a, s), t.exports = a
	}, function(t, e, i) {
		function n(t, e, i) {
			if (this.name = t, this.contours = e, i) i = [i[0], i[1]];
			else {
				var n = this.getBoundingRect();
				i = [n.x + n.width / 2, n.y + n.height / 2]
			}
			this.center = i
		}
		var a = i(348),
			o = i(8),
			r = i(64),
			s = i(5);
		n.prototype = {
			constructor: n,
			getBoundingRect: function() {
				var t = this._rect;
				if (t) return t;
				for (var e = Number.MAX_VALUE, i = [e, e], n = [-e, -e], a = [], l = [], h = this.contours, u = 0; u < h.length; u++) r.fromPoints(h[u], a, l), s.min(i, i, a), s.max(n, n, l);
				return 0 === u && (i[0] = i[1] = n[0] = n[1] = 0), this._rect = new o(i[0], i[1], n[0] - i[0], n[1] - i[1])
			},
			contain: function(t) {
				var e = this.getBoundingRect(),
					i = this.contours;
				if (e.contain(t[0], t[1])) for (var n = 0, o = i.length; o > n; n++) if (a.contain(i[n], t[0], t[1])) return !0;
				return !1
			},
			transformTo: function(t, e, i, n) {
				var a = this.getBoundingRect(),
					r = a.width / a.height;
				i ? n || (n = i / r) : i = r * n;
				for (var l = new o(t, e, i, n), h = a.calculateTransform(l), u = this.contours, c = 0; c < u.length; c++) for (var d = 0; d < u[c].length; d++) s.applyTransform(u[c][d], u[c][d], h);
				a = this._rect, a.copy(l), this.center = [a.x + a.width / 2, a.y + a.height / 2]
			}
		}, t.exports = n
	}, function(t, e, i) {
		function n(t, e) {
			var i = this.getBoundingRect(),
				n = t.getBoxLayoutParams();
			n.aspect = i.width / i.height * .75;
			var a = s.getLayoutRect(n, {
				width: e.getWidth(),
				height: e.getHeight()
			});
			this.setViewRect(a.x, a.y, a.width, a.height);
			var o = t.getModel("roamDetail"),
				r = o.get("x") || 0,
				l = o.get("y") || 0,
				h = o.get("zoom") || 1;
			this.setPan(r, l), this.setZoom(h)
		}
		function a(t, e) {
			l.each(e.get("geoCoord"), function(e, i) {
				t.addGeoCoord(i, e)
			})
		}
		function o(t) {
			console.error("Map " + t + " not exists")
		}
		i(325);
		var r = i(324),
			s = i(11),
			l = i(1),
			h = {},
			u = {
				dimensions: r.prototype.dimensions,
				create: function(t, e) {
					var i = [];
					t.eachComponent("geo", function(t, s) {
						var l = t.get("map"),
							u = h[l];
						u || o(l);
						var c = new r(l + s, l, u && u.geoJson, u && u.specialAreas, t.get("nameMap"));
						c.zoomLimit = t.get("scaleLimit"), i.push(c), a(c, t), t.coordinateSystem = c, c.model = t, c.resize = n, c.resize(t, e)
					}), t.eachSeries(function(t) {
						var e = t.get("coordinateSystem");
						if ("geo" === e) {
							var n = t.get("geoIndex") || 0;
							t.coordinateSystem = i[n]
						}
					});
					var s = {};
					return t.eachSeriesByType("map", function(t) {
						var e = t.get("map");
						s[e] = s[e] || [], s[e].push(t)
					}), l.each(s, function(t, s) {
						var u = h[s];
						u || o(name);
						var c = l.map(t, function(t) {
							return t.get("nameMap")
						}),
							d = new r(s, s, u && u.geoJson, u && u.specialAreas, l.mergeAll(c));
						d.zoomLimit = l.retrieve.apply(null, l.map(t, function(t) {
							return t.get("scaleLimit")
						})), i.push(d), d.resize = n, d.resize(t[0], e), l.each(t, function(t) {
							t.coordinateSystem = d, a(d, t)
						})
					}), i
				},
				registerMap: function(t, e, i) {
					e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), h[t] = {
						geoJson: e,
						specialAreas: i
					}
				},
				getMap: function(t) {
					return h[t]
				}
			},
			c = i(2);
		c.registerMap = u.registerMap, c.getMap = u.getMap, c.loadMap = function() {}, c.registerCoordinateSystem("geo", u)
	}, function(t, e, i) {
		function n(t, e) {
			var i = [];
			return t.eachComponent("parallel", function(n, o) {
				var r = new a(n, t, e);
				r.name = "parallel_" + o, r.resize(n, e), n.coordinateSystem = r, r.model = n, i.push(r)
			}), t.eachSeries(function(t) {
				if ("parallel" === t.get("coordinateSystem")) {
					var e = t.get("parallelIndex");
					t.coordinateSystem = i[e]
				}
			}), i
		}
		var a = i(331);
		i(28).register("parallel", {
			create: n
		})
	}, function(t, e, i) {
		function n(t, e, i) {
			return a.each(r, function(n, o) {
				var r = t[o];
				t[o] = a.curry(n, r, e, i)
			}), t[i] = e, e.data = t, t
		}
		var a = i(1),
			o = Array.prototype.slice,
			r = {
				cloneShallow: function(t, e, i) {
					var a = t.apply(this, o.call(arguments, 3));
					return n(a, e, i)
				},
				map: function(t, e, i) {
					var a = t.apply(this, o.call(arguments, 3));
					return n(a, e, i)
				},
				filterSelf: function(t, e, i) {
					var n = t.apply(this, o.call(arguments, 3));
					return e.update(), n
				}
			};
		t.exports = {
			linkToGraph: function(t, e) {
				n(t, e, "graph")
			},
			linkToTree: function(t, e) {
				n(t, e, "tree")
			}
		}
	}, function(t, e, i) {
		var n = i(2);
		i(225), i(226), n.registerVisualCoding("chart", i(228)), n.registerLayout(i(227))
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			a = i(13),
			o = i(159),
			r = a.extend({
				type: "series.boxplot",
				dependencies: ["xAxis", "yAxis", "grid"],
				valueDimensions: ["min", "Q1", "median", "Q3", "max"],
				dimensions: null,
				defaultOption: {
					zlevel: 0,
					z: 2,
					coordinateSystem: "cartesian2d",
					legendHoverLink: !0,
					hoverAnimation: !0,
					xAxisIndex: 0,
					yAxisIndex: 0,
					layout: null,
					boxWidth: [7, 50],
					itemStyle: {
						normal: {
							color: "#fff",
							borderWidth: 1
						},
						emphasis: {
							borderWidth: 2,
							shadowBlur: 5,
							shadowOffsetX: 2,
							shadowOffsetY: 2,
							shadowColor: "rgba(0,0,0,0.4)"
						}
					},
					animationEasing: "elasticOut",
					animationDuration: 800
				}
			});
		n.mixin(r, o.seriesModelMixin, !0), t.exports = r
	}, function(t, e, i) {
		"use strict";

		function n(t, e, i) {
			var n = e.getItemModel(i),
				a = n.getModel(h),
				o = e.getItemVisual(i, "color"),
				s = a.getItemStyle(["borderColor"]),
				l = t.childAt(t.whiskerIndex);
			l.style.set(s), l.style.stroke = o, l.dirty();
			var c = t.childAt(t.bodyIndex);
			c.style.set(s), c.style.stroke = o, c.dirty();
			var d = n.getModel(u).getItemStyle();
			r.setHoverStyle(t, d)
		}
		var a = i(1),
			o = i(25),
			r = i(3),
			s = i(159),
			l = o.extend({
				type: "boxplot",
				getStyleUpdater: function() {
					return n
				}
			});
		a.mixin(l, s.viewMixin, !0);
		var h = ["itemStyle", "normal"],
			u = ["itemStyle", "emphasis"];
		t.exports = l
	}, function(t, e, i) {
		function n(t) {
			var e = [],
				i = [];
			return t.eachSeriesByType("boxplot", function(t) {
				var n = t.getBaseAxis(),
					a = r.indexOf(i, n);
				0 > a && (a = i.length, i[a] = n, e[a] = {
					axis: n,
					seriesModels: []
				}), e[a].seriesModels.push(t)
			}), e
		}
		function a(t) {
			var e, i, n = t.axis,
				a = t.seriesModels,
				o = a.length,
				s = t.boxWidthList = [],
				u = t.boxOffsetList = [],
				c = [];
			if ("category" === n.type) i = n.getBandWidth();
			else {
				var d = 0;
				h(a, function(t) {
					d = Math.max(d, t.getData().count())
				}), e = n.getExtent(), Math.abs(e[1] - e[0]) / d
			}
			h(a, function(t) {
				var e = t.get("boxWidth");
				r.isArray(e) || (e = [e, e]), c.push([l(e[0], i) || 0, l(e[1], i) || 0])
			});
			var f = .8 * i - 2,
				p = f / o * .3,
				g = (f - p * (o - 1)) / o,
				m = g / 2 - f / 2;
			h(a, function(t, e) {
				u.push(m), m += p + g, s.push(Math.min(Math.max(g, c[e][0]), c[e][1]))
			})
		}
		function o(t, e, i) {
			var n = t.coordinateSystem,
				a = t.getData(),
				o = t.dimensions,
				r = t.get("layout"),
				s = i / 2;
			a.each(o, function() {
				function t(t) {
					var i = [];
					i[f] = c, i[p] = t;
					var a;
					return isNaN(c) || isNaN(t) ? a = [NaN, NaN] : (a = n.dataToPoint(i), a[f] += e), a
				}
				function i(t, e) {
					var i = t.slice(),
						n = t.slice();
					i[f] += s, n[f] -= s, e ? x.push(i, n) : x.push(n, i)
				}
				function l(t) {
					var e = [t.slice(), t.slice()];
					e[0][f] -= s, e[1][f] += s, y.push(e)
				}
				var h = arguments,
					u = o.length,
					c = h[0],
					d = h[u],
					f = "horizontal" === r ? 0 : 1,
					p = 1 - f,
					g = t(h[3]),
					m = t(h[1]),
					v = t(h[5]),
					y = [
						[m, t(h[2])],
						[v, t(h[4])]
					];
				l(m), l(v), l(g);
				var x = [];
				i(y[0][1], 0), i(y[1][1], 1), a.setItemLayout(d, {
					chartLayout: r,
					initBaseline: g[p],
					median: g,
					bodyEnds: x,
					whiskerEnds: y
				})
			})
		}
		var r = i(1),
			s = i(4),
			l = s.parsePercent,
			h = r.each;
		t.exports = function(t, e) {
			var i = n(t);
			h(i, function(t) {
				var e = t.seriesModels;
				e.length && (a(t), h(e, function(e, i) {
					o(e, t.boxOffsetList[i], t.boxWidthList[i])
				}))
			})
		}
	}, function(t, e) {
		var i = ["itemStyle", "normal", "borderColor"];
		t.exports = function(t, e) {
			var n = t.get("color");
			t.eachRawSeriesByType("boxplot", function(e) {
				var a = n[e.seriesIndex % n.length],
					o = e.getData();
				o.setVisual({
					legendSymbol: "roundRect",
					color: e.get(i) || a
				}), t.isSeriesFiltered(e) || o.each(function(t) {
					var e = o.getItemModel(t);
					o.setItemVisual(t, {
						color: e.get(i, !0)
					})
				})
			})
		}
	}, function(t, e, i) {
		var n = i(2);
		i(230), i(231), n.registerPreprocessor(i(234)), n.registerVisualCoding("chart", i(233)), n.registerLayout(i(232))
	}, function(t, e, i) {
		"use strict";
		var n = i(1),
			a = i(13),
			o = i(159),
			r = i(9),
			s = r.encodeHTML,
			l = r.addCommas,
			h = a.extend({
				type: "series.candlestick",
				dependencies: ["xAxis", "yAxis", "grid"],
				valueDimensions: ["open", "close", "lowest", "highest"],
				dimensions: null,
				defaultOption: {
					zlevel: 0,
					z: 2,
					coordinateSystem: "cartesian2d",
					legendHoverLink: !0,
					hoverAnimation: !0,
					xAxisIndex: 0,
					yAxisIndex: 0,
					layout: null,
					itemStyle: {
						normal: {
							color: "#c23531",
							color0: "#314656",
							borderWidth: 1,
							borderColor: "#c23531",
							borderColor0: "#314656"
						},
						emphasis: {
							borderWidth: 2
						}
					},
					animationUpdate: !1,
					animationEasing: "linear",
					animationDuration: 300
				},
				getShadowDim: function() {
					return "open"
				},
				formatTooltip: function(t, e) {
					var i = n.map(this.valueDimensions, function(e) {
						return e + ": " + l(this._data.get(e, t))
					}, this);
					return s(this.name) + "<br />" + i.join("<br />")
				}
			});
		n.mixin(h, o.seriesModelMixin, !0), t.exports = h
	}, function(t, e, i) {
		"use strict";

		function n(t, e, i) {
			var n = e.getItemModel(i),
				a = n.getModel(h),
				o = e.getItemVisual(i, "color"),
				s = e.getItemVisual(i, "borderColor"),
				l = a.getItemStyle(["color", "color0", "borderColor", "borderColor0"]),
				c = t.childAt(t.whiskerIndex);
			c.style.set(l), c.style.stroke = s, c.dirty();
			var d = t.childAt(t.bodyIndex);
			d.style.set(l), d.style.fill = o, d.style.stroke = s, d.dirty();
			var f = n.getModel(u).getItemStyle();
			r.setHoverStyle(t, f)
		}
		var a = i(1),
			o = i(25),
			r = i(3),
			s = i(159),
			l = o.extend({
				type: "candlestick",
				getStyleUpdater: function() {
					return n
				}
			});
		a.mixin(l, s.viewMixin, !0);
		var h = ["itemStyle", "normal"],
			u = ["itemStyle", "emphasis"];
		t.exports = l
	}, function(t, e) {
		function i(t, e) {
			var i, r = t.getBaseAxis(),
				s = "category" === r.type ? r.getBandWidth() : (i = r.getExtent(), Math.abs(i[1] - i[0]) / e.count());
			return s / 2 - 2 > a ? s / 2 - 2 : s - a > o ? a : Math.max(s - o, n)
		}
		var n = 2,
			a = 5,
			o = 4;
		t.exports = function(t, e) {
			t.eachSeriesByType("candlestick", function(t) {
				var e = t.coordinateSystem,
					n = t.getData(),
					a = t.dimensions,
					o = t.get("layout"),
					r = i(t, n);
				n.each(a, function() {
					function t(t) {
						var i = [];
						return i[c] = h, i[d] = t, isNaN(h) || isNaN(t) ? [NaN, NaN] : e.dataToPoint(i)
					}
					function i(t, e) {
						var i = t.slice(),
							n = t.slice();
						i[c] += r / 2, n[c] -= r / 2, e ? S.push(i, n) : S.push(n, i)
					}
					var s = arguments,
						l = a.length,
						h = s[0],
						u = s[l],
						c = "horizontal" === o ? 0 : 1,
						d = 1 - c,
						f = s[1],
						p = s[2],
						g = s[3],
						m = s[4],
						v = Math.min(f, p),
						y = Math.max(f, p),
						x = t(v),
						_ = t(y),
						w = t(g),
						b = t(m),
						M = [
							[b, _],
							[w, x]
						],
						S = [];
					i(_, 0), i(x, 1), n.setItemLayout(u, {
						chartLayout: o,
						sign: f > p ? -1 : p > f ? 1 : 0,
						initBaseline: f > p ? _[d] : x[d],
						bodyEnds: S,
						whiskerEnds: M
					})
				}, !0)
			})
		}
	}, function(t, e) {
		var i = ["itemStyle", "normal", "borderColor"],
			n = ["itemStyle", "normal", "borderColor0"],
			a = ["itemStyle", "normal", "color"],
			o = ["itemStyle", "normal", "color0"];
		t.exports = function(t, e) {
			t.eachRawSeriesByType("candlestick", function(e) {
				var r = e.getData();
				r.setVisual({
					legendSymbol: "roundRect"
				}), t.isSeriesFiltered(e) || r.each(function(t) {
					var e = r.getItemModel(t),
						s = r.getItemLayout(t).sign;
					r.setItemVisual(t, {
						color: e.get(s > 0 ? a : o),
						borderColor: e.get(s > 0 ? i : n)
					})
				})
			})
		}
	}, function(t, e, i) {
		var n = i(1);
		t.exports = function(t) {
			t && n.isArray(t.series) && n.each(t.series, function(t) {
				n.isObject(t) && "k" === t.type && (t.type = "candlestick")
			})
		}
	}, function(t, e, i) {
		var n = i(1),
			a = i(2);
		i(236), i(237), a.registerVisualCoding("chart", n.curry(i(44), "effectScatter", "circle", null)), a.registerLayout(n.curry(i(53), "effectScatter"))
	}, function(t, e, i) {
		"use strict";
		var n = i(36),
			a = i(13);
		t.exports = a.extend({
			type: "series.effectScatter",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, e) {
				var i = n(t.data, this, e);
				return i
			},
			defaultOption: {
				coordinateSystem: "cartesian2d",
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				effectType: "ripple",
				showEffectOn: "render",
				rippleEffect: {
					period: 4,
					scale: 2.5,
					brushType: "fill"
				},
				xAxisIndex: 0,
				yAxisIndex: 0,
				polarIndex: 0,
				geoIndex: 0,
				symbolSize: 10
			}
		})
	}, function(t, e, i) {
		var n = i(38),
			a = i(262);
		i(2).extendChartView({
			type: "effectScatter",
			init: function() {
				this._symbolDraw = new n(a)
			},
			render: function(t, e, i) {
				var n = t.getData(),
					a = this._symbolDraw;
				a.updateData(n), this.group.add(a.group)
			},
			updateLayout: function() {
				this._symbolDraw.updateLayout()
			},
			remove: function(t, e) {
				this._symbolDraw && this._symbolDraw.remove(e)
			}
		})
	}, function(t, e, i) {
		var n = i(1),
			a = i(2);
		i(239), i(240), a.registerVisualCoding("chart", n.curry(i(63), "funnel")), a.registerLayout(i(241)), a.registerProcessor("filter", n.curry(i(62), "funnel"))
	}, function(t, e, i) {
		"use strict";
		var n = i(14),
			a = i(7),
			o = i(31),
			r = i(2).extendSeriesModel({
				type: "series.funnel",
				init: function(t) {
					r.superApply(this, "init", arguments), this.legendDataProvider = function() {
						return this._dataBeforeProcessed
					}, this._defaultLabelLine(t)
				},
				getInitialData: function(t, e) {
					var i = o(["value"], t.data),
						a = new n(i, this);
					return a.initData(t.data), a
				},
				_defaultLabelLine: function(t) {
					a.defaultEmphasis(t.labelLine, ["show"]);
					var e = t.labelLine.normal,
						i = t.labelLine.emphasis;
					e.show = e.show && t.label.normal.show, i.show = i.show && t.label.emphasis.show
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					legendHoverLink: !0,
					left: 80,
					top: 60,
					right: 80,
					bottom: 60,
					minSize: "0%",
					maxSize: "100%",
					sort: "descending",
					gap: 0,
					funnelAlign: "center",
					label: {
						normal: {
							show: !0,
							position: "outer"
						},
						emphasis: {
							show: !0
						}
					},
					labelLine: {
						normal: {
							show: !0,
							length: 20,
							lineStyle: {
								width: 1,
								type: "solid"
							}
						},
						emphasis: {}
					},
					itemStyle: {
						normal: {
							borderColor: "#fff",
							borderWidth: 1
						},
						emphasis: {}
					}
				}
			});
		t.exports = r
	}, function(t, e, i) {
		function n(t, e) {
			function i() {
				r.ignore = r.hoverIgnore, s.ignore = s.hoverIgnore
			}
			function n() {
				r.ignore = r.normalIgnore, s.ignore = s.normalIgnore
			}
			o.Group.call(this);
			var a = new o.Polygon,
				r = new o.Polyline,
				s = new o.Text;
			this.add(a), this.add(r), this.add(s), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
		}
		function a(t, e, i, n) {
			var a = n.getModel("textStyle"),
				o = n.get("position"),
				s = "inside" === o || "inner" === o || "center" === o;
			return {
				fill: a.getTextColor() || (s ? "#fff" : t.getItemVisual(e, "color")),
				textFont: a.getFont(),
				text: r.retrieve(t.hostModel.getFormattedLabel(e, i), t.getName(e))
			}
		}
		var o = i(3),
			r = i(1),
			s = n.prototype,
			l = ["itemStyle", "normal", "opacity"];
		s.updateData = function(t, e, i) {
			var n = this.childAt(0),
				a = t.hostModel,
				s = t.getItemModel(e),
				h = t.getItemLayout(e),
				u = t.getItemModel(e).get(l);
			u = null == u ? 1 : u, i ? (n.setShape({
				points: h.points
			}), n.setStyle({
				opacity: 0
			}), o.initProps(n, {
				style: {
					opacity: u
				}
			}, a)) : o.updateProps(n, {
				style: {
					opacity: u
				},
				shape: {
					points: h.points
				}
			}, a);
			var c = s.getModel("itemStyle"),
				d = t.getItemVisual(e, "color");
			n.setStyle(r.defaults({
				fill: d
			}, c.getModel("normal").getItemStyle(["opacity"]))), n.hoverStyle = c.getModel("emphasis").getItemStyle(), this._updateLabel(t, e), o.setHoverStyle(this)
		}, s._updateLabel = function(t, e) {
			var i = this.childAt(1),
				n = this.childAt(2),
				r = t.hostModel,
				s = t.getItemModel(e),
				l = t.getItemLayout(e),
				h = l.label,
				u = t.getItemVisual(e, "color");
			o.updateProps(i, {
				shape: {
					points: h.linePoints || h.linePoints
				}
			}, r), o.updateProps(n, {
				style: {
					x: h.x,
					y: h.y
				}
			}, r), n.attr({
				style: {
					textAlign: h.textAlign,
					textVerticalAlign: h.verticalAlign,
					textFont: h.font
				},
				rotation: h.rotation,
				origin: [h.x, h.y],
				z2: 10
			});
			var c = s.getModel("label.normal"),
				d = s.getModel("label.emphasis"),
				f = s.getModel("labelLine.normal"),
				p = s.getModel("labelLine.emphasis");
			n.setStyle(a(t, e, "normal", c)), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), i.ignore = i.normalIgnore = !f.get("show"), i.hoverIgnore = !p.get("show"), i.setStyle({
				stroke: u
			}), i.setStyle(f.getModel("lineStyle").getLineStyle()), n.hoverStyle = a(t, e, "emphasis", d), i.hoverStyle = p.getModel("lineStyle").getLineStyle()
		}, r.inherits(n, o.Group);
		var h = i(25).extend({
			type: "funnel",
			render: function(t, e, i) {
				var a = t.getData(),
					o = this._data,
					r = this.group;
				a.diff(o).add(function(t) {
					var e = new n(a, t);
					a.setItemGraphicEl(t, e), r.add(e)
				}).update(function(t, e) {
					var i = o.getItemGraphicEl(e);
					i.updateData(a, t), r.add(i), a.setItemGraphicEl(t, i)
				}).remove(function(t) {
					var e = o.getItemGraphicEl(t);
					r.remove(e)
				}).execute(), this._data = a
			},
			remove: function() {
				this.group.removeAll(), this._data = null
			}
		});
		t.exports = h
	}, function(t, e, i) {
		function n(t, e) {
			return r.getLayoutRect(t.getBoxLayoutParams(), {
				width: e.getWidth(),
				height: e.getHeight()
			})
		}
		function a(t, e) {
			for (var i = t.mapArray("value", function(t) {
				return t
			}), n = [], a = "ascending" === e, o = 0, r = t.count(); r > o; o++) n[o] = o;
			return n.sort(function(t, e) {
				return a ? i[t] - i[e] : i[e] - i[t]
			}), n
		}
		function o(t) {
			t.each(function(e) {
				var i, n, a, o, r = t.getItemModel(e),
					s = r.getModel("label.normal"),
					l = s.get("position"),
					h = r.getModel("labelLine.normal"),
					u = t.getItemLayout(e),
					c = u.points,
					d = "inner" === l || "inside" === l || "center" === l;
				if (d) n = (c[0][0] + c[1][0] + c[2][0] + c[3][0]) / 4, a = (c[0][1] + c[1][1] + c[2][1] + c[3][1]) / 4, i = "center", o = [
					[n, a],
					[n, a]
				];
				else {
					var f, p, g, m = h.get("length");
					"left" === l ? (f = (c[3][0] + c[0][0]) / 2, p = (c[3][1] + c[0][1]) / 2, g = f - m, n = g - 5, i = "right") : (f = (c[1][0] + c[2][0]) / 2, p = (c[1][1] + c[2][1]) / 2, g = f + m, n = g + 5, i = "left");
					var v = p;
					o = [
						[f, p],
						[g, v]
					], a = v
				}
				u.label = {
					linePoints: o,
					x: n,
					y: a,
					verticalAlign: "middle",
					textAlign: i,
					inside: d
				}
			})
		}
		var r = i(11),
			s = i(4),
			l = s.parsePercent;
		t.exports = function(t, e) {
			t.eachSeriesByType("funnel", function(t) {
				var i = t.getData(),
					r = t.get("sort"),
					h = n(t, e),
					u = a(i, r),
					c = [l(t.get("minSize"), h.width), l(t.get("maxSize"), h.width)],
					d = i.getDataExtent("value"),
					f = t.get("min"),
					p = t.get("max");
				null == f && (f = Math.min(d[0], 0)), null == p && (p = d[1]);
				var g = t.get("funnelAlign"),
					m = t.get("gap"),
					v = (h.height - m * (i.count() - 1)) / i.count(),
					y = h.y,
					x = function(t, e) {
						var n, a = i.get("value", t) || 0,
							o = s.linearMap(a, [f, p], c, !0);
						switch (g) {
						case "left":
							n = h.x;
							break;
						case "center":
							n = h.x + (h.width - o) / 2;
							break;
						case "right":
							n = h.x + h.width - o
						}
						return [[n, e], [n + o, e]]
					};
				"ascending" === r && (v = -v, m = -m, y += h.height, u = u.reverse());
				for (var _ = 0; _ < u.length; _++) {
					var w = u[_],
						b = u[_ + 1],
						M = x(w, y),
						S = x(b, y + v);
					y += v + m, i.setItemLayout(w, {
						points: M.concat(S.slice().reverse())
					})
				}
				o(i)
			})
		}
	}, function(t, e, i) {
		i(243), i(244)
	}, function(t, e, i) {
		var n = i(14),
			a = i(13),
			o = i(1),
			r = a.extend({
				type: "series.gauge",
				getInitialData: function(t, e) {
					var i = new n(["value"], this),
						a = t.data || [];
					return o.isArray(a) || (a = [a]), i.initData(a), i
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					center: ["50%", "50%"],
					legendHoverLink: !0,
					radius: "75%",
					startAngle: 225,
					endAngle: -45,
					clockwise: !0,
					min: 0,
					max: 100,
					splitNumber: 10,
					axisLine: {
						show: !0,
						lineStyle: {
							color: [
								[.2, "#91c7ae"],
								[.8, "#63869e"],
								[1, "#c23531"]
							],
							width: 30
						}
					},
					splitLine: {
						show: !0,
						length: 30,
						lineStyle: {
							color: "#eee",
							width: 2,
							type: "solid"
						}
					},
					axisTick: {
						show: !0,
						splitNumber: 5,
						length: 8,
						lineStyle: {
							color: "#eee",
							width: 1,
							type: "solid"
						}
					},
					axisLabel: {
						show: !0,
						textStyle: {
							color: "auto"
						}
					},
					pointer: {
						show: !0,
						length: "80%",
						width: 8
					},
					itemStyle: {
						normal: {
							color: "auto"
						}
					},
					title: {
						show: !0,
						offsetCenter: [0, "-40%"],
						textStyle: {
							color: "#333",
							fontSize: 15
						}
					},
					detail: {
						show: !0,
						backgroundColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						borderColor: "#ccc",
						width: 100,
						height: 40,
						offsetCenter: [0, "40%"],
						textStyle: {
							color: "auto",
							fontSize: 30
						}
					}
				}
			});
		t.exports = r
	}, function(t, e, i) {
		function n(t, e) {
			var i = t.get("center"),
				n = e.getWidth(),
				a = e.getHeight(),
				o = Math.min(n, a),
				r = l(i[0], e.getWidth()),
				s = l(i[1], e.getHeight()),
				h = l(t.get("radius"), o / 2);
			return {
				cx: r,
				cy: s,
				r: h
			}
		}
		function a(t, e) {
			return e && ("string" == typeof e ? t = e.replace("{value}", t) : "function" == typeof e && (t = e(t))), t
		}
		var o = i(245),
			r = i(3),
			s = i(4),
			l = s.parsePercent,
			h = 2 * Math.PI,
			u = i(25).extend({
				type: "gauge",
				render: function(t, e, i) {
					this.group.removeAll();
					var a = t.get("axisLine.lineStyle.color"),
						o = n(t, i);
					this._renderMain(t, e, i, a, o)
				},
				_renderMain: function(t, e, i, n, a) {
					for (var o = this.group, s = t.getModel("axisLine"), l = s.getModel("lineStyle"), u = t.get("clockwise"), c = -t.get("startAngle") / 180 * Math.PI, d = -t.get("endAngle") / 180 * Math.PI, f = (d - c) % h, p = c, g = l.get("width"), m = 0; m < n.length; m++) {
						var d = c + f * n[m][0],
							v = new r.Sector({
								shape: {
									startAngle: p,
									endAngle: d,
									cx: a.cx,
									cy: a.cy,
									clockwise: u,
									r0: a.r - g,
									r: a.r
								},
								silent: !0
							});
						v.setStyle({
							fill: n[m][1]
						}), v.setStyle(l.getLineStyle(["color", "borderWidth", "borderColor"])), o.add(v), p = d
					}
					var y = function(t) {
							if (0 >= t) return n[0][1];
							for (var e = 0; e < n.length; e++) if (n[e][0] >= t && (0 === e ? 0 : n[e - 1][0]) < t) return n[e][1];
							return n[e - 1][1]
						};
					if (!u) {
						var x = c;
						c = d, d = x
					}
					this._renderTicks(t, e, i, y, a, c, d, u), this._renderPointer(t, e, i, y, a, c, d, u), this._renderTitle(t, e, i, y, a), this._renderDetail(t, e, i, y, a)
				},
				_renderTicks: function(t, e, i, n, o, h, u, c) {
					for (var d = this.group, f = o.cx, p = o.cy, g = o.r, m = t.get("min"), v = t.get("max"), y = t.getModel("splitLine"), x = t.getModel("axisTick"), _ = t.getModel("axisLabel"), w = t.get("splitNumber"), b = x.get("splitNumber"), M = l(y.get("length"), g), S = l(x.get("length"), g), A = h, I = (u - h) / w, T = I / b, C = y.getModel("lineStyle").getLineStyle(), L = x.getModel("lineStyle").getLineStyle(), D = _.getModel("textStyle"), P = 0; w >= P; P++) {
						var k = Math.cos(A),
							z = Math.sin(A);
						if (y.get("show")) {
							var R = new r.Line({
								shape: {
									x1: k * g + f,
									y1: z * g + p,
									x2: k * (g - M) + f,
									y2: z * (g - M) + p
								},
								style: C,
								silent: !0
							});
							"auto" === C.stroke && R.setStyle({
								stroke: n(P / w)
							}), d.add(R)
						}
						if (_.get("show")) {
							var O = a(s.round(P / w * (v - m) + m), _.get("formatter")),
								E = new r.Text({
									style: {
										text: O,
										x: k * (g - M - 5) + f,
										y: z * (g - M - 5) + p,
										fill: D.getTextColor(),
										textFont: D.getFont(),
										textVerticalAlign: -.4 > z ? "top" : z > .4 ? "bottom" : "middle",
										textAlign: -.4 > k ? "left" : k > .4 ? "right" : "center"
									},
									silent: !0
								});
							"auto" === E.style.fill && E.setStyle({
								fill: n(P / w)
							}), d.add(E)
						}
						if (x.get("show") && P !== w) {
							for (var V = 0; b >= V; V++) {
								var k = Math.cos(A),
									z = Math.sin(A),
									N = new r.Line({
										shape: {
											x1: k * g + f,
											y1: z * g + p,
											x2: k * (g - S) + f,
											y2: z * (g - S) + p
										},
										silent: !0,
										style: L
									});
								"auto" === L.stroke && N.setStyle({
									stroke: n((P + V / b) / w)
								}), d.add(N), A += T
							}
							A -= T
						} else A += I
					}
				},
				_renderPointer: function(t, e, i, n, a, h, u, c) {
					var d = s.linearMap,
						f = [+t.get("min"), +t.get("max")],
						p = [h, u];
					c || (p = p.reverse());
					var g = t.getData(),
						m = this._data,
						v = this.group;
					g.diff(m).add(function(e) {
						var i = new o({
							shape: {
								angle: h
							}
						});
						r.updateProps(i, {
							shape: {
								angle: d(g.get("value", e), f, p)
							}
						}, t), v.add(i), g.setItemGraphicEl(e, i)
					}).update(function(e, i) {
						var n = m.getItemGraphicEl(i);
						r.updateProps(n, {
							shape: {
								angle: d(g.get("value", e), f, p)
							}
						}, t), v.add(n), g.setItemGraphicEl(e, n)
					}).remove(function(t) {
						var e = m.getItemGraphicEl(t);
						v.remove(e)
					}).execute(), g.eachItemGraphicEl(function(t, e) {
						var i = g.getItemModel(e),
							o = i.getModel("pointer");
						t.attr({
							shape: {
								x: a.cx,
								y: a.cy,
								width: l(o.get("width"), a.r),
								r: l(o.get("length"), a.r)
							},
							style: i.getModel("itemStyle.normal").getItemStyle()
						}), "auto" === t.style.fill && t.setStyle("fill", n((g.get("value", e) - f[0]) / (f[1] - f[0]))), r.setHoverStyle(t, i.getModel("itemStyle.emphasis").getItemStyle())
					}), this._data = g
				},
				_renderTitle: function(t, e, i, n, a) {
					var o = t.getModel("title");
					if (o.get("show")) {
						var s = o.getModel("textStyle"),
							h = o.get("offsetCenter"),
							u = a.cx + l(h[0], a.r),
							c = a.cy + l(h[1], a.r),
							d = new r.Text({
								style: {
									x: u,
									y: c,
									text: t.getData().getName(0),
									fill: s.getTextColor(),
									textFont: s.getFont(),
									textAlign: "center",
									textVerticalAlign: "middle"
								}
							});
						this.group.add(d)
					}
				},
				_renderDetail: function(t, e, i, n, o) {
					var s = t.getModel("detail"),
						h = t.get("min"),
						u = t.get("max");
					if (s.get("show")) {
						var c = s.getModel("textStyle"),
							d = s.get("offsetCenter"),
							f = o.cx + l(d[0], o.r),
							p = o.cy + l(d[1], o.r),
							g = l(s.get("width"), o.r),
							m = l(s.get("height"), o.r),
							v = t.getData().get("value", 0),
							y = new r.Rect({
								shape: {
									x: f - g / 2,
									y: p - m / 2,
									width: g,
									height: m
								},
								style: {
									text: a(v, s.get("formatter")),
									fill: s.get("backgroundColor"),
									textFill: c.getTextColor(),
									textFont: c.getFont()
								}
							});
						"auto" === y.style.textFill && y.setStyle("textFill", n((v - h) / (u - h))), y.setStyle(s.getItemStyle(["color"])), this.group.add(y)
					}
				}
			});
		t.exports = u
	}, function(t, e, i) {
		t.exports = i(6).extend({
			type: "echartsGaugePointer",
			shape: {
				angle: 0,
				width: 10,
				r: 10,
				x: 0,
				y: 0
			},
			buildPath: function(t, e) {
				var i = Math.cos,
					n = Math.sin,
					a = e.r,
					o = e.width,
					r = e.angle,
					s = e.x - i(r) * o * (o >= a / 3 ? 1 : 2),
					l = e.y - n(r) * o * (o >= a / 3 ? 1 : 2);
				r = e.angle - Math.PI / 2, t.moveTo(s, l), t.lineTo(e.x + i(r) * o, e.y + n(r) * o), t.lineTo(e.x + i(e.angle) * a, e.y + n(e.angle) * a), t.lineTo(e.x - i(r) * o, e.y - n(r) * o), t.lineTo(s, l)
			}
		})
	}, function(t, e, i) {
		var n = i(2),
			a = i(1);
		i(247), i(248), i(255), n.registerProcessor("filter", i(249)), n.registerVisualCoding("chart", a.curry(i(44), "graph", "circle", null)), n.registerVisualCoding("chart", i(250)), n.registerLayout(i(256)), n.registerLayout(i(251)), n.registerLayout(i(254)), n.registerCoordinateSystem("graphView", {
			create: i(252)
		})
	}, function(t, e, i) {
		"use strict";
		var n = i(14),
			a = i(1),
			o = i(209),
			r = i(2).extendSeriesModel({
				type: "series.graph",
				init: function(t) {
					r.superApply(this, "init", arguments), this.legendDataProvider = function() {
						return this._categoriesData
					}, this._updateCategoriesData()
				},
				mergeOption: function(t) {
					r.superApply(this, "mergeOption", arguments), this._updateCategoriesData()
				},
				getInitialData: function(t, e) {
					var i = t.edges || t.links,
						n = t.data || t.nodes;
					if (n && i) {
						var a = o(n, i, this, !0),
							r = a.data,
							s = this;
						return r.wrapMethod("getItemModel", function(t) {
							var e = s._categoriesModels,
								i = t.getShallow("category"),
								n = e[i];
							return n && (n.parentModel = t.parentModel, t.parentModel = n), t
						}), r
					}
				},
				restoreData: function() {
					r.superApply(this, "restoreData", arguments), this.getGraph().restoreData()
				},
				getGraph: function() {
					return this.getData().graph
				},
				getEdgeData: function() {
					return this.getGraph().edgeData
				},
				getCategoriesData: function() {
					return this._categoriesData
				},
				_updateCategoriesData: function() {
					var t = a.map(this.option.categories || [], function(t) {
						return null != t.value ? t : a.extend({
							value: 0
						}, t)
					}),
						e = new n(["value"], this);
					e.initData(t), this._categoriesData = e, this._categoriesModels = e.mapArray(function(t) {
						return e.getItemModel(t, !0)
					})
				},
				setRoamZoom: function(t) {
					var e = this.option.roamDetail;
					e && (e.zoom = t)
				},
				setRoamPan: function(t, e) {
					var i = this.option.roamDetail;
					i && (i.x = t, i.y = e)
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					color: ["#61a0a8", "#d14a61", "#fd9c35", "#675bba", "#fec42c", "#dd4444", "#fd9c35", "#cd4870"],
					coordinateSystem: "view",
					legendHoverLink: !0,
					hoverAnimation: !0,
					layout: null,
					force: {
						initLayout: null,
						repulsion: 50,
						gravity: .1,
						edgeLength: 30,
						layoutAnimation: !0
					},
					left: "center",
					top: "center",
					symbol: "circle",
					symbolSize: 10,
					draggable: !1,
					roam: !1,
					roamDetail: {
						x: 0,
						y: 0,
						zoom: 1
					},
					nodeScaleRatio: .6,
					label: {
						normal: {
							show: !1
						},
						emphasis: {
							show: !0
						}
					},
					itemStyle: {
						normal: {},
						emphasis: {}
					},
					lineStyle: {
						normal: {
							color: "#aaa",
							width: 1,
							curveness: 0,
							opacity: .5
						},
						emphasis: {}
					}
				}
			});
		t.exports = r
	}, function(t, e, i) {
		var n = i(38),
			a = i(84),
			o = i(70),
			r = i(7),
			s = i(3);
		i(2).extendChartView({
			type: "graph",
			init: function(t, e) {
				var i = new n,
					r = new a,
					s = this.group,
					l = new o(e.getZr(), s);
				s.add(i.group), s.add(r.group), this._symbolDraw = i, this._lineDraw = r, this._controller = l, this._firstRender = !0
			},
			render: function(t, e, i) {
				var n = t.coordinateSystem;
				if ("geo" === n.type || "view" === n.type) {
					var a = t.getData();
					this._model = t;
					var o = this._symbolDraw,
						l = this._lineDraw;
					o.updateData(a);
					var h = a.graph.edgeData,
						u = t.option,
						c = r.createDataFormatModel(t, h, u.edges || u.links);
					c.formatTooltip = function(t) {
						var e = this.getDataParams(t),
							i = a.graph.getEdgeByIndex(t),
							n = a.getName(i.node1.dataIndex),
							o = a.getName(i.node2.dataIndex),
							r = n + " > " + o;
						return e.value && (r += " : " + e.value), r
					}, l.updateData(h, null, null), h.eachItemGraphicEl(function(t) {
						t.traverse(function(t) {
							t.dataModel = c
						})
					});
					var d = this.group,
						f = {
							position: n.position,
							scale: n.scale
						};
					this._firstRender ? d.attr(f) : s.updateProps(d, f, t), this._nodeScaleRatio = t.get("nodeScaleRatio"), this._updateNodeAndLinkScale(), this._updateController(t, n, i), clearTimeout(this._layoutTimeout);
					var p = t.forceLayout,
						g = t.get("force.layoutAnimation");
					p && this._startForceLayoutIteration(p, g), a.eachItemGraphicEl(function(t, e) {
						var i = a.getItemModel(e).get("draggable");
						i && p ? t.on("drag", function() {
							p.warmUp(), !this._layouting && this._startForceLayoutIteration(p, g), p.setFixed(e), a.setItemLayout(e, t.position)
						}, this).on("dragend", function() {
							p.setUnfixed(e)
						}, this) : t.off("drag"), t.setDraggable(i)
					}, this), this._firstRender = !1
				}
			},
			_startForceLayoutIteration: function(t, e) {
				var i = this;
				!
				function n() {
					t.step(function(t) {
						i.updateLayout(), (i._layouting = !t) && (e ? i._layoutTimeout = setTimeout(n, 16) : n())
					})
				}()
			},
			_updateController: function(t, e, i) {
				var n = this._controller;
				n.rect = e.getViewRect(), n.enable(t.get("roam")), n.off("pan").off("zoom").on("pan", function(e, n) {
					i.dispatchAction({
						seriesId: t.id,
						type: "graphRoam",
						dx: e,
						dy: n
					})
				}).on("zoom", function(e, n, a) {
					i.dispatchAction({
						seriesId: t.id,
						type: "graphRoam",
						zoom: e,
						originX: n,
						originY: a
					})
				}).on("zoom", this._updateNodeAndLinkScale, this)
			},
			_updateNodeAndLinkScale: function() {
				var t = this._model,
					e = t.getData(),
					i = this.group,
					n = this._nodeScaleRatio,
					a = i.scale[0],
					o = (a - 1) * n + 1,
					r = [o / a, o / a];
				e.eachItemGraphicEl(function(t, e) {
					t.attr("scale", r)
				})
			},
			updateLayout: function(t, e) {
				this._symbolDraw.updateLayout(), this._lineDraw.updateLayout()
			},
			remove: function(t, e) {
				this._symbolDraw && this._symbolDraw.remove(), this._lineDraw && this._lineDraw.remove()
			}
		})
	}, function(t, e) {
		t.exports = function(t) {
			var e = t.findComponents({
				mainType: "legend"
			});
			e && e.length && t.eachSeriesByType("graph", function(t) {
				var i = t.getCategoriesData(),
					n = t.getGraph(),
					a = n.data,
					o = i.mapArray(i.getName);
				a.filterSelf(function(t) {
					var i = a.getItemModel(t),
						n = i.getShallow("category");
					if (null != n) {
						"number" == typeof n && (n = o[n]);
						for (var r = 0; r < e.length; r++) if (!e[r].isSelected(n)) return !1
					}
					return !0
				})
			}, this)
		}
	}, function(t, e) {
		t.exports = function(t) {
			t.eachSeriesByType("graph", function(t) {
				var e = t.get("color"),
					i = t.getCategoriesData(),
					n = t.getData(),
					a = {};
				i.each(function(t) {
					a[i.getName(t)] = t;
					var n = i.getItemModel(t),
						o = i.getRawIndex(t),
						r = n.get("itemStyle.normal.color") || e[o % e.length];
					i.setItemVisual(t, "color", r)
				}), i.count() && n.each(function(t) {
					var e = n.getItemModel(t),
						o = e.getShallow("category");
					null != o && ("string" == typeof o && (o = a[o]), n.setItemVisual(t, "color", i.getItemVisual(o, "color")))
				})
			})
		}
	}, function(t, e, i) {
		var n = i(207);
		t.exports = function(t, e) {
			t.eachSeriesByType("graph", function(t) {
				"circular" === t.get("layout") && n(t)
			})
		}
	}, function(t, e, i) {
		function n(t, e, i) {
			var n = t.getBoxLayoutParams();
			return n.aspect = i, o.getLayoutRect(n, {
				width: e.getWidth(),
				height: e.getHeight()
			})
		}
		var a = i(219),
			o = i(11),
			r = i(64);
		t.exports = function(t, e) {
			var i = [];
			return t.eachSeriesByType("graph", function(t) {
				var o = t.get("coordinateSystem");
				if (!o || "view" === o) {
					var s = new a;
					i.push(s);
					var l = t.getData(),
						h = l.mapArray(function(t) {
							var e = l.getItemModel(t);
							return [+e.get("x"), +e.get("y")]
						}),
						u = [],
						c = [];
					r.fromPoints(h, u, c);
					var d = n(t, e, (c[0] - u[0]) / (c[1] - u[1]) || 1);
					(isNaN(u[0]) || isNaN(u[1])) && (u = [d.x, d.y], c = [d.x + d.width, d.y + d.height]);
					var f = c[0] - u[0],
						p = c[1] - u[1],
						g = d.width,
						m = d.height;
					s = t.coordinateSystem = new a, s.setBoundingRect(u[0], u[1], f, p), s.setViewRect(d.x, d.y, g, m);
					var v = t.getModel("roamDetail");
					s.setPan(v.get("x") || 0, v.get("y") || 0), s.setZoom(v.get("zoom") || 1)
				}
			}), i
		}
	}, function(t, e, i) {
		var n = i(5),
			a = n.scaleAndAdd;
		t.exports = function(t, e, i) {
			for (var o = i.rect, r = o.width, s = o.height, l = [o.x + r / 2, o.y + s / 2], h = null == i.gravity ? .1 : i.gravity, u = 0; u < t.length; u++) {
				var c = t[u];
				c.p || (c.p = n.create(r * (Math.random() - .5) + l[0], s * (Math.random() - .5) + l[1])), c.pp = n.clone(c.p), c.edges = null
			}
			var d = .6;
			return {
				warmUp: function() {
					d = .5
				},
				setFixed: function(e) {
					t[e].fixed = !0
				},
				setUnfixed: function(e) {
					t[e].fixed = !1
				},
				step: function(i) {
					for (var o = [], r = t.length, s = 0; s < e.length; s++) {
						var u = e[s],
							c = u.n1,
							f = u.n2;
						n.sub(o, f.p, c.p);
						var p = n.len(o) - u.d,
							g = f.w / (c.w + f.w);
						n.normalize(o, o), !c.fixed && a(c.p, c.p, o, g * p * d), !f.fixed && a(f.p, f.p, o, -(1 - g) * p * d)
					}
					for (var s = 0; r > s; s++) {
						var m = t[s];
						m.fixed || (n.sub(o, l, m.p), n.scaleAndAdd(m.p, m.p, o, h * d))
					}
					for (var s = 0; r > s; s++) for (var c = t[s], v = s + 1; r > v; v++) {
						var f = t[v];
						n.sub(o, f.p, c.p);
						var p = n.len(o);
						0 === p && (n.set(o, Math.random() - .5, Math.random() - .5), p = 1);
						var y = (c.rep + f.rep) / p / p;
						!c.fixed && a(c.pp, c.pp, o, y), !f.fixed && a(f.pp, f.pp, o, -y)
					}
					for (var x = [], s = 0; r > s; s++) {
						var m = t[s];
						m.fixed || (n.sub(x, m.p, m.pp), n.scaleAndAdd(m.p, m.p, x, d), n.copy(m.pp, m.p))
					}
					d = .992 * d, i && i(t, e, .01 > d)
				}
			}
		}
	}, function(t, e, i) {
		var n = i(253),
			a = i(4),
			o = i(208),
			r = i(207),
			s = i(5);
		t.exports = function(t, e) {
			t.eachSeriesByType("graph", function(t) {
				if ("force" === t.get("layout")) {
					var e = t.preservedPoints || {},
						i = t.getGraph(),
						l = i.data,
						h = i.edgeData,
						u = t.getModel("force"),
						c = u.get("initLayout");
					t.preservedPoints ? l.each(function(t) {
						var i = l.getId(t);
						l.setItemLayout(t, e[i] || [NaN, NaN])
					}) : c && "none" !== c ? "circular" === c && r(t) : o(t);
					var d = l.getDataExtent("value"),
						f = u.get("repulsion"),
						p = u.get("edgeLength"),
						g = l.mapArray("value", function(t, e) {
							var i = l.getItemLayout(e),
								n = a.linearMap(t, d, [0, f]) || f / 2;
							return {
								w: n,
								rep: n,
								p: !i || isNaN(i[0]) || isNaN(i[1]) ? null : i
							}
						}),
						m = h.mapArray("value", function(t, e) {
							var n = i.getEdgeByIndex(e);
							return {
								n1: g[n.node1.dataIndex],
								n2: g[n.node2.dataIndex],
								d: p,
								curveness: n.getModel().get("lineStyle.normal.curveness") || 0
							}
						}),
						v = t.coordinateSystem,
						y = v.getBoundingRect(),
						x = n(g, m, {
							rect: y,
							gravity: u.get("gravity")
						}),
						_ = x.step;
					x.step = function(t) {
						for (var n = 0, a = g.length; a > n; n++) g[n].fixed && s.copy(g[n].p, i.getNodeByIndex(n).getLayout());
						_(function(n, a, o) {
							for (var r = 0, s = n.length; s > r; r++) n[r].fixed || i.getNodeByIndex(r).setLayout(n[r].p), e[l.getId(r)] = n[r].p;
							for (var r = 0, s = a.length; s > r; r++) {
								var h = a[r],
									u = h.n1.p,
									c = h.n2.p,
									d = [u, c];
								h.curveness > 0 && d.push([(u[0] + c[0]) / 2 - (u[1] - c[1]) * h.curveness, (u[1] + c[1]) / 2 - (c[0] - u[0]) * h.curveness]), i.getEdgeByIndex(r).setLayout(d)
							}
							t && t(o)
						})
					}, t.forceLayout = x, t.preservedPoints = e, x.step()
				} else t.forceLayout = null
			})
		}
	}, function(t, e, i) {
		var n = i(2),
			a = i(206),
			o = {
				type: "graphRoam",
				event: "graphRoam",
				update: "none"
			};
		n.registerAction(o, function(t, e) {
			e.eachComponent({
				mainType: "series",
				query: t
			}, function(e) {
				var i = e.coordinateSystem,
					n = e.getModel("roamDetail"),
					o = a.calcPanAndZoom(n, t);
				e.setRoamPan && e.setRoamPan(o.x, o.y), e.setRoamZoom && e.setRoamZoom(o.zoom), i && i.setPan(o.x, o.y), i && i.setZoom(o.zoom)
			})
		})
	}, function(t, e, i) {
		var n = i(208);
		t.exports = function(t, e) {
			t.eachSeriesByType("graph", function(t) {
				var e = t.get("layout");
				e && "none" !== e || n(t)
			})
		}
	}, function(t, e, i) {
		i(259), i(260)
	}, function(t, e, i) {
		function n() {
			var t = o.createCanvas();
			this.canvas = t, this.blurSize = 30, this.pointSize = 20, this.maxOpacity = 1, this.minOpacity = 0, this._gradientPixels = {}
		}
		var a = 256,
			o = i(1);
		n.prototype = {
			update: function(t, e, i, n, o, r) {
				var s = this._getBrush(),
					l = this._getGradient(t, o, "inRange"),
					h = this._getGradient(t, o, "outOfRange"),
					u = this.pointSize + this.blurSize,
					c = this.canvas,
					d = c.getContext("2d"),
					f = t.length;
				c.width = e, c.height = i;
				for (var p = 0; f > p; ++p) {
					var g = t[p],
						m = g[0],
						v = g[1],
						y = g[2],
						x = n(y);
					d.globalAlpha = x, d.drawImage(s, m - u, v - u)
				}
				for (var _ = d.getImageData(0, 0, c.width, c.height), w = _.data, b = 0, M = w.length, S = this.minOpacity, A = this.maxOpacity, I = A - S; M > b;) {
					var x = w[b + 3] / 256,
						T = 4 * Math.floor(x * (a - 1));
					if (x > 0) {
						var C = r(x) ? l : h;
						x > 0 && (x = x * I + S), w[b++] = C[T], w[b++] = C[T + 1], w[b++] = C[T + 2], w[b++] = C[T + 3] * x * 256
					} else b += 4
				}
				return d.putImageData(_, 0, 0), c
			},
			_getBrush: function() {
				var t = this._brushCanvas || (this._brushCanvas = o.createCanvas()),
					e = this.pointSize + this.blurSize,
					i = 2 * e;
				t.width = i, t.height = i;
				var n = t.getContext("2d");
				return n.clearRect(0, 0, i, i), n.shadowOffsetX = i, n.shadowBlur = this.blurSize, n.shadowColor = "#000", n.beginPath(), n.arc(-e, e, this.pointSize, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), t
			},
			_getGradient: function(t, e, i) {
				for (var n = this._gradientPixels, a = n[i] || (n[i] = new Uint8ClampedArray(1024)), o = [], r = 0, s = 0; 256 > s; s++) e[i](s / 255, !0, o), a[r++] = o[0], a[r++] = o[1], a[r++] = o[2], a[r++] = o[3];
				return a
			}
		}, t.exports = n
	}, function(t, e, i) {
		var n = i(13),
			a = i(36);
		t.exports = n.extend({
			type: "series.heatmap",
			getInitialData: function(t, e) {
				return a(t.data, this, e)
			},
			defaultOption: {
				coordinateSystem: "cartesian2d",
				zlevel: 0,
				z: 2,
				xAxisIndex: 0,
				yAxisIndex: 0,
				geoIndex: 0,
				blurSize: 30,
				pointSize: 20,
				maxOpacity: 1,
				minOpacity: 0
			}
		})
	}, function(t, e, i) {
		function n(t, e, i) {
			var n = t[1] - t[0];
			e = l.map(e, function(e) {
				return {
					interval: [(e.interval[0] - t[0]) / n, (e.interval[1] - t[0]) / n]
				}
			});
			var a = e.length,
				o = 0;
			return function(t) {
				for (var n = o; a > n; n++) {
					var r = e[n].interval;
					if (r[0] <= t && t <= r[1]) {
						o = n;
						break
					}
				}
				if (n === a) for (var n = o - 1; n >= 0; n--) {
					var r = e[n].interval;
					if (r[0] <= t && t <= r[1]) {
						o = n;
						break
					}
				}
				return n >= 0 && a > n && i[n]
			}
		}
		function a(t, e) {
			var i = t[1] - t[0];
			return e = [(e[0] - t[0]) / i, (e[1] - t[0]) / i], function(t) {
				return t >= e[0] && t <= e[1]
			}
		}
		function o(t) {
			var e = t.dimensions;
			return "lng" === e[0] && "lat" === e[1]
		}
		var r = i(3),
			s = i(258),
			l = i(1);
		t.exports = i(2).extendChartView({
			type: "heatmap",
			render: function(t, e, i) {
				var n;
				if (e.eachComponent("visualMap", function(e) {
					e.eachTargetSeries(function(i) {
						i === t && (n = e)
					})
				}), !n) throw new Error("Heatmap must use with visualMap");
				this.group.removeAll();
				var a = t.coordinateSystem;
				"cartesian2d" === a.type ? this._renderOnCartesian(a, t, i) : o(a) && this._renderOnGeo(a, t, n, i)
			},
			_renderOnCartesian: function(t, e, i) {
				var n = t.getAxis("x"),
					a = t.getAxis("y"),
					o = this.group;
				if ("category" !== n.type || "category" !== a.type) throw new Error("Heatmap on cartesian must have two category axes");
				if (!n.onBand || !a.onBand) throw new Error("Heatmap on cartesian must have two axes with boundaryGap true");
				var s = n.getBandWidth(),
					l = a.getBandWidth(),
					h = e.getData();
				h.each(["x", "y", "z"], function(i, n, a, u) {
					var c = h.getItemModel(u),
						d = t.dataToPoint([i, n]);
					if (!isNaN(a)) {
						var f = new r.Rect({
							shape: {
								x: d[0] - s / 2,
								y: d[1] - l / 2,
								width: s,
								height: l
							},
							style: {
								fill: h.getItemVisual(u, "color")
							}
						}),
							p = c.getModel("itemStyle.normal").getItemStyle(["color"]),
							g = c.getModel("itemStyle.emphasis").getItemStyle(),
							m = c.getModel("label.normal"),
							v = c.getModel("label.emphasis"),
							y = e.getRawValue(u),
							x = "-";
						y && null != y[2] && (x = y[2]), m.get("show") && (r.setText(p, m), p.text = e.getFormattedLabel(u, "normal") || x), v.get("show") && (r.setText(g, v), g.text = e.getFormattedLabel(u, "emphasis") || x), f.setStyle(p), r.setHoverStyle(f, g), o.add(f), h.setItemGraphicEl(u, f)
					}
				})
			},
			_renderOnGeo: function(t, e, i, o) {
				var l = i.targetVisuals.inRange,
					h = i.targetVisuals.outOfRange,
					u = e.getData(),
					c = this._hmLayer || this._hmLayer || new s;
				c.blurSize = e.get("blurSize"), c.pointSize = e.get("pointSize"), c.minOpacity = e.get("minOpacity"), c.maxOpacity = e.get("maxOpacity");
				var d = t.getViewRect().clone(),
					f = t.getRoamTransform();
				d.applyTransform(f);
				var p = Math.max(d.x, 0),
					g = Math.max(d.y, 0),
					m = Math.min(d.width + d.x, o.getWidth()),
					v = Math.min(d.height + d.y, o.getHeight()),
					y = m - p,
					x = v - g,
					_ = u.mapArray(["lng", "lat", "value"], function(e, i, n) {
						var a = t.dataToPoint([e, i]);
						return a[0] -= p, a[1] -= g, a.push(n), a
					}),
					w = i.getExtent(),
					b = "visualMap.continuous" === i.type ? a(w, i.option.range) : n(w, i.getPieceList(), i.option.selected);
				c.update(_, y, x, l.color.getNormalizer(), {
					inRange: l.color.getColorMapper(),
					outOfRange: h.color.getColorMapper()
				}, b);
				var M = new r.Image({
					style: {
						width: y,
						height: x,
						x: p,
						y: g,
						image: c.canvas
					},
					silent: !0
				});
				this.group.add(M)
			}
		})
	}, function(t, e, i) {
		function n(t, e, i, n) {
			r.Group.call(this);
			var a = new s(t, e, i, n);
			this.add(a), this._updateEffectSymbol(t, n)
		}
		function a(t, e) {
			t.__p1 = e[0], t.__p2 = e[1], t.__cp1 = e[2] || [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
		}
		function o() {
			var t = this.__p1,
				e = this.__p2,
				i = this.__cp1,
				n = this.__t,
				a = this.position,
				o = u.quadraticAt,
				r = u.quadraticDerivativeAt;
			a[0] = o(t[0], i[0], e[0], n), a[1] = o(t[1], i[1], e[1], n);
			var s = r(t[0], i[0], e[0], n),
				l = r(t[1], i[1], e[1], n);
			this.rotation = -Math.atan2(l, s) - Math.PI / 2, this.ignore = !1
		}
		var r = i(3),
			s = i(83),
			l = i(1),
			h = i(24),
			u = i(18),
			c = n.prototype;
		c._updateEffectSymbol = function(t, e) {
			var i = t.getItemModel(e),
				n = i.getModel("effect"),
				r = n.get("symbolSize"),
				s = n.get("symbol");
			l.isArray(r) || (r = [r, r]);
			var u = n.get("color") || t.getItemVisual(e, "color"),
				c = this.childAt(1),
				d = 1e3 * n.get("period");
			this._symbolType === s && d === this._period || (c = h.createSymbol(s, -.5, -.5, 1, 1, u), c.ignore = !0, c.z2 = 100, this._symbolType = s, this._period = d, this.add(c), c.__t = 0, c.animate("", !0).when(d, {
				__t: 1
			}).delay(e / t.count() * d / 2).during(l.bind(o, c)).start()), c.setStyle("shadowColor", u), c.setStyle(n.getItemStyle(["color"])), c.attr("scale", r);
			var f = t.getItemLayout(e);
			a(c, f), c.setColor(u), c.attr("scale", r)
		}, c.updateData = function(t, e, i, n) {
			this.childAt(0).updateData(t, e, i, n), this._updateEffectSymbol(t, n)
		}, c.updateLayout = function(t, e, i, n) {
			this.childAt(0).updateLayout(t, e, i, n);
			var o = this.childAt(1),
				r = t.getItemLayout(n);
			a(o, r)
		}, l.inherits(n, r.Group), t.exports = n
	}, function(t, e, i) {
		function n(t) {
			return o.isArray(t) || (t = [+t, +t]), t
		}
		function a(t, e) {
			u.call(this);
			var i = new h(t, e),
				n = new u;
			this.add(i), this.add(n), n.beforeUpdate = function() {
				this.attr(i.getScale())
			}, this.updateData(t, e)
		}
		var o = i(1),
			r = i(24),
			s = i(3),
			l = i(4),
			h = i(47),
			u = s.Group,
			c = 3,
			d = a.prototype;
		d.stopEffectAnimation = function() {
			this.childAt(1).removeAll()
		}, d.startEffectAnimation = function(t, e, i, n, a, o) {
			for (var s = this._symbolType, l = this._color, h = this.childAt(1), u = 0; c > u; u++) {
				var d = r.createSymbol(s, -.5, -.5, 1, 1, l);
				d.attr({
					style: {
						stroke: "stroke" === e ? l : null,
						fill: "fill" === e ? l : null,
						strokeNoScale: !0
					},
					z2: 99,
					silent: !0,
					scale: [1, 1],
					z: a,
					zlevel: o
				});
				var f = -u / c * t + n;
				d.animate("", !0).when(t, {
					scale: [i, i]
				}).delay(f).start(), d.animateStyle(!0).when(t, {
					opacity: 0
				}).delay(f).start(), h.add(d)
			}
		}, d.highlight = function() {
			this.trigger("emphasis")
		}, d.downplay = function() {
			this.trigger("normal")
		}, d.updateData = function(t, e) {
			function i() {
				w.trigger("emphasis"), "render" !== p && this.startEffectAnimation(v, m, g, y, x, _)
			}
			function a() {
				w.trigger("normal"), "render" !== p && this.stopEffectAnimation()
			}
			var o = t.hostModel;
			this.childAt(0).updateData(t, e);
			var r = this.childAt(1),
				s = t.getItemModel(e),
				h = t.getItemVisual(e, "symbol"),
				u = n(t.getItemVisual(e, "symbolSize")),
				c = t.getItemVisual(e, "color");
			r.attr("scale", u), r.traverse(function(t) {
				t.attr({
					fill: c
				})
			});
			var d = s.getShallow("symbolOffset");
			if (d) {
				var f = r.position;
				f[0] = l.parsePercent(d[0], u[0]), f[1] = l.parsePercent(d[1], u[1])
			}
			this._symbolType = h, this._color = c;
			var p = o.get("showEffectOn"),
				g = s.get("rippleEffect.scale"),
				m = s.get("rippleEffect.brushType"),
				v = 1e3 * s.get("rippleEffect.period"),
				y = e / t.count(),
				x = s.getShallow("z") || 0,
				_ = s.getShallow("zlevel") || 0;
			this.stopEffectAnimation(), "render" === p && this.startEffectAnimation(v, m, g, y, x, _);
			var w = this.childAt(0);
			this.on("mouseover", i, this).on("mouseout", a, this).on("emphasis", i, this).on("normal", a, this)
		}, d.fadeOut = function(t) {
			t && t()
		}, o.inherits(a, u), t.exports = a
	}, function(t, e, i) {
		function n(t, e, i, n) {
			l.Group.call(this), this.bodyIndex, this.whiskerIndex, this.styleUpdater = i, this._createContent(t, e, n), this.updateData(t, e, n), this._seriesModel
		}
		function a(t, e, i) {
			return s.map(t, function(t) {
				return t = t.slice(), t[e] = i.initBaseline, t
			})
		}
		function o(t) {
			var e = {};
			return s.each(t, function(t, i) {
				e["ends" + i] = t
			}), e
		}
		function r(t) {
			this.group = new l.Group, this.styleUpdater = t
		}
		var s = i(1),
			l = i(3),
			h = i(6),
			u = h.extend({
				type: "whiskerInBox",
				shape: {},
				buildPath: function(t, e) {
					for (var i in e) if (0 === i.indexOf("ends")) {
						var n = e[i];
						t.moveTo(n[0][0], n[0][1]), t.lineTo(n[1][0], n[1][1])
					}
				}
			}),
			c = n.prototype;
		c._createContent = function(t, e, i) {
			var n = t.getItemLayout(e),
				r = "horizontal" === n.chartLayout ? 1 : 0,
				h = 0;
			this.add(new l.Polygon({
				shape: {
					points: i ? a(n.bodyEnds, r, n) : n.bodyEnds
				},
				style: {
					strokeNoScale: !0
				},
				z2: 100
			})), this.bodyIndex = h++;
			var c = s.map(n.whiskerEnds, function(t) {
				return i ? a(t, r, n) : t
			});
			this.add(new u({
				shape: o(c),
				style: {
					strokeNoScale: !0
				},
				z2: 100
			})), this.whiskerIndex = h++
		}, c.updateData = function(t, e, i) {
			var n = this._seriesModel = t.hostModel,
				a = t.getItemLayout(e),
				r = l[i ? "initProps" : "updateProps"];
			r(this.childAt(this.bodyIndex), {
				shape: {
					points: a.bodyEnds
				}
			}, n), r(this.childAt(this.whiskerIndex), {
				shape: o(a.whiskerEnds)
			}, n), this.styleUpdater.call(null, this, t, e)
		}, s.inherits(n, l.Group);
		var d = r.prototype;
		d.updateData = function(t) {
			var e = this.group,
				i = this._data,
				a = this.styleUpdater;
			t.diff(i).add(function(i) {
				if (t.hasValue(i)) {
					var o = new n(t, i, a, !0);
					t.setItemGraphicEl(i, o), e.add(o)
				}
			}).update(function(o, r) {
				var s = i.getItemGraphicEl(r);
				return t.hasValue(o) ? (s ? s.updateData(t, o) : s = new n(t, o, a), e.add(s), void t.setItemGraphicEl(o, s)) : void e.remove(s)
			}).remove(function(t) {
				var n = i.getItemGraphicEl(t);
				n && e.remove(n)
			}).execute(), this._data = t
		}, d.remove = function() {
			var t = this.group,
				e = this._data;
			this._data = null, e && e.eachItemGraphicEl(function(e) {
				e && t.remove(e)
			})
		}, t.exports = r
	}, function(t, e, i) {
		i(265), i(266);
		var n = i(1),
			a = i(2);
		a.registerLayout(i(267)), a.registerVisualCoding("chart", n.curry(i(74), "lines", "lineStyle"))
	}, function(t, e, i) {
		"use strict";
		var n = i(13),
			a = i(14),
			o = i(1),
			r = i(28);
		t.exports = n.extend({
			type: "series.lines",
			dependencies: ["grid", "polar"],
			getInitialData: function(t, e) {
				function i(t, e, i, n) {
					return t.coord && t.coord[n]
				}
				var n = [],
					s = [],
					l = [];
				o.each(t.data, function(t) {
					n.push(t[0]), s.push(t[1]), l.push(o.extend(o.extend({}, o.isArray(t[0]) ? null : t[0]), o.isArray(t[1]) ? null : t[1]))
				});
				var h = r.get(t.coordinateSystem);
				if (!h) throw new Error("Invalid coordinate system");
				var u = h.dimensions,
					c = new a(u, this),
					d = new a(u, this),
					f = new a(["value"], this);
				return c.initData(n, null, i), d.initData(s, null, i), f.initData(l), this.fromData = c, this.toData = d, f
			},
			formatTooltip: function(t) {
				var e = this.fromData.getName(t),
					i = this.toData.getName(t);
				return e + " > " + i
			},
			defaultOption: {
				coordinateSystem: "geo",
				zlevel: 0,
				z: 2,
				legendHoverLink: !0,
				hoverAnimation: !0,
				xAxisIndex: 0,
				yAxisIndex: 0,
				geoIndex: 0,
				effect: {
					show: !1,
					period: 4,
					symbol: "circle",
					symbolSize: 3,
					trailLength: .2
				},
				large: !1,
				largeThreshold: 2e3,
				label: {
					normal: {
						show: !1,
						position: "end"
					}
				},
				lineStyle: {
					normal: {
						opacity: .5
					}
				}
			}
		})
	}, function(t, e, i) {
		var n = i(84),
			a = i(261),
			o = i(83);
		i(2).extendChartView({
			type: "lines",
			init: function() {},
			render: function(t, e, i) {
				var r = t.getData(),
					s = this._lineDraw,
					l = t.get("effect.show");
				l !== this._hasEffet && (s && s.remove(), s = this._lineDraw = new n(l ? a : o), this._hasEffet = l);
				var h = t.get("zlevel"),
					u = t.get("effect.trailLength"),
					c = i.getZr();
				c.painter.getLayer(h).clear(!0), null != this._lastZlevel && c.configLayer(this._lastZlevel, {
					motionBlur: !1
				}), l && u && c.configLayer(h, {
					motionBlur: !0,
					lastFrameAlpha: Math.max(Math.min(u / 10 + .9, 1), 0)
				}), this.group.add(s.group), s.updateData(r), this._lastZlevel = h
			},
			updateLayout: function(t, e, i) {
				this._lineDraw.updateLayout();
				var n = i.getZr();
				n.painter.getLayer(this._lastZlevel).clear(!0)
			},
			remove: function(t, e) {
				this._lineDraw && this._lineDraw.remove(e, !0)
			}
		})
	}, function(t, e) {
		t.exports = function(t) {
			t.eachSeriesByType("lines", function(t) {
				var e = t.coordinateSystem,
					i = t.fromData,
					n = t.toData,
					a = t.getData(),
					o = e.dimensions;
				i.each(o, function(t, n, a) {
					i.setItemLayout(a, e.dataToPoint([t, n]))
				}), n.each(o, function(t, i, a) {
					n.setItemLayout(a, e.dataToPoint([t, i]))
				}), a.each(function(t) {
					var e, o = i.getItemLayout(t),
						r = n.getItemLayout(t),
						s = a.getItemModel(t).get("lineStyle.normal.curveness");
					s > 0 && (e = [(o[0] + r[0]) / 2 - (o[1] - r[1]) * s, (o[1] + r[1]) / 2 - (r[0] - o[0]) * s]), a.setItemLayout(t, [o, r, e])
				})
			})
		}
	}, function(t, e, i) {
		var n = i(2);
		i(269), i(270), i(205), i(221), n.registerLayout(i(273)), n.registerVisualCoding("chart", i(274)), n.registerProcessor("statistic", i(272)), n.registerPreprocessor(i(271)), i(68)("map", [{
			type: "mapToggleSelect",
			event: "mapselectchanged",
			method: "toggleSelected"
		}, {
			type: "mapSelect",
			event: "mapselected",
			method: "select"
		}, {
			type: "mapUnSelect",
			event: "mapunselected",
			method: "unSelect"
		}])
	}, function(t, e, i) {
		function n(t, e) {
			for (var i = {}, n = e.features, a = 0; a < t.length; a++) i[t[a].name] = t[a];
			for (var a = 0; a < n.length; a++) {
				var o = n[a].properties.name;
				i[o] || t.push({
					value: NaN,
					name: o
				})
			}
			return t
		}
		var a = i(14),
			o = i(2),
			r = i(13),
			s = i(1),
			l = i(31),
			h = i(9),
			u = h.encodeHTML,
			c = h.addCommas,
			d = i(69),
			f = r.extend({
				type: "series.map",
				needsDrawMap: !1,
				seriesGroup: [],
				init: function(t) {
					t = this._fillOption(t), this.option = t, f.superApply(this, "init", arguments), this.updateSelectedMap()
				},
				getInitialData: function(t) {
					var e = l(["value"], t.data || []),
						i = new a(e, this);
					return i.initData(t.data), i
				},
				mergeOption: function(t) {
					t = this._fillOption(t), f.superCall(this, "mergeOption", t), this.updateSelectedMap()
				},
				_fillOption: function(t) {
					t = s.extend({}, t);
					var e = o.getMap(t.map),
						i = e && e.geoJson;
					return i && t.data && (t.data = n(t.data, i)), t
				},
				setRoamZoom: function(t) {
					var e = this.option.roamDetail;
					e && (e.zoom = t)
				},
				setRoamPan: function(t, e) {
					var i = this.option.roamDetail;
					i && (i.x = t, i.y = e)
				},
				getRawValue: function(t) {
					return this._data.get("value", t)
				},
				formatTooltip: function(t) {
					for (var e = this._data, i = c(this.getRawValue(t)), n = e.getName(t), a = this.seriesGroup, o = [], r = 0; r < a.length; r++) isNaN(a[r].getRawValue(t)) || o.push(u(a[r].name));
					return o.join(", ") + "<br />" + n + " : " + i
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					coordinateSystem: "geo",
					map: "china",
					left: "center",
					top: "center",
					showLegendSymbol: !0,
					dataRangeHoverLink: !0,
					roamDetail: {
						x: 0,
						y: 0,
						zoom: 1
					},
					scaleLimit: null,
					label: {
						normal: {
							show: !1,
							textStyle: {
								color: "#000"
							}
						},
						emphasis: {
							show: !1,
							textStyle: {
								color: "#000"
							}
						}
					},
					itemStyle: {
						normal: {
							borderWidth: .5,
							borderColor: "#444",
							areaColor: "#eee"
						},
						emphasis: {
							areaColor: "rgba(255,215, 0, 0.8)"
						}
					}
				}
			});
		s.mixin(f, d), t.exports = f
	}, function(t, e, i) {
		var n = i(3),
			a = i(210);
		i(2).extendChartView({
			type: "map",
			render: function(t, e, i, n) {
				if (!n || "mapToggleSelect" !== n.type || n.from !== this.uid) {
					var o = this.group;
					if (o.removeAll(), n && "geoRoam" === n.type && "series" === n.component && n.name === t.name) {
						var r = this._mapDraw;
						r && o.add(r.group)
					} else if (t.needsDrawMap) {
						var r = this._mapDraw || new a(i, !0);
						o.add(r.group), r.draw(t, e, i, this), this._mapDraw = r
					} else this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
					t.get("showLegendSymbol") && e.getComponent("legend") && this._renderSymbols(t, e, i)
				}
			},
			remove: function() {
				this._mapDraw && this._mapDraw.remove(), this._mapDraw = null, this.group.removeAll()
			},
			_renderSymbols: function(t, e, i) {
				var a = t.getData(),
					o = this.group;
				a.each("value", function(t, e) {
					if (!isNaN(t)) {
						var i = a.getItemLayout(e);
						if (i && i.point) {
							var r = i.point,
								s = i.offset,
								l = new n.Circle({
									style: {
										fill: a.getVisual("color")
									},
									shape: {
										cx: r[0] + 9 * s,
										cy: r[1],
										r: 3
									},
									silent: !0,
									z2: 10
								});
							if (!s) {
								var h = a.getName(e),
									u = a.getItemModel(e),
									c = u.getModel("label.normal"),
									d = u.getModel("label.emphasis"),
									f = c.getModel("textStyle"),
									p = d.getModel("textStyle"),
									g = a.getItemGraphicEl(e);
								l.setStyle({
									textPosition: "bottom"
								});
								var m = function() {
										l.setStyle({
											text: d.get("show") ? h : "",
											textFill: p.getTextColor(),
											textFont: p.getFont()
										})
									},
									v = function() {
										l.setStyle({
											text: c.get("show") ? h : "",
											textFill: f.getTextColor(),
											textFont: f.getFont()
										})
									};
								g.on("mouseover", m).on("mouseout", v).on("emphasis", m).on("normal", v), v()
							}
							o.add(l)
						}
					}
				})
			}
		})
	}, function(t, e, i) {
		function n(t) {
			var e = {};
			return a.each(o, function(i) {
				null != t[i] && (e[i] = t[i])
			}), e
		}
		var a = i(1),
			o = ["x", "y", "x2", "y2", "width", "height", "map", "roam", "roamDetail", "label", "itemStyle"],
			r = {};
		t.exports = function(t) {
			var e = [];
			a.each(t.series, function(t) {
				"map" === t.type && e.push(t), a.extend(r, t.geoCoord)
			});
			var i = {};
			a.each(e, function(e) {
				if (e.map = e.map || e.mapType, a.defaults(e, e.mapLocation), e.markPoint) {
					var o = e.markPoint;
					if (o.data = a.map(o.data, function(t) {
						if (!a.isArray(t.value)) {
							var e;
							t.geoCoord ? e = t.geoCoord : t.name && (e = r[t.name]);
							var i = e ? [e[0], e[1]] : [NaN, NaN];
							null != t.value && i.push(t.value), t.value = i
						}
						return t
					}), !e.data || !e.data.length) {
						t.geo || (t.geo = []);
						var s = i[e.map];
						s || (s = i[e.map] = n(e), t.geo.push(s));
						var l = e.markPoint;
						l.type = t.effect && t.effect.show ? "effectScatter" : "scatter", l.coordinateSystem = "geo", l.geoIndex = a.indexOf(t.geo, s), l.name = e.name, t.series.splice(a.indexOf(t.series, e), 1, l)
					}
				}
			})
		}
	}, function(t, e, i) {
		function n(t, e) {
			for (var i = {}, n = ["value"], a = 0; a < t.length; a++) t[a].each(n, function(e, n) {
				var o = t[a].getName(n);
				i[o] = i[o] || [], isNaN(e) || i[o].push(e)
			});
			return t[0].map(n, function(n, a) {
				for (var o = t[0].getName(a), r = 0, s = 1 / 0, l = -(1 / 0), h = i[o].length, u = 0; h > u; u++) s = Math.min(s, i[o][u]), l = Math.max(l, i[o][u]), r += i[o][u];
				var c;
				return c = "min" === e ? s : "max" === e ? l : "average" === e ? r / h : r, 0 === h ? NaN : c
			})
		}
		var a = i(1);
		t.exports = function(t) {
			var e = {};
			t.eachSeriesByType("map", function(t) {
				var i = t.get("map");
				e[i] = e[i] || [], e[i].push(t)
			}), a.each(e, function(t, e) {
				var i = n(a.map(t, function(t) {
					return t.getData()
				}), t[0].get("mapValueCalculation"));
				t[0].seriesGroup = [], t[0].setData(i);
				for (var o = 0; o < t.length; o++) t[o].seriesGroup = t, t[o].needsDrawMap = 0 === o
			})
		}
	}, function(t, e, i) {
		var n = i(1);
		t.exports = function(t) {
			var e = {};
			t.eachSeriesByType("map", function(i) {
				var a = i.get("map");
				if (!e[a]) {
					var o = {};
					n.each(i.seriesGroup, function(e) {
						var i = e.coordinateSystem,
							n = e.getData();
						e.get("showLegendSymbol") && t.getComponent("legend") && n.each("value", function(t, e) {
							var a = n.getName(e),
								r = i.getRegion(a);
							if (r && !isNaN(t)) {
								var s = o[a] || 0,
									l = i.dataToPoint(r.center);
								o[a] = s + 1, n.setItemLayout(e, {
									point: l,
									offset: s
								})
							}
						})
					});
					var r = i.getData();
					r.each(function(t) {
						var e = r.getName(t),
							i = r.getItemLayout(t) || {};
						i.showLabel = !o[e], r.setItemLayout(t, i)
					}), e[a] = !0
				}
			})
		}
	}, function(t, e) {
		t.exports = function(t) {
			t.eachSeriesByType("map", function(t) {
				var e = t.get("color"),
					i = t.getModel("itemStyle.normal"),
					n = i.get("areaColor"),
					a = i.get("color") || e[t.seriesIndex % e.length];
				t.getData().setVisual({
					areaColor: n,
					color: a
				})
			})
		}
	}, function(t, e, i) {
		var n = i(2);
		i(211), i(276), i(277), n.registerVisualCoding("chart", i(278))
	}, function(t, e, i) {
		function n(t, e, i) {
			var n = t.get("data"),
				a = +e.replace("dim", "");
			n && n.length && o.each(i, function(t) {
				if (t) {
					var e = o.indexOf(n, t[a]);
					t[a] = e >= 0 ? e : NaN
				}
			})
		}
		var a = i(14),
			o = i(1),
			r = i(13);
		t.exports = r.extend({
			type: "series.parallel",
			dependencies: ["parallel"],
			getInitialData: function(t, e) {
				var i = e.getComponent("parallel", this.get("parallelIndex")),
					r = i.dimensions,
					s = i.parallelAxisIndex,
					l = t.data,
					h = o.map(r, function(t, i) {
						var a = e.getComponent("parallelAxis", s[i]);
						return "category" === a.get("type") ? (n(a, t, l), {
							name: t,
							type: "ordinal"
						}) : t
					}),
					u = new a(h, this);
				return u.initData(l), u
			},
			getRawIndicesByActiveState: function(t) {
				var e = this.coordinateSystem,
					i = this.getData(),
					n = [];
				return e.eachActiveState(i, function(e, a) {
					t === e && n.push(i.getRawIndex(a))
				}), n
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "parallel",
				parallelIndex: 0,
				label: {
					normal: {
						show: !1
					},
					emphasis: {
						show: !1
					}
				},
				inactiveOpacity: .05,
				activeOpacity: 1,
				lineStyle: {
					normal: {
						width: 2,
						opacity: .45,
						type: "solid"
					}
				},
				animationEasing: "linear"
			}
		})
	}, function(t, e, i) {
		function n(t, e, i) {
			var n = t.model,
				a = t.getRect(),
				o = new s.Rect({
					shape: {
						x: a.x,
						y: a.y,
						width: a.width,
						height: a.height
					}
				}),
				r = "horizontal" === n.get("layout") ? "width" : "height";
			return o.setShape(r, 0), s.initProps(o, {
				shape: {
					width: a.width,
					height: a.height
				}
			}, e, i), o
		}
		function a(t, e, i, n) {
			for (var a = 0, o = e.length - 1; o > a; a++) {
				var s = e[a],
					l = e[a + 1],
					h = t[a],
					u = t[a + 1];
				n(r(h, i.getAxis(s).type) || r(u, i.getAxis(l).type) ? null : [i.dataToPoint(h, s), i.dataToPoint(u, l)], a)
			}
		}
		function o(t) {
			return new s.Polyline({
				shape: {
					points: t
				},
				silent: !0
			})
		}
		function r(t, e) {
			return "category" === e ? null == t : null == t || isNaN(t)
		}
		var s = i(3),
			l = i(1),
			h = i(25).extend({
				type: "parallel",
				init: function() {
					this._dataGroup = new s.Group, this.group.add(this._dataGroup), this._data
				},
				render: function(t, e, i, r) {
					function h(t) {
						var e = f.getValues(m, t),
							i = new s.Group;
						d.add(i), a(e, m, g, function(t, e) {
							t && i.add(o(t))
						}), f.setItemGraphicEl(t, i)
					}
					function u(e, i) {
						var n = f.getValues(m, e),
							r = p.getItemGraphicEl(i),
							l = [],
							h = 0;
						a(n, m, g, function(e, i) {
							var n = r.childAt(h++);
							e && !n ? l.push(o(e)) : e && s.updateProps(n, {
								shape: {
									points: e
								}
							}, t)
						});
						for (var u = r.childCount() - 1; u >= h; u--) r.remove(r.childAt(u));
						for (var u = 0, c = l.length; c > u; u++) r.add(l[u]);
						f.setItemGraphicEl(e, r)
					}
					function c(t) {
						var e = p.getItemGraphicEl(t);
						d.remove(e)
					}
					var d = this._dataGroup,
						f = t.getData(),
						p = this._data,
						g = t.coordinateSystem,
						m = g.dimensions;
					f.diff(p).add(h).update(u).remove(c).execute(), f.eachItemGraphicEl(function(t, e) {
						var i = f.getItemModel(e),
							n = i.getModel("lineStyle.normal");
						t.eachChild(function(t) {
							t.setStyle(l.extend(n.getLineStyle(), {
								stroke: f.getItemVisual(e, "color"),
								opacity: f.getItemVisual(e, "opacity")
							}))
						})
					}), this._data || d.setClipPath(n(g, t, function() {
						d.removeClipPath()
					})), this._data = f
				},
				remove: function() {
					this._dataGroup && this._dataGroup.removeAll(), this._data = null
				}
			});
		t.exports = h
	}, function(t, e) {
		t.exports = function(t, e) {
			t.eachSeriesByType("parallel", function(e) {
				var i = e.getModel("itemStyle.normal"),
					n = t.get("color"),
					a = i.get("color") || n[e.seriesIndex % n.length],
					o = e.get("inactiveOpacity"),
					r = e.get("activeOpacity"),
					s = e.getModel("lineStyle.normal").getLineStyle(),
					l = e.coordinateSystem,
					h = e.getData(),
					u = {
						normal: s.opacity,
						active: r,
						inactive: o
					};
				l.eachActiveState(h, function(t, e) {
					h.setItemVisual(e, "opacity", u[t])
				}), h.setVisual("color", a)
			})
		}
	}, function(t, e, i) {
		var n = i(1),
			a = i(2);
		i(305), i(280), i(281), a.registerVisualCoding("chart", n.curry(i(63), "radar")), a.registerVisualCoding("chart", n.curry(i(44), "radar", "circle", null)), a.registerLayout(i(283)), a.registerProcessor("filter", n.curry(i(62), "radar")), a.registerPreprocessor(i(282))
	}, function(t, e, i) {
		"use strict";
		var n = i(13),
			a = i(14),
			o = i(31),
			r = i(1),
			s = i(9),
			l = n.extend({
				type: "series.radar",
				dependencies: ["radar"],
				init: function(t) {
					l.superApply(this, "init", arguments), this.legendDataProvider = function() {
						return this._dataBeforeProcessed
					}
				},
				getInitialData: function(t, e) {
					var i = t.data || [],
						n = o([], i, [], "indicator_"),
						r = new a(n, this);
					return r.initData(i), r
				},
				formatTooltip: function(t) {
					var e = this.getRawValue(t),
						i = this.coordinateSystem,
						n = i.getIndicatorAxes();
					return this._data.getName(t) + "<br />" + r.map(n, function(t, i) {
						return t.name + " : " + e[i]
					}).join("<br />")
				},
				getFormattedLabel: function(t, e, i, n) {
					e = e || "normal";
					var a = this.getData(),
						o = a.getItemModel(t),
						r = this.getDataParams(t);
					return null == i && (i = o.get(["label", e, "formatter"])), r.value = r.value[n || 0], "function" == typeof i ? (r.status = e, i(r)) : "string" == typeof i ? s.formatTpl(i, r) : void 0
				},
				defaultOption: {
					zlevel: 0,
					z: 2,
					coordinateSystem: "radar",
					legendHoverLink: !0,
					radarIndex: 0,
					lineStyle: {
						normal: {
							width: 2,
							type: "solid"
						}
					},
					label: {
						normal: {
							position: "top"
						}
					},
					symbol: "emptyCircle",
					symbolSize: 4
				}
			});
		t.exports = l
	}, function(t, e, i) {
		function n(t) {
			return o.isArray(t) || (t = [+t, +t]), t
		}
		var a = i(3),
			o = i(1),
			r = i(24);
		t.exports = i(2).extendChartView({
			type: "radar",
			render: function(t, e, i) {
				function s(t, e) {
					var i = t.getItemVisual(e, "symbol") || "circle",
						a = t.getItemVisual(e, "color");
					if ("none" !== i) {
						var o = r.createSymbol(i, -.5, -.5, 1, 1, a);
						return o.attr({
							style: {
								strokeNoScale: !0
							},
							z2: 100,
							scale: n(t.getItemVisual(e, "symbolSize"))
						}), o
					}
				}
				function l(e, i, n, o, r, l) {
					n.removeAll();
					for (var h = 0; h < i.length - 1; h++) {
						var u = s(o, r);
						u && (u.__dimIdx = h, e[h] ? (u.attr("position", e[h]), a[l ? "initProps" : "updateProps"](u, {
							position: i[h]
						}, t)) : u.attr("position", i[h]), n.add(u))
					}
				}
				function h(t) {
					return o.map(t, function(t) {
						return [u.cx, u.cy]
					})
				}
				var u = t.coordinateSystem,
					c = this.group,
					d = t.getData(),
					f = this._data;
				d.diff(f).add(function(e) {
					var i = d.getItemLayout(e);
					if (i) {
						var n = new a.Polygon,
							o = new a.Polyline,
							r = {
								shape: {
									points: i
								}
							};
						n.shape.points = h(i), o.shape.points = h(i), a.initProps(n, r, t), a.initProps(o, r, t);
						var s = new a.Group,
							u = new a.Group;
						s.add(o), s.add(n), s.add(u), l(o.shape.points, i, u, d, e, !0), d.setItemGraphicEl(e, s)
					}
				}).update(function(e, i) {
					var n = f.getItemGraphicEl(i),
						o = n.childAt(0),
						r = n.childAt(1),
						s = n.childAt(2),
						h = {
							shape: {
								points: d.getItemLayout(e)
							}
						};
					h.shape.points && (l(o.shape.points, h.shape.points, s, d, e, !1), a.updateProps(o, h, t), a.updateProps(r, h, t), d.setItemGraphicEl(e, n))
				}).remove(function(t) {
					c.remove(f.getItemGraphicEl(t))
				}).execute(), d.eachItemGraphicEl(function(e, i) {
					function n() {
						h.attr("ignore", v)
					}
					function r() {
						h.attr("ignore", m)
					}
					var s = d.getItemModel(i),
						l = e.childAt(0),
						h = e.childAt(1),
						u = e.childAt(2),
						f = d.getItemVisual(i, "color");
					c.add(e), l.setStyle(o.extend(s.getModel("lineStyle.normal").getLineStyle(), {
						stroke: f
					})), l.hoverStyle = s.getModel("lineStyle.emphasis").getLineStyle();
					var p = s.getModel("areaStyle.normal"),
						g = s.getModel("areaStyle.emphasis"),
						m = p.isEmpty() && p.parentModel.isEmpty(),
						v = g.isEmpty() && g.parentModel.isEmpty();
					v = v && m, h.ignore = m, h.setStyle(o.defaults(p.getAreaStyle(), {
						fill: f,
						opacity: .7
					})), h.hoverStyle = g.getAreaStyle();
					var y = s.getModel("itemStyle.normal").getItemStyle(["color"]),
						x = s.getModel("itemStyle.emphasis").getItemStyle(),
						_ = s.getModel("label.normal"),
						w = s.getModel("label.emphasis");
					u.eachChild(function(e) {
						e.setStyle(y), e.hoverStyle = o.clone(x);
						var n = d.get(d.dimensions[e.__dimIdx], i);
						a.setText(e.style, _, f), e.setStyle({
							text: _.get("show") ? o.retrieve(t.getFormattedLabel(i, "normal", null, e.__dimIdx), n) : ""
						}), a.setText(e.hoverStyle, w, f), e.hoverStyle.text = w.get("show") ? o.retrieve(t.getFormattedLabel(i, "emphasis", null, e.__dimIdx), n) : ""
					}), e.off("mouseover").off("mouseout").off("normal").off("emphasis"), e.on("emphasis", n).on("mouseover", n).on("normal", r).on("mouseout", r), a.setHoverStyle(e)
				}), this._data = d
			},
			remove: function() {
				this.group.removeAll(), this._data = null
			}
		})
	}, function(t, e, i) {
		var n = i(1);
		t.exports = function(t) {
			var e = t.polar;
			if (e) {
				n.isArray(e) || (e = [e]);
				var i = [];
				n.each(e, function(e, a) {
					e.indicator ? (e.type && !e.shape && (e.shape = e.type), t.radar = t.radar || [], n.isArray(t.radar) || (t.radar = [t.radar]), t.radar.push(e)) : i.push(e)
				}), t.polar = i
			}
			n.each(t.series, function(t) {
				"radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex)
			})
		}
	}, function(t, e) {
		t.exports = function(t, e) {
			t.eachSeriesByType("radar", function(t) {
				function e(t, e) {
					n[e] = n[e] || [], n[e][o] = a.dataToPoint(t, o)
				}
				var i = t.getData(),
					n = [],
					a = t.coordinateSystem;
				if (a) {
					for (var o = 0; o < a.getIndicatorAxes().length; o++) {
						var r = i.dimensions[o];
						i.each(r, e)
					}
					i.each(function(t) {
						n[t][0] && n[t].push(n[t][0].slice()), i.setItemLayout(t, n[t])
					})
				}
			})
		}
	}, function(t, e, i) {
		var n = i(2);
		i(285), i(286), n.registerLayout(i(287)), n.registerVisualCoding("chart", i(288))
	}, function(t, e, i) {
		"use strict";
		var n = i(13),
			a = i(209);
		t.exports = n.extend({
			type: "series.sankey",
			layoutInfo: null,
			getInitialData: function(t, e) {
				var i = t.edges || t.links,
					n = t.data || t.nodes;
				if (n && i) {
					var o = a(n, i, this, !0);
					return o.data
				}
			},
			getGraph: function() {
				return this.getData().graph
			},
			getEdgeData: function() {
				return this.getGraph().edgeData
			},
			defaultOption: {
				zlevel: 0,
				z: 2,
				coordinateSystem: "view",
				layout: null,
				left: "5%",
				top: "5%",
				right: "20%",
				bottom: "5%",
				nodeWidth: 20,
				nodeGap: 8,
				layoutIterations: 32,
				label: {
					normal: {
						show: !0,
						position: "right",
						textStyle: {
							color: "#000",
							fontSize: 12
						}
					},
					emphasis: {
						show: !0
					}
				},
				itemStyle: {
					normal: {
						borderWidth: 1,
						borderColor: "#aaa"
					}
				},
				lineStyle: {
					normal: {
						color: "#314656",
						opacity: .2,
						curveness: .5
					},
					emphasis: {
						opacity: .6
					}
				},
				color: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
				animationEasing: "linear",
				animationDuration: 1e3
			}
		})
	}, function(t, e, i) {
		function n(t, e, i) {
			var n = new a.Rect({
				shape: {
					x: t.x - 10,
					y: t.y - 10,
					width: 0,
					height: t.height + 20
				}
			});
			return a.initProps(n, {
				shape: {
					width: t.width + 20,
					height: t.height + 20
				}
			}, e, i), n
		}
		var a = i(3),
			o = i(7),
			r = i(1),
			s = a.extendShape({
				shape: {
					x1: 0,
					y1: 0,
					x2: 0,
					y2: 0,
					cpx1: 0,
					cpy1: 0,
					cpx2: 0,
					cpy2: 0,
					extent: 0
				},
				buildPath: function(t, e) {
					var i = e.extent / 2;
					t.moveTo(e.x1, e.y1 - i), t.bezierCurveTo(e.cpx1, e.cpy1 - i, e.cpx2, e.cpy2 - i, e.x2, e.y2 - i), t.lineTo(e.x2, e.y2 + i), t.bezierCurveTo(e.cpx2, e.cpy2 + i, e.cpx1, e.cpy1 + i, e.x1, e.y1 + i), t.closePath()
				}
			});
		t.exports = i(2).extendChartView({
			type: "sankey",
			_model: null,
			render: function(t, e, i) {
				var l = t.getGraph(),
					h = this.group,
					u = t.layoutInfo;
				this._model = t, h.removeAll(), h.position = [u.x, u.y];
				var c = l.edgeData,
					d = t.option,
					f = o.createDataFormatModel(t, c, d.edges || d.links);
				f.formatTooltip = function(t) {
					var e = this.getDataParams(t),
						i = e.data,
						n = i.source + " -- " + i.target;
					return e.value && (n += ":" + e.value), n
				}, l.eachNode(function(e) {
					var i = e.getLayout(),
						n = e.getModel(),
						o = n.getModel("label.normal"),
						s = o.getModel("textStyle"),
						l = n.getModel("label.emphasis"),
						u = l.getModel("textStyle"),
						c = new a.Rect({
							shape: {
								x: i.x,
								y: i.y,
								width: e.getLayout().dx,
								height: e.getLayout().dy
							},
							style: {
								text: o.get("show") ? t.getFormattedLabel(e.dataIndex, "normal") || e.id : "",
								textFont: s.getFont(),
								textFill: s.getTextColor(),
								textPosition: o.get("position")
							}
						});
					c.setStyle(r.defaults({
						fill: e.getVisual("color")
					}, n.getModel("itemStyle.normal").getItemStyle())), a.setHoverStyle(c, r.extend(e.getModel("itemStyle.emphasis"), {
						text: l.get("show") ? t.getFormattedLabel(e.dataIndex, "emphasis") || e.id : "",
						textFont: u.getFont(),
						textFill: u.getTextColor(),
						textPosition: l.get("position")
					})), h.add(c)
				}), l.eachEdge(function(t) {
					var e = new s;
					e.dataIndex = t.dataIndex, e.dataModel = f;
					var i = t.getModel("lineStyle.normal"),
						n = i.get("curveness"),
						o = t.node1.getLayout(),
						r = t.node2.getLayout(),
						l = t.getLayout();
					e.shape.extent = Math.max(1, l.dy);
					var u = o.x + o.dx,
						c = o.y + l.sy + l.dy / 2,
						d = r.x,
						p = r.y + l.ty + l.dy / 2,
						g = u * (1 - n) + d * n,
						m = c,
						v = u * n + d * (1 - n),
						y = p;
					e.setShape({
						x1: u,
						y1: c,
						x2: d,
						y2: p,
						cpx1: g,
						cpy1: m,
						cpx2: v,
						cpy2: y
					}), e.setStyle(i.getItemStyle()), a.setHoverStyle(e, t.getModel("lineStyle.emphasis").getItemStyle()), h.add(e)
				}), this._data || h.setClipPath(n(h.getBoundingRect(), t, function() {
					h.removeClipPath()
				})), this._data = t.getData()
			}
		})
	}, function(t, e, i) {
		function n(t, e) {
			return S.getLayoutRect(t.getBoxLayoutParams(), {
				width: e.getWidth(),
				height: e.getHeight()
			})
		}
		function a(t, e, i, n, a, o, s) {
			r(t, i, a), h(t, e, o, n, s), m(t)
		}
		function o(t) {
			I.each(t, function(t) {
				var e = x(t.outEdges, M),
					i = x(t.inEdges, M),
					n = Math.max(e, i);
				t.setLayout({
					value: n
				}, !0)
			})
		}
		function r(t, e, i) {
			for (var n = t, a = null, o = 0, r = 0; n.length;) {
				a = [];
				for (var h = 0, u = n.length; u > h; h++) {
					var c = n[h];
					c.setLayout({
						x: o
					}, !0), c.setLayout({
						dx: e
					}, !0);
					for (var d = 0, f = c.outEdges.length; f > d; d++) a.push(c.outEdges[d].node2)
				}
				n = a, ++o
			}
			s(t, o), r = (i - e) / (o - 1), l(t, r)
		}
		function s(t, e) {
			I.each(t, function(t) {
				t.outEdges.length || t.setLayout({
					x: e - 1
				}, !0)
			})
		}
		function l(t, e) {
			I.each(t, function(t) {
				var i = t.getLayout().x * e;
				t.setLayout({
					x: i
				}, !0)
			})
		}
		function h(t, e, i, n, a) {
			var o = A().key(function(t) {
				return t.getLayout().x
			}).sortKeys(b).entries(t).map(function(t) {
				return t.values
			});
			u(t, o, e, i, n), c(o, n, i);
			for (var r = 1; a > 0; a--) r *= .99, d(o, r), c(o, n, i), p(o, r), c(o, n, i)
		}
		function u(t, e, i, n, a) {
			var o = [];
			I.each(e, function(t) {
				var e = t.length,
					i = 0;
				I.each(t, function(t) {
					i += t.getLayout().value
				});
				var r = (n - (e - 1) * a) / i;
				o.push(r)
			}), o.sort(function(t, e) {
				return t - e
			});
			var r = o[0];
			I.each(e, function(t) {
				I.each(t, function(t, e) {
					t.setLayout({
						y: e
					}, !0);
					var i = t.getLayout().value * r;
					t.setLayout({
						dy: i
					}, !0)
				})
			}), I.each(i, function(t) {
				var e = +t.getValue() * r;
				t.setLayout({
					dy: e
				}, !0)
			})
		}
		function c(t, e, i) {
			I.each(t, function(t) {
				var n, a, o, r = 0,
					s = t.length;
				for (t.sort(w), o = 0; s > o; o++) {
					if (n = t[o], a = r - n.getLayout().y, a > 0) {
						var l = n.getLayout().y + a;
						n.setLayout({
							y: l
						}, !0)
					}
					r = n.getLayout().y + n.getLayout().dy + e
				}
				if (a = r - e - i, a > 0) {
					var l = n.getLayout().y - a;
					for (n.setLayout({
						y: l
					}, !0), r = n.getLayout().y, o = s - 2; o >= 0; --o) n = t[o], a = n.getLayout().y + n.getLayout().dy + e - r, a > 0 && (l = n.getLayout().y - a, n.setLayout({
						y: l
					}, !0)), r = n.getLayout().y
				}
			})
		}
		function d(t, e) {
			I.each(t.slice().reverse(), function(t) {
				I.each(t, function(t) {
					if (t.outEdges.length) {
						var i = x(t.outEdges, f) / x(t.outEdges, M),
							n = t.getLayout().y + (i - _(t)) * e;
						t.setLayout({
							y: n
						}, !0)
					}
				})
			})
		}
		function f(t) {
			return _(t.node2) * t.getValue()
		}
		function p(t, e) {
			I.each(t, function(t) {
				I.each(t, function(t) {
					if (t.inEdges.length) {
						var i = x(t.inEdges, g) / x(t.inEdges, M),
							n = t.getLayout().y + (i - _(t)) * e;
						t.setLayout({
							y: n
						}, !0)
					}
				})
			})
		}
		function g(t) {
			return _(t.node1) * t.getValue()
		}
		function m(t) {
			I.each(t, function(t) {
				t.outEdges.sort(v), t.inEdges.sort(y)
			}), I.each(t, function(t) {
				var e = 0,
					i = 0;
				I.each(t.outEdges, function(t) {
					t.setLayout({
						sy: e
					}, !0), e += t.getLayout().dy
				}), I.each(t.inEdges, function(t) {
					t.setLayout({
						ty: i
					}, !0), i += t.getLayout().dy
				})
			})
		}
		function v(t, e) {
			return t.node2.getLayout().y - e.node2.getLayout().y
		}
		function y(t, e) {
			return t.node1.getLayout().y - e.node1.getLayout().y
		}
		function x(t, e) {
			var i, n = 0,
				a = t.length,
				o = -1;
			if (1 === arguments.length) for (; ++o < a;) i = +t[o], isNaN(i) || (n += i);
			else for (; ++o < a;) i = +e.call(t, t[o], o), isNaN(i) || (n += i);
			return n
		}
		function _(t) {
			return t.getLayout().y + t.getLayout().dy / 2
		}
		function w(t, e) {
			return t.getLayout().y - e.getLayout().y
		}
		function b(t, e) {
			return e > t ? -1 : t > e ? 1 : t == e ? 0 : NaN
		}
		function M(t) {
			return t.getValue()
		}
		var S = i(11),
			A = i(346),
			I = i(1);
		t.exports = function(t, e) {
			t.eachSeriesByType("sankey", function(t) {
				var i = t.get("nodeWidth"),
					r = t.get("nodeGap"),
					s = n(t, e);
				t.layoutInfo = s;
				var l = s.width,
					h = s.height,
					u = t.getGraph(),
					c = u.nodes,
					d = u.edges;
				o(c);
				var f = c.filter(function(t) {
					return 0 === t.getLayout().value
				}),
					p = 0 !== f.length ? 0 : t.get("layoutIterations");
				a(c, d, i, r, l, h, p)
			})
		}
	}, function(t, e, i) {
		var n = i(73);
		t.exports = function(t, e) {
			t.eachSeriesByType("sankey", function(t) {
				var e = t.getGraph(),
					i = e.nodes;
				i.sort(function(t, e) {
					return t.getLayout().value - e.getLayout().value
				});
				var a = i[0].getLayout().value,
					o = i[i.length - 1].getLayout().value;
				i.forEach(function(e) {
					var i = new n({
						type: "color",
						mappingMethod: "linear",
						dataExtent: [a, o],
						visual: t.get("color")
					}),
						r = i.mapValueToVisual(e.getLayout().value);
					e.setVisual("color", r)
				})
			})
		}
	}, function(t, e, i) {
		var n = i(2);
		i(291), i(292), i(293), n.registerVisualCoding("chart", i(295)), n.registerLayout(i(294))
	}, function(t, e, i) {
		function n(t, e) {
			this.group = new o.Group, t.add(this.group), this._onSelect = e || s.noop
		}
		function a(t, e, i, n, a, o) {
			var r = [
				[a ? t : t - u, e],
				[t + i, e],
				[t + i, e + n],
				[a ? t : t - u, e + n]
			];
			return !o && r.splice(2, 0, [t + i + u, e + n / 2]), !a && r.push([t, e + n / 2]), r
		}
		var o = i(3),
			r = i(11),
			s = i(1),
			l = 8,
			h = 8,
			u = 5;
		n.prototype = {
			constructor: n,
			render: function(t, e, i) {
				var n = t.getModel("breadcrumb"),
					a = this.group;
				if (a.removeAll(), n.get("show") && i) {
					var o = n.getModel("itemStyle.normal"),
						s = o.getModel("textStyle"),
						l = {
							pos: {
								left: n.get("left"),
								right: n.get("right"),
								top: n.get("top"),
								bottom: n.get("bottom")
							},
							box: {
								width: e.getWidth(),
								height: e.getHeight()
							},
							emptyItemWidth: n.get("emptyItemWidth"),
							totalWidth: 0,
							renderList: []
						};
					this._prepare(n, i, l, s), this._renderContent(n, i, l, o, s), r.positionGroup(a, l.pos, l.box)
				}
			},
			_prepare: function(t, e, i, n) {
				for (var a = e; a; a = a.parentNode) {
					var o = a.getModel().get("name"),
						r = n.getTextRect(o),
						s = Math.max(r.width + 2 * l, i.emptyItemWidth);
					i.totalWidth += s + h, i.renderList.push({
						node: a,
						text: o,
						width: s
					})
				}
			},
			_renderContent: function(t, e, i, n, l) {
				for (var u = 0, c = i.emptyItemWidth, d = t.get("height"), f = r.getAvailableSize(i.pos, i.box), p = i.totalWidth, g = i.renderList, m = g.length - 1; m >= 0; m--) {
					var v = g[m],
						y = v.width,
						x = v.text;
					p > f.width && (p -= y - c, y = c, x = ""), this.group.add(new o.Polygon({
						shape: {
							points: a(u, 0, y, d, m === g.length - 1, 0 === m)
						},
						style: s.defaults(n.getItemStyle(), {
							lineJoin: "bevel",
							text: x,
							textFill: l.getTextColor(),
							textFont: l.getFont()
						}),
						z: 10,
						onclick: s.bind(this._onSelect, this, v.node)
					})), u += y + h
				}
			},
			remove: function() {
				this.group.removeAll()
			}
		}, t.exports = n
	}, function(t, e, i) {
		function n(t, e) {
			var i = 0;
			s.each(t.children, function(t) {
				n(t, e);
				var a = t.value;
				s.isArray(a) && (a = a[0]), i += a
			});
			var a = t.value;
			e >= 0 && (s.isArray(a) ? a = a[0] : t.value = new Array(e)), (null == a || isNaN(a)) && (a = i), 0 > a && (a = 0), e >= 0 ? t.value[0] = a : t.value = a
		}
		function a(t, e) {
			var i = e.get("color");
			if (i) {
				t = t || [];
				var n;
				if (s.each(t, function(t) {
					var e = new l(t),
						i = e.get("color");
					(e.get("itemStyle.normal.color") || i && "none" !== i) && (n = !0)
				}), !n) {
					var a = t[0] || (t[0] = {});
					a.color = i.slice()
				}
				return t
			}
		}
		var o = i(13),
			r = i(344),
			s = i(1),
			l = i(12),
			h = i(9),
			u = (i(95), h.encodeHTML),
			c = h.addCommas;
		t.exports = o.extend({
			type: "series.treemap",
			dependencies: ["grid", "polar"],
			_viewRoot: null,
			defaultOption: {
				left: "center",
				top: "middle",
				right: null,
				bottom: null,
				width: "80%",
				height: "80%",
				sort: !0,
				clipWindow: "origin",
				squareRatio: .5 * (1 + Math.sqrt(5)),
				leafDepth: null,
				visualDimension: 0,
				zoomToNodeRatio: .1024,
				roam: !0,
				nodeClick: "zoomToNode",
				animation: !0,
				animationDurationUpdate: 900,
				animationEasing: "quinticInOut",
				breadcrumb: {
					show: !0,
					height: 22,
					left: "center",
					top: "bottom",
					emptyItemWidth: 25,
					itemStyle: {
						normal: {
							color: "rgba(0,0,0,0.7)",
							borderColor: "rgba(255,255,255,0.7)",
							borderWidth: 1,
							shadowColor: "rgba(150,150,150,1)",
							shadowBlur: 3,
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							textStyle: {
								color: "#fff"
							}
						},
						emphasis: {
							textStyle: {}
						}
					}
				},
				label: {
					normal: {
						show: !0,
						position: ["50%", "50%"],
						textStyle: {
							align: "center",
							baseline: "middle",
							color: "#fff",
							ellipsis: !0
						}
					}
				},
				itemStyle: {
					normal: {
						color: null,
						colorAlpha: null,
						colorSaturation: null,
						borderWidth: 0,
						gapWidth: 0,
						borderColor: "#fff",
						borderColorSaturation: null
					},
					emphasis: {}
				},
				color: "none",
				colorAlpha: null,
				colorSaturation: null,
				colorMappingBy: "index",
				visibleMin: 10,
				childrenVisibleMin: null,
				levels: []
			},
			getInitialData: function(t, e) {
				var i = t.data || [],
					o = t.name;
				null == o && (o = t.name);
				var l = {
					name: o,
					children: t.data
				},
					h = (i[0] || {}).value;
				n(l, s.isArray(h) ? h.length : -1);
				var u = t.levels || [];
				return u = t.levels = a(u, e), r.createTree(l, this, u).data
			},
			optionUpdated: function() {
				this.resetViewRoot()
			},
			formatTooltip: function(t) {
				var e = this.getData(),
					i = this.getRawValue(t),
					n = c(s.isArray(i) ? i[0] : i),
					a = e.getName(t);
				return u(a) + ": " + n
			},
			getDataParams: function(t) {
				for (var e = o.prototype.getDataParams.apply(this, arguments), i = this.getData(), n = i.tree.getNodeByDataIndex(t), a = e.treePathInfo = []; n;) {
					var r = n.dataIndex;
					a.push({
						name: n.name,
						dataIndex: r,
						value: this.getRawValue(r)
					}), n = n.parentNode
				}
				return a.reverse(), e
			},
			setLayoutInfo: function(t) {
				this.layoutInfo = this.layoutInfo || {}, s.extend(this.layoutInfo, t)
			},
			mapIdToIndex: function(t) {
				var e = this._idIndexMap;
				e || (e = this._idIndexMap = {}, this._idIndexMapCount = 0);
				var i = e[t];
				return null == i && (e[t] = i = this._idIndexMapCount++), i
			},
			getViewRoot: function() {
				return this._viewRoot
			},
			resetViewRoot: function(t) {
				t ? this._viewRoot = t : t = this._viewRoot;
				var e = this.getData().tree.root;
				t && (t === e || e.contains(t)) || (this._viewRoot = e)
			}
		})
	}, function(t, e, i) {
		function n() {
			return {
				nodeGroup: [],
				background: [],
				content: []
			}
		}
		var a = i(1),
			o = i(3),
			r = i(52),
			s = i(95),
			l = i(290),
			h = i(70),
			u = i(8),
			c = i(19),
			d = i(345),
			f = a.bind,
			p = o.Group,
			g = o.Rect,
			m = a.each,
			v = 3;
		t.exports = i(2).extendChartView({
			type: "treemap",
			init: function(t, e) {
				this._containerGroup, this._storage = n(), this._oldTree, this._breadcrumb, this._controller, this._state = "ready", this._mayClick
			},
			render: function(t, e, i, n) {
				var o = e.findComponents({
					mainType: "series",
					subType: "treemap",
					query: n
				});
				if (!(a.indexOf(o, t) < 0)) {
					this.seriesModel = t, this.api = i, this.ecModel = e;
					var r = s.retrieveTargetInfo(n, t),
						l = n && n.type,
						h = t.layoutInfo,
						u = !this._oldTree,
						c = this._storage,
						d = "treemapRootToNode" === l && r && c ? {
							rootNodeGroup: c.nodeGroup[r.node.getRawIndex()],
							direction: n.direction
						} : null,
						f = this._giveContainerGroup(h),
						p = this._doRender(f, t, d);
					u || l && "treemapZoomToNode" !== l && "treemapRootToNode" !== l ? p.renderFinally() : this._doAnimation(f, p, t, d), this._resetController(i), this._renderBreadcrumb(t, i, r)
				}
			},
			_giveContainerGroup: function(t) {
				var e = this._containerGroup;
				return e || (e = this._containerGroup = new p, this._initEvents(e), this.group.add(e)), e.position = [t.x, t.y], e
			},
			_doRender: function(t, e, i) {
				function o(t, e, i, n, s) {
					function l(t) {
						return t.getId()
					}
					function h(a, r) {
						var l = null != a ? t[a] : null,
							h = null != r ? e[r] : null;
						if (!(!l || isNaN(s) || s < b.length && b[s] !== l)) {
							var u = _(l, h, i);
							u && o(l && l.viewChildren || [], h && h.viewChildren || [], u, n, s + 1)
						}
					}
					n ? (e = t, m(t, function(t, e) {
						!t.isRemoved() && h(e, e)
					})) : new r(e, t, l, l).add(h).update(h).remove(a.curry(h, null)).execute()
				}
				function l(t) {
					var e = n();
					return t && m(t, function(t, i) {
						var n = e[i];
						m(t, function(t) {
							t && (n.push(t), t.__tmWillDelete = i)
						})
					}), e
				}
				function h() {
					m(x, function(t) {
						m(t, function(t) {
							t.parent && t.parent.remove(t)
						})
					}), m(v, function(t) {
						t.invisible = !0, t.dirty()
					}), m(y, function(t) {
						t.invisible = !1, t.__tmWillVisible = !1, t.dirty()
					})
				}
				var u = e.getData().tree,
					c = this._oldTree,
					d = n(),
					p = n(),
					g = this._storage,
					v = [],
					y = [],
					x = [],
					_ = f(this._renderNode, this, p, g, i, d, v, y),
					w = e.getViewRoot(),
					b = s.getPathToRoot(w);
				o(u.root ? [u.root] : [], c && c.root ? [c.root] : [], t, u === c || !c, 0);
				var x = l(g);
				return this._oldTree = u, this._storage = p, {
					lastsForAnimation: d,
					willDeleteEls: x,
					renderFinally: h
				}
			},
			_renderNode: function(t, e, i, n, r, s, l, h, u) {
				function c(i, a, o) {
					var r = null != y && e[i][y],
						s = n[i];
					return r ? (e[i][y] = null, d(s, r, i)) : b || (r = new a({
						z: o
					}), f(s, r, i)), t[i][v] = r
				}
				function d(t, e, i) {
					var n = t[v] = {};
					n.old = "nodeGroup" === i ? e.position.slice() : a.extend({}, e.shape)
				}
				function f(t, e, a) {
					if ("background" === a) e.invisible = !0, e.__tmWillVisible = !0, s.push(e);
					else {
						var o = t[v] = {},
							r = l.parentNode;
						if (r && (!i || "drilldown" === i.direction)) {
							var h = 0,
								u = 0,
								c = n.background[r.getRawIndex()];
							c && c.old && (h = c.old.width / 2, u = c.old.height / 2), o.old = "nodeGroup" === a ? [h, u] : {
								x: h,
								y: u,
								width: 0,
								height: 0
							}
						}
						o.fadein = "nodeGroup" !== a
					}
				}
				function m(t, e) {
					b ? !t.invisible && r.push(t) : (t.setStyle(e), t.__tmWillVisible || (t.invisible = !1))
				}
				var v = l && l.getRawIndex(),
					y = h && h.getRawIndex(),
					x = l.getLayout(),
					_ = x.width,
					w = x.height,
					b = x.invisible,
					M = c("nodeGroup", p);
				if (M) {
					u.add(M), M.position = [x.x, x.y], M.__tmNodeWidth = _, M.__tmNodeHeight = w;
					var S = c("background", g, 0);
					S && (S.setShape({
						x: 0,
						y: 0,
						width: _,
						height: w
					}), m(S, {
						fill: l.getVisual("borderColor", !0)
					}), M.add(S));
					var A = l.viewChildren;
					if (!A || !A.length) {
						var I = x.borderWidth,
							T = c("content", g, 3);
						if (T) {
							var C = Math.max(_ - 2 * I, 0),
								L = Math.max(w - 2 * I, 0),
								D = l.getModel("label.normal"),
								P = l.getModel("label.normal.textStyle"),
								k = l.getModel("itemStyle.emphasis").getItemStyle(),
								z = l.getModel().get("name"),
								R = P.getTextRect(z),
								O = D.get("show");
							!O || R.height > L ? z = "" : R.width > C && (z = P.get("ellipsis") ? P.ellipsis(z, C) : ""), o.setHoverStyle(T, k), T.dataIndex = l.dataIndex, T.seriesIndex = this.seriesModel.seriesIndex, T.culling = !0, T.setShape({
								x: I,
								y: I,
								width: C,
								height: L
							}), m(T, {
								fill: l.getVisual("color", !0),
								text: z,
								textPosition: D.get("position"),
								textFill: P.getTextColor(),
								textAlign: P.get("align"),
								textVerticalAlign: P.get("baseline"),
								textFont: P.getFont()
							}), M.add(T)
						}
					}
					return M
				}
			},
			_doAnimation: function(t, e, i, n) {
				if (i.get("animation")) {
					var o = i.get("animationDurationUpdate"),
						r = i.get("animationEasing"),
						s = d.createWrap();
					m(e.willDeleteEls, function(t, e) {
						m(t, function(t, e) {
							var i;
							if (!t.invisible && (i = t.__tmWillDelete)) {
								var a, l = t.parent;
								if (n && "drilldown" === n.direction) l === n.rootNodeGroup ? (a = {
									shape: {
										x: 0,
										y: 0,
										width: l.__tmNodeWidth,
										height: l.__tmNodeHeight
									}
								}, t.z = 2) : (a = {
									style: {
										opacity: 0
									}
								}, t.z = 1);
								else {
									var h = 0,
										u = 0;
									l.__tmWillDelete || (h = l.__tmNodeWidth / 2, u = l.__tmNodeHeight / 2), a = "nodeGroup" === i ? {
										position: [h, u],
										style: {
											opacity: 0
										}
									} : {
										shape: {
											x: h,
											y: u,
											width: 0,
											height: 0
										},
										style: {
											opacity: 0
										}
									}
								}
								a && s.add(t, a, o, r)
							}
						})
					}), m(this._storage, function(t, i) {
						m(t, function(t, n) {
							var l = e.lastsForAnimation[i][n],
								h = {};
							l && ("nodeGroup" === i ? l.old && (h.position = t.position.slice(), t.position = l.old) : (l.old && (h.shape = a.extend({}, t.shape), t.setShape(l.old)), l.fadein ? (t.setStyle("opacity", 0), h.style = {
								opacity: 1
							}) : 1 !== t.style.opacity && (h.style = {
								opacity: 1
							})), s.add(t, h, o, r))
						})
					}, this), this._state = "animating", s.done(f(function() {
						this._state = "ready", e.renderFinally()
					}, this)).start()
				}
			},
			_resetController: function(t) {
				var e = this._controller;
				e || (e = this._controller = new h(t.getZr()), e.enable(this.seriesModel.get("roam")), e.on("pan", f(this._onPan, this)), e.on("zoom", f(this._onZoom, this))), e.rect = new u(0, 0, t.getWidth(), t.getHeight())
			},
			_clearController: function() {
				var t = this._controller;
				t && (t.off("pan").off("zoom"), t = null)
			},
			_onPan: function(t, e) {
				if (this._mayClick = !1, "animating" !== this._state && (Math.abs(t) > v || Math.abs(e) > v)) {
					var i = this.seriesModel.getViewRoot();
					if (!i) return;
					var n = i.getLayout();
					if (!n) return;
					this.api.dispatchAction({
						type: "treemapMove",
						from: this.uid,
						seriesId: this.seriesModel.id,
						rootRect: {
							x: n.x + t,
							y: n.y + e,
							width: n.width,
							height: n.height
						}
					})
				}
			},
			_onZoom: function(t, e, i) {
				if (this._mayClick = !1, "animating" !== this._state) {
					var n = this.seriesModel.getViewRoot();
					if (!n) return;
					var a = n.getLayout();
					if (!a) return;
					var o = new u(a.x, a.y, a.width, a.height),
						r = this.seriesModel.layoutInfo;
					e -= r.x, i -= r.y;
					var s = c.create();
					c.translate(s, s, [-e, -i]), c.scale(s, s, [t, t]), c.translate(s, s, [e, i]), o.applyTransform(s), this.api.dispatchAction({
						type: "treemapRender",
						from: this.uid,
						seriesId: this.seriesModel.id,
						rootRect: {
							x: o.x,
							y: o.y,
							width: o.width,
							height: o.height
						}
					})
				}
			},
			_initEvents: function(t) {
				function e(t) {
					var e = this.seriesModel.get("nodeClick", !0);
					if (e) {
						var i = this.findTarget(t.offsetX, t.offsetY);
						if (i) {
							var n = i.node;
							if (n.getLayout().isLeafRoot) this._rootToNode(i);
							else if ("zoomToNode" === e) this._zoomToNode(i);
							else if ("link" === e) {
								var a = n.hostTree.data.getItemModel(n.dataIndex),
									o = a.get("link", !0),
									r = a.get("target", !0) || "blank";
								o && window.open(o, r)
							}
						}
					}
				}
				t.on("mousedown", function(t) {
					"ready" === this._state && (this._mayClick = !0)
				}, this), t.on("mouseup", function(t) {
					this._mayClick && (this._mayClick = !1, "ready" === this._state && e.call(this, t))
				}, this)
			},
			_renderBreadcrumb: function(t, e, i) {
				function n(e) {
					"animating" !== this._state && (s.aboveViewRoot(t.getViewRoot(), e) ? this._rootToNode({
						node: e
					}) : this._zoomToNode({
						node: e
					}))
				}
				i || (i = this.findTarget(e.getWidth() / 2, e.getHeight() / 2), i || (i = {
					node: t.getData().tree.root
				})), (this._breadcrumb || (this._breadcrumb = new l(this.group, f(n, this)))).render(t, e, i.node)
			},
			remove: function() {
				this._clearController(), this._containerGroup && this._containerGroup.removeAll(), this._storage = n(), this._state = "ready", this._breadcrumb && this._breadcrumb.remove()
			},
			dispose: function() {
				this._clearController()
			},
			_zoomToNode: function(t) {
				this.api.dispatchAction({
					type: "treemapZoomToNode",
					from: this.uid,
					seriesId: this.seriesModel.id,
					targetNode: t.node
				})
			},
			_rootToNode: function(t) {
				this.api.dispatchAction({
					type: "treemapRootToNode",
					from: this.uid,
					seriesId: this.seriesModel.id,
					targetNode: t.node
				})
			},
			findTarget: function(t, e) {
				var i, n = this.seriesModel.getViewRoot();
				return n.eachNode({
					attr: "viewChildren",
					order: "preorder"
				}, function(n) {
					var a = this._storage.background[n.getRawIndex()];
					if (a) {
						var o = a.transformCoordToLocal(t, e),
							r = a.shape;
						if (!(r.x <= o[0] && o[0] <= r.x + r.width && r.y <= o[1] && o[1] <= r.y + r.height)) return !1;
						i = {
							node: n,
							offsetX: o[0],
							offsetY: o[1]
						}
					}
				}, this), i
			}
		})
	}, function(t, e, i) {
		for (var n = i(2), a = i(95), o = function() {}, r = ["treemapZoomToNode", "treemapRender", "treemapMove"], s = 0; s < r.length; s++) n.registerAction({
			type: r[s],
			update: "updateView"
		}, o);
		n.registerAction({
			type: "treemapRootToNode",
			update: "updateView"
		}, function(t, e) {
			e.eachComponent({
				mainType: "series",
				subType: "treemap",
				query: t
			}, function(e, i) {
				var n = a.retrieveTargetInfo(t, e);
				if (n) {
					var o = e.getViewRoot();
					o && (t.direction = a.aboveViewRoot(o, n.node) ? "rollup" : "drilldown"), e.resetViewRoot(n.node)
				}
			})
		})
	}, function(t, e, i) {
		function n(t, e, i) {
			var n = {
				mainType: "series",
				subType: "treemap",
				query: i
			};
			t.eachComponent(n, function(t) {
				var n = e.getWidth(),
					o = e.getHeight(),
					r = t.option,
					s = r.size || [],
					l = _(w(r.width, s[0]), n),
					h = _(w(r.height, s[1]), o),
					u = y.getLayoutRect(t.getBoxLayoutParams(), {
						width: e.getWidth(),
						height: e.getHeight()
					}),
					p = i && i.type,
					g = x.retrieveTargetInfo(i, t),
					m = "treemapRender" === p || "treemapMove" === p ? i.rootRect : null,
					v = t.getViewRoot();
				if ("treemapMove" !== p) {
					var M = "treemapZoomToNode" === p ? c(t, g, v, l, h) : m ? [m.width, m.height] : [l, h],
						S = r.sort;
					S && "asc" !== S && "desc" !== S && (S = "desc");
					var A = {
						squareRatio: r.squareRatio,
						sort: S,
						leafDepth: r.leafDepth
					};
					v.setLayout({
						x: 0,
						y: 0,
						width: M[0],
						height: M[1],
						area: M[0] * M[1]
					}), a(v, A, !1, 0)
				}
				v.setLayout(d(u, m, g), !0), t.setLayoutInfo(u), f(t.getData().tree.root, new b(-u.x, -u.y, n, o), x.getPathToRoot(v))
			})
		}
		function a(t, e, i, n) {
			var r, s;
			if (!t.isRemoved()) {
				var l = t.getLayout();
				r = l.width, s = l.height;
				var c = t.getModel("itemStyle.normal"),
					d = c.get("borderWidth"),
					f = c.get("gapWidth") / 2,
					m = d - f,
					v = t.getModel();
				t.setLayout({
					borderWidth: d
				}, !0), r = p(r - 2 * m, 0), s = p(s - 2 * m, 0);
				var y = r * s,
					x = o(t, v, y, e, i, n);
				if (x.length) {
					var _ = {
						x: m,
						y: m,
						width: r,
						height: s
					},
						w = g(r, s),
						b = 1 / 0,
						M = [];
					M.area = 0;
					for (var S = 0, A = x.length; A > S;) {
						var I = x[S];
						M.push(I), M.area += I.getLayout().area;
						var T = h(M, w, e.squareRatio);
						b >= T ? (S++, b = T) : (M.area -= M.pop().getLayout().area, u(M, w, _, f, !1), w = g(_.width, _.height), M.length = M.area = 0, b = 1 / 0)
					}
					if (M.length && u(M, w, _, f, !0), !i) {
						var C = v.get("childrenVisibleMin");
						null != C && C > y && (i = !0)
					}
					for (var S = 0, A = x.length; A > S; S++) a(x[S], e, i, n + 1)
				}
			}
		}
		function o(t, e, i, n, a, o) {
			var h = t.children || [],
				u = n.sort;
			"asc" !== u && "desc" !== u && (u = null);
			var c = null != n.leafDepth && n.leafDepth <= o;
			if (a && !c) return t.viewChildren = [];
			h = m.filter(h, function(t) {
				return !t.isRemoved()
			}), s(h, u);
			var d = l(e, h, u);
			if (0 === d.sum) return t.viewChildren = [];
			if (d.sum = r(e, i, d.sum, u, h), 0 === d.sum) return t.viewChildren = [];
			for (var f = 0, p = h.length; p > f; f++) {
				var g = h[f].getValue() / d.sum * i;
				h[f].setLayout({
					area: g
				})
			}
			return c && (h.length && t.setLayout({
				isLeafRoot: !0
			}, !0), h.length = 0), t.viewChildren = h, t.setLayout({
				dataExtent: d.dataExtent
			}, !0), h
		}
		function r(t, e, i, n, a) {
			if (!n) return i;
			for (var o = t.get("visibleMin"), r = a.length, s = r, l = r - 1; l >= 0; l--) {
				var h = a["asc" === n ? r - l - 1 : l].getValue();
				o > h / i * e && (s = l, i -= h)
			}
			return "asc" === n ? a.splice(0, r - s) : a.splice(s, r - s), i
		}
		function s(t, e) {
			return e && t.sort(function(t, i) {
				return "asc" === e ? t.getValue() - i.getValue() : i.getValue() - t.getValue()
			}), t
		}
		function l(t, e, i) {
			for (var n = 0, a = 0, o = e.length; o > a; a++) n += e[a].getValue();
			var r, s = t.get("visualDimension");
			if (e && e.length) if ("value" === s && i) r = [e[e.length - 1].getValue(), e[0].getValue()], "asc" === i && r.reverse();
			else {
				var r = [1 / 0, -(1 / 0)];
				m.each(e, function(t) {
					var e = t.getValue(s);
					e < r[0] && (r[0] = e), e > r[1] && (r[1] = e)
				})
			} else r = [NaN, NaN];
			return {
				sum: n,
				dataExtent: r
			}
		}
		function h(t, e, i) {
			for (var n, a = 0, o = 1 / 0, r = 0, s = t.length; s > r; r++) n = t[r].getLayout().area, n && (o > n && (o = n), n > a && (a = n));
			var l = t.area * t.area,
				h = e * e * i;
			return l ? p(h * a / l, l / (h * o)) : 1 / 0
		}
		function u(t, e, i, n, a) {
			var o = e === i.width ? 0 : 1,
				r = 1 - o,
				s = ["x", "y"],
				l = ["width", "height"],
				h = i[s[o]],
				u = e ? t.area / e : 0;
			(a || u > i[l[r]]) && (u = i[l[r]]);
			for (var c = 0, d = t.length; d > c; c++) {
				var f = t[c],
					m = {},
					v = u ? f.getLayout().area / u : 0,
					y = m[l[r]] = p(u - 2 * n, 0),
					x = i[s[o]] + i[l[o]] - h,
					_ = c === d - 1 || v > x ? x : v,
					w = m[l[o]] = p(_ - 2 * n, 0);
				m[s[r]] = i[s[r]] + g(n, y / 2), m[s[o]] = h + g(n, w / 2), h += _, f.setLayout(m, !0)
			}
			i[s[r]] += u, i[l[r]] -= u
		}
		function c(t, e, i, n, a) {
			var o = (e || {}).node,
				r = [n, a];
			if (!o || o === i) return r;
			for (var s, l = n * a, h = l * t.option.zoomToNodeRatio; s = o.parentNode;) {
				for (var u = 0, c = s.children, d = 0, f = c.length; f > d; d++) u += c[d].getValue();
				var p = o.getValue();
				if (0 === p) return r;
				h *= u / p;
				var g = s.getModel("itemStyle.normal").get("borderWidth");
				isFinite(g) && (h += 4 * g * g + 4 * g * Math.pow(h, .5)), h > v.MAX_SAFE_INTEGER && (h = v.MAX_SAFE_INTEGER), o = s
			}
			l > h && (h = l);
			var m = Math.pow(h / l, .5);
			return [n * m, a * m]
		}
		function d(t, e, i) {
			if (e) return {
				x: e.x,
				y: e.y
			};
			var n = {
				x: 0,
				y: 0
			};
			if (!i) return n;
			var a = i.node,
				o = a.getLayout();
			if (!o) return n;
			for (var r = [o.width / 2, o.height / 2], s = a; s;) {
				var l = s.getLayout();
				r[0] += l.x, r[1] += l.y, s = s.parentNode
			}
			return {
				x: t.width / 2 - r[0],
				y: t.height / 2 - r[1]
			}
		}
		function f(t, e, i) {
			var n = t.getLayout();
			t.setLayout({
				invisible: n ? !e.intersect(n) : !x.aboveViewRootByViewPath(i, t)
			}, !0);
			for (var a = t.viewChildren || [], o = 0, r = a.length; r > o; o++) {
				var s = new b(e.x - n.x, e.y - n.y, e.width, e.height);
				f(a[o], s, i)
			}
		}
		var p = Math.max,
			g = Math.min,
			m = i(1),
			v = i(4),
			y = i(11),
			x = i(95),
			_ = v.parsePercent,
			w = m.retrieve,
			b = i(8),
			x = i(95);
		t.exports = n
	}, function(t, e, i) {
		function n(t, e, i, s, h, c) {
			var d = t.getModel(),
				p = t.getLayout();
			if (!p.invisible) {
				var m, v = t.getModel(g),
					y = i[t.depth],
					x = a(v, e, y, s),
					_ = v.get("borderColor"),
					w = v.get("borderColorSaturation");
				null != w && (m = o(x, t), _ = r(w, m)), t.setVisual("borderColor", _);
				var b = t.viewChildren;
				if (b && b.length) {
					var M = l(t, d, p, v, x, b);
					f.each(b, function(t, e) {
						if (t.depth >= h.length || t === h[t.depth]) {
							var a = u(d, x, t, e, M, c);
							n(t, a, i, s, h, c)
						}
					})
				} else m = o(x, t), t.setVisual("color", m)
			}
		}
		function a(t, e, i, n) {
			var a = f.extend({}, e);
			return f.each(["color", "colorAlpha", "colorSaturation"], function(o) {
				var r = t.get(o, !0);
				null == r && i && (r = i[o]), null == r && (r = e[o]), null == r && (r = n.get(o)), null != r && (a[o] = r)
			}), a
		}
		function o(t) {
			var e = s(t, "color");
			if (e) {
				var i = s(t, "colorAlpha"),
					n = s(t, "colorSaturation");
				return n && (e = d.modifyHSL(e, null, null, n)), i && (e = d.modifyAlpha(e, i)), e
			}
		}
		function r(t, e) {
			return null != e ? d.modifyHSL(e, null, null, t) : null
		}
		function s(t, e) {
			var i = t[e];
			return null != i && "none" !== i ? i : void 0
		}
		function l(t, e, i, n, a, o) {
			if (o && o.length) {
				var r = h(e, "color") || null != a.color && "none" !== a.color && (h(e, "colorAlpha") || h(e, "colorSaturation"));
				if (r) {
					var s = e.get("colorMappingBy"),
						l = {
							type: r.name,
							dataExtent: i.dataExtent,
							visual: r.range
						};
					"color" !== l.type || "index" !== s && "id" !== s ? l.mappingMethod = "linear" : (l.mappingMethod = "category", l.loop = !0);
					var u = new c(l);
					return u.__drColorMappingBy = s, u
				}
			}
		}
		function h(t, e) {
			var i = t.get(e);
			return p(i) && i.length ? {
				name: e,
				range: i
			} : null
		}
		function u(t, e, i, n, a, o) {
			var r = f.extend({}, e);
			if (a) {
				var s = a.type,
					l = "color" === s && a.__drColorMappingBy,
					h = "index" === l ? n : "id" === l ? o.mapIdToIndex(i.getId()) : i.getValue(t.get("visualDimension"));
				r[s] = a.mapValueToVisual(h)
			}
			return r
		}
		var c = i(73),
			d = i(22),
			f = i(1),
			p = f.isArray,
			g = "itemStyle.normal";
		t.exports = function(t, e) {
			var i = {
				mainType: "series",
				subType: "treemap",
				query: e
			};
			t.eachComponent(i, function(t) {
				var e = t.getData().tree,
					i = e.root,
					a = t.getModel(g);
				if (!i.isRemoved()) {
					var o = f.map(e.levelModels, function(t) {
						return t ? t.get(g) : null
					});
					n(i, {}, o, a, t.getViewRoot().getAncestors(), t)
				}
			})
		}
	}, function(t, e, i) {
		"use strict";
		i(200), i(297)
	}, function(t, e, i) {
		"use strict";

		function n(t, e, i, n) {
			var a = t.coordToPoint([e, n]),
				o = t.coordToPoint([i, n]);
			return {
				x1: a[0],
				y1: a[1],
				x2: o[0],
				y2: o[1]
			}
		}
		var a = i(1),
			o = i(3),
			r = i(12),
			s = ["axisLine", "axisLabel", "axisTick", "splitLine", "splitArea"];
		i(2).extendComponentView({
			type: "angleAxis",
			render: function(t, e) {
				if (this.group.removeAll(), t.get("show")) {
					var i = e.getComponent("polar", t.get("polarIndex")),
						n = t.axis,
						o = i.coordinateSystem,
						r = o.getRadiusAxis().getExtent(),
						l = n.getTicksCoords();
					"category" !== n.type && l.pop(), a.each(s, function(e) {
						t.get(e + ".show") && this["_" + e](t, o, l, r)
					}, this)
				}
			},
			_axisLine: function(t, e, i, n) {
				var a = t.getModel("axisLine.lineStyle"),
					r = new o.Circle({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r: n[1]
						},
						style: a.getLineStyle(),
						z2: 1,
						silent: !0
					});
				r.style.fill = null, this.group.add(r)
			},
			_axisTick: function(t, e, i, r) {
				var s = t.getModel("axisTick"),
					l = (s.get("inside") ? -1 : 1) * s.get("length"),
					h = a.map(i, function(t) {
						return new o.Line({
							shape: n(e, r[1], r[1] + l, t)
						})
					});
				this.group.add(o.mergePath(h, {
					style: s.getModel("lineStyle").getLineStyle()
				}))
			},
			_axisLabel: function(t, e, i, n) {
				for (var a = t.axis, s = t.get("data"), l = t.getModel("axisLabel"), h = l.getModel("textStyle"), u = t.getFormattedLabels(), c = l.get("margin"), d = a.getLabelsCoords(), f = 0; f < i.length; f++) {
					var p = n[1],
						g = e.coordToPoint([p + c, d[f]]),
						m = e.cx,
						v = e.cy,
						y = Math.abs(g[0] - m) / p < .3 ? "center" : g[0] > m ? "left" : "right",
						x = Math.abs(g[1] - v) / p < .3 ? "middle" : g[1] > v ? "top" : "bottom",
						_ = h;
					s && s[f] && s[f].textStyle && (_ = new r(s[f].textStyle, h)), this.group.add(new o.Text({
						style: {
							x: g[0],
							y: g[1],
							fill: _.getTextColor(),
							text: u[f],
							textAlign: y,
							textVerticalAlign: x,
							textFont: _.getFont()
						},
						silent: !0
					}))
				}
			},
			_splitLine: function(t, e, i, r) {
				var s = t.getModel("splitLine"),
					l = s.getModel("lineStyle"),
					h = l.get("color"),
					u = 0;
				h = h instanceof Array ? h : [h];
				for (var c = [], d = 0; d < i.length; d++) {
					var f = u++ % h.length;
					c[f] = c[f] || [], c[f].push(new o.Line({
						shape: n(e, r[0], r[1], i[d])
					}))
				}
				for (var d = 0; d < c.length; d++) this.group.add(o.mergePath(c[d], {
					style: a.defaults({
						stroke: h[d % h.length]
					}, l.getLineStyle()),
					silent: !0,
					z: t.get("z")
				}))
			},
			_splitArea: function(t, e, i, n) {
				var r = t.getModel("splitArea"),
					s = r.getModel("areaStyle"),
					l = s.get("color"),
					h = 0;
				l = l instanceof Array ? l : [l];
				for (var u = [], c = Math.PI / 180, d = -i[0] * c, f = Math.min(n[0], n[1]), p = Math.max(n[0], n[1]), g = t.get("clockwise"), m = 1; m < i.length; m++) {
					var v = h++ % l.length;
					u[v] = u[v] || [], u[v].push(new o.Sector({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r0: f,
							r: p,
							startAngle: d,
							endAngle: -i[m] * c,
							clockwise: g
						},
						silent: !0
					})), d = -i[m] * c
				}
				for (var m = 0; m < u.length; m++) this.group.add(o.mergePath(u[m], {
					style: a.defaults({
						fill: l[m % l.length]
					}, s.getAreaStyle()),
					silent: !0
				}))
			}
		})
	}, function(t, e, i) {
		function n(t, e, i) {
			return i && "axisAreaSelect" === i.type && e.findComponents({
				mainType: "parallelAxis",
				query: i
			})[0] === t
		}
		var a = i(1),
			o = i(48),
			r = i(160),
			s = ["axisLine", "axisLabel", "axisTick", "axisName"],
			l = i(2).extendComponentView({
				type: "parallelAxis",
				_selectController: null,
				render: function(t, e, i, r) {
					if (!n(t, e, r) && (this.axisModel = t, this.api = i, this.group.removeAll(), t.get("show"))) {
						var l = e.getComponent("parallel", t.get("parallelIndex")).coordinateSystem,
							h = t.getAreaSelectStyle(),
							u = h.width,
							c = l.getAxisLayout(t.axis.dim),
							d = a.extend({
								strokeContainThreshold: u,
								axisLineSilent: !(u > 0)
							}, c),
							f = new o(t, d);
						a.each(s, f.add, f);
						var p = f.getGroup();
						this.group.add(p), this._buildSelectController(p, h, t, i)
					}
				},
				_buildSelectController: function(t, e, i, n) {
					var o = i.axis,
						s = this._selectController;
					s || (s = this._selectController = new r("line", n.getZr(), e), s.on("selected", a.bind(this._onSelected, this))), s.enable(t);
					var l = a.map(i.activeIntervals, function(t) {
						return [o.dataToCoord(t[0], !0), o.dataToCoord(t[1], !0)]
					});
					s.update(l)
				},
				_onSelected: function(t) {
					var e = this.axisModel,
						i = e.axis,
						n = a.map(t, function(t) {
							return [i.coordToData(t[0], !0), i.coordToData(t[1], !0)]
						});
					this.api.dispatchAction({
						type: "axisAreaSelect",
						parallelAxisId: e.id,
						intervals: n
					})
				},
				remove: function() {
					this._selectController && this._selectController.disable()
				},
				dispose: function() {
					this._selectController && (this._selectController.dispose(), this._selectController = null)
				}
			});
		t.exports = l
	}, function(t, e, i) {
		"use strict";

		function n(t, e, i) {
			return {
				position: [t.cx, t.cy],
				rotation: i / 180 * Math.PI,
				labelDirection: -1,
				tickDirection: -1,
				nameDirection: 1,
				labelRotation: e.getModel("axisLabel").get("rotate"),
				z2: 1
			}
		}
		var a = i(1),
			o = i(3),
			r = i(48),
			s = ["axisLine", "axisLabel", "axisTick", "axisName"],
			l = ["splitLine", "splitArea"];
		i(2).extendComponentView({
			type: "radiusAxis",
			render: function(t, e) {
				if (this.group.removeAll(), t.get("show")) {
					var i = e.getComponent("polar", t.get("polarIndex")),
						o = i.coordinateSystem.getAngleAxis(),
						h = t.axis,
						u = i.coordinateSystem,
						c = h.getTicksCoords(),
						d = o.getExtent()[0],
						f = h.getExtent(),
						p = n(u, t, d),
						g = new r(t, p);
					a.each(s, g.add, g), this.group.add(g.getGroup()), a.each(l, function(e) {
						t.get(e + ".show") && this["_" + e](t, u, d, f, c)
					}, this)
				}
			},
			_splitLine: function(t, e, i, n, r) {
				var s = t.getModel("splitLine"),
					l = s.getModel("lineStyle"),
					h = l.get("color"),
					u = 0;
				h = h instanceof Array ? h : [h];
				for (var c = [], d = 0; d < r.length; d++) {
					var f = u++ % h.length;
					c[f] = c[f] || [], c[f].push(new o.Circle({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r: r[d]
						},
						silent: !0
					}))
				}
				for (var d = 0; d < c.length; d++) this.group.add(o.mergePath(c[d], {
					style: a.defaults({
						stroke: h[d % h.length],
						fill: null
					}, l.getLineStyle()),
					silent: !0
				}))
			},
			_splitArea: function(t, e, i, n, r) {
				var s = t.getModel("splitArea"),
					l = s.getModel("areaStyle"),
					h = l.get("color"),
					u = 0;
				h = h instanceof Array ? h : [h];
				for (var c = [], d = r[0], f = 1; f < r.length; f++) {
					var p = u++ % h.length;
					c[p] = c[p] || [], c[p].push(new o.Sector({
						shape: {
							cx: e.cx,
							cy: e.cy,
							r0: d,
							r: r[f],
							startAngle: 0,
							endAngle: 2 * Math.PI
						},
						silent: !0
					})), d = r[f]
				}
				for (var f = 0; f < c.length; f++) this.group.add(o.mergePath(c[f], {
					style: a.defaults({
						fill: h[f % h.length]
					}, l.getAreaStyle()),
					silent: !0
				}))
			}
		})
	}, function(t, e, i) {
		var n = i(2),
			a = {
				type: "axisAreaSelect",
				event: "axisAreaSelected",
				update: "updateVisual"
			};
		n.registerAction(a, function(t, e) {
			e.eachComponent({
				mainType: "parallelAxis",
				query: t
			}, function(e) {
				e.axis.model.setActiveIntervals(t.intervals)
			})
		})
	}, function(t, e, i) {
		i(221), i(302), i(205)
	}, function(t, e, i) {
		"use strict";
		var n = i(210);
		t.exports = i(2).extendComponentView({
			type: "geo",
			init: function(t, e) {
				var i = new n(e, !0);
				this._mapDraw = i, this.group.add(i.group)
			},
			render: function(t, e, i) {
				t.get("show") && this._mapDraw.draw(t, e, i)
			}
		})
	}, function(t, e, i) {
		i(222), i(300), i(298)
	}, function(t, e, i) {
		"use strict";
		i(200), i(296), i(307), i(2).extendComponentView({
			type: "polar"
		})
	}, function(t, e, i) {
		i(341), i(342), i(306)
	}, function(t, e, i) {
		var n = i(48),
			a = i(1),
			o = i(3),
			r = ["axisLine", "axisLabel", "axisTick", "axisName"];
		t.exports = i(2).extendComponentView({
			type: "radar",
			render: function(t, e, i) {
				var n = this.group;
				n.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t)
			},
			_buildAxes: function(t) {
				var e = t.coordinateSystem,
					i = e.getIndicatorAxes(),
					o = a.map(i, function(t) {
						var i = new n(t.model, {
							position: [e.cx, e.cy],
							rotation: t.angle,
							labelDirection: -1,
							tickDirection: -1,
							nameDirection: 1
						});
						return i
					});
				a.each(o, function(t) {
					a.each(r, t.add, t), this.group.add(t.getGroup())
				}, this)
			},
			_buildSplitLineAndArea: function(t) {
				function e(t, e, i) {
					var n = i % e.length;
					return t[n] = t[n] || [], n
				}
				var i = t.coordinateSystem,
					n = t.get("splitNumber"),
					r = i.getIndicatorAxes();
				if (r.length) {
					var s = t.get("shape"),
						l = t.getModel("splitLine"),
						h = t.getModel("splitArea"),
						u = l.getModel("lineStyle"),
						c = h.getModel("areaStyle"),
						d = l.get("show"),
						f = h.get("show"),
						p = u.get("color"),
						g = c.get("color");
					p = a.isArray(p) ? p : [p], g = a.isArray(g) ? g : [g];
					var m = [],
						v = [];
					if ("circle" === s) for (var y = r[0].getTicksCoords(), x = i.cx, _ = i.cy, w = 0; w < y.length; w++) {
						if (d) {
							var b = e(m, p, w);
							m[b].push(new o.Circle({
								shape: {
									cx: x,
									cy: _,
									r: y[w]
								}
							}))
						}
						if (f && w < y.length - 1) {
							var b = e(v, g, w);
							v[b].push(new o.Ring({
								shape: {
									cx: x,
									cy: _,
									r0: y[w],
									r: y[w + 1]
								}
							}))
						}
					} else for (var M = a.map(r, function(t, e) {
						var n = t.getTicksCoords();
						return a.map(n, function(t) {
							return i.coordToPoint(t, e)
						})
					}), S = [], w = 0; n >= w; w++) {
						for (var A = [], I = 0; I < r.length; I++) A.push(M[I][w]);
						if (A.push(A[0].slice()), d) {
							var b = e(m, p, w);
							m[b].push(new o.Polyline({
								shape: {
									points: A
								}
							}))
						}
						if (f && S) {
							var b = e(v, g, w - 1);
							v[b].push(new o.Polygon({
								shape: {
									points: A.concat(S)
								}
							}))
						}
						S = A.slice().reverse()
					}
					var T = u.getLineStyle(),
						C = c.getAreaStyle();
					a.each(v, function(t, e) {
						this.group.add(o.mergePath(t, {
							style: a.defaults({
								stroke: "none",
								fill: g[e % g.length]
							}, C),
							silent: !0
						}))
					}, this), a.each(m, function(t, e) {
						this.group.add(o.mergePath(t, {
							style: a.defaults({
								fill: "none",
								stroke: p[e % p.length]
							}, T),
							silent: !0
						}))
					}, this)
				}
			}
		})
	}, function(t, e, i) {
		i(200), i(299)
	}, function(t, e, i) {
		var n = i(2);
		n.registerPreprocessor(i(314)), i(316), i(315), i(309), i(310)
	}, function(t, e, i) {
		var n = i(312);
		t.exports = n.extend({
			type: "timeline.slider",
			defaultOption: {
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "#ccc",
				borderWidth: 0,
				orient: "horizontal",
				inverse: !1,
				tooltip: {
					trigger: "item"
				},
				symbol: "emptyCircle",
				symbolSize: 10,
				lineStyle: {
					show: !0,
					width: 2,
					color: "#304654"
				},
				label: {
					position: "auto",
					normal: {
						show: !0,
						interval: "auto",
						rotate: 0,
						textStyle: {
							color: "#304654"
						}
					},
					emphasis: {
						show: !0,
						textStyle: {
							color: "#c23531"
						}
					}
				},
				itemStyle: {
					normal: {
						color: "#304654",
						borderWidth: 1
					},
					emphasis: {
						color: "#c23531"
					}
				},
				checkpointStyle: {
					symbol: "circle",
					symbolSize: 13,
					color: "#c23531",
					borderWidth: 5,
					borderColor: "rgba(194,53,49, 0.5)",
					animation: !0,
					animationDuration: 300,
					animationEasing: "quinticInOut"
				},
				controlStyle: {
					show: !0,
					showPlayBtn: !0,
					showPrevBtn: !0,
					showNextBtn: !0,
					itemSize: 22,
					itemGap: 12,
					position: "left",
					playIcon: "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",
					stopIcon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
					nextIcon: "path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",
					prevIcon: "path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",
					normal: {
						color: "#304654",
						borderColor: "#304654",
						borderWidth: 1
					},
					emphasis: {
						color: "#c23531",
						borderColor: "#c23531",
						borderWidth: 2
					}
				},
				data: []
			}
		})
	}, function(t, e, i) {
		function n(t, e) {
			return h.getLayoutRect(t.getBoxLayoutParams(), {
				width: e.getWidth(),
				height: e.getHeight()
			}, t.get("padding"))
		}
		function a(t, e, i, n) {
			var a = l.makePath(t.get(e).replace(/^path:\/\//, ""), s.clone(n || {}), new p(i[0], i[1], i[2], i[3]), "center");
			return a
		}
		function o(t, e, i, n, a, o) {
			var r = t.get("symbol"),
				l = e.get("color"),
				h = t.get("symbolSize"),
				u = h / 2,
				c = e.getItemStyle(["color", "symbol", "symbolSize"]);
			return a ? (a.setStyle(c), a.setColor(l), i.add(a), o && o.onUpdate(a)) : (a = d.createSymbol(r, -u, -u, h, h, l), i.add(a), o && o.onCreate(a)), n = s.merge({
				rectHover: !0,
				style: c,
				z2: 100
			}, n, !0), a.attr(n), a
		}
		function r(t, e, i, n, a) {
			if (!t.dragging) {
				var o = n.getModel("checkpointStyle"),
					r = i.dataToCoord(n.getData().get(["value"], e));
				a || !o.get("animation", !0) ? t.attr({
					position: [r, 0]
				}) : (t.stopAnimation(!0), t.animateTo({
					position: [r, 0]
				}, o.get("animationDuration", !0), o.get("animationEasing", !0)))
			}
		}
		var s = i(1),
			l = i(3),
			h = i(11),
			u = i(313),
			c = i(311),
			d = i(24),
			f = i(23),
			p = i(8),
			g = i(19),
			m = i(4),
			v = i(7),
			y = i(9),
			x = y.encodeHTML,
			_ = s.bind,
			w = s.each,
			b = Math.PI;
		t.exports = u.extend({
			type: "timeline.slider",
			init: function(t, e) {
				this.api = e, this._axis, this._viewRect, this._timer, this._currentPointer, this._mainGroup, this._labelGroup
			},
			render: function(t, e, i, n) {
				if (this.model = t, this.api = i, this.ecModel = e, this.group.removeAll(), t.get("show", !0)) {
					var a = this._layout(t, i),
						o = this._createGroup("mainGroup"),
						r = this._createGroup("labelGroup"),
						s = this._axis = this._createAxis(a, t);
					w(["AxisLine", "AxisTick", "Control", "CurrentPointer"], function(e) {
						this["_render" + e](a, o, s, t)
					}, this), this._renderAxisLabel(a, r, s, t), this._position(a, t)
				}
				this._doPlayStop()
			},
			remove: function() {
				this._clearTimer(), this.group.removeAll()
			},
			dispose: function() {
				this._clearTimer()
			},
			_layout: function(t, e) {
				var i = t.get("label.normal.position"),
					a = t.get("orient"),
					o = n(t, e);
				null == i || "auto" === i ? i = "horizontal" === a ? o.y + o.height / 2 < e.getHeight() / 2 ? "-" : "+" : o.x + o.width / 2 < e.getWidth() / 2 ? "+" : "-" : isNaN(i) && (i = {
					horizontal: {
						top: "-",
						bottom: "+"
					},
					vertical: {
						left: "-",
						right: "+"
					}
				}[a][i]);
				var r = {
					horizontal: "center",
					vertical: i >= 0 || "+" === i ? "left" : "right"
				},
					s = {
						horizontal: i >= 0 || "+" === i ? "top" : "bottom",
						vertical: "middle"
					},
					l = {
						horizontal: 0,
						vertical: b / 2
					},
					h = "vertical" === a ? o.height : o.width,
					u = t.getModel("controlStyle"),
					c = u.get("show"),
					d = c ? u.get("itemSize") : 0,
					f = c ? u.get("itemGap") : 0,
					p = d + f,
					g = t.get("label.normal.rotate") || 0;
				g = g * b / 180;
				var m, v, y, x, _ = u.get("position", !0),
					c = u.get("show", !0),
					w = c && u.get("showPlayBtn", !0),
					M = c && u.get("showPrevBtn", !0),
					S = c && u.get("showNextBtn", !0),
					A = 0,
					I = h;
				return "left" === _ || "bottom" === _ ? (w && (m = [0, 0], A += p), M && (v = [A, 0], A += p), S && (y = [I - d, 0], I -= p)) : (w && (m = [I - d, 0], I -= p), M && (v = [0, 0], A += p), S && (y = [I - d, 0], I -= p)), x = [A, I], t.get("inverse") && x.reverse(), {
					viewRect: o,
					mainLength: h,
					orient: a,
					rotation: l[a],
					labelRotation: g,
					labelPosOpt: i,
					labelAlign: r[a],
					labelBaseline: s[a],
					playPosition: m,
					prevBtnPosition: v,
					nextBtnPosition: y,
					axisExtent: x,
					controlSize: d,
					controlGap: f
				}
			},
			_position: function(t, e) {
				function i(t) {
					var e = t.position;
					t.origin = [c[0][0] - e[0], c[1][0] - e[1]]
				}
				function n(t) {
					return [[t.x, t.x + t.width], [t.y, t.y + t.height]]
				}
				function a(t, e, i, n, a) {
					t[n] += i[n][a] - e[n][a]
				}
				var o = this._mainGroup,
					r = this._labelGroup,
					s = t.viewRect;
				if ("vertical" === t.orient) {
					var l = g.create(),
						h = s.x,
						u = s.y + s.height;
					g.translate(l, l, [-h, -u]), g.rotate(l, l, -b / 2), g.translate(l, l, [h, u]), s = s.clone(), s.applyTransform(l)
				}
				var c = n(s),
					d = n(o.getBoundingRect()),
					f = n(r.getBoundingRect()),
					p = o.position,
					m = r.position;
				m[0] = p[0] = c[0][0];
				var v = t.labelPosOpt;
				if (isNaN(v)) {
					var y = "+" === v ? 0 : 1;
					a(p, d, c, 1, y), a(m, f, c, 1, 1 - y)
				} else {
					var y = v >= 0 ? 0 : 1;
					a(p, d, c, 1, y), m[1] = p[1] + v
				}
				o.position = p, r.position = m, o.rotation = r.rotation = t.rotation, i(o), i(r)
			},
			_createAxis: function(t, e) {
				var i = e.getData(),
					n = e.get("axisType"),
					a = f.createScaleByModel(e, n),
					o = i.getDataExtent("value");
				a.setExtent(o[0], o[1]), this._customizeScale(a, i), a.niceTicks();
				var r = new c("value", a, t.axisExtent, n);
				return r.model = e, r
			},
			_customizeScale: function(t, e) {
				t.getTicks = function() {
					return e.mapArray(["value"], function(t) {
						return t
					})
				}, t.getTicksLabels = function() {
					return s.map(this.getTicks(), t.getLabel, t)
				}
			},
			_createGroup: function(t) {
				var e = this["_" + t] = new l.Group;
				return this.group.add(e), e
			},
			_renderAxisLine: function(t, e, i, n) {
				var a = i.getExtent();
				n.get("lineStyle.show") && e.add(new l.Line({
					shape: {
						x1: a[0],
						y1: 0,
						x2: a[1],
						y2: 0
					},
					style: s.extend({
						lineCap: "round"
					}, n.getModel("lineStyle").getLineStyle()),
					silent: !0,
					z2: 1
				}))
			},
			_renderAxisTick: function(t, e, i, n) {
				var a = n.getData(),
					r = i.scale.getTicks(),
					s = this._prepareTooltipHostModel(a, n);
				w(r, function(t, n) {
					var r = i.dataToCoord(t),
						h = a.getItemModel(n),
						u = h.getModel("itemStyle.normal"),
						c = h.getModel("itemStyle.emphasis"),
						d = {
							position: [r, 0],
							onclick: _(this._changeTimeline, this, n)
						},
						f = o(h, u, e, d);
					l.setHoverStyle(f, c.getItemStyle()), h.get("tooltip") ? (f.dataIndex = n, f.dataModel = s) : f.dataIndex = f.dataModel = null
				}, this)
			},
			_prepareTooltipHostModel: function(t, e) {
				var i = v.createDataFormatModel({}, t, e.get("data")),
					n = this;
				return i.formatTooltip = function(t) {
					return x(n._axis.scale.getLabel(t))
				}, i
			},
			_renderAxisLabel: function(t, e, i, n) {
				var a = n.getModel("label.normal");
				if (a.get("show")) {
					var o = n.getData(),
						r = i.scale.getTicks(),
						s = f.getFormattedLabels(i, a.get("formatter")),
						h = i.getLabelInterval();
					w(r, function(n, a) {
						if (!i.isLabelIgnored(a, h)) {
							var r = o.getItemModel(a),
								u = r.getModel("label.normal.textStyle"),
								c = r.getModel("label.emphasis.textStyle"),
								d = i.dataToCoord(n),
								f = new l.Text({
									style: {
										text: s[a],
										textAlign: t.labelAlign,
										textVerticalAlign: t.labelBaseline,
										textFont: u.getFont(),
										fill: u.getTextColor()
									},
									position: [d, 0],
									rotation: t.labelRotation - t.rotation,
									onclick: _(this._changeTimeline, this, a),
									silent: !1
								});
							e.add(f), l.setHoverStyle(f, c.getItemStyle())
						}
					}, this)
				}
			},
			_renderControl: function(t, e, i, n) {
				function o(t, i, o, d) {
					if (t) {
						var f = {
							position: t,
							origin: [r / 2, 0],
							rotation: d ? -s : 0,
							rectHover: !0,
							style: h,
							onclick: o
						},
							p = a(n, i, c, f);
						e.add(p), l.setHoverStyle(p, u)
					}
				}
				var r = t.controlSize,
					s = t.rotation,
					h = n.getModel("controlStyle.normal").getItemStyle(),
					u = n.getModel("controlStyle.emphasis").getItemStyle(),
					c = [0, -r / 2, r, r],
					d = n.getPlayState(),
					f = n.get("inverse", !0);
				o(t.nextBtnPosition, "controlStyle.nextIcon", _(this._changeTimeline, this, f ? "-" : "+")), o(t.prevBtnPosition, "controlStyle.prevIcon", _(this._changeTimeline, this, f ? "+" : "-")), o(t.playPosition, "controlStyle." + (d ? "stopIcon" : "playIcon"), _(this._handlePlayClick, this, !d), !0)
			},
			_renderCurrentPointer: function(t, e, i, n) {
				var a = n.getData(),
					s = n.getCurrentIndex(),
					l = a.getItemModel(s).getModel("checkpointStyle"),
					h = this,
					u = {
						onCreate: function(t) {
							t.draggable = !0, t.drift = _(h._handlePointerDrag, h), t.ondragend = _(h._handlePointerDragend, h), r(t, s, i, n, !0)
						},
						onUpdate: function(t) {
							r(t, s, i, n)
						}
					};
				this._currentPointer = o(l, l, this._mainGroup, {}, this._currentPointer, u)
			},
			_handlePlayClick: function(t) {
				this._clearTimer(), this.api.dispatchAction({
					type: "timelinePlayChange",
					playState: t,
					from: this.uid
				})
			},
			_handlePointerDrag: function(t, e, i) {
				this._clearTimer(), this._pointerChangeTimeline([i.offsetX, i.offsetY])
			},
			_handlePointerDragend: function(t) {
				this._pointerChangeTimeline([t.offsetX, t.offsetY], !0)
			},
			_pointerChangeTimeline: function(t, e) {
				var i = this._toAxisCoord(t)[0],
					n = this._axis,
					a = m.asc(n.getExtent().slice());
				i > a[1] && (i = a[1]), i < a[0] && (i = a[0]), this._currentPointer.position[0] = i, this._currentPointer.dirty();
				var o = this._findNearestTick(i),
					r = this.model;
				(e || o !== r.getCurrentIndex() && r.get("realtime")) && this._changeTimeline(o)
			},
			_doPlayStop: function() {
				function t() {
					var t = this.model;
					this._changeTimeline(t.getCurrentIndex() + (t.get("rewind", !0) ? -1 : 1))
				}
				this._clearTimer(), this.model.getPlayState() && (this._timer = setTimeout(_(t, this), this.model.get("playInterval")))
			},
			_toAxisCoord: function(t) {
				var e = this._mainGroup.getLocalTransform();
				return l.applyTransform(t, e, !0)
			},
			_findNearestTick: function(t) {
				var e, i = this.model.getData(),
					n = 1 / 0,
					a = this._axis;
				return i.each(["value"], function(i, o) {
					var r = a.dataToCoord(i),
						s = Math.abs(r - t);
					n > s && (n = s, e = o)
				}), e
			},
			_clearTimer: function() {
				this._timer && (clearTimeout(this._timer), this._timer = null)
			},
			_changeTimeline: function(t) {
				var e = this.model.getCurrentIndex();
				"+" === t ? t = e + 1 : "-" === t && (t = e - 1), this.api.dispatchAction({
					type: "timelineChange",
					currentIndex: t,
					from: this.uid
				})
			}
		})
	}, function(t, e, i) {
		var n = i(1),
			a = i(43),
			o = i(23),
			r = function(t, e, i, n) {
				a.call(this, t, e, i), this.type = n || "value", this._autoLabelInterval, this.model = null
			};
		r.prototype = {
			constructor: r,
			getLabelInterval: function() {
				var t = this.model,
					e = t.getModel("label.normal"),
					i = e.get("interval");
				if (null != i && "auto" != i) return i;
				var i = this._autoLabelInterval;
				return i || (i = this._autoLabelInterval = o.getAxisLabelInterval(n.map(this.scale.getTicks(), this.dataToCoord, this), o.getFormattedLabels(this, e.get("formatter")), e.getModel("textStyle").getFont(), "horizontal" === t.get("orient"))), i
			},
			isLabelIgnored: function(t) {
				if ("category" === this.type) {
					var e = this.getLabelInterval();
					return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
				}
			}
		}, n.inherits(r, a), t.exports = r
	}, function(t, e, i) {
		var n = i(10),
			a = i(14),
			o = i(1),
			r = i(7),
			s = n.extend({
				type: "timeline",
				layoutMode: "box",
				defaultOption: {
					zlevel: 0,
					z: 4,
					show: !0,
					axisType: "time",
					realtime: !0,
					left: "20%",
					top: null,
					right: "20%",
					bottom: 0,
					width: null,
					height: 40,
					padding: 5,
					controlPosition: "left",
					autoPlay: !1,
					rewind: !1,
					loop: !0,
					playInterval: 2e3,
					currentIndex: 0,
					itemStyle: {
						normal: {},
						emphasis: {}
					},
					label: {
						normal: {
							textStyle: {
								color: "#000"
							}
						},
						emphasis: {}
					},
					data: []
				},
				init: function(t, e, i) {
					this._data, this._names, this.mergeDefaultAndTheme(t, i), this._initData()
				},
				mergeOption: function(t) {
					s.superApply(this, "mergeOption", arguments), this._initData()
				},
				setCurrentIndex: function(t) {
					null == t && (t = this.option.currentIndex);
					var e = this._data.count();
					this.option.loop ? t = (t % e + e) % e : (t >= e && (t = e - 1), 0 > t && (t = 0)), this.option.currentIndex = t
				},
				getCurrentIndex: function() {
					return this.option.currentIndex
				},
				isIndexMax: function() {
					return this.getCurrentIndex() >= this._data.count() - 1
				},
				setPlayState: function(t) {
					this.option.autoPlay = !! t
				},
				getPlayState: function() {
					return !!this.option.autoPlay
				},
				_initData: function() {
					var t = this.option,
						e = t.data || [],
						i = t.axisType,
						n = this._names = [];
					if ("category" === i) {
						var s = [];
						o.each(e, function(t, e) {
							var i, a = r.getDataItemValue(t);
							o.isObject(t) ? (i = o.clone(t), i.value = e) : i = e, s.push(i), o.isString(a) || null != a && !isNaN(a) || (a = ""), n.push(a + "")
						}), e = s
					}
					var l = {
						category: "ordinal",
						time: "time"
					}[i] || "number",
						h = this._data = new a([{
							name: "value",
							type: l
						}], this);
					h.initData(e, n)
				},
				getData: function() {
					return this._data
				},
				getCategories: function() {
					return "category" === this.get("axisType") ? this._names.slice() : void 0
				}
			});
		t.exports = s
	}, function(t, e, i) {
		var n = i(54);
		t.exports = n.extend({
			type: "timeline"
		})
	}, function(t, e, i) {
		function n(t) {
			var e = t.type,
				i = {
					number: "value",
					time: "time"
				};
			if (i[e] && (t.axisType = i[e], delete t.type), a(t), o(t, "controlPosition")) {
				var n = t.controlStyle || (t.controlStyle = {});
				o(n, "position") || (n.position = t.controlPosition), "none" !== n.position || o(n, "show") || (n.show = !1, delete n.position), delete t.controlPosition
			}
			r.each(t.data || [], function(t) {
				r.isObject(t) && !r.isArray(t) && (!o(t, "value") && o(t, "name") && (t.value = t.name), a(t))
			})
		}
		function a(t) {
			var e = t.itemStyle || (t.itemStyle = {}),
				i = e.emphasis || (e.emphasis = {}),
				n = t.label || t.label || {},
				a = n.normal || (n.normal = {}),
				s = {
					normal: 1,
					emphasis: 1
				};
			r.each(n, function(t, e) {
				s[e] || o(a, e) || (a[e] = t)
			}), i.label && !o(n, "emphasis") && (n.emphasis = i.label, delete i.label)
		}
		function o(t, e) {
			return t.hasOwnProperty(e)
		}
		var r = i(1);
		t.exports = function(t) {
			var e = t && t.timeline;
			r.isArray(e) || (e = e ? [e] : []), r.each(e, function(t) {
				t && n(t)
			})
		}
	}, function(t, e, i) {
		var n = i(2);
		n.registerAction({
			type: "timelineChange",
			event: "timelineChanged",
			update: "prepareAndUpdate"
		}, function(t, e) {
			var i = e.getComponent("timeline");
			i && null != t.currentIndex && (i.setCurrentIndex(t.currentIndex), !i.get("loop", !0) && i.isIndexMax() && i.setPlayState(!1)), e.resetOption("timeline")
		}), n.registerAction({
			type: "timelinePlayChange",
			event: "timelinePlayChanged",
			update: "update"
		}, function(t, e) {
			var i = e.getComponent("timeline");
			i && null != t.playState && i.setPlayState(t.playState)
		})
	}, function(t, e, i) {
		i(10).registerSubTypeDefaulter("timeline", function() {
			return "slider"
		})
	}, function(t, e, i) {
		i(322), i(323)
	}, function(t, e, i) {
		var n = i(212),
			a = i(1),
			o = i(4),
			r = [20, 140],
			s = n.extend({
				type: "visualMap.continuous",
				defaultOption: {
					align: "auto",
					calculable: !1,
					range: [-(1 / 0), 1 / 0],
					hoverLink: !0,
					realtime: !0,
					itemWidth: null,
					itemHeight: null
				},
				doMergeOption: function(t, e) {
					s.superApply(this, "doMergeOption", arguments), this.resetTargetSeries(t, e), this.resetExtent(), this.resetVisual(function(t) {
						t.mappingMethod = "linear"
					}), this._resetRange()
				},
				resetItemSize: function() {
					n.prototype.resetItemSize.apply(this, arguments);
					var t = this.itemSize;
					"horizontal" === this._orient && t.reverse(), (null == t[0] || isNaN(t[0])) && (t[0] = r[0]), (null == t[1] || isNaN(t[1])) && (t[1] = r[1])
				},
				_resetRange: function() {
					var t = this.getExtent(),
						e = this.option.range;
					e[0] > e[1] && e.reverse(), e[0] = Math.max(e[0], t[0]), e[1] = Math.min(e[1], t[1])
				},
				completeVisualOption: function() {
					n.prototype.completeVisualOption.apply(this, arguments), a.each(this.stateList, function(t) {
						var e = this.option.controller[t].symbolSize;
						e && e[0] !== e[1] && (e[0] = 0)
					}, this)
				},
				setSelected: function(t) {
					this.option.range = t.slice(), this._resetRange()
				},
				getSelected: function() {
					var t = this.getExtent(),
						e = o.asc((this.get("range") || []).slice());
					return e[0] > t[1] && (e[0] = t[1]), e[1] > t[1] && (e[1] = t[1]), e[0] < t[0] && (e[0] = t[0]), e[1] < t[0] && (e[1] = t[0]), e
				},
				getValueState: function(t) {
					var e = this.option.range,
						i = this.getExtent();
					return (e[0] <= i[0] || e[0] <= t) && (e[1] >= i[1] || t <= e[1]) ? "inRange" : "outOfRange"
				}
			});
		t.exports = s
	}, function(t, e, i) {
		function n(t, e, i) {
			return new r.Polygon({
				shape: {
					points: t
				},
				draggable: !! e,
				cursor: i,
				drift: e
			})
		}
		function a(t, e) {
			return 0 === t ? [
				[0, 0],
				[e, 0],
				[e, -e]
			] : [
				[0, 0],
				[e, 0],
				[e, e]
			]
		}
		var o = i(213),
			r = i(3),
			s = i(1),
			l = i(4),
			h = i(71),
			u = l.linearMap,
			c = i(76),
			d = i(214),
			f = s.each,
			p = o.extend({
				type: "visualMap.continuous",
				init: function() {
					o.prototype.init.apply(this, arguments), this._shapes = {}, this._dataInterval = [], this._handleEnds = [], this._orient, this._useHandle
				},
				doRender: function(t, e, i, n) {
					n && "selectDataRange" === n.type && n.from === this.uid ? this._updateView() : this._buildView()
				},
				_buildView: function() {
					this.group.removeAll();
					var t = this.visualMapModel,
						e = this.group;
					this._orient = t.get("orient"), this._useHandle = t.get("calculable"), this._resetInterval(), this._renderBar(e);
					var i = t.get("text");
					this._renderEndsText(e, i, 0), this._renderEndsText(e, i, 1), this._updateView(!0), this.renderBackground(e), this._updateView(), this.positionGroup(e)
				},
				_renderEndsText: function(t, e, i) {
					if (e) {
						var n = e[1 - i];
						n = null != n ? n + "" : "";
						var a = this.visualMapModel,
							o = a.get("textGap"),
							s = a.itemSize,
							l = this._shapes.barGroup,
							h = this._applyTransform([s[0] / 2, 0 === i ? -o : s[1] + o], l),
							u = this._applyTransform(0 === i ? "bottom" : "top", l),
							c = this._orient,
							d = this.visualMapModel.textStyleModel;
						this.group.add(new r.Text({
							style: {
								x: h[0],
								y: h[1],
								textVerticalAlign: "horizontal" === c ? "middle" : u,
								textAlign: "horizontal" === c ? u : "center",
								text: n,
								textFont: d.getFont(),
								fill: d.getTextColor()
							}
						}))
					}
				},
				_renderBar: function(t) {
					var e = this.visualMapModel,
						i = this._shapes,
						a = e.itemSize,
						o = this._orient,
						r = this._useHandle,
						l = d.getItemAlign(e, this.api, a),
						h = i.barGroup = this._createBarGroup(l);
					h.add(i.outOfRange = n()), h.add(i.inRange = n(null, s.bind(this._modifyHandle, this, "all"), r ? "move" : null));
					var u = e.textStyleModel.getTextRect("国"),
						c = Math.max(u.width, u.height);
					r && (i.handleGroups = [], i.handleThumbs = [], i.handleLabels = [], i.handleLabelPoints = [], this._createHandle(h, 0, a, c, o, l), this._createHandle(h, 1, a, c, o, l)), t.add(h)
				},
				_createHandle: function(t, e, i, o, l) {
					var h = new r.Group({
						position: [i[0], 0]
					}),
						u = n(a(e, o), s.bind(this._modifyHandle, this, e), "move");
					h.add(u);
					var c = {
						x: "horizontal" === l ? o / 2 : 1.5 * o,
						y: "horizontal" === l ? 0 === e ? -(1.5 * o) : 1.5 * o : 0 === e ? -o / 2 : o / 2
					},
						d = this.visualMapModel.textStyleModel,
						f = new r.Text({
							silent: !0,
							style: {
								x: 0,
								y: 0,
								text: "",
								textVerticalAlign: "middle",
								textFont: d.getFont(),
								fill: d.getTextColor()
							}
						});
					this.group.add(f);
					var p = this._shapes;
					p.handleThumbs[e] = u, p.handleGroups[e] = h, p.handleLabelPoints[e] = c, p.handleLabels[e] = f, t.add(h)
				},
				_modifyHandle: function(t, e, i) {
					if (this._useHandle) {
						var n = this._applyTransform([e, i], this._shapes.barGroup, !0);
						this._updateInterval(t, n[1]), this.api.dispatchAction({
							type: "selectDataRange",
							from: this.uid,
							visualMapId: this.visualMapModel.id,
							selected: this._dataInterval.slice()
						})
					}
				},
				_resetInterval: function() {
					var t = this.visualMapModel,
						e = this._dataInterval = t.getSelected(),
						i = t.getExtent(),
						n = [0, t.itemSize[1]];
					this._handleEnds = [u(e[0], i, n, !0), u(e[1], i, n, !0)]
				},
				_updateInterval: function(t, e) {
					e = e || 0;
					var i = this.visualMapModel,
						n = this._handleEnds;
					h(e, n, [0, i.itemSize[1]], "all" === t ? "rigid" : "push", t);
					var a = i.getExtent(),
						o = [0, i.itemSize[1]];
					this._dataInterval = [u(n[0], o, a, !0), u(n[1], o, a, !0)]
				},
				_updateView: function(t) {
					var e = this.visualMapModel,
						i = e.getExtent(),
						n = this._shapes,
						a = this._dataInterval,
						o = [0, e.itemSize[1]],
						r = t ? o : this._handleEnds,
						s = this._createBarVisual(a, i, r, "inRange"),
						l = this._createBarVisual(i, i, o, "outOfRange");
					n.inRange.setStyle({
						fill: s.barColor,
						opacity: s.opacity
					}).setShape("points", s.barPoints), n.outOfRange.setStyle({
						fill: l.barColor,
						opacity: l.opacity
					}).setShape("points", l.barPoints), this._useHandle && f([0, 1], function(t) {
						n.handleThumbs[t].setStyle("fill", s.handlesColor[t]), n.handleLabels[t].setStyle({
							text: e.formatValueText(a[t]),
							textAlign: this._applyTransform("horizontal" === this._orient ? 0 === t ? "bottom" : "top" : "left", n.barGroup)
						})
					}, this), this._updateHandlePosition(r)
				},
				_createBarVisual: function(t, e, i, n) {
					var a = {
						forceState: n,
						convertOpacityToAlpha: !0
					},
						o = this.getControllerVisual(t, "color", a),
						r = [this.getControllerVisual(t[0], "symbolSize", a), this.getControllerVisual(t[1], "symbolSize", a)],
						s = this._createBarPoints(i, r);
					return {
						barColor: new c(0, 0, 1, 1, o),
						barPoints: s,
						handlesColor: [o[0].color, o[o.length - 1].color]
					}
				},
				_createBarPoints: function(t, e) {
					var i = this.visualMapModel.itemSize;
					return [[i[0] - e[0], t[0]], [i[0], t[0]], [i[0], t[1]], [i[0] - e[1], t[1]]]
				},
				_createBarGroup: function(t) {
					var e = this._orient,
						i = this.visualMapModel.get("inverse");
					return new r.Group("horizontal" !== e || i ? "horizontal" === e && i ? {
						scale: "bottom" === t ? [-1, 1] : [1, 1],
						rotation: -Math.PI / 2
					} : "vertical" !== e || i ? {
						scale: "left" === t ? [1, 1] : [-1, 1]
					} : {
						scale: "left" === t ? [1, -1] : [-1, -1]
					} : {
						scale: "bottom" === t ? [1, 1] : [-1, 1],
						rotation: Math.PI / 2
					})
				},
				_updateHandlePosition: function(t) {
					if (this._useHandle) {
						var e = this._shapes;
						f([0, 1], function(i) {
							var n = e.handleGroups[i];
							n.position[1] = t[i];
							var a = e.handleLabelPoints[i],
								o = r.applyTransform([a.x, a.y], r.getTransform(n, this.group));
							e.handleLabels[i].setStyle({
								x: o[0],
								y: o[1]
							})
						}, this)
					}
				},
				_applyTransform: function(t, e, i) {
					var n = r.getTransform(e, this.group);
					return r[s.isArray(t) ? "applyTransform" : "transformDirection"](t, n, i)
				}
			});
		t.exports = p
	}, function(t, e, i) {
		function n(t, e) {
			var i = t.inverse;
			("vertical" === t.orient ? !i : i) && e.reverse()
		}
		var a = i(212),
			o = i(1),
			r = i(73),
			s = a.extend({
				type: "visualMap.piecewise",
				defaultOption: {
					selected: null,
					align: "auto",
					itemWidth: 20,
					itemHeight: 14,
					itemSymbol: "roundRect",
					pieceList: null,
					categories: null,
					splitNumber: 5,
					selectedMode: "multiple",
					itemGap: 10
				},
				doMergeOption: function(t, e) {
					s.superApply(this, "doMergeOption", arguments), this._pieceList = [], this.resetTargetSeries(t, e), this.resetExtent();
					var i = this._mode = this._decideMode();
					l[this._mode].call(this), this._resetSelected(t, e);
					var n = this.option.categories;
					this.resetVisual(function(t, e) {
						"categories" === i ? (t.mappingMethod = "category", t.categories = o.clone(n)) : (t.mappingMethod = "piecewise", t.pieceList = o.map(this._pieceList, function(t) {
							var t = o.clone(t);
							return "inRange" !== e && (t.visual = null), t
						}))
					})
				},
				_resetSelected: function(t, e) {
					var i = this.option,
						n = this._pieceList,
						a = (e ? i : t).selected || {};
					if (i.selected = a, o.each(n, function(t, e) {
						var i = this.getSelectedMapKey(t);
						i in a || (a[i] = !0)
					}, this), "single" === i.selectedMode) {
						var r = !1;
						o.each(n, function(t, e) {
							var i = this.getSelectedMapKey(t);
							a[i] && (r ? a[i] = !1 : r = !0)
						}, this)
					}
				},
				getSelectedMapKey: function(t) {
					return "categories" === this._mode ? t.value + "" : t.index + ""
				},
				getPieceList: function() {
					return this._pieceList
				},
				_decideMode: function() {
					var t = this.option;
					return t.pieces && t.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber"
				},
				setSelected: function(t) {
					this.option.selected = o.clone(t)
				},
				getValueState: function(t) {
					var e = this._pieceList,
						i = r.findPieceIndex(t, e);
					return null != i && this.option.selected[this.getSelectedMapKey(e[i])] ? "inRange" : "outOfRange"
				}
			}),
			l = {
				splitNumber: function() {
					var t = this.option,
						e = t.precision,
						i = this.getExtent(),
						n = t.splitNumber;
					n = Math.max(parseInt(n, 10), 1), t.splitNumber = n;
					for (var a = (i[1] - i[0]) / n; + a.toFixed(e) !== a && 5 > e;) e++;
					t.precision = e, a = +a.toFixed(e);
					for (var o = 0, r = i[0]; n > o; o++, r += a) {
						var s = o === n - 1 ? i[1] : r + a;
						this._pieceList.push({
							text: this.formatValueText([r, s]),
							index: o,
							interval: [r, s]
						})
					}
				},
				categories: function() {
					var t = this.option;
					o.each(t.categories, function(t) {
						this._pieceList.push({
							text: this.formatValueText(t, !0),
							value: t
						})
					}, this), n(t, this._pieceList)
				},
				pieces: function() {
					var t = this.option;
					o.each(t.pieces, function(t, e) {
						o.isObject(t) || (t = {
							value: t
						});
						var i, n = {
							text: "",
							index: e
						};
						if (null != t.label && (n.text = t.label, i = !0), t.hasOwnProperty("value")) n.value = t.value, i || (n.text = this.formatValueText(n.value));
						else {
							var a = t.min,
								s = t.max;
							null == a && (a = -(1 / 0)), null == s && (s = 1 / 0), a === s && (n.value = a), n.interval = [a, s], i || (n.text = this.formatValueText([a, s]))
						}
						n.visual = r.retrieveVisuals(t), this._pieceList.push(n)
					}, this), n(t, this._pieceList)
				}
			};
		t.exports = s
	}, function(t, e, i) {
		var n = i(213),
			a = i(1),
			o = i(3),
			r = i(24),
			s = i(11),
			l = i(214),
			h = n.extend({
				type: "visualMap.piecewise",
				doRender: function() {
					function t(t) {
						var i = new o.Group;
						i.onclick = a.bind(this._onItemClick, this, t.piece), this._createItemSymbol(i, t.piece, [0, 0, c[0], c[1]]), f && i.add(new o.Text({
							style: {
								x: "right" === u ? -n : c[0] + n,
								y: c[1] / 2,
								text: t.piece.text,
								textVerticalAlign: "middle",
								textAlign: u,
								textFont: l,
								fill: h
							}
						})), e.add(i)
					}
					var e = this.group;
					e.removeAll();
					var i = this.visualMapModel,
						n = i.get("textGap"),
						r = i.textStyleModel,
						l = r.getFont(),
						h = r.getTextColor(),
						u = this._getItemAlign(),
						c = i.itemSize,
						d = this._getViewData(),
						f = !d.endsText,
						p = !f;
					p && this._renderEndsText(e, d.endsText[0], c), a.each(d.pieceList, t, this), p && this._renderEndsText(e, d.endsText[1], c), s.box(i.get("orient"), e, i.get("itemGap")), this.renderBackground(e), this.positionGroup(e)
				},
				_getItemAlign: function() {
					var t = this.visualMapModel,
						e = t.option;
					if ("vertical" === e.orient) return l.getItemAlign(t, this.api, t.itemSize);
					var i = e.align;
					return i && "auto" !== i || (i = "left"), i
				},
				_renderEndsText: function(t, e, i) {
					if (e) {
						var n = new o.Group,
							a = this.visualMapModel.textStyleModel;
						n.add(new o.Text({
							style: {
								x: i[0] / 2,
								y: i[1] / 2,
								textVerticalAlign: "middle",
								textAlign: "center",
								text: e,
								textFont: a.getFont(),
								fill: a.getTextColor()
							}
						})), t.add(n)
					}
				},
				_getViewData: function() {
					var t = this.visualMapModel,
						e = a.map(t.getPieceList(), function(t, e) {
							return {
								piece: t,
								index: e
							}
						}),
						i = t.get("text"),
						n = t.get("orient"),
						o = t.get("inverse");
					return ("horizontal" === n ? o : !o) ? e.reverse() : i && (i = i.slice().reverse()), {
						pieceList: e,
						endsText: i
					}
				},
				_createItemSymbol: function(t, e, i) {
					var n;
					if (this.visualMapModel.isCategory()) n = e.value;
					else if (null != e.value) n = e.value;
					else {
						var a = e.interval || [];
						n = (a[0] + a[1]) / 2
					}
					t.add(r.createSymbol(this.getControllerVisual(n, "symbol"), i[0], i[1], i[2], i[3], this.getControllerVisual(n, "color")))
				},
				_onItemClick: function(t) {
					var e = this.visualMapModel,
						i = e.option,
						n = a.clone(i.selected),
						o = e.getSelectedMapKey(t);
					"single" === i.selectedMode ? (n[o] = !0, a.each(n, function(t, e) {
						n[e] = e === o
					})) : n[o] = !n[o], this.api.dispatchAction({
						type: "selectDataRange",
						from: this.uid,
						visualMapId: this.visualMapModel.id,
						selected: n
					})
				}
			});
		t.exports = h
	}, function(t, e, i) {
		i(2).registerPreprocessor(i(215)), i(216), i(217), i(318), i(319), i(218)
	}, function(t, e, i) {
		i(2).registerPreprocessor(i(215)), i(216), i(217), i(320), i(321), i(218)
	}, function(t, e, i) {
		function n(t, e, i, n, a) {
			s.call(this, t), this.map = e, this._nameCoordMap = {}, this.loadGeoJson(i, n, a)
		}
		var a = i(329),
			o = i(1),
			r = i(8),
			s = i(219),
			l = [i(327), i(328), i(326)];
		n.prototype = {
			constructor: n,
			type: "geo",
			dimensions: ["lng", "lat"],
			loadGeoJson: function(t, e, i) {
				try {
					this.regions = t ? a(t) : []
				} catch (n) {
					throw "Invalid geoJson format\n" + n
				}
				e = e || {}, i = i || {};
				for (var r = this.regions, s = {}, h = 0; h < r.length; h++) {
					var u = r[h].name;
					u = i[u] || u, r[h].name = u, s[u] = r[h], this.addGeoCoord(u, r[h].center);
					var c = e[u];
					c && r[h].transformTo(c.left, c.top, c.width, c.height)
				}
				this._regionsMap = s, this._rect = null, o.each(l, function(t) {
					t(this)
				}, this)
			},
			transformTo: function(t, e, i, n) {
				var a = this.getBoundingRect();
				a = a.clone(), a.y = -a.y - a.height;
				var o = this._viewTransform;
				o.transform = a.calculateTransform(new r(t, e, i, n)), o.decomposeTransform();
				var s = o.scale;
				s[1] = -s[1], o.updateTransform(), this._updateTransform()
			},
			getRegion: function(t) {
				return this._regionsMap[t]
			},
			addGeoCoord: function(t, e) {
				this._nameCoordMap[t] = e
			},
			getGeoCoord: function(t) {
				return this._nameCoordMap[t]
			},
			getBoundingRect: function() {
				if (this._rect) return this._rect;
				for (var t, e = this.regions, i = 0; i < e.length; i++) {
					var n = e[i].getBoundingRect();
					t = t || n.clone(), t.union(n)
				}
				return this._rect = t || new r(0, 0, 0, 0)
			},
			dataToPoints: function(t) {
				var e = [];
				return t.mapArray(["lng", "lat"], function(t, i) {
					return e[0] = t, e[1] = i, this.dataToPoint(e)
				}, this)
			},
			dataToPoint: function(t) {
				return "string" == typeof t && (t = this.getGeoCoord(t)), t ? s.prototype.dataToPoint.call(this, t) : void 0
			}
		}, o.mixin(n, s), t.exports = n
	}, function(t, e, i) {
		"use strict";
		var n = i(7),
			a = i(10);
		a.extend({
			type: "geo",
			coordinateSystem: null,
			init: function(t) {
				a.prototype.init.apply(this, arguments), n.defaultEmphasis(t.label, ["position", "show", "textStyle", "distance", "formatter"])
			},
			defaultOption: {
				zlevel: 0,
				z: 0,
				show: !0,
				left: "center",
				top: "center",
				map: "",
				roamDetail: {
					x: 0,
					y: 0,
					zoom: 1
				},
				scaleLimit: null,
				label: {
					normal: {
						show: !1,
						textStyle: {
							color: "#000"
						}
					},
					emphasis: {
						show: !0,
						textStyle: {
							color: "rgb(100,0,0)"
						}
					}
				},
				itemStyle: {
					normal: {
						borderWidth: .5,
						borderColor: "#444",
						color: "#eee"
					},
					emphasis: {
						color: "rgba(255,215,0,0.8)"
					}
				}
			},
			getFormattedLabel: function(t, e) {
				var i = this.get("label." + e + ".formatter"),
					n = {
						name: t
					};
				return "function" == typeof i ? (n.status = e, i(n)) : "string" == typeof i ? i.replace("{a}", n.seriesName) : void 0
			},
			setRoamZoom: function(t) {
				var e = this.option.roamDetail;
				e && (e.zoom = t)
			},
			setRoamPan: function(t, e) {
				var i = this.option.roamDetail;
				i && (i.x = t, i.y = e)
			}
		})
	}, function(t, e, i) {
		var n = i(1),
			a = {
				Russia: [100, 60],
				"United States of America": [-99, 38]
			};
		t.exports = function(t) {
			n.each(t.regions, function(t) {
				var e = a[t.name];
				if (e) {
					var i = t.center;
					i[0] = e[0], i[1] = e[1]
				}
			})
		}
	}, function(t, e, i) {
		for (var n = i(220), a = [126, 25], o = [
			[
				[0, 3.5],
				[7, 11.2],
				[15, 11.9],
				[30, 7],
				[42, .7],
				[52, .7],
				[56, 7.7],
				[59, .7],
				[64, .7],
				[64, 0],
				[5, 0],
				[0, 3.5]
			],
			[
				[13, 16.1],
				[19, 14.7],
				[16, 21.7],
				[11, 23.1],
				[13, 16.1]
			],
			[
				[12, 32.2],
				[14, 38.5],
				[15, 38.5],
				[13, 32.2],
				[12, 32.2]
			],
			[
				[16, 47.6],
				[12, 53.2],
				[13, 53.2],
				[18, 47.6],
				[16, 47.6]
			],
			[
				[6, 64.4],
				[8, 70],
				[9, 70],
				[8, 64.4],
				[6, 64.4]
			],
			[
				[23, 82.6],
				[29, 79.8],
				[30, 79.8],
				[25, 82.6],
				[23, 82.6]
			],
			[
				[37, 70.7],
				[43, 62.3],
				[44, 62.3],
				[39, 70.7],
				[37, 70.7]
			],
			[
				[48, 51.1],
				[51, 45.5],
				[53, 45.5],
				[50, 51.1],
				[48, 51.1]
			],
			[
				[51, 35],
				[51, 28.7],
				[53, 28.7],
				[53, 35],
				[51, 35]
			],
			[
				[52, 22.4],
				[55, 17.5],
				[56, 17.5],
				[53, 22.4],
				[52, 22.4]
			],
			[
				[58, 12.6],
				[62, 7],
				[63, 7],
				[60, 12.6],
				[58, 12.6]
			],
			[
				[0, 3.5],
				[0, 93.1],
				[64, 93.1],
				[64, 0],
				[63, 0],
				[63, 92.4],
				[1, 92.4],
				[1, 3.5],
				[0, 3.5]
			]
		], r = 0; r < o.length; r++) for (var s = 0; s < o[r].length; s++) o[r][s][0] /= 10.5, o[r][s][1] /= -14, o[r][s][0] += a[0], o[r][s][1] += a[1];
		t.exports = function(t) {
			"china" === t.map && t.regions.push(new n("南海诸岛", o, a))
		}
	}, function(t, e, i) {
		var n = i(1),
			a = {
				"南海诸岛": [32, 80],
				"广东": [0, -10],
				"香港": [10, 5],
				"澳门": [-10, 10],
				"天津": [5, 5]
			};
		t.exports = function(t) {
			n.each(t.regions, function(t) {
				var e = a[t.name];
				if (e) {
					var i = t.center;
					i[0] += e[0] / 10.5, i[1] += -e[1] / 14
				}
			})
		}
	}, function(t, e, i) {
		function n(t) {
			if (!t.UTF8Encoding) return t;
			for (var e = t.features, i = 0; i < e.length; i++) for (var n = e[i], o = n.geometry, r = o.coordinates, s = o.encodeOffsets, l = 0; l < r.length; l++) {
				var h = r[l];
				if ("Polygon" === o.type) r[l] = a(h, s[l]);
				else if ("MultiPolygon" === o.type) for (var u = 0; u < h.length; u++) {
					var c = h[u];
					h[u] = a(c, s[l][u])
				}
			}
			return t.UTF8Encoding = !1, t
		}
		function a(t, e) {
			for (var i = [], n = e[0], a = e[1], o = 0; o < t.length; o += 2) {
				var r = t.charCodeAt(o) - 64,
					s = t.charCodeAt(o + 1) - 64;
				r = r >> 1 ^ -(1 & r), s = s >> 1 ^ -(1 & s), r += n, s += a, n = r, a = s, i.push([r / 1024, s / 1024])
			}
			return i
		}
		function o(t) {
			for (var e = [], i = 0; i < t.length; i++) for (var n = 0; n < t[i].length; n++) e.push(t[i][n]);
			return e
		}
		var r = i(1),
			s = i(220);
		t.exports = function(t) {
			return n(t), r.map(r.filter(t.features, function(t) {
				return t.geometry && t.properties
			}), function(t) {
				var e = t.properties,
					i = t.geometry,
					n = i.coordinates;
				return "MultiPolygon" === i.type && (n = o(n)), new s(e.name, n, e.cp)
			})
		}
	}, function(t, e, i) {
		function n(t, e) {
			return e.type || (e.data ? "category" : "value")
		}
		var a = i(10),
			o = i(1),
			r = i(30),
			s = i(61),
			l = i(4),
			h = a.extend({
				type: "baseParallelAxis",
				axis: null,
				activeIntervals: [],
				getAreaSelectStyle: function() {
					return r([
						["fill", "color"],
						["lineWidth", "borderWidth"],
						["stroke", "borderColor"],
						["width", "width"],
						["opacity", "opacity"]
					]).call(this.getModel("areaSelectStyle"))
				},
				setActiveIntervals: function(t) {
					var e = this.activeIntervals = o.clone(t);
					if (e) for (var i = e.length - 1; i >= 0; i--) l.asc(e[i])
				},
				getActiveState: function(t) {
					var e = this.activeIntervals;
					if (!e.length) return "normal";
					if (null == t) return "inactive";
					for (var i = 0, n = e.length; n > i; i++) if (e[i][0] <= t && t <= e[i][1]) return "active";
					return "inactive"
				}
			}),
			u = {
				type: "value",
				dim: null,
				parallelIndex: null,
				areaSelectStyle: {
					width: 20,
					borderWidth: 1,
					borderColor: "rgba(160,197,232)",
					color: "rgba(160,197,232)",
					opacity: .3
				},
				z: 10
			};
		o.merge(h.prototype, i(49)), s("parallel", h, n, u), t.exports = h
	}, function(t, e, i) {
		function n(t, e, i) {
			this._axesMap = {}, this._axesLayout = {}, this.dimensions = t.dimensions, this._rect, this._model = t, this._init(t, e, i)
		}
		var a = i(11),
			o = i(23),
			r = i(1),
			s = i(332),
			l = i(19),
			h = i(5),
			u = r.each,
			c = Math.PI;
		n.prototype = {
			type: "parallel",
			constructor: n,
			_init: function(t, e, i) {
				var n = t.dimensions,
					a = t.parallelAxisIndex;
				u(n, function(t, i) {
					var n = a[i],
						r = e.getComponent("parallelAxis", n),
						l = this._axesMap[t] = new s(t, o.createScaleByModel(r), [0, 0], r.get("type"), n),
						h = "category" === l.type;
					l.onBand = h && r.get("boundaryGap"), l.inverse = r.get("inverse"), r.axis = l, l.model = r
				}, this)
			},
			update: function(t, e) {
				this._updateAxesFromSeries(this._model, t)
			},
			_updateAxesFromSeries: function(t, e) {
				e.eachSeries(function(i) {
					if (t.contains(i, e)) {
						var n = i.getData();
						u(this.dimensions, function(t) {
							var e = this._axesMap[t];
							e.scale.unionExtent(n.getDataExtent(t)), o.niceScaleExtent(e, e.model)
						}, this)
					}
				}, this)
			},
			resize: function(t, e) {
				this._rect = a.getLayoutRect(t.getBoxLayoutParams(), {
					width: e.getWidth(),
					height: e.getHeight()
				}), this._layoutAxes(t)
			},
			getRect: function() {
				return this._rect
			},
			_layoutAxes: function(t) {
				var e = this._rect,
					i = t.get("layout"),
					n = this._axesMap,
					a = this.dimensions,
					o = [e.width, e.height],
					r = "horizontal" === i ? 0 : 1,
					s = o[r],
					h = o[1 - r],
					d = [0, h];
				u(n, function(t) {
					var e = t.inverse ? 1 : 0;
					t.setExtent(d[e], d[1 - e])
				}), u(a, function(t, n) {
					var o = s * n / (a.length - 1),
						r = {
							horizontal: {
								x: o,
								y: h
							},
							vertical: {
								x: 0,
								y: o
							}
						},
						u = {
							horizontal: c / 2,
							vertical: 0
						},
						d = [r[i].x + e.x, r[i].y + e.y],
						f = u[i],
						p = l.create();
					l.rotate(p, p, f), l.translate(p, p, d), this._axesLayout[t] = {
						position: d,
						rotation: f,
						transform: p,
						tickDirection: 1,
						labelDirection: 1
					}
				}, this)
			},
			getAxis: function(t) {
				return this._axesMap[t]
			},
			dataToPoint: function(t, e) {
				return this.axisCoordToPoint(this._axesMap[e].dataToCoord(t), e)
			},
			eachActiveState: function(t, e, i) {
				for (var n = this.dimensions, a = this._axesMap, o = !1, r = 0, s = n.length; s > r; r++)"normal" !== a[n[r]].model.getActiveState() && (o = !0);
				for (var l = 0, h = t.count(); h > l; l++) {
					var u, c = t.getValues(n, l);
					if (o) {
						u = "active";
						for (var r = 0, s = n.length; s > r; r++) {
							var d = n[r],
								f = a[d].model.getActiveState(c[r], r);
							if ("inactive" === f) {
								u = "inactive";
								break
							}
						}
					} else u = "normal";
					e.call(i, u, l)
				}
			},
			axisCoordToPoint: function(t, e) {
				var i = this._axesLayout[e],
					n = [t, 0];
				return h.applyTransform(n, n, i.transform), n
			},
			getAxisLayout: function(t) {
				return r.clone(this._axesLayout[t])
			}
		}, t.exports = n
	}, function(t, e, i) {
		var n = i(1),
			a = i(43),
			o = function(t, e, i, n, o) {
				a.call(this, t, e, i), this.type = n || "value", this.axisIndex = o
			};
		o.prototype = {
			constructor: o,
			model: null
		}, n.inherits(o, a), t.exports = o
	}, function(t, e, i) {
		var n = i(1),
			a = i(10);
		i(330), a.extend({
			type: "parallel",
			dependencies: ["parallelAxis"],
			coordinateSystem: null,
			dimensions: null,
			parallelAxisIndex: null,
			defaultOption: {
				zlevel: 0,
				z: 0,
				left: 80,
				top: 60,
				right: 80,
				bottom: 60,
				layout: "horizontal",
				parallelAxisDefault: null
			},
			init: function() {
				a.prototype.init.apply(this, arguments), this.mergeOption({})
			},
			mergeOption: function(t) {
				var e = this.option;
				t && n.merge(e, t, !0), this._initDimensions()
			},
			contains: function(t, e) {
				var i = t.get("parallelIndex");
				return null != i && e.getComponent("parallel", i) === this
			},
			_initDimensions: function() {
				var t = this.dimensions = [],
					e = this.parallelAxisIndex = [],
					i = n.filter(this.dependentModels.parallelAxis, function(t) {
						return t.get("parallelIndex") === this.componentIndex
					});
				n.each(i, function(i) {
					t.push("dim" + i.get("dim")), e.push(i.componentIndex)
				})
			}
		})
	}, function(t, e, i) {
		function n(t) {
			if (!t.parallel) {
				var e = !1;
				o.each(t.series, function(t) {
					t && "parallel" === t.type && (e = !0)
				}), e && (t.parallel = [{}])
			}
		}
		function a(t) {
			var e = r.normalizeToArray(t.parallelAxis);
			o.each(e, function(e) {
				if (o.isObject(e)) {
					var i = e.parallelIndex || 0,
						n = r.normalizeToArray(t.parallel)[i];
					n && n.parallelAxisDefault && o.merge(e, n.parallelAxisDefault, !1)
				}
			})
		}
		var o = i(1),
			r = i(7);
		t.exports = function(t) {
			n(t), a(t)
		}
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			e = e || [0, 360], o.call(this, "angle", t, e), this.type = "category"
		}
		var a = i(1),
			o = i(43);
		n.prototype = {
			constructor: n,
			dataToAngle: o.prototype.dataToCoord,
			angleToData: o.prototype.coordToData
		}, a.inherits(n, o), t.exports = n
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			return e.type || (e.data ? "category" : "value")
		}
		var a = i(1),
			o = i(10),
			r = i(61),
			s = o.extend({
				type: "polarAxis",
				axis: null
			});
		a.merge(s.prototype, i(49));
		var l = {
			angle: {
				polarIndex: 0,
				startAngle: 90,
				clockwise: !0,
				splitNumber: 12,
				axisLabel: {
					rotate: !1
				}
			},
			radius: {
				polarIndex: 0,
				splitNumber: 5
			}
		};
		r("angle", s, n, l.angle), r("radius", s, n, l.radius)
	}, function(t, e, i) {
		"use strict";
		var n = i(339),
			a = i(335),
			o = function(t) {
				this.name = t || "", this.cx = 0, this.cy = 0, this._radiusAxis = new n, this._angleAxis = new a
			};
		o.prototype = {
			constructor: o,
			type: "polar",
			dimensions: ["radius", "angle"],
			containPoint: function(t) {
				var e = this.pointToCoord(t);
				return this._radiusAxis.contain(e[0]) && this._angleAxis.contain(e[1])
			},
			containData: function(t) {
				return this._radiusAxis.containData(t[0]) && this._angleAxis.containData(t[1])
			},
			getAxis: function(t) {
				return this["_" + t + "Axis"]
			},
			getAxesByScale: function(t) {
				var e = [],
					i = this._angleAxis,
					n = this._radiusAxis;
				return i.scale.type === t && e.push(i), n.scale.type === t && e.push(n), e
			},
			getAngleAxis: function() {
				return this._angleAxis
			},
			getRadiusAxis: function() {
				return this._radiusAxis
			},
			getOtherAxis: function(t) {
				var e = this._angleAxis;
				return t === e ? this._radiusAxis : e
			},
			getBaseAxis: function() {
				return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAngleAxis()
			},
			dataToPoints: function(t) {
				return t.mapArray(this.dimensions, function(t, e) {
					return this.dataToPoint([t, e])
				}, this)
			},
			dataToPoint: function(t, e) {
				return this.coordToPoint([this._radiusAxis.dataToRadius(t[0], e), this._angleAxis.dataToAngle(t[1], e)])
			},
			pointToData: function(t, e) {
				var i = this.pointToCoord(t);
				return [this._radiusAxis.radiusToData(i[0], e), this._angleAxis.angleToData(i[1], e)]
			},
			pointToCoord: function(t) {
				var e = t[0] - this.cx,
					i = t[1] - this.cy,
					n = this.getAngleAxis(),
					a = n.getExtent(),
					o = Math.min(a[0], a[1]),
					r = Math.max(a[0], a[1]);
				n.inverse ? o = r - 360 : r = o + 360;
				var s = Math.sqrt(e * e + i * i);
				e /= s, i /= s;
				for (var l = Math.atan2(-i, e) / Math.PI * 180, h = o > l ? 1 : -1; o > l || l > r;) l += 360 * h;
				return [s, l]
			},
			coordToPoint: function(t) {
				var e = t[0],
					i = t[1] / 180 * Math.PI,
					n = Math.cos(i) * e + this.cx,
					a = -Math.sin(i) * e + this.cy;
				return [n, a]
			}
		}, t.exports = o
	}, function(t, e, i) {
		"use strict";
		i(336), i(2).extendComponentModel({
			type: "polar",
			dependencies: ["polarAxis", "angleAxis"],
			coordinateSystem: null,
			findAxisModel: function(t) {
				var e, i = this.ecModel;
				return i.eachComponent(t, function(t) {
					i.getComponent("polar", t.getShallow("polarIndex")) === this && (e = t)
				}, this), e
			},
			defaultOption: {
				zlevel: 0,
				z: 0,
				center: ["50%", "50%"],
				radius: "80%"
			}
		})
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			o.call(this, "radius", t, e), this.type = "category"
		}
		var a = i(1),
			o = i(43);
		n.prototype = {
			constructor: n,
			dataToRadius: o.prototype.dataToCoord,
			radiusToData: o.prototype.coordToData
		}, a.inherits(n, o), t.exports = n
	}, function(t, e, i) {
		function n(t, e, i) {
			o.call(this, t, e, i), this.type = "value", this.angle = 0, this.name = "", this.model
		}
		var a = i(1),
			o = i(43);
		a.inherits(n, o), t.exports = n
	}, function(t, e, i) {
		function n(t, e, i) {
			this._model = t, this.dimensions = [], this._indicatorAxes = a.map(t.getIndicatorModels(), function(t, e) {
				var i = "indicator_" + e,
					n = new o(i, new r);
				return n.name = t.get("name"), n.model = t, t.axis = n, this.dimensions.push(i), n
			}, this), this.resize(t, i), this.cx, this.cy, this.r, this.startAngle
		}
		var a = i(1),
			o = i(340),
			r = i(37),
			s = i(4),
			l = i(23);
		n.prototype.getIndicatorAxes = function() {
			return this._indicatorAxes
		}, n.prototype.dataToPoint = function(t, e) {
			var i = this._indicatorAxes[e];
			return this.coordToPoint(i.dataToCoord(t), e)
		}, n.prototype.coordToPoint = function(t, e) {
			var i = this._indicatorAxes[e],
				n = i.angle,
				a = this.cx + t * Math.cos(n),
				o = this.cy - t * Math.sin(n);
			return [a, o]
		}, n.prototype.pointToData = function(t) {
			var e = t[0] - this.cx,
				i = t[1] - this.cy,
				n = Math.sqrt(e * e + i * i);
			e /= n, i /= n;
			for (var a, o = Math.atan2(-i, e), r = 1 / 0, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
				var h = this._indicatorAxes[l],
					u = Math.abs(o - h.angle);
				r > u && (a = h, s = l, r = u)
			}
			return [s, +(a && a.coodToData(n))]
		}, n.prototype.resize = function(t, e) {
			var i = t.get("center"),
				n = e.getWidth(),
				o = e.getHeight(),
				r = Math.min(n, o) / 2;
			this.cx = s.parsePercent(i[0], n), this.cy = s.parsePercent(i[1], o), this.startAngle = t.get("startAngle") * Math.PI / 180, this.r = s.parsePercent(t.get("radius"), r), a.each(this._indicatorAxes, function(t, e) {
				t.setExtent(0, this.r);
				var i = this.startAngle + e * Math.PI * 2 / this._indicatorAxes.length;
				i = Math.atan2(Math.sin(i), Math.cos(i)), t.angle = i
			}, this)
		}, n.prototype.update = function(t, e) {
			function i(t) {
				var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)),
					i = t / e;
				return 2 === i ? i = 5 : i *= 2, i * e
			}
			var n = this._indicatorAxes,
				o = this._model;
			a.each(n, function(t) {
				t.scale.setExtent(1 / 0, -(1 / 0))
			}), t.eachSeriesByType("radar", function(e, i) {
				if ("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get("radarIndex")) === o) {
					var r = e.getData();
					a.each(n, function(t) {
						t.scale.unionExtent(r.getDataExtent(t.dim))
					})
				}
			}, this);
			var r = o.get("splitNumber");
			a.each(n, function(t, e) {
				var n = l.getScaleExtent(t, t.model);
				l.niceScaleExtent(t, t.model);
				var a = t.model,
					o = t.scale,
					h = a.get("min"),
					u = a.get("max"),
					c = o.getInterval();
				if (null != h && null != u) o.setInterval((u - h) / r);
				else if (null != h) {
					var d;
					do d = h + c * r, o.setExtent(+h, d), o.setInterval(c), c = i(c);
					while (d < n[1] && isFinite(d) && isFinite(n[1]))
				} else if (null != u) {
					var f;
					do f = u - c * r, o.setExtent(f, +u), o.setInterval(c), c = i(c);
					while (f > n[0] && isFinite(f) && isFinite(n[0]))
				} else {
					var p = o.getTicks().length - 1;
					p > r && (c = i(c));
					var g = Math.round((n[0] + n[1]) / 2 / c) * c,
						m = Math.round(r / 2);
					o.setExtent(s.round(g - m * c), s.round(g + (r - m) * c)), o.setInterval(c)
				}
			})
		}, n.dimensions = [], n.create = function(t, e) {
			var i = [];
			return t.eachComponent("radar", function(a) {
				var o = new n(a, t, e);
				i.push(o), a.coordinateSystem = o
			}), t.eachSeriesByType("radar", function(t) {
				"radar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("radarIndex") || 0])
			}), i
		}, i(28).register("radar", n), t.exports = n
	}, function(t, e, i) {
		function n(t, e) {
			return s.defaults({
				show: e
			}, t)
		}
		var a = i(72),
			o = a.valueAxis,
			r = i(12),
			s = i(1),
			l = i(49),
			h = i(2).extendComponentModel({
				type: "radar",
				optionUpdated: function() {
					var t = this.get("boundaryGap"),
						e = this.get("splitNumber"),
						i = this.get("scale"),
						n = this.get("axisLine"),
						a = this.get("axisTick"),
						o = this.get("axisLabel"),
						h = this.get("name.textStyle"),
						u = this.get("name.show"),
						c = this.get("name.formatter"),
						d = this.get("nameGap"),
						f = s.map(this.get("indicator") || [], function(f) {
							return null != f.max && f.max > 0 ? f.min = 0 : null != f.min && f.min < 0 && (f.max = 0), f = s.merge(s.clone(f), {
								boundaryGap: t,
								splitNumber: e,
								scale: i,
								axisLine: n,
								axisTick: a,
								axisLabel: o,
								name: f.text,
								nameLocation: "end",
								nameGap: d,
								nameTextStyle: h
							}, !1), u || (f.name = ""), "string" == typeof c ? f.name = c.replace("{value}", f.name) : "function" == typeof c && (f.name = c(f.name, f)), s.extend(new r(f, null, this.ecModel), l)
						}, this);
					this.getIndicatorModels = function() {
						return f
					}
				},
				defaultOption: {
					zlevel: 0,
					z: 0,
					center: ["50%", "50%"],
					radius: "75%",
					startAngle: 90,
					name: {
						show: !0
					},
					boundaryGap: [0, 0],
					splitNumber: 5,
					nameGap: 15,
					scale: !1,
					shape: "polygon",
					axisLine: s.merge({
						lineStyle: {
							color: "#bbb"
						}
					}, o.axisLine),
					axisLabel: n(o.axisLabel, !1),
					axisTick: n(o.axisTick, !1),
					splitLine: n(o.splitLine, !0),
					splitArea: n(o.splitArea, !0),
					indicator: []
				}
			});
		t.exports = h
	}, function(t, e, i) {
		"use strict";

		function n(t, e) {
			this.id = null == t ? "" : t, this.inEdges = [], this.outEdges = [], this.edges = [], this.hostGraph, this.dataIndex = null == e ? -1 : e
		}
		function a(t, e, i) {
			this.node1 = t, this.node2 = e, this.dataIndex = null == i ? -1 : i
		}
		var o = i(1),
			r = function(t) {
				this._directed = t || !1, this.nodes = [], this.edges = [], this._nodesMap = {}, this._edgesMap = {}, this.data, this.edgeData
			},
			s = r.prototype;
		s.type = "graph", s.isDirected = function() {
			return this._directed
		}, s.addNode = function(t, e) {
			var i = this._nodesMap;
			if (!i[t]) {
				var a = new n(t, e);
				return a.hostGraph = this, this.nodes.push(a), i[t] = a, a
			}
		}, s.getNodeByIndex = function(t) {
			var e = this.data.getRawIndex(t);
			return this.nodes[e]
		}, s.getNodeById = function(t) {
			return this._nodesMap[t]
		}, s.addEdge = function(t, e, i) {
			var o = this._nodesMap,
				r = this._edgesMap;
			if (t instanceof n || (t = o[t]), e instanceof n || (e = o[e]), t && e) {
				var s = t.id + "-" + e.id;
				if (!r[s]) {
					var l = new a(t, e, i);
					return l.hostGraph = this, this._directed && (t.outEdges.push(l), e.inEdges.push(l)), t.edges.push(l), t !== e && e.edges.push(l), this.edges.push(l), r[s] = l, l
				}
			}
		}, s.getEdgeByIndex = function(t) {
			var e = this.edgeData.getRawIndex(t);
			return this.edges[e]
		}, s.getEdge = function(t, e) {
			t instanceof n && (t = t.id), e instanceof n && (e = e.id);
			var i = this._edgesMap;
			return this._directed ? i[t + "-" + e] : i[t + "-" + e] || i[e + "-" + t]
		}, s.eachNode = function(t, e) {
			for (var i = this.nodes, n = i.length, a = 0; n > a; a++) i[a].dataIndex >= 0 && t.call(e, i[a], a)
		}, s.eachEdge = function(t, e) {
			for (var i = this.edges, n = i.length, a = 0; n > a; a++) i[a].dataIndex >= 0 && i[a].node1.dataIndex >= 0 && i[a].node2.dataIndex >= 0 && t.call(e, i[a], a)
		}, s.breadthFirstTraverse = function(t, e, i, a) {
			if (e instanceof n || (e = this._nodesMap[e]), e) {
				for (var o = "out" === i ? "outEdges" : "in" === i ? "inEdges" : "edges", r = 0; r < this.nodes.length; r++) this.nodes[r].__visited = !1;
				if (!t.call(a, e, null)) for (var s = [e]; s.length;) for (var l = s.shift(), h = l[o], r = 0; r < h.length; r++) {
					var u = h[r],
						c = u.node1 === l ? u.node2 : u.node1;
					if (!c.__visited) {
						if (t.call(c, c, l)) return;
						s.push(c), c.__visited = !0
					}
				}
			}
		}, s.update = function() {
			for (var t = this.data, e = this.edgeData, i = this.nodes, n = this.edges, a = 0, o = i.length; o > a; a++) i[a].dataIndex = -1;
			for (var a = 0, o = t.count(); o > a; a++) i[t.getRawIndex(a)].dataIndex = a;
			e.filterSelf(function(t) {
				var i = n[e.getRawIndex(t)];
				return i.node1.dataIndex >= 0 && i.node2.dataIndex >= 0
			});
			for (var a = 0, o = n.length; o > a; a++) n[a].dataIndex = -1;
			for (var a = 0, o = e.count(); o > a; a++) n[e.getRawIndex(a)].dataIndex = a
		}, s.setEdgeData = function(t) {
			this.edgeData = t, this._edgeDataSaved = t.cloneShallow()
		}, s.restoreData = function() {
			this.edgeData = this._edgeDataSaved.cloneShallow()
		}, s.clone = function() {
			for (var t = new r(this._directed), e = this.nodes, i = this.edges, n = 0; n < e.length; n++) t.addNode(e[n].id, e[n].dataIndex);
			for (var n = 0; n < i.length; n++) {
				var a = i[n];
				t.addEdge(a.node1.id, a.node2.id, a.dataIndex)
			}
			return t
		}, n.prototype = {
			constructor: n,
			degree: function() {
				return this.edges.length
			},
			inDegree: function() {
				return this.inEdges.length
			},
			outDegree: function() {
				return this.outEdges.length
			},
			getModel: function(t) {
				if (!(this.dataIndex < 0)) {
					var e = this.hostGraph,
						i = e.data.getItemModel(this.dataIndex);
					return i.getModel(t)
				}
			}
		}, a.prototype.getModel = function(t) {
			if (!(this.dataIndex < 0)) {
				var e = this.hostGraph,
					i = e.edgeData.getItemModel(this.dataIndex);
				return i.getModel(t)
			}
		};
		var l = function(t, e) {
				return {
					getValue: function(i) {
						var n = this[t][e];
						return n.get(n.getDimension(i || "value"), this.dataIndex)
					},
					setVisual: function(i, n) {
						this.dataIndex >= 0 && this[t][e].setItemVisual(this.dataIndex, i, n)
					},
					getVisual: function(i, n) {
						return this[t][e].getItemVisual(this.dataIndex, i, n)
					},
					setLayout: function(i, n) {
						this.dataIndex >= 0 && this[t][e].setItemLayout(this.dataIndex, i, n)
					},
					getLayout: function() {
						return this[t][e].getItemLayout(this.dataIndex)
					},
					getGraphicEl: function() {
						return this[t][e].getItemGraphicEl(this.dataIndex)
					},
					getRawIndex: function() {
						return this[t][e].getRawIndex(this.dataIndex)
					}
				}
			};
		o.mixin(n, l("hostGraph", "data")), o.mixin(a, l("hostGraph", "edgeData")), r.Node = n, r.Edge = a, t.exports = r
	}, function(t, e, i) {
		function n(t, e) {
			this.root, this.data, this._nodes = [], this.hostModel = t, this.levelModels = o.map(e || [], function(e) {
				return new r(e, t, t.ecModel)
			})
		}
		function a(t, e) {
			var i = e.children;
			t.parentNode !== e && (i.push(t), t.parentNode = e, e.hostTree._nodes.push(t))
		}
		var o = i(1),
			r = i(12),
			s = i(14),
			l = i(223),
			h = i(31),
			u = function(t, e, i) {
				this.name = t || "", this.depth = 0, this.height = 0, this.parentNode = null, this.dataIndex = null == e ? -1 : e, this.children = [], this.viewChildren = [], this.hostTree = i
			};
		u.prototype = {
			constructor: u,
			isRemoved: function() {
				return this.dataIndex < 0
			},
			eachNode: function(t, e, i) {
				"function" == typeof t && (i = e, e = t, t = null), t = t || {}, o.isString(t) && (t = {
					order: t
				});
				var n, a = t.order || "preorder",
					r = this[t.attr || "children"];
				"preorder" === a && (n = e.call(i, this));
				for (var s = 0; !n && s < r.length; s++) r[s].eachNode(t, e, i);
				"postorder" === a && e.call(i, this)
			},
			updateDepthAndHeight: function(t) {
				var e = 0;
				this.depth = t;
				for (var i = 0; i < this.children.length; i++) {
					var n = this.children[i];
					n.updateDepthAndHeight(t + 1), n.height > e && (e = n.height)
				}
				this.height = e + 1
			},
			getNodeById: function(t) {
				if (this.getId() === t) return this;
				for (var e = 0, i = this.children, n = i.length; n > e; e++) {
					var a = i[e].getNodeById(t);
					if (a) return a
				}
			},
			contains: function(t) {
				if (t === this) return !0;
				for (var e = 0, i = this.children, n = i.length; n > e; e++) {
					var a = i[e].contains(t);
					if (a) return a
				}
			},
			getAncestors: function(t) {
				for (var e = [], i = t ? this : this.parentNode; i;) e.push(i), i = i.parentNode;
				return e.reverse(), e
			},
			getValue: function(t) {
				var e = this.hostTree.data;
				return e.get(e.getDimension(t || "value"), this.dataIndex)
			},
			setLayout: function(t, e) {
				this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e)
			},
			getLayout: function() {
				return this.hostTree.data.getItemLayout(this.dataIndex)
			},
			getModel: function(t) {
				if (!(this.dataIndex < 0)) {
					var e = this.hostTree,
						i = e.data.getItemModel(this.dataIndex),
						n = this.getLevelModel();
					return i.getModel(t, (n || e.hostModel).getModel(t))
				}
			},
			getLevelModel: function() {
				return (this.hostTree.levelModels || [])[this.depth]
			},
			setVisual: function(t, e) {
				this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e)
			},
			getVisual: function(t, e) {
				return this.hostTree.data.getItemVisual(this.dataIndex, t, e)
			},
			getRawIndex: function() {
				return this.hostTree.data.getRawIndex(this.dataIndex)
			},
			getId: function() {
				return this.hostTree.data.getId(this.dataIndex)
			}
		}, n.prototype = {
			constructor: n,
			type: "tree",
			eachNode: function(t, e, i) {
				this.root.eachNode(t, e, i)
			},
			getNodeByDataIndex: function(t) {
				var e = this.data.getRawIndex(t);
				return this._nodes[e]
			},
			getNodeByName: function(t) {
				return this.root.getNodeByName(t)
			},
			update: function() {
				for (var t = this.data, e = this._nodes, i = 0, n = e.length; n > i; i++) e[i].dataIndex = -1;
				for (var i = 0, n = t.count(); n > i; i++) e[t.getRawIndex(i)].dataIndex = i
			}
		}, n.createTree = function(t, e, i) {
			function o(t, e) {
				c.push(t);
				var i = new u(t.name, c.length - 1, r);
				e ? a(i, e) : r.root = i;
				var n = t.children;
				if (n) for (var s = 0; s < n.length; s++) o(n[s], i)
			}
			var r = new n(e, i),
				c = [];
			o(t), r.root.updateDepthAndHeight(0);
			var d = h([{
				name: "value"
			}], c),
				f = new s(d, e);
			return f.initData(c), l.linkToTree(f, r), r
		}, t.exports = n
	}, function(t, e, i) {
		function n() {
			var t, e = [],
				i = {};
			return {
				add: function(t, n, o, r, s) {
					return a.isString(r) && (s = r, r = 0), i[t.id] ? !1 : (i[t.id] = 1, e.push({
						el: t,
						target: n,
						time: o,
						delay: r,
						easing: s
					}), !0)
				},
				done: function(e) {
					return t = e, this
				},
				start: function() {
					function n() {
						a--, a || (e.length = 0, i = {}, t && t())
					}
					for (var a = e.length, o = 0, r = e.length; r > o; o++) {
						var s = e[o];
						s.el.animateTo(s.target, s.time, s.delay, s.easing, n)
					}
					return this
				}
			}
		}
		var a = i(1);
		t.exports = {
			createWrap: n
		}
	}, function(t, e, i) {
		function n() {
			function t(e, n) {
				if (n >= i.length) return e;
				for (var o = -1, r = e.length, s = i[n++], l = {}, h = {}; ++o < r;) {
					var u = s(e[o]),
						c = h[u];
					c ? c.push(e[o]) : h[u] = [e[o]]
				}
				return a.each(h, function(e, i) {
					l[i] = t(e, n)
				}), l
			}
			function e(t, o) {
				if (o >= i.length) return t;
				var r = [],
					s = n[o++];
				return a.each(t, function(t, i) {
					r.push({
						key: i,
						values: e(t, o)
					})
				}), s ? r.sort(function(t, e) {
					return s(t.key, e.key)
				}) : r
			}
			var i = [],
				n = [];
			return {
				key: function(t) {
					return i.push(t), this
				},
				sortKeys: function(t) {
					return n[i.length - 1] = t, this
				},
				entries: function(i) {
					return e(t(i, 0), 0)
				}
			}
		}
		var a = i(1);
		t.exports = n
	}, function(t, e, i) {
		var n = i(1),
			a = {
				get: function(t, e, i) {
					var a = n.clone((o[t] || {})[e]);
					return i && n.isArray(a) ? a[a.length - 1] : a
				}
			},
			o = {
				color: {
					active: ["#006edd", "#e0ffff"],
					inactive: ["rgba(0,0,0,0)"]
				},
				colorHue: {
					active: [0, 360],
					inactive: [0, 0]
				},
				colorSaturation: {
					active: [.3, 1],
					inactive: [0, 0]
				},
				colorLightness: {
					active: [.9, .5],
					inactive: [0, 0]
				},
				colorAlpha: {
					active: [.3, 1],
					inactive: [0, 0]
				},
				symbol: {
					active: ["circle", "roundRect", "diamond"],
					inactive: ["none"]
				},
				symbolSize: {
					active: [10, 50],
					inactive: [0, 0]
				}
			};
		t.exports = a
	}, function(t, e, i) {
		function n(t, e) {
			return Math.abs(t - e) < r
		}
		function a(t, e, i) {
			var a = 0,
				r = t[0];
			if (!r) return !1;
			for (var s = 1; s < t.length; s++) {
				var l = t[s];
				a += o(r[0], r[1], l[0], l[1], e, i), r = l
			}
			var h = t[0];
			return n(r[0], h[0]) && n(r[1], h[1]) || (a += o(r[0], r[1], h[0], h[1], e, i)), 0 !== a
		}
		var o = i(75),
			r = 1e-8;
		t.exports = {
			contain: a
		}
	}])
});