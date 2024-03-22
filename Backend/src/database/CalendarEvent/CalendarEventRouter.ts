import { isAdapterEvents } from "@src/plugins/databse/adapter/isAdapterEvents";

export class CalendarEventRouter extends isAdapterEvents {
    constructor() {
        super()
        this.initializeRoutes();
    }

    protected initializeRoutes(): void {
        console.log()
    }

}