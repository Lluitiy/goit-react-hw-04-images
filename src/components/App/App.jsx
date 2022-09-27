import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Container } from './App.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
	state = {
		pictureName: '',
	};

	handleFormSubmit = pictureName => {
		this.setState({ pictureName });
	};

	render() {
		return (
			<>
				<SearchBar onSubmit={this.handleFormSubmit} />
				<Container>
					<ImageGallery>
						<ImageGalleryItem pictureName={this.state.pictureName} />
					</ImageGallery>
					<ToastContainer autoClose={3000} position={'top-left'} />
				</Container>
				;
			</>
		);
	}
}
