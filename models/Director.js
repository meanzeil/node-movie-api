const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema ({

    name: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur'],
        maxlength: [20,'`{PATH}` alanı (`{VALUE}`)({MAXLENGTH}) karakterden küçük olmalıdır'],
        minlength: [1, '`{PATH}` alanı (`{VALUE}`)({MINLENGTH}) karakterden büyük olmalıdır']
    },
    surname: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur'],
        maxlength: [20,'`{PATH}` alanı (`{VALUE}`)({MAXLENGTH}) karakterden küçük olmalıdır'],
        minlength: [1, '`{PATH}` alanı (`{VALUE}`)({MINLENGTH}) karakterden büyük olmalıdır']
    },
    bio: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur'],
        maxlength: [1000,'`{PATH}` alanı (`{VALUE}`)({MAXLENGTH}) karakterden küçük olmalıdır'],
        minlength: [1, '`{PATH}` alanı (`{VALUE}`)({MINLENGTH}) karakterden büyük olmalıdır']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model('director', DirectorSchema);