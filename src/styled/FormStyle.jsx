import { styled } from "styled-components";

export const FormContainer = styled.form`
  /* background-color: pink; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  label{
    margin-right:10px;
    /* font-weight: bold; */
  }
  textarea{
    font-family: var(--fontFamily);
  }
  textarea,input:not([type=radio]):not([type=checkbox]){
    margin-right: 10px;
    border-radius: 10px;
    padding: 8px;
    padding-left: 10px;
    background-color: #eee;
    width: 10rem;
    /* border: none; */
    border: 1px solid #d0cccc;
  }
  input[type=radio],input[type=checkbox]{
    margin-right:10px;
  }
  button{
    width: 15rem;
    padding:10px;
    margin-right: 10px;
    background-color: skyblue;
    border: none;
    color: white;
  }

`
export const ItemWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  label{
    width: 10rem;
  }
`