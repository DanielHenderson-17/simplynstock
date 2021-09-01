import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const Header = (props) => {
    const [ totalCost, setTotalCost] = useState (0);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/stock/dashboard")
            .then((res) => {
                setTotalCost(res.data.totalCost)
            })
            .catch((err) => console.log(err));
    }, []);
    
    return(
        <>
        <header className="item2">
        <h1><img src="https://lh3.googleusercontent.com/LS4kp5U53iB4GBwwytgofuCwCe5iaUjm7j5sm-h7F6VcOqMJ8IjLON1z13VYcYSeOdhwJdAmL_dBGzkg5sh_an0K4nKEopGp7MPlRy4RNK2wWxHYJnUOHg2hn8-TgkDluCrh7DicbNzUCB4O4kS4U-oxY8xz8M6NhpHNnZXTAifoAFkKSgQwnZBP4Um1T5yKkW-qt1LlKgDfDtIrXnSwf0Th0_jHyMEJsOjG8KjCsDRZUTzDXBSYL-T2whVCc2frdrtwL2km9ZqvGtkAD4FVjJHNGGCDHmm1VCb5R_GHVvIsyBhl3TAQ5dXCCEf87bSF4ma-KUuL7UPGOb-wiWRP04i_mvs04xwj5hi3t5pZZsAsMUf_ob2CXn94FCCD2ail0wqYN7ykGpwAVC4YYF-2dP0bwS4jq00_lWfi9o32gucYOBcQu1HqXtOF2CaPCCG2at7TmHYEPno-Xockb386cGLrz2ICNxpvOvYfCCeNfcuOIXowy07nqtNDTX_GkQjnuhwL22GC8HJKXcTF1c440mhDOMVmQ2PSoX_mcGJZ-2wy_-F2SUEdKLVMI8DLVSKF0CQDqpXfn2UE8Fwg4C48vaM7bj5LY-9_HinCGHQNo6DWJ23fNExZKx6T3N5M7fwkBu7a_FeYZRd-FV1zWofCrfp7O64evViZHSoO-Gv5-U7G4SwSA0EjFrIum-rf=w598-h237-no?authuser=0" alt="Simply N Stock" /></h1>
        </header>
        <header className="item3">
        <h2>Inventory Summary</h2>
        <div className="invSum">
        <h3>Total Inventory Cost</h3>
        <p>${totalCost.toLocaleString(undefined, {minimumFractionDigits:2})}</p>
        </div>
        </header>
        </>
    )
}

export default Header;