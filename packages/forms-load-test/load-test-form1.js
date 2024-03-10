import http from 'k6/http';
import {check, sleep} from 'k6';


const health = "/health"
const createCase = "/user-forms/use-case"
const useCase = "/use-case/"
const updateCase = "/use-case"
const currentDateTime = new Date().toISOString();



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
    const urlUseCase = `${data.base_url}${useCase}`;
    const urlUpdateCase = `${data.base_url}${updateCase}`;

    const params = {
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.cnRhaW1hbEBnbWFpbC5jb20.P_cPzXaUw8fuoOGAIrIKKhTiFgbEYzo-WdoJhjqnvRk',
            'Content-Type': 'application/json'
        },
    };

    const createCasePayload=JSON.stringify(
        {
            "useCase": {
                "name": "caso - x ("+currentDateTime+")",
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
    //const resUseCase = http.get(urlUseCase+resCreateCase.);

    //const resUpdateCase = http.post(urlUpdateCase,updateCasePayload, params);


    check(resHealth, {'Health was 200': (r) => r.status === 200});
    check(resHealth, {'Health was Other': (r) => r.status !== 200});
    check(resCreateCase, {'Create Case was 200': (r) => r.status === 200});
    check(resCreateCase, {'Create Case was Other': (r) => r.status !== 200});
    //check(resUpdateCase, {'status was 200': (r) => r.status === 200});
    //check(resUpdateCase, {'status was Other': (r) => r.status !== 200});
    sleep(1);
}
