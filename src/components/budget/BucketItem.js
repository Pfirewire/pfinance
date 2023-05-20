import styled from "styled-components";


function BucketItem({bucket}) {
    return(
        <BucketItemWrapper>
            {bucket.name}
            {bucket.recurringAmount}
            {bucket.maximumAmount}
        </BucketItemWrapper>
    );
}

export default BucketItem;

const BucketItemWrapper = styled.div`
  
`;