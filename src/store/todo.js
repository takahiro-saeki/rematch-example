const todo = {
  state: [],
  reducers: {
    add(state, payload) {
      return [...state, ...payload]
    },
    post(state, payload) {
      console.log({state, payload})
      return [...state, ...payload]
    }
  }
}

export default todo;