import styled from "styled-components";
import Button from "../simple/Button";
import {GoPencil, GoTrashcan} from "react-icons/go";
import {useDeleteBucketMutation, useEditBucketMutation} from "../../store";


function BucketItem({bucket}) {
    const [editBucket, editResults] = useEditBucketMutation();
    const [deleteBucket, deleteResults] = useDeleteBucketMutation();

    const handleDeleteBucket = () => {
        console.log("Inside handleDeleteBucket");
    };

    const handleEditBucketClick = () => {
        console.log("Inside handleEditBucket");
    };

    return(
        <BucketItemWrapper>
            <BucketName>
                {bucket.name}
            </BucketName>
            <div>
                Recurring Amount: {bucket.recurringAmount}
            </div>
            <div>
                Max Amount: {bucket.maximumAmount}
            </div>
            <IconWrapper>
                <Button danger onClick={handleDeleteBucket} loading={deleteResults.isLoading}>
                    <GoTrashcan />
                </Button>
                <Button secondary onClick={handleEditBucketClick} loading={editResults.isLoading}>
                    <GoPencil />
                </Button>
            </IconWrapper>
        </BucketItemWrapper>
    );
}

export default BucketItem;

const BucketItemWrapper = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  & > div {
    margin: 0 0.5rem;
  }
`;

const BucketName = styled.div`
  flex-grow: 1;
`;


const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  & button {
    margin: 0 0.25rem;
  }
`;