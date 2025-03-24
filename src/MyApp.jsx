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

/*
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

  */

  /*

import assestsData from "./Assets/Assets";
import Products from "./ChildComponents";
import style from "./Store.module.css";

let app = () => {

    

    let products = assestsData.fakestore.products;

    let[data , setdata] = useState(products);
    console.log(data)


    let alldata = () => {
       setdata(products)
    }
    
    let mansdata = () => {
        let filtermans = []
        products.map((val  , ind) => {
            if(val.category === "men's clothing") {
                filtermans.push(val)
                
            }
        });
        setdata(filtermans)
    }

    let womensdata = () => {
        let filterwomens = []
        products.map((val  , ind) => {
            if(val.category === "women's clothing") {
                filterwomens.push(val)
                
            }
        });
        setdata(filterwomens)
    }

    let jewelerydata = () => {
        let filterjewelery = []
        products.map((val  , ind) => {
            if(val.category === "jewelery") {
                filterjewelery.push(val)
                
            }
        });
        setdata(filterjewelery)
    }

    let electronicdata = () => {
        let filterelectronics = []
        products.map((val  , ind) => {
            if(val.category === "electronics") {
                filterelectronics.push(val)
                
            }
        });
        setdata(filterelectronics)
    }

    return(
        <center>
        <h1 id={style.mainTitle}>Welcome to My Store</h1>
        <br></br>
        <button onClick={alldata}>ALL</button>
        <button onClick={mansdata}>MAN</button>
        <button onClick={womensdata}>Womens</button>
        <button onClick={jewelerydata}>jewelery </button>
        <button onClick={electronicdata}>Electronic</button>

        <Products products = {data}></Products>
        </center>
    )

}
export default app;

*/

/*
import S1 from "./LearnAPI/S1";
import S2 from "./LearnAPI/S2";

const MyApp = () => {

    return (
        
            <>
                <h1>------------Task Date - 02/18/2025 --------</h1>
                <br/>
                <S1 data = {1} />
                <S2 data ={2}/>
            </>

    );
};

export default MyApp;


*/

/*
1. if , if-else , else-if , Switch

2. ternery operater

3. Logical operater

/*


const MyApp = () => {
    let [num , setnum] = useState(0)

    if(num % 2 === 0){

        return (
            <center>
                <h1>------------Task Date - 02/19/2025 --------</h1>
                <br/>

                <h2>The Given Number is Divisible by 2</h2>
                <br/>
                <br/>
                <br/>
                <button onClick={() => {setnum(num+1)}}>Increse</button>
            </center>
        );
    }
    else if(num % 3 === 0){

        return (
            <center>
                <h1>------------Task Date - 02/19/2025 --------</h1>
                <br/>

                <h2>The Given Number is Divisible by 3</h2>
                <button onClick={() => {setnum(num+1)}}>Increse</button>
            </center>
        );
    }
    else if(num % 4 === 0){

        return (
            <center>
                <h1>------------Task Date - 02/19/2025 --------</h1>
                <br/>

                <h2>The Given Number is Divisible by 4</h2>
                <button onClick={() => {setnum(num+1)}}>Increse</button>
            </center>
        );
    }
    else if(num % 5 === 0){

        return (
            <center>
                <h1>------------Task Date - 02/19/2025 --------</h1>
                <br/>

                <h2>The Given Number is Divisible by 5</h2>
                <button onClick={() => {setnum(num+1)}}>Increse</button>
            </center>
        );
    }
    else if(num % 1 === 0){

        return (
            <center>
                <h1>------------Task Date - 02/19/2025 --------</h1>
                <br/>

                <h2>The Given Number is Divisible by 1</h2>
                <button onClick={() => {setnum(num+1)}}>Increse</button>
            </center>
        );
    }


    let [Male , setMale] = useState(true);

    return(
        <>
            <h1>Ternery Operater</h1>
            <button onAbort={() => {setMale(false)}}>Female</button>
            <button onAbort={() => {setMale(true)}}>Male</button>
            {Male ? return (<h2>Male</h2>) : return (<h2>Female</h2>)}
        
        </>
    )
    
   
};

export default MyApp;

*/





// ------------------------------------------------------- Toggle Task -----------------------------------------------
/*
let App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>


    <div className="Main-Back">
        <h1 className="title" >GYANI.AI</h1>
    </div>
    

        

        <button className="toggle-button" onClick={toggleSidebar}>
            {isOpen ? 'Close' : 'Open'}
        </button>

        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <nav className="sidebar-nav">
                <ul>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                </ul>
            </nav>
        </div>
    </>
  );
};

export default App;
*/


//--------------------------------21/2/2025-----------------------------
/*
let app = () => {

    let NameRef = useRef();
    let MailRef = useRef();
    let NumberRef = useRef();


    let handleSubmit = s => {
        s.preventDefault();

        console.log(`Name : ${NameRef.current.value} Mail : ${MailRef.current.value} Number : ${NumberRef.current.value}`);
    }




    return(
        <center>
            <h1>Date - 2/21/2025</h1>

            <form onSubmit={handleSubmit}>
                <label></label>Name<input type="text" ref={NameRef}></input><br/>
                <label></label>Mail ID<input type="text" ref={MailRef}></input><br/>
                <label></label>Phone Number<input type="text" ref={NumberRef}></input><br/>
                <button>Submit</button>
            </form>
        
        
        
        </center>
    )


}
export default app;

*/

//--------------------------------Sum of 2 Number--------------------
/*

let app = () => {

    let firstNum = useRef();
    let SecondNum = useRef();
    let ThreeNum = useRef();
    let [Ans , setAns] = useState("");


    let handleSubmit = s => {
        s.preventDefault();
        let x = Number(firstNum.current.value) + Number(SecondNum.current.value) + Number(ThreeNum.current.value)

        setAns(x);
    }




    return(
        <center>
            <h1>SUM - {Ans}</h1>

            <form onSubmit={handleSubmit}>
                <p><label></label>1st Number<input type="text" ref={firstNum}></input><br/>  </p>
                <p><label></label>2nd Number<input type="text" ref={SecondNum}></input><br/></p>
                <p><label></label>3rd Number<input type="text" ref={ThreeNum}></input><br/></p>
                <button>Submit</button>
            </form>

            {Ans && <h2>Answer is {Ans}</h2>}

            
        
        
        
        </center>
    )


}
export default app;

*/
//-----------------------------------------Task-3---------------------------------

/*
let app = () => {

    let [Name , setName] = useState("");
    let [Mail , setMail] = useState("");
    let [Number , setNumber] = useState("");


    return(
        <center>
            <h1>Name : {Name} </h1>
            <h1>Mail : {Mail} </h1>
            <h1>Number : {Number}</h1>

            <form>
                <p><label></label>Name<input type="text" value={Name} onChange={(x)=>{setName(x.target.value)}} ></input><br/></p>
                <p><label></label>Mail<input type="text" value={Mail} onChange={(x)=>{setMail(x.target.value)}}></input><br/></p>
                <p><label></label>Number<input type="text" value={Number} onChange={(x)=>{setNumber(x.target.value)}}></input><br/></p>
                <button>Submit</button>
            </form>

            <form>
                <p><label></label>Name<input type="text" value={Name} onChange={(x)=>{setName(x.target.value)}} ></input><br/></p>
                <p><label></label>Mail<input type="text" value={Mail} onChange={(x)=>{setMail(x.target.value)}}></input><br/></p>
                <p><label></label>Number<input type="text" value={Number} onChange={(x)=>{setNumber(x.target.value)}}></input><br/></p>
                <button>Submit</button>
            </form>

        
        </center>
    )


}
export default app;

*/

/*

import React from 'react';

class MyApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Counter : 0,
        }

    }

  render() {
    return (
      <center>
        <h1>Counter - {this.state.Counter}</h1>
        <button onClick={()=>{this.setState({ Counter : this.state.Counter+1})}}>Increse</button>
        <button onClick={()=>{this.setState({ Counter : this.state.Counter-1})}}>Decrese</button>
        <button onClick={()=>{this.setState({ Counter : 0})}}>Reset</button>
      
      
      </center>
    )
  }
}
export default MyApp;

*/


/*
import React from 'react'

class MyApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Counter1 : 0,
            Counter2 : 0,
            Counter3 : 0,
        }

    }

  render() {
    return (
      <center>
        <h1>Counter 1 = {this.state.Counter1}</h1>
        <button onClick={()=>{this.setState({ Counter1 : this.state.Counter1+1})}}>Increse</button>
        <button onClick={()=>{this.setState({ Counter1 : this.state.Counter1-1})}}>Decrese</button>
        <button onClick={()=>{this.setState({ Counter1 : 0})}}>Reset</button>

        <h1>Counter 2 = {this.state.Counter2}</h1>
        <button onClick={()=>{this.setState({ Counter2 : this.state.Counter2+1})}}>Increse</button>
        <button onClick={()=>{this.setState({ Counter2 : this.state.Counter2-1})}}>Decrese</button>
        <button onClick={()=>{this.setState({ Counter2 : 0})}}>Reset</button>
      
        <h1>Counter 3 = {this.state.Counter3}</h1>
        <button onClick={()=>{this.setState({ Counter3 : this.state.Counter3+1})}}>Increse</button>
        <button onClick={()=>{this.setState({ Counter3 : this.state.Counter3-1})}}>Decrese</button>
        <button onClick={()=>{this.setState({ Counter3 : 0})}}>Reset</button>
      
      
      
      </center>
    )
  }
}
export default MyApp;
*/

//-------------------------------------------------------------------------------------------------

// ! 

/*
    Whenever a component is created and inserted into the DOM is called Mounting Phase.

    1. Constructor()
        a. It is the first method to be called in Mounting Phase
        b. This method will execute only once after the component Mounted.
        c. It is the best place to do initializations.
        d. To use "this" keyword,
            i. firstly, we have to extend the features of React. Component 
            ii.We have to pass props as parameter to constructor method
            iii. we must use super call.
            iv. "this" keyword will points to the current component.
        e. By default CBC contains state data.
        f. To create state data, this.state = object;
        g. To udpate the state data, this. setState(new state obj)

    2. getDerivedStateFromProps():
        a. getDerivedStateFromProps) method should be static.
        b. It will execute just before the render) method.
        c. It will return the new state data.
        d. it accepts prev props, prevsate as a paramters.
        e. It must and should return a valid state object / null.

    3. render()
        a. It is the only mandatory method in CBC's,
        b. It will execute for each and every updates.
        c. render) method allows us to write JSX(html + js);
        d. It is not the best place to do side effects.
        e. side effects means the things which are not in react
            ex - featch , timer.
    
    4. componentDidMount():
        a. componentDidMount) method will work onlyonce after the component is mounted.
        b. This is the best place to perform side effects.
        c. prefered to make GET requests here.


*/

/*----------------------------------------------------------------
import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Counter1 : 0,
        }

    }
    static getDerivedStateFromProps(prevProps, prevState){
        console.log(prevState);
        return null
    }

    componentDidMount(){
        let getData = async () => {
            let response = await fetch('https://jshttps://fakestoreapi.com/productsonplaceholder.typicode.com/todos/1')
            let data = await response.json()
            console.log(data);

        }
        getData();
    }
    render() { 
        return (
            <div>
                <h1>Counter 1 = {this.state.Counter1}</h1>
                <button onClick={()=>{this.setState({ Counter1 : this.state.Counter1+1})}}>Increse</button>
                <button onClick={()=>{this.setState({ Counter1 : this.state.Counter1-1})}}>Decrese</button>
                <button onClick={()=>{this.setState({ Counter1 : 0})}}>Reset</button>
            </div>
        );
    }
}
 
export default App;
    



*/


//----------------------------------------------------------------

/*
//!== Updating Phase ====

    Whenever there some changes in component, react will re-render the component and this phase is called updating phase.
    changes in props, state.

    ? 1. getDerivedStateFromProps () :
        This method is as same in Mouting Phase.
        This method will execute just before the render method.
        It will provide the static state data.
        It will return a new object as state data.
        You, 29 seconds ago • Uncommitted changes

    ? 2. shouldComponentUpdate():
        This method helps us to improve the performance of an application.
        It will compare the previous props/states with current props/states.
        It will return a boolean value.
        If true, render) method will execute If false, render() method will not execute By default the value is true.
        Called to determine whether the change in props and state should trigger a re-render.
        Component always returns true.
        PureComponent implements a shallow comparison on props and state and returns true if any props or states have changed.
        If false is returned, Component. render, componentWillUpdate and componentDidUpdate will not be called.

    ? 3. render():
        As same in mounting phase




*/
/*
import React from 'react'
class app extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count : 0 };
    }
    static getDerivedStateFromProps(prevProps, prevState){
        console.log(prevState);
        return null
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState);
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        return prevState;

    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(snapshot);
    }

    componentDidMount(){
        console.log("Component Mounted");
    }

    render() { 
        return ( 
            <div>
                <h1>count : {this.state.count}</h1>
                <button onClick={()=>{this.setState({count : this.state.count+1})}}>Increse</button>
            </div>
         );
    }
}

export default app;

*/

/*
import React from 'react'
import ChildComponent from './ChildComponents';
class app extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count : 0 , mount : true };
    }
    static getDerivedStateFromProps(prevProps, prevState){
        console.log(prevState);
        return null
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState);
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        return prevState;

    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(snapshot);
    }

    componentDidMount(){
        console.log("Component Mounted");
    }

    render() { 
        return ( 
            <div>
                <h1>count : {this.state.count}</h1>
                <button onClick={()=>{this.setState({count : this.state.count+1})}}>Increse</button>
                <button onClick={()=>{this.setState({mount :!this.state.mount})}}>Toggle Mount</button>
                {this.state.mount  ? <ChildComponent/> : null}
            </div>
         );
    }
}

export default app;
*/



/* -------------------Note-----------------
    ? Step 1:
        npm install axios
        npm i axios

    ? Step 2:
        import axios from 'axios'
    
    ? Step 3:
        axios.get(url)
        axios.post(url, data)
        axios.put(url, data)
        axios.patch(url, data)
        axios.delete(url)

*/
/*
import React from 'react'
import axios from 'axios'

function App() {

    let [products , setData] = React.useState([]);

    React.useEffect(() => {
        let getData = async () => {
            let { data } = await axios.get('https://fakestoreapi.com/products')
            setData(data);
        };
        getData();
    }, [])

    return (

        
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products List</h2>
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <img
                    alt={product.image}
                    src={product.image}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default App;

*/
/*
import React from "react";
import reactDom from "react-dom";
import port from "./PortTest";

function App() {
    let [Toggle , setToggle] = React.useState(false);
    let [Toggle2 , setToggle2] = React.useState(false);



    return ( 
    <center>

        <section style={{border : "1px solid black" , padding : "10px"}}>
             <h1>Hello World!</h1>
             <button onClick={()=>setToggle(!Toggle)}>Button</button>
             {Toggle ? <p>Toggle is on</p> : null}
        </section>


        <section style={{border : "1px solid black" , padding : "10px"}}>
            
             <h1>Hello World!</h1>
             <button onClick={()=>setToggle2(!Toggle2)}>Button</button>
             {Toggle2 ? reactDom.createPortal(<port></port> , document.getElementById("portal")) : null}
        </section>
    </center> 
    );
}

export default App;

*/
/*
import React from "react";
import ReactDOM from "react-dom";
import Port from "./PortTest";
import style from "./PortTest.module.css";


function App() {
    let [button, setbutton] = useState(false)

    return ( 
        <center>
            <h1>I am Main Screen</h1>
                <br />
            <button onClick={() => setbutton(!button)}>{button ? "X" : "Sign In"}</button>
            <div className={style.login}> 
                {button ? ReactDOM.createPortal(<Port ></Port>, document.getElementById("portal")) : null}
            </div>
           
            
        </center>
     );
}

export default App;

*/

/*
import PureParent from "./Pure Component/PureParent";
const App = () => {

    return ( 
        <>
            <PureParent/>

        </>
     );
}

export default App;
*/

/*
import React from "react";
import { useState , useMemo } from "react";
const App = () => {

    let [Counter1 , setCounter1] = useState(0);
    let [Counter2 , setCounter2] = useState(0);

    let isEven = useMemo(())

    return ( 
        <>
            <center>
                <h1>Counter 1 : {Counter1}</h1>
                <button onClick={() => setCounter1(Counter1+1)}>Increment</button>
                <button onClick={() => setCounter1(Counter1-1)}>Decrement</button>
                <button onClick={() => setCounter1(0)}>Reset</button>
                <br/>
                <br/>
                <h1>Counter 2 : {Counter2}</h1>
                <button onClick={() => setCounter2(Counter2+1)}>Increment</button>
                <button onClick={() => setCounter2(Counter2-1)}>Decrement</button>
                <button onClick={() => setCounter2(0)}>Reset</button>
            </center>
        </>
     );
}

export default App;

*/
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/LogIn";
import HR from "./Pages/HR";
import Manager from "./Pages/Manager";
import Emp from "./Pages/Emp";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        

        <Routes>
            <Route path="/" element={<Dashboard />}>
            <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />}> 
            <Route path="HR" element={<HR />}/> 
            <Route path="Manager" element={<Manager />}/> 
            <Route path="Emp" element={<Emp />}/> 
            </Route>
          <Route path="/contact" element={<Contact />} >
            <Route path="ContactHR" element={<HR />}/> 
            <Route path="ContactManager" element={<Manager />}/> 
            <Route path="ContactEmp" element={<Emp />}/> 
            </Route>
          <Route path="/login" element={<Login />} />
            </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;