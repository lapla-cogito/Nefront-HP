const Particles=()=>{
var pJS = function (e, i) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var a = this.pJS;
  i && Object.deepExtend(a, i),
    (a.tmp.obj = {
      size_value: a.particles.size.value,
      size_anim_speed: a.particles.size.anim.speed,
      move_speed: a.particles.move.speed,
      line_linked_distance: a.particles.line_linked.distance,
      line_linked_width: a.particles.line_linked.width,
      mode_grab_distance: a.interactivity.modes.grab.distance,
      mode_bubble_distance: a.interactivity.modes.bubble.distance,
      mode_bubble_size: a.interactivity.modes.bubble.size,
      mode_repulse_distance: a.interactivity.modes.repulse.distance,
    }),
    (a.fn.retinaInit = function () {
      a.retina_detect && window.devicePixelRatio > 1
        ? ((a.canvas.pxratio = window.devicePixelRatio), (a.tmp.retina = !0))
        : ((a.canvas.pxratio = 1), (a.tmp.retina = !1)),
        (a.canvas.w = a.canvas.el.offsetWidth * a.canvas.pxratio),
        (a.canvas.h = a.canvas.el.offsetHeight * a.canvas.pxratio),
        (a.particles.size.value = a.tmp.obj.size_value * a.canvas.pxratio),
        (a.particles.size.anim.speed =
          a.tmp.obj.size_anim_speed * a.canvas.pxratio),
        (a.particles.move.speed = a.tmp.obj.move_speed * a.canvas.pxratio),
        (a.particles.line_linked.distance =
          a.tmp.obj.line_linked_distance * a.canvas.pxratio),
        (a.interactivity.modes.grab.distance =
          a.tmp.obj.mode_grab_distance * a.canvas.pxratio),
        (a.interactivity.modes.bubble.distance =
          a.tmp.obj.mode_bubble_distance * a.canvas.pxratio),
        (a.particles.line_linked.width =
          a.tmp.obj.line_linked_width * a.canvas.pxratio),
        (a.interactivity.modes.bubble.size =
          a.tmp.obj.mode_bubble_size * a.canvas.pxratio),
        (a.interactivity.modes.repulse.distance =
          a.tmp.obj.mode_repulse_distance * a.canvas.pxratio);
    }),
    (a.fn.canvasInit = function () {
      a.canvas.ctx = a.canvas.el.getContext("2d");
    }),
    (a.fn.canvasSize = function () {
      (a.canvas.el.width = a.canvas.w),
        (a.canvas.el.height = a.canvas.h),
        a &&
          a.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (a.canvas.w = a.canvas.el.offsetWidth),
              (a.canvas.h = a.canvas.el.offsetHeight),
              a.tmp.retina &&
                ((a.canvas.w *= a.canvas.pxratio),
                (a.canvas.h *= a.canvas.pxratio)),
              (a.canvas.el.width = a.canvas.w),
              (a.canvas.el.height = a.canvas.h),
              a.particles.move.enable ||
                (a.fn.particlesEmpty(),
                a.fn.particlesCreate(),
                a.fn.particlesDraw(),
                a.fn.vendors.densityAutoParticles()),
              a.fn.vendors.densityAutoParticles();
          });
    }),
    (a.fn.canvasPaint = function () {
      a.canvas.ctx.fillRect(0, 0, a.canvas.w, a.canvas.h);
    }),
    (a.fn.canvasClear = function () {
      a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h);
    }),
    (a.fn.particle = function (e, i, t) {
      if (
        ((this.radius =
          (a.particles.size.random ? Math.random() : 1) *
          a.particles.size.value),
        a.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = a.particles.size.anim.speed / 100),
          a.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = t ? t.x : Math.random() * a.canvas.w),
        (this.y = t ? t.y : Math.random() * a.canvas.h),
        this.x > a.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > a.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        a.particles.move.bounce && a.fn.vendors.checkOverlap(this, t),
        (this.color = {}),
        "object" == typeof e.value)
      ) {
        if (e.value instanceof Array) {
          var s =
            e.value[Math.floor(Math.random() * a.particles.color.value.length)];
          this.color.rgb = hexToRgb(s);
        } else
          void 0 != e.value.r &&
            void 0 != e.value.g &&
            void 0 != e.value.b &&
            (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
            void 0 != e.value.h &&
              void 0 != e.value.s &&
              void 0 != e.value.l &&
              (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
      } else
        "random" == e.value
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0,
            })
          : "string" == typeof e.value &&
            ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity =
        (a.particles.opacity.random ? Math.random() : 1) *
        a.particles.opacity.value),
        a.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = a.particles.opacity.anim.speed / 100),
          a.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var r = {};
      switch (a.particles.move.direction) {
        case "top":
          r = { x: 0, y: -1 };
          break;
        case "top-right":
          r = { x: 0.5, y: -0.5 };
          break;
        case "right":
          r = { x: 1, y: -0 };
          break;
        case "bottom-right":
          r = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          r = { x: 0, y: 1 };
          break;
        case "bottom-left":
          r = { x: -0.5, y: 1 };
          break;
        case "left":
          r = { x: -1, y: 0 };
          break;
        case "top-left":
          r = { x: -0.5, y: -0.5 };
          break;
        default:
          r = { x: 0, y: 0 };
      }
      a.particles.move.straight
        ? ((this.vx = r.x),
          (this.vy = r.y),
          a.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = r.x + Math.random() - 0.5),
          (this.vy = r.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var n = a.particles.shape.type;
      if ("object" == typeof n) {
        if (n instanceof Array) {
          var c = n[Math.floor(Math.random() * n.length)];
          this.shape = c;
        }
      } else this.shape = n;
      if ("image" == this.shape) {
        var o = a.particles.shape;
        (this.img = {
          src: o.image.src,
          ratio: o.image.width / o.image.height,
        }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == a.tmp.img_type &&
            void 0 != a.tmp.source_svg &&
            (a.fn.vendors.createSvgImg(this),
            a.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (a.fn.particle.prototype.draw = function () {
      if (void 0 != this.radius_bubble) var e = this.radius_bubble;
      else var e = this.radius;
      if (void 0 != this.opacity_bubble) var i = this.opacity_bubble;
      else var i = this.opacity;
      if (this.color.rgb)
        var t =
          "rgba(" +
          this.color.rgb.r +
          "," +
          this.color.rgb.g +
          "," +
          this.color.rgb.b +
          "," +
          i +
          ")";
      else
        var t =
          "hsla(" +
          this.color.hsl.h +
          "," +
          this.color.hsl.s +
          "%," +
          this.color.hsl.l +
          "%," +
          i +
          ")";
      switch (
        ((a.canvas.ctx.fillStyle = t), a.canvas.ctx.beginPath(), this.shape)
      ) {
        case "circle":
          a.canvas.ctx.arc(this.x, this.y, e, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          a.canvas.ctx.rect(this.x - e, this.y - e, 2 * e, 2 * e);
          break;
        case "triangle":
          a.fn.vendors.drawShape(
            a.canvas.ctx,
            this.x - e,
            this.y + e / 1.66,
            2 * e,
            3,
            2
          );
          break;
        case "polygon":
          a.fn.vendors.drawShape(
            a.canvas.ctx,
            this.x - e / (a.particles.shape.polygon.nb_sides / 3.5),
            this.y - e / 0.76,
            (2.66 * e) / (a.particles.shape.polygon.nb_sides / 3),
            a.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          a.fn.vendors.drawShape(
            a.canvas.ctx,
            this.x - (2 * e) / (a.particles.shape.polygon.nb_sides / 4),
            this.y - e / 1.52,
            (5.32 * e) / (a.particles.shape.polygon.nb_sides / 3),
            a.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          if ("svg" == a.tmp.img_type) var s = this.img.obj;
          else var s = a.tmp.img_obj;
          s &&
            a.canvas.ctx.drawImage(
              s,
              this.x - e,
              this.y - e,
              2 * e,
              (2 * e) / this.img.ratio
            );
      }
      a.canvas.ctx.closePath(),
        a.particles.shape.stroke.width > 0 &&
          ((a.canvas.ctx.strokeStyle = a.particles.shape.stroke.color),
          (a.canvas.ctx.lineWidth = a.particles.shape.stroke.width),
          a.canvas.ctx.stroke()),
        a.canvas.ctx.fill();
    }),
    (a.fn.particlesCreate = function () {
      for (var e = 0; e < a.particles.number.value; e++)
        a.particles.array.push(
          new a.fn.particle(a.particles.color, a.particles.opacity.value)
        );
    }),
    (a.fn.particlesUpdate = function () {
      for (var e = 0; e < a.particles.array.length; e++) {
        var i = a.particles.array[e];
        if (a.particles.move.enable) {
          var t = a.particles.move.speed / 2;
          (i.x += i.vx * t), (i.y += i.vy * t);
        }
        if (
          (a.particles.opacity.anim.enable &&
            (!0 == i.opacity_status
              ? (i.opacity >= a.particles.opacity.value &&
                  (i.opacity_status = !1),
                (i.opacity += i.vo))
              : (i.opacity <= a.particles.opacity.anim.opacity_min &&
                  (i.opacity_status = !0),
                (i.opacity -= i.vo)),
            i.opacity < 0 && (i.opacity = 0)),
          a.particles.size.anim.enable &&
            (!0 == i.size_status
              ? (i.radius >= a.particles.size.value && (i.size_status = !1),
                (i.radius += i.vs))
              : (i.radius <= a.particles.size.anim.size_min &&
                  (i.size_status = !0),
                (i.radius -= i.vs)),
            i.radius < 0 && (i.radius = 0)),
          "bounce" == a.particles.move.out_mode)
        )
          var s = {
            x_left: i.radius,
            x_right: a.canvas.w,
            y_top: i.radius,
            y_bottom: a.canvas.h,
          };
        else
          var s = {
            x_left: -i.radius,
            x_right: a.canvas.w + i.radius,
            y_top: -i.radius,
            y_bottom: a.canvas.h + i.radius,
          };
        if (
          (i.x - i.radius > a.canvas.w
            ? ((i.x = s.x_left), (i.y = Math.random() * a.canvas.h))
            : i.x + i.radius < 0 &&
              ((i.x = s.x_right), (i.y = Math.random() * a.canvas.h)),
          i.y - i.radius > a.canvas.h
            ? ((i.y = s.y_top), (i.x = Math.random() * a.canvas.w))
            : i.y + i.radius < 0 &&
              ((i.y = s.y_bottom), (i.x = Math.random() * a.canvas.w)),
          "bounce" === a.particles.move.out_mode &&
            (i.x + i.radius > a.canvas.w
              ? (i.vx = -i.vx)
              : i.x - i.radius < 0 && (i.vx = -i.vx),
            i.y + i.radius > a.canvas.h
              ? (i.vy = -i.vy)
              : i.y - i.radius < 0 && (i.vy = -i.vy)),
          isInArray("grab", a.interactivity.events.onhover.mode) &&
            a.fn.modes.grabParticle(i),
          (isInArray("bubble", a.interactivity.events.onhover.mode) ||
            isInArray("bubble", a.interactivity.events.onclick.mode)) &&
            a.fn.modes.bubbleParticle(i),
          (isInArray("repulse", a.interactivity.events.onhover.mode) ||
            isInArray("repulse", a.interactivity.events.onclick.mode)) &&
            a.fn.modes.repulseParticle(i),
          a.particles.line_linked.enable || a.particles.move.attract.enable)
        )
          for (var r = e + 1; r < a.particles.array.length; r++) {
            var n = a.particles.array[r];
            a.particles.line_linked.enable && a.fn.interact.linkParticles(i, n),
              a.particles.move.attract.enable &&
                a.fn.interact.attractParticles(i, n),
              a.particles.move.bounce && a.fn.interact.bounceParticles(i, n);
          }
      }
    }),
    (a.fn.particlesDraw = function () {
      a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h),
        a.fn.particlesUpdate();
      for (var e = 0; e < a.particles.array.length; e++)
        a.particles.array[e].draw();
    }),
    (a.fn.particlesEmpty = function () {
      a.particles.array = [];
    }),
    (a.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(a.fn.checkAnimFrame),
        cancelRequestAnimFrame(a.fn.drawAnimFrame),
        (a.tmp.source_svg = void 0),
        (a.tmp.img_obj = void 0),
        (a.tmp.count_svg = 0),
        a.fn.particlesEmpty(),
        a.fn.canvasClear(),
        a.fn.vendors.start();
    }),
    (a.fn.interact.linkParticles = function (e, i) {
      var t = e.x - i.x,
        s = e.y - i.y,
        r = Math.sqrt(t * t + s * s);
      if (r <= a.particles.line_linked.distance) {
        var n =
          a.particles.line_linked.opacity -
          r /
            (1 / a.particles.line_linked.opacity) /
            a.particles.line_linked.distance;
        if (n > 0) {
          var c = a.particles.line_linked.color_rgb_line;
          (a.canvas.ctx.strokeStyle =
            "rgba(" + c.r + "," + c.g + "," + c.b + "," + n + ")"),
            (a.canvas.ctx.lineWidth = a.particles.line_linked.width),
            a.canvas.ctx.beginPath(),
            a.canvas.ctx.moveTo(e.x, e.y),
            a.canvas.ctx.lineTo(i.x, i.y),
            a.canvas.ctx.stroke(),
            a.canvas.ctx.closePath();
        }
      }
    }),
    (a.fn.interact.attractParticles = function (e, i) {
      var t = e.x - i.x,
        s = e.y - i.y;
      if (Math.sqrt(t * t + s * s) <= a.particles.line_linked.distance) {
        var r = t / (1e3 * a.particles.move.attract.rotateX),
          n = s / (1e3 * a.particles.move.attract.rotateY);
        (e.vx -= r), (e.vy -= n), (i.vx += r), (i.vy += n);
      }
    }),
    (a.fn.interact.bounceParticles = function (e, i) {
      var t = e.x - i.x,
        a = e.y - i.y;
      Math.sqrt(t * t + a * a) <= e.radius + i.radius &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (i.vx = -i.vx), (i.vy = -i.vy));
    }),
    (a.fn.modes.pushParticles = function (e, i) {
      a.tmp.pushing = !0;
      for (var t = 0; t < e; t++)
        a.particles.array.push(
          new a.fn.particle(a.particles.color, a.particles.opacity.value, {
            x: i ? i.pos_x : Math.random() * a.canvas.w,
            y: i ? i.pos_y : Math.random() * a.canvas.h,
          })
        ),
          t == e - 1 &&
            (a.particles.move.enable || a.fn.particlesDraw(),
            (a.tmp.pushing = !1));
    }),
    (a.fn.modes.removeParticles = function (e) {
      a.particles.array.splice(0, e),
        a.particles.move.enable || a.fn.particlesDraw();
    }),
    (a.fn.modes.bubbleParticle = function (e) {
      if (
        a.interactivity.events.onhover.enable &&
        isInArray("bubble", a.interactivity.events.onhover.mode)
      ) {
        var i = e.x - a.interactivity.mouse.pos_x,
          t = e.y - a.interactivity.mouse.pos_y,
          s = Math.sqrt(i * i + t * t),
          r = 1 - s / a.interactivity.modes.bubble.distance;
        function n() {
          (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
        }
        if (s <= a.interactivity.modes.bubble.distance) {
          if (r >= 0 && "mousemove" == a.interactivity.status) {
            if (a.interactivity.modes.bubble.size != a.particles.size.value) {
              if (a.interactivity.modes.bubble.size > a.particles.size.value) {
                var c = e.radius + a.interactivity.modes.bubble.size * r;
                c >= 0 && (e.radius_bubble = c);
              } else {
                var o = e.radius - a.interactivity.modes.bubble.size,
                  c = e.radius - o * r;
                c > 0 ? (e.radius_bubble = c) : (e.radius_bubble = 0);
              }
            }
            if (
              a.interactivity.modes.bubble.opacity != a.particles.opacity.value
            ) {
              if (
                a.interactivity.modes.bubble.opacity > a.particles.opacity.value
              ) {
                var l = a.interactivity.modes.bubble.opacity * r;
                l > e.opacity &&
                  l <= a.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = l);
              } else {
                var l =
                  e.opacity -
                  (a.particles.opacity.value -
                    a.interactivity.modes.bubble.opacity) *
                    r;
                l < e.opacity &&
                  l >= a.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = l);
              }
            }
          }
        } else n();
        "mouseleave" == a.interactivity.status && n();
      } else if (
        a.interactivity.events.onclick.enable &&
        isInArray("bubble", a.interactivity.events.onclick.mode)
      ) {
        if (a.tmp.bubble_clicking) {
          var i = e.x - a.interactivity.mouse.click_pos_x,
            t = e.y - a.interactivity.mouse.click_pos_y,
            s = Math.sqrt(i * i + t * t),
            v = (new Date().getTime() - a.interactivity.mouse.click_time) / 1e3;
          v > a.interactivity.modes.bubble.duration &&
            (a.tmp.bubble_duration_end = !0),
            v > 2 * a.interactivity.modes.bubble.duration &&
              ((a.tmp.bubble_clicking = !1), (a.tmp.bubble_duration_end = !1));
        }
        function p(i, t, r, n, c) {
          if (i != t) {
            if (a.tmp.bubble_duration_end) {
              if (void 0 != r) {
                var o =
                  n - (v * (n - i)) / a.interactivity.modes.bubble.duration;
                (p = i + (i - o)),
                  "size" == c && (e.radius_bubble = p),
                  "opacity" == c && (e.opacity_bubble = p);
              }
            } else if (s <= a.interactivity.modes.bubble.distance) {
              if (void 0 != r) var l = r;
              else var l = n;
              if (l != i) {
                var p =
                  n - (v * (n - i)) / a.interactivity.modes.bubble.duration;
                "size" == c && (e.radius_bubble = p),
                  "opacity" == c && (e.opacity_bubble = p);
              }
            } else
              "size" == c && (e.radius_bubble = void 0),
                "opacity" == c && (e.opacity_bubble = void 0);
          }
        }
        a.tmp.bubble_clicking &&
          (p(
            a.interactivity.modes.bubble.size,
            a.particles.size.value,
            e.radius_bubble,
            e.radius,
            "size"
          ),
          p(
            a.interactivity.modes.bubble.opacity,
            a.particles.opacity.value,
            e.opacity_bubble,
            e.opacity,
            "opacity"
          ));
      }
    }),
    (a.fn.modes.repulseParticle = function (e) {
      if (
        a.interactivity.events.onhover.enable &&
        isInArray("repulse", a.interactivity.events.onhover.mode)
      ) {
        var i = e.x - a.canvas.w / 2,
          t = e.y - a.canvas.h / 2,
          s = Math.sqrt(i * i + t * t),
          r = { x: i / s, y: t / s },
          n = 1.2 * a.interactivity.modes.repulse.distance,
          c = clamp((1 / n) * (-1 * Math.pow(s / n, 2) + 1) * n * 100, 0, 50),
          o = { x: e.x + r.x * c, y: e.y + r.y * c };
        "bounce" == a.particles.move.out_mode
          ? (o.x - e.radius > 0 && o.x + e.radius < a.canvas.w && (e.x = o.x),
            o.y - e.radius > 0 && o.y + e.radius < a.canvas.h && (e.y = o.y))
          : ((e.x = o.x), (e.y = o.y));
      } else if (
        a.interactivity.events.onclick.enable &&
        isInArray("repulse", a.interactivity.events.onclick.mode)
      ) {
        if (
          (a.tmp.repulse_finish ||
            (a.tmp.repulse_count++,
            a.tmp.repulse_count != a.particles.array.length ||
              (a.tmp.repulse_finish = !0)),
          a.tmp.repulse_clicking)
        ) {
          var n = Math.pow(a.interactivity.modes.repulse.distance / 6, 3),
            l = a.interactivity.mouse.click_pos_x - e.x,
            v = a.interactivity.mouse.click_pos_y - e.y,
            p = l * l + v * v,
            d = (-n / p) * 1;
          p <= n &&
            (function i() {
              var t = Math.atan2(v, l);
              if (
                ((e.vx = d * Math.cos(t)),
                (e.vy = d * Math.sin(t)),
                "bounce" == a.particles.move.out_mode)
              ) {
                var s = { x: e.x + e.vx, y: e.y + e.vy };
                s.x + e.radius > a.canvas.w
                  ? (e.vx = -e.vx)
                  : s.x - e.radius < 0 && (e.vx = -e.vx),
                  s.y + e.radius > a.canvas.h
                    ? (e.vy = -e.vy)
                    : s.y - e.radius < 0 && (e.vy = -e.vy);
              }
            })();
        } else
          !1 == a.tmp.repulse_clicking && ((e.vx = e.vx_i), (e.vy = e.vy_i));
      }
    }),
    (a.fn.modes.grabParticle = function (e) {
      if (
        a.interactivity.events.onhover.enable &&
        "mousemove" == a.interactivity.status
      ) {
        var i = e.x - a.interactivity.mouse.pos_x,
          t = e.y - a.interactivity.mouse.pos_y,
          s = Math.sqrt(i * i + t * t);
        if (s <= a.interactivity.modes.grab.distance) {
          var r =
            a.interactivity.modes.grab.line_linked.opacity -
            s /
              (1 / a.interactivity.modes.grab.line_linked.opacity) /
              a.interactivity.modes.grab.distance;
          if (r > 0) {
            var n = a.particles.line_linked.color_rgb_line;
            (a.canvas.ctx.strokeStyle =
              "rgba(" + n.r + "," + n.g + "," + n.b + "," + r + ")"),
              (a.canvas.ctx.lineWidth = a.particles.line_linked.width),
              a.canvas.ctx.beginPath(),
              a.canvas.ctx.moveTo(e.x, e.y),
              a.canvas.ctx.lineTo(
                a.interactivity.mouse.pos_x,
                a.interactivity.mouse.pos_y
              ),
              a.canvas.ctx.stroke(),
              a.canvas.ctx.closePath();
          }
        }
      }
    }),
    (a.fn.vendors.eventsListeners = function () {
      "window" == a.interactivity.detect_on
        ? (a.interactivity.el = window)
        : (a.interactivity.el = a.canvas.el),
        (a.interactivity.events.onhover.enable ||
          a.interactivity.events.onclick.enable) &&
          (a.interactivity.el.addEventListener("mousemove", function (e) {
            if (a.interactivity.el == window)
              var i = e.clientX,
                t = e.clientY;
            else
              var i = e.offsetX || e.clientX,
                t = e.offsetY || e.clientY;
            (a.interactivity.mouse.pos_x = i),
              (a.interactivity.mouse.pos_y = t),
              a.tmp.retina &&
                ((a.interactivity.mouse.pos_x *= a.canvas.pxratio),
                (a.interactivity.mouse.pos_y *= a.canvas.pxratio)),
              (a.interactivity.status = "mousemove");
          }),
          a.interactivity.el.addEventListener("mouseleave", function (e) {
            (a.interactivity.mouse.pos_x = null),
              (a.interactivity.mouse.pos_y = null),
              (a.interactivity.status = "mouseleave");
          })),
        a.interactivity.events.onclick.enable &&
          a.interactivity.el.addEventListener("click", function () {
            if (
              ((a.interactivity.mouse.click_pos_x =
                a.interactivity.mouse.pos_x),
              (a.interactivity.mouse.click_pos_y = a.interactivity.mouse.pos_y),
              (a.interactivity.mouse.click_time = new Date().getTime()),
              a.interactivity.events.onclick.enable)
            )
              switch (a.interactivity.events.onclick.mode) {
                case "push":
                  a.particles.move.enable
                    ? a.fn.modes.pushParticles(
                        a.interactivity.modes.push.particles_nb,
                        a.interactivity.mouse
                      )
                    : 1 == a.interactivity.modes.push.particles_nb
                    ? a.fn.modes.pushParticles(
                        a.interactivity.modes.push.particles_nb,
                        a.interactivity.mouse
                      )
                    : a.interactivity.modes.push.particles_nb > 1 &&
                      a.fn.modes.pushParticles(
                        a.interactivity.modes.push.particles_nb
                      );
                  break;
                case "remove":
                  a.fn.modes.removeParticles(
                    a.interactivity.modes.remove.particles_nb
                  );
                  break;
                case "bubble":
                  a.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (a.tmp.repulse_clicking = !0),
                    (a.tmp.repulse_count = 0),
                    (a.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      a.tmp.repulse_clicking = !1;
                    }, 1e3 * a.interactivity.modes.repulse.duration);
              }
          });
    }),
    (a.fn.vendors.densityAutoParticles = function () {
      if (a.particles.number.density.enable) {
        var e = (a.canvas.el.width * a.canvas.el.height) / 1e3;
        a.tmp.retina && (e /= 2 * a.canvas.pxratio);
        var i =
            (e * a.particles.number.value) /
            a.particles.number.density.value_area,
          t = a.particles.array.length - i;
        t < 0
          ? a.fn.modes.pushParticles(Math.abs(t))
          : a.fn.modes.removeParticles(t);
      }
    }),
    (a.fn.vendors.checkOverlap = function (e, i) {
      for (var t = 0; t < a.particles.array.length; t++) {
        var s = a.particles.array[t],
          r = e.x - s.x,
          n = e.y - s.y;
        Math.sqrt(r * r + n * n) <= e.radius + s.radius &&
          ((e.x = i ? i.x : Math.random() * a.canvas.w),
          (e.y = i ? i.y : Math.random() * a.canvas.h),
          a.fn.vendors.checkOverlap(e));
      }
    }),
    (a.fn.vendors.createSvgImg = function (e) {
      var i = a.tmp.source_svg.replace(
          /#([0-9A-F]{3,6})/gi,
          function (i, t, a, s) {
            if (e.color.rgb)
              var r =
                "rgba(" +
                e.color.rgb.r +
                "," +
                e.color.rgb.g +
                "," +
                e.color.rgb.b +
                "," +
                e.opacity +
                ")";
            else
              var r =
                "hsla(" +
                e.color.hsl.h +
                "," +
                e.color.hsl.s +
                "%," +
                e.color.hsl.l +
                "%," +
                e.opacity +
                ")";
            return r;
          }
        ),
        t = new Blob([i], { type: "image/svg+xml;charset=utf-8" }),
        s = window.URL || window.webkitURL || window,
        r = s.createObjectURL(t),
        n = new Image();
      n.addEventListener("load", function () {
        (e.img.obj = n),
          (e.img.loaded = !0),
          s.revokeObjectURL(r),
          a.tmp.count_svg++;
      }),
        (n.src = r);
    }),
    (a.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(a.fn.drawAnimFrame), t.remove(), (pJSDom = null);
    }),
    (a.fn.vendors.drawShape = function (e, i, t, a, s, r) {
      var n = s * r,
        c = s / r,
        o = Math.PI - (Math.PI * ((180 * (c - 2)) / c)) / 180;
      e.save(), e.beginPath(), e.translate(i, t), e.moveTo(0, 0);
      for (var l = 0; l < n; l++)
        e.lineTo(a, 0), e.translate(a, 0), e.rotate(o);
      e.fill(), e.restore();
    }),
    (a.fn.vendors.exportImg = function () {
      window.open(a.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (a.fn.vendors.loadImg = function (e) {
      if (((a.tmp.img_error = void 0), "" != a.particles.shape.image.src)) {
        if ("svg" == e) {
          var i = new XMLHttpRequest();
          i.open("GET", a.particles.shape.image.src),
            (i.onreadystatechange = function (e) {
              4 == i.readyState &&
                (200 == i.status
                  ? ((a.tmp.source_svg = e.currentTarget.response),
                    a.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (a.tmp.img_error = !0)));
            }),
            i.send();
        } else {
          var t = new Image();
          t.addEventListener("load", function () {
            (a.tmp.img_obj = t), a.fn.vendors.checkBeforeDraw();
          }),
            (t.src = a.particles.shape.image.src);
        }
      } else console.log("Error pJS - No image.src"), (a.tmp.img_error = !0);
    }),
    (a.fn.vendors.draw = function () {
      "image" == a.particles.shape.type
        ? "svg" == a.tmp.img_type
          ? a.tmp.count_svg >= a.particles.number.value
            ? (a.fn.particlesDraw(),
              a.particles.move.enable
                ? (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
                : cancelRequestAnimFrame(a.fn.drawAnimFrame))
            : a.tmp.img_error ||
              (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
          : void 0 != a.tmp.img_obj
          ? (a.fn.particlesDraw(),
            a.particles.move.enable
              ? (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
              : cancelRequestAnimFrame(a.fn.drawAnimFrame))
          : a.tmp.img_error ||
            (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
        : (a.fn.particlesDraw(),
          a.particles.move.enable
            ? (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
            : cancelRequestAnimFrame(a.fn.drawAnimFrame));
    }),
    (a.fn.vendors.checkBeforeDraw = function () {
      "image" == a.particles.shape.type
        ? "svg" == a.tmp.img_type && void 0 == a.tmp.source_svg
          ? (a.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(a.tmp.checkAnimFrame),
            a.tmp.img_error || (a.fn.vendors.init(), a.fn.vendors.draw()))
        : (a.fn.vendors.init(), a.fn.vendors.draw());
    }),
    (a.fn.vendors.init = function () {
      a.fn.retinaInit(),
        a.fn.canvasInit(),
        a.fn.canvasSize(),
        a.fn.canvasPaint(),
        a.fn.particlesCreate(),
        a.fn.vendors.densityAutoParticles(),
        (a.particles.line_linked.color_rgb_line = hexToRgb(
          a.particles.line_linked.color
        ));
    }),
    (a.fn.vendors.start = function () {
      isInArray("image", a.particles.shape.type)
        ? ((a.tmp.img_type = a.particles.shape.image.src.substr(
            a.particles.shape.image.src.length - 3
          )),
          a.fn.vendors.loadImg(a.tmp.img_type))
        : a.fn.vendors.checkBeforeDraw();
    }),
    a.fn.vendors.eventsListeners(),
    a.fn.vendors.start();
};
function hexToRgb(e) {
  e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, i, t, a) {
    return i + i + t + t + a + a;
  });
  var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return i
    ? { r: parseInt(i[1], 16), g: parseInt(i[2], 16), b: parseInt(i[3], 16) }
    : null;
}
function clamp(e, i, t) {
  return Math.min(Math.max(e, i), t);
}
function isInArray(e, i) {
  return i.indexOf(e) > -1;
}
(Object.deepExtend = function (e, i) {
  for (var t in i)
    i[t] && i[t].constructor && i[t].constructor === Object
      ? ((e[t] = e[t] || {}), arguments.callee(e[t], i[t]))
      : (e[t] = i[t]);
  return e;
}),
  (window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (e) {
      window.setTimeout(e, 1e3 / 60);
    }),
  (window.cancelRequestAnimFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout),
  (window.pJSDom = []),
  (window.particlesJS = function (e, i) {
    "string" != typeof e && ((i = e), (e = "particles-js")),
      e || (e = "particles-js");
    var t = document.getElementById(e),
      a = "particles-js-canvas-el",
      s = t.getElementsByClassName(a);
    if (s.length) for (; s.length > 0; ) t.removeChild(s[0]);
    var r = document.createElement("canvas");
    (r.className = a),
      (r.style.width = "100%"),
      (r.style.height = "100%"),
      null != document.getElementById(e).appendChild(r) &&
        pJSDom.push(new pJS(e, i));
  }),
  (window.particlesJS.load = function (e, i, t) {
    var a = new XMLHttpRequest();
    a.open("GET", i),
      (a.onreadystatechange = function (i) {
        if (4 == a.readyState) {
          if (200 == a.status) {
            var s = JSON.parse(i.currentTarget.response);
            window.particlesJS(e, s), t && t();
          } else
            console.log("Error pJS - XMLHttpRequest status: " + a.status),
              console.log("Error pJS - File config not found");
        }
      }),
      a.send();
  });
}

export default Particles;
