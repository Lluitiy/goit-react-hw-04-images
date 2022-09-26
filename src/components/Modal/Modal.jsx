import { Component } from 'react';
import { Overlay, ModalContent } from './Modal.styled';
// const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
	componentDidMount() {}

	componentWillUnmount() {}

	render() {
		return (
			<Overlay>
				<ModalContent />
			</Overlay>
		);
	}
}
