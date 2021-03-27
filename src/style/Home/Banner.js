import styled from '@emotion/styled'

export const Text = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`

export const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
`

export const BannerTitle = styled(Text)`
    font-size: 16px;
    font-family: 'Poppins-SemiBold';
    color: white;
`

export const BannerInformation = styled(Text)`
    font-size: 14px;
    font-family: 'Poppins-Regular';
    color: white;
`

export const Banner = styled.div`
    padding: 20px 65px 20px 20px;
    background-color: #3B4CCA;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    position: relative;
`

export const PikachuPic = styled.img`
    position: absolute;
    right: -40px;
    height: 86px;
    top: 0;
`