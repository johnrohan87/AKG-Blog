import styled, { css } from "styled-components";
import { themeGet } from '@styled-system/theme-get';
import { device } from '../../../../theme';

export const BlogQuote = styled.blockquote`
    position: relative;
    padding: 40px 25px 40px;
    background: ${themeGet("colors.themeColor")};
    text-align: center;
    border-radius: 5px;
    ${device.large}{
        padding: 50px 31px 50px;
    }
    ${props => props.layout === 1 && css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ${device.small}{
            min-height: 385px;
        }
        ${device.medium}{
            min-height: 525px;
        }
        ${device.large}{
            min-height: 408px;
        }
		${device.xlarge}{
            min-height: 455px;
        }
    `}
    ${props => props.layout === 2 && css`
        min-height: 270px;
        ${device.large}{
            min-height: 370px;
        }
    `}
    ${props => props.layout === 3 && css`
        padding: 0;
        min-height: 78px;
        display: flex;
        justify-content: center;
        align-items: center;
        ${device.large}{
            padding: 0;
        }
    `}
    .icon{
        width: 30px;
        height: 30px;
    }
    h3{
        font-size: 22px;
        line-height: 1.5;
        margin-bottom: 39px;
        ${props => props.layout === 1 && css`
            ${device.small}{
                margin-bottom: 20px;
            }
        `}
    }
    footer{
        font-size: 18px;
        color: #333;
        margin-bottom: 0;
    }
`;