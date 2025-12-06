import api from "@/api/api";

export const authService = {
  login(payload) {
    return api.post("/auth/login", payload);
  },

  register(payload) {
    return api.post("/auth/register", payload);
  },

  updateProfile(payload) {
    return api.put("/auth/me")
  },

  getProfile() {
    return api.get("/auth/me");
  },
};
