import styled from "styled-components";
import {useDeleteCategoryMutation, useEditCategoryMutation} from "../../store";
import {useState} from "react";
import IconButton from "../simple/IconButton";
import {GoPencil, GoTrashcan} from "react-icons/go";
import ExpandablePanel from "../simple/ExpandablePanel";
import BucketList from "./BucketList";
import Button from "../simple/Button";
import Modal from "../simple/Modal";


function CategoryItem({ category }) {
    const [editCategory, editResults] = useEditCategoryMutation();
    const [deleteCategory, deleteResults] = useDeleteCategoryMutation();
    const [categoryName, setCategoryName] = useState(category.name);
    const [showModal, setShowModal] = useState(false);

    const handleEditCategoryClick = () => {
        setShowModal(true);
    };

    const handleEditCategoryClose = () => {
        setShowModal(false);
        setCategoryName(category.name);
    };

    const handleEditCategoryNameChange = e => {
        setCategoryName(e.target.value);
    };

    const handleEditCategory = () => {
        editCategory({
            id: category.id,
            name: categoryName,
        });
        handleEditCategoryClose();
    };

    const handleDeleteCategory = () => {
        deleteCategory(category);
    };

    const actionBar = (
        <div>
            <Button onClick={handleEditCategory} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleEditCategoryClose} actionBar={actionBar}>
            <input type={"text"} onChange={handleEditCategoryNameChange} value={categoryName} />
        </Modal>
    );

    const header = (
        <>
            <CategoryName>
                {category.name}
            </CategoryName>
            <CategoryAmount>
                Current: {category.totalCurrentAmount}
            </CategoryAmount>
            <CategoryAmount>
                Recurring: {category.totalRecurringAmount}
            </CategoryAmount>
            <CategoryAmount>
                Maximum: {category.totalMaximumAmount}
            </CategoryAmount>
            <IconWrapper>
                <Button danger onClick={handleDeleteCategory} loading={deleteResults.isLoading}>
                    <GoTrashcan />
                </Button>
                <Button secondary onClick={handleEditCategoryClick} loading={editResults.isLoading}>
                    <GoPencil />
                </Button>
            </IconWrapper>
        </>
    );

    return(
        <>
            {showModal && modal}
            <ExpandablePanel key={category.id} header={header}>
                <BucketList category={category}/>
            </ExpandablePanel>
        </>
    );
}

export default CategoryItem;

const CategoryItemWrapper = styled.div`
  
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    margin: 0 0.25rem;
  }
`;


const CategoryName = styled.div`
  flex-grow: 1;
`;

const CategoryAmount = styled.div`
  width: 10rem;
`;