var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var BookSchema = new Schema({
    title:  String,
    // reference to Author model by ID, because book has one author.
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Author'
    },
    image:   String,
    releaseDate: String
  });

  var Book = mongoose.model('Book', BookSchema);

  module.exports = Book;
