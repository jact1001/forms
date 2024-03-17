import http from 'k6/http';
import {check, sleep} from 'k6';
import { useUpdateCasePayload } from './payloads/update-case.js';
import {createCasePayload} from "./payloads/create-case.js";

const health = "/health"
const createCase = "/use-case"
const updateCase = "/use-case"
const currentDateTime = new Date().toISOString();

export const options = {
    stages: [
        {duration: '10s', target: 10},
        //{duration: '1m10s', target: 10},
        //{duration: '5s', target: 0},
    ],
};
export const data = {
    base_url: "https://dsb471zsol61i.cloudfront.net/api"
    //base_url: "http://localhost:8080/api"

}

export default function () {
    const urlHealth = `${data.base_url}${health}`;
    const urlCreateCase = `${data.base_url}${createCase}`;

    const params = {
        headers: {
            //'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.cnRhaW1hbEBnbWFpbC5jb20.P_cPzXaUw8fuoOGAIrIKKhTiFgbEYzo-WdoJhjqnvRk',
            'x-access-token':'eyJhbGciOiJIUzI1NiJ9.aHRhaW1hbEBnbWFpbC5jb20.6COG6IiwHvgp1WN70vQ9FdpVEXEtpwu6Jjxsj7QBSmU',
            'Content-Type': 'application/json'
        },
    };

    const formId = '65c4f9606117d5945107d1ff';
    const resHealth = http.get(urlHealth);
    const createRq=createCasePayload(formId);
    const resCreateCase = http.post(urlCreateCase, createRq, params);

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

        const updateCasePayload=JSON.stringify(useUpdateCasePayload(caseId,caseName, formId));
        const resUpdateCase = http.put(urlUpdateCase,updateCasePayload, params);
        if (resUpdateCase.status !== 200) {
            console.log("UPDATEERRORCASEID***********"+caseId);
            console.log("UPDATERESPONSEBODY*****" + JSON.stringify(resUpdateCase,null,2));
            console.log("   ");
            console.log("   ");
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
        console.log("*********************************");
        console.log("  ");
        console.log("CREATE RQ*****" + JSON.stringify(createRq,null,2));
        console.log("  ");
        console.log("CREATERESPONSEBODY*****" + JSON.stringify(resCreateCase,null,2));
        console.log("  ");
        console.log("*********************************");

    }

    sleep(1);
}
