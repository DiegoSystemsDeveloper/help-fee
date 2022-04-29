import { useContext } from "react";
import EntidadesContext from "../context/EntidadesProvider";

const useEntidades = () => {
    return useContext(EntidadesContext)
}

export default useEntidades