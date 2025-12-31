import Swal from 'sweetalert2';

const showAlert = (title, text, icon = 'info') => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        toast: true,
        background: '#171717',
        color: '#FFFFFF',
    });
}

const Alert = {
    showAlert,
};

export default Alert;

