const copyrightFooter = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

const today = new Date();
copyrightFooter.innerHTML = `<span id="currentYear">${today.getFullYear()}</span>`;
lastModified.innerHTML = `<p id="lastModified">Last modification: ${document.lastModified}</span>`;
