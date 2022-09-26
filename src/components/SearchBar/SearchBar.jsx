import {
	Header,
	SearchForm,
	SearchFormButton,
	SearchFormInput,
} from './SearchBar.styled';

export const SearchBar = () => {
	return (
		<Header>
			<SearchForm>
				<SearchFormInput type="text" name="searcher" />
				<SearchFormButton type="button">Find Image</SearchFormButton>
			</SearchForm>
		</Header>
	);
};
