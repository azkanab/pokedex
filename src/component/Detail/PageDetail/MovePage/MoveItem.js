import * as Styles from '../../../../style/Detail/PageDetail/Move'
import uppercaseText from '../../../../utils/uppercaseText'

export default function MoveItem({ move }) {
    return (
        <Styles.MoveItemContainer>
            <div style={{flex: '1'}}>
                <Styles.MoveName>{move && uppercaseText(move.move.name)}</Styles.MoveName>
            </div>
            <Styles.SeparatorLine />
            <div style={{flex: '1'}}>
                <Styles.MoveLevel>Lv. {move && move.version_group_details[0].level_learned_at}</Styles.MoveLevel>
            </div>
        </Styles.MoveItemContainer>
    )
}