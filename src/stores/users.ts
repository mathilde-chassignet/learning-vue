import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => {
    return { array: [] };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  // getters: {
  //   getUser(id: number) {
  //     this.array[id];
  //   },
  // },
  actions: {
    setUsers(userList: any) {
      this.array = userList;
    },
    async getUser(id: number) {
      this.array[id];
    },
  },
});
