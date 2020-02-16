import styled from 'styled-components';

 export const FormWrapper = styled.div`{
  .formWrapper{
      background: #dddddd73;
      margin-top: 70px;
      padding: 40px;
      height: 76vh;
      display: flex;
      align-item: center;
      justify-content: center;
  }
  .form{
      background: #fff;
      padding: 30px;
      border-radius: 4px;
      ${'' /* box-shadow: 1px 1px 15px 5px #00000047; */}
      position: relative;
      ${'' /* border-bottom: 5px solid #000; */}

  }
  .red{
    height: 90px;
    width: 90px;
    background: red;
    position: absolute;
    top: -7px;
    border-radius: 4px;
    left: -8px;
    z-index: -1;
  }
  .black{
    height: 90px;
    width: 90px;
    border-radius: 4px;
    background: red;
    position: absolute;
    bottom: -8px;
    right: -7px;
    z-index: -1;
  }
  .input{
      width: 400px;
      background: #dddddd73;
      border-radius: 7px;
      border: none;
      font-size: 18px;
      padding: 10px;
      :focus{
          border: none;
      }
      :placeholder{
          color: red;
      }
  }
  .btn{
      background: rgb(229, 38, 79);
      padding: 0.6em 1.5em;
      border-radius: 7px;
      font-sizes: 0.9em;
      color: #fff;
      text-transform: capitalize;
      border: 2px solid #000;
      :hover{
          background: #fff;
          color: #000;
          border: 2px solid red;
      }
  }
}`;
