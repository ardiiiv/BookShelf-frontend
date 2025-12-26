import { computed } from "vue";
import { useAuthStore } from "@/store/auth";

export function useAuth() {
  const auth = useAuthStore();

  return {
    user: computed(() => auth.user),
    loading: computed(() => auth.loading),
    error: computed(() => auth.error),
    isAuthenticated: computed(() => auth.isAuthenticated),

    login: auth.login,
    register: auth.register,
    getProfile: auth.getProfile,
    updateProfile: auth.updateProfile,
    logout: auth.logout,
  };
}
