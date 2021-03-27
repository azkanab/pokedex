import * as Styles from '../../style/Home/Banner'

export default function Banner() {
    return (
        <Styles.BannerContainer>
            <Styles.Banner>
                <Styles.BannerTitle>Hi, Azka!</Styles.BannerTitle>
                <Styles.BannerInformation>You have 6 Pokemon(s) in your Pokedex</Styles.BannerInformation>
                <Styles.PikachuPic src='/pikachu.png' /> 
            </Styles.Banner>
        </Styles.BannerContainer>
    )
}