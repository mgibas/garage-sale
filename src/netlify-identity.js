import { reactive } from 'vue'
import netlifyIdentity from 'netlify-identity-widget'

const state = reactive({
  isAuthenticated: false,
  user: null,
})

export default {
  state,
  init () {
    netlifyIdentity.on('init', (user) => {
      state.user = user
      state.authenticated = !!user
    })
    netlifyIdentity.init({ APIUrl: 'https://gs.gibas.io/.netlify/identity' })
  },
  signIn() {
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user) => {
      state.user = user
      state.authenticated = true
      netlifyIdentity.close()
    })
  },
  signOut() {
    this.isAuthenticated = false
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => {
      state.user = null
      state.authenticated = false
    })
  }
}
