/* eslint-disable no-unreachable */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-fallthrough */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    118 (t, e, n) {
      'use strict'
      const o = n(1)
      const r = n(120)
      const c = n(121)
      const l = n(184)
      o.a.component('AppButton', r.default),
      o.a.component('AppControlInput', c.default),
      o.a.component('PostList', l.default)
    },
    119 (t, e, n) {
      'use strict'
      n(27)
      const o = n(1)
      const r = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      o.a.filter('date', function (t) {
        return (
          (e = new Date(t)),
          (n = e.getFullYear()),
          (o = e.getMonth()),
          e.getDate() + '. ' + r[o] + ' ' + n
        )
        let e, n, o
      })
    },
    120 (t, e, n) {
      'use strict'
      n.r(e)
      const o = {
        name: 'AppButton',
        props: { btnStyle: { type: String, default: '' } }
      }
      const r = (n(264), n(7))
      const component = Object(r.a)(
        o,
        function () {
          const t = this
          const e = t.$createElement
          return (t._self._c || e)(
            'button',
            t._g(
              t._b(
                { staticClass: 'button', class: t.btnStyle },
                'button',
                t.$attrs,
                !1
              ),
              t.$listeners
            ),
            [t._t('default')],
            2
          )
        },
        [],
        !1,
        null,
        '8b8e64f6',
        null
      )
      e.default = component.exports
    },
    121 (t, e, n) {
      'use strict'
      n.r(e)
      const o = {
        name: 'AppInputControl',
        props: {
          controlType: { type: String, default: 'input' },
          value: { type: String, default: '' }
        }
      }
      const r = (n(266), n(7))
      const component = Object(r.a)(
        o,
        function () {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n('div', { staticClass: 'input-control' }, [
            n('label', [t._t('default')], 2),
            t._v(' '),
            t.controlType === 'input'
              ? n(
                'input',
                t._b(
                  {
                    domProps: { value: t.value },
                    on: {
                      input (e) {
                        return t.$emit('input', e.target.value)
                      }
                    }
                  },
                  'input',
                  t.$attrs,
                  !1
                )
              )
              : t._e(),
            t._v(' '),
            t.controlType === 'textarea'
              ? n('textarea', {
                attrs: { rows: '10' },
                domProps: { value: t.value },
                on: {
                  input (e) {
                    return t.$emit('input', e.target.value)
                  }
                }
              })
              : t._e()
          ])
        },
        [],
        !1,
        null,
        '1f4f3866',
        null
      )
      e.default = component.exports
    },
    155 (t, e, n) {
      let content = n(226)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, n(22).default)('2edcb286', content, !0, { sourceMap: !1 })
    },
    157 (t, e, n) {
      let content = n(232)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, n(22).default)('543b05cc', content, !0, { sourceMap: !1 })
    },
    158 (t, e, n) {
      let content = n(234)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, n(22).default)('34568217', content, !0, { sourceMap: !1 })
    },
    159 (t, e, n) {
      let content = n(236)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, n(22).default)('76abd4a1', content, !0, { sourceMap: !1 })
    },
    160 (t, e, n) {
      let content = n(238)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, n(22).default)('56b15182', content, !0, { sourceMap: !1 })
    },
    170 (t, e, n) {
      let content = n(265)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, n(22).default)('a9348bd0', content, !0, { sourceMap: !1 })
    },
    171 (t, e, n) {
      let content = n(267)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, n(22).default)('3065deff', content, !0, { sourceMap: !1 })
    },
    172 (t, e, n) {
      let content = n(269)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, n(22).default)('61d37328', content, !0, { sourceMap: !1 })
    },
    173 (t, e, n) {
      let content = n(271)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, n(22).default)('4a730264', content, !0, { sourceMap: !1 })
    },
    181 (t, e, n) {
      'use strict'
      const o = n(182)
      const r = n(183)
      const c = {
        components: { TheHeader: o.default, TheSideNav: r.default },
        data () {
          return { displaySideNav: !1 }
        }
      }
      const l = (n(237), n(7))
      const component = Object(l.a)(
        c,
        function () {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n(
            'div',
            [
              n('the-header', {
                on: {
                  sidenavToggle (e) {
                    t.displaySideNav = !t.displaySideNav
                  }
                }
              }),
              t._v(' '),
              n('the-side-nav', {
                attrs: { show: t.displaySideNav },
                on: {
                  close (e) {
                    t.displaySideNav = !1
                  }
                }
              }),
              t._v(' '),
              n('Nuxt')
            ],
            1
          )
        },
        [],
        !1,
        null,
        null,
        null
      )
      e.a = component.exports
    },
    182 (t, e, n) {
      'use strict'
      n.r(e)
      const o = {
        name: 'TheHeader',
        components: { TheSideNavToggle: n(186).default }
      }
      const r = (n(233), n(7))
      const component = Object(r.a)(
        o,
        function () {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n('div', { staticClass: 'header-container' }, [
            n(
              'header',
              { staticClass: 'the-header' },
              [
                n('the-side-navToggle', {
                  on: {
                    toggle (e) {
                      return t.$emit('sidenavToggle')
                    }
                  }
                }),
                t._v(' '),
                n(
                  'div',
                  { staticClass: 'logo' },
                  [
                    n('nuxt-link', { attrs: { to: '/' } }, [
                      t._v('\n        TECH BLOG\n      ')
                    ])
                  ],
                  1
                ),
                t._v(' '),
                n('div', { staticClass: 'spacer' }),
                t._v(' '),
                n('div', { staticClass: 'navigation-items' }, [
                  n('ul', { staticClass: 'nav-list' }, [
                    n(
                      'li',
                      { staticClass: 'nav-item' },
                      [
                        n('nuxt-link', { attrs: { to: '/posts' } }, [
                          t._v('\n            Blog\n          ')
                        ])
                      ],
                      1
                    ),
                    t._v(' '),
                    n(
                      'li',
                      { staticClass: 'nav-item' },
                      [
                        n('nuxt-link', { attrs: { to: '/about' } }, [
                          t._v('\n            About\n          ')
                        ])
                      ],
                      1
                    ),
                    t._v(' '),
                    n(
                      'li',
                      { staticClass: 'nav-item' },
                      [
                        n('nuxt-link', { attrs: { to: '/admin' } }, [
                          t._v('\n            Admin\n          ')
                        ])
                      ],
                      1
                    )
                  ])
                ])
              ],
              1
            )
          ])
        },
        [],
        !1,
        null,
        '584bb3df',
        null
      )
      e.default = component.exports
    },
    183 (t, e, n) {
      'use strict'
      n.r(e)
      const o = {
        name: 'TheSideNav',
        props: { show: { type: Boolean, default: !1 } }
      }
      const r = (n(235), n(7))
      const component = Object(r.a)(
        o,
        function () {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n(
            'div',
            { staticClass: 'sidenav-container' },
            [
              t.show
                ? n('div', {
                  staticClass: 'sidenav-backdrop',
                  on: {
                    click (e) {
                      return t.$emit('close')
                    }
                  }
                })
                : t._e(),
              t._v(' '),
              n('transition', { attrs: { name: 'slide-side' } }, [
                t.show
                  ? n('div', { staticClass: 'sidenav' }, [
                    n(
                      'ul',
                      {
                        staticClass: 'nav-list',
                        on: {
                          click (e) {
                            return t.$emit('close')
                          }
                        }
                      },
                      [
                        n(
                          'li',
                          { staticClass: 'nav-item' },
                          [
                            n('nuxt-link', { attrs: { to: '/posts' } }, [
                              t._v('\n            Blog\n          ')
                            ])
                          ],
                          1
                        ),
                        t._v(' '),
                        n(
                          'li',
                          { staticClass: 'nav-item' },
                          [
                            n('nuxt-link', { attrs: { to: '/about' } }, [
                              t._v('\n            About\n          ')
                            ])
                          ],
                          1
                        ),
                        t._v(' '),
                        n(
                          'li',
                          { staticClass: 'nav-item' },
                          [
                            n('nuxt-link', { attrs: { to: '/admin' } }, [
                              t._v('\n            Admin\n          ')
                            ])
                          ],
                          1
                        )
                      ]
                    )
                  ])
                  : t._e()
              ])
            ],
            1
          )
        },
        [],
        !1,
        null,
        '2159f254',
        null
      )
      e.default = component.exports
    },
    184 (t, e, n) {
      'use strict'
      n.r(e)
      const o = {
        components: { PostPreview: n(185).default },
        props: {
          isAdmin: { type: Boolean, default: !1 },
          posts: { type: Array, required: !0 }
        }
      }
      const r = (n(270), n(7))
      const component = Object(r.a)(
        o,
        function () {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n(
            'section',
            { staticClass: 'post-list' },
            t._l(t.posts, function (e) {
              return n('post-preview', {
                key: e.id,
                attrs: {
                  id: e.id,
                  'is-admin': t.isAdmin,
                  thumbnail: e.thumbnail,
                  title: e.title,
                  'preview-text': e.previewText
                }
              })
            }),
            1
          )
        },
        [],
        !1,
        null,
        'fc7a6cf2',
        null
      )
      e.default = component.exports
    },
    185 (t, e, n) {
      'use strict'
      n.r(e)
      const o = {
        name: 'PostPreview',
        props: {
          id: { type: String, required: !0 },
          title: { type: String, required: !0 },
          previewText: { type: String, required: !0 },
          thumbnail: { type: String, required: !0 },
          isAdmin: { type: Boolean, required: !0 }
        }
      }
      const r = (n(268), n(7))
      const component = Object(r.a)(
        o,
        function () {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n(
            'nuxt-link',
            {
              staticClass: 'post-preview',
              attrs: { to: t.isAdmin ? '/admin/' + t.id : '/posts/' + t.id }
            },
            [
              n('article', [
                n('div', {
                  staticClass: 'post-thumbnail',
                  style: { backgroundImage: 'url(' + t.thumbnail + ')' }
                }),
                t._v(' '),
                n('div', { staticClass: 'post-content' }, [
                  n('h1', [t._v(t._s(t.title))]),
                  t._v(' '),
                  n('p', [t._v(t._s(t.previewText))])
                ])
              ])
            ]
          )
        },
        [],
        !1,
        null,
        '484a3451',
        null
      )
      e.default = component.exports
    },
    186 (t, e, n) {
      'use strict'
      n.r(e)
      n(231)
      const o = n(7)
      const component = Object(o.a)(
        {},
        function () {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n(
            'div',
            {
              staticClass: 'drawer-toggle',
              attrs: { role: 'button' },
              on: {
                click (e) {
                  return t.$emit('toggle')
                }
              }
            },
            [
              n('div', { staticClass: 'bar' }),
              t._v(' '),
              n('div', { staticClass: 'bar' }),
              t._v(' '),
              n('div', { staticClass: 'bar' })
            ]
          )
        },
        [],
        !1,
        null,
        '52d1c666',
        null
      )
      e.default = component.exports
    },
    187 (t, e, n) {
      n(188), (t.exports = n(189))
    },
    206 (t, e, n) {
      'use strict'
      n.r(e),
      (e.default = function (t) {
        t.store.getters['auth/isAuthenticated'] || t.redirect('/admin/auth')
      })
    },
    207 (t, e, n) {
      'use strict'
      n.r(e),
      (e.default = function (t) {
        t.store.dispatch('auth/initAuth', t.req)
      })
    },
    225 (t, e, n) {
      'use strict'
      n(155)
    },
    226 (t, e, n) {
      const o = n(21)(!1)
      o.push([
        t.i,
        '.error-page[data-v-629329f6]{text-align:center}.error-page a[data-v-629329f6]{text-decoration:none;color:red}.error-page a[data-v-629329f6]:active,.error-page a[data-v-629329f6]:hover{color:salmon}',
        ''
      ]),
      (t.exports = o)
    },
    229 (t, e, n) {
      let content = n(230)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, n(22).default)('470cbfe5', content, !0, { sourceMap: !1 })
    },
    230 (t, e, n) {
      const o = n(21)(!1)
      o.push([
        t.i,
        '.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}',
        ''
      ]),
      (t.exports = o)
    },
    231 (t, e, n) {
      'use strict'
      n(157)
    },
    232 (t, e, n) {
      const o = n(21)(!1)
      o.push([
        t.i,
        '.drawer-toggle[data-v-52d1c666]{display:flex;flex-direction:column;justify-content:space-around;height:50%;width:35px;cursor:pointer}@media (min-width:768px){.drawer-toggle[data-v-52d1c666]{display:none}}.drawer-toggle .bar[data-v-52d1c666]{width:90%;height:2px;background-color:#fff}',
        ''
      ]),
      (t.exports = o)
    },
    233 (t, e, n) {
      'use strict'
      n(158)
    },
    234 (t, e, n) {
      const o = n(21)(!1)
      o.push([
        t.i,
        '.header-container[data-v-584bb3df]{height:60px}.the-header[data-v-584bb3df]{width:100%;position:fixed;height:60px;display:flex;justify-content:space-around;align-items:center;background-color:#000;z-index:100;box-sizing:border-box;padding:0 20px}.logo[data-v-584bb3df]{margin:0 10px;font-size:1.3rem}.logo a[data-v-584bb3df]{text-decoration:none;color:#fff}.spacer[data-v-584bb3df]{flex:1}.navigation-items[data-v-584bb3df]{display:none}@media (min-width:768px){.navigation-items[data-v-584bb3df]{display:block}}.nav-list[data-v-584bb3df]{list-style:none;padding:0;margin:0;display:flex}.nav-item[data-v-584bb3df]{margin:0 10px}.nav-item a[data-v-584bb3df]{text-decoration:none;color:#fff}.nav-item a.nuxt-link-active[data-v-584bb3df],.nav-item a[data-v-584bb3df]:active,.nav-item a[data-v-584bb3df]:hover{color:red}',
        ''
      ]),
      (t.exports = o)
    },
    235 (t, e, n) {
      'use strict'
      n(159)
    },
    236 (t, e, n) {
      const o = n(21)(!1)
      o.push([
        t.i,
        '.sidenav-container[data-v-2159f254]{height:100%;width:100%}.sidenav-backdrop[data-v-2159f254]{width:100%;background-color:rgba(0,0,0,.7);z-index:1000}.sidenav[data-v-2159f254],.sidenav-backdrop[data-v-2159f254]{height:100%;position:fixed;top:0;left:0}.sidenav[data-v-2159f254]{width:300px;background-color:#fff;z-index:10000;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-2159f254],.slide-side-leave-active[data-v-2159f254]{transition:all .3s ease-out}.slide-side-enter[data-v-2159f254],.slide-side-leave-to[data-v-2159f254]{transform:translateX(-100%)}.nav-list[data-v-2159f254]{list-style:none;padding:0;margin:0}.nav-item[data-v-2159f254]{margin:20px 0}.nav-item a[data-v-2159f254]{text-decoration:none;color:#000;font-size:1.5rem}.nav-item a[data-v-2159f254]:active,.nav-item a[data-v-2159f254]:hover{color:red}',
        ''
      ]),
      (t.exports = o)
    },
    237 (t, e, n) {
      'use strict'
      n(160)
    },
    238 (t, e, n) {
      const o = n(21)(!1)
      o.push([
        t.i,
        'html{font-family:"Open Sans",sans-serif}body{margin:0}',
        ''
      ]),
      (t.exports = o)
    },
    239 (t, e, n) {
      'use strict'
      n.r(e),
      n.d(e, 'actions', function () {
        return d
      })
      n(32), n(23), n(27), n(42), n(26), n(43)
      const o = n(14)
      const r = n(3)
      n(36)
      function c (object, t) {
        const e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
          e.push.apply(e, n)
        }
        return e
      }
      function l (t) {
        for (let i = 1; i < arguments.length; i++) {
          const source = arguments[i] != null ? arguments[i] : {}
          i % 2
            ? c(Object(source), !0).forEach(function (e) {
              Object(o.a)(t, e, source[e])
            })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
              : c(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      const d = {
        nuxtServerInit (t, e) {
          return Object(r.a)(
            regeneratorRuntime.mark(function n () {
              let o, r, c, d
              return regeneratorRuntime.wrap(
                function (n) {
                  for (;;) {
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (o = t.commit),
                          (n.prev = 1),
                          (n.next = 4),
                          e.app.$axios.get('/posts.json')
                        )
                      case 4:
                        for (d in ((r = n.sent), (c = []), r.data)) { c.push(l(l({}, r.data[d]), {}, { id: d })) }
                        o('post/setPosts', c), (n.next = 13)
                        break
                      case 10:
                        (n.prev = 10), (n.t0 = n.catch(1)), console.log(n.t0)
                      case 13:
                      case 'end':
                        return n.stop()
                    }
                  }
                },
                n,
                null,
                [[1, 10]]
              )
            })
          )()
        }
      }
    },
    240 (t, e, n) {
      'use strict'
      n.r(e)
      n(32), n(23), n(27), n(42), n(26), n(43)
      const o = n(14)
      const r = n(3)
      n(36), n(25), n(63), n(241)
      function c (object, t) {
        const e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
          e.push.apply(e, n)
        }
        return e
      }
      function l (t) {
        for (let i = 1; i < arguments.length; i++) {
          const source = arguments[i] != null ? arguments[i] : {}
          i % 2
            ? c(Object(source), !0).forEach(function (e) {
              Object(o.a)(t, e, source[e])
            })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
              : c(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      const d = {
        setPosts (t, e) {
          (0, t.commit)('setPosts', e)
        },
        addPost (t, e) {
          const n = this
          return Object(r.a)(
            regeneratorRuntime.mark(function o () {
              let r
              return regeneratorRuntime.wrap(
                function (o) {
                  for (;;) {
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (o.prev = 0),
                          (o.next = 3),
                          n.$axios.post(
                            '/posts.json?auth='.concat(t.rootState.auth.token),
                            l(l({}, e), {}, { updatedDate: new Date() })
                          )
                        )
                      case 3:
                        (r = o.sent),
                        t.commit(
                          'addPost',
                          l(l({}, e), {}, { id: r.data.name })
                        ),
                        (o.next = 10)
                        break
                      case 7:
                        (o.prev = 7), (o.t0 = o.catch(0)), console.log(o.t0)
                      case 10:
                      case 'end':
                        return o.stop()
                    }
                  }
                },
                o,
                null,
                [[0, 7]]
              )
            })
          )()
        },
        editPost (t, e) {
          const n = this
          return Object(r.a)(
            regeneratorRuntime.mark(function o () {
              return regeneratorRuntime.wrap(
                function (o) {
                  for (;;) {
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (o.prev = 0),
                          (o.next = 3),
                          n.$axios.put(
                            '/posts/'
                              .concat(e.id, '.json?auth=')
                              .concat(t.rootState.auth.token),
                            e
                          )
                        )
                      case 3:
                        t.commit('editPost', e), (o.next = 9)
                        break
                      case 6:
                        (o.prev = 6), (o.t0 = o.catch(0)), console.log(o.t0)
                      case 9:
                      case 'end':
                        return o.stop()
                    }
                  }
                },
                o,
                null,
                [[0, 6]]
              )
            })
          )()
        }
      }
      e.default = {
        state () {
          return { posts: [] }
        },
        getters: {
          posts (t) {
            return t.posts
          }
        },
        actions: d,
        mutations: {
          setPosts (t, e) {
            t.posts = e
          },
          addPost (t, e) {
            t.posts.push(e)
          },
          editPost (t, e) {
            const n = t.posts.findIndex(function (t) {
              return t.id === e.id
            })
            t.posts[n] = e
          }
        }
      }
    },
    242 (t, e, n) {
      'use strict'
      n.r(e)
      const o = n(3)
      const r = (n(243), n(48), n(114), n(113), n(244), n(36), n(67))
      const c = n.n(r)
      const l = {
        createAndLogin (t, e) {
          const n = this
          return Object(o.a)(
            regeneratorRuntime.mark(function o () {
              let r, l, data
              return regeneratorRuntime.wrap(
                function (o) {
                  for (;;) {
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (r = t.commit),
                          (l =
                              'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBGv2eqWWU25LKFVmBSRUopvrlnUp2lkm0'),
                          e.isLogin ||
                              (l =
                                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGv2eqWWU25LKFVmBSRUopvrlnUp2lkm0'),
                          (o.prev = 3),
                          (o.next = 6),
                          n.$axios.$post(l, e.user)
                        )
                      case 6:
                        (data = o.sent),
                        r('setToken', data.idToken),
                        localStorage.setItem('token', data.idToken),
                        localStorage.setItem(
                          'tokenExpiration',
                          new Date().getTime() + 1e3 * +data.expiresIn
                        ),
                        c.a.set('jwt', data.idToken),
                        c.a.set(
                          'tokenExpiration',
                          new Date().getTime() + 1e3 * +data.expiresIn
                        ),
                        (o.next = 17)
                        break
                      case 14:
                        (o.prev = 14), (o.t0 = o.catch(3)), console.log(o.t0)
                      case 17:
                      case 'end':
                        return o.stop()
                    }
                  }
                },
                o,
                null,
                [[3, 14]]
              )
            })
          )()
        },
        initAuth (t, e) {
          let n
          let o
          const r = t.commit
          const c = t.dispatch
          if (e) {
            if (!e.headers.cookie) { return }
            const l = e.headers.cookie.split(';').find(function (t) {
              return t.trim().startsWith('jwt=')
            })
            if (!l) { return }
            (n = l.split('=')[1]),
            (o = e.headers.cookie
              .split(';')
              .find(function (t) {
                return t.trim().startsWith('tokenExpiration=')
              })
              .split('=')[1])
          } else {
            (n = localStorage.getItem('token')),
            (o = localStorage.getItem('tokenExpiration'))
          }
          new Date().getTime() > +o || !n ? c('logout') : r('setToken', n)
        },
        logout (t) {
          (0, t.commit)('clearToken'),
          c.a.remove('jwt'),
          c.a.remove('tokenExpiration'),
          localStorage.removeItem('token'),
          localStorage.removeItem('tokenExpiration')
        }
      }
      e.default = {
        state () {
          return { token: null }
        },
        getters: {
          token (t) {
            return t.token
          },
          isAuthenticated (t) {
            return t.token != null
          }
        },
        actions: l,
        mutations: {
          setToken (t, e) {
            t.token = e
          },
          clearToken (t) {
            t.token = null
          }
        }
      }
    },
    264 (t, e, n) {
      'use strict'
      n(170)
    },
    265 (t, e, n) {
      const o = n(21)(!1)
      o.push([
        t.i,
        '.button[data-v-8b8e64f6]{font:inherit;background-color:#000;color:#fff;padding:5px;cursor:pointer;border:1px solid #000}.button[data-v-8b8e64f6]:active,.button[data-v-8b8e64f6]:hover{background-color:#333;border:1px solid #000}.inverted[data-v-8b8e64f6]{color:#000}.inverted[data-v-8b8e64f6],.inverted[data-v-8b8e64f6]:active,.inverted[data-v-8b8e64f6]:hover{background-color:#fff;border:1px solid transparent}.inverted[data-v-8b8e64f6]:active,.inverted[data-v-8b8e64f6]:hover{color:#ccc}.cancel[data-v-8b8e64f6]{background-color:red}.cancel[data-v-8b8e64f6],.cancel[data-v-8b8e64f6]:active,.cancel[data-v-8b8e64f6]:hover{color:#fff;border:1px solid transparent}.cancel[data-v-8b8e64f6]:active,.cancel[data-v-8b8e64f6]:hover{background-color:salmon}',
        ''
      ]),
      (t.exports = o)
    },
    266 (t, e, n) {
      'use strict'
      n(171)
    },
    267 (t, e, n) {
      const o = n(21)(!1)
      o.push([
        t.i,
        '.input-control[data-v-1f4f3866]{margin:10px 0}.input-control label[data-v-1f4f3866]{display:block;font-weight:700}.input-control input[data-v-1f4f3866],.input-control textarea[data-v-1f4f3866]{display:block;width:100%;box-sizing:border-box;font:inherit;border:1px solid #ccc;padding:5px}.input-control input[data-v-1f4f3866]:focus,.input-control textarea[data-v-1f4f3866]:focus{background-color:#eee;outline:none}',
        ''
      ]),
      (t.exports = o)
    },
    268 (t, e, n) {
      'use strict'
      n(172)
    },
    269 (t, e, n) {
      const o = n(21)(!1)
      o.push([
        t.i,
        '.post-preview[data-v-484a3451]{border:1px solid #ccc;box-shadow:0 2px 2px #ccc;background-color:#fff;width:90%}a[data-v-484a3451]{text-decoration:none;color:#000}@media (min-width:850px){.post-preview[data-v-484a3451]{width:400px;margin:10px}}.post-thumbnail[data-v-484a3451]{width:100%;height:200px;background-position:50%;background-size:cover}.post-content[data-v-484a3451]{padding:10px;text-align:center}a:active .post-content[data-v-484a3451],a:hover .post-content[data-v-484a3451]{background-color:#ccc}',
        ''
      ]),
      (t.exports = o)
    },
    270 (t, e, n) {
      'use strict'
      n(173)
    },
    271 (t, e, n) {
      const o = n(21)(!1)
      o.push([
        t.i,
        '.post-list[data-v-fc7a6cf2]{display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}',
        ''
      ]),
      (t.exports = o)
    },
    41 (t, e, n) {
      'use strict'
      n(225)
      const o = n(7)
      const component = Object(o.a)(
        {},
        function () {
          const t = this
          const e = t.$createElement
          t._self._c
          return t._m(0)
        },
        [
          function () {
            const t = this
            const e = t.$createElement
            const n = t._self._c || e
            return n('div', { staticClass: 'error-page' }, [
              n('h1', [t._v('Oops, something went wrong!')]),
              t._v(' '),
              n('p', [
                t._v('Back to '),
                n('a', { attrs: { href: '/' } }, [t._v('safety')]),
                t._v('!')
              ])
            ])
          }
        ],
        !1,
        null,
        '629329f6',
        null
      )
      e.a = component.exports
    }
  },
  [[187, 11, 1, 12]]
])
