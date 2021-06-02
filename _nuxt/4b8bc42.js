/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    276 (t, n, o) {
      let content = o(288)
      content.__esModule && (content = content.default),
      typeof content === 'string' && (content = [[t.i, content, '']]),
      content.locals && (t.exports = content.locals);
      (0, o(22).default)('0a6b9102', content, !0, { sourceMap: !1 })
    },
    287 (t, n, o) {
      'use strict'
      o(276)
    },
    288 (t, n, o) {
      const e = o(21)(!1)
      e.push([
        t.i,
        '.admin-auth-page[data-v-7d51da74]{padding:20px}.auth-container[data-v-7d51da74]{border:1px solid #ccc;border-radius:5px;box-shadow:0 2px 2px #ccc;width:300px;margin:auto;padding:10px;box-sizing:border-box}',
        ''
      ]),
      (t.exports = e)
    },
    301 (t, n, o) {
      'use strict'
      o.r(n)
      const e = {
        name: 'AdminAuthPage',
        data () {
          return { isLogin: !0, email: '', password: '' }
        },
        methods: {
          onSubmit () {
            const t = this
            const n = {
              email: this.email,
              password: this.password,
              returnSecureToken: !0
            }
            this.$store
              .dispatch('auth/createAndLogin', {
                user: n,
                isLogin: this.isLogin
              })
              .then(function () {
                return t.$router.push('/admin')
              })
          }
        }
      }
      const r = (o(287), o(7))
      const component = Object(r.a)(
        e,
        function () {
          const t = this
          const n = t.$createElement
          const o = t._self._c || n
          return o('div', { staticClass: 'admin-auth-page' }, [
            o('div', { staticClass: 'auth-container' }, [
              o(
                'form',
                {
                  on: {
                    submit (n) {
                      return n.preventDefault(), t.onSubmit(n)
                    }
                  }
                },
                [
                  o(
                    'app-control-input',
                    {
                      attrs: { type: 'email' },
                      model: {
                        value: t.email,
                        callback (n) {
                          t.email = n
                        },
                        expression: 'email'
                      }
                    },
                    [t._v('\n        E-Mail Address\n      ')]
                  ),
                  t._v(' '),
                  o(
                    'app-control-input',
                    {
                      attrs: { type: 'password' },
                      model: {
                        value: t.password,
                        callback (n) {
                          t.password = n
                        },
                        expression: 'password'
                      }
                    },
                    [t._v('\n        Password\n      ')]
                  ),
                  t._v(' '),
                  o('app-button', { attrs: { type: 'submit' } }, [
                    t._v(
                      '\n        ' +
                          t._s(t.isLogin ? 'Login' : 'Sign Up') +
                          '\n      '
                    )
                  ]),
                  t._v(' '),
                  o(
                    'app-button',
                    {
                      staticStyle: { 'margin-left': '10px' },
                      attrs: { type: 'button', 'btn-style': 'inverted' },
                      on: {
                        click (n) {
                          t.isLogin = !t.isLogin
                        }
                      }
                    },
                    [
                      t._v(
                        '\n        Switch to ' +
                            t._s(t.isLogin ? 'Signup' : 'Login') +
                            '\n      '
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        },
        [],
        !1,
        null,
        '7d51da74',
        null
      )
      n.default = component.exports
    }
  }
])
