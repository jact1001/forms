const currentDateTime = new Date().toISOString();
export const createCasePayload = (formId) => JSON.stringify(
    {
        "useCase": {
            "case_name":"caso - 1 ("+currentDateTime+")",
            "form_id": formId
        }
    }
);
