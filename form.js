let form = document.getElementById("form");
let result = document.getElementById("result");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let place = document.getElementById("place").value;
    let father = document.getElementById("father").value;
    let hobby = document.getElementById("hobby").value;

    let gender = document.getElementById("gender").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let skills = document.getElementById("skills").value;
    let subject = document.getElementById("subject").value;

    result.innerHTML = `
        <p><b>Name:</b> ${name}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Place:</b> ${place}</p>
        <p><b>Father Name:</b> ${father}</p>
        <p><b>Hobby:</b> ${hobby}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Skills:</b> ${skills}</p>
        <p><b>Favorite Subject:</b> ${subject}</p>
    `;
});
