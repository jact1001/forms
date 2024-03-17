import http from 'k6/http';
import {check, sleep} from 'k6';
import { createCasePayload } from './payloads/create-case.js';
import { useUpdateCasePayload } from './payloads/update-case-sql.js';

const health = "/health"
const createCase = "/use-case"
const updateCase = "/use-case"
const currentDateTime = new Date().toISOString();
let i=0;

export const data = {
    base_url: "https://dsb471zsol61i.cloudfront.net/api"
    //base_url: "http://localhost:8080/api"

}


export const options = {
    stages: [
        {duration: '1m', target: 15},
        {duration: '3m', target: 15},
        {duration: '1m', target: 0},
    ],
};

export default function () {
    const urlHealth = `${data.base_url}${health}`;
    const urlCreateCase = `${data.base_url}${createCase}`;

    const params = {
        headers: {
            //'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.cnRhaW1hbEBnbWFpbC5jb20.P_cPzXaUw8fuoOGAIrIKKhTiFgbEYzo-WdoJhjqnvRk',
            'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.amFjdDEwMDFAZ21haWwuY29t.Z5rrmon-5N6YbCpnz_B_8WhhJsGBUW1tpR2D0Q-aAd8',
            'Content-Type': 'application/json'
        },
    };

    const formId = '65c4f9606117d5945107d122';
    i++;
    const createRq=createCasePayload(formId,i);
    //const resHealth = http.get(urlHealth);
    const resCreateCase = http.post(urlCreateCase,createRq, params);
    sleep(1);

    //check(resHealth, {'Health was 200': (r) => r.status === 200});
    //check(resHealth, {'Health was Other': (r) => r.status !== 200});
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

       // console.log("PREVIOUSUPDATEBODY*****" + JSON.stringify(useCaseResponse,null,2));

        const updateCasePayload=JSON.stringify(useUpdateCasePayload(caseId,caseName,formId,useCaseResponse));
        const resUpdateCase = http.put(urlUpdateCase,updateCasePayload, params);
        if (resUpdateCase.status !== 200) {
            console.log("UPDATEERRORCASEID***********"+caseId);
          //  console.log("UPDATERESPONSEBODY*****" + JSON.stringify(resUpdateCase,null,2));
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

    sleep(1);
}
