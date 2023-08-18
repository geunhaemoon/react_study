/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    padding: 20px;
    width: 500px;
    height: 500px;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px 0px ;
    width: 300px;
    
`;

export const SProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    cursor: pointer;
    overflow: hidden;
`;

export const SProfileImg = css`
    width: 100%;
`;

export const SFileHidden = css`
    display: none;

`;

export const SProfileText = css`
    display: flex;
    font-size: 15px;
    margin: 3px auto;


`;

export const SProfileTextLabel = css`
    width: 60px;
    color: #999;
`;

export const SProfileTextInput = css`
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    margin: 0px 5px;
    width: 220px;
`;

export const SLoginBtnContainer = css`
    width: 100%;
`;

export const SSaveBtn = css`
    margin: 15px;
    float: right;
    padding: 5px 10px;
    background-color: white;
    border-radius: 10px;
    border: 1.5px solid #888;
    cursor: pointer;
`;