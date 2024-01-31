import { useRouter } from "next/router";
import { useEffect } from "react";


const Product = () =>{
    const router = useRouter();

    useEffect(() => {
      router.push('/');
    }, []);
}

export default Product