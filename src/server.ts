import app from "./app";
const PORT = 3000;

console.log('Run by ts node command');

app.listen(PORT, () => {
    console.log('Express server listening on port locahost:' + PORT);
})