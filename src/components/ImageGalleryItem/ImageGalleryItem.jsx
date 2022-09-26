import { Component } from 'react';
import { toast } from 'react-toastify';
import { Spinner } from 'components/Spinner/Spinner';
import {
	GalleryItem,
	GalleryLink,
	GalleryImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
	state = {
		picture: null,
		status: 'idle',
	};
	componentDidUpdate(prevProps, prevState) {
		const prevName = prevProps.pictureName;
		const nextName = this.props.pictureName;
		if (prevName !== nextName) {
			this.setState({ status: 'pending' });
			fetch(
				`https://pixabay.com/api/?key=30188336-4b4f26bd7e50c24034d7e6b40&q=${nextName}&page=1&per_page=20`
			)
				.then(r => r.json())
				.then(picture => {
					if (picture.hits.length === 0) {
						toast('unfortunately there are no images with such query');
						return;
					}
					this.setState({ picture: picture.hits, status: 'resolved' });
				});
		}
	}

	render() {
		const { picture, status } = this.state;
		if (status === 'idle') {
			return <h1>Please enter the search query</h1>;
		}
		if (status === 'pending') {
			return <Spinner />;
		}
		if (status === 'resolved') {
			return picture.map(({ id, tags, largeImageURL }) => (
				<GalleryItem key={id}>
					<GalleryLink href="#">
						<GalleryImage
							src={largeImageURL}
							alt={tags}
							width="280"
							height="260"
						/>
					</GalleryLink>
				</GalleryItem>
			));
		}
	}
}
