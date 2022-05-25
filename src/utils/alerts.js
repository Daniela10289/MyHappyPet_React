import Swal from 'sweetalert2';
import Noty from 'noty';
import "@styles/alerts.scss";

export const alertNoty = (type, text) => {
  new Noty({
    type: type,
    layout: 'topRight',
    text: text,
    theme: 'metroui',
    timeout: 3000
  }).show();
}

export const DialogWindow = (title, text, icon, showCancelButton) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: showCancelButton,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si'
  })
}

