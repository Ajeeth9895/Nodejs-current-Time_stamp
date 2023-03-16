
const http = require('http') //to use the http module
const fs = require('fs')

//creating http server to send request and receive response
const server = http.createServer((req, res) => {

    let date = new Date();//get current date and time
    let current_date = date.getDate()
    let current_month = date.getMonth()
    let current_year = date.getFullYear()
    let current_hour = date.getHours()
    let current_minute = date.getMinutes()
    let current_seconds = date.getSeconds()
    let time_zone = date.getTimezoneOffset()

    let time = `${current_date} ${current_month} ${current_year}   ${current_hour}-${current_minute}-${current_seconds} `
    
    //creating new file to write current date and time
    fs.writeFileSync(`${time}.txt`, `${date}`, 'utf-8')

    //read the file content
    let data = fs.readFileSync(`${time}.txt`, 'utf-8')
    res.writeHead(200, { 'Content-Type': 'text/html' })//to send response header to the request
    res.end(data)
})

//crate a listener on the specified port
server.listen(8000, () => console.log("server is listening 8000"))

