import { Calendar, Badge } from 'rsuite';
import { Input } from '../components/formFields/Input';

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

export const CalendarPage = () => {

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
                        />
                    </div>
                    <div
                        className='w-[20%] flex items-center justify-center'
                    >
                        <div
                            className='flex justify-center items-center w-12 h-12 rounded-full bg-accent_light'
                        >
                            <i className="fas fa-plus fa-lg text-background_light"></i>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}