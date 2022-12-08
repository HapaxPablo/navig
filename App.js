import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenOne from './src/ScreenOne'
import ScreenTwo from './src/ScreenTwo'

const App = () => {
	const Stack = createStackNavigator()

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='ScreenOne' component={ScreenOne} />
				<Stack.Screen name='ScreenTwo' component={ScreenTwo} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
