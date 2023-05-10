import styled from "styled-components";
import {useFetchBudgetQuery} from "../../store";


function GroupList() {
    const { data, error, isFetching } = useFetchBudgetQuery();

    let content;
    if(isFetching) content = <div>Loading...</div>;
    else if(error) content = <div>Error fetching groups</div>;
    else content = data.map(group => <div key={group.id}>{group.name}</div>);

    return(
        <GroupListWrapper>
            {content}
        </GroupListWrapper>
    );
}

export default GroupList;

const GroupListWrapper = styled.div`
  
`;