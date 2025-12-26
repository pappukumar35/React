// eslint-disable-next-line no-undef
const db=await mysql.createConnect({
     host:'localhost3306',
     user:'root',
     password:'Pappu@123',
     database:'fileupload'
})
console.log("Database connected successfulley");

export default db;