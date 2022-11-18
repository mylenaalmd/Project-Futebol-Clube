import * as chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes Matches', ()=>{
  it('Verifica a rota GET com sucesso', async () => {
    const chaiHttpResponse = await chai.request(app).get('/matches');
  
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.have.length(48);
  })
  it('Verifica a rota GET com as partidas em progresso', async () =>{
    const chaiHttpResponse = await chai.request(app).get('/matches?inProgress=true');
  
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.have.length(8)
  })
  it('Verifica a rota GET das partidas finalizadas', async () => {
    const chaiHttpResponse = await chai.request(app).get('/matches?inProgress=false');

    expect(chaiHttpResponse.status).to.be.equal(200)
    expect(chaiHttpResponse.body).to.have.length(40);
  });
  it('Verifica se há atualização na partida finalizada pela rota GET', async ()=> {
    const chaiHttpResponse = await chai.request(app).get('/matches?inProgress=false');

    expect(chaiHttpResponse.status).to.be.equal(200)
    expect(chaiHttpResponse.body).to.have.length(40);
  })
  it('Verifica se a rota POST adiciona partida em progresso', async ()=> {
    const chaiHttpResponse = await chai.request(app).get('/matches/41').send({
      homeTeamGoals: 2,
      awayTeamGoals: 2,
    });

    expect(chaiHttpResponse.status).to.be.equal(200);
  });
});
