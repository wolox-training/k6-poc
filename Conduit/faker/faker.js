import faker from 'https://cdn.jsdelivr.net/gh/Marak/faker.js@master/examples/browser/js/faker.js';

export const generateUser = () => ({
    user:{    
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
});
    

