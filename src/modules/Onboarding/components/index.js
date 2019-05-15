import React from 'react';
import Styles from './styles';
import {Text, View, BindComponent, Button, Log} from '../../../library';

export default class Screen extends React.PureComponent {
	constructor(props) {
		super(props);
		BindComponent(this, {
			styles: Styles,
			isBack: true, // работает ли бек
			statusBar: 'light',
		});
	}

	componentDidMount() {}

	componentWillUnmount() {}

	componentAppear() {}

	componentDisappear() {}

	render() {
		const {styles, props, onBack} = this;
		const {onBack2} = props;
		return (
			<View style={styles.mainContainer}>
				<Button action={onBack} text='Hello, I am Onboarding' />
				<Button action={onBack2} text='Back 2 Screen' />
			</View>
		);
	}
}
