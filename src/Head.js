import React, { Component } from 'react'
import api from './api'

class Head extends Component {
	constructor(props) {
		super(props)
	
	}


	render() {
		return (<section>
						<img src={"http://localhost:8080/image/" + this.props.headImage} width="500" height="647"/>
				</section>
		)
	}
}

export default Head


