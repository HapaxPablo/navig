import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ScreenOne = props => {
	const onPress = () => {
		props.navigation.navigate('ScreenTwo')
	}

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<TouchableOpacity
				onPress={onPress}
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					width: 203,
					height: 48,
					left: 94,
					top: 620,
					borderRadius: 32,
					backgroundColor: '#9D1DCA',
				}}
			>
				<Text style={{ color: 'white' }}>Continue</Text>
			</TouchableOpacity>
		</View>
	)
}

export default ScreenOne
