const userNames = document.querySelectorAll('.userName');
userNames.forEach(userName => {
    const nameLength = userName.innerText.length;
    if (nameLength <= 4) {
        userName.classList.add('small');
    } else if (nameLength > 4 && nameLength <= 7) {
        userName.classList.add('medium');
    } else {
        userName.classList.add('large');
    }
});