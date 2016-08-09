const LOAD = 'redux-example/users/LOAD';
const LOAD_SUCCESS = 'redux-example/users/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/users/LOAD_FAIL';
const EDIT_START = 'redux-example/users/EDIT_START';
const EDIT_STOP = 'redux-example/users/EDIT_STOP';
const SAVE = 'redux-example/users/SAVE';
const SAVE_SUCCESS = 'redux-example/users/SAVE_SUCCESS';
const SAVE_FAIL = 'redux-example/users/SAVE_FAIL';
/* const INIT_NEW_USER = 'redux-example/users/INIT_NEW_USER';*/

const initialState = {
  list: [],
  userData: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        list: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    case EDIT_START:
      const newList = state.list.slice(0);
      const userIndex = newList.findIndex((user) => {
        if (user.id === action.userData.id) {
          return true;
        }
      });
      return {
        ...state,
        userData: newList[userIndex]
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.users && globalState.users.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/user/load') // params not used, just shown as demonstration
  };
}

export function save(widget) {
  return {
    types: [SAVE, SAVE_SUCCESS, SAVE_FAIL],
    id: widget.id,
    promise: (client) => client.post('/widget/update', {
      data: widget
    })
  };
}

export function editStart() {
  return { type: EDIT_START, userData: {id: 2, name: 'test', email: 'test@test'} };
}

export function editStop(id) {
  return { type: EDIT_STOP, id };
}
