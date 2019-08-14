// Init github
const github = new Github();

// Init UI
const ui = new UI();

// search Input
const searchUser = document.getElementById("searchUser");

// Serach Input event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger');
                }else {
                    // Show Profile
                    ui.showProfile( data.profile );
                }
            })
    }else {
        // Clear Profile
        ui.clearProfile();
    }
});