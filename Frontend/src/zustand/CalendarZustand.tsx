import { create } from "zustand";

type form = {
    event_name: string,
    event_description: string,
    event_date_initial: string
    event_date_finaly: string
}

type CalendarZustand = {
    state: {
        data: form[] | [];
        showModalAddEvent: boolean
    },
    dispatch: {
        setEvent: (item: form) => void;
        removeData: () => void;
        openModal: () => void;
        closeModal: () => void;
    }
}

export const CalendarZustand = create<CalendarZustand>((set) => {
    return {
        state: {
            data: [], // Inicialmente definido como null
            showModalAddEvent: false
        },
        dispatch: {
            setEvent: (item) => {
                set((zustand) => ({
                    state: {
                        ...zustand.state,
                        data: zustand.state.data ? [...zustand.state.data, item] : [item] // Adiciona um novo item ao array data
                    }
                }));
            },
            removeData: () => {
                set((zustand) => ({
                    state: {
                        ...zustand.state,
                        data: []
                    }
                })); // Remove todos os usuários definindo data como null
            },
            openModal: () => {
                set((zustand) => ({
                    state: {
                        ...zustand.state,
                        showModalAddEvent: true
                    }
                }))
            },
            closeModal: () => {
                set((zustand) => ({
                    state: {
                        ...zustand.state,
                        showModalAddEvent: false
                    }
                }))
            }
        }

    }
});