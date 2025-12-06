import { defineStore } from "pinia";
import { storage } from "@/utils/storage";
import { authService } from "@/services/authService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: storage.get("user") || null,
    token: storage.get("token") || null,
    loading: false,
    error: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(payload) {
      try {
        this.loading = true;
        this.error = null;

        const res = await authService.login(payload);

        // simpan data di state
        this.user = res.user;
        this.token = res.token;

        // simpan juga ke localStorage
        storage.set("user", res.user);
        storage.set("token", res.token);

        return true;
      } catch (err) {
        this.error = err.response?.data?.message || "Login gagal";
        return false;
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      storage.remove("user");
      storage.remove("token");
    }
  }
});
