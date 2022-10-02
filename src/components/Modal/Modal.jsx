import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
const galleryBody = document.querySelector('body');

export const Modal = ({ onClose, largeImage }) => {
	useEffect(() => {
		galleryBody.classList.toggle('stop-scroll');
		window.addEventListener('keydown', e => {
			if (e.code === 'Escape') {
				console.log('first');
				onClose();
			}
		});
	}, [onClose]);

	return createPortal(
		<Overlay onClick={onClose}>
			<ModalImg src={largeImage} alt="" width="900" height="700" />
		</Overlay>,
		modalRoot
	);
};

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	largeImage: PropTypes.string.isRequired,
};
