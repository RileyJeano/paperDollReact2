import React, { Component } from 'react'
import api from './api'

class Top extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		return (<section>
						<img src={"http://localhost:8080/image/" + this.props.topImage} width="500" height="647"/>
				</section>
		)
	}
}
export default Top

