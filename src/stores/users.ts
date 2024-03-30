import { defineStore } from "pinia";

export const useUserStore = defineStore("users", {
  state: () => {
    return { array: [] };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setUsers(userList: any) {
      this.array = userList;
    },
    getUser(id: number) {
      this.array[id];
    },
  },
});
