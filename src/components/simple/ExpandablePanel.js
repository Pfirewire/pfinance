import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return(
        <ExpandablePanelWrapper>
            <div className='flex p-2 justify-between items-center'>
                <div className='flex flex-row items-center justify-between'>
                    {header}
                </div>
                <div onClick={handleClick} className='cursor-pointer'>
                    {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
            </div>
            {
                isExpanded &&
                <div className='p-2 border-t'>
                    {children}
                </div>
            }
        </ExpandablePanelWrapper>
    );
}

export default ExpandablePanel;

const ExpandablePanelWrapper = styled.div`
  margin-bottom: 0.5rem;
  border-width: 1px;
  border-radius: 0.25rem;
`;

const ExpandablePanelHeaderWrapper = styled.div`
  
`;

const ExpandablePanelHeader = styled.div`
  
`;

const ExpandablePanelHeaderIcon = styled.div`
  
`;

const ExpandablePanelChildrenWrapper = styled.div`
  
`;