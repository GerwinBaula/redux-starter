// import {
//   bugAdded,
//   bugRemoved,
//   bugResolved,
//   bugAssignedToUser,
//   getUnresolvedBugs,
//   getBugsByUser,
// } from "./store/bugs";
// import { projectAdded } from "./store/projects";
// import { userAdded } from "./store/users";
import configureStore from "./store/configureStore";
import { loadBugs, addBug, resolveBug, assignBug } from "./store/bugs";

const store = configureStore();

// store.dispatch(userAdded({ name: "user1" }));
// store.dispatch({ type: "error", payload: { message: "An error occured." } });
// store.dispatch((dispatch, getState) => {
//   console.log("thunk");
// });
// store.dispatch(userAdded({ name: "user2" }));
// store.dispatch(bugAdded({ description: "bug1" }));
// store.dispatch(bugAdded({ description: "bug2" }));
// store.dispatch(bugAdded({ description: "bug3" }));
// store.dispatch(bugRemoved({ id: 1 }));

// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));

// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(projectAdded({ name: "Project 2" }));
// store.dispatch(projectAdded({ name: "Project 3" }));
// store.dispatch(projectAdded({ name: "Project 4" }));

// const bugs = getBugsByUser(1)(store.getState());

// const unresolvedBugs = getUnresolvedBugs(store.getState());

// store.dispatch({
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     onSuccess: "bugsReceived",
//     onError: "bugsRequestFailed",
//   },
// });

// store.dispatch(
//   actions.apiCallBegan({
//     url: "/bugs",
//     onSuccess: "bugsReceived",
//     // onError: actions.apiCallFailed.type, // If u want to pass specific error
//   })
// );

store.dispatch(loadBugs());
// store.dispatch(addBug({ description: "d" }));
store.dispatch(resolveBug(3));
store.dispatch(assignBug(4, 1));

// console.log(store.getState());
// console.log(unresolvedBugs);
// console.log(bugs);
