import styled from "styled-components";
import {useFetchCurrentBudgetQuery} from "../../store";
import {convertMonthIntToString} from "../../utils/dateUtils";

function Budget() {
    const { data, error, isFetching } = useFetchCurrentBudgetQuery();

    let content;
    if(isFetching) content = <div>...Loading</div>;
    else if(error) content = <div>Error retrieving data</div>;
    else content = (
            <>
                {convertMonthIntToString(data.month)}, {data.year}
            </>
        );

    return(
        <BudgetWrapper>
            {content}
        </BudgetWrapper>
    );
}

export default Budget;

const BudgetWrapper = styled.div`
  
`;