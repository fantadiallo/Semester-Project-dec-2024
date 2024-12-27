import ProfileAPI from "../../api/profile";
import { userId } from "../../api/constants";
import * as Storage from "../../api/storage";

const api = new ProfileAPI();

const user = Storage.load("user");

const username = location.pathname === "/profile/" ? user.name : userId;

export async function readProfile() {
    const response = await api.profile.read(username);
    const profile = response.data;
    createProfileCard(profile);
  }