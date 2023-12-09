var express = require('express');
var app = express();
const storage = require('node-persist');
const cors = require('cors');

storage.init();
app.use(express.json());
app.use(cors());

app.get('/list', async (req, res) => {
    const list = await storage.values();
    console.log(list);
    res.send(list);
});

app.post("/task", async (req, res) => {
    const { task } = req.body;
    await storage.setItem(task, { task });
    res.send("Added successfully");
});

const clear = async () => {
    await storage.init();
    try {
        await storage.clear()
        console.log('Storage cleared successfully.');
    } catch (error) {
        console.error(error);
    }
}

app.listen(5000, async () => {

    await clear()
    console.log("Server started at port 5000.")
});