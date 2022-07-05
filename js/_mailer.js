const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 ) {
        alert("All fields are mandatory")
        return
    }
    Email.send({
        Host: "smtp.zoho.com",
        Username: "hello@imrifai.my.id",
        Password: "Rifai.2608",
        To: "imrifaiii@gmail.com",
        From: inputs.elements["email"].value,
        Subject: "Contact Us Query By the Customer",
        Body: inputs.elements["message"].value + "<br>" + inputs.elements["name"].value,
    }).then(msg => alert("The email successfully sent"))
})