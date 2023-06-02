import styled from "styled-components";
import {useAddCategoryMutation, useFetchCategoriesQuery} from "../../store";
import CategoryItem from "./CategoryItem";
import {useState} from "react";
import Button from "../simple/Button";
import Modal from "../simple/Modal";


function CategoryList() {
    const { data, error, isFetching } = useFetchCategoriesQuery();
    const [addCategory, results] = useAddCategoryMutation();
    const [showModal, setShowModal] = useState(false);
    const [addCategoryName, setAddCategoryName] = useState('');

    const handleAddCategoryClick = () => {
        setShowModal(true);
    };

    const handleAddCategoryClose = () => {
        setShowModal(false);
        setAddCategoryName('');
    };

    const handleAddCategoryNameChange = e => {
        setAddCategoryName(e.target.value);
    };

    const handleAddCategory = () => {
        addCategory(addCategoryName);
        handleAddCategoryClose();
    };

    const actionBar = (
        <div>
            <Button onClick={handleAddCategory} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleAddCategoryClose} actionBar={actionBar}>
            <input type={"text"} onChange={handleAddCategoryNameChange} placeholder={"Category Name"} />
        </Modal>
    );

    let content;
    if(isFetching) content = <div>Loading...</div>;
    else if(error) content = <div>Error fetching categories</div>;
    else content = data.map(category => <CategoryItem key={category.id} category={category} />);

    return(
        <CategoryListWrapper>
            {showModal && modal}
            <CategoryListHeaderWrapper>
                <h3>Categories/Categories</h3>
                <Button onClick={handleAddCategoryClick} loading={results.isLoading} primary>
                    + Add Category
                </Button>
            </CategoryListHeaderWrapper>
            <CategoryListContentWrapper>
                {content}
            </CategoryListContentWrapper>
        </CategoryListWrapper>
    );
}

export default CategoryList;

const CategoryListWrapper = styled.div`
  
`;

const CategoryListHeaderWrapper = styled.div`
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &h3 {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const CategoryListContentWrapper = styled.div`
  
`;