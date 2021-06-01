export default function (context) {
  // context.req should be null on the client
  // and should be with value on the server
  context.store.dispatch('auth/initAuth', context.req)
}
