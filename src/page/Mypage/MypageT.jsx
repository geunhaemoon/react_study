/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useRef, useState } from 'react';
import * as S from './Styles.js';

function MypageT(props) {
    const defaultProfileImgSrc = "https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg";

    const profileImgSrc = localStorage.getItem("profileImg");

    const [ profileImg, setProfileImg ] = useState(!!profileImgSrc ? profileImgSrc : defaultProfileImgSrc);

    const profileFileInput = useRef();

    const localStorageUser = JSON.parse(localStorage.getItem("user"));

    let user = {
        username: localStorageUser?.username && localStorageUser.username,
        name: localStorageUser?.name && localStorageUser.name,
        email: localStorageUser?.email && localStorageUser.email
    }

    const handleProfileImgChangeClick = () => {
        profileFileInput.current.click();
    }

    const handleProfileImgSelect = (e) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            setProfileImg(e.target.result);
            console.log(profileImg);
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        user = {
            ...user,
            [name]: value
        }
    }

    const handleSaveClick = () => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("profileImg", profileImg);
    }
    
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileImgBox} onClick={handleProfileImgChangeClick}>

                    <img css={S.SProfileImg} src={profileImg} />

                    <input css={S.SFileHidden} type="file" ref={profileFileInput} onChange={handleProfileImgSelect} />
                </div>
            </div>
            <div css={S.SContainer}>
                <div css={S.SProfileText}>
                    <label htmlFor="username" css={S.SProfileTextLabel}>사용자명 </label>
                    <input  css={S.SProfileTextInput} type="text" id='username' name="username" onChange={handleInputChange} defaultValue={user.username}/>
                </div>
                <div css={S.SProfileText}>
                    <label htmlFor="name" css={S.SProfileTextLabel}>이름 </label>
                    <input css={S.SProfileTextInput} type="text" id='name' name="name" onChange={handleInputChange} defaultValue={user.name}/>
                </div>
                <div css={S.SProfileText}>
                    <label htmlFor="email" css={S.SProfileTextLabel}>이메일 </label>
                    <input css={S.SProfileTextInput} type="text" id='email' name="email" onChange={handleInputChange} defaultValue={user.email}/>
                </div>
                <div css={S.SLoginBtnContainer}>
                    <button css={S.SSaveBtn} onClick={handleSaveClick}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default MypageT;