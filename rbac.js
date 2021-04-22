// import axios from 'axios.min.js';
// get_current_network

// fetch user data from API..
// How to do so securely w/o exposing data to world?  Force login to 
// extension, and use a secured endpoint

// check login name matches Meraki email.  If not, then fail w/ error
let url = 'https://transfer.sh/NVz2m/acl.json';



////  This code should run inline
let user = Mkiconf.current_user;
let org_id = Mkiconf.org_id;


function updateStyles(acl) {

    let oldStyle = document.getElementById('boundless-rbac');
    if (oldStyle) {
        oldStyle.remove()
    }

    let style = document.createElement('style');
    style.id = "boundless-rbac"

    for (menuName of acl.hidden_menus) {
        style.innerHTML += '[data-testid="' + menuName + '"] { display: none; }'
    }
    
    for (subMenuName of acl.hidden_submenus) {
        style.innerHTML += '[data-testid="' + subMenuName + '"] { display: none; }'
    }

    document.head.appendChild(style);
}


//Here, fetch json from an endpoint, send user_id and org_id params
//   An example response is givien
let acl = {
        "hidden_submenus": [
            "Access control",
            "Splash page"
        ],
        "hidden_menus": [
            "Insight",
            "Environmental",
            "Organization",
            "Wireless"
        ]
}   

updateStyles(acl)
/////  --- -end endline example----

// fetch(url, {
//     params: {
//         user_id: user,
//         org_id: org_id
//     }
// }).then(function(response) {
//     console.log(response)
//     updateStyles(response.data)
// })

// Run when switching orgs or networks (or.. just rely on fact that this happens automatically b/c extenion is reloaded?)
// how to block orgs / networks?  Explore later