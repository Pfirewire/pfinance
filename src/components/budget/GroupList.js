import styled from "styled-components";
import {useAddGroupMutation, useFetchGroupsQuery} from "../../store";
import GroupItem from "./GroupItem";
import AddButton from "../simple/AddButton";


function GroupList() {
    const { data, error, isFetching } = useFetchGroupsQuery();
    const [addGroup, results] = useAddGroupMutation();

    const handleAddGroup = () => {
        addGroup("test");
    }

    let content;
    if(isFetching) content = <div>Loading...</div>;
    else if(error) content = <div>Error fetching groups</div>;
    else content = data.map(group => <GroupItem key={group.id} group={group} />);

    return(
        <GroupListWrapper>
            <GroupListHeaderWrapper>
                <h3>Groups/Categories</h3>
                <AddButton onClick={handleAddGroup} loading={results.isLoading}>
                    + Add Group
                </AddButton>
            </GroupListHeaderWrapper>
            <GroupListContentWrapper>
                {content}
            </GroupListContentWrapper>
        </GroupListWrapper>
    );
}

export default GroupList;

const GroupListWrapper = styled.div`
  
`;

const GroupListHeaderWrapper = styled.div`
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &h3 {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const GroupListContentWrapper = styled.div`
  
`;