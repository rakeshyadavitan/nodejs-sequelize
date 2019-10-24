import model from '../models';
const {User} = model;
console.log('I am in user control');
class Users {
	static signUp(req, res){
		const {name, username, password, email} = req.body
		return User.create({
			name, username, email, password
		}).then(userData => res.status(201).send({
			success: true,
			message: 'User successfully created',
			userData
		}))
		.catch(function(error){
			console.log(error, req.body);
		})
	}
}
console.log('I am going out of control');
export default Users;