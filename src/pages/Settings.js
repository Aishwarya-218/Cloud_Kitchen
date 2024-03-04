import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";

export default function Settings()
{
    const [settings,setSettings]=useState(
    {
    " --background-color":"#fff",
    "--background-light":"#fff",
    "--shawdow-color":"rgba(0,0,0,0.2)",
    "--primary-color":"rgba(255,0,86)",
    "--text-color":"#0A0A0A",
    "--font-size":"16px",
    "--text-light":"#575757",
    })

    useEffect(()=>{
       
        const root=document.documentElement
        for(let key in settings)
        {
            root.style.setProperty(key,settings[key])
        }
    },[settings])

       
    const [theme,setTheme] = useState("light")
        const themes=[
            {
                "--background-color":"#fff",
               "--background-color":"#fff",
                "--shadow-color":"rgba(0,0,0,0.2)",
                "--text-color":"#0A0A0A",
                "--text-color":"575757"
            },
            {
                "--background-color":"rgb(29,29,29)",
                "--background-color":"rgb(77,77,77)",
                "--shadow-color":"rgba(0,0,0,0.5)",
                "--text-color":"#ffffff",
                "--text-color":"#eceaea",
                
            }

        ]
        
    
function changeTheme(i)
{
    const _theme = {...themes[i]}
    setTheme(i === 1 ? "dark" : "light")
    
    //update setting
   

    setSettings(_theme)
}


function changeColor(i)
{
    
    const _color = primaryColors[i]
//changing color for all  primary colors
    let _settings={...settings}
    _settings["--primary-color"] = _color
    setprimaryColor(i)
    setSettings(_settings)

}
function changeFontsize(i)
{
 const _sizes=fontSizes[i];
 let _settings={...settings};
 _settings["--font-size"] = _sizes.value
 setfontsize(i)
 setSettings(_settings)
}

   const primaryColors = ["rgb(255,0,86)",
   "rgb(33,50,243)",
   "rgb(255,193,7)",
   "rgb(0,200,83)", 
   "rgb(156,39,176)"]

const fontSizes=[
{
    title:"small",
    value:"12px",
},
{
    title:"Medium",
    value:"16px",
},
{
    title:"Large",
    value:"20px"
}
]
    const [primaryColor,setprimaryColor]=useState(0)
    const[fontsize,setfontsize]=useState(1)
    return(
        <div>
            <div className="section d-block">
            <h2>Primary theme</h2>
            <div className="options-container">
                
            <div className="option light" onClick={()=>changeTheme(0)}>
            
            { theme === "light" && (
            <div className="check">
            <FontAwesomeIcon icon={faCheck} />

        </div>
            )}
        </div>
        <div className="option dark" onClick={()=>changeTheme(1)}>
        { theme === "dark" && (
            <div className="check">
            <FontAwesomeIcon icon={faCheck} />
            </div>
            )}
            </div>
            </div>
            </div>
            


    <div className="section d-block">
            <h2>Preferred Color</h2>
        <div className="options-container">     
        {primaryColors.map((color,index)=>(
                <div className="option light" style={{backgroundColor:color}} onClick={() => changeColor(index)}>
            
                {primaryColor === index && (
                <div className="check">

                    <FontAwesomeIcon icon={faCheck} /> 
                </div>
                )}
                </div>
                ))} 
        </div>
    </div>



    <div className="section d-block">
        <h2>Font Size</h2>
        <div className="options-container">        
          {fontSizes.map((size,index)=>(

            
            //     <div className="option light" style={{backgroundColor:color}}>
            
            //     {primaryColor === index && (
            //     <div className="check">
            //     <FontAwesomeIcon icon={faCheck} />
    
            // </div>
            //     )}
            // </div>
            <button className="btn" onClick={() => changeFontsize(index)}>
                {size.title}
                
                {fontsize === index && <span> <FontAwesomeIcon icon={faCheck} /></span>}
                <div className = "check">
                </div>
                
                
            </button>
         
          
          ))}  
        


            </div>
            </div>
            
        </div>
    )
}