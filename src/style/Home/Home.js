import styled from '@emotion/styled'

export const Container = styled.div`
    padding-top: 16px;
`

export const Text = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`

export const Title = styled(Text)`
    font-size: 24px;
    text-align: center;
    font-family: 'Poppins-Bold';
    color: #424749;
`

export const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
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
    padding: 20px 20px;
    background-color: #3B4CCA;
    border-radius: 10px;
    width: fit-content;
`