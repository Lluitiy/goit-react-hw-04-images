import { ImageGalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ children }) => {
	return <ImageGalleryList>{children}</ImageGalleryList>;
};

ImageGallery.prototypes = {
	children: PropTypes.node.isRequired,
};
