import axios from 'axios';

const apiKey = 'af84320bae374b62baf6be5f18ed891a';

const getFetch = () => {
    const result = [];
    return async function request (path, pathTwo = null) {
        const req = await axios.get(path)
        .then(({data:{articles}})=>{ result.push(articles);})
        .catch(err=>err);
        if(req) return req;
        pathTwo && request(pathTwo);
        return result;
    }
}

const pathOne = `https://newsapi.org/v2/top-headlines?counry=us&apiKey=${apiKey}`;
const pathTwo = `https://newsapi.org/v2/top-headlines?country=ua&apiKey=${apiKey}`;

const test = getFetch();

console.log(test(pathOne,pathTwo));
