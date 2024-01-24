import { Controller, Get } from "@tsed/common";

@Controller("/health")
export class HealthController {

    @Get('')
    async health(): Promise<{ status: string }> {
        return { status: 'OK.' };
    }
}
