import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
});

export default class ProfileScreen extends React.PureComponent {
	render() {
		const { name, onUpdateName } = this.props;
		return (
			<View style={styles.container}>
				<Text onPress={onUpdateName}>Hello, {name}</Text>
			</View>
		);
	}
}
