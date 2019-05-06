'use strict';

class Nav extends React.Component {
    render(){
        return(
            <div className = "navbar">
                <h1><a href="#">PikPak</a></h1>
                
                <ul>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </div>
        );
    }
}

const navContainer = document.getElementById('nav_container');
ReactDOM.render(<Nav/>, navContainer);

//export default Nav