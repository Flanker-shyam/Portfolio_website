
const fetch = require('node-fetch');
const constants = require('constants');
const { generateOptions } = require('./utils');

const user = 'Flanker-shyam'
module.exports.fetchData = async function getUserRepoName(url)
{
    let arr=[];
    const options = generateOptions('/users/' + user + '/repos');
    let response = await fetch(url, options);
    let result = await response.json();
    result.forEach((data)=>{
        if(data.stargazers_count>=1)
        {
            arr.push(data.name);
        }
    })
    var ans = await getRepoData(arr);
    return ans;
}


async function getRepoData(arr1)
{
    var fordata=[];
    for(name1 of arr1){
        const options = generateOptions('/repos/' + user + '/' + name1);
        let dataHere={};
        let res = await fetch('https://api.github.com/repos/Flanker-shyam/'+name1, options);
        let out = await res.json();
        dataHere.name = out.name;
        dataHere.description = out.description;
        dataHere.stargazers_count = out.stargazers_count;
        dataHere.topics = out.topics;
        dataHere.forks = out.forks;
        fordata.push(dataHere);
    }
    return fordata;
}
