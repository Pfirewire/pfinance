import styled from "styled-components";


function GroupItem({ group }) {
    return(
        <GroupItemWrapper>
            {group.name}
        </GroupItemWrapper>
    );
}

export default GroupItem;

const GroupItemWrapper = styled.div`
  
`;