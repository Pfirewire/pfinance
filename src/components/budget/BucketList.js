import styled from "styled-components";
import {useAddBucketMutation, useFetchBucketsByCategoryQuery} from "../../store";
import {useState} from "react";
import CategoryItem from "./CategoryItem";
import BucketItem from "./BucketItem";
import Modal from "../simple/Modal";
import Button from "../simple/Button";


function BucketList({category}) {
    const {data, error, isFetching } = useFetchBucketsByCategoryQuery(category);
    const [addBucket, results] = useAddBucketMutation();
    const [showModal, setShowModal] = useState(false);
    const [bucketName, setBucketName] = useState( "");
    const [bucketRecurringAmount, setBucketRecurringAmount] = useState(0);
    const [bucketMaximumAmount, setBucketMaximumAmount] = useState(0);

    const handleAddBucket = () => {
        const bucketToAdd = {
            name: bucketName,
            recurringAmount: bucketRecurringAmount,
            maximumAmount: bucketMaximumAmount,
            category : category
        };
        console.log(bucketToAdd);
        addBucket(bucketToAdd);
        handleAddBucketClose();
    };

    const handleAddBucketClose = () => {
        setShowModal(false);
        setBucketName("");
        setBucketRecurringAmount(0);
        setBucketMaximumAmount(0);
    };

    const handleAddBucketNameChange = e => {
        setBucketName(e.target.value);
    };

    const handleAddBucketMaximumChange = e => {
        setBucketMaximumAmount(e.target.value);
    };

    const handleAddBucketRecurringChange = e => {
        setBucketRecurringAmount(e.target.value);
    };

    const handleAddBucketClick = () => {
        setShowModal(true);
    };

    const modalActionBar = (
        <div>
            <Button onClick={handleAddBucket} primary>Add Bucket</Button>
        </div>
    );

    const modal = (
      <Modal onClose={handleAddBucketClose} actionBar={modalActionBar}>
          <input type={"text"} onChange={handleAddBucketNameChange} placeholder={"Bucket Name"}/>
          <input type={"number"} onChange={handleAddBucketRecurringChange} placeholder={"Recurring Amount"}/>
          <input type={"number"} onChange={handleAddBucketMaximumChange} placeholder={"Maximum Amount"}/>
      </Modal>
    );

    let content;
    if(isFetching) content = <div>Loading...</div>;
    else if(error) content = <div>Error fetching buckets</div>;
    else content = data.map(bucket => <BucketItem key={bucket.id} bucket={bucket} />);

    return(
        <BucketListWrapper>
            {showModal && modal}
            <BucketListHeader>
                <Button onClick={handleAddBucketClick} loading={results.isLoading} primary>
                    Add Bucket
                </Button>

            </BucketListHeader>
            <BucketListContent>
                {content}
            </BucketListContent>
        </BucketListWrapper>
    );
}

export default BucketList;

const BucketListWrapper = styled.div``;

const BucketListContent = styled.div``;


const BucketListHeader = styled.div` 
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid black;
  border-bottom: 2px solid black;

  &button {
    justify-self: end;
  }
  `;