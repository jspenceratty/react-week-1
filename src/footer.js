import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                <footer className="text-center text-lg-start bg-light text-muted footer">
                    <div className="text-center p-4" >
                        Web App Design with React - Week 1 Coding Assignment<br />
                        Copyright © 2021 - James E. Spencer<br />
                        All Rights Reserved
                    </div>
                </footer>
            </div>
        );
    }
}