// user { name, email, password }
const courses = [
    { id: 1, name: 'Course 1005' },
    { id: 2, name: 'Course 2000' },
];

function register (user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 2000);
    });
}

function login (userName, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ userName: userName });
        }, 2000);
    });
}``