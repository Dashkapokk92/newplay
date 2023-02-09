
const userSchema = new Schema({
  email: String,
  username: String,
  password: String

})
 
const Users = mongoose.model('user', userSchema)
module.exports = Users