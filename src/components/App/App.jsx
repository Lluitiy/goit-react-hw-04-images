import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Container } from './App.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
// import { Modal } from '../Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
	state = {
		pictureName: '',
		page: 1,
	};

	handleFormSubmit = pictureName => {
		this.setState({ pictureName });
	};

	// handleLoadMore = e => {
	// 	this.setState(prevState => ({
	// 		page: prevState.page +1;
	// 	}));
	// };

	render() {
		return (
			<>
				<SearchBar onSubmit={this.handleFormSubmit} />
				<Container>
					<ImageGallery>
						<ImageGalleryItem pictureName={this.state.pictureName} />
					</ImageGallery>
					{this.state.pictureName && <LoadMoreBtn />}
					<ToastContainer autoClose={3000} position={'top-left'} />
				</Container>
				;
			</>
		);
	}
}
