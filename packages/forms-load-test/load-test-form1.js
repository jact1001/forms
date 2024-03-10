import http from 'k6/http';
import {check, sleep} from 'k6';
import { Trend, Rate } from 'k6/metrics';

const health = "/health"
const createCase = "/user-forms/use-case"
const updateCase = "/use-case"
const currentDateTime = new Date().toISOString();

let myTrend = new Trend('my_custom_trend');
let myRate = new Rate('my_custom_rate');

export const data = {
    //base_url: "https://dsb471zsol61i.cloudfront.net/api"
    base_url: "http://localhost:8080/api"

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
                "name": "caso - Este Si ("+currentDateTime+")",
                "state": {
                    "id": "pending",
                    "name": "Terminado"
                }
            },
            "formId": "65db446f5f0cf0eaff62f9bc"
        }
    );

    const updateCasePayload=JSON.stringify(
        {
            "id": "65db45055f0cf0eaff62fa83",
            "case_name": "caso - 1 (25/02/2024, 08:47:49 a.m.)",
            "case_creator": "rtaimal@gmail.com",
            "case_state": {
                "id": "in-progress",
                "name": "En Progreso"
            },
            "form_id": "65db446f5f0cf0eaff62f9bc",
            "form_name": "prueba Ivan 7",
            "sections": [
                {
                    "id": "8904ec8e-3fb7-468b-95e8-d0118f5902eb",
                    "sectionName": "section 3",
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
                            "field_id": "0001",
                            "is_required": true,
                            "type": "text",
                            "label": "Mi label",
                            "name": "Texto",
                            "placeholder": "Texto corto",
                            "max_length": "120",
                            "label_placeholder": "Escribe aquí el nombre de tu campo",
                            "option_placeholder": "Escribe tu opción",
                            "value": "ivan taimal",
                            "form_field_id": "77f8be48-dec5-4727-9ccc-3bdc6e0a6a55"
                        }
                    ]
                }
            ]
        }
    );

    const resHealth = http.get(urlHealth);
    const resCreateCase = http.post(urlCreateCase,createCasePayload, params);

    //const resUpdateCase = http.post(urlUpdateCase,updateCasePayload, params);

    check(resHealth, {'Health was 200': (r) => r.status === 200});
    check(resHealth, {'Health was Other': (r) => r.status !== 200});
    check(resCreateCase, {'Create Case was 200': (r) => r.status === 200});
    check(resCreateCase, {'Create Case was Other': (r) => r.status !== 200});

    // If the response status is 200, call another service and retrieve the entity ID
    if (resCreateCase.status === 200) {
        // Parse the response body as JSON
        const responseBody = resCreateCase.json();

        // Extract the entity ID from the response body
        const formId = responseBody.forms[0].form_id; // Replace 'id' with the actual key in the response body
        const useCase = `/use-case/${formId}`

        const urlUseCase = `${data.base_url}${useCase}`;
        const urlUpdateCase = `${data.base_url}${updateCase}`;

        console.log("URLUSECASE***********"+urlUseCase);
        // Call another service using the entity ID
        // const anotherResponse = http.get(`https://example.com/api/entity/${entityId}`);
        sleep(1);
        const resUseCase = http.get(urlUseCase,params);
        // Perform additional checks or actions with the 'anotherResponse'
        console.log("RESPONSEBODY*****"+JSON.stringify(resUseCase));
        console.log("*********************************")

        check(resUseCase, {'Get Case was 200': (r) => r.status === 200});
        check(resUseCase, {'Get Case was Other': (r) => r.status !== 200});

    }

    // Record custom metrics
    myTrend.add(resCreateCase.timings.duration);
    myRate.add(resCreateCase.status === 200);

    //check(resUpdateCase, {'status was 200': (r) => r.status === 200});
    //check(resUpdateCase, {'status was Other': (r) => r.status !== 200});
    sleep(1);
}
