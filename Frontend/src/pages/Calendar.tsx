import { useState } from 'react';
import { Calendar, Badge, Modal, DatePicker } from 'rsuite';
import { CalendarFooterMobile } from '../components/calendar/CalendarFooterMobile';
import dayjs from 'dayjs';
import { Input } from '../components/formFields/Input';
import { Button } from '../components/formFields/Button';
import { CalendarZustand } from '../zustand/CalendarZustand';
import { Axios } from '../utils/axios';


export const CalendarPage = () => {
    const [closeModal, showModalAddEvent] = CalendarZustand((zustand) => [
        zustand.dispatch.closeModal,
        zustand.state.showModalAddEvent,
        zustand.dispatch.setEvent,
        zustand.state.data
    ])
    const [eventValue, setEventValue] = useState(
        {
            event_name: '',
            event_description: '',
            event_date_initial: dayjs().startOf('date').format('YYYY-MM-DD HH:mm:ss'),
            event_date_finaly: dayjs().endOf('date').format('YYYY-MM-DD HH:mm:ss')

        }
    );
    const [loading, setLoading] = useState(false);



    const setFormValues = ({ field, value }: { field: string; value: any }) => {
        setEventValue({ ...eventValue, [field]: value });
    };


    const onSubmitValues = () => {
        setLoading(true)
        Axios
            .post('/api/v1/calendar/events/insert',
                {
                    data: eventValue
                }
            )
            .then((response) => {

            })
            .catch((err: any) => {

            })
            .finally(() => {
                setLoading(false)
            })
    }

    function getTodoList(date: any) {
        const day = date.getDate();

        switch (day) {
            case 10:
                return [
                    { time: '10:30 am', title: 'Meeting' },
                    { time: '12:00 pm', title: 'Lunch' }
                ];
            case 15:
                return [
                    { time: '09:30 pm', title: 'Products Introduction Meeting' },
                    { time: '12:30 pm', title: 'Client entertaining' },
                    { time: '02:00 pm', title: 'Product design discussion' },
                    { time: '05:00 pm', title: 'Product test and acceptance' },
                    { time: '06:30 pm', title: 'Reporting' },
                    { time: '10:00 pm', title: 'Going home to walk the dog' }
                ];
            default:
                return [];
        }
    }

    function renderCell(date: any) {
        const list = getTodoList(date);

        if (list.length) {
            return <Badge className="calendar-todo-item-badge" />;
        }

        return null;
    }


    return (
        <body
            className="bg-background_light max-h-screen
            px-3 flex flex-col 
            lg:px-20 lg:min-h-screen
            dark:bg-background_dark "
        >
            <Modal open={showModalAddEvent} onClose={closeModal}>
                <Modal.Header>
                    <h2
                        className='text-lg'
                    >
                        Adicionando novo Evento
                    </h2>
                </Modal.Header>
                <Modal.Body
                    className='flex flex-col gap-3 px-1'
                >
                    <Input
                        label='Nome do Evento'
                        placeholder='Insira aqui...'
                        onChange={(event) => setFormValues({ field: 'event_name', value: event.target.value })}
                    />
                    <div
                        className='flex flex-col gap-2'
                    >
                        <div
                            className='flex flex-col gap-1 '
                        >
                            <label>Data inicial</label>
                            <DatePicker
                                format='MM/dd/yyyy HH:mm'

                            />
                        </div>
                        <div
                            className='flex flex-col gap-1 '
                        >
                            <label>Data Final</label>
                            <DatePicker
                                format='MM/dd/yyyy HH:mm'
                            />
                        </div>
                    </div>
                    <Input
                        label='descrição do Evento'
                        placeholder='Insira Aqui...'
                        onChange={(event) => setFormValues({ field: 'event_description', value: event.target.value })}
                    />

                </Modal.Body>
                <Modal.Footer
                    className='flex flex-row gap-3'
                >
                    <Button
                        isLoading={loading}
                        onClick={() => onSubmitValues()}
                    >
                        Gravar
                    </Button>
                    <Button
                        isLoading={loading}
                        variant='secondary'
                        onClick={closeModal}
                    >
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
            <div
                className="min-h-10 flex items-center "
            >
                header
            </div>
            <div
                className="flex
                    lg:hidden
                "
            >
                <Calendar

                    compact
                    bordered
                    onSelect={() => alert('clieuqe')}
                    renderCell={renderCell}
                />
            </div>
            <CalendarFooterMobile />
        </body>
    )
}