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
            <BucketHeader>
                <div>
                    {bucket.name}
                </div>
                <IconWrapper>
                    <Button danger onClick={handleDeleteBucket} loading={deleteResults.isLoading}>
                        <GoTrashcan />
                    </Button>
                    <Button secondary onClick={handleEditBucketClick} loading={editResults.isLoading}>
                        <GoPencil />
                    </Button>
                </IconWrapper>
            </BucketHeader>
            {bucket.name}
            {bucket.recurringAmount}
            {bucket.maximumAmount}
        </BucketItemWrapper>
    );
}

export default BucketItem;

const BucketItemWrapper = styled.div`
  
`;

const BucketHeader = styled.div``;


const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  & button {
    margin: 0 0.25rem;
  }
`;