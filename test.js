var teams = [];

var users = [
    { nom: 'Kientega', prenom: 'Nourdine', id: 1 },
    { nom: 'Kientega', prenom: 'Nourdine', id: 2 },
    { nom: 'Kientega', prenom: 'Nourdine', id: 3 },
    { nom: 'Kientega', prenom: 'Nourdine', id: 4 },
    { nom: 'Kientega', prenom: 'Nourdine', id: 5 },
    { nom: 'Kientega', prenom: 'Nourdine', id: 6 },
    { nom: 'Kientega', prenom: 'Nourdine', id: 7 },
    { nom: 'Kientega', prenom: 'Nourdine', id: 8 },
    { nom: 'Kientega', prenom: 'Nourdine', id: 9 },
    { nom: 'Kientega', prenom: 'Nourdine', id: 10 },
    { nom: 'Kientega', prenom: 'Nourdine', id: 11 },
    { nom: 'Kientega', prenom: 'Nourdine', id: 12 },
]

const chunkSize = 5;
for (let i = 0; i < users.length; i += chunkSize) {
    const chunk = users.slice(i, i + chunkSize);
    // do whatever
    teams.push(chunk);
}

console.log(teams);