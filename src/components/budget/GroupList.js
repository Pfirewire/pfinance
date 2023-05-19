import styled from "styled-components";
import {useAddGroupMutation, useFetchGroupsQuery} from "../../store";
import GroupItem from "./GroupItem";
import {useState} from "react";
import Button from "../simple/Button";
import Modal from "../simple/Modal";


function GroupList() {
    const { data, error, isFetching } = useFetchGroupsQuery();
    const [addGroup, results] = useAddGroupMutation();
    const [showModal, setShowModal] = useState(false);
    const [addGroupName, setAddGroupName] = useState('');

    const handleAddGroupClick = () => {
        setShowModal(true);
    };

    const handleAddGroupClose = () => {
        setShowModal(false);
        setAddGroupName('');
    };

    const handleAddGroupNameChange = e => {
        setAddGroupName(e.target.value);
    };

    const handleAddGroup = () => {
        addGroup(addGroupName);
        handleAddGroupClose();
    };

    const actionBar = (
        <div>
            <Button onClick={handleAddGroup} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleAddGroupClose} actionBar={actionBar}>
            <input type={"text"} onChange={handleAddGroupNameChange} placeholder={"Group Name"} />
        </Modal>
    );

    let content;
    if(isFetching) content = <div>Loading...</div>;
    else if(error) content = <div>Error fetching groups</div>;
    else content = data.map(group => <GroupItem key={group.id} group={group} />);

    return(
        <GroupListWrapper>
            {showModal && modal}
            <GroupListHeaderWrapper>
                <h3>Groups/Categories</h3>
                <Button onClick={handleAddGroupClick} loading={results.isLoading} primary>
                    + Add Group
                </Button>
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