/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from 'react';
import  * as S from './Styles.js';


function Mypage(props) {
    const [ profileImg, setProfileImg] = useState("https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg")

    const profileFileInput = useRef();

    const handleProfileImgChangeClick = () => {
        profileFileInput.current.click();
    }

    const handleProfileImgSelect = (e) => {
        // console.log(e.target.files[0].name);
        const reader = new FileReader(); // FileReader는 자바스크립트안에 내장된 클래스
        reader.onload = (e) => {
            console.log(e.target.result);
        } // 함수 정의 하는것 실행아님 !

        reader.readAsDataURL(e.target.files[0]);
    }

    
    const [profile, setProfile] = useState({
        username: "",
        name: "",
        email: ""
    });

    const handleFrofileInfoChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        })
    }

    const handleProfileInfoSave = () => {
        localStorage.setItem('profile', JSON.stringify(profile));
    } 





    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileImgBox} onClick={handleProfileImgChangeClick}>
                    <img css={S.SProfileImg} src={profileImg} />
                    <input css={S.SFileHidden} type="file" ref={profileFileInput} onChange={handleProfileImgSelect}/>
                </div>
            </div>
            <div css={S.SContainer}>
                <div  css={S.SProfileText}>
                    <label htmlFor="username" css={S.SProfileTextLabel}> 사용자명 </label>
                    <input type="text" name="username"  css={S.SProfileTextInput} onChange={handleFrofileInfoChange}/>
                </div>
                <div css={S.SProfileText}>
                    <label htmlFor="name" css={S.SProfileTextLabel}> 이름 </label>
                    <input type="text" name="name"  css={S.SProfileTextInput} onChange={handleFrofileInfoChange}/>
                </div>
                <div css={S.SProfileText}>
                    <label htmlFor="email" css={S.SProfileTextLabel}> 이메일 </label>
                    <input type="text" name="email"css={S.SProfileTextInput} onChange={handleFrofileInfoChange}/>
                </div> 
                <div  css={S.SLoginBtnContainer}>
                    <button css={S.SSaveBtn} onClick={handleProfileInfoSave}> 저장 </button>
                </div>
            </div>
        </div>
    );
}

export default Mypage;