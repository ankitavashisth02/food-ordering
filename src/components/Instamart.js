import { useState } from "react";

const Section = ({title, description ,isVisible, setIsVisible})=>{

    return(
        // accordian 
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold tex-xl">{title}</h3>
            {
                isVisible
                ? 
                <button onClick={()=>{
                    setIsVisible(false);
                }} className="cursor-pointer underline">Hide</button>
                :(
                <button onClick={()=>{
                    setIsVisible(true);
                }} className="cursor-pointer underline">
                Show</button>
            )}
            

            {isVisible && <p>{description}</p>}
        </div>
    );
}

const Instamart = ()=>{
    const[visibleSection , setIsVisibleSection] = useState();

    return(
        <div>
            <h1 className="text-3xl p-2 m-3 font-bold">Instamart</h1>

            <Section 
             title={"About Instamart"} 
             description={
                "This is the About section of Instamart.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure"
            } 
             isVisible = { visibleSection=== "about" } 
             setIsVisible={()=> setIsVisibleSection("about")}
            />

            <Section
             title={"Team Instamart"} 
             description={
                "This is the About section of Instamart.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure"
            } 
             isVisible={visibleSection=== "team" } 
             setIsVisible={()=>setIsVisibleSection("team")}
            />

            <Section 
             title={"Career Instamart"} 
             description={
                "This is the Career section of Instamart.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure"
            } 
             isVisible={visibleSection=== "career"} 
             setIsVisible={()=>setIsVisibleSection("career")}
            />

        </div>
    )
}

export default Instamart;