import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div className="container">
                
                <div className="d-flex align-items-center justify-content-center">
                    <div className="login-box  bg-light">
                        <h3>Log In:</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="text-right"><label htmlFor="username">Username:</label></td>
                                    <td><input id="username" type="text" /></td>
                                </tr>
                                <tr>
                                    <td className="text-right"><label htmlFor="password">Password:</label></td>
                                    <td><input id="password" type="password" /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><button>Submit</button></td>
                                </tr>
                            </tbody>


                        </table>
                    </div>
                </div>
                
            </div>

        );
    }
}