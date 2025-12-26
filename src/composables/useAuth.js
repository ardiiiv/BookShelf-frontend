import { ref } from "vue";
import { authService } from "@/services/authServices.js";
import { storage } from "@/utils/storage";

export function useAuth() {
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // ===== Login =====
  async function login(payload) {
    try {
      loading.value = true;
      error.value = null;

      const res = await authService.login(payload);

      storage.set("token", res.data.token);
      user.value = res.data.user;

      return res.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Login gagal";
    } finally {
      loading.value = false;
    }
  }

  // ===== Register =====
  async function register(payload) {
    try {
      loading.value = true;
      error.value = null;

      const res = await authService.register(payload);

      storage.set("token", res.data.token);
      user.value = res.data.user;

      return res.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Register gagal";
    } finally {
      loading.value = false;
    }
  }

  // ===== Update Profil User =====
  async function updateProfile(payload) {
    try {
      loading.value = true;
      error.value = null;

      const res = await authService.updateProfile(payload);

      user.value = res.data.user;

      return res.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Update profil gagal";
    } finally {
      loading.value = false;
    }
  }

  // ===== Logout =====
  async function logout() {
    try {
      loading.value = true;
      error.value = null;

      // notify backend
      await authService.logout();
    } catch (err) {
      // error backend logout tidak fatal
      console.warn("Logout error:", err);
    } finally {
      // Logout
      storage.remove("token");
      user.value = null;
      loading.value = false;
    }
  }

  async function getProfile() {
    try {
      loading.value = true;
      error.value = null;

      const res = await authService.getProfile();

      user.value = res.data.user;
      return res.data;
    } catch (err) {
      // token invalid / expired
      storage.remove("token");
      user.value = null;

      error.value = err.response?.data?.message || "Gagal mengambil profil";
    } finally {
      loading.value = false;
    }
  }
  
  return { user, loading, error, login, register, updateProfile, logout, getProfile };
}
