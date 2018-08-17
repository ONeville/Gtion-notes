const apiModel = { name: '', host: '', baseUrl: '' };

function checkConnection(params) {
    console.log('Connexion success...', params);    
}


function validateConnection(params) {
    console.log('Validate success...', params);    
}


function otherConnection(params) {
    console.log('Other success...', params);    
}

function getById(id) {
    return new Promise((re, e) =>{
        if (id >= 5) {
            setTimeout(() => {
                re({ id: id, message: 'Hello world'});
            }, 2000);
        } else {
            e(new Error('Error: Your Id is too small: ' + id));
        }
    });
}

function displayMessage(message) {
    return new Promise((re) =>{
        setTimeout(() => {
            re(message);
        }, 2000);
    });
}

exports.getById = getById;
exports.displayMessage = displayMessage;
exports.ApiModel = apiModel;
exports.check = checkConnection;
exports.validate = validateConnection;
exports.other = otherConnection;