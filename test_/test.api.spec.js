const request = require('supertest');

// it('Deve retornar as informações quando buscar por uma pessoa existente no banco', async () => {
//     const resposta = await request('https://swapi.py4e.com/api/').get('people/1/');
//     expect(resposta.status).toBe(200)
//     expect(resposta.body.vehicles.length).toBeGreaterThan(0);
//     expect(resposta.body.films).toBeDefined();
// });

// it('Deve retornar mensagem de erro quando buscar por uma pessoa inexixstente no banco', async () => {
//     const resposta = await request('https://swapi.py4e.com/api/').get('people/9999/');
//     expect(resposta.status).toBe(404);
//     expect(resposta.body).toMatchObject({
//         detail: 'Not found'
//     })
// })

it('Deve retornar as informações quando buscar por um planeta existente no banco', async () => {
    const resposta = await request('https://swapi.py4e.com/api/').get('planets/1/');
    expect(resposta.status).toBe(200)
    expect(resposta.body.name).toBe('Tatooine');
    expect(resposta.body.rotation_period.length).toBeGreaterThan(0);
});

it('Deve retornar mensagem de erro quando buscar por um planeta inexixstente no banco', async () => {
    const resposta = await request('https://swapi.py4e.com/api/').get('planets/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({
        detail: 'Not found'
    })
})