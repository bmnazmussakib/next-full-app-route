const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        handleError(error);
        throw new Error("Connection Failed")
    }
}

export default connect