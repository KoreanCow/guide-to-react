import { create } from "zustand";

interface UserState {
  nickname: string;
  profileImg: string;
}

interface UserActions {
  setNickname: (nickname: string) => void;
  setProfileImg: (profileImg: string) => void;
}

export const useUserStore = create<UserState & UserActions>((set) => ({
  nickname: '',
  profileImg: '',
  setNickname: (newNickname: string) => {
    set({ nickname: newNickname });
  },
  setProfileImg: (newProfileImg: string) => {
    set({ profileImg: newProfileImg })
  }
}));
