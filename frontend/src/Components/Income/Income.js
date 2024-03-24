import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";

function Income() {
  const { addIncome } = useGlobalContext();
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Income</h1>
        <div className="income-contnet">
          <div className="form-container"></div>
        </div>
        <div className="incomes"></div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div``;

export default Income;
