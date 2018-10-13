import Swal from 'sweetalert2';
import './swal.css';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const SweetAlert = (content, type) => (
  MySwal.fire({
    title: content,
    type,
  })
);

export default SweetAlert;
