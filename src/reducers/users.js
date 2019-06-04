import { normalizedUsers } from "../fixtures";

const users = normalizedUsers.reduce((users, u) => {
  users[u.id] = u;
  return users;
}, {});

export default (usersState = users, action) => {
  return usersState;
};
