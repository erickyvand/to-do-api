import chai from 'chai';
import chaiHttp from 'chai-http';
import { OK } from 'http-status';
import app from '../../app';
import { todoId } from '../fixtures/todo.fixture';
import { loggedInToken } from '../fixtures/user.fixture';

chai.should();
chai.use(chaiHttp);

describe('/PATCH update to do item', () => {
	it('Should update a todo item', done => {
		chai
			.request(app)
			.patch(`/api/todo/${todoId}`)
			.set('Authorization', `Bearer ${loggedInToken}`)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status');
				res.body.status.should.equal(OK);
				res.body.should.have.property('message');
				res.body.message.should.equal('To do item updated');
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
});
