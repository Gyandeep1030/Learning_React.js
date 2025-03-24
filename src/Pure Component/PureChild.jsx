import { PureComponent } from "react";

class PureChild extends PureComponent {
    render() { 
        console.log("I am PureChild");
        return (
            <>
                <h2>I am PureChild</h2>
            </>
        );
    }
}
 
export default PureChild;