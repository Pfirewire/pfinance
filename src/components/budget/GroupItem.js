import styled from "styled-components";
import {useEditGroupMutation} from "../../store";
import {useState} from "react";


function GroupItem({ group }) {
    const [editGroup, results] = useEditGroupMutation;
    const [groupName, setGroupName] = useState(group.name);

    const handleEditGroup = () => {
        editGroup({
            id: group.id,
            name: groupName,
        });
    };

    return(
        <GroupItemWrapper>
            {group.name}
        </GroupItemWrapper>
    );
}

export default GroupItem;

const GroupItemWrapper = styled.div`
  
`;