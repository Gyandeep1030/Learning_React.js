/*

let App = () => {
    return(
        <>
            <h1>I am Gyandeep</h1>
            <h1>i am learnig JS</h1>
            <h1>i am a Student </h1>

        </>

    );
}
export default App;



let App = () => {
    let name = "Gyandeep";
    let sub = "js";
    let stu = "Students"

    return(
        <>
            <h1>I am {name}</h1>
            <h1>i am learnig {sub}</h1>
            <h1>i am a {stu} </h1>

        </>

    );
}
export default App;


*/

import { useState } from "react";

/*
let App = () => {
    let name = "Gyandeep";
    let skill = ["Html", "CSS", "JAVA", "React"];

    return (
        <>
            <h1>I am {name}</h1>
            <h1>I am learning:</h1>
            <ul>
                {skill.map((val, index) => (
                    <li key={index}>{val}</li>
                ))}
            </ul>
        </>
    );
};

export default App;



let App = () => {
    let name = "Gyandeep";
    let skill = ["Html", "CSS", "JAVA", "React"];

    return (
        <>
            <h1>I am {name}</h1>
            <h1>I am learning:</h1>
            <ul>
                {skill.map((val, index) => (
                    <li key={index}>{val}</li>
                ))}
            </ul>
        </>
    );
};


import ChildComponents from "./ChildComponents";

let App = () => {
    return(
        <>
            <h1> PAGE </h1>
            <h1>========================================</h1>
           <ChildComponents name = "Gyandeep" age = {20} stream = "MCA"> </ChildComponents>
           <ChildComponents name = "Tanmay" age = {21} stream = "M.tec"> </ChildComponents>
           <ChildComponents name = "Shivani" age = {30} stream = "B.tec"> </ChildComponents>
        </>

    );
}
export default App;


import ChildComponents from "./ChildComponents";

let App = () => {
    return(
        <>
            <h1> PAGE </h1>
            <h1>========================================</h1>
           <ChildComponents  sname = "Manoj" 
                age = {20} 
                course = "React"
                skills = {["react" , "JS" , "JAVA"]}
                frinds = {{fname : "Gyan" , address:"Rajapuri" , pno:1506324879}}>
             </ChildComponents>

             <ChildComponents  sname = "Rahul" 
                frinds = {{fname : "Gyan" , address:"N/A" , pno:0}}>
             </ChildComponents>
            
             <ChildComponents 
                skills = {["react" , "JS" , "JAVA"]}>
             </ChildComponents>
        </>

    );
}
export default App;





import ChildComponents from "./ChildComponents";

let App = () => {
    return(
        <>
            <h1> I am App Component </h1>
            <h1>========================================</h1>
           <ChildComponents  
                sname = "Manoj" 
                age = {20} 
                isPlaced = {false}
                companyName={undefined}
                salary = {null}
                skills = {["react" , "JS" , "JAVA"]}
                address = {{streetno : 123 , colony : "patel nagar" , pincode: 110059}}
                dob = {new Date("01 05 2000 10:50:50")}
                clickFn={() => {
                    console.log("you clicked me")
                }}
                >
             </ChildComponents>

        </>

    );
}
export default App;



import ChildComponent from "./ChildComponents";
let MyApp = () => {
  return (
    <>
      <h1>I am App Component</h1>
      <ChildComponent
        sname={20}
        age={20}
        course="MERN stack"
        skills={["js" , "react"]}
        address={{
          streetno: 123,
          colony: "patel nagar",
          pincode: 123456,
        }}
        isMarried={false}
      />
    </>
  );
};
export default MyApp;

import css from "./app.module.css";

let MyApp = () => {
  return (
    <>
      <h1>I am Application</h1>
      <section id={css.container}>
        <div className={css.items}>About</div>
        <div className={css.items}>Contact</div>
        <div className={css.items}>Review</div>
        <div className={css.items}>Skill</div>
        <div className={css.items}>Tax</div>
      </section>
    </>
  );
};

export default MyApp;




let MyApp = () => {
    return (
      <>
        <h1>I am Application</h1>
        <section id="container">
          <div className="items">About</div>
          <div className="items">Contact</div>
          <div className="items">Review</div>
          <div className="items">Skill</div>
          <div className="items">Tax</div>
        </section>
      </>
    );
  };
  
  export default MyApp;

  */

// ? Hooks Examples--

/*
  let MyApp = () => {

    let [i , setCount] = useState(0);

    return(
        <center>
            <h1>Testing on Hooks</h1>
            <br/>
            <h2>Count : {i}</h2>
            <br/>
            <button onClick={() => {setCount(10)}}>Increse by 10 </button>
            <button onClick={() => {setCount(20)}}>Increse by 20</button>
            <br/>
            <br/>
            
            <button onClick={() => {setCount(i+1)}}>Increment</button>
            <button onClick={() => {setCount(0)}}>Reset</button>
            <button onClick={() => {setCount(i-1)}}>Decrement</button>
        </center>
    )



  }
  export default MyApp;

*/



/*

let MyApp = () => {

    let [i , setCount_i] = useState(0);
    let [j , setCount_j] = useState(0);

    return(
        <center>
            <h1>Testing on Hooks</h1>
            <br/>
            <h2>Count : {i}</h2>
            <br/>
            <button onClick={() => {setCount_i(10)}}>Increse by 10 </button>
            <button onClick={() => {setCount_i(20)}}>Increse by 20</button>
            <br/>
            <br/>
            
            <button onClick={() => {setCount_i(i+1)}}>Increment</button>
            <button onClick={() => {setCount_i(0)}}>Reset</button>
            <button onClick={() => {setCount_i(i-1)}}>Decrement</button>


            <h2>Count : {j}</h2>
            <br/>
            <button onClick={() => {setCount_j(10)}}>Increse by 10 </button>
            <button onClick={() => {setCount_j(20)}}>Increse by 20</button>
            <br/>
            <br/>
            
            <button onClick={() => {setCount_j(j+1)}}>Increment</button>
            <button onClick={() => {setCount_j(0)}}>Reset</button>
            <button onClick={() => {setCount_j(j-1)}}>Decrement</button>
        </center>
    )



  }
  export default MyApp;


  */






  /*
   let MyApp = () => {

    let [i , setCount] = useState("Gyandeep");

    return(
        <center>
            <h1>Testing on Hooks</h1>
            <br/>
            <h2>Name : {i}</h2>
            <br/>
            <button onClick={() => {setCount("Gyandeep")}}>First name </button>
            <button onClick={() => {setCount("Gyandeep Kumar")}}>Full Name</button>
            <br/>
            <br/>
        </center>
    )



  }
  export default MyApp;

  */



  /*
  let MyApp = () => {

    let [i , setCount] = useState(false);

    return(
        <center>
            <h1>Testing on Hooks</h1>
            <br/>
            <h2>Count : {i ? "Male" : "Female"}</h2>
            <br/>
            <button onClick={() => {setCount(true)}}>Male </button>
            <button onClick={() => {setCount(false)}}>Female</button>
        </center>
    )



  }
  export default MyApp;

  */


/*

  let MyApp = () => {

    let [i , setSkill] = useState(["Py" , "Dejango" , "Numpay"]);

    return(
        <center>
            <h1>Testing on Hooks</h1>
            <br/>
            <h2>Skills : {i.map((val , ind) => {return <li key={ind}>{val}</li>})}</h2>
            <br/>
            <button onClick={() => {setSkill(["Py" , "Dejango" , "Numpay"])}}>Python </button>
            <button onClick={() => {setSkill(["springBoot" , "TheamLeaf" , "Hibernate"])}}>JAVA</button>
            <button onClick={() => {setSkill(["MongoDB" , "Express.js", "React.js "])}}>MEARN</button>
        </center>
    )



  }
  export default MyApp;


  */


  let MyApp = () => {

    let student1 = {name :"Gyandeep"  , roll : 1  , age: 20  };
    let student2 = {name : "Tanmay" , roll : 2 , age:25  };
    let student3 = {name :"Shivani"  , roll : 21 , age: 30 };
    let student4 = {name :"Rahul"  , roll : 3 , age:21  };




    let [Stu , set] = useState(student1);

    return(
        <center>
            <h1>Testing on Hooks</h1>
            <br/>
            <br/>
            <button onClick={() => set(student1)}>Fist Student </button>
            <button onClick={() => set(student2)}>Second Student</button>
            <button onClick={() => set(student3)}>Third Student</button>

            <br/>
            <br/>
            <h2>Name : {Stu.name}</h2>
            <h2>age : {Stu.age}</h2>
            <h2>roll : {Stu.roll}</h2>


        </center>
    )



  }
  export default MyApp;