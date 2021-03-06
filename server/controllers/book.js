import model from '../models';

const {Book} = model;

console.log('Inside book control');
class Books{

	static create(req, res){
		const {title, author, quantity, description} = req.body
		console.log('Inside books create method');
		console.log(req.params);
		const {userId} = req.params
		return Book.create({
			title, author, description, quantity, userId
		}).then(book => res.status(201).send({
			message: `Your book with the title ${title} has been created successfully.`,
			book
		}))
	}

	static list(req, res){
		return Book.findAll().then(books => res.status(200).send(books));
	}

	static modify(req, res){
		const {title, author, description, quantity} = req.body
		console.log(req.params);
		return Book.findByPk(req.params.bookId).then((book) => {
			console.log(book);
			book.update({
				title: title || book.title,
				author: author || book.author,
				description: description || book.description,
				quantity: quantity || book.quantity
			}).then((updateBook) => {
				res.status(200).send({
					message: 'Book upated successfully',
					data: {
						title: title || updateBook.title,
						author: author || updateBook.author,
						description: description || updateBook.description,
						quantity: quantity ||updateBook.quantity
					}
				})
			}).catch(error => res.status(400).send(error));
		}).catch(error => res.status(400).send(error));
	}

	static delete(req, res){
		return Book.findByPk(req.params.bookId).then(book => {
			if (!book){
				return res.status(400).send({
					message: 'Book not found'
				});
			}
			return book.destroy().then(() => res.status(200).send({
				message: "Book successfully deleted"
			})).catch(error=> res.status(400).send(error));
		}).catch(error=> res.status(400).send(error));
	}
	
}



export default Books;