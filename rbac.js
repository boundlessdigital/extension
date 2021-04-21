// import axios from 'axios.min.js';
// get_current_network

// fetch user data from API..
// How to do so securely w/o exposing data to world?  Force login to 
// extension, and use a secured endpoint

// check login name matches Meraki email.  If not, then fail w/ error
let user = Mkiconf.current_user;
let current_org_id = Mkiconf.org_id;
let url = 'https://transfer.sh/NVz2m/acl.json';
fetch(url, {
    params: {
        user_id: user,
        org_id: org_id
    }
}).then(function(response) {
    updateStyles(response.data)
})

function updateStyles(acl) {

    document.getElementById('boundless-rbac').remove()

    let style = document.createElement('style');
    style.id = "boundless-rbac"

    for (menuName of acl.hidden_menus) {
        style.innerHTML += '[data-testid="' + menuName + '"] { display: none; }'
    }
    
    for (subMenuName of acl.hidden_submenus) {
        style.innerHTML = '[data-testid="' + subMenuName + '"] { display: none; }'
    }

    document.head.appendChild(style);
}


// Run when switching orgs or networks (or.. just rely on fact that this happens automatically b/c extenion is reloaded?)
// how to block orgs / networks?  Explore later