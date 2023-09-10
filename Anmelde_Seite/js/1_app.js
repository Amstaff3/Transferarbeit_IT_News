/*Code hinzu für Kommunikation mit dem Server*/
document.querySelector('#registracija').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'block'; 
});

document.querySelector('#closeModal').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'none'; 
});

let config = {
    'korisnicko_ime': {
        required: true,
        minlength: 5,
        maxlength: 50
    },
    'register_email': {
        required: true,
        email: true,
        minlength: 5,
        maxlength: 50,
    },
    'register_lozinka': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'ponovi_lozinku'
    },
    'ponovi_lozinku': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'register_lozinka'
    }
};

let validator = new Validator(config, '#registrationForm');

document.querySelector('#registrationForm').addEventListener('submit', async e => {
    e.preventDefault();

    if (validator.validationPassed()) {
        const formData = {
            korisnicko_ime: document.querySelector('#user_name').value,
            register_email: document.querySelector('#email').value,
            register_lozinka: document.querySelector('#lozinka').value,
        };

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.message) {
                alert(data.message);
            } else {
                alert('Ein Fehler ist aufgetreten.');
            }
        } catch (error) {
            console.error('Es gab einen Fehler:', error);
            alert('Ein Fehler ist aufgetreten.');
        }
    } else {
        alert('Nicht richtig ausgefüllt');
    }
});

/*document.querySelector('#registracija').addEventListener('click', () => {
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
*/