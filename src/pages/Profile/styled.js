import styled from 'styled-components';
import { Link } from "react-router-dom";
import DateTimePicker from 'react-datetime-picker';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    width: 90%;
    height: 100%;
`;

export const QueueContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

// GLOBAL //

export const TitleText = styled.div`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 450;
    font-size: 22px;
    line-height: 102.6%;

    margin-right: 25px;
`;

export const DescriptionText = styled.div`
    font-family: DM Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 155.8%;
`;

export const ActionText = styled.div`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    text-align: right;
    letter-spacing: 0.08em;
    color: #F59E6A;
    cursor: pointer;
`;

export const ItemKeyText = styled.div`
    font-family: DM Mono;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 155.8%;
`;

export const DescriptionInputText = styled.div`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #8D93AB;
`;

export const LinkText = styled(Link)`
    color: #FFA931;
    text-decoration: none;
    text-align: left;
    align-self: flex-start;
`;

export const ItemDescriptionText = styled.div`

`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`

`;

export const Icon = styled.img`

`;

// HEADER //

export const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 30px;
    margin-bottom: 30px;
`;

// TOP //

export const TopContainer = styled(HeaderContainer)`
    margin-top: 0px;
    margin-bottom: 15px;
    
`;

// QUEUE //

export const LeftContainer = styled(ColumnContainer)`
    width: 30%;
`;

export const LeftItem = styled(RowContainer)`
    width: 100%;
    max-height: 35%;
    background-color: #D6E0F0;
    margin-bottom: 15px;
    padding: 25px 15px 25px 15px;
`;

export const ItemDescription = styled(ColumnContainer)`
    width: 70%;

`;

export const CountDescription = styled(ColumnContainer)`
    width: 35%;
    align-items: end;

`;



export const RightContainer = styled(ColumnContainer)`
    width: 67%;
    display: flex;
    flex-direction: column;
`;

export const ItemIcon = styled.img`
`;

export const RightItem = styled(RowContainer)`
    justify-content: space-between;
    align-items: center;

    height: 64px;
`;


// MODAL // 

export const ModalContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(57, 59, 68, 0.8);
`;

export const ModalContent = styled.form`
    width: 330px;
    height: 430px;
    background-color: #F1F3F8;
    
    padding: 30px 15px;

    display: flex;
    flex-direction: column;
    justify-content:space-between;

`;

export const ModalInputField = styled.input`
    max-width: 100%;
    min-height: 70%;
    background: #D6E0F0;

    border: 0;
    padding: 0 11px;
    margin-top: 5px;
`;

export const ModalTextArea = styled.textarea`
    max-width: 100%;
    min-height: 85%;
    background: #D6E0F0;

    border: 0;
    padding: 11px 11px;
    margin-top: 5px;

    resize: none;
`;

export const ModalInputBlock = styled(ColumnContainer) `
    max-width: 100%;
    height:24%;
    margin-bottom: 15px;
    
`;      

export const ModalInputContainer = styled(ColumnContainer)`
    width: 100%;
    min-height: 70%;
`;

export const ModalSubmitButton = styled.input`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    text-align: right;
    letter-spacing: 0.08em;
    color: #F59E6A;
    cursor: pointer;

    border: 0;
    padding: 0;
`;

export const Calendar = styled(DateTimePicker)`
    max-width: 100%;
    min-height: 70%;
    color: #8D93AB;
`