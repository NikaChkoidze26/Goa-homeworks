import Button from "./button"

export default function Profile() {

    return(
        <div className=" bg-gray-800 text-center p-8 rounded-xl mt-20">

            <img className= "rounded-full w-24 h-24 mx-auto mb-4 object-cover" src="../src/assets/avatar-jessica.jpeg" alt="jessica randall"/>
            
            <h1 className="text-white font-semibold">Jessica Randall</h1>

            <p className="text-lime-400 font-semibold mb-4">London, United Kingdom</p>

            <p className="text-white text-sm font-semibold mb-4">"Front-end developer and avid reader."</p>

            <Button text="GitHub" />
            <Button text="Frontend Mentor"/>
            <Button text="LinkedIn" />
            <Button text="Twitter" />
            <Button text="Instagram" />

        </div>

        


    
    )
}