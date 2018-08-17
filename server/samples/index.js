const { ApiModel, check, displayMessage, getById } = require('./more-expo');

console.log('API Setting: ', ApiModel);

console.log('Check Method: ', check('It works'));



// getById(10)
// .then(t => console.log(displayMessage(t.message)))
// .catch(e => console.log(e.message));

async function ReadyAsync() {
    try {
        const msg = await getById(12);
        const text = await displayMessage(msg.message);
        console.log('This is from Asyn/awit: ', text);
    } catch (error) {
        console.log(error.message);
           }
}

ReadyAsync();