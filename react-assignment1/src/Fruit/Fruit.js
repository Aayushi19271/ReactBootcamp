import React, { Component } from 'react';
import './Fruit.css'

class fruit extends Component {
state={ }
    
render() { 
    return (
        <table>
            <tbody>
                <tr>
                    <td>{this.props.value.name}</td>
                    <td>{this.props.value.quantity}</td>
                    <td>
                        <button onClick={()=>this.props.deleteMethod()}>Delete</button>
                    </td>
                </tr>

            </tbody>
        </table>
    );
}
}

export default fruit;