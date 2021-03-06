import produce from "immer";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  groups: [
    // {
    //   id: "G1",
    //   name: "To Do",
    // },
    // {
    //   id: "G2",
    //   name: "Doing",
    // },
    // {
    //   id: "G3",
    //   name: "Done",
    // }
  ],
  error: "",
};

function groupReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_GROUPS_SUCCESS:
      return produce(state, (draft) => {
        draft.groups = [...action.groups];
        draft.error = "";
      });
    case actionTypes.GET_GROUPS_FAIL:
      return produce(state, (draft) => {
        draft.groups = [];
        draft.error = action.errorMsg;
      });
    case actionTypes.ADD_GROUP_SUCCESS:
      return produce(state, (draft) => {
        draft.groups.push(action.group);
      });
    case actionTypes.UPDATE_GROUP_SUCCESS:
      return produce(state, (draft) => {
        for (let group of draft.groups) {
          if (group.id === action.group.id) {
            group.name = action.group.name;
            break;
          }
        }
      });

    default:
      return state;
  }
}

export default groupReducer;
