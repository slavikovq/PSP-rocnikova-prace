import Swal from "sweetalert2";


export const alert = (icon, title) => {
    const Alert = Swal.mixin({
        toast: true,
        position: "top-end",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        color: "#fff",
        background: "#191621"
    })

    Alert.fire({
        icon: icon,
        title: title
    })
}

