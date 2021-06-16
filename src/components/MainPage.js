import React from 'react';
import styled from 'styled-components';
import { ComponentStyle } from '../style/CommonStyle'
const Component = styled.div`
    ${ComponentStyle}
    height: 600px;

`

const MainPage = () => {
    return (
        <div>
            <Component>
                첫번째 컴포넌트
            </Component>
            <Component>
                두번째 컴포넌트
            </Component>
        </div>
    )
};

export default MainPage
