import styled from "styled-components";
import {useFetchGroupsQuery} from "../../store";
import GroupItem from "./GroupItem";


function GroupList() {
    const { data, error, isFetching } = useFetchGroupsQuery();

    let content;
    if(isFetching) content = <div>Loading...</div>;
    else if(error) content = <div>Error fetching groups</div>;
    else content = data.map(group => <GroupItem key={group.id} group={group} />);

    return(
        <GroupListWrapper>
            {content}
        </GroupListWrapper>
    );
}

export default GroupList;

const GroupListWrapper = styled.div`
  
`;