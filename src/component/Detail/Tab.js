import * as Styles from '../../style/Detail/Tab'

export default function Tab({ data, active }) {
    return (
        <Styles.Container onClick={data.click}>
            <Styles.MainText isActive={active === data.key ? true : false}>{data.name}</Styles.MainText>
        </Styles.Container>
    )
}