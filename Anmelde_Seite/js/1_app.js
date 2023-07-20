document.querySelector('#registracija').addEventListener('click', () => {
    document.querySelector ('.custom-modal').style.display = 'block'; 
});

document.querySelector('#closeModal').addEventListener('click',() => {
    document.querySelector ('.custom-modal').style.display = 'none'; 
});


let config = {
    'korisnicko_ime': {
        required: true,
        minlength: 5,
        maxlength:50
    },

    'register_email': {
        required: true,
        email: true,
        minlength: 5,
        maxlength:50,
    },

    'register_lozinka': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching:'ponovi_lozinku'
    },

    'ponovi_lozinku': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching:'register_lozinka'
    }
};

let validator = new Validator(config, '#registrationForm');
   
document.querySelector('#registrationForm').addEventListener('submit', e => {
    e.preventDefault();

    if(validator.validationPassed()) {
        alert('Alles OK');
    } else {
        alert('Nicht richtig ausgefüllt');
    }
});
