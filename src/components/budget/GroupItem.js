import styled from "styled-components";
import {useDeleteGroupMutation, useEditGroupMutation} from "../../store";
import {useState} from "react";
import IconButton from "../simple/IconButton";
import {GoPencil, GoTrashcan} from "react-icons/go";
import ExpandablePanel from "../simple/ExpandablePanel";
import BucketList from "./BucketList";
import Button from "../simple/Button";
import Modal from "../simple/Modal";


function GroupItem({ group }) {
    const [editGroup, editResults] = useEditGroupMutation();
    const [deleteGroup, deleteResults] = useDeleteGroupMutation();
    const [groupName, setGroupName] = useState(group.name);
    const [showModal, setShowModal] = useState(false);

    const handleEditGroupClick = () => {
        setShowModal(true);
    };

    const handleEditGroupClose = () => {
        setShowModal(false);
        setGroupName(group.name);
    };

    const handleEditGroupNameChange = e => {
        setGroupName(e.target.value);
    };

    const handleEditGroup = () => {
        editGroup({
            id: group.id,
            name: groupName,
        });
        handleEditGroupClose();
    };

    const handleDeleteGroup = () => {
        deleteGroup(group);
    };

    const actionBar = (
        <div>
            <Button onClick={handleEditGroup} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleEditGroupClose} actionBar={actionBar}>
            <input type={"text"} onChange={handleEditGroupNameChange} value={groupName} />
        </Modal>
    );

    const header = (
        <>
            <div>
                {group.name}
            </div>
            <IconWrapper>
                <IconButton className={"delete"} onClick={handleDeleteGroup} loading={deleteResults.isLoading}>
                    <GoTrashcan />
                </IconButton>
                <IconButton className={"edit"} onClick={handleEditGroupClick} loading={editResults.isLoading}>
                    <GoPencil />
                </IconButton>
            </IconWrapper>
        </>
    );

    return(
        <>
            {showModal && modal}
            <ExpandablePanel key={group.id} header={header}>
                <BucketList />
            </ExpandablePanel>
        </>
    );
}

export default GroupItem;

const GroupItemWrapper = styled.div`
  
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;