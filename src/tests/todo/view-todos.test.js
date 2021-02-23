import chai from 'chai';
import chaiHttp from 'chai-http';
import { OK } from 'http-status';
import app from '../../app';
import { loggedInToken } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

describe('/GET view many to do items', () => {
	it('Should view many to do items with pagination', done => {
		chai
			.request(app)
			.get('/api/todo?page=1&limit=1')
			.set('Authorization', `Bearer ${loggedInToken}`)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(OK);
				res.body.should.have.property('message');
				res.body.message.should.equal('My To do items');
				res.body.should.have.property('data');
				res.body.data.should.be.an('object');
				res.body.data.should.have.property('pageMeta');
				res.body.data.pageMeta.should.be.an('object');
				res.body.data.pageMeta.should.have.property('pages');
				res.body.data.pageMeta.should.have.property('currentPage');
				res.body.data.pageMeta.should.have.property('pageSize');
				res.body.data.pageMeta.should.have.property('count');
				res.body.data.should.have.property('rows');
				res.body.data.rows.should.be.an('array');
			});
		done();
	});

	it('Should view many to do items', done => {
		chai
			.request(app)
			.get('/api/todo')
			.set('Authorization', `Bearer ${loggedInToken}`)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(OK);
				res.body.should.have.property('message');
				res.body.message.should.equal('My To do items');
				res.body.should.have.property('data');
				res.body.data.should.be.an('object');
				res.body.data.should.have.property('pageMeta');
				res.body.data.pageMeta.should.be.an('object');
				res.body.data.pageMeta.should.have.property('pages');
				res.body.data.pageMeta.should.have.property('currentPage');
				res.body.data.pageMeta.should.have.property('pageSize');
				res.body.data.pageMeta.should.have.property('count');
				res.body.data.should.have.property('rows');
				res.body.data.rows.should.be.an('array');
			});
		done();
	});
});
