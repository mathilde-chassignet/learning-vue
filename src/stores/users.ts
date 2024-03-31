import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => {
    return { array: [] };
  },
  actions: {
    setUsers(userList: any) {
      this.array = userList;
    },
    getUser(id: number) {
      return this.array[id];
    },
  },
});
