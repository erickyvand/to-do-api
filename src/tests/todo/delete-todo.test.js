import chai from 'chai';
import chaiHttp from 'chai-http';
import { OK } from 'http-status';
import app from '../../app';
import { todoId } from '../fixtures/todo.fixture';
import { loggedInToken } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

describe('/DELETE delete to do item', () => {
	it('Should delete a todo item', done => {
		chai
			.request(app)
			.delete(`/api/todo/${todoId}`)
			.set('Authorization', `Bearer ${loggedInToken}`)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(OK);
				res.body.should.have.property('message');
				res.body.message.should.equal('To do item has been deleted');
			});
		done();
	});
});
