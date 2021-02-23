import chai from 'chai';
import chaiHttp from 'chai-http';
import { UNAUTHORIZED, OK } from 'http-status';
import app from '../../app';
import { invalidCredentials, userToLogin } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

describe('/POST login', () => {
	it('Should login a user with valid email and password', done => {
		chai
			.request(app)
			.post('/api/auth/login')
			.send(userToLogin)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(OK);
				res.body.should.have.property('message');
				res.body.message.should.equal('Successfully logged in');
				res.body.should.have.property('data');
				res.body.data.should.be.an('object');
				res.body.data.should.have.property('user');
				res.body.data.user.should.be.an('object');
				res.body.data.user.should.have.property('id');
				res.body.data.user.should.have.property('firstName');
				res.body.data.user.should.have.property('lastName');
				res.body.data.user.should.have.property('email');
				res.body.data.user.should.have.property('createdAt');
				res.body.data.user.should.have.property('updatedAt');
				res.body.data.should.have.property('token');
			});
		done();
	});

	it('Should not login with invalid credentials', done => {
		chai
			.request(app)
			.post('/api/auth/login')
			.send(invalidCredentials)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(UNAUTHORIZED);
				res.body.status.should.be.a('number');
				res.body.should.have.property('message');
				res.body.message.should.be.a('string');
			});
		done();
	});
});
