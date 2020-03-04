/**
 * server.js
 */
const express = require('express')
const app = express()
const initRoutes = require('./routes/web')
// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}))
// Khởi tạo các routes cho ứng dụng
initRoutes(app)
// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
const port = 3000
app.listen(port, () => {
  console.log(`Hello baotran.com, I'm running at localhost:${port}/`)
})