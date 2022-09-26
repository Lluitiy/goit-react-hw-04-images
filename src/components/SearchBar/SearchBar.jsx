import { Component } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import {
	Header,
	SearchForm,
	SearchFormButton,
	SearchFormInput,
} from './SearchBar.styled';

export class SearchBar extends Component {
	state = {
		pictureName: '',
	};

	handleChange = e => {
		this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.state.pictureName.trim() === '') {
			toast.error('Enter search query');
			return;
		}
		this.props.onSubmit(this.state.pictureName);
		this.setState({ pictureName: '' });
	};

	render() {
		return (
			<Header>
				<SearchForm onSubmit={this.handleSubmit}>
					<SearchFormInput
						type="text"
						name="pictureName"
						value={this.state.pictureName}
						onChange={this.handleChange}
					/>
					<SearchFormButton type="submit">
						<RiSearchLine />
					</SearchFormButton>
				</SearchForm>
			</Header>
		);
	}
}
