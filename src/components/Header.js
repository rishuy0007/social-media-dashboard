import React, { useState } from "react"

export default function Header(){
    const [darkMode , darkThemeon] = useState(true);


    const toogleTheme = ()=>{
        const body = document.querySelector("body")

        if(darkMode)
        {
            body.classList.add("dark");

        }
        else{
            body.classList.remove("dark");
        }

        darkThemeon(!darkMode);

    }



    return <>


    <header className="max-w-7xl mx-auto flex items-center justify-between">
        <div>

        <div>
            <h1 className="font-bold text-2xl text-slate-800 dark:text-white">Social Media Dashboard</h1>
        </div>
        <p className="text-slate-600 font-bold dark:text-slate-400">
            Total Followers: 23,004
        </p>
        </div>
    
{/* //toggle button lga */}
<div className="toggle">
  <label htmlFor="checkbox" className=" font-bold text-slate-600 cursor-pointer dark:text-slate-400">Dark Mode</label>
  <input type="checkbox" className="checkbox" id="checkbox" checked={!darkMode} onChange = {toogleTheme} />

  <label for="checkbox" className="label">
    <div className="ball"></div>
  </label>

</div>

    </header>
    </>
}
