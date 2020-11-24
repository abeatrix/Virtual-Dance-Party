import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Video from './video.mp4'
import {HeaderContainer, HeaderBG, VideoBG, HeaderContent, HeaderH1} from "./Styled"

const Header = () => {

    return (
        <>
            <HeaderContainer>
                <HeaderBG>
                    <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
                </HeaderBG>
                <HeaderContent>
                        <HeaderH1>vave</HeaderH1>
                </HeaderContent>
            </HeaderContainer>
        </>
    );
}

export default Header;
