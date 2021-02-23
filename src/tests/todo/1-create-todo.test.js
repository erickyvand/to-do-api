import chai from 'chai';
import chaiHttp from 'chai-http';
import { CREATED, UNAUTHORIZED, FORBIDDEN } from 'http-status';
import app from '../../app';
import { todoItem } from '../fixtures/todo.fixture';
import { expiredToken, loggedInToken } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

describe('/POST todo', () => {
	it('Should create a todo item', done => {
		chai
			.request(app)
			.post('/api/todo')
			.set('Authorization', `Bearer ${loggedInToken}`)
			.send(todoItem)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(CREATED);
				res.body.should.have.property('message');
				res.body.message.should.equal('To do item created');
				res.body.should.have.property('data');
				res.body.data.should.be.an('object');
				res.body.data.should.have.property('id');
				res.body.data.should.have.property('userId');
				res.body.data.should.have.property('title');
				res.body.data.should.have.property('description');
				res.body.data.should.have.property('priority');
				res.body.data.should.have.property('createdAt');
				res.body.data.should.have.property('updatedAt');
			});
		done();
	});

	it('Should protect the route', done => {
		chai
			.request(app)
			.post('/api/todo')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(FORBIDDEN);
				res.body.should.have.property('message');
				res.body.message.should.equal(
					'You can not proceed without setting authorization token'
				);
			});
		done();
	});

	it('Should check if a token is valid', done => {
		chai
			.request(app)
			.post('/api/todo')
			.set('Authorization', 'Bearer')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(UNAUTHORIZED);
				res.body.should.have.property('message');
				res.body.message.should.equal('Unauthorized, invalid token');
			});
		done();
	});

	it('Should check if a token has expired', done => {
		chai
			.request(app)
			.post('/api/todo')
			.set('Authorization', expiredToken)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(UNAUTHORIZED);
				res.body.should.have.property('message');
				res.body.message.should.equal(
					'Unauthorized, Token has expired signin again to get new token'
				);
			});
		done();
	});
});
