!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], e)
    : "object" == typeof exports
    ? (exports.Particles = e(require("react")))
    : (t.Particles = e(t.React));
})(this, function (t) {
  return (function (t) {
    var e = {};
    function i(o) {
      if (e[o]) return e[o].exports;
      var s = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, o) {
        i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (i.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (
          (i.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var s in t)
            i.d(
              o,
              s,
              function (e) {
                return t[e];
              }.bind(null, s)
            );
        return o;
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, "a", e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ""),
      i((i.s = 57))
    );
  })([
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        s(i(167), e),
        s(i(23), e),
        s(i(47), e),
        s(i(45), e),
        s(i(22), e),
        s(i(168), e),
        s(i(17), e),
        s(i(169), e),
        s(i(170), e),
        s(i(171), e),
        s(i(24), e),
        s(i(25), e),
        s(i(46), e);
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        s(i(129), e),
        s(i(6), e),
        s(i(141), e),
        s(i(42), e),
        s(i(148), e);
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.OptionsColor = void 0);
      class o {
        constructor() {
          this.value = "#fff";
        }
        static create(t, e) {
          const i = null != t ? t : new o();
          return (
            void 0 !== e &&
              ("string" == typeof e || e instanceof Array
                ? i.load({ value: e })
                : i.load(e)),
            i
          );
        }
        load(t) {
          void 0 !== (null == t ? void 0 : t.value) && (this.value = t.value);
        }
      }
      e.OptionsColor = o;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ValueWithRandom = void 0);
      const o = i(186),
        s = i(0);
      e.ValueWithRandom = class {
        constructor() {
          (this.random = new o.Random()), (this.value = 0);
        }
        load(t) {
          t &&
            ("boolean" == typeof t.random
              ? (this.random.enable = t.random)
              : this.random.load(t.random),
            void 0 !== t.value &&
              (this.value = s.NumberUtils.setRangeValue(
                t.value,
                this.random.enable ? this.random.minimumValue : void 0
              )));
        }
      };
    },
    function (t, e, i) {
      var o = i(32),
        s = "object" == typeof self && self && self.Object === Object && self,
        n = o || s || Function("return this")();
      t.exports = n;
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        s(i(278), e),
        s(i(279), e),
        s(i(280), e);
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        s(i(133), e),
        s(i(134), e),
        s(i(135), e),
        s(i(136), e),
        s(i(137), e),
        s(i(138), e),
        s(i(139), e),
        s(i(140), e);
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Vector = void 0);
      class o {
        constructor(t, e) {
          let i, o;
          if (void 0 === e) {
            if ("number" == typeof t)
              throw new Error("tsParticles - Vector not initialized correctly");
            const e = t;
            [i, o] = [e.x, e.y];
          } else [i, o] = [t, e];
          (this.x = i), (this.y = o);
        }
        static clone(t) {
          return o.create(t.x, t.y);
        }
        static create(t, e) {
          return new o(t, e);
        }
        get angle() {
          return Math.atan2(this.y, this.x);
        }
        set angle(t) {
          this.updateFromAngle(t, this.length);
        }
        get length() {
          return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        }
        set length(t) {
          this.updateFromAngle(this.angle, t);
        }
        add(t) {
          return o.create(this.x + t.x, this.y + t.y);
        }
        addTo(t) {
          (this.x += t.x), (this.y += t.y);
        }
        sub(t) {
          return o.create(this.x - t.x, this.y - t.y);
        }
        subFrom(t) {
          (this.x -= t.x), (this.y -= t.y);
        }
        mult(t) {
          return o.create(this.x * t, this.y * t);
        }
        multTo(t) {
          (this.x *= t), (this.y *= t);
        }
        div(t) {
          return o.create(this.x / t, this.y / t);
        }
        divTo(t) {
          (this.x /= t), (this.y /= t);
        }
        distanceTo(t) {
          return this.sub(t).length;
        }
        getLengthSq() {
          return Math.pow(this.x, 2) + Math.pow(this.y, 2);
        }
        distanceToSq(t) {
          return this.sub(t).getLengthSq();
        }
        manhattanDistanceTo(t) {
          return Math.abs(t.x - this.x) + Math.abs(t.y - this.y);
        }
        copy() {
          return o.clone(this);
        }
        setTo(t) {
          (this.x = t.x), (this.y = t.y);
        }
        rotate(t) {
          return o.create(
            this.x * Math.cos(t) - this.y * Math.sin(t),
            this.x * Math.sin(t) + this.y * Math.cos(t)
          );
        }
        updateFromAngle(t, e) {
          (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
        }
      }
      (e.Vector = o), (o.origin = o.create(0, 0));
    },
    function (t, e, i) {
      var o = i(73),
        s = i(79);
      t.exports = function (t, e) {
        var i = s(t, e);
        return o(i) ? i : void 0;
      };
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }), s(i(269), e);
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }), s(i(275), e);
    },
    function (t, e, i) {
      var o = i(63),
        s = i(64),
        n = i(65),
        r = i(66),
        a = i(67);
      function l(t) {
        var e = -1,
          i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i; ) {
          var o = t[e];
          this.set(o[0], o[1]);
        }
      }
      (l.prototype.clear = o),
        (l.prototype.delete = s),
        (l.prototype.get = n),
        (l.prototype.has = r),
        (l.prototype.set = a),
        (t.exports = l);
    },
    function (t, e, i) {
      var o = i(30);
      t.exports = function (t, e) {
        for (var i = t.length; i--; ) if (o(t[i][0], e)) return i;
        return -1;
      };
    },
    function (t, e, i) {
      var o = i(19),
        s = i(75),
        n = i(76),
        r = o ? o.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : r && r in Object(t)
          ? s(t)
          : n(t);
      };
    },
    function (t, e, i) {
      var o = i(8)(Object, "create");
      t.exports = o;
    },
    function (t, e, i) {
      var o = i(88);
      t.exports = function (t, e) {
        var i = t.__data__;
        return o(e) ? i["string" == typeof e ? "string" : "hash"] : i.map;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.NumberUtils = void 0);
      const o = i(1),
        s = i(7);
      class n {
        static clamp(t, e, i) {
          return Math.min(Math.max(t, e), i);
        }
        static mix(t, e, i, o) {
          return Math.floor((t * i + e * o) / (i + o));
        }
        static randomInRange(t) {
          const e = n.getRangeMax(t);
          let i = n.getRangeMin(t);
          return e === i && (i = 0), Math.random() * (e - i) + i;
        }
        static getRangeValue(t) {
          return "number" == typeof t ? t : n.randomInRange(t);
        }
        static getRangeMin(t) {
          return "number" == typeof t ? t : t.min;
        }
        static getRangeMax(t) {
          return "number" == typeof t ? t : t.max;
        }
        static setRangeValue(t, e) {
          if (t === e || (void 0 === e && "number" == typeof t)) return t;
          const i = n.getRangeMin(t),
            o = n.getRangeMax(t);
          return void 0 !== e
            ? { min: Math.min(i, e), max: Math.max(o, e) }
            : n.setRangeValue(i, o);
        }
        static getValue(t) {
          const e = t.random,
            { enable: i, minimumValue: o } =
              "boolean" == typeof e ? { enable: e, minimumValue: 0 } : e;
          return i
            ? n.getRangeValue(n.setRangeValue(t.value, o))
            : n.getRangeValue(t.value);
        }
        static getDistances(t, e) {
          const i = t.x - e.x,
            o = t.y - e.y;
          return { dx: i, dy: o, distance: Math.sqrt(i * i + o * o) };
        }
        static getDistance(t, e) {
          return n.getDistances(t, e).distance;
        }
        static getParticleDirectionAngle(t) {
          if ("number" == typeof t) return (t * Math.PI) / 180;
          switch (t) {
            case o.MoveDirection.top:
              return -Math.PI / 2;
            case o.MoveDirection.topRight:
              return -Math.PI / 4;
            case o.MoveDirection.right:
              return 0;
            case o.MoveDirection.bottomRight:
              return Math.PI / 4;
            case o.MoveDirection.bottom:
              return Math.PI / 2;
            case o.MoveDirection.bottomLeft:
              return (3 * Math.PI) / 4;
            case o.MoveDirection.left:
              return Math.PI;
            case o.MoveDirection.topLeft:
              return (-3 * Math.PI) / 4;
            case o.MoveDirection.none:
            default:
              return Math.random() * Math.PI * 2;
          }
        }
        static getParticleBaseVelocity(t) {
          const e = s.Vector.origin;
          return (e.length = 1), (e.angle = t), e;
        }
        static rotateVelocity(t, e) {
          return {
            horizontal: t.horizontal * Math.cos(e) - t.vertical * Math.sin(e),
            vertical: t.horizontal * Math.sin(e) + t.vertical * Math.cos(e),
          };
        }
        static collisionVelocity(t, e, i, o) {
          return s.Vector.create(
            (t.x * (i - o)) / (i + o) + (2 * e.x * o) / (i + o),
            t.y
          );
        }
        static calcEasing(t, e) {
          switch (e) {
            case o.EasingType.easeOutQuad:
              return 1 - Math.pow(1 - t, 2);
            case o.EasingType.easeOutCubic:
              return 1 - Math.pow(1 - t, 3);
            case o.EasingType.easeOutQuart:
              return 1 - Math.pow(1 - t, 4);
            case o.EasingType.easeOutQuint:
              return 1 - Math.pow(1 - t, 5);
            case o.EasingType.easeOutExpo:
              return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            case o.EasingType.easeOutSine:
              return Math.sin((t * Math.PI) / 2);
            case o.EasingType.easeOutBack: {
              const e = 1.70158;
              return 1 + (e + 1) * Math.pow(t - 1, 3) + e * Math.pow(t - 1, 2);
            }
            case o.EasingType.easeOutCirc:
              return Math.sqrt(1 - Math.pow(t - 1, 2));
            default:
              return t;
          }
        }
      }
      e.NumberUtils = n;
    },
    function (t, e, i) {
      var o = i(8)(i(4), "Map");
      t.exports = o;
    },
    function (t, e, i) {
      var o = i(4).Symbol;
      t.exports = o;
    },
    function (t, e) {
      var i = Array.isArray;
      t.exports = i;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.OutModeDirection = void 0),
        (function (t) {
          (t.bottom = "bottom"),
            (t.left = "left"),
            (t.right = "right"),
            (t.top = "top");
        })(e.OutModeDirection || (e.OutModeDirection = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Constants = void 0);
      class o {}
      (e.Constants = o),
        (o.canvasClass = "tsparticles-canvas-el"),
        (o.randomColorValue = "random"),
        (o.midColorValue = "mid"),
        (o.touchEndEvent = "touchend"),
        (o.mouseDownEvent = "mousedown"),
        (o.mouseUpEvent = "mouseup"),
        (o.mouseMoveEvent = "mousemove"),
        (o.touchStartEvent = "touchstart"),
        (o.touchMoveEvent = "touchmove"),
        (o.mouseLeaveEvent = "mouseleave"),
        (o.mouseOutEvent = "mouseout"),
        (o.touchCancelEvent = "touchcancel"),
        (o.resizeEvent = "resize"),
        (o.visibilityChangeEvent = "visibilitychange"),
        (o.noPolygonDataLoaded = "No polygon data loaded."),
        (o.noPolygonFound =
          "No polygon found, you need to specify SVG url in config.");
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Circle = void 0);
      const o = i(24);
      class s extends o.Range {
        constructor(t, e, i) {
          super(t, e), (this.radius = i);
        }
        contains(t) {
          return (
            Math.pow(t.x - this.position.x, 2) +
              Math.pow(t.y - this.position.y, 2) <=
            this.radius * this.radius
          );
        }
        intersects(t) {
          const e = t,
            i = t,
            o = this.position,
            s = t.position,
            n = Math.abs(s.x - o.x),
            r = Math.abs(s.y - o.y),
            a = this.radius;
          if (void 0 !== i.radius) {
            return a + i.radius > Math.sqrt(n * n + r + r);
          }
          if (void 0 !== e.size) {
            const t = e.size.width,
              i = e.size.height,
              o = Math.pow(n - t, 2) + Math.pow(r - i, 2);
            return (
              !(n > a + t || r > a + i) && (n <= t || r <= i || o <= a * a)
            );
          }
          return !1;
        }
      }
      e.Circle = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Range = void 0);
      e.Range = class {
        constructor(t, e) {
          this.position = { x: t, y: e };
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Rectangle = void 0);
      const o = i(24);
      class s extends o.Range {
        constructor(t, e, i, o) {
          super(t, e), (this.size = { height: o, width: i });
        }
        contains(t) {
          const e = this.size.width,
            i = this.size.height,
            o = this.position;
          return t.x >= o.x && t.x <= o.x + e && t.y >= o.y && t.y <= o.y + i;
        }
        intersects(t) {
          const e = t,
            i = t,
            o = this.size.width,
            s = this.size.height,
            n = this.position,
            r = t.position;
          if (void 0 !== i.radius) return i.intersects(this);
          if (void 0 !== e.size) {
            const t = e.size,
              i = t.width,
              a = t.height;
            return (
              r.x < n.x + o && r.x + i > n.x && r.y < n.y + s && r.y + a > n.y
            );
          }
          return !1;
        }
      }
      e.Rectangle = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ParticlesOptions = void 0);
      const o = i(178),
        s = i(181),
        n = i(190),
        r = i(192),
        a = i(49),
        l = i(194),
        c = i(196),
        u = i(198),
        d = i(199),
        h = i(202),
        v = i(205),
        p = i(27),
        f = i(207),
        y = i(50),
        b = i(210),
        m = i(214),
        g = i(215),
        w = i(217);
      e.ParticlesOptions = class {
        constructor() {
          (this.bounce = new y.Bounce()),
            (this.collisions = new h.Collisions()),
            (this.color = new p.AnimatableColor()),
            (this.destroy = new b.Destroy()),
            (this.life = new f.Life()),
            (this.links = new o.Links()),
            (this.move = new s.Move()),
            (this.number = new n.ParticlesNumber()),
            (this.opacity = new r.Opacity()),
            (this.reduceDuplicates = !1),
            (this.roll = new w.Roll()),
            (this.rotate = new c.Rotate()),
            (this.shadow = new u.Shadow()),
            (this.shape = new a.Shape()),
            (this.size = new l.Size()),
            (this.stroke = new d.Stroke()),
            (this.tilt = new g.Tilt()),
            (this.twinkle = new v.Twinkle()),
            (this.wobble = new m.Wobble());
        }
        get line_linked() {
          return this.links;
        }
        set line_linked(t) {
          this.links = t;
        }
        get lineLinked() {
          return this.links;
        }
        set lineLinked(t) {
          this.links = t;
        }
        load(t) {
          var e, i, o, s, n, r, a;
          if (void 0 === t) return;
          this.bounce.load(t.bounce),
            (this.color = p.AnimatableColor.create(this.color, t.color)),
            this.destroy.load(t.destroy),
            this.life.load(t.life);
          const l =
            null !==
              (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) &&
            void 0 !== i
              ? i
              : t.line_linked;
          void 0 !== l && this.links.load(l),
            this.move.load(t.move),
            this.number.load(t.number),
            this.opacity.load(t.opacity),
            void 0 !== t.reduceDuplicates &&
              (this.reduceDuplicates = t.reduceDuplicates),
            this.roll.load(t.roll),
            this.rotate.load(t.rotate),
            this.shape.load(t.shape),
            this.size.load(t.size),
            this.shadow.load(t.shadow),
            this.tilt.load(t.tilt),
            this.twinkle.load(t.twinkle),
            this.wobble.load(t.wobble);
          const c =
            null !==
              (s =
                null === (o = t.move) || void 0 === o
                  ? void 0
                  : o.collisions) && void 0 !== s
              ? s
              : null === (n = t.move) || void 0 === n
              ? void 0
              : n.bounce;
          void 0 !== c && (this.collisions.enable = c),
            this.collisions.load(t.collisions);
          const u =
            null !== (r = t.stroke) && void 0 !== r
              ? r
              : null === (a = t.shape) || void 0 === a
              ? void 0
              : a.stroke;
          void 0 !== u &&
            (u instanceof Array
              ? (this.stroke = u.map((t) => {
                  const e = new d.Stroke();
                  return e.load(t), e;
                }))
              : (this.stroke instanceof Array && (this.stroke = new d.Stroke()),
                this.stroke.load(u)));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AnimatableColor = void 0);
      const o = i(2),
        s = i(200);
      class n extends o.OptionsColor {
        constructor() {
          super(), (this.animation = new s.HslAnimation());
        }
        static create(t, e) {
          const i = null != t ? t : new n();
          return (
            void 0 !== e && i.load("string" == typeof e ? { value: e } : e), i
          );
        }
        load(t) {
          if ((super.load(t), !t)) return;
          const e = t.animation;
          void 0 !== e &&
            (void 0 !== e.enable
              ? this.animation.h.load(e)
              : this.animation.load(t.animation));
        }
      }
      e.AnimatableColor = n;
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.tsParticles =
          e.pJSDom =
          e.particlesJS =
          e.Main =
          e.Utils =
          e.Constants =
          e.ColorUtils =
          e.CanvasUtils =
            void 0);
      const n = i(231),
        r = i(232);
      Object.defineProperty(e, "Main", {
        enumerable: !0,
        get: function () {
          return r.Main;
        },
      });
      const a = i(0);
      Object.defineProperty(e, "CanvasUtils", {
        enumerable: !0,
        get: function () {
          return a.CanvasUtils;
        },
      }),
        Object.defineProperty(e, "ColorUtils", {
          enumerable: !0,
          get: function () {
            return a.ColorUtils;
          },
        }),
        Object.defineProperty(e, "Constants", {
          enumerable: !0,
          get: function () {
            return a.Constants;
          },
        }),
        Object.defineProperty(e, "Utils", {
          enumerable: !0,
          get: function () {
            return a.Utils;
          },
        });
      const l = new r.Main();
      (e.tsParticles = l), l.init();
      const { particlesJS: c, pJSDom: u } = n.initPjs(l);
      (e.particlesJS = c),
        (e.pJSDom = u),
        s(i(7), e),
        s(i(52), e),
        s(i(1), e),
        s(i(9), e),
        s(i(10), e),
        s(i(5), e),
        s(i(286), e),
        s(i(292), e);
    },
    function (e, i) {
      e.exports = t;
    },
    function (t, e) {
      t.exports = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    function (t, e, i) {
      var o = i(13),
        s = i(33);
      t.exports = function (t) {
        if (!s(t)) return !1;
        var e = o(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    function (t, e, i) {
      (function (e) {
        var i = "object" == typeof e && e && e.Object === Object && e;
        t.exports = i;
      }).call(this, i(74));
    },
    function (t, e) {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    function (t, e) {
      var i = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return i.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      };
    },
    function (t, e, i) {
      var o = i(80),
        s = i(87),
        n = i(89),
        r = i(90),
        a = i(91);
      function l(t) {
        var e = -1,
          i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i; ) {
          var o = t[e];
          this.set(o[0], o[1]);
        }
      }
      (l.prototype.clear = o),
        (l.prototype.delete = s),
        (l.prototype.get = n),
        (l.prototype.has = r),
        (l.prototype.set = a),
        (t.exports = l);
    },
    function (t, e, i) {
      var o = i(92),
        s = i(95),
        n = i(96);
      t.exports = function (t, e, i, r, a, l) {
        var c = 1 & i,
          u = t.length,
          d = e.length;
        if (u != d && !(c && d > u)) return !1;
        var h = l.get(t);
        if (h && l.get(e)) return h == e;
        var v = -1,
          p = !0,
          f = 2 & i ? new o() : void 0;
        for (l.set(t, e), l.set(e, t); ++v < u; ) {
          var y = t[v],
            b = e[v];
          if (r) var m = c ? r(b, y, v, e, t, l) : r(y, b, v, t, e, l);
          if (void 0 !== m) {
            if (m) continue;
            p = !1;
            break;
          }
          if (f) {
            if (
              !s(e, function (t, e) {
                if (!n(f, e) && (y === t || a(y, t, i, r, l))) return f.push(e);
              })
            ) {
              p = !1;
              break;
            }
          } else if (y !== b && !a(y, b, i, r, l)) {
            p = !1;
            break;
          }
        }
        return l.delete(t), l.delete(e), p;
      };
    },
    function (t, e, i) {
      (function (t) {
        var o = i(4),
          s = i(113),
          n = e && !e.nodeType && e,
          r = n && "object" == typeof t && t && !t.nodeType && t,
          a = r && r.exports === n ? o.Buffer : void 0,
          l = (a ? a.isBuffer : void 0) || s;
        t.exports = l;
      }).call(this, i(38)(t));
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e, i) {
      var o = i(115),
        s = i(116),
        n = i(117),
        r = n && n.isTypedArray,
        a = r ? s(r) : o;
      t.exports = a;
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Options = void 0);
      const o = i(128),
        s = i(26),
        n = i(219),
        r = i(221),
        a = i(222),
        l = i(0),
        c = i(224),
        u = i(1),
        d = i(226),
        h = i(227),
        v = i(229),
        p = i(230);
      e.Options = class {
        constructor() {
          (this.autoPlay = !0),
            (this.background = new r.Background()),
            (this.backgroundMask = new n.BackgroundMask()),
            (this.fullScreen = new d.FullScreen()),
            (this.detectRetina = !0),
            (this.fpsLimit = 60),
            (this.infection = new a.Infection()),
            (this.interactivity = new o.Interactivity()),
            (this.manualParticles = []),
            (this.motion = new h.Motion()),
            (this.particles = new s.ParticlesOptions()),
            (this.pauseOnBlur = !0),
            (this.pauseOnOutsideViewport = !0),
            (this.responsive = []),
            (this.themes = []);
        }
        get fps_limit() {
          return this.fpsLimit;
        }
        set fps_limit(t) {
          this.fpsLimit = t;
        }
        get retina_detect() {
          return this.detectRetina;
        }
        set retina_detect(t) {
          this.detectRetina = t;
        }
        get backgroundMode() {
          return this.fullScreen;
        }
        set backgroundMode(t) {
          this.fullScreen.load(t);
        }
        load(t) {
          var e, i, o;
          if (void 0 === t) return;
          if (void 0 !== t.preset)
            if (t.preset instanceof Array)
              for (const e of t.preset) this.importPreset(e);
            else this.importPreset(t.preset);
          void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay);
          const s =
            null !== (e = t.detectRetina) && void 0 !== e ? e : t.retina_detect;
          void 0 !== s && (this.detectRetina = s);
          const n = null !== (i = t.fpsLimit) && void 0 !== i ? i : t.fps_limit;
          if (
            (void 0 !== n && (this.fpsLimit = n),
            void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
            void 0 !== t.pauseOnOutsideViewport &&
              (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
            this.background.load(t.background),
            this.fullScreen.load(
              null !== (o = t.fullScreen) && void 0 !== o ? o : t.backgroundMode
            ),
            this.backgroundMask.load(t.backgroundMask),
            this.infection.load(t.infection),
            this.interactivity.load(t.interactivity),
            void 0 !== t.manualParticles &&
              (this.manualParticles = t.manualParticles.map((t) => {
                const e = new v.ManualParticle();
                return e.load(t), e;
              })),
            this.motion.load(t.motion),
            this.particles.load(t.particles),
            l.Plugins.loadOptions(this, t),
            void 0 !== t.responsive)
          )
            for (const e of t.responsive) {
              const t = new p.Responsive();
              t.load(e), this.responsive.push(t);
            }
          if (
            (this.responsive.sort((t, e) => t.maxWidth - e.maxWidth),
            void 0 !== t.themes)
          )
            for (const e of t.themes) {
              const t = new c.Theme();
              t.load(e), this.themes.push(t);
            }
        }
        setTheme(t) {
          if (t) {
            const e = this.themes.find((e) => e.name === t);
            e && this.load(e.options);
          } else {
            const t =
              "undefined" != typeof matchMedia &&
              matchMedia("(prefers-color-scheme: dark)").matches;
            let e = this.themes.find(
              (e) =>
                e.default.value &&
                ((e.default.mode === u.ThemeMode.dark && t) ||
                  (e.default.mode === u.ThemeMode.light && !t))
            );
            e ||
              (e = this.themes.find(
                (t) => t.default.value && t.default.mode === u.ThemeMode.any
              )),
              e && this.load(e.options);
          }
        }
        importPreset(t) {
          this.load(l.Plugins.getPreset(t));
        }
        setResponsive(t, e, i) {
          var o;
          this.load(i),
            this.load(
              null === (o = this.responsive.find((i) => i.maxWidth * e > t)) ||
                void 0 === o
                ? void 0
                : o.options
            );
        }
      };
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        s(i(142), e),
        s(i(143), e),
        s(i(144), e),
        s(i(145), e),
        s(i(146), e),
        s(i(147), e);
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BubbleBase = void 0);
      const o = i(2);
      e.BubbleBase = class {
        constructor() {
          (this.distance = 200), (this.duration = 0.4);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.opacity && (this.opacity = t.opacity),
            void 0 !== t.color &&
              (t.color instanceof Array
                ? (this.color = t.color.map((t) =>
                    o.OptionsColor.create(void 0, t)
                  ))
                : (this.color instanceof Array &&
                    (this.color = new o.OptionsColor()),
                  (this.color = o.OptionsColor.create(this.color, t.color)))),
            void 0 !== t.size && (this.size = t.size));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RepulseBase = void 0);
      const o = i(1);
      e.RepulseBase = class {
        constructor() {
          (this.distance = 200),
            (this.duration = 0.4),
            (this.factor = 100),
            (this.speed = 1),
            (this.maxSpeed = 50),
            (this.easing = o.EasingType.easeOutQuad);
        }
        load(t) {
          t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.easing && (this.easing = t.easing),
            void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ColorUtils = void 0);
      const o = i(46),
        s = i(22),
        n = i(17);
      function r(t, e, i) {
        let o = i;
        return (
          o < 0 && (o += 1),
          o > 1 && (o -= 1),
          o < 1 / 6
            ? t + 6 * (e - t) * o
            : o < 0.5
            ? e
            : o < 2 / 3
            ? t + (e - t) * (2 / 3 - o) * 6
            : t
        );
      }
      function a(t) {
        if (t.startsWith("rgb")) {
          const e =
            /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(
              t
            );
          return e
            ? {
                a: e.length > 4 ? parseFloat(e[5]) : 1,
                b: parseInt(e[3], 10),
                g: parseInt(e[2], 10),
                r: parseInt(e[1], 10),
              }
            : void 0;
        }
        if (t.startsWith("hsl")) {
          const e =
            /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(
              t
            );
          return e
            ? l.hslaToRgba({
                a: e.length > 4 ? parseFloat(e[5]) : 1,
                h: parseInt(e[1], 10),
                l: parseInt(e[3], 10),
                s: parseInt(e[2], 10),
              })
            : void 0;
        }
        if (t.startsWith("hsv")) {
          const e =
            /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(
              t
            );
          return e
            ? l.hsvaToRgba({
                a: e.length > 4 ? parseFloat(e[5]) : 1,
                h: parseInt(e[1], 10),
                s: parseInt(e[2], 10),
                v: parseInt(e[3], 10),
              })
            : void 0;
        }
        {
          const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
            i = t.replace(
              e,
              (t, e, i, o, s) =>
                e + e + i + i + o + o + (void 0 !== s ? s + s : "")
            ),
            o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(
              i
            );
          return o
            ? {
                a: void 0 !== o[4] ? parseInt(o[4], 16) / 255 : 1,
                b: parseInt(o[3], 16),
                g: parseInt(o[2], 16),
                r: parseInt(o[1], 16),
              }
            : void 0;
        }
      }
      class l {
        static colorToRgb(t, e, i = !0) {
          var n, r, a;
          if (void 0 === t) return;
          const c = "string" == typeof t ? { value: t } : t;
          let u;
          if ("string" == typeof c.value)
            u =
              c.value === s.Constants.randomColorValue
                ? l.getRandomRgbColor()
                : l.stringToRgb(c.value);
          else if (c.value instanceof Array) {
            const t = o.Utils.itemFromArray(c.value, e, i);
            u = l.colorToRgb({ value: t });
          } else {
            const t = c.value,
              e = null !== (n = t.rgb) && void 0 !== n ? n : c.value;
            if (void 0 !== e.r) u = e;
            else {
              const e = null !== (r = t.hsl) && void 0 !== r ? r : c.value;
              if (void 0 !== e.h && void 0 !== e.l) u = l.hslToRgb(e);
              else {
                const e = null !== (a = t.hsv) && void 0 !== a ? a : c.value;
                void 0 !== e.h && void 0 !== e.v && (u = l.hsvToRgb(e));
              }
            }
          }
          return u;
        }
        static colorToHsl(t, e, i = !0) {
          const o = l.colorToRgb(t, e, i);
          return void 0 !== o ? l.rgbToHsl(o) : void 0;
        }
        static rgbToHsl(t) {
          const e = t.r / 255,
            i = t.g / 255,
            o = t.b / 255,
            s = Math.max(e, i, o),
            n = Math.min(e, i, o),
            r = { h: 0, l: (s + n) / 2, s: 0 };
          return (
            s != n &&
              ((r.s = r.l < 0.5 ? (s - n) / (s + n) : (s - n) / (2 - s - n)),
              (r.h =
                e === s
                  ? (i - o) / (s - n)
                  : (r.h =
                      i === s
                        ? 2 + (o - e) / (s - n)
                        : 4 + (e - i) / (s - n)))),
            (r.l *= 100),
            (r.s *= 100),
            (r.h *= 60),
            r.h < 0 && (r.h += 360),
            r
          );
        }
        static stringToAlpha(t) {
          var e;
          return null === (e = a(t)) || void 0 === e ? void 0 : e.a;
        }
        static stringToRgb(t) {
          return a(t);
        }
        static hslToRgb(t) {
          const e = { b: 0, g: 0, r: 0 },
            i = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
          if (0 === i.s) (e.b = i.l), (e.g = i.l), (e.r = i.l);
          else {
            const t = i.l < 0.5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
              o = 2 * i.l - t;
            (e.r = r(o, t, i.h + 1 / 3)),
              (e.g = r(o, t, i.h)),
              (e.b = r(o, t, i.h - 1 / 3));
          }
          return (
            (e.r = Math.floor(255 * e.r)),
            (e.g = Math.floor(255 * e.g)),
            (e.b = Math.floor(255 * e.b)),
            e
          );
        }
        static hslaToRgba(t) {
          const e = l.hslToRgb(t);
          return { a: t.a, b: e.b, g: e.g, r: e.r };
        }
        static hslToHsv(t) {
          const e = t.l / 100,
            i = e + (t.s / 100) * Math.min(e, 1 - e),
            o = i ? 2 * (1 - e / i) : 0;
          return { h: t.h, s: 100 * o, v: 100 * i };
        }
        static hslaToHsva(t) {
          const e = l.hslToHsv(t);
          return { a: t.a, h: e.h, s: e.s, v: e.v };
        }
        static hsvToHsl(t) {
          const e = t.v / 100,
            i = e * (1 - t.s / 100 / 2),
            o = 0 === i || 1 === i ? 0 : (e - i) / Math.min(i, 1 - i);
          return { h: t.h, l: 100 * i, s: 100 * o };
        }
        static hsvaToHsla(t) {
          const e = l.hsvToHsl(t);
          return { a: t.a, h: e.h, l: e.l, s: e.s };
        }
        static hsvToRgb(t) {
          const e = { b: 0, g: 0, r: 0 },
            i = t.h / 60,
            o = t.s / 100,
            s = t.v / 100,
            n = s * o,
            r = n * (1 - Math.abs((i % 2) - 1));
          let a;
          if (
            (i >= 0 && i <= 1
              ? (a = { r: n, g: r, b: 0 })
              : i > 1 && i <= 2
              ? (a = { r: r, g: n, b: 0 })
              : i > 2 && i <= 3
              ? (a = { r: 0, g: n, b: r })
              : i > 3 && i <= 4
              ? (a = { r: 0, g: r, b: n })
              : i > 4 && i <= 5
              ? (a = { r: r, g: 0, b: n })
              : i > 5 && i <= 6 && (a = { r: n, g: 0, b: r }),
            a)
          ) {
            const t = s - n;
            (e.r = Math.floor(255 * (a.r + t))),
              (e.g = Math.floor(255 * (a.g + t))),
              (e.b = Math.floor(255 * (a.b + t)));
          }
          return e;
        }
        static hsvaToRgba(t) {
          const e = l.hsvToRgb(t);
          return { a: t.a, b: e.b, g: e.g, r: e.r };
        }
        static rgbToHsv(t) {
          const e = { r: t.r / 255, g: t.g / 255, b: t.b / 255 },
            i = Math.max(e.r, e.g, e.b),
            o = i - Math.min(e.r, e.g, e.b);
          let s = 0;
          i === e.r
            ? (s = ((e.g - e.b) / o) * 60)
            : i === e.g
            ? (s = 60 * (2 + (e.b - e.r) / o))
            : i === e.b && (s = 60 * (4 + (e.r - e.g) / o));
          return { h: s, s: 100 * (i ? o / i : 0), v: 100 * i };
        }
        static rgbaToHsva(t) {
          const e = l.rgbToHsv(t);
          return { a: t.a, h: e.h, s: e.s, v: e.v };
        }
        static getRandomRgbColor(t) {
          const e = null != t ? t : 0;
          return {
            b: Math.floor(
              n.NumberUtils.randomInRange(n.NumberUtils.setRangeValue(e, 256))
            ),
            g: Math.floor(
              n.NumberUtils.randomInRange(n.NumberUtils.setRangeValue(e, 256))
            ),
            r: Math.floor(
              n.NumberUtils.randomInRange(n.NumberUtils.setRangeValue(e, 256))
            ),
          };
        }
        static getStyleFromRgb(t, e) {
          return `rgba(${t.r}, ${t.g}, ${t.b}, ${null != e ? e : 1})`;
        }
        static getStyleFromHsl(t, e) {
          return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${null != e ? e : 1})`;
        }
        static getStyleFromHsv(t, e) {
          return l.getStyleFromHsl(l.hsvToHsl(t), e);
        }
        static mix(t, e, i, o) {
          let s = t,
            r = e;
          return (
            void 0 === s.r && (s = l.hslToRgb(t)),
            void 0 === r.r && (r = l.hslToRgb(e)),
            {
              b: n.NumberUtils.mix(s.b, r.b, i, o),
              g: n.NumberUtils.mix(s.g, r.g, i, o),
              r: n.NumberUtils.mix(s.r, r.r, i, o),
            }
          );
        }
        static replaceColorSvg(t, e, i) {
          const { svgData: o } = t;
          if (!o) return "";
          if (o.includes("fill")) {
            const t =
              /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
            return o.replace(t, () => l.getStyleFromHsl(e, i));
          }
          const s = o.indexOf(">");
          return `${o.substring(0, s)} fill="${l.getStyleFromHsl(
            e,
            i
          )}"${o.substring(s)}`;
        }
        static getLinkColor(t, e, i) {
          var o, n;
          if (i === s.Constants.randomColorValue) return l.getRandomRgbColor();
          if ("mid" !== i) return i;
          {
            const i =
                null !== (o = t.getFillColor()) && void 0 !== o
                  ? o
                  : t.getStrokeColor(),
              s =
                null !== (n = null == e ? void 0 : e.getFillColor()) &&
                void 0 !== n
                  ? n
                  : null == e
                  ? void 0
                  : e.getStrokeColor();
            if (i && s && e) return l.mix(i, s, t.getRadius(), e.getRadius());
            {
              const t = null != i ? i : s;
              if (t) return l.hslToRgb(t);
            }
          }
        }
        static getLinkRandomColor(t, e, i) {
          const o = "string" == typeof t ? t : t.value;
          return o === s.Constants.randomColorValue
            ? i
              ? l.colorToRgb({ value: o })
              : e
              ? s.Constants.randomColorValue
              : s.Constants.midColorValue
            : l.colorToRgb({ value: o });
        }
        static getHslFromAnimation(t) {
          return void 0 !== t
            ? { h: t.h.value, s: t.s.value, l: t.l.value }
            : void 0;
        }
      }
      e.ColorUtils = l;
    },
    function (t, e, i) {
      "use strict";
      var o =
        (this && this.__awaiter) ||
        function (t, e, i, o) {
          return new (i || (i = Promise))(function (s, n) {
            function r(t) {
              try {
                l(o.next(t));
              } catch (t) {
                n(t);
              }
            }
            function a(t) {
              try {
                l(o.throw(t));
              } catch (t) {
                n(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(r, a);
            }
            l((o = o.apply(t, e || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Utils = void 0);
      const s = i(21),
        n = i(17);
      function r(t, e, i, o, s, n) {
        const r = { bounced: !1 };
        return (
          e.min >= o.min &&
            e.min <= o.max &&
            e.max >= o.min &&
            e.max <= o.max &&
            ((t.max >= i.min && t.max <= (i.max + i.min) / 2 && s > 0) ||
              (t.min <= i.max && t.min > (i.max + i.min) / 2 && s < 0)) &&
            ((r.velocity = s * -n), (r.bounced = !0)),
          r
        );
      }
      function a(t, e) {
        if (e instanceof Array) {
          for (const i of e) if (t.matches(i)) return !0;
          return !1;
        }
        return t.matches(e);
      }
      class l {
        static isSsr() {
          return "undefined" == typeof window || !window;
        }
        static get animate() {
          return l.isSsr()
            ? (t) => setTimeout(t)
            : (t) =>
                (
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  window.setTimeout
                )(t);
        }
        static get cancelAnimation() {
          return l.isSsr()
            ? (t) => clearTimeout(t)
            : (t) =>
                (
                  window.cancelAnimationFrame ||
                  window.webkitCancelRequestAnimationFrame ||
                  window.mozCancelRequestAnimationFrame ||
                  window.oCancelRequestAnimationFrame ||
                  window.msCancelRequestAnimationFrame ||
                  window.clearTimeout
                )(t);
        }
        static isInArray(t, e) {
          return t === e || (e instanceof Array && e.indexOf(t) > -1);
        }
        static loadFont(t) {
          return o(this, void 0, void 0, function* () {
            try {
              yield document.fonts.load(`${t.weight} 36px '${t.font}'`);
            } catch (t) {}
          });
        }
        static arrayRandomIndex(t) {
          return Math.floor(Math.random() * t.length);
        }
        static itemFromArray(t, e, i = !0) {
          return t[void 0 !== e && i ? e % t.length : l.arrayRandomIndex(t)];
        }
        static isPointInside(t, e, i, o) {
          return l.areBoundsInside(
            l.calculateBounds(t, null != i ? i : 0),
            e,
            o
          );
        }
        static areBoundsInside(t, e, i) {
          let o = !0;
          return (
            (i && i !== s.OutModeDirection.bottom) || (o = t.top < e.height),
            !o || (i && i !== s.OutModeDirection.left) || (o = t.right > 0),
            !o ||
              (i && i !== s.OutModeDirection.right) ||
              (o = t.left < e.width),
            !o || (i && i !== s.OutModeDirection.top) || (o = t.bottom > 0),
            o
          );
        }
        static calculateBounds(t, e) {
          return {
            bottom: t.y + e,
            left: t.x - e,
            right: t.x + e,
            top: t.y - e,
          };
        }
        static loadImage(t) {
          return new Promise((e, i) => {
            if (!t) return void i("Error tsParticles - No image.src");
            const o = { source: t, type: t.substr(t.length - 3) },
              s = new Image();
            s.addEventListener("load", () => {
              (o.element = s), e(o);
            }),
              s.addEventListener("error", () => {
                i("Error tsParticles - loading image: " + t);
              }),
              (s.src = t);
          });
        }
        static downloadSvgImage(t) {
          return o(this, void 0, void 0, function* () {
            if (!t) throw new Error("Error tsParticles - No image.src");
            const e = { source: t, type: t.substr(t.length - 3) };
            if ("svg" !== e.type) return l.loadImage(t);
            const i = yield fetch(e.source);
            if (!i.ok) throw new Error("Error tsParticles - Image not found");
            return (e.svgData = yield i.text()), e;
          });
        }
        static deepExtend(t, ...e) {
          for (const i of e) {
            if (null == i) continue;
            if ("object" != typeof i) {
              t = i;
              continue;
            }
            const e = Array.isArray(i);
            !e || ("object" == typeof t && t && Array.isArray(t))
              ? e ||
                ("object" == typeof t && t && !Array.isArray(t)) ||
                (t = {})
              : (t = []);
            for (const e in i) {
              if ("__proto__" === e) continue;
              const o = i[e],
                s = "object" == typeof o,
                n = t;
              n[e] =
                s && Array.isArray(o)
                  ? o.map((t) => l.deepExtend(n[e], t))
                  : l.deepExtend(n[e], o);
            }
          }
          return t;
        }
        static isDivModeEnabled(t, e) {
          return e instanceof Array
            ? !!e.find((e) => e.enable && l.isInArray(t, e.mode))
            : l.isInArray(t, e.mode);
        }
        static divModeExecute(t, e, i) {
          if (e instanceof Array)
            for (const o of e) {
              const e = o.mode;
              o.enable && l.isInArray(t, e) && l.singleDivModeExecute(o, i);
            }
          else {
            const o = e.mode;
            e.enable && l.isInArray(t, o) && l.singleDivModeExecute(e, i);
          }
        }
        static singleDivModeExecute(t, e) {
          const i = t.selectors;
          if (i instanceof Array) for (const o of i) e(o, t);
          else e(i, t);
        }
        static divMode(t, e) {
          if (e && t)
            return t instanceof Array
              ? t.find((t) => a(e, t.selectors))
              : a(e, t.selectors)
              ? t
              : void 0;
        }
        static circleBounceDataFromParticle(t) {
          return {
            position: t.getPosition(),
            radius: t.getRadius(),
            mass: t.getMass(),
            velocity: t.velocity,
            factor: {
              horizontal: n.NumberUtils.getValue(t.options.bounce.horizontal),
              vertical: n.NumberUtils.getValue(t.options.bounce.vertical),
            },
          };
        }
        static circleBounce(t, e) {
          const i = t.velocity.x,
            o = t.velocity.y,
            s = t.position,
            r = e.position;
          if (i * (r.x - s.x) + o * (r.y - s.y) >= 0) {
            const i = -Math.atan2(r.y - s.y, r.x - s.x),
              o = t.mass,
              a = e.mass,
              l = t.velocity.rotate(i),
              c = e.velocity.rotate(i),
              u = n.NumberUtils.collisionVelocity(l, c, o, a),
              d = n.NumberUtils.collisionVelocity(c, l, o, a),
              h = u.rotate(-i),
              v = d.rotate(-i);
            (t.velocity.x = h.x * t.factor.horizontal),
              (t.velocity.y = h.y * t.factor.vertical),
              (e.velocity.x = v.x * e.factor.horizontal),
              (e.velocity.y = v.y * e.factor.vertical);
          }
        }
        static rectBounce(t, e) {
          const i = t.getPosition(),
            o = t.getRadius(),
            s = l.calculateBounds(i, o),
            a = r(
              { min: s.left, max: s.right },
              { min: s.top, max: s.bottom },
              { min: e.left, max: e.right },
              { min: e.top, max: e.bottom },
              t.velocity.x,
              n.NumberUtils.getValue(t.options.bounce.horizontal)
            );
          a.bounced &&
            (void 0 !== a.velocity && (t.velocity.x = a.velocity),
            void 0 !== a.position && (t.position.x = a.position));
          const c = r(
            { min: s.top, max: s.bottom },
            { min: s.left, max: s.right },
            { min: e.top, max: e.bottom },
            { min: e.left, max: e.right },
            t.velocity.y,
            n.NumberUtils.getValue(t.options.bounce.vertical)
          );
          c.bounced &&
            (void 0 !== c.velocity && (t.velocity.y = c.velocity),
            void 0 !== c.position && (t.position.y = c.position));
        }
      }
      e.Utils = l;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.CircleWarp = void 0);
      const o = i(25),
        s = i(23);
      class n extends s.Circle {
        constructor(t, e, i, o) {
          super(t, e, i),
            (this.canvasSize = o),
            (this.canvasSize = { height: o.height, width: o.width });
        }
        contains(t) {
          if (super.contains(t)) return !0;
          const e = { x: t.x - this.canvasSize.width, y: t.y };
          if (super.contains(e)) return !0;
          const i = {
            x: t.x - this.canvasSize.width,
            y: t.y - this.canvasSize.height,
          };
          if (super.contains(i)) return !0;
          const o = { x: t.x, y: t.y - this.canvasSize.height };
          return super.contains(o);
        }
        intersects(t) {
          if (super.intersects(t)) return !0;
          const e = t,
            i = t,
            n = {
              x: t.position.x - this.canvasSize.width,
              y: t.position.y - this.canvasSize.height,
            };
          if (void 0 !== i.radius) {
            const t = new s.Circle(n.x, n.y, 2 * i.radius);
            return super.intersects(t);
          }
          if (void 0 !== e.size) {
            const t = new o.Rectangle(
              n.x,
              n.y,
              2 * e.size.width,
              2 * e.size.height
            );
            return super.intersects(t);
          }
          return !1;
        }
      }
      e.CircleWarp = n;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AnimationOptions = void 0);
      e.AnimationOptions = class {
        constructor() {
          (this.count = 0),
            (this.enable = !1),
            (this.speed = 1),
            (this.sync = !1);
        }
        load(t) {
          t &&
            (void 0 !== t.count && (this.count = t.count),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.sync && (this.sync = t.sync));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Shape = void 0);
      const o = i(1),
        s = i(0);
      e.Shape = class {
        constructor() {
          (this.options = {}), (this.type = o.ShapeType.circle);
        }
        get image() {
          var t;
          return null !== (t = this.options[o.ShapeType.image]) && void 0 !== t
            ? t
            : this.options[o.ShapeType.images];
        }
        set image(t) {
          (this.options[o.ShapeType.image] = t),
            (this.options[o.ShapeType.images] = t);
        }
        get custom() {
          return this.options;
        }
        set custom(t) {
          this.options = t;
        }
        get images() {
          return this.image instanceof Array ? this.image : [this.image];
        }
        set images(t) {
          this.image = t;
        }
        get stroke() {
          return [];
        }
        set stroke(t) {}
        get character() {
          var t;
          return null !== (t = this.options[o.ShapeType.character]) &&
            void 0 !== t
            ? t
            : this.options[o.ShapeType.char];
        }
        set character(t) {
          (this.options[o.ShapeType.character] = t),
            (this.options[o.ShapeType.char] = t);
        }
        get polygon() {
          var t;
          return null !== (t = this.options[o.ShapeType.polygon]) &&
            void 0 !== t
            ? t
            : this.options[o.ShapeType.star];
        }
        set polygon(t) {
          (this.options[o.ShapeType.polygon] = t),
            (this.options[o.ShapeType.star] = t);
        }
        load(t) {
          var e, i, n;
          if (void 0 === t) return;
          const r = null !== (e = t.options) && void 0 !== e ? e : t.custom;
          if (void 0 !== r)
            for (const t in r) {
              const e = r[t];
              void 0 !== e &&
                (this.options[t] = s.Utils.deepExtend(
                  null !== (i = this.options[t]) && void 0 !== i ? i : {},
                  e
                ));
            }
          this.loadShape(
            t.character,
            o.ShapeType.character,
            o.ShapeType.char,
            !0
          ),
            this.loadShape(
              t.polygon,
              o.ShapeType.polygon,
              o.ShapeType.star,
              !1
            ),
            this.loadShape(
              null !== (n = t.image) && void 0 !== n ? n : t.images,
              o.ShapeType.image,
              o.ShapeType.images,
              !0
            ),
            void 0 !== t.type && (this.type = t.type);
        }
        loadShape(t, e, i, o) {
          var n, r, a, l;
          void 0 !== t &&
            (t instanceof Array
              ? (this.options[e] instanceof Array ||
                  ((this.options[e] = []),
                  (this.options[i] && !o) || (this.options[i] = [])),
                (this.options[e] = s.Utils.deepExtend(
                  null !== (n = this.options[e]) && void 0 !== n ? n : [],
                  t
                )),
                (this.options[i] && !o) ||
                  (this.options[i] = s.Utils.deepExtend(
                    null !== (r = this.options[i]) && void 0 !== r ? r : [],
                    t
                  )))
              : (this.options[e] instanceof Array &&
                  ((this.options[e] = {}),
                  (this.options[i] && !o) || (this.options[i] = {})),
                (this.options[e] = s.Utils.deepExtend(
                  null !== (a = this.options[e]) && void 0 !== a ? a : {},
                  t
                )),
                (this.options[i] && !o) ||
                  (this.options[i] = s.Utils.deepExtend(
                    null !== (l = this.options[i]) && void 0 !== l ? l : {},
                    t
                  ))));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Bounce = void 0);
      const o = i(203);
      e.Bounce = class {
        constructor() {
          (this.horizontal = new o.BounceFactor()),
            (this.vertical = new o.BounceFactor());
        }
        load(t) {
          t &&
            (this.horizontal.load(t.horizontal),
            this.vertical.load(t.vertical));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PolygonDrawerBase = void 0);
      e.PolygonDrawerBase = class {
        getSidesCount(t) {
          var e, i;
          const o = t.shapeData;
          return null !==
            (i =
              null !== (e = null == o ? void 0 : o.sides) && void 0 !== e
                ? e
                : null == o
                ? void 0
                : o.nb_sides) && void 0 !== i
            ? i
            : 5;
        }
        draw(t, e, i) {
          const o = this.getCenter(e, i),
            s = this.getSidesData(e, i),
            n = s.count.numerator * s.count.denominator,
            r = s.count.numerator / s.count.denominator,
            a = (180 * (r - 2)) / r,
            l = Math.PI - (Math.PI * a) / 180;
          if (t) {
            t.beginPath(), t.translate(o.x, o.y), t.moveTo(0, 0);
            for (let e = 0; e < n; e++)
              t.lineTo(s.length, 0), t.translate(s.length, 0), t.rotate(l);
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      var o =
        (this && this.__awaiter) ||
        function (t, e, i, o) {
          return new (i || (i = Promise))(function (s, n) {
            function r(t) {
              try {
                l(o.next(t));
              } catch (t) {
                n(t);
              }
            }
            function a(t) {
              try {
                l(o.throw(t));
              } catch (t) {
                n(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(r, a);
            }
            l((o = o.apply(t, e || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Container = void 0);
      const s = i(243),
        n = i(244),
        r = i(263),
        a = i(264),
        l = i(41),
        c = i(0),
        u = i(7);
      e.Container = class {
        constructor(t, e, ...i) {
          (this.id = t),
            (this.fpsLimit = 60),
            (this.firstStart = !0),
            (this.started = !1),
            (this.destroyed = !1),
            (this.paused = !0),
            (this.lastFrameTime = 0),
            (this.pageHidden = !1),
            (this._sourceOptions = e),
            (this.retina = new r.Retina(this)),
            (this.canvas = new s.Canvas(this)),
            (this.particles = new n.Particles(this)),
            (this.drawer = new a.FrameManager(this)),
            (this.pathGenerator = {
              generate: () => {
                const t = u.Vector.create(0, 0);
                return (
                  (t.length = Math.random()),
                  (t.angle = Math.random() * Math.PI * 2),
                  t
                );
              },
              init: () => {},
              update: () => {},
            }),
            (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
            (this.bubble = {}),
            (this.repulse = { particles: [] }),
            (this.attract = { particles: [] }),
            (this.plugins = new Map()),
            (this.drawers = new Map()),
            (this.density = 1),
            (this._options = new l.Options()),
            (this.actualOptions = new l.Options());
          for (const t of i) this._options.load(c.Plugins.getPreset(t));
          const o = c.Plugins.getSupportedShapes();
          for (const t of o) {
            const e = c.Plugins.getShapeDrawer(t);
            e && this.drawers.set(t, e);
          }
          this._options && this._options.load(this._sourceOptions),
            (this.eventListeners = new c.EventListeners(this)),
            "undefined" != typeof IntersectionObserver &&
              IntersectionObserver &&
              (this.intersectionObserver = new IntersectionObserver((t) =>
                this.intersectionManager(t)
              ));
        }
        get options() {
          return this._options;
        }
        get sourceOptions() {
          return this._sourceOptions;
        }
        play(t) {
          const e = this.paused || t;
          if (!this.firstStart || this.actualOptions.autoPlay) {
            if ((this.paused && (this.paused = !1), e)) {
              for (const [, t] of this.plugins) t.play && t.play();
              this.lastFrameTime = performance.now();
            }
            this.draw();
          } else this.firstStart = !1;
        }
        pause() {
          if (
            (void 0 !== this.drawAnimationFrame &&
              (c.Utils.cancelAnimation(this.drawAnimationFrame),
              delete this.drawAnimationFrame),
            !this.paused)
          ) {
            for (const [, t] of this.plugins) t.pause && t.pause();
            this.pageHidden || (this.paused = !0);
          }
        }
        draw() {
          this.drawAnimationFrame = c.Utils.animate((t) =>
            this.drawer.nextFrame(t)
          );
        }
        getAnimationStatus() {
          return !this.paused;
        }
        setNoise(t, e, i) {
          this.setPath(t, e, i);
        }
        setPath(t, e, i) {
          t &&
            ("function" == typeof t
              ? ((this.pathGenerator.generate = t),
                e && (this.pathGenerator.init = e),
                i && (this.pathGenerator.update = i))
              : (t.generate && (this.pathGenerator.generate = t.generate),
                t.init && (this.pathGenerator.init = t.init),
                t.update && (this.pathGenerator.update = t.update)));
        }
        destroy() {
          this.stop(), this.canvas.destroy();
          for (const [, t] of this.drawers) t.destroy && t.destroy(this);
          for (const t of this.drawers.keys()) this.drawers.delete(t);
          this.destroyed = !0;
        }
        exportImg(t) {
          this.exportImage(t);
        }
        exportImage(t, e, i) {
          var o;
          return null === (o = this.canvas.element) || void 0 === o
            ? void 0
            : o.toBlob(t, null != e ? e : "image/png", i);
        }
        exportConfiguration() {
          return JSON.stringify(this.actualOptions, void 0, 2);
        }
        refresh() {
          return this.stop(), this.start();
        }
        reset() {
          return (this._options = new l.Options()), this.refresh();
        }
        stop() {
          if (this.started) {
            (this.firstStart = !0),
              (this.started = !1),
              this.eventListeners.removeListeners(),
              this.pause(),
              this.particles.clear(),
              this.canvas.clear(),
              this.interactivity.element instanceof HTMLElement &&
                this.intersectionObserver &&
                this.intersectionObserver.observe(this.interactivity.element);
            for (const [, t] of this.plugins) t.stop && t.stop();
            for (const t of this.plugins.keys()) this.plugins.delete(t);
            (this.particles.linksColors = new Map()),
              delete this.particles.grabLineColor,
              delete this.particles.linksColor;
          }
        }
        loadTheme(t) {
          return o(this, void 0, void 0, function* () {
            (this.currentTheme = t), yield this.refresh();
          });
        }
        start() {
          return o(this, void 0, void 0, function* () {
            if (!this.started) {
              yield this.init(),
                (this.started = !0),
                this.eventListeners.addListeners(),
                this.interactivity.element instanceof HTMLElement &&
                  this.intersectionObserver &&
                  this.intersectionObserver.observe(this.interactivity.element);
              for (const [, t] of this.plugins)
                void 0 !== t.startAsync
                  ? yield t.startAsync()
                  : void 0 !== t.start && t.start();
              this.play();
            }
          });
        }
        addClickHandler(t) {
          const e = this.interactivity.element;
          if (!e) return;
          const i = (e, i) => {
            if (this.destroyed) return;
            const o = this.retina.pixelRatio,
              s = { x: i.x * o, y: i.y * o },
              n = this.particles.quadTree.queryCircle(s, this.retina.sizeValue);
            t(e, n);
          };
          let o = !1,
            s = !1;
          e.addEventListener("click", (t) => {
            if (this.destroyed) return;
            const e = t,
              o = { x: e.offsetX || e.clientX, y: e.offsetY || e.clientY };
            i(t, o);
          }),
            e.addEventListener("touchstart", () => {
              this.destroyed || ((o = !0), (s = !1));
            }),
            e.addEventListener("touchmove", () => {
              this.destroyed || (s = !0);
            }),
            e.addEventListener("touchend", (t) => {
              var e, n, r;
              if (!this.destroyed) {
                if (o && !s) {
                  const o = t,
                    s = o.touches[o.touches.length - 1],
                    a =
                      null === (e = this.canvas.element) || void 0 === e
                        ? void 0
                        : e.getBoundingClientRect(),
                    l = {
                      x:
                        s.clientX -
                        (null !== (n = null == a ? void 0 : a.left) &&
                        void 0 !== n
                          ? n
                          : 0),
                      y:
                        s.clientY -
                        (null !== (r = null == a ? void 0 : a.top) &&
                        void 0 !== r
                          ? r
                          : 0),
                    };
                  i(t, l);
                }
                (o = !1), (s = !1);
              }
            }),
            e.addEventListener("touchcancel", () => {
              this.destroyed || ((o = !1), (s = !1));
            });
        }
        init() {
          return o(this, void 0, void 0, function* () {
            (this.actualOptions = new l.Options()),
              this.actualOptions.load(this._options),
              this.retina.init(),
              this.canvas.init(),
              this.actualOptions.setResponsive(
                this.canvas.size.width,
                this.retina.pixelRatio,
                this._options
              ),
              this.actualOptions.setTheme(this.currentTheme),
              (this.fpsLimit =
                this.actualOptions.fpsLimit > 0
                  ? this.actualOptions.fpsLimit
                  : 60);
            const t = c.Plugins.getAvailablePlugins(this);
            for (const [e, i] of t) this.plugins.set(e, i);
            for (const [, t] of this.drawers) t.init && (yield t.init(this));
            for (const [, t] of this.plugins)
              t.init
                ? t.init(this.actualOptions)
                : void 0 !== t.initAsync &&
                  (yield t.initAsync(this.actualOptions));
            this.canvas.initBackground(),
              this.canvas.resize(),
              this.particles.init(),
              this.particles.setDensity();
          });
        }
        intersectionManager(t) {
          if (this.actualOptions.pauseOnOutsideViewport)
            for (const e of t)
              e.target === this.interactivity.element &&
                (e.isIntersecting ? this.play() : this.pause());
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Absorber = void 0);
      const o = i(268),
        s = i(2);
      e.Absorber = class {
        constructor() {
          (this.color = new s.OptionsColor()),
            (this.color.value = "#000000"),
            (this.draggable = !1),
            (this.opacity = 1),
            (this.destroy = !0),
            (this.orbits = !1),
            (this.size = new o.AbsorberSize());
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = s.OptionsColor.create(this.color, t.color)),
            void 0 !== t.draggable && (this.draggable = t.draggable),
            (this.name = t.name),
            void 0 !== t.opacity && (this.opacity = t.opacity),
            void 0 !== t.position &&
              (this.position = { x: t.position.x, y: t.position.y }),
            void 0 !== t.size && this.size.load(t.size),
            void 0 !== t.destroy && (this.destroy = t.destroy),
            void 0 !== t.orbits && (this.orbits = t.orbits));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EmitterSize = void 0);
      const o = i(1);
      e.EmitterSize = class {
        constructor() {
          (this.mode = o.SizeMode.percent), (this.height = 0), (this.width = 0);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.height && (this.height = t.height),
            void 0 !== t.width && (this.width = t.width));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Emitter = void 0);
      const o = i(273),
        s = i(274),
        n = i(0),
        r = i(54),
        a = i(27);
      e.Emitter = class {
        constructor() {
          (this.autoPlay = !0),
            (this.life = new s.EmitterLife()),
            (this.rate = new o.EmitterRate());
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
            void 0 !== t.size &&
              (void 0 === this.size && (this.size = new r.EmitterSize()),
              this.size.load(t.size)),
            void 0 !== t.direction && (this.direction = t.direction),
            this.life.load(t.life),
            (this.name = t.name),
            void 0 !== t.particles &&
              (this.particles = n.Utils.deepExtend({}, t.particles)),
            this.rate.load(t.rate),
            void 0 !== t.position &&
              (this.position = { x: t.position.x, y: t.position.y }),
            void 0 !== t.spawnColor &&
              (void 0 === this.spawnColor &&
                (this.spawnColor = new a.AnimatableColor()),
              this.spawnColor.load(t.spawnColor)));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PolygonMask = void 0);
      const o = i(5),
        s = i(281),
        n = i(283),
        r = i(284),
        a = i(285),
        l = i(0);
      e.PolygonMask = class {
        constructor() {
          (this.draw = new s.Draw()),
            (this.enable = !1),
            (this.inline = new r.Inline()),
            (this.move = new n.Move()),
            (this.scale = 1),
            (this.type = o.Type.none);
        }
        get inlineArrangement() {
          return this.inline.arrangement;
        }
        set inlineArrangement(t) {
          this.inline.arrangement = t;
        }
        load(t) {
          var e;
          if (void 0 !== t) {
            this.draw.load(t.draw);
            const i =
              null !== (e = t.inline) && void 0 !== e
                ? e
                : { arrangement: t.inlineArrangement };
            void 0 !== i && this.inline.load(i),
              this.move.load(t.move),
              void 0 !== t.scale && (this.scale = t.scale),
              void 0 !== t.type && (this.type = t.type),
              void 0 !== t.enable
                ? (this.enable = t.enable)
                : (this.enable = this.type !== o.Type.none),
              void 0 !== t.url && (this.url = t.url),
              void 0 !== t.data &&
                ("string" == typeof t.data
                  ? (this.data = t.data)
                  : ((this.data = new a.LocalSvg()), this.data.load(t.data))),
              void 0 !== t.position &&
                (this.position = l.Utils.deepExtend({}, t.position));
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          },
        n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Particles = void 0);
      var r = n(i(58));
      (e.Particles = r.default),
        s(i(1), e),
        s(i(9), e),
        s(i(10), e),
        s(i(5), e),
        (e.default = r.default);
    },
    function (t, e, i) {
      "use strict";
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function s(t, e) {
        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function n(t, e, i) {
        return (n =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, i) {
                var o = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = u(t));

                  );
                  return t;
                })(t, e);
                if (o) {
                  var s = Object.getOwnPropertyDescriptor(o, e);
                  return s.get ? s.get.call(i) : s.value;
                }
              })(t, e, i || t);
      }
      function r(t, e) {
        return (r =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function a(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var i,
            o = u(t);
          if (e) {
            var s = u(this).constructor;
            i = Reflect.construct(o, arguments, s);
          } else i = o.apply(this, arguments);
          return l(this, i);
        };
      }
      function l(t, e) {
        return !e || ("object" !== o(e) && "function" != typeof e) ? c(t) : e;
      }
      function c(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function u(t) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var d =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        h =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: e,
                });
              }
            : function (t, e) {
                t.default = e;
              }),
        v =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var i in t)
                "default" !== i &&
                  Object.prototype.hasOwnProperty.call(t, i) &&
                  d(e, t, i);
            return h(e, t), e;
          },
        p =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var f = v(i(29)),
        y = i(29),
        b = p(i(59)),
        m = i(41),
        g = i(28),
        w = i(293),
        M = i(28),
        _ = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && r(t, e);
          })(d, t);
          var e,
            i,
            o,
            l = a(d);
          function d(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, d),
              ((e = l.call(this, t)).state = {
                canvas: void 0,
                library: void 0,
              }),
              (e.loadCanvas = e.loadCanvas.bind(c(e))),
              e
            );
          }
          return (
            (e = d),
            (i = [
              {
                key: "buildParticlesLibrary",
                value: function (t, e) {
                  try {
                    if (void 0 === window) return null;
                  } catch (t) {
                    return null;
                  }
                  M.tsParticles.init();
                  var i = new m.Options();
                  i.load(w.defaultParams), i.load(e);
                  var o = new g.Container(t, i);
                  return (
                    this.props.particlesRef &&
                      (this.props.particlesRef.current = o),
                    o
                  );
                },
              },
              {
                key: "refresh",
                value: function (t) {
                  var e = this,
                    i = this.state.canvas;
                  i &&
                    (this.destroy(),
                    this.setState(
                      { library: this.buildParticlesLibrary(t.id, t.params) },
                      function () {
                        e.loadCanvas(i);
                      }
                    ));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.state.library && this.state.library.destroy();
                },
              },
              {
                key: "loadCanvas",
                value: function (t) {
                  var e = this;
                  t &&
                    this.setState({ canvas: t }, function () {
                      var i = e.state.library;
                      i && (i.canvas.loadCanvas(t), i.start());
                    });
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (t) {
                  return !b.default(t, this.props);
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.refresh(this.props);
                },
              },
              {
                key: "forceUpdate",
                value: function () {
                  this.refresh(this.props),
                    n(u(d.prototype), "forceUpdate", this).call(this);
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.setState({
                    library: this.buildParticlesLibrary(
                      this.props.id,
                      this.props.params
                    ),
                  });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.destroy(), this.setState({ library: void 0 });
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.width,
                    i = t.height,
                    o = t.className,
                    s = t.canvasClassName,
                    n = t.id;
                  return f.createElement(
                    "div",
                    { className: o, id: n },
                    f.createElement("canvas", {
                      ref: this.loadCanvas,
                      className: s,
                      style: Object.assign(
                        Object.assign({}, this.props.style),
                        { width: e, height: i }
                      ),
                    })
                  );
                },
              },
            ]) && s(e.prototype, i),
            o && s(e, o),
            d
          );
        })(y.Component);
      (e.default = _),
        (_.defaultProps = {
          width: "100%",
          height: "100%",
          params: w.defaultParams,
          style: {},
          id: "tsparticles",
        });
    },
    function (t, e, i) {
      var o = i(60);
      t.exports = function (t, e) {
        return o(t, e);
      };
    },
    function (t, e, i) {
      var o = i(61),
        s = i(16);
      t.exports = function t(e, i, n, r, a) {
        return (
          e === i ||
          (null == e || null == i || (!s(e) && !s(i))
            ? e != e && i != i
            : o(e, i, n, r, t, a))
        );
      };
    },
    function (t, e, i) {
      var o = i(62),
        s = i(36),
        n = i(97),
        r = i(101),
        a = i(123),
        l = i(20),
        c = i(37),
        u = i(39),
        d = "[object Object]",
        h = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, i, v, p, f) {
        var y = l(t),
          b = l(e),
          m = y ? "[object Array]" : a(t),
          g = b ? "[object Array]" : a(e),
          w = (m = "[object Arguments]" == m ? d : m) == d,
          M = (g = "[object Arguments]" == g ? d : g) == d,
          _ = m == g;
        if (_ && c(t)) {
          if (!c(e)) return !1;
          (y = !0), (w = !1);
        }
        if (_ && !w)
          return (
            f || (f = new o()),
            y || u(t) ? s(t, e, i, v, p, f) : n(t, e, m, i, v, p, f)
          );
        if (!(1 & i)) {
          var P = w && h.call(t, "__wrapped__"),
            x = M && h.call(e, "__wrapped__");
          if (P || x) {
            var O = P ? t.value() : t,
              C = x ? e.value() : e;
            return f || (f = new o()), p(O, C, i, v, f);
          }
        }
        return !!_ && (f || (f = new o()), r(t, e, i, v, p, f));
      };
    },
    function (t, e, i) {
      var o = i(11),
        s = i(68),
        n = i(69),
        r = i(70),
        a = i(71),
        l = i(72);
      function c(t) {
        var e = (this.__data__ = new o(t));
        this.size = e.size;
      }
      (c.prototype.clear = s),
        (c.prototype.delete = n),
        (c.prototype.get = r),
        (c.prototype.has = a),
        (c.prototype.set = l),
        (t.exports = c);
    },
    function (t, e) {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function (t, e, i) {
      var o = i(12),
        s = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          i = o(e, t);
        return (
          !(i < 0) &&
          (i == e.length - 1 ? e.pop() : s.call(e, i, 1), --this.size, !0)
        );
      };
    },
    function (t, e, i) {
      var o = i(12);
      t.exports = function (t) {
        var e = this.__data__,
          i = o(e, t);
        return i < 0 ? void 0 : e[i][1];
      };
    },
    function (t, e, i) {
      var o = i(12);
      t.exports = function (t) {
        return o(this.__data__, t) > -1;
      };
    },
    function (t, e, i) {
      var o = i(12);
      t.exports = function (t, e) {
        var i = this.__data__,
          s = o(i, t);
        return s < 0 ? (++this.size, i.push([t, e])) : (i[s][1] = e), this;
      };
    },
    function (t, e, i) {
      var o = i(11);
      t.exports = function () {
        (this.__data__ = new o()), (this.size = 0);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = this.__data__,
          i = e.delete(t);
        return (this.size = e.size), i;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    function (t, e, i) {
      var o = i(11),
        s = i(18),
        n = i(35);
      t.exports = function (t, e) {
        var i = this.__data__;
        if (i instanceof o) {
          var r = i.__data__;
          if (!s || r.length < 199)
            return r.push([t, e]), (this.size = ++i.size), this;
          i = this.__data__ = new n(r);
        }
        return i.set(t, e), (this.size = i.size), this;
      };
    },
    function (t, e, i) {
      var o = i(31),
        s = i(77),
        n = i(33),
        r = i(34),
        a = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        c = Object.prototype,
        u = l.toString,
        d = c.hasOwnProperty,
        h = RegExp(
          "^" +
            u
              .call(d)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function (t) {
        return !(!n(t) || s(t)) && (o(t) ? h : a).test(r(t));
      };
    },
    function (t, e) {
      var i;
      i = (function () {
        return this;
      })();
      try {
        i = i || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (i = window);
      }
      t.exports = i;
    },
    function (t, e, i) {
      var o = i(19),
        s = Object.prototype,
        n = s.hasOwnProperty,
        r = s.toString,
        a = o ? o.toStringTag : void 0;
      t.exports = function (t) {
        var e = n.call(t, a),
          i = t[a];
        try {
          t[a] = void 0;
          var o = !0;
        } catch (t) {}
        var s = r.call(t);
        return o && (e ? (t[a] = i) : delete t[a]), s;
      };
    },
    function (t, e) {
      var i = Object.prototype.toString;
      t.exports = function (t) {
        return i.call(t);
      };
    },
    function (t, e, i) {
      var o,
        s = i(78),
        n = (o = /[^.]+$/.exec((s && s.keys && s.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + o
          : "";
      t.exports = function (t) {
        return !!n && n in t;
      };
    },
    function (t, e, i) {
      var o = i(4)["__core-js_shared__"];
      t.exports = o;
    },
    function (t, e) {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    function (t, e, i) {
      var o = i(81),
        s = i(11),
        n = i(18);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new o(),
            map: new (n || s)(),
            string: new o(),
          });
      };
    },
    function (t, e, i) {
      var o = i(82),
        s = i(83),
        n = i(84),
        r = i(85),
        a = i(86);
      function l(t) {
        var e = -1,
          i = null == t ? 0 : t.length;
        for (this.clear(); ++e < i; ) {
          var o = t[e];
          this.set(o[0], o[1]);
        }
      }
      (l.prototype.clear = o),
        (l.prototype.delete = s),
        (l.prototype.get = n),
        (l.prototype.has = r),
        (l.prototype.set = a),
        (t.exports = l);
    },
    function (t, e, i) {
      var o = i(14);
      t.exports = function () {
        (this.__data__ = o ? o(null) : {}), (this.size = 0);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function (t, e, i) {
      var o = i(14),
        s = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (o) {
          var i = e[t];
          return "__lodash_hash_undefined__" === i ? void 0 : i;
        }
        return s.call(e, t) ? e[t] : void 0;
      };
    },
    function (t, e, i) {
      var o = i(14),
        s = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return o ? void 0 !== e[t] : s.call(e, t);
      };
    },
    function (t, e, i) {
      var o = i(14);
      t.exports = function (t, e) {
        var i = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (i[t] = o && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
    },
    function (t, e, i) {
      var o = i(15);
      t.exports = function (t) {
        var e = o(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    function (t, e, i) {
      var o = i(15);
      t.exports = function (t) {
        return o(this, t).get(t);
      };
    },
    function (t, e, i) {
      var o = i(15);
      t.exports = function (t) {
        return o(this, t).has(t);
      };
    },
    function (t, e, i) {
      var o = i(15);
      t.exports = function (t, e) {
        var i = o(this, t),
          s = i.size;
        return i.set(t, e), (this.size += i.size == s ? 0 : 1), this;
      };
    },
    function (t, e, i) {
      var o = i(35),
        s = i(93),
        n = i(94);
      function r(t) {
        var e = -1,
          i = null == t ? 0 : t.length;
        for (this.__data__ = new o(); ++e < i; ) this.add(t[e]);
      }
      (r.prototype.add = r.prototype.push = s),
        (r.prototype.has = n),
        (t.exports = r);
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var i = -1, o = null == t ? 0 : t.length; ++i < o; )
          if (e(t[i], i, t)) return !0;
        return !1;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return t.has(e);
      };
    },
    function (t, e, i) {
      var o = i(19),
        s = i(98),
        n = i(30),
        r = i(36),
        a = i(99),
        l = i(100),
        c = o ? o.prototype : void 0,
        u = c ? c.valueOf : void 0;
      t.exports = function (t, e, i, o, c, d, h) {
        switch (i) {
          case "[object DataView]":
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            (t = t.buffer), (e = e.buffer);
          case "[object ArrayBuffer]":
            return !(t.byteLength != e.byteLength || !d(new s(t), new s(e)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return n(+t, +e);
          case "[object Error]":
            return t.name == e.name && t.message == e.message;
          case "[object RegExp]":
          case "[object String]":
            return t == e + "";
          case "[object Map]":
            var v = a;
          case "[object Set]":
            var p = 1 & o;
            if ((v || (v = l), t.size != e.size && !p)) return !1;
            var f = h.get(t);
            if (f) return f == e;
            (o |= 2), h.set(t, e);
            var y = r(v(t), v(e), o, c, d, h);
            return h.delete(t), y;
          case "[object Symbol]":
            if (u) return u.call(t) == u.call(e);
        }
        return !1;
      };
    },
    function (t, e, i) {
      var o = i(4).Uint8Array;
      t.exports = o;
    },
    function (t, e) {
      t.exports = function (t) {
        var e = -1,
          i = Array(t.size);
        return (
          t.forEach(function (t, o) {
            i[++e] = [o, t];
          }),
          i
        );
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = -1,
          i = Array(t.size);
        return (
          t.forEach(function (t) {
            i[++e] = t;
          }),
          i
        );
      };
    },
    function (t, e, i) {
      var o = i(102),
        s = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, i, n, r, a) {
        var l = 1 & i,
          c = o(t),
          u = c.length;
        if (u != o(e).length && !l) return !1;
        for (var d = u; d--; ) {
          var h = c[d];
          if (!(l ? h in e : s.call(e, h))) return !1;
        }
        var v = a.get(t);
        if (v && a.get(e)) return v == e;
        var p = !0;
        a.set(t, e), a.set(e, t);
        for (var f = l; ++d < u; ) {
          var y = t[(h = c[d])],
            b = e[h];
          if (n) var m = l ? n(b, y, h, e, t, a) : n(y, b, h, t, e, a);
          if (!(void 0 === m ? y === b || r(y, b, i, n, a) : m)) {
            p = !1;
            break;
          }
          f || (f = "constructor" == h);
        }
        if (p && !f) {
          var g = t.constructor,
            w = e.constructor;
          g == w ||
            !("constructor" in t) ||
            !("constructor" in e) ||
            ("function" == typeof g &&
              g instanceof g &&
              "function" == typeof w &&
              w instanceof w) ||
            (p = !1);
        }
        return a.delete(t), a.delete(e), p;
      };
    },
    function (t, e, i) {
      var o = i(103),
        s = i(105),
        n = i(108);
      t.exports = function (t) {
        return o(t, n, s);
      };
    },
    function (t, e, i) {
      var o = i(104),
        s = i(20);
      t.exports = function (t, e, i) {
        var n = e(t);
        return s(t) ? n : o(n, i(t));
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var i = -1, o = e.length, s = t.length; ++i < o; ) t[s + i] = e[i];
        return t;
      };
    },
    function (t, e, i) {
      var o = i(106),
        s = i(107),
        n = Object.prototype.propertyIsEnumerable,
        r = Object.getOwnPropertySymbols,
        a = r
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  o(r(t), function (e) {
                    return n.call(t, e);
                  }));
            }
          : s;
      t.exports = a;
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (
          var i = -1, o = null == t ? 0 : t.length, s = 0, n = [];
          ++i < o;

        ) {
          var r = t[i];
          e(r, i, t) && (n[s++] = r);
        }
        return n;
      };
    },
    function (t, e) {
      t.exports = function () {
        return [];
      };
    },
    function (t, e, i) {
      var o = i(109),
        s = i(118),
        n = i(122);
      t.exports = function (t) {
        return n(t) ? o(t) : s(t);
      };
    },
    function (t, e, i) {
      var o = i(110),
        s = i(111),
        n = i(20),
        r = i(37),
        a = i(114),
        l = i(39),
        c = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var i = n(t),
          u = !i && s(t),
          d = !i && !u && r(t),
          h = !i && !u && !d && l(t),
          v = i || u || d || h,
          p = v ? o(t.length, String) : [],
          f = p.length;
        for (var y in t)
          (!e && !c.call(t, y)) ||
            (v &&
              ("length" == y ||
                (d && ("offset" == y || "parent" == y)) ||
                (h &&
                  ("buffer" == y || "byteLength" == y || "byteOffset" == y)) ||
                a(y, f))) ||
            p.push(y);
        return p;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var i = -1, o = Array(t); ++i < t; ) o[i] = e(i);
        return o;
      };
    },
    function (t, e, i) {
      var o = i(112),
        s = i(16),
        n = Object.prototype,
        r = n.hasOwnProperty,
        a = n.propertyIsEnumerable,
        l = o(
          (function () {
            return arguments;
          })()
        )
          ? o
          : function (t) {
              return s(t) && r.call(t, "callee") && !a.call(t, "callee");
            };
      t.exports = l;
    },
    function (t, e, i) {
      var o = i(13),
        s = i(16);
      t.exports = function (t) {
        return s(t) && "[object Arguments]" == o(t);
      };
    },
    function (t, e) {
      t.exports = function () {
        return !1;
      };
    },
    function (t, e) {
      var i = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, e) {
        var o = typeof t;
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ("number" == o || ("symbol" != o && i.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      };
    },
    function (t, e, i) {
      var o = i(13),
        s = i(40),
        n = i(16),
        r = {};
      (r["[object Float32Array]"] =
        r["[object Float64Array]"] =
        r["[object Int8Array]"] =
        r["[object Int16Array]"] =
        r["[object Int32Array]"] =
        r["[object Uint8Array]"] =
        r["[object Uint8ClampedArray]"] =
        r["[object Uint16Array]"] =
        r["[object Uint32Array]"] =
          !0),
        (r["[object Arguments]"] =
          r["[object Array]"] =
          r["[object ArrayBuffer]"] =
          r["[object Boolean]"] =
          r["[object DataView]"] =
          r["[object Date]"] =
          r["[object Error]"] =
          r["[object Function]"] =
          r["[object Map]"] =
          r["[object Number]"] =
          r["[object Object]"] =
          r["[object RegExp]"] =
          r["[object Set]"] =
          r["[object String]"] =
          r["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return n(t) && s(t.length) && !!r[o(t)];
        });
    },
    function (t, e) {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    function (t, e, i) {
      (function (t) {
        var o = i(32),
          s = e && !e.nodeType && e,
          n = s && "object" == typeof t && t && !t.nodeType && t,
          r = n && n.exports === s && o.process,
          a = (function () {
            try {
              var t = n && n.require && n.require("util").types;
              return t || (r && r.binding && r.binding("util"));
            } catch (t) {}
          })();
        t.exports = a;
      }).call(this, i(38)(t));
    },
    function (t, e, i) {
      var o = i(119),
        s = i(120),
        n = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!o(t)) return s(t);
        var e = [];
        for (var i in Object(t))
          n.call(t, i) && "constructor" != i && e.push(i);
        return e;
      };
    },
    function (t, e) {
      var i = Object.prototype;
      t.exports = function (t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || i);
      };
    },
    function (t, e, i) {
      var o = i(121)(Object.keys, Object);
      t.exports = o;
    },
    function (t, e) {
      t.exports = function (t, e) {
        return function (i) {
          return t(e(i));
        };
      };
    },
    function (t, e, i) {
      var o = i(31),
        s = i(40);
      t.exports = function (t) {
        return null != t && s(t.length) && !o(t);
      };
    },
    function (t, e, i) {
      var o = i(124),
        s = i(18),
        n = i(125),
        r = i(126),
        a = i(127),
        l = i(13),
        c = i(34),
        u = c(o),
        d = c(s),
        h = c(n),
        v = c(r),
        p = c(a),
        f = l;
      ((o && "[object DataView]" != f(new o(new ArrayBuffer(1)))) ||
        (s && "[object Map]" != f(new s())) ||
        (n && "[object Promise]" != f(n.resolve())) ||
        (r && "[object Set]" != f(new r())) ||
        (a && "[object WeakMap]" != f(new a()))) &&
        (f = function (t) {
          var e = l(t),
            i = "[object Object]" == e ? t.constructor : void 0,
            o = i ? c(i) : "";
          if (o)
            switch (o) {
              case u:
                return "[object DataView]";
              case d:
                return "[object Map]";
              case h:
                return "[object Promise]";
              case v:
                return "[object Set]";
              case p:
                return "[object WeakMap]";
            }
          return e;
        }),
        (t.exports = f);
    },
    function (t, e, i) {
      var o = i(8)(i(4), "DataView");
      t.exports = o;
    },
    function (t, e, i) {
      var o = i(8)(i(4), "Promise");
      t.exports = o;
    },
    function (t, e, i) {
      var o = i(8)(i(4), "Set");
      t.exports = o;
    },
    function (t, e, i) {
      var o = i(8)(i(4), "WeakMap");
      t.exports = o;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Interactivity = void 0);
      const o = i(1),
        s = i(149),
        n = i(154);
      e.Interactivity = class {
        constructor() {
          (this.detectsOn = o.InteractivityDetect.canvas),
            (this.events = new s.Events()),
            (this.modes = new n.Modes());
        }
        get detect_on() {
          return this.detectsOn;
        }
        set detect_on(t) {
          this.detectsOn = t;
        }
        load(t) {
          var e, i, s;
          if (void 0 === t) return;
          const n =
            null !== (e = t.detectsOn) && void 0 !== e ? e : t.detect_on;
          void 0 !== n && (this.detectsOn = n),
            this.events.load(t.events),
            this.modes.load(t.modes),
            !0 ===
              (null ===
                (s =
                  null === (i = t.modes) || void 0 === i ? void 0 : i.slow) ||
              void 0 === s
                ? void 0
                : s.active) &&
              (this.events.onHover.mode instanceof Array
                ? this.events.onHover.mode.indexOf(o.HoverMode.slow) < 0 &&
                  this.events.onHover.mode.push(o.HoverMode.slow)
                : this.events.onHover.mode !== o.HoverMode.slow &&
                  (this.events.onHover.mode = [
                    this.events.onHover.mode,
                    o.HoverMode.slow,
                  ]));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        s(i(130), e),
        s(i(131), e),
        s(i(21), e),
        s(i(132), e);
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.MoveDirection = void 0),
        (function (t) {
          (t.bottom = "bottom"),
            (t.bottomLeft = "bottom-left"),
            (t.bottomRight = "bottom-right"),
            (t.left = "left"),
            (t.none = "none"),
            (t.right = "right"),
            (t.top = "top"),
            (t.topLeft = "top-left"),
            (t.topRight = "top-right");
        })(e.MoveDirection || (e.MoveDirection = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RotateDirection = void 0),
        (function (t) {
          (t.clockwise = "clockwise"),
            (t.counterClockwise = "counter-clockwise"),
            (t.random = "random");
        })(e.RotateDirection || (e.RotateDirection = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TiltDirection = void 0),
        (function (t) {
          (t.clockwise = "clockwise"),
            (t.counterClockwise = "counter-clockwise"),
            (t.random = "random");
        })(e.TiltDirection || (e.TiltDirection = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ClickMode = void 0),
        (function (t) {
          (t.attract = "attract"),
            (t.bubble = "bubble"),
            (t.push = "push"),
            (t.remove = "remove"),
            (t.repulse = "repulse"),
            (t.pause = "pause"),
            (t.trail = "trail");
        })(e.ClickMode || (e.ClickMode = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DestroyMode = void 0),
        (function (t) {
          (t.none = "none"), (t.split = "split");
        })(e.DestroyMode || (e.DestroyMode = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DivMode = void 0),
        (function (t) {
          (t.bounce = "bounce"), (t.bubble = "bubble"), (t.repulse = "repulse");
        })(e.DivMode || (e.DivMode = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HoverMode = void 0),
        (function (t) {
          (t.attract = "attract"),
            (t.bounce = "bounce"),
            (t.bubble = "bubble"),
            (t.connect = "connect"),
            (t.grab = "grab"),
            (t.light = "light"),
            (t.repulse = "repulse"),
            (t.slow = "slow"),
            (t.trail = "trail");
        })(e.HoverMode || (e.HoverMode = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.CollisionMode = void 0),
        (function (t) {
          (t.absorb = "absorb"), (t.bounce = "bounce"), (t.destroy = "destroy");
        })(e.CollisionMode || (e.CollisionMode = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.OutMode = void 0),
        (function (t) {
          (t.bounce = "bounce"),
            (t.bounceHorizontal = "bounce-horizontal"),
            (t.bounceVertical = "bounce-vertical"),
            (t.none = "none"),
            (t.out = "out"),
            (t.destroy = "destroy"),
            (t.split = "split");
        })(e.OutMode || (e.OutMode = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SizeMode = void 0),
        (function (t) {
          (t.precise = "precise"), (t.percent = "percent");
        })(e.SizeMode || (e.SizeMode = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ThemeMode = void 0),
        (function (t) {
          (t.any = "any"), (t.dark = "dark"), (t.light = "light");
        })(e.ThemeMode || (e.ThemeMode = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AnimationStatus = void 0),
        (function (t) {
          (t[(t.increasing = 0)] = "increasing"),
            (t[(t.decreasing = 1)] = "decreasing");
        })(e.AnimationStatus || (e.AnimationStatus = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DestroyType = void 0),
        (function (t) {
          (t.none = "none"), (t.max = "max"), (t.min = "min");
        })(e.DestroyType || (e.DestroyType = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ProcessBubbleType = void 0),
        (function (t) {
          (t.color = "color"), (t.opacity = "opacity"), (t.size = "size");
        })(e.ProcessBubbleType || (e.ProcessBubbleType = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ShapeType = void 0),
        (function (t) {
          (t.char = "char"),
            (t.character = "character"),
            (t.circle = "circle"),
            (t.edge = "edge"),
            (t.image = "image"),
            (t.images = "images"),
            (t.line = "line"),
            (t.polygon = "polygon"),
            (t.square = "square"),
            (t.star = "star"),
            (t.triangle = "triangle");
        })(e.ShapeType || (e.ShapeType = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.StartValueType = void 0),
        (function (t) {
          (t.max = "max"), (t.min = "min"), (t.random = "random");
        })(e.StartValueType || (e.StartValueType = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DivType = void 0),
        (function (t) {
          (t.circle = "circle"), (t.rectangle = "rectangle");
        })(e.DivType || (e.DivType = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EasingType = void 0),
        (function (t) {
          (t.easeOutBack = "ease-out-back"),
            (t.easeOutCirc = "ease-out-circ"),
            (t.easeOutCubic = "ease-out-cubic"),
            (t.easeOutQuad = "ease-out-quad"),
            (t.easeOutQuart = "ease-out-quart"),
            (t.easeOutQuint = "ease-out-quint"),
            (t.easeOutExpo = "ease-out-expo"),
            (t.easeOutSine = "ease-out-sine");
        })(e.EasingType || (e.EasingType = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.InteractivityDetect = void 0),
        (function (t) {
          (t.canvas = "canvas"), (t.parent = "parent"), (t.window = "window");
        })(e.InteractivityDetect || (e.InteractivityDetect = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Events = void 0);
      const o = i(150),
        s = i(151),
        n = i(152);
      e.Events = class {
        constructor() {
          (this.onClick = new o.ClickEvent()),
            (this.onDiv = new s.DivEvent()),
            (this.onHover = new n.HoverEvent()),
            (this.resize = !0);
        }
        get onclick() {
          return this.onClick;
        }
        set onclick(t) {
          this.onClick = t;
        }
        get ondiv() {
          return this.onDiv;
        }
        set ondiv(t) {
          this.onDiv = t;
        }
        get onhover() {
          return this.onHover;
        }
        set onhover(t) {
          this.onHover = t;
        }
        load(t) {
          var e, i, o;
          if (void 0 === t) return;
          this.onClick.load(
            null !== (e = t.onClick) && void 0 !== e ? e : t.onclick
          );
          const n = null !== (i = t.onDiv) && void 0 !== i ? i : t.ondiv;
          void 0 !== n &&
            (n instanceof Array
              ? (this.onDiv = n.map((t) => {
                  const e = new s.DivEvent();
                  return e.load(t), e;
                }))
              : ((this.onDiv = new s.DivEvent()), this.onDiv.load(n))),
            this.onHover.load(
              null !== (o = t.onHover) && void 0 !== o ? o : t.onhover
            ),
            void 0 !== t.resize && (this.resize = t.resize);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ClickEvent = void 0);
      e.ClickEvent = class {
        constructor() {
          (this.enable = !1), (this.mode = []);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DivEvent = void 0);
      const o = i(1);
      e.DivEvent = class {
        constructor() {
          (this.selectors = []),
            (this.enable = !1),
            (this.mode = []),
            (this.type = o.DivType.circle);
        }
        get elementId() {
          return this.ids;
        }
        set elementId(t) {
          this.ids = t;
        }
        get el() {
          return this.elementId;
        }
        set el(t) {
          this.elementId = t;
        }
        get ids() {
          return this.selectors instanceof Array
            ? this.selectors.map((t) => t.replace("#", ""))
            : this.selectors.replace("#", "");
        }
        set ids(t) {
          this.selectors = t instanceof Array ? t.map((t) => "#" + t) : "#" + t;
        }
        load(t) {
          var e, i;
          if (void 0 === t) return;
          const o =
            null !==
              (i = null !== (e = t.ids) && void 0 !== e ? e : t.elementId) &&
            void 0 !== i
              ? i
              : t.el;
          void 0 !== o && (this.ids = o),
            void 0 !== t.selectors && (this.selectors = t.selectors),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.type && (this.type = t.type);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HoverEvent = void 0);
      const o = i(153);
      e.HoverEvent = class {
        constructor() {
          (this.enable = !1),
            (this.mode = []),
            (this.parallax = new o.Parallax());
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            this.parallax.load(t.parallax));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Parallax = void 0);
      e.Parallax = class {
        constructor() {
          (this.enable = !1), (this.force = 2), (this.smooth = 10);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.force && (this.force = t.force),
            void 0 !== t.smooth && (this.smooth = t.smooth));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Modes = void 0);
      const o = i(155),
        s = i(157),
        n = i(159),
        r = i(161),
        a = i(162),
        l = i(163),
        c = i(165),
        u = i(166),
        d = i(172),
        h = i(173),
        v = i(177);
      e.Modes = class {
        constructor() {
          (this.attract = new d.Attract()),
            (this.bounce = new v.Bounce()),
            (this.bubble = new o.Bubble()),
            (this.connect = new s.Connect()),
            (this.grab = new n.Grab()),
            (this.light = new h.Light()),
            (this.push = new a.Push()),
            (this.remove = new r.Remove()),
            (this.repulse = new l.Repulse()),
            (this.slow = new c.Slow()),
            (this.trail = new u.Trail());
        }
        load(t) {
          void 0 !== t &&
            (this.attract.load(t.attract),
            this.bubble.load(t.bubble),
            this.connect.load(t.connect),
            this.grab.load(t.grab),
            this.light.load(t.light),
            this.push.load(t.push),
            this.remove.load(t.remove),
            this.repulse.load(t.repulse),
            this.slow.load(t.slow),
            this.trail.load(t.trail));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Bubble = void 0);
      const o = i(156),
        s = i(43);
      class n extends s.BubbleBase {
        load(t) {
          super.load(t),
            void 0 !== t &&
              void 0 !== t.divs &&
              (t.divs instanceof Array
                ? (this.divs = t.divs.map((t) => {
                    const e = new o.BubbleDiv();
                    return e.load(t), e;
                  }))
                : ((this.divs instanceof Array || !this.divs) &&
                    (this.divs = new o.BubbleDiv()),
                  this.divs.load(t.divs)));
        }
      }
      e.Bubble = n;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BubbleDiv = void 0);
      const o = i(43);
      class s extends o.BubbleBase {
        constructor() {
          super(), (this.selectors = []);
        }
        get ids() {
          return this.selectors instanceof Array
            ? this.selectors.map((t) => t.replace("#", ""))
            : this.selectors.replace("#", "");
        }
        set ids(t) {
          this.selectors = t instanceof Array ? t.map((t) => "#" + t) : "#" + t;
        }
        load(t) {
          super.load(t),
            void 0 !== t &&
              (void 0 !== t.ids && (this.ids = t.ids),
              void 0 !== t.selectors && (this.selectors = t.selectors));
        }
      }
      e.BubbleDiv = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Connect = void 0);
      const o = i(158);
      e.Connect = class {
        constructor() {
          (this.distance = 80),
            (this.links = new o.ConnectLinks()),
            (this.radius = 60);
        }
        get line_linked() {
          return this.links;
        }
        set line_linked(t) {
          this.links = t;
        }
        get lineLinked() {
          return this.links;
        }
        set lineLinked(t) {
          this.links = t;
        }
        load(t) {
          var e, i;
          void 0 !== t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            this.links.load(
              null !==
                (i =
                  null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) &&
                void 0 !== i
                ? i
                : t.line_linked
            ),
            void 0 !== t.radius && (this.radius = t.radius));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ConnectLinks = void 0);
      e.ConnectLinks = class {
        constructor() {
          this.opacity = 0.5;
        }
        load(t) {
          void 0 !== t && void 0 !== t.opacity && (this.opacity = t.opacity);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Grab = void 0);
      const o = i(160);
      e.Grab = class {
        constructor() {
          (this.distance = 100), (this.links = new o.GrabLinks());
        }
        get line_linked() {
          return this.links;
        }
        set line_linked(t) {
          this.links = t;
        }
        get lineLinked() {
          return this.links;
        }
        set lineLinked(t) {
          this.links = t;
        }
        load(t) {
          var e, i;
          void 0 !== t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            this.links.load(
              null !==
                (i =
                  null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) &&
                void 0 !== i
                ? i
                : t.line_linked
            ));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.GrabLinks = void 0);
      const o = i(2);
      e.GrabLinks = class {
        constructor() {
          (this.blink = !1), (this.consent = !1), (this.opacity = 1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.blink && (this.blink = t.blink),
            void 0 !== t.color &&
              (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.consent && (this.consent = t.consent),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Remove = void 0);
      e.Remove = class {
        constructor() {
          this.quantity = 2;
        }
        get particles_nb() {
          return this.quantity;
        }
        set particles_nb(t) {
          this.quantity = t;
        }
        load(t) {
          var e;
          if (void 0 === t) return;
          const i =
            null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
          void 0 !== i && (this.quantity = i);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Push = void 0);
      e.Push = class {
        constructor() {
          this.quantity = 4;
        }
        get particles_nb() {
          return this.quantity;
        }
        set particles_nb(t) {
          this.quantity = t;
        }
        load(t) {
          var e;
          if (void 0 === t) return;
          const i =
            null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
          void 0 !== i && (this.quantity = i);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Repulse = void 0);
      const o = i(164),
        s = i(44);
      class n extends s.RepulseBase {
        load(t) {
          super.load(t),
            void 0 !== (null == t ? void 0 : t.divs) &&
              (t.divs instanceof Array
                ? (this.divs = t.divs.map((t) => {
                    const e = new o.RepulseDiv();
                    return e.load(t), e;
                  }))
                : ((this.divs instanceof Array || !this.divs) &&
                    (this.divs = new o.RepulseDiv()),
                  this.divs.load(t.divs)));
        }
      }
      e.Repulse = n;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RepulseDiv = void 0);
      const o = i(44);
      class s extends o.RepulseBase {
        constructor() {
          super(), (this.selectors = []);
        }
        get ids() {
          return this.selectors instanceof Array
            ? this.selectors.map((t) => t.replace("#", ""))
            : this.selectors.replace("#", "");
        }
        set ids(t) {
          this.selectors = t instanceof Array ? t.map(() => "#" + t) : "#" + t;
        }
        load(t) {
          super.load(t),
            void 0 !== t &&
              (void 0 !== t.ids && (this.ids = t.ids),
              void 0 !== t.selectors && (this.selectors = t.selectors));
        }
      }
      e.RepulseDiv = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Slow = void 0);
      e.Slow = class {
        constructor() {
          (this.factor = 3), (this.radius = 200);
        }
        get active() {
          return !1;
        }
        set active(t) {}
        load(t) {
          void 0 !== t &&
            (void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.radius && (this.radius = t.radius));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Trail = void 0);
      const o = i(0);
      e.Trail = class {
        constructor() {
          (this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.delay && (this.delay = t.delay),
            void 0 !== t.quantity && (this.quantity = t.quantity),
            void 0 !== t.particles &&
              (this.particles = o.Utils.deepExtend({}, t.particles)),
            void 0 !== t.pauseOnStop && (this.pauseOnStop = t.pauseOnStop));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.CanvasUtils = void 0);
      const o = i(45),
        s = i(17);
      function n(t, e, i) {
        t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
      }
      class r {
        static paintBase(t, e, i) {
          t.save(),
            (t.fillStyle = null != i ? i : "rgba(0,0,0,0)"),
            t.fillRect(0, 0, e.width, e.height),
            t.restore();
        }
        static clear(t, e) {
          t.clearRect(0, 0, e.width, e.height);
        }
        static drawLinkLine(t, e, i, r, a, l, c, u, d, h, v, p) {
          let f = !1;
          if (s.NumberUtils.getDistance(i, r) <= a) n(t, i, r), (f = !0);
          else if (c) {
            let e, o;
            const c = { x: r.x - l.width, y: r.y },
              u = s.NumberUtils.getDistances(i, c);
            if (u.distance <= a) {
              const t = i.y - (u.dy / u.dx) * i.x;
              (e = { x: 0, y: t }), (o = { x: l.width, y: t });
            } else {
              const t = { x: r.x, y: r.y - l.height },
                n = s.NumberUtils.getDistances(i, t);
              if (n.distance <= a) {
                const t = -(i.y - (n.dy / n.dx) * i.x) / (n.dy / n.dx);
                (e = { x: t, y: 0 }), (o = { x: t, y: l.height });
              } else {
                const t = { x: r.x - l.width, y: r.y - l.height },
                  n = s.NumberUtils.getDistances(i, t);
                if (n.distance <= a) {
                  const t = i.y - (n.dy / n.dx) * i.x;
                  (e = { x: -t / (n.dy / n.dx), y: t }),
                    (o = { x: e.x + l.width, y: e.y + l.height });
                }
              }
            }
            e && o && (n(t, i, e), n(t, r, o), (f = !0));
          }
          if (f) {
            if (
              ((t.lineWidth = e),
              u && (t.globalCompositeOperation = d),
              (t.strokeStyle = o.ColorUtils.getStyleFromRgb(h, v)),
              p.enable)
            ) {
              const e = o.ColorUtils.colorToRgb(p.color);
              e &&
                ((t.shadowBlur = p.blur),
                (t.shadowColor = o.ColorUtils.getStyleFromRgb(e)));
            }
            t.stroke();
          }
        }
        static drawLinkTriangle(t, e, i, s, n, r, a, l) {
          !(function (t, e, i, o) {
            t.beginPath(),
              t.moveTo(e.x, e.y),
              t.lineTo(i.x, i.y),
              t.lineTo(o.x, o.y),
              t.closePath();
          })(t, e, i, s),
            n && (t.globalCompositeOperation = r),
            (t.fillStyle = o.ColorUtils.getStyleFromRgb(a, l)),
            t.fill();
        }
        static drawConnectLine(t, e, i, o, s) {
          t.save(),
            n(t, o, s),
            (t.lineWidth = e),
            (t.strokeStyle = i),
            t.stroke(),
            t.restore();
        }
        static gradient(t, e, i, s) {
          const n = Math.floor(i.getRadius() / e.getRadius()),
            r = e.getFillColor(),
            a = i.getFillColor();
          if (!r || !a) return;
          const l = e.getPosition(),
            c = i.getPosition(),
            u = o.ColorUtils.mix(r, a, e.getRadius(), i.getRadius()),
            d = t.createLinearGradient(l.x, l.y, c.x, c.y);
          return (
            d.addColorStop(0, o.ColorUtils.getStyleFromHsl(r, s)),
            d.addColorStop(n > 1 ? 1 : n, o.ColorUtils.getStyleFromRgb(u, s)),
            d.addColorStop(1, o.ColorUtils.getStyleFromHsl(a, s)),
            d
          );
        }
        static drawGrabLine(t, e, i, s, r, a) {
          t.save(),
            n(t, i, s),
            (t.strokeStyle = o.ColorUtils.getStyleFromRgb(r, a)),
            (t.lineWidth = e),
            t.stroke(),
            t.restore();
        }
        static drawLight(t, e, i) {
          const s = t.actualOptions.interactivity.modes.light.area;
          e.beginPath(), e.arc(i.x, i.y, s.radius, 0, 2 * Math.PI);
          const n = e.createRadialGradient(i.x, i.y, 0, i.x, i.y, s.radius),
            r = s.gradient,
            a = {
              start: o.ColorUtils.colorToRgb(r.start),
              stop: o.ColorUtils.colorToRgb(r.stop),
            };
          a.start &&
            a.stop &&
            (n.addColorStop(0, o.ColorUtils.getStyleFromRgb(a.start)),
            n.addColorStop(1, o.ColorUtils.getStyleFromRgb(a.stop)),
            (e.fillStyle = n),
            e.fill());
        }
        static drawParticleShadow(t, e, i, s) {
          const n = i.getPosition(),
            r = t.actualOptions.interactivity.modes.light.shadow;
          e.save();
          const a = i.getRadius(),
            l = i.sides,
            c = (2 * Math.PI) / l,
            u = -i.rotate.value + Math.PI / 4,
            d = [];
          for (let t = 0; t < l; t++)
            d.push({
              x: n.x + a * Math.sin(u + c * t) * 1,
              y: n.y + a * Math.cos(u + c * t) * 1,
            });
          const h = [],
            v = r.length;
          for (const t of d) {
            const e = Math.atan2(s.y - t.y, s.x - t.x),
              i = t.x + v * Math.sin(-e - Math.PI / 2),
              o = t.y + v * Math.cos(-e - Math.PI / 2);
            h.push({ endX: i, endY: o, startX: t.x, startY: t.y });
          }
          const p = o.ColorUtils.colorToRgb(r.color);
          if (!p) return;
          const f = o.ColorUtils.getStyleFromRgb(p);
          for (let t = h.length - 1; t >= 0; t--) {
            const i = t == h.length - 1 ? 0 : t + 1;
            e.beginPath(),
              e.moveTo(h[t].startX, h[t].startY),
              e.lineTo(h[i].startX, h[i].startY),
              e.lineTo(h[i].endX, h[i].endY),
              e.lineTo(h[t].endX, h[t].endY),
              (e.fillStyle = f),
              e.fill();
          }
          e.restore();
        }
        static drawParticle(t, e, i, s, n, a, l, c, u, d, h) {
          const v = i.getPosition(),
            p = i.options.tilt,
            f = i.options.roll;
          e.save(),
            p.enable || f.enable
              ? e.setTransform(
                  f.enable ? Math.cos(i.rollAngle) : 1,
                  p.enable ? Math.cos(i.tilt.value) * i.tilt.cosDirection : 0,
                  p.enable ? Math.sin(i.tilt.value) * i.tilt.sinDirection : 0,
                  f.enable ? Math.sin(i.rollAngle) : 1,
                  v.x,
                  v.y
                )
              : e.translate(v.x, v.y),
            e.beginPath();
          const y =
            i.rotate.value + (i.options.rotate.path ? i.velocity.angle : 0);
          0 !== y && e.rotate(y), l && (e.globalCompositeOperation = c);
          const b = i.shadowColor;
          h.enable &&
            b &&
            ((e.shadowBlur = h.blur),
            (e.shadowColor = o.ColorUtils.getStyleFromRgb(b)),
            (e.shadowOffsetX = h.offset.x),
            (e.shadowOffsetY = h.offset.y)),
            n && (e.fillStyle = n);
          const m = i.stroke;
          (e.lineWidth = i.strokeWidth),
            a && (e.strokeStyle = a),
            r.drawShape(t, e, i, u, d, s),
            m.width > 0 && e.stroke(),
            i.close && e.closePath(),
            i.fill && e.fill(),
            e.restore(),
            e.save(),
            p.enable
              ? e.setTransform(
                  1,
                  Math.cos(i.tilt.value) * i.tilt.cosDirection,
                  Math.sin(i.tilt.value) * i.tilt.sinDirection,
                  1,
                  v.x,
                  v.y
                )
              : e.translate(v.x, v.y),
            0 !== y && e.rotate(y),
            l && (e.globalCompositeOperation = c),
            r.drawShapeAfterEffect(t, e, i, u, d, s),
            e.restore();
        }
        static drawShape(t, e, i, o, s, n) {
          if (!i.shape) return;
          const r = t.drawers.get(i.shape);
          r && r.draw(e, i, o, s, n, t.retina.pixelRatio);
        }
        static drawShapeAfterEffect(t, e, i, o, s, n) {
          if (!i.shape) return;
          const r = t.drawers.get(i.shape);
          (null == r ? void 0 : r.afterEffect) &&
            r.afterEffect(e, i, o, s, n, t.retina.pixelRatio);
        }
        static drawPlugin(t, e, i) {
          void 0 !== e.draw && (t.save(), e.draw(t, i), t.restore());
        }
      }
      e.CanvasUtils = r;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EventListeners = void 0);
      const o = i(1),
        s = i(22);
      function n(t, e, i, o, s) {
        if (o) {
          let o = { passive: !0 };
          "boolean" == typeof s ? (o.capture = s) : void 0 !== s && (o = s),
            t.addEventListener(e, i, o);
        } else {
          const o = s;
          t.removeEventListener(e, i, o);
        }
      }
      e.EventListeners = class {
        constructor(t) {
          (this.container = t),
            (this.canPush = !0),
            (this.mouseMoveHandler = (t) => this.mouseTouchMove(t)),
            (this.touchStartHandler = (t) => this.mouseTouchMove(t)),
            (this.touchMoveHandler = (t) => this.mouseTouchMove(t)),
            (this.touchEndHandler = () => this.mouseTouchFinish()),
            (this.mouseLeaveHandler = () => this.mouseTouchFinish()),
            (this.touchCancelHandler = () => this.mouseTouchFinish()),
            (this.touchEndClickHandler = (t) => this.mouseTouchClick(t)),
            (this.mouseUpHandler = (t) => this.mouseTouchClick(t)),
            (this.mouseDownHandler = () => this.mouseDown()),
            (this.visibilityChangeHandler = () =>
              this.handleVisibilityChange()),
            (this.resizeHandler = () => this.handleWindowResize());
        }
        addListeners() {
          this.manageListeners(!0);
        }
        removeListeners() {
          this.manageListeners(!1);
        }
        manageListeners(t) {
          var e;
          const i = this.container,
            r = i.actualOptions,
            a = r.interactivity.detectsOn;
          let l = s.Constants.mouseLeaveEvent;
          if (a === o.InteractivityDetect.window)
            (i.interactivity.element = window), (l = s.Constants.mouseOutEvent);
          else if (a === o.InteractivityDetect.parent && i.canvas.element) {
            const t = i.canvas.element;
            i.interactivity.element =
              null !== (e = t.parentElement) && void 0 !== e ? e : t.parentNode;
          } else i.interactivity.element = i.canvas.element;
          const c = i.interactivity.element;
          if (!c) return;
          const u = c;
          (r.interactivity.events.onHover.enable ||
            r.interactivity.events.onClick.enable) &&
            (n(c, s.Constants.mouseMoveEvent, this.mouseMoveHandler, t),
            n(c, s.Constants.touchStartEvent, this.touchStartHandler, t),
            n(c, s.Constants.touchMoveEvent, this.touchMoveHandler, t),
            r.interactivity.events.onClick.enable
              ? (n(c, s.Constants.touchEndEvent, this.touchEndClickHandler, t),
                n(c, s.Constants.mouseUpEvent, this.mouseUpHandler, t),
                n(c, s.Constants.mouseDownEvent, this.mouseDownHandler, t))
              : n(c, s.Constants.touchEndEvent, this.touchEndHandler, t),
            n(c, l, this.mouseLeaveHandler, t),
            n(c, s.Constants.touchCancelEvent, this.touchCancelHandler, t)),
            i.canvas.element &&
              (i.canvas.element.style.pointerEvents =
                u === i.canvas.element ? "initial" : "none"),
            r.interactivity.events.resize &&
              n(window, s.Constants.resizeEvent, this.resizeHandler, t),
            document &&
              n(
                document,
                s.Constants.visibilityChangeEvent,
                this.visibilityChangeHandler,
                t,
                !1
              );
        }
        handleWindowResize() {
          this.resizeTimeout &&
            (clearTimeout(this.resizeTimeout), delete this.resizeTimeout),
            (this.resizeTimeout = setTimeout(() => {
              var t;
              return null === (t = this.container.canvas) || void 0 === t
                ? void 0
                : t.windowResize();
            }, 500));
        }
        handleVisibilityChange() {
          const t = this.container,
            e = t.actualOptions;
          this.mouseTouchFinish(),
            e.pauseOnBlur &&
              ((
                null === document || void 0 === document
                  ? void 0
                  : document.hidden
              )
                ? ((t.pageHidden = !0), t.pause())
                : ((t.pageHidden = !1),
                  t.getAnimationStatus() ? t.play(!0) : t.draw()));
        }
        mouseDown() {
          const t = this.container.interactivity;
          if (t) {
            const e = t.mouse;
            (e.clicking = !0), (e.downPosition = e.position);
          }
        }
        mouseTouchMove(t) {
          var e, i, n, r, a, l, c;
          const u = this.container,
            d = u.actualOptions;
          if (
            void 0 ===
            (null === (e = u.interactivity) || void 0 === e
              ? void 0
              : e.element)
          )
            return;
          let h;
          u.interactivity.mouse.inside = !0;
          const v = u.canvas.element;
          if (t.type.startsWith("mouse")) {
            this.canPush = !0;
            const e = t;
            if (u.interactivity.element === window) {
              if (v) {
                const t = v.getBoundingClientRect();
                h = { x: e.clientX - t.left, y: e.clientY - t.top };
              }
            } else if (
              d.interactivity.detectsOn === o.InteractivityDetect.parent
            ) {
              const t = e.target,
                o = e.currentTarget,
                s = u.canvas.element;
              if (t && o && s) {
                const i = t.getBoundingClientRect(),
                  n = o.getBoundingClientRect(),
                  r = s.getBoundingClientRect();
                h = {
                  x: e.offsetX + 2 * i.left - (n.left + r.left),
                  y: e.offsetY + 2 * i.top - (n.top + r.top),
                };
              } else
                h = {
                  x: null !== (i = e.offsetX) && void 0 !== i ? i : e.clientX,
                  y: null !== (n = e.offsetY) && void 0 !== n ? n : e.clientY,
                };
            } else
              e.target === u.canvas.element &&
                (h = {
                  x: null !== (r = e.offsetX) && void 0 !== r ? r : e.clientX,
                  y: null !== (a = e.offsetY) && void 0 !== a ? a : e.clientY,
                });
          } else {
            this.canPush = "touchmove" !== t.type;
            const e = t,
              i = e.touches[e.touches.length - 1],
              o = null == v ? void 0 : v.getBoundingClientRect();
            h = {
              x:
                i.clientX -
                (null !== (l = null == o ? void 0 : o.left) && void 0 !== l
                  ? l
                  : 0),
              y:
                i.clientY -
                (null !== (c = null == o ? void 0 : o.top) && void 0 !== c
                  ? c
                  : 0),
            };
          }
          const p = u.retina.pixelRatio;
          h && ((h.x *= p), (h.y *= p)),
            (u.interactivity.mouse.position = h),
            (u.interactivity.status = s.Constants.mouseMoveEvent);
        }
        mouseTouchFinish() {
          const t = this.container.interactivity;
          if (void 0 === t) return;
          const e = t.mouse;
          delete e.position,
            delete e.clickPosition,
            delete e.downPosition,
            (t.status = s.Constants.mouseLeaveEvent),
            (e.inside = !1),
            (e.clicking = !1);
        }
        mouseTouchClick(t) {
          const e = this.container,
            i = e.actualOptions,
            o = e.interactivity.mouse;
          o.inside = !0;
          let s = !1;
          const n = o.position;
          if (void 0 !== n && i.interactivity.events.onClick.enable) {
            for (const [, t] of e.plugins)
              if (
                void 0 !== t.clickPositionValid &&
                ((s = t.clickPositionValid(n)), s)
              )
                break;
            s || this.doMouseTouchClick(t), (o.clicking = !1);
          }
        }
        doMouseTouchClick(t) {
          const e = this.container,
            i = e.actualOptions;
          if (this.canPush) {
            const t = e.interactivity.mouse.position;
            if (!t) return;
            (e.interactivity.mouse.clickPosition = { x: t.x, y: t.y }),
              (e.interactivity.mouse.clickTime = new Date().getTime());
            const o = i.interactivity.events.onClick;
            if (o.mode instanceof Array)
              for (const t of o.mode) this.handleClickMode(t);
            else this.handleClickMode(o.mode);
          }
          "touchend" === t.type &&
            setTimeout(() => this.mouseTouchFinish(), 500);
        }
        handleClickMode(t) {
          const e = this.container,
            i = e.actualOptions,
            s = i.interactivity.modes.push.quantity,
            n = i.interactivity.modes.remove.quantity;
          switch (t) {
            case o.ClickMode.push:
              s > 0 && e.particles.push(s, e.interactivity.mouse);
              break;
            case o.ClickMode.remove:
              e.particles.removeQuantity(n);
              break;
            case o.ClickMode.bubble:
              e.bubble.clicking = !0;
              break;
            case o.ClickMode.repulse:
              (e.repulse.clicking = !0), (e.repulse.count = 0);
              for (const t of e.repulse.particles)
                t.velocity.setTo(t.initialVelocity);
              (e.repulse.particles = []),
                (e.repulse.finish = !1),
                setTimeout(() => {
                  e.destroyed || (e.repulse.clicking = !1);
                }, 1e3 * i.interactivity.modes.repulse.duration);
              break;
            case o.ClickMode.attract:
              (e.attract.clicking = !0), (e.attract.count = 0);
              for (const t of e.attract.particles)
                t.velocity.setTo(t.initialVelocity);
              (e.attract.particles = []),
                (e.attract.finish = !1),
                setTimeout(() => {
                  e.destroyed || (e.attract.clicking = !1);
                }, 1e3 * i.interactivity.modes.attract.duration);
              break;
            case o.ClickMode.pause:
              e.getAnimationStatus() ? e.pause() : e.play();
          }
          for (const [, i] of e.plugins)
            i.handleClickMode && i.handleClickMode(t);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Plugins = void 0);
      const o = [],
        s = new Map(),
        n = new Map(),
        r = new Map();
      class a {
        static getPlugin(t) {
          return o.find((e) => e.id === t);
        }
        static addPlugin(t) {
          a.getPlugin(t.id) || o.push(t);
        }
        static getAvailablePlugins(t) {
          const e = new Map();
          for (const i of o)
            i.needsPlugin(t.actualOptions) && e.set(i.id, i.getPlugin(t));
          return e;
        }
        static loadOptions(t, e) {
          for (const i of o) i.loadOptions(t, e);
        }
        static getPreset(t) {
          return s.get(t);
        }
        static addPreset(t, e, i = !1) {
          (!i && a.getPreset(t)) || s.set(t, e);
        }
        static addShapeDrawer(t, e) {
          a.getShapeDrawer(t) || n.set(t, e);
        }
        static getShapeDrawer(t) {
          return n.get(t);
        }
        static getSupportedShapes() {
          return n.keys();
        }
        static getPathGenerator(t) {
          return r.get(t);
        }
        static addPathGenerator(t, e) {
          a.getPathGenerator(t) || r.set(t, e);
        }
      }
      e.Plugins = a;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Point = void 0);
      e.Point = class {
        constructor(t, e) {
          (this.position = t), (this.particle = e);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.QuadTree = void 0);
      const o = i(25),
        s = i(23),
        n = i(47);
      class r {
        constructor(t, e) {
          (this.rectangle = t),
            (this.capacity = e),
            (this.points = []),
            (this.divided = !1);
        }
        subdivide() {
          const t = this.rectangle.position.x,
            e = this.rectangle.position.y,
            i = this.rectangle.size.width,
            s = this.rectangle.size.height,
            n = this.capacity;
          (this.northEast = new r(new o.Rectangle(t, e, i / 2, s / 2), n)),
            (this.northWest = new r(
              new o.Rectangle(t + i / 2, e, i / 2, s / 2),
              n
            )),
            (this.southEast = new r(
              new o.Rectangle(t, e + s / 2, i / 2, s / 2),
              n
            )),
            (this.southWest = new r(
              new o.Rectangle(t + i / 2, e + s / 2, i / 2, s / 2),
              n
            )),
            (this.divided = !0);
        }
        insert(t) {
          var e, i, o, s, n;
          return (
            !!this.rectangle.contains(t.position) &&
            (this.points.length < this.capacity
              ? (this.points.push(t), !0)
              : (this.divided || this.subdivide(),
                null !==
                  (n =
                    (null === (e = this.northEast) || void 0 === e
                      ? void 0
                      : e.insert(t)) ||
                    (null === (i = this.northWest) || void 0 === i
                      ? void 0
                      : i.insert(t)) ||
                    (null === (o = this.southEast) || void 0 === o
                      ? void 0
                      : o.insert(t)) ||
                    (null === (s = this.southWest) || void 0 === s
                      ? void 0
                      : s.insert(t))) &&
                  void 0 !== n &&
                  n))
          );
        }
        queryCircle(t, e) {
          return this.query(new s.Circle(t.x, t.y, e));
        }
        queryCircleWarp(t, e, i) {
          const o = i,
            s = i;
          return this.query(
            new n.CircleWarp(
              t.x,
              t.y,
              e,
              void 0 !== o.canvas ? o.canvas.size : s
            )
          );
        }
        queryRectangle(t, e) {
          return this.query(new o.Rectangle(t.x, t.y, e.width, e.height));
        }
        query(t, e) {
          var i, o, s, n;
          const r = null != e ? e : [];
          if (!t.intersects(this.rectangle)) return [];
          for (const e of this.points)
            t.contains(e.position) && r.push(e.particle);
          return (
            this.divided &&
              (null === (i = this.northEast) || void 0 === i || i.query(t, r),
              null === (o = this.northWest) || void 0 === o || o.query(t, r),
              null === (s = this.southEast) || void 0 === s || s.query(t, r),
              null === (n = this.southWest) || void 0 === n || n.query(t, r)),
            r
          );
        }
      }
      e.QuadTree = r;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Attract = void 0);
      const o = i(1);
      e.Attract = class {
        constructor() {
          (this.distance = 200),
            (this.duration = 0.4),
            (this.easing = o.EasingType.easeOutQuad),
            (this.factor = 1),
            (this.maxSpeed = 50),
            (this.speed = 1);
        }
        load(t) {
          t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.easing && (this.easing = t.easing),
            void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed),
            void 0 !== t.speed && (this.speed = t.speed));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Light = void 0);
      const o = i(174),
        s = i(176);
      e.Light = class {
        constructor() {
          (this.area = new o.LightArea()), (this.shadow = new s.LightShadow());
        }
        load(t) {
          void 0 !== t && (this.area.load(t.area), this.shadow.load(t.shadow));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LightArea = void 0);
      const o = i(175);
      e.LightArea = class {
        constructor() {
          (this.gradient = new o.LightGradient()), (this.radius = 1e3);
        }
        load(t) {
          void 0 !== t &&
            (this.gradient.load(t.gradient),
            void 0 !== t.radius && (this.radius = t.radius));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LightGradient = void 0);
      const o = i(2);
      e.LightGradient = class {
        constructor() {
          (this.start = new o.OptionsColor()),
            (this.stop = new o.OptionsColor()),
            (this.start.value = "#ffffff"),
            (this.stop.value = "#000000");
        }
        load(t) {
          void 0 !== t &&
            ((this.start = o.OptionsColor.create(this.start, t.start)),
            (this.stop = o.OptionsColor.create(this.stop, t.stop)));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LightShadow = void 0);
      const o = i(2);
      e.LightShadow = class {
        constructor() {
          (this.color = new o.OptionsColor()),
            (this.color.value = "#000000"),
            (this.length = 2e3);
        }
        load(t) {
          void 0 !== t &&
            ((this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.length && (this.length = t.length));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Bounce = void 0);
      e.Bounce = class {
        constructor() {
          this.distance = 200;
        }
        load(t) {
          t && void 0 !== t.distance && (this.distance = t.distance);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Links = void 0);
      const o = i(179),
        s = i(180),
        n = i(2);
      e.Links = class {
        constructor() {
          (this.blink = !1),
            (this.color = new n.OptionsColor()),
            (this.consent = !1),
            (this.distance = 100),
            (this.enable = !1),
            (this.frequency = 1),
            (this.opacity = 1),
            (this.shadow = new o.LinksShadow()),
            (this.triangles = new s.LinksTriangle()),
            (this.width = 1),
            (this.warp = !1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.id && (this.id = t.id),
            void 0 !== t.blink && (this.blink = t.blink),
            (this.color = n.OptionsColor.create(this.color, t.color)),
            void 0 !== t.consent && (this.consent = t.consent),
            void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.frequency && (this.frequency = t.frequency),
            void 0 !== t.opacity && (this.opacity = t.opacity),
            this.shadow.load(t.shadow),
            this.triangles.load(t.triangles),
            void 0 !== t.width && (this.width = t.width),
            void 0 !== t.warp && (this.warp = t.warp));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LinksShadow = void 0);
      const o = i(2);
      e.LinksShadow = class {
        constructor() {
          (this.blur = 5),
            (this.color = new o.OptionsColor()),
            (this.enable = !1),
            (this.color.value = "#00ff00");
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.blur && (this.blur = t.blur),
            (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LinksTriangle = void 0);
      const o = i(2);
      e.LinksTriangle = class {
        constructor() {
          (this.enable = !1), (this.frequency = 1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.frequency && (this.frequency = t.frequency),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Move = void 0);
      const o = i(182),
        s = i(1),
        n = i(183),
        r = i(184),
        a = i(187),
        l = i(188),
        c = i(189),
        u = i(0);
      e.Move = class {
        constructor() {
          (this.angle = new a.MoveAngle()),
            (this.attract = new o.Attract()),
            (this.decay = 0),
            (this.distance = 0),
            (this.direction = s.MoveDirection.none),
            (this.drift = 0),
            (this.enable = !1),
            (this.gravity = new l.MoveGravity()),
            (this.path = new r.Path()),
            (this.outModes = new c.OutModes()),
            (this.random = !1),
            (this.size = !1),
            (this.speed = 2),
            (this.straight = !1),
            (this.trail = new n.Trail()),
            (this.vibrate = !1),
            (this.warp = !1);
        }
        get collisions() {
          return !1;
        }
        set collisions(t) {}
        get bounce() {
          return this.collisions;
        }
        set bounce(t) {
          this.collisions = t;
        }
        get out_mode() {
          return this.outMode;
        }
        set out_mode(t) {
          this.outMode = t;
        }
        get outMode() {
          return this.outModes.default;
        }
        set outMode(t) {
          this.outModes.default = t;
        }
        get noise() {
          return this.path;
        }
        set noise(t) {
          this.path = t;
        }
        load(t) {
          var e, i, o;
          if (void 0 === t) return;
          void 0 !== t.angle &&
            ("number" == typeof t.angle
              ? (this.angle.value = t.angle)
              : this.angle.load(t.angle)),
            this.attract.load(t.attract),
            void 0 !== t.decay && (this.decay = t.decay),
            void 0 !== t.direction && (this.direction = t.direction),
            void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.drift &&
              (this.drift = u.NumberUtils.setRangeValue(t.drift)),
            void 0 !== t.enable && (this.enable = t.enable),
            this.gravity.load(t.gravity);
          const s = null !== (e = t.outMode) && void 0 !== e ? e : t.out_mode;
          (void 0 === t.outModes && void 0 === s) ||
            ("string" == typeof t.outModes ||
            (void 0 === t.outModes && void 0 !== s)
              ? this.outModes.load({
                  default: null !== (i = t.outModes) && void 0 !== i ? i : s,
                })
              : this.outModes.load(t.outModes)),
            this.path.load(null !== (o = t.path) && void 0 !== o ? o : t.noise),
            void 0 !== t.random && (this.random = t.random),
            void 0 !== t.size && (this.size = t.size),
            void 0 !== t.speed &&
              (this.speed = u.NumberUtils.setRangeValue(t.speed)),
            void 0 !== t.straight && (this.straight = t.straight),
            this.trail.load(t.trail),
            void 0 !== t.vibrate && (this.vibrate = t.vibrate),
            void 0 !== t.warp && (this.warp = t.warp);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Attract = void 0);
      e.Attract = class {
        constructor() {
          (this.distance = 200),
            (this.enable = !1),
            (this.rotate = { x: 3e3, y: 3e3 });
        }
        get rotateX() {
          return this.rotate.x;
        }
        set rotateX(t) {
          this.rotate.x = t;
        }
        get rotateY() {
          return this.rotate.y;
        }
        set rotateY(t) {
          this.rotate.y = t;
        }
        load(t) {
          var e, i, o, s;
          if (!t) return;
          void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.enable && (this.enable = t.enable);
          const n =
            null !==
              (i = null === (e = t.rotate) || void 0 === e ? void 0 : e.x) &&
            void 0 !== i
              ? i
              : t.rotateX;
          void 0 !== n && (this.rotate.x = n);
          const r =
            null !==
              (s = null === (o = t.rotate) || void 0 === o ? void 0 : o.y) &&
            void 0 !== s
              ? s
              : t.rotateY;
          void 0 !== r && (this.rotate.y = r);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Trail = void 0);
      const o = i(2);
      e.Trail = class {
        constructor() {
          (this.enable = !1),
            (this.length = 10),
            (this.fillColor = new o.OptionsColor()),
            (this.fillColor.value = "#000000");
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            (this.fillColor = o.OptionsColor.create(
              this.fillColor,
              t.fillColor
            )),
            void 0 !== t.length && (this.length = t.length));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Path = void 0);
      const o = i(185);
      e.Path = class {
        constructor() {
          (this.clamp = !0),
            (this.delay = new o.PathDelay()),
            (this.enable = !1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.clamp && (this.clamp = t.clamp),
            this.delay.load(t.delay),
            void 0 !== t.enable && (this.enable = t.enable),
            (this.generator = t.generator));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PathDelay = void 0);
      const o = i(3);
      class s extends o.ValueWithRandom {
        constructor() {
          super();
        }
      }
      e.PathDelay = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Random = void 0);
      e.Random = class {
        constructor() {
          (this.enable = !1), (this.minimumValue = 0);
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.MoveAngle = void 0);
      e.MoveAngle = class {
        constructor() {
          (this.offset = 0), (this.value = 90);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.offset && (this.offset = t.offset),
            void 0 !== t.value && (this.value = t.value));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.MoveGravity = void 0);
      e.MoveGravity = class {
        constructor() {
          (this.acceleration = 9.81),
            (this.enable = !1),
            (this.inverse = !1),
            (this.maxSpeed = 50);
        }
        load(t) {
          t &&
            (void 0 !== t.acceleration && (this.acceleration = t.acceleration),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.inverse && (this.inverse = t.inverse),
            void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.OutModes = void 0);
      const o = i(6);
      e.OutModes = class {
        constructor() {
          this.default = o.OutMode.out;
        }
        load(t) {
          var e, i, o, s;
          t &&
            (void 0 !== t.default && (this.default = t.default),
            (this.bottom =
              null !== (e = t.bottom) && void 0 !== e ? e : t.default),
            (this.left = null !== (i = t.left) && void 0 !== i ? i : t.default),
            (this.right =
              null !== (o = t.right) && void 0 !== o ? o : t.default),
            (this.top = null !== (s = t.top) && void 0 !== s ? s : t.default));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ParticlesNumber = void 0);
      const o = i(191);
      e.ParticlesNumber = class {
        constructor() {
          (this.density = new o.Density()),
            (this.limit = 0),
            (this.value = 100);
        }
        get max() {
          return this.limit;
        }
        set max(t) {
          this.limit = t;
        }
        load(t) {
          var e;
          if (void 0 === t) return;
          this.density.load(t.density);
          const i = null !== (e = t.limit) && void 0 !== e ? e : t.max;
          void 0 !== i && (this.limit = i),
            void 0 !== t.value && (this.value = t.value);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Density = void 0);
      e.Density = class {
        constructor() {
          (this.enable = !1), (this.area = 800), (this.factor = 1e3);
        }
        get value_area() {
          return this.area;
        }
        set value_area(t) {
          this.area = t;
        }
        load(t) {
          var e;
          if (void 0 === t) return;
          void 0 !== t.enable && (this.enable = t.enable);
          const i = null !== (e = t.area) && void 0 !== e ? e : t.value_area;
          void 0 !== i && (this.area = i),
            void 0 !== t.factor && (this.factor = t.factor);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Opacity = void 0);
      const o = i(193),
        s = i(3),
        n = i(0);
      class r extends s.ValueWithRandom {
        constructor() {
          super(),
            (this.animation = new o.OpacityAnimation()),
            (this.random.minimumValue = 0.1),
            (this.value = 1);
        }
        get anim() {
          return this.animation;
        }
        set anim(t) {
          this.animation = t;
        }
        load(t) {
          var e;
          if (!t) return;
          super.load(t);
          const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
          void 0 !== i &&
            (this.animation.load(i),
            (this.value = n.NumberUtils.setRangeValue(
              this.value,
              this.animation.enable ? this.animation.minimumValue : void 0
            )));
        }
      }
      e.Opacity = r;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.OpacityAnimation = void 0);
      const o = i(42),
        s = i(48);
      class n extends s.AnimationOptions {
        constructor() {
          super(),
            (this.destroy = o.DestroyType.none),
            (this.enable = !1),
            (this.minimumValue = 0),
            (this.speed = 2),
            (this.startValue = o.StartValueType.random),
            (this.sync = !1);
        }
        get opacity_min() {
          return this.minimumValue;
        }
        set opacity_min(t) {
          this.minimumValue = t;
        }
        load(t) {
          var e;
          if (void 0 === t) return;
          super.load(t),
            void 0 !== t.destroy && (this.destroy = t.destroy),
            void 0 !== t.enable && (this.enable = t.enable);
          const i =
            null !== (e = t.minimumValue) && void 0 !== e ? e : t.opacity_min;
          void 0 !== i && (this.minimumValue = i),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.startValue && (this.startValue = t.startValue),
            void 0 !== t.sync && (this.sync = t.sync);
        }
      }
      e.OpacityAnimation = n;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Size = void 0);
      const o = i(195),
        s = i(3),
        n = i(0);
      class r extends s.ValueWithRandom {
        constructor() {
          super(),
            (this.animation = new o.SizeAnimation()),
            (this.random.minimumValue = 1),
            (this.value = 3);
        }
        get anim() {
          return this.animation;
        }
        set anim(t) {
          this.animation = t;
        }
        load(t) {
          var e;
          if (!t) return;
          super.load(t);
          const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
          void 0 !== i &&
            (this.animation.load(i),
            (this.value = n.NumberUtils.setRangeValue(
              this.value,
              this.animation.enable ? this.animation.minimumValue : void 0
            )));
        }
      }
      e.Size = r;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SizeAnimation = void 0);
      const o = i(1),
        s = i(48);
      class n extends s.AnimationOptions {
        constructor() {
          super(),
            (this.destroy = o.DestroyType.none),
            (this.enable = !1),
            (this.minimumValue = 0),
            (this.speed = 5),
            (this.startValue = o.StartValueType.random),
            (this.sync = !1);
        }
        get size_min() {
          return this.minimumValue;
        }
        set size_min(t) {
          this.minimumValue = t;
        }
        load(t) {
          var e;
          if (void 0 === t) return;
          super.load(t),
            void 0 !== t.destroy && (this.destroy = t.destroy),
            void 0 !== t.enable && (this.enable = t.enable);
          const i =
            null !== (e = t.minimumValue) && void 0 !== e ? e : t.size_min;
          void 0 !== i && (this.minimumValue = i),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.startValue && (this.startValue = t.startValue),
            void 0 !== t.sync && (this.sync = t.sync);
        }
      }
      e.SizeAnimation = n;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Rotate = void 0);
      const o = i(197),
        s = i(1),
        n = i(3);
      class r extends n.ValueWithRandom {
        constructor() {
          super(),
            (this.animation = new o.RotateAnimation()),
            (this.direction = s.RotateDirection.clockwise),
            (this.path = !1),
            (this.value = 0);
        }
        load(t) {
          t &&
            (super.load(t),
            void 0 !== t.direction && (this.direction = t.direction),
            this.animation.load(t.animation),
            void 0 !== t.path && (this.path = t.path));
        }
      }
      e.Rotate = r;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RotateAnimation = void 0);
      e.RotateAnimation = class {
        constructor() {
          (this.enable = !1), (this.speed = 0), (this.sync = !1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.sync && (this.sync = t.sync));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Shadow = void 0);
      const o = i(2);
      e.Shadow = class {
        constructor() {
          (this.blur = 0),
            (this.color = new o.OptionsColor()),
            (this.enable = !1),
            (this.offset = { x: 0, y: 0 }),
            (this.color.value = "#000000");
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.blur && (this.blur = t.blur),
            (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.offset &&
              (void 0 !== t.offset.x && (this.offset.x = t.offset.x),
              void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Stroke = void 0);
      const o = i(27);
      e.Stroke = class {
        constructor() {
          this.width = 0;
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = o.AnimatableColor.create(this.color, t.color)),
            void 0 !== t.width && (this.width = t.width),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HslAnimation = void 0);
      const o = i(201);
      e.HslAnimation = class {
        constructor() {
          (this.h = new o.ColorAnimation()),
            (this.s = new o.ColorAnimation()),
            (this.l = new o.ColorAnimation());
        }
        load(t) {
          t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ColorAnimation = void 0);
      const o = i(0);
      e.ColorAnimation = class {
        constructor() {
          (this.count = 0),
            (this.enable = !1),
            (this.offset = 0),
            (this.speed = 1),
            (this.sync = !0);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.count && (this.count = t.count),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.offset &&
              (this.offset = o.NumberUtils.setRangeValue(t.offset)),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.sync && (this.sync = t.sync));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Collisions = void 0);
      const o = i(1),
        s = i(50),
        n = i(204);
      e.Collisions = class {
        constructor() {
          (this.bounce = new s.Bounce()),
            (this.enable = !1),
            (this.mode = o.CollisionMode.bounce),
            (this.overlap = new n.CollisionsOverlap());
        }
        load(t) {
          void 0 !== t &&
            (this.bounce.load(t.bounce),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            this.overlap.load(t.overlap));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BounceFactor = void 0);
      const o = i(3);
      class s extends o.ValueWithRandom {
        constructor() {
          super(), (this.random.minimumValue = 0.1), (this.value = 1);
        }
      }
      e.BounceFactor = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.CollisionsOverlap = void 0);
      e.CollisionsOverlap = class {
        constructor() {
          (this.enable = !0), (this.retries = 0);
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.retries && (this.retries = t.retries));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Twinkle = void 0);
      const o = i(206);
      e.Twinkle = class {
        constructor() {
          (this.lines = new o.TwinkleValues()),
            (this.particles = new o.TwinkleValues());
        }
        load(t) {
          void 0 !== t &&
            (this.lines.load(t.lines), this.particles.load(t.particles));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TwinkleValues = void 0);
      const o = i(2);
      e.TwinkleValues = class {
        constructor() {
          (this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.frequency && (this.frequency = t.frequency),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Life = void 0);
      const o = i(208),
        s = i(209);
      e.Life = class {
        constructor() {
          (this.count = 0),
            (this.delay = new o.LifeDelay()),
            (this.duration = new s.LifeDuration());
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.count && (this.count = t.count),
            this.delay.load(t.delay),
            this.duration.load(t.duration));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LifeDelay = void 0);
      const o = i(3);
      class s extends o.ValueWithRandom {
        constructor() {
          super(), (this.sync = !1);
        }
        load(t) {
          t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
        }
      }
      e.LifeDelay = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LifeDuration = void 0);
      const o = i(3);
      class s extends o.ValueWithRandom {
        constructor() {
          super(), (this.random.minimumValue = 1e-4), (this.sync = !1);
        }
        load(t) {
          void 0 !== t &&
            (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
        }
      }
      e.LifeDuration = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Destroy = void 0);
      const o = i(1),
        s = i(211);
      e.Destroy = class {
        constructor() {
          (this.mode = o.DestroyMode.none), (this.split = new s.Split());
        }
        load(t) {
          t &&
            (void 0 !== t.mode && (this.mode = t.mode),
            this.split.load(t.split));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Split = void 0);
      const o = i(212),
        s = i(213),
        n = i(0);
      e.Split = class {
        constructor() {
          (this.count = 1),
            (this.factor = new o.SplitFactor()),
            (this.rate = new s.SplitRate()),
            (this.sizeOffset = !0);
        }
        load(t) {
          t &&
            (void 0 !== t.count && (this.count = t.count),
            this.factor.load(t.factor),
            this.rate.load(t.rate),
            void 0 !== t.particles &&
              (this.particles = n.Utils.deepExtend({}, t.particles)),
            void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SplitFactor = void 0);
      const o = i(3);
      class s extends o.ValueWithRandom {
        constructor() {
          super(), (this.value = 3);
        }
      }
      e.SplitFactor = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SplitRate = void 0);
      const o = i(3);
      class s extends o.ValueWithRandom {
        constructor() {
          super(), (this.value = { min: 4, max: 9 });
        }
      }
      e.SplitRate = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Wobble = void 0);
      const o = i(0);
      e.Wobble = class {
        constructor() {
          (this.distance = 5), (this.enable = !1), (this.speed = 50);
        }
        load(t) {
          t &&
            (void 0 !== t.distance &&
              (this.distance = o.NumberUtils.setRangeValue(t.distance)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed &&
              (this.speed = o.NumberUtils.setRangeValue(t.speed)));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Tilt = void 0);
      const o = i(216),
        s = i(1),
        n = i(3);
      class r extends n.ValueWithRandom {
        constructor() {
          super(),
            (this.animation = new o.TiltAnimation()),
            (this.direction = s.TiltDirection.clockwise),
            (this.enable = !1),
            (this.value = 0);
        }
        load(t) {
          t &&
            (super.load(t),
            this.animation.load(t.animation),
            void 0 !== t.direction && (this.direction = t.direction),
            void 0 !== t.enable && (this.enable = t.enable));
        }
      }
      e.Tilt = r;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TiltAnimation = void 0);
      e.TiltAnimation = class {
        constructor() {
          (this.enable = !1), (this.speed = 0), (this.sync = !1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.sync && (this.sync = t.sync));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Roll = void 0);
      const o = i(0),
        s = i(2),
        n = i(218);
      e.Roll = class {
        constructor() {
          (this.darken = new n.RollLight()),
            (this.enable = !1),
            (this.enlighten = new n.RollLight()),
            (this.speed = 25);
        }
        load(t) {
          t &&
            (void 0 !== t.backColor &&
              (this.backColor = s.OptionsColor.create(
                this.backColor,
                t.backColor
              )),
            this.darken.load(t.darken),
            void 0 !== t.enable && (this.enable = t.enable),
            this.enlighten.load(t.enlighten),
            void 0 !== t.speed &&
              (this.speed = o.NumberUtils.setRangeValue(t.speed)));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RollLight = void 0);
      e.RollLight = class {
        constructor() {
          (this.enable = !1), (this.value = 0);
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.value && (this.value = t.value));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BackgroundMask = void 0);
      const o = i(220);
      e.BackgroundMask = class {
        constructor() {
          (this.composite = "destination-out"),
            (this.cover = new o.BackgroundMaskCover()),
            (this.enable = !1);
        }
        load(t) {
          if (void 0 !== t) {
            if (
              (void 0 !== t.composite && (this.composite = t.composite),
              void 0 !== t.cover)
            ) {
              const e = t.cover,
                i = "string" == typeof t.cover ? { color: t.cover } : t.cover;
              this.cover.load(void 0 !== e.color ? e : { color: i });
            }
            void 0 !== t.enable && (this.enable = t.enable);
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BackgroundMaskCover = void 0);
      const o = i(2);
      e.BackgroundMaskCover = class {
        constructor() {
          (this.color = new o.OptionsColor()), (this.opacity = 1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Background = void 0);
      const o = i(2);
      e.Background = class {
        constructor() {
          (this.color = new o.OptionsColor()),
            (this.color.value = ""),
            (this.image = ""),
            (this.position = ""),
            (this.repeat = ""),
            (this.size = ""),
            (this.opacity = 1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.image && (this.image = t.image),
            void 0 !== t.position && (this.position = t.position),
            void 0 !== t.repeat && (this.repeat = t.repeat),
            void 0 !== t.size && (this.size = t.size),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Infection = void 0);
      const o = i(223);
      e.Infection = class {
        constructor() {
          (this.cure = !1),
            (this.delay = 0),
            (this.enable = !1),
            (this.infections = 0),
            (this.stages = []);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.cure && (this.cure = t.cure),
            void 0 !== t.delay && (this.delay = t.delay),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.infections && (this.infections = t.infections),
            void 0 !== t.stages &&
              (this.stages = t.stages.map((t) => {
                const e = new o.InfectionStage();
                return e.load(t), e;
              })));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.InfectionStage = void 0);
      const o = i(2);
      e.InfectionStage = class {
        constructor() {
          (this.color = new o.OptionsColor()),
            (this.color.value = "#ff0000"),
            (this.radius = 0),
            (this.rate = 1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = o.OptionsColor.create(this.color, t.color)),
            (this.duration = t.duration),
            (this.infectedStage = t.infectedStage),
            void 0 !== t.radius && (this.radius = t.radius),
            void 0 !== t.rate && (this.rate = t.rate));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Theme = void 0);
      const o = i(0),
        s = i(225);
      e.Theme = class {
        constructor() {
          (this.name = ""), (this.default = new s.ThemeDefault());
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.name && (this.name = t.name),
            this.default.load(t.default),
            void 0 !== t.options &&
              (this.options = o.Utils.deepExtend({}, t.options)));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ThemeDefault = void 0);
      const o = i(6);
      e.ThemeDefault = class {
        constructor() {
          (this.mode = o.ThemeMode.any), (this.value = !1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.value && (this.value = t.value));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FullScreen = void 0);
      e.FullScreen = class {
        constructor() {
          (this.enable = !1), (this.zIndex = -1);
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.zIndex && (this.zIndex = t.zIndex));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Motion = void 0);
      const o = i(228);
      e.Motion = class {
        constructor() {
          (this.disable = !1), (this.reduce = new o.MotionReduce());
        }
        load(t) {
          t &&
            (void 0 !== t.disable && (this.disable = t.disable),
            this.reduce.load(t.reduce));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.MotionReduce = void 0);
      e.MotionReduce = class {
        constructor() {
          (this.factor = 4), (this.value = !0);
        }
        load(t) {
          t &&
            (void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.value && (this.value = t.value));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ManualParticle = void 0);
      const o = i(0);
      e.ManualParticle = class {
        load(t) {
          var e, i;
          t &&
            (void 0 !== t.position &&
              (this.position = {
                x: null !== (e = t.position.x) && void 0 !== e ? e : 50,
                y: null !== (i = t.position.y) && void 0 !== i ? i : 50,
              }),
            void 0 !== t.options &&
              (this.options = o.Utils.deepExtend({}, t.options)));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Responsive = void 0);
      const o = i(0);
      e.Responsive = class {
        constructor() {
          (this.maxWidth = 1 / 0), (this.options = {});
        }
        load(t) {
          t &&
            (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth),
            void 0 !== t.options &&
              (this.options = o.Utils.deepExtend({}, t.options)));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.initPjs = void 0);
      e.initPjs = (t) => {
        const e = (e, i) => t.load(e, i);
        (e.load = (e, i, o) => {
          t.loadJSON(e, i).then((t) => {
            t && o(t);
          });
        }),
          (e.setOnClickHandler = (e) => {
            t.setOnClickHandler(e);
          });
        return { particlesJS: e, pJSDom: t.dom() };
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Main = void 0);
      const o = i(233),
        s = i(265),
        n = i(270),
        r = i(276);
      class a extends o.MainSlim {
        constructor() {
          super(),
            this.addPlugin(s.AbsorbersPlugin),
            this.addPlugin(n.EmittersPlugin),
            this.addPlugin(r.PolygonMaskPlugin);
        }
      }
      e.Main = a;
    },
    function (t, e, i) {
      "use strict";
      var o,
        s =
          (this && this.__awaiter) ||
          function (t, e, i, o) {
            return new (i || (i = Promise))(function (s, n) {
              function r(t) {
                try {
                  l(o.next(t));
                } catch (t) {
                  n(t);
                }
              }
              function a(t) {
                try {
                  l(o.throw(t));
                } catch (t) {
                  n(t);
                }
              }
              function l(t) {
                var e;
                t.done
                  ? s(t.value)
                  : ((e = t.value),
                    e instanceof i
                      ? e
                      : new i(function (t) {
                          t(e);
                        })).then(r, a);
              }
              l((o = o.apply(t, e || [])).next());
            });
          },
        n =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, s) {
            if ("m" === o)
              throw new TypeError("Private method is not writable");
            if ("a" === o && !s)
              throw new TypeError(
                "Private accessor was defined without a setter"
              );
            if ("function" == typeof e ? t !== e || !s : !e.has(t))
              throw new TypeError(
                "Cannot write private member to an object whose class did not declare it"
              );
            return (
              "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i
            );
          },
        r =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ("a" === i && !o)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === i
              ? o
              : "a" === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.MainSlim = void 0);
      const a = i(234),
        l = i(235),
        c = i(236),
        u = i(0),
        d = i(1),
        h = i(237),
        v = i(238),
        p = i(239),
        f = i(240),
        y = i(241),
        b = i(242);
      (e.MainSlim = class {
        constructor() {
          o.set(this, void 0), n(this, o, !1, "f");
          const t = new a.SquareDrawer(),
            e = new l.TextDrawer(),
            i = new c.ImageDrawer();
          u.Plugins.addShapeDrawer(d.ShapeType.line, new h.LineDrawer()),
            u.Plugins.addShapeDrawer(d.ShapeType.circle, new v.CircleDrawer()),
            u.Plugins.addShapeDrawer(d.ShapeType.edge, t),
            u.Plugins.addShapeDrawer(d.ShapeType.square, t),
            u.Plugins.addShapeDrawer(
              d.ShapeType.triangle,
              new p.TriangleDrawer()
            ),
            u.Plugins.addShapeDrawer(d.ShapeType.star, new f.StarDrawer()),
            u.Plugins.addShapeDrawer(
              d.ShapeType.polygon,
              new y.PolygonDrawer()
            ),
            u.Plugins.addShapeDrawer(d.ShapeType.char, e),
            u.Plugins.addShapeDrawer(d.ShapeType.character, e),
            u.Plugins.addShapeDrawer(d.ShapeType.image, i),
            u.Plugins.addShapeDrawer(d.ShapeType.images, i);
        }
        init() {
          r(this, o, "f") || n(this, o, !0, "f");
        }
        loadFromArray(t, e, i) {
          return s(this, void 0, void 0, function* () {
            return b.Loader.load(t, e, i);
          });
        }
        load(t, e) {
          return s(this, void 0, void 0, function* () {
            return b.Loader.load(t, e);
          });
        }
        set(t, e, i) {
          return s(this, void 0, void 0, function* () {
            return b.Loader.set(t, e, i);
          });
        }
        loadJSON(t, e, i) {
          return b.Loader.loadJSON(t, e, i);
        }
        setJSON(t, e, i, o) {
          return s(this, void 0, void 0, function* () {
            return b.Loader.setJSON(t, e, i, o);
          });
        }
        setOnClickHandler(t) {
          b.Loader.setOnClickHandler(t);
        }
        dom() {
          return b.Loader.dom();
        }
        domItem(t) {
          return b.Loader.domItem(t);
        }
        addShape(t, e, i, o, s) {
          let n;
          (n =
            "function" == typeof e
              ? { afterEffect: o, destroy: s, draw: e, init: i }
              : e),
            u.Plugins.addShapeDrawer(t, n);
        }
        addPreset(t, e, i = !1) {
          u.Plugins.addPreset(t, e, i);
        }
        addPlugin(t) {
          u.Plugins.addPlugin(t);
        }
        addPathGenerator(t, e) {
          u.Plugins.addPathGenerator(t, e);
        }
      }),
        (o = new WeakMap());
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SquareDrawer = void 0);
      e.SquareDrawer = class {
        getSidesCount() {
          return 4;
        }
        draw(t, e, i) {
          t.rect(-i, -i, 2 * i, 2 * i);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      var o =
        (this && this.__awaiter) ||
        function (t, e, i, o) {
          return new (i || (i = Promise))(function (s, n) {
            function r(t) {
              try {
                l(o.next(t));
              } catch (t) {
                n(t);
              }
            }
            function a(t) {
              try {
                l(o.throw(t));
              } catch (t) {
                n(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(r, a);
            }
            l((o = o.apply(t, e || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TextDrawer = void 0);
      const s = i(0),
        n = i(1);
      e.TextDrawer = class {
        getSidesCount() {
          return 12;
        }
        init(t) {
          var e;
          return o(this, void 0, void 0, function* () {
            const i = t.actualOptions;
            if (
              s.Utils.isInArray(n.ShapeType.char, i.particles.shape.type) ||
              s.Utils.isInArray(n.ShapeType.character, i.particles.shape.type)
            ) {
              const t =
                null !==
                  (e = i.particles.shape.options[n.ShapeType.character]) &&
                void 0 !== e
                  ? e
                  : i.particles.shape.options[n.ShapeType.char];
              if (t instanceof Array)
                for (const e of t) yield s.Utils.loadFont(e);
              else void 0 !== t && (yield s.Utils.loadFont(t));
            }
          });
        }
        draw(t, e, i, o) {
          const n = e.shapeData;
          if (void 0 === n) return;
          const r = n.value;
          if (void 0 === r) return;
          const a = e;
          void 0 === a.text &&
            (a.text =
              r instanceof Array
                ? s.Utils.itemFromArray(r, e.randomIndexData)
                : r);
          const l = a.text,
            c = n.style,
            u = n.weight,
            d = 2 * Math.round(i),
            h = n.font,
            v = e.fill,
            p = (l.length * i) / 2;
          t.font = `${c} ${u} ${d}px "${h}"`;
          const f = { x: -p, y: i / 2 };
          (t.globalAlpha = o),
            v ? t.fillText(l, f.x, f.y) : t.strokeText(l, f.x, f.y),
            (t.globalAlpha = 1);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      var o =
        (this && this.__awaiter) ||
        function (t, e, i, o) {
          return new (i || (i = Promise))(function (s, n) {
            function r(t) {
              try {
                l(o.next(t));
              } catch (t) {
                n(t);
              }
            }
            function a(t) {
              try {
                l(o.throw(t));
              } catch (t) {
                n(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(r, a);
            }
            l((o = o.apply(t, e || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ImageDrawer = void 0);
      const s = i(0),
        n = i(1);
      e.ImageDrawer = class {
        constructor() {
          this.images = [];
        }
        getSidesCount() {
          return 12;
        }
        getImages(t) {
          const e = this.images.filter((e) => e.id === t.id);
          return e.length
            ? e[0]
            : (this.images.push({ id: t.id, images: [] }), this.getImages(t));
        }
        addImage(t, e) {
          const i = this.getImages(t);
          null == i || i.images.push(e);
        }
        init(t) {
          var e;
          return o(this, void 0, void 0, function* () {
            const i = t.actualOptions.particles.shape;
            if (
              !s.Utils.isInArray(n.ShapeType.image, i.type) &&
              !s.Utils.isInArray(n.ShapeType.images, i.type)
            )
              return;
            const o =
              null !== (e = i.options[n.ShapeType.images]) && void 0 !== e
                ? e
                : i.options[n.ShapeType.image];
            if (o instanceof Array)
              for (const e of o) yield this.loadImageShape(t, e);
            else yield this.loadImageShape(t, o);
          });
        }
        destroy() {
          this.images = [];
        }
        loadImageShape(t, e) {
          return o(this, void 0, void 0, function* () {
            try {
              const i = e.replaceColor
                ? yield s.Utils.downloadSvgImage(e.src)
                : yield s.Utils.loadImage(e.src);
              i && this.addImage(t, i);
            } catch (t) {
              console.warn(`tsParticles error - ${e.src} not found`);
            }
          });
        }
        draw(t, e, i, o) {
          var s, n;
          if (!t) return;
          const r = e.image,
            a =
              null === (s = null == r ? void 0 : r.data) || void 0 === s
                ? void 0
                : s.element;
          if (!a) return;
          const l =
              null !== (n = null == r ? void 0 : r.ratio) && void 0 !== n
                ? n
                : 1,
            c = { x: -i, y: -i };
          ((null == r ? void 0 : r.data.svgData) &&
            (null == r ? void 0 : r.replaceColor)) ||
            (t.globalAlpha = o),
            t.drawImage(a, c.x, c.y, 2 * i, (2 * i) / l),
            ((null == r ? void 0 : r.data.svgData) &&
              (null == r ? void 0 : r.replaceColor)) ||
              (t.globalAlpha = 1);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LineDrawer = void 0);
      e.LineDrawer = class {
        getSidesCount() {
          return 1;
        }
        draw(t, e, i) {
          t.moveTo(-i / 2, 0), t.lineTo(i / 2, 0);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.CircleDrawer = void 0);
      e.CircleDrawer = class {
        getSidesCount() {
          return 12;
        }
        draw(t, e, i) {
          t.arc(0, 0, i, 0, 2 * Math.PI, !1);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TriangleDrawer = void 0);
      const o = i(51);
      class s extends o.PolygonDrawerBase {
        getSidesCount() {
          return 3;
        }
        getSidesData(t, e) {
          return { count: { denominator: 2, numerator: 3 }, length: 2 * e };
        }
        getCenter(t, e) {
          return { x: -e, y: e / 1.66 };
        }
      }
      e.TriangleDrawer = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.StarDrawer = void 0);
      e.StarDrawer = class {
        getSidesCount(t) {
          var e, i;
          const o = t.shapeData;
          return null !==
            (i =
              null !== (e = null == o ? void 0 : o.sides) && void 0 !== e
                ? e
                : null == o
                ? void 0
                : o.nb_sides) && void 0 !== i
            ? i
            : 5;
        }
        draw(t, e, i) {
          var o;
          const s = e.shapeData,
            n = this.getSidesCount(e),
            r =
              null !== (o = null == s ? void 0 : s.inset) && void 0 !== o
                ? o
                : 2;
          t.moveTo(0, 0 - i);
          for (let e = 0; e < n; e++)
            t.rotate(Math.PI / n),
              t.lineTo(0, 0 - i * r),
              t.rotate(Math.PI / n),
              t.lineTo(0, 0 - i);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PolygonDrawer = void 0);
      const o = i(51);
      class s extends o.PolygonDrawerBase {
        getSidesData(t, e) {
          var i, o;
          const s = t.shapeData,
            n =
              null !==
                (o =
                  null !== (i = null == s ? void 0 : s.sides) && void 0 !== i
                    ? i
                    : null == s
                    ? void 0
                    : s.nb_sides) && void 0 !== o
                ? o
                : 5;
          return {
            count: { denominator: 1, numerator: n },
            length: (2.66 * e) / (n / 3),
          };
        }
        getCenter(t, e) {
          return { x: -e / (this.getSidesCount(t) / 3.5), y: -e / 0.76 };
        }
      }
      e.PolygonDrawer = s;
    },
    function (t, e, i) {
      "use strict";
      var o =
        (this && this.__awaiter) ||
        function (t, e, i, o) {
          return new (i || (i = Promise))(function (s, n) {
            function r(t) {
              try {
                l(o.next(t));
              } catch (t) {
                n(t);
              }
            }
            function a(t) {
              try {
                l(o.throw(t));
              } catch (t) {
                n(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(r, a);
            }
            l((o = o.apply(t, e || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Loader = void 0);
      const s = i(52),
        n = i(0),
        r = [];
      function a(t) {
        console.error("Error tsParticles - fetch status: " + t),
          console.error("Error tsParticles - File config not found");
      }
      class l {
        static dom() {
          return r;
        }
        static domItem(t) {
          const e = l.dom(),
            i = e[t];
          if (i && !i.destroyed) return i;
          e.splice(t, 1);
        }
        static load(t, e, i) {
          return o(this, void 0, void 0, function* () {
            let o = document.getElementById(t);
            return (
              o ||
                ((o = document.createElement("div")),
                (o.id = t),
                document.append(o)),
              l.set(t, o, e, i)
            );
          });
        }
        static set(t, e, i, r) {
          return o(this, void 0, void 0, function* () {
            const o = i instanceof Array ? n.Utils.itemFromArray(i, r) : i,
              a = l.dom(),
              c = a.findIndex((e) => e.id === t);
            if (c >= 0) {
              const t = l.domItem(c);
              t && !t.destroyed && (t.destroy(), a.splice(c, 1));
            }
            let u, d;
            if ("canvas" === e.tagName.toLowerCase()) (u = e), (d = !1);
            else {
              const t = e.getElementsByTagName("canvas");
              t.length
                ? ((u = t[0]),
                  u.className || (u.className = n.Constants.canvasClass),
                  (d = !1))
                : ((d = !0),
                  (u = document.createElement("canvas")),
                  (u.className = n.Constants.canvasClass),
                  (u.style.width = "100%"),
                  (u.style.height = "100%"),
                  e.appendChild(u));
            }
            const h = new s.Container(t, o);
            return (
              c >= 0 ? a.splice(c, 0, h) : a.push(h),
              h.canvas.loadCanvas(u, d),
              yield h.start(),
              h
            );
          });
        }
        static loadJSON(t, e, i) {
          return o(this, void 0, void 0, function* () {
            const o = e instanceof Array ? n.Utils.itemFromArray(e, i) : e,
              s = yield fetch(o);
            if (s.ok) return l.load(t, yield s.json());
            a(s.status);
          });
        }
        static setJSON(t, e, i, s) {
          return o(this, void 0, void 0, function* () {
            const o = i instanceof Array ? n.Utils.itemFromArray(i, s) : i,
              r = yield fetch(o);
            if (r.ok) {
              const i = yield r.json();
              return l.set(t, e, i);
            }
            a(r.status);
          });
        }
        static setOnClickHandler(t) {
          const e = l.dom();
          if (0 === e.length)
            throw new Error(
              "Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()"
            );
          for (const i of e) i.addClickHandler(t);
        }
      }
      e.Loader = l;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Canvas = void 0);
      const o = i(0);
      e.Canvas = class {
        constructor(t) {
          (this.container = t),
            (this.size = { height: 0, width: 0 }),
            (this.context = null),
            (this.generatedCanvas = !1);
        }
        init() {
          var t, e, i, s, n, r, a, l, c, u, d, h;
          const v = this.container.actualOptions,
            p = this.element;
          p &&
            (v.fullScreen.enable
              ? ((this.originalStyle = o.Utils.deepExtend({}, p.style)),
                (p.style.position = "fixed"),
                (p.style.zIndex = v.fullScreen.zIndex.toString(10)),
                (p.style.top = "0"),
                (p.style.left = "0"),
                (p.style.width = "100%"),
                (p.style.height = "100%"))
              : ((p.style.position =
                  null !==
                    (e =
                      null === (t = this.originalStyle) || void 0 === t
                        ? void 0
                        : t.position) && void 0 !== e
                    ? e
                    : ""),
                (p.style.zIndex =
                  null !==
                    (s =
                      null === (i = this.originalStyle) || void 0 === i
                        ? void 0
                        : i.zIndex) && void 0 !== s
                    ? s
                    : ""),
                (p.style.top =
                  null !==
                    (r =
                      null === (n = this.originalStyle) || void 0 === n
                        ? void 0
                        : n.top) && void 0 !== r
                    ? r
                    : ""),
                (p.style.left =
                  null !==
                    (l =
                      null === (a = this.originalStyle) || void 0 === a
                        ? void 0
                        : a.left) && void 0 !== l
                    ? l
                    : ""),
                (p.style.width =
                  null !==
                    (u =
                      null === (c = this.originalStyle) || void 0 === c
                        ? void 0
                        : c.width) && void 0 !== u
                    ? u
                    : ""),
                (p.style.height =
                  null !==
                    (h =
                      null === (d = this.originalStyle) || void 0 === d
                        ? void 0
                        : d.height) && void 0 !== h
                    ? h
                    : ""))),
            this.resize();
          const f = v.backgroundMask.cover,
            y = f.color,
            b = v.particles.move.trail,
            m = o.ColorUtils.colorToRgb(y);
          (this.coverColor =
            void 0 !== m ? { r: m.r, g: m.g, b: m.b, a: f.opacity } : void 0),
            (this.trailFillColor = o.ColorUtils.colorToRgb(b.fillColor)),
            this.initBackground(),
            this.paint();
        }
        loadCanvas(t, e) {
          var i;
          t.className || (t.className = o.Constants.canvasClass),
            this.generatedCanvas &&
              (null === (i = this.element) || void 0 === i || i.remove()),
            (this.generatedCanvas = null != e ? e : this.generatedCanvas),
            (this.element = t),
            (this.originalStyle = o.Utils.deepExtend({}, this.element.style)),
            (this.size.height = t.offsetHeight),
            (this.size.width = t.offsetWidth),
            (this.context = this.element.getContext("2d")),
            this.container.retina.init(),
            this.initBackground();
        }
        destroy() {
          var t;
          this.generatedCanvas &&
            (null === (t = this.element) || void 0 === t || t.remove()),
            this.context && o.CanvasUtils.clear(this.context, this.size);
        }
        paint() {
          const t = this.container.actualOptions;
          this.context &&
            (t.backgroundMask.enable &&
            t.backgroundMask.cover &&
            this.coverColor
              ? (o.CanvasUtils.clear(this.context, this.size),
                this.paintBase(
                  o.ColorUtils.getStyleFromRgb(
                    this.coverColor,
                    this.coverColor.a
                  )
                ))
              : this.paintBase());
        }
        clear() {
          const t = this.container.actualOptions,
            e = t.particles.move.trail;
          t.backgroundMask.enable
            ? this.paint()
            : e.enable && e.length > 0 && this.trailFillColor
            ? this.paintBase(
                o.ColorUtils.getStyleFromRgb(this.trailFillColor, 1 / e.length)
              )
            : this.context && o.CanvasUtils.clear(this.context, this.size);
        }
        windowResize() {
          if (!this.element) return;
          const t = this.container;
          this.resize(),
            t.actualOptions.setResponsive(
              this.size.width,
              t.retina.pixelRatio,
              t.options
            ),
            t.particles.setDensity();
          for (const [, e] of t.plugins) void 0 !== e.resize && e.resize();
        }
        resize() {
          if (!this.element) return;
          const t = this.container,
            e = t.retina.pixelRatio,
            i = t.canvas.size,
            o = i.width,
            s = i.height;
          (i.width = this.element.offsetWidth * e),
            (i.height = this.element.offsetHeight * e),
            (this.element.width = i.width),
            (this.element.height = i.height),
            this.container.started &&
              (this.resizeFactor = {
                width: i.width / o,
                height: i.height / s,
              });
        }
        drawConnectLine(t, e) {
          var i;
          const s = this.context;
          if (!s) return;
          const n = this.lineStyle(t, e);
          if (!n) return;
          const r = t.getPosition(),
            a = e.getPosition();
          o.CanvasUtils.drawConnectLine(
            s,
            null !== (i = t.linksWidth) && void 0 !== i
              ? i
              : this.container.retina.linksWidth,
            n,
            r,
            a
          );
        }
        drawGrabLine(t, e, i, s) {
          var n;
          const r = this.container,
            a = r.canvas.context;
          if (!a) return;
          const l = t.getPosition();
          o.CanvasUtils.drawGrabLine(
            a,
            null !== (n = t.linksWidth) && void 0 !== n
              ? n
              : r.retina.linksWidth,
            l,
            s,
            e,
            i
          );
        }
        drawParticleShadow(t, e) {
          this.context &&
            o.CanvasUtils.drawParticleShadow(
              this.container,
              this.context,
              t,
              e
            );
        }
        drawLinkTriangle(t, e, i) {
          var s;
          const n = this.container,
            r = n.actualOptions,
            a = e.destination,
            l = i.destination,
            c = t.options.links.triangles,
            u =
              null !== (s = c.opacity) && void 0 !== s
                ? s
                : (e.opacity + i.opacity) / 2;
          if (u <= 0) return;
          const d = t.getPosition(),
            h = a.getPosition(),
            v = l.getPosition(),
            p = this.context;
          if (!p) return;
          if (
            o.NumberUtils.getDistance(d, h) > n.retina.linksDistance ||
            o.NumberUtils.getDistance(v, h) > n.retina.linksDistance ||
            o.NumberUtils.getDistance(v, d) > n.retina.linksDistance
          )
            return;
          let f = o.ColorUtils.colorToRgb(c.color);
          if (!f) {
            const e = t.options.links,
              i =
                void 0 !== e.id
                  ? n.particles.linksColors.get(e.id)
                  : n.particles.linksColor;
            f = o.ColorUtils.getLinkColor(t, a, i);
          }
          f &&
            o.CanvasUtils.drawLinkTriangle(
              p,
              d,
              h,
              v,
              r.backgroundMask.enable,
              r.backgroundMask.composite,
              f,
              u
            );
        }
        drawLinkLine(t, e) {
          var i, s;
          const n = this.container,
            r = n.actualOptions,
            a = e.destination;
          let l = e.opacity;
          const c = t.getPosition(),
            u = a.getPosition(),
            d = this.context;
          if (!d) return;
          let h;
          const v = t.options.twinkle.lines;
          if (v.enable) {
            const t = v.frequency,
              e = o.ColorUtils.colorToRgb(v.color);
            Math.random() < t && void 0 !== e && ((h = e), (l = v.opacity));
          }
          if (!h) {
            const e = t.options.links,
              i =
                void 0 !== e.id
                  ? n.particles.linksColors.get(e.id)
                  : n.particles.linksColor;
            h = o.ColorUtils.getLinkColor(t, a, i);
          }
          if (!h) return;
          const p =
              null !== (i = t.linksWidth) && void 0 !== i
                ? i
                : n.retina.linksWidth,
            f =
              null !== (s = t.linksDistance) && void 0 !== s
                ? s
                : n.retina.linksDistance;
          o.CanvasUtils.drawLinkLine(
            d,
            p,
            c,
            u,
            f,
            n.canvas.size,
            t.options.links.warp,
            r.backgroundMask.enable,
            r.backgroundMask.composite,
            h,
            l,
            t.options.links.shadow
          );
        }
        drawParticle(t, e) {
          var i, s, n, r;
          if (
            !1 ===
              (null === (i = t.image) || void 0 === i ? void 0 : i.loaded) ||
            t.spawning ||
            t.destroyed
          )
            return;
          const a = t.getFillColor(),
            l = null !== (s = t.getStrokeColor()) && void 0 !== s ? s : a;
          if (!a && !l) return;
          const c = this.container.actualOptions,
            u = t.options.twinkle.particles,
            d = u.frequency,
            h = o.ColorUtils.colorToRgb(u.color),
            v = u.enable && Math.random() < d,
            p = t.getRadius(),
            f = v
              ? u.opacity
              : null !== (n = t.bubble.opacity) && void 0 !== n
              ? n
              : t.opacity.value,
            y = t.infecter.infectionStage,
            b = c.infection.stages,
            m = void 0 !== y ? b[y].color : void 0,
            g = o.ColorUtils.colorToRgb(m),
            w =
              v && void 0 !== h
                ? h
                : null != g
                ? g
                : a
                ? o.ColorUtils.hslToRgb(a)
                : void 0,
            M =
              v && void 0 !== h
                ? h
                : null != g
                ? g
                : l
                ? o.ColorUtils.hslToRgb(l)
                : void 0,
            _ = void 0 !== w ? o.ColorUtils.getStyleFromRgb(w, f) : void 0;
          if (!this.context || (!_ && !M)) return;
          const P =
            void 0 !== M
              ? o.ColorUtils.getStyleFromRgb(
                  M,
                  null !== (r = t.stroke.opacity) && void 0 !== r ? r : f
                )
              : _;
          this.drawParticleLinks(t),
            p > 0 &&
              o.CanvasUtils.drawParticle(
                this.container,
                this.context,
                t,
                e,
                _,
                P,
                c.backgroundMask.enable,
                c.backgroundMask.composite,
                p,
                f,
                t.options.shadow
              );
        }
        drawParticleLinks(t) {
          if (!this.context) return;
          const e = this.container,
            i = e.particles,
            o = t.options;
          if (t.links.length > 0) {
            this.context.save();
            const s = t.links.filter(
              (i) =>
                e.particles.getLinkFrequency(t, i.destination) <=
                o.links.frequency
            );
            for (const n of s) {
              const r = n.destination;
              if (o.links.triangles.enable) {
                const a = s.map((t) => t.destination),
                  l = r.links.filter(
                    (t) =>
                      e.particles.getLinkFrequency(r, t.destination) <=
                        r.options.links.frequency &&
                      a.indexOf(t.destination) >= 0
                  );
                if (l.length)
                  for (const e of l) {
                    const s = e.destination;
                    i.getTriangleFrequency(t, r, s) >
                      o.links.triangles.frequency ||
                      this.drawLinkTriangle(t, n, e);
                  }
              }
              n.opacity > 0 &&
                e.retina.linksWidth > 0 &&
                this.drawLinkLine(t, n);
            }
            this.context.restore();
          }
        }
        drawPlugin(t, e) {
          this.context && o.CanvasUtils.drawPlugin(this.context, t, e);
        }
        drawLight(t) {
          this.context &&
            o.CanvasUtils.drawLight(this.container, this.context, t);
        }
        initBackground() {
          const t = this.container.actualOptions.background,
            e = this.element,
            i = null == e ? void 0 : e.style;
          if (i) {
            if (t.color) {
              const e = o.ColorUtils.colorToRgb(t.color);
              i.backgroundColor = e
                ? o.ColorUtils.getStyleFromRgb(e, t.opacity)
                : "";
            } else i.backgroundColor = "";
            (i.backgroundImage = t.image || ""),
              (i.backgroundPosition = t.position || ""),
              (i.backgroundRepeat = t.repeat || ""),
              (i.backgroundSize = t.size || "");
          }
        }
        paintBase(t) {
          this.context && o.CanvasUtils.paintBase(this.context, this.size, t);
        }
        lineStyle(t, e) {
          if (!this.context) return;
          const i = this.container.actualOptions.interactivity.modes.connect;
          return o.CanvasUtils.gradient(this.context, t, e, i.links.opacity);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Particles = void 0);
      const o = i(245),
        s = i(0),
        n = i(249),
        r = i(26);
      e.Particles = class {
        constructor(t) {
          (this.container = t),
            (this.nextId = 0),
            (this.array = []),
            (this.limit = 0),
            (this.linksFreq = new Map()),
            (this.trianglesFreq = new Map()),
            (this.interactionManager = new n.InteractionManager(t));
          const e = this.container.canvas.size;
          (this.linksColors = new Map()),
            (this.quadTree = new s.QuadTree(
              new s.Rectangle(
                -e.width / 4,
                -e.height / 4,
                (3 * e.width) / 2,
                (3 * e.height) / 2
              ),
              4
            ));
        }
        get count() {
          return this.array.length;
        }
        init() {
          const t = this.container,
            e = t.actualOptions;
          (this.linksFreq = new Map()), (this.trianglesFreq = new Map());
          let i = !1;
          for (const i of e.manualParticles) {
            const e = i.position
              ? {
                  x: (i.position.x * t.canvas.size.width) / 100,
                  y: (i.position.y * t.canvas.size.height) / 100,
                }
              : void 0;
            this.addParticle(e, i.options);
          }
          for (const [, e] of t.plugins)
            if (
              (void 0 !== e.particlesInitialization &&
                (i = e.particlesInitialization()),
              i)
            )
              break;
          if (!i)
            for (let t = this.count; t < e.particles.number.value; t++)
              this.addParticle();
          if (e.infection.enable)
            for (let t = 0; t < e.infection.infections; t++) {
              const t = this.array.filter(
                (t) => void 0 === t.infecter.infectionStage
              );
              s.Utils.itemFromArray(t).infecter.startInfection(0);
            }
          this.interactionManager.init(), t.pathGenerator.init();
        }
        redraw() {
          this.clear(), this.init(), this.draw({ value: 0, factor: 0 });
        }
        removeAt(t, e, i) {
          if (t >= 0 && t <= this.count)
            for (const o of this.array.splice(t, null != e ? e : 1))
              o.destroy(i);
        }
        remove(t, e) {
          this.removeAt(this.array.indexOf(t), void 0, e);
        }
        update(t) {
          const e = this.container,
            i = [];
          e.pathGenerator.update();
          for (const [, i] of e.plugins) void 0 !== i.update && i.update(t);
          for (const e of this.array) {
            const o = this.container.canvas.resizeFactor;
            o && ((e.position.x *= o.width), (e.position.y *= o.height)),
              e.move(t),
              e.destroyed
                ? i.push(e)
                : this.quadTree.insert(new s.Point(e.getPosition(), e));
          }
          for (const t of i) this.remove(t);
          this.interactionManager.externalInteract(t);
          for (const e of this.container.particles.array)
            e.update(t),
              e.destroyed ||
                e.spawning ||
                this.interactionManager.particlesInteract(e, t);
          delete e.canvas.resizeFactor;
        }
        draw(t) {
          const e = this.container;
          e.canvas.clear();
          const i = this.container.canvas.size;
          (this.quadTree = new s.QuadTree(
            new s.Rectangle(
              -i.width / 4,
              -i.height / 4,
              (3 * i.width) / 2,
              (3 * i.height) / 2
            ),
            4
          )),
            this.update(t);
          for (const [, i] of e.plugins) e.canvas.drawPlugin(i, t);
          for (const e of this.array) e.draw(t);
        }
        clear() {
          this.array = [];
        }
        push(t, e, i) {
          const o = this.container,
            s = o.actualOptions.particles.number.limit * o.density;
          if (((this.pushing = !0), s > 0)) {
            const e = this.count + t - s;
            e > 0 && this.removeQuantity(e);
          }
          for (let o = 0; o < t; o++)
            this.addParticle(null == e ? void 0 : e.position, i);
          this.pushing = !1;
        }
        addParticle(t, e) {
          return this.pushParticle(t, e);
        }
        addSplitParticle(t) {
          const e = t.options.destroy.split,
            i = new r.ParticlesOptions();
          i.load(t.options);
          const o = s.NumberUtils.getRangeValue(e.factor.value);
          i.color.load({ value: { hsl: t.getFillColor() } }),
            "number" == typeof i.size.value
              ? (i.size.value /= o)
              : ((i.size.value.min /= o), (i.size.value.max /= o)),
            i.load(e.particles);
          const n = e.sizeOffset
              ? s.NumberUtils.setRangeValue(-t.size.value, t.size.value)
              : 0,
            a = {
              x: t.position.x + s.NumberUtils.randomInRange(n),
              y: t.position.y + s.NumberUtils.randomInRange(n),
            };
          return this.pushParticle(
            a,
            i,
            (e) =>
              !(e.size.value < 0.5) &&
              ((e.velocity.length = s.NumberUtils.randomInRange(
                s.NumberUtils.setRangeValue(
                  t.velocity.length,
                  e.velocity.length
                )
              )),
              (e.splitCount = t.splitCount + 1),
              (e.unbreakable = !0),
              setTimeout(() => {
                e.unbreakable = !1;
              }, 500),
              !0)
          );
        }
        removeQuantity(t) {
          this.removeAt(0, t);
        }
        getLinkFrequency(t, e) {
          const i = `${Math.min(t.id, e.id)}_${Math.max(t.id, e.id)}`;
          let o = this.linksFreq.get(i);
          return (
            void 0 === o && ((o = Math.random()), this.linksFreq.set(i, o)), o
          );
        }
        getTriangleFrequency(t, e, i) {
          let [o, s, n] = [t.id, e.id, i.id];
          o > s && ([s, o] = [o, s]),
            s > n && ([n, s] = [s, n]),
            o > n && ([n, o] = [o, n]);
          const r = `${o}_${s}_${n}`;
          let a = this.trianglesFreq.get(r);
          return (
            void 0 === a && ((a = Math.random()), this.trianglesFreq.set(r, a)),
            a
          );
        }
        setDensity() {
          this.applyDensity(this.container.actualOptions.particles);
        }
        applyDensity(t) {
          var e;
          if (
            !(null === (e = t.number.density) || void 0 === e
              ? void 0
              : e.enable)
          )
            return;
          const i = t.number,
            o = this.initDensityFactor(i.density),
            s = i.value,
            n = i.limit > 0 ? i.limit : s,
            r = Math.min(s, n) * o,
            a = this.count;
          (this.limit = i.limit * o),
            a < r
              ? this.push(Math.abs(r - a), void 0, t)
              : a > r && this.removeQuantity(a - r);
        }
        initDensityFactor(t) {
          const e = this.container;
          if (!e.canvas.element || !t.enable) return 1;
          const i = e.canvas.element,
            o = e.retina.pixelRatio;
          return (i.width * i.height) / (t.factor * Math.pow(o, 2) * t.area);
        }
        pushParticle(t, e, i) {
          try {
            const s = new o.Particle(this.nextId, this.container, t, e);
            let n = !0;
            if ((i && (n = i(s)), !n)) return;
            return this.array.push(s), this.nextId++, s;
          } catch (t) {
            return void console.warn("error adding particle: " + t);
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Particle = void 0);
      const o = i(246),
        s = i(26),
        n = i(49),
        r = i(1),
        a = i(0),
        l = i(247),
        c = i(248),
        u = i(7);
      e.Particle = class {
        constructor(t, e, i, d) {
          var h, v, p, f, y, b, m, g, w;
          (this.id = t),
            (this.container = e),
            (this.links = []),
            (this.fill = !0),
            (this.close = !0),
            (this.lastPathTime = 0),
            (this.destroyed = !1),
            (this.unbreakable = !1),
            (this.splitCount = 0),
            (this.misplaced = !1),
            (this.loops = { opacity: 0, size: 0 });
          const M = e.retina.pixelRatio,
            _ = e.actualOptions,
            P = new s.ParticlesOptions();
          P.load(_.particles);
          const x = P.shape.type,
            O = P.reduceDuplicates;
          if (
            ((this.shape =
              x instanceof Array ? a.Utils.itemFromArray(x, this.id, O) : x),
            null == d ? void 0 : d.shape)
          ) {
            if (d.shape.type) {
              const t = d.shape.type;
              this.shape =
                t instanceof Array ? a.Utils.itemFromArray(t, this.id, O) : t;
            }
            const t = new n.Shape();
            if ((t.load(d.shape), this.shape)) {
              const e = t.options[this.shape];
              e &&
                (this.shapeData = a.Utils.deepExtend(
                  {},
                  e instanceof Array ? a.Utils.itemFromArray(e, this.id, O) : e
                ));
            }
          } else {
            const t = P.shape.options[this.shape];
            t &&
              (this.shapeData = a.Utils.deepExtend(
                {},
                t instanceof Array ? a.Utils.itemFromArray(t, this.id, O) : t
              ));
          }
          void 0 !== d && P.load(d),
            void 0 !==
              (null === (h = this.shapeData) || void 0 === h
                ? void 0
                : h.particles) &&
              P.load(
                null === (v = this.shapeData) || void 0 === v
                  ? void 0
                  : v.particles
              ),
            (this.fill =
              null !==
                (f =
                  null === (p = this.shapeData) || void 0 === p
                    ? void 0
                    : p.fill) && void 0 !== f
                ? f
                : this.fill),
            (this.close =
              null !==
                (b =
                  null === (y = this.shapeData) || void 0 === y
                    ? void 0
                    : y.close) && void 0 !== b
                ? b
                : this.close),
            (this.options = P),
            (this.pathDelay =
              1e3 * a.NumberUtils.getValue(this.options.move.path.delay)),
            (this.wobbleDistance = 0),
            e.retina.initParticle(this);
          const C = this.options.color,
            k = this.options.size,
            S = a.NumberUtils.getValue(k) * e.retina.pixelRatio,
            T = "boolean" == typeof k.random ? k.random : k.random.enable;
          (this.size = { value: S }),
            (this.direction = a.NumberUtils.getParticleDirectionAngle(
              this.options.move.direction
            )),
            (this.bubble = { inRange: !1 }),
            (this.initialVelocity = this.calculateVelocity()),
            (this.velocity = this.initialVelocity.copy());
          const R = this.options.rotate;
          this.rotate = {
            value: (a.NumberUtils.getRangeValue(R.value) * Math.PI) / 180,
          };
          let A = R.direction;
          if (A === r.RotateDirection.random) {
            A =
              Math.floor(2 * Math.random()) > 0
                ? r.RotateDirection.counterClockwise
                : r.RotateDirection.clockwise;
          }
          switch (A) {
            case r.RotateDirection.counterClockwise:
            case "counterClockwise":
              this.rotate.status = r.AnimationStatus.decreasing;
              break;
            case r.RotateDirection.clockwise:
              this.rotate.status = r.AnimationStatus.increasing;
          }
          const D = this.options.rotate.animation;
          D.enable &&
            ((this.rotate.velocity = (D.speed / 360) * e.retina.reduceFactor),
            D.sync || (this.rotate.velocity *= Math.random()));
          const j = this.options.tilt;
          this.tilt = {
            value: (a.NumberUtils.getRangeValue(j.value) * Math.PI) / 180,
            sinDirection: Math.random() >= 0.5 ? 1 : -1,
            cosDirection: Math.random() >= 0.5 ? 1 : -1,
          };
          let U = j.direction;
          if (U === r.TiltDirection.random) {
            U =
              Math.floor(2 * Math.random()) > 0
                ? r.TiltDirection.counterClockwise
                : r.TiltDirection.clockwise;
          }
          switch (U) {
            case r.TiltDirection.counterClockwise:
            case "counterClockwise":
              this.tilt.status = r.AnimationStatus.decreasing;
              break;
            case r.TiltDirection.clockwise:
              this.tilt.status = r.AnimationStatus.increasing;
          }
          const z = this.options.tilt.animation;
          z.enable &&
            ((this.tilt.velocity = (z.speed / 360) * e.retina.reduceFactor),
            z.sync || (this.tilt.velocity *= Math.random()));
          const E = this.options.size.animation;
          if (E.enable) {
            if (((this.size.status = r.AnimationStatus.increasing), !T))
              switch (E.startValue) {
                case r.StartValueType.min:
                  this.size.value = E.minimumValue * M;
                  break;
                case r.StartValueType.random:
                  this.size.value = a.NumberUtils.randomInRange(
                    a.NumberUtils.setRangeValue(
                      E.minimumValue * M,
                      this.size.value
                    )
                  );
                  break;
                case r.StartValueType.max:
                default:
                  this.size.status = r.AnimationStatus.decreasing;
              }
            (this.size.velocity =
              ((null !== (m = this.sizeAnimationSpeed) && void 0 !== m
                ? m
                : e.retina.sizeAnimationSpeed) /
                100) *
              e.retina.reduceFactor),
              E.sync || (this.size.velocity *= Math.random());
          }
          const I = a.ColorUtils.colorToHsl(C, this.id, O);
          if (I) {
            this.color = {
              h: { value: I.h },
              s: { value: I.s },
              l: { value: I.l },
            };
            const t = this.options.color.animation;
            this.setColorAnimation(t.h, this.color.h),
              this.setColorAnimation(t.s, this.color.s),
              this.setColorAnimation(t.l, this.color.l);
          }
          const L = this.options.roll;
          L.enable
            ? (this.color &&
                (L.backColor
                  ? (this.backColor = a.ColorUtils.colorToHsl(L.backColor))
                  : L.darken.enable
                  ? (this.backColor = {
                      h: this.color.h.value,
                      s: this.color.s.value,
                      l: this.color.l.value - L.darken.value,
                    })
                  : L.enlighten.enable &&
                    (this.backColor = {
                      h: this.color.h.value,
                      s: this.color.s.value,
                      l: this.color.l.value + L.darken.value,
                    })),
              (this.rollAngle = Math.random() * Math.PI * 2),
              (this.rollSpeed = a.NumberUtils.getRangeValue(L.speed) / 360))
            : ((this.rollAngle = 0), (this.rollSpeed = 0));
          const V = this.options.wobble;
          V.enable
            ? ((this.wobbleAngle = Math.random() * Math.PI * 2),
              (this.wobbleSpeed = a.NumberUtils.getRangeValue(V.speed) / 360))
            : ((this.wobbleAngle = 0), (this.wobbleSpeed = 0)),
            (this.position = this.calcPosition(this.container, i)),
            (this.initialPosition = this.position.copy()),
            (this.offset = u.Vector.create(0, 0));
          const F = this.options.opacity,
            B = "boolean" == typeof F.random ? F.random : F.random.enable;
          this.opacity = { value: a.NumberUtils.getValue(F) };
          const H = F.animation;
          if (H.enable) {
            if (((this.opacity.status = r.AnimationStatus.increasing), !B))
              switch (H.startValue) {
                case r.StartValueType.min:
                  this.opacity.value = H.minimumValue;
                  break;
                case r.StartValueType.random:
                  this.opacity.value = a.NumberUtils.randomInRange(
                    a.NumberUtils.setRangeValue(
                      H.minimumValue,
                      this.opacity.value
                    )
                  );
                  break;
                case r.StartValueType.max:
                default:
                  this.opacity.status = r.AnimationStatus.decreasing;
              }
            (this.opacity.velocity = (H.speed / 100) * e.retina.reduceFactor),
              H.sync || (this.opacity.velocity *= Math.random());
          }
          this.sides = 24;
          let N = e.drawers.get(this.shape);
          N ||
            ((N = a.Plugins.getShapeDrawer(this.shape)),
            N && e.drawers.set(this.shape, N));
          const q = null == N ? void 0 : N.getSidesCount;
          q && (this.sides = q(this));
          const W = this.loadImageShape(e, N);
          W &&
            ((this.image = W.image),
            (this.fill = W.fill),
            (this.close = W.close)),
            (this.stroke =
              this.options.stroke instanceof Array
                ? a.Utils.itemFromArray(this.options.stroke, this.id, O)
                : this.options.stroke),
            (this.strokeWidth = this.stroke.width * e.retina.pixelRatio);
          const G =
            null !== (g = a.ColorUtils.colorToHsl(this.stroke.color)) &&
            void 0 !== g
              ? g
              : this.getFillColor();
          if (G) {
            this.strokeColor = {
              h: { value: G.h },
              s: { value: G.s },
              l: { value: G.l },
            };
            const t =
              null === (w = this.stroke.color) || void 0 === w
                ? void 0
                : w.animation;
            t &&
              this.strokeColor &&
              (this.setColorAnimation(t.h, this.strokeColor.h),
              this.setColorAnimation(t.s, this.strokeColor.s),
              this.setColorAnimation(t.l, this.strokeColor.l));
          }
          const $ = P.life;
          (this.lifeDelay = e.retina.reduceFactor
            ? ((a.NumberUtils.getValue($.delay) *
                ($.delay.sync ? 1 : Math.random())) /
                e.retina.reduceFactor) *
              1e3
            : 0),
            (this.lifeDelayTime = 0),
            (this.lifeDuration = e.retina.reduceFactor
              ? ((a.NumberUtils.getValue($.duration) *
                  ($.duration.sync ? 1 : Math.random())) /
                  e.retina.reduceFactor) *
                1e3
              : 0),
            (this.lifeTime = 0),
            (this.livesRemaining = P.life.count),
            (this.spawning = this.lifeDelay > 0),
            this.lifeDuration <= 0 && (this.lifeDuration = -1),
            this.livesRemaining <= 0 && (this.livesRemaining = -1),
            (this.shadowColor = a.ColorUtils.colorToRgb(
              this.options.shadow.color
            )),
            (this.updater = new o.Updater(e, this)),
            (this.infecter = new l.Infecter(e)),
            (this.mover = new c.Mover(e, this)),
            N && N.particleInit && N.particleInit(e, this);
        }
        move(t) {
          this.mover.move(t);
        }
        update(t) {
          this.updater.update(t);
        }
        draw(t) {
          this.container.canvas.drawParticle(this, t);
        }
        getPosition() {
          return this.position.add(this.offset);
        }
        getRadius() {
          return this.bubble.radius || this.size.value;
        }
        getMass() {
          const t = this.getRadius();
          return (Math.pow(t, 2) * Math.PI) / 2;
        }
        getFillColor() {
          return this.bubble.color
            ? this.bubble.color
            : this.backColor && Math.floor(this.rollAngle / (Math.PI / 2)) % 2
            ? this.backColor
            : a.ColorUtils.getHslFromAnimation(this.color);
        }
        getStrokeColor() {
          var t, e;
          return null !==
            (e =
              null !== (t = this.bubble.color) && void 0 !== t
                ? t
                : a.ColorUtils.getHslFromAnimation(this.strokeColor)) &&
            void 0 !== e
            ? e
            : this.getFillColor();
        }
        destroy(t) {
          if (
            ((this.destroyed = !0),
            (this.bubble.inRange = !1),
            (this.links = []),
            this.unbreakable)
          )
            return;
          (this.destroyed = !0), (this.bubble.inRange = !1);
          for (const [, e] of this.container.plugins)
            e.particleDestroyed && e.particleDestroyed(this, t);
          if (t) return;
          this.options.destroy.mode === r.DestroyMode.split && this.split();
        }
        reset() {
          (this.loops.opacity = 0), (this.loops.size = 0);
        }
        split() {
          const t = this.options.destroy.split;
          if (t.count >= 0 && this.splitCount++ > t.count) return;
          const e = a.NumberUtils.getRangeValue(t.rate.value);
          for (let t = 0; t < e; t++)
            this.container.particles.addSplitParticle(this);
        }
        setColorAnimation(t, e) {
          if (t.enable) {
            if (
              ((e.velocity =
                (t.speed / 100) * this.container.retina.reduceFactor),
              t.sync)
            )
              return;
            (e.status = r.AnimationStatus.increasing),
              (e.velocity *= Math.random()),
              e.value && (e.value *= Math.random());
          } else e.velocity = 0;
        }
        calcPosition(t, e, i = 0) {
          var o, s;
          for (const [, i] of t.plugins) {
            const t =
              void 0 !== i.particlePosition
                ? i.particlePosition(e, this)
                : void 0;
            if (void 0 !== t) return u.Vector.create(t.x, t.y);
          }
          const n = t.canvas.size,
            l = u.Vector.create(
              null !== (o = null == e ? void 0 : e.x) && void 0 !== o
                ? o
                : Math.random() * n.width,
              null !== (s = null == e ? void 0 : e.y) && void 0 !== s
                ? s
                : Math.random() * n.height
            ),
            c = this.options.move.outMode;
          return (
            (a.Utils.isInArray(c, r.OutMode.bounce) ||
              a.Utils.isInArray(c, r.OutMode.bounceHorizontal)) &&
              (l.x > t.canvas.size.width - 2 * this.size.value
                ? (l.x -= this.size.value)
                : l.x < 2 * this.size.value && (l.x += this.size.value)),
            (a.Utils.isInArray(c, r.OutMode.bounce) ||
              a.Utils.isInArray(c, r.OutMode.bounceVertical)) &&
              (l.y > t.canvas.size.height - 2 * this.size.value
                ? (l.y -= this.size.value)
                : l.y < 2 * this.size.value && (l.y += this.size.value)),
            this.checkOverlap(l, i) ? this.calcPosition(t, void 0, i + 1) : l
          );
        }
        checkOverlap(t, e = 0) {
          const i = this.options.collisions.overlap;
          if (!i.enable) {
            const o = i.retries;
            if (o >= 0 && e > o)
              throw new Error("Particle is overlapping and can't be placed");
            let s = !1;
            for (const e of this.container.particles.array)
              if (
                a.NumberUtils.getDistance(t, e.position) <
                this.size.value + e.size.value
              ) {
                s = !0;
                break;
              }
            return s;
          }
          return !1;
        }
        calculateVelocity() {
          const t = a.NumberUtils.getParticleBaseVelocity(
              this.direction
            ).copy(),
            e = this.options.move,
            i = (Math.PI / 180) * e.angle.value,
            o = (Math.PI / 180) * e.angle.offset,
            s = { left: o - i / 2, right: o + i / 2 };
          return (
            e.straight ||
              (t.angle += a.NumberUtils.randomInRange(
                a.NumberUtils.setRangeValue(s.left, s.right)
              )),
            e.random &&
              "number" == typeof e.speed &&
              (t.length *= Math.random()),
            t
          );
        }
        loadImageShape(t, e) {
          var i, o, s, n, l;
          if (
            this.shape !== r.ShapeType.image &&
            this.shape !== r.ShapeType.images
          )
            return;
          const c = e.getImages(t).images,
            u = this.shapeData,
            d =
              null !== (i = c.find((t) => t.source === u.src)) && void 0 !== i
                ? i
                : c[0],
            h = this.getFillColor();
          let v;
          if (!d) return;
          if (void 0 !== d.svgData && u.replaceColor && h) {
            const t = a.ColorUtils.replaceColorSvg(d, h, this.opacity.value),
              e = new Blob([t], { type: "image/svg+xml" }),
              i = URL || window.URL || window.webkitURL || window,
              s = i.createObjectURL(e),
              n = new Image();
            (v = {
              data: Object.assign(Object.assign({}, d), { svgData: t }),
              loaded: !1,
              ratio: u.width / u.height,
              replaceColor:
                null !== (o = u.replaceColor) && void 0 !== o
                  ? o
                  : u.replace_color,
              source: u.src,
            }),
              n.addEventListener("load", () => {
                this.image && ((this.image.loaded = !0), (d.element = n)),
                  i.revokeObjectURL(s);
              }),
              n.addEventListener("error", () => {
                i.revokeObjectURL(s),
                  a.Utils.loadImage(u.src).then((t) => {
                    this.image &&
                      t &&
                      ((d.element = t.element), (this.image.loaded = !0));
                  });
              }),
              (n.src = s);
          } else
            v = {
              data: d,
              loaded: !0,
              ratio: u.width / u.height,
              replaceColor:
                null !== (s = u.replaceColor) && void 0 !== s
                  ? s
                  : u.replace_color,
              source: u.src,
            };
          v.ratio || (v.ratio = 1);
          return {
            image: v,
            fill: null !== (n = u.fill) && void 0 !== n ? n : this.fill,
            close: null !== (l = u.close) && void 0 !== l ? l : this.close,
          };
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Updater = void 0);
      const o = i(0),
        s = i(1);
      function n(t, e, i, o, n) {
        switch (e) {
          case s.DestroyType.max:
            i >= n && t.destroy();
            break;
          case s.DestroyType.min:
            i <= o && t.destroy();
        }
      }
      e.Updater = class {
        constructor(t, e) {
          (this.container = t), (this.particle = e);
        }
        update(t) {
          this.particle.destroyed ||
            (this.updateLife(t),
            this.particle.destroyed ||
              this.particle.spawning ||
              (this.updateOpacity(t),
              this.updateSize(t),
              this.updateAngle(t),
              this.updateTilt(t),
              this.updateRoll(t),
              this.updateWobble(t),
              this.updateColor(t),
              this.updateStrokeColor(t),
              this.updateOutModes(t)));
        }
        updateLife(t) {
          const e = this.particle;
          let i = !1;
          if (
            (e.spawning &&
              ((e.lifeDelayTime += t.value),
              e.lifeDelayTime >= e.lifeDelay &&
                ((i = !0),
                (e.spawning = !1),
                (e.lifeDelayTime = 0),
                (e.lifeTime = 0))),
            -1 !== e.lifeDuration &&
              !e.spawning &&
              (i ? (e.lifeTime = 0) : (e.lifeTime += t.value),
              e.lifeTime >= e.lifeDuration))
          ) {
            if (
              ((e.lifeTime = 0),
              e.livesRemaining > 0 && e.livesRemaining--,
              0 === e.livesRemaining)
            )
              return void e.destroy();
            const t = this.container.canvas.size;
            (e.position.x = o.NumberUtils.randomInRange(
              o.NumberUtils.setRangeValue(0, t.width)
            )),
              (e.position.y = o.NumberUtils.randomInRange(
                o.NumberUtils.setRangeValue(0, t.height)
              )),
              (e.spawning = !0),
              (e.lifeDelayTime = 0),
              (e.lifeTime = 0),
              e.reset();
            const i = e.options.life;
            (e.lifeDelay = 1e3 * o.NumberUtils.getValue(i.delay)),
              (e.lifeDuration = 1e3 * o.NumberUtils.getValue(i.duration));
          }
        }
        updateOpacity(t) {
          var e, i;
          const r = this.particle,
            a = r.options.opacity,
            l = a.animation,
            c = o.NumberUtils.getRangeMin(a.value),
            u = o.NumberUtils.getRangeMax(a.value);
          if (
            !r.destroyed &&
            l.enable &&
            (l.count <= 0 || r.loops.size < l.count)
          ) {
            switch (r.opacity.status) {
              case s.AnimationStatus.increasing:
                r.opacity.value >= u
                  ? ((r.opacity.status = s.AnimationStatus.decreasing),
                    r.loops.opacity++)
                  : (r.opacity.value +=
                      (null !== (e = r.opacity.velocity) && void 0 !== e
                        ? e
                        : 0) * t.factor);
                break;
              case s.AnimationStatus.decreasing:
                r.opacity.value <= c
                  ? ((r.opacity.status = s.AnimationStatus.increasing),
                    r.loops.opacity++)
                  : (r.opacity.value -=
                      (null !== (i = r.opacity.velocity) && void 0 !== i
                        ? i
                        : 0) * t.factor);
            }
            n(r, l.destroy, r.opacity.value, c, u),
              r.destroyed ||
                (r.opacity.value = o.NumberUtils.clamp(r.opacity.value, c, u));
          }
        }
        updateSize(t) {
          var e;
          const i = this.container,
            r = this.particle,
            a = r.options.size,
            l = a.animation,
            c =
              (null !== (e = r.size.velocity) && void 0 !== e ? e : 0) *
              t.factor,
            u = o.NumberUtils.getRangeMin(a.value) * i.retina.pixelRatio,
            d = o.NumberUtils.getRangeMax(a.value) * i.retina.pixelRatio;
          if (
            !r.destroyed &&
            l.enable &&
            (l.count <= 0 || r.loops.size < l.count)
          ) {
            switch (r.size.status) {
              case s.AnimationStatus.increasing:
                r.size.value >= d
                  ? ((r.size.status = s.AnimationStatus.decreasing),
                    r.loops.size++)
                  : (r.size.value += c);
                break;
              case s.AnimationStatus.decreasing:
                r.size.value <= u
                  ? ((r.size.status = s.AnimationStatus.increasing),
                    r.loops.size++)
                  : (r.size.value -= c);
            }
            n(r, l.destroy, r.size.value, u, d),
              r.destroyed ||
                (r.size.value = o.NumberUtils.clamp(r.size.value, u, d));
          }
        }
        updateAngle(t) {
          var e;
          const i = this.particle,
            o = i.options.rotate.animation,
            n =
              (null !== (e = i.rotate.velocity) && void 0 !== e ? e : 0) *
              t.factor,
            r = 2 * Math.PI;
          if (o.enable)
            switch (i.rotate.status) {
              case s.AnimationStatus.increasing:
                (i.rotate.value += n),
                  i.rotate.value > r && (i.rotate.value -= r);
                break;
              case s.AnimationStatus.decreasing:
              default:
                (i.rotate.value -= n),
                  i.rotate.value < 0 && (i.rotate.value += r);
            }
        }
        updateTilt(t) {
          var e;
          const i = this.particle,
            o = i.options.tilt.animation,
            n =
              (null !== (e = i.tilt.velocity) && void 0 !== e ? e : 0) *
              t.factor,
            r = 2 * Math.PI;
          if (o.enable)
            switch (i.tilt.status) {
              case s.AnimationStatus.increasing:
                (i.tilt.value += n), i.tilt.value > r && (i.tilt.value -= r);
                break;
              case s.AnimationStatus.decreasing:
              default:
                (i.tilt.value -= n), i.tilt.value < 0 && (i.tilt.value += r);
            }
        }
        updateRoll(t) {
          const e = this.particle,
            i = e.options.roll,
            o = e.rollSpeed * t.factor,
            s = 2 * Math.PI;
          i.enable &&
            ((e.rollAngle += o), e.rollAngle > s && (e.rollAngle -= s));
        }
        updateWobble(t) {
          const e = this.particle,
            i = e.options.wobble,
            o = e.wobbleSpeed * t.factor,
            s = (e.wobbleDistance * t.factor) / (1e3 / 60),
            n = 2 * Math.PI;
          i.enable &&
            ((e.wobbleAngle += o),
            e.wobbleAngle > n && (e.wobbleAngle -= n),
            (e.position.x += s * Math.cos(e.wobbleAngle)),
            (e.position.y += s * Math.abs(Math.sin(e.wobbleAngle))));
        }
        updateColor(t) {
          var e, i, o;
          const s = this.particle,
            n = s.options.color.animation;
          void 0 !== (null === (e = s.color) || void 0 === e ? void 0 : e.h) &&
            this.updateColorValue(s, t, s.color.h, n.h, 360, !1),
            void 0 !==
              (null === (i = s.color) || void 0 === i ? void 0 : i.s) &&
              this.updateColorValue(s, t, s.color.s, n.s, 100, !0),
            void 0 !==
              (null === (o = s.color) || void 0 === o ? void 0 : o.l) &&
              this.updateColorValue(s, t, s.color.l, n.l, 100, !0);
        }
        updateStrokeColor(t) {
          var e, i, o, s, n, r, a, l, c, u, d, h;
          const v = this.particle;
          if (!v.stroke.color) return;
          const p = v.stroke.color.animation,
            f = p;
          if (void 0 !== f.enable) {
            const s =
              null !==
                (i =
                  null === (e = v.strokeColor) || void 0 === e
                    ? void 0
                    : e.h) && void 0 !== i
                ? i
                : null === (o = v.color) || void 0 === o
                ? void 0
                : o.h;
            s && this.updateColorValue(v, t, s, f, 360, !1);
          } else {
            const e = p,
              i =
                null !==
                  (n =
                    null === (s = v.strokeColor) || void 0 === s
                      ? void 0
                      : s.h) && void 0 !== n
                  ? n
                  : null === (r = v.color) || void 0 === r
                  ? void 0
                  : r.h;
            i && this.updateColorValue(v, t, i, e.h, 360, !1);
            const o =
              null !==
                (l =
                  null === (a = v.strokeColor) || void 0 === a
                    ? void 0
                    : a.s) && void 0 !== l
                ? l
                : null === (c = v.color) || void 0 === c
                ? void 0
                : c.s;
            o && this.updateColorValue(v, t, o, e.s, 100, !0);
            const f =
              null !==
                (d =
                  null === (u = v.strokeColor) || void 0 === u
                    ? void 0
                    : u.l) && void 0 !== d
                ? d
                : null === (h = v.color) || void 0 === h
                ? void 0
                : h.l;
            f && this.updateColorValue(v, t, f, e.l, 100, !0);
          }
        }
        updateColorValue(t, e, i, n, r, a) {
          var l;
          const c = i;
          if (!c || !n.enable) return;
          const u = o.NumberUtils.randomInRange(n.offset),
            d =
              (null !== (l = i.velocity) && void 0 !== l ? l : 0) * e.factor +
              3.6 * u;
          a && c.status !== s.AnimationStatus.increasing
            ? ((c.value -= d),
              c.value < 0 &&
                ((c.status = s.AnimationStatus.increasing),
                (c.value += c.value)))
            : ((c.value += d),
              a &&
                c.value > r &&
                ((c.status = s.AnimationStatus.decreasing),
                (c.value -= c.value % r))),
            c.value > r && (c.value %= r);
        }
        updateOutModes(t) {
          var e, i, o, n;
          const r = this.particle.options.move.outModes;
          this.updateOutMode(
            t,
            null !== (e = r.bottom) && void 0 !== e ? e : r.default,
            s.OutModeDirection.bottom
          ),
            this.updateOutMode(
              t,
              null !== (i = r.left) && void 0 !== i ? i : r.default,
              s.OutModeDirection.left
            ),
            this.updateOutMode(
              t,
              null !== (o = r.right) && void 0 !== o ? o : r.default,
              s.OutModeDirection.right
            ),
            this.updateOutMode(
              t,
              null !== (n = r.top) && void 0 !== n ? n : r.default,
              s.OutModeDirection.top
            );
        }
        updateOutMode(t, e, i) {
          const n = this.container,
            r = this.particle;
          switch (e) {
            case s.OutMode.bounce:
            case s.OutMode.bounceVertical:
            case s.OutMode.bounceHorizontal:
            case "bounceVertical":
            case "bounceHorizontal":
            case s.OutMode.split:
              this.updateBounce(t, i, e);
              break;
            case s.OutMode.destroy:
              o.Utils.isPointInside(
                r.position,
                n.canvas.size,
                r.getRadius(),
                i
              ) || n.particles.remove(r, !0);
              break;
            case s.OutMode.out:
              o.Utils.isPointInside(
                r.position,
                n.canvas.size,
                r.getRadius(),
                i
              ) || this.fixOutOfCanvasPosition(i);
              break;
            case s.OutMode.none:
              this.bounceNone(i);
          }
        }
        fixOutOfCanvasPosition(t) {
          const e = this.container,
            i = this.particle,
            n = i.options.move.warp,
            r = e.canvas.size,
            a = {
              bottom: r.height + i.getRadius() - i.offset.y,
              left: -i.getRadius() - i.offset.x,
              right: r.width + i.getRadius() + i.offset.x,
              top: -i.getRadius() - i.offset.y,
            },
            l = i.getRadius(),
            c = o.Utils.calculateBounds(i.position, l);
          t === s.OutModeDirection.right && c.left > r.width - i.offset.x
            ? ((i.position.x = a.left),
              n || (i.position.y = Math.random() * r.height))
            : t === s.OutModeDirection.left &&
              c.right < -i.offset.x &&
              ((i.position.x = a.right),
              n || (i.position.y = Math.random() * r.height)),
            t === s.OutModeDirection.bottom && c.top > r.height - i.offset.y
              ? (n || (i.position.x = Math.random() * r.width),
                (i.position.y = a.top))
              : t === s.OutModeDirection.top &&
                c.bottom < -i.offset.y &&
                (n || (i.position.x = Math.random() * r.width),
                (i.position.y = a.bottom));
        }
        updateBounce(t, e, i) {
          const n = this.container,
            r = this.particle;
          let a = !1;
          for (const [, i] of n.plugins)
            if (
              (void 0 !== i.particleBounce && (a = i.particleBounce(r, t, e)),
              a)
            )
              break;
          if (a) return;
          const l = r.getPosition(),
            c = r.offset,
            u = r.getRadius(),
            d = o.Utils.calculateBounds(l, u),
            h = n.canvas.size;
          !(function (t) {
            if (
              t.outMode === s.OutMode.bounce ||
              t.outMode === s.OutMode.bounceHorizontal ||
              "bounceHorizontal" === t.outMode ||
              t.outMode === s.OutMode.split
            ) {
              const e = t.particle.velocity.x;
              let i = !1;
              if (
                (t.direction === s.OutModeDirection.right &&
                  t.bounds.right >= t.canvasSize.width &&
                  e > 0) ||
                (t.direction === s.OutModeDirection.left &&
                  t.bounds.left <= 0 &&
                  e < 0)
              ) {
                const e = o.NumberUtils.getValue(
                  t.particle.options.bounce.horizontal
                );
                (t.particle.velocity.x *= -e), (i = !0);
              }
              if (!i) return;
              const n = t.offset.x + t.size;
              t.bounds.right >= t.canvasSize.width
                ? (t.particle.position.x = t.canvasSize.width - n)
                : t.bounds.left <= 0 && (t.particle.position.x = n),
                t.outMode === s.OutMode.split && t.particle.destroy();
            }
          })({
            particle: r,
            outMode: i,
            direction: e,
            bounds: d,
            canvasSize: h,
            offset: c,
            size: u,
          }),
            (function (t) {
              if (
                t.outMode === s.OutMode.bounce ||
                t.outMode === s.OutMode.bounceVertical ||
                "bounceVertical" === t.outMode ||
                t.outMode === s.OutMode.split
              ) {
                const e = t.particle.velocity.y;
                let i = !1;
                if (
                  (t.direction === s.OutModeDirection.bottom &&
                    t.bounds.bottom >= t.canvasSize.height &&
                    e > 0) ||
                  (t.direction === s.OutModeDirection.top &&
                    t.bounds.top <= 0 &&
                    e < 0)
                ) {
                  const e = o.NumberUtils.getValue(
                    t.particle.options.bounce.vertical
                  );
                  (t.particle.velocity.y *= -e), (i = !0);
                }
                if (!i) return;
                const n = t.offset.y + t.size;
                t.bounds.bottom >= t.canvasSize.height
                  ? (t.particle.position.y = t.canvasSize.height - n)
                  : t.bounds.top <= 0 && (t.particle.position.y = n),
                  t.outMode === s.OutMode.split && t.particle.destroy();
              }
            })({
              particle: r,
              outMode: i,
              direction: e,
              bounds: d,
              canvasSize: h,
              offset: c,
              size: u,
            });
        }
        bounceNone(t) {
          const e = this.particle;
          if (e.options.move.distance) return;
          const i = e.options.move.gravity,
            n = this.container;
          if (i.enable) {
            const o = e.position;
            ((i.acceleration >= 0 &&
              o.y > n.canvas.size.height &&
              t === s.OutModeDirection.bottom) ||
              (i.acceleration < 0 &&
                o.y < 0 &&
                t === s.OutModeDirection.top)) &&
              n.particles.remove(e);
          } else
            o.Utils.isPointInside(
              e.position,
              n.canvas.size,
              e.getRadius(),
              t
            ) || n.particles.remove(e);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Infecter = void 0);
      e.Infecter = class {
        constructor(t) {
          this.container = t;
        }
        startInfection(t) {
          t > this.container.actualOptions.infection.stages.length ||
            t < 0 ||
            ((this.infectionDelay = 0), (this.infectionDelayStage = t));
        }
        updateInfectionStage(t) {
          t > this.container.actualOptions.infection.stages.length ||
            t < 0 ||
            (void 0 !== this.infectionStage && this.infectionStage > t) ||
            ((this.infectionStage = t), (this.infectionTime = 0));
        }
        updateInfection(t) {
          const e = this.container.actualOptions,
            i = e.infection,
            o = e.infection.stages,
            s = o.length;
          if (
            void 0 !== this.infectionDelay &&
            void 0 !== this.infectionDelayStage
          ) {
            const e = this.infectionDelayStage;
            if (e > s || e < 0) return;
            this.infectionDelay > 1e3 * i.delay
              ? ((this.infectionStage = e),
                (this.infectionTime = 0),
                delete this.infectionDelay,
                delete this.infectionDelayStage)
              : (this.infectionDelay += t);
          } else delete this.infectionDelay, delete this.infectionDelayStage;
          if (void 0 !== this.infectionStage && void 0 !== this.infectionTime) {
            const e = o[this.infectionStage];
            void 0 !== e.duration &&
            e.duration >= 0 &&
            this.infectionTime > 1e3 * e.duration
              ? this.nextInfectionStage()
              : (this.infectionTime += t);
          } else delete this.infectionStage, delete this.infectionTime;
        }
        nextInfectionStage() {
          const t = this.container.actualOptions,
            e = t.infection.stages.length;
          if (
            !(e <= 0 || void 0 === this.infectionStage) &&
            ((this.infectionTime = 0), e <= ++this.infectionStage)
          ) {
            if (t.infection.cure)
              return delete this.infectionStage, void delete this.infectionTime;
            (this.infectionStage = 0), (this.infectionTime = 0);
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Mover = void 0);
      const o = i(0),
        s = i(1);
      e.Mover = class {
        constructor(t, e) {
          (this.container = t), (this.particle = e);
        }
        move(t) {
          const e = this.particle;
          (e.bubble.inRange = !1), (e.links = []);
          for (const [, i] of this.container.plugins) {
            if (e.destroyed) break;
            i.particleUpdate && i.particleUpdate(e, t);
          }
          e.destroyed || (this.moveParticle(t), this.moveParallax());
        }
        moveParticle(t) {
          var e, i;
          const s = this.particle,
            n = s.options;
          if (!n.move.enable) return;
          const r = this.container,
            a = this.getProximitySpeedFactor(),
            l =
              (null !== (e = s.moveSpeed) && void 0 !== e
                ? e
                : o.NumberUtils.getRangeValue(s.options.move.speed) *
                  r.retina.pixelRatio) * r.retina.reduceFactor,
            c =
              o.NumberUtils.getRangeMax(s.options.size.value) *
              r.retina.pixelRatio,
            u = (l / 2) * (n.move.size ? s.getRadius() / c : 1) * a * t.factor,
            d =
              null !== (i = s.moveDrift) && void 0 !== i
                ? i
                : o.NumberUtils.getRangeValue(s.options.move.drift) *
                  r.retina.pixelRatio;
          this.applyPath(t);
          const h = n.move.gravity,
            v = h.enable && h.inverse ? -1 : 1;
          h.enable &&
            (s.velocity.y += (v * (h.acceleration * t.factor)) / (60 * u)),
            u && (s.velocity.x += (d * t.factor) / (60 * u)),
            s.velocity.multTo(1 - s.options.move.decay);
          const p = s.velocity.mult(u);
          h.enable &&
            Math.abs(p.y) >= h.maxSpeed &&
            h.maxSpeed > 0 &&
            ((p.y = v * h.maxSpeed), u && (s.velocity.y = p.y / u)),
            s.position.addTo(p),
            n.move.vibrate &&
              ((s.position.x += Math.sin(
                s.position.x * Math.cos(s.position.y)
              )),
              (s.position.y += Math.cos(
                s.position.y * Math.sin(s.position.x)
              )));
          const f = s.initialPosition,
            y = o.NumberUtils.getDistance(f, s.position);
          s.maxDistance &&
            (y >= s.maxDistance && !s.misplaced
              ? ((s.misplaced = y > s.maxDistance),
                (s.velocity.x = s.velocity.y / 2 - s.velocity.x),
                (s.velocity.y = s.velocity.x / 2 - s.velocity.y))
              : y < s.maxDistance && s.misplaced
              ? (s.misplaced = !1)
              : s.misplaced &&
                (((s.position.x < f.x && s.velocity.x < 0) ||
                  (s.position.x > f.x && s.velocity.x > 0)) &&
                  (s.velocity.x *= -Math.random()),
                ((s.position.y < f.y && s.velocity.y < 0) ||
                  (s.position.y > f.y && s.velocity.y > 0)) &&
                  (s.velocity.y *= -Math.random())));
        }
        applyPath(t) {
          const e = this.particle,
            i = e.options.move.path;
          if (!i.enable) return;
          const s = this.container;
          if (e.lastPathTime <= e.pathDelay)
            return void (e.lastPathTime += t.value);
          let n = s.pathGenerator;
          if (i.generator) {
            const t = o.Plugins.getPathGenerator(i.generator);
            t && (n = t);
          }
          const r = n.generate(e);
          e.velocity.addTo(r),
            i.clamp &&
              ((e.velocity.x = o.NumberUtils.clamp(e.velocity.x, -1, 1)),
              (e.velocity.y = o.NumberUtils.clamp(e.velocity.y, -1, 1))),
            (e.lastPathTime -= e.pathDelay);
        }
        moveParallax() {
          const t = this.container,
            e = t.actualOptions;
          if (
            o.Utils.isSsr() ||
            !e.interactivity.events.onHover.parallax.enable
          )
            return;
          const i = this.particle,
            s = e.interactivity.events.onHover.parallax.force,
            n = t.interactivity.mouse.position;
          if (!n) return;
          const r = t.canvas.size.width / 2,
            a = t.canvas.size.height / 2,
            l = e.interactivity.events.onHover.parallax.smooth,
            c = i.getRadius() / s,
            u = (n.x - r) * c,
            d = (n.y - a) * c;
          (i.offset.x += (u - i.offset.x) / l),
            (i.offset.y += (d - i.offset.y) / l);
        }
        getProximitySpeedFactor() {
          const t = this.container,
            e = t.actualOptions;
          if (
            !o.Utils.isInArray(
              s.HoverMode.slow,
              e.interactivity.events.onHover.mode
            )
          )
            return 1;
          const i = this.container.interactivity.mouse.position;
          if (!i) return 1;
          const n = this.particle.getPosition(),
            r = o.NumberUtils.getDistance(i, n),
            a = t.retina.slowModeRadius;
          if (r > a) return 1;
          return (r / a || 0) / e.interactivity.modes.slow.factor;
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.InteractionManager = void 0);
      const o = i(250),
        s = i(251),
        n = i(252),
        r = i(253),
        a = i(254),
        l = i(255),
        c = i(256),
        u = i(257),
        d = i(258),
        h = i(259),
        v = i(260),
        p = i(261),
        f = i(262);
      e.InteractionManager = class {
        constructor(t) {
          (this.container = t),
            (this.externalInteractors = [
              new f.Bouncer(t),
              new n.Bubbler(t),
              new r.Connector(t),
              new o.Grabber(t),
              new p.Lighter(t),
              new h.Attractor(t),
              new s.Repulser(t),
              new d.TrailMaker(t),
            ]),
            (this.particleInteractors = [
              new l.Attractor(t),
              new v.Lighter(t),
              new c.Collider(t),
              new u.Infecter(t),
              new a.Linker(t),
            ]);
        }
        init() {}
        externalInteract(t) {
          for (const e of this.externalInteractors)
            e.isEnabled() && e.interact(t);
        }
        particlesInteract(t, e) {
          for (const e of this.externalInteractors) e.reset(t);
          for (const i of this.particleInteractors)
            i.isEnabled(t) && i.interact(t, e);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Grabber = void 0);
      const o = i(0),
        s = i(6);
      e.Grabber = class {
        constructor(t) {
          this.container = t;
        }
        isEnabled() {
          const t = this.container,
            e = t.interactivity.mouse,
            i = t.actualOptions.interactivity.events;
          if (!i.onHover.enable || !e.position) return !1;
          const n = i.onHover.mode;
          return o.Utils.isInArray(s.HoverMode.grab, n);
        }
        reset() {}
        interact() {
          var t;
          const e = this.container,
            i = e.actualOptions.interactivity;
          if (
            i.events.onHover.enable
          ) {
            const s = e.interactivity.mouse.position;
            if (void 0 === s) return;
            const n = e.retina.grabModeDistance,
              r = e.particles.quadTree.queryCircle(s, n);
            for (const a of r) {
              const r = a.getPosition(),
                l = o.NumberUtils.getDistance(r, s);
              if (l <= n) {
                const r = i.modes.grab.links,
                  c = r.opacity,
                  u = c - (l * c) / n;
                if (u > 0) {
                  const i =
                    null !== (t = r.color) && void 0 !== t
                      ? t
                      : a.options.links.color;
                  if (!e.particles.grabLineColor) {
                    const t = e.actualOptions.interactivity.modes.grab.links;
                    e.particles.grabLineColor = o.ColorUtils.getLinkRandomColor(
                      i,
                      t.blink,
                      t.consent
                    );
                  }
                  const n = o.ColorUtils.getLinkColor(
                    a,
                    void 0,
                    e.particles.grabLineColor
                  );
                  if (void 0 === n) return;
                  e.canvas.drawGrabLine(a, n, u, s);
                }
              }
            }
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Repulser = void 0);
      const o = i(1),
        s = i(0),
        n = i(7);
      e.Repulser = class {
        constructor(t) {
          this.container = t;
        }
        isEnabled() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.mouse,
            n = e.interactivity.events,
            r = n.onDiv,
            a = s.Utils.isDivModeEnabled(o.DivMode.repulse, r);
        //   if (
        //     !(
        //       a ||
        //       (n.onHover.enable && i.position) ||
        //       (n.onClick.enable && i.clickPosition)
        //     )
        //   )
            return !1;
        //   const l = n.onHover.mode,
        //     c = n.onClick.mode;
        //   return (
        //     s.Utils.isInArray(o.HoverMode.repulse, l) ||
        //     s.Utils.isInArray(o.ClickMode.repulse, c) ||
        //     a
        //   );
        }
        reset() {}
        interact() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.status === s.Constants.mouseMoveEvent,
            n = e.interactivity.events,
            r = n.onHover.enable,
            a = n.onHover.mode,
            l = n.onClick.enable,
            c = n.onClick.mode,
            u = n.onDiv;
          this.hoverRepulse();
          //   i && r && l && s.Utils.isInArray(o.ClickMode.repulse, c)
          //     ? this.clickRepulse()
          //     : s.Utils.divModeExecute(o.DivMode.repulse, u, (t, e) =>
          //         this.singleSelectorRepulse(t, e)
          //     );
        }
        singleSelectorRepulse(t, e) {
          const i = this.container,
            n = document.querySelectorAll(t);
          n.length &&
            n.forEach((t) => {
              const n = t,
                r = i.retina.pixelRatio,
                a = {
                  x: (n.offsetLeft + n.offsetWidth / 2) * r,
                  y: (n.offsetTop + n.offsetHeight / 2) * r,
                },
                l = (n.offsetWidth / 2) * r,
                c =
                  e.type === o.DivType.circle
                    ? new s.Circle(a.x, a.y, l)
                    : new s.Rectangle(
                        n.offsetLeft * r,
                        n.offsetTop * r,
                        n.offsetWidth * r,
                        n.offsetHeight * r
                      ),
                u = i.actualOptions.interactivity.modes.repulse.divs,
                d = s.Utils.divMode(u, n);
              this.processRepulse(a, l, c, d);
            });
        }
        hoverRepulse() {
          const t = this.container,
            e = t.canvas.size;
          (e.x /= 2), (e.y /= 2);
          // e = t.interactivity.mouse.position;
          if (!e) return;
          const i = t.retina.repulseModeDistance;
          this.processRepulse(e, i, new s.Circle(e.width, e.height, i));
        }
        processRepulse(t, e, i, o) {
          var n;
          const r = this.container,
            a = r.actualOptions.interactivity.modes.repulse,
            l = r.particles.quadTree.query(i);
          for (const i of l) {
            const {
                dx: r,
                dy: l,
                distance: c,
              } = s.NumberUtils.getDistances(i.position, t),
              u = { x: r / c, y: l / c },
              d =
                (null !== (n = null == o ? void 0 : o.speed) && void 0 !== n
                  ? n
                  : a.speed) * a.factor,
              h = s.NumberUtils.clamp(
                s.NumberUtils.calcEasing(1 - c / e, a.easing) * d,
                0,
                a.maxSpeed
              );
            (i.position.x += u.x * h), (i.position.y += u.y * h);
          }
        }
        clickRepulse() {
          const t = this.container;
          if (
            (t.repulse.finish ||
              (t.repulse.count || (t.repulse.count = 0),
              t.repulse.count++,
              t.repulse.count === t.particles.count && (t.repulse.finish = !0)),
            t.repulse.clicking)
          ) {
            const e = t.retina.repulseModeDistance,
              i = Math.pow(e / 6, 3),
              o = t.interactivity.mouse.clickPosition;
            if (void 0 === o) return;
            const r = new s.Circle(o.x, o.y, i),
              a = t.particles.quadTree.query(r);
            for (const e of a) {
              const {
                  dx: r,
                  dy: a,
                  distance: l,
                } = s.NumberUtils.getDistances(o, e.position),
                c = l * l;
              if (c <= i) {
                t.repulse.particles.push(e);
                const o = t.actualOptions.interactivity.modes.repulse.speed,
                  s = n.Vector.create(r, a);
                (s.length = (-i * o) / c), e.velocity.setTo(s);
              }
            }
          } else if (!1 === t.repulse.clicking) {
            for (const e of t.repulse.particles)
              e.velocity.setTo(e.initialVelocity);
            t.repulse.particles = [];
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Bubbler = void 0);
      const o = i(0),
        s = i(1);
      function n(t, e, i, s) {
        if (e > i) {
          const n = t + (e - i) * s;
          return o.NumberUtils.clamp(n, t, e);
        }
        if (e < i) {
          const n = t - (i - e) * s;
          return o.NumberUtils.clamp(n, e, t);
        }
      }
      e.Bubbler = class {
        constructor(t) {
          this.container = t;
        }
        isEnabled() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.mouse,
            n = e.interactivity.events,
            r = n.onDiv,
            a = o.Utils.isDivModeEnabled(s.DivMode.bubble, r);
          if (
            !(
              a ||
              (n.onHover.enable && i.position) ||
              (n.onClick.enable && i.clickPosition)
            )
          )
            return !1;
          const l = n.onHover.mode,
            c = n.onClick.mode;
          return (
            o.Utils.isInArray(s.HoverMode.bubble, l) ||
            o.Utils.isInArray(s.ClickMode.bubble, c) ||
            a
          );
        }
        reset(t, e) {
          (t.bubble.inRange && !e) ||
            (delete t.bubble.div,
            delete t.bubble.opacity,
            delete t.bubble.radius,
            delete t.bubble.color);
        }
        interact() {
          const t = this.container.actualOptions.interactivity.events,
            e = t.onHover,
            i = t.onClick,
            n = e.enable,
            r = e.mode,
            a = i.enable,
            l = i.mode,
            c = t.onDiv;
          n && o.Utils.isInArray(s.HoverMode.bubble, r)
            ? this.hoverBubble()
            : a && o.Utils.isInArray(s.ClickMode.bubble, l)
            ? this.clickBubble()
            : o.Utils.divModeExecute(s.DivMode.bubble, c, (t, e) =>
                this.singleSelectorHover(t, e)
              );
        }
        singleSelectorHover(t, e) {
          const i = this.container,
            n = document.querySelectorAll(t);
          n.length &&
            n.forEach((t) => {
              const n = t,
                r = i.retina.pixelRatio,
                a = {
                  x: (n.offsetLeft + n.offsetWidth / 2) * r,
                  y: (n.offsetTop + n.offsetHeight / 2) * r,
                },
                l = (n.offsetWidth / 2) * r,
                c =
                  e.type === s.DivType.circle
                    ? new o.Circle(a.x, a.y, l)
                    : new o.Rectangle(
                        n.offsetLeft * r,
                        n.offsetTop * r,
                        n.offsetWidth * r,
                        n.offsetHeight * r
                      ),
                u = i.particles.quadTree.query(c);
              for (const t of u) {
                if (!c.contains(t.getPosition())) continue;
                t.bubble.inRange = !0;
                const e = i.actualOptions.interactivity.modes.bubble.divs,
                  s = o.Utils.divMode(e, n);
                (t.bubble.div && t.bubble.div === n) ||
                  (this.reset(t, !0), (t.bubble.div = n)),
                  this.hoverBubbleSize(t, 1, s),
                  this.hoverBubbleOpacity(t, 1, s),
                  this.hoverBubbleColor(t, s);
              }
            });
        }
        process(t, e, i, o) {
          const n = this.container,
            r = o.bubbleObj.optValue;
          if (void 0 === r) return;
          const a = n.actualOptions.interactivity.modes.bubble.duration,
            l = n.retina.bubbleModeDistance,
            c = o.particlesObj.optValue,
            u = o.bubbleObj.value,
            d = o.particlesObj.value || 0,
            h = o.type;
          if (r !== c)
            if (n.bubble.durationEnd)
              u &&
                (h === s.ProcessBubbleType.size && delete t.bubble.radius,
                h === s.ProcessBubbleType.opacity && delete t.bubble.opacity);
            else if (e <= l) {
              if ((null != u ? u : d) !== r) {
                const e = d - (i * (d - r)) / a;
                h === s.ProcessBubbleType.size && (t.bubble.radius = e),
                  h === s.ProcessBubbleType.opacity && (t.bubble.opacity = e);
              }
            } else
              h === s.ProcessBubbleType.size && delete t.bubble.radius,
                h === s.ProcessBubbleType.opacity && delete t.bubble.opacity;
        }
        clickBubble() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.mouse.clickPosition;
          if (void 0 === i) return;
          const n = t.retina.bubbleModeDistance,
            r = t.particles.quadTree.queryCircle(i, n);
          for (const n of r) {
            if (!t.bubble.clicking) continue;
            n.bubble.inRange = !t.bubble.durationEnd;
            const r = n.getPosition(),
              a = o.NumberUtils.getDistance(r, i),
              l =
                (new Date().getTime() -
                  (t.interactivity.mouse.clickTime || 0)) /
                1e3;
            l > e.interactivity.modes.bubble.duration &&
              (t.bubble.durationEnd = !0),
              l > 2 * e.interactivity.modes.bubble.duration &&
                ((t.bubble.clicking = !1), (t.bubble.durationEnd = !1));
            const c = {
              bubbleObj: {
                optValue: t.retina.bubbleModeSize,
                value: n.bubble.radius,
              },
              particlesObj: {
                optValue:
                  o.NumberUtils.getRangeMax(n.options.size.value) *
                  t.retina.pixelRatio,
                value: n.size.value,
              },
              type: s.ProcessBubbleType.size,
            };
            this.process(n, a, l, c);
            const u = {
              bubbleObj: {
                optValue: e.interactivity.modes.bubble.opacity,
                value: n.bubble.opacity,
              },
              particlesObj: {
                optValue: o.NumberUtils.getRangeMax(n.options.opacity.value),
                value: n.opacity.value,
              },
              type: s.ProcessBubbleType.opacity,
            };
            this.process(n, a, l, u),
              t.bubble.durationEnd
                ? delete n.bubble.color
                : a <= t.retina.bubbleModeDistance
                ? this.hoverBubbleColor(n)
                : delete n.bubble.color;
          }
        }
        hoverBubble() {
          const t = this.container,
            e = t.interactivity.mouse.position;
          if (void 0 === e) return;
          const i = t.retina.bubbleModeDistance,
            s = t.particles.quadTree.queryCircle(e, i);
          for (const n of s) {
            n.bubble.inRange = !0;
            const s = n.getPosition(),
              r = o.NumberUtils.getDistance(s, e),
              a = 1 - r / i;
            r <= i
              ? a >= 0 &&
                t.interactivity.status === o.Constants.mouseMoveEvent &&
                (this.hoverBubbleSize(n, a),
                this.hoverBubbleOpacity(n, a),
                this.hoverBubbleColor(n))
              : this.reset(n),
              t.interactivity.status === o.Constants.mouseLeaveEvent &&
                this.reset(n);
          }
        }
        hoverBubbleSize(t, e, i) {
          const s = this.container,
            r = (null == i ? void 0 : i.size)
              ? i.size * s.retina.pixelRatio
              : s.retina.bubbleModeSize;
          if (void 0 === r) return;
          const a =
              o.NumberUtils.getRangeMax(t.options.size.value) *
              s.retina.pixelRatio,
            l = n(t.size.value, r, a, e);
          void 0 !== l && (t.bubble.radius = l);
        }
        hoverBubbleOpacity(t, e, i) {
          var s;
          const r = this.container.actualOptions,
            a =
              null !== (s = null == i ? void 0 : i.opacity) && void 0 !== s
                ? s
                : r.interactivity.modes.bubble.opacity;
          if (void 0 === a) return;
          const l = t.options.opacity.value,
            c = n(t.opacity.value, a, o.NumberUtils.getRangeMax(l), e);
          void 0 !== c && (t.bubble.opacity = c);
        }
        hoverBubbleColor(t, e) {
          var i;
          const s = this.container.actualOptions;
          if (void 0 === t.bubble.color) {
            const n =
              null !== (i = null == e ? void 0 : e.color) && void 0 !== i
                ? i
                : s.interactivity.modes.bubble.color;
            if (void 0 === n) return;
            const r = n instanceof Array ? o.Utils.itemFromArray(n) : n;
            t.bubble.color = o.ColorUtils.colorToHsl(r);
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Connector = void 0);
      const o = i(0),
        s = i(6);
      e.Connector = class {
        constructor(t) {
          this.container = t;
        }
        isEnabled() {
          const t = this.container,
            e = t.interactivity.mouse,
            i = t.actualOptions.interactivity.events;
          if (!i.onHover.enable || !e.position) return !1;
          const n = i.onHover.mode;
          return o.Utils.isInArray(s.HoverMode.connect, n);
        }
        reset() {}
        interact() {
          const t = this.container;
          if (
            t.actualOptions.interactivity.events.onHover.enable
          ) {
            const e = t.interactivity.mouse.position;
            if (!e) return;
            const i = Math.abs(t.retina.connectModeRadius),
              o = t.particles.quadTree.queryCircle(e, i);
            let s = 0;
            for (const e of o) {
              const i = e.getPosition();
              for (const n of o.slice(s + 1)) {
                const o = n.getPosition(),
                  s = Math.abs(t.retina.connectModeDistance),
                  r = Math.abs(i.x - o.x),
                  a = Math.abs(i.y - o.y);
                r < s && a < s && t.canvas.drawConnectLine(e, n);
              }
              ++s;
            }
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Linker = void 0);
      const o = i(0);
      e.Linker = class {
        constructor(t) {
          this.container = t;
        }
        isEnabled(t) {
          return t.options.links.enable;
        }
        reset() {}
        interact(t) {
          var e;
          const i = this.container,
            s = t.options.links,
            n = s.opacity,
            r =
              null !== (e = t.linksDistance) && void 0 !== e
                ? e
                : i.retina.linksDistance,
            a = i.canvas.size,
            l = s.warp,
            c = t.getPosition(),
            u = l
              ? new o.CircleWarp(c.x, c.y, r, a)
              : new o.Circle(c.x, c.y, r),
            d = i.particles.quadTree.query(u);
          for (const e of d) {
            const u = e.options.links;
            if (
              t === e ||
              !u.enable ||
              s.id !== u.id ||
              e.spawning ||
              e.destroyed
            )
              continue;
            const d = e.getPosition();
            let h = o.NumberUtils.getDistance(c, d);
            if (l && h > r) {
              const t = { x: d.x - a.width, y: d.y };
              if (((h = o.NumberUtils.getDistance(c, t)), h > r)) {
                const t = { x: d.x - a.width, y: d.y - a.height };
                if (((h = o.NumberUtils.getDistance(c, t)), h > r)) {
                  const t = { x: d.x, y: d.y - a.height };
                  h = o.NumberUtils.getDistance(c, t);
                }
              }
            }
            if (h > r) return;
            const v = (1 - h / r) * n,
              p = t.options.links;
            let f =
              void 0 !== p.id
                ? i.particles.linksColors.get(p.id)
                : i.particles.linksColor;
            if (!f) {
              const t = p.color;
              (f = o.ColorUtils.getLinkRandomColor(t, p.blink, p.consent)),
                void 0 !== p.id
                  ? i.particles.linksColors.set(p.id, f)
                  : (i.particles.linksColor = f);
            }
            -1 === e.links.map((t) => t.destination).indexOf(t) &&
              -1 === t.links.map((t) => t.destination).indexOf(e) &&
              t.links.push({ destination: e, opacity: v });
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Attractor = void 0);
      const o = i(0);
      e.Attractor = class {
        constructor(t) {
          this.container = t;
        }
        interact(t) {
          var e;
          const i = this.container,
            s =
              null !== (e = t.attractDistance) && void 0 !== e
                ? e
                : i.retina.attractDistance,
            n = t.getPosition(),
            r = i.particles.quadTree.queryCircle(n, s);
          for (const e of r) {
            if (
              t === e ||
              !e.options.move.attract.enable ||
              e.destroyed ||
              e.spawning
            )
              continue;
            const i = e.getPosition(),
              { dx: s, dy: r } = o.NumberUtils.getDistances(n, i),
              a = t.options.move.attract.rotate,
              l = s / (1e3 * a.x),
              c = r / (1e3 * a.y);
            (t.velocity.x -= l),
              (t.velocity.y -= c),
              (e.velocity.x += l),
              (e.velocity.y += c);
          }
        }
        isEnabled(t) {
          return t.options.move.attract.enable;
        }
        reset() {}
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Collider = void 0);
      const o = i(1),
        s = i(0);
      e.Collider = class {
        constructor(t) {
          this.container = t;
        }
        isEnabled(t) {
          return t.options.collisions.enable;
        }
        reset() {}
        interact(t) {
          const e = this.container,
            i = t.getPosition(),
            o = e.particles.quadTree.queryCircle(i, 2 * t.getRadius());
          for (const e of o) {
            if (
              t === e ||
              !e.options.collisions.enable ||
              t.options.collisions.mode !== e.options.collisions.mode ||
              e.destroyed ||
              e.spawning
            )
              continue;
            const o = e.getPosition();
            s.NumberUtils.getDistance(i, o) <= t.getRadius() + e.getRadius() &&
              this.resolveCollision(t, e);
          }
        }
        resolveCollision(t, e) {
          switch (t.options.collisions.mode) {
            case o.CollisionMode.absorb:
              this.absorb(t, e);
              break;
            case o.CollisionMode.bounce:
              !(function (t, e) {
                s.Utils.circleBounce(
                  s.Utils.circleBounceDataFromParticle(t),
                  s.Utils.circleBounceDataFromParticle(e)
                );
              })(t, e);
              break;
            case o.CollisionMode.destroy:
              !(function (t, e) {
                void 0 === t.getRadius() && void 0 !== e.getRadius()
                  ? t.destroy()
                  : void 0 !== t.getRadius() && void 0 === e.getRadius()
                  ? e.destroy()
                  : void 0 !== t.getRadius() &&
                    void 0 !== e.getRadius() &&
                    (t.getRadius() >= e.getRadius()
                      ? e.destroy()
                      : t.destroy());
              })(t, e);
          }
        }
        absorb(t, e) {
          const i = this.container,
            o = i.actualOptions.fpsLimit / 1e3;
          if (void 0 === t.getRadius() && void 0 !== e.getRadius()) t.destroy();
          else if (void 0 !== t.getRadius() && void 0 === e.getRadius())
            e.destroy();
          else if (void 0 !== t.getRadius() && void 0 !== e.getRadius())
            if (t.getRadius() >= e.getRadius()) {
              const n =
                s.NumberUtils.clamp(
                  t.getRadius() / e.getRadius(),
                  0,
                  e.getRadius()
                ) * o;
              (t.size.value += n),
                (e.size.value -= n),
                e.getRadius() <= i.retina.pixelRatio &&
                  ((e.size.value = 0), e.destroy());
            } else {
              const n =
                s.NumberUtils.clamp(
                  e.getRadius() / t.getRadius(),
                  0,
                  t.getRadius()
                ) * o;
              (t.size.value -= n),
                (e.size.value += n),
                t.getRadius() <= i.retina.pixelRatio &&
                  ((t.size.value = 0), t.destroy());
            }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Infecter = void 0);
      e.Infecter = class {
        constructor(t) {
          this.container = t;
        }
        isEnabled() {
          return this.container.actualOptions.infection.enable;
        }
        reset() {}
        interact(t, e) {
          var i, o;
          const s = t.infecter;
          if ((s.updateInfection(e.value), void 0 === s.infectionStage)) return;
          const n = this.container,
            r = n.actualOptions.infection;
          if (!r.enable || r.stages.length < 1) return;
          const a = r.stages[s.infectionStage],
            l = n.retina.pixelRatio,
            c = 2 * t.getRadius() + a.radius * l,
            u = t.getPosition(),
            d =
              null !== (i = a.infectedStage) && void 0 !== i
                ? i
                : s.infectionStage,
            h = n.particles.quadTree.queryCircle(u, c),
            v = a.rate,
            p = h.length;
          for (const e of h) {
            if (
              e === t ||
              e.destroyed ||
              e.spawning ||
              (void 0 !== e.infecter.infectionStage &&
                e.infecter.infectionStage === s.infectionStage)
            )
              continue;
            const i = e.infecter;
            if (Math.random() < v / p)
              if (void 0 === i.infectionStage) i.startInfection(d);
              else if (i.infectionStage < s.infectionStage)
                i.updateInfectionStage(d);
              else if (i.infectionStage > s.infectionStage) {
                const t = r.stages[i.infectionStage],
                  e =
                    null !== (o = null == t ? void 0 : t.infectedStage) &&
                    void 0 !== o
                      ? o
                      : i.infectionStage;
                s.updateInfectionStage(e);
              }
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TrailMaker = void 0);
      const o = i(0),
        s = i(1);
      e.TrailMaker = class {
        constructor(t) {
          (this.container = t), (this.delay = 0);
        }
        interact(t) {
          var e, i, o, s;
          if (!this.container.retina.reduceFactor) return;
          const n = this.container,
            r = n.actualOptions.interactivity.modes.trail,
            a = (1e3 * r.delay) / this.container.retina.reduceFactor;
          if ((this.delay < a && (this.delay += t.value), this.delay < a))
            return;
          let l = !0;
          r.pauseOnStop &&
            (n.interactivity.mouse.position === this.lastPosition ||
              ((null === (e = n.interactivity.mouse.position) || void 0 === e
                ? void 0
                : e.x) ===
                (null === (i = this.lastPosition) || void 0 === i
                  ? void 0
                  : i.x) &&
                (null === (o = n.interactivity.mouse.position) || void 0 === o
                  ? void 0
                  : o.y) ===
                  (null === (s = this.lastPosition) || void 0 === s
                    ? void 0
                    : s.y))) &&
            (l = !1),
            n.interactivity.mouse.position
              ? (this.lastPosition = {
                  x: n.interactivity.mouse.position.x,
                  y: n.interactivity.mouse.position.y,
                })
              : delete this.lastPosition,
            l &&
              n.particles.push(r.quantity, n.interactivity.mouse, r.particles),
            (this.delay -= a);
        }
        isEnabled() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.mouse,
            n = e.interactivity.events;
          return (
            (i.clicking &&
              i.inside &&
              !!i.position &&
              o.Utils.isInArray(s.ClickMode.trail, n.onClick.mode)) ||
            (i.inside &&
              !!i.position &&
              o.Utils.isInArray(s.HoverMode.trail, n.onHover.mode))
          );
        }
        reset() {}
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Attractor = void 0);
      const o = i(1),
        s = i(0);
      e.Attractor = class {
        constructor(t) {
          this.container = t;
        }
        isEnabled() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.mouse,
            n = e.interactivity.events;
          if (
            !(
              (n.onHover.enable && i.position) ||
              (n.onClick.enable && i.clickPosition)
            )
          )
            return !1;
          const r = n.onHover.mode,
            a = n.onClick.mode;
          return (
            s.Utils.isInArray(o.HoverMode.attract, r) ||
            s.Utils.isInArray(o.ClickMode.attract, a)
          );
        }
        reset() {}
        interact() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.status === s.Constants.mouseMoveEvent,
            n = e.interactivity.events,
            r = n.onHover.enable,
            a = n.onHover.mode,
            l = n.onClick.enable,
            c = n.onClick.mode;
          i && r && s.Utils.isInArray(o.HoverMode.attract, a)
            ? this.hoverAttract()
            : l &&
              s.Utils.isInArray(o.ClickMode.attract, c) &&
              this.clickAttract();
        }
        hoverAttract() {
          const t = this.container,
            e = t.interactivity.mouse.position;
          if (!e) return;
          const i = t.retina.attractModeDistance;
          this.processAttract(e, i, new s.Circle(e.x, e.y, i));
        }
        processAttract(t, e, i) {
          const o = this.container,
            n = o.actualOptions.interactivity.modes.attract,
            r = o.particles.quadTree.query(i);
          for (const i of r) {
            const {
                dx: o,
                dy: r,
                distance: a,
              } = s.NumberUtils.getDistances(i.position, t),
              l = { x: o / a, y: r / a },
              c = n.speed * n.factor,
              u = s.NumberUtils.clamp(
                s.NumberUtils.calcEasing(1 - a / e, n.easing) * c,
                0,
                n.maxSpeed
              );
            (i.position.x -= l.x * u), (i.position.y -= l.y * u);
          }
        }
        clickAttract() {
          const t = this.container;
          if (
            (t.attract.finish ||
              (t.attract.count || (t.attract.count = 0),
              t.attract.count++,
              t.attract.count === t.particles.count && (t.attract.finish = !0)),
            t.attract.clicking)
          ) {
            const e = t.interactivity.mouse.clickPosition;
            if (!e) return;
            const i = t.retina.attractModeDistance;
            this.processAttract(e, i, new s.Circle(e.x, e.y, i));
          } else !1 === t.attract.clicking && (t.attract.particles = []);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Lighter = void 0);
      const o = i(0),
        s = i(6);
      e.Lighter = class {
        constructor(t) {
          this.container = t;
        }
        interact(t) {
          const e = this.container;
          if (e.actualOptions.interactivity.events.onHover.enable) {
            const i = this.container.interactivity.mouse.position;
            i && e.canvas.drawParticleShadow(t, i);
          }
        }
        isEnabled() {
          const t = this.container,
            e = t.interactivity.mouse,
            i = t.actualOptions.interactivity.events;
          if (!i.onHover.enable || !e.position) return !1;
          const n = i.onHover.mode;
          return o.Utils.isInArray(s.HoverMode.light, n);
        }
        reset() {}
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Lighter = void 0);
      const o = i(0),
        s = i(6);
      e.Lighter = class {
        constructor(t) {
          this.container = t;
        }
        interact() {
          const t = this.container;
          if (
            t.actualOptions.interactivity.events.onHover.enable &&
            "mousemove" === t.interactivity.status
          ) {
            const e = t.interactivity.mouse.position;
            if (!e) return;
            t.canvas.drawLight(e);
          }
        }
        isEnabled() {
          const t = this.container,
            e = t.interactivity.mouse,
            i = t.actualOptions.interactivity.events;
          if (!i.onHover.enable || !e.position) return !1;
          const n = i.onHover.mode;
          return o.Utils.isInArray(s.HoverMode.light, n);
        }
        reset() {}
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Bouncer = void 0);
      const o = i(0),
        s = i(1),
        n = i(7);
      e.Bouncer = class {
        constructor(t) {
          this.container = t;
        }
        isEnabled() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.mouse,
            n = e.interactivity.events,
            r = n.onDiv;
          return (
            (i.position &&
              n.onHover.enable &&
              o.Utils.isInArray(s.HoverMode.bounce, n.onHover.mode)) ||
            o.Utils.isDivModeEnabled(s.DivMode.bounce, r)
          );
        }
        interact() {
          const t = this.container,
            e = t.actualOptions.interactivity.events,
            i = t.interactivity.status === o.Constants.mouseMoveEvent,
            n = e.onHover.enable,
            r = e.onHover.mode,
            a = e.onDiv;
          i && n && o.Utils.isInArray(s.HoverMode.bounce, r)
            ? this.processMouseBounce()
            : o.Utils.divModeExecute(s.DivMode.bounce, a, (t, e) =>
                this.singleSelectorBounce(t, e)
              );
        }
        reset() {}
        processMouseBounce() {
          const t = this.container,
            e = 10 * t.retina.pixelRatio,
            i = t.interactivity.mouse.position,
            s = t.retina.bounceModeDistance;
          i && this.processBounce(i, s, new o.Circle(i.x, i.y, s + e));
        }
        singleSelectorBounce(t, e) {
          const i = this.container,
            n = document.querySelectorAll(t);
          n.length &&
            n.forEach((t) => {
              const n = t,
                r = i.retina.pixelRatio,
                a = {
                  x: (n.offsetLeft + n.offsetWidth / 2) * r,
                  y: (n.offsetTop + n.offsetHeight / 2) * r,
                },
                l = (n.offsetWidth / 2) * r,
                c = 10 * r,
                u =
                  e.type === s.DivType.circle
                    ? new o.Circle(a.x, a.y, l + c)
                    : new o.Rectangle(
                        n.offsetLeft * r - c,
                        n.offsetTop * r - c,
                        n.offsetWidth * r + 2 * c,
                        n.offsetHeight * r + 2 * c
                      );
              this.processBounce(a, l, u);
            });
        }
        processBounce(t, e, i) {
          const s = this.container.particles.quadTree.query(i);
          for (const r of s)
            i instanceof o.Circle
              ? o.Utils.circleBounce(o.Utils.circleBounceDataFromParticle(r), {
                  position: t,
                  radius: e,
                  mass: (Math.pow(e, 2) * Math.PI) / 2,
                  velocity: n.Vector.create(0, 0),
                  factor: { horizontal: 0, vertical: 0 },
                })
              : i instanceof o.Rectangle &&
                o.Utils.rectBounce(r, o.Utils.calculateBounds(t, e));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Retina = void 0);
      const o = i(0);
      e.Retina = class {
        constructor(t) {
          this.container = t;
        }
        init() {
          const t = this.container,
            e = t.actualOptions;
          this.pixelRatio =
            !e.detectRetina || o.Utils.isSsr() ? 1 : window.devicePixelRatio;
          const i = this.container.actualOptions.motion;
          if (i && (i.disable || i.reduce.value))
            if (
              o.Utils.isSsr() ||
              "undefined" == typeof matchMedia ||
              !matchMedia
            )
              this.reduceFactor = 1;
            else {
              const e = matchMedia("(prefers-reduced-motion: reduce)");
              if (e) {
                this.handleMotionChange(e);
                const i = () => {
                  this.handleMotionChange(e), t.refresh().catch(() => {});
                };
                void 0 !== e.addEventListener
                  ? e.addEventListener("change", i)
                  : void 0 !== e.addListener && e.addListener(i);
              }
            }
          else this.reduceFactor = 1;
          const s = this.pixelRatio;
          if (t.canvas.element) {
            const e = t.canvas.element;
            (t.canvas.size.width = e.offsetWidth * s),
              (t.canvas.size.height = e.offsetHeight * s);
          }
          const n = e.particles;
          (this.attractDistance = n.move.attract.distance * s),
            (this.linksDistance = n.links.distance * s),
            (this.linksWidth = n.links.width * s),
            (this.sizeAnimationSpeed = n.size.animation.speed * s);
          const r = e.interactivity.modes;
          (this.connectModeDistance = r.connect.distance * s),
            (this.connectModeRadius = r.connect.radius * s),
            (this.grabModeDistance = r.grab.distance * s),
            (this.repulseModeDistance = r.repulse.distance * s),
            (this.bounceModeDistance = r.bounce.distance * s),
            (this.attractModeDistance = r.attract.distance * s),
            (this.slowModeRadius = r.slow.radius * s),
            (this.bubbleModeDistance = r.bubble.distance * s),
            r.bubble.size && (this.bubbleModeSize = r.bubble.size * s);
        }
        initParticle(t) {
          const e = t.options,
            i = this.pixelRatio;
          (t.attractDistance = e.move.attract.distance * i),
            (t.linksDistance = e.links.distance * i),
            (t.linksWidth = e.links.width * i),
            (t.moveDrift = o.NumberUtils.getRangeValue(e.move.drift) * i),
            (t.moveSpeed = o.NumberUtils.getRangeValue(e.move.speed) * i),
            (t.sizeAnimationSpeed = e.size.animation.speed * i),
            (t.maxDistance = e.move.distance * i),
            (t.wobbleDistance =
              o.NumberUtils.getRangeValue(e.wobble.distance) * i);
        }
        handleMotionChange(t) {
          const e = this.container.actualOptions;
          if (t.matches) {
            const t = e.motion;
            this.reduceFactor = t.disable
              ? 0
              : t.reduce.value
              ? 1 / t.reduce.factor
              : 1;
          } else this.reduceFactor = 1;
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FrameManager = void 0);
      e.FrameManager = class {
        constructor(t) {
          this.container = t;
        }
        nextFrame(t) {
          try {
            const e = this.container;
            if (
              void 0 !== e.lastFrameTime &&
              t < e.lastFrameTime + 1e3 / e.fpsLimit
            )
              return void e.draw();
            const i = t - e.lastFrameTime,
              o = { value: i, factor: (60 * i) / 1e3 };
            (e.lastFrameTime = t),
              e.particles.draw(o),
              e.getAnimationStatus() && e.draw();
          } catch (t) {
            console.error("tsParticles error in animation loop", t);
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AbsorbersPlugin = void 0);
      const n = i(266),
        r = i(0),
        a = i(9),
        l = i(53);
      const c = new (class {
        constructor() {
          this.id = "absorbers";
        }
        getPlugin(t) {
          return new n.Absorbers(t);
        }
        needsPlugin(t) {
          var e, i, o;
          if (void 0 === t) return !1;
          const s = t.absorbers;
          let n = !1;
          return (
            s instanceof Array
              ? s.length && (n = !0)
              : (void 0 !== s ||
                  ((null ===
                    (o =
                      null ===
                        (i =
                          null === (e = t.interactivity) || void 0 === e
                            ? void 0
                            : e.events) || void 0 === i
                        ? void 0
                        : i.onClick) || void 0 === o
                    ? void 0
                    : o.mode) &&
                    r.Utils.isInArray(
                      a.AbsorberClickMode.absorber,
                      t.interactivity.events.onClick.mode
                    ))) &&
                (n = !0),
            n
          );
        }
        loadOptions(t, e) {
          var i, o;
          if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
          const s = t;
          if (null == e ? void 0 : e.absorbers)
            if ((null == e ? void 0 : e.absorbers) instanceof Array)
              s.absorbers =
                null == e
                  ? void 0
                  : e.absorbers.map((t) => {
                      const e = new l.Absorber();
                      return e.load(t), e;
                    });
            else {
              let t = s.absorbers;
              void 0 === (null == t ? void 0 : t.load) &&
                (s.absorbers = t = new l.Absorber()),
                t.load(null == e ? void 0 : e.absorbers);
            }
          const n =
            null ===
              (o =
                null === (i = null == e ? void 0 : e.interactivity) ||
                void 0 === i
                  ? void 0
                  : i.modes) || void 0 === o
              ? void 0
              : o.absorbers;
          if (n)
            if (n instanceof Array)
              s.interactivity.modes.absorbers = n.map((t) => {
                const e = new l.Absorber();
                return e.load(t), e;
              });
            else {
              let t = s.interactivity.modes.absorbers;
              void 0 === (null == t ? void 0 : t.load) &&
                (s.interactivity.modes.absorbers = t = new l.Absorber()),
                t.load(n);
            }
        }
      })();
      (e.AbsorbersPlugin = c), s(i(9), e);
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Absorbers = void 0);
      const o = i(267),
        s = i(0),
        n = i(53),
        r = i(9);
      e.Absorbers = class {
        constructor(t) {
          (this.container = t),
            (this.array = []),
            (this.absorbers = []),
            (this.interactivityAbsorbers = []);
          const e = t;
          (e.getAbsorber = (t) =>
            void 0 === t || "number" == typeof t
              ? this.array[t || 0]
              : this.array.find((e) => e.name === t)),
            (e.addAbsorber = (t, e) => this.addAbsorber(t, e));
        }
        init(t) {
          var e, i;
          if (!t) return;
          t.absorbers &&
            (t.absorbers instanceof Array
              ? (this.absorbers = t.absorbers.map((t) => {
                  const e = new n.Absorber();
                  return e.load(t), e;
                }))
              : (this.absorbers instanceof Array &&
                  (this.absorbers = new n.Absorber()),
                this.absorbers.load(t.absorbers)));
          const o =
            null ===
              (i =
                null === (e = t.interactivity) || void 0 === e
                  ? void 0
                  : e.modes) || void 0 === i
              ? void 0
              : i.absorbers;
          if (
            (o &&
              (o instanceof Array
                ? (this.interactivityAbsorbers = o.map((t) => {
                    const e = new n.Absorber();
                    return e.load(t), e;
                  }))
                : (this.interactivityAbsorbers instanceof Array &&
                    (this.interactivityAbsorbers = new n.Absorber()),
                  this.interactivityAbsorbers.load(o))),
            this.absorbers instanceof Array)
          )
            for (const t of this.absorbers) this.addAbsorber(t);
          else this.addAbsorber(this.absorbers);
        }
        particleUpdate(t) {
          for (const e of this.array) if ((e.attract(t), t.destroyed)) break;
        }
        draw(t) {
          for (const e of this.array) t.save(), e.draw(t), t.restore();
        }
        stop() {
          this.array = [];
        }
        resize() {
          for (const t of this.array) t.resize();
        }
        handleClickMode(t) {
          const e = this.container,
            i = this.absorbers,
            o = this.interactivityAbsorbers;
          if (t === r.AbsorberClickMode.absorber) {
            let t;
            o instanceof Array
              ? o.length > 0 && (t = s.Utils.itemFromArray(o))
              : (t = o);
            const n =
                null != t
                  ? t
                  : i instanceof Array
                  ? s.Utils.itemFromArray(i)
                  : i,
              r = e.interactivity.mouse.clickPosition;
            this.addAbsorber(n, r);
          }
        }
        addAbsorber(t, e) {
          const i = new o.AbsorberInstance(this, this.container, t, e);
          return this.array.push(i), i;
        }
        removeAbsorber(t) {
          const e = this.array.indexOf(t);
          e >= 0 && this.array.splice(e, 1);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AbsorberInstance = void 0);
      const o = i(0),
        s = i(7);
      e.AbsorberInstance = class {
        constructor(t, e, i, n) {
          var r, a, l;
          (this.absorbers = t),
            (this.container = e),
            (this.initialPosition = n ? s.Vector.create(n.x, n.y) : void 0),
            (this.options = i),
            (this.dragging = !1),
            (this.name = this.options.name),
            (this.opacity = this.options.opacity),
            (this.size = o.NumberUtils.getValue(i.size) * e.retina.pixelRatio),
            (this.mass = this.size * i.size.density * e.retina.reduceFactor);
          const c = i.size.limit;
          this.limit =
            void 0 !== c ? c * e.retina.pixelRatio * e.retina.reduceFactor : c;
          const u = "string" == typeof i.color ? { value: i.color } : i.color;
          (this.color =
            null !== (r = o.ColorUtils.colorToRgb(u)) && void 0 !== r
              ? r
              : { b: 0, g: 0, r: 0 }),
            (this.position =
              null !==
                (l =
                  null === (a = this.initialPosition) || void 0 === a
                    ? void 0
                    : a.copy()) && void 0 !== l
                ? l
                : this.calcPosition());
        }
        attract(t) {
          const e = this.options;
          if (e.draggable) {
            const t = this.container.interactivity.mouse;
            if (t.clicking && t.downPosition) {
              o.NumberUtils.getDistance(this.position, t.downPosition) <=
                this.size && (this.dragging = !0);
            } else this.dragging = !1;
            this.dragging &&
              t.position &&
              ((this.position.x = t.position.x),
              (this.position.y = t.position.y));
          }
          const i = t.getPosition(),
            {
              dx: n,
              dy: r,
              distance: a,
            } = o.NumberUtils.getDistances(this.position, i),
            l = s.Vector.create(n, r);
          if (
            ((l.length =
              (this.mass / Math.pow(a, 2)) *
              this.container.retina.reduceFactor),
            a < this.size + t.getRadius())
          ) {
            const i = 0.033 * t.getRadius() * this.container.retina.pixelRatio;
            this.size > t.getRadius() && a < this.size - t.getRadius()
              ? e.destroy
                ? t.destroy()
                : ((t.needsNewPosition = !0), this.updateParticlePosition(t, l))
              : (e.destroy && (t.size.value -= i),
                this.updateParticlePosition(t, l)),
              (void 0 === this.limit || this.size < this.limit) &&
                (this.size += i),
              (this.mass +=
                i *
                this.options.size.density *
                this.container.retina.reduceFactor);
          } else this.updateParticlePosition(t, l);
        }
        resize() {
          const t = this.initialPosition;
          this.position =
            t && o.Utils.isPointInside(t, this.container.canvas.size)
              ? t
              : this.calcPosition();
        }
        draw(t) {
          t.translate(this.position.x, this.position.y),
            t.beginPath(),
            t.arc(0, 0, this.size, 0, 2 * Math.PI, !1),
            t.closePath(),
            (t.fillStyle = o.ColorUtils.getStyleFromRgb(
              this.color,
              this.opacity
            )),
            t.fill();
        }
        calcPosition() {
          var t, e;
          const i = this.container,
            o = this.options.position;
          return s.Vector.create(
            ((null !== (t = null == o ? void 0 : o.x) && void 0 !== t
              ? t
              : 100 * Math.random()) /
              100) *
              i.canvas.size.width,
            ((null !== (e = null == o ? void 0 : o.y) && void 0 !== e
              ? e
              : 100 * Math.random()) /
              100) *
              i.canvas.size.height
          );
        }
        updateParticlePosition(t, e) {
          var i;
          if (t.destroyed) return;
          const n = this.container.canvas.size;
          if (t.needsNewPosition) {
            const e = t.getRadius();
            (t.position.x = Math.random() * (n.width - 2 * e) + e),
              (t.position.y = Math.random() * (n.height - 2 * e) + e),
              (t.needsNewPosition = !1);
          }
          this.options.orbits
            ? (void 0 === t.orbit &&
                ((t.orbit = s.Vector.create(0, 0)),
                (t.orbit.length = o.NumberUtils.getDistance(
                  t.getPosition(),
                  this.position
                )),
                (t.orbit.angle = Math.random() * Math.PI * 2)),
              t.orbit.length <= this.size &&
                !this.options.destroy &&
                (t.orbit.length = Math.random() * Math.max(n.width, n.height)),
              (t.velocity.x = 0),
              (t.velocity.y = 0),
              t.position.setTo(t.orbit.add(this.position)),
              (t.orbit.length -= e.length),
              (t.orbit.angle +=
                ((null !== (i = t.moveSpeed) && void 0 !== i
                  ? i
                  : o.NumberUtils.getRangeValue(t.options.move.speed) *
                    this.container.retina.pixelRatio) /
                  100) *
                this.container.retina.reduceFactor))
            : t.velocity.addTo(e);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AbsorberSize = void 0);
      const o = i(3);
      class s extends o.ValueWithRandom {
        constructor() {
          super(),
            (this.density = 5),
            (this.random.minimumValue = 1),
            (this.value = 50);
        }
        load(t) {
          t &&
            (super.load(t),
            void 0 !== t.density && (this.density = t.density),
            void 0 !== t.limit && (this.limit = t.limit),
            void 0 !== t.limit && (this.limit = t.limit));
        }
      }
      e.AbsorberSize = s;
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AbsorberClickMode = void 0),
        (function (t) {
          t.absorber = "absorber";
        })(e.AbsorberClickMode || (e.AbsorberClickMode = {}));
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EmittersPlugin = void 0);
      const n = i(0),
        r = i(271),
        a = i(10),
        l = i(55);
      const c = new (class {
        constructor() {
          this.id = "emitters";
        }
        getPlugin(t) {
          return new r.Emitters(t);
        }
        needsPlugin(t) {
          var e, i, o;
          if (void 0 === t) return !1;
          const s = t.emitters;
          let r = !1;
          return (
            s instanceof Array
              ? s.length && (r = !0)
              : (void 0 !== s ||
                  ((null ===
                    (o =
                      null ===
                        (i =
                          null === (e = t.interactivity) || void 0 === e
                            ? void 0
                            : e.events) || void 0 === i
                        ? void 0
                        : i.onClick) || void 0 === o
                    ? void 0
                    : o.mode) &&
                    n.Utils.isInArray(
                      a.EmitterClickMode.emitter,
                      t.interactivity.events.onClick.mode
                    ))) &&
                (r = !0),
            r
          );
        }
        loadOptions(t, e) {
          var i, o;
          if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
          const s = t;
          if (null == e ? void 0 : e.emitters)
            if ((null == e ? void 0 : e.emitters) instanceof Array)
              s.emitters =
                null == e
                  ? void 0
                  : e.emitters.map((t) => {
                      const e = new l.Emitter();
                      return e.load(t), e;
                    });
            else {
              let t = s.emitters;
              void 0 === (null == t ? void 0 : t.load) &&
                (s.emitters = t = new l.Emitter()),
                t.load(null == e ? void 0 : e.emitters);
            }
          const n =
            null ===
              (o =
                null === (i = null == e ? void 0 : e.interactivity) ||
                void 0 === i
                  ? void 0
                  : i.modes) || void 0 === o
              ? void 0
              : o.emitters;
          if (n)
            if (n instanceof Array)
              s.interactivity.modes.emitters = n.map((t) => {
                const e = new l.Emitter();
                return e.load(t), e;
              });
            else {
              let t = s.interactivity.modes.emitters;
              void 0 === (null == t ? void 0 : t.load) &&
                (s.interactivity.modes.emitters = t = new l.Emitter()),
                t.load(n);
            }
        }
      })();
      (e.EmittersPlugin = c), s(i(10), e);
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Emitters = void 0);
      const o = i(272),
        s = i(0),
        n = i(55),
        r = i(10);
      e.Emitters = class {
        constructor(t) {
          (this.container = t),
            (this.array = []),
            (this.emitters = []),
            (this.interactivityEmitters = []);
          const e = t;
          (e.getEmitter = (t) =>
            void 0 === t || "number" == typeof t
              ? this.array[t || 0]
              : this.array.find((e) => e.name === t)),
            (e.addEmitter = (t, e) => this.addEmitter(t, e)),
            (e.playEmitter = (t) => {
              const i = e.getEmitter(t);
              i && i.externalPlay();
            }),
            (e.pauseEmitter = (t) => {
              const i = e.getEmitter(t);
              i && i.externalPause();
            });
        }
        init(t) {
          var e, i;
          if (!t) return;
          t.emitters &&
            (t.emitters instanceof Array
              ? (this.emitters = t.emitters.map((t) => {
                  const e = new n.Emitter();
                  return e.load(t), e;
                }))
              : (this.emitters instanceof Array &&
                  (this.emitters = new n.Emitter()),
                this.emitters.load(t.emitters)));
          const o =
            null ===
              (i =
                null === (e = t.interactivity) || void 0 === e
                  ? void 0
                  : e.modes) || void 0 === i
              ? void 0
              : i.emitters;
          if (
            (o &&
              (o instanceof Array
                ? (this.interactivityEmitters = o.map((t) => {
                    const e = new n.Emitter();
                    return e.load(t), e;
                  }))
                : (this.interactivityEmitters instanceof Array &&
                    (this.interactivityEmitters = new n.Emitter()),
                  this.interactivityEmitters.load(o))),
            this.emitters instanceof Array)
          )
            for (const t of this.emitters) this.addEmitter(t);
          else this.addEmitter(this.emitters);
        }
        play() {
          for (const t of this.array) t.play();
        }
        pause() {
          for (const t of this.array) t.pause();
        }
        stop() {
          this.array = [];
        }
        update(t) {
          for (const e of this.array) e.update(t);
        }
        handleClickMode(t) {
          const e = this.container,
            i = this.emitters,
            o = this.interactivityEmitters;
          if (t === r.EmitterClickMode.emitter) {
            let t;
            o instanceof Array
              ? o.length > 0 && (t = s.Utils.itemFromArray(o))
              : (t = o);
            const n =
                null != t
                  ? t
                  : i instanceof Array
                  ? s.Utils.itemFromArray(i)
                  : i,
              r = e.interactivity.mouse.clickPosition;
            this.addEmitter(s.Utils.deepExtend({}, n), r);
          }
        }
        resize() {
          for (const t of this.array) t.resize();
        }
        addEmitter(t, e) {
          const i = new o.EmitterInstance(this, this.container, t, e);
          return this.array.push(i), i;
        }
        removeEmitter(t) {
          const e = this.array.indexOf(t);
          e >= 0 && this.array.splice(e, 1);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EmitterInstance = void 0);
      const o = i(0),
        s = i(1),
        n = i(54);
      function r(t, e) {
        return t + e * (Math.random() - 0.5);
      }
      function a(t, e) {
        return { x: r(t.x, e.x), y: r(t.y, e.y) };
      }
      e.EmitterInstance = class {
        constructor(t, e, i, r) {
          var a, l, c, u, d, h, v;
          (this.emitters = t),
            (this.container = e),
            (this.firstSpawn = !0),
            (this.currentDuration = 0),
            (this.currentEmitDelay = 0),
            (this.currentSpawnDelay = 0),
            (this.initialPosition = r),
            (this.emitterOptions = o.Utils.deepExtend({}, i)),
            (this.spawnDelay =
              (1e3 *
                (null !== (a = this.emitterOptions.life.delay) && void 0 !== a
                  ? a
                  : 0)) /
              this.container.retina.reduceFactor),
            (this.position =
              null !== (l = this.initialPosition) && void 0 !== l
                ? l
                : this.calcPosition()),
            (this.name = i.name);
          let p = o.Utils.deepExtend({}, this.emitterOptions.particles);
          null != p || (p = {}),
            (null !== (c = p.move) && void 0 !== c) || (p.move = {}),
            (null !== (u = (v = p.move).direction) && void 0 !== u) ||
              (v.direction = this.emitterOptions.direction),
            void 0 !== this.emitterOptions.spawnColor &&
              (this.spawnColor = o.ColorUtils.colorToHsl(
                this.emitterOptions.spawnColor
              )),
            (this.paused = !this.emitterOptions.autoPlay),
            (this.particlesOptions = p),
            (this.size =
              null !== (d = this.emitterOptions.size) && void 0 !== d
                ? d
                : (() => {
                    const t = new n.EmitterSize();
                    return (
                      t.load({ height: 0, mode: s.SizeMode.percent, width: 0 }),
                      t
                    );
                  })()),
            (this.lifeCount =
              null !== (h = this.emitterOptions.life.count) && void 0 !== h
                ? h
                : -1),
            (this.immortal = this.lifeCount <= 0),
            this.play();
        }
        externalPlay() {
          (this.paused = !1), this.play();
        }
        externalPause() {
          (this.paused = !0), this.pause();
        }
        play() {
          if (
            !this.paused &&
            this.container.retina.reduceFactor &&
            (this.lifeCount > 0 ||
              this.immortal ||
              !this.emitterOptions.life.count)
          ) {
            if (void 0 === this.emitDelay) {
              const t = o.NumberUtils.getRangeValue(
                this.emitterOptions.rate.delay
              );
              this.emitDelay = (1e3 * t) / this.container.retina.reduceFactor;
            }
            (this.lifeCount > 0 || this.immortal) && this.prepareToDie();
          }
        }
        pause() {
          this.paused || delete this.emitDelay;
        }
        resize() {
          const t = this.initialPosition;
          this.position =
            t && o.Utils.isPointInside(t, this.container.canvas.size)
              ? t
              : this.calcPosition();
        }
        update(t) {
          var e, i, o;
          this.paused ||
            (this.firstSpawn &&
              ((this.firstSpawn = !1),
              (this.currentSpawnDelay =
                null !== (e = this.spawnDelay) && void 0 !== e ? e : 0),
              (this.currentEmitDelay =
                null !== (i = this.emitDelay) && void 0 !== i ? i : 0),
              (t.value = 0)),
            void 0 !== this.duration &&
              ((this.currentDuration += t.value),
              this.currentDuration >= this.duration &&
                (this.pause(),
                void 0 !== this.spawnDelay && delete this.spawnDelay,
                this.immortal || this.lifeCount--,
                this.lifeCount > 0 || this.immortal
                  ? ((this.position = this.calcPosition()),
                    (this.spawnDelay =
                      (1e3 *
                        (null !== (o = this.emitterOptions.life.delay) &&
                        void 0 !== o
                          ? o
                          : 0)) /
                      this.container.retina.reduceFactor))
                  : this.destroy(),
                (this.currentDuration -= this.duration),
                delete this.duration)),
            void 0 !== this.spawnDelay &&
              ((this.currentSpawnDelay += t.value),
              this.currentSpawnDelay >= this.spawnDelay &&
                (this.play(),
                (this.currentSpawnDelay -= this.currentSpawnDelay),
                delete this.spawnDelay)),
            void 0 !== this.emitDelay &&
              ((this.currentEmitDelay += t.value),
              this.currentEmitDelay >= this.emitDelay &&
                (this.emit(), (this.currentEmitDelay -= this.emitDelay))));
        }
        prepareToDie() {
          var t;
          if (this.paused) return;
          const e =
            null === (t = this.emitterOptions.life) || void 0 === t
              ? void 0
              : t.duration;
          this.container.retina.reduceFactor &&
            (this.lifeCount > 0 || this.immortal) &&
            void 0 !== e &&
            e > 0 &&
            (this.duration = 1e3 * e);
        }
        destroy() {
          this.emitters.removeEmitter(this);
        }
        calcPosition() {
          var t, e;
          const i = this.container,
            o = this.emitterOptions.position;
          return {
            x:
              ((null !== (t = null == o ? void 0 : o.x) && void 0 !== t
                ? t
                : 100 * Math.random()) /
                100) *
              i.canvas.size.width,
            y:
              ((null !== (e = null == o ? void 0 : o.y) && void 0 !== e
                ? e
                : 100 * Math.random()) /
                100) *
              i.canvas.size.height,
          };
        }
        emit() {
          var t;
          if (this.paused) return;
          const e = this.container,
            i = this.position,
            n = {
              x:
                this.size.mode === s.SizeMode.percent
                  ? (e.canvas.size.width * this.size.width) / 100
                  : this.size.width,
              y:
                this.size.mode === s.SizeMode.percent
                  ? (e.canvas.size.height * this.size.height) / 100
                  : this.size.height,
            },
            r = o.NumberUtils.getRangeValue(this.emitterOptions.rate.quantity);
          for (let s = 0; s < r; s++) {
            const s = o.Utils.deepExtend({}, this.particlesOptions);
            if (void 0 !== this.spawnColor) {
              const e =
                null === (t = this.emitterOptions.spawnColor) || void 0 === t
                  ? void 0
                  : t.animation;
              if (e) {
                const t = e;
                if (t.enable)
                  this.spawnColor.h = this.setColorAnimation(
                    t,
                    this.spawnColor.h,
                    360
                  );
                else {
                  const t = e;
                  (this.spawnColor.h = this.setColorAnimation(
                    t.h,
                    this.spawnColor.h,
                    360
                  )),
                    (this.spawnColor.s = this.setColorAnimation(
                      t.s,
                      this.spawnColor.s,
                      100
                    )),
                    (this.spawnColor.l = this.setColorAnimation(
                      t.l,
                      this.spawnColor.l,
                      100
                    ));
                }
              }
              s.color
                ? (s.color.value = this.spawnColor)
                : (s.color = { value: this.spawnColor });
            }
            e.particles.addParticle(a(i, n), s);
          }
        }
        setColorAnimation(t, e, i) {
          var s;
          const n = this.container;
          if (!t.enable) return e;
          const r = o.NumberUtils.randomInRange(t.offset),
            a =
              (1e3 *
                o.NumberUtils.getRangeValue(this.emitterOptions.rate.delay)) /
              n.retina.reduceFactor;
          return (
            (e +
              ((null !== (s = t.speed) && void 0 !== s ? s : 0) * n.fpsLimit) /
                a +
              3.6 * r) %
            i
          );
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EmitterRate = void 0);
      const o = i(0);
      e.EmitterRate = class {
        constructor() {
          (this.quantity = 1), (this.delay = 0.1);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.quantity &&
              (this.quantity = o.NumberUtils.setRangeValue(t.quantity)),
            void 0 !== t.delay &&
              (this.delay = o.NumberUtils.setRangeValue(t.delay)));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EmitterLife = void 0);
      e.EmitterLife = class {
        load(t) {
          void 0 !== t &&
            (void 0 !== t.count && (this.count = t.count),
            void 0 !== t.delay && (this.delay = t.delay),
            void 0 !== t.duration && (this.duration = t.duration));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EmitterClickMode = void 0),
        (function (t) {
          t.emitter = "emitter";
        })(e.EmitterClickMode || (e.EmitterClickMode = {}));
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PolygonMaskPlugin = void 0);
      const n = i(277),
        r = i(56),
        a = i(5);
      const l = new (class {
        constructor() {
          this.id = "polygonMask";
        }
        getPlugin(t) {
          return new n.PolygonMaskInstance(t);
        }
        needsPlugin(t) {
          var e, i, o;
          return null !==
            (i =
              null === (e = null == t ? void 0 : t.polygon) || void 0 === e
                ? void 0
                : e.enable) && void 0 !== i
            ? i
            : void 0 !==
                (null === (o = null == t ? void 0 : t.polygon) || void 0 === o
                  ? void 0
                  : o.type) && t.polygon.type !== a.Type.none;
        }
        loadOptions(t, e) {
          if (!this.needsPlugin(e)) return;
          const i = t;
          let o = i.polygon;
          void 0 === (null == o ? void 0 : o.load) &&
            (i.polygon = o = new r.PolygonMask()),
            o.load(null == e ? void 0 : e.polygon);
        }
      })();
      (e.PolygonMaskPlugin = l), s(i(5), e);
    },
    function (t, e, i) {
      "use strict";
      var o =
        (this && this.__awaiter) ||
        function (t, e, i, o) {
          return new (i || (i = Promise))(function (s, n) {
            function r(t) {
              try {
                l(o.next(t));
              } catch (t) {
                n(t);
              }
            }
            function a(t) {
              try {
                l(o.throw(t));
              } catch (t) {
                n(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(r, a);
            }
            l((o = o.apply(t, e || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PolygonMaskInstance = void 0);
      const s = i(5),
        n = i(0),
        r = i(56),
        a = i(21);
      function l(t, e, i) {
        const o = n.ColorUtils.colorToRgb(i.color);
        if (o) {
          t.beginPath(), t.moveTo(e[0].x, e[0].y);
          for (const i of e) t.lineTo(i.x, i.y);
          t.closePath(),
            (t.strokeStyle = n.ColorUtils.getStyleFromRgb(o)),
            (t.lineWidth = i.width),
            t.stroke();
        }
      }
      function c(t, e, i, o) {
        t.translate(o.x, o.y);
        const s = n.ColorUtils.colorToRgb(i.color);
        s &&
          ((t.strokeStyle = n.ColorUtils.getStyleFromRgb(s, i.opacity)),
          (t.lineWidth = i.width),
          t.stroke(e));
      }
      function u(t, e, i) {
        const { dx: o, dy: s } = n.NumberUtils.getDistances(i, t),
          { dx: r, dy: a } = n.NumberUtils.getDistances(e, t),
          l = (o * r + s * a) / (Math.pow(r, 2) + Math.pow(a, 2));
        let c = t.x + r * l,
          u = t.y + a * l;
        return (
          l < 0 ? ((c = t.x), (u = t.y)) : l > 1 && ((c = e.x), (u = e.y)),
          { x: c, y: u, isOnSegment: l >= 0 && l <= 1 }
        );
      }
      function d(t, e, i) {
        const { dx: o, dy: s } = n.NumberUtils.getDistances(t, e),
          r = Math.atan2(s, o),
          a = Math.sin(r),
          l = -Math.cos(r),
          c = 2 * (i.x * a + i.y * l);
        (i.x -= c * a), (i.y -= c * l);
      }
      e.PolygonMaskInstance = class {
        constructor(t) {
          (this.container = t),
            (this.dimension = { height: 0, width: 0 }),
            (this.path2DSupported = !!window.Path2D),
            (this.options = new r.PolygonMask()),
            (this.polygonMaskMoveRadius =
              this.options.move.radius * t.retina.pixelRatio);
        }
        initAsync(t) {
          return o(this, void 0, void 0, function* () {
            this.options.load(null == t ? void 0 : t.polygon);
            const e = this.options;
            (this.polygonMaskMoveRadius =
              e.move.radius * this.container.retina.pixelRatio),
              e.enable && (yield this.initRawData());
          });
        }
        resize() {
          const t = this.container,
            e = this.options;
          e.enable &&
            e.type !== s.Type.none &&
            (this.redrawTimeout && clearTimeout(this.redrawTimeout),
            (this.redrawTimeout = window.setTimeout(
              () =>
                o(this, void 0, void 0, function* () {
                  yield this.initRawData(!0), t.particles.redraw();
                }),
              250
            )));
        }
        stop() {
          delete this.raw, delete this.paths;
        }
        particlesInitialization() {
          const t = this.options;
          return (
            !(
              !t.enable ||
              t.type !== s.Type.inline ||
              (t.inline.arrangement !== s.InlineArrangement.onePerPoint &&
                t.inline.arrangement !== s.InlineArrangement.perPoint)
            ) && (this.drawPoints(), !0)
          );
        }
        particlePosition(t) {
          var e, i;
          if (
            this.options.enable &&
            (null !==
              (i =
                null === (e = this.raw) || void 0 === e ? void 0 : e.length) &&
            void 0 !== i
              ? i
              : 0) > 0
          )
            return n.Utils.deepExtend({}, t || this.randomPoint());
        }
        particleBounce(t, e, i) {
          return this.polygonBounce(t, e, i);
        }
        clickPositionValid(t) {
          const e = this.options;
          return (
            e.enable &&
            e.type !== s.Type.none &&
            e.type !== s.Type.inline &&
            this.checkInsidePolygon(t)
          );
        }
        draw(t) {
          var e;
          if (!(null === (e = this.paths) || void 0 === e ? void 0 : e.length))
            return;
          const i = this.options,
            o = i.draw;
          if (!i.enable || !o.enable) return;
          const s = this.raw;
          for (const e of this.paths) {
            const i = e.path2d,
              n = this.path2DSupported;
            t &&
              (n && i && this.offset
                ? c(t, i, o.stroke, this.offset)
                : s && l(t, s, o.stroke));
          }
        }
        polygonBounce(t, e, i) {
          const o = this.options;
          if (!this.raw || !o.enable || i !== a.OutModeDirection.top) return !1;
          if (o.type === s.Type.inside || o.type === s.Type.outside) {
            let e, i, o;
            const s = t.getPosition(),
              r = t.getRadius();
            for (
              let a = 0, l = this.raw.length - 1;
              a < this.raw.length;
              l = a++
            ) {
              const c = this.raw[a],
                h = this.raw[l];
              e = u(c, h, s);
              const v = n.NumberUtils.getDistances(s, e);
              if ((([i, o] = [v.dx, v.dy]), v.distance < r))
                return d(c, h, t.velocity), !0;
            }
            if (
              e &&
              void 0 !== i &&
              void 0 !== o &&
              !this.checkInsidePolygon(s)
            ) {
              const i = { x: 1, y: 1 };
              return (
                t.position.x >= e.x && (i.x = -1),
                t.position.y >= e.y && (i.y = -1),
                (t.position.x = e.x + 2 * r * i.x),
                (t.position.y = e.y + 2 * r * i.y),
                t.velocity.mult(-1),
                !0
              );
            }
          } else if (o.type === s.Type.inline && t.initialPosition) {
            if (
              n.NumberUtils.getDistance(t.initialPosition, t.getPosition()) >
              this.polygonMaskMoveRadius
            )
              return (
                (t.velocity.x = t.velocity.y / 2 - t.velocity.x),
                (t.velocity.y = t.velocity.x / 2 - t.velocity.y),
                !0
              );
          }
          return !1;
        }
        checkInsidePolygon(t) {
          var e, i;
          const o = this.container,
            r = this.options;
          if (!r.enable || r.type === s.Type.none || r.type === s.Type.inline)
            return !0;
          if (!this.raw) throw new Error(n.Constants.noPolygonFound);
          const a = o.canvas.size,
            l =
              null !== (e = null == t ? void 0 : t.x) && void 0 !== e
                ? e
                : Math.random() * a.width,
            c =
              null !== (i = null == t ? void 0 : t.y) && void 0 !== i
                ? i
                : Math.random() * a.height;
          let u = !1;
          for (
            let t = 0, e = this.raw.length - 1;
            t < this.raw.length;
            e = t++
          ) {
            const i = this.raw[t],
              o = this.raw[e];
            i.y > c != o.y > c &&
              l < ((o.x - i.x) * (c - i.y)) / (o.y - i.y) + i.x &&
              (u = !u);
          }
          return r.type === s.Type.inside ? u : r.type === s.Type.outside && !u;
        }
        parseSvgPath(t, e) {
          var i, o, s;
          const n = null != e && e;
          if (void 0 !== this.paths && !n) return this.raw;
          const r = this.container,
            a = this.options,
            l = new DOMParser().parseFromString(t, "image/svg+xml"),
            c = l.getElementsByTagName("svg")[0];
          let u = c.getElementsByTagName("path");
          u.length || (u = l.getElementsByTagName("path")), (this.paths = []);
          for (let t = 0; t < u.length; t++) {
            const e = u.item(t);
            e && this.paths.push({ element: e, length: e.getTotalLength() });
          }
          const d = r.retina.pixelRatio,
            h = a.scale / d;
          (this.dimension.width =
            parseFloat(
              null !== (i = c.getAttribute("width")) && void 0 !== i ? i : "0"
            ) * h),
            (this.dimension.height =
              parseFloat(
                null !== (o = c.getAttribute("height")) && void 0 !== o
                  ? o
                  : "0"
              ) * h);
          const v =
            null !== (s = a.position) && void 0 !== s ? s : { x: 50, y: 50 };
          return (
            (this.offset = {
              x:
                (r.canvas.size.width * v.x) / (100 * d) -
                this.dimension.width / 2,
              y:
                (r.canvas.size.height * v.y) / (100 * d) -
                this.dimension.height / 2,
            }),
            (function (t, e, i) {
              const o = [];
              for (const s of t) {
                const t = s.element.pathSegList,
                  n = t.numberOfItems,
                  r = { x: 0, y: 0 };
                for (let s = 0; s < n; s++) {
                  const n = t.getItem(s),
                    a = window.SVGPathSeg;
                  switch (n.pathSegType) {
                    case a.PATHSEG_MOVETO_ABS:
                    case a.PATHSEG_LINETO_ABS:
                    case a.PATHSEG_CURVETO_CUBIC_ABS:
                    case a.PATHSEG_CURVETO_QUADRATIC_ABS:
                    case a.PATHSEG_ARC_ABS:
                    case a.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                    case a.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                      const t = n;
                      (r.x = t.x), (r.y = t.y);
                      break;
                    }
                    case a.PATHSEG_LINETO_HORIZONTAL_ABS:
                      r.x = n.x;
                      break;
                    case a.PATHSEG_LINETO_VERTICAL_ABS:
                      r.y = n.y;
                      break;
                    case a.PATHSEG_LINETO_REL:
                    case a.PATHSEG_MOVETO_REL:
                    case a.PATHSEG_CURVETO_CUBIC_REL:
                    case a.PATHSEG_CURVETO_QUADRATIC_REL:
                    case a.PATHSEG_ARC_REL:
                    case a.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                    case a.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                      const t = n;
                      (r.x += t.x), (r.y += t.y);
                      break;
                    }
                    case a.PATHSEG_LINETO_HORIZONTAL_REL:
                      r.x += n.x;
                      break;
                    case a.PATHSEG_LINETO_VERTICAL_REL:
                      r.y += n.y;
                      break;
                    case a.PATHSEG_UNKNOWN:
                    case a.PATHSEG_CLOSEPATH:
                      continue;
                  }
                  o.push({ x: r.x * e + i.x, y: r.y * e + i.y });
                }
              }
              return o;
            })(this.paths, h, this.offset)
          );
        }
        downloadSvgPath(t, e) {
          return o(this, void 0, void 0, function* () {
            const i = this.options,
              o = t || i.url,
              s = null != e && e;
            if (!o || (void 0 !== this.paths && !s)) return this.raw;
            const n = yield fetch(o);
            if (!n.ok)
              throw new Error(
                "tsParticles Error - Error occurred during polygon mask download"
              );
            return this.parseSvgPath(yield n.text(), e);
          });
        }
        drawPoints() {
          if (this.raw)
            for (const t of this.raw)
              this.container.particles.addParticle({ x: t.x, y: t.y });
        }
        randomPoint() {
          const t = this.container,
            e = this.options;
          let i;
          if (e.type === s.Type.inline)
            switch (e.inline.arrangement) {
              case s.InlineArrangement.randomPoint:
                i = this.getRandomPoint();
                break;
              case s.InlineArrangement.randomLength:
                i = this.getRandomPointByLength();
                break;
              case s.InlineArrangement.equidistant:
                i = this.getEquidistantPointByIndex(t.particles.count);
                break;
              case s.InlineArrangement.onePerPoint:
              case s.InlineArrangement.perPoint:
              default:
                i = this.getPointByIndex(t.particles.count);
            }
          else
            i = {
              x: Math.random() * t.canvas.size.width,
              y: Math.random() * t.canvas.size.height,
            };
          return this.checkInsidePolygon(i) ? i : this.randomPoint();
        }
        getRandomPoint() {
          if (!this.raw || !this.raw.length)
            throw new Error(n.Constants.noPolygonDataLoaded);
          const t = n.Utils.itemFromArray(this.raw);
          return { x: t.x, y: t.y };
        }
        getRandomPointByLength() {
          var t, e, i;
          const o = this.options;
          if (
            !this.raw ||
            !this.raw.length ||
            !(null === (t = this.paths) || void 0 === t ? void 0 : t.length)
          )
            throw new Error(n.Constants.noPolygonDataLoaded);
          const s = n.Utils.itemFromArray(this.paths),
            r = Math.floor(Math.random() * s.length) + 1,
            a = s.element.getPointAtLength(r);
          return {
            x:
              a.x * o.scale +
              ((null === (e = this.offset) || void 0 === e ? void 0 : e.x) ||
                0),
            y:
              a.y * o.scale +
              ((null === (i = this.offset) || void 0 === i ? void 0 : i.y) ||
                0),
          };
        }
        getEquidistantPointByIndex(t) {
          var e, i, o, s, r, a, l;
          const c = this.container.actualOptions,
            u = this.options;
          if (
            !this.raw ||
            !this.raw.length ||
            !(null === (e = this.paths) || void 0 === e ? void 0 : e.length)
          )
            throw new Error(n.Constants.noPolygonDataLoaded);
          let d,
            h = 0;
          const v =
            this.paths.reduce((t, e) => t + e.length, 0) /
            c.particles.number.value;
          for (const e of this.paths) {
            const i = v * t - h;
            if (i <= e.length) {
              d = e.element.getPointAtLength(i);
              break;
            }
            h += e.length;
          }
          return {
            x:
              (null !== (i = null == d ? void 0 : d.x) && void 0 !== i
                ? i
                : 0) *
                u.scale +
              (null !==
                (s =
                  null === (o = this.offset) || void 0 === o ? void 0 : o.x) &&
              void 0 !== s
                ? s
                : 0),
            y:
              (null !== (r = null == d ? void 0 : d.y) && void 0 !== r
                ? r
                : 0) *
                u.scale +
              (null !==
                (l =
                  null === (a = this.offset) || void 0 === a ? void 0 : a.y) &&
              void 0 !== l
                ? l
                : 0),
          };
        }
        getPointByIndex(t) {
          if (!this.raw || !this.raw.length)
            throw new Error(n.Constants.noPolygonDataLoaded);
          const e = this.raw[t % this.raw.length];
          return { x: e.x, y: e.y };
        }
        createPath2D() {
          var t, e;
          const i = this.options;
          if (
            this.path2DSupported &&
            (null === (t = this.paths) || void 0 === t ? void 0 : t.length)
          )
            for (const t of this.paths) {
              const o =
                null === (e = t.element) || void 0 === e
                  ? void 0
                  : e.getAttribute("d");
              if (o) {
                const e = new Path2D(o),
                  s = document
                    .createElementNS("http://www.w3.org/2000/svg", "svg")
                    .createSVGMatrix(),
                  n = new Path2D(),
                  r = s.scale(i.scale);
                n.addPath ? (n.addPath(e, r), (t.path2d = n)) : delete t.path2d;
              } else delete t.path2d;
              !t.path2d &&
                this.raw &&
                ((t.path2d = new Path2D()),
                t.path2d.moveTo(this.raw[0].x, this.raw[0].y),
                this.raw.forEach((e, i) => {
                  var o;
                  i > 0 &&
                    (null === (o = t.path2d) ||
                      void 0 === o ||
                      o.lineTo(e.x, e.y));
                }),
                t.path2d.closePath());
            }
        }
        initRawData(t) {
          return o(this, void 0, void 0, function* () {
            const e = this.options;
            if (e.url) this.raw = yield this.downloadSvgPath(e.url, t);
            else if (e.data) {
              const i = e.data;
              let o;
              if ("string" != typeof i) {
                const t =
                  i.path instanceof Array
                    ? i.path.map((t) => `<path d="${t}" />`).join("")
                    : `<path d="${i.path}" />`;
                o = `<svg ${'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'} width="${
                  i.size.width
                }" height="${i.size.height}">${t}</svg>`;
              } else o = i;
              this.raw = this.parseSvgPath(o, t);
            }
            this.createPath2D();
          });
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.InlineArrangement = void 0),
        (function (t) {
          (t.equidistant = "equidistant"),
            (t.onePerPoint = "one-per-point"),
            (t.perPoint = "per-point"),
            (t.randomLength = "random-length"),
            (t.randomPoint = "random-point");
        })(e.InlineArrangement || (e.InlineArrangement = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.MoveType = void 0),
        (function (t) {
          (t.path = "path"), (t.radius = "radius");
        })(e.MoveType || (e.MoveType = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Type = void 0),
        (function (t) {
          (t.inline = "inline"),
            (t.inside = "inside"),
            (t.outside = "outside"),
            (t.none = "none");
        })(e.Type || (e.Type = {}));
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Draw = void 0);
      const o = i(282),
        s = i(2);
      e.Draw = class {
        constructor() {
          (this.enable = !1), (this.stroke = new o.DrawStroke());
        }
        get lineWidth() {
          return this.stroke.width;
        }
        set lineWidth(t) {
          this.stroke.width = t;
        }
        get lineColor() {
          return this.stroke.color;
        }
        set lineColor(t) {
          this.stroke.color = s.OptionsColor.create(this.stroke.color, t);
        }
        load(t) {
          var e;
          if (void 0 !== t) {
            void 0 !== t.enable && (this.enable = t.enable);
            const i =
              null !== (e = t.stroke) && void 0 !== e
                ? e
                : { color: t.lineColor, width: t.lineWidth };
            this.stroke.load(i);
          }
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DrawStroke = void 0);
      const o = i(2),
        s = i(0);
      e.DrawStroke = class {
        constructor() {
          (this.color = new o.OptionsColor()),
            (this.width = 0.5),
            (this.opacity = 1);
        }
        load(t) {
          var e;
          void 0 !== t &&
            ((this.color = o.OptionsColor.create(this.color, t.color)),
            "string" == typeof this.color.value &&
              (this.opacity =
                null !== (e = s.ColorUtils.stringToAlpha(this.color.value)) &&
                void 0 !== e
                  ? e
                  : this.opacity),
            void 0 !== t.opacity && (this.opacity = t.opacity),
            void 0 !== t.width && (this.width = t.width));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Move = void 0);
      const o = i(5);
      e.Move = class {
        constructor() {
          (this.radius = 10), (this.type = o.MoveType.path);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.radius && (this.radius = t.radius),
            void 0 !== t.type && (this.type = t.type));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Inline = void 0);
      const o = i(5);
      e.Inline = class {
        constructor() {
          this.arrangement = o.InlineArrangement.onePerPoint;
        }
        load(t) {
          void 0 !== t &&
            void 0 !== t.arrangement &&
            (this.arrangement = t.arrangement);
        }
      };
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LocalSvg = void 0);
      e.LocalSvg = class {
        constructor() {
          (this.path = []), (this.size = { height: 0, width: 0 });
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.path && (this.path = t.path),
            void 0 !== t.size &&
              (void 0 !== t.size.width && (this.size.width = t.size.width),
              void 0 !== t.size.height && (this.size.height = t.size.height)));
        }
      };
    },
    function (t, e, i) {
      "use strict";
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  });
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i]);
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        s(i(287), e),
        s(i(288), e),
        s(i(289), e),
        s(i(290), e),
        s(i(291), e);
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.defaultParams = void 0);
      var o = i(28),
        s = i(5);
      e.defaultParams = {
        fullScreen: { enable: !1 },
        particles: {
          number: { value: 40, max: -1, density: { enable: !1, area: 1200 } },
          color: { value: "#FFF" },
          shape: {
            type: o.ShapeType.circle,
            polygon: { sides: 5 },
            image: { src: "", width: 100, height: 100 },
          },
          stroke: { width: 0, color: "#000000" },
          opacity: {
            value: 0.5,
            random: !1,
            anim: { enable: !0, speed: 1, minimumValue: 0.1, sync: !1 },
          },
          size: {
            value: 1,
            random: !1,
            anim: { enable: !1, speed: 40, minimumValue: 0, sync: !1 },
          },
          links: {
            enable: !0,
            distance: 150,
            color: "#FFF",
            opacity: 0.6,
            width: 1,
            shadow: { enable: !1, blur: 5, color: "lime" },
          },
          move: {
            enable: !0,
            speed: 3,
            direction: o.MoveDirection.none,
            random: !1,
            straight: !1,
            outMode: o.OutMode.bounce,
            bounce: !0,
            attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
          },
        },
        interactivity: {
          detectsOn: o.InteractivityDetect.canvas,
          events: {
            onHover: { enable: !1, mode: o.HoverMode.grab },
            onClick: { enable: !1, mode: o.ClickMode.repulse },
            resize: !0,
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.35 } },
            bubble: { distance: 200, size: 80, duration: 0.4 },
            repulse: { distance: 100, duration: 5 },
            push: { quantity: 4 },
            remove: { quantity: 2 },
          },
        },
        detectRetina: !0,
        fpsLimit: 999,
        polygon: {
          enable: !1,
          scale: 1,
          type: s.Type.inline,
          inline: { arrangement: s.InlineArrangement.onePerPoint },
          draw: {
            enable: !1,
            stroke: { width: 0.5, color: "rgba(255, 255, 255, .1)" },
          },
          move: { radius: 10, type: o.MoveType.path },
          url: "",
        },
      };
    },
  ]);
});
