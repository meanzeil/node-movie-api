const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur'],
        maxlength: [20,'`{PATH}` alanı (`{VALUE}`)({MAXLENGTH}) karakterden küçük olmalıdır'],
        minlength: [1, '`{PATH}` alanı (`{VALUE}`)({MINLENGTH}) karakterden büyük olmalıdır'],
        unique: true
    },
    password: {
        type: String,
        minlength: [5, '`{PATH}` alanı (`{VALUE}`)({MINLENGTH}) karakterden büyük olmalıdır'],
    }
});
module.exports = mongoose.model('user', UserSchema);