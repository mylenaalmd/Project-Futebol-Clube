import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import {app} from '../app';

chai.use(chaiHttp);

const {expect} = chai;

describe('Testes Leaderboard', () => {
  it('Verifica a requisição da rota GET /home', async () => {
    const chaiHttpResponse = await chai.request(app).get('/leaderboard/home');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.have.length(16)
  });
  it('Verifica a requisição da rota GET /away', async () => {
    const chaiHttpResponse = await chai.request(app).get('/leaderboard/away');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.have.length(16)
  });
  it('Verifica a requisição da rota all', async () => {
    const chaiHttpResponse = await chai.request(app).get('/leaderboard');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.have.length(16)
  });
})