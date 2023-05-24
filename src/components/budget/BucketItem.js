import styled from "styled-components";
import Button from "../simple/Button";
import {GoPencil, GoTrashcan} from "react-icons/go";
import {useDeleteBucketMutation, useEditBucketMutation} from "../../store";
import Modal from "../simple/Modal";
import {useState} from "react";


function BucketItem({bucket}) {
    const [editBucket, editResults] = useEditBucketMutation();
    const [deleteBucket, deleteResults] = useDeleteBucketMutation();
    const [showModal, setShowModal] = useState(false);
    const [bucketName, setBucketName] = useState(bucket.name);
    const [bucketRecurringAmount, setBucketRecurringAmount] = useState(bucket.recurringAmount);
    const [bucketMaximumAmount, setBucketMaximumAmount] = useState(bucket.maximumAmount);

    const handleDeleteBucket = () => {
        deleteBucket(bucket);
    };

    const handleEditBucket = () => {
        editBucket({
            id: bucket.id,
            name: bucketName,
            recurringAmount: bucketRecurringAmount,
            maximumAmount: bucketMaximumAmount,
            group : bucket.group
        });
        handleEditBucketClose();
    };

    const handleEditBucketClose = () => {
        setShowModal(false);
        setBucketName(bucket.name);
        setBucketRecurringAmount(bucket.recurringAmount);
        setBucketMaximumAmount(bucket.maximumAmount);
    };

    const handleEditBucketClick = () => {
        setShowModal(true);
    };

    const handleEditBucketNameChange = e => {
        setBucketName(e.target.value);
    }

    const handleEditBucketMaximumChange = e => {
        setBucketMaximumAmount(e.target.value);
    };

    const handleEditBucketRecurringChange = e => {
        setBucketRecurringAmount(e.target.value);
    };

    const modalActionBar = (
        <div>
            <Button onClick={handleEditBucket} primary>Confirm Changes</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleEditBucketClose} actionBar={modalActionBar}>
            <input type={"text"} onChange={handleEditBucketNameChange} value={bucketName} />
            <input type={"number"} onChange={handleEditBucketRecurringChange} value={bucketRecurringAmount} />
            <input type={"number"} onChange={handleEditBucketMaximumChange} value={bucketMaximumAmount} />
        </Modal>
    );

    return(
        <BucketItemWrapper>
            {showModal && modal}
            <BucketName>
                {bucket.name}
            </BucketName>
            <BucketAmount>
                Current: {bucket.currentAmount}
            </BucketAmount>
            <BucketAmount>
                Recurring: {bucket.recurringAmount}
            </BucketAmount>
            <BucketAmount>
                Maximum: {bucket.maximumAmount}
            </BucketAmount>
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

const BucketAmount = styled.div`
  width: 10rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  & button {
    margin: 0 0.25rem;
  }
`;