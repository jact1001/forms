const currentDateTime = new Date().toISOString();
export const createCasePayload = (formId, count) => JSON.stringify(
    {
        "useCase": {
            "case_name":"caso - "+count+" ("+currentDateTime+")",
            "form_id": formId
        }
    }
);
