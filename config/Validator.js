const yup = require("yup");

function validate(data) {
    const userSchema = yup.object().shape({
        username: yup.string().required("username must be filled").min(4).max(25),
        email: yup.string().required("email is required").min(5).max(30),
        password: yup.string().required("passwoord required").min(10).max(20),
    });
    return userSchema.validate(data);
}
module.exports = { validate };