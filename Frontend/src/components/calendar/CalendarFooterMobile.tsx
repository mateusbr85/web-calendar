import { useState } from "react"
import { Input } from "../formFields/Input"
import { CalendarZustand } from "../../zustand/CalendarZustand"

export const CalendarFooterMobile = () => {
    const [openModal] = CalendarZustand((state) => [state.dispatch.openModal])
    const [addOneEvent, setAddOneEvent] = useState(
        {

        }
    )
    const [checkAddoneEvent,setCheckAddOneEvent] = useState(false)


    const setOneEvent = (value: string) => {
        setAddOneEvent({ ...addOneEvent, event_name: value })
    }

    return (
        <div
            className='flex  items-end h-screen py-3
                    lg:hidden md:hidden
                '
        >
            <div
                className='flex w-[100%] justify-between items-center '
            >
                <div
                    className='w-[80%]'
                >
                    <Input
                        label=''
                        placeholder='Adicione o evento'
                        onChange={(event) => setOneEvent(event.target.value)}
                        onFocus={() => setCheckAddOneEvent(true)}
                        onBlur={() => setCheckAddOneEvent(false)}
                    />
                </div>
                <div
                    className='w-[20%] flex items-center justify-center transition-all'
                >
                    {checkAddoneEvent ? (
                        <div
                            className='flex justify-center items-center w-12 h-12 rounded-full bg-accent_light  shadow-md shadow-background_dark/50'
                        >
                            <i className="fas fa-check fa-lg text-background_light"></i>
                        </div>

                    ) : (
                        <div
                            className='flex justify-center items-center w-12 h-12 rounded-full bg-accent_light shadow-md shadow-background_dark/50'
                            onClick={openModal}
                        >
                            <i className="fas fa-plus fa-lg text-background_light"></i>
                        </div>

                    )}
                </div>
            </div>
        </div>
    )
}