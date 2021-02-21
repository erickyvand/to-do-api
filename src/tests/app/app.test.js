import chai from 'chai';
import chaiHttp from 'chai-http';
import { NOT_FOUND, OK } from 'http-status';
import app from '../../app';

chai.should();
chai.use(chaiHttp);

describe('App', () => {
	it('Should show welcome message on root route', done => {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(OK);
				res.body.should.have.property('message');
				res.body.message.should.equal('To Do API');
			});
		done();
	});

	it('Should return not found message when a wrong root has been provided', done => {
		chai
			.request(app)
			.get('/app')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(NOT_FOUND);
				res.body.should.have.property('message');
				res.body.message.should.equal(
					'The route you are trying to access does not exists'
				);
			});
		done();
	});
});
