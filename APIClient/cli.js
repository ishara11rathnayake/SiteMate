const { create, read, update, remove } = require('./api-client');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptAction() {
    rl.question('Select an action (create, read, update, delete): ', action => {
        switch (action.toLowerCase()) {
            case 'create':
                rl.question('Enter the data to create (JSON format): ', data => {
                    try {
                        const jsonData = JSON.parse(data);
                        create(jsonData);
                    } catch (error) {
                        console.error('Invalid JSON data:', error.message);
                    }
                    promptAction();
                });
                break;

            case 'read':
                read();
                promptAction();
                break;

            case 'update':
                rl.question('Enter the data to update (JSON format): ', data => {
                    try {
                        const jsonData = JSON.parse(data);
                        update(jsonData);
                    } catch (error) {
                        console.error('Invalid JSON data:', error.message);
                    }
                    promptAction();
                });
                break;

            case 'delete':
                remove();
                promptAction();
                break;

            case 'exit':
                rl.close();
                break;

            default:
                console.log('Invalid action. Please try again.');
                promptAction();
                break;
        }
    });
}

console.log('REST API Client');
promptAction();
