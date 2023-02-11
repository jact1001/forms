import http from 'k6/http';
import {check, sleep} from 'k6';

export const data = {
    base_url: "http://localhost:5000",
    path: "/api/items"
}

export const options = {
    stages: [
        {duration: '10s', target: 20},
        {duration: '1m10s', target: 10},
        {duration: '5s', target: 0},
    ],
};

export let getRandomText = () => {
    const keywords = [
        "Guitarra",
        "Piano",
        "Ukulele",
        "Maracas",
        "Saxfón",
        "Arroz",
        "Maiz"];

    const random = Math.floor(Math.random() * keywords.length);
    return keywords[random];
}

export default function () {
    const searchKeyWord = getRandomText();
    const url = `${data.base_url}${data.path}?q=${searchKeyWord}`
    const res = http.get(url);
    check(res, {'status was 200': (r) => r.status == 200});
    sleep(1);
}
