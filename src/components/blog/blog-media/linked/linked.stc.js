import styled, { css } from "styled-components";
import { themeGet } from '@styled-system/theme-get'
import { device } from '../../../../theme'

export const LinkedWrap = styled.div`
    position: relative;
    padding: 40px 25px 40px;
    background: ${themeGet("colors.themeColor")};
    text-align: center;
    border-radius: 5px;
    ${device.medium}{
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
        width: 20px;
        height: 20px;
        ${device.medium}{
            width: 30px;
            height: 30px;
        }
    }
    a{
        display: block;
        color: ${themeGet("colors.textColor")};
        font-size: 20px;
        word-break: break-word;
        ${device.large}{
            font-size: 25px;
        }
    }
`;