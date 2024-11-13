import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.role = user.role;
      localStorage.setItem('username', user.username);
      localStorage.setItem('role', user.role);
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearAuth(state) {
      state.user = null;
      state.token = null;
      state.role = null;
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('role');
    },
  },
  actions: {
    login({ commit }, token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      commit('setToken', token);
      commit('setUser', decodedToken);
    },
    logout({ commit }) {
      commit('clearAuth');
    },
    checkAuth({ commit, state }) {
      if (state.token) {
        const decodedToken = JSON.parse(atob(state.token.split('.')[1]));
        const isExpired = decodedToken.exp && decodedToken.exp <= Math.floor(Date.now() / 1000);

        if (isExpired) {
          commit('clearAuth');
        } else {
          commit('setUser', decodedToken);
        }
      }
    },
  },
  getters: {
    user: (state) => state.user,
    token: (state) => state.token,
    isLoggedIn: (state) => !!state.token,
    isAdmin: (state) => state.role === 'admin',
  },
});


// import { createStore } from 'vuex';
// import axios from 'axios';

// export default createStore({
//   state: {
//     user: null,
//     token: localStorage.getItem('token') || null,
//     role: localStorage.getItem('role') || null,
//   },
//   mutations: {
//     setUser(state, user) {
//       state.user = user;
//       state.role = user.role; 
//       localStorage.setItem('username', user.username);
//       localStorage.setItem('email', user.email);
//       localStorage.setItem('role', user.role);
//     },
//     setToken(state, token) {
//       state.token = token;
//       localStorage.setItem('token', token);
//     },
//     clearAuth(state) {
//       state.user = null;
//       state.token = null;
//       state.role = null;
//       localStorage.removeItem('token');
//       localStorage.removeItem('username');
//       localStorage.removeItem('email');
//       localStorage.removeItem('role');
//     },
//   },
//   actions: {
//     login({ commit }, token) {
//       const decodedToken = JSON.parse(atob(token.split('.')[1]));
//       commit('setToken', token);
//       commit('setUser', decodedToken);
//     },
//     logout({ commit }) {
//       commit('clearAuth');
//     },
//     checkAuth({ commit, state }) {
//       if (state.token) {
//         const decodedToken = JSON.parse(atob(state.token.split('.')[1]));
//         const isExpired = decodedToken.exp && decodedToken.exp <= Math.floor(Date.now() / 1000);
        
//         if (isExpired) {
//           commit('clearAuth');
//         } else {
//           commit('setUser', decodedToken);
//         }
//       }
//     },
//     async fetchUsers({ commit, state }) {
//       try {
//         const response = await axios.get('/api/users', {
//           headers: { Authorization: `Bearer ${state.token}` },
//         });
//         commit('setUser', response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         commit('clearAuth');
//       }
//     },
//   },
//   getters: {
//     user: (state) => state.user,
//     token: (state) => state.token,
//     isLoggedIn: (state) => !!state.token,
//     isAdmin: (state) => state.role === 'admin',
//   },
// });

/*import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.role = user.role; 
      localStorage.setItem('username', user.username);
      localStorage.setItem('email', user.email);
      localStorage.setItem('role', user.role);
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearAuth(state) {
      state.user = null;
      state.token = null;
      state.role = null;
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('role');
    },
  },
  actions: {
    login({ commit }, token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      commit('setToken', token);
      commit('setUser', decodedToken);
    },
    logout({ commit }) {
      commit('clearAuth');
    },
    checkAuth({ commit, state }) {
      if (state.token) {
        const decodedToken = JSON.parse(atob(state.token.split('.')[1]));
        const isExpired = decodedToken.exp && decodedToken.exp <= Math.floor(Date.now() / 1000);
        
        if (isExpired) {
          commit('clearAuth');
        } else {
          commit('setUser', decodedToken);
        }
      }
    },
  },
  getters: {
    user: (state) => state.user,
    token: (state) => state.token,
    isLoggedIn: (state) => !!state.token,
    isAdmin: (state) => state.role === 'admin',
  },
});
*/
