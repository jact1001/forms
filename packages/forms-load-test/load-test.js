import http from 'k6/http';
import {check, sleep} from 'k6';


const health = "/health"
const userForms = "/user-forms"
export const data = {
    base_url: "https://dsb471zsol61i.cloudfront.net/api"
}

export const options = {
    stages: [
        {duration: '10s', target: 20},
        {duration: '1m10s', target: 10},
        {duration: '5s', target: 0},
    ],
};

export default function () {
    const urlHealth = `${data.base_url}${health}`;
    const resHealth = http.get(urlHealth);
    const urlForms = `${data.base_url}${userForms}`;

    const params = {
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.cnRhaW1hbEBnbWFpbC5jb20.P_cPzXaUw8fuoOGAIrIKKhTiFgbEYzo-WdoJhjqnvRk',
        },
    };
    const resForms = http.get(urlForms, params);

    check(resHealth, {'status was 200': (r) => r.status == 200});
    check(resForms, {'status was 200': (r) => r.status == 200});
    sleep(1);
}
