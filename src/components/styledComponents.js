import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  font-weight: 400;
  font-family: roboto;
  font-size: 18px;
`

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const CustomHeading = styled.h1`
  color: black;
  font-size: ${props => (props.orderId ? '20px' : 'none')};
  font-family: roboto;
`

export const CustomButton = styled.button`
  width: ${props => props.back && '70px'};
  height: 30px;
  background-color: white;
  border-radius: 30px;
  border: 1.5px solid #064d17;
  font-weight: 600;
  background-color: ${props => props.back && 'white'};
  background-color: ${props => props.approveOrder && '#064d17'};
  font-size: 12px;
  width: ${props => props.approveOrder && '130px'};
  width: ${props => props.addItem && '100px'};
  background-color: ${props => props.approved && '#27c463'};
  border: ${props => props.approved && 'none'};
  font-weight: ${props => props.approved && '500'};
  background-color: ${props => props.missing && 'orange'};
  background-color: ${props => props.missingUrgent && 'red'};
  border: ${props =>
    props.addItem || props.back ? '1.5px solid #064d17' : 'white'};
  color: ${props => (props.addItem || props.back ? '#064d17' : 'white')};
  font-weight: ${props => (props.addItem || props.back ? '600' : '500')};
`
