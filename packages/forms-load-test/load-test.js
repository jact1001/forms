import http from 'k6/http';
import {check, sleep} from 'k6';

export const data = {
    base_url: "http://ac05030b079cb406e8de00450fe0153a-1143428750.us-east-2.elb.amazonaws.com/",
    path: ""
}

export const options = {
    stages: [
        {duration: '10s', target: 20},
        {duration: '1m10s', target: 10},
        {duration: '5s', target: 0},
    ],
};

export default function () {
    const url = `${data.base_url}${data.path}`
    const res = http.get(url);
    check(res, {'status was 200': (r) => r.status == 200});
    sleep(1);
}
