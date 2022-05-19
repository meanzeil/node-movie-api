const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema ({

   director_id: Schema.Types.ObjectId,
   title: {
       type: String,
       required: [true, '`{PATH}` alanı zorunludur'],
       maxlength: [15,'`{PATH}` alanı (`{VALUE}`)({MAXLENGTH}) karakterden küçük olmalıdır'],
       minlength: [3, '`{PATH}` alanı (`{VALUE}`)({MINLENGTH}) karakterden büyük olmalıdır']
   },
    category: {
      type: String,
      maxlength: [30, '`{PATH}` alanı (`{VALUE}`)({MAXLENGTH}) karakterden küçük olmalıdır'],
      minlength: [1, '`{PATH}` alanı (`{VALUE}`)({MAXLENGTH}) karakterden büyük olmalıdır'],
    },
    country: {
        type: String,
        maxlength: [30, '`{PATH}` alanı (`{VALUE}`)({MAXLENGTH}) karakterden küçük olmalıdır'],
        minlength: [1,  '`{PATH}` alanı (`{VALUE}`)({MAXLENGTH}) karakterden büyük olmalıdır'],
    },
    year: {
        type: Number,
        max: [2022,  '`{PATH}` alanı (`{VALUE}`) 2022-1900 arasında olmalıdır'],
        min: [1900,  '`{PATH}` alanı (`{VALUE}`) 2022-1900 arasında olmalıdır'],
    },
    imdb_score: {
        type: Number,
        max: [10,   '`{PATH}` alanı (`{VALUE}`) 0-10 arasında olmalıdır'],
        min: [0,    '`{PATH}` alanı (`{VALUE}`) 0-10 arasında olmalıdır'],
    },
    createdAt: {
       type: Date,
       default: Date.now
    }
});

module.exports = mongoose.model('movie', MovieSchema);