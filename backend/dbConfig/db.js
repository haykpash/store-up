import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`db connacted: ${conn.connection.host}`.green.dim)
  } catch (error) {
    console.error(`Errore: ${error.message}`.red.dim)
    process.exit(1)
  }
}
export default connectDB
