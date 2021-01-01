import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@myexample.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    phoneNumber: 11111,
  },
  {
    name: 'Jessy User',
    email: 'jessy@myexample.com',
    password: bcrypt.hashSync('123456', 10),
    phoneNumber: 22222,
  },
  {
    name: 'Lily User',
    email: 'lily@myexample.com',
    password: bcrypt.hashSync('123456', 10),
    phoneNumber: 33333,
  },
]
export default users
