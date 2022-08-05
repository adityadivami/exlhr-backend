import mongoose from 'mongoose';

export default mongoose.connect(
    "mongodb://localhost:27017/global", {
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)