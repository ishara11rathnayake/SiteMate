const Issue = require("../models/issue");

exports.issues_save_issues = async (req, res, next) => {
    try {
        const issue = new Issue(req.body.title, req.body.description);

        await issue.save();

        res.status(200).json({
            message: "Issue saved successfully.",
            issue: issue
        });
    } catch (error) {
        handleError(res, error);
    }
};

exports.issues_update_issues = async (req, res, next) => {
    try {
        const issue = new Issue(req.body.title, req.body.description);
        const id = parseInt(req.params.id);

        await issue.update(id);

        res.status(200).json({
            message: "Issue updated successfully.",
            issue: issue
        });
    } catch (error) {
        handleError(res, error);
    }
};

exports.issues_delete_issues = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        await Issue.delete(id);

        res.status(200).json({
            message: "Issue deleted successfully.",
        });
    } catch (error) {
        handleError(res, error);
    }
};

exports.issues_get_all_issues = async (req, res, next) => {
    try {
        const issues = await Issue.fetchAll();
        console.log(issues);

        res.status(200).json({
            message: "All Issues fetched successfully.",
            issues
        });
    } catch (error) {
        handleError(res, error);
    }
};

exports.issues_get_issue = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const issue = await Issue.findById(id);

        res.status(200).json({
            message: "Issue fetched successfully.",
            issue
        });
    } catch (error) {
        handleError(res, error);
    }
};

const handleError = (res, error) => {
    console.log(error);
    res.status(500).json({
        error: error
    });
};
