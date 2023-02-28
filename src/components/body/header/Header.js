import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
//-----------------------------------   utils   -----------------------------------
//----------------------------------- Component -----------------------------------
//----------------------------------- Other -----------------------------------
import logo from '../../../assets/images/logo.png';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: 	  '',
        }  
	}
    componentDidMount(){         
	}
	render(){
		return (
            <div className='hd'>                
                <div className='hd-mid'>
                    <div className='hd-logo'>
                        <img src={logo} />
                    </div>
                    <div className='hd-login'>
                        asda
                    </div>
                    <div className='clr'></div>
                </div>
            </div>
		);
	}
}
export default Header;