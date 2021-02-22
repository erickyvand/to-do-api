import chai from 'chai';
import chaiHttp from 'chai-http';
import { BAD_REQUEST, CONFLICT, CREATED } from 'http-status';
import app from '../../app';
import cleanAllTables from '../fixtures/database.fixture';
import { user } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

describe('/POST signup', () => {
	before(async () => {
		await cleanAllTables();
	});
	it('Should create a user', done => {
		chai
			.request(app)
			.post('/api/auth/signup')
			.send(user)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(CREATED);
				res.body.should.have.property('message');
				res.body.message.should.equal('Created successfully');
				res.body.should.have.property('data');
				res.body.data.should.be.an('object');
				res.body.data.should.have.property('id');
				res.body.data.should.have.property('firstName');
				res.body.data.should.have.property('lastName');
				res.body.data.should.have.property('email');
				res.body.data.should.have.property('createdAt');
				res.body.data.should.have.property('updatedAt');
			});
		done();
	});

	it('Should validate input fields', done => {
		chai
			.request(app)
			.post('/api/auth/signup')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(BAD_REQUEST);
				res.body.should.have.property('message');
			});
		done();
	});

	it('Should check if user exists', done => {
		chai
			.request(app)
			.post('/api/auth/signup')
			.send(user)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(CONFLICT);
				res.body.should.have.property('message');
				res.body.message.should.equal('User with this email already exists');
			});
		done();
	});
});
