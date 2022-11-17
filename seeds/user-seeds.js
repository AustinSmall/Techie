const { User } = require('../models');

const userData = [{
        username: 'Austin',
        password: 'password'

    },
    {
        username: 'Micheal',
        password: 'Jordan'
    },
    {
        username: 'Kendrick',
        password: 'Lamar'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;