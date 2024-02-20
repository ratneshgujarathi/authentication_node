var indicative = require("indicative");
/*
    string	-string
    number	-integer
    bool	-boolean
    email	-email
    url		-url
    ip		-ip
    date	-date	
*/
var valid = {
    validation: async function (rules, data) {
        try {
            let valid = await indicative.validator.validateAll(data, rules);
            let sanitize_rules = {};
            Object.keys(valid).forEach((item) => {
                sanitize_rules[item] = "strip_tags|strip_links|trim";
            });
            let sanitized = await indicative.sanitizer.sanitize(valid, sanitize_rules);
            return { error: 0, data: sanitized };
        } catch (err) {
            console.log(err);
            return { error: 1, data: err };
        }
    },
};
module.exports = valid;
