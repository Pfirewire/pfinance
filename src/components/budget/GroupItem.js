import styled from "styled-components";
import {useDeleteGroupMutation, useEditGroupMutation} from "../../store";
import {useState} from "react";
import IconButton from "../simple/IconButton";
import {GoPencil, GoTrashcan} from "react-icons/go";
import ExpandablePanel from "../simple/ExpandablePanel";
import BucketList from "./BucketList";


function GroupItem({ group }) {
    const [editGroup, editResults] = useEditGroupMutation();
    const [deleteGroup, deleteResults] = useDeleteGroupMutation();
    const [groupName, setGroupName] = useState(group.name);

    const handleEditGroup = () => {
        editGroup({
            id: group.id,
            name: "edited title",
        });
    };

    const handleDeleteGroup = () => {
        deleteGroup(group);
    };

    const header = (
        <>
            <div>
                {group.name}
            </div>
            <IconWrapper>
                <IconButton className={"delete"} onClick={handleDeleteGroup} loading={deleteResults.isLoading}>
                    <GoTrashcan />
                </IconButton>
                <IconButton className={"edit"} onClick={handleEditGroup} loading={editResults.isLoading}>
                    <GoPencil />
                </IconButton>
            </IconWrapper>
        </>
    );

    return(
        <ExpandablePanel key={group.id} header={header}>
            <BucketList />
        </ExpandablePanel>
    );
}

export default GroupItem;

const GroupItemWrapper = styled.div`
  
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;