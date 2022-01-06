import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Container, EmailContainer } from './styled'

import logo from '../../../images/profilelogo.png'
import exit from '../../../images/profile/exit.svg'

import { ProfileTitleText, RowContainer } from '../../../globalStyles';

import { AuthContext } from '../../../context/auth.context'

export default function Header() {
    const { logout, userEmail } = useContext(AuthContext)

    const navigate = useNavigate();
    function handleExit() {
        logout();
        navigate('/')
    }

    return (
        <Container>
            <img src={logo}/>

            <EmailContainer>
                <ProfileTitleText style={{marginRight: "25px"}} onClick={() => navigate('/user-profile')}> {userEmail} </ProfileTitleText>
                <img src={exit} onClick={() => handleExit()}/>
            </EmailContainer>
        </Container>
    );
}