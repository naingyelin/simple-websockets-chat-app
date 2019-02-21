window.app = {};
window.app.aWebSocket = null;

function send_click(event) {
    const data = document.getElementsByClassName('cls-input')[0].value;
    console.dir(data);
    send(data);
}

function close_click(event) {
    window.app.aWebSocket.close();
}

function send(data) {
    const msg = { message: 'sendMessage', data: data };
    window.app.aWebSocket.send(JSON.stringify(msg));
}

function doSomething(info) {

    logToScreen(info || 'DOM LOADED');

    const uri = 'wss://1j9ltvm2ck.execute-api.ap-southeast-2.amazonaws.com/Prod';
    window.app.aWebSocket = new WebSocket(uri);
    window.app.aWebSocket.onopen = (e) => {
        logToScreen('connected');
        send('Hello, I am now connected!');
    };
    window.app.aWebSocket.onerror = (e) => {
        logToScreen(`error has occurred {JSON.stringify(e)}`);
        aWebSocket.close();
    };

    window.app.aWebSocket.onmessage = (e) => {
        logToScreen(e.data);
    };

    window.app.aWebSocket.onclose = (e) => {
        logToScreen('connection closed');
    };
}

function logToScreen(msg) {
    let pNode = document.createElement('p');
    let txtNode = document.createTextNode(msg);
    pNode.appendChild(txtNode);
    document.getElementsByClassName('cls-output')[0].append(pNode);
}

if (document.readyState === "loading") {  // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", () => doSomething(null));
} else {  // `DOMContentLoaded` has already fired
    doSomething('DOM already loaded');
}