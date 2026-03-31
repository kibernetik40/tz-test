function baseUrl() {
    const id = document.getElementById("idInstance").value;
    const token = document.getElementById("apiToken").value;
    return `https://api.green-api.com/waInstance${id}/${token}`;
}

async function handle(res) {
    const data = await res.json();
    document.getElementById("response").value =
        JSON.stringify(data, null, 2);
}

async function getSettings() {
    handle(await fetch(`${baseUrl()}/getSettings`));
}

async function getState() {
    handle(await fetch(`${baseUrl()}/getStateInstance`));
}

async function sendMessage() {
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    handle(await fetch(`${baseUrl()}/sendMessage`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            chatId: phone + "@c.us",
            message: message
        })
    }));
}

async function sendFile() {
    const phone = document.getElementById("filePhone").value;
    const url = document.getElementById("fileUrl").value;

    handle(await fetch(`${baseUrl()}/sendFileByUrl`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            chatId: phone + "@c.us",
            urlFile: url,
            fileName: "file"
        })
    }));
}
