import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@myexample.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jessy User',
    email: 'jessy@myexample.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Lily User',
    email: 'lily@myexample.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
