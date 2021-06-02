/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    274 (t, e, o) {
      let content = o(284)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, o(22).default)('7dba8507', content, !0, { sourceMap: !1 })
    },
    283 (t, e, o) {
      'use strict'
      o(274)
    },
    284 (t, e, o) {
      const n = o(21)(!1)
      n.push([
        t.i,
        '.admin-page[data-v-68de82cc]{padding:20px}.new-post[data-v-68de82cc]{border-bottom:2px solid #ccc;padding-bottom:10px}.existing-posts h1[data-v-68de82cc],.new-post[data-v-68de82cc]{text-align:center}',
        ''
      ]),
      (t.exports = n)
    },
    299 (t, e, o) {
      'use strict'
      o.r(e)
      o(32), o(23), o(27), o(42), o(26), o(43)
      const n = o(14)
      const r = o(66)
      function c (object, t) {
        const e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          let o = Object.getOwnPropertySymbols(object)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
          e.push.apply(e, o)
        }
        return e
      }
      const d = {
        middleware: ['check-auth', 'auth'],
        computed: (function (t) {
          for (let i = 1; i < arguments.length; i++) {
            const source = arguments[i] != null ? arguments[i] : {}
            i % 2
              ? c(Object(source), !0).forEach(function (e) {
                Object(n.a)(t, e, source[e])
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
        })({}, Object(r.b)({ posts: 'post/posts' })),
        methods: {
          onLogout () {
            this.$store.dispatch('auth/logout'),
            this.$router.push('/admin/auth')
          }
        }
      }
      const l = (o(283), o(7))
      const component = Object(l.a)(
        d,
        function () {
          const t = this
          const e = t.$createElement
          const o = t._self._c || e
          return o('div', { staticClass: 'admin-page' }, [
            o(
              'section',
              { staticClass: 'new-post' },
              [
                o(
                  'app-button',
                  {
                    attrs: { type: 'button' },
                    on: {
                      click (e) {
                        return t.$router.push('/admin/new-post')
                      }
                    }
                  },
                  [t._v('\n      Create post\n    ')]
                ),
                t._v(' '),
                o(
                  'app-button',
                  {
                    staticStyle: { 'margin-left': '10px' },
                    attrs: { type: 'button' },
                    on: { click: t.onLogout }
                  },
                  [t._v('\n      Log out\n    ')]
                )
              ],
              1
            ),
            t._v(' '),
            o(
              'section',
              { staticClass: 'existing-posts' },
              [
                o('h1', [t._v('Existing Posts')]),
                t._v(' '),
                o('post-list', { attrs: { 'is-admin': '', posts: t.posts } })
              ],
              1
            )
          ])
        },
        [],
        !1,
        null,
        '68de82cc',
        null
      )
      e.default = component.exports
    }
  }
])
