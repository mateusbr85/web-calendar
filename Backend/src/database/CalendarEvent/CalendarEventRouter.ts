import { isAdapterEvents } from "@src/plugins/databse/adapter/isAdapterEvents";
import { CalendarEventController } from './CalendarEventController';

export class CalendarEventRouter extends isAdapterEvents {
    constructor() {
        super()
        this.initializeRoutes();
    }

    protected initializeRoutes(): void {
        this.router.post('/calendar/events/insert', async (req, res) => {
            await CalendarEventController.insert(req, res)
        })
    }

}