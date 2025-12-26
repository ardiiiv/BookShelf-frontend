import { defineStore } from "pinia";
import { storage } from "@/utils/storage";
import { authService } from "@/services/authServices.js";

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
    // ===== LOGIN =====
    async login(payload) {
      try {
        this.loading = true;
        this.error = null;

        const res = await authService.login(payload);

        this.user = res.data.user;
        this.token = res.data.token;

        storage.set("user", this.user);
        storage.set("token", this.token);

        return true;
      } catch (err) {
        this.error = err.response?.data?.message || "Login gagal";
        return false;
      } finally {
        this.loading = false;
      }
    },

    // ===== REGISTER =====
    async register(payload) {
      try {
        this.loading = true;
        this.error = null;

        const res = await authService.register(payload);

        this.user = res.data.user;
        this.token = res.data.token;

        storage.set("user", this.user);
        storage.set("token", this.token);

        return true;
      } catch (err) {
        this.error = err.response?.data?.message || "Register gagal";
        return false;
      } finally {
        this.loading = false;
      }
    },

    // ===== GET PROFILE =====
    async getProfile() {
      try {
        this.loading = true;
        this.error = null;

        const res = await authService.getProfile();

        this.user = res.data.user;
        storage.set("user", this.user);

        return this.user;
      } catch (err) {
        // token invalid / expired
        this.logout();
        this.error =
          err.response?.data?.message || "Gagal mengambil profil";
      } finally {
        this.loading = false;
      }
    },

    // ===== UPDATE PROFILE =====
    async updateProfile(payload) {
      try {
        this.loading = true;
        this.error = null;

        const res = await authService.updateProfile(payload);

        this.user = res.data.user;
        storage.set("user", this.user);

        return true;
      } catch (err) {
        this.error =
          err.response?.data?.message || "Update profil gagal";
        return false;
      } finally {
        this.loading = false;
      }
    },

    // ===== LOGOUT =====
    async logout() {
      try {
        await authService.logout();
      } catch (_) {
      } finally {
        this.user = null;
        this.token = null;
        storage.remove("user");
        storage.remove("token");
      }
    },
  },
});
