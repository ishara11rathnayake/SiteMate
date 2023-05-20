const {readDataFromFile, saveDataToFile} = require('../../utils/utils');

class Issue {
    constructor(title, description, id = null) {
        this.title = title;
        this.description = description;

        if (id) {
            this.id = id;
        }
    }

    async save() {
        const newIssue = {
            id: Math.floor(Math.random() * 100000000) + 1,
            title: this.title,
            description: this.description
        }

        const data = await readDataFromFile('issues.json');
        data['issues'].push(newIssue);

        await saveDataToFile('issues.json', data);

        return newIssue;
    }

    async update(id) {
        const data = await readDataFromFile('issues.json');
        const index = data['issues'].findIndex((item) => item.id === id);
        data['issues'][index] = {
            ...data['issues'][index],
            title: this.title,
            description: this.description,
        };

        await saveDataToFile('issues.json', data);
    }

    static async delete(id) {
        const data = await readDataFromFile('issues.json');
        const filterData = data['issues'].filter((item) => item.id !== id)
        await saveDataToFile('issues.json', {
            issues: filterData
        });
    }

    static async fetchAll() {
        const issueData = await readDataFromFile('issues.json');

        return issueData.issues;
    }

    static async findById(id) {
        const issueData = await readDataFromFile('issues.json');

        return issueData.issues.find(issue => issue.id === id);
    }
}

module.exports = Issue;
