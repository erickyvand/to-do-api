import chai from 'chai';
import chaiHttp from 'chai-http';
import { OK, NOT_FOUND, UNAUTHORIZED } from 'http-status';
import app from '../../app';
import { othersTodoId, title, todoId } from '../fixtures/todo.fixture';
import { loggedInToken } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

describe('/GET view todo', () => {
	it('Should view a to do item', done => {
		chai
			.request(app)
			.get(`/api/todo/${todoId}`)
			.set('Authorization', `Bearer ${loggedInToken}`)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(OK);
				res.body.should.have.property('message');
				res.body.message.should.equal('To do item');
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

	it('Should check if a to do item exists', done => {
		chai
			.request(app)
			.get('/api/todo/200')
			.set('Authorization', `Bearer ${loggedInToken}`)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(NOT_FOUND);
				res.body.should.have.property('message');
				res.body.message.should.be.a('string');
				res.body.message.should.equal('To do item does not exists');
			});
		done();
	});

	it("Should not view other's todo item", done => {
		chai
			.request(app)
			.get(`/api/todo/${othersTodoId}`)
			.set('Authorization', `Bearer ${loggedInToken}`)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(UNAUTHORIZED);
				res.body.should.have.property('message');
				res.body.message.should.be.a('string');
				res.body.message.should.equal("Not authorized to view other's todo");
			});
		done();
	});
});

describe('/GET search to do item', () => {
	it('Should search a todo item by title or description', done => {
		chai
			.request(app)
			.get(`/api/search?term=${title}`)
			.set('Authorization', `Bearer ${loggedInToken}`)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(OK);
				res.body.should.have.property('message');
				res.body.message.should.equal('Search results');
				res.body.should.have.property('data');
				res.body.data.should.be.an('object');
				res.body.data.should.have.property('pageMeta');
				res.body.data.pageMeta.should.be.an('object');
				res.body.data.pageMeta.should.have.property('pages');
				res.body.data.pageMeta.should.have.property('currentPage');
				res.body.data.pageMeta.should.have.property('pageSize');
				res.body.data.pageMeta.should.have.property('count');
				res.body.data.should.have.property('rows');
				res.body.data.rows.should.be.an('object');
				res.body.data.rows.should.have.property('count');
				res.body.data.rows.should.have.property('rows');
				res.body.data.rows.rows.should.be.an('array');
			});
		done();
	});
});
