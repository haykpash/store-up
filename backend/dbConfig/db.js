import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connecting = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`db connacted: ${connecting.connection.host}`.green.dim)
  } catch (error) {
    console.error(`Errore: ${error.message}`.red.dim)
    process.exit(1)
  }
}
export default connectDB
