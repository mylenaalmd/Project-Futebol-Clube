import * as chai from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes Login', ()=>{
  it('Verifica se é possivel fazer login com os dados corretos', async () => {
    const chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'secret_admin',
    });
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.have.property('token')
  })
  it('Verifica se é possivel fazer login com os dados incorretos', async () =>{
    const chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'secret_adminastror',
    });
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).not.to.have.property('token')
  });
  it('Verifica se é possivel fazer o login sem informar email', async () => {
    const chaiHttpResponse = await chai.request(app).post('/login').send({
      email: '',
      password: 'secret_adminastror',
    });
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).not.to.have.property('token')
  })
  it('Verifica se é possivel fazer o login sem informar a senha', async () => {
    const chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: '',
    });
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).not.to.have.property('token')
  })
});
