import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import './App.css'
import { MainContainer } from './Atoms/layout'
import Header from './Components/Header'
import Home from './Views/Home'

const App = () => (
	<section>
		<Route path='/' component={Header}/>
		<MainContainer>
			<Switch>
				<Route exact path='/' component={Home}/>
			</Switch>
		</MainContainer>
	</section>
)

export default App
