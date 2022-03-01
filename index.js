const url = 'https://www.codewars.com/api/v1/users/MariyaDemy';
const codeBlock = document.querySelector('.code__block')

const getDataFromCodewars = () => {

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let katas = data.codeChallenges;
            let rank = data.ranks;
            return codeBlock.innerHTML = `
            <p class="code__par">Total Completed Kata at Codewars (JS): ${katas.totalCompleted}</p>
            <p class="code__par">Rank : ${rank.overall.name}</p>
            `
        })
}

getDataFromCodewars();