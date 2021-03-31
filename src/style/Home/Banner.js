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
    @media (max-width: 386px) {
        margin-bottom: 32px;
    }
    @media (max-width: 359px) {
        margin-left: 20px;
        margin-right: 48px;
    }
    @media (max-width: 328px) {
        margin-left: 0px;
        margin-right: 20px;
    }
    
`

export const BannerTitle = styled(Text)`
    font-size: 16px;
    font-family: 'Poppins-SemiBold';
    color: white;
    @media (max-width: 386px) {
        font-size: 15px;
    }
    @media (max-width: 328px) {
        font-size: 14px;
    }
`

export const BannerInformation = styled(Text)`
    font-size: 14px;
    font-family: 'Poppins-Regular';
    color: white;
    @media (max-width: 386px) {
        font-size: 13px;
    }
    @media (max-width: 328px) {
        font-size: 12px;
    }
`

export const Banner = styled.div`
    padding: 20px 65px 20px 20px;
    background-color: #3B4CCA;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    position: relative;
    @media (max-width: 386px) {
        width: 200px;
        padding: 15px 55px 15px 15px;
    }
`

export const PikachuPic = styled.img`
    position: absolute;
    right: -30px;
    height: 86px;
    top: 0;
    @media (max-width: 386px) {
        height: 76px;
    }
    @media (max-width: 328px) {
        height: 70px;
    }
`