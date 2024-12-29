import * as storage from "../api/storage";


export function authGuard() {
  if (!storage.load("accessToken")) {
    window.location.href = "/auth/login";
  }
}
