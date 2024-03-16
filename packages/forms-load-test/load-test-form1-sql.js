import http from 'k6/http';
import {check, sleep} from 'k6';
import { Trend, Rate } from 'k6/metrics';

const health = "/health"
const createCase = "/use-case"
const updateCase = "/use-case"
const currentDateTime = new Date().toISOString();

let myTrend = new Trend('my_custom_trend');
let myRate = new Rate('my_custom_rate');

export const data = {
    //base_url: "https://dsb471zsol61i.cloudfront.net/api"
    base_url: "http://localhost:8080/api"

}
function createUpdateCaseBody(caseId, name, useCase) {
    const fieldId=useCase.sections[0].fields[0].field_id;
    const formFieldId=useCase.sections[0].fields[0].form_field_id;
    const sectionId=useCase.sections[0].id;
    const formId="65f613e049c657819feffc9f";
    return {
        "id": caseId,
        "case_name": name,
        "case_creator": "htaimal@gmail.com",
        "case_state": {
            "id": "in-progress",
            "name": "En Progreso"
        },
        "form_id": formId,
        "form_name": "Formulario SQL",
        "sections": [
            {
                "id": sectionId,
                "sectionName": "section 1 SQL",
                "section_name": "section 1 SQL",
                "access": [
                    {
                        "userId": "htaimal@gmail.com",
                        "userName": "Hernan Geovanni Taimal Narvaez",
                        "permission": [
                            "write"
                        ]
                    },
                    {
                        "userId": "patinoricar@gmail.com",
                        "userName": "Ricar Patiño",
                        "permission": [
                            "write"
                        ]
                    },
                    {
                        "userId": "rtaimal@gmail.com",
                        "userName": "Iván Ricardo Taimal Narváez",
                        "permission": [
                            "write"
                        ]
                    }
                ],
                "fields": [
                    {
                        "field_id": fieldId,
                        "is_required": true,
                        "type": "text",
                        "label": "Mi label",
                        "name": "Texto",
                        "placeholder": "Texto corto",
                        "max_length": "120",
                        "label_placeholder": "Escribe aquí el nombre de tu campo",
                        "option_placeholder": "Escribe tu opción",
                        "value": "Listos SQLField",
                        "form_field_id": formFieldId
                    }
                ]
            }
        ]
    };
}

export const options = {
    stages: [
        {duration: '10s', target: 10},
        //{duration: '1m10s', target: 10},
        //{duration: '5s', target: 0},
    ],
};

export default function () {
    const urlHealth = `${data.base_url}${health}`;
    const urlCreateCase = `${data.base_url}${createCase}`;

    const params = {
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.cnRhaW1hbEBnbWFpbC5jb20.P_cPzXaUw8fuoOGAIrIKKhTiFgbEYzo-WdoJhjqnvRk',
            'Content-Type': 'application/json'
        },
    };

    const createCasePayload=JSON.stringify(
    {
            "useCase": {
                "case_name": "Estamos Listos- Deberitas SQLCase ("+currentDateTime+")",
                "form_id": "65f613e049c657819feffc9f"
            }
         }
    );



    const resHealth = http.get(urlHealth);
    const resCreateCase = http.post(urlCreateCase,createCasePayload, params);

    check(resHealth, {'Health was 200': (r) => r.status === 200});
    check(resHealth, {'Health was Other': (r) => r.status !== 200});
    check(resCreateCase, {'Create Case was 200': (r) => r.status === 200});
    check(resCreateCase, {'Create Case was Other': (r) => r.status !== 200});

    // If the response status is 200, call another service and retrieve the entity ID
    if (resCreateCase.status === 200) {
        // Parse the response body as JSON
        const responseBody = resCreateCase.json();

        // Extract the entity ID from the response body
        const caseId = responseBody.id;
        const caseName= responseBody.case_name;
        const useCase = `/use-case/${caseId}`
        const urlUseCase = `${data.base_url}${useCase}`;

        // Call another service using the entity ID
        // const anotherResponse = http.get(`https://example.com/api/entity/${entityId}`);
        const resUseCase = http.get(urlUseCase,params);
        // Perform additional checks or actions with the 'anotherResponse'
        check(resUseCase, {'Get Case was 200': (r) => r.status === 200});
        check(resUseCase, {'Get Case was Other': (r) => r.status !== 200});

        const urlUpdateCase = `${data.base_url}${updateCase}`;

        const useCaseResponse = resUseCase.json();

        console.log("PREVIOUSUPDATEBODY*****" + JSON.stringify(useCaseResponse,null,2));

        const updateCasePayload=JSON.stringify(createUpdateCaseBody(caseId,caseName,useCaseResponse));
        const resUpdateCase = http.put(urlUpdateCase,updateCasePayload, params);
        if (resUpdateCase.status !== 200) {
            console.log("UPDATEERRORCASEID***********"+caseId);
            console.log("UPDATERESPONSEBODY*****" + JSON.stringify(resUpdateCase,null,2));
            console.log("  ");
            console.log("*********************************");
        }else{
            console.log("  ");
            console.log("OKCASEID***********"+caseId);

        }
        // Perform additional checks or actions with the 'anotherResponse'
        check(resUpdateCase, {'Update Case was 200': (r) => r.status === 200});
        check(resUpdateCase, {'Update Case was Other': (r) => r.status !== 200});

    }else
    {
        console.log("CREATERESPONSEBODY*****" + JSON.stringify(resCreateCase,null,2));
        console.log("  ");
        console.log("*********************************");

    }


    // Record custom metrics
    myTrend.add(resCreateCase.timings.duration);
    myRate.add(resCreateCase.status === 200);

    sleep(1);
}
