import mongoose from 'mongoose';

// Criando um Schema para os Usuários utilizando o mongoose.
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

// Criando um Model para os Usuários utilizando o mongoose.
const User = mongoose.model('User', userSchema);
export default User;