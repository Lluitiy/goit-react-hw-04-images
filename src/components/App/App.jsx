import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Container } from './App.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Spinner } from 'components/Spinner/Spinner';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
// import { Modal } from '../Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
	render() {
		return (
			<>
				<SearchBar />
				<Container>
					<ImageGallery />
					<Spinner />
					<LoadMoreBtn />
					<ToastContainer />
				</Container>
				;
			</>
		);
	}
}
