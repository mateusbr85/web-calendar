import { create } from "zustand";

type User = {
    user_email: string,
    user_text_name: string,
    user_id: number
}

type UserStore = {
    user: User | null;
    setUser: (item: User) => void;
    removeUser: () => void;
}

export const userStore = create<UserStore>((set) => {
    return {
        user: null,
        setUser: (item) => set(() => ({ user: item })),
        removeUser: () => {
            set((state: any) => ({ ...state, user: null }));
        }
    }
});