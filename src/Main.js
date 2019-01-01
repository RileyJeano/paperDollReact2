
import React, { Component } from 'react';
import Heads from './Heads'
import Hairs from './Hairs'
import Tops from './Tops'
import Base from './Base'
import './Main.css'
import Head from './Head'
import Hair from './Hair'
import Top from './Top'


class Main extends Component {
  constructor(){
    super()
    this.state = {
      headImage: "/face1.png",
      hairImage: "/hair1.png",
      topImage: "/outfit1.png"
    }
  }


render() {
	return (
		<main>
			<div className="heroImage">
				<Top className="top" topImage={this.state.topImage} />
				<Base className="base"/>
				<Head className="head" headImage={this.state.headImage} />
				<Hair className="hair" hairImage={this.state.hairImage} />
			</div>
			<div className="selectionImages">
            	<Heads changeHeadImage={this.changeHeadImage} />
           		<Hairs changeHairImage={this.changeHairImage} />
            	<Tops changeTopImage={this.changeTopImage} />
            </div>
        </main>
	)
}

changeHeadImage=(headImage)=>{
		this.setState({headImage:[headImage]})
	}

changeHairImage=(hairImage)=>{
		this.setState({hairImage:[hairImage]})
	}

changeTopImage=(topImage)=>{
		this.setState({topImage:[topImage]})
	}


}
export default Main