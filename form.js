import "./form.css"
import {useState}from 'react'


function Form(){


    const[Name,setName]=useState("")

    const[addres,setaddres]=useState("")

    const[number,setnumber]=useState()
    
    const[email,setemail]=useState("")


//error set krava mate na veriable

    const[Nameeror,setNameeror]=useState("")
    const[Addreseror,setAddresError]=useState("")
    const[Numbereror,setNumbereror]=useState("")
    const[Emaileror,setEmaileror]=useState("")
    
     function Namechangehandler(event){

        const regix=/^[a-zA-Z]*$/;
        if(regix.test(event.target.value)){
            setName(event.target.value);
            setNameeror("");
        }else{
            setNameeror("only For careactor only");
        }
// if(event.target.value.length>=2){
//     setNameeror("");
// }else{
//     setNameeror("min 2 carctor only");
// }


    //  setName(event.target.value)
     };
     function Addreschangehandler(event){
        if(event.target.value.length>=2){
            setAddresError("");
        }else{
            setAddresError("min 2 carctor only");
        }
        setaddres(event.target.value)
     }
     function Numberchangehandler (event){
        // setnumber(event.target.value)

        const numberregex=/^[0-9]*$/
        if (numberregex.test(event.target.value)) {
            setnumber(event.target.value)
            setNumbereror("")
        }else{
            // setnumber("")
            setNumbereror("only for number only")
            
        }
     }
     function Emailchangehandler (event){
        setemail(event.target.value)
      const emailregex=/^[^\s@]+@([\w-]+\.)+[\w-]{2,3}$/;
    if(emailregex.test(event.target.value)){
    setemail(event.target.value)
    setEmaileror("")
}else{
    // setemail("")
    setEmaileror("only for Email only")
    
}


        // if(event.target.value){
        //     setEmaileror("")
        // }else{
        //     setEmaileror("only for Email carector only")
        // }
     }



      

//handler

     function submithendler(){

    if(Name){
        setNameeror("");
    }else{
        setNameeror("please Enter your Name")
    }
//Addres mate //

if(addres){
    setAddresError("");
}else{
    setAddresError("plesse Enter your Addres")
}

//Number mate
if(number){
    setNumbereror("")
}else{
    setNumbereror("please Enter your Number")
}
//Email mate

if(email){
    setEmaileror("")
}else{
    setEmaileror("please Enter Your Email")
}
    let submitdata={
        Name:Name,
        Addres:addres,
        number:number,
        Email:email
    }
        
    console.log(submitdata );
    }
    
    return(
        <div >
        <div className="container">
        <div>
        <label><b>Name:</b></label>
        <input type="text"  placeholder="Enter your name" value={Name} onChange={Namechangehandler} ></input>
        </div>
        {Nameeror&&<span className="eror">{Nameeror}</span>}
        <br></br>
        <div>
        <label>Addres:</label>
        <input type="text" placeholder="Enter your addres" value={addres} onChange={Addreschangehandler}></input>
        </div>
        {Addreseror&&<span className="eror">{Addreseror}</span>}
        <br></br>
        <div>
        <label>Mobile Number:</label>
        <input type="text" placeholder="Enter your number" value={number} maxLength={10} onChange={Numberchangehandler}></input>
        </div>
        {Numbereror&&<span className="eror">{Numbereror}</span>}
        <br></br>
        <div>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email"  value={email} onChange={Emailchangehandler}></input>
        </div>
        {Emaileror&&<span className="eror">{Emaileror}</span>}
        <br></br>
        <div>
            <button type="submit" onClick={submithendler} className="btnstyl" >Submit kro</button>
        </div>
        </div>
        </div>
    );
};
export default Form