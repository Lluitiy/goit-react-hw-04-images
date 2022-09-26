import {
	GalleryItem,
	GalleryLink,
	GalleryImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = () => {
	return (
		<GalleryItem>
			<GalleryLink href="#">
				<GalleryImage src="#" alt="nothing" width="280" height="260" />
			</GalleryLink>
		</GalleryItem>
	);
};
