const currentDateTime = new Date().toISOString();
export const createCasePayload = (formId: string) => JSON.stringify(
    {
        "useCase": {
            "case_name":"caso - 1 ("+currentDateTime+")",
            "form_id": formId
        }
    }
);
