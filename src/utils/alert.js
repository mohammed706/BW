import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const successAlert = () => {
  MySwal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been completed",
    showConfirmButton: false,
    timer: 1500
  });
};
export const errorAlert = (message) => {
  MySwal.fire({
    icon: "error",
    title: "Oops...",
    text: message || "Something went wrong!"
  });
};
