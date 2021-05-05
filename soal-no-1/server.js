const express = require('express')

const router = require('./src/routes')

const app = express();
const PORT = process.env.PORT || 5000


app.use('/api/v1', router)
app.use("/uploads", express.static("uploads"));
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))