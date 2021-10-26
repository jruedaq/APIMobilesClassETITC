import mongoose from 'mongoose';

const MONGO_URL = 'mongodb+srv://etitc:MGdB2gV4mMumavWf@cluster0.ia6df.mongodb.net/etiiapp?retryWrites=true&w=majority';

mongoose.set('useFindAndModify', false);
mongoose.connect(MONGO_URL || process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
